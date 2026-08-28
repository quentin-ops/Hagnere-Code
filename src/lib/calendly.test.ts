import { describe, expect, it } from "vitest";
import { DEFAULT_CALENDLY_URL, resolveCalendlyUrl } from "./calendly";

describe("Calendly URL configuration", () => {
  it("uses the documented fallback when no valid value is provided", () => {
    expect(resolveCalendlyUrl()).toBe(DEFAULT_CALENDLY_URL);
    expect(resolveCalendlyUrl("javascript:alert(1)")).toBe(DEFAULT_CALENDLY_URL);
    expect(resolveCalendlyUrl("https://example.com/rdv")).toBe(
      DEFAULT_CALENDLY_URL,
    );
  });

  it("laisse une organisation Hagnéré Code remplacer le repli du groupe", () => {
    // Le repli est hébergé par l'organisation Calendly du groupe : la bascule
    // vers un compte au nom de Hagnéré Code doit rester un simple changement
    // de variable d'environnement, sans modification de code.
    const dedicated = "https://calendly.com/hagnere-code/entretien-de-decouverte";

    expect(resolveCalendlyUrl(dedicated)).toBe(dedicated);
    expect(resolveCalendlyUrl(dedicated)).not.toBe(DEFAULT_CALENDLY_URL);
  });

  it("réserve bien un créneau Hagnéré Code tant que le repli est utilisé", () => {
    // Tant que le compte dédié n'existe pas, le lien doit au moins pointer sur
    // l'événement de découverte de Hagnéré Code, jamais sur un créneau générique
    // d'une autre société du groupe.
    expect(DEFAULT_CALENDLY_URL).toContain("hagnere-code");
    expect(DEFAULT_CALENDLY_URL.startsWith("https://calendly.com/")).toBe(true);
  });

  it("accepts only secure Calendly URLs and strips fragments", () => {
    expect(resolveCalendlyUrl("https://calendly.com/acme/discovery#x")).toBe(
      "https://calendly.com/acme/discovery",
    );
    expect(resolveCalendlyUrl("https://team.calendly.com/acme/discovery/")).toBe(
      "https://team.calendly.com/acme/discovery",
    );
  });
});
