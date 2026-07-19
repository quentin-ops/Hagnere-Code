/**
 * Génération des assets visuels manquants via OpenAI gpt-image-1.
 *
 * - /public/og-image.png   → 1200×630, partage social (LinkedIn, Twitter, FB).
 * - /public/apple-touch-icon.png → 180×180, icône iOS quand le site est ajouté à l'écran d'accueil.
 *
 * Usage :
 *   npx tsx scripts/generate-images.ts
 *
 * Prérequis :
 *   - OPENAI_API_KEY défini dans .env.local
 *   - Crédits OpenAI suffisants (~0,15 € par image gpt-image-1 1024×1024)
 *
 * Le script :
 *   1. Génère les deux visuels en 1024×1024 / 1536×1024 (formats supportés par gpt-image-1)
 *   2. Redimensionne / crop avec sharp aux dimensions exactes demandées
 *   3. Écrit dans /public/
 *
 * Idempotent : peut être ré-exécuté à volonté pour régénérer.
 */

import { config } from "dotenv";
import OpenAI from "openai";
import sharp from "sharp";
import { writeFile, mkdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";

config({ path: ".env.local" });

if (!process.env.OPENAI_API_KEY) {
  console.error("❌ OPENAI_API_KEY manquante. Vérifie ton .env.local.");
  process.exit(1);
}

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// =====================================================================
// Prompts — design 3D moderne, cohérent avec l'identité Hagnéré Code
// (palette violet/noir/blanc, typographie nette, esthétique tech premium)
// =====================================================================

const OG_PROMPT = `
A premium, modern 3D-rendered hero image for a French software studio called "Hagnéré Code".
Style: minimalist tech editorial, Apple-meets-Vercel aesthetic, soft cinematic lighting,
volumetric depth, glass morphism accents.

Composition (16:9 wide):
- Center-left: large bold sans-serif text "HAGNÉRÉ CODE" in white, with the word "CODE" rendered
  as a translucent purple glass material (#7c3aed gradient to #4c1d95), slight bevel and subtle
  glow. Letterforms feel sculpted, not flat.
- Right side: floating 3D abstract objects — a frosted glass cube, a gradient ribbon curling
  upward, a thin geometric grid plane in the background. Subtle particles. Everything in
  studio-product-render quality.
- Background: deep matte black (#0a0a0a) with a soft radial purple glow centered behind the type.
  Faint dotted grid texture. Clean, no clutter.
- Bottom-right: a tiny tagline in light gray Geist Mono "STUDIO PRODUIT · BASSENS".

Mood: confident, sober, sophisticated, French. No emojis, no gimmick, no people, no faces.
Photorealistic 3D render, 8K quality, sharp focus, octane render style.
Aspect ratio 16:9 (wide).
`.trim();

const APPLE_ICON_PROMPT = `
A polished 3D app icon (square format), modern minimalist design.

Composition:
- Centered: a single bold monogram "HC" in pure white, sculpted in 3D with a subtle bevel and
  soft inner shadow. Slight geometric tilt for depth. Letters touch each other elegantly.
- Background: deep matte black (#0a0a0a) with a soft purple radial gradient
  (from #7c3aed at center to #0a0a0a at edges). Subtle volumetric light from top-left.
- Optional: a thin circular ring of purple light around the monogram, very faint.
- No text other than "HC". No icons, no symbols, no gradients on the letters themselves
  (white only). Premium iOS-style aesthetic.

Style: Apple icon design language, glass and matte materials, octane-quality 3D render,
clean and uncluttered. Square 1:1.
`.trim();

// =====================================================================
// Helpers
// =====================================================================

type ImageSize =
  | "1024x1024"
  | "1536x1024"
  | "1024x1536"
  | "1792x1024"
  | "1024x1024";

async function fetchOpenAiImage(prompt: string, size: ImageSize): Promise<Buffer> {
  console.log(`  → calling gpt-image-2 (size ${size}, quality high)…`);
  const response = await openai.images.generate({
    model: "gpt-image-2",
    prompt,
    size,
    quality: "high",
    n: 1,
  });

  const data = response.data?.[0];
  if (!data?.b64_json) {
    throw new Error("OpenAI didn't return base64 image data.");
  }
  return Buffer.from(data.b64_json, "base64");
}

async function writePublic(filename: string, buffer: Buffer): Promise<string> {
  const fullPath = resolve(process.cwd(), "public", filename);
  await mkdir(dirname(fullPath), { recursive: true });
  await writeFile(fullPath, buffer);
  return fullPath;
}

// =====================================================================
// Generation pipeline
// =====================================================================

async function generateOgImage(): Promise<void> {
  console.log("• Generating /public/og-image.png (1200×630)…");
  // gpt-image-2 paysage 2048×1152 (16:9, 1.78:1), recadré ensuite à 1200×630 (1.905:1).
  const raw = await fetchOpenAiImage(OG_PROMPT, "1792x1024");

  const resized = await sharp(raw)
    .resize({
      width: 1200,
      height: 630,
      fit: "cover",
      position: "center",
    })
    .png({ compressionLevel: 9 })
    .toBuffer();

  const outPath = await writePublic("og-image.png", resized);
  console.log(`  ✓ wrote ${outPath} (${(resized.length / 1024).toFixed(1)} KB)`);
}

async function generateAppleTouchIcon(): Promise<void> {
  console.log("• Generating /public/apple-touch-icon.png (180×180)…");
  const raw = await fetchOpenAiImage(APPLE_ICON_PROMPT, "1024x1024");

  const resized = await sharp(raw)
    .resize(180, 180, { fit: "cover", position: "center" })
    .png({ compressionLevel: 9 })
    .toBuffer();

  const outPath = await writePublic("apple-touch-icon.png", resized);
  console.log(`  ✓ wrote ${outPath} (${(resized.length / 1024).toFixed(1)} KB)`);
}

async function main(): Promise<void> {
  console.log("🎨 Hagnéré Code — image generator (gpt-image-1 + sharp)");
  console.log();
  await generateOgImage();
  await generateAppleTouchIcon();
  console.log();
  console.log("✅ Done. Check /public/og-image.png and /public/apple-touch-icon.png.");
  console.log("   Tip: tester le partage avec");
  console.log("   - Facebook Sharing Debugger : https://developers.facebook.com/tools/debug/");
  console.log("   - Twitter Card Validator    : https://cards-dev.twitter.com/validator");
}

main().catch((err) => {
  console.error("❌ Failure:", err);
  process.exit(1);
});
