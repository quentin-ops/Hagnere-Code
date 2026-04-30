/**
 * Génération des 4 illustrations stratégiques via OpenAI gpt-image-2.
 *
 * - /public/og-image-services.png         (1200×630)  — OG partage pages services
 * - /public/illustrations/methode-sprint.png         (1024×1024) — hero méthode
 * - /public/illustrations/equipe-atmosphere.png      (1536×1024) — bandeau équipe
 * - /public/illustrations/etudes-de-cas-hero.png     (1536×1024) — header études de cas
 *
 * Usage : npx tsx scripts/generate-illustrations.ts
 *
 * Coût estimé : ~0,80 € (4 × gpt-image-2 quality high).
 */

import { config } from "dotenv";
import OpenAI from "openai";
import sharp from "sharp";
import { writeFile, mkdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";

config({ path: ".env.local" });

if (!process.env.OPENAI_API_KEY) {
  console.error("❌ OPENAI_API_KEY manquante.");
  process.exit(1);
}

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// =====================================================================
// Prompts — esthétique commune : 3D moderne, palette violet/noir/blanc,
// sobriété éditoriale, octane render, AUCUNE personne ni visage.
// =====================================================================

const COMMON_STYLE = `
Style: minimalist 3D editorial render, Apple-meets-Vercel aesthetic,
soft cinematic studio lighting, volumetric depth, glass and matte materials,
deep matte black background (#0a0a0a), accent purple (#7c3aed → #4c1d95) gradients,
faint dotted grid texture in the background, octane render quality, 8K sharp focus.
NO text, NO words, NO letters, NO faces, NO people, NO logos.
Premium, sober, French sophistication.
`.trim();

const PROMPTS = {
  ogServices: `
${COMMON_STYLE}

Composition (16:9 wide): three floating 3D cubes side by side, slightly tilted in space,
each made of frosted purple-tinted glass with soft inner glow. The leftmost cube is solid
glass (representing "build"), the middle one has a swirling ribbon emerging from its top
(representing "grow"), and the rightmost one is wrapped in a thin protective geometric ring
(representing "protect"). Subtle particles drift between them. Background: deep matte black
with a soft radial purple glow centered behind the trio, faint dotted grid plane below.
The composition feels like a high-end product render for a tech studio.
`.trim(),

  methodeSprint: `
${COMMON_STYLE}

Composition (square 1:1): a floating 3D scene representing a structured workflow.
Center: an elegant analog clock face in frosted purple glass, hands at 3:00, with
soft inner glow. Behind it: a glowing curved roadmap line with five small 3D milestone
spheres along its path, the last sphere bearing a subtle checkmark engraved in glass.
Foreground: a single floating gradient ribbon curling upward through the scene.
Background: deep matte black with a soft purple radial glow, faint geometric grid plane.
The composition feels precise, timed, and contractual — symbolizing reliable delivery.
`.trim(),

  equipeAtmosphere: `
${COMMON_STYLE}

Composition (16:9 wide): an abstract premium workspace atmosphere — NO people, NO faces.
Foreground: a sleek minimalist desk with a closed laptop (matte aluminum), a small
mechanical keyboard in dark purple, a steaming ceramic cup, and a single architectural
desk lamp casting warm directional light. Mid-ground: a floating 3D crystalline shape
suggesting collaboration. Background: a soft, blurred mountain silhouette (French Alps,
representing Chambéry) with a faint dawn glow, transitioning into deep matte black sky.
The mood is calm, focused, after-hours studio quality. Filmic depth of field, very subtle
purple accents on the lamp glow and crystalline form.
`.trim(),

  etudesDeCasHero: `
${COMMON_STYLE}

Composition (16:9 wide): editorial 3D scene representing a deep technical case study.
Center: a thick hardcover book or document opened in mid-air, pages glowing softly,
made of frosted material with subtle purple edges. Floating around it: small 3D data
visualization elements — a translucent bar chart rising upward, a gradient curve line,
a glass sphere containing a tiny architecture diagram. To the right: a single large
floating glass cube reflecting the scene, slightly off-center. Background: deep matte
black with a soft purple radial glow, faint dotted grid. Particles drift through the
scene. The composition feels like the cover of a premium technical report — sober,
intelligent, dense.
`.trim(),
};

// =====================================================================
// Helpers (mêmes que generate-images.ts)
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
  if (!data?.b64_json) throw new Error("OpenAI didn't return b64 image data.");
  return Buffer.from(data.b64_json, "base64");
}

async function writeOutput(filename: string, buffer: Buffer): Promise<string> {
  const fullPath = resolve(process.cwd(), "public", filename);
  await mkdir(dirname(fullPath), { recursive: true });
  await writeFile(fullPath, buffer);
  return fullPath;
}

async function generateAndWrite(
  label: string,
  prompt: string,
  apiSize: ImageSize,
  outputSize: { w: number; h: number },
  outPath: string,
): Promise<void> {
  console.log(`\n• ${label}…`);
  const raw = await fetchOpenAiImage(prompt, apiSize);
  const resized = await sharp(raw)
    .resize({
      width: outputSize.w,
      height: outputSize.h,
      fit: "cover",
      position: "center",
    })
    .png({ compressionLevel: 9 })
    .toBuffer();
  const written = await writeOutput(outPath, resized);
  console.log(`  ✓ wrote ${written} (${(resized.length / 1024).toFixed(1)} KB)`);
}

async function main(): Promise<void> {
  console.log("🎨 Hagnéré Code — illustrations strategic generator (gpt-image-2)\n");

  await generateAndWrite(
    "OG image dédiée pages services (1200×630)",
    PROMPTS.ogServices,
    "1792x1024",
    { w: 1200, h: 630 },
    "og-image-services.png",
  );

  await generateAndWrite(
    "Illustration hero méthode (Sprint Fixe™, 1024×1024)",
    PROMPTS.methodeSprint,
    "1024x1024",
    { w: 1024, h: 1024 },
    "illustrations/methode-sprint.png",
  );

  await generateAndWrite(
    "Bandeau atmosphère équipe (1536×1024)",
    PROMPTS.equipeAtmosphere,
    "1792x1024",
    { w: 1536, h: 1024 },
    "illustrations/equipe-atmosphere.png",
  );

  await generateAndWrite(
    "Header études de cas (1536×1024)",
    PROMPTS.etudesDeCasHero,
    "1792x1024",
    { w: 1536, h: 1024 },
    "illustrations/etudes-de-cas-hero.png",
  );

  console.log("\n✅ Done. Vérifie le rendu dans /public/og-image-services.png et /public/illustrations/.");
}

main().catch((err) => {
  console.error("❌ Failure:", err);
  process.exit(1);
});
