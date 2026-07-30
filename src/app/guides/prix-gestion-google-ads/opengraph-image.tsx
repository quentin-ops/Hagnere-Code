import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Prix d’une gestion Google Ads : comparer le coût complet — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const models = [
  { label: "FORFAIT", color: "#818cf8" },
  { label: "POURCENTAGE", color: "#60a5fa" },
  { label: "HYBRIDE", color: "#34d399" },
  { label: "TEMPS PASSÉ", color: "#fbbf24" },
];

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        padding: "56px 62px",
        background:
          "radial-gradient(circle at 88% 12%, rgba(99,102,241,0.4), transparent 34%), linear-gradient(135deg, #070a12 0%, #111827 56%, #172554 100%)",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          width: "64%",
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
              background: "linear-gradient(135deg, #4f46e5, #8b5cf6)",
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
            marginTop: 55,
          }}
        >
          <div
            style={{
              display: "flex",
              maxWidth: 700,
              fontSize: 55,
              lineHeight: 1.03,
              letterSpacing: -2.2,
              fontWeight: 800,
            }}
          >
            Prix d’une gestion Google Ads
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              maxWidth: 660,
              color: "#c7d2fe",
              fontSize: 23,
              lineHeight: 1.35,
            }}
          >
            Comparez le coût complet à 3, 6 et 12 mois
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 10,
            marginTop: "auto",
          }}
        >
          {["MÉDIA SÉPARÉ", "TVA VISIBLE", "TEMPS INTERNE"].map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                padding: "10px 13px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.06)",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: 1.05,
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          width: "36%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            width: 320,
            height: 440,
            display: "flex",
            flexDirection: "column",
            padding: "27px",
            borderRadius: 28,
            border: "1px solid rgba(199,210,254,0.24)",
            background: "rgba(15,23,42,0.8)",
            boxShadow: "0 28px 80px rgba(0,0,0,0.34)",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#a5b4fc",
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 1.6,
            }}
          >
            MÊMES HYPOTHÈSES
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              flex: 1,
              marginTop: 28,
            }}
          >
            {models.map((model) => (
              <div
                key={model.label}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div
                  style={{
                    display: "flex",
                    color: "#cbd5e1",
                    fontSize: 12,
                    fontWeight: 750,
                    letterSpacing: 1.1,
                  }}
                >
                  {model.label}
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    height: 11,
                    marginTop: 9,
                    borderRadius: 99,
                    background: "rgba(255,255,255,0.09)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "78%",
                      height: 11,
                      borderRadius: 99,
                      background: model.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 28,
              color: "#94a3b8",
              fontSize: 12,
              fontWeight: 700,
            }}
          >
            <span style={{ display: "flex" }}>3 MOIS</span>
            <span style={{ display: "flex" }}>6 MOIS</span>
            <span style={{ display: "flex" }}>12 MOIS</span>
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
