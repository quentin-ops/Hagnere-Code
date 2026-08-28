/**
 * Test structurel du GRAPHE DE LIENS INTERNES.
 *
 * `sitemap.test.ts` garantit que chaque page.tsx figure dans le sitemap, mais
 * pas qu'elle soit atteignable en naviguant : une URL peut être déclarée,
 * crawlée, et ne recevoir aucun lien entrant. C'est l'angle mort qui a laissé
 * passer /agence-react (1 lien entrant sur 65 pages),
 * /agence/savoie/chambery (1) et le kit application métier (1).
 *
 * Ce test lit tous les `href`/`path` littéraux de src/ et vérifie que chaque
 * URL du sitemap reçoit des liens entrants venant d'AILLEURS que la route
 * elle-même : une page qui se cite ne prouve rien, une page enfant qui remonte
 * vers son parent, si.
 */
import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";
import { describe, expect, it } from "vitest";
import { SITE_URL } from "@/lib/seo";
import { SERVICE_LINKS } from "@/lib/services";
import sitemap from "./sitemap";

const PROJECT_ROOT = process.cwd();
const SRC_DIR = join(PROJECT_ROOT, "src");

/**
 * Seuil renforcé pour les pages achetées en Ads : elles ne doivent pas dépendre
 * d'un unique référent. Les pages service reçoivent le pied de page, les deux
 * landings techniques n'ont que du maillage éditorial.
 */
const COMMERCIAL_ROUTES = [
  "/agence-next-js",
  "/agence-react",
  ...SERVICE_LINKS.map((service) => service.path),
];
const COMMERCIAL_MIN_INBOUND = 3;

/**
 * Routes tolérées à un seul référent, avec la raison. Toute nouvelle entrée
 * ici doit être un choix assumé, pas un contournement : la correction normale
 * est d'ajouter un lien, pas une exception.
 */
const KNOWN_THIN_ROUTES = new Map<string, string>([]);

function sourceFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...sourceFiles(full));
    } else if (
      /\.(?:ts|tsx)$/.test(entry.name) &&
      !/\.test\.(?:ts|tsx)$/.test(entry.name)
    ) {
      out.push(full);
    }
  }
  return out;
}

/** URL interne → fichiers de src/ qui la référencent. */
function buildInboundIndex(): Map<string, Set<string>> {
  // Couvre `href="/x"`, `href: "/x"`, `path: "/x"` et les gabarits — c'est-à-dire
  // le JSX, les registres (services, ressources, pages locales) et les chaînes
  // HTML des body.ts.
  const linkPattern = /(?:href|path)\s*[:=]\s*["'`](\/[^"'`\s#?]*)/g;
  const index = new Map<string, Set<string>>();

  for (const file of sourceFiles(SRC_DIR)) {
    const relativePath = relative(PROJECT_ROOT, file).replace(/\\/g, "/");
    const content = readFileSync(file, "utf8");
    for (const match of content.matchAll(linkPattern)) {
      const url = match[1].replace(/\/+$/, "") || "/";
      if (!index.has(url)) index.set(url, new Set());
      index.get(url)!.add(relativePath);
    }
  }
  return index;
}

const inboundIndex = buildInboundIndex();

/**
 * Fichiers qui lient `route` sans être la route elle-même.
 *
 * Seuls les fichiers posés DIRECTEMENT dans le répertoire de la route sont
 * écartés (page.tsx, opengraph-image.tsx…) : une page enfant qui remonte vers
 * son parent — fil d'Ariane, liens connexes — est un vrai lien entrant, alors
 * qu'une page qui se cite elle-même n'en est pas un.
 */
function inboundFrom(route: string): string[] {
  const ownDirectory = route === "/" ? "src/app/" : `src/app${route}/`;
  const referrers = inboundIndex.get(route) ?? new Set<string>();
  return [...referrers].filter((file) => {
    if (!file.startsWith(ownDirectory)) return true;
    // Fichier d'une sous-route (donc d'une autre page) : le lien compte.
    return file.slice(ownDirectory.length).includes("/");
  });
}

const sitemapRoutes = sitemap().map(
  (entry) => entry.url.replace(SITE_URL, "") || "/",
);

describe("graphe de liens internes", () => {
  it("liste des routes non vide (garde-fou du test lui-même)", () => {
    expect(sitemapRoutes.length).toBeGreaterThan(50);
    expect(inboundIndex.size).toBeGreaterThan(50);
  });

  it.each(sitemapRoutes.filter((route) => route !== "/"))(
    "%s reçoit au moins un lien interne hors de son propre répertoire",
    (route) => {
      const referrers = inboundFrom(route);
      expect(
        referrers.length,
        `${route} est orpheline : aucun fichier hors de src/app${route}/ ne la lie.`,
      ).toBeGreaterThanOrEqual(1);
    },
  );

  it.each(COMMERCIAL_ROUTES)(
    "%s, page d'atterrissage commerciale, reçoit au moins 3 liens entrants",
    (route) => {
      const referrers = inboundFrom(route);
      expect(
        referrers.length,
        `${route} n'a que ${referrers.length} référent(s) : ${referrers.join(", ")}`,
      ).toBeGreaterThanOrEqual(COMMERCIAL_MIN_INBOUND);
    },
  );

  it("n'ajoute pas de nouvelle route à un seul référent", () => {
    const thin = sitemapRoutes
      .filter((route) => route !== "/")
      .filter((route) => inboundFrom(route).length < 2)
      .filter((route) => !KNOWN_THIN_ROUTES.has(route));

    expect(
      thin,
      `Ces routes n'ont qu'un seul lien entrant. Ajoutez un lien éditorial plutôt qu'une exception : ${thin.join(", ")}`,
    ).toEqual([]);
  });

  it("chaque route tolérée à un seul référent est encore réellement fine", () => {
    // Empêche la liste d'exceptions de survivre à sa raison d'être.
    for (const [route, reason] of KNOWN_THIN_ROUTES) {
      expect(sitemapRoutes, `${route} n'est plus dans le sitemap`).toContain(
        route,
      );
      expect(inboundFrom(route).length, `${route} — ${reason}`).toBeLessThan(2);
    }
  });
});
