import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = resolve(
  repositoryRoot,
  "public/guides/pourquoi-site-pas-visible-google",
);

const palette = {
  ink: "#09090b",
  panel: "#18181b",
  panelSoft: "#27272a",
  line: "#52525b",
  paper: "#fafafa",
  muted: "#a1a1aa",
  blue: "#60a5fa",
  indigo: "#818cf8",
  violet: "#a78bfa",
  emerald: "#34d399",
};

function icon(kind, x, y, scale = 1) {
  if (kind === "exploration") {
    return `<circle cx="${x - 8 * scale}" cy="${y - 8 * scale}" r="${29 * scale}" fill="${palette.paper}"/>
      <circle cx="${x - 8 * scale}" cy="${y - 8 * scale}" r="${19 * scale}" fill="${palette.panel}"/>
      <path d="M${x + 12 * scale} ${y + 12 * scale}L${x + 42 * scale} ${y + 42 * scale}L${x + 31 * scale} ${y + 53 * scale}L${x + 1 * scale} ${y + 23 * scale}Z" fill="${palette.paper}"/>`;
  }

  if (kind === "indexation") {
    return `<path d="M${x - 38 * scale} ${y - 38 * scale}H${x + 14 * scale}L${x + 38 * scale} ${y - 14 * scale}V${y + 38 * scale}H${x - 38 * scale}Z" fill="${palette.paper}"/>
      <path d="M${x + 14 * scale} ${y - 38 * scale}V${y - 14 * scale}H${x + 38 * scale}Z" fill="${palette.muted}"/>
      <path d="M${x - 22 * scale} ${y + 5 * scale}L${x - 6 * scale} ${y + 22 * scale}L${x + 24 * scale} ${y - 12 * scale}L${x + 15 * scale} ${y - 20 * scale}L${x - 7 * scale} ${y + 6 * scale}L${x - 14 * scale} ${y - 2 * scale}Z" fill="${palette.emerald}"/>`;
  }

  if (kind === "impressions") {
    return `<path d="M${x - 48 * scale} ${y}Q${x} ${y - 46 * scale} ${x + 48 * scale} ${y}Q${x} ${y + 46 * scale} ${x - 48 * scale} ${y}Z" fill="${palette.paper}"/>
      <circle cx="${x}" cy="${y}" r="${20 * scale}" fill="${palette.panel}"/>
      <circle cx="${x}" cy="${y}" r="${8 * scale}" fill="${palette.indigo}"/>`;
  }

  return `<polygon points="${x - 30 * scale},${y - 38 * scale} ${x + 24 * scale},${y + 8 * scale} ${x - 3 * scale},${y + 12 * scale} ${x + 12 * scale},${y + 42 * scale} ${x - 4 * scale},${y + 49 * scale} ${x - 18 * scale},${y + 19 * scale} ${x - 38 * scale},${y + 37 * scale}" fill="${palette.paper}"/>
    <circle cx="${x + 31 * scale}" cy="${y - 27 * scale}" r="${5 * scale}" fill="${palette.emerald}"/>
    <circle cx="${x + 47 * scale}" cy="${y - 8 * scale}" r="${5 * scale}" fill="${palette.emerald}"/>
    <circle cx="${x + 11 * scale}" cy="${y - 50 * scale}" r="${5 * scale}" fill="${palette.emerald}"/>`;
}

function originCard(x, y, width, height) {
  const rowY = y + height * 0.68;
  return `<g filter="url(#shadow)">
    <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${Math.min(width, height) * 0.09}" fill="${palette.paper}"/>
    <rect x="${x}" y="${y}" width="${width}" height="${height * 0.2}" rx="${Math.min(width, height) * 0.09}" fill="${palette.panelSoft}"/>
    <circle cx="${x + width * 0.1}" cy="${y + height * 0.1}" r="${height * 0.022}" fill="${palette.violet}"/>
    <circle cx="${x + width * 0.16}" cy="${y + height * 0.1}" r="${height * 0.022}" fill="${palette.blue}"/>
    <circle cx="${x + width * 0.22}" cy="${y + height * 0.1}" r="${height * 0.022}" fill="${palette.emerald}"/>
    <rect x="${x + width * 0.1}" y="${y + height * 0.34}" width="${width * 0.8}" height="${height * 0.11}" rx="${height * 0.055}" fill="#e4e4e7"/>
    <circle cx="${x + width * 0.16}" cy="${y + height * 0.395}" r="${height * 0.025}" fill="none" stroke="${palette.line}" stroke-width="${height * 0.018}"/>
    <path d="M${x + width * 0.177} ${y + height * 0.412}L${x + width * 0.205} ${y + height * 0.44}" stroke="${palette.line}" stroke-width="${height * 0.018}" stroke-linecap="round"/>
    <rect x="${x + width * 0.28}" y="${y + height * 0.375}" width="${width * 0.49}" height="${height * 0.04}" rx="${height * 0.02}" fill="${palette.muted}"/>
    <rect x="${x + width * 0.1}" y="${rowY}" width="${width * 0.62}" height="${height * 0.045}" rx="${height * 0.022}" fill="${palette.indigo}" opacity=".55"/>
    <rect x="${x + width * 0.1}" y="${rowY + height * 0.1}" width="${width * 0.42}" height="${height * 0.035}" rx="${height * 0.017}" fill="${palette.muted}" opacity=".75"/>
  </g>`;
}

function stepNode(kind, x, y, radius, color, index) {
  return `<g filter="url(#shadow)">
    <circle cx="${x}" cy="${y}" r="${radius + 10}" fill="${palette.ink}" stroke="${color}" stroke-width="3" opacity=".98"/>
    <circle cx="${x}" cy="${y}" r="${radius}" fill="${color}" opacity=".22"/>
    ${icon(kind, x, y, radius / 64)}
    <circle cx="${x - radius * 0.72}" cy="${y - radius * 0.72}" r="${radius * 0.14}" fill="${color}" opacity="${0.55 + index * 0.1}"/>
  </g>`;
}

function frame({ width, height, body, title, description }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title desc">
  <title id="title">${title}</title>
  <desc id="desc">${description}</desc>
  <defs>
    <radialGradient id="glow" cx="50%" cy="40%" r="70%">
      <stop offset="0" stop-color="#312e81" stop-opacity=".72"/>
      <stop offset=".58" stop-color="#18181b" stop-opacity=".38"/>
      <stop offset="1" stop-color="#09090b" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="flow" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${palette.blue}"/>
      <stop offset=".5" stop-color="${palette.violet}"/>
      <stop offset="1" stop-color="${palette.emerald}"/>
    </linearGradient>
    <filter id="shadow" x="-40%" y="-40%" width="180%" height="180%">
      <feDropShadow dx="0" dy="18" stdDeviation="20" flood-color="#000000" flood-opacity=".32"/>
    </filter>
    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0 0L10 5L0 10Z" fill="${palette.emerald}"/>
    </marker>
  </defs>
  <rect width="${width}" height="${height}" rx="${Math.round(Math.min(width, height) * 0.035)}" fill="${palette.ink}"/>
  <rect width="${width}" height="${height}" rx="${Math.round(Math.min(width, height) * 0.035)}" fill="url(#glow)"/>
  <circle cx="${width * 0.09}" cy="${height * 0.11}" r="${height * 0.14}" fill="${palette.blue}" opacity=".08"/>
  <circle cx="${width * 0.92}" cy="${height * 0.88}" r="${height * 0.22}" fill="${palette.emerald}" opacity=".07"/>
  ${body}
</svg>`;
}

function horizontalScene() {
  const points = [570, 860, 1150, 1440];
  const colors = [palette.blue, palette.indigo, palette.violet, palette.emerald];
  const kinds = ["exploration", "indexation", "impressions", "clicks"];
  return frame({
    width: 1600,
    height: 900,
    title: "Parcours de diagnostic d’une page dans Google",
    description:
      "Une fiche associant une URL et une recherche mène successivement à quatre contrôles : exploration, indexation, impressions et clics.",
    body: `${originCard(80, 285, 330, 330)}
      <path d="M410 450H500" stroke="url(#flow)" stroke-width="10" stroke-linecap="round" marker-end="url(#arrow)"/>
      <path d="M650 450H1360" stroke="url(#flow)" stroke-width="10" stroke-linecap="round" marker-end="url(#arrow)" opacity=".74"/>
      ${points.map((x, index) => stepNode(kinds[index], x, 450, 66, colors[index], index + 1)).join("\n")}`,
  });
}

function fourByThreeScene() {
  const points = [150, 450, 750, 1050];
  const colors = [palette.blue, palette.indigo, palette.violet, palette.emerald];
  const kinds = ["exploration", "indexation", "impressions", "clicks"];
  return frame({
    width: 1200,
    height: 900,
    title: "Quatre contrôles pour une URL et une recherche",
    description:
      "Une fiche centrale alimente une suite de quatre contrôles : exploration, indexation, impressions et clics.",
    body: `${originCard(450, 70, 300, 280)}
      <path d="M600 350V455M150 540H1050" stroke="url(#flow)" stroke-width="10" stroke-linecap="round" marker-end="url(#arrow)" opacity=".76"/>
      ${points.map((x, index) => stepNode(kinds[index], x, 600, 64, colors[index], index + 1)).join("\n")}
      <path d="M150 700C330 790 870 790 1050 700" fill="none" stroke="${palette.line}" stroke-width="4" stroke-dasharray="10 16" opacity=".65"/>`,
  });
}

function squareScene() {
  const positions = [
    [330, 300],
    [870, 430],
    [330, 730],
    [870, 880],
  ];
  const colors = [palette.blue, palette.indigo, palette.violet, palette.emerald];
  const kinds = ["exploration", "indexation", "impressions", "clicks"];
  return frame({
    width: 1200,
    height: 1200,
    title: "Diagnostic Google du premier contrôle jusqu’aux clics",
    description:
      "Une fiche URL-recherche suit un trajet en quatre contrôles : exploration, indexation, impressions et clics.",
    body: `${originCard(90, 60, 300, 260)}
      <path d="M390 190C650 165 805 190 850 300C910 445 695 535 450 575C255 606 230 705 330 730C540 785 695 820 870 880" fill="none" stroke="url(#flow)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#arrow)" opacity=".8"/>
      ${positions.map(([x, y], index) => stepNode(kinds[index], x, y, 78, colors[index], index + 1)).join("\n")}`,
  });
}

mkdirSync(outputDirectory, { recursive: true });

const outputs = [
  ["diagnostic-google-16x9.svg", horizontalScene()],
  ["diagnostic-google-4x3.svg", fourByThreeScene()],
  ["diagnostic-google-1x1.svg", squareScene()],
];

for (const [name, contents] of outputs) {
  writeFileSync(resolve(outputDirectory, name), `${contents}\n`, "utf8");
}

console.log(
  `Generated ${outputs.length} deterministic SVG article images in ${outputDirectory}`,
);
