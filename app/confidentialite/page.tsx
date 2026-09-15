import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { privacyServices } from "@/config/privacy";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de Focus Train : compte, sessions de concentration, progression, multijoueur, abonnements et services tiers.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const serviceLabels: Record<keyof typeof privacyServices, [string, string]> = {
  firebaseAuthentication: [
    "Firebase Authentication",
    "Création du compte, connexion, réinitialisation du mot de passe et attribution d’un identifiant utilisateur Firebase.",
  ],
  firebaseFirestore: [
    "Cloud Firestore",
    "Synchronisation du profil, des réponses d’onboarding, de la progression, de l’historique des trajets, des collections, des sessions multijoueur et des droits d’abonnement.",
  ],
  firebaseRealtimeDatabase: [
    "Firebase Realtime Database",
    "Présence temporaire dans les wagons multijoueur, statut de concentration et réservation des places.",
  ],
  firebaseCloudFunctions: [
    "Firebase Cloud Functions",
    "Réservation atomique des places, modération, suppression de compte, vérification StoreKit et accès au proxy de données ferroviaires.",
  ],
  firebaseAnalyticsAndroid: [
    "Firebase Analytics — Android uniquement",
    "Mesure automatique de l’utilisation de l’application Android. Le code actuel ne définit pas d’événement analytique personnalisé.",
  ],
  firebaseCrashlytics: [
    "Firebase Crashlytics",
    "Non intégré dans les versions Android et iOS examinées.",
  ],
  firebaseStorage: [
    "Firebase Storage",
    "Aucun envoi de fichier utilisateur n’est implémenté dans les clients examinés. La suppression de compte vérifie néanmoins le préfixe réservé au compte si un bucket configuré existe.",
  ],
  googleSignIn: [
    "Google Sign-In",
    "Connexion au compte Google sur Android et iOS, puis authentification du même compte dans Firebase.",
  ],
  signInWithApple: [
    "Sign in with Apple — iOS",
    "Connexion avec Apple, puis authentification dans Firebase. Apple peut fournir une adresse relais selon le choix de l’utilisateur.",
  ],
  appleStoreKit: [
    "Apple StoreKit et App Store Server API — iOS",
    "Achat, restauration et vérification des abonnements ou achats intégrés Apple.",
  ],
  googlePlayRevenueCat: [
    "Google Play Billing via RevenueCat — Android",
    "Présentation des offres, achat, restauration et vérification du Focus Train Pass. L’identifiant Firebase du compte est utilisé comme identifiant client RevenueCat après connexion.",
  ],
  mapLibreOpenFreeMap: [
    "MapLibre et OpenFreeMap",
    "Affichage des cartes. Les tuiles et polices cartographiques distantes sont demandées à OpenFreeMap ; MapLibre est la bibliothèque de rendu.",
  ],
  railwayDataProvider: [
    "transport.data.gouv.fr / SNCF",
    "Consultation du flux public GTFS-RT pour afficher les trains, gares, horaires, retards et trajets en France. Focus Train ne vend pas de billets.",
  ],
  webful: [
    "Webful — site web uniquement",
    "Mesure d’audience sans cookie annoncée par le prestataire : pages vues, sessions, provenance, zone géographique approximative, appareil, navigateur, système et mesures de performance.",
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
      intro="Cette politique décrit les traitements réellement présents dans les versions Android et iOS de Focus Train ainsi que sur le site focus-train.fr. Les traitements varient selon la plateforme et les fonctionnalités que vous utilisez."
      updated={date}
    >
      <nav className="legal-toc" aria-label="Sommaire">
        <strong>Sommaire</strong>
        <ol>
          {[
            "Présentation",
            "Responsable du traitement",
            "Données collectées",
            "Finalités et bases légales",
            "Authentification",
            "Stockage local et distant",
            "Services tiers",
            "Firebase et Google",
            "Achats et abonnements",
            "Analytics, diagnostics et logs",
            "Notifications",
            "Partage des données",
            "Conservation",
            "Sécurité",
            "Suppression du compte",
            "Vos droits",
            "Mineurs",
            "Transferts internationaux",
            "Modifications",
            "Contact",
          ].map((item, index) => (
            <li key={item}>
              <a href={`#section-${index + 1}`}>{item}</a>
            </li>
          ))}
        </ol>
      </nav>

      <article className="legal-content">
        <section id="section-1">
          <h2>1. Présentation de Focus Train</h2>
          <p>
            Focus Train est une application mobile de productivité gamifiée. Une
            session de concentration fait progresser un train, débloque des
            villes et des souvenirs et peut, au choix, se dérouler avec d’autres
            voyageurs dans un wagon multijoueur.
          </p>
        </section>

        <section id="section-2">
          <h2>2. Responsable du traitement et éditeur</h2>
          <p>
            Focus Train est édité depuis la France sous le compte développeur «
            Alexis Guerquin – Phenomenals ». Pour toute question relative à vos
            données, écrivez à{" "}
            <a href={`mailto:${siteConfig.supportEmail}`}>
              {siteConfig.supportEmail}
            </a>
            .
          </p>
        </section>

        <section id="section-3">
          <h2>3. Données collectées</h2>
          <h3>Compte et profil</h3>
          <ul>
            <li>adresse e-mail et identifiant utilisateur Firebase ;</li>
            <li>
              mode de connexion utilisé : e-mail, Google ou Apple sur iOS ;
            </li>
            <li>prénom, nom d’usage ou pseudonyme choisi ;</li>
            <li>
              réponses d’onboarding, notamment tranche d’âge, pays d’origine,
              objectifs et difficultés de concentration, préférences de travail,
              durée, ambiance, langue, notifications et widget ;
            </li>
            <li>
              personnage choisi : identifiant, éléments visuels, couleurs,
              objets débloqués et éventuelles URL de miniature.
            </li>
          </ul>
          <p>
            Les applications examinées ne proposent pas actuellement d’importer
            une photo de profil. Un ancien champ technique d’URL d’avatar existe
            toutefois dans le modèle et peut être affiché ou partagé dans le
            multijoueur s’il est déjà renseigné.
          </p>

          <h3>Concentration, progression et collection</h3>
          <ul>
            <li>
              identifiant de session, date, durée concentrée, mode Pomodoro,
              pauses et état d’une session en cours ;
            </li>
            <li>
              origine, destination, trajet, pays, villes ou arrêts visités,
              distance parcourue et position de progression dans le jeu ;
            </li>
            <li>
              temps total de concentration, distance totale, préfectures et
              grandes villes atteintes ;
            </li>
            <li>
              villes et régions terminées, cartes postales, timbres, badges et
              autres objets de collection débloqués.
            </li>
          </ul>

          <h3>Multijoueur et modération</h3>
          <ul>
            <li>
              identifiant utilisateur, pseudonyme, apparence du personnage,
              pourcentage de progression solo, train, wagon et place ;
            </li>
            <li>
              présence dans une salle, heure d’arrivée et statut « concentré »,
              « en pause », « terminé » ou « déconnecté » ;
            </li>
            <li>
              durée, pays, trajet et arrêts débloqués lors d’une session
              multijoueur terminée ;
            </li>
            <li>
              identifiants des comptes bloqués et signalements, avec le motif
              choisi et leur statut de traitement.
            </li>
          </ul>

          <h3>Achats, support et site web</h3>
          <ul>
            <li>
              produit acheté, droit premium, dates d’expiration et de
              vérification, état de renouvellement et identifiants de
              transaction communiqués par Apple, Google Play ou RevenueCat ;
            </li>
            <li>
              données que vous choisissez d’inclure dans un e-mail de support :
              nom, e-mail, version de l’app, version du système, modèle
              d’appareil et description du problème ;
            </li>
            <li>
              sur le site, e-mail et plateforme choisis pour la liste d’attente,
              si vous l’utilisez, ainsi que des statistiques de visite Webful ;
            </li>
            <li>
              cookie de préférence « focus-train-cookie-consent » et copie
              locale de l’e-mail de liste d’attente dans le navigateur.
            </li>
          </ul>
        </section>

        <section id="section-4">
          <h2>4. Finalités et bases légales</h2>
          <p>Ces données servent à :</p>
          <ul>
            <li>
              créer et sécuriser le compte, synchroniser le profil et restaurer
              les données sur les appareils — exécution du service demandé ;
            </li>
            <li>
              enregistrer les sessions, calculer la progression et attribuer les
              récompenses — exécution du service ;
            </li>
            <li>
              faire fonctionner les salles, places et présences multijoueur —
              exécution du service choisi ;
            </li>
            <li>
              traiter les blocages, signalements, fraudes, erreurs techniques et
              assurer la sécurité — intérêt légitime à protéger le service ;
            </li>
            <li>
              gérer les achats, abonnements et obligations comptables —
              exécution du contrat et, le cas échéant, obligation légale ;
            </li>
            <li>
              envoyer les notifications locales demandées et répondre au support
              — consentement ou action de l’utilisateur ;
            </li>
            <li>
              mesurer l’utilisation et améliorer le produit — intérêt légitime
              ou consentement lorsqu’il est requis par la réglementation.
            </li>
          </ul>
        </section>

        <section id="section-5">
          <h2>5. Authentification</h2>
          <p>
            L’authentification est assurée par Firebase Authentication. Android
            permet la connexion par e-mail et mot de passe ou par Google. iOS
            permet en plus Sign in with Apple. Les mots de passe sont transmis à
            Firebase pour l’authentification et ne sont pas enregistrés dans les
            bases de données applicatives Focus Train.
          </p>
          <p>
            Les fournisseurs Google et Apple traitent aussi les informations
            nécessaires à la connexion selon leurs propres politiques. Focus
            Train reçoit l’identité Firebase résultante et, lorsque le
            fournisseur la transmet, une adresse e-mail.
          </p>
        </section>

        <section id="section-6">
          <h2>6. Stockage local et distant</h2>
          <p>
            Les données de compte, profil, progression, collection, sessions et
            modération sont stockées dans Firebase Authentication, Cloud
            Firestore et Firebase Realtime Database. Les Cloud Functions sont
            déployées dans la région <code>europe-west1</code>. L’emplacement de
            chaque autre service Firebase dépend de la configuration du projet
            Google Cloud et des règles du fournisseur.
          </p>
          <p>
            Sur l’appareil, Focus Train conserve notamment la session Firebase,
            des caches hors ligne, les préférences de langue, d’audio et de
            notifications, le brouillon et les réponses d’onboarding, la
            progression, l’historique et l’état permettant de reprendre une
            session. iOS utilise aussi SwiftData et un App Group pour les
            widgets et Live Activities. Android conserve un instantané de la
            session en cours dans les fichiers privés de l’application et active
            le cache hors ligne de Firebase Realtime Database. Les sauvegardes
            et transferts Android sont désactivés pour ces données privées.
          </p>
        </section>

        <section id="section-7">
          <h2>7. Services tiers utilisés</h2>
          {activeServices.map(([key]) => (
            <div className="service-row" key={key}>
              <h3>{serviceLabels[key][0]}</h3>
              <p>{serviceLabels[key][1]}</p>
            </div>
          ))}
          <p>
            Certaines cartes iOS chargent aussi un contour géographique public
            depuis GitHub. Ces fournisseurs peuvent recevoir des informations
            techniques ordinaires d’une requête réseau, notamment l’adresse IP,
            l’heure et le type de client.
          </p>
        </section>

        <section id="section-8">
          <h2>8. Firebase et services Google</h2>
          <p>
            Le projet Firebase utilisé par les applications est
            <code> focus-train-74550</code>. Android intègre Firebase
            Authentication, Firestore, Realtime Database, Cloud Functions et
            Firebase Analytics. iOS intègre Authentication, Firestore, Realtime
            Database et Cloud Functions, mais pas Firebase Analytics.
          </p>
          <p>
            Firebase Crashlytics n’est intégré sur aucune des deux plateformes.
            Un bucket Firebase Storage est déclaré dans la configuration
            Android, mais aucun SDK ni envoi de fichier utilisateur vers Storage
            n’est présent dans les clients examinés.
          </p>
        </section>

        <section id="section-9">
          <h2>9. Achats intégrés et abonnements</h2>
          <p>
            Sur iOS, les achats sont traités par Apple via StoreKit. Focus Train
            vérifie les transactions côté serveur et conserve les identifiants
            et l’état strictement nécessaires à l’attribution du Pass. Sur
            Android, Google Play traite le paiement et RevenueCat gère le
            catalogue, la restauration et l’état du droit premium en associant
            le compte Firebase connecté.
          </p>
          <p>
            Focus Train ne reçoit pas les données complètes de carte bancaire.
            Supprimer un compte Focus Train ne résilie pas automatiquement un
            abonnement géré par l’App Store, Google Play ou RevenueCat ;
            celui-ci doit être géré dans le compte du magasin concerné.
          </p>
        </section>

        <section id="section-10">
          <h2>10. Analytics, diagnostics et logs</h2>
          <p>
            Firebase Analytics est présent dans l’application Android. Il peut
            collecter automatiquement des interactions, informations sur l’app
            et l’appareil et identifiants d’instance conformément au
            fonctionnement du SDK. Aucun événement analytique personnalisé n’a
            été trouvé dans le code examiné. Firebase Analytics n’est pas
            intégré à l’application iOS et Firebase Crashlytics n’est intégré à
            aucune plateforme.
          </p>
          <p>
            Les applications et Cloud Functions produisent des journaux
            techniques pour diagnostiquer les erreurs, contrôler les opérations
            de suppression, d’abonnement, de présence et de modération. Les
            journaux serveur observés évitent volontairement d’enregistrer les
            jetons d’achat, e-mails ou identifiants de transaction dans les
            diagnostics applicatifs, mais l’infrastructure peut conserver les
            métadonnées techniques normales d’une requête.
          </p>
          <p>
            Le site utilise Webful, chargé sur les pages publiques, pour mesurer
            l’audience, les parcours, la provenance, la zone géographique
            approximative, l’appareil, le navigateur et les performances. Le
            prestataire annonce un fonctionnement sans cookie et un hébergement
            en France.
          </p>
        </section>

        <section id="section-11">
          <h2>11. Notifications</h2>
          <p>
            Focus Train demande l’autorisation d’afficher des notifications.
            Elles servent aux rappels locaux de session, aux pauses Pomodoro,
            aux Live Activities et widgets iOS, ainsi qu’à la notification
            Android nécessaire au service audio au premier plan. Aucune
            intégration Firebase Cloud Messaging et aucun enregistrement de
            jeton push n’ont été trouvés dans le code examiné.
          </p>
        </section>

        <section id="section-12">
          <h2>12. Partage des données avec des tiers</h2>
          <p>
            Les données sont transmises uniquement aux prestataires nécessaires
            aux fonctions décrites ci-dessus : Google/Firebase, Google Sign-In,
            Apple, RevenueCat, OpenFreeMap, le service public de données
            ferroviaires et Webful. En multijoueur, les autres personnes
            présentes dans le même wagon voient votre pseudonyme, votre
            personnage, votre progression affichée, votre place et votre statut
            de concentration.
          </p>
          <p>
            Focus Train ne vend pas les données personnelles et ne les utilise
            pas pour du ciblage publicitaire inter-applications. L’application
            ne demande pas la localisation GPS, les contacts, les photos ou le
            microphone dans le code examiné.
          </p>
        </section>

        <section id="section-13">
          <h2>13. Conservation</h2>
          <p>
            Les données liées au compte restent conservées tant que le compte
            est actif ou jusqu’à sa suppression. La présence multijoueur est
            retirée à la sortie ou lors de la déconnexion détectée ; les verrous
            de place sont temporaires et font aussi l’objet d’un nettoyage
            serveur. Les données locales restent sur l’appareil jusqu’à leur
            remplacement, leur nettoyage par l’application, l’effacement des
            données de l’app ou sa désinstallation.
          </p>
          <p>
            Les informations de transaction, journaux techniques et données
            détenues directement par Apple, Google ou RevenueCat peuvent suivre
            leurs propres durées de conservation et les obligations légales qui
            leur sont applicables. Le cookie de préférence du site expire après
            six mois.
          </p>
        </section>

        <section id="section-14">
          <h2>14. Sécurité</h2>
          <p>
            Les communications réseau utilisent HTTPS/TLS. Firebase applique une
            authentification et des règles d’accès ; les opérations sensibles de
            place, d’achat, de modération et de suppression passent par des
            fonctions serveur. Les données Android privées sont exclues de la
            sauvegarde et du transfert d’appareil. Aucun dispositif ne peut
            toutefois garantir une sécurité absolue.
          </p>
        </section>

        <section id="section-15">
          <h2>15. Suppression du compte et des données</h2>
          <p>
            Une personne connectée peut ouvrir{" "}
            <strong>Réglages → Compte → Supprimer mon compte</strong>, puis
            confirmer. La fonction serveur supprime et vérifie l’absence du
            profil et de ses sous-collections, de la collection, des sessions,
            associations et transactions d’abonnement, signalements, blocages,
            présences et places en temps réel, ainsi que des éventuels fichiers
            sous le préfixe privé du compte. Elle retire l’identité Firebase en
            dernier. Une salle partagée n’est pas supprimée si elle contient les
            données d’autres voyageurs ; le lien avec son créateur est
            anonymisé.
          </p>
          <p>
            Sur iOS, après confirmation serveur, l’application efface aussi les
            données SwiftData, UserDefaults, caches en mémoire, fichiers du
            groupe widget et session locale. Dans la version Android examinée,
            la suppression distante et la déconnexion sont effectuées, mais
            certains fichiers privés et préférences locales peuvent rester
            jusqu’à l’effacement des données de l’application ou sa
            désinstallation. Ils restent dans l’espace privé de l’appareil et
            les instantanés de session sont liés à l’ancien identifiant.
          </p>
          <p>
            Si l’option n’est pas accessible, une demande peut être envoyée à{" "}
            <a href={`mailto:${siteConfig.supportEmail}`}>
              {siteConfig.supportEmail}
            </a>
            . Une vérification d’identité peut être nécessaire.
          </p>
        </section>

        <section id="section-16">
          <h2>16. Vos droits</h2>
          <p>
            Dans les conditions prévues par le RGPD, vous pouvez demander
            l’accès, la rectification, l’effacement, la limitation, l’opposition
            et la portabilité de vos données, ainsi que retirer un consentement
            pour l’avenir. Ces demandes s’exercent par e-mail à{" "}
            <a href={`mailto:${siteConfig.supportEmail}`}>
              {siteConfig.supportEmail}
            </a>
            . Vous pouvez également saisir la CNIL si vous estimez que vos
            droits ne sont pas respectés.
          </p>
        </section>

        <section id="section-17">
          <h2>17. Utilisateurs mineurs</h2>
          <p>
            L’onboarding permet d’indiquer une tranche d’âge « moins de 18 ans
            ». Le code examiné ne met cependant pas en œuvre de contrôle d’âge,
            de consentement parental ou d’expérience distincte pour les enfants.
            Focus Train n’est donc pas présenté comme un service destiné
            spécifiquement aux enfants. Un parent ou représentant légal peut
            nous contacter s’il pense qu’un mineur a fourni des données de
            manière inappropriée.
          </p>
        </section>

        <section id="section-18">
          <h2>18. Transferts internationaux</h2>
          <p>
            Certains prestataires, notamment Google/Firebase, Apple, Google Play
            et RevenueCat, peuvent traiter des données depuis des pays situés
            hors de l’Espace économique européen. Ces traitements sont régis par
            les mécanismes proposés par les prestataires et applicables au
            service concerné, par exemple une décision d’adéquation ou des
            clauses contractuelles types. Webful annonce héberger son service en
            France.
          </p>
        </section>

        <section id="section-19">
          <h2>19. Modifications de cette politique</h2>
          <p>
            Cette politique peut évoluer avec l’application, les prestataires ou
            la réglementation. La date affichée en haut de page indique la
            version en vigueur. Une information complémentaire sera présentée
            lorsque la nature d’un changement le justifie.
          </p>
        </section>

        <section id="section-20">
          <h2>20. Contact</h2>
          <p>
            Pour toute question ou demande relative à la vie privée :{" "}
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
