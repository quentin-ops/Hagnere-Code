import { describe, expect, it } from "vitest";
import {
  BUSINESS_SOFTWARE_NEED_SCHEMA_VERSION,
  BUSINESS_SOFTWARE_PROOF_IDS,
  BUSINESS_SOFTWARE_PROOF_LABELS,
  BUSINESS_SOFTWARE_NEED_VERSION,
  buildBusinessSoftwareNeedCsv,
  buildBusinessSoftwareNeedJson,
  buildBusinessSoftwareNeedNote,
  createFictitiousBusinessSoftwareNeedDossier,
  evaluateBusinessSoftwareNeed,
  parseBusinessSoftwareNeedJson,
  type BusinessSoftwareNeedDossier,
} from "./business-software-need-decision";

function clone(): BusinessSoftwareNeedDossier {
  return structuredClone(createFictitiousBusinessSoftwareNeedDossier());
}

function localDateAfter(days: number): string {
  const now = new Date();
  const shifted = new Date(
    Date.UTC(now.getFullYear(), now.getMonth(), now.getDate() + days),
  );
  return [
    shifted.getUTCFullYear(),
    String(shifted.getUTCMonth() + 1).padStart(2, "0"),
    String(shifted.getUTCDate()).padStart(2, "0"),
  ].join("-");
}

function readyDossier(): BusinessSoftwareNeedDossier {
  const dossier = clone();
  dossier.provenance = "DONNEES_REELLES";
  dossier.realDataConfirmed = true;
  dossier.sponsor = "Direction générale";
  dossier.processOwner = "Responsable opérations";
  dossier.situations.forEach((situation, index) => {
    situation.realSituationConfirmed = true;
    situation.evidenceRef = `PREUVE-REELLE-${index + 1}`;
  });
  dossier.options.forEach((option) => {
    option.realOptionConfirmed = true;
    option.samePerimeterConfirmed = "OUI";
    option.criticalCasesReplayed = "OUI";
    option.exitCost ??= 8_000;
  });
  for (const id of Object.keys(dossier.proofs) as Array<
    keyof typeof dossier.proofs
  >) {
    dossier.proofs[id] = {
      status: "VERIFIE",
      evidenceRef: `PREUVE-REELLE-${id}`,
      owner: "Responsable de preuve",
      verifiedOn: dossier.asOfDate,
    };
  }
  const pilotDates = [5, 10, 20, 25, 30, 60, 120].map(localDateAfter);
  dossier.pilotGates.forEach((gate, index) => {
    gate.casePopulation = `Population réelle du jalon ${index + 1}`;
    gate.baseline = `Baseline vérifiée du jalon ${index + 1}`;
    gate.stopCriterion = `Critère STOP vérifié du jalon ${index + 1}`;
    gate.continueCriterion = `Critère continuer vérifié du jalon ${index + 1}`;
    gate.rollbackPlan = `Retour arrière testé du jalon ${index + 1}`;
    gate.owner = `Responsable du jalon ${index + 1}`;
    gate.reviewOn = pilotDates[index] ?? "";
    gate.realGateConfirmed = true;
  });
  dossier.expiresOn = localDateAfter(121);
  dossier.humanDecisionConfirmed = true;
  dossier.reviewer = "Responsable de décision";
  dossier.reviewedOn = dossier.asOfDate;
  return dossier;
}

describe("diagnostic du besoin d’un logiciel métier", () => {
  it("conserve l’exemple fictif bloqué et calcule les trois situations", () => {
    const result = evaluateBusinessSoftwareNeed(clone());
    expect(result.state).toBe("INCOMPLET");
    expect(result.finalExportAllowed).toBe(false);
    expect(result.situations.map((item) => item.action)).toEqual([
      "CORRIGER_STANDARDISER",
      "INTEGRER_AUTOMATISER",
      "ETUDIER_SUR_MESURE",
    ]);
    expect(result.situations[1].annualActiveAndCorrectionHours).toBe(91);
    expect(result.situations[1].annualWaitHours).toBe(195);
  });

  it("ne laisse jamais un gain ou un volume compenser un STOP", () => {
    const dossier = clone();
    dossier.safety.restorableBackupProved = "NON";
    dossier.situations[0].frequencyPerMonth = 1_000_000;
    dossier.options[0].initialCost = 0;
    expect(evaluateBusinessSoftwareNeed(dossier).state).toBe(
      "SECURISER_D_ABORD",
    );
  });

  it("priorise le STOP même lorsqu’un autre champ est invalide", () => {
    const dossier = clone();
    dossier.safety.restorableBackupProved = "NON";
    dossier.options[0].initialCost = Number.POSITIVE_INFINITY;
    const result = evaluateBusinessSoftwareNeed(dossier);
    expect(result.state).toBe("SECURISER_D_ABORD");
    expect(result.invalidFields).toContain("options.0.initialCost");
    expect(result.finalExportAllowed).toBe(false);
  });

  it("refuse une version inconnue, les nombres impossibles et les doublons", () => {
    const dossier = clone();
    (dossier as { version: string }).version = "future";
    dossier.situations[0].frequencyPerMonth = Number.POSITIVE_INFINITY;
    dossier.situations[1].id = dossier.situations[0].id;
    const result = evaluateBusinessSoftwareNeed(dossier);
    expect(result.state).toBe("INCOMPLET");
    expect(result.invalidFields).toEqual(
      expect.arrayContaining([
        "version",
        "situations.id:duplicate",
        "situations.0.frequencyPerMonth",
      ]),
    );
  });

  it("refuse un tableau creux et une date future", () => {
    const dossier = clone();
    delete dossier.situations[1];
    dossier.situations[0].observedOn = "2026-07-29";
    const result = evaluateBusinessSoftwareNeed(dossier);
    expect(result.state).toBe("INCOMPLET");
    expect(result.invalidFields).toEqual(
      expect.arrayContaining(["situations.1", "situations.0.observedOn"]),
    );
  });

  it("route une règle changeante vers l’observation", () => {
    const dossier = clone();
    for (const situation of dossier.situations) {
      situation.ruleStability = "CHANGEANTE";
      situation.currentToolFinding = "DEFAILLANT";
      situation.repeatedManualTransfer = "NON";
      situation.standardTrialFinding = "NON_EXAMINE";
      situation.businessDifferentiator = "NON";
    }
    const result = evaluateBusinessSoftwareNeed(dossier);
    expect(result.eligibleActions).toEqual(["OBSERVER"]);
    expect(result.state).toBe("INCOMPLET");
  });

  it("route la correction lorsque les trois cas réussissent après réglage", () => {
    const dossier = clone();
    for (const situation of dossier.situations) {
      situation.currentToolFinding = "FONCTIONNE_APRES_CORRECTION";
      situation.repeatedManualTransfer = "NON";
    }
    const result = evaluateBusinessSoftwareNeed(dossier);
    expect(result.eligibleActions).toEqual(["CORRIGER_STANDARDISER"]);
    expect(result.state).toBe("INCOMPLET");
  });

  it("ne calcule aucun TCO si sortie ou périmètre restent inconnus", () => {
    const dossier = clone();
    dossier.options[0].exitCost = null;
    dossier.options[1].samePerimeterConfirmed = "ND";
    const result = evaluateBusinessSoftwareNeed(dossier);
    expect(result.options[0].tco12).toBeNull();
    expect(result.options[1].tco60).toBeNull();
    expect(result.state).toBe("INCOMPLET");
  });

  it("n’autorise la note finale qu’après preuves et confirmation humaines", () => {
    const dossier = readyDossier();
    const result = evaluateBusinessSoftwareNeed(dossier);
    expect(result.state).toBe("DECISION_HUMAINE");
    expect(result.finalExportAllowed).toBe(true);
  });

  it("bloque l’export final sans les sept jalons ni expiration future", () => {
    const dossier = readyDossier();
    dossier.pilotGates[2].realGateConfirmed = false;
    dossier.pilotGates[4].owner = "";
    dossier.expiresOn = "";

    const result = evaluateBusinessSoftwareNeed(dossier);
    expect(result.state).toBe("INCOMPLET");
    expect(result.finalExportAllowed).toBe(false);
    expect(result.missingEvidence).toEqual(
      expect.arrayContaining([
        expect.stringContaining("remplacement du jalon fictif non confirmé"),
        expect.stringContaining("owner réel absent"),
        "La date d’expiration de la décision est absente",
      ]),
    );
  });

  it("refuse des suivis seulement étiquetés +30/+90 mais datés à +1/+2", () => {
    const dossier = readyDossier();
    dossier.pilotGates[5].reviewOn = localDateAfter(31);
    dossier.pilotGates[6].reviewOn = localDateAfter(32);

    const result = evaluateBusinessSoftwareNeed(dossier);
    expect(result.state).toBe("INCOMPLET");
    expect(result.finalExportAllowed).toBe(false);
    expect(result.missingEvidence).toEqual(
      expect.arrayContaining([
        "Le suivi +30 doit être daté exactement 30 jours après la fin du pilote",
        "Le suivi +90 doit être daté exactement 90 jours après la fin du pilote",
      ]),
    );
  });

  it("autorise aussi une décision humaine complète quand toutes les voies convergent", () => {
    for (const target of ["CORRIGER", "OBSERVER"] as const) {
      const dossier = readyDossier();
      dossier.situations.forEach((situation) => {
        situation.currentToolFinding =
          target === "CORRIGER" ? "FONCTIONNE_APRES_CORRECTION" : "DEFAILLANT";
        situation.ruleStability =
          target === "OBSERVER" ? "CHANGEANTE" : "STABLE";
        situation.repeatedManualTransfer = "NON";
      });
      const result = evaluateBusinessSoftwareNeed(dossier);
      expect(result.eligibleActions).toEqual([
        target === "CORRIGER" ? "CORRIGER_STANDARDISER" : "OBSERVER",
      ]);
      expect(result.state).toBe("DECISION_HUMAINE");
      expect(result.finalExportAllowed).toBe(true);
    }
  });

  it("route l’observation sans inventer de test, mais garde l’export provisoire", () => {
    const dossier = readyDossier();
    dossier.situations.forEach((situation) => {
      situation.ruleStability = "CHANGEANTE";
      situation.currentToolFinding = "NON_TESTE";
      situation.standardTrialFinding = "NON_EXAMINE";
      situation.repeatedManualTransfer = "NON";
    });

    const result = evaluateBusinessSoftwareNeed(dossier);
    expect(result.eligibleActions).toEqual(["OBSERVER"]);
    expect(result.missingEvidence).toEqual(
      expect.arrayContaining([
        expect.stringContaining("outil actuel n’est pas testé"),
        expect.stringContaining("option standard plausible n’est pas examinée"),
      ]),
    );
    expect(result.state).toBe("INCOMPLET");
    expect(result.finalExportAllowed).toBe(false);
  });

  it("refuse les références dupliquées, les options fictives et une revue antérieure aux preuves", () => {
    const dossier = readyDossier();
    dossier.situations[1].evidenceRef = dossier.situations[0].evidenceRef;
    dossier.situations[0].id = "EXEMPLE_FICTIF_01";
    dossier.options[0].label = "Option fictive";
    dossier.proofs["users-rules"].evidenceRef =
      dossier.proofs["three-events"].evidenceRef;
    dossier.proofs["current-tool-test"].owner = "Auteur exemple";
    dossier.reviewedOn = "2026-07-27";

    const result = evaluateBusinessSoftwareNeed(dossier);
    expect(result.state).toBe("INCOMPLET");
    expect(result.finalExportAllowed).toBe(false);
    expect(result.invalidFields).toEqual(
      expect.arrayContaining([
        "situations.evidenceRef:duplicate",
        "options.0.label:fixture",
      ]),
    );
    expect(result.missingEvidence).toEqual(
      expect.arrayContaining([
        expect.stringContaining("références des preuves"),
        expect.stringContaining("responsable absent"),
      ]),
    );
    expect(result.blockedReasons).toEqual(
      expect.arrayContaining([
        expect.stringContaining("marqueurs EXEMPLE/FICTIF/FIXTURE"),
        expect.stringContaining("revue est antérieure"),
      ]),
    );
  });

  it("repère aussi un marqueur fictif séparé par des underscores", () => {
    const dossier = readyDossier();
    dossier.situations[0].id = "DOSSIER_EXEMPLE_FICTIF_01";

    const result = evaluateBusinessSoftwareNeed(dossier);
    expect(result.invalidFields).toEqual([]);
    expect(result.finalExportAllowed).toBe(false);
    expect(result.blockedReasons).toContain(
      "Des marqueurs EXEMPLE/FICTIF/FIXTURE subsistent dans le dossier",
    );
  });

  it("aligne les densités minimales, les fixtures concaténées et la borne de date du classeur", () => {
    const dossier = readyDossier();
    dossier.asOfDate = "1999-12-31";
    dossier.situations[0].id = "AB";
    dossier.situations[0].title = "Court";
    dossier.situations[0].evidenceRef = "12345";
    dossier.options[0].id = "XY";
    dossier.options[0].label = "ZZ";
    dossier.options[1].label = "DOSSIERFIXTURE01";

    const result = evaluateBusinessSoftwareNeed(dossier);
    expect(result.state).toBe("INCOMPLET");
    expect(result.invalidFields).toEqual(
      expect.arrayContaining([
        "asOfDate",
        "situations.0.id",
        "situations.0.title",
        "situations.0.evidenceRef",
        "options.0.id",
        "options.0.label",
        "options.1.label:fixture",
      ]),
    );
    expect(result.blockedReasons).toContain(
      "Des marqueurs EXEMPLE/FICTIF/FIXTURE subsistent dans le dossier",
    );
  });

  it("refuse les doublons insensibles à la casse dans situations et options", () => {
    const dossier = readyDossier();
    dossier.situations[1].id = dossier.situations[0].id.toLowerCase();
    dossier.situations[1].title = dossier.situations[0].title;
    dossier.options[1].id = dossier.options[0].id.toLowerCase();
    dossier.options[1].label = dossier.options[0].label;

    const result = evaluateBusinessSoftwareNeed(dossier);
    expect(result.state).toBe("INCOMPLET");
    expect(result.finalExportAllowed).toBe(false);
    expect(result.invalidFields).toEqual(
      expect.arrayContaining([
        "situations.id:duplicate",
        "situations.title:duplicate",
        "options.id:duplicate",
        "options.label:duplicate",
      ]),
    );
  });

  it("refuse un arrêté futur et une gouvernance nominale de façade", () => {
    const dossier = readyDossier();
    dossier.asOfDate = "2099-01-01";
    dossier.situations.forEach((situation) => {
      situation.observedOn = "2099-01-01";
    });
    for (const id of BUSINESS_SOFTWARE_PROOF_IDS) {
      dossier.proofs[id].verifiedOn = "2099-01-01";
    }
    dossier.reviewedOn = "2099-01-01";
    dossier.sponsor = "A";
    dossier.processOwner = "B";
    dossier.reviewer = "A";

    const result = evaluateBusinessSoftwareNeed(dossier);
    expect(result.state).toBe("INCOMPLET");
    expect(result.finalExportAllowed).toBe(false);
    expect(result.invalidFields).toContain("asOfDate");
    expect(result.blockedReasons).toEqual(
      expect.arrayContaining([
        "Le sponsor n’est pas nommé",
        "Le responsable métier n’est pas nommé",
        "Le réviseur n’est pas nommé",
      ]),
    );
  });

  it("exige un réviseur distinct et postérieur aux situations", () => {
    const dossier = readyDossier();
    dossier.reviewer = dossier.sponsor;
    dossier.reviewedOn = "2026-07-27";
    for (const id of BUSINESS_SOFTWARE_PROOF_IDS) {
      dossier.proofs[id].verifiedOn = "2026-07-27";
    }
    dossier.situations[0].observedOn = "2026-07-28";

    const result = evaluateBusinessSoftwareNeed(dossier);
    expect(result.state).toBe("INCOMPLET");
    expect(result.finalExportAllowed).toBe(false);
    expect(result.blockedReasons).toEqual(
      expect.arrayContaining([
        "Le réviseur doit être distinct du sponsor et du responsable métier",
        "La revue est antérieure à au moins une situation ou preuve vérifiée",
      ]),
    );
  });

  it("bloque les valeurs non testées et les confirmations globales de façade", () => {
    const dossier = clone();
    dossier.provenance = "DONNEES_REELLES";
    dossier.realDataConfirmed = true;
    dossier.sponsor = "Direction générale";
    dossier.processOwner = "Responsable opérations";
    dossier.situations.forEach((situation, index) => {
      situation.realSituationConfirmed = true;
      situation.evidenceRef = `PREUVE-REELLE-${index + 1}`;
    });
    dossier.options.forEach((option) => {
      option.realOptionConfirmed = true;
      option.samePerimeterConfirmed = "OUI";
      option.criticalCasesReplayed = "OUI";
      option.exitCost ??= 8_000;
    });
    for (const id of Object.keys(dossier.proofs) as Array<
      keyof typeof dossier.proofs
    >) {
      dossier.proofs[id] = {
        status: "VERIFIE",
        evidenceRef: `PREUVE-REELLE-${id}`,
        owner: "Responsable de preuve",
        verifiedOn: dossier.asOfDate,
      };
    }
    dossier.situations[0].currentToolFinding = "NON_TESTE";
    dossier.situations[0].standardTrialFinding = "NON_EXAMINE";
    dossier.humanDecisionConfirmed = true;
    dossier.reviewer = "Réviseur indépendant";
    dossier.reviewedOn = dossier.asOfDate;

    const result = evaluateBusinessSoftwareNeed(dossier);
    expect(result.state).toBe("INCOMPLET");
    expect(result.finalExportAllowed).toBe(false);
    expect(result.missingEvidence).toEqual(
      expect.arrayContaining([
        expect.stringContaining("currentToolFinding:not_tested"),
        expect.stringContaining("standardTrialFinding:not_examined"),
      ]),
    );
  });

  it("refuse les marqueurs fictifs et les confirmations par lot", () => {
    const dossier = clone();
    dossier.provenance = "DONNEES_REELLES";
    dossier.realDataConfirmed = true;
    dossier.humanDecisionConfirmed = true;
    dossier.reviewer = "Réviseur indépendant";
    dossier.reviewedOn = dossier.asOfDate;
    const result = evaluateBusinessSoftwareNeed(dossier);
    expect(result.finalExportAllowed).toBe(false);
    expect(result.blockedReasons).toEqual(
      expect.arrayContaining([
        expect.stringContaining("marqueurs EXEMPLE/FICTIF/FIXTURE"),
      ]),
    );
    expect(result.missingEvidence).toEqual(
      expect.arrayContaining([
        expect.stringContaining("remplacement de l’exemple non confirmé"),
        expect.stringContaining("coûts et périmètre réels non confirmés"),
      ]),
    );
  });

  it("neutralise les formules de tableur dans le CSV", () => {
    const dossier = clone();
    dossier.situations[0].title = '\t=HYPERLINK("https://example.test")';
    const csv = buildBusinessSoftwareNeedCsv(dossier);
    expect(csv).toContain(`"'\t=HYPERLINK(""https://example.test"")"`);
    expect(csv).not.toContain(`;"\t=HYPERLINK`);
  });

  it("rend tous les motifs du verrou dans la note de travail", () => {
    const dossier = readyDossier();
    dossier.reviewer = dossier.sponsor;
    dossier.options[0].label = "X";
    dossier.proofs["three-events"].status = "DECLARE";

    const note = buildBusinessSoftwareNeedNote(dossier);
    expect(note).toContain("Champs invalides : 1");
    expect(note).toContain("- INVALIDE : options.0.label");
    expect(note).toContain("- PREUVE : Trois situations datées : DECLARE");
    expect(note).toContain("- BLOCAGE : Le réviseur doit être distinct");
  });

  it("partage huit libellés de preuve canoniques avec l’interface et le classeur", () => {
    expect(Object.keys(BUSINESS_SOFTWARE_PROOF_LABELS)).toEqual([
      ...BUSINESS_SOFTWARE_PROOF_IDS,
    ]);
    expect(new Set(Object.values(BUSINESS_SOFTWARE_PROOF_LABELS)).size).toBe(8);
    expect(BUSINESS_SOFTWARE_PROOF_LABELS["current-tool-test"]).toBe(
      "Correction de l’existant testée",
    );
  });

  it("exporte et réimporte un JSON versionné sans perdre le dossier", () => {
    const dossier = clone();
    const imported = parseBusinessSoftwareNeedJson(
      buildBusinessSoftwareNeedJson(dossier),
    );
    expect(imported).toEqual(dossier);
    expect(() =>
      parseBusinessSoftwareNeedJson(
        JSON.stringify({ schema: "autre", schemaVersion: 1, dossier }),
      ),
    ).toThrow("Enveloppe JSON");
    expect(JSON.parse(buildBusinessSoftwareNeedJson(dossier))).toMatchObject({
      schemaVersion: BUSINESS_SOFTWARE_NEED_SCHEMA_VERSION,
    });
    expect(() =>
      parseBusinessSoftwareNeedJson(
        JSON.stringify({
          schema: "hagnere.business-software-need-dossier",
          schemaVersion: 1,
          dossier: {
            ...dossier,
            pilotGates: undefined,
            expiresOn: undefined,
          },
        }),
      ),
    ).toThrow("version 2 attendue");
  });

  it("refuse les booléens de façade et exige une option pour chaque voie", () => {
    const dossier = clone();
    (dossier as unknown as { realDataConfirmed: string }).realDataConfirmed =
      "OUI";
    dossier.options = dossier.options.filter(
      (option) => option.action === "CORRIGER_STANDARDISER",
    );
    const result = evaluateBusinessSoftwareNeed(dossier);
    expect(result.invalidFields).toContain("realDataConfirmed");
    expect(result.missingEvidence).toEqual(
      expect.arrayContaining([
        expect.stringContaining("Intégrer ou automatiser"),
        expect.stringContaining("fonction sur mesure"),
      ]),
    );
  });

  it("conserve la version canonique et les horizons 12/36/60", () => {
    const dossier = clone();
    expect(dossier.version).toBe(BUSINESS_SOFTWARE_NEED_VERSION);
    const option = evaluateBusinessSoftwareNeed(dossier).options[0];
    expect(option).toMatchObject({
      tco12: 9640,
      tco36: 17320,
      tco60: 25000,
    });
  });
});
