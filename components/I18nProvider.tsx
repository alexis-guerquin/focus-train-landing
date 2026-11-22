"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import {
  dictionaries,
  isLocale,
  type Dictionary,
  type Locale,
} from "@/config/i18n";

import { defaultLandingLocale, getLandingLocale } from "@/config/landing";

const storageKey = "focus-train-language";

type I18nContextValue = {
  locale: Locale;
  messages: Dictionary;
  setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const homeLocale = getLandingLocale(usePathname());
  const [savedLocale, setLocaleState] = useState<Locale>(defaultLandingLocale);
  const locale = homeLocale ?? savedLocale;

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem(storageKey, nextLocale);
  }, []);

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(storageKey);
    if (isLocale(savedLocale)) setLocaleState(savedLocale);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({ locale, messages: dictionaries[locale], setLocale }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used inside I18nProvider");
  return context;
}
