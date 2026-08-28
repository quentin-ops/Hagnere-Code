import { readFileSync } from "node:fs";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

/**
 * `trackLeadConversion` est le seul point du site qui envoie une conversion à
 * Google Ads. Rien ne le couvrait : ni la porte de consentement, ni la
 * déduplication, ni le fait qu'une cible absente doit faire sortir la fonction
 * au lieu d'inventer un `send_to`.
 *
 * Les identifiants employés ici sont des formes, pas des comptes.
 */

const ADS_ID = "AW-1234567890";
const LEAD_LABEL = "AbC-D_efg";

const sendBeacon = vi.fn(() => true);
const gtag = vi.fn();
const sessionStore = new Map<string, string>();

function stubWindow(options: { analytics: boolean; gtagPresent?: boolean }) {
  vi.stubGlobal("window", {
    location: { pathname: "/services/publicite-en-ligne" },
    navigator: { sendBeacon },
    localStorage: {
      getItem: () =>
        JSON.stringify({
          version: 2,
          necessary: true,
          analytics: options.analytics,
          categories: { necessary: true, analytics: options.analytics },
          ts: Date.now(),
        }),
      removeItem: () => undefined,
    },
    sessionStorage: {
      getItem: (key: string) => sessionStore.get(key) ?? null,
      setItem: (key: string, value: string) => {
        sessionStore.set(key, value);
      },
    },
    dispatchEvent: () => true,
    gtag: options.gtagPresent === false ? undefined : gtag,
  });
}

/**
 * `google-measurement` lit ses variables d'environnement au chargement du
 * module : chaque scénario doit repartir d'un import neuf.
 */
async function loadLeadConversion(env: Record<string, string | undefined>) {
  vi.resetModules();
  vi.stubEnv("NEXT_PUBLIC_COOKIE_BANNER", "1");
  vi.stubEnv("NEXT_PUBLIC_FUNNEL_ANALYTICS_ENABLED", "true");
  for (const [key, value] of Object.entries(env)) vi.stubEnv(key, value);
  return import("./lead-conversion");
}

beforeEach(() => {
  sendBeacon.mockClear();
  gtag.mockClear();
  sessionStore.clear();
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  vi.resetModules();
});

describe("trackLeadConversion — porte de consentement", () => {
  it("n'envoie rien tant que l'analytics n'est pas accepté", async () => {
    stubWindow({ analytics: false });
    const { trackLeadConversion } = await loadLeadConversion({
      NEXT_PUBLIC_GOOGLE_ADS_ID: ADS_ID,
      NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL: LEAD_LABEL,
    });

    trackLeadConversion("contact_form", "contact_form_submit_success");

    expect(sendBeacon).not.toHaveBeenCalled();
    expect(gtag).not.toHaveBeenCalled();
  });

  it("écrit la mesure first-party ET la conversion Ads après acceptation", async () => {
    stubWindow({ analytics: true });
    const { trackLeadConversion } = await loadLeadConversion({
      NEXT_PUBLIC_GOOGLE_ADS_ID: ADS_ID,
      NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL: LEAD_LABEL,
    });

    trackLeadConversion("contact_form", "contact_form_submit_success");

    expect(sendBeacon).toHaveBeenCalledOnce();
    expect(gtag).toHaveBeenCalledWith("event", "conversion", {
      send_to: `${ADS_ID}/${LEAD_LABEL}`,
      event_source: "contact_form",
    });
  });

  it("garde la mesure first-party quand aucun libellé de conversion n'existe", async () => {
    stubWindow({ analytics: true });
    const { trackLeadConversion } = await loadLeadConversion({
      NEXT_PUBLIC_GOOGLE_ADS_ID: ADS_ID,
      NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL: "",
    });

    trackLeadConversion("project_funnel", "pf:lead_confirmed");

    // Sans libellé, aucune cible : on n'invente pas de `send_to`.
    expect(sendBeacon).toHaveBeenCalledOnce();
    expect(gtag).not.toHaveBeenCalled();
  });
});

describe("trackLeadConversion — déduplication", () => {
  it("ne compte qu'une conversion par clé, sur la durée de l'onglet", async () => {
    stubWindow({ analytics: true });
    const { trackLeadConversion } = await loadLeadConversion({
      NEXT_PUBLIC_GOOGLE_ADS_ID: ADS_ID,
      NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL: LEAD_LABEL,
    });

    trackLeadConversion("project_funnel", "pf:lead_confirmed", {
      dedupeKey: "pf:converted",
    });
    trackLeadConversion("project_funnel", "pf:lead_confirmed", {
      dedupeKey: "pf:converted",
    });

    expect(gtag).toHaveBeenCalledOnce();
    expect(sessionStore.get("pf:converted")).toBe("1");
  });

  it("déduplique en mémoire sans rien écrire dans le navigateur", async () => {
    stubWindow({ analytics: true });
    const { trackLeadConversion } = await loadLeadConversion({
      NEXT_PUBLIC_GOOGLE_ADS_ID: ADS_ID,
      NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL: LEAD_LABEL,
    });

    trackLeadConversion("contact_form", "contact_form_submit_success", {
      dedupeKey: "contact_form:converted",
      dedupeScope: "document",
    });
    trackLeadConversion("contact_form", "contact_form_submit_success", {
      dedupeKey: "contact_form:converted",
      dedupeScope: "document",
    });

    expect(gtag).toHaveBeenCalledOnce();
    // Une clé de portée « document » ne doit apparaître dans AUCUN stockage :
    // sinon elle devrait figurer au tableau exhaustif de /legal/cookies.
    expect(sessionStore.size).toBe(0);
  });

  it("ne consomme pas la déduplication quand le consentement manque", async () => {
    stubWindow({ analytics: false });
    const { trackLeadConversion } = await loadLeadConversion({
      NEXT_PUBLIC_GOOGLE_ADS_ID: ADS_ID,
      NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL: LEAD_LABEL,
    });

    trackLeadConversion("contact_form", "contact_form_submit_success", {
      dedupeKey: "contact_form:converted",
      dedupeScope: "document",
    });
    expect(gtag).not.toHaveBeenCalled();

    // Le visiteur accepte ensuite : la conversion doit encore pouvoir partir.
    stubWindow({ analytics: true });
    trackLeadConversion("contact_form", "contact_form_submit_success", {
      dedupeKey: "contact_form:converted",
      dedupeScope: "document",
    });
    expect(gtag).toHaveBeenCalledOnce();
  });

  it("garde des clés distinctes pour le tunnel et le formulaire de contact", async () => {
    stubWindow({ analytics: true });
    const { trackLeadConversion } = await loadLeadConversion({
      NEXT_PUBLIC_GOOGLE_ADS_ID: ADS_ID,
      NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL: LEAD_LABEL,
    });

    trackLeadConversion("project_funnel", "pf:lead_confirmed", {
      dedupeKey: "pf:converted",
    });
    trackLeadConversion("contact_form", "contact_form_submit_success", {
      dedupeKey: "contact_form:converted",
      dedupeScope: "document",
    });

    // Deux prospects distincts restent deux conversions.
    expect(gtag).toHaveBeenCalledTimes(2);
  });

  it("mesure quand même si gtag n'est pas chargé", async () => {
    stubWindow({ analytics: true, gtagPresent: false });
    const { trackLeadConversion } = await loadLeadConversion({
      NEXT_PUBLIC_GOOGLE_ADS_ID: ADS_ID,
      NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL: LEAD_LABEL,
    });

    expect(() =>
      trackLeadConversion("contact_form", "contact_form_submit_success"),
    ).not.toThrow();
    expect(sendBeacon).toHaveBeenCalledOnce();
  });
});

describe("les deux chemins de conversion dédupliquent", () => {
  const read = (relative: string) =>
    readFileSync(join(process.cwd(), relative), "utf8");

  it("le tunnel et le formulaire du pied de page passent tous deux une clé", () => {
    // Deux fichiers voisins avaient deux politiques opposées pour le même type
    // d'événement : le tunnel dédupliquait, le formulaire non — un second envoi
    // comptait donc un second lead payant pour le même prospect.
    const tracker = read(
      "src/app/demarrer-un-projet/merci/ConversionTracker.tsx",
    );
    const footer = read("src/components/design-shared/SiteFooter.tsx");

    for (const [name, source] of [
      ["ConversionTracker", tracker],
      ["SiteFooter", footer],
    ] as const) {
      const call = source.slice(source.indexOf("trackLeadConversion("));
      expect(call, `${name} n'appelle pas trackLeadConversion`).not.toBe("");
      expect(
        call.slice(0, call.indexOf(");") + 2),
        `${name} compte une conversion sans clé de déduplication`,
      ).toContain("dedupeKey");
    }
  });
});
