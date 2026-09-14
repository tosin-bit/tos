# Marks

Three directions, none chosen yet. Every file is a vector drawn to a 200×200 box
(marks) or to its own natural box (wordmarks and lockups), with no embedded font
— the wordmarks are real Bodoni Moda outlines, so the name travels as artwork and
never depends on a font being installed.

## Colour

Marks use `currentColor`. Set the colour on the parent and the mark follows:

```html
<span style="color: #A8813F"><!-- inline the svg here --></span>
```

- On indigo `#1C1B3A` → brass `#A8813F` (4.64:1)
- On chalk `#FAF7F0` or sand `#EDE3D0` → brass deep `#8A6A2F` (4.69:1)

Never brass on a light ground: it measures 3.34:1 and fails AA.

## Which file

| Use | File |
| --- | --- |
| Screen, above ~60px | `mark-seal.svg`, `mark-weave.svg`, `mark-monogram.svg` |
| Favicon, foil, embossing, anything under ~40px | `mark-seal-solid.svg`, `mark-cowrie-solid.svg`, `mark-weave-bold.svg`, `mark-monogram.svg` |
| Name alone | `wordmark.svg` (one line), `wordmark-stacked.svg` (two) |
| Foundation | `wordmark-foundation.svg` |
| Signature | `lockup-‹mark›-horizontal.svg`, `lockup-‹mark›-stacked.svg` |

`mark-weave.svg` has four bands and turns to mush below about 40px. Use
`mark-weave-bold.svg` — three bands, heavier — at small sizes.

## What each is

- **The Seal** — a cowrie inside a milled coin edge. Cowries were currency across
  Senegambia long before the dalasi and are still given and worn as wealth. The
  shell lies on its side; stood upright it reads as a leaf.
- **The Weave** — Gambian strip-weaving, where narrow bands off the loom are sewn
  edge to edge into one cloth. Every band is held down by the ones crossing it.
- **The Cipher** — her initials cut from Bodoni Moda, the face the site already
  sets its headings in, so the mark and the site are one piece of typography.

## Regenerating

The marks are generated, not hand-drawn, so proportions can be retuned in one
place. The generator reads the Bodoni Moda outlines out of the Next.js font cache
and needs `fonttools` and `brotli`. It is not part of the build — the SVGs in this
directory are the deliverable.
