# Changelog

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
