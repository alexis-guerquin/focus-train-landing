"use client";

import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useI18n } from "@/components/I18nProvider";
import { StoreLogo } from "@/components/StoreLogo";

type Props = {
  label?: string;
  compact?: boolean;
  light?: boolean;
  branded?: boolean;
};

export function AppStoreButton({
  label,
  compact = false,
  light = false,
  branded = false,
}: Props) {
  const [open, setOpen] = useState(false);
  const { messages } = useI18n();
  const buttonLabel = label || messages.common.downloadAppStore;

  if (siteConfig.appStoreUrl) {
    return (
      <a
        className={`primary-button ${branded ? "store-button store-button-appstore" : ""} ${compact ? "button-compact" : ""} ${light ? "button-light" : ""}`}
        href={siteConfig.appStoreUrl}
        target="_blank"
        rel="noreferrer"
      >
        <StoreLogo platform="ios" size={compact ? 22 : 24} />
        {buttonLabel}
        {!compact && <ArrowRight size={18} aria-hidden="true" />}
      </a>
    );
  }

  return (
    <>
      <button
        className={`primary-button ${branded ? "store-button store-button-appstore" : ""} ${compact ? "button-compact" : ""} ${light ? "button-light" : ""}`}
        type="button"
        onClick={() => setOpen(true)}
      >
        <StoreLogo platform="ios" size={compact ? 22 : 24} />
        {messages.appButton.soon}
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
              aria-label={messages.common.close}
            >
              <X size={20} />
            </button>
            <span className="modal-icon" aria-hidden="true">
              🚆
            </span>
            <p className="eyebrow">{messages.appButton.modalEyebrow}</p>
            <h2 id="availability-title">{messages.appButton.modalTitle}</h2>
            <p>{messages.appButton.modalText}</p>
            <button
              className="secondary-button"
              type="button"
              onClick={() => setOpen(false)}
            >
              {messages.appButton.understood}
            </button>
          </section>
        </div>
      )}
    </>
  );
}

export function GooglePlayButton({ compact = false }: { compact?: boolean }) {
  const { messages } = useI18n();
  const content = (
    <>
      <StoreLogo platform="android" size={compact ? 22 : 24} />
      <span className="store-button-copy">
        <b>Google Play</b>
        <small>
          {siteConfig.googlePlayUrl ? "Android" : messages.appButton.soon}
        </small>
      </span>
    </>
  );

  if (siteConfig.googlePlayUrl) {
    return (
      <a
        className={`store-button store-button-play ${compact ? "button-compact" : ""}`}
        href={siteConfig.googlePlayUrl}
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={`store-button store-button-play is-coming-soon ${compact ? "button-compact" : ""}`}
      type="button"
      aria-disabled="true"
      title={messages.common.googlePlaySoon}
    >
      {content}
    </button>
  );
}
