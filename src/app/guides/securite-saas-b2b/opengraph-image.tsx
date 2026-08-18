import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Cinq contrôles essentiels et une famille d’autres exigences pour décider avant une vente SaaS B2B";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const checks = [
  "Accès",
  "Isolement",
  "Restauration",
  "Logiciel",
  "Incident",
  "Autres exigences",
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
          "radial-gradient(circle at 86% 16%, rgba(34,197,94,0.22), transparent 30%), radial-gradient(circle at 12% 92%, rgba(59,130,246,0.20), transparent 34%), linear-gradient(135deg, #07111f 0%, #0f172a 55%, #052e2b 100%)",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <div
          style={{
            width: 52,
            height: 52,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 14,
            background: "linear-gradient(135deg, #2563eb, #059669)",
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
            border: "1px solid rgba(110,231,183,0.35)",
            background: "rgba(6,78,59,0.34)",
            color: "#a7f3d0",
            fontSize: 17,
            fontWeight: 650,
          }}
        >
          AVANT LA SIGNATURE
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 48 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 610,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 56,
              fontWeight: 780,
              lineHeight: 1.04,
              letterSpacing: -2,
            }}
          >
            Sécurité SaaS B2B : prouvez, planifiez ou suspendez
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 22,
              lineHeight: 1.35,
              color: "#bfdbfe",
            }}
          >
            5 contrôles essentiels + 1 famille d’autres exigences
          </div>
        </div>

        <div
          style={{
            width: 420,
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            padding: 24,
            borderRadius: 26,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(2,6,23,0.58)",
          }}
        >
          {checks.map((check, index) => (
            <div
              key={check}
              style={{
                width: 178,
                display: "flex",
                alignItems: "center",
                padding: "13px 14px",
                borderRadius: 13,
                border: "1px solid rgba(255,255,255,0.09)",
                background: "rgba(255,255,255,0.055)",
                color: "#e2e8f0",
                fontSize: 17,
                fontWeight: 650,
              }}
            >
              <span
                style={{
                  width: 25,
                  height: 25,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 10,
                  borderRadius: 999,
                  background: index < 3 ? "#059669" : "#1d4ed8",
                  color: "white",
                  fontSize: 13,
                }}
              >
                {index + 1}
              </span>
              {check}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", gap: 12 }}>
          {[
            ["PROUVÉ", "#34d399"],
            ["PLANIFIÉ", "#fbbf24"],
            ["BLOQUANT", "#fb7185"],
          ].map(([label, color]) => (
            <div
              key={label}
              style={{
                display: "flex",
                padding: "9px 16px",
                borderRadius: 999,
                border: `1px solid ${color}66`,
                color,
                fontSize: 15,
                fontWeight: 700,
              }}
            >
              {label}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            color: "#a7f3d0",
            fontSize: 17,
            fontWeight: 650,
          }}
        >
          hagnere-code.ai
        </div>
      </div>
    </div>,
    { ...size },
  );
}
