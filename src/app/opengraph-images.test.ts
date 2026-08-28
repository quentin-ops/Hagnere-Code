/**
 * Les images sociales dédiées doivent réellement se rendre.
 *
 * /tarifs, /methode, /equipe et les trois pages locales partageaient
 * /og-image.png avec 28 autres URL : un partage LinkedIn de /tarifs et un
 * partage de /agence/savoie/chambery affichaient exactement la même vignette
 * que la page d'accueil. Chacune a maintenant sa route `opengraph-image`.
 *
 * Le contrôle 1200×630 du postbuild ne s'exécute qu'après un build : ce test
 * rend les images pour de vrai et vérifie qu'elles sortent en PNG valide, que
 * leur `size` est bien 1200×630 et que la metadata de la page pointe vers la
 * route plutôt que vers l'image partagée.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { SITE_URL } from "@/lib/seo";

const APP_DIR = join(process.cwd(), "src", "app");

const DEDICATED_SOCIAL_IMAGES = [
  { route: "/tarifs", dir: "tarifs", load: () => import("./tarifs/opengraph-image") },
  { route: "/methode", dir: "methode", load: () => import("./methode/opengraph-image") },
  { route: "/equipe", dir: "equipe", load: () => import("./equipe/opengraph-image") },
  { route: "/agence", dir: "agence", load: () => import("./agence/opengraph-image") },
  {
    route: "/agence/savoie",
    dir: "agence/savoie",
    load: () => import("./agence/savoie/opengraph-image"),
  },
  {
    route: "/agence/savoie/chambery",
    dir: "agence/savoie/chambery",
    load: () => import("./agence/savoie/chambery/opengraph-image"),
  },
];

describe("images sociales dédiées", () => {
  it.each(DEDICATED_SOCIAL_IMAGES)(
    "$route rend un PNG 1200×630 valide",
    async ({ load }) => {
      const imageRoute = await load();
      expect(imageRoute.size).toEqual({ width: 1200, height: 630 });
      expect(typeof imageRoute.alt).toBe("string");
      expect((imageRoute.alt as string).length).toBeGreaterThan(20);
      expect(imageRoute.contentType).toBe("image/png");

      const response = await imageRoute.default();
      const image = await response.arrayBuffer();

      expect(response.status).toBe(200);
      expect(response.headers.get("content-type")).toBe("image/png");
      expect(image.byteLength).toBeGreaterThan(10_000);
    },
    30_000,
  );

  it.each(DEDICATED_SOCIAL_IMAGES)(
    "$route déclare sa route sociale dans openGraph ET twitter",
    ({ route, dir }) => {
      const source = readFileSync(join(APP_DIR, dir, "page.tsx"), "utf8");
      const expected = `${SITE_URL}/${dir}/opengraph-image`;

      // Déclaration explicite plutôt que convention de fichier : la carte
      // Twitter n'a pas de repli garanti si openGraph.images est absent, et le
      // garde-fou postbuild exige twitter:image sur chaque page du sitemap.
      expect(source, route).toContain("/opengraph-image`");
      expect(source, route).toContain("width: 1200");
      expect(source, route).toContain("height: 630");
      expect(source, route).toMatch(/twitter:\s*\{\s*images:/);
      expect(source, route).not.toContain("DEFAULT_OG_IMAGE");
      expect(expected.startsWith(SITE_URL)).toBe(true);
    },
  );
});
