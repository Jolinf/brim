# QA report: BRIMMUP storefront

Date: 9 Oct 2026. Build: Next.js 15.5 static export (`out/`). Checker: `node scripts/qa.mjs` plus browser checks in Chrome against `out/` served locally.

## Status: not ready to publish

One critical check fails and two blocking client confirmations are open.

## Automated checks (`scripts/qa.mjs`): 55 of 56 pass

| Result | Severity | Check |
| --- | --- | --- |
| PASS | critical | 5 WhatsApp links, all `2347026987717`, all with encoded messages, no unfilled placeholders |
| PASS | critical | Each card's message names its own cap |
| PASS | high | 2 Instagram DM links use `ig.me/m/brimmup` |
| PASS | high | All anchors (`#hero`, `#offerings`, `#contact`) have targets |
| PASS | medium | All external links have `rel="noopener noreferrer"` |
| PASS | critical | No "Buy/Pay/Book/Order now" labels; design-system placeholder colour not shipped |
| PASS | high/critical | Every image exists, has alt text and width/height |
| PASS | high | Initial load under 1 MB (about 950 KB including all JS chunks) |
| PASS | critical | og:title, og:description, og:image present |
| **FAIL** | **critical** | **og:image is `http://localhost:3000/...`. Fix: build with `SITE_URL=https://<domain>` once the domain exists** |

## Browser checks (Chrome, 9 Oct 2026)

| Result | Check |
| --- | --- |
| PASS | No horizontal overflow at 320, 360, 390, 768, 1024, 1280px |
| PASS | All links and buttons at least 48px tall (header wordmark fixed during QA) |
| PASS | Layout reviewed visually at 390px (three scroll positions) and 1280px |
| PASS | Text contrast: all pairs 6.4:1 or higher (see `brand-spec.md`) |
| NOT RUN | WhatsApp journey on a real phone (opens chat with the right business account) |
| NOT RUN | Keyboard-only pass and screen reader pass |
| NOT RUN | Lighthouse performance on throttled mobile |

## Open issues

| ID | Severity | Issue | Resolution |
| --- | --- | --- | --- |
| BR-1 | Critical | Share preview image URL points to localhost | Set `SITE_URL` at build time when the domain is known |
| BR-2 | Critical (client) | Prices unconfirmed; cards show "Ask for price" | Client to supply prices or approve launch without them |
| BR-3 | Critical (client) | Product images may be rendered mockups, not real stock | Client to confirm |
| BR-4 | High | WhatsApp number not yet tested on a phone | Tap each button on a phone before release |
| BR-5 | Medium | No logo file; wordmark set in Oswald, no crown | Client to supply logo |
| BR-6 | Medium | No Days Off card image is a 379px crop (soft on high-density screens) | Replace with a clean product photo from the client |
| BR-7 | Low | SEETHE WORLD caps excluded pending confirmation | Add as a fourth collection if confirmed |
