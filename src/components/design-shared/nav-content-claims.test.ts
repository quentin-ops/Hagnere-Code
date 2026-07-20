import { describe, expect, it } from "vitest";
import { navHtml } from "./nav-html";

describe("shared navigation public claims", () => {
  it("does not turn public links into proof of operation or promise price and dates", () => {
    expect(navHtml).not.toMatch(/produits en production|conçus et exploités par nous|prix tenu|dates contractuelles/i);
    expect(navHtml).toContain("disponibilité et fonctions visibles");
    expect(navHtml).toContain("périmètre, prix et jalons écrits au devis");
  });
});
