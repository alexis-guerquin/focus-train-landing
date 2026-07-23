"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Cookie, X } from "lucide-react";
import { appAssets } from "@/config/assets";

gsap.registerPlugin(useGSAP);

const consentCookie = "focus-train-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const banner = useRef<HTMLElement>(null);

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

  useGSAP(
    () => {
      if (!visible || !banner.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.fromTo(
        banner.current,
        { y: 40, scale: 0.98, autoAlpha: 0 },
        {
          y: 0,
          scale: 1,
          autoAlpha: 1,
          duration: 0.55,
          ease: "back.out(1.25)",
        },
      );
    },
    { dependencies: [visible], scope: banner, revertOnUpdate: true },
  );

  function save(choice: "accepted" | "rejected") {
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${consentCookie}=${choice}; Max-Age=15552000; Path=/; SameSite=Lax${secure}`;
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside
      ref={banner}
      className="cookie-banner"
      aria-labelledby="cookie-title"
    >
      <button
        className="cookie-close"
        type="button"
        onClick={() => save("rejected")}
        aria-label="Fermer et refuser les cookies optionnels"
      >
        <X size={18} />
      </button>
      <div className="cookie-train" aria-hidden="true">
        <Image
          src={appAssets.footerTrain}
          alt=""
          width={2172}
          height={724}
          sizes="145px"
        />
      </div>
      <div className="cookie-copy">
        <p className="eyebrow">
          <Cookie size={14} /> Petit contrôle avant le départ
        </p>
        <h2 id="cookie-title">
          Des cookies, mais pas de miettes sur les rails.
        </h2>
        <p>
          Nous utilisons un cookie essentiel pour mémoriser ton choix. Les
          services optionnels ne sont autorisés qu’après ton accord.
        </p>
        <Link href="/confidentialite">En savoir plus</Link>
      </div>
      <div className="cookie-actions">
        <button
          className="secondary-button"
          type="button"
          onClick={() => save("rejected")}
        >
          Refuser
        </button>
        <button
          className="primary-button"
          type="button"
          onClick={() => save("accepted")}
        >
          Accepter
        </button>
      </div>
    </aside>
  );
}

export function CookieSettingsButton() {
  return (
    <button
      className="footer-cookie-button"
      type="button"
      onClick={() =>
        window.dispatchEvent(new Event("focus-train:open-cookie-settings"))
      }
    >
      Gérer les cookies
    </button>
  );
}

declare global {
  interface WindowEventMap {
    "focus-train:open-cookie-settings": Event;
  }
}
