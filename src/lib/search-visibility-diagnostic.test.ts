import { describe, expect, it } from "vitest";
import {
  findFirstUnprovedStep,
  formatSearchVisibilityDiagnostic,
  type SearchVisibilityIdentity,
  type SearchVisibilitySteps,
} from "./search-visibility-diagnostic";

const completeSteps: SearchVisibilitySteps = {
  discovery: { status: "proved", evidence: "URL reconnue" },
  crawl: { status: "success", evidence: "Exploration réussie" },
  index: { status: "indexed", evidence: "URL sur Google" },
  impressions: { status: "visible-value", evidence: "54 impressions" },
  clicks: { status: "visible-value", evidence: "1 clic" },
  leads: { status: "attributed-value", evidence: "1 demande attribuée" },
};

const identity: SearchVisibilityIdentity = {
  checkedAt: "2026-07-21",
  period: "28 jours",
  url: "https://example.com/page",
  query: "service exemple",
  queryType: "Recherche métier",
  context: "France · mobile",
  owner: "Direction",
  recheckAt: "2026-08-04",
};

describe("search visibility diagnostic", () => {
  it("stops at discovery when its evidence is unknown", () => {
    const finding = findFirstUnprovedStep({
      ...completeSteps,
      discovery: { status: "unknown", evidence: "Inspection à faire" },
    });
    expect(finding.stepId).toBe("discovery");
    expect(finding.limit).toContain("sitemap");
  });

  it("does not treat observed but unattributed requests as conversions", () => {
    const finding = findFirstUnprovedStep({
      ...completeSteps,
      leads: {
        status: "observed-unattributed",
        evidence: "2 demandes observées, source inconnue",
      },
    });
    expect(finding.stepId).toBe("leads");
    expect(finding.action).toContain("attribution");
  });

  it.each([
    ["crawl", "failed", "crawl"],
    ["index", "not-indexed", "index"],
    ["impressions", "no-visible-data", "impressions"],
    ["clicks", "zero-visible-clicks", "clicks"],
    ["leads", "not-tracked", "leads"],
  ] as const)(
    "keeps a negative %s status at the correct step",
    (step, status, expected) => {
      const finding = findFirstUnprovedStep({
        ...completeSteps,
        [step]: { status, evidence: "État négatif recopié" },
      });
      expect(finding.stepId).toBe(expected);
    },
  );

  it("requires written evidence even when a positive status is selected", () => {
    const finding = findFirstUnprovedStep({
      ...completeSteps,
      index: { status: "indexed", evidence: "" },
    });
    expect(finding.stepId).toBe("index");
    expect(finding.conclusion).toContain("preuve");
  });

  it("reports a completed chain without promising performance", () => {
    const finding = findFirstUnprovedStep(completeSteps);
    expect(finding.stepId).toBe("complete");
    expect(finding.conclusion).toContain("ne prouve ni");

    const output = formatSearchVisibilityDiagnostic(
      identity,
      completeSteps,
      finding,
    );
    expect(output).toContain("DIAGNOSTIC URL–RECHERCHE");
    expect(output).toContain("54 impressions");
    expect(output).toContain("Au moins une valeur positive est visible");
    expect(output).not.toContain("visible-value");
    expect(output).toContain("ne constitue pas un verdict de Google");
  });

  it("prints whitespace-only evidence as not supplied", () => {
    const steps = {
      ...completeSteps,
      crawl: { status: "success" as const, evidence: "   " },
    };
    const output = formatSearchVisibilityDiagnostic(
      identity,
      steps,
      findFirstUnprovedStep(steps),
    );
    expect(output).toContain("Preuve : non renseignée");
  });

  it("normalizes whitespace-only identity fields", () => {
    const output = formatSearchVisibilityDiagnostic(
      { ...identity, url: "   ", owner: "   " },
      completeSteps,
      findFirstUnprovedStep(completeSteps),
    );
    expect(output).toContain("URL : non renseignée");
    expect(output).toContain("Responsable : non renseigné");
  });
});
