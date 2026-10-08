---
name: V2M Secrétaire
description: The morning café's slate board for a Bordeaux secretary, Instagram coach and breakfast host.
colors:
  slate: "#1e2824"
  slate-raised: "#2a3732"
  chalk: "#f2f4ef"
  chalk-dim: "#c9d1cb"
  sunflower: "#ffd21f"
  fluoro-pink: "#ff3d9a"
  paper: "#ffffff"
  ink-dim-on-sunflower: "#3a3a1c"
  ink-dim-on-pink: "#3a1a2a"
  ink-dim-on-paper: "#46544e"
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
  button-pink:
    backgroundColor: "{colors.fluoro-pink}"
    textColor: "{colors.slate}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 26px"
    height: "52px"
  button-pink-hover:
    backgroundColor: "{colors.sunflower}"
  button-ink:
    backgroundColor: "{colors.slate}"
    textColor: "{colors.chalk}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 26px"
    height: "52px"
  button-ink-hover:
    backgroundColor: "{colors.fluoro-pink}"
    textColor: "{colors.slate}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.slate}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 26px"
    height: "52px"
  button-line-hover:
    backgroundColor: "{colors.slate}"
    textColor: "{colors.sunflower}"
  pill-cta:
    backgroundColor: "{colors.fluoro-pink}"
    textColor: "{colors.slate}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "40px"
  testimonial-slate:
    backgroundColor: "{colors.slate}"
    textColor: "{colors.chalk}"
    padding: "24px 22px 22px"
  paper-slip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.slate}"
    padding: "18px 20px 20px"
---

# Design System: V2M Secrétaire

## Overview

**Creative North Star: "L'Ardoise du Jour"**

The site is a neighbourhood café's chalkboard. A green-black slate is the default ground, set type sits on it in chalk white, and a hand-drawn script appears only where someone would chalk a note: a price, a step number, a name under a quote, an underline under a link. Two spot inks, sunflower yellow and fluoro pink, never sprinkle. Each one takes over a whole band of the page. The offer menu sits on a full yellow field and the reviews sit on a full pink field.

Menu grammar organises all content. Lists are menu rows: the item on the left, a dotted leader in the middle, and the "price" on the right (a week number, a step, a short benefit). On hover or focus the leader fills pink. Physical objects pinned to the wall add depth: white-bordered photos held by a pink pin head and tilted a few degrees, paper slips, a round stamp, and small slates propped at an angle. Density is generous on phone and opens into asymmetric 7/5 and 5/7 splits on desktop.

Motion is limited to the board being written once. The hero title and the date lines wipe in as chalk on load, and the leaders fill on interaction. With reduced motion, the final state shows immediately.

**Key Characteristics:**
- Slate ground with chalk type, and two spot inks that each own a whole region
- Bold condensed uppercase grotesque for display, with one handwritten face reserved for short annotations
- Menu rows with dotted leaders and right-aligned "prices" carry all list content
- Pinned, slightly rotated paper objects with soft drop shadows
- One chalk-in reveal on load, and leaders that fill pink on hover/focus

## Colors

A dark slate field, chalk neutrals and two flat spot inks, with no tints and no gradients beyond faint chalk-dust smudges on the slate.

### Primary
- **Fluoro Pink**: the action ink. Primary buttons, the header pill, pin heads, the hover fill of menu leaders, selection, and the full ground of the reviews band.

### Secondary
- **Sunflower Yellow**: the chalk-highlight ink. On slate it marks the second hero title line, menu "prices", handwritten notes, testimonial names, the dashed underline of fill-in fields and the focus ring. As a ground it owns the offer menu and the Beacons band.

### Neutral
- **Slate**: the default ground, the ink text on yellow, pink and paper grounds, and the testimonial slates.
- **Raised Slate**: hover state of the video slots only.
- **Chalk**: body and display text on slate. At 14–35% alpha it draws hairlines and dotted dividers on slate.
- **Dimmed Chalk**: secondary text on slate (field keys, legal line, dashed slot borders).
- **Paper**: pinned photo borders, paper slips, the services band and the contact card.
- **Dim inks** (on sunflower, on pink, on paper): the secondary text colour for each light ground. Each is a dark ink chosen per ground, not a tint of the ink.

### Named Rules
**The Whole-Region Rule.** A spot ink is either a full-bleed ground for a band or a small accent on slate. It never appears as a tinted panel or a scattered patch on another ink.

**The Ink-on-Ink Rule.** On yellow and paper grounds, hover states that turn pink on slate turn slate instead. Pink text never sits on yellow. The one place inks cross is the pink stamp, which overprints with `mix-blend-mode: multiply`.

**The Ground Variables Rule.** Every band sets `--bg`, `--fg`, `--fg-dim` and `--focus`. Components read those variables and do not hard-code text colour. The focus ring is yellow on slate and slate on every light ground.

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
- **Pinned photo** (`box-shadow: 0 22px 34px -14px rgb(0 0 0 / 0.65), 0 4px 8px rgb(0 0 0 / 0.25)`): white-bordered photos on slate.
- **Pin head** (`box-shadow: 0 3px 5px rgb(0 0 0 / 0.4)`): the 18px pink pin on a photo.
- **Paper slip** (`box-shadow: 0 16px 26px -16px rgb(30 40 36 / 0.55)`): white slips on yellow.
- **Slate on pink** (`box-shadow: 0 18px 28px -14px rgb(30 10 20 / 0.55)`): testimonial slates.

### Named Rules
**The Pinned-Only Rule.** Only a physical object (a photo, slip, slate or play badge) casts a shadow. Controls and bands stay flat.

## Shapes

Paper is square-cornered: photos, slips and slates have no radius. Controls are gently rounded (8px). The header CTA and the "à compléter" placeholder badges are full pills. The contact card is a rounded 28px "bonbon". Circles are reserved for pin heads, the logo, play badges and the stamp. Rotation belongs to the paper vocabulary: photos, slates, the stamp, notes and the contact card tilt between -3.5° and 9°. Hand-drawn SVG strokes (a wavy chalk underline, a curved arrow) are the only drawn ornaments.

## Components

### Buttons
- **Shape:** gently rounded (8px), 52px tall, 2px border slot. The large variant is 60px tall.
- **Pink (primary):** pink ink with slate text. Hovers to yellow. Used on slate grounds.
- **Ink:** slate with chalk text. Hovers to pink with slate text. Used on light grounds.
- **Line:** transparent with a slate border and slate text. Hovers to a slate fill with yellow text. Secondary action on yellow.
- **Active:** moves down 1px. Transitions run 0.2s on the out-expo curve.

### Chalk Link
Handwritten 1.5rem label with a hand-drawn wavy chalk underline (SVG). Hovers to yellow. Used for the secondary action next to a pink button.

### Menu Row (signature)
Item, dotted leader (1.6px dots every 10px, in the current ink colour), and a right-aligned price. On hover or focus-within, a pink bar wipes across the leader (0.6s) and the price turns pink on slate or stays slate on light grounds. Variants: courses (uppercase item plus a dimmed description line), total (900-weight item and price above a 3px slate rule), linked rows (the whole row is the link).

### Pinned Photo
White 8px mat, square corners, a pink pin head centred on the top edge, a slight rotation and the pinned shadow.

### Testimonial Slate
Slate panel on the pink ground, chalk body text, name in yellow handwriting, rotated about ±0.5°.

### Paper Slip
White panel on yellow, a chalk-face subhead, rows divided by dotted slate hairlines.

### Navigation
Below 960px, a burger (44px, 8px radius, chalk outline at 35%) opens a slate panel with a 3px pink bottom border and dotted-divided uppercase display links. From 960px, the links become 0.95rem body-weight-700 text that hovers to yellow with a 3px pink underline. The pink pill CTA stays visible at every size.

### Placeholder Slot
Content that does not exist yet is shown openly: yellow dashed underlines under fill-in values with a rotated "à compléter" pill, and 9:16 video slots with a 2px dashed chalk-dim border and a yellow play badge.

## Do's and Don'ts

### Do:
- **Do** give each band one ground (slate, sunflower, pink or paper) and let components read the ground variables.
- **Do** write every list as a menu row with a dotted leader and a right-aligned price.
- **Do** keep the handwritten face to short annotations (1.25–1.6rem).
- **Do** pin real photos with a white mat, pink pin head, tilt of 3.5° or less and the pinned shadow.
- **Do** show missing content as a visibly marked placeholder (dashed yellow fill line, "à compléter" pill, dashed video slot).
- **Do** show the final state with no animation under `prefers-reduced-motion`.

### Don't:
- **Don't** use tints or opacity washes of yellow or pink. Chalk at reduced alpha on slate is the only translucent ink.
- **Don't** set pink text on a yellow ground. Hover accents switch to slate there.
- **Don't** put shadows on buttons, bands or the header.
- **Don't** set paragraphs or headlines in the handwritten face.
- **Don't** lay offers out as a row of equal centred cards. They are courses on a menu.
