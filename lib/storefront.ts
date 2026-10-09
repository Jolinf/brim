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
  image: { src: string; srcSet: string; width: number; height: number; alt: string };
}

const img = (name: string, small: number, large: number, width: number, height: number, alt: string) => ({
  src: `/images/${name}-${large}.webp`,
  srcSet: `/images/${name}-${small}.webp ${small}w, /images/${name}-${large}.webp ${large}w`,
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
    image: { src: "/images/no-days-off-red-480.webp", srcSet: "/images/no-days-off-red-480.webp 480w", width: 480, height: 480, alt: "Red No Days Off trucker cap with white raised embroidery and a tan mesh back" },
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
];

export const gallery = [
  img("poster-no-days-off", 480, 800, 800, 800, "BRIMMUP No Days Off campaign: a red trucker cap with a model wearing the same cap"),
  img("poster-worn-your-way-brown", 480, 800, 800, 1199, "BRIMMUP campaign poster: brown embroidered cross trucker cap on a wooden table"),
  img("poster-worn-your-way-cream", 480, 800, 800, 1200, "BRIMMUP campaign poster: cream embroidered cross trucker cap with a black mesh back"),
];


export const heroImage = img("no-days-off-lineup", 640, 1200, 1200, 664, "Five No Days Off trucker caps in tan, brown, red, black and grey on a wooden table");

