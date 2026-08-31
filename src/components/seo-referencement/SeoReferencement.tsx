import Link from "next/link";
import { type ComponentType } from "react";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  Gauge,
  FileSearch,
  GitBranch,
  History,
  Link2,
  MapPin,
  SearchCheck,
  Target,
  X,
} from "lucide-react";
import { CONTACT_ADDRESS } from "@/lib/contact-details";
import { MainNav } from "@/components/design-shared/MainNav";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import { InteractiveDesignRoot } from "@/components/design-shared/InteractiveDesignRoot";
import {
  SEO_ACTION_LOG_SAMPLE,
  SEO_AUDIT_SAMPLE,
  SEO_BUDGET_SHAPES,
  SEO_COMMITMENTS,
  SEO_DELIVERABLES,
  SEO_FAQS,
  SEO_FORMATS,
  SEO_PROCESS,
  SEO_RELATED_RESOURCES,
  SEO_SCOPE_EXCLUDED,
  SEO_SCOPE_INCLUDED,
  SEO_STARTING_POINTS,
  SEO_TECH_FAQS,
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
const COMMITMENT_ICONS = [
  ClipboardCheck,
  Target,
  GitBranch,
  Compass,
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
  return (
    <InteractiveDesignRoot className="hc-design seo-public-page">
      <MainNav />

      <main id="main-content" tabIndex={-1}>
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
                <Link className="seo-button seo-button--secondary" href="/tarifs">
                  Voir nos tarifs
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
                <span className="seo-eyebrow">— PREUVES PUBLIQUES</span>
                <h2 id="seo-proof-title">Vous pouvez vérifier notre travail avant de nous parler.</h2>
              </div>
              <p>
                Hagnéré Code n’invente ni historique client ni capture de
                dashboard. Les liens ci-dessous prouvent uniquement la
                disponibilité des pages et les fonctions qui y sont présentées,
                pas leur exploitation interne, leur sécurité ou leurs résultats.
              </p>
            </div>
            <div className="seo-proof-grid">
              <Link href="/realisations" className="seo-proof-card">
                <span className="seo-proof-card__value">4</span>
                <span className="seo-proof-card__label">pages produit publiques à consulter</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/guides" className="seo-proof-card">
                <span className="seo-proof-card__value">{guideCount}</span>
                <span className="seo-proof-card__label">
                  {guideCount === 1
                    ? "guide public, sourcé et maillé"
                    : "guides publics, sourcés et maillés"}
                </span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/agence" className="seo-proof-card">
                <span className="seo-proof-card__value seo-proof-card__value--place">Bassens</span>
                <span className="seo-proof-card__label">studio physique aux portes de Chambéry</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/methode" className="seo-proof-card">
                <span className="seo-proof-card__value">ÉCRIT</span>
                <span className="seo-proof-card__label">droits et accès au devis ; transfert après paiement complet selon les CGV, hors composants préexistants et licences tierces</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="seo-section seo-section--soft" aria-labelledby="seo-start-title">
          <div className="seo-shell">
            <div className="seo-section-heading">
              <div>
                <span className="seo-eyebrow">— VOTRE POINT DE DÉPART</span>
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
                <span className="seo-eyebrow">— CE QUE NOUS TRAVAILLONS</span>
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
                <span className="seo-eyebrow">— MÉTHODE</span>
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

        {/*
          À QUOI RESSEMBLE LE LIVRABLE — ajoutée le 31/08/2026 dans l'écran
          libéré par la fusion des deux sections de refus. Sur quatorze
          sections, six mettaient en garde et aucune ne montrait ce que la
          mission produit. Les deux panneaux reprennent la forme exacte de nos
          deux livrables permanents (ligne de constat, journal daté) sur un cas
          FICTIF — voir la réserve sous la grille, et le garde-fou de test qui
          interdit d'y écrire un résultat.
        */}
        <section className="seo-section seo-section--soft" aria-labelledby="seo-sample-title">
          <div className="seo-shell">
            <div className="seo-section-heading">
              <div>
                <span className="seo-eyebrow">— À QUOI RESSEMBLE LE LIVRABLE</span>
                <h2 id="seo-sample-title">Un constat, sa preuve, sa priorité — puis la date où il a été traité.</h2>
              </div>
              <p>
                Deux documents accompagnent chaque mission&nbsp;: la liste des
                constats, reliée à des URL et à ce qui les prouve, et le journal
                des actions daté, qui permet de relier une variation observée à
                une cause plausible. Voici leur forme exacte.
              </p>
            </div>
            <div className="seo-sample-grid">
              <article className="seo-sample-panel">
                <header className="seo-sample-panel__head">
                  <span className="seo-sample-panel__label">
                    <FileSearch size={15} aria-hidden="true" /> EXTRAIT D&apos;AUDIT
                  </span>
                  <span className="seo-sample-panel__meta">Constats 07 à 09</span>
                </header>
                <ul className="seo-sample-findings">
                  {SEO_AUDIT_SAMPLE.map((item) => (
                    <li key={item.url + item.finding}>
                      <div className="seo-sample-findings__top">
                        <code>{item.url}</code>
                        <span className={`seo-sample-prio seo-sample-prio--${item.priority.toLowerCase()}`}>
                          {item.priority}
                        </span>
                      </div>
                      <strong>{item.finding}</strong>
                      <dl className="seo-sample-findings__meta">
                        <div>
                          <dt>Preuve</dt>
                          <dd>{item.evidence}</dd>
                        </div>
                        <div>
                          <dt>Effort</dt>
                          <dd>{item.effort}</dd>
                        </div>
                      </dl>
                    </li>
                  ))}
                </ul>
              </article>
              <article className="seo-sample-panel">
                <header className="seo-sample-panel__head">
                  <span className="seo-sample-panel__label">
                    <History size={15} aria-hidden="true" /> JOURNAL DES ACTIONS
                  </span>
                  <span className="seo-sample-panel__meta">Quatre entrées</span>
                </header>
                <ol className="seo-sample-log">
                  {SEO_ACTION_LOG_SAMPLE.map((entry) => (
                    <li key={entry.date + entry.action}>
                      <span className="seo-sample-log__date">{entry.date}</span>
                      <div>
                        <strong>{entry.action}</strong>
                        <span>{entry.intent}</span>
                      </div>
                    </li>
                  ))}
                </ol>
              </article>
            </div>
            <p className="seo-sample-caption">
              <AlertTriangle size={15} aria-hidden="true" />
              <span>
                <b>GABARIT ILLUSTRATIF</b>{" — "}
                les URL, les dates et les constats
                ci-dessus sont fictifs et ne proviennent d&apos;aucune mission.
                Aucun chiffre de trafic, de position ni de résultat n&apos;y
                figure&nbsp;: nous ne publions que ce qui peut être relié à un
                artefact vérifiable.
              </span>
            </p>
          </div>
        </section>

        <section className="seo-section" aria-labelledby="seo-formats-title">
          <div className="seo-shell">
            <div className="seo-section-heading">
              <div>
                <span className="seo-eyebrow">— FORMATS D’INTERVENTION</span>
                <h2 id="seo-formats-title">Le bon niveau d’engagement pour le problème réel.</h2>
              </div>
              <p>
                Pas de forfait imposé ni de volume automatique. Le périmètre, le
                calendrier et le prix sont établis après le cadrage, puis écrits
                au devis. Aucun dépassement ni travail hors périmètre
                n&apos;est engagé sans accord écrit préalable.
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

        <section className="seo-section seo-section--soft" id="tarifs" aria-labelledby="seo-budget-title">
          <div className="seo-shell">
            <div className="seo-section-heading">
              <div>
                <span className="seo-eyebrow">— BUDGET &amp; ENGAGEMENT</span>
                <h2 id="seo-budget-title">Trois formes d&apos;engagement, un prix fixé au devis.</h2>
              </div>
              <p>
                Quatre variables font le prix&nbsp;: le nombre d&apos;URL à traiter, le
                nombre de gabarits distincts, les accès réellement disponibles à la
                donnée et la profondeur demandée. Tant qu&apos;elles ne sont pas
                mesurées, aucun montant n&apos;est publié — le cadrage les établit,
                puis un devis nominatif fixe le prix, le périmètre et le calendrier.
                Les trois formes ci-dessous disent laquelle de ces variables pèse le
                plus dans votre cas.
              </p>
            </div>
            <div className="seo-budget-grid">
              {SEO_BUDGET_SHAPES.map((shape, index) => (
                <article className="seo-budget-card" key={shape.title}>
                  <span className="seo-budget-card__number">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{shape.title}</h3>
                  <p>{shape.description}</p>
                </article>
              ))}
            </div>
            <p className="seo-budget-note">
              Tous les prix du site sont indiqués hors taxes, TVA en sus. L&apos;audit
              SEO est la porte d&apos;entrée payante propre à ce service&nbsp;: il ne se
              cumule pas avec le Discovery Sprint d&apos;un projet de développement, et
              une éventuelle déduction sur la suite n&apos;existe que si elle est écrite
              au devis.
            </p>
            <div className="seo-budget-actions">
              <Link className="seo-button seo-button--primary" href="/demarrer-un-projet">
                Faire chiffrer mon cas <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link className="seo-button seo-button--secondary" href="/tarifs">
                Voir la grille tarifaire
              </Link>
            </div>
          </div>
        </section>

        {/*
          PÉRIMÈTRE — fusion des deux sections de refus (31/08/2026).
          La page enchaînait « Ce que couvre une mission… » (5 croix) puis
          « La confiance commence par les limites » (6 croix) : onze refus en
          deux écrans, dont deux dits deux fois. Une seule section porte
          désormais les deux colonnes ; le lien vers /methode, qui vivait dans
          la section supprimée, est repris sous la colonne de droite.
        */}
        <section className="seo-section" aria-labelledby="seo-scope-title">
          <div className="seo-shell">
            <div className="seo-section-heading">
              <div>
                <span className="seo-eyebrow">— PÉRIMÈTRE</span>
                <h2 id="seo-scope-title">Ce que couvre une mission, et ce qu&apos;elle ne couvre pas.</h2>
              </div>
              <p>
                Les deux colonnes comptent autant l&apos;une que l&apos;autre&nbsp;:
                dire ce que nous ne ferons pas protège votre budget autant que
                notre travail. Cette liste reste une base de discussion, pas un
                socle appliqué à toutes les missions — le devis nominatif est la
                seule référence opposable.
              </p>
            </div>
            <div className="seo-scope-grid">
              <div className="seo-scope-col">
                <div className="seo-scope-badge seo-scope-badge--in">
                  <Check size={14} aria-hidden="true" /> DANS LE PÉRIMÈTRE, À CADRER AU DEVIS
                </div>
                <ul>
                  {SEO_SCOPE_INCLUDED.map((item) => (
                    <li key={item.title}>
                      <Check size={15} aria-hidden="true" />
                      <div>
                        <strong>{item.title}</strong>
                        <span>{item.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="seo-scope-col seo-scope-col--out">
                <div className="seo-scope-badge seo-scope-badge--out">
                  <X size={14} aria-hidden="true" /> HORS PÉRIMÈTRE
                </div>
                <ul>
                  {SEO_SCOPE_EXCLUDED.map((item) => (
                    <li key={item.title}>
                      <X size={15} aria-hidden="true" />
                      <div>
                        <strong>{item.title}</strong>
                        <span>{item.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link className="seo-inline-link seo-scope-col__link" href="/methode">
                  Notre méthode de vérification <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="seo-section seo-section--soft" aria-labelledby="seo-commitments-title">
          <div className="seo-shell">
            <div className="seo-section-heading">
              <div>
                <span className="seo-eyebrow">— ENGAGEMENTS &amp; POINTS À CONTRACTUALISER</span>
                <h2 id="seo-commitments-title">Ce qui est signé avant de commencer.</h2>
              </div>
              <p>
                Nous nous engageons sur ce qui dépend de nous&nbsp;: le périmètre,
                les livrables, la méthode et la traçabilité. Jamais sur ce qui
                dépend de Google.
              </p>
            </div>
            <div className="seo-start-grid">
              {SEO_COMMITMENTS.map((item, index) => {
                const Icon = COMMITMENT_ICONS[index];
                return <IconCard key={item.title} icon={Icon} {...item} />;
              })}
            </div>
          </div>
        </section>

        <section className="seo-section seo-resources" aria-labelledby="seo-resources-title">
          <div className="seo-shell">
            <div className="seo-section-heading seo-section-heading--dark">
              <div>
                <span className="seo-eyebrow">— RESSOURCES</span>
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
              <span className="seo-eyebrow">— QUESTIONS FRÉQUENTES</span>
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

        <section className="seo-section" aria-labelledby="seo-tech-faq-title">
          <div className="seo-shell seo-faq-layout">
            <div className="seo-faq-intro">
              <span className="seo-eyebrow">— QUESTIONS TECHNIQUES</span>
              <h2 id="seo-tech-faq-title">Pour la personne qui relira notre travail.</h2>
              <p>
                Ces réponses s&apos;adressent au CTO, au lead développeur ou au
                prestataire en place. Elles décrivent nos méthodes de
                vérification, pas des résultats attendus.
              </p>
            </div>
            <div className="seo-faq-list">
              {SEO_TECH_FAQS.map((faq) => (
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
            <span className="seo-eyebrow">— PROCHAINE ÉTAPE</span>
            <h2>Partir de votre site, de vos données et d’un problème précis.</h2>
            <p>
              En trois minutes, décrivez ce qui bloque. Notre objectif est de
              répondre le prochain jour ouvré, sans délai garanti — y compris si
              la bonne décision est de ne pas lancer une mission SEO maintenant.
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
              {`${CONTACT_ADDRESS.street}, ${CONTACT_ADDRESS.postalCode} ${CONTACT_ADDRESS.locality}`} · Savoie
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </InteractiveDesignRoot>
  );
}
