import { describe, expect, it, vi } from "vitest";
import { sendResendEmail } from "./resend-email";

describe("sendResendEmail", () => {
  it("transmet une clé d'idempotence et un signal d'interruption au SDK", async () => {
    const send = vi.fn().mockResolvedValue({ data: { id: "email_1" }, error: null });
    const client = { emails: { send } };

    await sendResendEmail(
      client as never,
      { from: "a@example.com", to: "b@example.com", subject: "x", text: "x" },
      "inquiry-test-team",
      1_000,
    );

    const options = send.mock.calls[0]?.[1] as {
      idempotencyKey?: string;
      signal?: AbortSignal;
    };
    expect(options.idempotencyKey).toBe("inquiry-test-team");
    expect(options.signal).toBeInstanceOf(AbortSignal);
  });

  it("interrompt réellement un appel fournisseur bloqué", async () => {
    const send = vi.fn((_: unknown, options: { signal: AbortSignal }) =>
      new Promise((_, reject) => {
        options.signal.addEventListener("abort", () => reject(options.signal.reason), {
          once: true,
        });
      }),
    );

    await expect(
      sendResendEmail(
        { emails: { send } } as never,
        { from: "a@example.com", to: "b@example.com", subject: "x", text: "x" },
        "inquiry-test-timeout",
        5,
      ),
    ).rejects.toMatchObject({ name: "TimeoutError" });
  });
});
