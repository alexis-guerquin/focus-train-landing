"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AppStoreButton, GooglePlayButton } from "@/components/AppStoreButton";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useI18n } from "@/components/I18nProvider";
import { Logo } from "@/components/Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const { messages } = useI18n();
  const nav = [
    [messages.nav.features, "/#fonctionnalites"],
    [messages.nav.multiplayer, "/#multijoueur"],
    [messages.nav.videos, "/#videos"],
    [messages.nav.faq, "/#faq"],
    [messages.nav.support, "/support"],
  ];

  return (
    <>
      <a className="skip-link" href="#contenu">
        {messages.common.skipContent}
      </a>
      <header className="site-header">
        <div className="header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label={messages.nav.label}>
            {nav.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>
          <div className="header-tools">
            <LanguageSwitcher compact />
            <div className="header-store-actions">
              <AppStoreButton
                branded
                compact
                label={messages.common.appStore}
              />
              <GooglePlayButton compact />
            </div>
          </div>
          <button
            className="menu-button"
            type="button"
            aria-label={open ? messages.nav.close : messages.nav.open}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="mobile-nav" aria-label={messages.nav.mobileLabel}>
            {nav.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <LanguageSwitcher />
            <div className="mobile-store-actions">
              <AppStoreButton
                branded
                compact
                label={messages.common.appStore}
              />
              <GooglePlayButton compact />
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
