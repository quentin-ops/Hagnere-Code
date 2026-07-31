import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const layoutSource = readFileSync(
  new URL("./guide-premium-layout.tsx", import.meta.url),
  "utf8",
);

describe("GuidePremiumLayout accessibility contracts", () => {
  it("stacks the author role on narrow layouts so 200% text does not clip it", () => {
    expect(layoutSource).toContain(
      'className="mt-1 block text-zinc-600 dark:text-white sm:mt-0 sm:inline"',
    );
    expect(layoutSource).toContain(
      'className="mx-1.5 hidden text-zinc-400 sm:inline"',
    );
  });
});
