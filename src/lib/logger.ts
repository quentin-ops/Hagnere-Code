/**
 * Tiny structured logger. JSON-per-line so Cloudflare/Vercel/Datadog/Sentry
 * can parse it once we wire one up. No dependencies, safe to call from
 * anywhere — this is intentionally a write-and-forget primitive.
 */

type LogLevel = "debug" | "info" | "warn" | "error";

interface LogContext {
  [key: string]: unknown;
}

function emit(level: LogLevel, msg: string, ctx: LogContext = {}): void {
  const payload = {
    ts: new Date().toISOString(),
    level,
    msg,
    ...sanitize(ctx),
  };
  const line = safeStringify(payload);
  if (level === "error") {
    console.error(line);
  } else if (level === "warn") {
    console.warn(line);
  } else {
    console.log(line);
  }
}

function safeStringify(value: unknown): string {
  try {
    return JSON.stringify(value);
  } catch {
    return JSON.stringify({ msg: "[logger serialization failed]" });
  }
}

function redactSensitiveText(value: string): string {
  return value
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, "[email-redacted]")
    .replace(/\b(?:\d[ .-]?){9}\b/g, "[identifier-redacted]")
    .replace(/Bearer\s+[A-Za-z0-9._~+\/-]+=*/gi, "Bearer [redacted]");
}

/**
 * Drop sensitive / huge values before they reach the log line.
 * En production, une Error est réduite à son nom. Hors production, son
 * message et sa stack sont conservés après masquage pour faciliter le debug.
 */
function sanitize(ctx: LogContext): LogContext {
  const out: LogContext = {};
  for (const [k, v] of Object.entries(ctx)) {
    if (v instanceof Error) {
      out[k] = {
        name: v.name,
        ...(process.env.NODE_ENV !== "production"
          ? {
              message: redactSensitiveText(v.message),
              ...(v.stack ? { stack: redactSensitiveText(v.stack) } : {}),
            }
          : {}),
      };
    } else if (typeof v === "string" && v.length > 2000) {
      out[k] = `${redactSensitiveText(v.slice(0, 2000))}…[${v.length - 2000} chars truncated]`;
    } else if (typeof v === "string") {
      out[k] = redactSensitiveText(v);
    } else {
      out[k] = v;
    }
  }
  return out;
}

export const log = {
  debug: (msg: string, ctx?: LogContext) => emit("debug", msg, ctx),
  info: (msg: string, ctx?: LogContext) => emit("info", msg, ctx),
  warn: (msg: string, ctx?: LogContext) => emit("warn", msg, ctx),
  error: (msg: string, ctx?: LogContext) => emit("error", msg, ctx),
};
