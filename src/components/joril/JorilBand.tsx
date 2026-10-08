import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  JORIL_CALENDRIER,
  JORIL_DEFINITION,
  JORIL_HOST,
  JORIL_LICENCE,
  JORIL_OFFRE,
  JORIL_RESERVE,
  JORIL_STATUT,
  JORIL_URL,
} from "@/lib/joril";
import "./joril-band.css";

/**
 * Bande « Assistants IA · Joril », posée sur /services et sur /realisations.
 *
 * Les deux pages ont chacune leur feuille de style et leur racine
 * (`.services-hub`, `.rl-modern`), mais définissent les mêmes jetons de
 * couleur sous `:root` et `html.dark` : la bande n'emprunte que ces jetons et
 * sa propre feuille, elle ne dépend d'aucun bouton ni d'aucun titre de page.
 *
 * Le texte vient entièrement de `@/lib/joril` (faits autorisés, rien d'autre).
 * La réserve est dans la bande, pas dans une note éloignée : un lecteur qui lit
 * « en alpha » doit voir au même endroit que la page ne promet aucun résultat.
 */
export function JorilBand({ headingId = "joril-bande-titre" }: { headingId?: string }) {
  return (
    <section className="joril-band" id="assistants-ia" aria-labelledby={headingId}>
      <div className="wrap">
        <div className="joril-band-card">
          <div className="joril-band-main">
            <p className="joril-band-eyebrow">Assistants IA · Joril</p>
            <h2 className="joril-band-title" id={headingId}>
              Un assistant&nbsp;IA sur mesure, dans votre&nbsp;logiciel.
            </h2>
            <p className="joril-band-lead">{JORIL_DEFINITION}</p>
            <dl className="joril-band-facts">
              <div>
                <dt>Où en est Joril</dt>
                <dd>
                  {JORIL_STATUT} {JORIL_CALENDRIER}
                </dd>
              </div>
              <div>
                <dt>Pour votre logiciel</dt>
                <dd>{JORIL_OFFRE}</dd>
              </div>
              <div>
                <dt>Conditions</dt>
                <dd>{JORIL_LICENCE}</dd>
              </div>
            </dl>
          </div>

          <div className="joril-band-side">
            <a
              className="joril-band-cta"
              href={JORIL_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir l&apos;offre sur {JORIL_HOST}
              <ArrowUpRight size={16} strokeWidth={2.2} aria-hidden="true" />
              <span className="joril-band-sr"> (s&apos;ouvre dans un nouvel onglet)</span>
            </a>
            <Link className="joril-band-link" href="/realisations/lmnp-ai">
              Analyse publique de LMNP.AI
              <ArrowRight size={14} strokeWidth={2.2} aria-hidden="true" />
            </Link>
            <p className="joril-band-note">{JORIL_RESERVE}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
