import { describe, expect, it } from "vitest";
import {
  MVP_VIBE_CODE_DEFAULT_AS_OF_DATE,
  MVP_VIBE_CODE_MAX_AGGREGATE_COST,
  MVP_VIBE_CODE_MAX_COST,
  MVP_VIBE_CODE_MAX_COUNT,
  MVP_VIBE_CODE_MAX_HOURS,
  MVP_VIBE_CODE_OUTAGE_FIELDS,
  MVP_VIBE_CODE_REQUIRED_PROOFS,
  MVP_VIBE_CODE_TAKEOVER_VERSION,
  MVP_VIBE_CODE_TCO_FIELDS,
  MVP_VIBE_CODE_TCO_HORIZONS,
  MVP_VIBE_CODE_TRAJECTORY_IDS,
  buildMvpVibeCodeFinalDecisionNote,
  buildMvpVibeCodeTakeoverCsv,
  buildMvpVibeCodeTakeoverSummary,
  calculateMvpVibeCodeOutage,
  calculateMvpVibeCodeTco,
  containsMvpVibeCodePotentialSecret,
  createEmptyMvpVibeCodeTakeoverDossier,
  createFictitiousMvpVibeCodeTakeoverDossier,
  evaluateMvpVibeCodeProof,
  evaluateMvpVibeCodeTakeover,
  parseMvpVibeCodeDecimal,
  parseMvpVibeCodeInteger,
  validateMvpVibeCodeProofDefinitions,
  type MvpVibeCodeProofStatus,
  type MvpVibeCodeTakeoverDossier,
  type MvpVibeCodeTcoField,
  type MvpVibeCodeTrajectoryId,
} from "./mvp-vibe-code-takeover";

function fictitious() {
  return createFictitiousMvpVibeCodeTakeoverDossier();
}

function confirmed() {
  const dossier = fictitious();
  dossier.isFictitiousExample = false;
  return dossier;
}

function proofDefinitionsFixture() {
  return MVP_VIBE_CODE_REQUIRED_PROOFS.map((proof) => ({
    ...proof,
    acceptedEvidence: [...proof.acceptedEvidence],
  }));
}

function parseCsv(csv: string): string[][] {
  return csv
    .replace(/^\uFEFF/, "")
    .split("\r\n")
    .map((line) => {
      const cells: string[] = [];
      let value = "";
      let quoted = false;
      for (let index = 0; index < line.length; index += 1) {
        const character = line[index];
        if (character === '"') {
          if (quoted && line[index + 1] === '"') {
            value += '"';
            index += 1;
          } else {
            quoted = !quoted;
          }
        } else if (character === ";" && !quoted) {
          cells.push(value);
          value = "";
        } else {
          value += character;
        }
      }
      cells.push(value);
      return cells;
    });
}

function dossierRebuiltFromCsv(csv: string): MvpVibeCodeTakeoverDossier {
  const dossier = createEmptyMvpVibeCodeTakeoverDossier();
  for (const row of parseCsv(csv).slice(1)) {
    const [type, element, field, , interpreted] = row;
    const value = interpreted === "ND" ? null : Number(interpreted);
    if (type === "TCO_ENTREE") {
      dossier.tco[element as MvpVibeCodeTrajectoryId][
        field as MvpVibeCodeTcoField
      ] = value;
    }
    if (type === "PANNE_ENTREE") {
      const definition = MVP_VIBE_CODE_OUTAGE_FIELDS.find(
        (candidate) => candidate.key === field,
      );
      if (definition) {
        dossier.outage[definition.key] = value;
      } else if (field === "probabilitySource" || field === "probabilityDate") {
        dossier.outage[field] = interpreted === "ND" ? "" : interpreted;
      }
    }
  }
  return dossier;
}

describe("référentiel des preuves de reprise d’un MVP", () => {
  it("expose exactement neuf domaines uniques", () => {
    expect(MVP_VIBE_CODE_REQUIRED_PROOFS).toHaveLength(9);
    expect(
      new Set(MVP_VIBE_CODE_REQUIRED_PROOFS.map((proof) => proof.id)).size,
    ).toBe(9);
  });

  it("sépare six domaines bloquants et trois domaines majeurs", () => {
    expect(
      MVP_VIBE_CODE_REQUIRED_PROOFS.filter(
        (proof) => proof.severity === "blocking",
      ),
    ).toHaveLength(6);
    expect(
      MVP_VIBE_CODE_REQUIRED_PROOFS.filter(
        (proof) => proof.severity === "major",
      ),
    ).toHaveLength(3);
  });

  it("documente une preuve attendue et plusieurs artefacts admissibles", () => {
    for (const proof of MVP_VIBE_CODE_REQUIRED_PROOFS) {
      expect(proof.expected.length).toBeGreaterThan(80);
      expect(proof.acceptedEvidence.length).toBeGreaterThanOrEqual(3);
    }
  });

  it("refuse de qualifier comme vérifiée une preuve sans responsable", () => {
    const definition = MVP_VIBE_CODE_REQUIRED_PROOFS[0];
    const evaluation = evaluateMvpVibeCodeProof(definition, {
      status: "verified",
      owner: "",
      checkedOn: MVP_VIBE_CODE_DEFAULT_AS_OF_DATE,
      evidenceRef: "BUILD-123456",
      naRationale: "",
      naApprover: "",
    });

    expect(evaluation.state).toBe("unresolved");
    expect(evaluation.reasons.join(" ")).toContain("responsable");
  });

  it("refuse une date impossible pour une preuve vérifiée", () => {
    const definition = MVP_VIBE_CODE_REQUIRED_PROOFS[0];
    const evaluation = evaluateMvpVibeCodeProof(definition, {
      status: "verified",
      owner: "Responsable",
      checkedOn: "2026-02-31",
      evidenceRef: "BUILD-123456",
      naRationale: "",
      naApprover: "",
    });

    expect(evaluation.state).toBe("unresolved");
    expect(evaluation.reasons.join(" ")).toContain("date ISO");
  });

  it("ne transforme jamais une déclaration en preuve", () => {
    const definition = MVP_VIBE_CODE_REQUIRED_PROOFS[0];
    const evaluation = evaluateMvpVibeCodeProof(definition, {
      status: "declared",
      owner: "Responsable",
      checkedOn: MVP_VIBE_CODE_DEFAULT_AS_OF_DATE,
      evidenceRef: "DECLARATION-123",
      naRationale: "",
      naApprover: "",
    });

    expect(evaluation.state).toBe("unresolved");
    expect(evaluation.reasons.join(" ")).toContain("déclaration");
  });

  it("accepte un NA autorisé seulement avec justification et approbateur", () => {
    const definition = MVP_VIBE_CODE_REQUIRED_PROOFS.find(
      (proof) => proof.id === "production-observability",
    );
    expect(definition).toBeDefined();
    const evaluation = evaluateMvpVibeCodeProof(definition!, {
      status: "NA",
      owner: "",
      checkedOn: "",
      evidenceRef: "",
      naRationale: "Prototype isolé sans aucun environnement de production",
      naApprover: "Direction produit",
    });

    expect(evaluation.state).toBe("resolved");
  });

  it.each([
    ["", "Direction produit"],
    ["Prototype", ""],
    ["ND", "Direction produit"],
  ])(
    "refuse un NA incomplet — justification %s, approbateur %s",
    (naRationale, naApprover) => {
      const definition = MVP_VIBE_CODE_REQUIRED_PROOFS.find(
        (proof) => proof.id === "production-observability",
      );
      const evaluation = evaluateMvpVibeCodeProof(definition!, {
        status: "NA",
        owner: "",
        checkedOn: "",
        evidenceRef: "",
        naRationale,
        naApprover,
      });

      expect(evaluation.state).toBe("invalid");
    },
  );
});

describe("validation stricte du référentiel JSON", () => {
  it("échoue fermé si le référentiel n’est pas un tableau", () => {
    expect(() => validateMvpVibeCodeProofDefinitions({})).toThrow(
      "exactement neuf",
    );
  });

  it("échoue fermé si le nombre de domaines dérive", () => {
    expect(() =>
      validateMvpVibeCodeProofDefinitions(
        proofDefinitionsFixture().slice(0, 8),
      ),
    ).toThrow("exactement neuf");
  });

  it("refuse un identifiant dupliqué", () => {
    const definitions = proofDefinitionsFixture();
    definitions[1].id = definitions[0].id;
    expect(() => validateMvpVibeCodeProofDefinitions(definitions)).toThrow(
      "identifiant unique",
    );
  });

  it("refuse toute sévérité autre que blocking ou major", () => {
    const definitions = proofDefinitionsFixture() as Array<
      Record<string, unknown>
    >;
    definitions[0].severity = "critical";
    expect(() => validateMvpVibeCodeProofDefinitions(definitions)).toThrow(
      "blocking ou major",
    );
  });

  it("refuse une définition ou liste d’artefacts incomplète", () => {
    const definitions = proofDefinitionsFixture();
    definitions[0].acceptedEvidence = [];
    expect(() => validateMvpVibeCodeProofDefinitions(definitions)).toThrow(
      "incomplet",
    );
  });

  it("fige profondément le référentiel validé", () => {
    expect(Object.isFrozen(MVP_VIBE_CODE_REQUIRED_PROOFS)).toBe(true);
    expect(Object.isFrozen(MVP_VIBE_CODE_REQUIRED_PROOFS[0])).toBe(true);
    expect(
      Object.isFrozen(MVP_VIBE_CODE_REQUIRED_PROOFS[0].acceptedEvidence),
    ).toBe(true);
  });
});

describe("portes STOP, INCOMPLET, COMPARABLE et DÉCISION HUMAINE", () => {
  it("garde un dossier entièrement vide en INCOMPLET", () => {
    const evaluation = evaluateMvpVibeCodeTakeover(
      createEmptyMvpVibeCodeTakeoverDossier(),
    );

    expect(evaluation.stage).toBe("INCOMPLET");
    expect(evaluation.canExportDraft).toBe(true);
    expect(evaluation.canExportFinal).toBe(false);
  });

  it.each([
    ["incident", "compromission"],
    ["dispute", "litige"],
    ["no-authority", "mandat"],
  ] as const)(
    "place le mode %s sous STOP prioritaire",
    (mode, expectedReason) => {
      const dossier = fictitious();
      dossier.context.mode = mode;
      const evaluation = evaluateMvpVibeCodeTakeover(dossier);

      expect(evaluation.stage).toBe("STOP");
      expect(evaluation.reasons.join(" ")).toContain(expectedReason);
      expect(evaluation.canExportFinal).toBe(false);
    },
  );

  it("place un domaine bloquant échoué sous STOP malgré tous les coûts", () => {
    const dossier = fictitious();
    dossier.proofs["source-build-artifact"].status = "failed";

    const evaluation = evaluateMvpVibeCodeTakeover(dossier);

    expect(evaluation.stage).toBe("STOP");
    expect(evaluation.tco.kind).toBe("known");
  });

  it("place un NA interdit sur un domaine bloquant sous STOP", () => {
    const dossier = fictitious();
    dossier.proofs["data-restore-continuity"] = {
      status: "NA",
      owner: "",
      checkedOn: "",
      evidenceRef: "",
      naRationale: "La direction ne souhaite pas tester la restauration",
      naApprover: "Direction",
    };

    expect(evaluateMvpVibeCodeTakeover(dossier).stage).toBe("STOP");
  });

  it("laisse une preuve bloquante déclarée en INCOMPLET", () => {
    const dossier = fictitious();
    dossier.proofs["access-secrets"].status = "declared";

    expect(evaluateMvpVibeCodeTakeover(dossier).stage).toBe("INCOMPLET");
  });

  it("atteint COMPARABLE avec une réserve majeure explicite", () => {
    const dossier = confirmed();
    dossier.proofs["supply-chain-licenses"].status = "declared";

    const evaluation = evaluateMvpVibeCodeTakeover(dossier);

    expect(evaluation.stage).toBe("COMPARABLE");
    expect(evaluation.canExportFinal).toBe(true);
    expect(evaluation.unresolvedMajorProofIds).toEqual([
      "supply-chain-licenses",
    ]);
  });

  it("atteint DÉCISION HUMAINE quand tout est résolu", () => {
    const evaluation = evaluateMvpVibeCodeTakeover(confirmed());

    expect(evaluation.stage).toBe("DECISION_HUMAINE");
    expect(evaluation.label).toBe("DÉCISION HUMAINE");
    expect(evaluation.canExportFinal).toBe(true);
  });

  it("accepte un NA majeur valide sans inventer une preuve", () => {
    const dossier = fictitious();
    dossier.proofs["production-observability"] = {
      status: "NA",
      owner: "",
      checkedOn: "",
      evidenceRef: "",
      naRationale: "Prototype isolé sans environnement de production",
      naApprover: "Direction produit",
    };

    expect(evaluateMvpVibeCodeTakeover(dossier).stage).toBe(
      "DECISION_HUMAINE",
    );
  });

  it("garde un NA majeur invalide comme réserve COMPARABLE", () => {
    const dossier = fictitious();
    dossier.proofs["migration-exit"] = {
      status: "NA",
      owner: "",
      checkedOn: "",
      evidenceRef: "",
      naRationale: "",
      naApprover: "",
    };

    expect(evaluateMvpVibeCodeTakeover(dossier).stage).toBe("COMPARABLE");
  });

  it("ne contient aucun score susceptible de compenser un STOP", () => {
    const evaluation = evaluateMvpVibeCodeTakeover(fictitious());

    expect(evaluation).not.toHaveProperty("score");
    expect(evaluation).not.toHaveProperty("weightedScore");
  });

  it("exige une référence, une date et un périmètre commun valides", () => {
    const dossier = fictitious();
    dossier.context.reference = "";
    dossier.context.evaluationDate = "2026-02-31";
    dossier.context.commonScope = "ND";

    const evaluation = evaluateMvpVibeCodeTakeover(dossier);

    expect(evaluation.stage).toBe("INCOMPLET");
    expect(evaluation.contextIssues).toHaveLength(3);
  });
});

describe("provenance persistante et cohérence temporelle", () => {
  it("verrouille la note finale d’un exemple fictif même complet", () => {
    const evaluation = evaluateMvpVibeCodeTakeover(fictitious());

    expect(evaluation.stage).toBe("DECISION_HUMAINE");
    expect(evaluation.containsUnconfirmedFictitiousValues).toBe(true);
    expect(evaluation.canExportDraft).toBe(true);
    expect(evaluation.canExportFinal).toBe(false);
    expect(buildMvpVibeCodeFinalDecisionNote(fictitious())).toBeNull();
  });

  it("autorise la note seulement après confirmation explicite de provenance", () => {
    const dossier = fictitious();
    dossier.isFictitiousExample = false;

    const evaluation = evaluateMvpVibeCodeTakeover(dossier);

    expect(evaluation.containsUnconfirmedFictitiousValues).toBe(false);
    expect(evaluation.canExportFinal).toBe(true);
    expect(buildMvpVibeCodeFinalDecisionNote(dossier)).toContain(
      "NOTE DE DÉCISION",
    );
  });

  it("utilise une date de référence déterministe par défaut", () => {
    expect(evaluateMvpVibeCodeTakeover(confirmed()).asOfDate).toBe(
      MVP_VIBE_CODE_DEFAULT_AS_OF_DATE,
    );
  });

  it("refuse une date d’évaluation postérieure à la référence", () => {
    const dossier = confirmed();
    dossier.context.evaluationDate = "2026-07-29";

    const evaluation = evaluateMvpVibeCodeTakeover(dossier);

    expect(evaluation.stage).toBe("INCOMPLET");
    expect(evaluation.contextIssues.join(" ")).toContain("postérieure");
  });

  it("refuse une preuve postérieure à l’évaluation", () => {
    const dossier = confirmed();
    dossier.proofs["source-build-artifact"].checkedOn = "2026-07-29";

    const evaluation = evaluateMvpVibeCodeTakeover(dossier, {
      asOfDate: "2026-07-30",
    });

    expect(evaluation.stage).toBe("INCOMPLET");
    expect(
      evaluation.proofEvaluations
        .find((proof) => proof.id === "source-build-artifact")
        ?.reasons.join(" "),
    ).toContain("postérieure");
  });

  it("applique aussi la référence par défaut à une preuve évaluée seule", () => {
    const evaluation = evaluateMvpVibeCodeProof(
      MVP_VIBE_CODE_REQUIRED_PROOFS[0],
      {
        status: "verified",
        owner: "Responsable",
        checkedOn: "2026-07-29",
        evidenceRef: "BUILD-123456",
        naRationale: "",
        naApprover: "",
      },
    );

    expect(evaluation.state).toBe("unresolved");
    expect(evaluation.reasons.join(" ")).toContain("postérieure");
  });

  it("refuse une date de probabilité postérieure à l’évaluation", () => {
    const dossier = confirmed();
    dossier.outage.probabilityDate = "2026-07-29";

    const evaluation = evaluateMvpVibeCodeTakeover(dossier, {
      asOfDate: "2026-07-30",
    });

    expect(evaluation.stage).toBe("INCOMPLET");
    expect(evaluation.outage.probabilityKind).toBe("invalid");
    expect(
      evaluation.outage.issues.map((issue) => issue.field).join(" "),
    ).toContain("probabilityDate");
  });

  it("applique aussi la référence par défaut au calcul de panne isolé", () => {
    const result = calculateMvpVibeCodeOutage({
      ...fictitious().outage,
      probabilityDate: "2026-07-29",
    });

    expect(result.probabilityKind).toBe("invalid");
    expect(result.kind).toBe("unknown");
  });

  it("accepte une référence future explicitement injectée et cohérente", () => {
    const dossier = confirmed();
    dossier.context.evaluationDate = "2030-01-15";
    for (const proof of Object.values(dossier.proofs)) {
      proof.checkedOn = "2030-01-15";
    }
    dossier.outage.probabilityDate = "2030-01-15";

    const evaluation = evaluateMvpVibeCodeTakeover(dossier, {
      asOfDate: "2030-01-15",
    });

    expect(evaluation.stage).toBe("DECISION_HUMAINE");
    expect(evaluation.canExportFinal).toBe(true);
  });

  it("échoue fermé si la référence injectée n’est pas une date ISO", () => {
    const evaluation = evaluateMvpVibeCodeTakeover(confirmed(), {
      asOfDate: "demain",
    });

    expect(evaluation.stage).toBe("INCOMPLET");
    expect(evaluation.contextIssues.join(" ")).toContain(
      "référence injectée",
    );
  });
});

describe("TCO cinq options à 12, 36 et 60 mois", () => {
  it("expose les cinq trajectoires et trois horizons attendus", () => {
    expect(MVP_VIBE_CODE_TRAJECTORY_IDS).toEqual([
      "conserve",
      "stabilise",
      "migrate",
      "rewrite",
      "stop",
    ]);
    expect(MVP_VIBE_CODE_TCO_HORIZONS).toEqual([12, 36, 60]);
  });

  it("recalcule exactement le cas fictif sans moyenne de marché", () => {
    const result = calculateMvpVibeCodeTco(fictitious().tco);

    expect(result.kind).toBe("known");
    expect(result.totals).toEqual({
      conserve: { 12: 50_000, 36: 110_000, 60: 170_000 },
      stabilise: { 12: 78_000, 36: 150_000, 60: 222_000 },
      migrate: { 12: 131_600, 36: 216_800, 60: 302_000 },
      rewrite: { 12: 224_000, 36: 332_000, 60: 440_000 },
      stop: { 12: 41_000, 36: 53_000, 60: 65_000 },
    });
    expect(result.cheapestByHorizon).toEqual({
      12: "stop",
      36: "stop",
      60: "stop",
    });
  });

  it("plafonne la double exploitation à l’horizon", () => {
    const dossier = fictitious();
    dossier.tco.conserve.doubleRunMonths = 60;
    dossier.tco.conserve.doubleRunMonthly = 100;

    const result = calculateMvpVibeCodeTco(dossier.tco);

    expect(result.totals.conserve[12]).toBe(51_200);
    expect(result.totals.conserve[36]).toBe(113_600);
    expect(result.totals.conserve[60]).toBe(176_000);
  });

  it("ne transforme jamais une cellule vide en zéro", () => {
    const dossier = fictitious();
    dossier.tco.conserve.oneOff = null;

    const result = calculateMvpVibeCodeTco(dossier.tco);

    expect(result.kind).toBe("unknown");
    expect(result.totals.conserve[12]).toBeNull();
    expect(result.cheapestByHorizon[12]).toBeNull();
  });

  it("refuse un coût négatif", () => {
    const dossier = fictitious();
    dossier.tco.stabilise.monthly = -1;

    expect(calculateMvpVibeCodeTco(dossier.tco).kind).toBe("unknown");
  });

  it("refuse un coût supérieur à la borne", () => {
    const dossier = fictitious();
    dossier.tco.migrate.oneOff = MVP_VIBE_CODE_MAX_COST + 1;

    expect(calculateMvpVibeCodeTco(dossier.tco).issues).toContainEqual(
      expect.objectContaining({ field: "tco.migrate.oneOff" }),
    );
  });

  it("refuse une durée de double exploitation décimale", () => {
    const dossier = fictitious();
    dossier.tco.rewrite.doubleRunMonths = 1.5;

    expect(calculateMvpVibeCodeTco(dossier.tco).issues).toContainEqual(
      expect.objectContaining({ field: "tco.rewrite.doubleRunMonths" }),
    );
  });

  it("exige également les zéros explicites de la trajectoire arrêt", () => {
    const dossier = fictitious();
    dossier.tco.stop.doubleRunMonthly = null;

    expect(calculateMvpVibeCodeTco(dossier.tco).kind).toBe("unknown");
  });

  it("échoue fermé lorsque les maxima individuels dépassent le plafond agrégé", () => {
    const dossier = fictitious();
    for (const trajectoryId of MVP_VIBE_CODE_TRAJECTORY_IDS) {
      for (const field of MVP_VIBE_CODE_TCO_FIELDS) {
        dossier.tco[trajectoryId][field.key] =
          field.key === "doubleRunMonths"
            ? 60
            : field.key === "internalOneOffHours" ||
                field.key === "internalMonthlyHours"
              ? MVP_VIBE_CODE_MAX_HOURS
              : MVP_VIBE_CODE_MAX_COST;
      }
    }

    const result = calculateMvpVibeCodeTco(dossier.tco);

    expect(result.kind).toBe("unknown");
    expect(result.totals.conserve[60]).toBeNull();
    expect(result.issues.some((issue) => issue.field.includes("aggregate"))).toBe(
      true,
    );
  });

  it("conserve une variation d’un centime dans une plage admise", () => {
    const dossier = fictitious();
    const before = calculateMvpVibeCodeTco(dossier.tco).totals.conserve[60]!;
    dossier.tco.conserve.exit! += 0.01;
    const after = calculateMvpVibeCodeTco(dossier.tco).totals.conserve[60]!;

    expect(after - before).toBeCloseTo(0.01, 8);
    expect(Number.isSafeInteger(after * 100)).toBe(true);
  });

  it("refuse les montants à plus de deux décimales", () => {
    const dossier = fictitious();
    dossier.tco.conserve.oneOff = 10.001;

    expect(calculateMvpVibeCodeTco(dossier.tco).issues).toContainEqual(
      expect.objectContaining({ field: "tco.conserve.oneOff" }),
    );
  });

  it("arrondit en centimes un produit heures par taux", () => {
    const dossier = fictitious();
    for (const field of MVP_VIBE_CODE_TCO_FIELDS) {
      dossier.tco.conserve[field.key] = 0;
    }
    dossier.tco.conserve.internalOneOffHours = 0.1;
    dossier.tco.conserve.internalHourlyRate = 0.1;

    expect(calculateMvpVibeCodeTco(dossier.tco).totals.conserve).toEqual({
      12: 0.01,
      36: 0.01,
      60: 0.01,
    });
  });

  it("maintient tout total connu sous le plafond agrégé prudent", () => {
    const result = calculateMvpVibeCodeTco(fictitious().tco);
    for (const totals of Object.values(result.totals)) {
      for (const value of Object.values(totals)) {
        expect(value).toBeLessThanOrEqual(MVP_VIBE_CODE_MAX_AGGREGATE_COST);
      }
    }
  });
});

describe("coût observable et probabilité nullable", () => {
  it("calcule séparément capacité et coût observable", () => {
    const result = calculateMvpVibeCodeOutage(fictitious().outage);

    expect(result).toMatchObject({
      kind: "known",
      probabilityKind: "known",
      capacityCost: 8_400,
      observableCost: 16_000,
      expectedAnnualCost: 4_000,
    });
  });

  it("laisse une probabilité absente à null sans appliquer 0 %", () => {
    const input = { ...fictitious().outage };
    input.annualProbabilityPercent = null;
    input.probabilitySource = "";
    input.probabilityDate = "";

    const result = calculateMvpVibeCodeOutage(input);

    expect(result.kind).toBe("known");
    expect(result.probabilityKind).toBe("not-provided");
    expect(result.expectedAnnualCost).toBeNull();
    expect(result.observableCost).toBe(16_000);
  });

  it("accepte un zéro explicite seulement avec source et date", () => {
    const input = { ...fictitious().outage, annualProbabilityPercent: 0 };

    const result = calculateMvpVibeCodeOutage(input);

    expect(result.kind).toBe("known");
    expect(result.probabilityKind).toBe("known");
    expect(result.expectedAnnualCost).toBe(0);
  });

  it("refuse une probabilité de 101 %", () => {
    const input = { ...fictitious().outage, annualProbabilityPercent: 101 };

    expect(calculateMvpVibeCodeOutage(input)).toMatchObject({
      kind: "unknown",
      probabilityKind: "invalid",
    });
  });

  it("refuse une probabilité sans source", () => {
    const input = { ...fictitious().outage, probabilitySource: "" };

    expect(calculateMvpVibeCodeOutage(input).issues).toContainEqual(
      expect.objectContaining({ field: "outage.probabilitySource" }),
    );
  });

  it("refuse une probabilité sans date", () => {
    const input = { ...fictitious().outage, probabilityDate: "" };

    expect(calculateMvpVibeCodeOutage(input).issues).toContainEqual(
      expect.objectContaining({ field: "outage.probabilityDate" }),
    );
  });

  it("refuse une source orpheline sans probabilité", () => {
    const input = {
      ...fictitious().outage,
      annualProbabilityPercent: null,
    };

    expect(calculateMvpVibeCodeOutage(input).issues).toContainEqual(
      expect.objectContaining({
        field: "outage.annualProbabilityPercent",
      }),
    );
  });

  it("refuse un nombre décimal de personnes affectées", () => {
    const input = { ...fictitious().outage, affectedPeople: 2.5 };

    expect(calculateMvpVibeCodeOutage(input).issues).toContainEqual(
      expect.objectContaining({ field: "outage.affectedPeople" }),
    );
  });

  it("refuse un montant négatif ou supérieur à la borne", () => {
    const negative = { ...fictitious().outage, providerCost: -1 };
    const huge = {
      ...fictitious().outage,
      communicationCost: MVP_VIBE_CODE_MAX_COST + 1,
    };

    expect(calculateMvpVibeCodeOutage(negative).kind).toBe("unknown");
    expect(calculateMvpVibeCodeOutage(huge).kind).toBe("unknown");
  });

  it("échoue fermé sur un coût de panne agrégé démesuré", () => {
    const result = calculateMvpVibeCodeOutage({
      ...fictitious().outage,
      outageHours: MVP_VIBE_CODE_MAX_HOURS,
      affectedPeople: MVP_VIBE_CODE_MAX_COUNT,
      loadedHourlyCost: MVP_VIBE_CODE_MAX_COST,
      lostContributionMargin: MVP_VIBE_CODE_MAX_COST,
      catchUpCost: MVP_VIBE_CODE_MAX_COST,
      providerCost: MVP_VIBE_CODE_MAX_COST,
      communicationCost: MVP_VIBE_CODE_MAX_COST,
      refundsPenalties: MVP_VIBE_CODE_MAX_COST,
    });

    expect(result.kind).toBe("unknown");
    expect(result.capacityCost).toBeNull();
    expect(result.observableCost).toBeNull();
    expect(result.issues).toContainEqual(
      expect.objectContaining({ field: "outage.aggregate" }),
    );
  });

  it("refuse un coût de panne à plus de deux décimales", () => {
    const result = calculateMvpVibeCodeOutage({
      ...fictitious().outage,
      loadedHourlyCost: 42.001,
    });

    expect(result.kind).toBe("unknown");
    expect(result.issues).toContainEqual(
      expect.objectContaining({ field: "outage.loadedHourlyCost" }),
    );
  });

  it("arrondit en centimes la capacité et l’espérance", () => {
    const result = calculateMvpVibeCodeOutage({
      outageHours: 0.1,
      affectedPeople: 1,
      loadedHourlyCost: 0.1,
      lostContributionMargin: 0,
      catchUpCost: 0,
      providerCost: 0,
      communicationCost: 0,
      refundsPenalties: 0,
      annualProbabilityPercent: 50,
      probabilitySource: "Hypothèse documentée de test",
      probabilityDate: MVP_VIBE_CODE_DEFAULT_AS_OF_DATE,
    });

    expect(result.capacityCost).toBe(0.01);
    expect(result.observableCost).toBe(0.01);
    expect(result.expectedAnnualCost).toBe(0.01);
  });
});

describe("parseurs de saisie française", () => {
  it("préserve 12, comme état intermédiaire", () => {
    expect(parseMvpVibeCodeDecimal("12,")).toEqual({
      state: "intermediate",
      value: null,
    });
  });

  it("accepte une virgule ou un point décimal", () => {
    expect(parseMvpVibeCodeDecimal("12,5")).toEqual({
      state: "valid",
      value: 12.5,
    });
    expect(parseMvpVibeCodeDecimal(".5")).toEqual({
      state: "valid",
      value: 0.5,
    });
  });

  it.each(["-1", "+1", "1e3", "12abc", "1.2.3", "NaN", "Infinity"])(
    "refuse la saisie partielle ou ambiguë %s",
    (raw) => {
      expect(parseMvpVibeCodeDecimal(raw).state).toBe("invalid");
    },
  );

  it("distingue vide et zéro explicite", () => {
    expect(parseMvpVibeCodeDecimal("")).toEqual({
      state: "empty",
      value: null,
    });
    expect(parseMvpVibeCodeDecimal("0")).toEqual({
      state: "valid",
      value: 0,
    });
  });

  it("interdit les décimales dans un entier", () => {
    expect(parseMvpVibeCodeInteger("2,5")).toEqual({
      state: "invalid",
      value: null,
    });
    expect(parseMvpVibeCodeInteger("25")).toEqual({
      state: "valid",
      value: 25,
    });
  });
});

describe("détection best-effort et blocage des secrets", () => {
  it.each([
    "sk-proj-abcdefghijklmnopqrstuvwxyz",
    "AKIAIOSFODNN7EXAMPLE",
    ["xoxb", "1234567890", "abcdefghijklmnop"].join("-"),
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.signatureABC",
    "ghp_abcdefghijklmnopqrstuvwxyz1234567890",
    "github_pat_abcdefghijklmnopqrstuvwxyz_1234567890",
    "Bearer abcdefghijklmnopqrstuvwxyz",
    "-----BEGIN PRIVATE KEY-----",
    "postgresql://admin:motdepassefort@db.example.test/app",
    "password=motdepassefort",
    "access_token: abcdefghijklmnopqrstuvwxyz",
  ])("détecte le candidat secret %s", (candidate) => {
    expect(containsMvpVibeCodePotentialSecret(candidate)).toBe(true);
  });

  it.each([
    "TICKET-ACCESS-SECRETS-123",
    "équipe secrétariat produit",
    "tokenisation des actifs",
  ])("ne bloque pas la référence non sensible %s", (reference) => {
    expect(containsMvpVibeCodePotentialSecret(reference)).toBe(false);
  });

  it("inspecte aussi une saisie numérique brute non interprétable", () => {
    const dossier = confirmed();
    dossier.rawInputs!.tco.conserve.oneOff =
      "token=abcdefghijklmnopqrstuvwxyz";
    dossier.tco.conserve.oneOff = null;

    const evaluation = evaluateMvpVibeCodeTakeover(dossier);

    expect(evaluation.hasPotentialSecrets).toBe(true);
    expect(evaluation.secretCandidateFields).toContain(
      "rawInputs.tco.conserve.oneOff",
    );
    expect(evaluation.canExportDraft).toBe(false);
  });
});

describe("exports vivants, prudents et anti-injection", () => {
  it("exporte toujours un brouillon incomplet clairement marqué", () => {
    const dossier = createEmptyMvpVibeCodeTakeoverDossier();
    const summary = buildMvpVibeCodeTakeoverSummary(dossier);
    const csv = buildMvpVibeCodeTakeoverCsv(dossier);

    expect(summary).toContain("BROUILLON EXPORTABLE");
    expect(summary).toContain("Statut : INCOMPLET");
    expect(csv).toContain("BROUILLON INCOMPLET OU STOP");
  });

  it("verrouille la note finale tant que le dossier est incomplet", () => {
    expect(
      buildMvpVibeCodeFinalDecisionNote(
        createEmptyMvpVibeCodeTakeoverDossier(),
      ),
    ).toBeNull();
  });

  it("déverrouille la note au stade COMPARABLE", () => {
    const dossier = confirmed();
    dossier.proofs["supply-chain-licenses"].status =
      "declared" as MvpVibeCodeProofStatus;

    const note = buildMvpVibeCodeFinalDecisionNote(dossier);

    expect(note).toContain("NOTE DE DÉCISION");
    expect(note).toContain("Statut : COMPARABLE");
  });

  it("marque le cas fictif sans le présenter comme marché", () => {
    const summary = buildMvpVibeCodeTakeoverSummary(fictitious());

    expect(summary).toContain("EXEMPLE FICTIF");
    expect(summary).toContain("jamais une moyenne");
  });

  it("régénère le CSV depuis les valeurs courantes", () => {
    const dossier = fictitious();
    const before = buildMvpVibeCodeTakeoverCsv(dossier);
    dossier.tco.conserve.oneOff = 12_345;
    const after = buildMvpVibeCodeTakeoverCsv(dossier);

    expect(after).not.toBe(before);
    expect(after).toContain("52345");
  });

  it("neutralise une formule CSV placée dans une référence", () => {
    const dossier = fictitious();
    dossier.context.reference = "=HYPERLINK(\"https://example.test\")";

    const csv = buildMvpVibeCodeTakeoverCsv(dossier);

    expect(csv).toContain("'=HYPERLINK");
  });

  it("bloque les exports lorsqu’un candidat secret est détecté", () => {
    const dossier = fictitious();
    dossier.proofs["source-build-artifact"].evidenceRef =
      "sb_secret_abcdefghijklmnopqrstuvwxyz";

    const summary = buildMvpVibeCodeTakeoverSummary(dossier);
    const csv = buildMvpVibeCodeTakeoverCsv(dossier);

    expect(summary).toContain("EXPORT BLOQUÉ");
    expect(csv).toContain("EXPORT_BLOQUE");
    expect(summary).not.toContain("sb_secret_abcdefghijklmnopqrstuvwxyz");
    expect(csv).not.toContain("sb_secret_abcdefghijklmnopqrstuvwxyz");
    expect(evaluateMvpVibeCodeTakeover(dossier).canExportDraft).toBe(false);
  });

  it("rappelle que le coût minimum n’est pas une recommandation", () => {
    const note = buildMvpVibeCodeFinalDecisionNote(confirmed());

    expect(note).toContain(
      "La trajectoire la moins coûteuse n’est pas automatiquement la trajectoire recommandée.",
    );
  });

  it("exporte version, référence temporelle, mode et date d’évaluation", () => {
    const csv = buildMvpVibeCodeTakeoverCsv(confirmed());

    expect(csv).toContain(MVP_VIBE_CODE_TAKEOVER_VERSION);
    expect(csv).toContain(MVP_VIBE_CODE_DEFAULT_AS_OF_DATE);
    expect(csv).toContain('"mode";"normal"');
    expect(csv).toContain('"date_evaluation"');
  });

  it("exporte les six métadonnées de chacune des neuf preuves", () => {
    const rows = parseCsv(buildMvpVibeCodeTakeoverCsv(confirmed()));
    const proofRows = rows.filter((row) => row[0] === "PREUVE");

    expect(proofRows).toHaveLength(9 * 6);
    expect(
      proofRows
        .filter((row) => row[1] === "source-build-artifact")
        .map((row) => row[2]),
    ).toEqual([
      "status",
      "owner",
      "checkedOn",
      "evidenceRef",
      "naRationale",
      "naApprover",
    ]);
  });

  it("exporte les 45 entrées TCO et les onze entrées de panne", () => {
    const rows = parseCsv(buildMvpVibeCodeTakeoverCsv(confirmed()));

    expect(rows.filter((row) => row[0] === "TCO_ENTREE")).toHaveLength(45);
    expect(rows.filter((row) => row[0] === "TCO_RESULTAT")).toHaveLength(15);
    expect(rows.filter((row) => row[0] === "PANNE_ENTREE")).toHaveLength(11);
    expect(rows.filter((row) => row[0] === "PANNE_RESULTAT")).toHaveLength(3);
  });

  it("permet de reconstruire et recalculer exactement TCO et panne", () => {
    const source = confirmed();
    const csv = buildMvpVibeCodeTakeoverCsv(source);
    const rebuilt = dossierRebuiltFromCsv(csv);

    expect(calculateMvpVibeCodeTco(rebuilt.tco)).toEqual(
      calculateMvpVibeCodeTco(source.tco),
    );
    expect(calculateMvpVibeCodeOutage(rebuilt.outage)).toEqual(
      calculateMvpVibeCodeOutage(source.outage),
    );
  });

  it("préserve distinctement la saisie brute intermédiaire et le null interprété", () => {
    const dossier = confirmed();
    dossier.rawInputs!.tco.conserve.doubleRunMonths = "12,";
    dossier.tco.conserve.doubleRunMonths = null;

    const row = parseCsv(buildMvpVibeCodeTakeoverCsv(dossier)).find(
      (candidate) =>
        candidate[0] === "TCO_ENTREE" &&
        candidate[1] === "conserve" &&
        candidate[2] === "doubleRunMonths",
    );

    expect(row?.[3]).toBe("12,");
    expect(row?.[4]).toBe("ND");
    expect(row?.[6]).toBe("INTERMEDIATE");
  });
});
