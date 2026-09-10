# Design plan — nennehcheyassin.com

## Colours in use

| Token | Hex | Role |
|---|---|---|
| `--indigo` | `#1C1B3A` | Ground. Most of the site sits on this. |
| `--wine` | `#5E1F32` | Secondary panels — depth behind media, hover states, The Table. |
| `--ecru` | `#EFE7D6` | Primary type on dark grounds. |
| `--brass` | `#A8813F` | Hairline rules, small type, accents. Never a fill or a button. |
| `--chalk` | `#FAF7F0` | Contrast-shock sections. Used exactly three times: Statement, Culture captions ground-break, Contact. |

## Type in use

- **Display — Bodoni Moda** (stand-in for Ogg/Canela/GT Sectra given licensing). High-contrast serif, genuine character, carries her name and every headline. Sized 12–18vw in the opening, 6–9vw at section heads.
- **Body — Archivo** (stand-in for Suisse Int'l/GT America). Neutral grotesque with slight warmth, carries paragraphs, captions, nav, labels. 18–20px body, 1.6 line-height, measure capped near 62ch.

## ASCII wireframe — Opening

```
┌──────────────────────────────────────────────────┐
│ nenneh cheyassin secka-kebe        speaking · press│ ← thin nav, brass hairline
│                                                     │
│         [ full-bleed scroll-scrubbed video ]       │
│                                                     │
│                                                     │
│  NENNEH                                            │
│  CHEYASSIN                                         │ ← display, 12–18vw, low-left,
│  SECKA-KEBE                                         │   overlapping video
│  She does not wait to be invited into the room.    │ ← one line, ecru, body
│                                                     │
└──────────────────────────────────────────────────┘
```

## ASCII wireframe — The Foundation (interior section)

```
┌──────────────────────────────────────────────────┐
│  the foundation                                    │ ← sentence-case, small, brass
│                                                     │
│  ┌──────────────┐                                  │
│  │ Women &      │        ┌──────────────────┐      │
│  │ Wealth       │        │ Education &       │      │
│  │ [image]      │        │ Opportunity       │      │
│  │              │        │ [image, taller]   │      │
│  └──────────────┘        │                   │      │
│                            └──────────────────┘      │
│              ┌──────────────────────┐               │
│              │ Health & Dignity      │               │
│              │ [image, wide, short]  │               │
│              └──────────────────────┘               │
└──────────────────────────────────────────────────┘
```
(three blocks, staggered vertically, unequal heights/widths — not a card grid)

## What makes this specifically hers

She is the reason indigo is the anchor rather than a generic dark neutral — it is Senegambian cloth, not a mood-board colour. The scale is built for a woman who spent close to a million dalasis at a concert without apologising: names set at 12–18vw, sections that refuse to whisper. And the withholding of The Table — wine ground, three sentences, no gallery, "by invitation" — only works because everywhere else on the site is generous; restraint reads as power only because it's rationed.

## Check against the trap

No ivory ground, no terracotta, no tracked-out capital labels, no thin-rule quiet-luxury default. Ground is indigo/wine, not near-black or cream. Labels are sentence-case brass, never all-caps. Numbered markers (01/02/03) are banned and not used anywhere. Changed from an earlier instinct to give Foundation a three-column card grid — that is the generic nonprofit pattern; rebuilt as three asymmetric staggered blocks per the brief.
