import type { Metadata, Viewport } from "next";
import { DM_Sans, Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-oswald", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-dm-sans", display: "swap" });

const description = "Caps from Lagos. Browse the BRIMMUP collection and order on WhatsApp.";

// Set SITE_URL (e.g. https://brimmup.com) at build time so share previews get absolute URLs.
const siteUrl = process.env.SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: "BRIMMUP | Caps from Lagos",
  description,
  openGraph: {
    title: "BRIMMUP | Wear the mindset",
    description,
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "BRIMMUP No Days Off trucker caps" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#100904", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
