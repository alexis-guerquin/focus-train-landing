import Image from "next/image";
import { StoreLogo } from "@/components/StoreLogo";
import { appStoreLinks, previews, storeImages, structuredLanding, type LandingLocale } from "@/config/landing";
import { siteConfig } from "@/config/site";

const play = siteConfig.googlePlayUrl;

export function FocusLanding({ locale }: { locale: LandingLocale }) {
  const fr = locale === "fr";

  return (
    <div className="focus-home" lang={locale}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredLanding(locale)).replace(/</g, "\\u003c"),
      }} />
      <section className="focus-hero" aria-labelledby="focus-title">
        <div className="focus-hero__copy">
          <h1 id="focus-title">
            {fr ? "Concentre-toi." : "Find your focus."}
            <span>{fr ? "Le train avance." : "Watch the train go."}</span>
          </h1>
          <p className="focus-intro">{fr
            ? "Focus Train est un minuteur Pomodoro pour étudier et travailler. Lance une session et traverse le Japon, seul ou avec tes amis."
            : "Focus Train is a Pomodoro timer for study and work. Choose a route across Japan and watch your train move as you focus, solo or with friends."}</p>
          <div id="telecharger" className="focus-stores" aria-label={fr ? "Télécharger Focus Train" : "Download Focus Train"}>
            <a className="focus-store focus-store--apple" href={appStoreLinks[locale]}>
              <StoreLogo platform="ios" size={22} />
              <span>App Store<small>iPhone &amp; iPad</small></span>
            </a>
            <a className="focus-store focus-store--play" href={play}>
              <StoreLogo platform="android" size={22} />
              <span>Google Play<small>Android</small></span>
            </a>
          </div>
          <ul className="focus-proof" aria-label={fr ? "Focus Train en chiffres" : "Focus Train in numbers"}>
            <li><a href={play}><strong>{fr ? "1\u00a0000+" : "1,000+"}</strong><span>{fr ? "téléchargements Google Play" : "Google Play downloads"}</span></a></li>
            <li><a href={appStoreLinks.fr}><strong>5/5 <span aria-hidden="true">★</span></strong><span>{fr ? "App Store France · 1 note" : "French App Store · 1 rating"}</span></a></li>
          </ul>
        </div>
        <div className="focus-store-images">
          {storeImages(locale).map(({ alt, ...image }, index) => (
            <Image key={image.src} {...image} alt={alt} priority={index === 0} loading={index === 0 ? undefined : "eager"} />
          ))}
        </div>
      </section>
      <section id="fonctionnalites" className="focus-features" aria-labelledby="focus-features-title">
        <h2 id="focus-features-title">{fr ? "À bord de Focus Train" : "On board Focus Train"}</h2>
        <div className="focus-features__grid">
          {previews.map((preview) => {
            const { title, text } = preview[locale];
            return (
              <article id={preview.id} key={preview.id}>
                <div className="focus-features__images">
                  {preview.images.map(({ src, width, height, ...alt }) => (
                    <Image key={src} src={src} alt={alt[locale]} width={width} height={height} />
                  ))}
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section id="faq" className="focus-faq" aria-labelledby="focus-faq-title">
        <h2 id="focus-faq-title">{fr ? "Questions fréquentes" : "Frequently asked questions"}</h2>
        <details>
          <summary>{fr ? "Comment utiliser Focus Train comme minuteur Pomodoro ?" : "How do I use Focus Train as a Pomodoro timer?"}</summary>
          <p>{fr
            ? "Choisis une tâche et règle une session, par exemple de 25 minutes. Ton train avance pendant que tu te concentres. À la fin, prends une courte pause avant de repartir."
            : "Pick a task and set a session length, such as 25 minutes. Your train moves while you focus. Take a short break when the session ends."}</p>
        </details>
        <details>
          <summary>{fr ? "Sur quels appareils puis-je jouer ?" : "Where can I download Focus Train?"}</summary>
          <p>{fr ? "Focus Train est téléchargeable gratuitement sur l’App Store pour iPhone et iPad et sur Google Play pour Android. L’app propose des achats intégrés." : "Focus Train is free to download from the App Store for iPhone and iPad and from Google Play for Android. It offers in-app purchases."}</p>
        </details>
        <details>
          <summary>{fr ? "Comment se déroule une session à plusieurs ?" : "How does multiplayer focus work?"}</summary>
          <p>{fr
            ? "Choisis un trajet, un wagon et une place. Tu peux alors te concentrer en même temps que les autres voyageurs du wagon. Les fonctions disponibles dépendent de la plateforme et de la version de l’app."
            : "Choose a route, carriage, and seat to share a focus session with the other travelers in your carriage. Availability varies by platform and app version."}</p>
        </details>
      </section>
    </div>
  );
}
