/**
 * ─────────────────────────────────────────────────────────────────
 *  SITE CONFIG — the single file to edit for every new client.
 *  Brand, copy, SEO defaults, socials and nav all live here.
 *  Colors & fonts live in `app/globals.css` (CSS variables).
 * ─────────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  /** Brand name — used in navbar, footer, metadata, OG image */
  name: "Jayendra Kasera",
  /** Legal / long-form name for JSON-LD */
  legalName: "Jayendra Kasera",
  /** One-line positioning, shown in hero + metadata */
  tagline: "Modern websites. Thoughtful engineering. Immersive experiences.",
  /** SEO description */
  description:
    "Jayendra Kasera is an independent developer building responsive websites, interactive 3D experiences, e-commerce platforms and reliable web applications.",
  /** Production URL — used for canonical, sitemap, OG */
  url: "https://aether-client-demo-lovat.vercel.app",
  /** Contact */
  email: "jayendrakasera05@gmail.com",
  location: "India — Working worldwide",

  nav: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Design System", href: "/design-system" },
  ] as const,

  socials: [
    { label: "GitHub", href: "https://github.com/jayendrakasera" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jayendra-kasera-413947276/",
    },
    { label: "Instagram", href: "https://www.instagram.com/jayendra_kasera/" },
  ] as const,

  hero: {
    /** Each entry is one line of the display title */
    titleLines: ["Digital", "experiences", "with purpose"] as const,
    subtitle:
      "I design and build responsive websites, immersive 3D experiences and practical digital products — bringing thoughtful design and reliable engineering together.",
    cta: { label: "Explore the work", href: "/work" },
  },

  /** Marquee of capabilities — not client or partner logos */
  clients: [
    "WEB DEVELOPMENT",
    "INTERACTIVE 3D",
    "RESPONSIVE DESIGN",
    "E-COMMERCE",
    "BACKEND SYSTEMS",
    "API DEVELOPMENT",
    "MOTION & INTERACTION",
    "PERFORMANCE",
  ] as const,
} as const;

export type SiteConfig = typeof siteConfig;
