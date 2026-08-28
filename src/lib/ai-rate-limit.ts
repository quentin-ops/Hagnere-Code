/**
 * Rate limiter Postgres-backed multi-services.
 *
 * Sert les routes publiques qui doivent garder une limite cohérente entre
 * plusieurs instances :
 *   - 'transcribe' → Groq Whisper (cost = bytes audio uploadés)
 *   - 'inquiry'    → Resend mail (pas de cost unit, juste compteur)
 *   - 'sirene'     → API Recherche d'entreprises (compteur uniquement)
 *   - 'analytics'  → collecteur de parcours first-party (écriture Neon)
 *
 * 4 protections empilées par service :
 *   1. Per-IP / heure   → anti-burst d'un même prospect
 *   2. Per-IP / 24h     → anti-flood lent depuis 1 IP
 *   3. Per-email / 24h  → anti-spam même boîte mail (inquiry)
 *   4. Global / 24h     → circuit breaker volume
 *
 * 5e protection : circuit breaker COÛT — si cost units cumulés/jour > seuil,
 * on bloque tout le monde pour la journée (anti-attaque distribuée).
 *
 * 6e mécanisme : la LIBÉRATION d'une réservation (`releaseReservation`).
 * Une tentative qui échoue pour une raison imputable au site ou à une simple
 * faute de saisie ne doit pas brûler un créneau du prospect. La ligne réservée
 * passe alors en status='released' : elle sort des compteurs principaux mais
 * reste comptée sous un plafond « tentatives relâchées » beaucoup plus large,
 * pour qu'un robot ne puisse pas marteler la route gratuitement.
 *
 * Toutes les vérifications sont issues de `ai_call_log` (table indexée
 * sur (service, ip, created_at) et (service, email_hash, created_at)).
 * Une seule round-trip Postgres pour récupérer les 5 compteurs.
 *
 * Persistance via Postgres → cold-start safe sur Cloudflare Workers,
 * Vercel Functions, etc. Chaque appel logge un row (ok, blocked, error).
 */

import { sql } from "drizzle-orm";
import { getDb } from "@/db";
import { createHash } from "node:crypto";
import { CONTACT_EMAIL } from "@/lib/contact-details";
import { log } from "@/lib/logger";
import {
  checkRateLimit,
  createRateLimitStore,
  gcRateLimitStore,
} from "@/lib/rate-limit";

// ── Service identifiers ──────────────────────────────────────────────
// NB : la table ai_call_log contient encore des rows historiques avec
// service='estimate' (ancien estimateur IA supprimé) — ne pas purger.
export type ServiceId = "transcribe" | "inquiry" | "sirene" | "analytics";

// ── Limites par service (defaults conservateurs) ─────────────────────
//
// `costBreaker: null` = pas de circuit breaker coût pour ce service
// (utile pour 'inquiry' qui n'a pas de coût marginal mesurable).
//
// Tous les seuils sont overridables via env pour les tests / scale-up.
const HOUR_MS = 60 * 60 * 1000;
const DAY_MS = 24 * HOUR_MS;

interface ServiceLimits {
  perIpHour: number;
  perIpDay: number;
  /** null = pas de limite per-email (typique pour les services non-email). */
  perEmailDay: number | null;
  globalDay: number;
  /** null = pas de cost breaker. Sinon : seuil cumulé sur 24h. */
  costBreaker: number | null;
  /**
   * Plafond horaire des tentatives RELÂCHÉES par IP (status='released').
   * null = le service ne libère jamais de réservation. Volontairement très
   * au-dessus du plafond nominal : il ne doit borner qu'un martèlement
   * automatisé, jamais un prospect qui corrige son formulaire.
   */
  releasedPerIpHour: number | null;
  /** Même logique, borne globale sur 24h. null = pas de libération. */
  releasedGlobalDay: number | null;
}

const SERVICE_LIMITS: Record<ServiceId, ServiceLimits> = {
  transcribe: {
    perIpHour: parseInt(process.env.TRANSCRIBE_RATE_PER_IP_HOUR || "20", 10),
    perIpDay: parseInt(process.env.TRANSCRIBE_RATE_PER_IP_DAY || "50", 10),
    perEmailDay: null, // pas d'email associé à une transcription
    globalDay: parseInt(process.env.TRANSCRIBE_RATE_GLOBAL_DAY || "1000", 10),
    /**
     * 500 MB cumulés/jour ≈ 200 h audio ≈ 8 € de Groq Whisper. Au-dessus
     * du trafic légitime (~50 dictées × 5 MB = 250 MB). Cost unit = bytes
     * uploadés (proxy raisonnable de la durée audio).
     */
    costBreaker: parseInt(process.env.TRANSCRIBE_COST_BREAKER_BYTES_DAY || "524288000", 10),
    // Le coût Groq est déjà réservé sur la ligne : on ne relâche jamais une
    // réservation de transcription, sinon le cost breaker perdrait sa mémoire.
    releasedPerIpHour: null,
    releasedGlobalDay: null,
  },
  inquiry: {
    perIpHour: parseInt(process.env.INQUIRY_RATE_PER_IP_HOUR || "5", 10),
    perIpDay: parseInt(process.env.INQUIRY_RATE_PER_IP_DAY || "15", 10),
    /**
     * Envois ABOUTIS par adresse et par 24 h. Relevé de 2 à 5.
     *
     * À 2, la séquence la plus banale d'un prospect sérieux suffisait à le
     * verrouiller : le formulaire court du pied de page, puis le brief complet
     * du tunnel — les deux tapent ce même compteur — et toute correction
     * ensuite était refusée pendant 24 h. On éjectait le visiteur le plus
     * engagé du parcours.
     *
     * L'asymétrie de coût tranche seule : un prospect bloqué à tort, c'est un
     * client perdu ; un robot qui passe de 2 à 5 messages, c'est trois e-mails
     * de plus. Et ce plafond n'est pas seul — `perIpHour` (5), `perIpDay` (15)
     * et `globalDay` (100) restent devant lui.
     */
    perEmailDay: parseInt(process.env.INQUIRY_RATE_PER_EMAIL_DAY || "5", 10),
    globalDay: parseInt(process.env.INQUIRY_RATE_GLOBAL_DAY || "100", 10),
    costBreaker: null, // pas de coût marginal mesurable côté serveur
    // Une demande refusée pour champ manquant ou panne d'envoi est relâchée :
    // seul le martèlement automatisé reste borné, à un niveau qu'un prospect
    // qui corrige son formulaire n'atteint jamais.
    releasedPerIpHour: parseInt(process.env.INQUIRY_RETRY_PER_IP_HOUR || "30", 10),
    releasedGlobalDay: parseInt(process.env.INQUIRY_RETRY_GLOBAL_DAY || "500", 10),
  },
  sirene: {
    perIpHour: parseInt(process.env.SIRENE_RATE_PER_IP_HOUR || "60", 10),
    perIpDay: parseInt(process.env.SIRENE_RATE_PER_IP_DAY || "200", 10),
    perEmailDay: null,
    globalDay: parseInt(process.env.SIRENE_RATE_GLOBAL_DAY || "5000", 10),
    costBreaker: null,
    releasedPerIpHour: null,
    releasedGlobalDay: null,
  },
  /**
   * Collecteur de parcours : aucune dépendance externe, mais CHAQUE requête
   * acceptée provoque une écriture Neon. Sans compteur persistant, le volume
   * et la qualité des données de conversion seraient à la merci du premier
   * script venu — or ce sont ces données qui piloteront les enchères Ads.
   * Les paliers sont larges : une session de funnel émet quelques dizaines
   * d'événements, un réseau d'entreprise partagé peut en cumuler beaucoup plus.
   */
  analytics: {
    perIpHour: parseInt(process.env.ANALYTICS_RATE_PER_IP_HOUR || "200", 10),
    perIpDay: parseInt(process.env.ANALYTICS_RATE_PER_IP_DAY || "600", 10),
    perEmailDay: null,
    globalDay: parseInt(process.env.ANALYTICS_RATE_GLOBAL_DAY || "5000", 10),
    costBreaker: null,
    releasedPerIpHour: null,
    releasedGlobalDay: null,
  },
};

/**
 * Délai maximal d'une requête du limiteur.
 *
 * Aucune requête n'était bornée, alors que le client du tunnel abandonne à
 * 20 s : une base qui répond en 30 s produisait donc une soumission perdue
 * côté visiteur ET une invocation serveur qui continuait de tourner. Cinq
 * secondes couvrent très largement une requête indexée sur 24 h de journal ;
 * au-delà, la base n'est pas lente, elle est indisponible, et il vaut mieux
 * basculer tout de suite sur le mode dégradé que faire patienter le prospect.
 */
const RATE_LIMIT_QUERY_TIMEOUT_MS_DEFAULT = 5_000;

function queryTimeoutMs(): number {
  const raw = parseInt(process.env.RATE_LIMIT_QUERY_TIMEOUT_MS || "", 10);
  return Number.isFinite(raw) && raw > 0
    ? raw
    : RATE_LIMIT_QUERY_TIMEOUT_MS_DEFAULT;
}

/**
 * `name = "TimeoutError"` : c'est ce nom que le logger conserve en production
 * (il réduit une Error à son nom) et qui permet de distinguer, dans les
 * journaux, une base injoignable d'une base qui répond une erreur.
 */
class RateLimitQueryTimeoutError extends Error {
  constructor(operation: string) {
    super(`Rate-limit query timed out after ${queryTimeoutMs()}ms (${operation})`);
    this.name = "TimeoutError";
  }
}

/**
 * Le pilote Neon HTTP n'expose pas de délai par requête : on borne donc côté
 * appelant. La requête distante peut continuer sa vie, mais elle ne retient
 * plus la réponse au visiteur.
 */
async function withQueryTimeout<T>(
  operation: string,
  run: () => Promise<T>,
): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    return await Promise.race([
      run(),
      new Promise<never>((_resolve, reject) => {
        timer = setTimeout(
          () => reject(new RateLimitQueryTimeoutError(operation)),
          queryTimeoutMs(),
        );
      }),
    ]);
  } finally {
    if (timer) clearTimeout(timer);
  }
}

export type BlockReason =
  | "rate_ip_hour"
  | "rate_ip_day"
  | "rate_email_day"
  | "rate_global_day"
  | "rate_retry_ip_hour"
  | "rate_retry_global_day"
  /**
   * Refus prononcé pendant une indisponibilité du limiteur persistant. Jamais
   * écrit en base : par construction, la base est justement injoignable.
   */
  | "rate_degraded"
  | "cost_breaker"
  | "captcha_failed"
  | "validation"
  | "ai_error"
  | "secret_misconfigured";

/** Issues qui rendent le créneau au visiteur au lieu de le consommer. */
export type ReleaseReason = Extract<BlockReason, "validation" | "ai_error">;

/**
 * Réservation « fantôme » du mode dégradé : aucune ligne n'existe en base.
 * Distincte de 0, qui reste une valeur invalide signalée comme une anomalie —
 * confondre les deux ferait passer un bug d'appelant pour un incident
 * d'infrastructure, et l'inverse.
 */
export const DEGRADED_RESERVATION_ID = -1;

export type RateLimitDecision =
  | {
      allowed: true;
      /** Ligne réservée atomiquement avant tout appel externe. */
      reservationId: number;
      /**
       * Vrai quand la décision vient du repli mémoire et non de la base : rien
       * n'a été réservé, il n'y a donc rien à lier, à relâcher ni à journaliser.
       */
      degraded?: true;
    }
  | {
      allowed: false;
      reason: BlockReason;
      /** Message FR retourné au client (ne révèle pas la raison exacte aux bots). */
      message: string;
      /** Secondes avant la prochaine fenêtre de réessai possible. */
      retryAfterSec: number;
    };

/**
 * Hash email pour dédup sans stocker en clair (évite PII dans les logs).
 * SHA-256 tronqué base64url 12 chars = collision négligeable à notre échelle.
 */
export function hashEmail(email: string | undefined | null): string | null {
  if (!email) return null;
  const normalised = email.trim().toLowerCase();
  if (!normalised) return null;
  return createHash("sha256")
    .update(normalised)
    .digest("base64url")
    .slice(0, 12);
}

/**
 * Repli mémoire, utilisé UNIQUEMENT quand la base ne répond pas.
 *
 * Sans lui, une indisponibilité Neon refusait 100 % des soumissions : le
 * compteur est vérifié avant tout, et son échec renvoyait un 503. Or le chemin
 * qui compte vraiment — l'e-mail à l'équipe — restait, lui, parfaitement
 * fonctionnel. On refusait donc des prospects pour protéger un journal.
 *
 * L'arbitrage est assumé : pendant une panne de base, mieux vaut recevoir le
 * lead par e-mail sans pouvoir l'enregistrer que ne pas le recevoir du tout.
 * Le plafond est délibérément bas et par instance — il ne prétend pas borner un
 * attaquant distribué, seulement empêcher qu'une panne de base ouvre la porte
 * en grand. Le honeypot et le contrôle anti-robot signé, eux, restent actifs :
 * ils ne dépendent d'aucune base.
 */
const degradedStore = createRateLimitStore();
const DEGRADED_WINDOW_MS = HOUR_MS;

function degradedPerIpHour(): number {
  const raw = parseInt(process.env.INQUIRY_DEGRADED_PER_IP_HOUR || "", 10);
  return Number.isFinite(raw) && raw > 0 ? raw : 3;
}

export function checkDegradedRateLimit(ip: string): RateLimitDecision {
  gcRateLimitStore(degradedStore);
  const rate = checkRateLimit(degradedStore, ip, {
    windowMs: DEGRADED_WINDOW_MS,
    max: degradedPerIpHour(),
  });

  if (rate.ok) {
    return { allowed: true, reservationId: DEGRADED_RESERVATION_ID, degraded: true };
  }

  return {
    allowed: false,
    reason: "rate_ip_hour",
    message: `Trop de tentatives sur la dernière heure. Réessayez dans une heure ou écrivez-nous à ${CONTACT_EMAIL}.`,
    retryAfterSec: rate.retryAfterSec ?? 3600,
  };
}

/**
 * Vérifie tous les rate limits en UNE seule query SQL (FILTER WHERE).
 * Filtre sur le service indiqué pour partitionner les compteurs.
 */
export async function checkServiceRateLimit(
  ip: string,
  email: string | undefined | null,
  service: ServiceId,
  userAgent?: string | null,
): Promise<RateLimitDecision> {
  const limits = SERVICE_LIMITS[service];
  const emailHash = hashEmail(email);
  const now = new Date();
  const oneHourAgo = new Date(now.getTime() - HOUR_MS);
  const oneDayAgo = new Date(now.getTime() - DAY_MS);

  // Une seule requête prend un verrou transactionnel par service, lit les
  // compteurs puis insère la réservation. Deux appels concurrents ne peuvent
  // plus tous observer le même compteur avant leur INSERT.
  const result = await withQueryTimeout("check", () =>
    getDb().execute(sql`
    WITH rate_lock AS (
      SELECT pg_advisory_xact_lock(hashtext(${"hagnere-code-rate:" + service})) AS locked
    ),
    counters AS (
      SELECT
        COUNT(*) FILTER (
          WHERE status = 'reserved'
            AND ip = ${ip}
            AND created_at >= ${oneHourAgo}
        )::int AS ip_hour,
        COUNT(*) FILTER (
          WHERE status = 'reserved'
            AND ip = ${ip}
        )::int AS ip_day,
        COUNT(*) FILTER (
          WHERE status = 'reserved'
            AND email_hash = ${emailHash}
        )::int AS email_day,
        COUNT(*) FILTER (WHERE status = 'reserved')::int AS global_day,
        COALESCE(
          SUM(tokens_used) FILTER (WHERE status = 'reserved'),
          0
        )::bigint AS cost_day,
        COUNT(*) FILTER (
          WHERE status = 'released'
            AND ip = ${ip}
            AND created_at >= ${oneHourAgo}
        )::int AS released_ip_hour,
        COUNT(*) FILTER (WHERE status = 'released')::int AS released_global_day
      FROM ai_call_log, rate_lock
      WHERE service = ${service}
        AND created_at >= ${oneDayAgo}
    ),
    reservation AS (
      INSERT INTO ai_call_log (
        service, ip, email_hash, status, block_reason, tokens_used,
        duration_ms, brief_id, user_agent
      )
      SELECT
        ${service}, ${ip}, ${emailHash}, 'reserved', NULL, 0,
        NULL, NULL, ${userAgent?.slice(0, 500) || null}
      FROM counters
      WHERE ip_hour < ${limits.perIpHour}
        AND ip_day < ${limits.perIpDay}
        AND global_day < ${limits.globalDay}
        AND (
          ${limits.perEmailDay === null || !emailHash}
          OR email_day < ${limits.perEmailDay ?? 0}
        )
        AND (
          ${limits.costBreaker === null}
          OR cost_day < ${limits.costBreaker ?? 0}
        )
        AND (
          ${limits.releasedPerIpHour === null}
          OR released_ip_hour < ${limits.releasedPerIpHour ?? 0}
        )
        AND (
          ${limits.releasedGlobalDay === null}
          OR released_global_day < ${limits.releasedGlobalDay ?? 0}
        )
      RETURNING id
    )
    SELECT
      counters.*,
      reservation.id AS reservation_id
    FROM counters
    LEFT JOIN reservation ON TRUE
  `),
  );

  const row = (result as unknown as { rows: Array<Record<string, number | string>> }).rows?.[0];
  if (!row) throw new Error("Rate-limit reservation returned no row");

  const ipHour = Number(row.ip_hour) || 0;
  const ipDay = Number(row.ip_day) || 0;
  const emailDay = Number(row.email_day) || 0;
  const globalDay = Number(row.global_day) || 0;
  const costDay = Number(row.cost_day) || 0;
  const releasedIpHour = Number(row.released_ip_hour) || 0;
  const releasedGlobalDay = Number(row.released_global_day) || 0;
  const reservationId = Number(row.reservation_id) || 0;

  if (reservationId > 0) {
    return { allowed: true, reservationId };
  }

  // Les messages sont affichés tels quels au visiteur : ils vouvoient comme
  // le reste du site et rappellent toujours un canal de secours.
  //
  // Circuit breaker coût en premier — protection ultime
  if (limits.costBreaker !== null && costDay >= limits.costBreaker) {
    return {
      allowed: false,
      reason: "cost_breaker",
      message: `Service temporairement indisponible (volume exceptionnel). Réessayez demain ou écrivez à ${CONTACT_EMAIL}.`,
      retryAfterSec: 3600,
    };
  }

  // Global daily cap
  if (globalDay >= limits.globalDay) {
    return {
      allowed: false,
      reason: "rate_global_day",
      message: `Le service est très demandé aujourd'hui. Réessayez dans quelques heures ou écrivez-nous à ${CONTACT_EMAIL}.`,
      retryAfterSec: 3600,
    };
  }

  // Per-email cap (anti-spam même boîte) — uniquement si applicable
  if (limits.perEmailDay !== null && emailHash && emailDay >= limits.perEmailDay) {
    return {
      allowed: false,
      reason: "rate_email_day",
      message: `Vous avez déjà soumis plusieurs demandes aujourd'hui. Si votre projet est précis, écrivez-nous à ${CONTACT_EMAIL}.`,
      retryAfterSec: DAY_MS / 1000,
    };
  }

  // Per-IP daily cap
  if (ipDay >= limits.perIpDay) {
    return {
      allowed: false,
      reason: "rate_ip_day",
      message: `Trop de tentatives depuis votre réseau aujourd'hui. Réessayez demain ou écrivez-nous à ${CONTACT_EMAIL}.`,
      retryAfterSec: DAY_MS / 1000,
    };
  }

  // Per-IP hourly cap
  if (ipHour >= limits.perIpHour) {
    return {
      allowed: false,
      reason: "rate_ip_hour",
      message: `Trop de tentatives sur la dernière heure. Réessayez dans une heure ou écrivez-nous à ${CONTACT_EMAIL}.`,
      retryAfterSec: HOUR_MS / 1000,
    };
  }

  // Plafonds des tentatives relâchées — atteints uniquement par un
  // martèlement automatisé, jamais par un prospect qui corrige sa saisie.
  if (
    limits.releasedGlobalDay !== null &&
    releasedGlobalDay >= limits.releasedGlobalDay
  ) {
    return {
      allowed: false,
      reason: "rate_retry_global_day",
      message: `Le service est très demandé aujourd'hui. Réessayez dans quelques heures ou écrivez-nous à ${CONTACT_EMAIL}.`,
      retryAfterSec: 3600,
    };
  }

  if (
    limits.releasedPerIpHour !== null &&
    releasedIpHour >= limits.releasedPerIpHour
  ) {
    return {
      allowed: false,
      reason: "rate_retry_ip_hour",
      message: `Trop de tentatives infructueuses sur la dernière heure. Réessayez dans une heure ou écrivez-nous à ${CONTACT_EMAIL}.`,
      retryAfterSec: HOUR_MS / 1000,
    };
  }

  throw new Error("Rate-limit reservation failed without a matching limit");
}

/**
 * Attache l'adresse hachée à une réservation après captcha et validation.
 * Cela empêche un tiers de consommer le quota d'une victime en soumettant son
 * adresse avec un calcul faux. Le verrou conserve un plafond email atomique.
 */
export async function bindReservationEmail(
  reservationId: number,
  service: ServiceId,
  email: string,
): Promise<RateLimitDecision> {
  // Mode dégradé : pas de réservation à laquelle attacher l'adresse. Le
  // plafond par e-mail est perdu pendant la panne — c'est le prix assumé pour
  // continuer à recevoir les demandes, et le repli mémoire par IP reste devant.
  if (reservationId === DEGRADED_RESERVATION_ID) {
    return { allowed: true, reservationId };
  }

  const limits = SERVICE_LIMITS[service];
  const emailLimit = limits.perEmailDay;
  const emailHash = hashEmail(email);
  if (!emailHash || emailLimit === null) {
    return { allowed: true, reservationId };
  }
  if (!Number.isInteger(reservationId) || reservationId <= 0) {
    throw new Error("Email binding requires a valid rate-limit reservation");
  }

  const oneDayAgo = new Date(Date.now() - DAY_MS);
  const result = await withQueryTimeout("bind_email", () =>
    getDb().execute(sql`
    WITH rate_lock AS (
      SELECT pg_advisory_xact_lock(hashtext(${"hagnere-code-rate:" + service})) AS locked
    ),
    email_total AS (
      SELECT COUNT(*)::int AS value
      FROM ai_call_log, rate_lock
      WHERE service = ${service}
        AND email_hash = ${emailHash}
        AND status = 'reserved'
        AND created_at >= ${oneDayAgo}
        AND id <> ${reservationId}
    ),
    updated AS (
      UPDATE ai_call_log
      SET email_hash = ${emailHash}
      FROM email_total
      WHERE ai_call_log.id = ${reservationId}
        AND ai_call_log.service = ${service}
        AND ai_call_log.status = 'reserved'
        AND email_total.value < ${emailLimit}
      RETURNING ai_call_log.id
    )
    SELECT email_total.value AS email_day, updated.id AS reservation_id
    FROM email_total
    LEFT JOIN updated ON TRUE
  `),
  );

  const row = (result as unknown as {
    rows: Array<Record<string, number | string | null>>;
  }).rows?.[0];
  if (!row) throw new Error("Email rate-limit binding returned no row");
  const updatedId = Number(row.reservation_id) || 0;
  if (updatedId > 0) return { allowed: true, reservationId: updatedId };

  if ((Number(row.email_day) || 0) >= emailLimit) {
    return {
      allowed: false,
      reason: "rate_email_day",
      // Ce refus vise le prospect le PLUS engagé du parcours — celui qui a
      // déjà écrit un brief et revient corriger une coordonnée. C'était le
      // seul message du fichier à dire « écrivez-nous directement » sans
      // dire où : on l'aligne sur les sept autres.
      message: `Cette adresse a déjà soumis plusieurs demandes aujourd'hui. Réessayez demain ou écrivez-nous à ${CONTACT_EMAIL}.`,
      retryAfterSec: DAY_MS / 1000,
    };
  }

  throw new Error("Email binding failed without a matching limit");
}

/**
 * Réserve atomiquement le coût réel une fois le fichier validé, mais avant
 * l'appel Groq. Les réservations concurrentes sont sérialisées par le même
 * verrou que le compteur principal.
 */
export async function reserveServiceCost(
  reservationId: number,
  service: ServiceId,
  tokensUsed: number,
): Promise<RateLimitDecision> {
  const limits = SERVICE_LIMITS[service];
  if (limits.costBreaker === null) {
    return { allowed: true, reservationId };
  }

  const oneDayAgo = new Date(Date.now() - DAY_MS);
  const safeTokens = Math.max(0, Math.trunc(tokensUsed));
  const result = await withQueryTimeout("reserve_cost", () =>
    getDb().execute(sql`
    WITH rate_lock AS (
      SELECT pg_advisory_xact_lock(hashtext(${"hagnere-code-rate:" + service})) AS locked
    ),
    totals AS (
      SELECT COALESCE(SUM(tokens_used), 0)::bigint AS cost_day
      FROM ai_call_log, rate_lock
      WHERE service = ${service}
        AND status = 'reserved'
        AND created_at >= ${oneDayAgo}
        AND id <> ${reservationId}
    ),
    updated AS (
      UPDATE ai_call_log
      SET tokens_used = ${safeTokens}
      FROM totals
      WHERE ai_call_log.id = ${reservationId}
        AND ai_call_log.service = ${service}
        AND ai_call_log.status = 'reserved'
        AND totals.cost_day + ${safeTokens} <= ${limits.costBreaker}
      RETURNING ai_call_log.id
    )
    SELECT totals.cost_day, updated.id AS reservation_id
    FROM totals
    LEFT JOIN updated ON TRUE
  `),
  );
  const row = (result as unknown as {
    rows: Array<Record<string, number | string | null>>;
  }).rows?.[0];
  if (!row) throw new Error("Cost reservation returned no row");
  const updatedId = Number(row.reservation_id) || 0;
  if (updatedId > 0) {
    // Alerte à mi-parcours du disjoncteur : on veut voir l'abus AVANT
    // l'indisponibilité totale du service, pas après.
    const costDay = Number(row.cost_day) || 0;
    const projected = costDay + safeTokens;
    if (projected >= limits.costBreaker / 2) {
      log.warn("service_cost_breaker_half_reached", {
        service,
        costDay: projected,
        costBreaker: limits.costBreaker,
      });
    }
    return { allowed: true, reservationId: updatedId };
  }

  return {
    allowed: false,
    reason: "cost_breaker",
    message:
      "Service temporairement indisponible (volume exceptionnel). Réessayez demain ou saisissez votre texte.",
    retryAfterSec: 3600,
  };
}

/**
 * Rend le créneau réservé au visiteur : la ligne passe de 'reserved' à
 * 'released' et sort donc des compteurs principaux. Utilisé quand l'échec
 * n'est pas imputable à un abus — champs invalides ou panne d'envoi côté
 * site. Sans cela, cinq maladresses suffisaient à bloquer un prospect une
 * heure entière alors qu'aucune demande n'avait été transmise.
 *
 * Une réservation qui porte déjà un coût réel (`tokens_used > 0`, cas Groq)
 * n'est jamais libérée : le disjoncteur coût doit garder la mémoire de la
 * dépense engagée.
 */
export async function releaseReservation(args: {
  reservationId: number;
  service: ServiceId;
  reason: ReleaseReason;
  briefId?: number | null;
}): Promise<void> {
  // Mode dégradé : aucune ligne n'a été réservée, il n'y a rien à relâcher —
  // et la base qui a provoqué le repli est de toute façon injoignable.
  if (args.reservationId === DEGRADED_RESERVATION_ID) return;
  try {
    if (!Number.isInteger(args.reservationId) || args.reservationId <= 0) {
      throw new Error("Reservation release requires a valid reservation");
    }
    await withQueryTimeout("release", () =>
      getDb().execute(sql`
      UPDATE ai_call_log
      SET status = 'released',
          block_reason = ${args.reason},
          brief_id = COALESCE(${args.briefId ?? null}, brief_id)
      WHERE id = ${args.reservationId}
        AND service = ${args.service}
        AND status = 'reserved'
        AND tokens_used = 0
    `),
    );
  } catch (err) {
    // Échec fermé : le créneau reste consommé, ce qui est le comportement
    // historique. On logge pour pouvoir alerter sur un taux anormal.
    log.error("ai_call_release_failed", {
      err: err as Error,
      service: args.service,
      reason: args.reason,
    });
  }
}

/**
 * Journalise l'issue d'une tentative déjà réservée. L'INSERT est conditionné
 * à l'existence de la réservation correspondante : un refus avant réservation
 * (limite déjà atteinte, payload trop gros, etc.) ne peut donc pas faire
 * grossir la table sans borne.
 */
export async function logAiCall(args: {
  reservationId: number;
  service: ServiceId;
  ip: string;
  email?: string | null;
  status: "ok" | "ai_error" | "blocked" | "validation";
  blockReason?: BlockReason;
  tokensUsed?: number;
  durationMs?: number;
  briefId?: number | null;
  userAgent?: string | null;
}): Promise<void> {
  // Mode dégradé : aucune ligne à mettre à jour, et la base est injoignable.
  // Le journal de cette requête est perdu — c'est le seul effet accepté ici.
  if (args.reservationId === DEGRADED_RESERVATION_ID) return;
  try {
    if (!Number.isInteger(args.reservationId) || args.reservationId <= 0) {
      throw new Error("Outcome log requires a valid rate-limit reservation");
    }
    await withQueryTimeout("log_outcome", () =>
      getDb().execute(sql`
      INSERT INTO ai_call_log (
        service, ip, email_hash, status, block_reason, tokens_used,
        duration_ms, brief_id, user_agent
      )
      SELECT
        ${args.service}, ${args.ip}, ${hashEmail(args.email)}, ${args.status},
        ${args.blockReason || null}, ${args.tokensUsed || 0},
        ${args.durationMs || null}, ${args.briefId ?? null},
        ${args.userAgent?.slice(0, 500) || null}
      FROM ai_call_log AS reservation
      WHERE reservation.id = ${args.reservationId}
        AND reservation.service = ${args.service}
        AND reservation.status = 'reserved'
      LIMIT 1
    `),
    );
  } catch (err) {
    // Loggé pour observabilité — sans propager pour ne pas casser la
    // réponse. Si la DB tombe, le cost breaker est neutralisé silencieusement
    // sinon. Avec ce log, on peut alerter sur le taux d'erreur.
    log.error("ai_call_log_insert_failed", {
      err: err as Error,
      service: args.service,
      status: args.status,
    });
  }
}
