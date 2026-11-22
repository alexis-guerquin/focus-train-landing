import { FocusLanding } from "@/components/FocusLanding";
import { landingMetadata } from "@/config/landing";

export const metadata = landingMetadata("en");

export default function Home() {
  return <FocusLanding locale="en" />;
}
