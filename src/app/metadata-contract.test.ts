/**
 * Garde-fous de MÉTADONNÉES sur les routes servies par src/app.
 *
 * Trois invariants, tous constatés en écart lors de l'audit de pré-lancement :
 *
 * 1. Longueur du `<title>` — au-delà de 60 caractères, la SERP tronque. Trois
 *    pages dépassaient, dont deux aimants à liens (les kits gratuits).
 * 2. Longueur de la meta description — hors de 120-160 caractères, elle est
 *    tronquée ou sous-exploitée. /demarrer-un-projet, page de conversion
 *    principale, était à 167.
 * 3. Cohérence du décompte de services — le title de /services annonçait
 *    « 11 services » pendant que le H2 de la page disait « Dix services ». Le
 *    nombre doit venir de SERVICE_LINKS, jamais d'un littéral.
 *
 * Le test importe la vraie `metadata` des pages plutôt que d'en lire la source :
 * il attrape donc aussi les titres dérivés d'un registre.
 */
import { describe, expect, it } from "vitest";
import { SERVICE_LINKS } from "@/lib/services";

const TITLE_MAX = 60;
const DESCRIPTION_MIN = 120;
const DESCRIPTION_MAX = 160;

/**
 * Routes contrôlées ici : celles dont le title et la description sont écrits
 * dans src/app (les guides et réalisations dérivent leurs métadonnées de leurs
 * propres registres, déjà couverts par leurs tests).
 */
const ROUTES = [
  { route: "/services", load: () => import("./services/page") },
  { route: "/tarifs", load: () => import("./tarifs/page") },
  { route: "/methode", load: () => import("./methode/page") },
  { route: "/equipe", load: () => import("./equipe/page") },
  {
    route: "/demarrer-un-projet",
    load: () => import("./demarrer-un-projet/page"),
  },
  { route: "/ressources", load: () => import("./ressources/page") },
  { route: "/livres-blancs", load: () => import("./livres-blancs/page") },
  {
    route: "/ressources/kit-cahier-des-charges-site-internet",
    load: () => import("./ressources/kit-cahier-des-charges-site-internet/page"),
  },
  {
    route: "/ressources/kit-cahier-des-charges-application-metier",
    load: () =>
      import("./ressources/kit-cahier-des-charges-application-metier/page"),
  },
  { route: "/agence-next-js", load: () => import("./agence-next-js/page") },
  { route: "/agence-react", load: () => import("./agence-react/page") },
  { route: "/agence", load: () => import("./agence/page") },
  { route: "/agence/savoie", load: () => import("./agence/savoie/page") },
  {
    route: "/agence/savoie/chambery",
    load: () => import("./agence/savoie/chambery/page"),
  },
];

/** Le title peut être une chaîne ou un objet { absolute | default }. */
function titleOf(metadata: {
  title?: unknown;
  description?: unknown;
}): string {
  const title = metadata.title;
  if (typeof title === "string") return title;
  if (title && typeof title === "object") {
    const record = title as { absolute?: unknown; default?: unknown };
    if (typeof record.absolute === "string") return record.absolute;
    if (typeof record.default === "string") return record.default;
  }
  throw new Error("title absent ou non littéral");
}

describe("contrat de métadonnées des routes src/app", () => {
  it.each(ROUTES)("$route publie un title d'au plus 60 caractères", async ({
    route,
    load,
  }) => {
    const { metadata } = await load();
    const title = titleOf(metadata);

    expect(title.length, `${route} — « ${title} »`).toBeLessThanOrEqual(
      TITLE_MAX,
    );
  });

  it.each(ROUTES)(
    "$route publie une description entre 120 et 160 caractères",
    async ({ route, load }) => {
      const { metadata } = await load();
      const description = metadata.description;

      expect(typeof description, route).toBe("string");
      const length = (description as string).length;
      expect(
        length,
        `${route} — ${length} caractères : « ${description} »`,
      ).toBeGreaterThanOrEqual(DESCRIPTION_MIN);
      expect(
        length,
        `${route} — ${length} caractères : « ${description} »`,
      ).toBeLessThanOrEqual(DESCRIPTION_MAX);
    },
  );

  it("dérive le décompte de services du registre, sans littéral figé", async () => {
    const { metadata } = await import("./services/page");
    const title = titleOf(metadata);
    const description = metadata.description as string;
    const count = SERVICE_LINKS.length;

    expect(title).toContain(`${count} services`);
    expect(description).toContain(`${count} services`);

    // Aucun autre décompte ne doit traîner : « 10 services » ou « 12 services »
    // dans la même page signalerait un littéral resté en arrière.
    const counts = [...`${title} ${description}`.matchAll(/(\d+)\s+services/g)];
    expect(counts.length).toBeGreaterThan(0);
    for (const match of counts) {
      expect(Number(match[1])).toBe(count);
    }
  });
});
