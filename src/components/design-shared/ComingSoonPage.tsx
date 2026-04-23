"use client";

import { useRef } from "react";
import Link from "next/link";
import { useDesignInteractive } from "./useDesignInteractive";
import { SiteFooter } from "./SiteFooter";
import "./coming-soon.css";
import "./responsive.css";
import "./site-footer.css";

type Props = {
  serviceName: string;
  shortDescription: string;
  eyebrow?: string;
};

export function ComingSoonPage({
  serviceName,
  shortDescription,
  eyebrow = "— En cours de rédaction",
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  useDesignInteractive(rootRef);

  return (
    <div ref={rootRef} className="hc-design">
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="brand">
            <div className="brand-mark">HC</div>
            <div className="brand-name">
              <b>Hagnéré</b> <span>Code</span>
            </div>
          </Link>
          <div className="nav-links">
            <Link href="/#services">Services</Link>
            <Link href="/methode">Méthode</Link>
            <Link href="/#realisations">Réalisations</Link>
            <Link href="/equipe">Équipe</Link>
            <Link href="/tarifs">Tarifs</Link>
          </div>
          <div className="nav-cta">
            <Link href="/#contact" className="btn btn-ghost">
              Prendre RDV
            </Link>
            <Link href="/#contact" className="btn btn-primary">
              Démarrer un projet
            </Link>
          </div>
        </div>
      </nav>

      <section className="cs-hero">
        <div className="cs-bg-grid" />
        <div className="wrap cs-inner">
          <div className="cs-eyebrow pill">
            <span className="dot" /> {eyebrow}
          </div>
          <h1 className="cs-title">
            {serviceName}
            <br />
            <span className="cs-accent">Page détaillée bientôt disponible.</span>
          </h1>
          <p className="cs-sub">{shortDescription}</p>
          <div className="cs-cta">
            <Link href="/#contact" className="btn btn-accent btn-lg">
              Parler à un associé
              <svg
                className="arrow"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/#services" className="btn btn-ghost btn-lg">
              Voir tous les services
            </Link>
          </div>
          <div className="cs-meta">
            <span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12l5 5L20 7" />
              </svg>
              Réponse sous 24h ouvrées
            </span>
            <span className="sep" />
            <span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12l5 5L20 7" />
              </svg>
              Devis forfaitaire sous 48h
            </span>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
