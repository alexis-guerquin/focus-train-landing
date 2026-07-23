import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site officiel de l’application Focus Train.",
  alternates: { canonical: "/mentions-legales" },
};

export default function LegalNoticesPage() {
  return (
    <LegalPage
      eyebrow="Informations"
      title="Mentions légales"
      intro="Informations relatives à l’édition, à l’hébergement et à l’utilisation du site officiel de Focus Train."
    >
      <article className="legal-content legal-content-centered">
        <section>
          <h2>1. Éditeur du site</h2>
          <p>
            <strong>Service édité :</strong> Focus Train
          </p>
          {siteConfig.editorLegalName && (
            <p>
              <strong>Nom légal :</strong> {siteConfig.editorLegalName}
            </p>
          )}
          {siteConfig.editorAddress && (
            <p>
              <strong>Adresse :</strong> {siteConfig.editorAddress}
            </p>
          )}
          <p>
            <strong>Contact :</strong>{" "}
            <a href={`mailto:${siteConfig.supportEmail}`}>
              {siteConfig.supportEmail}
            </a>
          </p>
          <p>
            Le directeur ou la directrice de la publication est la personne
            représentant légalement l’éditeur.
          </p>
        </section>
        <section>
          <h2>2. Hébergement</h2>
          <p>
            Les informations relatives à l’hébergeur dépendent de la plateforme
            retenue pour la mise en production et sont tenues à jour dans la
            configuration de déploiement.
          </p>
        </section>
        <section>
          <h2>3. Propriété intellectuelle</h2>
          <p>
            Le site, son identité visuelle, ses textes, illustrations, éléments
            d’interface et marques sont protégés par les règles relatives à la
            propriété intellectuelle. Toute reproduction ou utilisation non
            autorisée, totale ou partielle, est interdite, sous réserve des
            exceptions prévues par la loi.
          </p>
        </section>
        <section>
          <h2>4. Limitation de responsabilité</h2>
          <p>
            L’éditeur s’efforce de fournir des informations exactes et à jour,
            sans garantir l’absence totale d’erreur ou d’interruption. Focus
            Train est une application de productivité indépendante : elle ne
            vend pas de billets et ne remplace pas les informations fournies par
            les opérateurs ferroviaires.
          </p>
        </section>
        <section>
          <h2>5. Liens externes</h2>
          <p>
            Le site peut contenir des liens vers des services tiers. L’éditeur
            n’exerce aucun contrôle sur leur contenu ou leurs pratiques et
            invite les utilisateurs à consulter leurs propres conditions.
          </p>
        </section>
        <section>
          <h2>6. Droit applicable</h2>
          <p>
            Les présentes mentions sont soumises au droit applicable au lieu
            d’établissement de l’éditeur, sous réserve des règles impératives
            protégeant les consommateurs.
          </p>
        </section>
        <section>
          <h2>7. Contact</h2>
          <p>
            Pour toute question relative au site, écrivez à{" "}
            <a href={`mailto:${siteConfig.supportEmail}`}>
              {siteConfig.supportEmail}
            </a>
            .
          </p>
        </section>
      </article>
    </LegalPage>
  );
}
