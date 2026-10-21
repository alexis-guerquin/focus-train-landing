"use client";

import {
  Flag,
  Focus,
  Gift,
  TimerReset,
  TrainFront,
  MapPinned,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { useI18n } from "@/components/I18nProvider";

const icons = [TimerReset, Focus, Gift];

export function FeatureSection() {
  const { messages } = useI18n();
  return (
    <section className="section concept-section" id="fonctionnalites">
      <SectionHeading
        eyebrow={messages.features.eyebrow}
        title={messages.features.title}
        align="center"
      >
        <p>{messages.features.intro}</p>
      </SectionHeading>
      <div className="route-steps">
        <div className="route-line" aria-hidden="true">
          <TrainFront />
          <i />
          <MapPinned />
          <i />
          <Flag />
        </div>
        {messages.features.steps.map(([title, text], index) => {
          const Icon = icons[index];
          const number = String(index + 1).padStart(2, "0");
          return (
            <article className="step-card" key={number}>
              <span className="step-icon">
                <Icon aria-hidden="true" />
              </span>
              <small>
                {messages.features.step} {number}
              </small>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
