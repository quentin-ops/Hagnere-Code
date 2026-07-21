import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "No-code ou développement sur mesure : comment choisir ? — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
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
          Guide 2026
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div
          style={{
            display: "flex",
            fontSize: 54,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: -2,
            maxWidth: 1040,
          }}
        >
          No-code ou sur-mesure
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#a1a1aa" }}>
          Comment choisir pour votre entreprise ?
        </div>
      </div>

      <div style={{ display: "flex", gap: 14 }}>
        {[
          "Coûts sur plusieurs années",
          "Limites des outils",
          "Quand choisir chaque solution",
        ].map((t) => (
          <div
            key={t}
            style={{
              display: "flex",
              fontSize: 23,
              padding: "12px 22px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#e4e4e7",
            }}
          >
            {t}
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
