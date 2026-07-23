import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/config/site";

export const faqItems = [
  [
    "Focus Train est-il un minuteur Pomodoro ?",
    "Focus Train peut être utilisé pour des sessions courtes ou longues, comme un minuteur Pomodoro, mais ajoute une progression ferroviaire, des destinations et des récompenses à collectionner.",
  ],
  [
    "Puis-je utiliser Focus Train seul ?",
    "Oui. Le mode solo permet de parcourir progressivement le Japon à ton propre rythme.",
  ],
  [
    "Comment fonctionne le multijoueur ?",
    "Tu choisis un pays, un trajet, un wagon et une place. Tu peux ensuite effectuer ta session avec les autres voyageurs présents dans le train.",
  ],
  [
    "Les trajets correspondent-ils à de vrais billets de train ?",
    "Non. Focus Train est une application de productivité. Elle ne vend pas de billets et ne remplace pas les services officiels des compagnies ferroviaires.",
  ],
  [
    "Que puis-je collectionner ?",
    "Les sessions permettent de débloquer des villes, cartes postales, timbres, badges et éléments liés aux régions visitées.",
  ],
  [
    "L’application est-elle disponible sur Android ?",
    "Focus Train est actuellement conçu pour iPhone.",
  ],
  [
    "Où puis-je obtenir de l’aide ?",
    `Consulte la page Assistance ou contacte-nous à l’adresse ${siteConfig.supportEmail}.`,
  ],
] as const;

export function FAQ() {
  return (
    <section className="section faq-section" id="faq">
      <SectionHeading
        eyebrow="Questions fréquentes"
        title="Tout ce qu’il faut savoir"
        align="center"
      />
      <div className="faq-list">
        {faqItems.map(([question, answer]) => (
          <details key={question}>
            <summary>
              {question}
              <span aria-hidden="true">＋</span>
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
