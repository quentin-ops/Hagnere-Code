import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { scaffoldGuide } from "../../scripts/scaffold-guide.mjs";

const temporaryRoots: string[] = [];

function makeRoot() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "hc-guide-scaffold-"));
  temporaryRoots.push(root);
  fs.mkdirSync(path.join(root, "src", "lib"), { recursive: true });
  fs.mkdirSync(path.join(root, "docs", "research"), { recursive: true });
  fs.writeFileSync(
    path.join(root, "src", "lib", "guides.ts"),
    `export const GUIDES = [\n];\n\n/** Une entrée n'est publique que si sa porte éditoriale est explicitement ouverte. */\n`,
  );
  fs.copyFileSync(
    path.join(process.cwd(), "docs", "research", "_modele-guide.md"),
    path.join(root, "docs", "research", "_modele-guide.md"),
  );
  return root;
}

afterEach(() => {
  for (const root of temporaryRoots.splice(0)) {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

describe("scaffold-guide", () => {
  it("creates a private shell, an OG image, a dossier and a draft registry entry", () => {
    const root = makeRoot();
    const result = scaffoldGuide({
      root,
      templateDir: path.join(process.cwd(), "scripts", "templates", "guide"),
      slug: "diagnostic-test",
      title: "Diagnostic de test",
      section: "Référencement naturel",
      now: "2026-08-18T12:00:00.000Z",
    });

    expect(result.status).toBe("draft");
    expect(
      fs.existsSync(
        path.join(root, "src", "app", "guides", "diagnostic-test", "page.tsx"),
      ),
    ).toBe(true);
    expect(
      fs.readFileSync(path.join(root, "src", "lib", "guides.ts"), "utf8"),
    ).toContain('editorialStatus: "draft"');
    expect(
      fs.readFileSync(
        path.join(root, "docs", "research", "diagnostic-test.md"),
        "utf8",
      ),
    ).toContain("Slug : diagnostic-test");
  });

  it("refuses an invalid slug and never overwrites an existing guide", () => {
    const root = makeRoot();
    const input = {
      root,
      templateDir: path.join(process.cwd(), "scripts", "templates", "guide"),
      slug: "guide-valide",
      title: "Guide valide",
      section: "SaaS et MVP",
    };

    expect(() => scaffoldGuide({ ...input, slug: "Guide Invalide" })).toThrow(
      /slug doit être/,
    );
    scaffoldGuide(input);
    expect(() => scaffoldGuide(input)).toThrow(/Refus d'écraser/);
  });

  it("can reuse a historical research dossier without modifying it", () => {
    const root = makeRoot();
    const dossier = path.join(root, "docs", "research", "guide-historique.md");
    fs.writeFileSync(dossier, "dossier historique conservé\n");

    const result = scaffoldGuide({
      root,
      templateDir: path.join(process.cwd(), "scripts", "templates", "guide"),
      slug: "guide-historique",
      title: "Guide historique",
      section: "Référencement naturel",
      reuseResearch: true,
    });

    expect(result.research).toBe("reused");
    expect(fs.readFileSync(dossier, "utf8")).toBe(
      "dossier historique conservé\n",
    );
  });
});
