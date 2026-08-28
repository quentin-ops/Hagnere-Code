import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

/**
 * `sites-vitrines/sections/refuse.ts` a longtemps été une copie octet pour
 * octet de `saas-applications/sections/refuse.ts` (seul le préfixe de classe
 * CSS changeait). Résultat : une page vendue sur « création de site vitrine »
 * refusait des « clones de SaaS » et parlait de « premier utilisateur payant ».
 *
 * Ce test compare le texte visible des sections « ce qu'on refuse » de toutes
 * les pages services deux à deux et échoue dès qu'une paire dépasse 80 % de
 * segments communs.
 */
const COMPONENTS_DIR = path.join(process.cwd(), "src", "components");
const MAX_SHARED_RATIO = 0.8;

function refuseFiles(): string[] {
  return fs
    .readdirSync(COMPONENTS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) =>
      path.join(COMPONENTS_DIR, entry.name, "sections", "refuse.ts"),
    )
    .filter((file) => fs.existsSync(file));
}

/** Texte réellement lu par un visiteur : sans SVG, sans balises, sans classes. */
function visibleText(file: string): string {
  return fs
    .readFileSync(file, "utf8")
    .replace(/\/\/[^\n]*/g, " ")
    .replace(/\/\*[\s\S]*?\*\//g, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<svg[\s\S]*?<\/svg>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .toLowerCase()
    .trim();
}

function segments(text: string): Set<string> {
  return new Set(
    text
      .split(/[.!?—;]/)
      .map((segment) => segment.trim())
      .filter((segment) => segment.length > 12),
  );
}

describe("sections « ce qu'on refuse » des pages services", () => {
  const files = refuseFiles();

  it("couvre bien plusieurs pages services", () => {
    expect(files.length).toBeGreaterThan(2);
    expect(files).toContain(
      path.join(COMPONENTS_DIR, "sites-vitrines", "sections", "refuse.ts"),
    );
  });

  it("ne republie pas le même texte de refus sur deux services différents", () => {
    const parsed = files.map((file) => ({
      label: path.relative(process.cwd(), file),
      segments: segments(visibleText(file)),
    }));

    for (const entry of parsed) {
      expect(entry.segments.size, `${entry.label}: section vide ?`).toBeGreaterThan(4);
    }

    for (let i = 0; i < parsed.length; i += 1) {
      for (let j = i + 1; j < parsed.length; j += 1) {
        const a = parsed[i];
        const b = parsed[j];
        const shared = [...a.segments].filter((segment) =>
          b.segments.has(segment),
        ).length;
        const ratio = shared / Math.min(a.segments.size, b.segments.size);

        expect(
          ratio,
          `${a.label} et ${b.label} partagent ${Math.round(ratio * 100)} % de leur texte de refus`,
        ).toBeLessThanOrEqual(MAX_SHARED_RATIO);
      }
    }
  });

  it("parle bien de sites vitrines et non de SaaS sur la page vitrine", () => {
    const text = visibleText(
      path.join(COMPONENTS_DIR, "sites-vitrines", "sections", "refuse.ts"),
    );

    expect(text).not.toMatch(/clones? d'un saas|wrappers? ia|mvp complet/);
    expect(text).not.toMatch(/premier utilisateur payant/);
    expect(text).toMatch(/refonte/);
    expect(text).toMatch(/contenu/);
    expect(text).toMatch(/pages villes/);
  });
});
