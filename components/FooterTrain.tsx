"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { appAssets } from "@/config/assets";

gsap.registerPlugin(useGSAP);

export function FooterTrain() {
  const zone = useRef<HTMLDivElement>(null);
  const train = useRef<HTMLButtonElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const busy = useRef(false);
  const [isTravelling, setIsTravelling] = useState(false);

  const { contextSafe } = useGSAP(
    () => {
      if (!train.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.to(train.current, {
        y: -3,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: zone },
  );

  const sendTrain = contextSafe(() => {
    const element = train.current;
    if (!element || busy.current) return;

    busy.current = true;
    setIsTravelling(true);
    timeline.current?.kill();

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const rect = element.getBoundingClientRect();
    const leftExit = -(rect.right + 100);
    const rightEntry = window.innerWidth - rect.left + 100;
    const finishJourney = () => {
      busy.current = false;
      setIsTravelling(false);
    };

    timeline.current = gsap
      .timeline({
        defaults: { overwrite: "auto" },
        onComplete: finishJourney,
        onInterrupt: finishJourney,
      })
      .to(element, {
        scale: 0.975,
        duration: reduceMotion ? 0 : 0.12,
        ease: "power2.out",
      })
      .to(element, {
        scale: 1,
        duration: reduceMotion ? 0 : 0.18,
        ease: "back.out(2)",
      })
      .to(element, {
        x: leftExit,
        autoAlpha: reduceMotion ? 0 : 1,
        duration: reduceMotion ? 0.2 : 1.35,
        ease: "power3.in",
      })
      .set(element, { x: rightEntry })
      .to({}, { duration: 7 })
      .to(element, {
        x: 0,
        autoAlpha: 1,
        duration: reduceMotion ? 0.2 : 2.15,
        ease: "power3.out",
      });
  });

  return (
    <div className="footer-train-zone" ref={zone}>
      <div className="footer-train-stage">
        <button
          ref={train}
          className="footer-train-button"
          type="button"
          onClick={sendTrain}
          aria-label="Faire partir le train Focus Train"
          disabled={isTravelling}
        >
          <Image
            src={appAssets.footerTrain}
            alt="Train rose Focus Train"
            width={2172}
            height={724}
            sizes="(max-width: 640px) 92vw, 820px"
            draggable={false}
          />
        </button>
        <div className="footer-rails" aria-hidden="true" />
      </div>
    </div>
  );
}
