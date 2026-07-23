import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Power Apps ou application sur mesure : cinq tests avant de choisir";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const tests = [
  { number: "1", label: "Utilisateurs", color: "#a78bfa" },
  { number: "2", label: "Données", color: "#60a5fa" },
  { number: "3", label: "Connexions", color: "#fbbf24" },
  { number: "4", label: "Exploitation", color: "#34d399" },
  { number: "5", label: "Sortie", color: "#22d3ee" },
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
        padding: 60,
        background:
          "radial-gradient(circle at 88% 14%, rgba(124,58,237,0.28), transparent 34%), radial-gradient(circle at 8% 95%, rgba(14,165,233,0.20), transparent 35%), linear-gradient(135deg, #09090b, #111827 62%, #082f49)",
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
            background: "linear-gradient(135deg, #7c3aed, #2563eb)",
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
            padding: "9px 18px",
            borderRadius: 999,
            border: "1px solid rgba(167,139,250,0.4)",
            background: "rgba(76,29,149,0.25)",
            color: "#ddd6fe",
            fontSize: 18,
            fontWeight: 650,
          }}
        >
          GUIDE DE DÉCISION
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "flex-end", gap: 48 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            maxWidth: 620,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 58,
              fontWeight: 780,
              lineHeight: 1.03,
              letterSpacing: -2.3,
            }}
          >
            Power Apps ou application sur mesure ?
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 24,
              lineHeight: 1.35,
              color: "#bfdbfe",
            }}
          >
            Décidez sur cinq preuves, pas sur une étiquette
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 420,
            gap: 10,
          }}
        >
          {tests.map((test) => (
            <div
              key={test.number}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "11px 14px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(9,9,11,0.58)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 34,
                  height: 34,
                  borderRadius: 10,
                  background: test.color,
                  color: "#09090b",
                  fontSize: 18,
                  fontWeight: 800,
                }}
              >
                {test.number}
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: 14,
                  fontSize: 21,
                  fontWeight: 650,
                  color: "#f4f4f5",
                }}
              >
                {test.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>,
    size,
  );
}
