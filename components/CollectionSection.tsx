import { Award, Map, Stamp } from "lucide-react";
import { PhoneMockup } from "@/components/PhoneMockup";
import { SectionHeading } from "@/components/SectionHeading";
import { appAssets } from "@/config/assets";

export function CollectionSection() {
  return (
    <section
      className="section split-section collection-section"
      id="collection"
    >
      <div className="split-copy">
        <SectionHeading
          eyebrow="Carnet de voyage"
          title="Collectionne les souvenirs de tes voyages"
        >
          <p>
            Chaque destination peut enrichir ton carnet. Découvre des cartes
            postales illustrées, complète tes séries de timbres et suis ta
            progression région par région.
          </p>
        </SectionHeading>
        <div className="feature-list collection-features">
          <div>
            <Map size={18} aria-hidden="true" />
            <span>Régions et villes visitées</span>
          </div>
          <div>
            <Stamp size={18} aria-hidden="true" />
            <span>Cartes postales et timbres</span>
          </div>
          <div>
            <Award size={18} aria-hidden="true" />
            <span>Badges et progression globale</span>
          </div>
        </div>
        <blockquote>
          « Ton temps de travail devient une collection que tu as envie de
          compléter. »
        </blockquote>
      </div>
      <div className="split-visual collection-visual">
        <PhoneMockup
          src={appAssets.collection}
          alt="Carnet de collection réel de Focus Train pour la région de Hokkaido, avec une carte postale et des timbres"
        />
      </div>
    </section>
  );
}
