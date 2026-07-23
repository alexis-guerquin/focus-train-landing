import { Check, Clock3, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const classic = [
  "Un compte à rebours",
  "Peu de progression visible",
  "Une expérience répétitive",
  "Une motivation basée sur le temps",
];
const focus = [
  "Un voyage qui progresse",
  "Des destinations à découvrir",
  "Des souvenirs à collectionner",
  "Un mode solo et multijoueur",
  "Une expérience visuelle apaisante",
];

export function ComparisonSection() {
  return (
    <section className="section comparison-section">
      <SectionHeading
        eyebrow="Une autre manière de se concentrer"
        title="Bien plus qu’un minuteur"
        align="center"
      />
      <div className="comparison-grid">
        <article className="comparison-card comparison-classic">
          <Clock3 />
          <h3>Un minuteur habituel</h3>
          <ul>
            {classic.map((item) => (
              <li key={item}>
                <span>—</span>
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="comparison-card comparison-focus">
          <div className="recommended">L’expérience Focus Train</div>
          <Sparkles />
          <h3>Focus Train</h3>
          <ul>
            {focus.map((item) => (
              <li key={item}>
                <Check />
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
