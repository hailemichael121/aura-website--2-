import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingTelegram from "@/components/floating-telegram";
import WelcomeModal from "@/components/welcome-modal";
import { LanguageProvider } from "@/contexts/language-context";
import { ThemeProvider } from "@/contexts/theme-context";
import ErrorBoundary from "@/components/error-boundary";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "AURA - Alliance for Understanding Recovery & Awareness",
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "Mental wellness for all. Building understanding, supporting recovery, and raising awareness about mental health in Ethiopian communities.",
  keywords:
    "mental health, Ethiopia, AURA, recovery, awareness, community support, mental wellness",
  authors: [{ name: "AURA Team" }],
  openGraph: {
    title: "AURA - Mental Wellness for All",
    description:
      "Building understanding, supporting recovery, and raising awareness about mental health in Ethiopian communities.",
    type: "website",
    locale: "en_US",
  },

  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${playfair.variable}`}>
        <ErrorBoundary>
          <ThemeProvider>
            <LanguageProvider>
              <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
                <FloatingTelegram />
                <WelcomeModal />
              </div>
            </LanguageProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
