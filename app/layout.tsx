import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Nunito_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CookieConsent } from "@/components/CookieConsent";
import { SiteMotion } from "@/components/SiteMotion";
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
    default: "Focus Train — Transforme ton focus en voyage",
    template: "%s — Focus Train",
  },
  description: siteConfig.description,
  keywords: [
    "application de concentration",
    "minuteur de productivité",
    "minuteur Pomodoro",
    "productivité gamifiée",
    "focus timer",
    "concentration en groupe",
    "application iPhone de concentration",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title: "Focus Train — Transforme ton focus en voyage",
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: "Focus Train — Transforme ton focus en voyage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Focus Train — Transforme ton focus en voyage",
    description: siteConfig.description,
    images: [absoluteUrl("/opengraph-image")],
  },
  icons: {
    icon: [{ url: appAssets.appIcon, type: "image/png", sizes: "1254x1254" }],
    apple: [{ url: appAssets.appIcon, type: "image/png", sizes: "1254x1254" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${nunito.variable} ${dmSerif.variable}`}>
      <head>
        <script
          async
          src="https://webful.fr/tracking/webful-track.js"
          data-site-id="WBF-54351"
          data-api-key="e44c1e8c75943d2c847e1d8ed2957824e92655ab5264b9a2f6c69c60a229a571"
          data-base-url="https://webful.fr"
        />
      </head>
      <body>
        <a className="skip-link" href="#contenu">
          Aller au contenu
        </a>
        <SiteMotion>
          <Header />
          <main id="contenu">{children}</main>
          <Footer />
          <CookieConsent />
        </SiteMotion>
      </body>
    </html>
  );
}
