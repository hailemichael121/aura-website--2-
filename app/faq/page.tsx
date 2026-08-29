import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ)",
  description:
    "Common questions about AURA: services provided, registration as an Ethiopian CSO, location in Addis Ababa, and how to get involved.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "AURA FAQ — Frequently Asked Questions",
    description: "Common questions about AURA's mental health mission and community spaces in Ethiopia.",
    url: "https://www.auramentalhealth.org/faq",
  },
};

const faqs = [
  {
    q: "Is AURA a crisis clinic?",
    a: "No. AURA provides community awareness, peer support circles, and educational resources. We are not an emergency medical service or a psychiatric crisis clinic. In an immediate life-threatening crisis, call 952 or go to the nearest hospital psychiatric department.",
  },
  {
    q: "Where is AURA based?",
    a: "Bole Sub-City, Addis Ababa, Ethiopia. Email contact@auramentalhealth.com or join the Telegram hub @AURA_MHP.",
  },
  {
    q: "How do I become a member?",
    a: "Membership applications are closed for now. You can still volunteer, partner, or donate from Get Involved, and you can Sign up to use community spaces.",
  },
  {
    q: "How is AURA registered?",
    a: "AURA is an Ethiopian Civil Society Organization under Proclamation No. 1113/2011.",
  },
];

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div className="bg-background pt-24 text-foreground">
      <JsonLd data={faqSchema} />
      <section className="mx-auto max-w-3xl px-4 py-16 md:px-6">
        <h1 className="text-4xl font-semibold">FAQ</h1>
        <div className="mt-10 space-y-6">
          {faqs.map((item) => (
            <article key={item.q} className="border-b border-border pb-6">
              <h2 className="text-lg font-medium">{item.q}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted-foreground">
          Still have a question?{" "}
          <Link href="/contact" className="text-primary hover:underline">
            Contact us
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
