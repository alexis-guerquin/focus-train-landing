import type { Metadata } from "next";
import {
  AppWindow,
  Check,
  MapPinned,
  PanelsTopLeft,
  Sparkles,
  Users,
} from "lucide-react";
import { AppStoreButton } from "@/components/AppStoreButton";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Compare l’offre gratuite de Focus Train et le Golden Ticket : davantage d’arrêts au Japon, blocage d’applications et widgets avancés.",
  alternates: { canonical: "/pricing" },
};

const freeFeatures = [
  {
    icon: MapPinned,
    title: "58 arrêts",
    detail: "Trajet principal · Mode Solo · Carte du Japon",
  },
  {
    icon: Users,
    title: "Mode multijoueur",
    detail: "Concentre-toi avec d’autres voyageurs",
  },
  {
    icon: PanelsTopLeft,
    title: "Widget Focus Train",
    detail: "Garde ta progression à portée de regard",
  },
];

const goldenFeatures = [
  {
    icon: MapPinned,
    title: "200 arrêts au total",
    detail: "Mode Solo · Carte du Japon",
  },
  {
    icon: AppWindow,
    title: "Blocage d’applications",
    detail: "Fonction en préparation",
    soon: true,
  },
  {
    icon: PanelsTopLeft,
    title: "Widgets avancés",
    detail: "Plus d’options pour suivre ton voyage",
  },
];

export default function PricingPage() {
  return (
    <div className="pricing-page">
      <section className="pricing-hero" aria-labelledby="pricing-title">
        <div className="pricing-heading">
          <p className="eyebrow">Choisis ton billet</p>
          <h1 id="pricing-title">
            Un tarif simple pour <em>rester sur les rails.</em>
          </h1>
          <p>
            Commence gratuitement, puis passe au Golden Ticket pour explorer
            davantage le Japon et pousser ton focus plus loin.
          </p>
        </div>

        <div className="pricing-tickets">
          <article className="pricing-ticket pricing-ticket-free">
            <span className="ticket-cutout ticket-cutout-left" />
            <span className="ticket-cutout ticket-cutout-right" />

            <header className="pricing-ticket-header">
              <div>
                <span>FOCUS TRAIN</span>
                <small>Billet voyageur</small>
              </div>
              <strong>JP · 058</strong>
            </header>

            <div className="pricing-ticket-main">
              <span className="pricing-ticket-kicker">Accès gratuit</span>
              <h2>Voyageur</h2>
              <div className="pricing-price">
                <strong>0 €</strong>
                <span>pour toujours</span>
              </div>

              <ul className="pricing-features">
                {freeFeatures.map(({ icon: Icon, title, detail }) => (
                  <li key={title}>
                    <Icon aria-hidden="true" />
                    <span>
                      <strong>{title}</strong>
                      <small>{detail}</small>
                    </span>
                    <Check className="feature-check" aria-hidden="true" />
                  </li>
                ))}
              </ul>
            </div>

            <footer className="pricing-ticket-footer">
              <span>PARCOURS PRINCIPAL</span>
              <i className="pricing-barcode" aria-hidden="true" />
              <strong>JAPON</strong>
            </footer>
          </article>

          <div className="pricing-ticket-golden-shell">
            <article
              className="pricing-ticket pricing-ticket-golden"
              tabIndex={0}
            >
              <span className="golden-shimmer" aria-hidden="true" />
              <span
                className="golden-spark golden-spark-one"
                aria-hidden="true"
              >
                ✦
              </span>
              <span
                className="golden-spark golden-spark-two"
                aria-hidden="true"
              >
                ✦
              </span>
              <span className="ticket-cutout ticket-cutout-left" />
              <span className="ticket-cutout ticket-cutout-right" />

              <header className="pricing-ticket-header">
                <div>
                  <span>FOCUS TRAIN EXPRESS</span>
                  <small>Pass premium</small>
                </div>
                <strong>GT · 200</strong>
              </header>

              <div className="pricing-ticket-main">
                <span className="pricing-ticket-kicker">
                  <Sparkles aria-hidden="true" />
                  Billet premium
                </span>
                <h2>Golden Ticket</h2>
                <p className="golden-includes">
                  Tout le billet gratuit, avec encore plus de voyage.
                </p>

                <div
                  className="golden-prices"
                  aria-label="Tarifs Golden Ticket"
                >
                  <div>
                    <span>Mensuel</span>
                    <strong>5,99 €</strong>
                    <small>par mois</small>
                  </div>
                  <div className="golden-price-best">
                    <span>Annuel</span>
                    <strong>35,99 €</strong>
                    <small>soit 2,99 €/mois</small>
                  </div>
                </div>

                <ul className="pricing-features">
                  {goldenFeatures.map(({ icon: Icon, title, detail, soon }) => (
                    <li key={title}>
                      <Icon aria-hidden="true" />
                      <span>
                        <strong>{title}</strong>
                        <small>
                          {detail}
                          {soon && <b className="soon-badge">Bientôt</b>}
                        </small>
                      </span>
                      <Check className="feature-check" aria-hidden="true" />
                    </li>
                  ))}
                </ul>
              </div>

              <footer className="pricing-ticket-footer">
                <span>PASS PREMIUM</span>
                <i className="pricing-barcode" aria-hidden="true" />
                <strong>GOLD</strong>
              </footer>
            </article>
          </div>
        </div>

        <div className="pricing-cta">
          <p>
            Prêt à prendre le départ ? Focus Train arrive bientôt sur l’App
            Store.
          </p>
          <AppStoreButton label="Télécharger Focus Train" />
        </div>
      </section>
    </div>
  );
}
