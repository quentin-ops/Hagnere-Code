import { describe, it, expect, beforeEach } from "vitest";
import {
  createRateLimitStore,
  checkRateLimit,
  gcRateLimitStore,
  getClientIp,
  type RateLimitStore,
} from "./rate-limit";

describe("checkRateLimit", () => {
  let store: RateLimitStore;

  beforeEach(() => {
    store = createRateLimitStore();
  });

  it("autorise la première requête", () => {
    const r = checkRateLimit(store, "1.2.3.4", { windowMs: 60_000, max: 3 });
    expect(r.ok).toBe(true);
  });

  it("autorise jusqu'au max, puis bloque", () => {
    const opts = { windowMs: 60_000, max: 3 };
    expect(checkRateLimit(store, "ip", opts).ok).toBe(true);
    expect(checkRateLimit(store, "ip", opts).ok).toBe(true);
    expect(checkRateLimit(store, "ip", opts).ok).toBe(true);
    const blocked = checkRateLimit(store, "ip", opts);
    expect(blocked.ok).toBe(false);
    expect(blocked.retryAfterSec).toBeGreaterThan(0);
  });

  it("isole les buckets par IP", () => {
    const opts = { windowMs: 60_000, max: 1 };
    expect(checkRateLimit(store, "ip-A", opts).ok).toBe(true);
    expect(checkRateLimit(store, "ip-A", opts).ok).toBe(false);
    expect(checkRateLimit(store, "ip-B", opts).ok).toBe(true);
  });

  it("réinitialise le bucket après expiration de la fenêtre", () => {
    const opts = { windowMs: 1, max: 1 };
    expect(checkRateLimit(store, "ip", opts).ok).toBe(true);
    expect(checkRateLimit(store, "ip", opts).ok).toBe(false);
    // attendre 5ms pour que la fenêtre 1ms expire
    return new Promise<void>((resolve) =>
      setTimeout(() => {
        expect(checkRateLimit(store, "ip", opts).ok).toBe(true);
        resolve();
      }, 5),
    );
  });
});

describe("gcRateLimitStore", () => {
  it("ne fait rien tant que le store est < 1000 entrées", () => {
    const store = createRateLimitStore();
    store.set("ip-1", { count: 1, resetAt: Date.now() - 10_000 }); // expiré
    gcRateLimitStore(store);
    expect(store.size).toBe(1);
  });

  it("supprime les buckets expirés au-delà de 1000 entrées", () => {
    const store = createRateLimitStore();
    const now = Date.now();
    for (let i = 0; i < 1100; i++) {
      // Half expired, half active
      const expired = i % 2 === 0;
      store.set(`ip-${i}`, { count: 1, resetAt: expired ? now - 10_000 : now + 60_000 });
    }
    gcRateLimitStore(store);
    expect(store.size).toBeLessThan(1100);
    expect(store.size).toBeGreaterThan(0);
  });
});

describe("getClientIp", () => {
  function makeReq(headers: Record<string, string>): Request {
    return new Request("https://example.com", { headers });
  }

  it("priorise cf-connecting-ip", () => {
    const req = makeReq({
      "cf-connecting-ip": "1.1.1.1",
      "x-forwarded-for": "9.9.9.9",
      "x-real-ip": "8.8.8.8",
    });
    expect(getClientIp(req)).toBe("1.1.1.1");
  });

  it("fallback sur x-forwarded-for (premier de la liste)", () => {
    const req = makeReq({
      "x-forwarded-for": "1.2.3.4, 5.6.7.8",
    });
    expect(getClientIp(req)).toBe("1.2.3.4");
  });

  it("fallback sur x-real-ip", () => {
    const req = makeReq({
      "x-real-ip": "9.9.9.9",
    });
    expect(getClientIp(req)).toBe("9.9.9.9");
  });

  it("renvoie 'unknown' si aucun header", () => {
    const req = makeReq({});
    expect(getClientIp(req)).toBe("unknown");
  });

  it("rejette les valeurs spoofées non-IP dans cf-connecting-ip", () => {
    const req = makeReq({
      "cf-connecting-ip": "<script>alert(1)</script>",
      "x-real-ip": "8.8.8.8",
    });
    expect(getClientIp(req)).toBe("8.8.8.8");
  });

  it("supporte IPv6", () => {
    const req = makeReq({
      "cf-connecting-ip": "2001:db8::1",
    });
    expect(getClientIp(req)).toBe("2001:db8::1");
  });
});
