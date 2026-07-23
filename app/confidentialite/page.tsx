import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { privacyServices } from "@/config/privacy";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Découvrez comment Focus Train limite, utilise et protège les données nécessaires au fonctionnement de l’application.",
  alternates: { canonical: "/confidentialite" },
};

const serviceLabels: Record<keyof typeof privacyServices, [string, string]> = {
  firebaseAuthentication: [
    "Firebase Authentication",
    "Authentification et accès au compte utilisateur.",
  ],
  firebaseFirestore: [
    "Firebase Firestore",
    "Stockage synchronisé des données nécessaires au fonctionnement de l’application.",
  ],
  firebaseCloudFunctions: [
    "Firebase Cloud Functions",
    "Traitement sécurisé de certaines opérations côté serveur.",
  ],
  firebaseAnalytics: [
    "Firebase Analytics",
    "Mesure d’usage destinée à améliorer l’application, lorsque le consentement requis a été obtenu.",
  ],
  firebaseCrashlytics: [
    "Firebase Crashlytics",
    "Diagnostic technique des plantages et amélioration de la stabilité.",
  ],
  appleStoreKit: [
    "Apple StoreKit",
    "Gestion des achats intégrés et vérification des transactions par Apple.",
  ],
  signInWithApple: [
    "Sign in with Apple",
    "Création et connexion au compte avec l’identifiant Apple.",
  ],
  mapLibre: ["MapLibre", "Affichage des cartes dans l’application."],
  railwayDataProvider: [
    "Fournisseur de données ferroviaires",
    "Affichage de trajets servant à l’expérience de concentration, sans vente de billets.",
  ],
};

const activeServices = Object.entries(privacyServices).filter(
  ([, enabled]) => enabled,
) as [keyof typeof privacyServices, boolean][];

export default function PrivacyPage() {
  const date = new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${siteConfig.privacyUpdatedAt}T12:00:00`));
  return (
    <LegalPage
      eyebrow="Vie privée"
      title="Politique de confidentialité"
      intro="La présente politique explique comment Focus Train collecte, utilise et protège les informations nécessaires au fonctionnement de l’application. Nous cherchons à limiter la collecte aux données strictement utiles au service."
      updated={date}
    >
      <nav className="legal-toc" aria-label="Sommaire">
        <strong>Sommaire</strong>
        <ol>
          {[
            "Responsable du traitement",
            "Données traitées",
            "Finalités et base légale",
            "Services tiers",
            "Conservation et sécurité",
            "Transferts hors UE",
            "Vos droits",
            "Suppression du compte",
            "Mineurs",
            "Modifications",
            "Contact",
          ].map((item, i) => (
            <li key={item}>
              <a href={`#section-${i + 1}`}>{item}</a>
            </li>
          ))}
        </ol>
      </nav>
      <article className="legal-content">
        <section id="section-1">
          <h2>1. Identité du responsable du traitement</h2>
          <p>
            Le responsable du traitement est l’éditeur de Focus Train. Pour
            toute question, écrivez à{" "}
            <a href={`mailto:${siteConfig.supportEmail}`}>
              {siteConfig.supportEmail}
            </a>
            .
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
        </section>
        <section id="section-2">
          <h2>2. Données susceptibles d’être traitées</h2>
          <p>
            Selon les fonctionnalités effectivement utilisées, Focus Train peut
            traiter les données strictement nécessaires parmi les catégories
            suivantes :
          </p>
          <ul>
            <li>
              Données de compte : adresse e-mail, identifiant, nom ou pseudonyme
              et avatar.
            </li>
            <li>
              Données de liste d’attente : adresse e-mail et plateforme
              souhaitée.
            </li>
            <li>
              Données de progression : sessions, durées, villes, récompenses et
              régions débloquées.
            </li>
            <li>
              Données multijoueurs : participation à un trajet, wagon et place
              sélectionnés.
            </li>
            <li>
              Données techniques : appareil, version d’iOS, version de
              l’application et rapports de crash.
            </li>
            <li>
              Données d’achat communiquées par Apple, lorsqu’un achat est
              proposé.
            </li>
            <li>
              Préférence de consentement aux cookies enregistrée sur le site.
            </li>
          </ul>
          <p>
            Focus Train n’utilise pas ces données pour vendre des billets de
            train ou proposer une navigation ferroviaire.
          </p>
        </section>
        <section id="section-3">
          <h2>3. Finalités et bases légales</h2>
          <p>
            Les données sont utilisées pour fournir l’application, enregistrer
            la progression, permettre les fonctions sociales choisies, sécuriser
            le service, répondre au support et respecter les obligations
            légales. Le traitement repose, selon le cas, sur l’exécution du
            service demandé, l’intérêt légitime à sécuriser et améliorer
            l’application, le consentement ou une obligation légale.
          </p>
        </section>
        <section id="section-4">
          <h2>4. Services tiers</h2>
          {activeServices.length ? (
            <>
              <p>Les services suivants sont activés dans l’application :</p>
              {activeServices.map(([key]) => (
                <div className="service-row" key={key}>
                  <h3>{serviceLabels[key][0]}</h3>
                  <p>{serviceLabels[key][1]}</p>
                </div>
              ))}
            </>
          ) : (
            <p>
              Focus Train limite le recours aux services tiers. Aucun service
              optionnel impliquant un traitement supplémentaire n’est indiqué
              dans la présente version de la politique.
            </p>
          )}
        </section>
        <section id="section-5">
          <h2>5. Durée de conservation, stockage et sécurité</h2>
          <p>
            Les données sont conservées uniquement pendant la durée nécessaire
            au service, à la résolution d’un litige ou au respect d’une
            obligation légale. Des mesures techniques et organisationnelles
            raisonnables sont mises en œuvre pour limiter les accès non
            autorisés, sans qu’aucun système ne puisse garantir une sécurité
            absolue.
          </p>
          <p>
            Le choix relatif aux cookies est conservé pendant six mois afin de
            ne pas afficher la demande à chaque visite.
          </p>
        </section>
        <section id="section-6">
          <h2>6. Transferts hors Union européenne</h2>
          <p>
            Si un prestataire traite des données hors de l’Union européenne,
            l’éditeur veille à ce qu’un mécanisme reconnu soit appliqué, comme
            une décision d’adéquation ou des clauses contractuelles types.
          </p>
        </section>
        <section id="section-7">
          <h2>7. Vos droits</h2>
          <p>
            Selon la réglementation applicable, vous pouvez demander l’accès, la
            rectification, l’effacement, la limitation, l’opposition et la
            portabilité de vos données, ainsi que retirer votre consentement
            lorsqu’il constitue la base du traitement. Une vérification
            d’identité peut être nécessaire.
          </p>
        </section>
        <section id="section-8">
          <h2>8. Suppression du compte</h2>
          <p>
            L’utilisateur peut demander la suppression de son compte depuis
            l’application lorsque cette fonctionnalité est disponible, ou en
            contactant{" "}
            <a href={`mailto:${siteConfig.supportEmail}`}>
              {siteConfig.supportEmail}
            </a>
            . Certaines données peuvent être conservées lorsqu’une obligation
            légale l’exige.
          </p>
        </section>
        <section id="section-9">
          <h2>9. Données des mineurs</h2>
          <p>
            Focus Train n’est pas spécifiquement destiné aux enfants de moins de
            13 ans. Si vous pensez qu’un mineur nous a transmis des informations
            sans autorisation appropriée, contactez-nous.
          </p>
        </section>
        <section id="section-10">
          <h2>10. Modifications de la politique</h2>
          <p>
            Cette politique peut être modifiée pour refléter l’évolution de
            l’application ou de la réglementation. La date de mise à jour
            affichée en haut de cette page permet d’identifier la version
            applicable.
          </p>
        </section>
        <section id="section-11">
          <h2>11. Contact</h2>
          <p>
            Pour toute question concernant cette politique ou l’exercice de vos
            droits :{" "}
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
