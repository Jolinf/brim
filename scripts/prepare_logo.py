"""Extract the BRIMMUP brush logo (crown + wordmark + TM) from the client's No Days Off poster.

Source: assets/products/WhatsApp Image 2026-10-08 at 12.21.11.jpeg, top-left corner,
white artwork on near-black. Luminance becomes alpha, so the logo comes out white on transparent.
This is a stand-in until the client supplies the original logo file (see clients/brimmup/brief.md).
Run: python scripts/prepare_logo.py
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "assets" / "products" / "WhatsApp Image 2026-10-08 at 12.21.11.jpeg"
PUBLIC = ROOT / "public" / "brand"
APP = ROOT / "app"
PUBLIC.mkdir(parents=True, exist_ok=True)

LO, HI = 45, 200  # luminance mapped to alpha 0..255; JPEG noise below LO is dropped
SURFACE = (16, 9, 4)  # --color-surface #100904


def to_white_alpha(region: Image.Image) -> Image.Image:
    lum = region.convert("L").point(lambda v: 0 if v <= LO else 255 if v >= HI else round((v - LO) * 255 / (HI - LO)))
    out = Image.new("RGBA", region.size, (255, 255, 255, 0))
    out.putalpha(lum)
    return out.crop(out.getbbox())


poster = Image.open(SRC).convert("RGB")

# Wordmark with crown and TM (rows 12-132 hold the mark; "CAPS" starts at 134)
logo = to_white_alpha(poster.crop((30, 10, 370, 132)))
logo.save(PUBLIC / "logo-white.png", optimize=True)
print("logo-white.png", logo.size)

# Crown alone, for the favicon: the top band above the lettering
crown = to_white_alpha(poster.crop((120, 10, 260, 66)))
print("crown", crown.size)


def icon(size: int, pad: float) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), SURFACE + (255,))
    inner = round(size * (1 - 2 * pad))
    c = crown.copy()
    c.thumbnail((inner, inner), Image.LANCZOS) if max(c.size) > inner else None
    if max(c.size) < inner:  # upscale small source to fill the icon
        scale = inner / max(c.size)
        c = c.resize((round(c.width * scale), round(c.height * scale)), Image.LANCZOS)
    canvas.alpha_composite(c, ((size - c.width) // 2, (size - c.height) // 2))
    return canvas


icon(192, 0.14).save(PUBLIC / "icon-192.png")
icon(180, 0.18).convert("RGB").save(PUBLIC / "apple-touch-icon.png")
icon(48, 0.1).save(APP / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
print("icons: app/favicon.ico, public/brand/icon-192.png, public/brand/apple-touch-icon.png")
