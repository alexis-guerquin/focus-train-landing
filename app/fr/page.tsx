import { FocusLanding } from "@/components/FocusLanding";
import { landingMetadata } from "@/config/landing";

export const metadata = landingMetadata("fr");

export default function FrenchHome() {
  return <FocusLanding locale="fr" />;
}
