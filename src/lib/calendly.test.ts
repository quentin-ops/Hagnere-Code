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

  it("accepts only secure Calendly URLs and strips fragments", () => {
    expect(resolveCalendlyUrl("https://calendly.com/acme/discovery#x")).toBe(
      "https://calendly.com/acme/discovery",
    );
    expect(resolveCalendlyUrl("https://team.calendly.com/acme/discovery/")).toBe(
      "https://team.calendly.com/acme/discovery",
    );
  });
});
