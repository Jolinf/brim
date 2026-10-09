"""Crop and resize the client's photos into web-ready WebP files.

Sources stay untouched in assets/products/. Outputs go to public/images/.
Each entry: output name -> (source file, crop box in source pixels or None, widths).
Run: python scripts/prepare_images.py
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "assets" / "products"
OUT = ROOT / "public" / "images"
OUT.mkdir(parents=True, exist_ok=True)

P = "WhatsApp Image 2026-10-08 at "

JOBS = {
    # Hero and No Days Off card: the five-colour lineup, text bands cropped off
    "no-days-off-lineup": (P + "12.24.56.jpeg", (40, 360, 1214, 1010), [640, 1200]),
    # No Days Off card: the red cap from the lineup, square
    "no-days-off-red": (P + "12.24.56.jpeg", (835, 345, 1214, 724), [480]),
    # Prower card: both colours, near-square
    "prower-square": (P + "12.20.04.jpeg", (70, 40, 1210, 1120), [480, 800]),
    # Embroidered cross trucker, clean product shot (grey)
    "cross-trucker-grey": (P + "12.20.03.jpeg", (60, 180, 1067, 1187), [480, 800]),
    # Prower bear dad cap pair, clean product shot
    "prower-pair": (P + "12.20.04.jpeg", (0, 220, 1280, 1060), [640, 1200]),
    # Campaign posters for the gallery, used whole (client-made, BRIMMUP-branded)
    "poster-no-days-off": (P + "12.21.11.jpeg", None, [480, 800]),
    "poster-worn-your-way-brown": (P + "12.24.56 (1).jpeg", None, [480, 800]),
    "poster-worn-your-way-cream": (P + "12.24.56 (2).jpeg", None, [480, 800]),
}

for name, (src, box, widths) in JOBS.items():
    im = Image.open(SRC / src).convert("RGB")
    if box:
        im = im.crop(box)
    for w in widths:
        h = round(im.height * w / im.width)
        out = OUT / f"{name}-{w}.webp"
        im.resize((w, h), Image.LANCZOS).save(out, "WEBP", quality=78, method=6)
        print(f"{out.name}: {w}x{h}, {out.stat().st_size // 1024} KB")

# Share preview: WhatsApp and Instagram expect a JPEG at about 1200x630
im = Image.open(SRC / (P + '12.24.56.jpeg')).convert('RGB').crop((40, 375, 1214, 991)).resize((1200, 630), Image.LANCZOS)
im.save(OUT / 'og-image.jpg', 'JPEG', quality=82, optimize=True, progressive=True)
print('og-image.jpg:', (OUT / 'og-image.jpg').stat().st_size // 1024, 'KB')
