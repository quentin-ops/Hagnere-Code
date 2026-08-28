import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Cohérence croisée entre un prix maison cité dans un guide et sa source.
 *
 * `prix-gestion-google-ads` cite les tarifs publics de Hagnéré Code pour
 * situer sa propre offre, avec la mention « page publique, consultée le
 * 30 juillet 2026 » qui leur donne l'apparence d'un fait vérifié. Le contrat
 * de contenu du guide ne verrouillait jusqu'ici que la phrase du guide, pas sa
 * concordance avec la grille tarifaire : le jour où un forfait ou un seuil de
 * budget média bouge — c'est-à-dire précisément pendant une campagne — la page
 * qui explique au lecteur comment débusquer les prix opaques continuerait
 * d'annoncer l'ancien montant.
 *
 * Ce test lit les deux fichiers et échoue si l'un des cinq montants diverge.
 * Il n'impose aucune valeur en dur : la grille reste la source de vérité, le
 * guide doit la suivre.
 *
 * À dupliquer pour toute future citation d'un prix maison dans un guide.
 */

const repositoryRoot = process.cwd();

/** Ramène espaces fines, insécables et retours à la ligne à une espace. */
function normalize(value: string): string {
  return value.replace(/[\s  ]+/g, " ");
}

const pricingSource = normalize(
  readFileSync(
    path.join(
      repositoryRoot,
      "src/components/publicite-en-ligne/sections/pricing.ts",
    ),
    "utf8",
  ),
);

const guideSource = normalize(
  readFileSync(
    path.join(repositoryRoot, "src/app/guides/prix-gestion-google-ads/page.tsx"),
    "utf8",
  ),
);

/** Montants affichés sur les cartes de la grille, dans leur ordre de lecture. */
const publishedAmounts = [
  ...pricingSource.matchAll(/<span class="amount">([^<]+)<\/span>/g),
].map((match) => match[1].trim());

/** Seuil bas de budget média du forfait d'entrée, en milliers d'euros. */
const starterMediaFloor = pricingSource.match(
  /budget media (\d+) à \d+ k€\/mois/,
)?.[1];

describe("prix Hagnéré Code cités dans le guide Google Ads", () => {
  it("lit bien la grille tarifaire publique", () => {
    expect(publishedAmounts).toHaveLength(4);
    expect(starterMediaFloor).toBeDefined();
  });

  it("cite l'audit et les trois forfaits au montant réellement publié", () => {
    const [audit, starter, scale, premium] = publishedAmounts;

    expect(
      guideSource,
      "le guide n'annonce plus le prix d'audit de la grille",
    ).toContain(`un audit à ${audit} HT`);
    expect(
      guideSource,
      "les trois forfaits cités divergent de la grille",
    ).toContain(
      `des forfaits fixes à ${starter}, ${scale} et ${premium} HT par mois`,
    );
  });

  it("cite le seuil de budget média du forfait d'entrée sans le figer", () => {
    expect(guideSource).toContain(
      `situe le forfait Starter à partir de ${starterMediaFloor} 000 € de budget média mensuel`,
    );
  });

  it("garde chaque montant cité rattaché à la page de service", () => {
    // Sans ce lien, le lecteur ne peut pas vérifier le prix à sa date de
    // lecture : la citation redeviendrait une affirmation invérifiable.
    expect(guideSource).toContain('href="/services/publicite-en-ligne"');
  });
});
