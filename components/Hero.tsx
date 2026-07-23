import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { AppStoreButton } from "@/components/AppStoreButton";
import { PetalField } from "@/components/PetalField";
import { PhoneMockup } from "@/components/PhoneMockup";
import { appAssets } from "@/config/assets";

export function Hero() {
  return (
    <section className="hero">
      <PetalField />
      <div className="hero-copy">
        <div className="pill">
          <span aria-hidden="true">●</span> Disponible bientôt sur iPhone
        </div>
        <h1>
          Transforme ton focus
          <br />
          en <em>voyage.</em>
        </h1>
        <p className="hero-lead">
          Lance une session, fais avancer ton train et découvre de nouvelles
          destinations pendant que tu travailles.
        </p>
        <div className="hero-actions">
          <AppStoreButton />
          <Link className="secondary-button" href="#fonctionnalites">
            Découvrir l’expérience <ChevronDown size={18} />
          </Link>
        </div>
        <p className="hero-note">
          <span aria-hidden="true">✦</span> Une expérience de concentration
          douce, en solo ou avec d’autres voyageurs.
        </p>
      </div>
      <div className="hero-visual">
        <div className="sun-disc" aria-hidden="true" />
        <PhoneMockup
          src={appAssets.home}
          alt="Écran d’accueil de Focus Train présentant les modes Solo, Multijoueur et la collection"
          priority
        />
        <div className="floating-ticket ticket-top" aria-hidden="true">
          <span>次の駅</span>
          <b>CHITOSE</b>
          <small>NEXT STOP</small>
        </div>
        <div className="floating-ticket ticket-bottom" aria-hidden="true">
          <span>SESSION</span>
          <b>25:00</b>
          <small>FOCUS EXPRESS</small>
        </div>
        <div className="hero-rail" aria-hidden="true">
          <div className="mini-train">● ● ●</div>
        </div>
      </div>
    </section>
  );
}
