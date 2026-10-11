---
name: V2M Secrétaire
description: A confident consultant's poster for a Bordeaux secretary, Instagram coach and breakfast host, set in uppercase statements on whole bordeaux, blush and caramel colour blocks.
colors:
  bordeaux: "#5c1f2e"
  ink-dim: "#c7b6b4"
  blush: "#f2dcd9"
  blush-dim: "#d9b3ab"
  blush-ghost: "#e9c8c2"
  caramel: "#caa98a"
  rose: "#b78a7d"
  rose-text: "#7a5045"
  violet: "#8300e9"
  violet-dark: "#6a00bd"
  sage: "#abb9a4"
  ink: "#48464b"
  ink-strong: "#2f2d32"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 10.6vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.02em"
    fontVariation: "'opsz' 96"
  headline:
    fontFamily: "Bricolage Grotesque, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 8.6vw, 4.6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.02em"
    fontVariation: "'opsz' 96"
  title:
    fontFamily: "Bricolage Grotesque, Arial Narrow, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.01em"
  statement:
    fontFamily: "Bricolage Grotesque, Arial Narrow, system-ui, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 800
    lineHeight: 1.1
  numeral:
    fontFamily: "Bricolage Grotesque, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(4rem, 17vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.85
    letterSpacing: "-0.04em"
  lede:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.15rem, 2.4vw, 1.35rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: "Bricolage Grotesque, Arial Narrow, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0.05em"
  label:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    letterSpacing: "0.14em"
rounded:
  control: "6px"
  tile: "16px"
  card: "20px"
  panel: "28px"
  pill: "999px"
spacing:
  gutter-sm: "16px"
  gutter-md: "24px"
  gutter-lg: "32px"
  section-sm: "72px"
  section-lg: "112px"
  container: "1240px"
components:
  button-primary:
    backgroundColor: "{colors.violet}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 26px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.violet-dark}"
    textColor: "{colors.white}"
  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.violet}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 26px"
    height: "52px"
  button-light-hover:
    backgroundColor: "{colors.blush}"
    textColor: "{colors.violet-dark}"
  button-outline-on-bordeaux:
    backgroundColor: "{colors.bordeaux}"
    textColor: "{colors.blush}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 26px"
    height: "52px"
  button-outline-on-bordeaux-hover:
    backgroundColor: "{colors.blush}"
    textColor: "{colors.bordeaux}"
  colour-panel:
    backgroundColor: "{colors.bordeaux}"
    textColor: "{colors.blush}"
    rounded: "{rounded.panel}"
  service-row:
    backgroundColor: "{colors.white}"
    textColor: "{colors.bordeaux}"
    rounded: "{rounded.tile}"
    padding: "18px 22px"
  quote-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink-strong}"
    rounded: "{rounded.card}"
    padding: "26px 24px 24px"
  quote-card-feature:
    backgroundColor: "{colors.bordeaux}"
    textColor: "{colors.blush}"
    rounded: "{rounded.card}"
    padding: "44px 44px 40px"
  placeholder-chip:
    backgroundColor: "{colors.caramel}"
    textColor: "{colors.bordeaux}"
    rounded: "{rounded.pill}"
    padding: "3px 10px"
  step-number:
    backgroundColor: "{colors.bordeaux}"
    textColor: "{colors.caramel}"
    rounded: "{rounded.tile}"
    size: "52px"
---

# Design System: V2M Secrétaire

## Overview

**Creative North Star: "Franc-Parler"**

The site speaks like a confident consultant's poster: short uppercase statements set big and tight, laid on whole blocks of colour rather than on soft cards. Bordeaux, the logo's vieux rose deepened, is the dominant field; blush is the light field; caramel is the highlighter that marks the one word each claim turns on. The page moves from block to block (blush, bordeaux, caramel band, white, blush, sage, white, caramel, white, ink) so each section reads as a new poster, not as a continuation of the last.

Density is low and loud. Headlines run at poster scale (up to 6rem) with line-height under 1, body copy stays in a calm humanist sans at reading size, and the gap between the two is the point: the statement shouts, the explanation talks. Colour does the structuring; there is almost no ornament beyond hairline rules, numbered tiles and the marker sweep.

The world refuses the pastel coach template (script headline, blush everywhere, three equal soft cards) and the earlier café-slate vocabulary (chalk handwriting, Polaroids, dotted price leaders). The direction was pinned by the client with comcassie.fr as a reference, not a template; the palette stays the brand's own.

**Key Characteristics:**
- Whole colour blocks per section; bordeaux is the dominant field, blush the light field.
- Bricolage Grotesque 800 uppercase statements at poster scale, tight leading (0.88 to 0.92).
- One highlighted word per heading: a caramel marker bar swept in once, or the word set in caramel ink on bordeaux.
- Strikethrough-then-replace headlines (a struck word in rose text, the replacement highlighted).
- Large rounded colour panels (28px) against near-square buttons (6px).
- Violet is action only.
- A tone-on-tone ghost word behind the hero and a scrolling band of true facts.

## Colors

A warm brand palette pushed to contrast: deep bordeaux and soft blush carry the page in alternating blocks, caramel marks, violet acts.

### Primary
- **Bordeaux** (#5c1f2e): the dominant field. Hero panel, Instagram offer section, closing Beacons panel, featured testimonial, announcement bar, step-number tiles. On light grounds it is the heading colour and the colour of rules under statements. Pairs: blush on bordeaux 9.47, white 12.42, caramel 5.65.
- **Ink Dim** (#c7b6b4): secondary text on the ink-strong footer (6.99:1).

### Secondary
- **Caramel Marker** (#caa98a): the highlighter bar under key words, the accent ink for highlighted words, numerals, prices and labels on bordeaux (5.65) and ink-strong (6.19), the facts marquee band, the slogan band, placeholder chips, check discs. Also the focus colour on dark fields.
- **Vieux Rose** (#b78a7d): the logo lettering. Ornament and borders only (logo ring, scrollbar thumb); never text.
- **Rose Text** (#7a5045): the text-safe vieux rose. Struck words, service-row details, placeholder underlines, link underline accent on light grounds (5.23 on blush, 6.86 on white).

### Tertiary
- **Action Violet** (#8300e9): the brand's live-site CTA colour, used for action only. Primary button on light grounds (white on violet 6.68), label of the white button on bordeaux (6.68), nav hover on mobile, focus ring on light grounds, skip link.
- **Violet Dark** (#6a00bd): hover state of violet actions (white on violet-dark 8.95; violet-dark on blush 6.82 for the light-button hover).
- **Sage** (#abb9a4): owns the reviews band only (ink-strong 6.62, bordeaux 6.04 on sage).

### Neutral
- **Blush** (#f2dcd9): the light field (page ground, header, sticky bar), text on bordeaux and on ink-strong (10.38), the marker colour inside the caramel slogan band.
- **Blush Dim** (#d9b3ab): secondary text on bordeaux (6.50): week descriptions, beacon list detail, featured-quote caption.
- **Ghost Blush** (#e9c8c2): the filled ghost word behind the hero. Decorative and `aria-hidden`; never text.
- **Ink Strong** (#2f2d32): body text on light grounds (10.38 on blush) and the footer field.
- **Ink** (#48464b): secondary body text on white (9.32), quote captions.
- **White** (#ffffff): the white fields (Reels, About, Beacons wrapper), service rows and quote cards, and the light button.

### Named Rules
**The Violet Acts Rule.** Violet appears only on things you can press or focus: buttons, the mobile nav hover, focus rings. Never on a heading, a fill or a decoration. On bordeaux the action inverts to a white button with a violet label.

**The Ground Variable Rule.** Components never hard-code their colour; they read the ground variables (`--bg`, `--fg`, `--fg-dim`, `--head`, `--accent`, `--line`, `--focus`). A light ground maps them to blush / ink-strong / ink / bordeaux / rose-text / violet; a bordeaux field remaps them to bordeaux / blush / blush-dim / blush / caramel / caramel. A new section changes ground by remapping, not by restyling its children.

**The Logo Rose Is Not Ink Rule.** Vieux rose (#b78a7d) fails as text on every light ground; use Rose Text (#7a5045) wherever the rose voice must be read.

## Typography

**Display Font:** Bricolage Grotesque (variable 200 to 800, width 75 to 100%; fallback Arial Narrow, system-ui)
**Body Font:** Hanken Grotesk (variable 400 to 700; fallback system-ui, Segoe UI)

**Character:** a quirky, high-contrast grotesque at heavy weight and optical size 96 for statements, set uppercase and tight, against a clean humanist sans that keeps the explanations plain and warm.

### Hierarchy
- **Display** (800, clamp(2.6rem, 10.6vw, 6rem), 0.88, uppercase, -0.02em): the hero title only; its second line in caramel.
- **Headline** (800, clamp(2.25rem, 8.6vw, 4.6rem), 0.92, uppercase, -0.02em, balanced wrap): every section heading, carrying the one highlighted word. The Instagram heading runs larger (up to 5.4rem), the slogan tagline up to 6rem, the Beacons heading smaller (up to 4rem).
- **Title** (800, 1.5rem, 1, uppercase, -0.01em): sub-headings inside a section (bonus list, video row, footer contact enlarged to 2 to 3rem).
- **Statement** (700 to 800, 1.15 to 1.9rem, 1 to 1.15, uppercase): short factual lines that act as content: fact grid, week titles, service-row names, Reels steps, marquee items, nav links on mobile (1.6rem).
- **Numeral** (800, up to 6rem, 0.8 to 0.85, -0.04em, caramel): week numbers and the price.
- **Lede** (400, clamp(1.15rem, 2.4vw, 1.35rem), 1.45, max 40ch): the sentence under each headline.
- **Body** (400, 1.0625rem, 1.6, max 58ch): paragraphs, quotes (1.05rem, 1.55).
- **Button** (Bricolage 700, 0.95rem, 0.05em tracking, uppercase): every button; 1rem at large size, 0.78rem at small.
- **Label** (Hanken 700, 0.72 to 0.82rem, 0.08 to 0.14em, uppercase): definition-list terms (date / lieu / thème, durée / format / places), footer column heading, announcement bar, desktop nav links.

### Named Rules
**The Statement Rule.** Anything that makes a claim is uppercase Bricolage 800 with leading at or under 1.1; anything that explains is sentence-case Hanken. Do not set explanation copy in the display face.

**The One Marked Word Rule.** Each headline carries at most one emphasised word: a caramel marker bar (0.32em tall at 88% of the line, swept in once on entry) on light and caramel grounds, or the word set in caramel ink on bordeaux. Inside the caramel slogan band the marker turns blush.

## Layout

Mobile first, single column, with the container capped at 1240px and gutters of 16 / 24 / 32px (at 640 / 960px). Section padding is 72px, rising to 112px from 960px. Desktop splits are asymmetric thirds: 7fr / 5fr for hero, concept, about, Beacons and testimonials; 5fr / 6fr or 5fr / 7fr when the text column leads a list. The services intro is sticky beside its rows. The Instagram weeks go 1, then 2 (640px), then 4 columns (1100px) separated by vertical hairlines.

Sections are full-bleed colour blocks; panels (hero, Beacons) are inset within the container as rounded blocks on a contrasting ground. Hairline rules (1 to 1.5px, the ground's `--line` at 22 to 30% opacity) divide lists; heavier 3px bordeaux rules sit on top of fact statements. A short-laptop query (960px+, height up to 820px) compresses the hero so the CTA stays above the fold.

## Elevation & Depth

Flat. Depth comes from colour blocks and from panels inset on a contrasting field, not from shadows. The only shadow in the build is a soft drop under the floating photo badge in the hero, which lifts a pill over a photograph.

### Shadow Vocabulary
- **Badge lift** (`box-shadow: 0 10px 24px -10px rgb(47 45 50 / 0.55)`): a pill label floating over a photograph. Nothing else.

### Named Rules
**The Block Not Shadow Rule.** Separate things by changing the ground colour or drawing a hairline, never by raising a card.

## Shapes

Two radii in tension: big soft corners on colour panels (28px) and photos and cards (20px), against near-square controls (6px). Mid-size tiles (16px) cover the date ticket, service rows, numbered step tiles and video slots. Pills (999px) are reserved for placeholder chips, photo captions and the hero badge. Circles mark the logo, check discs and play buttons. Placeholders and coming-soon items use a 2px dashed border (rose text or bordeaux) so unfinished content is visibly unfinished.

## Components

### Buttons
Square-shouldered, uppercase, heavy: the poster's call to act.
- **Shape:** near-square (6px), 2px border, minimum 52px tall (60px large, 40px small), inline-flex with 10px gap.
- **Primary:** violet with white label, on blush and white grounds. Hover violet-dark.
- **Light:** white with violet label, the action on bordeaux and ink fields. Hover blush with violet-dark label.
- **Outline:** transparent with the ground's foreground as border and label; hover fills with the foreground and inverts the label. Used as the secondary action beside a light button.
- **States:** 0.2s colour transitions on the expo-out ease; active nudges down 1px; focus is a 3px outline offset 3px in the ground's focus colour.
- **Mobile:** buttons in CTA rows go full width under 640px.

### Chips
- **Placeholder chip:** caramel pill, bordeaux label, Hanken 700 0.7rem uppercase tracked 0.08em. Marks content still to be supplied ("à compléter"), paired with a dashed rose-text underline on the placeholder text.

### Cards / Containers
- **Colour panel:** bordeaux block with 28px corners and clipped overflow; holds hero text plus a full-bleed photo, or the Beacons close. Remaps ground variables to the bordeaux set.
- **Service row:** white tile, 16px corners, 18px 22px padding (22px 28px on desktop), uppercase bordeaux name and rose-text detail on one baseline. The coming-soon row drops the fill for a dashed rose-text border.
- **Quote card:** white, 20px corners, ink-strong body, uppercase bordeaux name. The featured quote is bordeaux, spans two rows, sets its words in Bricolage 600 at up to 1.7rem in blush, name in caramel.
- **Date ticket:** 16px-cornered outline grid on bordeaux, cells divided by hairlines, caramel label over uppercase blush value.

### Navigation
- **Desktop (960px+):** inline Hanken 700 0.82rem uppercase links tracked 0.08em in ink-strong; hover turns bordeaux and sweeps a 3px caramel underline in from the left. A small violet button closes the bar.
- **Mobile:** 44px square burger with a 2px bordeaux border; opens a blush sheet with a 4px bordeaux bottom rule and 1.6rem uppercase Bricolage links divided by hairlines; hover violet.
- **Announcement bar:** bordeaux strip above the header, 0.72rem uppercase blush, date and link in caramel.
- **Header:** sticky blush bar, 68px, hairline bottom, logo in a 2px vieux-rose ring.

### Highlighter Marker (signature)
A caramel `linear-gradient` bar behind the key word, 0.32em tall at 88% of the line box, cloned across line breaks. With JavaScript it sweeps from 0 to 100% width over 0.9s once the heading enters the viewport; reduced motion shows the full bar.

### Facts Marquee (signature)
A caramel band of uppercase bordeaux facts separated by a drawn six-point asterisk, looping every 38s. A bordeaux pause/play toggle sits at its left edge; hover and focus pause it; reduced motion shows a static wrapped band.

### Ghost Word (signature)
A huge tone-on-tone uppercase word (22vw on mobile, up to 232px) in ghost blush behind the hero panel, filled not outlined, `aria-hidden`.

### Numbered Steps
Bordeaux 52px tiles with 16px corners holding a caramel numeral, beside an uppercase bordeaux statement.

## Do's and Don'ts

### Do:
- **Do** give each section a whole ground (blush, bordeaux, white, sage, caramel or ink-strong) and alternate them so neighbours contrast.
- **Do** state claims in uppercase Bricolage Grotesque 800 with leading of 0.88 to 0.92 and mark exactly one word with the caramel marker or caramel ink.
- **Do** switch grounds by remapping the ground variables; on bordeaux and ink fields use blush text, blush-dim secondary text (6.50 on bordeaux) and caramel accents (5.65).
- **Do** keep violet on actions only: violet button on light grounds, white button with violet label on dark fields.
- **Do** use Rose Text (#7a5045) for any rose-coloured text; keep Vieux Rose (#b78a7d) for rings and ornament.
- **Do** mark unfinished content visibly with the caramel placeholder chip and a dashed underline or border.
- **Do** honour reduced motion: final marker state, static wrapped marquee, no transitions.

### Don't:
- **Don't** set the pastel coach template: script headlines, blush on every section, three equal soft cards.
- **Don't** bring back the café-slate vocabulary: chalk handwriting, Polaroid frames, dotted price leaders.
- **Don't** use violet for headings, fills or decoration.
- **Don't** set Vieux Rose (#b78a7d) or Ghost Blush (#e9c8c2) as readable text.
- **Don't** separate content with shadows; use a ground change or a hairline.
- **Don't** mark more than one word per headline.
- **Don't** extend sage beyond the reviews band.
