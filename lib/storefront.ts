import type { MessagingConfig } from "./messaging";

/**
 * BRIMMUP storefront content. Every value here traces to clients/brimmup/brief.md.
 * Do not add products, prices or claims that are not in the brief.
 */

export const business = {
  name: "BRIMMUP",
  tagline: "Wear the mindset.",
  intro: "Caps from Lagos. Browse the collection, then message us on WhatsApp to order.",
  city: "Lagos, Nigeria",
  whatsappDisplay: "0702 698 7717",
  socials: [
    { label: "Instagram", handle: "@brimmup", url: "https://www.instagram.com/brimmup/" },
    { label: "TikTok", handle: "@brimmup", url: "https://www.tiktok.com/@brimmup" },
  ],
};

export const messaging: MessagingConfig = {
  primaryChannel: "WHATSAPP",
  whatsappNumber: "2347026987717",
  instagramUsername: "brimmup",
  secondaryChannel: "INSTAGRAM_DM",
  verifiedOn: "2026-10-09 (from client posters; confirm with client before launch)",
};

export interface Offering {
  id: string;
  name: string;
  description: string;
  colours: string[];
  price?: string; // only when supplied by the client
  fit?: "contain"; // wide photos that would lose a cap if cropped square
  image: { src: string; srcSet: string; width: number; height: number; alt: string };
}

/** Base path when served from a sub-folder, e.g. "/brim" on GitHub Pages. */
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const img = (name: string, small: number, large: number, width: number, height: number, alt: string) => ({
  src: `${base}/images/${name}-${large}.webp`,
  srcSet: `${base}/images/${name}-${small}.webp ${small}w, ${base}/images/${name}-${large}.webp ${large}w`,
  width,
  height,
  alt,
});

export const offerings: Offering[] = [
  {
    id: "no-days-off-trucker",
    name: "No Days Off Trucker",
    description: "Snapback trucker with raised “No Days Off” embroidery and a breathable mesh back.",
    colours: ["Tan", "Brown", "Red", "Black", "Grey"],
    image: { src: `${base}/images/no-days-off-red-480.webp`, srcSet: `${base}/images/no-days-off-red-480.webp 480w`, width: 480, height: 480, alt: "Red No Days Off trucker cap with white raised embroidery and a tan mesh back" },
  },
  {
    id: "embroidered-cross-trucker",
    name: "Embroidered Cross Trucker",
    description: "Leather-look trucker with a tonal embroidered cross on the front panel and a mesh back.",
    colours: ["Grey", "Brown", "Cream", "Olive", "Mustard", "Rust", "Slate"],
    image: img("cross-trucker-grey", 480, 800, 800, 800, "Grey leather-look trucker cap with a raised tonal cross embroidered on the front"),
  },
  {
    id: "prower-dad-cap",
    name: "Prower Dad Cap",
    description: "Washed cotton dad cap with “Prower” bear embroidery on the front.",
    colours: ["Brown", "Burgundy"],
    image: img("prower-square", 480, 800, 800, 758, "Two Prower dad caps, one brown and one burgundy, with cream bear embroidery"),
  },
  {
    id: "seethe-world-dad-cap",
    name: "Seethe World Dad Cap",
    description: "Cotton dad cap with “Seethe World” embroidery. Pictured as a matching couple set.",
    colours: ["Navy with pink embroidery", "Black with white embroidery"],
    image: img("seethe-couple", 640, 1024, 1024, 635, "Two Seethe World dad caps, navy with pink embroidery and black with white embroidery"),
    fit: "contain",
  },
];

/** Gallery: every colour the client has photographed, grouped by cap. Captions name the colour shown. */
export interface GalleryItem {
  caption: string;
  image: ReturnType<typeof img>;
}
export interface GalleryGroup {
  offeringId: string;
  title: string;
  items: GalleryItem[];
}

const poster = (name: string, height: number, alt: string) => img(name, 480, 800, 800, height, alt);

export const gallery: GalleryGroup[] = [
  {
    offeringId: "embroidered-cross-trucker",
    title: "Embroidered Cross Trucker",
    items: [
      { caption: "Grey", image: img("cross-trucker-grey", 480, 800, 800, 800, "Grey embroidered cross trucker cap") },
      { caption: "Brown", image: poster("poster-worn-your-way-brown", 1199, "Brown embroidered cross trucker cap on a wooden table") },
      { caption: "Cream with black mesh", image: poster("poster-worn-your-way-cream", 1200, "Cream embroidered cross trucker cap with a black mesh back") },
      { caption: "Olive", image: poster("poster-cross-olive", 1199, "Olive embroidered cross trucker cap") },
      { caption: "Mustard", image: poster("poster-cross-mustard", 1200, "Mustard embroidered cross trucker cap") },
      { caption: "Rust", image: poster("poster-cross-rust", 1199, "Rust embroidered cross trucker cap") },
      { caption: "Slate", image: poster("poster-cross-slate", 1199, "Slate blue-grey embroidered cross trucker cap") },
    ],
  },
  {
    offeringId: "no-days-off-trucker",
    title: "No Days Off Trucker",
    items: [
      { caption: "Tan, brown, red, black, grey", image: img("no-days-off-lineup", 640, 1200, 1200, 664, "No Days Off trucker caps in tan, brown, red, black and grey") },
      { caption: "Red", image: poster("poster-no-days-off", 800, "Red No Days Off trucker cap, with a model wearing the same cap") },
    ],
  },
  {
    offeringId: "prower-dad-cap",
    title: "Prower Dad Cap",
    items: [
      { caption: "Brown and burgundy", image: img("prower-pair", 640, 1200, 1200, 788, "Prower dad caps in brown and burgundy") },
    ],
  },
  {
    offeringId: "seethe-world-dad-cap",
    title: "Seethe World Dad Cap",
    items: [
      { caption: "Navy and black", image: poster("poster-seethe-couple", 1000, "Seethe World couple caps in navy and black") },
      { caption: "Navy with pink embroidery", image: poster("poster-seethe-navy", 1000, "Navy Seethe World dad cap with pink embroidery") },
      { caption: "Navy and black, side by side", image: poster("poster-seethe-two-caps", 1000, "Navy and black Seethe World dad caps on a bed") },
    ],
  },
];


export const heroImage = img("no-days-off-lineup", 640, 1200, 1200, 664, "Five No Days Off trucker caps in tan, brown, red, black and grey on a wooden table");

