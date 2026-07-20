import { createHmac } from "node:crypto";

const IDEMPOTENCY_KEY_PATTERN = /^[A-Za-z0-9_-]{16,100}$/;

export function isValidInquiryIdempotencyKey(value: string | null): boolean {
  return value === null || IDEMPOTENCY_KEY_PATTERN.test(value);
}

/**
 * Produit un identifiant non énumérable, stable pour un même payload et une
 * même clé client. Sans clé (client ancien ou appel direct), la déduplication
 * reste stable pendant une journée, sans stocker de PII dans l'identifiant.
 */
export function createInquirySlug(args: {
  secret: string;
  clientKey: string | null;
  canonicalPayload: string;
  now?: Date;
}): string {
  if (!isValidInquiryIdempotencyKey(args.clientKey)) {
    throw new Error("Invalid inquiry idempotency key");
  }
  const fallbackDay = (args.now ?? new Date()).toISOString().slice(0, 10);
  const scope = args.clientKey
    ? `client:${args.clientKey}`
    : `fallback-day:${fallbackDay}`;
  return createHmac("sha256", args.secret)
    .update(`project-inquiry:v1\0${scope}\0${args.canonicalPayload}`)
    .digest("base64url")
    .slice(0, 32);
}
