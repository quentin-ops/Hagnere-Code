import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

describe("agence Next.js public claims", () => {
  it("ne republie pas les anciennes métriques internes sans dossier de preuve", () => {
    const source = fs.readFileSync(
      path.join(process.cwd(), "src/app/agence-next-js/page.tsx"),
      "utf8",
    );

    expect(source).not.toMatch(
      /\+340\s*%|4[,.]2\s*%|pipeline commercial\s*[×x]3|[×x]2[,.]5 de leads|acquisition sous 80\s*€/i,
    );
  });
});
