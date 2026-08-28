import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Invariants de <title> et de meta description HORS guides.
 *
 * Les longueurs et l'unicité n'étaient verrouillées que pour les guides
 * (src/lib/guides.test.ts) et les pages locales (src/lib/local-pages.test.ts).
 * Les onze pages service, /tarifs, /methode, /equipe, les hubs, les ressources
 * et les livres blancs n'étaient couverts par rien : le garde-fou postbuild
 * compte les balises title sans les mesurer ni les dédoublonner, et impose un
 * plancher de 50 caractères à la description sans plafond.
 *
 * Risque aggravant couvert ici : `src/app/layout.tsx` déclare un
 * `title.default` identique au title de l'accueil. Une page qui oublierait sa
 * metadata en hériterait silencieusement, sans qu'aucun test ne rougisse.
 */

const projectRoot = process.cwd();
const MAX_TITLE_LENGTH = 60;
const MIN_DESCRIPTION_LENGTH = 50;
const MAX_DESCRIPTION_LENGTH = 160;

/** Routes qui ne rendent aucune page : elles redirigent en 308. */
function isRedirectOnly(source: string): boolean {
  return /permanentRedirect\(|redirect\(/.test(source) && !/export const metadata|generateMetadata/.test(source);
}

function routePages(): { route: string; source: string }[] {
  const appRoot = path.join(projectRoot, "src/app");

  function walk(directory: string): string[] {
    return fs
      .readdirSync(directory, { withFileTypes: true })
      .flatMap((entry) => {
        const absolutePath = path.join(directory, entry.name);
        if (entry.isDirectory()) return walk(absolutePath);
        return entry.name === "page.tsx" ? [absolutePath] : [];
      });
  }

  return walk(appRoot).map((file) => ({
    route: `/${path.relative(appRoot, path.dirname(file))}`.replace(/^\/\.$/, "/"),
    source: fs.readFileSync(file, "utf8"),
  }));
}

/** `title: "…"` déclaré au premier niveau de l'objet metadata. */
function literalTitle(source: string): string | undefined {
  return /\n {2}title:\s*"((?:[^"\\]|\\.)*)"/.exec(source)?.[1];
}

function literalDescription(source: string): string | undefined {
  return /\n {2}description:\s*\n?\s*"((?:[^"\\]|\\.)*)"/.exec(source)?.[1];
}

const pages = routePages().filter((page) => !isRedirectOnly(page.source));

describe("metadata invariants outside the guide registry", () => {
  it("gives every rendered route its own title, never the layout fallback", () => {
    const layout = fs.readFileSync(
      path.join(projectRoot, "src/app/layout.tsx"),
      "utf8",
    );
    const fallback = /default:\s*"((?:[^"\\]|\\.)*)"/.exec(layout)?.[1];
    expect(fallback, "title.default du layout introuvable").toBeTypeOf("string");

    expect(pages.length).toBeGreaterThan(30);
    for (const page of pages) {
      // Une route qui ne déclare ni `metadata` ni `generateMetadata` hérite
      // du title de l'accueil sans que rien ne le signale.
      const declaresMetadata =
        /export\s+const\s+metadata\b/.test(page.source) ||
        /export\s*\{[^}]*\bmetadata\b[^}]*\}\s*from/.test(page.source) ||
        /export\s+(?:async\s+)?function\s+generateMetadata\b/.test(page.source);

      expect(
        declaresMetadata,
        `${page.route} : aucune metadata déclarée, héritage silencieux du layout`,
      ).toBe(true);
    }
  });

  it("keeps every literal title unique and within 60 characters", () => {
    const byTitle = new Map<string, string>();

    for (const page of pages) {
      const title = literalTitle(page.source);
      if (title === undefined) continue;

      expect(
        title.length,
        `${page.route} : title de ${title.length} caractères — « ${title} »`,
      ).toBeLessThanOrEqual(MAX_TITLE_LENGTH);

      const duplicate = byTitle.get(title);
      expect(
        duplicate,
        `${page.route} et ${duplicate} publient le même <title> « ${title} »`,
      ).toBeUndefined();
      byTitle.set(title, page.route);
    }

    // Le scan doit rester productif : s'il ne trouve plus de title, c'est
    // l'extraction qui est cassée, pas le site qui n'en a plus.
    expect(byTitle.size).toBeGreaterThan(20);
  });

  it("keeps every literal meta description between 50 and 160 characters", () => {
    const byDescription = new Map<string, string>();

    for (const page of pages) {
      const description = literalDescription(page.source);
      if (description === undefined) continue;

      expect(
        description.length,
        `${page.route} : description de ${description.length} caractères`,
      ).toBeGreaterThanOrEqual(MIN_DESCRIPTION_LENGTH);
      expect(
        description.length,
        `${page.route} : description de ${description.length} caractères`,
      ).toBeLessThanOrEqual(MAX_DESCRIPTION_LENGTH);

      const duplicate = byDescription.get(description);
      expect(
        duplicate,
        `${page.route} et ${duplicate} publient la même meta description`,
      ).toBeUndefined();
      byDescription.set(description, page.route);
    }

    expect(byDescription.size).toBeGreaterThan(20);
  });
});
