"use client";

import {
  AppWindow,
  Check,
  MapPinned,
  PanelsTopLeft,
  Sparkles,
  Users,
} from "lucide-react";
import { AppStoreButton } from "@/components/AppStoreButton";
import { useI18n } from "@/components/I18nProvider";

const freeIcons = [MapPinned, Users, PanelsTopLeft];
const goldenIcons = [MapPinned, AppWindow, PanelsTopLeft];

export function PricingContent() {
  const { messages } = useI18n();
  const pricing = messages.pricing;

  return (
    <div className="pricing-page">
      <section className="pricing-hero" aria-labelledby="pricing-title">
        <div className="pricing-heading">
          <p className="eyebrow">{pricing.eyebrow}</p>
          <h1 id="pricing-title">
            {pricing.titleStart} <em>{pricing.titleEnd}</em>
          </h1>
          <p>{pricing.intro}</p>
        </div>
        <div className="pricing-tickets">
          <article className="pricing-ticket pricing-ticket-free">
            <span className="ticket-cutout ticket-cutout-left" />
            <span className="ticket-cutout ticket-cutout-right" />
            <header className="pricing-ticket-header">
              <div>
                <span>FOCUS TRAIN</span>
                <small>{pricing.travelerTicket}</small>
              </div>
              <strong>JP · 058</strong>
            </header>
            <div className="pricing-ticket-main">
              <span className="pricing-ticket-kicker">
                {pricing.freeAccess}
              </span>
              <h2>{pricing.traveler}</h2>
              <div className="pricing-price">
                <strong>€0</strong>
                <span>{pricing.forever}</span>
              </div>
              <ul className="pricing-features">
                {pricing.freeFeatures.map(([title, detail], index) => {
                  const Icon = freeIcons[index];
                  return (
                    <li key={title}>
                      <Icon aria-hidden="true" />
                      <span>
                        <strong>{title}</strong>
                        <small>{detail}</small>
                      </span>
                      <Check className="feature-check" aria-hidden="true" />
                    </li>
                  );
                })}
              </ul>
            </div>
            <footer className="pricing-ticket-footer">
              <span>{pricing.mainRoute}</span>
              <i className="pricing-barcode" aria-hidden="true" />
              <strong>{pricing.japan}</strong>
            </footer>
          </article>
          <div className="pricing-ticket-golden-shell">
            <article
              className="pricing-ticket pricing-ticket-golden"
              tabIndex={0}
            >
              <span className="golden-shimmer" aria-hidden="true" />
              <span
                className="golden-spark golden-spark-one"
                aria-hidden="true"
              >
                ✦
              </span>
              <span
                className="golden-spark golden-spark-two"
                aria-hidden="true"
              >
                ✦
              </span>
              <span className="ticket-cutout ticket-cutout-left" />
              <span className="ticket-cutout ticket-cutout-right" />
              <header className="pricing-ticket-header">
                <div>
                  <span>FOCUS TRAIN EXPRESS</span>
                  <small>{pricing.premiumPass}</small>
                </div>
                <strong>GT · 200</strong>
              </header>
              <div className="pricing-ticket-main">
                <span className="pricing-ticket-kicker">
                  <Sparkles aria-hidden="true" />
                  {pricing.premiumTicket}
                </span>
                <h2>Golden Ticket</h2>
                <p className="golden-includes">{pricing.goldenIntro}</p>
                <div
                  className="golden-prices"
                  aria-label={pricing.premiumTicket}
                >
                  <div>
                    <span>{pricing.monthly}</span>
                    <strong>€5.99</strong>
                    <small>{pricing.perMonth}</small>
                  </div>
                  <div className="golden-price-best">
                    <span>{pricing.yearly}</span>
                    <strong>€35.99</strong>
                    <small>{pricing.yearlyEquivalent}</small>
                  </div>
                </div>
                <ul className="pricing-features">
                  {pricing.goldenFeatures.map(([title, detail], index) => {
                    const Icon = goldenIcons[index];
                    return (
                      <li key={title}>
                        <Icon aria-hidden="true" />
                        <span>
                          <strong>{title}</strong>
                          <small>
                            {detail}
                            {index === 1 && (
                              <b className="soon-badge">{pricing.soon}</b>
                            )}
                          </small>
                        </span>
                        <Check className="feature-check" aria-hidden="true" />
                      </li>
                    );
                  })}
                </ul>
              </div>
              <footer className="pricing-ticket-footer">
                <span>{pricing.premiumPass.toUpperCase()}</span>
                <i className="pricing-barcode" aria-hidden="true" />
                <strong>GOLD</strong>
              </footer>
            </article>
          </div>
        </div>
        <div className="pricing-cta">
          <p>{pricing.cta}</p>
          <AppStoreButton label={messages.common.downloadFocusTrain} />
        </div>
      </section>
    </div>
  );
}
