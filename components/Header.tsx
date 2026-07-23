"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { StoreAccess } from "@/components/StoreAccess";

const nav = [
  ["Fonctionnalités", "/#fonctionnalites"],
  ["Solo", "/#solo"],
  ["Multijoueur", "/#multijoueur"],
  ["Collection", "/#collection"],
  ["Tarifs", "/pricing"],
  ["FAQ", "/#faq"],
  ["Support", "/support"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Navigation principale">
          {nav.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-cta">
          <StoreAccess />
        </div>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Navigation mobile">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <StoreAccess />
        </nav>
      )}
    </header>
  );
}
