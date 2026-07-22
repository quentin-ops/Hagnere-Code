import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getGuide, GUIDES } from "./guides";

const flagshipPath = join(
  process.cwd(),
  "src/app/guides/seo-ou-google-ads/page.tsx",
);

const flagshipSource = readFileSync(flagshipPath, "utf8");

const guideSources = GUIDES.map((guide) => ({
  guide,
  source: readFileSync(
    join(process.cwd(), "src/app/guides", guide.slug, "page.tsx"),
    "utf8",
  ),
}));

const july22PublicationSlugs = new Set([
  "landing-page-ou-site-vitrine",
  "combien-de-temps-resultats-seo",
  "positions-google-baissent",
  "combien-de-temps-developper-saas",
  "connecter-erp-crm-logiciel-metier",
  "automatiser-saisie-donnees-entreprise",
  "mvp-prototype-ou-poc",
  "site-internet-en-panne-que-faire",
  "leads-google-ads-non-qualifies",
  "migrer-logiciel-metier-sans-interruption",
  "application-gestion-interventions-terrain",
  "agence-saas-ou-freelance",
  "reprendre-maintenance-site-autre-agence",
  "choisir-agence-google-ads",
  "choisir-agence-seo",
  "landing-page-google-ads",
  "suivi-conversions-google-ads",
  "pourquoi-site-pas-visible-google",
  "cout-maintenance-application-metier",
  "reprendre-saas-developpe-par-freelance",
  "choisir-prestataire-application-metier",
  "cahier-des-charges-saas",
  "budget-google-ads-pme",
  "remplacer-microsoft-access-application-web",
  "preparer-contenus-site-vitrine",
]);

const rejectedFramework =
  /contrainte qui commande|contrainte dominante|portes non compensables|cinq portes|prochaine preuve|matrice d['’]arbitrage|tranche verticale|socles chiffrés|chaîne jusqu['’]au résultat métier|comité d['’]investissement|report ciblé/i;

const consultantJargon =
  /\b(cadrage|périmètre|preuve|socle|arbitrage|gouvernance|réversibilité|criticité|recette|jalon|livrable|trajectoire|activation)\b/i;

function visibleWords(source: string): string[] {
  return source
    .replace(/<[^>]+>/g, " ")
    .replace(/\{[^}]*\}/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

describe("human language guardrails for guides", () => {
  it("keeps the landing-page choice hierarchical and useful to a manager", () => {
    const landingChoiceSource = guideSources.find(
      ({ guide }) => guide.slug === "landing-page-ou-site-vitrine",
    )?.source;

    expect(landingChoiceSource).toMatch(
      /Vous lancez une offre[\s\S]*une page dédiée peut suffire[\s\S]*faire partie de votre site[\s\S]*conserver ou corriger une page déjà publiée/i,
    );
    expect(landingChoiceSource).toContain(
      "Conserver ou améliorer une page existante",
    );
    expect(landingChoiceSource).toContain("Créer une page dédiée");
    expect(landingChoiceSource).toContain(
      "Développer ou réorganiser un site vitrine",
    );
    expect(landingChoiceSource).toContain("DURÉE — UNE SEULE CASE :");
    expect(landingChoiceSource).toContain("EMPLACEMENT — UNE SEULE CASE :");
    expect(landingChoiceSource).toContain("CONDITION D’ARRÊT :");
    expect(landingChoiceSource).toMatch(
      /Un contenu temporaire peut rester dans le site\s+principal[\s\S]*Un\s+mini-site peut[\s\S]*être durable/i,
    );
    expect(landingChoiceSource).toContain("Exemples entièrement fictifs");
    expect(landingChoiceSource).toContain(
      "Conserver l’adresse et améliorer seulement la page existante",
    );
    expect(landingChoiceSource).toContain(
      "Créer une page dédiée dans le site existant",
    );
    expect(landingChoiceSource).toContain(
      "Développer ou réorganiser le site avec plusieurs pages dédiées",
    );
    expect(landingChoiceSource).toContain("showSidebarCta={false}");
    expect(landingChoiceSource).toContain(
      'title="Faire relire mon choix de pages"',
    );
    expect(landingChoiceSource?.match(/<GuideInlineCTA/g)).toHaveLength(1);
    expect(landingChoiceSource).not.toMatch(
      /convertit forcément mieux|meilleur pour le SEO|classement garanti|taux de conversion garanti par/i,
    );
    expect(landingChoiceSource).not.toContain("Elle ne paie pas deux fois");
    expect(landingChoiceSource).not.toContain(
      "[ ] page temporaire, avec date de fin",
    );
    expect(landingChoiceSource).toMatch(
      /contrainte impose la séparation[\s\S]*identité et(?: son| le)?\s*public[\s\S]*responsable et(?: sa| une)?\s*durée de vie/i,
    );

    const landingOgSource = readFileSync(
      join(
        process.cwd(),
        "src/app/guides/landing-page-ou-site-vitrine/opengraph-image.tsx",
      ),
      "utf8",
    );
    expect(landingOgSource).not.toMatch(/index\s*===\s*[012]/);
    expect(getGuide("landing-page-ou-site-vitrine").readTimeMin).toBe(19);
  });

  it("keeps the SEO timeline guide tied to observable work and business results", () => {
    const seoTimelineGuide = guideSources.find(
      ({ guide }) => guide.slug === "combien-de-temps-resultats-seo",
    );
    const source = seoTimelineGuide?.source;

    expect(source).toMatch(
      /Vous financez des corrections ou des articles[\s\S]*Il n’existe pas de délai SEO[\s\S]*travail\s+publié[\s\S]*ventes après votre cycle\s+commercial/i,
    );
    [
      "Travail publié",
      "Exploration",
      "Indexation",
      "Impressions",
      "Clics",
      "Contacts qualifiés",
      "Ventes",
    ].forEach((stage) => expect(source).toContain(stage));
    expect(source).toMatch(
      /Elles peuvent[\s\S]*se chevaucher, reculer ou rester impossibles à mesurer[\s\S]*ne[\s\S]*forment pas une promesse/i,
    );
    expect(source).toContain("Vous n’avez pas conservé d’état initial ?");
    expect(source).toContain("plus ancienne période comparable");
    expect(source).toContain("Une ligne à exiger pour chaque changement");
    expect(source).toContain("plusieurs jours, voire plusieurs semaines");
    expect(source).toContain("(8 000 − 5 000) ÷ 5 000 = +60 %");
    expect(source).toContain("(280 − 150) ÷ 150 = +86,7 %");
    expect(source).toContain("150 ÷ 5 000 = 3,0 %");
    expect(source).toContain("(12 − 8) ÷ 8 = +50 %");
    expect(source).toContain("2 − 2 = 0 : aucune hausse observée");
    expect(source).toContain("−1,0476 point");
    expect(source).toContain("−1,05 point après arrondi");
    expect(source).toContain("(8 400 − 6 000) ÷ 6 000 = +40 %");
    expect(source).toMatch(
      /L’écart de 20\s+points[\s\S]*ne prouve pas[\s\S]*Les groupes peuvent viser d’autres recherches/i,
    );
    expect(source).toMatch(
      /90 jours[\s\S]*fenêtre d’observation que[\s\S]*vous choisissez[\s\S]*pas un\s+délai promis par Google/i,
    );
    expect(source).toContain(
      "Date de début et date de fin choisies pour cette fenêtre :",
    );
    expect(source).toMatch(
      /ne décrit ni un client réel ni un cas client Hagnéré Code/i,
    );
    expect(source).toMatch(
      /Une demande a terminé votre cycle commercial par une vente conclue[\s\S]*Un refus connu[\s\S]*ne sont pas des ventes/i,
    );
    [
      "A. La décision économique",
      "B. L’état de départ",
      "C. Les changements réellement publiés",
      "D. Les événements observés",
      "E. La lecture Search Console",
      "F. La lecture commerciale",
      "G. La décision suivante",
    ].forEach((section) => expect(source).toContain(section));
    expect(source).toContain("Poursuivre");
    expect(source).toContain("Corriger");
    expect(source).toContain("Réduire ou reporter");
    expect(source).toContain("Arrêter une action précise");
    expect(source).toContain("Notre intérêt commercial est à connaître");
    expect(source).toContain("showSidebarCta={false}");
    expect(source).toContain(
      'title="Vérifier si mon investissement SEO avance vraiment"',
    );
    expect(source).toContain('ctaHref="/demarrer-un-projet"');
    expect(source?.match(/<GuideInlineCTA/g)).toHaveLength(1);
    expect(source).not.toMatch(
      /délai garanti|classement garanti|résultat significatif|maturité SEO|traction organique/i,
    );
  });

  it("keeps the positions drop guide measurable without inventing a cause", () => {
    const positionsGuide = guideSources.find(
      ({ guide }) => guide.slug === "positions-google-baissent",
    );
    const source = positionsGuide?.source;

    expect(source).toMatch(
      /Vos clics Google baissent[\s\S]*Ne changez rien à grande échelle[\s\S]*exactement les mêmes filtres/i,
    );
    expect(source).toContain("Exemple illustratif entièrement fictif");
    expect(source).toContain("(18 000 − 24 000) ÷ 24 000 = −25 %");
    expect(source).toContain("(288 − 480) ÷ 480 = −40 %");
    expect(source).toContain("−0,4 point, soit −20 % en relatif");
    expect(source).toContain(
      "+2,6 : le nombre augmente, donc la place moyenne est moins bonne",
    );
    expect(source).toContain("96 + 96 = 192 clics");
    expect(source).toContain("120 + 72 = 192 clics");
    expect(source).toContain(
      "La perte totale de 192 clics est la seule valeur identique",
    );
    expect(source).toMatch(
      /filtre marque\/hors marque[\s\S]*mars 2025[\s\S]*peut classer certaines recherches[\s\S]*imparfaitement/i,
    );
    expect(source).toMatch(
      /rapport sur l’IA générative[\s\S]*partie des propriétés[\s\S]*déjà incluses dans le total\s+Web/i,
    );
    expect(source).toMatch(
      /masque les recherches anonymisées[\s\S]*ne présentez pas leur somme comme l’ensemble exact/i,
    );
    expect(source).toMatch(
      /clics sur un résultat Google conduisant vers le site/i,
    );
    expect(source).toMatch(
      /mise à jour principale en[\s\S]*achevée depuis moins d’une semaine[\s\S]*fin du déploiement[\s\S]*une semaine complète/i,
    );
    expect(source).toContain("Date du relevé :");
    expect(source).toContain("inconnu");
    expect(source).toContain("showSidebarCta={false}");
    expect(source).toContain(
      'title="Faire vérifier la baisse avant de toucher au site"',
    );
    expect(source).toContain(
      'ctaLabel="Faire vérifier la baisse avant de toucher au site"',
    );
    expect(source).not.toMatch(
      /pénalité algorithmique|perdu\s+2,6\s+positions|récupération garantie/i,
    );
  });

  it("keeps the SaaS timeline guide tied to a result and complete paths", () => {
    const timelineGuide = guideSources.find(
      ({ guide }) => guide.slug === "combien-de-temps-developper-saas",
    );
    const timelineSource = timelineGuide?.source;

    expect(timelineSource).toMatch(
      /Un\s+prestataire annonce huit semaines[\s\S]*un\s+autre plusieurs mois[\s\S]*Impossible de les comparer/i,
    );
    expect(timelineSource).toContain("exemple illustratif entièrement fictif");
    [
      "A → B → D → H → I = 4 + 5 + 10 + 7 + 2 = 28",
      "A → G → D → H → I = 4 + 3 + 10 + 7 + 2 = 26",
      "A → C → E → H → I = 4 + 3 + 5 + 7 + 2 = 21",
      "A → F → H → I     = 4 + 4 + 7 + 2 = 17",
      "A → B → D → P → I = 4 + 5 + 10 + 4 + 2 = 25",
      "A → G → D → P → I = 4 + 3 + 10 + 4 + 2 = 23",
      "A → B → D → H → I = 6 + 7 + 15 + 10 + 3 = 41",
      "A → G → D → H → I = 6 + 5 + 15 + 10 + 3 = 39",
      "A → C → E → H → I = 6 + 6 + 8 + 10 + 3 = 33",
      "A → F → H → I     = 6 + 7 + 10 + 3 = 26",
      "A → B → D → P → I = 6 + 7 + 15 + 6 + 3 = 37",
      "A → G → D → P → I = 6 + 5 + 15 + 6 + 3 = 35",
      "A → B → D → H → I = 8 + 10 + 22 + 15 + 5 = 60",
      "A → G → D → H → I = 8 + 8 + 22 + 15 + 5 = 58",
      "A → C → E → H → I = 8 + 20 + 18 + 15 + 5 = 66",
      "A → F → H → I     = 8 + 12 + 15 + 5 = 40",
      "A → B → D → P → I = 8 + 10 + 22 + 10 + 5 = 55",
      "A → G → D → P → I = 8 + 8 + 22 + 10 + 5 = 53",
    ].forEach((path) => expect(timelineSource).toContain(path));
    expect(timelineSource).toContain('waitsFor: "B et G"');
    expect(timelineSource).toContain('waitsFor: "D, E et F"');
    expect(timelineSource).toContain('waitsFor: "H et P"');
    expect(timelineSource).toMatch(
      /personnes nommées peuvent réellement[\s\S]*mener en parallèle/i,
    );
    expect(timelineSource).toContain(
      "comparer toutes les suites qui mènent à l’ouverture",
    );
    expect(timelineSource).toMatch(
      /jour ouvré fictif 28[\s\S]*jour ouvré fictif 41[\s\S]*jour ouvré fictif 66/i,
    );
    expect(timelineSource).toContain("showSidebarCta={false}");
    expect(timelineSource).toContain("Présenter mon calendrier");
    expect(timelineSource).not.toMatch(
      /durée moyenne|délai garanti|probabilité de livraison|analyse Monte-Carlo/i,
    );
  });

  it("keeps the ERP-CRM guide focused on the manager's concrete conflict", () => {
    const integrationGuide = guideSources.find(
      ({ guide }) => guide.slug === "connecter-erp-crm-logiciel-metier",
    );
    const integrationSource = integrationGuide?.source;

    expect(integrationSource).toMatch(
      /commercial corrige l’adresse d’un client dans le CRM[\s\S]*comptabilité la corrige\s+aussi dans l’ERP[\s\S]*Quelle\s+adresse partira sur la prochaine facture/i,
    );
    expect(integrationSource).toContain("30 affaires × 3 opérations");
    expect(integrationSource).toContain(
      "85 acceptées + 3 refusées + 2 en attente",
    );
    expect(integrationSource).toContain("90 opérations distinctes");
    expect(integrationSource).toContain(
      "Obtenir la carte du flux à fiabiliser",
    );
    expect(integrationSource).not.toMatch(
      /exactly-once|zéro doublon|temps réel garanti|conforme au RGPD/i,
    );
    expect(
      [
        integrationGuide?.guide.title,
        integrationGuide?.guide.cardTitle,
        integrationGuide?.guide.heroTitle,
      ].join(" "),
    ).not.toMatch(/sans doublon|sans propager les erreurs/i);
  });

  it("keeps the data-entry guide grounded in the manager's actual problem", () => {
    const dataEntrySource = guideSources.find(
      ({ guide }) => guide.slug === "automatiser-saisie-donnees-entreprise",
    )?.source;

    expect(dataEntrySource).toMatch(
      /commercial saisit un client[\s\S]*administration recopie[\s\S]*comptabilité retape/,
    );
    expect(dataEntrySource).toMatch(
      /données\s+personnelles réelles de production/,
    );
    expect(dataEntrySource).toContain("Exemple illustratif fictif");
    expect(dataEntrySource).toContain("Faire relire un trajet de ressaisie");
  });

  it("keeps the SEO versus Ads opening in the reader's language", () => {
    expect(flagshipSource).toMatch(
      /Vous cherchez à savoir s’il vaut mieux investir dans le\s+référencement/,
    );
    expect(flagshipSource).toMatch(
      /Google Ads — payer pour afficher des\s+annonces/,
    );
  });

  it("does not reintroduce the rejected consultant framework", () => {
    const rejectedPhrases = [
      "contrainte qui commande",
      "contrainte dominante",
      "cinq portes",
      "portes non compensables",
      "prochaine preuve",
      "matrice d’arbitrage",
      "report ciblé",
      "comité d’investissement",
      "chaîne jusqu’au résultat métier",
    ];

    for (const phrase of rejectedPhrases) {
      expect(flagshipSource.toLowerCase()).not.toContain(phrase.toLowerCase());
    }
  });

  it("keeps every published guide free of the rejected framework", () => {
    for (const { guide, source } of guideSources) {
      expect(source, guide.slug).not.toMatch(rejectedFramework);
    }
  });

  it("gives every guide a short introduction addressed to the reader", () => {
    const readerLanguage =
      /\b(vous|votre|vos|comparez|choisissez|découvrez|vérifiez|prévoyez|ajoutez|distinguez|séparez)\b/i;

    for (const { guide, source } of guideSources) {
      const heroDescription = source.match(/heroDescription="([^"]+)"/)?.[1];

      expect(heroDescription, `${guide.slug}: heroDescription`).toBeDefined();
      expect(heroDescription, `${guide.slug}: reader language`).toMatch(
        readerLanguage,
      );
      expect(
        heroDescription?.length,
        `${guide.slug}: hero length`,
      ).toBeLessThan(330);
    }
  });

  it("starts every article with a direct, reader-facing lead under 150 words", () => {
    const readerLanguage = /\b(vous|votre|vos)\b/i;

    for (const { guide, source } of guideSources) {
      const lead = source.match(/<p className="lead">([\s\S]*?)<\/p>/)?.[1];

      expect(lead, `${guide.slug}: lead`).toBeDefined();
      expect(lead, `${guide.slug}: reader-facing lead`).toMatch(readerLanguage);
      expect(
        visibleWords(lead || "").length,
        `${guide.slug}: lead length`,
      ).toBeLessThanOrEqual(150);
      expect(lead, `${guide.slug}: consultant jargon in lead`).not.toMatch(
        consultantJargon,
      );
    }
  });

  it("keeps the hero free of untranslated consultant language", () => {
    for (const { guide, source } of guideSources) {
      const heroDescription = source.match(/heroDescription="([^"]+)"/)?.[1];

      expect(heroDescription, `${guide.slug}: heroDescription`).toBeDefined();
      expect(
        heroDescription,
        `${guide.slug}: consultant jargon in hero`,
      ).not.toMatch(consultantJargon);
    }
  });

  it("keeps section titles understandable without agency vocabulary", () => {
    for (const { guide, source } of guideSources) {
      const sectionTitles = Array.from(
        source.matchAll(/<h[23]\b[^>]*>([\s\S]*?)<\/h[23]>/g),
        (match) =>
          match[1]
            .replace(/<[^>]+>/g, " ")
            .replace(/\{[^}]*\}/g, " ")
            .replace(/\s+/g, " ")
            .trim(),
      );

      for (const title of sectionTitles) {
        expect(title, `${guide.slug}: section title`).not.toMatch(
          consultantJargon,
        );
      }
    }
  });

  it("does not copy the same opening or section plan between guides", () => {
    const openings = new Map<string, string>();
    const plans = new Map<string, string>();

    for (const { guide, source } of guideSources) {
      const lead = source
        .match(/<p className="lead">([\s\S]*?)<\/p>/)?.[1]
        .replace(/<[^>]+>/g, " ")
        .replace(/\{[^}]*\}/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase();
      const headings = Array.from(
        source.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g),
        (match) =>
          match[1]
            .replace(/<[^>]+>/g, " ")
            .replace(/\{[^}]*\}/g, " ")
            .replace(/^\s*\d+[.)]?\s*/, "")
            .replace(/\s+/g, " ")
            .trim()
            .toLowerCase(),
      ).join(" | ");

      expect(lead, `${guide.slug}: opening`).toBeTruthy();
      expect(headings, `${guide.slug}: section plan`).toBeTruthy();
      expect(
        openings.get(lead || ""),
        `${guide.slug}: copied opening`,
      ).toBeUndefined();
      expect(
        plans.get(headings),
        `${guide.slug}: copied section plan`,
      ).toBeUndefined();

      openings.set(lead || "", guide.slug);
      plans.set(headings, guide.slug);
    }
  });

  it("does not repeat the old mechanical example and contact boilerplate", () => {
    const rejectedBoilerplate =
      /fil rouge|décrivez votre projet en 3 minutes|prochain jour ouvré/i;

    for (const { guide, source } of guideSources) {
      expect(source, guide.slug).not.toMatch(rejectedBoilerplate);
    }
  });

  it("does not impose the same mechanical ending on every guide", () => {
    const rejectedEnding =
      /(?:la réponse|le verdict) en 30 secondes|à retenir\s*:\s*les \d+|décider en cinq (?:étapes|questions)/i;

    for (const { guide, source } of guideSources) {
      expect(source, guide.slug).not.toMatch(rejectedEnding);
    }
  });

  it("keeps editorial pressure proportionate", () => {
    for (const { guide, source } of guideSources) {
      const inlineCtas = source.match(/<GuideInlineCTA\b/g) || [];
      const faqBlock = source.match(
        /const faqItems\s*=\s*\[([\s\S]*?)\n\];/,
      )?.[1];
      const faqCount = faqBlock?.match(/\bquestion:\s*["']/g)?.length || 0;

      expect(faqBlock, `${guide.slug}: FAQ block`).toBeDefined();
      expect(
        inlineCtas.length,
        `${guide.slug}: inline CTAs`,
      ).toBeLessThanOrEqual(1);
      expect(faqCount, `${guide.slug}: FAQ count`).toBeLessThanOrEqual(10);

      if (inlineCtas.length === 1) {
        const ctaIndex = source.indexOf("<GuideInlineCTA");
        const headingsBeforeCta =
          source.slice(0, ctaIndex).match(/<h2\b/g)?.length || 0;
        const headingCount = source.match(/<h2\b/g)?.length || 0;

        expect(
          headingsBeforeCta,
          `${guide.slug}: CTA before sufficient standalone value`,
        ).toBeGreaterThanOrEqual(Math.ceil(headingCount / 2));
      }
    }
  });

  it("keeps search titles, summaries and public cards concise", () => {
    for (const guide of GUIDES) {
      expect(guide.title.length, `${guide.slug}: title`).toBeLessThanOrEqual(
        60,
      );
      expect(
        guide.metaDescription.length,
        `${guide.slug}: meta description`,
      ).toBeLessThanOrEqual(155);
      const expectedReviewDate = july22PublicationSlugs.has(guide.slug)
        ? "2026-07-22"
        : "2026-07-21";
      expect(guide.dateModified, `${guide.slug}: review date`).toBe(
        expectedReviewDate,
      );

      const publicCopy = [
        guide.title,
        guide.cardTitle,
        guide.metaDescription,
        guide.cardDescription,
        guide.heroTitle,
      ].join(" ");

      expect(publicCopy, guide.slug).not.toMatch(rejectedFramework);
    }
  });

  it("shows the actual review date on every article", () => {
    for (const { guide, source } of guideSources) {
      expect(source, `${guide.slug}: updated label`).toMatch(
        /updatedLabel=\{[^\n]*dateModified[^\n]*\}/,
      );
      expect(
        source,
        `${guide.slug}: published date used as review date`,
      ).not.toMatch(/updatedLabel=\{[^\n]*datePublished[^\n]*\}/);
    }
  });

  it("limits editorial comparison tables to three columns", () => {
    for (const { guide, source } of guideSources) {
      const headerBlocks = source.matchAll(
        /<GuideTable[\s\S]*?headers=\{\[([\s\S]*?)\]\}/g,
      );

      for (const match of headerBlocks) {
        const headers = match[1].match(/(["'])(?:\\.|(?!\1)[\s\S])*?\1/g) || [];
        expect(
          headers.length,
          `${guide.slug}: table columns`,
        ).toBeLessThanOrEqual(3);
      }
    }
  });

  it("uses mobile-readable comparisons instead of wide guide tables", () => {
    expect(flagshipSource).not.toContain("<GuideTable");
    expect(flagshipSource).toContain("md:grid-cols-2");
  });

  it("keeps the public card and metadata free of the rejected vocabulary", () => {
    const guide = getGuide("seo-ou-google-ads");
    const publicCopy = [
      guide.metaDescription,
      guide.cardDescription,
      guide.heroTitle,
    ].join(" ");

    expect(publicCopy).not.toMatch(
      /preuve|matrice|contrainte dominante|report ciblé/i,
    );
  });
});
