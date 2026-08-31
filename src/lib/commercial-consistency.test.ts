import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { CONTACT_PHONE_E164 } from "./contact-details";
import { SERVICE_LINKS } from "./services";

const projectRoot = process.cwd();

const read = (relativePath: string) =>
  fs.readFileSync(path.join(projectRoot, relativePath), "utf8");

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

function readAll(files: string[]): string {
  return files.map((file) => fs.readFileSync(file, "utf8")).join("\n");
}

/** Source rendue d'une page : sa route plus les composants qu'elle importe. */
function composedPageSource(routeDirectory: string): string {
  const routeSource = readAll(walk(path.join(projectRoot, routeDirectory)));
  const componentDirectories = new Set(
    Array.from(
      routeSource.matchAll(/from\s+"@\/components\/([a-z0-9-]+)\//g),
      (match) => match[1],
    ),
  );

  return [
    routeSource,
    ...Array.from(componentDirectories, (directory) =>
      readAll(walk(path.join(projectRoot, "src/components", directory))),
    ),
  ]
    .join("\n")
    .replace(/\s+/g, " ");
}

/**
 * Pages service autorisées à publier un bloc `offers` en JSON-LD.
 *
 * Une Offer sans prix ne dit rien à un moteur, et une Offer dont le prix ne
 * figure nulle part sur la page visible publie en lecture machine un
 * engagement que le visiteur ne peut pas lire. Les deux pages listées ici
 * publient une `priceSpecification` bornée, explicitement hors taxes, dont la
 * fourchette est celle affichée sur la page. Toute autre page service doit
 * rester sans `offers`.
 */
const SERVICE_PAGES_WITH_OFFERS = new Set<string>([
  "/services/ecommerce",
  "/services/saas-applications-metier",
]);

/**
 * Pages service qui ne publient pas encore la phrase de réversibilité.
 *
 * Onze pages vendent une prestation ; huit précisent déjà que les livrables
 * spécifiques sont transférés après paiement complet selon les CGV, sous
 * réserve des composants préexistants et des licences tierces. Les trois
 * restantes doivent l'ajouter dans le corps de page — c'est une mention
 * contractuelle, pas un argument commercial. Chaque entrée disparaît dès que
 * la phrase est publiée.
 */
const SERVICES_WITHOUT_OWNERSHIP_STATEMENT: Record<string, string> = {
  "/services/ecommerce":
    "src/components/ecommerce — la page ne mentionne ni « paiement complet » ni le transfert des livrables",
  "/services/publicite-en-ligne":
    "src/components/publicite-en-ligne — la page ne mentionne ni « paiement complet » ni le transfert des livrables",
  "/services/contenu-video":
    "src/components/contenu-video — « paiement complet » apparaît sans être relié aux livrables spécifiques ni aux CGV",
};

const OWNERSHIP_STATEMENT =
  /livrables spécifiques[^<.]{0,160}paiement complet[^<.]{0,120}(?:CGV|licences tierces)/i;

describe("public commercial consistency", () => {
  it("ne présente pas le comparateur Excel comme un calcul de ROI", () => {
    const page = read("src/app/outils/calculateur-cout-excel/page.tsx");
    expect(page).not.toMatch(/ROI(?:\s|\u00a0)*(?:en|outil)/i);
  });

  it("ne publie aucune Offer cachée sur une page service", () => {
    for (const service of SERVICE_LINKS) {
      const source = read(`src/app${service.path}/page.tsx`);
      if (SERVICE_PAGES_WITH_OFFERS.has(service.path)) continue;

      expect(source, `${service.path} : Offer non visible sur la page`).not.toMatch(
        /\boffers\s*:/,
      );
    }
  });

  it("borne et qualifie chaque Offer conservée sur une page service", () => {
    for (const servicePath of SERVICE_PAGES_WITH_OFFERS) {
      expect(
        SERVICE_LINKS.some((service) => service.path === servicePath),
        `${servicePath} : chemin absent du registre des services`,
      ).toBe(true);

      const source = read(`src/app${servicePath}/page.tsx`).replace(/\s+/g, " ");
      expect(source, `${servicePath} : exception devenue inutile`).toMatch(
        /\boffers\s*:/,
      );

      const offers = source.match(/"@type": "Offer"/g) ?? [];
      // UnitPriceSpecification compte aussi : une offre facturee au mois doit
      // declarer sa périodicité, sans quoi le montant se lit comme un ticket
      // d'entree unique — c'était le cas du Partenariat, lu 120 000 EUR nus.
      const priceSpecifications =
        source.match(/"@type": "(?:Unit)?PriceSpecification"/g) ?? [];

      expect(
        priceSpecifications.length,
        `${servicePath} : une Offer sans priceSpecification`,
      ).toBe(offers.length);
      expect(source, servicePath).toContain("valueAddedTaxIncluded: false");
      expect(
        (source.match(/priceCurrency: "EUR"/g) ?? []).length,
        `${servicePath} : une priceSpecification sans devise`,
      ).toBe(priceSpecifications.length);
    }
  });

  it("publie la réversibilité des livrables sur chaque page service", () => {
    for (const service of SERVICE_LINKS) {
      const source = composedPageSource(`src/app${service.path}`);

      if (service.path in SERVICES_WITHOUT_OWNERSHIP_STATEMENT) {
        expect(
          SERVICES_WITHOUT_OWNERSHIP_STATEMENT[service.path].length,
          service.path,
        ).toBeGreaterThan(0);
        continue;
      }

      expect(
        source,
        `${service.path} : aucune phrase de transfert des livrables après paiement complet`,
      ).toMatch(OWNERSHIP_STATEMENT);
    }
  });

  it("garde la liste des pages sans réversibilité alignée sur le registre", () => {
    const knownPaths = new Set<string>(
      SERVICE_LINKS.map((service) => service.path),
    );
    for (const servicePath of Object.keys(
      SERVICES_WITHOUT_OWNERSHIP_STATEMENT,
    )) {
      expect(knownPaths.has(servicePath), servicePath).toBe(true);
    }
  });

  it("ne publie que l'Offer Discovery dont le prix est identique au visible", () => {
    const page = read("src/app/tarifs/page.tsx");
    const visible = read("src/components/tarifs/body.ts");
    expect(page.match(/"@type": "Offer"/g)).toHaveLength(1);
    expect(page).toContain('price: "1500"');
    expect(page).toContain("valueAddedTaxIncluded: false");
    expect(visible).toContain("1 500 €");
  });

  it("qualifie comme hors taxes chaque Offer numérique conservée", () => {
    const paths = [
      "src/app/tarifs/page.tsx",
      "src/app/agence-next-js/page.tsx",
    ];

    for (const file of paths) {
      expect(read(file)).toContain("valueAddedTaxIncluded: false");
    }
  });
  /**
   * Le NAP a déjà dérivé une fois : trois guides ont continué à publier
   * 03 74 47 20 18 après la bascule, et un test qui vérifiait ce littéral
   * verrouillait l'erreur au lieu de la révéler. On interdit donc tout numéro
   * appelable qui ne serait pas celui du module de coordonnées — sauf celui de
   * l'hébergeur, qui est une mention légale obligatoire et ne nous appartient pas.
   */
  it("ne publie aucun numéro appelable hors du module de coordonnées", () => {
    const HEBERGEUR = "tel:+15592887060";
    const fautifs: string[] = [];
    for (const file of walk(path.join(projectRoot, "src"))) {
      const source = fs.readFileSync(file, "utf8");
      for (const [numero] of source.matchAll(/tel:\+\d+/g)) {
        if (numero === CONTACT_PHONE_E164 || numero === `tel:${CONTACT_PHONE_E164}`) continue;
        if (numero === HEBERGEUR && file.endsWith("mentions-legales.tsx")) continue;
        fautifs.push(`${path.relative(projectRoot, file)} : ${numero}`);
      }
    }
    expect(fautifs).toEqual([]);
  });
});
