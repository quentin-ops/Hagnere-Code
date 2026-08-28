import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tarifs Hagnéré Code — forfait fixe et prix publics hors taxes";
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
          background: "linear-gradient(135deg, #09090b 0%, #24123f 100%)",
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
              color: "#c4b5fd",
              border: "1px solid rgba(196,181,253,0.4)",
              borderRadius: 999,
              padding: "8px 20px",
            }}
          >
            Tarifs publics
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 62,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -2,
              maxWidth: 1020,
            }}
          >
            Des repères de prix publics, hors taxes
          </div>
          <div style={{ display: "flex", fontSize: 29, color: "#a1a1aa" }}>
            Forfait fixe contractuel, prix ferme arrêté au devis
          </div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {["Discovery Sprint 1 500 € HT", "Forfait fixe", "Avenant chiffré"].map((item) => (
            <div
              key={item}
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
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
