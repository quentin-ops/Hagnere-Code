import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { composedBodyHtml } from "./composed-body";

const servicePageSource = readFileSync(
  new URL("../../app/services/publicite-en-ligne/page.tsx", import.meta.url),
  "utf8",
);

describe("publicite en ligne public claims", () => {
  it("ne publie pas les anciennes performances et statistiques de missions non prouvées", () => {
    const publishedContent = `${composedBodyHtml}\n${servicePageSource}`;

    expect(publishedContent).not.toMatch(/spend\s*\+\s*40|\+42\s*%|[×x]\s*2[,.]3/i);
    expect(publishedContent).not.toMatch(/30[–-]50\s*%[^<.]{0,80}récup/i);
    expect(publishedContent).not.toMatch(/CPL\s*60[–-]180/i);
  });

  it("ne présente pas une équipe, une conformité ou des inclusions universelles", () => {
    const publishedContent = `${composedBodyHtml}\n${servicePageSource}`;

    expect(publishedContent).not.toMatch(/équipe dédiée\s*3|consultant senior dédié/i);
    expect(publishedContent).not.toMatch(/CNIL OK|100\s*%\s*(?:RGPD|des signaux)/i);
    expect(publishedContent).not.toMatch(/tout est inclus|tout inclus/i);
  });
});
