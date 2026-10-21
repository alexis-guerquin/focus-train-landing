"use client";

import Image from "next/image";
import Link from "next/link";
import { appAssets } from "@/config/assets";
import { useI18n } from "@/components/I18nProvider";

export function Logo({ compact = false }: { compact?: boolean }) {
  const { messages } = useI18n();
  return (
    <Link
      href="/"
      className="brand"
      aria-label={`Focus Train — ${messages.common.home}`}
    >
      <span className="brand-mark" aria-hidden="true">
        <Image src={appAssets.appIcon} alt="" width={40} height={40} priority />
      </span>
      {!compact && <span>Focus Train</span>}
    </Link>
  );
}
