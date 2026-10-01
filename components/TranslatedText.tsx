"use client";

import type { ReactNode } from "react";
import { siteConfig } from "@/config/site";

export function TranslatedText({ text }: { text: string }) {
  const parts = text.split("{email}");
  const content: ReactNode[] = [];

  parts.forEach((part, index) => {
    content.push(part);
    if (index < parts.length - 1) {
      content.push(
        <a key={`email-${index}`} href={`mailto:${siteConfig.supportEmail}`}>
          {siteConfig.supportEmail}
        </a>,
      );
    }
  });

  return <>{content}</>;
}
