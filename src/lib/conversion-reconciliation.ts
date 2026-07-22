export const CONVERSION_STAGES = [
  { id: "eventsSent", label: "Événements envoyés" },
  { id: "requestsReceived", label: "Demandes reçues" },
  { id: "uniqueRequests", label: "Demandes uniques" },
  { id: "qualifiedRequests", label: "Demandes qualifiées" },
  { id: "quotes", label: "Devis envoyés" },
  { id: "sales", label: "Ventes conclues" },
] as const;

export type ConversionStageId = (typeof CONVERSION_STAGES)[number]["id"];

export type ConversionReconciliationVolumes = Record<
  ConversionStageId,
  number | null
>;

export interface ConversionReconciliationContext {
  label: string;
  startDate: string;
  endDate: string;
  observedAt: string;
  followUpComplete: boolean | null;
}

export interface ConversionContextIssue {
  code:
    | "missing-start-date"
    | "missing-end-date"
    | "missing-observation-date"
    | "missing-follow-up-status"
    | "invalid-date"
    | "end-before-start"
    | "observation-before-end";
  message: string;
  fields: Array<"startDate" | "endDate" | "observedAt" | "followUpComplete">;
}

export interface ConversionContextValidation {
  valid: boolean;
  issues: ConversionContextIssue[];
}

export interface ConversionReconciliationIssue {
  code: "not-finite" | "negative" | "not-an-integer" | "increasing-chain";
  message: string;
  stageIds: ConversionStageId[];
}

export type ConversionRateStatus =
  | "first-stage"
  | "available"
  | "unknown-volume"
  | "zero-base"
  | "invalid-chain";

export interface ConversionReconciliationStep {
  id: ConversionStageId;
  label: string;
  volume: number | null;
  gapFromPrevious: number | null;
  passageRate: number | null;
  rateStatus: ConversionRateStatus;
}

export interface UnprovedConversionTransition {
  fromId: ConversionStageId;
  toId: ConversionStageId;
  label: string;
  message: string;
}

export interface ConversionReconciliationResult {
  valid: boolean;
  complete: boolean;
  issues: ConversionReconciliationIssue[];
  steps: ConversionReconciliationStep[];
  firstUnprovedTransition: UnprovedConversionTransition | null;
  overallPassageRate: number | null;
  largestGap: ConversionReconciliationStep | null;
}

export const CASE_IMPORT_CHECKS = [
  { id: "batchSent", label: "Envoi du lot" },
  { id: "googleAccepted", label: "Acceptation par Google Ads" },
  { id: "googleMatched", label: "Correspondance trouvée par Google" },
  { id: "campaignAttributed", label: "Attribution à la campagne" },
  { id: "reportVisible", label: "Visibilité dans le rapport" },
] as const;

export type ConversionCaseImportCheckId =
  (typeof CASE_IMPORT_CHECKS)[number]["id"];

export const CASE_IMPORT_CHECK_STATUSES = [
  { id: "unknown", label: "Inconnu" },
  { id: "not-applicable", label: "Non applicable" },
  { id: "in-progress", label: "En cours de traitement" },
  { id: "confirmed", label: "Confirmé" },
  { id: "failed", label: "Échec, rejeté ou non confirmé" },
] as const;

export type ConversionCaseImportCheckStatus =
  (typeof CASE_IMPORT_CHECK_STATUSES)[number]["id"];

export interface ConversionCaseImportCheck {
  status: ConversionCaseImportCheckStatus;
  date: string;
  evidence: string;
}

export type ConversionCaseImportChecks = Record<
  ConversionCaseImportCheckId,
  ConversionCaseImportCheck
>;

export const CASE_MARGIN_STATUSES = [
  { id: "unknown", label: "Inconnue" },
  { id: "estimated", label: "Estimée" },
  { id: "actual", label: "Réelle" },
] as const;

export type ConversionCaseMarginStatus =
  (typeof CASE_MARGIN_STATUSES)[number]["id"];

export interface ConversionCaseMargin {
  status: ConversionCaseMarginStatus;
  date: string;
  formula: string;
  value: number | null;
  evidence: string;
}

export interface ConversionCaseStageEntry {
  date: string;
  evidence: string;
}

export type ConversionCaseStages = Record<
  ConversionStageId,
  ConversionCaseStageEntry
>;

export interface ConversionCaseSheet {
  caseId: string;
  responsibleRole: string;
  saleDefinition: string;
  advertisingId: string;
  importReference: string;
  importChecks: ConversionCaseImportChecks;
  margin: ConversionCaseMargin;
  nextAction: string;
  stages: ConversionCaseStages;
}

export interface ConversionCaseIssue {
  field:
    | "caseId"
    | "responsibleRole"
    | "saleDefinition"
    | "nextAction"
    | "stage"
    | "identifier"
    | "importCheck"
    | "margin";
  stageId?: ConversionStageId;
  importCheckId?: ConversionCaseImportCheckId;
  message: string;
}

const rateFormatter = new Intl.NumberFormat("fr-FR", {
  maximumFractionDigits: 1,
});

function cleanSingleLine(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

function formatRate(rate: number | null) {
  return rate === null ? "inconnu" : `${rateFormatter.format(rate)} %`;
}

function isIsoDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00Z`);
  return (
    !Number.isNaN(parsed.getTime()) &&
    parsed.toISOString().slice(0, 10) === value
  );
}

export function validateConversionContext(
  context: ConversionReconciliationContext,
): ConversionContextValidation {
  const issues: ConversionContextIssue[] = [];
  const dateFields = [
    ["startDate", "date de début"],
    ["endDate", "date de fin"],
    ["observedAt", "date d’observation"],
  ] as const;

  for (const [field, label] of dateFields) {
    if (!context[field]) {
      issues.push({
        code:
          field === "startDate"
            ? "missing-start-date"
            : field === "endDate"
              ? "missing-end-date"
              : "missing-observation-date",
        message: `Indiquez la ${label}.`,
        fields: [field],
      });
    } else if (!isIsoDate(context[field])) {
      issues.push({
        code: "invalid-date",
        message: `La ${label} n’est pas une date valide.`,
        fields: [field],
      });
    }
  }

  if (context.followUpComplete === null) {
    issues.push({
      code: "missing-follow-up-status",
      message:
        "Précisez si tous les dossiers ont eu le temps prévu pour avancer.",
      fields: ["followUpComplete"],
    });
  }

  const startValid = isIsoDate(context.startDate);
  const endValid = isIsoDate(context.endDate);
  const observationValid = isIsoDate(context.observedAt);

  if (startValid && endValid && context.endDate < context.startDate) {
    issues.push({
      code: "end-before-start",
      message: "La date de fin ne peut pas précéder la date de début.",
      fields: ["startDate", "endDate"],
    });
  }

  if (endValid && observationValid && context.observedAt < context.endDate) {
    issues.push({
      code: "observation-before-end",
      message:
        "La date d’observation doit être le même jour que la fin de la période, ou une date ultérieure.",
      fields: ["endDate", "observedAt"],
    });
  }

  return { valid: issues.length === 0, issues };
}

export function reconcileConversionChain(
  volumes: ConversionReconciliationVolumes,
): ConversionReconciliationResult {
  const issues: ConversionReconciliationIssue[] = [];

  for (const stage of CONVERSION_STAGES) {
    const value = volumes[stage.id];
    if (value === null) continue;

    if (!Number.isFinite(value)) {
      issues.push({
        code: "not-finite",
        message: `${stage.label} doit être un nombre entier ou rester vide.`,
        stageIds: [stage.id],
      });
    } else if (value < 0) {
      issues.push({
        code: "negative",
        message: `${stage.label} ne peut pas être négatif.`,
        stageIds: [stage.id],
      });
    } else if (!Number.isInteger(value)) {
      issues.push({
        code: "not-an-integer",
        message: `${stage.label} doit être un nombre entier.`,
        stageIds: [stage.id],
      });
    }
  }

  if (issues.length === 0) {
    let previousKnown = CONVERSION_STAGES.find(
      (stage) => volumes[stage.id] !== null,
    );

    for (const current of CONVERSION_STAGES) {
      if (!previousKnown || current.id === previousKnown.id) continue;

      const previousVolume = volumes[previousKnown.id];
      const currentVolume = volumes[current.id];

      if (
        previousVolume !== null &&
        currentVolume !== null &&
        currentVolume > previousVolume
      ) {
        issues.push({
          code: "increasing-chain",
          message: `Le volume « ${current.label} » (${currentVolume}) dépasse le dernier volume connu « ${previousKnown.label} » (${previousVolume}). Vérifiez les dates, les dossiers comptés et les étapes restées inconnues.`,
          stageIds: [previousKnown.id, current.id],
        });
      }

      if (currentVolume !== null) previousKnown = current;
    }
  }

  const valid = issues.length === 0;
  const complete = CONVERSION_STAGES.every(
    (stage) => volumes[stage.id] !== null,
  );
  const firstUnprovedTransition = (() => {
    for (let index = 1; index < CONVERSION_STAGES.length; index += 1) {
      const previous = CONVERSION_STAGES[index - 1];
      const current = CONVERSION_STAGES[index];
      const previousKnown = volumes[previous.id] !== null;
      const currentKnown = volumes[current.id] !== null;
      if (previousKnown && currentKnown) continue;

      const missingLabels: string[] = [];
      if (!previousKnown) missingLabels.push(previous.label);
      if (!currentKnown) missingLabels.push(current.label);

      return {
        fromId: previous.id,
        toId: current.id,
        label: `${previous.label} → ${current.label}`,
        message:
          missingLabels.length > 1
            ? `Premier passage non vérifiable : les nombres « ${missingLabels.join(" » et « ")} » manquent.`
            : `Premier passage non vérifiable : le nombre « ${missingLabels[0]} » manque.`,
      };
    }
    return null;
  })();

  const steps = CONVERSION_STAGES.map((stage, index) => {
    const previous = index === 0 ? null : CONVERSION_STAGES[index - 1];
    const volume = volumes[stage.id];
    const previousVolume = previous ? volumes[previous.id] : null;
    let rateStatus: ConversionRateStatus = "first-stage";

    if (index > 0) {
      if (!valid) rateStatus = "invalid-chain";
      else if (previousVolume === null || volume === null)
        rateStatus = "unknown-volume";
      else if (previousVolume === 0) rateStatus = "zero-base";
      else rateStatus = "available";
    }

    return {
      id: stage.id,
      label: stage.label,
      volume,
      gapFromPrevious:
        valid && previous && previousVolume !== null && volume !== null
          ? previousVolume - volume
          : null,
      passageRate:
        rateStatus === "available" && previousVolume !== null && volume !== null
          ? (volume / previousVolume) * 100
          : null,
      rateStatus,
    };
  });

  const stepsWithPositiveGap = steps.filter(
    (step) => step.gapFromPrevious !== null && step.gapFromPrevious > 0,
  );
  const largestGap = valid
    ? (stepsWithPositiveGap.reduce<ConversionReconciliationStep | null>(
        (largest, step) =>
          !largest ||
          (step.gapFromPrevious ?? 0) > (largest.gapFromPrevious ?? 0)
            ? step
            : largest,
        null,
      ) ?? null)
    : null;

  return {
    valid,
    complete,
    issues,
    steps,
    firstUnprovedTransition,
    overallPassageRate:
      valid &&
      complete &&
      volumes.eventsSent !== null &&
      volumes.eventsSent > 0 &&
      volumes.sales !== null
        ? (volumes.sales / volumes.eventsSent) * 100
        : null,
    largestGap,
  };
}

function rateText(step: ConversionReconciliationStep) {
  if (step.rateStatus === "zero-base") {
    return "non calculable (l’étape précédente vaut zéro)";
  }
  if (step.rateStatus !== "available") return "inconnu";
  return formatRate(step.passageRate);
}

export function formatConversionReconciliationSummary(
  context: ConversionReconciliationContext,
  volumes: ConversionReconciliationVolumes,
  result = reconcileConversionChain(volumes),
) {
  const valueOr = (value: string, fallback: string) =>
    cleanSingleLine(value) || fallback;
  const followUpStatus =
    context.followUpComplete === null
      ? "inconnu"
      : context.followUpComplete
        ? "oui"
        : "non";
  const lines = [
    "SUIVI DES CONVERSIONS GOOGLE ADS",
    `Libellé : ${valueOr(context.label, "non renseigné")}`,
    `Début de la période : ${valueOr(context.startDate, "inconnu")}`,
    `Fin de la période : ${valueOr(context.endDate, "inconnue")}`,
    `Date d’observation : ${valueOr(context.observedAt, "inconnue")}`,
    `Tous les dossiers ont eu le temps prévu pour avancer : ${followUpStatus}`,
    "Règle de comparaison : utilisez les mêmes dates et les mêmes dossiers à chaque étape.",
    "Les essais internes et formulaires de test doivent être retirés des six volumes.",
    "",
  ];

  if (!result.valid) {
    lines.push(
      "Saisie à corriger :",
      ...result.issues.map((issue) => `- ${issue.message}`),
      "",
    );
  }

  for (const [index, step] of result.steps.entries()) {
    const volume = step.volume === null ? "inconnu" : String(step.volume);
    if (index === 0) {
      lines.push(`${step.label} : ${volume}`);
      continue;
    }

    lines.push(
      `${step.label} : ${volume} · écart : ${step.gapFromPrevious ?? "inconnu"} · taux de passage : ${rateText(step)}`,
    );
  }

  lines.push("");
  if (result.firstUnprovedTransition) {
    lines.push(result.firstUnprovedTransition.message);
  } else if (result.valid) {
    lines.push("Les cinq passages disposent chacun de leurs deux volumes.");
  }

  if (result.valid && result.complete) {
    lines.push(
      `Taux du premier au dernier nombre : ${volumes.eventsSent === 0 ? "non calculable (le premier nombre vaut zéro)" : formatRate(result.overallPassageRate)}`,
      result.largestGap
        ? `Plus grand écart en volume : ${result.largestGap.label} (${result.largestGap.gapFromPrevious} dossiers de moins que l’étape précédente).`
        : "Aucun écart positif n’apparaît dans les volumes saisis.",
    );
  }

  lines.push(
    "",
    context.followUpComplete === true
      ? "Tous les dossiers sont déclarés assez anciens pour avoir avancé jusqu’à leur issue connue."
      : context.followUpComplete === false
        ? "Certains dossiers peuvent encore devenir des devis ou des ventes : les derniers taux évolueront."
        : "Le temps laissé aux dossiers n’a pas encore été précisé.",
    "Un écart indique un point à vérifier ; il ne prouve pas une panne de mesure. Les définitions, les doublons, les exclusions, les délais ou le traitement commercial peuvent aussi l’expliquer.",
    "Cette synthèse ne contient volontairement ni coût par demande ni donnée personnelle.",
  );

  return lines.join("\n");
}

export function validateConversionCaseSheet(sheet: ConversionCaseSheet) {
  const issues: ConversionCaseIssue[] = [];

  if (!cleanSingleLine(sheet.caseId)) {
    issues.push({
      field: "caseId",
      message:
        "Ajoutez une référence interne qui ne contient aucune donnée personnelle.",
    });
  }
  if (!cleanSingleLine(sheet.responsibleRole)) {
    issues.push({
      field: "responsibleRole",
      message: "Indiquez la fonction responsable du prochain contrôle.",
    });
  }
  if (!cleanSingleLine(sheet.saleDefinition)) {
    issues.push({
      field: "saleDefinition",
      message:
        "Définissez ce que votre entreprise compte comme une vente : signature, paiement, réalisation ou autre règle précise.",
    });
  }
  if (!cleanSingleLine(sheet.nextAction)) {
    issues.push({
      field: "nextAction",
      message: "Écrivez la prochaine vérification ou action à réaliser.",
    });
  }

  const hasCompleteStageEvidence = CONVERSION_STAGES.some((stage) => {
    const entry = sheet.stages[stage.id];
    return Boolean(entry.date && cleanSingleLine(entry.evidence));
  });
  if (!hasCompleteStageEvidence) {
    issues.push({
      field: "stage",
      message: "Ajoutez au moins une étape avec sa date et sa preuve.",
    });
  }

  let lastKnownDate: { date: string; stageLabel: string } | null = null;
  for (const stage of CONVERSION_STAGES) {
    const entry = sheet.stages[stage.id];
    const date = entry.date;
    const evidence = cleanSingleLine(entry.evidence);
    const dateValid = date ? isIsoDate(date) : false;
    if (date && !dateValid) {
      issues.push({
        field: "stage",
        stageId: stage.id,
        message: `La date de l’étape « ${stage.label} » n’est pas valide.`,
      });
    }
    if ((date && !evidence) || (!date && evidence)) {
      issues.push({
        field: "stage",
        stageId: stage.id,
        message: `Pour l’étape « ${stage.label} », renseignez ensemble la date et la preuve, ou laissez les deux inconnues.`,
      });
    }
    if (dateValid) {
      if (lastKnownDate && date < lastKnownDate.date) {
        issues.push({
          field: "stage",
          stageId: stage.id,
          message: `La date de l’étape « ${stage.label} » (${date}) précède la dernière date connue, celle de « ${lastKnownDate.stageLabel} » (${lastKnownDate.date}).`,
        });
      } else {
        lastKnownDate = { date, stageLabel: stage.label };
      }
    }
  }

  const activeImportCheck = CASE_IMPORT_CHECKS.some((check) =>
    ["in-progress", "confirmed", "failed"].includes(
      sheet.importChecks[check.id].status,
    ),
  );
  if (
    activeImportCheck &&
    !cleanSingleLine(sheet.advertisingId) &&
    !cleanSingleLine(sheet.importReference)
  ) {
    issues.push({
      field: "identifier",
      message:
        "Ajoutez la référence interne vers l’identifiant publicitaire ou la référence propre à l’import, sans coller l’identifiant publicitaire réel.",
    });
  }

  let lastActiveImportDate: { date: string; label: string } | null = null;
  for (const [index, check] of CASE_IMPORT_CHECKS.entries()) {
    const entry = sheet.importChecks[check.id];
    const status = entry.status;
    const active = ["in-progress", "confirmed", "failed"].includes(status);
    const validEntryDate = entry.date ? isIsoDate(entry.date) : false;

    if (active) {
      if (!entry.date || !isIsoDate(entry.date)) {
        issues.push({
          field: "importCheck",
          importCheckId: check.id,
          message: `Ajoutez une date valide pour le contrôle « ${check.label} ».`,
        });
      }
      if (!cleanSingleLine(entry.evidence)) {
        issues.push({
          field: "importCheck",
          importCheckId: check.id,
          message: `Ajoutez une preuve ou une référence propre au contrôle « ${check.label} ».`,
        });
      }
      if (validEntryDate) {
        if (lastActiveImportDate && entry.date < lastActiveImportDate.date) {
          issues.push({
            field: "importCheck",
            importCheckId: check.id,
            message: `La date du contrôle « ${check.label} » (${entry.date}) précède celle du contrôle antérieur « ${lastActiveImportDate.label} » (${lastActiveImportDate.date}).`,
          });
        } else {
          lastActiveImportDate = { date: entry.date, label: check.label };
        }
      }
    } else if (entry.date || cleanSingleLine(entry.evidence)) {
      issues.push({
        field: "importCheck",
        importCheckId: check.id,
        message: `Le contrôle « ${check.label} » est ${status === "unknown" ? "inconnu" : "non applicable"} : effacez sa date et sa preuve, ou choisissez un autre état.`,
      });
    }

    if (index === 0 || !active) {
      continue;
    }

    const firstContradictoryPrevious = CASE_IMPORT_CHECKS.slice(0, index).find(
      (previous) =>
        ["failed", "not-applicable"].includes(
          sheet.importChecks[previous.id].status,
        ),
    );
    if (
      firstContradictoryPrevious &&
      ["in-progress", "confirmed"].includes(status)
    ) {
      issues.push({
        field: "importCheck",
        importCheckId: check.id,
        message: `« ${check.label} » ne peut pas être ${status === "in-progress" ? "en cours" : "confirmé"} après l’état certain « ${firstContradictoryPrevious.label} : ${sheet.importChecks[firstContradictoryPrevious.id].status === "failed" ? "échec" : "non applicable"} ».`,
      });
    }
  }

  if (sheet.margin.status === "unknown") {
    if (
      sheet.margin.date ||
      cleanSingleLine(sheet.margin.formula) ||
      sheet.margin.value !== null ||
      cleanSingleLine(sheet.margin.evidence)
    ) {
      issues.push({
        field: "margin",
        message:
          "La marge est indiquée comme inconnue : effacez sa date, sa formule, sa valeur et sa preuve, ou choisissez estimée ou réelle.",
      });
    }
  } else {
    if (!sheet.margin.date || !isIsoDate(sheet.margin.date)) {
      issues.push({
        field: "margin",
        message: "Ajoutez une date valide pour la marge.",
      });
    }
    if (!cleanSingleLine(sheet.margin.formula)) {
      issues.push({
        field: "margin",
        message: "Écrivez la formule utilisée pour calculer la marge.",
      });
    }
    if (sheet.margin.value === null || !Number.isFinite(sheet.margin.value)) {
      issues.push({
        field: "margin",
        message:
          "Indiquez la valeur de marge en euros, y compris si elle vaut zéro.",
      });
    }
    if (!cleanSingleLine(sheet.margin.evidence)) {
      issues.push({
        field: "margin",
        message: "Ajoutez la preuve ou la référence du calcul de marge.",
      });
    }
    if (sheet.margin.status === "actual") {
      const sale = sheet.stages.sales;
      if (
        !sale.date ||
        !isIsoDate(sale.date) ||
        !cleanSingleLine(sale.evidence)
      ) {
        issues.push({
          field: "margin",
          message:
            "Une marge réelle exige d’abord une vente avec sa date et sa preuve.",
        });
      } else if (
        isIsoDate(sheet.margin.date) &&
        sheet.margin.date < sale.date
      ) {
        issues.push({
          field: "margin",
          message:
            "La date d’une marge réelle ne peut pas précéder la date de la vente.",
        });
      }
    }
  }

  return { valid: issues.length === 0, issues };
}

export function formatConversionCaseSheet(sheet: ConversionCaseSheet) {
  const valueOr = (value: string, fallback = "inconnu") =>
    cleanSingleLine(value) || fallback;
  const importStatusLabel = (statusId: ConversionCaseImportCheckStatus) =>
    CASE_IMPORT_CHECK_STATUSES.find((status) => status.id === statusId)
      ?.label ?? "Inconnu";
  const marginStatus =
    CASE_MARGIN_STATUSES.find((status) => status.id === sheet.margin.status)
      ?.label ?? "Inconnue";
  const marginValue =
    sheet.margin.value === null || !Number.isFinite(sheet.margin.value)
      ? "inconnue"
      : new Intl.NumberFormat("fr-FR", {
          style: "currency",
          currency: "EUR",
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        }).format(sheet.margin.value);
  const firstUnprovedImportPassage = CASE_IMPORT_CHECKS.find(
    (check, index) =>
      index > 0 &&
      ["in-progress", "confirmed"].includes(
        sheet.importChecks[check.id].status,
      ) &&
      CASE_IMPORT_CHECKS.slice(0, index).some((previous) =>
        ["unknown", "in-progress"].includes(
          sheet.importChecks[previous.id].status,
        ),
      ),
  );
  const lines = [
    "FICHE DE SUIVI D’UN DOSSIER — SANS COORDONNÉE CLIENT",
    `Référence interne (case_id) : ${valueOr(sheet.caseId)}`,
    `Fonction responsable : ${valueOr(sheet.responsibleRole)}`,
    `Définition de la vente : ${valueOr(sheet.saleDefinition)}`,
    "",
    "ÉTAPES ET PREUVES",
  ];

  for (const stage of CONVERSION_STAGES) {
    const entry = sheet.stages[stage.id];
    lines.push(
      `${stage.label} — date : ${valueOr(entry.date)} · preuve : ${valueOr(entry.evidence)}`,
    );
  }

  lines.push(
    "",
    "IDENTIFIANTS CONSERVÉS SÉPARÉMENT",
    `Référence interne vers l’identifiant publicitaire : ${valueOr(sheet.advertisingId)}`,
    `Référence propre à l’import : ${valueOr(sheet.importReference)}`,
    "",
    "CONTRÔLES DE L’IMPORT",
    ...CASE_IMPORT_CHECKS.map((check) => {
      const entry = sheet.importChecks[check.id];
      const inactive = ["unknown", "not-applicable"].includes(entry.status);
      return `${check.label} — état : ${importStatusLabel(entry.status)} · date : ${inactive ? "inconnue" : valueOr(entry.date)} · preuve : ${inactive ? "inconnue" : valueOr(entry.evidence)}`;
    }),
    firstUnprovedImportPassage
      ? `Passage non prouvé : « ${firstUnprovedImportPassage.label} » dispose d’une preuve alors qu’au moins un contrôle antérieur reste inconnu ou en cours.`
      : "Aucun passage inconnu n’est masqué par un contrôle ultérieur.",
    "",
    "MARGE DU DOSSIER — HORS DES SIX VOLUMES",
    `Statut de la marge : ${marginStatus}`,
    `Date de la marge : ${sheet.margin.status === "unknown" ? "inconnue" : valueOr(sheet.margin.date)}`,
    `Formule de marge : ${sheet.margin.status === "unknown" ? "inconnue" : valueOr(sheet.margin.formula)}`,
    `Valeur de marge : ${sheet.margin.status === "unknown" ? "inconnue" : marginValue}`,
    `Preuve ou référence de marge : ${sheet.margin.status === "unknown" ? "inconnue" : valueOr(sheet.margin.evidence)}`,
    "",
    `Prochaine action : ${valueOr(sheet.nextAction)}`,
    "",
    "Ne copiez dans cette fiche ni nom, ni e-mail, ni téléphone, ni contenu libre permettant d’identifier une personne.",
    "Les essais internes et formulaires de test ne doivent jamais être comptés comme des dossiers commerciaux.",
  );

  return lines.join("\n");
}
