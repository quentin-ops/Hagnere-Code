import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const projectRoot = process.cwd();

const read = (relativePath: string) =>
  fs.readFileSync(path.join(projectRoot, relativePath), "utf8");

describe("agence Next.js public claims", () => {
  it("ne republie pas les anciennes métriques internes sans dossier de preuve", () => {
    const source = read("src/app/agence-next-js/page.tsx");

    expect(source).not.toMatch(
      /\+340\s*%|4[,.]2\s*%|pipeline commercial\s*[×x]3|[×x]2[,.]5 de leads|acquisition sous 80\s*€/i,
    );
  });
});

/**
 * /agence-next-js et /agence-react sont deux pages d'atterrissage sur des
 * requêtes de marque technique : le lecteur visé est un CTO ou un lead dev,
 * exactement celui qui repère qu'une version majeure de retard est affichée.
 *
 * Les deux annonçaient « Next.js 15 » sous le chapeau « Notre stack technique »
 * alors que le dépôt tournait déjà en Next 16, et portaient toutes deux un
 * « Mis à jour le … » récent. La version avait été re-saisie à la main, donc
 * jamais mise à jour avec la dépendance.
 *
 * Le test épingle la PROPRIÉTÉ — la version majeure annoncée est celle
 * réellement installée — et non la chaîne « Next.js 16 » : à Next 17, il doit
 * échouer pour signaler la dérive, pas rester vert sur un littéral périmé.
 */
describe("versions annoncées sur les pages agence", () => {
  const packageJson = JSON.parse(read("package.json")) as {
    dependencies: Record<string, string>;
  };

  /** Majeure réellement installée, indépendamment d'un `^` ou d'un `~`. */
  function installedMajor(dependency: string): string {
    const range = packageJson.dependencies[dependency];
    expect(range, `dépendance absente : ${dependency}`).toBeTruthy();
    const major = /(\d+)/.exec(range)?.[1];
    expect(major, `version illisible pour ${dependency} : ${range}`).toBeTruthy();
    return major as string;
  }

  const PAGES = [
    "src/app/agence-next-js/page.tsx",
    "src/app/agence-react/page.tsx",
  ];

  const LIBRARIES = [
    { label: "Next.js", dependency: "next" },
    { label: "React", dependency: "react" },
  ];

  it.each(PAGES)("%s annonce les majeures réellement installées", (page) => {
    const source = read(page);

    for (const { label, dependency } of LIBRARIES) {
      const expected = installedMajor(dependency);
      const stated = Array.from(
        source.matchAll(new RegExp(`${label.replace(".", "\\.")} (\\d+)`, "g")),
        (match) => match[1],
      );

      // Une page qui ne cite aucune version ne ment pas : on ne l'oblige pas
      // à en citer une. C'est la version citée à tort qui est contrôlée.
      for (const version of stated) {
        expect(
          version,
          `${page} annonce ${label} ${version} alors que package.json installe ${label} ${expected}`,
        ).toBe(expected);
      }
    }
  });

  it("trouve bien les mentions qu'il est censé auditer", () => {
    // Sans cette garde, renommer le libellé (« NextJS », « Next 16 ») rendrait
    // le contrôle vert à vide au lieu de rouge.
    const mentions = PAGES.flatMap((page) =>
      Array.from(read(page).matchAll(/Next\.js (\d+)/g), (m) => m[1]),
    );
    expect(mentions.length).toBeGreaterThanOrEqual(PAGES.length);
  });
});
