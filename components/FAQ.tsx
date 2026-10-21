"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { TranslatedText } from "@/components/TranslatedText";
import { useI18n } from "@/components/I18nProvider";

export function FAQ() {
  const { messages } = useI18n();
  return (
    <section className="section faq-section" id="faq">
      <SectionHeading
        eyebrow={messages.faq.eyebrow}
        title={messages.faq.title}
        align="center"
      />
      <div className="faq-list">
        {messages.faq.items.map(([question, answer]) => (
          <details key={question}>
            <summary>
              {question}
              <span aria-hidden="true">＋</span>
            </summary>
            <p>
              <TranslatedText text={answer} />
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
