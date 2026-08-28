import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { buildGuideStructuredData } from "@/lib/guide-page-seo";
import { getGuide } from "@/lib/guides";
import { metadata } from "./page";

const slugDirectory = dirname(fileURLToPath(import.meta.url));
const guide = getGuide("signes-besoin-logiciel-metier");
const structuredData = buildGuideStructuredData(
  guide,
  "Besoin d’un logiciel métier",
);
const pageSource = readFileSync(resolve(slugDirectory, "page.tsx"), "utf8");
const diagnosticSource = readFileSync(
  resolve(slugDirectory, "situation-diagnostic.tsx"),
  "utf8",
);
const ogSource = readFileSync(
  resolve(slugDirectory, "opengraph-image.tsx"),
  "utf8",
);
const normalizedPage = pageSource.replace(/\s+/g, " ");

/**
 * Le texte tel qu'un lecteur le voit.
 *
 * Les espaces insécables sont écrites en échappement explicite — `&nbsp;` dans
 * le JSX, ` ` dans les chaînes JavaScript — parce qu'un caractère
 * insécable littéral se perd en silence à la première réécriture du fichier.
 * Les assertions de montants raisonnent donc sur cette forme normalisée, pas
 * sur la source brute.
 */
const readablePage = pageSource
  .replace(/&nbsp;/g, " ")
  .replace(/\\u00a0/g, " ")
  .replace(/\s+/g, " ");

const sourceWithoutComments = pageSource
  .replace(/\/\*[\s\S]*?\*\//g, "")
  .replace(/\/\/[^\n]*/g, "");

const expectedCanonical = `https://hagnere-code.ai/guides/${[
  "signes",
  "besoin",
  "logiciel",
  "metier",
].join("-")}`;

/** Contenu d'un `<GuideTable>` repéré par son intitulé. */
function guideTable(caption: string): string {
  const from = pageSource.indexOf(`caption="${caption}`);
  expect(from, `tableau introuvable : ${caption}`).toBeGreaterThan(-1);
  const to = pageSource.indexOf("/>", from);
  expect(to, `fin de tableau introuvable : ${caption}`).toBeGreaterThan(from);
  return pageSource
    .slice(from, to)
    .replace(/\\u00a0/g, " ")
    .replace(/\s+/g, " ");
}

/** Bloc de données JavaScript, où `&nbsp;` s'afficherait tel quel. */
function jsBlock(start: string, end: string): string {
  const from = pageSource.indexOf(start);
  expect(from, `bloc introuvable : ${start}`).toBeGreaterThan(-1);
  const to = pageSource.indexOf(end, from + start.length);
  expect(to, `fin de bloc introuvable : ${end}`).toBeGreaterThan(from);
  return pageSource.slice(from, to);
}

/**
 * Chiffrage du cas construit, recalculé ici plutôt que recopié.
 *
 * Le guide expose la méthode ligne à ligne ; ce test la rejoue et vérifie que
 * chaque résultat intermédiaire figure bien dans la page. Un montant modifié
 * dans le texte sans que le calcul suive fait échouer la suite — c'est
 * exactement l'incohérence interne que l'audit du 28/08/2026 cherchait.
 */
const PRODUCTIVE_HOURS = 1_600;
const WORKING_WEEKS = 48;
const ANNUAL_EMPLOYER_COST = 48_000;
const AFFECTED_PEOPLE = 4;
const HOURS_PER_WEEK = 5;
const INCIDENTS_PER_YEAR = 12;
const INCIDENT_COST = 250;
const BUDGET = 25_000;

const hourlyCost = ANNUAL_EMPLOYER_COST / PRODUCTIVE_HOURS;
const lostHours = HOURS_PER_WEEK * WORKING_WEEKS * AFFECTED_PEOPLE;
const timeCost = lostHours * hourlyCost;
const errorCost = INCIDENTS_PER_YEAR * INCIDENT_COST;
const annualCost = timeCost + errorCost;
const threeYearCost = annualCost * 3;
const breakEvenMonths = (BUDGET / annualCost) * 12;

/** Montant à la française, avec l'espace des milliers déjà normalisée. */
function euro(value: number): string {
  return `${value.toLocaleString("fr-FR").replace(/[\u00A0\u202F]/g, " ")} €`;
}

describe("content quality for the software-needs guide", () => {
  it("uses the approved central guide entry and restrained SEO builders", () => {
    expect(pageSource).toContain('getGuide("signes-besoin-logiciel-metier")');
    expect(pageSource).toContain("buildGuideMetadata(");
    expect(pageSource).toContain("buildGuideStructuredData(");
    expect(pageSource).toContain("formatGuideDate(guide.dateModified)");
    expect(pageSource).not.toContain("editorialStatus");
    expect(pageSource).not.toContain("type GuideEntry");
    expect(guide.editorialStatus).toBe("published");
    expect(metadata.robots).toMatchObject({
      index: false,
      follow: false,
    });
    expect(metadata.alternates?.canonical).toBe(expectedCanonical);
  });

  it("uses only dated Article and BreadcrumbList structured data", () => {
    const serializedSchema = JSON.stringify(structuredData);
    const schemaTypes = structuredData.map((item) => item["@type"]);

    expect(schemaTypes).toEqual(["Article", "BreadcrumbList"]);
    expect(structuredData[0]).toMatchObject({
      datePublished: guide.datePublished,
      dateModified: guide.dateModified,
    });
    expect(serializedSchema).not.toMatch(
      /\b(?:FAQPage|HowTo|Offer|Review|AggregateRating|wordCount)\b/,
    );
  });

  it("keeps twelve sections, half of them in question form", () => {
    const metaDescription = metadata.description;
    const sectionTitles = [
      ...pageSource.matchAll(/<GuidePremiumSection[\s\S]*?title="([^"]+)"/g),
    ].map((match) => match[1]);

    expect(typeof metaDescription).toBe("string");
    expect((metaDescription as string).length).toBeGreaterThanOrEqual(145);
    expect((metaDescription as string).length).toBeLessThanOrEqual(160);
    expect(sectionTitles).toHaveLength(12);

    const questions = sectionTitles.filter((heading) => heading.endsWith("?"));
    expect(questions).toHaveLength(6);

    // Le H1 ne reprend jamais le titre de la première section.
    const heroTitle = pageSource.match(/heroTitleEm="([^"]+)"/)?.[1];
    expect(heroTitle).toBe("logiciel métier&nbsp;?");
    expect(pageSource).not.toContain("heroTitleSuffix");
    expect(sectionTitles[0]).not.toContain("Votre entreprise");
  });

  it("makes the section reading times sum to the declared reading time", () => {
    const declared = [
      ...pageSource.matchAll(/^\s{2}([a-zA-Z]+): (\d+),$/gm),
    ].filter(([, key]) =>
      /definition|coutActuel|securiser|troisSituations|sixReponses|contreCas|cas|ceQuiRate|pilote|coutComplet|anneeTrois|decision/.test(
        key,
      ),
    );

    expect(declared).toHaveLength(12);
    const total = declared.reduce(
      (sum, [, , value]) => sum + Number(value),
      0,
    );
    expect(total).toBe(guide.readTimeMin);
  });

  it("bans the fifteen tics and the project lexicon", () => {
    expect(`${pageSource}\n${diagnosticSource}`).not.toMatch(
      /Il est important de noter|Dans cette optique|Par ailleurs|À titre d’illustration|Il convient de|S’agissant de|Au regard de|Force est de constater|En conclusion/,
    );
    expect(`${pageSource}\n${diagnosticSource}`).not.toMatch(
      /robot silencieux|épouse les habitudes|maquiller en certitude|Le but du guide|Une décision saine|Une bonne orientation/,
    );
    // Lexique interdit du protocole, mesuré sur la page seule : l'outil de
    // diagnostic a son propre contrat de test.
    for (const banned of [
      "point d’arrêt",
      "preuve à conserver",
      "périmètre",
      "matrice",
      "livrable",
      "gouvernance",
      "dispositif",
      "entité",
      "prestataire",
      "intervenant",
      "traçabilité",
      "opposable",
      "charge résiduelle",
    ]) {
      expect(
        pageSource.toLowerCase().includes(banned.toLowerCase()),
        `terme interdit présent : ${banned}`,
      ).toBe(false);
    }
  });

  it("writes every non-breaking space as an explicit escape", () => {
    // Un insécable littéral disparaît sans bruit à la réécriture du fichier.
    expect(pageSource).not.toMatch(/[\u00A0\u202F\u2009]/);
    expect(pageSource).toContain("&nbsp;");
    expect(pageSource).toContain("\\u00a0");

    // Aucune espace ordinaire ne précède une ponctuation double.
    const offenders = [
      ...sourceWithoutComments.matchAll(/.{0,40}\S [?!:;].{0,20}/g),
    ].map((match) => match[0]);
    expect(offenders, "espace ordinaire avant une ponctuation double").toEqual(
      [],
    );

    // `&nbsp;` dans une chaîne JavaScript s'afficherait tel quel : les blocs de
    // données n'en contiennent aucun.
    for (const [start, end] of [
      ["const faqCategories", "\n];"],
      ["const responses = [", "] as const;"],
      ["legalSources={[", "disclaimer={{"],
    ] as const) {
      expect(jsBlock(start, end), `&nbsp; littéral dans ${start}`).not.toContain(
        "&nbsp;",
      );
    }
    for (const rows of pageSource.match(/rows=\{\[[\s\S]*?\n\s+\]\}/g) ?? []) {
      expect(rows).not.toContain("&nbsp;");
    }
  });

  it("treats the target query instead of only putting it in the title", () => {
    const body = pageSource.slice(pageSource.indexOf("<GuidePremiumSection"));
    const occurrences = body.match(/logiciels? métiers?/g) ?? [];
    expect(occurrences.length).toBeGreaterThanOrEqual(4);

    // La définition et ses concurrents nommés.
    for (const term of [
      "progiciel de gestion intégré",
      "progiciel vertical",
      "no-code",
      "CRM",
      "tableur",
      "développement sur mesure",
    ]) {
      expect(readablePage, `notion absente : ${term}`).toContain(term);
    }
    // Quatre exemples nommés, dans quatre secteurs.
    for (const example of [
      "planification d’interventions",
      "suivi de lots",
      "gestion de dossiers avec pièces et délais",
      "facturation à l’usage",
    ]) {
      expect(readablePage, `exemple métier absent : ${example}`).toContain(
        example,
      );
    }
  });

  it("compares exactly six responses and keeps OBSERVER outside the count", () => {
    const responsesBlock = pageSource.match(
      /const responses = \[([\s\S]*?)\] as const;/,
    )?.[1];

    expect(responsesBlock).toBeDefined();
    expect(responsesBlock?.match(/number: "[1-6]"/g)).toHaveLength(6);
    for (const label of [
      "Sécuriser la continuité et les accès",
      "Supprimer ou simplifier le processus",
      "Configurer l’outil actuel et former",
      "Connecter ou automatiser de façon limitée",
      "Tester avant d’adopter un logiciel standard",
      "Étudier une fonction sur mesure",
    ]) {
      expect(responsesBlock, label).toContain(label);
    }
    expect(responsesBlock).not.toContain("OBSERVER");
    // Le terme du lexique interdit est remplacé, la fonction du champ reste.
    expect(pageSource).toContain("Ce qui doit vous arrêter");
    expect(pageSource).not.toContain("Point d’arrêt");
    expect(readablePage).toContain(
      "OBSERVER : ne pas choisir de solution tant que les faits manquent",
    );
    expect(readablePage).toContain(
      "Ce n’est pas une septième solution à acheter",
    );
  });

  it("gives each of the six responses a cost and an observation delay", () => {
    const readableTable = guideTable("Ordre de grandeur du coût");
    for (const row of [
      "1 · Sécuriser",
      "2 · Supprimer l’étape",
      "3 · Configurer et former",
      "4 · Connecter",
      "5 · Standard",
      "6 · Sur mesure",
    ]) {
      expect(readableTable, `ligne absente : ${row}`).toContain(row);
    }
    // Prix réellement publiés par Hagnéré Code, avec leur date de relevé.
    for (const price of ["5 000 € HT", "990 € HT", "1 500 € HT", "8 000 €"]) {
      expect(readableTable, `prix maison absent : ${price}`).toContain(price);
    }
    expect(readableTable).toContain("28 août 2026");
    // Le délai de livraison n'est pas inventé : il est renvoyé au devis.
    expect(readablePage).toContain("planning confirmé après cadrage");
  });

  it("carries one constructed case, announced as constructed, across the guide", () => {
    expect(readablePage).toContain(
      "Exemple construit : les volumes, l’effectif et le coût horaire sont choisis pour l’exemple et ne viennent d’aucune source ; seuls les montants de prestation sont repris de la grille publiée. Ce n’est pas un dossier client.",
    );
    expect(readablePage).toContain(
      "Aucun résultat n’y est mesuré et aucun gain n’en est déduit.",
    );
    // Aucune vignette anonyme ne subsiste.
    expect(pageSource).not.toMatch(/Exemple fictif [123]/);

    // Le cas traverse au moins cinq sections.
    const sections = pageSource
      .split("<GuidePremiumSection")
      .slice(1)
      .map((section) => section.replace(/&nbsp;/g, " ").replace(/\\u00a0/g, " "));
    const carrying = sections.filter(
      (section) =>
        /Nadia|cas construit/.test(section) ||
        section.includes("31 800") ||
        section.includes("28 800"),
    );
    expect(carrying.length).toBeGreaterThanOrEqual(5);

    // Le moment de friction est écrit, pas suggéré.
    expect(readablePage).toContain(
      "le progiciel exporte un bon d’intervention en PDF, pas les lignes de main-d’œuvre et de pièces",
    );
  });

  it("keeps the case arithmetic reproducible and internally consistent", () => {
    expect(hourlyCost).toBe(30);
    expect(lostHours).toBe(960);
    expect(timeCost).toBe(28_800);
    expect(errorCost).toBe(3_000);
    expect(annualCost).toBe(31_800);
    expect(threeYearCost).toBe(95_400);
    expect(Number(breakEvenMonths.toFixed(1))).toBe(9.4);

    for (const amount of [timeCost, errorCost, annualCost, threeYearCost]) {
      expect(readablePage, `montant absent : ${euro(amount)}`).toContain(
        euro(amount),
      );
    }
    expect(readablePage).toContain("48 000 € ÷ 1 600 h");
    expect(readablePage).toContain("5 h par semaine et par personne");
    expect(readablePage).toContain("× 48 semaines × 4 personnes");
    // Le total est annoncé comme un plancher, avec ce qu'il laisse dehors.
    expect(readablePage).toContain("Ce total est un <strong>plancher</strong>");
    expect(readablePage).toContain("36 heures");
    expect(readablePage).toContain("960 h × 30 €");
    expect(readablePage).toContain("25 000 ÷ 31 800 × 12");
    expect(readablePage).toContain("9,4 mois");

    // Les deux hypothèses de travail sont annoncées comme telles.
    expect(readablePage).toContain("hypothèses de travail");
    expect(readablePage).toContain("1 607 heures");
    expect(readablePage).toContain("52 semaines moins cinq");

    // Le temps rendu n'est pas présenté comme de la trésorerie.
    expect(readablePage).toContain(
      "28 800 € de temps ne sont pas 28 800 € de trésorerie",
    );
  });

  it("writes the 3-2-1 rule and two target durations in the body", () => {
    expect(readablePage).toContain(
      "« Appliquez la règle du 3-2-1 : 3 copies, sur 2 supports différents, dont 1 déconnectée du réseau. »",
    );
    expect(readablePage).toContain("perte de données maximale admissible");
    expect(readablePage).toContain("durée maximale d’interruption admissible");
    expect(readablePage).toContain("4 heures");
    expect(readablePage).toContain("24 heures");
    // La fréquence de test n'est attribuée à aucune source : elle est assumée.
    expect(readablePage).toContain("Ni l’un ni l’autre ne donne de fréquence");
    expect(readablePage).toContain(
      "une restauration réellement rejouée tous les six mois",
    );
    // Les métiers sont nommés, pas la case de tableau.
    for (const job of [
      "administrateur des comptes",
      "hébergeur",
      "intégrateur",
      "délégué à la protection des données",
      "coordinatrice de planning",
      "comptable",
      "chargés d’affaires",
      "expert-comptable",
      "contrôleur de gestion",
      "DSI",
      "chef de projet",
      "développeur",
    ]) {
      expect(readablePage, `métier non nommé : ${job}`).toContain(job);
    }
  });

  it("says what fails and what it costs, three times, with a number", () => {
    const section = pageSource.slice(
      pageSource.indexOf('id="ce-qui-rate"'),
      pageSource.indexOf('id="pilote"'),
    );
    expect(section.length).toBeGreaterThan(1_000);

    const readableSection = section
      .replace(/&nbsp;/g, " ")
      .replace(/\\u00a0/g, " ")
      .replace(/\s+/g, " ");
    const incidents = readableSection.match(/<li>/g) ?? [];
    expect(incidents.length).toBeGreaterThanOrEqual(3);

    for (const figure of [
      "9,4 à 17,2 mois",
      "144 heures",
      "4 320 €",
      "52 doublons",
      "660 €",
      "14 400 €",
    ]) {
      expect(readableSection, `conséquence non chiffrée : ${figure}`).toContain(
        figure,
      );
    }
    // Aucun incident client, même anonymisé.
    expect(readableSection).toContain("Aucun n’est repris d’un dossier client");
  });

  it("adds up three years instead of comparing without totalling", () => {
    const readableTable = guideTable("Coût total de possession à 3 ans");
    for (let family = 1; family <= 12; family += 1) {
      expect(readableTable, `famille ${family} absente`).toContain(
        `"${family} · `,
      );
    }
    // Trois états visibles, jamais une case vide.
    expect(readableTable).toContain("Sans objet");
    expect(readableTable).toContain("Inconnu");
    expect(readablePage).toContain("Un inconnu ne vaut jamais zéro");
    // Les totaux partiels sont écrits, et le statu quo est le seul complet.
    expect(readablePage).toContain("95 400 € sur trois ans");
    expect(readablePage).toContain("8 424 € de lignes connues");
    expect(readablePage).toContain("26 500 à 51 500 € de lignes connues");
  });

  it("treats year three and the exit, with dated public sources", () => {
    const section = pageSource.slice(
      pageSource.indexOf('id="annee-trois"'),
      pageSource.indexOf('id="decision"'),
    );
    const readableSection = section
      .replace(/&nbsp;/g, " ")
      .replace(/\\u00a0/g, " ")
      .replace(/\s+/g, " ");

    expect(readableSection).toContain("281 €");
    expect(readableSection).toContain("2 808 €");
    expect(readableSection).toContain("1 920 €");
    expect(readableSection).toContain("300 heures");
    expect(readableSection).toContain("9 000 €");
    expect(readableSection).toContain("1<sup>er</sup> septembre 2026");
    expect(readableSection).toContain("1<sup>er</sup> septembre 2027");
    // Aucun ordinal sans exposant ni dans le corps ni dans les sources.
    expect(readablePage).not.toMatch(/\b1er\b/);
    expect(readableSection).toContain("horizon retenu dans ce guide est de");
  });

  it("answers before selling and covers the required counter-cases", () => {
    expect(readablePage).toContain(
      "Vous n’avez pas forcément un projet à l’arrivée.",
    );
    expect(readablePage).toContain(
      "Vous aurez surtout évité de financer une solution qui ne traite pas le problème observé.",
    );
    for (const counterCase of [
      "Excel ou l’outil actuel suffit",
      "Le standard peut être préférable",
      "La sécurité passe avant",
      "Il faut attendre",
      "Le sur-mesure est prématuré",
      "Le processus doit disparaître",
    ]) {
      expect(pageSource, counterCase).toContain(counterCase);
    }
    // Chaque contre-cas porte le fait chiffré qui le déclenche.
    const counterCaseBlock = jsBlock(
      "Un propriétaire identifié",
      "].map((counterCase)",
    ).replace(/\\u00a0/g, " ");
    expect(counterCaseBlock.match(/\d/g)?.length ?? 0).toBeGreaterThanOrEqual(
      12,
    );
    expect(readablePage).toContain(
      "Ces repères sont des règles de travail, pas des normes",
    );
    expect(pageSource).not.toContain(
      "Ces contre-cas ne ferment pas la décision pour toujours",
    );
    expect(pageSource).not.toMatch(
      /ROI garanti|rentabilité garantie|retour garanti|zéro erreur|100 % adapté/i,
    );
  });

  it("keeps sources visible with their authorship, scope limits and dates", () => {
    for (const source of [
      "cnil_guide_securite_personnelle.pdf",
      "securite-des-donnees-les-regles-essentielles",
      "anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf",
      "insee.fr/fr/statistiques/2381340",
      "impots.gouv.fr/professionnel/questions",
      "notion.com/fr/pricing",
      "referentiel_general_ecoconception_des_services_numeriques_version_2024.pdf",
      "design.numerique.gouv.fr/bien-concevoir",
      "lautomatisation-une-solution",
    ]) {
      expect(pageSource, source).toContain(source);
    }
    expect(readablePage).toContain(
      "rédigé par Erwan Kezzar de Contournement et Marc-Olivier Sercki de Pathta, deux acteurs privés",
    );
    expect(readablePage).toContain(
      "nous retenons la méthode d’observation, pas leurs gains ni leurs préférences d’outils comme règles générales",
    );
    expect(readablePage).toContain(
      "Ces bonnes pratiques visent les services publics ; nous les utilisons seulement comme méthode de conception transférable",
    );
    expect(readablePage).toContain(
      "C’est ici un garde-fou de conception, pas une évaluation complète du RGESN, une preuve de rentabilité",
    );
    expect(readablePage).toContain(
      "ce guide n’en réalise pas l’évaluation complète et n’en déduit aucune rentabilité",
    );
    // Chaque source publiée porte sa date de consultation ou de parution.
    const sourcesBlock = jsBlock("legalSources={[", "disclaimer={{");
    expect(sourcesBlock.match(/2026/g)?.length ?? 0).toBeGreaterThanOrEqual(9);
    expect(normalizedPage).not.toMatch(
      /\b(?:donnée|information)s? sensibles?\b/i,
    );
  });

  it("provides a local, copyable and printable three-situation diagnostic", () => {
    expect(pageSource).toContain("<SituationDiagnosticTool");
    expect(diagnosticSource).toContain(
      'data-testid="three-situations-print-summary"',
    );
    expect(diagnosticSource).toContain("buildDiagnosticSummary");
    expect(diagnosticSource).toContain("navigator.clipboard.writeText");
    expect(diagnosticSource).toContain("window.print()");
    expect(diagnosticSource).not.toContain("fetch(");
    expect(diagnosticSource).not.toContain("localStorage");
    expect(diagnosticSource).not.toContain("<form");
    // Aucun téléchargement de fichier n'est proposé par l'outil local.
    expect(diagnosticSource).not.toMatch(/\.(?:xlsx?|csv)\b/i);
    // La période d'observation et le seuil de répétition sont chiffrés.
    expect(readablePage).toContain("un mois complet");
    expect(readablePage).toContain("trois fois");
    expect(readablePage).toContain("30 à 45 minutes");
  });

  it("links only to pages that keep the promise written in the anchor", () => {
    const bodyLinks = [
      ...pageSource.matchAll(/<Link\s+href="([^"]+)"/g),
    ].map((match) => match[1]);

    expect(bodyLinks.length).toBeGreaterThanOrEqual(6);
    expect(bodyLinks.length).toBeLessThanOrEqual(9);
    expect(new Set(bodyLinks).size).toBe(bodyLinks.length);
    expect(bodyLinks.sort()).toEqual(
      [
        "/guides/automatiser-processus-metier",
        "/guides/cahier-des-charges-saas",
        "/guides/plan-recette-application-metier",
        "/guides/power-apps-ou-application-sur-mesure",
        "/guides/securite-application-metier",
        "/outils/calculateur-cout-excel",
        "/services/outils-internes-sur-mesure",
        "/tarifs",
      ].sort(),
    );
    // Les trois ancres qui promettaient des guides inexistants ont disparu.
    expect(pageSource).not.toContain("Calculer le ROI d’une application métier");
    expect(pageSource).not.toContain("Microsoft Access par une application web");
    expect(pageSource).not.toContain("le choix d’un prestataire sur preuves");
  });

  it("keeps a FAQ of nine autonomous, numbered answers outside the H2 angles", () => {
    const answers = [
      ...pageSource.matchAll(/answer:\s*\n?\s*"([^"]+)"/g),
    ].map((match) => match[1].replace(/\\u00a0/g, " "));
    const questions = [
      ...pageSource.matchAll(/question:\s*\n?\s*"([^"]+)"/g),
    ].map((match) => match[1].replace(/\\u00a0/g, " "));

    expect(questions).toHaveLength(9);
    expect(answers).toHaveLength(9);

    for (const answer of answers) {
      const words = answer.split(/\s+/).filter(Boolean).length;
      expect(words, `réponse hors bande 60-110 mots : ${answer.slice(0, 40)}`)
        .toBeGreaterThanOrEqual(60);
      expect(words).toBeLessThanOrEqual(110);
      // Autonome : aucune réponse ne renvoie à une section du corps.
      expect(answer).not.toMatch(/la section \d/);
    }

    // Au moins six réponses portent une valeur chiffrée.
    const withFigures = answers.filter((answer) => /\d/.test(answer));
    expect(withFigures.length).toBeGreaterThanOrEqual(6);

    // Aucune question ne doublonne frontalement un H2.
    const sectionTitles = [
      ...pageSource.matchAll(/<GuidePremiumSection[\s\S]*?title="([^"]+)"/g),
    ].map((match) => match[1].replace(/&nbsp;/g, " "));
    for (const question of questions) {
      expect(sectionTitles, `question doublon d'un H2 : ${question}`).not.toContain(
        question,
      );
    }
  });

  it("uses existing, contextual lead-only destinations", () => {
    expect(pageSource).toContain(
      'primaryCtaLabel: "Faire examiner mes trois situations"',
    );
    expect(pageSource).toContain('primaryCtaHref: "/demarrer-un-projet"');
    expect(pageSource).toContain(
      'ctaHref: "/services/outils-internes-sur-mesure"',
    );
    expect(readablePage).toContain(
      "Le premier échange sert à décider ce qu’il faut vérifier ensuite",
    );
    expect(readablePage).toContain("ne garantit la faisabilité d’aucun outil");
    // Un seul bloc commercial dans le corps, un seul appel à l'action suivi.
    expect(pageSource.match(/TrackedGuideCtaLink\s+href=/g)).toHaveLength(1);
  });

  it("keeps the 320 px mobile CTA short and tied to the internal-tools service", () => {
    expect(pageSource).toContain('mobileCtaLabel="Outils internes"');
    expect(pageSource).not.toContain(
      'mobileCtaLabel="Voir le service outils internes"',
    );
    expect(pageSource).toContain(
      'ctaHref: "/services/outils-internes-sur-mesure"',
    );
  });

  it("shows figures rather than the word « Aucun » in the hero band", () => {
    const statsBlock = jsBlock("stats={[", "]}");
    const stats = [
      ...statsBlock.matchAll(/label: "([^"]+)", value: (?:"([^"]+)"|`([^`]+)`)/g),
    ].map((match) => ({
      label: match[1],
      value: (match[2] ?? match[3]).replace("${guide.readTimeMin}", "21"),
    }));

    expect(stats).toHaveLength(5);
    expect(stats.filter((stat) => stat.value === "Aucun")).toHaveLength(0);
    expect(
      stats.filter((stat) => /\d/.test(stat.value)).length,
      "toutes les valeurs du bandeau doivent être chiffrées",
    ).toBe(5);
    expect(stats.map((stat) => stat.value)).toContain("31\\u00a0800\\u00a0€");
  });

  it("ships dedicated three-ratio illustrations and a 1200 by 630 social image", () => {
    expect(pageSource).toContain("article-diagnostic-16x9.svg");
    expect(guide.articleImagePaths).toEqual([
      "/guides/signes-besoin-logiciel-metier/article-diagnostic-16x9.svg",
      "/guides/signes-besoin-logiciel-metier/article-diagnostic-4x3.svg",
      "/guides/signes-besoin-logiciel-metier/article-diagnostic-1x1.svg",
    ]);
    expect(ogSource).toContain(
      "Trois situations réelles · six réponses · aucun seuil magique",
    );
    expect(ogSource).toContain(
      "export const size = { width: 1200, height: 630 }",
    );
  });
});
