/**
 * Contrats structurels des routes de src/app : sitemap, hub des services et
 * identité JSON-LD.
 *
 * Complète `sitemap.test.ts` (sitemap ↔ page.tsx) sur trois points que l'audit
 * de pré-lancement a trouvés en écart :
 *
 * 1. Les six pages légales doivent toutes être dans le sitemap — l'assertion
 *    existante n'en couvrait que cinq, /legal/reclamations manquait.
 * 2. Le hub /services doit dériver sa liste de SERVICE_LINKS. Codée en dur,
 *    elle donnait sept noms divergents pour les mêmes URL et rien n'empêchait
 *    un service ajouté au registre d'être absent du hub, ou l'inverse.
 * 3. Aucune page ne doit recopier l'entité #organization à la main. Onze pages
 *    service publiaient chacune leur propre copie de l'adresse, du téléphone,
 *    de l'e-mail et du numéro de TVA, avec un `logo` en chaîne là où le
 *    registre publie un ImageObject dimensionné : quatre signatures
 *    différentes pour un seul @id, et douze endroits à corriger le jour où un
 *    champ change.
 */
import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";
import { describe, expect, it } from "vitest";
import { PRIVACY_NOTICE_VERSION } from "@/lib/privacy-notice";
import { SITE_URL } from "@/lib/seo";
import { SERVICE_LINKS } from "@/lib/services";
import sitemap from "./sitemap";

const PROJECT_ROOT = process.cwd();
const APP_DIR = join(PROJECT_ROOT, "src", "app");

const LEGAL_ROUTES = [
  "/legal/mentions",
  "/legal/cgv",
  "/legal/confidentialite",
  "/legal/cookies",
  "/legal/reclamations",
  "/legal/accessibilite",
];

function appSourceFiles(dir: string = APP_DIR): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...appSourceFiles(full));
    } else if (
      /\.(?:ts|tsx)$/.test(entry.name) &&
      !/\.test\.(?:ts|tsx)$/.test(entry.name)
    ) {
      out.push(full);
    }
  }
  return out;
}

function read(file: string): string {
  return readFileSync(file, "utf8");
}

const sitemapUrls = sitemap().map((entry) => entry.url);

describe("contrats de routes", () => {
  it("publie les six pages légales dans le sitemap", () => {
    for (const route of LEGAL_ROUTES) {
      expect(sitemapUrls, `${route} absente du sitemap`).toContain(
        `${SITE_URL}${route}`,
      );
    }
  });

  it("aligne le lastModified de chaque page légale sur son LAST_UPDATED affiché", () => {
    // La date publiée dans le sitemap doit être celle que la page affiche dans
    // son gabarit, sinon le sitemap ment sur la fraîcheur d'un document
    // contractuel. Ce test rend la dérive impossible.
    const entries = sitemap();

    for (const route of LEGAL_ROUTES) {
      const pageSource = read(join(APP_DIR, route.slice(1), "page.tsx"));
      // /legal/confidentialite dérive sa date de PRIVACY_NOTICE_VERSION : la
      // version horodatée sur chaque lead et le texte publié ne peuvent pas
      // diverger (cf. src/lib/privacy-notice.ts).
      const lastUpdated = /const LAST_UPDATED = PRIVACY_NOTICE_VERSION;/.test(
        pageSource,
      )
        ? PRIVACY_NOTICE_VERSION
        : pageSource.match(/const LAST_UPDATED = "([\d-]+)"/)?.[1];
      expect(
        lastUpdated,
        `LAST_UPDATED introuvable dans ${route}/page.tsx`,
      ).toBeDefined();

      const entry = entries.find(
        (candidate) => candidate.url === `${SITE_URL}${route}`,
      );
      expect(entry?.lastModified, route).toBe(lastUpdated);
    }
  });

  it("dérive la liste du hub /services du registre SERVICE_LINKS", () => {
    const source = read(join(APP_DIR, "services", "page.tsx"));

    expect(source).toContain("SERVICE_LINKS.map(");
    // Une liste réintroduite en dur se repère à ses URL littérales.
    for (const service of SERVICE_LINKS) {
      expect(
        source,
        `${service.path} réécrit en littéral dans le hub`,
      ).not.toContain(`"${service.path}"`);
    }
  });

  it("n'écrit l'entité #organization à la main dans aucune page", () => {
    // Signatures d'une entité recopiée : elles n'ont leur place que dans
    // src/lib/organization-structured-data.ts.
    const handWrittenMarkers = [
      /legalName:\s*"HAGNERE CODE"/,
      /vatID:\s*"FR30993672856"/,
      /streetAddress:\s*"82 impasse de Bellevue"/,
      /logo:\s*["`]https:\/\/hagnere-code\.ai\/logos/,
    ];

    const offenders: string[] = [];
    for (const file of appSourceFiles()) {
      const source = read(file);
      if (handWrittenMarkers.some((marker) => marker.test(source))) {
        offenders.push(relative(PROJECT_ROOT, file).replace(/\\/g, "/"));
      }
    }

    expect(
      offenders,
      `Importez PUBLIC_ORGANIZATION_ENTITY depuis src/lib/organization-structured-data.ts au lieu de recopier l'entité dans : ${offenders.join(", ")}`,
    ).toEqual([]);
  });

  it("ne publie aucune adresse e-mail en dur dans les données structurées des pages", () => {
    // L'e-mail public est un champ de l'entité, pas une constante de page :
    // c'est ce qui permettra de le changer en une seule fois.
    const offenders = appSourceFiles()
      .filter((file) => /email:\s*"[^"]+@/.test(read(file)))
      .map((file) => relative(PROJECT_ROOT, file).replace(/\\/g, "/"));

    expect(offenders).toEqual([]);
  });

  it("ne laisse aucune Offer déclarer une devise sans montant", () => {
    // Une Offer avec `priceCurrency` mais ni `price` ni `priceSpecification`
    // annonce une devise sans prix : un validateur Google le signale, et le
    // balisage devient plus affirmatif que le contenu visible.
    const offenders: string[] = [];
    for (const file of appSourceFiles()) {
      const source = read(file);
      const blocks = source.split(/"@type":\s*"Offer"/).slice(1);
      for (const block of blocks) {
        const scope = block.slice(0, 600);
        const hasCurrency = /priceCurrency:/.test(scope);
        const hasAmount = /\bprice:|priceSpecification:/.test(scope);
        if (hasCurrency && !hasAmount) {
          offenders.push(relative(PROJECT_ROOT, file).replace(/\\/g, "/"));
          break;
        }
      }
    }

    expect(offenders).toEqual([]);
  });
});
