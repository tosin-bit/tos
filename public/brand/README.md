# The woven cipher

One mark: **N** and **C**, threading over and under each other.

Strip-weaving is how cloth is made across The Gambia and Senegal — narrow bands
come off the loom and are interlaced into one piece, and every band is held down
by the ones crossing it. The cipher does the same thing with two letters. The N
passes in front at the first crossing, the C in front at the second, and where
one goes under, a real void separates them. It is the weave, stated in
typography rather than drawn as ornament.

The letters are Bodoni Moda outlines — the face the site already sets its
headings in — cut as polygons so the crossings are genuine geometry and not a
ground-coloured patch painted over the join. Nothing depends on a font being
installed.

## Files

| File | Use |
| --- | --- |
| `cipher.svg` | The mark. Anything above about 24px. |
| `cipher-solid.svg` | Same letters, crossings uncut. Favicons, engraving, embossing, hot foil — anywhere the voids would fill in. |
| `cipher-crest.svg` | The mark inside a double rule. Stamps, certificates, the back of a card. |
| `pattern-cloth.svg` | A finished square of the weave. Covers, endpapers, dividers. |
| `pattern-cloth-tile.svg` | A seamless 64×64 tile of the same weave, for CSS `repeat`. |
| `wordmark.svg` | Full name, one line. |
| `wordmark-stacked.svg` | Full name, two lines. |
| `wordmark-short.svg` | Nenneh Cheyassin. |
| `wordmark-foundation.svg` | The Cheyassin Foundation. |
| `lockup-horizontal.svg` | Mark beside the name. The signature. |
| `lockup-stacked.svg` | Mark above the name. |

The three earlier directions — the cowrie seal, the standalone weave square and
the plain monogram — are one commit back in git history if they are ever wanted.

## Colour

Everything uses `currentColor`. Set the colour on the parent:

```html
<span style="color: #A8813F"><!-- inline the svg --></span>
```

- On indigo `#1C1B3A` → brass `#A8813F` (4.64:1)
- On chalk `#FAF7F0` or sand `#EDE3D0` → brass deep `#8A6A2F` (4.69:1)

Brass on a light ground measures 3.34:1 and fails AA. Do not use it there.

## Clear space and minimum size

Keep clear space of one cap height of the N on every side. Below 24px use
`cipher-solid.svg`; below 16px use the wordmark instead — two letters at that
size are a smudge whichever way they are cut.

## In the site

`components/Logo.tsx` inlines the cipher path so the nav costs no extra request
and the mark inherits `currentColor`. `app/icon.svg` is the favicon. When the
geometry changes, regenerate `cipher.svg` first and copy the path across — the
component says so at the top.
