import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "MVP SaaS : les sept indispensables pour servir un premier client";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const layers = [
  { label: "ACCÈS", color: "#a78bfa" },
  { label: "TÂCHE PRINCIPALE", color: "#818cf8" },
  { label: "DONNÉES", color: "#60a5fa" },
  { label: "SAUVEGARDE", color: "#38bdf8" },
  { label: "AIDE", color: "#2dd4bf" },
  { label: "PAIEMENT", color: "#34d399" },
  { label: "ADMINISTRATION", color: "#a3e635" },
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
          "radial-gradient(circle at 82% 18%, rgba(124,58,237,0.27), transparent 31%), radial-gradient(circle at 72% 88%, rgba(16,185,129,0.17), transparent 32%), linear-gradient(135deg, #09090b 0%, #111827 58%, #052e2b 100%)",
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
            border: "1px solid rgba(167,139,250,0.38)",
            background: "rgba(76,29,149,0.21)",
            color: "#ddd6fe",
            fontSize: 20,
          }}
        >
          Guide MVP SaaS B2B
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 46,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            maxWidth: 650,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 57,
              fontWeight: 780,
              lineHeight: 1.03,
              letterSpacing: -2,
            }}
          >
            Que faut-il inclure dans un MVP SaaS ?
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              maxWidth: 610,
              fontSize: 23,
              lineHeight: 1.35,
              color: "#c4b5fd",
            }}
          >
            Une petite version, mais un service vraiment utilisable
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 400,
            padding: 20,
            gap: 7,
            borderRadius: 25,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(9,9,11,0.51)",
            boxShadow: "0 24px 90px rgba(124,58,237,0.24)",
          }}
        >
          <div
            style={{
              display: "flex",
              marginBottom: 4,
              color: "#a1a1aa",
              fontSize: 15,
              letterSpacing: 1.5,
            }}
          >
            7 INDISPENSABLES
          </div>
          {layers.map((layer, index) => (
            <div
              key={layer.label}
              style={{
                display: "flex",
                alignItems: "center",
                minHeight: 38,
                padding: "6px 11px",
                borderRadius: 11,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.045)",
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
                  background: layer.color,
                  color: "#09090b",
                  fontSize: 13,
                  fontWeight: 850,
                }}
              >
                {index + 1}
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: 11,
                  fontSize: 16,
                  fontWeight: 730,
                }}
              >
                {layer.label}
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: "auto",
                  color: "#a1a1aa",
                  fontSize: 14,
                }}
              >
                inclus
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {["À construire", "Peut rester manuel", "Peut attendre"].map(
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
