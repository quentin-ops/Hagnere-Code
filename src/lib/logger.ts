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

/**
 * Drop sensitive / huge values before they reach the log line.
 * Errors get unwrapped to { name, message, stack }.
 */
function sanitize(ctx: LogContext): LogContext {
  const out: LogContext = {};
  for (const [k, v] of Object.entries(ctx)) {
    if (v instanceof Error) {
      out[k] = { name: v.name, message: v.message, stack: v.stack };
    } else if (typeof v === "string" && v.length > 2000) {
      out[k] = `${v.slice(0, 2000)}…[${v.length - 2000} chars truncated]`;
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
