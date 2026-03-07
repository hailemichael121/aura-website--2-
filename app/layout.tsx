import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingTelegram from "@/components/floating-telegram";
import WelcomeModal from "@/components/welcome-modal";
import { LanguageProvider } from "@/contexts/language-context";
import { ThemeProvider } from "@/contexts/theme-context";
import ErrorBoundary from "@/components/error-boundary";

export const metadata: Metadata = {
  title: "AURA - Alliance for Understanding Recovery & Awareness",
  icons: {
    icon: "/favicon.jpg",
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
  generator: "Yihun-shekuri",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-[Inter,system-ui,-apple-system,Segoe_UI,Roboto,sans-serif]">
        <ErrorBoundary>
          <ThemeProvider>
            <LanguageProvider>
              <div className="flex min-h-screen flex-col">
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
