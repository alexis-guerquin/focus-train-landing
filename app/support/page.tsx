import type { Metadata } from "next";
import { SupportContent } from "@/components/SupportContent";
import { defaultDictionary } from "@/config/i18n";
import { absoluteUrl, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with Focus Train sessions, journeys, accounts and purchases.",
  alternates: {
    canonical: "/support",
    types: { "text/markdown": absoluteUrl("/ai/support.md") },
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/support"),
    title: "Focus Train support",
    description:
      "Help with focus sessions, progress, multiplayer, accounts and purchases.",
  },
};

export default function SupportPage() {
  const supportQuestions = defaultDictionary.support.categories.flatMap(
    (category) => category.items,
  );
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": absoluteUrl("/support/#faq"),
    url: absoluteUrl("/support"),
    name: "Focus Train support",
    inLanguage: siteConfig.language,
    dateModified: siteConfig.lastUpdated,
    mainEntity: supportQuestions.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: {
        "@type": "Answer",
        text: text.replace("{email}", siteConfig.supportEmail),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <SupportContent />
    </>
  );
}
