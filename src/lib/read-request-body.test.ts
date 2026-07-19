import { describe, expect, it } from "vitest";
import {
  PayloadTooLargeError,
  readJsonWithLimit,
  readRequestBytesWithLimit,
} from "./read-request-body";

describe("bounded request body reader", () => {
  it("lit un JSON sous la limite sans Content-Length", async () => {
    const request = new Request("https://example.test", {
      method: "POST",
      body: new ReadableStream({
        start(controller) {
          controller.enqueue(new TextEncoder().encode('{"ok":true}'));
          controller.close();
        },
      }),
      // Requis par Node lorsque le body est un ReadableStream.
      duplex: "half",
    } as RequestInit & { duplex: "half" });

    await expect(readJsonWithLimit<{ ok: boolean }>(request, 64)).resolves.toEqual({ ok: true });
  });

  it("interrompt un flux chunked qui dépasse la limite réelle", async () => {
    const request = new Request("https://example.test", {
      method: "POST",
      body: new ReadableStream({
        start(controller) {
          controller.enqueue(new Uint8Array(6));
          controller.enqueue(new Uint8Array(6));
          controller.close();
        },
      }),
      duplex: "half",
    } as RequestInit & { duplex: "half" });

    await expect(readRequestBytesWithLimit(request, 10)).rejects.toBeInstanceOf(
      PayloadTooLargeError,
    );
  });

  it("rejette immédiatement un Content-Length déclaré trop grand", async () => {
    const request = new Request("https://example.test", {
      method: "POST",
      headers: { "content-length": "100" },
      body: "{}",
    });

    await expect(readRequestBytesWithLimit(request, 10)).rejects.toBeInstanceOf(
      PayloadTooLargeError,
    );
  });
});
