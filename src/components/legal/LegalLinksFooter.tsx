"use client";

import Link from "next/link";
import "./legal-links-footer.css";

const LEGAL_LINKS = [
  { href: "/legal/mentions", label: "Mentions légales" },
  { href: "/legal/cgv", label: "CGV" },
  { href: "/legal/confidentialite", label: "Confidentialité" },
  { href: "/legal/cookies", label: "Cookies" },
  { href: "/legal/reclamations", label: "Réclamations" },
  { href: "/legal/accessibilite", label: "Accessibilité" },
] as const;

export function LegalLinksFooter() {
  return (
    <footer className="legal-links-footer">
      <div className="legal-links-footer__inner">
        <p>
          <strong>HAGNERE CODE</strong> · SASU au capital de 10 € · SIREN 993 672 856 ·
          RCS Chambéry 993 672 856 · 82 impasse de Bellevue, 73000 Bassens, France
        </p>
        <nav aria-label="Informations juridiques">
          {LEGAL_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => {
              if (typeof window.openCookiePreferences === "function") {
                window.openCookiePreferences();
              } else {
                window.location.assign("/legal/cookies#choix");
              }
            }}
          >
            Gérer mes cookies
          </button>
        </nav>
      </div>
    </footer>
  );
}
