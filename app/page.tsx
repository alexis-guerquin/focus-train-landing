import { CollectionSection } from "@/components/CollectionSection";
import { FAQ } from "@/components/FAQ";
import { FeatureSection } from "@/components/FeatureSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { MultiplayerSection } from "@/components/MultiplayerSection";
import { FocusSection, SoloSection } from "@/components/SoloSection";
import { VideoSection } from "@/components/VideoSection";
import { appAssets } from "@/config/assets";
import { absoluteUrl, siteConfig } from "@/config/site";
import { defaultDictionary } from "@/config/i18n";

export default function Home() {
  const organizationId = absoluteUrl("/#organization");
  const websiteId = absoluteUrl("/#website");
  const appId = absoluteUrl("/#app");
  const webPageId = absoluteUrl("/#webpage");

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteConfig.name,
        url: siteConfig.siteUrl,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl(appAssets.appIcon),
          width: 1024,
          height: 1024,
        },
        sameAs: [siteConfig.youtubeUrl],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: siteConfig.supportEmail,
          availableLanguage: [
            "English",
            "French",
            "Spanish",
            "Chinese",
            "Japanese",
            "Korean",
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: siteConfig.name,
        url: siteConfig.siteUrl,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        publisher: { "@id": organizationId },
      },
      {
        "@type": "WebPage",
        "@id": webPageId,
        url: siteConfig.siteUrl,
        name: "Focus Train — Pomodoro timer and a journey across Japan",
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        isPartOf: { "@id": websiteId },
        about: { "@id": appId },
        dateModified: siteConfig.lastUpdated,
      },
      {
        "@type": "MobileApplication",
        "@id": appId,
        name: siteConfig.name,
        operatingSystem: "iOS, iPadOS, Android",
        applicationCategory: "ProductivityApplication",
        applicationSubCategory: "Pomodoro timer",
        description: siteConfig.description,
        url: siteConfig.siteUrl,
        image: absoluteUrl(appAssets.appIcon),
        downloadUrl: [siteConfig.appStoreUrl, siteConfig.googlePlayUrl],
        installUrl: [siteConfig.appStoreUrl, siteConfig.googlePlayUrl],
        isAccessibleForFree: true,
        author: { "@id": organizationId },
        publisher: { "@id": organizationId },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
          url: siteConfig.appStoreUrl,
        },
        featureList: [
          "Customizable Pomodoro timer",
          "Rail journey across Japan",
          "Solo and multiplayer focus modes",
          "Postcards, stamps and badges to collect",
          "Home Screen widgets",
        ],
        sameAs: [
          siteConfig.appStoreUrl,
          siteConfig.googlePlayUrl,
          siteConfig.youtubeUrl,
        ],
      },
      {
        "@type": "VideoObject",
        "@id": absoluteUrl("/#demo-video"),
        name: "Discover Focus Train on video",
        description:
          "A Focus Train preview, from choosing a route to starting a focus session aboard the train.",
        thumbnailUrl: [absoluteUrl(appAssets.demoPoster)],
        uploadDate: siteConfig.lastUpdated,
        duration: "PT49S",
        contentUrl: absoluteUrl(appAssets.demoVideo),
        isPartOf: { "@id": webPageId },
      },
      {
        "@type": "FAQPage",
        "@id": absoluteUrl("/#faq"),
        mainEntity: defaultDictionary.faq.items.map(([name, text]) => ({
          "@type": "Question",
          name,
          acceptedAnswer: {
            "@type": "Answer",
            text: text.replace("{email}", siteConfig.supportEmail),
          },
        })),
        isPartOf: { "@id": webPageId },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <FeatureSection />
      <SoloSection />
      <FocusSection />
      <MultiplayerSection />
      <CollectionSection />
      <VideoSection />
      <FAQ />
      <FinalCTA />
    </>
  );
}
