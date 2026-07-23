import {
  Flag,
  Focus,
  Gift,
  TimerReset,
  TrainFront,
  MapPinned,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const steps = [
  {
    icon: TimerReset,
    number: "01",
    title: "Choisis ta session",
    text: "Définis ton temps de concentration et ta prochaine destination.",
  },
  {
    icon: Focus,
    number: "02",
    title: "Reste concentré",
    text: "Ton train avance pendant que tu travailles, étudies ou lis.",
  },
  {
    icon: Gift,
    number: "03",
    title: "Découvre et collectionne",
    text: "Débloque des villes, cartes postales, timbres et nouvelles régions.",
  },
];

export function FeatureSection() {
  return (
    <section className="section concept-section" id="fonctionnalites">
      <SectionHeading
        eyebrow="Le voyage commence ici"
        title="Un minuteur qui te fait voyager"
        align="center"
      >
        <p>
          Focus Train transforme chaque minute de concentration en progression.
          Pendant que tu travailles, ton train avance vers la prochaine ville.
        </p>
      </SectionHeading>
      <div className="route-steps">
        <div className="route-line" aria-hidden="true">
          <TrainFront />
          <i />
          <MapPinned />
          <i />
          <Flag />
        </div>
        {steps.map(({ icon: Icon, number, title, text }) => (
          <article className="step-card" key={number}>
            <span className="step-icon">
              <Icon aria-hidden="true" />
            </span>
            <small>Étape {number}</small>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
