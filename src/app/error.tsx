"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
       
      console.error("App error boundary:", error);
    }
  }, [error]);

  return (
    <main
      id="main-content"
      tabIndex={-1}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
        background: "#fafafa",
        color: "#0a0a0a",
      }}
    >
      <Link
        href="/"
        aria-label="Retour à l'accueil Hagnéré Code"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 32,
          textDecoration: "none",
          color: "#0a0a0a",
          fontFamily: "var(--font-geist), system-ui, sans-serif",
        }}
      >
        <span
          style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            background: "#0a0a0a",
            color: "#fff",
            display: "grid",
            placeItems: "center",
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          HC
        </span>
        <span style={{ fontSize: 16 }}>
          <b>Hagnéré</b> <span style={{ color: "#737373" }}>Code</span>
        </span>
      </Link>

      <p
        style={{
          fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
          fontSize: 13,
          color: "#737373",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          margin: 0,
        }}
      >
        Erreur 500
      </p>

      <h1
        style={{
          fontFamily: "var(--font-geist), system-ui, sans-serif",
          fontSize: "clamp(28px, 4vw, 48px)",
          lineHeight: 1.1,
          margin: "16px 0 12px",
          maxWidth: 720,
          textAlign: "center",
        }}
      >
        Une erreur est survenue <span style={{ color: "#737373" }}>côté serveur.</span>
      </h1>

      <p
        style={{
          fontFamily: "var(--font-geist), system-ui, sans-serif",
          fontSize: 16,
          color: "#525252",
          maxWidth: 540,
          textAlign: "center",
          margin: 0,
          lineHeight: 1.55,
        }}
      >
        L&apos;équipe a été notifiée. Vous pouvez réessayer dans un instant
        ou revenir à l&apos;accueil.
      </p>

      {error.digest && (
        <p
          style={{
            fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
            fontSize: 11,
            color: "#a3a3a3",
            marginTop: 12,
            letterSpacing: "0.04em",
          }}
        >
          Référence&nbsp;: {error.digest}
        </p>
      )}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          marginTop: 32,
          justifyContent: "center",
        }}
      >
        <button
          type="button"
          onClick={reset}
          style={{
            background: "#0a0a0a",
            color: "#fff",
            padding: "12px 18px",
            borderRadius: 10,
            fontWeight: 600,
            fontSize: 14,
            border: "none",
            cursor: "pointer",
          }}
        >
          Réessayer
        </button>
        <Link
          href="/"
          style={{
            background: "#fff",
            color: "#0a0a0a",
            padding: "12px 18px",
            borderRadius: 10,
            fontWeight: 600,
            fontSize: 14,
            textDecoration: "none",
            border: "1px solid #e5e5e5",
          }}
        >
          Retour accueil
        </Link>
        <Link
          href="/contact"
          style={{
            background: "#fff",
            color: "#0a0a0a",
            padding: "12px 18px",
            borderRadius: 10,
            fontWeight: 600,
            fontSize: 14,
            textDecoration: "none",
            border: "1px solid #e5e5e5",
          }}
        >
          Nous contacter
        </Link>
      </div>
    </main>
  );
}
