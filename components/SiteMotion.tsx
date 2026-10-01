"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const revealSelector = [
  ".section-heading",
  ".step-card",
  ".split-copy > *",
  ".split-visual",
  ".journey-band > div",
  ".comparison-card",
  ".video-copy",
  ".youtube-frame",
  ".faq-list > details",
  ".support-category",
  ".legal-content > section",
  ".account-delete",
  ".contact-section",
  ".final-cta .cta-copy",
  ".footer-grid > *",
  ".footer-bottom > *",
].join(", ");

export function SiteMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = root.current;
      if (!container) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(container.querySelectorAll(revealSelector), {
          clearProps: "all",
        });
        return;
      }

      const lenis = new Lenis({
        duration: 1.05,
        smoothWheel: true,
        syncTouch: false,
        anchors: true,
        autoRaf: false,
      });
      const updateLenis = (time: number) => lenis.raf(time * 1000);

      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(updateLenis);
      gsap.ticker.lagSmoothing(0);

      const heroTimeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      });
      heroTimeline
        .from(".site-header", { y: -24, autoAlpha: 0, duration: 0.75 })
        .from(
          ".hero-copy > *",
          { y: 28, autoAlpha: 0, duration: 0.8, stagger: 0.09 },
          "-=0.4",
        )
        .from(
          ".hero-visual",
          { x: 60, scale: 0.96, autoAlpha: 0, duration: 1.05 },
          "-=0.85",
        );

      const revealItems = gsap.utils.toArray<HTMLElement>(revealSelector);
      gsap.set(revealItems, { y: 42, autoAlpha: 0 });

      ScrollTrigger.batch(revealItems, {
        start: "top 88%",
        once: true,
        interval: 0.08,
        batchMax: 5,
        onEnter: (batch) =>
          gsap.to(batch, {
            y: 0,
            autoAlpha: 1,
            duration: 0.85,
            stagger: 0.08,
            ease: "power3.out",
            overwrite: "auto",
          }),
      });

      const phoneImages = gsap.utils.toArray<HTMLElement>(".phone-shot img");
      phoneImages.forEach((image) => {
        gsap.fromTo(
          image,
          { yPercent: -1.5 },
          {
            yPercent: 1.5,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.1,
            },
          },
        );
      });

      const refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => {
        cancelAnimationFrame(refreshFrame);
        gsap.ticker.remove(updateLenis);
        gsap.ticker.lagSmoothing(500, 33);
        lenis.off("scroll", ScrollTrigger.update);
        lenis.destroy();
      };
    },
    { scope: root },
  );

  return (
    <div ref={root} className="site-motion-root">
      {children}
    </div>
  );
}
