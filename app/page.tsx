import { CollectionSection } from "@/components/CollectionSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { FAQ, faqItems } from "@/components/FAQ";
import { FeatureSection } from "@/components/FeatureSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { MultiplayerSection } from "@/components/MultiplayerSection";
import { FocusSection, SoloSection } from "@/components/SoloSection";
import { WidgetSection } from "@/components/WidgetSection";
import { siteConfig } from "@/config/site";

export default function Home() {
  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    operatingSystem: "iOS",
    applicationCategory: "ProductivityApplication",
    description: siteConfig.description,
    ...(siteConfig.appStoreUrl ? { downloadUrl: siteConfig.appStoreUrl } : {}),
  };
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplication).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPage).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <FeatureSection />
      <SoloSection />
      <FocusSection />
      <MultiplayerSection />
      <CollectionSection />
      <WidgetSection />
      <ComparisonSection />
      <FAQ />
      <FinalCTA />
    </>
  );
}
