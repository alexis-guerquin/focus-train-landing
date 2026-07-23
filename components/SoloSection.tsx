import { Clock3, Map, MapPin, Route, Volume2 } from "lucide-react";
import { PhoneMockup } from "@/components/PhoneMockup";
import { SectionHeading } from "@/components/SectionHeading";
import { appAssets } from "@/config/assets";

const soloFeatures = [
  [Map, "Carte interactive du Japon"],
  [Route, "Progression entre les villes"],
  [MapPin, "Prochain arrêt visible"],
  [Clock3, "Temps restant avant l’arrivée"],
];

export function SoloSection() {
  return (
    <section className="section split-section solo-section" id="solo">
      <div className="split-copy">
        <SectionHeading
          eyebrow="Mode Solo"
          title="Explore le Japon, une session après l’autre"
        >
          <p>
            Traverse les régions japonaises à ton rythme. Chaque session te
            rapproche de la prochaine ville et complète progressivement ton
            carnet de voyage.
          </p>
        </SectionHeading>
        <div className="feature-list">
          {soloFeatures.map(([Icon, text]) => (
            <div key={text as string}>
              <Icon size={18} aria-hidden="true" />
              <span>{text as string}</span>
            </div>
          ))}
        </div>
        <blockquote>
          « Chaque minute travaillée devient une nouvelle étape du voyage. »
        </blockquote>
      </div>
      <div className="split-visual solo-visual">
        <PhoneMockup
          src={appAssets.japanMap}
          alt="Carte réelle du mode Solo de Focus Train, avec le départ à Sapporo"
        />
      </div>
    </section>
  );
}

const uses = [
  "Travail",
  "Études",
  "Révisions",
  "Lecture",
  "Écriture",
  "Projets personnels",
];

export function FocusSection() {
  return (
    <section className="section focus-section">
      <div className="split-visual focus-capture">
        <PhoneMockup
          src={appAssets.soloSession}
          alt="Session Solo réelle dans Focus Train avec le train rose, le minuteur et le prochain arrêt Chitose"
        />
      </div>
      <div className="split-copy">
        <SectionHeading
          eyebrow="Mode concentration"
          title="Reste concentré sans pression"
        >
          <p>
            Le paysage défile, le train progresse et les informations
            essentielles restent toujours visibles, dans une interface douce et
            apaisante.
          </p>
        </SectionHeading>
        <div className="calm-points">
          <span>
            <Volume2 size={17} /> Ambiances calmes
          </span>
          <span>
            <Clock3 size={17} /> Minuteur flexible
          </span>
        </div>
        <div className="ideal-card">
          <small>Idéal pour</small>
          <div>
            {uses.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
