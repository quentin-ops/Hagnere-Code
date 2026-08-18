export const SITE_AID_DECISION_VERSION = "site-aid-decision-r31-2026-07-27";
export const SITE_AID_DECISION_SOURCE_DATE = "2026-07-26";

export interface SiteAidDecisionEvaluationContext {
  /**
   * Date civile locale à laquelle le précontrôle est exécuté. L’appelant
   * interactif la dérive de l’instant d’analyse conservé avec son fuseau.
   */
  analysisDate: string;
}

export type SiteAidTriState = "yes" | "no" | "unknown";
export type SiteAidStage = "none" | "notified" | "received";
export type SiteAidInstrumentKind =
  "grant" | "loan" | "guarantee" | "tax-relief" | "other" | "unknown";
export type SiteAidLegalBasisStatus =
  "de-minimis" | "not-de-minimis" | "unknown";
export type SiteAidCorporateEventKind =
  "unknown" | "merger-acquisition" | "split" | "both";
export type SiteAidLegalBasisResolution =
  | "de-minimis-general"
  | "de-minimis-agriculture"
  | "de-minimis-fishery"
  | "de-minimis-sgei"
  | "not-de-minimis-external-review"
  | "unknown";
export type SiteAidPaymentMode =
  "reimbursement" | "advance" | "direct" | "unknown";
export type SiteAidBasisScope = "unknown" | "eligible-ex-vat" | "other";
export type SiteAidDeductibleVatFraction = SiteAidTriState | number | undefined;
export type SiteAidDirectPaymentCoverageStatus =
  | "not-applicable"
  | "unknown"
  | "invalid"
  | "partial"
  | "full-provisional"
  | "full-documented";
export type SiteAidCentralRegisterStatus =
  "unknown" | "registered" | "pending" | "not-registered" | "not-applicable";
export type SiteAidEuTerritorialStatus =
  "unknown" | "eu-law-applicable" | "external-review-required";

export const SITE_AID_GATE_IDS = [
  "authority",
  "beneficiary",
  "activity",
  "startOrder",
  "cumulativeAid",
  "notification",
] as const;

export type SiteAidGateId = (typeof SITE_AID_GATE_IDS)[number];
export type SiteAidGates = Record<SiteAidGateId, SiteAidTriState>;

export const SITE_AID_GATE_LABELS: Record<SiteAidGateId, string> = {
  authority: "Guichet ou autorité applicable",
  beneficiary: "Bénéficiaire admis",
  activity: "Activité admise",
  startOrder: "Ordre des actes respecté",
  cumulativeAid: "Contrôle écrit du cumul",
  notification: "Notification écrite",
};

export interface SiteAidProfileInput {
  reference: string;
  verificationDate: string;
  territory: string;
  /**
   * Qualification déclarée de l'applicabilité territoriale du droit de l'Union
   * pour le précontrôle de minimis. Le moteur ne l'infère jamais favorablement
   * du nom libre du territoire et n'authentifie pas la preuve fournie.
   */
  deMinimisEuTerritorialStatus?: SiteAidEuTerritorialStatus;
  deMinimisEuTerritorialEvidence?: string;
  /**
   * Date civile structurée de la pièce territoriale. Elle est distincte du
   * texte libre afin qu’une date simplement mentionnée dans une référence ne
   * puisse jamais servir d’ancre temporelle au moteur.
   */
  deMinimisEuTerritorialEvidenceDate?: string;
  activity: string;
  businessAgeMonths: number | undefined;
  employeeCount: number | undefined;
  annualRevenueExVat: number | undefined;
  legalStatus: string;
  businessNeed: string;
  successIndicator: string;
  decisionOwner: string;
  /**
   * Déclaration structurée sur une fusion, acquisition ou scission pertinente
   * pour la fenêtre de minimis. Le moteur ne reconstitue ni l'opération, ni
   * l'historique juridique des entreprises.
   */
  deMinimisCorporateEventOccurred: SiteAidTriState;
  deMinimisCorporateEventKind: SiteAidCorporateEventKind;
  deMinimisCorporateEventEvidence: string;
  deMinimisCorporateAidHistoryAdjusted: SiteAidTriState;
}

export interface SiteAidAuthorityInput {
  name: string;
  officialUrl: string;
  consultationDate: string;
  scheduleAndAmendmentEvidence: string;
  /**
   * Déclaration structurée de l'utilisateur sur la vérification de la pièce
   * applicable. Le moteur n'infère jamais ce statut depuis le texte libre et
   * n'authentifie ni la pièce, ni son applicabilité.
   */
  postAwardEvidenceVerified: SiteAidTriState;
  postAwardObligationsEvidence: string;
}

export interface SiteAidQuoteLineInput {
  label: string;
  amountExVat: number | undefined;
  vatRatePercent: number | undefined;
  deductibleVatFraction: SiteAidDeductibleVatFraction;
  eligibility: SiteAidTriState;
  evidence: string;
}

export interface SiteAidTermsInput {
  /**
   * Assiette mécanique réellement calculable par ce moteur.
   * Une valeur inattendue est rejetée à l’exécution, jamais assimilée à du HT.
   */
  basisScope: SiteAidBasisScope;
  stage: SiteAidStage;
  instrumentKind: SiteAidInstrumentKind;
  ratePercent: number | undefined;
  capAmount: number | undefined;
  /**
   * Valeur juridique de l'aide utilisée pour le contrôle réglementaire :
   * montant brut d'une subvention ou équivalent-subvention brut (ESB) d'un
   * autre instrument. Elle ne réduit jamais à elle seule le coût ou le besoin
   * de trésorerie.
   */
  legalAidValueAmount: number | undefined;
  /**
   * Montant brut ou ESB exclusivement prospectif, avant notification. Cette
   * valeur déclarative ne constitue jamais un octroi, un encaissement ou une
   * contribution financière et ne peut être utilisée qu’avec sa preuve
   * déclarative distincte.
   */
  prospectiveDeMinimisAidValueAmount?: number;
  /**
   * Référence ou description de la pièce qui porte la valeur prospective.
   * Le moteur exige sa présence mais ne l’authentifie pas.
   */
  prospectiveDeMinimisAidValueEvidence?: string;
  /**
   * Contribution financière que la notification prévoit de payer pour la
   * facture. Seule cette valeur, documentée pour une subvention, peut réduire
   * un coût conditionnel ou une avance de trésorerie.
   */
  approvedFinancialContributionAmount: number | undefined;
  /**
   * Contribution financière effectivement payée par l'autorité. Selon
   * `paymentMode`, elle est encaissée par l'entreprise ou payée directement
   * au fournisseur.
   */
  actualFinancialContributionAmount: number | undefined;
  paymentMode: SiteAidPaymentMode;
  /**
   * Part du montant documenté versée avant le paiement du fournisseur.
   * Elle vaut 0 pour un remboursement, plus de 0 pour une avance et 100
   * lorsque l'aide documentée est payée directement au fournisseur.
   */
  documentedPrepaymentPercent: number | "unknown" | undefined;
  finalInvoiceMatchesQuote: SiteAidTriState;
  finalInvoiceDate: string;
  finalInvoiceReference: string;
  supplierPaymentReference: string;
  receiptDate: string;
  receiptReference: string;
  /**
   * Statut structuré de la base juridique. Une référence exacte à un règlement
   * de minimis reconnu reste prioritaire. Le statut `not-de-minimis` route
   * toujours le dossier vers une revue externe : aucune forme ni URL ne peut
   * être authentifiée par ce moteur local.
   */
  legalBasisStatus: SiteAidLegalBasisStatus;
  deMinimisRegime: string;
  nonDeMinimisLegalBasis: string;
  nonDeMinimisEvidenceReference: string;
  /**
   * État membre de l’autorité qui octroie l’aide. Ce n’est ni le siège du
   * bénéficiaire, ni une donnée que le moteur peut déduire de ce siège.
   */
  deMinimisMemberState: string;
  deMinimisSingleUndertakingScope: string;
  /**
   * Début ISO de l’exercice fiscal qui contient l’ancre du précontrôle pêche
   * (date d’octroi juridique lorsqu’elle existe, sinon date de vérification
   * pour une simulation prospective). Les deux champs suivants sont les débuts
   * réels des deux exercices précédents : aucune borne n'est extrapolée par
   * anniversaire. Ces champs ne valent ni authentification des exercices, ni
   * validation du régime ; incomplets, ils ne permettent d'exclure qu'à partir
   * d'un sous-total assurément compris dans les trois exercices.
   */
  deMinimisFisheryFiscalYearStartDate?: string;
  deMinimisFisheryPreviousFiscalYearStartDate?: string;
  deMinimisFisherySecondPreviousFiscalYearStartDate?: string;
  /**
   * Fin ISO inclusive de l'exercice fiscal courant déclaré. Avec les trois
   * débuts ci-dessus, elle permet seulement de contrôler que l'ancre appartient
   * à l'intervalle déclaré ; le moteur n'authentifie aucune de ces bornes.
   */
  deMinimisFisheryCurrentFiscalYearEndDate?: string;
  similarUndertakingKeysDistinct: SiteAidTriState;
  similarUndertakingKeysEvidence: string;
  sgeiEntrustmentVerified: SiteAidTriState;
  sgeiEntrustmentEvidence: string;
  sgeiServiceIdentity: string;
  /**
   * `yes` signifie qu'une autre compensation relative au même SIEG existe.
   * Seul `no`, appuyé par une preuve écrite, permet de poursuivre le
   * précontrôle sous le règlement 2023/2832.
   */
  sgeiSameServiceCompensationPresent: SiteAidTriState;
  sgeiCompensationEvidence: string;
  legalGrantStatus: SiteAidTriState;
  legalGrantDate: string;
  /**
   * Traçabilité déclarée dans le registre central national français.
   * Ces champs sont exigés seulement lorsque le décret n° 2025-1361 est
   * applicable au régime, à l’État membre de l’autorité d’octroi et à la date
   * d’octroi. Le moteur
   * contrôle leur cohérence formelle sans consulter ni authentifier le registre.
   */
  centralRegisterStatus?: SiteAidCentralRegisterStatus;
  centralRegisterReference?: string;
}

export interface SiteAidWaitInput {
  months: number | undefined;
  monthlyDelayContributionMargin: number | undefined;
  aidSpecificFees: number | undefined;
}

export interface SiteAidRegisterEntryInput {
  authority: string;
  scheme: string;
  legalBasisStatus: SiteAidLegalBasisStatus;
  regime: string;
  nonDeMinimisLegalBasis: string;
  nonDeMinimisEvidenceReference: string;
  /**
   * État membre de l’autorité qui a octroyé cette aide antérieure. Ce n’est
   * pas le siège du bénéficiaire et le moteur ne l’infère jamais.
   */
  memberState: string;
  singleUndertakingScope: string;
  similarUndertakingKeysDistinct: SiteAidTriState;
  similarUndertakingKeysEvidence: string;
  sgeiEntrustmentVerified: SiteAidTriState;
  sgeiEntrustmentEvidence: string;
  sgeiServiceIdentity: string;
  sgeiSameServiceCompensationPresent: SiteAidTriState;
  sgeiCompensationEvidence: string;
  /**
   * Relation déclarée entre le service de cette ligne SIEG antérieure et le
   * service de l’aide courante : `yes` = même service, `no` = services
   * distincts, `unknown` = relation non établie. Une différence de libellé
   * ne vaut jamais `no`.
   */
  sgeiRelationToCurrentService: SiteAidTriState;
  /**
   * Référence identifiable étayant la relation déclarée. Le moteur n’en
   * authentifie ni la source, ni le contenu, ni la portée juridique.
   */
  sgeiRelationToCurrentServiceEvidence: string;
  amount: number | undefined;
  legalGrantDate: string;
  centralRegisterStatus?: SiteAidCentralRegisterStatus;
  centralRegisterReference?: string;
  expenses: string;
  sameBaseOrInvoice: SiteAidTriState;
}

export interface SiteAidDecisionInput {
  profile: SiteAidProfileInput;
  authority: SiteAidAuthorityInput;
  quoteLines: SiteAidQuoteLineInput[];
  gates: SiteAidGates;
  gateEvidence: Record<SiteAidGateId, string>;
  aid: SiteAidTermsInput;
  availableCash: number | undefined;
  wait: SiteAidWaitInput;
  aidRegister: SiteAidRegisterEntryInput[];
}

export type SiteAidDecisionCode =
  | "invalid"
  | "excluded"
  | "unsupported-basis"
  | "incomplete"
  | "candidate-not-budgeted"
  | "notified-cash-gap"
  | "notified-wait-dominated"
  | "notified-wait-dominated-cash-gap"
  | "notified-usable"
  | "received";

export interface SiteAidDecisionResult {
  code: SiteAidDecisionCode;
  explanation: string;
  invalidIssues: string[];
  missingEvidence: string[];
  exclusionReasons: string[];
  warnings: string[];
  toolLimitations: string[];
  invoiceTotalExVat: number | undefined;
  invoiceVat: number | undefined;
  invoiceTotalIncludingVat: number | undefined;
  deductibleVat: number | undefined;
  nonDeductibleVat: number | undefined;
  eligibleSubtotalExVat: number | undefined;
  theoreticalAidNonAcquired: number | undefined;
  /**
   * Montant brut prospectif d’une subvention ou ESB prospectif documenté
   * avant notification, utilisé exclusivement pour le précontrôle de minimis.
   * Il reste non acquis et ne réduit ni le budget, ni le coût, ni le besoin de
   * trésorerie.
   */
  prospectiveDeMinimisAidValue: number | undefined;
  budgetedAid: number | undefined;
  legalAidValueUnderConditions: number | undefined;
  approvedFinancialContributionUnderConditions: number | undefined;
  actualFinancialContribution: number | undefined;
  financialContributionDifference: number | undefined;
  /**
   * Compatibilité de lecture avec les consommateurs R5. Ces alias représentent
   * désormais exclusivement les flux financiers, jamais la valeur ESB.
   */
  notifiedAidUnderConditions: number | undefined;
  receivedAid: number | undefined;
  aidReceiptDifference: number | undefined;
  economicCostWithoutAid: number | undefined;
  conditionalCostAfterNotification: number | undefined;
  realizedCostAfterReceipt: number | undefined;
  documentedPrepaymentAmount: number | undefined;
  maximumCashNeed: number | undefined;
  cashGap: number | undefined;
  waitingMarginCost: number | undefined;
  aidSpecificFees: number | undefined;
  waitingAndFeeCost: number | undefined;
  waitComparisonAid: number | undefined;
  waitDominatesComparisonAid: boolean | undefined;
  registeredAidTotal: number | undefined;
  sameBaseAidTotal: number | undefined;
  currentLegalBasisResolution: SiteAidLegalBasisResolution;
  registerLegalBasisResolutions: SiteAidLegalBasisResolution[];
  /**
   * Égalité strictement arithmétique entre le paiement direct cohérent et la
   * facture TTC connue. Elle ne vaut pas validation documentaire.
   */
  directPaymentArithmeticCoversInvoiceInFull: boolean | undefined;
  /**
   * `true` signifie exclusivement que l'égalité arithmétique et toute la
   * chaîne documentaire du paiement direct sont validées.
   */
  directPaymentCoversInvoiceInFull: boolean | undefined;
  directPaymentCoverageStatus: SiteAidDirectPaymentCoverageStatus;
  directCompanySupplierRemainder: number | undefined;
  supplierRemainderEvidenceRequired: boolean;
}

const DECISION_LABELS: Record<SiteAidDecisionCode, string> = {
  invalid: "DOSSIER INVALIDE — CORRIGER LES DONNÉES",
  excluded: "PISTE À ÉCARTER OU À FAIRE ARBITRER PAR ÉCRIT",
  "unsupported-basis":
    "ASSIETTE NON PRISE EN CHARGE — AUCUNE AIDE THÉORIQUE CALCULÉE",
  incomplete: "DOSSIER INCOMPLET — VERDICT GLOBAL SUSPENDU",
  "candidate-not-budgeted": "CANDIDAT À VÉRIFIER — AIDE BUDGÉTÉE À 0 €",
  "notified-cash-gap": "NOTIFICATION SOUS CONDITIONS — ÉCART DE TRÉSORERIE",
  "notified-wait-dominated":
    "NOTIFICATION SOUS CONDITIONS — NE PAS ATTENDRE UNIQUEMENT POUR L’AIDE",
  "notified-wait-dominated-cash-gap":
    "ATTENTE NON RENTABLE ET TRÉSORERIE INSUFFISANTE — NE PAS ENGAGER LE PROJET COMPLET",
  "notified-usable":
    "NOTIFICATION SOUS CONDITIONS — PLAN DE TRÉSORERIE SOUTENABLE",
  received: "AIDE VERSÉE OU PAYÉE DIRECTEMENT AU FOURNISSEUR — COÛT RÉALISÉ",
};

const TRI_STATE_LABELS: Record<SiteAidTriState, string> = {
  yes: "OUI",
  no: "NON",
  unknown: "À CONFIRMER",
};

const CORPORATE_EVENT_KIND_LABELS: Record<SiteAidCorporateEventKind, string> = {
  unknown: "À confirmer",
  "merger-acquisition": "Fusion ou acquisition",
  split: "Scission",
  both: "Fusion ou acquisition et scission",
};

const PAYMENT_MODE_LABELS: Record<SiteAidPaymentMode, string> = {
  reimbursement: "Remboursement après paiement",
  advance: "Avance documentée",
  direct: "Paiement direct au fournisseur",
  unknown: "À confirmer",
};

const DIRECT_PAYMENT_COVERAGE_STATUS_LABELS: Record<
  SiteAidDirectPaymentCoverageStatus,
  string
> = {
  "not-applicable": "Non applicable",
  unknown: "ND — couverture arithmétique indéterminée",
  invalid: "ND — données invalides",
  partial: "Paiement direct arithmétiquement partiel",
  "full-provisional":
    "Couverture intégrale arithmétique provisoire — validation documentaire suspendue",
  "full-documented": "Couverture intégrale documentée",
};

const CENTRAL_REGISTER_STATUS_LABELS: Record<
  SiteAidCentralRegisterStatus,
  string
> = {
  unknown: "À confirmer",
  registered: "Enregistré",
  pending: "Transmission des données d’octroi en cours",
  "not-registered": "Non enregistré",
  "not-applicable": "Non applicable",
};

const EU_TERRITORIAL_STATUS_LABELS: Record<SiteAidEuTerritorialStatus, string> =
  {
    unknown: "À confirmer",
    "eu-law-applicable": "Droit de l’Union déclaré applicable",
    "external-review-required": "Revue territoriale externe requise",
  };

const INSTRUMENT_KIND_LABELS: Record<SiteAidInstrumentKind, string> = {
  grant: "Subvention",
  loan: "Prêt",
  guarantee: "Garantie",
  "tax-relief": "Allègement fiscal ou social",
  other: "Autre instrument",
  unknown: "À confirmer",
};

const LEGAL_BASIS_STATUS_LABELS: Record<SiteAidLegalBasisStatus, string> = {
  "de-minimis": "De minimis",
  "not-de-minimis": "Hors de minimis déclaré — revue externe obligatoire",
  unknown: "À confirmer",
};

const LEGAL_BASIS_RESOLUTION_LABELS: Record<
  SiteAidLegalBasisResolution,
  string
> = {
  "de-minimis-general": "De minimis général — règlement 2023/2831 reconnu",
  "de-minimis-agriculture": "De minimis agricole — règlement 1408/2013 reconnu",
  "de-minimis-fishery":
    "De minimis pêche et aquaculture — règlement 717/2014 reconnu",
  "de-minimis-sgei":
    "De minimis SIEG — règlement 2023/2832 reconnu syntaxiquement",
  "not-de-minimis-external-review":
    "Hors de minimis déclaré — revue externe obligatoire",
  unknown: "Base juridique non résolue",
};

const NON_DE_MINIMIS_EXTERNAL_REVIEW_LIMITATION =
  "Hors de minimis — revue externe obligatoire : l’outil local ne peut authentifier le document, sa pertinence, la décision d’aide ni le bénéficiaire. Une confirmation écrite de l’autorité compétente ou une validation humaine hors outil est requise.";
const DE_MINIMIS_REFERENCE_SYNTAX_LIMITATION =
  "Référence de minimis reconnue syntaxiquement : l’outil local n’authentifie aucune pièce, URL, décision d’aide, entreprise ni applicabilité du règlement. Les justificatifs et le rattachement juridique doivent être confirmés par l’autorité compétente ou une revue humaine.";

const STAGE_LABELS: Record<SiteAidStage, string> = {
  none: "Aucune notification",
  notified: "Notification écrite sous conditions",
  received: "Aide versée ou payée directement au fournisseur",
};

const BASIS_SCOPE_LABELS: Record<SiteAidBasisScope, string> = {
  unknown: "À confirmer",
  "eligible-ex-vat": "Dépenses admissibles hors taxes prouvées",
  other: "Autre assiette — calcul théorique non pris en charge",
};

const UNKNOWN_TEXT_SENTINELS = new Set([
  "",
  "nd",
  "n.d.",
  "n/d",
  "n/a",
  "na",
  "inconnu",
  "inconnue",
  "non déterminé",
  "non determine",
  "non défini",
  "non defini",
  "undefined",
  "nan",
  "infinity",
  "-infinity",
]);

function addUnique(target: string[], message: string): void {
  if (!target.includes(message)) target.push(message);
}

function hasRequiredText(value: string): boolean {
  return !UNKNOWN_TEXT_SENTINELS.has(value.trim().toLocaleLowerCase("fr-FR"));
}

function safeText(value: string, fallback = "ND"): string {
  if (!hasRequiredText(value)) return fallback;
  return value
    .replace(/[\r\n\t]+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\b(?:undefined|NaN|-?Infinity)\b/gi, "ND")
    .trim();
}

function reportText(value: string, fallback = "ND"): string {
  if (value === "" || /^ +$/u.test(value)) return fallback;

  let escaped = "";
  for (let offset = 0; offset < value.length;) {
    const firstUnit = value.charCodeAt(offset);
    const secondUnit =
      offset + 1 < value.length ? value.charCodeAt(offset + 1) : undefined;
    const isSurrogatePair =
      firstUnit >= 0xd800 &&
      firstUnit <= 0xdbff &&
      secondUnit !== undefined &&
      secondUnit >= 0xdc00 &&
      secondUnit <= 0xdfff;
    const width = isSurrogatePair ? 2 : 1;
    const character = value.slice(offset, offset + width);
    const codePoint = isSurrogatePair
      ? (firstUnit - 0xd800) * 0x400 + (secondUnit! - 0xdc00) + 0x10000
      : firstUnit;
    offset += width;

    if (character === "\\") {
      escaped += "\\\\";
      continue;
    }
    if (character === "|") {
      escaped += "\\u{007C}";
      continue;
    }
    const shortEscape =
      codePoint === 0x00
        ? "\\0"
        : codePoint === 0x08
          ? "\\b"
          : codePoint === 0x09
            ? "\\t"
            : codePoint === 0x0a
              ? "\\n"
              : codePoint === 0x0b
                ? "\\v"
                : codePoint === 0x0c
                  ? "\\f"
                  : codePoint === 0x0d
                    ? "\\r"
                    : undefined;
    if (shortEscape !== undefined) {
      escaped += shortEscape;
      continue;
    }
    if (
      codePoint <= 0x1f ||
      (codePoint >= 0x7f && codePoint <= 0x9f) ||
      (codePoint >= 0xd800 && codePoint <= 0xdfff) ||
      /[\p{Cf}\p{Zl}\p{Zp}]/u.test(character) ||
      (character !== " " && /\p{Zs}/u.test(character)) ||
      /\p{Default_Ignorable_Code_Point}/u.test(character)
    ) {
      escaped += `\\u{${codePoint
        .toString(16)
        .toUpperCase()
        .padStart(4, "0")}}`;
      continue;
    }
    escaped += character;
  }
  return escaped;
}

function visibleEntityGroupingText(value: string): string {
  const display = hasRequiredText(value) ? value : "ND";
  return display.replace(/ {2,}/g, (spaces) => "␠".repeat(spaces.length));
}

function isValidIsoDate(value: string): boolean {
  const match = value.trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return false;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (year < 1 || month < 1 || month > 12 || day < 1) return false;
  const leapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  const daysInMonth = [
    31,
    leapYear ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  return day <= daysInMonth[month - 1];
}

function isTriState(value: unknown): value is SiteAidTriState {
  return value === "yes" || value === "no" || value === "unknown";
}

function isCorporateEventKind(
  value: unknown,
): value is SiteAidCorporateEventKind {
  return (
    value === "unknown" ||
    value === "merger-acquisition" ||
    value === "split" ||
    value === "both"
  );
}

function isStage(value: unknown): value is SiteAidStage {
  return value === "none" || value === "notified" || value === "received";
}

function isInstrumentKind(value: unknown): value is SiteAidInstrumentKind {
  return (
    value === "grant" ||
    value === "loan" ||
    value === "guarantee" ||
    value === "tax-relief" ||
    value === "other" ||
    value === "unknown"
  );
}

function isLegalBasisStatus(value: unknown): value is SiteAidLegalBasisStatus {
  return (
    value === "de-minimis" || value === "not-de-minimis" || value === "unknown"
  );
}

function isPaymentMode(value: unknown): value is SiteAidPaymentMode {
  return (
    value === "reimbursement" ||
    value === "advance" ||
    value === "direct" ||
    value === "unknown"
  );
}

function isBasisScope(value: unknown): value is SiteAidBasisScope {
  return (
    value === "unknown" || value === "eligible-ex-vat" || value === "other"
  );
}

function isCentralRegisterStatus(
  value: unknown,
): value is SiteAidCentralRegisterStatus {
  return (
    value === "unknown" ||
    value === "registered" ||
    value === "pending" ||
    value === "not-registered" ||
    value === "not-applicable"
  );
}

function isEuTerritorialStatus(
  value: unknown,
): value is SiteAidEuTerritorialStatus {
  return (
    value === "unknown" ||
    value === "eu-law-applicable" ||
    value === "external-review-required"
  );
}

function isoDateYearsBefore(value: string, years: number): string | undefined {
  if (!isValidIsoDate(value)) return undefined;
  const [yearText, monthText, dayText] = value.trim().split("-");
  const year = Number(yearText) - years;
  const month = Number(monthText);
  const day = Number(dayText);
  if (year < 1) return undefined;
  const lastDay = new Date(Date.UTC(year, month, 0)).getUTCDate();
  return `${String(year).padStart(4, "0")}-${monthText}-${String(
    Math.min(day, lastDay),
  ).padStart(2, "0")}`;
}

function normalizedGroupingText(value: string): string {
  return safeText(value, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("fr-FR")
    .replace(/\s+/g, " ")
    .trim();
}

const FRENCH_OVERSEAS_TERRITORY_REVIEW_ALIASES = new Set([
  "bl",
  "gf",
  "gp",
  "guadeloupe",
  "guyane",
  "guyane francaise",
  "la reunion",
  "martinique",
  "mayotte",
  "mf",
  "mq",
  "nc",
  "nouvelle caledonie",
  "pf",
  "pm",
  "polynesie",
  "polynesie francaise",
  "re",
  "saint barthelemy",
  "saint barth",
  "saint martin",
  "saint pierre et miquelon",
  "st barthelemy",
  "st barth",
  "st martin",
  "tf",
  "terres australes et antarctiques francaises",
  "wallis et futuna",
  "wf",
  "yt",
]);

/**
 * Détecteur de risque uniquement : il ne transforme jamais un nom libre en
 * qualification RUP, PTOM ou territoire d'application du droit de l'Union.
 */
function requiresFrenchOverseasTerritorialReview(value: string): boolean {
  const normalized = normalizedGroupingText(value)
    .replace(/[’']/gu, " ")
    .replace(/[-‐‑‒–—―−/(),.;:]+/gu, " ")
    .replace(/\s+/gu, " ")
    .trim();
  if (FRENCH_OVERSEAS_TERRITORY_REVIEW_ALIASES.has(normalized)) return true;
  return [...FRENCH_OVERSEAS_TERRITORY_REVIEW_ALIASES].some(
    (alias) =>
      alias.length > 3 &&
      (normalized.startsWith(`${alias} `) ||
        normalized.endsWith(` ${alias}`) ||
        normalized.includes(` ${alias} `)),
  );
}

const POST_AWARD_NON_TEXTUAL_SEMANTIC_CODE_POINTS =
  /[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}]/gu;

/**
 * Contrat R20 ciblé sur la preuve post-attribution : les caractères de format,
 * de contrôle non textuels, séparateurs Unicode, invisibles par défaut et
 * demi-surrogates ne doivent ni fabriquer du contenu, ni couper un marqueur
 * d'incertitude. CR, LF, tabulation, Zs et tirets Unicode Pd restent des
 * séparateurs sémantiques utiles. Le texte brut reste inchangé pour le TXT,
 * où reportText l'échappe séparément.
 */
function postAwardSemanticSource(value: string): string {
  return value.replace(
    POST_AWARD_NON_TEXTUAL_SEMANTIC_CODE_POINTS,
    (character) =>
      character === "\r" || character === "\n" || character === "\t"
        ? character
        : "",
  );
}

type BoundedEvidencePolarity =
  "affirmed" | "denied" | "ambiguous" | "unresolved";

/**
 * Filtre R24 volontairement borné : il détecte seulement quelques
 * contradictions littérales entre un statut structuré et des clauses de
 * preuve usuelles. Il ne résout aucun langage juridique libre, ne parse pas un
 * acte, n’authentifie aucune pièce et ne déduit jamais le statut structuré du
 * texte. NFKD sert seulement à rendre robustes les comparaisons aux accents, à
 * la casse et aux graphies Unicode compatibles.
 */
function boundedEvidenceText(value: string): string {
  return postAwardSemanticSource(value)
    .normalize("NFKD")
    .replace(/\p{M}+/gu, "")
    .toLocaleLowerCase("fr-FR")
    .replace(/[’‘‛ʼ＇]/gu, "'")
    .replace(/[\p{Pd}−]+/gu, "-")
    .replace(/[^\p{L}\p{N}'-]+/gu, " ")
    .replace(/\s+/gu, " ")
    .trim();
}

function boundedEvidenceClauses(value: string): string[] {
  return postAwardSemanticSource(value)
    .normalize("NFKD")
    .replace(/\p{M}+/gu, "")
    .toLocaleLowerCase("fr-FR")
    .replace(/[’‘‛ʼ＇]/gu, "'")
    .replace(/[\p{Pd}−]+/gu, "-")
    .split(
      /[;.!?…]+|\b(?:mais|cependant|toutefois|en\s+revanche|alors\s+que)\b/gu,
    )
    .map((clause) => boundedEvidenceText(clause))
    .filter((clause) => clause.length > 0);
}

function boundedEvidenceExceptionTails(clause: string): string[] {
  const exceptionMarker =
    /\b(?:sauf|hormis|excepte|hors)\b|\ba\s+part\b|\bmise?s?\s+a\s+part\b|\bexception\s+faite\s+d(?:e|')\s*|\ba\s+l[' ]exception\s+d(?:e|')\s*/gu;
  return [...clause.matchAll(exceptionMarker)]
    .map((match) => clause.slice((match.index ?? 0) + match[0].length).trim())
    .filter((tail) => tail.length > 0);
}

function hasExplicitCorporateOperation(clause: string): boolean {
  const operationNoun =
    /\b(?:fusion|acquisition|scission|absorption|rachat|achat|reprise|prise\s+de\s+controle)\b/u;
  const completedOperationVerb =
    /\b(?:a|ont|avait|avaient|est|sont|fut|furent|ete|avons|avez)\s+(?:fusionne|fusionnee?s?|absorbe|absorbee?s?|acquis|acquise?s?|rachete|rachetee?s?|repris|reprise?s?|scinde|scindee?s?)\b/u;
  return (
    /\btraite\s+de\s+fusion\b/u.test(clause) ||
    /\b(?:traite|acte|convention|decision)\s+(?:de\s+)?(?:fusion|acquisition|scission|absorption|rachat|achat|reprise|prise\s+de\s+controle)\b.{0,60}\b[a-z]{1,16}[-/.]\d{2,}(?:[-./][a-z0-9]+)*\b/u.test(
      clause,
    ) ||
    /\b(?:fusion|acquisition|scission|absorption|rachat|achat|reprise|prise\s+de\s+controle)\b.{0,60}\b(?:realisee?|effecti(?:f|ve)s?|actee|intervenue?|absorbee?|acquise?|finalisee?|conclue?|executee?)\b/u.test(
      clause,
    ) ||
    /\b(?:societe|entreprise)\b.{0,50}\b(?:fusionnee?|absorbee?|acquise?|scindee?|rachetee?)\b/u.test(
      clause,
    ) ||
    completedOperationVerb.test(clause) ||
    (operationNoun.test(clause) &&
      (hasValidStructuredEvidenceDate(clause) ||
        hasValidNormalizedEvidenceDate(clause)))
  );
}

function corporateEventEvidencePolarity(
  value: string,
): BoundedEvidencePolarity {
  const clauses = boundedEvidenceClauses(value);
  if (clauses.length === 0) return "unresolved";
  let deniedClause = false;
  let ambiguousClause = false;

  for (const clause of clauses) {
    const explicitAbsence =
      /\b(?:aucun(?:e)?|sans|absence d(?:e|'))\s+(?:operation\s+(?:de\s+)?)?(?:fusion|acquisition|scission|absorption|rachat)\b/u.test(
        clause,
      ) ||
      /\b(?:pas|jamais)\s+(?:de\s+)?(?:fusion|acquisition|scission|absorption|rachat)\b/u.test(
        clause,
      ) ||
      /\bn[' ]?a\s+(?:jamais\s+)?(?:pas\s+)?ete\s+(?:fusionnee?|absorbee?|acquise?|scindee?|rachetee?)\b/u.test(
        clause,
      );
    const resolvedWithoutOperation =
      /\b(?:projet|operation|traite)\b.{0,60}\b(?:fusion|acquisition|scission|absorption|rachat)\b.{0,60}\b(?:annulee?|abandonnee?|retiree?|sans\s+suite|non\s+aboutie?|non\s+realisee?)\b/u.test(
        clause,
      ) ||
      /\b(?:fusion|acquisition|scission|absorption|rachat)\b.{0,60}\b(?:annulee?|abandonnee?|retiree?|sans\s+suite|n[' ]?a\s+pas\s+abouti|non\s+realisee?)\b/u.test(
        clause,
      );
    const explicitOperation = hasExplicitCorporateOperation(clause);
    const exceptionTails = boundedEvidenceExceptionTails(clause);
    const explicitPositiveException = exceptionTails.some(
      hasExplicitCorporateOperation,
    );
    /*
     * Une opération positivement identifiée dans sa propre clause reste
     * pertinente même si une autre clause nie un autre concept, par exemple
     * « aucune fusion, mais une acquisition réalisée ». Une exception
     * explicite (« sauf », « hormis », « excepté », « à l'exception de »)
     * prime pareillement lorsqu'elle décrit une opération réalisée.
     */
    if (
      explicitPositiveException ||
      (explicitOperation && !explicitAbsence && !resolvedWithoutOperation)
    ) {
      return "affirmed";
    }
    /*
     * Une exception non vide après une absence générale empêche de conclure à
     * l'absence, même si sa morphologie n'est pas reconnue. Seule une opération
     * positivement identifiable permet de passer d'« ambigu » à « affirmé ».
     */
    if (explicitAbsence && exceptionTails.length > 0) {
      ambiguousClause = true;
      continue;
    }
    if (explicitAbsence || resolvedWithoutOperation) {
      deniedClause = true;
    } else if (
      /\b(?:fusion|acquisition|scission|absorption|rachat)\b/u.test(clause)
    ) {
      ambiguousClause = true;
    }
  }

  if (deniedClause && ambiguousClause) return "ambiguous";
  if (deniedClause) return "denied";
  return ambiguousClause ? "ambiguous" : "unresolved";
}

const BOUNDED_PREDICATE_RADIUS = 18;
const BOUNDED_COORDINATION_TOKENS = new Set(["et", "ou", "puis", "or", "donc"]);
const BOUNDED_NEGATIVE_TOKENS = new Set([
  "pas",
  "plus",
  "jamais",
  "ni",
  "aucunement",
  "nullement",
  "point",
  "guere",
]);
const BOUNDED_RESTRICTIVE_TOKENS = new Set([
  "seulement",
  "uniquement",
  "exclusivement",
  "que",
]);

function isBoundedRefusalToken(token: string): boolean {
  return (
    /^(?:refus\p{L}*|rejet\p{L}*|oppos\p{L}*|interdi\p{L}*|renonc\p{L}*|ecart\p{L}*|declin\p{L}*|prohib\p{L}*|empech\p{L}*|cess\p{L}*|faux)$/u.test(
      token,
    ) || /^exclu(?:t|ent|s|e|es|re|sion|sions)?$/u.test(token)
  );
}

function boundedClauseTokens(clause: string): string[] {
  return (
    clause
      .replace(/\bn'\s*(?=\p{L})/gu, "ne ")
      .replace(/'/gu, " ")
      .match(/[\p{L}\p{N}]+/gu) ?? []
  );
}

function boundedPredicateRange(
  tokens: string[],
  predicateIndex: number,
): { start: number; end: number } {
  let start = Math.max(0, predicateIndex - BOUNDED_PREDICATE_RADIUS);
  let end = Math.min(
    tokens.length - 1,
    predicateIndex + BOUNDED_PREDICATE_RADIUS,
  );
  const isPredicateLike = (token: string) =>
    isBoundedRefusalToken(token) ||
    /^(?:confi\p{L}*|attribu\p{L}*|charg\p{L}*|investi\p{L}*|deleg\p{L}*|distinct\p{L}*|differ\p{L}*|separ\p{L}*|identiqu\p{L}*|appli\p{L}*|relev\p{L}*|couvert\p{L}*|echapp\p{L}*|cess\p{L}*)$/u.test(
      token,
    );
  const isStrongBoundary = (index: number) => {
    const coordination = tokens[index] ?? "";
    if (!BOUNDED_COORDINATION_TOKENS.has(coordination)) return false;
    if (
      coordination === "puis" ||
      coordination === "or" ||
      coordination === "donc"
    ) {
      return true;
    }
    /*
     * « et/ou » coordonnent aussi des adverbes (« réellement et
     * juridiquement pas »). Ils ne coupent donc le voisinage que lorsqu'un
     * prédicat identifiable se trouve de chaque côté.
     */
    const leftHasPredicate = tokens
      .slice(Math.max(0, index - 7), index)
      .some(isPredicateLike);
    const rightHasPredicate = tokens
      .slice(index + 1, Math.min(tokens.length, index + 8))
      .some(isPredicateLike);
    return leftHasPredicate && rightHasPredicate;
  };
  for (let index = predicateIndex - 1; index >= start; index -= 1) {
    if (isStrongBoundary(index)) {
      start = index + 1;
      break;
    }
  }
  for (let index = predicateIndex + 1; index <= end; index += 1) {
    if (isStrongBoundary(index)) {
      end = index - 1;
      break;
    }
  }
  return { start, end };
}

function isRestrictiveNegation(
  tokens: string[],
  negativeIndex: number,
  rangeEnd: number,
): boolean {
  if (tokens[negativeIndex] !== "pas" && tokens[negativeIndex] !== "plus") {
    return false;
  }
  const searchEnd = Math.min(rangeEnd, negativeIndex + 3);
  for (let index = negativeIndex + 1; index <= searchEnd; index += 1) {
    const token = tokens[index] ?? "";
    if (BOUNDED_RESTRICTIVE_TOKENS.has(token)) return true;
    if (
      /^(?:services?|missions?|sieg|confi\p{L}*|attribu\p{L}*|charg\p{L}*|investi\p{L}*)$/u.test(
        token,
      )
    ) {
      return false;
    }
  }
  return false;
}

/**
 * Cherche une négation dans un voisinage lexical borné par la clause et par
 * les coordinations fortes. Les mots intercalaires sont volontairement libres :
 * la sûreté ne dépend donc plus d'une liste finie d'adverbes. Seules les
 * restrictions explicites « pas/plus seulement, uniquement,
 * exclusivement » sont conservées comme affirmatives.
 */
function hasBoundedPredicateNegation(
  tokens: string[],
  predicateIndex: number,
): boolean {
  const { start, end } = boundedPredicateRange(tokens, predicateIndex);
  const hasNegativeFrame = tokens
    .slice(start, Math.min(end, predicateIndex + 1) + 1)
    .includes("ne");
  if (
    tokens[predicateIndex] === "faux" &&
    hasNegativeFrame &&
    tokens
      .slice(Math.max(start, predicateIndex - 3), predicateIndex)
      .includes("pas")
  ) {
    return true;
  }
  let restrictiveFrame = false;
  let cancelledRefusalFrame = false;

  for (let index = start; index <= end; index += 1) {
    const token = tokens[index] ?? "";
    if (BOUNDED_NEGATIVE_TOKENS.has(token)) {
      const negatedFalsityBeforePredicate =
        token === "pas" &&
        index < predicateIndex &&
        tokens
          .slice(index + 1, Math.min(predicateIndex, index + 4))
          .includes("faux");
      const negatedRefusalImmediatelyBefore =
        token === "pas" &&
        index < predicateIndex &&
        tokens
          .slice(Math.max(start, index - 4), index)
          .some(isBoundedRefusalToken);
      if (hasNegativeFrame && negatedFalsityBeforePredicate) {
        cancelledRefusalFrame = true;
        continue;
      }
      if (hasNegativeFrame && negatedRefusalImmediatelyBefore) {
        cancelledRefusalFrame = true;
        continue;
      }
      if (isRestrictiveNegation(tokens, index, end)) {
        restrictiveFrame = true;
        continue;
      }
      if (
        hasNegativeFrame ||
        token !== "pas" ||
        Math.abs(index - predicateIndex) <= 6
      ) {
        return true;
      }
    }
    if (
      (token === "en" || token === "d") &&
      /^(?:aucun|aucune|aucuns|aucunes)$/u.test(tokens[index + 1] ?? "") &&
      /^(?:cas|maniere|facon)$/u.test(tokens[index + 2] ?? "")
    ) {
      return true;
    }
    if (token === "en" && tokens[index + 1] === "rien") {
      return true;
    }
    if (
      token === "sans" &&
      index < predicateIndex &&
      predicateIndex - index <= 5
    ) {
      return true;
    }
  }
  /*
   * Une particule « ne » non résolue est fermée par défaut. Les seules
   * exceptions sont les restrictions positives explicitement reconnues.
   */
  return hasNegativeFrame && !restrictiveFrame && !cancelledRefusalFrame;
}

function hasBoundedRefusalOfPredicate(
  tokens: string[],
  predicateIndex: number,
): boolean {
  const start = Math.max(0, predicateIndex - BOUNDED_PREDICATE_RADIUS);
  for (let index = start; index < predicateIndex; index += 1) {
    if (
      isBoundedRefusalToken(tokens[index] ?? "") &&
      !hasBoundedPredicateNegation(tokens, index)
    ) {
      return true;
    }
  }
  return false;
}

/**
 * Une absence de refus de confirmer une proposition ne constitue pas elle-même
 * une affirmation de cette proposition. Cette garde ne vise que la structure
 * bornée « refus nié -> verbe de conclusion -> que -> prédicat ».
 */
function hasBoundedIndirectCancelledAssertion(
  tokens: string[],
  predicateIndex: number,
): boolean {
  const queIndex = tokens.lastIndexOf("que", predicateIndex - 1);
  if (queIndex < 0 || predicateIndex - queIndex > 12) return false;
  const assertionStart = Math.max(0, queIndex - 4);
  const assertionIndex = tokens
    .slice(assertionStart, queIndex)
    .findLastIndex((token) =>
      /^(?:confirm\p{L}*|conclu\p{L}*|etabli\p{L}*|reconna\p{L}*|affirm\p{L}*)$/u.test(
        token,
      ),
    );
  if (assertionIndex < 0) return false;
  const absoluteAssertionIndex = assertionStart + assertionIndex;
  const refusalStart = Math.max(0, absoluteAssertionIndex - 8);
  return tokens
    .slice(refusalStart, absoluteAssertionIndex)
    .some((token, relativeIndex) => {
      const refusalIndex = refusalStart + relativeIndex;
      return (
        isBoundedRefusalToken(token) &&
        hasBoundedPredicateNegation(tokens, refusalIndex)
      );
    });
}

function hasBoundedMissingServiceObject(
  tokens: string[],
  predicateIndex: number,
): boolean {
  const { start, end } = boundedPredicateRange(tokens, predicateIndex);
  for (let index = start; index <= end; index += 1) {
    if (
      /^(?:aucun|aucune|aucuns|aucunes)$/u.test(tokens[index] ?? "") &&
      tokens
        .slice(index + 1, Math.min(end, index + 4) + 1)
        .some((token) => /^(?:services?|missions?|sieg)$/u.test(token))
    ) {
      return true;
    }
    if (
      tokens[index] === "pas" &&
      tokens[index + 1] === "de" &&
      /^(?:services?|missions?|sieg)$/u.test(tokens[index + 2] ?? "")
    ) {
      return true;
    }
  }
  return false;
}

function hasExplicitSgeiEntrustmentDenial(clause: string): boolean {
  const tokens = boundedClauseTokens(clause);
  return tokens.some((token, predicateIndex) => {
    if (
      !/^(?:confi\p{L}*|attribu\p{L}*|charg\p{L}*|investi\p{L}*|deleg\p{L}*)$/u.test(
        token,
      )
    ) {
      return false;
    }
    return (
      hasBoundedPredicateNegation(tokens, predicateIndex) ||
      hasBoundedRefusalOfPredicate(tokens, predicateIndex) ||
      hasBoundedMissingServiceObject(tokens, predicateIndex)
    );
  });
}

function hasExplicitSgeiEntrustmentAffirmation(clause: string): boolean {
  if (
    hasUncertaintyMarker(clause) ||
    hasExplicitSgeiEntrustmentDenial(clause)
  ) {
    return false;
  }
  return (
    /\b(?:confie|confiee?s?|attribue|attribuee?s?|charge|chargee?s?|investit|investie?s?|delegue|deleguee?s?)\b.{0,60}\b(?:service|mission|sieg)\b/u.test(
      clause,
    ) ||
    /\b(?:service|mission|sieg)\b.{0,60}\b(?:est|sont|a\s+ete|ont\s+ete)?\s*(?:confie|confiee?s?|attribue|attribuee?s?|charge|chargee?s?|delegue|deleguee?s?)\b/u.test(
      clause,
    )
  );
}

function sgeiEntrustmentEvidencePolarity(
  value: string,
): BoundedEvidencePolarity {
  const clauses = boundedEvidenceClauses(value);
  if (clauses.length === 0) return "unresolved";
  let affirmedClause = false;
  let deniedClause = false;
  const uncertainEvidence = hasUncertaintyMarker(value);

  for (const clause of clauses) {
    const explicitWrittenAbsence =
      /\b(?:aucun|sans|absence d(?:e|')|pas d(?:e|'))\s+(?:acte|mandat|mission|document|convention|decision)\s+(?:ecrite?|electronique)\b/u.test(
        clause,
      ) ||
      /\b(?:mandat|mission|acte|document)\s+non[- ](?:ecrite?|electronique)\b/u.test(
        clause,
      );
    const explicitOralOnly =
      /\b(?:mandat|mission|service)\s+(?:est\s+)?(?:uniquement|seulement|exclusivement)\s+(?:oral|verbal)\b/u.test(
        clause,
      ) ||
      /\b(?:mandat|mission|service)\s+(?:oral|verbal)\s+(?:uniquement|seulement|exclusivement)\b/u.test(
        clause,
      ) ||
      /\b(?:uniquement|seulement|exclusivement)\s+(?:un\s+)?(?:mandat|mission|service)?\s*(?:oral|verbal)\b/u.test(
        clause,
      );
    const writtenActWithdrawn =
      /\b(?:acte|mandat|mission|document|convention|decision)\s+(?:ecrite?|electronique)\b.{0,50}\b(?:annulee?|abrogee?|retiree?|resiliee?)\b/u.test(
        clause,
      );
    const writtenActExplicitlyDoesNotEntrust =
      hasExplicitSgeiEntrustmentDenial(clause);
    const explicitAffirmation =
      !explicitWrittenAbsence &&
      !writtenActWithdrawn &&
      !writtenActExplicitlyDoesNotEntrust &&
      hasExplicitSgeiEntrustmentAffirmation(clause);
    /*
     * La polarité est indépendante de l'identifiabilité documentaire. Un
     * numéro de décision ou la seule mention d'un acte écrit ne peut donc plus
     * affirmer que le service est effectivement confié.
     */
    if (explicitAffirmation) {
      affirmedClause = true;
    } else if (
      explicitWrittenAbsence ||
      explicitOralOnly ||
      writtenActWithdrawn ||
      writtenActExplicitlyDoesNotEntrust
    ) {
      deniedClause = true;
    }
  }

  if (uncertainEvidence || (affirmedClause && deniedClause)) {
    return "ambiguous";
  }
  if (affirmedClause) return "affirmed";
  if (deniedClause) return "denied";
  return "unresolved";
}

function hasExplicitSgeiSameServiceScope(clause: string): boolean {
  return /\b(?:meme\s+(?:service|sieg|mission(?:\s+de\s+service\s+public)?)|service\s+(?:identifie|concerne)|mission\s+de\s+service\s+public\s+(?:identifiee?|concernee?))\b/u.test(
    clause,
  );
}

function hasExplicitSgeiCompensationPresence(
  clause: string,
  acceptsExceptionPronoun = false,
  inheritedSameServiceScope = false,
): boolean {
  const sameService =
    inheritedSameServiceScope || hasExplicitSgeiSameServiceScope(clause);
  const explicitlyNumberedOrAdditional =
    /\b(?:autre|deuxieme|seconde|nouvelle|double)\s+compensation\b/u.test(
      clause,
    ) || /\bcompensation\s+(?:supplementaire|additionnelle)\b/u.test(clause);
  const paidOrGranted =
    /\bcompensation\b.{0,80}\b(?:versee?|payee?|octroyee?|accordee?|attribuee?|financee?)\b/u.test(
      clause,
    ) ||
    /\b(?:versee?|payee?|octroyee?|accordee?|attribuee?|financee?)\b.{0,80}\bcompensation\b/u.test(
      clause,
    ) ||
    (acceptsExceptionPronoun &&
      /\bcelle(?:-ci)?\b.{0,40}\b(?:versee?|payee?|octroyee?|accordee?|attribuee?|financee?)\b/u.test(
        clause,
      ));
  const historicalCompensation =
    /\b(?:ancienne?|anterieure?)\s+compensation\b.{0,100}\b(?:resiliee?|terminee?|cloturee?|remboursee?|retiree?|versee?|payee?|octroyee?|accordee?)\b/u.test(
      clause,
    );
  const compensationCoreference =
    acceptsExceptionPronoun &&
    /\b(?:celle(?:-ci)?|cette\s+derniere|la\s+precedente|cette\s+compensation|ce\s+versement)\b/u.test(
      clause,
    );
  const compensatoryPayment =
    /\b(?:versement|dotation|indemnite|financement|paiement)\s+compensatoire\b/u.test(
      clause,
    );
  const compensationAnchor =
    /\bcompensation\b/u.test(clause) ||
    compensationCoreference ||
    compensatoryPayment;
  const positiveExceptionDeclaration =
    acceptsExceptionPronoun &&
    compensationAnchor &&
    !hasUncertaintyMarker(clause) &&
    !/\b(?:eventuelle?|eventuellement|hypothetique|envisagee?|possible)\b/u.test(
      clause,
    );
  return (
    (compensationAnchor &&
      sameService &&
      (explicitlyNumberedOrAdditional ||
        paidOrGranted ||
        positiveExceptionDeclaration ||
        compensatoryPayment)) ||
    historicalCompensation
  );
}

function sgeiCompensationEvidencePolarity(
  value: string,
): BoundedEvidencePolarity {
  const clauses = boundedEvidenceClauses(value);
  if (clauses.length === 0) return "unresolved";
  let deniedClause = false;
  let ambiguousClause = false;

  for (const clause of clauses) {
    const explicitAbsence =
      /\b(?:aucun(?:e)?|sans|absence d(?:e|')|pas d(?:e|'))\s+(?:autre|deuxieme|seconde|nouvelle)?\s*compensation\b/u.test(
        clause,
      ) ||
      /\baucune\s+compensation\s+(?:supplementaire|additionnelle)\b/u.test(
        clause,
      );
    const explicitPresence =
      !explicitAbsence && hasExplicitSgeiCompensationPresence(clause);
    const inheritedSameServiceScope = hasExplicitSgeiSameServiceScope(clause);
    const exceptionTails = boundedEvidenceExceptionTails(clause);
    const explicitPositiveException = exceptionTails.some((tail) =>
      hasExplicitSgeiCompensationPresence(
        tail,
        true,
        inheritedSameServiceScope,
      ),
    );
    /*
     * L’ancienneté, la résiliation ou la clôture ne transforme jamais une
     * compensation effectivement mentionnée en absence : l’article 5(2)
     * n’est pas borné par la fenêtre triennale du plafond. De même, une
     * exception positive après « aucune compensation » doit primer sur la
     * négation générale.
     */
    if (explicitPresence || explicitPositiveException) return "affirmed";
    if (explicitAbsence && exceptionTails.length > 0) {
      ambiguousClause = true;
      continue;
    }
    if (explicitAbsence) {
      deniedClause = true;
    } else if (/\bcompensation\b/u.test(clause)) {
      ambiguousClause = true;
    }
  }

  if (deniedClause && ambiguousClause) return "ambiguous";
  if (deniedClause) return "denied";
  return ambiguousClause ? "ambiguous" : "unresolved";
}

function hasValidStructuredEvidenceDate(value: string): boolean {
  for (const match of value.matchAll(
    /\b(\d{4})-(\d{2})-(\d{2})\b|\b(\d{1,2})[/-](\d{1,2})[/-](\d{4})\b/gu,
  )) {
    const isoDate =
      match[1] !== undefined
        ? `${match[1]}-${match[2]}-${match[3]}`
        : `${match[6]}-${String(Number(match[5])).padStart(2, "0")}-${String(
            Number(match[4]),
          ).padStart(2, "0")}`;
    if (isValidIsoDate(isoDate)) return true;
  }
  return false;
}

/**
 * `boundedEvidenceText` remplace les barres obliques d'une date française par
 * des espaces. Cette lecture reste réservée aux clauses déjà normalisées et
 * revalide la date civile avant de qualifier une opération positive.
 */
function hasValidNormalizedEvidenceDate(value: string): boolean {
  for (const match of value.matchAll(/\b(\d{1,2})\s+(\d{1,2})\s+(\d{4})\b/gu)) {
    const isoDate = `${match[3]}-${String(Number(match[2])).padStart(
      2,
      "0",
    )}-${String(Number(match[1])).padStart(2, "0")}`;
    if (isValidIsoDate(isoDate)) return true;
  }
  return false;
}

function relationEvidenceIdentifiesService(
  evidence: string,
  serviceIdentity: string,
): boolean {
  const normalizedServiceIdentity = boundedEvidenceText(serviceIdentity);
  return (
    normalizedServiceIdentity.length >= 6 &&
    boundedEvidenceText(evidence).includes(normalizedServiceIdentity)
  );
}

function hasSgeiRelationEvidenceReference(value: string): boolean {
  const withoutDates = value
    .replace(/\b\d{4}-\d{2}-\d{2}\b/gu, " ")
    .replace(/\b\d{1,2}[/-]\d{1,2}[/-]\d{4}\b/gu, " ");
  return hasStructuredLegalIdentifier(withoutDates);
}

type SgeiRelationEvidencePolarity =
  "same" | "distinct" | "ambiguous" | "unresolved";

/**
 * Garde de non-distinction littérale uniquement. Elle ne qualifie jamais deux
 * services comme juridiquement identiques ; elle empêche qu'une phrase niant
 * clairement leur distinction soit absorbée par le mot « distinct ».
 */
function hasExplicitSgeiNonDistinction(clause: string): boolean {
  const tokens = boundedClauseTokens(clause);
  return tokens.some((token, predicateIndex) => {
    if (!/^(?:distinct\p{L}*|differ\p{L}*|separ\p{L}*)$/u.test(token)) {
      return false;
    }
    return (
      hasBoundedPredicateNegation(tokens, predicateIndex) ||
      hasBoundedRefusalOfPredicate(tokens, predicateIndex) ||
      hasBoundedMissingServiceObject(tokens, predicateIndex)
    );
  });
}

function sgeiRelationEvidencePolarity(
  value: string,
): SgeiRelationEvidencePolarity {
  const clauses = boundedEvidenceClauses(value);
  if (clauses.length === 0) return "unresolved";
  let same = false;
  let distinct = false;
  let ambiguous = hasUncertaintyMarker(value);

  for (const clause of clauses) {
    const tokens = boundedClauseTokens(clause);
    const explicitlyNotDistinct = hasExplicitSgeiNonDistinction(clause);
    const indirectlyNegatedFalsity = tokens.some(
      (token, predicateIndex) =>
        token === "faux" && hasBoundedPredicateNegation(tokens, predicateIndex),
    );
    const explicitlyNotSame =
      /\b(?:ne|n')\s*(?:concerne|vise|porte\s+sur|se\s+rapporte\s+a)\s+pas\b.{0,40}\b(?:meme|identique)\s+(?:service|sieg|mission)\b/u.test(
        clause,
      ) ||
      /\b(?:services?|sieg|missions?)\b.{0,80}\b(?:ne|n')\s+(?:sont\s+|est\s+)?pas\s+(?:les?\s+)?(?:memes?|identiques?)\b/u.test(
        clause,
      ) ||
      /\b(?:ne|n')\s+(?:sont\s+|est\s+)?pas\s+(?:le\s+|les\s+)?(?:meme|memes|identique|identiques)\s+(?:service|services|sieg|mission|missions)\b/u.test(
        clause,
      ) ||
      /\b(?:pas|aucunement)\s+(?:le\s+)?(?:meme|identique)\s+(?:service|sieg|mission)\b/u.test(
        clause,
      );
    const explicitDistinct =
      !explicitlyNotDistinct &&
      !indirectlyNegatedFalsity &&
      (explicitlyNotSame ||
        /\b(?:services?|sieg|missions?)\b.{0,120}\b(?:sont\s+|est\s+)?(?:juridiquement\s+)?(?:distincts?|differents?|separes?)\b/u.test(
          clause,
        ) ||
        /\b(?:distincts?|differents?|separes?)\b.{0,80}\b(?:services?|sieg|missions?)\b/u.test(
          clause,
        ));
    const explicitSame =
      explicitlyNotDistinct ||
      (!explicitlyNotSame &&
        (/\b(?:meme|identique)\s+(?:service|sieg|mission)\b/u.test(clause) ||
          /\b(?:meme|identique)\s+(?:au|a|que\s+le|que\s+la|que\s+les)\s+(?:service|sieg|mission)\b/u.test(
            clause,
          ) ||
          /\b(?:services?|sieg|missions?)\b.{0,120}\b(?:sont\s+|est\s+)?(?:les?\s+)?(?:memes?|identiques?)\b/u.test(
            clause,
          ) ||
          /\b(?:services?|sieg|missions?)\b.{0,80}\b(?:est|sont|demeure|demeurent)\s+(?:le\s+|les\s+)?(?:meme|memes|identique|identiques)\b/u.test(
            clause,
          ) ||
          /\b(?:concerne|vise|porte\s+sur|se\s+rapporte\s+a)\b.{0,40}\b(?:meme|identique)\s+(?:service|sieg|mission)\b/u.test(
            clause,
          )));
    if (explicitSame && explicitDistinct) ambiguous = true;
    if (explicitSame) same = true;
    if (explicitDistinct) distinct = true;
  }

  if (ambiguous || (same && distinct)) return "ambiguous";
  if (same) return "same";
  if (distinct) return "distinct";
  return "unresolved";
}

function hasIdentifiableSgeiRelationEvidence(
  value: string,
  currentServiceIdentity: string,
  registerServiceIdentity: string,
): boolean {
  if (
    !hasRequiredText(value) ||
    hasUncertaintyMarker(value) ||
    entityGroupingInvisibleCodePoint(value) !== undefined
  ) {
    return false;
  }
  const normalized = boundedEvidenceText(value);
  const identifiesEvidenceKind =
    /\b(?:acte|mandat|convention|decision|attestation|reponse)\b/u.test(
      normalized,
    );
  const identifiesGrantingAuthority =
    /\b(?:autorite|organisme|service\s+de\s+l[' ]?etat|collectivite|region|departement|metropole|commune|prefet|ministere|maire)\b/u.test(
      normalized,
    );
  return (
    identifiesEvidenceKind &&
    identifiesGrantingAuthority &&
    hasSgeiRelationEvidenceReference(value) &&
    hasValidStructuredEvidenceDate(value) &&
    relationEvidenceIdentifiesService(value, currentServiceIdentity) &&
    relationEvidenceIdentifiesService(value, registerServiceIdentity)
  );
}

function hasAmbiguousDocumentMarker(value: string): boolean {
  const normalized = boundedEvidenceText(value);
  return (
    hasUncertaintyMarker(value) ||
    /\b(?:projet|brouillon)\s+d(?:e|')\s*(?:acte|mandat|convention|decision|deliberation|arrete|inventaire|attestation|reponse)\b/u.test(
      normalized,
    ) ||
    /\b(?:acte|mandat|convention|decision|deliberation|arrete|inventaire|attestation|reponse)\s+(?:provisoire|non\s+signe|non\s+date|incomplet)\b/u.test(
      normalized,
    ) ||
    /\b(?:reference|numero|date)\s+(?:inconnue?|manquante?|a\s+completer|a\s+verifier|a\s+confirmer)\b/u.test(
      normalized,
    )
  );
}

function hasIdentifiableOfficialDocumentReference(value: string): boolean {
  if (!isRecognizedOfficialEvidenceUrl(value)) return false;
  let decodedValue = value;
  try {
    decodedValue = decodeURIComponent(value);
  } catch {
    return false;
  }
  return (
    hasStructuredLegalIdentifier(decodedValue) ||
    /\b(?:jorftext|jorfarti|celex|recordid)[a-z0-9._/-]{6,}\b/iu.test(
      decodedValue,
    )
  );
}

function identifiesDatedGrantingAuthorityEvidence(value: string): boolean {
  const normalized = boundedEvidenceText(value);
  const identifiesGrantingAuthority =
    /\b(?:autorite|organisme|service\s+de\s+l[' ]?etat|collectivite|region|departement|metropole|commune|prefet|ministere|maire)\b/u.test(
      normalized,
    );
  const identifiesDate =
    /\b(?:0?[1-9]|[12]\d|3[01])[/-](?:0?[1-9]|1[0-2])[/-]\d{4}\b/u.test(
      value,
    ) || /\b\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01])\b/u.test(value);
  return identifiesGrantingAuthority && identifiesDate;
}

/**
 * Contrôle documentaire formel de la qualification territoriale déclarée.
 * Il exige un type de pièce ou d'analyse, une autorité ou source publique,
 * et une référence structurée. La date est contrôlée séparément dans un champ
 * dédié. Le moteur ne consulte ni n'authentifie la pièce et ne qualifie jamais
 * lui-même le territoire.
 */
function hasIdentifiableEuTerritorialEvidence(value: string): boolean {
  if (
    !hasRequiredText(value) ||
    hasAmbiguousDocumentMarker(value) ||
    entityGroupingInvisibleCodePoint(value) !== undefined
  ) {
    return false;
  }
  const normalized = boundedEvidenceText(value);
  const identifiesEvidenceKind =
    /\b(?:analyse|avis|attestation|courrier|courriel|decision|qualification|reponse|source)\b/u.test(
      normalized,
    );
  const identifiesAuthorityOrPublicSource =
    /\b(?:autorite|organisme|service\s+de\s+l[' ]?etat|collectivite|region|departement|metropole|commune|prefet|ministere|commission\s+europeenne|union\s+europeenne|eur-lex)\b/u.test(
      normalized,
    );
  const withoutDates = value
    .replace(/\b\d{4}-\d{2}-\d{2}\b/gu, " ")
    .replace(/\b\d{1,2}[/-]\d{1,2}[/-]\d{4}\b/gu, " ");
  return (
    identifiesEvidenceKind &&
    identifiesAuthorityOrPublicSource &&
    hasStructuredLegalIdentifier(withoutDates)
  );
}

type EuTerritorialEvidencePolarity =
  "affirmed" | "denied" | "uncertain" | "unresolved";

function euTerritorialEvidencePolarity(
  value: string,
): EuTerritorialEvidencePolarity {
  const normalized = boundedEvidenceText(value);
  const uncertain =
    hasUncertaintyMarker(value) ||
    /\b(?:indeterminee?|douteuse?|sous\s+reserve|reste\s+a\s+etablir)\b/u.test(
      normalized,
    ) ||
    /\bne\s+permet\s+pas\s+de\s+(?:conclure|determiner|confirmer|etablir)\b/u.test(
      normalized,
    );
  if (uncertain) return "uncertain";

  let affirmed = false;
  for (const clause of boundedEvidenceClauses(value)) {
    const hasEuLawContext =
      /\b(?:droit\s+(?:de\s+l[' ]union|de\s+l[' ]ue|ue|europeen)|reglementation\s+(?:de\s+l[' ]ue|europeenne)|union\s+europeenne)\b/u.test(
        clause,
      );
    if (!hasEuLawContext) continue;

    const tokens = boundedClauseTokens(clause);
    const applicabilityPredicateIndexes = tokens
      .map((token, predicateIndex) =>
        /^(?:appli\p{L}*|relev\p{L}*|couvert\p{L}*)$/u.test(token)
          ? predicateIndex
          : -1,
      )
      .filter((predicateIndex) => predicateIndex >= 0);
    const locallyDeniedApplicability = tokens.some(
      (token, predicateIndex) =>
        /^(?:appli\p{L}*|relev\p{L}*|couvert\p{L}*)$/u.test(token) &&
        (hasBoundedPredicateNegation(tokens, predicateIndex) ||
          hasBoundedRefusalOfPredicate(tokens, predicateIndex)),
    );
    const explicitlyOutsideScope =
      /\b(?:hors(?:\s+du)?|en\s+dehors\s+du)\s+champ\b.{0,80}\b(?:droit|union\s+europeenne|ue)\b/u.test(
        clause,
      ) ||
      /\b(?:droit|union\s+europeenne|ue)\b.{0,80}\b(?:hors(?:\s+du)?|en\s+dehors\s+du)\s+champ\b/u.test(
        clause,
      ) ||
      /\b(?:droit\s+(?:de\s+l[' ]union|de\s+l[' ]ue|ue|europeen))\b.{0,40}\b(?:inapplicable|non\s+applicable|exclu)\b/u.test(
        clause,
      ) ||
      /\b(?:territoire|activite|operation)\b.{0,50}\bechapp\p{L}*\b.{0,50}\b(?:droit|reglementation|union\s+europeenne|ue)\b/u.test(
        clause,
      ) ||
      /\b(?:droit|reglementation|union\s+europeenne|ue)\b.{0,50}\b(?:cesse\p{L}*\s+d(?:e|')\s*(?:s[' ]?)?appli\p{L}*|sans\s+effet)\b/u.test(
        clause,
      ) ||
      /\b(?:exclu\p{L}*|ecart\p{L}*|refus\p{L}*|interdi\p{L}*)\b.{0,60}\b(?:application|applicabilite)\b.{0,60}\b(?:droit|reglementation|union\s+europeenne|ue)\b/u.test(
        clause,
      );
    if (locallyDeniedApplicability || explicitlyOutsideScope) {
      return "denied";
    }
    const indirectlyAssertedThroughCancelledRefusal =
      applicabilityPredicateIndexes.some((predicateIndex) =>
        hasBoundedIndirectCancelledAssertion(tokens, predicateIndex),
      );
    const explicitlyApplicable =
      /\b(?:droit|reglementation|union\s+europeenne|ue)\b.{0,80}\b(?:demeure\p{L}*\s+|reste\p{L}*\s+|est\s+|sont\s+)?(?:pleinement\s+|directement\s+)?applicable\b/u.test(
        clause,
      ) ||
      /\b(?:droit|reglementation|union\s+europeenne|ue)\b.{0,80}\b(?:s[' ]?)?appli\p{L}*\b/u.test(
        clause,
      ) ||
      /\b(?:territoire|activite|operation)\b.{0,80}\b(?:relev\p{L}*\s+du\s+champ|est\s+couvert\p{L}*\s+par)\b.{0,80}\b(?:droit|reglementation|union\s+europeenne|ue)\b/u.test(
        clause,
      );
    if (explicitlyApplicable && !indirectlyAssertedThroughCancelledRefusal) {
      affirmed = true;
    }
  }

  return affirmed ? "affirmed" : "unresolved";
}

/**
 * Contrat documentaire R24 : la preuve du mandat doit désigner un support
 * d’entrustment SIEG et être rattachable soit à une référence structurée, soit
 * à une autorité et une date. Une URL officielle ne suffit que si elle pointe
 * syntaxiquement vers un document identifiable. Le moteur n’authentifie rien.
 */
function hasIdentifiableSgeiEntrustmentEvidence(value: string): boolean {
  if (
    !hasRequiredText(value) ||
    hasAmbiguousDocumentMarker(value) ||
    entityGroupingInvisibleCodePoint(value) !== undefined
  ) {
    return false;
  }
  if (hasIdentifiableOfficialDocumentReference(value)) return true;
  const normalized = boundedEvidenceText(value);
  const identifiesEntrustmentInstrument =
    /\b(?:acte|mandat|convention|decision|deliberation|arrete|contrat|cahier\s+des\s+charges)\b/u.test(
      normalized,
    );
  const identifiesSgeiEntrustment =
    /\b(?:sieg|service\s+d[' ]?interet\s+economique\s+general|mission\s+de\s+service\s+public|confiee?|attribuee?|chargee?|investie?)\b/u.test(
      normalized,
    );
  return (
    identifiesEntrustmentInstrument &&
    identifiesSgeiEntrustment &&
    (hasStructuredLegalIdentifier(value) ||
      identifiesDatedGrantingAuthorityEvidence(value))
  );
}

/**
 * Contrat documentaire R24 : l’inventaire ou la preuve d’une compensation
 * présente/absente doit identifier sa nature, viser les compensations du
 * service et comporter une référence structurée ou une autorité avec date.
 */
function hasIdentifiableSgeiCompensationEvidence(value: string): boolean {
  if (
    !hasRequiredText(value) ||
    hasAmbiguousDocumentMarker(value) ||
    entityGroupingInvisibleCodePoint(value) !== undefined
  ) {
    return false;
  }
  if (hasIdentifiableOfficialDocumentReference(value)) return true;
  const normalized = boundedEvidenceText(value);
  const identifiesInventoryOrAuthorityDocument =
    /\b(?:inventaire|attestation|confirmation|reponse|courrier|courriel|releve|extrait|registre|convention|decision|acte)\b/u.test(
      normalized,
    );
  const identifiesCompensationScope =
    /\bcompensat/u.test(normalized) &&
    /\b(?:sieg|meme\s+(?:service|mission)|service\s+(?:identifie|concerne)|mission\s+de\s+service\s+public)\b/u.test(
      normalized,
    );
  return (
    identifiesInventoryOrAuthorityDocument &&
    identifiesCompensationScope &&
    (hasStructuredLegalIdentifier(value) ||
      identifiesDatedGrantingAuthorityEvidence(value))
  );
}

function hasRequiredPostAwardEvidence(value: string): boolean {
  return hasRequiredText(postAwardSemanticSource(value));
}

/**
 * Contrat d'identité R14 : NFC rend seulement équivalentes les deux écritures
 * canoniques d'un même caractère. Les espaces extérieurs sont du bruit de
 * saisie ; toute casse, compatibilité, ponctuation et espace intérieur reste
 * strictement distinct.
 */
function exactEntityGroupingKey(value: string): string | undefined {
  if (!hasRequiredText(value)) return undefined;
  if (entityGroupingInvisibleCodePoint(value) !== undefined) return undefined;
  const normalized = value.normalize("NFC").trim();
  return /[\p{L}\p{N}]/u.test(normalized) ? normalized : undefined;
}

/**
 * Signal de proximité uniquement : cette table volontairement bornée couvre
 * les confusions visuelles Latin/grec/cyrillique les plus courantes. Elle ne
 * remplace jamais la clé exacte, ne prétend pas implémenter Unicode UTS #39 et
 * ne constitue aucune authentification d'identité.
 */
const ENTITY_GROUPING_BOUNDED_CONFUSABLES: Readonly<Record<string, string>> = {
  α: "a",
  ε: "e",
  ι: "i",
  κ: "k",
  ο: "o",
  ρ: "p",
  τ: "t",
  υ: "y",
  χ: "x",
  ϲ: "c",
  а: "a",
  в: "b",
  с: "c",
  е: "e",
  і: "i",
  ј: "j",
  к: "k",
  м: "m",
  о: "o",
  р: "p",
  ѕ: "s",
  т: "t",
  у: "y",
  х: "x",
  ӏ: "l",
  ı: "i",
};

function boundedEntityGroupingConfusableSkeleton(value: string): string {
  let skeleton = "";
  for (const character of value) {
    skeleton += ENTITY_GROUPING_BOUNDED_CONFUSABLES[character] ?? character;
  }
  return skeleton;
}

function entityGroupingUsesMixedConfusableScripts(value: string): boolean {
  return (
    (entityGroupingConfusableScriptProfile(value)?.split("+").length ?? 0) > 1
  );
}

function entityGroupingConfusableScriptProfile(
  value: string,
): string | undefined {
  const families: string[] = [];
  let usesLatin = false;
  let usesGreek = false;
  let usesCyrillic = false;
  for (const character of value.normalize("NFC")) {
    if (/\p{Script=Latin}/u.test(character)) usesLatin = true;
    else if (/\p{Script=Greek}/u.test(character)) usesGreek = true;
    else if (/\p{Script=Cyrillic}/u.test(character)) usesCyrillic = true;
  }
  if (usesLatin) families.push("latin");
  if (usesGreek) families.push("grec");
  if (usesCyrillic) families.push("cyrillique");
  return families.length > 0 ? families.join("+") : undefined;
}

function entityGroupingConfusableScriptProfileLabel(profile: string): string {
  return profile
    .split("+")
    .map((family) => (family === "latin" ? "Latin" : family))
    .join("+");
}

function entityGroupingProximityKey(value: string): string | undefined {
  const exactKey = exactEntityGroupingKey(value);
  if (!exactKey) return undefined;
  return boundedEntityGroupingConfusableSkeleton(
    exactKey
      .normalize("NFKD")
      .replace(/\p{M}+/gu, "")
      .toLocaleLowerCase("fr-FR")
      .replace(/œ/gu, "oe")
      .replace(/æ/gu, "ae"),
  )
    .replace(/[’‘‛ʼ＇]/gu, "'")
    .replace(
      /(?:\p{L}\s*[.．]\s*){2,}\p{L}(?:[.．])?(?=\s|$)/gu,
      (abbreviation) => abbreviation.replace(/[\s.．]+/gu, ""),
    )
    .replace(/[.．]+/gu, "")
    .replace(/[,，:：;；!?！？()[\]{}«»‹›"“”„…]+/gu, " ")
    .replace(/[\s\-‐‑‒–—―−·]+/gu, " ")
    .replace(/\s+/gu, " ")
    .replace(/\s*([&+/\\'])\s*/gu, "$1")
    .trim();
}

function entityGroupingInvisibleCodePoint(value: string): string | undefined {
  for (const character of value) {
    if (
      /\p{Default_Ignorable_Code_Point}/u.test(character) ||
      /[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}]/u.test(character)
    ) {
      return `U+${(character.codePointAt(0) ?? 0)
        .toString(16)
        .toUpperCase()
        .padStart(4, "0")}`;
    }
  }
  return undefined;
}

function entityGroupingKeyIssue(value: string): string | undefined {
  const invisibleCodePoint = entityGroupingInvisibleCodePoint(value);
  if (invisibleCodePoint) {
    return `la clé déclarée contient un caractère Unicode invisible ou de formatage interdit (${invisibleCodePoint}) ; le supprimer puis ressaisir la clé`;
  }
  if (!/[\p{L}\p{N}]/u.test(value.normalize("NFC").trim())) {
    return "la clé déclarée doit contenir au moins une lettre ou un chiffre";
  }
  return undefined;
}

const EU_MEMBER_STATES = {
  AT: {
    frenchName: "Autriche",
    aliases: ["at", "autriche", "austria"],
  },
  BE: {
    frenchName: "Belgique",
    aliases: ["be", "belgique", "belgium"],
  },
  BG: {
    frenchName: "Bulgarie",
    aliases: ["bg", "bulgarie", "bulgaria"],
  },
  HR: {
    frenchName: "Croatie",
    aliases: ["hr", "croatie", "croatia"],
  },
  CY: {
    frenchName: "Chypre",
    aliases: ["cy", "chypre", "cyprus"],
  },
  CZ: {
    frenchName: "Tchéquie",
    aliases: [
      "cz",
      "tchequie",
      "czechia",
      "republique tcheque",
      "czech republic",
    ],
  },
  DK: {
    frenchName: "Danemark",
    aliases: ["dk", "danemark", "denmark"],
  },
  EE: {
    frenchName: "Estonie",
    aliases: ["ee", "estonie", "estonia"],
  },
  FI: {
    frenchName: "Finlande",
    aliases: ["fi", "finlande", "finland"],
  },
  FR: {
    frenchName: "France",
    aliases: [
      "fr",
      "france",
      "francais",
      "francaise",
      "french",
      "republique francaise",
    ],
  },
  DE: {
    frenchName: "Allemagne",
    aliases: ["de", "allemagne", "germany"],
  },
  GR: {
    frenchName: "Grèce",
    aliases: ["gr", "el", "grece", "greece"],
  },
  HU: {
    frenchName: "Hongrie",
    aliases: ["hu", "hongrie", "hungary"],
  },
  IE: {
    frenchName: "Irlande",
    aliases: ["ie", "irlande", "ireland"],
  },
  IT: {
    frenchName: "Italie",
    aliases: ["it", "italie", "italy"],
  },
  LV: {
    frenchName: "Lettonie",
    aliases: ["lv", "lettonie", "latvia"],
  },
  LT: {
    frenchName: "Lituanie",
    aliases: ["lt", "lituanie", "lithuania"],
  },
  LU: {
    frenchName: "Luxembourg",
    aliases: ["lu", "luxembourg"],
  },
  MT: {
    frenchName: "Malte",
    aliases: ["mt", "malte", "malta"],
  },
  NL: {
    frenchName: "Pays-Bas",
    aliases: ["nl", "pays-bas", "pays bas", "netherlands"],
  },
  PL: {
    frenchName: "Pologne",
    aliases: ["pl", "pologne", "poland"],
  },
  PT: {
    frenchName: "Portugal",
    aliases: ["pt", "portugal"],
  },
  RO: {
    frenchName: "Roumanie",
    aliases: ["ro", "roumanie", "romania"],
  },
  SK: {
    frenchName: "Slovaquie",
    aliases: ["sk", "slovaquie", "slovakia"],
  },
  SI: {
    frenchName: "Slovénie",
    aliases: ["si", "slovenie", "slovenia"],
  },
  ES: {
    frenchName: "Espagne",
    aliases: ["es", "espagne", "spain"],
  },
  SE: {
    frenchName: "Suède",
    aliases: ["se", "suede", "sweden"],
  },
} as const;

type EuMemberStateCode = keyof typeof EU_MEMBER_STATES;

const EU_MEMBER_STATE_ALIAS_TO_CODE = new Map<string, EuMemberStateCode>(
  Object.entries(EU_MEMBER_STATES).flatMap(([code, state]) =>
    state.aliases.map((alias) => [alias, code as EuMemberStateCode] as const),
  ),
);

function canonicalEuMemberState(
  value: string,
): { code: EuMemberStateCode; frenchName: string } | undefined {
  const code = EU_MEMBER_STATE_ALIAS_TO_CODE.get(normalizedGroupingText(value));
  if (!code) return undefined;
  return {
    code,
    frenchName: EU_MEMBER_STATES[code].frenchName,
  };
}

/**
 * Source unique R24 pour l’applicabilité du précontrôle documentaire du
 * registre central français.
 * Décret n° 2025-1361, article 7 : 2023/2831, 2023/2832 et 717/2014 à
 * compter du 1er janvier 2026 ; 1408/2013 à compter du 1er janvier 2027.
 * `memberStateValue` désigne l’État membre de l’autorité d’octroi, jamais le
 * siège du bénéficiaire.
 * La fonction ne qualifie pas la base juridique et n'authentifie aucune
 * déclaration : elle reçoit une résolution déjà produite par le moteur.
 */
export function isSiteAidFrenchCentralRegisterRequired(
  resolution: SiteAidLegalBasisResolution,
  memberStateValue: string,
  legalGrantDateValue: string,
): boolean {
  const memberState = canonicalEuMemberState(memberStateValue);
  if (memberState?.code !== "FR" || !isValidIsoDate(legalGrantDateValue)) {
    return false;
  }
  const legalGrantDate = legalGrantDateValue.trim();
  if (resolution === "de-minimis-agriculture") {
    return legalGrantDate >= "2027-01-01";
  }
  return (
    (resolution === "de-minimis-general" ||
      resolution === "de-minimis-sgei" ||
      resolution === "de-minimis-fishery") &&
    legalGrantDate >= "2026-01-01"
  );
}

type DeMinimisRegimeKind =
  "general" | "agriculture" | "fishery" | "sgei" | "unknown-de-minimis";

type RecognizedDeMinimisRegimeKind = Exclude<
  DeMinimisRegimeKind,
  "unknown-de-minimis"
>;

const EUR_LEX_ELI_LANGUAGE_CODES = new Set([
  "bul",
  "ces",
  "dan",
  "deu",
  "ell",
  "eng",
  "est",
  "fin",
  "fra",
  "gle",
  "hrv",
  "hun",
  "ita",
  "lav",
  "lit",
  "mlt",
  "nld",
  "pol",
  "por",
  "ron",
  "slk",
  "slv",
  "spa",
  "swe",
]);

const EUR_LEX_ELI_FORMATS = new Set(["html", "pdf", "xml"]);

function strictEurLexEliRegime(
  value: string,
): RecognizedDeMinimisRegimeKind | undefined {
  // La chaîne brute est contrôlée avant toute interprétation d'URL afin
  // d'interdire les réécritures silencieuses du chemin ou de l'autorité.
  const raw = value.trim();
  if (
    !/^[\x21-\x7E]+$/u.test(raw) ||
    raw.includes("\\") ||
    raw.includes("%") ||
    /[?#]/u.test(raw)
  ) {
    return undefined;
  }
  const urlMatch = raw.match(/^https:\/\/([^/?#]+)(\/[^?#]*)$/iu);
  if (!urlMatch) {
    return undefined;
  }
  const authority = urlMatch[1] ?? "";
  const rawPath = urlMatch[2] ?? "";
  if (
    authority.includes("@") ||
    authority.includes(":") ||
    (authority.toLocaleLowerCase("en-US") !== "eur-lex.europa.eu" &&
      authority.toLocaleLowerCase("en-US") !== "data.europa.eu") ||
    rawPath !== rawPath.toLocaleLowerCase("en-US") ||
    rawPath.includes("//")
  ) {
    return undefined;
  }

  const pathname =
    rawPath.length > 1 && rawPath.endsWith("/")
      ? rawPath.slice(0, -1)
      : rawPath;
  const segments = pathname.split("/");
  if (
    segments.length < 5 ||
    segments[0] !== "" ||
    segments
      .slice(1)
      .some(
        (segment) =>
          segment.length === 0 || segment === "." || segment === "..",
      ) ||
    segments[1] !== "eli" ||
    segments[2] !== "reg"
  ) {
    return undefined;
  }

  const regulationKey = `${segments[3]}/${segments[4]}`;
  const kindByEliKey: Record<string, RecognizedDeMinimisRegimeKind> = {
    "2023/2831": "general",
    "2023/2832": "sgei",
    "2013/1408": "agriculture",
    "2014/717": "fishery",
  };
  const kind = kindByEliKey[regulationKey];
  if (!kind) return undefined;

  const suffix = segments.slice(5);
  const suffixAllowed =
    suffix.length === 0 ||
    (suffix.length === 1 &&
      (suffix[0] === "oj" ||
        EUR_LEX_ELI_LANGUAGE_CODES.has(suffix[0] ?? "") ||
        isValidIsoDate(suffix[0] ?? ""))) ||
    (suffix.length === 2 &&
      ((suffix[0] === "oj" &&
        EUR_LEX_ELI_LANGUAGE_CODES.has(suffix[1] ?? "")) ||
        (isValidIsoDate(suffix[0] ?? "") &&
          EUR_LEX_ELI_LANGUAGE_CODES.has(suffix[1] ?? "")) ||
        (EUR_LEX_ELI_LANGUAGE_CODES.has(suffix[0] ?? "") &&
          EUR_LEX_ELI_FORMATS.has(suffix[1] ?? "")))) ||
    (suffix.length === 3 &&
      (suffix[0] === "oj" || isValidIsoDate(suffix[0] ?? "")) &&
      EUR_LEX_ELI_LANGUAGE_CODES.has(suffix[1] ?? "") &&
      EUR_LEX_ELI_FORMATS.has(suffix[2] ?? ""));
  return suffixAllowed ? kind : undefined;
}

function isValidCompactIsoDate(value: string): boolean {
  const match = value.match(/^(\d{4})(\d{2})(\d{2})$/u);
  if (!match) return false;
  return isValidIsoDate(`${match[1]}-${match[2]}-${match[3]}`);
}

function looksLikeUrlLegalReference(value: string): boolean {
  const detectionViews = [value, value.normalize("NFKC")];
  return detectionViews.some(
    (candidate) =>
      /^[A-Za-z][A-Za-z\d+.-]*:\/\//u.test(candidate) ||
      /(?:[A-Za-z][A-Za-z\d+.-]*:\/\/|(?:https?|ftp):|(?:www\.)?[A-Za-z\d-]+(?:\.[A-Za-z\d-]+)+(?:[/?:#]|\s|$)|\/eli\/reg\/|\\|%[0-9A-Fa-f]{2})/iu.test(
        candidate,
      ),
  );
}

function strictNumberedDeMinimisRegime(
  value: string,
): RecognizedDeMinimisRegimeKind | undefined {
  const match = value.match(
    /^(?:(?:Règlement\s+\(UE\)|Règlement\s+UE)(?:\s+n°)?\s+)?(2023\/2831|2023\/2832|1408\/2013|717\/2014)$/iu,
  );
  if (!match) return undefined;
  const numberKindByToken: Record<string, RecognizedDeMinimisRegimeKind> = {
    "2023/2831": "general",
    "2023/2832": "sgei",
    "1408/2013": "agriculture",
    "717/2014": "fishery",
  };
  return numberKindByToken[match[1] ?? ""];
}

function isOfficialHttpEliReference(value: string): boolean {
  const raw = value.trim();
  if (!/^http:\/\//iu.test(raw)) return false;
  return strictEurLexEliRegime(raw.replace(/^http:/iu, "https:")) !== undefined;
}

function hasRecognizedDeMinimisReferenceFragment(value: string): boolean {
  const detectionView = value.normalize("NFKC");
  return (
    /(?:2023\/2831|2023\/2832|1408\/2013|717\/2014)/u.test(detectionView) ||
    /(?:[03]2023R2831|[03]2023R2832|[03]2013R1408|[03]2014R0717)(?:-\d{8})?/iu.test(
      detectionView,
    ) ||
    /\/eli\/reg\/(?:2023\/2831|2023\/2832|2013\/1408|2014\/717)(?:[/\s]|$)/iu.test(
      detectionView,
    )
  );
}

function deMinimisReferenceCorrection(value: string): string {
  if (isOfficialHttpEliReference(value)) {
    return "URL ELI officielle en HTTP non prise en charge : remplacer uniquement le préfixe « http:// » par « https:// », sans conversion automatique du reste, puis vérifier l’hôte et le chemin avant de recopier l’URL exacte.";
  }
  if (
    looksLikeUrlLegalReference(value) ||
    hasRecognizedDeMinimisReferenceFragment(value)
  ) {
    return "citation enrichie non prise en charge : copier seulement le numéro exact 2023/2831, 2023/2832, 1408/2013 ou 717/2014, un identifiant CELEX exact ou une URL ELI HTTPS exacte, sans texte ajouté ni second identifiant.";
  }
  return "indiquer le numéro exact du règlement 2023/2831, 2023/2832, 1408/2013 ou 717/2014, un libellé contrôlé « Règlement (UE) … » ou « Règlement UE … », un identifiant CELEX exact ou une URL ELI HTTPS exacte ; sinon déclarer explicitement la branche hors de minimis pour la soumettre à une revue externe obligatoire.";
}

function unresolvedLegalBasisAction(value: string): string {
  return `qualifier la base juridique ou le régime applicable : ${deMinimisReferenceCorrection(
    value,
  )}`;
}

function classifyDeMinimisRegime(value: string): DeMinimisRegimeKind {
  const source = typeof value === "string" ? value : "";
  if (entityGroupingInvisibleCodePoint(source) !== undefined) {
    return "unknown-de-minimis";
  }
  const raw = source.trim();
  if (!raw) {
    return "unknown-de-minimis";
  }

  if (looksLikeUrlLegalReference(raw)) {
    return strictEurLexEliRegime(raw) ?? "unknown-de-minimis";
  }

  const celexKindByIdentifier: Record<string, RecognizedDeMinimisRegimeKind> = {
    "32023R2831": "general",
    "32023R2832": "sgei",
    "32013R1408": "agriculture",
    "32014R0717": "fishery",
  };
  const exactCelex = raw.match(
    /^(?:CELEX\s*:\s*)?(32023R2831|32023R2832|32013R1408|32014R0717)$/iu,
  );
  if (exactCelex) {
    return celexKindByIdentifier[(exactCelex[1] ?? "").toUpperCase()];
  }
  const consolidatedCelexKindByIdentifier: Record<
    string,
    RecognizedDeMinimisRegimeKind
  > = {
    "02023R2831": "general",
    "02023R2832": "sgei",
    "02013R1408": "agriculture",
    "02014R0717": "fishery",
  };
  const consolidatedCelex = raw.match(
    /^(?:CELEX\s*:\s*)?(02023R2831|02023R2832|02013R1408|02014R0717)-(\d{8})$/iu,
  );
  if (consolidatedCelex && isValidCompactIsoDate(consolidatedCelex[2] ?? "")) {
    return consolidatedCelexKindByIdentifier[
      (consolidatedCelex[1] ?? "").toUpperCase()
    ];
  }
  if (/[03]\d{4}[A-Za-z]\d{4}(?:-\d{8})?/u.test(raw)) {
    return "unknown-de-minimis";
  }
  return strictNumberedDeMinimisRegime(raw) ?? "unknown-de-minimis";
}

function hasUncertaintyMarker(value: string): boolean {
  const normalized = normalizedGroupingText(value);
  return /\b(?:a confirmer|incertain|incertaine|peut[- ]etre|probable|suppose|supposee|sans preuve|non confirme|non confirmee|unknown)\b/.test(
    normalized,
  );
}

function isBareNonDeMinimisClaim(value: string): boolean {
  const normalized = normalizedGroupingText(value)
    .replace(/[.!?;:,()[\]{}'"«»]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return /^(?:hors|non|pas)\s+(?:du\s+regime\s+)?de[\s-]?minimis$/.test(
    normalized,
  );
}

function hasStructuredLegalIdentifier(value: string): boolean {
  const normalized = normalizedGroupingText(value);
  return (
    /\bsa\s*[.:/-]\s*\d{3,}\b/.test(normalized) ||
    /\bcelex\s*[:.-]?\s*\d{4,}[a-z]\d{3,}\b/.test(normalized) ||
    /\b(?:n(?:o|°)?|numero)\s*[.:#/-]?\s*(?:[a-z]{1,12}[-./])?\d{2,}(?:[-./][a-z0-9]+)*\b/.test(
      normalized,
    ) ||
    /\b(?:n(?:o|°)?|numero)\s*[.:#/-]?\s*[a-z0-9]+(?:[-./][a-z0-9]+)+\b/.test(
      normalized,
    ) ||
    /\b[a-z]{1,16}[-/.]\d{2,}(?:[-./][a-z0-9]+)*\b/.test(normalized) ||
    /\b\d{1,4}[/-]\d{2,4}\b/.test(normalized) ||
    /\b[a-z]\s*\(\d{4}\)\s*\d{2,}\b/.test(normalized)
  );
}

const FRENCH_CENTRAL_REGISTER_RECORD_ID = /^[0-9a-f]{40}$/iu;

function decodeUrlQueryComponentOnce(value: string): string | undefined {
  if (/%(?![0-9a-f]{2})/iu.test(value)) return undefined;
  try {
    const decoded = decodeURIComponent(value.replace(/\+/gu, " "));
    return /%[0-9a-f]{2}/iu.test(decoded) ? undefined : decoded;
  } catch {
    return undefined;
  }
}

function hasRecognizedFrenchCentralRegisterRecordUrl(value: string): boolean {
  const raw = value.trim();
  if (
    !/^[\x21-\x7e]+$/u.test(raw) ||
    raw.includes("\\") ||
    raw.includes("#") ||
    /%(?![0-9a-f]{2})/iu.test(raw)
  ) {
    return false;
  }
  try {
    const url = new URL(raw);
    if (
      url.protocol !== "https:" ||
      url.hostname.toLocaleLowerCase("en-US") !== "data.economie.gouv.fr" ||
      url.username !== "" ||
      url.password !== "" ||
      url.port !== "" ||
      url.hash !== "" ||
      url.pathname.includes("%")
    ) {
      return false;
    }
    const pathname = url.pathname.toLocaleLowerCase("en-US");
    const legacyDatasetRoute = /^\/explore\/dataset\/aides_minimis\/?$/u.test(
      pathname,
    );
    const currentAssetsRoute = /^\/explore\/assets\/aides_minimis\/?$/u.test(
      pathname,
    );
    if (!legacyDatasetRoute && !currentAssetsRoute) return false;

    const recordIds: string[] = [];
    for (const rawParameter of url.search.slice(1).split("&")) {
      if (rawParameter === "") continue;
      const equalsIndex = rawParameter.indexOf("=");
      if (equalsIndex < 0) {
        const decodedFlag = decodeUrlQueryComponentOnce(rawParameter);
        if (decodedFlag === undefined || /recordid/iu.test(decodedFlag)) {
          return false;
        }
        continue;
      }
      const rawKey = rawParameter.slice(0, equalsIndex);
      const rawValue = rawParameter.slice(equalsIndex + 1);
      const decodedKey = decodeUrlQueryComponentOnce(rawKey);
      const decodedValue = decodeUrlQueryComponentOnce(rawValue);
      if (decodedKey === undefined || decodedValue === undefined) return false;

      let recordId: string | undefined;
      if (
        legacyDatasetRoute &&
        decodedKey === "q" &&
        /^recordid\s*:\s*[0-9a-f]{40}$/iu.test(decodedValue)
      ) {
        recordId = decodedValue.replace(/^recordid\s*:\s*/iu, "");
      } else if (
        currentAssetsRoute &&
        decodedKey === "refine" &&
        /^recordid\s*:\s*[0-9a-f]{40}$/iu.test(decodedValue)
      ) {
        recordId = decodedValue.replace(/^recordid\s*:\s*/iu, "");
      } else if (
        currentAssetsRoute &&
        decodedKey === "refine.recordid" &&
        FRENCH_CENTRAL_REGISTER_RECORD_ID.test(decodedValue)
      ) {
        recordId = decodedValue;
      }
      if (recordId !== undefined) {
        recordIds.push(recordId);
      } else if (
        /recordid/iu.test(decodedKey) ||
        /recordid/iu.test(decodedValue)
      ) {
        return false;
      }
    }
    return (
      recordIds.length === 1 &&
      FRENCH_CENTRAL_REGISTER_RECORD_ID.test(recordIds[0] ?? "")
    );
  } catch {
    return false;
  }
}

type FormalCentralRegisterReferenceKind =
  "public-recordid" | "authority-attestation";

function formalCentralRegisterReferenceKind(
  value: string,
): FormalCentralRegisterReferenceKind | undefined {
  if (
    !hasRequiredText(value) ||
    hasAmbiguousDocumentMarker(value) ||
    entityGroupingInvisibleCodePoint(value) !== undefined
  ) {
    return undefined;
  }
  if (hasRecognizedFrenchCentralRegisterRecordUrl(value)) {
    return "public-recordid";
  }
  const standaloneRecordId = value
    .trim()
    .match(/^recordid\s*:\s*([0-9a-f]{40})$/iu);
  if (standaloneRecordId) return "public-recordid";

  const normalized = boundedEvidenceText(value);
  if (/\brecordid\b/u.test(normalized)) return undefined;
  const authorityAttestation =
    /\b(?:attestation|confirmation|courrier|courriel|reponse)\b/u.test(
      normalized,
    ) &&
    /\b(?:autorite|organisme|service\s+de\s+l[' ]?etat|collectivite|region|departement|metropole|commune)\b/u.test(
      normalized,
    ) &&
    hasStructuredLegalIdentifier(normalized);
  return normalized.length >= 6 &&
    normalized.length <= 240 &&
    authorityAttestation
    ? "authority-attestation"
    : undefined;
}

function hasFormalNonDeMinimisLegalBasis(value: string): boolean {
  if (
    !hasRequiredText(value) ||
    hasUncertaintyMarker(value) ||
    isBareNonDeMinimisClaim(value)
  ) {
    return false;
  }
  const normalized = normalizedGroupingText(value);
  if (
    /\bsa\s*[.:/-]\s*\d{3,}\b/.test(normalized) ||
    /\bcelex\s*[:.-]?\s*\d{4,}[a-z]\d{3,}\b/.test(normalized)
  ) {
    return true;
  }
  const instrumentMatch = normalized.match(
    /\b(?:reglement|directive|decision|decret|loi|arrete|deliberation|article)\b/,
  );
  if (!instrumentMatch || instrumentMatch.index === undefined) return false;
  const instrumentAndIdentifier = normalized.slice(
    instrumentMatch.index,
    instrumentMatch.index + 100,
  );
  return (
    hasStructuredLegalIdentifier(instrumentAndIdentifier) ||
    /\barticle\s+\d+[a-z]?(?:[.-]\d+)*\b/.test(instrumentAndIdentifier)
  );
}

function isRecognizedOfficialEvidenceUrl(value: string): boolean {
  if (!hasRequiredText(value)) return false;
  try {
    const url = new URL(value.trim());
    const hostname = url.hostname.toLocaleLowerCase("fr-FR");
    const recognizedHostname =
      hostname === "europa.eu" ||
      hostname.endsWith(".europa.eu") ||
      hostname === "gouv.fr" ||
      hostname.endsWith(".gouv.fr") ||
      hostname === "legifrance.gouv.fr" ||
      hostname.endsWith(".legifrance.gouv.fr") ||
      hostname === "service-public.fr" ||
      hostname.endsWith(".service-public.fr");
    return (
      (url.protocol === "https:" || url.protocol === "http:") &&
      recognizedHostname
    );
  } catch {
    return false;
  }
}

function hasFormalNonDeMinimisEvidenceReference(value: string): boolean {
  if (
    !hasRequiredText(value) ||
    hasUncertaintyMarker(value) ||
    isBareNonDeMinimisClaim(value)
  ) {
    return false;
  }
  if (isRecognizedOfficialEvidenceUrl(value)) return true;
  const normalized = normalizedGroupingText(value);
  return (
    /\b(?:decision|notification|convention|arrete|deliberation)\b/.test(
      normalized,
    ) && hasStructuredLegalIdentifier(normalized)
  );
}

export function resolveSiteAidLegalBasisResolution(
  regime: string,
  status: SiteAidLegalBasisStatus,
): SiteAidLegalBasisResolution {
  const exactRegime = classifyDeMinimisRegime(regime);
  if (exactRegime === "general") return "de-minimis-general";
  if (exactRegime === "agriculture") return "de-minimis-agriculture";
  if (exactRegime === "fishery") return "de-minimis-fishery";
  if (exactRegime === "sgei") return "de-minimis-sgei";
  return status === "not-de-minimis"
    ? "not-de-minimis-external-review"
    : "unknown";
}

function deMinimisKindFromResolution(
  resolution: SiteAidLegalBasisResolution,
): DeMinimisRegimeKind {
  if (resolution === "de-minimis-general") return "general";
  if (resolution === "de-minimis-agriculture") return "agriculture";
  if (resolution === "de-minimis-fishery") return "fishery";
  if (resolution === "de-minimis-sgei") return "sgei";
  return "unknown-de-minimis";
}

type AuthorityUrlAssessment =
  | { kind: "recognized-public"; hostname: string }
  | { kind: "public-unverified"; hostname: string }
  | { kind: "invalid"; reason: string };

function isIpv4Hostname(hostname: string): boolean {
  const parts = hostname.split(".");
  return (
    parts.length === 4 &&
    parts.every(
      (part) =>
        /^\d{1,3}$/u.test(part) && Number(part) >= 0 && Number(part) <= 255,
    )
  );
}

function authorityUrlAssessment(value: string): AuthorityUrlAssessment {
  if (!hasRequiredText(value)) {
    return { kind: "invalid", reason: "adresse absente" };
  }
  const raw = value.trim();
  try {
    const url = new URL(raw);
    if (url.protocol !== "https:") {
      return { kind: "invalid", reason: "HTTPS est requis" };
    }
    const rawAuthority = raw.match(/^https:\/\/([^/?#]*)/iu)?.[1] ?? "";
    const authorityWithoutCredentials = rawAuthority.slice(
      rawAuthority.lastIndexOf("@") + 1,
    );
    const hasExplicitPort = authorityWithoutCredentials.startsWith("[")
      ? /\]:\d+$/u.test(authorityWithoutCredentials)
      : /:\d+$/u.test(authorityWithoutCredentials);
    if (
      !rawAuthority ||
      url.username !== "" ||
      url.password !== "" ||
      rawAuthority.includes("@")
    ) {
      return {
        kind: "invalid",
        reason: "les identifiants intégrés sont interdits",
      };
    }
    if (url.port !== "" || hasExplicitPort) {
      return { kind: "invalid", reason: "les ports explicites sont interdits" };
    }
    const hostname = url.hostname.toLocaleLowerCase("en-US");
    const hostnameLabels = hostname.split(".");
    const hasPublicDnsShape =
      hostname.length <= 253 &&
      hostnameLabels.length >= 2 &&
      hostnameLabels.every(
        (label) =>
          label.length >= 1 &&
          label.length <= 63 &&
          /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/u.test(label),
      );
    const reservedSuffixes = [
      ".local",
      ".localhost",
      ".internal",
      ".lan",
      ".home",
      ".test",
      ".example",
      ".invalid",
      ".onion",
      ".alt",
      ".arpa",
    ];
    const reservedExactOrSubtree = [
      "example.com",
      "example.net",
      "example.org",
    ];
    if (
      !hasRequiredText(hostname) ||
      hostname === "localhost" ||
      hostname.endsWith(".") ||
      hostname.startsWith("[") ||
      hostname.includes(":") ||
      isIpv4Hostname(hostname) ||
      !hasPublicDnsShape ||
      reservedSuffixes.some(
        (suffix) => hostname === suffix.slice(1) || hostname.endsWith(suffix),
      ) ||
      reservedExactOrSubtree.some(
        (reservedName) =>
          hostname === reservedName || hostname.endsWith(`.${reservedName}`),
      )
    ) {
      return {
        kind: "invalid",
        reason: "un hôte public non local et non réservé est requis",
      };
    }
    const recognizedPublic =
      hostname === "gouv.fr" ||
      hostname.endsWith(".gouv.fr") ||
      hostname === "europa.eu" ||
      hostname.endsWith(".europa.eu") ||
      hostname === "service-public.fr" ||
      hostname.endsWith(".service-public.fr") ||
      hostname === "bretagne.bzh" ||
      hostname.endsWith(".bretagne.bzh");
    return recognizedPublic
      ? { kind: "recognized-public", hostname }
      : { kind: "public-unverified", hostname };
  } catch {
    return { kind: "invalid", reason: "syntaxe d’URL invalide" };
  }
}

const MAX_SAFE_DECIMAL = Number.MAX_SAFE_INTEGER / 100;

function isFiniteNonNegative(value: number | undefined): value is number {
  return (
    value !== undefined &&
    Number.isFinite(value) &&
    value >= 0 &&
    value <= MAX_SAFE_DECIMAL
  );
}

function isPercent(value: number | undefined): value is number {
  return isFiniteNonNegative(value) && value <= 100;
}

function isFraction(value: number): boolean {
  return Number.isFinite(value) && value >= 0 && value <= 1;
}

function hasAtMostTwoDecimalPlaces(value: number): boolean {
  if (!Number.isFinite(value) || Math.abs(value) > MAX_SAFE_DECIMAL) {
    return false;
  }
  return Math.round((value + Number.EPSILON) * 100) / 100 === value;
}

function isValidMoneyInput(value: number | undefined): value is number {
  return isFiniteNonNegative(value) && hasAtMostTwoDecimalPlaces(value);
}

function roundMoney(value: number): number | undefined {
  if (!Number.isFinite(value) || Math.abs(value) > MAX_SAFE_DECIMAL) {
    return undefined;
  }
  const rounded = Math.round((value + Number.EPSILON) * 100) / 100;
  return Number.isFinite(rounded) ? rounded : undefined;
}

function normalizeDeductibleFraction(value: SiteAidDeductibleVatFraction):
  | { kind: "known"; fraction: number }
  | { kind: "unknown" }
  | {
      kind: "invalid";
    } {
  if (value === "yes") return { kind: "known", fraction: 1 };
  if (value === "no") return { kind: "known", fraction: 0 };
  if (value === "unknown" || value === undefined) {
    return { kind: "unknown" };
  }
  if (!isFraction(value)) return { kind: "invalid" };
  return { kind: "known", fraction: value };
}

function formatNumber(value: number): string {
  if (!Number.isFinite(value)) return "ND";
  const rounded = roundMoney(value);
  if (rounded === undefined) return "ND";
  const fixed = rounded.toFixed(2);
  const [integer, decimals] = fixed.split(".");
  const grouped = integer.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  if (decimals === "00") return grouped;
  if (decimals.endsWith("0")) return `${grouped},${decimals[0]}`;
  return `${grouped},${decimals}`;
}

function formatMoney(value: number | undefined): string {
  return value === undefined ||
    !Number.isFinite(value) ||
    Math.abs(value) > MAX_SAFE_DECIMAL ||
    !hasAtMostTwoDecimalPlaces(value)
    ? "ND"
    : `${formatNumber(value)} €`;
}

function formatPercentValue(value: number | "unknown" | undefined): string {
  return typeof value === "number" && Number.isFinite(value)
    ? `${formatNumber(value)} %`
    : "ND";
}

function formatDeductibleFraction(value: SiteAidDeductibleVatFraction): string {
  const normalized = normalizeDeductibleFraction(value);
  if (normalized.kind !== "known") return "ND";
  return `${formatNumber(normalized.fraction * 100)} %`;
}

function requireText(
  value: string,
  label: string,
  missingEvidence: string[],
): boolean {
  if (hasRequiredText(value)) return true;
  addUnique(missingEvidence, `${label} : information manquante.`);
  return false;
}

function validateRequiredNumber(
  value: number | undefined,
  label: string,
  invalidIssues: string[],
  missingEvidence: string[],
  options: { integer?: boolean; money?: boolean; percent?: boolean } = {},
): number | undefined {
  if (value === undefined) {
    addUnique(missingEvidence, `${label} : valeur à renseigner.`);
    return undefined;
  }
  if (!Number.isFinite(value) || value < 0) {
    addUnique(
      invalidIssues,
      `${label} : la valeur doit être finie et positive ou nulle.`,
    );
    return undefined;
  }
  if (value > MAX_SAFE_DECIMAL) {
    addUnique(
      invalidIssues,
      `${label} : la valeur dépasse la précision numérique sûre du calcul.`,
    );
    return undefined;
  }
  if (options.money && !hasAtMostTwoDecimalPlaces(value)) {
    addUnique(
      invalidIssues,
      `${label} : un montant monétaire doit comporter au plus deux décimales.`,
    );
    return undefined;
  }
  if (options.integer && !Number.isInteger(value)) {
    addUnique(invalidIssues, `${label} : un entier est requis.`);
    return undefined;
  }
  if (options.percent && value > 100) {
    addUnique(
      invalidIssues,
      `${label} : le pourcentage doit rester entre 0 et 100.`,
    );
    return undefined;
  }
  return value;
}

export function createEmptySiteAidDecisionInput(): SiteAidDecisionInput {
  return {
    profile: {
      reference: "",
      verificationDate: "",
      territory: "",
      deMinimisEuTerritorialStatus: "unknown",
      deMinimisEuTerritorialEvidence: "",
      deMinimisEuTerritorialEvidenceDate: "",
      activity: "",
      businessAgeMonths: undefined,
      employeeCount: undefined,
      annualRevenueExVat: undefined,
      legalStatus: "",
      businessNeed: "",
      successIndicator: "",
      decisionOwner: "",
      deMinimisCorporateEventOccurred: "unknown",
      deMinimisCorporateEventKind: "unknown",
      deMinimisCorporateEventEvidence: "",
      deMinimisCorporateAidHistoryAdjusted: "unknown",
    },
    authority: {
      name: "",
      officialUrl: "",
      consultationDate: "",
      scheduleAndAmendmentEvidence: "",
      postAwardEvidenceVerified: "unknown",
      postAwardObligationsEvidence: "",
    },
    quoteLines: [],
    gates: {
      authority: "unknown",
      beneficiary: "unknown",
      activity: "unknown",
      startOrder: "unknown",
      cumulativeAid: "unknown",
      notification: "no",
    },
    gateEvidence: {
      authority: "",
      beneficiary: "",
      activity: "",
      startOrder: "",
      cumulativeAid: "",
      notification: "",
    },
    aid: {
      basisScope: "unknown",
      stage: "none",
      instrumentKind: "unknown",
      ratePercent: undefined,
      capAmount: undefined,
      legalAidValueAmount: undefined,
      prospectiveDeMinimisAidValueAmount: undefined,
      prospectiveDeMinimisAidValueEvidence: "",
      approvedFinancialContributionAmount: undefined,
      actualFinancialContributionAmount: undefined,
      paymentMode: "unknown",
      documentedPrepaymentPercent: "unknown",
      finalInvoiceMatchesQuote: "unknown",
      finalInvoiceDate: "",
      finalInvoiceReference: "",
      supplierPaymentReference: "",
      receiptDate: "",
      receiptReference: "",
      legalBasisStatus: "unknown",
      deMinimisRegime: "",
      nonDeMinimisLegalBasis: "",
      nonDeMinimisEvidenceReference: "",
      deMinimisMemberState: "",
      deMinimisSingleUndertakingScope: "",
      deMinimisFisheryFiscalYearStartDate: "",
      deMinimisFisheryPreviousFiscalYearStartDate: "",
      deMinimisFisherySecondPreviousFiscalYearStartDate: "",
      deMinimisFisheryCurrentFiscalYearEndDate: "",
      similarUndertakingKeysDistinct: "unknown",
      similarUndertakingKeysEvidence: "",
      sgeiEntrustmentVerified: "unknown",
      sgeiEntrustmentEvidence: "",
      sgeiServiceIdentity: "",
      sgeiSameServiceCompensationPresent: "unknown",
      sgeiCompensationEvidence: "",
      legalGrantStatus: "unknown",
      legalGrantDate: "",
      centralRegisterStatus: "unknown",
      centralRegisterReference: "",
    },
    availableCash: undefined,
    wait: {
      months: undefined,
      monthlyDelayContributionMargin: undefined,
      aidSpecificFees: undefined,
    },
    aidRegister: [],
  };
}

export function calculateSiteAidDecision(
  input: SiteAidDecisionInput,
  evaluationContext: SiteAidDecisionEvaluationContext = {
    analysisDate: SITE_AID_DECISION_SOURCE_DATE,
  },
): SiteAidDecisionResult {
  const invalidIssues: string[] = [];
  const missingEvidence: string[] = [];
  const exclusionReasons: string[] = [];
  const warnings: string[] = [];
  const toolLimitations: string[] = [];
  const analysisDate =
    typeof evaluationContext?.analysisDate === "string"
      ? evaluationContext.analysisDate.trim()
      : "";

  if (!isValidIsoDate(analysisDate)) {
    addUnique(
      invalidIssues,
      "Date locale d’analyse : une date ISO réelle est obligatoire.",
    );
  }

  const derivedMoney = (value: number, label: string): number | undefined => {
    const rounded = roundMoney(value);
    if (rounded === undefined) {
      addUnique(
        invalidIssues,
        `${label} : le calcul dépasse la précision numérique sûre.`,
      );
    }
    return rounded;
  };

  const basisScope = input.aid.basisScope ?? "unknown";
  const basisScopeRecognized = isBasisScope(basisScope);
  if (!basisScopeRecognized) {
    addUnique(invalidIssues, "Assiette de calcul : valeur incohérente.");
  } else if (basisScope === "unknown") {
    addUnique(
      missingEvidence,
      "Assiette de calcul : confirmer que le dispositif applique son taux aux seules dépenses admissibles hors taxes prouvées.",
    );
  } else if (basisScope === "other") {
    addUnique(
      toolLimitations,
      "Limitation de calcul : l’assiette officielle diffère des dépenses admissibles hors taxes prouvées ; ce moteur ne produit donc aucune aide théorique.",
    );
  }
  const financialCalculationBasisSupported =
    basisScopeRecognized && basisScope === "eligible-ex-vat";

  requireText(input.profile.territory, "Territoire", missingEvidence);
  const euTerritorialStatus =
    input.profile.deMinimisEuTerritorialStatus ?? "unknown";
  const euTerritorialStatusValid = isEuTerritorialStatus(euTerritorialStatus);
  if (!euTerritorialStatusValid) {
    addUnique(
      invalidIssues,
      "Qualification territoriale UE du précontrôle de minimis : statut incohérent.",
    );
  }
  requireText(input.profile.activity, "Activité", missingEvidence);
  requireText(input.profile.legalStatus, "Statut", missingEvidence);
  requireText(
    input.profile.businessNeed,
    "Problème métier à résoudre",
    missingEvidence,
  );
  requireText(
    input.profile.successIndicator,
    "Indicateur de réussite",
    missingEvidence,
  );
  requireText(
    input.profile.decisionOwner,
    "Responsable de la décision",
    missingEvidence,
  );

  if (!hasRequiredText(input.profile.verificationDate)) {
    addUnique(missingEvidence, "Date de vérification : information manquante.");
  } else if (!isValidIsoDate(input.profile.verificationDate)) {
    addUnique(invalidIssues, "Date de vérification : date ISO invalide.");
  } else if (
    isValidIsoDate(analysisDate) &&
    input.profile.verificationDate.trim() > analysisDate
  ) {
    addUnique(
      invalidIssues,
      `Date de vérification : elle ne peut pas être postérieure à la date locale d’analyse (${analysisDate}).`,
    );
  }

  validateRequiredNumber(
    input.profile.businessAgeMonths,
    "Âge de l’entreprise en mois",
    invalidIssues,
    missingEvidence,
    { integer: true },
  );
  validateRequiredNumber(
    input.profile.employeeCount,
    "Effectif",
    invalidIssues,
    missingEvidence,
    { integer: true },
  );
  validateRequiredNumber(
    input.profile.annualRevenueExVat,
    "Chiffre d’affaires annuel HT",
    invalidIssues,
    missingEvidence,
    { money: true },
  );

  requireText(input.authority.name, "Organisme officiel", missingEvidence);
  if (!hasRequiredText(input.authority.officialUrl)) {
    addUnique(missingEvidence, "URL officielle : information manquante.");
  } else {
    const urlAssessment = authorityUrlAssessment(input.authority.officialUrl);
    if (urlAssessment.kind === "invalid") {
      addUnique(
        invalidIssues,
        `URL d’organisme : adresse refusée (${urlAssessment.reason}). Utiliser une URL HTTPS sans identifiants ni port, sur un hôte public, puis vérifier l’autorité et la page.`,
      );
    } else {
      addUnique(
        toolLimitations,
        "URL d’organisme : le moteur contrôle seulement la syntaxe HTTPS et écarte les hôtes manifestement locaux ou réservés ; il n’authentifie ni le domaine, ni l’autorité, ni le contenu de la page.",
      );
      if (urlAssessment.kind === "public-unverified") {
        addUnique(
          warnings,
          `URL d’organisme : le domaine public « ${urlAssessment.hostname} » n’appartient pas aux espaces institutionnels reconnus par ce contrôle local. Vérifier manuellement le domaine, l’autorité éditrice et le chemin ; le moteur ne les authentifie pas.`,
        );
      }
    }
  }
  if (!hasRequiredText(input.authority.consultationDate)) {
    addUnique(missingEvidence, "Date de consultation : information manquante.");
  } else if (!isValidIsoDate(input.authority.consultationDate)) {
    addUnique(invalidIssues, "Date de consultation : date ISO invalide.");
  } else if (
    isValidIsoDate(input.profile.verificationDate) &&
    input.authority.consultationDate.trim() >
      input.profile.verificationDate.trim()
  ) {
    addUnique(
      invalidIssues,
      "Date de consultation : elle ne peut pas être postérieure à la vérification.",
    );
  }
  requireText(
    input.authority.scheduleAndAmendmentEvidence,
    "Échéances et règle de modification",
    missingEvidence,
  );
  const postAwardObligationsEvidence =
    input.authority.postAwardObligationsEvidence;
  const postAwardEvidenceVerified =
    input.authority.postAwardEvidenceVerified ?? "unknown";
  if (!isTriState(postAwardEvidenceVerified)) {
    addUnique(
      invalidIssues,
      "Vérification de la pièce post-attribution : valeur incohérente.",
    );
  }
  if (!hasRequiredPostAwardEvidence(postAwardObligationsEvidence)) {
    addUnique(
      missingEvidence,
      "Obligations après attribution et après versement : information manquante.",
    );
  }
  if (
    isTriState(postAwardEvidenceVerified) &&
    postAwardEvidenceVerified === "unknown"
  ) {
    addUnique(
      missingEvidence,
      "Vérification de la pièce post-attribution : statut à confirmer — indiquer OUI seulement après avoir vérifié la décision, la convention ou la réponse écrite applicable.",
    );
  } else if (
    isTriState(postAwardEvidenceVerified) &&
    postAwardEvidenceVerified === "no"
  ) {
    addUnique(
      missingEvidence,
      "Vérification de la pièce post-attribution : statut « NON » — obtenir et vérifier la décision, la convention ou la réponse écrite applicable avant de conclure.",
    );
  } else if (postAwardEvidenceVerified === "yes") {
    addUnique(
      toolLimitations,
      "Vérification post-attribution déclarée : le moteur conserve le texte et le statut structurés, mais n’interprète, ne lit ni n’authentifie la pièce, son applicabilité, ses obligations ou l’éventuelle absence d’obligations.",
    );
  }

  let quoteAmountsAndVatKnown = true;
  let quoteDeductibilityKnown = true;
  let quoteEligibilityKnown = true;
  let invoiceTotalExVatAccumulator = 0;
  let invoiceVatAccumulator = 0;
  let deductibleVatAccumulator = 0;
  let eligibleSubtotalAccumulator = 0;

  if (input.quoteLines.length === 0) {
    addUnique(invalidIssues, "Devis : au moins une ligne est requise.");
    quoteAmountsAndVatKnown = false;
    quoteDeductibilityKnown = false;
    quoteEligibilityKnown = false;
  }

  input.quoteLines.forEach((line, index) => {
    const position = index + 1;
    const issueLabel = hasRequiredText(line.label)
      ? `Devis, ligne ${position} « ${safeText(line.label)} »`
      : `Devis, ligne ${position}`;
    if (!hasRequiredText(line.label)) {
      addUnique(
        invalidIssues,
        `${issueLabel} : le libellé ne peut pas être vide.`,
      );
    }

    const amount = validateRequiredNumber(
      line.amountExVat,
      `${issueLabel}, montant HT`,
      invalidIssues,
      missingEvidence,
      { money: true },
    );
    const vatRatePercent = validateRequiredNumber(
      line.vatRatePercent,
      `${issueLabel}, taux de TVA`,
      invalidIssues,
      missingEvidence,
      { percent: true },
    );
    if (amount === undefined || vatRatePercent === undefined) {
      quoteAmountsAndVatKnown = false;
      quoteDeductibilityKnown = false;
    }

    const deductible = normalizeDeductibleFraction(line.deductibleVatFraction);
    if (deductible.kind === "unknown") {
      addUnique(
        missingEvidence,
        `${issueLabel} : part de TVA déductible à confirmer.`,
      );
      quoteDeductibilityKnown = false;
    } else if (deductible.kind === "invalid") {
      addUnique(
        invalidIssues,
        `${issueLabel} : la fraction de TVA déductible doit être comprise entre 0 et 1.`,
      );
      quoteDeductibilityKnown = false;
    }

    const eligibilityRecognized = isTriState(line.eligibility);
    if (!eligibilityRecognized) {
      addUnique(
        invalidIssues,
        `${issueLabel} : état d’admissibilité incohérent.`,
      );
      quoteEligibilityKnown = false;
    } else if (line.eligibility === "unknown") {
      addUnique(missingEvidence, `${issueLabel} : admissibilité à confirmer.`);
      quoteEligibilityKnown = false;
    } else if (!hasRequiredText(line.evidence)) {
      addUnique(
        missingEvidence,
        `${issueLabel} : référence de preuve manquante.`,
      );
      quoteEligibilityKnown = false;
    }

    if (amount !== undefined && vatRatePercent !== undefined) {
      const vat = derivedMoney(
        amount * (vatRatePercent / 100),
        `${issueLabel}, TVA`,
      );
      const nextInvoiceTotalExVat = derivedMoney(
        invoiceTotalExVatAccumulator + amount,
        "Facture totale HT",
      );
      if (nextInvoiceTotalExVat === undefined) {
        quoteAmountsAndVatKnown = false;
      } else {
        invoiceTotalExVatAccumulator = nextInvoiceTotalExVat;
      }
      if (vat === undefined) {
        quoteAmountsAndVatKnown = false;
        quoteDeductibilityKnown = false;
      } else {
        const nextInvoiceVat = derivedMoney(
          invoiceVatAccumulator + vat,
          "TVA facturée",
        );
        if (nextInvoiceVat === undefined) {
          quoteAmountsAndVatKnown = false;
          quoteDeductibilityKnown = false;
        } else {
          invoiceVatAccumulator = nextInvoiceVat;
        }
        if (deductible.kind === "known") {
          const nextDeductibleVat = derivedMoney(
            deductibleVatAccumulator + vat * deductible.fraction,
            "TVA déductible",
          );
          if (nextDeductibleVat === undefined) {
            quoteDeductibilityKnown = false;
          } else {
            deductibleVatAccumulator = nextDeductibleVat;
          }
        }
      }
      if (
        eligibilityRecognized &&
        line.eligibility === "yes" &&
        hasRequiredText(line.evidence)
      ) {
        const nextEligibleSubtotal = derivedMoney(
          eligibleSubtotalAccumulator + amount,
          "Sous-total HT prouvé admissible",
        );
        if (nextEligibleSubtotal === undefined) {
          quoteEligibilityKnown = false;
        } else {
          eligibleSubtotalAccumulator = nextEligibleSubtotal;
        }
      }
    }
  });

  const stageIsRecognized = isStage(input.aid.stage);
  if (!stageIsRecognized) {
    addUnique(invalidIssues, "État de l’aide : valeur incohérente.");
  }
  const finalInvoiceMatchRecognized = isTriState(
    input.aid.finalInvoiceMatchesQuote,
  );
  if (!finalInvoiceMatchRecognized) {
    addUnique(
      invalidIssues,
      "Facture finale : état de rapprochement incohérent.",
    );
  }

  const hasPriorNotification =
    input.aid.stage !== "none" && input.gates.notification === "yes";

  for (const gateId of SITE_AID_GATE_IDS) {
    const gate = input.gates[gateId];
    if (!isTriState(gate)) {
      addUnique(
        invalidIssues,
        `${SITE_AID_GATE_LABELS[gateId]} : état incohérent.`,
      );
      continue;
    }
    if (gate === "unknown") {
      addUnique(
        missingEvidence,
        `${SITE_AID_GATE_LABELS[gateId]} : confirmation écrite manquante.`,
      );
      continue;
    }
    const gateProofKnown = hasRequiredText(input.gateEvidence[gateId] ?? "");
    if (!gateProofKnown) {
      addUnique(
        missingEvidence,
        `${SITE_AID_GATE_LABELS[gateId]} : référence de preuve manquante.`,
      );
    }
    if (gateId === "notification") continue;
    if (gate === "no" && gateProofKnown) {
      if (gateId === "authority" && hasPriorNotification) {
        addUnique(
          warnings,
          "Le guichet est fermé, mais une notification antérieure est déclarée ; sa validité et sa période d’application doivent être conservées.",
        );
      } else {
        addUnique(
          exclusionReasons,
          `${SITE_AID_GATE_LABELS[gateId]} : critère négatif prouvé.`,
        );
      }
    }
  }

  if (input.aid.stage === "none" && input.gates.notification === "yes") {
    addUnique(
      invalidIssues,
      "Notification : l’état « aucune notification » contredit une notification déclarée.",
    );
  }
  if (input.aid.stage !== "none" && input.gates.notification === "no") {
    addUnique(
      invalidIssues,
      "Notification : une aide notifiée ou effectivement versée exige une notification écrite.",
    );
  }

  const ratePercent = validateRequiredNumber(
    input.aid.ratePercent,
    "Taux de l’aide",
    invalidIssues,
    missingEvidence,
    { percent: true },
  );
  const capAmount = validateRequiredNumber(
    input.aid.capAmount,
    "Plafond de l’aide",
    invalidIssues,
    missingEvidence,
    { money: true },
  );

  const instrumentKindRecognized = isInstrumentKind(input.aid.instrumentKind);
  const instrumentKind = instrumentKindRecognized
    ? input.aid.instrumentKind
    : "unknown";
  const financialContributionSupported = instrumentKind === "grant";
  if (!instrumentKindRecognized) {
    addUnique(invalidIssues, "Instrument d’aide : valeur incohérente.");
  } else if (instrumentKind === "unknown") {
    addUnique(
      missingEvidence,
      "Instrument d’aide : confirmer s’il s’agit d’une subvention, d’un prêt, d’une garantie, d’un allègement ou d’un autre instrument.",
    );
  } else if (!financialContributionSupported) {
    addUnique(
      toolLimitations,
      "Instrument non modélisé financièrement : sa valeur juridique ou son équivalent-subvention brut peut servir au contrôle réglementaire, mais ce moteur ne soustrait ni le nominal d’un prêt, ni une garantie, ni un allègement du coût de la facture ou du besoin de trésorerie.",
    );
  }

  const legalBasisStatusRecognized = isLegalBasisStatus(
    input.aid.legalBasisStatus,
  );
  const legalBasisStatus = legalBasisStatusRecognized
    ? input.aid.legalBasisStatus
    : "unknown";
  if (!legalBasisStatusRecognized) {
    addUnique(
      invalidIssues,
      "Aide courante, statut de la base juridique : valeur incohérente.",
    );
  }
  const currentLegalBasisResolution = resolveSiteAidLegalBasisResolution(
    input.aid.deMinimisRegime ?? "",
    legalBasisStatus,
  );
  const currentDeMinimisRegimeKind = deMinimisKindFromResolution(
    currentLegalBasisResolution,
  );
  const currentRegimeIsDeMinimis =
    currentDeMinimisRegimeKind === "general" ||
    currentDeMinimisRegimeKind === "agriculture" ||
    currentDeMinimisRegimeKind === "fishery" ||
    currentDeMinimisRegimeKind === "sgei";
  if (currentRegimeIsDeMinimis) {
    addUnique(toolLimitations, DE_MINIMIS_REFERENCE_SYNTAX_LIMITATION);
  }

  const prospectiveAidValueInput = input.aid.prospectiveDeMinimisAidValueAmount;
  const prospectiveAidValueEvidence =
    input.aid.prospectiveDeMinimisAidValueEvidence ?? "";
  const prospectiveAidValueEvidenceTouched =
    prospectiveAidValueEvidence.trim().length > 0;
  const prospectiveAidValuePairAttempted =
    prospectiveAidValueInput !== undefined ||
    prospectiveAidValueEvidenceTouched;
  let prospectiveDocumentedAidValueValid = false;
  if (prospectiveAidValuePairAttempted) {
    if (input.aid.stage !== "none" || !currentRegimeIsDeMinimis) {
      addUnique(
        invalidIssues,
        "Valeur prospective de minimis documentée : ces deux champs sont réservés au précontrôle avant notification d’une base de minimis reconnue. Les vider ou corriger l’état et la base ; ils ne remplacent jamais la valeur juridique d’une aide octroyée.",
      );
    } else {
      let prospectiveAmountValid = true;
      if (prospectiveAidValueInput === undefined) {
        addUnique(
          missingEvidence,
          "Valeur prospective de minimis documentée : le montant brut ou l’équivalent-subvention brut prospectif manque.",
        );
        prospectiveAmountValid = false;
      } else if (
        !isFiniteNonNegative(prospectiveAidValueInput) ||
        prospectiveAidValueInput <= 0
      ) {
        addUnique(
          invalidIssues,
          "Valeur prospective de minimis documentée : un montant fini strictement positif dans la précision sûre est requis.",
        );
        prospectiveAmountValid = false;
      } else if (!hasAtMostTwoDecimalPlaces(prospectiveAidValueInput)) {
        addUnique(
          invalidIssues,
          "Valeur prospective de minimis documentée : un montant monétaire doit comporter au plus deux décimales.",
        );
        prospectiveAmountValid = false;
      }

      const prospectiveEvidenceValid = hasRequiredText(
        prospectiveAidValueEvidence,
      );
      if (!prospectiveEvidenceValid) {
        addUnique(
          missingEvidence,
          "Valeur prospective de minimis documentée : la référence ou description de la preuve déclarative manque. Le moteur ne peut pas authentifier cette pièce.",
        );
      }
      prospectiveDocumentedAidValueValid =
        prospectiveAmountValid && prospectiveEvidenceValid;
      if (prospectiveDocumentedAidValueValid) {
        addUnique(
          toolLimitations,
          "Précontrôle prospectif R26 — valeur documentée déclarative non authentifiée : le montant brut ou l’ESB et sa preuve sont conservés séparément de la valeur juridique d’une aide octroyée. Le moteur ne lit ni n’authentifie la pièce ; ce scénario ne constitue jamais un octroi, un encaissement, une contribution financière ou un montant budgétable.",
        );
      }
    }
  }

  let legalAidValueValid = false;
  let approvedFinancialContributionValid = false;
  let actualFinancialContributionValid = false;
  let finalInvoiceDateValid =
    input.aid.stage !== "received" || !financialContributionSupported;
  let receiptDateValid =
    input.aid.stage !== "received" || !financialContributionSupported;
  let receiptChronologyValid =
    input.aid.stage !== "received" || !financialContributionSupported;

  const validateAbsentAmount = (
    value: number | undefined,
    label: string,
    reason: string,
  ): boolean => {
    if (value !== undefined && !isFiniteNonNegative(value)) {
      addUnique(
        invalidIssues,
        `${label} : la valeur doit être finie, positive ou nulle et rester dans la précision sûre.`,
      );
      return false;
    }
    if (value !== undefined && !hasAtMostTwoDecimalPlaces(value)) {
      addUnique(
        invalidIssues,
        `${label} : un montant monétaire doit comporter au plus deux décimales.`,
      );
      return false;
    }
    if (value !== undefined && value > 0) {
      addUnique(invalidIssues, `${label} : ${reason}`);
      return false;
    }
    return true;
  };

  if (input.aid.stage === "none") {
    legalAidValueValid = validateAbsentAmount(
      input.aid.legalAidValueAmount,
      "Valeur juridique de l’aide",
      "aucune valeur positive ne peut être déclarée sans notification.",
    );
    approvedFinancialContributionValid = validateAbsentAmount(
      input.aid.approvedFinancialContributionAmount,
      "Contribution financière approuvée",
      "aucune contribution positive ne peut être déclarée sans notification.",
    );
    actualFinancialContributionValid = validateAbsentAmount(
      input.aid.actualFinancialContributionAmount,
      "Paiement effectif de l’aide",
      "aucun paiement positif ne peut être déclaré sans notification.",
    );
  } else {
    if (input.aid.legalAidValueAmount === undefined) {
      if (currentRegimeIsDeMinimis) {
        addUnique(
          missingEvidence,
          "Valeur juridique de l’aide : le montant brut ou l’équivalent-subvention brut communiqué par l’autorité manque.",
        );
      } else {
        legalAidValueValid = true;
      }
    } else if (
      !isFiniteNonNegative(input.aid.legalAidValueAmount) ||
      input.aid.legalAidValueAmount <= 0
    ) {
      addUnique(
        invalidIssues,
        "Valeur juridique de l’aide : un montant fini strictement positif dans la précision sûre est requis lorsqu’il est renseigné.",
      );
    } else if (!hasAtMostTwoDecimalPlaces(input.aid.legalAidValueAmount)) {
      addUnique(
        invalidIssues,
        "Valeur juridique de l’aide : un montant monétaire doit comporter au plus deux décimales.",
      );
    } else {
      legalAidValueValid = true;
    }

    if (!financialContributionSupported) {
      approvedFinancialContributionValid = validateAbsentAmount(
        input.aid.approvedFinancialContributionAmount,
        "Contribution financière approuvée",
        "ne saisissez pas le nominal ou l’ESB d’un instrument non modélisé comme s’il s’agissait d’une subvention payée pour la facture.",
      );
    } else if (input.aid.approvedFinancialContributionAmount === undefined) {
      addUnique(
        missingEvidence,
        "Contribution financière approuvée : le montant que la notification prévoit de payer pour la facture manque.",
      );
    } else if (
      !isFiniteNonNegative(input.aid.approvedFinancialContributionAmount) ||
      input.aid.approvedFinancialContributionAmount <= 0
    ) {
      addUnique(
        invalidIssues,
        "Contribution financière approuvée : un montant fini strictement positif dans la précision sûre est requis pour une subvention notifiée.",
      );
    } else if (
      !hasAtMostTwoDecimalPlaces(input.aid.approvedFinancialContributionAmount)
    ) {
      addUnique(
        invalidIssues,
        "Contribution financière approuvée : un montant monétaire doit comporter au plus deux décimales.",
      );
    } else {
      approvedFinancialContributionValid = true;
    }

    if (input.aid.stage === "notified") {
      actualFinancialContributionValid = validateAbsentAmount(
        input.aid.actualFinancialContributionAmount,
        "Paiement effectif de l’aide",
        "passez l’état à « aide versée ou payée directement au fournisseur » avant de renseigner ce montant.",
      );
    } else if (!financialContributionSupported) {
      actualFinancialContributionValid = validateAbsentAmount(
        input.aid.actualFinancialContributionAmount,
        "Paiement effectif de l’aide",
        "le décaissement ou le nominal d’un instrument non modélisé ne doit pas être saisi comme une subvention effectivement payée.",
      );
    } else if (input.aid.actualFinancialContributionAmount === undefined) {
      addUnique(
        missingEvidence,
        "Paiement effectif de l’aide : la preuve du versement à l’entreprise ou du paiement direct au fournisseur manque.",
      );
    } else if (
      !isFiniteNonNegative(input.aid.actualFinancialContributionAmount) ||
      input.aid.actualFinancialContributionAmount <= 0
    ) {
      addUnique(
        invalidIssues,
        "Paiement effectif de l’aide : un montant fini strictement positif dans la précision sûre est requis.",
      );
    } else if (
      !hasAtMostTwoDecimalPlaces(input.aid.actualFinancialContributionAmount)
    ) {
      addUnique(
        invalidIssues,
        "Paiement effectif de l’aide : un montant monétaire doit comporter au plus deux décimales.",
      );
    } else {
      actualFinancialContributionValid = true;
    }

    if (
      input.aid.stage === "received" &&
      financialContributionSupported &&
      approvedFinancialContributionValid &&
      actualFinancialContributionValid &&
      input.aid.approvedFinancialContributionAmount !== undefined &&
      input.aid.actualFinancialContributionAmount !== undefined &&
      input.aid.actualFinancialContributionAmount >
        input.aid.approvedFinancialContributionAmount
    ) {
      addUnique(
        invalidIssues,
        "Paiement effectif de l’aide : il dépasse la contribution financière approuvée renseignée.",
      );
      actualFinancialContributionValid = false;
    }
  }

  if (input.aid.stage === "received" && financialContributionSupported) {
    if (
      finalInvoiceMatchRecognized &&
      input.aid.finalInvoiceMatchesQuote === "unknown"
    ) {
      addUnique(
        missingEvidence,
        "Facture finale : confirmer que les lignes du dossier reprennent la facture acquittée.",
      );
    } else if (
      finalInvoiceMatchRecognized &&
      input.aid.finalInvoiceMatchesQuote === "no"
    ) {
      addUnique(
        missingEvidence,
        "Facture finale : remplacez les lignes du devis par les montants acquittés avant de calculer le coût réalisé.",
      );
    }

    const finalInvoiceDate = input.aid.finalInvoiceDate ?? "";
    if (!hasRequiredText(finalInvoiceDate)) {
      addUnique(missingEvidence, "Facture finale : date manquante.");
    } else if (!isValidIsoDate(finalInvoiceDate)) {
      addUnique(invalidIssues, "Facture finale : date ISO invalide.");
    } else if (
      isValidIsoDate(input.profile.verificationDate) &&
      finalInvoiceDate.trim() > input.profile.verificationDate.trim()
    ) {
      addUnique(
        invalidIssues,
        "Facture finale : la date ne peut pas être postérieure à la vérification.",
      );
    } else {
      finalInvoiceDateValid = true;
    }
    requireText(
      input.aid.finalInvoiceReference ?? "",
      "Facture finale, référence",
      missingEvidence,
    );

    if (!hasRequiredText(input.aid.receiptReference)) {
      addUnique(
        missingEvidence,
        "Versement ou paiement direct : référence de preuve manquante.",
      );
    }
    if (!hasRequiredText(input.aid.receiptDate)) {
      addUnique(
        missingEvidence,
        "Versement ou paiement direct : date manquante.",
      );
    } else if (!isValidIsoDate(input.aid.receiptDate)) {
      addUnique(
        invalidIssues,
        "Versement ou paiement direct : date ISO invalide.",
      );
    } else if (
      isValidIsoDate(input.profile.verificationDate) &&
      input.aid.receiptDate.trim() > input.profile.verificationDate.trim()
    ) {
      addUnique(
        invalidIssues,
        "Versement ou paiement direct : la date ne peut pas être postérieure à la vérification.",
      );
    } else {
      receiptDateValid = true;
    }

    if (
      finalInvoiceDateValid &&
      receiptDateValid &&
      (input.aid.paymentMode === "reimbursement" ||
        input.aid.paymentMode === "direct") &&
      (input.aid.finalInvoiceDate ?? "").trim() > input.aid.receiptDate.trim()
    ) {
      addUnique(
        invalidIssues,
        "Chronologie : pour un remboursement ou paiement direct, le versement de l’aide à l’entreprise ou au fournisseur ne peut pas précéder la facture finale.",
      );
    } else if (finalInvoiceDateValid && receiptDateValid) {
      receiptChronologyValid = true;
    }
  }

  const paymentModeRecognized = isPaymentMode(input.aid.paymentMode);
  if (!paymentModeRecognized) {
    addUnique(invalidIssues, "Mode de versement : valeur incohérente.");
  } else if (
    financialContributionSupported &&
    input.aid.paymentMode === "unknown"
  ) {
    addUnique(
      missingEvidence,
      "Mode de versement : conditions officielles ou notification manquantes.",
    );
  }

  let prepaymentPercentValid = !financialContributionSupported;
  const documentedPrepaymentPercent = input.aid.documentedPrepaymentPercent;
  if (
    financialContributionSupported &&
    (documentedPrepaymentPercent === undefined ||
      documentedPrepaymentPercent === "unknown")
  ) {
    addUnique(
      missingEvidence,
      "Part versée avant paiement : information documentée manquante.",
    );
  } else if (
    financialContributionSupported &&
    (typeof documentedPrepaymentPercent !== "number" ||
      !isPercent(documentedPrepaymentPercent))
  ) {
    addUnique(
      invalidIssues,
      "Part versée avant paiement : le pourcentage doit rester entre 0 et 100.",
    );
  } else if (
    financialContributionSupported &&
    typeof documentedPrepaymentPercent === "number"
  ) {
    prepaymentPercentValid = true;
    if (
      input.aid.paymentMode === "reimbursement" &&
      documentedPrepaymentPercent !== 0
    ) {
      addUnique(
        invalidIssues,
        "Remboursement : la part versée avant paiement doit être de 0 %.",
      );
      prepaymentPercentValid = false;
    }
    if (
      input.aid.paymentMode === "advance" &&
      documentedPrepaymentPercent <= 0
    ) {
      addUnique(
        invalidIssues,
        "Avance : la part versée avant paiement doit être supérieure à 0 %.",
      );
      prepaymentPercentValid = false;
    }
    if (
      input.aid.paymentMode === "direct" &&
      documentedPrepaymentPercent !== 100
    ) {
      addUnique(
        invalidIssues,
        "Paiement direct : la part du montant documenté non avancée par l’entreprise doit être de 100 %.",
      );
      prepaymentPercentValid = false;
    }
  }

  const paymentTermsConsistent =
    financialContributionSupported &&
    paymentModeRecognized &&
    input.aid.paymentMode !== "unknown" &&
    prepaymentPercentValid;

  const availableCash = validateRequiredNumber(
    input.availableCash,
    "Trésorerie disponible",
    invalidIssues,
    missingEvidence,
    { money: true },
  );
  const waitMonths = validateRequiredNumber(
    input.wait.months,
    "Mois d’attente",
    invalidIssues,
    missingEvidence,
  );
  const monthlyDelayContributionMargin = validateRequiredNumber(
    input.wait.monthlyDelayContributionMargin,
    "Marge contributive mensuelle perdue à cause du retard",
    invalidIssues,
    missingEvidence,
    { money: true },
  );
  const aidSpecificFeesInput = validateRequiredNumber(
    input.wait.aidSpecificFees,
    "Frais propres à la demande et à l’attente",
    invalidIssues,
    missingEvidence,
    { money: true },
  );

  const validateSgeiApplicability = (
    label: string,
    resolution: SiteAidLegalBasisResolution,
    values: {
      entrustmentVerified: SiteAidTriState;
      entrustmentEvidence: string;
      serviceIdentity: string;
      sameServiceCompensationPresent: SiteAidTriState;
      compensationEvidence: string;
    },
  ): boolean => {
    const entrustmentStatusValid = isTriState(values.entrustmentVerified);
    const compensationStatusValid = isTriState(
      values.sameServiceCompensationPresent,
    );
    let known = true;

    if (!entrustmentStatusValid) {
      addUnique(
        invalidIssues,
        `${label}, mandat SIEG : statut de vérification incohérent.`,
      );
      known = false;
    }
    if (!compensationStatusValid) {
      addUnique(
        invalidIssues,
        `${label}, autre compensation du même SIEG : statut incohérent.`,
      );
      known = false;
    }

    const hasSgeiSpecificValue =
      (entrustmentStatusValid && values.entrustmentVerified !== "unknown") ||
      hasRequiredText(values.entrustmentEvidence ?? "") ||
      hasRequiredText(values.serviceIdentity ?? "") ||
      (compensationStatusValid &&
        values.sameServiceCompensationPresent !== "unknown") ||
      hasRequiredText(values.compensationEvidence ?? "");

    if (resolution !== "de-minimis-sgei") {
      if (hasSgeiSpecificValue) {
        addUnique(
          invalidIssues,
          `${label}, champs SIEG : ils doivent rester vides et à confirmer lorsque la base résolue n’est pas le règlement 2023/2832.`,
        );
        known = false;
      }
      return known;
    }

    addUnique(
      toolLimitations,
      "SIEG — déclarations non authentifiées : le moteur conserve le mandat, l’identité du service et l’inventaire des compensations saisis, mais ne vérifie ni les pièces, ni leur applicabilité, ni l’identité du SIEG, ni l’absence réelle d’une autre compensation.",
    );

    const entrustmentEvidencePolarity = sgeiEntrustmentEvidencePolarity(
      values.entrustmentEvidence ?? "",
    );
    if (
      entrustmentStatusValid &&
      ((values.entrustmentVerified === "yes" &&
        entrustmentEvidencePolarity === "denied") ||
        (values.entrustmentVerified === "no" &&
          entrustmentEvidencePolarity === "affirmed"))
    ) {
      addUnique(
        invalidIssues,
        `${label}, cohérence du mandat SIEG : le statut structuré « ${
          values.entrustmentVerified === "yes" ? "OUI" : "NON"
        } » contredit littéralement la preuve saisie. Corriger le statut ou la preuve après lecture de l’acte applicable.`,
      );
      known = false;
    }
    if (entrustmentEvidencePolarity === "ambiguous") {
      addUnique(
        missingEvidence,
        `${label}, preuve du mandat SIEG : texte mixte ou ambigu sans acte écrit ou électronique positivement identifiable — mettre le statut à confirmer et faire relire la pièce ; aucun verdict favorable n’est produit.`,
      );
      known = false;
    } else if (
      entrustmentStatusValid &&
      values.entrustmentVerified === "yes" &&
      entrustmentEvidencePolarity !== "affirmed"
    ) {
      addUnique(
        missingEvidence,
        `${label}, preuve du mandat SIEG : la pièce est peut-être identifiable, mais elle n’affirme pas explicitement que le service est confié à l’entreprise. Ajouter la conclusion positive de l’acte écrit ou électronique ; un numéro seul ne produit aucun verdict favorable.`,
      );
      known = false;
    }

    const compensationEvidencePolarity = sgeiCompensationEvidencePolarity(
      values.compensationEvidence ?? "",
    );
    if (
      compensationStatusValid &&
      ((values.sameServiceCompensationPresent === "yes" &&
        compensationEvidencePolarity === "denied") ||
        (values.sameServiceCompensationPresent === "no" &&
          compensationEvidencePolarity === "affirmed"))
    ) {
      addUnique(
        invalidIssues,
        `${label}, cohérence des compensations du même SIEG : le statut structuré « ${
          values.sameServiceCompensationPresent === "yes" ? "OUI" : "NON"
        } » contredit littéralement l’inventaire saisi. Corriger le statut ou la preuve après vérification du même service.`,
      );
      known = false;
    }
    if (compensationEvidencePolarity === "ambiguous") {
      addUnique(
        missingEvidence,
        `${label}, preuve sur les compensations du même SIEG : texte mixte ou ambigu — recenser toute compensation, même ancienne, et faire confirmer la relation au même service ; aucun verdict favorable n’est produit.`,
      );
      known = false;
    } else if (
      compensationStatusValid &&
      values.sameServiceCompensationPresent === "no" &&
      compensationEvidencePolarity === "unresolved"
    ) {
      addUnique(
        missingEvidence,
        `${label}, preuve sur les compensations du même SIEG : la pièce est peut-être identifiable, mais elle ne conclut pas explicitement à l’absence d’une autre compensation du même service. Ajouter la conclusion négative de l’inventaire ou de l’autorité ; une pièce seulement descriptive ne produit aucun verdict favorable.`,
      );
      known = false;
    }
    addUnique(
      toolLimitations,
      "Cohérence des preuves R24, durcie en R31 : le statut structuré porte la déclaration SIEG et le filtre n’invente jamais ce statut. Il exige un appui littéral explicite cohérent, route toute ambiguïté vers un dossier incomplet, ne résout pas juridiquement le langage, ne qualifie ni n’authentifie les actes et ne remplace pas leur revue humaine.",
    );

    if (entrustmentStatusValid) {
      if (values.entrustmentVerified === "unknown") {
        addUnique(
          missingEvidence,
          `${label}, mandat SIEG : statut à confirmer — vérifier que le service a été confié à l’entreprise par écrit ou par voie électronique.`,
        );
        known = false;
      } else if (values.entrustmentVerified === "no") {
        addUnique(
          missingEvidence,
          `${label}, mandat SIEG : statut « NON » — le règlement 2023/2832 ne peut pas être retenu sans mission SIEG confiée par écrit ou par voie électronique ; qualifier une autre base avec l’autorité.`,
        );
        known = false;
      } else if (
        !hasIdentifiableSgeiEntrustmentEvidence(
          values.entrustmentEvidence ?? "",
        )
      ) {
        addUnique(
          missingEvidence,
          `${label}, preuve du mandat SIEG : fournir un acte écrit ou électronique identifiable qui confie le service à l’entreprise — nature du support et référence structurée, ou autorité d’octroi avec date. Un texte libre, un projet ou une URL officielle générique ne suffisent pas.`,
        );
        known = false;
      }
    }

    if (!hasRequiredText(values.serviceIdentity ?? "")) {
      addUnique(
        missingEvidence,
        `${label}, identité du SIEG : décrire exactement le service confié afin de comparer toute autre compensation au même service.`,
      );
      known = false;
    } else if (
      !exactEntityGroupingKey(values.serviceIdentity ?? "") ||
      !entityGroupingProximityKey(values.serviceIdentity ?? "")
    ) {
      const keyIssue =
        entityGroupingKeyIssue(values.serviceIdentity ?? "") ??
        "l’identité déclarée n’est pas exploitable";
      addUnique(missingEvidence, `${label}, identité du SIEG : ${keyIssue}.`);
      known = false;
    }

    if (compensationStatusValid) {
      if (values.sameServiceCompensationPresent === "unknown") {
        addUnique(
          missingEvidence,
          `${label}, autre compensation du même SIEG : statut à confirmer — recenser toute compensation relative au service identifié, qu’elle constitue ou non une aide d’État.`,
        );
        known = false;
      } else if (values.sameServiceCompensationPresent === "yes") {
        addUnique(
          missingEvidence,
          `${label}, autre compensation du même SIEG : statut « OUI » — le règlement 2023/2832 interdit ce cumul ; requalifier la base avec l’autorité avant toute conclusion.`,
        );
        addUnique(
          warnings,
          `${label} : une autre compensation relative au même SIEG est déclarée. Le précontrôle sous le règlement 2023/2832 reste suspendu, que cette compensation constitue ou non une aide d’État.`,
        );
        known = false;
      }
      if (
        values.sameServiceCompensationPresent !== "unknown" &&
        !hasIdentifiableSgeiCompensationEvidence(
          values.compensationEvidence ?? "",
        )
      ) {
        addUnique(
          missingEvidence,
          `${label}, preuve sur les compensations du même SIEG : fournir un inventaire ou une réponse d’autorité identifiable couvrant le service — nature du document et référence structurée, ou autorité d’octroi avec date. Un texte libre, provisoire ou ambigu ne suffit pas.`,
        );
        known = false;
      }
    }

    return known;
  };

  let registerKnown = true;
  let registeredAmountsKnown = true;
  let sameBaseKnown = true;
  let registeredAidTotalAccumulator = 0;
  let sameBaseAidTotalAccumulator = 0;
  const registerLegalBasisKinds: DeMinimisRegimeKind[] = [];
  const registerLegalBasisResolutions: SiteAidLegalBasisResolution[] = [];
  input.aidRegister.forEach((entry, index) => {
    const position = index + 1;
    const entryLabel = `Registre, aide ${position}`;
    if (!isTriState(entry.sgeiRelationToCurrentService)) {
      addUnique(
        invalidIssues,
        `${entryLabel}, relation au service SIEG de l’aide courante : statut incohérent.`,
      );
      registerKnown = false;
    }
    const entryLegalBasisStatusRecognized = isLegalBasisStatus(
      entry.legalBasisStatus,
    );
    const entryLegalBasisStatus = entryLegalBasisStatusRecognized
      ? entry.legalBasisStatus
      : "unknown";
    if (!entryLegalBasisStatusRecognized) {
      addUnique(
        invalidIssues,
        `${entryLabel}, statut de la base juridique : valeur incohérente.`,
      );
      registerKnown = false;
    }
    const entryLegalBasisResolution = resolveSiteAidLegalBasisResolution(
      entry.regime ?? "",
      entryLegalBasisStatus,
    );
    const entryRegimeKind = deMinimisKindFromResolution(
      entryLegalBasisResolution,
    );
    registerLegalBasisResolutions[index] = entryLegalBasisResolution;
    registerLegalBasisKinds[index] = entryRegimeKind;
    const entryRegimeIsDeMinimis =
      entryRegimeKind === "general" ||
      entryRegimeKind === "agriculture" ||
      entryRegimeKind === "fishery" ||
      entryRegimeKind === "sgei";
    if (entryRegimeIsDeMinimis) {
      addUnique(toolLimitations, DE_MINIMIS_REFERENCE_SYNTAX_LIMITATION);
    }
    const entrySgeiKnown = validateSgeiApplicability(
      entryLabel,
      entryLegalBasisResolution,
      {
        entrustmentVerified: entry.sgeiEntrustmentVerified ?? "unknown",
        entrustmentEvidence: entry.sgeiEntrustmentEvidence ?? "",
        serviceIdentity: entry.sgeiServiceIdentity ?? "",
        sameServiceCompensationPresent:
          entry.sgeiSameServiceCompensationPresent ?? "unknown",
        compensationEvidence: entry.sgeiCompensationEvidence ?? "",
      },
    );
    if (!entrySgeiKnown) registerKnown = false;
    const entryHasNonDeMinimisBranch =
      hasRequiredText(entry.nonDeMinimisLegalBasis ?? "") ||
      hasRequiredText(entry.nonDeMinimisEvidenceReference ?? "");

    if (
      !requireText(entry.authority, `${entryLabel}, organisme`, missingEvidence)
    ) {
      registerKnown = false;
    }
    if (!requireText(entry.scheme, `${entryLabel}, régime`, missingEvidence)) {
      registerKnown = false;
    }
    if (
      entryRegimeIsDeMinimis &&
      (entryLegalBasisStatus === "not-de-minimis" || entryHasNonDeMinimisBranch)
    ) {
      addUnique(
        invalidIssues,
        `${entryLabel}, base juridique : une référence exacte à un règlement de minimis contredit la branche « hors de minimis » ; la référence exacte reste retenue pour le contrôle prudent.`,
      );
      registerKnown = false;
    }
    if (entryLegalBasisStatus === "de-minimis" && entryHasNonDeMinimisBranch) {
      addUnique(
        invalidIssues,
        `${entryLabel}, base juridique : les champs de minimis et hors de minimis ne peuvent pas être renseignés simultanément.`,
      );
      registerKnown = false;
    }
    if (entryRegimeIsDeMinimis) {
      if (
        !requireText(
          entry.memberState,
          `${entryLabel}, État membre de l’autorité d’octroi`,
          missingEvidence,
        )
      ) {
        registerKnown = false;
      }
      if (
        !requireText(
          entry.singleUndertakingScope,
          `${entryLabel}, périmètre de l’entreprise unique`,
          missingEvidence,
        )
      ) {
        registerKnown = false;
      } else if (!exactEntityGroupingKey(entry.singleUndertakingScope)) {
        const keyIssue =
          entityGroupingKeyIssue(entry.singleUndertakingScope) ??
          "la clé déclarée est invalide";
        addUnique(
          missingEvidence,
          `${entryLabel}, périmètre de l’entreprise unique : ${keyIssue}.`,
        );
        registerKnown = false;
      }
    } else if (entryLegalBasisResolution === "not-de-minimis-external-review") {
      if (
        !hasFormalNonDeMinimisLegalBasis(entry.nonDeMinimisLegalBasis ?? "")
      ) {
        addUnique(
          missingEvidence,
          `${entryLabel}, base hors de minimis déclarée : fournir pour la revue externe un instrument juridique identifiable et un identifiant structuré. Une forme plausible ne vaut pas authentification.`,
        );
      }
      if (
        !hasFormalNonDeMinimisEvidenceReference(
          entry.nonDeMinimisEvidenceReference ?? "",
        )
      ) {
        addUnique(
          missingEvidence,
          `${entryLabel}, référence de preuve hors de minimis déclarée : fournir pour la revue externe une URL officielle reconnue ou une décision, notification, convention, arrêté ou délibération avec identifiant structuré. Cette forme ne vaut pas authentification.`,
        );
      }
      addUnique(
        missingEvidence,
        `${entryLabel}, hors de minimis déclaré : confirmation écrite de l’autorité compétente ou validation humaine hors outil requise.`,
      );
      addUnique(toolLimitations, NON_DE_MINIMIS_EXTERNAL_REVIEW_LIMITATION);
      registerKnown = false;
    } else if (entryLegalBasisResolution === "unknown") {
      addUnique(
        missingEvidence,
        `${entryLabel}, base juridique : ${unresolvedLegalBasisAction(
          entry.regime ?? "",
        )}`,
      );
      addUnique(
        warnings,
        `${entryLabel} : la base saisie n’est pas résolue. Une mention isolée « hors », « non » ou « pas de minimis », ou une formulation incertaine, ne désactive aucun contrôle.`,
      );
      registerKnown = false;
    }
    if (
      !requireText(entry.expenses, `${entryLabel}, dépenses`, missingEvidence)
    ) {
      registerKnown = false;
    }
    if (!hasRequiredText(entry.legalGrantDate)) {
      addUnique(
        missingEvidence,
        `${entryLabel}, date d’octroi juridique : information manquante.`,
      );
      registerKnown = false;
    } else if (!isValidIsoDate(entry.legalGrantDate)) {
      addUnique(
        invalidIssues,
        `${entryLabel}, date d’octroi juridique : date ISO invalide.`,
      );
      registerKnown = false;
    } else if (
      isValidIsoDate(input.profile.verificationDate) &&
      entry.legalGrantDate.trim() > input.profile.verificationDate.trim()
    ) {
      addUnique(
        invalidIssues,
        `${entryLabel}, date d’octroi juridique : elle ne peut pas être postérieure à la vérification.`,
      );
      registerKnown = false;
    }

    if (entry.amount === undefined) {
      addUnique(
        missingEvidence,
        `${entryLabel}, montant : valeur à renseigner.`,
      );
      registerKnown = false;
      registeredAmountsKnown = false;
      sameBaseKnown = false;
    } else if (!isFiniteNonNegative(entry.amount)) {
      addUnique(
        invalidIssues,
        `${entryLabel}, montant : la valeur doit être finie, positive ou nulle et rester dans la précision sûre.`,
      );
      registerKnown = false;
      registeredAmountsKnown = false;
      sameBaseKnown = false;
    } else if (!isValidMoneyInput(entry.amount)) {
      addUnique(
        invalidIssues,
        `${entryLabel}, montant : un montant monétaire doit comporter au plus deux décimales.`,
      );
      registerKnown = false;
      registeredAmountsKnown = false;
      sameBaseKnown = false;
    } else {
      const nextRegisteredTotal = derivedMoney(
        registeredAidTotalAccumulator + entry.amount,
        "Total du registre des aides",
      );
      if (nextRegisteredTotal === undefined) {
        registerKnown = false;
        registeredAmountsKnown = false;
      } else {
        registeredAidTotalAccumulator = nextRegisteredTotal;
      }
      if (
        isTriState(entry.sameBaseOrInvoice) &&
        entry.sameBaseOrInvoice === "yes"
      ) {
        const nextSameBaseTotal = derivedMoney(
          sameBaseAidTotalAccumulator + entry.amount,
          "Total des aides sur la même assiette ou facture",
        );
        if (nextSameBaseTotal === undefined) {
          registerKnown = false;
          sameBaseKnown = false;
        } else {
          sameBaseAidTotalAccumulator = nextSameBaseTotal;
        }
      }
    }

    if (!isTriState(entry.sameBaseOrInvoice)) {
      addUnique(
        invalidIssues,
        `${entryLabel} : état « même assiette ou même facture » incohérent.`,
      );
      registerKnown = false;
      sameBaseKnown = false;
    } else if (entry.sameBaseOrInvoice === "unknown") {
      addUnique(
        missingEvidence,
        `${entryLabel} : même assiette ou même facture à confirmer.`,
      );
      registerKnown = false;
      sameBaseKnown = false;
    }
  });

  validateSgeiApplicability("Aide courante", currentLegalBasisResolution, {
    entrustmentVerified: input.aid.sgeiEntrustmentVerified ?? "unknown",
    entrustmentEvidence: input.aid.sgeiEntrustmentEvidence ?? "",
    serviceIdentity: input.aid.sgeiServiceIdentity ?? "",
    sameServiceCompensationPresent:
      input.aid.sgeiSameServiceCompensationPresent ?? "unknown",
    compensationEvidence: input.aid.sgeiCompensationEvidence ?? "",
  });

  /*
   * Inventaire R24 distinct du calcul des plafonds : l’article 5(2) du
   * règlement 2023/2832 ne contient pas la fenêtre triennale de l’article 3.
   * Chaque ligne SIEG comparable à l’aide courante est donc contrôlée quelle
   * que soit sa date. Le libellé sert seulement à détecter une contradiction
   * avec `no`; il ne fabrique jamais une distinction favorable.
   */
  const currentSgeiUndertakingExactKey = exactEntityGroupingKey(
    input.aid.deMinimisSingleUndertakingScope ?? "",
  );
  const currentSgeiServiceExactKey = exactEntityGroupingKey(
    input.aid.sgeiServiceIdentity ?? "",
  );
  const currentSgeiServiceProximityKey = entityGroupingProximityKey(
    input.aid.sgeiServiceIdentity ?? "",
  );
  input.aidRegister.forEach((entry, index) => {
    const entryLabel = `Registre, aide ${index + 1}`;
    const relationStatus = entry.sgeiRelationToCurrentService;
    const relationStatusValid = isTriState(relationStatus);
    if (!relationStatusValid) return;

    const entryUndertakingExactKey = exactEntityGroupingKey(
      entry.singleUndertakingScope ?? "",
    );
    const relationApplies =
      currentLegalBasisResolution === "de-minimis-sgei" &&
      (registerLegalBasisResolutions[index] ?? "unknown") ===
        "de-minimis-sgei" &&
      currentSgeiUndertakingExactKey !== undefined &&
      entryUndertakingExactKey !== undefined &&
      currentSgeiUndertakingExactKey === entryUndertakingExactKey;

    if (!relationApplies) {
      if (
        relationStatus !== "unknown" ||
        hasRequiredText(entry.sgeiRelationToCurrentServiceEvidence ?? "")
      ) {
        addUnique(
          warnings,
          `${entryLabel}, relation au service SIEG de l’aide courante : déclaration hors comparaison ignorée, car les deux aides ne sont pas toutes deux résolues sous le règlement 2023/2832 pour la même entreprise unique exacte.`,
        );
      }
      return;
    }

    addUnique(
      toolLimitations,
      "Relation SIEG à l’aide courante R27 — contrôle transfrontalier non authentifié : pour chaque ligne antérieure relevant aussi du règlement 2023/2832 et de la même entreprise unique exacte, le moteur exige une relation structurée au service courant sans filtre d’État membre ni limite d’ancienneté. Le statut structuré porte seul la conclusion « même service » ou « services distincts » ; le texte libre ne fabrique jamais cette conclusion et sert seulement de pièce identifiable et de garde bornée contre une contradiction littérale ou une ambiguïté. Une distinction déclarée exige le type de pièce, l’autorité, la référence, la date et l’identification explicite des deux services ; une URL officielle générique est refusée. Cette comparaison au titre de l’article 5(2) reste distincte du calcul du plafond de l’article 3, qui conserve son regroupement par État membre. Le moteur n’authentifie ni les services ni la preuve ; une différence lexicale ne vaut jamais distinction.",
    );

    if (relationStatus === "yes") {
      addUnique(
        missingEvidence,
        `${entryLabel}, relation au service SIEG de l’aide courante : « OUI », même service déclaré — l’article 5, paragraphe 2, du règlement 2023/2832 interdit le cumul avec toute autre compensation relative à ce service, qu’elle constitue ou non une aide d’État et quelle que soit son ancienneté. Requalifier la base ou faire arbitrer la situation par l’autorité avant toute conclusion.`,
      );
      addUnique(
        warnings,
        `${entryLabel} : même service SIEG déclaré par rapport à l’aide courante. L’inventaire des compensations de l’article 5(2) reste distinct du calcul du plafond sur trois ans ; cette ligne bloque le précontrôle même hors de la fenêtre triennale.`,
      );
      registerKnown = false;
      return;
    }

    if (relationStatus === "unknown") {
      addUnique(
        missingEvidence,
        `${entryLabel}, relation au service SIEG de l’aide courante : statut à confirmer — faire établir si les deux compensations concernent le même service. Une identité différente, même très éloignée ou paraphrasée, ne prouve jamais que les services sont distincts.`,
      );
      registerKnown = false;
      return;
    }

    const entryServiceExactKey = exactEntityGroupingKey(
      entry.sgeiServiceIdentity ?? "",
    );
    const entryServiceProximityKey = entityGroupingProximityKey(
      entry.sgeiServiceIdentity ?? "",
    );
    const exactIdentityContradiction =
      currentSgeiServiceExactKey !== undefined &&
      entryServiceExactKey !== undefined &&
      currentSgeiServiceExactKey === entryServiceExactKey;
    const closeIdentityContradiction =
      !exactIdentityContradiction &&
      currentSgeiServiceProximityKey !== undefined &&
      entryServiceProximityKey !== undefined &&
      currentSgeiServiceProximityKey === entryServiceProximityKey;
    if (exactIdentityContradiction || closeIdentityContradiction) {
      addUnique(
        invalidIssues,
        `${entryLabel}, relation au service SIEG de l’aide courante : le statut « NON » contredit des identités de service ${
          exactIdentityContradiction ? "exactes" : "textuellement proches"
        }. Corriger les données ou faire revoir les actes ; le moteur ne tranche pas l’identité juridique du service.`,
      );
      registerKnown = false;
    }
    const relationEvidence = entry.sgeiRelationToCurrentServiceEvidence ?? "";
    const evidencePolarity = sgeiRelationEvidencePolarity(relationEvidence);
    if (evidencePolarity === "same") {
      addUnique(
        invalidIssues,
        `${entryLabel}, cohérence de la relation au service SIEG de l’aide courante : le statut structuré « NON » contredit littéralement une preuve qui désigne le même service, un service identique ou le même SIEG. Corriger le statut ou faire relire la pièce ; aucune distinction favorable n’est inférée.`,
      );
      registerKnown = false;
    } else if (evidencePolarity === "ambiguous") {
      addUnique(
        missingEvidence,
        `${entryLabel}, preuve de distinction avec le service SIEG de l’aide courante : polarité mixte, incertaine ou ambiguë entre « même » et « distinct ». Faire relire la pièce et ressaisir une conclusion structurée ; aucun verdict favorable n’est produit.`,
      );
      registerKnown = false;
    } else if (
      !hasIdentifiableSgeiRelationEvidence(
        relationEvidence,
        input.aid.sgeiServiceIdentity ?? "",
        entry.sgeiServiceIdentity ?? "",
      )
    ) {
      addUnique(
        missingEvidence,
        `${entryLabel}, preuve de distinction avec le service SIEG de l’aide courante : fournir une preuve structurée qui réunit le type de pièce (acte, mandat, convention, décision, attestation ou réponse), l’autorité, une référence, une date valide et l’identification explicite des deux services comparés. Une page d’accueil service-public.fr, toute autre URL officielle générique ou la simple différence de libellé ne constitue jamais cette preuve. Le moteur n’authentifie ni la pièce, ni les services.`,
      );
      registerKnown = false;
    } else if (evidencePolarity === "unresolved") {
      addUnique(
        missingEvidence,
        `${entryLabel}, preuve de distinction avec le service SIEG de l’aide courante : la pièce est formellement identifiable mais ne conclut pas textuellement que les deux services sont distincts. Ajouter la conclusion explicite de l’autorité ou faire relire la pièce ; aucun verdict favorable n’est produit.`,
      );
      registerKnown = false;
    }
  });

  const corporateEventOccurred =
    input.profile.deMinimisCorporateEventOccurred ?? "unknown";
  const corporateEventKind =
    input.profile.deMinimisCorporateEventKind ?? "unknown";
  const corporateEventEvidence =
    input.profile.deMinimisCorporateEventEvidence ?? "";
  const corporateAidHistoryAdjusted =
    input.profile.deMinimisCorporateAidHistoryAdjusted ?? "unknown";
  const corporateEventStatusValid = isTriState(corporateEventOccurred);
  const corporateEventKindValid = isCorporateEventKind(corporateEventKind);
  const corporateHistoryStatusValid = isTriState(corporateAidHistoryAdjusted);
  const deMinimisCorporateReviewRequired =
    legalBasisStatus === "de-minimis" ||
    currentRegimeIsDeMinimis ||
    input.aidRegister.some(
      (entry, index) =>
        entry.legalBasisStatus === "de-minimis" ||
        deMinimisKindFromResolution(
          registerLegalBasisResolutions[index] ?? "unknown",
        ) !== "unknown-de-minimis",
    );

  if (!corporateEventStatusValid) {
    addUnique(
      invalidIssues,
      "Restructuration de l’entreprise pour le cumul de minimis : statut incohérent.",
    );
  }
  if (!corporateEventKindValid) {
    addUnique(
      invalidIssues,
      "Type de fusion, acquisition ou scission : valeur incohérente.",
    );
  }
  if (!corporateHistoryStatusValid) {
    addUnique(
      invalidIssues,
      "Registre après fusion, acquisition ou scission : statut d’ajustement incohérent.",
    );
  }

  const corporateEvidencePolarity = corporateEventEvidencePolarity(
    corporateEventEvidence,
  );
  if (
    deMinimisCorporateReviewRequired &&
    corporateEventStatusValid &&
    ((corporateEventOccurred === "yes" &&
      corporateEvidencePolarity === "denied") ||
      (corporateEventOccurred === "no" &&
        corporateEvidencePolarity === "affirmed"))
  ) {
    addUnique(
      invalidIssues,
      `Cohérence de la restructuration : le statut structuré « ${
        corporateEventOccurred === "yes" ? "OUI" : "NON"
      } » contredit littéralement l’historique saisi. Corriger le statut ou la preuve après vérification des actes applicables.`,
    );
    addUnique(
      toolLimitations,
      "Cohérence des preuves R24, durcie en R31 : le statut structuré porte la déclaration de restructuration et le filtre n’invente jamais ce statut. Il exige un appui littéral explicite cohérent, route toute ambiguïté vers un dossier incomplet, ne résout pas juridiquement le langage libre, ne parse, ne qualifie ni n’authentifie les actes et ne remplace pas leur revue humaine.",
    );
  }
  if (
    deMinimisCorporateReviewRequired &&
    corporateEventStatusValid &&
    corporateEvidencePolarity === "ambiguous"
  ) {
    addUnique(
      missingEvidence,
      "Cohérence de la restructuration : le texte contient des clauses mixtes ou ambiguës sans opération positivement identifiable. Mettre le statut à confirmer et faire relire les actes ; aucun verdict favorable n’est produit.",
    );
    addUnique(
      toolLimitations,
      "Cohérence des preuves R24, durcie en R31 : le statut structuré porte la déclaration de restructuration et le filtre n’invente jamais ce statut. Il exige un appui littéral explicite cohérent, route toute ambiguïté vers un dossier incomplet, ne résout pas juridiquement le langage libre, ne parse, ne qualifie ni n’authentifie les actes et ne remplace pas leur revue humaine.",
    );
  } else if (
    deMinimisCorporateReviewRequired &&
    corporateEventStatusValid &&
    corporateEventOccurred !== "unknown" &&
    corporateEvidencePolarity === "unresolved"
  ) {
    addUnique(
      missingEvidence,
      corporateEventOccurred === "yes"
        ? "Cohérence de la restructuration : la pièce est seulement descriptive et n’affirme pas explicitement qu’une fusion, une acquisition ou une scission pertinente a eu lieu. Ajouter la conclusion positive de l’acte ; aucun verdict favorable n’est produit."
        : "Cohérence de la restructuration : la pièce est seulement descriptive et ne conclut pas explicitement à l’absence de fusion, d’acquisition ou de scission pertinente. Ajouter la conclusion négative de l’historique juridique ; aucun verdict favorable n’est produit.",
    );
    addUnique(
      toolLimitations,
      "Cohérence des preuves R24, durcie en R31 : le statut structuré porte la déclaration de restructuration et le filtre n’invente jamais ce statut. Il exige un appui littéral explicite cohérent, route toute ambiguïté vers un dossier incomplet, ne résout pas juridiquement le langage libre, ne parse, ne qualifie ni n’authentifie les actes et ne remplace pas leur revue humaine.",
    );
  }

  const hasCorporateSpecificValue =
    (corporateEventStatusValid && corporateEventOccurred !== "unknown") ||
    (corporateEventKindValid && corporateEventKind !== "unknown") ||
    hasRequiredText(corporateEventEvidence) ||
    (corporateHistoryStatusValid && corporateAidHistoryAdjusted !== "unknown");

  if (!deMinimisCorporateReviewRequired) {
    if (hasCorporateSpecificValue) {
      addUnique(
        toolLimitations,
        "Restructuration de l’entreprise : les déclarations saisies sont conservées dans le rapport mais n’entrent pas dans le précontrôle tant qu’aucune branche de minimis n’est déclarée.",
      );
    }
  } else if (
    corporateEventStatusValid &&
    corporateEventKindValid &&
    corporateHistoryStatusValid
  ) {
    if (corporateEventOccurred === "unknown") {
      addUnique(
        missingEvidence,
        "Restructuration de l’entreprise pour le cumul de minimis : statut à confirmer — indiquer si une fusion, une acquisition ou une scission affecte la fenêtre de trois ans contrôlée.",
      );
      if (
        corporateEventKind !== "unknown" ||
        hasRequiredText(corporateEventEvidence) ||
        corporateAidHistoryAdjusted !== "unknown"
      ) {
        addUnique(
          invalidIssues,
          "Restructuration de l’entreprise pour le cumul de minimis : aucun détail ne doit être conclu tant que le statut reste à confirmer.",
        );
      }
    } else if (corporateEventOccurred === "no") {
      if (
        corporateEventKind !== "unknown" ||
        corporateAidHistoryAdjusted !== "unknown"
      ) {
        addUnique(
          invalidIssues,
          "Restructuration de l’entreprise pour le cumul de minimis : le type d’opération et l’ajustement du registre doivent rester à confirmer lorsqu’aucune opération n’est déclarée.",
        );
      }
      if (!hasRequiredText(corporateEventEvidence)) {
        addUnique(
          missingEvidence,
          "Restructuration de l’entreprise pour le cumul de minimis : preuve manquante — citer l’historique juridique, l’extrait d’immatriculation ou la confirmation vérifiée qui étaye l’absence déclarée d’opération pertinente.",
        );
      } else {
        addUnique(
          toolLimitations,
          "Restructuration de l’entreprise — absence déclarée non authentifiée : le moteur ne consulte ni registre des sociétés, ni traité de fusion, ni acte d’acquisition ou de scission ; l’absence d’opération pertinente doit être confirmée hors outil.",
        );
      }
    } else {
      if (corporateEventKind === "unknown") {
        addUnique(
          missingEvidence,
          "Type de fusion, acquisition ou scission : préciser si l’historique concerne une fusion ou acquisition, une scission, ou les deux.",
        );
      }
      if (!hasRequiredText(corporateEventEvidence)) {
        addUnique(
          missingEvidence,
          "Restructuration de l’entreprise pour le cumul de minimis : preuve manquante — citer les actes, dates, entreprises parties, activités reprises et méthode d’allocation utilisée.",
        );
      }
      if (corporateAidHistoryAdjusted === "unknown") {
        addUnique(
          missingEvidence,
          "Registre après fusion, acquisition ou scission : statut à confirmer — vérifier que toutes les aides antérieures requises sont intégrées ou allouées avant le calcul.",
        );
      } else if (corporateAidHistoryAdjusted === "no") {
        addUnique(
          missingEvidence,
          "Registre après fusion, acquisition ou scission : statut « NON » — le cumul reste incomplet tant que l’historique n’est pas ajusté et confirmé par écrit.",
        );
      } else {
        addUnique(
          toolLimitations,
          "Restructuration de l’entreprise — registre ajusté déclaré, non authentifié : le moteur additionne les montants saisis mais ne reconstitue pas les aides des entreprises fusionnées ou acquises et ne vérifie pas l’allocation d’une scission.",
        );
      }

      if (
        corporateEventKind === "merger-acquisition" ||
        corporateEventKind === "both"
      ) {
        addUnique(
          warnings,
          "Fusion ou acquisition déclarée : les aides de minimis antérieures de toutes les entreprises parties à l’opération doivent être prises en compte pour toute nouvelle aide de la nouvelle entreprise ou de l’acquéreur ; les aides légalement octroyées avant l’opération restent légales.",
        );
      }
      if (corporateEventKind === "split" || corporateEventKind === "both") {
        addUnique(
          warnings,
          "Scission déclarée : les aides antérieures doivent être allouées à l’entreprise qui en a bénéficié, en principe celle qui reprend les activités concernées ; si cette allocation est impossible, elles doivent être réparties proportionnellement sur la base de la valeur comptable du capital des nouvelles entreprises à la date effective de la scission.",
        );
      }
    }
  }

  if (
    input.gates.cumulativeAid === "yes" &&
    input.aidRegister.some((entry) => entry.sameBaseOrInvoice === "yes")
  ) {
    addUnique(
      warnings,
      "Le contrôle écrit du cumul doit viser explicitement les aides du registre portant sur la même assiette ou la même facture.",
    );
  }

  const currentLegalGrantStatusRecognized = isTriState(
    input.aid.legalGrantStatus,
  );
  let currentLegalGrantDateValid = false;
  if (!currentLegalGrantStatusRecognized) {
    addUnique(
      invalidIssues,
      "Aide courante, octroi juridique : état incohérent.",
    );
  } else if (input.aid.legalGrantStatus === "yes") {
    if (input.aid.stage === "none") {
      addUnique(
        invalidIssues,
        "Aide courante, octroi juridique : un droit octroyé contredit l’absence de notification.",
      );
    }
    if (!hasRequiredText(input.aid.legalGrantDate ?? "")) {
      addUnique(
        missingEvidence,
        "Aide courante, date d’octroi juridique : information manquante.",
      );
    } else if (!isValidIsoDate(input.aid.legalGrantDate)) {
      addUnique(
        invalidIssues,
        "Aide courante, date d’octroi juridique : date ISO invalide.",
      );
    } else if (
      isValidIsoDate(input.profile.verificationDate) &&
      input.aid.legalGrantDate.trim() > input.profile.verificationDate.trim()
    ) {
      addUnique(
        invalidIssues,
        "Aide courante, date d’octroi juridique : elle ne peut pas être postérieure à la vérification.",
      );
    } else {
      currentLegalGrantDateValid = true;
    }
  } else if (input.aid.legalGrantStatus === "no") {
    if (hasRequiredText(input.aid.legalGrantDate ?? "")) {
      addUnique(
        invalidIssues,
        "Aide courante, octroi juridique : une date est renseignée alors que le droit est déclaré non octroyé.",
      );
    }
    if (input.aid.stage === "notified" || input.aid.stage === "received") {
      addUnique(
        invalidIssues,
        "Aide courante, octroi juridique : l’état notifié ou versé est incompatible avec un octroi déclaré « NON ».",
      );
    }
  }
  const currentLegalGrantConfirmed =
    input.aid.legalGrantStatus === "yes" && currentLegalGrantDateValid;
  if (
    input.aid.stage === "received" &&
    financialContributionSupported &&
    input.aid.legalGrantStatus === "yes" &&
    currentLegalGrantDateValid &&
    receiptDateValid &&
    input.aid.receiptDate.trim() < input.aid.legalGrantDate.trim()
  ) {
    addUnique(
      invalidIssues,
      "Chronologie : le versement de l’aide à l’entreprise ou au fournisseur ne peut pas précéder la date d’octroi juridique qui confère le droit à l’aide.",
    );
    receiptChronologyValid = false;
  }

  const currentHasNonDeMinimisBranch =
    hasRequiredText(input.aid.nonDeMinimisLegalBasis ?? "") ||
    hasRequiredText(input.aid.nonDeMinimisEvidenceReference ?? "");
  if (
    currentRegimeIsDeMinimis &&
    (legalBasisStatus === "not-de-minimis" || currentHasNonDeMinimisBranch)
  ) {
    addUnique(
      invalidIssues,
      "Aide courante, base juridique : une référence exacte à un règlement de minimis contredit la branche « hors de minimis » ; la référence exacte reste retenue pour le contrôle prudent.",
    );
  }
  if (legalBasisStatus === "de-minimis" && currentHasNonDeMinimisBranch) {
    addUnique(
      invalidIssues,
      "Aide courante, base juridique : les champs de minimis et hors de minimis ne peuvent pas être renseignés simultanément.",
    );
  }

  if (currentRegimeIsDeMinimis) {
    requireText(
      input.aid.deMinimisMemberState ?? "",
      "Aide courante, État membre de l’autorité d’octroi",
      missingEvidence,
    );
    if (
      requireText(
        input.aid.deMinimisSingleUndertakingScope ?? "",
        "Aide courante, périmètre de l’entreprise unique",
        missingEvidence,
      ) &&
      !exactEntityGroupingKey(input.aid.deMinimisSingleUndertakingScope ?? "")
    ) {
      const keyIssue =
        entityGroupingKeyIssue(
          input.aid.deMinimisSingleUndertakingScope ?? "",
        ) ?? "la clé déclarée est invalide";
      addUnique(
        missingEvidence,
        `Aide courante, périmètre de l’entreprise unique : ${keyIssue}.`,
      );
    }
  } else if (currentLegalBasisResolution === "not-de-minimis-external-review") {
    if (
      !hasFormalNonDeMinimisLegalBasis(input.aid.nonDeMinimisLegalBasis ?? "")
    ) {
      addUnique(
        missingEvidence,
        "Aide courante, base hors de minimis déclarée : fournir pour la revue externe un instrument juridique identifiable et un identifiant structuré. Une forme plausible ne vaut pas authentification.",
      );
    }
    if (
      !hasFormalNonDeMinimisEvidenceReference(
        input.aid.nonDeMinimisEvidenceReference ?? "",
      )
    ) {
      addUnique(
        missingEvidence,
        "Aide courante, référence de preuve hors de minimis déclarée : fournir pour la revue externe une URL officielle reconnue ou une décision, notification, convention, arrêté ou délibération avec identifiant structuré. Cette forme ne vaut pas authentification.",
      );
    }
    addUnique(
      missingEvidence,
      "Aide courante, hors de minimis déclaré : confirmation écrite de l’autorité compétente ou validation humaine hors outil requise.",
    );
    addUnique(toolLimitations, NON_DE_MINIMIS_EXTERNAL_REVIEW_LIMITATION);
  }

  if (
    currentLegalGrantStatusRecognized &&
    input.aid.stage !== "none" &&
    input.aid.legalGrantStatus === "unknown"
  ) {
    addUnique(
      missingEvidence,
      "Aide courante, octroi juridique : confirmer si le droit à l’aide est déjà conféré.",
    );
  }
  if (currentLegalBasisResolution === "unknown") {
    addUnique(
      missingEvidence,
      `Aide courante, base juridique : ${unresolvedLegalBasisAction(
        input.aid.deMinimisRegime ?? "",
      )}`,
    );
    addUnique(
      warnings,
      "Aide courante : la base saisie n’est pas résolue. Une mention isolée « hors », « non » ou « pas de minimis », ou une formulation incertaine, ne désactive aucun contrôle. La base reste inconnue jusqu’à qualification externe.",
    );
  }

  const validateCentralRegisterTrace = (
    label: string,
    required: boolean,
    resolution: SiteAidLegalBasisResolution,
    rawStatus: SiteAidCentralRegisterStatus | undefined,
    referenceValue: string | undefined,
  ): void => {
    const status = rawStatus ?? "unknown";
    const reference = referenceValue ?? "";
    if (!isCentralRegisterStatus(status)) {
      addUnique(
        invalidIssues,
        `${label}, registre central national : statut incohérent.`,
      );
      return;
    }

    if (!required) {
      if (
        (status !== "unknown" && status !== "not-applicable") ||
        hasRequiredText(reference)
      ) {
        addUnique(
          warnings,
          `${label}, registre central national : champs obsolètes ou hors champ ignorés par le précontrôle. Conserver le statut « NON APPLICABLE » et vider la référence lorsque le décret français n’est pas applicable au régime, à l’État membre de l’autorité d’octroi ou à la date d’octroi.`,
        );
      }
      return;
    }

    const centralRegisterRule =
      resolution === "de-minimis-general"
        ? "Régime général : l’article 6, paragraphe 2, du règlement 2023/2831 impose aux États membres l’enregistrement dans les 20 jours ouvrables suivant l’octroi."
        : resolution === "de-minimis-sgei"
          ? "Régime SIEG : l’article 6, paragraphe 2, du règlement 2023/2832 impose aux États membres l’enregistrement dans les 20 jours ouvrables suivant l’octroi."
          : resolution === "de-minimis-agriculture"
            ? "Régime agricole : l’article 6, paragraphe 2, du règlement 1408/2013 modifié impose aux États membres l’enregistrement dans les 20 jours ouvrables à compter de l’entrée en application du registre au 1er janvier 2027."
            : resolution === "de-minimis-fishery"
              ? "Régime pêche et aquaculture : le règlement 717/2014 ne fixe pas de délai européen général de 20 jours pour enregistrer chaque octroi. Son article 3, paragraphe 2 bis, ne permet le plafond individuel de 40 000 € que si l’État membre dispose du registre central national prévu à l’article 6, paragraphe 2."
              : "Régime non résolu : le moteur n’attribue aucun délai européen d’enregistrement sans base reconnue.";
    addUnique(
      toolLimitations,
      `Registre central R26 — transmission, enregistrement et publication distincts : ${centralRegisterRule} En France, les articles 2 et 3 du décret n° 2025-1361 imposent une transmission dans les 20 jours ouvrables aux seuls services et organismes visés par son article 2 ; son article 5 organise la mise à disposition publique, hors numéro d’identification unique interne. Le moteur ne connaît pas la catégorie juridique de l’organisme, ne consulte pas la Plateforme et n’authentifie ni l’enregistrement, ni la publication, ni l’exhaustivité.`,
    );
    if (status === "unknown") {
      addUnique(
        missingEvidence,
        `${label}, registre central national : statut à confirmer — vérifier l’enregistrement français de l’aide de minimis.`,
      );
    } else if (status === "pending") {
      addUnique(
        missingEvidence,
        `${label}, registre central national : transmission des données d’octroi déclarée en cours — aucun verdict favorable avant confirmation de l’enregistrement et de sa référence.`,
      );
      addUnique(
        warnings,
        `${label}, registre central national : ${centralRegisterRule} Pour la transmission française à la Plateforme, le délai du décret n° 2025-1361 ne concerne que les organismes visés par ses articles 2 et 3. Cette transmission ne prouve ni l’enregistrement ni la publication ; le moteur ne qualifie pas l’organisme et ne calcule pas les jours fériés.`,
      );
    } else if (status === "not-registered") {
      addUnique(
        missingEvidence,
        `${label}, registre central national : aide déclarée non enregistrée — régulariser avec l’autorité d’octroi avant toute conclusion favorable.`,
      );
      addUnique(
        warnings,
        `${label} : l’absence déclarée d’enregistrement au registre central suspend le précontrôle de minimis et expose l’aide à une revue de légalité et, le cas échéant, de récupération.`,
      );
    } else if (status === "not-applicable") {
      addUnique(
        invalidIssues,
        `${label}, registre central national : le statut « NON APPLICABLE » contredit le régime français et la date d’octroi renseignés.`,
      );
    }

    if (status === "registered") {
      const referenceKind = formalCentralRegisterReferenceKind(reference);
      if (referenceKind === undefined) {
        addUnique(
          missingEvidence,
          `${label}, référence du registre central national : fournir un recordid ou identifiant public exploitable du jeu officiel « aides_minimis » au format Opendatasoft exact de 40 caractères hexadécimaux, autonome sous la forme « recordid: … » ou dans une route legacy/current reconnue, ou fournir séparément une attestation structurée identifiable de l’autorité d’octroi. « banane », une chaîne courte ou tronquée, un pseudo-ID « public-fr-* », un faux paramètre, une URL générique et un encodage ambigu sont refusés. L’ancienne URL de l’API publique v1 « /api/records/1.0/search/ » n’est pas admise par ce contrat documentaire : recopier son recordid autonome. Le numéro d’identification unique interne exclu de la publication par l’article 5 du décret n° 2025-1361 n’est pas requis et ne suffit pas, à lui seul, comme référence publique. Une forme reconnue ne prouve ni l’existence du recordid, ni l’enregistrement, ni la publication.`,
        );
      } else if (referenceKind === "public-recordid") {
        addUnique(
          toolLimitations,
          "Registre central R26 — recordid public non authentifié : le moteur reconnaît seulement une forme Opendatasoft de 40 caractères hexadécimaux, autonome ou portée par une route legacy/current explicitement admise. Une URL portant un second paramètre dont le nom ou la valeur mentionne recordid est rejetée comme ambiguë, même si un localisateur valide est aussi présent. Il ne consulte pas le jeu « aides_minimis » et ne contrôle ni l’existence du recordid, ni son rattachement à l’aide, ni sa publication.",
        );
      } else {
        addUnique(
          toolLimitations,
          "Registre central R26 — attestation d’autorité, branche déclarative distincte et non authentifiée : cette pièce structurée ne constitue pas un recordid public. Le moteur n’en vérifie ni l’auteur, ni la référence, ni le contenu, ni le rattachement à l’aide, ni l’enregistrement effectif.",
        );
      }
    } else if (hasRequiredText(reference)) {
      addUnique(
        invalidIssues,
        `${label}, référence du registre central national : vider cette référence tant que le statut n’est pas « ENREGISTRÉ ».`,
      );
    }
  };

  validateCentralRegisterTrace(
    "Aide courante",
    currentLegalGrantConfirmed &&
      isSiteAidFrenchCentralRegisterRequired(
        currentLegalBasisResolution,
        input.aid.deMinimisMemberState ?? "",
        input.aid.legalGrantDate ?? "",
      ),
    currentLegalBasisResolution,
    input.aid.centralRegisterStatus,
    input.aid.centralRegisterReference,
  );
  input.aidRegister.forEach((entry, index) => {
    validateCentralRegisterTrace(
      `Registre, aide ${index + 1}`,
      isSiteAidFrenchCentralRegisterRequired(
        registerLegalBasisResolutions[index] ?? "unknown",
        entry.memberState ?? "",
        entry.legalGrantDate ?? "",
      ),
      registerLegalBasisResolutions[index] ?? "unknown",
      entry.centralRegisterStatus,
      entry.centralRegisterReference,
    );
  });

  const invoiceTotalExVat = quoteAmountsAndVatKnown
    ? derivedMoney(invoiceTotalExVatAccumulator, "Facture totale HT")
    : undefined;
  const invoiceVat = quoteAmountsAndVatKnown
    ? derivedMoney(invoiceVatAccumulator, "TVA facturée")
    : undefined;
  const invoiceTotalIncludingVat =
    invoiceTotalExVat !== undefined && invoiceVat !== undefined
      ? derivedMoney(invoiceTotalExVat + invoiceVat, "Facture totale TTC")
      : undefined;
  const deductibleVat =
    quoteAmountsAndVatKnown && quoteDeductibilityKnown
      ? derivedMoney(deductibleVatAccumulator, "TVA déductible")
      : undefined;
  const nonDeductibleVat =
    invoiceVat !== undefined && deductibleVat !== undefined
      ? derivedMoney(invoiceVat - deductibleVat, "TVA non déductible")
      : undefined;
  const eligibleSubtotalExVat =
    quoteAmountsAndVatKnown && quoteEligibilityKnown
      ? derivedMoney(
          eligibleSubtotalAccumulator,
          "Sous-total HT prouvé admissible",
        )
      : undefined;
  const theoreticalAidNonAcquired =
    financialCalculationBasisSupported &&
    eligibleSubtotalExVat !== undefined &&
    ratePercent !== undefined &&
    capAmount !== undefined
      ? derivedMoney(
          Math.min(eligibleSubtotalExVat * (ratePercent / 100), capAmount),
          "Aide théorique",
        )
      : undefined;
  const documentedProspectiveDeMinimisAidValue =
    input.aid.stage === "none" &&
    currentRegimeIsDeMinimis &&
    prospectiveDocumentedAidValueValid &&
    prospectiveAidValueInput !== undefined
      ? derivedMoney(
          prospectiveAidValueInput,
          "Valeur prospective de minimis documentée",
        )
      : undefined;
  const prospectiveDeMinimisAidValue =
    documentedProspectiveDeMinimisAidValue ??
    (input.aid.stage === "none" &&
    currentRegimeIsDeMinimis &&
    financialContributionSupported &&
    !prospectiveAidValuePairAttempted
      ? theoreticalAidNonAcquired
      : undefined);
  if (
    input.aid.stage === "none" &&
    currentRegimeIsDeMinimis &&
    instrumentKindRecognized &&
    instrumentKind !== "unknown" &&
    !financialContributionSupported &&
    !prospectiveAidValuePairAttempted
  ) {
    addUnique(
      missingEvidence,
      "Précontrôle prospectif de minimis avant notification : l’équivalent-subvention brut prospectif de cet instrument manque. Le moteur ne déduit jamais l’ESB du nominal d’un prêt, d’une garantie, d’un allègement ou d’un autre instrument ; faire renseigner l’ESB par l’autorité avant toute conclusion de cumul.",
    );
    addUnique(
      toolLimitations,
      "Précontrôle prospectif R26 — aucun ESB inventé : avant notification, le montant théorique d’une subvention peut servir de scénario brut non acquis. Pour tout autre instrument, aucun montant prospectif de minimis n’est créé sans ESB communiqué par l’autorité.",
    );
  }

  let approvedFinancialContributionConsistent =
    approvedFinancialContributionValid;
  let actualFinancialContributionConsistent = actualFinancialContributionValid;
  for (const [kind, label, amount, valid] of [
    [
      "approved",
      "Contribution financière approuvée",
      input.aid.approvedFinancialContributionAmount,
      approvedFinancialContributionValid,
    ],
    [
      "actual",
      "Paiement effectif de l’aide",
      input.aid.actualFinancialContributionAmount,
      actualFinancialContributionValid,
    ],
  ] as const) {
    let amountConsistent = valid;
    if (
      financialContributionSupported &&
      valid &&
      amount !== undefined &&
      amount > 0 &&
      capAmount !== undefined &&
      amount > capAmount
    ) {
      addUnique(invalidIssues, `${label} : il dépasse le plafond renseigné.`);
      amountConsistent = false;
    }
    if (
      financialContributionSupported &&
      valid &&
      amount !== undefined &&
      amount > 0 &&
      theoreticalAidNonAcquired !== undefined &&
      amount > theoreticalAidNonAcquired
    ) {
      addUnique(
        invalidIssues,
        `${label} : il dépasse l’aide théorique calculée sur les lignes prouvées.`,
      );
      amountConsistent = false;
    }
    if (
      financialContributionSupported &&
      (kind === "approved"
        ? input.aid.stage !== "none"
        : input.aid.stage === "received") &&
      isValidMoneyInput(amount) &&
      amount !== undefined &&
      amount > 0 &&
      invoiceTotalIncludingVat !== undefined &&
      amount > invoiceTotalIncludingVat
    ) {
      addUnique(
        invalidIssues,
        `${label} : le montant attribué à cette facture dépasse son total TTC connu.`,
      );
      amountConsistent = false;
    }
    if (kind === "approved") {
      approvedFinancialContributionConsistent =
        approvedFinancialContributionConsistent && amountConsistent;
    } else {
      actualFinancialContributionConsistent =
        actualFinancialContributionConsistent && amountConsistent;
    }
  }

  if (
    financialContributionSupported &&
    currentRegimeIsDeMinimis &&
    legalAidValueValid &&
    approvedFinancialContributionConsistent &&
    input.aid.legalAidValueAmount !== undefined &&
    input.aid.approvedFinancialContributionAmount !== undefined &&
    input.aid.approvedFinancialContributionAmount >
      input.aid.legalAidValueAmount
  ) {
    addUnique(
      invalidIssues,
      "Contribution financière approuvée : elle dépasse la valeur juridique brute ou l’équivalent-subvention brut déclaré pour cette aide.",
    );
    approvedFinancialContributionConsistent = false;
  }
  type RecognizedDeMinimisRegimeKind = Exclude<
    DeMinimisRegimeKind,
    "unknown-de-minimis"
  >;
  type CumulationObservationKind = RecognizedDeMinimisRegimeKind | "unresolved";
  type DeMinimisObservation = {
    sourceLabel: string;
    kind: CumulationObservationKind;
    resolution: SiteAidLegalBasisResolution;
    memberStateCode: EuMemberStateCode;
    memberStateName: string;
    singleUndertakingScope: string;
    singleUndertakingExactKey: string;
    singleUndertakingProximityKey: string;
    unicodeConfusableScriptProfile: string | undefined;
    unicodeMixedScriptReviewRequired: boolean;
    amount: number;
    legalGrantDate: string;
    isCurrentAid: boolean;
    isProspectiveCurrentAid: boolean;
    similarUndertakingKeysDistinct: SiteAidTriState;
    similarUndertakingKeysEvidence: string;
  };
  const deMinimisObservations: DeMinimisObservation[] = [];
  const isUnresolvedResolution = (
    resolution: SiteAidLegalBasisResolution,
  ): boolean =>
    resolution === "not-de-minimis-external-review" || resolution === "unknown";
  const validObservationGrantDate = (value: string): boolean =>
    isValidIsoDate(value) &&
    (!isValidIsoDate(input.profile.verificationDate) ||
      value.trim() <= input.profile.verificationDate.trim());
  const addUnresolvedPrecontrolWarning = (
    label: string,
    missingPrerequisites: string[],
  ): void => {
    if (missingPrerequisites.length === 0) return;
    addUnique(
      warnings,
      `${label} : précontrôle prudent du cumul non calculable tant que ${missingPrerequisites.join(
        ", ",
      )}. Aucun montant n’est inventé ni rattaché mécaniquement à un règlement de minimis.`,
    );
  };

  input.aidRegister.forEach((entry, index) => {
    const entryLabel = `Registre, aide ${index + 1}`;
    const resolution = registerLegalBasisResolutions[index] ?? "unknown";
    const resolvedKind = registerLegalBasisKinds[index] ?? "unknown-de-minimis";
    const kind: CumulationObservationKind =
      resolvedKind === "unknown-de-minimis" ? "unresolved" : resolvedKind;
    const unresolved = isUnresolvedResolution(resolution);
    const amountValid =
      entry.amount !== undefined && isValidMoneyInput(entry.amount);
    const grantDateValid = validObservationGrantDate(entry.legalGrantDate);
    const memberStateProvided = hasRequiredText(entry.memberState);
    const memberState = canonicalEuMemberState(entry.memberState);
    const undertakingExactKey = exactEntityGroupingKey(
      entry.singleUndertakingScope,
    );
    const undertakingProximityKey = entityGroupingProximityKey(
      entry.singleUndertakingScope,
    );
    const undertakingProvided =
      undertakingExactKey !== undefined &&
      undertakingProximityKey !== undefined;

    if (unresolved && !memberStateProvided) {
      addUnique(
        missingEvidence,
        `${entryLabel}, précontrôle prudent du cumul, État membre de l’autorité d’octroi : information manquante. Ne pas utiliser le siège du bénéficiaire.`,
      );
    }
    if (unresolved && memberStateProvided && !memberState) {
      addUnique(
        missingEvidence,
        `${entryLabel}, précontrôle prudent du cumul, État membre de l’autorité d’octroi : utiliser un nom français ou anglais usuel, ou le code ISO alpha-2 d’un des 27 États membres ; ce champ n’est pas le siège du bénéficiaire.`,
      );
    }
    if (unresolved && !undertakingProvided) {
      const keyIssue = hasRequiredText(entry.singleUndertakingScope)
        ? (entityGroupingKeyIssue(entry.singleUndertakingScope) ??
          "la clé déclarée est invalide")
        : undefined;
      addUnique(
        missingEvidence,
        keyIssue
          ? `${entryLabel}, précontrôle prudent du cumul, périmètre de l’entreprise unique : ${keyIssue}.`
          : `${entryLabel}, précontrôle prudent du cumul, périmètre de l’entreprise unique : information manquante.`,
      );
    }
    if (unresolved && entry.amount === undefined) {
      addUnique(
        missingEvidence,
        `${entryLabel}, précontrôle prudent du cumul, valeur juridique ou ESB : montant manquant.`,
      );
    }

    const unresolvedMissingPrerequisites = unresolved
      ? [
          !amountValid ? "un montant monétaire valide manque" : undefined,
          !grantDateValid
            ? "une date d’octroi juridique valide manque"
            : undefined,
          !memberState
            ? "un État membre de l’autorité d’octroi reconnu manque"
            : undefined,
          !undertakingProvided
            ? "le périmètre de l’entreprise unique manque"
            : undefined,
        ].filter((value): value is string => value !== undefined)
      : [];
    addUnresolvedPrecontrolWarning(entryLabel, unresolvedMissingPrerequisites);

    if (
      entry.amount === undefined ||
      !amountValid ||
      !grantDateValid ||
      !memberStateProvided ||
      !undertakingProvided ||
      undertakingExactKey === undefined ||
      undertakingProximityKey === undefined
    ) {
      return;
    }
    if (!memberState) {
      if (!unresolved) {
        addUnique(
          missingEvidence,
          `${entryLabel}, État membre de l’autorité d’octroi : utiliser un nom français ou anglais usuel, ou le code ISO alpha-2 d’un des 27 États membres ; ne pas utiliser le siège du bénéficiaire.`,
        );
        addUnique(
          warnings,
          `${entryLabel} : l’État membre de l’autorité d’octroi « ${safeText(
            entry.memberState,
          )} » n’est pas reconnu ; cette aide n’est pas regroupée pour éviter un faux cumul.`,
        );
      }
      return;
    }
    deMinimisObservations.push({
      sourceLabel: entryLabel,
      kind,
      resolution,
      memberStateCode: memberState.code,
      memberStateName: memberState.frenchName,
      singleUndertakingScope: entry.singleUndertakingScope,
      singleUndertakingExactKey: undertakingExactKey,
      singleUndertakingProximityKey: undertakingProximityKey,
      unicodeConfusableScriptProfile: entityGroupingConfusableScriptProfile(
        entry.singleUndertakingScope,
      ),
      unicodeMixedScriptReviewRequired:
        entityGroupingUsesMixedConfusableScripts(entry.singleUndertakingScope),
      amount: entry.amount,
      legalGrantDate: entry.legalGrantDate.trim(),
      isCurrentAid: false,
      isProspectiveCurrentAid: false,
      similarUndertakingKeysDistinct: isTriState(
        entry.similarUndertakingKeysDistinct,
      )
        ? entry.similarUndertakingKeysDistinct
        : "unknown",
      similarUndertakingKeysEvidence:
        entry.similarUndertakingKeysEvidence ?? "",
    });
  });

  let currentAidObservation: DeMinimisObservation | undefined;
  let prospectiveAidObservation: DeMinimisObservation | undefined;
  const currentMemberState = canonicalEuMemberState(
    input.aid.deMinimisMemberState ?? "",
  );
  const currentRecognizedKind: RecognizedDeMinimisRegimeKind | undefined =
    currentDeMinimisRegimeKind === "general" ||
    currentDeMinimisRegimeKind === "agriculture" ||
    currentDeMinimisRegimeKind === "fishery" ||
    currentDeMinimisRegimeKind === "sgei"
      ? currentDeMinimisRegimeKind
      : undefined;
  const currentRegimeRecognized = currentRecognizedKind !== undefined;
  const currentResolutionUnresolved = isUnresolvedResolution(
    currentLegalBasisResolution,
  );
  const frenchOverseasTerritorialReview =
    requiresFrenchOverseasTerritorialReview(input.profile.territory ?? "");
  if (currentRegimeRecognized && euTerritorialStatusValid) {
    const territorialEvidence =
      input.profile.deMinimisEuTerritorialEvidence ?? "";
    const territorialEvidenceReferenceUsable =
      hasIdentifiableEuTerritorialEvidence(territorialEvidence);
    const territorialEvidencePolarity =
      euTerritorialEvidencePolarity(territorialEvidence);
    const territorialEvidenceDate = (
      input.profile.deMinimisEuTerritorialEvidenceDate ?? ""
    ).trim();
    let territorialEvidenceDateUsable = false;

    if (euTerritorialStatus !== "unknown") {
      if (!hasRequiredText(territorialEvidenceDate)) {
        addUnique(
          missingEvidence,
          "Aide courante, date de la preuve de qualification territoriale UE : information structurée manquante.",
        );
      } else if (!isValidIsoDate(territorialEvidenceDate)) {
        addUnique(
          invalidIssues,
          "Aide courante, date de la preuve de qualification territoriale UE : date ISO invalide.",
        );
      } else if (
        isValidIsoDate(input.profile.verificationDate) &&
        territorialEvidenceDate > input.profile.verificationDate.trim()
      ) {
        addUnique(
          invalidIssues,
          "Aide courante, date de la preuve de qualification territoriale UE : elle ne peut pas être postérieure à la date de vérification.",
        );
      } else if (
        isValidIsoDate(analysisDate) &&
        territorialEvidenceDate > analysisDate
      ) {
        addUnique(
          invalidIssues,
          `Aide courante, date de la preuve de qualification territoriale UE : elle ne peut pas être postérieure à la date locale d’analyse (${analysisDate}).`,
        );
      } else {
        territorialEvidenceDateUsable = true;
      }
    }

    addUnique(
      toolLimitations,
      "Territorialité UE R28 — garde prudente : le nom libre du territoire et l'État membre de l'autorité ne prouvent jamais l'applicabilité territoriale du droit de l'Union. Le statut structuré, la référence et la date propre de sa preuve restent déclaratifs, non authentifiés et doivent être confirmés par l'autorité compétente ; les RUP, PTOM et collectivités françaises d'outre-mer appellent une attention particulière.",
    );
    if (euTerritorialStatus === "unknown") {
      addUnique(
        missingEvidence,
        frenchOverseasTerritorialReview
          ? `Aide courante, qualification territoriale UE du précontrôle de minimis : le territoire « ${safeText(
              input.profile.territory,
            )} » exige une qualification explicite RUP, PTOM ou autre champ territorial applicable, avec sa preuve. Le nom libre du territoire et l'État membre France ne permettent aucun verdict favorable.`
          : "Aide courante, qualification territoriale UE du précontrôle de minimis : confirmer explicitement l'applicabilité territoriale du droit de l'Union et fournir la preuve correspondante. Le nom libre du territoire et l'État membre de l'autorité ne suffisent pas.",
      );
    } else if (euTerritorialStatus === "external-review-required") {
      addUnique(
        missingEvidence,
        `Aide courante, qualification territoriale UE du précontrôle de minimis : revue externe déclarée requise pour « ${safeText(
          input.profile.territory,
        )} ». Faire confirmer par l'autorité le champ territorial applicable avant tout verdict favorable.`,
      );
      if (!territorialEvidenceReferenceUsable) {
        addUnique(
          missingEvidence,
          "Aide courante, preuve de qualification territoriale UE : fournir une analyse, un avis, une attestation ou une réponse identifiable avec l’autorité ou la source publique et une référence distincte. Sa date propre est contrôlée dans le champ structuré séparé. Le moteur ne l’authentifie pas.",
        );
      }
    } else if (territorialEvidencePolarity === "denied") {
      addUnique(
        invalidIssues,
        `Aide courante, cohérence de la qualification territoriale UE : le statut « droit de l'Union applicable » contredit une preuve qui indique que ce droit ne s’applique pas ou que le territoire est hors de son champ. Corriger le statut structuré ou faire relire la pièce ; aucun verdict favorable n’est produit.`,
      );
    } else if (territorialEvidencePolarity === "uncertain") {
      addUnique(
        missingEvidence,
        `Aide courante, preuve de qualification territoriale UE : la pièce laisse l’applicabilité du droit de l’Union incertaine. Faire établir explicitement le champ territorial applicable avant tout verdict favorable.`,
      );
    } else if (
      !territorialEvidenceReferenceUsable ||
      !territorialEvidenceDateUsable
    ) {
      addUnique(
        missingEvidence,
        `Aide courante, preuve de qualification territoriale UE : le statut « droit de l'Union applicable » déclaré pour « ${safeText(
          input.profile.territory,
        )} » doit être étayé par une analyse, un avis, une attestation ou une réponse identifiable avec l’autorité ou la source publique, une référence distincte et une date structurée recevable. Ce contrôle est formel et le moteur n’authentifie pas la pièce.`,
      );
    } else if (territorialEvidencePolarity !== "affirmed") {
      addUnique(
        missingEvidence,
        `Aide courante, preuve de qualification territoriale UE : la pièce est formellement identifiable mais n’affirme pas explicitement que le droit de l’Union s’applique au territoire concerné. Ajouter la conclusion explicite de l’autorité ou faire relire la pièce ; aucun verdict favorable n’est produit.`,
      );
    } else if (frenchOverseasTerritorialReview) {
      addUnique(
        warnings,
        `Qualification territoriale UE déclarée applicable pour « ${safeText(
          input.profile.territory,
        )} » : la preuve saisie n'est pas authentifiée par le moteur et doit être confirmée par l'autorité compétente.`,
      );
    }
  }
  const currentObservationKind: CumulationObservationKind =
    currentRecognizedKind ?? "unresolved";
  const currentMemberStateProvided = hasRequiredText(
    input.aid.deMinimisMemberState ?? "",
  );
  const currentUndertakingProvided = hasRequiredText(
    input.aid.deMinimisSingleUndertakingScope ?? "",
  );
  const currentUndertakingExactKey = exactEntityGroupingKey(
    input.aid.deMinimisSingleUndertakingScope ?? "",
  );
  const currentUndertakingProximityKey = entityGroupingProximityKey(
    input.aid.deMinimisSingleUndertakingScope ?? "",
  );
  const currentUndertakingValid =
    currentUndertakingExactKey !== undefined &&
    currentUndertakingProximityKey !== undefined;
  const currentAidAmountValid =
    legalAidValueValid &&
    input.aid.legalAidValueAmount !== undefined &&
    isValidMoneyInput(input.aid.legalAidValueAmount);
  if (
    currentRegimeRecognized &&
    currentMemberStateProvided &&
    !currentMemberState
  ) {
    addUnique(
      missingEvidence,
      "Aide courante, État membre de l’autorité d’octroi : utiliser un nom français ou anglais usuel, ou le code ISO alpha-2 d’un des 27 États membres ; ne pas utiliser le siège du bénéficiaire.",
    );
    addUnique(
      warnings,
      `Aide courante : l’État membre de l’autorité d’octroi « ${safeText(
        input.aid.deMinimisMemberState,
      )} » n’est pas reconnu ; aucun cumul mécanique n’est produit.`,
    );
  }
  if (
    currentResolutionUnresolved &&
    input.aid.stage !== "none" &&
    !currentMemberStateProvided
  ) {
    addUnique(
      missingEvidence,
      "Aide courante, précontrôle prudent du cumul, État membre de l’autorité d’octroi : information manquante. Ne pas utiliser le siège du bénéficiaire.",
    );
  }
  if (
    currentResolutionUnresolved &&
    input.aid.stage !== "none" &&
    currentMemberStateProvided &&
    !currentMemberState
  ) {
    addUnique(
      missingEvidence,
      "Aide courante, précontrôle prudent du cumul, État membre de l’autorité d’octroi : utiliser un nom français ou anglais usuel, ou le code ISO alpha-2 d’un des 27 États membres ; ce champ n’est pas le siège du bénéficiaire.",
    );
  }
  if (
    currentResolutionUnresolved &&
    input.aid.stage !== "none" &&
    !currentUndertakingValid
  ) {
    const keyIssue = currentUndertakingProvided
      ? (entityGroupingKeyIssue(
          input.aid.deMinimisSingleUndertakingScope ?? "",
        ) ?? "la clé déclarée est invalide")
      : undefined;
    addUnique(
      missingEvidence,
      keyIssue
        ? `Aide courante, précontrôle prudent du cumul, périmètre de l’entreprise unique : ${keyIssue}.`
        : "Aide courante, précontrôle prudent du cumul, périmètre de l’entreprise unique : information manquante.",
    );
  }
  if (
    currentResolutionUnresolved &&
    input.aid.stage !== "none" &&
    input.aid.legalAidValueAmount === undefined
  ) {
    addUnique(
      missingEvidence,
      "Aide courante, précontrôle prudent du cumul, valeur juridique ou ESB : montant manquant.",
    );
  }
  if (currentResolutionUnresolved && input.aid.stage !== "none") {
    addUnresolvedPrecontrolWarning(
      "Aide courante",
      [
        !currentAidAmountValid
          ? "un montant monétaire valide manque"
          : undefined,
        input.aid.legalGrantStatus !== "yes" || !currentLegalGrantDateValid
          ? "un octroi juridique et sa date valide manquent"
          : undefined,
        !currentMemberState
          ? "un État membre de l’autorité d’octroi reconnu manque"
          : undefined,
        !currentUndertakingValid
          ? "le périmètre de l’entreprise unique manque"
          : undefined,
      ].filter((value): value is string => value !== undefined),
    );
  }
  if (
    (currentRegimeRecognized || currentResolutionUnresolved) &&
    input.aid.legalGrantStatus === "yes" &&
    currentLegalGrantDateValid &&
    currentAidAmountValid &&
    input.aid.legalAidValueAmount !== undefined &&
    currentMemberState !== undefined &&
    currentUndertakingValid &&
    currentUndertakingExactKey !== undefined &&
    currentUndertakingProximityKey !== undefined
  ) {
    currentAidObservation = {
      sourceLabel: "Aide courante",
      kind: currentObservationKind,
      resolution: currentLegalBasisResolution,
      memberStateCode: currentMemberState.code,
      memberStateName: currentMemberState.frenchName,
      singleUndertakingScope: input.aid.deMinimisSingleUndertakingScope,
      singleUndertakingExactKey: currentUndertakingExactKey,
      singleUndertakingProximityKey: currentUndertakingProximityKey,
      unicodeConfusableScriptProfile: entityGroupingConfusableScriptProfile(
        input.aid.deMinimisSingleUndertakingScope,
      ),
      unicodeMixedScriptReviewRequired:
        entityGroupingUsesMixedConfusableScripts(
          input.aid.deMinimisSingleUndertakingScope,
        ),
      amount: input.aid.legalAidValueAmount,
      legalGrantDate: input.aid.legalGrantDate.trim(),
      isCurrentAid: true,
      isProspectiveCurrentAid: false,
      similarUndertakingKeysDistinct: isTriState(
        input.aid.similarUndertakingKeysDistinct,
      )
        ? input.aid.similarUndertakingKeysDistinct
        : "unknown",
      similarUndertakingKeysEvidence:
        input.aid.similarUndertakingKeysEvidence ?? "",
    };
    deMinimisObservations.push(currentAidObservation);
  }
  if (
    currentAidObservation === undefined &&
    input.aid.stage === "none" &&
    currentRegimeRecognized &&
    prospectiveDeMinimisAidValue !== undefined &&
    isValidMoneyInput(prospectiveDeMinimisAidValue) &&
    isValidIsoDate(input.profile.verificationDate) &&
    currentMemberState !== undefined &&
    currentUndertakingValid &&
    currentUndertakingExactKey !== undefined &&
    currentUndertakingProximityKey !== undefined
  ) {
    prospectiveAidObservation = {
      sourceLabel:
        documentedProspectiveDeMinimisAidValue !== undefined
          ? "Aide courante prospective documentée avant octroi"
          : "Aide courante prospective avant octroi",
      kind: currentObservationKind,
      resolution: currentLegalBasisResolution,
      memberStateCode: currentMemberState.code,
      memberStateName: currentMemberState.frenchName,
      singleUndertakingScope: input.aid.deMinimisSingleUndertakingScope,
      singleUndertakingExactKey: currentUndertakingExactKey,
      singleUndertakingProximityKey: currentUndertakingProximityKey,
      unicodeConfusableScriptProfile: entityGroupingConfusableScriptProfile(
        input.aid.deMinimisSingleUndertakingScope,
      ),
      unicodeMixedScriptReviewRequired:
        entityGroupingUsesMixedConfusableScripts(
          input.aid.deMinimisSingleUndertakingScope,
        ),
      amount: prospectiveDeMinimisAidValue,
      legalGrantDate: input.profile.verificationDate.trim(),
      isCurrentAid: false,
      isProspectiveCurrentAid: true,
      similarUndertakingKeysDistinct: isTriState(
        input.aid.similarUndertakingKeysDistinct,
      )
        ? input.aid.similarUndertakingKeysDistinct
        : "unknown",
      similarUndertakingKeysEvidence:
        input.aid.similarUndertakingKeysEvidence ?? "",
    };
    if (documentedProspectiveDeMinimisAidValue === undefined) {
      addUnique(
        toolLimitations,
        "Précontrôle prospectif R26 — subvention non acquise : avant notification, le moteur utilise uniquement le montant théorique brut calculé de la subvention comme scénario de minimis. Ce montant sert au cumul prospectif, reste budgété à 0 €, n’est pas un octroi et doit être remplacé par le montant brut ou l’ESB communiqué par l’autorité dès qu’il existe.",
      );
    }
  }

  const observationGroupingKey = (observation: DeMinimisObservation): string =>
    [observation.memberStateCode, observation.singleUndertakingExactKey].join(
      "|",
    );
  const observationProximityGroupingKey = (
    observation: DeMinimisObservation,
  ): string =>
    [
      observation.memberStateCode,
      observation.singleUndertakingProximityKey,
    ].join("|");
  const decisionAidObservation =
    currentAidObservation ?? prospectiveAidObservation;
  const currentAidGroupingKey = decisionAidObservation
    ? observationGroupingKey(decisionAidObservation)
    : undefined;
  const actualCurrentAidGroupingKey = currentAidObservation
    ? observationGroupingKey(currentAidObservation)
    : undefined;
  const prospectiveAidGroupingKey = prospectiveAidObservation
    ? observationGroupingKey(prospectiveAidObservation)
    : undefined;
  const verificationAnchorDate = isValidIsoDate(input.profile.verificationDate)
    ? input.profile.verificationDate.trim()
    : undefined;
  const currentCumulationAnchorDate = decisionAidObservation?.legalGrantDate;
  const currentGroupHasFisheryObservation =
    currentAidGroupingKey !== undefined &&
    (decisionAidObservation?.kind === "fishery" ||
      deMinimisObservations.some(
        (observation) =>
          observation.kind === "fishery" &&
          observationGroupingKey(observation) === currentAidGroupingKey,
      ));
  const fisheryFiscalYearStartValue =
    input.aid.deMinimisFisheryFiscalYearStartDate ?? "";
  const fisheryPreviousFiscalYearStartValue =
    input.aid.deMinimisFisheryPreviousFiscalYearStartDate ?? "";
  const fisherySecondPreviousFiscalYearStartValue =
    input.aid.deMinimisFisherySecondPreviousFiscalYearStartDate ?? "";
  const fisheryCurrentFiscalYearEndValue =
    input.aid.deMinimisFisheryCurrentFiscalYearEndDate ?? "";
  const fisheryFiscalPeriodBounds = [
    {
      value: fisheryFiscalYearStartValue,
      label:
        "début de l’exercice fiscal courant contenant l’ancre du précontrôle pêche",
    },
    {
      value: fisheryPreviousFiscalYearStartValue,
      label:
        "début de l’exercice fiscal précédant l’exercice courant du précontrôle pêche",
    },
    {
      value: fisherySecondPreviousFiscalYearStartValue,
      label:
        "début du deuxième exercice fiscal précédant l’exercice courant du précontrôle pêche",
    },
    {
      value: fisheryCurrentFiscalYearEndValue,
      label:
        "fin de l’exercice fiscal courant contenant l’ancre du précontrôle pêche",
    },
  ] as const;
  const anyFisheryFiscalPeriodBoundProvided = fisheryFiscalPeriodBounds.some(
    ({ value }) => hasRequiredText(value),
  );
  const allFisheryFiscalPeriodBoundsProvided = fisheryFiscalPeriodBounds.every(
    ({ value }) => hasRequiredText(value),
  );
  let currentFisheryFiscalWindowStart: string | undefined;
  if (
    currentGroupHasFisheryObservation &&
    currentCumulationAnchorDate !== undefined
  ) {
    addUnique(
      toolLimitations,
      "Période pêche R27 — exercice fiscal courant et deux précédents : le règlement 717/2014 n’est pas contrôlé avec une fenêtre calendaire glissante de trois ans. Les trois débuts d’exercice réels et la fin inclusive de l’exercice courant déclarés restent non authentifiés ; aucune borne n’est dérivée par anniversaire. Sans ce quartet complet et cohérent, tous les octrois historiques pêche restent dans une tranche possible incertaine ; seuls l’aide courante à l’ancre et les octrois datés exactement à l’ancre sont assurés. Cette tranche incertaine ne peut jamais déclencher seule une exclusion ni permettre un verdict faussement favorable.",
    );
    for (const { value, label } of fisheryFiscalPeriodBounds) {
      if (hasRequiredText(value) && !isValidIsoDate(value)) {
        addUnique(
          invalidIssues,
          `Aide courante, ${label} : date ISO invalide.`,
        );
      }
    }
    if (!allFisheryFiscalPeriodBoundsProvided) {
      addUnique(
        missingEvidence,
        "Aide courante, période fiscale pêche : renseigner ensemble les débuts ISO réels de l’exercice courant et des deux exercices précédents, ainsi que la fin ISO inclusive de l’exercice courant. Sans ce quartet, aucune borne exacte n’est retenue, aucune date manquante n’est extrapolée et le verdict reste incomplet sauf exclusion fondée sur le seul sous-total assuré.",
      );
    } else if (
      fisheryFiscalPeriodBounds.every(({ value }) => isValidIsoDate(value))
    ) {
      const currentStart = fisheryFiscalYearStartValue.trim();
      const previousStart = fisheryPreviousFiscalYearStartValue.trim();
      const secondPreviousStart =
        fisherySecondPreviousFiscalYearStartValue.trim();
      const currentEnd = fisheryCurrentFiscalYearEndValue.trim();
      if (!(
        secondPreviousStart < previousStart && previousStart < currentStart
      )) {
        addUnique(
          invalidIssues,
          `Aide courante, période fiscale pêche : les débuts réels doivent être strictement ordonnés deuxième précédent < précédent < courant ; valeurs reçues ${secondPreviousStart}, ${previousStart}, ${currentStart}.`,
        );
      } else if (
        currentStart > currentCumulationAnchorDate ||
        currentCumulationAnchorDate > currentEnd
      ) {
        addUnique(
          invalidIssues,
          `Aide courante, exercice fiscal courant du précontrôle pêche : l’intervalle déclaré du ${currentStart} au ${currentEnd} ne contient pas l’ancre ${currentCumulationAnchorDate}. Respecter début courant ≤ ancre ≤ fin courante.`,
        );
      } else {
        currentFisheryFiscalWindowStart = secondPreviousStart;
      }
    }
  } else if (anyFisheryFiscalPeriodBoundProvided) {
    addUnique(
      warnings,
      "Aide courante, bornes d’exercice fiscal pêche : champs hors comparaison ignorés, faute de ligne pêche/aquaculture dans le groupe courant.",
    );
  }

  type DeMinimisWindowMembership =
    "included-assured" | "included-uncertain" | "excluded";
  const deMinimisWindowMembership = (
    observation: DeMinimisObservation,
    anchorDate: string,
  ): DeMinimisWindowMembership => {
    if (observation.legalGrantDate > anchorDate) return "excluded";
    if (observation.kind !== "fishery") {
      const windowStart = isoDateYearsBefore(anchorDate, 3);
      return windowStart !== undefined &&
        observation.legalGrantDate >= windowStart
        ? "included-assured"
        : "excluded";
    }

    const belongsToCurrentGroup =
      currentAidGroupingKey !== undefined &&
      observationGroupingKey(observation) === currentAidGroupingKey;
    if (
      belongsToCurrentGroup &&
      currentFisheryFiscalWindowStart !== undefined
    ) {
      return observation.legalGrantDate >= currentFisheryFiscalWindowStart
        ? "included-assured"
        : "excluded";
    }
    if (observation.isCurrentAid || observation.legalGrantDate === anchorDate) {
      return "included-assured";
    }
    return "included-uncertain";
  };
  const isInRelevantDeMinimisWindow = (
    observation: DeMinimisObservation,
    anchorDate: string,
  ): boolean =>
    deMinimisWindowMembership(observation, anchorDate) !== "excluded";

  /*
   * Contre-signal historique prudent : les nouveaux champs structurés portent
   * seulement sur la relation de chaque ligne à l’aide courante. Entre deux
   * lignes antérieures, une identité exacte ou proche déclenche donc une revue,
   * sans conclure juridiquement qu’il s’agit du même service. L’absence de ce
   * signal ne vaut jamais preuve de services distincts.
   */
  for (
    let firstIndex = 0;
    firstIndex < input.aidRegister.length;
    firstIndex += 1
  ) {
    for (
      let secondIndex = firstIndex + 1;
      secondIndex < input.aidRegister.length;
      secondIndex += 1
    ) {
      const first = input.aidRegister[firstIndex];
      const second = input.aidRegister[secondIndex];
      if (!first || !second) continue;
      if (
        (registerLegalBasisResolutions[firstIndex] ?? "unknown") !==
          "de-minimis-sgei" ||
        (registerLegalBasisResolutions[secondIndex] ?? "unknown") !==
          "de-minimis-sgei"
      ) {
        continue;
      }
      const firstMemberState = canonicalEuMemberState(first.memberState ?? "");
      const secondMemberState = canonicalEuMemberState(
        second.memberState ?? "",
      );
      const firstUndertakingKey = exactEntityGroupingKey(
        first.singleUndertakingScope ?? "",
      );
      const secondUndertakingKey = exactEntityGroupingKey(
        second.singleUndertakingScope ?? "",
      );
      if (
        firstUndertakingKey === undefined ||
        secondUndertakingKey === undefined ||
        firstUndertakingKey !== secondUndertakingKey
      ) {
        continue;
      }
      const firstServiceExactKey = exactEntityGroupingKey(
        first.sgeiServiceIdentity ?? "",
      );
      const secondServiceExactKey = exactEntityGroupingKey(
        second.sgeiServiceIdentity ?? "",
      );
      const firstServiceProximityKey = entityGroupingProximityKey(
        first.sgeiServiceIdentity ?? "",
      );
      const secondServiceProximityKey = entityGroupingProximityKey(
        second.sgeiServiceIdentity ?? "",
      );
      const exactIdentitySignal =
        firstServiceExactKey !== undefined &&
        secondServiceExactKey !== undefined &&
        firstServiceExactKey === secondServiceExactKey;
      const closeIdentitySignal =
        !exactIdentitySignal &&
        firstServiceProximityKey !== undefined &&
        secondServiceProximityKey !== undefined &&
        firstServiceProximityKey === secondServiceProximityKey;
      if (!exactIdentitySignal && !closeIdentitySignal) continue;

      addUnique(
        toolLimitations,
        "Relations entre lignes SIEG historiques R24 : faute de champ structuré pair à pair, le moteur déclenche une revue lorsque deux identités déclarées sont exactes ou textuellement proches pour la même entreprise unique exacte, sans filtre d’État membre ni fenêtre triennale. Ce contrôle transfrontalier de l’article 5(2) reste distinct du calcul des plafonds par État membre. Le moteur n’authentifie pas les services ; l’absence de rapprochement lexical ne prouve jamais leur distinction.",
      );
      const firstMemberStateLabel = firstMemberState
        ? `${firstMemberState.frenchName} (${firstMemberState.code})`
        : `État déclaré « ${visibleEntityGroupingText(first.memberState ?? "")} »`;
      const secondMemberStateLabel = secondMemberState
        ? `${secondMemberState.frenchName} (${secondMemberState.code})`
        : `État déclaré « ${visibleEntityGroupingText(second.memberState ?? "")} »`;
      const grantingStateContext =
        firstMemberState?.code === secondMemberState?.code
          ? `dans l’État membre d’octroi ${firstMemberStateLabel}`
          : `entre les États membres d’octroi ${firstMemberStateLabel} et ${secondMemberStateLabel}`;
      const context = `Registre, aide ${firstIndex + 1} et Registre, aide ${
        secondIndex + 1
      }, ${grantingStateContext}, pour l’entreprise unique « ${visibleEntityGroupingText(
        first.singleUndertakingScope,
      )} »`;
      addUnique(
        missingEvidence,
        exactIdentitySignal
          ? `${context}, revue historique SIEG : les deux lignes portent une identité de service exactement identique « ${visibleEntityGroupingText(
              first.sgeiServiceIdentity ?? "",
            )} ». Faire qualifier leur relation au titre de l’article 5(2) par l’autorité ; l’identité textuelle est un signal, pas une authentification du même service.`
          : `${context}, revue historique SIEG : les identités « ${visibleEntityGroupingText(
              first.sgeiServiceIdentity ?? "",
            )} » et « ${visibleEntityGroupingText(
              second.sgeiServiceIdentity ?? "",
            )} » sont textuellement proches. Faire qualifier leur relation au titre de l’article 5(2) par l’autorité ; aucun verdict favorable n’est produit sur ce seul rapprochement.`,
      );
      addUnique(
        warnings,
        `Rapprochement interligne SIEG historique suspendu par prudence : ${context}. Le contrôle n’est soumis à aucune fenêtre triennale ; les déclarations séparées d’absence d’autre compensation ne suffisent pas à lever ce signal.`,
      );
      registerKnown = false;
    }
  }

  const allObservationGroupingKeys = new Set(
    deMinimisObservations.map(observationGroupingKey),
  );
  const ambiguousObservationGroupingKeys = new Set<string>();
  const processedAmbiguityWindows = new Set<string>();
  for (const targetGroupingKey of allObservationGroupingKeys) {
    const targetObservation = deMinimisObservations.find(
      (observation) =>
        observationGroupingKey(observation) === targetGroupingKey,
    );
    if (!targetObservation) continue;
    const usesDecisionAidAnchor =
      currentAidGroupingKey !== undefined &&
      targetGroupingKey === currentAidGroupingKey;
    const anchorDate = usesDecisionAidAnchor
      ? decisionAidObservation?.legalGrantDate
      : verificationAnchorDate;
    if (anchorDate === undefined) continue;
    const targetIsInWindow = deMinimisObservations.some(
      (observation) =>
        observationGroupingKey(observation) === targetGroupingKey &&
        isInRelevantDeMinimisWindow(observation, anchorDate),
    );
    if (!targetIsInWindow) continue;

    const sameMemberStateWindowObservations = deMinimisObservations.filter(
      (observation) =>
        observation.memberStateCode === targetObservation.memberStateCode &&
        isInRelevantDeMinimisWindow(observation, anchorDate),
    );
    const scriptProfileByExactKey = new Map<string, string>();
    for (const observation of sameMemberStateWindowObservations) {
      if (
        observation.unicodeConfusableScriptProfile !== undefined &&
        !scriptProfileByExactKey.has(observation.singleUndertakingExactKey)
      ) {
        scriptProfileByExactKey.set(
          observation.singleUndertakingExactKey,
          observation.unicodeConfusableScriptProfile,
        );
      }
    }
    const distinctScriptProfiles = new Set(scriptProfileByExactKey.values());
    const usesInterscriptBarrier =
      targetObservation.unicodeConfusableScriptProfile !== undefined &&
      scriptProfileByExactKey.size >= 2 &&
      distinctScriptProfiles.size >= 2;
    const targetProximityKey =
      observationProximityGroupingKey(targetObservation);
    const relevantObservations = usesInterscriptBarrier
      ? sameMemberStateWindowObservations.filter(
          (observation) =>
            observation.unicodeConfusableScriptProfile !== undefined,
        )
      : deMinimisObservations.filter(
          (observation) =>
            observationProximityGroupingKey(observation) ===
              targetProximityKey &&
            isInRelevantDeMinimisWindow(observation, anchorDate),
        );
    const exactScopes = new Map<string, string>();
    for (const observation of relevantObservations) {
      if (!exactScopes.has(observation.singleUndertakingExactKey)) {
        exactScopes.set(
          observation.singleUndertakingExactKey,
          observation.singleUndertakingScope,
        );
      }
    }
    const singleMixedScriptIdentity =
      exactScopes.size === 1 &&
      relevantObservations.some(
        (observation) => observation.unicodeMixedScriptReviewRequired,
      );
    if (exactScopes.size < 2 && !singleMixedScriptIdentity) continue;
    addUnique(
      toolLimitations,
      "Identité d’entreprise unique : le contrôle Unicode combine une barrière conservatrice entre profils de scripts Latin/grec/cyrillique, une table bornée de confusables Latin/grec/cyrillique et un contrôle du mélange de ces scripts. Cette détection est incomplète, ne fusionne jamais les clés exactes, n’implémente pas intégralement Unicode UTS #39 et n’authentifie aucune identité.",
    );

    const allDistinctDeclarationsDocumented = relevantObservations.every(
      (observation) =>
        observation.similarUndertakingKeysDistinct === "yes" &&
        hasRequiredText(observation.similarUndertakingKeysEvidence),
    );
    if (!allDistinctDeclarationsDocumented) {
      for (const observation of relevantObservations) {
        ambiguousObservationGroupingKeys.add(
          observationGroupingKey(observation),
        );
      }
    }

    const ambiguityWindowKey = usesInterscriptBarrier
      ? `scripts|${targetObservation.memberStateCode}|${anchorDate}`
      : `${targetProximityKey}|${anchorDate}`;
    if (processedAmbiguityWindows.has(ambiguityWindowKey)) continue;
    processedAmbiguityWindows.add(ambiguityWindowKey);

    const declaredScopes = [...exactScopes.values()].map(
      (scope) => `« ${visibleEntityGroupingText(scope)} »`,
    );
    const declaredScriptProfiles = [...distinctScriptProfiles].map(
      entityGroupingConfusableScriptProfileLabel,
    );
    const ambiguityContext = usesInterscriptBarrier
      ? `pour l’État membre de l’autorité d’octroi ${targetObservation.memberStateName} (${targetObservation.memberStateCode}), entre les profils de scripts ${declaredScriptProfiles.join(
          ", ",
        )} portés par les clés déclarées ${declaredScopes.join(
          " et ",
        )}, dans la fenêtre de trois ans ancrée au ${anchorDate}`
      : singleMixedScriptIdentity
        ? `pour l’État membre de l’autorité d’octroi ${targetObservation.memberStateName} (${targetObservation.memberStateCode}), sur la clé déclarée ${declaredScopes[0]} qui mélange des scripts Latin, grec ou cyrillique visuellement confusables, dans la fenêtre de trois ans ancrée au ${anchorDate}`
        : `pour l’État membre de l’autorité d’octroi ${targetObservation.memberStateName} (${targetObservation.memberStateCode}), entre les clés déclarées ${declaredScopes.join(
            " et ",
          )}, dans la fenêtre de trois ans ancrée au ${anchorDate}`;
    if (allDistinctDeclarationsDocumented) {
      addUnique(
        warnings,
        usesInterscriptBarrier
          ? `Précontrôle prudent du cumul, clés interscripts déclarées distinctes ${ambiguityContext} : les groupes exacts restent séparés et leurs totaux sont calculés. La déclaration et les preuves saisies ne sont pas authentifiées par l’outil ; elles doivent être vérifiées par l’autorité compétente.`
          : singleMixedScriptIdentity
            ? `Précontrôle prudent du cumul, graphie Unicode déclarée vérifiée ${ambiguityContext} : la clé exacte est conservée et son total est calculé. La déclaration et les preuves saisies ne sont pas authentifiées par l’outil ; elles doivent être vérifiées par l’autorité compétente.`
            : `Précontrôle prudent du cumul, clés proches déclarées distinctes ${ambiguityContext} : les groupes exacts restent séparés et leurs totaux sont calculés. La déclaration et les preuves saisies ne sont pas authentifiées par l’outil ; elles doivent être vérifiées par l’autorité compétente.`,
      );
      continue;
    }

    for (const observation of relevantObservations) {
      const distinctionLabel = singleMixedScriptIdentity
        ? `${observation.sourceLabel}, contrôle de graphie Unicode`
        : `${observation.sourceLabel}, distinction des clés proches`;
      if (observation.similarUndertakingKeysDistinct === "unknown") {
        addUnique(
          missingEvidence,
          usesInterscriptBarrier
            ? `${distinctionLabel} : statut à confirmer — indiquer si les clés de profils de scripts distincts désignent des entreprises uniques explicitement distinctes.`
            : singleMixedScriptIdentity
              ? `${distinctionLabel} : statut à confirmer — vérifier la graphie à scripts mélangés et confirmer l’identité exacte déclarée.`
              : `${distinctionLabel} : statut à confirmer — indiquer si les clés proches désignent des entreprises uniques explicitement distinctes.`,
        );
      } else if (observation.similarUndertakingKeysDistinct === "no") {
        addUnique(
          missingEvidence,
          singleMixedScriptIdentity
            ? `${distinctionLabel} : statut « NON » — ressaisir une clé exacte dans une graphie cohérente avant tout calcul.`
            : `${distinctionLabel} : statut « NON » — recopier exactement la même clé si les observations désignent la même entreprise unique.`,
        );
      } else if (!hasRequiredText(observation.similarUndertakingKeysEvidence)) {
        addUnique(
          missingEvidence,
          usesInterscriptBarrier
            ? `${distinctionLabel} : preuve manquante — décrire la preuve vérifiée permettant de confirmer que les clés interscripts désignent des entreprises uniques distinctes.`
            : singleMixedScriptIdentity
              ? `${distinctionLabel} : preuve manquante — décrire la source vérifiée confirmant la graphie Unicode et l’identité exacte déclarées.`
              : `${distinctionLabel} : preuve manquante — décrire la preuve vérifiée permettant de confirmer que les clés proches désignent des entreprises uniques distinctes.`,
        );
      }
    }
    addUnique(
      warnings,
      usesInterscriptBarrier
        ? `Précontrôle prudent du cumul bloqué, entreprise unique interscripts ambiguë ${ambiguityContext} : ces clés exactes de profils de scripts distincts ne sont pas fusionnées et aucun total n’est produit pour les groupes concernés. Recopier exactement la même clé si elles désignent la même entreprise unique, ou confirmer séparément chaque clé distincte avec une preuve vérifiable.`
        : singleMixedScriptIdentity
          ? `Précontrôle prudent du cumul bloqué, graphie Unicode ambiguë ${ambiguityContext} : la clé n’est ni normalisée ni fusionnée et aucun total n’est produit pour le groupe concerné. Ressaisir une graphie cohérente, ou confirmer l’identité exacte déclarée avec une preuve vérifiable.`
          : `Précontrôle prudent du cumul bloqué, entreprise unique ambiguë ${ambiguityContext} : ces clés proches mais non identiques ne sont pas fusionnées et aucun total n’est produit pour les groupes concernés. Recopier exactement la même clé si elles désignent la même entreprise unique, ou confirmer séparément chaque clé distincte avec une preuve vérifiable.`,
    );
  }

  type DeMinimisGroup = {
    memberStateCode: EuMemberStateCode;
    memberStateName: string;
    singleUndertakingScope: string;
    anchorDate: string;
    usesCurrentGrantAnchor: boolean;
    usesProspectiveAnchor: boolean;
    general: number;
    agriculture: number;
    fishery: number;
    fisheryAssured: number;
    sgei: number;
    unresolved: number;
    unresolvedResolutions: SiteAidLegalBasisResolution[];
    currentAidKinds: RecognizedDeMinimisRegimeKind[];
    prospectiveAidKinds: RecognizedDeMinimisRegimeKind[];
    prospectiveAidAmount: number;
    currentAidUnresolved: boolean;
  };
  const deMinimisGroups = new Map<string, DeMinimisGroup>();
  for (const observation of deMinimisObservations) {
    const key = observationGroupingKey(observation);
    if (ambiguousObservationGroupingKeys.has(key)) continue;
    const usesCurrentGrantAnchor =
      actualCurrentAidGroupingKey !== undefined &&
      key === actualCurrentAidGroupingKey;
    const usesProspectiveAnchor =
      prospectiveAidGroupingKey !== undefined &&
      key === prospectiveAidGroupingKey;
    const anchorDate = usesCurrentGrantAnchor
      ? currentAidObservation?.legalGrantDate
      : usesProspectiveAnchor
        ? prospectiveAidObservation?.legalGrantDate
        : verificationAnchorDate;
    if (anchorDate === undefined) continue;
    const windowMembership = deMinimisWindowMembership(observation, anchorDate);
    if (windowMembership === "excluded") continue;
    const current = deMinimisGroups.get(key) ?? {
      memberStateCode: observation.memberStateCode,
      memberStateName: observation.memberStateName,
      singleUndertakingScope: visibleEntityGroupingText(
        observation.singleUndertakingScope,
      ),
      anchorDate,
      usesCurrentGrantAnchor,
      usesProspectiveAnchor,
      general: 0,
      agriculture: 0,
      fishery: 0,
      fisheryAssured: 0,
      sgei: 0,
      unresolved: 0,
      unresolvedResolutions: [],
      currentAidKinds: [],
      prospectiveAidKinds: [],
      prospectiveAidAmount: 0,
      currentAidUnresolved: false,
    };
    const nextTotal = derivedMoney(
      current[observation.kind] + observation.amount,
      observation.kind === "unresolved"
        ? "Cumul prudent de base juridique non qualifiée"
        : `Cumul de minimis ${observation.kind}`,
    );
    if (nextTotal === undefined) continue;
    current[observation.kind] = nextTotal;
    if (
      observation.kind === "fishery" &&
      windowMembership === "included-assured"
    ) {
      const nextAssuredFisheryTotal = derivedMoney(
        current.fisheryAssured + observation.amount,
        "Sous-total pêche assurément compris dans les trois exercices fiscaux",
      );
      if (nextAssuredFisheryTotal !== undefined) {
        current.fisheryAssured = nextAssuredFisheryTotal;
      }
    }
    if (observation.kind === "unresolved") {
      if (!current.unresolvedResolutions.includes(observation.resolution)) {
        current.unresolvedResolutions.push(observation.resolution);
      }
      if (observation.isCurrentAid) current.currentAidUnresolved = true;
    } else if (
      observation.isCurrentAid &&
      !current.currentAidKinds.includes(observation.kind)
    ) {
      current.currentAidKinds.push(observation.kind);
    } else if (
      observation.isProspectiveCurrentAid &&
      !current.prospectiveAidKinds.includes(observation.kind)
    ) {
      current.prospectiveAidKinds.push(observation.kind);
    }
    deMinimisGroups.set(key, current);
  }
  if (
    prospectiveAidObservation !== undefined &&
    prospectiveAidGroupingKey !== undefined &&
    !ambiguousObservationGroupingKeys.has(prospectiveAidGroupingKey)
  ) {
    const prospectiveAnchorDate = prospectiveAidObservation.legalGrantDate;
    const current = deMinimisGroups.get(prospectiveAidGroupingKey) ?? {
      memberStateCode: prospectiveAidObservation.memberStateCode,
      memberStateName: prospectiveAidObservation.memberStateName,
      singleUndertakingScope: visibleEntityGroupingText(
        prospectiveAidObservation.singleUndertakingScope,
      ),
      anchorDate: prospectiveAnchorDate,
      usesCurrentGrantAnchor: false,
      usesProspectiveAnchor: true,
      general: 0,
      agriculture: 0,
      fishery: 0,
      fisheryAssured: 0,
      sgei: 0,
      unresolved: 0,
      unresolvedResolutions: [],
      currentAidKinds: [],
      prospectiveAidKinds: [],
      prospectiveAidAmount: 0,
      currentAidUnresolved: false,
    };
    current.anchorDate = prospectiveAnchorDate;
    current.usesProspectiveAnchor = true;
    current.prospectiveAidAmount = prospectiveAidObservation.amount;
    if (
      prospectiveAidObservation.kind !== "unresolved" &&
      !current.prospectiveAidKinds.includes(prospectiveAidObservation.kind)
    ) {
      current.prospectiveAidKinds.push(prospectiveAidObservation.kind);
    }
    deMinimisGroups.set(prospectiveAidGroupingKey, current);
  }

  const currentAidIncludedSuffix = (
    group: DeMinimisGroup,
    kind?: RecognizedDeMinimisRegimeKind,
  ): string => {
    const currentIncluded = kind
      ? group.currentAidKinds.includes(kind)
      : group.currentAidKinds.length > 0;
    return currentIncluded ? ", aide courante octroyée incluse" : "";
  };
  const currentAidPrudentIncludedSuffix = (group: DeMinimisGroup): string =>
    group.currentAidKinds.length > 0 || group.currentAidUnresolved
      ? ", aide courante juridiquement octroyée incluse"
      : "";
  for (const group of deMinimisGroups.values()) {
    const context = `pour l’État membre de l’autorité d’octroi ${group.memberStateName} (${group.memberStateCode}) et l’entreprise unique « ${group.singleUndertakingScope} »`;
    const anchorContext = group.usesCurrentGrantAnchor
      ? `ancrée à la date d’octroi juridique de l’aide courante, le ${group.anchorDate}`
      : `ancrée prudemment à la date de vérification, le ${group.anchorDate}, faute d’aide courante juridiquement octroyée dans ce groupe`;
    const prospectiveAnchorContext = group.usesProspectiveAnchor
      ? `ancrée prospectivement à la date de vérification, le ${group.anchorDate}, sans octroi juridique`
      : anchorContext;
    const prospectiveKind = group.prospectiveAidKinds[0];
    const prospectiveAmount = group.prospectiveAidAmount;
    const prospectiveScenarioTotal = (
      kind: RecognizedDeMinimisRegimeKind,
      baseTotal: number,
      label: string,
    ): number | undefined =>
      prospectiveKind === kind
        ? derivedMoney(baseTotal + prospectiveAmount, label)
        : undefined;
    const prospectiveGeneralTotal = prospectiveScenarioTotal(
      "general",
      group.general,
      "Précontrôle prospectif de minimis général",
    );
    const prospectiveSgeiTotal = prospectiveScenarioTotal(
      "sgei",
      group.sgei,
      "Précontrôle prospectif de minimis SIEG",
    );
    const prospectiveAgricultureTotal = prospectiveScenarioTotal(
      "agriculture",
      group.agriculture,
      "Précontrôle prospectif de minimis agricole",
    );
    const prospectiveFisheryTotal = prospectiveScenarioTotal(
      "fishery",
      group.fishery,
      "Précontrôle prospectif de minimis pêche/aquaculture",
    );
    const prospectiveFisheryAssuredTotal = prospectiveScenarioTotal(
      "fishery",
      group.fisheryAssured,
      "Sous-total assuré du précontrôle prospectif pêche/aquaculture",
    );
    const nonSgeiRecognizedTotal = derivedMoney(
      group.general + group.agriculture + group.fishery,
      "Cumul des bases de minimis reconnues hors SIEG",
    );
    const nonSgeiAssuredTotal = derivedMoney(
      group.general + group.agriculture + group.fisheryAssured,
      "Cumul assuré des bases de minimis reconnues hors SIEG",
    );
    const recognizedTotal =
      nonSgeiRecognizedTotal !== undefined
        ? derivedMoney(
            nonSgeiRecognizedTotal + group.sgei,
            "Cumul des bases de minimis reconnues, SIEG inclus",
          )
        : undefined;
    const prudentUnresolvedTotal =
      recognizedTotal !== undefined
        ? derivedMoney(
            recognizedTotal + group.unresolved,
            "Cumul prudent à qualification juridique non résolue",
          )
        : undefined;
    const addExactCurrentAidCeilingBreach = (
      applies: boolean,
      description: string,
      total: number,
      ceiling: number,
    ): void => {
      if (!applies) return;
      addUnique(
        exclusionReasons,
        `Dépassement calculé d’un plafond de minimis impliquant l’aide courante : ${description}, ${formatMoney(
          total,
        )} contre ${formatMoney(ceiling)} ${context}, sur la fenêtre ${anchorContext}. La piste est à écarter sous la base déclarée ou à faire arbitrer et, le cas échéant, requalifier par écrit par l’autorité compétente. Le moteur n’invente ni ne substitue aucune autre base juridique.`,
      );
      addUnique(
        toolLimitations,
        "Plafonds de minimis R26 — décision conservatrice : lorsqu’un total exact, calculable et rattaché à une base reconnue dépasse son plafond en incluant l’aide courante octroyée, le moteur écarte la piste sous cette base ou exige un arbitrage écrit. Une aide seulement prospective déclenche un précontrôle distinct, jamais une exclusion. Les montants non qualifiés, les tranches fiscales pêche incertaines et les simples repères arithmétiques sans plafond juridique autonome ne déclenchent pas cette exclusion.",
      );
    };
    const addProspectiveCurrentAidCeilingReview = (
      applies: boolean,
      description: string,
      total: number,
      ceiling: number,
    ): void => {
      if (!applies) return;
      addUnique(
        missingEvidence,
        `Précontrôle prospectif de minimis avant octroi : ${description}, le cumul simulé atteint ${formatMoney(
          total,
        )} contre ${formatMoney(ceiling)} ${context}, sur la fenêtre ${prospectiveAnchorContext}. L’aide prospective reste non acquise et budgétée à 0 € ; suspendre la piste et faire confirmer le montant brut ou l’ESB, la période et la base par l’autorité avant toute notification.`,
      );
      addUnique(
        warnings,
        `Précontrôle prospectif de minimis suspendu avant octroi : ${description}, le cumul simulé atteint ${formatMoney(
          total,
        )} contre ${formatMoney(ceiling)} ${context}, sur la fenêtre ${prospectiveAnchorContext}. Ce signal inclut une aide non acquise, ne constitue ni un octroi ni une exclusion et conserve l’aide budgétée à 0 €.`,
      );
      addUnique(
        toolLimitations,
        "Précontrôle prospectif R26 — verdict distinct : un dépassement simulé avant octroi ne devient jamais une exclusion d’une aide déjà accordée. Il suspend le dossier, conserve l’aide budgétée à 0 € et n’utilise pour une subvention que son montant théorique brut non acquis ; aucun ESB d’un autre instrument n’est inventé.",
      );
    };
    const hasUncertainFisherySlice = group.fishery > group.fisheryAssured;
    const addFisheryFiscalBoundaryReview = (
      applies: boolean,
      description: string,
      possibleTotal: number,
      assuredTotal: number,
      ceiling: number,
    ): void => {
      if (!applies) return;
      addUnique(
        missingEvidence,
        `Période fiscale pêche à résoudre avant verdict : ${description}, le total possible atteint ${formatMoney(
          possibleTotal,
        )} contre ${formatMoney(ceiling)} ${context}, mais seulement ${formatMoney(
          assuredTotal,
        )} sont assurément compris dans l’exercice fiscal courant et les deux précédents. Renseigner et faire confirmer le quartet exact formé des trois débuts d’exercice et de la fin inclusive de l’exercice courant contenant l’ancre ; la tranche incertaine ne déclenche aucune exclusion.`,
      );
    };
    if (
      recognizedTotal !== undefined &&
      group.unresolved > 0 &&
      prudentUnresolvedTotal !== undefined &&
      prudentUnresolvedTotal >= 300_000
    ) {
      const unresolvedProvenance =
        group.unresolvedResolutions.includes(
          "not-de-minimis-external-review",
        ) && group.unresolvedResolutions.includes("unknown")
          ? "déclarée hors de minimis en revue externe ou encore inconnue"
          : group.unresolvedResolutions.includes(
                "not-de-minimis-external-review",
              )
            ? "déclarée hors de minimis et soumise à revue externe"
            : "encore inconnue";
      addUnique(
        warnings,
        recognizedTotal > 0
          ? `Signal prudent de cumul à qualification non résolue : ${formatMoney(
              prudentUnresolvedTotal,
            )} ${context}${currentAidPrudentIncludedSuffix(
              group,
            )}, sur la fenêtre de contrôle ${anchorContext}, dont ${formatMoney(
              recognizedTotal,
            )} rattachés à des règlements de minimis reconnus et ${formatMoney(
              group.unresolved,
            )} de base juridique non qualifiée (${unresolvedProvenance}). Le montant non qualifié n’est attribué à aucun règlement de minimis reconnu ; une revue externe obligatoire doit le qualifier avant toute conclusion. Ce signal prudent ne constitue pas une conclusion juridique.`
          : `Cumul prudent non ventilé entièrement non résolu : ${formatMoney(
              prudentUnresolvedTotal,
            )} ${context}${currentAidPrudentIncludedSuffix(
              group,
            )}, sur la fenêtre de contrôle ${anchorContext}, composé de ${formatMoney(
              group.unresolved,
            )} de bases juridiques non qualifiées (${unresolvedProvenance}). Le repère prudent de revue de 300 000 € est atteint ou dépassé ; il ne constitue pas un plafond juridique universel. Aucun montant n’est attribué aux règlements 2023/2831, 2023/2832, 1408/2013 ou 717/2014 ; une revue externe obligatoire doit qualifier chaque aide avant toute conclusion. Ce signal prudent ne constitue pas une conclusion juridique.`,
      );
    }
    if (group.general > 300_000) {
      const involvesCurrentAid = group.currentAidKinds.includes("general");
      addExactCurrentAidCeilingBreach(
        involvesCurrentAid,
        "règlement général 2023/2831",
        group.general,
        300_000,
      );
      addUnique(
        warnings,
        `Dépassement potentiel de minimis général : ${formatMoney(
          group.general,
        )} sous le règlement 2023/2831 ${context}${currentAidIncludedSuffix(
          group,
          "general",
        )}, sur la fenêtre glissante de 3 ans ${anchorContext}. ${
          involvesCurrentAid
            ? "Ce dépassement calculé inclut l’aide courante et déclenche l’exclusion conservatrice sous la base déclarée."
            : "Faire confirmer le périmètre, les dates et le montant brut ou équivalent-subvention brut ; ce signal historique ne constitue pas à lui seul une conclusion sur l’aide courante."
        }`,
      );
    }
    if (
      prospectiveGeneralTotal !== undefined &&
      prospectiveGeneralTotal > 300_000
    ) {
      addProspectiveCurrentAidCeilingReview(
        true,
        "règlement général 2023/2831",
        prospectiveGeneralTotal,
        300_000,
      );
    }
    if (group.sgei > 750_000) {
      const involvesCurrentAid = group.currentAidKinds.includes("sgei");
      addExactCurrentAidCeilingBreach(
        involvesCurrentAid,
        "règlement SIEG 2023/2832",
        group.sgei,
        750_000,
      );
      addUnique(
        warnings,
        `Dépassement potentiel de minimis SIEG : ${formatMoney(
          group.sgei,
        )} sous le règlement 2023/2832 ${context}${currentAidIncludedSuffix(
          group,
          "sgei",
        )}, sur la fenêtre glissante de 3 ans ${anchorContext}, contre un plafond de 750 000 €. ${
          involvesCurrentAid
            ? "Ce dépassement calculé inclut l’aide courante et déclenche l’exclusion conservatrice sous la base déclarée."
            : "Confirmer la mission de service d’intérêt économique général, l’entreprise unique, les dates et le montant brut ou équivalent-subvention brut ; ce signal historique ne constitue pas à lui seul une conclusion sur l’aide courante."
        }`,
      );
    }
    if (prospectiveSgeiTotal !== undefined && prospectiveSgeiTotal > 750_000) {
      addProspectiveCurrentAidCeilingReview(
        true,
        "règlement SIEG 2023/2832",
        prospectiveSgeiTotal,
        750_000,
      );
    }
    if (group.agriculture > 50_000) {
      const involvesCurrentAid = group.currentAidKinds.includes("agriculture");
      addExactCurrentAidCeilingBreach(
        involvesCurrentAid,
        "règlement agricole 1408/2013",
        group.agriculture,
        50_000,
      );
      addUnique(
        warnings,
        `Dépassement potentiel de minimis agricole : ${formatMoney(
          group.agriculture,
        )} sous le règlement 1408/2013 ${context}${currentAidIncludedSuffix(
          group,
          "agriculture",
        )}, sur la fenêtre glissante de 3 ans ${anchorContext}, contre un plafond individuel de 50 000 €. ${
          involvesCurrentAid
            ? "Ce dépassement individuel calculé inclut l’aide courante et déclenche l’exclusion conservatrice sous la base déclarée ; le plafond national collectif reste à contrôler séparément."
            : "Faire confirmer le champ de la production agricole primaire et le plafond national collectif par l’autorité ; ce signal historique ne constitue pas à lui seul une conclusion sur l’aide courante."
        }`,
      );
    }
    if (
      prospectiveAgricultureTotal !== undefined &&
      prospectiveAgricultureTotal > 50_000
    ) {
      addProspectiveCurrentAidCeilingReview(
        true,
        "règlement agricole 1408/2013",
        prospectiveAgricultureTotal,
        50_000,
      );
    }
    const frenchFisheryHighCeilingApplies =
      group.memberStateCode === "FR" && group.anchorDate >= "2026-01-01";
    const fisheryCeiling =
      group.memberStateCode === "FR" && frenchFisheryHighCeilingApplies
        ? 40_000
        : 30_000;
    const maximumCertainFisheryCeiling =
      group.memberStateCode === "FR" ? fisheryCeiling : 40_000;
    if (group.fishery > fisheryCeiling) {
      const involvesCurrentAid = group.currentAidKinds.includes("fishery");
      const exactFisheryBreach =
        group.fisheryAssured > maximumCertainFisheryCeiling;
      addExactCurrentAidCeilingBreach(
        involvesCurrentAid && exactFisheryBreach,
        group.memberStateCode === "FR"
          ? frenchFisheryHighCeilingApplies
            ? "règlement pêche/aquaculture 717/2014, plafond individuel français de 40 000 € à compter du 1er janvier 2026 avec registre central"
            : "règlement pêche/aquaculture 717/2014, plafond individuel français de 30 000 € avant le 1er janvier 2026"
          : "règlement pêche/aquaculture 717/2014, dépassement même sous la branche haute conditionnelle",
        group.fisheryAssured,
        maximumCertainFisheryCeiling,
      );
      addFisheryFiscalBoundaryReview(
        hasUncertainFisherySlice &&
          involvesCurrentAid &&
          group.fisheryAssured <= maximumCertainFisheryCeiling,
        "contrôle individuel pêche/aquaculture",
        group.fishery,
        group.fisheryAssured,
        maximumCertainFisheryCeiling,
      );
      if (
        involvesCurrentAid &&
        group.memberStateCode !== "FR" &&
        group.fisheryAssured <= 40_000
      ) {
        addUnique(
          missingEvidence,
          `Aide courante, plafond pêche/aquaculture dans l’État membre ${group.memberStateName} (${group.memberStateCode}) : le cumul possible atteint ${formatMoney(
            group.fishery,
          )}, soit plus que la branche par défaut de 30 000 € sans dépasser 40 000 € sur le sous-total assuré. Établir par une source officielle applicable si cet État membre a retenu la branche haute et dispose du registre central requis ; aucun verdict favorable n’est produit tant que cette branche n’est pas documentée.`,
        );
      }
      addUnique(
        warnings,
        group.memberStateCode === "FR"
          ? `Dépassement potentiel de minimis pêche/aquaculture : ${formatMoney(
              group.fishery,
            )} sous le règlement 717/2014 ${context}${currentAidIncludedSuffix(
              group,
              "fishery",
            )}, contre le plafond individuel français de ${formatMoney(
              fisheryCeiling,
            )} ${
              frenchFisheryHighCeilingApplies
                ? "applicable à compter du 1er janvier 2026 avec le registre central national"
                : "applicable avant le 1er janvier 2026"
            }. ${
              involvesCurrentAid && exactFisheryBreach
                ? "Ce dépassement calculé inclut l’aide courante et déclenche l’exclusion conservatrice sous la base déclarée."
                : involvesCurrentAid
                  ? "Le total possible dépend d’une tranche fiscale non résolue : le dossier est incomplet et aucune exclusion n’est produite à partir de cette tranche."
                  : "Confirmer les trois exercices fiscaux réels, le champ de la production primaire et le plafond national collectif ; ce signal historique ne constitue pas à lui seul une conclusion sur l’aide courante."
            }`
          : `Seuil prudent de minimis pêche/aquaculture dépassé : ${formatMoney(
              group.fishery,
            )} sous le règlement 717/2014 ${context}${currentAidIncludedSuffix(
              group,
              "fishery",
            )}. Le plafond est de 30 000 € par défaut et ne peut atteindre 40 000 € que si cet État membre l’a décidé et dispose du registre central requis. ${
              involvesCurrentAid && exactFisheryBreach
                ? "Même la branche haute est dépassée : l’aide courante déclenche l’exclusion conservatrice sous la base déclarée."
                : involvesCurrentAid
                  ? "La branche applicable doit être documentée avant tout verdict favorable."
                  : "Faire confirmer ce choix et les trois exercices fiscaux réels ; ce signal historique ne constitue pas à lui seul une conclusion sur l’aide courante."
            }`,
      );
    }
    if (
      prospectiveFisheryTotal !== undefined &&
      prospectiveFisheryAssuredTotal !== undefined &&
      prospectiveFisheryTotal > fisheryCeiling
    ) {
      const prospectiveCeiling =
        group.memberStateCode !== "FR" && prospectiveFisheryTotal > 40_000
          ? 40_000
          : fisheryCeiling;
      addProspectiveCurrentAidCeilingReview(
        true,
        group.memberStateCode === "FR"
          ? frenchFisheryHighCeilingApplies
            ? "règlement pêche/aquaculture 717/2014, plafond individuel français de 40 000 € à compter du 1er janvier 2026 avec registre central"
            : "règlement pêche/aquaculture 717/2014, plafond individuel français de 30 000 € avant le 1er janvier 2026"
          : prospectiveFisheryTotal > 40_000
            ? "règlement pêche/aquaculture 717/2014, dépassement même sous la branche haute conditionnelle"
            : "règlement pêche/aquaculture 717/2014, branche par défaut à confirmer",
        prospectiveFisheryTotal,
        prospectiveCeiling,
      );
      addFisheryFiscalBoundaryReview(
        hasUncertainFisherySlice &&
          prospectiveFisheryAssuredTotal <= maximumCertainFisheryCeiling,
        "précontrôle prospectif individuel pêche/aquaculture",
        prospectiveFisheryTotal,
        prospectiveFisheryAssuredTotal,
        prospectiveCeiling,
      );
      if (
        group.memberStateCode !== "FR" &&
        prospectiveFisheryAssuredTotal <= 40_000
      ) {
        addUnique(
          missingEvidence,
          `Aide prospective, plafond pêche/aquaculture dans l’État membre ${group.memberStateName} (${group.memberStateCode}) : le cumul possible atteint ${formatMoney(
            prospectiveFisheryTotal,
          )}, soit plus que la branche par défaut de 30 000 € sans dépassement assuré de la branche haute de 40 000 €. Établir par une source officielle applicable si cet État membre a retenu la branche haute et dispose du registre central requis ; aucun verdict favorable n’est produit tant que cette branche n’est pas documentée.`,
        );
      }
    }
    const crossRegimeTotal = nonSgeiRecognizedTotal;
    const crossRegimeAssuredTotal = nonSgeiAssuredTotal;
    const activeRegimeFamilyCount = [
      group.general,
      group.agriculture,
      group.fishery,
    ].filter((total) => total > 0).length;
    const assuredActiveRegimeFamilyCount = [
      group.general,
      group.agriculture,
      group.fisheryAssured,
    ].filter((total) => total > 0).length;
    if (
      crossRegimeTotal !== undefined &&
      crossRegimeTotal > 300_000 &&
      activeRegimeFamilyCount >= 2
    ) {
      const involvesCurrentAid = group.currentAidKinds.some(
        (kind) => kind !== "sgei",
      );
      const assuredCrossRegimeBreach =
        crossRegimeAssuredTotal !== undefined &&
        crossRegimeAssuredTotal > 300_000 &&
        assuredActiveRegimeFamilyCount >= 2;
      addExactCurrentAidCeilingBreach(
        involvesCurrentAid && assuredCrossRegimeBreach,
        "cumul inter-régimes général, agricole et pêche/aquaculture",
        crossRegimeAssuredTotal ?? crossRegimeTotal,
        300_000,
      );
      addFisheryFiscalBoundaryReview(
        hasUncertainFisherySlice &&
          involvesCurrentAid &&
          !assuredCrossRegimeBreach,
        "cumul inter-régimes général, agricole et pêche/aquaculture",
        crossRegimeTotal,
        crossRegimeAssuredTotal ?? 0,
        300_000,
      );
      addUnique(
        warnings,
        `Cumul potentiel de minimis inter-régimes supérieur à 300 000 € : ${formatMoney(
          crossRegimeTotal,
        )} ${context}${currentAidIncludedSuffix(
          group,
        )}. Le plafond général 2023/2831 ne remplace pas les sous-plafonds agricole et pêche/aquaculture ; ${
          involvesCurrentAid && assuredCrossRegimeBreach
            ? "ce dépassement calculé inclut l’aide courante et déclenche l’exclusion conservatrice sous la base déclarée."
            : involvesCurrentAid
              ? "le dépassement possible dépend d’une tranche fiscale pêche non résolue : le dossier est incomplet et aucune exclusion n’est produite à partir de cette tranche."
              : "vérifier aussi la séparation des activités ou des coûts et les règles de cumul avec l’autorité."
        }`,
      );
    }
    if (
      prospectiveKind !== undefined &&
      prospectiveKind !== "sgei" &&
      crossRegimeTotal !== undefined &&
      crossRegimeAssuredTotal !== undefined
    ) {
      const prospectiveCrossRegimeTotal = derivedMoney(
        crossRegimeTotal + prospectiveAmount,
        "Précontrôle prospectif du cumul inter-régimes",
      );
      const prospectiveCrossRegimeAssuredTotal = derivedMoney(
        crossRegimeAssuredTotal + prospectiveAmount,
        "Sous-total assuré du précontrôle prospectif inter-régimes",
      );
      const prospectiveActiveRegimeFamilyCount = [
        prospectiveGeneralTotal ?? group.general,
        prospectiveAgricultureTotal ?? group.agriculture,
        prospectiveFisheryTotal ?? group.fishery,
      ].filter((total) => total > 0).length;
      const prospectiveAssuredActiveRegimeFamilyCount = [
        prospectiveGeneralTotal ?? group.general,
        prospectiveAgricultureTotal ?? group.agriculture,
        prospectiveFisheryAssuredTotal ?? group.fisheryAssured,
      ].filter((total) => total > 0).length;
      if (
        prospectiveCrossRegimeTotal !== undefined &&
        prospectiveCrossRegimeTotal > 300_000 &&
        prospectiveActiveRegimeFamilyCount >= 2
      ) {
        addProspectiveCurrentAidCeilingReview(
          true,
          "cumul inter-régimes général, agricole et pêche/aquaculture",
          prospectiveCrossRegimeTotal,
          300_000,
        );
        const prospectiveAssuredCrossRegimeBreach =
          prospectiveCrossRegimeAssuredTotal !== undefined &&
          prospectiveCrossRegimeAssuredTotal > 300_000 &&
          prospectiveAssuredActiveRegimeFamilyCount >= 2;
        addFisheryFiscalBoundaryReview(
          hasUncertainFisherySlice && !prospectiveAssuredCrossRegimeBreach,
          "précontrôle prospectif du cumul inter-régimes général, agricole et pêche/aquaculture",
          prospectiveCrossRegimeTotal,
          prospectiveCrossRegimeAssuredTotal ?? 0,
          300_000,
        );
      }
    }
    if (
      recognizedTotal !== undefined &&
      nonSgeiRecognizedTotal !== undefined &&
      group.sgei > 0 &&
      nonSgeiRecognizedTotal > 0 &&
      recognizedTotal > 1_050_000
    ) {
      addUnique(
        warnings,
        `Cumul potentiel de minimis SIEG et autres régimes supérieur à 1 050 000 € : ${formatMoney(
          recognizedTotal,
        )} ${context}${currentAidIncludedSuffix(
          group,
        )}. Ce total est un simple repère arithmétique, sans plafond juridique autonome ou universel. Le règlement 2023/2832 autorise le cumul avec les autres règlements de minimis, mais conserve son plafond propre de 750 000 € ; les autres régimes conservent leurs plafonds propres et leur repère combiné maximal de 300 000 €. Vérifier aussi l’interdiction de cumuler toute compensation relative au même SIEG et les règles de mêmes coûts avec l’autorité.`,
      );
    }
    const sectorCombinedCeiling = Math.max(50_000, fisheryCeiling);
    const sectorCombinedTotal = derivedMoney(
      group.agriculture + group.fishery,
      "Cumul de minimis agricole et pêche/aquaculture",
    );
    const sectorCombinedAssuredTotal = derivedMoney(
      group.agriculture + group.fisheryAssured,
      "Cumul assuré de minimis agricole et pêche/aquaculture",
    );
    if (
      sectorCombinedTotal !== undefined &&
      group.agriculture > 0 &&
      group.fishery > 0 &&
      sectorCombinedTotal > sectorCombinedCeiling
    ) {
      const involvesCurrentAid =
        group.currentAidKinds.includes("agriculture") ||
        group.currentAidKinds.includes("fishery");
      const assuredSectorBreach =
        sectorCombinedAssuredTotal !== undefined &&
        group.fisheryAssured > 0 &&
        sectorCombinedAssuredTotal > sectorCombinedCeiling;
      addExactCurrentAidCeilingBreach(
        involvesCurrentAid && assuredSectorBreach,
        "cumul sectoriel agricole et pêche/aquaculture",
        sectorCombinedAssuredTotal ?? sectorCombinedTotal,
        sectorCombinedCeiling,
      );
      addFisheryFiscalBoundaryReview(
        hasUncertainFisherySlice && involvesCurrentAid && !assuredSectorBreach,
        "cumul sectoriel agricole et pêche/aquaculture",
        sectorCombinedTotal,
        sectorCombinedAssuredTotal ?? group.agriculture,
        sectorCombinedCeiling,
      );
      addUnique(
        warnings,
        `Cumul potentiel agricole et pêche/aquaculture supérieur au plafond sectoriel combiné : ${formatMoney(
          sectorCombinedTotal,
        )} ${context}${currentAidIncludedSuffix(group)}, contre ${formatMoney(
          sectorCombinedCeiling,
        )}. Les règlements 1408/2013 et 717/2014 retiennent le plafond individuel le plus élevé, sous réserve de la séparation des activités ou des coûts et des fenêtres propres à chaque régime. ${
          involvesCurrentAid && assuredSectorBreach
            ? "Ce dépassement calculé inclut l’aide courante et déclenche l’exclusion conservatrice sous les bases déclarées."
            : involvesCurrentAid
              ? "Le dépassement possible dépend d’une tranche fiscale pêche non résolue : le dossier est incomplet et aucune exclusion n’est produite à partir de cette tranche."
              : "Faire confirmer le calcul historique par l’autorité."
        }`,
      );
    }
    if (
      (prospectiveKind === "agriculture" || prospectiveKind === "fishery") &&
      sectorCombinedTotal !== undefined &&
      sectorCombinedAssuredTotal !== undefined
    ) {
      const prospectiveSectorCombinedTotal = derivedMoney(
        sectorCombinedTotal + prospectiveAmount,
        "Précontrôle prospectif du cumul sectoriel agricole et pêche/aquaculture",
      );
      const prospectiveSectorCombinedAssuredTotal = derivedMoney(
        sectorCombinedAssuredTotal + prospectiveAmount,
        "Sous-total assuré du précontrôle prospectif sectoriel agricole et pêche/aquaculture",
      );
      const prospectiveAgricultureFamilyTotal =
        prospectiveAgricultureTotal ?? group.agriculture;
      const prospectiveFisheryFamilyTotal =
        prospectiveFisheryTotal ?? group.fishery;
      const prospectiveAssuredFisheryFamilyTotal =
        prospectiveFisheryAssuredTotal ?? group.fisheryAssured;
      if (
        prospectiveSectorCombinedTotal !== undefined &&
        prospectiveAgricultureFamilyTotal > 0 &&
        prospectiveFisheryFamilyTotal > 0 &&
        prospectiveSectorCombinedTotal > sectorCombinedCeiling
      ) {
        addProspectiveCurrentAidCeilingReview(
          true,
          "cumul sectoriel agricole et pêche/aquaculture",
          prospectiveSectorCombinedTotal,
          sectorCombinedCeiling,
        );
        const prospectiveAssuredSectorBreach =
          prospectiveSectorCombinedAssuredTotal !== undefined &&
          prospectiveAgricultureFamilyTotal > 0 &&
          prospectiveAssuredFisheryFamilyTotal > 0 &&
          prospectiveSectorCombinedAssuredTotal > sectorCombinedCeiling;
        addFisheryFiscalBoundaryReview(
          hasUncertainFisherySlice && !prospectiveAssuredSectorBreach,
          "précontrôle prospectif du cumul sectoriel agricole et pêche/aquaculture",
          prospectiveSectorCombinedTotal,
          prospectiveSectorCombinedAssuredTotal ??
            prospectiveAgricultureFamilyTotal,
          sectorCombinedCeiling,
        );
      }
    }
  }
  if (
    deMinimisObservations.some(
      (observation) =>
        observation.kind === "agriculture" || observation.kind === "fishery",
    )
  ) {
    addUnique(
      toolLimitations,
      "Les plafonds nationaux collectifs des régimes agricole et pêche/aquaculture ne sont pas calculables à partir du seul registre d’une entreprise ; l’autorité doit les contrôler.",
    );
  }
  if (
    currentLegalBasisResolution === "de-minimis-sgei" ||
    registerLegalBasisResolutions.includes("de-minimis-sgei")
  ) {
    addUnique(
      toolLimitations,
      "SIEG — portée non authentifiée : le règlement 2023/2832 autorise le cumul avec les autres règlements de minimis, mais son article 5(2) interdit le cumul avec toute compensation relative au même service d’intérêt économique général, qu’elle constitue ou non une aide d’État, sans limiter cet inventaire à la fenêtre de trois ans utilisée pour le plafond. Le moteur ne qualifie ni la mission SIEG, ni cette compensation, ni l’exception d’entreprise unique applicable aux entreprises dont le seul lien est leur rattachement direct au même organisme public ou organisme sans but lucratif ; l’autorité doit les confirmer par écrit.",
    );
  }
  const hasFisheryCumulationObservation =
    deMinimisObservations.some(
      (observation) => observation.kind === "fishery",
    ) || prospectiveAidObservation?.kind === "fishery";
  if (hasFisheryCumulationObservation) {
    addUnique(
      toolLimitations,
      currentFisheryFiscalWindowStart !== undefined
        ? `Période fiscale pêche déclarée — non authentifiée : les débuts réels du deuxième exercice précédent, de l’exercice précédent et de l’exercice courant sont respectivement ${fisherySecondPreviousFiscalYearStartValue.trim()}, ${fisheryPreviousFiscalYearStartValue.trim()} et ${fisheryFiscalYearStartValue.trim()}, et la fin inclusive de l’exercice courant est ${fisheryCurrentFiscalYearEndValue.trim()}. L’ancre appartient à l’intervalle courant déclaré et la fenêtre exacte des trois exercices commence le ${currentFisheryFiscalWindowStart} ; aucune borne n’est extrapolée par anniversaire et l’autorité doit confirmer les exercices réellement applicables.`
        : "Faute du quartet complet, valide et ordonné formé des trois débuts réels et de la fin inclusive de l’exercice courant, le précontrôle du règlement 717/2014 conserve prudemment tous les octrois historiques pêche comme tranche potentiellement pertinente sans les rendre certains. Ce repère peut inclure trop d’aides, mais cette tranche ne déclenche jamais seule une exclusion et ne peut pas être écartée pour produire un verdict favorable : les bornes réellement utilisées par l’entreprise doivent être confirmées.",
    );
  }
  if (
    deMinimisObservations.some(
      (observation) =>
        !observation.isCurrentAid &&
        (actualCurrentAidGroupingKey === undefined ||
          observationGroupingKey(observation) !== actualCurrentAidGroupingKey),
    )
  ) {
    addUnique(
      toolLimitations,
      `En l’absence d’une aide courante juridiquement octroyée dans un groupe, le pré-contrôle est ancré prudemment à la date de vérification (${safeText(
        input.profile.verificationDate,
      )}). Le contrôle réglementaire exact doit être rejoué à la date où le droit légal à la nouvelle aide sera conféré.`,
    );
  }

  const notificationEvidenceKnown =
    stageIsRecognized &&
    (input.aid.stage === "notified" || input.aid.stage === "received") &&
    input.gates.notification === "yes" &&
    hasRequiredText(input.gateEvidence.notification ?? "");
  const legalAidValueUnderConditions =
    notificationEvidenceKnown &&
    currentLegalGrantConfirmed &&
    legalAidValueValid &&
    input.aid.legalAidValueAmount !== undefined
      ? derivedMoney(
          input.aid.legalAidValueAmount,
          "Valeur juridique de l’aide",
        )
      : undefined;
  const approvedFinancialContributionUnderConditions =
    notificationEvidenceKnown &&
    currentLegalGrantConfirmed &&
    financialCalculationBasisSupported &&
    financialContributionSupported &&
    approvedFinancialContributionConsistent &&
    input.aid.approvedFinancialContributionAmount !== undefined
      ? derivedMoney(
          input.aid.approvedFinancialContributionAmount,
          "Contribution financière approuvée",
        )
      : undefined;
  const notifiedAidUnderConditions =
    approvedFinancialContributionUnderConditions;

  const waitingMarginCost =
    waitMonths !== undefined && monthlyDelayContributionMargin !== undefined
      ? derivedMoney(
          waitMonths * monthlyDelayContributionMargin,
          "Coût de l’attente",
        )
      : undefined;
  const aidSpecificFees =
    aidSpecificFeesInput !== undefined
      ? derivedMoney(
          aidSpecificFeesInput,
          "Frais propres à la demande et à l’attente",
        )
      : undefined;
  const waitingAndFeeCost =
    waitingMarginCost !== undefined && aidSpecificFees !== undefined
      ? derivedMoney(
          waitingMarginCost + aidSpecificFees,
          "Coût de l’attente et des frais",
        )
      : undefined;
  const waitComparisonAid =
    input.aid.stage === "notified" && currentLegalGrantConfirmed
      ? approvedFinancialContributionUnderConditions
      : input.aid.stage === "none"
        ? financialContributionSupported
          ? theoreticalAidNonAcquired
          : undefined
        : undefined;
  const waitDominatesComparisonAid =
    waitingAndFeeCost !== undefined && waitComparisonAid !== undefined
      ? waitingAndFeeCost >= waitComparisonAid
      : undefined;

  if (waitDominatesComparisonAid) {
    addUnique(
      warnings,
      input.aid.stage === "notified"
        ? "Le coût d’attente est supérieur ou égal à la contribution financière approuvée : ne pas attendre uniquement pour cette aide."
        : "Le coût d’attente est supérieur ou égal à l’aide théorique : ne pas attendre uniquement pour cette aide.",
    );
  }

  const directPaymentModeSelected =
    paymentModeRecognized && input.aid.paymentMode === "direct";
  let directPaymentArithmeticCoversInvoiceInFull: boolean | undefined;
  let directCompanySupplierRemainder: number | undefined;
  if (
    input.aid.stage === "received" &&
    directPaymentModeSelected &&
    financialContributionSupported &&
    invalidIssues.length === 0 &&
    currentLegalGrantConfirmed &&
    approvedFinancialContributionConsistent &&
    actualFinancialContributionConsistent &&
    invoiceTotalIncludingVat !== undefined &&
    input.aid.actualFinancialContributionAmount !== undefined
  ) {
    directPaymentArithmeticCoversInvoiceInFull =
      input.aid.actualFinancialContributionAmount === invoiceTotalIncludingVat;
    directCompanySupplierRemainder = derivedMoney(
      invoiceTotalIncludingVat - input.aid.actualFinancialContributionAmount,
      "Reste de facture payé par l’entreprise",
    );
  }
  const supplierRemainderEvidenceRequired =
    input.aid.stage === "received" &&
    directPaymentModeSelected &&
    directPaymentArithmeticCoversInvoiceInFull !== true;
  const supplierPaymentEvidenceKnown =
    input.aid.stage !== "received" ||
    !financialContributionSupported ||
    (directPaymentModeSelected
      ? !supplierRemainderEvidenceRequired ||
        hasRequiredText(input.aid.supplierPaymentReference ?? "")
      : hasRequiredText(input.aid.supplierPaymentReference ?? ""));
  if (!supplierPaymentEvidenceKnown) {
    addUnique(
      missingEvidence,
      directPaymentModeSelected
        ? "Reste payé par l’entreprise au fournisseur : référence de preuve manquante."
        : "Paiement du fournisseur : référence de preuve manquante.",
    );
  }

  const receiptEvidenceKnown =
    input.aid.stage !== "received" ||
    (financialContributionSupported &&
      notificationEvidenceKnown &&
      currentLegalGrantConfirmed &&
      approvedFinancialContributionConsistent &&
      actualFinancialContributionConsistent &&
      paymentModeRecognized &&
      input.aid.paymentMode !== "unknown" &&
      input.aid.finalInvoiceMatchesQuote === "yes" &&
      finalInvoiceDateValid &&
      receiptDateValid &&
      receiptChronologyValid &&
      hasRequiredText(input.aid.finalInvoiceReference ?? "") &&
      supplierPaymentEvidenceKnown &&
      hasRequiredText(input.aid.receiptReference) &&
      isValidIsoDate(input.aid.receiptDate));
  const directPaymentCoverageStatus: SiteAidDirectPaymentCoverageStatus =
    !directPaymentModeSelected
      ? "not-applicable"
      : input.aid.stage !== "received"
        ? "unknown"
        : invalidIssues.length > 0
          ? "invalid"
          : directPaymentArithmeticCoversInvoiceInFull === undefined
            ? "unknown"
            : directPaymentArithmeticCoversInvoiceInFull
              ? receiptEvidenceKnown
                ? "full-documented"
                : "full-provisional"
              : "partial";
  const directPaymentCoversInvoiceInFull =
    directPaymentCoverageStatus === "full-documented"
      ? true
      : directPaymentCoverageStatus === "partial"
        ? false
        : undefined;
  const amountsForStageValid =
    input.aid.stage === "none"
      ? legalAidValueValid &&
        approvedFinancialContributionValid &&
        actualFinancialContributionValid
      : input.aid.stage === "notified"
        ? legalAidValueValid &&
          approvedFinancialContributionConsistent &&
          actualFinancialContributionValid &&
          currentLegalGrantConfirmed
        : legalAidValueValid &&
          approvedFinancialContributionConsistent &&
          actualFinancialContributionConsistent &&
          receiptEvidenceKnown;
  const allRequiredFactsKnown =
    invalidIssues.length === 0 &&
    missingEvidence.length === 0 &&
    quoteAmountsAndVatKnown &&
    quoteDeductibilityKnown &&
    quoteEligibilityKnown &&
    basisScopeRecognized &&
    basisScope === "eligible-ex-vat" &&
    ratePercent !== undefined &&
    capAmount !== undefined &&
    financialContributionSupported &&
    amountsForStageValid &&
    paymentTermsConsistent &&
    availableCash !== undefined &&
    waitMonths !== undefined &&
    monthlyDelayContributionMargin !== undefined &&
    aidSpecificFeesInput !== undefined &&
    registerKnown;

  const economicCostWithoutAid =
    invoiceTotalExVat !== undefined && nonDeductibleVat !== undefined
      ? derivedMoney(
          invoiceTotalExVat + nonDeductibleVat,
          "Coût économique sans aide",
        )
      : undefined;

  const actualFinancialContribution =
    input.aid.stage === "received" &&
    financialCalculationBasisSupported &&
    financialContributionSupported &&
    actualFinancialContributionConsistent &&
    receiptEvidenceKnown &&
    input.aid.actualFinancialContributionAmount !== undefined
      ? derivedMoney(
          input.aid.actualFinancialContributionAmount,
          "Paiement effectif de l’aide",
        )
      : undefined;
  const financialContributionDifference =
    approvedFinancialContributionUnderConditions !== undefined &&
    actualFinancialContribution !== undefined
      ? derivedMoney(
          actualFinancialContribution -
            approvedFinancialContributionUnderConditions,
          "Écart payé moins approuvé",
        )
      : undefined;
  const receivedAid = actualFinancialContribution;
  const aidReceiptDifference = financialContributionDifference;
  const budgetedAid = input.aid.stage === "none" ? 0 : undefined;

  const finalAidCostsAllowed = exclusionReasons.length === 0;
  const conditionalCostAfterNotification =
    finalAidCostsAllowed &&
    input.aid.stage === "notified" &&
    notificationEvidenceKnown &&
    currentLegalGrantConfirmed &&
    economicCostWithoutAid !== undefined &&
    approvedFinancialContributionUnderConditions !== undefined &&
    aidSpecificFees !== undefined
      ? derivedMoney(
          Math.max(
            0,
            economicCostWithoutAid -
              approvedFinancialContributionUnderConditions +
              aidSpecificFees,
          ),
          "Coût conditionnel après notification",
        )
      : undefined;
  const realizedCostAfterReceipt =
    finalAidCostsAllowed &&
    input.aid.stage === "received" &&
    receiptEvidenceKnown &&
    economicCostWithoutAid !== undefined &&
    actualFinancialContribution !== undefined &&
    aidSpecificFees !== undefined
      ? derivedMoney(
          Math.max(
            0,
            economicCostWithoutAid -
              actualFinancialContribution +
              aidSpecificFees,
          ),
          "Coût réalisé après versement ou paiement direct",
        )
      : undefined;

  let documentedPrepaymentAmount: number | undefined;
  const documentedAidForPrepayment =
    input.aid.stage === "received"
      ? actualFinancialContribution
      : approvedFinancialContributionUnderConditions;
  if (
    notificationEvidenceKnown &&
    (input.aid.stage === "none" || currentLegalGrantConfirmed) &&
    documentedAidForPrepayment !== undefined &&
    paymentTermsConsistent &&
    typeof input.aid.documentedPrepaymentPercent === "number"
  ) {
    documentedPrepaymentAmount = derivedMoney(
      documentedAidForPrepayment *
        (input.aid.documentedPrepaymentPercent / 100),
      "Part documentée versée avant paiement",
    );
  } else if (input.aid.stage === "none") {
    documentedPrepaymentAmount = 0;
  }

  let maximumCashNeed: number | undefined;
  if (invoiceTotalIncludingVat !== undefined && aidSpecificFees !== undefined) {
    const reductionBeforeSupplierPayment =
      financialCalculationBasisSupported &&
      exclusionReasons.length === 0 &&
      documentedPrepaymentAmount !== undefined
        ? documentedPrepaymentAmount
        : 0;
    maximumCashNeed = derivedMoney(
      Math.max(
        0,
        invoiceTotalIncludingVat +
          aidSpecificFees -
          reductionBeforeSupplierPayment,
      ),
      "Besoin maximal de trésorerie",
    );
  }

  const cashGap =
    maximumCashNeed !== undefined && availableCash !== undefined
      ? derivedMoney(
          Math.max(0, maximumCashNeed - availableCash),
          "Écart de trésorerie",
        )
      : undefined;

  const registeredAidTotal = registeredAmountsKnown
    ? derivedMoney(registeredAidTotalAccumulator, "Total du registre des aides")
    : undefined;
  const sameBaseAidTotal =
    registeredAmountsKnown && sameBaseKnown
      ? derivedMoney(
          sameBaseAidTotalAccumulator,
          "Total des aides sur la même assiette ou facture",
        )
      : undefined;

  let code: SiteAidDecisionCode;
  if (invalidIssues.length > 0) {
    code = "invalid";
  } else if (exclusionReasons.length > 0) {
    code = "excluded";
  } else if (basisScope === "other") {
    code = "unsupported-basis";
  } else if (!allRequiredFactsKnown) {
    code = "incomplete";
  } else if (input.aid.stage === "received") {
    code = "received";
  } else if (input.aid.stage === "none") {
    code = "candidate-not-budgeted";
  } else if (
    waitDominatesComparisonAid &&
    cashGap !== undefined &&
    cashGap > 0
  ) {
    code = "notified-wait-dominated-cash-gap";
  } else if (waitDominatesComparisonAid) {
    code = "notified-wait-dominated";
  } else if (cashGap !== undefined && cashGap > 0) {
    code = "notified-cash-gap";
  } else {
    code = "notified-usable";
  }

  const result: SiteAidDecisionResult = {
    code,
    explanation: DECISION_LABELS[code],
    invalidIssues,
    missingEvidence,
    exclusionReasons,
    warnings,
    toolLimitations,
    invoiceTotalExVat,
    invoiceVat,
    invoiceTotalIncludingVat,
    deductibleVat,
    nonDeductibleVat,
    eligibleSubtotalExVat,
    theoreticalAidNonAcquired,
    prospectiveDeMinimisAidValue,
    budgetedAid,
    legalAidValueUnderConditions,
    approvedFinancialContributionUnderConditions,
    actualFinancialContribution,
    financialContributionDifference,
    notifiedAidUnderConditions,
    receivedAid,
    aidReceiptDifference,
    economicCostWithoutAid,
    conditionalCostAfterNotification,
    realizedCostAfterReceipt,
    documentedPrepaymentAmount,
    maximumCashNeed,
    cashGap,
    waitingMarginCost,
    aidSpecificFees,
    waitingAndFeeCost,
    waitComparisonAid,
    waitDominatesComparisonAid,
    registeredAidTotal,
    sameBaseAidTotal,
    currentLegalBasisResolution,
    registerLegalBasisResolutions,
    directPaymentArithmeticCoversInvoiceInFull,
    directPaymentCoversInvoiceInFull,
    directPaymentCoverageStatus,
    directCompanySupplierRemainder,
    supplierRemainderEvidenceRequired,
  };

  return result;
}

function reportList(title: string, values: string[]): string[] {
  if (values.length === 0) return [`${title} : aucune.`];
  return [`${title} :`, ...values.map((value) => `- ${reportText(value)}`)];
}

function reportQuoteLine(line: SiteAidQuoteLineInput, index: number): string {
  const eligibility =
    line.eligibility in TRI_STATE_LABELS
      ? TRI_STATE_LABELS[line.eligibility]
      : "ND";
  return [
    `${index + 1}. ${reportText(line.label, `Ligne ${index + 1}`)}`,
    `HT ${formatMoney(line.amountExVat)}`,
    `TVA ${formatPercentValue(line.vatRatePercent)}`,
    `TVA déductible ${formatDeductibleFraction(line.deductibleVatFraction)}`,
    `admissibilité ${eligibility}`,
    `preuve ${reportText(line.evidence)}`,
  ].join(" | ");
}

function financialValue(
  label: string,
  value: number | undefined,
  qualifier = "",
): string {
  return `${label} : ${formatMoney(value)}${qualifier}`;
}

export function buildSiteAidDecisionReport(
  input: SiteAidDecisionInput,
  evaluationContext: SiteAidDecisionEvaluationContext = {
    analysisDate: SITE_AID_DECISION_SOURCE_DATE,
  },
): string {
  const result = calculateSiteAidDecision(input, evaluationContext);
  const reference = reportText(input.profile.reference, "Sans référence");
  const isDirectPayment = input.aid.paymentMode === "direct";
  const legalAidValueLabel =
    "Valeur juridique de l’aide courante (valeur de minimis : ESB communiqué ou montant brut de la subvention)";
  const approvedContributionLabel =
    "Contribution financière approuvée pour la facture";
  const declaredLegalAidValueLabel =
    "Valeur juridique déclarée par l’utilisateur — non validée par le moteur";
  const prospectiveValueIsDocumented =
    result.prospectiveDeMinimisAidValue !== undefined &&
    input.aid.prospectiveDeMinimisAidValueAmount !== undefined &&
    result.prospectiveDeMinimisAidValue ===
      input.aid.prospectiveDeMinimisAidValueAmount &&
    hasRequiredText(input.aid.prospectiveDeMinimisAidValueEvidence ?? "");
  const declaredApprovedContributionLabel =
    "Contribution financière déclarée par l’utilisateur — non validée par le moteur";
  const effectiveAidAmountLabel = isDirectPayment
    ? "Montant payé directement au fournisseur (encaissé par l’entreprise : 0 €)"
    : "Montant encaissé par l’entreprise";
  const declaredEffectiveAidAmountLabel = isDirectPayment
    ? "Montant de paiement direct déclaré par l’utilisateur — non validé par le moteur"
    : "Montant d’encaissement déclaré par l’utilisateur — non validé par le moteur";
  const declaredEffectiveAidDateLabel = isDirectPayment
    ? "Date du paiement direct au fournisseur déclarée par l’utilisateur — non validée par le moteur"
    : "Date d’encaissement par l’entreprise déclarée par l’utilisateur — non validée par le moteur";
  const declaredEffectiveAidReferenceLabel = isDirectPayment
    ? "Référence du paiement direct au fournisseur déclarée par l’utilisateur — non validée par le moteur"
    : "Référence d’encaissement par l’entreprise déclarée par l’utilisateur — non validée par le moteur";
  const supplierPaymentReferenceLabel = isDirectPayment
    ? "Référence du reste payé par l’entreprise au fournisseur"
    : "Référence de paiement du fournisseur";
  const lines: string[] = [
    "DOSSIER D’AIDE ET DE TRÉSORERIE POUR UN SITE",
    `Version du moteur : ${SITE_AID_DECISION_VERSION}`,
    `Date de référence : ${SITE_AID_DECISION_SOURCE_DATE}`,
    `Date locale d’analyse injectée : ${reportText(
      evaluationContext.analysisDate,
    )}`,
    "",
    "DOSSIER",
    `Référence : ${reference}`,
    `Date de vérification : ${reportText(input.profile.verificationDate)}`,
    `Territoire : ${reportText(input.profile.territory)}`,
    `Applicabilité territoriale UE du précontrôle de minimis déclarée — non authentifiée : ${
      EU_TERRITORIAL_STATUS_LABELS[
        input.profile.deMinimisEuTerritorialStatus ?? "unknown"
      ] ?? "ND"
    }`,
    `Preuve de qualification territoriale UE déclarée — non authentifiée : ${reportText(
      input.profile.deMinimisEuTerritorialEvidence ?? "",
    )}`,
    `Date structurée de la preuve territoriale UE : ${reportText(
      input.profile.deMinimisEuTerritorialEvidenceDate ?? "",
    )}`,
    `Activité : ${reportText(input.profile.activity)}`,
    `Âge de l’entreprise : ${
      isFiniteNonNegative(input.profile.businessAgeMonths)
        ? `${formatNumber(input.profile.businessAgeMonths)} mois`
        : "ND"
    }`,
    `Effectif : ${
      isFiniteNonNegative(input.profile.employeeCount)
        ? formatNumber(input.profile.employeeCount)
        : "ND"
    }`,
    financialValue(
      "Chiffre d’affaires annuel HT",
      input.profile.annualRevenueExVat,
    ),
    `Statut : ${reportText(input.profile.legalStatus)}`,
    `Problème métier : ${reportText(input.profile.businessNeed)}`,
    `Indicateur de réussite : ${reportText(input.profile.successIndicator)}`,
    `Responsable de la décision : ${reportText(input.profile.decisionOwner)}`,
    `Fusion, acquisition ou scission pertinente déclarée — non authentifiée par le moteur : ${
      TRI_STATE_LABELS[
        input.profile.deMinimisCorporateEventOccurred ?? "unknown"
      ] ?? "ND"
    }`,
    `Type d’opération déclaré : ${
      CORPORATE_EVENT_KIND_LABELS[
        input.profile.deMinimisCorporateEventKind ?? "unknown"
      ] ?? "ND"
    }`,
    `Preuve et historique juridique de l’opération déclarés — non authentifiés : ${reportText(
      input.profile.deMinimisCorporateEventEvidence ?? "",
    )}`,
    `Registre de minimis déclaré ajusté après l’opération — non authentifié par le moteur : ${
      TRI_STATE_LABELS[
        input.profile.deMinimisCorporateAidHistoryAdjusted ?? "unknown"
      ] ?? "ND"
    }`,
    "",
    "SOURCE OFFICIELLE",
    `Organisme : ${reportText(input.authority.name)}`,
    `URL : ${reportText(input.authority.officialUrl)}`,
    `Consultée le : ${reportText(input.authority.consultationDate)}`,
    `Échéances et règle de modification : ${reportText(
      input.authority.scheduleAndAmendmentEvidence,
    )}`,
    `Pièce post-attribution déclarée vérifiée — déclaration non authentifiée par le moteur : ${
      TRI_STATE_LABELS[
        input.authority.postAwardEvidenceVerified ?? "unknown"
      ] ?? "ND"
    }`,
    `Obligations après attribution et après versement : ${reportText(
      input.authority.postAwardObligationsEvidence,
    )}`,
    "",
    "DEVIS",
    ...(input.quoteLines.length > 0
      ? input.quoteLines.map(reportQuoteLine)
      : ["Aucune ligne exploitable."]),
    "",
    "CONTRÔLES",
    ...SITE_AID_GATE_IDS.map(
      (gateId) =>
        `${SITE_AID_GATE_LABELS[gateId]} : ${
          TRI_STATE_LABELS[input.gates[gateId]] ?? "ND"
        } | preuve ${reportText(input.gateEvidence[gateId] ?? "")}`,
    ),
    "",
    "AIDE ET VERSEMENT — DÉCLARATIONS DE L’UTILISATEUR NON VALIDÉES PAR LE MOTEUR",
    `Assiette mécanique : ${
      BASIS_SCOPE_LABELS[input.aid.basisScope ?? "unknown"] ?? "ND"
    }`,
    `État financier déclaré par l’utilisateur — non validé par le moteur : ${
      STAGE_LABELS[input.aid.stage] ?? "ND"
    }`,
    `Instrument : ${INSTRUMENT_KIND_LABELS[input.aid.instrumentKind] ?? "ND"}`,
    `Taux : ${formatPercentValue(input.aid.ratePercent)}`,
    financialValue("Plafond", input.aid.capAmount),
    financialValue(declaredLegalAidValueLabel, input.aid.legalAidValueAmount),
    financialValue(
      "Valeur prospective de minimis déclarée avant notification — non authentifiée par le moteur",
      input.aid.prospectiveDeMinimisAidValueAmount,
    ),
    `Preuve de la valeur prospective de minimis déclarée — non authentifiée par le moteur : ${reportText(
      input.aid.prospectiveDeMinimisAidValueEvidence ?? "",
    )}`,
    financialValue(
      declaredApprovedContributionLabel,
      input.aid.approvedFinancialContributionAmount,
    ),
    financialValue(
      declaredEffectiveAidAmountLabel,
      input.aid.actualFinancialContributionAmount,
    ),
    `Mode de versement : ${PAYMENT_MODE_LABELS[input.aid.paymentMode] ?? "ND"}`,
    `Part documentée avant paiement : ${formatPercentValue(
      input.aid.documentedPrepaymentPercent,
    )}`,
    `Les lignes reprennent la facture finale acquittée : ${
      TRI_STATE_LABELS[input.aid.finalInvoiceMatchesQuote] ?? "ND"
    }`,
    `Date de facture finale : ${reportText(input.aid.finalInvoiceDate ?? "")}`,
    `Référence de facture finale : ${reportText(
      input.aid.finalInvoiceReference ?? "",
    )}`,
    isDirectPayment
      ? `Statut de couverture du paiement direct : ${DIRECT_PAYMENT_COVERAGE_STATUS_LABELS[result.directPaymentCoverageStatus]}`
      : "Statut de couverture du paiement direct : Non applicable",
    isDirectPayment
      ? result.directPaymentCoverageStatus === "full-documented"
        ? "Reste payé par l’entreprise au fournisseur : 0 € — aucune preuve de reste requise ; couverture intégrale documentée"
        : result.directPaymentCoverageStatus === "full-provisional"
          ? "Reste arithmétique de facture : 0 € — couverture intégrale provisoire ; validation suspendue aux pièces du paiement direct"
          : result.supplierRemainderEvidenceRequired
            ? `${financialValue(
                "Reste payé par l’entreprise au fournisseur",
                result.directCompanySupplierRemainder,
              )} | ${supplierPaymentReferenceLabel} : ${reportText(
                input.aid.supplierPaymentReference ?? "",
              )}`
            : "Reste payé par l’entreprise au fournisseur : ND"
      : `${supplierPaymentReferenceLabel} : ${reportText(
          input.aid.supplierPaymentReference ?? "",
        )}`,
    `${declaredEffectiveAidDateLabel} : ${reportText(input.aid.receiptDate)}`,
    `${declaredEffectiveAidReferenceLabel} : ${reportText(
      input.aid.receiptReference,
    )}`,
    `Statut déclaré de la base juridique : ${
      LEGAL_BASIS_STATUS_LABELS[input.aid.legalBasisStatus] ?? "ND"
    }`,
    `Statut résolu par le moteur : ${LEGAL_BASIS_RESOLUTION_LABELS[result.currentLegalBasisResolution]}`,
    `Référence exacte du règlement de minimis : ${reportText(
      input.aid.deMinimisRegime ?? "",
    )}`,
    `Base juridique hors de minimis déclarée : ${reportText(
      input.aid.nonDeMinimisLegalBasis ?? "",
    )}`,
    `Référence de preuve hors de minimis déclarée : ${reportText(
      input.aid.nonDeMinimisEvidenceReference ?? "",
    )}`,
    `État membre de l’autorité d’octroi pour le cumul : ${reportText(
      input.aid.deMinimisMemberState ?? "",
    )}`,
    `Entreprise unique du cumul : ${reportText(
      input.aid.deMinimisSingleUndertakingScope ?? "",
    )}`,
    `Début déclaré de l’exercice fiscal contenant l’ancre du précontrôle pêche — non authentifié : ${reportText(
      input.aid.deMinimisFisheryFiscalYearStartDate ?? "",
    )}`,
    `Début déclaré de l’exercice fiscal pêche précédent — non authentifié : ${reportText(
      input.aid.deMinimisFisheryPreviousFiscalYearStartDate ?? "",
    )}`,
    `Début déclaré du deuxième exercice fiscal pêche précédent — non authentifié : ${reportText(
      input.aid.deMinimisFisherySecondPreviousFiscalYearStartDate ?? "",
    )}`,
    `Fin inclusive déclarée de l’exercice fiscal pêche courant — non authentifiée : ${reportText(
      input.aid.deMinimisFisheryCurrentFiscalYearEndDate ?? "",
    )}`,
    `Clés proches déclarées comme entreprises uniques distinctes — déclaration non authentifiée par le moteur : ${
      TRI_STATE_LABELS[input.aid.similarUndertakingKeysDistinct ?? "unknown"] ??
      "ND"
    }`,
    `Preuve de distinction des clés proches déclarée — non authentifiée par le moteur : ${reportText(
      input.aid.similarUndertakingKeysEvidence ?? "",
    )}`,
    `Mandat SIEG déclaré vérifié — non authentifié par le moteur : ${
      TRI_STATE_LABELS[input.aid.sgeiEntrustmentVerified ?? "unknown"] ?? "ND"
    }`,
    `Preuve du mandat SIEG déclarée — non authentifiée : ${reportText(
      input.aid.sgeiEntrustmentEvidence ?? "",
    )}`,
    `Identité du SIEG déclarée — non qualifiée par le moteur : ${reportText(
      input.aid.sgeiServiceIdentity ?? "",
    )}`,
    `Autre compensation relative au même SIEG déclarée présente — non authentifiée par le moteur : ${
      TRI_STATE_LABELS[
        input.aid.sgeiSameServiceCompensationPresent ?? "unknown"
      ] ?? "ND"
    }`,
    `Preuve et inventaire des compensations du même SIEG déclarés — non authentifiés : ${reportText(
      input.aid.sgeiCompensationEvidence ?? "",
    )}`,
    `Octroi juridique déclaré par l’utilisateur — non validé par le moteur : ${
      TRI_STATE_LABELS[input.aid.legalGrantStatus] ?? "ND"
    }`,
    `Date d’octroi juridique déclarée par l’utilisateur — non validée par le moteur : ${reportText(
      input.aid.legalGrantDate ?? "",
    )}`,
    `Statut déclaré au registre central national — non authentifié par le moteur : ${
      CENTRAL_REGISTER_STATUS_LABELS[
        input.aid.centralRegisterStatus ?? "unknown"
      ] ?? "ND"
    }`,
    `Référence publique ou attestation déclarée du registre central national — non authentifiée par le moteur : ${reportText(
      input.aid.centralRegisterReference ?? "",
    )}`,
    "",
    "TRÉSORERIE ET ATTENTE",
    financialValue("Trésorerie disponible", input.availableCash),
    `Délai d’attente : ${
      isFiniteNonNegative(input.wait.months)
        ? `${formatNumber(input.wait.months)} mois`
        : "ND"
    }`,
    financialValue(
      "Marge contributive mensuelle perdue à cause du retard",
      input.wait.monthlyDelayContributionMargin,
    ),
    financialValue(
      "Frais propres à la demande et à l’attente",
      input.wait.aidSpecificFees,
    ),
    "",
    "REGISTRE DES AIDES — DÉCLARATIONS DE L’UTILISATEUR NON VALIDÉES PAR LE MOTEUR",
    ...(input.aidRegister.length > 0
      ? input.aidRegister.map(
          (entry, index) =>
            `${index + 1}. ${reportText(entry.authority)} | ${reportText(
              entry.scheme,
            )} | statut déclaré ${
              LEGAL_BASIS_STATUS_LABELS[entry.legalBasisStatus] ?? "ND"
            } | statut résolu ${
              LEGAL_BASIS_RESOLUTION_LABELS[
                result.registerLegalBasisResolutions[index] ?? "unknown"
              ]
            } | règlement de minimis ${reportText(
              entry.regime,
            )} | base hors de minimis déclarée ${reportText(
              entry.nonDeMinimisLegalBasis,
            )} | référence de preuve hors de minimis déclarée ${reportText(
              entry.nonDeMinimisEvidenceReference,
            )} | État membre de l’autorité d’octroi ${reportText(
              entry.memberState,
            )} | entreprise unique ${reportText(
              entry.singleUndertakingScope,
            )} | clés proches déclarées distinctes — déclaration non authentifiée ${
              TRI_STATE_LABELS[
                entry.similarUndertakingKeysDistinct ?? "unknown"
              ] ?? "ND"
            } | preuve de distinction déclarée — non authentifiée ${reportText(
              entry.similarUndertakingKeysEvidence ?? "",
            )} | mandat SIEG déclaré vérifié — non authentifié ${
              TRI_STATE_LABELS[entry.sgeiEntrustmentVerified ?? "unknown"] ??
              "ND"
            } | preuve du mandat SIEG déclarée — non authentifiée ${reportText(
              entry.sgeiEntrustmentEvidence ?? "",
            )} | identité du SIEG déclarée — non qualifiée ${reportText(
              entry.sgeiServiceIdentity ?? "",
            )} | autre compensation du même SIEG déclarée présente — non authentifiée ${
              TRI_STATE_LABELS[
                entry.sgeiSameServiceCompensationPresent ?? "unknown"
              ] ?? "ND"
            } | preuve et inventaire des compensations du même SIEG déclarés — non authentifiés ${reportText(
              entry.sgeiCompensationEvidence ?? "",
            )} | relation déclarée au service SIEG de l’aide courante — non authentifiée ${
              TRI_STATE_LABELS[
                entry.sgeiRelationToCurrentService ?? "unknown"
              ] ?? "ND"
            } | preuve de cette relation déclarée — non authentifiée ${reportText(
              entry.sgeiRelationToCurrentServiceEvidence ?? "",
            )} | ${formatMoney(entry.amount)} | octroi juridique ${reportText(
              entry.legalGrantDate,
            )} | statut du registre central national — non authentifié ${
              CENTRAL_REGISTER_STATUS_LABELS[
                entry.centralRegisterStatus ?? "unknown"
              ] ?? "ND"
            } | référence publique ou attestation du registre central national — non authentifiée ${reportText(
              entry.centralRegisterReference ?? "",
            )} | dépenses ${reportText(entry.expenses)} | même assiette ou facture ${
              TRI_STATE_LABELS[entry.sameBaseOrInvoice] ?? "ND"
            }`,
        )
      : ["Aucune aide antérieure déclarée."]),
    "",
    "CALCULS",
    financialValue("Facture totale HT", result.invoiceTotalExVat),
    financialValue("TVA facturée", result.invoiceVat),
    financialValue("Facture TTC", result.invoiceTotalIncludingVat),
    financialValue("TVA déductible", result.deductibleVat),
    financialValue("TVA non déductible", result.nonDeductibleVat),
    financialValue(
      "Sous-total HT prouvé admissible",
      result.eligibleSubtotalExVat,
    ),
    financialValue(
      "Aide théorique",
      result.theoreticalAidNonAcquired,
      result.theoreticalAidNonAcquired === undefined ? "" : " — non acquise",
    ),
    financialValue(
      "Valeur prospective de minimis avant octroi — précontrôle distinct",
      result.prospectiveDeMinimisAidValue,
      result.prospectiveDeMinimisAidValue === undefined
        ? ""
        : prospectiveValueIsDocumented
          ? " — non acquise, non budgétée, déclaration non authentifiée"
          : " — non acquise, non budgétée",
    ),
    financialValue(
      "Aide budgétée sans notification",
      0,
      " — règle de prudence",
    ),
    financialValue(
      result.legalAidValueUnderConditions === undefined &&
        input.aid.stage !== "none"
        ? "Valeur juridique conditionnelle non calculable"
        : legalAidValueLabel,
      result.legalAidValueUnderConditions,
      result.legalAidValueUnderConditions === undefined
        ? ""
        : " — sous conditions",
    ),
    financialValue(
      result.approvedFinancialContributionUnderConditions === undefined &&
        input.aid.stage !== "none"
        ? input.aid.stage === "received"
          ? "Contribution approuvée conditionnelle non calculable"
          : "Contribution déclarée — non validée par le moteur"
        : approvedContributionLabel,
      result.approvedFinancialContributionUnderConditions,
      result.approvedFinancialContributionUnderConditions === undefined
        ? ""
        : " — sous conditions",
    ),
    financialValue(
      result.actualFinancialContribution === undefined &&
        input.aid.stage === "received"
        ? "Contribution déclarée — non validée par le moteur"
        : effectiveAidAmountLabel,
      result.actualFinancialContribution,
      result.actualFinancialContribution === undefined ? "" : " — réalisé",
    ),
    financialValue(
      result.financialContributionDifference === undefined &&
        input.aid.stage === "received"
        ? "Écart entre paiement et contribution approuvée non calculable"
        : "Écart payé moins approuvé",
      result.financialContributionDifference,
    ),
    financialValue(
      "Coût économique sans aide — avant traitement fiscal et comptable",
      result.economicCostWithoutAid,
    ),
    financialValue(
      result.conditionalCostAfterNotification === undefined &&
        input.aid.stage === "notified"
        ? "Coût conditionnel non calculable — avant traitement fiscal et comptable"
        : "Coût conditionnel après notification — avant traitement fiscal et comptable",
      result.conditionalCostAfterNotification,
    ),
    financialValue(
      result.realizedCostAfterReceipt === undefined &&
        input.aid.stage === "received"
        ? "Coût réalisé non calculable — avant traitement fiscal et comptable"
        : "Coût réalisé après versement ou paiement direct — avant traitement fiscal et comptable",
      result.realizedCostAfterReceipt,
    ),
    financialValue(
      result.documentedPrepaymentAmount === undefined &&
        input.aid.stage !== "none"
        ? "Part prépayée conditionnelle ou réalisée non calculable"
        : "Part documentée versée avant paiement",
      result.documentedPrepaymentAmount,
    ),
    financialValue("Besoin maximal de trésorerie", result.maximumCashNeed),
    financialValue("Écart de trésorerie", result.cashGap),
    financialValue("Coût de l’attente", result.waitingMarginCost),
    financialValue("Coût de l’attente et des frais", result.waitingAndFeeCost),
    financialValue(
      result.waitComparisonAid === undefined && input.aid.stage === "notified"
        ? "Comparaison de l’aide au coût d’attente non calculable"
        : "Aide comparée au coût d’attente",
      result.waitComparisonAid,
      input.aid.stage === "notified"
        ? " — contribution financière approuvée"
        : input.aid.stage === "none"
          ? " — aide théorique non acquise"
          : "",
    ),
    financialValue(
      "Aides antérieures déclarées — non validées par le moteur",
      result.registeredAidTotal,
    ),
    financialValue(
      "Aides déclarées sur la même assiette ou facture — non validées par le moteur",
      result.sameBaseAidTotal,
    ),
    "",
    "DÉCISION",
    `Verdict : ${result.explanation}`,
    result.waitDominatesComparisonAid === true
      ? "Règle d’attente : le coût d’attente est supérieur ou égal à l’aide pertinente pour cet état ; ne pas attendre uniquement pour cette aide."
      : result.waitDominatesComparisonAid === false
        ? "Règle d’attente : le coût d’attente reste inférieur à l’aide pertinente pour cet état selon les seules hypothèses saisies."
        : input.aid.stage === "received"
          ? "Règle d’attente : sans objet après versement ou paiement direct."
          : "Règle d’attente : ND.",
    "",
    ...reportList("Données invalides", result.invalidIssues),
    ...reportList("Preuves ou informations manquantes", result.missingEvidence),
    ...reportList("Motifs d’exclusion", result.exclusionReasons),
    ...reportList("Points de vigilance", result.warnings),
    ...reportList("Limites du moteur", result.toolLimitations),
    "",
    "Ce dossier ne conclut pas à l’éligibilité. Une aide théorique n’est jamais acquise ; une notification reste sous conditions jusqu’au versement à l’entreprise ou au paiement direct au fournisseur et au contrôle des justificatifs. Pour un cumul de minimis, utiliser l’ESB communiqué par l’autorité ou le montant brut de la subvention, jamais le nominal d’un prêt ou d’une garantie.",
  ];

  return lines.join("\n");
}

function slugifyFilenamePart(value: string): string {
  const normalized = safeText(value, "sans-reference")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("fr-FR")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
  return normalized || "sans-reference";
}

export function siteAidDecisionReportFilename(
  reference: string,
  date = SITE_AID_DECISION_SOURCE_DATE,
): string {
  const safeDate = isValidIsoDate(date)
    ? date.trim()
    : SITE_AID_DECISION_SOURCE_DATE;
  return `dossier-aide-tresorerie-site-${slugifyFilenamePart(
    reference,
  )}-${safeDate}.txt`;
}
