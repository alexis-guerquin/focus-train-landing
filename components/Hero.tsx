"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { AppStoreButton } from "@/components/AppStoreButton";
import { PetalField } from "@/components/PetalField";
import { appAssets } from "@/config/assets";
import { useI18n } from "@/components/I18nProvider";

export function Hero() {
  const { messages } = useI18n();

  return (
    <section className="hero">
      <PetalField />
      <div className="hero-copy">
        <div className="pill">
          <span aria-hidden="true">●</span> {messages.hero.availability}
        </div>
        <h1>
          {messages.hero.titleStart}
          <br />
          <em>{messages.hero.titleEnd}</em>
        </h1>
        <p className="hero-lead">{messages.hero.lead}</p>
        <div className="hero-actions">
          <AppStoreButton label={messages.common.downloadAppStore} />
          <a className="secondary-button" href="#videos">
            {messages.hero.videos} <Play size={17} aria-hidden="true" />
          </a>
        </div>
        <p className="hero-note">
          <span aria-hidden="true">✦</span> {messages.hero.note}
        </p>
      </div>
      <div className="hero-visual">
        <div className="sun-disc" aria-hidden="true" />
        <figure className="hero-demo">
          <div className="hero-video-shell">
            <video
              autoPlay
              controls
              loop
              muted
              playsInline
              preload="metadata"
              poster={appAssets.demoPoster}
              aria-label={messages.hero.videoLabel}
            >
              <source src={appAssets.demoVideo} type="video/mp4" />
              {messages.hero.videoFallback}
            </video>
          </div>
          <figcaption>{messages.hero.preview}</figcaption>
        </figure>
        <div className="hero-app-badge" aria-hidden="true">
          <Image
            src={appAssets.appIcon}
            alt=""
            width={54}
            height={54}
            priority
          />
          <span>
            <b>Focus Train</b>
            <small>{messages.hero.badge}</small>
          </span>
        </div>
      </div>
    </section>
  );
}
