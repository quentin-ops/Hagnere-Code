import assert from "node:assert/strict";
import fs from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const url = "http://127.0.0.1:3016/guides/facturation-abonnements-saas";
const workspace = process.cwd();
const outputDir = path.join(
  workspace,
  "output",
  "facturation-abonnements-saas-2026-07-28",
  "bat",
);
const executablePath =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

await fs.mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({
  executablePath,
  headless: true,
});

function activeInfo(page) {
  return page.evaluate(() => {
    const element = document.activeElement;
    const style = element ? getComputedStyle(element) : null;
    const label =
      element instanceof HTMLInputElement
        ? element.labels?.[0]?.textContent
        : element?.textContent;
    return {
      tag: element?.tagName ?? null,
      type: element instanceof HTMLInputElement ? element.type : null,
      label: label?.replace(/\s+/g, " ").trim() ?? null,
      href:
        element instanceof HTMLAnchorElement
          ? element.getAttribute("href")
          : null,
      focusVisible: element?.matches(":focus-visible") ?? false,
      outlineStyle: style?.outlineStyle ?? null,
      outlineWidth: style?.outlineWidth ?? null,
      detailsOpen: element?.closest("details")?.open ?? null,
    };
  });
}

async function tabUntil(page, predicate, maximum) {
  for (let count = 1; count <= maximum; count += 1) {
    await page.keyboard.press("Tab");
    const current = await activeInfo(page);
    if (predicate(current)) {
      return { count, current };
    }
  }
  throw new Error(`Cible clavier introuvable après ${maximum} tabulations.`);
}

const results = [];

for (const width of [320, 1440]) {
  const page = await browser.newPage({
    viewport: { width, height: 900 },
  });
  await page.goto(url, { waitUntil: "networkidle" });
  const bodyText = (await page.locator("body").innerText()).replace(
    /\s+/g,
    " ",
  );
  assert.match(bodyText, /07 sources à réconcilier/);
  assert.match(bodyText, /24 mois de coût total \(TCO\) comparable/);
  assert.match(bodyText, /24 tests de recette/);

  const summaryFocus = await tabUntil(
    page,
    (current) =>
      current.tag === "SUMMARY" &&
      current.label === "Modifier les coûts et le temps de chaque option",
    60,
  );
  assert.equal(summaryFocus.current.focusVisible, true);
  assert.notEqual(summaryFocus.current.outlineStyle, "none");
  assert.notEqual(summaryFocus.current.outlineWidth, "0px");

  const screenshot = path.join(outputDir, `keyboard-r5-${width}.png`);
  await page
    .locator("summary")
    .filter({ hasText: "Modifier les coûts et le temps de chaque option" })
    .scrollIntoViewIfNeeded();
  await page.screenshot({ path: screenshot });

  await page.keyboard.press("Enter");
  assert.equal((await activeInfo(page)).detailsOpen, true);

  await page.keyboard.press("Tab");
  const firstInput = await activeInfo(page);
  assert.equal(firstInput.tag, "INPUT");
  assert.match(firstInput.label ?? "", /Mise en place/);

  await page.keyboard.press("Shift+Tab");
  const backToSummary = await activeInfo(page);
  assert.equal(backToSummary.tag, "SUMMARY");
  assert.equal(
    backToSummary.label,
    "Modifier les coûts et le temps de chaque option",
  );

  const unknownRadio = await tabUntil(
    page,
    (current) =>
      current.type === "radio" && current.label === "Inconnue — STOP",
    80,
  );
  await page.keyboard.press("ArrowDown");
  assert.equal(
    await page
      .locator('input[name="subscription-billing-tax-qualification"]:checked')
      .getAttribute("value"),
    "not-required",
  );
  assert.match(
    await page
      .getByRole("status")
      .allTextContents()
      .then((items) => items.join(" | ")),
    /PASS — le mois se rapproche/,
  );

  await page.keyboard.press("Space");
  assert.equal(
    await page
      .locator('input[name="subscription-billing-tax-qualification"]:checked')
      .getAttribute("value"),
    "not-required",
  );

  const resetButton = await tabUntil(
    page,
    (current) => current.tag === "BUTTON" && current.label === "Réinitialiser",
    30,
  );
  await page.keyboard.press("Enter");
  assert.match(
    await page
      .getByRole("status")
      .allTextContents()
      .then((items) => items.join(" | ")),
    /STOP — ne clôturez pas et n’automatisez pas/,
  );

  const downloadLink = await tabUntil(
    page,
    (current) =>
      current.tag === "A" &&
      current.href === "/ressources/kit-pilotage-facturation-saas.xlsx",
    10,
  );
  const downloadPromise = page.waitForEvent("download");
  await page.keyboard.press("Enter");
  const download = await downloadPromise;
  assert.equal(
    download.suggestedFilename(),
    "kit-pilotage-facturation-saas.xlsx",
  );

  results.push({
    width,
    summaryTabSteps: summaryFocus.count,
    summaryFocusVisible: summaryFocus.current.focusVisible,
    enterOpensDetails: true,
    firstInput: firstInput.label,
    shiftTabReturnsSummary: true,
    radioTabSteps: unknownRadio.count,
    arrowSelectsNotRequired: true,
    spaceKeepsSelection: true,
    resetTabSteps: resetButton.count,
    enterReset: "STOP",
    downloadTabSteps: downloadLink.count,
    enterDownload: download.suggestedFilename(),
    screenshot,
  });

  await page.close();
}

const themePage = await browser.newPage({
  viewport: { width: 1440, height: 900 },
});
await themePage.goto(url, { waitUntil: "networkidle" });
const themeToggle = themePage.getByRole("button", {
  name: "Basculer le thème clair/sombre",
});
if (
  await themePage.evaluate(() =>
    document.documentElement.classList.contains("dark"),
  )
) {
  await themeToggle.click();
  await themePage.waitForTimeout(750);
}
const toolHeading = themePage.getByRole("heading", {
  name: "Comparez le coût total de possession (TCO), puis rapprochez un mois",
});
await toolHeading.scrollIntoViewIfNeeded();
const lightScreenshot = path.join(outputDir, "theme-r5-light-1440.png");
await themePage.screenshot({ path: lightScreenshot });
const lightTheme = await themePage.evaluate(() => ({
  bodyBackground: getComputedStyle(document.body).backgroundColor,
  bodyColor: getComputedStyle(document.body).color,
}));

await themeToggle.click();
await themePage.waitForTimeout(750);
await toolHeading.scrollIntoViewIfNeeded();
const darkScreenshot = path.join(outputDir, "theme-r5-dark-1440.png");
await themePage.screenshot({ path: darkScreenshot });
const darkTheme = await themePage.evaluate(() => ({
  bodyBackground: getComputedStyle(document.body).backgroundColor,
  bodyColor: getComputedStyle(document.body).color,
  toolTitleColor: getComputedStyle(
    [...document.querySelectorAll("h3")].find((heading) =>
      heading.textContent?.includes("Comparez le coût total"),
    ),
  ).color,
}));
await themeToggle.click();
await themePage.waitForTimeout(750);
await themePage.close();

console.log(
  JSON.stringify(
    {
      chromeVersion: await browser.version(),
      results,
      themes: {
        light: lightTheme,
        dark: darkTheme,
        lightScreenshot,
        darkScreenshot,
      },
    },
    null,
    2,
  ),
);

await browser.close();
