import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

describe("Calendly configuration contract", () => {
  it("keeps the booking slug in one source file", () => {
    const root = process.cwd();
    const files = [
      "src/components/design-shared/CalendlyEmbed.tsx",
      "src/components/design-shared/SiteFooter.tsx",
      "src/components/homepage/body.ts",
      "src/components/contact/body.ts",
      "src/app/api/project-inquiry/route.ts",
      "src/app/rendez-vous/page.tsx",
      "src/app/demarrer-un-projet/merci/page.tsx",
    ];

    for (const file of files) {
      const source = fs.readFileSync(path.join(root, file), "utf8");
      expect(source, file).not.toContain(
        "calendly.com/hagnere-patrimoine/hagnere-code-entretien-de-decouverte",
      );
      expect(source, file).toContain("CALENDLY_URL");
    }
  });
});
