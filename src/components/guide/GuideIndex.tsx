"use client";

import Link from "next/link";
import { useRef, type ComponentType } from "react";
import {
  ArrowRight,
  BookOpen,
  Check,
  Code2,
  Compass,
  FileCheck2,
  Gauge,
  Landmark,
  LockKeyhole,
  Search,
  Wrench,
} from "lucide-react";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import { useDesignInteractive } from "@/components/design-shared/useDesignInteractive";
import { MainNav } from "@/components/design-shared/MainNav";
import "./guide.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/site-footer.css";

type GuideFamily = {
  title: string;
  text: string;
  tag: string;
  icon: ComponentType<{ size?: number; strokeWidth?: number }>;
};

const guideFamilies: GuideFamily[] = [
  {
    title: "Cadrage & périmètre",
    text: "Définir ce qui doit vraiment être livré avant de parler stack, écrans ou budget.",
    tag: "Décision",
    icon: Compass,
  },
  {
    title: "Budget & contrats",
    text: "Comprendre les fourchettes, les clauses utiles, le forfait fixe et les signaux de risque.",
    tag: "Achat",
    icon: Landmark,
  },
  {
    title: "SaaS & applications métier",
    text: "Architecture, rôles, données, intégrations, facturation, IA et passage en production.",
    tag: "Build",
    icon: Code2,
  },
  {
    title: "Outils internes",
    text: "Sortir d'Excel, prioriser les workflows, choisir entre outil léger et vraie plateforme.",
    tag: "Ops",
    icon: Wrench,
  },
  {
    title: "SEO & acquisition",
    text: "Pages qui rapportent, maillage, tracking, contenu utile et arbitrage SEO versus ads.",
    tag: "Grow",
    icon: Search,
  },
  {
    title: "Maintenance & conformité",
    text: "Reprise de code, dette technique, sécurité, RGPD, hébergement, passation et TMA.",
    tag: "Run",
    icon: LockKeyhole,
  },
];

const formats = [
  {
    title: "Guides complets",
    text: "Des contenus longs, structurés et relus avant publication.",
  },
  {
    title: "Checklists",
    text: "Des listes courtes pour préparer un rendez-vous, un audit ou un devis.",
  },
  {
    title: "Comparatifs",
    text: "Des arbitrages francs : outil interne ou SaaS, forfait ou régie, refonte ou reprise.",
  },
  {
    title: "Glossaire",
    text: "Les mots techniques expliqués sans jargon inutile.",
  },
];

function ArrowIcon() {
  return <ArrowRight size={14} strokeWidth={2.2} aria-hidden="true" />;
}


export function GuideIndex() {
  const rootRef = useRef<HTMLDivElement>(null);
  useDesignInteractive(rootRef);

  return (
    <div ref={rootRef} className="hc-design guide-root">
      <MainNav />

      <main id="main-content">
        <section className="guide-hero">
          <div className="guide-hero-grid" aria-hidden="true" />
          <div className="wrap guide-hero-inner">
            <div className="guide-hero-copy">
              <div className="guide-kicker">
                <span /> Guides pratiques
              </div>
              <h1>Nos guides pour mieux cerner vos besoins web.</h1>
              <p>
                On prépare une base de contenus utiles pour comprendre ce qu&apos;implique un projet :
                budget, périmètre, stack, risques, délais et choix de prestataire. L&apos;objectif :
                vous aider à passer d&apos;une idée floue au bon prochain pas.
              </p>
              <div className="guide-hero-actions">
                <Link href="/demarrer-un-projet" className="btn btn-accent btn-lg">
                  Cadrer un projet <ArrowIcon />
                </Link>
                <Link href="/contact" className="btn btn-ghost btn-lg">
                  Parler d&apos;un projet
                </Link>
              </div>
            </div>

            <div className="guide-panel" aria-label="Structure du guide Hagnéré Code">
              <div className="guide-panel-top">
                <span className="guide-dot" />
                <span>Ressources projet</span>
                <b>En construction</b>
              </div>
              <div className="guide-panel-feature">
                <BookOpen size={24} />
                <div>
                  <span>Objectif</span>
                  <strong>Comprendre avant de décider, sans jargon inutile.</strong>
                </div>
              </div>
              <div className="guide-panel-list">
                <div><Check size={14} /> Répondre aux questions concrètes avant achat</div>
                <div><Check size={14} /> Relier chaque sujet à un service ou un outil</div>
                <div><Check size={14} /> Préparer un cadrage plus clair</div>
              </div>
            </div>
          </div>
        </section>

        <section className="guide-families">
          <div className="wrap">
            <div className="guide-section-head">
              <div>
                <div className="eyebrow">Questions clés</div>
                <h2>Les guides seront rangés par besoin.</h2>
              </div>
              <p>
                Chaque famille correspond à une question qu&apos;un prospect peut chercher avant de nous contacter.
                Les contenus viendront ensuite avec la structure exacte que vous fournirez.
              </p>
            </div>

            <div className="guide-family-grid">
              {guideFamilies.map((family) => {
                const Icon = family.icon;
                return (
                  <article className="guide-family-card" key={family.title}>
                    <div className="guide-family-top">
                      <div className="guide-family-icon"><Icon size={18} /></div>
                      <span>{family.tag}</span>
                    </div>
                    <h3>{family.title}</h3>
                    <p>{family.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="guide-formats">
          <div className="wrap guide-formats-inner">
            <div className="guide-formats-copy">
              <div className="eyebrow">Format</div>
              <h2>Une base pensée pour publier des guides qui convertissent.</h2>
              <p>
                On pose la page mère, le vocabulaire et le maillage interne. Les guides viendront
                ensuite avec leurs hooks SEO, leurs preuves et leurs appels à l&apos;action.
              </p>
              <Link href="/services" className="btn btn-ghost btn-lg">
                Voir les services
              </Link>
            </div>
            <div className="format-list">
              {formats.map((format, index) => (
                <div className="format-row" key={format.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{format.title}</h3>
                    <p>{format.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="guide-links">
          <div className="wrap guide-links-inner">
            <div>
              <div className="eyebrow">En attendant</div>
              <h2>Les premiers points d&apos;entrée existent déjà.</h2>
            </div>
            <div className="guide-link-grid">
              <Link href="/services" className="guide-link">
                <FileCheck2 size={18} />
                <span>Tous les services</span>
                <b>Comprendre ce qu&apos;on peut construire.</b>
                <ArrowIcon />
              </Link>
              <Link href="/demarrer-un-projet" className="guide-link">
                <Gauge size={18} />
                <span>Cadrage projet</span>
                <b>Transformer une idée en brief exploitable.</b>
                <ArrowIcon />
              </Link>
              <Link href="/methode" className="guide-link">
                <Compass size={18} />
                <span>Méthode</span>
                <b>Voir comment on cadre et livre au forfait.</b>
                <ArrowIcon />
              </Link>
              <Link href="/contact" className="guide-link">
                <BookOpen size={18} />
                <span>Contact</span>
                <b>Envoyer un sujet ou un cas à traiter.</b>
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
