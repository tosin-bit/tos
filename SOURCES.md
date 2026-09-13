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

6. **Photography — now hers, with one exception.** Twenty-one of her own photographs were
   supplied on 13 September 2026 and are in `public/media/img/`. Nine studio portraits (black
   and gold grand boubou, turquoise lace, rose, brown and gold, white and gold) and twelve
   documentary frames from the Farato borehole handover. The press portraits previously used as
   placeholders have been deleted from the repository.

   Still a press photograph: `work-utg-scholarship.jpg` (The Point, 3 September 2025), used on
   `/about` under Philanthropy and as the Education & Opportunity pillar. Replace it with her own
   documentation of the UTG presentation, or secure permission.

   Beneficiaries who appear in the Farato photographs must have agreed in writing before launch.

7. **Contact addresses must exist.** `hello@`, `foundation@` and `press@nennehcheyassin.com`
   are set live on `/contact`. Create the mailboxes or change the addresses.

8. **Name.** Standardised on Nenneh Cheyassin Secka-Kebe throughout, per the content document,
   with "Nenneh Cheyassin Kebe" as `alternateName` in the Person schema.

## Film supplied so far

Two clips from the Farato borehole handover are in and live on the site. Both arrived as
social-media exports rather than camera originals, so each needed work:

| File | Where | Notes |
| --- | --- | --- |
| `farato-nenneh-crowd.mp4` / `.webm` | Home, "The day the tank was finished" | Recovered from a letterboxed landscape shot inside a vertical reel. Native resolution is only 464×314, so it is shown contained — it cannot go full-bleed without visible softness. 12s, muted, poster frame. |
| `farato-celebration.mp4` | Foundation and the Farato section | Had a burned-in social caption ("Finally The Tank Is Done" plus an emoji) across the top; cropped out, since the brief bans emoji and it read as an Instagram repost. Trimmed to 28s from 1m41s. Vertical 9:16, so shown portrait. 5.3MB — the heaviest asset on the site. |

A third clip supplied on 13 September (`VIDEO-2026-09-13-13-48-37.mp4`) was **not** used. Despite a
landscape container it carries rotation metadata and plays vertical, and the content is handheld
indoor party footage — motion-blurred, low light, a performer at a microphone. It is weaker than
both clips above and does not match the register of the rest of the site. Say where you want it and
it can go in; otherwise it is better left out.

WebM is supplied only where it actually beat the MP4 on size; on the celebration clip VP9 came
out 20% larger at equivalent quality, so that one ships MP4 only.

**Worth asking for:** the camera originals behind these reels. The stills from the same day are
clearly professional, so properly shot footage almost certainly exists — it would be higher
resolution, landscape, and free of social captions. The single most valuable asset remains one
long, properly shot sit-down interview: the hero, the pull quotes, the series and months of
social content all cut from it.

## Still to come

- **Remaining film slots** render as generated textile placeholders until clips land at the
  paths in `public/media/video/`. Drop the files in and they swap automatically.
- **Writing.** Six essay titles are listed on `/journal`; none are written yet. The site notes
  the first is in preparation.
- **Foundation imagery** now uses real Farato photographs for Women & Wealth and Health & Dignity.
- **Nenneh 100 portraits.** The eight-portrait wall was removed: the first cohort has not been
  selected, so there are no beneficiaries to photograph. Captioning the Farato gardeners as Nenneh
  100 women would have misrepresented them. The section now says portraits will follow.
- **Archive.** The two slots on `/about` for her father and family are still empty and render as
  placeholders. Those are the family photographs the content document says to request.
