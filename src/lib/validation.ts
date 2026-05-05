/**
 * Helpers de validation partagés entre les API routes (project-inquiry,
 * estimate, transcribe). Extraits dans un module dédié pour permettre des
 * tests unitaires propres et éviter la duplication.
 */

/** Vérifie un email avec une regex permissive (RFC simplifiée). */
export function isValidEmail(email: string): boolean {
  if (typeof email !== "string") return false;
  const trimmed = email.trim();
  if (trimmed.length === 0 || trimmed.length > 254) return false;
  // Format basique : un @ + au moins un point dans la partie domaine,
  // pas d'espace, pas de double @.
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(trimmed);
}

/** Échappe les caractères HTML dangereux pour insertion dans un email/HTML. */
export function escapeHtml(s: string): string {
  if (typeof s !== "string") return "";
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Convertit n'importe quel input en string array nettoyé (strings non-vides). */
export function asStringArray(v: unknown): string[] {
  if (!Array.isArray(v)) return [];
  return v.filter((x): x is string => typeof x === "string" && x.trim().length > 0);
}

/** Tente de parser un nombre entier. Retourne null si parse échoue. */
export function asInt(v: unknown): number | null {
  if (typeof v === "number") return Number.isInteger(v) ? v : null;
  if (typeof v === "string") {
    const n = parseInt(v, 10);
    return Number.isNaN(n) ? null : n;
  }
  return null;
}

/**
 * Tronque une string à `max` caractères et trim.
 * Pratique pour clamp les inputs avant insertion DB / email.
 */
export function clampString(v: unknown, max: number): string {
  if (typeof v !== "string") return "";
  return v.trim().slice(0, max);
}

/** Validation téléphone FR + international permissive (digits + + - espaces). */
export function isValidPhone(phone: string): boolean {
  if (typeof phone !== "string") return false;
  const digits = phone.replace(/[^\d]/g, "");
  // Au moins 8 chiffres, au plus 15 (recommandation E.164).
  return digits.length >= 8 && digits.length <= 15;
}

/**
 * Sanitise un objet plat pour log/persistance : convertit en JSON-safe et
 * tronque les valeurs trop longues. Évite de logger des payloads géants.
 */
export function sanitizeForLog(obj: Record<string, unknown>, maxValueLen = 200): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v == null) {
      out[k] = v;
    } else if (typeof v === "string") {
      out[k] = v.length > maxValueLen ? v.slice(0, maxValueLen) + "…" : v;
    } else if (typeof v === "number" || typeof v === "boolean") {
      out[k] = v;
    } else {
      try {
        const s = JSON.stringify(v);
        out[k] = s.length > maxValueLen ? s.slice(0, maxValueLen) + "…" : s;
      } catch {
        out[k] = "[unserializable]";
      }
    }
  }
  return out;
}
