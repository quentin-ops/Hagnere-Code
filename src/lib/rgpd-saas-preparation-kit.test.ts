import { describe, expect, it } from "vitest";
import {
  RGPD_PREPARATION_QUESTIONS,
  buildRgpdPreparationMarkdown,
  createEmptyRgpdAction,
  createEmptyRgpdPreparation,
  createEmptyRgpdProvider,
  createFictitiousRgpdPreparationExample,
  determineRgpdNextAction,
  parseRgpdAmount,
  rgpdPreparationFileName,
  summarizeRgpdCosts,
  validateRgpdPreparation,
  type RgpdSaasPreparation,
} from "./rgpd-saas-preparation-kit";

function completePreparation(): RgpdSaasPreparation {
  const preparation = createFictitiousRgpdPreparationExample();
  preparation.fictitiousExample = false;
  preparation.context.projectName = "Portail Réseau";
  preparation.answers["sensitive-or-criminal-data"] = {
    status: "documented",
    note: "Triage interne daté à faire confirmer pendant la revue.",
    justification: "",
  };
  preparation.answers["transfer-tool-and-assessment"] = {
    status: "documented",
    note: "Question et source datées, conclusion laissée au spécialiste.",
    justification: "",
  };
  preparation.actions[1].costUnknown = false;
  return preparation;
}

describe("parseRgpdAmount", () => {
  it("accepts strict French and plain decimal inputs", () => {
    expect(parseRgpdAmount("1 234,56")).toEqual({
      state: "valid",
      value: 1234.56,
      normalized: "1234.56",
    });
    expect(parseRgpdAmount("1234.5")).toEqual({
      state: "valid",
      value: 1234.5,
      normalized: "1234.5",
    });
    expect(parseRgpdAmount("0")).toEqual({
      state: "valid",
      value: 0,
      normalized: "0",
    });
    expect(parseRgpdAmount("")).toEqual({
      state: "empty",
      value: null,
      normalized: "",
    });
  });

  it.each([
    "-1",
    "+1",
    "1e3",
    "1,234.56",
    "12 34",
    "01",
    "10,123",
    "Infinity",
    "100000001",
    "2 jours",
  ])("rejects the ambiguous or unsafe input %s", (raw) => {
    expect(parseRgpdAmount(raw).state).toBe("invalid");
  });
});

describe("RGPD preparation validation", () => {
  it("starts with explicit unknowns rather than convenient negative answers", () => {
    const preparation = createEmptyRgpdPreparation();
    const validation = validateRgpdPreparation(preparation);

    expect(validation.isReviewReady).toBe(false);
    expect(
      RGPD_PREPARATION_QUESTIONS.every(
        (question) => preparation.answers[question.id].status === "unknown",
      ),
    ).toBe(true);
    expect(
      validation.issues.some(
        (issue) => issue.path === "context.roleHypothesis",
      ),
    ).toBe(true);
    expect(determineRgpdNextAction(preparation).id).toBe("complete-mapping");
  });

  it("requires evidence for documented and review-needed answers", () => {
    const preparation = completePreparation();
    preparation.answers["data-categories"] = {
      status: "documented",
      note: "",
      justification: "",
    };
    preparation.answers["remote-access"] = {
      status: "review-needed",
      note: "",
      justification: "",
    };

    const messages = validateRgpdPreparation(preparation).issues.map(
      (issue) => issue.message,
    );
    expect(messages).toContain(
      "Données et personnes concernées : ajoutez la preuve, la référence ou la question exacte à arbitrer.",
    );
    expect(messages).toContain(
      "Accès à distance : ajoutez la preuve, la référence ou la question exacte à arbitrer.",
    );
  });

  it("requires a justification and rejects not-applicable on mandatory points", () => {
    const preparation = completePreparation();
    preparation.answers["cookies-trackers"] = {
      status: "not-applicable-with-justification",
      note: "",
      justification: "",
    };
    preparation.answers["rights-workflow"] = {
      status: "not-applicable-with-justification",
      note: "",
      justification: "Aucune demande prévue.",
    };

    const validation = validateRgpdPreparation(preparation);
    expect(validation.issues).toContainEqual(
      expect.objectContaining({
        path: "answer.cookies-trackers.justification",
        severity: "incomplete",
      }),
    );
    expect(validation.issues).toContainEqual(
      expect.objectContaining({
        path: "answer.rights-workflow.status",
        severity: "blocking",
      }),
    );
  });

  it("accepts the complete fictitious example as a dossier for review, never as compliance", () => {
    const preparation = createFictitiousRgpdPreparationExample();
    const validation = validateRgpdPreparation(preparation);
    const markdown = buildRgpdPreparationMarkdown(preparation);

    expect(validation.isStructurallyValid).toBe(true);
    expect(validation.isReviewReady).toBe(true);
    expect(markdown).toContain("EXEMPLE ENTIÈREMENT FICTIF");
    expect(markdown).toContain("Ce ne sont ni des tarifs de marché");
    expect(markdown).toContain("Aucun score de conformité n’est calculé");
    expect(markdown).toContain(
      "Cela ne valide ni le rôle, ni la base juridique, ni le transfert, ni la conformité du SaaS.",
    );
    expect(preparation.context.projectName).toBe("Orbia Démo");
    expect(preparation.context.treatmentName).toContain(
      "inscriptions aux formations",
    );
    expect(preparation.context.purpose).toContain("planifier les sessions");
    expect(preparation.context.roleReasoning).toContain(
      "facturation et les autres usages propres d’Orbia",
    );
  });

  it("requires a provider when the inventory is claimed as documented", () => {
    const preparation = completePreparation();
    preparation.providers = [];

    expect(validateRgpdPreparation(preparation).issues).toContainEqual(
      expect.objectContaining({
        path: "providers",
        message:
          "Ajoutez au moins un prestataire ou marquez l’inventaire non applicable avec une justification.",
      }),
    );
  });

  it("requires explicit countries, access and role hypotheses for every provider", () => {
    const preparation = completePreparation();
    preparation.providers = [createEmptyRgpdProvider("provider-x")];

    const paths = validateRgpdPreparation(preparation).issues.map(
      (issue) => issue.path,
    );
    expect(paths).toContain("provider.provider-x.storageCountries");
    expect(paths).toContain("provider.provider-x.remoteAccessCountries");
    expect(paths).toContain("provider.provider-x.roleHypothesis");
    expect(paths).toContain("provider.provider-x.evidence");
  });

  it("detects orphan, self and cyclic action inclusions", () => {
    const orphan = completePreparation();
    orphan.actions[0].includedInActionId = "missing";
    expect(validateRgpdPreparation(orphan).isStructurallyValid).toBe(false);
    expect(
      validateRgpdPreparation(orphan).issues.some((issue) =>
        issue.message.includes("action mère n’existe plus"),
      ),
    ).toBe(true);

    const self = completePreparation();
    self.actions[0].includedInActionId = self.actions[0].id;
    expect(
      validateRgpdPreparation(self).issues.some((issue) =>
        issue.message.includes("ne peut pas s’inclure elle-même"),
      ),
    ).toBe(true);

    const cycle = completePreparation();
    cycle.actions[0].includedInActionId = cycle.actions[1].id;
    cycle.actions[1].includedInActionId = cycle.actions[0].id;
    cycle.actions[0].oneOffCash = "";
    cycle.actions[0].internalDays = "";
    cycle.actions[1].oneOffCash = "";
    cycle.actions[1].internalDays = "";
    cycle.actions[0].costUnknown = false;
    cycle.actions[1].costUnknown = false;
    expect(
      validateRgpdPreparation(cycle).issues.some((issue) =>
        issue.message.includes("forme une boucle"),
      ),
    ).toBe(true);
  });

  it("blocks a separate amount on an included action to prevent double counting", () => {
    const preparation = completePreparation();
    const included = preparation.actions.find(
      (action) => action.includedInActionId,
    );
    expect(included).toBeDefined();
    included!.oneOffCash = "500";

    expect(validateRgpdPreparation(preparation).issues).toContainEqual(
      expect.objectContaining({
        path: `action.${included!.id}.includedInActionId`,
        severity: "blocking",
      }),
    );
  });

  it("does not silently convert a missing cost into zero", () => {
    const preparation = completePreparation();
    const action = createEmptyRgpdAction("action-unknown");
    action.title = "Faire confirmer le périmètre";
    action.owner = "Direction";
    action.dueDate = "2026-09-30";
    action.evidence = "Décision datée.";
    action.costUnknown = true;
    preparation.actions = [action];

    const summary = summarizeRgpdCosts(preparation);
    const markdown = buildRgpdPreparationMarkdown(preparation);
    expect(summary.oneOffCashEntered).toBe(0);
    expect(summary.hasUnknownCosts).toBe(true);
    expect(markdown).toContain(
      "Au moins un coût reste inconnu. Les sous-totaux ne sont donc pas un coût complet",
    );
    expect(markdown).toContain(
      "Coût encore inconnu : oui — non converti en zéro",
    );
  });

  it("requires a justification for an entered zero", () => {
    const preparation = completePreparation();
    preparation.actions[0].oneOffCash = "0";
    preparation.actions[0].zeroJustification = "";

    expect(validateRgpdPreparation(preparation).issues).toContainEqual(
      expect.objectContaining({
        path: `action.${preparation.actions[0].id}.zeroJustification`,
      }),
    );
  });
});

describe("cost summary and next action", () => {
  it("separates one-off cash, recurring cash and internal capacity", () => {
    const summary = summarizeRgpdCosts(
      createFictitiousRgpdPreparationExample(),
    );

    expect(summary).toEqual({
      oneOffCashEntered: 8400,
      monthlyCashEntered: 0,
      annualCashEntered: 3000,
      internalDaysEntered: 9.5,
      hasUnknownCosts: true,
      includedActionCount: 1,
      countedActionCount: 3,
    });
  });

  it("prioritizes limiting an unresolved IA or tracker feature", () => {
    const preparation = completePreparation();
    preparation.answers["ai-model-data"] = {
      status: "review-needed",
      note: "La réutilisation des prompts n’est pas confirmée.",
      justification: "",
    };

    expect(determineRgpdNextAction(preparation)).toEqual(
      expect.objectContaining({
        id: "limit-feature",
        label: "Limiter la fonction ou rester en données fictives",
      }),
    );
  });

  it("routes product-contract mismatches before a generic specialist review", () => {
    const preparation = completePreparation();
    preparation.answers["article-28-assistance"] = {
      status: "review-needed",
      note: "Le délai contractuel n’est pas reproduit par le support.",
      justification: "",
    };

    expect(determineRgpdNextAction(preparation).id).toBe(
      "reconcile-product-contract",
    );
  });

  it("routes missing operational proof to a test", () => {
    const preparation = completePreparation();
    preparation.answers["restore-test"] = {
      status: "review-needed",
      note: "La sauvegarde existe ; aucune restauration chronométrée.",
      justification: "",
    };

    expect(determineRgpdNextAction(preparation).id).toBe("build-and-test");
  });

  it("routes role and transfer questions to a specialist without deciding them", () => {
    const preparation = completePreparation();
    preparation.context.roleHypothesis = "joint-to-review";

    const result = determineRgpdNextAction(preparation);
    expect(result.id).toBe("specialist-review");
    expect(result.explanation).toContain("l’outil ne tranche");
  });

  it("uses the exact review-ready boundary when all preparation facts are present", () => {
    const result = determineRgpdNextAction(completePreparation());
    expect(result.id).toBe("ready-for-review");
    expect(result.explanation).toBe(
      "Le dossier est suffisamment renseigné pour une revue. Cela ne valide ni le rôle, ni la base juridique, ni le transfert, ni la conformité du SaaS.",
    );
  });
});

describe("Markdown export", () => {
  it("uses a draft filename until the dossier is review-ready", () => {
    expect(rgpdPreparationFileName(createEmptyRgpdPreparation())).toBe(
      "brouillon-preparation-rgpd-projet.md",
    );
    expect(rgpdPreparationFileName(completePreparation())).toBe(
      "releve-preparation-rgpd-portail-reseau.md",
    );
  });

  it("marks incomplete exports as drafts and lists the next fact to collect", () => {
    const markdown = buildRgpdPreparationMarkdown(createEmptyRgpdPreparation());

    expect(markdown).toContain("# Brouillon de préparation RGPD");
    expect(markdown).toContain("Points à traiter avant une revue qualifiée");
    expect(markdown).toContain("Compléter la cartographie avant de conclure");
    expect(markdown).not.toContain("dossier conforme");
  });

  it("escapes active Markdown and HTML from user-entered values", () => {
    const preparation = completePreparation();
    preparation.context.projectName =
      "<img src=x onerror=alert(1)> **Conforme** [lien](https://example.test)";
    const markdown = buildRgpdPreparationMarkdown(preparation);

    expect(markdown).not.toContain("<img");
    expect(markdown).not.toContain("**Conforme**");
    expect(markdown).not.toContain("[lien](https://example.test)");
    expect(markdown).toContain("&lt;img");
  });
});
