import type { Metadata } from "next";
import {
  BookOpen,
  Database,
  Mail,
  TimerReset,
  TrainFront,
  Trash2,
} from "lucide-react";
import { LegalPage } from "@/components/LegalPage";
import { SupportForm } from "@/components/SupportForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Assistance",
  description:
    "Obtenez de l’aide concernant Focus Train, les sessions, les trajets, le compte utilisateur et les achats.",
  alternates: { canonical: "/support" },
};

const categories = [
  {
    icon: TimerReset,
    title: "Sessions de concentration",
    items: [
      [
        "Comment démarrer une session ?",
        "Depuis l’accueil, choisis le mode Solo ou Multijoueur, définis la durée puis lance la session.",
      ],
      [
        "Comment mettre une session en pause ?",
        "Utilise le bouton pause affiché sur l’écran de session. Reprends lorsque tu es prêt.",
      ],
      [
        "Que se passe-t-il si je ferme l’application ?",
        "Rouvre Focus Train pour vérifier l’état de la session. Le comportement peut dépendre des autorisations système et de la version installée.",
      ],
      [
        "Pourquoi mon train n’avance-t-il plus ?",
        "Vérifie que la session est active et non en pause. En multijoueur, contrôle aussi ta connexion internet, puis relance l’application si nécessaire.",
      ],
    ],
  },
  {
    icon: BookOpen,
    title: "Progression et collection",
    items: [
      [
        "Comment débloquer une nouvelle ville ?",
        "Termine tes sessions pour progresser sur l’itinéraire et atteindre la prochaine destination.",
      ],
      [
        "Comment obtenir une carte postale ?",
        "Certaines destinations terminées ajoutent un souvenir au carnet de voyage.",
      ],
      [
        "Comment obtenir de nouveaux timbres ?",
        "Poursuis ton exploration et complète les objectifs associés aux régions.",
      ],
      [
        "Ma progression a disparu, que faire ?",
        "Vérifie que tu utilises le bon compte et que ta connexion est active. Si elle ne revient pas, contacte le support avec les détails de ton appareil.",
      ],
    ],
  },
  {
    icon: TrainFront,
    title: "Multijoueur",
    items: [
      [
        "Comment rejoindre un train ?",
        "Sélectionne un pays, un trajet disponible, puis choisis ton wagon et ta place.",
      ],
      [
        "Pourquoi aucun trajet n’est disponible ?",
        "La disponibilité peut varier selon les départs et les voyageurs présents. Réessaie plus tard ou choisis un autre pays.",
      ],
      [
        "Comment changer de wagon ou de place ?",
        "Reviens à la sélection avant le début de la session. Pendant une session, certaines modifications peuvent être indisponibles.",
      ],
      [
        "Puis-je quitter une session multijoueur ?",
        "Oui, utilise la commande de fin de session. Ta progression enregistrée dépendra des règles affichées dans l’application.",
      ],
    ],
  },
  {
    icon: Database,
    title: "Compte et données",
    items: [
      [
        "Comment modifier mon profil ?",
        "Ouvre les réglages de Focus Train puis accède à ton profil.",
      ],
      [
        "Comment récupérer mes données ?",
        `Envoie une demande à ${siteConfig.supportEmail} depuis l’adresse liée à ton compte.`,
      ],
      [
        "Comment supprimer mon compte ?",
        `Utilise l’option disponible dans l’application ou contacte ${siteConfig.supportEmail} avec l’adresse liée à ton compte.`,
      ],
      [
        "Comment signaler un problème ?",
        "Utilise le formulaire ci-dessous en indiquant les étapes, la version de l’application, ton iPhone et ta version d’iOS.",
      ],
    ],
  },
];

export default function SupportPage() {
  return (
    <LegalPage
      eyebrow="Assistance"
      title="Comment pouvons-nous t’aider ?"
      intro="Retrouve les réponses aux questions courantes ou contacte notre équipe si tu rencontres un problème avec Focus Train."
    >
      <section className="support-categories">
        {categories.map(({ icon: Icon, title, items }) => (
          <article className="support-category" key={title}>
            <div className="category-title">
              <Icon />
              <h2>{title}</h2>
            </div>
            <div className="faq-list compact-faq">
              {items.map(([question, answer]) => (
                <details key={question}>
                  <summary>
                    {question}
                    <span>＋</span>
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </article>
        ))}
      </section>
      <aside className="account-delete">
        <Trash2 />
        <div>
          <h2>Supprimer mon compte</h2>
          <p>
            Pour demander la suppression de ton compte et des données associées,
            utilise l’option disponible dans l’application ou contacte-nous à{" "}
            <a href={`mailto:${siteConfig.supportEmail}`}>
              {siteConfig.supportEmail}
            </a>{" "}
            avec l’adresse liée à ton compte.
          </p>
        </div>
      </aside>
      <section className="contact-section">
        <div className="contact-heading">
          <Mail />
          <p className="eyebrow">Nous contacter</p>
          <h2>Une question reste sans réponse ?</h2>
          <p>
            Prépare un e-mail complet grâce au formulaire. Nous faisons notre
            possible pour répondre dans les meilleurs délais.
          </p>
          <p>
            Tu peux aussi écrire directement à{" "}
            <a href={`mailto:${siteConfig.supportEmail}`}>
              {siteConfig.supportEmail}
            </a>
            .
          </p>
        </div>
        <SupportForm />
      </section>
    </LegalPage>
  );
}
