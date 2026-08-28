import { TEAM_PUBLIC_COMPOSITION } from "@/lib/team";
import {
  CONTACT_PHONE_DISPLAY_NATIONAL,
  CONTACT_PHONE_E164,
} from "@/lib/contact-details";
import { FIRST_CALL_CONTACT } from "@/components/homepage/first-call";

/**
 * Single canonical nav HTML — used by every page (body.ts string templates and
 * React layouts via <MainNav />). Inspired by Hagnéré Patrimoine's pill + mega
 * menu UX:
 *
 *   - Top pill (white, rounded full) with: Nos services ▾ | Tarifs | Contact | ☎ phone
 *   - Mega menu opens from "Nos services" trigger:
 *       - Left dark sidebar with 5 categories + bottom CTA card
 *       - Right pane with eyebrow + H2 + 2-col grid of service cards
 *   - Right side: "Démarrer un projet →" primary button
 *
 * Category switching is wired by useDesignInteractive (data-cat / data-pane).
 *
 * Deux points volontaires dans le balisage du déclencheur :
 *
 *   - pas d'`aria-label` : le nom accessible se calcule depuis le seul libellé
 *     réellement rendu au point de rupture courant — « Nos services » sur
 *     desktop (texte visible, donc conforme au critère « Label in Name »),
 *     « Menu » sous 720 px, où le bouton devient une icône seule et ouvre
 *     toute la navigation (services, studio, ressources, liens rapides) ;
 *   - un `<noscript>` vers /services : le panneau est servi `aria-hidden` +
 *     `inert` et n'est activé qu'à l'hydratation. Sans JavaScript, ce lien
 *     garde le hub des services atteignable depuis le header.
 */

const ICON = {
  services:
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  menu: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  chevron:
    '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>',
  phone:
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>',
  arrow:
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',
  arrowRight:
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',
  calendar:
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  calendarCheck:
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M9 16l2 2 4-4"/></svg>',
  rocket:
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
  user: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  // Sidebar category icons
  build:
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2l9 5-9 5-9-5 9-5z"/><path d="M3 12l9 5 9-5M3 17l9 5 9-5"/></svg>',
  grow: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
  run: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',
  cabinet:
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>',
  outils:
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="10" y2="10"/><line x1="14" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="10" y2="14"/><line x1="14" y1="14" x2="16" y2="14"/><line x1="8" y1="18" x2="16" y2="18"/></svg>',
  // Service item icons
  saas: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>',
  tools:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>',
  vitrine:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20"/></svg>',
  ecom: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>',
  mobile:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2.5"/><line x1="12" y1="18" x2="12" y2="18"/></svg>',
  seo: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>',
  ads: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11l18-8v18L3 13zM11 7v10"/></svg>',
  video:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>',
  maint:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z"/></svg>',
  rgpd: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  audit:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8"/></svg>',
  methode:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h6a3 3 0 013 3v6"/></svg>',
  realisations:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  equipe:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>',
  estim:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 11H6a2 2 0 00-2 2v3a2 2 0 002 2h12a2 2 0 002-2v-3a2 2 0 00-2-2h-3M12 2v9M8 7l4-4 4 4"/></svg>',
  excel:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="16" y2="14"/><line x1="8" y1="18" x2="12" y2="18"/></svg>',
  guide:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>',
  code: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 17l-5-5 5-5M16 7l5 5-5 5"/></svg>',
  pin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-5.6 7-11a7 7 0 10-14 0c0 5.4 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
};

function paneCard(
  href: string,
  icon: string,
  title: string,
  sub: string,
): string {
  return `
        <a class="hc-mega-card" href="${href}">
          <span class="hc-mega-card-ic">${icon}</span>
          <span class="hc-mega-card-meta">
            <span class="hc-mega-card-title">${title}</span>
            <span class="hc-mega-card-sub">${sub}</span>
          </span>
        </a>`;
}

function pane(args: {
  cat: string;
  eyebrow: string;
  title: string;
  seeAllHref: string;
  seeAllLabel: string;
  groupLabel: string;
  cards: string;
}): string {
  return `
    <div class="hc-mega-pane" data-pane="${args.cat}">
      <div class="hc-mega-pane-head">
        <div class="hc-mega-pane-eyebrow">${args.eyebrow}</div>
        <a class="hc-mega-pane-all" href="${args.seeAllHref}">${args.seeAllLabel} ${ICON.arrowRight}</a>
      </div>
      <p class="hc-mega-pane-title" role="presentation">${args.title}</p>
      <div class="hc-mega-pane-group">${args.groupLabel}</div>
      <div class="hc-mega-pane-grid">${args.cards}
      </div>
    </div>`;
}

const PANE_BUILD = pane({
  cat: "build",
  eyebrow: "PRODUIT",
  title: "Construire des produits qui <br>deviennent des actifs.",
  seeAllHref: "/services",
  seeAllLabel: "Voir tous les services",
  groupLabel: "PRODUITS NUMÉRIQUES",
  cards:
    paneCard(
      "/services/saas-applications-metier",
      ICON.saas,
      "Développement SaaS sur mesure",
      "Plateformes B2B, espaces clients, facturation, IA.",
    ) +
    paneCard(
      "/services/outils-internes-sur-mesure",
      ICON.tools,
      "Outils internes sur mesure",
      "Back-office, workflows, automatisations métier.",
    ) +
    paneCard(
      "/services/sites-vitrines",
      ICON.vitrine,
      "Sites vitrines &amp; landings",
      "Sites qui convertissent, pas qui informent.",
    ) +
    paneCard(
      "/services/ecommerce",
      ICON.ecom,
      "E-commerce",
      "Boutiques sur mesure, sans commission ni dépendance.",
    ) +
    paneCard(
      "/services/application-mobile",
      ICON.mobile,
      "Application mobile",
      "Apps iOS &amp; Android, App Store &amp; Play Store.",
    ),
});

const PANE_GROW = pane({
  cat: "grow",
  eyebrow: "ACQUISITION",
  title: "Construire un moteur <br>d'acquisition durable.",
  seeAllHref: "/services",
  seeAllLabel: "Voir tous les services",
  groupLabel: "CANAUX D'ACQUISITION",
  cards:
    paneCard(
      "/services/referencement-google",
      ICON.seo,
      "SEO &amp; référencement",
      "Contenu, technique, netlinking, AI Overviews.",
    ) +
    paneCard(
      "/services/publicite-en-ligne",
      ICON.ads,
      "Publicité en ligne",
      "Google Ads, Meta, LinkedIn, tracking server-side.",
    ) +
    paneCard(
      "/services/contenu-video",
      ICON.video,
      "Contenu &amp; vidéo",
      "Production vidéo, motion design, YouTube.",
    ),
});

const PANE_RUN = pane({
  cat: "run",
  eyebrow: "RUN",
  title: "Stabiliser, sécuriser, <br>faire évoluer.",
  seeAllHref: "/services",
  seeAllLabel: "Voir tous les services",
  groupLabel: "MAINTENANCE &amp; CONFORMITÉ",
  cards:
    paneCard(
      "/services/maintenance-evolution",
      ICON.maint,
      "Maintenance &amp; évolution",
      "Forfait mensuel, SLA contractuel, astreinte.",
    ) +
    paneCard(
      "/services/securite-rgpd",
      ICON.rgpd,
      "Sécurité &amp; RGPD",
      "Audit, conformité, hébergement FR, DPA.",
    ) +
    paneCard(
      "/services/audit-technique",
      ICON.audit,
      "Audit technique",
      "Code review, performance, sécurité, dette.",
    ),
});

const PANE_CABINET = pane({
  cat: "cabinet",
  eyebrow: "STUDIO",
  title: "Comprendre comment <br>on travaille.",
  seeAllHref: "/equipe",
  seeAllLabel: "Voir l'équipe",
  groupLabel: "NOTRE STUDIO",
  cards:
    paneCard(
      "/methode",
      ICON.methode,
      "Méthode",
      "Sprint Fixe : périmètre, prix et jalons écrits au devis.",
    ) +
    paneCard(
      "/realisations",
      ICON.realisations,
      "Réalisations",
      "4 pages produit publiques : disponibilité et fonctions visibles.",
    ) +
    paneCard(
      "/equipe",
      ICON.equipe,
      "Équipe",
      `${TEAM_PUBLIC_COMPOSITION}. Intervenants confirmés au devis.`,
    ) +
    // Trois pages sans emplacement permanent avant cette passe : les deux
    // pages technologie ne vivaient que de liens éditoriaux, et le pilier
    // local n'était atteignable depuis aucun gabarit partagé.
    paneCard(
      "/agence-next-js",
      ICON.code,
      "Agence Next.js",
      "Sites et applications Next.js, du cadrage à la production.",
    ) +
    paneCard(
      "/agence-react",
      ICON.code,
      "Agence React",
      "Interfaces et applications React sur mesure.",
    ) +
    paneCard(
      "/agence",
      ICON.pin,
      "Agence en Savoie",
      "Bassens, aux portes de Chambéry ; la France à distance.",
    ),
});

const PANE_OUTILS = pane({
  cat: "outils",
  eyebrow: "RESSOURCES",
  title: "Kits pratiques, guides <br>et outils gratuits.",
  seeAllHref: "/ressources",
  seeAllLabel: "Voir les ressources",
  groupLabel: "APPRENDRE &amp; DÉCIDER",
  cards:
    paneCard(
      "/ressources",
      ICON.outils,
      "Ressources gratuites",
      "Kits, modèles, grilles et guides pour décider.",
    ) +
    paneCard(
      "/ressources/kit-cahier-des-charges-site-internet",
      ICON.audit,
      "Kit cahier des charges — site",
      "Word, exemple rempli et grille Excel — sans email.",
    ) +
    // Le pane n'exposait qu'un seul des deux kits publiés : celui qui vise les
    // projets d'application métier n'avait aucun emplacement permanent.
    paneCard(
      "/ressources/kit-cahier-des-charges-application-metier",
      ICON.tools,
      "Kit cahier des charges — application métier",
      "Trois fichiers pour cadrer un outil interne — sans email.",
    ) +
    paneCard(
      "/guides",
      ICON.outils,
      "Guides web",
      "Budget, SEO, SaaS : guides pratiques et chiffrés.",
    ) +
    paneCard(
      "/livres-blancs",
      ICON.guide,
      "Livres blancs",
      "Grilles opérationnelles, exemples remplis et PDF gratuits.",
    ) +
    paneCard(
      "/outils/calculateur-cout-excel",
      ICON.excel,
      "Calculateur coût Excel",
      "Combien vous coûte vraiment votre Excel ?",
    ) +
    paneCard(
      "/demarrer-un-projet",
      ICON.estim,
      "Décrire mon projet",
      "3 minutes — demande relue par l'équipe, objectif le prochain jour ouvré.",
    ),
});

export const navHtml = `<!-- NAV -->
<nav class="hc-nav" aria-label="Navigation principale">
  <div class="hc-nav-inner">
    <a href="/" class="hc-nav-brand">
      <div class="hc-nav-brand-mark">HC</div>
      <div class="hc-nav-brand-name"><b>Hagnéré</b> <span>Code</span></div>
    </a>

    <div class="hc-nav-pill-wrap" data-mega-root>
      <div class="hc-nav-pill">
        <button type="button" class="hc-nav-pill-trigger" data-mega-trigger aria-expanded="false">
          <span class="hc-nav-pill-trigger-icon-desktop" aria-hidden="true">${ICON.services}</span>
          <span class="hc-nav-pill-trigger-icon-mobile" aria-hidden="true">${ICON.menu}</span>
          <span class="hc-nav-pill-trigger-label">Nos services</span>
          <span class="hc-nav-pill-trigger-label-mobile">Menu</span>
          ${ICON.chevron}
        </button>
        <noscript><a class="hc-nav-pill-link hc-nav-pill-link-nojs" href="/services">Nos services</a></noscript>
        <a class="hc-nav-pill-link" href="/tarifs">Tarifs</a>
        <a class="hc-nav-pill-link" href="/contact">Contact</a>
        <span class="hc-nav-pill-sep" aria-hidden="true"></span>
        <a class="hc-nav-pill-phone" href="tel:${CONTACT_PHONE_E164}">${ICON.phone}<span>${CONTACT_PHONE_DISPLAY_NATIONAL}</span></a>
      </div>

      <div class="hc-mega" data-mega-panel role="region" aria-label="Menu principal" aria-hidden="true" inert>
        <aside class="hc-mega-side">
          <div class="hc-mega-side-eyebrow">EXPLORER PAR CATÉGORIE</div>
          <div class="hc-mega-side-list">
            <button type="button" class="hc-mega-cat is-active" data-cat="build">
              ${ICON.build}<span class="hc-mega-cat-label">Construire</span>${ICON.arrowRight}
            </button>
            <button type="button" class="hc-mega-cat" data-cat="grow">
              ${ICON.grow}<span class="hc-mega-cat-label">Faire grandir</span>${ICON.arrowRight}
            </button>
            <button type="button" class="hc-mega-cat" data-cat="run">
              ${ICON.run}<span class="hc-mega-cat-label">Protéger &amp; opérer</span>${ICON.arrowRight}
            </button>
            <button type="button" class="hc-mega-cat" data-cat="cabinet">
              ${ICON.cabinet}<span class="hc-mega-cat-label">Studio</span>${ICON.arrowRight}
            </button>
            <button type="button" class="hc-mega-cat" data-cat="outils">
              ${ICON.outils}<span class="hc-mega-cat-label">Outils &amp; ressources</span>${ICON.arrowRight}
            </button>
          </div>
          <nav class="hc-mega-side-mobile" aria-label="Liens rapides">
            <a href="/tarifs" class="hc-mega-side-mobile-link">Tarifs</a>
            <a href="/contact" class="hc-mega-side-mobile-link">Contact</a>
            <a href="/rendez-vous" class="hc-mega-side-mobile-link">${ICON.calendarCheck}<span>Rendez-vous</span></a>
            <a href="tel:${CONTACT_PHONE_E164}" class="hc-mega-side-mobile-link">${ICON.phone}<span>${CONTACT_PHONE_DISPLAY_NATIONAL}</span></a>
          </nav>
          <div class="hc-mega-side-cta">
            <div class="hc-mega-side-cta-title">Pas sûr de votre besoin ?</div>
            <div class="hc-mega-side-cta-sub">30 min en visio avec ${FIRST_CALL_CONTACT} pour cadrer.</div>
            <a href="/rendez-vous" class="hc-mega-side-cta-btn">${ICON.calendar}<span>Réserver un appel</span></a>
          </div>
        </aside>
        <div class="hc-mega-content">${PANE_BUILD}${PANE_GROW}${PANE_RUN}${PANE_CABINET}${PANE_OUTILS}
        </div>
      </div>
    </div>

    <div class="hc-nav-actions">
      ${
        process.env.NEXT_PUBLIC_BACKOFFICE_URL
          ? `<a href="${process.env.NEXT_PUBLIC_BACKOFFICE_URL}" rel="nofollow noopener" class="hc-nav-cta hc-nav-cta-icon" aria-label="Backoffice" title="Backoffice">
        ${ICON.user}
      </a>`
          : ""
      }
      <button type="button" class="hc-theme-toggle" data-theme-toggle aria-label="Basculer le thème clair/sombre" title="Thème clair / sombre">
        <svg data-icon-moon width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        <svg data-icon-sun width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
      </button>
      <a href="/rendez-vous" class="hc-nav-cta hc-nav-cta-rdv">
        ${ICON.calendarCheck}<span>Rendez-vous</span>
      </a>
      <a href="/demarrer-un-projet" class="hc-nav-cta hc-nav-cta-primary" aria-label="Démarrer un projet">
        ${ICON.rocket}<span>Démarrer un projet</span>
      </a>
    </div>
  </div>
</nav>
`;
