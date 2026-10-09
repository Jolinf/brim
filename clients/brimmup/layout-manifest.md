# Layout manifest: BRIMMUP

- page_type: single_page
- primary_goal: start a WhatsApp enquiry about a cap
- primary_channel: WHATSAPP `2347026987717`; secondary INSTAGRAM_DM `brimmup`
- brand_spec_reference: `brand-spec.md` (provisional)

## Sections

| # | Section ID | Level | Decision | Variant | Content source | Missing data | Actions |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | header | page element | include | compact | wordmark (typeset) | logo file | anchors to `offerings`, `gallery`, `contact` |
| 1 | hero | REQUIRED | include | image-led | name, "Wear the mindset", Lagos, lineup image | — | WhatsApp (general template), Instagram DM (secondary) |
| 2 | offerings | REQUIRED | include | product-grid | 3 collections from brief | prices, official names | per-card WhatsApp (product template) |
| 3 | gallery | CONDITIONAL | include | carousel | 3 client campaign posters | — | display only |
| 4 | about | CONDITIONAL | exclude | — | no verified description | business description | — |
| 5 | testimonials | CONDITIONAL (RETAIL) | exclude | — | none supplied | — | — |
| 6 | location | CONDITIONAL | exclude | — | city only, no address or service area | pickup/delivery terms | — |
| 7 | hours | CONDITIONAL | exclude | — | none | — | — |
| 8 | faq | CONDITIONAL | exclude | — | none | — | — |
| 9 | contact | REQUIRED | include | action-list | WhatsApp, Instagram | — | WhatsApp (general), Instagram DM |
| 10 | social-links | CONDITIONAL | include (in footer) | labelled-links | @brimmup Instagram, TikTok | — | external links |
| 11 | footer | REQUIRED | include | standard | wordmark, Lagos, WhatsApp number, socials | — | external links |

## CTA placement

- Primary (gold, WhatsApp): hero, contact.
- Secondary (outlined): each offering card (WhatsApp with product context), Instagram in hero and contact.
- Sticky bottom bar: not used (page is short; three primary placements already reachable). Revisit if the catalogue grows.

## Responsive

- Mobile: single column; offering cards stacked; gallery as horizontal scroll-snap.
- `bp-tablet` 640px: offering grid 2 columns.
- `bp-desktop` 1024px: offering grid 3 columns, hero split (text left, image right).

## Overrides

None.
