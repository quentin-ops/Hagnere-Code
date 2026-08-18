import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getGuide, guideRobots } from "./guides";

const routeSource = readFileSync(
  join(process.cwd(), "src/app/guides/cout-maintenance-site-internet/page.tsx"),
  "utf8",
);
const ogSource = readFileSync(
  join(
    process.cwd(),
    "src/app/guides/cout-maintenance-site-internet/opengraph-image.tsx",
  ),
  "utf8",
);
const dossierSource = readFileSync(
  join(
    process.cwd(),
    "src/components/guides/WebsiteMaintenanceDecisionDossier.tsx",
  ),
  "utf8",
);
const decisionSource = readFileSync(
  join(process.cwd(), "src/lib/website-maintenance-decision.ts"),
  "utf8",
);
const normalizedRoute = routeSource.replace(/\s+/g, " ");

function visibleText(source: string): string {
  return source
    .replace(/<[^>]+>/g, " ")
    .replace(/\{[^}]*\}/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

describe("cout-maintenance-site-internet premium guide contract", () => {
  it("answers the decision in the first 150 words without a price anchor", () => {
    const lead = routeSource.match(/<p className="lead">([\s\S]*?)<\/p>/)?.[1];
    const text = visibleText(lead || "");

    expect(lead).toBeDefined();
    expect(text.split(/\s+/).length).toBeLessThanOrEqual(150);
    expect(text).toMatch(/pas de prix universel/i);
    expect(text).toMatch(/vitrine stable/i);
    expect(text).toMatch(/boutique protège panier, paiement/i);
    expect(text).toMatch(/service critique protège l’activité et les données/i);
    expect(text).toMatch(
      /mêmes obligations.*mêmes horaires.*mêmes résultats\s+vérifiables/i,
    );
    expect(text).not.toMatch(/29|499|prix moyen|fourchette de marché/i);
  });

  it("contains the three criticalities and their exact reproducible TCO", () => {
    for (const expected of [
      "Simple — vitrine",
      "Central — boutique",
      "Exigeant — service critique",
      "4 320 €",
      "5 620 €",
      "14 260 €",
      "29 270 €",
      "33 570 €",
      "92 110 €",
      "128 800 €",
      "155 800 €",
      "413 400 €",
    ]) {
      expect(normalizedRoute).toContain(expected);
    }
    expect(normalizedRoute).toContain("hypothèses éditoriales fictives");
    expect(normalizedRoute).toContain(
      "ne décrivent ni le marché ni les tarifs Hagnéré Code",
    );
  });

  it("keeps four families, six budget lines and the proof register", () => {
    for (const expected of [
      "1. Maintenance logicielle",
      "2. Opérations de service",
      "3. Entretien éditorial et assurance",
      "4. Gouvernance et sortie",
      "six lignes",
      "préventif/adaptatif",
      "correctif",
      "évolutif",
      "opérations de service",
      "éditorial/assurance",
      "gouvernance/sortie",
      "Registre de maintenance prouvée",
      "promesse",
      "Preuve",
      "Risque restant",
      "Payeur",
    ]) {
      expect(normalizedRoute).toContain(expected);
    }
  });

  it("makes restoration, incident and SLA calculations independently checkable", () => {
    for (const expected of [
      "point de reprise",
      "temps de reprise",
      "Restauration courante ≠ reprise propre après compromission",
      "1 080 + 900 + 250 + 140 = 2 370 €",
      "1 650 €",
      "2 790 €",
      "5 790 €",
      "3 450 €",
      "10 290 €",
      "détection",
      "accusé humain",
      "début d’intervention",
      "contournement",
      "rétablissement",
      "correction définitive",
      "43 min 12 s",
      "8 h 45 min 36 s",
      "4 min 19,2 s",
      "52 min 33,6 s",
      "procédure de réclamation",
      "son plafond",
    ]) {
      expect(normalizedRoute).toContain(expected);
    }
  });

  it("compares four delivery modes on one central scope", () => {
    for (const expected of [
      "Interne structuré",
      "Freelance + relais",
      "Agence",
      "TMA organisée",
      "25 500 €",
      "30 500 €",
      "81 500 €",
      "23 300 €",
      "26 600 €",
      "73 200 €",
      "30 900 €",
      "84 100 €",
      "38 900 €",
      "46 400 €",
      "124 200 €",
      "Fail prouvé",
      "Pass ou Fail sans date, artefact ou référence, périmètre, résultat et responsable redevient",
      "reste non qualifiée",
      "sous-total non comparable",
    ]) {
      expect(normalizedRoute).toContain(expected);
    }
  });

  it("covers technology, security, end of support and adversarial exit", () => {
    for (const expected of [
      "WordPress, Next.js et plateforme",
      "Aucune technologie n’a « zéro maintenance »",
      "politique de support Next.js",
      "fin de support",
      "licence nécessaire au build",
      "coût entre dans le TCO",
      "prestataire perd une personne clé",
      "subit une compromission",
      "second administrateur",
      "sauvegarde indépendante",
      "rotation des secrets",
      "un tiers autorisé",
    ]) {
      expect(normalizedRoute).toContain(expected);
    }
  });

  it("ships one local two-offer dossier and one honest editorial CTA", () => {
    expect(
      routeSource.match(/<WebsiteMaintenanceDecisionDossier\s*\/>/g),
    ).toHaveLength(1);
    expect(routeSource.match(/<GuideInlineCTA\b/g)).toHaveLength(1);
    expect(routeSource).toContain('ctaHref="/demarrer-un-projet"');
    expect(normalizedRoute).toContain("environ 3 minutes");
    expect(normalizedRoute).toContain(
      "Le pré-cadrage et la réponse sont gratuits",
    );
    expect(normalizedRoute).toContain(
      "jour ouvré suivant, sans engagement de délai",
    );
    expect(normalizedRoute).toContain(
      "un devis ferme n’est proposé qu’après échange",
    );
    expect(normalizedRoute).toContain("Option de ne pas souscrire");
    expect(routeSource).toContain("showWhitePaperPromo={false}");
    expect(routeSource).toContain("showSidebarCta={false}");

    expect(dossierSource).toContain("Copier le dossier");
    expect(dossierSource).toContain("Imprimer le dossier");
    expect(dossierSource).toContain("Réinitialiser");
    expect(dossierSource).toContain('aria-live="polite"');
    expect(dossierSource).toContain('aria-live="assertive"');
    expect(dossierSource).toContain('data-read-time-exclude="true"');
    expect(dossierSource).toContain("données non envoyées");
    expect(dossierSource).not.toContain("window.confirm");
    expect(dossierSource).not.toContain("fetch(");
    expect(decisionSource).toContain(
      "website-maintenance-decision-r3-2026-07-25",
    );
  });

  it("keeps the autonomous action, measurement and conflict boundaries", () => {
    for (const expected of [
      "Votre audit autonome en 45–60 minutes",
      "Bon fit pour une revue",
      "Mauvais fit",
      "Notre conflit d’intérêts, rendu visible",
      "30 jours observés ou ND",
      "deux incidents critiques en douze mois",
      "aucune offre Hagnéré Code n’est déclarée supérieure",
      "ne promet ni indexation ni classement Google",
    ]) {
      expect(normalizedRoute).toContain(expected);
    }
  });

  it("keeps every legacy anchor and relégates vendor prices to a dated section", () => {
    for (const anchor of [
      "reponse-rapide",
      "de-quoi-parle-t-on",
      "menace",
      "cout-sinistre",
      "postes",
      "wordpress-vs-statique",
      "contrat",
      "diy",
      "duree",
      "saas",
      "methode",
    ]) {
      expect(routeSource).toContain(`id="${anchor}"`);
    }
    expect(normalizedRoute).toContain(
      "Pourquoi 29–499 € ne constitue pas une fourchette de marché",
    );
    expect(normalizedRoute).toContain("21 juillet 2026");
    expect(normalizedRoute).toContain("observation secondaire");
    expect(normalizedRoute).toContain("non représentative");
    expect(ogSource).not.toMatch(
      /29–499|29 à 499|observés|prix moyen|fourchette de marché/i,
    );
    expect(ogSource).toContain("Deux offres · même périmètre");
  });

  it("links primary sources near volatile or consequential claims", () => {
    for (const source of [
      "https://www.iso.org/standard/80710.html",
      "https://www.nist.gov/publications/contingency-planning-guide-federal-information-systems",
      "anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf",
      "https://www.cisa.gov/stopransomware/ransomware-guide",
      "https://www.gov.uk/service-manual/technology/monitoring-the-status-of-your-service",
      "https://www.ncsc.gov.uk/guidance/choosing-a-managed-service-provider-msp",
      "https://vercel.com/legal/sla",
      "https://wordpress.org/documentation/article/updating-wordpress/",
      "https://nextjs.org/support-policy",
      "https://www.w3.org/WAI/eval/considerations",
      "https://developers.google.com/crawling/docs/troubleshooting/http-status-codes",
      "https://www.cnil.fr/fr/securite-gerer-la-sous-traitance",
    ]) {
      expect(routeSource).toContain(source);
    }
  });

  it("keeps structured data faithful and limited to Article and BreadcrumbList", () => {
    expect(routeSource.match(/type="application\/ld\+json"/g)).toHaveLength(2);
    expect(routeSource).toContain('"@type": "Article"');
    expect(routeSource).toContain('"@type": "BreadcrumbList"');
    expect(routeSource).not.toMatch(/FAQPage|HowTo|Offer|wordCount/);
  });

  it("keeps metadata concise and the registry in human-review state", () => {
    const guide = getGuide("cout-maintenance-site-internet");

    expect(guide.title.length).toBeLessThanOrEqual(60);
    expect(guide.metaDescription.length).toBeGreaterThanOrEqual(120);
    expect(guide.metaDescription.length).toBeLessThanOrEqual(160);
    expect(guide.dateModified).toBe("2026-07-25");
    expect(guide.readTimeMin).toBe(19);
    expect(guide.editorialStatus).toBe("ready-for-human-review");
    expect(guideRobots(guide)).toEqual({ index: false, follow: false });
    expect(routeSource).toContain("robots: guideRobots(guide)");
  });
});
