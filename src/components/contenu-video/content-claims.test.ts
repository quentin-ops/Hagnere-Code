import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { composedBodyHtml } from "./composed-body";

const servicePageSource = readFileSync(
  new URL("../../app/services/contenu-video/page.tsx", import.meta.url),
  "utf8",
);

describe("contenu video public claims", () => {
  it("ne présente pas des métiers créatifs non établis comme salariés internes", () => {
    const publishedContent = `${composedBodyHtml}\n${servicePageSource}`;

    expect(publishedContent).not.toMatch(/studio interne|deux monteurs permanents/i);
    expect(publishedContent).not.toMatch(/(?:DA|media buyer)[^<.]{0,40}interne/i);
    expect(publishedContent).toContain("statut interne ou externe");
  });

  it("ne renvoie pas vers une charte IA inexistante et conserve une validation humaine", () => {
    expect(composedBodyHtml).not.toContain("/charte-ia");
    expect(composedBodyHtml).toContain("validation finale reste humaine");
  });
});
