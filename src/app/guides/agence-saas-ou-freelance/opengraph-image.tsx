import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Agence SaaS ou freelance : choisir les responsabilités avant le statut";
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
        background:
          "radial-gradient(circle at 82% 18%, rgba(59,130,246,0.24), transparent 32%), linear-gradient(135deg, #09090b 0%, #1d1235 100%)",
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
            background: "#7c3aed",
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
            fontSize: 21,
            color: "#bfdbfe",
            border: "1px solid rgba(147,197,253,0.35)",
            borderRadius: 999,
            padding: "9px 20px",
          }}
        >
          Décision SaaS
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div
          style={{
            display: "flex",
            maxWidth: 1040,
            fontSize: 57,
            fontWeight: 750,
            lineHeight: 1.08,
            letterSpacing: -2,
          }}
        >
          Agence ou freelance pour votre SaaS ?
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: 980,
            fontSize: 29,
            color: "#d4d4d8",
          }}
        >
          Choisissez les responsabilités et les personnes avant le statut
        </div>
      </div>

      <div style={{ display: "flex", gap: 14 }}>
        {[
          ["01", "Prochaine étape"],
          ["02", "Équipe réelle"],
          ["03", "Continuité"],
          ["04", "Actifs repris"],
        ].map(([number, label]) => (
          <div
            key={number}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 20px",
              borderRadius: 14,
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.13)",
              fontSize: 21,
              color: "#f4f4f5",
            }}
          >
            <span style={{ color: "#a78bfa", fontWeight: 700 }}>{number}</span>
            {label}
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
