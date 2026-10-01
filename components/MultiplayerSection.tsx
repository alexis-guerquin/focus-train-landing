"use client";

import { Armchair, Globe2, Map, Route, TrainFront, Users } from "lucide-react";
import { PhoneMockup } from "@/components/PhoneMockup";
import { SectionHeading } from "@/components/SectionHeading";
import { appAssets } from "@/config/assets";
import { useI18n } from "@/components/I18nProvider";

export function MultiplayerSection() {
  const { messages } = useI18n();
  return (
    <section className="multiplayer-shell" id="multijoueur">
      <div className="section split-section multiplayer-section">
        <div className="split-visual multi-visual">
          <PhoneMockup
            className="multi-phone multi-phone-back"
            src={appAssets.countrySelection}
            alt={messages.multiplayer.countryAlt}
          />
          <PhoneMockup
            className="multi-phone multi-phone-front"
            src={appAssets.multiplayerInteriorPrimary}
            alt={messages.multiplayer.sessionAlt}
          />
        </div>
        <div className="split-copy">
          <SectionHeading
            eyebrow={messages.multiplayer.eyebrow}
            title={messages.multiplayer.title}
          >
            <p>{messages.multiplayer.intro}</p>
          </SectionHeading>
          <div className="feature-grid compact-grid">
            <span>
              <Globe2 /> {messages.multiplayer.features[0]}
            </span>
            <span>
              <Route /> {messages.multiplayer.features[1]}
            </span>
            <span>
              <TrainFront /> {messages.multiplayer.features[2]}
            </span>
            <span>
              <Armchair /> {messages.multiplayer.features[3]}
            </span>
          </div>
        </div>
      </div>
      <div className="journey-band section">
        {messages.multiplayer.journey.map((step, index) => (
          <div key={step}>
            <span>{index + 1}</span>
            <small>{step}</small>
          </div>
        ))}
      </div>
      <div
        className="section multiplayer-gallery"
        aria-label={messages.multiplayer.galleryLabel}
      >
        <PhoneMockup
          src={appAssets.liveTrains}
          alt={messages.multiplayer.gallery[0][0]}
          caption={messages.multiplayer.gallery[0][1]}
        />
        <PhoneMockup
          src={appAssets.carriageSelection}
          alt={messages.multiplayer.gallery[1][0]}
          caption={messages.multiplayer.gallery[1][1]}
        />
        <PhoneMockup
          src={appAssets.seatSelection}
          alt={messages.multiplayer.gallery[2][0]}
          caption={messages.multiplayer.gallery[2][1]}
        />
        <PhoneMockup
          src={appAssets.multiplayerInteriorSecondary}
          alt={messages.multiplayer.gallery[3][0]}
          caption={messages.multiplayer.gallery[3][1]}
        />
      </div>
      <div className="together-band">
        <Map aria-hidden="true" />
        <strong>{messages.multiplayer.together}</strong>
        <Users aria-hidden="true" />
      </div>
    </section>
  );
}
