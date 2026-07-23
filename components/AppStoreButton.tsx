"use client";

import { useState } from "react";
import { ArrowRight, Smartphone, X } from "lucide-react";
import { siteConfig } from "@/config/site";

type Props = {
  label?: string;
  compact?: boolean;
  light?: boolean;
};

export function AppStoreButton({
  label = "Télécharger sur l’App Store",
  compact = false,
  light = false,
}: Props) {
  const [open, setOpen] = useState(false);

  if (siteConfig.appStoreUrl) {
    return (
      <a
        className={`primary-button ${compact ? "button-compact" : ""} ${light ? "button-light" : ""}`}
        href={siteConfig.appStoreUrl}
        target="_blank"
        rel="noreferrer"
      >
        <Smartphone size={18} aria-hidden="true" />
        {label}
        {!compact && <ArrowRight size={18} aria-hidden="true" />}
      </a>
    );
  }

  return (
    <>
      <button
        className={`primary-button ${compact ? "button-compact" : ""} ${light ? "button-light" : ""}`}
        type="button"
        onClick={() => setOpen(true)}
      >
        <Smartphone size={18} aria-hidden="true" />
        Bientôt disponible
      </button>
      {open && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={() => setOpen(false)}
        >
          <section
            className="availability-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="availability-title"
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
            <span className="modal-icon" aria-hidden="true">
              🚆
            </span>
            <p className="eyebrow">Prochain départ</p>
            <h2 id="availability-title">Focus Train arrive bientôt.</h2>
            <p>
              L’application est en préparation pour iPhone. L’App Store sera
              accessible ici dès sa publication.
            </p>
            <button
              className="secondary-button"
              type="button"
              onClick={() => setOpen(false)}
            >
              Compris
            </button>
          </section>
        </div>
      )}
    </>
  );
}
