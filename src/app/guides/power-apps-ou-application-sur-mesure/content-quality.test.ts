import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { getGuide, PUBLISHED_GUIDES } from "@/lib/guides";
import { getLegacyGuideDestination } from "@/lib/legacy-guide-redirects";
import Page, { metadata } from "./page";

const slugDirectory = dirname(fileURLToPath(import.meta.url));
const pageSource = readFileSync(resolve(slugDirectory, "page.tsx"), "utf8");
const modelSource = readFileSync(
  resolve(slugDirectory, "power-apps-decision-model.ts"),
  "utf8",
);
const workbenchSource = readFileSync(
  resolve(slugDirectory, "power-apps-decision-workbench.tsx"),
  "utf8",
);
const ogSource = readFileSync(
  resolve(slugDirectory, "opengraph-image.tsx"),
  "utf8",
);
const normalizedPage = pageSource.replace(/\s+/g, " ");
const renderedPage = renderToStaticMarkup(Page());
const powerAppsGuide = getGuide("power-apps-ou-application-sur-mesure");
const structuredData = [
  ...renderedPage.matchAll(
    /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
  ),
].map((match) => JSON.parse(match[1]) as Record<string, unknown>);

function removeReadTimeExcludedElements(html: string) {
  const openingElement =
    /<([a-z][a-z0-9-]*)\b[^>]*\bdata-read-time-exclude=["']true["'][^>]*>/gi;
  let cursor = 0;
  let output = "";

  for (
    let opening = openingElement.exec(html);
    opening;
    opening = openingElement.exec(html)
  ) {
    output += html.slice(cursor, opening.index);
    const tagName = opening[1];
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

function articleWordCount() {
  const articleHtml = renderedPage.match(
    /<article\b[^>]*>([\s\S]*?)<\/article>/,
  )?.[1];
  expect(articleHtml).toBeDefined();
  const text = removeReadTimeExcludedElements(articleHtml ?? "")
    .replace(
      /<(script|style|template|noscript|svg)\b[^>]*>[\s\S]*?<\/\1>/gi,
      " ",
    )
    .replace(/<[^>]+>/g, " ")
    .replace(/&#(?:x[0-9a-f]+|[0-9]+);/gi, " ")
    .replace(
      /&(?:nbsp|ensp|emsp|amp|apos|rsquo|lsquo|quot|ldquo|rdquo|ndash|mdash|euro);/gi,
      " ",
    )
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

  return (
    text.match(/[\p{L}\p{N}]+(?:[\u2019'\-][\p{L}\p{N}]+)*/gu)?.length ?? 0
  );
}

function readerVisibleText(html: string) {
  return html
    .replace(
      /<(script|style|template|noscript|svg)\b[^>]*>[\s\S]*?<\/\1>/gi,
      " ",
    )
    .replace(/<[^>]+>/g, " ")
    .replace(/&#(?:x[0-9a-f]+|[0-9]+);/gi, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

describe("content quality for Power Apps or custom application guide", () => {
  it("keeps the title, visible H1 and Article headline identical", () => {
    const expectedHeadline =
      "Power Apps ou application sur mesure : comment choisir ?";
    const h1Markup = renderedPage.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1];
    const h1Text = readerVisibleText(h1Markup ?? "");

    expect(powerAppsGuide.title).toBe(expectedHeadline);
    expect(h1Text).toBe(expectedHeadline);
    expect(structuredData[0]).toMatchObject({ headline: expectedHeadline });
    expect(pageSource).toContain(
      'heroTitle={"Power Apps ou application sur mesure\\u00a0:"}',
    );
    expect(pageSource).toContain(
      'heroTitleEm={"comment\\u00a0choisir\\u00a0?"}',
    );
    expect(pageSource).not.toContain(
      'heroTitleEm={":\\u00a0comment\\u00a0choisir\\u00a0?"}',
    );
  });

  it("renders a server-side answer and uses the measured reading time", () => {
    const html = renderToStaticMarkup(Page());
    expect(html).toContain("<h1");
    expect(html).toContain("Power Apps ou application sur mesure");
    expect(html).toContain(
      "Power Apps reste défendable si les tests des cas difficiles sont concluants",
    );
    expect(Math.max(1, Math.round(articleWordCount() / 200))).toBe(
      powerAppsGuide.readTimeMin,
    );
  });

  it("publishes the approved guide through the central registry", () => {
    expect(powerAppsGuide.editorialStatus).toBe("published");
    expect(
      PUBLISHED_GUIDES.some((guide) => guide.slug === powerAppsGuide.slug),
    ).toBe(true);
    // A local or preview build remains private; production enables indexing.
    expect(metadata.robots).toMatchObject({ index: false, follow: false });
    expect(metadata.alternates?.canonical).toBe(
      "https://hagnere-code.ai/guides/power-apps-ou-application-sur-mesure",
    );
    expect(metadata.openGraph).toMatchObject({
      publishedTime: "2026-07-23T21:31:02+02:00",
      modifiedTime: powerAppsGuide.dateModified,
    });
    expect(getLegacyGuideDestination(powerAppsGuide.slug)).toBeNull();
    expect(pageSource).toContain(
      'getGuide("power-apps-ou-application-sur-mesure")',
    );
    expect(pageSource).not.toContain(
      'editorialStatus: "ready-for-human-review"',
    );
  });


  it("emits only Article and BreadcrumbList structured data", () => {
    expect(structuredData.map((item) => item["@type"])).toEqual([
      "Article",
      "BreadcrumbList",
    ]);
    expect(structuredData[0]).toMatchObject({
      datePublished: "2026-07-23T21:31:02+02:00",
      dateModified: powerAppsGuide.dateModified,
    });
    expect(JSON.stringify(structuredData)).not.toMatch(
      /\b(?:FAQPage|HowTo|Offer|Review|AggregateRating|SoftwareApplication|Product|wordCount)\b/,
    );
  });

  it("renders a complete, natural FAQ heading", () => {
    expect(readerVisibleText(renderedPage)).toContain(
      "Décider entre Power Apps et le sur-mesure.",
    );
    expect(readerVisibleText(renderedPage)).not.toContain(
      "mythe Power Apps. voulez savoir.",
    );
  });

  it("preserves every historical anchor and offers two distinct reading paths", () => {
    for (const id of [
      "reponse",
      "cinq-tests",
      "cout",
      "chemins",
      "audit",
      "sources",
    ]) {
      expect(pageSource, id).toContain(`id="${id}"`);
    }
    expect(normalizedPage).toContain("Chemin A · nouveau projet");
    expect(normalizedPage).toContain("Chemin B · application existante");
  });

  it("defines the tenant as the organizational instance, not an environment", () => {
    expect(normalizedPage).toContain(
      "l’instance organisationnelle Microsoft qui regroupe notamment les identités, les licences, les politiques et les environnements Power Platform",
    );
    expect(normalizedPage).toContain(
      "Un tenant n’est donc pas un environnement",
    );
    expect(normalizedPage).not.toContain(
      "désigne l’environnement Microsoft de votre organisation",
    );
    expect(normalizedPage).not.toContain(
      "administration de votre environnement Microsoft (tenant)",
    );
  });

  it("avoids a mechanical paragraph opener and states the dedicated-cost criterion", () => {
    expect(renderedPage.match(/Concrètement,/g) ?? []).toHaveLength(0);
    expect(normalizedPage).toContain(
      "Limite durable et bénéfices documentés justifiant le coût total ou le surcoût du dédié",
    );
    expect(normalizedPage).not.toContain(
      "Limite durable, TCO dédié supérieur en valeur",
    );
  });

  it("keeps the final anti-IA pass direct without weakening decision boundaries", () => {
    for (const formulation of [
      "gouvernance et sortie avant de choisir",
      "plan de migration réversible pour comparer les options",
      "laissez la décision en attente",
      "obéissent à des règles différentes",
      "La réussite d’un pilote Power Apps Mobile peut suffire à justifier un renforcement",
      "Si la correction tient, une migration entière devient peut-être inutile",
      "Réunir les preuves et comparer quatre coûts totaux de possession (TCO)",
    ]) {
      expect(
        `${normalizedPage} ${workbenchSource} ${JSON.stringify(powerAppsGuide)}`,
        formulation,
      ).toContain(formulation);
    }

    for (const residue of [
      "sans biais, preuves en main",
      "sans condamner Power Apps d’avance",
      "la seule réponse honnête",
      "Ce test porte sur trois sujets",
      "Distinguez trois sujets souvent amalgamés",
      "Produire un diagnostic de preuves",
      "Ce protocole permet de distinguer",
    ]) {
      expect(`${pageSource} ${workbenchSource}`, residue).not.toContain(
        residue,
      );
    }
  });

  it("contains all five neutral outcomes without a pseudo-score", () => {
    const outcomesBlock = pageSource.match(
      /const outcomes = \[([\s\S]*?)\] as const;/,
    )?.[1];
    expect(outcomesBlock).toBeDefined();
    expect(outcomesBlock?.match(/status:/g)).toHaveLength(5);
    for (const status of [
      "DÉCISION EN ATTENTE",
      "CONSERVER",
      "RENFORCER",
      "HYBRIDE",
      "RECONSTRUIRE",
    ]) {
      expect(outcomesBlock, status).toContain(`status: "${status}"`);
    }
    expect(normalizedPage).toContain(
      "Conserver Power Apps peut être la bonne décision",
    );
    expect(pageSource).not.toMatch(
      /score de maturité|score sur 100|algorithme propriétaire/i,
    );
  });

  it("states volatile prices precisely, dates them and rejects shortcuts", () => {
    for (const fact of [
      "17,30 € HT par utilisateur et par mois",
      "10,40 € HT avec un minimum de 2 000 postes/licences",
      "34,70 € HT par Go et par mois",
      "10 USD par utilisateur actif unique",
      "fin de commercialisation",
      "janvier 2026",
      "réservé au développement et au test",
      "Prix public ≠ prix contractuel ≠ TCO",
    ]) {
      expect(normalizedPage, fact).toContain(fact);
    }
    expect(normalizedPage).toContain("au 3 août 2026");
    expect(normalizedPage).toContain(
      "jamais une conversion automatique cachée",
    );
    expect(normalizedPage).not.toContain("Power Apps est gratuit pour tout");
    expect(normalizedPage).not.toContain(
      "ancien prix à 5 USD encore achetable",
    );
  });

  it("explains multiplexing without inventing the applicable license", () => {
    for (const boundary of [
      "Une connexion mutualisée réduit-elle le nombre de licences ?",
      "Non, pas automatiquement",
      "mutualise ou réachemine des connexions",
      "automatise un processus",
      "doit être correctement licencié, que l’accès soit direct ou indirect",
      "Ajouter des couches intermédiaires ne change pas ce principe",
      "Un budget limité au compte de service ou à la connexion partagée serait donc incomplet",
      "Le guide ne remplace pas votre contrat",
      "équipe Microsoft",
      "partenaire certifié Microsoft",
    ]) {
      expect(normalizedPage, boundary).toContain(boundary);
    }
    expect(pageSource).toContain(
      "https://go.microsoft.com/fwlink/?LinkId=2085130",
    );
    expect(normalizedPage).toContain("La page 25 précise");
    expect(normalizedPage).not.toContain(
      "une licence Premium par utilisateur est toujours obligatoire",
    );
    expect(normalizedPage).toContain(
      "ne dit pas que toute automatisation impose la même licence par utilisateur",
    );
    expect(normalizedPage).not.toContain(
      "Toute automatisation impose toujours une licence par utilisateur",
    );
    expect(normalizedPage).not.toContain("un compte de service suffit");
  });

  it("explains delegation, SharePoint and Dataverse without false limits", () => {
    for (const fact of [
      "30 millions d’éléments",
      "seuil de vue ou requête de 5 000",
      "500 — configurable jusqu’à 2 000",
      "retourner un sous-ensemble incomplet",
      "modèle relationnel",
      "rôles sont cumulatifs",
    ]) {
      expect(normalizedPage, fact).toContain(fact);
    }
    expect(normalizedPage).toContain(
      "Ce n’est pas une « limite Power Apps à 2 000 lignes »",
    );
  });

  it("separates guests, Power Pages, offline, accessibility and export", () => {
    for (const fact of [
      "invité Microsoft Entra B2B",
      "Power Pages",
      "licence Power Apps",
      "sources sous-jacentes",
      "Dataverse et Power Apps Mobile",
      "connecteurs non-Dataverse comme SharePoint",
      "flux Power Automate ne sont pas pris en charge hors ligne",
      "perte ou le remplacement d’un appareil",
      "ne transforme pas le navigateur",
      "il ne démontre le respect ni des Web Content Accessibility Guidelines",
      "ne deviennent pas une application React ou Next.js",
      "permettent d’en déduire",
    ]) {
      expect(normalizedPage, fact).toContain(fact);
    }
  });

  it("covers DLP, ALM, support and a full restoration boundary", () => {
    for (const fact of [
      "suspendre ou mettre en quarantaine",
      "liste d’autorisation stricte",
      "la règle la plus restrictive qui s’applique",
      "connecteurs personnalisés et HTTP ne sont pas encore couverts",
      "la localisation d’un environnement ne prouve pas celle de toute la chaîne de données",
      "développement, test et production séparés",
      "variables d’environnement",
      "références de connexion",
      "Un pipeline transporte une solution, pas vos données métier",
      "support éditeur ne remplace",
      "environnement séparé",
      "données, connexions, identités, secrets, rôles et automatisations",
    ]) {
      expect(normalizedPage, fact).toContain(fact);
    }
  });

  it("labels every required scenario as fictional and avoids market claims", () => {
    expect(pageSource.match(/Scénario fictif composite/g)).toHaveLength(5);
    for (const scenario of [
      "Vingt salariés",
      "réseau intermittent",
      "Deux cent cinquante utilisateurs",
      "Identité externe",
      "maker parti",
    ]) {
      expect(normalizedPage, scenario).toContain(scenario);
    }
    expect(normalizedPage).toContain(
      "ne sont ni des cas clients, ni des budgets ou délais de marché",
    );
    for (const formulation of [
      "Deux cent cinquante utilisateurs ne rendent pas Power Apps inadapté par principe",
      "n’offrent ni les mêmes parcours ni le même modèle d’identité",
      "Une reconstruction complète ne se justifie que si ces écarts persistent et si le coût total la rend soutenable",
    ]) {
      expect(normalizedPage, formulation).toContain(formulation);
    }
    expect(normalizedPage).not.toContain(
      "Une Power App gouvernée peut rester rationnelle",
    );
    expect(normalizedPage).not.toContain(
      "ne sont pas trois habillages du même produit",
    );
    expect(normalizedPage).not.toContain(
      "le dédié gagne en crédibilité — après TCO",
    );
  });

  it("requires bounded remediation before a reversible migration", () => {
    for (const term of [
      "Corrections à tester avant",
      "défaut remédiable",
      "coexistence",
      "système maître",
      "migration répétable",
      "La recette avant les écrans",
      "jouez le retour",
      "L’extinction après stabilité",
      "révoquez les secrets",
    ]) {
      expect(normalizedPage, term).toContain(term);
    }
    expect(normalizedPage).toContain(
      "Ne supprimez pas l’ancien outil au premier succès",
    );
  });

  it("keeps GDPR accountability independent from the architecture choice", () => {
    for (const boundary of [
      "ne suffit pas à démontrer la conformité au Règlement général sur la protection des données (RGPD)",
      "finalité",
      "minimisation",
      "durées de conservation",
      "risque élevé pour les droits et libertés",
      "AIPD",
      "DPO",
    ]) {
      expect(normalizedPage, boundary).toContain(boundary);
    }
    expect(normalizedPage).toContain(
      "Le choix de Power Apps ou du sur-mesure ne certifie pas à lui seul la conformité du traitement",
    );
  });

  it("keeps internal time explicit and prevents a hidden zero or double count", () => {
    for (const boundary of [
      "valorisez du temps interne",
      "heures, rôle, coût retenu et période",
      "Ne comptez pas la même heure",
      "gardez ce poste inconnu",
      "un faux zéro",
    ]) {
      expect(normalizedPage, boundary).toContain(boundary);
    }
  });

  it("ships a local, blocking, non-persistent decision and TCO workbench", () => {
    expect(pageSource).toContain("<PowerAppsDecisionWorkbench />");
    expect(modelSource).toContain('status: "STOP_MISSING_EVIDENCE"');
    expect(modelSource).toContain("candidateTotalsEur");
    expect(modelSource).toContain("validateCalculatedAmount");
    expect(modelSource).toContain("validateRequiredIntegerQuantity");
    expect(modelSource).toContain("validateRequiredNumericValue");
    expect(modelSource).toContain("Number.MAX_SAFE_INTEGER");
    expect(modelSource).toContain("publicPaygUsdPerActiveUserAppMonth: 10");
    expect(workbenchSource).toContain('data-read-time-exclude="true"');
    expect(workbenchSource).toContain("navigator.clipboard.writeText");
    expect(workbenchSource).toContain("window.print()");
    expect(workbenchSource).toContain('data-tco-mobile-results="true"');
    expect(workbenchSource).toContain("xl:hidden");
    expect(workbenchSource).toContain('data-tco-desktop-results="true"');
    expect(workbenchSource).toContain("hidden rounded-2xl");
    expect(workbenchSource).toContain("xl:block");
    expect(workbenchSource).toContain("w-full table-fixed");
    expect(workbenchSource).not.toContain("overflow-x-auto");
    expect(workbenchSource).not.toContain("min-w-[760px]");
    expect(workbenchSource).toContain(
      "À vérifier — aucune preuve fiable ; décision suspendue",
    );
    expect(workbenchSource).toContain("tcoStateLabel(result)");
    expect(workbenchSource).toContain("KnowledgeQuantity");
    expect(workbenchSource).toContain(
      "Quantité entière d’utilisateurs licenciés",
    );
    expect(workbenchSource).toContain('inputMode="numeric"');
    expect(workbenchSource).toContain('step="1"');
    expect(workbenchSource).toContain("allowNotApplicable={false}");
    expect(workbenchSource).toContain('option.value !== "not-applicable"');
    expect(modelSource).toContain("collectBlockingFailures");
    expect(modelSource).toContain("recommendedOptionForDecision");
    expect(workbenchSource.match(/role="status"/g)).toHaveLength(1);
    expect(workbenchSource).not.toMatch(
      /localStorage|sessionStorage|indexedDB/,
    );
    expect(workbenchSource).not.toMatch(/download\s*=|\.xlsx?\b|\.csv\b/i);
    expect(workbenchSource).not.toContain("<form");
    expect(normalizedPage).toContain("suspendez la décision");
    expect(normalizedPage).toContain("preuve manquante");
    expect(normalizedPage).toContain(
      "un contrôle fondateur est insatisfaisant",
    );
  });

  it("keeps internal production vocabulary out of reader-visible text", () => {
    const visibleText = readerVisibleText(renderedPage);
    const forbiddenMarkers = [
      /\bstop\b/iu,
      /à\s+sourcer/iu,
      /\bpass\b/iu,
      /\bno_go\b/iu,
      /\bgate\b/iu,
      /\bpasse\s+[1-4]\b/iu,
      /\bhash\b/iu,
      /\bcertificats?\b/iu,
      /\b(?:case|model)[-_][a-z0-9-]+\b/iu,
    ];

    for (const marker of forbiddenMarkers) {
      expect(visibleText, marker.source).not.toMatch(marker);
    }
  });

  it("uses three dedicated, accessible SVG ratios and a dynamic OG image", () => {
    const illustrations = [
      ["article-power-apps-16x9.svg", 'width="1600" height="900"'],
      ["article-power-apps-4x3.svg", 'width="1200" height="900"'],
      ["article-power-apps-1x1.svg", 'width="1200" height="1200"'],
    ] as const;

    for (const [fileName, dimensions] of illustrations) {
      const source = readFileSync(
        resolve(
          slugDirectory,
          "../../../../public/guides",
          powerAppsGuide.slug,
          fileName,
        ),
        "utf8",
      );
      expect(source, fileName).toContain(dimensions);
      expect(source, fileName).toContain('role="img"');
      expect(source, fileName).toContain("aria-labelledby");
      expect(source, fileName).toContain("<title");
      expect(source, fileName).toContain("<desc");
    }

    expect(pageSource).toContain("article-power-apps-16x9.svg");
    expect(ogSource).toContain("createGuideOgImage");
    expect(ogSource).toContain("width: 1200, height: 630");
    expect(ogSource).toContain(
      "Preuves · 4 coûts comparés · correction ciblée · migration réversible",
    );
    expect(ogSource).not.toContain("4 TCO · remédiation");
  });

  it("keeps commercial links compatible with a keep-Power-Apps conclusion", () => {
    expect(pageSource).toContain(
      'primaryCtaHref: "/services/outils-internes-sur-mesure"',
    );
    expect(pageSource).toContain('ctaHref: "/demarrer-un-projet"');
    expect(pageSource).toContain('secondaryLabel: "03 74 47 20 18"');
    expect(pageSource).toContain('secondaryHref: "tel:+33374472018"');
    expect(pageSource).not.toContain('secondaryLabel: "Voir le service"');
    expect(pageSource).toContain(
      '"Vous hésitez entre renforcer Power Apps et reconstruire\\u00a0?"',
    );
    expect(pageSource).not.toContain(
      '"Vous hésitez entre renforcer Power Apps et reconstruire ?"',
    );
    expect(renderedPage).toContain('href="tel:+33374472018"');
    expect(renderedPage).toContain('aria-label="Appeler 03 74 47 20 18"');
    expect(renderedPage).not.toContain('aria-label="Appeler Voir le service"');
    expect(normalizedPage).toContain(
      "Le premier échange peut conclure qu’il faut conserver ou renforcer Power Apps",
    );
    expect(powerAppsGuide.title.length).toBeLessThanOrEqual(60);
    expect(powerAppsGuide.metaDescription.length).toBeLessThanOrEqual(155);
  });
});
