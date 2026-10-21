import type { Metadata } from "next";
import { LocalizedLegalDocument } from "@/components/LocalizedLegalDocument";

export const metadata: Metadata = {
  title: "Delete your Focus Train account",
  description:
    "Request the deletion of your Focus Train account and associated data.",
  alternates: { canonical: "/delete-account" },
};

export default function DeleteAccountPage() {
  return <LocalizedLegalDocument documentKey="deleteAccount" />;
}
