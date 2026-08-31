import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

import { SEO_FORMATS } from "@/components/seo-referencement/content";
import { SERVICE_LINKS } from "@/lib/services";
import { bodyHtml } from "./body";

const read = (relative: string) =>
  readFileSync(join(process.cwd(), relative), "utf8");

/** Pages service dont /tarifs recopié les conditions commerciales. */
const ADS_PRICING = read("src/components/publicite-en-ligne/sections/pricing.ts");
const VIDEO_PRICING = read("src/components/contenu-video/sections/pricing.ts");
const MAINTENANCE_PRICING = read(
  "src/components/maintenance-evolution/sections/pricing.ts",
);
const AUDIT_PRICING = read("src/components/audit-technique/sections/pricing.ts");
const RGPD_PRICING = read("src/components/securite-rgpd/sections/pricing.ts");
const INTERNAL_TOOLS = read("src/components/outils-internes/body.ts");
const SHOWCASE_PAGE = read("src/components/sites-vitrines/body.ts");
const VIDEO_SCENARIOS = read("src/components/contenu-video/sections/scenarios.ts");

/** Une ligne du tableau par service, repérée par le lien qu'elle porte. */
function serviceRow(path: string): string {
  return (
    bodyHtml
      .split('<div class="ptable-row">')
      .slice(1)
      .find((chunk) => chunk.includes(`<a href="${path}">`)) ?? ""
  );
}

/** Cellules de prix du tableau par service, hors colonne « service ». */
const PRICE_CELLS = [
  ...bodyHtml.matchAll(/<div class="ptcol"><b>([^<]+)<\/b>/g),
].map((match) => match[1]);

/**
 * L'audit de 2026-08 avait relevé que la grille de /tarifs ne présentait que
 * 10 des 11 services publiés (Sécurité & RGPD manquait), pendant que le footer
 * de la même page revendiquait « 11 services ». Rien ne reliait la grille au
 * registre : ce test ferme l'écart.
 */
describe("grille tarifaire de /tarifs", () => {
  const linkedServices = new Set(
    [...bodyHtml.matchAll(/<div class="ptcol ptcol-svc">\s*<a href="(\/services\/[a-z0-9-]+)"/g)].map(
      (match) => match[1],
    ),
  );

  it("expose une ligne par service publié", () => {
    const missing = SERVICE_LINKS.map((service) => service.path).filter(
      (path) => !linkedServices.has(path),
    );
    expect(missing).toEqual([]);
  });

  it("ne renvoie vers aucune page service inexistante", () => {
    const known = new Set<string>(SERVICE_LINKS.map((service) => service.path));
    const unknown = [...linkedServices].filter((path) => !known.has(path));
    expect(unknown).toEqual([]);
  });

  it("présente les repères comme indicatifs et non comme un engagement", () => {
    expect(bodyHtml).toMatch(/ordres de grandeur indicatifs/i);
    expect(bodyHtml).not.toMatch(
      /nous nous engageons à ce que nos devis tombent/i,
    );
  });
});

/**
 * Un prix B2B doit indiquer sa base de taxation là où il est lu. La grille
 * publiait 25 montants nus dans un tableau dont l'en-tête disparaît sous
 * 768 px : le visiteur mobile ne voyait aucun « HT ». Toutes les pages service
 * le font désormais sans exception.
 */
describe("mention HT sur /tarifs", () => {
  it("qualifie chaque cellule chiffrée du tableau par service", () => {
    const monetary = PRICE_CELLS.filter((cell) => cell.includes("€"));
    expect(monetary.length).toBeGreaterThan(20);

    const nude = monetary.filter((cell) => !/\bHT\b/.test(cell));
    expect(nude).toEqual([]);
  });

  it("qualifie chaque carte de forfait projet et chaque forfait Care", () => {
    const units = [...bodyHtml.matchAll(/<span class="per">([^<]+)<\/span>/g)].map(
      (match) => match[1],
    );
    expect(units.length).toBeGreaterThanOrEqual(7);

    for (const unit of units) {
      expect(unit, `unité de prix sans base de taxation : « ${unit} »`).toMatch(
        /\bHT\b/,
      );
    }
  });

  it("qualifie les trois lignes chiffrées du comparatif", () => {
    const monetary = [
      ...bodyHtml.matchAll(/<div class="vsm-cell vsm-cell-us"><b>([^<]+)<\/b>/g),
    ]
      .map((match) => match[1])
      .filter((cell) => cell.includes("€"));

    expect(monetary.length).toBe(3);
    for (const cell of monetary) {
      expect(cell, `comparatif : « ${cell} » sans HT`).toMatch(/\bHT\b/);
    }
  });
});

/**
 * /services/referencement-google publie trois formats et renvoie les prix à
 * /tarifs. Encore faut-il que la grille nomme les mêmes trois formats, sinon le
 * lecteur ne peut pas relier une colonne à une offre.
 */
describe("correspondance SEO entre la page service et la grille", () => {
  const row =
    bodyHtml
      .split('<div class="ptable-row">')
      .slice(1)
      .find((chunk) =>
        chunk.includes('<a href="/services/referencement-google">'),
      ) ?? "";

  it("nomme les trois formats publiés par la page service", () => {
    expect(row).toBeTruthy();
    expect(SEO_FORMATS).toHaveLength(3);
    for (const format of SEO_FORMATS) {
      expect(row, `${format.title} absent de la ligne SEO`).toContain(
        format.title,
      );
    }
  });

  it("explicite la correspondance sous le tableau", () => {
    expect(bodyHtml).toMatch(
      /les trois colonnes\s+correspondent aux trois formats publiés/i,
    );
  });

  /**
   * La note de lecture affirmait, pour toutes les lignes « Sur devis », que la
   * page service « ne publie pas de montant ». C'était vrai du SEO, faux de la
   * maintenance. La note doit donc dire que personne ne chiffre, sans renvoyer
   * le lecteur chercher le prix sur l'autre page.
   */
  it("ne renvoie pas le prix SEO à la page service", () => {
    expect(bodyHtml).toMatch(/n'est chiffré ni ici ni là-bas/i);
    expect(bodyHtml).not.toMatch(
      /reprennent la position de la page service concernée, qui ne publie pas de montant/i,
    );
  });
});

/**
 * Les cellules du tableau ne peuvent pas engager une charge ou un délai que la
 * page service refuse d'écrire (« Express — 3-5 j ouvrés, 1 senior »,
 * « Premium — 4-6 canaux + équipe 3 pers. »).
 */
describe("charges et délais annoncés dans les cellules", () => {
  it("ne chiffre ni durée d'intervention ni effectif mobilisé", () => {
    const notes = [
      ...bodyHtml.matchAll(/<div class="ptcol"><b>[^<]*<\/b><span>([^<]*)<\/span>/g),
    ].map((match) => match[1]);

    expect(notes.length).toBeGreaterThan(20);
    for (const note of notes) {
      expect(note, `durée d'intervention chiffrée : « ${note} »`).not.toMatch(
        /\d+\s*[-–]\s*\d+\s*j(?:ours?)?\b/,
      );
      expect(note, `effectif chiffré : « ${note} »`).not.toMatch(/\d+\s*pers/);
    }

    // La page audit a délibérément remplacé ces durées : /tarifs la suit.
    expect(AUDIT_PRICING).toContain("Durée et intervenants au devis");
  });
});

/**
 * Deux pages publiques ne peuvent pas publier deux conditions contractuelles
 * différentes pour la même offre. La cellule DÉLAI de la ligne Publicité
 * annonçait « 3 mois min. » alors que /services/publicite-en-ligne répète trois
 * fois « Durée et préavis précisés au devis » sans jamais publier de minimum.
 */
describe("durées d'engagement publiées sur /tarifs", () => {
  it("n'invente aucune durée minimale pour la ligne Publicité", () => {
    expect(ADS_PRICING).toMatch(/Durée et préavis précisés au devis/);
    expect(ADS_PRICING).not.toMatch(/3\s*mois\s*min/i);
    expect(bodyHtml).not.toMatch(/3\s*mois\s*min/i);
  });

  it("ne conserve qu'un engagement minimal, celui que la page service publie", () => {
    const minimums = [...bodyHtml.matchAll(/(\d+)\s*mois\s*min\./g)].map(
      (match) => Number(match[1]),
    );

    // Seul le retainer vidéo publie un minimum, et la page service l'écrit.
    expect(minimums).toEqual([6]);
    expect(VIDEO_PRICING).toMatch(/engagement minimum de 6 mois/i);
  });
});

/**
 * /tarifs et /services/maintenance-evolution vendent les mêmes forfaits de run.
 * La grille les nommait encore « Essentiel / Scale / Premium » sous une section
 * « Care / Care+ / Care Pro » de la même page.
 */
describe("nomenclature des forfaits de run", () => {
  const CARE_TIERS = ["Care", "Care+", "Care Pro"];

  it("emploie les mêmes noms que la page maintenance", () => {
    for (const tier of CARE_TIERS) {
      expect(MAINTENANCE_PRICING, tier).toContain(`<h3>${tier}</h3>`);
      expect(bodyHtml, tier).toContain(`<h3>${tier}</h3>`);
    }
  });

  it("ne réintroduit pas l'ancienne nomenclature dans la ligne maintenance", () => {
    const row =
      bodyHtml
        .split('<div class="ptable-row">')
        // [0] est tout ce qui précède la première ligne du tableau.
        .slice(1)
        .find((chunk) =>
          chunk.includes('<a href="/services/maintenance-evolution">'),
        ) ?? "";
    expect(row).toBeTruthy();
    expect(row).toContain("Care");
    expect(row).not.toMatch(/Essentiel|Scale|Premium/);
  });
});

/**
 * Cinq services publient leur propre cadrage payant. La page affirmait
 * pourtant qu'au-delà de 8 k€ le seul cadrage possible était le Discovery
 * Sprint, ce que chaque page service contredit en renvoyant vers /tarifs.
 */
describe("points d'entrée payants de /tarifs", () => {
  const SECTION =
    bodyHtml.match(/<section class="entrypoints"[\s\S]*?<\/section>/)?.[0] ?? "";

  it("publie la section et ses six points d'entrée", () => {
    expect(SECTION).toBeTruthy();
    expect(SECTION).toContain("Les points d&#39;entrée payants.");
    expect(SECTION.match(/<div class="ep-row">/g) ?? []).toHaveLength(6);
  });

  it.each([
    ["990 € HT", "/services/outils-internes-sur-mesure", INTERNAL_TOOLS, "990 €"],
    ["1 500 € HT", "/services/publicite-en-ligne", ADS_PRICING, "1 500 €"],
    ["2 000 € HT", "/services/maintenance-evolution", MAINTENANCE_PRICING, "2 000 €"],
    ["5 000 € HT", "/services/securite-rgpd", RGPD_PRICING, "5 000 "],
    ["8 000 € HT", "/services/audit-technique", AUDIT_PRICING, "8 000 €"],
  ])(
    "reprend %s depuis %s sans le réinventer",
    (price, path, servicePage, servicePrice) => {
      expect(SECTION, `${price} absent de la section`).toContain(
        `<b>${price}</b>`,
      );
      expect(SECTION, `${path} non lié`).toContain(`href="${path}"`);
      expect(
        servicePage,
        `${servicePrice} absent de la page ${path}`,
      ).toContain(servicePrice);
    },
  );

  it("dit que les cadrages payants ne se cumulent pas", () => {
    expect(SECTION).toMatch(/ne se cumulent pas/i);
    expect(bodyHtml).not.toMatch(
      /on ne signe rien sans cadrage payé\.[^<]*<\/p>\s*<div class="ref-because">→ Discovery Sprint/,
    );
  });
});

/**
 * La FAQ illustrait les fourchettes avec « 15-30 k€ », un montant qui
 * n'apparaît nulle part sur /tarifs.
 */
describe("cohérence interne des montants cités", () => {
  it("n'illustre les fourchettes qu'avec une fourchette affichée sur la page", () => {
    const quoted = bodyHtml.match(
      /Pourquoi des fourchettes \(([^)]+)\) et pas un prix sec/,
    )?.[1];

    expect(quoted).toBeTruthy();
    expect(bodyHtml).toContain(`<span class="amount">${quoted}</span>`);
  });

  it("aligne la carte Essentiel sur le ticket d'entrée publié", () => {
    const vitrineEntry = PRICE_CELLS[0];
    expect(vitrineEntry).toBe("6,9 k€ HT");

    // La carte annonçait « 6–15 k€ » quand la première ligne du tableau et
    // /methode publient 6,9 k€ comme prix d'entrée.
    expect(bodyHtml).not.toContain('<span class="amount">6–15 k€</span>');
    expect(bodyHtml).toContain('<span class="amount">6,9–15 k€</span>');

    // Cette garde ne couvrait que /tarifs, si bien que l'accueil a continué
    // d'afficher 6 k€ : c'est le tout premier prix que voit un visiteur, et
    // 900 € d'écart sur un plancher contredisent la promesse « le prix est écrit ».
    const accueil = read("src/components/homepage/body.ts");
    expect(accueil).not.toMatch(/≈\s*6–15\s*k€/);
    expect(accueil).toContain(`≈ ${vitrineEntry.replace(" k€ HT", "")}–15 k€ HT`);
  });

  /**
   * La carte forfait « Essentiel » annonçait « Site 5–10 pages » alors que la
   * ligne Sites vitrines du tableau, deux sections plus bas, publie
   * « Essentiel — 3–5 pages » et « Performance — 10–20 pages », comme la page
   * service. Le même nom d'offre décrivait deux périmètres sur la même page.
   */
  it("n'annonce que des volumes de pages publiés par ailleurs", () => {
    const row = serviceRow("/services/sites-vitrines");
    const published = new Set(
      [...row.matchAll(/(\d+)\s*[–-]\s*(\d+)\s*pages/g)].map(
        (match) => `${match[1]}-${match[2]}`,
      ),
    );

    expect(published.size, "aucun volume de pages dans la ligne vitrine").toBeGreaterThan(0);
    // La page service publie les mêmes deux paliers.
    for (const range of published) {
      const [low, high] = range.split("-");
      expect(
        SHOWCASE_PAGE,
        `${range} pages absent de /services/sites-vitrines`,
      ).toMatch(new RegExp(`${low}\\s*[–-]\\s*${high}\\s*pages`));
    }

    const cardFeature =
      bodyHtml.match(/<\/svg>(Site\s[^<]*pages[^<]*)<\/li>/)?.[1] ?? "";
    expect(cardFeature, "aucune ligne « Site … pages » dans les cartes").not.toBe("");

    // « Site … pages OU MVP … écrans » : seul le membre avant le « OU » décrit
    // un volume de pages, l'autre compte des écrans de MVP.
    const pagesPart = cardFeature.split(/\bOU\b/)[0];
    const announced = [...pagesPart.matchAll(/(\d+)\s*[–-]\s*(\d+)/g)].map(
      (match) => `${match[1]}-${match[2]}`,
    );

    expect(announced.length, `aucun volume lisible dans « ${cardFeature} »`).toBeGreaterThan(0);
    for (const range of announced) {
      expect(
        published.has(range),
        `carte forfait : « ${range} pages » n'est publié dans aucun palier vitrine`,
      ).toBe(true);
    }
  });
});

/**
 * La cellule PREMIUM de la ligne « Contenu & vidéo » collait deux offres sous
 * un seul prix mensuel : le Content Retainer à 6 900 €/m et le « Studio dédié »,
 * qui est un forfait « dès 15 k€ HT · sur devis » sur la page service. Le
 * retainer Motion & brand (4 500 €/m) n'apparaissait, lui, dans aucune colonne.
 */
describe("ligne contenu & vidéo de /tarifs", () => {
  const row = serviceRow("/services/contenu-video");

  it("ne mélange pas un forfait et un abonnement dans la même cellule", () => {
    expect(row).toBeTruthy();

    const cells = [
      ...row.matchAll(/<div class="ptcol"><b>([^<]+)<\/b><span>([^<]*)<\/span>/g),
    ];
    expect(cells.length).toBe(3);

    for (const [, price, note] of cells) {
      if (!/€\/m\b/.test(price)) continue;
      expect(
        note,
        `cellule mensuelle « ${price} » : ${note} — un forfait y est présenté comme un abonnement`,
      ).not.toMatch(/dès\s*\d|k€/i);
    }
  });

  it("renvoie les offres absentes du tableau vers la note de bas de tableau", () => {
    // Deux blocs `.ptf-body` sur la page : celui qui commente le tableau par
    // service est celui qui explique comment le lire.
    const foot =
      [...bodyHtml.matchAll(/<div class="ptf-body">([\s\S]*?)<\/div>/g)]
        .map((match) => match[1])
        .find((chunk) => chunk.includes("Comment lire ce tableau")) ?? "";

    expect(foot).toBeTruthy();
    // Les deux offres publiées par la page service et absentes des colonnes.
    expect(VIDEO_SCENARIOS).toContain("Motion &amp; brand");
    expect(VIDEO_PRICING).toContain("Studio dédié");
    expect(foot, "Motion & brand absent de la note").toMatch(/Motion &amp; brand/);
    expect(foot, "Studio dédié absent de la note").toMatch(/Studio dédié/);

    // Les montants repris doivent être ceux de la page service.
    expect(VIDEO_SCENARIOS).toMatch(/4 500 €\/mois/);
    expect(foot).toMatch(/4 500 €\/m HT/);
    expect(VIDEO_PRICING).toMatch(/Dès 15 k€/);
    expect(foot).toMatch(/15 k€ HT/);
  });
});

/**
 * Le titre et le badge de la carte « Discovery » sont les deux éléments lus en
 * survol. Ils annonçaient « Discovery payé, déduit » et « −1 500 € PHASE 2 »
 * pendant que le paragraphe entre les deux conditionnait la déduction. La
 * position arbitrée est que la déduction est toujours conditionnelle : si un
 * titre ou un badge parle de déduction ou du montant, il doit porter la
 * condition avec lui.
 */
describe("carte Discovery de /tarifs", () => {
  const card =
    bodyHtml
      .split('<div class="prin ')
      // [0] est tout ce qui précède la première carte de principe.
      .slice(1)
      .find((chunk) => chunk.includes("Discovery")) ?? "";

  const CONDITIONAL = /\bSI\b|AU DEVIS|SELON LE DEVIS|SOUS CONDITION/i;

  it("ne présente la déduction comme acquise ni dans le titre ni dans le badge", () => {
    expect(card).toBeTruthy();

    const title = card.match(/<h3>([^<]*)<\/h3>/)?.[1] ?? "";
    const tag = card.match(/<span class="prin-tag">([^<]*)<\/span>/)?.[1] ?? "";
    expect(title).not.toBe("");
    expect(tag).not.toBe("");

    for (const [label, value] of [
      ["titre", title],
      ["badge", tag],
    ] as const) {
      if (!/déduit|déduction|1\s*500/i.test(value)) continue;
      expect(
        value,
        `${label} : « ${value} » annonce une déduction sans la condition`,
      ).toMatch(CONDITIONAL);
    }
  });

  it("garde la formulation conditionnelle dans le corps de la carte", () => {
    expect(card).toContain("le devis précise la déduction applicable");
  });
});
