"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";
import { useI18n } from "@/components/I18nProvider";

const consentCookie = "focus-train-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const { messages } = useI18n();

  useEffect(() => {
    const hasConsent = document.cookie
      .split(";")
      .some((entry) => entry.trim().startsWith(`${consentCookie}=`));
    setVisible(!hasConsent);

    const reopen = () => setVisible(true);
    window.addEventListener("focus-train:open-cookie-settings", reopen);
    return () =>
      window.removeEventListener("focus-train:open-cookie-settings", reopen);
  }, []);

  function save(choice: "accepted" | "rejected") {
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${consentCookie}=${choice}; Max-Age=15552000; Path=/; SameSite=Lax${secure}`;
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside
      className="cookie-banner"
      aria-labelledby="cookie-title"
    >
      <button
        className="cookie-close"
        type="button"
        onClick={() => save("rejected")}
        aria-label={messages.cookie.close}
      >
        <X size={18} />
      </button>
      <div className="cookie-copy">
        <p className="eyebrow">
          <Cookie size={14} /> {messages.cookie.eyebrow}
        </p>
        <h2 id="cookie-title">{messages.cookie.title}</h2>
        <p>{messages.cookie.text}</p>
        <Link href="/privacy">{messages.common.learnMore}</Link>
      </div>
      <div className="cookie-actions">
        <button
          className="secondary-button"
          type="button"
          onClick={() => save("rejected")}
        >
          {messages.cookie.reject}
        </button>
        <button
          className="primary-button"
          type="button"
          onClick={() => save("accepted")}
        >
          {messages.cookie.accept}
        </button>
      </div>
    </aside>
  );
}

export function CookieSettingsButton() {
  const { messages } = useI18n();
  return (
    <button
      className="footer-cookie-button"
      type="button"
      onClick={() =>
        window.dispatchEvent(new Event("focus-train:open-cookie-settings"))
      }
    >
      {messages.cookie.settings}
    </button>
  );
}

declare global {
  interface WindowEventMap {
    "focus-train:open-cookie-settings": Event;
  }
}
