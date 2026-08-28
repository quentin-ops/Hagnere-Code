import { describe, expect, it } from "vitest";
import nextConfig from "../../next.config";

/**
 * En-têtes de sécurité : ce que la revue humaine oublie de vérifier après
 * une modification de next.config.ts.
 */
async function siteHeaders(): Promise<Record<string, string>> {
  const groups = (await nextConfig.headers?.()) ?? [];
  const site = groups.find((group) => group.source === "/:path*");
  expect(site, "Le groupe d'en-têtes global /:path* a disparu.").toBeDefined();
  return Object.fromEntries(
    (site?.headers ?? []).map((header) => [header.key, header.value]),
  );
}

describe("en-têtes de sécurité du site", () => {
  it("conserve les protections de base", async () => {
    const headers = await siteHeaders();

    expect(headers["X-Content-Type-Options"]).toBe("nosniff");
    expect(headers["Strict-Transport-Security"]).toContain("includeSubDomains");
    expect(headers["Referrer-Policy"]).toBe("strict-origin-when-cross-origin");
    expect(headers["Permissions-Policy"]).toContain("microphone=(self)");
  });

  it("isole le document et ses ressources des sites tiers", async () => {
    const headers = await siteHeaders();

    expect(headers["Cross-Origin-Opener-Policy"]).toBe("same-origin");
    expect(headers["Cross-Origin-Resource-Policy"]).toBe("same-origin");
  });

  it("n'autorise dans connect-src que des destinations appelées par le navigateur", async () => {
    const headers = await siteHeaders();
    const csp = headers["Content-Security-Policy"];

    // Groq et Recherche d'entreprises ne sont contactés que côté serveur,
    // via /api/transcribe et /api/sirene : les autoriser côté navigateur
    // n'élargirait que les destinations d'exfiltration possibles.
    expect(csp).not.toContain("https://api.groq.com");
    expect(csp).not.toContain("https://recherche-entreprises.api.gouv.fr");
    expect(csp).toContain("connect-src 'self'");
  });

  it("garde les verrous structurants de la CSP", async () => {
    const csp = (await siteHeaders())["Content-Security-Policy"];

    expect(csp).toContain("object-src 'none'");
    expect(csp).toContain("base-uri 'self'");
    expect(csp).toContain("form-action 'self'");
    expect(csp).toContain("frame-ancestors 'self'");
    expect(csp).toContain("upgrade-insecure-requests");
  });

  it("expose un point de collecte des violations, cohérent avec l'en-tête Reporting-Endpoints", async () => {
    const headers = await siteHeaders();
    const csp = headers["Content-Security-Policy"];

    // Sans report-to, un blocage CSP — celui du tag de conversion, par
    // exemple — resterait invisible côté serveur.
    expect(csp).toContain("report-to csp-endpoint");
    expect(csp).toContain("report-uri /api/csp-report");
    expect(headers["Reporting-Endpoints"]).toMatch(
      /^csp-endpoint="https?:\/\/[^"]+\/api\/csp-report"$/,
    );
  });

  it("n'ouvre 'unsafe-eval' que hors production", async () => {
    const csp = (await siteHeaders())["Content-Security-Policy"];

    if (process.env.NODE_ENV === "production") {
      expect(csp).not.toContain("'unsafe-eval'");
    }
  });
});
