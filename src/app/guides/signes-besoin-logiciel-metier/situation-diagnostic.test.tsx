/** @vitest-environment happy-dom */

import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import {
  buildDiagnosticSummary,
  EMPTY_SITUATION,
  orientSituation,
  SituationDiagnosticTool,
  type SituationDiagnostic,
} from "./situation-diagnostic";

const readyForChoice: SituationDiagnostic = {
  ...EMPTY_SITUATION,
  name: "Préparer une intervention",
  expected: "Le dossier complet est disponible avant le départ",
  observed: "Une pièce a été recherchée dans trois outils",
  periodAndFrequency: "Trois fois en juillet",
  consequence: "Départ retardé",
  peopleAndTools: "Coordination et technicien",
  workaroundAndAttempts: "Appels et recherche manuelle",
  securityRisk: "no",
  repeated: "yes",
  stableRules: "yes",
  removableStep: "no",
  existingToolTested: "yes",
  transferIsProblem: "no",
  standardTested: "yes",
  standardFits: "no",
  namedOwner: "yes",
};

describe("orientSituation", () => {
  it("fait passer la sécurité avant toutes les réponses fonctionnelles", () => {
    const result = orientSituation({
      ...readyForChoice,
      securityRisk: "yes",
      removableStep: "yes",
    });

    expect(result.orientation).toBe("secure");
    expect(result.label).toContain("1 · Sécuriser");
  });

  it("conserve OBSERVER hors des six réponses si les faits ou les règles manquent", () => {
    expect(orientSituation(EMPTY_SITUATION).orientation).toBe("observe");
    expect(
      orientSituation({ ...readyForChoice, repeated: "no" }).orientation,
    ).toBe("observe");
    expect(
      orientSituation({ ...readyForChoice, stableRules: "no" }).orientation,
    ).toBe("observe");
  });

  it("n'oriente pas vers une solution lorsque l'un des sept faits manque", () => {
    const factKeys = [
      "name",
      "expected",
      "observed",
      "periodAndFrequency",
      "consequence",
      "peopleAndTools",
      "workaroundAndAttempts",
    ] as const;

    for (const key of factKeys) {
      expect(
        orientSituation({ ...readyForChoice, [key]: "   " }).orientation,
        key,
      ).toBe("observe");
    }
  });

  it("conserve la sécurisation prioritaire même si la description est incomplète", () => {
    expect(
      orientSituation({
        ...readyForChoice,
        observed: "",
        securityRisk: "yes",
      }).orientation,
    ).toBe("secure");
  });

  it("respecte l'ordre simplifier, configurer, connecter, standard puis sur-mesure", () => {
    expect(
      orientSituation({ ...readyForChoice, removableStep: "yes" }).orientation,
    ).toBe("simplify");
    expect(
      orientSituation({
        ...readyForChoice,
        existingToolTested: "no",
      }).orientation,
    ).toBe("configure");
    expect(
      orientSituation({
        ...readyForChoice,
        transferIsProblem: "yes",
      }).orientation,
    ).toBe("connect");
    expect(
      orientSituation({
        ...readyForChoice,
        standardTested: "no",
        standardFits: "unknown",
      }).orientation,
    ).toBe("standard");
    expect(orientSituation(readyForChoice).orientation).toBe("custom");
  });

  it("conserve chaque réponse inconnue au lieu de forcer la branche suivante", () => {
    for (const situation of [
      { ...readyForChoice, removableStep: "unknown" as const },
      { ...readyForChoice, existingToolTested: "unknown" as const },
      { ...readyForChoice, transferIsProblem: "unknown" as const },
      { ...readyForChoice, standardTested: "unknown" as const },
      { ...readyForChoice, standardFits: "unknown" as const },
      { ...readyForChoice, namedOwner: "unknown" as const },
    ]) {
      expect(orientSituation(situation).orientation).toBe("observe");
    }
  });

  it("propose seulement de tester le standard pour no / unknown", () => {
    const result = orientSituation({
      ...readyForChoice,
      standardTested: "no",
      standardFits: "unknown",
    });

    expect(result.orientation).toBe("standard");
    expect(result.label).toBe("5 · Tester un logiciel standard");
    expect(result.explanation).toContain("sans présumer de son adoption");
  });

  it("renvoie no / no vers OBSERVER comme état contradictoire", () => {
    const result = orientSituation({
      ...readyForChoice,
      standardTested: "no",
      standardFits: "no",
    });

    expect(result.orientation).toBe("observe");
    expect(result.explanation).toContain("non testé mais déjà inadapté");
    expect(result.explanation).toContain("se contredisent");
  });

  it("renvoie no / yes vers OBSERVER comme état contradictoire", () => {
    const result = orientSituation({
      ...readyForChoice,
      standardTested: "no",
      standardFits: "yes",
    });

    expect(result.orientation).toBe("observe");
    expect(result.explanation).toContain("non testé mais déjà adapté");
    expect(result.explanation).toContain("se contredisent");
  });

  it("ne propose l'adoption du standard qu'après yes / yes", () => {
    const result = orientSituation({
      ...readyForChoice,
      standardTested: "yes",
      standardFits: "yes",
    });

    expect(result.orientation).toBe("standard");
    expect(result.label).toBe("5 · Adopter un logiciel standard");
    expect(result.explanation).toContain("son adoption est raisonnable");
  });

  it("poursuit vers le sur-mesure après yes / no seulement avec un responsable", () => {
    expect(
      orientSituation({
        ...readyForChoice,
        standardTested: "yes",
        standardFits: "no",
        namedOwner: "yes",
      }).orientation,
    ).toBe("custom");

    const withoutOwner = orientSituation({
      ...readyForChoice,
      standardTested: "yes",
      standardFits: "no",
      namedOwner: "no",
    });
    expect(withoutOwner.orientation).toBe("observe");
    expect(withoutOwner.label).toContain("nommer un responsable");
  });

  it("refuse le sur-mesure lorsqu'aucun responsable métier n'est nommé", () => {
    const result = orientSituation({
      ...readyForChoice,
      namedOwner: "no",
    });

    expect(result.orientation).toBe("observe");
    expect(result.label).toContain("OBSERVER");
  });

  it("maintient la sécurité et les faits complets avant la comparaison standard", () => {
    expect(
      orientSituation({
        ...readyForChoice,
        securityRisk: "yes",
        standardTested: "no",
        standardFits: "yes",
      }).orientation,
    ).toBe("secure");

    const missingFact = orientSituation({
      ...readyForChoice,
      consequence: "",
      standardTested: "no",
      standardFits: "unknown",
    });
    expect(missingFact.orientation).toBe("observe");
    expect(missingFact.label).toBe(
      "OBSERVER · compléter les faits avant d’investir",
    );
  });

  it("conserve exactement les sept orientations externes", () => {
    const orientations = new Set([
      orientSituation({ ...readyForChoice, securityRisk: "yes" }).orientation,
      orientSituation({ ...readyForChoice, removableStep: "yes" }).orientation,
      orientSituation({ ...readyForChoice, existingToolTested: "no" })
        .orientation,
      orientSituation({ ...readyForChoice, transferIsProblem: "yes" })
        .orientation,
      orientSituation({
        ...readyForChoice,
        standardTested: "no",
        standardFits: "unknown",
      }).orientation,
      orientSituation(readyForChoice).orientation,
      orientSituation(EMPTY_SITUATION).orientation,
    ]);

    expect([...orientations]).toEqual([
      "secure",
      "simplify",
      "configure",
      "connect",
      "standard",
      "custom",
      "observe",
    ]);
  });
});

describe("SituationDiagnosticTool", () => {
  it("rend trois fiches, des contrôles natifs et aucune soumission", () => {
    const html = renderToStaticMarkup(<SituationDiagnosticTool />);
    const wrapper = document.createElement("div");
    wrapper.innerHTML = html;

    expect(html).toContain("Situation 1");
    expect(html).toContain("Situation 2");
    expect(html).toContain("Situation 3");
    expect(html).toContain("<textarea");
    expect(html).toContain("<select");
    expect(html).toContain('type="button"');
    expect(html).not.toContain("<form");
    expect(html).not.toContain('type="submit"');
    expect(html).toContain("aucun envoi");
    expect(
      wrapper.querySelectorAll(
        '[role="group"][aria-label="Choisir la situation à documenter"] > button',
      ),
    ).toHaveLength(3);
    expect(wrapper.querySelectorAll("input, textarea")).toHaveLength(7);
    expect(wrapper.querySelectorAll("select")).toHaveLength(9);
  });

  it("inclut une synthèse imprimable des trois situations, pas seulement l'onglet actif", () => {
    const html = renderToStaticMarkup(<SituationDiagnosticTool />);
    const wrapper = document.createElement("div");
    wrapper.innerHTML = html;
    const printSummary = wrapper.querySelector(
      '[data-testid="three-situations-print-summary"]',
    );

    expect(printSummary).not.toBeNull();
    expect(printSummary?.classList.contains("print:block")).toBe(true);
    expect(printSummary?.textContent).toContain("Situation 1");
    expect(printSummary?.textContent).toContain("Situation 2");
    expect(printSummary?.textContent).toContain("Situation 3");
    expect(
      printSummary?.querySelectorAll("section.break-inside-avoid"),
    ).toHaveLength(3);
    expect(
      printSummary?.textContent?.match(
        /La situation s’est-elle répétée sur la période observée \?/g,
      ),
    ).toHaveLength(3);
    expect(
      printSummary?.textContent?.match(/Réponses brutes aux neuf questions/g),
    ).toHaveLength(3);
  });

  it("construit une copie textuelle complète des trois situations", () => {
    const situations = [
      { ...readyForChoice, name: "Intervention" },
      {
        ...readyForChoice,
        name: "Facturation",
        transferIsProblem: "yes" as const,
      },
      {
        ...readyForChoice,
        name: "Validation",
        stableRules: "no" as const,
      },
    ];

    const summary = buildDiagnosticSummary(situations);

    expect(summary).toContain("SITUATION 1 — Intervention");
    expect(summary).toContain("SITUATION 2 — Facturation");
    expect(summary).toContain("SITUATION 3 — Validation");
    expect(summary).toContain("4 · Connecter ou automatiser de façon limitée");
    expect(summary).toContain(
      "OBSERVER · compléter les faits avant d’investir",
    );
  });
});
