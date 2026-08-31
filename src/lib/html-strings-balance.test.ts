import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Porte de build : les chaînes HTML doivent être équilibrées.
 *
 * Une grande partie des pages de ce site vit dans des chaînes HTML à
 * l'intérieur de fichiers `.ts`, injectées par `dangerouslySetInnerHTML`.
 * TypeScript ne les relit pas, les tests de contenu ne comptent pas les
 * balises, et le rendu ne signale rien : une balise fermante en trop passe
 * donc toutes les portes existantes.
 *
 * Ce qu'une seule balise en trop a réellement coûté, mesuré sur
 * `homepage/body.ts` (421 `</div>` pour 420 `<div>`) :
 *   — l'accueil ignorait `prefers-color-scheme: dark` et rendait un fond blanc
 *     quand toutes les autres pages basculaient ;
 *   — React échouait à hydrater la page, parce que le navigateur reconstruit
 *     un arbre différent de celui sérialisé par le serveur, et refaisait donc
 *     le rendu de 2 141 nœuds côté client.
 * Aucun test ne les reliait, et le défaut a survécu à deux audits.
 */

const RACINE = join(process.cwd(), "src");

/** Balises dont le déséquilibre casse la reconstruction de l'arbre. */
const BALISES = [
  "div", "section", "article", "span", "ul", "li", "svg", "g",
  "button", "details", "summary", "table", "tr", "td", "nav",
] as const;

function fichiersTs(dossier: string): string[] {
  return readdirSync(dossier, { withFileTypes: true }).flatMap((entree) => {
    const chemin = join(dossier, entree.name);
    if (entree.isDirectory()) return fichiersTs(chemin);
    if (!entree.name.endsWith(".ts") || entree.name.includes(".test.")) return [];
    return [chemin];
  });
}

/**
 * Les commentaires citent des balises en prose (« des <span> vides colorés »)
 * et les modules qui construisent du DOM en JavaScript n'ont pas de chaîne à
 * équilibrer : les uns comme les autres produiraient de faux positifs.
 */
/**
 * Le balisage de ce dépôt vit dans des littéraux gabarits (backticks). On ne
 * compte que là : ailleurs, une constante du genre `const endTag = "</section>"`
 * ou une balise citée en prose dans un commentaire produirait un faux positif.
 * Filtrer les guillemets après coup ne marche pas — sur une ligne à nombre
 * impair de guillemets, le filtre avale une balise entière et invente un
 * déséquilibre (constaté sur outils-internes/body.ts, pourtant équilibré).
 */
function gabarits(source: string): string {
  const sansCommentaires = source
    .replace(/\/\*[\s\S]*?\*\//g, " ")
    .replace(/^\s*\/\/.*$/gm, " ");
  const morceaux: string[] = [];
  let dans = false;
  let debut = 0;
  for (let i = 0; i < sansCommentaires.length; i += 1) {
    const c = sansCommentaires[i];
    if (c === "\\") {
      i += 1;
      continue;
    }
    if (c !== "`") continue;
    if (dans) morceaux.push(sansCommentaires.slice(debut, i));
    else debut = i + 1;
    dans = !dans;
  }
  // Les commentaires HTML citent aussi des balises en prose.
  return morceaux.join("\n").replace(/<!--[\s\S]*?-->/g, " ");
}


describe("chaînes HTML : équilibrage des balises", () => {
  it("ne laisse aucune balise ouvrante ou fermante orpheline", () => {
    const desequilibres: string[] = [];

    for (const chemin of fichiersTs(RACINE)) {
      const brut = readFileSync(chemin, "utf8");
      if (!brut.includes("</div>") && !brut.includes("</section>")) continue;
      // `createElement` : le module fabrique du DOM, il n'y a pas de chaîne.
      if (brut.includes("createElement")) continue;

      const source = gabarits(brut);
      const relatif = chemin.slice(process.cwd().length + 1);

      for (const balise of BALISES) {
        const ouvrantes =
          source.match(new RegExp(`<${balise}\\b[^>]*?(?<!/)>`, "g"))?.length ?? 0;
        const fermantes =
          source.match(new RegExp(`</${balise}>`, "g"))?.length ?? 0;
        if (ouvrantes !== fermantes) {
          desequilibres.push(
            `${relatif} : <${balise}> ${ouvrantes} ouvrantes / ${fermantes} fermantes`,
          );
        }
      }
    }

    expect(desequilibres).toEqual([]);
  });
});
