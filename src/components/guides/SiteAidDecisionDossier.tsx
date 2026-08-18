"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type MouseEvent as ReactMouseEvent,
} from "react";
import {
  Download,
  FileCheck2,
  FileJson,
  Plus,
  Printer,
  RotateCcw,
  Trash2,
  Upload,
} from "lucide-react";
import {
  SITE_AID_DRAFT_MAX_BYTES,
  SITE_AID_DRAFT_MAX_APPLICATION_CRITERIA,
  SITE_AID_DRAFT_MAX_APPLICATION_DOCUMENTS,
  SITE_AID_DRAFT_R23_VERSION,
  SITE_AID_DRAFT_R24_VERSION,
  SITE_AID_DRAFT_R25_VERSION,
  SITE_AID_DRAFT_R26_VERSION,
  SITE_AID_DRAFT_R27_VERSION,
  SITE_AID_DRAFT_R28_VERSION,
  SiteAidDraftError,
  createEmptySiteAidApplicationDocument,
  createEmptySiteAidApplicationCriterion,
  createEmptySiteAidApplicationPreparation,
  createSiteAidDraftJson,
  parseSiteAidDraftJson,
  siteAidDraftFilename,
  type ParsedSiteAidDraft,
  type SiteAidApplicationAwardMode,
  type SiteAidApplicationCriterion,
  type SiteAidApplicationDeadlineStatus,
  type SiteAidApplicationDocument,
  type SiteAidApplicationDocumentStatus,
  type SiteAidApplicationPreparation,
  type SiteAidApplicationSignatureStatus,
  type SiteAidApplicationSubmissionStatus,
  type SiteAidDraftStepId,
} from "@/lib/site-aid-draft";
import {
  SITE_AID_PREDIAGNOSIS_DIRTY_EVENT,
  SITE_AID_PREDIAGNOSIS_TRANSFER_EVENT,
  createEmptySiteAidPreDiagnosis,
  parseSiteAidPreDiagnosis,
  siteAidPreDiagnosisCorrectionTargetId,
  type SiteAidPreDiagnosisTransfer,
} from "@/lib/site-aid-prediagnosis";
import {
  SITE_AID_DECISION_SOURCE_DATE,
  SITE_AID_GATE_IDS,
  SITE_AID_GATE_LABELS,
  buildSiteAidDecisionReport,
  calculateSiteAidDecision,
  createEmptySiteAidDecisionInput,
  isSiteAidFrenchCentralRegisterRequired,
  resolveSiteAidLegalBasisResolution,
  siteAidDecisionReportFilename,
  type SiteAidCentralRegisterStatus,
  type SiteAidCorporateEventKind,
  type SiteAidDecisionCode,
  type SiteAidDecisionInput,
  type SiteAidEuTerritorialStatus,
  type SiteAidGateId,
  type SiteAidInstrumentKind,
  type SiteAidLegalBasisStatus,
  type SiteAidPaymentMode,
  type SiteAidQuoteLineInput,
  type SiteAidRegisterEntryInput,
  type SiteAidStage,
  type SiteAidTriState,
} from "@/lib/site-aid-decision";

const inputClassName =
  "mt-1.5 min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-950 shadow-sm outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/25 aria-[invalid=true]:border-rose-600 aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-rose-600/25 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:aria-[invalid=true]:border-rose-500";
const labelClassName =
  "block text-xs font-bold leading-relaxed text-zinc-800 dark:text-zinc-200";
const helpClassName =
  "mb-0 mt-1 text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400";
const reviewEditButtonClassName =
  "mt-4 min-h-11 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs font-black text-zinc-900 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white";
const COST_ACCOUNTING_BOUNDARY =
  "Avant traitement fiscal et comptable : la dépense et la subvention éventuelle peuvent suivre des traitements différents. Ce calcul ne constitue pas un conseil fiscal ou comptable individualisé.";
const SHARED_UNDERTAKING_SCOPE_HELP_ID = "site-aid-undertaking-scope-help";
const REGISTER_UNDERTAKING_SCOPE_HELP_ID =
  "site-aid-register-undertaking-scope-help";
const REGISTER_DE_MINIMIS_FORMAT_HELP_ID =
  "site-aid-register-de-minimis-regime-format-help";
const CENTRAL_REGISTER_HELP_ID = "site-aid-central-register-help";
const SITE_AID_APPLICATION_PREPARATION_VERSION =
  "site-aid-application-r31-2026-07-27";

const SITE_AID_WIZARD_STEPS: ReadonlyArray<{
  id: SiteAidDraftStepId;
  shortLabel: string;
  title: string;
}> = [
  {
    id: "profile",
    shortLabel: "Profil",
    title: "Profil et source officielle",
  },
  { id: "quote", shortLabel: "Devis", title: "Devis ligne par ligne" },
  {
    id: "eligibility",
    shortLabel: "Critères",
    title: "Critères et assiette",
  },
  {
    id: "legal",
    shortLabel: "Droit",
    title: "Instrument, base juridique et octroi",
  },
  {
    id: "payment",
    shortLabel: "Versement",
    title: "Contribution, facture et paiement",
  },
  {
    id: "treasury",
    shortLabel: "Trésorerie",
    title: "Trésorerie et coût de l’attente",
  },
  {
    id: "history",
    shortLabel: "Historique",
    title: "Aides antérieures et restructuration",
  },
  {
    id: "application",
    shortLabel: "Candidature",
    title: "Préparer la candidature",
  },
  {
    id: "review",
    shortLabel: "Vérifier",
    title: "Vérifier vos réponses et analyser",
  },
];

const applicationAwardModeOptions: Array<{
  value: SiteAidApplicationAwardMode;
  label: string;
}> = [
  { value: "unknown", label: "À confirmer auprès du financeur" },
  { value: "right", label: "Droit — si toutes les conditions sont remplies" },
  {
    value: "selection",
    label: "Sélection — dossier comparé ou soumis à une enveloppe",
  },
];

const applicationDeadlineStatusOptions: Array<{
  value: SiteAidApplicationDeadlineStatus;
  label: string;
}> = [
  { value: "exact-date", label: "Date exacte publiée" },
  { value: "permanent", label: "Guichet permanent" },
  {
    value: "unpublished",
    label: "Date non publiée — instruction suspendue",
  },
];

const applicationSubmissionStatusOptions: Array<{
  value: SiteAidApplicationSubmissionStatus;
  label: string;
}> = [
  { value: "unknown", label: "À confirmer — aucun dépôt n’est déduit" },
  { value: "not-submitted", label: "Pas encore déposé" },
  { value: "submitted", label: "Déposé — accusé à contrôler" },
  { value: "under-review", label: "En cours d’instruction" },
  {
    value: "additional-information-requested",
    label: "Complément demandé par l’autorité",
  },
  { value: "decision-received", label: "Décision reçue" },
];

const applicationSubmittedPackageCheckOptions: Array<{
  value: SiteAidTriState;
  label: string;
}> = [
  { value: "unknown", label: "À vérifier sur la version réellement transmise" },
  { value: "yes", label: "Oui — identique au dossier préparé" },
  { value: "no", label: "Non — écarts à archiver et expliquer" },
];

const applicationDocumentStatusOptions: Array<{
  value: SiteAidApplicationDocumentStatus;
  label: string;
}> = [
  { value: "unknown", label: "À confirmer" },
  { value: "to-obtain", label: "À obtenir" },
  { value: "in-progress", label: "En cours" },
  { value: "ready", label: "Prête et vérifiée" },
  { value: "not-applicable", label: "Non applicable — justification requise" },
];

const applicationSignatureStatusOptions: Array<{
  value: SiteAidApplicationSignatureStatus;
  label: string;
}> = [
  { value: "unknown", label: "À confirmer" },
  { value: "not-required", label: "Signature non requise" },
  { value: "required", label: "Signature requise — non signée" },
  { value: "signed", label: "Signée et datée" },
];

const applicationFinalValidationOptions: Array<{
  value: SiteAidTriState;
  label: string;
}> = [
  { value: "unknown", label: "À confirmer — relecture non tracée" },
  { value: "no", label: "Non — validation finale à réaliser" },
  { value: "yes", label: "Oui — validation finale tracée" },
];

const centralRegisterStatusOptions: Array<{
  value: SiteAidCentralRegisterStatus;
  label: string;
}> = [
  { value: "unknown", label: "À confirmer" },
  {
    value: "registered",
    label: "Enregistré — preuve identifiable disponible",
  },
  {
    value: "pending",
    label: "Transmission des données d’octroi en cours",
  },
  { value: "not-registered", label: "Non enregistré" },
  { value: "not-applicable", label: "Non applicable" },
];

const euTerritorialStatusOptions: Array<{
  value: SiteAidEuTerritorialStatus;
  label: string;
}> = [
  {
    value: "unknown",
    label: "À confirmer — aucune applicabilité favorable déduite",
  },
  {
    value: "eu-law-applicable",
    label: "Droit de l’Union déclaré applicable — preuve à confirmer",
  },
  {
    value: "external-review-required",
    label: "Revue territoriale externe requise",
  },
];

const triStateOptions: Array<{ value: SiteAidTriState; label: string }> = [
  { value: "unknown", label: "À confirmer" },
  { value: "yes", label: "Oui — preuve disponible" },
  { value: "no", label: "Non — critère négatif" },
];

const postAwardEvidenceOptions: Array<{
  value: SiteAidTriState;
  label: string;
}> = [
  { value: "unknown", label: "À confirmer — analyse suspendue" },
  { value: "yes", label: "Oui — pièce applicable vérifiée" },
  { value: "no", label: "Non — pièce non vérifiée" },
];

const corporateEventKindOptions: Array<{
  value: SiteAidCorporateEventKind;
  label: string;
}> = [
  { value: "unknown", label: "À confirmer" },
  { value: "merger-acquisition", label: "Fusion ou acquisition" },
  { value: "split", label: "Scission" },
  {
    value: "both",
    label: "Fusion ou acquisition et scission",
  },
];

const corporateEventOccurredOptions: Array<{
  value: SiteAidTriState;
  label: string;
}> = [
  { value: "unknown", label: "À confirmer — recherche incomplète" },
  { value: "yes", label: "Oui — événement identifié" },
  { value: "no", label: "Non — absence documentée" },
];

const corporateAidHistoryOptions: Array<{
  value: SiteAidTriState;
  label: string;
}> = [
  { value: "unknown", label: "À confirmer — registre non vérifié" },
  { value: "yes", label: "Oui — historique ajusté et vérifié" },
  { value: "no", label: "Non — historique non ajusté" },
];

const sgeiEntrustmentOptions: Array<{
  value: SiteAidTriState;
  label: string;
}> = [
  { value: "unknown", label: "À confirmer — mandat non vérifié" },
  {
    value: "yes",
    label: "Oui — mandat écrit ou électronique vérifié",
  },
  { value: "no", label: "Non — aucun mandat vérifié" },
];

const sgeiCompensationOptions: Array<{
  value: SiteAidTriState;
  label: string;
}> = [
  { value: "unknown", label: "À confirmer — contrôle non réalisé" },
  {
    value: "yes",
    label: "Oui — autre compensation présente, cumul bloqué",
  },
  {
    value: "no",
    label: "Non — absence confirmée par écrit",
  },
];

const similarUndertakingDistinctOptions: Array<{
  value: SiteAidTriState;
  label: string;
}> = [
  { value: "unknown", label: "À confirmer" },
  { value: "yes", label: "Oui — distinction documentée" },
  {
    value: "no",
    label: "Non — même entreprise unique, recopier la même clé",
  },
];

const legalGrantStatusOptions: Array<{
  value: SiteAidTriState;
  label: string;
}> = [
  { value: "unknown", label: "À confirmer — non totalisé" },
  { value: "yes", label: "Oui — décision et date disponibles" },
  { value: "no", label: "Non — droit non octroyé" },
];

const stageOptions: Array<{ value: SiteAidStage; label: string }> = [
  { value: "none", label: "Aucune notification" },
  { value: "notified", label: "Notification écrite sous conditions" },
  {
    value: "received",
    label: "Contribution payée à l’entreprise ou au fournisseur",
  },
];

const instrumentKindOptions: Array<{
  value: SiteAidInstrumentKind;
  label: string;
}> = [
  { value: "unknown", label: "À confirmer dans la décision" },
  { value: "grant", label: "Subvention" },
  { value: "loan", label: "Prêt" },
  { value: "guarantee", label: "Garantie" },
  { value: "tax-relief", label: "Allègement fiscal ou social" },
  { value: "other", label: "Autre instrument documenté" },
];

const legalBasisStatusOptions: Array<{
  value: SiteAidLegalBasisStatus;
  label: string;
}> = [
  { value: "unknown", label: "À confirmer — aucune classification" },
  {
    value: "de-minimis",
    label: "De minimis — règlement exact requis",
  },
  {
    value: "not-de-minimis",
    label: "Hors de minimis déclaré — revue externe obligatoire",
  },
];

const paymentOptions: Array<{ value: SiteAidPaymentMode; label: string }> = [
  { value: "unknown", label: "À confirmer" },
  { value: "reimbursement", label: "Remboursement après paiement" },
  { value: "advance", label: "Avance documentée" },
  { value: "direct", label: "Paiement direct au fournisseur" },
];

const basisScopeOptions: Array<{
  value: SiteAidDecisionInput["aid"]["basisScope"];
  label: string;
}> = [
  { value: "unknown", label: "À confirmer dans le règlement" },
  {
    value: "eligible-ex-vat",
    label: "Dépenses admissibles HT × taux, avec plafond",
  },
  {
    value: "other",
    label: "Autre assiette — calcul théorique non pris en charge",
  },
];

const decisionStyles: Record<
  SiteAidDecisionCode,
  { border: string; background: string; text: string }
> = {
  invalid: {
    border: "border-rose-300 dark:border-rose-800",
    background: "bg-rose-50 dark:bg-rose-950/30",
    text: "text-rose-950 dark:text-rose-100",
  },
  excluded: {
    border: "border-rose-300 dark:border-rose-800",
    background: "bg-rose-50 dark:bg-rose-950/30",
    text: "text-rose-950 dark:text-rose-100",
  },
  incomplete: {
    border: "border-amber-300 dark:border-amber-800",
    background: "bg-amber-50 dark:bg-amber-950/30",
    text: "text-amber-950 dark:text-amber-100",
  },
  "unsupported-basis": {
    border: "border-amber-300 dark:border-amber-800",
    background: "bg-amber-50 dark:bg-amber-950/30",
    text: "text-amber-950 dark:text-amber-100",
  },
  "candidate-not-budgeted": {
    border: "border-blue-300 dark:border-blue-800",
    background: "bg-blue-50 dark:bg-blue-950/30",
    text: "text-blue-950 dark:text-blue-100",
  },
  "notified-cash-gap": {
    border: "border-amber-300 dark:border-amber-800",
    background: "bg-amber-50 dark:bg-amber-950/30",
    text: "text-amber-950 dark:text-amber-100",
  },
  "notified-wait-dominated": {
    border: "border-amber-300 dark:border-amber-800",
    background: "bg-amber-50 dark:bg-amber-950/30",
    text: "text-amber-950 dark:text-amber-100",
  },
  "notified-wait-dominated-cash-gap": {
    border: "border-rose-300 dark:border-rose-800",
    background: "bg-rose-50 dark:bg-rose-950/30",
    text: "text-rose-950 dark:text-rose-100",
  },
  "notified-usable": {
    border: "border-emerald-300 dark:border-emerald-800",
    background: "bg-emerald-50 dark:bg-emerald-950/30",
    text: "text-emerald-950 dark:text-emerald-100",
  },
  received: {
    border: "border-emerald-300 dark:border-emerald-800",
    background: "bg-emerald-50 dark:bg-emerald-950/30",
    text: "text-emerald-950 dark:text-emerald-100",
  },
};

function currentLocalIsoDate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function countSiteAidApplicationWords(value: string): number {
  return (
    value.normalize("NFC").match(/[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)*/gu)
      ?.length ?? 0
  );
}

function blankQuoteLine(): SiteAidQuoteLineInput {
  return {
    label: "",
    amountExVat: undefined,
    vatRatePercent: undefined,
    deductibleVatFraction: "unknown",
    eligibility: "unknown",
    evidence: "",
  };
}

function emptyCorporateEventFields(): Pick<
  SiteAidDecisionInput["profile"],
  | "deMinimisCorporateEventOccurred"
  | "deMinimisCorporateEventKind"
  | "deMinimisCorporateEventEvidence"
  | "deMinimisCorporateAidHistoryAdjusted"
> {
  return {
    deMinimisCorporateEventOccurred: "unknown",
    deMinimisCorporateEventKind: "unknown",
    deMinimisCorporateEventEvidence: "",
    deMinimisCorporateAidHistoryAdjusted: "unknown",
  };
}

function emptySgeiFields(): Pick<
  SiteAidDecisionInput["aid"],
  | "sgeiEntrustmentVerified"
  | "sgeiEntrustmentEvidence"
  | "sgeiServiceIdentity"
  | "sgeiSameServiceCompensationPresent"
  | "sgeiCompensationEvidence"
> {
  return {
    sgeiEntrustmentVerified: "unknown",
    sgeiEntrustmentEvidence: "",
    sgeiServiceIdentity: "",
    sgeiSameServiceCompensationPresent: "unknown",
    sgeiCompensationEvidence: "",
  };
}

function emptyRegisterSgeiRelationFields(): Pick<
  SiteAidRegisterEntryInput,
  "sgeiRelationToCurrentService" | "sgeiRelationToCurrentServiceEvidence"
> {
  return {
    sgeiRelationToCurrentService: "unknown",
    sgeiRelationToCurrentServiceEvidence: "",
  };
}

function isResolvedDeMinimis(resolution: string): boolean {
  return resolution.startsWith("de-minimis-");
}

function prospectiveDeMinimisValueIsInScope(
  input: SiteAidDecisionInput,
): boolean {
  return (
    input.aid.stage === "none" &&
    (input.aid.legalBasisStatus === "de-minimis" ||
      isResolvedDeMinimis(
        resolveSiteAidLegalBasisResolution(
          input.aid.deMinimisRegime,
          input.aid.legalBasisStatus,
        ),
      ))
  );
}

function hasProspectiveDeMinimisPair(input: SiteAidDecisionInput): boolean {
  return (
    input.aid.prospectiveDeMinimisAidValueAmount !== undefined ||
    Boolean(input.aid.prospectiveDeMinimisAidValueEvidence?.trim())
  );
}

function clearOutOfScopeProspectiveDeMinimisPair(
  input: SiteAidDecisionInput,
): SiteAidDecisionInput {
  if (
    prospectiveDeMinimisValueIsInScope(input) ||
    !hasProspectiveDeMinimisPair(input)
  ) {
    return input;
  }
  return {
    ...input,
    aid: {
      ...input.aid,
      prospectiveDeMinimisAidValueAmount: undefined,
      prospectiveDeMinimisAidValueEvidence: "",
    },
  };
}

function normalizeCentralRegisterTraces(
  input: SiteAidDecisionInput,
): SiteAidDecisionInput {
  let changed = false;
  const normalizeTrace = (
    required: boolean,
    status: SiteAidCentralRegisterStatus | undefined,
    reference: string | undefined,
  ) => {
    const currentStatus = status ?? "unknown";
    const currentReference = reference ?? "";
    const nextStatus =
      required && currentStatus === "not-applicable"
        ? "unknown"
        : required
          ? currentStatus
          : "not-applicable";
    const nextReference =
      required && nextStatus === "registered" ? currentReference : "";
    if (nextStatus !== currentStatus || nextReference !== currentReference) {
      changed = true;
    }
    return {
      centralRegisterStatus: nextStatus,
      centralRegisterReference: nextReference,
    };
  };

  const currentResolution = resolveSiteAidLegalBasisResolution(
    input.aid.deMinimisRegime,
    input.aid.legalBasisStatus,
  );
  const currentTrace = normalizeTrace(
    isSiteAidFrenchCentralRegisterRequired(
      currentResolution,
      input.aid.deMinimisMemberState,
      input.aid.legalGrantDate,
    ),
    input.aid.centralRegisterStatus,
    input.aid.centralRegisterReference,
  );
  const aidRegister = input.aidRegister.map((entry) => ({
    ...entry,
    ...normalizeTrace(
      isSiteAidFrenchCentralRegisterRequired(
        resolveSiteAidLegalBasisResolution(
          entry.regime,
          entry.legalBasisStatus,
        ),
        entry.memberState,
        entry.legalGrantDate,
      ),
      entry.centralRegisterStatus,
      entry.centralRegisterReference,
    ),
  }));

  if (!changed) return input;
  return {
    ...input,
    aid: { ...input.aid, ...currentTrace },
    aidRegister,
  };
}

function wizardStepHeadingId(stepId: SiteAidDraftStepId): string {
  return `site-aid-wizard-step-${stepId}-title`;
}

function wizardStepPanelId(stepId: SiteAidDraftStepId): string {
  return `site-aid-wizard-step-${stepId}-panel`;
}

function wizardStepForTargetId(targetId: string): SiteAidDraftStepId {
  if (targetId.startsWith("site-aid-application")) return "application";
  if (targetId.startsWith("site-aid-quote")) return "quote";
  if (
    targetId.startsWith("site-aid-register") ||
    targetId.startsWith("site-aid-profile-corporate") ||
    targetId === "site-aid-corporate-event-section"
  ) {
    return "history";
  }
  if (
    targetId === "site-aid-cash-section" ||
    targetId === "site-aid-available-cash" ||
    targetId === "site-aid-wait-months" ||
    targetId === "site-aid-monthly-delay-margin" ||
    targetId === "site-aid-specific-fees"
  ) {
    return "treasury";
  }
  if (
    targetId.startsWith("site-aid-profile") ||
    targetId.startsWith("site-aid-authority") ||
    targetId === "site-aid-post-award-group"
  ) {
    return "profile";
  }
  if (
    targetId.startsWith("site-aid-gate") ||
    targetId === issueFieldIds.basisScope ||
    targetId === issueFieldIds.ratePercent ||
    targetId === issueFieldIds.capAmount ||
    targetId === "site-aid-proof-section"
  ) {
    return "eligibility";
  }
  if (
    targetId === issueFieldIds.notificationEvidence ||
    targetId === issueFieldIds.stage ||
    targetId === issueFieldIds.approvedContribution ||
    targetId === issueFieldIds.actualContribution ||
    targetId === issueFieldIds.paymentMode ||
    targetId === issueFieldIds.prepaymentPercent ||
    targetId === issueFieldIds.finalInvoiceMatch ||
    targetId === issueFieldIds.finalInvoiceDate ||
    targetId === issueFieldIds.finalInvoiceReference ||
    targetId === issueFieldIds.supplierPaymentReference ||
    targetId === issueFieldIds.receiptDate ||
    targetId === issueFieldIds.receiptReference ||
    targetId === "site-aid-payment-section"
  ) {
    return "payment";
  }
  return "legal";
}

function blankRegisterEntry(): SiteAidRegisterEntryInput {
  return {
    authority: "",
    scheme: "",
    legalBasisStatus: "unknown",
    regime: "",
    nonDeMinimisLegalBasis: "",
    nonDeMinimisEvidenceReference: "",
    memberState: "",
    singleUndertakingScope: "",
    similarUndertakingKeysDistinct: "unknown",
    similarUndertakingKeysEvidence: "",
    ...emptySgeiFields(),
    ...emptyRegisterSgeiRelationFields(),
    amount: undefined,
    legalGrantDate: "",
    centralRegisterStatus: "not-applicable",
    centralRegisterReference: "",
    expenses: "",
    sameBaseOrInvoice: "unknown",
  };
}

function initialInput(date = ""): SiteAidDecisionInput {
  const input = createEmptySiteAidDecisionInput();
  return {
    ...input,
    gates: {
      ...input.gates,
      notification:
        input.aid.stage === "none" ? "no" : input.gates.notification,
    },
    profile: {
      ...input.profile,
      verificationDate: date,
    },
    authority: {
      ...input.authority,
      consultationDate: date,
      postAwardEvidenceVerified: "unknown",
    },
    quoteLines: [blankQuoteLine()],
  };
}

function brittanyExample(): SiteAidDecisionInput {
  return {
    profile: {
      reference: "Exemple fictif Bretagne",
      verificationDate: SITE_AID_DECISION_SOURCE_DATE,
      territory: "Bretagne — EPCI à confirmer",
      deMinimisEuTerritorialStatus: "unknown",
      deMinimisEuTerritorialEvidence: "",
      deMinimisEuTerritorialEvidenceDate: "",
      activity: "Commerce de proximité à clientèle principalement particulière",
      businessAgeMonths: 36,
      employeeCount: 2,
      annualRevenueExVat: 250000,
      legalStatus: "SAS — exemple fictif",
      businessNeed:
        "Permettre aux clients de demander un devis sans appel téléphonique",
      successIndicator: "Nombre mensuel de demandes qualifiées issues du site",
      decisionOwner: "Dirigeant de l’exemple fictif",
      deMinimisCorporateEventOccurred: "no",
      deMinimisCorporateEventKind: "unknown",
      deMinimisCorporateEventEvidence:
        "Attestation fictive du 26/07/2026 : aucune fusion, acquisition ou scission sur la période de minimis examinée",
      deMinimisCorporateAidHistoryAdjusted: "unknown",
    },
    authority: {
      name: "Région Bretagne et EPCI compétent",
      officialUrl:
        "https://www.bretagne.bzh/aides/fiches/pass-commerce-artisanat/",
      consultationDate: SITE_AID_DECISION_SOURCE_DATE,
      scheduleAndAmendmentEvidence:
        "Dates et avenants à confirmer par écrit auprès de l’EPCI avant engagement",
      postAwardEvidenceVerified: "yes",
      postAwardObligationsEvidence:
        "Convention fictive applicable, article 8 : rapport final, indicateurs, conservation des pièces pendant cinq ans, contrôles et changements à notifier ; ancienne obligation de visibilité levée par l’avenant fictif A-2026-02",
    },
    quoteLines: [
      {
        label: "Conception et développement du site",
        amountExVat: 6000,
        vatRatePercent: 20,
        deductibleVatFraction: "yes",
        eligibility: "yes",
        evidence: "Fiche Région Bretagne consultée le 26/07/2026",
      },
      {
        label: "Module e-commerce",
        amountExVat: 1000,
        vatRatePercent: 20,
        deductibleVatFraction: "yes",
        eligibility: "yes",
        evidence: "Fiche Région Bretagne consultée le 26/07/2026",
      },
      {
        label: "Hébergement, maintenance et publicité",
        amountExVat: 3000,
        vatRatePercent: 20,
        deductibleVatFraction: "yes",
        eligibility: "no",
        evidence: "Exclusions publiées par la Région Bretagne",
      },
    ],
    gates: {
      authority: "yes",
      beneficiary: "unknown",
      activity: "unknown",
      startOrder: "unknown",
      cumulativeAid: "unknown",
      notification: "no",
    },
    gateEvidence: {
      authority: "Fiche Région Bretagne consultée le 26/07/2026",
      beneficiary: "",
      activity: "",
      startOrder: "",
      cumulativeAid: "",
      notification:
        "État du dossier fictif au 26/07/2026 : aucune notification reçue",
    },
    aid: {
      stage: "none",
      basisScope: "eligible-ex-vat",
      instrumentKind: "grant",
      ratePercent: 30,
      capAmount: 7500,
      legalAidValueAmount: 0,
      approvedFinancialContributionAmount: 0,
      actualFinancialContributionAmount: 0,
      legalBasisStatus: "de-minimis",
      deMinimisRegime: "Règlement (UE) 2023/2831",
      nonDeMinimisLegalBasis: "",
      nonDeMinimisEvidenceReference: "",
      deMinimisMemberState: "France",
      deMinimisSingleUndertakingScope:
        "Société de l’exemple et entreprises liées — périmètre à confirmer",
      similarUndertakingKeysDistinct: "unknown",
      similarUndertakingKeysEvidence: "",
      sgeiEntrustmentVerified: "unknown",
      sgeiEntrustmentEvidence: "",
      sgeiServiceIdentity: "",
      sgeiSameServiceCompensationPresent: "unknown",
      sgeiCompensationEvidence: "",
      legalGrantStatus: "no",
      legalGrantDate: "",
      paymentMode: "reimbursement",
      documentedPrepaymentPercent: 0,
      finalInvoiceMatchesQuote: "unknown",
      finalInvoiceDate: "",
      finalInvoiceReference: "",
      supplierPaymentReference: "",
      receiptDate: "",
      receiptReference: "",
    },
    availableCash: 12000,
    wait: {
      months: 3,
      monthlyDelayContributionMargin: 500,
      aidSpecificFees: 0,
    },
    aidRegister: [],
  };
}

function brittanyApplicationExample(): SiteAidApplicationPreparation {
  return {
    awardMode: "selection",
    funderObjectives:
      "Transformation numérique du commerce et amélioration mesurable du parcours client.",
    selectionCriteria:
      "Adéquation aux dépenses publiées, maturité du projet, impact local et qualité des justificatifs — à confirmer par écrit auprès de l’EPCI.",
    submissionChannel:
      "Portail ou formulaire indiqué par l’EPCI compétent — canal exact à confirmer.",
    deadlineStatus: "exact-date",
    deadline: "2026-09-30",
    deadlineTime: "17:00",
    deadlineTimeZone: "Europe/Paris",
    deadlineOfficialReference:
      "Calendrier fictif du portail de l’EPCI, référence CAL-2026-09 — à confirmer.",
    deadlineVerificationDate: "2026-07-26",
    deadlineEvaluationInstant: "",
    deadlineEvaluationTimeZone: "",
    submissionStatus: "not-submitted",
    submissionDate: "",
    submissionReceiptReference: "",
    submittedPackageMatchesPreparedPackage: "unknown",
    preparationTimeHours: 12,
    deliverables:
      "Site publié, procès-verbal de recette et synthèse des fonctionnalités livrées.",
    expectedResults:
      "Augmentation mesurable des demandes qualifiées issues du site.",
    schedule:
      "Cadrage en octobre, réalisation de novembre à décembre, recette avant mise en ligne.",
    budgetJustification:
      "Chaque ligne du devis est reliée à un livrable ; les coûts récurrents exclus sont isolés.",
    criteria: [
      {
        publishedCriterion: "Impact local et maturité du projet",
        projectResponse:
          "Le parcours de demande de devis réduit les appels non qualifiés et répond à un besoin mesuré.",
        evidence: "Journal fictif des demandes clients et devis détaillé.",
        owner: "Dirigeant de l’exemple fictif",
        wordLimit: 250,
      },
    ],
    finalReviewer: "Dirigeant de l’exemple fictif",
    finalValidationStatus: "yes",
    documents: [
      {
        label: "Devis détaillé et daté",
        status: "ready",
        owner: "Prestataire du site",
        format: "PDF",
        signatureStatus: "signed",
        deadline: "2026-09-20",
        notApplicableJustification: "",
      },
      {
        label: "Attestation de régularité fiscale et sociale",
        status: "ready",
        owner: "Dirigeant de l’exemple fictif",
        format: "PDF",
        signatureStatus: "not-required",
        deadline: "2026-09-20",
        notApplicableJustification: "",
      },
    ],
  };
}

function optionalNumber(rawValue: string): number | undefined {
  if (rawValue.trim() === "") return undefined;
  return Number(rawValue);
}

function numberValue(value: number | undefined): number | "" {
  return value === undefined || !Number.isFinite(value) ? "" : value;
}

function deductiblePercentValue(
  value: SiteAidQuoteLineInput["deductibleVatFraction"],
): number | "" {
  if (value === "yes") return 100;
  if (value === "no") return 0;
  if (typeof value === "number" && Number.isFinite(value)) return value * 100;
  return "";
}

function formatMoney(value: number | undefined): string {
  if (value === undefined || !Number.isFinite(value)) return "ND";
  return `${value.toLocaleString("fr-FR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })} €`;
}

function reviewText(value: string | undefined): string {
  return value?.trim() || "Non renseigné";
}

function reviewNumber(value: number | undefined, suffix = ""): string {
  return value === undefined ? "Non renseigné" : `${value}${suffix}`;
}

function reviewMoney(value: number | undefined): string {
  return value === undefined ? "Non renseigné" : formatMoney(value);
}

function reviewOptionLabel<Value extends string>(
  options: ReadonlyArray<{ value: Value; label: string }>,
  value: Value,
): string {
  return (
    options.find((option) => option.value === value)?.label ??
    "Valeur non reconnue"
  );
}

function reviewDeductibleVat(
  value: SiteAidQuoteLineInput["deductibleVatFraction"],
): string {
  if (typeof value === "number") {
    return `${new Intl.NumberFormat("fr-FR", {
      maximumFractionDigits: 2,
    }).format(value * 100)} % déductible`;
  }
  if (value === "yes") return "Oui — TVA entièrement déductible";
  if (value === "no") return "Non — TVA non déductible";
  return "À confirmer";
}

type ReviewDatum = {
  label: string;
  value: string;
};

function ReviewDataList({ items }: { items: ReadonlyArray<ReviewDatum> }) {
  return (
    <dl className="m-0 grid gap-x-4 gap-y-3 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.label}
          className="border-b border-zinc-200 pb-2 dark:border-zinc-800"
        >
          <dt className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400">
            {item.label}
          </dt>
          <dd
            className={`mb-0 mt-1 break-words text-sm ${
              item.value === "Non renseigné"
                ? "font-semibold text-amber-800 dark:text-amber-300"
                : "text-zinc-900 dark:text-zinc-100"
            }`}
            data-site-aid-review-missing={
              item.value === "Non renseigné" ? "true" : undefined
            }
          >
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function isValidIsoDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  );
}

function normalizedTraceReference(value: string): string {
  return value.normalize("NFKC").replace(/\s+/g, " ").trim();
}

function webUrlCandidates(value: string): string[] {
  return (value.match(/[a-z][a-z0-9+.-]*:\/\/[^\s<>"']+/giu) ?? []).map(
    (candidate) => candidate.replace(/[),.;!?]+$/u, ""),
  );
}

function ipv4AddressParts(value: string): number[] | null {
  const parts = value.split(".").map(Number);
  return parts.length === 4 &&
    parts.every((part) => Number.isInteger(part) && part >= 0 && part <= 255)
    ? parts
    : null;
}

function isNonGlobalIpv4Address(parts: number[]): boolean {
  const [first, second, third] = parts;
  return (
    first === 0 ||
    first === 10 ||
    first === 127 ||
    (first === 100 && second >= 64 && second <= 127) ||
    (first === 169 && second === 254) ||
    (first === 172 && second >= 16 && second <= 31) ||
    (first === 192 && second === 0 && third === 0) ||
    (first === 192 && second === 0 && third === 2) ||
    (first === 192 && second === 88 && third === 99) ||
    (first === 192 && second === 168) ||
    (first === 198 && (second === 18 || second === 19)) ||
    (first === 198 && second === 51 && third === 100) ||
    (first === 203 && second === 0 && third === 113) ||
    first >= 224
  );
}

function isObviouslyPrivateWebHostname(value: string): boolean {
  const hostname = value
    .toLocaleLowerCase("en")
    .replace(/^\[|\]$/gu, "")
    .replace(/\.$/u, "");
  const privateOrReservedSuffixes = [
    "alt",
    "arpa",
    "corp",
    "example",
    "home",
    "internal",
    "intranet",
    "invalid",
    "lan",
    "local",
    "localdomain",
    "localhost",
    "onion",
    "private",
    "test",
  ];
  if (
    privateOrReservedSuffixes.some(
      (suffix) => hostname === suffix || hostname.endsWith(`.${suffix}`),
    ) ||
    hostname === "example.com" ||
    hostname.endsWith(".example.com") ||
    hostname === "example.net" ||
    hostname.endsWith(".example.net") ||
    hostname === "example.org" ||
    hostname.endsWith(".example.org")
  ) {
    return true;
  }

  const ipv4Parts = ipv4AddressParts(hostname);
  if (ipv4Parts) return isNonGlobalIpv4Address(ipv4Parts);

  if (
    hostname === "::" ||
    hostname === "::1" ||
    /^(?:fc|fd|fe[89ab])/u.test(hostname) ||
    hostname.startsWith("2001:db8:")
  ) {
    return true;
  }
  if (hostname.startsWith("::ffff:")) return true;
  return false;
}

function webUrlHasExplicitPort(value: string): boolean {
  const authority =
    value.match(/^[a-z][a-z0-9+.-]*:\/\/([^/?#]*)/iu)?.[1] ?? "";
  const hostAndPort = authority.slice(authority.lastIndexOf("@") + 1);
  return hostAndPort.startsWith("[")
    ? /^\[[^\]]+\]:\d+$/u.test(hostAndPort)
    : /:\d+$/u.test(hostAndPort);
}

function isPlausiblyPublicHttpsUrl(value: string): boolean {
  try {
    const url = new URL(value);
    const hasPlausiblyPublicHostname =
      url.hostname.includes(".") || url.hostname.includes(":");
    return (
      url.protocol === "https:" &&
      url.username === "" &&
      url.password === "" &&
      !webUrlHasExplicitPort(value) &&
      hasPlausiblyPublicHostname &&
      !isObviouslyPrivateWebHostname(url.hostname)
    );
  } catch {
    return false;
  }
}

function hasInvalidOrPrivateWebUrl(value: string): boolean {
  return webUrlCandidates(value).some(
    (candidate) => !isPlausiblyPublicHttpsUrl(candidate),
  );
}

function emailAddressCandidates(value: string): string[] {
  return value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/giu) ?? [];
}

function isPlausiblyPublicEmailAddress(value: string): boolean {
  const hostname = value.slice(value.lastIndexOf("@") + 1);
  return (
    hostname.includes(".") &&
    !hostname.includes(":") &&
    !isObviouslyPrivateWebHostname(hostname)
  );
}

function hasInvalidOrPrivateEmailAddress(value: string): boolean {
  return emailAddressCandidates(value).some(
    (candidate) => !isPlausiblyPublicEmailAddress(candidate),
  );
}

function hasPrivateOrReservedBareWebHostname(value: string): boolean {
  const withoutUrlsOrEmails = normalizedTraceReference(value)
    .replace(/[a-z][a-z0-9+.-]*:\/\/[^\s<>"']+/giu, " ")
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/giu, " ");
  const candidates =
    withoutUrlsOrEmails.match(
      /\b(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z][a-z0-9-]{1,62}\b/giu,
    ) ?? [];
  return candidates.some(isObviouslyPrivateWebHostname);
}

function isManifestPlaceholderTrace(value: string): boolean {
  const normalized = normalizedTraceReference(value);
  const withoutUrlsOrEmails = normalized
    .replace(/[a-z][a-z0-9+.-]*:\/\/[^\s<>"']+/giu, " ")
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/giu, " ");
  const withoutGenericLabel = withoutUrlsOrEmails.replace(
    /^(?:(?:référence(?: officielle| de dépôt)?|accusé(?: officiel)?|numéro|n[°o]|id|ticket|document|portail)\s*[:#—-]?\s*)+/iu,
    "",
  );
  if (
    /^(?:x+|test|exemple|démo|demo|démonstration|factice|fictif|sample|dummy|placeholder|temp)(?=$|[\s._/-]|\d)/iu.test(
      withoutGenericLabel,
    )
  ) {
    return true;
  }

  const identifierTokens =
    withoutUrlsOrEmails.match(/[\p{L}\p{N}]+(?:[._/-][\p{L}\p{N}]+)*/gu) ?? [];
  return identifierTokens.some((token) => {
    const segments = token.split(/[._/-]+/u);
    const hasFakeRoot = segments.some((segment) =>
      /^(?:x+|test|exemple|démo|demo|démonstration|factice|fictif|sample|dummy|placeholder|temp)\d*$/iu.test(
        segment,
      ),
    );
    if (hasFakeRoot && (/[._/-]/u.test(token) || /\d/u.test(token))) {
      return true;
    }
    const digits = token.match(/\d/gu) ?? [];
    const looksLikeIdentifier =
      /[._/-]/u.test(token) ||
      /^\d{5,}$/u.test(token) ||
      (/\p{L}/u.test(token) && /\d/u.test(token));
    return (
      looksLikeIdentifier &&
      digits.length >= 4 &&
      digits.every((digit) => digit === "0")
    );
  });
}

function hasPreciseWebUrl(value: string): boolean {
  const candidates = webUrlCandidates(value);
  return candidates.some((candidate) => {
    try {
      const url = new URL(candidate);
      const hasSpecificLocation =
        url.pathname.split("/").filter(Boolean).length > 0 ||
        url.search.length > 1 ||
        url.hash.length > 1;
      return isPlausiblyPublicHttpsUrl(candidate) && hasSpecificLocation;
    } catch {
      return false;
    }
  });
}

function hasFormalAlphanumericIdentifier(value: string): boolean {
  const tokens =
    normalizedTraceReference(value).match(
      /[\p{L}\p{N}][\p{L}\p{N}._/-]{3,}/gu,
    ) ?? [];
  return tokens.some((token) => {
    if (/^(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)+(?:\/|$)/iu.test(token)) {
      return false;
    }
    if (!/\p{L}/u.test(token) || !/\d/u.test(token)) return false;
    return (
      /[-._/]/u.test(token) ||
      /^[A-ZÀ-ÖØ-Þ]{2,}\d{2,}[A-ZÀ-ÖØ-Þ0-9]*$/u.test(token)
    );
  });
}

function isQualifiedDeadlineDocument(value: string): boolean {
  const normalized = normalizedTraceReference(value).toLocaleLowerCase("fr");
  if (normalized.length < 40 || countSiteAidApplicationWords(normalized) < 7) {
    return false;
  }
  if (
    /\b(?:article|art\.)\s*\d+[\s\S]{0,80}\b(?:règlement|décret|arrêté|délibération|décision)\b[\s\S]{0,80}\d{4}\s*[/.-]\s*\d+/iu.test(
      normalized,
    )
  ) {
    return true;
  }
  const identifiesDocument =
    /\b(?:réponse écrite|courriel|message|document|attestation|règlement|décret|arrêté|délibération|décision|page|portail)\b/iu.test(
      normalized,
    );
  const qualifiers = [
    /\b(?:région|collectivité|epci|ademe|bpifrance|autorité|financeur|administration|service instructeur|chambre consulaire)\b/iu.test(
      normalized,
    ),
    /\b(?:dat[ée]e?|publi[ée]e?|reçue?|émise?)\s+(?:le|du)\s+\d{1,2}\b/iu.test(
      normalized,
    ) || /\b\d{4}-\d{2}-\d{2}\b/u.test(normalized),
    /\b(?:objet|titre|rubrique|programme|dispositif|article|page)\s*[:—-]?\s+\p{L}/iu.test(
      normalized,
    ),
  ].filter(Boolean).length;
  return identifiesDocument && qualifiers >= 2;
}

function isIdentifiableDeadlineOfficialReference(value: string): boolean {
  const normalized = normalizedTraceReference(value);
  if (
    normalized.length < 5 ||
    isManifestPlaceholderTrace(normalized) ||
    hasInvalidOrPrivateWebUrl(normalized) ||
    hasInvalidOrPrivateEmailAddress(normalized) ||
    hasPrivateOrReservedBareWebHostname(normalized) ||
    /^(?:x+|test|exemple|référence|référence officielle|document|document officiel|portail|portail officiel|à confirmer|n\/?a)$/iu.test(
      normalized,
    )
  ) {
    return false;
  }
  return (
    hasPreciseWebUrl(normalized) ||
    hasFormalAlphanumericIdentifier(normalized) ||
    isQualifiedDeadlineDocument(normalized)
  );
}

function isQualifiedSubmissionReceipt(value: string): boolean {
  const normalized = normalizedTraceReference(value);
  const lower = normalized.toLocaleLowerCase("fr");
  if (
    normalized.length < 6 ||
    isManifestPlaceholderTrace(normalized) ||
    hasInvalidOrPrivateWebUrl(normalized) ||
    hasInvalidOrPrivateEmailAddress(normalized) ||
    hasPrivateOrReservedBareWebHostname(normalized) ||
    /^(?:x+|test|exemple|accusé|accusé officiel|référence|référence de dépôt|numéro|courriel|message|à confirmer|n\/?a)$/iu.test(
      normalized,
    )
  ) {
    return false;
  }
  if (
    hasPreciseWebUrl(normalized) ||
    hasFormalAlphanumericIdentifier(normalized)
  ) {
    return true;
  }
  if (
    /\b(?:dossier|dépôt|accusé|ticket|référence|numéro|n[°o]|id)\s*[:#—-]?\s*\d{5,}\b/iu.test(
      normalized,
    )
  ) {
    return true;
  }
  const hasQualifiedEmail =
    /\b(?:courriel|message|accusé|confirmation|reçu|envoyé|objet)\b/iu.test(
      lower,
    ) && emailAddressCandidates(normalized).some(isPlausiblyPublicEmailAddress);
  if (hasQualifiedEmail) return true;

  return (
    normalized.length >= 35 &&
    countSiteAidApplicationWords(normalized) >= 7 &&
    /\b(?:accusé|confirmation|courriel|message|reçu|horodaté|dépôt)\b/iu.test(
      lower,
    ) &&
    (/\b\d{1,2}[/-]\d{1,2}[/-]\d{4}\b/u.test(lower) ||
      /\b\d{4}-\d{2}-\d{2}\b/u.test(lower)) &&
    /\b(?:objet|expéditeur|destinataire|reçu|envoyé|horodaté)\b/iu.test(lower)
  );
}

function isValidTimeZone(value: string): boolean {
  if (
    value.length > 100 ||
    !/^(?:UTC|[A-Za-z_+-]+(?:\/[A-Za-z0-9_+-]+)+)$/.test(value)
  ) {
    return false;
  }
  try {
    new Intl.DateTimeFormat("fr-FR", { timeZone: value }).format();
    return true;
  } catch {
    return false;
  }
}

function isValidAbsoluteInstant(value: string): boolean {
  return (
    value.length <= 64 &&
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?(?:Z|[+-]\d{2}:\d{2})$/.test(
      value,
    ) &&
    Number.isFinite(Date.parse(value))
  );
}

const zonedMinuteFormatterCache = new Map<string, Intl.DateTimeFormat>();

function zonedMinuteParts(
  instant: number,
  timeZone: string,
): {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
} {
  let formatter = zonedMinuteFormatterCache.get(timeZone);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    });
    zonedMinuteFormatterCache.set(timeZone, formatter);
  }
  const parts = Object.fromEntries(
    formatter
      .formatToParts(new Date(instant))
      .filter((part) => part.type !== "literal")
      .map((part) => [part.type, Number(part.value)]),
  );
  return {
    year: parts.year,
    month: parts.month,
    day: parts.day,
    hour: parts.hour,
    minute: parts.minute,
  };
}

function zonedIsoDate(instant: number, timeZone: string): string {
  const local = zonedMinuteParts(instant, timeZone);
  return [local.year, local.month, local.day]
    .map((part, index) => String(part).padStart(index === 0 ? 4 : 2, "0"))
    .join("-");
}

function applicationEvaluationLocalDate(
  application: SiteAidApplicationPreparation,
): string | undefined {
  if (
    !isValidAbsoluteInstant(application.deadlineEvaluationInstant) ||
    !isValidTimeZone(application.deadlineEvaluationTimeZone)
  ) {
    return undefined;
  }
  return zonedIsoDate(
    Date.parse(application.deadlineEvaluationInstant),
    application.deadlineEvaluationTimeZone,
  );
}

function zonedLocalMinuteCandidates(
  date: string,
  time: string,
  timeZone: string,
): number[] {
  if (
    !isValidIsoDate(date) ||
    !/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(time) ||
    !isValidTimeZone(timeZone)
  ) {
    return [];
  }
  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);
  const intended = { year, month, day, hour, minute };
  const naiveUtc = Date.UTC(year, month - 1, day, hour, minute);
  const offsets = new Set<number>();
  for (let sampleHour = -48; sampleHour <= 48; sampleHour += 6) {
    const sample = naiveUtc + sampleHour * 60 * 60 * 1_000;
    const local = zonedMinuteParts(sample, timeZone);
    offsets.add(
      Date.UTC(
        local.year,
        local.month - 1,
        local.day,
        local.hour,
        local.minute,
      ) - sample,
    );
  }
  const candidates = [...offsets]
    .map((offset) => naiveUtc - offset)
    .filter((candidate) => {
      const local = zonedMinuteParts(candidate, timeZone);
      return (
        local.year === intended.year &&
        local.month === intended.month &&
        local.day === intended.day &&
        local.hour === intended.hour &&
        local.minute === intended.minute
      );
    });
  return [...new Set(candidates)].sort((left, right) => left - right);
}

function browserTimeZone(): string {
  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return timeZone && isValidTimeZone(timeZone) ? timeZone : "UTC";
  } catch {
    return "UTC";
  }
}

function applicationWithEvaluationInstant(
  application: SiteAidApplicationPreparation,
  now = new Date(),
): SiteAidApplicationPreparation {
  return {
    ...application,
    deadlineEvaluationInstant: now.toISOString(),
    deadlineEvaluationTimeZone: browserTimeZone(),
  };
}

function applicationDeadlineTraceIsUsable(
  application: SiteAidApplicationPreparation,
): boolean {
  if (application.deadlineStatus === "unpublished") return true;
  const evaluationLocalDate = applicationEvaluationLocalDate(application);
  return (
    isIdentifiableDeadlineOfficialReference(
      application.deadlineOfficialReference,
    ) &&
    isValidIsoDate(application.deadlineVerificationDate) &&
    Boolean(evaluationLocalDate) &&
    application.deadlineVerificationDate <= (evaluationLocalDate ?? "")
  );
}

function applicationPreparationIssues(
  application: SiteAidApplicationPreparation,
  input: SiteAidDecisionInput,
): ApplicationIssue[] {
  const issues: ApplicationIssue[] = [];
  const add = (targetId: string, message: string) => {
    issues.push({ targetId, message });
  };

  if (application.awardMode === "unknown") {
    add(
      issueFieldIds.applicationAwardMode,
      "Candidature : confirmez si l’attribution relève d’un droit ou d’une sélection.",
    );
  }
  if (!application.funderObjectives.trim()) {
    add(
      issueFieldIds.applicationFunderObjectives,
      "Candidature : consignez les objectifs publiés par le financeur.",
    );
  }
  if (!application.selectionCriteria.trim()) {
    add(
      issueFieldIds.applicationSelectionCriteria,
      "Candidature : consignez les critères de sélection ou les conditions d’attribution.",
    );
  }
  if (!application.submissionChannel.trim()) {
    add(
      issueFieldIds.applicationSubmissionChannel,
      "Candidature : confirmez le canal officiel de dépôt.",
    );
  }
  const evaluationLocalDate = applicationEvaluationLocalDate(application);
  if (application.deadlineStatus !== "unpublished") {
    if (
      !isIdentifiableDeadlineOfficialReference(
        application.deadlineOfficialReference,
      )
    ) {
      add(
        issueFieldIds.applicationDeadlineOfficialReference,
        application.deadlineStatus === "permanent"
          ? "Candidature : un guichet permanent exige une référence officielle identifiable : URL HTTPS publique et précise sans identifiants ni port explicite, référence formelle mêlant lettres et chiffres, ou réponse/document suffisamment qualifié. Ce contrôle de plausibilité formelle n’authentifie pas la source."
          : "Candidature : une date exacte exige une référence officielle identifiable : URL HTTPS publique et précise sans identifiants ni port explicite, référence formelle mêlant lettres et chiffres, ou réponse/document suffisamment qualifié. Ce contrôle de plausibilité formelle n’authentifie pas la source.",
      );
    }
    if (!application.deadlineVerificationDate.trim()) {
      add(
        issueFieldIds.applicationDeadlineVerificationDate,
        application.deadlineStatus === "permanent"
          ? "Candidature : datez la vérification de la référence officielle du guichet permanent."
          : "Candidature : datez la vérification de la référence officielle de la date exacte.",
      );
    }
  }
  if (application.deadlineStatus === "unpublished") {
    add(
      issueFieldIds.applicationDeadlineStatus,
      "Candidature : la date limite n’est pas publiée ; l’instruction reste suspendue jusqu’à une date exacte ou à la confirmation officielle d’un guichet permanent.",
    );
  } else if (application.deadlineStatus === "exact-date") {
    const deadlineDateValid = isValidIsoDate(application.deadline);
    const deadlineTimeValid =
      !application.deadlineTime ||
      /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(application.deadlineTime);
    const deadlineTimeZoneValid = isValidTimeZone(application.deadlineTimeZone);
    if (!application.deadline.trim()) {
      add(
        issueFieldIds.applicationDeadline,
        "Candidature : renseignez la date limite officielle.",
      );
    } else if (!deadlineDateValid) {
      add(
        issueFieldIds.applicationDeadline,
        "Candidature : la date limite doit être une date réelle au format AAAA-MM-JJ.",
      );
    }
    if (!deadlineTimeValid) {
      add(
        issueFieldIds.applicationDeadlineTime,
        "Candidature : l’heure limite doit être une heure réelle au format HH:MM.",
      );
    }
    if (!application.deadlineTimeZone.trim()) {
      add(
        issueFieldIds.applicationDeadlineTimeZone,
        "Candidature : renseignez le fuseau officiel du guichet même si aucune heure limite n’est publiée.",
      );
    } else if (!deadlineTimeZoneValid) {
      add(
        issueFieldIds.applicationDeadlineTimeZone,
        "Candidature : le fuseau doit être un identifiant IANA valide, par exemple Europe/Paris.",
      );
    }
    if (
      application.deadlineEvaluationInstant &&
      !isValidAbsoluteInstant(application.deadlineEvaluationInstant)
    ) {
      add(
        issueFieldIds.applicationDeadlineEvaluationInstant,
        "Candidature : l’instant absolu d’évaluation conservé dans le brouillon est invalide.",
      );
    }
    if (
      application.deadlineEvaluationTimeZone &&
      !isValidTimeZone(application.deadlineEvaluationTimeZone)
    ) {
      add(
        issueFieldIds.applicationDeadlineEvaluationInstant,
        "Candidature : le fuseau de l’évaluation conservée dans le brouillon est invalide.",
      );
    }
    if (
      Boolean(application.deadlineEvaluationInstant) !==
      Boolean(application.deadlineEvaluationTimeZone)
    ) {
      add(
        issueFieldIds.applicationDeadlineEvaluationInstant,
        "Candidature : l’instant absolu et le fuseau de l’évaluation doivent être conservés ensemble.",
      );
    }
    if (
      input.aid.stage === "none" &&
      deadlineDateValid &&
      isValidAbsoluteInstant(application.deadlineEvaluationInstant)
    ) {
      const evaluatedAt = Date.parse(application.deadlineEvaluationInstant);
      if (
        application.deadlineTime &&
        application.deadlineTimeZone &&
        deadlineTimeValid &&
        deadlineTimeZoneValid
      ) {
        const deadlineCandidates = zonedLocalMinuteCandidates(
          application.deadline,
          application.deadlineTime,
          application.deadlineTimeZone,
        );
        if (deadlineCandidates.length === 0) {
          add(
            issueFieldIds.applicationDeadlineTime,
            "Candidature : cette heure locale n’existe pas dans le fuseau indiqué lors du changement d’heure ; obtenez une échéance non ambiguë.",
          );
        } else if (deadlineCandidates.length > 1) {
          add(
            issueFieldIds.applicationDeadlineTime,
            "Candidature : cette heure locale est ambiguë dans le fuseau indiqué lors du changement d’heure ; obtenez l’instant exact de clôture.",
          );
        } else if (evaluatedAt >= deadlineCandidates[0]) {
          add(
            issueFieldIds.applicationDeadline,
            "Candidature : le guichet est déclaré clos à l’instant absolu d’évaluation. Confirmez une nouvelle période officielle avant notification.",
          );
        }
      } else if (deadlineTimeZoneValid) {
        const evaluationDate = zonedIsoDate(
          evaluatedAt,
          application.deadlineTimeZone,
        );
        if (application.deadline < evaluationDate) {
          add(
            issueFieldIds.applicationDeadline,
            "Candidature : le guichet est déclaré clos à la date locale du guichet. Confirmez une nouvelle période officielle avant notification.",
          );
        } else if (application.deadline === evaluationDate) {
          add(
            issueFieldIds.applicationDeadlineTime,
            "Candidature : la clôture intervient le jour local du guichet, mais son heure n’est pas publiée ; l’instruction reste suspendue.",
          );
        }
      }
    }
  }
  if (
    application.deadlineStatus !== "unpublished" &&
    application.deadlineVerificationDate.trim()
  ) {
    if (!isValidIsoDate(application.deadlineVerificationDate)) {
      add(
        issueFieldIds.applicationDeadlineVerificationDate,
        "Candidature : la date de vérification de l’échéance doit être réelle au format AAAA-MM-JJ.",
      );
    } else if (
      evaluationLocalDate &&
      application.deadlineVerificationDate > evaluationLocalDate
    ) {
      add(
        issueFieldIds.applicationDeadlineVerificationDate,
        "Candidature : la date de vérification ne peut pas être postérieure à la date locale de l’analyse.",
      );
    }
  }
  const submissionTracePresent =
    Boolean(application.submissionDate.trim()) ||
    Boolean(application.submissionReceiptReference.trim()) ||
    application.submittedPackageMatchesPreparedPackage !== "unknown";
  const submissionIsDeclared =
    application.submissionStatus !== "unknown" &&
    application.submissionStatus !== "not-submitted";

  if (
    (application.submissionStatus === "unknown" ||
      application.submissionStatus === "not-submitted") &&
    submissionTracePresent
  ) {
    add(
      issueFieldIds.applicationSubmissionStatus,
      "Suivi après dépôt : des traces de dépôt sont renseignées alors que le statut ne confirme aucun dépôt. Corrigez le statut ou videz ces traces.",
    );
  } else if (submissionIsDeclared) {
    if (!application.submissionDate.trim()) {
      add(
        issueFieldIds.applicationSubmissionDate,
        "Suivi après dépôt : renseignez la date civile du dépôt réellement effectué.",
      );
    } else if (!isValidIsoDate(application.submissionDate)) {
      add(
        issueFieldIds.applicationSubmissionDate,
        "Suivi après dépôt : la date de dépôt doit être une date réelle au format AAAA-MM-JJ.",
      );
    } else {
      if (
        evaluationLocalDate &&
        application.submissionDate > evaluationLocalDate
      ) {
        add(
          issueFieldIds.applicationSubmissionDate,
          "Suivi après dépôt : la date de dépôt ne peut pas être postérieure à la date locale de l’analyse.",
        );
      }
      if (
        application.deadlineStatus === "exact-date" &&
        isValidIsoDate(application.deadline) &&
        application.submissionDate > application.deadline
      ) {
        add(
          issueFieldIds.applicationSubmissionDate,
          "Suivi après dépôt : la date déclarée est postérieure à la clôture officielle ; vérifiez l’accusé et la période applicable.",
        );
      }
    }
    if (!isQualifiedSubmissionReceipt(application.submissionReceiptReference)) {
      add(
        issueFieldIds.applicationSubmissionReceipt,
        "Suivi après dépôt : consignez un accusé ou une référence de dépôt identifiable : numéro qualifié, URL HTTPS publique et précise sans identifiants ni port explicite, courriel traçable sur un domaine public ou référence formelle. Ce contrôle de plausibilité formelle n’authentifie pas l’accusé.",
      );
    }
    if (application.submittedPackageMatchesPreparedPackage === "unknown") {
      add(
        issueFieldIds.applicationSubmittedPackageCheck,
        "Suivi après dépôt : comparez le dossier réellement transmis avec le dossier préparé et consignez le résultat.",
      );
    } else if (application.submittedPackageMatchesPreparedPackage === "no") {
      add(
        issueFieldIds.applicationSubmittedPackageCheck,
        "Suivi après dépôt : le dossier transmis diffère du dossier préparé ; archivez la version exacte déposée et documentez les écarts.",
      );
    }
  }
  if (
    application.preparationTimeHours === undefined ||
    !Number.isFinite(application.preparationTimeHours) ||
    application.preparationTimeHours <= 0
  ) {
    add(
      issueFieldIds.applicationPreparationTime,
      "Candidature : estimez un temps de préparation strictement supérieur à zéro.",
    );
  }
  if (!application.deliverables.trim()) {
    add(
      issueFieldIds.applicationDeliverables,
      "Candidature : décrivez les livrables promis sans prétendre qu’ils seront acceptés.",
    );
  }
  if (!application.expectedResults.trim()) {
    add(
      issueFieldIds.applicationExpectedResults,
      "Candidature : décrivez les résultats attendus et leur mode de constat.",
    );
  }
  if (!application.schedule.trim()) {
    add(
      issueFieldIds.applicationSchedule,
      "Candidature : renseignez le calendrier prévisionnel du projet.",
    );
  }
  if (!application.budgetJustification.trim()) {
    add(
      issueFieldIds.applicationBudgetJustification,
      "Candidature : reliez le budget aux besoins, livrables et preuves disponibles.",
    );
  }
  if (
    application.awardMode === "selection" &&
    application.criteria.length === 0
  ) {
    add(
      "site-aid-application-criterion-section",
      "Candidature : ajoutez au moins un critère publié à traiter.",
    );
  }
  application.criteria.forEach((criterion, index) => {
    if (application.awardMode !== "selection") return;
    const responseWordCount = countSiteAidApplicationWords(
      criterion.projectResponse,
    );
    if (!criterion.publishedCriterion.trim()) {
      add(
        applicationCriterionIssueFieldId(index, "published-criterion"),
        `Candidature, critère ${index + 1} : recopiez le critère publié.`,
      );
    }
    if (!criterion.projectResponse.trim()) {
      add(
        applicationCriterionIssueFieldId(index, "project-response"),
        `Candidature, critère ${index + 1} : rédigez la réponse déclarative du projet.`,
      );
    }
    if (!criterion.evidence.trim()) {
      add(
        applicationCriterionIssueFieldId(index, "evidence"),
        `Candidature, critère ${index + 1} : associez une preuve à confirmer.`,
      );
    }
    if (!criterion.owner.trim()) {
      add(
        applicationCriterionIssueFieldId(index, "owner"),
        `Candidature, critère ${index + 1} : désignez un responsable.`,
      );
    }
    if (
      criterion.wordLimit !== undefined &&
      (!Number.isInteger(criterion.wordLimit) ||
        criterion.wordLimit <= 0 ||
        criterion.wordLimit > 100_000)
    ) {
      add(
        applicationCriterionIssueFieldId(index, "word-limit"),
        `Candidature, critère ${index + 1} : si une limite de mots est publiée, indiquez un entier entre 1 et 100 000.`,
      );
    } else if (
      criterion.wordLimit !== undefined &&
      responseWordCount > criterion.wordLimit
    ) {
      add(
        applicationCriterionIssueFieldId(index, "project-response"),
        `Candidature, critère ${index + 1} : la réponse contient ${responseWordCount} mots et dépasse la limite publiée de ${criterion.wordLimit} mots.`,
      );
    }
  });
  if (!application.finalReviewer.trim()) {
    add(
      issueFieldIds.applicationFinalReviewer,
      "Candidature : désignez la personne chargée de la relecture finale.",
    );
  }
  if (application.finalValidationStatus === "unknown") {
    add(
      issueFieldIds.applicationFinalValidation,
      "Candidature : le statut de validation finale reste à confirmer.",
    );
  } else if (application.finalValidationStatus === "no") {
    add(
      issueFieldIds.applicationFinalValidation,
      "Candidature : la validation finale n’est pas encore réalisée.",
    );
  } else if (
    application.documents.some(
      (document) =>
        document.status !== "ready" && document.status !== "not-applicable",
    )
  ) {
    add(
      issueFieldIds.applicationFinalValidation,
      "Candidature : la validation finale est déclarée, mais au moins une pièce reste à obtenir, en cours ou à confirmer.",
    );
  }
  if (application.documents.length === 0) {
    add(
      "site-aid-application-document-section",
      "Candidature : ajoutez au moins une pièce à la liste de préparation.",
    );
  }

  application.documents.forEach((document, index) => {
    if (!document.label.trim()) {
      add(
        applicationDocumentIssueFieldId(index, "label"),
        `Candidature, pièce ${index + 1} : renseignez le nom de la pièce.`,
      );
    }
    if (document.status === "unknown") {
      add(
        applicationDocumentIssueFieldId(index, "status"),
        `Candidature, pièce ${index + 1} : confirmez le statut de préparation.`,
      );
    }
    if (document.status === "not-applicable") {
      if (!document.notApplicableJustification.trim()) {
        add(
          applicationDocumentIssueFieldId(
            index,
            "not-applicable-justification",
          ),
          `Candidature, pièce ${index + 1} : justifiez obligatoirement pourquoi la pièce est non applicable.`,
        );
      }
    } else {
      if (!document.owner.trim()) {
        add(
          applicationDocumentIssueFieldId(index, "owner"),
          `Candidature, pièce ${index + 1} : désignez le responsable.`,
        );
      }
      if (!document.format.trim()) {
        add(
          applicationDocumentIssueFieldId(index, "format"),
          `Candidature, pièce ${index + 1} : confirmez le format attendu.`,
        );
      }
      if (document.signatureStatus === "unknown") {
        add(
          applicationDocumentIssueFieldId(index, "signature"),
          `Candidature, pièce ${index + 1} : confirmez l’exigence de signature.`,
        );
      } else if (
        document.status === "ready" &&
        document.signatureStatus === "required"
      ) {
        add(
          applicationDocumentIssueFieldId(index, "signature"),
          `Candidature, pièce ${index + 1} : la pièce est déclarée prête mais sa signature reste requise.`,
        );
      }
      if (!document.deadline.trim()) {
        add(
          applicationDocumentIssueFieldId(index, "deadline"),
          `Candidature, pièce ${index + 1} : renseignez l’échéance de préparation.`,
        );
      } else if (!isValidIsoDate(document.deadline)) {
        add(
          applicationDocumentIssueFieldId(index, "deadline"),
          `Candidature, pièce ${index + 1} : l’échéance doit être une date réelle au format AAAA-MM-JJ.`,
        );
      } else if (
        input.aid.stage === "none" &&
        application.deadlineStatus === "exact-date" &&
        isValidIsoDate(application.deadline) &&
        document.deadline > application.deadline
      ) {
        add(
          applicationDocumentIssueFieldId(index, "deadline"),
          `Candidature, pièce ${index + 1} : l’échéance de préparation est postérieure à la clôture du guichet.`,
        );
      }
    }
  });

  return issues;
}

function safeApplicationReportText(value: string): string {
  const normalized = value
    .replace(/\\/g, "\\\\")
    .replace(/\r/g, "\\r")
    .replace(/\n/g, "\\n")
    .replace(/\t/g, "\\t")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, " ");
  return normalized.trim() || "Non renseigné";
}

function buildApplicationPreparationReport(
  application: SiteAidApplicationPreparation,
  issues: ReadonlyArray<ApplicationIssue>,
): string {
  const lines = [
    "",
    "============================================================",
    "PRÉPARATION DE LA CANDIDATURE",
    `Version : ${SITE_AID_APPLICATION_PREPARATION_VERSION}`,
    "============================================================",
    `Mode d’attribution : ${safeApplicationReportText(
      reviewOptionLabel(applicationAwardModeOptions, application.awardMode),
    )}`,
    `Objectifs du financeur : ${safeApplicationReportText(
      application.funderObjectives,
    )}`,
    `Critères/conditions : ${safeApplicationReportText(
      application.selectionCriteria,
    )}`,
    `Canal officiel : ${safeApplicationReportText(
      application.submissionChannel,
    )}`,
    `Statut après dépôt : ${safeApplicationReportText(
      reviewOptionLabel(
        applicationSubmissionStatusOptions,
        application.submissionStatus,
      ),
    )}`,
    `Date du dépôt réellement effectué : ${safeApplicationReportText(
      application.submissionDate,
    )}`,
    `Accusé ou référence de dépôt : ${safeApplicationReportText(
      application.submissionReceiptReference,
    )}`,
    `Dossier transmis identique au dossier préparé : ${safeApplicationReportText(
      reviewOptionLabel(
        applicationSubmittedPackageCheckOptions,
        application.submittedPackageMatchesPreparedPackage,
      ),
    )}`,
    `Statut de l’échéance : ${safeApplicationReportText(
      reviewOptionLabel(
        applicationDeadlineStatusOptions,
        application.deadlineStatus,
      ),
    )}`,
    `Date limite : ${
      application.deadlineStatus === "exact-date"
        ? safeApplicationReportText(application.deadline)
        : "Sans objet"
    }`,
    `Heure limite : ${
      application.deadlineStatus === "exact-date"
        ? safeApplicationReportText(application.deadlineTime)
        : "Sans objet"
    }`,
    `Fuseau de la clôture : ${
      application.deadlineStatus === "exact-date"
        ? safeApplicationReportText(application.deadlineTimeZone)
        : "Sans objet"
    }`,
    `Référence officielle de l’échéance : ${safeApplicationReportText(
      application.deadlineOfficialReference,
    )}`,
    `Référence vérifiée le : ${safeApplicationReportText(
      application.deadlineVerificationDate,
    )}`,
    `Instant absolu évalué : ${safeApplicationReportText(
      application.deadlineEvaluationInstant,
    )}`,
    `Fuseau du navigateur lors de l’évaluation : ${safeApplicationReportText(
      application.deadlineEvaluationTimeZone,
    )}`,
    `Temps de préparation : ${
      application.preparationTimeHours === undefined
        ? "Non renseigné"
        : `${application.preparationTimeHours} h`
    }`,
    `Relecteur final : ${safeApplicationReportText(application.finalReviewer)}`,
    `Validation finale : ${safeApplicationReportText(
      reviewOptionLabel(
        applicationFinalValidationOptions,
        application.finalValidationStatus,
      ),
    )}`,
    `Livrables : ${safeApplicationReportText(application.deliverables)}`,
    `Résultats attendus : ${safeApplicationReportText(
      application.expectedResults,
    )}`,
    `Calendrier : ${safeApplicationReportText(application.schedule)}`,
    `Justification budgétaire : ${safeApplicationReportText(
      application.budgetJustification,
    )}`,
    "",
    "MATRICE DES CRITÈRES PUBLIÉS",
  ];

  if (application.awardMode === "right") {
    lines.push("- Sans objet — aide de droit.");
  } else if (application.awardMode !== "selection") {
    lines.push("- Mode d’attribution à confirmer ; matrice non applicable.");
  } else if (application.criteria.length === 0) {
    lines.push("- Aucun critère publié renseigné.");
  } else {
    application.criteria.forEach((criterion, index) => {
      lines.push(
        `${index + 1}. Critère publié : ${safeApplicationReportText(
          criterion.publishedCriterion,
        )}`,
        `   Réponse du projet : ${safeApplicationReportText(
          criterion.projectResponse,
        )}`,
        `   Nombre de mots détecté : ${countSiteAidApplicationWords(
          criterion.projectResponse,
        )}`,
        `   Preuve : ${safeApplicationReportText(criterion.evidence)}`,
        `   Responsable : ${safeApplicationReportText(criterion.owner)}`,
        `   Limite : ${
          criterion.wordLimit === undefined
            ? "Non publiée"
            : `${criterion.wordLimit} mots`
        }`,
      );
    });
  }

  lines.push("", "PIÈCES À PRÉPARER");

  if (application.documents.length === 0) {
    lines.push("- Aucune pièce renseignée.");
  } else {
    application.documents.forEach((document, index) => {
      const isNotApplicable = document.status === "not-applicable";
      lines.push(
        `${index + 1}. ${safeApplicationReportText(document.label)}`,
        `   Statut : ${safeApplicationReportText(
          reviewOptionLabel(applicationDocumentStatusOptions, document.status),
        )}`,
        `   Responsable : ${
          isNotApplicable
            ? "Sans objet"
            : safeApplicationReportText(document.owner)
        }`,
        `   Format : ${
          isNotApplicable
            ? "Sans objet"
            : safeApplicationReportText(document.format)
        }`,
        `   Signature : ${
          isNotApplicable
            ? "Sans objet"
            : safeApplicationReportText(
                reviewOptionLabel(
                  applicationSignatureStatusOptions,
                  document.signatureStatus,
                ),
              )
        }`,
        `   Échéance : ${
          isNotApplicable
            ? "Sans objet"
            : safeApplicationReportText(document.deadline)
        }`,
        `   Justification non applicable : ${safeApplicationReportText(
          document.notApplicableJustification,
        )}`,
      );
    });
  }

  lines.push("", "POINTS DE PRÉPARATION À TRAITER");
  if (issues.length === 0) {
    lines.push("- Aucun champ de préparation incomplet détecté par l’outil.");
  } else {
    issues.forEach((issue) =>
      lines.push(`- ${safeApplicationReportText(issue.message)}`),
    );
  }
  lines.push(
    "",
    "Limite : cette préparation ne remplace ni le règlement de l’aide, ni la plateforme officielle, ni la décision de l’autorité compétente.",
  );
  return lines.join("\n");
}

function buildPreDiagnosisReport(
  prediagnosis: SiteAidPreDiagnosisTransfer,
): string {
  if (!prediagnosis.transferredAt) {
    return [
      "",
      "============================================================",
      "PRÉDIAGNOSTIC — AUCUN TRANSFERT",
      "============================================================",
      "Aucun prédiagnostic n’a été transféré. Cet état est facultatif et neutre : les quatorze valeurs techniques « à confirmer » d’un brouillon vierge ou d’une migration R23/R24 ne constituent aucune réponse déclarée.",
    ].join("\n");
  }
  const lines = [
    "",
    "============================================================",
    "PRÉDIAGNOSTIC TRANSFÉRÉ — DÉCLARATIF, À CONFIRMER",
    "============================================================",
    `Transféré le : ${safeApplicationReportText(prediagnosis.transferredAt)}`,
  ];
  prediagnosis.items.forEach((item, index) => {
    const status =
      item.status === "documented"
        ? "Oui documenté — déclaration à confirmer"
        : item.status === "no"
          ? "NON — BLOQUEUR DÉCLARATIF"
          : "À confirmer";
    lines.push(
      `${index + 1}. ${safeApplicationReportText(item.label)}`,
      `   Statut : ${status}`,
      `   Preuve attendue : ${safeApplicationReportText(
        item.evidenceToConfirm,
      )}`,
      `   Preuve déclarée : ${safeApplicationReportText(
        item.declaredEvidence,
      )}`,
    );
  });
  lines.push(
    "",
    "Limite : ce transfert ne transforme aucune réponse en fait juridique, financier ou d’éligibilité. Les détails et pièces doivent être confirmés.",
  );
  return lines.join("\n");
}

const PREDIAGNOSIS_INCOMPLETE_EXPLANATION =
  "DOSSIER INCOMPLET — PRÉDIAGNOSTIC À RÉSOUDRE";
const APPLICATION_INCOMPLETE_EXPLANATION =
  "DOSSIER INCOMPLET — CANDIDATURE À FINALISER";
const APPLICATION_AND_PREDIAGNOSIS_INCOMPLETE_EXPLANATION =
  "DOSSIER INCOMPLET — CANDIDATURE ET PRÉDIAGNOSTIC À RÉSOUDRE";

function effectiveIncompleteExplanation(
  applicationIssueCount: number,
  prediagnosisIssueCount: number,
): string | undefined {
  if (applicationIssueCount > 0 && prediagnosisIssueCount > 0) {
    return APPLICATION_AND_PREDIAGNOSIS_INCOMPLETE_EXPLANATION;
  }
  if (applicationIssueCount > 0) return APPLICATION_INCOMPLETE_EXPLANATION;
  if (prediagnosisIssueCount > 0) {
    return PREDIAGNOSIS_INCOMPLETE_EXPLANATION;
  }
  return undefined;
}

function resolveEffectiveSiteAidDecision(
  result: Pick<
    ReturnType<typeof calculateSiteAidDecision>,
    "code" | "explanation"
  >,
  applicationIssueCount: number,
  prediagnosisIssueCount: number,
): {
  code: SiteAidDecisionCode;
  explanation: string;
  compositeIncompleteExplanation?: string;
} {
  if (result.code === "invalid" || result.code === "excluded") {
    return {
      code: result.code,
      explanation: result.explanation,
    };
  }
  const compositeIncompleteExplanation = effectiveIncompleteExplanation(
    applicationIssueCount,
    prediagnosisIssueCount,
  );
  if (compositeIncompleteExplanation) {
    return {
      code: "incomplete",
      explanation: compositeIncompleteExplanation,
      compositeIncompleteExplanation,
    };
  }
  return {
    code: result.code,
    explanation: result.explanation,
  };
}

function buildEffectiveSiteAidDecisionReport(
  input: SiteAidDecisionInput,
  result: ReturnType<typeof calculateSiteAidDecision>,
  applicationIssues: ReadonlyArray<ApplicationIssue>,
  prediagnosisIssues: ReadonlyArray<ApplicationIssue>,
  analysisDate: string,
): string {
  const factualReport = buildSiteAidDecisionReport(input, { analysisDate });
  const effectiveDecision = resolveEffectiveSiteAidDecision(
    result,
    applicationIssues.length,
    prediagnosisIssues.length,
  );
  const effectiveExplanation = effectiveDecision.compositeIncompleteExplanation;
  if (!effectiveExplanation) return factualReport;
  const markedFactualReport = factualReport.replace(
    `Verdict : ${result.explanation}`,
    `Verdict global : ${effectiveExplanation}\nRésultat moteur intermédiaire — conservé pour audit, mais non applicable comme verdict global tant que les corrections déclaratives restent ouvertes : ${result.explanation}`,
  );
  const suspensionReasons = [];
  if (applicationIssues.length > 0) {
    suspensionReasons.push(
      `${applicationIssues.length} point(s) de préparation de candidature restent à corriger. Ils suspendent tout verdict favorable sans modifier le résultat propre du moteur.`,
    );
  }
  if (prediagnosisIssues.length > 0) {
    suspensionReasons.push(
      `${prediagnosisIssues.length} réponse(s) « non » ou « à confirmer » ont été transférées. Elles ne prouvent aucune exclusion juridique, mais suspendent tout verdict favorable jusqu’à résolution.`,
    );
  }
  return [
    "============================================================",
    "SYNTHÈSE GLOBALE R31",
    "============================================================",
    `État effectif : ${effectiveExplanation}`,
    ...suspensionReasons,
    "",
    markedFactualReport,
  ].join("\n");
}

function resultLiveSummary(
  result: ReturnType<typeof calculateSiteAidDecision>,
  stage: SiteAidStage,
  applicationIssueCount = 0,
  prediagnosisIssueCount = 0,
): string {
  const issueCount =
    result.invalidIssues.length +
    result.missingEvidence.length +
    result.exclusionReasons.length +
    result.warnings.length +
    result.toolLimitations.length +
    applicationIssueCount +
    prediagnosisIssueCount;
  const displayedContribution =
    stage === "received"
      ? result.actualFinancialContribution
      : stage === "notified"
        ? result.approvedFinancialContributionUnderConditions
        : result.budgetedAid;
  const contributionLabel =
    stage === "received"
      ? displayedContribution === undefined
        ? "Contribution déclarée — non validée"
        : "Contribution réalisée"
      : stage === "notified"
        ? displayedContribution === undefined
          ? "Contribution déclarée — non validée"
          : "Contribution approuvée"
        : "Aide budgétée";
  const displayedCost =
    stage === "received"
      ? result.realizedCostAfterReceipt
      : stage === "notified"
        ? result.conditionalCostAfterNotification
        : undefined;
  const costLabel =
    stage === "received" && displayedCost === undefined
      ? "Coût réalisé non calculable"
      : stage === "received"
        ? "Coût réalisé"
        : stage === "notified" && displayedCost === undefined
          ? "Coût conditionnel non calculable"
          : "Coût conditionnel";
  const effectiveDecision = resolveEffectiveSiteAidDecision(
    result,
    applicationIssueCount,
    prediagnosisIssueCount,
  );
  const globalDetails = [
    applicationIssueCount > 0
      ? `${applicationIssueCount} point(s) de candidature à corriger`
      : "",
    prediagnosisIssueCount > 0
      ? `${prediagnosisIssueCount} réponse(s) déclarative(s) à résoudre, sans exclusion juridique déduite`
      : "",
  ].filter(Boolean);
  const explanation = effectiveDecision.compositeIncompleteExplanation
    ? `${effectiveDecision.explanation}. ${globalDetails.join(" ; ")}`
    : effectiveDecision.explanation;
  return `${explanation}. Facture TTC : ${formatMoney(
    result.invoiceTotalIncludingVat,
  )}. ${contributionLabel} : ${formatMoney(
    displayedContribution,
  )}. ${costLabel} : ${formatMoney(
    displayedCost,
  )}. Besoin maximal de trésorerie : ${formatMoney(
    result.maximumCashNeed,
  )}. ${issueCount} point${issueCount > 1 ? "s" : ""} à relire.`;
}

function resultHasCorrectiveIssues(
  result: ReturnType<typeof calculateSiteAidDecision>,
): boolean {
  return (
    result.invalidIssues.length > 0 ||
    result.missingEvidence.length > 0 ||
    result.exclusionReasons.length > 0
  );
}

function resultValue(label: string, value: number | undefined, note?: string) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
      <dt className="text-[11px] font-bold uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-400">
        {label}
      </dt>
      <dd className="mb-0 mt-2">
        <span className="block text-lg font-black text-zinc-950 dark:text-white">
          {formatMoney(value)}
        </span>
        {note ? (
          <span className="mt-1 block text-[11px] font-normal leading-relaxed text-zinc-500 dark:text-zinc-400">
            {note}
          </span>
        ) : null}
      </dd>
    </div>
  );
}

function costResultNote(note: string): string {
  return `${note} ${COST_ACCOUNTING_BOUNDARY}`;
}

type DynamicRowKind =
  "quote" | "register" | "application-document" | "application-criterion";

type ApplicationIssue = {
  targetId: string;
  message: string;
};

type QuoteIssueField =
  | "label"
  | "amount"
  | "vat-rate"
  | "deductible-vat"
  | "eligibility"
  | "evidence";

type RegisterIssueField =
  | "authority"
  | "scheme"
  | "legal-basis-status"
  | "de-minimis-regime"
  | "sgei-entrustment-status"
  | "sgei-entrustment-evidence"
  | "sgei-service-identity"
  | "sgei-compensation-status"
  | "sgei-compensation-evidence"
  | "sgei-relation-to-current-status"
  | "sgei-relation-to-current-evidence"
  | "non-de-minimis-basis"
  | "non-de-minimis-evidence"
  | "member-state"
  | "single-undertaking"
  | "similar-undertaking-distinct-status"
  | "similar-undertaking-distinct-evidence"
  | "amount"
  | "legal-grant-date"
  | "central-register-status"
  | "central-register-reference"
  | "expenses"
  | "same-base";

const issueFieldIds = {
  profileVerificationDate: "site-aid-profile-verification-date",
  profileTerritory: "site-aid-profile-territory",
  profileEuTerritorialStatus: "site-aid-profile-eu-territorial-status",
  profileEuTerritorialEvidence: "site-aid-profile-eu-territorial-evidence",
  profileEuTerritorialEvidenceDate:
    "site-aid-profile-eu-territorial-evidence-date",
  profileActivity: "site-aid-profile-activity",
  profileBusinessAge: "site-aid-profile-business-age",
  profileEmployeeCount: "site-aid-profile-employee-count",
  profileAnnualRevenue: "site-aid-profile-annual-revenue",
  profileLegalStatus: "site-aid-profile-legal-status",
  profileBusinessNeed: "site-aid-profile-business-need",
  profileSuccessIndicator: "site-aid-profile-success-indicator",
  profileDecisionOwner: "site-aid-profile-decision-owner",
  corporateEventOccurred: "site-aid-profile-corporate-event-status",
  corporateEventKind: "site-aid-profile-corporate-event-kind",
  corporateEventEvidence: "site-aid-profile-corporate-event-evidence",
  corporateAidHistoryAdjusted:
    "site-aid-profile-corporate-event-history-adjusted",
  authorityName: "site-aid-authority-name",
  authorityUrl: "site-aid-authority-url",
  authorityConsultationDate: "site-aid-authority-consultation-date",
  authoritySchedule: "site-aid-authority-schedule",
  authorityPostAwardVerified: "site-aid-authority-post-award-verified",
  authorityPostAward: "site-aid-authority-post-award",
  notificationEvidence: "site-aid-notification-evidence",
  basisScope: "site-aid-basis-scope",
  ratePercent: "site-aid-rate-percent",
  capAmount: "site-aid-cap-amount",
  stage: "site-aid-stage",
  instrument: "site-aid-instrument-kind",
  legalBasisStatus: "site-aid-legal-basis-status",
  deMinimisRegime: "site-aid-de-minimis-regime",
  deMinimisFisheryFiscalYearStart:
    "site-aid-de-minimis-fishery-fiscal-year-start",
  deMinimisFisheryPreviousFiscalYearStart:
    "site-aid-de-minimis-fishery-previous-fiscal-year-start",
  deMinimisFisherySecondPreviousFiscalYearStart:
    "site-aid-de-minimis-fishery-second-previous-fiscal-year-start",
  deMinimisFisheryCurrentFiscalYearEnd:
    "site-aid-de-minimis-fishery-current-fiscal-year-end",
  sgeiEntrustmentStatus: "site-aid-current-sgei-entrustment-status",
  sgeiEntrustmentEvidence: "site-aid-current-sgei-entrustment-evidence",
  sgeiServiceIdentity: "site-aid-current-sgei-service-identity",
  sgeiCompensationStatus: "site-aid-current-sgei-compensation-status",
  sgeiCompensationEvidence: "site-aid-current-sgei-compensation-evidence",
  deMinimisMemberState: "site-aid-de-minimis-member-state",
  deMinimisUndertaking: "site-aid-de-minimis-undertaking",
  similarUndertakingDistinctStatus:
    "site-aid-de-minimis-undertaking-distinct-status",
  similarUndertakingDistinctEvidence:
    "site-aid-de-minimis-undertaking-distinct-evidence",
  nonDeMinimisBasis: "site-aid-non-de-minimis-basis",
  nonDeMinimisEvidence: "site-aid-non-de-minimis-evidence",
  legalGrantStatus: "site-aid-legal-grant-status",
  legalGrantDate: "site-aid-legal-grant-date",
  centralRegisterStatus: "site-aid-central-register-status",
  centralRegisterReference: "site-aid-central-register-reference",
  legalAidValue: "site-aid-legal-aid-value",
  prospectiveDeMinimisAidValue: "site-aid-prospective-de-minimis-aid-value",
  prospectiveDeMinimisAidValueEvidence:
    "site-aid-prospective-de-minimis-aid-value-evidence",
  approvedContribution: "site-aid-approved-contribution",
  actualContribution: "site-aid-actual-contribution",
  paymentMode: "site-aid-payment-mode",
  prepaymentPercent: "site-aid-prepayment-percent",
  finalInvoiceMatch: "site-aid-final-invoice-match",
  finalInvoiceDate: "site-aid-final-invoice-date",
  finalInvoiceReference: "site-aid-final-invoice-reference",
  supplierPaymentReference: "site-aid-supplier-payment-reference",
  receiptDate: "site-aid-receipt-date",
  receiptReference: "site-aid-receipt-reference",
  availableCash: "site-aid-available-cash",
  waitMonths: "site-aid-wait-months",
  monthlyDelayMargin: "site-aid-monthly-delay-margin",
  aidSpecificFees: "site-aid-specific-fees",
  applicationAwardMode: "site-aid-application-award-mode",
  applicationFunderObjectives: "site-aid-application-funder-objectives",
  applicationSelectionCriteria: "site-aid-application-selection-criteria",
  applicationSubmissionChannel: "site-aid-application-submission-channel",
  applicationSubmissionStatus: "site-aid-application-submission-status",
  applicationSubmissionDate: "site-aid-application-submission-date",
  applicationSubmissionReceipt:
    "site-aid-application-submission-receipt-reference",
  applicationSubmittedPackageCheck:
    "site-aid-application-submitted-package-check",
  applicationDeadlineStatus: "site-aid-application-deadline-status",
  applicationDeadline: "site-aid-application-deadline",
  applicationDeadlineTime: "site-aid-application-deadline-time",
  applicationDeadlineTimeZone: "site-aid-application-deadline-time-zone",
  applicationDeadlineOfficialReference:
    "site-aid-application-deadline-official-reference",
  applicationDeadlineVerificationDate:
    "site-aid-application-deadline-verification-date",
  applicationDeadlineEvaluationInstant:
    "site-aid-application-deadline-evaluation-instant",
  applicationPreparationTime: "site-aid-application-preparation-time",
  applicationDeliverables: "site-aid-application-deliverables",
  applicationExpectedResults: "site-aid-application-expected-results",
  applicationSchedule: "site-aid-application-schedule",
  applicationBudgetJustification: "site-aid-application-budget-justification",
  applicationFinalReviewer: "site-aid-application-final-reviewer",
  applicationFinalValidation: "site-aid-application-final-validation",
} as const;

function quoteIssueFieldId(index: number, field: QuoteIssueField): string {
  return `site-aid-quote-line-${index + 1}-${field}`;
}

function gateIssueFieldId(
  gateId: SiteAidGateId,
  field: "status" | "evidence",
): string {
  return `site-aid-gate-${gateId}-${field}`;
}

function registerIssueFieldId(
  index: number,
  field: RegisterIssueField,
): string {
  return `site-aid-register-entry-${index + 1}-${field}`;
}

function applicationDocumentIssueFieldId(
  index: number,
  field:
    | "label"
    | "status"
    | "owner"
    | "format"
    | "signature"
    | "deadline"
    | "not-applicable-justification",
): string {
  return `site-aid-application-document-${index + 1}-${field}`;
}

function applicationCriterionIssueFieldId(
  index: number,
  field:
    | "published-criterion"
    | "project-response"
    | "evidence"
    | "owner"
    | "word-limit",
): string {
  return `site-aid-application-criterion-${index + 1}-${field}`;
}

function applicationCriterionWordCountId(index: number): string {
  return `site-aid-application-criterion-${index + 1}-word-count`;
}

function fieldErrorMessageId(targetId: string): string {
  return `${targetId}-error-message`;
}

function dynamicControlAccessibleName(
  visibleLabel: string,
  kind: DynamicRowKind,
  index: number,
): string {
  const rowLabel =
    kind === "quote"
      ? `Ligne ${index + 1}`
      : kind === "register"
        ? `Aide antérieure ${index + 1}`
        : kind === "application-document"
          ? `Pièce ${index + 1}`
          : `Critère ${index + 1}`;
  return `${visibleLabel} — ${rowLabel}`;
}

function normalizedIssueText(value: string): string {
  return value.trim().toLocaleLowerCase("fr-FR");
}

function normalizedQuoteIssueLabel(value: string): string {
  return value
    .replace(/[\r\n\t]+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\b(?:undefined|NaN|-?Infinity)\b/gi, "ND")
    .trim();
}

function quoteLineIssueContext(
  issue: string,
  input: SiteAidDecisionInput,
): { index: number; body: string } | undefined {
  const numberedLine = issue.match(/^(?:devis,\s*)?ligne\s+(\d+)(?=\s|[:,])/i);
  if (!numberedLine) return undefined;
  const index = Number(numberedLine[1]) - 1;
  if (index < 0 || index >= input.quoteLines.length) return undefined;

  let body = issue.slice(numberedLine[0].length).trimStart();
  if (body.startsWith("«")) {
    const exactQuotedLabel = `« ${normalizedQuoteIssueLabel(
      input.quoteLines[index].label,
    )} »`;
    if (!body.startsWith(exactQuotedLabel)) return undefined;
    body = body.slice(exactQuotedLabel.length).trimStart();
  }
  return { index, body: normalizedIssueText(body) };
}

function quoteIssueFieldFromBody(body: string): QuoteIssueField {
  if (body.startsWith(": le libellé") || body.startsWith(", libellé")) {
    return "label";
  }
  if (body.startsWith(", montant ht")) return "amount";
  if (
    body.startsWith(": part de tva") ||
    body.startsWith(": la fraction de tva") ||
    body.startsWith(", tva déductible")
  ) {
    return "deductible-vat";
  }
  if (body.startsWith(", taux de tva") || /^,\s*tva(?:\s|:)/.test(body)) {
    return "vat-rate";
  }
  if (
    body.startsWith(": admissibilité") ||
    body.startsWith(": état d’admissibilité")
  ) {
    return "eligibility";
  }
  if (body.startsWith(": référence de preuve")) return "evidence";
  return "label";
}

function registerEntryIndexFromIssue(
  issue: string,
  input: SiteAidDecisionInput,
): number | undefined {
  const match = normalizedIssueText(issue).match(
    /^registre,\s*aide\s+(\d+)(?:\s|[:,])/,
  );
  if (!match) return undefined;
  const index = Number(match[1]) - 1;
  return index >= 0 && index < input.aidRegister.length ? index : undefined;
}

function registerIssueFieldFromIssue(
  issue: string,
  entry: SiteAidRegisterEntryInput,
): RegisterIssueField {
  const normalized = normalizedIssueText(issue);
  if (normalized.includes("référence du registre central national")) {
    return "central-register-reference";
  }
  if (normalized.includes("registre central national")) {
    return "central-register-status";
  }
  if (normalized.includes("preuve du mandat sieg")) {
    return "sgei-entrustment-evidence";
  }
  if (
    normalized.includes("mandat sieg") ||
    normalized.includes("champs sieg")
  ) {
    return "sgei-entrustment-status";
  }
  if (normalized.includes("identité du sieg")) {
    return "sgei-service-identity";
  }
  if (normalized.includes("preuve sur les compensations du même sieg")) {
    return "sgei-compensation-evidence";
  }
  if (normalized.includes("autre compensation du même sieg")) {
    return "sgei-compensation-status";
  }
  if (
    normalized.includes(
      "preuve de distinction avec le service sieg de l’aide courante",
    )
  ) {
    return "sgei-relation-to-current-evidence";
  }
  if (normalized.includes("relation au service sieg de l’aide courante")) {
    return "sgei-relation-to-current-status";
  }
  if (normalized.includes("distinction des clés proches")) {
    return normalized.includes("preuve")
      ? "similar-undertaking-distinct-evidence"
      : "similar-undertaking-distinct-status";
  }
  if (normalized.includes("statut de la base juridique")) {
    return "legal-basis-status";
  }
  if (normalized.includes("base hors de minimis")) {
    return "non-de-minimis-basis";
  }
  if (normalized.includes("preuve hors de minimis")) {
    return "non-de-minimis-evidence";
  }
  if (normalized.includes("hors de minimis déclaré")) {
    return "legal-basis-status";
  }
  if (normalized.includes("état membre")) return "member-state";
  if (
    normalized.includes("entreprise unique") ||
    normalized.includes("entreprise/groupe")
  ) {
    return "single-undertaking";
  }
  if (normalized.includes("valeur juridique ou esb")) {
    return "amount";
  }
  if (normalized.includes("date d’octroi juridique")) {
    return "legal-grant-date";
  }
  if (normalized.includes(", montant")) return "amount";
  if (normalized.includes(", dépenses")) return "expenses";
  if (
    normalized.includes("même assiette") ||
    normalized.includes("même facture")
  ) {
    return "same-base";
  }
  if (normalized.includes("règlement de minimis")) {
    return "de-minimis-regime";
  }
  if (normalized.includes(", base juridique")) {
    if (entry.legalBasisStatus === "de-minimis") return "de-minimis-regime";
    if (entry.legalBasisStatus === "not-de-minimis") {
      return "non-de-minimis-basis";
    }
    return "legal-basis-status";
  }
  if (normalized.includes(", organisme")) return "authority";
  if (normalized.includes(", régime") || normalized.includes(", dispositif")) {
    return "scheme";
  }
  return "authority";
}

function issueTargetId(issue: string, input: SiteAidDecisionInput): string {
  const normalized = normalizedIssueText(issue);
  if (
    normalized.startsWith("ligne ") ||
    normalized.startsWith("devis, ligne ")
  ) {
    const quoteContext = quoteLineIssueContext(issue, input);
    return quoteContext === undefined
      ? "site-aid-quote-section"
      : quoteIssueFieldId(
          quoteContext.index,
          quoteIssueFieldFromBody(quoteContext.body),
        );
  }
  if (normalized.startsWith("registre, aide ")) {
    const entryIndex = registerEntryIndexFromIssue(issue, input);
    if (entryIndex === undefined) return "site-aid-register-section";
    return registerIssueFieldId(
      entryIndex,
      registerIssueFieldFromIssue(issue, input.aidRegister[entryIndex]),
    );
  }
  for (const gateId of SITE_AID_GATE_IDS) {
    const gateLabel = normalizedIssueText(SITE_AID_GATE_LABELS[gateId]);
    if (!normalized.startsWith(gateLabel)) continue;
    const targetsEvidence = normalized.includes("référence de preuve");
    if (gateId === "notification") {
      return targetsEvidence
        ? issueFieldIds.notificationEvidence
        : issueFieldIds.stage;
    }
    return gateIssueFieldId(gateId, targetsEvidence ? "evidence" : "status");
  }
  if (normalized.startsWith("date de vérification")) {
    return issueFieldIds.profileVerificationDate;
  }
  if (
    normalized.startsWith(
      "aide courante, référence du registre central national",
    )
  ) {
    return issueFieldIds.centralRegisterReference;
  }
  if (normalized.startsWith("aide courante, registre central national")) {
    return issueFieldIds.centralRegisterStatus;
  }
  if (normalized.startsWith("territoire")) {
    return issueFieldIds.profileTerritory;
  }
  if (
    normalized.startsWith(
      "aide courante, date de la preuve de qualification territoriale ue",
    )
  ) {
    return issueFieldIds.profileEuTerritorialEvidenceDate;
  }
  if (
    normalized.startsWith(
      "aide courante, preuve de qualification territoriale ue",
    )
  ) {
    return issueFieldIds.profileEuTerritorialEvidence;
  }
  if (
    normalized.startsWith(
      "aide courante, qualification territoriale ue du précontrôle de minimis",
    ) ||
    normalized.startsWith(
      "qualification territoriale ue du précontrôle de minimis",
    )
  ) {
    return issueFieldIds.profileEuTerritorialStatus;
  }
  if (normalized.startsWith("activité :")) {
    return issueFieldIds.profileActivity;
  }
  if (normalized.startsWith("âge de l’entreprise")) {
    return issueFieldIds.profileBusinessAge;
  }
  if (normalized.startsWith("effectif")) {
    return issueFieldIds.profileEmployeeCount;
  }
  if (normalized.startsWith("chiffre d’affaires")) {
    return issueFieldIds.profileAnnualRevenue;
  }
  if (normalized.startsWith("statut :")) {
    return issueFieldIds.profileLegalStatus;
  }
  if (normalized.startsWith("problème métier")) {
    return issueFieldIds.profileBusinessNeed;
  }
  if (normalized.startsWith("indicateur de réussite")) {
    return issueFieldIds.profileSuccessIndicator;
  }
  if (normalized.startsWith("responsable de la décision")) {
    return issueFieldIds.profileDecisionOwner;
  }
  if (normalized.startsWith("organisme officiel")) {
    return issueFieldIds.authorityName;
  }
  if (normalized.startsWith("url officielle")) {
    return issueFieldIds.authorityUrl;
  }
  if (normalized.startsWith("date de consultation")) {
    return issueFieldIds.authorityConsultationDate;
  }
  if (normalized.startsWith("échéances et règle de modification")) {
    return issueFieldIds.authoritySchedule;
  }
  if (normalized.startsWith("vérification de la pièce post-attribution")) {
    return issueFieldIds.authorityPostAwardVerified;
  }
  if (
    normalized.startsWith("obligations après attribution et après versement")
  ) {
    return issueFieldIds.authorityPostAward;
  }
  if (
    normalized.startsWith(
      "restructuration de l’entreprise pour le cumul de minimis",
    )
  ) {
    return normalized.includes("preuve manquante")
      ? issueFieldIds.corporateEventEvidence
      : issueFieldIds.corporateEventOccurred;
  }
  if (normalized.startsWith("type de fusion, acquisition ou scission")) {
    return issueFieldIds.corporateEventKind;
  }
  if (normalized.startsWith("registre après fusion, acquisition ou scission")) {
    return issueFieldIds.corporateAidHistoryAdjusted;
  }
  if (normalized.startsWith("notification :")) {
    return issueFieldIds.stage;
  }
  if (normalized.startsWith("aide courante, distinction des clés proches")) {
    return normalized.includes("preuve")
      ? issueFieldIds.similarUndertakingDistinctEvidence
      : issueFieldIds.similarUndertakingDistinctStatus;
  }
  if (normalized.startsWith("assiette de calcul")) {
    return issueFieldIds.basisScope;
  }
  if (normalized.startsWith("taux de l’aide")) {
    return issueFieldIds.ratePercent;
  }
  if (normalized.startsWith("plafond de l’aide")) {
    return issueFieldIds.capAmount;
  }
  if (normalized.includes("instrument d’aide")) {
    return issueFieldIds.instrument;
  }
  if (normalized.startsWith("aide courante, preuve du mandat sieg")) {
    return issueFieldIds.sgeiEntrustmentEvidence;
  }
  if (normalized.startsWith("aide courante, mandat sieg")) {
    return issueFieldIds.sgeiEntrustmentStatus;
  }
  if (normalized.startsWith("aide courante, identité du sieg")) {
    return issueFieldIds.sgeiServiceIdentity;
  }
  if (
    normalized.startsWith(
      "aide courante, preuve sur les compensations du même sieg",
    )
  ) {
    return issueFieldIds.sgeiCompensationEvidence;
  }
  if (normalized.startsWith("aide courante, autre compensation du même sieg")) {
    return issueFieldIds.sgeiCompensationStatus;
  }
  if (normalized.startsWith("aide courante, champs sieg")) {
    return issueFieldIds.deMinimisRegime;
  }
  if (normalized.includes("état de l’aide")) {
    return issueFieldIds.stage;
  }
  if (normalized.includes("statut de la base juridique")) {
    return issueFieldIds.legalBasisStatus;
  }
  if (normalized.includes("base hors de minimis")) {
    return issueFieldIds.nonDeMinimisBasis;
  }
  if (normalized.includes("preuve hors de minimis")) {
    return issueFieldIds.nonDeMinimisEvidence;
  }
  if (normalized.includes("hors de minimis déclaré")) {
    return issueFieldIds.legalBasisStatus;
  }
  if (
    normalized.startsWith("aide courante, précontrôle prudent du cumul") &&
    normalized.includes("valeur juridique ou esb")
  ) {
    return issueFieldIds.legalAidValue;
  }
  if (
    normalized.startsWith("valeur prospective de minimis documentée") ||
    normalized.includes("précontrôle prospectif de minimis") ||
    normalized.includes("esb prospectif") ||
    normalized.includes("montant brut prospectif")
  ) {
    return normalized.includes("preuve") ||
      normalized.includes("référence") ||
      normalized.includes("description")
      ? issueFieldIds.prospectiveDeMinimisAidValueEvidence
      : issueFieldIds.prospectiveDeMinimisAidValue;
  }
  if (
    normalized.includes(
      "début du deuxième exercice fiscal précédant l’exercice courant",
    )
  ) {
    return issueFieldIds.deMinimisFisherySecondPreviousFiscalYearStart;
  }
  if (
    normalized.includes(
      "début de l’exercice fiscal précédant l’exercice courant",
    )
  ) {
    return issueFieldIds.deMinimisFisheryPreviousFiscalYearStart;
  }
  if (
    normalized.includes(
      "début de l’exercice fiscal courant contenant l’ancre",
    ) ||
    normalized.includes("début de l’exercice fiscal courant du précontrôle")
  ) {
    return issueFieldIds.deMinimisFisheryFiscalYearStart;
  }
  if (
    normalized.includes("fin de l’exercice fiscal courant") ||
    normalized.includes("exercice fiscal courant du précontrôle pêche")
  ) {
    return issueFieldIds.deMinimisFisheryCurrentFiscalYearEnd;
  }
  if (normalized.includes("période fiscale pêche")) {
    return issueFieldIds.deMinimisFisheryFiscalYearStart;
  }
  if (normalized.includes("état membre")) {
    return issueFieldIds.deMinimisMemberState;
  }
  if (
    normalized.includes("entreprise unique") ||
    normalized.includes("périmètre de l’entreprise unique") ||
    normalized.includes("entreprise/groupe")
  ) {
    return issueFieldIds.deMinimisUndertaking;
  }
  if (
    normalized.includes("règlement de minimis") ||
    normalized.includes("régime de minimis")
  ) {
    return issueFieldIds.deMinimisRegime;
  }
  if (normalized.includes("aide courante, base juridique")) {
    if (input.aid.legalBasisStatus === "de-minimis") {
      return issueFieldIds.deMinimisRegime;
    }
    return issueFieldIds.legalBasisStatus;
  }
  if (normalized.includes("date d’octroi juridique")) {
    return issueFieldIds.legalGrantDate;
  }
  if (normalized.includes("octroi juridique")) {
    return issueFieldIds.legalGrantStatus;
  }
  if (normalized.startsWith("valeur juridique de l’aide")) {
    return issueFieldIds.legalAidValue;
  }
  if (
    normalized.startsWith("paiement effectif de l’aide") ||
    normalized.startsWith("paiement direct au fournisseur")
  ) {
    return issueFieldIds.actualContribution;
  }
  if (normalized.startsWith("contribution financière approuvée")) {
    return issueFieldIds.approvedContribution;
  }
  if (normalized.includes("mode de versement")) {
    return issueFieldIds.paymentMode;
  }
  if (
    normalized.includes("part versée avant paiement") ||
    normalized.startsWith("remboursement :") ||
    normalized.startsWith("avance :") ||
    normalized.startsWith("paiement direct :")
  ) {
    return issueFieldIds.prepaymentPercent;
  }
  if (
    normalized.includes("reste payé par l’entreprise au fournisseur") ||
    normalized.includes("paiement du fournisseur")
  ) {
    return issueFieldIds.supplierPaymentReference;
  }
  if (normalized.includes("versement ou paiement direct")) {
    return normalized.includes("date")
      ? issueFieldIds.receiptDate
      : issueFieldIds.receiptReference;
  }
  if (normalized.startsWith("chronologie :")) {
    return issueFieldIds.receiptDate;
  }
  if (normalized.includes("facture finale")) {
    if (normalized.includes("date")) return issueFieldIds.finalInvoiceDate;
    if (normalized.includes("référence")) {
      return issueFieldIds.finalInvoiceReference;
    }
    return issueFieldIds.finalInvoiceMatch;
  }
  if (
    normalized.includes("devis, ligne") ||
    normalized.includes("ligne admissible") ||
    normalized.includes("taux de tva") ||
    normalized.includes("part de tva")
  ) {
    return "site-aid-quote-section";
  }
  if (normalized.startsWith("trésorerie disponible")) {
    return issueFieldIds.availableCash;
  }
  if (normalized.startsWith("mois d’attente")) return issueFieldIds.waitMonths;
  if (normalized.startsWith("marge contributive")) {
    return issueFieldIds.monthlyDelayMargin;
  }
  if (normalized.startsWith("frais propres")) {
    return issueFieldIds.aidSpecificFees;
  }
  if (
    normalized.includes("notification") ||
    normalized.includes("versement") ||
    normalized.includes("assiette") ||
    normalized.includes("facture finale") ||
    normalized.includes("encaissement") ||
    normalized.includes("montant notifié") ||
    normalized.includes("montant encaissé") ||
    normalized.includes("montant versé") ||
    normalized.includes("destinataire") ||
    normalized.includes("aide courante") ||
    normalized.includes("octroi juridique") ||
    normalized.includes("statut de la base juridique") ||
    normalized.includes("base juridique hors de minimis") ||
    normalized.includes("preuve hors de minimis") ||
    normalized.includes("référence officielle hors de minimis") ||
    normalized.includes("régime de minimis") ||
    normalized.includes("état membre de l’aide actuelle") ||
    normalized.includes("entreprise unique de l’aide actuelle") ||
    normalized.includes("guichet") ||
    normalized.includes("bénéficiaire") ||
    normalized.includes("activité admise") ||
    normalized.includes("ordre des actes") ||
    normalized.includes("cumul")
  ) {
    return "site-aid-proof-section";
  }
  return "site-aid-profile-section";
}

export function SiteAidDecisionDossier() {
  const [input, setInput] = useState<SiteAidDecisionInput>(() =>
    initialInput(),
  );
  const [application, setApplication] = useState<SiteAidApplicationPreparation>(
    () => createEmptySiteAidApplicationPreparation(),
  );
  const [prediagnosis, setPrediagnosis] = useState<SiteAidPreDiagnosisTransfer>(
    () => createEmptySiteAidPreDiagnosis(),
  );
  const [
    hasUntransferredPrediagnosisChanges,
    setHasUntransferredPrediagnosisChanges,
  ] = useState(false);
  const [quoteLineIds, setQuoteLineIds] = useState<string[]>([
    "site-aid-quote-row-initial",
  ]);
  const [registerEntryIds, setRegisterEntryIds] = useState<string[]>([]);
  const [applicationDocumentIds, setApplicationDocumentIds] = useState<
    string[]
  >(["site-aid-application-document-row-initial"]);
  const [applicationCriterionIds, setApplicationCriterionIds] = useState<
    string[]
  >([]);
  const [activeStepId, setActiveStepId] =
    useState<SiteAidDraftStepId>("profile");
  const [reviewEditStepId, setReviewEditStepId] =
    useState<SiteAidDraftStepId | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [hasRequestedVerdict, setHasRequestedVerdict] = useState(false);
  const [editableLocalDate, setEditableLocalDate] = useState(() =>
    currentLocalIsoDate(),
  );
  const [analyzedDossierSignature, setAnalyzedDossierSignature] = useState<
    string | null
  >(null);
  const [pendingConfirmation, setPendingConfirmation] = useState<
    "example" | "reset" | null
  >(null);
  const resetRequested = pendingConfirmation === "reset";
  const exampleLoadRequested = pendingConfirmation === "example";
  const [hasDraftChanges, setHasDraftChanges] = useState(false);
  const [pendingImportedDraft, setPendingImportedDraft] =
    useState<ParsedSiteAidDraft | null>(null);
  const [draftActionStatus, setDraftActionStatus] = useState<
    "idle" | "exported" | "export-error" | "imported" | "import-error"
  >("idle");
  const [draftActionMessage, setDraftActionMessage] = useState("");
  const [analysisFocusRequest, setAnalysisFocusRequest] = useState(0);
  const [wizardFocusRequest, setWizardFocusRequest] = useState(0);
  const [liveAnnouncement, setLiveAnnouncement] = useState({
    message: "",
    sequence: 0,
  });
  const announceLive = useCallback((message: string) => {
    setLiveAnnouncement((current) => ({
      message,
      sequence: current.sequence + 1,
    }));
  }, []);
  const [actionStatus, setActionStatus] = useState<
    "idle" | "downloaded" | "download-error"
  >("idle");
  const prediagnosisTransferIsStale =
    Boolean(prediagnosis.transferredAt) && hasUntransferredPrediagnosisChanges;
  const currentDossierSignature = useMemo(
    () =>
      JSON.stringify({
        input,
        application,
        prediagnosis,
        editableLocalDate,
      }),
    [application, editableLocalDate, input, prediagnosis],
  );
  const analysisIsStale =
    hasRequestedVerdict &&
    analyzedDossierSignature !== null &&
    analyzedDossierSignature !== currentDossierSignature;
  const analysisIsCurrent =
    hasRequestedVerdict &&
    analyzedDossierSignature === currentDossierSignature &&
    !prediagnosisTransferIsStale;
  const nextRowIdRef = useRef(1);
  const pendingWizardFocusRef = useRef<{
    targetId?: string;
    announcement: string;
  } | null>(null);
  const pendingRowFocusRef = useRef<{
    kind: DynamicRowKind;
    rowId?: string;
  } | null>(null);
  const quoteFirstInputRefs = useRef(new Map<string, HTMLInputElement>());
  const registerFirstInputRefs = useRef(new Map<string, HTMLInputElement>());
  const applicationDocumentFirstInputRefs = useRef(
    new Map<string, HTMLInputElement>(),
  );
  const applicationCriterionFirstInputRefs = useRef(
    new Map<string, HTMLTextAreaElement>(),
  );
  const quoteAddButtonRef = useRef<HTMLButtonElement>(null);
  const registerAddButtonRef = useRef<HTMLButtonElement>(null);
  const applicationDocumentAddButtonRef = useRef<HTMLButtonElement>(null);
  const applicationCriterionAddButtonRef = useRef<HTMLButtonElement>(null);
  const resultSummaryRef = useRef<HTMLElement>(null);
  const errorSummaryRef = useRef<HTMLDivElement>(null);
  const analysisFocusTargetRef = useRef<"errors" | "result">("result");
  const analysisTriggerRef = useRef<HTMLButtonElement>(null);
  const exampleLoadTriggerRef = useRef<HTMLButtonElement>(null);
  const exampleLoadCancelRef = useRef<HTMLButtonElement>(null);
  const resetCancelRef = useRef<HTMLButtonElement>(null);
  const resetTriggerRef = useRef<HTMLButtonElement>(null);
  const draftFileInputRef = useRef<HTMLInputElement>(null);
  const draftImportTriggerRef = useRef<HTMLButtonElement>(null);
  const draftImportCancelRef = useRef<HTMLButtonElement>(null);
  const staleAnalysisAnnouncementSentRef = useRef(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const date = currentLocalIsoDate();
      setInput((current) => {
        if (
          current.profile.verificationDate ||
          current.authority.consultationDate
        ) {
          return current;
        }
        return {
          ...current,
          profile: { ...current.profile, verificationDate: date },
          authority: { ...current.authority, consultationDate: date },
        };
      });
    }, 0);
    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    let midnightTimeoutId: number | undefined;
    const refreshEditableLocalDate = () => {
      const nextDate = currentLocalIsoDate();
      setEditableLocalDate((current) =>
        current === nextDate ? current : nextDate,
      );
    };
    const scheduleNextLocalDateRefresh = () => {
      if (midnightTimeoutId !== undefined) {
        window.clearTimeout(midnightTimeoutId);
      }
      const now = new Date();
      const nextLocalDate = new Date(now);
      nextLocalDate.setHours(24, 0, 0, 0);
      midnightTimeoutId = window.setTimeout(
        () => {
          refreshEditableLocalDate();
          scheduleNextLocalDateRefresh();
        },
        Math.max(1, nextLocalDate.getTime() - now.getTime()),
      );
    };
    const refreshAndReschedule = () => {
      refreshEditableLocalDate();
      scheduleNextLocalDateRefresh();
    };
    const refreshWhenVisible = () => {
      if (document.visibilityState === "visible") {
        refreshAndReschedule();
      }
    };
    scheduleNextLocalDateRefresh();
    window.addEventListener("focus", refreshAndReschedule);
    window.addEventListener("pageshow", refreshAndReschedule);
    document.addEventListener("visibilitychange", refreshWhenVisible);
    return () => {
      if (midnightTimeoutId !== undefined) {
        window.clearTimeout(midnightTimeoutId);
      }
      window.removeEventListener("focus", refreshAndReschedule);
      window.removeEventListener("pageshow", refreshAndReschedule);
      document.removeEventListener("visibilitychange", refreshWhenVisible);
    };
  }, []);

  useEffect(() => {
    const markDirty = () => {
      setHasUntransferredPrediagnosisChanges(true);
      setHasDraftChanges(true);
      if (!prediagnosis.transferredAt) return;
      setHasRequestedVerdict(false);
      setActionStatus("idle");
      announceLive(
        "Analyse invalidée. Le prédiagnostic contient des modifications non retransférées.",
      );
    };
    window.addEventListener(SITE_AID_PREDIAGNOSIS_DIRTY_EVENT, markDirty);
    return () =>
      window.removeEventListener(SITE_AID_PREDIAGNOSIS_DIRTY_EVENT, markDirty);
  }, [announceLive, prediagnosis.transferredAt]);

  useEffect(() => {
    if (!analysisIsStale) {
      staleAnalysisAnnouncementSentRef.current = false;
      return;
    }
    if (staleAnalysisAnnouncementSentRef.current) return;
    staleAnalysisAnnouncementSentRef.current = true;
    announceLive(
      "Analyse périmée. Le dossier a changé depuis le dernier instant analysé : relancez l’analyse pour actualiser le verdict, le TXT et l’impression.",
    );
  }, [analysisIsStale, announceLive]);

  useEffect(() => {
    const transfer = (event: Event) => {
      if (!(event instanceof CustomEvent)) return;
      try {
        const nextPrediagnosis = parseSiteAidPreDiagnosis(event.detail);
        const unresolvedCount = nextPrediagnosis.items.filter(
          (item) => item.status !== "documented",
        ).length;
        setPrediagnosis(nextPrediagnosis);
        setHasUntransferredPrediagnosisChanges(false);
        setHasInteracted(true);
        setHasDraftChanges(true);
        setHasRequestedVerdict(false);
        setDraftActionStatus("idle");
        setDraftActionMessage(
          unresolvedCount > 0
            ? "Prédiagnostic transféré localement. Le dossier restera globalement incomplet tant qu’une réponse « non » ou « à confirmer » subsiste ; aucune exclusion juridique n’est déduite."
            : "Prédiagnostic transféré localement avec quatorze réponses documentées. Les preuves restent déclaratives et doivent être relues.",
        );
        announceLive(
          unresolvedCount > 0
            ? `Quatorze réponses du prédiagnostic transférées. ${unresolvedCount} réponse(s) « non » ou « à confirmer » suspendent le verdict global sans constituer une exclusion juridique.`
            : "Quatorze réponses documentées du prédiagnostic transférées. Aucun blocage global ajouté.",
        );
        window.requestAnimationFrame(() => {
          const title = document.getElementById("site-aid-decision-title");
          if (title instanceof HTMLElement) {
            title.focus();
            title.scrollIntoView?.({ block: "start" });
          }
        });
      } catch {
        setDraftActionStatus("import-error");
        setDraftActionMessage(
          "Le prédiagnostic local a été refusé : son contrat R25 est invalide.",
        );
      }
    };
    window.addEventListener(SITE_AID_PREDIAGNOSIS_TRANSFER_EVENT, transfer);
    return () =>
      window.removeEventListener(
        SITE_AID_PREDIAGNOSIS_TRANSFER_EVENT,
        transfer,
      );
  }, [announceLive]);

  useEffect(() => {
    if (!hasDraftChanges) return;
    const warnBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", warnBeforeUnload);
    return () => window.removeEventListener("beforeunload", warnBeforeUnload);
  }, [hasDraftChanges]);

  useEffect(() => {
    if (resetRequested) resetCancelRef.current?.focus();
  }, [resetRequested]);

  useEffect(() => {
    if (exampleLoadRequested) exampleLoadCancelRef.current?.focus();
  }, [exampleLoadRequested]);

  useEffect(() => {
    if (pendingImportedDraft) draftImportCancelRef.current?.focus();
  }, [pendingImportedDraft]);

  useEffect(() => {
    if (analysisFocusRequest === 0) return;
    const target =
      analysisFocusTargetRef.current === "errors"
        ? errorSummaryRef.current
        : resultSummaryRef.current;
    target?.focus();
  }, [analysisFocusRequest]);

  useEffect(() => {
    const pendingFocus = pendingRowFocusRef.current;
    if (!pendingFocus) return;
    const rowTarget =
      pendingFocus.kind === "quote"
        ? pendingFocus.rowId
          ? quoteFirstInputRefs.current.get(pendingFocus.rowId)
          : undefined
        : pendingFocus.kind === "register"
          ? pendingFocus.rowId
            ? registerFirstInputRefs.current.get(pendingFocus.rowId)
            : undefined
          : pendingFocus.kind === "application-document"
            ? pendingFocus.rowId
              ? applicationDocumentFirstInputRefs.current.get(
                  pendingFocus.rowId,
                )
              : undefined
            : pendingFocus.rowId
              ? applicationCriterionFirstInputRefs.current.get(
                  pendingFocus.rowId,
                )
              : undefined;
    const fallback =
      pendingFocus.kind === "quote"
        ? quoteAddButtonRef.current
        : pendingFocus.kind === "register"
          ? registerAddButtonRef.current
          : pendingFocus.kind === "application-document"
            ? applicationDocumentAddButtonRef.current
            : applicationCriterionAddButtonRef.current;
    (rowTarget ?? fallback)?.focus();
    pendingRowFocusRef.current = null;
  }, [
    applicationCriterionIds,
    applicationDocumentIds,
    quoteLineIds,
    registerEntryIds,
  ]);

  const analysisLocalDate =
    applicationEvaluationLocalDate(application) ?? editableLocalDate;
  const result = useMemo(
    () =>
      calculateSiteAidDecision(input, {
        analysisDate: analysisLocalDate,
      }),
    [analysisLocalDate, input],
  );
  const applicationIssues = useMemo(
    () => applicationPreparationIssues(application, input),
    [application, input],
  );
  const prediagnosisIssues = useMemo(
    () =>
      prediagnosis.transferredAt
        ? prediagnosis.items.flatMap((item) =>
            item.status === "documented"
              ? []
              : [
                  {
                    targetId: siteAidPreDiagnosisCorrectionTargetId(
                      item.id,
                      item.status,
                    ),
                    message:
                      item.status === "no"
                        ? `Prédiagnostic — ${item.label} : réponse « non », bloqueur déclaratif à résoudre ou à faire confirmer avant instruction.`
                        : `Prédiagnostic — ${item.label} : réponse « à confirmer », preuve déclarative manquante ou non confirmée ; l’instruction reste suspendue sur ce point.`,
                  },
                ],
          )
        : [],
    [prediagnosis],
  );
  const deadlineTraceAllowsSharing =
    applicationDeadlineTraceIsUsable(application);
  const canShareDecisionReport =
    analysisIsCurrent && deadlineTraceAllowsSharing;
  const report = useMemo(
    () =>
      canShareDecisionReport
        ? `${buildEffectiveSiteAidDecisionReport(
            input,
            result,
            applicationIssues,
            prediagnosisIssues,
            analysisLocalDate,
          )}\n${buildApplicationPreparationReport(
            application,
            applicationIssues,
          )}\n${buildPreDiagnosisReport(prediagnosis)}`
        : "",
    [
      application,
      applicationIssues,
      analysisLocalDate,
      canShareDecisionReport,
      input,
      prediagnosis,
      prediagnosisIssues,
      result,
    ],
  );
  const financialContributionSupported = input.aid.instrumentKind === "grant";
  const currentAidHasDeMinimisBranch =
    input.aid.legalBasisStatus === "de-minimis" ||
    isResolvedDeMinimis(result.currentLegalBasisResolution);
  const showsProspectiveDeMinimisValue =
    input.aid.stage === "none" && currentAidHasDeMinimisBranch;
  const prospectiveDeMinimisValueRequired =
    showsProspectiveDeMinimisValue &&
    input.aid.instrumentKind !== "grant" &&
    input.aid.instrumentKind !== "unknown";
  const hasDeMinimisBranch =
    currentAidHasDeMinimisBranch ||
    input.aidRegister.some(
      (entry, index) =>
        entry.legalBasisStatus === "de-minimis" ||
        isResolvedDeMinimis(
          result.registerLegalBasisResolutions[index] ?? "unknown",
        ),
    );
  const hasFisheryBranch =
    result.currentLegalBasisResolution === "de-minimis-fishery" ||
    result.registerLegalBasisResolutions.some(
      (resolution) => resolution === "de-minimis-fishery",
    );
  const currentAidUsesSgei =
    result.currentLegalBasisResolution === "de-minimis-sgei";
  const currentRequiresExternalLegalReview =
    result.currentLegalBasisResolution === "not-de-minimis-external-review";
  const currentCentralRegisterRequired = isSiteAidFrenchCentralRegisterRequired(
    result.currentLegalBasisResolution,
    input.aid.deMinimisMemberState,
    input.aid.legalGrantDate,
  );
  const registerCentralRegisterRequired = input.aidRegister.map(
    (entry, index) =>
      isSiteAidFrenchCentralRegisterRequired(
        result.registerLegalBasisResolutions[index] ?? "unknown",
        entry.memberState,
        entry.legalGrantDate,
      ),
  );
  const directPaymentCoverageStatus = result.directPaymentCoverageStatus;
  const directPaymentArithmeticCoversSupplierInvoice =
    result.directPaymentArithmeticCoversInvoiceInFull === true;
  const directPaymentCoversSupplierInvoice =
    directPaymentCoverageStatus === "full-documented" &&
    result.directPaymentCoversInvoiceInFull === true;
  const directPaymentProvisionallyCoversSupplierInvoice =
    directPaymentCoverageStatus === "full-provisional" &&
    directPaymentArithmeticCoversSupplierInvoice;
  const directCompanySupplierRemainder = result.directCompanySupplierRemainder;
  const legalAidValueResolved =
    result.legalAidValueUnderConditions !== undefined;
  const approvedFinancialContributionResolved =
    result.approvedFinancialContributionUnderConditions !== undefined;
  const actualFinancialContributionResolved =
    result.actualFinancialContribution !== undefined;
  const conditionalCostAfterNotificationResolved =
    result.conditionalCostAfterNotification !== undefined;
  const realizedCostAfterReceiptResolved =
    result.realizedCostAfterReceipt !== undefined;
  const effectiveDecision = resolveEffectiveSiteAidDecision(
    result,
    applicationIssues.length,
    prediagnosisIssues.length,
  );
  const visibleResultCode = analysisIsCurrent
    ? effectiveDecision.code
    : "incomplete";
  const visibleResultExplanation = analysisIsCurrent
    ? effectiveDecision.explanation
    : result.explanation;
  const resultStyles = decisionStyles[visibleResultCode];
  const fieldIssues = analysisIsCurrent
    ? [
        ...result.invalidIssues.map((message) => ({
          message,
          targetId: issueTargetId(message, input),
        })),
        ...result.missingEvidence.map((message) => ({
          message,
          targetId: issueTargetId(message, input),
        })),
        ...applicationIssues,
      ]
    : [];
  const fieldIssuesByTargetId = new Map<string, string[]>();
  for (const issue of fieldIssues) {
    const { targetId } = issue;
    const targetedIssues = fieldIssuesByTargetId.get(targetId) ?? [];
    if (!targetedIssues.includes(issue.message)) {
      targetedIssues.push(issue.message);
    }
    fieldIssuesByTargetId.set(targetId, targetedIssues);
  }
  const fieldIssueSignature = JSON.stringify(
    [...fieldIssuesByTargetId.entries()].sort(([left], [right]) =>
      left.localeCompare(right),
    ),
  );
  const errorCountByStepId = new Map<SiteAidDraftStepId, number>();
  for (const [targetId, issues] of fieldIssuesByTargetId) {
    const stepId = wizardStepForTargetId(targetId);
    errorCountByStepId.set(
      stepId,
      (errorCountByStepId.get(stepId) ?? 0) + issues.length,
    );
  }
  useEffect(() => {
    const existingMessages = document.querySelectorAll(
      "#site-aid-decision-dossier [data-site-aid-local-error]",
    );
    existingMessages.forEach((message) => message.remove());
    if (!analysisIsCurrent) return;

    const mountedEntries = JSON.parse(fieldIssueSignature) as Array<
      [string, string[]]
    >;
    for (const [targetId, issues] of mountedEntries) {
      const target = document.getElementById(targetId);
      if (!(target instanceof HTMLElement)) continue;

      const message = document.createElement("div");
      message.id = fieldErrorMessageId(targetId);
      message.dataset.siteAidLocalError = targetId;
      message.className =
        "mt-2 rounded-lg border border-rose-300 bg-rose-50 px-3 py-2 text-xs font-semibold leading-relaxed text-rose-950 dark:border-rose-800 dark:bg-rose-950/30 dark:text-rose-100";
      for (const issue of issues) {
        const paragraph = document.createElement("p");
        paragraph.className = "m-0";
        paragraph.textContent = issue;
        message.append(paragraph);
      }

      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLSelectElement ||
        target instanceof HTMLTextAreaElement
      ) {
        (target.closest("label") ?? target).insertAdjacentElement(
          "afterend",
          message,
        );
      } else {
        target.append(message);
      }
    }

    return () => {
      document
        .querySelectorAll(
          "#site-aid-decision-dossier [data-site-aid-local-error]",
        )
        .forEach((message) => message.remove());
    };
  }, [activeStepId, analysisIsCurrent, fieldIssueSignature]);

  useEffect(() => {
    if (wizardFocusRequest === 0) return;
    const pending = pendingWizardFocusRef.current;
    if (!pending) return;
    const target = pending.targetId
      ? document.getElementById(pending.targetId)
      : null;
    const heading = document.getElementById(wizardStepHeadingId(activeStepId));
    (target instanceof HTMLElement ? target : heading)?.focus();
    announceLive(pending.announcement);
    pendingWizardFocusRef.current = null;
  }, [activeStepId, announceLive, wizardFocusRequest]);

  useEffect(() => {
    // Central-register trace fields are persisted input that must be repaired
    // after an import or a legal-branch change, not render-only derived data.
    const normalizedInput = normalizeCentralRegisterTraces(input);
    if (normalizedInput === input) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setInput(normalizedInput);
  }, [input]);

  function nextRowId(kind: DynamicRowKind): string {
    const rowId = `site-aid-${kind}-row-${nextRowIdRef.current}`;
    nextRowIdRef.current += 1;
    return rowId;
  }

  function issueA11y(targetId: string) {
    const hasIssue = analysisIsCurrent && fieldIssuesByTargetId.has(targetId);
    return {
      "aria-invalid": hasIssue || undefined,
      "aria-describedby": hasIssue ? fieldErrorMessageId(targetId) : undefined,
    };
  }

  function issueA11yWithDescription(
    targetId: string,
    ...descriptionIds: string[]
  ) {
    const hasIssue = analysisIsCurrent && fieldIssuesByTargetId.has(targetId);
    const associatedDescriptionIds = [
      ...descriptionIds,
      ...(hasIssue ? [fieldErrorMessageId(targetId)] : []),
    ];
    return {
      "aria-invalid": hasIssue || undefined,
      "aria-describedby":
        associatedDescriptionIds.length > 0
          ? associatedDescriptionIds.join(" ")
          : undefined,
    };
  }

  function navigateToStep(
    stepId: SiteAidDraftStepId,
    options?: {
      targetId?: string;
      announcement?: string;
      preserveReviewReturn?: boolean;
      markDraftChange?: boolean;
    },
  ) {
    const stepIndex = SITE_AID_WIZARD_STEPS.findIndex(
      (step) => step.id === stepId,
    );
    const step = SITE_AID_WIZARD_STEPS[stepIndex];
    pendingWizardFocusRef.current = {
      targetId: options?.targetId,
      announcement:
        options?.announcement ??
        `Étape ${stepIndex + 1} sur ${SITE_AID_WIZARD_STEPS.length} — ${step.title}.`,
    };
    if (!options?.preserveReviewReturn) setReviewEditStepId(null);
    if (stepId !== activeStepId && options?.markDraftChange !== false) {
      setHasDraftChanges(true);
    }
    setActiveStepId(stepId);
    setWizardFocusRequest((current) => current + 1);
  }

  function editFromReview(stepId: SiteAidDraftStepId) {
    setReviewEditStepId(stepId);
    navigateToStep(stepId, {
      preserveReviewReturn: true,
      announcement: `Modification ouverte. Étape ${
        SITE_AID_WIZARD_STEPS.findIndex((step) => step.id === stepId) + 1
      } sur ${SITE_AID_WIZARD_STEPS.length} — ${
        SITE_AID_WIZARD_STEPS.find((step) => step.id === stepId)?.title
      }. L’action suivante ramène directement à Vérifier vos réponses.`,
    });
  }

  function goToPreviousStep() {
    const currentIndex = SITE_AID_WIZARD_STEPS.findIndex(
      (step) => step.id === activeStepId,
    );
    const previous = SITE_AID_WIZARD_STEPS[currentIndex - 1];
    if (previous) navigateToStep(previous.id);
  }

  function goToNextStep() {
    if (reviewEditStepId === activeStepId) {
      setReviewEditStepId(null);
      navigateToStep("review", {
        targetId: `site-aid-review-${activeStepId}`,
        announcement:
          "Modification conservée. Retour direct à Vérifier vos réponses.",
      });
      return;
    }
    const currentIndex = SITE_AID_WIZARD_STEPS.findIndex(
      (step) => step.id === activeStepId,
    );
    const next = SITE_AID_WIZARD_STEPS[currentIndex + 1];
    if (next) navigateToStep(next.id);
  }

  function focusIssueTarget(
    event: ReactMouseEvent<HTMLAnchorElement>,
    issue: string,
  ) {
    const targetId = issueTargetId(issue, input);
    event.preventDefault();
    const stepId = wizardStepForTargetId(targetId);
    setReviewEditStepId(stepId);
    navigateToStep(stepId, {
      preserveReviewReturn: true,
      targetId,
      announcement: `Correction ouverte dans l’étape ${
        SITE_AID_WIZARD_STEPS.findIndex((step) => step.id === stepId) + 1
      } sur ${SITE_AID_WIZARD_STEPS.length}. ${issue}`,
    });
  }

  function focusApplicationIssueTarget(
    event: ReactMouseEvent<HTMLAnchorElement>,
    issue: ApplicationIssue,
  ) {
    event.preventDefault();
    setReviewEditStepId("application");
    navigateToStep("application", {
      preserveReviewReturn: true,
      targetId: issue.targetId,
      announcement: `Correction ouverte dans l’étape 8 sur ${SITE_AID_WIZARD_STEPS.length}. ${issue.message}`,
    });
  }

  function focusPrediagnosisIssueTarget(
    event: ReactMouseEvent<HTMLAnchorElement>,
    issue: ApplicationIssue,
  ) {
    event.preventDefault();
    const target = document.getElementById(issue.targetId);
    if (!(target instanceof HTMLElement)) return;
    target.focus();
    target.scrollIntoView?.({ block: "center" });
    announceLive(`Prédiagnostic à corriger. ${issue.message}`);
  }

  function updateProfile(
    key: keyof SiteAidDecisionInput["profile"],
    value: string | number | undefined,
  ) {
    setInput((current) => ({
      ...current,
      profile: { ...current.profile, [key]: value },
    }));
  }

  function updateCorporateEventOccurred(value: SiteAidTriState) {
    setInput((current) => ({
      ...current,
      profile: {
        ...current.profile,
        deMinimisCorporateEventOccurred: value,
        ...(value === "yes"
          ? {}
          : {
              deMinimisCorporateEventKind: "unknown" as const,
              deMinimisCorporateAidHistoryAdjusted: "unknown" as const,
            }),
        deMinimisCorporateEventEvidence:
          value === current.profile.deMinimisCorporateEventOccurred
            ? current.profile.deMinimisCorporateEventEvidence
            : "",
      },
    }));
  }

  function updateAuthority<Key extends keyof SiteAidDecisionInput["authority"]>(
    key: Key,
    value: SiteAidDecisionInput["authority"][Key],
  ) {
    setInput((current) => ({
      ...current,
      authority: { ...current.authority, [key]: value },
    }));
  }

  function updateAid(patch: Partial<SiteAidDecisionInput["aid"]>) {
    setInput((current) => ({
      ...current,
      aid: { ...current.aid, ...patch },
    }));
  }

  function updateCurrentSgeiEntrustment(value: SiteAidTriState) {
    setInput((current) => ({
      ...current,
      aid: {
        ...current.aid,
        sgeiEntrustmentVerified: value,
        sgeiEntrustmentEvidence:
          value === current.aid.sgeiEntrustmentVerified
            ? current.aid.sgeiEntrustmentEvidence
            : "",
      },
    }));
  }

  function updateCurrentSgeiCompensation(value: SiteAidTriState) {
    setInput((current) => ({
      ...current,
      aid: {
        ...current.aid,
        sgeiSameServiceCompensationPresent: value,
        sgeiCompensationEvidence:
          value === current.aid.sgeiSameServiceCompensationPresent
            ? current.aid.sgeiCompensationEvidence
            : "",
      },
    }));
  }

  function updateQuoteLine(
    index: number,
    patch: Partial<SiteAidQuoteLineInput>,
  ) {
    setInput((current) => ({
      ...current,
      quoteLines: current.quoteLines.map((line, lineIndex) =>
        lineIndex === index ? { ...line, ...patch } : line,
      ),
    }));
  }

  function addQuoteLine() {
    const rowId = nextRowId("quote");
    const lineNumber = input.quoteLines.length + 1;
    setHasInteracted(true);
    setHasDraftChanges(true);
    pendingRowFocusRef.current = { kind: "quote", rowId };
    setQuoteLineIds((current) => [...current, rowId]);
    setInput((current) => ({
      ...current,
      quoteLines: [...current.quoteLines, blankQuoteLine()],
    }));
    announceLive(
      `Ligne de devis ${lineNumber} ajoutée. Le focus est placé sur son libellé.`,
    );
  }

  function removeQuoteLine(index: number) {
    setHasInteracted(true);
    setHasDraftChanges(true);
    const currentRowId = quoteLineIds[index];
    if (quoteLineIds.length === 1) {
      pendingRowFocusRef.current = {
        kind: "quote",
        rowId: currentRowId,
      };
      setQuoteLineIds((current) => [...current]);
      announceLive(
        `Ligne de devis ${index + 1} vidée. 1 ligne reste dans le devis. Le focus revient sur son libellé.`,
      );
    } else {
      const adjacentRowId = quoteLineIds[index + 1] ?? quoteLineIds[index - 1];
      const remainingCount = quoteLineIds.length - 1;
      pendingRowFocusRef.current = {
        kind: "quote",
        rowId: adjacentRowId,
      };
      setQuoteLineIds((current) =>
        current.filter((_, rowIndex) => rowIndex !== index),
      );
      announceLive(
        `Ligne de devis ${index + 1} supprimée. ${remainingCount} ligne${
          remainingCount > 1 ? "s restent" : " reste"
        } dans le devis. Le focus passe à la ligne voisine.`,
      );
    }
    setInput((current) => ({
      ...current,
      quoteLines:
        current.quoteLines.length === 1
          ? [blankQuoteLine()]
          : current.quoteLines.filter((_, lineIndex) => lineIndex !== index),
    }));
  }

  function updateGate(gateId: SiteAidGateId, value: SiteAidTriState) {
    setInput((current) => ({
      ...current,
      gates: { ...current.gates, [gateId]: value },
    }));
  }

  function updateGateEvidence(gateId: SiteAidGateId, value: string) {
    setInput((current) => ({
      ...current,
      gateEvidence: { ...current.gateEvidence, [gateId]: value },
    }));
  }

  function updateStage(stage: SiteAidStage) {
    setInput((current) => ({
      ...current,
      gates: {
        ...current.gates,
        notification: stage === "none" ? "no" : "yes",
      },
      gateEvidence: {
        ...current.gateEvidence,
        notification: stage === "none" ? "" : current.gateEvidence.notification,
      },
      aid: {
        ...current.aid,
        stage,
        prospectiveDeMinimisAidValueAmount:
          stage === "none"
            ? current.aid.prospectiveDeMinimisAidValueAmount
            : undefined,
        prospectiveDeMinimisAidValueEvidence:
          stage === "none"
            ? current.aid.prospectiveDeMinimisAidValueEvidence
            : "",
        legalAidValueAmount:
          stage === "none" ? 0 : current.aid.legalAidValueAmount || undefined,
        approvedFinancialContributionAmount:
          current.aid.instrumentKind === "grant"
            ? stage === "none"
              ? 0
              : current.aid.approvedFinancialContributionAmount || undefined
            : undefined,
        actualFinancialContributionAmount:
          stage === "received" && current.aid.instrumentKind === "grant"
            ? current.aid.actualFinancialContributionAmount || undefined
            : current.aid.instrumentKind === "grant"
              ? 0
              : undefined,
        legalGrantStatus:
          stage === "none" ? "no" : current.aid.legalGrantStatus,
        legalGrantDate: stage === "none" ? "" : current.aid.legalGrantDate,
        finalInvoiceMatchesQuote:
          stage === "received" && current.aid.instrumentKind === "grant"
            ? current.aid.finalInvoiceMatchesQuote
            : "unknown",
        finalInvoiceDate:
          stage === "received" && current.aid.instrumentKind === "grant"
            ? current.aid.finalInvoiceDate
            : "",
        finalInvoiceReference:
          stage === "received" && current.aid.instrumentKind === "grant"
            ? current.aid.finalInvoiceReference
            : "",
        supplierPaymentReference:
          stage === "received" && current.aid.instrumentKind === "grant"
            ? current.aid.supplierPaymentReference
            : "",
        receiptDate:
          stage === "received" && current.aid.instrumentKind === "grant"
            ? current.aid.receiptDate
            : "",
        receiptReference:
          stage === "received" && current.aid.instrumentKind === "grant"
            ? current.aid.receiptReference
            : "",
      },
    }));
  }

  function updateInstrumentKind(instrumentKind: SiteAidInstrumentKind) {
    setInput((current) => {
      if (instrumentKind === "grant") {
        return {
          ...current,
          aid: { ...current.aid, instrumentKind },
        };
      }
      return {
        ...current,
        aid: {
          ...current.aid,
          instrumentKind,
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
        },
      };
    });
  }

  function updateLegalBasisStatus(legalBasisStatus: SiteAidLegalBasisStatus) {
    setInput((current) => {
      const keepsCorporateEventVisible =
        legalBasisStatus === "de-minimis" ||
        current.aidRegister.some((entry) => {
          const resolution = resolveSiteAidLegalBasisResolution(
            entry.regime,
            entry.legalBasisStatus,
          );
          return (
            entry.legalBasisStatus === "de-minimis" ||
            isResolvedDeMinimis(resolution)
          );
        });
      return {
        ...current,
        profile: keepsCorporateEventVisible
          ? current.profile
          : { ...current.profile, ...emptyCorporateEventFields() },
        aid: {
          ...current.aid,
          legalBasisStatus,
          prospectiveDeMinimisAidValueAmount:
            legalBasisStatus === "de-minimis"
              ? current.aid.prospectiveDeMinimisAidValueAmount
              : undefined,
          prospectiveDeMinimisAidValueEvidence:
            legalBasisStatus === "de-minimis"
              ? current.aid.prospectiveDeMinimisAidValueEvidence
              : "",
          deMinimisRegime:
            legalBasisStatus === "de-minimis"
              ? current.aid.deMinimisRegime
              : "",
          nonDeMinimisLegalBasis:
            legalBasisStatus === "not-de-minimis"
              ? current.aid.nonDeMinimisLegalBasis
              : "",
          nonDeMinimisEvidenceReference:
            legalBasisStatus === "not-de-minimis"
              ? current.aid.nonDeMinimisEvidenceReference
              : "",
          ...(legalBasisStatus === "de-minimis" ? {} : emptySgeiFields()),
        },
      };
    });
  }

  function updateCurrentDeMinimisRegime(deMinimisRegime: string) {
    setInput((current) => ({
      ...current,
      aid: {
        ...current.aid,
        deMinimisRegime,
        ...(resolveSiteAidLegalBasisResolution(
          deMinimisRegime,
          current.aid.legalBasisStatus,
        ) === "de-minimis-sgei"
          ? {}
          : emptySgeiFields()),
      },
    }));
  }

  function updatePaymentMode(paymentMode: SiteAidPaymentMode) {
    setInput((current) => {
      if (current.aid.instrumentKind !== "grant") return current;
      return {
        ...current,
        aid: {
          ...current.aid,
          paymentMode,
          documentedPrepaymentPercent:
            paymentMode === "reimbursement"
              ? 0
              : paymentMode === "direct"
                ? 100
                : "unknown",
        },
      };
    });
  }

  function updateRegisterEntry(
    index: number,
    patch: Partial<SiteAidRegisterEntryInput>,
  ) {
    setInput((current) => ({
      ...current,
      aidRegister: current.aidRegister.map((entry, entryIndex) =>
        entryIndex === index ? { ...entry, ...patch } : entry,
      ),
    }));
  }

  function updateRegisterSgeiEntrustment(
    index: number,
    value: SiteAidTriState,
  ) {
    setInput((current) => ({
      ...current,
      aidRegister: current.aidRegister.map((entry, entryIndex) =>
        entryIndex === index
          ? {
              ...entry,
              sgeiEntrustmentVerified: value,
              sgeiEntrustmentEvidence:
                value === entry.sgeiEntrustmentVerified
                  ? entry.sgeiEntrustmentEvidence
                  : "",
            }
          : entry,
      ),
    }));
  }

  function updateRegisterSgeiCompensation(
    index: number,
    value: SiteAidTriState,
  ) {
    setInput((current) => ({
      ...current,
      aidRegister: current.aidRegister.map((entry, entryIndex) =>
        entryIndex === index
          ? {
              ...entry,
              sgeiSameServiceCompensationPresent: value,
              sgeiCompensationEvidence:
                value === entry.sgeiSameServiceCompensationPresent
                  ? entry.sgeiCompensationEvidence
                  : "",
            }
          : entry,
      ),
    }));
  }

  function updateRegisterLegalBasisStatus(
    index: number,
    legalBasisStatus: SiteAidLegalBasisStatus,
  ) {
    setInput((current) => {
      const aidRegister = current.aidRegister.map((entry, entryIndex) =>
        entryIndex === index
          ? {
              ...entry,
              legalBasisStatus,
              regime: legalBasisStatus === "de-minimis" ? entry.regime : "",
              nonDeMinimisLegalBasis:
                legalBasisStatus === "not-de-minimis"
                  ? entry.nonDeMinimisLegalBasis
                  : "",
              nonDeMinimisEvidenceReference:
                legalBasisStatus === "not-de-minimis"
                  ? entry.nonDeMinimisEvidenceReference
                  : "",
              ...(legalBasisStatus === "de-minimis"
                ? {}
                : {
                    ...emptySgeiFields(),
                    ...emptyRegisterSgeiRelationFields(),
                  }),
            }
          : entry,
      );
      const keepsCorporateEventVisible =
        current.aid.legalBasisStatus === "de-minimis" ||
        isResolvedDeMinimis(
          resolveSiteAidLegalBasisResolution(
            current.aid.deMinimisRegime,
            current.aid.legalBasisStatus,
          ),
        ) ||
        aidRegister.some((entry) => {
          const resolution = resolveSiteAidLegalBasisResolution(
            entry.regime,
            entry.legalBasisStatus,
          );
          return (
            entry.legalBasisStatus === "de-minimis" ||
            isResolvedDeMinimis(resolution)
          );
        });
      return {
        ...current,
        profile: keepsCorporateEventVisible
          ? current.profile
          : { ...current.profile, ...emptyCorporateEventFields() },
        aidRegister,
      };
    });
  }

  function updateRegisterDeMinimisRegime(index: number, regime: string) {
    setInput((current) => ({
      ...current,
      aidRegister: current.aidRegister.map((entry, entryIndex) =>
        entryIndex === index
          ? {
              ...entry,
              regime,
              ...(resolveSiteAidLegalBasisResolution(
                regime,
                entry.legalBasisStatus,
              ) === "de-minimis-sgei"
                ? {}
                : {
                    ...emptySgeiFields(),
                    ...emptyRegisterSgeiRelationFields(),
                  }),
            }
          : entry,
      ),
    }));
  }

  function addRegisterEntry() {
    const rowId = nextRowId("register");
    const entryNumber = input.aidRegister.length + 1;
    setHasInteracted(true);
    setHasDraftChanges(true);
    pendingRowFocusRef.current = { kind: "register", rowId };
    setRegisterEntryIds((current) => [...current, rowId]);
    setInput((current) => ({
      ...current,
      aidRegister: [...current.aidRegister, blankRegisterEntry()],
    }));
    announceLive(
      `Aide antérieure ${entryNumber} ajoutée. Le focus est placé sur son organisme.`,
    );
  }

  function removeRegisterEntry(index: number) {
    setHasInteracted(true);
    setHasDraftChanges(true);
    const adjacentRowId =
      registerEntryIds[index + 1] ?? registerEntryIds[index - 1];
    const remainingCount = registerEntryIds.length - 1;
    pendingRowFocusRef.current = {
      kind: "register",
      rowId: adjacentRowId,
    };
    setRegisterEntryIds((current) =>
      current.filter((_, rowIndex) => rowIndex !== index),
    );
    announceLive(
      adjacentRowId
        ? `Aide antérieure ${index + 1} supprimée. ${remainingCount} aide${
            remainingCount > 1 ? "s antérieures restent" : " antérieure reste"
          }. Le focus passe à la ligne voisine.`
        : `Aide antérieure ${index + 1} supprimée. Aucune aide antérieure restante. Le focus revient sur le bouton d’ajout.`,
    );
    setInput((current) => {
      const aidRegister = current.aidRegister.filter(
        (_, entryIndex) => entryIndex !== index,
      );
      const keepsCorporateEventVisible =
        current.aid.legalBasisStatus === "de-minimis" ||
        isResolvedDeMinimis(
          resolveSiteAidLegalBasisResolution(
            current.aid.deMinimisRegime,
            current.aid.legalBasisStatus,
          ),
        ) ||
        aidRegister.some((entry) => {
          const resolution = resolveSiteAidLegalBasisResolution(
            entry.regime,
            entry.legalBasisStatus,
          );
          return (
            entry.legalBasisStatus === "de-minimis" ||
            isResolvedDeMinimis(resolution)
          );
        });
      return {
        ...current,
        profile: keepsCorporateEventVisible
          ? current.profile
          : { ...current.profile, ...emptyCorporateEventFields() },
        aidRegister,
      };
    });
  }

  function updateApplication<Key extends keyof SiteAidApplicationPreparation>(
    key: Key,
    value: SiteAidApplicationPreparation[Key],
  ) {
    setApplication((current) => ({ ...current, [key]: value }));
  }

  function updateApplicationSubmissionStatus(
    submissionStatus: SiteAidApplicationSubmissionStatus,
  ) {
    setApplication((current) => ({
      ...current,
      submissionStatus,
      ...(submissionStatus === "unknown" || submissionStatus === "not-submitted"
        ? {
            submissionDate: "",
            submissionReceiptReference: "",
            submittedPackageMatchesPreparedPackage: "unknown" as const,
          }
        : {}),
    }));
  }

  function updateApplicationDocument(
    index: number,
    patch: Partial<SiteAidApplicationDocument>,
  ) {
    setApplication((current) => ({
      ...current,
      documents: current.documents.map((document, documentIndex) =>
        documentIndex === index ? { ...document, ...patch } : document,
      ),
    }));
  }

  function addApplicationDocument() {
    if (
      application.documents.length >= SITE_AID_DRAFT_MAX_APPLICATION_DOCUMENTS
    ) {
      announceLive(
        `La limite de ${SITE_AID_DRAFT_MAX_APPLICATION_DOCUMENTS} pièces est atteinte.`,
      );
      return;
    }
    const rowId = nextRowId("application-document");
    const documentNumber = application.documents.length + 1;
    setHasInteracted(true);
    setHasDraftChanges(true);
    pendingRowFocusRef.current = {
      kind: "application-document",
      rowId,
    };
    setApplicationDocumentIds((current) => [...current, rowId]);
    setApplication((current) => ({
      ...current,
      documents: [
        ...current.documents,
        createEmptySiteAidApplicationDocument(),
      ],
    }));
    announceLive(
      `Pièce ${documentNumber} ajoutée. Le focus est placé sur son nom.`,
    );
  }

  function removeApplicationDocument(index: number) {
    setHasInteracted(true);
    setHasDraftChanges(true);
    const currentRowId = applicationDocumentIds[index];
    if (applicationDocumentIds.length === 1) {
      pendingRowFocusRef.current = {
        kind: "application-document",
        rowId: currentRowId,
      };
      setApplicationDocumentIds((current) => [...current]);
      setApplication((current) => ({
        ...current,
        documents: [createEmptySiteAidApplicationDocument()],
      }));
      announceLive(
        "Pièce 1 vidée. Une ligne reste disponible. Le focus revient sur son nom.",
      );
      return;
    }

    const adjacentRowId =
      applicationDocumentIds[index + 1] ?? applicationDocumentIds[index - 1];
    const remainingCount = applicationDocumentIds.length - 1;
    pendingRowFocusRef.current = {
      kind: "application-document",
      rowId: adjacentRowId,
    };
    setApplicationDocumentIds((current) =>
      current.filter((_, rowIndex) => rowIndex !== index),
    );
    setApplication((current) => ({
      ...current,
      documents: current.documents.filter(
        (_, documentIndex) => documentIndex !== index,
      ),
    }));
    announceLive(
      `Pièce ${index + 1} supprimée. ${remainingCount} pièce${
        remainingCount > 1 ? "s restent" : " reste"
      }. Le focus passe à la ligne voisine.`,
    );
  }

  function updateApplicationCriterion(
    index: number,
    patch: Partial<SiteAidApplicationCriterion>,
  ) {
    setApplication((current) => ({
      ...current,
      criteria: current.criteria.map((criterion, criterionIndex) =>
        criterionIndex === index ? { ...criterion, ...patch } : criterion,
      ),
    }));
  }

  function addApplicationCriterion() {
    if (
      application.criteria.length >= SITE_AID_DRAFT_MAX_APPLICATION_CRITERIA
    ) {
      announceLive(
        `La limite de ${SITE_AID_DRAFT_MAX_APPLICATION_CRITERIA} critères est atteinte.`,
      );
      return;
    }
    const rowId = nextRowId("application-criterion");
    const criterionNumber = application.criteria.length + 1;
    setHasInteracted(true);
    setHasDraftChanges(true);
    pendingRowFocusRef.current = {
      kind: "application-criterion",
      rowId,
    };
    setApplicationCriterionIds((current) => [...current, rowId]);
    setApplication((current) => ({
      ...current,
      criteria: [...current.criteria, createEmptySiteAidApplicationCriterion()],
    }));
    announceLive(
      `Critère ${criterionNumber} ajouté. Le focus est placé sur le critère publié.`,
    );
  }

  function removeApplicationCriterion(index: number) {
    setHasInteracted(true);
    setHasDraftChanges(true);
    if (applicationCriterionIds.length === 1) {
      pendingRowFocusRef.current = {
        kind: "application-criterion",
        rowId: undefined,
      };
      setApplicationCriterionIds([]);
      setApplication((current) => ({
        ...current,
        criteria: [],
      }));
      announceLive(
        "Dernier critère supprimé. Le focus revient sur l’action d’ajout.",
      );
      return;
    }
    const adjacentRowId =
      applicationCriterionIds[index + 1] ?? applicationCriterionIds[index - 1];
    pendingRowFocusRef.current = {
      kind: "application-criterion",
      rowId: adjacentRowId,
    };
    setApplicationCriterionIds((current) =>
      current.filter((_, criterionIndex) => criterionIndex !== index),
    );
    setApplication((current) => ({
      ...current,
      criteria: current.criteria.filter(
        (_, criterionIndex) => criterionIndex !== index,
      ),
    }));
    announceLive(
      `Critère ${index + 1} supprimé. Le focus passe à la ligne voisine.`,
    );
  }

  function downloadDraft() {
    try {
      const draft = createSiteAidDraftJson(
        input,
        application,
        activeStepId,
        new Date().toISOString(),
        prediagnosis,
      );
      const blob = new Blob([draft], {
        type: "application/json;charset=utf-8",
      });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = siteAidDraftFilename(
        input.profile.reference,
        input.profile.verificationDate,
      );
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 0);
      setDraftActionStatus("exported");
      setDraftActionMessage(
        prediagnosisTransferIsStale
          ? "Brouillon JSON téléchargé sans les modifications non retransférées du prédiagnostic. Retransférez-les avant de considérer ce fichier comme à jour."
          : "Brouillon JSON téléchargé. Conservez ce fichier dans un emplacement privé.",
      );
      setHasDraftChanges(prediagnosisTransferIsStale);
      announceLive("Brouillon JSON téléchargé.");
    } catch (error) {
      setDraftActionStatus("export-error");
      setDraftActionMessage(
        error instanceof SiteAidDraftError
          ? error.message
          : "Le brouillon JSON n’a pas pu être téléchargé.",
      );
      announceLive("Le téléchargement du brouillon JSON a échoué.");
    }
  }

  function applyImportedDraft(draft: ParsedSiteAidDraft) {
    const migratedWithoutPrediagnosis =
      draft.migratedFromVersion === SITE_AID_DRAFT_R23_VERSION ||
      draft.migratedFromVersion === SITE_AID_DRAFT_R24_VERSION;
    const migratedFromR25 =
      draft.migratedFromVersion === SITE_AID_DRAFT_R25_VERSION;
    const migratedFromR26 =
      draft.migratedFromVersion === SITE_AID_DRAFT_R26_VERSION;
    const migratedFromR27 =
      draft.migratedFromVersion === SITE_AID_DRAFT_R27_VERSION;
    const migratedFromR28 =
      draft.migratedFromVersion === SITE_AID_DRAFT_R28_VERSION;
    const migratedToR29 = draft.migratedFromVersion !== undefined;
    const clearedOutOfScopeProspectivePair =
      hasProspectiveDeMinimisPair(draft.input) &&
      !prospectiveDeMinimisValueIsInScope(draft.input);
    const importedInputBeforeRegisterNormalization =
      clearOutOfScopeProspectiveDeMinimisPair(draft.input);
    const importedInput = normalizeCentralRegisterTraces(
      importedInputBeforeRegisterNormalization,
    );
    const normalizedCentralRegisterTrace =
      importedInput !== importedInputBeforeRegisterNormalization;
    const importedDraftHasLocalChanges =
      migratedToR29 ||
      clearedOutOfScopeProspectivePair ||
      normalizedCentralRegisterTrace;
    setInput(importedInput);
    setApplication(draft.application);
    setPrediagnosis(draft.prediagnosis);
    setQuoteLineIds(importedInput.quoteLines.map(() => nextRowId("quote")));
    setRegisterEntryIds(
      importedInput.aidRegister.map(() => nextRowId("register")),
    );
    setApplicationDocumentIds(
      draft.application.documents.map(() => nextRowId("application-document")),
    );
    setApplicationCriterionIds(
      draft.application.criteria.map(() => nextRowId("application-criterion")),
    );
    setHasInteracted(true);
    setHasRequestedVerdict(false);
    setPendingConfirmation(null);
    setPendingImportedDraft(null);
    setHasDraftChanges(importedDraftHasLocalChanges);
    setActionStatus("idle");
    setDraftActionStatus("imported");
    setDraftActionMessage(
      migratedWithoutPrediagnosis
        ? "Ancien brouillon R23/R24 repris et migré en R29. Aucun prédiagnostic n’a été transféré : cet état reste facultatif et neutre. Les nouveaux champs R26 à R28 restent vides ou à confirmer, sans déduction favorable. Relancez l’analyse puis exportez le brouillon migré."
        : migratedFromR25
          ? "Ancien brouillon R25 repris et migré en R29. Son prédiagnostic éventuel est conservé sans créer de réponse ; les champs R26 à R28 restent vides ou à confirmer, sans déduction favorable. Relancez l’analyse puis exportez le brouillon migré."
          : migratedFromR26
            ? "Ancien brouillon R26 repris et migré en R29. Sa borne fiscale pêche courante et sa paire prospective sont conservées ; les bornes R27, la qualification territoriale et tout suivi de dépôt R28 restent vides ou à confirmer, sans déduction favorable. Relancez l’analyse puis exportez le brouillon migré."
            : migratedFromR27
              ? "Ancien brouillon R27 repris et migré en R29. Les faits existants sont conservés ; la date structurée de la preuve territoriale et le suivi après dépôt restent vides ou à confirmer. Aucun dépôt n’est inventé. Relancez l’analyse puis exportez le brouillon migré."
              : migratedFromR28
                ? "Brouillon R28 repris et migré en R29. Les faits et le suivi existants sont conservés ; les références d’échéance et d’accusé doivent satisfaire les contrôles R29. Relancez l’analyse puis exportez le brouillon migré."
                : `Brouillon repris. Relancez explicitement l’analyse avant tout export TXT ou impression.${
                    clearedOutOfScopeProspectivePair
                      ? " La valeur prospective hors précontrôle a été vidée ; exportez le brouillon nettoyé."
                      : ""
                  }${
                    normalizedCentralRegisterTrace
                      ? " Une trace du registre central incompatible avec le périmètre juridique a été normalisée et vidée ; cette modification locale n’est pas encore exportée."
                      : ""
                  }`,
    );
    navigateToStep(draft.activeStepId, {
      markDraftChange: false,
      announcement: `Brouillon repris. Étape ${
        SITE_AID_WIZARD_STEPS.findIndex(
          (step) => step.id === draft.activeStepId,
        ) + 1
      } sur ${SITE_AID_WIZARD_STEPS.length} — ${
        SITE_AID_WIZARD_STEPS.find((step) => step.id === draft.activeStepId)
          ?.title
      }. Aucun verdict n’a été restauré.${
        migratedWithoutPrediagnosis
          ? " Aucun prédiagnostic n’a été transféré par cette migration R23/R24."
          : migratedFromR25
            ? " Le prédiagnostic R25 éventuel est conservé ; aucune réponse n’est inventée."
            : migratedFromR26
              ? " Les champs R26 sont conservés ; les nouveaux champs R27/R28 restent neutres et le brouillon migré doit être réexporté."
              : migratedFromR27
                ? " Les champs R27 sont conservés ; la date territoriale et le suivi de dépôt R28 restent neutres et le brouillon migré doit être réexporté."
                : migratedFromR28
                  ? " Les champs R28 sont conservés ; les références doivent être revérifiées sous le contrat R29 et le brouillon migré doit être réexporté."
                  : ""
      }${
        clearedOutOfScopeProspectivePair
          ? " La paire prospective hors périmètre a été vidée et le brouillon nettoyé reste à exporter."
          : ""
      }${
        normalizedCentralRegisterTrace
          ? " Une trace du registre central hors périmètre a été normalisée ; cette modification locale reste à exporter."
          : ""
      }`,
    });
  }

  async function importDraftFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files?.[0];
    event.currentTarget.value = "";
    if (!file) return;
    setDraftActionStatus("idle");
    setDraftActionMessage("");
    try {
      if (file.size > SITE_AID_DRAFT_MAX_BYTES) {
        throw new SiteAidDraftError(
          "too-large",
          "Ce brouillon dépasse la taille maximale autorisée de 256 Kio.",
        );
      }
      const draft = parseSiteAidDraftJson(await file.text());
      if (hasDraftChanges) {
        setPendingImportedDraft(draft);
        return;
      }
      applyImportedDraft(draft);
    } catch (error) {
      setPendingImportedDraft(null);
      setDraftActionStatus("import-error");
      setDraftActionMessage(
        error instanceof SiteAidDraftError
          ? error.message
          : "Ce fichier n’a pas pu être lu comme un brouillon de cet outil.",
      );
      announceLive("Import du brouillon refusé.");
      draftImportTriggerRef.current?.focus();
    }
  }

  function confirmDraftImport() {
    if (!pendingImportedDraft) return;
    applyImportedDraft(pendingImportedDraft);
  }

  function cancelDraftImport() {
    setPendingImportedDraft(null);
    setDraftActionStatus("idle");
    setDraftActionMessage("");
    draftImportTriggerRef.current?.focus();
  }

  function applyExample() {
    const example = brittanyExample();
    const applicationExample = brittanyApplicationExample();
    setInput(example);
    setApplication(applicationExample);
    setPrediagnosis(createEmptySiteAidPreDiagnosis());
    setQuoteLineIds(example.quoteLines.map(() => nextRowId("quote")));
    setRegisterEntryIds(example.aidRegister.map(() => nextRowId("register")));
    setApplicationDocumentIds(
      applicationExample.documents.map(() => nextRowId("application-document")),
    );
    setApplicationCriterionIds(
      applicationExample.criteria.map(() => nextRowId("application-criterion")),
    );
    setHasInteracted(true);
    setHasRequestedVerdict(false);
    setPendingConfirmation(null);
    setPendingImportedDraft(null);
    setHasDraftChanges(true);
    setActionStatus("idle");
    setDraftActionStatus("idle");
    setDraftActionMessage("");
    navigateToStep("review", {
      targetId: "site-aid-analyze-button",
      announcement:
        "Exemple chargé. Revue ouverte. Vérifiez les données puis activez « Analyser le dossier » pour obtenir un verdict et rendre les exports disponibles.",
    });
  }

  function requestExampleLoad() {
    if (!hasDraftChanges) {
      applyExample();
      return;
    }
    setPendingConfirmation("example");
  }

  function confirmExampleLoad() {
    applyExample();
  }

  function cancelExampleLoad() {
    setPendingConfirmation(null);
    exampleLoadTriggerRef.current?.focus();
  }

  function resetDossier() {
    setInput(initialInput(currentLocalIsoDate()));
    setApplication(createEmptySiteAidApplicationPreparation());
    setPrediagnosis(createEmptySiteAidPreDiagnosis());
    setQuoteLineIds([nextRowId("quote")]);
    setRegisterEntryIds([]);
    setApplicationDocumentIds([nextRowId("application-document")]);
    setApplicationCriterionIds([]);
    setHasInteracted(false);
    setHasRequestedVerdict(false);
    setPendingConfirmation(null);
    setPendingImportedDraft(null);
    setHasDraftChanges(true);
    setActionStatus("idle");
    setDraftActionStatus("idle");
    setDraftActionMessage("");
    navigateToStep("profile", {
      announcement:
        "Dossier réinitialisé. Étape 1 sur 9 — Profil et source officielle. Aucun verdict n’est rendu.",
    });
  }

  function cancelReset() {
    setPendingConfirmation(null);
    resetTriggerRef.current?.focus();
  }

  function outputDateStillMatchesAnalysis(): boolean {
    const actualLocalDate = currentLocalIsoDate();
    if (actualLocalDate === editableLocalDate) return true;
    setEditableLocalDate(actualLocalDate);
    setActionStatus("idle");
    staleAnalysisAnnouncementSentRef.current = true;
    announceLive(
      "Date locale modifiée. Analyse périmée : relancez l’analyse avant tout téléchargement TXT ou impression.",
    );
    return false;
  }

  function downloadReport() {
    if (!outputDateStillMatchesAnalysis() || !canShareDecisionReport) return;
    try {
      const blob = new Blob(["\uFEFF", report], {
        type: "text/plain;charset=utf-8",
      });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = siteAidDecisionReportFilename(
        input.profile.reference,
        input.profile.verificationDate,
      );
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 0);
      setActionStatus("downloaded");
      announceLive("Dossier texte téléchargé.");
    } catch {
      setActionStatus("download-error");
      announceLive("Le téléchargement a échoué.");
    }
  }

  function printReport() {
    if (!outputDateStillMatchesAnalysis() || !canShareDecisionReport) return;
    window.print();
  }

  function renderWizardPanelNavigation() {
    const activeIndex = SITE_AID_WIZARD_STEPS.findIndex(
      (step) => step.id === activeStepId,
    );
    const hasPrevious = activeIndex > 0;
    const hasNext = activeIndex < SITE_AID_WIZARD_STEPS.length - 1;
    return (
      <div className="mt-5 border-t border-zinc-200 pt-4 dark:border-zinc-800">
        <p
          id={`site-aid-soft-navigation-help-${activeStepId}`}
          className="m-0 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300"
        >
          Vous pouvez avancer avec des éléments à confirmer : changer d’étape ne
          valide ni l’éligibilité, ni les preuves, ni le financement.
        </p>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:justify-between">
          {hasPrevious ? (
            <button
              type="button"
              onClick={goToPreviousStep}
              aria-describedby={`site-aid-soft-navigation-help-${activeStepId}`}
              className="min-h-11 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-black text-zinc-900 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
            >
              Étape précédente
            </button>
          ) : (
            <span aria-hidden="true" />
          )}
          {hasNext ? (
            <button
              type="button"
              onClick={goToNextStep}
              aria-describedby={`site-aid-soft-navigation-help-${activeStepId}`}
              className="min-h-11 rounded-lg bg-violet-700 px-4 py-2 text-sm font-black text-white hover:bg-violet-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2"
            >
              {reviewEditStepId === activeStepId
                ? "Retour à Vérifier vos réponses"
                : activeStepId === "application"
                  ? "Vérifier vos réponses"
                  : "Étape suivante"}
            </button>
          ) : null}
        </div>
      </div>
    );
  }

  function renderStepErrorStatus(stepId: SiteAidDraftStepId) {
    const count = errorCountByStepId.get(stepId) ?? 0;
    if (!analysisIsCurrent || count === 0) return null;
    return (
      <div className="mb-4 flex flex-col gap-3 rounded-xl border border-rose-300 bg-rose-50 p-3 text-sm text-rose-950 dark:border-rose-800 dark:bg-rose-950/30 dark:text-rose-100 sm:flex-row sm:items-center sm:justify-between">
        <p className="m-0 font-bold">
          {count} erreur{count > 1 ? "s" : ""} à corriger dans cette étape.
          Chaque message apparaît sous le contrôle concerné.
        </p>
        <button
          type="button"
          onClick={() =>
            navigateToStep("review", {
              targetId: "site-aid-error-summary",
              announcement:
                "Retour à Vérifier vos réponses. Le résumé des corrections est ouvert.",
            })
          }
          className="min-h-11 shrink-0 rounded-lg border border-rose-400 bg-white px-3 py-2 text-xs font-black text-rose-950 hover:bg-rose-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 dark:border-rose-700 dark:bg-zinc-950 dark:text-rose-100"
        >
          Retour à Vérifier vos réponses
        </button>
      </div>
    );
  }

  return (
    <>
      <style>
        {
          "@media print { body *:not(#site-aid-decision-dossier):not(#site-aid-decision-dossier *):not(:has(#site-aid-decision-dossier)) { display: none !important; } #site-aid-decision-dossier { position: absolute !important; inset: 0 auto auto 0 !important; width: 100% !important; margin: 0 !important; overflow: visible !important; border: 0 !important; box-shadow: none !important; background: white !important; color: #18181b !important; } #site-aid-decision-dossier > :not(.site-aid-print-report) { display: none !important; } #site-aid-decision-dossier .site-aid-print-report { display: block !important; margin: 0 !important; background: white !important; color: #18181b !important; } }"
        }
      </style>

      <section
        id="site-aid-decision-dossier"
        className="not-prose my-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
        aria-labelledby="site-aid-decision-title"
        data-read-time-exclude="true"
        data-site-aid-analysis-state={
          analysisIsStale ? "stale" : analysisIsCurrent ? "current" : "not-run"
        }
      >
        <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-6 text-white sm:px-6">
          <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-300">
            Outil local · données non envoyées · aucune éligibilité conclue
          </p>
          <h3
            id="site-aid-decision-title"
            tabIndex={-1}
            className="mb-0 mt-2 text-xl font-black sm:text-2xl"
          >
            Dossier d’aide et de trésorerie pour un site
          </h3>
          <p className="mb-0 mt-2 max-w-3xl text-sm leading-relaxed text-zinc-300">
            Huit courtes étapes métier répartissent le profil, le devis, les
            critères, le droit, le versement, la trésorerie, l’historique et la
            préparation de la candidature, avant « Vérifier vos réponses ». Un
            seul panneau est affiché à la fois. Une inconnue reste inconnue et
            n’empêche jamais de poursuivre le parcours.
          </p>
          <button
            ref={exampleLoadTriggerRef}
            type="button"
            onClick={requestExampleLoad}
            className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-violet-400/50 bg-violet-500/15 px-4 py-2 text-sm font-bold text-violet-100 transition hover:bg-violet-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
          >
            <FileCheck2 className="size-4" aria-hidden="true" />
            Charger l’exemple Bretagne
          </button>
          {exampleLoadRequested ? (
            <div
              id="site-aid-example-confirmation"
              role="group"
              aria-labelledby="site-aid-example-confirm-title"
              aria-describedby="site-aid-example-confirm-description"
              onKeyDown={(event) => {
                if (event.key !== "Escape") return;
                event.preventDefault();
                cancelExampleLoad();
              }}
              className="mt-4 max-w-2xl rounded-xl border border-amber-300 bg-amber-50 p-4 text-amber-950 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-100"
            >
              <p
                id="site-aid-example-confirm-title"
                className="m-0 text-sm font-black"
              >
                Remplacer le brouillon par l’exemple Bretagne ?
              </p>
              <p
                id="site-aid-example-confirm-description"
                className="mb-0 mt-1 text-xs leading-relaxed"
              >
                Les saisies, lignes de devis et aides antérieures du brouillon
                seront remplacées. Cette action ne peut pas être annulée.
              </p>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                <button
                  type="button"
                  onClick={confirmExampleLoad}
                  className="min-h-11 rounded-lg bg-amber-800 px-4 py-2 text-xs font-black text-white hover:bg-amber-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                >
                  Confirmer le remplacement
                </button>
                <button
                  ref={exampleLoadCancelRef}
                  type="button"
                  onClick={cancelExampleLoad}
                  className="min-h-11 rounded-lg border border-amber-400 bg-white px-4 py-2 text-xs font-black text-amber-950 hover:bg-amber-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 dark:border-amber-700 dark:bg-zinc-950 dark:text-amber-100"
                >
                  Annuler et conserver le brouillon
                </button>
              </div>
            </div>
          ) : null}
        </div>

        {canShareDecisionReport ? (
          <pre className="site-aid-print-report hidden whitespace-pre-wrap p-6 font-sans text-[10px] leading-relaxed print:block">
            {report}
          </pre>
        ) : null}

        <div className="border-b border-zinc-200 bg-zinc-50 px-4 py-5 dark:border-zinc-800 dark:bg-zinc-900/50 sm:px-6">
          <p className="m-0 text-sm font-black text-zinc-950 dark:text-white">
            Reprendre ce brouillon sans l’envoyer
          </p>
          <p
            id="site-aid-draft-privacy-help"
            className="mb-0 mt-1 max-w-4xl text-xs leading-relaxed text-zinc-600 dark:text-zinc-300"
          >
            Le fichier JSON peut contenir des montants, preuves et éléments
            juridiques économiquement sensibles. Il est créé ou lu uniquement
            dans votre navigateur, sans stockage automatique, sans localStorage,
            sans sessionStorage et sans réseau. Conservez-le dans un emplacement
            privé. L’import ne restaure jamais un verdict, un rapport TXT ou une
            impression analysée.
          </p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={downloadDraft}
              aria-describedby="site-aid-draft-privacy-help"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-black text-zinc-900 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
            >
              <FileJson className="size-4" aria-hidden="true" />
              Exporter le brouillon JSON
            </button>
            <button
              ref={draftImportTriggerRef}
              type="button"
              onClick={() => draftFileInputRef.current?.click()}
              aria-describedby="site-aid-draft-privacy-help"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-black text-zinc-900 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
            >
              <Upload className="size-4" aria-hidden="true" />
              Importer un brouillon JSON
            </button>
            <input
              ref={draftFileInputRef}
              type="file"
              accept=".json,application/json"
              onChange={importDraftFile}
              className="sr-only"
              aria-label="Choisir un brouillon JSON à importer"
            />
          </div>
          <p
            data-site-aid-unsaved-status={
              hasDraftChanges ? "unsaved" : "aligned"
            }
            aria-label="État de sauvegarde du brouillon"
            className={`mb-0 mt-3 text-xs font-black ${
              hasDraftChanges
                ? "text-amber-800 dark:text-amber-300"
                : "text-emerald-800 dark:text-emerald-300"
            }`}
          >
            {hasDraftChanges
              ? "Modifications non exportées — la fermeture de la page déclenchera l’avertissement natif du navigateur."
              : "Aucune modification non exportée depuis le dernier export ou import."}
          </p>
          {draftActionMessage ? (
            <p
              data-site-aid-draft-status={draftActionStatus}
              className={`mb-0 mt-3 text-xs font-semibold leading-relaxed ${
                draftActionStatus === "import-error" ||
                draftActionStatus === "export-error"
                  ? "text-rose-700 dark:text-rose-300"
                  : "text-emerald-700 dark:text-emerald-300"
              }`}
            >
              {draftActionMessage}
            </p>
          ) : null}
          {pendingImportedDraft ? (
            <div
              id="site-aid-import-confirmation"
              role="group"
              aria-labelledby="site-aid-import-confirm-title"
              aria-describedby="site-aid-import-confirm-description"
              onKeyDown={(event) => {
                if (event.key !== "Escape") return;
                event.preventDefault();
                cancelDraftImport();
              }}
              className="mt-4 max-w-2xl rounded-xl border border-amber-300 bg-amber-50 p-4 text-amber-950 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-100"
            >
              <p
                id="site-aid-import-confirm-title"
                className="m-0 text-sm font-black"
              >
                Remplacer le brouillon modifié par le fichier importé ?
              </p>
              <p
                id="site-aid-import-confirm-description"
                className="mb-0 mt-1 text-xs leading-relaxed"
              >
                Les saisies en cours seront remplacées. Aucun verdict ni rapport
                du fichier ne sera restauré.
              </p>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                <button
                  type="button"
                  onClick={confirmDraftImport}
                  className="min-h-11 rounded-lg bg-amber-800 px-4 py-2 text-xs font-black text-white hover:bg-amber-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                >
                  Confirmer l’import
                </button>
                <button
                  ref={draftImportCancelRef}
                  type="button"
                  onClick={cancelDraftImport}
                  className="min-h-11 rounded-lg border border-amber-400 bg-white px-4 py-2 text-xs font-black text-amber-950 hover:bg-amber-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 dark:border-amber-700 dark:bg-zinc-950 dark:text-amber-100"
                >
                  Annuler et conserver le brouillon
                </button>
              </div>
            </div>
          ) : null}
        </div>

        <div
          id="site-aid-transferred-prediagnosis-summary"
          tabIndex={-1}
          className="border-b border-zinc-200 bg-violet-50 px-4 py-4 text-xs text-violet-950 dark:border-zinc-800 dark:bg-violet-950/20 dark:text-violet-100 sm:px-6"
        >
          <p className="m-0 font-black">Prédiagnostic déclaratif intégré</p>
          {prediagnosis.transferredAt ? (
            <p className="mb-0 mt-1 leading-relaxed">
              14 réponses transférées :{" "}
              {
                prediagnosis.items.filter(
                  (item) => item.status === "documented",
                ).length
              }{" "}
              oui documenté(s),{" "}
              {
                prediagnosis.items.filter((item) => item.status === "confirm")
                  .length
              }{" "}
              à confirmer et{" "}
              {prediagnosis.items.filter((item) => item.status === "no").length}{" "}
              non. Aucun statut, libellé ou texte de preuve ne devient
              automatiquement un fait juridique, un montant ou une exclusion.
              Les réponses « à confirmer » et « non » rendent le verdict global
              incomplet jusqu’à leur résolution.
            </p>
          ) : (
            <p className="mb-0 mt-1 leading-relaxed">
              Aucun transfert effectué. Le JSON conserve quatorze contrôles « à
              confirmer » sans inventer de réponse.
            </p>
          )}
          {prediagnosisTransferIsStale ? (
            <div
              data-site-aid-prediagnosis-stale="true"
              className="mt-3 rounded-lg border border-amber-400 bg-amber-50 p-3 text-amber-950 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-100"
            >
              <p className="m-0 font-black">
                Analyse invalidée : le prédiagnostic a changé depuis son dernier
                transfert.
              </p>
              <p className="mb-0 mt-1 leading-relaxed">
                Le rapport TXT et l’impression restent verrouillés. Retransférez
                les quatorze réponses avant de relancer l’analyse ; le brouillon
                JSON n’intègre pas encore ces modifications.
              </p>
              <button
                type="button"
                className="mt-3 min-h-11 rounded-lg border border-amber-500 bg-white px-3 py-2 text-xs font-black text-amber-950 hover:bg-amber-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2 dark:border-amber-700 dark:bg-zinc-950 dark:text-amber-100"
                onClick={() => {
                  const target = document.getElementById(
                    "site-aid-prediagnosis-transfer-button",
                  );
                  if (!(target instanceof HTMLElement)) return;
                  target.focus();
                  target.scrollIntoView?.({ block: "center" });
                  announceLive(
                    "Retransférez le prédiagnostic avant de relancer l’analyse.",
                  );
                }}
              >
                Retransférer le prédiagnostic
              </button>
            </div>
          ) : null}
        </div>

        <div
          className="space-y-8 p-4 sm:p-6"
          data-site-aid-interactive
          onChangeCapture={() => {
            setHasInteracted(true);
            setHasDraftChanges(true);
          }}
        >
          <nav aria-label="Progression du dossier">
            <ol className="m-0 grid list-none gap-2 p-0 sm:grid-cols-2 lg:grid-cols-3">
              {SITE_AID_WIZARD_STEPS.map((step, index) => (
                <li key={step.id}>
                  <button
                    type="button"
                    data-site-aid-wizard-step={step.id}
                    aria-current={activeStepId === step.id ? "step" : undefined}
                    aria-controls={
                      activeStepId === step.id
                        ? wizardStepPanelId(step.id)
                        : undefined
                    }
                    onClick={() => navigateToStep(step.id)}
                    className={`min-h-11 w-full rounded-lg border px-3 py-2 text-left text-xs font-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 ${
                      activeStepId === step.id
                        ? "border-violet-700 bg-violet-700 text-white"
                        : "border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
                    }`}
                  >
                    <span className="block opacity-70">Étape {index + 1}</span>
                    <span className="flex items-center justify-between gap-2">
                      <span>{step.shortLabel}</span>
                      {(errorCountByStepId.get(step.id) ?? 0) > 0 ? (
                        <span className="rounded-full bg-rose-700 px-2 py-0.5 text-[10px] text-white">
                          {errorCountByStepId.get(step.id)}{" "}
                          <span className="sr-only">
                            erreur
                            {(errorCountByStepId.get(step.id) ?? 0) > 1
                              ? "s"
                              : ""}
                          </span>
                        </span>
                      ) : null}
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </nav>

          <div className="flex flex-col gap-2 rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-900/40 sm:flex-row sm:items-center sm:justify-between">
            <p className="m-0 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              {hasDraftChanges
                ? "Modifications non exportées"
                : "Brouillon aligné avec le dernier export ou import"}
            </p>
            <button
              type="button"
              onClick={downloadDraft}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs font-black text-zinc-900 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
            >
              <FileJson className="size-4" aria-hidden="true" />
              Sauvegarder cette étape en JSON
            </button>
          </div>

          <p
            className="sr-only"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            <span
              key={liveAnnouncement.sequence}
              data-live-announcement-sequence={liveAnnouncement.sequence}
            >
              {liveAnnouncement.message}
            </span>
          </p>

          {activeStepId === "profile" ? (
            <section
              id={wizardStepPanelId("profile")}
              data-site-aid-wizard-panel="profile"
              aria-labelledby={wizardStepHeadingId("profile")}
            >
              <h4
                id={wizardStepHeadingId("profile")}
                tabIndex={-1}
                className="mb-4 mt-0 text-lg font-black text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 dark:text-white"
              >
                Étape 1 sur 9 — Profil et source officielle
              </h4>
              {renderStepErrorStatus("profile")}
              <fieldset
                id="site-aid-profile-section"
                tabIndex={-1}
                className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5"
              >
                <legend className="px-2 text-sm font-black text-zinc-950 dark:text-white">
                  1. Profil et source officielle
                </legend>
                <p className="mb-4 mt-0 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                  Une référence interne suffit : ne saisissez ni nom de
                  dirigeant, ni SIREN, ni donnée personnelle.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className={labelClassName}>
                    Référence interne facultative
                    <input
                      className={inputClassName}
                      value={input.profile.reference}
                      onChange={(event) =>
                        updateProfile("reference", event.target.value)
                      }
                      placeholder="Ex. projet vitrine juillet"
                    />
                  </label>
                  <label className={labelClassName}>
                    Date de vérification
                    <input
                      id={issueFieldIds.profileVerificationDate}
                      type="date"
                      max={editableLocalDate}
                      className={inputClassName}
                      value={input.profile.verificationDate}
                      {...issueA11y(issueFieldIds.profileVerificationDate)}
                      onChange={(event) =>
                        updateProfile("verificationDate", event.target.value)
                      }
                    />
                  </label>
                  <label className={labelClassName}>
                    Territoire de l’établissement
                    <input
                      id={issueFieldIds.profileTerritory}
                      className={inputClassName}
                      value={input.profile.territory}
                      {...issueA11y(issueFieldIds.profileTerritory)}
                      onChange={(event) =>
                        updateProfile("territory", event.target.value)
                      }
                      placeholder="Commune, EPCI et région"
                    />
                  </label>
                  <details
                    open={
                      currentAidHasDeMinimisBranch ||
                      (input.profile.deMinimisEuTerritorialStatus ??
                        "unknown") !== "unknown" ||
                      Boolean(
                        input.profile.deMinimisEuTerritorialEvidence?.trim() ||
                        input.profile.deMinimisEuTerritorialEvidenceDate?.trim(),
                      )
                    }
                    className="rounded-lg border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-900/50 sm:col-span-2"
                  >
                    <summary className="cursor-pointer text-xs font-black text-zinc-900 dark:text-zinc-100">
                      Qualification territoriale UE — seulement si une base de
                      minimis est retenue
                    </summary>
                    <p className="mb-0 mt-2 text-[11px] leading-relaxed text-zinc-600 dark:text-zinc-300">
                      Cette vérification juridique avancée reste masquée tant
                      que le dossier ne retient pas une base de minimis. Le nom
                      du territoire ne suffit jamais à conclure.
                    </p>
                    <div className="mt-3 grid gap-4 sm:grid-cols-2">
                      <label className={labelClassName}>
                        Applicabilité territoriale du droit de l’Union
                        <select
                          id={issueFieldIds.profileEuTerritorialStatus}
                          className={inputClassName}
                          value={
                            input.profile.deMinimisEuTerritorialStatus ??
                            "unknown"
                          }
                          {...issueA11yWithDescription(
                            issueFieldIds.profileEuTerritorialStatus,
                            "site-aid-profile-eu-territorial-help",
                          )}
                          onChange={(event) =>
                            updateProfile(
                              "deMinimisEuTerritorialStatus",
                              event.target.value as SiteAidEuTerritorialStatus,
                            )
                          }
                        >
                          {euTerritorialStatusOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <span
                          id="site-aid-profile-eu-territorial-help"
                          className={helpClassName}
                        >
                          Le siège et l’État membre de l’autorité ne prouvent
                          pas cette applicabilité. En cas de doute, conservez «
                          à confirmer » ou demandez une revue externe.
                        </span>
                      </label>
                      <label className={labelClassName}>
                        Date propre de la preuve territoriale
                        <input
                          id={issueFieldIds.profileEuTerritorialEvidenceDate}
                          type="date"
                          max={
                            isValidIsoDate(input.profile.verificationDate) &&
                            input.profile.verificationDate < editableLocalDate
                              ? input.profile.verificationDate
                              : editableLocalDate
                          }
                          className={inputClassName}
                          value={
                            input.profile.deMinimisEuTerritorialEvidenceDate ??
                            ""
                          }
                          {...issueA11y(
                            issueFieldIds.profileEuTerritorialEvidenceDate,
                          )}
                          onChange={(event) =>
                            updateProfile(
                              "deMinimisEuTerritorialEvidenceDate",
                              event.target.value,
                            )
                          }
                        />
                        <span className={helpClassName}>
                          Cette date structurée doit être au plus égale à la
                          vérification du dossier. Elle sera contrôlée contre la
                          nouvelle date locale capturée lors de l’analyse.
                        </span>
                      </label>
                      <label className={`${labelClassName} sm:col-span-2`}>
                        Source ou autorité et référence de la qualification
                        territoriale UE
                        <textarea
                          id={issueFieldIds.profileEuTerritorialEvidence}
                          className={inputClassName}
                          maxLength={20_000}
                          rows={2}
                          value={
                            input.profile.deMinimisEuTerritorialEvidence ?? ""
                          }
                          {...issueA11yWithDescription(
                            issueFieldIds.profileEuTerritorialEvidence,
                            "site-aid-profile-eu-territorial-evidence-help",
                          )}
                          onChange={(event) =>
                            updateProfile(
                              "deMinimisEuTerritorialEvidence",
                              event.target.value,
                            )
                          }
                          placeholder="Ex. Autorité compétente, réponse TERR-2026-04, article territorial examiné"
                        />
                        <span
                          id="site-aid-profile-eu-territorial-evidence-help"
                          className={helpClassName}
                        >
                          Identifiez la source ou l’autorité et sa référence
                          précise. La date est saisie séparément : une date
                          trouvée dans le texte libre n’est jamais utilisée
                          comme ancre. La preuve reste déclarative et non
                          authentifiée.
                        </span>
                      </label>
                    </div>
                  </details>
                  <label className={labelClassName}>
                    Activité et clientèle
                    <input
                      id={issueFieldIds.profileActivity}
                      className={inputClassName}
                      value={input.profile.activity}
                      {...issueA11y(issueFieldIds.profileActivity)}
                      onChange={(event) =>
                        updateProfile("activity", event.target.value)
                      }
                      placeholder="Ex. commerce B2C de proximité"
                    />
                  </label>
                  <label className={labelClassName}>
                    Âge de l’entreprise, en mois
                    <input
                      id={issueFieldIds.profileBusinessAge}
                      type="number"
                      min="0"
                      step="1"
                      inputMode="numeric"
                      className={inputClassName}
                      value={numberValue(input.profile.businessAgeMonths)}
                      {...issueA11y(issueFieldIds.profileBusinessAge)}
                      onChange={(event) =>
                        updateProfile(
                          "businessAgeMonths",
                          optionalNumber(event.target.value),
                        )
                      }
                    />
                  </label>
                  <label className={labelClassName}>
                    Effectif
                    <input
                      id={issueFieldIds.profileEmployeeCount}
                      type="number"
                      min="0"
                      step="1"
                      inputMode="numeric"
                      className={inputClassName}
                      value={numberValue(input.profile.employeeCount)}
                      {...issueA11y(issueFieldIds.profileEmployeeCount)}
                      onChange={(event) =>
                        updateProfile(
                          "employeeCount",
                          optionalNumber(event.target.value),
                        )
                      }
                    />
                  </label>
                  <label className={labelClassName}>
                    Chiffre d’affaires annuel HT
                    <input
                      id={issueFieldIds.profileAnnualRevenue}
                      type="number"
                      min="0"
                      step="0.01"
                      inputMode="decimal"
                      className={inputClassName}
                      value={numberValue(input.profile.annualRevenueExVat)}
                      {...issueA11y(issueFieldIds.profileAnnualRevenue)}
                      onChange={(event) =>
                        updateProfile(
                          "annualRevenueExVat",
                          optionalNumber(event.target.value),
                        )
                      }
                    />
                  </label>
                  <label className={labelClassName}>
                    Forme ou statut
                    <input
                      id={issueFieldIds.profileLegalStatus}
                      className={inputClassName}
                      value={input.profile.legalStatus}
                      {...issueA11y(issueFieldIds.profileLegalStatus)}
                      onChange={(event) =>
                        updateProfile("legalStatus", event.target.value)
                      }
                      placeholder="Ex. SAS, SARL, micro-entreprise"
                    />
                  </label>
                  <label className={`${labelClassName} sm:col-span-2`}>
                    Problème métier que le site doit résoudre
                    <input
                      id={issueFieldIds.profileBusinessNeed}
                      className={inputClassName}
                      value={input.profile.businessNeed}
                      {...issueA11y(issueFieldIds.profileBusinessNeed)}
                      onChange={(event) =>
                        updateProfile("businessNeed", event.target.value)
                      }
                      placeholder="Ex. réduire les demandes non qualifiées"
                    />
                  </label>
                  <label className={labelClassName}>
                    Indicateur de réussite
                    <input
                      id={issueFieldIds.profileSuccessIndicator}
                      className={inputClassName}
                      value={input.profile.successIndicator}
                      {...issueA11y(issueFieldIds.profileSuccessIndicator)}
                      onChange={(event) =>
                        updateProfile("successIndicator", event.target.value)
                      }
                      placeholder="Ex. demandes qualifiées par mois"
                    />
                  </label>
                  <label className={labelClassName}>
                    Responsable de la décision
                    <input
                      id={issueFieldIds.profileDecisionOwner}
                      className={inputClassName}
                      value={input.profile.decisionOwner}
                      {...issueA11y(issueFieldIds.profileDecisionOwner)}
                      onChange={(event) =>
                        updateProfile("decisionOwner", event.target.value)
                      }
                      placeholder="Fonction, sans nom personnel"
                    />
                  </label>
                  <label className={labelClassName}>
                    Organisme officiel
                    <input
                      id={issueFieldIds.authorityName}
                      className={inputClassName}
                      value={input.authority.name}
                      {...issueA11y(issueFieldIds.authorityName)}
                      onChange={(event) =>
                        updateAuthority("name", event.target.value)
                      }
                      placeholder="Région, EPCI, administration ou financeur"
                    />
                  </label>
                  <label className={labelClassName}>
                    Date de consultation
                    <input
                      id={issueFieldIds.authorityConsultationDate}
                      type="date"
                      className={inputClassName}
                      value={input.authority.consultationDate}
                      {...issueA11y(issueFieldIds.authorityConsultationDate)}
                      onChange={(event) =>
                        updateAuthority("consultationDate", event.target.value)
                      }
                    />
                  </label>
                  <label className={`${labelClassName} sm:col-span-2`}>
                    URL officielle directe
                    <input
                      id={issueFieldIds.authorityUrl}
                      type="url"
                      className={inputClassName}
                      value={input.authority.officialUrl}
                      {...issueA11yWithDescription(
                        issueFieldIds.authorityUrl,
                        "site-aid-authority-url-help",
                      )}
                      onChange={(event) =>
                        updateAuthority("officialUrl", event.target.value)
                      }
                      placeholder="https://..."
                    />
                    <span
                      id="site-aid-authority-url-help"
                      className={helpClassName}
                    >
                      Utilisez une adresse HTTPS directe. Vérifiez que le
                      domaine appartient bien à l’organisme déclaré et que la
                      page décrit le dispositif concerné : l’outil contrôle le
                      format, mais n’authentifie ni le domaine ni son contenu.
                    </span>
                  </label>
                  <label className={`${labelClassName} sm:col-span-2`}>
                    Échéances et règle de modification
                    <textarea
                      id={issueFieldIds.authoritySchedule}
                      className={inputClassName}
                      rows={3}
                      value={input.authority.scheduleAndAmendmentEvidence}
                      {...issueA11y(issueFieldIds.authoritySchedule)}
                      onChange={(event) =>
                        updateAuthority(
                          "scheduleAndAmendmentEvidence",
                          event.target.value,
                        )
                      }
                      placeholder="Dates d’acceptation, réalisation et demande de versement ; règle écrite si le devis change"
                    />
                  </label>
                  <div
                    id="site-aid-post-award-group"
                    role="group"
                    aria-labelledby="site-aid-post-award-group-title"
                    aria-describedby="site-aid-post-award-help"
                    className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800 sm:col-span-2"
                  >
                    <p
                      id="site-aid-post-award-group-title"
                      className="m-0 text-xs font-black leading-relaxed text-zinc-900 dark:text-zinc-100"
                    >
                      Obligations après attribution et après versement
                    </p>
                    <label className={`${labelClassName} mt-3`}>
                      Pièce applicable vérifiée
                      <select
                        id={issueFieldIds.authorityPostAwardVerified}
                        className={inputClassName}
                        value={input.authority.postAwardEvidenceVerified}
                        {...issueA11yWithDescription(
                          issueFieldIds.authorityPostAwardVerified,
                          "site-aid-post-award-help",
                        )}
                        onChange={(event) =>
                          updateAuthority(
                            "postAwardEvidenceVerified",
                            event.target.value as SiteAidTriState,
                          )
                        }
                      >
                        {postAwardEvidenceOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className={`${labelClassName} mt-3`}>
                      Obligations après attribution et après versement — contenu
                      probant de la pièce
                      <textarea
                        id={issueFieldIds.authorityPostAward}
                        className={inputClassName}
                        rows={4}
                        value={input.authority.postAwardObligationsEvidence}
                        {...issueA11yWithDescription(
                          issueFieldIds.authorityPostAward,
                          "site-aid-post-award-help",
                        )}
                        onChange={(event) =>
                          updateAuthority(
                            "postAwardObligationsEvidence",
                            event.target.value,
                          )
                        }
                        placeholder="Référence de la pièce applicable ; rapports, livrables, indicateurs, visibilité, durée de conservation, contrôles, maintien éventuel, changements à notifier et restitution"
                      />
                    </label>
                    <p id="site-aid-post-award-help" className={helpClassName}>
                      Seul « Oui — pièce applicable vérifiée », accompagné d’un
                      contenu probant recopié depuis la décision, la convention
                      ou une réponse écrite, permet de poursuivre l’analyse. «
                      Non » ou « À confirmer » suspend le verdict, même si le
                      texte libre paraît affirmatif. L’outil n’accède à aucune
                      pièce et n’authentifie ni le document, ni son
                      applicabilité, ni son contenu. Recopiez la référence, les
                      durées, les livrables, indicateurs, contrôles, changements
                      à notifier et conditions de réduction ou restitution
                      éventuelle ; une obligation historique explicitement levée
                      par une pièce applicable peut être conservée comme
                      contexte.
                    </p>
                  </div>
                </div>
              </fieldset>
              {renderWizardPanelNavigation()}
            </section>
          ) : null}

          {activeStepId === "quote" ? (
            <section
              id={wizardStepPanelId("quote")}
              data-site-aid-wizard-panel="quote"
              aria-labelledby={wizardStepHeadingId("quote")}
            >
              <h4
                id={wizardStepHeadingId("quote")}
                tabIndex={-1}
                className="mb-4 mt-0 text-lg font-black text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 dark:text-white"
              >
                Étape 2 sur 9 — Devis ligne par ligne
              </h4>
              {renderStepErrorStatus("quote")}
              <fieldset
                id="site-aid-quote-section"
                tabIndex={-1}
                className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5"
              >
                <legend className="px-2 text-sm font-black text-zinc-950 dark:text-white">
                  2. Devis ligne par ligne
                </legend>
                <p className="mb-4 mt-0 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                  La part de TVA déductible accepte 0 à 100 %. Une admissibilité
                  déclarée oui ou non doit citer la fiche, le courriel ou la
                  pièce.
                </p>

                <div className="space-y-4">
                  {input.quoteLines.map((line, index) => {
                    const rowId =
                      quoteLineIds[index] ?? `quote-fallback-${index}`;
                    const removeActionLabel =
                      input.quoteLines.length === 1
                        ? `Vider la ligne ${index + 1}`
                        : `Supprimer la ligne ${index + 1}`;
                    return (
                      <div
                        key={rowId}
                        role="group"
                        aria-labelledby={`site-aid-quote-line-${index + 1}-title`}
                        className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50"
                      >
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <p
                            id={`site-aid-quote-line-${index + 1}-title`}
                            className="m-0 text-xs font-black text-zinc-900 dark:text-white"
                          >
                            Ligne {index + 1}
                          </p>
                          <button
                            type="button"
                            onClick={() => removeQuoteLine(index)}
                            aria-label={removeActionLabel}
                            className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg border border-zinc-300 bg-white text-zinc-600 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300"
                          >
                            <Trash2 className="size-4" aria-hidden="true" />
                            <span className="sr-only">{removeActionLabel}</span>
                          </button>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                          <label className={`${labelClassName} lg:col-span-2`}>
                            Libellé exact
                            <input
                              id={quoteIssueFieldId(index, "label")}
                              ref={(element) => {
                                if (element) {
                                  quoteFirstInputRefs.current.set(
                                    rowId,
                                    element,
                                  );
                                } else {
                                  quoteFirstInputRefs.current.delete(rowId);
                                }
                              }}
                              className={inputClassName}
                              aria-label={dynamicControlAccessibleName(
                                "Libellé exact",
                                "quote",
                                index,
                              )}
                              value={line.label}
                              {...issueA11y(quoteIssueFieldId(index, "label"))}
                              onChange={(event) =>
                                updateQuoteLine(index, {
                                  label: event.target.value,
                                })
                              }
                              placeholder="Ex. développement, hébergement, formation"
                            />
                          </label>
                          <label className={labelClassName}>
                            Montant HT
                            <input
                              id={quoteIssueFieldId(index, "amount")}
                              type="number"
                              min="0"
                              step="0.01"
                              inputMode="decimal"
                              className={inputClassName}
                              aria-label={dynamicControlAccessibleName(
                                "Montant HT",
                                "quote",
                                index,
                              )}
                              value={numberValue(line.amountExVat)}
                              {...issueA11y(quoteIssueFieldId(index, "amount"))}
                              onChange={(event) =>
                                updateQuoteLine(index, {
                                  amountExVat: optionalNumber(
                                    event.target.value,
                                  ),
                                })
                              }
                            />
                          </label>
                          <label className={labelClassName}>
                            Taux de TVA, %
                            <input
                              id={quoteIssueFieldId(index, "vat-rate")}
                              type="number"
                              min="0"
                              max="100"
                              step="0.01"
                              inputMode="decimal"
                              className={inputClassName}
                              aria-label={dynamicControlAccessibleName(
                                "Taux de TVA, %",
                                "quote",
                                index,
                              )}
                              value={numberValue(line.vatRatePercent)}
                              {...issueA11y(
                                quoteIssueFieldId(index, "vat-rate"),
                              )}
                              onChange={(event) =>
                                updateQuoteLine(index, {
                                  vatRatePercent: optionalNumber(
                                    event.target.value,
                                  ),
                                })
                              }
                            />
                          </label>
                          <label className={labelClassName}>
                            Part de TVA déductible, %
                            <input
                              id={quoteIssueFieldId(index, "deductible-vat")}
                              type="number"
                              min="0"
                              max="100"
                              step="0.01"
                              inputMode="decimal"
                              className={inputClassName}
                              aria-label={dynamicControlAccessibleName(
                                "Part de TVA déductible, %",
                                "quote",
                                index,
                              )}
                              value={deductiblePercentValue(
                                line.deductibleVatFraction,
                              )}
                              {...issueA11y(
                                quoteIssueFieldId(index, "deductible-vat"),
                              )}
                              onChange={(event) => {
                                const percent = optionalNumber(
                                  event.target.value,
                                );
                                updateQuoteLine(index, {
                                  deductibleVatFraction:
                                    percent === undefined
                                      ? "unknown"
                                      : percent / 100,
                                });
                              }}
                              placeholder="À confirmer"
                            />
                          </label>
                          <label className={labelClassName}>
                            Ligne admissible ?
                            <select
                              id={quoteIssueFieldId(index, "eligibility")}
                              className={inputClassName}
                              aria-label={dynamicControlAccessibleName(
                                "Ligne admissible ?",
                                "quote",
                                index,
                              )}
                              value={line.eligibility}
                              {...issueA11y(
                                quoteIssueFieldId(index, "eligibility"),
                              )}
                              onChange={(event) =>
                                updateQuoteLine(index, {
                                  eligibility: event.target
                                    .value as SiteAidTriState,
                                })
                              }
                            >
                              {triStateOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </label>
                          <label className={`${labelClassName} lg:col-span-3`}>
                            Référence de preuve
                            <input
                              id={quoteIssueFieldId(index, "evidence")}
                              className={inputClassName}
                              aria-label={dynamicControlAccessibleName(
                                "Référence de preuve",
                                "quote",
                                index,
                              )}
                              value={line.evidence}
                              {...issueA11y(
                                quoteIssueFieldId(index, "evidence"),
                              )}
                              onChange={(event) =>
                                updateQuoteLine(index, {
                                  evidence: event.target.value,
                                })
                              }
                              placeholder="Fiche officielle, page, article du règlement ou réponse écrite"
                            />
                          </label>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button
                  ref={quoteAddButtonRef}
                  type="button"
                  onClick={addQuoteLine}
                  className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-900 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                >
                  <Plus className="size-4" aria-hidden="true" />
                  Ajouter une ligne
                </button>
              </fieldset>
              {renderWizardPanelNavigation()}
            </section>
          ) : null}

          {activeStepId === "eligibility" ? (
            <section
              id={wizardStepPanelId("eligibility")}
              data-site-aid-wizard-panel="eligibility"
              aria-labelledby={wizardStepHeadingId("eligibility")}
            >
              <h4
                id={wizardStepHeadingId("eligibility")}
                tabIndex={-1}
                className="mb-4 mt-0 text-lg font-black text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 dark:text-white"
              >
                Étape 3 sur 9 — Critères et assiette
              </h4>
              {renderStepErrorStatus("eligibility")}
              <fieldset
                id="site-aid-proof-section"
                tabIndex={-1}
                className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5"
              >
                <legend className="px-2 text-sm font-black text-zinc-950 dark:text-white">
                  3. Critères documentés, notification et assiette
                </legend>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {SITE_AID_GATE_IDS.filter(
                    (gateId) => gateId !== "notification",
                  ).map((gateId) => (
                    <div
                      key={gateId}
                      role="group"
                      aria-labelledby={`site-aid-gate-${gateId}-title`}
                      className="space-y-2 rounded-lg border border-zinc-200 p-3 dark:border-zinc-800"
                    >
                      <p
                        id={`site-aid-gate-${gateId}-title`}
                        className="m-0 text-xs font-black text-zinc-900 dark:text-white"
                      >
                        {SITE_AID_GATE_LABELS[gateId]}
                      </p>
                      <label className={labelClassName}>
                        Statut
                        <span className="sr-only">
                          {" "}
                          — {SITE_AID_GATE_LABELS[gateId]}
                        </span>
                        <select
                          id={gateIssueFieldId(gateId, "status")}
                          className={inputClassName}
                          aria-label={`Statut — ${SITE_AID_GATE_LABELS[gateId]}`}
                          value={input.gates[gateId]}
                          {...issueA11y(gateIssueFieldId(gateId, "status"))}
                          onChange={(event) =>
                            updateGate(
                              gateId,
                              event.target.value as SiteAidTriState,
                            )
                          }
                        >
                          {triStateOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className={labelClassName}>
                        Référence de preuve
                        <input
                          id={gateIssueFieldId(gateId, "evidence")}
                          className={inputClassName}
                          aria-label={`Référence de preuve — ${SITE_AID_GATE_LABELS[gateId]}`}
                          value={input.gateEvidence[gateId]}
                          {...issueA11y(gateIssueFieldId(gateId, "evidence"))}
                          onChange={(event) =>
                            updateGateEvidence(gateId, event.target.value)
                          }
                          placeholder="Document, article, auteur et date"
                        />
                      </label>
                    </div>
                  ))}
                  <label className={`${labelClassName} lg:col-span-3`}>
                    Assiette prévue par le règlement
                    <select
                      id={issueFieldIds.basisScope}
                      className={inputClassName}
                      value={input.aid.basisScope}
                      {...issueA11y(issueFieldIds.basisScope)}
                      onChange={(event) =>
                        setInput((current) => ({
                          ...current,
                          aid: {
                            ...current.aid,
                            basisScope: event.target
                              .value as SiteAidDecisionInput["aid"]["basisScope"],
                          },
                        }))
                      }
                    >
                      {basisScopeOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <span className={helpClassName}>
                      Choisissez l’assiette HT seulement si le règlement
                      applique bien un taux aux dépenses admissibles hors taxes.
                      Pour toute autre règle, le dossier conserve les faits mais
                      suspend le calcul théorique.
                    </span>
                  </label>
                  <label className={labelClassName}>
                    Taux de l’aide, %
                    <input
                      id={issueFieldIds.ratePercent}
                      type="number"
                      min="0"
                      max="100"
                      step="0.01"
                      inputMode="decimal"
                      className={inputClassName}
                      value={numberValue(input.aid.ratePercent)}
                      {...issueA11y(issueFieldIds.ratePercent)}
                      onChange={(event) =>
                        setInput((current) => ({
                          ...current,
                          aid: {
                            ...current.aid,
                            ratePercent: optionalNumber(event.target.value),
                          },
                        }))
                      }
                    />
                  </label>
                  <label className={labelClassName}>
                    Plafond de l’aide
                    <input
                      id={issueFieldIds.capAmount}
                      type="number"
                      min="0"
                      step="0.01"
                      inputMode="decimal"
                      className={inputClassName}
                      value={numberValue(input.aid.capAmount)}
                      {...issueA11y(issueFieldIds.capAmount)}
                      onChange={(event) =>
                        setInput((current) => ({
                          ...current,
                          aid: {
                            ...current.aid,
                            capAmount: optionalNumber(event.target.value),
                          },
                        }))
                      }
                    />
                  </label>
                  {input.aid.basisScope === "other" ? (
                    <p className="m-0 self-end rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed text-amber-950 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-100 lg:col-span-3">
                      Assiette hors périmètre : n’utilisez pas l’aide théorique
                      de ce moteur. Conservez le devis, la trésorerie et la
                      référence du règlement, puis faites recalculer l’aide
                      selon sa formule officielle.
                    </p>
                  ) : null}
                  <div className="rounded-lg border border-violet-200 bg-violet-50 p-3 text-xs leading-relaxed text-violet-950 dark:border-violet-900 dark:bg-violet-950/30 dark:text-violet-100 lg:col-span-3">
                    <p className="m-0 font-black">
                      Séparer le droit, le financement approuvé et le paiement
                    </p>
                    <p className="mb-0 mt-1">
                      Le type d’instrument décrit la forme de l’aide. Sa valeur
                      juridique sert au contrôle réglementaire ; la contribution
                      financière approuvée décrit ce que la décision prévoit de
                      payer ; le paiement effectif décrit le flux réellement
                      versé à l’entreprise ou au fournisseur. Aucun de ces
                      montants ne remplace automatiquement les autres.
                    </p>
                  </div>
                </div>
              </fieldset>
              {renderWizardPanelNavigation()}
            </section>
          ) : null}

          {activeStepId === "legal" ? (
            <section
              id={wizardStepPanelId("legal")}
              data-site-aid-wizard-panel="legal"
              aria-labelledby={wizardStepHeadingId("legal")}
            >
              <h4
                id={wizardStepHeadingId("legal")}
                tabIndex={-1}
                className="mb-4 mt-0 text-lg font-black text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 dark:text-white"
              >
                Étape 4 sur 9 — Instrument, base juridique et octroi
              </h4>
              {renderStepErrorStatus("legal")}
              <fieldset
                id="site-aid-legal-section"
                tabIndex={-1}
                className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5"
              >
                <legend className="px-2 text-sm font-black text-zinc-950 dark:text-white">
                  4. Droit à l’aide et traçabilité
                </legend>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="lg:col-span-3">
                    <p className="m-0 text-xs font-black uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
                      Instrument et base juridique
                    </p>
                  </div>
                  <label className={labelClassName}>
                    Type d’instrument de l’aide actuelle
                    <select
                      id={issueFieldIds.instrument}
                      className={inputClassName}
                      value={input.aid.instrumentKind}
                      {...issueA11y(issueFieldIds.instrument)}
                      onChange={(event) =>
                        updateInstrumentKind(
                          event.target.value as SiteAidInstrumentKind,
                        )
                      }
                    >
                      {instrumentKindOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <span className={helpClassName}>
                      {input.aid.instrumentKind === "grant"
                        ? "Subvention : distinguez son montant brut juridique de la contribution que la notification prévoit réellement de payer."
                        : input.aid.instrumentKind === "loan" ||
                            input.aid.instrumentKind === "guarantee"
                          ? "Prêt ou garantie : utilisez l’équivalent-subvention brut (ESB) communiqué pour la valeur juridique, jamais le capital prêté ni le nominal garanti."
                          : input.aid.instrumentKind === "tax-relief"
                            ? "Allègement : reprenez uniquement la valeur documentée par l’autorité ; n’inventez pas de versement bancaire."
                            : "Choisissez la forme écrite dans la décision. Une catégorie inconnue suspend les conclusions qui en dépendent."}
                    </span>
                  </label>
                  <label className={labelClassName}>
                    Statut de la base juridique
                    <select
                      id={issueFieldIds.legalBasisStatus}
                      className={inputClassName}
                      value={input.aid.legalBasisStatus}
                      {...issueA11y(issueFieldIds.legalBasisStatus)}
                      onChange={(event) =>
                        updateLegalBasisStatus(
                          event.target.value as SiteAidLegalBasisStatus,
                        )
                      }
                    >
                      {legalBasisStatusOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <span className={helpClassName}>
                      « Hors de minimis » reste une déclaration : même avec une
                      base et une référence plausibles, cet outil local ne peut
                      pas les authentifier et impose une revue externe.
                    </span>
                  </label>
                  <p
                    id="site-aid-de-minimis-regime-format-help"
                    className="m-0 rounded-lg border border-sky-200 bg-sky-50 p-3 text-xs leading-relaxed text-sky-950 dark:border-sky-900 dark:bg-sky-950/30 dark:text-sky-100 lg:col-span-3"
                  >
                    <strong>Formats de référence de minimis lus.</strong> Un
                    seul numéro isolé (2023/2831, 2023/2832, 1408/2013 ou
                    717/2014), un CELEX exact — acte d’origine ou version
                    consolidée datée — ou une URL ELI officielle en HTTPS sur
                    eur-lex.europa.eu ou data.europa.eu. Si l’URL source
                    commence par « http:// », remplacer uniquement « http:// »
                    par « https:// », puis vérifier l’hôte et le chemin exacts.
                    Reconnaître la syntaxe n’authentifie pas la pièce.
                  </p>
                  {currentAidHasDeMinimisBranch ? (
                    <>
                      <label className={labelClassName}>
                        Référence exacte du règlement de minimis
                        <input
                          id={issueFieldIds.deMinimisRegime}
                          className={inputClassName}
                          value={input.aid.deMinimisRegime}
                          {...issueA11yWithDescription(
                            issueFieldIds.deMinimisRegime,
                            "site-aid-de-minimis-regime-format-help",
                          )}
                          onChange={(event) =>
                            updateCurrentDeMinimisRegime(event.target.value)
                          }
                          placeholder="Ex. règlement (UE) 2023/2831"
                        />
                      </label>
                      {currentAidUsesSgei ? (
                        <fieldset
                          id="site-aid-current-sgei-section"
                          aria-describedby="site-aid-current-sgei-help"
                          className="grid gap-4 rounded-xl border border-blue-200 bg-blue-50/60 p-4 dark:border-blue-900 dark:bg-blue-950/20 sm:grid-cols-2 lg:col-span-3"
                        >
                          <legend className="px-2 text-xs font-black text-blue-950 dark:text-blue-100">
                            Conditions du service d’intérêt économique général
                            (SIEG) — aide actuelle
                          </legend>
                          <p
                            id="site-aid-current-sgei-help"
                            className="m-0 text-xs leading-relaxed text-blue-950 dark:text-blue-100 sm:col-span-2"
                          >
                            Le numéro 2023/2832 ne suffit pas. Il faut un mandat
                            écrit ou électronique vérifié, sa référence et
                            l’identité exacte du service confié. Pour la
                            compensation, « Oui » signifie qu’une autre
                            compensation du même service existe et suspend le
                            verdict ; seul « Non », accompagné d’une preuve
                            écrite, permet de poursuivre ce contrôle. « À
                            confirmer » suspend également. L’outil ne lit ni
                            n’authentifie le mandat, le service ou la
                            compensation.
                          </p>
                          <label className={labelClassName}>
                            Mandat SIEG vérifié
                            <select
                              id={issueFieldIds.sgeiEntrustmentStatus}
                              className={inputClassName}
                              value={input.aid.sgeiEntrustmentVerified}
                              {...issueA11yWithDescription(
                                issueFieldIds.sgeiEntrustmentStatus,
                                "site-aid-current-sgei-help",
                              )}
                              onChange={(event) =>
                                updateCurrentSgeiEntrustment(
                                  event.target.value as SiteAidTriState,
                                )
                              }
                            >
                              {sgeiEntrustmentOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </label>
                          <label className={labelClassName}>
                            Preuve du mandat SIEG
                            <input
                              id={issueFieldIds.sgeiEntrustmentEvidence}
                              className={inputClassName}
                              value={input.aid.sgeiEntrustmentEvidence}
                              {...issueA11yWithDescription(
                                issueFieldIds.sgeiEntrustmentEvidence,
                                "site-aid-current-sgei-help",
                              )}
                              onChange={(event) =>
                                updateAid({
                                  sgeiEntrustmentEvidence: event.target.value,
                                })
                              }
                              placeholder="Acte, convention, décision ou référence électronique datée"
                            />
                          </label>
                          <label className={`${labelClassName} sm:col-span-2`}>
                            Identité exacte du SIEG confié
                            <input
                              id={issueFieldIds.sgeiServiceIdentity}
                              className={inputClassName}
                              value={input.aid.sgeiServiceIdentity}
                              {...issueA11yWithDescription(
                                issueFieldIds.sgeiServiceIdentity,
                                "site-aid-current-sgei-help",
                              )}
                              onChange={(event) =>
                                updateAid({
                                  sgeiServiceIdentity: event.target.value,
                                })
                              }
                              placeholder="Service, territoire, bénéficiaires et période du mandat"
                            />
                          </label>
                          <label className={labelClassName}>
                            Autre compensation du même SIEG présente
                            <select
                              id={issueFieldIds.sgeiCompensationStatus}
                              className={inputClassName}
                              value={
                                input.aid.sgeiSameServiceCompensationPresent
                              }
                              {...issueA11yWithDescription(
                                issueFieldIds.sgeiCompensationStatus,
                                "site-aid-current-sgei-help",
                              )}
                              onChange={(event) =>
                                updateCurrentSgeiCompensation(
                                  event.target.value as SiteAidTriState,
                                )
                              }
                            >
                              {sgeiCompensationOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </label>
                          <label className={labelClassName}>
                            Preuve sur les compensations du même SIEG
                            <input
                              id={issueFieldIds.sgeiCompensationEvidence}
                              className={inputClassName}
                              value={input.aid.sgeiCompensationEvidence}
                              {...issueA11yWithDescription(
                                issueFieldIds.sgeiCompensationEvidence,
                                "site-aid-current-sgei-help",
                              )}
                              onChange={(event) =>
                                updateAid({
                                  sgeiCompensationEvidence: event.target.value,
                                })
                              }
                              placeholder="Réponse écrite de l’autorité, registre ou état des compensations"
                            />
                          </label>
                        </fieldset>
                      ) : null}
                    </>
                  ) : input.aid.legalBasisStatus === "not-de-minimis" ? (
                    <>
                      <p className="m-0 rounded-lg border border-amber-300 bg-amber-50 p-3 text-xs leading-relaxed text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100 lg:col-span-3">
                        <strong>
                          Hors de minimis déclaré — revue externe obligatoire.
                        </strong>{" "}
                        Les références saisies restent déclaratives. L’outil
                        local ne peut authentifier le document, sa pertinence,
                        la décision d’aide ni le bénéficiaire. Le dossier reste
                        bloqué jusqu’à une confirmation écrite de l’autorité
                        compétente ou une validation humaine hors outil
                        {currentRequiresExternalLegalReview
                          ? "."
                          : " à confirmer."}
                      </p>
                      <label className={labelClassName}>
                        Base juridique hors de minimis
                        <input
                          id={issueFieldIds.nonDeMinimisBasis}
                          className={inputClassName}
                          value={input.aid.nonDeMinimisLegalBasis}
                          {...issueA11y(issueFieldIds.nonDeMinimisBasis)}
                          onChange={(event) =>
                            setInput((current) => ({
                              ...current,
                              aid: {
                                ...current.aid,
                                nonDeMinimisLegalBasis: event.target.value,
                              },
                            }))
                          }
                          placeholder="Régime notifié, règlement d’exemption ou décision"
                        />
                      </label>
                      <label className={`${labelClassName} lg:col-span-2`}>
                        Référence officielle déclarée pour le hors de minimis
                        <input
                          id={issueFieldIds.nonDeMinimisEvidence}
                          className={inputClassName}
                          value={input.aid.nonDeMinimisEvidenceReference}
                          {...issueA11y(issueFieldIds.nonDeMinimisEvidence)}
                          onChange={(event) =>
                            setInput((current) => ({
                              ...current,
                              aid: {
                                ...current.aid,
                                nonDeMinimisEvidenceReference:
                                  event.target.value,
                              },
                            }))
                          }
                          placeholder="Décision, article, URL ou référence de l’autorité"
                        />
                      </label>
                    </>
                  ) : (
                    <p className="m-0 self-end rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed text-amber-950 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-100 lg:col-span-3">
                      Base inconnue : aucun règlement de minimis ni statut hors
                      de minimis n’est présumé.
                    </p>
                  )}
                  {showsProspectiveDeMinimisValue ? (
                    <fieldset
                      id="site-aid-prospective-de-minimis-section"
                      className="rounded-xl border border-violet-200 bg-violet-50/70 p-4 dark:border-violet-900 dark:bg-violet-950/20 lg:col-span-3"
                    >
                      <legend className="px-2 text-sm font-black text-zinc-950 dark:text-white">
                        Valeur prospective pour le précontrôle de minimis
                      </legend>
                      <p
                        id="site-aid-prospective-de-minimis-help"
                        className="mb-3 mt-0 text-xs leading-relaxed text-zinc-700 dark:text-zinc-300"
                      >
                        Cette paire sert uniquement à simuler le cumul avant
                        notification. Elle ne constitue jamais un budget, un
                        octroi, une créance, un encaissement ni un paiement et
                        ne réduit aucun coût ou besoin de trésorerie.{" "}
                        {input.aid.instrumentKind === "grant"
                          ? "Pour une subvention, elle est facultative : si elle reste vide, le moteur conserve son montant théorique brut non acquis comme scénario."
                          : prospectiveDeMinimisValueRequired
                            ? "Pour un prêt, une garantie, un allègement fiscal ou un autre instrument, le montant et sa preuve sont requis : le nominal ne permet jamais d’inventer un ESB."
                            : "Choisissez d’abord l’instrument : aucun montant prospectif n’est inventé."}
                      </p>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className={labelClassName}>
                          Montant brut ou ESB prospectif documenté
                          <input
                            id={issueFieldIds.prospectiveDeMinimisAidValue}
                            type="number"
                            min="0"
                            step="0.01"
                            inputMode="decimal"
                            required={prospectiveDeMinimisValueRequired}
                            className={inputClassName}
                            value={numberValue(
                              input.aid.prospectiveDeMinimisAidValueAmount,
                            )}
                            {...issueA11yWithDescription(
                              issueFieldIds.prospectiveDeMinimisAidValue,
                              "site-aid-prospective-de-minimis-help",
                            )}
                            onChange={(event) =>
                              updateAid({
                                prospectiveDeMinimisAidValueAmount:
                                  optionalNumber(event.target.value),
                              })
                            }
                          />
                        </label>
                        <label className={labelClassName}>
                          Preuve du montant brut ou de l’ESB prospectif
                          <input
                            id={
                              issueFieldIds.prospectiveDeMinimisAidValueEvidence
                            }
                            className={inputClassName}
                            maxLength={20_000}
                            required={prospectiveDeMinimisValueRequired}
                            value={
                              input.aid.prospectiveDeMinimisAidValueEvidence ??
                              ""
                            }
                            {...issueA11yWithDescription(
                              issueFieldIds.prospectiveDeMinimisAidValueEvidence,
                              "site-aid-prospective-de-minimis-help",
                            )}
                            onChange={(event) =>
                              updateAid({
                                prospectiveDeMinimisAidValueEvidence:
                                  event.target.value,
                              })
                            }
                            placeholder="Réponse écrite de l’autorité, décision ou calcul d’ESB identifiable"
                          />
                        </label>
                      </div>
                    </fieldset>
                  ) : null}
                  {input.aid.legalBasisStatus !== "de-minimis" ? (
                    <p
                      id="site-aid-prudent-grouping-note"
                      className="m-0 rounded-lg border border-sky-200 bg-sky-50 p-3 text-xs leading-relaxed text-sky-950 dark:border-sky-900 dark:bg-sky-950/30 dark:text-sky-100 lg:col-span-3"
                    >
                      Ces données ne qualifient ni le régime ni l’éligibilité.
                      Elles servent uniquement à rapprocher un signal prudent de
                      cumul entre aides potentiellement liées. La base reste à
                      qualifier et une revue externe est obligatoire avant toute
                      conclusion.
                    </p>
                  ) : null}
                  <p
                    id={SHARED_UNDERTAKING_SCOPE_HELP_ID}
                    className="m-0 rounded-lg border border-zinc-200 bg-white p-3 text-xs leading-relaxed text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 lg:col-span-3"
                  >
                    <strong>Clé d’entreprise partagée.</strong> Recopiez
                    l’identité exacte. Deux écritures Unicode NFC d’un même
                    caractère sont considérées comme identiques, mais l’outil ne
                    fusionne jamais automatiquement deux clés seulement proches.
                    Une ressemblance entre alphabets latin, grec ou cyrillique
                    déclenche une alerte. Même entreprise : utilisez la même clé
                    exacte. Entités distinctes : indiquez-le et joignez une
                    preuve. L’outil n’authentifie ni l’identité ni cette preuve.
                  </p>
                  <label className={labelClassName}>
                    État membre de l’autorité d’octroi (pas le siège du
                    bénéficiaire)
                    <input
                      id={issueFieldIds.deMinimisMemberState}
                      className={inputClassName}
                      value={input.aid.deMinimisMemberState}
                      {...(input.aid.legalBasisStatus === "de-minimis"
                        ? issueA11y(issueFieldIds.deMinimisMemberState)
                        : issueA11yWithDescription(
                            issueFieldIds.deMinimisMemberState,
                            "site-aid-prudent-grouping-note",
                          ))}
                      onChange={(event) =>
                        setInput((current) => ({
                          ...current,
                          aid: {
                            ...current.aid,
                            deMinimisMemberState: event.target.value,
                          },
                        }))
                      }
                      placeholder="Ex. France"
                    />
                    <span className={helpClassName}>
                      Ce pays pilote le regroupement de minimis et
                      l’applicabilité du registre français.
                    </span>
                  </label>
                  <label className={labelClassName}>
                    {input.aid.legalBasisStatus === "de-minimis"
                      ? "Entreprise unique de l’aide actuelle"
                      : "Périmètre entreprise/groupe à qualifier"}
                    <input
                      id={issueFieldIds.deMinimisUndertaking}
                      className={inputClassName}
                      value={input.aid.deMinimisSingleUndertakingScope}
                      {...(input.aid.legalBasisStatus === "de-minimis"
                        ? issueA11yWithDescription(
                            issueFieldIds.deMinimisUndertaking,
                            SHARED_UNDERTAKING_SCOPE_HELP_ID,
                          )
                        : issueA11yWithDescription(
                            issueFieldIds.deMinimisUndertaking,
                            "site-aid-prudent-grouping-note",
                            SHARED_UNDERTAKING_SCOPE_HELP_ID,
                          ))}
                      onChange={(event) =>
                        setInput((current) => ({
                          ...current,
                          aid: {
                            ...current.aid,
                            deMinimisSingleUndertakingScope: event.target.value,
                          },
                        }))
                      }
                      placeholder="Société et entreprises liées à rapprocher"
                    />
                  </label>
                  {hasFisheryBranch ? (
                    <fieldset
                      className="rounded-xl border border-cyan-300 bg-cyan-50/60 p-4 dark:border-cyan-900 dark:bg-cyan-950/20 lg:col-span-2"
                      id="site-aid-fishery-fiscal-year-section"
                    >
                      <legend className="px-2 text-xs font-black text-cyan-950 dark:text-cyan-100">
                        Trois exercices fiscaux réels du précontrôle pêche
                      </legend>
                      <p
                        id="site-aid-fishery-fiscal-year-help"
                        className="mb-3 mt-0 text-[11px] leading-relaxed text-cyan-900 dark:text-cyan-100"
                      >
                        Le règlement pêche retient l’exercice fiscal courant et
                        les deux précédents, pas trois années calendaires
                        glissantes. Saisissez ensemble les trois débuts réels et
                        la fin réelle de l’exercice courant : aucune date n’est
                        extrapolée par anniversaire et ces déclarations ne sont
                        pas authentifiées par l’outil.
                      </p>
                      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
                        <label className={labelClassName}>
                          Début de l’exercice contenant l’ancre
                          <input
                            id={issueFieldIds.deMinimisFisheryFiscalYearStart}
                            type="date"
                            className={inputClassName}
                            value={
                              input.aid.deMinimisFisheryFiscalYearStartDate ??
                              ""
                            }
                            {...issueA11yWithDescription(
                              issueFieldIds.deMinimisFisheryFiscalYearStart,
                              "site-aid-fishery-fiscal-year-help",
                            )}
                            onChange={(event) =>
                              updateAid({
                                deMinimisFisheryFiscalYearStartDate:
                                  event.target.value,
                              })
                            }
                          />
                        </label>
                        <label className={labelClassName}>
                          Début de l’exercice précédent
                          <input
                            id={
                              issueFieldIds.deMinimisFisheryPreviousFiscalYearStart
                            }
                            type="date"
                            className={inputClassName}
                            value={
                              input.aid
                                .deMinimisFisheryPreviousFiscalYearStartDate ??
                              ""
                            }
                            {...issueA11yWithDescription(
                              issueFieldIds.deMinimisFisheryPreviousFiscalYearStart,
                              "site-aid-fishery-fiscal-year-help",
                            )}
                            onChange={(event) =>
                              updateAid({
                                deMinimisFisheryPreviousFiscalYearStartDate:
                                  event.target.value,
                              })
                            }
                          />
                        </label>
                        <label className={labelClassName}>
                          Début du deuxième exercice précédent
                          <input
                            id={
                              issueFieldIds.deMinimisFisherySecondPreviousFiscalYearStart
                            }
                            type="date"
                            className={inputClassName}
                            value={
                              input.aid
                                .deMinimisFisherySecondPreviousFiscalYearStartDate ??
                              ""
                            }
                            {...issueA11yWithDescription(
                              issueFieldIds.deMinimisFisherySecondPreviousFiscalYearStart,
                              "site-aid-fishery-fiscal-year-help",
                            )}
                            onChange={(event) =>
                              updateAid({
                                deMinimisFisherySecondPreviousFiscalYearStartDate:
                                  event.target.value,
                              })
                            }
                          />
                        </label>
                        <label className={labelClassName}>
                          Fin de l’exercice contenant l’ancre
                          <input
                            id={
                              issueFieldIds.deMinimisFisheryCurrentFiscalYearEnd
                            }
                            type="date"
                            className={inputClassName}
                            value={
                              input.aid
                                .deMinimisFisheryCurrentFiscalYearEndDate ?? ""
                            }
                            {...issueA11yWithDescription(
                              issueFieldIds.deMinimisFisheryCurrentFiscalYearEnd,
                              "site-aid-fishery-fiscal-year-help",
                            )}
                            onChange={(event) =>
                              updateAid({
                                deMinimisFisheryCurrentFiscalYearEndDate:
                                  event.target.value,
                              })
                            }
                          />
                        </label>
                      </div>
                    </fieldset>
                  ) : null}
                  <label className={labelClassName}>
                    Ces clés proches désignent-elles des entreprises uniques
                    distinctes ?
                    <select
                      id={issueFieldIds.similarUndertakingDistinctStatus}
                      className={inputClassName}
                      value={input.aid.similarUndertakingKeysDistinct}
                      {...issueA11yWithDescription(
                        issueFieldIds.similarUndertakingDistinctStatus,
                        "site-aid-de-minimis-undertaking-distinct-help",
                      )}
                      onChange={(event) => {
                        const similarUndertakingKeysDistinct = event.target
                          .value as SiteAidTriState;
                        setInput((current) => ({
                          ...current,
                          aid: {
                            ...current.aid,
                            similarUndertakingKeysDistinct,
                            similarUndertakingKeysEvidence:
                              similarUndertakingKeysDistinct === "yes"
                                ? current.aid.similarUndertakingKeysEvidence
                                : "",
                          },
                        }));
                      }}
                    >
                      {similarUndertakingDistinctOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <span
                      id="site-aid-de-minimis-undertaking-distinct-help"
                      className={helpClassName}
                    >
                      À renseigner seulement si une alerte signale des clés
                      proches. « Non » signifie qu’il faut recopier une même clé
                      ; « Oui » exige une distinction documentée. Cette
                      déclaration reste sous votre responsabilité.
                    </span>
                  </label>
                  {input.aid.similarUndertakingKeysDistinct === "yes" ? (
                    <label className={labelClassName}>
                      Preuve de distinction des clés proches
                      <input
                        id={issueFieldIds.similarUndertakingDistinctEvidence}
                        className={inputClassName}
                        value={input.aid.similarUndertakingKeysEvidence}
                        {...issueA11yWithDescription(
                          issueFieldIds.similarUndertakingDistinctEvidence,
                          "site-aid-de-minimis-undertaking-distinct-evidence-help",
                        )}
                        onChange={(event) =>
                          setInput((current) => ({
                            ...current,
                            aid: {
                              ...current.aid,
                              similarUndertakingKeysEvidence:
                                event.target.value,
                            },
                          }))
                        }
                        placeholder="Ex. extrait du registre, organigramme ou note juridique datée"
                      />
                      <span
                        id="site-aid-de-minimis-undertaking-distinct-evidence-help"
                        className={helpClassName}
                      >
                        Indiquez une référence contrôlable et sa date. L’outil
                        conserve votre déclaration sans authentifier cette
                        preuve.
                      </span>
                    </label>
                  ) : null}
                  <label className={labelClassName}>
                    Octroi juridique de l’aide actuelle
                    <select
                      id={issueFieldIds.legalGrantStatus}
                      className={inputClassName}
                      value={input.aid.legalGrantStatus}
                      {...issueA11y(issueFieldIds.legalGrantStatus)}
                      onChange={(event) => {
                        const legalGrantStatus = event.target
                          .value as SiteAidTriState;
                        setInput((current) => ({
                          ...current,
                          aid: {
                            ...current.aid,
                            legalGrantStatus,
                            legalGrantDate:
                              legalGrantStatus === "no"
                                ? ""
                                : current.aid.legalGrantDate,
                          },
                        }));
                      }}
                    >
                      {legalGrantStatusOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <span className={helpClassName}>
                      « Oui » exige une décision créant un droit à l’aide, pas
                      une simple estimation du simulateur.
                    </span>
                  </label>
                  <label className={labelClassName}>
                    Date d’octroi juridique de l’aide actuelle
                    <input
                      id={issueFieldIds.legalGrantDate}
                      type="date"
                      disabled={input.aid.legalGrantStatus === "no"}
                      className={`${inputClassName} disabled:cursor-not-allowed disabled:opacity-60`}
                      value={input.aid.legalGrantDate}
                      {...issueA11y(issueFieldIds.legalGrantDate)}
                      onChange={(event) =>
                        setInput((current) => ({
                          ...current,
                          aid: {
                            ...current.aid,
                            legalGrantDate: event.target.value,
                          },
                        }))
                      }
                    />
                    <span className={helpClassName}>
                      Laissez vide lorsque l’aide est explicitement non
                      octroyée.
                    </span>
                  </label>
                  {currentCentralRegisterRequired ? (
                    <div
                      id="site-aid-central-register-section"
                      role="group"
                      aria-labelledby="site-aid-central-register-title"
                      aria-describedby={CENTRAL_REGISTER_HELP_ID}
                      className="rounded-xl border border-sky-200 bg-sky-50/50 p-4 dark:border-sky-900 dark:bg-sky-950/20 lg:col-span-3"
                    >
                      <p
                        id="site-aid-central-register-title"
                        className="m-0 text-xs font-black text-zinc-950 dark:text-white"
                      >
                        Registre central français — aide actuelle
                      </p>
                      <p
                        id={CENTRAL_REGISTER_HELP_ID}
                        className="mb-0 mt-1 text-[11px] leading-relaxed text-zinc-600 dark:text-zinc-300"
                      >
                        Les articles 6 des règlements général, SIEG et agricole
                        fixent le délai européen de 20 jours ouvrables. Pour la
                        mise en œuvre française et la sphère qu’il vise, les
                        articles 2 et 3 du décret n° 2025-1361 organisent la
                        transmission à la Plateforme ; la publication reste une
                        étape distincte. Vérifiez le jeu officiel aides_minimis
                        sur data.economie.gouv.fr. Pour que le contrôle soit
                        exploitable, renseignez uniquement une URL de ce jeu
                        contenant un recordid, un recordid autonome exploitable,
                        ou une attestation structurée de l’autorité (autorité,
                        référence et date). L’outil n’interroge pas la
                        Plateforme et n’authentifie aucune preuve. L’identifiant
                        unique interne prévu par le décret n’est pas une donnée
                        publique.
                      </p>
                      <div className="mt-3 grid gap-4 sm:grid-cols-2">
                        <label className={labelClassName}>
                          Statut au registre central national
                          <select
                            id={issueFieldIds.centralRegisterStatus}
                            className={inputClassName}
                            value={input.aid.centralRegisterStatus ?? "unknown"}
                            {...issueA11yWithDescription(
                              issueFieldIds.centralRegisterStatus,
                              CENTRAL_REGISTER_HELP_ID,
                            )}
                            onChange={(event) => {
                              const centralRegisterStatus = event.target
                                .value as SiteAidCentralRegisterStatus;
                              setInput((current) => ({
                                ...current,
                                aid: {
                                  ...current.aid,
                                  centralRegisterStatus,
                                  centralRegisterReference:
                                    centralRegisterStatus === "registered"
                                      ? (current.aid.centralRegisterReference ??
                                        "")
                                      : "",
                                },
                              }));
                            }}
                          >
                            {centralRegisterStatusOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label className={labelClassName}>
                          Preuve du registre : URL aides_minimis avec recordid,
                          recordid autonome ou attestation structurée
                          <input
                            id={issueFieldIds.centralRegisterReference}
                            className={`${inputClassName} disabled:cursor-not-allowed disabled:opacity-60`}
                            disabled={
                              input.aid.centralRegisterStatus !== "registered"
                            }
                            value={input.aid.centralRegisterReference ?? ""}
                            {...issueA11yWithDescription(
                              issueFieldIds.centralRegisterReference,
                              CENTRAL_REGISTER_HELP_ID,
                            )}
                            onChange={(event) =>
                              setInput((current) => ({
                                ...current,
                                aid: {
                                  ...current.aid,
                                  centralRegisterReference: event.target.value,
                                },
                              }))
                            }
                            placeholder="URL aides_minimis avec recordid, recordid autonome ou attestation structurée (autorité, référence, date)"
                          />
                        </label>
                      </div>
                    </div>
                  ) : null}
                  <label className={labelClassName}>
                    Valeur juridique de l’aide actuelle
                    <input
                      id={issueFieldIds.legalAidValue}
                      type="number"
                      min="0"
                      step="0.01"
                      inputMode="decimal"
                      disabled={input.aid.stage === "none"}
                      className={`${inputClassName} disabled:cursor-not-allowed disabled:opacity-60`}
                      value={numberValue(input.aid.legalAidValueAmount)}
                      {...issueA11yWithDescription(
                        issueFieldIds.legalAidValue,
                        "site-aid-legal-aid-value-help",
                      )}
                      onChange={(event) =>
                        setInput((current) => ({
                          ...current,
                          aid: {
                            ...current.aid,
                            legalAidValueAmount: optionalNumber(
                              event.target.value,
                            ),
                          },
                        }))
                      }
                    />
                    <span
                      id="site-aid-legal-aid-value-help"
                      className={helpClassName}
                    >
                      À 0 € et désactivé tant qu’il n’existe aucune
                      notification. Saisissez le montant brut d’une subvention
                      ou l’équivalent-subvention brut (ESB) communiqué pour un
                      autre instrument. Ne saisissez jamais le nominal d’un prêt
                      ou d’une garantie. Cette valeur ne réduit pas, à elle
                      seule, le coût ni la trésorerie.
                    </span>
                  </label>
                </div>
              </fieldset>
              {renderWizardPanelNavigation()}
            </section>
          ) : null}

          {activeStepId === "payment" ? (
            <section
              id={wizardStepPanelId("payment")}
              data-site-aid-wizard-panel="payment"
              aria-labelledby={wizardStepHeadingId("payment")}
            >
              <h4
                id={wizardStepHeadingId("payment")}
                tabIndex={-1}
                className="mb-4 mt-0 text-lg font-black text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 dark:text-white"
              >
                Étape 5 sur 9 — Contribution, facture et paiement
              </h4>
              {renderStepErrorStatus("payment")}
              <fieldset
                id="site-aid-payment-section"
                tabIndex={-1}
                className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5"
              >
                <legend className="px-2 text-sm font-black text-zinc-950 dark:text-white">
                  5. Montants financiers et chaîne documentaire
                </legend>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="lg:col-span-3">
                    <p className="m-0 text-xs font-black uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
                      État financier et notification
                    </p>
                  </div>
                  <label className={labelClassName}>
                    État financier
                    <select
                      id={issueFieldIds.stage}
                      className={inputClassName}
                      value={input.aid.stage}
                      {...issueA11y(issueFieldIds.stage)}
                      onChange={(event) =>
                        updateStage(event.target.value as SiteAidStage)
                      }
                    >
                      {stageOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className={`${labelClassName} lg:col-span-2`}>
                    Preuve de notification ou d’absence de notification
                    <input
                      id={issueFieldIds.notificationEvidence}
                      className={inputClassName}
                      value={input.gateEvidence.notification}
                      {...issueA11y(issueFieldIds.notificationEvidence)}
                      onChange={(event) =>
                        updateGateEvidence("notification", event.target.value)
                      }
                      placeholder="Lettre, courriel, référence ou état daté du dossier"
                    />
                  </label>
                  <div className="lg:col-span-3">
                    <p className="m-0 text-xs font-black uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
                      Contribution financière approuvée
                    </p>
                  </div>
                  <label className={labelClassName}>
                    Contribution financière approuvée pour la facture
                    <input
                      id={issueFieldIds.approvedContribution}
                      type="number"
                      min="0"
                      step="0.01"
                      inputMode="decimal"
                      disabled={
                        input.aid.stage === "none" ||
                        !financialContributionSupported
                      }
                      className={`${inputClassName} disabled:cursor-not-allowed disabled:opacity-60`}
                      value={numberValue(
                        input.aid.approvedFinancialContributionAmount,
                      )}
                      {...issueA11y(issueFieldIds.approvedContribution)}
                      onChange={(event) =>
                        setInput((current) => ({
                          ...current,
                          aid: {
                            ...current.aid,
                            approvedFinancialContributionAmount: optionalNumber(
                              event.target.value,
                            ),
                          },
                        }))
                      }
                    />
                    <span className={helpClassName}>
                      {financialContributionSupported
                        ? "Montant que la notification prévoit de payer pour cette facture. Il reste distinct de la valeur juridique."
                        : "Désactivé et vidé : ce moteur ne modélise financièrement que les subventions. Ne saisissez ici ni capital de prêt, ni nominal garanti, ni ESB, ni économie fiscale ou sociale."}
                    </span>
                  </label>
                  <div className="lg:col-span-3">
                    <p className="m-0 text-xs font-black uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
                      Paiement effectif et destinataire
                    </p>
                  </div>
                  <label className={labelClassName}>
                    {input.aid.paymentMode === "direct"
                      ? "Contribution effectivement payée au fournisseur"
                      : "Contribution effectivement payée à l’entreprise"}
                    <input
                      id={issueFieldIds.actualContribution}
                      type="number"
                      min="0"
                      step="0.01"
                      inputMode="decimal"
                      disabled={
                        input.aid.stage !== "received" ||
                        !financialContributionSupported
                      }
                      className={`${inputClassName} disabled:cursor-not-allowed disabled:opacity-60`}
                      value={numberValue(
                        input.aid.actualFinancialContributionAmount,
                      )}
                      {...issueA11y(issueFieldIds.actualContribution)}
                      onChange={(event) =>
                        setInput((current) => ({
                          ...current,
                          aid: {
                            ...current.aid,
                            actualFinancialContributionAmount: optionalNumber(
                              event.target.value,
                            ),
                          },
                        }))
                      }
                    />
                    <span className={helpClassName}>
                      {!financialContributionSupported
                        ? "Désactivé et vidé : aucun décaissement, nominal, avantage fiscal ou flux d’un instrument non modélisé ne doit être saisi comme une subvention effectivement payée."
                        : input.aid.paymentMode === "direct"
                          ? "Saisissez le paiement que la preuve attribue au fournisseur. L’entreprise encaisse 0 € dans ce flux ; la contribution approuvée reste distincte pour mesurer l’écart."
                          : "Saisissez uniquement le montant crédité à l’entreprise. La contribution approuvée reste distincte pour mesurer l’écart."}
                    </span>
                  </label>
                  <label className={labelClassName}>
                    Mode et destinataire du paiement
                    <select
                      id={issueFieldIds.paymentMode}
                      disabled={!financialContributionSupported}
                      className={`${inputClassName} disabled:cursor-not-allowed disabled:opacity-60`}
                      value={input.aid.paymentMode}
                      {...issueA11y(issueFieldIds.paymentMode)}
                      onChange={(event) =>
                        updatePaymentMode(
                          event.target.value as SiteAidPaymentMode,
                        )
                      }
                    >
                      {paymentOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <span className={helpClassName}>
                      {financialContributionSupported
                        ? "Choisissez le destinataire du versement prévu par la notification."
                        : "Désactivé : le mode de paiement d’un prêt, d’une garantie, d’un allègement ou d’un autre instrument n’est pas modélisé par ce dossier."}
                    </span>
                  </label>
                  <p className="m-0 self-end rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-xs leading-relaxed text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-200 lg:col-span-2">
                    {!financialContributionSupported
                      ? "Instrument non modélisé financièrement : seule sa valeur juridique ou son ESB documenté peut alimenter le contrôle réglementaire. Aucun nominal, montant financé, avantage fiscal, coût après aide ou gain de trésorerie n’est déduit ici."
                      : input.aid.paymentMode === "direct"
                        ? "Flux déclaré : l’autorité verse l’aide au fournisseur. Le bénéficiaire juridique peut rester l’entreprise, mais son encaissement bancaire est de 0 € ; seule la preuve officielle tranche."
                        : input.aid.paymentMode === "reimbursement" ||
                            input.aid.paymentMode === "advance"
                          ? "Flux déclaré : l’entreprise reçoit le versement. Ne confondez pas ce destinataire bancaire avec les critères juridiques de bénéficiaire, à vérifier dans la notification."
                          : "Destinataire réel du versement à confirmer dans la notification : entreprise ou fournisseur."}
                  </p>
                  <label className={labelClassName}>
                    {input.aid.paymentMode === "direct"
                      ? "Part de l’aide non avancée par l’entreprise, %"
                      : "Part de l’aide versée avant paiement fournisseur, %"}
                    <input
                      id={issueFieldIds.prepaymentPercent}
                      type="number"
                      min="0"
                      max="100"
                      step="0.01"
                      inputMode="decimal"
                      disabled={
                        !financialContributionSupported ||
                        input.aid.paymentMode === "reimbursement" ||
                        input.aid.paymentMode === "direct"
                      }
                      className={`${inputClassName} disabled:cursor-not-allowed disabled:opacity-60`}
                      value={
                        typeof input.aid.documentedPrepaymentPercent ===
                        "number"
                          ? input.aid.documentedPrepaymentPercent
                          : ""
                      }
                      {...issueA11y(issueFieldIds.prepaymentPercent)}
                      onChange={(event) =>
                        setInput((current) => ({
                          ...current,
                          aid: {
                            ...current.aid,
                            documentedPrepaymentPercent:
                              optionalNumber(event.target.value) ?? "unknown",
                          },
                        }))
                      }
                      placeholder="À confirmer"
                    />
                    <span className={helpClassName}>
                      {!financialContributionSupported
                        ? "Désactivé et vidé : aucun préfinancement n’est calculé pour cet instrument."
                        : input.aid.paymentMode === "direct"
                          ? "100 % signifie que le montant d’aide documenté est payé au fournisseur sans être avancé par l’entreprise ; cela ne signifie pas que 100 % de la facture est couverte."
                          : input.aid.paymentMode === "reimbursement"
                            ? "0 % : l’entreprise paie d’abord le fournisseur, puis reçoit l’aide selon les preuves saisies."
                            : "Pour une avance, saisissez uniquement la part du montant d’aide dont le versement avant paiement fournisseur est documenté."}
                    </span>
                  </label>
                  {input.aid.stage === "received" &&
                  financialContributionSupported ? (
                    <>
                      <p className="m-0 rounded-lg border border-blue-200 bg-blue-50 p-3 text-xs leading-relaxed text-blue-950 dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-100 lg:col-span-3">
                        {directPaymentCoversSupplierInvoice
                          ? "Le moteur a validé que le paiement direct couvre toute la facture : reste payé par l’entreprise, 0 €. Aucune preuve de paiement d’un reste inexistant n’est demandée. Conservez la facture finale ainsi que la date et la référence du versement direct au fournisseur."
                          : directPaymentProvisionallyCoversSupplierInvoice
                            ? "Égalité arithmétique provisoire : le paiement direct saisi laisse un reste calculé de 0 €, mais la couverture intégrale n’est pas documentée. La preuve d’un reste arithmétiquement inexistant est masquée ; complétez encore le rapprochement de la facture finale, ses références, le versement et sa chronologie."
                            : input.aid.paymentMode === "direct"
                              ? directPaymentCoverageStatus === "invalid" ||
                                directCompanySupplierRemainder === undefined
                                ? "Reste fournisseur : ND. Les données ne permettent pas au moteur de valider la couverture de la facture. La preuve du paiement par l’entreprise reste visible jusqu’à résolution de l’incohérence."
                                : "Séparez les traces : facture finale, paiement direct de l’aide au fournisseur, puis paiement du reste de la facture par l’entreprise. Une preuve du versement public ne prouve pas que l’entreprise a payé son reste."
                              : "Séparez les trois traces : facture finale du fournisseur, paiement de cette facture par l’entreprise et encaissement de l’aide. Une référence d’aide ne prouve pas le paiement du fournisseur."}
                      </p>
                      <label className={labelClassName}>
                        Les lignes reprennent-elles la facture finale acquittée
                        ?
                        <select
                          id={issueFieldIds.finalInvoiceMatch}
                          className={inputClassName}
                          value={input.aid.finalInvoiceMatchesQuote}
                          {...issueA11y(issueFieldIds.finalInvoiceMatch)}
                          onChange={(event) =>
                            setInput((current) => ({
                              ...current,
                              aid: {
                                ...current.aid,
                                finalInvoiceMatchesQuote: event.target
                                  .value as SiteAidTriState,
                              },
                            }))
                          }
                        >
                          {triStateOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className={labelClassName}>
                        Date de la facture finale
                        <input
                          id={issueFieldIds.finalInvoiceDate}
                          type="date"
                          className={inputClassName}
                          value={input.aid.finalInvoiceDate}
                          {...issueA11y(issueFieldIds.finalInvoiceDate)}
                          onChange={(event) =>
                            setInput((current) => ({
                              ...current,
                              aid: {
                                ...current.aid,
                                finalInvoiceDate: event.target.value,
                              },
                            }))
                          }
                        />
                      </label>
                      <label className={labelClassName}>
                        Référence de la facture finale
                        <input
                          id={issueFieldIds.finalInvoiceReference}
                          className={inputClassName}
                          value={input.aid.finalInvoiceReference}
                          {...issueA11y(issueFieldIds.finalInvoiceReference)}
                          onChange={(event) =>
                            setInput((current) => ({
                              ...current,
                              aid: {
                                ...current.aid,
                                finalInvoiceReference: event.target.value,
                              },
                            }))
                          }
                          placeholder="Numéro, date et fournisseur"
                        />
                      </label>
                      {input.aid.paymentMode !== "direct" ||
                      result.supplierRemainderEvidenceRequired !== false ? (
                        <label className={labelClassName}>
                          {input.aid.paymentMode === "direct"
                            ? "Référence du reste payé au fournisseur par l’entreprise"
                            : "Référence du paiement fournisseur par l’entreprise"}
                          <input
                            id={issueFieldIds.supplierPaymentReference}
                            className={inputClassName}
                            value={input.aid.supplierPaymentReference}
                            {...issueA11y(
                              issueFieldIds.supplierPaymentReference,
                            )}
                            onChange={(event) =>
                              setInput((current) => ({
                                ...current,
                                aid: {
                                  ...current.aid,
                                  supplierPaymentReference: event.target.value,
                                },
                              }))
                            }
                            placeholder={
                              input.aid.paymentMode === "direct"
                                ? "Virement du reste, relevé ou preuve d’acquittement"
                                : "Virement, relevé ou preuve d’acquittement"
                            }
                          />
                        </label>
                      ) : null}
                      <label className={labelClassName}>
                        {input.aid.paymentMode === "direct"
                          ? "Date du versement direct au fournisseur"
                          : "Date d’encaissement de l’aide par l’entreprise"}
                        <input
                          id={issueFieldIds.receiptDate}
                          type="date"
                          className={inputClassName}
                          value={input.aid.receiptDate}
                          {...issueA11y(issueFieldIds.receiptDate)}
                          onChange={(event) =>
                            setInput((current) => ({
                              ...current,
                              aid: {
                                ...current.aid,
                                receiptDate: event.target.value,
                              },
                            }))
                          }
                        />
                      </label>
                      <label className={labelClassName}>
                        {input.aid.paymentMode === "direct"
                          ? "Référence du versement direct au fournisseur"
                          : "Référence de l’encaissement par l’entreprise"}
                        <input
                          id={issueFieldIds.receiptReference}
                          className={inputClassName}
                          value={input.aid.receiptReference}
                          {...issueA11y(issueFieldIds.receiptReference)}
                          onChange={(event) =>
                            setInput((current) => ({
                              ...current,
                              aid: {
                                ...current.aid,
                                receiptReference: event.target.value,
                              },
                            }))
                          }
                          placeholder={
                            input.aid.paymentMode === "direct"
                              ? "Avis de paiement au fournisseur ou référence bancaire"
                              : "Avis de paiement de l’aide ou référence bancaire"
                          }
                        />
                      </label>
                    </>
                  ) : null}
                </div>
              </fieldset>
              {renderWizardPanelNavigation()}
            </section>
          ) : null}

          {activeStepId === "treasury" ? (
            <section
              id={wizardStepPanelId("treasury")}
              data-site-aid-wizard-panel="treasury"
              aria-labelledby={wizardStepHeadingId("treasury")}
            >
              <h4
                id={wizardStepHeadingId("treasury")}
                tabIndex={-1}
                className="mb-4 mt-0 text-lg font-black text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 dark:text-white"
              >
                Étape 6 sur 9 — Trésorerie et coût de l’attente
              </h4>
              {renderStepErrorStatus("treasury")}
              <fieldset
                id="site-aid-cash-section"
                tabIndex={-1}
                className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5"
              >
                <legend className="px-2 text-sm font-black text-zinc-950 dark:text-white">
                  6. Trésorerie et attente
                </legend>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <label className={labelClassName}>
                    Trésorerie disponible
                    <input
                      id={issueFieldIds.availableCash}
                      type="number"
                      min="0"
                      step="0.01"
                      inputMode="decimal"
                      className={inputClassName}
                      value={numberValue(input.availableCash)}
                      {...issueA11y(issueFieldIds.availableCash)}
                      onChange={(event) =>
                        setInput((current) => ({
                          ...current,
                          availableCash: optionalNumber(event.target.value),
                        }))
                      }
                    />
                  </label>
                  <label className={labelClassName}>
                    Mois d’attente
                    <input
                      id={issueFieldIds.waitMonths}
                      type="number"
                      min="0"
                      step="0.1"
                      inputMode="decimal"
                      className={inputClassName}
                      value={numberValue(input.wait.months)}
                      {...issueA11y(issueFieldIds.waitMonths)}
                      onChange={(event) =>
                        setInput((current) => ({
                          ...current,
                          wait: {
                            ...current.wait,
                            months: optionalNumber(event.target.value),
                          },
                        }))
                      }
                    />
                  </label>
                  <label className={labelClassName}>
                    Marge contributive mensuelle perdue à cause du retard
                    <input
                      id={issueFieldIds.monthlyDelayMargin}
                      type="number"
                      min="0"
                      step="0.01"
                      inputMode="decimal"
                      className={inputClassName}
                      value={numberValue(
                        input.wait.monthlyDelayContributionMargin,
                      )}
                      {...issueA11y(issueFieldIds.monthlyDelayMargin)}
                      onChange={(event) =>
                        setInput((current) => ({
                          ...current,
                          wait: {
                            ...current.wait,
                            monthlyDelayContributionMargin: optionalNumber(
                              event.target.value,
                            ),
                          },
                        }))
                      }
                    />
                    <span className={helpClassName}>
                      Marge, pas chiffre d’affaires. Saisissez 0 € si la perte
                      causée uniquement par ce délai n’est pas défendable.
                    </span>
                  </label>
                  <label className={labelClassName}>
                    Frais propres à la demande et à l’attente
                    <input
                      id={issueFieldIds.aidSpecificFees}
                      type="number"
                      min="0"
                      step="0.01"
                      inputMode="decimal"
                      className={inputClassName}
                      value={numberValue(input.wait.aidSpecificFees)}
                      {...issueA11y(issueFieldIds.aidSpecificFees)}
                      onChange={(event) =>
                        setInput((current) => ({
                          ...current,
                          wait: {
                            ...current.wait,
                            aidSpecificFees: optionalNumber(event.target.value),
                          },
                        }))
                      }
                    />
                    <span className={helpClassName}>
                      Excluez les frais généraux d’un prêt : comparez ce
                      financement séparément sur son coût total.
                    </span>
                  </label>
                </div>
              </fieldset>
              {renderWizardPanelNavigation()}
            </section>
          ) : null}

          {activeStepId === "history" ? (
            <section
              id={wizardStepPanelId("history")}
              data-site-aid-wizard-panel="history"
              aria-labelledby={wizardStepHeadingId("history")}
            >
              <h4
                id={wizardStepHeadingId("history")}
                tabIndex={-1}
                className="mb-4 mt-0 text-lg font-black text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 dark:text-white"
              >
                Étape 7 sur 9 — Aides antérieures et restructuration
              </h4>
              {renderStepErrorStatus("history")}
              <fieldset
                id="site-aid-history-section"
                tabIndex={-1}
                className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5"
              >
                <legend className="px-2 text-sm font-black text-zinc-950 dark:text-white">
                  7. Historique des aides
                </legend>
                <div
                  id="site-aid-register-section"
                  tabIndex={-1}
                  className="mt-5 space-y-4"
                >
                  <p
                    id={REGISTER_DE_MINIMIS_FORMAT_HELP_ID}
                    className="m-0 rounded-lg border border-sky-200 bg-sky-50 p-3 text-xs leading-relaxed text-sky-950 dark:border-sky-900 dark:bg-sky-950/30 dark:text-sky-100"
                  >
                    <strong>Formats de référence de minimis lus.</strong> Un
                    seul numéro isolé (2023/2831, 2023/2832, 1408/2013 ou
                    717/2014), un CELEX exact — acte d’origine ou version
                    consolidée datée — ou une URL ELI officielle en HTTPS sur
                    eur-lex.europa.eu ou data.europa.eu. Reconnaître la syntaxe
                    n’authentifie pas la pièce.
                  </p>
                  <p
                    id={REGISTER_UNDERTAKING_SCOPE_HELP_ID}
                    className="m-0 rounded-lg border border-zinc-200 bg-white p-3 text-xs leading-relaxed text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                  >
                    <strong>Clé d’entreprise partagée.</strong> Recopiez
                    l’identité exacte. Deux écritures Unicode NFC d’un même
                    caractère sont considérées comme identiques, mais l’outil ne
                    fusionne jamais automatiquement deux clés seulement proches.
                    Une ressemblance entre alphabets latin, grec ou cyrillique
                    déclenche une alerte. Même entreprise : utilisez la même clé
                    exacte. Entités distinctes : indiquez-le et joignez une
                    preuve. L’outil n’authentifie ni l’identité ni cette preuve.
                  </p>
                  {input.aidRegister.map((entry, index) => {
                    const rowId =
                      registerEntryIds[index] ?? `register-fallback-${index}`;
                    const memberStateLabel =
                      "État membre de l’autorité d’octroi (pas le siège du bénéficiaire)";
                    const undertakingScopeLabel =
                      entry.legalBasisStatus === "de-minimis"
                        ? "Périmètre de l’entreprise unique"
                        : "Périmètre entreprise/groupe à qualifier";
                    const undertakingDistinctHelpId = `site-aid-register-entry-${index + 1}-undertaking-distinct-help`;
                    const undertakingDistinctEvidenceHelpId = `site-aid-register-entry-${index + 1}-undertaking-distinct-evidence-help`;
                    const amountHelpId = `site-aid-register-entry-${index + 1}-amount-help`;
                    const sgeiLegendId = `site-aid-register-entry-${index + 1}-sgei-title`;
                    const sgeiHelpId = `site-aid-register-entry-${index + 1}-sgei-help`;
                    const centralRegisterHelpId = `site-aid-register-entry-${index + 1}-central-register-help`;
                    return (
                      <div
                        key={rowId}
                        role="group"
                        aria-labelledby={`site-aid-register-entry-${index + 1}-title`}
                        className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50"
                      >
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <p
                            id={`site-aid-register-entry-${index + 1}-title`}
                            className="m-0 text-xs font-black text-zinc-900 dark:text-white"
                          >
                            Aide antérieure {index + 1}
                          </p>
                          <button
                            type="button"
                            onClick={() => removeRegisterEntry(index)}
                            aria-label={`Supprimer l’aide antérieure ${index + 1}`}
                            className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg border border-zinc-300 bg-white text-zinc-600 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300"
                          >
                            <Trash2 className="size-4" aria-hidden="true" />
                            <span className="sr-only">
                              Supprimer l’aide antérieure {index + 1}
                            </span>
                          </button>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                          <label className={labelClassName}>
                            Organisme
                            <input
                              id={registerIssueFieldId(index, "authority")}
                              ref={(element) => {
                                if (element) {
                                  registerFirstInputRefs.current.set(
                                    rowId,
                                    element,
                                  );
                                } else {
                                  registerFirstInputRefs.current.delete(rowId);
                                }
                              }}
                              className={inputClassName}
                              aria-label={dynamicControlAccessibleName(
                                "Organisme",
                                "register",
                                index,
                              )}
                              value={entry.authority}
                              {...issueA11y(
                                registerIssueFieldId(index, "authority"),
                              )}
                              onChange={(event) =>
                                updateRegisterEntry(index, {
                                  authority: event.target.value,
                                })
                              }
                            />
                          </label>
                          <label className={labelClassName}>
                            Dispositif
                            <input
                              id={registerIssueFieldId(index, "scheme")}
                              className={inputClassName}
                              aria-label={dynamicControlAccessibleName(
                                "Dispositif",
                                "register",
                                index,
                              )}
                              value={entry.scheme}
                              {...issueA11y(
                                registerIssueFieldId(index, "scheme"),
                              )}
                              onChange={(event) =>
                                updateRegisterEntry(index, {
                                  scheme: event.target.value,
                                })
                              }
                            />
                          </label>
                          <label className={labelClassName}>
                            Statut de la base juridique
                            <select
                              id={registerIssueFieldId(
                                index,
                                "legal-basis-status",
                              )}
                              className={inputClassName}
                              aria-label={dynamicControlAccessibleName(
                                "Statut de la base juridique",
                                "register",
                                index,
                              )}
                              value={entry.legalBasisStatus}
                              {...issueA11y(
                                registerIssueFieldId(
                                  index,
                                  "legal-basis-status",
                                ),
                              )}
                              onChange={(event) =>
                                updateRegisterLegalBasisStatus(
                                  index,
                                  event.target.value as SiteAidLegalBasisStatus,
                                )
                              }
                            >
                              {legalBasisStatusOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </label>
                          {entry.legalBasisStatus === "de-minimis" ||
                          isResolvedDeMinimis(
                            result.registerLegalBasisResolutions[index] ??
                              "unknown",
                          ) ? (
                            <>
                              <label className={labelClassName}>
                                Référence exacte du règlement de minimis
                                <input
                                  id={registerIssueFieldId(
                                    index,
                                    "de-minimis-regime",
                                  )}
                                  className={inputClassName}
                                  aria-label={dynamicControlAccessibleName(
                                    "Référence exacte du règlement de minimis",
                                    "register",
                                    index,
                                  )}
                                  value={entry.regime}
                                  {...issueA11yWithDescription(
                                    registerIssueFieldId(
                                      index,
                                      "de-minimis-regime",
                                    ),
                                    REGISTER_DE_MINIMIS_FORMAT_HELP_ID,
                                  )}
                                  onChange={(event) =>
                                    updateRegisterDeMinimisRegime(
                                      index,
                                      event.target.value,
                                    )
                                  }
                                  placeholder="Ex. règlement (UE) 2023/2831"
                                />
                              </label>
                              {result.registerLegalBasisResolutions[index] ===
                              "de-minimis-sgei" ? (
                                <fieldset
                                  aria-labelledby={sgeiLegendId}
                                  aria-describedby={sgeiHelpId}
                                  className="grid gap-4 rounded-xl border border-blue-200 bg-blue-50/60 p-4 dark:border-blue-900 dark:bg-blue-950/20 sm:grid-cols-2 lg:col-span-3"
                                >
                                  <legend
                                    id={sgeiLegendId}
                                    className="px-2 text-xs font-black text-blue-950 dark:text-blue-100"
                                  >
                                    Conditions du service d’intérêt économique
                                    général (SIEG) — aide antérieure {index + 1}
                                  </legend>
                                  <p
                                    id={sgeiHelpId}
                                    className="m-0 text-xs leading-relaxed text-blue-950 dark:text-blue-100 sm:col-span-2"
                                  >
                                    Le mandat écrit ou électronique, son service
                                    exact et le contrôle de toute autre
                                    compensation doivent viser cette aide. « Oui
                                    » à une autre compensation du même SIEG
                                    bloque le cumul ; seul « Non » avec preuve
                                    écrite permet de poursuivre. L’outil
                                    conserve ces déclarations sans authentifier
                                    les pièces.
                                  </p>
                                  <label className={labelClassName}>
                                    Mandat SIEG vérifié
                                    <select
                                      id={registerIssueFieldId(
                                        index,
                                        "sgei-entrustment-status",
                                      )}
                                      className={inputClassName}
                                      aria-label={dynamicControlAccessibleName(
                                        "Mandat SIEG vérifié",
                                        "register",
                                        index,
                                      )}
                                      value={entry.sgeiEntrustmentVerified}
                                      {...issueA11yWithDescription(
                                        registerIssueFieldId(
                                          index,
                                          "sgei-entrustment-status",
                                        ),
                                        sgeiHelpId,
                                      )}
                                      onChange={(event) =>
                                        updateRegisterSgeiEntrustment(
                                          index,
                                          event.target.value as SiteAidTriState,
                                        )
                                      }
                                    >
                                      {sgeiEntrustmentOptions.map((option) => (
                                        <option
                                          key={option.value}
                                          value={option.value}
                                        >
                                          {option.label}
                                        </option>
                                      ))}
                                    </select>
                                  </label>
                                  <label className={labelClassName}>
                                    Preuve du mandat SIEG
                                    <input
                                      id={registerIssueFieldId(
                                        index,
                                        "sgei-entrustment-evidence",
                                      )}
                                      className={inputClassName}
                                      aria-label={dynamicControlAccessibleName(
                                        "Preuve du mandat SIEG",
                                        "register",
                                        index,
                                      )}
                                      value={entry.sgeiEntrustmentEvidence}
                                      {...issueA11yWithDescription(
                                        registerIssueFieldId(
                                          index,
                                          "sgei-entrustment-evidence",
                                        ),
                                        sgeiHelpId,
                                      )}
                                      onChange={(event) =>
                                        updateRegisterEntry(index, {
                                          sgeiEntrustmentEvidence:
                                            event.target.value,
                                        })
                                      }
                                    />
                                  </label>
                                  <label
                                    className={`${labelClassName} sm:col-span-2`}
                                  >
                                    Identité exacte du SIEG confié
                                    <input
                                      id={registerIssueFieldId(
                                        index,
                                        "sgei-service-identity",
                                      )}
                                      className={inputClassName}
                                      aria-label={dynamicControlAccessibleName(
                                        "Identité exacte du SIEG confié",
                                        "register",
                                        index,
                                      )}
                                      value={entry.sgeiServiceIdentity}
                                      {...issueA11yWithDescription(
                                        registerIssueFieldId(
                                          index,
                                          "sgei-service-identity",
                                        ),
                                        sgeiHelpId,
                                      )}
                                      onChange={(event) =>
                                        updateRegisterEntry(index, {
                                          sgeiServiceIdentity:
                                            event.target.value,
                                        })
                                      }
                                    />
                                  </label>
                                  {currentAidUsesSgei ? (
                                    <>
                                      <label className={labelClassName}>
                                        Cette aide antérieure concerne-t-elle le
                                        même SIEG que l’aide actuelle ?
                                        <select
                                          id={registerIssueFieldId(
                                            index,
                                            "sgei-relation-to-current-status",
                                          )}
                                          className={inputClassName}
                                          aria-label={dynamicControlAccessibleName(
                                            "Cette aide antérieure concerne-t-elle le même SIEG que l’aide actuelle ?",
                                            "register",
                                            index,
                                          )}
                                          value={
                                            entry.sgeiRelationToCurrentService
                                          }
                                          {...issueA11yWithDescription(
                                            registerIssueFieldId(
                                              index,
                                              "sgei-relation-to-current-status",
                                            ),
                                            sgeiHelpId,
                                          )}
                                          onChange={(event) =>
                                            updateRegisterEntry(index, {
                                              sgeiRelationToCurrentService:
                                                event.target
                                                  .value as SiteAidTriState,
                                              sgeiRelationToCurrentServiceEvidence:
                                                event.target.value === "no"
                                                  ? entry.sgeiRelationToCurrentServiceEvidence
                                                  : "",
                                            })
                                          }
                                        >
                                          {triStateOptions.map((option) => (
                                            <option
                                              key={option.value}
                                              value={option.value}
                                            >
                                              {option.label}
                                            </option>
                                          ))}
                                        </select>
                                      </label>
                                      <label className={labelClassName}>
                                        Preuve de distinction avec le service
                                        SIEG de l’aide actuelle
                                        <input
                                          id={registerIssueFieldId(
                                            index,
                                            "sgei-relation-to-current-evidence",
                                          )}
                                          className={`${inputClassName} disabled:cursor-not-allowed disabled:opacity-60`}
                                          disabled={
                                            entry.sgeiRelationToCurrentService !==
                                            "no"
                                          }
                                          aria-label={dynamicControlAccessibleName(
                                            "Preuve de distinction avec le service SIEG de l’aide actuelle",
                                            "register",
                                            index,
                                          )}
                                          value={
                                            entry.sgeiRelationToCurrentServiceEvidence
                                          }
                                          {...issueA11yWithDescription(
                                            registerIssueFieldId(
                                              index,
                                              "sgei-relation-to-current-evidence",
                                            ),
                                            sgeiHelpId,
                                          )}
                                          onChange={(event) =>
                                            updateRegisterEntry(index, {
                                              sgeiRelationToCurrentServiceEvidence:
                                                event.target.value,
                                            })
                                          }
                                          placeholder="Mandat, objet et référence permettant de distinguer les services"
                                        />
                                      </label>
                                      <p className="m-0 rounded-lg border border-blue-200 bg-white/70 p-3 text-xs leading-relaxed text-blue-950 dark:border-blue-900 dark:bg-zinc-950/50 dark:text-blue-100 sm:col-span-2">
                                        Une différence de libellé ne prouve
                                        jamais, à elle seule, que deux services
                                        sont distincts. Pour l’article 5,
                                        paragraphe 2, le contrôle du même
                                        service n’est pas limité au même État
                                        membre : conservez aussi les
                                        compensations transfrontalières dans le
                                        périmètre de l’entreprise unique.
                                      </p>
                                    </>
                                  ) : null}
                                  <label className={labelClassName}>
                                    Autre compensation du même SIEG présente
                                    <select
                                      id={registerIssueFieldId(
                                        index,
                                        "sgei-compensation-status",
                                      )}
                                      className={inputClassName}
                                      aria-label={dynamicControlAccessibleName(
                                        "Autre compensation du même SIEG présente",
                                        "register",
                                        index,
                                      )}
                                      value={
                                        entry.sgeiSameServiceCompensationPresent
                                      }
                                      {...issueA11yWithDescription(
                                        registerIssueFieldId(
                                          index,
                                          "sgei-compensation-status",
                                        ),
                                        sgeiHelpId,
                                      )}
                                      onChange={(event) =>
                                        updateRegisterSgeiCompensation(
                                          index,
                                          event.target.value as SiteAidTriState,
                                        )
                                      }
                                    >
                                      {sgeiCompensationOptions.map((option) => (
                                        <option
                                          key={option.value}
                                          value={option.value}
                                        >
                                          {option.label}
                                        </option>
                                      ))}
                                    </select>
                                  </label>
                                  <label className={labelClassName}>
                                    Preuve sur les compensations du même SIEG
                                    <input
                                      id={registerIssueFieldId(
                                        index,
                                        "sgei-compensation-evidence",
                                      )}
                                      className={inputClassName}
                                      aria-label={dynamicControlAccessibleName(
                                        "Preuve sur les compensations du même SIEG",
                                        "register",
                                        index,
                                      )}
                                      value={entry.sgeiCompensationEvidence}
                                      {...issueA11yWithDescription(
                                        registerIssueFieldId(
                                          index,
                                          "sgei-compensation-evidence",
                                        ),
                                        sgeiHelpId,
                                      )}
                                      onChange={(event) =>
                                        updateRegisterEntry(index, {
                                          sgeiCompensationEvidence:
                                            event.target.value,
                                        })
                                      }
                                    />
                                  </label>
                                </fieldset>
                              ) : null}
                            </>
                          ) : entry.legalBasisStatus === "not-de-minimis" ? (
                            <>
                              <p className="m-0 rounded-lg border border-amber-300 bg-amber-50 p-3 text-xs leading-relaxed text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100 lg:col-span-3">
                                <strong>
                                  Hors de minimis déclaré — revue externe
                                  obligatoire.
                                </strong>{" "}
                                Cette aide antérieure reste bloquée dans l’outil
                                : ses références ne peuvent pas être
                                authentifiées localement. Obtenez une
                                confirmation écrite de l’autorité compétente ou
                                une validation humaine hors outil
                                {result.registerLegalBasisResolutions[index] ===
                                "not-de-minimis-external-review"
                                  ? "."
                                  : " à confirmer."}
                              </p>
                              <label className={labelClassName}>
                                Base juridique hors de minimis
                                <input
                                  id={registerIssueFieldId(
                                    index,
                                    "non-de-minimis-basis",
                                  )}
                                  className={inputClassName}
                                  aria-label={dynamicControlAccessibleName(
                                    "Base juridique hors de minimis",
                                    "register",
                                    index,
                                  )}
                                  value={entry.nonDeMinimisLegalBasis}
                                  {...issueA11y(
                                    registerIssueFieldId(
                                      index,
                                      "non-de-minimis-basis",
                                    ),
                                  )}
                                  onChange={(event) =>
                                    updateRegisterEntry(index, {
                                      nonDeMinimisLegalBasis:
                                        event.target.value,
                                    })
                                  }
                                  placeholder="Régime notifié, exemption ou décision"
                                />
                              </label>
                              <label className={labelClassName}>
                                Référence officielle hors de minimis
                                <input
                                  id={registerIssueFieldId(
                                    index,
                                    "non-de-minimis-evidence",
                                  )}
                                  className={inputClassName}
                                  aria-label={dynamicControlAccessibleName(
                                    "Référence officielle hors de minimis",
                                    "register",
                                    index,
                                  )}
                                  value={entry.nonDeMinimisEvidenceReference}
                                  {...issueA11y(
                                    registerIssueFieldId(
                                      index,
                                      "non-de-minimis-evidence",
                                    ),
                                  )}
                                  onChange={(event) =>
                                    updateRegisterEntry(index, {
                                      nonDeMinimisEvidenceReference:
                                        event.target.value,
                                    })
                                  }
                                  placeholder="Document, article, URL ou décision"
                                />
                              </label>
                            </>
                          ) : (
                            <p className="m-0 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed text-amber-950 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-100 lg:col-span-3">
                              Base inconnue : aucun règlement de minimis ni
                              statut hors de minimis n’est présumé pour cette
                              aide antérieure.
                            </p>
                          )}
                          {entry.legalBasisStatus !== "de-minimis" ? (
                            <p
                              id={`site-aid-register-entry-${index + 1}-prudent-grouping-note`}
                              className="m-0 rounded-lg border border-sky-200 bg-sky-50 p-3 text-xs leading-relaxed text-sky-950 dark:border-sky-900 dark:bg-sky-950/30 dark:text-sky-100 lg:col-span-3"
                            >
                              Ces données ne qualifient ni le régime ni
                              l’éligibilité. Elles servent uniquement à
                              rapprocher un signal prudent de cumul entre aides
                              potentiellement liées. La base reste à qualifier
                              et une revue externe est obligatoire avant toute
                              conclusion.
                            </p>
                          ) : null}
                          <label className={labelClassName}>
                            {memberStateLabel}
                            <input
                              id={registerIssueFieldId(index, "member-state")}
                              className={inputClassName}
                              aria-label={dynamicControlAccessibleName(
                                memberStateLabel,
                                "register",
                                index,
                              )}
                              value={entry.memberState}
                              {...(entry.legalBasisStatus === "de-minimis"
                                ? issueA11y(
                                    registerIssueFieldId(index, "member-state"),
                                  )
                                : issueA11yWithDescription(
                                    registerIssueFieldId(index, "member-state"),
                                    `site-aid-register-entry-${index + 1}-prudent-grouping-note`,
                                  ))}
                              onChange={(event) =>
                                updateRegisterEntry(index, {
                                  memberState: event.target.value,
                                })
                              }
                              placeholder="Ex. France"
                            />
                            <span className={helpClassName}>
                              Ce pays pilote le regroupement de minimis et
                              l’applicabilité du registre français.
                            </span>
                          </label>
                          <label className={labelClassName}>
                            {undertakingScopeLabel}
                            <input
                              id={registerIssueFieldId(
                                index,
                                "single-undertaking",
                              )}
                              className={inputClassName}
                              aria-label={dynamicControlAccessibleName(
                                undertakingScopeLabel,
                                "register",
                                index,
                              )}
                              value={entry.singleUndertakingScope}
                              {...(entry.legalBasisStatus === "de-minimis"
                                ? issueA11yWithDescription(
                                    registerIssueFieldId(
                                      index,
                                      "single-undertaking",
                                    ),
                                    REGISTER_UNDERTAKING_SCOPE_HELP_ID,
                                  )
                                : issueA11yWithDescription(
                                    registerIssueFieldId(
                                      index,
                                      "single-undertaking",
                                    ),
                                    `site-aid-register-entry-${index + 1}-prudent-grouping-note`,
                                    REGISTER_UNDERTAKING_SCOPE_HELP_ID,
                                  ))}
                              onChange={(event) =>
                                updateRegisterEntry(index, {
                                  singleUndertakingScope: event.target.value,
                                })
                              }
                              placeholder="Société et entreprises liées à rapprocher"
                            />
                          </label>
                          <label className={labelClassName}>
                            Ces clés proches désignent-elles des entreprises
                            uniques distinctes ?
                            <select
                              id={registerIssueFieldId(
                                index,
                                "similar-undertaking-distinct-status",
                              )}
                              className={inputClassName}
                              aria-label={dynamicControlAccessibleName(
                                "Ces clés proches désignent-elles des entreprises uniques distinctes ?",
                                "register",
                                index,
                              )}
                              value={entry.similarUndertakingKeysDistinct}
                              {...issueA11yWithDescription(
                                registerIssueFieldId(
                                  index,
                                  "similar-undertaking-distinct-status",
                                ),
                                undertakingDistinctHelpId,
                              )}
                              onChange={(event) => {
                                const similarUndertakingKeysDistinct = event
                                  .target.value as SiteAidTriState;
                                updateRegisterEntry(index, {
                                  similarUndertakingKeysDistinct,
                                  similarUndertakingKeysEvidence:
                                    similarUndertakingKeysDistinct === "yes"
                                      ? entry.similarUndertakingKeysEvidence
                                      : "",
                                });
                              }}
                            >
                              {similarUndertakingDistinctOptions.map(
                                (option) => (
                                  <option
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </option>
                                ),
                              )}
                            </select>
                            <span
                              id={undertakingDistinctHelpId}
                              className={helpClassName}
                            >
                              À renseigner seulement si une alerte signale des
                              clés proches. « Non » impose de recopier une même
                              clé ; « Oui » exige une distinction documentée,
                              sous votre responsabilité.
                            </span>
                          </label>
                          {entry.similarUndertakingKeysDistinct === "yes" ? (
                            <label className={labelClassName}>
                              Preuve de distinction des clés proches
                              <input
                                id={registerIssueFieldId(
                                  index,
                                  "similar-undertaking-distinct-evidence",
                                )}
                                className={inputClassName}
                                aria-label={dynamicControlAccessibleName(
                                  "Preuve de distinction des clés proches",
                                  "register",
                                  index,
                                )}
                                value={entry.similarUndertakingKeysEvidence}
                                {...issueA11yWithDescription(
                                  registerIssueFieldId(
                                    index,
                                    "similar-undertaking-distinct-evidence",
                                  ),
                                  undertakingDistinctEvidenceHelpId,
                                )}
                                onChange={(event) =>
                                  updateRegisterEntry(index, {
                                    similarUndertakingKeysEvidence:
                                      event.target.value,
                                  })
                                }
                                placeholder="Ex. extrait du registre, organigramme ou note juridique datée"
                              />
                              <span
                                id={undertakingDistinctEvidenceHelpId}
                                className={helpClassName}
                              >
                                Indiquez une référence contrôlable et sa date.
                                L’outil conserve votre déclaration sans
                                authentifier cette preuve.
                              </span>
                            </label>
                          ) : null}
                          <label className={labelClassName}>
                            Valeur juridique de l’aide antérieure
                            <input
                              id={registerIssueFieldId(index, "amount")}
                              type="number"
                              min="0"
                              step="0.01"
                              inputMode="decimal"
                              className={inputClassName}
                              aria-label={dynamicControlAccessibleName(
                                "Valeur juridique de l’aide antérieure",
                                "register",
                                index,
                              )}
                              value={numberValue(entry.amount)}
                              {...issueA11yWithDescription(
                                registerIssueFieldId(index, "amount"),
                                amountHelpId,
                              )}
                              onChange={(event) =>
                                updateRegisterEntry(index, {
                                  amount: optionalNumber(event.target.value),
                                })
                              }
                            />
                            <span id={amountHelpId} className={helpClassName}>
                              Montant brut d’une subvention ou ESB communiqué
                              pour un autre instrument ; jamais le montant
                              nominal d’un prêt ou d’une garantie.
                            </span>
                          </label>
                          <label className={labelClassName}>
                            Date d’octroi juridique
                            <input
                              id={registerIssueFieldId(
                                index,
                                "legal-grant-date",
                              )}
                              type="date"
                              className={inputClassName}
                              aria-label={dynamicControlAccessibleName(
                                "Date d’octroi juridique",
                                "register",
                                index,
                              )}
                              value={entry.legalGrantDate}
                              {...issueA11y(
                                registerIssueFieldId(index, "legal-grant-date"),
                              )}
                              onChange={(event) =>
                                updateRegisterEntry(index, {
                                  legalGrantDate: event.target.value,
                                })
                              }
                            />
                          </label>
                          {registerCentralRegisterRequired[index] ? (
                            <div
                              role="group"
                              aria-labelledby={`site-aid-register-entry-${index + 1}-central-register-title`}
                              aria-describedby={centralRegisterHelpId}
                              className="rounded-xl border border-sky-200 bg-sky-50/60 p-4 dark:border-sky-900 dark:bg-sky-950/20 lg:col-span-3"
                            >
                              <p
                                id={`site-aid-register-entry-${index + 1}-central-register-title`}
                                className="m-0 text-xs font-black text-zinc-950 dark:text-white"
                              >
                                Registre central français — aide antérieure{" "}
                                {index + 1}
                              </p>
                              <p
                                id={centralRegisterHelpId}
                                className="mb-0 mt-1 text-[11px] leading-relaxed text-zinc-600 dark:text-zinc-300"
                              >
                                Les articles 6 des règlements général, SIEG et
                                agricole fixent le délai européen de 20 jours
                                ouvrables. Pour la mise en œuvre française et la
                                sphère qu’il vise, les articles 2 et 3 du décret
                                n° 2025-1361 organisent la transmission à la
                                Plateforme ; la publication reste distincte.
                                Vérifiez le jeu officiel aides_minimis sur
                                data.economie.gouv.fr. Le contrôle accepte
                                uniquement une URL de ce jeu contenant un
                                recordid, un recordid autonome exploitable, ou
                                une attestation structurée de l’autorité
                                (autorité, référence et date). L’identifiant
                                unique interne prévu par le décret n’est pas
                                public et l’outil n’authentifie aucune preuve.
                              </p>
                              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                                <label className={labelClassName}>
                                  Statut au registre central national
                                  <select
                                    id={registerIssueFieldId(
                                      index,
                                      "central-register-status",
                                    )}
                                    className={inputClassName}
                                    aria-label={dynamicControlAccessibleName(
                                      "Statut au registre central national",
                                      "register",
                                      index,
                                    )}
                                    value={
                                      entry.centralRegisterStatus ?? "unknown"
                                    }
                                    {...issueA11yWithDescription(
                                      registerIssueFieldId(
                                        index,
                                        "central-register-status",
                                      ),
                                      centralRegisterHelpId,
                                    )}
                                    onChange={(event) => {
                                      const centralRegisterStatus = event.target
                                        .value as SiteAidCentralRegisterStatus;
                                      updateRegisterEntry(index, {
                                        centralRegisterStatus,
                                        centralRegisterReference:
                                          centralRegisterStatus === "registered"
                                            ? (entry.centralRegisterReference ??
                                              "")
                                            : "",
                                      });
                                    }}
                                  >
                                    {centralRegisterStatusOptions.map(
                                      (option) => (
                                        <option
                                          key={option.value}
                                          value={option.value}
                                        >
                                          {option.label}
                                        </option>
                                      ),
                                    )}
                                  </select>
                                </label>
                                <label className={labelClassName}>
                                  Preuve du registre : URL aides_minimis avec
                                  recordid, recordid autonome ou attestation
                                  structurée
                                  <input
                                    id={registerIssueFieldId(
                                      index,
                                      "central-register-reference",
                                    )}
                                    className={`${inputClassName} disabled:cursor-not-allowed disabled:opacity-60`}
                                    aria-label={dynamicControlAccessibleName(
                                      "Preuve du registre : URL aides_minimis avec recordid, recordid autonome ou attestation structurée",
                                      "register",
                                      index,
                                    )}
                                    disabled={
                                      entry.centralRegisterStatus !==
                                      "registered"
                                    }
                                    value={entry.centralRegisterReference ?? ""}
                                    {...issueA11yWithDescription(
                                      registerIssueFieldId(
                                        index,
                                        "central-register-reference",
                                      ),
                                      centralRegisterHelpId,
                                    )}
                                    onChange={(event) =>
                                      updateRegisterEntry(index, {
                                        centralRegisterReference:
                                          event.target.value,
                                      })
                                    }
                                    placeholder="URL aides_minimis avec recordid, recordid autonome ou attestation structurée (autorité, référence, date)"
                                  />
                                </label>
                              </div>
                            </div>
                          ) : null}
                          <label className={labelClassName}>
                            Dépenses concernées
                            <input
                              id={registerIssueFieldId(index, "expenses")}
                              className={inputClassName}
                              aria-label={dynamicControlAccessibleName(
                                "Dépenses concernées",
                                "register",
                                index,
                              )}
                              value={entry.expenses}
                              {...issueA11y(
                                registerIssueFieldId(index, "expenses"),
                              )}
                              onChange={(event) =>
                                updateRegisterEntry(index, {
                                  expenses: event.target.value,
                                })
                              }
                            />
                          </label>
                          <label className={labelClassName}>
                            Même assiette ou facture ?
                            <select
                              id={registerIssueFieldId(index, "same-base")}
                              className={inputClassName}
                              aria-label={dynamicControlAccessibleName(
                                "Même assiette ou facture ?",
                                "register",
                                index,
                              )}
                              value={entry.sameBaseOrInvoice}
                              {...issueA11y(
                                registerIssueFieldId(index, "same-base"),
                              )}
                              onChange={(event) =>
                                updateRegisterEntry(index, {
                                  sameBaseOrInvoice: event.target
                                    .value as SiteAidTriState,
                                })
                              }
                            >
                              {triStateOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </label>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button
                  ref={registerAddButtonRef}
                  type="button"
                  onClick={addRegisterEntry}
                  className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-900 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                >
                  <Plus className="size-4" aria-hidden="true" />
                  Ajouter une aide antérieure
                </button>
              </fieldset>

              {hasDeMinimisBranch ? (
                <fieldset
                  id="site-aid-corporate-event-section"
                  tabIndex={-1}
                  aria-describedby="site-aid-corporate-event-help"
                  className="mt-5 rounded-xl border border-sky-200 bg-sky-50/50 p-4 dark:border-sky-900 dark:bg-sky-950/20 sm:p-5"
                >
                  <legend className="px-2 text-sm font-black text-zinc-950 dark:text-white">
                    4 bis. Fusion, acquisition ou scission sur la période de
                    minimis
                  </legend>
                  <p
                    id="site-aid-corporate-event-help"
                    className="mb-4 mt-0 text-xs leading-relaxed text-zinc-700 dark:text-zinc-300"
                  >
                    Ce contrôle global apparaît après le registre dès qu’une
                    aide courante ou antérieure est déclarée de minimis. En cas
                    de fusion ou d’acquisition, l’historique doit reprendre
                    toutes les aides antérieures des entreprises réunies. En cas
                    de scission, il faut attribuer l’aide à l’entreprise qui en
                    a bénéficié — normalement celle qui reprend les activités —
                    ou, si cela est impossible, la répartir proportionnellement
                    sur la base de la valeur comptable du capital des nouvelles
                    entreprises à la date effective de la scission. L’outil ne
                    reconstitue ni l’opération, ni l’allocation : chaque réponse
                    doit venir d’une pièce contrôlable.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className={labelClassName}>
                      Fusion, acquisition ou scission pertinente
                      <select
                        id={issueFieldIds.corporateEventOccurred}
                        className={inputClassName}
                        value={input.profile.deMinimisCorporateEventOccurred}
                        {...issueA11yWithDescription(
                          issueFieldIds.corporateEventOccurred,
                          "site-aid-corporate-event-help",
                        )}
                        onChange={(event) =>
                          updateCorporateEventOccurred(
                            event.target.value as SiteAidTriState,
                          )
                        }
                      >
                        {corporateEventOccurredOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className={labelClassName}>
                      Preuve de l’opération ou de son absence
                      <textarea
                        id={issueFieldIds.corporateEventEvidence}
                        className={inputClassName}
                        rows={3}
                        value={input.profile.deMinimisCorporateEventEvidence}
                        {...issueA11yWithDescription(
                          issueFieldIds.corporateEventEvidence,
                          "site-aid-corporate-event-help",
                        )}
                        onChange={(event) =>
                          updateProfile(
                            "deMinimisCorporateEventEvidence",
                            event.target.value,
                          )
                        }
                        placeholder="Registre, traité, procès-verbal, acte de scission ou attestation datée d’absence d’événement"
                      />
                    </label>
                    {input.profile.deMinimisCorporateEventOccurred === "yes" ? (
                      <>
                        <label className={labelClassName}>
                          Type d’événement
                          <select
                            id={issueFieldIds.corporateEventKind}
                            className={inputClassName}
                            value={input.profile.deMinimisCorporateEventKind}
                            {...issueA11yWithDescription(
                              issueFieldIds.corporateEventKind,
                              "site-aid-corporate-event-help",
                            )}
                            onChange={(event) =>
                              updateProfile(
                                "deMinimisCorporateEventKind",
                                event.target.value as SiteAidCorporateEventKind,
                              )
                            }
                          >
                            {corporateEventKindOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label className={labelClassName}>
                          Historique des aides ajusté après l’événement
                          <select
                            id={issueFieldIds.corporateAidHistoryAdjusted}
                            className={inputClassName}
                            value={
                              input.profile.deMinimisCorporateAidHistoryAdjusted
                            }
                            {...issueA11yWithDescription(
                              issueFieldIds.corporateAidHistoryAdjusted,
                              "site-aid-corporate-event-help",
                            )}
                            onChange={(event) =>
                              updateProfile(
                                "deMinimisCorporateAidHistoryAdjusted",
                                event.target.value as SiteAidTriState,
                              )
                            }
                          >
                            {corporateAidHistoryOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </label>
                      </>
                    ) : null}
                  </div>
                </fieldset>
              ) : null}

              {renderWizardPanelNavigation()}
            </section>
          ) : null}

          {activeStepId === "application" ? (
            <section
              id={wizardStepPanelId("application")}
              data-site-aid-wizard-panel="application"
              data-site-aid-application-preparation={
                SITE_AID_APPLICATION_PREPARATION_VERSION
              }
              aria-labelledby={wizardStepHeadingId("application")}
            >
              <h4
                id={wizardStepHeadingId("application")}
                tabIndex={-1}
                className="mb-4 mt-0 text-lg font-black text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 dark:text-white"
              >
                Étape 8 sur 9 — Préparer la candidature
              </h4>

              {renderStepErrorStatus("application")}

              <div
                id="site-aid-application-limit"
                className="mb-5 rounded-xl border border-amber-300 bg-amber-50 p-4 text-xs leading-relaxed text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100"
              >
                <p className="m-0 font-black">
                  Préparation opérationnelle, jamais promesse d’attribution
                </p>
                <p className="mb-0 mt-1">
                  Distinguez un droit d’une sélection, recopiez les objectifs et
                  critères publiés, puis vérifiez chaque pièce. Cette
                  préparation ne remplace ni le règlement de l’aide, ni la
                  plateforme officielle, ni la décision de l’autorité
                  compétente.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className={labelClassName}>
                  Mode d’attribution
                  <select
                    id={issueFieldIds.applicationAwardMode}
                    className={inputClassName}
                    value={application.awardMode}
                    {...issueA11yWithDescription(
                      issueFieldIds.applicationAwardMode,
                      "site-aid-application-limit",
                    )}
                    onChange={(event) =>
                      updateApplication(
                        "awardMode",
                        event.target.value as SiteAidApplicationAwardMode,
                      )
                    }
                  >
                    {applicationAwardModeOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
                <label className={labelClassName}>
                  Canal officiel de dépôt
                  <input
                    id={issueFieldIds.applicationSubmissionChannel}
                    className={inputClassName}
                    maxLength={20_000}
                    value={application.submissionChannel}
                    {...issueA11y(issueFieldIds.applicationSubmissionChannel)}
                    onChange={(event) =>
                      updateApplication("submissionChannel", event.target.value)
                    }
                    placeholder="Ex. portail de l’EPCI, formulaire officiel ou dépôt sur rendez-vous"
                  />
                </label>
                <label className={`${labelClassName} sm:col-span-2`}>
                  Objectifs publiés par le financeur
                  <textarea
                    id={issueFieldIds.applicationFunderObjectives}
                    className={inputClassName}
                    maxLength={20_000}
                    rows={3}
                    value={application.funderObjectives}
                    {...issueA11y(issueFieldIds.applicationFunderObjectives)}
                    onChange={(event) =>
                      updateApplication("funderObjectives", event.target.value)
                    }
                    placeholder="Recopiez ou résumez fidèlement les objectifs de la source officielle, avec sa date."
                  />
                </label>
                <label className={`${labelClassName} sm:col-span-2`}>
                  Critères de sélection ou conditions d’attribution
                  <textarea
                    id={issueFieldIds.applicationSelectionCriteria}
                    className={inputClassName}
                    maxLength={20_000}
                    rows={3}
                    value={application.selectionCriteria}
                    {...issueA11y(issueFieldIds.applicationSelectionCriteria)}
                    onChange={(event) =>
                      updateApplication("selectionCriteria", event.target.value)
                    }
                    placeholder="Décrivez les critères publiés, leur hiérarchie éventuelle et ce qui reste à confirmer."
                  />
                </label>
                <label className={labelClassName}>
                  Statut officiel de l’échéance
                  <select
                    id={issueFieldIds.applicationDeadlineStatus}
                    className={inputClassName}
                    value={application.deadlineStatus}
                    {...issueA11y(issueFieldIds.applicationDeadlineStatus)}
                    onChange={(event) =>
                      updateApplication(
                        "deadlineStatus",
                        event.target.value as SiteAidApplicationDeadlineStatus,
                      )
                    }
                  >
                    {applicationDeadlineStatusOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
                {application.deadlineStatus === "exact-date" ? (
                  <>
                    <label className={labelClassName}>
                      Date limite officielle
                      <input
                        id={issueFieldIds.applicationDeadline}
                        type="date"
                        className={inputClassName}
                        value={application.deadline}
                        {...issueA11y(issueFieldIds.applicationDeadline)}
                        onChange={(event) =>
                          updateApplication("deadline", event.target.value)
                        }
                      />
                    </label>
                    <label className={labelClassName}>
                      Heure limite officielle — si publiée
                      <input
                        id={issueFieldIds.applicationDeadlineTime}
                        type="time"
                        className={inputClassName}
                        value={application.deadlineTime}
                        {...issueA11yWithDescription(
                          issueFieldIds.applicationDeadlineTime,
                          "site-aid-application-deadline-time-help",
                        )}
                        onChange={(event) =>
                          updateApplication("deadlineTime", event.target.value)
                        }
                      />
                      <span
                        id="site-aid-application-deadline-time-help"
                        className={helpClassName}
                      >
                        Laissez vide seulement si le règlement ne précise aucune
                        heure. Le jour même, l’analyse restera alors suspendue.
                      </span>
                    </label>
                    <label className={labelClassName}>
                      Fuseau officiel du guichet
                      <input
                        id={issueFieldIds.applicationDeadlineTimeZone}
                        className={inputClassName}
                        maxLength={100}
                        value={application.deadlineTimeZone}
                        {...issueA11yWithDescription(
                          issueFieldIds.applicationDeadlineTimeZone,
                          "site-aid-application-deadline-time-zone-help",
                        )}
                        onChange={(event) =>
                          updateApplication(
                            "deadlineTimeZone",
                            event.target.value,
                          )
                        }
                        placeholder="Europe/Paris"
                      />
                      <span
                        id="site-aid-application-deadline-time-zone-help"
                        className={helpClassName}
                      >
                        Renseignez le fuseau IANA du guichet même si aucune
                        heure limite n’est publiée. Le fuseau du navigateur ne
                        le remplace jamais. Avec une heure, toute heure ambiguë
                        ou inexistante lors d’un changement d’heure suspend
                        l’analyse.
                      </span>
                    </label>
                  </>
                ) : application.deadlineStatus === "unpublished" ? (
                  <p
                    id={issueFieldIds.applicationDeadline}
                    tabIndex={-1}
                    className="m-0 rounded-lg border border-amber-300 bg-amber-50 p-3 text-xs font-semibold leading-relaxed text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100 sm:col-span-2"
                  >
                    Aucune date exploitable : obtenez une date exacte ou la
                    confirmation officielle d’un guichet permanent. Le dossier
                    reste incomplet.
                  </p>
                ) : null}
                {application.deadlineStatus !== "unpublished" ? (
                  <>
                    <label className={`${labelClassName} sm:col-span-2`}>
                      Référence officielle de l’échéance
                      <input
                        id={issueFieldIds.applicationDeadlineOfficialReference}
                        className={inputClassName}
                        maxLength={20_000}
                        value={application.deadlineOfficialReference}
                        {...issueA11yWithDescription(
                          issueFieldIds.applicationDeadlineOfficialReference,
                          "site-aid-application-deadline-official-reference-help",
                        )}
                        onChange={(event) =>
                          updateApplication(
                            "deadlineOfficialReference",
                            event.target.value,
                          )
                        }
                        placeholder="URL, article du règlement ou réponse écrite identifiable"
                      />
                      <span
                        id="site-aid-application-deadline-official-reference-help"
                        className={helpClassName}
                      >
                        Indiquez une URL HTTPS publique et précise, sans
                        identifiants ni port explicite, une référence formelle
                        mêlant lettres et chiffres, ou une réponse/document
                        assez qualifié pour être retrouvé. L’outil contrôle
                        seulement la plausibilité de la forme : il n’authentifie
                        ni la source ni son contenu.
                      </span>
                    </label>
                    <label className={labelClassName}>
                      Référence vérifiée le
                      <input
                        id={issueFieldIds.applicationDeadlineVerificationDate}
                        type="date"
                        max={editableLocalDate}
                        className={inputClassName}
                        value={application.deadlineVerificationDate}
                        {...issueA11y(
                          issueFieldIds.applicationDeadlineVerificationDate,
                        )}
                        onChange={(event) =>
                          updateApplication(
                            "deadlineVerificationDate",
                            event.target.value,
                          )
                        }
                      />
                    </label>
                  </>
                ) : null}
                <div
                  id={issueFieldIds.applicationDeadlineEvaluationInstant}
                  tabIndex={-1}
                  className="rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-xs leading-relaxed text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                >
                  <strong>Dernière évaluation absolue :</strong>{" "}
                  {application.deadlineEvaluationInstant || "pas encore lancée"}
                  {application.deadlineEvaluationTimeZone
                    ? ` · navigateur ${application.deadlineEvaluationTimeZone}`
                    : ""}
                  . Cet instant est renouvelé par « Analyser le dossier » et
                  conservé dans le brouillon.
                </div>
                <fieldset className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-800 sm:col-span-2">
                  <legend className="px-2 text-xs font-black text-zinc-900 dark:text-zinc-100">
                    Suivi après dépôt — facultatif tant qu’aucun dépôt n’a eu
                    lieu
                  </legend>
                  <p className="mb-3 mt-0 text-[11px] leading-relaxed text-zinc-600 dark:text-zinc-300">
                    Après l’envoi, consignez la version réellement transmise,
                    son accusé et son statut. Un brouillon vierge ou « pas
                    encore déposé » n’invente aucune démarche.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className={labelClassName}>
                      Statut du dépôt
                      <select
                        id={issueFieldIds.applicationSubmissionStatus}
                        className={inputClassName}
                        value={application.submissionStatus}
                        {...issueA11y(
                          issueFieldIds.applicationSubmissionStatus,
                        )}
                        onChange={(event) =>
                          updateApplicationSubmissionStatus(
                            event.target
                              .value as SiteAidApplicationSubmissionStatus,
                          )
                        }
                      >
                        {applicationSubmissionStatusOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </label>
                    {application.submissionStatus !== "unknown" &&
                    application.submissionStatus !== "not-submitted" ? (
                      <>
                        <label className={labelClassName}>
                          Date du dépôt réellement effectué
                          <input
                            id={issueFieldIds.applicationSubmissionDate}
                            type="date"
                            max={
                              application.deadlineStatus === "exact-date" &&
                              isValidIsoDate(application.deadline) &&
                              application.deadline < editableLocalDate
                                ? application.deadline
                                : editableLocalDate
                            }
                            className={inputClassName}
                            value={application.submissionDate}
                            {...issueA11y(
                              issueFieldIds.applicationSubmissionDate,
                            )}
                            onChange={(event) =>
                              updateApplication(
                                "submissionDate",
                                event.target.value,
                              )
                            }
                          />
                        </label>
                        <label className={`${labelClassName} sm:col-span-2`}>
                          Accusé ou référence de dépôt
                          <input
                            id={issueFieldIds.applicationSubmissionReceipt}
                            className={inputClassName}
                            maxLength={2_000}
                            value={application.submissionReceiptReference}
                            {...issueA11yWithDescription(
                              issueFieldIds.applicationSubmissionReceipt,
                              "site-aid-application-submission-receipt-reference-help",
                            )}
                            onChange={(event) =>
                              updateApplication(
                                "submissionReceiptReference",
                                event.target.value,
                              )
                            }
                            placeholder="Ex. accusé horodaté, numéro de dossier ou courriel officiel"
                          />
                          <span
                            id="site-aid-application-submission-receipt-reference-help"
                            className={helpClassName}
                          >
                            Consignez un numéro qualifié, une URL HTTPS publique
                            et précise sans identifiants ni port explicite, un
                            courriel traçable sur un domaine public ou une
                            référence formelle. L’outil contrôle seulement la
                            plausibilité de la forme et n’authentifie pas
                            l’accusé.
                          </span>
                        </label>
                        <label className={`${labelClassName} sm:col-span-2`}>
                          Le dossier transmis est-il identique au dossier
                          préparé ici ?
                          <select
                            id={issueFieldIds.applicationSubmittedPackageCheck}
                            className={inputClassName}
                            value={
                              application.submittedPackageMatchesPreparedPackage
                            }
                            {...issueA11y(
                              issueFieldIds.applicationSubmittedPackageCheck,
                            )}
                            onChange={(event) =>
                              updateApplication(
                                "submittedPackageMatchesPreparedPackage",
                                event.target.value as SiteAidTriState,
                              )
                            }
                          >
                            {applicationSubmittedPackageCheckOptions.map(
                              (option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ),
                            )}
                          </select>
                        </label>
                      </>
                    ) : null}
                  </div>
                </fieldset>
                <label className={labelClassName}>
                  Temps de préparation estimé
                  <input
                    id={issueFieldIds.applicationPreparationTime}
                    type="number"
                    min="0.25"
                    max="1000000"
                    step="0.25"
                    inputMode="decimal"
                    className={inputClassName}
                    value={numberValue(application.preparationTimeHours)}
                    {...issueA11yWithDescription(
                      issueFieldIds.applicationPreparationTime,
                      "site-aid-application-preparation-time-help",
                    )}
                    onChange={(event) =>
                      updateApplication(
                        "preparationTimeHours",
                        optionalNumber(event.target.value),
                      )
                    }
                  />
                  <span
                    id="site-aid-application-preparation-time-help"
                    className={helpClassName}
                  >
                    Nombre d’heures incluant collecte, relecture et dépôt.
                  </span>
                </label>
                <label className={labelClassName}>
                  Responsable de la relecture finale
                  <input
                    id={issueFieldIds.applicationFinalReviewer}
                    className={inputClassName}
                    maxLength={20_000}
                    value={application.finalReviewer}
                    {...issueA11y(issueFieldIds.applicationFinalReviewer)}
                    onChange={(event) =>
                      updateApplication("finalReviewer", event.target.value)
                    }
                    placeholder="Nom ou rôle responsable"
                  />
                </label>
                <label className={labelClassName}>
                  Validation finale tracée
                  <select
                    id={issueFieldIds.applicationFinalValidation}
                    className={inputClassName}
                    value={application.finalValidationStatus}
                    {...issueA11y(issueFieldIds.applicationFinalValidation)}
                    onChange={(event) =>
                      updateApplication(
                        "finalValidationStatus",
                        event.target.value as SiteAidTriState,
                      )
                    }
                  >
                    {applicationFinalValidationOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
                <label className={`${labelClassName} sm:col-span-2`}>
                  Livrables proposés
                  <textarea
                    id={issueFieldIds.applicationDeliverables}
                    className={inputClassName}
                    maxLength={20_000}
                    rows={3}
                    value={application.deliverables}
                    {...issueA11y(issueFieldIds.applicationDeliverables)}
                    onChange={(event) =>
                      updateApplication("deliverables", event.target.value)
                    }
                    placeholder="Reliez chaque livrable au besoin, sans promettre son acceptation par le financeur."
                  />
                </label>
                <label className={`${labelClassName} sm:col-span-2`}>
                  Résultats attendus et mode de constat
                  <textarea
                    id={issueFieldIds.applicationExpectedResults}
                    className={inputClassName}
                    maxLength={20_000}
                    rows={3}
                    value={application.expectedResults}
                    {...issueA11y(issueFieldIds.applicationExpectedResults)}
                    onChange={(event) =>
                      updateApplication("expectedResults", event.target.value)
                    }
                    placeholder="Décrivez un effet attendu et la donnée qui permettra de le constater."
                  />
                </label>
                <label className={`${labelClassName} sm:col-span-2`}>
                  Calendrier prévisionnel
                  <textarea
                    id={issueFieldIds.applicationSchedule}
                    className={inputClassName}
                    maxLength={20_000}
                    rows={3}
                    value={application.schedule}
                    {...issueA11y(issueFieldIds.applicationSchedule)}
                    onChange={(event) =>
                      updateApplication("schedule", event.target.value)
                    }
                    placeholder="Jalons, responsables et dépendances, en respectant l’ordre des actes publié."
                  />
                </label>
                <label className={`${labelClassName} sm:col-span-2`}>
                  Justification budgétaire
                  <textarea
                    id={issueFieldIds.applicationBudgetJustification}
                    className={inputClassName}
                    maxLength={20_000}
                    rows={3}
                    value={application.budgetJustification}
                    {...issueA11y(issueFieldIds.applicationBudgetJustification)}
                    onChange={(event) =>
                      updateApplication(
                        "budgetJustification",
                        event.target.value,
                      )
                    }
                    placeholder="Expliquez le besoin de chaque coût et son lien avec les livrables ; l’outil ne note pas cette justification."
                  />
                </label>
              </div>

              {application.awardMode === "selection" ? (
                <fieldset
                  id="site-aid-application-criterion-section"
                  tabIndex={-1}
                  aria-describedby="site-aid-application-criterion-help site-aid-application-criterion-limit"
                  className="mt-5 rounded-xl border border-zinc-200 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-zinc-900/30 sm:p-5"
                >
                  <legend className="px-2 text-sm font-black text-zinc-950 dark:text-white">
                    Matrice critère publié → réponse → preuve
                  </legend>
                  <p
                    id="site-aid-application-criterion-help"
                    className="mb-0 mt-0 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300"
                  >
                    Recopiez chaque critère publié, préparez une réponse
                    déclarative, associez une preuve à confirmer et un
                    responsable. La limite de mots est facultative : ne la
                    saisissez que si elle est publiée. L’outil ne note jamais la
                    qualité de la réponse.
                  </p>
                  <p
                    id="site-aid-application-criterion-limit"
                    className="mb-0 mt-1 text-[11px] text-zinc-500 dark:text-zinc-400"
                  >
                    {application.criteria.length} sur{" "}
                    {SITE_AID_DRAFT_MAX_APPLICATION_CRITERIA} critères utilisés.
                  </p>
                  <div className="mt-4 space-y-4">
                    {application.criteria.map((criterion, index) => {
                      const rowId =
                        applicationCriterionIds[index] ??
                        `site-aid-application-criterion-row-${index + 1}`;
                      const titleId = `${rowId}-title`;
                      return (
                        <div
                          key={rowId}
                          role="group"
                          aria-labelledby={titleId}
                          className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
                        >
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <p
                              id={titleId}
                              className="m-0 text-sm font-black text-zinc-950 dark:text-white"
                            >
                              Critère {index + 1}
                            </p>
                            <button
                              type="button"
                              onClick={() => removeApplicationCriterion(index)}
                              aria-label={`Supprimer le critère ${index + 1}`}
                              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-rose-300 bg-white px-3 py-2 text-xs font-black text-rose-800 hover:bg-rose-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 dark:border-rose-800 dark:bg-zinc-950 dark:text-rose-200"
                            >
                              <Trash2 className="size-4" aria-hidden="true" />
                              Supprimer
                            </button>
                          </div>
                          <div className="mt-3 grid gap-4 sm:grid-cols-2">
                            <label
                              className={`${labelClassName} sm:col-span-2`}
                            >
                              Critère publié
                              <textarea
                                ref={(node) => {
                                  if (node) {
                                    applicationCriterionFirstInputRefs.current.set(
                                      rowId,
                                      node,
                                    );
                                  } else {
                                    applicationCriterionFirstInputRefs.current.delete(
                                      rowId,
                                    );
                                  }
                                }}
                                id={applicationCriterionIssueFieldId(
                                  index,
                                  "published-criterion",
                                )}
                                className={inputClassName}
                                maxLength={20_000}
                                rows={2}
                                aria-label={dynamicControlAccessibleName(
                                  "Critère publié",
                                  "application-criterion",
                                  index,
                                )}
                                value={criterion.publishedCriterion}
                                {...issueA11y(
                                  applicationCriterionIssueFieldId(
                                    index,
                                    "published-criterion",
                                  ),
                                )}
                                onChange={(event) =>
                                  updateApplicationCriterion(index, {
                                    publishedCriterion: event.target.value,
                                  })
                                }
                              />
                            </label>
                            <label
                              className={`${labelClassName} sm:col-span-2`}
                            >
                              Réponse du projet
                              <textarea
                                id={applicationCriterionIssueFieldId(
                                  index,
                                  "project-response",
                                )}
                                className={inputClassName}
                                maxLength={20_000}
                                rows={3}
                                aria-label={dynamicControlAccessibleName(
                                  "Réponse du projet",
                                  "application-criterion",
                                  index,
                                )}
                                value={criterion.projectResponse}
                                {...issueA11yWithDescription(
                                  applicationCriterionIssueFieldId(
                                    index,
                                    "project-response",
                                  ),
                                  applicationCriterionWordCountId(index),
                                )}
                                onChange={(event) =>
                                  updateApplicationCriterion(index, {
                                    projectResponse: event.target.value,
                                  })
                                }
                              />
                              <span
                                id={applicationCriterionWordCountId(index)}
                                className={helpClassName}
                              >
                                {countSiteAidApplicationWords(
                                  criterion.projectResponse,
                                )}{" "}
                                mots saisis
                                {criterion.wordLimit === undefined
                                  ? ". Aucune limite officielle renseignée."
                                  : ` sur ${criterion.wordLimit} autorisés.`}{" "}
                                Comptage indicatif de l’outil : la plateforme
                                officielle reste la référence.
                              </span>
                            </label>
                            <label className={labelClassName}>
                              Preuve associée — à confirmer
                              <input
                                id={applicationCriterionIssueFieldId(
                                  index,
                                  "evidence",
                                )}
                                className={inputClassName}
                                maxLength={20_000}
                                aria-label={dynamicControlAccessibleName(
                                  "Preuve associée",
                                  "application-criterion",
                                  index,
                                )}
                                value={criterion.evidence}
                                {...issueA11y(
                                  applicationCriterionIssueFieldId(
                                    index,
                                    "evidence",
                                  ),
                                )}
                                onChange={(event) =>
                                  updateApplicationCriterion(index, {
                                    evidence: event.target.value,
                                  })
                                }
                              />
                            </label>
                            <label className={labelClassName}>
                              Responsable
                              <input
                                id={applicationCriterionIssueFieldId(
                                  index,
                                  "owner",
                                )}
                                className={inputClassName}
                                maxLength={20_000}
                                aria-label={dynamicControlAccessibleName(
                                  "Responsable",
                                  "application-criterion",
                                  index,
                                )}
                                value={criterion.owner}
                                {...issueA11y(
                                  applicationCriterionIssueFieldId(
                                    index,
                                    "owner",
                                  ),
                                )}
                                onChange={(event) =>
                                  updateApplicationCriterion(index, {
                                    owner: event.target.value,
                                  })
                                }
                              />
                            </label>
                            <label className={labelClassName}>
                              Limite de mots publiée — si elle existe
                              <input
                                id={applicationCriterionIssueFieldId(
                                  index,
                                  "word-limit",
                                )}
                                type="number"
                                min="1"
                                max="100000"
                                step="1"
                                inputMode="numeric"
                                className={inputClassName}
                                aria-label={dynamicControlAccessibleName(
                                  "Limite de mots publiée",
                                  "application-criterion",
                                  index,
                                )}
                                value={numberValue(criterion.wordLimit)}
                                {...issueA11y(
                                  applicationCriterionIssueFieldId(
                                    index,
                                    "word-limit",
                                  ),
                                )}
                                onChange={(event) =>
                                  updateApplicationCriterion(index, {
                                    wordLimit: optionalNumber(
                                      event.target.value,
                                    ),
                                  })
                                }
                              />
                            </label>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <button
                    ref={applicationCriterionAddButtonRef}
                    type="button"
                    onClick={addApplicationCriterion}
                    disabled={
                      application.criteria.length >=
                      SITE_AID_DRAFT_MAX_APPLICATION_CRITERIA
                    }
                    aria-describedby="site-aid-application-criterion-limit"
                    className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-900 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 disabled:cursor-not-allowed disabled:opacity-60 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                  >
                    <Plus className="size-4" aria-hidden="true" />
                    Ajouter un critère publié
                  </button>
                </fieldset>
              ) : (
                <p
                  id="site-aid-application-criterion-section"
                  tabIndex={-1}
                  className="mb-0 mt-5 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm font-bold text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-200"
                >
                  {application.awardMode === "right"
                    ? "Sans objet — aide de droit."
                    : "Matrice masquée tant que le mode d’attribution reste à confirmer."}{" "}
                  Les critères éventuellement déjà saisis sont conservés
                  silencieusement et réapparaîtront si vous revenez au mode «
                  sélection ».
                </p>
              )}

              <fieldset
                id="site-aid-application-document-section"
                tabIndex={-1}
                aria-describedby="site-aid-application-document-help site-aid-application-document-limit"
                className="mt-5 rounded-xl border border-zinc-200 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-zinc-900/30 sm:p-5"
              >
                <legend className="px-2 text-sm font-black text-zinc-950 dark:text-white">
                  Liste des pièces à préparer
                </legend>
                <p
                  id="site-aid-application-document-help"
                  className="mb-0 mt-0 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300"
                >
                  Pour chaque pièce, confirmez le statut, le responsable, le
                  format, la signature et l’échéance. Une valeur inconnue reste
                  explicitement « À confirmer ».
                </p>
                <p
                  id="site-aid-application-document-limit"
                  className="mb-0 mt-1 text-[11px] text-zinc-500 dark:text-zinc-400"
                >
                  {application.documents.length} sur{" "}
                  {SITE_AID_DRAFT_MAX_APPLICATION_DOCUMENTS} pièces utilisées.
                </p>

                <div className="mt-4 space-y-4">
                  {application.documents.map((document, index) => {
                    const rowId =
                      applicationDocumentIds[index] ??
                      `site-aid-application-document-row-${index + 1}`;
                    const titleId = `${rowId}-title`;
                    return (
                      <div
                        key={rowId}
                        role="group"
                        aria-labelledby={titleId}
                        className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
                      >
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                          <p
                            id={titleId}
                            className="m-0 text-sm font-black text-zinc-950 dark:text-white"
                          >
                            Pièce {index + 1}
                          </p>
                          <button
                            type="button"
                            onClick={() => removeApplicationDocument(index)}
                            aria-label={`${
                              application.documents.length === 1
                                ? "Vider"
                                : "Supprimer"
                            } la pièce ${index + 1}`}
                            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-rose-300 bg-white px-3 py-2 text-xs font-black text-rose-800 hover:bg-rose-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 dark:border-rose-800 dark:bg-zinc-950 dark:text-rose-200"
                          >
                            <Trash2 className="size-4" aria-hidden="true" />
                            {application.documents.length === 1
                              ? "Vider"
                              : "Supprimer"}
                          </button>
                        </div>
                        <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                          <label className={labelClassName}>
                            Nom de la pièce
                            <input
                              ref={(node) => {
                                if (node) {
                                  applicationDocumentFirstInputRefs.current.set(
                                    rowId,
                                    node,
                                  );
                                } else {
                                  applicationDocumentFirstInputRefs.current.delete(
                                    rowId,
                                  );
                                }
                              }}
                              id={applicationDocumentIssueFieldId(
                                index,
                                "label",
                              )}
                              className={inputClassName}
                              maxLength={20_000}
                              aria-label={dynamicControlAccessibleName(
                                "Nom de la pièce",
                                "application-document",
                                index,
                              )}
                              value={document.label}
                              {...issueA11y(
                                applicationDocumentIssueFieldId(index, "label"),
                              )}
                              onChange={(event) =>
                                updateApplicationDocument(index, {
                                  label: event.target.value,
                                })
                              }
                            />
                          </label>
                          <label className={labelClassName}>
                            Statut de préparation
                            <select
                              id={applicationDocumentIssueFieldId(
                                index,
                                "status",
                              )}
                              className={inputClassName}
                              aria-label={dynamicControlAccessibleName(
                                "Statut de préparation",
                                "application-document",
                                index,
                              )}
                              value={document.status}
                              {...issueA11y(
                                applicationDocumentIssueFieldId(
                                  index,
                                  "status",
                                ),
                              )}
                              onChange={(event) =>
                                updateApplicationDocument(index, {
                                  status: event.target
                                    .value as SiteAidApplicationDocumentStatus,
                                })
                              }
                            >
                              {applicationDocumentStatusOptions.map(
                                (option) => (
                                  <option
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </option>
                                ),
                              )}
                            </select>
                          </label>
                          {document.status !== "not-applicable" ? (
                            <>
                              <label className={labelClassName}>
                                Responsable
                                <input
                                  id={applicationDocumentIssueFieldId(
                                    index,
                                    "owner",
                                  )}
                                  className={inputClassName}
                                  maxLength={20_000}
                                  aria-label={dynamicControlAccessibleName(
                                    "Responsable",
                                    "application-document",
                                    index,
                                  )}
                                  value={document.owner}
                                  {...issueA11y(
                                    applicationDocumentIssueFieldId(
                                      index,
                                      "owner",
                                    ),
                                  )}
                                  onChange={(event) =>
                                    updateApplicationDocument(index, {
                                      owner: event.target.value,
                                    })
                                  }
                                />
                              </label>
                              <label className={labelClassName}>
                                Format attendu
                                <input
                                  id={applicationDocumentIssueFieldId(
                                    index,
                                    "format",
                                  )}
                                  className={inputClassName}
                                  maxLength={20_000}
                                  aria-label={dynamicControlAccessibleName(
                                    "Format attendu",
                                    "application-document",
                                    index,
                                  )}
                                  value={document.format}
                                  {...issueA11y(
                                    applicationDocumentIssueFieldId(
                                      index,
                                      "format",
                                    ),
                                  )}
                                  onChange={(event) =>
                                    updateApplicationDocument(index, {
                                      format: event.target.value,
                                    })
                                  }
                                  placeholder="Ex. PDF, original signé"
                                />
                              </label>
                              <label className={labelClassName}>
                                Signature
                                <select
                                  id={applicationDocumentIssueFieldId(
                                    index,
                                    "signature",
                                  )}
                                  className={inputClassName}
                                  aria-label={dynamicControlAccessibleName(
                                    "Signature",
                                    "application-document",
                                    index,
                                  )}
                                  value={document.signatureStatus}
                                  {...issueA11y(
                                    applicationDocumentIssueFieldId(
                                      index,
                                      "signature",
                                    ),
                                  )}
                                  onChange={(event) =>
                                    updateApplicationDocument(index, {
                                      signatureStatus: event.target
                                        .value as SiteAidApplicationSignatureStatus,
                                    })
                                  }
                                >
                                  {applicationSignatureStatusOptions.map(
                                    (option) => (
                                      <option
                                        key={option.value}
                                        value={option.value}
                                      >
                                        {option.label}
                                      </option>
                                    ),
                                  )}
                                </select>
                              </label>
                              <label className={labelClassName}>
                                Échéance de préparation
                                <input
                                  id={applicationDocumentIssueFieldId(
                                    index,
                                    "deadline",
                                  )}
                                  type="date"
                                  className={inputClassName}
                                  aria-label={dynamicControlAccessibleName(
                                    "Échéance de préparation",
                                    "application-document",
                                    index,
                                  )}
                                  value={document.deadline}
                                  {...issueA11y(
                                    applicationDocumentIssueFieldId(
                                      index,
                                      "deadline",
                                    ),
                                  )}
                                  onChange={(event) =>
                                    updateApplicationDocument(index, {
                                      deadline: event.target.value,
                                    })
                                  }
                                />
                              </label>
                            </>
                          ) : null}
                          {document.status === "not-applicable" ? (
                            <label
                              className={`${labelClassName} sm:col-span-2 lg:col-span-3`}
                            >
                              Justification obligatoire de la non-applicabilité
                              <textarea
                                id={applicationDocumentIssueFieldId(
                                  index,
                                  "not-applicable-justification",
                                )}
                                className={inputClassName}
                                maxLength={20_000}
                                rows={3}
                                aria-label={dynamicControlAccessibleName(
                                  "Justification obligatoire de la non-applicabilité",
                                  "application-document",
                                  index,
                                )}
                                value={document.notApplicableJustification}
                                {...issueA11y(
                                  applicationDocumentIssueFieldId(
                                    index,
                                    "not-applicable-justification",
                                  ),
                                )}
                                onChange={(event) =>
                                  updateApplicationDocument(index, {
                                    notApplicableJustification:
                                      event.target.value,
                                  })
                                }
                                placeholder="Citez la règle ou la réponse officielle qui rend cette pièce non applicable au projet."
                              />
                            </label>
                          ) : null}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button
                  ref={applicationDocumentAddButtonRef}
                  type="button"
                  onClick={addApplicationDocument}
                  disabled={
                    application.documents.length >=
                    SITE_AID_DRAFT_MAX_APPLICATION_DOCUMENTS
                  }
                  aria-describedby="site-aid-application-document-limit"
                  className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-900 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 disabled:cursor-not-allowed disabled:opacity-60 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                >
                  <Plus className="size-4" aria-hidden="true" />
                  Ajouter une pièce
                </button>
              </fieldset>

              {renderWizardPanelNavigation()}
            </section>
          ) : null}

          {activeStepId === "review" ? (
            <section
              id={wizardStepPanelId("review")}
              data-site-aid-wizard-panel="review"
              aria-labelledby={wizardStepHeadingId("review")}
            >
              <h4
                id={wizardStepHeadingId("review")}
                tabIndex={-1}
                className="mb-4 mt-0 text-lg font-black text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 dark:text-white"
              >
                Étape 9 sur 9 — Vérifier vos réponses et analyser
              </h4>

              <p className="mb-5 mt-0 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                Relisez les faits, les preuves, la préparation de candidature et
                les valeurs manquantes avant l’analyse. Les vues reprennent
                chaque ligne dynamique sans prétendre résumer chaque caractère
                dans une phrase.
              </p>

              <div className="mb-5 space-y-4" data-site-aid-review>
                <article
                  id="site-aid-review-profile"
                  className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50"
                >
                  <h5 className="m-0 text-sm font-black">
                    1. Profil et source
                  </h5>
                  <div className="mt-4">
                    <ReviewDataList
                      items={[
                        {
                          label: "Référence interne",
                          value: reviewText(input.profile.reference),
                        },
                        {
                          label: "Date de vérification",
                          value: reviewText(input.profile.verificationDate),
                        },
                        {
                          label: "Territoire de l’établissement",
                          value: reviewText(input.profile.territory),
                        },
                        {
                          label:
                            "Applicabilité territoriale UE déclarée — non authentifiée",
                          value: reviewOptionLabel(
                            euTerritorialStatusOptions,
                            input.profile.deMinimisEuTerritorialStatus ??
                              "unknown",
                          ),
                        },
                        {
                          label:
                            "Source/autorité et référence territoriales déclarées — non authentifiées",
                          value: reviewText(
                            input.profile.deMinimisEuTerritorialEvidence ?? "",
                          ),
                        },
                        {
                          label: "Date structurée de la preuve territoriale",
                          value: reviewText(
                            input.profile.deMinimisEuTerritorialEvidenceDate ??
                              "",
                          ),
                        },
                        {
                          label: "Activité et clientèle",
                          value: reviewText(input.profile.activity),
                        },
                        {
                          label: "Âge de l’entreprise",
                          value: reviewNumber(
                            input.profile.businessAgeMonths,
                            " mois",
                          ),
                        },
                        {
                          label: "Effectif",
                          value: reviewNumber(input.profile.employeeCount),
                        },
                        {
                          label: "Chiffre d’affaires annuel HT",
                          value: reviewMoney(input.profile.annualRevenueExVat),
                        },
                        {
                          label: "Forme ou statut",
                          value: reviewText(input.profile.legalStatus),
                        },
                        {
                          label: "Problème métier",
                          value: reviewText(input.profile.businessNeed),
                        },
                        {
                          label: "Indicateur de réussite",
                          value: reviewText(input.profile.successIndicator),
                        },
                        {
                          label: "Responsable de la décision",
                          value: reviewText(input.profile.decisionOwner),
                        },
                        {
                          label: "Organisme officiel",
                          value: reviewText(input.authority.name),
                        },
                        {
                          label: "URL officielle directe",
                          value: reviewText(input.authority.officialUrl),
                        },
                        {
                          label: "Date de consultation",
                          value: reviewText(input.authority.consultationDate),
                        },
                        {
                          label: "Échéances et règle de modification",
                          value: reviewText(
                            input.authority.scheduleAndAmendmentEvidence,
                          ),
                        },
                        {
                          label: "Pièce post-attribution vérifiée",
                          value: reviewOptionLabel(
                            postAwardEvidenceOptions,
                            input.authority.postAwardEvidenceVerified,
                          ),
                        },
                        {
                          label: "Obligations après attribution et versement",
                          value: reviewText(
                            input.authority.postAwardObligationsEvidence,
                          ),
                        },
                      ]}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => editFromReview("profile")}
                    className={reviewEditButtonClassName}
                  >
                    Modifier le profil et la source
                  </button>
                </article>

                <article
                  id="site-aid-review-quote"
                  className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50"
                >
                  <h5 className="m-0 text-sm font-black">
                    2. Devis ligne par ligne
                  </h5>
                  <div
                    className="mt-4 space-y-3 md:hidden"
                    data-site-aid-review-quote-cards
                  >
                    {input.quoteLines.map((line, index) => {
                      const titleId = `site-aid-review-quote-card-${index + 1}-title`;
                      return (
                        <section
                          key={quoteLineIds[index] ?? index}
                          aria-labelledby={titleId}
                          className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950"
                        >
                          <h6
                            id={titleId}
                            className="mb-3 mt-0 text-xs font-black"
                          >
                            Ligne {index + 1}
                          </h6>
                          <ReviewDataList
                            items={[
                              {
                                label: "Libellé",
                                value: reviewText(line.label),
                              },
                              {
                                label: "Montant HT",
                                value: reviewMoney(line.amountExVat),
                              },
                              {
                                label: "TVA",
                                value: reviewNumber(line.vatRatePercent, " %"),
                              },
                              {
                                label: "TVA déductible",
                                value: reviewDeductibleVat(
                                  line.deductibleVatFraction,
                                ),
                              },
                              {
                                label: "Admissibilité",
                                value: reviewOptionLabel(
                                  triStateOptions,
                                  line.eligibility,
                                ),
                              },
                              {
                                label: "Preuve",
                                value: reviewText(line.evidence),
                              },
                            ]}
                          />
                        </section>
                      );
                    })}
                  </div>
                  <table
                    className="mt-4 hidden w-full table-fixed border-collapse text-left text-xs [overflow-wrap:anywhere] md:table"
                    data-site-aid-review-quote-table
                  >
                    <caption className="sr-only">
                      Toutes les données des lignes du devis
                    </caption>
                    <thead>
                      <tr>
                        {[
                          "Ligne",
                          "Libellé",
                          "Montant HT",
                          "TVA",
                          "TVA déductible",
                          "Admissibilité",
                          "Preuve",
                        ].map((heading) => (
                          <th
                            key={heading}
                            scope="col"
                            className="border-b border-zinc-300 p-2 font-black dark:border-zinc-700"
                          >
                            {heading}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {input.quoteLines.map((line, index) => (
                        <tr key={quoteLineIds[index] ?? index}>
                          <th
                            scope="row"
                            className="border-b border-zinc-200 p-2 dark:border-zinc-800"
                          >
                            {index + 1}
                          </th>
                          <td className="border-b border-zinc-200 p-2 dark:border-zinc-800">
                            {reviewText(line.label)}
                          </td>
                          <td className="border-b border-zinc-200 p-2 dark:border-zinc-800">
                            {reviewMoney(line.amountExVat)}
                          </td>
                          <td className="border-b border-zinc-200 p-2 dark:border-zinc-800">
                            {reviewNumber(line.vatRatePercent, " %")}
                          </td>
                          <td className="border-b border-zinc-200 p-2 dark:border-zinc-800">
                            {reviewDeductibleVat(line.deductibleVatFraction)}
                          </td>
                          <td className="border-b border-zinc-200 p-2 dark:border-zinc-800">
                            {reviewOptionLabel(
                              triStateOptions,
                              line.eligibility,
                            )}
                          </td>
                          <td className="border-b border-zinc-200 p-2 dark:border-zinc-800">
                            {reviewText(line.evidence)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button
                    type="button"
                    onClick={() => editFromReview("quote")}
                    className={reviewEditButtonClassName}
                  >
                    Modifier les lignes du devis
                  </button>
                </article>

                <article
                  id="site-aid-review-eligibility"
                  className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50"
                >
                  <h5 className="m-0 text-sm font-black">
                    3. Critères et assiette
                  </h5>
                  <div className="mt-4">
                    <ReviewDataList
                      items={[
                        ...SITE_AID_GATE_IDS.filter(
                          (gateId) => gateId !== "notification",
                        ).flatMap((gateId) => [
                          {
                            label: `${SITE_AID_GATE_LABELS[gateId]} — statut`,
                            value: reviewOptionLabel(
                              triStateOptions,
                              input.gates[gateId],
                            ),
                          },
                          {
                            label: `${SITE_AID_GATE_LABELS[gateId]} — preuve`,
                            value: reviewText(input.gateEvidence[gateId]),
                          },
                        ]),
                        {
                          label: "Assiette prévue par le règlement",
                          value: reviewOptionLabel(
                            basisScopeOptions,
                            input.aid.basisScope,
                          ),
                        },
                        {
                          label: "Taux de l’aide",
                          value: reviewNumber(input.aid.ratePercent, " %"),
                        },
                        {
                          label: "Plafond de l’aide",
                          value: reviewMoney(input.aid.capAmount),
                        },
                      ]}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => editFromReview("eligibility")}
                    className={reviewEditButtonClassName}
                  >
                    Modifier les critères et l’assiette
                  </button>
                </article>

                <article
                  id="site-aid-review-legal"
                  className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50"
                >
                  <h5 className="m-0 text-sm font-black">
                    4. Instrument, base juridique et octroi
                  </h5>
                  <div className="mt-4">
                    <ReviewDataList
                      items={[
                        {
                          label: "Type d’instrument",
                          value: reviewOptionLabel(
                            instrumentKindOptions,
                            input.aid.instrumentKind,
                          ),
                        },
                        {
                          label: "Statut de la base juridique",
                          value: reviewOptionLabel(
                            legalBasisStatusOptions,
                            input.aid.legalBasisStatus,
                          ),
                        },
                        {
                          label: "Règlement de minimis",
                          value: reviewText(input.aid.deMinimisRegime),
                        },
                        {
                          label: "Base juridique hors de minimis",
                          value: reviewText(input.aid.nonDeMinimisLegalBasis),
                        },
                        {
                          label: "Preuve hors de minimis",
                          value: reviewText(
                            input.aid.nonDeMinimisEvidenceReference,
                          ),
                        },
                        {
                          label:
                            "État membre de l’autorité d’octroi (pas le siège du bénéficiaire)",
                          value: reviewText(input.aid.deMinimisMemberState),
                        },
                        {
                          label: "Périmètre de l’entreprise unique",
                          value: reviewText(
                            input.aid.deMinimisSingleUndertakingScope,
                          ),
                        },
                        ...(showsProspectiveDeMinimisValue
                          ? [
                              {
                                label:
                                  "Montant brut ou ESB prospectif documenté — précontrôle uniquement",
                                value: reviewMoney(
                                  input.aid.prospectiveDeMinimisAidValueAmount,
                                ),
                              },
                              {
                                label:
                                  "Preuve du montant brut ou de l’ESB prospectif",
                                value: reviewText(
                                  input.aid
                                    .prospectiveDeMinimisAidValueEvidence,
                                ),
                              },
                            ]
                          : []),
                        ...(hasFisheryBranch
                          ? [
                              {
                                label:
                                  "Début de l’exercice fiscal pêche contenant l’ancre",
                                value: reviewText(
                                  input.aid.deMinimisFisheryFiscalYearStartDate,
                                ),
                              },
                              {
                                label:
                                  "Début de l’exercice fiscal pêche précédent",
                                value: reviewText(
                                  input.aid
                                    .deMinimisFisheryPreviousFiscalYearStartDate,
                                ),
                              },
                              {
                                label:
                                  "Début du deuxième exercice fiscal pêche précédent",
                                value: reviewText(
                                  input.aid
                                    .deMinimisFisherySecondPreviousFiscalYearStartDate,
                                ),
                              },
                              {
                                label:
                                  "Fin de l’exercice fiscal pêche contenant l’ancre",
                                value: reviewText(
                                  input.aid
                                    .deMinimisFisheryCurrentFiscalYearEndDate,
                                ),
                              },
                            ]
                          : []),
                        {
                          label: "Clés proches déclarées distinctes",
                          value: reviewOptionLabel(
                            similarUndertakingDistinctOptions,
                            input.aid.similarUndertakingKeysDistinct,
                          ),
                        },
                        {
                          label: "Preuve de distinction des clés proches",
                          value: reviewText(
                            input.aid.similarUndertakingKeysEvidence,
                          ),
                        },
                        {
                          label:
                            "Mandat du service d’intérêt économique général (SIEG) vérifié",
                          value: reviewOptionLabel(
                            sgeiEntrustmentOptions,
                            input.aid.sgeiEntrustmentVerified,
                          ),
                        },
                        {
                          label: "Preuve du mandat SIEG",
                          value: reviewText(input.aid.sgeiEntrustmentEvidence),
                        },
                        {
                          label: "Identité exacte du SIEG confié",
                          value: reviewText(input.aid.sgeiServiceIdentity),
                        },
                        {
                          label: "Autre compensation du même SIEG",
                          value: reviewOptionLabel(
                            sgeiCompensationOptions,
                            input.aid.sgeiSameServiceCompensationPresent,
                          ),
                        },
                        {
                          label: "Preuve sur les compensations du même SIEG",
                          value: reviewText(input.aid.sgeiCompensationEvidence),
                        },
                        {
                          label: "Octroi juridique",
                          value: reviewOptionLabel(
                            legalGrantStatusOptions,
                            input.aid.legalGrantStatus,
                          ),
                        },
                        {
                          label: "Date d’octroi juridique",
                          value: reviewText(input.aid.legalGrantDate),
                        },
                        {
                          label: "Statut au registre central",
                          value: reviewOptionLabel(
                            centralRegisterStatusOptions,
                            input.aid.centralRegisterStatus ?? "unknown",
                          ),
                        },
                        {
                          label:
                            "Preuve du registre : URL aides_minimis avec recordid, recordid autonome ou attestation structurée",
                          value: reviewText(input.aid.centralRegisterReference),
                        },
                        {
                          label:
                            "Valeur juridique ou équivalent-subvention brut (ESB)",
                          value: reviewMoney(input.aid.legalAidValueAmount),
                        },
                      ]}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => editFromReview("legal")}
                    className={reviewEditButtonClassName}
                  >
                    Modifier le droit à l’aide
                  </button>
                </article>

                <article
                  id="site-aid-review-payment"
                  className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50"
                >
                  <h5 className="m-0 text-sm font-black">
                    5. Contribution, facture et paiement
                  </h5>
                  <div className="mt-4">
                    <ReviewDataList
                      items={[
                        {
                          label: "État financier",
                          value: reviewOptionLabel(
                            stageOptions,
                            input.aid.stage,
                          ),
                        },
                        {
                          label: "Statut du contrôle de notification",
                          value: reviewOptionLabel(
                            triStateOptions,
                            input.gates.notification,
                          ),
                        },
                        {
                          label: "Preuve de notification ou de son absence",
                          value: reviewText(input.gateEvidence.notification),
                        },
                        {
                          label:
                            "Contribution financière approuvée pour la facture",
                          value: reviewMoney(
                            input.aid.approvedFinancialContributionAmount,
                          ),
                        },
                        {
                          label: "Contribution effectivement payée",
                          value: reviewMoney(
                            input.aid.actualFinancialContributionAmount,
                          ),
                        },
                        {
                          label: "Mode et destinataire du paiement",
                          value: reviewOptionLabel(
                            paymentOptions,
                            input.aid.paymentMode,
                          ),
                        },
                        {
                          label: "Part versée avant paiement fournisseur",
                          value:
                            input.aid.documentedPrepaymentPercent === "unknown"
                              ? "À confirmer"
                              : reviewNumber(
                                  input.aid.documentedPrepaymentPercent,
                                  " %",
                                ),
                        },
                        {
                          label:
                            "Les lignes reprennent la facture finale acquittée",
                          value: reviewOptionLabel(
                            triStateOptions,
                            input.aid.finalInvoiceMatchesQuote,
                          ),
                        },
                        {
                          label: "Date de la facture finale",
                          value: reviewText(input.aid.finalInvoiceDate),
                        },
                        {
                          label: "Référence de la facture finale",
                          value: reviewText(input.aid.finalInvoiceReference),
                        },
                        {
                          label: "Preuve du paiement fournisseur",
                          value: reviewText(input.aid.supplierPaymentReference),
                        },
                        {
                          label: "Date du versement ou paiement direct",
                          value: reviewText(input.aid.receiptDate),
                        },
                        {
                          label: "Référence du versement ou paiement direct",
                          value: reviewText(input.aid.receiptReference),
                        },
                      ]}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => editFromReview("payment")}
                    className={reviewEditButtonClassName}
                  >
                    Modifier le versement et ses preuves
                  </button>
                </article>

                <article
                  id="site-aid-review-treasury"
                  className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50"
                >
                  <h5 className="m-0 text-sm font-black">
                    6. Trésorerie et attente
                  </h5>
                  <div className="mt-4">
                    <ReviewDataList
                      items={[
                        {
                          label: "Trésorerie disponible",
                          value: reviewMoney(input.availableCash),
                        },
                        {
                          label: "Mois d’attente",
                          value: reviewNumber(input.wait.months),
                        },
                        {
                          label: "Marge contributive mensuelle perdue",
                          value: reviewMoney(
                            input.wait.monthlyDelayContributionMargin,
                          ),
                        },
                        {
                          label: "Frais propres à la demande et à l’attente",
                          value: reviewMoney(input.wait.aidSpecificFees),
                        },
                      ]}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => editFromReview("treasury")}
                    className={reviewEditButtonClassName}
                  >
                    Modifier la trésorerie et l’attente
                  </button>
                </article>

                <article
                  id="site-aid-review-history"
                  className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50"
                >
                  <h5 className="m-0 text-sm font-black">
                    7. Aides antérieures et restructuration
                  </h5>
                  <div className="mt-4">
                    <ReviewDataList
                      items={[
                        {
                          label: "Fusion, acquisition ou scission pertinente",
                          value: reviewOptionLabel(
                            corporateEventOccurredOptions,
                            input.profile.deMinimisCorporateEventOccurred,
                          ),
                        },
                        {
                          label: "Preuve de l’opération ou de son absence",
                          value: reviewText(
                            input.profile.deMinimisCorporateEventEvidence,
                          ),
                        },
                        {
                          label: "Type d’événement",
                          value: reviewOptionLabel(
                            corporateEventKindOptions,
                            input.profile.deMinimisCorporateEventKind,
                          ),
                        },
                        {
                          label: "Historique ajusté après l’événement",
                          value: reviewOptionLabel(
                            corporateAidHistoryOptions,
                            input.profile.deMinimisCorporateAidHistoryAdjusted,
                          ),
                        },
                      ]}
                    />
                  </div>

                  {input.aidRegister.length === 0 ? (
                    <p className="mb-0 mt-4 rounded-lg border border-zinc-200 bg-white p-3 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
                      Aucune aide antérieure déclarée.
                    </p>
                  ) : (
                    <div className="mt-4 space-y-3">
                      {input.aidRegister.map((entry, index) => (
                        <section
                          key={registerEntryIds[index] ?? index}
                          aria-labelledby={`site-aid-review-register-${index + 1}-title`}
                          className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950"
                        >
                          <h6
                            id={`site-aid-review-register-${index + 1}-title`}
                            className="m-0 text-xs font-black"
                          >
                            Aide antérieure {index + 1}
                          </h6>
                          <div className="mt-3">
                            <ReviewDataList
                              items={[
                                {
                                  label: "Organisme",
                                  value: reviewText(entry.authority),
                                },
                                {
                                  label: "Dispositif",
                                  value: reviewText(entry.scheme),
                                },
                                {
                                  label: "Statut de la base juridique",
                                  value: reviewOptionLabel(
                                    legalBasisStatusOptions,
                                    entry.legalBasisStatus,
                                  ),
                                },
                                {
                                  label: "Règlement de minimis",
                                  value: reviewText(entry.regime),
                                },
                                {
                                  label: "Base juridique hors de minimis",
                                  value: reviewText(
                                    entry.nonDeMinimisLegalBasis,
                                  ),
                                },
                                {
                                  label: "Preuve hors de minimis",
                                  value: reviewText(
                                    entry.nonDeMinimisEvidenceReference,
                                  ),
                                },
                                {
                                  label:
                                    "État membre de l’autorité d’octroi (pas le siège du bénéficiaire)",
                                  value: reviewText(entry.memberState),
                                },
                                {
                                  label: "Périmètre de l’entreprise unique",
                                  value: reviewText(
                                    entry.singleUndertakingScope,
                                  ),
                                },
                                {
                                  label: "Clés proches déclarées distinctes",
                                  value: reviewOptionLabel(
                                    similarUndertakingDistinctOptions,
                                    entry.similarUndertakingKeysDistinct,
                                  ),
                                },
                                {
                                  label:
                                    "Preuve de distinction des clés proches",
                                  value: reviewText(
                                    entry.similarUndertakingKeysEvidence,
                                  ),
                                },
                                {
                                  label: "Mandat SIEG vérifié",
                                  value: reviewOptionLabel(
                                    sgeiEntrustmentOptions,
                                    entry.sgeiEntrustmentVerified,
                                  ),
                                },
                                {
                                  label: "Preuve du mandat SIEG",
                                  value: reviewText(
                                    entry.sgeiEntrustmentEvidence,
                                  ),
                                },
                                {
                                  label: "Identité exacte du SIEG",
                                  value: reviewText(entry.sgeiServiceIdentity),
                                },
                                {
                                  label: "Autre compensation du même SIEG",
                                  value: reviewOptionLabel(
                                    sgeiCompensationOptions,
                                    entry.sgeiSameServiceCompensationPresent,
                                  ),
                                },
                                {
                                  label:
                                    "Preuve sur les compensations du même SIEG",
                                  value: reviewText(
                                    entry.sgeiCompensationEvidence,
                                  ),
                                },
                                {
                                  label: "Même SIEG que l’aide actuelle",
                                  value: reviewOptionLabel(
                                    triStateOptions,
                                    entry.sgeiRelationToCurrentService,
                                  ),
                                },
                                {
                                  label:
                                    "Preuve de distinction avec le SIEG actuel",
                                  value: reviewText(
                                    entry.sgeiRelationToCurrentServiceEvidence,
                                  ),
                                },
                                {
                                  label:
                                    "Valeur juridique ou équivalent-subvention brut (ESB)",
                                  value: reviewMoney(entry.amount),
                                },
                                {
                                  label: "Date d’octroi juridique",
                                  value: reviewText(entry.legalGrantDate),
                                },
                                {
                                  label: "Statut au registre central",
                                  value: reviewOptionLabel(
                                    centralRegisterStatusOptions,
                                    entry.centralRegisterStatus ?? "unknown",
                                  ),
                                },
                                {
                                  label:
                                    "Preuve du registre : URL aides_minimis avec recordid, recordid autonome ou attestation structurée",
                                  value: reviewText(
                                    entry.centralRegisterReference,
                                  ),
                                },
                                {
                                  label: "Dépenses concernées",
                                  value: reviewText(entry.expenses),
                                },
                                {
                                  label: "Même assiette ou même facture",
                                  value: reviewOptionLabel(
                                    triStateOptions,
                                    entry.sameBaseOrInvoice,
                                  ),
                                },
                              ]}
                            />
                          </div>
                        </section>
                      ))}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => editFromReview("history")}
                    className={reviewEditButtonClassName}
                  >
                    Modifier les aides antérieures et la restructuration
                  </button>
                </article>

                <section className="rounded-xl border border-violet-200 bg-violet-50 p-4 dark:border-violet-900 dark:bg-violet-950/20">
                  <h5 className="m-0 text-sm font-black">
                    Prédiagnostic transféré — déclaratif
                  </h5>
                  <p className="mb-0 mt-2 text-xs leading-relaxed text-violet-900 dark:text-violet-100">
                    {prediagnosis.transferredAt
                      ? `Transfert local du ${prediagnosis.transferredAt}.`
                      : "Aucun transfert : état facultatif et neutre d’un brouillon vierge ou d’une migration R23/R24."}{" "}
                    Aucun élément ci-dessous n’est traité comme un fait
                    juridique, financier ou d’éligibilité.
                  </p>
                  {prediagnosis.transferredAt ? (
                    <div className="mt-4 space-y-3">
                      {prediagnosis.items.map((item, index) => (
                        <section
                          key={item.id}
                          aria-labelledby={`site-aid-review-prediagnosis-${item.id}-title`}
                          className={`rounded-lg border bg-white p-3 dark:bg-zinc-950 ${
                            item.status === "no"
                              ? "border-rose-400 dark:border-rose-800"
                              : "border-violet-200 dark:border-violet-900"
                          }`}
                        >
                          <h6
                            id={`site-aid-review-prediagnosis-${item.id}-title`}
                            className="mb-3 mt-0 text-xs font-black"
                          >
                            {index + 1}. {item.label}
                            {item.status === "no"
                              ? " — bloqueur déclaratif"
                              : ""}
                          </h6>
                          <ReviewDataList
                            items={[
                              {
                                label: "Statut déclaré",
                                value:
                                  item.status === "documented"
                                    ? "Oui documenté — à confirmer"
                                    : item.status === "no"
                                      ? "Non — bloqueur déclaratif"
                                      : "À confirmer",
                              },
                              {
                                label: "Preuve attendue",
                                value: reviewText(item.evidenceToConfirm),
                              },
                              {
                                label: "Preuve déclarée",
                                value: reviewText(item.declaredEvidence),
                              },
                            ]}
                          />
                        </section>
                      ))}
                    </div>
                  ) : null}
                </section>

                <article
                  id="site-aid-review-application"
                  className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50"
                >
                  <h5 className="m-0 text-sm font-black">
                    8. Préparation de la candidature
                  </h5>
                  <div className="mt-4">
                    <ReviewDataList
                      items={[
                        {
                          label: "Mode d’attribution",
                          value: reviewOptionLabel(
                            applicationAwardModeOptions,
                            application.awardMode,
                          ),
                        },
                        {
                          label: "Objectifs du financeur",
                          value: reviewText(application.funderObjectives),
                        },
                        {
                          label: "Critères ou conditions",
                          value: reviewText(application.selectionCriteria),
                        },
                        {
                          label: "Canal officiel de dépôt",
                          value: reviewText(application.submissionChannel),
                        },
                        {
                          label: "Statut après dépôt",
                          value: reviewOptionLabel(
                            applicationSubmissionStatusOptions,
                            application.submissionStatus,
                          ),
                        },
                        {
                          label: "Date du dépôt réellement effectué",
                          value: reviewText(application.submissionDate),
                        },
                        {
                          label: "Accusé ou référence de dépôt",
                          value: reviewText(
                            application.submissionReceiptReference,
                          ),
                        },
                        {
                          label:
                            "Dossier transmis identique au dossier préparé",
                          value: reviewOptionLabel(
                            applicationSubmittedPackageCheckOptions,
                            application.submittedPackageMatchesPreparedPackage,
                          ),
                        },
                        {
                          label: "Statut de l’échéance",
                          value: reviewOptionLabel(
                            applicationDeadlineStatusOptions,
                            application.deadlineStatus,
                          ),
                        },
                        {
                          label: "Date limite",
                          value:
                            application.deadlineStatus === "exact-date"
                              ? reviewText(application.deadline)
                              : "Sans objet",
                        },
                        {
                          label: "Heure limite",
                          value:
                            application.deadlineStatus === "exact-date"
                              ? reviewText(application.deadlineTime)
                              : "Sans objet",
                        },
                        {
                          label: "Fuseau de la clôture",
                          value:
                            application.deadlineStatus === "exact-date"
                              ? reviewText(application.deadlineTimeZone)
                              : "Sans objet",
                        },
                        {
                          label: "Référence officielle de l’échéance",
                          value: reviewText(
                            application.deadlineOfficialReference,
                          ),
                        },
                        {
                          label: "Référence vérifiée le",
                          value: reviewText(
                            application.deadlineVerificationDate,
                          ),
                        },
                        {
                          label: "Instant absolu évalué",
                          value: reviewText(
                            application.deadlineEvaluationInstant,
                          ),
                        },
                        {
                          label: "Fuseau du navigateur à l’évaluation",
                          value: reviewText(
                            application.deadlineEvaluationTimeZone,
                          ),
                        },
                        {
                          label: "Temps de préparation",
                          value: reviewNumber(
                            application.preparationTimeHours,
                            " h",
                          ),
                        },
                        {
                          label: "Relecteur final",
                          value: reviewText(application.finalReviewer),
                        },
                        {
                          label: "Validation finale",
                          value: reviewOptionLabel(
                            applicationFinalValidationOptions,
                            application.finalValidationStatus,
                          ),
                        },
                        {
                          label: "Livrables",
                          value: reviewText(application.deliverables),
                        },
                        {
                          label: "Résultats attendus",
                          value: reviewText(application.expectedResults),
                        },
                        {
                          label: "Calendrier",
                          value: reviewText(application.schedule),
                        },
                        {
                          label: "Justification budgétaire",
                          value: reviewText(application.budgetJustification),
                        },
                      ]}
                    />
                  </div>

                  <div className="mt-4 space-y-3">
                    <p className="m-0 text-xs font-black">
                      Matrice des critères publiés
                    </p>
                    {application.awardMode === "right" ? (
                      <p className="m-0 rounded-lg border border-zinc-200 bg-white p-3 text-xs font-bold text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
                        Sans objet — aide de droit.
                      </p>
                    ) : application.awardMode !== "selection" ? (
                      <p className="m-0 rounded-lg border border-amber-300 bg-amber-50 p-3 text-xs font-bold text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100">
                        Mode d’attribution à confirmer ; matrice non applicable.
                      </p>
                    ) : application.criteria.length === 0 ? (
                      <p className="m-0 rounded-lg border border-amber-300 bg-amber-50 p-3 text-xs font-bold text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100">
                        Aucun critère publié renseigné.
                      </p>
                    ) : (
                      application.criteria.map((criterion, index) => {
                        const titleId = `site-aid-review-application-criterion-${index + 1}-title`;
                        return (
                          <section
                            key={applicationCriterionIds[index] ?? index}
                            aria-labelledby={titleId}
                            className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950"
                          >
                            <h6
                              id={titleId}
                              className="mb-3 mt-0 text-xs font-black"
                            >
                              Critère {index + 1}
                            </h6>
                            <ReviewDataList
                              items={[
                                {
                                  label: "Critère publié",
                                  value: reviewText(
                                    criterion.publishedCriterion,
                                  ),
                                },
                                {
                                  label: "Réponse du projet",
                                  value: reviewText(criterion.projectResponse),
                                },
                                {
                                  label: "Nombre de mots détecté par cet outil",
                                  value: reviewNumber(
                                    countSiteAidApplicationWords(
                                      criterion.projectResponse,
                                    ),
                                    " mots",
                                  ),
                                },
                                {
                                  label: "Preuve à confirmer",
                                  value: reviewText(criterion.evidence),
                                },
                                {
                                  label: "Responsable",
                                  value: reviewText(criterion.owner),
                                },
                                {
                                  label: "Limite de mots",
                                  value:
                                    criterion.wordLimit === undefined
                                      ? "Non publiée"
                                      : reviewNumber(
                                          criterion.wordLimit,
                                          " mots",
                                        ),
                                },
                              ]}
                            />
                          </section>
                        );
                      })
                    )}
                  </div>

                  <div className="mt-4 space-y-3">
                    {application.documents.length === 0 ? (
                      <p className="m-0 rounded-lg border border-amber-300 bg-amber-50 p-3 text-xs font-bold text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100">
                        Aucune pièce renseignée.
                      </p>
                    ) : (
                      application.documents.map((document, index) => {
                        const titleId = `site-aid-review-application-document-${index + 1}-title`;
                        return (
                          <section
                            key={applicationDocumentIds[index] ?? index}
                            aria-labelledby={titleId}
                            className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950"
                          >
                            <h6
                              id={titleId}
                              className="mb-3 mt-0 text-xs font-black"
                            >
                              Pièce {index + 1}
                            </h6>
                            <ReviewDataList
                              items={[
                                {
                                  label: "Nom",
                                  value: reviewText(document.label),
                                },
                                {
                                  label: "Statut",
                                  value: reviewOptionLabel(
                                    applicationDocumentStatusOptions,
                                    document.status,
                                  ),
                                },
                                {
                                  label: "Responsable",
                                  value:
                                    document.status === "not-applicable"
                                      ? "Sans objet"
                                      : reviewText(document.owner),
                                },
                                {
                                  label: "Format",
                                  value:
                                    document.status === "not-applicable"
                                      ? "Sans objet"
                                      : reviewText(document.format),
                                },
                                {
                                  label: "Signature",
                                  value:
                                    document.status === "not-applicable"
                                      ? "Sans objet"
                                      : reviewOptionLabel(
                                          applicationSignatureStatusOptions,
                                          document.signatureStatus,
                                        ),
                                },
                                {
                                  label: "Échéance",
                                  value:
                                    document.status === "not-applicable"
                                      ? "Sans objet"
                                      : reviewText(document.deadline),
                                },
                                {
                                  label: "Justification non applicable",
                                  value:
                                    document.status === "not-applicable"
                                      ? reviewText(
                                          document.notApplicableJustification,
                                        )
                                      : "Sans objet",
                                },
                              ]}
                            />
                          </section>
                        );
                      })
                    )}
                  </div>

                  <p className="mb-0 mt-4 text-[11px] leading-relaxed text-zinc-600 dark:text-zinc-300">
                    Cette préparation ne remplace ni le règlement de l’aide, ni
                    la plateforme officielle, ni la décision de l’autorité
                    compétente. La matrice organise les réponses ; l’outil ne
                    note jamais la qualité d’une candidature.
                  </p>
                  <button
                    type="button"
                    onClick={() => editFromReview("application")}
                    className={reviewEditButtonClassName}
                  >
                    Modifier la préparation de candidature
                  </button>
                </article>
              </div>

              <section
                ref={resultSummaryRef}
                tabIndex={-1}
                data-site-aid-analysis-state={
                  analysisIsStale
                    ? "stale"
                    : analysisIsCurrent
                      ? "current"
                      : "not-run"
                }
                className={`rounded-xl border p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 sm:p-5 ${resultStyles.border} ${resultStyles.background} ${resultStyles.text}`}
                aria-labelledby="site-aid-result-title"
              >
                <p className="m-0 text-[10px] font-black uppercase tracking-[0.16em] opacity-70">
                  {analysisIsStale
                    ? "Analyse périmée"
                    : analysisIsCurrent
                      ? "Résultat déterministe"
                      : "Analyse non lancée"}
                </p>
                <h4
                  id="site-aid-result-title"
                  className="mb-0 mt-2 text-base font-black"
                >
                  {analysisIsStale
                    ? "ANALYSE PÉRIMÉE — RELANCE REQUISE"
                    : analysisIsCurrent
                      ? visibleResultExplanation
                      : hasInteracted
                        ? "DOSSIER EN COURS — VERDICT NON DEMANDÉ"
                        : "DOSSIER À COMPLÉTER — AUCUN VERDICT RENDU"}
                </h4>

                <button
                  id="site-aid-analyze-button"
                  ref={analysisTriggerRef}
                  type="button"
                  onClick={() => {
                    if (prediagnosisTransferIsStale) {
                      const target = document.getElementById(
                        "site-aid-prediagnosis-transfer-button",
                      );
                      target?.scrollIntoView?.({ block: "center" });
                      if (target instanceof HTMLElement) target.focus();
                      announceLive(
                        "Analyse suspendue. Retransférez le prédiagnostic modifié.",
                      );
                      return;
                    }
                    const evaluatedApplication =
                      applicationWithEvaluationInstant(application);
                    const evaluatedAnalysisDate =
                      applicationEvaluationLocalDate(evaluatedApplication) ??
                      currentLocalIsoDate();
                    const evaluatedResult = calculateSiteAidDecision(input, {
                      analysisDate: evaluatedAnalysisDate,
                    });
                    const evaluatedApplicationIssues =
                      applicationPreparationIssues(evaluatedApplication, input);
                    setApplication(evaluatedApplication);
                    setAnalyzedDossierSignature(
                      JSON.stringify({
                        input,
                        application: evaluatedApplication,
                        prediagnosis,
                        editableLocalDate,
                      }),
                    );
                    setHasInteracted(true);
                    setHasDraftChanges(true);
                    setHasRequestedVerdict(true);
                    setActionStatus("idle");
                    analysisFocusTargetRef.current =
                      resultHasCorrectiveIssues(evaluatedResult) ||
                      evaluatedApplicationIssues.length > 0 ||
                      prediagnosisIssues.length > 0
                        ? "errors"
                        : "result";
                    setAnalysisFocusRequest((current) => current + 1);
                    announceLive(
                      `Analyse terminée. ${resultLiveSummary(
                        evaluatedResult,
                        input.aid.stage,
                        evaluatedApplicationIssues.length,
                        prediagnosisIssues.length,
                      )}`,
                    );
                  }}
                  className="mt-4 inline-flex min-h-11 items-center justify-center rounded-lg bg-zinc-950 px-4 py-2 text-sm font-black text-white transition hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                >
                  Analyser le dossier
                </button>

                {analysisIsCurrent ? (
                  <dl className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {resultValue(
                      "Facture TTC",
                      result.invoiceTotalIncludingVat,
                      "Montant fournisseur avant éventuel versement.",
                    )}
                    {resultValue(
                      "Aide théorique",
                      result.theoreticalAidNonAcquired,
                      "Non acquise.",
                    )}
                    {resultValue(
                      input.aid.stage !== "none" && !legalAidValueResolved
                        ? "Valeur juridique déclarée — non validée"
                        : "Valeur juridique sous conditions",
                      result.legalAidValueUnderConditions,
                      input.aid.stage !== "none" && !legalAidValueResolved
                        ? "ND : la valeur saisie n’est pas validée sans octroi juridique et date cohérente."
                        : "Montant brut ou ESB documenté ; ne réduit pas seul le coût ni la trésorerie.",
                    )}
                    {resultValue(
                      !financialContributionSupported
                        ? "Contribution financière non modélisée"
                        : input.aid.stage === "none"
                          ? "Contribution budgétée"
                          : input.aid.stage === "notified"
                            ? approvedFinancialContributionResolved
                              ? "Contribution approuvée"
                              : "Contribution déclarée — non validée"
                            : !actualFinancialContributionResolved
                              ? "Contribution déclarée — non validée"
                              : input.aid.paymentMode === "direct"
                                ? "Contribution payée au fournisseur"
                                : "Contribution payée à l’entreprise",
                      !financialContributionSupported
                        ? undefined
                        : input.aid.stage === "none"
                          ? result.budgetedAid
                          : input.aid.stage === "notified"
                            ? result.approvedFinancialContributionUnderConditions
                            : result.actualFinancialContribution,
                      !financialContributionSupported
                        ? "ND : ne saisissez aucun nominal ou décaissement comme une subvention."
                        : input.aid.stage === "none"
                          ? "0 € sans contribution financière approuvée."
                          : input.aid.stage === "notified"
                            ? !approvedFinancialContributionResolved
                              ? "ND : la contribution saisie n’est pas approuvée par le moteur sans octroi juridique positif, date cohérente et chaîne documentaire suffisante."
                              : "Montant financier distinct de la valeur juridique ; sous conditions jusqu’au paiement."
                            : !actualFinancialContributionResolved
                              ? "ND : la somme saisie ne devient pas un paiement validé. La facture finale, l’octroi juridique, la preuve du versement ou du paiement direct et leur chronologie doivent former une chaîne documentaire cohérente."
                              : input.aid.paymentMode === "direct"
                                ? "Versement public documenté au fournisseur ; encaissement de l’entreprise : 0 €."
                                : "Montant effectivement encaissé par l’entreprise.",
                    )}
                    {resultValue(
                      "Coût sans aide",
                      result.economicCostWithoutAid,
                      costResultNote(
                        "Calculable dès que le devis et la TVA sont complets, même si le dossier administratif reste incomplet.",
                      ),
                    )}
                    {resultValue(
                      !financialContributionSupported
                        ? "Coût après instrument non modélisé"
                        : input.aid.stage === "received"
                          ? realizedCostAfterReceiptResolved
                            ? "Coût réalisé"
                            : "Coût réalisé non calculable"
                          : input.aid.stage === "notified" &&
                              !conditionalCostAfterNotificationResolved
                            ? "Coût conditionnel non calculable"
                            : "Coût après notification",
                      !financialContributionSupported
                        ? undefined
                        : input.aid.stage === "received"
                          ? result.realizedCostAfterReceipt
                          : result.conditionalCostAfterNotification,
                      costResultNote(
                        !financialContributionSupported
                          ? "ND : seul le coût sans aide reste exploitable ; aucun prêt, nominal, garantie ou allègement n’est soustrait."
                          : input.aid.stage === "received"
                            ? !realizedCostAfterReceiptResolved
                              ? "ND : aucun coût réalisé n’est affirmé tant que la contribution résolue et la chaîne documentaire — octroi juridique, facture finale, versement ou paiement direct et chronologie — ne sont pas validées."
                              : input.aid.paymentMode === "direct"
                                ? "Après versement documenté au fournisseur."
                                : "Après montant encaissé par l’entreprise."
                            : input.aid.stage === "notified" &&
                                !conditionalCostAfterNotificationResolved
                              ? "ND : aucun coût conditionnel n’est affirmé sans contribution approuvée résolue, octroi juridique positif et date cohérente."
                              : "Conditionnel jusqu’au versement.",
                      ),
                    )}
                    {input.aid.paymentMode === "direct"
                      ? resultValue(
                          input.aid.stage === "received"
                            ? directCompanySupplierRemainder === undefined
                              ? "Reste de facture non calculable"
                              : "Reste de facture payé par l’entreprise"
                            : directCompanySupplierRemainder === undefined
                              ? "Reste de facture non calculable"
                              : "Reste de facture prévu pour l’entreprise",
                          directCompanySupplierRemainder,
                          directPaymentCoversSupplierInvoice
                            ? "0 € et couverture intégrale documentée par la facture finale, le paiement direct, leurs références et leur chronologie."
                            : directPaymentProvisionallyCoversSupplierInvoice
                              ? "0 € arithmétique provisoire : les pièces manquantes empêchent encore de documenter la couverture intégrale."
                              : directPaymentCoverageStatus === "invalid" ||
                                  directCompanySupplierRemainder === undefined
                                ? "ND : le moteur ne valide aucun reste tant que les montants ou leurs preuves sont incohérents."
                                : "Reste calculé par le moteur à partir de la facture et de la contribution directe admise.",
                        )
                      : null}
                    {resultValue(
                      "Besoin maximal de trésorerie",
                      result.maximumCashNeed,
                      !financialContributionSupported
                        ? "Besoin prudent sans réduction liée à l’instrument non modélisé."
                        : input.aid.paymentMode === "direct"
                          ? "Reste de facture supporté par l’entreprise et frais saisis."
                          : "Facture et frais moins part documentée avant paiement.",
                    )}
                    {resultValue(
                      "Écart de trésorerie",
                      result.cashGap,
                      "Montant qui manque selon la trésorerie saisie.",
                    )}
                    {resultValue(
                      "Coût attente + frais",
                      result.waitingAndFeeCost,
                      "Sans probabilité d’obtention inventée.",
                    )}
                    {resultValue(
                      "Aides antérieures déclarées — non validées",
                      result.registeredAidTotal,
                      "Total arithmétique des montants saisis ; le moteur n’authentifie ni leur base juridique ni leur identité de groupe.",
                    )}
                    {resultValue(
                      "Aides déclarées sur même assiette — non validées",
                      result.sameBaseAidTotal,
                      "Total déclaratif à faire confirmer par écrit ; aucune compatibilité de cumul n’est conclue.",
                    )}
                    {input.aid.stage === "received"
                      ? resultValue(
                          actualFinancialContributionResolved &&
                            approvedFinancialContributionResolved
                            ? input.aid.paymentMode === "direct"
                              ? "Écart payé au fournisseur / approuvé"
                              : "Écart payé à l’entreprise / approuvé"
                            : "Écart déclaré — non validé",
                          result.financialContributionDifference,
                          actualFinancialContributionResolved &&
                            approvedFinancialContributionResolved
                            ? "Négatif si le paiement est inférieur à la contribution approuvée."
                            : "ND tant que les contributions approuvée et effectivement payée ne sont pas toutes deux résolues.",
                        )
                      : null}
                  </dl>
                ) : (
                  <p className="mb-0 mt-3 text-sm leading-relaxed">
                    {analysisIsStale
                      ? "Le dossier a changé depuis le dernier instant analysé. L’ancien verdict n’est plus affiché et les exports restent verrouillés. Relancez « Analyser le dossier » pour recapturer l’instant et produire une nouvelle synthèse."
                      : hasInteracted
                        ? "Le brouillon a changé, mais aucun résultat ni verdict n’est encore partageable. Activez « Analyser le dossier » pour produire la synthèse et ouvrir les exports."
                        : "Commencez par le besoin et la source, ou chargez l’exemple fictif. Aucun résultat, verdict ou export n’est produit avant l’analyse explicite."}
                  </p>
                )}

                {analysisIsCurrent &&
                (result.invalidIssues.length > 0 ||
                  result.missingEvidence.length > 0 ||
                  result.exclusionReasons.length > 0 ||
                  result.warnings.length > 0 ||
                  result.toolLimitations.length > 0 ||
                  applicationIssues.length > 0 ||
                  prediagnosisIssues.length > 0) ? (
                  <div
                    ref={errorSummaryRef}
                    id="site-aid-error-summary"
                    tabIndex={-1}
                    role="region"
                    aria-labelledby="site-aid-error-summary-title"
                    className="mt-5 grid gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 lg:grid-cols-2"
                  >
                    <h5
                      id="site-aid-error-summary-title"
                      className="m-0 text-sm font-black lg:col-span-2"
                    >
                      Corrections requises
                    </h5>
                    {result.invalidIssues.length > 0 ? (
                      <div>
                        <p className="m-0 text-xs font-black">
                          Données invalides
                        </p>
                        <ul className="mb-0 mt-2 space-y-1 text-xs leading-relaxed">
                          {result.invalidIssues.map((issue) => (
                            <li key={issue}>
                              <a
                                href={`#${issueTargetId(issue, input)}`}
                                onClick={(event) =>
                                  focusIssueTarget(event, issue)
                                }
                                className="underline decoration-current/40 underline-offset-2 hover:decoration-current"
                              >
                                {issue}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {result.missingEvidence.length > 0 ? (
                      <div>
                        <p className="m-0 text-xs font-black">
                          Informations ou preuves manquantes
                        </p>
                        <ul className="mb-0 mt-2 space-y-1 text-xs leading-relaxed">
                          {result.missingEvidence.map((issue) => (
                            <li key={issue}>
                              <a
                                href={`#${issueTargetId(issue, input)}`}
                                onClick={(event) =>
                                  focusIssueTarget(event, issue)
                                }
                                className="underline decoration-current/40 underline-offset-2 hover:decoration-current"
                              >
                                {issue}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {applicationIssues.length > 0 ? (
                      <div>
                        <p className="m-0 text-xs font-black">
                          Préparation de la candidature
                        </p>
                        <ul className="mb-0 mt-2 space-y-1 text-xs leading-relaxed">
                          {applicationIssues.map((issue) => (
                            <li key={`${issue.targetId}:${issue.message}`}>
                              <a
                                href={`#${issue.targetId}`}
                                onClick={(event) =>
                                  focusApplicationIssueTarget(event, issue)
                                }
                                className="underline decoration-current/40 underline-offset-2 hover:decoration-current"
                              >
                                {issue.message}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {prediagnosisIssues.length > 0 ? (
                      <div>
                        <p className="m-0 text-xs font-black">
                          Prédiagnostic transféré
                        </p>
                        <ul className="mb-0 mt-2 space-y-1 text-xs leading-relaxed">
                          {prediagnosisIssues.map((issue) => (
                            <li key={`${issue.targetId}:${issue.message}`}>
                              <a
                                href={`#${issue.targetId}`}
                                onClick={(event) =>
                                  focusPrediagnosisIssueTarget(event, issue)
                                }
                                className="underline decoration-current/40 underline-offset-2 hover:decoration-current"
                              >
                                {issue.message}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {result.exclusionReasons.length > 0 ? (
                      <div>
                        <p className="m-0 text-xs font-black">
                          Critères négatifs prouvés
                        </p>
                        <ul className="mb-0 mt-2 space-y-1 text-xs leading-relaxed">
                          {result.exclusionReasons.map((issue) => (
                            <li key={issue}>
                              <a
                                href={`#${issueTargetId(issue, input)}`}
                                onClick={(event) =>
                                  focusIssueTarget(event, issue)
                                }
                                className="underline decoration-current/40 underline-offset-2 hover:decoration-current"
                              >
                                {issue}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {result.toolLimitations.length > 0 ? (
                      <div>
                        <p className="m-0 text-xs font-black">
                          Limites de calcul de l’outil
                        </p>
                        <ul className="mb-0 mt-2 space-y-1 text-xs leading-relaxed">
                          {result.toolLimitations.map((issue) => (
                            <li key={issue}>{issue}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {result.warnings.length > 0 ? (
                      <div>
                        <p className="m-0 text-xs font-black">
                          Points de vigilance
                        </p>
                        <ul className="mb-0 mt-2 space-y-1 text-xs leading-relaxed">
                          {result.warnings.map((issue) => (
                            <li key={issue}>{issue}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </section>

              {resetRequested ? (
                <div
                  id="site-aid-reset-confirmation"
                  role="group"
                  aria-labelledby="site-aid-reset-title"
                  aria-describedby="site-aid-reset-description"
                  onKeyDown={(event) => {
                    if (event.key !== "Escape") return;
                    event.preventDefault();
                    cancelReset();
                  }}
                  className="rounded-xl border border-rose-300 bg-rose-50 p-4 text-rose-950 dark:border-rose-800 dark:bg-rose-950/30 dark:text-rose-100"
                >
                  <p
                    id="site-aid-reset-title"
                    className="m-0 text-sm font-black"
                  >
                    Effacer toutes les hypothèses ?
                  </p>
                  <p
                    id="site-aid-reset-description"
                    className="mb-0 mt-1 text-xs leading-relaxed"
                  >
                    Le profil, le devis, les preuves et le registre seront
                    supprimés dans cet onglet. Cette action ne peut pas être
                    annulée.
                  </p>
                  <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                    <button
                      type="button"
                      onClick={resetDossier}
                      className="min-h-11 rounded-lg bg-rose-700 px-4 py-2 text-xs font-black text-white hover:bg-rose-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2"
                    >
                      Effacer définitivement
                    </button>
                    <button
                      ref={resetCancelRef}
                      type="button"
                      onClick={cancelReset}
                      className="min-h-11 rounded-lg border border-rose-300 bg-white px-4 py-2 text-xs font-black text-rose-900 hover:bg-rose-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 dark:border-rose-700 dark:bg-zinc-950 dark:text-rose-100"
                    >
                      Annuler et conserver
                    </button>
                  </div>
                </div>
              ) : null}

              <p
                id="site-aid-export-gate-help"
                className="m-0 rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-xs font-semibold leading-relaxed text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
              >
                {canShareDecisionReport
                  ? "Exports disponibles pour l’analyse affichée. Relisez le verdict et ses réserves avant toute transmission."
                  : prediagnosisTransferIsStale
                    ? "Prédiagnostic modifié : retransférez ses réponses puis relancez l’analyse. Aucun verdict, TXT ou rapport d’impression n’est partageable entre-temps. Le brouillon JSON exclut les modifications non retransférées."
                    : analysisIsStale
                      ? "Analyse périmée : le dossier a changé depuis l’instant analysé. Relancez l’analyse pour recapturer l’instant ; le TXT et l’impression restent verrouillés. Le brouillon JSON reste exportable séparément."
                      : analysisIsCurrent && !deadlineTraceAllowsSharing
                        ? "Échéance non traçable : une référence officielle identifiable et sa date de vérification valide, non future, sont obligatoires pour une date exacte comme pour un guichet permanent. Le TXT et l’impression restent verrouillés."
                        : "Analyse requise : activez d’abord « Analyser le dossier ». Aucun verdict, TXT ou rapport d’impression n’est disponible avant cette action. Le brouillon JSON reste exportable séparément."}
              </p>

              <div className="flex flex-col gap-2 border-t border-zinc-200 pt-5 dark:border-zinc-800 sm:flex-row sm:flex-wrap">
                <button
                  type="button"
                  onClick={downloadReport}
                  disabled={!canShareDecisionReport}
                  aria-describedby="site-aid-export-gate-help"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-violet-700 px-4 py-2 text-sm font-black text-white hover:bg-violet-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:text-zinc-600 disabled:hover:bg-zinc-300 dark:disabled:bg-zinc-800 dark:disabled:text-zinc-400"
                >
                  <Download className="size-4" aria-hidden="true" />
                  Télécharger le dossier TXT
                </button>
                <button
                  type="button"
                  onClick={printReport}
                  disabled={!canShareDecisionReport}
                  aria-describedby="site-aid-export-gate-help"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-black text-zinc-900 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-zinc-100 disabled:text-zinc-500 disabled:hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:disabled:bg-zinc-900 dark:disabled:text-zinc-500"
                >
                  <Printer className="size-4" aria-hidden="true" />
                  Imprimer le dossier
                </button>
                <button
                  ref={resetTriggerRef}
                  type="button"
                  onClick={() => setPendingConfirmation("reset")}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-black text-zinc-900 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                >
                  <RotateCcw className="size-4" aria-hidden="true" />
                  Réinitialiser
                </button>
              </div>

              <p className="m-0 text-xs font-semibold leading-relaxed text-zinc-600 dark:text-zinc-300">
                {prediagnosisTransferIsStale
                  ? "Le prédiagnostic comporte des modifications non retransférées : elles ne figurent pas encore dans le brouillon JSON et tout rapport final reste invalidé."
                  : analysisIsStale
                    ? "Analyse périmée : aucune synthèse finale n’est partageable tant qu’une nouvelle analyse n’a pas recapturé l’instant."
                    : analysisIsCurrent && !deadlineTraceAllowsSharing
                      ? "La traçabilité de l’échéance est incomplète ou invalide : complétez sa référence officielle et sa date de vérification, puis relancez l’analyse."
                      : actionStatus === "downloaded"
                        ? "Dossier texte téléchargé. Relisez-le avant de le transmettre à l’organisme."
                        : actionStatus === "download-error"
                          ? "Le téléchargement a échoué dans ce navigateur. Utilisez l’impression du dossier."
                          : canShareDecisionReport
                            ? "Vos saisies restent dans cet onglet, ne sont pas envoyées à Hagnéré Code et seront perdues si vous rechargez la page. Exportez avant de quitter."
                            : "Vos saisies restent dans cet onglet et ne sont pas envoyées à Hagnéré Code. Le JSON permet une reprise privée ; le TXT et l’impression restent verrouillés jusqu’à l’analyse explicite."}
              </p>
              {renderWizardPanelNavigation()}
            </section>
          ) : null}
        </div>
      </section>
    </>
  );
}
