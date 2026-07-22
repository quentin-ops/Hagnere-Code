import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Remplacer Microsoft Access par une application web — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const layers = [
  { label: "DONNÉES", color: "#a78bfa" },
  { label: "ÉCRANS", color: "#60a5fa" },
  { label: "RÈGLES", color: "#34d399" },
  { label: "DOCUMENTS", color: "#fbbf24" },
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
          "radial-gradient(circle at 85% 18%, rgba(37,99,235,0.28), transparent 32%), radial-gradient(circle at 13% 89%, rgba(124,58,237,0.26), transparent 37%), #09090b",
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
            padding: "9px 19px",
            borderRadius: 999,
            border: "1px solid rgba(167,139,250,0.36)",
            background: "rgba(76,29,149,0.18)",
            color: "#ddd6fe",
            fontSize: 20,
          }}
        >
          Guide pour dirigeants
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 52,
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{
              display: "flex",
              maxWidth: 720,
              fontSize: 51,
              fontWeight: 760,
              lineHeight: 1.06,
              letterSpacing: -2,
            }}
          >
            Remplacer Access sans perdre le fonctionnement métier
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 24,
              color: "#c4b5fd",
            }}
          >
            Inventorier, choisir une trajectoire, tester la reprise
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 330,
            gap: 11,
            padding: 20,
            borderRadius: 24,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(255,255,255,0.055)",
          }}
        >
          {layers.map((layer, index) => (
            <div
              key={layer.label}
              style={{
                display: "flex",
                alignItems: "center",
                minHeight: 58,
                padding: "11px 14px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.09)",
                background: "rgba(9,9,11,0.43)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 30,
                  height: 30,
                  borderRadius: 9,
                  background: layer.color,
                  color: "#09090b",
                  fontSize: 14,
                  fontWeight: 800,
                }}
              >
                {index + 1}
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: 14,
                  fontSize: 17,
                  fontWeight: 760,
                }}
              >
                {layer.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {["Garder", "Migrer les données", "Remplacer", "Reconstruire"].map(
          (label) => (
            <div
              key={label}
              style={{
                display: "flex",
                padding: "10px 17px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.055)",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "#d4d4d8",
                fontSize: 18,
              }}
            >
              {label}
            </div>
          ),
        )}
      </div>
    </div>,
    size,
  );
}
