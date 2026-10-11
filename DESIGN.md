---
name: V2M Secrétaire
description: The morning café's menu board for a Bordeaux secretary, Instagram coach and breakfast host, inked in the logo's blush, terracotta and caramel.
colors:
  blush: "#f2dcd9"
  rose: "#b78a7d"
  rose-text: "#7a5045"
  caramel: "#caa98a"
  violet: "#8300e9"
  violet-dark: "#6a00bd"
  violet-light: "#c9a2ff"
  sage: "#abb9a4"
  ink: "#48464b"
  ink-strong: "#2f2d32"
  ink-raised: "#3d3a41"
  ink-deep: "#1f1c22"
  paper: "#ffffff"
  blush-dim: "#c7b6b4"
  caramel-ink: "#4a3a30"
  sage-ink: "#3d3b40"
typography:
  display:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(2.9rem, 14.4vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 78"
  headline:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(2.1rem, 9vw, 4rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 78"
  title:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "1.45rem"
    fontWeight: 800
    lineHeight: 1.1
    fontVariation: "'wdth' 82"
  chalk:
    fontFamily: "Patrick Hand, system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 700
    lineHeight: 1.1
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  lede:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 800
    letterSpacing: "0.02em"
    fontVariation: "'wdth' 85"
rounded:
  label: "4px"
  slot: "6px"
  control: "8px"
  card: "28px"
  pill: "999px"
spacing:
  gutter-sm: "16px"
  gutter-md: "24px"
  gutter-lg: "32px"
  section-sm: "64px"
  section-lg: "104px"
  container: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.violet}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 26px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.violet-dark}"
  button-primary-on-ink:
    backgroundColor: "{colors.violet-light}"
    textColor: "{colors.ink-strong}"
  button-primary-on-ink-hover:
    backgroundColor: "{colors.blush}"
  button-ink:
    backgroundColor: "{colors.ink-strong}"
    textColor: "{colors.blush}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 26px"
    height: "52px"
  button-ink-hover:
    backgroundColor: "{colors.violet}"
    textColor: "{colors.paper}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink-strong}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 26px"
    height: "52px"
  button-line-hover:
    backgroundColor: "{colors.ink-strong}"
    textColor: "{colors.blush}"
  pill-cta:
    backgroundColor: "{colors.violet}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "40px"
  testimonial-slate:
    backgroundColor: "{colors.ink-strong}"
    textColor: "{colors.blush}"
    padding: "24px 22px 22px"
  paper-slip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-strong}"
    padding: "18px 20px 20px"
---

# Design System: V2M Secrétaire

## Overview

**Creative North Star: "L'Ardoise du Jour"**

The site is still a neighbourhood café's menu board, but written in the brand's own inks rather than on black slate. The logo's blush frame is the default ground, set type sits on it in a warm plum-grey ink, and a hand-drawn script appears only where someone would chalk a note: a price, a step number, a name under a quote, an underline under a link. The logo's terracotta lettering inks the second hero line and the handwritten notes. Grounds never sprinkle: each band takes one colour from the logo or the live site (blush, caramel, ink, white, rose, sage) and owns it edge to edge. Violet, the live site's button colour, is spent on action only.

Menu grammar organises all content. Lists are menu rows: the item on the left, a dotted leader in the middle, and the "price" on the right (a week number, a step, a short benefit). On hover or focus the leader fills with the band's hot colour (violet on light grounds). Physical objects pinned to the wall add depth: white-bordered photos held by a violet pin head and tilted a few degrees, paper slips, a round violet stamp, and small ink slates propped at an angle. Density is generous on phone and opens into asymmetric 7/5 and 5/7 splits on desktop.

Motion is limited to the board being written once. The hero title and the date lines wipe in as chalk on load, and the leaders fill on interaction. With reduced motion, the final state shows immediately.

**Key Characteristics:**
- Blush ground with plum-grey ink type; each band owns one brand colour edge to edge
- Bold condensed uppercase grotesque for display, with one handwritten face reserved for short annotations
- Menu rows with dotted leaders and right-aligned "prices" carry all list content
- Pinned, slightly rotated paper objects with soft, ink-tinted drop shadows
- Violet reserved for action: buttons, header pill, leader fill, pin heads, stamp, selection

## Colors

Measured from the logo (`assets/img/logo-v2m.jpg`) and v2m-secretaire.fr. All values are CSS custom properties on `:root`; no component hard-codes a hex.

### Primary
- **Violet** (#8300e9): the action ink. Primary buttons and the header pill (white text, 6.68:1), pin heads, the stamp, leader fill on light grounds, text selection, the focus ring on blush and white. Hovers to **Violet Dark** (#6a00bd, 8.95:1 with white).
- **Violet Light** (#c9a2ff): the action ink on the dark ink ground only (primary button with ink-strong text 6.55:1, row hover text).

### Secondary
- **Rose / terracotta** (#b78a7d): the logo lettering. Used as a ground (the reviews band) and for borders, never as text on light grounds (2.31:1 on blush).
- **Rose Text** (#7a5045): text-safe terracotta (5.23:1 on blush, 6.86:1 on white). Second hero title line, handwritten "prices" and notes, the dashed fill-in underline and the filled "à compléter" chip, the logo ring, the tagline's dotted rule.
- **Caramel** (#caa98a): the logo's "2". Ground of the offer menu; on the ink ground it is the annotation colour (6.19:1) and the focus ring; also the play badges and testimonial names.
- **Sage** (#abb9a4): ground of the Beacons band only.

### Neutral
- **Blush** (#f2dcd9): the default ground (hero, about, header); text colour on the ink ground (10.38:1).
- **Ink Strong** (#2f2d32): headings and body text on every light ground; the dark ground of the Reels band, the footer and the testimonial slates.
- **Ink** (#48464b): secondary text on blush and white (7.11:1 / 9.32:1).
- **Ink Raised** (#3d3a41): hover of the video slots. **Ink Deep** (#1f1c22): all text on the rose ground (5.57:1).
- **Paper** (#ffffff): photo mats, paper slips, the services band and the contact card.
- **Per-ground secondary inks**: Blush Dim #c7b6b4 on ink (6.99:1), Caramel Ink #4a3a30 on caramel (4.93:1), Sage Ink #3d3b40 on sage (5.38:1).

### Named Rules
**The Whole-Region Rule.** A brand colour is either a full-bleed ground for a band or a small accent. It never appears as a tinted panel or a scattered patch on another colour.

**The Violet-Is-Action Rule.** Violet marks what can be done (buttons, pill, leader fill, focus) plus the two pinned objects that echo it (pin heads, stamp). It never sets running text on caramel or sage (below 4.5:1); hover text there switches to ink-strong.

**The Ground Variables Rule.** Every band sets `--bg`, `--fg`, `--fg-dim`, `--accent`, `--hot`, `--hot-fill` and `--focus`. Components read those variables and do not hard-code colour. Focus ring: violet on blush/white, caramel on ink, ink on caramel/sage, ink-deep on rose (all ≥ 3:1).

## Typography

**Display Font:** Archivo, variable width (with Arial Narrow fallback)
**Body Font:** Hanken Grotesk (with system-ui)
**Annotation Font:** Patrick Hand (with system-ui)

**Character:** a heavy, narrowed, uppercase grotesque does the shouting, as stencilled on a café board. A plain warm grotesque reads the details. The handwriting is the waiter's chalk and appears only in short runs.

### Hierarchy
- **Display** (900, width 78%, clamp(2.9rem, 14.4vw, 6rem), 0.95): hero title only, uppercase.
- **Headline** (900, width 78%, clamp(2.1rem, 9vw, 4rem), 0.95): section titles, uppercase. The offer quote reuses it at width 85% in sentence case.
- **Title** (800, width 80–85%, 1.3–1.7rem): menu-row item names, service rows and Beacons rows, uppercase. Totals step up to 900.
- **Chalk** (Patrick Hand, 1.25–1.6rem, 1.1): menu subheads ("En bonus", "Infos pratiques"), row prices, notes, testimonial names, link labels, field keys.
- **Body** (400–600, 1.0625rem, 1.55): running text, max 46–58ch. Lede at 1.25rem, max 30–40ch.
- **Label** (800, width 85%, 1.1rem, 0.02em, uppercase): buttons and the header pill (0.85rem).

### Named Rules
**The Short Chalk Rule.** The handwritten face never sets a paragraph. It is limited to six words or so: a price, a name, a step, a note.

**The Narrow Uppercase Rule.** Display and labels always use condensed width (78–85%) and uppercase. Width is set with `font-stretch`, never by faking letter-spacing.

## Layout

Mobile first, in one column. A 1200px container with gutters of 16px, then 24px from 640px, then 32px from 960px. Bands are full-bleed, with 64px vertical padding that grows to 104px at 960px. From 960px, content splits asymmetrically: hero 7fr/5fr, offer 7fr/4fr, Reels 6/6, services, about and contact 5fr/7fr. Testimonials use a 12-column grid, with one large slate spanning six columns and two rows beside two stacked slates. Menu rows use a three-track grid (item, flexible leader with a 24px minimum, price) aligned on the baseline. The header is sticky at 64px with a burger panel below 960px.

## Elevation & Depth

Depth comes from physical objects pinned to the wall. Interface surfaces do not use it. Bands, buttons and the header are flat. Photos, paper slips and slates carry a soft, deep drop shadow, as if pinned to a board, and sit at small rotations (-3.5° to 3°).

### Shadow Vocabulary
- **Pinned photo** (`box-shadow: 0 22px 34px -14px rgb(47 45 50 / 0.5), 0 4px 8px rgb(47 45 50 / 0.18)`): white-bordered photos on blush (the Reels photo on ink keeps a black shadow at 0.7).
- **Pin head** (`box-shadow: 0 3px 5px rgb(47 45 50 / 0.4)`): the 18px violet pin on a photo.
- **Paper slip** (`box-shadow: 0 16px 26px -16px rgb(47 45 50 / 0.55)`): white slips on caramel.
- **Slate on rose** (`box-shadow: 0 18px 28px -14px rgb(47 45 50 / 0.6)`): testimonial slates.

### Named Rules
**The Pinned-Only Rule.** Only a physical object (a photo, slip, slate or play badge) casts a shadow. Controls and bands stay flat.

## Shapes

Paper is square-cornered: photos, slips and slates have no radius. Controls are gently rounded (8px). The header CTA and the "à compléter" placeholder badges are full pills. The contact card is a rounded 28px "bonbon". Circles are reserved for pin heads, the logo, play badges and the stamp. Rotation belongs to the paper vocabulary: photos, slates, the stamp, notes and the contact card tilt between -3.5° and 9°. Hand-drawn SVG strokes (a wavy chalk underline, a curved arrow) are the only drawn ornaments.

## Components

### Buttons
- **Shape:** gently rounded (8px), 52px tall, 2px border slot. The large variant is 60px tall.
- **Primary** (`.btn--primary`): violet with white text, hovers to violet dark. On the ink ground it switches to violet light with ink-strong text and hovers to blush.
- **Ink:** ink-strong with blush text. Hovers to violet with white text. Used on caramel, white and sage grounds.
- **Line:** transparent with an ink-strong border and text. Hovers to an ink-strong fill with blush text. Secondary action on caramel.
- **Active:** moves down 1px. Transitions run 0.2s on the out-expo curve.

### Chalk Link
Handwritten 1.5rem label with a hand-drawn wavy underline (SVG mask painted in `currentColor`). Hovers to the ground's hot colour. Used for the secondary action next to a primary button.

### Menu Row (signature)
Item, dotted leader (1.6px dots every 10px, in the current ink colour), and a right-aligned price. On hover or focus-within, a `--hot-fill` bar wipes across the leader (0.6s) and the price turns `--hot` (violet on blush/white, violet light on ink, ink-strong on caramel/sage). Variants: courses (uppercase item plus a dimmed description line), total (900-weight item and price above a 3px ink rule), linked rows (the whole row is the link).

### Pinned Photo
White 8px mat, square corners, a violet pin head centred on the top edge, a slight rotation and the pinned shadow.

### Testimonial Slate
Ink-strong panel on the rose ground, blush body text, name in caramel handwriting, rotated about ±0.5°.

### Paper Slip
White panel on caramel, a chalk-face subhead, rows divided by dotted ink hairlines.

### Navigation
The header sits on blush with a terracotta logo ring. Below 960px, a burger (44px, 8px radius, ink outline at 35%) opens a blush panel with a 3px violet bottom border and dotted-divided uppercase display links. From 960px, the links become 0.95rem body-weight-700 text that hovers to violet with a 3px rose underline. The violet pill CTA stays visible at every size.

### Placeholder Slot
Content that does not exist yet is shown openly: terracotta dashed underlines under fill-in values with a rotated, filled terracotta "à compléter" chip (blush text, 5.23:1), and 9:16 ink video slots with a 2px dashed blush-dim border and a caramel play badge.

## Do's and Don'ts

### Do:
- **Do** give each band one ground (blush, caramel, ink, white, rose or sage) and let components read the ground variables.
- **Do** write every list as a menu row with a dotted leader and a right-aligned price.
- **Do** keep the handwritten face to short annotations (1.25–1.6rem).
- **Do** pin real photos with a white mat, violet pin head, tilt of 3.5° or less and the pinned shadow.
- **Do** show missing content as a visibly marked placeholder (dashed terracotta fill line, "à compléter" chip, dashed video slot).
- **Do** show the final state with no animation under `prefers-reduced-motion`.

### Don't:
- **Don't** use tints or opacity washes of violet or rose. Ink at reduced alpha (hairlines, dotted dividers, shadows) is the only translucent colour.
- **Don't** set violet text on caramel or sage, or rose #b78a7d as text on light grounds. Use ink-strong or rose-text instead.
- **Don't** bring back the old slate/sunflower/fluoro-pink palette: it is not the brand.
- **Don't** put shadows on buttons, bands or the header.
- **Don't** set paragraphs or headlines in the handwritten face.
- **Don't** lay offers out as a row of equal centred cards. They are courses on a menu.
