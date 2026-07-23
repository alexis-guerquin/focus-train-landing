import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.siteUrl, changeFrequency: "weekly", priority: 1 },
    {
      url: `${siteConfig.siteUrl}/support`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.siteUrl}/confidentialite`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${siteConfig.siteUrl}/mentions-legales`,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
