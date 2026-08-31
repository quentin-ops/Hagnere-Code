import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

import { pricingHtml as maintenancePricingHtml } from "@/components/maintenance-evolution/sections/pricing";
import { bodyHtml } from "./body";

const projectRoot = process.cwd();

function walk(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const full = join(directory, entry.name);
    if (entry.isDirectory()) return walk(full);
    if (!/\.tsx?$/.test(entry.name) || /\.test\.tsx?$/.test(entry.name)) return [];
    return [full];
  });
}

/** Source complète d'une page service : sa route plus ses composants. */
function servicePageSource(servicePath: string): string {
  const routeDirectory = join(projectRoot, "src/app", servicePath);
  if (!statSync(routeDirectory, { throwIfNoEntry: false })?.isDirectory()) return "";

  const routeSource = walk(routeDirectory)
    .map((file) => readFileSync(file, "utf8"))
    .join("\n");

  const componentDirectories = new Set(
    Array.from(
      routeSource.matchAll(/from\s+"@\/components\/([a-z0-9-]+)\//g),
      (match) => match[1],
    ),
  );

  return [
    routeSource,
    ...Array.from(componentDirectories, (directory) =>
      walk(join(projectRoot, "src/components", directory))
        .map((file) => readFileSync(file, "utf8"))
        .join("\n"),
    ),
  ].join("\n");
}

type Row = { path: string; prices: string[] };

/** Lignes du tableau par service : le lien porté et les trois cellules de prix. */
const ROWS: Row[] = bodyHtml
  .split('<div class="ptable-row">')
  .slice(1)
  .map((chunk) => ({
    path:
      /<div class="ptcol ptcol-svc">\s*<a href="(\/services\/[a-z0-9-]+)"/.exec(
        chunk,
      )?.[1] ?? "",
    prices: [...chunk.matchAll(/<div class="ptcol"><b>([^<]+)<\/b>/g)].map(
      (match) => match[1],
    ),
  }))
  .filter((row) => row.path !== "");

/**
 * Phrases par lesquelles une page service se décharge de son prix sur /tarifs.
 *
 * Uniquement des formes affirmatives : « aucun montant n'est publié, ni ici ni
 * sur la grille tarifaire » doit rester possible, c'est même la formulation
 * attendue quand personne ne chiffre.
 */
const PRICE_DELEGATIONS = [
  /figurent sur (?:la )?grille tarifaire/i,
  /(?:sont|est) publiés? sur (?:la )?grille tarifaire/i,
  /grille tarifaire[^.<]{0,60}(?:publie|affiche)[^.<]{0,40}(?:prix|montants?|paliers?)/i,
  /publiés? à un seul endroit/i,
];

/**
 * L'audit de 2026-08 a trouvé une impasse tarifaire circulaire sur le SEO :
 * /services/referencement-google écrivait « les paliers publiés et leur prix
 * mensuel figurent sur la grille tarifaire » pendant que les trois colonnes SEO
 * de /tarifs affichaient « Sur devis » et renvoyaient, en note de lecture, vers
 * la page service. Le prospect faisait l'aller-retour sans jamais lire un prix.
 *
 * Le contrôle est générique : dès qu'une ligne du tableau ne publie aucun
 * montant, la page service correspondante n'a pas le droit d'annoncer que ses
 * prix se trouvent sur la grille.
 */
describe("aucune impasse tarifaire entre /tarifs et une page service", () => {
  it("lit un tableau par service complet", () => {
    expect(ROWS.length).toBeGreaterThanOrEqual(10);
    for (const row of ROWS) {
      expect(row.prices, `${row.path} : cellules de prix illisibles`).toHaveLength(3);
    }
  });

  it.each(ROWS.filter((row) => row.prices.every((price) => !price.includes("€"))))(
    "$path ne renvoie pas vers /tarifs pour un montant que la grille ne publie pas",
    ({ path }) => {
      const source = servicePageSource(path);
      expect(source, `${path} : source introuvable`).not.toBe("");

      for (const delegation of PRICE_DELEGATIONS) {
        expect(
          source,
          `${path} renvoie son prix à /tarifs (${delegation.source}) alors que les trois colonnes de sa ligne affichent « Sur devis »`,
        ).not.toMatch(delegation);
      }
    },
  );

  it("garde au moins une ligne sans montant, sinon ce contrôle ne prouve rien", () => {
    const silent = ROWS.filter((row) =>
      row.prices.every((price) => !price.includes("€")),
    );
    expect(silent.length).toBeGreaterThan(0);
  });

  /**
   * La note de lecture affirmait que toute cellule « Sur devis » « reprend la
   * position de la page service concernée, qui ne publie pas de montant ».
   * C'était faux pour la maintenance : /services/maintenance-evolution publie
   * trois ordres de grandeur mensuels.
   */
  it("ne prétend pas qu'une page service se tait alors qu'elle chiffre", () => {
    expect(bodyHtml).not.toMatch(
      /Sur devis[^<]{0,80}reprennent la position de la page service concernée, qui ne publie pas de montant/i,
    );
  });
});

/**
 * Repère mensuel affiché par chaque carte, par nom de forfait.
 *
 * L'extraction lit le TEXTE de la carte, pas une classe précise : ce qui doit
 * être identique des deux côtés est le montant publié, pas la balise qui
 * l'affiche. La version précédente cherchait le premier <b> d'un
 * `.care-hint` / `.plan-hint` ; /tarifs a depuis remonté le repère dans son
 * bloc de prix (il y était en 12 px sous trois « Sur devis » de 42 px
 * identiques), et le test échouait sur une mise en forme, pas sur un écart de
 * prix.
 */
function cardHints(source: string, cardSeparator: string): Map<string, string> {
  const cards = new Map<string, string>();
  for (const chunk of source.split(cardSeparator).slice(1)) {
    const name = /<h3>([^<]+)<\/h3>/.exec(chunk)?.[1]?.trim();
    const text = chunk
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/[\s\u00a0\u202f]+/g, " ");
    const hint = /(≈ [\d ]+ ?€ HT ?\/ ?mois)/.exec(text)?.[1]?.trim();
    if (name && hint && !cards.has(name)) cards.set(name, hint);
  }
  return cards;
}

/**
 * /tarifs affichait « Sur devis » sur ses trois forfaits Care, sur la ligne
 * maintenance du tableau et sur la ligne « Maintenance mensuelle » du
 * comparatif — soit zéro repère de budget sur la page dédiée aux prix, pour la
 * question la plus fréquente d'un dirigeant après la livraison. La page service,
 * elle, publie trois ordres de grandeur mensuels dans ses scénarios-types, ce
 * qui rendait la note de lecture de /tarifs factuellement fausse.
 *
 * La position arbitrée reste « le prix est fixé au devis »
 * (src/components/ecommerce/tma-position.test.ts) : les cartes publient donc un
 * repère indicatif — le même des deux côtés, avec la même réserve — et jamais
 * un prix ferme. Où ce repère est écrit relève de la mise en page ; qu'il soit
 * identique sur les deux pages relève du contrat, et c'est cela qui est testé.
 */
describe("repères Care partagés par /tarifs et la page maintenance", () => {
  const TIERS = ["Care", "Care+", "Care Pro"];

  const gridHints = cardHints(bodyHtml, '<div class="care-card');
  const serviceHints = cardHints(maintenancePricingHtml, '<div class="plan ');

  it.each(TIERS)("publie le même repère mensuel pour %s", (tier) => {
    const grid = gridHints.get(tier);
    const service = serviceHints.get(tier);

    expect(grid, `${tier} : aucun repère chiffré sur /tarifs`).toBeDefined();
    expect(
      service,
      `${tier} : aucun repère chiffré sur la page maintenance`,
    ).toBeDefined();
    expect(grid, `${tier} : repère sans montant`).toMatch(/\d/);
    expect(grid, `${tier} : repère sans base de taxation`).toMatch(/\bHT\b/);
    expect(
      grid,
      `${tier} : /tarifs annonce « ${grid} » et la page service « ${service} »`,
    ).toBe(service);
  });

  /**
   * La position arbitrée n'a pas changé : le prix d'un forfait Care est fixé au
   * devis. Ce qui est verrouillé ici est cette PROPRIÉTÉ — aucun montant Care
   * n'est présenté comme un prix ferme — et non l'emplacement de la chaîne
   * « Sur devis ». /tarifs affiche désormais le repère dans le bloc de prix,
   * préfixé de « ≈ » et suivi de « forfait fixé au devis » dans la même unité :
   * la réserve est lue avec le chiffre, au lieu d'être renvoyée trois lignes
   * plus bas en 12 px pendant que trois « Sur devis » identiques occupaient
   * les 42 px que le visiteur lit en premier.
   */
  it("ne présente aucun montant Care comme un prix ferme", () => {
    for (const source of [bodyHtml, maintenancePricingHtml]) {
      expect(source).toMatch(/repère indicatif/i);
      expect(source).toMatch(/le forfait est fixé au devis/i);
    }

    const careSection =
      /<section class="care"[\s\S]*?<\/section>/.exec(bodyHtml)?.[0] ?? "";
    expect(careSection).not.toBe("");

    const amounts = [
      ...careSection.matchAll(/<span class="amount">([^<]+)<\/span>/g),
    ].map((match) => match[1].trim());
    expect(amounts).toHaveLength(3);
    for (const amount of amounts) {
      expect(amount, `« ${amount} » se lit comme un prix ferme`).toMatch(/^≈/);
    }

    const units = [
      ...careSection.matchAll(/<span class="per">([^<]+)<\/span>/g),
    ].map((match) => match[1]);
    expect(units).toHaveLength(3);
    for (const unit of units) {
      expect(unit).toMatch(/\bHT\b/);
      expect(unit, `« ${unit} » ne renvoie pas la fixation du forfait au devis`).toMatch(
        /forfait fixé au devis/i,
      );
    }

    // La page maintenance, elle, garde « Sur devis » dans son bloc de prix.
    expect(maintenancePricingHtml).toContain(
      '<span class="amount">Sur devis</span>',
    );
  });

  it("donne un repère lisible dans le tableau et dans le comparatif", () => {
    const row = ROWS.find(
      (candidate) => candidate.path === "/services/maintenance-evolution",
    );
    expect(row).toBeDefined();
    expect(
      (row as Row).prices.some((price) => price.includes("€")),
      "ligne maintenance : plus aucun montant, même pas le point d'entrée",
    ).toBe(true);

    const comparison =
      /<div class="vsm-cell vsm-cell-label">Maintenance mensuelle<\/div>\s*<div class="vsm-cell vsm-cell-us"><b>[^<]+<\/b><span>([^<]+)<\/span>/.exec(
        bodyHtml,
      )?.[1] ?? "";
    expect(comparison, "comparatif : ligne maintenance introuvable").not.toBe("");
    expect(
      comparison,
      "comparatif : « Maintenance mensuelle » ne donne toujours aucun ordre de grandeur",
    ).toMatch(/€/);
    expect(comparison).toMatch(/\bHT\b/);
  });
});
