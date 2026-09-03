import type { Metadata } from "next";
import AboutPageContent from "@/components/about-page-content";
import { SITE_URL } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "About Us | Mission, Leadership & Governance",
  description:
    "AURA (Alliance for Understanding Recovery & Awareness) is a registered Ethiopian Civil Society Organization building accessible, culturally grounded mental health support.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About AURA — Mission, Leadership & Governance",
    description:
      "AURA is an officially registered Ethiopian Civil Society Organization dedicated to accessible, culturally attuned mental health support.",
    url: `${SITE_URL}/about`,
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
