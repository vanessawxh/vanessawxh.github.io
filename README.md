# Vanessa Wu — Portfolio

An editorial-style portfolio built with plain HTML, CSS, and vanilla JavaScript. No build step, no framework — deploys directly to GitHub Pages.

## What's inside

```
portfolio/
├── index.html          Home — split-screen hero (ASCII art behind headline) + featured work
├── projects.html        Full project index — hover-reveal titles, tag filtering + live search
├── industry.html         Internships, research, work experience, orgs, leadership
├── about.html            Bio, education timeline, skills
├── contact.html          Contact info + message form
├── projects/
│   ├── project-1.html    Case study template (4 included, all placeholder content)
│   ├── project-2.html
│   ├── project-3.html
│   └── project-4.html
├── css/
│   ├── style.css        Design tokens (dark navy/off-white theme), nav, shared components
│   ├── pages.css         Page-specific layout (hero, grids, case study rows, industry rows, etc.)
│   └── glitch.css        ASCII/punctuation divider strips + scramble-reveal support
├── js/
│   ├── main.js            Nav scroll state, mobile menu, scroll-reveal animation
│   ├── projects.js        Tag filtering + live search on the projects index
│   ├── lightbox.js        Click-to-expand for case study images
│   └── glitch.js          Fills ASCII dividers + runs the scramble-reveal heading animation
├── images/                Drop real photos/renders here (see "Replacing placeholders")
├── assets/
│   ├── favicon.svg         吳 monogram favicon (navy/off-white, matches site palette)
│   └── apple-touch-icon.png 180×180 PNG version for iOS home screen
└── README.md
```

## Design system

- **Palette:** Navy `#081B33` (page background), off-white `#F5F3EE` (text + accent panels), warm gray `#A79F92`, steel blue `#6E93C7`, beige `#D9CFC1`.
- **Theme:** dark base, off-white accents. A few sections (the About teaser strip and the Contact form panel) invert to an off-white card floating on the navy page — a deliberate accent, not a mistake.
- **Type:** System UI / San Francisco-style sans-serif for body and headings, with SF Mono / system monospaced fallback for labels, tags, and technical annotations.
- **Signature motif:** every image block carries a corner crosshair + monospace "FIG.XX — scale" label, punctuation-only ASCII divider strips run between sections, and headings scramble-reveal through symbols as they scroll into view.
- **Hero background:** the ASCII flower artwork you provided is rendered verbatim inside a `<pre>` element behind the homepage headline, at low opacity — real text, not an image.
- **Favicon:** the 吳 monogram (`assets/favicon.svg`) — edit that file directly if you want to adjust the mark; regenerate `apple-touch-icon.png` from it if you do.
- All imagery is currently a CSS-generated placeholder block with a `data-tag` describing what should go there (e.g. `[PROJECT 1 IMAGE]`) — see below for how to swap in real photos.

## Replacing placeholder content

**Text:** every placeholder is wrapped in `[brackets]` — search each HTML file for `[` to find them all.

**Images:** each placeholder is a `<div class="placeholder-art" data-tag="...">`. To swap in a real image, replace the div with:
```html
<div class="figure">
  <img src="../images/projects/your-photo.jpg" alt="Description of the image">
  <span class="figure-label">FIG.01 <span class="dim">— 1:20 SCALE</span></span>
</div>
```
Drop your files into `images/profile/` (headshots) or `images/projects/` (project photography, renders, CAD screenshots).

**Adding a new Industry entry:** copy one `.industry-entry` block in `industry.html` and edit the org/role/year/description — no other files need to change.

**Adding a new project:**
1. Copy `projects/project-1.html` to `projects/project-5.html`.
2. Update the title, hero image, meta (year/org/role/tags), and each case-study section.
3. Update the `prev`/`next` links at the bottom of the file and on its neighbors.
4. Add a matching tile to `projects.html`'s `.project-grid`, including `data-title` and `data-tags` attributes (used by the filter/search JS) and, optionally, a featured card on `index.html`.

## Running locally

No build tools needed. Either:
- Open `index.html` directly in a browser, or
- Serve the folder locally for accurate relative paths: `python3 -m http.server 8000` from the `portfolio/` folder, then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `vanessawu.github.io` for a user site, or any name for a project site).
2. Push this folder's contents to the repo's default branch:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, select **Deploy from a branch**.
5. Choose branch `main` and folder `/ (root)`, then **Save**.
6. Your site will be live within a couple of minutes at:
   - `https://<your-username>.github.io/` (if the repo is named `<your-username>.github.io`), or
   - `https://<your-username>.github.io/<repo-name>/` (any other repo name).

If you use a project-site URL (the second form), double check all internal links still resolve — this site uses relative paths throughout, so it should work as-is at any path depth.
