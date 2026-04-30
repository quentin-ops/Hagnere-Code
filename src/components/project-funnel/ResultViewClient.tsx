"use client";

/**
 * Wrapper client autour de ResultView pour la route /demarrer-un-projet/r/{id}.
 * Charge les CSS nécessaires et désactive le bouton "Refaire un brief"
 * quand on est en lecture seule (lien partagé).
 */

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ResultView } from "@/components/estimer-mon-projet/ResultView";
import type { MultiServiceEstimate } from "@/components/estimer-mon-projet/types";
import "@/components/estimer-mon-projet/calculator.css";
import "./project-funnel.css";

export function ResultViewClient({
  result,
  tokensUsed,
  contactEmail,
  readOnly = false,
}: {
  result: MultiServiceEstimate;
  tokensUsed: number;
  contactEmail: string;
  readOnly?: boolean;
}) {
  return (
    <div className="pf-root">
      <header className="pf-topbar">
        <div className="pf-top-left">
          <Link href="/" className="pf-brand" aria-label="Retour à l'accueil Hagnéré Code">
            <span className="pf-brand-mark">HC</span>
            <span><b>Hagnéré</b> Code</span>
          </Link>
          <div className="pf-breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <Link href="/demarrer-un-projet">Démarrer un projet</Link>
            <span>/</span>
            <span>Estimation partagée</span>
          </div>
        </div>
        <nav className="pf-topnav" aria-label="Navigation secondaire">
          <Link href="/" className="pf-site-return">
            <ArrowLeft size={16} strokeWidth={2} />
            <span>Retour au site vitrine</span>
          </Link>
        </nav>
      </header>

      <ResultView
        result={result}
        tokensUsed={tokensUsed}
        contactEmail={contactEmail}
        onRestart={() => {
          if (readOnly) {
            window.location.href = "/demarrer-un-projet";
          } else {
            window.location.reload();
          }
        }}
      />
    </div>
  );
}
