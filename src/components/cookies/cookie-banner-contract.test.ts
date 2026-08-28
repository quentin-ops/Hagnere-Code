import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

function read(relativePath: string): string {
  return readFileSync(new URL(relativePath, import.meta.url), "utf8");
}

const css = read("./cookie-banner.css");
const banner = read("./CookieBanner.tsx");

/** Classes `.hc-cb-*` définies par la feuille de style. */
const declaredClasses = new Set(
  [...css.matchAll(/\.(hc-cb-[a-z0-9-]+)/g)].map((match) => match[1]),
);

/** Classes `.hc-cb-*` réellement posées par le composant. */
const appliedClasses = new Set(
  [...banner.matchAll(/className="([^"]*)"/g)]
    .flatMap((match) => match[1].split(/\s+/))
    .filter((token) => token.startsWith("hc-cb-")),
);

describe("bannière cookies — feuille de style et composant", () => {
  it("extrait bien les deux inventaires", () => {
    // Garde-fou : si l'une des deux extractions casse, les contrôles suivants
    // passeraient à vide au lieu de détecter quoi que ce soit.
    expect(declaredClasses.size).toBeGreaterThan(10);
    expect(appliedClasses.size).toBeGreaterThan(10);
  });

  it("ne définit aucune classe que la bannière n'applique jamais", () => {
    // La bannière est le seul consommateur de cette feuille : une règle que
    // personne ne pose est du poids mort expédié à chaque visiteur, et elle
    // laisse croire à une variante de bouton qui n'existe pas.
    const orphaned = [...declaredClasses].filter(
      (className) => !appliedClasses.has(className),
    );
    expect(
      orphaned,
      `Règles CSS sans consommateur dans CookieBanner.tsx : ${orphaned.join(", ")}`,
    ).toEqual([]);
  });

  it("définit chaque classe que la bannière applique", () => {
    // L'inverse casse le rendu : un bouton sans style reste cliquable mais
    // perd la symétrie « refuser » / « accepter » exigée par la CNIL.
    const undefinedClasses = [...appliedClasses].filter(
      (className) => !declaredClasses.has(className),
    );
    expect(
      undefinedClasses,
      `Classes posées par la bannière et absentes de cookie-banner.css : ${undefinedClasses.join(", ")}`,
    ).toEqual([]);
  });
});

/**
 * La condition d'affichage de la bannière a une seule source :
 * `isCookieBannerEnabled()`. Elle était recopiée dans `layout.tsx`, et c'est la
 * copie qui décidait du montage réel — un site pouvait donc autoriser la mesure
 * sans jamais afficher de bannière, ou l'inverse, sans qu'aucun test ne le voie.
 */
describe("condition d'affichage de la bannière", () => {
  const layout = readFileSync(
    new URL("../../app/layout.tsx", import.meta.url),
    "utf8",
  );

  it("est lue depuis la source unique, jamais recopiée dans le layout", () => {
    expect(layout).toContain('from "@/lib/cookie-consent"');
    expect(layout).toContain("isCookieBannerEnabled()");
    expect(layout).not.toMatch(/NEXT_PUBLIC_COOKIE_BANNER\s*===/);
  });

  it("monte la bannière derrière cette condition", () => {
    expect(layout).toMatch(/cookieBannerEnabled \? <CookieBanner \/> : null/);
  });
});
