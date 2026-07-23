import { AppStoreButton } from "@/components/AppStoreButton";
import { FooterTrain } from "@/components/FooterTrain";
import { PetalField } from "@/components/PetalField";

export function FinalCTA() {
  return (
    <div className="final-cta-area">
      <section className="section final-cta">
        <PetalField />
        <div className="cta-landscape" aria-hidden="true">
          <span className="cta-sun" />
          <span className="cta-fuji" />
        </div>
        <div className="cta-copy">
          <p className="eyebrow">Prochain départ</p>
          <h2>Prêt à monter à bord ?</h2>
          <p>
            Lance ta prochaine session et transforme ton temps de concentration
            en voyage.
          </p>
          <AppStoreButton light label="Télécharger Focus Train" />
          <small>Disponible bientôt sur l’App Store</small>
        </div>
        <div className="cta-ticket" aria-hidden="true">
          <small>FOCUS EXPRESS</small>
          <b>乗車券</b>
          <span>ONE WAY · TO YOUR GOALS</span>
        </div>
      </section>
      <div className="final-cta-train">
        <FooterTrain />
      </div>
    </div>
  );
}
