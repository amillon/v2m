---
name: V2M Secrétaire
description: A confident consultant's poster for a Bordeaux-area secretary, Instagram coach and breakfast host, set in uppercase statements on whole colour blocks taken from the brand's own palette (vieux rose, ink, blush, caramel, sage).
colors:
  blush: "#f2dcd9"
  rose: "#b78a7d"
  rose-text: "#7a5045"
  caramel: "#caa98a"
  violet: "#8300e9"
  violet-dark: "#6a00bd"
  ink: "#48464b"
  sage: "#abb9a4"
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
  button-soft:
    backgroundColor: "{colors.blush}"
    textColor: "{colors.violet}"
    borderColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 32px"
    height: "60px"
  button-soft-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.violet-dark}"
  button-outline-on-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.blush}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 26px"
    height: "52px"
  button-outline-on-ink-hover:
    backgroundColor: "{colors.blush}"
    textColor: "{colors.ink}"
  hero-panel:
    backgroundColor: "{colors.rose}"
    textColor: "{colors.white}"
    rounded: "{rounded.panel}"
  ink-panel:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.blush}"
    rounded: "{rounded.panel}"
  date-ticket:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
  service-row:
    backgroundColor: "{colors.white}"
    textColor: "{colors.rose-text}"
    rounded: "{rounded.tile}"
    padding: "18px 22px"
  quote-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "26px 24px 24px"
  quote-card-feature:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.blush}"
    rounded: "{rounded.card}"
    padding: "44px 44px 40px"
  placeholder-chip:
    backgroundColor: "{colors.white}"
    textColor: "{colors.rose-text}"
    borderColor: "{colors.rose}"
    rounded: "{rounded.pill}"
    padding: "3px 10px"
  step-number:
    backgroundColor: "{colors.rose}"
    textColor: "{colors.white}"
    rounded: "{rounded.tile}"
    size: "52px"
---

# Design System: V2M Secrétaire

## Overview

**Creative North Star: "Franc-Parler"**

The site speaks like a confident consultant's poster: short uppercase statements set big and tight, laid on whole blocks of colour rather than on soft cards. Since the 13/10/2026 revision (client feedback: « bien mais utilise la DA d'origine », colours only) every colour comes from the brand's live site v2m-secretaire.fr and its logo; nothing is derived. Vieux rose, the logo lettering and the live site's hero wash, is the signature field (hero panel, slogan band); ink, the live site's text colour, is the strong field (Instagram offer, featured quote, Beacons close, announcement bar); blush is the light field; caramel is the highlighter. The page moves from block to block (blush with a vieux rose panel, ink, caramel band, white, blush, sage, white, vieux rose band, white with an ink panel, rose-text footer) so each section reads as a new poster.

Density is low and loud. Headlines run at poster scale (up to 6rem) with line-height under 1, body copy stays in a calm humanist sans at reading size, and the gap between the two is the point: the statement shouts, the explanation talks. Colour does the structuring; there is almost no ornament beyond hairline rules, numbered tiles and the marker sweep.

The world refuses the pastel coach template (script headline, blush everywhere, three equal soft cards) and the earlier café-slate vocabulary (chalk handwriting, Polaroids, dotted price leaders). The direction was pinned by the client with comcassie.fr as a reference for structure; the palette is the brand's own, exactly.

**Key Characteristics:**
- Whole colour blocks per section; vieux rose and ink are the strong fields, blush the light field.
- Bricolage Grotesque 800 uppercase statements at poster scale, tight leading (0.88 to 0.92).
- One highlighted word per heading: a caramel marker bar swept in once (blush marker on sage and vieux rose), or the word set in accent ink (ink on vieux rose, caramel on ink).
- Strikethrough-then-replace headlines (a struck word in rose text, the replacement highlighted).
- Large rounded colour panels (28px) against near-square buttons (6px); the live site's blush button with a white border as the secondary action.
- Violet is action only.
- A white tone-on-tone ghost word behind the hero and a scrolling band of true facts.

## Colors

The live site's palette, used as is: vieux rose and ink carry the strong blocks, blush the light ones, caramel marks, sage hosts the reviews, violet acts. No derived tint; where a pair would fail AA, the text moves to another palette colour instead of a darker shade being invented.

### Primary
- **Vieux Rose** (#b78a7d): the logo lettering and the live site's hero wash. Fields: hero panel, slogan band, step-number tiles, photo-badge disc; ornament: logo ring, facts rules, placeholder chip border, dashed placeholder underline, scrollbar thumb. Text on it only at large size: white display 3.02, ink accent line 3.08. Never small text on it, never as text itself on light grounds.
- **Ink** (#48464b): the live site's text colour. Body text on blush (7.11), white (9.32) and sage (4.53); the strong field for the Instagram offer, featured quote, Beacons panel, announcement bar, marquee toggle. On ink: blush text 7.11, white 9.32, caramel accents only at large size (4.24).

### Secondary
- **Caramel Marker** (#caa98a): the highlighter bar under key words on blush and white, the accent ink on ink for large text only (highlighted words, week numerals, price, featured-quote name: 4.24), the facts marquee band (ink statements at 1.2rem 800, large: 4.24), check discs, underline accents on dark fields, focus colour on ink.
- **Rose Text** (#7a5045): the text-safe vieux rose. Headings and statements on light grounds (5.23 on blush, 6.86 on white), struck words, placeholder chips (6.86 on white), ticket labels, badge text (5.23 on blush); also the footer field (white 6.86, blush 5.23).

### Tertiary
- **Action Violet** (#8300e9): the live-site CTA colour, action only. Primary button (white on violet 6.68), label of the white button (6.68) and of the blush soft button (5.10), nav hover on mobile, focus ring on light grounds, skip link.
- **Violet Dark** (#6a00bd): hover of violet actions (white on it 8.95; violet-dark on blush 6.82, on white 8.95).
- **Sage** (#abb9a4): owns the reviews band only (ink 4.53; blush marker under the heading word).

### Neutral
- **Blush** (#f2dcd9): the light field (page ground, header, sticky bar, mobile sheet), text on ink (7.11) and on rose text (5.23), the soft button, the marker on sage and in the slogan band.
- **White** (#ffffff): white fields (Reels, About, Beacons wrapper), date ticket, service rows, quote cards, light button, headings on ink (9.32), large display on vieux rose (3.02), the ghost word (decorative), marquee separators.

### Named Rules
**The Violet Acts Rule.** Violet appears only on things you can press or focus: buttons, the mobile nav hover, focus rings. Never on a heading, a fill or a decoration.

**The Ground Variable Rule.** Components never hard-code their colour; they read the ground variables (`--bg`, `--fg`, `--fg-dim`, `--head`, `--accent`, `--line`, `--focus`). A light ground maps them to blush / ink / ink / rose-text / rose-text / violet; the ink field (`.field`) to ink / blush / blush / white / caramel / caramel; the hero panel to rose / white / white / white / ink / ink; the footer (`.field--rosewood`) to rose-text with blush text and white headings.

**The Large-Only Rule.** Vieux rose fields carry only large text (white display, ink accent line); every small text inside the hero sits on the white date ticket, and the secondary action is the blush soft button, not a link. Caramel on ink is for large accents only.

**The No Derived Hue Rule.** Only the nine palette values exist as colours. Hairlines are palette colours at low alpha; nothing else is mixed.

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

**The One Marked Word Rule.** Each headline carries at most one emphasised word: a caramel marker bar (0.32em tall at 88% of the line, swept in once on entry) on blush and white, a blush marker on sage and in the vieux rose slogan band (where the word turns ink), or the word set in accent ink (ink on the vieux rose hero, caramel on ink).

## Layout

Mobile first, single column, with the container capped at 1240px and gutters of 16 / 24 / 32px (at 640 / 960px). Section padding is 72px, rising to 112px from 960px. Desktop splits are asymmetric thirds: 7fr / 5fr for hero, concept, about, Beacons and testimonials; 5fr / 6fr or 5fr / 7fr when the text column leads a list. The services intro is sticky beside its rows. The Instagram weeks go 1, then 2 (640px), then 4 columns (1100px) separated by vertical hairlines.

Sections are full-bleed colour blocks; panels (hero, Beacons) are inset within the container as rounded blocks on a contrasting ground. Hairline rules (1 to 1.5px, the ground's `--line` at 22 to 30% opacity) divide lists; heavier 3px vieux rose rules sit on top of fact statements. A short-laptop query (960px+, height up to 820px) compresses the hero (title, white ticket, chips inline) so the CTA stays above the fold, checked at 1280x720.

## Elevation & Depth

Flat. Depth comes from colour blocks and from panels inset on a contrasting field, not from shadows. The only shadow in the build is a soft drop under the floating photo badge in the hero, which lifts a pill over a photograph.

### Shadow Vocabulary
- **Badge lift** (`box-shadow: 0 10px 24px -10px rgb(47 45 50 / 0.55)`): a pill label floating over a photograph. Nothing else.

### Named Rules
**The Block Not Shadow Rule.** Separate things by changing the ground colour or drawing a hairline, never by raising a card.

## Shapes

Two radii in tension: big soft corners on colour panels (28px) and photos and cards (20px), against near-square controls (6px). Mid-size tiles (16px) cover the date ticket, service rows, numbered step tiles and video slots. Pills (999px) are reserved for placeholder chips, photo captions and the hero badge. Circles mark the logo, check discs and play buttons. Placeholders and coming-soon items use a 2px dashed border (vieux rose or ink) so unfinished content is visibly unfinished.

## Components

### Buttons
Square-shouldered, uppercase, heavy: the poster's call to act.
- **Shape:** near-square (6px), 2px border, minimum 52px tall (60px large, 40px small), inline-flex with 10px gap.
- **Primary:** violet with white label, on blush and white grounds. Hover violet-dark.
- **Light:** white with violet label, the action on ink and rose-text fields. Hover blush with violet-dark label.
- **Soft (live-site button):** blush with violet label and a 2px white border, the secondary action on the vieux rose hero panel (5.10). Hover white with violet-dark label.
- **Outline:** transparent with the ground's foreground as border and label; hover fills with the foreground and inverts the label. Used as the secondary action beside a light button.
- **States:** 0.2s colour transitions on the expo-out ease; active nudges down 1px; focus is a 3px outline offset 3px in the ground's focus colour.
- **Mobile:** buttons in CTA rows go full width under 640px.

### Chips
- **Placeholder chip:** white pill with a 1px vieux rose border and rose-text label (6.86), readable on every ground, Hanken 700 0.7rem uppercase tracked 0.08em. Marks content still to be supplied ("à compléter"), paired with a dashed rose-text underline on the placeholder text.

### Cards / Containers
- **Colour panel:** vieux rose (hero) or ink (Beacons) block with 28px corners and clipped overflow; holds hero text plus a full-bleed photo, or the Beacons close. Remaps the ground variables (hero set or ink set).
- **Service row:** white tile, 16px corners, 18px 22px padding (22px 28px on desktop), uppercase rose-text name and ink detail on one baseline. The coming-soon row drops the fill for a dashed rose-text border.
- **Quote card:** white, 20px corners, ink body, uppercase rose-text name. The featured quote is ink, spans two rows, sets its words in Bricolage 600 at up to 1.7rem in blush, name in caramel.
- **Date ticket:** white 16px-cornered grid inside the vieux rose panel, cells divided by rose-text hairlines, rose-text label over uppercase ink value.

### Navigation
- **Desktop (960px+):** inline Hanken 700 0.82rem uppercase links tracked 0.08em in ink; hover turns rose-text and sweeps a 3px caramel underline in from the left. A small violet button closes the bar.
- **Mobile:** 44px square burger with a 2px rose-text border; opens a blush sheet with a 4px vieux rose bottom rule and 1.6rem uppercase Bricolage links divided by hairlines; hover violet.
- **Announcement bar:** ink strip above the header, 0.72rem uppercase blush, date and link in white, link underlined in caramel.
- **Header:** sticky blush bar, 68px, hairline bottom, logo in a 2px vieux-rose ring.

### Highlighter Marker (signature)
A caramel `linear-gradient` bar behind the key word, 0.32em tall at 88% of the line box, cloned across line breaks. With JavaScript it sweeps from 0 to 100% width over 0.9s once the heading enters the viewport; reduced motion shows the full bar.

### Facts Marquee (signature)
A caramel band of uppercase ink facts (1.2rem 800, large text) separated by a drawn six-point asterisk, looping every 38s. An ink pause/play toggle sits at its left edge; hover and focus pause it; reduced motion shows a static wrapped band.

### Ghost Word (signature)
A huge tone-on-tone uppercase word (22vw on mobile, up to 232px) in white on blush behind the hero panel, filled not outlined, `aria-hidden`.

### Numbered Steps
Vieux rose 52px tiles with 16px corners holding a white numeral, beside an uppercase rose-text statement.

## Do's and Don'ts

### Do:
- **Do** give each section a whole ground (blush, vieux rose, ink, white, sage, caramel or rose text) and alternate them so neighbours contrast.
- **Do** state claims in uppercase Bricolage Grotesque 800 with leading of 0.88 to 0.92 and mark exactly one word with the caramel marker or caramel ink.
- **Do** switch grounds by remapping the ground variables; on ink use blush body (7.11), white headings (9.32) and caramel only for large accents (4.24); on vieux rose use white or ink at large size only.
- **Do** keep violet on actions only: violet button on light grounds, white button with violet label on dark fields.
- **Do** use Rose Text (#7a5045) for any rose-coloured text; keep Vieux Rose (#b78a7d) for rings and ornament.
- **Do** mark unfinished content visibly with the caramel placeholder chip and a dashed underline or border.
- **Do** honour reduced motion: final marker state, static wrapped marquee, no transitions.

### Don't:
- **Don't** set the pastel coach template: script headlines, blush on every section, three equal soft cards.
- **Don't** bring back the café-slate vocabulary: chalk handwriting, Polaroid frames, dotted price leaders.
- **Don't** use violet for headings, fills or decoration.
- **Don't** set Vieux Rose (#b78a7d) as readable text, or small text on a vieux rose field.
- **Don't** invent a tint or shade (no bordeaux, no dimmed blush, no darker ink): pick another palette pair.
- **Don't** separate content with shadows; use a ground change or a hairline.
- **Don't** mark more than one word per headline.
- **Don't** extend sage beyond the reviews band.
