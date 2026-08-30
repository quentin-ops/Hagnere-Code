import { describe, expect, it } from "vitest";
import {
  findFirstUnprovedStep,
  formatSearchVisibilityDiagnostic,
  SEARCH_VISIBILITY_RULES,
  type SearchVisibilityIdentity,
  type SearchVisibilitySteps,
} from "./search-visibility-diagnostic";

const completeSteps: SearchVisibilitySteps = {
  crawl: { status: "crawl-success", evidence: "Exploration réussie" },
  index: { status: "indexed", evidence: "Cette version est indexée" },
  impressions: {
    status: "visible-impressions",
    evidence: "Impressions visibles",
  },
  clicks: { status: "visible-clicks", evidence: "Clics visibles" },
};

const identity: SearchVisibilityIdentity = {
  checkedAt: "2026-08-18",
  period: "28 jours",
  url: "https://example.com/page",
  query: "service exemple",
  queryType: "Recherche métier",
  context: "France · mobile",
  owner: "Direction",
  recheckAt: "2026-09-01",
};

describe("search visibility diagnostic", () => {
  it.each([
    ["crawl", "url-unknown", "crawl"],
    ["crawl", "crawl-failed", "crawl"],
    ["index", "not-indexed", "index"],
    ["impressions", "no-visible-data", "impressions"],
    ["clicks", "zero-visible-clicks", "clicks"],
  ] as const)(
    "stops a %s control on its observed negative state",
    (step, status, expected) => {
      const finding = findFirstUnprovedStep({
        ...completeSteps,
        [step]: { status, evidence: "État recopié" },
      });
      expect(finding.stepId).toBe(expected);
    },
  );

  it("requires a written observation even after a positive selection", () => {
    const finding = findFirstUnprovedStep({
      ...completeSteps,
      index: { status: "indexed", evidence: "   " },
    });
    expect(finding.stepId).toBe("index");
    expect(finding.conclusion).toContain("constat manque");
  });

  it.each([
    ["crawl", ["unknown", "url-unknown", "crawl-failed"]],
    ["index", ["unknown", "not-indexed"]],
    ["impressions", ["unknown", "no-visible-data"]],
    ["clicks", ["unknown", "zero-visible-clicks", "no-visible-data"]],
  ] as const)(
    "rejects every incomplete status offered for %s",
    (step, incompleteStatuses) => {
      for (const status of incompleteStatuses) {
        const finding = findFirstUnprovedStep({
          ...completeSteps,
          [step]: { status, evidence: "État recopié" },
        });
        expect(finding.stepId, `${step}: ${status}`).toBe(step);
      }
    },
  );

  it("always stops at the first incomplete control", () => {
    const finding = findFirstUnprovedStep({
      crawl: { status: "crawl-failed", evidence: "Erreur serveur" },
      index: { status: "not-indexed", evidence: "Noindex" },
      impressions: { status: "no-visible-data", evidence: "Aucune ligne" },
      clicks: { status: "zero-visible-clicks", evidence: "0 clic" },
    });
    expect(finding.stepId).toBe("crawl");
  });

  it("classifies a completed chain without diagnosing traffic", () => {
    const finding = findFirstUnprovedStep(completeSteps);
    expect(finding.stepId).toBe("classified");
    expect(finding.limit).toContain("s’arrête volontairement ici");

    const output = formatSearchVisibilityDiagnostic(
      identity,
      completeSteps,
      finding,
    );
    expect(output).toContain("FICHE URL–RECHERCHE");
    expect(output).toContain("Impressions visibles");
    expect(output).toContain("Des impressions sont visibles");
    expect(output).toContain("Vue Index Google : cette version est indexée");
    expect(output).not.toContain("visible-impressions");
    expect(output).toContain("ne constitue pas un verdict de Google");
  });

  it("preserves canonical attribution and query-filter limits", () => {
    const impressionsRule = SEARCH_VISIBILITY_RULES.find(
      (rule) => rule.id === "impressions",
    );
    // « adresse canonique Google » n'est le nom d'aucun champ de la Search
    // Console. Le champ réel est « URL canonique sélectionnée par Google »
    // (relevé le 30/08/2026 sur
    // support.google.com/webmasters/answer/9012289?hl=fr : « consultez le champ
    // Indexation des pages > URL canonique sélectionnée par Google »). Le test
    // vérifie la même chose qu'avant — que la règle des impressions renvoie
    // bien à la canonique retenue par Google — mais sous le libellé exact.
    expect(impressionsRule?.action).toContain(
      "URL canonique sélectionnée par Google",
    );
    expect(impressionsRule?.action).toContain(
      "Ajoutez la recherche exacte en dernier",
    );
    expect(impressionsRule?.limit).toContain("requêtes anonymisées");
    expect(impressionsRule?.limit).toContain("filtre de requête");
  });

  it("prints blank observations and identity fields as not supplied", () => {
    const steps = {
      ...completeSteps,
      crawl: { status: "crawl-success" as const, evidence: "   " },
    };
    const output = formatSearchVisibilityDiagnostic(
      { ...identity, url: "   ", owner: "   " },
      steps,
      findFirstUnprovedStep(steps),
    );
    expect(output).toContain("URL : non renseignée");
    expect(output).toContain("Responsable : non renseigné");
    expect(output).toContain("Constat relevé : non renseigné");
  });
});
