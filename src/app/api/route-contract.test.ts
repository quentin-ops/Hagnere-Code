import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Contrat structurel des routes publiques.
 *
 * Le contrat existant (src/lib/route-security-contract.test.ts) fige des
 * propriétés de DEUX routes nommées. Ce qui a dérivé est précisément ce qu'une
 * liste nominative laisse passer : une route ajoutée sans plafond de corps,
 * sans compteur, ou qui journalise avec `console`. Les invariants ci-dessous
 * énumèrent donc TOUTES les routes : ajouter un `route.ts` sans le déclarer
 * ici fait échouer la suite, ce qui force l'arbitrage explicite.
 */
const API_DIR = path.join(process.cwd(), "src/app/api");

type RouteContract = {
  /** La route écrit en base ou appelle un fournisseur facturé. */
  costly: boolean;
  /** Un compteur (persistant ou mémoire) doit borner les appels. */
  rateLimited: boolean;
  /** L'en-tête `Origin` doit être exigé, pas seulement vérifié s'il existe. */
  requiresOrigin: boolean;
  /** Justification quand une garantie est volontairement absente. */
  note?: string;
};

const CONTRACTS: Record<string, RouteContract> = {
  "csp-report/route.ts": {
    costly: false,
    rateLimited: true,
    // Un rapport CSP est émis par le navigateur lui-même : aucun en-tête
    // d'origine n'est garanti. La route n'écrit rien et ne fait que logger.
    requiresOrigin: false,
    note: "Endpoint de report navigateur, sans Origin garanti.",
  },
  "funnel-analytics/route.ts": {
    costly: true,
    rateLimited: true,
    requiresOrigin: true,
  },
  "math-challenge/route.ts": {
    costly: false,
    rateLimited: true,
    // GET d'émission de jeton, appelé par des pages statiques comme par le
    // funnel ; le jeton n'ouvre aucun droit sans le plafond de soumission.
    requiresOrigin: false,
    note: "GET sans effet de bord, borné par un compteur mémoire.",
  },
  "project-inquiry/route.ts": {
    costly: true,
    rateLimited: true,
    // Point d'entrée du lead : on ne veut aucune cause supplémentaire de
    // refus. La provenance est déjà contrôlée par le jeton signé du calcul.
    requiresOrigin: false,
    note: "Protégé par le défi signé, le honeypot et le limiteur persistant.",
  },
  "sirene/route.ts": {
    costly: true,
    rateLimited: true,
    requiresOrigin: false,
    note: "GET de lecture, borné par le limiteur persistant.",
  },
  "transcribe/route.ts": {
    costly: true,
    rateLimited: true,
    requiresOrigin: true,
  },
};

function listRouteFiles(dir: string, prefix = ""): string[] {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      const relative = prefix ? `${prefix}/${entry.name}` : entry.name;
      if (entry.isDirectory()) {
        return listRouteFiles(path.join(dir, entry.name), relative);
      }
      return entry.name === "route.ts" ? [relative] : [];
    })
    .sort();
}

const routeFiles = listRouteFiles(API_DIR);
const sourceOf = (file: string) =>
  fs.readFileSync(path.join(API_DIR, file), "utf8");

describe("contrat structurel des routes /api", () => {
  it("déclare chaque route dans le contrat", () => {
    expect(routeFiles).toEqual(Object.keys(CONTRACTS).sort());
  });

  it.each(routeFiles)("%s : borne la taille du corps de chaque POST", (file) => {
    const source = sourceOf(file);
    if (!/export async function POST/.test(source)) return;
    expect(
      /readRequestBytesWithLimit|readJsonWithLimit/.test(source),
      `${file} accepte un POST sans plafond de lecture du corps.`,
    ).toBe(true);
  });

  it.each(routeFiles)("%s : compte les appels avant tout effet coûteux", (file) => {
    const contract = CONTRACTS[file];
    if (!contract.rateLimited) return;
    const source = sourceOf(file);
    expect(
      /checkServiceRateLimit\(|checkRateLimit\(/.test(source),
      `${file} n'appelle aucun compteur alors que le contrat en exige un.`,
    ).toBe(true);
  });

  it.each(routeFiles)("%s : toute route coûteuse est comptée", (file) => {
    const contract = CONTRACTS[file];
    if (!contract.costly) return;
    expect(
      contract.rateLimited,
      `${file} écrit en base ou appelle un fournisseur : elle doit être comptée.`,
    ).toBe(true);
  });

  it.each(routeFiles)("%s : exige Origin quand le contrat le prévoit", (file) => {
    const contract = CONTRACTS[file];
    const source = sourceOf(file);
    if (!contract.requiresOrigin) {
      expect(
        contract.note,
        `${file} n'exige pas Origin : la raison doit être écrite dans le contrat.`,
      ).toBeTruthy();
      return;
    }
    // `if (origin && …)` laisserait passer un client qui omet l'en-tête.
    expect(
      /if \(!origin \|\| origin !== requestOrigin\)/.test(source),
      `${file} doit refuser une requête sans en-tête Origin.`,
    ).toBe(true);
  });

  it.each(routeFiles)("%s : journalise via le logger sanitisant", (file) => {
    const source = sourceOf(file);
    expect(
      source,
      `${file} utilise console.* : en production, le logger réduit une Error à son nom, pas console.`,
    ).not.toMatch(/\bconsole\s*\./);
  });
});
