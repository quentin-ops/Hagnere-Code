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
const expectedCanonical = `https://hagnere-code.ai/guides/${[
  "signes",
  "besoin",
  "logiciel",
  "metier",
].join("-")}`;

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

  it("keeps the P4 metadata, section titles and prose concise and reader-led", () => {
    const metaDescription = metadata.description;
    const sectionTitles = [
      ...pageSource.matchAll(/<GuidePremiumSection[\s\S]*?title="([^"]+)"/g),
    ].map((match) => match[1]);

    expect(typeof metaDescription).toBe("string");
    expect((metaDescription as string).length).toBeGreaterThanOrEqual(145);
    expect((metaDescription as string).length).toBeLessThanOrEqual(160);
    expect(sectionTitles).toHaveLength(10);
    expect(
      sectionTitles.filter((heading) => heading.endsWith("?")),
    ).toHaveLength(5);
    expect(`${pageSource}\n${diagnosticSource}`).not.toMatch(
      /Il est important de noter|Dans cette optique|Par ailleurs|À titre d’illustration|Il convient de|S’agissant de|Au regard de|Force est de constater|En conclusion/,
    );
    expect(`${pageSource}\n${diagnosticSource}`).not.toMatch(
      /robot silencieux|épouse les habitudes|maquiller en certitude|Le but du guide|Une décision saine|Une bonne orientation/,
    );
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
    expect(normalizedPage).toContain(
      "OBSERVER : ne pas choisir de solution tant que les faits manquent",
    );
    expect(normalizedPage).toContain(
      "Ce n’est pas une septième solution à acheter",
    );
  });

  it("answers before selling and covers the required counter-cases", () => {
    expect(normalizedPage).toContain(
      "Ces situations méritent un diagnostic ; elles ne prouvent pas qu’il faut développer un logiciel sur mesure.",
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
    expect(pageSource).not.toMatch(
      /ROI garanti|rentabilité garantie|retour garanti|zéro erreur|100 % adapté/i,
    );
  });

  it("labels all three pedagogical scenarios as fictional", () => {
    expect(pageSource.match(/Exemple fictif [123]/g)).toHaveLength(3);
    expect(normalizedPage).toContain(
      "Les trois scénarios ci-dessous sont fictifs, pas des cas clients.",
    );
    expect(normalizedPage).toContain(
      "Aucun résultat n’y est mesuré et aucun gain n’en est déduit.",
    );
  });

  it("keeps sources visible with their authorship and scope limits", () => {
    for (const source of [
      "cnil_guide_securite_personnelle.pdf",
      "securite-des-donnees-les-regles-essentielles",
      "referentiel_general_ecoconception_des_services_numeriques_version_2024.pdf",
      "design.numerique.gouv.fr/bien-concevoir",
      "lautomatisation-une-solution",
    ]) {
      expect(pageSource, source).toContain(source);
    }
    expect(normalizedPage).toContain(
      "rédigé par Erwan Kezzar de Contournement et Marc-Olivier Sercki de Pathta, deux acteurs privés",
    );
    expect(normalizedPage).toContain(
      "nous retenons la méthode d’observation, pas leurs gains ni leurs préférences d’outils comme règles générales",
    );
    expect(normalizedPage).toContain(
      "Ces bonnes pratiques visent les services publics ; nous les utilisons seulement comme méthode de conception transférable",
    );
    expect(normalizedPage).toContain(
      "C’est ici un garde-fou de conception, pas une évaluation complète du RGESN, une preuve de rentabilité",
    );
    expect(normalizedPage).toContain(
      "ce guide n’en réalise pas l’évaluation complète et n’en déduit aucune rentabilité",
    );
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
    expect(pageSource).not.toMatch(/\.(?:xlsx?|csv)\b/i);
  });

  it("uses existing, contextual lead-only destinations", () => {
    expect(pageSource).toContain(
      'primaryCtaLabel: "Faire examiner mes trois situations"',
    );
    expect(pageSource).toContain('primaryCtaHref: "/demarrer-un-projet"');
    expect(pageSource).toContain(
      'ctaHref: "/services/outils-internes-sur-mesure"',
    );
    expect(normalizedPage).toContain(
      "Le premier échange sert à décider ce qu’il faut vérifier ensuite",
    );
    expect(normalizedPage).toContain(
      "ne garantit pas la faisabilité d’un outil",
    );
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
