import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { GuideInlineCTA, GuideTable } from "./guide-content-blocks";

const HEADERS = ["Situation", "Choix", "Pourquoi", "Condition"];
const ROW = [
  "Besoin de tester rapidement",
  "Google Ads",
  "Afficher une annonce sur une recherche précise",
  "Une page et un suivi commercial prêts",
];

const occurrences = (haystack: string, needle: string): number =>
  haystack.split(needle).length - 1;

describe("GuideTable", () => {
  const html = renderToStaticMarkup(
    <GuideTable caption="Quel canal choisir ?" headers={HEADERS} rows={[ROW]} />,
  );

  /**
   * Invariant central de ce composant.
   *
   * Il rendait auparavant deux fois le même contenu — des cartes `md:hidden`
   * pour le téléphone et un tableau `hidden md:block` pour les écrans larges.
   * Le CSS n'en montrait qu'un, mais les deux étaient servis : tout extracteur
   * de texte qui n'applique pas les feuilles de style lisait le tableau en
   * double, à commencer par les robots des assistants génératifs.
   */
  it("ne rend chaque contenu de cellule qu'une seule fois", () => {
    for (const cell of ROW) {
      expect(occurrences(html, cell), `« ${cell} » rendu plusieurs fois`).toBe(
        1,
      );
    }
    expect(occurrences(html, "<table")).toBe(1);
  });

  it("réinjecte les libellés de colonne par attribut, pas par du texte", () => {
    for (const header of HEADERS) {
      // Une fois dans l'en-tête, une fois en `data-label` : l'attribut n'est
      // pas du contenu textuel et n'est donc pas extrait comme tel.
      expect(html).toContain(`data-label="${header}"`);
      expect(
        occurrences(html, `>${header}<`),
        `« ${header} » écrit plus d'une fois en texte`,
      ).toBe(1);
    }
  });

  it("conserve la sémantique de tableau malgré la mise en cartes", () => {
    // Passer les éléments en `display: block` sous 768 px leur ferait perdre
    // leur rôle implicite : les rôles sont donc déclarés explicitement.
    expect(html).toContain('role="table"');
    expect(html).toContain('role="rowgroup"');
    expect(html).toContain('role="row"');
    expect(html).toContain('role="columnheader"');
    expect(html).toContain('role="rowheader"');
    expect(html).toContain('role="cell"');
    expect(html).toContain('scope="col"');
    expect(html).toContain('scope="row"');
    expect(html).toContain("guide-table");
  });

  it("porte un intitulé accessible et l'affiche sur petit écran", () => {
    expect(html).toContain("<caption");
    expect(html).toContain("Quel canal choisir ?");
    // Visible en une colonne, replié en `sr-only` à partir de `md` : la classe
    // reste reconnue par l'exclusion du temps de lecture.
    expect(html).toMatch(/<caption[^>]*class="[^"]*sr-only/);
  });

  it("dérive un intitulé descriptif quand aucun n'est fourni", () => {
    const derived = renderToStaticMarkup(
      <GuideTable headers={["Option", "Coût"]} rows={[["Option A", "1 000 €"]]} />,
    );
    expect(derived).toContain("Comparaison Option, Coût");
    expect(derived).toMatch(/<caption[^>]*class="[^"]*sr-only/);
  });

  it("ne réserve la région défilable qu'aux tableaux larges", () => {
    expect(html).toContain('role="region"');
    const narrow = renderToStaticMarkup(
      <GuideTable headers={["Option", "Coût"]} rows={[["Option A", "1 000 €"]]} />,
    );
    expect(narrow).not.toContain('role="region"');
    // La largeur minimale ne s'applique qu'à partir de `md` : en cartes, elle
    // provoquerait un débordement horizontal.
    expect(html).toContain("md:min-w-[560px]");
  });
});

describe("GuideInlineCTA actions", () => {
  it("can expose only the declared primary action", () => {
    const html = renderToStaticMarkup(
      <GuideInlineCTA
        ctaHref="/demarrer-un-projet"
        ctaLabel="Présenter le trajet du bon"
        showPhone={false}
      />,
    );

    expect(html).toContain('href="/demarrer-un-projet"');
    expect(html).toContain("Présenter le trajet du bon");
    expect(html).not.toContain("tel:");
  });
});
