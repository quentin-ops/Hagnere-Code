import { afterEach, describe, expect, it, vi } from "vitest";
import robots from "./robots";

describe("robots.txt", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("autorise tous les robots sur le contenu public du build production", () => {
    vi.stubEnv("NEXT_PUBLIC_ENV", "production");

    expect(robots()).toEqual({
      rules: [
        {
          userAgent: "*",
          allow: "/",
          disallow: ["/api/"],
        },
      ],
      sitemap: "https://hagnere-code.ai/sitemap.xml",
    });
  });

  it("reconnaît le déploiement Vercel production sans override public", () => {
    vi.stubEnv("NEXT_PUBLIC_ENV", "");
    vi.stubEnv("VERCEL_ENV", "production");

    expect(robots()).toEqual({
      rules: [
        {
          userAgent: "*",
          allow: "/",
          disallow: ["/api/"],
        },
      ],
      sitemap: "https://hagnere-code.ai/sitemap.xml",
    });
  });

  it("bloque tout crawl sur un build local ou de preview", () => {
    vi.stubEnv("NEXT_PUBLIC_ENV", "preview");
    vi.stubEnv("VERCEL_ENV", "production");

    expect(robots()).toEqual({
      rules: [{ userAgent: "*", disallow: "/" }],
    });
  });
});
