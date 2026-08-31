import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { ORGANIZATION_ID } from "./organization-structured-data";
import { SITE_URL } from "./seo";
import { SERVICE_LINKS, serviceEntityId } from "./services";

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
 * Les onze pages importent déjà la constante ; dix continuaient d'écrire
 * `https://hagnere-code.ai` à la main dans les `url` et les fils d'Ariane. Un
 * changement de domaine, une préproduction ou une bascule de canonique
 * laisserait ces valeurs pointer sur l'ancien site. Le plafond ci-dessous est
 * un cliquet : il ne peut que descendre. Descendu de 10 à 0 le 31/08/2026,
 * les onze pages dérivant désormais leur URL de `SITE_URL`.
 */
const MAX_PAGES_WITH_HARDCODED_DOMAIN = 0;

/**
 * Pages qui sérialisent encore l'entité complète en `provider` au lieu de la
 * référence `ORGANIZATION_REF`. Même cliquet, même sens de variation.
 * Descendu de 11 à 0 le 31/08/2026 : le nœud de 6,6 Ko n'est plus recopié sur
 * aucune page service, il est publié par l'accueil et par /services.
 */
const MAX_PAGES_WITH_FULL_PROVIDER_ENTITY = 0;

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
    // description divergente, mais l'entité complète était sérialisée onze
    // fois alors que `ORGANIZATION_REF` suffit — le nœud complet reste publié
    // par l'accueil et par /services. Cliquet : ce nombre ne remonte pas.
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

  it("publie un seul nœud Service par URL, identifié par un @id stable", () => {
    // Chaque page service portait un `Service` ANONYME avec sa propre `url`,
    // pendant que le `hasOfferCatalog` de l'entité — réémis sur ces mêmes
    // pages — en portait un second, anonyme lui aussi, avec la MÊME `url` et
    // un autre `name`. Deux entités concurrentes pour une seule adresse, sur
    // onze pages sur onze : un moteur devait choisir ou fusionner.
    //
    // L'invariant protégé n'est pas la présence d'une chaîne particulière mais
    // l'unicité de l'entité : le nœud de la page porte l'`@id` canonique du
    // registre, et le catalogue comme le hub ne portent que cette référence.
    for (const service of SERVICE_LINKS) {
      const source = servicePages.get(service.path);
      expect(source, service.path).toBeDefined();
      expect(
        source,
        `${service.path} : nœud Service sans @id canonique`,
      ).toContain("serviceEntityId(servicePath)");
      expect(
        source,
        `${service.path} : chemin canonique non déclaré`,
      ).toContain(`const servicePath = "${service.path}" as const;`);
      expect(serviceEntityId(service.path)).toBe(
        `${SITE_URL}${service.path}#service`,
      );
    }

    // Les identifiants doivent rester uniques : deux services partageant un
    // `@id` reformeraient exactement le défaut corrigé, en pire.
    const ids = SERVICE_LINKS.map((service) => serviceEntityId(service.path));
    expect(new Set(ids).size).toBe(ids.length);

    // Le hub liste les services sans en redéclarer l'entité : un `@type`
    // « Service » réapparu dans /services/page.tsx signerait le retour d'un
    // second nœud anonyme pour chacune des onze URL.
    const hubSource = fs.readFileSync(
      path.join(servicesRoot, "page.tsx"),
      "utf8",
    );
    expect(hubSource).toContain("serviceEntityId(service.path)");
    expect(hubSource).not.toContain('"@type": "Service"');
  });
});
