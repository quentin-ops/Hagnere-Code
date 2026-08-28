import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Aucun guide ne cite un prix de l'agence qui ne soit pas publié.
 *
 * Le 28/08/2026, une relecture a trouvé dans « signes-besoin-logiciel-metier »
 * la phrase « Forfaits publiés : 25 000 à 50 000 € HT pour un back-office de
 * 8 à 12 écrans ». Ni le plafond de 50 000 € ni le décompte d'écrans
 * n'existaient nulle part sur le site : /tarifs publie 25 000 € HT pour un CRM
 * ou ERP léger, et son palier « écrans » est 10–15. Un prospect qui compare le
 * guide et la page tarifs lisait donc deux grilles différentes — exactement ce
 * que la règle d'or de CLAUDE.md interdit, et exactement ce qu'un concurrent
 * cite en réponse à une campagne payante.
 *
 * `commercial-consistency.test.ts` ne pouvait pas l'attraper : il contrôle les
 * `Offer` des données structurées des pages service, pas la prose des guides.
 *
 * Portée volontairement étroite, pour ne signaler que de vraies fautes :
 * on ne retient un montant que s'il porte « € HT » ET s'il partage son littéral
 * de chaîne avec un marqueur qui l'attribue à l'agence. Un chiffre d'un cas
 * construit (« 480 à 960 € au coût horaire de 30 € »), une fourchette de marché
 * ou un tarif de concurrent ne sont donc pas concernés — ils n'ont pas à figurer
 * dans la grille.
 */

const PRICE_SOURCES = [
  "src/components/tarifs/body.ts",
  "src/app/agence/page.tsx",
  "src/app/agence-react/page.tsx",
  "src/app/agence-next-js/page.tsx",
];

/** Marqueurs qui attribuent un montant à Hagnéré Code plutôt qu'au marché. */
const ATTRIBUTION =
  /publié|notre grille|grille publique|Hagnéré Code|\/tarifs|repère indicatif|Discovery Sprint/i;

const AMOUNT_WITH_HT = /(\d[\d\s ]*)\s*(k€|€)\s*HT/g;
const ANY_AMOUNT = /(\d[\d\s ]*)\s*(k€|€)/g;
const STRING_LITERAL = /"((?:[^"\\]|\\.)*)"/g;

function normalise(text: string): string {
  return text.replace(/\\u00a0/g, " ").replace(/[ &]nbsp;?/g, " ");
}

function parseAmounts(text: string, pattern: RegExp): number[] {
  const found: number[] = [];
  for (const match of text.matchAll(new RegExp(pattern.source, "g"))) {
    const digits = match[1].replace(/[\s ]/g, "");
    if (!/^\d+$/.test(digits)) continue;
    const value = Number(digits) * (match[2] === "k€" ? 1000 : 1);
    // En deçà de 100 € on lit des unités de licence, au-delà de 500 000 € des
    // volumes de chiffre d'affaires : ni les uns ni les autres ne sont des
    // paliers de la grille.
    if (value >= 100 && value <= 500_000) found.push(value);
  }
  return found;
}

function publishedAmounts(root: string): Set<number> {
  const amounts = new Set<number>();
  for (const relative of PRICE_SOURCES) {
    const source = normalise(fs.readFileSync(path.join(root, relative), "utf8"));
    for (const value of parseAmounts(source, ANY_AMOUNT)) amounts.add(value);
  }
  return amounts;
}

describe("prix cités dans les guides", () => {
  const root = process.cwd();
  const guidesRoot = path.join(root, "src", "app", "guides");

  it("expose une grille publiée non vide", () => {
    // Si l'extraction casse, le test ci-dessous deviendrait vert par vacuité :
    // il n'aurait plus aucun montant à refuser.
    expect(publishedAmounts(root).size).toBeGreaterThan(15);
  });

  it("n'attribue à l'agence aucun montant absent de la grille publiée", () => {
    const published = publishedAmounts(root);
    const offenders: string[] = [];

    for (const slug of fs.readdirSync(guidesRoot)) {
      const pagePath = path.join(guidesRoot, slug, "page.tsx");
      if (!fs.existsSync(pagePath)) continue;
      const source = fs.readFileSync(pagePath, "utf8");

      for (const literal of source.matchAll(STRING_LITERAL)) {
        const text = normalise(literal[1]);
        if (!ATTRIBUTION.test(text)) continue;

        for (const value of parseAmounts(text, AMOUNT_WITH_HT)) {
          if (published.has(value)) continue;
          offenders.push(
            `${slug} : ${value} € HT est attribué à l'agence mais absent de la grille publiée — « ${text
              .replace(/\s+/g, " ")
              .slice(0, 120)} »`,
          );
        }
      }
    }

    expect(offenders).toEqual([]);
  });
});
