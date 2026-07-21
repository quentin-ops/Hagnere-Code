import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Template ou site sur mesure : choisir selon son budget et ses besoins";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const levels = [
  ["0", "CORRIGER", "#a1a1aa"],
  ["1", "TEMPLATE", "#60a5fa"],
  ["2", "PERSONNALISER", "#22d3ee"],
  ["3", "SUR MESURE", "#fbbf24"],
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
          "radial-gradient(circle at 84% 13%, rgba(139,92,246,0.25), transparent 31%), radial-gradient(circle at 74% 92%, rgba(34,211,238,0.16), transparent 33%), linear-gradient(135deg, #09090b 0%, #18181b 59%, #2e1065 100%)",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 52,
            height: 52,
            borderRadius: 14,
            background: "linear-gradient(135deg, #7c3aed, #0891b2)",
            fontSize: 21,
            fontWeight: 750,
          }}
        >
          HC
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: 16,
            fontSize: 28,
            fontWeight: 650,
          }}
        >
          Hagnéré Code
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: "auto",
            padding: "9px 19px",
            borderRadius: 999,
            border: "1px solid rgba(167,139,250,0.40)",
            background: "rgba(76,29,149,0.22)",
            color: "#ddd6fe",
            fontSize: 20,
          }}
        >
          Guide de décision
        </div>
      </div>

      <div style={{ display: "flex", width: "100%", alignItems: "flex-end" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 680,
            paddingRight: 44,
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#c4b5fd",
              fontSize: 19,
              fontWeight: 750,
              letterSpacing: 2.2,
            }}
          >
            SITE VITRINE
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 12,
              fontSize: 53,
              fontWeight: 780,
              lineHeight: 1.03,
              letterSpacing: -1.8,
            }}
          >
            Quel niveau mérite votre budget ?
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 21,
              fontSize: 22,
              lineHeight: 1.35,
              color: "#d4d4d8",
            }}
          >
            Comparez le budget, l’autonomie et l’entretien.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 390,
            gap: 7,
          }}
        >
          {levels.map(([number, label, color], index) => (
            <div
              key={number}
              style={{
                display: "flex",
                alignItems: "center",
                width: 230 + index * 40,
                height: 49,
                marginLeft: 160 - index * 40,
                padding: "0 16px",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.13)",
                background: "rgba(255,255,255,0.055)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 25,
                  height: 25,
                  borderRadius: 8,
                  background: color,
                  color: "#09090b",
                  fontSize: 13,
                  fontWeight: 850,
                }}
              >
                {number}
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: 11,
                  color,
                  fontSize: 14,
                  fontWeight: 780,
                  letterSpacing: 0.7,
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          paddingTop: 21,
          borderTop: "1px solid rgba(255,255,255,0.12)",
          color: "#a1a1aa",
          fontSize: 19,
        }}
      >
        <div style={{ display: "flex" }}>
          Template, personnalisation ou conception complète
        </div>
        <div style={{ display: "flex", marginLeft: "auto", color: "#e4e4e7" }}>
          hagnere-code.ai/guides
        </div>
      </div>
    </div>,
    size,
  );
}
