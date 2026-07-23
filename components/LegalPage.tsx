import type { ReactNode } from "react";
import Link from "next/link";

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
  return (
    <div className="legal-hero">
      <div className="legal-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
        {updated && <small>Dernière mise à jour : {updated}</small>}
      </div>
      <div className="legal-layout">{children}</div>
      <div className="legal-return">
        <Link href="/">← Retour à l’accueil</Link>
      </div>
    </div>
  );
}
