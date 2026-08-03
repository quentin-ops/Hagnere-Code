import { describe, expect, it } from "vitest";
import {
  assessMvpContract,
  createAccordiaAutonomousPaymentFailure,
  createAccordiaCapacityStress,
  createAccordiaCriticalDeferred,
  createAccordiaExample,
  createAccordiaFirstClientDeferredAsNon,
  createAccordiaUnknownManualDuration,
  createEmptyMvpContract,
  MAX_MANUAL_MINUTES,
  MAX_OCCURRENCES_PER_CLIENT,
  MAX_PILOT_CLIENTS,
  mvpFamilyIds,
  mvpFamilyLabels,
  mvpTreatments,
  type MvpCapabilityInput,
  type MvpContractInput,
} from "./mvp-contract-engine";

function replaceCapability(
  input: MvpContractInput,
  id: MvpCapabilityInput["id"],
  update: (capability: MvpCapabilityInput) => MvpCapabilityInput,
): MvpContractInput {
  return {
    ...input,
    capabilities: input.capabilities.map((capability) =>
      capability.id === id ? update(capability) : capability,
    ),
  };
}

const accordiaHorizon =
  "Du 7 septembre au 18 octobre 2026 inclus — période fictive du pilote Accordia";

function expectedAccordiaEquation(
  minutes: string,
  occurrences: string,
  clients: string,
  total: string,
) {
  return `${minutes} min × ${occurrences} occurrence(s)/client sur toute la période × ${clients} client(s) = ${total} min sur toute la même période « ${accordiaHorizon} »`;
}

describe("assessMvpContract", () => {
  it("exposes the seven exact families, five treatments and no score", () => {
    expect(mvpFamilyIds).toEqual([
      "valueJourney",
      "accountsAccess",
      "dataContinuity",
      "salesEntitlements",
      "helpIncidents",
      "administrationOperations",
      "measurementExit",
    ]);
    expect(mvpTreatments).toEqual([
      "CONSTRUIRE",
      "MANUEL",
      "INTEGRER",
      "REPORTER",
      "INCONNU",
    ]);

    const result = assessMvpContract(createEmptyMvpContract());
    expect(result).not.toHaveProperty("score");
    expect(result.markdown.toLocaleLowerCase("fr-FR")).not.toContain("score");
  });

  it("keeps every empty value unknown and starts with the required-decisions STOP", () => {
    const result = assessMvpContract(createEmptyMvpContract());

    expect(result.status).toBe("STOP_REQUIRED_DECISIONS_UNKNOWN");
    expect(result.missingDecisions).toContain("Format du test à vérifier");
    expect(result.missingDecisions).toContain(
      "Période couverte par le test à vérifier",
    );
    expect(result.missingDecisions).toContain(
      "Nombre de clients du test à vérifier",
    );
    expect(result.manualLoadMinutes).toBeNull();
    expect(result.manualCapacityMinutes).toBeNull();
    expect(result.manualEquations).toHaveLength(0);
    expect(result.markdown).toContain("À vérifier");
    expect(result.markdown).not.toContain("À vérifier min");
    expect(result.markdown).not.toContain("Clients du test : 0");
    expect(result.fieldErrors["mvp-test-horizon"]).toEqual([
      "Période couverte par le test à vérifier",
    ]);
  });

  it("replays the fully fictitious assisted-pilot example and all equations", () => {
    const result = assessMvpContract(createAccordiaExample());

    expect(result.status).toBe("PILOT_CANDIDATE_FOR_REVIEW");
    expect(createAccordiaExample().testHorizon).toBe(accordiaHorizon);
    expect(result.missingDecisions).toEqual([]);
    expect(result.criticalDeferredCapabilities).toEqual([]);
    expect(result.unboundedManualOperations).toEqual([]);
    expect(
      result.manualEquations.map((equation) => equation.totalMinutes),
    ).toEqual(["72", "60", "45", "60"]);
    expect(result.manualLoadMinutes).toBe("237");
    expect(result.manualLoadState).toBe("COMPLETE");
    expect(result.manualCapacityMinutes).toBe("300");
    expect(result.remainingCapacityMinutes).toBe("63");
    expect(result.humanReviewRequired).toBe(true);
    expect(result.markdown).toContain(
      expectedAccordiaEquation("12", "2", "3", "72"),
    );
    expect(result.markdown).toContain(
      "Les incidents imprévisibles ne valent jamais zéro",
    );
  });

  it("requires a named test period before comparing occurrences and capacity", () => {
    const result = assessMvpContract({
      ...createAccordiaExample(),
      testHorizon: "",
    });

    expect(result.status).toBe("STOP_REQUIRED_DECISIONS_UNKNOWN");
    expect(result.missingDecisions).toContain(
      "Période couverte par le test à vérifier",
    );
    expect(result.manualLoadState).toBe("PARTIAL_UNUSABLE");
    expect(result.manualLoadMinutes).toBeNull();
    expect(result.remainingCapacityMinutes).toBeNull();
    expect(result.manualEquations).toHaveLength(4);
    expect(
      result.manualEquations.every(
        (equation) => equation.calculationStatus === "INEXPLOITABLE",
      ),
    ).toBe(true);
    expect(result.markdown).toContain(
      "Période couverte par le test : À vérifier",
    );
    expect(result.markdown).toContain(
      "Les occurrences par client et la capacité totale couvrent l’ensemble de cette même période, sans conversion implicite.",
    );
  });

  it("keeps capacity unusable when the period is unknown without manual operations", () => {
    const accordia = createAccordiaExample();
    const result = assessMvpContract({
      ...accordia,
      testHorizon: "",
      capabilities: accordia.capabilities.map((capability) =>
        capability.treatment === "MANUEL"
          ? { ...capability, treatment: "INTEGRER" as const }
          : capability,
      ),
    });

    expect(result.status).toBe("STOP_REQUIRED_DECISIONS_UNKNOWN");
    expect(result.manualEquations).toEqual([]);
    expect(result.manualLoadState).toBe("PARTIAL_UNUSABLE");
    expect(result.manualLoadMinutes).toBeNull();
    expect(result.remainingCapacityMinutes).toBeNull();
  });

  it("stops when the same declared load is applied to five clients", () => {
    const result = assessMvpContract(createAccordiaCapacityStress());

    expect(result.status).toBe("STOP_MANUAL_CAPACITY_EXCEEDED");
    expect(result.manualLoadMinutes).toBe("395");
    expect(result.manualCapacityMinutes).toBe("300");
    expect(result.remainingCapacityMinutes).toBe("-95");
    expect(result.nextAction).not.toMatch(/automatiser automatiquement/i);
  });

  it("replays an exact doubling of client volume without changing the factors", () => {
    const result = assessMvpContract({
      ...createAccordiaExample(),
      pilotClientCount: "6",
    });

    expect(result.status).toBe("STOP_MANUAL_CAPACITY_EXCEEDED");
    expect(result.manualLoadMinutes).toBe("474");
    expect(result.remainingCapacityMinutes).toBe("-174");
  });

  it("gives a critical deferral priority over a lower manual load", () => {
    const result = assessMvpContract(createAccordiaCriticalDeferred());

    expect(result.status).toBe("STOP_CRITICAL_CAPABILITY_DEFERRED");
    expect(result.manualLoadMinutes).toBe("177");
    expect(result.criticalDeferredCapabilities).toEqual([
      "Report critique : Données et continuité est nécessaire au test",
    ]);
  });

  it("preserves an unknown owner and duration instead of turning them into zero", () => {
    const result = assessMvpContract(createAccordiaUnknownManualDuration());

    expect(result.status).toBe("STOP_MANUAL_OPERATION_UNBOUNDED");
    expect(result.unboundedManualOperations).toContain(
      "Comptes et accès : responsable à vérifier",
    );
    expect(result.unboundedManualOperations).toContain(
      "Comptes et accès : minutes par occurrence à vérifier",
    );
    expect(
      result.manualEquations.some((item) => item.familyId === "accountsAccess"),
    ).toBe(true);
    expect(
      result.manualEquations.find((item) => item.familyId === "accountsAccess"),
    ).toEqual(
      expect.objectContaining({
        calculationStatus: "INEXPLOITABLE",
        totalMinutes: null,
        minutesPerOccurrence: "À vérifier",
        occurrencesPerClient: "2",
        clients: "3",
      }),
    );
    expect(result.manualLoadState).toBe("PARTIAL_UNUSABLE");
    expect(result.manualLoadMinutes).toBe("165");
    expect(result.remainingCapacityMinutes).toBeNull();
    expect(result.markdown).toContain(
      "État de la somme : partiel/inexploitable",
    );
    expect(result.markdown).toContain("responsable à vérifier");
  });

  it("stops an autonomous purchase whose payment failure has no procedure", () => {
    const result = assessMvpContract(createAccordiaAutonomousPaymentFailure());

    expect(result.status).toBe("STOP_REQUIRED_DECISIONS_UNKNOWN");
    expect(result.missingDecisions).toContain(
      "Échec de paiement autonome : détection, information, droits et reprise à vérifier",
    );
  });

  it("accepts autonomous purchase only after states and failure handling are explicit", () => {
    const input = createAccordiaAutonomousPaymentFailure();
    const result = assessMvpContract({
      ...input,
      autonomousPurchaseFailureProcedure:
        "Détecter l’échec, ne pas ouvrir les droits, informer l’acheteur et proposer une reprise contrôlée.",
    });

    expect(result.status).toBe("PILOT_CANDIDATE_FOR_REVIEW");
    expect(result.missingDecisions).toEqual([]);
  });

  it("blocks autonomous purchase when sales entitlements is NON plus REPORTER despite complete states", () => {
    const payment = createAccordiaAutonomousPaymentFailure();
    const completeAutonomousPurchase = {
      ...payment,
      autonomousPurchaseFailureProcedure:
        "Détecter l’échec, informer l’acheteur, garder les droits fermés et permettre une reprise contrôlée.",
    };
    const input = replaceCapability(
      completeAutonomousPurchase,
      "salesEntitlements",
      (capability) => ({
        ...capability,
        necessaryForTest: "NON",
        treatment: "REPORTER",
      }),
    );
    const result = assessMvpContract(input);

    expect(result.status).toBe("STOP_REQUIRED_DECISIONS_UNKNOWN");
    expect(result.missingDecisions).toContain(
      "Vente et droits associés : la nécessité doit être « OUI » pour un achat autonome",
    );
    expect(result.criticalDeferredCapabilities).toEqual([]);
    expect(
      result.fieldErrors["mvp-capability-salesEntitlements-necessary"],
    ).toContain(
      "Vente et droits associés : la nécessité doit être « OUI » pour un achat autonome",
    );
  });

  it("distinguishes prototype, assisted pilot and first production client", () => {
    const example = createAccordiaExample();

    expect(
      assessMvpContract({
        ...example,
        testFormat: "PROTOTYPE_SANS_PRODUCTION",
      }).status,
    ).toBe("TEST_FORMAT_NOT_PRODUCTION");
    expect(assessMvpContract(example).status).toBe(
      "PILOT_CANDIDATE_FOR_REVIEW",
    );
    expect(
      assessMvpContract({
        ...example,
        testFormat: "PREMIER_CLIENT_PRODUCTION",
      }).status,
    ).toBe("FIRST_CLIENT_CANDIDATE_FOR_REVIEW");
  });

  it("allows an explicitly non-critical capability to be deferred in an assisted pilot", () => {
    const input = replaceCapability(
      createAccordiaExample(),
      "measurementExit",
      (capability) => ({
        ...capability,
        necessaryForTest: "NON",
        treatment: "REPORTER",
      }),
    );

    expect(assessMvpContract(input).status).toBe("PILOT_CANDIDATE_FOR_REVIEW");
  });

  it("blocks NON plus REPORTER for every responsibility domain in first-client production", () => {
    for (const id of mvpFamilyIds) {
      const input = replaceCapability(
        {
          ...createAccordiaExample(),
          testFormat: "PREMIER_CLIENT_PRODUCTION",
        },
        id,
        (capability) => ({
          ...capability,
          necessaryForTest: "NON",
          treatment: "REPORTER",
        }),
      );
      const result = assessMvpContract(input);

      expect(result.status, id).toBe("STOP_CRITICAL_CAPABILITY_DEFERRED");
      expect(result.criticalDeferredCapabilities, id).toContain(
        `Report interdit en production : ${mvpFamilyLabels[id]}, même si la famille est déclarée non nécessaire`,
      );
    }

    expect(
      assessMvpContract(createAccordiaFirstClientDeferredAsNon()).status,
    ).toBe("STOP_CRITICAL_CAPABILITY_DEFERRED");
  });

  it("stops when an integrated third party has no detection and recovery path", () => {
    const input = replaceCapability(
      createAccordiaExample(),
      "administrationOperations",
      (capability) => ({ ...capability, failureRecovery: "" }),
    );
    const result = assessMvpContract(input);

    expect(result.status).toBe("STOP_REQUIRED_DECISIONS_UNKNOWN");
    expect(result.missingDecisions).toContain(
      "Administration et exploitation : reprise sur échec à vérifier",
    );
  });

  it("rejects zero for a declared manual operation but accepts zero capacity as a decision", () => {
    const zeroMinutes = replaceCapability(
      createAccordiaExample(),
      "accountsAccess",
      (capability) => ({
        ...capability,
        manualOperation: {
          ...capability.manualOperation,
          minutesPerOccurrence: "0",
        },
      }),
    );
    const zeroCapacity = {
      ...createAccordiaExample(),
      manualCapacityMinutes: "0",
    };

    expect(assessMvpContract(zeroMinutes).status).toBe(
      "STOP_MANUAL_OPERATION_UNBOUNDED",
    );
    expect(assessMvpContract(zeroCapacity).status).toBe(
      "STOP_MANUAL_CAPACITY_EXCEEDED",
    );
    expect(assessMvpContract(zeroCapacity).manualCapacityMinutes).toBe("0");
  });

  it("rejects negatives, non-integer clients, excessive precision and bounds before conversion", () => {
    const cases: [Partial<MvpContractInput>, string][] = [
      [
        { pilotClientCount: "-1" },
        "Nombre de clients du test invalide : utilisez des chiffres positifs et un point décimal",
      ],
      [
        { pilotClientCount: "1.5" },
        "Nombre de clients du test invalide : un nombre entier est requis",
      ],
      [
        { manualCapacityMinutes: "0.0001" },
        "Capacité manuelle disponible invalide : au maximum 3 décimales",
      ],
      [
        { pilotClientCount: String(MAX_PILOT_CLIENTS + 1) },
        "Nombre de clients du test invalide : maximum " +
          MAX_PILOT_CLIENTS.toLocaleString("fr-FR"),
      ],
      [
        { manualCapacityMinutes: String(MAX_MANUAL_MINUTES + 1) },
        "Capacité manuelle disponible invalide : maximum " +
          MAX_MANUAL_MINUTES.toLocaleString("fr-FR"),
      ],
    ];

    for (const [update, expected] of cases) {
      const result = assessMvpContract({
        ...createAccordiaExample(),
        ...update,
      });
      expect(result.status).toBe("STOP_REQUIRED_DECISIONS_UNKNOWN");
      expect(result.missingDecisions).toContain(expected);
    }

    const excessiveOccurrences = replaceCapability(
      createAccordiaExample(),
      "accountsAccess",
      (capability) => ({
        ...capability,
        manualOperation: {
          ...capability.manualOperation,
          occurrencesPerClient: String(MAX_OCCURRENCES_PER_CLIENT + 1),
        },
      }),
    );
    expect(
      assessMvpContract(excessiveOccurrences).unboundedManualOperations,
    ).toContain(
      "Comptes et accès : occurrences par client invalide : maximum " +
        MAX_OCCURRENCES_PER_CLIENT.toLocaleString("fr-FR"),
    );
  });

  it("marks a client-invalid manual sum partial and keeps every raw factor visible", () => {
    const result = assessMvpContract({
      ...createAccordiaExample(),
      pilotClientCount: "1.5",
    });

    expect(result.status).toBe("STOP_REQUIRED_DECISIONS_UNKNOWN");
    expect(result.manualLoadState).toBe("PARTIAL_UNUSABLE");
    expect(result.manualLoadMinutes).toBeNull();
    expect(result.remainingCapacityMinutes).toBeNull();
    expect(result.manualEquations).toHaveLength(4);
    expect(result.manualEquations[0]).toEqual(
      expect.objectContaining({
        minutesPerOccurrence: "12",
        occurrencesPerClient: "2",
        clients: "1.5",
        calculationStatus: "INEXPLOITABLE",
        totalMinutes: null,
      }),
    );
    expect(result.manualEquations[0]?.equation).toContain(
      "12 min × 2 occurrence(s)/client sur toute la période × 1.5 client(s) = calcul inexploitable",
    );
    expect(result.markdown).toContain(
      "État de la somme : partiel/inexploitable",
    );
    expect(result.fieldErrors["mvp-client-count"]).toContain(
      "Nombre de clients du test invalide : un nombre entier est requis",
    );
    expect(result.fieldErrors["mvp-manual-capacity"]).toBeUndefined();
    expect(
      result.fieldErrors["mvp-capability-accountsAccess-manual-occurrences"],
    ).toBeUndefined();
  });

  it("trims surrounding spaces but rejects commas, scientific notation and non-finite numbers", () => {
    const spaced = assessMvpContract({
      ...createAccordiaExample(),
      pilotClientCount: " 3 ",
      manualCapacityMinutes: " 300.000 ",
    });
    expect(spaced.status).toBe("PILOT_CANDIDATE_FOR_REVIEW");
    expect(spaced.manualLoadMinutes).toBe("237");
    expect(spaced.manualCapacityMinutes).toBe("300");

    for (const invalid of [
      "3,5",
      "1e3",
      Number.NaN,
      Number.POSITIVE_INFINITY,
    ]) {
      const result = assessMvpContract({
        ...createAccordiaExample(),
        manualCapacityMinutes: invalid,
      });
      expect(result.status, String(invalid)).toBe(
        "STOP_REQUIRED_DECISIONS_UNKNOWN",
      );
      expect(result.missingDecisions, String(invalid)).toContain(
        "Capacité manuelle disponible invalide : utilisez des chiffres positifs et un point décimal",
      );
    }
  });

  it("keeps the maximum-factor product exact without overflowing Number", () => {
    let input = createAccordiaExample();
    for (const id of [
      "dataContinuity",
      "salesEntitlements",
      "helpIncidents",
    ] as const) {
      input = replaceCapability(input, id, (capability) => ({
        ...capability,
        treatment: "INTEGRER",
      }));
    }
    input = replaceCapability(input, "accountsAccess", (capability) => ({
      ...capability,
      manualOperation: {
        ...capability.manualOperation,
        minutesPerOccurrence: String(MAX_MANUAL_MINUTES),
        occurrencesPerClient: String(MAX_OCCURRENCES_PER_CLIENT),
      },
    }));

    const result = assessMvpContract({
      ...input,
      pilotClientCount: String(MAX_PILOT_CLIENTS),
      manualCapacityMinutes: String(MAX_MANUAL_MINUTES),
    });

    expect(result.status).toBe("STOP_MANUAL_CAPACITY_EXCEEDED");
    expect(result.manualLoadMinutes).toBe("1000000000000000000");
    expect(result.remainingCapacityMinutes).toBe("-999999999999000000");
  });

  it("multiplies decimal factors exactly instead of exposing binary rounding", () => {
    let input = createAccordiaExample();
    for (const id of [
      "dataContinuity",
      "salesEntitlements",
      "helpIncidents",
    ] as const) {
      input = replaceCapability(input, id, (capability) => ({
        ...capability,
        treatment: "INTEGRER",
      }));
    }
    input = replaceCapability(input, "accountsAccess", (capability) => ({
      ...capability,
      manualOperation: {
        ...capability.manualOperation,
        minutesPerOccurrence: "0.1",
        occurrencesPerClient: "0.2",
      },
    }));

    const result = assessMvpContract({
      ...input,
      pilotClientCount: "3",
      manualCapacityMinutes: "1",
    });

    expect(result.manualEquations).toHaveLength(1);
    expect(result.manualEquations[0]?.equation).toBe(
      expectedAccordiaEquation("0.1", "0.2", "3", "0.06"),
    );
    expect(result.manualLoadMinutes).toBe("0.06");
    expect(result.remainingCapacityMinutes).toBe("0.94");
  });

  it("enforces the documented STOP priority order", () => {
    const unknownAndDeferred = createAccordiaCriticalDeferred();
    const requiredFirst = assessMvpContract({
      ...unknownAndDeferred,
      proofEvent: "",
    });
    expect(requiredFirst.status).toBe("STOP_REQUIRED_DECISIONS_UNKNOWN");

    const deferredAndUnbounded = replaceCapability(
      createAccordiaCriticalDeferred(),
      "accountsAccess",
      (capability) => ({
        ...capability,
        owner: "",
      }),
    );
    expect(assessMvpContract(deferredAndUnbounded).status).toBe(
      "STOP_CRITICAL_CAPABILITY_DEFERRED",
    );

    const unboundedAndExceeded = replaceCapability(
      createAccordiaCapacityStress(),
      "accountsAccess",
      (capability) => ({
        ...capability,
        owner: "",
      }),
    );
    expect(assessMvpContract(unboundedAndExceeded).status).toBe(
      "STOP_MANUAL_OPERATION_UNBOUNDED",
    );
  });

  it("rejects duplicate or missing family identifiers", () => {
    const example = createAccordiaExample();
    const duplicate = {
      ...example,
      capabilities: [
        ...example.capabilities.slice(0, -1),
        { ...example.capabilities[0]! },
      ],
    };
    const result = assessMvpContract(duplicate);

    expect(result.status).toBe("STOP_REQUIRED_DECISIONS_UNKNOWN");
    expect(result.missingDecisions).toContain(
      "Mesure et sortie : famille absente",
    );
    expect(result.missingDecisions).toContain(
      "Familles du contrat invalides : doublon ou identifiant non reconnu",
    );
  });

  it("sanitizes multiline Markdown cells without hiding unknowns", () => {
    const input = createAccordiaExample();
    const result = assessMvpContract({
      ...input,
      soldOutcome: "  Décider | sans courriel\r\n avec une preuve  ",
    });

    expect(result.markdown).toContain(
      "Résultat vendu : Décider \\| sans courriel avec une preuve",
    );
    expect(result.status).toBe("PILOT_CANDIDATE_FOR_REVIEW");
  });

  it("exports every decision needed to reconstruct a successful autonomous verdict", () => {
    const payment = createAccordiaAutonomousPaymentFailure();
    const failureProcedure =
      "Détecter l’échec, informer l’acheteur, garder les droits fermés et permettre une reprise contrôlée.";
    const result = assessMvpContract({
      ...payment,
      autonomousPurchaseFailureProcedure: failureProcedure,
    });

    expect(result.status).toBe("PILOT_CANDIDATE_FOR_REVIEW");
    expect(result.markdown).toContain(
      `- Période couverte par le test : ${accordiaHorizon}`,
    );
    expect(result.markdown).toContain(
      `- États d’achat autonome et de droits : ${payment.autonomousPurchaseStates}`,
    );
    expect(result.markdown).toContain(
      `- Procédure d’échec de paiement autonome : ${failureProcedure}`,
    );
    for (const equation of result.manualEquations) {
      expect(equation.explicitLimit).not.toBe("");
      expect(result.markdown).toContain(
        `- ${equation.operation} — limite : ${equation.explicitLimit} — calcul exploitable : ${equation.equation}`,
      );
    }
    expect(result.markdown).toContain("- État de la somme : complète");
  });

  it("exports unknown autonomous and manual decisions in the selectable fallback", () => {
    const payment = createAccordiaAutonomousPaymentFailure();
    const input = replaceCapability(
      payment,
      "accountsAccess",
      (capability) => ({
        ...capability,
        manualOperation: {
          ...capability.manualOperation,
          minutesPerOccurrence: null,
        },
      }),
    );
    const result = assessMvpContract(input);

    expect(result.status).toBe("STOP_REQUIRED_DECISIONS_UNKNOWN");
    expect(result.markdown).toContain(
      "- Procédure d’échec de paiement autonome : À vérifier",
    );
    expect(result.markdown).toContain(
      `- États d’achat autonome et de droits : ${payment.autonomousPurchaseStates}`,
    );
    expect(result.markdown).toContain(
      "Créer ou reprendre les accès du pilote — limite : Deux interventions planifiées par client pendant le pilote. — calcul inexploitable : minutes par occurrence à vérifier × 2 occurrence(s)/client",
    );
    expect(result.markdown).not.toContain("À vérifier min");
    expect(result.markdown).toContain(
      "- État de la somme : partiel/inexploitable",
    );
    expect(result.markdown).toContain(
      "- Sous-total des seules opérations exploitables : 120 min",
    );
  });
});
