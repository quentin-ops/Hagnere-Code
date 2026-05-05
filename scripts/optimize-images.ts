/**
 * Compresse et convertit les images lourdes du dossier public/.
 *
 * Usage :
 *   npx tsx scripts/optimize-images.ts            # dry-run, montre ce qui serait fait
 *   npx tsx scripts/optimize-images.ts --apply    # exécute
 *
 * Stratégie :
 * - PNG/JPEG > 200 KB → génère .avif (qualité 65) + .webp (qualité 80) à côté
 * - Garde l'original (référencé par certaines pages, on ne risque pas de casser)
 * - Cible explicitement les OG images (1.1 MB et 1.6 MB) avec un re-encodage
 *   PNG plus léger en plus des dérivés AVIF/WebP, car certaines plateformes
 *   (LinkedIn) ne lisent ni AVIF ni WebP pour les og:image.
 *
 * Dépendance : sharp (déjà dans devDependencies).
 */

import { readdir, stat, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(process.cwd(), "public");
const APPLY = process.argv.includes("--apply");
const MIN_SIZE_BYTES = 200 * 1024; // 200 KB
const KEEP_FORMATS = new Set([".png", ".jpg", ".jpeg"]);

type Plan = {
  source: string;
  sourceBytes: number;
  outputs: { path: string; bytes?: number; format: string }[];
};

async function walk(dir: string, out: string[] = []): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await walk(p, out);
    else out.push(p);
  }
  return out;
}

async function main() {
  console.log(APPLY ? "🔧 APPLY mode" : "👀 DRY-RUN — relance avec --apply pour exécuter");
  console.log(`Scanning ${ROOT}...\n`);

  const files = await walk(ROOT);
  const candidates = await Promise.all(
    files
      .filter((f) => KEEP_FORMATS.has(path.extname(f).toLowerCase()))
      .map(async (f) => {
        const s = await stat(f);
        return { f, size: s.size };
      }),
  );

  const targets = candidates.filter((c) => c.size >= MIN_SIZE_BYTES);
  if (!targets.length) {
    console.log("Rien à compresser (toutes les images ≤ 200 KB).");
    return;
  }

  console.log(`${targets.length} image(s) à traiter (> 200 KB) :\n`);
  let totalSaved = 0;

  for (const { f, size } of targets) {
    const rel = path.relative(ROOT, f);
    const buf = await readFile(f);
    const meta = await sharp(buf).metadata();
    console.log(
      `  ${rel} — ${(size / 1024).toFixed(0)} KB · ${meta.width}×${meta.height}`,
    );

    const ext = path.extname(f).toLowerCase();
    const base = f.slice(0, -ext.length);
    const plan: Plan = { source: rel, sourceBytes: size, outputs: [] };

    // AVIF (le plus efficace, supporté navigateurs récents) — qualité 60
    const avifPath = `${base}.avif`;
    if (APPLY) {
      const out = await sharp(buf).avif({ quality: 60, effort: 6 }).toBuffer();
      await writeFile(avifPath, out);
      plan.outputs.push({ path: path.relative(ROOT, avifPath), bytes: out.length, format: "avif" });
    } else {
      plan.outputs.push({ path: path.relative(ROOT, avifPath), format: "avif" });
    }

    // WebP (fallback large, supporté quasi partout) — qualité 80
    const webpPath = `${base}.webp`;
    if (APPLY) {
      const out = await sharp(buf).webp({ quality: 80, effort: 6 }).toBuffer();
      await writeFile(webpPath, out);
      plan.outputs.push({ path: path.relative(ROOT, webpPath), bytes: out.length, format: "webp" });
    } else {
      plan.outputs.push({ path: path.relative(ROOT, webpPath), format: "webp" });
    }

    // Pour les OG images : re-encoder le PNG d'origine en compressé.
    // LinkedIn / Twitter / Facebook ne lisent pas AVIF/WebP en og:image, donc
    // on garde un PNG mais bien compressé (et en 1200×630 si déjà conforme).
    if (rel.startsWith("og-")) {
      const pngOut = `${base}.opt.png`;
      if (APPLY) {
        const out = await sharp(buf)
          .png({ compressionLevel: 9, palette: true, quality: 80 })
          .toBuffer();
        await writeFile(pngOut, out);
        plan.outputs.push({ path: path.relative(ROOT, pngOut), bytes: out.length, format: "png-opt" });
      } else {
        plan.outputs.push({ path: path.relative(ROOT, pngOut), format: "png-opt" });
      }
    }

    for (const o of plan.outputs) {
      const sizeStr = o.bytes ? `${(o.bytes / 1024).toFixed(0)} KB` : "(dry-run)";
      const saved = o.bytes ? size - o.bytes : 0;
      if (o.bytes) totalSaved += saved;
      const savedPct = o.bytes ? `(-${Math.round((saved / size) * 100)}%)` : "";
      console.log(`    → ${o.path} · ${sizeStr} ${savedPct}`);
    }
    console.log();
  }

  if (APPLY) {
    console.log(`\n💾 Total économisé : ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
    console.log(
      "\n📎 Pour utiliser les versions optimisées :",
      "\n   - <picture> avec <source type=\"image/avif\"> + <source type=\"image/webp\"> + <img src=\"...png\">",
      "\n   - Ou Next.js <Image> qui sert AVIF/WebP automatiquement (déjà configuré dans next.config.ts)",
      "\n   - Pour les og:image, remplace l'URL en .opt.png (PNG fortement compressé)",
    );
  } else {
    console.log("\n👉 Relance avec --apply pour exécuter.");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
