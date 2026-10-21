"use client";

import {
  BookOpen,
  Database,
  Mail,
  TimerReset,
  TrainFront,
  Trash2,
} from "lucide-react";
import { LegalPage } from "@/components/LegalPage";
import { SupportForm } from "@/components/SupportForm";
import { TranslatedText } from "@/components/TranslatedText";
import { useI18n } from "@/components/I18nProvider";

const icons = [TimerReset, BookOpen, TrainFront, Database];

export function SupportContent() {
  const { messages } = useI18n();
  const support = messages.support;

  return (
    <LegalPage
      eyebrow={support.eyebrow}
      title={support.title}
      intro={support.intro}
    >
      <section className="support-categories">
        {support.categories.map(({ title, items }, index) => {
          const Icon = icons[index];
          return (
            <article className="support-category" key={title}>
              <div className="category-title">
                <Icon />
                <h2>{title}</h2>
              </div>
              <div className="faq-list compact-faq">
                {items.map(([question, answer]) => (
                  <details key={question}>
                    <summary>
                      {question}
                      <span>＋</span>
                    </summary>
                    <p>
                      <TranslatedText text={answer} />
                    </p>
                  </details>
                ))}
              </div>
            </article>
          );
        })}
      </section>
      <aside className="account-delete">
        <Trash2 />
        <div>
          <h2>{support.deleteTitle}</h2>
          <p>
            <TranslatedText text={support.deleteText} />
          </p>
        </div>
      </aside>
      <section className="contact-section">
        <div className="contact-heading">
          <Mail />
          <p className="eyebrow">{support.contactEyebrow}</p>
          <h2>{support.contactTitle}</h2>
          <p>{support.contactText}</p>
          <p>
            <TranslatedText text={support.direct} />
          </p>
        </div>
        <SupportForm />
      </section>
    </LegalPage>
  );
}
