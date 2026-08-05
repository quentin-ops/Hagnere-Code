import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { getGuide } from "@/lib/guides";
import {
  assessMvpContract,
  createAccordiaAutonomousPaymentFailure,
  createAccordiaCapacityStress,
  createAccordiaCriticalDeferred,
  createAccordiaExample,
  createAccordiaFirstClientDeferredAsNon,
  createAccordiaUnknownManualDuration,
  mvpFamilyIds,
  mvpTreatments,
} from "./mvp-contract-engine";
import { MvpFirstClientContractTool } from "./mvp-contract-tool";
import Page from "./page";

const slugDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(slugDirectory, "../../../..");
const publicDirectory = resolve(
  repositoryRoot,
  "public/guides/mvp-saas-quoi-inclure",
);

const pagePath = resolve(slugDirectory, "page.tsx");
const ogPath = resolve(slugDirectory, "opengraph-image.tsx");
const enginePath = resolve(slugDirectory, "mvp-contract-engine.ts");
const toolPath = resolve(slugDirectory, "mvp-contract-tool.tsx");
const researchPath = resolve(
  repositoryRoot,
  "docs/research/mvp-saas-quoi-inclure.md",
);
const inputFreezePath = resolve(
  repositoryRoot,
  "docs/research/mvp-saas-quoi-inclure-input-freeze.md",
);
const svgPaths = [
  resolve(publicDirectory, "contrat-test-mvp-16x9.svg"),
  resolve(publicDirectory, "charge-manuelle-mvp-4x3.svg"),
  resolve(publicDirectory, "decision-mvp-1x1.svg"),
];
const webpPaths = [
  resolve(publicDirectory, "contrat-test-mvp-16x9.webp"),
  resolve(publicDirectory, "charge-manuelle-mvp-4x3.webp"),
  resolve(publicDirectory, "decision-mvp-1x1.webp"),
];

const pageSource = readFileSync(pagePath, "utf8");
const ogSource = readFileSync(ogPath, "utf8");
const engineSource = readFileSync(enginePath, "utf8");
const toolSource = readFileSync(toolPath, "utf8");
const researchSource = readFileSync(researchPath, "utf8");
const inputFreezeSource = readFileSync(inputFreezePath, "utf8");
const svgSources = svgPaths.map((path) => readFileSync(path, "utf8"));
const pageCompact = pageSource.replace(/\s+/g, " ");
const publicCopy = [
  pageSource,
  ogSource.replace('export const runtime = "edge";', ""),
  engineSource,
  toolSource,
  ...svgSources,
].join("\n");
const toolMarkup = renderToStaticMarkup(
  createElement(MvpFirstClientContractTool),
);
const pageMarkup = renderToStaticMarkup(createElement(Page));
const articleStructuredData = [
  ...pageMarkup.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  ),
]
  .map((match) => JSON.parse(match[1] ?? "{}") as Record<string, unknown>)
  .find((item) => item["@type"] === "Article");
const renderedH1Markup =
  pageMarkup.match(/<h1\b[^>]*>[\s\S]*?<\/h1>/i)?.[0] ?? "";
const renderedH1AriaLabel = decodeHtmlText(
  renderedH1Markup.match(/\baria-label="([^"]*)"/i)?.[1] ?? "",
);
const renderedH1Text = decodeHtmlText(renderedH1Markup);
const registeredGuide = getGuide("mvp-saas-quoi-inclure");
const accordiaHorizon = createAccordiaExample().testHorizon;

function accordiaEquation(minutes: string, occurrences: string, total: string) {
  return `${minutes} min × ${occurrences} occurrence(s)/client sur toute la période × 3 client(s) = ${total} min sur toute la même période « ${accordiaHorizon} »`;
}

describe("public content quality for the MVP SaaS contract guide", () => {
  it("aligns metadata, H1, author and social promise", () => {
    const articleHeadline = String(articleStructuredData?.headline ?? "");

    expect(pageSource).toContain(
      'const guide = getGuide("mvp-saas-quoi-inclure")',
    );
    expect(pageSource).toContain("heroTitle={heroHeading.start}");
    expect(pageSource).toContain("heroTitleEm={heroHeading.emphasis}");
    expect(pageSource).toContain("heroTitleSuffix={heroHeading.suffix}");
    expect(normalizeHeadline(articleHeadline)).not.toBe("");
    expect(normalizeHeadline(articleHeadline)).toBe(
      normalizeHeadline(renderedH1AriaLabel),
    );
    expect(normalizeHeadline(articleHeadline)).toBe(
      normalizeHeadline(renderedH1Text),
    );
    expect(articleHeadline).toBe(registeredGuide.heroTitle);
    expect(pageSource).toContain('profileUrl: "/equipe#fondateur"');
    expect(registeredGuide.dateModified).toBe("2026-08-03T04:14:58+02:00");
    expect(ogSource).toContain('title: "MVP SaaS : quoi inclure ?"');
    expect(ogSource).toContain(
      'subtitle: "Transformer le périmètre en contrat de test explicite"',
    );
  });

  it("keeps a non-breaking space before the visible and structured question mark", () => {
    const articleHeadline = String(articleStructuredData?.headline ?? "");

    expect(articleHeadline).toMatch(/\u00a0\?$/u);
    expect(renderedH1AriaLabel).toMatch(/\u00a0\?$/u);
    expect(renderedH1Text).toMatch(/\u00a0\?$/u);
    expect(registeredGuide.title).toMatch(/client\u00a0\?$/u);
    expect(registeredGuide.cardTitle).toMatch(/inclure\u00a0\?$/u);
    expect(pageSource).toContain("const breadcrumbName = guide.cardTitle");
  });

  it("answers before the first visual and uses the premium architecture", () => {
    expect(pageSource.indexOf('id="minimum"')).toBeLessThan(
      pageSource.indexOf("<Image"),
    );
    expect(pageSource.match(/<GuidePremiumSection/g)).toHaveLength(10);
    expect(pageSource).toContain("<GuidePremiumLayout");
    expect(pageSource).toContain("strategyCta={{");
    expect(pageSource).not.toContain("sidebarHeroCta=");
    expect(pageSource).not.toContain("sidebarContextCta=");
    expect(pageSource).not.toContain("faqCategories=");
    expect(pageSource).not.toContain("<GuideInlineCTA");
  });

  it("renders the single frozen project CTA without a phone action", () => {
    const strategyCtaMarkup =
      pageMarkup.match(
        /<section\b[^>]*data-guide-strategy-cta="true"[^>]*>[\s\S]*?<\/section>/i,
      )?.[0] ?? "";

    expect(pageSource).toContain("showPhoneCta: false");
    expect(strategyCtaMarkup).not.toBe("");
    expect(
      strategyCtaMarkup.match(/data-guide-primary-cta="true"/g),
    ).toHaveLength(1);
    expect(strategyCtaMarkup).toContain('href="/demarrer-un-projet"');
    expect(strategyCtaMarkup).not.toContain("tel:");
  });

  it("keeps the declared reading time aligned with visible article words", () => {
    const articleMarkup = extractArticleMarkup(pageMarkup);
    const visibleText = decodeHtmlText(
      stripReadTimeExcludedElements(articleMarkup),
    );
    const wordCount =
      visibleText.match(/[\p{L}\p{N}]+(?:[\u2019'\-][\p{L}\p{N}]+)*/gu)
        ?.length ?? 0;
    const expectedMinutes = Math.max(1, Math.round(wordCount / 200));
    const declaredMinutes = registeredGuide.readTimeMin;
    const documentedWordCount = Number(
      researchSource
        .match(
          /maillage #32[\s\S]{0,80}?contient ([\d\s]+) mots visibles/i,
        )?.[1]
        .replace(/\s/g, ""),
    );

    expect(
      declaredMinutes,
      wordCount + " mots visibles à 200 mots/minute",
    ).toBe(expectedMinutes);
    expect(documentedWordCount).toBe(wordCount);
  });

  it("excludes hidden text without aborting on a sr-only void element", () => {
    const sample = stripReadTimeExcludedElements(
      '<p>Visible avant</p><input class="sr-only"><span class="sr-only">Texte caché</span><p>Visible après</p>',
    );

    expect(sample).toContain("Visible avant");
    expect(sample).toContain("Visible après");
    expect(sample).not.toContain("Texte caché");
  });

  it("uses only Article and BreadcrumbList through the shared helper", () => {
    expect(pageSource).toContain(
      "buildGuideStructuredData(guide, breadcrumbName)",
    );
    expect(publicCopy).not.toMatch(
      /FAQPage|SoftwareApplication|HowTo|Product|AggregateRating/,
    );
  });

  it("implements exactly seven families and five treatments", () => {
    expect(mvpFamilyIds).toEqual([
      "valueJourney",
      "accountsAccess",
      "dataContinuity",
      "salesEntitlements",
      "helpIncidents",
      "administrationOperations",
      "measurementExit",
    ]);
    expect(mvpTreatments).toEqual([
      "CONSTRUIRE",
      "MANUEL",
      "INTEGRER",
      "REPORTER",
      "INCONNU",
    ]);
    for (const label of [
      "Parcours de valeur",
      "Comptes et accès",
      "Données et continuité",
      "Vente et droits associés",
      "Aide et incidents",
      "Administration et exploitation",
      "Mesure et sortie",
    ]) {
      expect(publicCopy).toContain(label);
    }
  });

  it("exposes the exact seven statuses without a score", () => {
    for (const status of [
      "STOP_REQUIRED_DECISIONS_UNKNOWN",
      "STOP_CRITICAL_CAPABILITY_DEFERRED",
      "STOP_MANUAL_OPERATION_UNBOUNDED",
      "STOP_MANUAL_CAPACITY_EXCEEDED",
      "TEST_FORMAT_NOT_PRODUCTION",
      "PILOT_CANDIDATE_FOR_REVIEW",
      "FIRST_CLIENT_CANDIDATE_FOR_REVIEW",
    ]) {
      expect(engineSource).toContain(status);
    }
    expect(pageSource).toContain('{ label: "Score global", value: "Aucun" }');
    expect(pageSource).toContain(
      '{ label: "Calculateur · envoi", value: "Aucun" }',
    );
    expect(pageSource).not.toContain("Données envoyées");
    expect(toolSource).toContain("aucun score");
  });

  it("replays Accordia and keeps STOP priorities above totals", () => {
    const base = assessMvpContract(createAccordiaExample());
    expect(base).toEqual(
      expect.objectContaining({
        status: "PILOT_CANDIDATE_FOR_REVIEW",
        manualLoadMinutes: "237",
        manualCapacityMinutes: "300",
        remainingCapacityMinutes: "63",
      }),
    );
    expect(base.manualEquations.map((item) => item.totalMinutes)).toEqual([
      "72",
      "60",
      "45",
      "60",
    ]);
    expect(
      base.manualEquations.map((item) => [item.familyLabel, item.equation]),
    ).toEqual([
      ["Comptes et accès", accordiaEquation("12", "2", "72")],
      ["Données et continuité", accordiaEquation("20", "1", "60")],
      ["Vente et droits associés", accordiaEquation("15", "1", "45")],
      ["Aide et incidents", accordiaEquation("10", "2", "60")],
    ]);
    const renderedText = decodeHtmlText(pageMarkup);
    for (const equation of base.manualEquations) {
      expect(renderedText).toContain(equation.familyLabel);
      expect(renderedText).toContain(equation.equation);
    }
    for (const visualCopy of [
      "Comptes et accès",
      "12 min × 2 occurrences × 3 clients",
      "Données et continuité",
      "20 min × 1 occurrence × 3 clients",
      "Vente et droits",
      "15 min × 1 occurrence × 3 clients",
      "Aide et incidents",
      "10 min × 2 occurrences × 3 clients",
    ]) {
      expect(svgSources[1]).toContain(visualCopy);
    }

    expect(assessMvpContract(createAccordiaCapacityStress()).status).toBe(
      "STOP_MANUAL_CAPACITY_EXCEEDED",
    );
    expect(assessMvpContract(createAccordiaCriticalDeferred()).status).toBe(
      "STOP_CRITICAL_CAPABILITY_DEFERRED",
    );
    expect(
      assessMvpContract(createAccordiaUnknownManualDuration()).status,
    ).toBe("STOP_MANUAL_OPERATION_UNBOUNDED");
    expect(
      assessMvpContract(createAccordiaAutonomousPaymentFailure()).status,
    ).toBe("STOP_REQUIRED_DECISIONS_UNKNOWN");
    expect(
      assessMvpContract(createAccordiaFirstClientDeferredAsNon()).status,
    ).toBe("STOP_CRITICAL_CAPABILITY_DEFERRED");
    const doubled = assessMvpContract({
      ...createAccordiaExample(),
      pilotClientCount: "6",
    });
    expect(doubled.manualLoadMinutes).toBe("474");
    expect(doubled.remainingCapacityMinutes).toBe("-174");
  });

  it("shows the exact manual equation and preserves unknown values", () => {
    for (const expected of [
      "minutes par occurrence × occurrences par client sur toute la période × clients",
      "charge manuelle totale sur cette période = somme des opérations manuelles",
      "capacité restante sur cette période = capacité totale disponible sur cette même période − charge manuelle totale",
      "Une durée manquante ne devient jamais zéro",
      "À vérifier ≠ 0",
    ]) {
      expect(publicCopy).toContain(expected);
    }
    expect(engineSource).toContain("BigInt(normalizedWhole)");
    expect(engineSource).toContain("MAX_DECIMAL_PLACES = 3");
    expect(toolSource).not.toContain("Number(event.target.value)");
  });

  it("uses one mandatory named period for occurrences, totals and capacity", () => {
    const empty = assessMvpContract({
      ...createAccordiaExample(),
      testHorizon: "",
    });
    const accordia = assessMvpContract(createAccordiaExample());

    expect(empty.status).toBe("STOP_REQUIRED_DECISIONS_UNKNOWN");
    expect(empty.missingDecisions).toContain(
      "Période couverte par le test à vérifier",
    );
    expect(empty.manualLoadState).toBe("PARTIAL_UNUSABLE");
    expect(accordia.markdown).toContain(
      `Période couverte par le test : ${accordiaHorizon}`,
    );
    expect(accordia.markdown).toContain(
      "Les occurrences par client et la capacité totale couvrent l’ensemble de cette même période, sans conversion implicite.",
    );
    expect(accordiaHorizon).not.toMatch(/[.!?]$/u);
    expect(accordia.markdown).not.toContain("2026. »,");
    expect(pageCompact).toContain(
      "les occurrences par client et la capacité totale doivent porter sur l’ensemble de cette même période",
    );
    expect(toolSource).toContain('id="mvp-test-horizon"');
    expect(toolSource).toContain('id="mvp-contract-period-rules"');
    expect(toolSource).toContain("Le moteur ne convertit ni semaine, ni jour");
  });

  it("enforces sales entitlements for autonomous purchase in engine, tool and copy", () => {
    const payment = createAccordiaAutonomousPaymentFailure();
    const failureProcedure =
      "Détecter l’échec, informer l’acheteur, garder les droits fermés et permettre une reprise contrôlée.";
    const input = {
      ...payment,
      autonomousPurchaseFailureProcedure: failureProcedure,
      capabilities: payment.capabilities.map((capability) =>
        capability.id === "salesEntitlements"
          ? {
              ...capability,
              necessaryForTest: "NON" as const,
              treatment: "REPORTER" as const,
            }
          : capability,
      ),
    };
    const result = assessMvpContract(input);

    expect(result.status).toBe("STOP_REQUIRED_DECISIONS_UNKNOWN");
    expect(result.missingDecisions).toContain(
      "Vente et droits associés : la nécessité doit être « OUI » pour un achat autonome",
    );
    for (const source of [pageSource, toolSource, researchSource]) {
      expect(source).toContain("Vente et droits associés");
      expect(source).toMatch(/achat autonome/i);
      expect(source).toMatch(/NON|Non/);
      expect(source).toMatch(/REPORTER|Reporter/);
    }
    expect(result.markdown).toContain(
      `États d’achat autonome et de droits : ${payment.autonomousPurchaseStates}`,
    );
    expect(result.markdown).toContain(
      `Procédure d’échec de paiement autonome : ${failureProcedure}`,
    );
  });

  it("exports complete verdict evidence and labels incomplete sums without hiding factors", () => {
    const unknown = assessMvpContract(createAccordiaUnknownManualDuration());

    expect(unknown.manualLoadState).toBe("PARTIAL_UNUSABLE");
    expect(unknown.manualLoadMinutes).toBe("165");
    expect(unknown.remainingCapacityMinutes).toBeNull();
    expect(unknown.markdown).toContain(
      "État de la somme : partiel/inexploitable",
    );
    expect(unknown.markdown).toContain(
      "minutes par occurrence à vérifier × 2 occurrence(s)/client sur toute la période × 3 client(s) = calcul inexploitable",
    );
    expect(unknown.markdown).not.toContain("À vérifier min");
    for (const equation of unknown.manualEquations) {
      expect(equation.explicitLimit).not.toBe("");
      expect(unknown.markdown).toContain(`limite : ${equation.explicitLimit}`);
    }
    expect(pageCompact).toContain("partiel/inexploitable");
    expect(toolSource).toContain(
      "data-manual-load-state={assessment.manualLoadState}",
    );
    expect(toolSource).toContain(
      "data-calculation-status={equation.calculationStatus}",
    );
  });

  it("ties validation errors to stable fields without flagging unrelated controls", () => {
    expect(toolMarkup).toContain('id="mvp-test-horizon"');
    expect(toolMarkup).toContain('aria-invalid="true"');
    expect(toolMarkup).toContain(
      'aria-describedby="mvp-contract-period-rules mvp-test-horizon-errors"',
    );
    expect(toolMarkup).toContain('id="mvp-test-horizon-errors"');
    expect(toolMarkup).not.toMatch(
      /id="mvp-capability-valueJourney-owner"[^>]*aria-invalid/,
    );
    expect(toolSource).toContain('min="0.001"');
    expect(toolSource).toContain("fieldAccessibility(");
    expect(engineSource).toContain("fieldErrors: Record<string, string[]>");
  });

  it("keeps the empty form scannable without unlinking accessible field errors", () => {
    expect(toolMarkup).toContain('aria-pressed="false"');
    expect(toolMarkup).toContain("Afficher les erreurs sous les champs");
    expect(toolMarkup).toContain(
      'id="mvp-test-horizon-errors" class="sr-only"',
    );
    expect(toolMarkup).toContain(
      '<span id="mvp-test-horizon-errors" class="sr-only">',
    );
    expect(toolMarkup).toContain(
      'aria-describedby="mvp-contract-period-rules mvp-test-horizon-errors"',
    );
    expect(toolMarkup).not.toContain("À vérifier min");
    expect(toolSource).toContain("setShowInlineErrors");
  });

  it("keeps the tool local, deterministic, copy-only and spreadsheet-free", () => {
    for (const forbidden of [
      /\bfetch\s*\(/,
      /XMLHttpRequest/,
      /WebSocket/,
      /localStorage/,
      /sessionStorage/,
      /document\.cookie/,
      /sendBeacon/,
    ]) {
      expect(engineSource).not.toMatch(forbidden);
      expect(toolSource).not.toMatch(forbidden);
    }

    expect(toolMarkup).toContain("STOP_REQUIRED_DECISIONS_UNKNOWN");
    expect(toolMarkup).toContain(
      "Contrat du premier client SaaS généré en Markdown",
    );
    expect(toolSource).toContain('aria-live="polite"');
    expect(toolMarkup).not.toContain("download=");
    expect(publicCopy).not.toMatch(/\b(?:xls|xlsx|csv)\b/i);
  });

  it("keeps production, data, security, accessibility and restore boundaries visible", () => {
    for (const expected of [
      "prototype sans production",
      "pilote accompagné",
      "premier client en production",
      "données personnelles",
      "restauration",
      "sécurité",
      "accessibilité",
      "support",
      "échec de paiement",
      "revue humaine",
    ]) {
      expect(pageCompact.toLocaleLowerCase("fr-FR")).toContain(expected);
    }
  });

  it("keeps the P4 copy direct, grammatical and free of unexplained agency jargon", () => {
    for (const expected of [
      "Sept variantes du même contrat fictif",
      "sept familles et leurs choix",
      "Un statut « candidat » signifie seulement « prêt à relire »",
      "L’automatisation des sauvegardes n’est pas obligatoire",
      "Décidez pour chacune des sept familles",
      "Quand faut-il revoir ce choix ?",
    ]) {
      expect(publicCopy).toContain(expected);
    }
    for (const removed of [
      "Cinq variantes du même contrat fictif",
      "sept traitements, preuves",
      "Faux positifs et misfits",
      "multi-tenant",
      "SSO",
    ]) {
      expect(publicCopy).not.toContain(removed);
    }
  });

  it("reduces Accordia from an explicit fictitious list to the bounded sold result", () => {
    for (const expected of [
      "Sa liste initiale fictive mélange huit envies",
      "annuaire fournisseurs",
      "obtenir une décision traçable sur un devis fournisseur sans échange de fichier par courriel",
      "le reste sort du périmètre",
    ]) {
      expect(pageCompact).toContain(expected);
    }
    expect(researchSource).toContain(
      "La liste initiale fictive contient huit envies",
    );
    expect(researchSource).toContain("résultat vendu");
    expect(researchSource).toContain("parcours borné");
  });

  it("keeps every H2 action-led and removes the repeated P4 mannerisms", () => {
    for (const expected of [
      "Délimitez le minimum par la preuve à obtenir",
      "Nommez la personne qui l’invite",
      "Attribuez une décision et un responsable à chacune des sept familles",
      "Corrigez toute valeur signalée avant d’interpréter le statut",
      "Comparez service, intégration et absence de logiciel avant de construire",
      "Accordia est un SaaS B2B entièrement fictif",
      "demandent des preuves distinctes",
    ]) {
      expect(pageCompact).toContain(expected);
    }

    for (const removed of [
      "Dans ce guide",
      "Qui l’invite ? Que se passe-t-il",
      "Les sept familles ne sont pas sept modules obligatoires, mais",
      "Ce résultat ne dit pas que le test est sûr ou légal : il dit seulement",
      "Ici, chaque capacité dépend du test réel",
      "Le guide recommande-t-il une architecture SaaS ?",
    ]) {
      expect(pageCompact).not.toContain(removed);
    }
  });

  it("documents source versions, scopes and limits", () => {
    for (const expected of [
      "Alpha · mise à jour 8 mai 2019",
      "Beta · mise à jour 19 février 2021",
      "Live · mise à jour 8 mai 2019",
      "Guide de la sécurité · édition 2024",
      "version 1.1 du 27 novembre 2025",
      "version stable 5.0.0",
      "Recommendation du 12 décembre 2024",
      "documentation vivante",
    ]) {
      expect(pageCompact).toContain(expected);
      expect(researchSource).toContain(expected);
    }
    expect(researchSource).toContain("Registre des affirmations");
    expect(researchSource).toContain("## H. Journal");
    expect(researchSource).toContain("Limite");
    expect(researchSource).toContain(
      "Date de consultation des entrées S01 à S11 : **2 août 2026**",
    );
    expect(researchSource).toContain(
      "S12 a été ajoutée et rouverte le **3 août 2026**",
    );
    expect(researchSource).toContain(
      "page mise à jour le 8 mai 2019, rouverte le 3 août 2026",
    );
  });

  it("links ASVS 5.0.0 to the exact stable release tag", () => {
    expect(pageSource).toContain(
      'href: "https://github.com/OWASP/ASVS/releases/tag/v5.0.0_release"',
    );
    expect(pageSource).not.toContain(
      'href: "https://github.com/OWASP/ASVS/releases/tag/v5.0.0"',
    );
    expect(researchSource).toContain(
      "- URL : https://github.com/OWASP/ASVS/releases/tag/v5.0.0_release",
    );
    expect(researchSource).not.toMatch(
      /^- URL : https:\/\/github\.com\/OWASP\/ASVS\/releases\/tag\/v5\.0\.0$/m,
    );
  });

  it("closes the production NON plus REPORTER bypass without universalizing features", () => {
    for (const source of [
      pageSource,
      engineSource,
      toolSource,
      researchSource,
    ]) {
      expect(source).toMatch(/premier client en production/i);
    }
    expect(engineSource).toContain("Report interdit en production :");
    expect(pageCompact).toContain("« Non » puis « Reporter »");
    expect(pageCompact).toContain("manuel ou intégré");
    expect(pageCompact).toContain(
      "STOP « opération manuelle non bornée » reste prioritaire sur le dépassement de capacité",
    );
    expect(pageCompact).toContain(
      "famille reportée pour un premier client en production même marquée « Non »",
    );
    expect(pageCompact).not.toContain(
      "STOP sur les décisions inconnues reste prioritaire",
    );
    expect(researchSource).toContain("FIRST_CLIENT_CANDIDATE_FOR_REVIEW");
  });

  it("uses three dedicated SVG and WebP assets with expected ratios", () => {
    for (const path of [...svgPaths, ...webpPaths]) {
      expect(existsSync(path)).toBe(true);
    }
    expect(svgSources[0]).toContain('width="1600" height="900"');
    expect(svgSources[1]).toContain('width="1200" height="900"');
    expect(svgSources[2]).toContain('width="900" height="900"');
    expect(svgSources[0].match(/FORMAT ·/g)).toHaveLength(3);
    expect(svgSources[0]).toContain("Trois formats de test indépendants");
    expect(svgSources[0]).not.toContain("M460 317H595");
    expect(svgSources[0]).not.toContain("M975 317H1110");
    expect(svgSources[0]).not.toContain("01 · PROTOTYPE");
    expect(pageSource).toContain(
      'alt="Trois formats de test SaaS indépendants appliqués au même contrat en sept familles"',
    );
    expect(svgSources[2]).toContain('data-format-verdict="independent"');
    for (const distinctVerdict of [
      "TEST_FORMAT_NOT_PRODUCTION",
      "PILOT_CANDIDATE_FOR_REVIEW",
      "FIRST_CLIENT_CANDIDATE_FOR_REVIEW",
    ]) {
      expect(svgSources[2]).toContain(distinctVerdict);
    }
    expect(svgSources[2]).not.toContain("Prototype · pilote · production");
    expect(svgSources[2]).not.toContain("marker-end");
    expect(svgSources[2]).not.toContain("M450 647V");
    expect(pageSource).toContain(
      'alt="Arbre sans score : quatre STOP prioritaires et trois verdicts indépendants par format"',
    );
    expect(pageSource).not.toContain("allant des inconnues à la revue humaine");
    for (const path of webpPaths) {
      const bytes = readFileSync(path);
      expect(bytes.subarray(0, 4).toString("ascii")).toBe("RIFF");
      expect(bytes.subarray(8, 12).toString("ascii")).toBe("WEBP");
    }
    expect(
      pageSource.match(
        /(?:contrat-test-mvp-16x9|charge-manuelle-mvp-4x3|decision-mvp-1x1)\.webp/g,
      ),
    ).toHaveLength(3);
    expect(registeredGuide.articleImagePaths).toEqual([
      "/guides/mvp-saas-quoi-inclure/contrat-test-mvp-16x9.webp",
      "/guides/mvp-saas-quoi-inclure/charge-manuelle-mvp-4x3.webp",
      "/guides/mvp-saas-quoi-inclure/decision-mvp-1x1.webp",
    ]);
  });

  it("keeps publication provenance and release boundaries explicit", () => {
    expect(pageCompact).toContain(
      "La date de publication correspond à la première trace Git",
    );
    expect(pageCompact).toContain("sans preuve de déploiement ou d’indexation");
    expect(pageCompact).toContain(
      "Le déploiement, la publication, l’indexation et l’acceptation par un client demandent des preuves distinctes",
    );
    expect(registeredGuide.editorialStatus).toBe("ready-for-human-review");
  });

  it("keeps every editorial or commercial internal link on an existing route", () => {
    for (const route of [
      "guides/valider-idee-saas-avant-developper",
      "guides/cahier-des-charges-saas",
      "guides/combien-de-temps-developper-saas",
      "guides/prioriser-fonctionnalites-mvp-saas",
      "guides/agence-saas-ou-freelance",
      "guides/mvp-prototype-ou-poc",
      "guides/bubble-ou-saas-sur-mesure",
      "demarrer-un-projet",
      "guides",
      "equipe",
    ]) {
      expect(
        existsSync(resolve(repositoryRoot, "src/app", route, "page.tsx")),
      ).toBe(true);
    }
    expect(pageSource).toContain('href="/guides/mvp-prototype-ou-poc"');
    expect(pageSource).toContain('href="/guides/bubble-ou-saas-sur-mesure"');
    expect(pageCompact).toContain(
      "Si l’inconnue porte encore sur le format lui-même",
    );
  });

  it("keeps the immutable freeze and rebuilt P1 dossier present", () => {
    expect(inputFreezeSource).toContain("mvp-saas-quoi-inclure");
    expect(researchSource).toContain("Reconstruction P1");
    expect(researchSource).toContain("historique");
  });
});

function extractArticleMarkup(html: string): string {
  const opening = /<article\b[^>]*>/i.exec(html);
  if (!opening || opening.index === undefined) return "";

  const contentStart = opening.index + opening[0].length;
  const articleTag = /<\/?article\b[^>]*>/gi;
  articleTag.lastIndex = contentStart;
  let depth = 1;

  for (let tag = articleTag.exec(html); tag; tag = articleTag.exec(html)) {
    depth += tag[0].startsWith("</") ? -1 : 1;
    if (depth === 0) return html.slice(contentStart, tag.index);
  }

  return "";
}

function stripReadTimeExcludedElements(html: string): string {
  const voidElements = new Set([
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
    if (voidElements.has(tagName)) {
      cursor = opening.index + opening[0].length;
      openingElement.lastIndex = cursor;
      continue;
    }
    const matchingTag = new RegExp("</?" + tagName + "\\b[^>]*>", "gi");
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

function decodeHtmlText(html: string): string {
  return html
    .replace(
      /<(script|style|template|noscript|svg)\b[^>]*>[\s\S]*?<\/\1>/gi,
      " ",
    )
    .replace(/<[^>]+>/g, " ")
    .replace(/&#(x?[0-9a-f]+);/gi, (_match, value: string) => {
      const hexadecimal = value[0].toLowerCase() === "x";
      const codePoint = Number.parseInt(
        hexadecimal ? value.slice(1) : value,
        hexadecimal ? 16 : 10,
      );
      return Number.isFinite(codePoint) &&
        codePoint >= 0 &&
        codePoint <= 0x10ffff
        ? String.fromCodePoint(codePoint)
        : " ";
    })
    .replace(/&nbsp;/gi, "\u00a0")
    .replace(/&(?:ensp|emsp);/gi, " ")
    .replace(/&amp;/gi, " et ")
    .replace(/&(?:apos|rsquo|lsquo|#x27|#39);/gi, "'")
    .replace(/&(?:quot|ldquo|rdquo);/gi, '"')
    .replace(/&(?:ndash|mdash);/gi, "-")
    .replace(/&euro;/gi, " euro ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/[ \t\r\n\f]+/g, " ")
    .trim();
}

function normalizeHeadline(value: string): string {
  return value
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
