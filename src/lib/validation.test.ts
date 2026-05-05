import { describe, it, expect } from "vitest";
import {
  isValidEmail,
  escapeHtml,
  asStringArray,
  asInt,
  clampString,
  isValidPhone,
  sanitizeForLog,
} from "./validation";

describe("isValidEmail", () => {
  it("accepte les emails valides courants", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
    expect(isValidEmail("quentin@hagnere-patrimoine.fr")).toBe(true);
    expect(isValidEmail("user+tag@sub.example.co.uk")).toBe(true);
  });

  it("rejette les emails invalides", () => {
    expect(isValidEmail("")).toBe(false);
    expect(isValidEmail("   ")).toBe(false);
    expect(isValidEmail("noatsymbol.com")).toBe(false);
    expect(isValidEmail("two@@signs.com")).toBe(false);
    expect(isValidEmail("missing@tld")).toBe(false);
    expect(isValidEmail("with space@example.com")).toBe(false);
  });

  it("rejette les inputs non-string", () => {
    expect(isValidEmail(null as unknown as string)).toBe(false);
    expect(isValidEmail(undefined as unknown as string)).toBe(false);
    expect(isValidEmail(123 as unknown as string)).toBe(false);
  });

  it("rejette les emails trop longs (> 254 chars)", () => {
    const long = "a".repeat(250) + "@x.com";
    expect(isValidEmail(long)).toBe(false);
  });
});

describe("escapeHtml", () => {
  it("échappe les caractères dangereux", () => {
    expect(escapeHtml("<script>alert('xss')</script>")).toBe(
      "&lt;script&gt;alert(&#39;xss&#39;)&lt;/script&gt;",
    );
    expect(escapeHtml('Mr "Bond" & co')).toBe("Mr &quot;Bond&quot; &amp; co");
  });

  it("renvoie une string vide pour les non-strings", () => {
    expect(escapeHtml(null as unknown as string)).toBe("");
    expect(escapeHtml(undefined as unknown as string)).toBe("");
    expect(escapeHtml(42 as unknown as string)).toBe("");
  });

  it("préserve les strings sans caractères spéciaux", () => {
    expect(escapeHtml("Hello world")).toBe("Hello world");
  });
});

describe("asStringArray", () => {
  it("filtre les strings vides", () => {
    expect(asStringArray(["a", "", "b", "  ", "c"])).toEqual(["a", "b", "c"]);
  });

  it("rejette les non-strings", () => {
    expect(asStringArray(["a", 1, "b", null, "c", undefined])).toEqual(["a", "b", "c"]);
  });

  it("renvoie [] pour un input non-array", () => {
    expect(asStringArray("string")).toEqual([]);
    expect(asStringArray(null)).toEqual([]);
    expect(asStringArray(undefined)).toEqual([]);
    expect(asStringArray(42)).toEqual([]);
  });
});

describe("asInt", () => {
  it("parse les nombres valides", () => {
    expect(asInt(42)).toBe(42);
    expect(asInt("42")).toBe(42);
    expect(asInt("0")).toBe(0);
    expect(asInt("-5")).toBe(-5);
  });

  it("rejette les floats", () => {
    expect(asInt(3.14)).toBe(null);
  });

  it("renvoie null pour les inputs invalides", () => {
    expect(asInt("abc")).toBe(null);
    expect(asInt("")).toBe(null);
    expect(asInt(null)).toBe(null);
    expect(asInt(undefined)).toBe(null);
    expect(asInt({})).toBe(null);
  });
});

describe("clampString", () => {
  it("trim et tronque à max", () => {
    expect(clampString("  hello world  ", 5)).toBe("hello");
    expect(clampString("short", 100)).toBe("short");
  });

  it("renvoie '' pour les non-strings", () => {
    expect(clampString(null, 10)).toBe("");
    expect(clampString(42, 10)).toBe("");
  });
});

describe("isValidPhone", () => {
  it("accepte les téléphones FR/INT valides", () => {
    expect(isValidPhone("+33 6 12 34 56 78")).toBe(true);
    expect(isValidPhone("06 12 34 56 78")).toBe(true);
    expect(isValidPhone("+1-555-123-4567")).toBe(true);
  });

  it("rejette les numéros trop courts ou trop longs", () => {
    expect(isValidPhone("123")).toBe(false);
    expect(isValidPhone("1".repeat(20))).toBe(false);
    expect(isValidPhone("")).toBe(false);
  });

  it("rejette les non-strings", () => {
    expect(isValidPhone(null as unknown as string)).toBe(false);
  });
});

describe("sanitizeForLog", () => {
  it("tronque les longues valeurs string", () => {
    const long = "a".repeat(500);
    const out = sanitizeForLog({ msg: long }, 100);
    expect(out.msg).toBe("a".repeat(100) + "…");
  });

  it("préserve null/undefined/booleans/numbers", () => {
    const out = sanitizeForLog({ a: null, b: true, c: 42, d: undefined });
    expect(out.a).toBe(null);
    expect(out.b).toBe(true);
    expect(out.c).toBe(42);
    expect(out.d).toBe(undefined);
  });

  it("sérialise les objets imbriqués", () => {
    const out = sanitizeForLog({ obj: { foo: "bar" } });
    expect(out.obj).toBe('{"foo":"bar"}');
  });

  it("gère les valeurs non-sérialisables", () => {
    const circular: Record<string, unknown> = {};
    circular.self = circular;
    const out = sanitizeForLog({ x: circular });
    expect(out.x).toBe("[unserializable]");
  });
});
