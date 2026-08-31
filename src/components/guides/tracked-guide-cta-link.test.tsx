// @vitest-environment happy-dom

import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const trackFunnelEvent = vi.hoisted(() => vi.fn());

vi.mock("@/lib/funnel-analytics", () => ({ trackFunnelEvent }));

import { TrackedGuideCtaLink } from "./tracked-guide-cta-link";

describe("TrackedGuideCtaLink", () => {
  let container: HTMLDivElement;
  let root: Root;

  beforeEach(() => {
    trackFunnelEvent.mockClear();
    window.history.replaceState({}, "", "/guides/guide-test");
    container = document.createElement("div");
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
  });

  it("tracks an anonymous project CTA with its placement", () => {
    act(() => {
      root.render(
        <TrackedGuideCtaLink
          href="/demarrer-un-projet"
          placement="hero"
          primary
        >
          Démarrer mon projet
        </TrackedGuideCtaLink>,
      );
    });

    const link = container.querySelector("a");
    expect(link).not.toBeNull();
    act(() => link?.dispatchEvent(new MouseEvent("click", { bubbles: true })));

    expect(link?.getAttribute("data-guide-primary-cta")).toBe("true");
    expect(trackFunnelEvent).toHaveBeenCalledWith("guide_cta_click", {
      guide: "guide-test",
      placement: "hero",
      channel: "project",
      destination: "/demarrer-un-projet",
    });
  });

  it("keeps phone actions as native tel links", () => {
    act(() => {
      root.render(
        <TrackedGuideCtaLink
          href="tel:+33660088351"
          placement="mobile"
          ariaLabel="Appeler Hagnéré Code"
        >
          Appeler
        </TrackedGuideCtaLink>,
      );
    });

    const link = container.querySelector<HTMLAnchorElement>(
      'a[aria-label="Appeler Hagnéré Code"]',
    );
    expect(link).not.toBeNull();
    act(() => link?.dispatchEvent(new MouseEvent("click", { bubbles: true })));

    expect(link?.getAttribute("href")).toBe("tel:+33660088351");
    expect(trackFunnelEvent).toHaveBeenCalledWith(
      "guide_cta_click",
      expect.objectContaining({ channel: "phone", placement: "mobile" }),
    );
  });
});
