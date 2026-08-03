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

  it("keeps source descriptions stacked through the 640 px layout", () => {
    expect(layoutSource).toContain(
      'className="flex flex-col gap-3 py-3.5 px-4 sm:py-3 sm:px-5 md:flex-row md:items-center md:gap-5"',
    );
    expect(layoutSource).not.toContain(
      'className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 py-3.5 sm:py-3 px-4 sm:px-5"',
    );
  });
});
