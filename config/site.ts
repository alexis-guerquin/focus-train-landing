const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://focus-train.fr";
const supportEmail =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@focus-train.fr";
const appStoreUrl = process.env.NEXT_PUBLIC_APP_STORE_URL || "";
const configuredReviewUrl = process.env.NEXT_PUBLIC_APP_STORE_REVIEW_URL || "";

export const siteConfig = {
  name: "Focus Train",
  tagline: "Transforme ton focus en voyage.",
  description:
    "Reste concentré en faisant avancer ton train. Explore le Japon, rejoins d’autres voyageurs et collectionne des souvenirs avec Focus Train.",
  siteUrl,
  appStoreUrl,
  appStoreReviewUrl:
    configuredReviewUrl ||
    (appStoreUrl
      ? `${appStoreUrl}${appStoreUrl.includes("?") ? "&" : "?"}action=write-review`
      : ""),
  googlePlayUrl: process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL || "",
  waitlistEndpoint: process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT || "",
  supportEmail,
  editorLegalName: process.env.NEXT_PUBLIC_EDITOR_LEGAL_NAME || "",
  editorAddress: process.env.NEXT_PUBLIC_EDITOR_ADDRESS || "",
  privacyUpdatedAt: process.env.NEXT_PUBLIC_PRIVACY_UPDATED_AT || "2026-09-15",
  privacyUrl: `${siteUrl}/privacy`,
  social: {},
} as const;

export const absoluteUrl = (path: string) =>
  new URL(path, siteConfig.siteUrl).toString();
