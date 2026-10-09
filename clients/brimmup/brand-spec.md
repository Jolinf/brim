# Brand spec: BRIMMUP

Status: provisional (TELDEV recommendation built on observed brand evidence; awaiting client approval).
Direction: dark product editorial. See `brand-analysis.md` and `refero-reference.md`.

## Colour system

All values are TELDEV recommendations derived from the posters; the client has no official palette.

| Role | Token | Hex | Contrast notes |
| --- | --- | --- | --- |
| Primary brand / CTA | `brand` | `#d9a441` gold | 8.8:1 on `surface` |
| CTA foreground | `on-brand` | `#100904` | 8.8:1 on `brand` |
| Accent ground | `brand-tint` | `#382416` bark | `ink` 12.8:1, `ink-muted` 6.4:1 |
| Main background | `surface` | `#100904` walnut black | |
| Card background | `surface-raised` | `#1b120b` | `ink` 16.1:1, `ink-muted` 8.1:1 |
| Alternating band | `surface-sunken` | `#0b0603` | |
| Primary text | `ink` | `#ffedd7` cream | 17.3:1 on `surface` |
| Muted text | `ink-muted` | `#b9a993` | 8.6:1 on `surface` |
| Border (decorative) | `line` | `#40372e` dashed | |
| Control border | `line-strong` | `#7a6b5b` | 3.8:1 on `surface`, 3.6:1 on `surface-raised`; not used on `brand-tint` (2.9:1) |
| Error | `danger` | `#ff8a6b` | 8.6:1 on `surface` |

Red is not a brand colour; it appears only in product photos.

## Typography

- Display: **Oswald** 500/600, uppercase (recommended stand-in for the posters' condensed sans; exact font unknown).
- Body: **DM Sans** 400/600.
- Sizes follow the design-system type scale; display 32px, title 24px, uppercase with 0.02em tracking.
- Fallbacks: `"Arial Narrow", system-ui, sans-serif` for display; `system-ui, sans-serif` for body.

## Imagery

- Approved for use (client-supplied): clean shots 12.20.03, 12.20.04; lineup crop of 12.24.56; posters 12.21.11, 12.24.56 (1), 12.24.56 (2) whole.
- Treatment: no frames, no shadows, `radius-md` corners; products sit directly on the dark ground.
- Aspect ratios: hero 16:9-ish crop; product cards 1:1 or native crop with fixed `aspect-ratio`.
- Not to be used: 12.24.57 (2) (wrong number), SEETHE WORLD images (pending).
- No stock or generated imagery added by TELDEV.

## Components

- **Primary button:** `brand` fill, `on-brand` label, `radius-button` pill, uppercase `label` style. Only WhatsApp actions.
- **Secondary button:** transparent, `line-strong` border, `ink` label, pill. Card enquiry buttons and Instagram.
- **Offering card:** `surface-raised`, `radius-md`, 1px dashed `line`, no shadow.
- **Section headings:** Oswald uppercase `title`, preceded by a dashed divider.
- **Wordmark:** BRIMMUP set in Oswald 600 with wide tracking. The crown is added only from a supplied logo file, never redrawn.
- **Navigation:** compact header with wordmark and two anchors; not sticky.
- **Footer:** wordmark, Instagram, TikTok, WhatsApp number, Lagos.

## Radii

`radius-sm` 4px, `radius-md` 12px, `radius-button` 999px.

## Reference decisions

See `refero-reference.md` (ORYZO AI: adapt; Apple iPhone 18 Pro: adapt).

## Outstanding decisions

- Blocking for publication: prices or explicit approval to launch with "Ask for price"; confirmation that images show real stock.
- Provisional: palette, fonts, product names, SEETHE WORLD exclusion, missing logo file.
