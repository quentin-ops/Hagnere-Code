import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getGuide } from "./guides";

const slugs = [
  "crm-sur-mesure-ou-hubspot",
  "lovable-bolt-v0-ou-agence-saas",
  "rgpd-saas-b2b",
  "zapier-make-ou-developpement-sur-mesure",
  "logiciel-planning-sur-mesure",
  "google-ads-saas-b2b",
  "google-ads-commerce-local",
  "contrat-seo-duree-engagement",
  "site-indexe-sans-trafic",
  "audit-technique-avant-reprendre-site",
] as const;

function pageSource(slug: (typeof slugs)[number]) {
  return readFileSync(
    join(process.cwd(), "src/app/guides", slug, "page.tsx"),
    "utf8",
  );
}

function ogSource(slug: (typeof slugs)[number]) {
  return readFileSync(
    join(process.cwd(), "src/app/guides", slug, "opengraph-image.tsx"),
    "utf8",
  );
}

describe("fourth batch guide quality", () => {
  it("registers ten distinct reader promises with restrained metadata", () => {
    const titles = new Set<string>();
    const descriptions = new Set<string>();

    for (const slug of slugs) {
      const guide = getGuide(slug);
      expect(guide.datePublished, slug).toBe("2026-07-24");
      expect(guide.dateModified, slug).toBe(
        slug === "lovable-bolt-v0-ou-agence-saas" ||
          slug === "audit-technique-avant-reprendre-site"
          ? "2026-07-27"
          : "2026-07-24",
      );
      expect(guide.title.length, `${slug}: title`).toBeLessThanOrEqual(60);
      expect(
        guide.metaDescription.length,
        `${slug}: description`,
      ).toBeLessThanOrEqual(155);
      expect(titles.has(guide.title), `${slug}: duplicate title`).toBe(false);
      expect(
        descriptions.has(guide.metaDescription),
        `${slug}: duplicate description`,
      ).toBe(false);
      titles.add(guide.title);
      descriptions.add(guide.metaDescription);
    }
  });

  it("keeps every guide direct, restrained and useful without a sales call", () => {
    for (const slug of slugs) {
      const source = pageSource(slug);
      const lead = source.match(/<p className="lead">([\s\S]*?)<\/p>/)?.[1];
      const faq = source.match(
        /const faqItems(?::[^=]+)?\s*=\s*\[([\s\S]*?)\n\];/,
      )?.[1];

      expect(lead, `${slug}: direct lead`).toBeDefined();
      expect(lead, `${slug}: reader language`).toMatch(/\b(vous|votre|vos)\b/i);
      expect(
        source.match(/<GuideInlineCTA\b/g) || [],
        `${slug}: single CTA`,
      ).toHaveLength(1);
      expect(source, `${slug}: CTA destination`).toContain(
        'ctaHref="/demarrer-un-projet"',
      );
      expect(source, `${slug}: no phone pressure`).toContain(
        "showPhone={false}",
      );
      expect(source, `${slug}: no sidebar pressure`).toContain(
        "showSidebarCta={false}",
      );
      expect(source, `${slug}: metadata helper`).toContain(
        "buildGuideMetadata",
      );
      expect(source, `${slug}: schema helper`).toContain(
        "buildGuideStructuredData",
      );
      expect(source, `${slug}: schema restraint`).not.toMatch(
        /FAQPage|HowTo|wordCount|Offer/,
      );
      expect(source, `${slug}: visible FAQ`).toContain("faqItems={faqItems}");
      const faqCount = faq?.match(/\bquestion:\s*["']/g)?.length ?? 0;
      expect(faqCount, `${slug}: enough useful FAQs`).toBeGreaterThanOrEqual(
        6,
      );
      expect(faqCount, `${slug}: bounded FAQ list`).toBeLessThanOrEqual(12);
      expect(source, `${slug}: fictitious example disclosed`).toMatch(
        /exemple (?:illustratif )?(?:entièrement )?fictif|situation fictive|comparaison fictive/i,
      );
      expect(source, `${slug}: no fake client case`).toMatch(
        /ne décrit\s+ni\s+(?:un\s+)?client|n['’]est\s+ni\s+(?:un\s+)?client|ni\s+un\s+client\s+ni\s+un\s+cas/i,
      );
    }
  });

  it("creates a dedicated 1200 by 630 social route for every guide", () => {
    for (const slug of slugs) {
      const source = ogSource(slug);
      expect(source, `${slug}: image generator`).toContain(
        "createGuideOgImage",
      );
      expect(source, `${slug}: width`).toMatch(/width:\s*1200/);
      expect(source, `${slug}: height`).toMatch(/height:\s*630/);
      expect(source, `${slug}: visible labels`).toContain("labels:");
    }
  });

  it("tests HubSpot against the real sales process before replacement", () => {
    const source = pageSource("crm-sur-mesure-ou-hubspot");
    expect(source).toMatch(/HubSpot/);
    expect(source).toMatch(
      /(?:dix|10|douze|12) (?:actions|situations|scénarios)/i,
    );
    expect(source).toMatch(/export/i);
    expect(source).toMatch(/configur|intégr|sur mesure/i);
  });

  it("keeps AI builders on the pre-build decision, not the takeover", () => {
    const source = pageSource("lovable-bolt-v0-ou-agence-saas");
    ["Lovable", "Bolt", "v0"].forEach((term) => expect(source).toContain(term));
    expect(source).toMatch(/prototype|démonstration/i);
    expect(source).toMatch(/avant de (?:construire|développer|lancer)/i);
    expect(source).toMatch(/seul|accompagn/i);
  });

  it("states the SaaS GDPR boundary and routes legal uncertainty", () => {
    const source = pageSource("rgpd-saas-b2b");
    expect(source).toMatch(/responsable de traitement/i);
    expect(source).toMatch(/sous-traitant/i);
    expect(source).toMatch(/effacement|suppression/i);
    expect(source).toMatch(/DPO|juriste|avocat/i);
    expect(source).toMatch(/information générale|ne remplace pas/i);
  });

  it("judges automation on runs, errors, duplicates and replay", () => {
    const source = pageSource("zapier-make-ou-developpement-sur-mesure");
    expect(source).toMatch(/Zapier/);
    expect(source).toMatch(/Make/);
    expect(source).toMatch(/trente jours|30 jours/i);
    expect(source).toMatch(/doublon/i);
    expect(source).toMatch(/rejou|reprendre/i);
  });

  it("replays one difficult planning week before choosing software", () => {
    const source = pageSource("logiciel-planning-sur-mesure");
    ["compétence", "absence", "véhicule", "urgence"].forEach((term) =>
      expect(source.toLowerCase()).toContain(term),
    );
    expect(source).toMatch(/semaine/i);
    expect(source).toMatch(/outil standard|logiciel standard/i);
    expect(source).toMatch(/ne rien développer|reporter|attendre/i);
  });

  it("follows SaaS Ads from the signed contract back to the click", () => {
    const source = pageSource("google-ads-saas-b2b");
    ["Contrat signé", "Prospect accepté", "Recherche et clic"].forEach((term) =>
      expect(source).toContain(term),
    );
    expect(source).toContain("24 000 €");
    expect(source).toMatch(/marge/i);
  });

  it("separates local signals, modeled visits and observed sales", () => {
    const source = pageSource("google-ads-commerce-local");
    expect(source).toMatch(/itinéraire/i);
    expect(source).toMatch(/modélis/i);
    expect(source).toMatch(/vente observée/i);
    expect(source).toMatch(
      /ne prouve pas 120 visites|la caisse ne montre\s+pas 154/i,
    );
  });

  it("reads a SEO contract through cost, work, evidence and exit", () => {
    const source = pageSource("contrat-seo-duree-engagement");
    [
      "Durée et argent",
      "Travail prévu",
      "Preuves et actifs",
      "Fin du contrat",
    ].forEach((term) => expect(source).toContain(term));
    expect(source).toContain("16 400 € HT");
    expect(source).toMatch(/avocat/i);
  });

  it("starts the no-traffic diagnosis after indexation is proven", () => {
    const source = pageSource("site-indexe-sans-trafic");
    expect(source).toMatch(/index/i);
    expect(source).toMatch(/impression/i);
    expect(source).toMatch(/position/i);
    expect(source).toMatch(/clic/i);
    expect(source).toMatch(/conserver|améliorer/i);
    expect(source).toMatch(/fusionner|retirer/i);
  });

  it("keeps a takeover audit proportional and evidence based", () => {
    const source = pageSource("audit-technique-avant-reprendre-site");
    expect(source).toMatch(/Aucun GO de reprise avant levée/);
    expect(source).toMatch(/P2 · amélioration planifiée/);
    expect(source).toMatch(/\bSTOP\b/);
    expect(source).toMatch(/restaur/i);
    expect(source).toMatch(
      /(?:absence de (?:copie récupérable|preuve)|aucune copie récupérable)/i,
    );
    expect(source).toMatch(/ne garantit (?:pas|ni)|aucune garantie/i);
  });
});
