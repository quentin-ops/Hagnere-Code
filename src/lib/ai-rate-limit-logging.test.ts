import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  execute: vi.fn(),
  logError: vi.fn(),
}));

vi.mock("@/db", () => ({
  getDb: () => ({ execute: mocks.execute }),
}));

vi.mock("@/lib/logger", () => ({
  log: { error: mocks.logError },
}));

import { logAiCall } from "./ai-rate-limit";

describe("logAiCall reservation binding", () => {
  beforeEach(() => {
    mocks.execute.mockReset();
    mocks.logError.mockReset();
    mocks.execute.mockResolvedValue({ rows: [] });
  });

  it("refuse localement un journal sans réservation valide", async () => {
    await logAiCall({
      reservationId: 0,
      service: "sirene",
      ip: "127.0.0.1",
      status: "blocked",
    });

    expect(mocks.execute).not.toHaveBeenCalled();
    expect(mocks.logError).toHaveBeenCalledOnce();
  });

  it("émet une seule écriture conditionnelle pour une réservation valide", async () => {
    await logAiCall({
      reservationId: 42,
      service: "inquiry",
      ip: "127.0.0.1",
      status: "ok",
    });

    expect(mocks.execute).toHaveBeenCalledOnce();
    expect(mocks.logError).not.toHaveBeenCalled();
  });
});
