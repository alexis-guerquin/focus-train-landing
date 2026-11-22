"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLandingLocale, landingPaths } from "@/config/landing";
import { useI18n } from "@/components/I18nProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Header() {
  const locale = getLandingLocale(usePathname());
  const { locale: siteLocale } = useI18n();
  const nextLocale = locale === "fr" ? "en" : "fr";

  return (
    <header className="focus-header" lang={locale}>
      <a className="skip-link" href="#contenu">{siteLocale === "fr" ? "Aller au contenu" : "Skip to content"}</a>
      <Link className="focus-brand" href={landingPaths[locale ?? "en"]}>
        <Image src="/focus-train-favicon.png" alt="" width={44} height={44} />
        Focus Train
      </Link>
      {locale ? (
        <Link className="focus-language" href={landingPaths[nextLocale]} hrefLang={nextLocale} lang={nextLocale}>
          {nextLocale === "fr" ? "Français" : "English"}
        </Link>
      ) : <LanguageSwitcher />}
    </header>
  );
}
