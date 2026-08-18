export const SITE_AID_QUICK_CHECK_VERSION =
  "site-aid-quick-check-r4-2026-07-27";

export type SiteAidTriState = "yes" | "no" | "unknown";

export type SiteAidJourney = "searching" | "official-source";

export type SiteAidCommitmentRule =
  | "allowed-in-writing"
  | "forbidden-before-decision"
  | "unknown";

export type SiteAidNotificationStage = "none" | "written" | "paid";

export type SiteAidSupportType =
  | "unknown"
  | "grant"
  | "support-in-kind"
  | "loan-or-guarantee"
  | "creator-support"
  | "training"
  | "tax-accounting";

export type SiteAidVatRecovery = "full" | "partial" | "none" | "unknown";

export interface SiteAidQuickCheckInput {
  journey: SiteAidJourney;
  supportType: SiteAidSupportType;
  officialSource: SiteAidTriState;
  profileMatches: SiteAidTriState;
  expensesConfirmed: SiteAidTriState;
  commitmentRule: SiteAidCommitmentRule;
  projectViableWithoutAid: SiteAidTriState;
  cashAvailableBeforePayment: SiteAidTriState;
  notificationStage: SiteAidNotificationStage;
  quoteExVat?: number;
  invoiceVatAmount?: number;
  vatRecovery: SiteAidVatRecovery;
  recoverableVatAmount?: number;
  eligibleExVat?: number;
  theoreticalRatePercent?: number;
  theoreticalCap?: number;
  notifiedContribution?: number;
  paidContribution?: number;
  delayMonths?: number;
  monthlyMarginAtRisk?: number;
  applicationCosts?: number;
}

export type SiteAidQuickCheckCode =
  | "search-official-sources"
  | "stop-or-requalify"
  | "verify-before-commitment"
  | "separate-financing-instrument"
  | "reduce-or-finance"
  | "choose-between-aid-and-launch"
  | "launch-without-budgeting-aid"
  | "launch-after-notification"
  | "notification-to-secure"
  | "paid-to-reconcile";

export interface SiteAidQuickCheckResult {
  code: SiteAidQuickCheckCode;
  title: string;
  summary: string;
  blockingQuestions: string[];
  warnings: string[];
  theoreticalAid?: number;
  comparisonAid?: number;
  budgetedAid: number | undefined;
  paidAid: number | undefined;
  invoiceVat?: number;
  recoverableVat?: number;
  invoiceIncludingVat?: number;
  economicCostWithoutAid?: {
    min: number;
    max: number;
  };
  maximumCashNeedBeforeAid?: number;
  delayCost?: number;
}

const MAX_MONEY = 1_000_000_000;
const MAX_DELAY_MONTHS = 120;
const MAX_AGGREGATED_MONEY =
  MAX_DELAY_MONTHS * MAX_MONEY + MAX_MONEY;

function usableNumber(
  value: number | undefined,
  maximum = MAX_MONEY,
): value is number {
  return (
    typeof value === "number" &&
    Number.isFinite(value) &&
    value >= 0 &&
    value <= maximum
  );
}

function roundMoney(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function triStateQuestion(
  value: SiteAidTriState,
  noMessage: string,
  unknownMessage: string,
  blockers: string[],
  warnings: string[],
): void {
  if (value === "no") blockers.push(noMessage);
  if (value === "unknown") warnings.push(unknownMessage);
}

function requireNumber(
  value: number | undefined,
  maximum: number,
  missingMessage: string,
  invalidMessage: string,
  blockers: string[],
): value is number {
  if (value === undefined) {
    blockers.push(missingMessage);
    return false;
  }
  if (!usableNumber(value, maximum)) {
    blockers.push(invalidMessage);
    return false;
  }
  return true;
}

function requirePositiveNumber(
  value: number | undefined,
  maximum: number,
  missingMessage: string,
  invalidMessage: string,
  blockers: string[],
): value is number {
  if (value === undefined) {
    blockers.push(missingMessage);
    return false;
  }
  if (!usableNumber(value, maximum) || value === 0) {
    blockers.push(invalidMessage);
    return false;
  }
  return true;
}

export function createEmptySiteAidQuickCheckInput(): SiteAidQuickCheckInput {
  return {
    journey: "searching",
    supportType: "unknown",
    officialSource: "unknown",
    profileMatches: "unknown",
    expensesConfirmed: "unknown",
    commitmentRule: "unknown",
    projectViableWithoutAid: "unknown",
    cashAvailableBeforePayment: "unknown",
    notificationStage: "none",
    vatRecovery: "unknown",
  };
}

export function calculateSiteAidQuickCheck(
  input: SiteAidQuickCheckInput,
): SiteAidQuickCheckResult {
  if (input.journey === "searching") {
    return {
      code: "search-official-sources",
      title: "Commencez par trouver une fiche officielle actuelle",
      summary:
        "Ne partez ni d’une liste commerciale ni d’un ancien article. Filtrez d’abord les dispositifs publics par territoire et profil, puis revenez avec la fiche, sa date et l’autorité qui instruit.",
      blockingQuestions: [],
      warnings: [
        "L’absence de résultat dans un annuaire ne prouve pas qu’aucune aide locale existe.",
        "Une aide étrangère observée dans un benchmark ne s’applique pas à une entreprise française.",
      ],
      budgetedAid: 0,
      paidAid: 0,
    };
  }

  if (input.supportType === "unknown") {
    return {
      code: "verify-before-commitment",
      title: "Qualifiez le type de soutien avant tout autre contrôle",
      summary:
        "Une subvention, un prêt, une garantie, un accompagnement, une aide à la création, une formation et un effet fiscal n’ont ni le même calcul ni le même effet sur la trésorerie.",
      blockingQuestions: [
        "Qualifiez d’abord l’instrument : subvention, accompagnement, prêt ou garantie, création, formation, ou effet fiscal.",
      ],
      warnings: [],
      budgetedAid: 0,
      paidAid: 0,
    };
  }

  if (input.supportType !== "grant") {
    const warnings: string[] = [];
    if (input.officialSource !== "yes") {
      warnings.push(
        "Vérifiez séparément la source actuelle, le public, le territoire, les conditions et le coût complet de cet instrument.",
      );
    }
    return {
      code: "separate-financing-instrument",
      title: "Analysez cet instrument séparément du coût du site",
      summary:
        "Ce soutien n’est pas une subvention à retrancher de la facture. Gardez 0 € d’aide dans ce calcul et analysez séparément la valeur de l’accompagnement, les échéances, intérêts, garanties, conditions de création, droits à formation ou effets fiscaux.",
      blockingQuestions: [],
      warnings,
      budgetedAid: 0,
      paidAid: 0,
    };
  }

  const blockingQuestions: string[] = [];
  const warnings: string[] = [];
  const calculationBlockers: string[] = [];

  triStateQuestion(
    input.officialSource,
    "La piste ne repose pas sur une fiche ou une réponse officielle identifiable.",
    "Retrouvez la fiche officielle actuelle et l’autorité qui instruit.",
    blockingQuestions,
    warnings,
  );
  triStateQuestion(
    input.profileMatches,
    "Le profil ou le territoire déclaré ne correspond pas aux conditions publiées.",
    "Faites confirmer le profil, le territoire, le secteur et l’effectif.",
    blockingQuestions,
    warnings,
  );
  triStateQuestion(
    input.expensesConfirmed,
    "Les lignes du devis ne sont pas confirmées comme admissibles.",
    "Faites confirmer chaque ligne du devis, pas seulement le projet global.",
    blockingQuestions,
    warnings,
  );
  const forecastDecisionActive = input.notificationStage !== "paid";

  if (forecastDecisionActive) {
    triStateQuestion(
      input.projectViableWithoutAid,
      "Le projet n’est pas soutenable avec une aide budgétée à 0 €.",
      "Vérifiez si le projet reste viable avec 0 € d’aide.",
      blockingQuestions,
      warnings,
    );
    triStateQuestion(
      input.cashAvailableBeforePayment,
      "La trésorerie disponible ne couvre pas l’avance maximale avant paiement.",
      "Vérifiez qui paie quoi, à quelle date, et la trésorerie réellement disponible.",
      blockingQuestions,
      warnings,
    );
  }

  if (forecastDecisionActive && input.commitmentRule === "unknown") {
    warnings.push(
      "Demandez par écrit si devis, acompte, commande ou début des travaux est autorisé avant la décision.",
    );
  }
  const quoteUsable = requireNumber(
    input.quoteExVat,
    MAX_MONEY,
    "Le montant total HT du devis reste à renseigner.",
    "Le devis HT doit être un montant compris entre 0 € et 1 milliard d’euros.",
    calculationBlockers,
  );

  const invoiceVatUsable = requireNumber(
    input.invoiceVatAmount,
    MAX_MONEY,
    "Le montant total de TVA de la facture reste à renseigner, après addition des lignes et des taux.",
    "La TVA totale de la facture doit être comprise entre 0 € et 1 milliard d’euros.",
    calculationBlockers,
  );

  const invoiceVat =
    invoiceVatUsable && input.invoiceVatAmount !== undefined
      ? roundMoney(input.invoiceVatAmount)
      : undefined;
  const invoiceIncludingVat =
    quoteUsable &&
    input.quoteExVat !== undefined &&
    invoiceVat !== undefined
      ? roundMoney(input.quoteExVat + invoiceVat)
      : undefined;

  let recoverableVat: number | undefined;
  let economicCostWithoutAid:
    | {
        min: number;
        max: number;
      }
    | undefined;

  if (quoteUsable && input.quoteExVat !== undefined) {
    if (input.vatRecovery === "full" && invoiceVat !== undefined) {
      recoverableVat = invoiceVat;
      economicCostWithoutAid = {
        min: roundMoney(input.quoteExVat),
        max: roundMoney(input.quoteExVat),
      };
    }
    if (input.vatRecovery === "none" && invoiceIncludingVat !== undefined) {
      recoverableVat = 0;
      economicCostWithoutAid = {
        min: invoiceIncludingVat,
        max: invoiceIncludingVat,
      };
    }
    if (input.vatRecovery === "unknown" && invoiceIncludingVat !== undefined) {
      economicCostWithoutAid = {
        min: roundMoney(input.quoteExVat),
        max: invoiceIncludingVat,
      };
      warnings.push(
        "La TVA récupérable est inconnue : le coût économique reste une fourchette.",
      );
    }
    if (input.vatRecovery === "partial") {
      const partialRecoveryUsable = requireNumber(
        input.recoverableVatAmount,
        MAX_MONEY,
        "Le montant exact de TVA récupérable reste à renseigner.",
        "La TVA récupérable doit être comprise entre 0 € et 1 milliard d’euros.",
        calculationBlockers,
      );
      if (
        partialRecoveryUsable &&
        input.recoverableVatAmount !== undefined &&
        invoiceVat !== undefined
      ) {
        if (input.recoverableVatAmount > invoiceVat) {
          calculationBlockers.push(
            "La TVA récupérable déclarée dépasse la TVA totale de la facture.",
          );
        } else if (invoiceIncludingVat !== undefined) {
          recoverableVat = roundMoney(input.recoverableVatAmount);
          const exactCost = roundMoney(
            invoiceIncludingVat - input.recoverableVatAmount,
          );
          economicCostWithoutAid = { min: exactCost, max: exactCost };
        }
      }
    }
  }

  const needsForecast = input.notificationStage !== "paid";

  const eligibleUsable = needsForecast
    ? requireNumber(
        input.eligibleExVat,
        MAX_MONEY,
        "L’assiette admissible HT confirmée reste à renseigner.",
        "L’assiette admissible doit être un montant compris entre 0 € et 1 milliard d’euros.",
        calculationBlockers,
      )
    : false;

  if (
    eligibleUsable &&
    quoteUsable &&
    input.eligibleExVat !== undefined &&
    input.quoteExVat !== undefined &&
    input.eligibleExVat > input.quoteExVat
  ) {
    calculationBlockers.push(
      "L’assiette admissible déclarée dépasse le montant HT du devis.",
    );
  }

  const rateUsable = needsForecast
    ? requireNumber(
        input.theoreticalRatePercent,
        100,
        "Le taux théorique publié reste à renseigner.",
        "Le taux théorique doit être compris entre 0 % et 100 %.",
        calculationBlockers,
      )
    : false;

  const capUsable = needsForecast
    ? requireNumber(
        input.theoreticalCap,
        MAX_MONEY,
        "Le plafond publié reste à renseigner.",
        "Le plafond publié doit être un montant compris entre 0 € et 1 milliard d’euros.",
        calculationBlockers,
      )
    : false;

  const theoreticalAid =
    eligibleUsable &&
    rateUsable &&
    capUsable &&
    input.eligibleExVat !== undefined &&
    input.theoreticalRatePercent !== undefined &&
    input.theoreticalCap !== undefined &&
    (input.quoteExVat === undefined ||
      input.eligibleExVat <= input.quoteExVat)
      ? roundMoney(
          Math.min(
            input.eligibleExVat * (input.theoreticalRatePercent / 100),
            input.theoreticalCap,
          ),
        )
      : undefined;

  const needsDelay = input.notificationStage !== "paid";
  const delayMonthsUsable = needsDelay
    ? requireNumber(
        input.delayMonths,
        MAX_DELAY_MONTHS,
        "Le délai d’attente en mois reste à renseigner, même s’il vaut 0.",
        "Le délai doit être compris entre 0 et 120 mois.",
        calculationBlockers,
      )
    : false;
  const marginUsable = needsDelay
    ? requireNumber(
        input.monthlyMarginAtRisk,
        MAX_MONEY,
        "La marge mensuelle attribuable au site reste à renseigner, même si elle vaut 0 €.",
        "La marge mensuelle doit être un montant compris entre 0 € et 1 milliard d’euros.",
        calculationBlockers,
      )
    : false;
  const applicationCostsUsable = needsDelay
    ? requireNumber(
        input.applicationCosts,
        MAX_MONEY,
        "Les coûts de dossier et de financement restent à renseigner, même s’ils valent 0 €.",
        "Les coûts de dossier et de financement doivent être compris entre 0 € et 1 milliard d’euros.",
        calculationBlockers,
      )
    : false;

  const delayCost =
    needsDelay &&
    delayMonthsUsable &&
    marginUsable &&
    applicationCostsUsable &&
    input.delayMonths !== undefined &&
    input.monthlyMarginAtRisk !== undefined &&
    input.applicationCosts !== undefined
      ? roundMoney(
          input.delayMonths * input.monthlyMarginAtRisk +
            input.applicationCosts,
        )
      : undefined;

  let notifiedContributionConsistent = false;
  let paidContributionConsistent = false;
  if (input.notificationStage !== "none") {
    notifiedContributionConsistent = requirePositiveNumber(
      input.notifiedContribution,
      MAX_MONEY,
      "La contribution notifiée pour la facture reste à renseigner.",
      "La contribution notifiée doit être strictement positive et inférieure ou égale à 1 milliard d’euros. Un montant nul signifie qu’aucune contribution financière n’est notifiée.",
      calculationBlockers,
    );
    if (
      notifiedContributionConsistent &&
      input.notifiedContribution !== undefined &&
      invoiceIncludingVat !== undefined &&
      input.notifiedContribution > invoiceIncludingVat
    ) {
      calculationBlockers.push(
        "La contribution notifiée déclarée dépasse la facture TTC calculée ; vérifiez le périmètre et la pièce.",
      );
      notifiedContributionConsistent = false;
    }
  }
  if (input.notificationStage === "paid") {
    paidContributionConsistent = requirePositiveNumber(
      input.paidContribution,
      MAX_MONEY,
      "Le paiement effectivement documenté reste à renseigner.",
      "Le paiement documenté doit être strictement positif et inférieur ou égal à 1 milliard d’euros. Un montant nul n’est pas un versement.",
      calculationBlockers,
    );
    if (
      paidContributionConsistent &&
      notifiedContributionConsistent &&
      input.paidContribution !== undefined &&
      input.notifiedContribution !== undefined &&
      input.paidContribution > input.notifiedContribution
    ) {
      calculationBlockers.push(
        "Le paiement déclaré dépasse la contribution notifiée ; rapprochez la décision modifiée, la facture et la preuve de paiement.",
      );
      paidContributionConsistent = false;
    }
    if (
      paidContributionConsistent &&
      input.paidContribution !== undefined &&
      invoiceIncludingVat !== undefined &&
      input.paidContribution > invoiceIncludingVat
    ) {
      calculationBlockers.push(
        "Le paiement déclaré dépasse la facture TTC calculée ; vérifiez le périmètre et la preuve.",
      );
      paidContributionConsistent = false;
    }
  }

  if (
    input.notificationStage === "written" &&
    notifiedContributionConsistent &&
    input.notifiedContribution !== undefined &&
    theoreticalAid !== undefined &&
    Math.abs(input.notifiedContribution - theoreticalAid) >= 0.01
  ) {
    warnings.push(
      "La contribution notifiée diffère de l’aide théorique calculée. La notification écrite prévaut pour le budget déclaré, mais rapprochez assiette, taux, plafond, périmètre de facture et décision.",
    );
  }

  blockingQuestions.push(...calculationBlockers);

  let budgetedAid: number | undefined = 0;
  let paidAid: number | undefined = 0;
  if (input.notificationStage === "written") {
    budgetedAid =
      notifiedContributionConsistent &&
      input.notifiedContribution !== undefined
        ? roundMoney(input.notifiedContribution)
        : undefined;
    paidAid = 0;
  }
  if (input.notificationStage === "paid") {
    budgetedAid =
      notifiedContributionConsistent &&
      input.notifiedContribution !== undefined
        ? roundMoney(input.notifiedContribution)
        : undefined;
    paidAid =
      paidContributionConsistent && input.paidContribution !== undefined
        ? roundMoney(input.paidContribution)
        : undefined;
  }

  const comparisonAid =
    input.notificationStage === "written"
      ? budgetedAid
      : input.notificationStage === "none"
        ? theoreticalAid
        : undefined;

  const sharedResult = {
    blockingQuestions,
    warnings,
    theoreticalAid,
    comparisonAid,
    budgetedAid,
    paidAid,
    invoiceVat,
    recoverableVat,
    invoiceIncludingVat,
    economicCostWithoutAid,
    maximumCashNeedBeforeAid: invoiceIncludingVat,
    delayCost,
  };

  if (
    input.officialSource === "no" ||
    input.profileMatches === "no" ||
    input.expensesConfirmed === "no"
  ) {
    return {
      ...sharedResult,
      code: "stop-or-requalify",
      title: "Écartez ou requalifiez cette piste avant de signer",
      summary:
        "Un dispositif, un profil ou une assiette ne correspond pas. Ne corrigez pas cette contradiction avec une estimation : revenez à l’autorité et à la fiche applicable.",
    };
  }

  if (
    input.officialSource === "unknown" ||
    input.profileMatches === "unknown" ||
    input.expensesConfirmed === "unknown" ||
    (forecastDecisionActive && input.commitmentRule === "unknown")
  ) {
    return {
      ...sharedResult,
      code: "verify-before-commitment",
      title:
        "Dossier incomplet : obtenez les confirmations avant tout engagement",
      summary:
        "Le calcul reste indicatif. Une source, une condition, une ligne de devis ou l’ordre des actes n’est pas confirmé par écrit.",
    };
  }

  if (calculationBlockers.length > 0) {
    return {
      ...sharedResult,
      code: "verify-before-commitment",
      title: "Corrigez ou documentez les données avant de décider",
      summary:
        "Au moins une information requise est absente, hors limites ou incohérente avec la facture et les preuves déclarées. Elle ne peut pas devenir une aide budgétée ou payée.",
    };
  }

  if (
    forecastDecisionActive &&
    (input.projectViableWithoutAid === "no" ||
      input.cashAvailableBeforePayment === "no")
  ) {
    return {
      ...sharedResult,
      code: "reduce-or-finance",
      title: "Réduisez ou financez le projet avant de compter l’aide",
      summary:
        "Une aide incertaine ne répare ni un projet non soutenable ni un besoin de trésorerie non couvert. Réduisez le périmètre, phasez les travaux ou sécurisez un financement adapté.",
    };
  }

  if (
    forecastDecisionActive &&
    (input.projectViableWithoutAid === "unknown" ||
      input.cashAvailableBeforePayment === "unknown")
  ) {
    return {
      ...sharedResult,
      code: "verify-before-commitment",
      title: "Vérifiez la soutenabilité et la trésorerie avant de décider",
      summary:
        "Le projet doit rester soutenable avec 0 € d’aide et la trésorerie doit couvrir l’avance maximale. Une inconnue sur l’un de ces points suspend la décision.",
    };
  }

  if (input.notificationStage === "paid") {
    return {
      ...sharedResult,
      code: "paid-to-reconcile",
      title:
        "Vous déclarez un paiement documenté : rapprochez les trois pièces",
      summary:
        "Le montant recopié entre dans votre réalisé déclaré, sans authentification par l’outil. Rapprochez notification, facture et paiement, puis suivez les obligations de conservation, de visibilité, de maintien et de restitution éventuelle.",
    };
  }

  if (
    input.notificationStage === "written" &&
    delayCost !== undefined &&
    comparisonAid !== undefined &&
    comparisonAid > 0 &&
    delayCost >= comparisonAid
  ) {
    return {
      ...sharedResult,
      code: "launch-after-notification",
      title: "Ne retardez pas le projet jusqu’au paiement de l’aide",
      summary:
        "Le coût documenté de l’attente atteint ou dépasse la contribution notifiée. Vérifiez que la notification autorise l’engagement, puis pilotez le besoin de trésorerie sans attendre le versement.",
    };
  }

  if (input.notificationStage === "written") {
    return {
      ...sharedResult,
      code: "notification-to-secure",
      title: "Vous déclarez une notification écrite : sécurisez ses conditions",
      summary:
        "Le montant recopié peut entrer dans votre budget déclaré, sans authentification par l’outil. Vérifiez l’autorisation d’engager, le calendrier de paiement et les obligations après versement.",
    };
  }

  if (
    input.commitmentRule === "forbidden-before-decision" &&
    delayCost !== undefined &&
    theoreticalAid !== undefined &&
    theoreticalAid > 0 &&
    delayCost >= theoreticalAid
  ) {
    return {
      ...sharedResult,
      code: "choose-between-aid-and-launch",
      title:
        "Choisissez explicitement entre préserver l’aide et lancer le projet",
      summary:
        "Le coût documenté de l’attente atteint ou dépasse l’aide théorique, mais l’engagement avant décision est interdit. Lancer suppose donc d’accepter de renoncer à cette piste, après confirmation écrite.",
    };
  }

  if (
    input.commitmentRule === "allowed-in-writing" &&
    delayCost !== undefined &&
    theoreticalAid !== undefined &&
    theoreticalAid > 0 &&
    delayCost >= theoreticalAid
  ) {
    return {
      ...sharedResult,
      code: "launch-without-budgeting-aid",
      title: "Ne retardez pas le projet uniquement pour l’aide",
      summary:
        "L’engagement est déclaré autorisé par écrit et le coût de l’attente atteint l’aide théorique. Lancez seulement si le projet reste soutenable avec 0 € d’aide.",
    };
  }

  return {
    ...sharedResult,
    code: "verify-before-commitment",
    title: "Aide non notifiée : gardez 0 € au budget",
    summary:
      "La piste peut être poursuivie, mais elle ne réduit ni le budget ni le besoin de trésorerie. Comparez le calendrier officiel au coût réel de l’attente.",
  };
}

export function formatSiteAidQuickCheckMoney(value: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
}

export function buildSiteAidQuickCheckReport(
  input: SiteAidQuickCheckInput,
  result: SiteAidQuickCheckResult,
  generatedAt: string,
): string {
  const money = (
    value: number | undefined,
    maximum = MAX_AGGREGATED_MONEY,
  ) =>
    value === undefined
      ? "À confirmer"
      : usableNumber(value, maximum)
        ? formatSiteAidQuickCheckMoney(value)
        : "Valeur invalide";
  const number = (
    value: number | undefined,
    unit: string,
    maximum = MAX_MONEY,
  ) =>
    value === undefined
      ? "À confirmer"
      : usableNumber(value, maximum)
        ? `${value.toLocaleString("fr-FR")} ${unit}`
        : "Valeur invalide";
  const notApplicable = "Sans objet pour cet état";
  const isGrant = input.supportType === "grant";
  const forecastActive =
    isGrant && input.notificationStage !== "paid";
  const notificationActive =
    isGrant && input.notificationStage !== "none";
  const paymentActive = isGrant && input.notificationStage === "paid";
  const grantValue = (
    value: number | undefined,
    active = true,
    maximum = MAX_MONEY,
  ) => (isGrant && active ? money(value, maximum) : notApplicable);
  const grantNumber = (
    value: number | undefined,
    unit: string,
    active = true,
    maximum = MAX_MONEY,
  ) =>
    isGrant && active ? number(value, unit, maximum) : notApplicable;
  const triState = (value: SiteAidTriState) =>
    value === "yes" ? "Oui, confirmé" : value === "no" ? "Non" : "À confirmer";
  const supportType: Record<SiteAidSupportType, string> = {
    unknown: "À qualifier",
    grant: "Subvention ou contribution non remboursable",
    "support-in-kind": "Accompagnement ou prestation prise en charge",
    "loan-or-guarantee": "Prêt, avance remboursable ou garantie",
    "creator-support": "Aide liée à la création ou aux droits du dirigeant",
    training: "Financement de formation",
    "tax-accounting": "Effet fiscal ou comptable",
  };
  const vatRecovery: Record<SiteAidVatRecovery, string> = {
    full: "Totale",
    partial: "Partielle",
    none: "Nulle",
    unknown: "À confirmer",
  };
  const commitment =
    input.commitmentRule === "allowed-in-writing"
      ? "Engagement autorisé par écrit"
      : input.commitmentRule === "forbidden-before-decision"
        ? "Engagement interdit avant décision"
        : "À confirmer par écrit";
  const notification = !isGrant
    ? "Sans objet dans ce tri"
    : input.notificationStage === "paid"
      ? "Paiement documenté"
      : input.notificationStage === "written"
        ? "Notification écrite"
        : "Aucune notification écrite";
  const economicCost = !isGrant
    ? notApplicable
    : result.economicCostWithoutAid === undefined
      ? "À confirmer"
      : result.economicCostWithoutAid.min ===
          result.economicCostWithoutAid.max
        ? money(result.economicCostWithoutAid.min)
        : `${money(result.economicCostWithoutAid.min)} à ${money(
            result.economicCostWithoutAid.max,
          )}`;

  return [
    "TRI AIDES SITE INTERNET — DOSSIER DE TRAVAIL",
    `Version : ${SITE_AID_QUICK_CHECK_VERSION}`,
    `Généré le : ${generatedAt}`,
    "",
    `Résultat : ${result.title}`,
    result.summary,
    "",
    "QUALIFICATION ET PREUVES DÉCLARÉES",
    `Type de soutien : ${supportType[input.supportType]}`,
    `Source officielle : ${triState(input.officialSource)}`,
    `Profil et territoire : ${
      isGrant ? triState(input.profileMatches) : notApplicable
    }`,
    `Lignes admissibles : ${
      isGrant ? triState(input.expensesConfirmed) : notApplicable
    }`,
    `Ordre des actes : ${
      isGrant && forecastActive ? commitment : notApplicable
    }`,
    `Notification : ${notification}`,
    `Projet viable avec 0 € d’aide : ${
      isGrant && forecastActive
        ? triState(input.projectViableWithoutAid)
        : notApplicable
    }`,
    `Trésorerie avant paiement : ${
      isGrant && forecastActive
        ? triState(input.cashAvailableBeforePayment)
        : notApplicable
    }`,
    input.notificationStage === "paid"
      ? "À joindre au rapprochement payé : notification, facture, preuve du versement et pièces relatives aux obligations post-versement."
      : "À joindre au dossier : URL ou référence exacte, autorité instructrice, date/version de la fiche et réponse écrite sur l’ordre des actes.",
    "",
    "HYPOTHÈSES CHIFFRÉES SAISIES",
    `Devis total HT : ${grantValue(input.quoteExVat)}`,
    `TVA totale de la facture, tous taux additionnés : ${grantValue(input.invoiceVatAmount)}`,
    `Récupération de TVA : ${
      isGrant ? vatRecovery[input.vatRecovery] : notApplicable
    }`,
    `TVA récupérable déclarée : ${grantValue(
      input.recoverableVatAmount,
      input.vatRecovery === "partial",
    )}`,
    `Assiette admissible HT : ${grantValue(
      input.eligibleExVat,
      forecastActive,
    )}`,
    `Taux théorique publié : ${grantNumber(
      input.theoreticalRatePercent,
      "%",
      forecastActive,
      100,
    )}`,
    `Plafond publié : ${grantValue(input.theoreticalCap, forecastActive)}`,
    `Contribution notifiée recopiée : ${grantValue(
      input.notifiedContribution,
      notificationActive,
    )}`,
    `Paiement documenté recopié : ${grantValue(
      input.paidContribution,
      paymentActive,
    )}`,
    `Délai d’attente : ${grantNumber(
      input.delayMonths,
      "mois",
      forecastActive,
      MAX_DELAY_MONTHS,
    )}`,
    `Marge mensuelle attribuable au site : ${grantValue(
      input.monthlyMarginAtRisk,
      forecastActive,
    )}`,
    `Coûts de dossier et de financement : ${grantValue(
      input.applicationCosts,
      forecastActive,
    )}`,
    "",
    "FORMULES ET RÉSULTATS",
    "Facture TTC = devis HT + TVA totale de toutes les lignes.",
    `Facture TTC / besoin maximal prudent avant aide : ${grantValue(
      result.maximumCashNeedBeforeAid,
      true,
      MAX_AGGREGATED_MONEY,
    )}`,
    "Aide théorique = min(assiette admissible HT × taux publié, plafond publié).",
    `Aide théorique : ${grantValue(result.theoreticalAid, forecastActive)}`,
    `Aide utilisée pour la comparaison avec l’attente : ${grantValue(
      result.comparisonAid,
      forecastActive,
    )}`,
    `Aide budgétée : ${money(result.budgetedAid)}`,
    `Aide payée documentée : ${grantValue(result.paidAid)}`,
    "Coût de l’attente = délai en mois × marge mensuelle attribuable + coûts de dossier et de financement.",
    `Coût documenté de l’attente : ${grantValue(
      result.delayCost,
      forecastActive,
      MAX_AGGREGATED_MONEY,
    )}`,
    `Coût économique sans aide après TVA récupérable : ${economicCost}`,
    "",
    "QUESTIONS, INCONNUES ET BLOCAGES",
    ...(result.blockingQuestions.length > 0
      ? result.blockingQuestions.map((item) => `- ${item}`)
      : ["- Aucun blocage explicite dans les réponses saisies."]),
    ...result.warnings.map((item) => `- ${item}`),
    "",
    "Ce document ne prouve ni l’éligibilité, ni l’authenticité d’une pièce, ni l’octroi ou le paiement d’une aide.",
    "Un prêt, une avance remboursable, une garantie, un accompagnement, une formation ou un effet fiscal ne doit jamais être retranché de la facture comme une subvention.",
  ].join("\n");
}
