const STORAGE_KEY = "hc:project-inquiry:idempotency:v1";
const KEY_PATTERN = /^[A-Za-z0-9_-]{16,100}$/;

/** La clé ne contient aucune donnée du formulaire et survit à un rechargement. */
export function getProjectInquiryClientKey(): string {
  try {
    const existing = window.sessionStorage.getItem(STORAGE_KEY);
    if (existing && KEY_PATTERN.test(existing)) return existing;
  } catch {
    // Le formulaire reste utilisable lorsque le stockage est désactivé.
  }

  const key = globalThis.crypto.randomUUID();
  try {
    window.sessionStorage.setItem(STORAGE_KEY, key);
  } catch {
    // La clé reste stable pendant la vie du composant via le header du retry.
  }
  return key;
}

export function clearProjectInquiryClientKey(): void {
  try {
    window.sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    // Rien à nettoyer si le stockage n'est pas disponible.
  }
}
