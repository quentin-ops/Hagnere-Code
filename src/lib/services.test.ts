import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { ORGANIZATION_ID } from "./organization-structured-data";
import { SITE_URL } from "./seo";
import { SERVICE_LINKS } from "./services";

/**
 * Contrat du registre des services.
 *
 * `SERVICE_LINKS` alimente sitemap.xml, llms.txt et le `hasOfferCatalog` de
 * l'entité publique. Une page service absente du registre n'existe pour aucun
 * de ces trois canaux : elle est publiée, crawlable, et invisible partout où
 * le site déclare lui-même ce qu'il vend.
 */

const projectRoot = process.cwd();
const servicesRoot = path.join(projectRoot, "src/app/services");

const servicePages = new Map(
  SERVICE_LINKS.map((service) => [
    service.path,
    fs.readFileSync(
      path.join(projectRoot, `src/app${service.path}/page.tsx`),
      "utf8",
    ),
  ]),
);

/**
 * Pages service qui écrivent encore le domaine de production en clair dans
 * leur JSON-LD au lieu de `SITE_URL`.
 *
 * Les onze pages importent déjà la constante ; dix continuent d'écrire
 * `https://hagnere-code.ai` à la main dans les `url` et les fils d'Ariane. Un
 * changement de domaine, une préproduction ou une bascule de canonique
 * laisserait ces valeurs pointer sur l'ancien site. Le plafond ci-dessous est
 * un cliquet : il ne peut que descendre.
 */
const MAX_PAGES_WITH_HARDCODED_DOMAIN = 10;

/**
 * Pages qui sérialisent encore l'entité complète en `provider` au lieu de la
 * référence `ORGANIZATION_REF`. Même cliquet, même sens de variation.
 */
const MAX_PAGES_WITH_FULL_PROVIDER_ENTITY = 11;

describe("registre des pages service", () => {
  it("référence chaque page service publiée, sans doublon", () => {
    const routes = fs
      .readdirSync(servicesRoot, { withFileTypes: true })
      .filter(
        (entry) =>
          entry.isDirectory() &&
          fs.existsSync(path.join(servicesRoot, entry.name, "page.tsx")),
      )
      .map((entry) => `/services/${entry.name}`)
      .sort();

    expect([...servicePages.keys()].sort()).toEqual(routes);
    expect(new Set(SERVICE_LINKS.map((s) => s.title)).size).toBe(
      SERVICE_LINKS.length,
    );

    for (const service of SERVICE_LINKS) {
      expect(service.title.trim().length, service.path).toBeGreaterThan(0);
      expect(service.description.trim().length, service.path).toBeGreaterThan(0);
    }
  });

  it("ne redéclare jamais l'organisation dans une page service", () => {
    // L'entité publique est un nœud unique. Une `Organization` complète
    // recopiée page à page crée autant de descriptions concurrentes du même
    // `@id` ; seule la référence `{ "@id": ORGANIZATION_ID }` est admise.
    for (const [servicePath, source] of servicePages) {
      expect(
        source,
        `${servicePath} : nœud Organization recopié au lieu d'une référence`,
      ).not.toContain('"@type": "Organization"');

      const provider = /provider:\s*([A-Za-z_$][\w$]*|\{[^}]*\})/.exec(source);
      expect(provider, `${servicePath} : aucun provider déclaré`).not.toBeNull();
      expect(
        ["PUBLIC_ORGANIZATION_ENTITY", "ORGANIZATION_REF"],
        `${servicePath} : provider construit sur place au lieu du nœud partagé`,
      ).toContain(provider?.[1]);
    }
  });

  it("ne recopie l'entité complète que là où c'est encore le cas", () => {
    // Les onze pages reprennent la même constante partagée : aucune
    // description divergente, mais l'entité complète est sérialisée onze fois
    // alors que `ORGANIZATION_REF` suffirait — le nœud complet est déjà publié
    // une fois par page via l'entité du site. Cliquet : ce nombre ne remonte pas.
    const fullEntity = [...servicePages]
      .filter(([, source]) => source.includes("provider: PUBLIC_ORGANIZATION_ENTITY"))
      .map(([servicePath]) => servicePath);

    expect(
      fullEntity.length,
      `entité complète en provider : ${fullEntity.join(", ")}`,
    ).toBeLessThanOrEqual(MAX_PAGES_WITH_FULL_PROVIDER_ENTITY);
  });

  it("ne laisse pas le domaine de production se figer dans les pages service", () => {
    const hardcoded = [...servicePages]
      .filter(([, source]) => source.includes(SITE_URL.replace(/\/$/, "")))
      .map(([servicePath]) => servicePath);

    expect(
      hardcoded.length,
      `domaine en dur : ${hardcoded.join(", ")}`,
    ).toBeLessThanOrEqual(MAX_PAGES_WITH_HARDCODED_DOMAIN);

    // Toutes importent déjà la constante : le remplacement est mécanique.
    for (const servicePath of hardcoded) {
      expect(
        servicePages.get(servicePath),
        `${servicePath} : SITE_URL non importée`,
      ).toContain('from "@/lib/seo"');
    }
  });

  it("expose une référence d'organisation stable et minimale", () => {
    expect(ORGANIZATION_ID).toBe(`${SITE_URL}/#organization`);
  });
});
