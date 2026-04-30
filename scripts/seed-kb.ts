/**
 * Seed la knowledge base Hagnéré Code (équipe, case studies, risques,
 * modèles de phasing). Idempotent : utilise ON CONFLICT DO UPDATE pour
 * pouvoir relancer sans casser l'existant.
 *
 * Usage : npx tsx scripts/seed-kb.ts
 */

import { config } from "dotenv";
config({ path: ".env.local" });

import { sql } from "drizzle-orm";
import { getDb } from "../src/db";
import {
  teamMember,
  caseStudy,
  riskTemplate,
  phasingTemplate,
} from "../src/db/schema";

async function main() {
  const db = getDb();

  // ── TEAM ────────────────────────────────────────────────────────────
  const teamData = [
    {
      slug: "quentin",
      fullName: "Quentin Hagnéré",
      promptLabel: "Quentin Hagnéré (Fondateur — brief, design, front-end, back-office)",
      role: "Fondateur",
      specialties: ["Brief client", "Design produit", "Front-end", "Back-office"],
      pricingProfileId: "quentin",
      hourlySellRate: 160,
      availableHoursPerWeek: 35,
      linkedinUrl: "https://www.linkedin.com/in/quentin-hagnere",
      externalProfileUrl: "https://www.linkedin.com/in/quentin-hagnere",
      externalProfileLabel: "LinkedIn",
      photoUrl: null,
    },
    {
      slug: "nicolas",
      fullName: "Nicolas Wallerand",
      promptLabel: "Nicolas Wallerand (CTO — architecture, code review, choix tech)",
      role: "CTO",
      specialties: ["Architecture", "Code review", "Choix tech", "Vision long-terme"],
      pricingProfileId: "nicolas",
      hourlySellRate: 100,
      availableHoursPerWeek: 48,
      linkedinUrl: null,
      externalProfileUrl: null,
      externalProfileLabel: null,
      photoUrl: null,
    },
    {
      slug: "kylian",
      fullName: "Killian Hoarau",
      promptLabel: "Killian Hoarau (Senior Dev Laravel — DevOps, infrastructure)",
      role: "Senior Dev · DevOps",
      specialties: ["Laravel", "Docker", "AWS", "Forge", "Infrastructure"],
      pricingProfileId: "kylian",
      hourlySellRate: 85,
      availableHoursPerWeek: 35,
      linkedinUrl: "https://www.linkedin.com/in/killian-hoarau-960927138/",
      externalProfileUrl: "https://www.linkedin.com/in/killian-hoarau-960927138/",
      externalProfileLabel: "LinkedIn",
      photoUrl: null,
    },
    {
      slug: "frederic",
      fullName: "Frédéric Curinckx",
      promptLabel: "Frédéric Curinckx (Senior Dev — full-stack senior)",
      role: "Senior Dev",
      specialties: ["Laravel", "React", "Full-stack senior"],
      pricingProfileId: "frederic",
      hourlySellRate: 95,
      availableHoursPerWeek: 35,
      linkedinUrl: "https://www.linkedin.com/in/frederic-curinckx/",
      externalProfileUrl: "https://www.linkedin.com/in/frederic-curinckx/",
      externalProfileLabel: "LinkedIn",
      photoUrl: null,
    },
    {
      slug: "arthur",
      fullName: "Arthur Monney",
      promptLabel: "Arthur Monney (Senior Dev — IA, intégration LLM)",
      role: "Senior Dev · IA",
      specialties: ["IA", "Intégration LLM", "Design lead"],
      pricingProfileId: "arthur",
      hourlySellRate: 140,
      availableHoursPerWeek: 12,
      linkedinUrl: "https://www.linkedin.com/in/arthurmonney/",
      externalProfileUrl: "https://www.linkedin.com/in/arthurmonney/",
      externalProfileLabel: "LinkedIn",
      photoUrl: null,
    },
    {
      slug: "ryan",
      fullName: "Ryan Mazzitelli",
      promptLabel: "Ryan Mazzitelli (Senior Dev — intégration, IA, exécution)",
      role: "Senior Dev · IA",
      specialties: ["Intégration", "IA", "Exécution rapide"],
      pricingProfileId: "ryan",
      hourlySellRate: 80,
      availableHoursPerWeek: 48,
      linkedinUrl: "https://www.linkedin.com/in/ryan-mazzitelli-907716262/",
      externalProfileUrl: "https://www.linkedin.com/in/ryan-mazzitelli-907716262/",
      externalProfileLabel: "LinkedIn",
      photoUrl: null,
    },
    {
      slug: "peter",
      fullName: "Peter Sum Sie Kung",
      promptLabel:
        "Peter Sum Sie Kung (Dev full-stack freelance — PHP, Laravel, Symfony, React, Vue.js)",
      role: "Dev full-stack · Freelance",
      specialties: [
        "PHP",
        "Laravel",
        "Symfony",
        "JavaScript",
        "React",
        "Vue.js",
        "Docker",
        "MySQL",
        "HTML/CSS",
      ],
      pricingProfileId: "peter",
      // Sell rate dérivé du cost (18,50 €/h) × SELL_MULTIPLIER 1,6 = 29,60 €/h.
      hourlySellRate: 30,
      availableHoursPerWeek: 35,
      // Pas de LinkedIn — Peter passe par Codeur.com. Le nouveau champ
      // externalProfileUrl + externalProfileLabel rend ça explicite côté
      // affichage (au lieu d'overload linkedinUrl).
      linkedinUrl: null,
      externalProfileUrl: "https://www.codeur.com/-peterssk",
      externalProfileLabel: "Codeur",
      photoUrl: null,
    },
  ];

  for (const m of teamData) {
    await db
      .insert(teamMember)
      .values(m)
      .onConflictDoUpdate({
        target: teamMember.slug,
        set: {
          fullName: m.fullName,
          promptLabel: m.promptLabel,
          role: m.role,
          specialties: m.specialties,
          pricingProfileId: m.pricingProfileId,
          hourlySellRate: m.hourlySellRate,
          availableHoursPerWeek: m.availableHoursPerWeek,
          linkedinUrl: m.linkedinUrl,
          externalProfileUrl: m.externalProfileUrl,
          externalProfileLabel: m.externalProfileLabel,
          photoUrl: m.photoUrl,
        },
      });
  }
  console.log(`✓ team_member: ${teamData.length} members upserted`);

  // ── CASE STUDIES ─────────────────────────────────────────────────────
  const caseStudies = [
    {
      slug: "lmnp-ai",
      clientName: "LMNP.AI",
      industry: "PropTech / fiscalité immobilière",
      services: ["saas", "site-vitrine", "maintenance"],
      projectKinds: ["saas", "site", "maintenance"],
      durationWeeks: 8,
      teamSize: 4,
      priceMin: 28000,
      priceMax: 42000,
      monthlyMin: 2500,
      monthlyMax: 4000,
      promptSummary:
        "SaaS de déclaration LMNP automatisée avec OCR factures, génération formulaires 2031/2033, et chat IA fiscal. Livré en 8 semaines, équipe 4 (Nicolas + Kylian + Ryan + Peter). Stack Laravel 13 + Filament + React. 2k+ utilisateurs au mois 1.",
      outcomeSummary: "MVP livré sous 8 semaines, 2k users mois 1, retainer Care+ enchaîné.",
      stack: ["Laravel 13", "Filament", "React", "Postgres", "OpenAI", "Stripe"],
      integrations: ["Stripe", "Pennylane", "OpenAI"],
      testimonial: null,
      publicSlug: "lmnp-ai",
      publicUrl: "https://hagnere-code.fr/realisations/lmnp-ai",
    },
    {
      slug: "sci-ai",
      clientName: "SCI-AI",
      industry: "PropTech / SCI & comptabilité",
      services: ["saas", "site-vitrine", "maintenance", "seo"],
      projectKinds: ["saas", "site", "maintenance", "seo"],
      durationWeeks: 10,
      teamSize: 4,
      priceMin: 35000,
      priceMax: 55000,
      monthlyMin: 3500,
      monthlyMax: 5500,
      promptSummary:
        "Plateforme de création/gestion de SCI avec comptabilité auto, statuts générés, AGE en ligne. Livré en 10 semaines, équipe 4. Multi-tenant avec espace cabinet partenaire.",
      outcomeSummary: "Livré en 10 semaines, retainer SEO + Care en cours, 30+ SCI créées mois 1.",
      stack: ["Laravel 13", "Filament", "React", "Postgres", "OpenAI"],
      integrations: ["Pennylane", "OpenAI", "DocuSign"],
      testimonial: null,
      publicSlug: "sci-ai",
      publicUrl: "https://hagnere-code.fr/realisations/sci-ai",
    },
    {
      slug: "hagnere-patrimoine",
      clientName: "Hagnéré Patrimoine",
      industry: "Conseil patrimonial / finance",
      services: ["site-vitrine", "outil-interne", "seo", "maintenance"],
      projectKinds: ["site", "outil", "seo", "maintenance"],
      durationWeeks: 6,
      teamSize: 3,
      priceMin: 22000,
      priceMax: 32000,
      monthlyMin: 1800,
      monthlyMax: 2800,
      promptSummary:
        "Site vitrine cabinet patrimonial + back-office gestion missions et facturation Pennylane. Livré en 6 semaines, équipe 3 (Quentin + Frédéric + Peter). Ranking SEO top 5 sur 'gestion patrimoine PACA' à M+4.",
      outcomeSummary: "Top 5 SEO national mois 4, +60% leads qualifiés vs ancien site WordPress.",
      stack: ["Next.js 16", "Laravel 13", "Filament", "Postgres"],
      integrations: ["Pennylane", "HubSpot", "Calendly"],
      testimonial: null,
      publicSlug: "hagnere-patrimoine",
      publicUrl: "https://hagnere-code.fr/realisations/hagnere-patrimoine",
    },
    {
      slug: "hagnere-investissement",
      clientName: "Hagnéré Investissement",
      industry: "Investissement immobilier",
      services: ["site-vitrine", "saas", "ads", "maintenance"],
      projectKinds: ["site", "saas", "ads", "maintenance"],
      durationWeeks: 12,
      teamSize: 5,
      priceMin: 45000,
      priceMax: 70000,
      monthlyMin: 3500,
      monthlyMax: 5000,
      promptSummary:
        "Plateforme d'investissement locatif clé-en-main : matching dossier client, simulateur fiscal, espace investisseur. Livré en 12 semaines, équipe 5. Tracking server-side mutualisé avec setup Ads.",
      outcomeSummary: "Plateforme + 1 200 leads qualifiés en 6 mois via tracking server-side propre.",
      stack: ["Next.js 16", "Laravel 13", "React", "Postgres", "GTM Server"],
      integrations: ["Stripe", "Pennylane", "Meta Ads", "Google Ads"],
      testimonial: null,
      publicSlug: "hagnere-investissement",
      publicUrl: "https://hagnere-code.fr/realisations/hagnere-investissement",
    },
  ];

  for (const c of caseStudies) {
    await db
      .insert(caseStudy)
      .values(c)
      .onConflictDoUpdate({
        target: caseStudy.slug,
        set: {
          clientName: c.clientName,
          industry: c.industry,
          services: c.services,
          projectKinds: c.projectKinds,
          durationWeeks: c.durationWeeks,
          teamSize: c.teamSize,
          priceMin: c.priceMin,
          priceMax: c.priceMax,
          monthlyMin: c.monthlyMin,
          monthlyMax: c.monthlyMax,
          promptSummary: c.promptSummary,
          outcomeSummary: c.outcomeSummary,
          stack: c.stack,
          integrations: c.integrations,
          testimonial: c.testimonial,
          publicSlug: c.publicSlug,
          publicUrl: c.publicUrl,
        },
      });
  }
  console.log(`✓ case_study: ${caseStudies.length} projects upserted`);

  // ── RISK TEMPLATES ───────────────────────────────────────────────────
  // Truncate then insert — the mix of triggers makes upsert by composite
  // key noisy and the volume is small (< 100 rows). Easier to redo.
  await db.execute(sql`TRUNCATE risk_template RESTART IDENTITY`);

  const risks = [
    // Site vitrine
    { serviceId: "site-vitrine", severity: "low", title: "Contenus livrés au compte-gouttes", mitigation: "Phase rédaction parallèle avec réunion hebdo, contrat avec deadlines contractuelles côté client.", triggers: [] },
    { serviceId: "site-vitrine", severity: "medium", title: "Migration SEO depuis l'ancien site", mitigation: "Audit SEO préalable, plan de redirections 301 testé en staging, monitoring Search Console post-livraison 30j.", triggers: ["hasExistingSite=true"] },
    { serviceId: "site-vitrine", severity: "low", title: "Performance Core Web Vitals dégradée", mitigation: "Budget perf contractualisé (LCP < 2.5s, CLS < 0.1, INP < 200ms). Lighthouse CI bloquant en pipeline.", triggers: [] },

    // SaaS
    { serviceId: "saas", severity: "high", title: "Multi-tenant : isolation données clients", mitigation: "Row-level security Postgres testée par fuzz testing, audit Nicolas sur chaque PR critique, dry-run d'un cross-tenant attempt.", triggers: ["multi_tenant=true"] },
    { serviceId: "saas", severity: "medium", title: "Webhooks Stripe non idempotents", mitigation: "Table de déduplication par event_id, tests d'idempotence Pest, retry exponentiel + dead letter queue.", triggers: ["billing=true"] },
    { serviceId: "saas", severity: "medium", title: "Performance sous charge (>500 users)", mitigation: "Load test k6 dès la semaine 4, indexes Postgres revus par Nicolas, queue jobs offload via Horizon.", triggers: ["users=large", "users=huge"] },
    { serviceId: "saas", severity: "high", title: "RGPD pour grands comptes", mitigation: "DPA template signé avant Discovery, registre traitements, AIPD pour processings sensibles, audit 1 sprint dédié si SOC2.", triggers: ["compliance=soc2", "compliance=iso27001"] },

    // Outil interne
    { serviceId: "outil-interne", severity: "medium", title: "Adoption faible par les utilisateurs", mitigation: "Workshop UX dès Discovery avec 3 utilisateurs cibles, prototype Figma testé J+5, formation 2h après livraison.", triggers: [] },
    { serviceId: "outil-interne", severity: "medium", title: "Intégration ERP fragile (Sage / Cegid)", mitigation: "Couche d'abstraction (anti-corruption layer), retry + queue, dry-run sur sandbox avant prod, monitoring ad hoc.", triggers: ["erp=sage", "erp=cegid"] },
    { serviceId: "outil-interne", severity: "low", title: "Données existantes incohérentes (Excel)", mitigation: "Phase 0 nettoyage données 3-5j, scripts d'import idempotents, validation manuelle cas particuliers.", triggers: [] },

    // E-commerce
    { serviceId: "ecommerce", severity: "high", title: "Disponibilité pendant pics de vente", mitigation: "SLA 99,9 % contractuel, autoscaling configuré, load test pré-Black Friday, runbook incident, astreinte 7j/7.", triggers: [] },
    { serviceId: "ecommerce", severity: "medium", title: "Tracking server-side conforme RGPD", mitigation: "GTM Server + Consent Mode, audit DPA des sous-traitants (Stripe, Meta CAPI, GA4), Bannière CMP custom.", triggers: [] },
    { serviceId: "ecommerce", severity: "medium", title: "Logistique multi-transporteurs", mitigation: "Adapter pattern par transporteur, tests d'envoi réels en staging, gestion des erreurs API par retry + alerte.", triggers: [] },

    // App mobile
    { serviceId: "app-mobile", severity: "high", title: "Refus stores Apple/Google", mitigation: "Audit guidelines avant build (review checklist 40 points), TestFlight + internal track J+(durée-1sem) pour itérer.", triggers: [] },
    { serviceId: "app-mobile", severity: "medium", title: "Performance native (BLE, AR, GPS)", mitigation: "POC technique en semaine 1 sur la feature à risque, fallback graceful documenté, profiling Xcode Instruments.", triggers: [] },

    // Refonte
    { serviceId: "refonte", severity: "high", title: "Migration data lourde sans interruption", mitigation: "Stratégie dual-write 2 sem, sprint cutover dédié, rollback plan documenté et testé en staging.", triggers: ["dataMigration=true", "currentVolume=huge"] },
    { serviceId: "refonte", severity: "high", title: "Stack étrangère (Python/Java/.NET)", mitigation: "On orient vers spécialiste de la stack ou on propose réécriture from scratch en Laravel — pas d'expert .NET interne.", triggers: ["currentStack=dotnet", "currentStack=python", "currentStack=java"] },

    // SEO
    { serviceId: "seo", severity: "medium", title: "Effets longs (4-8 semaines avant premiers résultats)", mitigation: "Roadmap 90j publiée dès le mois 1, reporting Looker mensuel, recovery plan documenté si pénalité Google.", triggers: [] },
    { serviceId: "seo", severity: "low", title: "Concurrence agressive sur le secteur", mitigation: "Audit concurrentiel inclus, stratégie longue traîne + autorité E-E-A-T, contenu vidéo lié pour différenciation.", triggers: ["competition=high"] },

    // Ads
    { serviceId: "ads", severity: "high", title: "Tracking serveur défaillant → mesures fausses", mitigation: "GTM Server + tests d'événements complets en pré-prod, dashboard de réconciliation CRM × Ads bi-mensuel.", triggers: [] },
    { serviceId: "ads", severity: "medium", title: "Budget media trop bas pour notre stack", mitigation: "Refus en dessous de 5 k€/mois, orientation vers freelance ou agence Ads classique. Réévaluation à 6 mois.", triggers: ["monthlyBudget=small"] },

    // Vidéo
    { serviceId: "video", severity: "low", title: "Cadence de tournage non tenue côté client", mitigation: "Calendrier de tournage signé en S0, deuxième session de rattrapage prévue à mi-trimestre.", triggers: [] },

    // Maintenance
    { serviceId: "maintenance", severity: "high", title: "Code orphelin non documenté", mitigation: "Audit Flash 5j obligatoire avant onboarding, run-book créé et tenu à jour, accès aux 3 personnes minimum.", triggers: ["isExisting=true"] },
    { serviceId: "maintenance", severity: "medium", title: "CVE majeure pendant la nuit", mitigation: "Astreinte 7j/7 (Premium) ou 5j (Scale), SLA réponse 30 min Premium / 4h Scale, runbook incident à jour.", triggers: ["criticality=critical"] },

    // Sécurité / RGPD
    { serviceId: "securite-rgpd", severity: "high", title: "Audit CNIL sur 6 mois", mitigation: "Registre traitements + DPA + AIPD à jour, support juridique inclus, runbook d'audit avec docs prêts à fournir sous 48h.", triggers: ["teamSize=large"] },
    { serviceId: "securite-rgpd", severity: "medium", title: "AI Act applicable (systèmes haut risque)", mitigation: "Évaluation par système, documentation technique, tests biais, monitoring continu. Conseil juridique externe inclus.", triggers: ["aiSystems=4plus"] },

    // Audit technique
    { serviceId: "audit-technique", severity: "low", title: "Manque d'accès aux ressources clients", mitigation: "Liste d'accès envoyée 1 sem avant, NDA + DPA signés, fallback grey-box si accès partiels uniquement.", triggers: [] },
    { serviceId: "audit-technique", severity: "medium", title: "Découvertes critiques imprévues", mitigation: "Buffer 20% inclus, restitution intermédiaire à mi-parcours pour arbitrer scope, plan de remédiation chiffré.", triggers: [] },
  ];

  for (const r of risks) {
    await db.insert(riskTemplate).values(r);
  }
  console.log(`✓ risk_template: ${risks.length} risks inserted`);

  // ── PHASING TEMPLATES ─────────────────────────────────────────────────
  // 3 scales × 12 services = ~36 entries. Each gives the AI a concrete
  // skeleton it can adapt week-by-week.
  await db.execute(sql`TRUNCATE phasing_template RESTART IDENTITY`);

  const phasings = [
    // SaaS · Standard (mid)
    { serviceId: "saas", scale: "mid", week: 1, weekName: "Auth + base de données", tasks: ["Repo + CI/CD Scaleway", "Modélisation BDD (8-12 tables)", "Auth Filament + rôles", "Premier déploiement staging"], clientDeliverable: "Maquettes Figma 8 écrans Auth cliquables + URL staging", acceptanceCriteria: ["L'utilisateur peut créer un compte", "L'email de confirmation arrive en < 30s", "Le mot de passe oublié fonctionne"], qualityGates: ["Migrations Postgres réversibles", "Tests Pest > 70% sur AuthController", "Lighthouse perf > 90 sur /login"], fridayDemo: "Création de compte live, démo des rôles admin/user." },
    { serviceId: "saas", scale: "mid", week: 2, weekName: "Espace client + facturation", tasks: ["Stripe Checkout + webhooks idempotents", "Espace client onboarding", "Plans tarifaires (Stripe Products)", "Page facture historique"], clientDeliverable: "Tunnel Stripe complet sur staging avec carte de test", acceptanceCriteria: ["L'utilisateur peut souscrire à un plan", "La facture PDF s'envoie par email", "L'annulation downgrade en fin de période"], qualityGates: ["Webhooks Stripe idempotents (test fuzz)", "Couverture > 75% sur BillingService"], fridayDemo: "Souscription complète + facture envoyée live." },
    { serviceId: "saas", scale: "mid", week: 3, weekName: "Cœur métier #1", tasks: ["Implémentation feature business clé #1", "Tests E2E Playwright", "Pages d'aide / tooltips", "Notifications in-app"], clientDeliverable: "Feature business #1 utilisable en staging", acceptanceCriteria: ["Le workflow métier principal fonctionne de bout en bout", "Les notifications arrivent en temps réel"], qualityGates: ["Tests E2E Playwright sur le happy path", "Pas de régression sur staging"], fridayDemo: "Démo du workflow métier #1 en conditions réelles." },
    { serviceId: "saas", scale: "mid", week: 4, weekName: "Cœur métier #2 + intégrations", tasks: ["Feature business #2", "Intégration API tierce (CRM/ERP)", "Tableau de bord client", "Exports PDF/Excel"], clientDeliverable: "Tableau de bord + exports fonctionnels", acceptanceCriteria: ["Les exports PDF/Excel se génèrent en < 10s", "Les données du CRM sont synchronisées"], qualityGates: ["Tests d'intégration sur API tierce avec mocks + sandbox", "Charge testée à 100 req/s sans dégradation"], fridayDemo: "Tableau de bord rempli + export PDF live." },
    { serviceId: "saas", scale: "mid", week: 5, weekName: "Polish UX + perf + sécu", tasks: ["Refonte UX micro-interactions", "Audit Lighthouse + correctifs perf", "Audit sécu OWASP top 10", "Tests de charge"], clientDeliverable: "Application polish + rapport audit sécu", acceptanceCriteria: ["Lighthouse perf > 95 sur les pages clés", "Aucune vulnérabilité OWASP critique ou élevée"], qualityGates: ["Lighthouse CI bloquant en pipeline", "Audit OWASP avec rapport remis"], fridayDemo: "Comparatif perf avant/après + tour des fixes UX." },
    { serviceId: "saas", scale: "mid", week: 6, weekName: "UAT + Go-Live", tasks: ["Recette client (UAT)", "Documentation utilisateur", "Formation 2h", "Mise en production"], clientDeliverable: "Application en production + doc + accès admin", acceptanceCriteria: ["Tous les tests UAT sont validés par le client", "L'application est accessible en production"], qualityGates: ["UAT sign-off du client par mail", "Backup Postgres automatisé configuré", "Monitoring Sentry + uptime ping actifs"], fridayDemo: "Application en production accessible + cérémonie de livraison." },

    // Site vitrine · Performance (mid)
    { serviceId: "site-vitrine", scale: "mid", week: 1, weekName: "Setup + maquettes finales", tasks: ["Repo Next.js + déploiement Vercel/CF", "Design system Tailwind", "Maquettes Figma 5-10 pages clés", "Setup CMS (Sanity/Strapi)"], clientDeliverable: "Maquettes Figma toutes les pages clés + URL staging vide", acceptanceCriteria: ["Toutes les pages clés ont une maquette validée", "Le design system couvre tous les composants"], qualityGates: ["Lighthouse perf > 95 sur la home staging", "Validation accessibilité WCAG AA sur les composants critiques"], fridayDemo: "Walkthrough des maquettes + premier déploiement staging." },
    { serviceId: "site-vitrine", scale: "mid", week: 2, weekName: "Pages éditoriales + intégration", tasks: ["Intégration toutes les pages clés", "Composants réutilisables", "Connexion CMS", "Premier round de contenu"], clientDeliverable: "URL staging avec toutes les pages éditoriales en place", acceptanceCriteria: ["Toutes les pages clés sont navigables", "Le CMS permet l'édition par l'équipe"], qualityGates: ["Tests Playwright sur la navigation principale", "Lighthouse > 90 sur 5 pages random"], fridayDemo: "Tour complet du site staging + démo du CMS éditeur." },
    { serviceId: "site-vitrine", scale: "mid", week: 3, weekName: "Blog SEO + tracking", tasks: ["Architecture blog SEO", "Schema.org structured data", "Tracking GA4 + Search Console", "Sitemap + robots"], clientDeliverable: "Blog SEO opérationnel + 3 articles seed + tracking live", acceptanceCriteria: ["Search Console reçoit les pages indexables", "Schema.org valide via Rich Results Test"], qualityGates: ["Audit SEO technique passé (sitemap, canonicals, hreflang)", "GA4 reçoit des events propres"], fridayDemo: "Démo du blog en mode édition + walk-through analytics." },
    { serviceId: "site-vitrine", scale: "mid", week: 4, weekName: "Conversions + formulaires", tasks: ["Formulaires de contact + intégration CRM", "A/B testing setup (optionnel)", "Pages de conversion (devis, contact)", "Emails transactionnels"], clientDeliverable: "Formulaires + CRM opérationnels + emails branchés", acceptanceCriteria: ["Les leads arrivent dans le CRM en < 30s", "L'email de confirmation est envoyé"], qualityGates: ["Honeypot + rate limit anti-spam", "Tests d'intégration CRM"], fridayDemo: "Soumission live d'un formulaire + arrivée dans CRM." },
    { serviceId: "site-vitrine", scale: "mid", week: 5, weekName: "Polish + go-live", tasks: ["Migration redirections 301 si refonte", "Migration DNS", "Audit perf final", "Mise en production"], clientDeliverable: "Site en production sur le domaine final", acceptanceCriteria: ["Le site répond sur le domaine final en HTTPS", "Aucune régression vs staging"], qualityGates: ["Test plan de redirections 301 (toutes URLs anciennes redirigées)", "Lighthouse > 95 en prod sur 5 pages clés"], fridayDemo: "Site live + validation Search Console post-migration." },

    // Outil interne · Pro (mid)
    { serviceId: "outil-interne", scale: "mid", week: 1, weekName: "Discovery métier + maquettes", tasks: ["3 workshops métier avec utilisateurs cibles", "Cartographie du workflow actuel", "Maquettes Figma des écrans clés", "Validation avec 3 utilisateurs"], clientDeliverable: "Maquettes Figma validées par 3 utilisateurs réels + cartographie workflow", acceptanceCriteria: ["3 utilisateurs cibles ont validé le parcours", "Le workflow est cartographié de bout en bout"], qualityGates: ["Validation interactive des maquettes par 3 personnes minimum"], fridayDemo: "Restitution du Discovery + tour des maquettes Figma." },
    { serviceId: "outil-interne", scale: "mid", week: 2, weekName: "Auth + modèle de données", tasks: ["Auth Filament avec rôles métier", "Modélisation BDD (12-20 tables)", "Premier import des données existantes (Excel)", "Premier dashboard"], clientDeliverable: "URL staging + premiers comptes créés + données importées", acceptanceCriteria: ["Les utilisateurs métier peuvent se connecter", "Les données Excel sont importées sans perte"], qualityGates: ["Migrations réversibles", "Script d'import idempotent (relançable)"], fridayDemo: "Connexion live d'un utilisateur métier + tour du dashboard." },
    { serviceId: "outil-interne", scale: "mid", week: 3, weekName: "Workflow #1 (cœur métier)", tasks: ["Implémentation du workflow principal", "Génération de documents (PDF)", "Notifications email", "Tableau Kanban / pipeline"], clientDeliverable: "Workflow cœur métier opérationnel sur staging", acceptanceCriteria: ["Le workflow métier fonctionne de bout en bout", "Les documents PDF sont générés conformes"], qualityGates: ["Tests E2E sur le happy path", "Validation visuelle des PDFs par le client"], fridayDemo: "Démo du workflow complet en conditions réelles." },
    { serviceId: "outil-interne", scale: "mid", week: 4, weekName: "Intégrations ERP", tasks: ["Connexion Pennylane/Sage/Cegid", "Sync bidirectionnelle", "Anti-corruption layer", "Reporting comptable"], clientDeliverable: "Sync ERP fonctionnelle + reporting opérationnel", acceptanceCriteria: ["Les factures se créent dans Pennylane", "Les écritures comptables sont conformes"], qualityGates: ["Sandbox ERP testée avec retry exponentiel", "Reconciliation manuelle vs ERP sur 10 cas"], fridayDemo: "Création d'une mission → facture Pennylane live." },
    { serviceId: "outil-interne", scale: "mid", week: 5, weekName: "Reporting + automation", tasks: ["Tableaux de bord métier", "Relances automatiques", "Exports Excel/CSV", "Tests utilisateurs avec 5 personnes"], clientDeliverable: "Dashboards + automations fonctionnels", acceptanceCriteria: ["Les dashboards métier sont validés par le client", "Les relances automatiques s'envoient au bon moment"], qualityGates: ["Tests utilisateurs avec 5 personnes minimum", "Performance < 2s sur les dashboards les plus chargés"], fridayDemo: "Walkthrough utilisateur réel sur dashboards + démo des relances." },
    { serviceId: "outil-interne", scale: "mid", week: 6, weekName: "Recette + formation + go-live", tasks: ["Recette utilisateurs", "Formation 2h en visio", "Documentation utilisateur", "Mise en production"], clientDeliverable: "Outil en production + équipe formée + doc PDF", acceptanceCriteria: ["Toutes les fonctionnalités sont validées en recette", "L'équipe est autonome après la formation"], qualityGates: ["UAT sign-off", "Quiz post-formation > 80%", "Backup automatisé"], fridayDemo: "Outil live + remise des accès admin." },

    // Audit technique · Standard (mid)
    { serviceId: "audit-technique", scale: "mid", week: 1, weekName: "Onboarding + accès", tasks: ["NDA + DPA signés", "Accès repo Git + infra", "Liste des incidents connus", "Premier scan automatique"], clientDeliverable: "Rapport de scope finalisé + accès validés", acceptanceCriteria: ["Tous les accès demandés sont obtenus", "Le périmètre d'audit est validé par le client"], qualityGates: ["NDA + DPA signés", "Liste exhaustive des accès dans le scope doc"], fridayDemo: "Restitution périmètre + premier rapport scan auto." },
    { serviceId: "audit-technique", scale: "mid", week: 2, weekName: "Audit code + architecture", tasks: ["Code review architecture", "Patterns + anti-patterns", "Dépendances + CVE", "Premier rapport intermédiaire"], clientDeliverable: "Rapport intermédiaire 15-20 pages + diagramme C4", acceptanceCriteria: ["Le rapport identifie au minimum 5 risques techniques", "Le diagramme C4 reflète l'architecture réelle"], qualityGates: ["Revue par 2 seniors minimum", "Score de qualité code documenté avec metric"], fridayDemo: "Restitution intermédiaire avec arbitrage sur le scope final." },

    // Maintenance retainer · Scale (mid)
    { serviceId: "maintenance", scale: "mid", week: 1, weekName: "Onboarding + audit Flash", tasks: ["Audit Flash 5j (code, infra, sécu, dette)", "Setup Sentry + Better Stack", "Runbook initial", "Mise en place CI/CD si manquant"], clientDeliverable: "Rapport audit Flash + monitoring opérationnel", acceptanceCriteria: ["Sentry remonte les erreurs en temps réel", "L'équipe a accès au runbook"], qualityGates: ["Audit Flash livré (15-25 pages)", "Sentry + Better Stack configurés et testés"], fridayDemo: "Restitution audit + tour des outils de monitoring." },
  ];

  for (const p of phasings) {
    await db.insert(phasingTemplate).values(p);
  }
  console.log(`✓ phasing_template: ${phasings.length} templates inserted`);

  console.log("\nKnowledge base seeded successfully ✓");
}

main().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
