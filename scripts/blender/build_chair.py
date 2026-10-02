"""Headless Blender script: builds a stylized gaming chair and exports chair.glb.

Run with:
  /Applications/Blender.app/Contents/MacOS/Blender --background --python scripts/blender/build_chair.py
"""

import bpy
import math
import os

OUT_PATH = os.path.join(os.path.dirname(__file__), "..", "..", "public", "models", "chair.glb")


def clear_scene():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete(use_global=False)
    for block in list(bpy.data.meshes):
        bpy.data.meshes.remove(block)


def make_material(name, color, roughness=0.5, metallic=0.0, emission_color=None, emission_strength=0.0):
    mat = bpy.data.materials.new(name=name)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs["Base Color"].default_value = (*color, 1.0)
    bsdf.inputs["Roughness"].default_value = roughness
    bsdf.inputs["Metallic"].default_value = metallic
    if emission_color is not None:
        bsdf.inputs["Emission"].default_value = (*emission_color, 1.0)
        bsdf.inputs["Emission Strength"].default_value = emission_strength
    return mat


def add_bevel(obj, width=0.01, segments=3):
    mod = obj.modifiers.new(name="Bevel", type="BEVEL")
    mod.width = width
    mod.segments = segments
    mod.limit_method = "ANGLE"


def apply_modifiers(obj):
    bpy.context.view_layer.objects.active = obj
    for mod in list(obj.modifiers):
        bpy.ops.object.modifier_apply(modifier=mod.name)


def cube(name, size, loc, mat, rot=(0, 0, 0)):
    bpy.ops.mesh.primitive_cube_add(size=1, location=loc, rotation=rot)
    obj = bpy.context.active_object
    obj.name = name
    obj.scale = (size[0] / 2, size[1] / 2, size[2] / 2)
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    obj.data.materials.append(mat)
    add_bevel(obj, width=0.012, segments=3)
    apply_modifiers(obj)
    bpy.ops.object.shade_smooth()
    for poly in obj.data.polygons:
        poly.use_smooth = False if abs(poly.normal.z) > 0.9 else True
    return obj


def cylinder(name, radius, depth, loc, mat, rot=(0, 0, 0), vertices=24):
    bpy.ops.mesh.primitive_cylinder_add(
        radius=radius, depth=depth, location=loc, rotation=rot, vertices=vertices
    )
    obj = bpy.context.active_object
    obj.name = name
    obj.data.materials.append(mat)
    bpy.ops.object.shade_smooth()
    return obj


def sphere(name, radius, loc, mat):
    bpy.ops.mesh.primitive_uv_sphere_add(radius=radius, location=loc, segments=16, ring_count=10)
    obj = bpy.context.active_object
    obj.name = name
    obj.data.materials.append(mat)
    bpy.ops.object.shade_smooth()
    return obj


def build_chair():
    leather = make_material("Leather", (0.03, 0.03, 0.035), roughness=0.55, metallic=0.0)
    trim = make_material("AccentTrim", (0.02, 0.02, 0.02), roughness=0.4, metallic=0.1,
                          emission_color=(0.55, 0.85, 1.0), emission_strength=0.3)
    metal = make_material("Metal", (0.2, 0.21, 0.23), roughness=0.3, metallic=0.85)
    rubber = make_material("Rubber", (0.02, 0.02, 0.02), roughness=0.8, metallic=0.0)

    parts = []

    # --- Base: 5-star swivel base ---
    hub = cylinder("Hub", 0.05, 0.08, (0, 0, 0.42), metal)
    parts.append(hub)
    for i in range(5):
        angle = (i / 5) * math.tau
        x, y = math.cos(angle) * 0.19, math.sin(angle) * 0.19
        leg = cube(f"Leg{i}", (0.34, 0.035, 0.03), (x, y, 0.4), metal, rot=(0, 0, angle))
        parts.append(leg)
        wheel = sphere(f"Wheel{i}", 0.03, (math.cos(angle) * 0.36, math.sin(angle) * 0.36, 0.37), rubber)
        parts.append(wheel)

    # --- Gas lift cylinder ---
    lift = cylinder("Lift", 0.035, 0.32, (0, 0, 0.58), metal)
    parts.append(lift)

    # --- Seat ---
    seat = cube("Seat", (0.46, 0.46, 0.1), (0, 0, 0.78), leather)
    parts.append(seat)
    seat_trim = cube("SeatTrim", (0.3, 0.02, 0.02), (0, -0.2, 0.84), trim)
    parts.append(seat_trim)

    # --- Backrest (tilted) ---
    back_tilt = -0.18
    back_z = 1.25
    back_y = -0.18
    back = cube("Backrest", (0.44, 0.1, 0.78), (0, back_y, back_z), leather, rot=(back_tilt, 0, 0))
    parts.append(back)
    # Racing-stripe accent down the middle of the backrest
    stripe = cube("BackStripe", (0.08, 0.11, 0.7), (0, back_y, back_z), trim, rot=(back_tilt, 0, 0))
    parts.append(stripe)
    # Headrest bump
    headrest = cube(
        "Headrest", (0.26, 0.12, 0.16),
        (0, back_y - math.sin(back_tilt) * 0.02, back_z + 0.42), leather, rot=(back_tilt, 0, 0)
    )
    parts.append(headrest)

    # --- Armrests ---
    for side in (-1, 1):
        post = cube(f"ArmPost{side}", (0.04, 0.04, 0.22), (side * 0.26, 0.02, 0.93), metal)
        parts.append(post)
        pad = cube(f"ArmPad{side}", (0.08, 0.26, 0.035), (side * 0.26, -0.05, 1.05), leather)
        parts.append(pad)

    # Join everything into one mesh object named "Chair"
    bpy.ops.object.select_all(action="DESELECT")
    for p in parts:
        p.select_set(True)
    bpy.context.view_layer.objects.active = parts[0]
    bpy.ops.object.join()
    chair = bpy.context.active_object
    chair.name = "Chair"

    return chair


def main():
    clear_scene()
    build_chair()

    os.makedirs(os.path.dirname(OUT_PATH), exist_ok=True)
    bpy.ops.export_scene.gltf(
        filepath=os.path.abspath(OUT_PATH),
        export_format="GLB",
        use_selection=False,
        export_apply=True,
    )
    print(f"Exported chair to {os.path.abspath(OUT_PATH)}")


main()
