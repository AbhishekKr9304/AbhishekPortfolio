# Abhishek Kumar — XR Developer Portfolio

An interactive portfolio for **Abhishek Kumar**, XR Developer & XR Team Lead at the IITD-AIA Foundation For Smart Manufacturing. It showcases AR, VR and MR work for industrial training, and is built to *feel* like an XR experience: a headset-style boot screen, a gaze-reticle cursor, a real-time 3D hero, HUD overlays and a light game layer that rewards exploration.

- **Email:** kumarabhishek022412@gmail.com
- **LinkedIn:** [linkedin.com/in/abhishekkumar9304](https://www.linkedin.com/in/abhishekkumar9304)
- **GitHub:** [github.com/AbhishekKr9304](https://github.com/AbhishekKr9304)
- **Resume:** [`public/resume/Abhishek-Kumar-XR-Developer-Resume.pdf`](public/resume/Abhishek-Kumar-XR-Developer-Resume.pdf)

---

## Contents

- [Highlights](#highlights)
- [Projects](#projects)
- [Experience](#experience)
- [Skills](#skills)
- [Site sections](#site-sections)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Updating content](#updating-content)
- [Theming](#theming)
- [Animation and XR effects](#animation-and-xr-effects)
- [Game layer](#game-layer)
- [Accessibility](#accessibility)
- [Deployment](#deployment)

---

## Highlights

| Feature | What it does |
|---|---|
| **Headset boot sequence** | A short "AK // XR OS" boot screen on the first visit of each session, closing with a lens-iris reveal. Skippable. |
| **Real-time 3D hero** | A floating icosahedron with orbiting rings and particles (React Three Fiber). Follows the mouse, reacts to scroll, and pauses when off-screen. |
| **Passthrough HUD** | Viewfinder corners and live readouts on the hero: pointer X/Y/Z, scroll depth and a real FPS counter. |
| **Gaze reticle cursor** | A VR-style reticle replaces the mouse cursor on desktop and fills like a dwell timer over links and buttons, including inside popups. |
| **3D scroll reveals** | Every element animates in on scroll with one of five 3D styles: rise, flip, left, right and zoom. |
| **Decoding labels** | Section labels such as `03 // PROJECTS` decode from random glyphs as they scroll into view. |
| **Workflow pipeline** | The development workflow lights up stage by stage as a beam travels along it with the scroll. |
| **Hologram cards** | XR Lab and Playground cards get a scanline sweep and flicker on hover. |
| **3D tilt cards** | Project cards tilt toward the cursor, with a moving glare and layered depth. |
| **Warp tunnel** | Frames rush toward the viewer behind the Contact section. |
| **Image lightbox** | Project galleries open full-screen with captions, arrow-key navigation and slide transitions. |
| **Dark / light themes** | A theme switch with a circular reveal animation. Follows the OS setting until the visitor chooses. |
| **Exploration game** | Zones, XP, ranks, quests, a quest log with a world map, and a hidden cheat code. |

---

## Projects

Each project has its own case-study page at `/projects/<slug>` with an overview, objective, problem, project flow, features, role, challenges, solutions, results, a video and an image gallery.

| Project | Type | Slug |
|---|---|---|
| Lumax Dharuhera VR Training | VR | `lumax-dharuhera-vr-training` |
| SmartLab XR | MR | `smartlab-xr` |
| FSM Smart Intro | AR | `fsm-smart-intro` |
| FSM Virtual Tour | VR | `fsm-virtual-tour` |
| Robotic Welding Cell VR | VR | `robotic-welding-cell-vr` |
| Pneumatic Trainer VR | VR | `pneumatic-trainer-vr` |
| AR Maintenance | AR | `ar-maintenance` |
| MR Product Visualization | MR | `mr-product-visualization` |
| MR Product Logistics | MR | `mr-product-logistics` |
| VMC AR | AR | `vmc-ar` |
| Autonomous Mobile Robot (AMR) — CAD Modelling & Gazebo Simulation | Product Design · Mechanical | `amr-cad-gazebo-simulation` |

XR projects appear under **Featured Projects** on the homepage; mechanical work appears under **Product Design Engineering**.

---

## Experience

All roles are at the **IITD-AIA Foundation For Smart Manufacturing**.

| Role | Period | Focus |
|---|---|---|
| XR Developer & XR Team Lead | Feb 2025 – Present | Team leadership, AR / VR / MR, WebXR, Unity, industrial training |
| XR Developer (Contract) | Aug 2024 – Feb 2025 | XR, WebGL, 3D, Unity, Blender, Meta Quest |
| VR Developer & Designer Intern | Feb 2024 – Aug 2024 | VR, Unity, Meta Quest, XR Interaction Toolkit, Blender, Figma |
| AR Developer Intern | 2023 · 2 months | AR, Unity, Vuforia, image targets, Blender, Figma, Firebase |

---

## Skills

| Area | Tools |
|---|---|
| XR | Unity, Meta Quest, Meta XR SDK, XR Interaction Toolkit, AR Foundation, Vuforia |
| Development | C#, TypeScript, React, Next.js |
| 3D | Blender, Fusion 360, SolidWorks |
| Web | WebGL, Three.js, Tailwind CSS |
| Tools | Git, GitHub, Firebase, Figma |

---

## Site sections

The homepage is one long scroll. Each section is also a "zone" in the game layer.

| # | Section | Purpose |
|---|---|---|
| 00 | Entry (Hero) | Name, role, 3D scene and HUD |
| — | Skills banner | Every skill as a static wrapped list |
| 01 | About | Short introduction |
| 02 | What I Build | Areas of focus |
| 03 | Projects | XR case studies |
| 04 | Product Design | Mechanical and product design work |
| 05 | Technical Arsenal | Skills grouped by area |
| 06 | Workflow | Research → Deployment pipeline |
| 07 | Experience | Career timeline |
| 08 | Workshops | XR training sessions delivered |
| 09 | Achievements | Recognition |
| 10 | XR Lab | Research directions in progress |
| 11 | Playground | Small interactive experiments |
| 12 | Contact | Email, LinkedIn, GitHub, resume |

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack), static generation for project pages |
| UI | React 19, TypeScript 5 |
| Styling | Tailwind CSS 4 with CSS-variable design tokens |
| Animation | [Motion](https://motion.dev) (formerly Framer Motion) |
| 3D | [Three.js](https://threejs.org), [React Three Fiber](https://r3f.docs.pmnd.rs), [Drei](https://drei.docs.pmnd.rs) |
| Fonts | Geist and Geist Mono via `next/font` |
| Hosting | [Vercel](https://vercel.com) |

> **Note:** Next.js 16 has breaking changes from earlier versions. Check `node_modules/next/dist/docs/` before changing framework-level code (see `AGENTS.md`).

---

## Getting started

Requires **Node.js 20.9 or newer** (developed on Node 22).

```bash
git clone https://github.com/AbhishekKr9304/AbhishekPortfolio.git
cd AbhishekPortfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | Purpose |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build (also type-checks) |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout: theme script, providers, nav, game HUD
│   ├── page.tsx                # Homepage: assembles all sections
│   ├── globals.css             # Theme tokens (dark + light) and global effects
│   └── projects/[slug]/        # Case-study page for each project
├── components/
│   ├── sections/               # One component per homepage section
│   ├── project/                # Project card, hero, gallery (lightbox), case-study blocks
│   ├── layout/                 # Site nav (Index menu), footer, skip link
│   ├── ui/                     # Reveal, TiltCard, Section, ThemeToggle, ScrollProgress…
│   ├── xr/                     # Boot sequence, gaze reticle, HUD, scramble text, pipeline, warp tunnel
│   ├── three/                  # HeroScene (React Three Fiber)
│   ├── game/                   # Player HUD, quest log, toasts, level-up overlay
│   └── motion/                 # MotionConfig provider (reduced-motion support)
├── data/                       # All site content (see below)
├── lib/
│   ├── game/                   # Game store, quests, levels, page tracking
│   ├── motion/                 # Pointer parallax hook
│   ├── theme.ts                # Theme hook + setter
│   └── themeScript.ts          # Pre-paint theme script (prevents a flash)
└── types/                      # Shared TypeScript types

public/
├── ProjectsImage/<Folder>/     # Gallery images, one folder per project
└── resume/                     # Resume PDF
```

---

## Updating content

All content lives in `src/data/`, so no component changes are needed for routine updates.

| File | Controls |
|---|---|
| `projects.ts` | Projects, case studies, videos and galleries |
| `experience.ts` | Experience timeline |
| `skills.ts` | Technical Arsenal and the skills banner |
| `lab.ts` | XR Lab and Playground cards |
| `whatIBuild.ts` | What I Build cards |
| `workflow.ts` | Workflow pipeline steps |
| `workshops.ts` | Workshops & Seminars |
| `achievements.ts` | Achievements |
| `contact.ts` | Email, LinkedIn, GitHub and resume links |
| `nav.ts` | Section order (also sets the `00 //` numbering and game zones) |

### Add a project

1. Add an entry to `src/data/projects.ts` following the `Project` type in `src/types/project.ts`.
2. Set `discipline` to `"XR"` (Featured Projects) or `"Product Design"` (Product Design section).
3. The page is generated automatically at `/projects/<slug>`.

### Add gallery images

1. Put images in `public/ProjectsImage/<ProjectFolder>/`.
2. Add them to the project's `gallery` array:

```ts
gallery: [
  {
    type: "image",
    src: "/ProjectsImage/ProjectFolder/Screenshot-1.png",
    alt: "What the image shows, for screen readers",
    caption: "Short caption shown in the lightbox",
  },
],
```

- Paths are **case-sensitive** on Vercel: `Capture.JPG` and `Capture.jpg` are different files.
- Write spaces in file names as `%20` in `src` (for example `Capture%201.JPG`), or rename the files to avoid spaces.
- **Commit the image folders.** New folders are untracked until you `git add` them, and won't exist on the live site otherwise.

### Add an experience entry

Add an object to `experienceEntries` in `src/data/experience.ts`, newest first. Each tag in `focus` must be its own string: `["Unity", "Blender"]`, not `["Unity, Blender"]`.

---

## Theming

Colours are CSS variables defined at the top of `src/app/globals.css`, once for dark (`:root`) and once for light (`:root[data-theme="light"]`). Tailwind utilities such as `bg-surface`, `text-muted` and `text-accent` read from these variables, so changing a value updates the whole site.

| Token | Dark | Light |
|---|---|---|
| `background` | `#0a0b0d` | `#f5f7fa` |
| `foreground` | `#f2f3f5` | `#0e1116` |
| `surface` | `#15171b` | `#ffffff` |
| `border` | `#2a2e35` | `#d5dbe3` |
| `muted` | `#9aa0a8` | `#525c6b` |
| `accent` | `#7dd3fc` | `#0369a1` |
| `warn` | `#fbbf24` | `#b45309` |

Every text/background pairing keeps **at least 5:1 contrast** in both themes. Re-check the ratio if you change a colour.

The theme is applied by a small script in `<head>` before the first paint, so the page never flashes the wrong theme. The 3D hero scene has its own palette per theme in `src/components/three/HeroScene.tsx`.

---

## Animation and XR effects

| Component | File | Notes |
|---|---|---|
| `Reveal` | `components/ui/Reveal.tsx` | Scroll-in animation. `variant`: `rise` (default), `flip`, `left`, `right`, `zoom`; `delayMs` for staggering |
| `TiltCard` | `components/ui/TiltCard.tsx` | Mouse-driven 3D tilt with glare. Children can use `[transform:translateZ(..)]` to pop forward |
| `HeroScene` | `components/three/HeroScene.tsx` | Lazy-loaded on the client; stops rendering when the hero is off-screen |
| `HeroHUD` | `components/xr/HeroHUD.tsx` | Readouts write straight to the DOM to avoid re-renders |
| `GazeReticle` | `components/xr/GazeReticle.tsx` | Rendered as a top-layer `popover` so it stays above modal dialogs |
| `BootSequence` | `components/xr/BootSequence.tsx` | Once per browser session; skipped for reduced motion |
| `ScrambleText` | `components/xr/ScrambleText.tsx` | Decode effect for section labels |
| `WorkflowPipeline` | `components/xr/WorkflowPipeline.tsx` | Scroll-linked beam and stage activation |
| `WarpTunnel` | `components/xr/WarpTunnel.tsx` | Scroll-linked rings behind Contact |

To remove an effect, delete its single line from `src/app/layout.tsx` (boot screen, reticle, game) or the relevant section component.

---

## Game layer

Visitors earn XP by exploring. Progress is saved in their browser and can be reset from the quest log.

- **Zones:** each homepage section is a zone worth **50 XP** on first discovery.
- **Ranks:** Visitor → Explorer → Builder → Spatial Thinker → XR Pioneer → Reality Architect.
- **Player badge** (bottom-left): level, XP ring, zones and quests found. Click it to open the **quest log**, with an XP bar, a world map that jumps to any discovered zone, and the quest list.

| Quest | How to complete | XP |
|---|---|---|
| Press Start | Leave the entry zone | 50 |
| Halfway There | Discover half of all zones | 100 |
| Cartographer | Discover every zone | 300 |
| Navigator | Open the Index | 50 |
| Inspector | Open a project case study | 150 |
| Curator | Open three different case studies | 200 |
| Speedrunner | Reach Contact within 45 seconds | 150 |
| Open a Channel | Click a contact link | 150 |
| *Secret* | ↑ ↑ ↓ ↓ ← → ← → B A | 250 |

Quests, XP values and rank thresholds are all in `src/lib/game/quests.ts`.

---

## Accessibility

- Every text/background pairing meets **at least 5:1 contrast** in both themes.
- With **reduced motion** turned on in the OS, the site turns off movement: there's no boot screen or 3D tilt, the normal cursor is used, the 3D scene renders a single still frame, and reveals become simple fades.
- Section labels, toasts and the quest log announce their real text to screen readers; decorative layers are hidden from them.
- Popups use native `<dialog>` elements, so focus is trapped and **Esc** closes them.
- A skip link jumps straight to the main content, and all interactive elements work with the keyboard.

---

## Deployment

The site deploys on **Vercel** from this GitHub repository.

- Pushing to **`main`** triggers a production deployment automatically (about 1–2 minutes).
- Pushing to any other branch creates a separate **preview** deployment.
- Check progress under **Vercel → Project → Deployments**. If a deployment fails, open it and read the build log; `npm run build` locally reproduces the same checks.
