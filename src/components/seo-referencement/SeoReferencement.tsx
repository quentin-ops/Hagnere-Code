"use client";

import Link from "next/link";
import { useRef, type ComponentType } from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  Gauge,
  GitBranch,
  Link2,
  MapPin,
  SearchCheck,
  Target,
  X,
} from "lucide-react";
import { MainNav } from "@/components/design-shared/MainNav";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import { useDesignInteractive } from "@/components/design-shared/useDesignInteractive";
import {
  SEO_DELIVERABLES,
  SEO_FAQS,
  SEO_FORMATS,
  SEO_PROCESS,
  SEO_REFUSALS,
  SEO_RELATED_RESOURCES,
  SEO_STARTING_POINTS,
} from "./content";
import "./page.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/site-footer.css";

type SeoReferencementProps = {
  guideCount: number;
};

const STARTING_ICONS = [SearchCheck, Target, GitBranch, MapPin] as const;
const DELIVERABLE_ICONS = [
  BarChart3,
  Gauge,
  Compass,
  BookOpenCheck,
  Link2,
  ClipboardCheck,
] as const;

function IconCard({
  icon: Icon,
  title,
  description,
}: {
  icon: ComponentType<{ size?: number; strokeWidth?: number }>;
  title: string;
  description: string;
}) {
  return (
    <article className="seo-icon-card">
      <span className="seo-icon-card__icon" aria-hidden="true">
        <Icon size={22} strokeWidth={1.8} />
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export function SeoReferencement({ guideCount }: SeoReferencementProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  useDesignInteractive(rootRef);

  return (
    <div ref={rootRef} className="hc-design seo-public-page">
      <MainNav />

      <main id="main-content">
        <div className="seo-shell seo-breadcrumb" aria-label="Fil d’Ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">/</span>
          <Link href="/services">Services</Link>
          <span aria-hidden="true">/</span>
          <span>Référencement naturel</span>
        </div>

        <section className="seo-hero">
          <div className="seo-hero__grid" aria-hidden="true" />
          <div className="seo-shell seo-hero__inner">
            <div className="seo-hero__copy">
              <div className="seo-kicker">
                <span className="seo-kicker__dot" aria-hidden="true" />
                SEO pour PME et équipes produit
              </div>
              <h1>
                Construire une visibilité organique
                <span> utile, mesurable et durable.</span>
              </h1>
              <p className="seo-hero__lead">
                Audit technique, architecture, contenus, maillage, Search
                Console et autorité : nous travaillons sur les causes de votre
                visibilité, sans promettre une position que personne ne
                contrôle.
              </p>
              <div className="seo-hero__actions">
                <Link className="seo-button seo-button--primary" href="/demarrer-un-projet">
                  Décrire mon besoin
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link className="seo-button seo-button--secondary" href="/guides/prix-referencement-naturel">
                  Comprendre les budgets SEO
                </Link>
              </div>
              <ul className="seo-hero__facts" aria-label="Repères de la prestation">
                <li><Check size={14} aria-hidden="true" /> Périmètre et livrables écrits</li>
                <li><Check size={14} aria-hidden="true" /> Aucune position garantie</li>
                <li><Check size={14} aria-hidden="true" /> Bassens · intervention France</li>
              </ul>
            </div>

            <div className="seo-diagnostic" aria-label="Exemple de lecture d’un diagnostic SEO">
              <div className="seo-diagnostic__top">
                <div>
                  <span className="seo-diagnostic__eyebrow">POINT DE DÉPART</span>
                  <p>Un diagnostic qui sépare les problèmes</p>
                </div>
                <span className="seo-diagnostic__status">OBSERVABLE</span>
              </div>
              <div className="seo-diagnostic__flow">
                {[
                  ["01", "Exploration", "Google peut-il atteindre la page ?"],
                  ["02", "Indexation", "La page est-elle retenue dans l’index ?"],
                  ["03", "Pertinence", "Répond-elle à une intention distincte ?"],
                  ["04", "Autorité", "Pourquoi serait-elle préférée aux autres ?"],
                  ["05", "Conversion", "La visite peut-elle devenir une demande ?"],
                ].map(([number, title, text]) => (
                  <div className="seo-diagnostic__row" key={number}>
                    <span className="seo-diagnostic__number">{number}</span>
                    <div>
                      <strong>{title}</strong>
                      <span>{text}</span>
                    </div>
                    <CheckCircle2 size={18} aria-hidden="true" />
                  </div>
                ))}
              </div>
              <div className="seo-diagnostic__footer">
                La stratégie commence par la preuve disponible — pas par un quota d’articles.
              </div>
            </div>
          </div>
        </section>

        <section className="seo-proof-band" aria-labelledby="seo-proof-title">
          <div className="seo-shell">
            <div className="seo-section-heading seo-section-heading--compact">
              <div>
                <span className="seo-eyebrow">PREUVES PUBLIQUES</span>
                <h2 id="seo-proof-title">Vous pouvez vérifier notre travail avant de nous parler.</h2>
              </div>
              <p>
                Hagnéré Code n’invente ni historique client ni capture de
                dashboard. Nos preuves actuelles sont les quatre produits du
                groupe que nous exploitons et le travail éditorial visible sur
                ce site.
              </p>
            </div>
            <div className="seo-proof-grid">
              <Link href="/realisations" className="seo-proof-card">
                <span className="seo-proof-card__value">4</span>
                <span className="seo-proof-card__label">produits du groupe en production</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/guides" className="seo-proof-card">
                <span className="seo-proof-card__value">{guideCount}</span>
                <span className="seo-proof-card__label">guides publics, sourcés et maillés</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/agence" className="seo-proof-card">
                <span className="seo-proof-card__value seo-proof-card__value--place">Bassens</span>
                <span className="seo-proof-card__label">studio physique aux portes de Chambéry</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/methode" className="seo-proof-card">
                <span className="seo-proof-card__value">100 %</span>
                <span className="seo-proof-card__label">livrables conservés par votre équipe</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="seo-section seo-section--soft" aria-labelledby="seo-start-title">
          <div className="seo-shell">
            <div className="seo-section-heading">
              <div>
                <span className="seo-eyebrow">VOTRE POINT DE DÉPART</span>
                <h2 id="seo-start-title">Quatre problèmes qui se ressemblent, mais ne se corrigent pas pareil.</h2>
              </div>
              <p>
                Avant de proposer du contenu, il faut identifier l’étape exacte
                qui bloque. Publier davantage peut être utile, neutre ou
                contre-productif selon le diagnostic.
              </p>
            </div>
            <div className="seo-start-grid">
              {SEO_STARTING_POINTS.map((item, index) => {
                const Icon = STARTING_ICONS[index];
                return <IconCard key={item.title} icon={Icon} {...item} />;
              })}
            </div>
          </div>
        </section>

        <section className="seo-section seo-section--dark" aria-labelledby="seo-deliverables-title">
          <div className="seo-shell">
            <div className="seo-section-heading seo-section-heading--dark">
              <div>
                <span className="seo-eyebrow">CE QUE NOUS TRAVAILLONS</span>
                <h2 id="seo-deliverables-title">Six couches, une seule stratégie.</h2>
              </div>
              <p>
                La technique ouvre la porte. Le contenu répond à l’intention.
                L’autorité aide Google à choisir. La conversion transforme
                enfin la visibilité en résultat utile.
              </p>
            </div>
            <div className="seo-deliverables-grid">
              {SEO_DELIVERABLES.map((item, index) => {
                const Icon = DELIVERABLE_ICONS[index];
                return <IconCard key={item.title} icon={Icon} {...item} />;
              })}
            </div>
          </div>
        </section>

        <section className="seo-section" aria-labelledby="seo-process-title">
          <div className="seo-shell">
            <div className="seo-section-heading">
              <div>
                <span className="seo-eyebrow">MÉTHODE</span>
                <h2 id="seo-process-title">De la donnée disponible à la prochaine décision.</h2>
              </div>
              <p>
                Chaque étape produit un livrable contrôlable. Si une donnée
                manque, elle est signalée ; si une hypothèse tombe, le plan est
                réalloué.
              </p>
            </div>
            <ol className="seo-process-list">
              {SEO_PROCESS.map((item, index) => (
                <li key={item.title}>
                  <span className="seo-process-list__number">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="seo-section seo-section--soft" aria-labelledby="seo-formats-title">
          <div className="seo-shell">
            <div className="seo-section-heading">
              <div>
                <span className="seo-eyebrow">FORMATS D’INTERVENTION</span>
                <h2 id="seo-formats-title">Le bon niveau d’engagement pour le problème réel.</h2>
              </div>
              <p>
                Pas de catalogue artificiel ni de volume automatique. Le
                périmètre, le calendrier et le prix sont établis après le
                cadrage, puis écrits au devis.
              </p>
            </div>
            <div className="seo-format-grid">
              {SEO_FORMATS.map((format, index) => (
                <article className={`seo-format-card${index === 1 ? " seo-format-card--featured" : ""}`} key={format.title}>
                  <div className="seo-format-card__top">
                    <span>{format.label}</span>
                    {index === 1 ? <span className="seo-format-card__badge">PÉRIMÈTRE BORNÉ</span> : null}
                  </div>
                  <h3>{format.title}</h3>
                  <p>{format.description}</p>
                  <div className="seo-format-card__fit">
                    <Target size={16} aria-hidden="true" />
                    {format.forWhom}
                  </div>
                  <ul>
                    {format.outputs.map((output) => (
                      <li key={output}><Check size={15} aria-hidden="true" /> {output}</li>
                    ))}
                  </ul>
                  <Link href="/demarrer-un-projet">
                    Cadrer ce format <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="seo-section" aria-labelledby="seo-refusals-title">
          <div className="seo-shell seo-refusals-layout">
            <div className="seo-refusals-intro">
              <span className="seo-eyebrow">CE QUE NOUS NE VENDONS PAS</span>
              <h2 id="seo-refusals-title">La confiance commence par les limites.</h2>
              <p>
                Une page SEO crédible doit dire ce qu’elle ne peut pas garantir.
                Ces refus protègent votre budget autant que notre travail.
              </p>
              <Link className="seo-inline-link" href="/guides/choisir-son-agence-web">
                La grille pour choisir une agence <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
            <div className="seo-refusals-list">
              {SEO_REFUSALS.map((item) => (
                <article key={item.title}>
                  <span aria-hidden="true"><X size={15} /></span>
                  <div><h3>{item.title}</h3><p>{item.description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="seo-section seo-resources" aria-labelledby="seo-resources-title">
          <div className="seo-shell">
            <div className="seo-section-heading seo-section-heading--dark">
              <div>
                <span className="seo-eyebrow">RESSOURCES</span>
                <h2 id="seo-resources-title">Comprendre avant de demander un devis.</h2>
              </div>
              <p>
                Nos guides sont accessibles sans formulaire. Ils détaillent les
                coûts, les arbitrages et les risques que la page service ne peut
                pas traiter en profondeur.
              </p>
            </div>
            <div className="seo-resource-grid">
              {SEO_RELATED_RESOURCES.map((resource) => (
                <Link href={resource.href} key={resource.href}>
                  <span>{resource.label}</span>
                  <h3>{resource.title}</h3>
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="seo-section seo-section--soft" aria-labelledby="seo-faq-title">
          <div className="seo-shell seo-faq-layout">
            <div className="seo-faq-intro">
              <span className="seo-eyebrow">QUESTIONS FRÉQUENTES</span>
              <h2 id="seo-faq-title">Des réponses sans promesse magique.</h2>
              <p>
                Vous avez un cas particulier ? Décrivez le site, le problème et
                les données disponibles. Nous vous dirons si nous pouvons aider.
              </p>
            </div>
            <div className="seo-faq-list">
              {SEO_FAQS.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="seo-final-cta">
          <div className="seo-final-cta__grid" aria-hidden="true" />
          <div className="seo-shell seo-final-cta__inner">
            <span className="seo-eyebrow">PROCHAINE ÉTAPE</span>
            <h2>Partir de votre site, de vos données et d’un problème précis.</h2>
            <p>
              En trois minutes, décrivez ce qui bloque. Vous recevez une réponse
              personnelle sous 24 h ouvrées — y compris si la bonne décision est
              de ne pas lancer une mission SEO maintenant.
            </p>
            <div className="seo-final-cta__actions">
              <Link className="seo-button seo-button--light" href="/demarrer-un-projet">
                Décrire mon besoin <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link className="seo-button seo-button--dark-ghost" href="/rendez-vous">
                Réserver 30 minutes
              </Link>
            </div>
            <div className="seo-final-cta__location">
              <MapPin size={15} aria-hidden="true" />
              82 impasse de Bellevue, 73000 Bassens · Savoie
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
