import { describe, expect, it } from "vitest";
import {
  WEBSITE_TAKEOVER_COST_CATEGORIES,
  WEBSITE_TAKEOVER_INSUFFICIENT_PROOF_KINDS,
  WEBSITE_TAKEOVER_PROOF_LABELS,
  WEBSITE_TAKEOVER_TCO_HORIZONS,
  WEBSITE_TAKEOVER_TRAJECTORIES,
  WEBSITE_TAKEOVER_TRAJECTORY_IDS,
  WEBSITE_TAKEOVER_ZONE_IDS,
  WEBSITE_TAKEOVER_ZONES,
  buildWebsiteTakeoverAuditCsv,
  buildWebsiteTakeoverAuditFilename,
  buildWebsiteTakeoverAuditJson,
  buildWebsiteTakeoverAuditReport,
  calculateWebsiteTakeoverTco,
  createEmptyWebsiteTakeoverAuditDossier,
  createEmptyWebsiteTakeoverTcoInput,
  createFictitiousWebsiteTakeoverAuditDossier,
  evaluateWebsiteTakeoverAudit,
  evaluateWebsiteTakeoverZone,
  formatWebsiteTakeoverCents,
  formatWebsiteTakeoverZoneImpact,
  parseWebsiteTakeoverAuditJson,
  redactWebsiteTakeoverSecretsBestEffort,
  triageWebsiteTakeoverAudit,
  type WebsiteTakeoverAuditDossier,
  type WebsiteTakeoverComplexityProfile,
  type WebsiteTakeoverCostCategory,
  type WebsiteTakeoverCostLine,
  type WebsiteTakeoverProofKind,
  type WebsiteTakeoverStopProfile,
  type WebsiteTakeoverTcoInput,
  type WebsiteTakeoverZoneId,
} from "./website-takeover-audit";

function goDossier(): WebsiteTakeoverAuditDossier {
  const dossier = createFictitiousWebsiteTakeoverAuditDossier();
  dossier.zones.documentation_support = {
    ...dossier.zones.documentation_support,
    status: "verified",
    proofKind: "documentation-handover-test",
    result:
      "Une personne fictive indépendante a suivi le runbook jusqu’au support.",
  };
  return dossier;
}

function lightContext(): WebsiteTakeoverAuditDossier["context"] {
  const context = structuredClone(goDossier().context);
  for (const key of Object.keys(context.complexity) as Array<
    keyof WebsiteTakeoverComplexityProfile
  >) {
    context.complexity[key] = false;
  }
  context.stopProfile = {
    authorizationConfirmed: true,
    activeCompromise: false,
    destructiveOperationPlanned: false,
    restoreProven: undefined,
    isolatedTestingPossible: true,
    blockingAuthorityOrLegalDispute: false,
  };
  return context;
}

function costLine(
  id: string,
  amountCents: string | undefined,
  frequency: WebsiteTakeoverCostLine["frequency"],
  startMonth: number,
  category: WebsiteTakeoverCostCategory = frequency === "monthly"
    ? "operations"
    : frequency === "annual"
      ? "licences-services"
      : frequency === "exit"
        ? "exit-reversibility"
        : "transition",
): WebsiteTakeoverCostLine {
  return {
    rowKey: `row-${id}`,
    id,
    costKey: id,
    category,
    label: `Coût ${id}`,
    amountCents,
    quantity: "1",
    frequency,
    startMonth,
    endMonth:
      frequency === "monthly" || frequency === "annual" ? 60 : startMonth,
    sourceDate: "2026-07-27",
    source: `Source datée ${id}`,
  };
}

function completeTco(
  lines: WebsiteTakeoverCostLine[],
  commonScope = "Même périmètre fonctionnel, technique et opérationnel",
): WebsiteTakeoverTcoInput {
  const input = createEmptyWebsiteTakeoverTcoInput();
  input.convention = {
    currency: "EUR",
    taxBasis: "HT",
    valuationDate: "2026-07-27",
    source: "Hypothèses et devis datés du cas de test",
    commonScope,
    costCategoriesReviewed: true,
    riskMethod: "Réserve explicite selon les risques nommés du cas de test.",
  };
  const presentCategories = new Set(lines.map((line) => line.category));
  const completeLines = [...lines];
  for (const category of WEBSITE_TAKEOVER_COST_CATEGORIES) {
    if (!presentCategories.has(category)) {
      completeLines.push(
        costLine(
          `zero-${category}`,
          "0",
          category === "operations"
            ? "monthly"
            : category === "licences-services"
              ? "annual"
              : category === "exit-reversibility"
                ? "exit"
                : "one-off",
          category === "operations" || category === "licences-services" ? 1 : 0,
          category,
        ),
      );
    }
  }
  for (const id of WEBSITE_TAKEOVER_TRAJECTORY_IDS) {
    input.trajectories[id] = {
      commonScope,
      assumptions:
        "Mêmes fonctions, volumes, intégrations, exigences et horaires.",
      costLines: structuredClone(completeLines),
    };
  }
  return input;
}

describe("structure du dossier d’audit avant reprise", () => {
  it("expose exactement dix-huit zones et quatre trajectoires", () => {
    expect(WEBSITE_TAKEOVER_ZONE_IDS).toHaveLength(18);
    expect(Object.keys(WEBSITE_TAKEOVER_ZONES)).toHaveLength(18);
    expect(WEBSITE_TAKEOVER_TRAJECTORY_IDS).toHaveLength(4);
    expect(Object.keys(WEBSITE_TAKEOVER_TRAJECTORIES)).toHaveLength(4);

    const dossier = createEmptyWebsiteTakeoverAuditDossier();
    expect(Object.keys(dossier.zones)).toHaveLength(18);
    expect(Object.keys(dossier.tco.trajectories)).toHaveLength(4);
    expect(WEBSITE_TAKEOVER_TCO_HORIZONS).toEqual([12, 36, 60]);
  });

  it("échoue fermé avec un dossier vide et ne transforme rien en GO", () => {
    const evaluation = evaluateWebsiteTakeoverAudit(
      createEmptyWebsiteTakeoverAuditDossier(),
    );

    expect(evaluation.triage.level).toBe("full");
    expect(evaluation.triage.complete).toBe(false);
    expect(evaluation.verdict).toBe("incomplete");
    expect(evaluation.canProceed).toBe(false);
    expect(evaluation.blockingZoneIds).toEqual(WEBSITE_TAKEOVER_ZONE_IDS);
    expect(evaluation.tco.kind).toBe("unknown");
    expect(evaluation.counts.P0).toBe(0);
    expect(evaluation.counts.P1).toBeGreaterThan(0);
  });

  it("produit un exemple fictif complet mais volontairement sous réserves", () => {
    const dossier = createFictitiousWebsiteTakeoverAuditDossier();
    const evaluation = evaluateWebsiteTakeoverAudit(dossier);

    expect(evaluation.triage.level).toBe("full");
    expect(evaluation.triage.complete).toBe(true);
    expect(evaluation.complete).toBe(true);
    expect(evaluation.verdict).toBe("go-with-reservations");
    expect(evaluation.canProceed).toBe(true);
    expect(evaluation.counts).toEqual({ P0: 0, P1: 0, P2: 1 });
    expect(evaluation.zones.documentation_support.effectiveStatus).toBe(
      "declared",
    );
    expect(evaluation.tco.kind).toBe("known");
    expect(evaluation.tco.trajectories.control).toMatchObject({
      totalsCents: {
        12: "3050000",
        36: "6290000",
        60: "9530000",
      },
    });
    expect(evaluation.tco.trajectories.stabilize).toMatchObject({
      totalsCents: {
        12: "4950000",
        36: "8950000",
        60: "12950000",
      },
    });
    expect(evaluation.tco.trajectories["progressive-migration"]).toMatchObject({
      totalsCents: {
        12: "8800000",
        36: "13200000",
        60: "17600000",
      },
    });
    expect(evaluation.tco.trajectories.rebuild).toMatchObject({
      totalsCents: {
        12: "12930000",
        36: "16490000",
        60: "20050000",
      },
    });
  });

  it("n’accorde GO que lorsque contexte, dix-huit zones et TCO sont prouvés", () => {
    const evaluation = evaluateWebsiteTakeoverAudit(goDossier());

    expect(evaluation.verdict).toBe("go");
    expect(evaluation.complete).toBe(true);
    expect(evaluation.canProceed).toBe(true);
    expect(evaluation.counts).toEqual({ P0: 0, P1: 0, P2: 0 });
    expect(evaluation.blockingZoneIds).toEqual([]);
  });

  it("n’impose pas un TCO complet à un audit technique réellement léger", () => {
    const dossier = goDossier();
    dossier.context = lightContext();
    dossier.tco = createEmptyWebsiteTakeoverTcoInput();

    const evaluation = evaluateWebsiteTakeoverAudit(dossier);

    expect(evaluation.triage.level).toBe("light");
    expect(evaluation.tco.kind).toBe("unknown");
    expect(evaluation.findings).not.toContainEqual(
      expect.objectContaining({ code: "tco-incomplete" }),
    );
    expect(evaluation.reasons).toContainEqual(
      expect.stringContaining("TCO ND : non requis"),
    );
    expect(evaluation.verdict).toBe("go");
    expect(evaluation.canProceed).toBe(true);
  });
});

describe("triage léger, complet et STOP", () => {
  it("n’autorise l’audit léger que lorsque tous ses critères sont explicitement faux", () => {
    const triage = triageWebsiteTakeoverAudit(lightContext());

    expect(triage).toMatchObject({
      level: "light",
      complete: true,
      lightBlockers: [],
      stopCodes: [],
    });
  });

  it("interdit strictement le léger pour chacun des treize déclencheurs", () => {
    const keys = (
      Object.keys(lightContext().complexity) as Array<
        keyof WebsiteTakeoverComplexityProfile
      >
    ).filter((key) => key !== "hasAnyPersonalDataProcessing");
    expect(keys).toHaveLength(13);

    for (const key of keys) {
      const context = lightContext();
      context.complexity[key] = true;
      const triage = triageWebsiteTakeoverAudit(context);

      expect(triage.level, key).toBe("full");
      expect(triage.complete, key).toBe(true);
      expect(triage.lightBlockers, key).toContain(key);
    }
  });

  it("sépare l’applicabilité RGPD du déclenchement d’un audit complet", () => {
    const context = lightContext();
    context.complexity.hasAnyPersonalDataProcessing = true;
    context.complexity.processesPersonalData = false;

    expect(triageWebsiteTakeoverAudit(context)).toMatchObject({
      level: "light",
      complete: true,
      lightBlockers: [],
    });

    const valid = goDossier();
    valid.context = structuredClone(context);
    valid.tco = createEmptyWebsiteTakeoverTcoInput();
    expect(evaluateWebsiteTakeoverAudit(valid)).toMatchObject({
      verdict: "go",
      canProceed: true,
    });

    const invalid = structuredClone(valid);
    invalid.zones.privacy_processors_transfers_retention = {
      ...invalid.zones.privacy_processors_transfers_retention,
      applicable: false,
      status: "NA",
      blocksReprise: false,
      proofKind: "non-applicability-evidence",
      naJustification:
        "Le site serait prétendument sans traitement de données personnelles.",
    };
    const evaluation = evaluateWebsiteTakeoverAudit(invalid);

    expect(evaluation.verdict).toBe("incomplete");
    expect(evaluation.canProceed).toBe(false);
    expect(evaluation.findings).toContainEqual(
      expect.objectContaining({
        code: "complexity-applicability-conflict",
        zoneId: "privacy_processors_transfers_retention",
      }),
    );
  });

  it("refuse un profil niant tout traitement malgré un accès réel ou à risque", () => {
    const dossier = goDossier();
    dossier.context = lightContext();
    dossier.context.complexity.hasAnyPersonalDataProcessing = false;
    dossier.context.complexity.processesPersonalData = true;

    const evaluation = evaluateWebsiteTakeoverAudit(dossier);

    expect(evaluation.verdict).toBe("incomplete");
    expect(evaluation.canProceed).toBe(false);
    expect(evaluation.findings).toContainEqual(
      expect.objectContaining({ code: "personal-data-profile-conflict" }),
    );
  });

  it("bascule en audit complet incomplet si un critère du léger est inconnu", () => {
    const context = lightContext();
    context.complexity.hasPayments = undefined;

    const triage = triageWebsiteTakeoverAudit(context);

    expect(triage.level).toBe("full");
    expect(triage.complete).toBe(false);
    expect(triage.missingFields).toContain("complexity.hasPayments");
  });

  it("échoue fermé si l’objet de complexité importé ne contient aucune des quatorze clés", () => {
    const context = lightContext();
    context.complexity = {} as WebsiteTakeoverComplexityProfile;

    const triage = triageWebsiteTakeoverAudit(context);

    expect(triage.level).toBe("full");
    expect(triage.complete).toBe(false);
    expect(triage.missingFields).toHaveLength(14);
    expect(triage.missingFields).toContain("complexity.hasPayments");
    expect(triage.missingFields).toContain("complexity.hasStructuralUnknown");
  });

  it.each<[string, (profile: WebsiteTakeoverStopProfile) => void, string]>([
    [
      "autorisation absente",
      (profile) => {
        profile.authorizationConfirmed = false;
      },
      "authorization-absent",
    ],
    [
      "compromission active",
      (profile) => {
        profile.activeCompromise = true;
      },
      "active-compromise",
    ],
    [
      "opération destructive sans restauration",
      (profile) => {
        profile.destructiveOperationPlanned = true;
        profile.restoreProven = false;
      },
      "destructive-without-restore",
    ],
    [
      "test isolé impossible",
      (profile) => {
        profile.isolatedTestingPossible = false;
      },
      "isolated-test-impossible",
    ],
    [
      "autorité ou litige bloquant",
      (profile) => {
        profile.blockingAuthorityOrLegalDispute = true;
      },
      "authority-or-legal-block",
    ],
  ])("donne priorité au STOP pour %s", (_label, mutate, expectedCode) => {
    const dossier = goDossier();
    mutate(dossier.context.stopProfile);

    const evaluation = evaluateWebsiteTakeoverAudit(dossier);

    expect(evaluation.triage.level).toBe("stop");
    expect(evaluation.triage.stopCodes).toContain(expectedCode);
    expect(evaluation.verdict).toBe("stop");
    expect(evaluation.canProceed).toBe(false);
    expect(evaluation.counts.P0).toBeGreaterThan(0);
  });

  it("considère une restauration inconnue comme non prouvée avant destruction", () => {
    const dossier = goDossier();
    dossier.context.stopProfile.destructiveOperationPlanned = true;
    dossier.context.stopProfile.restoreProven = undefined;

    const evaluation = evaluateWebsiteTakeoverAudit(dossier);

    expect(evaluation.triage.stopCodes).toContain(
      "destructive-without-restore",
    );
    expect(evaluation.verdict).toBe("stop");
  });

  it("conserve le STOP prioritaire même si le triage comporte aussi des inconnues", () => {
    const dossier = goDossier();
    dossier.context.stopProfile.activeCompromise = true;
    dossier.context.complexity.hasPayments = undefined;

    const evaluation = evaluateWebsiteTakeoverAudit(dossier);

    expect(evaluation.triage.level).toBe("stop");
    expect(evaluation.triage.complete).toBe(false);
    expect(evaluation.verdict).toBe("stop");
  });
});

describe("registre de preuves et faux GO", () => {
  it("bloque le GO pour toute zone applicable inconnue", () => {
    for (const id of WEBSITE_TAKEOVER_ZONE_IDS) {
      const dossier = goDossier();
      dossier.zones[id] = {
        ...dossier.zones[id],
        status: "unknown",
        proofKind: "unknown",
      };

      const evaluation = evaluateWebsiteTakeoverAudit(dossier);

      expect(evaluation.zones[id].effectiveStatus, id).toBe("unknown");
      expect(evaluation.blockingZoneIds, id).toContain(id);
      expect(evaluation.verdict, id).toBe("incomplete");
      expect(evaluation.canProceed, id).toBe(false);
    }
  });

  it("bloque une zone vérifiée dont l’impact reprise est vrai ou non qualifié", () => {
    for (const blocksReprise of [true, undefined] as const) {
      const dossier = goDossier();
      dossier.zones.documentation_support.blocksReprise = blocksReprise;

      const evaluation = evaluateWebsiteTakeoverAudit(dossier);

      expect(evaluation.verdict, String(blocksReprise)).toBe("incomplete");
      expect(evaluation.canProceed, String(blocksReprise)).toBe(false);
      expect(evaluation.blockingZoneIds, String(blocksReprise)).toContain(
        "documentation_support",
      );
      expect(evaluation.findings, String(blocksReprise)).toContainEqual(
        expect.objectContaining({
          severity: "P1",
          code:
            blocksReprise === true
              ? "zone-blocks-reprise"
              : "zone-impact-unknown",
          zoneId: "documentation_support",
        }),
      );
    }
  });

  it("déclasse toutes les preuves faibles explicitement interdites", () => {
    const cases: Array<[WebsiteTakeoverProofKind, WebsiteTakeoverZoneId]> = [
      ["declaration-only", "ownership_authorization"],
      ["build-only", "code_history_build"],
      ["backup-exists-only", "backups_restore_rpo_rto"],
      ["provider-status-only", "domain_dns_tls_cdn"],
      ["homepage-only", "integrations_critical_journeys"],
      ["sbom-only", "dependencies_sbom_licenses_eol"],
      ["automated-accessibility-only", "accessibility"],
      ["lighthouse-only", "performance_capacity"],
      ["search-console-ownership-only", "seo_analytics"],
    ];
    expect(cases.map(([proof]) => proof)).toEqual(
      WEBSITE_TAKEOVER_INSUFFICIENT_PROOF_KINDS,
    );

    for (const [proofKind, zoneId] of cases) {
      const dossier = goDossier();
      dossier.zones[zoneId].status = "verified";
      dossier.zones[zoneId].proofKind = proofKind;

      const zone = evaluateWebsiteTakeoverZone(dossier, zoneId);
      const evaluation = evaluateWebsiteTakeoverAudit(dossier);

      expect(zone.effectiveStatus, proofKind).toBe("declared");
      expect(zone.proofAccepted, proofKind).toBe(false);
      const blocksOrdinaryTakeover = evaluation.counts.P1 > 0;
      expect(evaluation.verdict, proofKind).toBe(
        blocksOrdinaryTakeover ? "incomplete" : "go-with-reservations",
      );
      expect(evaluation.canProceed, proofKind).toBe(!blocksOrdinaryTakeover);
      expect(evaluation.findings, proofKind).toContainEqual(
        expect.objectContaining({
          code: "proof-insufficient",
          zoneId,
        }),
      );
    }
  });

  it("refuse aussi une preuve forte utilisée dans la mauvaise zone", () => {
    const dossier = goDossier();
    dossier.zones.domain_dns_tls_cdn.proofKind =
      "restore-recovery-objective-test";

    const evaluation = evaluateWebsiteTakeoverAudit(dossier);

    expect(evaluation.zones.domain_dns_tls_cdn.effectiveStatus).toBe(
      "declared",
    );
    expect(evaluation.verdict).toBe("incomplete");
    expect(evaluation.canProceed).toBe(false);
  });

  it("déclasse une vérification dont les champs ou la date sont incomplets", () => {
    const missingOwner = goDossier();
    missingOwner.zones.cicd_artifact_rollback.owner = "";
    const missingEvaluation = evaluateWebsiteTakeoverAudit(missingOwner);

    expect(missingEvaluation.zones.cicd_artifact_rollback.effectiveStatus).toBe(
      "declared",
    );
    expect(missingEvaluation.findings).toContainEqual(
      expect.objectContaining({
        code: "evidence-incomplete",
        zoneId: "cicd_artifact_rollback",
      }),
    );

    const future = goDossier();
    future.zones.cicd_artifact_rollback.observedOn = "2026-07-28";
    const futureEvaluation = evaluateWebsiteTakeoverAudit(future);
    expect(futureEvaluation.zones.cicd_artifact_rollback.effectiveStatus).toBe(
      "declared",
    );
    expect(futureEvaluation.verdict).not.toBe("go");
  });

  it("conserve un échec P1 et bloque la reprise ordinaire", () => {
    const dossier = goDossier();
    dossier.zones.logs_metrics_alerts.status = "failed";
    dossier.zones.logs_metrics_alerts.result =
      "L’événement de test n’a déclenché aucune alerte.";
    dossier.zones.logs_metrics_alerts.forbiddenAction =
      "Ne pas promettre une supervision active.";

    const evaluation = evaluateWebsiteTakeoverAudit(dossier);

    expect(evaluation.zones.logs_metrics_alerts.effectiveStatus).toBe("failed");
    expect(evaluation.verdict).toBe("incomplete");
    expect(evaluation.canProceed).toBe(false);
    expect(evaluation.counts.P1).toBe(1);
  });

  it("refuse NA sur une zone applicable, même avec une justification", () => {
    const dossier = goDossier();
    dossier.zones.data_migrations.status = "NA";
    dossier.zones.data_migrations.naJustification =
      "La zone serait prétendument sans objet.";

    const evaluation = evaluateWebsiteTakeoverAudit(dossier);

    expect(evaluation.zones.data_migrations.effectiveStatus).toBe("unknown");
    expect(evaluation.verdict).toBe("incomplete");
    expect(evaluation.findings).toContainEqual(
      expect.objectContaining({
        code: "na-invalid",
        zoneId: "data_migrations",
      }),
    );
  });

  it("exige une justification avant d’accepter une vraie non-applicabilité", () => {
    const invalid = goDossier();
    invalid.context.complexity.hasMutableBusinessData = false;
    invalid.zones.data_migrations = {
      ...invalid.zones.data_migrations,
      applicable: false,
      status: "NA",
      naJustification: "",
    };

    expect(
      evaluateWebsiteTakeoverAudit(invalid).zones.data_migrations
        .effectiveStatus,
    ).toBe("unknown");

    const valid = goDossier();
    valid.context.complexity.hasMutableBusinessData = false;
    valid.zones.data_migrations = {
      ...valid.zones.data_migrations,
      applicable: false,
      status: "NA",
      blocksReprise: false,
      proofKind: "non-applicability-evidence",
      naJustification:
        "Site fictif sans base, écriture, fichier utilisateur ni migration selon l’inventaire daté.",
    };
    const evaluation = evaluateWebsiteTakeoverAudit(valid);

    expect(evaluation.zones.data_migrations.effectiveStatus).toBe("NA");
    expect(evaluation.verdict).toBe("go");
  });

  it("refuse un N/A sans preuve dédiée, limite ou action interdite", () => {
    const dossier = goDossier();
    dossier.context.complexity.hasMutableBusinessData = false;
    dossier.context.complexity.plansMigration = false;
    dossier.zones.data_migrations = {
      ...dossier.zones.data_migrations,
      applicable: false,
      status: "NA",
      blocksReprise: false,
      proofKind: "unknown",
      limitation: "",
      forbiddenAction: "",
      naJustification:
        "Le périmètre fictif inventorié ne contient aucune donnée mutable ni migration.",
    };

    const evaluation = evaluateWebsiteTakeoverAudit(dossier);

    expect(evaluation.zones.data_migrations.effectiveStatus).toBe("unknown");
    expect(evaluation.verdict).toBe("incomplete");
    expect(evaluation.canProceed).toBe(false);
    expect(evaluation.counts.P1).toBeGreaterThan(0);
  });

  it("promeut en P1 toute réserve P2 incomplète ou déclarée bloquante", () => {
    const incomplete = goDossier();
    incomplete.zones.accessibility.status = "failed";
    incomplete.zones.accessibility.blocksReprise = false;
    incomplete.zones.accessibility.result =
      "Le parcours clavier fictif échoue sur la fenêtre de confirmation.";
    incomplete.zones.accessibility.owner = "";
    incomplete.zones.accessibility.limitation = "";
    incomplete.zones.accessibility.forbiddenAction = "";
    incomplete.zones.accessibility.dueOn = "";

    const incompleteEvaluation = evaluateWebsiteTakeoverAudit(incomplete);
    expect(incompleteEvaluation.counts.P1).toBeGreaterThan(0);
    expect(incompleteEvaluation.verdict).toBe("incomplete");
    expect(incompleteEvaluation.canProceed).toBe(false);

    const blocking = goDossier();
    blocking.zones.accessibility.status = "failed";
    blocking.zones.accessibility.blocksReprise = true;
    blocking.zones.accessibility.result =
      "Le parcours clavier fictif échoue sur une fonction critique.";

    const blockingEvaluation = evaluateWebsiteTakeoverAudit(blocking);
    expect(blockingEvaluation.counts.P1).toBeGreaterThan(0);
    expect(blockingEvaluation.verdict).toBe("incomplete");
    expect(blockingEvaluation.canProceed).toBe(false);
  });

  it("n’accepte jamais NA pour une zone toujours applicable", () => {
    const dossier = goDossier();
    dossier.zones.ownership_authorization = {
      ...dossier.zones.ownership_authorization,
      applicable: false,
      status: "NA",
      naJustification:
        "La propriété opérationnelle serait prétendument sans objet.",
    };

    const evaluation = evaluateWebsiteTakeoverAudit(dossier);

    expect(evaluation.zones.ownership_authorization.effectiveStatus).toBe(
      "unknown",
    );
    expect(evaluation.verdict).toBe("incomplete");
  });

  it("interdit tout GO lorsque les dix-huit contrôles sont seulement déclarés", () => {
    const dossier = goDossier();
    for (const id of WEBSITE_TAKEOVER_ZONE_IDS) {
      dossier.zones[id] = {
        ...dossier.zones[id],
        status: "declared",
        proofKind: "declaration-only",
        artifactReference: "",
      };
    }

    const evaluation = evaluateWebsiteTakeoverAudit(dossier);

    expect(evaluation.counts.P1).toBeGreaterThan(0);
    expect(evaluation.verdict).toBe("incomplete");
    expect(evaluation.complete).toBe(false);
    expect(evaluation.canProceed).toBe(false);
    expect(evaluation.blockingZoneIds.length).toBeGreaterThan(0);
  });

  it("ferme les six contournements NA lorsque le profil rend la zone nécessaire", () => {
    const optionalIds: WebsiteTakeoverZoneId[] = [
      "code_history_build",
      "cicd_artifact_rollback",
      "dependencies_sbom_licenses_eol",
      "data_migrations",
      "seo_analytics",
      "privacy_processors_transfers_retention",
    ];
    for (const id of optionalIds) {
      const dossier = goDossier();
      dossier.zones[id] = {
        ...dossier.zones[id],
        applicable: false,
        status: "NA",
        proofKind: "unknown",
        naJustification: "Sans objet.",
      };

      const evaluation = evaluateWebsiteTakeoverAudit(dossier);

      expect(evaluation.zones[id].effectiveStatus, id).toBe("unknown");
      expect(evaluation.findings, id).toContainEqual(
        expect.objectContaining({
          code: "complexity-applicability-conflict",
          zoneId: id,
        }),
      );
      expect(evaluation.canProceed, id).toBe(false);
    }
  });

  it("expire une preuve ancienne et exige son événement de réouverture", () => {
    const dossier = goDossier();
    dossier.zones.ownership_authorization.validUntil = "2026-07-26";
    dossier.zones.ownership_authorization.reopenTrigger = "";

    const evaluation = evaluateWebsiteTakeoverAudit(dossier);

    expect(evaluation.verdict).toBe("incomplete");
    expect(evaluation.canProceed).toBe(false);
    expect(evaluation.findings).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ code: "evidence-expired" }),
        expect.objectContaining({ code: "evidence-review-missing" }),
      ]),
    );
  });

  it("énumère plusieurs défauts simultanés d’une même preuve", () => {
    const dossier = goDossier();
    dossier.zones.ownership_authorization = {
      ...dossier.zones.ownership_authorization,
      proofKind: "declaration-only",
      artifactReference: "x",
      validUntil: "2026-07-26",
      nextAction: "",
    };

    const codes = evaluateWebsiteTakeoverAudit(dossier)
      .findings.filter(
        (finding) => finding.zoneId === "ownership_authorization",
      )
      .map((finding) => finding.code);

    expect(codes).toEqual(
      expect.arrayContaining([
        "proof-insufficient",
        "evidence-incomplete",
        "evidence-expired",
        "evidence-review-missing",
      ]),
    );
  });
});

describe("TCO exact à 12, 36 et 60 mois", () => {
  it("calcule exactement initial, mensuel, annuel et sortie aux trois horizons", () => {
    const input = completeTco([
      costLine("initial", "10000", "one-off", 0),
      costLine("mensuel", "100", "monthly", 1),
      costLine("annuel", "1200", "annual", 1),
      costLine("sortie", "500", "exit", 0),
    ]);

    const result = calculateWebsiteTakeoverTco(input);

    expect(result.kind).toBe("known");
    for (const id of WEBSITE_TAKEOVER_TRAJECTORY_IDS) {
      expect(result.trajectories[id]).toEqual({
        kind: "known",
        label: "calculé",
        totalsCents: {
          12: "12900",
          36: "17700",
          60: "22500",
        },
        issues: [],
      });
    }
  });

  it("préserve une arithmétique exacte bien au-delà des nombres JS sûrs", () => {
    const huge = "900719925474099199999999";
    const result = calculateWebsiteTakeoverTco(
      completeTco([costLine("exact", huge, "one-off", 0)]),
    );

    expect(result.kind).toBe("known");
    expect(result.trajectories.control).toMatchObject({
      kind: "known",
      totalsCents: {
        12: huge,
        36: huge,
        60: huge,
      },
    });
  });

  it("proratise un coût annuel sur ses seuls mois réellement actifs", () => {
    const annual = costLine(
      "licence-active-en-juillet",
      "1200",
      "annual",
      7,
    );
    annual.endMonth = 60;

    const result = calculateWebsiteTakeoverTco(completeTco([annual]));

    expect(result.trajectories.control).toMatchObject({
      kind: "known",
      totalsCents: {
        12: "600",
        36: "3000",
        60: "5400",
      },
    });
  });

  it("garde un montant absent à ND sans le convertir en zéro", () => {
    const result = calculateWebsiteTakeoverTco(
      completeTco([costLine("inconnu", undefined, "one-off", 0)]),
    );

    expect(result.kind).toBe("unknown");
    expect(result.trajectories.control).toMatchObject({
      kind: "unknown",
      label: "ND",
      totalsCents: undefined,
    });
    expect(result.trajectories.control.issues).toContainEqual(
      expect.objectContaining({
        code: "missing-cost-line",
        field: expect.stringContaining("amountCents"),
      }),
    );
  });

  it("distingue un zéro explicitement sourcé d’un champ absent", () => {
    const result = calculateWebsiteTakeoverTco(
      completeTco([costLine("zero-explicite", "0", "one-off", 0)]),
    );

    expect(result.kind).toBe("known");
    expect(result.trajectories.control).toMatchObject({
      kind: "known",
      totalsCents: { 12: "0", 36: "0", 60: "0" },
    });
  });

  it("refuse un micro-coût isolé qui omet six catégories canoniques", () => {
    const input = completeTco([
      costLine("micro", "1", "one-off", 0, "transition"),
    ]);
    for (const id of WEBSITE_TAKEOVER_TRAJECTORY_IDS) {
      input.trajectories[id].costLines = [
        costLine("micro", "1", "one-off", 0, "transition"),
      ];
    }

    const result = calculateWebsiteTakeoverTco(input);

    expect(result.kind).toBe("unknown");
    expect(result.trajectories.control.issues).toContainEqual(
      expect.objectContaining({ code: "missing-cost-category" }),
    );
  });

  it("applique quantité et mois de fin aux coûts temporaires", () => {
    const monthly = costLine("renfort", "100", "monthly", 1, "operations");
    monthly.quantity = "2";
    monthly.endMonth = 12;

    const result = calculateWebsiteTakeoverTco(completeTco([monthly]));

    expect(result.trajectories.control).toMatchObject({
      kind: "known",
      totalsCents: { 12: "2400", 36: "2400", 60: "2400" },
    });
  });

  it("rejette décimales, nombres négatifs et mois incohérents", () => {
    for (const [amount, startMonth] of [
      ["12.34", 0],
      ["-100", 0],
      ["100", -1],
      ["100", 61],
    ] as const) {
      const result = calculateWebsiteTakeoverTco(
        completeTco([costLine("invalide", amount, "one-off", startMonth)]),
      );
      expect(result.kind, `${amount}/${startMonth}`).toBe("unknown");
      expect(result.trajectories.control.issues.length).toBeGreaterThan(0);
    }
  });

  it("détecte simplement le double compte par origine ou identifiant", () => {
    const first = costLine("maintenance", "1000", "annual", 1);
    const duplicate = {
      ...costLine("autre-id", "2000", "annual", 1),
      costKey: "  MAINTENANCE ",
    };
    const result = calculateWebsiteTakeoverTco(completeTco([first, duplicate]));

    expect(result.kind).toBe("unknown");
    expect(result.trajectories.control.issues).toContainEqual(
      expect.objectContaining({ code: "duplicate-cost" }),
    );
  });

  it("exige les quatre trajectoires sur exactement le même périmètre", () => {
    const input = completeTco([costLine("initial", "1000", "one-off", 0)]);
    input.trajectories.rebuild.commonScope = "Périmètre plus petit";

    const result = calculateWebsiteTakeoverTco(input);

    expect(result.kind).toBe("unknown");
    expect(result.trajectories.rebuild.issues).toContainEqual(
      expect.objectContaining({
        code: "scope-mismatch",
        trajectoryId: "rebuild",
      }),
    );
  });

  it("refuse devise, HT/TTC, date ou source manquants", () => {
    const input = completeTco([costLine("initial", "1000", "one-off", 0)]);
    input.convention = {
      ...input.convention,
      currency: "€",
      taxBasis: undefined,
      valuationDate: "27/07/2026",
      source: "",
    };

    const result = calculateWebsiteTakeoverTco(input);

    expect(result.kind).toBe("unknown");
    expect(result.issues).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ code: "missing-convention" }),
        expect.objectContaining({ code: "invalid-currency" }),
        expect.objectContaining({ code: "invalid-date" }),
      ]),
    );
  });

  it("refuse une pseudo-devise de trois lettres non reconnue", () => {
    const input = completeTco([costLine("initial", "1000", "one-off", 0)]);
    input.convention.currency = "ZZZ";

    const result = calculateWebsiteTakeoverTco(input);

    expect(result.kind).toBe("unknown");
    expect(result.issues).toContainEqual(
      expect.objectContaining({ code: "invalid-currency" }),
    );
  });

  it("refuse les devises qui ne correspondent pas au stockage à deux décimales", () => {
    for (const currency of ["JPY", "KWD"]) {
      const input = completeTco([costLine("initial", "1000", "one-off", 0)]);
      input.convention.currency = currency;

      const result = calculateWebsiteTakeoverTco(input);

      expect(result.kind, currency).toBe("unknown");
      expect(result.issues, currency).toContainEqual(
        expect.objectContaining({ code: "invalid-currency" }),
      );
    }
  });

  it("bloque le verdict si le TCO ne partage pas le périmètre du dossier", () => {
    const dossier = goDossier();
    dossier.tco.convention.commonScope =
      "Un autre périmètre technique et fonctionnel";

    const evaluation = evaluateWebsiteTakeoverAudit(dossier);

    expect(evaluation.verdict).toBe("incomplete");
    expect(evaluation.findings).toContainEqual(
      expect.objectContaining({ code: "scope-mismatch" }),
    );
  });

  it("formate les centimes sans conversion flottante", () => {
    expect(formatWebsiteTakeoverCents("123456789", "EUR", "HT")).toBe(
      "1 234 567,89 EUR HT",
    );
    expect(formatWebsiteTakeoverCents("1", "EUR", "TTC")).toBe("0,01 EUR TTC");
  });

  it("distingue un constat levé d’une réserve P2 ou P1", () => {
    expect(formatWebsiteTakeoverZoneImpact(false, [])).toBe("non bloquant");
    expect(formatWebsiteTakeoverZoneImpact(false, ["P2"])).toBe(
      "non bloquant, planifié — P2",
    );
    expect(formatWebsiteTakeoverZoneImpact(false, ["P1"])).toBe(
      "qualification non bloquante incomplète — P1",
    );
    expect(formatWebsiteTakeoverZoneImpact(true, [])).toBe("bloquant — P1");
  });
});

describe("rapports TXT, JSON, CSV et nom de fichier", () => {
  it("rend les dix-huit zones, quatre trajectoires et le verdict en français", () => {
    const dossier = createFictitiousWebsiteTakeoverAuditDossier();
    const report = buildWebsiteTakeoverAuditReport(dossier);

    expect(report).toContain("DOSSIER LOCAL D’AUDIT AVANT REPRISE");
    expect(report).toContain("Décision : GO SOUS RÉSERVES");
    expect(report).toContain("DIX-HUIT ZONES DE PREUVE");
    expect(report).toContain("TCO À PÉRIMÈTRE ÉGAL");
    for (const id of WEBSITE_TAKEOVER_ZONE_IDS) {
      expect(report).toContain(WEBSITE_TAKEOVER_ZONES[id].label);
    }
    for (const id of WEBSITE_TAKEOVER_TRAJECTORY_IDS) {
      expect(report).toContain(WEBSITE_TAKEOVER_TRAJECTORIES[id].label);
    }
  });

  it("affiche ND pour le dossier et le TCO vides, jamais un faux total nul", () => {
    const report = buildWebsiteTakeoverAuditReport(
      createEmptyWebsiteTakeoverAuditDossier(),
    );

    expect(report).toContain("Référence : ND");
    expect(report).toContain("État global : ND");
    expect(report).toContain("Totaux 12/36/60 mois : ND");
    expect(report).not.toContain("12 mois : 0,00");
    expect(report).not.toContain("36 mois : 0,00");
    expect(report).not.toContain("60 mois : 0,00");
  });

  it("masque au mieux les secrets dans les trois formats", () => {
    const dossier = goDossier();
    const secrets = [
      ["sk", "live", "51AbCdEfGhIjKlMnOpQrStUv"].join("_"),
      "AKIAIOSFODNN7EXAMPLE",
      "ghp_abcdefghijklmnopqrstuvwxyz1234567890",
      ["xoxb", "123456789012", "abcdefghijklmnopqrstuvwx"].join("-"),
      "ClientSecret987654321",
    ];
    dossier.context.siteName = secrets[0];
    dossier.zones.identities_secrets.result = [
      secrets[1],
      secrets[2],
      secrets[3],
      `client_secret=${secrets[4]}`,
    ].join(" | ");
    dossier.tco.convention.source =
      "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.abcdefghijklmno.signatureABC";

    const outputs = [
      buildWebsiteTakeoverAuditReport(dossier),
      buildWebsiteTakeoverAuditJson(dossier),
      buildWebsiteTakeoverAuditCsv(dossier),
    ];

    for (const output of outputs) {
      for (const secret of secrets) {
        expect(output).not.toContain(secret);
      }
      expect(output).toContain("MASQUÉ");
    }
    expect(() => JSON.parse(outputs[1])).not.toThrow();
  });

  it("masque les signatures cloud, URI de base et jetons GitLab ou npm", () => {
    const hostile = [
      "https://blob.example/a?sig=VERYSECRETSIGNATURE123456",
      "https://storage.example/a?X-Goog-Signature=ABCDEF123456789",
      "postgresql://admin:motdepasse@db.example/base",
      "glpat-AbCdEfGhIjKlMnOpQrSt",
      "npm_abcdefghijklmnopqrstuvwxyz123456",
    ].join("\n");

    const redacted = redactWebsiteTakeoverSecretsBestEffort(hostile);

    expect(redacted).not.toContain("VERYSECRETSIGNATURE");
    expect(redacted).not.toContain("ABCDEF123456789");
    expect(redacted).not.toContain("motdepasse");
    expect(redacted).not.toContain("glpat-");
    expect(redacted).not.toContain("npm_");
  });

  it("réimporte exactement un JSON compatible et refuse une version étrangère", () => {
    const dossier = goDossier();
    const serialized = buildWebsiteTakeoverAuditJson(dossier);

    expect(parseWebsiteTakeoverAuditJson(serialized)).toEqual(dossier);
    expect(() =>
      parseWebsiteTakeoverAuditJson(
        serialized.replace(
          "website-takeover-audit-r4-2026-07-27",
          "version-étrangère",
        ),
      ),
    ).toThrow(/Version incompatible/);
  });

  it("refuse un JSON R4 auquel manquent les quatorze clés de qualification", () => {
    const payload = JSON.parse(buildWebsiteTakeoverAuditJson(goDossier())) as {
      dossier: { context: { complexity: Record<string, unknown> } };
    };
    payload.dossier.context.complexity = {};

    expect(() =>
      parseWebsiteTakeoverAuditJson(JSON.stringify(payload)),
    ).toThrow(/quatorze critères de qualification/);
  });

  it("préserve les inconnues explicites d’un dossier vide au réimport", () => {
    const dossier = createEmptyWebsiteTakeoverAuditDossier();
    const serialized = buildWebsiteTakeoverAuditJson(dossier);

    expect(serialized).toContain('"hasPayments": null');
    expect(serialized).toContain('"blocksReprise": null');
    expect(parseWebsiteTakeoverAuditJson(serialized)).toEqual(dossier);
  });

  it("livre un CSV BOM avec métadonnées, réserves et lignes TCO sourcées", () => {
    const dossier = createFictitiousWebsiteTakeoverAuditDossier();
    const csv = buildWebsiteTakeoverAuditCsv(dossier);

    expect(csv.startsWith("\uFEFF")).toBe(true);
    expect(csv).toContain("website-takeover-audit-r4-2026-07-27");
    expect(
      WEBSITE_TAKEOVER_PROOF_LABELS["source-history-build-reproduction"],
    ).toContain("droits utiles vérifiés");
    expect(csv).toContain("go-with-reservations");
    expect(csv).toContain("TCO-coût");
    expect(csv).toContain("risk-reserve");
    expect(csv).toContain("Exemple fictif");
    expect(csv).toContain("P2");
  });

  it("neutralise une formule CSV sans altérer le dossier source", () => {
    const dossier = goDossier();
    dossier.zones.documentation_support.result =
      '=HYPERLINK("https://example.invalid";"ouvrir")';

    const csv = buildWebsiteTakeoverAuditCsv(dossier);

    expect(csv).toContain("\"'=HYPERLINK");
    expect(dossier.zones.documentation_support.result.startsWith("=")).toBe(
      true,
    );
  });

  it("construit un nom fixe à partir de la seule date validée", () => {
    const dossier = goDossier();
    dossier.context.reference = "../../client_secret=SUPERSECRET/=HYPERLINK";
    dossier.context.siteName = "../Boutique privée";

    expect(buildWebsiteTakeoverAuditFilename(dossier)).toBe(
      "dossier-audit-reprise-2026-07-27.txt",
    );
    expect(buildWebsiteTakeoverAuditFilename(dossier, "json")).toBe(
      "dossier-audit-reprise-2026-07-27.json",
    );
    expect(buildWebsiteTakeoverAuditFilename(dossier, "csv")).toBe(
      "dossier-audit-reprise-2026-07-27.csv",
    );
    expect(buildWebsiteTakeoverAuditFilename(dossier)).not.toContain(
      "SUPERSECRET",
    );
  });

  it("retombe sur un nom local si la date est hostile ou invalide", () => {
    const dossier = goDossier();
    dossier.context.evaluationDate = "../../2026-99-99";

    expect(buildWebsiteTakeoverAuditFilename(dossier)).toBe(
      "dossier-audit-reprise-local.txt",
    );
  });
});
