"use client";

import { LegalPage } from "@/components/LegalPage";
import { TranslatedText } from "@/components/TranslatedText";
import { useI18n } from "@/components/I18nProvider";
import { legalDocuments, type LegalDocumentKey } from "@/config/legal-i18n";

const dateLocales = {
  en: "en-GB",
  fr: "fr-FR",
  es: "es-ES",
  zh: "zh-CN",
  ja: "ja-JP",
  ko: "ko-KR",
} as const;

export function LocalizedLegalDocument({
  documentKey,
  updated,
}: {
  documentKey: LegalDocumentKey;
  updated?: string;
}) {
  const { locale } = useI18n();
  const document = legalDocuments[documentKey][locale];
  const formattedDate = updated
    ? new Intl.DateTimeFormat(dateLocales[locale], {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date(`${updated}T12:00:00`))
    : undefined;

  return (
    <LegalPage
      eyebrow={document.eyebrow}
      title={document.title}
      intro={document.intro}
      updated={formattedDate}
    >
      {document.toc && (
        <nav className="legal-toc" aria-label={document.toc}>
          <strong>{document.toc}</strong>
          <ol>
            {document.sections.map((section, index) => (
              <li key={section.title}>
                <a href={`#section-${index + 1}`}>{section.title}</a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      <article
        className={`legal-content ${document.toc ? "" : "legal-content-centered"}`}
      >
        {document.sections.map((section, index) => (
          <section id={`section-${index + 1}`} key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>
                <TranslatedText text={paragraph} />
              </p>
            ))}
            {section.bullets && (
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>
                    <TranslatedText text={bullet} />
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </article>
    </LegalPage>
  );
}
