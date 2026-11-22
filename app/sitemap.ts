import type { MetadataRoute } from "next";
import { defaultLandingLocale, landingIcon, landingPaths, previews, shareImage, storeImages, type LandingLocale } from "@/config/landing";
import { absoluteUrl } from "@/config/site";

export const dynamic = "force-static";

const supportPages = [
  "/pricing/", "/support/", "/privacy/", "/terms/", "/delete-account/", "/mentions-legales/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    en: absoluteUrl(landingPaths.en),
    fr: absoluteUrl(landingPaths.fr),
    "x-default": absoluteUrl(landingPaths[defaultLandingLocale]),
  };
  const homepages = (Object.keys(landingPaths) as LandingLocale[]).map((locale) => ({
    url: absoluteUrl(landingPaths[locale]),
    lastModified: "2026-11-22",
    alternates: { languages },
    images: [landingIcon, shareImage, ...storeImages(locale).map(({ src }) => src), ...previews.flatMap(({ images }) => images.map(({ src }) => src))].map(absoluteUrl),
  }));
  return [...homepages, ...supportPages.map((path) => ({ url: absoluteUrl(path) }))];
}
