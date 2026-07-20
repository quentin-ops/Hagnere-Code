"use client";

import Link from "next/link";
import { useRef, type ComponentType } from "react";
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
import { useDesignInteractive } from "@/components/design-shared/useDesignInteractive";
import { TEAM_TOTAL_COUNT } from "@/lib/team";
import { MainNav } from "@/components/design-shared/MainNav";
import "./services-hub.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/site-footer.css";

type Service = {
  href: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  proof: string;
  idealFor: string;
  duration: string;
  budget: string;
  accent: "purple" | "blue" | "green" | "amber" | "red" | "slate";
  icon: ComponentType<{ size?: number; strokeWidth?: number }>;
};

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
    title: "Concevoir un SaaS exploitable et réversible.",
    description:
      "MVP SaaS, portail client, app métier, API, auth, facturation, IA et back-office. On part du besoin business et on livre un produit exploitable.",
    proof: "MVP cadré et chiffré au devis",
    idealFor: "Création ou refonte produit",
    duration: "Sur devis",
    budget: "Sur devis",
    accent: "purple",
    icon: Layers3,
  },
  {
    href: "/services/outils-internes-sur-mesure",
    label: "Outils internes",
    eyebrow: "Ops",
    title: "Sortir d'Excel sans créer une usine à gaz.",
    description:
      "CRM métier, back-office, pipeline Kanban, automatisations, documents, relances, reporting. Le bon outil pour un processus précis.",
    proof: "Premier workflow chiffré au devis",
    idealFor: "Excel, Notion, process manuel",
    duration: "Sur devis",
    budget: "Sur devis",
    accent: "green",
    icon: Wrench,
  },
  {
    href: "/services/sites-vitrines",
    label: "Sites vitrines",
    eyebrow: "Conversion",
    title: "Un site clair, rapide, crédible et orienté leads.",
    description:
      "Site institutionnel, landing pages, architecture SEO, contenus, tracking, formulaires, pages locales et pages offres.",
    proof: "Pages prêtes pour campagnes et SEO",
    idealFor: "PME, cabinets, offres premium",
    duration: "Sur devis",
    budget: "Sur devis",
    accent: "blue",
    icon: Gauge,
  },
  {
    href: "/services/ecommerce",
    label: "E-commerce",
    eyebrow: "Vente",
    title: "Boutiques, catalogues et tunnels qui tiennent la marge.",
    description:
      "Catalogue, tunnel, paiement, ERP, stock, facturation, tracking server-side et SEO produit. Alternative maîtrisée au bricolage Shopify.",
    proof: "Tunnel + tracking + catalogue propre",
    idealFor: "Retail, B2B, catalogue complexe",
    duration: "Sur devis",
    budget: "Sur devis",
    accent: "amber",
    icon: ShoppingCart,
  },
  {
    href: "/services/application-mobile",
    label: "Application mobile",
    eyebrow: "Mobile",
    title: "Une vraie app iOS + Android, publiée sous vos comptes stores.",
    description:
      "App React Native + Expo, paiement, push, mode hors-ligne et soumission aux stores selon le périmètre. Comptes, accès, livrables et droits sont écrits au devis.",
    proof: "MVP cadré et chiffré au devis",
    idealFor: "Fidélité, RDV, e-com, terrain B2B",
    duration: "Sur devis",
    budget: "Sur devis",
    accent: "purple",
    icon: Smartphone,
  },
  {
    href: "/services/referencement-google",
    label: "SEO Google",
    eyebrow: "Acquisition",
    title: "Construire une machine d'acquisition durable.",
    description:
      "Audit technique, contenus, cocons, maillage, schema.org, performance, Search Console et pages à intention business.",
    proof: "Architecture + production + reporting",
    idealFor: "Trafic qualifié long terme",
    duration: "Sur devis",
    budget: "Sur devis",
    accent: "blue",
    icon: BarChart3,
  },
  {
    href: "/services/publicite-en-ligne",
    label: "Publicité en ligne",
    eyebrow: "Acquisition",
    title: "Ads pilotées par la marge, pas par les impressions.",
    description:
      "Google, Meta, LinkedIn, TikTok, YouTube, landing pages, tracking server-side, CRM et tableaux de bord orientés CAC.",
    proof: "Tracking propre avant scaling",
    idealFor: "Demande active ou retargeting",
    duration: "Mensuel",
    budget: "Sur devis",
    accent: "red",
    icon: Sparkles,
  },
  {
    href: "/services/contenu-video",
    label: "Contenu & vidéo",
    eyebrow: "Marque",
    title: "Rendre visible ce que vous savez déjà faire.",
    description:
      "Vidéos, scripts, motion, formats courts, YouTube, pages de preuve, contenus experts et assets réutilisables en ads ou sales.",
    proof: "Pipeline contenu + diffusion",
    idealFor: "Expertise difficile à expliquer",
    duration: "Sprint ou récurrent",
    budget: "Sur devis",
    accent: "slate",
    icon: PlaySquare,
  },
  {
    href: "/services/maintenance-evolution",
    label: "Maintenance & évolution",
    eyebrow: "Run",
    title: "Reprendre, stabiliser et faire évoluer sans tout refaire.",
    description:
      "TMA Next.js / Laravel, dette technique, monitoring, dépendances, incidents, roadmap, documentation et passation propre.",
    proof: "Audit flash puis run mensuel",
    idealFor: "App existante, équipe absente",
    duration: "Audit + mensuel",
    budget: "Sur devis",
    accent: "green",
    icon: Clock3,
  },
  {
    href: "/services/audit-technique",
    label: "Audit technique",
    eyebrow: "Diagnostic",
    title: "Savoir où agir avant d'empiler des tickets.",
    description:
      "Audit code, performance, SEO technique, sécurité, dette, infra, tracking et roadmap priorisée. On transforme le flou en décisions.",
    proof: "Rapport actionnable + plan chiffré",
    idealFor: "Avant refonte, reprise ou levée",
    duration: "10 j ouvrés",
    budget: "Sur devis",
    accent: "slate",
    icon: LockKeyhole,
  },
  {
    href: "/services/securite-rgpd",
    label: "Sécurité & RGPD",
    eyebrow: "Confiance",
    title: "Rendre vos outils vendables aux DPO, RSSI et grands comptes.",
    description:
      "Audit sécurité, RGPD, DPA, registre, flux, droits, hébergement, logs, durées de conservation et corrections prioritaires.",
    proof: "Plan d'action exploitable",
    idealFor: "Données sensibles, due diligence",
    duration: "Sur devis",
    budget: "Sur devis",
    accent: "purple",
    icon: ShieldCheck,
  },
];

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
    name: "Cadrage premium",
    price: "Gratuit ou déductible",
    text: "30 min pour qualifier, puis atelier si le périmètre mérite d'être verrouillé avant devis.",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/methode", label: "Méthode" },
    ],
  },
  {
    name: "Sprint de livraison",
    price: "Forfait fixe",
    text: "Périmètre écrit, budget plafonné, démos chaque semaine, arbitrages visibles.",
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
  { href: "/realisations", label: "Réalisations", value: "4 cas documentés" },
  { href: "/demarrer-un-projet", label: "Décrire mon projet", value: "Réponse sous 24 h ouvrées" },
  { href: "/outils/calculateur-cout-excel", label: "Coût Excel", value: "ROI outil interne" },
  { href: "/equipe", label: "Équipe", value: `${TEAM_TOTAL_COUNT} personnes · équipe nommée` },
];

function ArrowIcon() {
  return <ArrowRight size={14} strokeWidth={2.2} aria-hidden="true" />;
}

export function ServicesHubPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useDesignInteractive(rootRef);

  return (
    <div ref={rootRef} className="hc-design services-hub">
      <MainNav />

      <main id="main-content">
        <section className="services-hero">
          <div className="services-hero-grid" aria-hidden="true" />
          <div className="wrap services-hero-inner">
            <div className="services-hero-copy">
              <div className="services-kicker">
                <span /> Services web, SaaS et outils métier
              </div>
              <h1>
                Nos services web, SaaS et outils métier.
                <br />
                <span className="services-hero-accent">Le bon levier avant le chantier.</span>
              </h1>
              <p>
                Un site, une app, un CRM, du SEO ou une reprise technique ne se décident pas au catalogue.
                On part de votre blocage, du niveau de risque et du retour attendu, puis on compose la mission utile.
              </p>
              <div className="services-hero-actions">
                <Link href="/demarrer-un-projet" className="btn btn-accent btn-lg">
                  Décrire mon projet <ArrowIcon />
                </Link>
                <Link href="/contact" className="btn btn-ghost btn-lg">
                  Nous contacter
                </Link>
              </div>
            </div>

            <div className="services-router" aria-label="Cartographie des services Hagnéré Code">
              <div className="router-head">
                <div>
                  <span className="router-status" />
                  Orientation projet
                </div>
                <b>4 familles</b>
              </div>
              <div className="router-lanes">
                <Link href="/services/saas-applications-metier" className="router-lane router-lane-purple">
                  <span>Construire</span>
                  <b>SaaS, apps métier, e-commerce</b>
                  <em>Créer un actif produit.</em>
                </Link>
                <Link href="/services/referencement-google" className="router-lane router-lane-blue">
                  <span>Faire grandir</span>
                  <b>SEO, ads, contenu vidéo</b>
                  <em>Générer la demande.</em>
                </Link>
                <Link href="/services/maintenance-evolution" className="router-lane router-lane-green">
                  <span>Opérer</span>
                  <b>Maintenance, reprise, audit</b>
                  <em>Stabiliser puis faire évoluer.</em>
                </Link>
                <Link href="/services/securite-rgpd" className="router-lane router-lane-amber">
                  <span>Protéger</span>
                  <b>Sécurité, RGPD, DPA</b>
                  <em>Rendre le projet vendable.</em>
                </Link>
              </div>
              <div className="router-footer">
                <span><Check size={14} /> Forfait fixe</span>
                <span><Check size={14} /> Code chez vous</span>
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
                <h2>Dix services, une seule logique : livrer utile.</h2>
              </div>
              <p className="right">
                Chaque service peut vivre seul, mais les meilleurs projets combinent souvent produit, acquisition, run et confiance.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article className={`service-card service-card-${service.accent}`} key={service.href}>
                    <Link href={service.href} className="service-card-link" aria-label={`Voir le service ${service.label}`}>
                      <div className="service-card-top">
                        <div className="service-card-icon"><Icon size={18} /></div>
                        <span>{service.eyebrow}</span>
                      </div>
                      <h3>{service.label}</h3>
                      <p className="service-card-title">{service.title}</p>
                      <p className="service-card-text">{service.description}</p>
                      <div className="service-card-proof">
                        <Check size={14} /> {service.proof}
                      </div>
                      <div className="service-card-meta">
                        <span><Compass size={13} /> {service.idealFor}</span>
                        <span><Clock3 size={13} /> {service.duration}</span>
                        <span><Euro size={13} /> {service.budget}</span>
                      </div>
                      <div className="service-card-cta">
                        Explorer <ArrowIcon />
                      </div>
                    </Link>
                  </article>
                );
              })}
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
              <Link href="/contact" className="btn btn-primary btn-lg">
                Parler du projet <MessageSquare size={16} />
              </Link>
              <Link href="/tarifs" className="btn btn-ghost btn-lg">
                Voir les tarifs
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
