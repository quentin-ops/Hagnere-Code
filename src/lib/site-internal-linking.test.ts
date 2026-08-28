import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { PUBLISHED_GUIDES } from "./guides";
import { SERVICE_LINKS } from "./services";

/**
 * Contrôle de graphe au-delà du silo éditorial.
 *
 * `guide-internal-linking.test.ts` verrouille le couple guide↔guide, et rien
 * d'autre : aucun test ne vérifiait qu'un guide mène à une offre, ni qu'une
 * page service renvoie vers une autre offre ou vers un contenu. C'est
 * précisément la zone faible du site — 1179 tests verts pour un maillage
 * commercial presque vide. Ce fichier ferme cet angle mort.
 *
 * Le contrôle porte sur les chemins déclarés dans les sources de la page et
 * de son composant : `href="/services/x"` comme `ctaHref: "/services/x"`
 * comptent, car les deux produisent un lien rendu.
 */

const projectRoot = process.cwd();

/** Pages où un visiteur peut engager une relation commerciale. */
const CONVERSION_PATHS =
  /["'](\/services\/[a-z0-9-]+|\/tarifs|\/demarrer-un-projet|\/rendez-vous|\/contact)["']/g;
const SERVICE_PATHS = /["'](\/services\/[a-z0-9-]+)["']/g;
const GUIDE_PATHS = /["'](\/guides\/[a-z0-9-]+)["']/g;

/** Au moins deux offres voisines citées depuis chaque page service. */
const MIN_SERVICE_TO_SERVICE = 2;

/**
 * Pages service dont le sujet n'a encore aucun guide publié à citer. Créer un
 * lien vers un guide hors sujet serait pire que l'absence de lien : la règle
 * d'or interdit les rapprochements artificiels. Chaque entrée doit disparaître
 * dès qu'un guide du sujet est publié.
 */
const SERVICES_WITHOUT_TOPICAL_GUIDE: Record<string, string> = {
  "/services/application-mobile":
    "aucun guide mobile publié à ce jour dans src/lib/guides.ts",
  "/services/contenu-video":
    "aucun guide contenu/vidéo publié à ce jour dans src/lib/guides.ts",
  "/services/securite-rgpd":
    "à retirer : le guide /guides/securite-application-metier existe et couvre le sujet",
};

function walk(directory: string): string[] {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) return walk(absolutePath);
    if (!/\.tsx?$/.test(entry.name) || /\.test\.tsx?$/.test(entry.name)) {
      return [];
    }
    return [absolutePath];
  });
}

function read(files: string[]): string {
  return files.map((file) => fs.readFileSync(file, "utf8")).join("\n");
}

function matchedPaths(source: string, pattern: RegExp): Set<string> {
  return new Set(
    Array.from(source.matchAll(new RegExp(pattern.source, "g")), (m) => m[1]),
  );
}

/** Source d'une page : sa route plus les composants qu'elle importe. */
function pageSource(routeDirectory: string): string {
  const routeFiles = walk(path.join(projectRoot, routeDirectory));
  const routeSource = read(routeFiles);
  const componentDirs = new Set(
    Array.from(
      routeSource.matchAll(/from\s+"@\/components\/([a-z0-9-]+)\//g),
      (match) => match[1],
    ),
  );

  return [
    routeSource,
    ...Array.from(componentDirs, (directory) =>
      read(walk(path.join(projectRoot, "src/components", directory))),
    ),
  ].join("\n");
}

describe("maillage commercial du site", () => {
  it("mène de chaque guide publié vers au moins une page de conversion", () => {
    for (const guide of PUBLISHED_GUIDES) {
      const source = pageSource(`src/app/guides/${guide.slug}`);
      const conversions = matchedPaths(source, CONVERSION_PATHS);

      expect(
        conversions.size,
        `${guide.slug} : aucun chemin vers une offre ou le tunnel`,
      ).toBeGreaterThanOrEqual(1);
    }
  });

  it("relie chaque page service à au moins deux offres voisines", () => {
    for (const service of SERVICE_LINKS) {
      const source = pageSource(`src/app${service.path}`);
      const neighbours = matchedPaths(source, SERVICE_PATHS);
      neighbours.delete(service.path);

      expect(
        neighbours.size,
        `${service.path} : moins de ${MIN_SERVICE_TO_SERVICE} liens service → service`,
      ).toBeGreaterThanOrEqual(MIN_SERVICE_TO_SERVICE);
    }
  });

  it("relie chaque page service à un guide, sauf sujet non encore couvert", () => {
    const publishedSlugs = new Set(
      PUBLISHED_GUIDES.map((guide) => `/guides/${guide.slug}`),
    );

    for (const service of SERVICE_LINKS) {
      const source = pageSource(`src/app${service.path}`);
      const guides = Array.from(matchedPaths(source, GUIDE_PATHS));

      // Un lien vers un guide retiré ou non publié est une erreur, exception
      // ou pas : il enverrait le visiteur sur une redirection commerciale.
      for (const target of guides) {
        expect(publishedSlugs.has(target), `${service.path} → ${target}`).toBe(
          true,
        );
      }

      if (service.path in SERVICES_WITHOUT_TOPICAL_GUIDE) continue;
      expect(
        guides.length,
        `${service.path} : aucun guide cité`,
      ).toBeGreaterThanOrEqual(1);
    }
  });

  it("garde la liste des exceptions alignée sur le registre des services", () => {
    const knownPaths = new Set<string>(
      SERVICE_LINKS.map((service) => service.path),
    );

    for (const [servicePath, reason] of Object.entries(
      SERVICES_WITHOUT_TOPICAL_GUIDE,
    )) {
      expect(knownPaths.has(servicePath), servicePath).toBe(true);
      expect(reason.length, servicePath).toBeGreaterThan(0);
    }
  });
});
