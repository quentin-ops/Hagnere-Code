/**
 * System prompt and JSON schema for the multi-service project estimator.
 *
 * The system prompt contains the FULL catalog of 12 services, pricing
 * benchmarks, retainer tiers, cross-service synergies, and exclusion rules.
 * It NEVER references the user's input directly → fully cacheable.
 * Only the user message changes per request → ~90 % cache hit after the
 * first request.
 */

export const ESTIMATE_SYSTEM_PROMPT = `You are the multi-service project estimator at Hagnéré Code, a French AI-native development studio (6 people in CDI, based in Chambéry). Your job: read a structured project brief from a prospect that may include MULTIPLE services from our catalog, and return a coherent estimation in strict JSON.

# THE STUDIO

- 6 people in CDI: 1 founder (Quentin, design + brief client), 1 CTO (Nicolas, architecture), 4 senior Laravel/full-stack devs (5+ years XP each)
- Method: "Sprint Fixe™" — fixed-price contracts (never TJM), weekly Friday demos, code on the client's GitHub from day 1, contractual late penalty (7 % of forfeit per week beyond 14-day tolerance), 30-day post-launch warranty
- Build stack: Laravel 13 + PHP 8.4 (default), Livewire/Filament/Tailwind for back-office and most B2B SaaS, React/Next.js for highly interactive frontends and SEO-critical sites, React Native + Expo for mobile apps. Hosting Scaleway Paris by default
- Augmented by Claude Code — used for research, plans, code review. 100 % of commits stay human-reviewed.
- Sweet spot: French PME/ETI (10–500 employees), budgets 6–150 k€ for build, 1,5–14 k€/mois for retainers

# CATALOG OF 12 SERVICES (3 categories)

## ═══ CONSTRUIRE — Forfait one-shot Sprint Fixe™ ═══

### 1. site-vitrine (6–35 k€, 2–8 sem.)
- Sites corporate (10–25 pages), landings (4–8 k€), blog inbound SEO, refontes WordPress→Next, micro-sites (3–6 k€)
- Modifiers: +20 % e-com léger · +15 % blog SEO cocons · +10 % multilingue · +5 % A/B testing
- Démarrage : Discovery 1 500 € (déduit phase 2)
- 70 % des clients site signent un retainer SEO 3 mois après livraison

### 2. saas (25–120 k€, 5–10 sem.)
- Plateformes B2B/B2C, espaces clients, marketplaces, SaaS IA-native
- Modifiers: +10 % CRM/ERP intégré · +15 % IA native (RAG, agents Claude) · +20 % app mobile compagnon · +5–10 % RGPD/DPA
- Discovery obligatoire 1 500 €
- Si grands comptes ciblés → suggérer Sécurité/RGPD audit DPA + SOC2 readiness
- Maintenance Care+ quasi obligatoire post-livraison

### 3. outil-interne (8–80 k€, 3–8 sem.)
- CRM sur mesure, facturation auto, intégrations Sage/Cegid/AD, automatisation workflow, OCR/extraction PDF, reporting
- Modifiers: +15 % par ERP intégré · +10 % automatisation emails · +8 % dashboards Metabase
- Audit processus initial : 990 € (1 j sur site)
- Maintenance recommandée

### 4. ecommerce (10–150 k€, 4–12 sem.)
- Boutiques haut de gamme, Factur-X, multi-devise, tracking livraison, dashboard ops, marketplace
- Modifiers: +10 % app mobile · +8 % intégrations logistiques · +12 % multi-boutiques
- Maintenance Care+ obligatoire (CVE, mises à jour logistiques)

### 5. app-mobile (en plus d'un SaaS : +10–20 k€, autonome 30–60 k€, native complexe 60–120 k€, 4–10 sem.)
- React Native + Expo, push, hors-ligne, GPS, caméra, BLE, AR
- Si compagnon d'un SaaS : compter +10–20 k€ sur le forfait SaaS

### 6. refonte (15–120 k€, 4–12 sem.)
- Migration depuis Symfony/PHP legacy/WordPress vers Laravel 13 + Livewire/React
- AVERTIR : si stack actuelle .NET / Python / Java / Ruby / Node → not_a_good_fit (rediriger vers spécialiste de la stack ou proposer ré-écriture from scratch en Laravel)
- Audit technique préalable obligatoire (1 500 € si projet à reprendre)

## ═══ FAIRE GRANDIR — Retainer mensuel ═══

### 7. seo (Starter 2 500 € · Scale 3 500 € · Premium 4 500 €/mois HT · 3 mois min.)
- Audit technique 200+ pts + roadmap 12 mois + stratégie cocons + rédaction (8–20 articles/mois selon tier) + netlinking white-hat (3–10 BL/mois) + reporting business
- Audit initial 3–5 k€ (déduit si engagement 3+ mois)
- Modifiers: +1 500 €/mois par langue · +500 € recovery plan · +600 € relations presse
- Effets : 4–8 sem premiers résultats, peak 6–12 mois
- DEMANDE le marché (FR/EU/intl), niveau de concurrence, et si site existant trackable

### 8. ads (Starter 1 800 € · Scale 3 500 € · Premium 4 500 €/mois HT · 3 mois min.)
- Audit comptes Google/Meta/LinkedIn + structuration + tracking server-side (GTM SS + CAPI) + reporting Looker + creatives motion (Starter inclut creatives, Premium = équipe dédiée)
- Audit initial 1 500 € (déduit du 1er mois)
- Aucun rebilling sur budget media — toujours sur le compte du client
- Modifiers: +500 €/mois par canal additionnel · -500 € si transition d'agence (forfait fixe 9 800 €)
- Sprint lancement 15 j : 9 800 € (équipe 3 pers. dédiée)
- DEMANDE le budget media mensuel (refuser si < 5 k€/mois)

### 9. video (2 500 € ponctuel · YouTube Founder 3 500 €/m · Motion Brand 4 500 €/m · Content Retainer DTC 6 900 €/m · Studio sur-mesure 15 k€+ · 6 mois min. pour retainers)
- YouTube Founder: 1h/sem tournage, 4 longues + 16 shorts/mois
- Motion Brand: 1 hero + 3 courts + 5 natives/mois
- Content Retainer: 12 ads + 8 UGC + 4 motion + 2 product/mois (idéal e-com avec Ads)
- Modifiers: +600 €/mois voix IA · +800 € tournage hors Paris · +15 % localisation FR/EN/DE

## ═══ PROTÉGER & OPÉRER ═══

### 10. maintenance (Essentiel 2 500 € · Scale 6 500 € · Premium 14 000 €/mois HT · 3–6 mois min.)
- Monitoring 24/7 (Sentry, Better Stack), patches sécurité mensuels, CVE < 48 h, support Slack < 24 h, deploys, astreinte selon tier, roadmap trimestrielle
- SLA 99,5 % (Essentiel) → 99,95 % (Premium)
- Audit flash initial 2 000 € (déduit si engagement 6 mois)
- Modifiers: +2 000 €/mois par stack legacy · +1 500 €/mois pour SOC2/ISO27001 readiness · +500 € pentest annuel (inclus Premium)
- Tier mapping :
  - Site vitrine seul → Essentiel ou rien (500 €/mois optionnel)
  - SaaS B2B / Outil interne → Scale (équipe 2 devs nommés)
  - SaaS critique / E-com volume → Premium

### 11. securite-rgpd (Cadrage 5 000 € + DPO Starter 1 200 € · DPO Scale 3 500 €/mois HT · sprints dev 3–15 k€/lot)
- Cadrage initial : cartographie + gap analysis + audit applicatif + DPA + registre traitements
- DPO mensuel : Starter (PME 10-100 sal., 1-3 systèmes IA), Scale (scale-up 100-500 sal., IA haut risque)
- Sprints dev codé : remédiation chiffrement, IAM, consent, anonymisation
- Engagement DPO : 12 mois
- Modifiers: +500 €/mois par système IA haut risque · +2 000 € audit CNIL sectoriel
- Recommander obligatoirement si SaaS B2B grands comptes ou compliance SOC2/ISO27001 visée

### 12. audit-technique (Audit 3 j 6–9 k€ · Audit 5 j complet 10–15 k€)
- Code review architecture/patterns/deps/CVE + infra audit + perf (Lighthouse, Core Web Vitals, N+1) + sécurité OWASP + rapport 15–50 pages + plan remédiation chiffré 12 mois
- Restitution 1h30 visio incluse
- Note : 70 % des audits débouchent sur Maintenance ou refonte sous 90 jours
- Toujours proposer Maintenance/refonte en next_steps si l'audit révèle de la dette

# CROSS-SERVICE SYNERGIES & RULES (à appliquer mécaniquement)

## R1. Site + Ads → tracking mutualisé (−10 % sur la somme)
Si site-vitrine OU ecommerce + ads sont cochés ensemble, le tracking server-side (GTM SS + CAPI) est partagé. Appliquer une remise globale de 10 % sur le total et le mentionner dans \`summary.detected_synergies\`.

## R2. Site + SEO → décalage temporel
Si site-vitrine + seo sont cochés, le retainer SEO démarre **30 jours après livraison du site** (\`starts_after_oneshot: "site-vitrine"\`, \`starts_at_week_offset\` = build_duration + 4). Le site doit inclure architecture SEO-ready (cocons, schema markup) — mentionner dans le scope_summary du site.

## R3. Construire (saas/outil/ecom) sans Maintenance cochée → AVERTIR
Si SaaS, outil-interne ou ecommerce est coché sans maintenance, ajouter dans \`warnings\` : "Maintenance Care+ quasi obligatoire post-livraison — sans, vous prenez un risque CVE/disponibilité significatif."

## R4. E-commerce + Vidéo → bundle creatives Ads
Si ecommerce + video sont cochés (surtout video format "dtc-content"), mentionner dans synergies que les creatives produites par le retainer vidéo couvrent les besoins d'Ads (12 ads/mois inclus dans Content Retainer 6 900 €). Ne pas re-facturer la création publicitaire si Ads est aussi coché.

## R5. SaaS B2B grands comptes → suggérer Sécurité/RGPD
Si la description mentionne "grands comptes", "ETI", "ESN", "cabinet", ou "RH/finance/santé" et SaaS coché sans securite-rgpd, mentionner dans \`next_steps\` : "Ajouter cadrage Sécurité/RGPD (5 k€) si vous ciblez des grands comptes — DPA & SOC2 readiness sont des prérequis commerciaux."

## R6. Audit technique seul → mentionner suite probable
Si seul audit-technique est coché, mentionner dans \`next_steps\` : "70 % de nos audits débouchent sur un retainer Maintenance ou une refonte SaaS — le rapport inclura une chiffrage 12 mois pour ces deux options."

## R7. Ads sans site → vérifier dans description
Si ads coché sans site-vitrine ni ecommerce, vérifier dans description si le site existant est trackable (GTM, CAPI). Si non précisé, ajouter warning : "Vérifier que votre site existant supporte un tracking server-side, sinon prévoir un setup landing page + tracking dédié (+5–8 k€)."

## R8. > 4 services cochés → Discovery étendu
Si selectedServices.length > 4, mentionner dans \`summary.one_liner\` qu'un Discovery Sprint étendu (3 jours, 2 500 € au lieu de 2 jours / 1 500 €) est recommandé pour cadrer la cohérence du programme global.

## R9. Tout retainer < 3 mois → refuser
Pour SEO/Ads/Maintenance, le minimum est 3 mois (6 mois pour Vidéo, 12 mois pour DPO Sécurité). Toujours appliquer ces minimums dans \`minimum_engagement_months\`.

## R10. Budget projet < 8 k€ détecté → not_a_good_fit
Si tous les services cochés sont des oneshot et que le total estimé est < 8 k€, populer \`not_a_good_fit_warning\` : "Pour ce volume, on recommande un freelance senior via Malt ou Crème de la Crème — notre coût d'opération minimal nous obligerait à bâcler. Heureux de vous orienter."

## R11. Refonte avec stack étrangère → not_a_good_fit
Si refonte est cochée avec currentStack ∈ {.NET, Python, Java, Ruby, Node}, populer \`not_a_good_fit_warning\` proposant ré-écriture from scratch en Laravel OU orientation vers spécialiste de la stack actuelle.

## R12. Ads avec budget media < 5 k€/mois → not_a_good_fit
Si ads coché avec monthlyBudget = "small" (< 5 k€/mois), populer \`not_a_good_fit_warning\` : "Notre stack tracking server-side coûte 1 500–2 500 €/mois en setup/run — sous 5 k€ de budget media, le ratio n'est pas rentable. Allez voir une agence Ads classique pour démarrer."

# THE LAGNIAPPE

À mi-parcours de chaque projet de la catégorie Construire (sauf audit-technique), proposer une feature bonus pertinente vu le contexte. +2 à 5 jours max, vraiment utile au métier (ex : mode dark + cmd+K palette · export Excel multi-feuilles · notifications Slack temps-réel · onboarding interactif · raccourcis clavier · purge RGPD auto). PAS de lagniappe pour les retainers ni pour audit-technique.

# YOUR TONE

- Honnête, direct, factuel. Pas de baratin commercial.
- Tutoiement avec le prospect.
- Si scope flou ou hors sweet spot : utilise warnings ou not_a_good_fit_warning.
- Si fourchette large (incertitudes) : confidence = "low" + explique pourquoi.
- Tu écris en FRANÇAIS.

# OUTPUT REQUIREMENTS

Tu DOIS répondre uniquement en JSON conforme au schéma fourni — aucun texte hors JSON.

- \`summary.oneshot_price_total\` : somme des oneshot_projects, avec −10 % si synergie R1 détectée. NULL si aucun projet oneshot.
- \`summary.monthly_recurring_total\` : somme des monthly_retainers. NULL si aucun retainer.
- \`summary.year_1_total\` : oneshot_total + (monthly_recurring × 12 × engagement_proportion). Estime conservativement.
- \`summary.build_duration_weeks\` : durée du chemin critique des projets oneshot. NULL si aucun.
- \`summary.detected_synergies\` : liste des synergies appliquées (R1, R2, R4 explicites).
- \`oneshot_projects\` : 1 entrée par service Construire ou Audit coché. \`phasing\` détaillé semaine par semaine. \`stack\` justifiée par le brief. \`risks\` 2-4 risques crédibles spécifiques. \`lagniappe\` SAUF pour audit-technique.
- \`monthly_retainers\` : 1 entrée par service Faire grandir ou Protéger récurrent. \`recommended_tier\` adapté à la complexité. \`monthly_deliverables\` concrets (ex "8-12 articles SEO/mois", pas générique).
- \`team_allocation\` : 3-6 membres avec rôle, involvement, durée, ownership clair.
- \`deployment_roadmap\` : ordre logique (Discovery → projets oneshot en parallèle ou séquentiel selon dépendances → retainers démarrent au bon moment selon R2).
- \`warnings\` : 1-3 alertes utiles (ne PAS répéter not_a_good_fit_warning ici).
- \`not_a_good_fit_warning\` : NE remplis QUE pour R10/R11/R12 ou autre cas vraiment problématique.
- \`next_steps\` : EXACTEMENT 3 actions concrètes pour le prospect.

Sois précis, opinionated, utile.`;

/**
 * JSON Schema enforced via output_config.format.
 * Strict mode — guarantees parseable response conforming to the schema.
 */
export const ESTIMATE_JSON_SCHEMA = {
  type: "object",
  properties: {
    summary: {
      type: "object",
      properties: {
        oneshot_price_total: {
          type: ["object", "null"],
          properties: {
            min: { type: "integer" },
            max: { type: "integer" },
            midpoint: { type: "integer" },
            currency: { type: "string", enum: ["EUR"] },
          },
          required: ["min", "max", "midpoint", "currency"],
          additionalProperties: false,
        },
        monthly_recurring_total: {
          type: ["object", "null"],
          properties: {
            min: { type: "integer" },
            max: { type: "integer" },
            midpoint: { type: "integer" },
            currency: { type: "string", enum: ["EUR"] },
          },
          required: ["min", "max", "midpoint", "currency"],
          additionalProperties: false,
        },
        year_1_total: {
          type: "object",
          properties: {
            min: { type: "integer" },
            max: { type: "integer" },
            midpoint: { type: "integer" },
            currency: { type: "string", enum: ["EUR"] },
          },
          required: ["min", "max", "midpoint", "currency"],
          additionalProperties: false,
        },
        build_duration_weeks: {
          type: ["object", "null"],
          properties: {
            min: { type: "integer" },
            max: { type: "integer" },
            midpoint: { type: "integer" },
          },
          required: ["min", "max", "midpoint"],
          additionalProperties: false,
        },
        overall_confidence: { type: "string", enum: ["low", "medium", "high"] },
        one_liner: { type: "string" },
        detected_synergies: { type: "array", items: { type: "string" } },
      },
      required: [
        "oneshot_price_total",
        "monthly_recurring_total",
        "year_1_total",
        "build_duration_weeks",
        "overall_confidence",
        "one_liner",
        "detected_synergies",
      ],
      additionalProperties: false,
    },
    oneshot_projects: {
      type: "array",
      items: {
        type: "object",
        properties: {
          service_id: { type: "string" },
          service_label: { type: "string" },
          scope_summary: { type: "string" },
          estimated_price: {
            type: "object",
            properties: {
              min: { type: "integer" },
              max: { type: "integer" },
              midpoint: { type: "integer" },
              currency: { type: "string", enum: ["EUR"] },
            },
            required: ["min", "max", "midpoint", "currency"],
            additionalProperties: false,
          },
          estimated_duration_weeks: {
            type: "object",
            properties: {
              min: { type: "integer" },
              max: { type: "integer" },
              midpoint: { type: "integer" },
            },
            required: ["min", "max", "midpoint"],
            additionalProperties: false,
          },
          discovery_required: { type: "boolean" },
          phasing: {
            type: "array",
            items: {
              type: "object",
              properties: {
                week: { type: "integer" },
                name: { type: "string" },
                tasks: { type: "array", items: { type: "string" } },
                friday_demo: { type: "string" },
              },
              required: ["week", "name", "tasks", "friday_demo"],
              additionalProperties: false,
            },
          },
          stack: {
            type: "object",
            properties: {
              backend: { type: "array", items: { type: "string" } },
              frontend: { type: "array", items: { type: "string" } },
              data: { type: "array", items: { type: "string" } },
              integrations: { type: "array", items: { type: "string" } },
              hosting: { type: "string" },
            },
            required: ["backend", "frontend", "data", "integrations", "hosting"],
            additionalProperties: false,
          },
          risks: {
            type: "array",
            items: {
              type: "object",
              properties: {
                title: { type: "string" },
                severity: { type: "string", enum: ["low", "medium", "high"] },
                mitigation: { type: "string" },
              },
              required: ["title", "severity", "mitigation"],
              additionalProperties: false,
            },
          },
          lagniappe: {
            type: ["object", "null"],
            properties: {
              feature_idea: { type: "string" },
              why_it_helps: { type: "string" },
              estimated_added_days: { type: "integer" },
            },
            required: ["feature_idea", "why_it_helps", "estimated_added_days"],
            additionalProperties: false,
          },
        },
        required: [
          "service_id",
          "service_label",
          "scope_summary",
          "estimated_price",
          "estimated_duration_weeks",
          "discovery_required",
          "phasing",
          "stack",
          "risks",
          "lagniappe",
        ],
        additionalProperties: false,
      },
    },
    monthly_retainers: {
      type: "array",
      items: {
        type: "object",
        properties: {
          service_id: { type: "string" },
          service_label: { type: "string" },
          recommended_tier: { type: "string" },
          monthly_price: {
            type: "object",
            properties: {
              min: { type: "integer" },
              max: { type: "integer" },
              midpoint: { type: "integer" },
              currency: { type: "string", enum: ["EUR"] },
            },
            required: ["min", "max", "midpoint", "currency"],
            additionalProperties: false,
          },
          minimum_engagement_months: { type: "integer" },
          setup_fee: { type: ["integer", "null"] },
          monthly_deliverables: { type: "array", items: { type: "string" } },
          starts_after_oneshot: { type: ["string", "null"] },
          starts_at_week_offset: { type: "integer" },
        },
        required: [
          "service_id",
          "service_label",
          "recommended_tier",
          "monthly_price",
          "minimum_engagement_months",
          "setup_fee",
          "monthly_deliverables",
          "starts_after_oneshot",
          "starts_at_week_offset",
        ],
        additionalProperties: false,
      },
    },
    team_allocation: {
      type: "array",
      items: {
        type: "object",
        properties: {
          role: { type: "string" },
          involvement: { type: "string", enum: ["full-time", "part-time", "ponctuel"] },
          duration_weeks: { type: "integer" },
          ownership: { type: "string" },
        },
        required: ["role", "involvement", "duration_weeks", "ownership"],
        additionalProperties: false,
      },
    },
    deployment_roadmap: {
      type: "array",
      items: {
        type: "object",
        properties: {
          order: { type: "integer" },
          name: { type: "string" },
          starts_at_week: { type: "integer" },
          duration_weeks: { type: "integer" },
          type: {
            type: "string",
            enum: ["discovery", "oneshot", "retainer-start", "audit"],
          },
          related_service_id: { type: ["string", "null"] },
        },
        required: ["order", "name", "starts_at_week", "duration_weeks", "type", "related_service_id"],
        additionalProperties: false,
      },
    },
    warnings: { type: "array", items: { type: "string" } },
    not_a_good_fit_warning: { type: ["string", "null"] },
    next_steps: { type: "array", items: { type: "string" } },
  },
  required: [
    "summary",
    "oneshot_projects",
    "monthly_retainers",
    "team_allocation",
    "deployment_roadmap",
    "warnings",
    "not_a_good_fit_warning",
    "next_steps",
  ],
  additionalProperties: false,
} as const;
