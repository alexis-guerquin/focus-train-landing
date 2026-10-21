"use client";

import { Languages } from "lucide-react";
import { localeLabels, locales, type Locale } from "@/config/i18n";
import { useI18n } from "@/components/I18nProvider";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, messages, setLocale } = useI18n();

  return (
    <label className={`language-switcher ${compact ? "is-compact" : ""}`}>
      <Languages size={17} aria-hidden="true" />
      <span className="sr-only">{messages.common.language}</span>
      <select
        value={locale}
        aria-label={messages.common.language}
        onChange={(event) => setLocale(event.target.value as Locale)}
      >
        {locales.map((item) => (
          <option key={item} value={item}>
            {localeLabels[item]}
          </option>
        ))}
      </select>
    </label>
  );
}
