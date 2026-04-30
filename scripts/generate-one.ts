/**
 * Génération d'UNE image via gpt-image-2.
 * Usage : npx tsx scripts/generate-one.ts <imageKey>
 *   imageKey ∈ { og-services, methode, equipe, etudes }
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

const COMMON = `
Style: high-end editorial collage — photographic realism mixed with 3D glass UI elements,
modern French tech magazine aesthetic. Strong cinematic lighting with warm golden particles
floating in the air, faint starfield background. Background: deep saturated electric purple
gradient (#7c3aed top → #4c1d95 bottom) with subtle indigo speckled stars. Octane-quality
3D render fused with photorealistic photography, 8K sharp focus, premium magazine cover feel.
NO text, NO words, NO letters anywhere in the image — typography will be added in post.
NO faces, NO people, NO recognizable logos. French sophistication.
`.trim();

type Job = {
  prompt: string;
  apiSize: "1024x1024" | "1536x1024" | "1792x1024" | "1024x1024";
  outW: number;
  outH: number;
  outPath: string;
};

const JOBS: Record<string, Job> = {
  "og-services": {
    prompt: `High-end editorial magazine cover collage, French tech aesthetic.
Dense composition with photorealistic 3D objects, floating frosted glass UI cards,
French text rendered with sharp typography, dramatic studio lighting.
Extremely sharp focus, ultra-crisp detail, 8K render quality.

BACKGROUND: deep saturated electric purple-to-indigo gradient (#7c3aed top fading
to #1e1b4b bottom), subtle starfield with faint indigo speckles, a strong volumetric
light shaft entering from top-right corner, golden spark cascade flowing vertically
through the center of the composition.

NO LOGO IN TOP-LEFT CORNER. Leave the top-left area mostly empty (just background
with starfield and spark particles).

TOP CENTER (horizontal row of 3 floating thin pill-shaped glass cards with rounded corners,
frosted dark purple glass, soft inner glow, thin white border, slightly tilted, sharp text):
  - card 1: tiny phone icon + text "APPLICATION MOBILE"
  - card 2: tiny cube icon + text "SAAS"
  - card 3: tiny grid icon + text "CRM INTERNE"

TOP-RIGHT: a 3D glossy badge in saturated yellow/gold (#fbbf24) with rounded corners,
strong 3D bevel and depth, floating slightly tilted, inside it bold black text:
"DÈS 1 500 €"

CENTER-LEFT: TWO LARGE FLOATING GLASS PANEL CARDS side by side, each shaped like a tall
phone in portrait orientation, made of frosted translucent glass with thick beveled edges
and inner glow. Each panel contains a photorealistic 3D scene inside it. Razor-sharp detail.
  - LEFT panel (warm purple gradient inside): label at top "SAAS B2B" in white sans-serif,
    a photorealistic 3D MacBook Pro open on a dark wood surface with its glowing screen
    showing a clean dark code editor with abstract syntax highlighting in violet and white
    (code unreadable but elegant). Floating in front of the laptop, a French invoice paper
    with the text "FORFAIT FIXE" and a purple stamp.
  - RIGHT panel (cool indigo gradient inside): label at top "OUTILS INTERNES" in white,
    a photorealistic 3D dashboard interface (charts, sidebar, table with rows) shown on a
    floating tablet, with a small French clipboard document containing handwritten checkmarks
    and the text "LIVRÉ" in a green stamp.
The two panels emit a soft glow at their bottom edge, with golden sparks rising between them.

RIGHT THIRD: huge bold sans-serif French typography stacked vertically across 2 lines only,
sharp clean razor-edge letterforms (similar to "Inter Black" or "Aeonik"):
  Line 1: "HAGNÉRÉ" — pure white, slightly italic, with subtle white glow
  Line 2: "CODE." — vivid electric violet (#a78bfa) with subtle 3D depth, period in white
The "É" in "HAGNÉRÉ" must show its acute accent perfectly. Thin white underline accent
just below "CODE."

DO NOT add any tagline, location, city name, or subtitle below "CODE."
DO NOT mention any city or location.

OVERALL: razor-sharp focus, ultra-crisp octane-render quality, magazine cover composition
density, sparks and stardust catching the directional light, no faces, no people, no logos,
premium French software studio aesthetic. 16:9 wide aspect ratio.`,
    apiSize: "1792x1024",
    outW: 1200,
    outH: 630,
    outPath: "og-image-services.png",
  },
  methode: {
    prompt: `High-end editorial magazine collage, French tech aesthetic, square 1:1 composition.
Dense scene with photorealistic 3D objects, floating frosted glass UI cards, French text
rendered in sharp typography. Razor-sharp focus, ultra-crisp 8K detail.

BACKGROUND: deep saturated electric purple-to-indigo gradient (#7c3aed top → #1e1b4b
bottom), starfield with faint indigo speckles, strong volumetric light shaft from top-right,
golden spark cascade flowing down through the center.

CENTER: a large floating 3D analog clock face in frosted purple-tinted glass with thick
beveled edges, hands at 3:00, soft inner glow. Behind the clock, a curved glowing roadmap
line with 5 small 3D milestone spheres along its path, the last sphere bearing a glass
checkmark engraved into it.

LEFT (3 small floating glass UI cards stacked vertically, frosted dark purple glass with
white border, slightly tilted, ultra-sharp text):
  - top card: tiny calendar icon + text "DÉMO VENDREDI"
  - middle card: tiny lock icon + text "FORFAIT FIXE"
  - bottom card: tiny rocket icon + text "CODE J+1"

RIGHT: a 3D glossy gold badge (#fbbf24) with rounded corners and 3D bevel, floating tilted,
inside it bold black text: "22 / 23". Below the badge, a small white French label
"PROJETS LIVRÉS À DATE".

FOREGROUND: a single floating gradient ribbon (purple-to-violet) curling upward through
the scene, catching the light. Golden sparks rise around it.

BOTTOM: a thin pill-shaped frosted glass card centered, with text "SPRINT FIXE™" in white.

OVERALL: razor-sharp focus, octane-render quality, magazine cover composition density,
no faces, no people, no logos. Premium French software studio aesthetic. Square 1:1.`,
    apiSize: "1024x1024",
    outW: 1024,
    outH: 1024,
    outPath: "illustrations/methode-sprint.png",
  },
  equipe: {
    prompt: `High-end editorial magazine collage, French tech aesthetic, 16:9 wide composition.
Dense scene with photorealistic 3D objects, floating frosted glass UI cards, French text
rendered in sharp typography. Razor-sharp focus, ultra-crisp 8K detail.
NO people, NO faces — abstract studio atmosphere only.

BACKGROUND: deep saturated electric purple-to-indigo gradient (#7c3aed top → #1e1b4b
bottom), starfield with faint indigo speckles, strong volumetric light shaft from top-right,
soft blurred Alpine mountain silhouette far in the back at dawn (warm orange glow on
distant peaks), golden spark particles drifting through the scene.

LEFT THIRD: a photorealistic 3D editorial scene of a premium minimalist desk floating in
space — a closed matte aluminum laptop, a small mechanical keyboard in dark purple,
a steaming ceramic cup with subtle wisps of steam, and a single architectural desk lamp
casting warm directional golden light. Razor-sharp detail, magazine-product quality.

CENTER (3 floating thin pill-shaped glass cards stacked vertically, frosted dark purple
glass with thin white border, slightly tilted, ultra-sharp text):
  - top card: tiny user-group icon + text "6 CDI"
  - middle card: tiny check icon + text "ZÉRO SOUS-TRAITANCE"
  - bottom card: tiny code icon + text "STACK MAÎTRISÉE"

CENTER-MID: a floating 3D crystalline glass polyhedron with 6 facets, each facet glowing
softly in slightly different purple shades — symbolizing 6 craftsmen. Soft inner light.

RIGHT THIRD: huge bold sans-serif French typography stacked vertically across 2 lines,
sharp clean razor-edge letterforms (similar to "Inter Black" or "Aeonik").
THE TYPOGRAPHY MUST FIT ENTIRELY WITHIN THE FRAME with at least 8% margin on the right
edge. Do not let any letter be cut off by the right side of the canvas.
  Line 1: "L'ÉQUIPE." — pure white, italic, with subtle white glow
  Line 2: "MAISON." — vivid electric violet (#a78bfa) with subtle 3D depth
The "É" must show its acute accent perfectly. Thin white underline below "MAISON."

TOP-RIGHT (small, fully inside the frame, with 5% margin from the top and right edges):
a 3D glossy gold badge (#fbbf24) with rounded corners, floating tilted, inside it bold
black text: "100% CDI". The badge must NOT be cut off by the canvas edge.

DO NOT add any city name, location, or tagline.

CRITICAL FRAMING RULE: every UI card, badge, text and object MUST BE FULLY VISIBLE inside
the frame. Reserve at least 5% safe margin on all 4 edges. NO bleeding outside the canvas.

OVERALL: razor-sharp focus, octane-render quality, magazine cover composition density,
no faces, no people, no logos. Premium French software studio aesthetic. 16:9 wide.`,
    apiSize: "1792x1024",
    outW: 1792,
    outH: 1024,
    outPath: "illustrations/equipe-atmosphere.png",
  },
  etudes: {
    prompt: `High-end editorial magazine collage, French tech aesthetic, 16:9 wide composition.
Dense scene with photorealistic 3D objects, floating frosted glass UI cards, French text
rendered in sharp typography. Razor-sharp focus, ultra-crisp 8K detail.

BACKGROUND: deep saturated electric purple-to-indigo gradient (#7c3aed top → #1e1b4b
bottom), starfield with faint indigo speckles, strong volumetric light shaft from top-right,
golden spark particles drifting through the scene.

LEFT THIRD: a photorealistic 3D scene of a thick hardcover technical report opened in
mid-air, slightly tilted, pages glowing softly with abstract architecture diagrams and
charts unreadable but elegant on the visible pages. The book has a frosted purple cover
with thin gold edge details. Around the book, floating small 3D data visualization
elements: a translucent purple bar chart rising upward, a smooth gradient curve line
trailing through the air, a small glass sphere containing a tiny system architecture
diagram (boxes connected by lines, abstract).

CENTER (3 floating thin pill-shaped glass cards stacked vertically, frosted dark purple
glass with thin white border, slightly tilted, ultra-sharp text):
  - top card: tiny clock icon + text "30 JOURS"
  - middle card: tiny chart icon + text "+38 % SIGNAUX"
  - bottom card: tiny lock icon + text "SOUS NDA"

RIGHT THIRD: huge bold sans-serif French typography stacked vertically across 2 lines,
sharp clean razor-edge letterforms (similar to "Inter Black" or "Aeonik").
THE TYPOGRAPHY MUST FIT ENTIRELY WITHIN THE FRAME with at least 8% margin on the right
edge. Do not let any letter be cut off by the right side of the canvas.
  Line 1: "ÉTUDES" — pure white, italic, with subtle white glow
  Line 2: "DE CAS." — vivid electric violet (#a78bfa) with subtle 3D depth
The "É" must show its acute accent perfectly. Thin white underline below "DE CAS."

TOP-RIGHT (small, fully inside frame with 5% margin from top and right): a 3D glossy gold
badge (#fbbf24) with rounded corners, floating tilted, inside it bold black text:
"DEEP DIVE"

CENTER-MID: a large floating glass cube (frosted purple, thick beveled edges) reflecting
the scene around it, slightly off-center, catching the light shaft.

DO NOT add any city name, location, or extra tagline.

CRITICAL FRAMING RULE: every UI card, badge, text and object MUST BE FULLY VISIBLE inside
the frame. Reserve at least 5% safe margin on all 4 edges. NO bleeding outside the canvas.

OVERALL: razor-sharp focus, octane-render quality, magazine cover composition density,
no faces, no people, no logos. Premium technical-report cover aesthetic. 16:9 wide.`,
    apiSize: "1792x1024",
    outW: 1792,
    outH: 1024,
    outPath: "illustrations/etudes-de-cas-hero.png",
  },
};

async function main(): Promise<void> {
  const key = process.argv[2];
  const job = key ? JOBS[key] : undefined;
  if (!job) {
    console.error(`❌ usage: npx tsx scripts/generate-one.ts <${Object.keys(JOBS).join("|")}>`);
    process.exit(1);
  }

  console.log(`🎨 Generating "${key}" → ${job.outPath} (api ${job.apiSize}, output ${job.outW}×${job.outH})…`);
  const t0 = Date.now();
  const response = await openai.images.generate({
    model: "gpt-image-2",
    prompt: job.prompt,
    size: job.apiSize,
    quality: "high",
    n: 1,
  });
  const b64 = response.data?.[0]?.b64_json;
  if (!b64) throw new Error("no b64 in response");
  const raw = Buffer.from(b64, "base64");

  const resized = await sharp(raw)
    .resize({ width: job.outW, height: job.outH, fit: "cover", position: "center" })
    // Sharpen post-process : redonne du croquant après le downscale, sans halo agressif.
    // sigma=1.0 = unsharp mask doux ; m1/m2 = boost flat areas + edges respectivement.
    .sharpen({ sigma: 1.0, m1: 0.5, m2: 2 })
    .png({ compressionLevel: 9 })
    .toBuffer();

  const fullPath = resolve(process.cwd(), "public", job.outPath);
  await mkdir(dirname(fullPath), { recursive: true });
  await writeFile(fullPath, resized);

  const sec = ((Date.now() - t0) / 1000).toFixed(1);
  console.log(`✓ ${fullPath} (${(resized.length / 1024).toFixed(1)} KB, ${sec}s)`);
}

main().catch((err) => {
  console.error("❌ Failure:", err);
  process.exit(1);
});
