import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import { promisify } from "node:util";
import { fileURLToPath, pathToFileURL } from "node:url";

const execFileAsync = promisify(execFile);
const require = createRequire(path.join(process.cwd(), "artifact-loader.cjs"));
const artifactTool = await import(
  pathToFileURL(require.resolve("@oai/artifact-tool")).href,
);
const { FileBlob, SpreadsheetFile } = artifactTool;

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const workspace = path.resolve(scriptDir, "..");
const outputDir = path.join(
  workspace,
  "output",
  "reprendre-mvp-vibe-code",
  "workbook",
);
const previewDir = path.join(outputDir, "previews");
const outputPath = path.join(outputDir, "kit-reprise-mvp-vibe-code.xlsx");
const publicPath = path.join(
  workspace,
  "public",
  "ressources",
  "kit-reprise-mvp-vibe-code.xlsx",
);
const validationJsonPath = path.join(outputDir, "validation.json");
const validationMdPath = path.join(outputDir, "validation.md");
const inspectJsonPath = path.join(outputDir, "workbook-inspect.json");
const inspectMdPath = path.join(outputDir, "workbook-inspect.md");
const readJson = async (name) =>
  JSON.parse(await fs.readFile(path.join(workspace, "src", "lib", name), "utf8"));
const proofs = await readJson("mvp-vibe-code-required-proofs.json");
const platformFacts = await readJson("mvp-vibe-code-platform-facts.json");
const sources = await readJson("mvp-vibe-code-workbook-sources.json");

const expectedSheetNames = [
  "LIRE_D_ABORD",
  "INVENTAIRE",
  "SOURCE_BUILD",
  "SBOM_LICENCES",
  "DONNEES_RESTORE",
  "RTO_RPO",
  "ACCES",
  "PARCOURS_METIER",
  "PRODUCTION",
  "MIGRATION",
  "HYPOTHESES_TCO",
  "TCO_12_36_60",
  "RISQUE_PANNE",
  "DECISION",
  "TESTS",
  "CONTROLES",
  "SOURCES",
];
const sha256 = (bytes) => createHash("sha256").update(bytes).digest("hex");
const approx = (actual, expected, label, tolerance = 0.01) => {
  assert.equal(typeof actual, "number", `${label} doit rester numérique.`);
  assert.ok(
    Math.abs(actual - expected) <= tolerance,
    `${label} — attendu ${expected}, obtenu ${actual}`,
  );
};
const importWorkbook = async (filePath = outputPath) =>
  SpreadsheetFile.importXlsx(await FileBlob.load(filePath));
const unzipList = async (filePath) =>
  (
    await execFileAsync("/usr/bin/unzip", ["-Z1", filePath], {
      maxBuffer: 8 * 1024 * 1024,
    })
  ).stdout.trim().split("\n");
const unzipText = async (filePath, entry) =>
  (
    await execFileAsync("/usr/bin/unzip", ["-p", filePath, entry], {
      maxBuffer: 32 * 1024 * 1024,
    })
  ).stdout;

await fs.mkdir(outputDir, { recursive: true });
await fs.mkdir(previewDir, { recursive: true });

const outputBytes = await fs.readFile(outputPath);
const publicBytes = await fs.readFile(publicPath);
const outputHash = sha256(outputBytes);
const publicHash = sha256(publicBytes);
assert.equal(
  outputHash,
  publicHash,
  "La copie publique doit être strictement identique à l’artefact validé.",
);

const workbook = await importWorkbook();
const publicWorkbook = await importWorkbook(publicPath);
assert.deepEqual(
  workbook.worksheets.items.map((sheet) => sheet.name),
  expectedSheetNames,
  "L’artefact doit conserver exactement les 17 onglets attendus.",
);
assert.deepEqual(
  publicWorkbook.worksheets.items.map((sheet) => sheet.name),
  expectedSheetNames,
  "La copie publique doit être réimportable avec les 17 mêmes onglets.",
);

for (const book of [workbook, publicWorkbook]) {
  for (const sheetName of expectedSheetNames) {
    assert.equal(
      book.worksheets.getItem(sheetName).tables.items.length,
      1,
      `${sheetName} doit exposer exactement un tableau filtrable.`,
    );
  }
}

const inventory = workbook.worksheets.getItem("INVENTAIRE");
const sourceBuild = workbook.worksheets.getItem("SOURCE_BUILD");
const hypotheses = workbook.worksheets.getItem("HYPOTHESES_TCO");
const tco = workbook.worksheets.getItem("TCO_12_36_60");
const outage = workbook.worksheets.getItem("RISQUE_PANNE");
const decision = workbook.worksheets.getItem("DECISION");
const tests = workbook.worksheets.getItem("TESTS");
const controls = workbook.worksheets.getItem("CONTROLES");
const sourceSheet = workbook.worksheets.getItem("SOURCES");

assert.deepEqual(
  inventory.getRange("B6:G14").values,
  proofs.map((proof) => [
    proof.id,
    proof.label,
    proof.severity,
    proof.allowsNa ? "Oui" : "Non",
    proof.expected,
    proof.acceptedEvidence.join(" | "),
  ]),
  "Les neuf domaines doivent rester identiques au dataset canonique.",
);
assert.deepEqual(
  sourceBuild.getRange(`B6:I${5 + platformFacts.length}`).values,
  platformFacts.map((fact) => [
    fact.id,
    fact.plateforme,
    fact.capacité,
    fact.ce_qui_ne_suit_pas,
    fact.preuve_a_executer,
    fact.frontière,
    fact.source,
    fact.checkedAt,
  ]),
  "Les faits plateformes doivent rester identiques au dataset canonique.",
);
assert.deepEqual(
  sourceSheet.getRange(`B6:H${5 + sources.length}`).values,
  sources.map((source) => [
    source.id,
    source.zone,
    source.organisme,
    source.titre,
    source.url,
    source.usage,
    `${source.limite} — revue ${source.checkedAt}`,
  ]),
  "Les sources doivent rester identiques au registre canonique.",
);
const visibleTestRows = tests
  .getRange(`B6:C${tests.getUsedRange().values.length}`)
  .values.filter(
    ([id]) =>
      typeof id === "string" && /^(?:MUT|ADV|SAB)-\d+$/.test(id),
  );

const trajectoryInputs = [
  ["conserve", "Conserver", 10_000, 1_000, 12_000, 100, 10, 50, 0, 0, 5_000],
  ["stabilise", "Stabiliser", 25_000, 1_500, 12_000, 200, 10, 50, 2, 1_000, 5_000],
  ["migrate", "Migrer progressivement", 60_000, 1_800, 12_000, 300, 15, 50, 4, 2_000, 6_000],
  ["rewrite", "Réécrire", 120_000, 2_000, 18_000, 600, 20, 50, 6, 2_000, 8_000],
  ["stop", "Arrêter proprement", 20_000, 200, 2_400, 100, 2, 50, 0, 0, 10_000],
];
assert.deepEqual(
  hypotheses.getRange("B6:L10").values,
  trajectoryInputs,
  "Les hypothèses fictives doivent rester alignées sur le modèle TypeScript.",
);

const safeCents = (value) => {
  assert.ok(Number.isFinite(value) && value >= 0);
  const cents = Math.round(value * 100);
  assert.ok(Math.abs(value * 100 - cents) < 1e-7);
  return BigInt(cents);
};
const divideRound = (numerator, denominator) =>
  (numerator + denominator / 2n) / denominator;
const tcoOracle = (row, horizon) => {
  const [
    ,
    ,
    oneOff,
    monthly,
    annual,
    internalOneOffHours,
    internalMonthlyHours,
    internalHourlyRate,
    doubleRunMonths,
    doubleRunMonthly,
    exit,
  ] = row;
  const totalCents =
    safeCents(oneOff) +
    safeCents(monthly) * BigInt(horizon) +
    safeCents(annual) * BigInt(horizon / 12) +
    divideRound(
      safeCents(internalOneOffHours) * safeCents(internalHourlyRate),
      100n,
    ) +
    divideRound(
      safeCents(internalMonthlyHours) *
        safeCents(internalHourlyRate) *
        BigInt(horizon),
      100n,
    ) +
    safeCents(doubleRunMonthly) *
      BigInt(Math.min(doubleRunMonths, horizon)) +
    safeCents(exit);
  assert.ok(totalCents <= 1_000_000_000_000n);
  return Number(totalCents) / 100;
};
const horizons = [12, 36, 60];
const tcoOutputTargets = trajectoryInputs.flatMap((_, rowIndex) =>
  ["C", "D", "E"].map((column) => ({
    sheet: "TCO_12_36_60",
    address: `${column}${rowIndex + 6}`,
  })),
);
const riskOutputTargets = ["C19", "C20", "C21", "C22", "C23"].map(
  (address) => ({
    sheet: "RISQUE_PANNE",
    address,
  }),
);
const governedOutputTargets = [
  ...tcoOutputTargets,
  ...riskOutputTargets,
];
const oracleTco = trajectoryInputs.map((row) =>
  horizons.map((horizon) => tcoOracle(row, horizon)),
);
const actualTco = tco.getRange("C6:E10").values;
oracleTco.forEach((row, rowIndex) =>
  row.forEach((expected, columnIndex) =>
    approx(
      actualTco[rowIndex][columnIndex],
      expected,
      `${trajectoryInputs[rowIndex][1]} ${horizons[columnIndex]} mois`,
    ),
  ),
);
assert.deepEqual(
  hypotheses.getRange("M6:M10").values.flat(),
  Array(5).fill("VALIDE"),
);
assert.deepEqual(
  tco.getRange("F6:F10").values.flat(),
  Array(5).fill("VALIDE"),
);

const outageOracle = {
  capacityCost: Math.round(8 * 25 * 42 * 100) / 100,
};
outageOracle.observableCost =
  Math.round((outageOracle.capacityCost + 3_600 + 2_000 + 1_000 + 500 + 500) * 100) /
  100;
outageOracle.expectedAnnualCost =
  Math.round(outageOracle.observableCost * 25) / 100;
approx(outage.getRange("C19").values[0][0], outageOracle.capacityCost, "Capacité");
approx(
  outage.getRange("C20").values[0][0],
  outageOracle.observableCost,
  "Coût observable",
);
approx(
  outage.getRange("C21").values[0][0],
  outageOracle.expectedAnnualCost,
  "Perte attendue",
);
assert.equal(outage.getRange("C22").values[0][0], "CONNUE");
assert.equal(outage.getRange("C23").values[0][0], "VALIDE");
assert.equal(decision.getRange("C13").values[0][0], "DECISION_HUMAINE");
assert.equal(decision.getRange("C18").values[0][0], "BLOQUE_EXEMPLE_FICTIF");
assert.equal(controls.getRange("B4").values[0][0], "MODEL STATUS: PASS");
const controlLastRow = controls.getUsedRange().values.length;
assert.ok(
  controls
    .getRange(`F6:F${controlLastRow}`)
    .values.flat()
    .every((value) => value === "PASS"),
  "Tous les contrôles visibles doivent être PASS sur le cas fictif verrouillé.",
);

const mutateFresh = async (mutate, verify) => {
  const candidate = await importWorkbook();
  await mutate(candidate);
  await verify(candidate);
};
const mutations = [];
await mutateFresh(
  (book) => {
    book.worksheets.getItem("HYPOTHESES_TCO").getRange("D6").values = [[11_000]];
  },
  (book) => {
    const values = book.worksheets.getItem("TCO_12_36_60").getRange("C6:E6").values[0];
    [51_000, 111_000, 171_000].forEach((expected, index) =>
      approx(values[index], expected, `MUT-01 horizon ${horizons[index]}`),
    );
    mutations.push({ id: "MUT-01", status: "PASS" });
  },
);
await mutateFresh(
  (book) => {
    book.worksheets.getItem("HYPOTHESES_TCO").getRange("E7").values = [[1_600]];
  },
  (book) => {
    const values = book.worksheets.getItem("TCO_12_36_60").getRange("C7:E7").values[0];
    [79_200, 153_600, 228_000].forEach((expected, index) =>
      approx(values[index], expected, `MUT-02 horizon ${horizons[index]}`),
    );
    mutations.push({ id: "MUT-02", status: "PASS" });
  },
);
await mutateFresh(
  (book) => {
    book.worksheets.getItem("HYPOTHESES_TCO").getRange("G8").values = [[310]];
  },
  (book) => {
    const values = book.worksheets.getItem("TCO_12_36_60").getRange("C8:E8").values[0];
    [132_100, 217_300, 302_500].forEach((expected, index) =>
      approx(values[index], expected, `MUT-03 horizon ${horizons[index]}`),
    );
    mutations.push({ id: "MUT-03", status: "PASS" });
  },
);
await mutateFresh(
  (book) => {
    book.worksheets.getItem("HYPOTHESES_TCO").getRange("J9").values = [[5]];
  },
  (book) => {
    const values = book.worksheets.getItem("TCO_12_36_60").getRange("C9:E9").values[0];
    [222_000, 330_000, 438_000].forEach((expected, index) =>
      approx(values[index], expected, `MUT-04 horizon ${horizons[index]}`),
    );
    mutations.push({ id: "MUT-04", status: "PASS" });
  },
);
await mutateFresh(
  (book) => {
    book.worksheets.getItem("RISQUE_PANNE").getRange("C6").values = [[9]];
  },
  (book) => {
    const sheet = book.worksheets.getItem("RISQUE_PANNE");
    approx(sheet.getRange("C19").values[0][0], 9_450, "MUT-05 capacité");
    approx(sheet.getRange("C20").values[0][0], 17_050, "MUT-05 observable");
    approx(sheet.getRange("C21").values[0][0], 4_262.5, "MUT-05 attendu");
    mutations.push({ id: "MUT-05", status: "PASS" });
  },
);
const decimalTrajectoryInputs = trajectoryInputs.map(([id, label]) => [
  id,
  label,
  0,
  0,
  0,
  0.49,
  0.04,
  0.01,
  0,
  0,
  0,
]);
const decimalOracleTco = decimalTrajectoryInputs.map((row) =>
  horizons.map((horizon) => tcoOracle(row, horizon)),
);
await mutateFresh(
  (book) => {
    book.worksheets
      .getItem("HYPOTHESES_TCO")
      .getRange("D6:L10").values = decimalTrajectoryInputs.map((row) =>
        row.slice(2),
      );
  },
  (book) => {
    const hypothesisSheet = book.worksheets.getItem("HYPOTHESES_TCO");
    const tcoSheet = book.worksheets.getItem("TCO_12_36_60");
    assert.deepEqual(
      hypothesisSheet.getRange("M6:M10").values.flat(),
      Array(decimalTrajectoryInputs.length).fill("VALIDE"),
    );
    const actual = tcoSheet.getRange("C6:E10").values;
    decimalOracleTco.forEach((row, rowIndex) =>
      row.forEach((expected, columnIndex) =>
        approx(
          actual[rowIndex][columnIndex],
          expected,
          `MUT-06 ${decimalTrajectoryInputs[rowIndex][1]} ${horizons[columnIndex]} mois`,
          1e-9,
        ),
      ),
    );
    assert.deepEqual(
      tcoSheet.getRange("F6:F10").values.flat(),
      Array(decimalTrajectoryInputs.length).fill("VALIDE"),
    );
    mutations.push({
      id: "MUT-06",
      status: "PASS",
      cellsChecked: decimalTrajectoryInputs.length * horizons.length,
    });
  },
);

const adversarial = [];
const adversarialCases = [
  {
    id: "ADV-01",
    mutate: (book) =>
      (book.worksheets.getItem("HYPOTHESES_TCO").getRange("D6").values = [[""]]),
    verify: (book) => {
      assert.equal(
        book.worksheets.getItem("HYPOTHESES_TCO").getRange("M6").values[0][0],
        "INCONNU",
      );
      assert.equal(
        book.worksheets.getItem("TCO_12_36_60").getRange("C6").values[0][0],
        "ND",
      );
    },
  },
  {
    id: "ADV-02",
    mutate: (book) =>
      (book.worksheets.getItem("HYPOTHESES_TCO").getRange("D6").values = [[-1]]),
    verify: (book) =>
      assert.equal(
        book.worksheets.getItem("HYPOTHESES_TCO").getRange("M6").values[0][0],
        "STOP",
      ),
  },
  {
    id: "ADV-03",
    mutate: (book) =>
      (book.worksheets.getItem("HYPOTHESES_TCO").getRange("D6").values = [
        [1_000_000_000.01],
      ]),
    verify: (book) =>
      assert.equal(
        book.worksheets.getItem("HYPOTHESES_TCO").getRange("M6").values[0][0],
        "STOP",
      ),
  },
  {
    id: "ADV-04",
    mutate: (book) =>
      (book.worksheets.getItem("HYPOTHESES_TCO").getRange("J6").values = [[1.5]]),
    verify: (book) =>
      assert.equal(
        book.worksheets.getItem("HYPOTHESES_TCO").getRange("M6").values[0][0],
        "STOP",
      ),
  },
  {
    id: "ADV-05",
    mutate: (book) =>
      (book.worksheets.getItem("RISQUE_PANNE").getRange("C7").values = [[1.5]]),
    verify: (book) =>
      assert.equal(
        book.worksheets.getItem("RISQUE_PANNE").getRange("C23").values[0][0],
        "STOP",
      ),
  },
  {
    id: "ADV-06",
    mutate: (book) =>
      (book.worksheets.getItem("RISQUE_PANNE").getRange("C14").values = [[25.123]]),
    verify: (book) => {
      const sheet = book.worksheets.getItem("RISQUE_PANNE");
      assert.equal(sheet.getRange("C22").values[0][0], "INVALIDE");
      assert.equal(sheet.getRange("C23").values[0][0], "STOP");
    },
  },
  {
    id: "ADV-07",
    mutate: (book) =>
      (book.worksheets.getItem("RISQUE_PANNE").getRange("C14").values = [[""]]),
    verify: (book) =>
      assert.equal(
        book.worksheets.getItem("RISQUE_PANNE").getRange("C22").values[0][0],
        "INVALIDE",
      ),
  },
  {
    id: "ADV-08",
    mutate: (book) =>
      (book.worksheets.getItem("INVENTAIRE").getRange("H6").values = [["failed"]]),
    verify: (book) => {
      assert.equal(
        book.worksheets.getItem("INVENTAIRE").getRange("N6").values[0][0],
        "STOP",
      );
      assert.equal(
        book.worksheets.getItem("DECISION").getRange("C13").values[0][0],
        "STOP",
      );
    },
  },
  {
    id: "ADV-09",
    mutate: (book) =>
      (book.worksheets.getItem("INVENTAIRE").getRange("H6").values = [["NA"]]),
    verify: (book) => {
      assert.equal(
        book.worksheets.getItem("INVENTAIRE").getRange("N6").values[0][0],
        "STOP",
      );
      assert.equal(
        book.worksheets.getItem("DECISION").getRange("C13").values[0][0],
        "STOP",
      );
    },
  },
  {
    id: "ADV-10",
    mutate: (book) =>
      (book.worksheets.getItem("LIRE_D_ABORD").getRange("C17").values = [["incident"]]),
    verify: (book) =>
      assert.equal(
        book.worksheets.getItem("DECISION").getRange("C13").values[0][0],
        "STOP",
      ),
  },
];
for (const testCase of adversarialCases) {
  await mutateFresh(testCase.mutate, (book) => {
    testCase.verify(book);
    adversarial.push({ id: testCase.id, status: "PASS" });
  });
}

const sabotages = [];
const controlCorrectionRefs = controls
  .getRange(`G6:G${controlLastRow}`)
  .values.flat();
const sabotageCases = governedOutputTargets.map((target, index) => {
  const targetReference = `${target.sheet}!${target.address}`;
  const controlIndex = controlCorrectionRefs.findIndex(
    (reference) => reference === targetReference,
  );
  assert.notEqual(
    controlIndex,
    -1,
    `${targetReference} doit posséder un contrôle visible dédié.`,
  );
  return [
    `SAB-${String(index + 1).padStart(2, "0")}`,
    target.sheet,
    target.address,
    `F${controlIndex + 6}`,
  ];
});
for (const [id, sheetName, address, controlCell] of sabotageCases) {
  await mutateFresh(
    (book) => {
      book.worksheets.getItem(sheetName).getRange(address).formulas = [["=1"]];
    },
    (book) => {
      const checkSheet = book.worksheets.getItem("CONTROLES");
      assert.equal(checkSheet.getRange(controlCell).values[0][0], "FAIL");
      assert.equal(checkSheet.getRange("B4").values[0][0], "MODEL STATUS: FAIL");
      sabotages.push({ id, status: "PASS", detectedBy: `CONTROLES!${controlCell}` });
    },
  );
}
const executedTestRows = [
  ...mutations.map(({ id }) => [id, "mutation"]),
  ...adversarial.map(({ id }) => [id, "adversarial"]),
  ...sabotages.map(({ id }) => [id, "sabotage"]),
];
assert.deepEqual(
  visibleTestRows,
  executedTestRows,
  "La recette visible doit correspondre exactement aux scénarios exécutés.",
);
const visibleTestCounts = Object.fromEntries(
  ["mutation", "adversarial", "sabotage"].map((family) => [
    family,
    visibleTestRows.filter(([, visibleFamily]) => visibleFamily === family)
      .length,
  ]),
);
assert.equal(visibleTestCounts.mutation, mutations.length);
assert.equal(visibleTestCounts.adversarial, adversarial.length);
assert.equal(visibleTestCounts.sabotage, sabotages.length);

const formulaErrors = new Set([
  "#REF!",
  "#DIV/0!",
  "#VALUE!",
  "#NAME?",
  "#N/A",
  "#NUM!",
  "#NULL!",
  "#SPILL!",
  "#CALC!",
]);
const secretPatterns = [
  { id: "aws-access-key", regex: /\bAKIA[0-9A-Z]{16}\b/ },
  { id: "github-token", regex: /\bgh[pousr]_[A-Za-z0-9]{30,}\b/ },
  { id: "stripe-live-key", regex: /\bsk_live_[A-Za-z0-9]{16,}\b/ },
  {
    id: "openai-project-key",
    regex: /\bsk-proj-[A-Za-z0-9_-]{20,}\b/,
  },
  {
    id: "slack-token",
    regex: /\bxox[a-z]-[A-Za-z0-9-]{12,}\b/i,
  },
  {
    id: "bearer-token",
    regex: /\bBearer\s+([A-Za-z0-9._~+/=-]{20,})\b/i,
    captureGroup: 1,
  },
  {
    id: "credential-url",
    regex:
      /\b(?:https?|postgres(?:ql)?|mysql|mongodb(?:\+srv)?|redis):\/\/[^/\s:@]+:([^/@\s]{6,})@[^/\s]+/i,
    captureGroup: 1,
  },
  {
    id: "password-assignment",
    regex:
      /\b(?:password|passwd|pwd)\s*[:=]\s*["']?([^\s"'`,;]{8,})/i,
    captureGroup: 1,
  },
  {
    id: "token-assignment",
    regex:
      /\b(?:access[_-]?token|api[_-]?token|auth[_-]?token|token)\s*[:=]\s*["']?([A-Za-z0-9._~+/=-]{12,})/i,
    captureGroup: 1,
  },
  {
    id: "supabase-secret-key",
    regex: /\bsb_secret_[A-Za-z0-9_-]{20,}\b/i,
  },
  {
    id: "supabase-service-role-assignment",
    regex:
      /\b(?:SUPABASE_(?:SERVICE_ROLE|SECRET)_KEY|SERVICE[_-]?ROLE[_-]?(?:KEY|SECRET))\s*[:=]\s*["']?([A-Za-z0-9._~+/=-]{16,})/i,
    captureGroup: 1,
  },
  { id: "private-key", regex: /BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY/ },
  { id: "jwt", regex: /\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/ },
];
const isSecretPlaceholder = (candidate) => {
  const normalized = candidate.trim().replace(/^["']|["']$/g, "");
  return (
    /^(?:<[^>]+>|\$\{[^}]+\}|\{\{[^}]+\}\}|\[[^\]]+\])$/.test(
      normalized,
    ) ||
    /^(?:redacted|masked|placeholder|example|exemple|dummy|fake|test|secret|token|password|value|valeur|change[_-]?me)$/i.test(
      normalized,
    ) ||
    /^(?:your|votre|example|exemple|dummy|fake|test)[_-].+/i.test(
      normalized,
    ) ||
    /^(?:x{4,}|\*{4,}|\.{3})$/i.test(normalized) ||
    /^\$[A-Z][A-Z0-9_]*$/.test(normalized)
  );
};
const matchingSecretDetectors = (text) =>
  secretPatterns
    .filter((pattern) => {
      const match = pattern.regex.exec(text);
      if (!match) return false;
      return (
        pattern.captureGroup === undefined ||
        !isSecretPlaceholder(match[pattern.captureGroup])
      );
    })
    .map((pattern) => pattern.id);
const secretDetectorPositiveFixtures = [
  {
    detector: "openai-project-key",
    text: `sk-proj-${"A".repeat(24)}`,
  },
  {
    detector: "slack-token",
    text: `xoxb-${"1".repeat(12)}-${"A".repeat(16)}`,
  },
  {
    detector: "bearer-token",
    text: `Authorization: Bearer ${"B".repeat(24)}`,
  },
  {
    detector: "credential-url",
    text: `postgresql://audit:${"P".repeat(16)}@db.example.test/app`,
  },
  {
    detector: "password-assignment",
    text: "password=CorrectHorse42",
  },
  {
    detector: "token-assignment",
    text: `api_token=${"T".repeat(24)}`,
  },
  {
    detector: "supabase-secret-key",
    text: `sb_secret_${"S".repeat(24)}`,
  },
  {
    detector: "supabase-service-role-assignment",
    text: `SUPABASE_SERVICE_ROLE_KEY=${"R".repeat(32)}`,
  },
];
for (const fixture of secretDetectorPositiveFixtures) {
  assert.ok(
    matchingSecretDetectors(fixture.text).includes(fixture.detector),
    `Le détecteur ${fixture.detector} doit reconnaître sa fixture synthétique.`,
  );
}
const secretDetectorHelpFixtures = [
  "Documenter le préfixe sk-proj- sans recopier la clé.",
  "Les jetons Slack xox* doivent rester dans le coffre.",
  "Exemple d’en-tête : Authorization: Bearer <token>.",
  "Exemple : postgresql://user:<password>@host/database.",
  "Utiliser password=<mot-de-passe> et token=REDACTED dans la documentation.",
  "Les anciennes clés anon/service_role doivent être tournées.",
  'SUPABASE_SERVICE_ROLE_KEY=${SECRET_MANAGER_REF}',
];
for (const fixture of secretDetectorHelpFixtures) {
  assert.deepEqual(
    matchingSecretDetectors(fixture),
    [],
    `Le texte d’aide ne doit pas être signalé : ${fixture}`,
  );
}
const formulaErrorHits = [];
const secretCandidates = [];
let formulaCellCount = 0;
const sheetMetrics = [];
for (const sheetName of expectedSheetNames) {
  const sheet = workbook.worksheets.getItem(sheetName);
  const used = sheet.getUsedRange();
  const values = used.values;
  const formulas = used.formulas;
  const rows = values.length;
  const columns = Math.max(0, ...values.map((row) => row.length));
  let formulasOnSheet = 0;
  for (let row = 0; row < values.length; row += 1) {
    for (let column = 0; column < values[row].length; column += 1) {
      const value = values[row][column];
      const formulaValue = formulas?.[row]?.[column];
      if (typeof formulaValue === "string" && formulaValue.startsWith("=")) {
        formulasOnSheet += 1;
        formulaCellCount += 1;
        assert.ok(
          !/\[[^\]]+\.xlsx\]/i.test(formulaValue),
          `${sheetName} contient un lien vers un classeur externe.`,
        );
      }
      if (
        typeof value === "string" &&
        [...formulaErrors].some((error) => value.includes(error))
      ) {
        formulaErrorHits.push({ sheet: sheetName, row, column, value });
      }
      for (const candidate of [
        { kind: "value", text: value },
        { kind: "formula", text: formulaValue },
      ]) {
        if (typeof candidate.text === "string") {
          for (const detector of matchingSecretDetectors(candidate.text)) {
            secretCandidates.push({
              sheet: sheetName,
              row,
              column,
              kind: candidate.kind,
              detector,
            });
          }
        }
      }
    }
  }
  sheetMetrics.push({
    name: sheetName,
    rows,
    columns,
    formulas: formulasOnSheet,
    tables: sheet.tables.items.length,
  });
}
assert.deepEqual(formulaErrorHits, [], "Aucune erreur de formule ne doit subsister.");
assert.deepEqual(
  secretCandidates,
  [],
  "Aucun candidat secret évident ne doit apparaître dans le classeur.",
);

const zipEntries = await unzipList(outputPath);
assert.ok(!zipEntries.some((entry) => /vbaProject\.bin$/i.test(entry)));
assert.ok(!zipEntries.some((entry) => entry.startsWith("xl/externalLinks/")));
const sheetXml = await Promise.all(
  expectedSheetNames.map((_, index) =>
    unzipText(outputPath, `xl/worksheets/sheet${index + 1}.xml`),
  ),
);
const frozenSheetCount = sheetXml.filter(
  (xml) => /<(?:\w+:)?pane\b/.test(xml) && xml.includes('state="frozen"'),
).length;
const filteredSheetCount = sheetXml.filter(
  (xml) =>
    /<(?:\w+:)?tableParts\b/.test(xml) ||
    /<(?:\w+:)?autoFilter\b/.test(xml),
).length;
const dataValidationSheetCount = sheetXml.filter((xml) =>
  /<(?:\w+:)?dataValidations\b/.test(xml),
).length;
assert.equal(frozenSheetCount, 17, "Les 17 onglets doivent conserver leurs volets figés.");
assert.equal(filteredSheetCount, 17, "Les 17 onglets doivent conserver un filtre.");
assert.ok(
  dataValidationSheetCount >= 8,
  "Les validations de données doivent couvrir les principales zones éditables.",
);

const compactInspect = await workbook.inspect({
  kind: "workbook,sheet,table,formula",
  maxChars: 48_000,
  tableMaxRows: 8,
  tableMaxCols: 10,
  options: { maxResults: 250 },
});
const errorInspect = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!",
  options: { useRegex: true, maxResults: 300 },
  summary: "final formula error scan",
});

const previewRecords = [];
for (let index = 0; index < expectedSheetNames.length; index += 1) {
  const sheetName = expectedSheetNames[index];
  const blob = await workbook.render({
    sheetName,
    autoCrop: "all",
    scale: 1,
    format: "png",
  });
  const bytes = new Uint8Array(await blob.arrayBuffer());
  assert.ok(bytes.length > 5_000, `${sheetName} doit produire un rendu non vide.`);
  const fileName = `${String(index + 1).padStart(2, "0")}-${sheetName}.png`;
  const filePath = path.join(previewDir, fileName);
  await fs.writeFile(filePath, bytes);
  previewRecords.push({
    sheet: sheetName,
    file: path.relative(workspace, filePath),
    bytes: bytes.length,
    sha256: sha256(bytes),
  });
}

const inspectReport = {
  generatedAt: new Date().toISOString(),
  workbook: path.relative(workspace, outputPath),
  hashSha256: outputHash,
  sheets: sheetMetrics,
  formulaCellCount,
  formulaErrorHits,
  compactInspectNdjson: compactInspect.ndjson,
  formulaErrorInspectNdjson: errorInspect.ndjson,
};
await fs.writeFile(inspectJsonPath, JSON.stringify(inspectReport, null, 2), "utf8");
await fs.writeFile(
  inspectMdPath,
  [
    "# Inspection du kit de reprise MVP vibe-code",
    "",
    `- SHA-256 : \`${outputHash}\``,
    `- Onglets : ${sheetMetrics.length}`,
    `- Tableaux filtrables : ${sheetMetrics.reduce((sum, item) => sum + item.tables, 0)}`,
    `- Cellules de formule : ${formulaCellCount}`,
    `- Erreurs de formule : ${formulaErrorHits.length}`,
    `- Rendus PNG : ${previewRecords.length}`,
    "",
    "| Onglet | Lignes | Colonnes | Formules | Tableaux |",
    "|---|---:|---:|---:|---:|",
    ...sheetMetrics.map(
      (item) =>
        `| ${item.name} | ${item.rows} | ${item.columns} | ${item.formulas} | ${item.tables} |`,
    ),
    "",
    "Aucune recalculation Microsoft Excel réelle : import, calcul et rendu effectués par @oai/artifact-tool.",
    "",
  ].join("\n"),
  "utf8",
);

const validation = {
  status: "GO_LOCAL_DRAFT",
  generatedAt: new Date().toISOString(),
  workbook: {
    output: path.relative(workspace, outputPath),
    public: path.relative(workspace, publicPath),
    sha256: outputHash,
    bytes: outputBytes.length,
    exactPublicHashMatch: outputHash === publicHash,
  },
  corpus: {
    sheets: expectedSheetNames.length,
    tablesWithFilters: filteredSheetCount,
    frozenSheets: frozenSheetCount,
    sheetsWithDataValidation: dataValidationSheetCount,
    proofDomains: proofs.length,
    platformFacts: platformFacts.length,
    officialSources: sources.length,
    formulaCells: formulaCellCount,
  },
  oracle: {
    tco12_36_60: Object.fromEntries(
      trajectoryInputs.map((row, index) => [row[0], oracleTco[index]]),
    ),
    outage: outageOracle,
  },
  tests: {
    legitimateMutations: mutations,
    adversarial,
    sabotages,
    totals: {
      specified: visibleTestRows.length,
      legitimateMutations: mutations.length,
      adversarial: adversarial.length,
      sabotages: sabotages.length,
      passed: mutations.length + adversarial.length + sabotages.length,
      failed: 0,
    },
  },
  safety: {
    formulaErrors: formulaErrorHits.length,
    macros: false,
    externalWorkbookLinks: false,
    secretCandidates: secretCandidates.length,
    secretDetectors: secretPatterns.map(({ id }) => id),
    secretDetectorFixtures: {
      positive: secretDetectorPositiveFixtures.length,
      helpTextNegative: secretDetectorHelpFixtures.length,
    },
    secretScan:
      "Best effort uniquement : aucun scanner ne garantit l’absence de secret.",
    fictitiousValuesConfirmedReplaced: false,
    finalDecisionBlocked: true,
  },
  rendering: {
    count: previewRecords.length,
    previews: previewRecords,
  },
  recalculation: {
    artifactTool: true,
    realMicrosoftExcel: false,
    limitation:
      "Le classeur n’a pas été ouvert ni recalculé par Microsoft Excel réel.",
  },
};
assert.equal(previewRecords.length, 17);
await fs.writeFile(validationJsonPath, JSON.stringify(validation, null, 2), "utf8");
await fs.writeFile(
  validationMdPath,
  [
    "# Validation — kit de reprise MVP vibe-code",
    "",
    `**Statut : ${validation.status}**`,
    "",
    `- SHA-256 output/public : \`${outputHash}\` — identique`,
    `- 17 onglets, ${filteredSheetCount} tableaux filtrables, ${frozenSheetCount} volets figés`,
    `- ${formulaCellCount} cellules de formule ; ${formulaErrorHits.length} erreur détectée`,
    `- Oracle TCO : ${trajectoryInputs.length} trajectoires × ${horizons.length} horizons`,
    `- Fixture décimale : ${decimalTrajectoryInputs.length * horizons.length}/${tcoOutputTargets.length} cellules TCO strictement conformes à l’oracle`,
    `- Oracle panne : capacité ${outageOracle.capacityCost} €, observable ${outageOracle.observableCost} €, attendu ${outageOracle.expectedAnnualCost} €`,
    `- Recette visible/exécutée : ${visibleTestRows.length}/${visibleTestRows.length} scénarios`,
    `- Mutations légitimes : ${mutations.length}/${mutations.length} PASS`,
    `- Entrées adversariales : ${adversarial.length}/${adversarial.length} PASS`,
    `- Sabotages de formule détectés : ${sabotages.length}/${sabotages.length} PASS`,
    `- Rendus visuels : ${previewRecords.length}/17 PNG`,
    "- Macros : aucune ; liens vers classeurs externes : aucun",
    "- Scan de secrets : best effort, 0 candidat évident ; ce n’est pas une garantie",
    "- Valeurs héritées fictives : NON confirmées remplacées ; finalisation volontairement bloquée",
    "",
    "Aucune recalculation Microsoft Excel réelle n’a été effectuée. Les calculs, réimports et rendus utilisent @oai/artifact-tool.",
    "",
  ].join("\n"),
  "utf8",
);

console.log(JSON.stringify(validation, null, 2));
