import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Refonte de site sans perdre son SEO : la méthode complète — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0A0A0A 0%, #1c1030 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 52,
              height: 52,
              borderRadius: 12,
              background: "#6D28D9",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            HC
          </div>
          <div style={{ display: "flex", fontSize: 28, fontWeight: 600 }}>
            Hagnéré Code
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "auto",
              fontSize: 22,
              color: "#A78BFA",
              border: "1px solid rgba(167,139,250,0.4)",
              borderRadius: 999,
              padding: "8px 20px",
            }}
          >
            Méthode 2026
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 56,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: -2,
              maxWidth: 1040,
            }}
          >
            Refonte sans perdre son SEO
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#a1a1aa" }}>
            La méthode complète anti-perte de trafic, sourcée Google
          </div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {["301 : redirection permanente", "Protocole de suivi J+1 → M+3", "Cas WordPress → Next.js chiffré"].map(
            (t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  fontSize: 24,
                  padding: "12px 24px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#e4e4e7",
                }}
              >
                {t}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    size,
  );
}
