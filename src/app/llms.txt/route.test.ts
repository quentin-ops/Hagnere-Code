import { describe, expect, it } from "vitest";
import { GET } from "./route";

describe("GET /llms.txt", () => {
  it("serves the generated index as cacheable UTF-8 plain text", async () => {
    const response = GET();
    const body = await response.text();

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe(
      "text/plain; charset=utf-8",
    );
    expect(response.headers.get("cache-control")).toContain("s-maxage=86400");
    expect(body).toMatch(/^# Hagnéré Code\n/);
    expect(body).toContain("https://hagnere-code.ai/guides/");
    expect(body).toContain("https://hagnere-code.ai/ressources/");
  });
});
