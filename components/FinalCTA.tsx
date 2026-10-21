"use client";

import { AppStoreButton, GooglePlayButton } from "@/components/AppStoreButton";
import { FooterTrain } from "@/components/FooterTrain";
import { PetalField } from "@/components/PetalField";
import { useI18n } from "@/components/I18nProvider";

export function FinalCTA() {
  const { messages } = useI18n();
  return (
    <div className="final-cta-area">
      <section className="section final-cta">
        <PetalField />
        <div className="cta-landscape" aria-hidden="true">
          <span className="cta-sun" />
          <span className="cta-fuji" />
        </div>
        <div className="cta-copy">
          <p className="eyebrow">{messages.finalCta.eyebrow}</p>
          <h2>{messages.finalCta.title}</h2>
          <p>{messages.finalCta.intro}</p>
          <div className="final-cta-actions">
            <AppStoreButton light label={messages.common.downloadFocusTrain} />
            <GooglePlayButton />
          </div>
          <small>{messages.finalCta.availability}</small>
        </div>
        <div className="cta-ticket" aria-hidden="true">
          <small>FOCUS EXPRESS</small>
          <b>乗車券</b>
          <span>{messages.finalCta.ticket}</span>
        </div>
      </section>
      <div className="final-cta-train">
        <FooterTrain />
      </div>
    </div>
  );
}
