export const GOOGLE_ADS_SAAS_PILOT_NUMERIC_FIELDS = [
  "mediaCost",
  "otherAcquisitionCosts",
  "clicks",
  "leads",
  "icpLeads",
  "sql",
  "opportunities",
  "signedCustomers",
  "activatedCustomers",
  "retainedCustomersM12",
  "monthlySubscriptionPerCustomer",
  "monthlyVariableCostPerCustomer",
  "salesCycleMonths",
  "onboardingDelayMonths",
  "setupCost",
  "annualRunCost",
  "maxRetainedCustomerCac",
  "maxPaybackFromSpendMonths",
  "minimumIcpRatePercent",
  "minimumActivationRatePercent",
  "landingPageSensitivityRatePercent",
  "sqlToOpportunitySensitivityRatePercent",
  "cpcSensitivity",
] as const;

export type GoogleAdsSaasPilotNumericField =
  (typeof GOOGLE_ADS_SAAS_PILOT_NUMERIC_FIELDS)[number];

export const GOOGLE_ADS_SAAS_PILOT_COUNT_FIELDS = [
  "clicks",
  "leads",
  "icpLeads",
  "sql",
  "opportunities",
  "signedCustomers",
  "activatedCustomers",
  "retainedCustomersM12",
] as const satisfies readonly GoogleAdsSaasPilotNumericField[];

export type GoogleAdsSaasPilotCohortStatus = "forecast" | "running" | "mature";

export interface GoogleAdsSaasPilotInputs extends Record<
  GoogleAdsSaasPilotNumericField,
  number | null
> {
  measurementReady: boolean;
  offerReady: boolean;
  salesCapacityReady: boolean;
  cohortStatus: GoogleAdsSaasPilotCohortStatus;
}

/**
 * AtelierFlow est un scénario pédagogique entièrement fictif.
 * Les montants ne sont ni des tarifs de marché, ni un devis, ni une
 * recommandation de budget.
 */
export const GOOGLE_ADS_SAAS_PILOT_EXAMPLE: GoogleAdsSaasPilotInputs = {
  mediaCost: 12_000,
  otherAcquisitionCosts: 12_000,
  clicks: 2_000,
  leads: 80,
  icpLeads: 32,
  sql: 16,
  opportunities: 8,
  signedCustomers: 4,
  activatedCustomers: 3,
  retainedCustomersM12: 2,
  monthlySubscriptionPerCustomer: 1_500,
  monthlyVariableCostPerCustomer: 600,
  salesCycleMonths: 3,
  onboardingDelayMonths: 1,
  setupCost: 8_000,
  annualRunCost: 88_000,
  maxRetainedCustomerCac: 15_000,
  maxPaybackFromSpendMonths: 24,
  minimumIcpRatePercent: 30,
  minimumActivationRatePercent: 75,
  landingPageSensitivityRatePercent: 3,
  sqlToOpportunitySensitivityRatePercent: 25,
  cpcSensitivity: 7.5,
  measurementReady: false,
  offerReady: false,
  salesCapacityReady: false,
  cohortStatus: "mature",
};

export const GOOGLE_ADS_SAAS_PILOT_FIELD_DEFINITIONS: ReadonlyArray<{
  key: GoogleAdsSaasPilotNumericField;
  group: "funnel" | "economics" | "tco" | "thresholds" | "sensitivities";
  label: string;
  help: string;
  suffix: string;
  integer?: boolean;
  rate?: boolean;
  strictlyPositive?: boolean;
}> = [
  {
    key: "mediaCost",
    group: "funnel",
    label: "Dépense média de la cohorte",
    help: "Montant réellement dépensé auprès de la régie sur le même périmètre que les clics. Laissez vide s’il est inconnu ; ne le remplacez pas par zéro.",
    suffix: "€",
    strictlyPositive: true,
  },
  {
    key: "otherAcquisitionCosts",
    group: "funnel",
    label: "Autres coûts d’acquisition de la cohorte",
    help: "Gestion, landing page, mesure, CRM et temps commercial directement attribuables. Leur somme avec le média forme le coût complet.",
    suffix: "€",
  },
  {
    key: "clicks",
    group: "funnel",
    label: "Clics de la même cohorte",
    help: "Clics dédupliqués dans le périmètre et la période que vous analysez.",
    suffix: "",
    integer: true,
  },
  {
    key: "leads",
    group: "funnel",
    label: "Leads reçus",
    help: "Contacts valides après retrait des tests, doublons et coordonnées inutilisables.",
    suffix: "",
    integer: true,
  },
  {
    key: "icpLeads",
    group: "funnel",
    label: "Leads correspondant à l’ICP",
    help: "Entreprises qui correspondent aux critères observables de votre client cible idéal, avant validation du besoin.",
    suffix: "",
    integer: true,
  },
  {
    key: "sql",
    group: "funnel",
    label: "SQL acceptés par les ventes",
    help: "Prospects dont le besoin, l’interlocuteur et la prochaine étape ont été confirmés selon une règle commune.",
    suffix: "",
    integer: true,
  },
  {
    key: "opportunities",
    group: "funnel",
    label: "Opportunités commerciales ouvertes",
    help: "Dossiers avec un problème, une échéance et un processus de décision identifiés.",
    suffix: "",
    integer: true,
  },
  {
    key: "signedCustomers",
    group: "funnel",
    label: "Clients signés",
    help: "Contrats réellement signés dans cette cohorte, sans leur attribuer automatiquement une cause publicitaire.",
    suffix: "",
    integer: true,
  },
  {
    key: "activatedCustomers",
    group: "funnel",
    label: "Clients activés",
    help: "Clients ayant atteint l’événement d’activation défini pour le produit.",
    suffix: "",
    integer: true,
  },
  {
    key: "retainedCustomersM12",
    group: "funnel",
    label: "Clients encore présents à M12",
    help: "Clients de la cohorte encore actifs douze mois après leur activation. Une cohorte trop jeune n’a pas encore cette réponse.",
    suffix: "",
    integer: true,
  },
  {
    key: "monthlySubscriptionPerCustomer",
    group: "economics",
    label: "Abonnement mensuel moyen par client",
    help: "Revenu récurrent mensuel réellement facturé dans ce scénario, après remise. Ce n’est pas la marge.",
    suffix: "€ / mois",
    strictlyPositive: true,
  },
  {
    key: "monthlyVariableCostPerCustomer",
    group: "economics",
    label: "Coûts variables mensuels par client",
    help: "Hébergement incrémental, paiement, données, support et autres coûts qui augmentent avec ce client. Laissez vide s’ils sont inconnus.",
    suffix: "€ / mois",
  },
  {
    key: "salesCycleMonths",
    group: "economics",
    label: "Délai moyen clic → signature",
    help: "Durée moyenne observée ou hypothèse explicitement datée, en mois décimaux.",
    suffix: "mois",
  },
  {
    key: "onboardingDelayMonths",
    group: "economics",
    label: "Délai moyen signature → activation",
    help: "Durée moyenne avant l’événement d’activation et le début de la marge contributive retenue.",
    suffix: "mois",
  },
  {
    key: "setupCost",
    group: "tco",
    label: "Mise en place payée une seule fois",
    help: "Cadrage, landing page, instrumentation, création initiale et reprise. Zéro n’est valable que si l’absence de coût est documentée.",
    suffix: "€",
  },
  {
    key: "annualRunCost",
    group: "tco",
    label: "Coût d’exploitation annuel",
    help: "Média, pilotage, créations, outils, suivi commercial attribuable et maintenance du dispositif sur une année comparable.",
    suffix: "€ / an",
  },
  {
    key: "maxRetainedCustomerCac",
    group: "thresholds",
    label: "CAC maximal par client présent à M12",
    help: "Seuil choisi avant lecture du résultat. Il doit rester compatible avec votre marge et votre trésorerie.",
    suffix: "€",
    strictlyPositive: true,
  },
  {
    key: "maxPaybackFromSpendMonths",
    group: "thresholds",
    label: "Payback maximal depuis la dépense",
    help: "Nombre maximal de mois entre la dépense d’acquisition et la récupération du CAC activé dans ce modèle simplifié.",
    suffix: "mois",
    strictlyPositive: true,
  },
  {
    key: "minimumIcpRatePercent",
    group: "thresholds",
    label: "Part minimale de leads correspondant à l’ICP",
    help: "Seuil de qualité choisi pour la cohorte ; entre 0 et 100 %.",
    suffix: "%",
    rate: true,
  },
  {
    key: "minimumActivationRatePercent",
    group: "thresholds",
    label: "Taux minimal d’activation après signature",
    help: "Seuil produit choisi avant le verdict ; entre 0 et 100 %.",
    suffix: "%",
    rate: true,
  },
  {
    key: "landingPageSensitivityRatePercent",
    group: "sensitivities",
    label: "Taux clic → lead à tester",
    help: "Hypothèse isolée pour la page. Le reste des taux du funnel demeure identique au scénario principal.",
    suffix: "%",
    rate: true,
  },
  {
    key: "sqlToOpportunitySensitivityRatePercent",
    group: "sensitivities",
    label: "Taux SQL → opportunité à tester",
    help: "Hypothèse isolée appliquée aux SQL saisis ; signature, activation et rétention conservent ensuite leurs taux de base.",
    suffix: "%",
    rate: true,
  },
  {
    key: "cpcSensitivity",
    group: "sensitivities",
    label: "CPC à tester à budget média constant",
    help: "Le volume de clics devient budget média ÷ CPC ; les taux du funnel restent ensuite ceux du scénario principal.",
    suffix: "€ / clic",
    strictlyPositive: true,
  },
];

export type GoogleAdsSaasPilotValidationCode =
  | "unknown"
  | "not-finite"
  | "negative"
  | "must-be-positive"
  | "not-integer"
  | "rate-out-of-range"
  | "funnel-order";

export interface GoogleAdsSaasPilotValidationIssue {
  field: GoogleAdsSaasPilotNumericField;
  code: GoogleAdsSaasPilotValidationCode;
  message: string;
}

export interface GoogleAdsSaasPilotMetrics {
  completeAcquisitionCost: number;
  observedCpc: number | null;
  costPerLead: number | null;
  costPerIcpLead: number | null;
  costPerSql: number | null;
  costPerOpportunity: number | null;
  cacSigned: number | null;
  cacActivated: number | null;
  cacRetainedM12: number | null;
  clickToLeadRatePercent: number | null;
  icpRatePercent: number | null;
  sqlRateFromIcpPercent: number | null;
  opportunityRateFromSqlPercent: number | null;
  signingRateFromOpportunityPercent: number | null;
  activationRatePercent: number | null;
  retentionRateM12Percent: number | null;
  monthlyContributionMargin: number;
  paybackFromActivationMonths: number | null;
  paybackFromSpendMonths: number | null;
}

export interface GoogleAdsSaasPilotTco {
  month12: number;
  month36: number;
  month60: number;
}

export type GoogleAdsSaasPilotDecision =
  | "launch-test"
  | "repair-measurement-offer-capacity"
  | "extend-conditionally"
  | "scale-conditionally"
  | "stop";

export const GOOGLE_ADS_SAAS_PILOT_DECISIONS: Record<
  GoogleAdsSaasPilotDecision,
  { title: string; explanation: string }
> = {
  "launch-test": {
    title: "Lancer un pilote limité",
    explanation:
      "Les prérequis déclarés sont prêts et les seuils saisis ne sont pas dépassés. Limitez néanmoins le budget, nommez la date de revue et conservez les données de cohorte : ce calcul ne garantit ni demande, ni vente.",
  },
  "repair-measurement-offer-capacity": {
    title: "Réparer la mesure, l’offre ou la capacité",
    explanation:
      "Au moins un prérequis déclaré manque, ou la marge contributive n’est pas positive. Acheter davantage de clics ne répare pas ce blocage.",
  },
  "extend-conditionally": {
    title: "Attendre la maturité, budget plafonné",
    explanation:
      "La cohorte est encore ouverte. Attendez seulement jusqu’à une date et un événement de maturité écrits à l’avance, avec un budget plafonné, sans transformer les ventes en cours en ventes perdues ou gagnées.",
  },
  "scale-conditionally": {
    title: "Élargir par palier",
    explanation:
      "La cohorte déclarée mature reste dans les seuils que vous avez saisis et les prérequis sont confirmés. Fixez néanmoins un nouveau plafond, une seule hypothèse d’élargissement et une condition de retour en arrière : ce résultat observé ne garantit pas le palier suivant.",
  },
  stop: {
    title: "Arrêter",
    explanation:
      "La cohorte déclarée mature dépasse au moins un seuil saisi ou n’a produit aucun résultat à une étape indispensable. Arrêtez le palier actuel ; une reprise exige une cause corrigeable, un nouveau plafond et un nouveau test.",
  },
};

export type GoogleAdsSaasPilotThresholdStatus =
  "pass" | "fail" | "not-observable";

export interface GoogleAdsSaasPilotThresholdCheck {
  key: "retained-cac" | "payback-from-spend" | "icp-rate" | "activation-rate";
  label: string;
  actual: number | null;
  threshold: number;
  unit: "€" | "mois" | "%";
  status: GoogleAdsSaasPilotThresholdStatus;
  passes: boolean;
}

export interface GoogleAdsSaasPilotSensitivity {
  key: "base" | "landing-page-rate" | "sql-to-opportunity-rate" | "cpc";
  label: string;
  assumption: string;
  clicks: number | null;
  leads: number | null;
  opportunities: number | null;
  activatedCustomers: number | null;
  retainedCustomersM12: number | null;
  cacActivated: number | null;
  cacRetainedM12: number | null;
  paybackFromActivationMonths: number | null;
  paybackFromSpendMonths: number | null;
}

export interface GoogleAdsSaasPilotCalculation {
  isValid: boolean;
  isDecisionReady: boolean;
  validationIssues: GoogleAdsSaasPilotValidationIssue[];
  metrics: GoogleAdsSaasPilotMetrics | null;
  tco: GoogleAdsSaasPilotTco | null;
  thresholdChecks: GoogleAdsSaasPilotThresholdCheck[];
  sensitivities: GoogleAdsSaasPilotSensitivity[];
  decision: GoogleAdsSaasPilotDecision | null;
  decisionLimit: string;
}

const FIELD_BY_KEY = Object.fromEntries(
  GOOGLE_ADS_SAAS_PILOT_FIELD_DEFINITIONS.map((field) => [field.key, field]),
) as Record<
  GoogleAdsSaasPilotNumericField,
  (typeof GOOGLE_ADS_SAAS_PILOT_FIELD_DEFINITIONS)[number]
>;

const FUNNEL_ORDER = [
  "clicks",
  "leads",
  "icpLeads",
  "sql",
  "opportunities",
  "signedCustomers",
  "activatedCustomers",
  "retainedCustomersM12",
] as const satisfies readonly GoogleAdsSaasPilotNumericField[];

const DECISION_LIMIT =
  "Lecture de cohorte, pas preuve de causalité : les contrats saisis sont associés au périmètre suivi, mais le calcul ne prouve pas que Google Ads les a créés. Il ne compare pas les canaux, ne prédit ni demande ni vente, ignore le financement, la TVA, les coûts fixes communs, l’expansion et la valeur temps de l’argent.";

/**
 * Parse un nombre décimal français ou international sans accepter une chaîne
 * partiellement numérique, un exposant, un séparateur de milliers ou un signe.
 * `null` signifie bien « inconnu ou invalide », jamais zéro.
 */
export function parseGoogleAdsSaasPilotDecimal(raw: string): number | null {
  const normalized = raw.trim();
  if (normalized === "" || !/^(?:0|[1-9]\d*)(?:[.,]\d+)?$/.test(normalized)) {
    return null;
  }

  const parsed = Number(normalized.replace(",", "."));
  return Number.isFinite(parsed) ? parsed : null;
}

export function cloneGoogleAdsSaasPilotInputs(
  inputs: GoogleAdsSaasPilotInputs,
): GoogleAdsSaasPilotInputs {
  return { ...inputs };
}

function safeDivide(numerator: number | null, denominator: number | null) {
  if (
    numerator === null ||
    denominator === null ||
    !Number.isFinite(numerator) ||
    !Number.isFinite(denominator) ||
    denominator === 0
  ) {
    return null;
  }
  const result = numerator / denominator;
  return Number.isFinite(result) ? result : null;
}

function safeRate(numerator: number | null, denominator: number | null) {
  const ratio = safeDivide(numerator, denominator);
  return ratio === null ? null : ratio * 100;
}

function issueMessage(
  field: GoogleAdsSaasPilotNumericField,
  code: GoogleAdsSaasPilotValidationCode,
  parent?: GoogleAdsSaasPilotNumericField,
) {
  const label = FIELD_BY_KEY[field].label;

  switch (code) {
    case "unknown":
      return `${label} : saisissez un montant ou un volume connu. Une case vide ne vaut pas zéro.`;
    case "not-finite":
      return `${label} : saisissez uniquement un nombre décimal sans texte, exposant ni séparateur de milliers.`;
    case "negative":
      return `${label} : la valeur doit être supérieure ou égale à zéro.`;
    case "must-be-positive":
      return `${label} : la valeur doit être strictement supérieure à zéro.`;
    case "not-integer":
      return `${label} : saisissez un nombre entier de personnes ou d’événements.`;
    case "rate-out-of-range":
      return `${label} : saisissez un taux compris entre 0 et 100 %.`;
    case "funnel-order":
      return `${label} : ce volume ne peut pas dépasser « ${parent ? FIELD_BY_KEY[parent].label : "l’étape précédente"} » dans la même cohorte.`;
  }
}

export function validateGoogleAdsSaasPilotInputs(
  inputs: GoogleAdsSaasPilotInputs,
): GoogleAdsSaasPilotValidationIssue[] {
  const issues: GoogleAdsSaasPilotValidationIssue[] = [];

  for (const definition of GOOGLE_ADS_SAAS_PILOT_FIELD_DEFINITIONS) {
    const value = inputs[definition.key];

    if (
      value === null &&
      definition.key === "retainedCustomersM12" &&
      inputs.cohortStatus === "running"
    ) {
      continue;
    }
    if (value === null) {
      issues.push({
        field: definition.key,
        code: "unknown",
        message: issueMessage(definition.key, "unknown"),
      });
      continue;
    }
    if (!Number.isFinite(value) || Math.abs(value) > Number.MAX_SAFE_INTEGER) {
      issues.push({
        field: definition.key,
        code: "not-finite",
        message: issueMessage(definition.key, "not-finite"),
      });
      continue;
    }
    if (definition.rate && (value < 0 || value > 100)) {
      issues.push({
        field: definition.key,
        code: "rate-out-of-range",
        message: issueMessage(definition.key, "rate-out-of-range"),
      });
      continue;
    }
    if (value < 0) {
      issues.push({
        field: definition.key,
        code: "negative",
        message: issueMessage(definition.key, "negative"),
      });
      continue;
    }
    if (definition.strictlyPositive && value === 0) {
      issues.push({
        field: definition.key,
        code: "must-be-positive",
        message: issueMessage(definition.key, "must-be-positive"),
      });
      continue;
    }
    if (definition.integer && !Number.isSafeInteger(value)) {
      issues.push({
        field: definition.key,
        code: "not-integer",
        message: issueMessage(definition.key, "not-integer"),
      });
      continue;
    }
  }

  for (let index = 1; index < FUNNEL_ORDER.length; index += 1) {
    const parent = FUNNEL_ORDER[index - 1];
    const field = FUNNEL_ORDER[index];
    const parentValue = inputs[parent];
    const value = inputs[field];

    if (
      typeof parentValue === "number" &&
      Number.isFinite(parentValue) &&
      typeof value === "number" &&
      Number.isFinite(value) &&
      value > parentValue
    ) {
      issues.push({
        field,
        code: "funnel-order",
        message: issueMessage(field, "funnel-order", parent),
      });
    }
  }

  return issues;
}

type GoogleAdsSaasPilotCalculableValues = Omit<
  Record<GoogleAdsSaasPilotNumericField, number>,
  "retainedCustomersM12"
> & {
  retainedCustomersM12: number | null;
};

function computeMetrics(
  values: GoogleAdsSaasPilotCalculableValues,
  overrides: {
    clicks?: number;
    leads?: number;
    icpLeads?: number;
    sql?: number;
    opportunities?: number;
    signedCustomers?: number;
    activatedCustomers?: number;
    retainedCustomersM12?: number | null;
  } = {},
): GoogleAdsSaasPilotMetrics {
  const completeAcquisitionCost =
    values.mediaCost + values.otherAcquisitionCosts;
  const clicks = overrides.clicks ?? values.clicks;
  const leads = overrides.leads ?? values.leads;
  const icpLeads = overrides.icpLeads ?? values.icpLeads;
  const sql = overrides.sql ?? values.sql;
  const opportunities = overrides.opportunities ?? values.opportunities;
  const signedCustomers = overrides.signedCustomers ?? values.signedCustomers;
  const activatedCustomers =
    overrides.activatedCustomers ?? values.activatedCustomers;
  const retainedCustomersM12 =
    overrides.retainedCustomersM12 ?? values.retainedCustomersM12;
  const monthlyContributionMargin =
    values.monthlySubscriptionPerCustomer -
    values.monthlyVariableCostPerCustomer;
  const totalDelayMonths =
    values.salesCycleMonths + values.onboardingDelayMonths;
  const cacActivated = safeDivide(completeAcquisitionCost, activatedCustomers);
  const paybackFromActivationMonths =
    monthlyContributionMargin > 0 && cacActivated !== null
      ? safeDivide(cacActivated, monthlyContributionMargin)
      : null;

  return {
    completeAcquisitionCost,
    observedCpc: safeDivide(values.mediaCost, clicks),
    costPerLead: safeDivide(completeAcquisitionCost, leads),
    costPerIcpLead: safeDivide(completeAcquisitionCost, icpLeads),
    costPerSql: safeDivide(completeAcquisitionCost, sql),
    costPerOpportunity: safeDivide(completeAcquisitionCost, opportunities),
    cacSigned: safeDivide(completeAcquisitionCost, signedCustomers),
    cacActivated,
    cacRetainedM12: safeDivide(completeAcquisitionCost, retainedCustomersM12),
    clickToLeadRatePercent: safeRate(leads, clicks),
    icpRatePercent: safeRate(icpLeads, leads),
    sqlRateFromIcpPercent: safeRate(sql, icpLeads),
    opportunityRateFromSqlPercent: safeRate(opportunities, sql),
    signingRateFromOpportunityPercent: safeRate(signedCustomers, opportunities),
    activationRatePercent: safeRate(activatedCustomers, signedCustomers),
    retentionRateM12Percent: safeRate(retainedCustomersM12, activatedCustomers),
    monthlyContributionMargin,
    paybackFromActivationMonths,
    paybackFromSpendMonths:
      paybackFromActivationMonths === null
        ? null
        : totalDelayMonths + paybackFromActivationMonths,
  };
}

function buildSensitivity(
  key: GoogleAdsSaasPilotSensitivity["key"],
  label: string,
  assumption: string,
  metrics: GoogleAdsSaasPilotMetrics,
  funnel: {
    clicks: number | null;
    leads: number | null;
    opportunities: number | null;
    activatedCustomers: number | null;
    retainedCustomersM12: number | null;
  },
): GoogleAdsSaasPilotSensitivity {
  return {
    key,
    label,
    assumption,
    ...funnel,
    cacActivated: metrics.cacActivated,
    cacRetainedM12: metrics.cacRetainedM12,
    paybackFromActivationMonths: metrics.paybackFromActivationMonths,
    paybackFromSpendMonths: metrics.paybackFromSpendMonths,
  };
}

export function calculateGoogleAdsSaasPilot(
  inputs: GoogleAdsSaasPilotInputs,
): GoogleAdsSaasPilotCalculation {
  const validationIssues = validateGoogleAdsSaasPilotInputs(inputs);
  if (validationIssues.length > 0) {
    return {
      isValid: false,
      isDecisionReady: false,
      validationIssues,
      metrics: null,
      tco: null,
      thresholdChecks: [],
      sensitivities: [],
      decision: null,
      decisionLimit: DECISION_LIMIT,
    };
  }

  const values = inputs as GoogleAdsSaasPilotCalculableValues &
    GoogleAdsSaasPilotInputs;
  const metrics = computeMetrics(values);
  const tco = {
    month12: values.setupCost + values.annualRunCost,
    month36: values.setupCost + values.annualRunCost * 3,
    month60: values.setupCost + values.annualRunCost * 5,
  };
  function thresholdResult(
    actual: number | null,
    passesWhenObserved: boolean,
  ): Pick<GoogleAdsSaasPilotThresholdCheck, "status" | "passes"> {
    if (actual === null) {
      return { status: "not-observable", passes: false };
    }
    return passesWhenObserved
      ? { status: "pass", passes: true }
      : { status: "fail", passes: false };
  }

  const thresholdChecks: GoogleAdsSaasPilotThresholdCheck[] = [
    {
      key: "retained-cac",
      label: "CAC par client présent à M12",
      actual: metrics.cacRetainedM12,
      threshold: values.maxRetainedCustomerCac,
      unit: "€",
      ...thresholdResult(
        metrics.cacRetainedM12,
        metrics.cacRetainedM12 !== null &&
          metrics.cacRetainedM12 <= values.maxRetainedCustomerCac,
      ),
    },
    {
      key: "payback-from-spend",
      label: "Payback depuis la dépense",
      actual: metrics.paybackFromSpendMonths,
      threshold: values.maxPaybackFromSpendMonths,
      unit: "mois",
      ...thresholdResult(
        metrics.paybackFromSpendMonths,
        metrics.paybackFromSpendMonths !== null &&
          metrics.paybackFromSpendMonths <= values.maxPaybackFromSpendMonths,
      ),
    },
    {
      key: "icp-rate",
      label: "Part de leads correspondant à l’ICP",
      actual: metrics.icpRatePercent,
      threshold: values.minimumIcpRatePercent,
      unit: "%",
      ...thresholdResult(
        metrics.icpRatePercent,
        metrics.icpRatePercent !== null &&
          metrics.icpRatePercent >= values.minimumIcpRatePercent,
      ),
    },
    {
      key: "activation-rate",
      label: "Taux d’activation après signature",
      actual: metrics.activationRatePercent,
      threshold: values.minimumActivationRatePercent,
      unit: "%",
      ...thresholdResult(
        metrics.activationRatePercent,
        metrics.activationRatePercent !== null &&
          metrics.activationRatePercent >= values.minimumActivationRatePercent,
      ),
    },
  ];

  let decision: GoogleAdsSaasPilotDecision | null = null;
  if (
    !inputs.measurementReady ||
    !inputs.offerReady ||
    !inputs.salesCapacityReady ||
    metrics.monthlyContributionMargin <= 0
  ) {
    decision = "repair-measurement-offer-capacity";
  } else if (inputs.cohortStatus === "running") {
    decision = "extend-conditionally";
  } else if (inputs.cohortStatus === "forecast") {
    decision = thresholdChecks.every((check) => check.status === "pass")
      ? "launch-test"
      : "repair-measurement-offer-capacity";
  } else if (thresholdChecks.every((check) => check.status === "pass")) {
    decision = "scale-conditionally";
  } else {
    decision = "stop";
  }
  const isDecisionReady = decision !== null;

  let sensitivities: GoogleAdsSaasPilotSensitivity[] = [];
  const retainedCustomersM12 = values.retainedCustomersM12;
  const canBuildSensitivities =
    values.clicks > 0 &&
    values.leads > 0 &&
    values.icpLeads > 0 &&
    values.sql > 0 &&
    values.opportunities > 0 &&
    values.signedCustomers > 0 &&
    values.activatedCustomers > 0 &&
    retainedCustomersM12 !== null;

  if (canBuildSensitivities && retainedCustomersM12 !== null) {
    const icpPerLead = values.icpLeads / values.leads;
    const sqlPerIcp = values.sql / values.icpLeads;
    const opportunityPerSql = values.opportunities / values.sql;
    const signedPerOpportunity = values.signedCustomers / values.opportunities;
    const activatedPerSigned =
      values.activatedCustomers / values.signedCustomers;
    const retainedPerActivated =
      retainedCustomersM12 / values.activatedCustomers;
    const leadPerClick = values.leads / values.clicks;

    function downstreamFromLeads(
      clicks: number,
      leads: number,
      opportunityRate = opportunityPerSql,
    ) {
      const icpLeads = leads * icpPerLead;
      const sql = icpLeads * sqlPerIcp;
      const opportunities = sql * opportunityRate;
      const signedCustomers = opportunities * signedPerOpportunity;
      const activatedCustomers = signedCustomers * activatedPerSigned;
      const retainedCustomersM12 = activatedCustomers * retainedPerActivated;
      const scenarioMetrics = computeMetrics(values, {
        clicks,
        leads,
        icpLeads,
        sql,
        opportunities,
        signedCustomers,
        activatedCustomers,
        retainedCustomersM12,
      });

      return {
        metrics: scenarioMetrics,
        funnel: {
          clicks,
          leads,
          opportunities,
          activatedCustomers,
          retainedCustomersM12,
        },
      };
    }

    const baseFunnel = {
      clicks: values.clicks,
      leads: values.leads,
      opportunities: values.opportunities,
      activatedCustomers: values.activatedCustomers,
      retainedCustomersM12: values.retainedCustomersM12,
    };
    const landingLeads =
      values.clicks * (values.landingPageSensitivityRatePercent / 100);
    const landingScenario = downstreamFromLeads(values.clicks, landingLeads);
    const sqlOpportunityScenario = downstreamFromLeads(
      values.clicks,
      values.leads,
      values.sqlToOpportunitySensitivityRatePercent / 100,
    );
    const cpcClicks = values.mediaCost / values.cpcSensitivity;
    const cpcScenario = downstreamFromLeads(
      cpcClicks,
      cpcClicks * leadPerClick,
    );

    sensitivities = [
      buildSensitivity(
        "base",
        "Base saisie",
        "Aucune hypothèse modifiée.",
        metrics,
        baseFunnel,
      ),
      buildSensitivity(
        "landing-page-rate",
        "Conversion de la page",
        `Taux clic → lead fixé à ${values.landingPageSensitivityRatePercent.toLocaleString("fr-FR")} %, autres taux du funnel inchangés.`,
        landingScenario.metrics,
        landingScenario.funnel,
      ),
      buildSensitivity(
        "sql-to-opportunity-rate",
        "Passage SQL → opportunité",
        `Taux SQL → opportunité fixé à ${values.sqlToOpportunitySensitivityRatePercent.toLocaleString("fr-FR")} %, étapes suivantes inchangées.`,
        sqlOpportunityScenario.metrics,
        sqlOpportunityScenario.funnel,
      ),
      buildSensitivity(
        "cpc",
        "CPC à budget média constant",
        `CPC fixé à ${euro.format(values.cpcSensitivity)} avec ${euro.format(values.mediaCost)} de média ; autres taux du funnel inchangés.`,
        cpcScenario.metrics,
        cpcScenario.funnel,
      ),
    ];
  }

  return {
    isValid: true,
    isDecisionReady,
    validationIssues: [],
    metrics,
    tco,
    thresholdChecks,
    sensitivities,
    decision,
    decisionLimit: DECISION_LIMIT,
  };
}

const euro = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

const decimal = new Intl.NumberFormat("fr-FR", {
  maximumFractionDigits: 2,
});

function markdownValue(value: number | null, formatter: Intl.NumberFormat) {
  return value === null ? "non calculable" : formatter.format(value);
}

export function buildGoogleAdsSaasPilotMarkdown(
  inputs: GoogleAdsSaasPilotInputs,
  calculation = calculateGoogleAdsSaasPilot(inputs),
) {
  if (
    !calculation.isValid ||
    !calculation.isDecisionReady ||
    !calculation.metrics ||
    !calculation.tco ||
    !calculation.decision
  ) {
    throw new Error(
      "Le Markdown ne peut pas être exporté tant qu’une donnée indispensable est inconnue, invalide ou que le verdict n’est pas défini.",
    );
  }

  const metrics = calculation.metrics;
  const decision = GOOGLE_ADS_SAAS_PILOT_DECISIONS[calculation.decision];
  const thresholdLines = calculation.thresholdChecks.map(
    (check) =>
      `| ${check.label} | ${markdownValue(check.actual, check.unit === "€" ? euro : decimal)} ${check.unit === "€" ? "" : check.unit} | ${check.threshold.toLocaleString("fr-FR")} ${check.unit} | ${
        check.status === "pass"
          ? "dans le seuil"
          : check.status === "fail"
            ? "hors seuil"
            : "non observable à ce stade"
      } |`,
  );
  const sensitivityLines = calculation.sensitivities.map(
    (row) =>
      `| ${row.label} | ${markdownValue(row.clicks, decimal)} | ${markdownValue(row.opportunities, decimal)} | ${markdownValue(row.activatedCustomers, decimal)} | ${markdownValue(row.cacActivated, euro)} | ${markdownValue(row.paybackFromActivationMonths, decimal)} mois | ${markdownValue(row.paybackFromSpendMonths, decimal)} mois |`,
  );

  return [
    "# Note de décision — pilote d’acquisition SaaS B2B",
    "",
    "> Générée localement dans le navigateur. Aucune donnée n’a été envoyée ni stockée par l’outil.",
    "> AtelierFlow et les valeurs initiales sont fictifs : ce ne sont ni des tarifs, ni des benchmarks, ni une recommandation de budget.",
    "",
    `## Décision : ${decision.title}`,
    "",
    decision.explanation,
    "",
    "## Cohorte saisie",
    "",
    `- Média : ${euro.format(inputs.mediaCost as number)}`,
    `- Autres coûts attribuables : ${euro.format(inputs.otherAcquisitionCosts as number)}`,
    `- Coût d’acquisition complet : ${euro.format(metrics.completeAcquisitionCost)}`,
    `- Clics → leads → ICP → SQL → opportunités → signés → activés → présents M12 : ${[
      inputs.clicks,
      inputs.leads,
      inputs.icpLeads,
      inputs.sql,
      inputs.opportunities,
      inputs.signedCustomers,
      inputs.activatedCustomers,
      inputs.retainedCustomersM12,
    ]
      .map((value) =>
        value === null ? "non observable" : decimal.format(value),
      )
      .join(" → ")}`,
    `- Marge contributive mensuelle par client : ${euro.format(metrics.monthlyContributionMargin)}`,
    "",
    "## Coûts unitaires observés dans la cohorte",
    "",
    `- CPL complet : ${markdownValue(metrics.costPerLead, euro)}`,
    `- Coût par SQL : ${markdownValue(metrics.costPerSql, euro)}`,
    `- Coût par opportunité : ${markdownValue(metrics.costPerOpportunity, euro)}`,
    `- CAC signé : ${markdownValue(metrics.cacSigned, euro)}`,
    `- CAC activé : ${markdownValue(metrics.cacActivated, euro)}`,
    `- CAC par client présent à M12 : ${markdownValue(metrics.cacRetainedM12, euro)}`,
    `- Payback depuis l’activation : ${markdownValue(metrics.paybackFromActivationMonths, decimal)} mois`,
    `- Payback depuis la dépense : ${markdownValue(metrics.paybackFromSpendMonths, decimal)} mois`,
    "",
    "## Seuils choisis avant la décision",
    "",
    "| Contrôle | Résultat | Seuil saisi | Lecture |",
    "|---|---:|---:|---|",
    ...thresholdLines,
    "",
    "## TCO du dispositif",
    "",
    `Formule sans inflation : mise en place + nombre d’années × exploitation annuelle.`,
    "",
    `- 12 mois : ${euro.format(calculation.tco.month12)}`,
    `- 36 mois : ${euro.format(calculation.tco.month36)}`,
    `- 60 mois : ${euro.format(calculation.tco.month60)}`,
    "",
    "## Sensibilités",
    "",
    "| Hypothèse isolée | Clics | Opportunités | Activés | CAC activé | Payback activation | Payback depuis dépense |",
    "|---|---:|---:|---:|---:|---:|---:|",
    ...(sensitivityLines.length > 0
      ? sensitivityLines
      : ["| Non calculable sur cette cohorte | — | — | — | — | — | — |"]),
    "",
    "## Limites à conserver avec la note",
    "",
    calculation.decisionLimit,
    "",
    "Les montants n’intègrent que les postes saisis. Une valeur inconnue ne doit jamais être remplacée par zéro. Refaire la décision lorsque la cohorte arrive à maturité ou qu’une définition change.",
    "",
  ].join("\n");
}
