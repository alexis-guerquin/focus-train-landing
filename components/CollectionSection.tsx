"use client";

import { Award, Map, Stamp } from "lucide-react";
import { PhoneMockup } from "@/components/PhoneMockup";
import { SectionHeading } from "@/components/SectionHeading";
import { appAssets } from "@/config/assets";
import { useI18n } from "@/components/I18nProvider";

export function CollectionSection() {
  const { messages } = useI18n();
  return (
    <section
      className="section split-section collection-section"
      id="collection"
    >
      <div className="split-copy">
        <SectionHeading
          eyebrow={messages.collection.eyebrow}
          title={messages.collection.title}
        >
          <p>{messages.collection.intro}</p>
        </SectionHeading>
        <div className="feature-list collection-features">
          <div>
            <Map size={18} aria-hidden="true" />
            <span>{messages.collection.features[0]}</span>
          </div>
          <div>
            <Stamp size={18} aria-hidden="true" />
            <span>{messages.collection.features[1]}</span>
          </div>
          <div>
            <Award size={18} aria-hidden="true" />
            <span>{messages.collection.features[2]}</span>
          </div>
        </div>
        <blockquote>“{messages.collection.quote}”</blockquote>
      </div>
      <div className="split-visual collection-visual">
        <PhoneMockup src={appAssets.collection} alt={messages.collection.alt} />
      </div>
    </section>
  );
}
