/** @vitest-environment happy-dom */

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { act, useState } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY_NATIONAL,
  CONTACT_PHONE_E164,
} from "@/lib/contact-details";
import { MATH_CHALLENGE_TTL_MS } from "@/lib/math-challenge";
import {
  MathChallenge,
  MATH_CHALLENGE_EMPTY_MESSAGE,
  MATH_CHALLENGE_MIN_REFRESH_MS,
  MATH_CHALLENGE_REFRESH_MARGIN_MS,
  MATH_CHALLENGE_UNAVAILABLE_MESSAGE,
  MATH_CHALLENGE_WRONG_ANSWER_MESSAGE,
  getMathChallengeError,
  getMathChallengeRefreshDelay,
} from "./MathChallenge";
import { ProjectFunnel, RadioBlock } from "./ProjectFunnel";
// Le prédicat a quitté ProjectFunnel.tsx : ses deux clients (le tunnel et le
// formulaire du pied de page) partagent désormais le même module.
import { briefWasCaptured } from "./inquiry-response";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), prefetch: vi.fn() }),
}));

// happy-dom : import.meta.url est une URL http, on repart de la racine projet.
const funnelSource = readFileSync(
  join(process.cwd(), "src/components/project-funnel/ProjectFunnel.tsx"),
  "utf8",
);
const funnelStyles = readFileSync(
  join(process.cwd(), "src/components/project-funnel/project-funnel.css"),
  "utf8",
);
const homepageSource = readFileSync(
  join(process.cwd(), "src/components/homepage/body.ts"),
  "utf8",
);

beforeAll(() => {
  (
    globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT: boolean }
  ).IS_REACT_ACT_ENVIRONMENT = true;
});

let currentRoot: Root | null = null;
let container: HTMLDivElement | null = null;

afterEach(() => {
  if (currentRoot) {
    act(() => currentRoot?.unmount());
    currentRoot = null;
  }
  container = null;
  document.body.replaceChildren();
  vi.restoreAllMocks();
});

function mount(node: React.ReactNode): HTMLDivElement {
  container = document.createElement("div");
  document.body.append(container);
  currentRoot = createRoot(container);
  act(() => currentRoot?.render(node));
  return container;
}

describe("contrôle anti-robot — message honnête quand le défi ne charge pas", () => {
  it("distingue défi absent, champ vide et réponse fausse", () => {
    expect(getMathChallengeError(null)).toBe(MATH_CHALLENGE_UNAVAILABLE_MESSAGE);
    expect(
      getMathChallengeError({ a: 3, b: 4, token: "t", answer: "  " }),
    ).toBe(MATH_CHALLENGE_EMPTY_MESSAGE);
    expect(getMathChallengeError({ a: 3, b: 4, token: "t", answer: "8" })).toBe(
      MATH_CHALLENGE_WRONG_ANSWER_MESSAGE,
    );
    expect(
      getMathChallengeError({ a: 3, b: 4, token: "t", answer: " 7 " }),
    ).toBeNull();
  });

  it("n'accuse jamais le visiteur quand la question n'a pas pu être chargée", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() => Promise.reject(new Error("network down"))),
    );
    const onLoadErrorChange = vi.fn();

    let root: HTMLDivElement | null = null;
    await act(async () => {
      root = mount(
        <MathChallenge
          onChange={() => undefined}
          onLoadErrorChange={onLoadErrorChange}
          // Le message de l'hôte ne doit pas primer sur l'indisponibilité :
          // le champ est vide ET désactivé, personne n'a pu se tromper.
          error={MATH_CHALLENGE_WRONG_ANSWER_MESSAGE}
        />,
      );
    });

    const host = root as unknown as HTMLDivElement;
    const alert = host.querySelector('[role="alert"]');
    expect(alert?.textContent).toBe(MATH_CHALLENGE_UNAVAILABLE_MESSAGE);
    expect(alert?.textContent).not.toContain("incorrecte");
    expect(
      host.querySelector<HTMLInputElement>('input[name="mathChallengeAnswer"]')
        ?.disabled,
    ).toBe(true);
    expect(onLoadErrorChange).toHaveBeenCalledWith(true);
  });
});

describe("contrôle anti-robot — renouvellement adossé au TTL servi", () => {
  it("renouvelle une seule fois par équation avec le TTL de production", () => {
    const now = 1_000_000;
    const delay = getMathChallengeRefreshDelay(now + MATH_CHALLENGE_TTL_MS, now);
    // 15 min de TTL, marge de 5 min : la question est remplacée à 10 min.
    expect(delay).toBe(MATH_CHALLENGE_TTL_MS - MATH_CHALLENGE_REFRESH_MARGIN_MS);
    expect(delay).toBeGreaterThan(MATH_CHALLENGE_MIN_REFRESH_MS);
  });

  it("ne martèle pas l'API si le TTL serveur descend sous la marge", () => {
    const now = 1_000_000;
    // Marge figée à 5 min : un TTL d'une minute donnait un délai négatif,
    // rabattu sur le plancher, donc un appel par seconde à /api/math-challenge.
    for (const ttl of [60_000, 120_000, MATH_CHALLENGE_REFRESH_MARGIN_MS]) {
      const delay = getMathChallengeRefreshDelay(now + ttl, now);
      // Au moins deux tiers de la durée de vie : jamais plus de ~1,5 appel
      // par équation, quel que soit MATH_CHALLENGE_TTL_MS.
      expect(delay).toBeGreaterThanOrEqual((ttl * 2) / 3);
      expect(delay).toBeLessThan(ttl);
    }
  });

  it("garde un plancher quand le token est déjà expiré à la réception", () => {
    // Horloge client en avance : sans plancher, le setTimeout repartait à 0.
    expect(getMathChallengeRefreshDelay(1_000, 500_000)).toBe(
      MATH_CHALLENGE_MIN_REFRESH_MS,
    );
  });
});

describe("envoi du brief — un 200 ne vaut pas réception", () => {
  it("n'accepte le succès que si la route confirme `captured`", () => {
    expect(briefWasCaptured(true, { captured: true })).toBe(true);
    // Piège à robots : la route répond 200 `{ ok: true, captured: false }`.
    expect(briefWasCaptured(true, { captured: false })).toBe(false);
    // Ancienne réponse sans le champ : on ne suppose pas la capture.
    expect(briefWasCaptured(true, {})).toBe(false);
    expect(briefWasCaptured(false, { captured: true })).toBe(false);
  });

  it("ne purge le brouillon et ne redirige que derrière ce verrou", () => {
    expect(funnelSource).toContain(
      "mailOk = briefWasCaptured(mailRes.ok, mailJson)",
    );
    // La redirection /merci et la purge du brouillon vivent dans le seul
    // bloc `if (mailOk)`, jamais sur `mailRes.ok` nu.
    expect(funnelSource).not.toMatch(/mailOk\s*=\s*mailRes\.ok\s*;/);
    const successBlock = funnelSource.slice(
      funnelSource.indexOf("if (mailOk) {"),
    );
    const successBody = successBlock.slice(0, successBlock.indexOf("\n    }"));
    expect(successBody).toContain('router.push("/demarrer-un-projet/merci")');
    expect(successBody).toContain("disableDraftStorage()");
    expect(successBody).toContain('trackFunnelEvent("pf:submit_success"');
  });

  it("annonce l'échec d'envoi aux lecteurs d'écran", () => {
    // Sans role=alert, le bouton redevenait « Envoyer mon brief » sans
    // qu'aucune restitution ne signale l'échec.
    expect(funnelSource).toMatch(
      /className="pf-field-error"\s+role="alert"/,
    );
  });
});

describe("groupe de choix unique — contrat clavier du role=radiogroup", () => {
  function Harness({ initial = "" }: { initial?: string }) {
    const [value, setValue] = useState(initial);
    return (
      <RadioBlock
        title="Échéance visée"
        values={["Moins d'un mois", "1 à 3 mois", "Plus de 6 mois"]}
        value={value}
        onChange={setValue}
      />
    );
  }

  function options(host: HTMLElement): HTMLButtonElement[] {
    return Array.from(host.querySelectorAll<HTMLButtonElement>('[role="radio"]'));
  }

  function press(target: HTMLElement, key: string) {
    act(() => {
      target.dispatchEvent(
        new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true }),
      );
    });
  }

  it("n'expose qu'un seul point de tabulation dans le groupe", () => {
    const host = mount(<Harness initial="1 à 3 mois" />);
    const tabbable = options(host).filter((item) => item.tabIndex === 0);
    expect(options(host)).toHaveLength(3);
    expect(tabbable).toHaveLength(1);
    expect(tabbable[0]?.getAttribute("aria-checked")).toBe("true");
  });

  it("déplace la sélection et le focus aux flèches, Home et End", () => {
    const host = mount(<Harness />);

    press(options(host)[0]!, "ArrowDown");
    expect(options(host)[1]?.getAttribute("aria-checked")).toBe("true");
    expect(document.activeElement).toBe(options(host)[1]);

    press(options(host)[1]!, "ArrowUp");
    expect(options(host)[0]?.getAttribute("aria-checked")).toBe("true");

    press(options(host)[0]!, "End");
    expect(options(host)[2]?.getAttribute("aria-checked")).toBe("true");

    press(options(host)[2]!, "Home");
    expect(options(host)[0]?.getAttribute("aria-checked")).toBe("true");
    expect(document.activeElement).toBe(options(host)[0]);
  });
});

describe("tunnel monté — historique et focus d'étape", () => {
  it("marque l'entrée d'historique et revient à l'étape annoncée par Retour", () => {
    const host = mount(<ProjectFunnel />);

    expect(
      (window.history.state as { pfStep?: number } | null)?.pfStep,
    ).toBe(0);

    const heading = host.querySelector<HTMLHeadingElement>(".pf-step-heading");
    expect(heading?.textContent).toContain("Que souhaitez-vous construire");
    expect(heading?.tabIndex).toBe(-1);

    // Geste Retour du navigateur vers une entrée du tunnel.
    act(() => {
      window.dispatchEvent(
        new PopStateEvent("popstate", { state: { pfStep: 2 } }),
      );
    });

    const nextHeading = host.querySelector<HTMLHeadingElement>(".pf-step-heading");
    expect(nextHeading?.textContent).toContain("fonctionnalités");
    // Le focus suit l'étape au lieu de retomber sur <body>.
    expect(document.activeElement).toBe(nextHeading);
  });

  it("expose téléphone et e-mail directement dans la page", () => {
    const host = mount(<ProjectFunnel />);
    expect(
      host.querySelector(`a[href="tel:${CONTACT_PHONE_E164}"]`),
    ).not.toBeNull();
    expect(
      host.querySelector(`a[href="mailto:${CONTACT_EMAIL}"]`),
    ).not.toBeNull();
  });
});

describe("tunnel — familles de services alignées sur le reste du site", () => {
  /** Les trois familles telles que l'accueil les nomme, source de vérité. */
  function homepageFamilies(): string[] {
    return Array.from(
      homepageSource.matchAll(/class="svc-family-kicker">([^<]+)</g),
    ).map((match) => match[1].replace(/&amp;/g, "&").trim());
  }

  it("reprend mot pour mot les trois familles de l'accueil", () => {
    const expected = homepageFamilies();
    expect(expected).toEqual([
      "Construire",
      "Faire grandir",
      "Protéger & opérer",
    ]);

    const host = mount(<ProjectFunnel />);
    const rendered = Array.from(
      host.querySelectorAll<HTMLElement>(".pf-kind-group-meta b"),
    ).map((node) => node.textContent?.trim());

    // Une quatrième famille propre au tunnel (« Maintenir / auditer » face à
    // « Sécuriser ») donnait au visiteur une découpe d'offre différente de
    // celle qu'on venait de lui montrer sur le site.
    expect(rendered).toEqual(expected);
  });

  it("ne laisse aucun type de projet hors des trois familles", () => {
    const host = mount(<ProjectFunnel />);
    const groups = host.querySelectorAll(".pf-kind-group");
    expect(groups).toHaveLength(3);

    const grouped = host.querySelectorAll(".pf-kind-group-grid .pf-choice");
    // 12 services nommés ; « Je ne sais pas encore » vit hors grille.
    expect(grouped.length).toBeGreaterThan(0);
    expect(funnelSource).not.toMatch(/family:\s*"(Run|Trust)"/);
  });
});

describe("tunnel — issues de contact et repères de parcours", () => {
  it("publie le téléphone et l'e-mail déjà affichés sur le reste du site", () => {
    const host = mount(<ProjectFunnel />);
    expect(host.innerHTML).toContain(`tel:${CONTACT_PHONE_E164}`);
    expect(host.innerHTML).toContain(CONTACT_PHONE_DISPLAY_NATIONAL);
    expect(host.innerHTML).toContain(CONTACT_EMAIL);
    // Et jamais recopiées en dur : le tunnel est la page la plus proche de la
    // conversion, c'est celle qui doit suivre une bascule d'adresse ou de
    // ligne sans qu'on pense à la rouvrir.
    expect(funnelSource).not.toMatch(/tel:\+?\d{6,}/);
    expect(funnelSource).not.toMatch(/@hagnere-(patrimoine\.fr|code\.ai)/);
    // Voie de sortie permanente à côté du calcul anti-robot.
    expect(funnelSource).toContain("pf-captcha-escape");
  });

  it("garde le geste Retour et prévient avant de perdre une saisie", () => {
    expect(funnelSource).toContain('addEventListener("popstate"');
    expect(funnelSource).toContain('addEventListener("beforeunload"');
    expect(funnelSource).toContain("pfStep");
  });

  it("déplace le focus sur le titre d'étape au lieu de relire la carte", () => {
    expect(funnelSource).toContain("stepHeadingRef.current?.focus()");
    expect(funnelSource).toMatch(
      /<section className="pf-main-card" id="brief-form">/,
    );
    expect(funnelSource).not.toMatch(/className="pf-main-card"[^>]*aria-live/);
  });

  it("vise la carte du formulaire, pas la carte de progression", () => {
    expect(funnelSource).toContain('href="#brief-form"');
  });

  it("ne journalise pas les diagnostics micro en production", () => {
    const bareLogs = funnelSource.match(/(?<!\/\/[^\n]*)\bconsole\.log\(/g) || [];
    // Seul le passe-plat debugLog, déjà conditionné à NODE_ENV, subsiste.
    expect(bareLogs).toHaveLength(1);
    expect(funnelSource).toContain('process.env.NODE_ENV === "production"');
  });
});

describe("feuille de style du tunnel", () => {
  it("empêche la grille des types de projet de déborder sur petit écran", () => {
    expect(funnelStyles).toContain(
      "repeat(auto-fill, minmax(min(260px, 100%), 1fr))",
    );
  });

  it("porte les contrôles du tunnel à 44 px au doigt", () => {
    const coarse = funnelStyles.slice(
      funnelStyles.indexOf("@media (pointer: coarse)"),
    );
    expect(coarse).toContain("@media (pointer: coarse)");
    expect(coarse).toMatch(/\.pf-chip\s*{[^}]*min-height:\s*44px/);
    expect(coarse).toMatch(/\.pf-root input\s*{[^}]*min-height:\s*4[46]px/);
  });

  it("garde la pastille téléphone visible en mobile", () => {
    const mobile = funnelStyles.slice(
      funnelStyles.indexOf("@media (max-width: 760px)"),
    );
    expect(mobile).not.toMatch(/\.pf-top-phone\s*{[^}]*display:\s*none/);
    expect(funnelStyles).toMatch(/\.pf-top-phone\s*{[^}]*min-height:\s*44px/);
  });
});
