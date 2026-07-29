import Link from "next/link";
import { type ComponentType } from "react";
import {
  ArrowDown,
  ArrowRight,
  Cable,
  Calculator,
  Check,
  ChevronRight,
  ClipboardList,
  FileText,
  Globe,
  HandCoins,
  Megaphone,
  Scale,
  ShieldCheck,
  Timer,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { MainNav } from "@/components/design-shared/MainNav";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import { InteractiveDesignRoot } from "@/components/design-shared/InteractiveDesignRoot";
import {
  PUBLISHED_GUIDES,
  guidePath,
  formatGuideDate,
  type GuideEntry,
} from "@/lib/guides";
import "@/components/homepage/homepage.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/site-footer.css";
import "./guides-hub.css";

type Accent = "purple" | "blue" | "green" | "amber" | "slate";

type Collection = {
  /** Valeur du champ `section` dans src/lib/guides.ts. */
  section: string;
  anchor: string;
  accent: Accent;
  icon: ComponentType<{ size?: number; strokeWidth?: number }>;
  title: string;
  text: string;
  /** Une ligne pour le panneau « bibliothèque » du héros. */
  laneText: string;
};

/**
 * Collections éditoriales du hub — l'ordre définit l'ordre d'affichage.
 * Les guides sont tirés du registre (src/lib/guides.ts) via leur `section` ;
 * toute section inconnue tombe dans un bloc « Autres guides » en fin de page
 * pour qu'aucun guide ne disparaisse silencieusement du hub.
 */
const COLLECTIONS: Collection[] = [
  {
    section: "Outils internes et automatisation",
    anchor: "outils-automatisation",
    accent: "purple",
    icon: Cable,
    title: "Automatiser sans déplacer le problème.",
    text: "Travail réel, solutions simples, calculs transparents, cas d’échec et reprise manuelle : les repères pour décider avant de brancher un outil.",
    laneText: "Processus, automatisation et outils internes.",
  },
  {
    section: "Budget & prix",
    anchor: "budget-prix",
    accent: "purple",
    icon: Calculator,
    title: "Comprendre le budget complet.",
    text: "Fourchettes observées par type de projet, dépenses souvent oubliées, coût sur trois ans et devis expliqués ligne par ligne.",
    laneText: "Sites, SaaS, applications et logiciels : les budgets à prévoir.",
  },
  {
    section: "Google Ads & acquisition",
    anchor: "google-ads-acquisition",
    accent: "blue",
    icon: Megaphone,
    title: "Investir dans Google Ads avec des chiffres vérifiables.",
    text: "Budget, mesure et diagnostic expliqués à partir des demandes et des ventes réelles, sans confondre clic, formulaire et client.",
    laneText: "Budget, mesure et décisions pour vos campagnes Google Ads.",
  },
  {
    section: "Référencement naturel",
    anchor: "referencement-naturel",
    accent: "green",
    icon: Globe,
    title: "Être trouvé sur Google et savoir quoi mesurer.",
    text: "Prix, audits et priorités expliqués sans promesse de position : ce que le travail doit produire et comment suivre les demandes obtenues.",
    laneText: "Budget SEO, audit et suivi des résultats.",
  },
  {
    section: "Comparatifs & choix",
    anchor: "comparatifs",
    accent: "blue",
    icon: Scale,
    title: "Choisir une solution adaptée à l’entreprise.",
    text: "WordPress, Shopify, outils existants ou développement sur mesure : des comparaisons expliquées selon vos besoins, votre équipe et votre budget.",
    laneText: "Des choix expliqués selon votre situation.",
  },
  {
    section: "Préparer son projet",
    anchor: "preparer",
    accent: "green",
    icon: ClipboardList,
    title: "Préparer le projet avant de demander des devis.",
    text: "Modèles de cahiers des charges, délais expliqués étape par étape et questions à régler avant de choisir un prestataire.",
    laneText: "Cahiers des charges, délais et responsabilités.",
  },
  {
    section: "Maintenance & reprise",
    anchor: "maintenance-reprise",
    accent: "amber",
    icon: Wrench,
    title: "Maintenir un service et changer d’équipe sans le fragiliser.",
    text: "Accès, sauvegardes, responsabilités et reprise expliqués avant de transférer un site ou une application à une nouvelle équipe.",
    laneText: "Maintenance, continuité et changement de prestataire.",
  },
  {
    section: "Financer son projet",
    anchor: "financer",
    accent: "amber",
    icon: HandCoins,
    title: "Vérifier les aides avant de compter dessus.",
    text: "Les dispositifs retrouvés dans les sources officielles, les conditions à vérifier et les démarches à faire avant de les intégrer au budget.",
    laneText: "Aides, conditions et démarches en 2026.",
  },
];

/** Icône propre aux guides déjà reconstruits (défaut : Globe). */
const GUIDE_ICONS: Record<string, LucideIcon> = {
  "automatiser-processus-metier": Cable,
};

/** Étapes du visuel du premier guide, sans chiffre de marché ni promesse. */
const DECISION_PATH = [
  { label: "Cartographier", value: "le travail réel", left: 2, width: 32 },
  { label: "Écarter", value: "les risques bloquants", left: 10, width: 44 },
  { label: "Comparer", value: "sept réponses possibles", left: 18, width: 54 },
  { label: "Calculer", value: "la capacité réaffectée", left: 26, width: 62 },
  { label: "Tester", value: "l’erreur et la reprise", left: 34, width: 64 },
];

const featuredGuide =
  PUBLISHED_GUIDES.find((g) => g.featured) ?? PUBLISHED_GUIDES[0];

function collectionsWithGuides(): Array<Collection & { guides: GuideEntry[] }> {
  const known = COLLECTIONS.map((c) => ({
    ...c,
    guides: PUBLISHED_GUIDES.filter((g) => g.section === c.section),
  })).filter((c) => c.guides.length > 0);

  const leftover = PUBLISHED_GUIDES.filter(
    (g) => !COLLECTIONS.some((c) => c.section === g.section),
  );
  if (leftover.length > 0) {
    known.push({
      section: "Autres guides",
      anchor: "autres-guides",
      accent: "slate",
      icon: FileText,
      title: "Autres guides.",
      text: "Le reste de la bibliothèque, en attendant leur collection dédiée.",
      laneText: "Le reste de la bibliothèque.",
      guides: leftover,
    });
  }
  return known;
}

function ArrowIcon() {
  return <ArrowRight size={14} strokeWidth={2.2} aria-hidden="true" />;
}

export function GuidesHubPage() {
  const collections = collectionsWithGuides();

  return (
    <InteractiveDesignRoot className="hc-design guides-hub">
      <MainNav />

      <main id="main-content" tabIndex={-1}>
        {/* ============ HÉROS ============ */}
        <section className="ghub-hero">
          <div className="ghub-hero-grid" aria-hidden="true" />
          <div className="ghub-hero-glow" aria-hidden="true" />
          <div className="wrap ghub-hero-inner">
            <div className="ghub-hero-copy">
              <nav aria-label="Fil d'Ariane" className="ghub-crumbs">
                <Link href="/">Accueil</Link>
                <ChevronRight size={12} aria-hidden="true" />
                <b>Guides</b>
              </nav>

              <div className="ghub-kicker">
                <span aria-hidden="true" /> Bibliothèque ·{" "}
                {PUBLISHED_GUIDES.length === 1
                  ? "1 guide pratique"
                  : `${PUBLISHED_GUIDES.length} guides pratiques`}
              </div>

              <h1>
                Guides : <span className="grad">prendre une décision</span>{" "}
                avant de développer
              </h1>
              <p className="ghub-hero-sub">
                Nous reconstruisons cette bibliothèque guide par guide. Chaque
                publication doit donner aux dirigeants une méthode claire, des
                sources vérifiables, des calculs reproductibles et les cas où
                il vaut mieux ne rien développer.
              </p>

              <div className="ghub-hero-actions">
                <Link
                  href={guidePath(featuredGuide)}
                  className="btn btn-accent btn-lg"
                >
                  Lire le premier guide <ArrowIcon />
                </Link>
                <a href="#collections" className="btn btn-ghost btn-lg">
                  Parcourir les collections{" "}
                  <ArrowDown size={14} aria-hidden="true" />
                </a>
              </div>

              <div className="ghub-hero-meta">
                <span>
                  <Check size={13} aria-hidden="true" /> Chiffres sourcés
                </span>
                <span>
                  <Check size={13} aria-hidden="true" /> Options comparées
                </span>
                <span>
                  <Check size={13} aria-hidden="true" /> Solutions simples
                  incluses
                </span>
              </div>
            </div>

            {/* Panneau bibliothèque — sommaire des collections */}
            <div className="ghub-library" aria-label="Collections de guides">
              <div className="ghub-library-head">
                <div>
                  <span className="ghub-library-status" aria-hidden="true" />
                  Sommaire
                </div>
                <b>{collections.length} collections</b>
              </div>
              <div className="ghub-lanes">
                {collections.map((c) => (
                  <a
                    key={c.anchor}
                    href={`#${c.anchor}`}
                    className="ghub-lane"
                    data-accent={c.accent}
                  >
                    <span className="ghub-lane-count">
                      {String(c.guides.length).padStart(2, "0")}
                    </span>
                    <b>{c.section}</b>
                    <em>{c.laneText}</em>
                    <ChevronRight size={16} aria-hidden="true" />
                  </a>
                ))}
              </div>
              <div className="ghub-library-foot">
                <span>
                  <Timer size={13} aria-hidden="true" /> Réponse rapide puis
                  détails
                </span>
                <span>
                  <Check size={13} aria-hidden="true" /> Mis à jour{" "}
                  {formatGuideDate(featuredGuide.dateModified)
                    .split(" ")
                    .slice(1)
                    .join(" ")}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ GUIDE ESSENTIEL ============ */}
        <section className="ghub-featured">
          <div className="wrap">
            <Link
              href={guidePath(featuredGuide)}
              className="ghub-featured-card"
            >
              <div className="ghub-featured-copy">
                <div className="ghub-featured-tags">
                  <span className="ghub-chip-essential">Essentiel</span>
                  <span className="ghub-featured-read">
                    Temps de lecture : {featuredGuide.readTimeMin} min
                  </span>
                </div>
                <h2>{featuredGuide.heroTitle}</h2>
                <p>{featuredGuide.cardDescription}</p>
                <div className="ghub-featured-foot">
                  <span className="ghub-featured-cta">
                    Lire le guide <ArrowIcon />
                  </span>
                  <span className="ghub-featured-date">
                    MàJ {formatGuideDate(featuredGuide.dateModified)}
                  </span>
                </div>
              </div>

              <div className="ghub-featured-viz" aria-hidden="true">
                <div className="ghub-ranges">
                  <div className="ghub-ranges-chrome">
                    <span />
                    <span />
                    <span />
                    <div className="ghub-ranges-url">
                      hagnere-code.ai/guides
                    </div>
                  </div>
                  <div className="ghub-ranges-body">
                    <div className="ghub-ranges-title">
                      <b>Méthode de décision</b>
                      <span>PROCESSUS</span>
                    </div>
                    {DECISION_PATH.map((r) => (
                      <div key={r.label} className="ghub-range-row">
                        <span>{r.label}</span>
                        <i>{r.value}</i>
                        <div className="ghub-range-track">
                          <div
                            className="ghub-range-fill"
                            style={{ left: `${r.left}%`, width: `${r.width}%` }}
                          />
                        </div>
                      </div>
                    ))}
                    <div className="ghub-ranges-note">
                      Hypothèses, formules et limites dans le guide · juillet
                      2026
                    </div>
                  </div>
                </div>

                <div className="ghub-float ghub-float-1">
                  <div className="ghub-float-ic">
                    <ShieldCheck size={14} strokeWidth={2.4} />
                  </div>
                  <div>
                    <b>5 portes bloquantes</b>
                    <span>avant le calcul</span>
                  </div>
                </div>
                <div className="ghub-float ghub-float-2">
                  <div className="ghub-float-ic">
                    <Check size={14} strokeWidth={2.6} />
                  </div>
                  <div>
                    <b>Calcul transparent</b>
                    <span>avec vos hypothèses</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* ============ COLLECTIONS ============ */}
        <section className="ghub-collections" id="collections">
          <div className="wrap">
            {collections.map((c, idx) => {
              const ColIcon = c.icon;
              return (
                <div
                  key={c.anchor}
                  className="ghub-collection"
                  id={c.anchor}
                  data-accent={c.accent}
                >
                  <div className="ghub-col-head">
                    <div>
                      <div className="ghub-col-kicker">
                        <span className="ghub-col-ic">
                          <ColIcon size={15} />
                        </span>
                        {String(idx + 1).padStart(2, "0")} · {c.section}
                      </div>
                      <h2>{c.title}</h2>
                      <p>{c.text}</p>
                    </div>
                    <span className="ghub-col-count">
                      {c.guides.length}{" "}
                      {c.guides.length > 1 ? "guides" : "guide"}
                    </span>
                  </div>

                  <div className="ghub-grid">
                    {c.guides.map((g) => {
                      const Icon = GUIDE_ICONS[g.slug] ?? Globe;
                      return (
                        <Link
                          key={g.slug}
                          href={guidePath(g)}
                          className="ghub-card"
                        >
                          <div className="ghub-card-top">
                            <span className="ghub-card-ic">
                              <Icon size={17} />
                            </span>
                            {g.featured ? (
                              <span className="ghub-card-badge">Essentiel</span>
                            ) : (
                              <span className="ghub-card-read">
                                {g.readTimeMin} min
                              </span>
                            )}
                          </div>
                          <h3>{g.cardTitle}</h3>
                          <p>{g.cardDescription}</p>
                          <div className="ghub-card-foot">
                            <span className="ghub-card-date">
                              MàJ {formatGuideDate(g.dateModified)}
                            </span>
                            <span className="ghub-card-cta">
                              Lire <ArrowIcon />
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ============ CTA FINAL ============ */}
        <section className="ghub-final">
          <div className="wrap ghub-final-inner">
            <div>
              <div className="eyebrow">Prochaine étape</div>
              <h2>Vous voulez appliquer ces repères à votre entreprise ?</h2>
              <p>
                Décrivez votre activité, le problème et le résultat attendu. Un
                développeur lit votre demande et vous répond avec une première
                analyse, y compris si une solution plus simple suffit.
              </p>
            </div>
            <div className="ghub-final-actions">
              <Link
                href="/demarrer-un-projet"
                className="btn btn-accent btn-lg"
              >
                Décrire mon projet <ArrowIcon />
              </Link>
              <Link href="/rendez-vous" className="btn btn-ghost btn-lg">
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </InteractiveDesignRoot>
  );
}
