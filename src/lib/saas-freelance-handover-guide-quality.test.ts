import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { strFromU8, unzipSync } from "fflate";
import { describe, expect, it } from "vitest";
import { getGuide } from "./guides";

const root = process.cwd();
const routeSource = readFileSync(
  join(root, "src/app/guides/reprendre-saas-developpe-par-freelance/page.tsx"),
  "utf8",
);
const componentSource = readFileSync(
  join(root, "src/components/guides/SaasFreelanceHandoverDecisionDossier.tsx"),
  "utf8",
);
const modelSource = readFileSync(
  join(root, "src/lib/saas-handover-decision.ts"),
  "utf8",
);
const generatorSource = readFileSync(
  join(root, "scripts/generate-saas-freelance-handover-kit.mjs"),
  "utf8",
);
const validatorSource = readFileSync(
  join(root, "scripts/validate-saas-freelance-handover-kit.mjs"),
  "utf8",
);
const researchSource = readFileSync(
  join(root, "docs/research/reprendre-saas-developpe-par-freelance.md"),
  "utf8",
);
const handoverFunctions = JSON.parse(
  readFileSync(
    join(root, "src/lib/saas-freelance-handover-functions.json"),
    "utf8",
  ),
) as Array<{
  id: number;
  service: string;
  criticality: string;
  decisionOwner: string;
  businessImpact: string;
  check: string;
  removal: string;
}>;
const acceptanceTests = JSON.parse(
  readFileSync(
    join(root, "src/lib/saas-freelance-handover-acceptance-tests.json"),
    "utf8",
  ),
) as Array<{
  id: string;
  family: string;
  case: string;
  expected: string;
}>;
const continuityTargets = JSON.parse(
  readFileSync(
    join(root, "src/lib/saas-freelance-handover-continuity-targets.json"),
    "utf8",
  ),
) as Array<{
  journey: string;
  impact: string;
  rtoHours: number;
  rtoLabel: string;
  rpoHours: number | null;
  rpoLabel: string;
  evidence: string;
  decisionOwner: string;
}>;
const workbookSources = JSON.parse(
  readFileSync(
    join(root, "src/lib/saas-freelance-handover-workbook-sources.json"),
    "utf8",
  ),
) as string[][];
const workbookPath = join(
  root,
  "public/ressources/kit-reprise-saas-freelance.xlsx",
);
const normalized = routeSource.replace(/\s+/g, " ");
const researchNormalized = researchSource.replace(/\s+/g, " ");
const guide = getGuide("reprendre-saas-developpe-par-freelance");

describe("guide premium reprise d’un SaaS développé par un freelance", () => {
  it("route clairement la passation normale, l’inconnu et l’incident", () => {
    expect(normalized).toContain("passation normale, litige ou incident");
    expect(normalized).toContain(
      "À la fin du contrat, désactivez les accès du prestataire",
    );
    expect(normalized).toContain(
      "sauf prolongation écrite précisant durée, périmètre, responsable et journaux de contrôle",
    );
    expect(normalized).toContain(
      "préserver les preuves, limiter l’exposition avec une personne compétente",
    );
    expect(componentSource).toContain(
      'type TransitionMode = "unknown" | "normal" | "incident"',
    );
    expect(componentSource).toContain("const modelStatus =");
    expect(componentSource).toContain('transitionMode === "normal"');
    expect(componentSource).toContain('? "PASS"');
  });

  it("publie dix fonctions canoniques avec décideur, impact et condition de retrait", () => {
    expect(handoverFunctions).toHaveLength(10);
    expect(new Set(handoverFunctions.map((entry) => entry.id)).size).toBe(10);
    expect(new Set(handoverFunctions.map((entry) => entry.service)).size).toBe(
      10,
    );
    for (const entry of handoverFunctions) {
      expect(entry.businessImpact.length).toBeGreaterThan(60);
      expect(entry.decisionOwner.length).toBeGreaterThan(8);
      expect(entry.check.length).toBeGreaterThan(60);
      expect(entry.removal.length).toBeGreaterThan(70);
    }
    expect(routeSource).toContain(
      'import handoverFunctions from "@/lib/saas-freelance-handover-functions.json"',
    );
    expect(routeSource).toContain("handoverFunctions.map((item)");
    expect(routeSource).toContain("<details");
    expect(normalized).toContain(
      "Vue dirigeant — impact, décision et prochain contrôle",
    );
  });

  it("partage dix-huit tests canoniques entre la page et le classeur", () => {
    expect(acceptanceTests).toHaveLength(18);
    for (const [index, test] of acceptanceTests.entries()) {
      expect(test.id).toBe(`R-${String(index + 1).padStart(2, "0")}`);
      expect(test.family.length).toBeGreaterThan(3);
      expect(test.case.length).toBeGreaterThan(10);
      expect(test.expected.length).toBeGreaterThan(70);
    }
    expect(routeSource).toContain(
      'import acceptanceTests from "@/lib/saas-freelance-handover-acceptance-tests.json"',
    );
    expect(routeSource).toContain("acceptanceTests.map((test)");
    expect(normalized).toContain(
      "Afficher la matrice complète des 18 tests de reprise",
    );
    expect(generatorSource).toContain(
      "saas-freelance-handover-acceptance-tests.json",
    );
    expect(validatorSource).toContain(
      "saas-freelance-handover-acceptance-tests.json",
    );
  });

  it("sépare comptes, droits, licences et sort des données", () => {
    for (const expected of [
      "Contrôle du compte",
      "Droits d’exploitation",
      "Sort des données",
      "restitution et destruction",
      "copies et des sauvegardes",
      "justification écrite de la destruction",
      "logiciel créé par un salarié",
      "L113-9",
      "L131-3",
    ]) {
      expect(normalized).toContain(expected);
    }
    expect(normalized).toContain(
      "Pas automatiquement. En droit français, la situation dépend notamment de l’auteur",
    );
  });

  it("rend RTO et RPO compréhensibles par parcours avec leurs limites", () => {
    for (const journey of [
      "Connexion",
      "Paiement",
      "Action métier",
      "Documents",
      "Support et alertes",
    ]) {
      expect(continuityTargets.map((target) => target.journey)).toContain(
        journey,
      );
    }
    expect(normalized).toContain("point restaurable toutes les 24 heures");
    expect(normalized).toContain(
      "un instant d’incident uniformément réparti dans l’intervalle et un flux d’événements suffisamment régulier",
    );
    expect(normalized).toContain(
      "Des objectifs plus courts coûtent généralement plus cher",
    );
    for (const source of [
      "https://csrc.nist.gov/glossary/term/recovery_time_objective",
      "https://csrc.nist.gov/glossary/term/recovery_point_objective",
      "https://docs.aws.amazon.com/prescriptive-guidance/latest/startup-resiliency-baseline/stage-1.html",
      "https://docs.cloud.google.com/architecture/dr-scenarios-planning-guide",
    ]) {
      expect(routeSource).toContain(source);
    }
    expect(continuityTargets).toHaveLength(5);
    expect(routeSource).toContain(
      'import continuityTargets from "@/lib/saas-freelance-handover-continuity-targets.json"',
    );
    expect(routeSource).toContain("continuityTargets.map((target)");
    expect(generatorSource).toContain(
      "saas-freelance-handover-continuity-targets.json",
    );
    expect(validatorSource).toContain(
      "Les cibles RTO/RPO, impacts et preuves doivent rester identiques à la page",
    );
    expect(continuityTargets[1]).toMatchObject({
      journey: "Paiement",
      rtoHours: 1,
      rpoHours: 0,
    });
    expect(continuityTargets[4]).toMatchObject({
      journey: "Support et alertes",
      rtoHours: 1,
      rpoHours: null,
    });
  });

  it("publie les TCO, seuils et calculs de continuité vérifiés", () => {
    for (const amount of [
      "141 500 €",
      "186 640 €",
      "274 800 €",
      "133 300 €",
      "166,625",
      "6,17",
      "4 050 €",
      "675 €",
    ]) {
      expect(normalized).toContain(amount);
    }
    expect(normalized).toContain(
      "4,81 h n’est valable qu’avec une probabilité annuelle d’incident de 100 %",
    );
    expect(normalized).toContain("19,26 h");
    expect(normalized).toContain("48,14 h");
    expect(researchSource).toContain(
      "1 280 € en passation préparée, 2 720 € en crise, soit 1 440 € d’écart direct",
    );
    expect(modelSource).toContain("saas-handover-decision-r3-2026-07-28");
    for (const calculation of [
      "calculateSaasHandoverTco",
      "calculateRewriteThreshold",
      "calculateRpo",
      "calculateRecoveryExercise",
      "calculateOutage",
      "calculateAccountRecovery",
    ]) {
      expect(modelSource).toContain(`function ${calculation}`);
    }
  });

  it("fournit un outil local qui refuse les secrets et les inconnues", () => {
    expect(routeSource).toContain("<SaasFreelanceHandoverDecisionDossier />");
    expect(componentSource).toContain("Rien n’est envoyé");
    expect(componentSource).toContain("N’inscrivez ici aucun mot de passe");
    expect(componentSource).not.toContain("<textarea");
    expect(componentSource).toContain(
      "/ressources/kit-reprise-saas-freelance.xlsx",
    );
    expect(componentSource).toContain("buildSaasHandoverCsv");
    expect(componentSource).toContain("window.print()");
    expect(componentSource).not.toContain("fetch(");
  });

  it("livre un classeur réimportable avec dix feuilles et dix-huit sources", () => {
    expect(existsSync(workbookPath)).toBe(true);
    const workbookBytes = readFileSync(workbookPath);
    expect(workbookBytes.subarray(0, 2).toString()).toBe("PK");
    const workbookArchive = unzipSync(workbookBytes);
    const workbookXml = strFromU8(workbookArchive["xl/workbook.xml"]);
    for (const sheetName of [
      "LIRE_D_ABORD",
      "REGISTRE",
      "CRITICITE",
      "RTO_RPO",
      "TCO_36_MOIS",
      "DECISION",
      "PLAN_SORTIE",
      "TESTS",
      "CONTROLES",
      "SOURCES",
    ]) {
      expect(workbookXml).toContain(`name="${sheetName}"`);
    }
    expect(workbookSources).toHaveLength(18);
    expect(new Set(workbookSources.map((row) => row[2])).size).toBe(18);
    expect(
      workbookSources.some((row) => row[1] === "Digital Agency Japan"),
    ).toBe(true);
    expect(
      workbookSources.some(
        (row) => row[1] === "Australian Signals Directorate",
      ),
    ).toBe(true);
    expect(generatorSource).toContain(
      "saas-freelance-handover-workbook-sources.json",
    );
    expect(validatorSource).toContain("sabotageEvidence");
    expect(validatorSource).toContain("adversarialEvidence");
    expect(validatorSource).toContain("mutationEvidence");
    expect(validatorSource).toContain("formulaErrors: 0");
  });

  it("documente les transferts fournisseurs et le plan de sortie mondial", () => {
    for (const source of [
      "https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository",
      "https://vercel.com/docs/projects/transferring-projects",
      "https://docs.stripe.com/billing/subscriptions/import-subscriptions-toolkit",
      "https://www.gov.uk/government/publications/the-digital-data-and-technology-playbook/the-digital-data-and-technology-playbook",
      "https://www.cyber.gov.au/about-us/advisories/protecting-against-cyber-threats-managed-service-providers-and-their-customers",
    ]) {
      expect(routeSource).toContain(source);
    }
    expect(normalized).toContain("Le plan de sortie devient un actif vivant");
    expect(normalized).toContain(
      "MFA, moindre privilège et suppression des comptes devenus inutiles",
    );
    expect(normalized).toContain(
      "benchmark de commande publique, pas une règle applicable telle quelle à une PME française",
    );
    expect(normalized).toContain(
      "mise à jour le 25 novembre 2025 et consultée le 28 juillet 2026",
    );
  });

  it("reste aligné à gauche, daté et transparent sur le conflit commercial", () => {
    expect(routeSource).not.toContain("text-center");
    expect(componentSource).not.toContain("text-center");
    expect(routeSource.match(/<GuideInlineCTA\b/g)).toHaveLength(1);
    expect(routeSource).toContain('ctaService="saas"');
    expect(routeSource).toContain('ctaSource="guide-reprise-saas-freelance"');
    expect(routeSource).toContain("showPhone={false}");
    expect(routeSource).toContain("showSidebarCta={false}");
    expect(guide.dateModified).toBe("2026-07-28");
    expect(guide.readTimeMin).toBe(33);
    expect(normalized).toContain("Notre conflit d’intérêt est explicite");
    expect(normalized).toContain(
      "Les sources officielles ci-dessous ont été revérifiées le 28 juillet 2026",
    );
    expect(researchSource).toContain(
      "Les quatre passes du 21 juillet conservées plus bas sont un historique obsolète",
    );
    expect(researchNormalized).toContain(
      "Validation classeur R3 : deux réimports et cinq mutations légitimes",
    );
    expect(researchNormalized).toContain(
      "Onze entrées adversariales sont refusées",
    );
    expect(researchNormalized).toContain(
      "Huit sabotages de formules sont détectés",
    );
    expect(researchNormalized).toContain(
      "Précontrôle ciblé R3 du 28 juillet : **33/33 tests passent**",
    );
    expect(researchSource).not.toContain(
      "Retirez l'accès selon un résultat, jamais selon une date",
    );
    expect(researchNormalized).toContain(
      "À la fin du contrat, l’accès est désactivé, sauf prolongation écrite",
    );
    expect(normalized).toContain("14. Sources contrôlées");
  });
});
