import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "TJM développeur web en 2026 : le guide de celui qui paie — Hagnéré Code";
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
          background: "linear-gradient(135deg, #0A0A0A 0%, #10231c 100%)",
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
              background: "#059669",
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
              color: "#6EE7B7",
              border: "1px solid rgba(110,231,183,0.4)",
              borderRadius: 999,
              padding: "8px 20px",
            }}
          >
            Baromètres 2026
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
            TJM développeur web
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#a1a1aa" }}>
            Un guide écrit pour celui qui paie
          </div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {["Médiane 530 €/jour en 2026", "Jours-homme par livrable", "Lire un devis en 6 postes"].map(
            (t) => (
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
            ),
          )}
        </div>
      </div>
    ),
    size,
  );
}
