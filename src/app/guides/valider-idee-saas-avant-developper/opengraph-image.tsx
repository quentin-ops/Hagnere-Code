import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Valider une idée SaaS avant de développer — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const decisions = [
  { label: "CONTINUER", color: "#34d399" },
  { label: "PIVOTER", color: "#fbbf24" },
  { label: "ARRÊTER", color: "#fb7185" },
];

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        padding: "58px 64px",
        background:
          "radial-gradient(circle at 90% 14%, rgba(99,102,241,0.38), transparent 32%), linear-gradient(135deg, #070a12 0%, #10172a 56%, #171044 100%)",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          width: "66%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 50,
              height: 50,
              borderRadius: 14,
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              fontSize: 19,
              fontWeight: 800,
            }}
          >
            HC
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: 15,
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            Hagnéré Code
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 58,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 58,
              lineHeight: 1.02,
              letterSpacing: -2.4,
              fontWeight: 800,
            }}
          >
            Valider une idée SaaS avant de développer
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              maxWidth: 650,
              color: "#c7d2fe",
              fontSize: 23,
              lineHeight: 1.35,
            }}
          >
            Tester avant de coder : continuer, changer ou arrêter
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 10,
            marginTop: "auto",
          }}
        >
          {decisions.map((decision) => (
            <div
              key={decision.label}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 14px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.06)",
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: 1.1,
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 8,
                  height: 8,
                  marginRight: 9,
                  borderRadius: 99,
                  background: decision.color,
                }}
              />
              {decision.label}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          width: "34%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            position: "relative",
            width: 296,
            height: 420,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "28px",
            borderRadius: 28,
            border: "1px solid rgba(199,210,254,0.24)",
            background: "rgba(15,23,42,0.76)",
            boxShadow: "0 28px 80px rgba(0,0,0,0.34)",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#a5b4fc",
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 1.7,
            }}
          >
            CARTE DE TEST
          </div>
          {["HYPOTHÈSE", "TEST", "OBSERVATION", "SEUIL"].map((label, index) => (
            <div
              key={label}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  color: "#94a3b8",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 1.2,
                }}
              >
                {label}
              </div>
              <div
                style={{
                  display: "flex",
                  width: index === 1 ? "68%" : "100%",
                  height: 7,
                  marginTop: 10,
                  borderRadius: 9,
                  background:
                    index === 3
                      ? "linear-gradient(90deg, #6366f1, #a78bfa)"
                      : "rgba(255,255,255,0.18)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>,
    size,
  );
}
