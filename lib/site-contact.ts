/** Official AURA contact addresses on our domain */
export const SITE_EMAILS = {
  info: "info@auramentalhealth.org",
  support: "support@auramentalhealth.org",
  newsletter: "newsletter@auramentalhealth.org",
} as const;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.auramentalhealth.org";
