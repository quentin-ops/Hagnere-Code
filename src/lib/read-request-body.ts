export class PayloadTooLargeError extends Error {
  constructor(public readonly maxBytes: number) {
    super(`Request body exceeds ${maxBytes} bytes`);
    this.name = "PayloadTooLargeError";
  }
}

/**
 * Lit un corps Web Request en interrompant réellement le flux dès que la
 * limite est franchie. Ne se fie pas à Content-Length, absent en chunked et
 * contrôlable par le client.
 */
/**
 * Le retour est typé `Uint8Array<ArrayBuffer>` : le buffer produit ici est
 * neuf et exactement dimensionné, donc directement utilisable comme `BodyInit`
 * sans recopie — c'est ce qui permet aux appelants de ne pas doubler le pic
 * mémoire d'un gros payload.
 */
export async function readRequestBytesWithLimit(
  request: Request,
  maxBytes: number,
): Promise<Uint8Array<ArrayBuffer>> {
  const declaredLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(declaredLength) && declaredLength > maxBytes) {
    throw new PayloadTooLargeError(maxBytes);
  }

  if (!request.body) return new Uint8Array();

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (!value) continue;
      total += value.byteLength;
      if (total > maxBytes) {
        await reader.cancel("payload too large");
        throw new PayloadTooLargeError(maxBytes);
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  const output = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    output.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return output;
}

export async function readJsonWithLimit<T>(
  request: Request,
  maxBytes: number,
): Promise<T> {
  const bytes = await readRequestBytesWithLimit(request, maxBytes);
  return JSON.parse(new TextDecoder().decode(bytes)) as T;
}
