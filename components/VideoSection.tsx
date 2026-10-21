"use client";

import { useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Play,
  Youtube,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/config/site";
import { useI18n } from "@/components/I18nProvider";

export function VideoSection() {
  const { messages } = useI18n();
  const carousel = useRef<HTMLDivElement>(null);

  function moveCarousel(direction: -1 | 1) {
    const element = carousel.current;
    if (!element) return;
    element.scrollBy({
      left: direction * Math.min(element.clientWidth * 0.86, 760),
      behavior: "smooth",
    });
  }

  return (
    <section className="section video-section" id="videos">
      <div className="video-section-header">
        <div className="video-copy">
          <span className="video-mark" aria-hidden="true">
            <Youtube />
          </span>
          <SectionHeading
            eyebrow={messages.videos.eyebrow}
            title={messages.videos.title}
          >
            <p>{messages.videos.intro}</p>
          </SectionHeading>
          <div className="video-points" aria-label={messages.videos.title}>
            <span>
              <Play size={15} aria-hidden="true" /> {messages.videos.pomodoro}
            </span>
            <span>{messages.videos.ambience}</span>
          </div>
          <a
            className="secondary-button youtube-link"
            href={siteConfig.youtubePlaylistUrl}
            target="_blank"
            rel="noreferrer"
          >
            {messages.videos.open}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>

        <div className="video-carousel-controls">
          <button
            type="button"
            onClick={() => moveCarousel(-1)}
            aria-label={messages.videos.previous}
          >
            <ArrowLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => moveCarousel(1)}
            aria-label={messages.videos.next}
          >
            <ArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="video-carousel" ref={carousel}>
        {siteConfig.youtubePlaylistVideos.map((video, index) => (
          <article className="playlist-video-card" key={video.id}>
            <div className="youtube-frame">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.id}?list=PLbIjjBFGjZEc&index=${index + 1}`}
                title={video.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="playlist-video-meta">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{video.title}</h3>
              <small>{video.duration}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
