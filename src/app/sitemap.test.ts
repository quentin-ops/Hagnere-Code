/**
 * Smoke test du sitemap : on s'assure qu'il liste bien les routes critiques
 * pour le SEO et n'inclut pas les routes redirigées (404 SEO).
 */
import { describe, it, expect } from "vitest";
import sitemap from "./sitemap";

describe("sitemap", () => {
  const map = sitemap();
  const urls = map.map((e) => e.url);

  it("inclut la home avec priority max", () => {
    const home = map.find((e) => e.url === "https://hagnere-code.fr/");
    expect(home).toBeDefined();
    expect(home?.priority).toBe(1.0);
  });

  it("inclut les 10 services", () => {
    const services = urls.filter((u) => u.includes("/services/"));
    expect(services.length).toBe(10);
  });

  it("inclut les 4 case studies", () => {
    const cases = urls.filter((u) => u.includes("/realisations/"));
    expect(cases.length).toBe(4);
  });

  it("inclut les pages corporate", () => {
    expect(urls).toContain("https://hagnere-code.fr/services");
    expect(urls).toContain("https://hagnere-code.fr/methode");
    expect(urls).toContain("https://hagnere-code.fr/tarifs");
    expect(urls).toContain("https://hagnere-code.fr/realisations");
    expect(urls).toContain("https://hagnere-code.fr/equipe");
    expect(urls).toContain("https://hagnere-code.fr/contact");
    expect(urls).toContain("https://hagnere-code.fr/rendez-vous");
    expect(urls).toContain("https://hagnere-code.fr/demarrer-un-projet");
  });

  it("exclut les routes redirigées (estimer-mon-projet, blog, outils, guide)", () => {
    expect(urls).not.toContain("https://hagnere-code.fr/outils/estimer-mon-projet");
    expect(urls).not.toContain("https://hagnere-code.fr/blog");
    expect(urls).not.toContain("https://hagnere-code.fr/outils");
    expect(urls).not.toContain("https://hagnere-code.fr/guide");
  });

  it("inclut les pages légales", () => {
    expect(urls).toContain("https://hagnere-code.fr/legal/mentions");
    expect(urls).toContain("https://hagnere-code.fr/legal/cgv");
    expect(urls).toContain("https://hagnere-code.fr/legal/confidentialite");
    expect(urls).toContain("https://hagnere-code.fr/legal/cookies");
    expect(urls).toContain("https://hagnere-code.fr/legal/accessibilite");
  });

  it("toutes les URLs sont absolues HTTPS", () => {
    for (const url of urls) {
      expect(url).toMatch(/^https:\/\/hagnere-code\.fr/);
    }
  });

  it("toutes les entrées ont un lastModified et une priority", () => {
    for (const e of map) {
      expect(e.lastModified).toBeDefined();
      expect(e.priority).toBeDefined();
      expect(e.priority).toBeGreaterThan(0);
      expect(e.priority).toBeLessThanOrEqual(1);
    }
  });
});
