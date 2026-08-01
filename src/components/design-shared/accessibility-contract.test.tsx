import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { scenariosHtml as auditScenarios } from "@/components/audit-technique/sections/scenarios";
import { scenariosHtml as videoScenarios } from "@/components/contenu-video/sections/scenarios";
import { scenariosHtml as ecommerceScenarios } from "@/components/ecommerce/sections/scenarios";
import { scenariosHtml as maintenanceScenarios } from "@/components/maintenance-evolution/sections/scenarios";
import { scenariosHtml as internalToolsScenarios } from "@/components/outils-internes/sections/scenarios";
import { scenariosHtml as adsScenarios } from "@/components/publicite-en-ligne/sections/scenarios";
import { scenariosHtml as saasScenarios } from "@/components/saas-applications/sections/scenarios";
import { scenariosHtml as showcaseScenarios } from "@/components/sites-vitrines/sections/scenarios";
import { faqHtml as auditFaq } from "@/components/audit-technique/sections/faq";
import { faqHtml as maintenanceFaq } from "@/components/maintenance-evolution/sections/faq";
import { GuideTable } from "@/components/guides/guide-content-blocks";
import { MathChallenge } from "@/components/project-funnel/MathChallenge";

const scenarios = [
  auditScenarios,
  videoScenarios,
  ecommerceScenarios,
  maintenanceScenarios,
  internalToolsScenarios,
  adsScenarios,
  saasScenarios,
  showcaseScenarios,
];

function attribute(tag: string, name: string): string | undefined {
  return tag.match(new RegExp(`${name}="([^"]+)"`))?.[1];
}

describe("public accessibility contracts", () => {
  it.each(scenarios)("links every scenario tab to one named panel", (html) => {
    const tabs = html.match(/<button[^>]+role="tab"[^>]*>/g) || [];
    const panels = html.match(/<div[^>]+role="tabpanel"[^>]*>/g) || [];

    expect(tabs.length).toBeGreaterThan(0);
    expect(panels).toHaveLength(tabs.length);
    expect(html).toContain('role="tablist" aria-label="Choisir un scénario"');
    expect(html).not.toContain("<aside");

    const tabIds = tabs.map((tab) => attribute(tab, "id"));
    const panelIds = panels.map((panel) => attribute(panel, "id"));
    expect(new Set(tabIds).size).toBe(tabs.length);
    expect(new Set(panelIds).size).toBe(panels.length);

    tabs.forEach((tab) => {
      const selected = attribute(tab, "aria-selected");
      const tabId = attribute(tab, "id");
      const panelId = attribute(tab, "aria-controls");
      const panel = panels.find((candidate) => attribute(candidate, "id") === panelId);

      expect(tabId).toBeTruthy();
      expect(panelId).toBeTruthy();
      expect(attribute(tab, "tabindex")).toBe(selected === "true" ? "0" : "-1");
      expect(panel).toBeTruthy();
      expect(attribute(panel || "", "aria-labelledby")).toBe(tabId);
    });
  });

  it.each([auditFaq, maintenanceFaq])(
    "exposes FAQ filters as toggle buttons, not fake tabs",
    (html) => {
      const filters = html.match(/<button[^>]+data-faq-filter[^>]*>/g) || [];
      expect(html).toContain('role="group"');
      expect(html).not.toContain('role="tablist"');
      expect(filters.length).toBeGreaterThan(0);
      filters.forEach((filter) => {
        expect(attribute(filter, "aria-pressed")).toMatch(/^(true|false)$/);
        expect(attribute(filter, "role")).toBeUndefined();
      });
    },
  );

  it("keeps scenario keyboard navigation and roving tabindex in shared code", () => {
    const source = readFileSync(
      join(process.cwd(), "src/components/design-shared/useDesignInteractive.ts"),
      "utf8",
    );
    expect(source).toContain('e.key === "Home"');
    expect(source).toContain('e.key === "End"');
    expect(source).toContain("t.tabIndex = active ? 0 : -1");
    expect(source).toContain('tab.setAttribute("aria-controls", panelId)');
    expect(source).toContain('panel.setAttribute("aria-labelledby", tabId)');
  });

  it("gives scrollable guide tables descriptive, distinct landmarks", () => {
    const first = renderToStaticMarkup(
      <GuideTable
        headers={["Poste", "Année 1", "Année 2", "Année 3"]}
        rows={[["Hébergement", "100 €", "100 €", "100 €"]]}
      />,
    );
    const second = renderToStaticMarkup(
      <GuideTable
        headers={["Poste", "Année 1", "Année 2", "Année 3"]}
        rows={[["Maintenance", "500 €", "500 €", "500 €"]]}
      />,
    );

    const firstLabel = attribute(first.match(/<div[^>]+role="region"[^>]*>/)?.[0] || "", "aria-label");
    const secondLabel = attribute(second.match(/<div[^>]+role="region"[^>]*>/)?.[0] || "", "aria-label");
    expect(first).toContain("<caption");
    expect(firstLabel).toContain("Hébergement");
    expect(secondLabel).toContain("Maintenance");
    expect(firstLabel).not.toBe(secondLabel);
  });

  it("connects math challenge errors and announces the async question", () => {
    const html = renderToStaticMarkup(
      <MathChallenge onChange={() => undefined} error="Réponse incorrecte" />,
    );
    const input = html.match(/<input[^>]+name="mathChallengeAnswer"[^>]*>/)?.[0] || "";
    const describedBy = attribute(input, "aria-describedby") || "";
    const errorId = html.match(/<em id="([^"]+)" role="alert"/)?.[1];

    expect(html).toContain('aria-live="polite"');
    expect(attribute(input, "aria-invalid")).toBe("true");
    expect(errorId).toBeTruthy();
    expect(describedBy).toContain(errorId);
  });

  it("keeps the skip link for keyboards but removes it from printed pages", () => {
    const skipLink = readFileSync(
      join(process.cwd(), "src/components/design-shared/SkipToContent.tsx"),
      "utf8",
    );
    const globalStyles = readFileSync(
      join(process.cwd(), "src/app/globals.css"),
      "utf8",
    );

    expect(skipLink).toContain('href="#main-content"');
    expect(skipLink).toContain('className="skip-to-content"');
    expect(globalStyles).toMatch(
      /@media print\s*{[\s\S]*?\.skip-to-content\s*{[\s\S]*?display:\s*none !important;/,
    );
  });

  it("avoids nested complementary landmarks and exposes form announcements", () => {
    const guideLayout = readFileSync(
      join(process.cwd(), "src/components/guides/guide-layout.tsx"),
      "utf8",
    );
    const calculator = readFileSync(
      join(process.cwd(), "src/components/tools/ExcelCalculator.tsx"),
      "utf8",
    );
    const footer = readFileSync(
      join(process.cwd(), "src/components/design-shared/SiteFooter.tsx"),
      "utf8",
    );

    expect(guideLayout).not.toContain("<aside");
    expect(calculator).not.toContain("<aside");
    expect(calculator).toContain('role="status"');
    expect(calculator).toContain('role="alert"');
    expect(calculator).toContain("focusFirstCaptureError");
    expect(footer).toContain('aria-labelledby="contact-project-title"');
  });
});
