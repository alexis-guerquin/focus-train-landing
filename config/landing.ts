import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "./site";

export type LandingLocale = "fr" | "en";

export const landingPaths = { en: "/", fr: "/fr/" } as const;
export const defaultLandingLocale: LandingLocale = "en";

export function getLandingLocale(path: string): LandingLocale | undefined {
  if (path === landingPaths.en) return "en";
  if (path === "/fr" || path === landingPaths.fr) return "fr";
}

export const appStoreLinks = {
  en: "https://apps.apple.com/us/app/id6789511554",
  fr: siteConfig.appStoreUrl,
} as const;
export const landingIcon = "/assets/focus-train-icon.png";
export const shareImage = "/focus-train-pomodoro.jpg";

const storeScenes = [
  {
    file: "01_hero",
    fr: "Visuel officiel Focus Train : train rose sous les cerisiers du Japon",
    en: "Official Focus Train artwork: a pink train under Japanese cherry blossoms",
  },
  {
    file: "03_focus_timer",
    fr: "Minuteur de concentration à bord d’un wagon de Focus Train",
    en: "Focus timer inside a Focus Train carriage",
  },
  {
    file: "05_memories",
    fr: "Collection de cartes postales et de timbres dans Focus Train",
    en: "Postcard and stamp collection in Focus Train",
  },
];

export const previews = [
  {
    id: "solo",
    fr: { title: "Pars à ton rythme", text: "Choisis un trajet sur la carte du Japon, puis regarde ton train avancer pendant ta session." },
    en: { title: "Travel at your pace", text: "Pick a route on the map of Japan, then watch your train move while you focus." },
    images: [
      {
        src: "/assets/screens/carte-du-japon.webp", width: 600, height: 1299,
        fr: "Carte du Japon dans Focus Train, avec les gares de Sapporo, Sendai et Tokyo et le bouton de choix du trajet",
        en: "Focus Train map of Japan showing Sapporo, Sendai, and Tokyo stations and the Find a journey button",
      },
      {
        src: "/assets/screens/pomodoro-en-train.webp", width: 480, height: 1044,
        fr: "Minuteur actif et train rose traversant la campagne dans Focus Train",
        en: "Running focus timer and a pink train crossing the countryside in Focus Train",
      },
    ],
  },
  {
    id: "multijoueur",
    fr: { title: "Concentre-toi à plusieurs", text: "Choisis une place et partage une session avec les voyageurs de ton wagon." },
    en: { title: "Focus together", text: "Pick a seat and share a session with other travelers in your carriage." },
    images: [
      {
        src: "/assets/screens/session-entre-amis.webp", width: 480, height: 1044,
        fr: "Voyageurs assis dans un wagon pendant une session multijoueur de Focus Train",
        en: "Travelers seated in a carriage during a multiplayer Focus Train session",
      },
    ],
  },
  {
    id: "collection",
    fr: { title: "Garde des souvenirs", text: "Retrouve tes cartes postales, tes timbres et tes statistiques de concentration dans le carnet de voyage." },
    en: { title: "Collect your memories", text: "Find your postcards, stamps, and focus stats in your travel journal." },
    images: [
      {
        src: "/assets/screens/collection-hokkaido.webp", width: 600, height: 1299,
        fr: "Carnet de voyage Focus Train avec une carte postale et des timbres de Hokkaido",
        en: "Focus Train travel journal showing a Hokkaido postcard and stamps",
      },
      {
        src: "/assets/screens/serie-et-temps-par-region.webp", width: 600, height: 1299,
        fr: "Statistiques du carnet de voyage Focus Train, avec la série de concentration et le temps passé par région du Japon",
        en: "Focus Train travel journal stats showing a focus streak and time spent in each region of Japan",
      },
    ],
  },
];

export const landingCopy = {
  fr: {
    title: "Focus Train : minuteur Pomodoro pour étudier et travailler",
    description: "Lance un minuteur Pomodoro et fais avancer un train à travers le Japon. Focus Train est disponible sur iPhone, iPad et Android, en solo ou à plusieurs.",
    imageAlt: "Icône officielle de Focus Train : train rose illustré sous les cerisiers",
  },
  en: {
    title: "Focus Train: Pomodoro Study Timer & Japan Train Journey",
    description: "Set a Pomodoro timer for studying or work and ride across Japan. Focus solo or with friends and collect postcards on iPhone, iPad, and Android.",
    imageAlt: "Official Focus Train app icon: an illustrated pink train under cherry blossoms",
  },
};

export function storeImages(locale: LandingLocale) {
  return storeScenes.map(({ file, ...alt }) => ({
    src: `/assets/store/${locale}/${file}.webp`, alt: alt[locale], width: 400, height: 869,
  }));
}

export function landingMetadata(locale: LandingLocale): Metadata {
  const { title, description, imageAlt } = landingCopy[locale];
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: landingPaths[locale],
      languages: { fr: landingPaths.fr, en: landingPaths.en, "x-default": landingPaths[defaultLandingLocale] },
    },
    openGraph: {
      type: "website", siteName: "Focus Train", title, description,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      url: landingPaths[locale],
      images: [{ url: shareImage, alt: imageAlt, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description, images: [{ url: shareImage, alt: imageAlt }] },
  };
}

export function structuredLanding(locale: LandingLocale) {
  const { title, description, imageAlt } = landingCopy[locale];
  const canonical = absoluteUrl(landingPaths[locale]);
  const website = absoluteUrl("/#website");
  const app = absoluteUrl("/#focus-train-app");
  const icon = absoluteUrl("/#official-icon");
  const screenshots = [
    ...storeImages(locale),
    ...previews.flatMap(({ images }) => images.map(({ src, width, height, ...alt }) => ({ src, alt: alt[locale], width, height }))),
  ];
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": website, name: siteConfig.name, url: absoluteUrl("/"), inLanguage: ["fr", "en"] },
      {
        "@type": "WebPage", "@id": canonical, url: canonical, name: title, description, inLanguage: locale,
        isPartOf: { "@id": website }, mainEntity: { "@id": app }, primaryImageOfPage: { "@id": icon },
      },
      {
        "@type": "ImageObject", "@id": icon, contentUrl: absoluteUrl(landingIcon), caption: imageAlt,
        width: 512, height: 512,
      },
      {
        "@type": "MobileApplication", "@id": app, name: siteConfig.name, url: absoluteUrl("/"),
        applicationCategory: "ProductivityApplication", operatingSystem: "iOS, iPadOS, Android",
        description, image: { "@id": icon },
        featureList: locale === "en"
          ? ["Customizable Pomodoro study timer", "Solo train journeys across Japan", "Multiplayer focus sessions", "Collectible postcards and stamps", "Focus streaks and time by region"]
          : ["Minuteur Pomodoro réglable", "Trajets en solo à travers le Japon", "Sessions de concentration multijoueur", "Cartes postales et timbres à collectionner", "Séries et temps de concentration par région"],
        screenshot: screenshots.map(({ src, alt, width, height }) => ({
          "@type": "ImageObject", contentUrl: absoluteUrl(src), caption: alt, width, height,
        })),
        offers: { "@type": "Offer", price: 0, priceCurrency: "EUR", url: appStoreLinks[locale] },
        downloadUrl: [appStoreLinks[locale], siteConfig.googlePlayUrl],
        sameAs: [...new Set(Object.values(appStoreLinks)), siteConfig.googlePlayUrl],
      },
    ],
  };
}
