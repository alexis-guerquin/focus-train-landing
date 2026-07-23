import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CircleHelp, Home, Sparkles, Tags } from "lucide-react";
import { StoreAccess } from "@/components/StoreAccess";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found-scenery" aria-hidden="true">
        <span className="not-found-sun" />
        <span className="not-found-cloud not-found-cloud-one" />
        <span className="not-found-cloud not-found-cloud-two" />
        <span className="not-found-track" />
        <span className="not-found-train">🚃</span>
      </div>

      <div className="not-found-card">
        <p className="eyebrow">
          <Sparkles size={15} aria-hidden="true" /> Erreur 404
        </p>
        <h1>Oups, ce train ne passe pas par ici.</h1>
        <p className="not-found-intro">
          La page que tu cherches a peut-être changé de quai. Choisis ta
          prochaine destination, on t’y emmène.
        </p>

        <nav className="not-found-links" aria-label="Destinations suggérées">
          <Link className="not-found-link is-primary" href="/">
            <Home size={19} aria-hidden="true" />
            <span>
              <b>Retour à l’accueil</b>
              <small>Reprendre le voyage</small>
            </span>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link className="not-found-link" href="/pricing">
            <Tags size={19} aria-hidden="true" />
            <span>
              <b>Voir les tarifs</b>
              <small>Trouver la formule idéale</small>
            </span>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link className="not-found-link" href="/support">
            <CircleHelp size={19} aria-hidden="true" />
            <span>
              <b>Une question en tête ?</b>
              <small>Contacte notre équipe</small>
            </span>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </nav>

        <div className="not-found-stores">
          <p>Ou retrouve Focus Train dans ton store</p>
          <StoreAccess />
        </div>
      </div>
    </section>
  );
}
