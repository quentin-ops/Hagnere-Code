export const PROJECT_DRAFT_STORAGE_KEY = "pf:draft:v3";
export const PROJECT_DRAFT_EXPIRY_MS = 24 * 60 * 60 * 1000;

export const LEGACY_PROJECT_DRAFT_STORAGE_KEYS = [
  "pf:draft:v1",
  "pf:draft:v2",
  "pf:briefSlug:v1",
  "pf:result:v1",
] as const;

const CONTACT_STRING_FIELDS = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "siren",
  "company",
  "role",
  "honeypot",
] as const;

/**
 * Le brouillon automatique sert uniquement à ne pas perdre le cadrage projet.
 * Les coordonnées, identifiants professionnels et l'accusé de lecture restent
 * en mémoire React et ne sont jamais sérialisés dans le navigateur.
 */
export function sanitizeProjectDraftState<T extends Record<string, unknown>>(
  state: T,
): T {
  const sanitized: Record<string, unknown> = { ...state };
  for (const field of CONTACT_STRING_FIELDS) {
    if (field in sanitized) sanitized[field] = "";
  }
  if ("consent" in sanitized) sanitized.consent = false;
  return sanitized as T;
}

export function purgeLegacyProjectDrafts(
  storage: Pick<Storage, "removeItem">,
): void {
  for (const key of LEGACY_PROJECT_DRAFT_STORAGE_KEYS) {
    storage.removeItem(key);
  }
  storage.removeItem(PROJECT_DRAFT_STORAGE_KEY);
}

export function getProjectDraftRemainingMs(
  savedAt: number,
  now = Date.now(),
): number {
  if (!Number.isFinite(savedAt) || savedAt > now) return 0;
  return Math.max(0, PROJECT_DRAFT_EXPIRY_MS - (now - savedAt));
}
