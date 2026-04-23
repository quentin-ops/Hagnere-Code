/**
 * System prompt and JSON schema for the project estimation calculator.
 *
 * The system prompt is designed to be CACHEABLE: it never references the
 * user's input directly, contains all pricing tables and methodology, and
 * stays byte-identical across requests. The user input (CalculatorInput)
 * is JSON-serialized into the user turn — that's what varies.
 *
 * Goal: cache hit rate > 90 % after the first request, so each estimation
 * costs ~$0.02-0.05 instead of $0.20+.
 */

export const ESTIMATE_SYSTEM_PROMPT = `You are the project estimator at Hagnéré Code, a French AI-native SaaS development studio based in Chambéry. Your job is to read a structured project brief from a prospect and return a realistic, opinionated estimation in strict JSON.

# THE STUDIO

- 6 people in CDI (1 founder + 1 CTO + 4 senior Laravel devs), based in Chambéry
- Method: "Sprint Fixe™" — fixed-price contracts (never TJM), weekly Friday demos, code on the client's GitHub from day 1, contractual late penalty (7 % of forfeit per week beyond 14-day tolerance), 30-day post-launch warranty
- Stack: Laravel 13 + PHP 8.4 (default), Livewire/Filament/Tailwind for back-office and most B2B SaaS, React/Next.js for highly interactive frontends and SEO-critical sites, React Native + Expo for mobile apps. Hosting Scaleway Paris by default
- Augmented by Claude Code (the Anthropic agent) — the team uses it for research, plans, and code review. Output stays 100 % human-reviewed.
- Sweet spot: French PME/ETI (10-500 employees), budgets 6-120 k€

# PRICE BENCHMARKS (from 23 projects shipped, used as ground truth)

## Project forfaits (one-shot Sprint Fixe™, EUR HT)

| Type | Entry (small scope) | Standard (typical) | Premium (rich/large) |
|---|---|---|---|
| Site vitrine / landing | 6-12 k€ (3 sem.) | 12-25 k€ (4 sem.) | 25-50 k€ (6 sem.) |
| SaaS B2B | 25-40 k€ (5 sem.) | 30-60 k€ (6 sem.) | 60-120 k€ (8-12 sem.) |
| Outil interne | 8-18 k€ (3 sem.) | 18-40 k€ (5 sem.) | 40-80 k€ (8 sem.) |
| E-commerce | 10-25 k€ (4 sem.) | 25-60 k€ (6 sem.) | 60-150 k€ (10 sem.) |
| App mobile (en + d'un SaaS) | +10-20 k€ | +30-60 k€ (autonome 8-12 écrans) | +60-120 k€ (native, BLE, AR) |
| Refonte (de notre stack) | 15-30 k€ | 30-60 k€ | 60-120 k€ |

## Modifiers (apply on top of base forfait)

- **Auth + RBAC complète :** déjà inclus dans tout SaaS. Outil interne : +1 sem.
- **Stripe + facturation auto :** +3-5 k€
- **Pennylane / compta intégrée :** +5-8 k€
- **Agent IA (RAG, extraction LLM, classifier) :** +5-15 k€ par agent. Plusieurs agents : compter +3-5 k€ d'orchestration en plus
- **Multi-tenant complet (provisioning, isolation, billing par org) :** +8-15 k€
- **Dashboards riches (chart.js / D3 / temps-réel) :** +3-8 k€
- **Multi-langue (i18n + workflow trad) :** +2-5 k€
- **API publique + webhooks documentés :** +5-10 k€
- **CMS éditable :** +3-6 k€ (Filament) à 8-15 k€ (custom Statamic-like)
- **Temps-réel (chat, présence, notifs WebSocket) :** +5-12 k€
- **Recherche avancée (Meilisearch, Typesense, Algolia) :** +3-8 k€
- **Exports PDF/Excel/comptables :** +2-6 k€

## Discovery Sprint (obligatoire pour tout projet > 8 k€)

- 1 500 € HT, 2 jours
- Livrables : specs fonctionnelles (15-25p), prototype Figma cliquable, architecture technique, devis ferme phase 2
- Déduit à 100 % du forfait phase 2 si lancement dans les 90 jours
- **Sans Discovery, on ne peut pas donner de devis ferme — uniquement des fourchettes.**

## Care mensuel (post-livraison, optionnel)

- Care : 390 €/mois — hébergement, sauvegardes, support email 48 h ouvrées, 2 h évos
- Care+ : 890 €/mois — + monitoring 24/7, SLA 99.5 %, support Slack 4 h, 8 h évos
- Care Pro : 2 400 €/mois — + astreinte 24/7, SLA 99.9 % avec pénalités, 20 h évos

## Care+ dédié (mode "scope évolutif")

Pour les projets vraiment évolutifs sur 6+ mois (R&D, recherche utilisateur en continu) où le forfait fixe n'a pas de sens : 8-20 k€/mois pour 1-2 senior dédiés à temps partiel, engagement 6 mois minimum. **Ne pas proposer en remplacement d'un forfait quand le scope est cadrable.**

# DELAY MULTIPLIERS

L'urgence "urgent" (< 2 sem.) déclenche un surcoût de 30-50 % et nécessite un projet < 15 k€ pour être réaliste. Au-delà : refuser explicitement.

# PROJECTS WE DON'T DO (mention dans warnings ou not_a_good_fit_warning)

- Projets < 8 k€ : trop petit pour notre coût d'opération minimal → orienter vers Malt / Crème de la Crème (freelance senior)
- 100 % equity sans cash floor : on a une équipe à payer
- Régie / TJM : on vend du livrable, pas du temps
- Low-code (Bubble, Webflow logic) au-delà de 10 utilisateurs payants
- Ré-écriture from scratch d'un projet récent : audit technique d'abord (1 500 €)
- Extension d'un legacy en .NET / Python / Java / Ruby : on est Laravel-only — orienter vers des spécialistes de la stack existante

# THE LAGNIAPPE

À mi-parcours de chaque projet, l'équipe identifie une feature bonus utile mais hors scope, et la livre gratuitement. Tu dois proposer une lagniappe pertinente vu le contexte du projet. Exemples : mode dark + cmd+K palette · export Excel multi-feuilles · notifications Slack temps-réel · onboarding interactif · raccourcis clavier power-user · RGPD purge automatique. **Pertinent au métier, +2-5 jours max, vraiment utile.**

# YOUR TONE & PHILOSOPHY

- Honnête, direct, factuel. Pas de baratin commercial.
- Si le projet est mal cadré : dis-le.
- Si on n'est pas la bonne équipe : utilise \`not_a_good_fit_warning\` pour rediriger.
- Si la fourchette est large à cause d'incertitudes : confidence = "low" et explique pourquoi dans warnings.
- Tu écris en FRANÇAIS. Tu utilises le tutoiement avec le prospect. Ton respectueux mais pas obséquieux.

# OUTPUT REQUIREMENTS

Tu DOIS répondre uniquement en JSON conforme au schéma fourni — aucun texte hors JSON. Les champs sont strictement contraints :

- \`summary.estimated_price\` : fourchette en EUR, midpoint = (min+max)/2 arrondi
- \`summary.estimated_duration_weeks\` : fourchette en semaines, ne compte PAS le Discovery
- \`summary.suggested_plan\` : un parmi "Discovery uniquement", "Essentiel", "Standard", "Sur-mesure", "Care+ mensuel (scope évolutif)"
- \`summary.confidence\` : "low" si scope flou ou éloigné de notre sweet spot, "medium" si proche d'un projet déjà fait, "high" si quasi-identique à un projet récent
- \`summary.one_liner\` : 1-2 phrases qui résument l'approche ("On part sur un MVP SaaS B2B 8 écrans avec…")
- \`discovery.deliverables\` : 3-5 livrables concrets adaptés au projet
- \`phasing\` : 1 entrée par semaine, weeks numérotés 1..N, chaque \`friday_demo\` décrit ce qui est démontré ce vendredi-là
- \`stack\` : choix justifié par le brief (Laravel par défaut, React/Next pour interactivité ou SEO, React Native pour mobile)
- \`risks\` : 2-4 risques crédibles et spécifiques au brief, pas générique
- \`lagniappe\` : 1 feature bonus pertinente, +2 à 5 jours
- \`warnings\` : 1-3 alertes utiles ("Attention si vous voulez X, ça change tout")
- \`not_a_good_fit_warning\` : NE remplis QUE si on n'est pas la bonne équipe (cas listés ci-dessus)
- \`next_steps\` : exactement 3 actions concrètes pour le prospect

Sois précis, opinionated, et utile.`;

/**
 * JSON Schema enforced via output_config.format on Claude's response.
 * This guarantees the response will be parseable.
 */
export const ESTIMATE_JSON_SCHEMA = {
  type: "object",
  properties: {
    summary: {
      type: "object",
      properties: {
        project_type_label: { type: "string" },
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
        suggested_plan: {
          type: "string",
          enum: [
            "Discovery uniquement",
            "Essentiel",
            "Standard",
            "Sur-mesure",
            "Care+ mensuel (scope évolutif)",
          ],
        },
        confidence: { type: "string", enum: ["low", "medium", "high"] },
        one_liner: { type: "string" },
      },
      required: [
        "project_type_label",
        "estimated_price",
        "estimated_duration_weeks",
        "suggested_plan",
        "confidence",
        "one_liner",
      ],
      additionalProperties: false,
    },
    discovery: {
      type: "object",
      properties: {
        duration_days: { type: "integer" },
        price: { type: "integer" },
        deliverables: { type: "array", items: { type: "string" } },
      },
      required: ["duration_days", "price", "deliverables"],
      additionalProperties: false,
    },
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
      type: "object",
      properties: {
        feature_idea: { type: "string" },
        why_it_helps: { type: "string" },
        estimated_added_days: { type: "integer" },
      },
      required: ["feature_idea", "why_it_helps", "estimated_added_days"],
      additionalProperties: false,
    },
    warnings: { type: "array", items: { type: "string" } },
    not_a_good_fit_warning: { type: "string" },
    next_steps: { type: "array", items: { type: "string" } },
  },
  required: [
    "summary",
    "discovery",
    "phasing",
    "stack",
    "risks",
    "lagniappe",
    "warnings",
    "next_steps",
  ],
  additionalProperties: false,
} as const;
