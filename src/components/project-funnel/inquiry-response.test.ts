import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

import {
  briefWasCaptured,
  PROJECT_INQUIRY_TIMEOUT_MS,
  PROJECT_INQUIRY_TIMEOUT_SECONDS,
} from "./inquiry-response";

const read = (relative: string) =>
  readFileSync(join(process.cwd(), relative), "utf8");

const FUNNEL_SOURCE = read("src/components/project-funnel/ProjectFunnel.tsx");
const FOOTER_SOURCE = read("src/components/design-shared/SiteFooter.tsx");

describe("briefWasCaptured", () => {
  it("n'accepte le succès que si la route confirme `captured`", () => {
    expect(briefWasCaptured(true, { captured: true })).toBe(true);
    expect(briefWasCaptured(true, { captured: false })).toBe(false);
    // Corps illisible ou tronqué : `res.json()` retombe sur `{}`. Sans champ,
    // rien ne prouve l'enregistrement.
    expect(briefWasCaptured(true, {})).toBe(false);
    expect(briefWasCaptured(false, { captured: true })).toBe(false);
  });
});

describe("les deux clients de /api/project-inquiry lisent la même réponse", () => {
  /**
   * Le tunnel exigeait `captured === true` ; le pied de page testait l'inverse
   * (`json.captured === false`), donc une réponse sans le champ y valait
   * SUCCÈS : le formulaire affichait « Message bien reçu », comptait une
   * conversion et se remettait à zéro — la saisie du prospect était détruite
   * alors que rien n'avait été enregistré.
   */
  it("passent tous deux par le prédicat partagé", () => {
    expect(FUNNEL_SOURCE).toMatch(/from "\.\/inquiry-response"/);
    expect(FOOTER_SOURCE).toMatch(
      /from "@\/components\/project-funnel\/inquiry-response"/,
    );
    expect(FUNNEL_SOURCE).toContain(
      "mailOk = briefWasCaptured(mailRes.ok, mailJson)",
    );
    expect(FOOTER_SOURCE).toContain("if (!briefWasCaptured(res.ok, json))");
  });

  it("n'autorise plus aucune branche pilotée par `captured === false` seul", () => {
    // Le prédicat inverse ne doit plus piloter aucune condition : la mention
    // qui subsiste dans les commentaires explique précisément pourquoi.
    for (const [name, source] of [
      ["ProjectFunnel", FUNNEL_SOURCE],
      ["SiteFooter", FOOTER_SOURCE],
    ] as const) {
      expect(source, name).not.toMatch(
        /if\s*\(\s*(?:json|mailJson)\.captured\s*===\s*false\s*\)/,
      );
    }
  });

  it("vide le champ piège avant de rendre la main sur un refus", () => {
    // La route justifie son 200 `{ captured: false }` par un faux positif
    // « rattrapable ». Il ne l'était pas : le champ piège gardait la valeur
    // refusée, et chaque nouvelle tentative retombait sur le même refus.
    expect(FOOTER_SOURCE).toContain('input[name="honeypot"]');
    expect(FOOTER_SOURCE).toContain('honeypot.value = ""');
    expect(FUNNEL_SOURCE).toContain('patch("honeypot", "")');
  });
});

describe("délai maximal d'envoi", () => {
  it("borne les deux `fetch` avec la même valeur", () => {
    // Sans délai, le bouton du pied de page — réellement `disabled` pendant
    // l'envoi — restait bloqué sur « Envoi en cours… » sans issue.
    for (const [name, source] of [
      ["ProjectFunnel", FUNNEL_SOURCE],
      ["SiteFooter", FOOTER_SOURCE],
    ] as const) {
      expect(source, name).toContain(
        "AbortSignal.timeout(PROJECT_INQUIRY_TIMEOUT_MS)",
      );
      // L'interruption doit produire un message distinct qui rend la main.
      expect(source, name).toContain("isProviderTimeoutError");
      expect(source, name).toContain("PROJECT_INQUIRY_TIMEOUT_SECONDS");
    }
  });

  it("annonce au visiteur le délai réellement appliqué", () => {
    expect(PROJECT_INQUIRY_TIMEOUT_SECONDS).toBe(
      PROJECT_INQUIRY_TIMEOUT_MS / 1000,
    );
    // Un délai trop court couperait des envois qui aboutissent ; un délai
    // illimité était le défaut d'origine.
    expect(PROJECT_INQUIRY_TIMEOUT_MS).toBeGreaterThanOrEqual(10_000);
    expect(PROJECT_INQUIRY_TIMEOUT_MS).toBeLessThanOrEqual(60_000);
  });
});
