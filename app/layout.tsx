import type React from "react";
import type { Metadata, Viewport } from "next";
import { Poppins, Noto_Sans_Ethiopic } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingTelegram from "@/components/floating-telegram";
import WelcomeModal from "@/components/welcome-modal";
import { LanguageProvider } from "@/contexts/language-context";
import { ThemeProvider } from "@/contexts/theme-context";
import ErrorBoundary from "@/components/error-boundary";
import { BrandDockProvider } from "@/hooks/use-brand-dock";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/json-ld";
import ScrollToTop from "@/components/scroll-to-top";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const notoSansEthiopic = Noto_Sans_Ethiopic({
  subsets: ["ethiopic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ethiopic",
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.auramentalhealth.org";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1a7a28" },
    { media: "(prefers-color-scheme: dark)", color: "#145c1e" },
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
    "mental wellness Addis Ababa",
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
        url: "/images/mental-health-hero.webp",
        width: 1200,
        height: 630,
        alt: "AURA Community Gathering for Mental Health Awareness",
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
    images: ["/images/mental-health-hero.webp"],
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
      <body className={`${poppins.variable} ${notoSansEthiopic.variable} font-sans antialiased`}>
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
                  <WelcomeModal />
                </div>
              </BrandDockProvider>
            </LanguageProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
