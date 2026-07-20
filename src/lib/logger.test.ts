import { afterEach, describe, expect, it, vi } from "vitest";

import { log } from "./logger";

describe("structured logger privacy", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it("n'écrit aucun message d'erreur potentiellement personnel en production", () => {
    vi.stubEnv("NODE_ENV", "production");
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    log.error("db_failed", {
      err: new Error("alice@example.com, SIREN 123456789"),
    });

    const payload = JSON.parse(String(errorSpy.mock.calls[0]?.[0]));
    expect(payload.err).toEqual({ name: "Error" });
    expect(JSON.stringify(payload)).not.toContain("alice@example.com");
    expect(JSON.stringify(payload)).not.toContain("123456789");
  });

  it("masque les coordonnées dans les diagnostics hors production", () => {
    vi.stubEnv("NODE_ENV", "test");
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    log.error("validation_failed", {
      err: new Error("alice@example.com, SIREN 123456789"),
      detail: "Bearer secret-token",
    });

    const payload = JSON.parse(String(errorSpy.mock.calls[0]?.[0]));
    expect(payload.err.message).toContain("[email-redacted]");
    expect(payload.err.message).toContain("[identifier-redacted]");
    expect(payload.detail).toBe("Bearer [redacted]");
  });
});
