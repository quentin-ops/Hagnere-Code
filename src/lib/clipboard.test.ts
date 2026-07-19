import { describe, expect, it, vi } from "vitest";
import { copyWithFallback } from "./clipboard";

describe("clipboard fallback", () => {
  it("uses the modern Clipboard API when it succeeds", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    const fallbackCopy = vi.fn(() => true);

    await expect(
      copyWithFallback("grille", { writeText, fallbackCopy }),
    ).resolves.toBe(true);
    expect(writeText).toHaveBeenCalledWith("grille");
    expect(fallbackCopy).not.toHaveBeenCalled();
  });

  it("uses the fallback after a Clipboard permission rejection", async () => {
    const writeText = vi.fn().mockRejectedValue(new Error("NotAllowedError"));
    const fallbackCopy = vi.fn(() => true);

    await expect(
      copyWithFallback("grille", { writeText, fallbackCopy }),
    ).resolves.toBe(true);
    expect(fallbackCopy).toHaveBeenCalledWith("grille");
  });

  it("reports failure when both copy mechanisms fail", async () => {
    await expect(
      copyWithFallback("grille", {
        writeText: async () => {
          throw new Error("NotAllowedError");
        },
        fallbackCopy: () => false,
      }),
    ).resolves.toBe(false);
  });
});
