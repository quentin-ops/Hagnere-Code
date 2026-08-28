/** @vitest-environment happy-dom */

import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

import { COOKIE_CONSENT_STORAGE_KEY } from "@/lib/cookie-consent";

/**
 * Ce composant charge un script tiers et pose des signaux de consentement
 * publicitaire. Rien ne le couvrait : seule la CSP avait son contrat, ce qui
 * vérifiait la politique réseau mais pas la porte de consentement.
 *
 * `next/script` est remplacé par une balise inerte : le sujet du test est la
 * porte de consentement et le contenu réellement injecté, pas la stratégie de
 * chargement de Next.
 */
vi.mock("next/script", () => ({
  default: ({
    id,
    src,
    children,
  }: {
    id?: string;
    src?: string;
    children?: string;
  }) =>
    src ? (
      <script data-id={id} data-src={src} />
    ) : (
      <script data-id={id} dangerouslySetInnerHTML={{ __html: children ?? "" }} />
    ),
}));

const ADS_ID = "AW-1234567890";
const GA4_ID = "G-ABCDEF1234";

function storeConsent(analytics: boolean, ageMs = 0) {
  window.localStorage.setItem(
    COOKIE_CONSENT_STORAGE_KEY,
    JSON.stringify({
      version: 2,
      necessary: true,
      analytics,
      categories: { necessary: true, analytics },
      ts: Date.now() - ageMs,
    }),
  );
}

/** Le module de configuration lit ses variables au chargement. */
async function loadComponent(env: Record<string, string | undefined>) {
  vi.resetModules();
  vi.stubEnv("NEXT_PUBLIC_COOKIE_BANNER", "1");
  for (const [key, value] of Object.entries(env)) vi.stubEnv(key, value);
  const loaded = await import("./GoogleMeasurement");
  return loaded.GoogleMeasurement;
}

beforeAll(() => {
  (
    globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT: boolean }
  ).IS_REACT_ACT_ENVIRONMENT = true;
});

let currentRoot: Root | null = null;

function mount(node: React.ReactNode): HTMLDivElement {
  const container = document.createElement("div");
  document.body.append(container);
  currentRoot = createRoot(container);
  act(() => currentRoot?.render(node));
  return container;
}

const scripts = (host: HTMLElement) =>
  Array.from(host.querySelectorAll("script"));

beforeEach(() => {
  window.localStorage.clear();
});

afterEach(() => {
  if (currentRoot) {
    act(() => currentRoot?.unmount());
    currentRoot = null;
  }
  document.body.replaceChildren();
  vi.unstubAllEnvs();
  vi.resetModules();
});

describe("GoogleMeasurement — porte de consentement", () => {
  it("n'injecte rien tant qu'aucun identifiant n'est configuré", async () => {
    storeConsent(true);
    const GoogleMeasurement = await loadComponent({
      NEXT_PUBLIC_GOOGLE_ADS_ID: undefined,
      NEXT_PUBLIC_GA4_ID: undefined,
    });

    expect(scripts(mount(<GoogleMeasurement />))).toHaveLength(0);
  });

  it("n'injecte rien avec un identifiant malformé", async () => {
    storeConsent(true);
    const GoogleMeasurement = await loadComponent({
      NEXT_PUBLIC_GOOGLE_ADS_ID: "AW-",
      NEXT_PUBLIC_GA4_ID: "pas-un-flux",
    });

    expect(scripts(mount(<GoogleMeasurement />))).toHaveLength(0);
  });

  it("n'injecte rien tant que l'analytics n'est pas accepté", async () => {
    const GoogleMeasurement = await loadComponent({
      NEXT_PUBLIC_GOOGLE_ADS_ID: ADS_ID,
    });

    // Aucun choix enregistré.
    expect(scripts(mount(<GoogleMeasurement />))).toHaveLength(0);

    act(() => currentRoot?.unmount());
    currentRoot = null;
    // Choix explicitement négatif.
    storeConsent(false);
    expect(scripts(mount(<GoogleMeasurement />))).toHaveLength(0);
  });

  it("charge gtag.js une fois le consentement analytics donné", async () => {
    storeConsent(true);
    const GoogleMeasurement = await loadComponent({
      NEXT_PUBLIC_GOOGLE_ADS_ID: ADS_ID,
      NEXT_PUBLIC_GA4_ID: GA4_ID,
    });

    const found = scripts(mount(<GoogleMeasurement />));
    const src = found.find((script) => script.dataset.src)?.dataset.src ?? "";
    // gtag.js est chargé avec le PREMIER identifiant : GA4 avant Ads.
    expect(src).toBe(
      `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`,
    );

    const inline = found.map((script) => script.innerHTML).join("\n");
    expect(inline).toContain(`gtag('config', "${GA4_ID}"`);
    expect(inline).toContain(`gtag('config', "${ADS_ID}"`);
  });

  it("pose les signaux Consent Mode refusés par défaut avant de les accorder", async () => {
    storeConsent(true);
    const GoogleMeasurement = await loadComponent({
      NEXT_PUBLIC_GOOGLE_ADS_ID: ADS_ID,
    });

    const inline = scripts(mount(<GoogleMeasurement />))
      .map((script) => script.innerHTML)
      .join("\n");

    const defaultIndex = inline.indexOf("gtag('consent', 'default'");
    const updateIndex = inline.indexOf("gtag('consent', 'update'");
    expect(defaultIndex).toBeGreaterThan(-1);
    // L'ordre est le contrat du Consent Mode : un `update` posé avant le
    // `default` laisse partir des hits sans état de consentement déclaré.
    expect(updateIndex).toBeGreaterThan(defaultIndex);

    const byDefault = inline.slice(defaultIndex, updateIndex);
    for (const signal of [
      "ad_storage",
      "ad_user_data",
      "ad_personalization",
      "analytics_storage",
    ]) {
      expect(byDefault).toContain(`${signal}: 'denied'`);
    }
  });

  /**
   * Le site ne présente aujourd'hui qu'une seule case facultative
   * (« analytics ») : les signaux publicitaires suivent donc ce choix unique.
   * Ce test fige le seul invariant réellement arbitré — AUCUN signal accordé
   * sans choix positif. Le jour où une catégorie « publicité » distincte est
   * ouverte dans la bannière et sur /legal/cookies, c'est ici qu'il faudra
   * exiger que `ad_storage` ne suive plus qu'elle.
   */
  it("n'accorde aucun signal publicitaire sans choix positif", async () => {
    const GoogleMeasurement = await loadComponent({
      NEXT_PUBLIC_GOOGLE_ADS_ID: ADS_ID,
    });

    storeConsent(false);
    const refused = mount(<GoogleMeasurement />).innerHTML;
    expect(refused).not.toContain("granted");

    act(() => currentRoot?.unmount());
    currentRoot = null;
    storeConsent(true);
    const accepted = mount(<GoogleMeasurement />).innerHTML;
    expect(accepted).toContain("ad_storage: 'granted'");
  });
});

describe("GoogleMeasurement — retrait du consentement", () => {
  it("retire gtag.js dès que le choix stocké est effacé, sans rechargement", async () => {
    storeConsent(true);
    const GoogleMeasurement = await loadComponent({
      NEXT_PUBLIC_GOOGLE_ADS_ID: ADS_ID,
    });
    const host = mount(<GoogleMeasurement />);
    expect(scripts(host).length).toBeGreaterThan(0);

    // Le choix expire : la prochaine lecture le purge. C'est ce chemin — et
    // non `writeCookieConsent` — qui laissait gtag.js chargé et actif pour
    // tout le reste de la navigation.
    const { isAnalyticsAllowed } = await import("@/lib/cookie-consent");
    storeConsent(true, 200 * 86_400_000);
    act(() => {
      expect(isAnalyticsAllowed()).toBe(false);
    });

    expect(scripts(host)).toHaveLength(0);
  });
});

describe("GoogleMeasurement — pont Calendly vers la mesure first-party", () => {
  it("écrit la confirmation de créneau dans la table first-party", async () => {
    storeConsent(true);
    vi.stubEnv("NEXT_PUBLIC_FUNNEL_ANALYTICS_ENABLED", "true");
    const GoogleMeasurement = await loadComponent({
      NEXT_PUBLIC_GOOGLE_ADS_ID: ADS_ID,
    });
    const sendBeacon = vi.fn(() => true);
    vi.stubGlobal("navigator", { ...window.navigator, sendBeacon });

    mount(<GoogleMeasurement />);

    const { CALENDLY_EVENTS, CALENDLY_TRACKING_EVENT, trackCalendlyEvent } =
      await import("./calendly-tracking");

    // Un autre événement Calendly n'est pas une confirmation.
    act(() => {
      trackCalendlyEvent(CALENDLY_EVENTS.outboundClick, { canonical: true });
    });
    expect(sendBeacon).not.toHaveBeenCalled();

    act(() => {
      trackCalendlyEvent(CALENDLY_EVENTS.bookingConfirmed, {
        widget: "inline",
      });
    });

    expect(sendBeacon).toHaveBeenCalledOnce();
    const [url, blob] = sendBeacon.mock.calls[0] as unknown as [string, Blob];
    expect(url).toBe("/api/funnel-analytics");
    const body = JSON.parse(await blob.text()) as { name: string };
    expect(body.name).toBe("pf:calendly_booking_confirmed");

    // Le canal reste first-party : aucune conversion Ads n'est inventée.
    expect(CALENDLY_TRACKING_EVENT).toBe("hc:calendly");
    vi.unstubAllGlobals();
  });
});
