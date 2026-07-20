import { describe, expect, it } from "vitest";
import { splitContactPageHtml } from "./contact-html";

describe("splitContactPageHtml", () => {
  it("keeps a menu containing nested nav elements intact", () => {
    const html = `
<!-- NAV -->
<nav class="main"><nav class="nested"></nav></nav>
<!-- CONTACT HERO -->
<section class="legacy-contact">Ancien formulaire</section>
<section class="content">Contenu</section>`;

    const result = splitContactPageHtml(html);

    expect(result.navHtml).toContain('<nav class="main">');
    expect(result.navHtml).toContain('<nav class="nested"></nav></nav>');
    expect(result.contentHtml).not.toContain("legacy-contact");
    expect(result.contentHtml).toContain('<section class="content">');
  });

  it("does not discard content when the contact marker is absent", () => {
    const html = "<section>Contenu</section>";

    expect(splitContactPageHtml(html)).toEqual({
      navHtml: "",
      contentHtml: html,
    });
  });
});
