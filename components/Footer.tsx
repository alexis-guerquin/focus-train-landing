"use client";

import Link from "next/link";
import { CookieSettingsButton } from "@/components/CookieConsent";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/config/site";
import { useI18n } from "@/components/I18nProvider";

export function Footer() {
  const { messages } = useI18n();
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>
            {messages.hero.titleStart} {messages.hero.titleEnd}
          </p>
        </div>
        <nav aria-label={messages.footer.navLabel}>
          <Link href="/">{messages.footer.home}</Link>
          <Link href="/#fonctionnalites">{messages.footer.features}</Link>
          <Link href="/pricing">{messages.footer.pricing}</Link>
          <Link href="/support">{messages.footer.support}</Link>
          <Link href="/privacy">{messages.footer.privacy}</Link>
          <Link href="/mentions-legales">{messages.footer.legal}</Link>
          <a href={siteConfig.appStoreUrl} target="_blank" rel="noreferrer">
            {messages.common.appStore}
          </a>
          <a href={siteConfig.youtubeUrl} target="_blank" rel="noreferrer">
            YouTube
          </a>
          {siteConfig.googlePlayUrl ? (
            <a href={siteConfig.googlePlayUrl} target="_blank" rel="noreferrer">
              Google Play
            </a>
          ) : (
            <span className="footer-soon">
              {messages.common.googlePlaySoon}
            </span>
          )}
          <a
            href={siteConfig.appStoreReviewUrl}
            target="_blank"
            rel="noreferrer"
          >
            {messages.footer.rate}
          </a>
          <CookieSettingsButton />
        </nav>
        <div className="footer-contact">
          <p>{messages.footer.question}</p>
          <a href={`mailto:${siteConfig.supportEmail}`}>
            {siteConfig.supportEmail}
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()}{" "}
          {siteConfig.editorLegalName || siteConfig.name}.{" "}
          {messages.footer.rights}
        </p>
        <p>{messages.footer.disclaimer}</p>
      </div>
    </footer>
  );
}
