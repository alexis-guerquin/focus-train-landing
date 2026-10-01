import type { Metadata } from "next";
import { LocalizedLegalDocument } from "@/components/LocalizedLegalDocument";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "Focus Train privacy policy for accounts, focus sessions, progress, multiplayer, subscriptions and third-party services.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LocalizedLegalDocument
      documentKey="privacy"
      updated={siteConfig.privacyUpdatedAt}
    />
  );
}
