import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { GuideTable } from "./guide-content-blocks";

describe("GuideTable responsive reading", () => {
  it("renders complete labelled cards for phone screens", () => {
    const html = renderToStaticMarkup(
      <GuideTable
        caption="Quel canal choisir ?"
        headers={["Situation", "Choix", "Pourquoi", "Condition"]}
        rows={[
          [
            "Besoin de tester rapidement",
            "Google Ads",
            "Afficher une annonce sur une recherche précise",
            "Une page et un suivi commercial prêts",
          ],
        ]}
      />,
    );

    expect(html).toContain("not-prose my-6 sm:hidden");
    expect(html).toContain('role="group"');
    expect(html).toContain("Quel canal choisir ?");
    expect(html).toContain("Situation");
    expect(html).toContain("Besoin de tester rapidement");
    expect(html).toContain("Choix");
    expect(html).toContain("Google Ads");
    expect(html).toContain("Pourquoi");
    expect(html).toContain("Condition");
  });

  it("keeps the semantic table for larger screens", () => {
    const html = renderToStaticMarkup(
      <GuideTable
        caption="Comparaison simple"
        headers={["Option", "Coût"]}
        rows={[["Option A", "1 000 € HT"]]}
      />,
    );

    expect(html).toContain("hidden overflow-x-auto sm:block");
    expect(html).toContain("<table");
    expect(html).toContain("<caption");
    expect(html).toContain("Comparaison simple");
    expect(html).toContain('scope="row"');
  });
});
