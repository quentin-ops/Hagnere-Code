import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getGuide } from "./guides";

const slugs = [
  "power-apps-ou-application-sur-mesure",
  "logiciel-gestion-stock-sur-mesure",
  "facturation-abonnements-saas",
  "securite-saas-b2b",
  "seo-saas-b2b",
  "calculer-cout-par-lead-google-ads",
  "google-ads-ou-meta-ads",
  "sla-maintenance-applicative",
  "dette-technique-cout-entreprise",
  "prise-rendez-vous-en-ligne-site-vitrine",
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

describe("third batch guide quality", () => {
  it("keeps every topic registered with a distinct public promise", () => {
    const titles = new Set<string>();
    const descriptions = new Set<string>();

    for (const slug of slugs) {
      const guide = getGuide(slug);
      expect(guide.datePublished, slug).toBe("2026-07-23");
      expect(guide.dateModified, slug).toBe("2026-07-23");
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

  it("uses the same restrained technical and commercial contract", () => {
    for (const slug of slugs) {
      const source = pageSource(slug);
      const lead = source.match(/<p className="lead">([\s\S]*?)<\/p>/)?.[1];
      const faq = source.match(/const faqItems\s*=\s*\[([\s\S]*?)\n\];/)?.[1];

      expect(lead, `${slug}: direct lead`).toBeDefined();
      expect(lead, `${slug}: reader language`).toMatch(/\b(vous|votre|vos)\b/i);
      expect(
        source.match(/<GuideInlineCTA\b/g) || [],
        `${slug}: CTA`,
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
      expect(source, `${slug}: article schema`).toContain('"@type": "Article"');
      expect(source, `${slug}: breadcrumb schema`).toContain(
        '"@type": "BreadcrumbList"',
      );
      expect(source, `${slug}: schema restraint`).not.toMatch(
        /FAQPage|HowTo|wordCount|Offer/,
      );
      expect(source, `${slug}: visible FAQ`).toContain("faqItems={faqItems}");
      expect(
        faq?.match(/\bquestion:\s*["']/g) || [],
        `${slug}: FAQ pressure`,
      ).toHaveLength(6);
      expect(source, `${slug}: fictitious example disclosed`).toMatch(
        /Exemple illustratif fictif|exemple entièrement fictif/i,
      );
    }
  });

  it("creates one real 1200 by 630 social image per guide", () => {
    for (const slug of slugs) {
      const source = ogSource(slug);
      expect(source, `${slug}: ImageResponse`).toContain("new ImageResponse");
      expect(source, `${slug}: width`).toMatch(/width:\s*1200/);
      expect(source, `${slug}: height`).toMatch(/height:\s*630/);
      expect(source, `${slug}: title represented`).toMatch(
        /Hagnéré Code|Hagnere Code/,
      );
    }
  });

  it("keeps Power Apps grounded in the existing tenant and its limits", () => {
    const source = pageSource("power-apps-ou-application-sur-mesure");
    expect(source).toMatch(/Power Apps/i);
    expect(source).toContain("Dataverse");
    expect(source).toMatch(/hors connexion|hors-ligne/i);
    expect(source).toContain("Developer Plan");
    expect(source).not.toMatch(/gratuit avec Microsoft 365/i);
  });

  it("starts stock software with the conflicting physical reality", () => {
    const source = pageSource("logiciel-gestion-stock-sur-mesure");
    ["42", "38", "41"].forEach((value) => expect(source).toContain(value));
    expect(source).toMatch(/stock (?:physique|réel)/i);
    expect(source).toMatch(/réserv/i);
    expect(source).toMatch(/ne rien développer|attendre|reporter/i);
  });

  it("separates subscription, payment, invoice and access", () => {
    const source = pageSource("facturation-abonnements-saas");
    ["abonnement", "paiement", "facture", "accès", "avoir"].forEach((term) =>
      expect(source.toLowerCase()).toContain(term),
    );
    expect(source).toMatch(/prorata/i);
    expect(source).toMatch(/ne se résume pas|ne sont pas synonymes|≠/i);
  });

  it("turns a security questionnaire into facts instead of certification", () => {
    const source = pageSource("securite-saas-b2b");
    ["sauvegarde", "restauration", "journal", "CNIL"].forEach((term) =>
      expect(source).toContain(term),
    );
    expect(source).toMatch(/suspend/i);
    expect(source).not.toMatch(/certifié ANSSI|conforme OWASP donc sécurisé/i);
  });

  it("connects SaaS SEO to sales conversations and three different pages", () => {
    const source = pageSource("seo-saas-b2b");
    expect(source).toMatch(/trente articles/i);
    expect(source).toMatch(/dix (?:conversations|échanges|appels)/i);
    expect(source).toMatch(/trois pages/i);
    expect(source).toContain("Search Console");
    expect(source).not.toMatch(/\b[234] articles par mois\b/i);
  });

  it("keeps every Google Ads denominator and zero case explicit", () => {
    const source = pageSource("calculer-cout-par-lead-google-ads");
    ["35 €", "250 €", "1 000 €", "données insuffisantes"].forEach((term) =>
      expect(source).toContain(term),
    );
    expect(source).toMatch(/demande unique/i);
    expect(source).toMatch(/lead qualifié/i);
    expect(source).toMatch(/nouveau client/i);
  });

  it("compares Google and Meta by the demand each one can address", () => {
    const source = pageSource("google-ads-ou-meta-ads");
    expect(source).toMatch(
      /demande (?:déjà |clairement )?(?:exprimée|active)/i,
    );
    expect(source).toMatch(/Facebook|Instagram/);
    expect(source).toMatch(/objectif/i);
    expect(source).toMatch(/aucun des deux|attendre|reporter/i);
  });

  it("separates the moments hidden behind one maintenance SLA", () => {
    const source = pageSource("sla-maintenance-applicative");
    ["prise en charge", "rétablissement", "restauration"].forEach((term) =>
      expect(source.toLowerCase()).toContain(term),
    );
    expect(source).toMatch(/RPO|point de reprise/i);
    expect(source).toMatch(/heures ouvrées|plage de service/i);
  });

  it("does not turn technical debt into an automatic rewrite", () => {
    const source = pageSource("dette-technique-cout-entreprise");
    expect(source).toMatch(/dette technique/i);
    expect(source).toMatch(/trois semaines/i);
    expect(source).toMatch(/cinq (?:changements|évolutions|incidents)/i);
    expect(source).toMatch(/réécri/i);
    expect(source).toMatch(/tolérer|conserver|ne rien refaire/i);
  });

  it("starts online booking with confirmation, resources and necessary data", () => {
    const source = pageSource("prise-rendez-vous-en-ligne-site-vitrine");
    ["créneau", "ressource", "confirmation", "CNIL"].forEach((term) =>
      expect(source).toContain(term),
    );
    expect(source).toMatch(/nécessaire|minimisation/i);
    expect(source).toMatch(/formulaire|agenda standard/i);
  });
});
