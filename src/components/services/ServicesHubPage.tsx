import Link from "next/link";
import { type ComponentType } from "react";
import {
  ArrowRight,
  BarChart3,
  Check,
  Clock3,
  Compass,
  Euro,
  FileSearch,
  Gauge,
  Layers3,
  LockKeyhole,
  MessageSquare,
  PlaySquare,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import { InteractiveDesignRoot } from "@/components/design-shared/InteractiveDesignRoot";
import { TEAM_TOTAL_COUNT } from "@/lib/team";
import { MainNav } from "@/components/design-shared/MainNav";
import "./services-hub.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/site-footer.css";

/**
 * Taxonomie unique du site : la navigation (`nav-html.ts`) et l'accueil
 * (`homepage/body.ts`) rangent les onze services sous trois familles —
 * « Construire », « Faire grandir », « Protéger & opérer ». Le hub reprend
 * exactement ces trois familles : un visiteur qui bascule du menu au catalogue
 * doit retrouver le même rangement, pas une quatrième classification.
 */
type FamilyId = "build" | "grow" | "operate";

type Family = {
  id: FamilyId;
  /** Libellé repris tel quel de la navigation et de l'accueil. */
  kicker: string;
  title: string;
  text: string;
  lane: string;
  laneText: string;
  accent: "purple" | "blue" | "green";
};

type Service = {
  href: string;
  label: string;
  eyebrow: string;
  family: FamilyId;
  title: string;
  description: string;
  proof: string;
  idealFor: string;
  duration: string;
  budget: string;
  accent: "purple" | "blue" | "green" | "amber" | "red" | "slate";
  icon: ComponentType<{ size?: number; strokeWidth?: number }>;
};

const families: Family[] = [
  {
    id: "build",
    kicker: "Construire",
    title: "Créer le produit ou l'outil dont votre équipe a besoin.",
    text: "Du site vitrine au SaaS métier : on transforme un besoin en interface utilisable, maintenable et connectée à vos outils.",
    lane: "SaaS, outils, sites, e-commerce, mobile",
    laneText: "Créer un actif produit.",
    accent: "purple",
  },
  {
    id: "grow",
    kicker: "Faire grandir",
    title: "Générer plus de demandes qualifiées après la mise en ligne.",
    text: "Un bon produit ne suffit pas toujours : on travaille l'acquisition, le contenu et la mesure de la conversion.",
    lane: "SEO, ads, contenu vidéo",
    laneText: "Générer la demande.",
    accent: "blue",
  },
  {
    id: "operate",
    kicker: "Protéger & opérer",
    title: "Garder le produit fiable, sécurisé et capable d'évoluer.",
    text: "Après la livraison, on reste pour maintenir, auditer, sécuriser et faire évoluer votre socle sans repartir de zéro.",
    lane: "Maintenance, sécurité, audit",
    laneText: "Stabiliser, sécuriser, faire évoluer.",
    accent: "green",
  },
];

type RouteCard = {
  title: string;
  text: string;
  href: string;
  cta: string;
  icon: ComponentType<{ size?: number; strokeWidth?: number }>;
};

const services: Service[] = [
  {
    href: "/services/saas-applications-metier",
    label: "SaaS sur mesure",
    eyebrow: "Produit",
    family: "build",
    title: "Concevoir un SaaS exploitable et réversible.",
    description:
      "MVP SaaS, portail client, app métier, API, auth, facturation, IA et back-office. On part du besoin business et on livre un produit exploitable.",
    proof: "Auth, facturation, back-office et API livrés",
    idealFor: "Création ou refonte produit",
    duration: "Sur devis",
    budget: "À partir de 15 k€ HT",
    accent: "purple",
    icon: Layers3,
  },
  {
    href: "/services/outils-internes-sur-mesure",
    label: "Outils internes",
    eyebrow: "Ops",
    family: "build",
    title: "Sortir d'Excel sans créer une usine à gaz.",
    description:
      "CRM métier, back-office, pipeline Kanban, automatisations, documents, relances, reporting. Le bon outil pour un processus précis.",
    proof: "Workflow automatisé branché à vos outils",
    idealFor: "Excel, Notion, process manuel",
    duration: "Sur devis",
    budget: "À partir de 8 k€ HT",
    accent: "green",
    icon: Wrench,
  },
  {
    href: "/services/sites-vitrines",
    label: "Sites vitrines",
    eyebrow: "Conversion",
    family: "build",
    title: "Un site clair, rapide, crédible et orienté leads.",
    description:
      "Site institutionnel, landing pages, architecture SEO, contenus, tracking, formulaires, pages locales et pages offres.",
    proof: "Pages prêtes pour campagnes et SEO",
    idealFor: "PME, cabinets, offres premium",
    duration: "Sur devis",
    budget: "À partir de 6,9 k€ HT",
    accent: "blue",
    icon: Gauge,
  },
  {
    href: "/services/ecommerce",
    label: "E-commerce",
    eyebrow: "Vente",
    family: "build",
    title: "Boutiques, catalogues et tunnels qui tiennent la marge.",
    description:
      "Catalogue, tunnel, paiement, ERP, stock, facturation, tracking server-side et SEO produit. Shopify Plus outillé ou stack headless, selon votre contrainte.",
    proof: "Tunnel + tracking + catalogue propre",
    idealFor: "Retail, B2B, catalogue complexe",
    duration: "Sur devis",
    budget: "À partir de 15 k€ HT",
    accent: "amber",
    icon: ShoppingCart,
  },
  {
    href: "/services/application-mobile",
    label: "Application mobile",
    eyebrow: "Mobile",
    family: "build",
    title: "Une vraie app iOS + Android, publiée sous vos comptes stores.",
    description:
      "App React Native + Expo, paiement, push, mode hors-ligne et soumission aux stores selon le périmètre. Comptes, accès, livrables et droits sont écrits au devis.",
    proof: "Soumission App Store et Play Store cadrée au devis",
    idealFor: "Fidélité, RDV, e-com, terrain B2B",
    // « Sur devis » figurait dans les deux champs : la carte disait deux fois
    // la même non-information. La durée reprend ce que la page publie déjà
    // — « Planning indicatif confirmé au devis ».
    duration: "Planning confirmé au devis",
    budget: "Sur devis",
    accent: "purple",
    icon: Smartphone,
  },
  {
    href: "/services/referencement-google",
    label: "SEO Google",
    eyebrow: "Acquisition",
    family: "grow",
    title: "Construire une machine d'acquisition durable.",
    description:
      "Audit technique, contenus, cocons, maillage, schema.org, performance, Search Console et pages à intention business.",
    proof: "Constats reliés à des URL et priorisés",
    idealFor: "Trafic qualifié long terme",
    // Même motif. La page publie « Accompagnement mensuel » et
    // « Accompagnement organique » : c'est ce que dure ce service.
    duration: "Accompagnement mensuel",
    budget: "Sur devis",
    accent: "blue",
    icon: BarChart3,
  },
  {
    href: "/services/publicite-en-ligne",
    label: "Publicité en ligne",
    eyebrow: "Acquisition",
    family: "grow",
    title: "Ads pilotées par la marge, pas par les impressions.",
    description:
      "Google, Meta, LinkedIn, TikTok, YouTube, landing pages, tracking server-side, CRM et tableaux de bord orientés CAC.",
    proof: "Tracking server-side avant toute montée en budget",
    idealFor: "Demande active ou retargeting",
    duration: "Mensuel",
    budget: "Dès 1 800 € HT/mois",
    accent: "red",
    icon: Sparkles,
  },
  {
    href: "/services/contenu-video",
    label: "Contenu & vidéo",
    eyebrow: "Marque",
    family: "grow",
    title: "Rendre visible ce que vous savez déjà faire.",
    description:
      "Vidéos, scripts, motion, formats courts, YouTube, pages de preuve, contenus experts et assets réutilisables en ads ou sales.",
    proof: "Pipeline contenu + diffusion",
    idealFor: "Expertise difficile à expliquer",
    duration: "Sprint ou récurrent",
    budget: "À partir de 2 500 € HT/vidéo",
    accent: "slate",
    icon: PlaySquare,
  },
  {
    href: "/services/maintenance-evolution",
    label: "Maintenance & évolution",
    eyebrow: "Run",
    family: "operate",
    title: "Reprendre, stabiliser et faire évoluer sans tout refaire.",
    description:
      "TMA Next.js / Laravel, dette technique, monitoring, dépendances, incidents, roadmap, documentation et passation propre.",
    proof: "Audit flash puis run mensuel",
    idealFor: "App existante, équipe absente",
    duration: "Audit + mensuel",
    budget: "Audit dès 2 000 € HT",
    accent: "green",
    icon: Clock3,
  },
  {
    href: "/services/audit-technique",
    label: "Audit technique",
    eyebrow: "Diagnostic",
    family: "operate",
    title: "Savoir où agir avant d'empiler des tickets.",
    description:
      "Audit code, performance, SEO technique, sécurité, dette, infra, tracking et roadmap priorisée. On transforme le flou en décisions.",
    proof: "Rapport PDF 40-70 p. + backlog chiffré",
    idealFor: "Avant refonte, reprise ou levée",
    duration: "10 j ouvrés",
    budget: "À partir de 8 000 € HT",
    accent: "slate",
    icon: LockKeyhole,
  },
  {
    href: "/services/securite-rgpd",
    label: "Sécurité & RGPD",
    eyebrow: "Confiance",
    family: "operate",
    title: "Rendre vos outils vendables aux DPO, RSSI et grands comptes.",
    description:
      "Audit sécurité, RGPD, DPA, registre, flux, droits, hébergement, logs, durées de conservation et corrections prioritaires.",
    proof: "Constats sécurité et RGPD priorisés",
    idealFor: "Données sensibles, due diligence",
    duration: "Sur devis",
    budget: "Cadrage dès 5 000 € HT",
    accent: "purple",
    icon: ShieldCheck,
  },
];

/**
 * Le titre du catalogue est dérivé des tableaux réellement rendus : il ne peut
 * plus annoncer un nombre de services ni un nombre de familles différents de ce
 * que la page affiche.
 */
export const CATALOG_HEADING = `${services.length} services, ${families.length} familles, une seule logique : livrer utile.`;

/** Exposé pour les tests d'invariants : le catalogue doit refléter SERVICE_LINKS. */
export const SERVICE_CARDS: ReadonlyArray<Service> = services;

/** Exposé pour les tests d'invariants : mêmes familles que la nav et l'accueil. */
export const SERVICE_FAMILIES: ReadonlyArray<Family> = families;

/** Cartes d'une famille, dans l'ordre du catalogue. */
export function servicesOfFamily(id: FamilyId): Service[] {
  return services.filter((service) => service.family === id);
}

const routes: RouteCard[] = [
  {
    title: "Vous devez lancer un produit",
    text: "On cadre le MVP, les écrans, la donnée, les rôles et le modèle économique avant de coder.",
    href: "/services/saas-applications-metier",
    cta: "Voir SaaS & apps",
    icon: Compass,
  },
  {
    title: "Vous perdez du temps en interne",
    text: "On remplace le fichier ou le processus qui bloque par un outil ciblé et maintenable.",
    href: "/services/outils-internes-sur-mesure",
    cta: "Voir outils internes",
    icon: Wrench,
  },
  {
    title: "Vous avez besoin de leads",
    text: "On connecte site, SEO, ads, tracking et pages de preuve pour arrêter de piloter à l'instinct.",
    href: "/services/referencement-google",
    cta: "Voir acquisition",
    icon: BarChart3,
  },
  {
    title: "Vous avez déjà une app à reprendre",
    text: "On audite, stabilise, documente, corrige le risque puis on remet une trajectoire claire.",
    href: "/services/maintenance-evolution",
    cta: "Voir maintenance",
    icon: FileSearch,
  },
];

const bundles = [
  {
    // « Cadrage premium » n'existait sur aucune autre page : le visiteur qui
    // cliquait « Méthode » cherchait un nom absent. L'offre s'appelle Discovery
    // Sprint partout ailleurs (/tarifs, /methode, nav). Le prix portait aussi la
    // clause de déduction sur une ligne `white-space: nowrap` de 392 px, qui
    // débordait la carte de 84 px sous 390 px de large : la clause est
    // redescendue dans le texte, où elle se lit.
    name: "Discovery Sprint",
    price: "1 500 € HT · 2 jours",
    text: "Deux jours de cadrage : périmètre, wireframes, prototype cliquable et devis chiffré au forfait fixe. Si la phase suivante est lancée avec nous, le devis précise la déduction applicable.",
    links: [
      { href: "/tarifs", label: "Discovery Sprint" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    name: "Sprint de livraison",
    price: "Forfait fixe",
    text: "Périmètre écrit, budget plafonné, démonstrations à cadence convenue et arbitrages visibles.",
    links: [
      { href: "/methode", label: "Sprint Fixe" },
      { href: "/tarifs", label: "Tarifs" },
    ],
  },
  {
    name: "Run & croissance",
    price: "Mensuel clair",
    text: "Maintenance, SEO, ads, contenu ou sécurité selon ce qui crée réellement de la valeur.",
    links: [
      { href: "/services/maintenance-evolution", label: "Maintenance" },
      { href: "/services/referencement-google", label: "SEO" },
    ],
  },
];

const proofLinks = [
  { href: "/realisations", label: "Réalisations", value: "4 produits du groupe, en ligne" },
  { href: "/demarrer-un-projet", label: "Démarrer mon projet", value: "Objectif : prochain jour ouvré" },
  { href: "/outils/calculateur-cout-excel", label: "Coût Excel", value: "Comparaison brute sur 3 ans" },
  { href: "/equipe", label: "Équipe", value: `${TEAM_TOTAL_COUNT} personnes · équipe nommée` },
];

function ArrowIcon() {
  return <ArrowRight size={14} strokeWidth={2.2} aria-hidden="true" />;
}

export function ServicesHubPage() {
  return (
    <InteractiveDesignRoot className="hc-design services-hub">
      <MainNav />

      <main id="main-content" tabIndex={-1}>
        <section className="services-hero">
          <div className="services-hero-grid" aria-hidden="true" />
          <div className="wrap services-hero-inner">
            <div className="services-hero-copy">
              <div className="services-kicker">
                <span /> Services web, SaaS et outils métier
              </div>
              <h1>
                Nos services web, SaaS et outils métier.{" "}
                <br />
                <span className="services-hero-accent">Le bon levier avant le chantier.</span>
              </h1>
              <p>
                Un site, une app, un CRM, du SEO ou une reprise technique ne se décident pas au catalogue.
                On part de votre blocage, du niveau de risque et du retour attendu, puis on compose la mission utile.
              </p>
              <div className="services-hero-actions">
                <Link href="/demarrer-un-projet" className="btn btn-accent btn-lg">
                  Démarrer mon projet <ArrowIcon />
                </Link>
                <Link href="/contact" className="btn btn-ghost btn-lg">
                  Nous contacter
                </Link>
              </div>
            </div>

            <div className="services-router">
              <div className="router-head">
                <div>
                  <span className="router-status" />
                  Orientation projet
                </div>
                <b>{families.length} familles</b>
              </div>
              {/*
                `aria-label` sur une <div> sans rôle n'est pas exposé : le repère
                n'existait pour personne. Les voies sont une navigation, elles le
                disent maintenant.
                Chaque voie annonce une famille entière (« SaaS, outils, sites,
                e-commerce, mobile ») mais menait à UNE page service : quatre
                visiteurs sur cinq atterrissaient sur le mauvais service. Elle
                mène désormais à la famille correspondante du catalogue, d'où
                chaque service est à un clic.
              */}
              <nav className="router-lanes" aria-label="Familles de services">
                {families.map((family) => (
                  <a
                    href={`#famille-${family.id}`}
                    className={`router-lane router-lane-${family.accent}`}
                    key={family.id}
                  >
                    <span>{family.kicker}</span>
                    <b>{family.lane}</b>
                    <em>{family.laneText}</em>
                  </a>
                ))}
              </nav>
              <div className="router-footer">
                <span><Check size={14} /> Forfait fixe</span>
                <span><Check size={14} /> Dépôt et accès au devis</span>
                <span><Check size={14} /> Associé qui code</span>
              </div>
            </div>
          </div>
        </section>

        <section className="services-paths">
          <div className="wrap">
            <div className="section-head">
              <div className="left">
                <div className="eyebrow">Orientation</div>
                <h2>Si vous arrivez avec un symptôme, commencez ici.</h2>
              </div>
              <p className="right">
                Les pages services détaillent les livrables. Cette page sert à prendre la bonne direction rapidement.
              </p>
            </div>
            <div className="path-grid">
              {routes.map((route) => {
                const Icon = route.icon;
                return (
                  <Link href={route.href} className="path-card" key={route.title}>
                    <div className="path-icon"><Icon size={18} /></div>
                    <h3>{route.title}</h3>
                    <p>{route.text}</p>
                    <span>{route.cta} <ArrowIcon /></span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="services-catalog" id="catalogue">
          <div className="wrap">
            <div className="section-head">
              <div className="left">
                <div className="eyebrow">Catalogue complet</div>
                <h2>{CATALOG_HEADING}</h2>
              </div>
              <p className="right">
                Le catalogue reprend les <b>{families.length} familles du menu</b>&nbsp;: construire, faire grandir,
                protéger &amp; opérer. Chaque service peut vivre seul, mais les meilleurs projets en combinent plusieurs.
                Les budgets affichés sont des <b>ordres de grandeur indicatifs</b>, repris de la{" "}
                <Link href="/tarifs">grille tarifaire</Link>&nbsp;: seul le devis nominatif engage les parties.{" "}
                <b>Tous nos prix sont indiqués hors taxes, TVA 20&nbsp;% en sus</b>, pour une clientèle professionnelle.
              </p>
            </div>

            {/*
              Le catalogue fait 8 écrans sur un téléphone (6 734 px mesurés à
              390 px de large) et n'offrait aucun raccourci : la seule façon
              d'atteindre « Protéger & opérer » était de faire défiler les huit
              autres cartes. Ces trois liens donnent le compte par famille et y
              sautent directement.
            */}
            <nav className="catalog-jump" aria-label="Aller à une famille de services">
              {families.map((family) => (
                <a
                  href={`#famille-${family.id}`}
                  className={`catalog-jump-link catalog-jump-${family.accent}`}
                  key={family.id}
                >
                  {family.kicker}
                  <b>{servicesOfFamily(family.id).length} services</b>
                </a>
              ))}
            </nav>

            <div className="service-families">
              {families.map((family) => (
                <section
                  className={`service-family service-family-${family.accent}`}
                  key={family.id}
                  id={`famille-${family.id}`}
                  aria-labelledby={`famille-${family.id}-titre`}
                >
                  <div className="service-family-head">
                    <span className="service-family-kicker">{family.kicker}</span>
                    <h3 id={`famille-${family.id}-titre`}>{family.title}</h3>
                    <p>{family.text}</p>
                  </div>

                  <div className="service-grid">
                    {servicesOfFamily(family.id).map((service) => {
                      const Icon = service.icon;
                      return (
                        <article className={`service-card service-card-${service.accent}`} key={service.href}>
                          <Link href={service.href} className="service-card-link">
                            <div className="service-card-top">
                              <div className="service-card-icon"><Icon size={18} /></div>
                              <span>{service.eyebrow}</span>
                            </div>
                            <h4>{service.label}</h4>
                            <p className="service-card-title">{service.title}</p>
                            <p className="service-card-text">{service.description}</p>
                            <div className="service-card-proof">
                              <Check size={14} /> {service.proof}
                            </div>
                            {/*
                              Les trois valeurs n'étaient distinguées que par
                              une icône décorative : un lecteur d'écran lisait
                              « Sur devis, Sur devis » sans savoir laquelle est
                              la durée et laquelle le budget.
                            */}
                            <div className="service-card-meta">
                              <span>
                                <Compass size={13} aria-hidden="true" />
                                <span className="service-card-meta-label">Idéal pour&nbsp;:</span>{" "}
                                {service.idealFor}
                              </span>
                              <span>
                                <Clock3 size={13} aria-hidden="true" />
                                <span className="service-card-meta-label">Durée&nbsp;:</span>{" "}
                                {service.duration}
                              </span>
                              <span>
                                <Euro size={13} aria-hidden="true" />
                                <span className="service-card-meta-label">Budget&nbsp;:</span>{" "}
                                {service.budget}
                              </span>
                            </div>
                            <div className="service-card-cta">
                              Explorer <ArrowIcon />
                            </div>
                          </Link>
                        </article>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="services-compose">
          <div className="wrap compose-grid">
            <div className="compose-copy">
              <div className="eyebrow">Composition</div>
              <h2>On ne vend pas une ligne. On compose une trajectoire.</h2>
              <p>
                Un projet sérieux ressemble rarement à &quot;juste un site&quot; ou &quot;juste une app&quot;.
                Il faut cadrer, produire, brancher la donnée, mesurer, former et maintenir.
              </p>
              <div className="compose-checks">
                <span><Check size={14} /> Périmètre écrit</span>
                <span><Check size={14} /> Budget plafonné</span>
                <span><Check size={14} /> Démos régulières</span>
                <span><Check size={14} /> Passation incluse</span>
              </div>
            </div>

            <div className="bundle-list">
              {bundles.map((bundle) => (
                <div className="bundle-row" key={bundle.name}>
                  <div>
                    <h3>{bundle.name}</h3>
                    <p>{bundle.text}</p>
                    <div className="bundle-links">
                      {bundle.links.map((link) => (
                        <Link href={link.href} key={link.href}>{link.label}</Link>
                      ))}
                    </div>
                  </div>
                  <b>{bundle.price}</b>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services-proof">
          <div className="wrap proof-inner">
            <div>
              <div className="eyebrow">Preuves & outils</div>
              <h2>Avant de nous écrire, vous pouvez déjà vérifier le niveau.</h2>
            </div>
            <div className="proof-grid">
              {proofLinks.map((link) => (
                <Link href={link.href} className="proof-link" key={link.href}>
                  <span>{link.label}</span>
                  <b>{link.value}</b>
                  <ArrowIcon />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="services-final">
          <div className="wrap final-inner">
            <div>
              <div className="eyebrow">Prochaine étape</div>
              <h2>Vous avez le contexte. On vous donne l&apos;option la plus rationnelle.</h2>
              <p>
                Décrivez le besoin en 1-2 phrases. Si un service ne colle pas, on vous le dira.
                Si le projet mérite un cadrage, on vous proposera le chemin le plus court.
              </p>
            </div>
            <div className="final-actions">
              {/* Même destination que le bouton du héros, donc même libellé :
                  la page proposait « Nous contacter » en haut et « Parler du
                  projet » en bas pour la même porte. Deux noms pour une porte,
                  c'est le lecteur qui se demande ce qui les distingue. */}
              <Link href="/contact" className="btn btn-primary btn-lg">
                Nous contacter <MessageSquare size={16} />
              </Link>
              <Link href="/tarifs" className="btn btn-ghost btn-lg">
                Voir les tarifs
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </InteractiveDesignRoot>
  );
}
