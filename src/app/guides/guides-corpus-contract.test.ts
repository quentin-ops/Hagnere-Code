import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { PUBLISHED_GUIDES } from "@/lib/guides";
import { SERVICE_LINKS } from "@/lib/services";

/**
 * Invariants transversaux du corpus des guides.
 *
 * Les fichiers `content-quality.test.ts` vérifient un guide à la fois : ils ne
 * voient donc jamais qu'un guide publié soit le seul à ne pas respecter une
 * règle partagée. Ce fichier tient les règles qui n'ont de sens qu'à l'échelle
 * du silo, relevées par l'audit multi-agents d'août 2026 :
 *
 * - un guide qui concentre l'autorité du silo doit la transmettre à une page
 *   d'offre, pas seulement au formulaire ;
 * - le bloc de bas de FAQ doit viser le funnel unique, pas un second point
 *   d'entrée commercial ;
 * - tout lien vers le funnel doit être instrumenté, sinon la conversion n'est
 *   attribuable à aucun guide — le point aveugle le plus coûteux au lancement
 *   de campagnes payantes ;
 * - `priority` ne se pose que sur l'image réellement responsable du LCP
 *   (docs/regle-or-vigilance-seo-publication.md) ;
 * - la détection des liens internes doit couvrir les trois formes d'écriture
 *   réellement utilisées, pas la seule `href="…"`.
 */

const repositoryRoot = process.cwd();
const guidesDirectory = path.join(repositoryRoot, "src/app/guides");
const servicePaths = new Set(SERVICE_LINKS.map((service) => service.path));
const publishedSlugs = new Set(PUBLISHED_GUIDES.map((guide) => guide.slug));

/**
 * Couvre les trois formes d'écriture d'un lien dans une page de guide :
 * l'attribut JSX `href="…"`, l'entrée de données `href: "…"` (blocs
 * `relatedGuides`, `breadcrumbs`, `legalSources`) et les props dérivées
 * `ctaHref` / `primaryCtaHref` / `secondaryHref` / `phoneHref`, dont la
 * majuscule sortait du motif d'origine.
 */
const INTERNAL_LINK_PATTERN = /[A-Za-z]*[Hh]ref\s*[:=]\s*\{?\s*"(\/[^"]*)"/g;

function pageSourceFor(slug: string): string {
  return readFileSync(path.join(guidesDirectory, slug, "page.tsx"), "utf8");
}

const sources = new Map(
  PUBLISHED_GUIDES.map((guide) => [guide.slug, pageSourceFor(guide.slug)]),
);

function internalLinksOf(source: string): string[] {
  return [...source.matchAll(INTERNAL_LINK_PATTERN)].map((match) => match[1]);
}

/**
 * Le contrat de test d'un guide peut interdire l'ajout de mots visibles : le
 * temps de lecture déclaré et le décompte gelé dans son dossier de recherche
 * sont alors comparés au mot près. Un lien de service ne peut y être ajouté
 * qu'en même temps que ces deux valeurs, qui vivent hors du répertoire des
 * guides.
 */
const SERVICE_LINK_EXEMPTIONS: Record<string, string> = {};

describe("contrat transversal du corpus de guides", () => {
  it("rattache chaque guide publié à au moins une page de service", () => {
    for (const guide of PUBLISHED_GUIDES) {
      const services = internalLinksOf(sources.get(guide.slug) ?? "").filter(
        (link) => link.startsWith("/services/"),
      );

      if (SERVICE_LINK_EXEMPTIONS[guide.slug]) {
        expect(
          services,
          `${guide.slug} : exemption devenue inutile, retirez-la de SERVICE_LINK_EXEMPTIONS`,
        ).toHaveLength(0);
        continue;
      }

      expect(
        services.length,
        `${guide.slug} : aucun lien vers une page /services/*`,
      ).toBeGreaterThan(0);
    }
  });

  it("ne pointe que vers des routes internes réellement publiées", () => {
    for (const guide of PUBLISHED_GUIDES) {
      for (const link of internalLinksOf(sources.get(guide.slug) ?? "")) {
        const route = link.split("#")[0].split("?")[0].replace(/\/$/, "");
        if (route === "") continue;

        if (route.startsWith("/guides/")) {
          expect(
            publishedSlugs.has(route.slice("/guides/".length)),
            `${guide.slug} -> ${link} : guide inconnu ou non publié`,
          ).toBe(true);
          continue;
        }

        if (route.startsWith("/services/")) {
          expect(
            servicePaths.has(route as (typeof SERVICE_LINKS)[number]["path"]),
            `${guide.slug} -> ${link} : service absent de SERVICE_LINKS`,
          ).toBe(true);
          continue;
        }

        expect(
          existsSync(path.join(repositoryRoot, "src/app", route, "page.tsx")),
          `${guide.slug} -> ${link} : route sans page.tsx`,
        ).toBe(true);
      }
    }
  });

  it("déclare une destination explicite pour la CTA de bas de FAQ", () => {
    let parsed = 0;
    let declaring = 0;

    for (const guide of PUBLISHED_GUIDES) {
      const source = sources.get(guide.slug) ?? "";
      if (source.includes("faqMeta=")) declaring += 1;
      const faqMeta = source.match(/faqMeta=\{\{([\s\S]*?)\n {8}\}\}/);
      if (!faqMeta) continue;
      parsed += 1;

      expect(
        faqMeta[1],
        `${guide.slug} : faqMeta sans ctaHref, la CTA retombe sur le repli du composant`,
      ).toMatch(/ctaHref:/);
      expect(
        faqMeta[1],
        `${guide.slug} : faqMeta sans ctaLabel, l'ancre reste générique`,
      ).toMatch(/ctaLabel:/);
    }

    // Sans ce garde-fou, un changement de mise en forme ferait échouer la
    // lecture du bloc et le test passerait à vide.
    expect(parsed, "faqMeta déclaré mais non relu").toBe(declaring);
    expect(declaring).toBeGreaterThan(0);
  });

  it("garde le repli du bloc de FAQ sur le funnel unique", () => {
    const faqSource = readFileSync(
      path.join(
        repositoryRoot,
        "src/components/guides/guide-premium-faq-categorized.tsx",
      ),
      "utf8",
    );

    expect(faqSource).not.toContain('ctaHref = "/contact"');
    expect(faqSource).toContain('const CTA_HREF_DEFAUT = "/demarrer-un-projet"');
  });

  it("instrumente tout lien de guide vers le funnel commercial", () => {
    for (const guide of PUBLISHED_GUIDES) {
      const source = sources.get(guide.slug) ?? "";
      const untracked = [
        ...source.matchAll(
          /<Link\b[^>]*href="\/(demarrer-un-projet|rendez-vous|contact)"/g,
        ),
      ].map((match) => match[1]);

      expect(
        untracked,
        `${guide.slug} : <Link> brut vers le funnel — le clic n'émet aucun guide_cta_click`,
      ).toEqual([]);

      if (/href="\/(?:demarrer-un-projet|rendez-vous|contact)"/.test(source)) {
        expect(
          source,
          `${guide.slug} : lien funnel sans TrackedGuideCtaLink`,
        ).toContain("TrackedGuideCtaLink");
      }
    }
  });

  it("ne précharge aucune illustration située sous la ligne de flottaison", () => {
    for (const guide of PUBLISHED_GUIDES) {
      const source = sources.get(guide.slug) ?? "";
      expect(
        source,
        `${guide.slug} : priority sur une <Image> qui n'est pas le LCP`,
      ).not.toMatch(/^\s+priority\s*$/m);
    }
  });
});

/**
 * Pages commerciales de concurrents citées comme échantillon de prix daté,
 * par guide. La citation et le lien restent — ils font la vérifiabilité du
 * guide — mais le signal de classement transmis serait renforcer un
 * concurrent sur la requête que la page vise. Les sources institutionnelles
 * (Google, CNIL, Légifrance, référentiels publics) gardent leur dofollow.
 */
const COMPETITOR_HOSTS: Record<string, string[]> = {
  "prix-gestion-google-ads": [
    "www.ms-web.fr",
    "www.ad-works.fr",
    "www.dpmedias.com",
  ],
};

describe("liens sortants commerciaux des guides", () => {
  it("n'envoie aucun signal de classement à un concurrent cité", () => {
    for (const [slug, hosts] of Object.entries(COMPETITOR_HOSTS)) {
      const source = sources.get(slug) ?? "";
      expect(source, `${slug} : guide absent du corpus publié`).not.toBe("");

      for (const host of hosts) {
        const occurrences = [
          ...source.matchAll(
            new RegExp(`https://${host.replace(/\./g, "\\.")}[^"]*`, "g"),
          ),
        ];
        expect(
          occurrences.length,
          `${slug} : ${host} n'est plus cité, mettez à jour COMPETITOR_HOSTS`,
        ).toBeGreaterThan(0);
      }

      // Chaque `<a>` sortant vers un concurrent porte nofollow dans le corps…
      for (const anchor of source.matchAll(/<a\b[\s\S]*?>/g)) {
        const tag = anchor[0];
        if (!hosts.some((host) => tag.includes(host))) continue;
        expect(tag, `${slug} : lien concurrent dofollow`).toContain("nofollow");
      }

      // …et l'entrée correspondante du bloc « sources » est marquée nofollow.
      for (const entry of source.matchAll(
        /\{\s*source: "[^"]+",\s*href: "([^"]+)",([\s\S]*?)\n {10}\}/g,
      )) {
        if (!hosts.some((host) => entry[1].includes(host))) continue;
        expect(
          entry[2],
          `${slug} : source concurrente ${entry[1]} sans nofollow`,
        ).toContain("nofollow: true");
      }
    }
  });
});

/* ──────────────────────────────────────────────
   Hub éditorial
   ────────────────────────────────────────────── */

const hubSource = readFileSync(
  path.join(repositoryRoot, "src/components/guides/GuidesHubPage.tsx"),
  "utf8",
);

/**
 * Vocabulaire commercial qu'une collection ne peut promettre que si au moins
 * un de ses guides le traite réellement. La liste reste courte et volontaire :
 * ce sont les mots qui font cliquer un visiteur venu d'une annonce payante.
 */
const PROMISE_WORDS = [
  "audit",
  "prix",
  "budget",
  "mesure",
  "diagnostic",
  "comparai",
  "calcul",
  "aide",
];

function fold(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

interface HubCollection {
  section: string;
  text: string;
  laneText: string;
}

function hubCollections(): HubCollection[] {
  const blocks = [
    ...hubSource.matchAll(
      /section: "([^"]+)",[\s\S]*?text: "([^"]+)",\n\s*laneText: "([^"]+)",/g,
    ),
  ];
  return blocks.map((block) => ({
    section: block[1],
    text: block[2],
    laneText: block[3],
  }));
}

describe("hub des guides", () => {
  it("n'annonce pas au visiteur une bibliothèque en chantier", () => {
    // La reconstruction guide par guide est vraie, mais c'est une information
    // de production : placée en tête du héros, elle amoindrit le corpus
    // devant un visiteur arrivé par une annonce payante.
    const heroSubtitle =
      hubSource.match(/<p className="ghub-hero-sub">([\s\S]*?)<\/p>/)?.[1] ?? "";

    expect(heroSubtitle.trim()).not.toBe("");
    expect(fold(heroSubtitle)).not.toContain("reconstruisons");
    expect(fold(heroSubtitle)).not.toContain("en chantier");
  });

  /**
   * Visuel de l'encart « Essentiel ».
   *
   * Il décrivait un seul guide — « sept réponses possibles », « 5 portes
   * bloquantes », « juillet 2026 » — alors que la mise en avant est portée par
   * le drapeau `featured` du registre : changer de guide mis en avant laissait
   * en place trois affirmations devenues fausses, sur la page qui reçoit les
   * clics d'annonces. Le visuel ne porte donc plus que la promesse éditoriale
   * du hub, et sa seule donnée variable vient du registre.
   */
  const featuredVisual = (() => {
    const start = hubSource.indexOf('className="ghub-featured-viz"');
    const end = hubSource.indexOf("</Link>", start);
    return start === -1 || end === -1 ? "" : hubSource.slice(start, end);
  })();

  const NUMBER_WORDS =
    /\b(deux|trois|quatre|cinq|six|sept|huit|neuf|dix|onze|douze)\b/i;

  it("ne fige dans le visuel mis en avant aucun décompte propre à un guide", () => {
    expect(featuredVisual).not.toBe("");

    const pathLabels = [
      ...(hubSource
        .match(/const METHOD_PATH = \[([\s\S]*?)\n\];/)?.[1]
        ?.matchAll(/(?:label|value): "([^"]+)"/g) ?? []),
    ].map((match) => match[1]);
    const floatLabels = [...featuredVisual.matchAll(/<b>([^<{]+)<\/b>/g)].map(
      (match) => match[1].trim(),
    );

    expect(pathLabels.length).toBeGreaterThan(0);
    expect(floatLabels.length).toBeGreaterThan(0);

    for (const label of [...pathLabels, ...floatLabels]) {
      expect(label, `« ${label} » : décompte figé dans le visuel`).not.toMatch(
        /\d/,
      );
      expect(label, `« ${label} » : décompte figé dans le visuel`).not.toMatch(
        NUMBER_WORDS,
      );
    }
  });

  it("date le visuel depuis le guide mis en avant, pas en dur", () => {
    expect(PUBLISHED_GUIDES.filter((guide) => guide.featured)).toHaveLength(1);
    expect(featuredVisual).toContain(
      "monthAndYear(featuredGuide.dateModified)",
    );
    // Aucune date littérale ne subsiste dans la page du hub : elle survivrait
    // au changement du guide mis en avant.
    expect(
      hubSource.replace(/\/\*[\s\S]*?\*\/|\/\/[^\n]*/g, " "),
    ).not.toMatch(
      /\b(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)\s+20\d{2}\b/i,
    );
  });

  it("n'annonce dans une collection réduite que ce que ses guides traitent", () => {
    const collections = hubCollections();
    expect(collections.length).toBeGreaterThan(0);

    for (const collection of collections) {
      const guides = PUBLISHED_GUIDES.filter(
        (guide) => guide.section === collection.section,
      );
      // Une collection sans guide n'est pas affichée ; au-delà de deux guides,
      // la promesse redevient une synthèse éditoriale légitime.
      if (guides.length === 0 || guides.length >= 2) continue;

      const corpus = fold(
        guides
          .map(
            (guide) =>
              [
                guide.title,
                guide.cardTitle,
                guide.metaDescription,
                guide.cardDescription,
                guide.heroTitle,
                sources.get(guide.slug) ?? "",
              ].join(" "),
          )
          .join(" "),
      );
      const promised = fold(`${collection.text} ${collection.laneText}`);

      for (const word of PROMISE_WORDS) {
        if (!promised.includes(word)) continue;
        expect(
          corpus.includes(word),
          `collection « ${collection.section} » : promet « ${word} » alors qu'aucun de ses ${guides.length} guide(s) ne le traite`,
        ).toBe(true);
      }
    }
  });
});

/* ──────────────────────────────────────────────
   Outils interactifs des guides — confort tactile
   ────────────────────────────────────────────── */

/**
 * iOS Safari — et iOS Chrome, qui partage WebKit — zoome la page dès qu'un
 * champ prend le focus avec une taille calculée sous 16 px, et ne dézoome
 * jamais ensuite. `src/app/globals.css` pose déjà un garde-fou global sur le
 * tactile, avec une spécificité supérieure aux utilitaires Tailwind. Les outils
 * des guides portent en plus la correction explicite `text-base sm:text-sm` :
 * un outil recopié depuis un ancien fichier réintroduirait sinon un `text-sm`
 * seul, invisible tant que le garde-fou global tient — et le premier
 * remaniement de `globals.css` rouvrirait la régression sur les pages qui
 * reçoivent les clics d'annonces.
 */
const guideToolSources = readdirSync(guidesDirectory, {
  recursive: true,
  withFileTypes: true,
})
  .filter(
    (entry) =>
      entry.isFile() &&
      entry.name.endsWith(".tsx") &&
      !entry.name.endsWith(".test.tsx"),
  )
  .map((entry) => {
    const absolute = path.join(entry.parentPath, entry.name);
    return {
      relative: path.relative(repositoryRoot, absolute),
      source: readFileSync(absolute, "utf8"),
    };
  });

/** Fin de la balise ouvrante, en ignorant les `>` des expressions JSX. */
function jsxTagEnd(source: string, start: number): number {
  let depth = 0;
  let quote: string | null = null;

  for (let index = start; index < source.length; index += 1) {
    const character = source[index];
    if (quote) {
      if (character === quote && source[index - 1] !== "\\") quote = null;
      continue;
    }
    if (character === '"' || character === "'" || character === "`") {
      quote = character;
      continue;
    }
    if (character === "{") depth += 1;
    else if (character === "}") depth -= 1;
    else if (character === ">" && depth === 0) return index;
  }
  return -1;
}

/** Classes appliquées à un contrôle, constantes partagées résolues. */
function controlClasses(source: string, tag: string): string {
  const literal = /className="([^"]*)"/.exec(tag);
  if (literal) return literal[1];

  const expression = /className=\{([\s\S]*?)\}\s*$/.exec(tag.slice(0, -1));
  if (!expression) return "";

  return [...expression[1].matchAll(/\b([A-Za-z_$][\w$]*)\b/g)]
    .map(
      (identifier) =>
        new RegExp(`const ${identifier[1]} =\\s*"([^"]*)";`).exec(source)?.[1] ??
        "",
    )
    .join(" ");
}

describe("confort tactile des outils de guides", () => {
  it("ne laisse aucun champ sous 16 px au focus sur téléphone", () => {
    let inspected = 0;

    for (const { relative, source } of guideToolSources) {
      for (const opening of source.matchAll(/<(input|textarea|select)\b/g)) {
        const end = jsxTagEnd(source, opening.index);
        if (end === -1) continue;

        const classes = controlClasses(
          source,
          source.slice(opening.index, end + 1),
        );
        if (!/\btext-sm\b/.test(classes)) continue;
        inspected += 1;

        const line = source.slice(0, opening.index).split("\n").length;
        expect(
          classes,
          `${relative}:${line} <${opening[1]}> : text-sm sans repli text-base`,
        ).toMatch(/\btext-base sm:text-sm\b/);
      }
    }

    // Sans cette borne, un changement de mise en forme ferait échouer la
    // lecture des balises et le test passerait à vide. Seuil ramené de 40 à 25
    // le 28/08/2026 : le corpus est passé de 18 à 9 guides, donc le nombre de
    // balises relues a mécaniquement baissé (34 à la mesure).
    expect(inspected, "aucun contrôle relu").toBeGreaterThan(25);
  });
});
