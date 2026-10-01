import type { Metadata } from "next";
import { PricingContent } from "@/components/PricingContent";
import { absoluteUrl, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Compare Focus Train's free plan with the Golden Ticket: more stops across Japan, advanced widgets and upcoming app blocking.",
  alternates: {
    canonical: "/pricing",
    types: { "text/markdown": absoluteUrl("/ai/pricing.md") },
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/pricing"),
    title: "Focus Train pricing",
    description:
      "Compare the free Focus Train plan and the Golden Ticket subscription.",
  },
};

export default function PricingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": absoluteUrl("/pricing/#webpage"),
    url: absoluteUrl("/pricing"),
    name: "Focus Train pricing",
    description: metadata.description,
    inLanguage: siteConfig.language,
    about: { "@id": absoluteUrl("/#app") },
    dateModified: siteConfig.lastUpdated,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <PricingContent />
    </>
  );
}
