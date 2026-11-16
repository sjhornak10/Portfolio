/* ==========================================================================
   Portfolio site script
   Renders the shared header/footer and builds pages from data/projects.js.
   You should not need to edit this file to add or change content.
   ========================================================================== */

(function () {
  "use strict";

  // Site root, worked out from this script's own URL so links and assets
  // resolve correctly from any page depth and under any GitHub Pages path.
  var ROOT = new URL("..", document.currentScript.src).href;
  var SITE = window.SITE || {};
  var PROJECTS = window.PROJECTS || [];
  var page = document.body.dataset.page || "";

  function url(path) { return /^(https?:|mailto:|data:|blob:)/.test(path) ? path : ROOT + path.replace(/^\//, ""); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(sel, el) { return (el || document).querySelector(sel); }
  function $all(sel, el) { return Array.prototype.slice.call((el || document).querySelectorAll(sel)); }
  function catLabel(id) {
    var c = (SITE.categories || []).filter(function (x) { return x.id === id; })[0];
    return c ? c.label : id;
  }
  function projectUrl(p) { return url("projects/" + p.id + ".html"); }

  /* ---------- Icons ---------- */

  var GLYPHS = {
    cad: '<path d="M24 6 40 15v18L24 42 8 33V15z"/><path d="m8 15 16 9 16-9M24 24v18"/>',
    course: '<rect x="6" y="9" width="36" height="24" rx="1"/><path d="M18 40h12M24 33v7M21 16l8 5-8 5z"/>',
    sim: '<path d="M7 8v32h34"/><path d="M11 27c3.5-13 7-13 10.500 0s7 13 10.500 0c1.800-6.500 3.500-9.500 6-10"/>',
    fab: '<path d="M24 8 42 17 24 26 6 17z"/><path d="m6 24 18 9 18-9M6 31l18 9 18-9"/>',
    lab: '<path d="M19 7h10M21 7v12L10.500 37.500A2.300 2.300 0 0 0 12.500 41h23a2.300 2.300 0 0 0 2-3.500L27 19V7M15.500 29h17"/>',
    laser: '<path d="M8 9h32M24 9v7M19 16h10l-2.500 6h-5zM24 22v10M10 40h28"/><path d="m18 31-3 3M30 31l3 3M24 36v0" />',
    image: '<rect x="7" y="10" width="34" height="28" rx="1"/><circle cx="17" cy="19" r="3"/><path d="m7 32 10-8 8 6 6-5 10 8"/>',
    doc: '<path d="M13 6h15l8 8v28H13z"/><path d="M28 6v8h8M18 22h12M18 28h12M18 34h8"/>',
    play: '<circle cx="24" cy="24" r="17"/><path d="m20 16 12 8-12 8z"/>',
    link: '<path d="M20 28a7 7 0 0 0 10 0l7-7a7 7 0 0 0-10-10l-3 3"/><path d="M28 20a7 7 0 0 0-10 0l-7 7a7 7 0 0 0 10 10l3-3"/>'
  };
  function glyph(name, cls) {
    return '<svg class="' + (cls || "ph__glyph") + '" viewBox="0 0 48 48" aria-hidden="true" focusable="false">' + (GLYPHS[name] || GLYPHS.image) + "</svg>";
  }
  function placeholder(glyphName, text, badge) {
    return '<div class="ph"><div class="ph__inner">' + glyph(glyphName) +
      '<span class="ph__badge">' + esc(badge || "Placeholder image") + "</span>" +
      (text ? '<span class="ph__text">' + esc(text) + "</span>" : "") + "</div></div>";
  }
  function notice(text) {
    return '<p class="notice"><span class="ph__badge">Placeholder</span><span>' + esc(text) + "</span></p>";
  }

  /* ---------- Theme ---------- */

  function currentTheme() {
    var set = document.documentElement.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function toggleTheme() {
    var next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) { /* storage unavailable */ }
    updateThemeLabel();
  }
  function updateThemeLabel() {
    var btn = $(".theme-toggle");
    if (btn) btn.setAttribute("aria-label", currentTheme() === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }

  /* ---------- Header and footer ---------- */

  var NAV = [
    { id: "home", label: "Home", href: "index.html" },
    { id: "projects", label: "Projects", href: "projects.html" },
    { id: "about", label: "About", href: "about.html" },
    { id: "resume", label: "Resume", href: "resume.html" },
    { id: "contact", label: "Contact", href: "contact.html" }
  ];

  function renderChrome() {
    var active = (page === "project" || page === "simulation") ? "projects" : page;
    var links = NAV.map(function (n) {
      return '<li><a class="site-nav__link" href="' + url(n.href) + '"' + (n.id === active ? ' aria-current="page"' : "") + ">" + n.label + "</a></li>";
    }).join("");

    var header = $("#site-header");
    if (header) {
      header.className = "site-header";
      header.innerHTML =
        '<a class="skip-link" href="#main">Skip to main content</a>' +
        '<div class="wrap site-header__inner">' +
          '<a class="brand" href="' + url("index.html") + '"><span class="brand__mark" aria-hidden="true">' + esc(SITE.initials || "") + "</span><span>" + esc(SITE.shortName || SITE.name || "") + "</span></a>" +
          '<nav class="site-nav" aria-label="Main">' +
            '<ul class="site-nav__list" id="nav-list">' + links + "</ul>" +
            '<button class="icon-btn theme-toggle" type="button">' +
              '<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2.500v2M12 19.500v2M2.500 12h2M19.500 12h2M5.300 5.300l1.400 1.400M17.300 17.300l1.400 1.400M5.300 18.700l1.400-1.400M17.300 6.700l1.400-1.400"/></svg>' +
              '<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.500A8 8 0 0 1 9.500 4a8 8 0 1 0 10.500 10.500z"/></svg>' +
            "</button>" +
            '<button class="icon-btn nav-toggle" type="button" aria-expanded="false" aria-controls="nav-list" aria-label="Menu">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>' +
            "</button>" +
          "</nav>" +
        "</div>";

      $(".theme-toggle", header).addEventListener("click", toggleTheme);
      updateThemeLabel();

      var toggle = $(".nav-toggle", header), list = $("#nav-list", header);
      toggle.addEventListener("click", function () {
        var open = list.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(open));
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && list.classList.contains("is-open")) {
          list.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
          toggle.focus();
        }
      });
    }

    var footer = $("#site-footer");
    if (footer) {
      footer.className = "site-footer";
      footer.innerHTML =
        '<div class="wrap site-footer__inner">' +
          "<p>© " + new Date().getFullYear() + " " + esc(SITE.name || "") + " · " + esc(SITE.location || "") + "</p>" +
          '<nav aria-label="Footer"><ul>' +
            NAV.map(function (n) { return '<li><a href="' + url(n.href) + '">' + n.label + "</a></li>"; }).join("") +
          "</ul></nav>" +
        "</div>";
    }
  }

  /* ---------- Site-config fill-ins (email, resume, profiles) ---------- */

  function fillConfig() {
    $all("[data-email-link]").forEach(function (a) {
      a.href = "mailto:" + SITE.email;
      if (a.hasAttribute("data-email-text")) a.textContent = SITE.email;
    });
    $all("[data-resume-link]").forEach(function (a) { a.href = url(SITE.resumePdf); });
    $all("[data-resume-note]").forEach(function (el) { el.hidden = !SITE.resumeIsPlaceholder; });
    $all("[data-copy-email]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var status = $("#copy-status");
        function done(ok) { if (status) status.textContent = ok ? "Email address copied." : "Copy did not work. Please select the address above."; }
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(SITE.email).then(function () { done(true); }, function () { done(false); });
        } else { done(false); }
      });
    });
    $all("[data-profile]").forEach(function (el) {
      var key = el.getAttribute("data-profile"), href = SITE[key];
      if (href) {
        el.innerHTML = '<a href="' + esc(href) + '" rel="me noopener" target="_blank">' + esc(href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")) + "</a>";
      } else {
        el.innerHTML = '<span class="ph__badge">Placeholder</span> <span class="muted">Link to be added</span>';
      }
    });
  }

  /* ---------- Project cards ---------- */

  function card(p) {
    var thumb = p.thumbnail
      ? '<img src="' + url(p.thumbnail) + '" alt="" loading="lazy">'
      : placeholder(p.glyph, "Project image to be supplied");
    return '<li data-categories="' + esc((p.categories || []).join(" ")) + '"><article class="card">' +
      '<div class="card__thumb">' + thumb + "</div>" +
      '<div class="card__body">' +
        '<p class="card__cats">' + (p.categories || []).map(function (c) { return '<span class="label label--accent">' + esc(catLabel(c)) + "</span>"; }).join("") + "</p>" +
        '<h3 class="card__title"><a href="' + projectUrl(p) + '">' + esc(p.title) + "</a></h3>" +
        '<p class="card__desc">' + esc(p.summary) + "</p>" +
        '<div class="card__foot">' +
          '<ul class="tags" aria-label="Skills">' + (p.tags || []).slice(0, 5).map(function (t) { return '<li class="tag">' + esc(t) + "</li>"; }).join("") + "</ul>" +
          '<span class="card__cta" aria-hidden="true">View project</span>' +
        "</div>" +
      "</div></article></li>";
  }

  function initHome() {
    var grid = $("#featured-grid");
    if (!grid) return;
    grid.innerHTML = PROJECTS.filter(function (p) { return p.featured; }).slice(0, 6).map(card).join("");
  }

  function initProjects() {
    var grid = $("#project-grid"), bar = $("#filters"), status = $("#filter-status");
    if (!grid) return;
    grid.innerHTML = PROJECTS.map(card).join("");

    var cats = [{ id: "all", label: "All" }].concat(SITE.categories || []);
    bar.innerHTML = cats.map(function (c) {
      return '<button class="filter-btn" type="button" data-filter="' + c.id + '" aria-pressed="false">' + esc(c.label) + "</button>";
    }).join("");

    function apply(id, updateHash) {
      if (!cats.some(function (c) { return c.id === id; })) id = "all";
      var shown = 0;
      $all("li[data-categories]", grid).forEach(function (li) {
        var match = id === "all" || li.getAttribute("data-categories").split(" ").indexOf(id) !== -1;
        li.hidden = !match;
        if (match) shown++;
      });
      $all(".filter-btn", bar).forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.filter === id)); });
      status.textContent = "Showing " + shown + " of " + PROJECTS.length + " projects" + (id === "all" ? "" : " in " + catLabel(id));
      if (updateHash) {
        try { history.replaceState(null, "", id === "all" ? location.pathname + location.search : "#" + id); } catch (e) { /* ignore */ }
      }
    }
    bar.addEventListener("click", function (e) {
      var b = e.target.closest(".filter-btn");
      if (b) apply(b.dataset.filter, true);
    });
    window.addEventListener("hashchange", function () { apply(location.hash.slice(1) || "all", false); });
    apply(location.hash.slice(1) || "all", false);
  }

  /* ---------- Case study ---------- */

  function prose(arr) {
    if (!arr || !arr.length) return "";
    return '<div class="prose">' + arr.map(function (t) { return "<p>" + t + "</p>"; }).join("") + "</div>";
  }
  function attrib(by) {
    if (by === "student") return '<span class="attrib">Student work</span>';
    if (by === "me") return '<span class="attrib attrib--mine">My work</span>';
    return "";
  }
  function panelList(title, items, by) {
    return '<div class="panel">' + (by ? attrib(by) : "") + (title ? "<h3>" + esc(title) + "</h3>" : "") +
      "<ul>" + items.map(function (i) { return "<li>" + i + "</li>"; }).join("") + "</ul></div>";
  }

  var needsModelViewer = false;

  function galleryItem(it) {
    var cap = "";
    if (it.type === "image") {
      cap = (it.caption || it.by) ? "<figcaption>" + attrib(it.by) + (it.caption ? "<span>" + esc(it.caption) + "</span>" : "") + "</figcaption>" : "";
      return '<figure class="g-item g-item--image"><div class="g-item__media">' +
        '<button type="button" data-lightbox="' + esc(url(it.src)) + '" data-caption="' + esc(it.caption || "") + '" aria-label="Enlarge image: ' + esc(it.alt || it.caption || "") + '">' +
        '<img src="' + esc(url(it.src)) + '" alt="' + esc(it.alt || "") + '" loading="lazy"></button></div>' + cap + "</figure>";
    }
    if (it.type === "video") {
      var media = it.embed
        ? '<iframe src="' + esc(it.embed) + '" title="' + esc(it.title || "Video") + '" loading="lazy" allow="fullscreen; picture-in-picture" allowfullscreen></iframe>'
        : '<video controls preload="metadata" src="' + esc(url(it.src)) + '"' + (it.poster ? ' poster="' + esc(url(it.poster)) + '"' : "") + "></video>";
      return '<figure class="g-item g-item--video"><div class="g-item__media">' + media + "</div><figcaption>" +
        (it.title ? "<strong>" + esc(it.title) + "</strong>" : "") + (it.caption ? "<span>" + esc(it.caption) + "</span>" : "") + "</figcaption></figure>";
    }
    if (it.type === "model") {
      needsModelViewer = true;
      return '<figure class="g-item g-item--model"><div class="g-item__media">' +
        '<model-viewer src="' + esc(url(it.src)) + '" alt="' + esc(it.alt || "3D model") + '" camera-controls touch-action="pan-y" auto-rotate rotation-per-second="18deg" shadow-intensity="0.7" exposure="1" interaction-prompt="none"></model-viewer>' +
        (it.placeholder ? '<span class="ph__badge model-hint">Placeholder model</span>' : "") +
        "</div><figcaption>" + attrib(it.by) + (it.caption ? "<span>" + esc(it.caption) + "</span>" : "") +
        (it.onshape ? '<a class="arrow-link" href="' + esc(it.onshape) + '" target="_blank" rel="noopener">Open the Onshape document</a>' : "") +
        "</figcaption></figure>";
    }
    if (it.type === "document" || it.type === "link") {
      var isDoc = it.type === "document";
      return '<a class="doc-link" href="' + esc(isDoc ? url(it.src) : it.href) + '" target="_blank" rel="noopener">' +
        glyph(isDoc ? "doc" : "link", "") + "<span><strong>" + esc(it.title || (isDoc ? "Document" : it.href)) + "</strong>" +
        (it.note ? "<small>" + esc(it.note) + "</small>" : "") + "</span></a>";
    }
    return "";
  }

  function renderGallery(groups) {
    var filled = groups.filter(function (g) { return g.items && g.items.length; });
    var empty = groups.filter(function (g) { return !g.items || !g.items.length; });
    var html = filled.map(function (g) {
      return '<div class="gallery-group"><div class="gallery-group__head"><h3>' + esc(g.title) + "</h3>" +
        (g.note ? "<p>" + esc(g.note) + "</p>" : "") + "</div>" +
        '<div class="gallery-grid' + (g.wide ? " gallery-grid--wide" : "") + '">' + g.items.map(galleryItem).join("") + "</div></div>";
    }).join("");
    if (empty.length) {
      html += '<div class="gallery-group"><div class="gallery-group__head"><h3>Materials to be added</h3>' +
        "<p>Each space below is reserved for real project materials. Nothing here is a stand-in for finished work.</p></div>" +
        '<div class="gallery-grid">' + empty.map(function (g) {
          return '<figure class="g-item"><div class="g-item__media g-empty">' + placeholder("image", "", "Placeholder") + "</div>" +
            "<figcaption><strong>" + esc(g.title) + "</strong>" + (g.note ? "<span>" + esc(g.note) + "</span>" : "") + "</figcaption></figure>";
        }).join("") + "</div></div>";
    }
    return html;
  }

  function simBlock(s) {
    var facts =
      "<div><span class=\"label\">Learning objectives</span><ul>" + (s.objectives || []).map(function (o) { return "<li>" + esc(o) + "</li>"; }).join("") + "</ul></div>" +
      "<div><span class=\"label\">Technology</span><ul>" + (s.technology || []).map(function (o) { return "<li>" + esc(o) + "</li>"; }).join("") + "</ul></div>" +
      "<div><span class=\"label\">My role</span><p>" + esc(s.role || "") + "</p></div>";
    var poster = (s.screenshots && s.screenshots[0]) ? s.screenshots[0] : null;
    var extra = (s.screenshots || []).slice(poster ? 1 : 0);
    var shots = extra.length
      ? '<div class="sim__shots"><span class="label">Screenshots</span><div class="gallery-grid">' +
        extra.map(function (sh) { return galleryItem({ type: "image", src: sh.src, alt: sh.alt, caption: sh.caption }); }).join("") + "</div></div>"
      : "";
    return '<article class="sim" id="sim-' + esc(s.id) + '">' +
      '<div class="sim__head">' + (s.placeholder ? '<span class="ph__badge" style="justify-self:start">Placeholder</span>' : "") +
        "<h3>" + esc(s.title) + "</h3><p>" + esc(s.description || "") + "</p></div>" +
      '<div class="sim__facts">' + facts + "</div>" +
      '<div class="sim__stage" data-sim-src="' + esc(url(s.path)) + '" data-sim-title="' + esc(s.title) + '">' +
        (poster
          ? '<div class="sim__poster sim__poster--img"><img src="' + esc(url(poster.src)) + '" alt="' + esc(poster.alt || "") + '" loading="lazy">' +
            '<div class="sim__poster-ui"><button class="btn btn--primary" type="button" data-sim-launch>Launch demo</button>' +
            "<span>Runs in your browser. No account or install needed.</span></div></div>"
          : '<div class="sim__poster ph"><div class="ph__inner">' + glyph("play") +
            '<button class="btn btn--primary" type="button" data-sim-launch>Launch demo</button>' +
            '<span class="ph__text">Runs in your browser. No account or install needed.</span></div></div>') +
      "</div>" +
      '<div class="sim__bar"><div class="btn-row">' +
        '<a class="btn btn--small" href="' + url("simulation.html") + "#" + esc(s.id) + '">Open full page</a>' +
        '<button class="btn btn--small" type="button" data-sim-fullscreen hidden>Full screen</button>' +
      "</div>" +
      (s.source ? '<a class="arrow-link" href="' + esc(s.source) + '" target="_blank" rel="noopener">View source code</a>' : "") +
      "</div>" + shots + "</article>";
  }

  function initProject() {
    var main = $("#main");
    var id = document.body.dataset.project;
    var p = PROJECTS.filter(function (x) { return x.id === id; })[0];
    if (!p) {
      main.innerHTML = '<div class="wrap section"><div class="prose"><h1>Project not found</h1><p>No project with the id “' + esc(id) +
        '” exists in data/projects.js.</p><p><a class="arrow-link" href="' + url("projects.html") + '">Back to all projects</a></p></div></div>';
      return;
    }

    var sections = [];
    function add(sid, title, html) { if (html) sections.push({ id: sid, title: title, html: html }); }

    add("overview", "Project Overview", prose(p.overview));
    add("challenge", "The Challenge", prose(p.challenge));
    add("role", "My Role", prose(p.role));

    var proc = "";
    if (p.workflow && p.workflow.length) {
      proc += '<ol class="workflow" aria-label="Workflow">' + p.workflow.map(function (w) { return "<li>" + esc(w) + "</li>"; }).join("") + "</ol>";
    }
    if (p.process && p.learningPath) { proc += prose(p.process.intro); }
    if (p.learningPath) {
      var lp = p.learningPath;
      proc += '<div class="path">' + lp.rows.map(function (r, ri) {
        return '<div class="path__row"><span class="label">' + esc(r.label) + '</span><ol class="workflow workflow--detail" style="grid-template-columns:repeat(' + r.steps.length + ',minmax(0,1fr))">' +
          r.steps.map(function (st) { return "<li><strong>" + esc(st.title) + "</strong><span>" + esc(st.text) + "</span></li>"; }).join("") + "</ol></div>" +
          (ri === 0 && lp.band ? '<div class="path__band"><strong>' + esc(lp.band.title) + "</strong><span>" + esc(lp.band.text) + "</span></div>" : "");
      }).join("") + "</div>";
    }
    if (p.process) {
      if (!p.learningPath) proc += prose(p.process.intro);
      if (p.process.steps) {
        proc += '<ol class="steps">' + p.process.steps.map(function (s) { return "<li><div><h3>" + esc(s.title) + "</h3><p>" + s.text + "</p></div></li>"; }).join("") + "</ol>";
      }
      if (p.process.list) proc += panelList("", p.process.list);
      if (p.process.placeholder) proc += notice(p.process.placeholder);
    }
    add("process", "Design & Development Process", proc);

    add("tools", "Tools & Technologies", p.tools && p.tools.length
      ? '<ul class="tags">' + p.tools.map(function (t) { return '<li class="tag">' + esc(t) + "</li>"; }).join("") + "</ul>" : "");

    var deliv = (p.deliverables && p.deliverables.length)
      ? '<div class="split">' + p.deliverables.map(function (d) { return panelList(d.title, d.items, d.by); }).join("") + "</div>"
      : notice("Deliverables will be shown here as project materials are added. Planned materials are listed in the gallery below.");
    add("deliverables", "Deliverables", deliv);

    var o = p.outcomes || {}, out = "";
    out += prose(o.text);
    if (o.stats && o.stats.length) {
      out += '<div class="stats">' + o.stats.map(function (s) {
        return '<div class="stat"><span class="stat__value">' + esc(s.value) + '</span><span class="stat__label">' + esc(s.label) + "</span></div>";
      }).join("") + "</div>";
    }
    if (o.charts && o.charts.length) out += '<div class="charts">' + o.charts.map(chartFigure).join("") + "</div>";
    if (o.caveat) out += '<p class="caveat">' + esc(o.caveat) + "</p>";
    if (o.placeholder) out += notice(o.placeholder);
    add("outcomes", "Results & Outcomes", out);

    if (p.simulations && p.simulations.length) {
      add("demos", "Live Demonstrations", p.simulations.map(simBlock).join(""));
    }
    if (p.gallery && p.gallery.length) add("gallery", "Project Gallery", renderGallery(p.gallery));

    var hero = p.heroImage
      ? "<picture>" + (p.thumbnail ? '<source media="(max-width: 620px)" srcset="' + url(p.thumbnail) + '">' : "") +
        '<img src="' + url(p.heroImage) + '" alt="' + esc(p.heroAlt || "") + '"></picture>'
      : placeholder(p.glyph, "Project image to be supplied");

    main.innerHTML =
      '<header class="page-head"><div class="wrap page-head__inner">' +
        '<nav class="crumbs" aria-label="Breadcrumb"><a href="' + url("projects.html") + '">Projects</a><span aria-hidden="true">/</span><span>' + esc(p.title) + "</span></nav>" +
        '<p class="case-meta">' + (p.categories || []).map(function (c) {
          return '<a class="label label--accent" href="' + url("projects.html") + "#" + c + '">' + esc(catLabel(c)) + "</a>";
        }).join('<span class="label" aria-hidden="true">·</span>') + "</p>" +
        "<h1>" + esc(p.title) + "</h1>" +
        '<p class="lede">' + esc(p.summary) + "</p>" +
        (p.context ? '<p class="label">' + esc(p.context) + "</p>" : "") +
        '<div class="case-hero">' + hero + "</div>" +
      "</div></header>" +
      '<div class="wrap case-layout">' +
        '<nav class="case-toc" aria-label="On this page"><span class="label">On this page</span><ol>' +
          sections.map(function (s) { return '<li><a href="#' + s.id + '">' + esc(s.title) + "</a></li>"; }).join("") +
        "</ol></nav>" +
        '<div class="case-body">' +
          sections.map(function (s) { return '<section class="case-section" id="' + s.id + '" aria-labelledby="h-' + s.id + '"><h2 id="h-' + s.id + '">' + esc(s.title) + "</h2>" + s.html + "</section>"; }).join("") +
          nextProject(p) +
        "</div>" +
      "</div>";

    if (o.charts && o.charts.length) mountCharts(main, o.charts);
    wireSimulations(main);
    wireLightbox(main);
    wireToc(main);
    if (needsModelViewer) loadModelViewer();
  }

  function nextProject(p) {
    var i = PROJECTS.indexOf(p), n = PROJECTS[(i + 1) % PROJECTS.length];
    if (!n || n === p) return "";
    return '<div class="cta-band" style="border-top:1px solid var(--line-strong);padding-top:28px">' +
      '<div><span class="label">Next project</span><h2 style="margin-top:6px"><a href="' + projectUrl(n) + '" style="color:var(--ink);text-decoration:none">' + esc(n.title) + "</a></h2></div>" +
      '<div class="btn-row"><a class="btn" href="' + url("projects.html") + '">All projects</a><a class="btn btn--primary" href="' + projectUrl(n) + '">View next project</a></div></div>';
  }

  function wireToc(root) {
    var links = $all(".case-toc a", root);
    if (!links.length || !("IntersectionObserver" in window)) return;
    var map = {};
    links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (a) { a.classList.remove("is-active"); });
          if (map[en.target.id]) map[en.target.id].classList.add("is-active");
        }
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    $all(".case-section", root).forEach(function (s) { io.observe(s); });
  }


  /* ---------- Charts (drawn from numbers in data/projects.js) ---------- */

  function chartFigure(c, i) {
    var legend = c.series.length > 1
      ? '<ul class="chart__legend">' + c.series.map(function (s) {
          return '<li><span class="chart__swatch chart-c' + (s.color || 1) + '"></span>' + esc(s.name) + "</li>";
        }).join("") + "</ul>" : "";
    var table = '<details class="chart__data"><summary>View data table</summary><div class="chart__table"><table><thead><tr><th scope="col">' + esc(c.categoryLabel || "") + "</th>" +
      c.series.map(function (s) { return '<th scope="col">' + esc(s.name) + "</th>"; }).join("") + "</tr></thead><tbody>" +
      c.categories.map(function (cat, k) {
        return '<tr><th scope="row">' + esc(cat) + "</th>" + c.series.map(function (s) { return "<td>" + fmt(s.values[k], c) + "</td>"; }).join("") + "</tr>";
      }).join("") + "</tbody></table></div></details>";
    return '<figure class="chart"><figcaption class="chart__head"><h3>' + esc(c.title) + "</h3>" + legend + "</figcaption>" +
      '<div class="chart__plot" data-chart="' + i + '" role="img" aria-label="' + esc(c.alt || c.title) + '"></div>' +
      (c.caption ? '<p class="chart__caption">' + esc(c.caption) + "</p>" : "") + table + "</figure>";
  }
  function fmt(v, c) { return (c.decimals != null ? v.toFixed(c.decimals) : v) + (c.unit || ""); }

  function drawChart(el, c) {
    var W = Math.max(280, el.clientWidth), H = 300, isLine = c.type === "line";
    var m = { t: c.marker ? 30 : 14, r: isLine ? 62 : 8, b: 30, l: 38 };
    var iw = W - m.l - m.r, ih = H - m.t - m.b, n = c.categories.length;
    var y = function (v) { return m.t + ih - ((v - c.yMin) / (c.yMax - c.yMin)) * ih; };
    var o = '<svg width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + " " + H + '" aria-hidden="true" focusable="false">';
    for (var t = c.yMin; t <= c.yMax + 1e-9; t += c.yStep) {
      o += '<line class="chart__grid" x1="' + m.l + '" x2="' + (W - m.r) + '" y1="' + y(t) + '" y2="' + y(t) + '"/>' +
        '<text class="chart__tick" x="' + (m.l - 8) + '" y="' + (y(t) + 4) + '" text-anchor="end">' + t + (c.unit || "") + "</text>";
    }
    var x, hits = "";
    if (isLine) {
      var pad = 22;
      x = function (k) { return m.l + pad + k * (iw - 2 * pad) / (n - 1); };
      if (c.marker) {
        var mx = (x(c.marker.after) + x(c.marker.after + 1)) / 2;
        o += '<line class="chart__marker" x1="' + mx + '" x2="' + mx + '" y1="' + (m.t - 6) + '" y2="' + (m.t + ih) + '"/>' +
          '<text class="chart__note" x="' + mx + '" y="' + (m.t - 12) + '" text-anchor="middle">' + esc(c.marker.label) + "</text>";
      }
      c.series.forEach(function (s) {
        var cls = "chart-c" + (s.color || 1);
        o += '<polyline class="chart__line ' + cls + '" points="' + s.values.map(function (v, k) { return x(k) + "," + y(v); }).join(" ") + '"/>';
        s.values.forEach(function (v, k) {
          o += '<circle class="chart__dot ' + cls + '" cx="' + x(k) + '" cy="' + y(v) + '" r="5"/>';
          if ((s.label || []).indexOf(k) !== -1) {
            o += '<text class="chart__value" x="' + x(k) + '" y="' + (y(v) + (s.labelBelow ? 20 : -12)) + '" text-anchor="middle">' + fmt(v, c) + "</text>";
          }
          hits += '<circle class="chart__hit" cx="' + x(k) + '" cy="' + y(v) + '" r="16" data-tip="' + esc(s.name + ", " + c.categories[k] + ": " + fmt(v, c)) + '"/>';
        });
        o += '<text class="chart__series" x="' + (x(n - 1) + 12) + '" y="' + (y(s.values[n - 1]) + 4) + '">' + esc(s.name) + "</text>";
      });
    } else {
      var band = iw / n, k2 = c.series.length, bw = Math.min(24, (band - 14 - 2 * (k2 - 1)) / k2), group = bw * k2 + 2 * (k2 - 1);
      x = function (k) { return m.l + band * k + band / 2; };
      c.series.forEach(function (s, si) {
        var cls = "chart-c" + (s.color || 1);
        s.values.forEach(function (v, k) {
          var bx = x(k) - group / 2 + si * (bw + 2), top = y(v), base = y(c.yMin), r = Math.min(4, bw / 2, Math.max(0, base - top));
          o += '<path class="chart__bar ' + cls + '" d="M' + bx + " " + base + "V" + (top + r) + "q0 " + (-r) + " " + r + " " + (-r) + "h" + (bw - 2 * r) + "q" + r + " 0 " + r + " " + r + "V" + base + 'z"/>';
          if (s.label === "all" || (s.label || []).indexOf(k) !== -1) {
            o += '<text class="chart__value chart__value--sm" x="' + (bx + bw / 2) + '" y="' + (top - 6) + '" text-anchor="middle">' + (band < 90 ? v : fmt(v, c)) + "</text>";
          }
          hits += '<rect class="chart__hit" x="' + (bx - 1) + '" y="' + m.t + '" width="' + (bw + 2) + '" height="' + ih + '" data-tip="' + esc(s.name + ", " + c.categories[k] + ": " + fmt(v, c)) + '"/>';
        });
      });
      o += '<line class="chart__axis" x1="' + m.l + '" x2="' + (W - m.r) + '" y1="' + y(c.yMin) + '" y2="' + y(c.yMin) + '"/>';
    }
    c.categories.forEach(function (cat, k) {
      o += '<text class="chart__tick" x="' + x(k) + '" y="' + (H - 8) + '" text-anchor="middle">' + esc(cat) + "</text>";
    });
    el.innerHTML = o + hits + '</svg><div class="chart__tip" hidden></div>';
  }

  function mountCharts(root, charts) {
    $all("[data-chart]", root).forEach(function (el) {
      var c = charts[+el.dataset.chart], last = 0;
      function render() { if (el.clientWidth !== last) { last = el.clientWidth; drawChart(el, c); } }
      render();
      if ("ResizeObserver" in window) new ResizeObserver(render).observe(el); else window.addEventListener("resize", render);
      el.addEventListener("pointermove", function (e) {
        var tip = $(".chart__tip", el), hit = e.target.closest ? e.target.closest("[data-tip]") : null;
        if (!hit) { tip.hidden = true; return; }
        var box = el.getBoundingClientRect();
        tip.textContent = hit.getAttribute("data-tip");
        tip.hidden = false;
        var tx = Math.min(Math.max(e.clientX - box.left, tip.offsetWidth / 2 + 4), box.width - tip.offsetWidth / 2 - 4);
        tip.style.left = tx + "px";
        tip.style.top = Math.max(0, e.clientY - box.top - tip.offsetHeight - 12) + "px";
      });
      el.addEventListener("pointerleave", function () { var tip = $(".chart__tip", el); if (tip) tip.hidden = true; });
    });
  }

  /* ---------- Simulations ---------- */

  function simFrame(src, title) {
    // Each simulation runs in its own iframe, so its CSS and JavaScript
    // cannot collide with the portfolio's.
    var f = document.createElement("iframe");
    f.src = src;
    f.title = title;
    f.setAttribute("allow", "fullscreen");
    f.setAttribute("allowfullscreen", "");
    return f;
  }
  function goFullscreen(el) {
    var fn = el.requestFullscreen || el.webkitRequestFullscreen;
    if (fn) { try { var r = fn.call(el); if (r && r.catch) r.catch(function () {}); } catch (e) { /* not available */ } }
  }
  var canFullscreen = !!(document.fullscreenEnabled || document.webkitFullscreenEnabled);

  function wireSimulations(root) {
    $all(".sim", root).forEach(function (sim) {
      var stage = $(".sim__stage", sim), fsBtn = $("[data-sim-fullscreen]", sim);
      $("[data-sim-launch]", sim).addEventListener("click", function () {
        var frame = simFrame(stage.dataset.simSrc, stage.dataset.simTitle);
        stage.innerHTML = "";
        stage.classList.add("is-live");
        stage.appendChild(frame);
        frame.focus();
        if (canFullscreen) fsBtn.hidden = false;
      });
      fsBtn.addEventListener("click", function () { goFullscreen(stage); });
    });
  }

  function initSimulationViewer() {
    var id = decodeURIComponent(location.hash.slice(1));
    var found = null, parent = null;
    PROJECTS.forEach(function (p) {
      (p.simulations || []).forEach(function (s) { if (s.id === id) { found = s; parent = p; } });
    });
    var back = $("#viewer-back"), title = $("#viewer-title"), stage = $("#viewer-stage"), fs = $("#viewer-fullscreen");
    if (!found) {
      back.href = url("projects.html");
      stage.innerHTML = placeholder("play", "No simulation was found for this link. Return to the portfolio to choose one.", "Simulation not found");
      return;
    }
    document.title = found.title + " | " + (SITE.name || "");
    back.href = projectUrl(parent) + "#sim-" + found.id;
    title.textContent = found.title;
    stage.appendChild(simFrame(url(found.path), found.title));
    if (canFullscreen) {
      fs.hidden = false;
      fs.addEventListener("click", function () { goFullscreen(stage); });
    }
  }

  /* ---------- 3D model viewer (loaded only on pages that use it) ---------- */

  function loadModelViewer() {
    if (window.customElements && customElements.get("model-viewer")) return;
    var s = document.createElement("script");
    s.src = url("js/vendor/model-viewer.min.js");
    s.async = true;
    document.head.appendChild(s);
  }

  /* ---------- Image lightbox ---------- */

  function wireLightbox(root) {
    var triggers = $all("[data-lightbox]", root);
    if (!triggers.length || !window.HTMLDialogElement) return;
    var dlg = document.createElement("dialog");
    dlg.className = "lightbox";
    dlg.innerHTML = '<form method="dialog"><button class="btn btn--small" type="submit">Close</button></form><img alt=""><p></p>';
    document.body.appendChild(dlg);
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
    triggers.forEach(function (b) {
      b.addEventListener("click", function () {
        var img = $("img", b);
        $("img", dlg).src = b.dataset.lightbox;
        $("img", dlg).alt = img ? img.alt : "";
        $("p", dlg).textContent = b.dataset.caption || "";
        dlg.showModal();
      });
    });
  }

  /* ---------- Start ---------- */

  renderChrome();
  fillConfig();
  if (page === "home") initHome();
  if (page === "projects") initProjects();
  if (page === "project") initProject();
  if (page === "simulation") initSimulationViewer();
})();
