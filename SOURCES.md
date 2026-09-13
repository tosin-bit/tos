# Content status and pre-launch checklist

The site is built from `WEBSITE_CONTENT_Nenneh_Cheyassin.md` (copy and structure) and
`BRIEF_Nenneh_Website_Build_Prompt.md` (visual direction), plus the research pack of
13 September 2026. This file tracks what still needs a decision before launch.

## Structure as built

```
/            Hero · Introduction · The Foundation · In the press · Film ·
             Initiatives · Quote wall · Journal · Closing
/about       Biography · The Work · Vision
/foundation  The Cheyassin Foundation · Three pillars · Nenneh 100
/journal     Press archive (2026, 2025) · Broadcast · Writing
/contact     Contact · Invitations
```

Programmes described as forthcoming — the Cheyassin Foundation, Nenneh 100, The Table,
The Conversation — are on the site as the content document specifies. They are presented
as what she is building, not as completed work.

## Before this goes live

1. **Every quotation needs her sign-off.** Most are drawn from newspaper interviews and
   read differently on her own site than in a reported piece. She may want to rewrite some.
   Quotations currently on the site: the hero statement; the three on the quote wall; and
   five in the biography ("Living in America as a Black person…", "I knew I didn't like
   poverty…", "It's nice to know where you're from…", "I got divorced twice…", "I want to be
   someone that when I leave this earth…").

2. **Her father's imprisonment is hers to disclose.** It is on the `/about` page as written
   in the content document. She has spoken about it publicly, but answering a journalist is
   not the same as putting it on your own homepage. Ask her directly and accept the answer.

3. **No political content beyond the biography.** No party material, candidate framing or
   "vice-presidential" description appears anywhere on the site. Four 2026 press items in the
   archive touch on politics; each is listed under the neutral title given in the content
   document, not the original headline. Remove them entirely if she prefers.

4. **The Foundation should be registered before its page is published.** A foundation page
   describing an unregistered entity is the single most usable thing against her on this site.

5. **One quiet correction.** Two published statistical claims have been contested. The
   Foundation launch is the moment to correct the weaker one in a line and move on. A disputed
   infant-mortality figure from a February 2026 interview is deliberately not used anywhere.

6. **Photography must be replaced.** The five images in `public/media/img/` are published
   press and organisation photographs used as working placeholders so the build could be
   reviewed. The content document is explicit that these should not ship — they belong to
   those outlets and the site will look borrowed. An original shoot is needed:

   | Currently in use | Source | Replace with |
   | --- | --- | --- |
   | `portrait-hero.jpg` | Golden Era Party biography page | Formal editorial portrait |
   | `portrait-seated.jpg` | The Point, 8 August 2025 | Seated three-quarter for the biography pin |
   | `portrait-candid.jpg` | The Standard, 11 July 2025 | Candid |
   | `work-utg-scholarship.jpg` | The Point, 3 September 2025 | Her own documentation of the work |
   | `work-farato-borehole.png` | The Point, 2 September 2025 | Her own documentation of the work |

   Beneficiaries who appear must have agreed in writing.

7. **Contact addresses must exist.** `hello@`, `foundation@` and `press@nennehcheyassin.com`
   are set live on `/contact`. Create the mailboxes or change the addresses.

8. **Name.** Standardised on Nenneh Cheyassin Secka-Kebe throughout, per the content document,
   with "Nenneh Cheyassin Kebe" as `alternateName` in the Person schema.

## Still to come

- **Film.** Nine video slots render as generated indigo textile placeholders until real clips
  land at the paths in `public/media/video/`. Drop the files in and they swap automatically;
  no code change needed. The single most valuable asset is one long, properly shot sit-down
  interview — the hero, the pull quotes, the series and months of social content all cut from it.
- **Writing.** Six essay titles are listed on `/journal`; none are written yet. The site notes
  the first is in preparation.
- **Foundation imagery.** Two of the three pillar images (`foundation-01.jpg`,
  `foundation-03.jpg`) have no asset yet and render as placeholders.
