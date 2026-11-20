# Stephen J. Hornak IV — Portfolio

A static portfolio site built with plain HTML, CSS, and JavaScript. There is no build step and no backend. It runs on GitHub Pages as-is.

## What is where

```text
portfolio/
├── index.html              Home
├── projects.html           All projects, with category filters
├── about.html              About
├── resume.html             Resume
├── contact.html            Contact
├── simulation.html         Full-page simulation viewer
├── projects/               One small page per project (case studies)
│   └── _template.html      Copy this to create a new project page
├── data/
│   ├── site-config.js      Name, email, LinkedIn/GitHub links, resume path, categories
│   └── projects.js         ALL project content lives here
├── simulations/            One folder per simulation
│   ├── wave-particle-duality/
│   └── light-color-bohr-model/
├── assets/
│   ├── images/projects/    One image folder per project
│   ├── documents/          PDFs, including the resume
│   ├── models/             GLB 3D models
│   └── videos/             Local video files
├── css/style.css           All styling
├── js/main.js              Builds the header, footer, cards, and case studies
├── js/vendor/              Google's model-viewer (3D viewer), bundled locally
└── .nojekyll               Tells GitHub Pages to serve every file unchanged
```

For everyday updates you only touch `data/`, `assets/`, `simulations/`, and (for a new project) one small file in `projects/`.

## Preview the site locally

Open a terminal in this folder and run:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>. Press Ctrl+C to stop.

Most pages also work if you double-click `index.html`, but the 3D viewer needs the local server.

## Add a new project

1. **Add the data entry.** Open `data/projects.js`, copy an existing project (from its opening `{` to its closing `},`), paste it where it should appear in the list, and edit it. Give it a new unique `id`, such as `robot-arm`.
2. **Create its page.** Copy `projects/_template.html` to `projects/robot-arm.html`. Inside the copy, change the title, the description, and `data-project="your-project-id"` to `data-project="robot-arm"`. The comment at the top of the file marks each spot.
3. **Add its files.** Put images in `assets/images/projects/robot-arm/` and reference them in the data entry.

The project then appears on the Projects page under each of its categories. Set `featured: true` to show it on the home page. The home page shows the first six featured projects, in the order they appear in the file.

### Project fields

| Field | What it does |
| --- | --- |
| `id` | Unique name. Must match the file name in `projects/` and `data-project` in that file. |
| `title`, `summary` | Shown on cards and at the top of the case study. |
| `categories` | One or more of `engineering-cad`, `digital-fabrication`, `instructional-design`, `interactive-simulations`. |
| `tags` | Skill tags. Cards show the first five. |
| `featured` | `true` to show on the home page. |
| `thumbnail`, `heroImage` | Image paths. Leave as `""` to show a labeled placeholder. The thumbnail (16:10) is used on cards and as the page banner on phones. The hero (21:8) is the banner on larger screens. `heroAlt` describes the hero for screen readers. |
| `glyph` | Icon used in the placeholder: `cad`, `course`, `sim`, `fab`, `lab`, `laser`, `image`. |
| `context` | Short line under the title (course, institution, etc.). |
| `overview`, `challenge`, `role` | Lists of paragraphs. |
| `process` | Any of `intro` (paragraphs), `steps` (numbered, each with `title` and `text`), `list` (bullets), `placeholder` (a note). |
| `workflow` | Optional row of stages, e.g. `["Concept", "CAD Design", ...]`. |
| `tools` | List of tools and methods. |
| `deliverables` | Groups with `title`, `items`, and `by: "me"` or `by: "student"`. |
| `outcomes` | Any of `text`, `stats` (each with `value` and `label`), `charts`, `caveat`, `placeholder`. |
| `gallery` | Groups, each with `title`, optional `note`, and `items`. |
| `simulations` | Live demos (see below). |

A section with nothing in it is left off the page. A gallery group with no items shows as a labeled placeholder. `authorNote` in a gallery group is a private reminder and is never shown.

To add a category, add a line to `categories` in `data/site-config.js`.

## Add images and documents

Put the file in the project's image folder or in `assets/documents/`, then add an item to a gallery group in `data/projects.js`:

```js
{
  title: "CAD screenshots",
  items: [
    { type: "image", src: "assets/images/projects/lego-set-design/assembly.jpg",
      alt: "Onshape assembly of a twelve-part set", caption: "Final assembly", by: "student" },
    { type: "document", src: "assets/documents/lego-design-brief.pdf",
      title: "Design brief", note: "PDF, 3 pages" }
  ]
}
```

- `by: "student"` adds a **Student work** label. `by: "me"` adds a **My work** label. Use these on every image where authorship could be unclear.
- Always write `alt` text that describes the image.
- Keep images under about 400 KB. A width of 1600 pixels is plenty.
- Video: `{ type: "video", src: "assets/videos/clip.mp4", title: "..." }` for a local file, or `{ type: "video", embed: "https://www.youtube-nocookie.com/embed/VIDEO_ID", title: "..." }` for YouTube.
- Onshape link: `{ type: "link", href: "https://cad.onshape.com/...", title: "Public Onshape document" }`.

**Before publishing, check that no file shows student names, faces, grades, or other student information.**

## Add a chart

Charts are drawn by the site from numbers you type into a project's `outcomes` in `data/projects.js`. There is no image to make. Only use aggregate figures (class averages, percentages), never individual student records.

```js
charts: [
  {
    type: "line",                       // "line" or "bar"
    title: "Unit assessment averages, by school year",
    alt: "One or two sentences describing what the chart shows.",
    caption: "Source and any notes.",
    categoryLabel: "Assessment",
    categories: ["Unit 1", "Unit 2", "Unit 3", "Unit 4"],
    unit: "%", decimals: 1, yMin: 60, yMax: 90, yStep: 10,
    marker: { after: 1, label: "Change begins" },   // optional, line charts only
    series: [
      { name: "2024–25", color: 1, values: [78.3, 75.5, 85.2, 77.0], label: [2] },
      { name: "2023–24", color: 2, values: [74.3, 72.0, 68.1, 69.8], label: [2], labelBelow: true }
    ]
  }
]
```

- `color` is `1` (orange) or `2` (green). Charts support up to two series.
- `label` lists which points show their value: `[2]` is the third point, `"all"` is every point.
- Every chart gets a hover tooltip and a "View data table" link automatically.

## Add a learning path

A learning path is the flow chart at the top of a case study's process section. Add `learningPath` to a project in `data/projects.js`:

```js
learningPath: {
  rows: [
    { label: "Across a unit", steps: [ { title: "Goal 3.1", text: "Wave-particle duality" }, ... ] },
    { label: "Inside one learning goal", steps: [ { title: "Watch", text: "Recorded lecture" }, ... ] }
  ],
  band: { title: "Labs, done together as a class", text: "Shown as a highlighted bar under the first row." }   // optional
}
```

Each row can have any number of steps, though four to six reads best.

## Embed a simulation

1. Create a folder such as `simulations/gas-laws/` and put the simulation's files in it. The main file must be named `index.html`.
2. In `data/projects.js`, add an entry to a project's `simulations` list:

```js
{
  id: "gas-laws",                       // unique; used in the full-page link
  title: "Gas Laws Explorer",
  description: "What the simulation does.",
  objectives: ["Objective one", "Objective two"],
  technology: ["HTML", "CSS", "JavaScript"],
  role: "What you did.",
  path: "simulations/gas-laws/index.html",
  screenshots: [],
  source: ""                            // optional link to source code
}
```

Each simulation gets a showcase block with a Launch button, a full-screen button, and an "Open full page" link (`simulation.html#gas-laws`) that has a button back to the portfolio. Simulations run inside an iframe, so their CSS and JavaScript cannot interfere with the site. Inside a simulation, use relative paths (`./script.js`, not `/script.js`).

The two existing simulations (`wave-particle-duality` and `light-color-bohr-model`) are working examples to copy from. The same simulation can be listed under more than one project.

## Add a 3D model

1. Export the model as **GLB**. From Onshape, export as glTF/GLB. From Fusion 360, export OBJ or STL and convert with Blender or an online converter. Aim for under 5 MB.
2. Put the file in `assets/models/`.
3. Add an item to a gallery group:

```js
{ type: "model", src: "assets/models/trophy-base.glb",
  alt: "3D model of a trophy base", caption: "Two-color trophy base", by: "me",
  onshape: "https://cad.onshape.com/..." }   // optional
```

Visitors can rotate, zoom, and inspect the model on desktop and mobile without an account. Delete the placeholder model entry in the Custom CAD project when you add a real one.

## Update the resume

1. Save your final resume as `Stephen-Hornak-Resume.pdf` and replace the file in `assets/documents/`.
2. In `data/site-config.js`, set `resumeIsPlaceholder: false`. This removes the placeholder note.
3. If the text on `resume.html` or `about.html` needs to change, edit those files directly. They are plain HTML.

## Update contact links

In `data/site-config.js`, paste your profile URLs into `linkedin` and `github`. The Contact page shows "Link to be added" while they are empty.

## Deploy to GitHub Pages

First time:

1. Create a new public repository on GitHub, for example `portfolio`.
2. Upload the **contents** of this folder so that `index.html` is at the top level of the repository. From a terminal:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```

3. On GitHub, open **Settings → Pages**. Under "Build and deployment", choose **Deploy from a branch**, select **main** and **/ (root)**, and save.
4. After a minute or two the site is live at `https://YOUR-USERNAME.github.io/portfolio/`.

To publish updates, commit and push:

```bash
git add .
git commit -m "Add new project"
git push
```

All links and asset paths are relative, so the site works under a repository subdirectory, at a user site (`YOUR-USERNAME.github.io`), or on a custom domain without changes.

## Notes

- **Placeholders.** Anything not yet supplied is labeled "Placeholder" on the site. Search `data/projects.js` for `placeholder` to find what remains.
- **Fonts.** IBM Plex is loaded from Google Fonts. If it cannot load, the site falls back to system fonts.
- **Light and dark mode.** The site always opens in light mode. Visitors can switch to dark mode with the button in the header, and the site remembers their choice. The simulations follow the same setting.
- **Search and link previews.** Each page has its own title and description in its `<head>`. Once the site is live you can add an `og:image` tag for link-preview images.
