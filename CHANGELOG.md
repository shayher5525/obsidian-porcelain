# Changelog

## 0.3.7 — 2026-09-26

### Changed

- **Search suggestions match the active tab.** Hovered and keyboard-selected
  items in the search box dropdown use the active tab's blue with the same
  bloom and white text. Group headings stay unhighlighted.
- The search box dropdown uses a 90% opaque theme surface, a step more
  translucent than menus, without a backdrop-filter layer. The opacity is
  exposed as `--pc-search-suggest-opacity`.

### Fixed

- The search box dropdown no longer shows the results list through it. Obsidian
  set its background to `--background-secondary`, which the theme keeps
  transparent, with a selector that outranked the theme's solid surface.
- In dark mode, autocomplete suggestions use the solid surface again instead of
  an unblurred 82% veil that let text show through.
- Search result titles no longer turn white on the light background. Obsidian
  colors expanded result titles with `--nav-item-color-active`, which the theme
  sets to white for selected rows.
- Notebook Navigator's sticky date headers (Today, Yesterday…) now cover the
  notes that scroll under them instead of overlapping their titles and times.

## 0.3.6 — 2026-09-24

### Changed

- **Menu hover matches the active tab.** Hovered and keyboard-selected menu
  items use the active tab's blue with the same bloom, and the selectors now
  outrank Obsidian's default hover so the theme color actually applies.
- Menus use a 95% opaque theme surface instead of blurred glass. They keep
  their border, radius and shadow without creating a backdrop-filter layer.

### Fixed

- Closing a menu or switching submenus no longer leaves a ghost copy of the
  menu, or a white rectangle, over the note. The menu's backdrop-filter created
  a compositing layer over the theme's transparent editor surface.

## 0.3.5 — 2026-09-20

### Changed

- Notices use an opaque theme surface instead of glass. They keep their border,
  radius and shadow without creating a backdrop-filter layer.

### Fixed

- Scrolling a note while a notice is on screen no longer leaves ghost copies of
  the text behind. The notice's backdrop-filter created a compositing layer over
  the theme's transparent editor surface, so old frames had no opaque pixels to
  cover them.

## 0.3.4 — 2026-09-19

### Changed

- **Bases tables are easier to scan.** The sticky header now uses the active
  tab's blue with white labels and icons. Data rows alternate between the solid
  surface color and an 8% blue tint, with a stronger blue tint on hover.
- Autocomplete suggestions use an opaque theme surface instead of glass. They
  keep their border, radius and shadow without creating a backdrop-filter layer.

### Fixed

- Opening a `title` cell suggestion and then scrolling a Bases table no longer
  leaves copies of the suggestion popup or recycled rows behind.
- Sticky Bases headers now paint the header, row and cell layers, preventing
  scrolling content from showing through the header.

## 0.3.3 — 2026-09-19

### Changed

- **Table headers respect column alignment.** Headers without an alignment
  marker are still centered, but `:---`, `:---:` and `---:` now apply to the
  header cell too instead of being forced to center.
- **CSS lint clean-up.** No `!important` left (there were 47). The
  file-tree tier colors now pick a `--pc-tier` / `--pc-tier-ink` per depth
  and paint it in one rule; Obsidian's own higher-specificity rules are
  steered through the variables they already read (`--nav-item-color-*`,
  `--icon-color-*`, `--code-background`, `--code-normal`).
- Named colors `white` / `black` are written as `#fff` / `#000`.
- Every README opens with the theme screenshot.
- `theme.css` shrinks from 141 KB to 101 KB: 176 declarations that a later
  rule with the same selector always overrode are removed, along with six
  custom properties nothing read and the comments that described them.

### Removed

- `box-decoration-break`. Inline code already gets it from Obsidian; on
  `==highlights==` that wrap across lines, the break edges are now cut
  straight instead of each line getting its own rounded ends.
- `text-decoration-thickness` on links; the underline uses the font's own
  thickness. `abbr` draws its dotted underline as a border instead.

### Fixed

- `--pc-popup-bg` / `--pc-popup-blur`, documented in the README, had stopped
  affecting menus, modals and the command palette after a duplicate pair of
  tokens took over. The duplicates are gone; the documented tokens work
  again with the same defaults.

## 0.3.2 — 2026-09-19

### Changed

- `authorUrl` in `manifest.json` points to the author's GitHub profile instead
  of the theme repository.

### Removed

- Two `body:has(...)` rules written for a private dashboard plugin. They did
  nothing for anyone else, and `:has` on `body` forces broad selector
  invalidation.

## 0.3.1 — 2026-09-19

### Changed

- **Square callouts.** Callouts lose their rounded corners. The title keeps its
  solid colored bar; the body drops its 1px outline and takes a 12% wash of the
  same color instead.
- **Tighter callouts.** Smaller title and body padding, no outer margin on the
  first and last paragraph, and a 1.7 line height inside the body, so short
  callouts no longer float in empty space.
- **Lemon highlights.** `==text==` is now a pale lemon wash with the body ink
  color (about 11:1 contrast); dark mode uses a translucent yellow.
- The highlight tokens are renamed `--pc-celadon` → `--pc-highlight` and
  `--pc-celadon-ink` → `--pc-highlight-ink`. Snippets that override the old
  names need updating.

### Fixed

- The active tab could end up touching the window's top edge. The workspace
  is a few px taller than the window, and `overflow: hidden` still allows
  programmatic scrolling, so a focus change shifted the whole tab row up.
  `.workspace` now uses `overflow: clip`.

### Added

- `screenshot.png`, a 512×288 thumbnail for the community theme gallery.

## 0.3.0 — 2026-08-29

### Added

- **Popup glass.** Modals, the command palette, and menus sit on a 72% white
  panel with a 24px blur; the backdrop gets only 3px plus a 16% dim. The heavy
  blur belongs on the panel, not behind it — reversing the two makes bright
  areas smear outward and the panel reads as if it were glowing.
- **Command palette.** Pointer position and keyboard position are shown
  differently: hover raises a white pill, selection is a flat accent band, so
  both stay legible at once.
- **Blue headings.** `h1` deep blue, `h2` the table-header blue, in both the
  rendered and live-preview paths.
- **Celadon-to-blue highlights.** `==text==` uses a lighter shade of the header
  blue with the body ink color.

### Changed

- Settings is opaque white rather than glass. It is large and long-lived, so a
  translucent panel keeps whatever is behind it competing with the content.
- Tooltips dropped their `backdrop-filter`: moving between ribbon buttons was
  creating and destroying a filter layer per hover, which stuttered and left
  ghosts behind.

### Fixed

- The palette's blue focus ring is drawn on `.prompt-input-container.is-focused`,
  so clearing the input's own border left it in place.
- Icon buttons, property keys, and property value inputs no longer inherit the
  outlined treatment meant for text buttons and text fields.
- Active sidebar tab icons stay white after the window loses focus.
- Inline code is pink on both render paths; in live preview it is a CodeMirror
  token span, not a `<code>` element.
- Restored subpixel font smoothing — `antialiased` costs about half a pixel of
  stroke weight, which is visible on dense CJK glyphs.
- The vault switcher band no longer overflows the sidebar; it spans its parent
  instead of cancelling its own margins.

## 0.2.1 — 2026-08-29

### Changed

- Relicensed from MIT to **GPL-3.0**. A modified version now has to stay open
  and say that it was changed; commercial use is still allowed.

## 0.2.0 — 2026-08-29

First version with the full interface covered. Everything below was written
against Obsidian's own CSS variables; no third-party theme code is included.

### Added

- **Type.** CJK-aware font stacks with Latin faces ordered first, so shared
  glyphs (digits, punctuation, Latin letters) do not fall through to a CJK
  face's Latin forms — those sit on a different baseline and read a weight
  heavier. Only `liga`, `calt`, and `kern` are enabled; stylistic sets are
  remapped per font and one of them shrinks capitals in some CJK variable fonts.
- **Lists, quotes, footnotes, marks.** Nested lists tighten at depth, paragraphs
  inside list items lose their paragraph spacing, ordered markers use tabular
  figures, footnote rules use the theme's fading separator, and highlights clone
  their decoration across line breaks.
- **Tables.** Blue header band with the shared bloom, horizontal rules only.
  Vertical grid lines and an outer frame make a dense CJK table read as a
  spreadsheet. Headers are centered; body cells keep their declared alignment.
- **Callouts.** Type is carried by the header bar alone — blue by default,
  orange for the warning family, green for the tip family — over a light body
  outlined in the header's own color.
- **Properties.** Every list-type property gets a pill: red for `tags`, lemon
  for `aliases`, grass green for `cssclasses` and anything user-defined. Keys
  and value inputs are borderless until focused.
- **Inline code** in pink, on both the rendered and live-preview paths.
- **Links** in red, with unresolved links a lighter red rather than a faded one.
- **Headings.** `h1` deep blue, `h2` the table-header blue.

### Fixed

- Bloom gradients silently produced no fill. A custom property resolves `var()`
  where it is *declared*, so a recipe defined on `body` baked in `body`'s
  undefined fill color. The three gradient layers are now expanded at each use.
- Live-preview code blocks were framed per line: `.HyperMD-codeblock` is a
  per-line class, so the radius and outline meant for the block were drawn
  around every line. The block is assembled from its lines instead.
- The vault switcher is a full-bleed bar rather than a rule, so the file list no
  longer scrolls through it and Notebook Navigator's pane divider no longer
  crosses it.
- Callout frames broke at the bottom corners, where a square inset outline met a
  clipped radius.
- Icon buttons, property keys, and property values inherited the outlined
  treatment intended for text buttons and text fields.
- Tag pills clipped their own glyphs — background and radius were applied to both
  the pill and its inner content, and the inner element clips.
- Notebook Navigator tag pills lost their fill when the pane lost focus; the
  `selected-inactive-*` tokens were unset.
- Active sidebar tab icons turned dark once the window lost focus.
- Text rendered thinner than expected: `-webkit-font-smoothing: antialiased`
  disables subpixel rendering on macOS, which costs about half a pixel of stroke
  weight — visible on dense CJK glyphs.

### Performance

- Tooltips no longer create a `backdrop-filter` layer. Moving between ribbon
  buttons was creating and destroying one per hover, which stuttered and left
  ghosts; at a 2px radius the blur was not buying anything anyway.
- The window glass layer dropped `contain: paint`. It has no children and is
  fixed, so containment bought nothing, and it made the layer repaint whenever a
  filtered layer above it appeared or disappeared.
