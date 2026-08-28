import type { NextConfig } from "next";
import { afterEach, describe, expect, it, vi } from "vitest";

/**
 * Contrat de la politique que /api/csp-report est chargé de surveiller.
 *
 * Ce test vit à côté du point de collecte des violations parce que c'est lui
 * qui recevra les blocages décrits ici : un tag de conversion refusé par la CSP
 * ne produit aucune erreur visible côté visiteur, seulement un rapport. Autant
 * empêcher la régression avant qu'elle ne devienne un rapport.
 *
 * Deux invariants opposés y sont figés :
 *  - tant qu'aucun identifiant de mesure n'est configuré, AUCUN domaine Google
 *    n'apparaît dans la politique (le site reste aussi fermé qu'avant) ;
 *  - dès qu'un identifiant est posé, les domaines nécessaires à gtag.js sont
 *    ouverts — et rien d'autre : ni joker de schéma, ni 'unsafe-eval'.
 */

type HeaderGroup = { source: string; headers: { key: string; value: string }[] };

async function headerGroups(
  env: Record<string, string | undefined>,
): Promise<HeaderGroup[]> {
  vi.resetModules();
  for (const [key, value] of Object.entries(env)) {
    vi.stubEnv(key, value);
  }
  const loaded = (await import("../../../../next.config")) as {
    default: NextConfig;
  };
  return ((await loaded.default.headers?.()) ?? []) as HeaderGroup[];
}

async function contentSecurityPolicy(
  env: Record<string, string | undefined>,
): Promise<string> {
  const groups = await headerGroups(env);
  const site = groups.find((group) => group.source === "/:path*");
  const csp = site?.headers.find(
    (header) => header.key === "Content-Security-Policy",
  )?.value;
  expect(csp, "La CSP du groupe global a disparu.").toBeDefined();
  return csp as string;
}

function directive(csp: string, name: string): string[] {
  const found = csp
    .split(";")
    .map((entry) => entry.trim())
    .find((entry) => entry === name || entry.startsWith(`${name} `));
  expect(found, `Directive ${name} absente de la CSP.`).toBeDefined();
  return (found as string).split(/\s+/).slice(1);
}

const WITHOUT_MEASUREMENT = {
  NEXT_PUBLIC_GOOGLE_ADS_ID: undefined,
  NEXT_PUBLIC_GA4_ID: undefined,
};
const WITH_ADS = {
  NEXT_PUBLIC_GOOGLE_ADS_ID: "AW-1234567890",
  NEXT_PUBLIC_GA4_ID: undefined,
};

afterEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
});

describe("CSP et mesure Google", () => {
  it("n'ouvre aucun domaine Google tant qu'aucun identifiant n'est configuré", async () => {
    const csp = await contentSecurityPolicy(WITHOUT_MEASUREMENT);

    expect(csp).not.toContain("google");
    expect(csp).not.toContain("doubleclick");
  });

  it("ouvre gtag.js dès qu'un identifiant Ads est posé", async () => {
    const csp = await contentSecurityPolicy(WITH_ADS);

    // Sans ces trois familles, le tag est bloqué SILENCIEUSEMENT : le script ne
    // se charge pas, le hit de conversion ne part pas, et le Smart Bidding
    // optimise sur des données vides.
    expect(directive(csp, "script-src")).toContain(
      "https://www.googletagmanager.com",
    );
    for (const host of [
      "https://www.google-analytics.com",
      "https://*.analytics.google.com",
      "https://*.googletagmanager.com",
      "https://googleads.g.doubleclick.net",
    ]) {
      expect(directive(csp, "connect-src")).toContain(host);
    }
    for (const host of [
      "https://www.google.com",
      "https://www.google.fr",
      "https://googleads.g.doubleclick.net",
    ]) {
      expect(directive(csp, "img-src")).toContain(host);
    }
  });

  it("n'élargit la politique qu'avec des hôtes Google explicites", async () => {
    const closed = await contentSecurityPolicy(WITHOUT_MEASUREMENT);
    const opened = await contentSecurityPolicy(WITH_ADS);

    for (const name of ["script-src", "connect-src", "img-src"]) {
      const before = new Set(directive(closed, name));
      const added = directive(opened, name).filter((source) => !before.has(source));
      expect(added.length, `${name} n'a rien gagné avec la mesure.`).toBeGreaterThan(0);
      for (const source of added) {
        // Un joker de schéma (`https:`) ou un `*` nu autoriserait n'importe
        // quelle destination : la mesure ne justifie que des hôtes nommés.
        expect(
          /^https:\/\/(?:\*\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)+$/.test(source),
          `${name} ouvre une source non nominative : ${source}`,
        ).toBe(true);
        // `googleadservices` a été ajouté : c'est l'hôte que gtag.js appelle
        // pour `gtag('event','conversion',{send_to:'AW-…/label'})`
        // (/pagead/conversion/<id>/), et la liste précédente l'excluait — donc
        // ce test INTERDISAIT d'ajouter à la CSP un hôte nécessaire à la
        // mesure. Le contrat doit refléter ce que gtag appelle réellement, pas
        // l'inverse ; il continue de rejeter tout hôte non Google.
        //
        // RESTE À FAIRE, hors de ce fichier : ajouter
        // `https://www.googleadservices.com` à `googleConnectSources` ET à
        // `googleImageSources` dans next.config.ts. Tant que ce n'est pas fait,
        // le hit de conversion est bloqué SILENCIEUSEMENT — aucune erreur
        // visiteur, seulement un rapport sur /api/csp-report.
        expect(
          /(?:^|\.)(?:google|googletagmanager|google-analytics|googleadservices|doubleclick)\./.test(
            source.replace("https://", ""),
          ) || source.endsWith(".google.com"),
          `${name} ouvre un hôte étranger à la mesure Google : ${source}`,
        ).toBe(true);
      }
    }
  });

  it("n'autorise aucun hôte que le code n'appelle jamais", async () => {
    const csp = await contentSecurityPolicy(WITH_ADS);

    // R2 était autorisé dans img-src et connect-src sans qu'aucun fichier de
    // src/ ne l'appelle : une autorisation inutilisée n'ajoute qu'une
    // destination d'exfiltration et un prestataire à déclarer. La réintroduire
    // suppose un usage réel ET la déclaration du destinataire.
    expect(csp).not.toContain("r2.cloudflarestorage.com");
  });
});

describe("cache des actifs statiques", () => {
  const CACHE_VALUE = "public, max-age=604800, stale-while-revalidate=86400";

  it("pose une politique de cache sur les répertoires stables de public/", async () => {
    const groups = await headerGroups(WITHOUT_MEASUREMENT);

    for (const source of ["/logos/:path*", "/team/:path*", "/images/:path*"]) {
      const group = groups.find((entry) => entry.source === source);
      expect(group, `Aucun en-tête déclaré pour ${source}.`).toBeDefined();
      expect(
        group?.headers.find((header) => header.key === "Cache-Control")?.value,
      ).toBe(CACHE_VALUE);
    }
  });

  it("ne pose jamais ce cache long sur un préfixe partagé avec des pages", async () => {
    const groups = await headerGroups(WITHOUT_MEASUREMENT);
    const cached = groups
      .filter((group) =>
        group.headers.some((header) => header.key === "Cache-Control"),
      )
      .map((group) => group.source);

    // /ressources/<kit> est une PAGE : un cache d'une semaine sur ce préfixe
    // figerait du HTML éditorial. Les fichiers téléchargeables reçoivent le
    // même en-tête, mais par leur chemin exact.
    expect(cached).not.toContain("/ressources/:path*");
    expect(cached).not.toContain("/:path*");
    expect(
      cached.some((source) => source.endsWith(".zip")),
      "Les téléchargements ne reçoivent aucune politique de cache.",
    ).toBe(true);
  });

  it("n'annonce pas immutable tant que les noms de fichiers ne sont pas versionnés", async () => {
    const groups = await headerGroups(WITHOUT_MEASUREMENT);

    for (const group of groups) {
      for (const header of group.headers) {
        if (header.key !== "Cache-Control") continue;
        expect(header.value, `${group.source} fige un actif renommable.`).not.toContain(
          "immutable",
        );
      }
    }
  });
});
