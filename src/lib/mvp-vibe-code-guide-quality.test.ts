import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import platformFacts from "./mvp-vibe-code-platform-facts.json";
import {
  MVP_VIBE_CODE_FICTITIOUS_OUTAGE,
  MVP_VIBE_CODE_FICTITIOUS_TCO,
  MVP_VIBE_CODE_REQUIRED_PROOFS,
  MVP_VIBE_CODE_TCO_FIELDS,
  MVP_VIBE_CODE_TCO_HORIZONS,
  MVP_VIBE_CODE_TRAJECTORY_IDS,
  calculateMvpVibeCodeOutage,
  calculateMvpVibeCodeTco,
} from "./mvp-vibe-code-takeover";
import workbookSources from "./mvp-vibe-code-workbook-sources.json";
import { getGuide } from "./guides";

const root = process.cwd();
const routeSource = readFileSync(
  join(root, "src/app/guides/reprendre-mvp-vibe-code/page.tsx"),
  "utf8",
);
const ogSource = readFileSync(
  join(root, "src/app/guides/reprendre-mvp-vibe-code/opengraph-image.tsx"),
  "utf8",
);
const componentSource = readFileSync(
  join(root, "src/components/guides/MvpVibeCodeTakeoverDossier.tsx"),
  "utf8",
);
const researchSource = readFileSync(
  join(root, "docs/research/reprendre-mvp-vibe-code.md"),
  "utf8",
);
const workbookPath = join(
  root,
  "public/ressources/kit-reprise-mvp-vibe-code.xlsx",
);
const normalized = routeSource.replace(/\s+/g, " ");
const guide = getGuide("reprendre-mvp-vibe-code");

describe("guide premium de reprise d’un MVP vibe-coded", () => {
  it("conserve le gabarit Patrimoine, le texte à gauche et un corps non rétréci", () => {
    expect(routeSource).toContain("<GuideLayout");
    expect(routeSource).toContain("showSidebarCta={false}");
    expect(routeSource).toContain("data-guide-chapter-gate");
    expect(routeSource).not.toContain("text-center");
    expect(routeSource).not.toMatch(/target="_blank"\s+target="_blank"/);
    expect(routeSource.match(/<GuideInlineCTA\b/g)).toHaveLength(1);
    expect(routeSource).toContain("showPhone={false}");
  });

  it("répond immédiatement puis route les cinq STOP avant l’audit ordinaire", () => {
    const lead = routeSource.match(/<p className="lead">([\s\S]*?)<\/p>/)?.[1];
    const stopIndex = routeSource.indexOf(
      "Cinq situations imposent un STOP avant l’audit ordinaire",
    );
    const inventoryIndex = routeSource.indexOf('<h2 id="code-application">');

    expect(lead).toBeDefined();
    expect(lead).toContain("<strong>Souvent oui.</strong>");
    expect(stopIndex).toBeGreaterThan(-1);
    expect(stopIndex).toBeLessThan(inventoryIndex);
    for (const expected of [
      "Autorité absente",
      "Incident actif",
      "Litige matériel",
      "Opération destructive",
      "Preuve non préservée",
      "copie en lecture seule",
    ]) {
      expect(normalized).toContain(expected);
    }
  });

  it("publie les quinze chapitres et une porte preuve-STOP-conséquence pour chacun", () => {
    for (const id of [
      "tester-avant-jeter",
      "code-application",
      "matrice-plateformes",
      "preuve-code",
      "preuve-deploiement",
      "preuve-donnees",
      "preuve-acces",
      "preuve-comptes",
      "parcours-production",
      "droit-donnees",
      "choisir",
      "migration-reversible",
      "dossier-reprise",
      "audit",
      "sources",
    ]) {
      expect(routeSource).toContain(`id="${id}"`);
    }
    expect(routeSource.match(/<h2 id="/g)).toHaveLength(15);
    expect(routeSource.match(/<ChapterGate\b/g)).toHaveLength(15);
    expect(routeSource).toContain("Preuve attendue");
    expect(routeSource).toContain("Conséquence");
    for (const expected of [
      "5, 9 et 15 : trois niveaux, une seule méthode",
      'number: "05"',
      "vérifications rapides",
      'number: "09"',
      "domaines de preuve",
      'number: "15"',
      "chapitres pédagogiques",
    ]) {
      expect(normalized).toContain(expected);
    }
  });

  it("rend exactement une fois chacun des 27 faits dans cinq groupes", () => {
    expect(platformFacts).toHaveLength(27);
    expect(workbookSources).toHaveLength(37);
    expect(new Set(platformFacts.map((fact) => fact.id)).size).toBe(27);

    const groups = [
      platformFacts.filter((fact) => fact.plateforme.startsWith("Lovable")),
      platformFacts.filter((fact) => fact.plateforme.startsWith("Bolt")),
      platformFacts.filter((fact) => fact.plateforme.startsWith("v0")),
      platformFacts.filter((fact) => fact.plateforme === "Supabase"),
      platformFacts.filter(
        (fact) =>
          fact.plateforme.startsWith("npm") ||
          fact.plateforme === "GitHub Actions",
      ),
    ];
    const renderedIds = groups.flatMap((group) => group.map((fact) => fact.id));

    expect(renderedIds).toHaveLength(platformFacts.length);
    for (const fact of platformFacts) {
      expect(
        renderedIds.filter((renderedId) => renderedId === fact.id),
        fact.id,
      ).toHaveLength(1);
    }
    expect(routeSource).toContain("data-platform-fact-id={fact.id}");
    expect(routeSource).toContain("renderedPlatformFactIds.length");
    expect(routeSource).toContain("platformFacts.length");
    expect(routeSource).toContain("Build et provenance");
  });

  it("maintient les champs canoniques, les crossrefs et zéro source orpheline", () => {
    const sourceIds = new Set(workbookSources.map((source) => source.id));
    expect(sourceIds.size).toBe(workbookSources.length);
    expect(
      workbookSources.every((source) => source.checkedAt === "2026-07-28"),
    ).toBe(true);
    for (const requiredSourceId of [
      "LOV-PROJECT-TRANSFER",
      "V0-TRANSFER",
      "SUPABASE-TRANSFER",
      "GITHUB-SECRET-SCANNING",
      "VERCEL-TERMS",
      "VERCEL-AI-TERMS",
      "CNIL-VIOLATIONS",
      "UK-DDAT-PLAYBOOK",
    ]) {
      expect(sourceIds.has(requiredSourceId), requiredSourceId).toBe(true);
    }

    for (const source of workbookSources) {
      for (const key of [
        "id",
        "zone",
        "organisme",
        "titre",
        "url",
        "usage",
        "limite",
        "checkedAt",
      ] as const) {
        expect(
          source[key].trim().length,
          `${source.id}.${key}`,
        ).toBeGreaterThan(0);
      }
      expect(source.url, source.id).toMatch(/^https:\/\//);
    }

    for (const fact of platformFacts) {
      expect(fact.checkedAt).toBe("2026-07-28");
      expect(sourceIds.has(fact.source), fact.id).toBe(true);
      expect(fact.capacité.length).toBeGreaterThan(30);
      expect(fact.ce_qui_ne_suit_pas.length).toBeGreaterThan(30);
      expect(fact.preuve_a_executer.length).toBeGreaterThan(50);
      expect(fact.frontière.length).toBeGreaterThan(50);
    }

    const pageSourceIds = [
      ...routeSource.matchAll(/sourceUrl\("([A-Z0-9-]+)"\)/g),
    ].map((match) => match[1]);
    for (const sourceId of pageSourceIds) {
      expect(sourceIds.has(sourceId), sourceId).toBe(true);
    }
    const referencedSourceIds = new Set([
      ...platformFacts.map((fact) => fact.source),
      ...pageSourceIds,
    ]);
    expect([...sourceIds].filter((id) => !referencedSourceIds.has(id))).toEqual(
      [],
    );
  });

  it("distingue les transferts natifs, copies et migrations externes", () => {
    const factById = new Map(platformFacts.map((fact) => [fact.id, fact]));
    const boltTransfer = factById.get("BOLT-PROJECT-TRANSFER");
    const boltDuplicate = factById.get("BOLT-PROJECT-DUPLICATE");

    expect(boltTransfer?.capacité).toContain(
      "connexions Bolt Database, GitHub et Supabase conservées",
    );
    expect(boltTransfer?.ce_qui_ne_suit_pas).toContain(
      "GitHub est retiré à l’acceptation",
    );
    expect(boltTransfer?.ce_qui_ne_suit_pas).toContain(
      "domaine personnalisé est retiré",
    );
    expect(boltTransfer?.ce_qui_ne_suit_pas).toContain(
      "Supabase doit être transférée séparément",
    );
    expect(boltDuplicate?.ce_qui_ne_suit_pas).toContain(
      "historique de chat, qui est toujours effacé",
    );
    for (const id of [
      "LOV-PROJECT-TRANSFER",
      "V0-SCOPE-TRANSFER",
      "SUPABASE-PROJECT-TRANSFER",
    ]) {
      expect(factById.has(id), id).toBe(true);
    }
    const nativeIndex = routeSource.indexOf("1. Transfert natif");
    const copyIndex = routeSource.indexOf("2. Export, copie et reconstruction");
    const externalIndex = routeSource.indexOf("3. Migration externe");
    expect(nativeIndex).toBeGreaterThan(-1);
    expect(nativeIndex).toBeLessThan(copyIndex);
    expect(copyIndex).toBeLessThan(externalIndex);
    expect(normalized).toContain(
      "Les comptes GitHub, Supabase, Vercel, registrar, identité, paiement ou e-mail conservent leurs propres propriétaires",
    );
  });

  it("relie source, build, artefact, provenance, SBOM et licences", () => {
    for (const expected of [
      "commit",
      "lockfile",
      "versions Node et npm",
      "variables attendues sans copier leur valeur secrète",
      "artefact produit",
      "empreinte",
      "identifiant du pipeline",
      "SPDX ou CycloneDX",
      "dépendances directes et transitives",
      "fin de support",
      "NIST SSDF 1.1",
      "NCSC sur le pipeline",
      "plusieurs builds indépendants",
      "comparaison de leurs artefacts",
      "reconstructible une première fois",
    ]) {
      expect(normalized).toContain(expected);
    }
  });

  it("restaure le système complet et rend RPO/RTO vérifiables", () => {
    for (const expected of [
      "schéma, contraintes",
      "fonctions, triggers",
      "objets Storage",
      "tâches planifiées",
      "files de messages",
      "webhooks",
      "<strong>RPO</strong>",
      "<strong>RTO</strong>",
      "0 transaction perdue",
      "RPO/RTO acceptés",
    ]) {
      expect(normalized).toContain(expected);
    }
    expect(routeSource).toContain('sourceUrl("SUPABASE-BACKUPS")');
  });

  it("couvre autorisations, ASVS, secrets, métier, production et incident", () => {
    for (const expected of [
      "rôles × ressources × actions × états",
      "accès horizontal",
      "Compte désactivé",
      "OWASP ASVS 5.0",
      "idempotence",
      "webhook de paiement",
      "deux actions simultanées",
      "journaux, métriques, traces et alertes",
      "exercice d’incident",
      "72 heures",
    ]) {
      expect(normalized).toContain(expected);
    }
  });

  it("borne le droit français, le RGPD et le Data Act sans fausse conformité", () => {
    for (const expected of [
      "article L111-1",
      "article L113-9",
      "article L131-3",
      "article 28 du RGPD",
      "sous-traitants ultérieurs",
      "12 septembre 2025",
      "droit à la portabilité du RGPD",
      "Données et actifs",
      "Formats et interfaces",
      "Limites et délai",
      "30 jours calendaires",
      "sept mois",
      "Période de récupération",
      "12 janvier 2027",
      "équivalence fonctionnelle",
      "plus étroites",
      "avocat en propriété intellectuelle",
      "spécialiste compétent",
    ]) {
      expect(normalized).toContain(expected);
    }
    expect(normalized).not.toMatch(
      /le Data Act garantit que tout|tout est juridiquement exportable|le MVP est conforme RGPD|le MVP est certifié ASVS/i,
    );
  });

  it("affiche neuf hypothèses et dérive les cinq TCO du moteur canonique", () => {
    const tco = calculateMvpVibeCodeTco(MVP_VIBE_CODE_FICTITIOUS_TCO);
    const outage = calculateMvpVibeCodeOutage(MVP_VIBE_CODE_FICTITIOUS_OUTAGE);

    expect(tco.kind).toBe("known");
    expect(tco.totals.conserve).toEqual({
      12: 50_000,
      36: 110_000,
      60: 170_000,
    });
    expect(tco.totals.rewrite).toEqual({
      12: 224_000,
      36: 332_000,
      60: 440_000,
    });
    expect(MVP_VIBE_CODE_TCO_FIELDS).toHaveLength(9);
    for (const trajectoryId of MVP_VIBE_CODE_TRAJECTORY_IDS) {
      const assumptions = MVP_VIBE_CODE_FICTITIOUS_TCO[trajectoryId];
      for (const horizon of MVP_VIBE_CODE_TCO_HORIZONS) {
        const expectedTotal =
          assumptions.oneOff! +
          assumptions.monthly! * horizon +
          assumptions.annual! * (horizon / 12) +
          assumptions.internalOneOffHours! * assumptions.internalHourlyRate! +
          assumptions.internalMonthlyHours! *
            assumptions.internalHourlyRate! *
            horizon +
          assumptions.doubleRunMonthly! *
            Math.min(assumptions.doubleRunMonths!, horizon) +
          assumptions.exit!;
        expect(
          tco.totals[trajectoryId][horizon],
          `${trajectoryId}.${horizon}`,
        ).toBe(expectedTotal);
      }
    }
    expect(outage.observableCost).toBe(16_000);
    expect(outage.expectedAnnualCost).toBe(4_000);
    for (const expected of [
      "TcoAssumptionsTable",
      "Les 9 hypothèses du cas fictif",
      "MVP_VIBE_CODE_TCO_FIELDS.map",
      "MVP_VIBE_CODE_TRAJECTORY_IDS.map",
      "fictitiousTcoEvaluation.totals",
      "overflow-x-auto",
      "Toute entrée inconnue = ND, jamais 0 €",
      "16 000 €",
      "4 000 € d’espérance de perte",
      "ni des tarifs Hagnéré Code, ni des moyennes de marché, ni un devis",
    ]) {
      expect(normalized).toContain(expected);
    }
    expect(routeSource).not.toContain('"50 000 €"');
    expect(routeSource).not.toContain('"224 000 €"');
  });

  it("transforme les benchmarks mondiaux en contrôles et preuves concrètes", () => {
    for (const expected of [
      "Attestation vérifiée et digest comparé",
      "Rôles, règles de dépôt, exigences du build et registre de remédiation",
      "Identifiants ASVS retenus, attendu, résultat, date et référence de test",
      "Droits du pipeline, SBOM, journal de build, provenance et rollback exécuté",
      "modèle de menace et résultats des contrôles",
      "RACI, registre des risques, protections CI/CD",
    ]) {
      expect(normalized).toContain(expected);
    }
  });

  it("répond à la FAQ coût sans inventer de prix moyen", () => {
    const costAnswer = faqItemsSource(routeSource, "Combien coûte la reprise");
    for (const expected of [
      "accès disponibles",
      "nombre de couches et d’intégrations",
      "volume de données",
      "criticité de la production",
      "inconnues juridiques ou de sécurité",
      "préserver et inventorier",
      "reconstruire une copie isolée",
      "incident",
      "droits contestés",
      "paiements critiques",
    ]) {
      expect(costAnswer).toContain(expected);
    }
    expect(costAnswer).toContain("pas de prix moyen défendable");
    expect(costAnswer).not.toMatch(/\b\d[\d\s]*\s?€|fourchette moyenne/i);
  });

  it("décrit une migration réversible avec réconciliation et hypercare", () => {
    for (const expected of [
      "source d’autorité",
      "double écriture",
      "export initial",
      "les deltas",
      "critères GO, STOP et retour arrière",
      "rapprocher les données",
      "hypercare",
      "rollback",
      "double fonctionnement",
    ]) {
      expect(normalized).toContain(expected);
    }
  });

  it("intègre exactement un outil local et le classeur téléchargeable", () => {
    expect(
      routeSource.match(/<MvpVibeCodeTakeoverDossier\s*\/>/g),
    ).toHaveLength(1);
    expect(routeSource).toContain("/ressources/kit-reprise-mvp-vibe-code.xlsx");
    expect(MVP_VIBE_CODE_REQUIRED_PROOFS).toHaveLength(9);
    expect(componentSource).toContain(
      "export function MvpVibeCodeTakeoverDossier",
    );
    expect(componentSource).toContain('data-read-time-exclude="true"');
    expect(componentSource).toContain("Tout reste dans votre navigateur");
    expect(componentSource).toContain("Référence de preuve — jamais le secret");
    expect(existsSync(workbookPath)).toBe(true);
    if (existsSync(workbookPath)) {
      expect(statSync(workbookPath).size).toBeGreaterThan(10_000);
      expect(readFileSync(workbookPath).subarray(0, 2).toString()).toBe("PK");
    }
  });

  it("publie exactement dix FAQ visibles et des données structurées fidèles", () => {
    const faqBlock = routeSource.match(
      /const faqItems\s*=\s*\[([\s\S]*?)\n\];/,
    )?.[1];
    expect(faqBlock).toBeDefined();
    expect(faqBlock?.match(/question:/g)).toHaveLength(10);
    expect(routeSource).toContain("faqItems={faqItems}");
    expect(routeSource).toContain('"@type": "Article"');
    expect(routeSource).toContain('"@type": "BreadcrumbList"');
    expect(routeSource).not.toMatch(
      /FAQPage|HowTo|AggregateRating|"@type": "Offer"/,
    );
  });

  it("garde des métadonnées cohérentes et une image sociale dédiée", () => {
    expect(guide).toMatchObject({
      dateModified: "2026-07-28",
      readTimeMin: 42,
      heroTitle:
        "Comment reprendre un MVP créé avec Lovable, Bolt ou v0 sans tout refaire ?",
    });
    expect(guide.title.length).toBeLessThanOrEqual(60);
    expect(guide.metaDescription.length).toBeLessThanOrEqual(155);
    expect(ogSource).toContain(
      "Reprendre un MVP Lovable, Bolt ou v0 sans tout refaire",
    );
    expect(ogSource).toContain(
      "Preuves, sécurité, TCO et migration réversible",
    );
  });

  it("interdit les raccourcis dangereux et les revendications non prouvées", () => {
    expect(routeSource.split(/\s+/).length).toBeGreaterThan(8_000);
    expect(routeSource).not.toMatch(
      /100 % sécurisé|aucun risque|un ZIP suffit|un dépôt GitHub suffit|réécriture obligatoire|prix de marché garanti|prochain jour ouvré|href="tel:/i,
    );
  });

  it("garde le rectificatif R1 candidat et NO_GO jusqu’au contre-audit", () => {
    expect(researchSource).toContain("Rectificatif R1 — 28 juillet 2026");
    expect(researchSource).toContain("CANDIDAT");
    expect(researchSource).toContain("NO_GO");
    expect(researchSource).toContain("contre-audit");
  });
});

function faqItemsSource(source: string, questionStart: string) {
  const start = source.indexOf(`question: "${questionStart}`);
  if (start === -1) return "";
  const end = source.indexOf("\n  },", start);
  return source.slice(start, end === -1 ? source.length : end);
}
