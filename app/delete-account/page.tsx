import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Supprimer un compte Focus Train",
  description:
    "Demandez la suppression de votre compte Focus Train et des données associées.",
  alternates: { canonical: "/delete-account" },
};

export default function DeleteAccountPage() {
  return (
    <LegalPage
      eyebrow="Compte et données"
      title="Supprimer ton compte Focus Train"
      intro="Tu peux supprimer définitivement ton compte et les données associées depuis l’application ou en contactant notre équipe."
    >
      <article className="legal-content legal-content-centered">
        <section>
          <h2>Depuis l’application</h2>
          <p>
            Ouvre Focus Train, puis va dans <strong>Réglages</strong>, sélectionne
            <strong> Supprimer mon compte</strong> et confirme la suppression.
          </p>
        </section>
        <section>
          <h2>Sans accès à l’application</h2>
          <p>
            Envoie une demande à{" "}
            <a href={`mailto:${siteConfig.supportEmail}?subject=Suppression%20de%20mon%20compte%20Focus%20Train`}>
              {siteConfig.supportEmail}
            </a>{" "}
            depuis l’adresse e-mail associée à ton compte. Indique uniquement
            l’adresse du compte à supprimer. Notre équipe pourra demander une
            vérification afin d’empêcher la suppression frauduleuse d’un compte.
          </p>
        </section>
        <section>
          <h2>Données supprimées</h2>
          <p>
            La demande supprime le compte Focus Train ainsi que le profil, la
            progression, les sessions enregistrées, la collection, les données
            multijoueur et les préférences associées au compte.
          </p>
          <p>
            Certaines informations peuvent être conservées pendant la durée
            strictement nécessaire au respect d’obligations légales, à la
            prévention de la fraude ou au traitement d’un litige. Les achats et
            abonnements restent aussi soumis aux règles de conservation de
            Google Play ou de l’App Store.
          </p>
        </section>
        <section>
          <h2>Abonnements</h2>
          <p>
            Supprimer le compte ne résilie pas automatiquement un abonnement.
            Annule-le séparément dans Google Play ou dans l’App Store avant la
            suppression si tu ne souhaites pas son renouvellement.
          </p>
        </section>
      </article>
    </LegalPage>
  );
}
