import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "ERP, logiciel standard ou sur mesure : comment choisir ? — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const options = [
  { label: "Standard", color: "#60a5fa" },
  { label: "Configurable", color: "#a78bfa" },
  { label: "ERP + module", color: "#34d399" },
  { label: "Sur mesure", color: "#fbbf24" },
];

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
          "linear-gradient(138deg, #09090b 0%, #111827 48%, #21113d 100%)",
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
            background: "#6d28d9",
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          HC
        </div>
        <div style={{ display: "flex", fontSize: 28, fontWeight: 650 }}>
          Hagnéré Code
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: "auto",
            border: "1px solid rgba(167,139,250,0.42)",
            borderRadius: 999,
            padding: "9px 20px",
            color: "#c4b5fd",
            fontSize: 21,
          }}
        >
          Guide de décision 2026
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 54 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            gap: 18,
          }}
        >
          <div
            style={{
              display: "flex",
              maxWidth: 690,
              fontSize: 52,
              fontWeight: 760,
              lineHeight: 1.06,
              letterSpacing: -2,
            }}
          >
            ERP, logiciel standard ou sur mesure : comment choisir ?
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#a1a1aa" }}>
            Partez du travail réel, pas de la solution préférée du prestataire
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 370,
            padding: 20,
            gap: 10,
            borderRadius: 22,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(255,255,255,0.055)",
            boxShadow: "0 24px 80px rgba(109,40,217,0.22)",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#d4d4d8",
              fontSize: 17,
              fontWeight: 700,
              marginBottom: 2,
            }}
          >
            4 OPTIONS À COMPARER
          </div>
          {options.map((option, index) => (
            <div
              key={option.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "9px 12px",
                borderRadius: 11,
                background: "rgba(255,255,255,0.045)",
                color: "#f4f4f5",
                fontSize: 19,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 25,
                  height: 25,
                  borderRadius: 7,
                  background: option.color,
                  color: "#09090b",
                  fontSize: 14,
                  fontWeight: 800,
                }}
              >
                {index + 1}
              </div>
              {option.label}
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", gap: 12 }}>
        {[
          "Tâches réelles",
          "Coût sur 4 ans",
          "Essai avec l’équipe",
          "Changer de prestataire",
        ].map((label) => (
          <div
            key={label}
            style={{
              display: "flex",
              padding: "11px 18px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.10)",
              color: "#d4d4d8",
              fontSize: 20,
            }}
          >
            {label}
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
