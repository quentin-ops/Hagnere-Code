import { describe, expect, it } from "vitest";
import {
  assessSaasSchedule,
  createEmptySaasSchedule,
  createRelaisProExample,
  MAX_WORKING_DAYS,
  type SchedulePlannerInput,
} from "./schedule-planner-engine";

function simpleValidNetwork(): SchedulePlannerInput {
  return {
    finishLine: "Le résultat pilote est accepté selon les preuves écrites.",
    reserveDays: 2,
    maxWorkingDays: 20,
    tasks: [
      {
        id: "a",
        result: "Résultat A",
        owner: "Équipe A",
        capacityId: "capacite-a",
        dependsOn: [],
        durations: { favorable: 2, central: 3, prudent: 5 },
        uncertainty: "Décision métier encore susceptible d’évoluer",
      },
      {
        id: "b",
        result: "Résultat B",
        owner: "Équipe B",
        capacityId: "capacite-b",
        dependsOn: ["a"],
        durations: { favorable: 3, central: 4, prudent: 7 },
        uncertainty: "Jonction à rejouer",
      },
    ],
  };
}

describe("assessSaasSchedule", () => {
  it("keeps an empty schedule in an explicit STOP without calculations", () => {
    const result = assessSaasSchedule(createEmptySaasSchedule());

    expect(result.status).toBe("STOP_REQUIRED_INPUTS_UNKNOWN");
    expect(result.missingInputs).toEqual(
      expect.arrayContaining([
        "Ligne d’arrivée non renseignée",
        "Aucune tâche renseignée",
        "Réserve explicite en jours ouvrés non renseignée",
        "Maximum de jours ouvrés disponibles non renseigné",
      ]),
    );
    expect(result.scenarios).toEqual([]);
    expect(result.markdown).toContain("STOP — ligne d’arrivée inconnue");
    expect(result.markdown).not.toContain("NaN");
  });

  it("calculates the four deterministic scenarios for the fully fictitious example", () => {
    const result = assessSaasSchedule(createRelaisProExample());

    expect(result.status).toBe("CALENDAR_CANDIDATE_FOR_REVIEW");
    expect(result.scenarios).toHaveLength(4);
    expect(
      Object.fromEntries(
        result.scenarios.map((scenario) => [
          scenario.id,
          {
            path: scenario.determiningPathIds,
            duration: scenario.durationDays,
            reserve: scenario.reserveDays,
            reviewTotal: scenario.durationWithReserveDays,
          },
        ]),
      ),
    ).toEqual({
      favorable: {
        path: ["parcours", "parcours-construit", "recette", "pilote-ouvert"],
        duration: 16,
        reserve: 4,
        reviewTotal: 20,
      },
      central: {
        path: ["parcours", "parcours-construit", "recette", "pilote-ouvert"],
        duration: 25,
        reserve: 4,
        reviewTotal: 29,
      },
      prudent: {
        path: ["parcours", "parcours-construit", "recette", "pilote-ouvert"],
        duration: 37,
        reserve: 4,
        reviewTotal: 41,
      },
      combinedStress: {
        path: ["acces-tiers", "parcours-construit", "recette", "pilote-ouvert"],
        duration: 47,
        reserve: 4,
        reviewTotal: 51,
      },
    });
    expect(result.scenarios.at(-1)).toEqual(
      expect.objectContaining({
        label: "Stress combiné",
        stressDescription:
          "Attente externe et validation interne sont dégradées simultanément.",
      }),
    );
  });

  it("uses J+N as elapsed working days and preserves zero and decimal durations", () => {
    const input = simpleValidNetwork();
    input.reserveDays = 0;
    input.tasks[0]!.durations = { favorable: 0, central: 0.5, prudent: 1 };
    input.tasks[1]!.durations = { favorable: 0, central: 0.25, prudent: 1 };

    const result = assessSaasSchedule(input);
    const favorable = result.scenarios.find(
      (scenario) => scenario.id === "favorable",
    );
    const central = result.scenarios.find(
      (scenario) => scenario.id === "central",
    );
    const prudent = result.scenarios.find(
      (scenario) => scenario.id === "prudent",
    );

    expect(favorable?.durationDays).toBe(0);
    expect(central?.durationDays).toBe(0.75);
    expect(central?.tasks[0]).toEqual(
      expect.objectContaining({ startDay: 0, finishDay: 0.5 }),
    );
    expect(prudent?.tasks[0]).toEqual(
      expect.objectContaining({ startDay: 0, finishDay: 1 }),
    );
    expect(result.markdown).toContain(
      "une tâche de 1 jour occupe J1 et atteint son jalon à J+1",
    );
  });

  it("accepts an exact micro-day value despite binary multiplication noise", () => {
    const input = simpleValidNetwork();
    input.tasks[0]!.durations.central = 0.12965;
    input.tasks[1]!.durations.central = 0.000001;
    input.reserveDays = 0;

    const result = assessSaasSchedule(input);
    const central = result.scenarios.find(
      (scenario) => scenario.id === "central",
    );

    expect(result.status).toBe("CALENDAR_CANDIDATE_FOR_REVIEW");
    expect(central?.durationDays).toBe(0.129651);
  });

  it("does not add a genuinely parallel branch to the determining chain", () => {
    const input = simpleValidNetwork();
    input.tasks.push({
      id: "parallel",
      result: "Résultat parallèle",
      owner: "Équipe parallèle",
      capacityId: "capacite-parallele",
      dependsOn: [],
      durations: { favorable: 1, central: 2, prudent: 4 },
      uncertainty: "Disponibilité propre à cette équipe",
    });

    const result = assessSaasSchedule(input);
    const central = result.scenarios.find(
      (scenario) => scenario.id === "central",
    );

    expect(result.status).toBe("CALENDAR_CANDIDATE_FOR_REVIEW");
    expect(central?.durationDays).toBe(7);
    expect(central?.determiningPathIds).toEqual(["a", "b"]);
    expect(central?.equation).toContain("3 + 4 = 7");
  });

  it("replays a join and changes the determining path when one upstream assumption changes", () => {
    const input = simpleValidNetwork();
    input.tasks = [
      input.tasks[0]!,
      {
        id: "external",
        result: "Accès externe prêt",
        owner: "Tiers",
        capacityId: "capacite-tiers",
        dependsOn: [],
        durations: { favorable: 1, central: 2, prudent: 12 },
        uncertainty: "Réponse du tiers",
      },
      {
        ...input.tasks[1]!,
        dependsOn: ["a", "external"],
      },
    ];

    const result = assessSaasSchedule(input);
    const central = result.scenarios.find(
      (scenario) => scenario.id === "central",
    );
    const prudent = result.scenarios.find(
      (scenario) => scenario.id === "prudent",
    );

    expect(central?.determiningPathIds).toEqual(["a", "b"]);
    expect(prudent?.determiningPathIds).toEqual(["external", "b"]);
    expect(central?.durationDays).toBe(7);
    expect(prudent?.durationDays).toBe(19);
  });

  it("returns every tied determining path through a join", () => {
    const input = simpleValidNetwork();
    input.tasks = [
      input.tasks[0]!,
      {
        id: "c",
        result: "Résultat C",
        owner: "Équipe C",
        capacityId: "capacite-c",
        dependsOn: [],
        durations: { favorable: 2, central: 3, prudent: 5 },
        uncertainty: "Hypothèse parallèle",
      },
      {
        ...input.tasks[1]!,
        dependsOn: ["a", "c"],
      },
    ];

    const result = assessSaasSchedule(input);
    const central = result.scenarios.find(
      (scenario) => scenario.id === "central",
    );

    expect(central?.determiningPathsIds).toEqual([
      ["a", "b"],
      ["c", "b"],
    ]);
    expect(central?.equations).toEqual([
      expect.stringContaining("3 + 4 = 7"),
      expect.stringContaining("3 + 4 = 7"),
    ]);
    expect(result.markdown).toContain("Chemins déterminants ex aequo (2)");
    expect(result.markdown).toContain("a → b");
    expect(result.markdown).toContain("c → b");
  });

  it("keeps mathematically tied decimal paths despite binary floating-point noise", () => {
    const input = simpleValidNetwork();
    input.tasks = [
      {
        ...input.tasks[0]!,
        durations: { favorable: 0.1, central: 0.1, prudent: 0.1 },
      },
      {
        id: "a-suite",
        result: "Suite A",
        owner: "Équipe A",
        capacityId: "capacite-a-suite",
        dependsOn: ["a"],
        durations: { favorable: 0.2, central: 0.2, prudent: 0.2 },
        uncertainty: "Décimale A",
      },
      {
        id: "c",
        result: "Résultat C",
        owner: "Équipe C",
        capacityId: "capacite-c",
        dependsOn: [],
        durations: { favorable: 0.3, central: 0.3, prudent: 0.3 },
        uncertainty: "Décimale C",
      },
      {
        ...input.tasks[1]!,
        dependsOn: ["a-suite", "c"],
        durations: { favorable: 0.1, central: 0.1, prudent: 0.1 },
      },
    ];

    const central = assessSaasSchedule(input).scenarios.find(
      (scenario) => scenario.id === "central",
    );

    expect(central?.determiningPathsIds).toEqual([
      ["a", "a-suite", "b"],
      ["c", "b"],
    ]);
    expect(central?.durationDays).toBeCloseTo(0.4, 12);
  });

  it("stops instead of masking or exhausting the browser on more than 1000 tied paths", () => {
    const input = simpleValidNetwork();
    input.tasks = [
      {
        ...input.tasks[0]!,
        id: "root",
        capacityId: "capacity-root",
        durations: { favorable: 0, central: 0, prudent: 0 },
      },
    ];
    let previous = "root";
    for (let level = 1; level <= 10; level += 1) {
      const left = `left-${level}`;
      const right = `right-${level}`;
      const join = `join-${level}`;
      for (const branch of [left, right]) {
        input.tasks.push({
          id: branch,
          result: `Branche ${branch}`,
          owner: `Équipe ${branch}`,
          capacityId: `capacity-${branch}`,
          dependsOn: [previous],
          durations: { favorable: 1, central: 1, prudent: 1 },
          uncertainty: `Égalité ${branch}`,
        });
      }
      input.tasks.push({
        id: join,
        result: `Jonction ${level}`,
        owner: `Équipe jonction ${level}`,
        capacityId: `capacity-${join}`,
        dependsOn: [left, right],
        durations: { favorable: 0, central: 0, prudent: 0 },
        uncertainty: `Jonction ex aequo ${level}`,
      });
      previous = join;
    }

    const result = assessSaasSchedule(input);

    expect(result.status).toBe("STOP_INVALID_DEPENDENCY_NETWORK");
    expect(result.networkErrors).toEqual([
      expect.stringContaining("plus de 1000 chemins déterminants ex aequo"),
    ]);
    expect(result.scenarios).toEqual([]);
  });

  it("degrades external wait and internal validation together in combined stress", () => {
    const result = assessSaasSchedule(createRelaisProExample());
    const prudent = result.scenarios.find(
      (scenario) => scenario.id === "prudent",
    );
    const combined = result.scenarios.find(
      (scenario) => scenario.id === "combinedStress",
    );
    const external = combined?.tasks.find((task) => task.id === "acces-tiers");
    const internal = combined?.tasks.find((task) => task.id === "recette");

    expect(external?.duration).toBe(12);
    expect(internal?.duration).toBe(13);
    expect(combined?.durationDays).toBeGreaterThan(prudent?.durationDays ?? 0);
  });

  it("never calls a fourth replay combined when only one or no positive stress applies", () => {
    const withoutStress = simpleValidNetwork();
    const noStressResult = assessSaasSchedule(withoutStress);
    const noStressReplay = noStressResult.scenarios.find(
      (scenario) => scenario.id === "combinedStress",
    );

    expect(noStressReplay).toEqual(
      expect.objectContaining({
        label: "Prudent — aucun stress additionnel",
        durationDays: 12,
      }),
    );

    withoutStress.tasks[0]!.stress = {
      kind: "external-wait",
      extraDays: 2,
    };
    withoutStress.tasks[1]!.stress = {
      kind: "internal-validation",
      extraDays: 0,
    };
    const oneStressReplay = assessSaasSchedule(withoutStress).scenarios.find(
      (scenario) => scenario.id === "combinedStress",
    );

    expect(oneStressReplay?.label).toBe("Stress déclaré — attente externe");
    expect(oneStressReplay?.label).not.toBe("Stress combiné");
  });

  it("reports only the reverse gap when the prudent case exceeds available days", () => {
    const result = assessSaasSchedule(createRelaisProExample());

    expect(result.reverseReasoning).toEqual({
      maxWorkingDays: 34,
      prudentWithReserveDays: 41,
      gapDays: 7,
      needsDecision: true,
    });
    expect(result.markdown).toContain("Écart : 7 j ouvrés");
    expect(result.markdown).toContain("aucune réduction n’est inventée");
  });

  it("computes a decimal reverse gap in the same exact micro-day unit", () => {
    const input = simpleValidNetwork();
    input.tasks[0]!.durations.prudent = 0.1;
    input.tasks[1]!.durations.prudent = 0.2;
    input.reserveDays = 0.1;
    input.maxWorkingDays = 0.3;

    const result = assessSaasSchedule(input);

    expect(result.reverseReasoning).toEqual({
      maxWorkingDays: 0.3,
      prudentWithReserveDays: 0.4,
      gapDays: 0.1,
      needsDecision: true,
    });
  });

  it.each([
    ["owner", "Responsable manquant pour a"],
    ["duration", "Durée centrale manquante pour a"],
  ])("stops when a required %s remains unknown", (field, expected) => {
    const input = simpleValidNetwork();
    if (field === "owner") input.tasks[0]!.owner = "";
    if (field === "duration") input.tasks[0]!.durations.central = null;

    const result = assessSaasSchedule(input);

    expect(result.status).toBe("STOP_REQUIRED_INPUTS_UNKNOWN");
    expect(result.missingInputs).toContain(expected);
    expect(result.scenarios).toEqual([]);
  });

  it("rejects an unknown dependency", () => {
    const input = simpleValidNetwork();
    input.tasks[1]!.dependsOn = ["inconnue"];

    const result = assessSaasSchedule(input);

    expect(result.status).toBe("STOP_INVALID_DEPENDENCY_NETWORK");
    expect(result.networkErrors).toContain(
      "Dépendance inconnue pour b : inconnue",
    );
  });

  it("rejects duplicate task identifiers, duplicate dependencies and self-dependencies", () => {
    const duplicateId = simpleValidNetwork();
    duplicateId.tasks[1]!.id = "a";
    expect(assessSaasSchedule(duplicateId).networkErrors).toContain(
      "Identifiant de tâche dupliqué : a",
    );

    const duplicateDependency = simpleValidNetwork();
    duplicateDependency.tasks[1]!.dependsOn = ["a", "a"];
    expect(assessSaasSchedule(duplicateDependency).networkErrors).toContain(
      "Dépendance dupliquée pour b : a",
    );

    const selfDependency = simpleValidNetwork();
    selfDependency.tasks[0]!.dependsOn = ["a"];
    expect(assessSaasSchedule(selfDependency).networkErrors).toContain(
      "Auto-dépendance interdite : a",
    );
  });

  it("stops after a task removal or rename leaves an orphan dependency", () => {
    const removed = simpleValidNetwork();
    removed.tasks = removed.tasks.slice(1);
    expect(assessSaasSchedule(removed)).toEqual(
      expect.objectContaining({
        status: "STOP_INVALID_DEPENDENCY_NETWORK",
        networkErrors: ["Dépendance inconnue pour b : a"],
        scenarios: [],
      }),
    );

    const renamed = simpleValidNetwork();
    renamed.tasks[0]!.id = "a-renommee";
    expect(assessSaasSchedule(renamed).networkErrors).toContain(
      "Dépendance inconnue pour b : a",
    );
  });

  it("rejects a dependency cycle", () => {
    const input = simpleValidNetwork();
    input.tasks[0]!.dependsOn = ["b"];

    const result = assessSaasSchedule(input);

    expect(result.status).toBe("STOP_INVALID_DEPENDENCY_NETWORK");
    expect(result.networkErrors[0]).toContain("Cycle détecté entre : a, b");
    expect(result.scenarios).toEqual([]);
  });

  it("rejects a negative duration instead of converting it to zero", () => {
    const input = simpleValidNetwork();
    input.tasks[0]!.durations.prudent = -1;

    const result = assessSaasSchedule(input);

    expect(result.status).toBe("STOP_INVALID_DEPENDENCY_NETWORK");
    expect(result.networkErrors[0]).toContain("Durée prudente invalide pour a");
    expect(result.scenarios).toEqual([]);
  });

  it.each([Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY])(
    "rejects the non-finite duration %s",
    (value) => {
      const input = simpleValidNetwork();
      input.tasks[0]!.durations.central = value;

      const result = assessSaasSchedule(input);

      expect(result.status).toBe("STOP_INVALID_DEPENDENCY_NETWORK");
      expect(result.networkErrors[0]).toContain(
        "Durée centrale invalide pour a",
      );
      expect(result.scenarios).toEqual([]);
      expect(result.markdown).not.toMatch(/NaN|Infinity/);
    },
  );

  it("rejects inputs and totals beyond the explicit technical bound", () => {
    const extremeInput = simpleValidNetwork();
    extremeInput.tasks[0]!.durations.prudent = Number.MAX_VALUE;
    expect(assessSaasSchedule(extremeInput)).toEqual(
      expect.objectContaining({
        status: "STOP_INVALID_DEPENDENCY_NETWORK",
        scenarios: [],
      }),
    );

    const overBoundTotal = simpleValidNetwork();
    overBoundTotal.reserveDays = "0";
    overBoundTotal.maxWorkingDays = String(MAX_WORKING_DAYS);
    overBoundTotal.tasks[0]!.durations.prudent = "600000";
    overBoundTotal.tasks[1]!.durations.prudent = "400000.000001";
    const result = assessSaasSchedule(overBoundTotal);

    expect(result.status).toBe("STOP_INVALID_DEPENDENCY_NETWORK");
    expect(result.networkErrors).toEqual([
      expect.stringContaining(
        "total supérieur à la borne technique de 1 000 000 jours ouvrés",
      ),
    ]);
    expect(result.scenarios).toEqual([]);
    expect(result.reverseReasoning).toBeNull();
  });

  it("rejects more than six decimal places instead of rounding silently", () => {
    const input = simpleValidNetwork();
    input.tasks[0]!.durations.central = 0.1234567;

    const result = assessSaasSchedule(input);

    expect(result.status).toBe("STOP_INVALID_DEPENDENCY_NETWORK");
    expect(result.networkErrors).toEqual([
      expect.stringContaining("plus de 6 décimales significatives"),
    ]);
    expect(result.scenarios).toEqual([]);
  });

  it("checks a high-magnitude raw string before JavaScript can round it", () => {
    const input = simpleValidNetwork();
    input.tasks[0]!.durations.central = "9000000000.1234567";

    const result = assessSaasSchedule(input);

    expect(result.status).toBe("STOP_INVALID_DEPENDENCY_NETWORK");
    expect(result.networkErrors).toEqual([
      expect.stringContaining(
        "plus de 6 décimales significatives ; saisie refusée avant conversion",
      ),
    ]);
    expect(result.networkErrors.join(" ")).not.toContain(
      "borne technique de 1 000 000",
    );
    expect(result.scenarios).toEqual([]);
    expect(result.reverseReasoning).toBeNull();
  });

  it("accepts the exact technical bound without a lossy round-trip", () => {
    const input = simpleValidNetwork();
    input.reserveDays = "0";
    input.maxWorkingDays = String(MAX_WORKING_DAYS);
    for (const task of input.tasks) {
      task.durations = {
        favorable: task.id === "a" ? String(MAX_WORKING_DAYS) : "0",
        central: task.id === "a" ? String(MAX_WORKING_DAYS) : "0",
        prudent: task.id === "a" ? String(MAX_WORKING_DAYS) : "0",
      };
    }

    const result = assessSaasSchedule(input);

    expect(result.status).toBe("CALENDAR_CANDIDATE_FOR_REVIEW");
    expect(result.scenarios).toHaveLength(4);
    expect(
      result.scenarios.every((scenario) => scenario.durationDays === 1_000_000),
    ).toBe(true);
    expect(result.reverseReasoning).toEqual({
      maxWorkingDays: 1_000_000,
      prudentWithReserveDays: 1_000_000,
      gapDays: 0,
      needsDecision: false,
    });
  });

  it("rejects one micro-day beyond the technical bound", () => {
    const input = simpleValidNetwork();
    input.tasks[0]!.durations.favorable = "1000000.000001";

    const result = assessSaasSchedule(input);

    expect(result.status).toBe("STOP_INVALID_DEPENDENCY_NETWORK");
    expect(result.networkErrors).toEqual([
      expect.stringContaining(
        "borne technique de 1 000 000 jours ouvrés dépassée",
      ),
    ]);
    expect(result.scenarios).toEqual([]);
  });

  it.each(["NaN", "Infinity", "-Infinity"])(
    "rejects the raw non-finite token %s",
    (value) => {
      const input = simpleValidNetwork();
      input.tasks[0]!.durations.central = value;

      const result = assessSaasSchedule(input);

      expect(result.status).toBe("STOP_INVALID_DEPENDENCY_NETWORK");
      expect(result.networkErrors).toEqual([
        expect.stringContaining("avec un point décimal, sans exposant"),
      ]);
      expect(result.scenarios).toEqual([]);
      expect(result.markdown).not.toMatch(/NaN|Infinity/);
    },
  );

  it.each(["0,5", "1e3"])(
    "rejects the undocumented numeric format %s",
    (value) => {
      const input = simpleValidNetwork();
      input.reserveDays = value;

      const result = assessSaasSchedule(input);

      expect(result.status).toBe("STOP_INVALID_DEPENDENCY_NETWORK");
      expect(result.networkErrors).toEqual([
        expect.stringContaining("avec un point décimal, sans exposant"),
      ]);
      expect(result.scenarios).toEqual([]);
    },
  );

  it("requires an explicit order for tasks sharing one capacity", () => {
    const input = simpleValidNetwork();
    input.tasks[1]!.dependsOn = [];
    input.tasks[1]!.capacityId = input.tasks[0]!.capacityId;

    const result = assessSaasSchedule(input);

    expect(result.status).toBe("CLARIFY_CAPACITY_BEFORE_CALENDAR");
    expect(result.capacityConflicts).toEqual([
      {
        capacityId: "capacite-a",
        firstTaskId: "a",
        secondTaskId: "b",
      },
    ]);
    expect(result.scenarios).toEqual([]);
  });

  it("accepts shared capacity only after an explicit dependency orders it", () => {
    const input = simpleValidNetwork();
    input.tasks[1]!.capacityId = input.tasks[0]!.capacityId;

    const result = assessSaasSchedule(input);

    expect(result.status).toBe("CALENDAR_CANDIDATE_FOR_REVIEW");
    expect(result.capacityConflicts).toEqual([]);
  });

  it("accepts shared capacity when the order is transitive", () => {
    const input = simpleValidNetwork();
    input.tasks[1]!.capacityId = input.tasks[0]!.capacityId;
    input.tasks.splice(1, 0, {
      id: "milieu",
      result: "Résultat intermédiaire",
      owner: "Équipe intermédiaire",
      capacityId: "capacite-intermediaire",
      dependsOn: ["a"],
      durations: { favorable: 1, central: 1, prudent: 1 },
      uncertainty: "Passage intermédiaire",
    });
    input.tasks[2]!.dependsOn = ["milieu"];

    const result = assessSaasSchedule(input);

    expect(result.status).toBe("CALENDAR_CANDIDATE_FOR_REVIEW");
    expect(result.capacityConflicts).toEqual([]);
  });

  it("keeps the reserve separate from every path duration", () => {
    const result = assessSaasSchedule(simpleValidNetwork());

    for (const scenario of result.scenarios) {
      expect(scenario.reserveDays).toBe(2);
      expect(scenario.durationWithReserveDays).toBe(scenario.durationDays + 2);
    }
    expect(result.markdown).toContain(
      "La réserve reste distincte des durées et ne représente aucune probabilité.",
    );
  });
});
