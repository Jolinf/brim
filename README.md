# BRIMMUP storefront

Single-page, mobile-first storefront for BRIMMUP (caps, Lagos), built by TELDEV Technologies on the TELDEV Storefront design system. Customers browse caps and start a WhatsApp or Instagram conversation; there is no cart or checkout.

## Where things are

- `clients/brimmup/`: brief, brand analysis, Refero reference, brand spec, layout manifest, QA report. Read these before changing content.
- `lib/storefront.ts`: all page content (products, socials, WhatsApp number). Only add facts that are in `brief.md`.
- `lib/messaging.ts`: the shared messaging CTA contract (links, preset messages, labels, fallback).
- `components/`: page sections and the CTA button.
- `app/globals.css`: design tokens for this client.
- `assets/products/`: client originals (untouched). `public/images/`: generated web images.
- `_legacy/`: the previous site, kept for reference.

## Commands

```
npm install --include=dev   # NODE_ENV is set to production on this machine, so dev deps need this flag
npm run images              # regenerate public/images from assets/products
npm run dev                 # local preview at http://localhost:3000
SITE_URL=https://example.com npm run build   # static site in out/ (PowerShell: $env:SITE_URL="https://..."; npm run build)
npm run qa                  # release checks on out/
```

To add a price, set `price: "₦…"` on the offering in `lib/storefront.ts`; the card and the WhatsApp message pick it up.
