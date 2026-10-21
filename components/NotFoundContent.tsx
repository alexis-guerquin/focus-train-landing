"use client";

import Link from "next/link";
import { ArrowRight, CircleHelp, Home, Sparkles, Tags } from "lucide-react";
import { AppStoreButton } from "@/components/AppStoreButton";
import { useI18n } from "@/components/I18nProvider";

export function NotFoundContent() {
  const { messages } = useI18n();
  const copy = messages.notFound;

  return (
    <section className="not-found">
      <div className="not-found-scenery" aria-hidden="true">
        <span className="not-found-sun" />
        <span className="not-found-cloud not-found-cloud-one" />
        <span className="not-found-cloud not-found-cloud-two" />
        <span className="not-found-track" />
        <span className="not-found-train">🚃</span>
      </div>

      <div className="not-found-card">
        <p className="eyebrow">
          <Sparkles size={15} aria-hidden="true" /> {copy.eyebrow}
        </p>
        <h1>{copy.title}</h1>
        <p className="not-found-intro">{copy.intro}</p>

        <nav className="not-found-links" aria-label={copy.navLabel}>
          <Link className="not-found-link is-primary" href="/">
            <Home size={19} aria-hidden="true" />
            <span>
              <b>{copy.home}</b>
              <small>{copy.homeSmall}</small>
            </span>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link className="not-found-link" href="/pricing">
            <Tags size={19} aria-hidden="true" />
            <span>
              <b>{copy.pricing}</b>
              <small>{copy.pricingSmall}</small>
            </span>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link className="not-found-link" href="/support">
            <CircleHelp size={19} aria-hidden="true" />
            <span>
              <b>{copy.support}</b>
              <small>{copy.supportSmall}</small>
            </span>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </nav>

        <div className="not-found-stores">
          <p>{copy.store}</p>
          <AppStoreButton compact />
        </div>
      </div>
    </section>
  );
}
