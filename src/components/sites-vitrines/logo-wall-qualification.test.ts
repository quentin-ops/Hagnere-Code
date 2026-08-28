import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Les quatre logos LMNP.AI, SCI-AI.app, Hagnéré Patrimoine et Hagnéré
 * Investissement sont des produits du GROUPE Hagnéré, pas des clients
 * indépendants (CLAUDE.md, règle d'or « zéro invention »). Alignés sous un hero
 * sans une ligne de texte, ils reproduisent exactement la grammaire visuelle
 * d'un mur de logos clients.
 *
 * Ce test exige, dans chaque section de mur de logos, un kicker qui nomme le
 * groupe et une phrase qui dit ce que ces pages prouvent — et ce qu'elles ne
 * prouvent pas.
 *
 * Le chemin des images fait partie de la qualification : servies depuis un
 * répertoire public nommé `logos` + `clients`, ces quatre marques restaient
 * étiquetées « clients » dans le code source de la page, sous une phrase qui
 * dit le contraire. Le répertoire s'appelle désormais `logos/produits` et ce
 * test n'accepte plus l'ancien chemin.
 *
 * Périmètre : les sept pages services qui affichent une bande de logos, plus
 * le mur de l'accueil. `securite-rgpd/sections/logo-wall.ts` n'en affiche
 * aucune (signaux de confiance factuels uniquement) et n'entre donc pas dans
 * cette liste.
 */
const LOGO_WALLS = [
  "src/components/homepage/sections/logo-wall.ts",
  "src/components/sites-vitrines/sections/logo-wall.ts",
  "src/components/saas-applications/sections/logo-wall.ts",
  "src/components/ecommerce/sections/logo-wall.ts",
  "src/components/audit-technique/sections/logo-wall.ts",
  "src/components/maintenance-evolution/sections/logo-wall.ts",
  "src/components/publicite-en-ligne/sections/logo-wall.ts",
  "src/components/contenu-video/sections/logo-wall.ts",
];

function read(relativePath: string): string {
  return fs.readFileSync(path.join(process.cwd(), relativePath), "utf8");
}

/** Texte visible : on retire les commentaires du fichier et les balises. */
function visibleText(source: string): string {
  return source
    .replace(/\/\/[^\n]*/g, " ")
    .replace(/\/\*[\s\S]*?\*\//g, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

describe("murs de logos des produits du groupe", () => {
  it.each(LOGO_WALLS)("%s qualifie la bande de logos", (file) => {
    const source = read(file);

    expect(source, `${file}: ce test ne cible plus le bon fichier`).toMatch(
      /logos\/produits\//,
    );
    expect(
      source,
      `${file}: ces marques ne sont pas servies depuis un répertoire « clients »`,
    ).not.toMatch(/logos\/clients\//);

    const text = visibleText(source);

    // Le groupe est nommé au-dessus de la bande, pas seulement dans l'aria-label.
    expect(text, `${file}: kicker manquant`).toMatch(
      /produits du groupe Hagnéré/i,
    );

    // Et la bande dit explicitement ce qu'elle ne prouve pas.
    expect(text, `${file}: qualification manquante`).toMatch(
      /pas des clients indépendants/i,
    );
    expect(text, `${file}: qualification incomplète`).toMatch(
      /pas leur conception, leur exploitation, leur audience ni leurs résultats/i,
    );
  });

  it("n'attribue jamais ces produits à un client externe", () => {
    for (const file of LOGO_WALLS) {
      const text = visibleText(read(file));
      expect(text, file).not.toMatch(/nos clients|ils nous font confiance/i);
    }
  });

  /**
   * Le chemin est visible dans le code source servi au visiteur et dans le
   * `src` de chaque image : aucune surface du site ne doit plus ranger ces
   * quatre marques sous « clients », et chaque fichier référencé doit exister
   * — sans quoi le renommage laisserait quatre images cassées.
   */
  it("ne sert plus aucune image depuis l'ancien répertoire et référence des fichiers présents", () => {
    // Composé à partir de fragments : le littéral complet dans ce fichier
    // ferait de ce test son propre contrevenant.
    const legacyDirectory = ["", "logos", "clients", ""].join("/");
    const sources = sourceFiles(path.join(process.cwd(), "src"));
    expect(sources.length).toBeGreaterThan(100);

    const referenced = new Set<string>();
    const offenders: string[] = [];

    for (const file of sources) {
      const content = fs.readFileSync(file, "utf8");
      if (content.includes(legacyDirectory)) {
        offenders.push(path.relative(process.cwd(), file));
      }
      for (const match of content.matchAll(/\/logos\/produits\/[\w.-]+/g)) {
        referenced.add(match[0]);
      }
    }

    expect(offenders).toEqual([]);
    expect(referenced.size).toBeGreaterThanOrEqual(4);
    for (const asset of referenced) {
      expect(
        fs.existsSync(path.join(process.cwd(), "public", asset)),
        `image référencée absente de public : ${asset}`,
      ).toBe(true);
    }
  });
});

/** Fichiers source du dépôt, hors artefacts de build. */
function sourceFiles(directory: string): string[] {
  const found: string[] = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name.startsWith(".")) continue;
      found.push(...sourceFiles(full));
    } else if (/\.(?:ts|tsx|css|json)$/.test(entry.name)) {
      found.push(full);
    }
  }
  return found;
}
