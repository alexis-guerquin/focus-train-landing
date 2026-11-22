import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Nunito_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CookieConsent } from "@/components/CookieConsent";
import { I18nProvider } from "@/components/I18nProvider";
import { landingCopy, shareImage } from "@/config/landing";
import { absoluteUrl, siteConfig } from "@/config/site";
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
    default: landingCopy.en.title,
    template: "%s — Focus Train",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  category: "productivity",
  creator: siteConfig.name,
  publisher: siteConfig.name,
  manifest: "/manifest.webmanifest",
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
    title: landingCopy.en.title,
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl(shareImage),
        width: 1200,
        height: 630,
        alt: "Focus Train, the Pomodoro timer that turns focus into a journey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: landingCopy.en.title,
    description: siteConfig.description,
    images: [absoluteUrl(shareImage)],
  },
  icons: {
    icon: [{ url: "/focus-train-favicon.png", type: "image/png", sizes: "96x96" }],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
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
          <Header />
          <main id="contenu">{children}</main>
          <Footer />
          <CookieConsent />
        </I18nProvider>
      </body>
    </html>
  );
}
