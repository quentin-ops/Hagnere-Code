import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const resourceRoot = join(
  process.cwd(),
  "public",
  "ressources",
  "jeu-essai-migration-excel",
);
const zipPath = join(
  process.cwd(),
  "public",
  "ressources",
  "jeu-essai-migration-excel.zip",
);

function lines(file: string): string[] {
  return readFileSync(join(resourceRoot, file), "utf8")
    .replace(/^\uFEFF/, "")
    .trimEnd()
    .split(/\r?\n/);
}

describe("reproducible Excel migration test kit", () => {
  it("ships 3,050 deterministic starting rows and ten referenced attachments", () => {
    const rows = lines("jeu-depart-3050-lignes.csv");
    expect(rows).toHaveLength(3_051);
    expect(rows[1]).toContain("X-0001;1;");
    expect(rows.at(-1)).toContain("X-3050;3050;");

    const amounts = rows.slice(1).map((row) => Number(row.split(";")[1]));
    expect(amounts.reduce((sum, amount) => sum + amount, 0)).toBe(4_652_775);
    expect(
      rows.slice(1).filter((row) => row.includes("pieces-jointes/")),
    ).toHaveLength(10);
  });

  it("keeps the import lot on the exact business schema and the oracle separate", () => {
    const startingRows = lines("jeu-depart-3050-lignes.csv");
    const importRows = lines("lot-import-100-lignes.csv");
    const oracleRows = lines("oracle-import.csv");

    expect(importRows).toHaveLength(101);
    expect(importRows[0]).toBe(startingRows[0]);
    expect(importRows[0]).toBe(
      "id;montant_eur;date_intervention;statut;responsable;piece_jointe;commentaire",
    );
    expect(importRows.join("\n")).not.toMatch(
      /decision_attendue|motif_attendu|ACCEPTER|REJETER/,
    );

    expect(oracleRows).toHaveLength(101);
    expect(oracleRows[0]).toBe(
      "numero_ligne_import;id_lu;decision_attendue;motif_attendu",
    );
    expect(
      oracleRows.slice(1).filter((row) => row.includes(";ACCEPTER;")),
    ).toHaveLength(95);
    expect(
      oracleRows.slice(1).filter((row) => row.includes(";REJETER;")),
    ).toHaveLength(5);
    expect(oracleRows[1]).toBe("1;X-3052;ACCEPTER;");
    expect(oracleRows.at(-1)).toContain("100;X-3149;REJETER;");
    expect(oracleRows.join("\n")).toContain("Identifiant déjà présent");
    expect(oracleRows.join("\n")).toContain("Identifiant obligatoire");
    expect(oracleRows.join("\n")).toContain("Montant non numérique");
    expect(oracleRows.join("\n")).toContain("Date impossible");
    expect(oracleRows.join("\n")).toContain("Statut hors liste");
  });

  it("contains eleven harmless attachments, instructions and verified hashes", () => {
    for (let index = 1; index <= 11; index += 1) {
      const file = join(
        resourceRoot,
        "pieces-jointes",
        `piece-factice-${String(index).padStart(2, "0")}.txt`,
      );
      expect(readFileSync(file, "utf8")).toContain("aucune donnée personnelle");
    }

    const manifest = lines("SHA256SUMS");
    expect(manifest).toHaveLength(15);
    for (const entry of manifest) {
      const match = entry.match(/^([a-f0-9]{64})  (.+)$/);
      expect(match).not.toBeNull();
      const file = join(resourceRoot, match?.[2] ?? "");
      const actual = createHash("sha256")
        .update(readFileSync(file))
        .digest("hex");
      expect(actual).toBe(match?.[1]);
    }
  });

  it("provides a downloadable ZIP containing the whole kit", () => {
    expect(existsSync(zipPath)).toBe(true);
    const entries = execFileSync("unzip", ["-Z1", zipPath], {
      encoding: "utf8",
    })
      .trim()
      .split(/\r?\n/);
    expect(entries).toHaveLength(16);
    expect(entries).toContain("jeu-depart-3050-lignes.csv");
    expect(entries).toContain("lot-import-100-lignes.csv");
    expect(entries).toContain("oracle-import.csv");
    expect(entries).toContain("pieces-jointes/piece-factice-11.txt");
    expect(entries).toContain("attendus-et-mode-emploi.txt");
    expect(entries).toContain("SHA256SUMS");
  });
});
