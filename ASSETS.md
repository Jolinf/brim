# Asset sources — code/assets/

Every image in this folder is a real crop taken directly from instagram.com/brimmup during this session (July 27, 2026), not a stock photo or fabrication.

- `assets/products/faith-hope-cure-cap.jpg` — Black embroidered "Faith · Hope · Cure" dad cap, cropped from a full-page Chrome screenshot of the Instagram grid. Caption on the source post describes it as pre-owned, cotton twill, adjustable buckle strap.
- `assets/products/miami-florida-cap.jpg` — Faded maroon "MIAMI FLORIDA" vintage dad cap (brand: South 4th Athletics), cropped from the same grid. Partial crop — the source screenshot only captured the lower portion of this tile.
- `assets/products/scotland-cap.jpg` — Forest green "Scotland The Brave" adjustable cap, cropped from the same grid. Partial crop, same reason as above.

**Known limitation**: the MIAMI and Scotland crops are partial (short aspect ratio) because they were captured from a scrolled viewport rather than downloaded as full-resolution source files — Instagram's CDN URLs are cookie/session-scoped and were not directly extractable. If cleaner, full-resolution product photos become available (e.g. the client sends files directly, or TikTok's content becomes accessible), swap these in — the `<img>` tags in `index.html` are the only place that needs updating.

The logo (cap icon + "Brim Up." wordmark) is built as inline SVG + web font text directly in `index.html`/`styles.css`, recreated from the client-supplied packaging mockup reference — not a raster export. This was an explicit client-authorized fallback since no clean vector logo file exists yet (see `business.md`).

No TikTok images/video are included — `assets.json`'s `_pending` field already flags that TikTok content could not be extracted due to a persistent bot-check wall. The TikTok Videos section links out to the profile instead of embedding content.
