import { readdirSync, readFileSync } from "node:fs";
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
import { ContactProjectSection } from "@/components/design-shared/SiteFooter";

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
  it("keeps the keyboard skip link out of printed pages", () => {
    const globalStyles = readFileSync(
      join(process.cwd(), "src/app/globals.css"),
      "utf8",
    );

    expect(globalStyles).toMatch(
      /@media print\s*{[\s\S]*?\.skip-to-content\s*{[\s\S]*?display:\s*none\s*!important;/,
    );
  });

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
      const panel = panels.find(
        (candidate) => attribute(candidate, "id") === panelId,
      );

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
      join(
        process.cwd(),
        "src/components/design-shared/useDesignInteractive.ts",
      ),
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

    const firstLabel = attribute(
      first.match(/<div[^>]+role="region"[^>]*>/)?.[0] || "",
      "aria-label",
    );
    const secondLabel = attribute(
      second.match(/<div[^>]+role="region"[^>]*>/)?.[0] || "",
      "aria-label",
    );
    expect(first).toContain("<caption");
    expect(firstLabel).toContain("Hébergement");
    expect(secondLabel).toContain("Maintenance");
    expect(firstLabel).not.toBe(secondLabel);
  });

  it("connects math challenge errors and announces the async question", () => {
    const html = renderToStaticMarkup(
      <MathChallenge onChange={() => undefined} error="Réponse incorrecte" />,
    );
    const input =
      html.match(/<input[^>]+name="mathChallengeAnswer"[^>]*>/)?.[0] || "";
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

  it("preserves the semantic space in the shared contact heading", () => {
    const html = renderToStaticMarkup(<ContactProjectSection />);
    const headingMarkup =
      html.match(/<h2 id="contact-project-title">([\s\S]*?)<\/h2>/)?.[1] ?? "";
    const headingText = headingMarkup
      .replace(/<br\/>/g, " ")
      .replace(/<[^>]+>/g, "")
      .replace(/&[^;]+;/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    expect(headingText).toContain(
      "Parlons de votre projet. 30 minutes, c est tout.",
    );
    expect(headingText).not.toContain("devotre");
  });
});

/**
 * Deux contrats nés d'audits qui les ont mesurés, écrits autour de la
 * propriété plutôt qu'autour d'une formulation.
 */
describe("indicateurs de focus des composants partagés", () => {
  const dossier = join(process.cwd(), "src/components/design-shared");
  const feuilles = readdirSync(dossier)
    .filter((nom) => nom.endsWith(".css"))
    .map((nom) => ({
      nom,
      css: readFileSync(join(dossier, nom), "utf8").replace(
        // Les commentaires citent les valeurs abandonnées : les scanner
        // ferait échouer la règle sur sa propre explication.
        /\/\*[\s\S]*?\*\//g,
        "",
      ),
    }));

  it("lit bien les feuilles du dossier", () => {
    expect(feuilles.length).toBeGreaterThan(3);
  });

  /**
   * Les champs du formulaire de contact posaient `outline: none` et laissaient
   * pour tout indice un liseré de 1 px et un halo composité à rgb(237, 229, 250)
   * — 1,22:1 contre l'intérieur blanc du champ, c'est-à-dire invisible. Sur le
   * second point de conversion du site, l'état focalisé tenait à un trait d'un
   * pixel.
   *
   * La règle générale du dépôt, vérifiable : supprimer l'anneau dans un état
   * `:focus` n'est acceptable que si la MÊME déclaration en réintroduit un.
   * Rien n'est imposé sur l'épaisseur, la couleur ni le sélecteur.
   */
  it.each(feuilles)(
    "$nom : aucune règle :focus ne supprime l'anneau sans le remplacer",
    ({ css }) => {
      const fautives = [...css.matchAll(/([^{}]*:focus[^{}]*)\{([^}]*)\}/g)]
        .filter(
          ([, , corps]) =>
            /outline\s*:\s*(none|0)\s*(!important)?\s*;/.test(corps) &&
            !/outline\s*:\s*[^;]*\b(solid|dashed|dotted|double)\b/.test(corps),
        )
        .map(([, selecteur]) => selecteur.trim().replace(/\s+/g, " "));

      expect(
        fautives,
        `« outline: none » sans indicateur de remplacement : ${fautives.join(" | ")}`,
      ).toEqual([]);
    },
  );
});

/**
 * Méga-menu mobile — mesuré au viewport 390 x 844, menu ouvert : à partir de la
 * 21e tabulation le focus partait sur les boutons du héros, dont
 * `elementFromPoint` en leur centre renvoyait une carte du panneau. Treize
 * arrêts sur trente étaient posés sur du contenu entièrement recouvert, alors
 * que `aria-expanded` valait "true" et que le défilement de la page était
 * verrouillé : échec de WCAG 2.4.11 « Focus non masqué ».
 *
 * Les contrôles ci-dessous visent les deux propriétés durables — le focus est
 * confiné tant que la feuille est ouverte, et le déclencheur désigne ce qu'il
 * ouvre — sans figer les noms internes du gestionnaire.
 */
describe("méga-menu mobile — contrat modal", () => {
  const source = readFileSync(
    join(process.cwd(), "src/components/design-shared/useDesignInteractive.ts"),
    "utf8",
  );
  // Bornes de la section méga-menu : au-delà, d'autres composants déclarent
  // leurs propres seuils de media query et fausseraient les contrôles.
  const debut = source.indexOf("[data-mega-root]");
  const finSection = source.indexOf("Sommaire de page", debut);
  const bloc = source.slice(debut, finSection > 0 ? finSection : undefined);

  it("délimite bien la section analysée", () => {
    expect(debut).toBeGreaterThan(0);
    expect(bloc.length).toBeGreaterThan(500);
    expect(bloc.length).toBeLessThan(source.length);
  });

  it("désigne le panneau ouvert par le déclencheur", () => {
    expect(bloc).toMatch(/setAttribute\(\s*"aria-controls"/);
    expect(bloc).toMatch(/panel\.id/);
  });

  it("intercepte la tabulation tant que la feuille est ouverte", () => {
    // Un gestionnaire de `Tab` doit exister ET être conditionné à l'état
    // ouvert : un piège permanent casserait le déroulant de bureau, où sortir
    // par Tab est le comportement attendu.
    const gestionnaire = bloc.match(
      /\(event: KeyboardEvent\)[\s\S]*?event\.key !== "Tab"[\s\S]{0,600}/,
    )?.[0];
    expect(gestionnaire, "aucun gestionnaire de Tab dans le méga-menu").toBeTruthy();
    expect(gestionnaire).toMatch(/megaOpen/);
    expect(gestionnaire).toMatch(/isMobileSheet\(\)/);
    expect(gestionnaire).toMatch(/preventDefault\(\)/);
  });

  it("arme le piège sur le même seuil que le verrou de défilement", () => {
    // S'ils divergent, il existe une bande de largeurs où la feuille est en
    // position fixe, la page verrouillée, et le focus libre de partir derrière.
    const seuils = [...bloc.matchAll(/max-width:\s*(\d+)px/g)].map((m) => m[1]);
    expect(seuils.length).toBeGreaterThan(0);
    expect(new Set(seuils).size).toBe(1);
  });

  it("rend le focus au déclencheur à la fermeture", () => {
    // Volontairement lâche : ce qui compte est l'enchaînement « on ferme, le
    // focus était dans le panneau, il revient au déclencheur ». La façon de
    // l'écrire peut changer sans que la propriété soit perdue.
    expect(bloc).toMatch(
      /!open[\s\S]{0,120}panel\.contains[\s\S]{0,120}trigger\.focus\(\)/,
    );
  });
});
