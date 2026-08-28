import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

/**
 * L'inventaire « Stockages utilisés par le site » de /legal/cookies est
 * présenté comme exhaustif, et la page s'engage à être actualisée « lorsqu'un
 * stockage ou un service tiers change ». Rien ne le vérifiait : la clé
 * d'idempotence du tunnel a pu être écrite pendant des mois sans figurer au
 * tableau. Ce test compare l'inventaire aux écritures réelles du code.
 */

const projectRoot = process.cwd();
const cookiesPolicyPath = "src/components/legal/content/cookies.tsx";

/**
 * Clés écrites via une variable que l'analyse statique ne peut pas résoudre
 * (paramètre de fonction, valeur passée par l'appelant). Chacune doit être
 * documentée ici avec son point d'appel, et reste soumise au même contrôle
 * d'inventaire que les autres.
 */
const INDIRECT_STORAGE_KEYS: { key: string; writtenFrom: string }[] = [
  {
    key: "pf:converted",
    writtenFrom:
      "src/app/demarrer-un-projet/merci/ConversionTracker.tsx → dedupeKey de trackLeadConversion",
  },
];

function sourceFiles(directory: string): string[] {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(absolutePath);
    if (!/\.(?:ts|tsx)$/.test(entry.name) || /\.test\.(?:ts|tsx)$/.test(entry.name)) {
      return [];
    }
    return [absolutePath];
  });
}

const sources = sourceFiles(path.join(projectRoot, "src")).map((file) => ({
  file: path.relative(projectRoot, file),
  content: fs.readFileSync(file, "utf8"),
}));

const allSources = sources.map((entry) => entry.content).join("\n");

const QUOTED = /^\s*(["'`])([^"'`]*)\1\s*$/;

/** Cherche `const IDENT = "…"` (ou un alias `const IDENT = AUTRE`). */
function declaredValue(identifier: string, content: string): string | undefined {
  const declaration = new RegExp(
    `(?:const|let|var)\\s+${identifier}\\s*(?::[^=]*)?=\\s*([^;\\n]+)`,
  );
  return declaration.exec(content)?.[1]?.trim();
}

/** Résout l'expression passée en premier argument de setItem, alias compris. */
function resolveStorageKey(
  expression: string,
  fileContent: string,
  depth = 0,
): string | undefined {
  const trimmed = expression.trim();
  const quoted = QUOTED.exec(trimmed);
  if (quoted) return quoted[2];
  if (depth > 4 || !/^[A-Za-z_$][\w$]*$/.test(trimmed)) return undefined;

  // Déclaration locale au fichier d'abord : `key` ou `STORAGE_KEY` sont des
  // noms courants, une résolution globale piocherait au hasard.
  const local = declaredValue(trimmed, fileContent);
  if (local) return resolveStorageKey(local, fileContent, depth + 1);

  // Sinon la constante est importée : on la cherche dans tout le dépôt.
  for (const entry of sources) {
    const value = declaredValue(trimmed, entry.content);
    if (value) return resolveStorageKey(value, entry.content, depth + 1);
  }
  return undefined;
}

interface StorageWrite {
  file: string;
  expression: string;
  key?: string;
}

function collectStorageWrites(): StorageWrite[] {
  const call = /(?:session|local)Storage\s*\??\.\s*setItem\s*\(\s*([^,)]+)/g;
  const writes: StorageWrite[] = [];

  for (const entry of sources) {
    for (const match of entry.content.matchAll(call)) {
      const expression = match[1].trim();
      writes.push({
        file: entry.file,
        expression,
        key: resolveStorageKey(expression, entry.content),
      });
    }
  }
  return writes;
}

describe("browser storage inventory published on /legal/cookies", () => {
  const policy = fs.readFileSync(
    path.join(projectRoot, cookiesPolicyPath),
    "utf8",
  );
  const writes = collectStorageWrites();

  it("finds the browser writes it is supposed to audit", () => {
    // Si l'extraction casse, le test deviendrait vert à vide : on exige un
    // minimum d'écritures détectées et la présence des deux supports.
    expect(writes.length).toBeGreaterThanOrEqual(4);
    expect(allSources).toMatch(/sessionStorage\s*\??\.\s*setItem/);
    expect(allSources).toMatch(/localStorage\s*\??\.\s*setItem/);
  });

  it("declares every key written by the site, with no unresolved write", () => {
    const documented = new Set(
      INDIRECT_STORAGE_KEYS.map((entry) => entry.key),
    );
    const unresolved = writes
      .filter((write) => write.key === undefined)
      .map((write) => `${write.file} → setItem(${write.expression})`);

    // Une écriture non résoluble doit être documentée dans
    // INDIRECT_STORAGE_KEYS, sinon elle échapperait silencieusement à
    // l'inventaire. Une seule aujourd'hui : le dedupeKey de lead-conversion.
    expect(unresolved.length, unresolved.join("\n")).toBe(
      INDIRECT_STORAGE_KEYS.length,
    );

    const keys = new Set([
      ...writes.flatMap((write) => (write.key ? [write.key] : [])),
      ...documented,
    ]);
    expect(keys.size).toBeGreaterThanOrEqual(5);

    for (const key of keys) {
      expect(
        policy,
        `${key} est écrite dans le navigateur mais absente du tableau « Stockages utilisés par le site »`,
      ).toContain(`<code>${key}</code>`);
    }
  });

  it("never lists a storage key the code no longer writes", () => {
    const inventoried = Array.from(
      policy.matchAll(/<td><code>([^<]+)<\/code><\/td>/g),
      (match) => match[1],
    );

    expect(inventoried.length).toBeGreaterThanOrEqual(5);
    for (const key of inventoried) {
      expect(
        allSources.includes(`"${key}"`) || allSources.includes(`'${key}'`),
        `${key} est inventoriée sur /legal/cookies mais n'existe plus dans le code`,
      ).toBe(true);
    }
  });
});
