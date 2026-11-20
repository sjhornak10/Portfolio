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

    challengeQuote: {
      text: "Can you design a system that someone else can successfully build using only your instructions?",
      cite: "The unit's central engineering question, from the introduction students read on day one"
    },

    challenge: [
      "As the introduction tells students, this is not a “build something fun” project. It is a design, manufacturing, and documentation challenge. The unit brings a complete product development cycle into a single project, and it asks students to treat LEGO as a precision-manufactured system and not as a toy. Their custom part has to connect to that system, so tolerance and fit become real problems to solve.",
      "Every student set has to meet the same engineering constraints:",
      "<ul><li>Fewer than 100 total pieces, using standard LEGO bricks wherever possible</li><li>At least one custom LEGO-compatible part, designed and 3D printed by the student</li><li>No more than 30 g of PLA in total for all custom parts</li><li>Buildable in real life and as an Onshape assembly</li><li>Buildable by another person using only the student's instructions</li></ul>"
    ],

    role: [
      "I independently developed the curriculum, engineering requirements, project constraints, instructional materials, and assessment structure. That includes the lesson pages, assignment instructions, submission templates, the design brief template, and the notebook rubric.",
      "<strong>The LEGO sets are designed and built by students.</strong> Any student work shown on this page is labeled as student work and is separate from the curriculum materials I created.",
      "The module also points students to outside resources, such as published LEGO instruction manuals, documentary videos, and a parts guide. Those are reference material and are not my work."
    ],

    process: {
      intro: ["The unit runs as one Canvas module that students work through in order, from studying how LEGO works to documenting a finished set. Mastery checks and an approval step act as gates: students move on only once they have shown they are ready, and the engineering notebook is built piece by piece along the way."]
    },

    /* The module map drawn at the top of the process section.
       icon: system, instructions, reverse, define, prototype, part, document, beyond */
    moduleMap: [
      {
        title: "Study the system", icon: "system",
        text: "Students learn how LEGO is made and why it works, from its history and design process to tolerances, interference fits, and standardization. Every student examines real bricks by hand, because I teach as if they are seeing LEGO for the first time.",
        items: ["How LEGO is made", "LEGO as an engineered system", "Hands-on brick exploration", "Labeled brick drawing", "LEGO design documentary"],
        gate: { label: "Mastery check", text: "Students show they understand the basics before moving on." }
      },
      {
        title: "Read instructions like an engineer", icon: "instructions",
        text: "Students study real LEGO instruction booklets to see how they communicate without words, through exploded views, sequencing, and visual hierarchy.",
        items: ["Instruction analysis", "In-class exploration"],
        gate: { label: "Oral mastery check", text: "At my desk, each student explains a page of real instructions, scored with a rubric they see in advance." }
      },
      {
        title: "Reverse engineer", icon: "reverse",
        text: "Students investigate what makes LEGO reliable: connection force, the stud and tube system, and why tiny changes in dimension matter.",
        items: ["LEGO parts guide", "Reverse engineering investigation", "Design review reading"]
      },
      {
        title: "Define the product", icon: "define",
        text: "The design challenge launches only after students understand the system. They brainstorm at least three ideas, select one, and write a design brief covering the client, problem, criteria, constraints, risks, and custom part plan.",
        items: ["Challenge launch", "Brainstorming", "Concept selection", "Design brief"]
      },
      {
        title: "Prototype and model", icon: "prototype",
        text: "Students prototype with real bricks from a bin of thousands of pieces, then model the set as a mated Onshape assembly.",
        items: ["Physical prototype", "Onshape assembly", "CAD reflection"],
        loop: "Prototype and CAD inform each other as the design develops"
      },
      {
        title: "Engineer the custom part", icon: "part",
        text: "Students learn to use dial calipers, work through a mini lesson on tolerance and fit, and design a parametric part on the 8 mm stud spacing with a fully dimensioned drawing.",
        items: ["Dial calipers", "Tolerance and fit", "Custom part design", "3D printing"],
        gate: { label: "Print approval", text: "CAD model, drawing, mass under 30 g, and tolerance reasoning are checked before anything prints." },
        loop: "Print, test, redesign, and reprint until it fits real LEGO"
      },
      {
        title: "Assemble and document", icon: "document",
        text: "Students complete the final assembly in bricks and in CAD, create LEGO-style instructions with exploded views and a bill of materials, and finish the engineering notebook.",
        items: ["Final assembly", "Build instructions", "Engineering notebook"]
      },
      {
        title: "Going beyond", icon: "beyond", optional: true,
        text: "Students who finish early can design a custom minifigure or accessory."
      }
    ],

    tools: ["Canvas LMS", "Onshape", "Parametric modeling", "Multicomponent assemblies", "Dimensional tolerances", "Technical drawings", "Exploded views", "Bills of materials", "Dial calipers", "FDM 3D printing (PLA)", "Cura slicer", "Engineering notebooks"],

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
        title: "What success looks like",
        by: "me",
        items: ["The digital and physical models match", "The custom part fits and functions correctly", "Another student can build the set using only the instructions", "The documentation is clear, organized, and professional"]
      },
      {
        title: "Skills students practice",
        by: "me",
        items: ["Parametric modeling", "Assemblies and mates", "Design under constraints", "Manufacturing considerations", "Technical communication and documentation", "Iteration and testing", "Professional presentation"]
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

    outcomes: {},

    gallery: [
      {
        title: "Example student project: a lighthouse set",
        note: "Everything in this section comes from one student team's engineering notebook. It shows the full path the unit asks for, from brainstorming to a finished, documented set. Names have been removed.",
        items: [
          { type: "image", src: "assets/images/projects/lego-set-design/example-lighthouse/final-assembly.jpg", by: "student",
            alt: "A finished LEGO lighthouse with red and white striped walls, a gray lamp room, and a yellow 3D-printed bulb",
            caption: "The finished set: a lighthouse with two custom 3D-printed parts, a bulb and a sloped roof." },
          { type: "image", src: "assets/images/projects/lego-set-design/example-lighthouse/brainstorming.jpg", by: "student",
            alt: "Brainstorming sheet with hand-drawn sketches of a lighthouse, a holiday tree, and a four-sided die, each with an estimated piece count",
            caption: "Brainstorming: three set ideas, each with a piece-count estimate and a possible custom part." },
          { type: "image", src: "assets/images/projects/lego-set-design/example-lighthouse/concept-sketch.jpg", by: "student",
            alt: "Isometric sketch of the lighthouse on dot paper, with each component drawn separately and dimensioned in studs",
            caption: "Concept sketch on isometric paper, with each component dimensioned in studs." }
        ]
      },
      {
        title: "Prototype and CAD model",
        items: [
          { type: "image", src: "assets/images/projects/lego-set-design/example-lighthouse/prototype.jpg", by: "student",
            alt: "Early physical prototype of the lighthouse built from tan, red, and dark gray LEGO bricks",
            caption: "The physical prototype, built from classroom bricks before any CAD work." },
          { type: "image", src: "assets/images/projects/lego-set-design/example-lighthouse/cad-assembly.jpg", by: "student",
            alt: "Onshape rendering of the complete lighthouse assembly",
            caption: "The complete set as a mated Onshape assembly." },
          { type: "image", src: "assets/images/projects/lego-set-design/example-lighthouse/cad-exploded.jpg", by: "student",
            alt: "Exploded view of the lighthouse assembly with callouts labeling the roof, bulb supports, tile piece, and main structure",
            caption: "An exploded view with callouts explaining what each part does." }
        ]
      },
      {
        title: "Custom parts: design, drawings, and testing",
        note: "The team's notebook records that they did not account for tolerance at first, which led to several redesigns before the parts fit.",
        items: [
          { type: "image", src: "assets/images/projects/lego-set-design/example-lighthouse/bulb-cad.jpg", by: "student",
            alt: "Onshape model of a yellow spherical bulb part",
            caption: "The custom bulb, modeled in Onshape." },
          { type: "image", src: "assets/images/projects/lego-set-design/example-lighthouse/roof-cad.jpg", by: "student",
            alt: "Onshape model of a 2x2 sloped roof piece with four studs on top",
            caption: "The custom 2x2 sloped roof piece." },
          { type: "image", src: "assets/images/projects/lego-set-design/example-lighthouse/bulb-drawing.png", by: "student",
            alt: "Technical drawing of the bulb with front, top, bottom, and isometric views and dimensions in millimeters",
            caption: "Dimensioned drawing of the bulb, including the 5.25 mm hole that fits a LEGO stud." },
          { type: "image", src: "assets/images/projects/lego-set-design/example-lighthouse/slope-drawing.png", by: "student",
            alt: "Technical drawing of the sloped roof piece with front, top, bottom, and isometric views and dimensions in millimeters",
            caption: "Dimensioned drawing of the roof piece." },
          { type: "image", src: "assets/images/projects/lego-set-design/example-lighthouse/printed-parts.jpg", by: "student",
            alt: "A yellow 3D-printed bulb and a light gray 3D-printed roof piece on a table",
            caption: "The printed parts." },
          { type: "image", src: "assets/images/projects/lego-set-design/example-lighthouse/fit-testing.jpg", by: "student",
            alt: "The printed bulb mounted on a post beside the printed roof piece, with the lighthouse in the background",
            caption: "Fit testing. The team found the bulb fit well after refinement, while the roof printed loose and needed work." }
        ]
      },
      {
        title: "Build instructions",
        items: [
          { type: "image", src: "assets/images/projects/lego-set-design/example-lighthouse/instructions-base.jpg", by: "student",
            alt: "Step-by-step instruction sheet for the lighthouse base, with seven numbered steps and a pieces-required list",
            caption: "Instructions for the base, with numbered steps and a list of pieces required." },
          { type: "image", src: "assets/images/projects/lego-set-design/example-lighthouse/instructions-main.jpg", by: "student",
            alt: "Instruction sheet for the main assembly showing the lamp room, roof, and bulb being added in four steps",
            caption: "Instructions for the main assembly." }
        ]
      }
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
    /* The module map at the top of the process section, drawn from the Unit 3: Electrons module in Canvas.
       icon: resources, wave, bohr, orbital, config, flame, exam, beyond   variant: "lab" highlights a whole-class lab */
    moduleMap: [
      {
        label: "Unit 3 resources", title: "Unit resources", icon: "resources",
        text: "Available alongside the learning goals for the whole unit: the learning goals, notes, guided notes, a video library, and practice.",
        items: ["Learning goals", "Unit notes", "Guided notes", "Video library", "Practice"]
      },
      {
        label: "Learning goal 3.1", title: "Wave-particle duality", icon: "wave",
        text: "A recorded lecture and supporting videos, an interactive simulation, a reading, and practice.",
        items: ["Lecture video", "Supporting videos", "Wave–Particle Duality Lab", "Reading 5.1", "Practice 3.1"],
        gate: { label: "3.1 mastery check", text: "Random questions from the goal's question bank, answered on paper, with feedback in person. Every learning goal ends this way; the steps are shown below the map." }
      },
      {
        label: "Learning goal 3.2", title: "The Bohr model and spectroscopy", icon: "bohr",
        text: "A lecture, three readings, two emission simulations, practice, and a quiz covering goals 3.1 and 3.2.",
        items: ["Lecture video", "Readings 5.5, 5.6, 5.12", "Bohr line spectra simulation", "Atomic emission simulation", "Practice 3.2", "Quiz 3.1/3.2"],
        gate: { label: "3.2 mastery check" }
      },
      {
        label: "Learning goal 3.3", title: "Orbitals", icon: "orbital",
        text: "A lecture, an orbital visualization, a reading, and practice on orbitals and uncertainty.",
        items: ["Lecture video", "Orbital visualization", "Reading 5.13", "Practice 3.3"],
        gate: { label: "3.3 mastery check" }
      },
      {
        label: "Learning goal 3.4", title: "Electron configurations", icon: "config",
        text: "Three short lectures, four readings, and layered practice, ending with a quiz covering goals 3.3 and 3.4.",
        items: ["Lectures 3.4.1–3.4.3", "Readings 5.15, 5.18–5.20", "Practice 3.4", "Configuration practice 1 and 2", "Quiz 3.3/3.4"],
        gate: { label: "3.4 mastery check" }
      },
      {
        label: "Whole-class lab", variant: "lab", title: "Flame test lab", icon: "flame",
        text: "Students identify metal ions by their flame colors and an unknown gas by its emission spectrum, then explain what they see with the Bohr model. Because the lab is built around a phenomenon, every student gains from it wherever they are in the self-paced sequence.",
        items: ["Flame tests", "Spectrum glasses", "Spectroscope", "Claim, evidence, reasoning", "SEP rubric"]
      },
      {
        label: "End of unit", title: "Review and unit exam", icon: "exam",
        text: "A Bohr model activity, a review game, and a practice exam prepare students for the unit exam.",
        items: ["Bohr model activity", "Review Kahoot", "Practice exam", "Unit 3 exam"]
      },
      {
        title: "Going beyond", icon: "beyond", optional: true,
        text: "Students who finish early can take on a spectroscopy research project, review current research through Science Daily and primary literature, or watch the documentary Hiding in the Light."
      }
    ],

    /* Detail of how every mastery check works, shown below the module map. */
    learningPath: {
      rows: [
        {
          label: "How every mastery check works",
          steps: [
            { title: "New questions", text: "Drawn at random from that learning goal's question bank, so every attempt is different" },
            { title: "On paper", text: "The student answers by hand on the mastery check form" },
            { title: "In person", text: "They bring it to me and get feedback immediately, face to face" },
            { title: "Not yet", text: "Below 8 of 10. Review, revise, and retake with new questions, as many times as it takes" },
            { title: "Mastery", text: "8 of 10 or higher. The student moves on to the next learning goal" }
          ]
        }
      ]
    },

    process: {
      intro: [
        "Each unit runs as one Canvas module. The unit is divided into learning goals, and each learning goal is its own sequence that students work through at their own pace and finish with a mastery check. The map below follows Unit 3: Electrons.",
        "I open my courses with a lesson on growth mindset: a bridge-building challenge where failure is likely, a lesson on neuroplasticity, examples of famous failures, and a student reflection. The course structure is built to match it. A mastery check that comes back as \"not yet\" is a normal step in learning, followed by feedback and another attempt.",
        "Self-pacing does not mean students work alone all the time. Labs are generally phenomenon-based, which means the whole class can do them together and every student gets value from them, whether they are ahead of the pace or behind it."
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
      {
        title: "Lab example: Flame test",
        note: "A phenomenon-based lab done together as a class. Students identify an unknown metal salt by its flame color and an unknown gas by its emission spectrum, then explain both with claim, evidence, and reasoning.",
        items: [
          { type: "image", src: "assets/images/projects/modern-classroom-chemistry/flame-lab-page-1.png", by: "me",
            alt: "First page of the Flame Test Lab handout, with the background, purpose, pre-lab prediction, materials, and procedure",
            caption: "The lab handout: background, purpose, a pre-lab prediction, and the procedure." },
          { type: "image", src: "assets/images/projects/modern-classroom-chemistry/flame-lab-rubric.png", by: "me",
            alt: "The Flame Test Lab competency rubric, scoring four Indiana Science and Engineering Practices and lab content from 4 to 1",
            caption: "A 20-point competency rubric built on four Indiana Science and Engineering Practices plus lab content." },
          { type: "document", src: "assets/documents/flame-test-lab.pdf", title: "Flame Test Lab (full handout)", note: "PDF, 6 pages" }
        ]
      },
      {
        title: "Mastery assessments",
        note: "The generic form students use for every mastery check.",
        items: [
          { type: "document", src: "assets/documents/mastery-check-form.pdf", title: "Mastery check submission form", note: "PDF, 1 page" }
        ]
      },
      {
        title: "Curriculum examples",
        note: "Materials students use inside each learning goal, from Unit 3: Electrons.",
        items: [
          { type: "image", src: "assets/images/projects/modern-classroom-chemistry/unit-3-learning-goals.png", by: "me",
            alt: "The opening page of the Unit 3 notes, listing learning goals 3.1 through 3.4 with the readings for each",
            caption: "Unit 3 opens with its four learning goals and the readings for each." },
          { type: "image", src: "assets/images/projects/modern-classroom-chemistry/guided-notes-page-1.png", by: "me",
            alt: "First page of the Unit 3 guided notes, with the learning goals and questions for section 3.1, What is Light?",
            caption: "Guided notes follow the lectures, with questions students answer as they watch." },
          { type: "image", src: "assets/images/projects/modern-classroom-chemistry/practice-3-1.png", by: "me",
            alt: "Practice worksheet for learning goal 3.1 with five questions on the wave-particle duality of light and electrons",
            caption: "A practice worksheet students complete before the 3.1 mastery check." },
          { type: "document", src: "assets/documents/unit-3-guided-notes.pdf", title: "Unit 3 Guided Notes", note: "PDF, 9 pages" },
          { type: "document", src: "assets/documents/practice-3-1-wave-particle-duality.pdf", title: "Practice 3.1: Wave-Particle Duality", note: "PDF, 1 page" }
        ]
      },
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
    thumbnail: "assets/images/projects/interactive-science-simulations/sims-thumb.svg",
    heroImage: "assets/images/projects/interactive-science-simulations/sims-hero.svg",
    heroAlt: "Graphic: Interact. Observe. Explain. Three stages are shown: slider controls, a screen showing a wave, and a self-check question with an answer selected.",
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
      },
      {
        id: "plate-boundaries",
        title: "Graham Cracker Plates vs. the Real Earth",
        description: "A virtual version of the graham cracker plate tectonics lab. Students pick a plate boundary, move the plates with a slider or the play button, and watch the graham cracker model side by side with a cross-section of the real Earth. Students who missed the lab used it to complete the activity, and students who were present used it to connect what they saw in the model to what happens on Earth.",
        objectives: [
          "Describe what happens at divergent, transform, and convergent plate boundaries",
          "Compare a physical model with the Earth process it represents",
          "Explain how earthquakes, mountains, trenches, and volcanoes form at plate boundaries",
          "Name a real-world example of each type of boundary"
        ],
        technology: ["HTML", "CSS", "JavaScript", "SVG animation", "AI-assisted development"],
        role: "I designed this for Lab 6 in my hybrid physical science course at Indiana University East and built it with AI-assisted development.",
        path: "simulations/plate-boundaries/index.html",
        screenshots: [
          { src: "assets/images/projects/interactive-science-simulations/plate-boundaries.jpg", alt: "The subduction view, with a fruit roll-up sliding under a graham cracker beside a cross-section of an oceanic plate sinking under a continent" }
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
    thumbnail: "assets/images/projects/custom-cad-3d-printed-products/cad-thumb.svg",
    heroImage: "assets/images/projects/custom-cad-3d-printed-products/cad-hero.svg",
    heroAlt: "Graphic: Concept. Prototype. Product. Three stages are shown: a light bulb, a first and revised version of a part, and a finished award.",
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
    thumbnail: "assets/images/projects/hybrid-college-physical-science/physci-thumb.svg",
    heroImage: "assets/images/projects/hybrid-college-physical-science/physci-hero.svg",
    heroAlt: "Graphic: Learn. Investigate. Teach. Three stages are shown: a laptop playing a lesson, a lab flask, and a classroom board.",
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

    outcomes: {
      text: [
        "For Lab 6, an in-person graham cracker model of plate tectonics, I built an interactive virtual version of the same activity. Students who were absent for the lab used it to complete the activity, and students who were present used it as supplemental material to connect the cracker model to what happens on the real Earth."
      ],
      placeholder: "Other results and outcomes have not been added yet."
    },

    /* A virtual version of an in-person lab, used by absent and present students. */
    simulations: [
      {
        id: "plate-boundaries",
        title: "Graham Cracker Plates vs. the Real Earth",
        description: "A virtual version of the graham cracker plate tectonics lab. Students pick a plate boundary, move the plates with a slider or the play button, and watch the graham cracker model side by side with a cross-section of the real Earth. Students who missed the lab used it to complete the activity, and students who were present used it to connect what they saw in the model to what happens on Earth.",
        objectives: [
          "Describe what happens at divergent, transform, and convergent plate boundaries",
          "Compare a physical model with the Earth process it represents",
          "Explain how earthquakes, mountains, trenches, and volcanoes form at plate boundaries",
          "Name a real-world example of each type of boundary"
        ],
        technology: ["HTML", "CSS", "JavaScript", "SVG animation", "AI-assisted development"],
        role: "I designed this for Lab 6 in my hybrid physical science course at Indiana University East and built it with AI-assisted development.",
        path: "simulations/plate-boundaries/index.html",
        screenshots: [
          { src: "assets/images/projects/interactive-science-simulations/plate-boundaries.jpg", alt: "The subduction view, with a fruit roll-up sliding under a graham cracker beside a cross-section of an oceanic plate sinking under a continent" }
        ],
        source: ""
      }
    ],

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
    thumbnail: "assets/images/projects/laser-cutter-training/laser-thumb.svg",
    heroImage: "assets/images/projects/laser-cutter-training/laser-hero.svg",
    heroAlt: "Graphic: Safety. Practice. Mastery. Three stages are shown: a warning sign, a laser head cutting a sheet, and a badge with a check mark.",
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
