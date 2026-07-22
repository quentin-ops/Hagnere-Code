import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Construire le budget annuel de maintenance d’une application métier — Hagnéré Code";
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
        padding: 64,
        background:
          "radial-gradient(circle at 83% 18%, rgba(245,158,11,0.18), transparent 34%), linear-gradient(135deg, #09090b 0%, #171124 100%)",
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
            borderRadius: 13,
            background: "linear-gradient(135deg, #7c3aed, #d97706)",
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
            padding: "8px 20px",
            border: "1px solid rgba(251,191,36,0.45)",
            borderRadius: 999,
            color: "#fde68a",
            fontSize: 21,
          }}
        >
          Registre annuel
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div
          style={{
            display: "flex",
            maxWidth: 1040,
            fontSize: 54,
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: -2,
          }}
        >
          Maintenance d’une application : comment construire le budget ?
        </div>
        <div style={{ display: "flex", fontSize: 27, color: "#a1a1aa" }}>
          Factures · contrat · incidents · évolutions · temps interne
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        {["Factures", "Coûts", "À chiffrer", "Décision"].map((label, index) => (
          <div
            key={label}
            style={{ display: "flex", alignItems: "center", gap: 14 }}
          >
            <div
              style={{
                display: "flex",
                padding: "12px 22px",
                borderRadius: 12,
                background:
                  index === 3
                    ? "rgba(217,119,6,0.25)"
                    : "rgba(255,255,255,0.06)",
                border:
                  index === 3
                    ? "1px solid rgba(251,191,36,0.55)"
                    : "1px solid rgba(255,255,255,0.12)",
                color: index === 3 ? "#fde68a" : "#e4e4e7",
                fontSize: 23,
              }}
            >
              {label}
            </div>
            {index < 3 ? (
              <div style={{ display: "flex", color: "#71717a", fontSize: 26 }}>
                →
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
