import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

import { navHtml } from "@/components/design-shared/nav-html";
import { SERVICE_LINKS } from "@/lib/services";
import {
  CATALOG_HEADING,
  SERVICE_CARDS,
  SERVICE_FAMILIES,
  servicesOfFamily,
} from "./ServicesHubPage";

const hubSource = readFileSync(
  new URL("./ServicesHubPage.tsx", import.meta.url),
  "utf8",
);

const routePageSource = readFileSync(
  new URL("../../app/services/page.tsx", import.meta.url),
  "utf8",
);

/**
 * L'audit de 2026-08 avait relevé que le hub /services annonçait « Dix services »
 * au-dessus de onze cartes, affichait « Sur devis » sur les onze budgets et n'avait
 * aucun test. Le catalogue est désormais dérivé du registre : ces invariants
 * ferment l'écart.
 */
describe("hub /services", () => {
  it("rend exactement une carte par service publié", () => {
    const cardPaths = SERVICE_CARDS.map((card) => card.href).sort();
    const registryPaths = SERVICE_LINKS.map((service) => service.path).sort();

    expect(cardPaths).toEqual(registryPaths);
  });

  it("annonce dans le titre le nombre de cartes réellement rendues", () => {
    expect(CATALOG_HEADING.startsWith(`${SERVICE_CARDS.length} services`)).toBe(
      true,
    );
    expect(hubSource).not.toMatch(/Dix services|Onze services/);
  });

  it("n'annonce jamais un nombre de services différent du registre", () => {
    const declaredCounts = [...routePageSource.matchAll(/(\d+)\s+services/g)].map(
      (match) => Number(match[1]),
    );

    for (const count of declaredCounts) {
      expect(count).toBe(SERVICE_LINKS.length);
    }
  });

  it("ne laisse « Sur devis » que sur les services dont la page refuse de chiffrer", () => {
    const withoutBudget = SERVICE_CARDS.filter(
      (card) => card.budget === "Sur devis",
    ).map((card) => card.href);

    // /services/application-mobile écrit « on ne chiffre jamais avant d'avoir
    // compris votre cas d'usage » et /services/referencement-google ne publie
    // aucun montant : ces deux cartes sont les seules à pouvoir rester muettes.
    expect(withoutBudget.sort()).toEqual([
      "/services/application-mobile",
      "/services/referencement-google",
    ]);
  });

  it("ne renvoie pas au devis en guise de preuve", () => {
    for (const card of SERVICE_CARDS) {
      expect(card.proof, card.href).not.toMatch(/chiffré au devis/i);
    }
  });

  it("ne présente pas la propriété du code comme acquise sans réserve", () => {
    expect(hubSource).not.toMatch(/Code chez vous/i);
  });

  it("ne qualifie pas les produits du groupe d'études déclaratives", () => {
    expect(hubSource).not.toMatch(/études publiques déclaratives/i);
  });

  it("reprend les trois familles de la navigation, sans en inventer une quatrième", () => {
    expect(SERVICE_FAMILIES).toHaveLength(3);

    for (const family of SERVICE_FAMILIES) {
      // La nav écrit ses libellés en HTML : « Protéger &amp; opérer ».
      const asHtml = family.kicker.replace(/&/g, "&amp;");
      expect(
        navHtml,
        `${family.kicker} : famille absente du méga-menu`,
      ).toContain(`<span class="hc-mega-cat-label">${asHtml}</span>`);
    }

    // Le héros annonçait « 4 familles » au-dessus de quatre voies alors que la
    // nav et l'accueil n'en publient que trois.
    expect(hubSource).not.toMatch(/\b4 familles\b/);
    expect(hubSource).toContain("{families.length} familles");
  });

  it("range chaque carte du catalogue sous une famille non vide", () => {
    const grouped = SERVICE_FAMILIES.flatMap((family) =>
      servicesOfFamily(family.id),
    );

    // Aucune carte orpheline, aucune carte rendue deux fois.
    expect(grouped.map((card) => card.href).sort()).toEqual(
      SERVICE_CARDS.map((card) => card.href).sort(),
    );

    for (const family of SERVICE_FAMILIES) {
      expect(
        servicesOfFamily(family.id).length,
        `${family.kicker} : intertitre sans carte`,
      ).toBeGreaterThan(0);
    }
  });

  it("n'annonce jamais un nombre de familles différent de celui rendu", () => {
    expect(CATALOG_HEADING).toContain(`${SERVICE_FAMILIES.length} familles`);
  });

  it("enchaîne les titres du hub sans saut de niveau", () => {
    // WCAG 1.3.1 : les cartes rangées sous un intertitre de famille doivent
    // descendre d'un niveau, sinon le groupement n'existe que visuellement.
    const levels = [...hubSource.matchAll(/<(h[1-6])[^>]*>/g)].map((match) =>
      Number(match[1][1]),
    );
    expect(levels.length).toBeGreaterThan(5);

    let previous = 0;
    for (const level of levels) {
      if (previous > 0) {
        expect(level, `saut de h${previous} à h${level}`).toBeLessThanOrEqual(
          previous + 1,
        );
      }
      previous = level;
    }
    expect(levels.filter((level) => level === 1)).toHaveLength(1);
  });

  it("ne colle pas deux phrases dans le nom accessible d'un titre", () => {
    // Un <br> n'insère aucune espace dans le calcul du nom accessible, et JSX
    // supprime les blancs qui bordent une balise : l'espace doit être explicite.
    for (const heading of hubSource.matchAll(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/g)) {
      for (const br of heading[2].matchAll(/([\s\S]{0,60})<br\s*\/?>/g)) {
        expect(
          br[1],
          `${heading[1]} : espace explicite manquante avant <br>`,
        ).toMatch(/(?:\{\s*["']\s["']\s*\}|&nbsp;)\s*$/);
      }
    }
  });
});
