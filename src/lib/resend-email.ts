import type {
  CreateEmailOptions,
  CreateEmailRequestOptions,
  CreateEmailResponse,
  Resend,
} from "resend";

export const RESEND_TIMEOUT_MS = 12_000;

type RequestOptionsWithSignal = CreateEmailRequestOptions & {
  signal: AbortSignal;
};

/**
 * Le SDK Resend 6.17 transmet les options inconnues à `fetch`, mais son type
 * public n'expose pas encore `signal`. Cette enveloppe garde l'idempotence du
 * SDK et ajoute une vraie interruption réseau bornée.
 */
export function sendResendEmail(
  resend: Pick<Resend, "emails">,
  payload: CreateEmailOptions,
  idempotencyKey: string,
  timeoutMs = RESEND_TIMEOUT_MS,
): Promise<CreateEmailResponse> {
  const options: RequestOptionsWithSignal = {
    idempotencyKey,
    signal: AbortSignal.timeout(timeoutMs),
  };
  return resend.emails.send(payload, options as CreateEmailRequestOptions);
}
