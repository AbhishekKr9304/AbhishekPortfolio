"""Headless Blender script: builds rounded-shell devices (VR headset, MR headset,
mouse, controller) and exports each to its own .glb in public/models/.

Run with:
  /Applications/Blender.app/Contents/MacOS/Blender --background --python scripts/blender/build_devices.py
"""

import bpy
import math
import os

MODELS_DIR = os.path.join(os.path.dirname(__file__), "..", "..", "public", "models")


def clear_scene():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete(use_global=False)
    for block in list(bpy.data.meshes):
        bpy.data.meshes.remove(block)
    for block in list(bpy.data.materials):
        bpy.data.materials.remove(block)


def make_material(name, color, roughness=0.5, metallic=0.0, emission_color=None,
                   emission_strength=0.0, transmission=0.0):
    mat = bpy.data.materials.new(name=name)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs["Base Color"].default_value = (*color, 1.0)
    bsdf.inputs["Roughness"].default_value = roughness
    bsdf.inputs["Metallic"].default_value = metallic
    if transmission:
        bsdf.inputs["Transmission"].default_value = transmission
    if emission_color is not None:
        bsdf.inputs["Emission"].default_value = (*emission_color, 1.0)
        bsdf.inputs["Emission Strength"].default_value = emission_strength
    return mat


def apply_modifiers(obj):
    bpy.context.view_layer.objects.active = obj
    for mod in list(obj.modifiers):
        bpy.ops.object.modifier_apply(modifier=mod.name)


def rounded_box(name, size, loc, mat, rot=(0, 0, 0), bevel=0.02, subsurf=2, segments=4):
    bpy.ops.mesh.primitive_cube_add(size=1, location=loc, rotation=rot)
    obj = bpy.context.active_object
    obj.name = name
    obj.scale = (size[0] / 2, size[1] / 2, size[2] / 2)
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    obj.data.materials.append(mat)

    bevel_mod = obj.modifiers.new(name="Bevel", type="BEVEL")
    bevel_mod.width = bevel
    bevel_mod.segments = segments
    bevel_mod.limit_method = "ANGLE"

    if subsurf > 0:
        sub_mod = obj.modifiers.new(name="Subsurf", type="SUBSURF")
        sub_mod.levels = subsurf
        sub_mod.render_levels = subsurf

    apply_modifiers(obj)
    bpy.ops.object.shade_smooth()
    return obj


def cylinder(name, radius, depth, loc, mat, rot=(0, 0, 0), vertices=32):
    bpy.ops.mesh.primitive_cylinder_add(
        radius=radius, depth=depth, location=loc, rotation=rot, vertices=vertices
    )
    obj = bpy.context.active_object
    obj.name = name
    obj.data.materials.append(mat)
    bpy.ops.object.shade_smooth()
    return obj


def torus(name, major, minor, loc, mat, rot=(0, 0, 0), major_seg=32, minor_seg=12):
    bpy.ops.mesh.primitive_torus_add(
        major_radius=major, minor_radius=minor, location=loc, rotation=rot,
        major_segments=major_seg, minor_segments=minor_seg,
    )
    obj = bpy.context.active_object
    obj.name = name
    obj.data.materials.append(mat)
    bpy.ops.object.shade_smooth()
    return obj


def sphere(name, radius, loc, mat, segments=20, rings=14):
    bpy.ops.mesh.primitive_uv_sphere_add(radius=radius, location=loc, segments=segments, ring_count=rings)
    obj = bpy.context.active_object
    obj.name = name
    obj.data.materials.append(mat)
    bpy.ops.object.shade_smooth()
    return obj


def join_parts(parts, name):
    bpy.ops.object.select_all(action="DESELECT")
    for p in parts:
        p.select_set(True)
    bpy.context.view_layer.objects.active = parts[0]
    bpy.ops.object.join()
    obj = bpy.context.active_object
    obj.name = name
    obj.location = (0, 0, 0)
    return obj


def export_glb(filename):
    out = os.path.join(MODELS_DIR, filename)
    os.makedirs(MODELS_DIR, exist_ok=True)
    bpy.ops.export_scene.gltf(
        filepath=os.path.abspath(out), export_format="GLB",
        use_selection=False, export_apply=True,
    )
    print(f"Exported {filename}")


def build_vr_headset():
    shell = make_material("VRShell", (0.07, 0.075, 0.085), roughness=0.35, metallic=0.25)
    cushion = make_material("VRCushion", (0.11, 0.1, 0.1), roughness=0.85)
    lens = make_material("VRLens", (0.04, 0.08, 0.1), roughness=0.08, emission_color=(0.3, 0.75, 0.95), emission_strength=0.3)
    metal = make_material("VRMetal", (0.25, 0.26, 0.28), roughness=0.3, metallic=0.8)
    led = make_material("VRLed", (0.03, 0.05, 0.06), emission_color=(0.3, 0.8, 1.0), emission_strength=0.6)

    parts = [
        rounded_box("Visor", (0.46, 0.26, 0.19), (0, 0, 0), shell, bevel=0.05, subsurf=2),
        rounded_box("Cushion", (0.4, 0.22, 0.1), (0, 0, -0.14), cushion, bevel=0.05, subsurf=2),
    ]
    for x in (-0.1, 0.1):
        parts.append(cylinder(f"Lens{x}", 0.055, 0.02, (x, 0, 0.1), lens, rot=(math.pi / 2, 0, 0)))
    for x in (-0.2, 0.2):
        parts.append(sphere(f"Cam{x}", 0.012, (x, 0.08, 0.1), metal))
    parts.append(sphere("Led", 0.008, (0, 0.11, 0.1), led))
    for side in (-1, 1):
        parts.append(rounded_box(f"Arm{side}", (0.03, 0.06, 0.03), (side * 0.22, 0, -0.08), metal,
                                  rot=(0, 0, side * 0.3), bevel=0.01, subsurf=1))
    parts.append(torus("Strap", 0.24, 0.025, (0, 0, -0.26), cushion, rot=(math.pi / 2, 0, 0), minor_seg=10))

    obj = join_parts(parts, "VRHeadset")
    bpy.ops.object.select_all(action="DESELECT")
    obj.select_set(True)
    export_glb("vr-headset.glb")


def build_mr_headset():
    shell = make_material("MRShell", (0.08, 0.09, 0.1), roughness=0.3, metallic=0.35)
    glass = make_material("MRGlass", (0.5, 0.75, 0.9), roughness=0.08, transmission=0.65)
    metal = make_material("MRMetal", (0.25, 0.26, 0.28), roughness=0.3, metallic=0.8)
    fabric = make_material("MRFabric", (0.12, 0.11, 0.12), roughness=0.85)

    parts = [
        rounded_box("Visor", (0.42, 0.22, 0.16), (0, 0, 0), shell, bevel=0.045, subsurf=2),
        rounded_box("Glass", (0.34, 0.12, 0.02), (0, 0, 0.1), glass, bevel=0.01, subsurf=1),
    ]
    for x in (-0.14, 0.14):
        parts.append(cylinder(f"Cam{x}", 0.014, 0.01, (x, 0.04, 0.095), metal, rot=(math.pi / 2, 0, 0), vertices=16))
    parts.append(rounded_box("Band", (0.1, 0.22, 0.02), (0, -0.05, 0.16), fabric, rot=(0.3, 0, 0), bevel=0.01, subsurf=1))
    for side in (-1, 1):
        parts.append(rounded_box(f"Arm{side}", (0.025, 0.05, 0.025), (side * 0.2, -0.06, -0.02), metal,
                                  rot=(0, 0, side * 0.25), bevel=0.008, subsurf=1))

    obj = join_parts(parts, "MRHeadset")
    bpy.ops.object.select_all(action="DESELECT")
    obj.select_set(True)
    export_glb("mr-headset.glb")


def build_mouse():
    shell = make_material("MouseShell", (0.16, 0.17, 0.19), roughness=0.3, metallic=0.4)
    rubber = make_material("MouseRubber", (0.03, 0.03, 0.03), roughness=0.75)
    accent = make_material("MouseAccent", (0.03, 0.05, 0.06), emission_color=(0.3, 0.8, 1.0), emission_strength=0.35)

    parts = [
        rounded_box("Body", (0.14, 0.22, 0.075), (0, 0, 0), shell, bevel=0.045, subsurf=3),
        rounded_box("Seam", (0.004, 0.14, 0.004), (0, 0.03, 0.038), rubber, bevel=0.001, subsurf=0),
        cylinder("Wheel", 0.012, 0.02, (0, 0.02, 0.045), rubber, rot=(math.pi / 2, 0, 0), vertices=20),
        cylinder("Glow", 0.03, 0.004, (0, 0.03, -0.034), accent, vertices=24),
    ]

    obj = join_parts(parts, "Mouse")
    bpy.ops.object.select_all(action="DESELECT")
    obj.select_set(True)
    export_glb("mouse.glb")


def build_controller():
    shell = make_material("CtrlShell", (0.1, 0.11, 0.13), roughness=0.4, metallic=0.2)
    rubber = make_material("CtrlRubber", (0.03, 0.03, 0.03), roughness=0.8)
    accent = make_material("CtrlAccent", (0.03, 0.05, 0.06), emission_color=(0.3, 0.8, 1.0), emission_strength=0.3)
    button = make_material("CtrlButton", (0.3, 0.31, 0.33), roughness=0.4, metallic=0.5)

    parts = [
        rounded_box("Body", (0.3, 0.15, 0.08), (0, 0, 0), shell, bevel=0.035, subsurf=2),
    ]
    for side in (-1, 1):
        parts.append(cylinder(f"Grip{side}", 0.035, 0.1, (side * 0.17, 0.02, -0.06), rubber,
                               rot=(side * 0.35, 0, 0), vertices=20))
    for x in (-0.09, 0.09):
        parts.append(cylinder(f"Stick{x}", 0.035, 0.015, (x, 0, 0.055), rubber, vertices=24))
        parts.append(torus(f"StickRing{x}", 0.03, 0.004, (x, 0, 0.062), accent, minor_seg=10))
    for i, dz in enumerate([0.05, 0.035, 0.02, 0.035]):
        dx = [0, 0.012, 0, -0.012][i]
        parts.append(sphere(f"Btn{i}", 0.008, (0.2 + dx, dz - 0.035, 0.05), button, segments=10, rings=8))
    parts.append(torus("TrackRing", 0.19, 0.012, (0, 0, 0.02), accent, major_seg=28, minor_seg=10))

    obj = join_parts(parts, "Controller")
    bpy.ops.object.select_all(action="DESELECT")
    obj.select_set(True)
    export_glb("controller.glb")


def main():
    for builder in (build_vr_headset, build_mr_headset, build_mouse, build_controller):
        clear_scene()
        builder()


main()
