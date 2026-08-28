"use client";

import Link from "next/link";
import { isCookieBannerEnabled } from "@/lib/cookie-consent";
import { LEGAL_POSTAL_ADDRESS } from "./legal-contact";
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
          RCS Chambéry 993 672 856 · {LEGAL_POSTAL_ADDRESS}
        </p>
        <nav aria-label="Informations juridiques">
          {LEGAL_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          {/* Sans bannière, aucun traceur facultatif n'est déposé : il n'y a
              rien à gérer et le bouton renverrait l'utilisateur sur la page
              cookies sans ouvrir le moindre panneau. On ne l'affiche donc que
              lorsque la bannière est active (cf. /legal/cookies#choix). */}
          {isCookieBannerEnabled() ? (
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
          ) : null}
        </nav>
      </div>
    </footer>
  );
}
