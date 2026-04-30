"use client";

import Link from "next/link";
import { useRef, type ComponentType } from "react";
import {
  ArrowRight,
  Calculator,
  Check,
  Clock3,
  FileSearch,
  Gauge,
  LayoutDashboard,
  MessageSquare,
  MousePointer2,
  ReceiptText,
  ShieldCheck,
  Timer,
  Wrench,
} from "lucide-react";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import { useDesignInteractive } from "@/components/design-shared/useDesignInteractive";
import { MainNav } from "@/components/design-shared/MainNav";
import "./outils-hub.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/site-footer.css";

type HubTool = {
  href: string;
  label: string;
  title: string;
  description: string;
  outcome: string;
  duration: string;
  cta: string;
  accent: "purple" | "green";
  icon: ComponentType<{ size?: number; strokeWidth?: number }>;
};

type UpcomingTool = {
  title: string;
  description: string;
  tag: string;
  icon: ComponentType<{ size?: number; strokeWidth?: number }>;
};

const tools: HubTool[] = [
  {
    href: "/demarrer-un-projet",
    label: "Budget projet",
    title: "Estimer un site, SaaS ou outil métier.",
    description:
      "Décrivez le contexte, les écrans, les intégrations et l'urgence. Le calculateur renvoie une fourchette, un phasing et les risques à clarifier.",
    outcome: "Fourchette budget + prochaines questions",
    duration: "4-6 min",
    cta: "Estimer mon projet",
    accent: "purple",
    icon: Calculator,
  },
  {
    href: "/outils/calculateur-cout-excel",
    label: "Coût Excel",
    title: "Mesurer le coût caché d'un fichier métier.",
    description:
      "Temps perdu, ressaisies, erreurs, validation, reporting manuel : transformez un ressenti opérationnel en coût annuel exploitable.",
    outcome: "Coût annuel + seuil ROI outil interne",
    duration: "2 min",
    cta: "Calculer le coût",
    accent: "green",
    icon: ReceiptText,
  },
];

const nextTools: UpcomingTool[] = [
  {
    title: "Audit dette technique",
    description:
      "Score lisible pour prioriser performance, dépendances, sécurité, dette front et dette back.",
    tag: "Run",
    icon: FileSearch,
  },
  {
    title: "Simulateur TMA",
    description:
      "Comparer un forfait mensuel de maintenance avec le coût réel des incidents et micro-évolutions.",
    tag: "Maintenance",
    icon: Wrench,
  },
  {
    title: "Score conversion landing",
    description:
      "Identifier les points faibles d'une landing avant d'acheter plus de trafic.",
    tag: "Acquisition",
    icon: MousePointer2,
  },
  {
    title: "Score RGPD & DPA",
    description:
      "Repérer les risques qui bloquent les DPO, RSSI ou grands comptes avant signature.",
    tag: "Confiance",
    icon: ShieldCheck,
  },
];

const workflow = [
  {
    title: "Vous simulez",
    text: "L'outil transforme votre contexte en ordre de grandeur lisible, sans vous enfermer dans un devis automatique.",
    icon: Gauge,
  },
  {
    title: "On interprète",
    text: "Si le sujet mérite discussion, un associé relit le contexte et sépare le prioritaire du confortable.",
    icon: MessageSquare,
  },
  {
    title: "On cadre",
    text: "Périmètre, hypothèses, dépendances, budget et délai sont écrits avant de lancer un sprint.",
    icon: LayoutDashboard,
  },
  {
    title: "Vous décidez",
    text: "Vous repartez avec un chemin clair : faire, attendre, réduire le périmètre ou passer par un autre prestataire.",
    icon: Check,
  },
];

function ArrowIcon() {
  return <ArrowRight size={14} strokeWidth={2.2} aria-hidden="true" />;
}

export function OutilsHubPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useDesignInteractive(rootRef);

  return (
    <div ref={rootRef} className="hc-design tools-hub">
      <MainNav />

      <main id="main-content">
        <section className="tools-hero">
          <div className="tools-hero-grid" aria-hidden="true" />
          <div className="wrap tools-hero-inner">
            <div className="tools-hero-copy">
              <div className="tools-kicker">
                <span /> Calculateurs gratuits
              </div>
              <h1>Chiffrer avant de coder.</h1>
              <p>
                Budget d&apos;un projet web, coût caché d&apos;un Excel, ROI d&apos;un outil interne :
                nos outils donnent un ordre de grandeur utile avant le premier appel.
              </p>
              <div className="tools-hero-actions">
                <Link href="/demarrer-un-projet" className="btn btn-accent btn-lg">
                  Estimer mon projet <ArrowIcon />
                </Link>
                <Link href="/outils/calculateur-cout-excel" className="btn btn-ghost btn-lg">
                  Calculer mon coût Excel
                </Link>
              </div>
              <div className="tools-hero-proof">
                <span><Check size={14} /> Gratuit</span>
                <span><Check size={14} /> Sans inscription</span>
                <span><Check size={14} /> Orienté décision</span>
              </div>
            </div>

            <div className="tools-console" aria-label="Aperçu des outils Hagnéré Code">
              <div className="console-top">
                <span className="console-dot" />
                <span>Diagnostic projet</span>
                <b>2 outils actifs</b>
              </div>
              <div className="console-score">
                <div>
                  <span>Fourchette observée</span>
                  <strong>18-60 k€</strong>
                </div>
                <div>
                  <span>Temps de réponse</span>
                  <strong>2-6 min</strong>
                </div>
              </div>
              <div className="console-list">
                <div className="console-row">
                  <span className="row-tag row-purple">Projet</span>
                  <div>
                    <b>Budget, périmètre, risques</b>
                    <small>Sortie : phasing + questions à clarifier</small>
                  </div>
                </div>
                <div className="console-row">
                  <span className="row-tag row-green">Excel</span>
                  <div>
                    <b>Temps perdu, erreurs, ROI</b>
                    <small>Sortie : coût annuel + seuil de rentabilité</small>
                  </div>
                </div>
              </div>
              <div className="console-footer">
                <Timer size={14} /> Premier cadrage possible sous 24 h ouvrées
              </div>
            </div>
          </div>
        </section>

        <section className="tools-picker" id="outils">
          <div className="wrap">
            <div className="tools-section-head">
              <div>
                <div className="eyebrow">Outils disponibles</div>
                <h2>Choisissez la question à objectiver.</h2>
              </div>
              <p>
                Un bon calculateur ne remplace pas un cadrage. Il rend simplement la conversation plus précise, plus rapide et plus honnête.
              </p>
            </div>

            <div className="tool-grid">
              {tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <article className={`tool-card tool-card-${tool.accent}`} key={tool.href}>
                    <Link href={tool.href} className="tool-card-link">
                      <div className="tool-card-top">
                        <div className="tool-icon"><Icon size={20} /></div>
                        <span>{tool.label}</span>
                      </div>
                      <h3>{tool.title}</h3>
                      <p>{tool.description}</p>
                      <div className="tool-result">
                        <b>{tool.outcome}</b>
                        <span><Clock3 size={13} /> {tool.duration}</span>
                      </div>
                      <div className="tool-cta">
                        {tool.cta} <ArrowIcon />
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="tools-after">
          <div className="wrap after-grid">
            <div className="after-copy">
              <div className="eyebrow">Après le résultat</div>
              <h2>On évite le devis automatique, on accélère la décision.</h2>
              <p>
                Les calculateurs donnent un point de départ. Ensuite, on met les bonnes hypothèses sur la table :
                ce qui coûte vraiment, ce qui peut attendre et ce qui doit être cadré avant signature.
              </p>
              <Link href="/methode" className="btn btn-ghost btn-lg">
                Voir notre méthode
              </Link>
            </div>
            <div className="workflow-grid">
              {workflow.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div className="workflow-card" key={step.title}>
                    <div className="workflow-top">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <Icon size={18} />
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="tools-upcoming">
          <div className="wrap">
            <div className="tools-section-head">
              <div>
                <div className="eyebrow">À venir</div>
                <h2>Les prochains outils suivront les vraies questions client.</h2>
              </div>
              <p>
                On ajoute uniquement les simulateurs qui aident à décider : pas de gadgets, pas de score décoratif.
              </p>
            </div>
            <div className="upcoming-grid">
              {nextTools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <article className="upcoming-card" key={tool.title}>
                    <div className="upcoming-icon"><Icon size={18} /></div>
                    <span>{tool.tag}</span>
                    <h3>{tool.title}</h3>
                    <p>{tool.description}</p>
                    <b>Bientôt</b>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="tools-links">
          <div className="wrap tools-links-inner">
            <div>
              <div className="eyebrow">Maillage utile</div>
              <h2>Besoin de contexte avant de simuler ?</h2>
            </div>
            <div className="link-grid">
              <Link href="/services" className="hub-link">
                <span>Tous les services</span>
                <b>Comprendre les leviers possibles</b>
                <ArrowIcon />
              </Link>
              <Link href="/services/outils-internes-sur-mesure" className="hub-link">
                <span>Outils internes</span>
                <b>Remplacer Excel sans usine à gaz</b>
                <ArrowIcon />
              </Link>
              <Link href="/tarifs" className="hub-link">
                <span>Tarifs</span>
                <b>Voir nos fourchettes de mission</b>
                <ArrowIcon />
              </Link>
              <Link href="/contact" className="hub-link">
                <span>Contact</span>
                <b>Parler à un associé qui code</b>
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
