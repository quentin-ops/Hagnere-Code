/**
 * Smoke test du sitemap : on s'assure qu'il liste bien les routes critiques
 * pour le SEO et n'inclut pas les routes redirigées (404 SEO).
 *
 * Le test structurel compare le sitemap à la liste RÉELLE des page.tsx de
 * src/app : toute nouvelle page doit être ajoutée au sitemap (ou à la liste
 * d'exclusions volontaires ci-dessous) pour que la suite reste verte.
 */
import { readdirSync } from "node:fs";
import { join, relative } from "node:path";
import { describe, it, expect } from "vitest";
import sitemap from "./sitemap";

const BASE = "https://hagnere-code.ai";

/** Routes volontairement absentes du sitemap (redirects 3xx ou noindex). */
const EXCLUDED_ROUTES = [
  "/blog", // permanentRedirect → /
  "/guide", // permanentRedirect → /guides
  "/outils", // permanentRedirect → /demarrer-un-projet
  "/outils/estimer-mon-projet", // permanentRedirect → /demarrer-un-projet
  "/demarrer-un-projet/merci", // page de confirmation, noindex
];

function collectPageRoutes(dir: string, appDir: string): string[] {
  const routes: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      routes.push(...collectPageRoutes(full, appDir));
    } else if (entry.name === "page.tsx") {
      const rel = relative(appDir, dir).replace(/\\/g, "/");
      routes.push(rel === "" ? "/" : `/${rel}`);
    }
  }
  return routes;
}

describe("sitemap", () => {
  const map = sitemap();
  const urls = map.map((e) => e.url);

  it("inclut la home avec priority max", () => {
    const home = map.find((e) => e.url === BASE);
    expect(home).toBeDefined();
    expect(home?.priority).toBe(1.0);
  });

  it("inclut les 11 services", () => {
    const services = urls.filter((u) => u.includes("/services/"));
    expect(services.length).toBe(11);
    expect(urls).toContain(`${BASE}/services/application-mobile`);
  });

  it("inclut les 4 case studies", () => {
    const cases = urls.filter((u) => u.includes("/realisations/"));
    expect(cases.length).toBe(4);
  });

  it("inclut les pages corporate", () => {
    expect(urls).toContain(`${BASE}/services`);
    expect(urls).toContain(`${BASE}/methode`);
    expect(urls).toContain(`${BASE}/tarifs`);
    expect(urls).toContain(`${BASE}/realisations`);
    expect(urls).toContain(`${BASE}/equipe`);
    expect(urls).toContain(`${BASE}/contact`);
    expect(urls).toContain(`${BASE}/rendez-vous`);
    expect(urls).toContain(`${BASE}/demarrer-un-projet`);
  });

  it("inclut la section guides", () => {
    expect(urls).toContain(`${BASE}/guides`);
    expect(urls).toContain(`${BASE}/guides/combien-coute-un-site-internet`);
  });

  it("inclut le hub et les livres blancs publiés", () => {
    expect(urls).toContain(`${BASE}/livres-blancs`);
    expect(urls).toContain(
      `${BASE}/livres-blancs/comparer-devis-site-internet`,
    );
  });

  it("inclut le hub de ressources et les kits publiés", () => {
    expect(urls).toContain(`${BASE}/ressources`);
    expect(urls).toContain(
      `${BASE}/ressources/kit-cahier-des-charges-site-internet`,
    );
  });

  it("exclut les routes redirigées (estimer-mon-projet, blog, outils, guide)", () => {
    for (const route of EXCLUDED_ROUTES) {
      expect(urls).not.toContain(`${BASE}${route}`);
    }
  });

  it("inclut les pages légales", () => {
    expect(urls).toContain(`${BASE}/legal/mentions`);
    expect(urls).toContain(`${BASE}/legal/cgv`);
    expect(urls).toContain(`${BASE}/legal/confidentialite`);
    expect(urls).toContain(`${BASE}/legal/cookies`);
    expect(urls).toContain(`${BASE}/legal/accessibilite`);
  });

  it("toutes les URLs sont absolues HTTPS", () => {
    for (const url of urls) {
      expect(url).toMatch(/^https:\/\/hagnere-code\.ai/);
    }
  });

  it("toutes les entrées ont une priority valide", () => {
    for (const e of map) {
      expect(e.priority).toBeDefined();
      expect(e.priority).toBeGreaterThan(0);
      expect(e.priority).toBeLessThanOrEqual(1);
    }
  });

  it("chaque page.tsx de src/app est dans le sitemap (sauf exclusions volontaires)", () => {
    const appDir = join(process.cwd(), "src", "app");
    const routes = collectPageRoutes(appDir, appDir)
      // Les routes dynamiques ([slug]) sont couvertes par des assertions dédiées.
      .filter((r) => !r.includes("["))
      .filter((r) => !EXCLUDED_ROUTES.includes(r));

    for (const route of routes) {
      const expected = route === "/" ? BASE : `${BASE}${route}`;
      expect(urls, `route ${route} absente du sitemap`).toContain(expected);
    }
  });
});
