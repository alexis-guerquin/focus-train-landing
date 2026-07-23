import { Clock3, MapPin, Stamp, Trophy } from "lucide-react";
import { PhoneMockup } from "@/components/PhoneMockup";
import { SectionHeading } from "@/components/SectionHeading";
import { appAssets } from "@/config/assets";

const widgets = [
  [MapPin, "Trajet actuel"],
  [Clock3, "Temps restant"],
  [Stamp, "Souvenirs"],
  [Trophy, "Temps travaillé"],
];

export function WidgetSection() {
  return (
    <section className="section split-section widget-section">
      <div className="split-copy">
        <SectionHeading
          eyebrow="Widgets iPhone"
          title="Ton voyage continue sur ton écran d’accueil"
        >
          <p>
            Consulte ton trajet, tes souvenirs et ton temps de concentration
            directement depuis les widgets de ton iPhone.
          </p>
        </SectionHeading>
        <div className="feature-grid compact-grid">
          {widgets.map(([Icon, label]) => (
            <span key={label as string}>
              <Icon />
              {label as string}
            </span>
          ))}
        </div>
      </div>
      <div className="split-visual widget-visual">
        <PhoneMockup
          src={appAssets.widget}
          alt="Widget réel de Focus Train sur l’écran d’accueil d’un iPhone, montrant le trajet de Sapporo à Ebetsu"
        />
      </div>
    </section>
  );
}
