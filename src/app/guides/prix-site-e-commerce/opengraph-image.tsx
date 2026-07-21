import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Prix d’un site e-commerce en 2026 : création et fonctionnement";
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
          Tarifs 2026
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div
          style={{
            display: "flex",
            fontSize: 60,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: -2,
            maxWidth: 1020,
          }}
        >
          Quel budget pour vendre en ligne ?
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#a1a1aa" }}>
          Création, fonctionnement, paiement, acquisition et logistique
        </div>
      </div>

      <div style={{ display: "flex", gap: 14 }}>
        {[
          "4 types de boutiques",
          "Coût sur 3 ans",
          "Tous les postes séparés",
        ].map((t) => (
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
        ))}
      </div>
    </div>,
    size,
  );
}
