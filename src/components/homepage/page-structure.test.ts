import { describe, expect, it } from "vitest";
import { stripNav } from "@/components/design-shared/stripBody";
import { SERVICE_LINKS } from "@/lib/services";
import { bodyHtml } from "./body";
import { composedBodyHtml } from "./composed-body";

const pageBody = stripNav(composedBodyHtml);

function sectionOrder(html: string): string[] {
  return [...html.matchAll(/<section[^>]*class="([^"]*)"/g)].map(
    (match) => match[1].split(" ")[0],
  );
}

function visibleText(html: string): string {
  return html
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&[a-z]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

describe("structure commerciale de la page d'accueil", () => {
  it("répond au prix avant de demander un engagement", () => {
    const order = sectionOrder(pageBody);

    // Une preuve (réalisations) avant le prix, le prix avant la méthode,
    // et le bloc de conversion « Premier cadrage » après le comparatif.
    const index = (name: string) => order.indexOf(name);

    expect(index("real")).toBeGreaterThan(-1);
    expect(index("pricing")).toBeGreaterThan(index("real"));
    expect(index("methode")).toBeGreaterThan(index("pricing"));
    expect(index("describe")).toBeGreaterThan(index("compare"));
    // Le prix n'est plus en 14ᵉ position : il arrive dans la première moitié.
    expect(index("pricing")).toBeLessThan(order.length / 2);
  });

  it("n'expose la stack technique qu'une fois dans le corps de page", () => {
    // Visuel du hero (pills), bandeau « Notre stack » (logobar) : la rangée
    // « Stack & spécialités avancées » de la section confiance faisait doublon.
    expect(pageBody).not.toContain("tr-partners-kicker");
    expect(pageBody.match(/class="logobar"/g) ?? []).toHaveLength(1);
  });

  it("ne dépasse pas le volume de texte mesuré après l'audit", () => {
    // 4 312 mots à l'audit d'août 2026. Garde-fou anti-regonflement : toute
    // section ajoutée doit en remplacer une autre.
    const words = visibleText(pageBody).split(" ").filter(Boolean).length;
    expect(words).toBeLessThanOrEqual(4200);
  });

  it("limite les renvois « au devis » au strict variable", () => {
    // 27 renvois à l'audit. Le reste est affirmé (périmètre figé, forfait,
    // intervenants nommés) ou situé avant la signature.
    const deferrals =
      visibleText(pageBody).match(
        /(?:au|dans le|du)\s+(?:devis|contrat)|le devis\s+(?:précise|fixe|nomme|liste|inventorie)/gi,
      ) ?? [];
    expect(deferrals.length).toBeLessThanOrEqual(16);
  });

  it("annonce autant de services qu'il en existe, et les lie tous", () => {
    const announced = /Voir les (\d+) services/.exec(pageBody)?.[1];
    expect(announced).toBe(String(SERVICE_LINKS.length));

    const cards = [
      ...pageBody.matchAll(/<a class="svc-mini-card" href="([^"]+)"/g),
    ].map((match) => match[1]);
    // La carte 01 « demande la plus fréquente » est un lien à part (svc-hero).
    const linked = new Set([...cards, "/services/saas-applications-metier"]);
    for (const service of SERVICE_LINKS) {
      expect(linked, `service absent de la grille : ${service.path}`).toContain(
        service.path,
      );
    }
  });

  it("lie /tarifs et /services depuis la section tarifaire", () => {
    const pricing = /<section class="pricing"[\s\S]*?<\/section>/.exec(pageBody)?.[0] ?? "";
    expect(pricing).toContain('href="/tarifs"');
    expect(pricing).toContain('href="/services"');
  });
});

describe("maquettes de la page d'accueil", () => {
  it("n'ouvre pas la page sur un tableau de bord vide", () => {
    const heroVisual =
      /<div class="hero-visual[\s\S]*?<!-- Stack row/.exec(bodyHtml)?.[0] ?? "";
    expect(heroVisual).not.toContain("donnée à connecter");
    expect(heroVisual).not.toContain("objectif à définir");
    expect(heroVisual).not.toMatch(/<div class="hv-stat-v">—<\/div>/);
    // La maquette reste explicitement étiquetée.
    expect(heroVisual).toContain("EXEMPLE D'INTERFACE");
    expect(heroVisual).toContain("DONNÉES FICTIVES");
  });

  it("montre la structure d'un devis sans inventer de client ni de montant", () => {
    const quote = /<div class="dc-output">[\s\S]*?<div class="dc-q-actions">/.exec(
      bodyHtml,
    )?.[0] ?? "";
    expect(quote).not.toBe("");
    // Aucun montant : la maquette illustre les postes, pas un devis fictif.
    expect(quote).not.toMatch(/\d[\d\s ]{2,}€/);
    expect(quote).not.toMatch(/RÉF \d{4}-\d+/);
    expect(bodyHtml).not.toContain("PME fictive");
    expect(bodyHtml).not.toContain("28 000 €");
  });
});
