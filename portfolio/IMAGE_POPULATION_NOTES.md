# Image Population — Summary

All 24 project pages and the projects grid have been populated with the uploaded photography, CAD renders, and drawings. 138 source files were processed (converted from HEIC/PSD/PDF/AI to web-ready JPGs where needed), matched to the correct project, and placed throughout each case study using a mix of full-width, two-column, and three-column layouts.

## How projects were matched to folders
Each folder was matched using course codes/organizations in the page metadata (e.g. "arch 11b" → ARCH 11B → "Intersection"), filenames, and content review of ambiguous/hash-named files (a couple of real mismatches were caught and corrected this way — e.g. a roll-cage screenshot vs. a clean render, and a mislabeled team photo on the catdotcom page).

## Unassigned / missing images
Every one of the 138 uploaded files was placed somewhere. Six placeholder slots across the site had **no corresponding upload** and were intentionally left as placeholders (with their original "Missing image" HTML comments preserved) rather than filled with a mismatched photo:

- **Flux-1** — "Laser-cut aluminum components", "Dashboard display in operation"
- **catdotcom** — "Web interface screenshot", "Laser module assembly", "Feeder module CAD / photo"
- **Generation 11 Occupant Cell** — "Composite layup diagram"

If you have photos for any of these, drop them in and I can wire them in the same way.

## Design changes
Only one small, additive CSS change was made: a `.media-grid-3` class (three-image grid) was added to `css/pages.css`, following the exact same pattern as the existing `.media-grid-2` rule, plus a subtle hover-zoom transition on case-study images. No existing layout, typography, color, animation, or navigation rules were modified.
