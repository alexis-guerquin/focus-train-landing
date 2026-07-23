import Image from "next/image";
import Link from "next/link";
import { appAssets } from "@/config/assets";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="brand" aria-label="Focus Train — Accueil">
      <span className="brand-mark" aria-hidden="true">
        <Image src={appAssets.appIcon} alt="" width={40} height={40} priority />
      </span>
      {!compact && <span>Focus Train</span>}
    </Link>
  );
}
