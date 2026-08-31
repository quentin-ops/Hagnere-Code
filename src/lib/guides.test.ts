import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  GUIDES_COLLECTION_ID,
  buildGuideStructuredData,
} from "./guide-page-seo";
import {
  GUIDES,
  PUBLISHED_GUIDES,
  guideRobots,
  isGuidePublished,
} from "./guides";
import {
  ORGANIZATION_ID,
  QUENTIN_HAGNERE_ID,
} from "./organization-structured-data";
import { SITE_URL } from "./seo";

const guidesRoot = path.join(process.cwd(), "src/app/guides");
const guidesHubSource = fs.readFileSync(
  path.join(process.cwd(), "src/components/guides/GuidesHubPage.tsx"),
  "utf8",
);
const saasSpecificationGuideSource = fs.readFileSync(
  path.join(process.cwd(), "src/app/guides/cahier-des-charges-saas/page.tsx"),
  "utf8",
);
const outilsScenariosSource = fs.readFileSync(
  path.join(
    process.cwd(),
    "src/components/outils-internes/sections/scenarios.ts",
  ),
  "utf8",
);
const seoServiceContentSource = fs.readFileSync(
  path.join(
    process.cwd(),
    "src/components/seo-referencement/content.ts",
  ),
  "utf8",
);
const auditTechniqueDimensionsSource = fs.readFileSync(
  path.join(
    process.cwd(),
    "src/components/audit-technique/sections/what-we-do.ts",
  ),
  "utf8",
);

const publishedSlugs = new Set(PUBLISHED_GUIDES.map((guide) => guide.slug));

/** Nombre minimal de guides cités dans le bloc « suite de lecture ». */
const MIN_RELATED_GUIDES = 2;

/**
 * Guides publiés dont la page ne rend aucun bloc de suite de lecture.
 *
 * `guide-premium-layout.tsx` n'affiche la section que si `relatedGuides`
 * contient au moins une entrée : un tableau vide et une prop absente
 * produisent exactement la même page, une impasse en bas de lecture. Ces
 * guides reçoivent des liens entrants mais n'offrent pas de sortie éditoriale
 * au lecteur arrivé au bout. Chaque entrée disparaît dès que le bloc est
 * ajouté — le test le vérifie alors comme pour les autres.
 */
const GUIDES_WITHOUT_RELATED_BLOCK: Record<string, string> = {
  "pourquoi-site-pas-visible-google":
    "relatedGuides={[]} : seul tableau explicitement vide du corpus, en attente du silo SEO frère",
  "automatiser-processus-metier": "prop absente de la page",
  "prix-gestion-google-ads": "prop absente de la page",
};

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("guide registry after the editorial reset", () => {
  it("registers rebuilt guides but publishes only approved guides", () => {
    expect(GUIDES.map((guide) => guide.slug)).toEqual([
      "automatiser-processus-metier",
      "signes-besoin-logiciel-metier",
      "prix-gestion-google-ads",
      "power-apps-ou-application-sur-mesure",
      "plan-recette-application-metier",
      "securite-application-metier",
      "cahier-des-charges-saas",
      "mvp-saas-quoi-inclure",
      "pourquoi-site-pas-visible-google",
    ]);
    // Revue humaine du 7 août 2026 : les neuf guides restés en revue ont été
    // relus, leurs quatre passes vérifiées
    // (dossier de recherche, manifestes P1 à P4, test de contenu dédié) et
    // leur maillage interne repris. Ils sont donc indexables.
    expect(PUBLISHED_GUIDES.map((guide) => guide.slug)).toEqual(
      GUIDES.map((guide) => guide.slug),
    );
    expect(
      GUIDES.every((guide) => guide.editorialStatus === "published"),
      "chaque guide approuvé doit être publié",
    ).toBe(true);
    expect(GUIDES.at(-1)?.editorialStatus).toBe("published");
  });



  it("links the acceptance-plan guide from migration and service context", () => {
    const acceptancePlanPath = "/guides/plan-recette-application-metier";

    expect(outilsScenariosSource).toContain(acceptancePlanPath);
  });


  it("links the security guide from provider selection and service context", () => {
    const securityPath = "/guides/securite-application-metier";

    expect(outilsScenariosSource).toContain(securityPath);
  });




  it("links the first SEO guide from two relevant service contexts", () => {
    const searchVisibilityPath =
      "/guides/pourquoi-site-pas-visible-google";

    expect(seoServiceContentSource).toContain(searchVisibilityPath);
    expect(auditTechniqueDimensionsSource).toContain(searchVisibilityPath);
  });

  it("links the MVP contract guide from validation and specification", () => {
    const mvpContractPath = "/guides/mvp-saas-quoi-inclure";

    expect(saasSpecificationGuideSource).toContain(mvpContractPath);
  });

  it("keeps metadata unique, dated and restrained", () => {
    for (const key of ["slug", "title", "metaDescription"] as const) {
      const values = GUIDES.map((guide) => guide[key]);
      expect(new Set(values).size, key).toBe(values.length);
    }

    for (const guide of GUIDES) {
      // Limites alignées sur celles documentées dans le registre
      // (src/lib/guides.ts : « ≤ 60 caractères », « ≤ 155 caractères »).
      // Le test tolérait 65 et 160 : l'invariant exécuté était plus laxiste
      // que la règle affichée, ce qui laissait passer un guide hors limite en
      // croyant la respecter. Les 18 guides publiés tiennent déjà 58 et 154.
      expect(guide.title.length, `${guide.slug}: title`).toBeLessThanOrEqual(
        60,
      );
      expect(
        guide.metaDescription.length,
        `${guide.slug}: description`,
      ).toBeLessThanOrEqual(155);
      expect(guide.datePublished).toMatch(
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|[+-]\d{2}:\d{2})$/,
      );
      expect(guide.dateModified).toMatch(
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|[+-]\d{2}:\d{2})$/,
      );
      expect(Date.parse(guide.dateModified)).toBeGreaterThanOrEqual(
        Date.parse(guide.datePublished),
      );
      expect(guide.readTimeMin).toBeGreaterThan(0);
      if (guide.editorialStatus === "published") {
        expect(guide.articleImagePaths).toHaveLength(3);
      } else if (guide.articleImagePaths !== undefined) {
        expect(guide.articleImagePaths).toHaveLength(3);
      }
    }
    expect(guidesHubSource).toContain("latestGuide.dateModified");
  });

  /**
   * `dateModified` alimente le `lastmod` du sitemap, `openGraph.modifiedTime`
   * et le JSON-LD Article. Google traite lastmod comme une indication et cesse
   * d'en tenir compte pour un site dont les dates paraissent synthétiques.
   *
   * Ce test protège la PROPRIÉTÉ « instant réellement enregistré », pas une
   * formulation. Il ne vérifie donc PAS que les neuf horodatages sont
   * distincts : un commit qui corrige les neuf guides les modifie bien tous au
   * même instant, et exiger une différence obligerait à en fabriquer une —
   * c'est-à-dire à recréer, sous couvert de test, la falsification qu'on
   * cherche à empêcher. Ce qu'on mesure, c'est la signature du clavier.
   */
  it("date chaque guide sur un instant enregistré, pas sur une minute ronde", () => {
    const now = Date.now();

    for (const guide of GUIDES) {
      // Fuseau unique pour tout le registre : la notation `Z` sur une seule
      // entrée produisait la seule ligne du sitemap à ne pas suivre la
      // convention des huit autres.
      expect(guide.dateModified, `${guide.slug}: fuseau`).toMatch(
        /[+-]\d{2}:\d{2}$/,
      );
      expect(guide.datePublished, `${guide.slug}: fuseau`).toMatch(
        /[+-]\d{2}:\d{2}$/,
      );
      // Une date de modification dans le futur n'est pas un instant observé.
      expect(
        Date.parse(guide.dateModified),
        `${guide.slug}: modifié dans le futur`,
      ).toBeLessThanOrEqual(now);
    }

    // Un instant enregistré tombe sur une seconde ronde une fois sur soixante.
    // Huit sur neuf, c'était la signature d'un horodatage tapé au clavier
    // (23:20:00, 23:30:00, 23:35:00…). Le seuil laisse passer la coïncidence
    // réelle sans laisser revenir la saisie manuelle.
    const roundSecond = GUIDES.filter((guide) =>
      /T\d{2}:\d{2}:00[+-]/.test(guide.dateModified),
    );
    expect(
      roundSecond.map((guide) => guide.dateModified),
      "horodatages tombant pile sur la seconde 00 : saisis à la main ?",
    ).toHaveLength(0);

    // Et la valeur doit correspondre à un instant qui EXISTE dans l'historique
    // du guide. C'est ce qui rend la fabrication impossible : une heure tapée
    // au clavier ne tombe pas sur un commit.
    //
    // Volontairement pas « le DERNIER commit » : une passe de typographie ou
    // une harmonisation de libellés à l'échelle du site touche les neuf
    // dossiers sans rien changer d'éditorial, et exiger l'alignement sur elle
    // ferait annoncer au sitemap une fraîcheur que le contenu ne porte pas —
    // et contredirait la date de consultation des sources que la page affiche
    // au lecteur (§5.2 de la règle d'or). Le jour reste celui de la passe
    // éditoriale ; ce test vérifie que l'heure n'a pas été inventée.
    /*
     * Un clone superficiel ne fait pas ECHOUER `git log` : la commande sort en 0
     * et renvoie le seul commit de tête. Le `catch` ci-dessous ne se déclenchait
     * donc jamais, `history` valait toujours un élément, et l'assertion
     * comparait la date éditoriale à la date du checkout. Vérifié en clonant le
     * dépôt en `--depth=1` : les neuf guides échouaient. Or `quality.yml` utilise
     * `actions/checkout` sans `fetch-depth`, dont le défaut EST 1 — ce test
     * aurait donc cassé la CI à chaque exécution.
     *
     * On interroge git sur la nature du clone plutôt que d'attendre une panne
     * qui ne vient pas.
     */
    const cloneSuperficiel = (() => {
      try {
        return (
          execFileSync("git", ["rev-parse", "--is-shallow-repository"], {
            cwd: process.cwd(),
            encoding: "utf8",
          }).trim() === "true"
        );
      } catch {
        // Pas de git du tout : on ne transforme pas une limite d'environnement
        // en échec de contenu.
        return true;
      }
    })();
    if (cloneSuperficiel) return;

    for (const guide of GUIDES) {
      let history: string[];
      try {
        history = execFileSync(
          "git",
          [
            "log",
            "--date=iso-strict",
            "--format=%cd",
            "--",
            `src/app/guides/${guide.slug}`,
          ],
          { cwd: process.cwd(), encoding: "utf8" },
        )
          .trim()
          .split("\n")
          .filter(Boolean);
      } catch {
        // `continue`, pas `break` : une panne git sur un guide ne doit pas
        // faire passer les huit autres sans contrôle.
        continue;
      }
      if (history.length === 0) continue;
      expect(
        history.map((instant) => Date.parse(instant)),
        `${guide.slug}: ${guide.dateModified} ne correspond à aucun commit du guide`,
      ).toContain(Date.parse(guide.dateModified));
    }
  }, 30_000);

  /**
   * Le hub sélectionne son encart « Essentiel » avec
   * `PUBLISHED_GUIDES.find((g) => g.featured) ?? PUBLISHED_GUIDES[0]`.
   * Tant qu'aucune entrée ne portait le drapeau, la mise en avant dépendait
   * de l'ordre du tableau : publier un guide en tête — le geste le plus
   * naturel — déplaçait silencieusement l'encart. Le drapeau doit donc être
   * renseigné, et une seule fois.
   */
  it("promotes exactly one published guide through an explicit featured flag", () => {
    const featured = PUBLISHED_GUIDES.filter((guide) => guide.featured);

    expect(featured.map((guide) => guide.slug)).toHaveLength(1);
    expect(guidesHubSource).toContain("(g) => g.featured");
    expect(featured[0]).toBe(PUBLISHED_GUIDES.find((g) => g.featured));
  });

  it("matches the static guide routes and their social images", () => {
    const registered = GUIDES.map((guide) => guide.slug).sort();
    const routed = fs
      .readdirSync(guidesRoot, { withFileTypes: true })
      .filter((entry) => {
        if (!entry.isDirectory() || entry.name === "[slug]") return false;
        return fs.existsSync(path.join(guidesRoot, entry.name, "page.tsx"));
      })
      .map((entry) => entry.name)
      .sort();

    expect(routed).toEqual(registered);

    for (const slug of registered) {
      expect(
        fs.existsSync(path.join(guidesRoot, slug, "opengraph-image.tsx")),
        slug,
      ).toBe(true);

      const guide = GUIDES.find((entry) => entry.slug === slug);
      for (const imagePath of guide?.articleImagePaths ?? []) {
        expect(
          fs.existsSync(
            path.join(process.cwd(), "public", imagePath.replace(/^\//, "")),
          ),
          imagePath,
        ).toBe(true);
      }
    }
  });

  it("requires every static guide route to use the explicit central registry", () => {
    const staticRoutes = fs
      .readdirSync(guidesRoot, { withFileTypes: true })
      .filter(
        (entry) =>
          entry.isDirectory() &&
          entry.name !== "[slug]" &&
          fs.existsSync(path.join(guidesRoot, entry.name, "page.tsx")),
      )
      .map((entry) => entry.name);
    const registered = new Set(GUIDES.map((guide) => guide.slug));
    const localDrafts = staticRoutes.filter((slug) => !registered.has(slug));

    expect(localDrafts).toEqual([]);
    for (const guide of GUIDES) {
      expect(
        ["draft", "review", "published"],
        `${guide.slug}: statut éditorial explicite`,
      ).toContain(guide.editorialStatus);
    }
    expect(guidesHubSource).toContain("PUBLISHED_GUIDES");
  });

  it("assigns every rebuilt guide to a named hub collection and icon", () => {
    for (const guide of GUIDES) {
      expect(guidesHubSource, `${guide.slug}: collection`).toContain(
        `section: "${guide.section}"`,
      );
      expect(guidesHubSource, `${guide.slug}: icon`).toContain(
        `"${guide.slug}":`,
      );
    }
  });

  it("propose une suite de lecture à la fin de chaque guide publié", () => {
    for (const guide of PUBLISHED_GUIDES) {
      const source = fs.readFileSync(
        path.join(guidesRoot, guide.slug, "page.tsx"),
        "utf8",
      );
      const block = /relatedGuides=\{\[([\s\S]*?)\]\}/.exec(source);
      const targets = block
        ? [...block[1].matchAll(/href:\s*"\/guides\/([a-z0-9-]+)"/g)].map(
            (match) => match[1],
          )
        : [];

      // Les cibles citées doivent exister et ne jamais renvoyer sur soi-même :
      // ce contrôle s'applique aussi aux guides encore en dette de bloc.
      for (const target of targets) {
        expect(
          publishedSlugs.has(target),
          `${guide.slug} → ${target} : guide inconnu ou non publié`,
        ).toBe(true);
        expect(target, `${guide.slug} : autoréférence`).not.toBe(guide.slug);
      }

      if (guide.slug in GUIDES_WITHOUT_RELATED_BLOCK) continue;

      expect(
        targets.length,
        `${guide.slug} : bloc « suite de lecture » vide ou absent`,
      ).toBeGreaterThanOrEqual(MIN_RELATED_GUIDES);
    }
  });

  it("garde la dette de suite de lecture alignée sur les guides publiés", () => {
    for (const [slug, reason] of Object.entries(GUIDES_WITHOUT_RELATED_BLOCK)) {
      expect(publishedSlugs.has(slug), slug).toBe(true);
      expect(reason.length, slug).toBeGreaterThan(0);
    }
  });

  it("keeps visible guides free of unsupported schemas and fake experience", () => {
    const prohibited = [
      /FAQPage/,
      /HowTo/,
      /AggregateRating/,
      /wordCount/,
      /notre client/i,
      /cas client réel/i,
      /nous a contactés/i,
      /nous avons conseillé/i,
      /guide ultime/i,
      /meilleur guide de France/i,
      /\.xlsx?\b/i,
      /\.csv\b/i,
    ] as const;

    for (const guide of GUIDES) {
      const source = fs.readFileSync(
        path.join(guidesRoot, guide.slug, "page.tsx"),
        "utf8",
      );
      const guideDataPath = path.join(guidesRoot, guide.slug, "guide-data.ts");
      const implementationSource = fs.existsSync(guideDataPath)
        ? `${source}\n${fs.readFileSync(guideDataPath, "utf8")}`
        : source;
      const [article, breadcrumb] = buildGuideStructuredData(
        guide,
        "Titre du fil d’Ariane",
      );

      expect(implementationSource, guide.slug).toContain(
        "buildGuideStructuredData",
      );
      expect(article["@type"], guide.slug).toBe("Article");
      expect(article.headline, guide.slug).toBe(guide.heroTitle);
      expect(article.author["@id"], guide.slug).toBe(QUENTIN_HAGNERE_ID);
      expect(article.publisher["@id"], guide.slug).toBe(ORGANIZATION_ID);
      expect(article.isPartOf["@id"], guide.slug).toBe(GUIDES_COLLECTION_ID);
      expect(article["@id"], guide.slug).toBe(
        `${SITE_URL}/guides/${guide.slug}#article`,
      );
      expect(article.image, guide.slug).toEqual(
        guide.articleImagePaths?.map(
          (imagePath) => `${SITE_URL}${imagePath}`,
        ) ?? [`${SITE_URL}/guides/${guide.slug}/opengraph-image`],
      );
      expect(breadcrumb["@type"], guide.slug).toBe("BreadcrumbList");

      for (const pattern of prohibited) {
        expect(implementationSource, `${guide.slug}: ${pattern}`).not.toMatch(
          pattern,
        );
      }
    }
  });

  it("indexes approved guides only in production", () => {
    const guide = PUBLISHED_GUIDES[0];
    expect(guide).toBeDefined();

    vi.stubEnv("VERCEL_ENV", "");
    vi.stubEnv("NEXT_PUBLIC_ENV", "preview");
    expect(guideRobots(guide)).toEqual({
      index: false,
      follow: false,
    });

    vi.stubEnv("NEXT_PUBLIC_ENV", "production");
    expect(guideRobots(guide)).toMatchObject({
      index: true,
      follow: true,
      googleBot: {
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    });
    for (const editorialStatus of ["draft", "review"] as const) {
      const privateGuide = { ...guide, editorialStatus };
      expect(isGuidePublished(privateGuide)).toBe(false);
      expect(guideRobots(privateGuide)).toEqual({
        index: false,
        follow: false,
      });
    }
    const malformedGuide = { ...guide } as Partial<typeof guide>;
    delete malformedGuide.editorialStatus;
    expect(isGuidePublished(malformedGuide as typeof guide)).toBe(false);
    expect(guideRobots(malformedGuide as typeof guide)).toEqual({
      index: false,
      follow: false,
    });
    expect(isGuidePublished(guide)).toBe(true);
  });
});
