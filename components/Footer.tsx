"use client";

import Link from "next/link";
import { CookieSettingsButton } from "@/components/CookieConsent";
import { useI18n } from "@/components/I18nProvider";

export function Footer() {
  const { locale, messages } = useI18n();
  const fr = locale === "fr";

  return (
    <footer className="focus-footer" lang={locale}>
      <span>Focus Train</span>
      <nav aria-label={fr ? "Assistance et informations légales" : "Support and legal information"}>
        <Link href="/support/">{fr ? "Contact" : "Support"}</Link>
        <Link href="/mentions-legales/">{fr ? "Mentions légales" : "Legal notice"}</Link>
        <Link href="/terms/">{fr ? "Conditions" : "Terms"}</Link>
        <Link href="/privacy/">{fr ? "Confidentialité" : "Privacy"}</Link>
        <Link href="/pricing/">{fr ? "Tarifs" : "Pricing"}</Link>
        <CookieSettingsButton />
      </nav>
      <small>{messages.footer.disclaimer}</small>
    </footer>
  );
}
