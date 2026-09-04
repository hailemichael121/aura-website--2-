import type React from "react";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingTelegram from "@/components/floating-telegram";
import SiteEntryOverlay from "@/components/site-entry-overlay";
import { LanguageProvider } from "@/contexts/language-context";
import { ThemeProvider } from "@/contexts/theme-context";
import ErrorBoundary from "@/components/error-boundary";
import { BrandDockProvider } from "@/hooks/use-brand-dock";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/json-ld";
import ScrollToTop from "@/components/scroll-to-top";
import { Analytics } from "@vercel/analytics/next";

const poppins = localFont({
  src: [
    {
      path: "./fonts/poppins/Poppins-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/poppins/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

/** AURA guidelines name this face "Nokia" (Nokia Pure Headline). That family is proprietary, so the site self-hosts Noto Sans Ethiopic (OFL) for Amharic, with Nokia as a local() fallback if present. */
const nokia = localFont({
  src: "./fonts/ethiopic/NotoSansEthiopic-Variable.ttf",
  variable: "--font-nokia",
  display: "swap",
  weight: "100 900",
  fallback: ["Nokia Pure Headline", "Nokia", "sans-serif"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.auramentalhealth.org";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#31960F" },
    { media: "(prefers-color-scheme: dark)", color: "#31960F" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "AURA — Mental Wellness for All | Ethiopian Mental Health Initiative",
    template: "%s | AURA",
  },
  description:
    "Alliance for Understanding Recovery & Awareness (AURA) is an Ethiopian Civil Society Organization creating accessible, culturally attuned safe spaces for mental health support, recovery journeys, and stigma reduction.",
  keywords: [
    "mental health Ethiopia",
    "AURA",
    "AURA Ethiopia",
    "peer support Ethiopia",
    "mental health stigma reduction",
    "youth mental health",
    "support circles Ethiopia",
    "psychological first aid",
    "Amharic mental health",
  ],
  authors: [{ name: "AURA Executive Team", url: baseUrl }],
  creator: "AURA (Alliance for Understanding Recovery & Awareness)",
  publisher: "AURA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/?lang=en",
      "am-ET": "/?lang=am",
      "om-ET": "/?lang=om",
    },
  },
  openGraph: {
    title: "AURA — Mental Wellness for All | Ethiopian Community Support",
    description:
      "Safe spaces for open conversation, recovery support, and mental wellness awareness across Ethiopian communities.",
    url: baseUrl,
    siteName: "AURA — Alliance for Understanding Recovery & Awareness",
    images: [
      {
        url: "/images/aura-og-card.png",
        width: 1200,
        height: 630,
        alt: "AURA — Alliance for Understanding Recovery & Awareness",
        type: "image/png",
      },
      {
        url: "/images/aura-logo.png",
        width: 512,
        height: 512,
        alt: "AURA Logo",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AURA — Mental Wellness for All",
    description:
      "Community-centered mental health awareness, safe support pathways, and stigma reduction in Ethiopia.",
    images: ["/images/aura-og-card.png"],
    creator: "@AURA_MHP",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.jpg" },
      { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/icon1.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body
        className={`${poppins.variable} ${nokia.variable} font-sans antialiased`}
      >
        <ErrorBoundary>
          <ThemeProvider>
            <LanguageProvider>
              <BrandDockProvider>
                <ScrollToTop />
                <div className="flex min-h-screen flex-col">
                  <Navbar />
                  <main id="main-content" className="flex-1">
                    {children}
                  </main>
                  <Footer />
                  <FloatingTelegram />
                  <SiteEntryOverlay />
                </div>
              </BrandDockProvider>
            </LanguageProvider>
          </ThemeProvider>
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  );
}
