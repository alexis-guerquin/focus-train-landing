import type { Metadata } from "next";
import { LocalizedLegalDocument } from "@/components/LocalizedLegalDocument";

export const metadata: Metadata = {
  title: "Legal notice",
  description: "Legal information for the official Focus Train website.",
  alternates: { canonical: "/mentions-legales" },
};

export default function LegalNoticesPage() {
  return <LocalizedLegalDocument documentKey="legalNotices" />;
}
