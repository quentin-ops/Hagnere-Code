export const SITE_AID_PREDIAGNOSIS_KIND = "hagnere-code-site-aid-prediagnosis";
export const SITE_AID_PREDIAGNOSIS_VERSION =
  "site-aid-prediagnosis-r25-2026-07-26";
export const SITE_AID_PREDIAGNOSIS_TRANSFER_EVENT =
  "site-aid-prediagnosis-transfer";
export const SITE_AID_PREDIAGNOSIS_DIRTY_EVENT = "site-aid-prediagnosis-dirty";
export const SITE_AID_PREDIAGNOSIS_ITEM_COUNT = 14;
export const SITE_AID_PREDIAGNOSIS_MAX_EVIDENCE_LENGTH = 4_000;

export type SiteAidPreDiagnosisStatus = "documented" | "confirm" | "no";

export function siteAidPreDiagnosisCorrectionTargetId(
  questionId: string,
  status: Extract<SiteAidPreDiagnosisStatus, "confirm" | "no">,
): string {
  return status === "no"
    ? `site-aid-prediagnosis-${questionId}-no`
    : `site-aid-prediagnosis-${questionId}-evidence`;
}

export interface SiteAidPreDiagnosisDefinition {
  id: string;
  label: string;
  question: string;
  evidenceToConfirm: string;
  negativeAction: string;
}

export interface SiteAidPreDiagnosisItem {
  id: string;
  label: string;
  status: SiteAidPreDiagnosisStatus;
  evidenceToConfirm: string;
  declaredEvidence: string;
}

export interface SiteAidPreDiagnosisTransfer {
  kind: typeof SITE_AID_PREDIAGNOSIS_KIND;
  version: typeof SITE_AID_PREDIAGNOSIS_VERSION;
  transferredAt: string;
  items: SiteAidPreDiagnosisItem[];
}

export const SITE_AID_PREDIAGNOSIS_DEFINITIONS: readonly SiteAidPreDiagnosisDefinition[] =
  [
    {
      id: "source",
      label: "Source officielle actuelle",
      question:
        "Avez-vous retrouvé le dispositif sur le site de l’organisme qui le décide ?",
      evidenceToConfirm:
        "Page officielle actuelle : URL directe, organisme et date de consultation.",
      negativeAction:
        "Écartez la fiche ancienne ou secondaire, puis recherchez le dispositif sur le site de l’autorité qui le décide.",
    },
    {
      id: "territory",
      label: "Implantation",
      question:
        "Votre commune, votre EPCI ou votre région d’implantation figure-t-il explicitement dans le territoire couvert ?",
      evidenceToConfirm:
        "Passage officiel qui nomme le territoire admissible et preuve de l’établissement concerné.",
      negativeAction:
        "Écartez cette piste pour cet établissement ou demandez à l’autorité quel dispositif couvre votre territoire.",
    },
    {
      id: "activity",
      label: "Activité",
      question:
        "Votre activité et votre clientèle sont-elles explicitement admises, sans exclusion sectorielle applicable ?",
      evidenceToConfirm:
        "Article ou réponse écrite qui couvre l’activité et traite les exclusions sectorielles.",
      negativeAction:
        "Écartez la piste ou faites confirmer par écrit l’absence d’exclusion pour votre activité exacte.",
    },
    {
      id: "legal-status",
      label: "Forme ou statut",
      question:
        "Votre forme juridique ou votre statut professionnel fait-il partie des bénéficiaires admis ?",
      evidenceToConfirm:
        "Liste officielle des formes et statuts admis, avec le passage applicable à votre structure.",
      negativeAction:
        "Recherchez un dispositif ouvert à votre forme juridique ou demandez une confirmation écrite de l’autorité.",
    },
    {
      id: "business-age",
      label: "Ancienneté",
      question:
        "La date de création ou de reprise respecte-t-elle les limites d’ancienneté du dispositif ?",
      evidenceToConfirm:
        "Règle d’ancienneté et date officielle de création ou de reprise utilisée pour le contrôle.",
      negativeAction:
        "Écartez la piste si la fenêtre est fermée ou recherchez un dispositif correspondant à l’âge réel de l’entreprise.",
    },
    {
      id: "business-size",
      label: "Taille de l’entreprise",
      question:
        "L’effectif, le chiffre d’affaires et, si nécessaire, le périmètre des entreprises liées respectent-ils les seuils ?",
      evidenceToConfirm:
        "Seuils officiels, effectif, chiffre d’affaires et périmètre d’entreprises retenu.",
      negativeAction:
        "Recalculez la taille au bon périmètre puis recherchez un dispositif adapté si un seuil est dépassé.",
    },
    {
      id: "expenses",
      label: "Dépenses admissibles",
      question:
        "Chaque ligne utile du devis est-elle explicitement admise, avec une assiette et un traitement de TVA identifiés ?",
      evidenceToConfirm:
        "Classement ligne par ligne du devis, article d’admissibilité, assiette et règle de TVA.",
      negativeAction:
        "Retirez ou reventilez les lignes exclues et demandez une confirmation écrite pour toute ligne ambiguë.",
    },
    {
      id: "timing",
      label: "Calendrier et ordre des actes",
      question:
        "Les dates prévues de signature, d’acompte et de commencement respectent-elles l’acte déclencheur autorisé ?",
      evidenceToConfirm:
        "Calendrier officiel et preuve de l’acte qui peut intervenir avant dépôt, accusé ou décision.",
      negativeAction:
        "Décalez tout engagement irréversible jusqu’à l’étape autorisée par le règlement.",
    },
    {
      id: "cash",
      label: "Trésorerie sans aide",
      question:
        "Pouvez-vous payer la facture TTC et les frais avec une aide budgétée à 0 € ?",
      evidenceToConfirm:
        "Plan de trésorerie TTC daté, aide à 0 € avant notification et marge de sécurité.",
      negativeAction:
        "Redimensionnez, phasez ou financez le projet sans compter l’aide avant de vous engager.",
    },
    {
      id: "payment-timing",
      label: "Délai et destinataire du versement",
      question:
        "Le délai probable et le destinataire réel du versement sont-ils documentés ?",
      evidenceToConfirm:
        "Règle de versement : délai, avance ou remboursement, paiement à l’entreprise ou directement au fournisseur.",
      negativeAction:
        "Conservez l’aide à 0 € dans le budget et demandez le calendrier et le destinataire par écrit.",
    },
    {
      id: "documents",
      label: "Pièces à fournir",
      question:
        "La liste exacte des justificatifs à déposer est-elle disponible et chaque pièce peut-elle être produite à temps ?",
      evidenceToConfirm:
        "Liste officielle datée des justificatifs, formats, signatures et échéances.",
      negativeAction:
        "Établissez la liste des pièces manquantes et obtenez-les avant le dépôt.",
    },
    {
      id: "post-award",
      label: "Obligations après attribution",
      question:
        "Les livrables, indicateurs, contrôles, durées de conservation et risques de restitution sont-ils identifiés ?",
      evidenceToConfirm:
        "Décision, convention ou règlement décrivant les obligations après attribution et après versement.",
      negativeAction:
        "Demandez la pièce applicable et chiffrez la capacité à respecter chaque obligation avant de poursuivre.",
    },
    {
      id: "legal-basis",
      label: "Base juridique",
      question:
        "Le texte qualifie-t-il la base de l’aide et, le cas échéant, le règlement de minimis exact ?",
      evidenceToConfirm:
        "Décision ou règlement citant la base juridique et la référence européenne exacte lorsqu’elle s’applique.",
      negativeAction:
        "Ne présumez aucun régime : demandez à l’autorité la base juridique et sa référence exacte.",
    },
    {
      id: "cumulation",
      label: "Cumul et aides antérieures",
      question:
        "Les aides déjà octroyées, leur État membre d’octroi, l’entreprise unique et les dépenses partagées sont-ils recensés ?",
      evidenceToConfirm:
        "Registre des aides : autorité, date d’octroi, valeur juridique ou ESB, État membre de l’autorité, entreprise unique et assiette.",
      negativeAction:
        "Reconstituez le registre au bon périmètre et obtenez une confirmation écrite des cumuls avant tout engagement.",
    },
  ];

const DEFINITION_BY_ID = new Map(
  SITE_AID_PREDIAGNOSIS_DEFINITIONS.map((definition) => [
    definition.id,
    definition,
  ]),
);

function isValidUtcIso(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?Z$/.test(value)) {
    return false;
  }
  const parsed = new Date(value);
  if (!Number.isFinite(parsed.getTime())) return false;
  const canonical = parsed.toISOString();
  const normalized = value.includes(".")
    ? `${value.replace(/Z$/, "").replace(/\.(\d{1,3})$/, (_, digits: string) => `.${digits.padEnd(3, "0")}`)}Z`
    : value.replace(/Z$/, ".000Z");
  return canonical === normalized;
}

function assertPlainObject(
  value: unknown,
  path: string,
): Record<string, unknown> {
  if (
    typeof value !== "object" ||
    value === null ||
    Array.isArray(value) ||
    Object.getPrototypeOf(value) !== Object.prototype
  ) {
    throw new TypeError(`${path} doit être un objet JSON simple.`);
  }
  return value as Record<string, unknown>;
}

function assertExactKeys(
  value: Record<string, unknown>,
  keys: readonly string[],
  path: string,
) {
  const allowed = new Set(keys);
  const unknown = Object.keys(value).find((key) => !allowed.has(key));
  if (unknown) throw new TypeError(`${path}.${unknown} est inconnu.`);
  const missing = keys.find((key) => !(key in value));
  if (missing) throw new TypeError(`${path}.${missing} est requis.`);
}

function boundedText(value: unknown, path: string): string {
  if (
    typeof value !== "string" ||
    value.length > SITE_AID_PREDIAGNOSIS_MAX_EVIDENCE_LENGTH
  ) {
    throw new TypeError(
      `${path} doit être un texte de ${SITE_AID_PREDIAGNOSIS_MAX_EVIDENCE_LENGTH} caractères maximum.`,
    );
  }
  return value;
}

export function createEmptySiteAidPreDiagnosis(): SiteAidPreDiagnosisTransfer {
  return {
    kind: SITE_AID_PREDIAGNOSIS_KIND,
    version: SITE_AID_PREDIAGNOSIS_VERSION,
    transferredAt: "",
    items: SITE_AID_PREDIAGNOSIS_DEFINITIONS.map((definition) => ({
      id: definition.id,
      label: definition.label,
      status: "confirm",
      evidenceToConfirm: definition.evidenceToConfirm,
      declaredEvidence: "",
    })),
  };
}

export function createSiteAidPreDiagnosisTransfer(
  statuses: Readonly<Record<string, SiteAidPreDiagnosisStatus>>,
  declaredEvidence: Readonly<Record<string, string>>,
  transferredAt: string,
): SiteAidPreDiagnosisTransfer {
  if (!isValidUtcIso(transferredAt)) {
    throw new TypeError("transferredAt doit être une date UTC ISO valide.");
  }
  return parseSiteAidPreDiagnosis({
    ...createEmptySiteAidPreDiagnosis(),
    transferredAt,
    items: SITE_AID_PREDIAGNOSIS_DEFINITIONS.map((definition) => ({
      id: definition.id,
      label: definition.label,
      status:
        statuses[definition.id] === "documented" &&
        !(declaredEvidence[definition.id] ?? "").trim()
          ? "confirm"
          : (statuses[definition.id] ?? "confirm"),
      evidenceToConfirm: definition.evidenceToConfirm,
      declaredEvidence: declaredEvidence[definition.id] ?? "",
    })),
  });
}

export function parseSiteAidPreDiagnosis(
  value: unknown,
): SiteAidPreDiagnosisTransfer {
  const envelope = assertPlainObject(value, "prediagnosis");
  assertExactKeys(
    envelope,
    ["kind", "version", "transferredAt", "items"],
    "prediagnosis",
  );
  if (envelope.kind !== SITE_AID_PREDIAGNOSIS_KIND) {
    throw new TypeError("prediagnosis.kind est invalide.");
  }
  if (envelope.version !== SITE_AID_PREDIAGNOSIS_VERSION) {
    throw new TypeError("prediagnosis.version est invalide.");
  }
  if (
    typeof envelope.transferredAt !== "string" ||
    (envelope.transferredAt !== "" && !isValidUtcIso(envelope.transferredAt))
  ) {
    throw new TypeError(
      "prediagnosis.transferredAt doit être vide ou une date UTC ISO valide.",
    );
  }
  if (
    !Array.isArray(envelope.items) ||
    envelope.items.length !== SITE_AID_PREDIAGNOSIS_ITEM_COUNT
  ) {
    throw new TypeError(
      `prediagnosis.items doit contenir exactement ${SITE_AID_PREDIAGNOSIS_ITEM_COUNT} éléments.`,
    );
  }

  const seen = new Set<string>();
  const items = envelope.items.map((rawItem, index) => {
    const path = `prediagnosis.items[${index}]`;
    const canonicalDefinition = SITE_AID_PREDIAGNOSIS_DEFINITIONS[index];
    const item = assertPlainObject(rawItem, path);
    assertExactKeys(
      item,
      ["id", "label", "status", "evidenceToConfirm", "declaredEvidence"],
      path,
    );
    if (typeof item.id !== "string" || !DEFINITION_BY_ID.has(item.id)) {
      throw new TypeError(`${path}.id est inconnu.`);
    }
    if (item.id !== canonicalDefinition.id) {
      throw new TypeError(
        `${path}.id doit être « ${canonicalDefinition.id} » pour conserver l’ordre canonique.`,
      );
    }
    if (seen.has(item.id)) {
      throw new TypeError(`${path}.id est dupliqué.`);
    }
    seen.add(item.id);
    if (
      item.status !== "documented" &&
      item.status !== "confirm" &&
      item.status !== "no"
    ) {
      throw new TypeError(`${path}.status est invalide.`);
    }
    const status: SiteAidPreDiagnosisStatus = item.status;
    const label = boundedText(item.label, `${path}.label`);
    if (label !== canonicalDefinition.label) {
      throw new TypeError(
        `${path}.label ne correspond pas au libellé canonique.`,
      );
    }
    const evidenceToConfirm = boundedText(
      item.evidenceToConfirm,
      `${path}.evidenceToConfirm`,
    );
    if (evidenceToConfirm !== canonicalDefinition.evidenceToConfirm) {
      throw new TypeError(
        `${path}.evidenceToConfirm ne correspond pas à la preuve canonique.`,
      );
    }
    const normalizedDeclaredEvidence = boundedText(
      item.declaredEvidence,
      `${path}.declaredEvidence`,
    );
    if (status === "documented" && !normalizedDeclaredEvidence.trim()) {
      throw new TypeError(
        `${path}.declaredEvidence est requis pour « documented ».`,
      );
    }
    return {
      id: canonicalDefinition.id,
      label: canonicalDefinition.label,
      status,
      evidenceToConfirm: canonicalDefinition.evidenceToConfirm,
      declaredEvidence: normalizedDeclaredEvidence,
    };
  });

  if (
    SITE_AID_PREDIAGNOSIS_DEFINITIONS.some(
      (definition) => !seen.has(definition.id),
    )
  ) {
    throw new TypeError("prediagnosis.items ne couvre pas les 14 contrôles.");
  }

  return {
    kind: SITE_AID_PREDIAGNOSIS_KIND,
    version: SITE_AID_PREDIAGNOSIS_VERSION,
    transferredAt: envelope.transferredAt,
    items,
  };
}
