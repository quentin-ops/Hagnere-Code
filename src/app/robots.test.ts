import { afterEach, describe, expect, it, vi } from "vitest";
import robots from "./robots";

type Rule = {
  userAgent?: string | string[];
  allow?: string | string[];
  disallow?: string | string[];
};

const rulesOf = (result: ReturnType<typeof robots>): Rule[] =>
  (Array.isArray(result.rules) ? result.rules : [result.rules]) as Rule[];

const agentsOf = (rule: Rule): string[] =>
  Array.isArray(rule.userAgent)
    ? rule.userAgent
    : rule.userAgent
      ? [rule.userAgent]
      : [];

const ruleFor = (result: ReturnType<typeof robots>, agent: string) =>
  rulesOf(result).find((rule) => agentsOf(rule).includes(agent));

const asArray = (value: string | string[] | undefined): string[] =>
  Array.isArray(value) ? value : value ? [value] : [];

describe("robots.txt", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  const productionEnvs: Array<[string, string, string]> = [
    ["build production", "", "production"],
    ["déploiement Vercel production", "production", "preview"],
  ];

  for (const [label, vercelEnv, publicEnv] of productionEnvs) {
    describe(label, () => {
      const production = () => {
        vi.stubEnv("VERCEL_ENV", vercelEnv);
        vi.stubEnv("NEXT_PUBLIC_ENV", publicEnv);
        return robots();
      };

      it("publie le sitemap et ouvre le contenu public au groupe générique", () => {
        const result = production();
        expect(result.sitemap).toBe("https://hagnere-code.ai/sitemap.xml");

        const wildcard = ruleFor(result, "*");
        expect(wildcard, "groupe * absent").toBeDefined();
        expect(asArray(wildcard?.allow)).toContain("/");
        expect(asArray(wildcard?.disallow)).toContain("/api/");
      });

      /**
       * Un robot qui possède son propre groupe ignore entièrement le groupe
       * `*`. Chaque groupe déclaré doit donc répéter les mêmes exclusions,
       * sans quoi `/api/` deviendrait crawlable pour ces robots.
       */
      it("répète les exclusions dans chaque groupe déclaré", () => {
        const result = production();
        for (const rule of rulesOf(result)) {
          expect(
            asArray(rule.disallow),
            `groupe ${agentsOf(rule).join(", ")} : /api/ non exclu`,
          ).toContain("/api/");
          expect(asArray(rule.allow)).toContain("/");
        }
      });

      it("déclare explicitement les robots de citation et d'entraînement", () => {
        const result = production();
        // Robots de recherche : ce sont eux qui permettent une citation.
        for (const agent of [
          "OAI-SearchBot",
          "Claude-SearchBot",
          "PerplexityBot",
        ]) {
          expect(ruleFor(result, agent), `${agent} non déclaré`).toBeDefined();
        }
        // Collecteurs d'entraînement : déclarés séparément pour pouvoir être
        // restreints un jour sans toucher aux robots de citation.
        for (const agent of ["GPTBot", "ClaudeBot", "Google-Extended"]) {
          expect(ruleFor(result, agent), `${agent} non déclaré`).toBeDefined();
        }
      });

      it("sépare les robots de citation des collecteurs d'entraînement", () => {
        const result = production();
        const searchGroup = ruleFor(result, "OAI-SearchBot");
        const trainingGroup = ruleFor(result, "GPTBot");
        expect(searchGroup).not.toBe(trainingGroup);
        expect(agentsOf(searchGroup as Rule)).not.toContain("GPTBot");
        expect(agentsOf(trainingGroup as Rule)).not.toContain("OAI-SearchBot");
      });

      it("ne déclare jamais deux fois le même robot", () => {
        const declared = rulesOf(production()).flatMap(agentsOf);
        expect(new Set(declared).size).toBe(declared.length);
      });

      it("laisse Googlebot au groupe générique", () => {
        // Un groupe Googlebot dédié ferait ignorer le groupe `*` : inutile ici,
        // et source d'écarts silencieux entre les deux jeux de règles.
        expect(ruleFor(production(), "Googlebot")).toBeUndefined();
      });
    });
  }

  it("bloque tout crawl sur un build local ou de preview", () => {
    vi.stubEnv("NEXT_PUBLIC_ENV", "production");
    vi.stubEnv("VERCEL_ENV", "preview");

    expect(robots()).toEqual({
      rules: [{ userAgent: "*", disallow: "/" }],
    });
  });
});
