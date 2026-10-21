"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";

export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated?: string;
  children: ReactNode;
}) {
  const { messages } = useI18n();
  return (
    <div className="legal-hero">
      <div className="legal-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
        {updated && (
          <small>
            {messages.legalPage.lastUpdated}: {updated}
          </small>
        )}
      </div>
      <div className="legal-layout">{children}</div>
      <div className="legal-return">
        <Link href="/">{messages.legalPage.return}</Link>
      </div>
    </div>
  );
}
