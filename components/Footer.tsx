import Link from "next/link";
import { CookieSettingsButton } from "@/components/CookieConsent";
import { Logo } from "@/components/Logo";
import { StoreAccess } from "@/components/StoreAccess";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>{siteConfig.tagline}</p>
        </div>
        <nav aria-label="Liens du pied de page">
          <Link href="/">Accueil</Link>
          <Link href="/#fonctionnalites">Fonctionnalités</Link>
          <Link href="/pricing">Tarifs</Link>
          <Link href="/support">Assistance</Link>
          <Link href="/confidentialite">Confidentialité</Link>
          <Link href="/mentions-legales">Mentions légales</Link>
          <StoreAccess variant="rate" />
          <CookieSettingsButton />
        </nav>
        <div className="footer-contact">
          <p>Une question ?</p>
          <a href={`mailto:${siteConfig.supportEmail}`}>
            {siteConfig.supportEmail}
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()}{" "}
          {siteConfig.editorLegalName || siteConfig.name}. Tous droits réservés.
        </p>
        <p>
          Focus Train est une application de productivité indépendante. Elle ne
          constitue pas un service officiel de réservation ou d’information
          ferroviaire.
        </p>
      </div>
    </footer>
  );
}
