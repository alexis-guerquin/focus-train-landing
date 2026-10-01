"use client";

import { Clock3, Map, MapPin, Route, Volume2 } from "lucide-react";
import { PhoneMockup } from "@/components/PhoneMockup";
import { SectionHeading } from "@/components/SectionHeading";
import { appAssets } from "@/config/assets";
import { useI18n } from "@/components/I18nProvider";

const soloIcons = [Map, Route, MapPin, Clock3];

export function SoloSection() {
  const { messages } = useI18n();
  return (
    <section className="section split-section solo-section" id="solo">
      <div className="split-copy">
        <SectionHeading
          eyebrow={messages.solo.eyebrow}
          title={messages.solo.title}
        >
          <p>{messages.solo.intro}</p>
        </SectionHeading>
        <div className="feature-list">
          {messages.solo.features.map((text, index) => {
            const Icon = soloIcons[index];
            return (
              <div key={text}>
                <Icon size={18} aria-hidden="true" />
                <span>{text}</span>
              </div>
            );
          })}
        </div>
        <blockquote>“{messages.solo.quote}”</blockquote>
      </div>
      <div className="split-visual solo-visual">
        <PhoneMockup src={appAssets.japanMap} alt={messages.solo.mapAlt} />
      </div>
    </section>
  );
}

export function FocusSection() {
  const { messages } = useI18n();
  return (
    <section className="section focus-section">
      <div className="split-visual focus-capture">
        <PhoneMockup src={appAssets.soloSession} alt={messages.focus.alt} />
      </div>
      <div className="split-copy">
        <SectionHeading
          eyebrow={messages.focus.eyebrow}
          title={messages.focus.title}
        >
          <p>{messages.focus.intro}</p>
        </SectionHeading>
        <div className="calm-points">
          <span>
            <Volume2 size={17} /> {messages.focus.calm}
          </span>
          <span>
            <Clock3 size={17} /> {messages.focus.timer}
          </span>
        </div>
        <div className="ideal-card">
          <small>{messages.focus.ideal}</small>
          <div>
            {messages.focus.uses.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
