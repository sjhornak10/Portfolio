/* ==========================================================================
   PROJECT DATA
   --------------------------------------------------------------------------
   Every project on the site comes from this one list. The home page, the
   Projects page, the category filters, and each case study read from it.

   TO ADD A PROJECT
     1. Copy one of the entries below (from its opening { to its closing },)
        and paste it at the place in the list where it should appear.
     2. Give it a new, unique id (lowercase, hyphens, no spaces).
     3. Copy projects/_template.html to projects/<your-id>.html and change the
        id, title, and description near the top of that file.
     4. Put images and documents in assets/images/projects/<your-id>/ and
        assets/documents/ and reference them here.
   See README.md for full instructions and every available field.

   WRITING TIPS
     - Text goes inside "double quotes". If the text itself needs a double
       quote, write \" instead.
     - Every item in a list ends with a comma, except the last one.
     - Paths are written from the site root, e.g.
       "assets/images/projects/lego-set-design/cad-01.jpg"

   GALLERY ITEM TYPES (use inside a gallery group's items: [ ... ])
     { type: "image",    src: "...jpg", alt: "Describe the image", caption: "...", by: "me" }
     { type: "image",    src: "...jpg", alt: "...", caption: "...", by: "student" }
     { type: "video",    src: "assets/videos/clip.mp4", title: "...", caption: "..." }
     { type: "video",    embed: "https://www.youtube-nocookie.com/embed/VIDEO_ID", title: "..." }
     { type: "document", src: "assets/documents/file.pdf", title: "...", note: "PDF, 4 pages" }
     { type: "model",    src: "assets/models/part.glb", alt: "...", caption: "...", onshape: "https://cad.onshape.com/..." }
     { type: "link",     href: "https://cad.onshape.com/...", title: "...", note: "Public Onshape document" }

   A gallery group with an empty items list shows a labeled placeholder.
   In a gallery group, "note" is shown to visitors. "authorNote" is a private
   reminder for you and is never shown on the site.
   ========================================================================== */

window.PROJECTS = [

  /* ------------------------------------------------------------------ 1 */
  {
    id: "lego-set-design",
    title: "Original LEGO Set Design Curriculum",
    summary: "An engineering design unit in which students design, model, 3D print, and document an original LEGO-compatible set.",
    categories: ["engineering-cad", "instructional-design"],
    tags: ["Onshape", "Parametric CAD", "FDM 3D printing", "Tolerances", "Technical drawings", "Curriculum design"],
    featured: true,
    glyph: "cad",
    thumbnail: "assets/images/projects/lego-set-design/lego-thumb.svg",
    heroImage: "assets/images/projects/lego-set-design/lego-hero.svg",
    heroAlt: "Graphic: Design. Model. Manufacture. Three stages are shown: a sketch on paper, a dimensioned CAD part, and a part being 3D printed.",
    context: "PLTW Introduction to Engineering Design · Canvas LMS module",

    overview: [
      "This is a comprehensive engineering design unit I developed independently for my PLTW Introduction to Engineering Design course. Students take on the role of a LEGO set designer and design an original set that can be built both digitally and physically.",
      "The unit is delivered as a single Canvas module of 30 items: four lesson pages, 13 graded assignments, two quizzes, an optional extension challenge, and supporting videos and references. It ends with a 200-point engineering notebook that documents the whole process."
    ],

    challenge: [
      "The unit brings a complete product development cycle into a single project, and it asks students to treat LEGO as a precision-manufactured system and not as a toy. Their custom part has to connect to that system, so tolerance and fit become real problems to solve.",
      "Every student set has to meet the same engineering constraints:",
      "<ul><li>Fewer than 100 total pieces, using standard LEGO bricks wherever possible</li><li>At least one custom LEGO-compatible part, designed and 3D printed by the student</li><li>No more than 30 g of PLA in total for all custom parts</li><li>Buildable in real life and as an Onshape assembly</li><li>Buildable by another person using only the student's instructions</li></ul>"
    ],

    role: [
      "I independently developed the curriculum, engineering requirements, project constraints, instructional materials, and assessment structure. That includes the lesson pages, assignment instructions, submission templates, the design brief template, and the notebook rubric.",
      "<strong>The LEGO sets are designed and built by students.</strong> Any student work shown on this page is labeled as student work and is separate from the curriculum materials I created.",
      "The module also points students to outside resources, such as published LEGO instruction manuals, documentary videos, and a parts guide. Those are reference material and are not my work."
    ],

    process: {
      intro: ["The module is sequenced in five stages. Students study the existing system first, and they build a physical prototype with real bricks before they open CAD."],
      steps: [
        { title: "Study the system", text: "Students examine LEGO as an engineered system: standardization, tolerances, and interference fits. They analyze how wordless instruction manuals communicate a build, then reverse engineer real bricks by hand. Two short checks confirm understanding before the design work starts." },
        { title: "Define the product", text: "After the design challenge launch, students brainstorm at least three set concepts, select one with a written justification, draw concept sketches and a multiview drawing, and write a design brief covering the problem statement, criteria, constraints, risks, and custom part plan." },
        { title: "Prototype, then model", text: "Students build a physical prototype from classroom bricks to test structure, stability, piece count, and build sequence. They then model the full set as an Onshape assembly that is fully mated, organized, and matched to the prototype." },
        { title: "Engineer the custom part", text: "A mini lesson on tolerance and fit covers loose, transition, and interference fits and the variation that FDM printing adds. Students model a parametric part on the 8 mm stud spacing and document it in a fully dimensioned drawing. They must explain their tolerance reasoning and get approval before printing, then test fit and connection strength and revise." },
        { title: "Assemble and document", text: "Students complete the final assembly physically and in CAD, then produce LEGO-style build instructions with exploded views, sub-assemblies, and a bill of materials. The engineering notebook brings every phase together, and an optional extension invites students to design a custom minifigure accessory." }
      ]
    },

    tools: ["Canvas LMS", "Onshape", "Parametric modeling", "Multicomponent assemblies", "Dimensional tolerances", "Technical drawings", "Exploded views", "Bills of materials", "FDM 3D printing (PLA)", "Cura slicer", "Engineering notebooks"],

    deliverables: [
      {
        title: "What I created",
        by: "me",
        items: ["A 30-item Canvas module", "Four lesson pages, including a mini lesson on tolerance and fit", "Instructions for 13 graded assignments and one optional extension", "Submission templates for each project phase", "A two-page design brief template", "A print approval process for custom parts", "A 200-point engineering notebook rubric"]
      },
      {
        title: "What students produce",
        by: "student",
        items: ["A physical LEGO-compatible set of fewer than 100 pieces", "A matching, fully mated Onshape assembly", "At least one custom 3D-printed part", "Concept sketches and a multiview drawing", "A fully dimensioned technical drawing of the custom part", "Build instructions with exploded views and a bill of materials", "An engineering notebook"]
      },
      {
        title: "Engineering notebook rubric (200 points)",
        by: "me",
        items: ["Problem definition and design brief: 20", "Brainstorming and idea development: 20", "Concept selection and sketches: 20", "Physical prototype and iteration: 20", "CAD modeling: 20", "Custom part design and drawing: 20", "Printing and testing: 10", "Final assembly: 20", "Instruction creation: 20", "Final reflection: 20", "Visual communication: 10"]
      },
      {
        title: "Standard for the notebook",
        by: "me",
        items: ["The notebook must communicate the design on its own, without opening Onshape or asking the student questions.", "Writing has to explain the thinking behind decisions and not only list what was done.", "It must show evidence of iteration and design changes."]
      }
    ],

    outcomes: {
      placeholder: "Results and outcomes for this unit have not been added yet."
    },

    gallery: [
      { title: "Project instructions", note: "The design brief and instructions given to students.", items: [] },
      { title: "Canvas module walkthrough", note: "A screenshot of the module and a short narrated walkthrough.", authorNote: "Record from a blank copy of the course so no student names appear.", items: [] },
      { title: "CAD screenshots", authorNote: "Onshape part studios and assemblies. Label each image as my work or student work.", items: [] },
      { title: "Technical drawings", note: "Fully dimensioned drawings of custom parts.", items: [] },
      { title: "Physical prototype photographs", authorNote: "Printed parts and finished sets. Photos must not show students or student names.", items: [] },
      { title: "Assembly instructions", note: "Student-made build instructions with exploded views.", items: [] },
      { title: "Example engineering documentation", authorNote: "Notebook pages, bills of materials, and exploded views, with student names removed.", items: [] }
    ]
  },

  /* ------------------------------------------------------------------ 2 */
  {
    id: "modern-classroom-chemistry",
    title: "Modern Classroom Chemistry",
    summary: "A self-paced Chemistry I learning environment built in Canvas LMS on the Modern Classroom instructional model, evaluated with classroom research.",
    categories: ["instructional-design"],
    tags: ["Canvas LMS", "Modern Classroom model", "Self-paced learning", "Instructional video", "Mastery assessment", "Classroom research"],
    featured: true,
    glyph: "course",
    thumbnail: "assets/images/projects/modern-classroom-chemistry/mastery-thumb.svg",
    heroImage: "assets/images/projects/modern-classroom-chemistry/mastery-hero.svg",
    heroAlt: "Graphic: Blended. Self-paced. Mastery-based. A student attempts on paper, gets feedback in person, and either revises and retakes with new questions or moves on.",
    context: "Chemistry I",

    overview: [
      "I developed and implemented a self-paced Chemistry I learning environment using Canvas LMS and the Modern Classroom instructional model.",
      "The course combines instructional videos, guided learning materials, and self-paced lessons with mastery checks. A student has to show mastery of each learning goal before moving on, and keeps working at it until they do. The bar is 8 out of 10 on that goal's mastery check."
    ],

    challenge: [
      "The goal was to move Chemistry I to a self-paced, mastery-based structure in which each student can work through instruction at an appropriate pace, with differentiated learning experiences and clear evidence of mastery along the way."
    ],

    role: [
      "I developed the course and implemented it in my own classroom, beginning with Unit 3 of the 2024–2025 school year. I also conducted classroom research evaluating the instructional approach and presented the findings to school and district staff."
    ],

    /* The flow chart at the top of the process section. See README.md, "Add a learning path". */
    learningPath: {
      rows: [
        {
          label: "Across a unit (Unit 3: Electrons)",
          steps: [
            { title: "Goal 3.1", text: "Wave-particle duality" },
            { title: "Goal 3.2", text: "The Bohr model and spectroscopy" },
            { title: "Goal 3.3", text: "Orbitals" },
            { title: "Goal 3.4", text: "Electron configurations" },
            { title: "End of unit", text: "End-of-unit lab and unit assessment" }
          ]
        },
        {
          label: "Inside one learning goal, at the student's own pace (Goal 3.1)",
          steps: [
            { title: "Watch", text: "My recorded lecture with captions and built-in questions, plus supporting videos" },
            { title: "Explore", text: "Wave-particle duality simulation" },
            { title: "Read", text: "Reading 5.1, Electromagnetic Spectrum" },
            { title: "Practice", text: "Practice 3.1 worksheet" },
            { title: "Mastery check", text: "Students move on once they show mastery" }
          ]
        },
        {
          label: "The mastery check",
          steps: [
            { title: "New questions", text: "Drawn at random from that learning goal's question bank, so every attempt is different" },
            { title: "On paper", text: "The student answers by hand on the mastery check form" },
            { title: "In person", text: "They bring it to me and get feedback immediately, face to face" },
            { title: "Not yet", text: "Below 8 of 10. Review, revise, and retake with new questions, as many times as it takes" },
            { title: "Mastery", text: "8 of 10 or higher. The student moves on to the next learning goal" }
          ]
        }
      ],
      band: {
        title: "Labs, done together as a class",
        text: "Labs are generally built around a phenomenon, so every student gains from them no matter where they are in the self-paced sequence. Each unit also ends with a lab."
      }
    },

    process: {
      intro: [
        "Each unit is divided into learning goals, and each learning goal is its own sequence in Canvas. Students work through the sequence in order and finish with a mastery check.",
        "I open my courses with a lesson on growth mindset: a bridge-building challenge where failure is likely, a lesson on neuroplasticity, examples of famous failures, and a student reflection. The course structure is built to match it. A mastery check that comes back as \"not yet\" is a normal step in learning, followed by feedback and another attempt.",
        "The mastery check is the gate. Students take it on paper, bring it to me, and get feedback in person right away. They retake it until they show mastery, which means at least 8 out of 10. Each learning goal has its own question bank, so a retake is a new set of questions and not a second try at the same ones.",
        "Self-pacing does not mean students work alone all the time. Labs are generally phenomenon-based, which means the whole class can do them together and every student gets value from them, whether they are ahead of the pace or behind it. End-of-unit labs bring the class back together again."
      ],
      list: [
        "Instructional videos",
        "Guided learning materials",
        "Self-paced lessons",
        "Mastery checks",
        "Phenomenon-based labs and end-of-unit labs",
        "Assessments and rubrics",
        "Differentiated learning experiences"
      ]
    },

    tools: ["Canvas LMS", "Modern Classroom Project instructional model", "Instructional video production", "Mastery-based assessment", "Rubric design", "Learning-outcome analysis"],

    deliverables: [
      {
        title: "Course components",
        by: "me",
        items: ["Instructional videos", "Guided learning materials", "Self-paced lessons", "Mastery checks", "Phenomenon-based labs and end-of-unit labs", "Assessments and rubrics", "Differentiated learning experiences", "Research presentation for school and district staff"]
      }
      ,{
        title: "Mastery check rubric",
        by: "me",
        items: [
          "<strong>Exceptional Mastery (A).</strong> Deep and comprehensive understanding. The student could confidently explain or teach the material to others.",
          "<strong>Sufficient Mastery (B).</strong> Strong understanding, with only minor errors or gaps.",
          "<strong>Basic Revision (C).</strong> Not yet mastered. Notes on the submission guide the revision.",
          "<strong>Major Revision.</strong> Not yet mastered. The student checks in with a teacher or peer to review before re-attempting."
        ]
      }
    ],

    outcomes: {
      text: [
        "I introduced the self-paced model at Unit 3 of the 2024–2025 school year. Units 1 and 2 that year were taught with traditional instruction. That allows two comparisons on the same local common formative assessments: against the previous year's class, and before and after the change within the same class."
      ],
      stats: [
        { value: "+12.1 points", label: "Average gain on the Unit 3 and Unit 4 assessments over the previous year's class (Unit 3: +17.0, Unit 4: +7.2)" },
        { value: "39% → 71%", label: "Students averaging an A or B, before and after the change, within the 2024–2025 class" }
      ],
      /* Charts are drawn from these numbers. See README.md, "Add a chart". */
      charts: [
        {
          type: "line",
          title: "Unit assessment averages, by school year",
          alt: "Line chart of average unit assessment scores. In 2023 to 2024 the averages fell from 74.3 on Unit 1 to 68.1 on Unit 3 and 69.8 on Unit 4. In 2024 to 2025 they were 78.3 and 75.5 on Units 1 and 2, then 85.2 and 77.0 on Units 3 and 4 after the self-paced model began.",
          caption: "Average score on local common formative assessments, Chemistry I. The vertical axis starts at 60%.",
          categoryLabel: "Assessment",
          categories: ["Unit 1", "Unit 2", "Unit 3", "Unit 4"],
          unit: "%", decimals: 1, yMin: 60, yMax: 90, yStep: 10,
          marker: { after: 1, label: "Self-paced model begins (2024–25)" },
          series: [
            { name: "2024–25", color: 1, values: [78.3, 75.5, 85.2, 77.0], label: [2] },
            { name: "2023–24", color: 2, values: [74.3, 72.0, 68.1, 69.8], label: [2], labelBelow: true }
          ]
        },
        {
          type: "bar",
          title: "Letter grade distribution before and after the change",
          alt: "Bar chart of the share of students by average letter grade in the 2024 to 2025 class. Before the change: A 23%, B 16%, C 32%, D 26%, F 3%. After the change: A 26%, B 45%, C 6%, D 16%, F 6%.",
          caption: "Share of students in the 2024–2025 class by average letter grade. Before is the average of Units 1 and 2. After is the average of Units 3 and 4, which totals 99% because of rounding.",
          categoryLabel: "Grade",
          categories: ["A", "B", "C", "D", "F"],
          unit: "%", yMin: 0, yMax: 50, yStep: 10,
          series: [
            { name: "Before (Units 1–2)", color: 2, values: [23, 16, 32, 26, 3], label: "all" },
            { name: "After (Units 3–4)", color: 1, values: [26, 45, 6, 16, 6], label: "all" }
          ]
        }
      ],
      caveat: "These are observational comparisons from my own classes, not a controlled study, and they do not prove that the instructional model caused the difference. The 2024–2025 class also scored 3.5 to 4 points higher than the previous year's class on Units 1 and 2, before the change. The share of students averaging an F rose from 3% to 6%."
    },

    /* The simulation students use in the "Explore" step of Learning Goal 3.1. */
    simulations: [
      {
        id: "wave-particle-duality",
        title: "Wave–Particle Duality Lab",
        description: "Four linked experiments for Chemistry I, Unit 3. Students slide two waves in and out of step, send light and electrons through a double slit, test which colors of light knock electrons out of a metal, and watch what happens to the pattern when a detector is switched on. Each experiment has guided tasks and self-check questions.",
        objectives: [
          "Describe constructive and destructive interference",
          "Explain how the double-slit experiment shows light and electrons acting as waves",
          "Explain how the photoelectric effect shows light acting as a particle",
          "Describe how measuring a particle's path changes the result"
        ],
        technology: ["HTML", "CSS", "JavaScript", "Canvas animation", "AI-assisted development"],
        role: "I designed this for the Explore step of Learning Goal 3.1 and built it with AI-assisted development.",
        path: "simulations/wave-particle-duality/index.html",
        screenshots: [
          { src: "assets/images/projects/interactive-science-simulations/wave-particle-duality.jpg", alt: "The photoelectric effect experiment, with sliders for the color and brightness of light shining on a metal plate" }
        ],
        source: ""
      }
    ],

    gallery: [
      {
        title: "In Canvas and in the lectures",
        items: [
          { type: "image", src: "assets/images/projects/modern-classroom-chemistry/canvas-learning-goal-3-1.jpg", by: "me",
            alt: "Canvas module for Learning Goal 3.1 listing six videos, a wave-particle duality simulation, a reading, a practice document, and a 10-point mastery check",
            caption: "Learning Goal 3.1 as it appears to students in Canvas." },
          { type: "image", src: "assets/images/projects/modern-classroom-chemistry/lecture-captions.jpg", by: "me",
            alt: "Recorded lecture showing the Unit 3 learning goals, with captions on and markers along the video timeline",
            caption: "A recorded lecture with captions, chapters, and markers where questions are built in." },
          { type: "image", src: "assets/images/projects/modern-classroom-chemistry/lecture-built-in-question.jpg", by: "me",
            alt: "A multiple-choice question displayed over the paused lecture video, labeled question 1 of 10, with a Rewatch option",
            caption: "A built-in question. Students can rewatch a section before answering." },
          { type: "link", href: "https://go.screenpal.com/player/cZ6rDnVWP6z?quiz_id=cZXXFAh5N", title: "Watch the 3.1 lecture with its built-in questions", note: "13 minutes, hosted on ScreenPal" }
        ]
      },
      { title: "Module walkthrough video", note: "A short narrated clip of one learning goal from a student's point of view.", items: [] },
      { title: "Lab examples", note: "A phenomenon-based lab and an end-of-unit lab.", items: [] },
      {
        title: "Mastery assessments",
        note: "The generic form students use for every mastery check.",
        items: [
          { type: "document", src: "assets/documents/mastery-check-form.pdf", title: "Mastery check submission form", note: "PDF, 1 page" }
        ]
      },
      { title: "Curriculum examples", items: [] },
      { title: "Research findings", note: "Summary slides or a written report of the year-over-year comparison.", items: [] }
    ]
  },

  /* ------------------------------------------------------------------ 3 */
  {
    id: "interactive-science-simulations",
    title: "Interactive Science Simulations",
    summary: "Browser-based HTML/JavaScript simulations for chemistry, physics, and engineering instruction, built with AI-assisted development workflows.",
    categories: ["interactive-simulations", "instructional-design"],
    tags: ["Claude Code", "HTML / JavaScript", "AI-assisted development", "Canvas LMS embedding", "Educational technology"],
    featured: true,
    glyph: "sim",
    thumbnail: "assets/images/projects/interactive-science-simulations/light-color-bohr-model.jpg",
    heroImage: "",
    context: "Chemistry, physics, and engineering instruction",

    overview: [
      "I develop browser-based HTML/JavaScript educational simulations using Claude Code and AI-assisted development workflows.",
      "The simulations support chemistry, physics, and engineering instruction and can be embedded directly in Canvas courses, so students use them inside the lesson they belong to."
    ],

    challenge: [
      "Each simulation is built to support a specific piece of instruction and to run in a browser without installation, which lets it sit inside a Canvas course alongside the related lesson materials."
    ],

    role: [
      "I develop the simulations myself, using Claude Code and AI-assisted coding workflows to build them. I decide what students should be able to do and explain, and I test each one against the lesson it supports."
    ],

    process: { placeholder: "A description of the development workflow has not been added yet." },

    tools: ["Claude Code", "AI-assisted development", "HTML", "CSS", "JavaScript", "Canvas LMS embedding"],

    deliverables: [],

    outcomes: { placeholder: "Results and outcomes have not been added yet." },

    /* Each simulation listed here gets a showcase block with a live demo.
       Put the simulation's files in simulations/<folder>/ and point "path"
       at its index.html. See README.md, "How to embed a simulation". */
    simulations: [
      {
        id: "wave-particle-duality",
        title: "Wave–Particle Duality Lab",
        description: "Four linked experiments for Chemistry I, Unit 3. Students slide two waves in and out of step, send light and electrons through a double slit, test which colors of light knock electrons out of a metal, and watch what happens to the pattern when a detector is switched on. Each experiment has guided tasks and self-check questions.",
        objectives: [
          "Describe constructive and destructive interference",
          "Explain how the double-slit experiment shows light and electrons acting as waves",
          "Explain how the photoelectric effect shows light acting as a particle",
          "Describe how measuring a particle's path changes the result"
        ],
        technology: ["HTML", "CSS", "JavaScript", "Canvas animation", "AI-assisted development"],
        role: "I designed this for Learning Goal 3.1 in my Chemistry I course and built it with AI-assisted development.",
        path: "simulations/wave-particle-duality/index.html",
        screenshots: [
          { src: "assets/images/projects/interactive-science-simulations/wave-particle-duality.jpg", alt: "The photoelectric effect experiment, with sliders for the color and brightness of light shining on a metal plate" }
        ],
        source: ""
      },
      {
        id: "light-color-bohr-model",
        title: "Light, Color, and the Bohr Model",
        description: "Five sections that take students from the wavelength of light to identifying elements. Students drag a slider to see how wavelength, color, frequency, and photon energy change together, excite electrons in a Bohr model to build an emission spectrum, run virtual flame tests, send spectrum tubes through a prism, and identify a mystery gas from its lines.",
        objectives: [
          "Relate the wavelength of light to its color, frequency, and energy",
          "Use the Bohr model to explain why atoms give off light at specific wavelengths",
          "Identify a metal ion from its flame color and line spectrum",
          "Tell a continuous spectrum from a line spectrum, and identify an element from its lines"
        ],
        technology: ["HTML", "CSS", "JavaScript", "Canvas animation", "AI-assisted development"],
        role: "I designed this for my Chemistry I course and built it with AI-assisted development.",
        path: "simulations/light-color-bohr-model/index.html",
        screenshots: [
          { src: "assets/images/projects/interactive-science-simulations/light-color-bohr-model.jpg", alt: "The wavelength and color section, showing a green light wave at 532 nanometers above a spectrum slider" }
        ],
        source: ""
      }
    ],

    gallery: [
      { title: "Screenshots", items: [] }
    ]
  },

  /* ------------------------------------------------------------------ 4 */
  {
    id: "custom-cad-3d-printed-products",
    title: "Custom CAD & 3D-Printed Products",
    summary: "Custom products, awards, and functional components taken from concept through CAD, prototyping, and fabrication.",
    categories: ["engineering-cad", "digital-fabrication"],
    tags: ["CAD modeling", "FDM 3D printing", "Multicolor printing", "Laser fabrication", "Rapid prototyping"],
    featured: true,
    glyph: "fab",
    thumbnail: "",
    heroImage: "",
    context: "Personal design and fabrication work",

    overview: [
      "I design and fabricate custom products, awards, and functional components using CAD modeling, FDM printing, multicolor printing, and laser fabrication."
    ],

    challenge: [
      "Each piece starts from a specific need and has to be designed for the process that will make it. Design constraints, materials, and manufacturing considerations for individual products will be documented in the gallery below."
    ],

    role: [
      "These are my own designs. I carry each one through the full workflow, from the initial concept and CAD model to the fabricated product."
    ],

    workflow: ["Concept", "CAD Design", "Prototype", "Fabrication", "Finished Product"],

    process: { placeholder: "Notes on design decisions for specific products have not been added yet." },

    tools: ["CAD modeling", "FDM 3D printing", "Multicolor 3D printing", "Laser fabrication", "Rapid prototyping", "Design for additive manufacturing"],

    deliverables: [],

    outcomes: { placeholder: "Results and outcomes have not been added yet." },

    gallery: [
      { title: "CAD screenshots", items: [] },
      {
        title: "3D models",
        note: "Drag to rotate, scroll or pinch to zoom.",
        wide: true,
        items: [
          {
            type: "model",
            placeholder: true,   // remove this line for a real model
            src: "assets/models/placeholder-part.glb",
            alt: "Placeholder 3D model of a hexagonal spacer",
            caption: "Sample model included to demonstrate the 3D viewer. It is not one of my products and will be replaced."
          }
        ]
      },
      { title: "Prototype photographs", items: [] },
      { title: "Finished product photographs", items: [] },
      { title: "Design constraints, materials, and manufacturing considerations", note: "Per-product notes and documents.", items: [] }
    ]
  },

  /* ------------------------------------------------------------------ 5 */
  {
    id: "hybrid-college-physical-science",
    title: "Hybrid College Physical Science",
    summary: "A hybrid college-level physical science course at Indiana University East for future elementary educators.",
    categories: ["instructional-design"],
    tags: ["Hybrid course design", "Asynchronous instruction", "Inquiry-based labs", "Formative assessment", "Higher education"],
    featured: true,
    glyph: "lab",
    thumbnail: "",
    heroImage: "",
    context: "Indiana University East",

    overview: [
      "I design and teach a hybrid college-level physical science course at Indiana University East for future elementary educators.",
      "The course pairs asynchronous online instruction with inquiry-based laboratory experiences, and connects physical science concepts to the way they are taught in elementary classrooms."
    ],

    challenge: [
      "The students in this course are preparing to teach elementary school. The course has to build their own understanding of physical science while also connecting each concept to elementary teaching, within a hybrid format that divides the work between online instruction and laboratory time."
    ],

    role: [
      "I design the course and teach it as adjunct physical science faculty."
    ],

    process: {
      intro: ["The course integrates six elements."],
      list: [
        "Asynchronous online instruction",
        "Digital learning materials",
        "Formative assessments",
        "Inquiry-based laboratory experiences",
        "Scientific data collection and analysis",
        "Connections between physical science concepts and elementary teaching"
      ]
    },

    tools: ["Hybrid course design", "Asynchronous online instruction", "Digital learning materials", "Formative assessment", "Inquiry-based laboratory design", "Data collection and analysis"],

    deliverables: [],

    outcomes: { placeholder: "Results and outcomes have not been added yet." },

    gallery: [
      { title: "Sample course modules", items: [] },
      { title: "Laboratory activities", items: [] },
      { title: "Instructional materials", items: [] },
      { title: "Assessments", items: [] },
      { title: "Course structure diagrams", items: [] }
    ]
  },

  /* ------------------------------------------------------------------ 6 */
  {
    id: "laser-cutter-training",
    title: "Laser Cutter Training Curriculum",
    summary: "Technical training for operating a CO₂ laser cutter, from equipment safety through practical competency verification.",
    categories: ["instructional-design", "digital-fabrication"],
    tags: ["CO₂ laser", "Technical training", "Equipment safety", "Vector & raster workflows", "Competency assessment"],
    featured: true,
    glyph: "laser",
    thumbnail: "",
    heroImage: "",
    context: "Technical training for specialized equipment",

    overview: [
      "I developed technical training materials for operating a CO₂ laser cutter. The training takes a new operator from equipment safety through design preparation and machine setup, and ends with a practical check of competency."
    ],

    challenge: [
      "A laser cutter is specialized equipment. Operators need to understand safety, materials, and machine setup before they run a job, and there has to be a clear way to verify that they can do so."
    ],

    role: [
      "I developed the training materials and the assessments used to verify competency."
    ],

    process: {
      intro: ["The training covers eight areas."],
      list: [
        "Equipment safety",
        "Operating procedures",
        "Design preparation",
        "Vector and raster workflows",
        "Material considerations",
        "Machine setup",
        "Practical competency verification",
        "Mastery assessments"
      ]
    },

    tools: ["CO₂ laser cutting and engraving", "Vector design", "Raster engraving workflows", "Technical training design", "Competency-based assessment"],

    deliverables: [],

    outcomes: { placeholder: "Results and outcomes have not been added yet." },

    gallery: [
      { title: "Safety documentation", items: [] },
      { title: "Operating procedures", items: [] },
      { title: "Training videos", items: [] },
      { title: "Sample projects", items: [] },
      { title: "Competency assessments", items: [] },
      { title: "Fabricated examples", items: [] }
    ]
  }

];
