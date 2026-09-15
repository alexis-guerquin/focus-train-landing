"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight, Mail, Star, X } from "lucide-react";
import { siteConfig } from "@/config/site";

gsap.registerPlugin(useGSAP);

type Platform = "ios" | "android";

export function StoreAccess({ variant = "nav" }: { variant?: "nav" | "rate" }) {
  const [open, setOpen] = useState(false);
  const [platform, setPlatform] = useState<Platform>("ios");
  const [status, setStatus] = useState("");
  const modal = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  useGSAP(
    () => {
      if (!open || !modal.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.fromTo(
        modal.current,
        { y: 24, scale: 0.97, autoAlpha: 0 },
        { y: 0, scale: 1, autoAlpha: 1, duration: 0.45, ease: "power3.out" },
      );
    },
    { dependencies: [open], scope: modal, revertOnUpdate: true },
  );

  const storeUrl =
    platform === "ios" ? siteConfig.appStoreUrl : siteConfig.googlePlayUrl;
  const storeName = platform === "ios" ? "App Store" : "Google Play";

  async function joinWaitlist(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const email = String(new FormData(form).get("email") || "");
    setStatus("Inscription en cours…");

    if (siteConfig.waitlistEndpoint) {
      try {
        const response = await fetch(siteConfig.waitlistEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, platform, source: "focus-train.fr" }),
        });
        if (!response.ok) throw new Error("waitlist-request-failed");
        window.localStorage.setItem("focus-train-waitlist-email", email);
        setStatus(
          "C’est noté ! Nous te préviendrons dès que l’application sera disponible.",
        );
        form.reset();
        return;
      } catch {
        setStatus(
          "Le service est momentanément indisponible. Ta messagerie va s’ouvrir.",
        );
      }
    }

    const subject = encodeURIComponent(`Waitlist Focus Train — ${storeName}`);
    const body = encodeURIComponent(
      `Bonjour,\n\nJe souhaite rejoindre la liste d’attente Focus Train pour ${storeName}.\n\nAdresse à prévenir : ${email}`,
    );
    window.localStorage.setItem("focus-train-waitlist-email", email);
    window.location.href = `mailto:${siteConfig.supportEmail}?subject=${subject}&body=${body}`;
    setStatus("Envoie l’e-mail préparé pour confirmer ton inscription.");
  }

  function openStore(nextPlatform: Platform) {
    setPlatform(nextPlatform);
    setStatus("");
    setOpen(true);
  }

  return (
    <>
      {variant === "nav" ? (
        <div className="store-nav-actions" aria-label="Télécharger Focus Train">
          <button
            type="button"
            onClick={() => openStore("ios")}
            aria-label="Focus Train sur l’App Store"
          >
            <StoreLogo platform="ios" />
          </button>
          <button
            type="button"
            onClick={() => openStore("android")}
            aria-label="Focus Train sur Google Play"
          >
            <StoreLogo platform="android" />
          </button>
        </div>
      ) : siteConfig.appStoreReviewUrl ? (
        <a
          className="rate-app-link"
          href={siteConfig.appStoreReviewUrl}
          target="_blank"
          rel="noreferrer"
        >
          <Star size={15} aria-hidden="true" /> Noter l’application
        </a>
      ) : (
        <button
          className="rate-app-link"
          type="button"
          onClick={() => openStore("ios")}
        >
          <Star size={15} aria-hidden="true" /> Noter l’application
        </button>
      )}

      {open &&
        createPortal(
          <div
            className="modal-backdrop store-modal-backdrop"
            role="presentation"
            onMouseDown={() => setOpen(false)}
          >
            <section
              ref={modal}
              className="store-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="store-modal-title"
              onMouseDown={(event) => event.stopPropagation()}
            >
              <button
                className="modal-close"
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fermer"
              >
                <X size={20} />
              </button>
              <p className="eyebrow">Choisis ton quai</p>
              <h2 id="store-modal-title">Retrouve Focus Train</h2>
              <div
                className="store-picker"
                role="tablist"
                aria-label="Plateforme"
              >
                <button
                  className={platform === "ios" ? "is-selected" : ""}
                  type="button"
                  role="tab"
                  aria-selected={platform === "ios"}
                  onClick={() => setPlatform("ios")}
                >
                  <StoreLogo platform="ios" />
                  <span>
                    <b>App Store</b>
                    <small>iPhone et iPad</small>
                  </span>
                </button>
                <button
                  className={platform === "android" ? "is-selected" : ""}
                  type="button"
                  role="tab"
                  aria-selected={platform === "android"}
                  onClick={() => setPlatform("android")}
                >
                  <StoreLogo platform="android" />
                  <span>
                    <b>Google Play</b>
                    <small>Android</small>
                  </span>
                </button>
              </div>

              {storeUrl ? (
                <div className="store-available">
                  <p>Focus Train est disponible sur {storeName}.</p>
                  <a
                    className="primary-button"
                    href={storeUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ouvrir {storeName} <ArrowUpRight size={18} />
                  </a>
                  {platform === "ios" && siteConfig.appStoreReviewUrl && (
                    <a
                      className="store-review-link"
                      href={siteConfig.appStoreReviewUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Star size={17} /> Noter Focus Train sur l’App Store
                    </a>
                  )}
                </div>
              ) : (
                <form className="waitlist-form" onSubmit={joinWaitlist}>
                  <div className="waitlist-heading">
                    <Mail aria-hidden="true" />
                    <div>
                      <b>Pas encore disponible sur {storeName}</b>
                      <span>
                        Laisse ton e-mail et monte dans la liste d’attente.
                      </span>
                    </div>
                  </div>
                  <label htmlFor={`waitlist-email-${platform}`}>
                    Adresse e-mail
                  </label>
                  <div className="waitlist-field">
                    <input
                      id={`waitlist-email-${platform}`}
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="toi@exemple.fr"
                    />
                    <button className="primary-button" type="submit">
                      Me prévenir
                    </button>
                  </div>
                  <small>
                    Ton adresse sert uniquement à te prévenir de la
                    disponibilité. Consulte notre{" "}
                    <a href="/privacy">politique de confidentialité</a>.
                  </small>
                  <p className="waitlist-status" role="status">
                    {status}
                  </p>
                </form>
              )}
            </section>
          </div>,
          document.body,
        )}
    </>
  );
}

function StoreLogo({ platform }: { platform: Platform }) {
  if (platform === "ios") {
    return (
      <span className="store-logo store-logo-ios" aria-hidden="true">
        <svg viewBox="0 0 48 48">
          <rect width="48" height="48" rx="11" fill="#1687F8" />
          <path
            d="M15 34 25.5 14M32.8 34 22.4 14M12 29h24"
            fill="none"
            stroke="white"
            strokeWidth="4.2"
            strokeLinecap="round"
          />
        </svg>
      </span>
    );
  }
  return (
    <span className="store-logo store-logo-play" aria-hidden="true">
      <svg viewBox="0 0 48 48">
        <path d="M8 6.5 28.5 24 8 41.5Z" fill="#34A853" />
        <path d="m8 6.5 25.5 14-5 3.5Z" fill="#FABB05" />
        <path d="m8 41.5 25.5-14-5-3.5Z" fill="#EA4335" />
        <path d="m33.5 20.5 6 3.5-6 3.5-5-3.5Z" fill="#4285F4" />
      </svg>
    </span>
  );
}
