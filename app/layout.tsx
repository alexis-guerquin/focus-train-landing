import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Nunito_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CookieConsent } from "@/components/CookieConsent";
import { SiteMotion } from "@/components/SiteMotion";
import { I18nProvider } from "@/components/I18nProvider";
import { appAssets } from "@/config/assets";
import { absoluteUrl, siteConfig } from "@/config/site";
import "lenis/dist/lenis.css";
import "./globals.css";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FFF9F4",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Focus Train — Pomodoro timer and a journey across Japan",
    template: "%s — Focus Train",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  category: "productivity",
  creator: siteConfig.name,
  publisher: siteConfig.name,
  manifest: "/manifest.webmanifest",
  keywords: [
    "Pomodoro",
    "Pomodoro timer iPhone",
    "Pomodoro timer Android",
    "focus app",
    "productivity app",
    "focus timer",
    "study timer",
    "ADHD focus",
    "gamified productivity",
    "Japan journey",
  ],
  alternates: {
    canonical: "/",
    types: {
      "text/markdown": absoluteUrl("/ai/focus-train.md"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title: "Focus Train — Pomodoro timer and a journey across Japan",
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: "Focus Train, the Pomodoro timer that turns focus into a journey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Focus Train — Pomodoro timer and a journey across Japan",
    description: siteConfig.description,
    images: [absoluteUrl("/opengraph-image")],
  },
  icons: {
    icon: [{ url: appAssets.appIcon, type: "image/png", sizes: "1024x1024" }],
    apple: [{ url: appAssets.appIcon, type: "image/png", sizes: "1024x1024" }],
  },
  other: {
    "apple-itunes-app": "app-id=6789511554",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${nunito.variable} ${dmSerif.variable}`}>
      <head>
        <link rel="describedby" href="/llms.txt" type="text/plain" />
        <script
          async
          src="https://webful.fr/tracking/webful-track.js"
          data-site-id="WBF-54351"
          data-api-key="e44c1e8c75943d2c847e1d8ed2957824e92655ab5264b9a2f6c69c60a229a571"
          data-base-url="https://webful.fr"
        />
      </head>
      <body>
        <I18nProvider>
          <SiteMotion>
            <Header />
            <main id="contenu">{children}</main>
            <Footer />
            <CookieConsent />
          </SiteMotion>
        </I18nProvider>
      </body>
    </html>
  );
}
