import React from "react"
import { SITE_EMAILS } from "@/lib/site-contact"

interface JsonLdProps {
  data: Record<string, any>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "AURA — Alliance for Understanding Recovery & Awareness",
    alternateName: ["AURA", "AURA Ethiopia", "AURA Mental Health Portal"],
    url: "https://www.auramentalhealth.org",
    logo: "https://www.auramentalhealth.org/images/aura-logo.webp",
    image: "https://www.auramentalhealth.org/images/aura-stationery.webp",
    description:
      "Alliance for Understanding Recovery & Awareness (AURA) is an Ethiopian Civil Society Organization providing community-centered mental health awareness, safe support pathways, and stigma reduction.",
    foundingDate: "2024",
    founders: [
      {
        "@type": "Person",
        name: "Dr. Rediet Feleke",
        jobTitle: "Founder & Executive Director",
      },
      {
        "@type": "Person",
        name: "Simret Gashaw",
        jobTitle: "Co-Founder",
      },
      {
        "@type": "Person",
        name: "Meseret Gossa",
        jobTitle: "Co-Founder",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bole",
      addressLocality: "Addis Ababa",
      addressCountry: "ET",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE_EMAILS.info,
      contactType: "customer support",
      availableLanguage: ["English", "Amharic", "Oromo"],
    },
    sameAs: [
      "https://t.me/AURA_MHP",
      "https://www.instagram.com/red8_fe",
    ],
  }

  return <JsonLd data={schema} />
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AURA Mental Health Portal",
    url: "https://www.auramentalhealth.org",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.auramentalhealth.org/resources?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return <JsonLd data={schema} />
}
