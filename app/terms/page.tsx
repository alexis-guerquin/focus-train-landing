import type { Metadata } from "next";
import { LocalizedLegalDocument } from "@/components/LocalizedLegalDocument";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of use",
  description:
    "Terms for the Focus Train iOS and Android app, including accounts, multiplayer features and subscriptions.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LocalizedLegalDocument
      documentKey="terms"
      updated={siteConfig.termsUpdatedAt}
    />
  );
}
