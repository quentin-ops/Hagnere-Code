import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const layoutSource = readFileSync(
  new URL("./guide-premium-layout.tsx", import.meta.url),
  "utf8",
);
const faqSource = readFileSync(
  new URL("./guide-premium-faq.tsx", import.meta.url),
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

  it("keeps long source rows stacked until the large layout", () => {
    expect(layoutSource).toContain(
      'className="flex min-w-0 flex-col gap-3 py-3.5 px-4 sm:py-3 sm:px-5 lg:flex-row lg:items-center lg:gap-5"',
    );
    expect(layoutSource).not.toContain("md:flex-row md:items-center md:gap-5");
    expect(layoutSource).toContain(
      'className="min-w-0 break-words text-[13px] sm:text-sm text-zinc-600 dark:text-white leading-relaxed"',
    );
  });

  it("keeps FAQ indices readable against the light card surface", () => {
    expect(faqSource).toContain(
      "text-zinc-600 dark:text-zinc-400 tabular-nums",
    );
    expect(faqSource).not.toContain(
      "font-medium text-zinc-400 tabular-nums tracking-wider",
    );
  });

  it("keeps every FAQ answer available in the printed guide", () => {
    expect(faqSource).toContain('data-guide-premium-faq="true"');
    expect(faqSource).toContain("forceMount");
    expect(faqSource).toContain(
      '[data-guide-premium-faq="true"] [data-slot="accordion-content"]',
    );
    expect(faqSource).toContain('[data-state="closed"]');
    expect(faqSource).toContain("display: block !important");
  });
});
