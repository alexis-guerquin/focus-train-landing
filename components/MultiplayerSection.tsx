import { Armchair, Globe2, Map, Route, TrainFront, Users } from "lucide-react";
import { PhoneMockup } from "@/components/PhoneMockup";
import { SectionHeading } from "@/components/SectionHeading";
import { appAssets } from "@/config/assets";

const journey = [
  "Choisir un pays",
  "Trouver un trajet",
  "Choisir un wagon",
  "Sélectionner une place",
  "Se concentrer ensemble",
];

export function MultiplayerSection() {
  return (
    <section className="multiplayer-shell" id="multijoueur">
      <div className="section split-section multiplayer-section">
        <div className="split-visual multi-visual">
          <PhoneMockup
            className="multi-phone multi-phone-back"
            src={appAssets.countrySelection}
            alt="Sélection réelle d’un pays dans le mode Multijoueur de Focus Train"
          />
          <PhoneMockup
            className="multi-phone multi-phone-front"
            src={appAssets.multiplayerInteriorPrimary}
            alt="Session multijoueur réelle à bord d’un wagon Focus Train"
          />
        </div>
        <div className="split-copy">
          <SectionHeading
            eyebrow="Mode Multijoueur"
            title="Travaille avec d’autres voyageurs"
          >
            <p>
              Rejoins des trains inspirés de trajets ferroviaires réels, choisis
              ton wagon et installe-toi avec d’autres personnes pour avancer
              ensemble.
            </p>
          </SectionHeading>
          <div className="feature-grid compact-grid">
            <span>
              <Globe2 /> Plusieurs pays
            </span>
            <span>
              <Route /> Trajets en direct
            </span>
            <span>
              <TrainFront /> Choix du wagon
            </span>
            <span>
              <Armchair /> Choix de la place
            </span>
          </div>
        </div>
      </div>
      <div className="journey-band section">
        {journey.map((step, index) => (
          <div key={step}>
            <span>{index + 1}</span>
            <small>{step}</small>
          </div>
        ))}
      </div>
      <div
        className="section multiplayer-gallery"
        aria-label="Parcours multijoueur dans l’application"
      >
        <PhoneMockup
          src={appAssets.liveTrains}
          alt="Carte réelle des trains multijoueurs disponibles en France"
          caption="Trouver un trajet"
        />
        <PhoneMockup
          src={appAssets.carriageSelection}
          alt="Écran réel de sélection d’un wagon"
          caption="Choisir un wagon"
        />
        <PhoneMockup
          src={appAssets.seatSelection}
          alt="Écran réel de sélection d’une place dans le wagon"
          caption="Sélectionner une place"
        />
        <PhoneMockup
          src={appAssets.multiplayerInteriorSecondary}
          alt="Vue réelle des voyageurs concentrés ensemble dans un wagon"
          caption="Avancer ensemble"
        />
      </div>
      <div className="together-band">
        <Map aria-hidden="true" />
        <strong>Se concentrer seul, ou avancer ensemble.</strong>
        <Users aria-hidden="true" />
      </div>
    </section>
  );
}
