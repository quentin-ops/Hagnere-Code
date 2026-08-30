import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { getGuide, PUBLISHED_GUIDES } from "@/lib/guides";
import Page, { metadata } from "./page";

const slugDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(slugDirectory, "../../../..");
const pageSource = readFileSync(resolve(slugDirectory, "page.tsx"), "utf8");
const normalizedPageSource = pageSource.replace(/\s+/g, " ");
const pricingSource = readFileSync(
  resolve(repositoryRoot, "src/components/publicite-en-ligne/sections/pricing.ts"),
  "utf8",
);
const renderedPage = renderToStaticMarkup(Page());
const guide = getGuide("prix-gestion-google-ads");
const structuredData = [
  ...renderedPage.matchAll(
    /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
  ),
].map((match) => JSON.parse(match[1]) as Record<string, unknown>);

/* ──────────────────────────────────────────────
   Blancs insécables

   Jamais tapés en littéral, jamais désignés par une contre-oblique suivie
   d'une espace : cette écriture-là s'évalue en espace ORDINAIRE, et trois
   tests du dépôt ont ainsi cru vérifier une typographie qu'ils ne regardaient
   plus. `String.fromCharCode` survit à toute réécriture du fichier,
   contrairement au caractère littéral.
   ────────────────────────────────────────────── */

const NBSP = String.fromCharCode(0x00a0);
const NBSP_ETROIT = String.fromCharCode(0x202f);
const ESPACE_FINE = String.fromCharCode(0x2009);
const ESPACE = " ";

/** La séquence d'échappement telle qu'elle est ÉCRITE dans page.tsx. */
const ECHAPPEMENT_NBSP = String.fromCharCode(92) + "u00a0";

/** Les trois blancs insécables, en classe de caractères. */
const CLASSE_INSECABLES = `[${NBSP}${NBSP_ETROIT}${ESPACE_FINE}]`;

/* ──────────────────────────────────────────────
   Extraction du corps
   ────────────────────────────────────────────── */

const ELEMENTS_VIDES = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);

/**
 * Retire les sous-arbres `data-read-time-exclude="true"` et `class="sr-only"`.
 *
 * Portage littéral de `scripts/measure-guide-readtime.mjs`, qui est la mesure
 * canonique du dépôt. La version précédente de ce fichier ne retirait pas les
 * blocs `sr-only` et ignorait les éléments vides : elle comptait 3 078 mots
 * là où le script en comptait 3 039, et le rapport de livraison en déclarait
 * 3 079. Trois valeurs pour une même grandeur, dont deux fausses. Ici, une
 * seule méthode : celle du script.
 */
function removeReadTimeExcludedElements(html: string) {
  const openingElement =
    /<([a-z][a-z0-9-]*)\b(?=[^>]*(?:\bdata-read-time-exclude=["']true["']|\bclass=["'][^"']*\bsr-only\b[^"']*["']))[^>]*>/gi;
  let cursor = 0;
  let output = "";

  for (
    let opening = openingElement.exec(html);
    opening;
    opening = openingElement.exec(html)
  ) {
    output += html.slice(cursor, opening.index);
    const tagName = opening[1].toLowerCase();

    if (ELEMENTS_VIDES.has(tagName)) {
      cursor = opening.index + opening[0].length;
      openingElement.lastIndex = cursor;
      continue;
    }

    const matchingTag = new RegExp(`</?${tagName}\\b[^>]*>`, "gi");
    matchingTag.lastIndex = opening.index + opening[0].length;
    let depth = 1;
    let closingEnd = -1;

    for (let tag = matchingTag.exec(html); tag; tag = matchingTag.exec(html)) {
      depth += tag[0].startsWith("</") ? -1 : 1;
      if (depth === 0) {
        closingEnd = matchingTag.lastIndex;
        break;
      }
    }

    if (closingEnd === -1) return html;
    cursor = closingEnd;
    openingElement.lastIndex = closingEnd;
  }

  return output + html.slice(cursor);
}

/**
 * Corps de l'article, extrait en comptant la profondeur des `<article>`.
 *
 * Le comparateur de devis rend lui-même des `<article>` imbriqués : un motif
 * non gourmand `<article>…</article>` s'arrêtait au premier fermant et
 * amputait le guide de ses trois dernières sections. La mesure paraissait
 * alors conforme au calibre, ce qui est exactement le genre de mesure fausse
 * que le §10.2 du protocole interdit.
 */
function articleHtml() {
  const opening = /<article\b[^>]*>/i.exec(renderedPage);
  expect(opening).not.toBeNull();
  const contentStart = (opening?.index ?? 0) + (opening?.[0].length ?? 0);
  const tag = /<\/?article\b[^>]*>/gi;
  tag.lastIndex = contentStart;
  let depth = 1;
  let end = -1;

  for (let match = tag.exec(renderedPage); match; match = tag.exec(renderedPage)) {
    depth += match[0].startsWith("</") ? -1 : 1;
    if (depth === 0) {
      end = match.index;
      break;
    }
  }

  expect(end).toBeGreaterThan(contentStart);
  return removeReadTimeExcludedElements(renderedPage.slice(contentStart, end));
}

function readerVisibleText(html: string) {
  return html
    .replace(/<(script|style|template|noscript|svg)\b[^>]*>[\s\S]*?<\/\1>/gi, " ")
    // Les balises en ligne disparaissent sans laisser d'espace : `</a>` remplacé
    // par une espace transformerait « secondaires</a>&nbsp;: » en une faute de
    // typographie qui n'existe pas à l'écran.
    .replace(/<\/?(?:a|em|strong|b|i|code|sup|sub|span|abbr)\b[^>]*>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&#(?:x[0-9a-f]+|[0-9]+);/gi, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Texte lisible en conservant les espaces insécables tels quels.
 *
 * `readerVisibleText` ramène tout blanc à une espace ordinaire — U+00A0 fait
 * partie de `\s` — ce qui rend le contrôle typographique impossible.
 */
function typographicText(html: string) {
  return html
    .replace(/<(script|style|template|noscript|svg)\b[^>]*>[\s\S]*?<\/\1>/gi, " ")
    .replace(/&nbsp;/gi, NBSP)
    .replace(/&#(?:160|xa0);/gi, NBSP)
    .replace(/<\/?(?:a|em|strong|b|i|code|sup|sub|span|abbr)\b[^>]*>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&(?:rsquo|apos);/gi, "’")
    .replace(/&(?:ndash|mdash);/gi, "—")
    .replace(/&euro;/gi, "€")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/[ \t\r\n]+/g, " ")
    .trim();
}

/** Texte lisible, insécables ramenés à des espaces ordinaires. */
function prose(html: string) {
  return typographicText(html).replace(
    new RegExp(CLASSE_INSECABLES, "g"),
    ESPACE,
  );
}

function articleWordCount() {
  return (
    readerVisibleText(articleHtml()).match(
      /[\p{L}\p{N}]+(?:[’'-][\p{L}\p{N}]+)*/gu,
    )?.length ?? 0
  );
}

/* ──────────────────────────────────────────────
   Vérificateur arithmétique indépendant (§7.1)

   Deux règles, posées après la reprise du 28/08/2026 :

   1. Le vérificateur empile mois par mois là où le guide multiplie, et
      cherche les seuils par dichotomie là où le guide résout une équation.
   2. Chaque résultat est confronté à une CONSTANTE calculée à la main, dont
      les étapes sont écrites au-dessus. Aucune de ces constantes n'est
      reprise d'une formule de la page : la version précédente posait
      `const ecartHonoraires = 300` — le chiffre faux du guide — puis
      « vérifiait » qu'il valait 300. Le vérificateur héritait de l'erreur.
   ────────────────────────────────────────────── */

const MEDIA_MENSUEL_HT = 5_000;
const TAUX_REGLEMENTAIRE = 0.02;
const AUTRES_COUTS_MENSUELS_HT = 250;
const LANCEMENT_COMMUN_HT = 2_000;
/** Hypothèse annoncée dans le guide, pas une source. */
const COUT_HORAIRE_INTERNE = 50;
const HEURES_INTERNES_INITIALES = 8;
const HEURES_INTERNES_MENSUELLES = 3;
const TAUX_TVA = 0.2;

interface Offre {
  setup: number;
  mensuel: (media: number) => number;
}

const OFFRES: Record<string, Offre> = {
  forfait: { setup: 750, mensuel: () => 900 },
  pourcentage: { setup: 900, mensuel: (media) => 0.15 * media },
  hybride: { setup: 800, mensuel: (media) => 500 + 0.08 * media },
  tempsPasse: { setup: 8 * 100, mensuel: () => 10 * 100 },
};

function centimes(valeur: number) {
  return Math.round(valeur * 100) / 100;
}

function empiler(offre: Offre, mois: number, media = MEDIA_MENSUEL_HT) {
  let externe = LANCEMENT_COMMUN_HT + offre.setup;
  let heures = HEURES_INTERNES_INITIALES;

  for (let mois_ecoule = 0; mois_ecoule < mois; mois_ecoule += 1) {
    externe += media;
    externe += media * TAUX_REGLEMENTAIRE;
    externe += AUTRES_COUTS_MENSUELS_HT;
    externe += offre.mensuel(media);
    heures += HEURES_INTERNES_MENSUELLES;
  }

  const arrondi = centimes(externe);
  return {
    externe: arrondi,
    ttc: centimes(arrondi * (1 + TAUX_TVA)),
    // TVA supposée entièrement récupérable dans le scénario du guide.
    connu: centimes(arrondi + heures * COUT_HORAIRE_INTERNE),
    heures,
  };
}

/** Racine d'une fonction continue, par dichotomie. */
function racine(f: (x: number) => number, bas: number, haut: number) {
  let a = bas;
  let b = haut;
  for (let pas = 0; pas < 200; pas += 1) {
    const milieu = (a + b) / 2;
    if (f(a) * f(milieu) <= 0) b = milieu;
    else a = milieu;
  }
  return (a + b) / 2;
}

/** Honoraires mensuels des quatre offres, dérivés de `OFFRES`. */
function honorairesMensuels(media = MEDIA_MENSUEL_HT) {
  return Object.values(OFFRES).map((offre) => offre.mensuel(media));
}

/**
 * Coût connu à douze mois, empilé mois par mois et SANS arrondi au centime.
 *
 * `empiler` arrondit son total, ce qui transforme la différence entre deux
 * offres en fonction en escalier : une dichotomie y converge vers un point
 * situé n'importe où dans la marche, et le croisement recalculé pouvait
 * tomber à 5 916,66 € au lieu de 5 916,67 €. La recherche de racine se fait
 * donc sur la grandeur brute ; l'arrondi n'intervient qu'à l'affichage.
 */
function connuDouzeMoisBrut(offre: Offre, media: number) {
  let externe = LANCEMENT_COMMUN_HT + offre.setup;
  let heures = HEURES_INTERNES_INITIALES;

  for (let mois = 0; mois < 12; mois += 1) {
    externe += media;
    externe += media * TAUX_REGLEMENTAIRE;
    externe += AUTRES_COUTS_MENSUELS_HT;
    externe += offre.mensuel(media);
    heures += HEURES_INTERNES_MENSUELLES;
  }

  return externe + heures * COUT_HORAIRE_INTERNE;
}

/**
 * Les quatre croisements sur la grandeur du TABLEAU du §03 — le coût connu à
 * douze mois, lancement compris — et non sur les honoraires mensuels que
 * résout le bloc de formules.
 *
 * C'est l'écart É-05 du dossier de recherche : les frais de lancement
 * diffèrent (750, 900, 800, 800 €), donc les seuils publiés en honoraires ne
 * sont pas ceux du tableau qui les précède. Le guide dit maintenant les deux.
 */
function croisementsDouzeMois() {
  const ecart = (a: Offre, b: Offre) => (media: number) =>
    connuDouzeMoisBrut(a, media) - connuDouzeMoisBrut(b, media);

  return {
    pourcentageForfait: centimes(
      racine(ecart(OFFRES.pourcentage, OFFRES.forfait), 0, 100_000),
    ),
    hybrideForfait: centimes(
      racine(ecart(OFFRES.hybride, OFFRES.forfait), 0, 100_000),
    ),
    hybridePourcentage: centimes(
      racine(ecart(OFFRES.hybride, OFFRES.pourcentage), 0, 100_000),
    ),
    tempsPasseForfait: centimes(
      racine(
        (heures) =>
          OFFRES.tempsPasse.setup +
          12 * heures * 100 -
          (OFFRES.forfait.setup + 12 * OFFRES.forfait.mensuel(0)),
        0,
        100,
      ),
    ),
  };
}

/** Écriture française d'un montant : milliers insécables, virgule décimale. */
function fr(valeur: number) {
  const decimales = Number.isInteger(valeur) ? 0 : 2;
  return new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: decimales,
    maximumFractionDigits: decimales,
  })
    .format(valeur)
    .replace(new RegExp(`[${NBSP_ETROIT}${ESPACE_FINE}]`, "g"), NBSP);
}

/** Même écriture, insécables ramenés à des espaces ordinaires (cf. `prose`). */
function frPlain(valeur: number) {
  return fr(valeur).replace(new RegExp(NBSP, "g"), ESPACE);
}

describe("qualité éditoriale du guide prix d’une gestion Google Ads", () => {
  /* ──────────────────────────────────────────────
     Identité, registre et données structurées
     ────────────────────────────────────────────── */

  it("garde le H1 visible, le registre et le titre d’article identiques", () => {
    const h1 = readerVisibleText(
      renderedPage.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "",
    );

    expect(h1).toBe(readerVisibleText(guide.heroTitle));
    expect(structuredData[0]).toMatchObject({ headline: guide.heroTitle });
    expect(pageSource).toContain('heroTitle="Combien coûte vraiment"');
    expect(pageSource).toContain(
      `heroTitleEm={"la gestion de Google Ads${ECHAPPEMENT_NBSP}?"}`,
    );
    expect(guide.title.length).toBeLessThanOrEqual(60);
    expect(guide.metaDescription.length).toBeLessThanOrEqual(155);
  });

  it("ne reprend jamais le H1 dans un H2 de l’article", () => {
    // §6.5 : le titre de couverture ne recopie aucun titre de section.
    const h2Texts = [...articleHtml().matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)]
      .map((match) => readerVisibleText(match[1]).toLowerCase())
      .filter(Boolean);

    expect(h2Texts).toHaveLength(8);
    for (const h2 of h2Texts) {
      expect(h2, h2).not.toContain("combien coûte");
    }
  });

  it("publie le guide par le registre central et garde l’aperçu privé", () => {
    expect(guide.editorialStatus).toBe("published");
    expect(PUBLISHED_GUIDES.some((item) => item.slug === guide.slug)).toBe(true);
    // Un build local ou de préproduction reste privé ; la production indexe.
    expect(metadata.robots).toMatchObject({ index: false, follow: false });
    expect(metadata.alternates?.canonical).toBe(
      "https://hagnere-code.ai/guides/prix-gestion-google-ads",
    );
    expect(metadata.openGraph).toMatchObject({
      publishedTime: "2026-07-31T00:24:23+02:00",
      modifiedTime: guide.dateModified,
    });
    expect(pageSource).toContain('getGuide("prix-gestion-google-ads")');
  });

  it("ne publie aucune date de modification postérieure à l’écriture", () => {
    // La version auditée annonçait « 2026-08-28T18:00:00+02:00 » alors que le
    // fichier avait été écrit à 17 h 17 le même jour : une heure ronde
    // inventée, reprise dans `openGraph.modifiedTime` et dans le JSON-LD.
    const modifiee = new Date(guide.dateModified).getTime();
    const publiee = new Date(guide.datePublished).getTime();

    expect(Number.isFinite(modifiee)).toBe(true);
    expect(modifiee).toBeGreaterThanOrEqual(publiee);
    expect(modifiee).toBeLessThanOrEqual(Date.now());
  });

  it("n’émet que les schémas Article et BreadcrumbList", () => {
    expect(structuredData.map((item) => item["@type"])).toEqual([
      "Article",
      "BreadcrumbList",
    ]);
    expect(JSON.stringify(structuredData)).not.toMatch(
      /\b(?:FAQPage|HowTo|Offer|Review|AggregateRating|Product|wordCount)\b/,
    );
  });

  /* ──────────────────────────────────────────────
     Calibre et temps de lecture (§5.3)
     ────────────────────────────────────────────── */

  it("tient la bande comparative du calibre", () => {
    // Bande retenue : « décisionnelle / comparative », 2 500 à 3 500 mots.
    //
    // Ce que le guide arbitre : quatre modes de rémunération, quatre points de
    // croisement, une grille de décision par tranche de budget. Le titre
    // enregistré l'annonce — « 4 modèles comparés » — et le H2 central est
    // littéralement « Forfait, pourcentage ou hybride », c'est-à-dire la forme
    // « X ou Y » de la bande comparative.
    //
    // DÉSACCORD OUVERT, à trancher par le propriétaire du site (§10.5). Le
    // contre-audit du 28/08/2026 objecte que le H1 enregistré, « Combien coûte
    // vraiment la gestion de Google Ads ? », est l'exemple littéral de la bande
    // « transactionnelle directe », dont le plafond majoré de 15 % s'arrête à
    // 2 875 mots. L'objection est recevable : sous cette lecture, le guide est
    // hors bande.
    //
    // Ce qui a été fait plutôt que de trancher seul : la réécriture du
    // 28/08/2026 a coupé partout où la coupe ne retirait pas de fait.
    //
    // Mesure du 30/08/2026, refaite après la correction des écarts É-01 à
    // É-06 : 3 358 mots par `scripts/measure-guide-readtime.mjs`, une douzaine
    // de moins par la fonction ci-dessus. L'algorithme est le même ; l'entrée
    // diffère, et c'est la seule raison de l'écart. Le script mesure la route
    // servie par le serveur, dont le comparateur client est monté ; ce fichier
    // mesure `renderToStaticMarkup(Page())`. Les deux tombent dans la bande, et
    // les deux donnent 17 min à l'arrondi — c'est le script qui fait autorité
    // pour `readTimeMin`, comme l'assertion suivante le vérifie.
    //
    // Les six corrections ont ajouté 277 mots, tous du cadrage : nommer la
    // grandeur que croisent les quatre seuils, annoncer le changement
    // d'assiette du §06, dire quelle fenêtre porte quel nombre au §05, citer
    // mot pour mot la page de taxes de l'aide Google. Aucun fait n'a été
    // retiré pour compenser. Il reste 142 mots de marge sous le plafond de la
    // bande : plus aucune section ne s'allonge sans arbitrer d'abord le
    // désaccord ci-dessus.
    // Descendre à 2 875 imposait de retirer la section 06 « ce qui rate » ou la
    // section 07 sur la propriété du compte et l'article 20 de la loi Sapin :
    // ce sont les deux sections sur lesquelles reposent les attaques A4 et A6
    // du §8.1, toutes deux tenues. Le blocage est documenté ici et remonté.
    const mots = articleWordCount();
    expect(mots).toBeGreaterThanOrEqual(2_500);
    expect(mots).toBeLessThanOrEqual(3_500);
  });

  it("déclare un temps de lecture égal à la mesure canonique du dépôt", () => {
    // Une seule méthode de comptage : celle de
    // `scripts/measure-guide-readtime.mjs`, portée à l'identique plus haut.
    // Mots visibles du corps ÷ 200, arrondi à la minute.
    const mesure = Math.max(1, Math.round(articleWordCount() / 200));
    expect(guide.readTimeMin).toBe(mesure);
    expect(pageSource).toContain("value: `${guide.readTimeMin} min`");
  });

  /* ──────────────────────────────────────────────
     Typographie française (§9.3)
     ────────────────────────────────────────────── */

  it("n’écrit aucun insécable littéral dans le code", () => {
    // Un U+00A0 tapé dans une chaîne est invisible en relecture et se perd en
    // silence au premier passage par un heredoc ou une réécriture.
    expect(new RegExp(CLASSE_INSECABLES).test(pageSource)).toBe(false);
  });

  it("pose un insécable avant chaque ponctuation double du corps", () => {
    const texte = typographicText(articleHtml());
    // Le deux-points manquait à cette classe : c'était le signe le plus
    // fréquent du guide, et le seul que le garde-fou ne couvrait pas.
    const fautes = [
      ...texte.matchAll(
        new RegExp(`.{0,40}[^\\s]${ESPACE}[?!;:»].{0,20}`, "g"),
      ),
    ].map((match) => match[0]);

    expect(fautes, fautes.join("\n")).toHaveLength(0);
    expect(
      [...texte.matchAll(new RegExp(`«[^${NBSP}]`, "g"))].map((m) => m[0]),
    ).toHaveLength(0);
    // Une espace ordinaire qui précède l'insécable rend la ponctuation double
    // typographiquement fausse tout en passant le contrôle ci-dessus.
    const doubles = [
      ...texte.matchAll(new RegExp(`.{0,30}${ESPACE}${NBSP}[?!;:»]`, "g")),
    ].map((match) => match[0]);
    expect(doubles, doubles.join("\n")).toHaveLength(0);
  });

  it("colle chaque nombre à son unité et sépare les milliers", () => {
    const texte = typographicText(articleHtml());
    // Le contrôle ne portait que sur « € » et « % ». Les en-têtes du tableau
    // des quatre offres écrivaient « À 3 mois » et les formules « = 9 heures
    // par mois » avec des espaces ordinaires, à trois lignes d'un
    // « M = 6 000 € HT par mois » qui, lui, portait ses insécables.
    const unites =
      "€|%|k€|h\\b|heures?\\b|mois\\b|jours?\\b|ans\\b|min\\b|fois\\b" +
      "|personnes?\\b|prospects?\\b|clics?\\b|clients?\\b|actions?\\b";
    const detaches = [
      ...texte.matchAll(new RegExp(`\\d${ESPACE}(?:${unites})`, "g")),
    ].map((match) => match[0]);
    expect(detaches, detaches.join(", ")).toHaveLength(0);

    // Aucun nombre de quatre chiffres collé, hors millésimes.
    const colles = [...texte.matchAll(/\b\d{4,}\b/g)]
      .map((match) => match[0])
      .filter((valeur) => !/^(?:19|20)\d\d$/.test(valeur));
    expect(colles, colles.join(", ")).toHaveLength(0);
  });

  it("n’emploie que des apostrophes courbes et des guillemets français", () => {
    const texte = typographicText(articleHtml());
    expect(texte).not.toMatch(/[a-zàâäéèêëîïôöùûüç]'[a-zàâäéèêëîïôöùûüç]/i);
    expect(texte).not.toContain('"');
  });

  /* ──────────────────────────────────────────────
     Structure (§6.5)
     ────────────────────────────────────────────── */

  it("porte une réponse directe de 120 à 180 mots, chiffrée", () => {
    // §6.5 : la bande est 120-180. La version auditée mesurait 195 mots et
    // avait ouvert le test à 200 sans justification écrite, ce que le §10.2
    // interdit : un contrôle en échec se corrige dans le texte.
    const section = articleHtml().match(
      /<section id="reponse"[\s\S]*?<\/section>/,
    )?.[0];
    expect(section).toBeDefined();
    const paragraphes = [
      ...(section ?? "").matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g),
    ].slice(0, 3);
    const mots = readerVisibleText(paragraphes.map((p) => p[1]).join(" "))
      .split(/\s+/)
      .filter(Boolean).length;

    expect(mots, `${mots} mots`).toBeGreaterThanOrEqual(120);
    expect(mots, `${mots} mots`).toBeLessThanOrEqual(180);
    const texte = prose(paragraphes.map((p) => p[1]).join(" "));
    expect(texte).toContain("90 €");
    expect(texte).toContain("1 800 € HT");
    expect(texte).toContain("78 300 €");
    expect(texte).toContain("81 200 €");
    // §10.2 « vocabulaire non stabilisé » : cette grandeur porte le même nom
    // ici et au §02. « Total payé » était faux — il exclut la TVA décaissée et
    // inclut des heures qui ne sont payées à personne.
    expect(texte).toContain("le coût connu sur douze mois");
    expect(texte).not.toContain("total payé");
  });

  it("garde 40 à 60 % de H2 en question", () => {
    const h2Texts = [...articleHtml().matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)]
      .map((match) => readerVisibleText(match[1]))
      .filter(Boolean);
    const interrogatifs = h2Texts.filter((texte) =>
      texte.endsWith("?"),
    ).length;
    const part = interrogatifs / h2Texts.length;

    expect(part, `${interrogatifs}/${h2Texts.length}`).toBeGreaterThanOrEqual(
      0.4,
    );
    expect(part).toBeLessThanOrEqual(0.6);
  });

  it("ne dépasse pas quatre tableaux éditoriaux, tous porteurs de chiffres", () => {
    const tableaux = [...articleHtml().matchAll(/<table[\s\S]*?<\/table>/g)].map(
      (match) => match[0],
    );

    expect(tableaux.length).toBeGreaterThanOrEqual(3);
    expect(tableaux.length).toBeLessThanOrEqual(4);
    for (const tableau of tableaux) {
      const chiffres = (readerVisibleText(tableau).match(/\d/g) ?? []).length;
      expect(
        chiffres,
        readerVisibleText(tableau).slice(0, 80),
      ).toBeGreaterThan(6);
    }
  });

  it("tient au moins dix valeurs chiffrées pour mille mots", () => {
    // §6.2. Ne comptent pas : les numéros de section, les millésimes et le
    // numéro d'article de loi.
    const texte = prose(articleHtml())
      .replace(/\b(?:19|20)\d\d\b/g, " ")
      .replace(/n° 93-122/g, " ")
      .replace(/§ ?\d+/g, " ");
    const valeurs = texte.match(/\d+(?:[,.]\d+)?(?: \d{3})*/g) ?? [];
    const densite = (valeurs.length / articleWordCount()) * 1000;

    expect(densite, `${valeurs.length} valeurs`).toBeGreaterThanOrEqual(10);
  });

  it("raconte trois incidents dont chaque titre porte un montant", () => {
    const section = articleHtml().match(
      /<section id="incidents"[\s\S]*?<\/section>/,
    )?.[0];
    expect(section).toBeDefined();
    const titres = [
      ...(section ?? "").matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/g),
    ].map((match) => prose(match[1]));

    expect(titres).toHaveLength(3);
    for (const titre of titres) {
      expect(titre, titre).toMatch(/\d/);
    }

    const texte = prose(section ?? "");
    for (const fait of [
      "979,20 €",
      "6 201,60 €",
      "6 120 €",
      "1 440 €",
      "9 450 €",
      "5 400 €",
      "1 950 €",
      "deux ans",
    ]) {
      expect(texte, fait).toContain(fait);
    }
    // Le titre de l'incident n° 1 imputait 2 419,20 € à la règle des 30,4
    // jours, alors que 1 440 € de ce montant sont le coût réglementaire déjà
    // annoncé au §02. Le chiffre gonflé ne doit reparaître nulle part.
    expect(texte).not.toContain("2 419");
    // Un plafond de facturation n'est pas une dépense certaine.
    expect(texte).toContain("plafond de facturation, pas une dépense certaine");
  });

  it("annonce son cas comme construit et nomme des métiers, pas des cases", () => {
    const texte = prose(articleHtml());

    // L'étiquette doit être littéralement vraie. « Exemple construit à partir
    // des fourchettes citées dans ce guide » ne l'était pas : ni les volumes,
    // ni l'effectif, ni le coût horaire, ni les quatre offres ne sortaient
    // d'une fourchette citée. Seuls les prix vendeurs et notre grille sont
    // relevés.
    expect(texte).toContain(
      "les quatre offres, les volumes, l’effectif et le coût horaire interne sont choisis pour l’exemple et ne viennent d’aucun devis reçu",
    );
    expect(texte).toContain("Ce n’est pas un dossier client");
    expect(texte).not.toContain(
      "Exemple construit à partir des fourchettes citées dans ce guide",
    );

    for (const metier of [
      "chargé d’affaires",
      "comptable",
      "expert-comptable",
      "commercial",
      "dirigeant",
    ]) {
      expect(texte, metier).toContain(metier);
    }
    // §6.4 : ces mots ne sont pas des personnes.
    expect(texte).not.toMatch(/\b(?:le|un|les|des) prestataires?\b/i);
    expect(texte).not.toMatch(/\b(?:le|un|les|des) intervenants?\b/i);
    // §9.4 : vocabulaire de cabinet remplacé par des actions.
    for (const mot of ["périmètre", "livrable", "gouvernance", "dispositif"]) {
      expect(texte.toLowerCase(), mot).not.toContain(mot);
    }
  });

  it("lève l’ambiguïté du cas construit avant d’afficher ses mesures", () => {
    // Un lecteur qui ne lit que le hero ne doit pas repartir avec des chiffres
    // qui se lisent comme un relevé fait chez un client. L'étiquette précède
    // donc les nombres, dans le bandeau comme dans la description sociale.
    const badges = pageSource.match(/badges=\{\[([\s\S]*?)\]\}/)?.[1] ?? "";
    expect(badges).toContain('label: "Exemple construit"');

    const hero = pageSource.match(/heroDescription=\{"([\s\S]*?)"\}/)?.[1] ?? "";
    expect(hero).not.toBe("");
    const heroLisible = hero.split(ECHAPPEMENT_NBSP).join(ESPACE);
    expect(heroLisible.indexOf("Exemple construit, pas un dossier client")).toBe(
      0,
    );
    expect(heroLisible).toContain(
      "les quatre offres comparées, les volumes et le coût horaire interne sont choisis pour l’exemple",
    );
    // L'étiquette arrive bien AVANT la première mesure.
    expect(heroLisible.indexOf("choisis pour l’exemple")).toBeLessThan(
      heroLisible.indexOf("78 300"),
    );
  });

  it("ne porte qu’un bloc de transparence et qu’un encart final", () => {
    const texte = prose(articleHtml());

    expect((texte.match(/Transparence\./g) ?? []).length).toBe(1);
    expect(texte).toContain(
      "Hagnéré Code vend une gestion publicitaire et perçoit des honoraires",
    );
    expect(texte).toContain("à revérifier tous les douze mois");
    expect(texte).toContain("seul un devis signé engage");
    // Le décompte annoncé ici doit être celui du bloc de formules : quatre
    // équations, pas trois.
    expect(texte).toContain("les quatre seuils de bascule");

    const ctas = [...pageSource.matchAll(/placement="([a-z_]+)"/g)].map(
      (match) => match[1],
    );
    expect(ctas).toEqual(["article_end_inline", "article_end_inline"]);
  });

  it("garde intact le passage qui ne sert pas le commerce", () => {
    const texte = prose(articleHtml());
    // 15 % de 60 000 € : 60 000 × 0,15, empilé par tranches de 10 000 €.
    let quinzePourCent = 0;
    for (let tranche = 0; tranche < 6; tranche += 1) {
      quinzePourCent += 0.15 * 10_000;
    }

    expect(texte).toContain("Quand Hagnéré Code n’est pas le bon choix");
    expect(texte).toContain("il pèserait 36 % de la dépense");
    expect(quinzePourCent).toBe(9_000);
    expect(texte).toContain(
      `un taux de 15 % vaudrait ${frPlain(quinzePourCent)} € par mois`,
    );
    // L'aveu est contrefactuel : Hagnéré Code ne gère aujourd'hui aucun compte
    // à 60 000 € de média mensuel, et le présent de l'indicatif le laissait
    // entendre. Le conditionnel dit la même chose sans rien inventer.
    expect(texte).toContain("Le fixe nous coûterait donc de l’argent");
    expect(texte).not.toContain("Le fixe nous coûte donc");
    // Un aveu qui se commente lui-même cesse d'en être un (§9.2, tic n° 1).
    expect(texte).not.toContain("c’est pour cela qu’il est écrit ici");
    // Aucun score opaque qui conclurait toujours en faveur de l'agence.
    expect(pageSource).not.toMatch(/score sur 100|algorithme propriétaire/i);
  });

  /* ──────────────────────────────────────────────
     Arithmétique : le guide contre le vérificateur
     ────────────────────────────────────────────── */

  it("affiche exactement les totaux que l’empilement mois par mois recalcule", () => {
    // Constantes calculées à la main. Base commune, par mois :
    //   5 000 média + 100 coût réglementaire (2 %) + 250 mesure = 5 350
    // Lancement commun : 2 000. Heures internes : 8 puis 3 par mois, à 50 €.
    //
    // Forfait — setup 750, mensuel 900 → bundle 6 250
    //   3 mois : 2 750 + 18 750 = 21 500 ; heures 17 → 850 ; connu 22 350
    //   6 mois : 2 750 + 37 500 = 40 250 ; heures 26 → 1 300 ; connu 41 550
    //  12 mois : 2 750 + 75 000 = 77 750 ; heures 44 → 2 200 ; connu 79 950
    // Pourcentage — setup 900, mensuel 0,15 × 5 000 = 750 → bundle 6 100
    //   3 mois : 2 900 + 18 300 = 21 200 ; + 850 = 22 050
    //   6 mois : 2 900 + 36 600 = 39 500 ; + 1 300 = 40 800
    //  12 mois : 2 900 + 73 200 = 76 100 ; + 2 200 = 78 300
    // Hybride — setup 800, mensuel 500 + 400 = 900 → bundle 6 250
    //   3 mois : 2 800 + 18 750 = 21 550 ; + 850 = 22 400
    //   6 mois : 2 800 + 37 500 = 40 300 ; + 1 300 = 41 600
    //  12 mois : 2 800 + 75 000 = 77 800 ; + 2 200 = 80 000
    // Temps passé — setup 800, mensuel 1 000 → bundle 6 350
    //   3 mois : 2 800 + 19 050 = 21 850 ; + 850 = 22 700
    //   6 mois : 2 800 + 38 100 = 40 900 ; + 1 300 = 42 200
    //  12 mois : 2 800 + 76 200 = 79 000 ; + 2 200 = 81 200
    const texte = prose(articleHtml());
    const attendus: Record<string, [number, number, number]> = {
      forfait: [22_350, 41_550, 79_950],
      pourcentage: [22_050, 40_800, 78_300],
      hybride: [22_400, 41_600, 80_000],
      tempsPasse: [22_700, 42_200, 81_200],
    };

    for (const [nom, valeurs] of Object.entries(attendus)) {
      const offre = OFFRES[nom];
      [3, 6, 12].forEach((mois, index) => {
        const calcule = empiler(offre, mois).connu;
        expect(calcule, `${nom} à ${mois} mois`).toBeCloseTo(valeurs[index], 2);
        expect(texte, `${nom} à ${mois} mois`).toContain(
          `${frPlain(valeurs[index])} €`,
        );
      });
    }
  });

  it("montre le décompte du forfait à trois mois, poste par poste", () => {
    const forfait = empiler(OFFRES.forfait, 3);
    const texte = prose(articleHtml());

    // 2 000 + 750 + 3 × 6 250 = 21 500 ; TVA 20 % → 25 800 ; 17 h × 50 = 850.
    expect(forfait.externe).toBeCloseTo(21_500, 2);
    expect(forfait.ttc).toBeCloseTo(25_800, 2);
    expect(forfait.heures).toBe(17);
    expect(forfait.heures * COUT_HORAIRE_INTERNE).toBe(850);

    for (const fait of [
      "21 500 € HT",
      "25 800 €",
      "18 750 €",
      "17 heures internes à 50 €",
      "850 €",
      "22 350 € de coût connu",
    ]) {
      expect(texte, fait).toContain(fait);
    }
  });

  it("retrouve les quatre points de bascule par dichotomie, pas par l’équation", () => {
    const forfaitMensuel = OFFRES.forfait.mensuel(0);
    const pourcentage = (media: number) => OFFRES.pourcentage.mensuel(media);
    const hybride = (media: number) => OFFRES.hybride.mensuel(media);

    // Constantes à la main :
    //   0,15 M = 900            → M = 900 / 0,15 = 6 000
    //   500 + 0,08 M = 900      → 0,08 M = 400 → M = 5 000
    //   500 + 0,08 M = 0,15 M   → 500 = 0,07 M → M = 7 142,857… ≈ 7 143
    //   100 h = 900             → h = 9
    //   0,10 M = 900            → M = 9 000
    const basculePourcentage = racine(
      (media) => pourcentage(media) - forfaitMensuel,
      0,
      100_000,
    );
    const basculeHybride = racine(
      (media) => hybride(media) - forfaitMensuel,
      0,
      100_000,
    );
    const basculeCroisee = racine(
      (media) => hybride(media) - pourcentage(media),
      0,
      100_000,
    );
    const basculeHeures = racine((heures) => heures * 100 - forfaitMensuel, 0, 100);

    expect(Math.round(basculePourcentage)).toBe(6_000);
    expect(Math.round(basculeHybride)).toBe(5_000);
    expect(Math.round(basculeCroisee)).toBe(7_143);
    expect(Math.round(basculeHeures)).toBe(9);

    const texte = prose(articleHtml());
    expect(texte).toContain("M = 6 000 € HT par mois");
    expect(texte).toContain("M = 5 000 € HT par mois");
    // É-04 : 500 / 0,07 = 7 142,857142… ; 7 143 est un arrondi, et c'est le
    // seul des quatre seuils qui en soit un. Il était publié derrière un signe
    // d'égalité, comme les trois autres qui tombent juste au centime. Le guide
    // écrit maintenant la racine exacte puis « ≈ ».
    expect(basculeCroisee).not.toBe(Math.round(basculeCroisee));
    expect(texte).toContain("M = 500 ÷ 0,07 ≈ 7 143 € HT par mois");
    expect(texte).not.toContain("M = 7 143 € HT");
    expect(texte).toContain("h = 9 heures par mois");

    // É-05 : les quatre équations croisent les HONORAIRES MENSUELS, pas le
    // coût connu du tableau qui les précède. Le guide le dit, puis publie les
    // croisements réels à douze mois, lancement compris.
    expect(texte).toContain(
      "Ces quatre seuils comparent les honoraires mensuels, et non le coût connu du tableau ci-dessus",
    );
    const croisements = croisementsDouzeMois();
    // À la main, en annulant les termes communs aux deux offres comparées :
    //   pourcentage/forfait : (900 − 750) + 12 × (0,15 M − 900) = 0
    //                         → 1,8 M = 10 650 → M = 5 916,666…
    //   hybride/forfait     : (800 − 750) + 12 × (500 + 0,08 M − 900) = 0
    //                         → 0,96 M = 4 750 → M = 4 947,916…
    //   hybride/pourcentage : (800 − 900) + 12 × (500 − 0,07 M) = 0
    //                         → 0,84 M = 5 900 → M = 7 023,809…
    //   temps passé/forfait : (800 − 750) + 12 × (100 h − 900) = 0
    //                         → 1 200 h = 10 750 → h = 8,958…
    expect(croisements.pourcentageForfait).toBeCloseTo(5_916.67, 2);
    expect(croisements.hybrideForfait).toBeCloseTo(4_947.92, 2);
    expect(croisements.hybridePourcentage).toBeCloseTo(7_023.81, 2);
    expect(croisements.tempsPasseForfait).toBeCloseTo(8.96, 2);
    for (const croisement of [
      `${frPlain(croisements.pourcentageForfait)} €`,
      `${frPlain(croisements.hybrideForfait)} €`,
      `${frPlain(croisements.hybridePourcentage)} €`,
      `${frPlain(croisements.tempsPasseForfait)} heures`,
    ]) {
      expect(texte, croisement).toContain(croisement);
    }
    // Chaque croisement réel s'écarte de moins de 2 % du seuil en honoraires,
    // comme le guide l'annonce : le lecteur doit pouvoir vérifier la borne.
    const ecarts = [
      Math.abs(croisements.pourcentageForfait - basculePourcentage) /
        basculePourcentage,
      Math.abs(croisements.hybrideForfait - basculeHybride) / basculeHybride,
      Math.abs(croisements.hybridePourcentage - basculeCroisee) / basculeCroisee,
      Math.abs(croisements.tempsPasseForfait - basculeHeures) / basculeHeures,
    ];
    for (const ecart of ecarts) expect(ecart).toBeLessThan(0.02);
    expect(texte).toContain("ces croisements se déplacent de moins de 2 %");

    // Le bloc publie quatre équations : le guide doit les annoncer comme
    // quatre. La version auditée écrivait « trois » à trois endroits.
    expect(texte).toContain("Les quatre points où le classement s’inverse");
    expect(texte).toContain("chacun de ces quatre seuils");
    expect(texte).not.toMatch(/trois (?:points|seuils)/);

    // Sensibilité au taux : à 10 %, la bascule se déplace à 9 000 €.
    const basculeDix = racine((media) => 0.1 * media - forfaitMensuel, 0, 100_000);
    expect(Math.round(basculeDix)).toBe(9_000);
    expect(texte).toContain("9 000 € de média mensuel");
  });

  it("chiffre la saison à 12 000 € avec les honoraires de chaque modèle", () => {
    const media = 12_000;
    const forfait = OFFRES.forfait.mensuel(media);
    const pourcentage = OFFRES.pourcentage.mensuel(media);
    const hybride = OFFRES.hybride.mensuel(media);
    const tempsPasse = OFFRES.tempsPasse.mensuel(media);

    // À la main : 0,15 × 12 000 = 1 800 ; 500 + 0,08 × 12 000 = 1 460 ;
    // (1 800 − 900) × 12 = 10 800.
    expect(forfait).toBe(900);
    expect(pourcentage).toBe(1_800);
    expect(hybride).toBe(1_460);
    expect(tempsPasse).toBe(1_000);

    let ecartAnnuel = 0;
    for (let mois = 0; mois < 12; mois += 1) ecartAnnuel += pourcentage - forfait;
    expect(ecartAnnuel).toBe(10_800);

    const texte = prose(articleHtml());
    expect(texte).toContain("1 460 €");
    expect(texte).toContain("10 800 € d’écart");
  });

  it("dérive le seuil de charge interne des quatre offres publiées", () => {
    // C'est le calcul que la version auditée avait inventé. Elle posait un
    // écart d'honoraires de 300 € — hérité d'une version antérieure du guide
    // où les deux devis étaient génériques — et en tirait 6 h/mois, puis
    // 600 €/mois et 7 200 €/an. Aucune lecture des quatre offres ne donne ces
    // nombres. L'écart se dérive donc de `OFFRES`, jamais d'une constante.
    //
    // À la main, à 5 000 € de média :
    //   forfait 900 ; pourcentage 0,15 × 5 000 = 750 ;
    //   hybride 500 + 0,08 × 5 000 = 900 ; temps passé 10 × 100 = 1 000.
    //   La moins chère est le pourcentage, 750 €.
    //   Écart au voisin immédiat : 900 − 750 = 150 € → 150 / 50 = 3 h.
    //   Écart au plus cher :      1 000 − 750 = 250 € → 250 / 50 = 5 h.
    //   Sur douze mois : 3 × 12 = 36 h ; 36 × 50 = 1 800 € = 150 × 12.
    const mensuels = honorairesMensuels();
    const moinsCher = Math.min(...mensuels);
    const voisin = Math.min(...mensuels.filter((v) => v > moinsCher));
    const plusCher = Math.max(...mensuels);

    expect(moinsCher).toBe(750);
    expect(voisin - moinsCher).toBe(150);
    expect(plusCher - moinsCher).toBe(250);

    // Seuils cherchés par dichotomie, pas par la division du guide.
    const seuilVoisin = racine(
      (heures) => heures * COUT_HORAIRE_INTERNE - (voisin - moinsCher),
      0,
      100,
    );
    const seuilPlusCher = racine(
      (heures) => heures * COUT_HORAIRE_INTERNE - (plusCher - moinsCher),
      0,
      100,
    );
    expect(Math.round(seuilVoisin)).toBe(3);
    expect(Math.round(seuilPlusCher)).toBe(5);

    let heuresAnnuelles = 0;
    let ecartAnnuel = 0;
    for (let mois = 0; mois < 12; mois += 1) {
      heuresAnnuelles += Math.round(seuilVoisin);
      ecartAnnuel += voisin - moinsCher;
    }
    expect(heuresAnnuelles).toBe(36);
    expect(heuresAnnuelles * COUT_HORAIRE_INTERNE).toBe(1_800);
    expect(ecartAnnuel).toBe(1_800);

    const texte = prose(articleHtml());
    expect(texte).toContain("(900 − 750) ÷ 50 €/h = 3 heures par mois");
    expect(texte).toContain("(1 000 − 750) ÷ 50 €/h = 5 heures par mois");
    expect(texte).toContain("36 heures par an");
    // Les nombres inventés ne reparaissent nulle part.
    expect(texte).not.toContain("300 € ÷ 50 €/h");
    expect(texte).not.toContain("600 € par mois");
    expect(texte).not.toContain("7 200 €");
    expect(texte).not.toContain("18 heures par mois");
    // Les deux hypothèses sont annoncées comme telles, dans la même phrase.
    expect(texte).toContain(
      "Ces 50 € de l’heure sont une hypothèse, pas une source, et les heures de charge en sont une autre",
    );
    // Le calculateur ouvre sur les mêmes hypothèses que le tableau du §03 :
    // il ne peut donc plus afficher le classement inverse de la section.
    expect(texte).toContain(
      "Le calculateur ci-dessous ouvre sur ces quatre offres, à contenu supposé identique",
    );
  });

  it("sépare le CPA du coût réel d’un client, assiette comprise", () => {
    let mediaCharge = 0;
    for (let mois = 0; mois < 3; mois += 1) {
      mediaCharge += MEDIA_MENSUEL_HT * (1 + TAUX_REGLEMENTAIRE);
    }
    // À la main : 3 × 5 100 = 15 300.
    expect(Math.round(mediaCharge)).toBe(15_300);

    const cpc = mediaCharge / (3 * 1_000);
    const cpa = mediaCharge / (3 * 50);
    const cpl = mediaCharge / (3 * 20);
    const connuParClient = empiler(OFFRES.forfait, 3).connu / (3 * 4);
    const mediaParClient = mediaCharge / (3 * 4);

    // 15 300 / 3 000 = 5,10 ; / 150 = 102 ; / 60 = 255 ;
    // 22 350 / 12 = 1 862,50 ; 15 300 / 12 = 1 275.
    expect(cpc).toBeCloseTo(5.1, 4);
    expect(cpa).toBeCloseTo(102, 4);
    expect(cpl).toBeCloseTo(255, 4);
    expect(connuParClient).toBeCloseTo(1_862.5, 4);
    expect(mediaParClient).toBeCloseTo(1_275, 4);

    // Le rapport « dix-huit fois » comparait deux assiettes différentes :
    // 22 350 € au numérateur du coût par client, 15 300 € à celui du CPA.
    // À dénominateur seul, un client vaut 1 275 €, soit 12,5 fois le CPA ;
    // le reste, 1 862,50 − 1 275 = 587,50 €, est ce que le CPA ne compte pas.
    expect(mediaParClient / cpa).toBeCloseTo(12.5, 6);
    expect(connuParClient - mediaParClient).toBeCloseTo(587.5, 4);
    expect(connuParClient - cpa).toBeCloseTo(1_760.5, 4);

    const texte = prose(articleHtml());
    for (const fait of [
      "5,10 €",
      "102 €",
      "255 €",
      "1 862,50 €",
      "1 275 € par client, douze fois et demie le CPA",
      "587,50 €",
      "1 760,50 € par client",
    ]) {
      expect(texte, fait).toContain(fait);
    }
    expect(texte).not.toContain("dix-huit fois");
  });

  it("fait fixer le seuil par la marge du lecteur, et rejoue l’hypothèse basse", () => {
    const connu = empiler(OFFRES.forfait, 3).connu;
    let margeHaute = 0;
    for (let client = 0; client < 12; client += 1) margeHaute += 2_500;
    // 12 × 2 500 = 30 000 ; 30 000 / 60 = 500 ; 22 350 / 60 = 372,50 ;
    // 500 − 372,50 = 127,50 ; 22 350 − 3 000 = 19 350 ; 22 350 / 3 = 7 450.
    expect(margeHaute).toBe(30_000);

    const plafondParProspect = margeHaute / 60;
    const coutParProspect = connu / 60;
    expect(plafondParProspect).toBeCloseTo(500, 4);
    expect(coutParProspect).toBeCloseTo(372.5, 4);
    expect(plafondParProspect - coutParProspect).toBeCloseTo(127.5, 4);

    let margeBasse = 0;
    for (let client = 0; client < 3; client += 1) margeBasse += 1_000;
    expect(margeBasse).toBe(3_000);
    expect(connu - margeBasse).toBeCloseTo(19_350, 2);
    expect(connu / 3).toBeCloseTo(7_450, 2);

    const texte = prose(articleHtml());
    for (const fait of [
      "30 000 €",
      "500 € de coût connu par prospect",
      "372,50 €",
      "127,50 €",
      "19 350 €",
      "7 450 €",
    ]) {
      expect(texte, fait).toContain(fait);
    }

    // É-06 : le numérateur (30 000 € de marge) court sur douze mois par
    // client, le dénominateur (22 350 €, 60 prospects) sur trois. Les
    // 127,50 € ne sont donc pas un solde de trésorerie de fin de trimestre,
    // et la section doit le dire — le texte d'aide du calculateur le disait
    // déjà, la prose non.
    expect(texte).toContain("Les deux nombres ne portent pas sur la même durée");
    expect(texte).toContain(
      "la marge court sur douze mois par client, quand les coûts comparés en couvrent trois",
    );
    expect(texte).toContain(
      `Ces ${frPlain(plafondParProspect - coutParProspect)} € ne sont donc pas un solde de trésorerie`,
    );
  });

  it("impute à la règle des 30,4 jours ce qu’elle coûte, et rien de plus", () => {
    // Le mois que le lecteur attend : 30 jours × 200 € = 6 000 € de média.
    let moisAttendu = 0;
    for (let jour = 0; jour < 30; jour += 1) moisAttendu += 200;
    const budgetQuotidien = moisAttendu / 30;
    expect(budgetQuotidien).toBe(200);

    // Le plafond publié par Google : 30,4 fois ce budget, empilé jour par
    // jour puis fraction du dernier jour — 6 000 + 0,4 × 200 = 6 080.
    const plafondMedia = centimes(moisAttendu + 0.4 * budgetQuotidien);
    expect(plafondMedia).toBe(6_080);

    // Coût réglementaire, sur chacune des deux assiettes :
    //   2 % × 6 000 = 120   → facture attendue 6 120, soit 1 440 sur douze mois
    //   2 % × 6 080 = 121,60 → facture plafond 6 201,60
    const reglementaireAttendu = centimes(moisAttendu * TAUX_REGLEMENTAIRE);
    const reglementairePlafond = centimes(plafondMedia * TAUX_REGLEMENTAIRE);
    const factureAttendue = centimes(moisAttendu + reglementaireAttendu);
    const facturePlafond = centimes(plafondMedia + reglementairePlafond);

    expect(reglementaireAttendu).toBe(120);
    expect(reglementairePlafond).toBe(121.6);
    expect(factureAttendue).toBe(6_120);
    expect(facturePlafond).toBe(6_201.6);

    // Ce que la règle des 30,4 jours ajoute VRAIMENT :
    //   6 201,60 − 6 120 = 81,60 par mois, soit 979,20 sur douze.
    // La version auditée imputait 2 419,20 €, dont 1 440 € étaient le coût
    // réglementaire déjà annoncé au §02 : un facteur 2,5.
    const ecartMensuel = centimes(facturePlafond - factureAttendue);
    let ecartAnnuel = 0;
    let reglementaireAnnuel = 0;
    for (let mois = 0; mois < 12; mois += 1) {
      ecartAnnuel += ecartMensuel;
      reglementaireAnnuel += reglementaireAttendu;
    }
    expect(ecartMensuel).toBe(81.6);
    expect(centimes(ecartAnnuel)).toBe(979.2);
    expect(reglementaireAnnuel).toBe(1_440);
    expect(centimes(reglementaireAnnuel + ecartAnnuel)).toBe(2_419.2);

    // Le pic quotidien est cité comme règle de plateforme, pas comme terme du
    // total : deux fois le budget quotidien moyen.
    expect(budgetQuotidien * 2).toBe(400);

    const texte = prose(articleHtml());
    for (const fait of [
      "30,4 fois le budget quotidien moyen",
      "400 €",
      "6 080 €",
      "120 €",
      "1 440 €",
      "1,60 €",
      "81,60 €",
      "979,20 €",
      "6 201,60 €",
      "6 120 €",
    ]) {
      expect(texte, fait).toContain(fait);
    }
    expect(texte).toContain("un pic à 400 € un mardi ne dit rien du mois");

    // É-02 : cet incident quitte les 5 000 € du fil rouge pour 6 000 €, soit
    // +20 %. Le changement d'assiette doit être annoncé AVANT le premier
    // nombre de l'incident, faute de quoi le lecteur croit lire la suite du
    // même cas. 6 000 / 5 000 = 1,2.
    expect(moisAttendu / MEDIA_MENSUEL_HT).toBeCloseTo(1.2, 6);
    const annonce = "Cet incident quitte la base du fil rouge";
    expect(texte).toContain(annonce);
    expect(texte).toContain(
      `un cinquième au-dessus des ${frPlain(MEDIA_MENSUEL_HT)} € des sections précédentes`,
    );
    expect(texte.indexOf(annonce)).toBeGreaterThanOrEqual(0);
    expect(texte.indexOf(annonce)).toBeLessThan(
      texte.indexOf(`${frPlain(plafondMedia)} €`),
    );

    // É-03 : « le §02 l'annonçait déjà » était vrai de la règle et faux des
    // montants. Le §02 chiffre le coût réglementaire sur 5 000 € — 100 € par
    // mois, 1 200 € sur douze — jamais sur 6 000 €.
    let reglementaireFilRouge = 0;
    for (let mois = 0; mois < 12; mois += 1) {
      reglementaireFilRouge += MEDIA_MENSUEL_HT * TAUX_REGLEMENTAIRE;
    }
    expect(MEDIA_MENSUEL_HT * TAUX_REGLEMENTAIRE).toBe(100);
    expect(reglementaireFilRouge).toBe(1_200);
    expect(texte).toContain(
      `le §02 en pose le taux de 2 % et le chiffre à ${
        MEDIA_MENSUEL_HT * TAUX_REGLEMENTAIRE
      } € par mois sur les ${frPlain(MEDIA_MENSUEL_HT)} € du fil rouge`,
    );
    expect(texte).toContain(`${frPlain(reglementaireFilRouge)} € sur douze mois`);
    expect(texte).not.toContain("et le §02 l’annonçait déjà");
  });

  it("chiffre l’assiette sans plafond et la clause qui l’aurait bornée", () => {
    const bas = OFFRES.pourcentage.mensuel(5_000);
    const haut = OFFRES.pourcentage.mensuel(12_000);
    // 1 800 − 750 = 1 050 ; × 9 = 9 450 ; (1 200 − 750) × 9 = 4 050 ;
    // 9 450 − 4 050 = 5 400.
    let sansPlafond = 0;
    let avecPlafond = 0;
    for (let mois = 0; mois < 9; mois += 1) {
      sansPlafond += haut - bas;
      avecPlafond += 1_200 - bas;
    }

    expect(haut - bas).toBeCloseTo(1_050, 4);
    expect(sansPlafond).toBeCloseTo(9_450, 2);
    expect(avecPlafond).toBeCloseTo(4_050, 2);
    expect(sansPlafond - avecPlafond).toBeCloseTo(5_400, 2);

    const texte = prose(articleHtml());
    for (const fait of ["1 050 €", "9 450 €", "1 200 €", "4 050 €", "5 400 €"]) {
      expect(texte, fait).toContain(fait);
    }
  });

  it("chiffre la reprise d’un compte perdu poste par poste", () => {
    // 750 de lancement + 6 h × 50 = 300 + 900 de préavis = 1 950.
    const postes = [750, 6 * COUT_HORAIRE_INTERNE, 900];
    let total = 0;
    for (const poste of postes) total += poste;

    expect(postes[1]).toBe(300);
    expect(total).toBe(1_950);

    const texte = prose(articleHtml());
    expect(texte).toContain("1 950 €");
    expect(texte).toContain("historique des modifications, conservé deux ans");
  });

  it("tient la part du média dans le total du forfait à douze mois", () => {
    let mediaCharge = 0;
    let honoraires = OFFRES.forfait.setup;
    for (let mois = 0; mois < 12; mois += 1) {
      mediaCharge += MEDIA_MENSUEL_HT * (1 + TAUX_REGLEMENTAIRE);
      honoraires += OFFRES.forfait.mensuel(MEDIA_MENSUEL_HT);
    }
    const total = empiler(OFFRES.forfait, 12).connu;
    const ecartModeles =
      empiler(OFFRES.tempsPasse, 12).connu - empiler(OFFRES.pourcentage, 12).connu;

    // 12 × 5 100 = 61 200 ; 750 + 12 × 900 = 11 550 ;
    // 61 200 / 79 950 = 76,5 % ; 81 200 − 78 300 = 2 900 ; / 79 950 = 3,6 %.
    expect(Math.round(mediaCharge)).toBe(61_200);
    expect(honoraires).toBe(11_550);
    expect(Math.round((mediaCharge / total) * 1_000) / 10).toBeCloseTo(76.5, 1);
    expect(ecartModeles).toBeCloseTo(2_900, 2);
    expect(Math.round((ecartModeles / total) * 1_000) / 10).toBeCloseTo(3.6, 1);

    const texte = prose(articleHtml());
    expect(texte).toContain("2 900 € d’écart, soit 3,6 % des 79 950 €");
    expect(texte).toContain("61 200 € — 76,5 %");
    // Les 11 550 € additionnent le lancement et les honoraires de gestion :
    // deux lignes que le tableau du §02 sépare. Le texte doit le dire.
    expect(texte).toContain("le lancement et les honoraires de gestion, 11 550 €");
  });

  /* ──────────────────────────────────────────────
     Balayage inverse (§7.1.7)
     ────────────────────────────────────────────── */

  it("ne laisse aucun montant en euros hors de l’ensemble attendu", () => {
    const mensuels = honorairesMensuels();
    const moinsCher = Math.min(...mensuels);
    const voisin = Math.min(...mensuels.filter((v) => v > moinsCher));
    const plusCher = Math.max(...mensuels);
    const moisAttendu = 6_000;
    // 30 jours à 200 € = 6 000 ; le plafond publié ajoute 0,4 jour, soit 80 €.
    const plafondMedia = centimes(moisAttendu + 0.4 * (moisAttendu / 30));

    /** Montants issus du modèle recalculé ci-dessus. */
    const calcules = [
      empiler(OFFRES.forfait, 3).connu,
      empiler(OFFRES.forfait, 6).connu,
      empiler(OFFRES.forfait, 12).connu,
      empiler(OFFRES.pourcentage, 3).connu,
      empiler(OFFRES.pourcentage, 6).connu,
      empiler(OFFRES.pourcentage, 12).connu,
      empiler(OFFRES.hybride, 3).connu,
      empiler(OFFRES.hybride, 6).connu,
      empiler(OFFRES.hybride, 12).connu,
      empiler(OFFRES.tempsPasse, 3).connu,
      empiler(OFFRES.tempsPasse, 6).connu,
      empiler(OFFRES.tempsPasse, 12).connu,
      empiler(OFFRES.forfait, 3).externe,
      empiler(OFFRES.forfait, 3).ttc,
      18_750,
      850,
      61_200,
      11_550,
      2_900,
      60_000,
      1_200,
      100,
      15_300,
      5.1,
      102,
      255,
      1_862.5,
      1_275,
      587.5,
      1_760.5,
      30_000,
      372.5,
      127.5,
      19_350,
      7_450,
      3_000,
      // Incident n° 1, refait au §06.
      moisAttendu,
      plafondMedia,
      // Les deux termes du dépassement mensuel, imprimés séparément dans le
      // corps pour que le lecteur retrouve 81,60 € en les additionnant :
      // 6 080 − 6 000 = 80 € de média, et 121,60 − 120 = 1,60 € de coût
      // réglementaire. Le second figurait déjà quatre lignes plus bas, le
      // premier manquait — d'où l'orphelin « 80 ». Il est dérivé du modèle,
      // jamais posé en dur : si le plafond publié cessait d'être 30,4 jours,
      // cette valeur bougerait et le texte redeviendrait orphelin.
      centimes(plafondMedia - moisAttendu),
      moisAttendu * TAUX_REGLEMENTAIRE,
      centimes(plafondMedia * TAUX_REGLEMENTAIRE),
      centimes(moisAttendu * (1 + TAUX_REGLEMENTAIRE)),
      centimes(plafondMedia * (1 + TAUX_REGLEMENTAIRE)),
      centimes(plafondMedia * TAUX_REGLEMENTAIRE - moisAttendu * TAUX_REGLEMENTAIRE),
      81.6,
      979.2,
      1_440,
      2 * 200,
      // Incidents n° 2 et 3, et seuils.
      9_450,
      1_050,
      4_050,
      5_400,
      1_950,
      6 * COUT_HORAIRE_INTERNE,
      10_800,
      9_000,
      7_143,
      1_460,
      12_000,
      // Croisements réels sur le coût connu à douze mois (É-05), dérivés du
      // modèle et jamais posés en dur : si un lancement changeait, ces trois
      // montants bougeraient et le texte redeviendrait orphelin.
      croisementsDouzeMois().pourcentageForfait,
      croisementsDouzeMois().hybrideForfait,
      croisementsDouzeMois().hybridePourcentage,
      // Écart de lancement entre le forfait et l'hybride, cité au §03.
      OFFRES.hybride.setup - OFFRES.forfait.setup,
      // Charge interne : écarts d'honoraires dérivés des offres.
      voisin - moinsCher,
      plusCher - moinsCher,
      (voisin - moinsCher) * 12,
    ];

    /**
     * Montants qui ne se calculent pas : prix relevés sur des pages publiques
     * et hypothèses annoncées comme telles.
     *
     * 300 a été retiré de cette liste. Il y figurait sous l'étiquette
     * « hypothèses du cas construit » alors qu'il venait d'une version
     * antérieure du guide : l'orphelin avait été blanchi, pas compris. Il ne
     * revient ici que comme résultat de 6 h × 50 €/h, dans `calcules`.
     */
    const releves = [
      // Échantillon de pages vendeurs, 30 juillet 2026.
      90, 149, 250, 450, 500, 750,
      // Grille Hagnéré Code, 28 août 2026.
      1_500, 1_800, 3_500, 4_500, 8_000,
      // Hypothèses du cas construit et clauses de devis citées.
      50, 200, 800, 900, 1_000, 2_000, 2_500, 5_000,
    ];

    const attendus = new Set(
      [...calcules, ...releves].map((valeur) => fr(valeur)),
    );
    const texte = typographicText(articleHtml());
    const trouves = [
      ...texte.matchAll(
        new RegExp(`(\\d{1,3}(?:${NBSP}\\d{3})*(?:,\\d+)?)${NBSP}€`, "g"),
      ),
    ].map((match) => match[1]);

    expect(trouves.length).toBeGreaterThan(80);
    const orphelins = [...new Set(trouves)].filter(
      (montant) => !attendus.has(montant),
    );
    expect(orphelins, orphelins.join(", ")).toHaveLength(0);
  });

  /* ──────────────────────────────────────────────
     Prix maison : concordance avec la page de service
     ────────────────────────────────────────────── */

  it("cite les prix Hagnéré Code réellement publiés sur la page de service", () => {
    const grille = pricingSource.replace(
      new RegExp(`(?:&nbsp;|[\\s${NBSP}${NBSP_ETROIT}])+`, "g"),
      ESPACE,
    );
    const montants = [
      ...grille.matchAll(/<span class="amount">([^<]+)<\/span>/g),
    ].map((match) => match[1].trim());

    expect(montants).toEqual(["1 500 €", "1 800 €", "3 500 €", "4 500 €"]);
    expect(grille).toContain("budget media 8 à 20 k€/mois");

    // La prose visible porte les mêmes montants, avec leur typographie.
    const texte = prose(articleHtml());
    for (const montant of [
      "1 500 € HT",
      "1 800 €",
      "3 500 €",
      "4 500 € HT par mois",
      "8 000 € de budget média mensuel",
    ]) {
      expect(texte, montant).toContain(montant);
    }
    expect(pageSource).toContain('href="/services/publicite-en-ligne"');
  });

  it("fait lire au contrôle croisé la prose, et non un commentaire", () => {
    // `guides-price-consistency.test.ts` lit le SOURCE de page.tsx et y cherche
    // trois phrases écrites avec des espaces ordinaires. La version auditée les
    // avait recopiées dans un commentaire JSDoc d'en-tête : le contrôle partagé
    // vérifiait donc un commentaire, et le prochain rédacteur qui aurait changé
    // le prix visible serait passé au vert.
    //
    // Les trois phrases vivent maintenant dans `PRIX_MAISON_PUBLIES`, et c'est
    // ce même objet que le rendu affiche, insécables posés par
    // `typographieFrancaise`. Ce test verrouille les deux bouts du fil.
    const bloc =
      pageSource.match(/const PRIX_MAISON_PUBLIES = \{([\s\S]*?)\n\} as const;/)
        ?.[1] ?? "";
    expect(bloc).not.toBe("");

    const phrases = [
      "un audit à 1 500 € HT",
      "des forfaits fixes à 1 800 €, 3 500 € et 4 500 € HT par mois",
      "situe le forfait Starter à partir de 8 000 € de budget média mensuel",
    ];
    const texte = prose(articleHtml());
    for (const phrase of phrases) {
      // Écrite en espaces ordinaires dans la constante…
      expect(bloc, phrase).toContain(`"${phrase}"`);
      // …et rendue au lecteur avec ses insécables.
      expect(texte, phrase).toContain(phrase);
    }

    // Aucune de ces phrases ne subsiste dans un commentaire.
    const commentaires = [...pageSource.matchAll(/\/\*[\s\S]*?\*\//g)]
      .map((match) => match[0])
      .join("\n");
    for (const phrase of phrases) {
      expect(commentaires, phrase).not.toContain(phrase);
    }

    // Chaque phrase est effectivement passée par la fonction de typographie.
    for (const cle of ["audit", "forfaits", "starter"]) {
      expect(normalizedPageSource).toContain(
        `{typographieFrancaise(PRIX_MAISON_PUBLIES.${cle})}`,
      );
    }
  });

  /* ──────────────────────────────────────────────
     Sources, maillage et style
     ────────────────────────────────────────────── */

  it("ancre dans le corps chacune des sources listées", () => {
    // §10.2 contrôle 15 : zéro source orpheline. La FAQ cookies de la CNIL et
    // l'aide Google sur la TVA étaient listées sans qu'aucun passage ne les
    // cite : une apparence d'assise juridique que la prose ne fournissait pas.
    const listees = [
      ...pageSource.matchAll(/href:\s*"(https?:\/\/[^"]+)"/g),
    ].map((match) => match[1]);
    const listeesHorsSite = listees.filter(
      (href) => !href.startsWith("https://hagnere-code.ai"),
    );
    expect(listeesHorsSite.length).toBeGreaterThanOrEqual(13);

    const ancres = [...pageSource.matchAll(/href="(https?:\/\/[^"]+)"/g)].map(
      (match) => match[1],
    );
    const orphelines = listeesHorsSite.filter(
      (href) => !ancres.includes(href),
    );
    expect(orphelines, orphelines.join("\n")).toHaveLength(0);

    const texte = prose(articleHtml());
    expect(texte).toContain("Aucun de ces niveaux ne suffit seul");
    expect(texte).toContain("l’article 20 de la loi n° 93-122 du 29 janvier 1993");
    expect(texte).toContain(
      "facturation consolidée n’est pas disponible pour les agences médias en France",
    );
    // La CNIL est désormais citée, et sur son objet : le consentement.
    expect(texte).toContain(
      "CNIL rappelle que les traceurs de mesure publicitaire relèvent le plus souvent du consentement",
    );
  });

  it("n’attribue à l’aide Google que ce que sa page porte vraiment", () => {
    // É-01. Le §02, la FAQ n° 2 et la liste des sources ancraient sur
    // support.google.com/google-ads/answer/2375370 la phrase « l'aide Google
    // distingue les comptes servis par Google France SARL de ceux servis
    // depuis l'Irlande ». Page rouverte le 30/08/2026 : elle s'intitule
    // « Taxes dans votre pays », range les taxes pays par pays, nomme pour
    // chacun l'entité qui gère le compte — « Votre compte est géré par Google
    // Ireland Ltd. » — et sa liste de pays n'ouvre aucune section France.
    // L'expression « Google France SARL » n'y figure pas. L'affirmation
    // n'était pas fausse : elle était mal localisée, et le lecteur qui suivait
    // le lien ne trouvait pas ce que la phrase annonçait.
    const texte = prose(articleHtml());

    expect(texte).toContain("« Taxes dans votre pays »");
    expect(texte).toContain("« Votre compte est géré par Google Ireland Ltd. »");
    expect(texte).toContain("n’ouvre aucune section France");
    // Nulle part : ni dans le corps, ni en FAQ, ni dans la liste des sources.
    expect(pageSource).not.toContain("Google France SARL");
    expect(pageSource).not.toContain("servis depuis l’Irlande");
    // La citation reste ancrée sur la page qui la porte.
    const encart =
      renderedPage.match(
        /<a[^>]*href="https:\/\/support\.google\.com\/google-ads\/answer\/2375370\?hl=fr"[^>]*>([\s\S]*?)<\/a>/,
      )?.[1] ?? "";
    expect(prose(encart)).toBe("« Taxes dans votre pays »");
  });

  it("marque en nofollow chacun des trois concurrents cités", () => {
    for (const hote of ["www.ms-web.fr", "www.ad-works.fr", "www.dpmedias.com"]) {
      const balises = [...pageSource.matchAll(/<a\b[\s\S]*?>/g)]
        .map((match) => match[0])
        .filter((balise) => balise.includes(hote));

      expect(balises.length, hote).toBeGreaterThan(0);
      for (const balise of balises) {
        expect(balise, hote).toContain("nofollow");
      }
    }
  });

  it("ne pointe que vers des guides publiés, jamais vers lui-même", () => {
    const publies = new Set(PUBLISHED_GUIDES.map((item) => item.slug));
    const cibles = [
      ...pageSource.matchAll(
        /(?:href|ctaHref|primaryCtaHref)\s*[:=]\s*"\/guides\/([a-z0-9-]+)"/g,
      ),
    ].map((match) => match[1]);

    expect(cibles.length).toBeGreaterThanOrEqual(3);
    for (const cible of cibles) {
      expect(publies.has(cible), cible).toBe(true);
      expect(cible).not.toBe(guide.slug);
    }

    // Une ancre qui annonce un guide ne pointe jamais vers une page service.
    const ancresService = [
      ...pageSource.matchAll(/<Link href="\/services\/[a-z0-9-]+">\s*([^<]*)</g),
    ].map((match) => match[1].trim());
    for (const ancre of ancresService) {
      expect(ancre.toLowerCase(), ancre).not.toContain("guide");
    }
  });

  it("ne laisse passer aucun connecteur robotique ni promesse inventée", () => {
    const texte = prose(articleHtml());

    for (const tic of [
      "Il est important de noter",
      "Par ailleurs",
      "En effet",
      "Force est de constater",
      "Il convient de",
      "Concrètement,",
      "En conclusion",
      "N’hésitez pas",
      "dans un monde où",
      "plongeons",
    ]) {
      expect(texte, tic).not.toContain(tic);
    }

    for (const invention of [
      /notre client/i,
      /nous avons livré/i,
      /nous a contactés/i,
      /cas client réel/i,
      /nous garantissons/i,
      /résultat garanti/i,
      /\bROI\b/,
      // §9.2 et CLAUDE.md : aucun constat de terrain sur une population que
      // personne n'a mesurée.
      /l’écart courant entre deux devis/i,
      /la plupart des dossiers/i,
      /l’erreur la plus fréquente/i,
    ]) {
      expect(texte, invention.source).not.toMatch(invention);
    }
  });

  it("casse le moule binaire et les triplettes annoncées (§9.2)", () => {
    const texte = prose(articleHtml());

    // Tic n° 3 : « X ne dit pas… / il dit… », huit occurrences dans la version
    // auditée. Les formulations citées mot pour mot doivent disparaître mot
    // pour mot, pas être déplacées.
    for (const moule of [
      "Le nom du modèle ne dit rien de la qualité du travail",
      "Le montant qui décide n’est pourtant pas celui-là",
      "Ce travail ne disparaît pas",
      "Le mot « conversion » ne dit pas ce qui s’est passé",
      "elle additionne, elle ne prédit rien",
      "Le plus cher n’est pas là",
      "L’offre la plus complète n’est pas la bonne par défaut",
      "Un CPA à 102 € n’est pas un client à 102 €",
    ]) {
      expect(texte, moule).not.toContain(moule);
    }

    // Tic n° 2 : triplette annoncée puis non tenue.
    expect(texte).not.toContain("Un dirigeant pose trois questions");
    expect(texte).not.toContain("Trois nombres décident donc à votre place");
    // Tic n° 4 : adjectif vendeur sans mesure.
    expect(texte).not.toContain("Un prix bas devient très cher");
    expect(texte).not.toContain("Un lancement bien rempli");
    // Le « vous » du §2.1 ne repart pas en troisième personne.
    expect(texte).not.toContain("sur le compte du client");

    // Le gabarit « trois » ne doit plus battre la mesure : c'est lui qui avait
    // produit « trois seuils » là où le guide en publie quatre.
    const trois = (texte.match(/\btrois\b/gi) ?? []).length;
    expect(trois, `${trois} occurrences de « trois »`).toBeLessThanOrEqual(11);
  });

  it("garde une FAQ de six à dix questions, distinctes des H2", () => {
    const bloc = pageSource.match(
      /const faqCategories: GuidePremiumFaqCategory\[\] = \[([\s\S]*?)\n\];/,
    )?.[1];
    expect(bloc).toBeDefined();

    const questions = [
      ...(bloc ?? "").matchAll(/question:\s*\n?\s*"([^"]+)"/g),
    ].map((match) => match[1]);
    const reponses = [
      ...(bloc ?? "").matchAll(/answer:\s*\n?\s*"([^"]+)"/g),
    ].map((match) => match[1]);

    expect(questions.length).toBeGreaterThanOrEqual(6);
    expect(questions.length).toBeLessThanOrEqual(10);
    expect(reponses).toHaveLength(questions.length);

    for (const question of questions) {
      expect(question.trim().endsWith("?"), question).toBe(true);
      expect(question, question).toContain(`${ECHAPPEMENT_NBSP}?`);
    }

    // §9.2 : la symétrie binaire « Non. » / « Oui, mais » est un tic.
    const binaires = reponses.filter((reponse) =>
      /^(?:Non|Oui)\b/.test(reponse),
    ).length;
    expect(binaires / reponses.length).toBeLessThanOrEqual(0.34);

    for (const reponse of reponses) {
      const mots = reponse
        .split(ECHAPPEMENT_NBSP)
        .join(ESPACE)
        .split(/\s+/)
        .filter(Boolean).length;
      expect(mots, reponse.slice(0, 50)).toBeGreaterThanOrEqual(40);
      expect(mots, reponse.slice(0, 50)).toBeLessThanOrEqual(120);
    }

    // La réponse « gestion en interne » chiffrait un écart de 300 € présenté
    // comme « courant entre deux devis ». Elle porte maintenant l'écart réel,
    // dérivé des quatre offres du §03 : 900 − 750 = 150 €, soit 3 h à 50 €.
    const interne = reponses.find((reponse) =>
      reponse.includes("trois heures par mois"),
    );
    expect(interne).toBeDefined();
    const mensuels = honorairesMensuels();
    const moinsCher = Math.min(...mensuels);
    const voisin = Math.min(...mensuels.filter((v) => v > moinsCher));
    expect(interne).toContain(
      `trois heures par mois à 50${ECHAPPEMENT_NBSP}€ l’heure valent ${voisin - moinsCher}${ECHAPPEMENT_NBSP}€`,
    );
  });

  it("traite explicitement la requête cible", () => {
    const texte = prose(articleHtml()).toLowerCase();
    expect(texte).toContain("gestion google ads");
    expect((texte.match(/google ads/g) ?? []).length).toBeGreaterThanOrEqual(5);
    expect(normalizedPageSource).toContain(
      'label: "Calcul local · aucun envoi"',
    );
  });
});
