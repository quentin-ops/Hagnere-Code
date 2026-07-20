import { describe, expect, it } from "vitest";
import { stripFinalCta, stripFooter } from "./stripBody";

describe("stripBody", () => {
  it("preserves internal CTA markers and removes only the final CTA", () => {
    const html = `
<section id="mini-audit">
  <div><!-- CTA --><a href="#contact">Continuer</a></div>
</section>
<!-- CTA -->
<section class="legacy-final"><div>Ancien CTA</div></section>
<!-- FOOTER -->
<footer>Ancien footer</footer>`;

    const result = stripFinalCta(html);

    expect(result).toContain("id=\"mini-audit\"");
    expect(result).toContain("<!-- CTA --><a");
    expect(result).not.toContain("legacy-final");
    expect(result).toContain("<!-- FOOTER -->");
  });

  it("supports a labelled final CTA at the end of the document", () => {
    const html = `
<section>Contenu</section>
<!-- CTA FINAL — passage à l'acte -->
<section class="legacy-final">Ancien CTA</section>
`;

    expect(stripFinalCta(html)).toContain("<section>Contenu</section>");
    expect(stripFinalCta(html)).not.toContain("legacy-final");
  });

  it("removes the legacy footer block", () => {
    const html = `<main>Contenu</main>\n<!-- FOOTER -->\n<footer>Ancien footer</footer>`;

    expect(stripFooter(html)).toBe("<main>Contenu</main>\n");
  });
});
