import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Comparaison illustrée entre une campagne Google Search et Performance Max";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const searchSteps = ["RECHERCHE", "ANNONCE", "PAGE", "DEMANDE"];
const pmaxInputs = ["OBJECTIF", "CONVERSIONS", "CONTENUS", "RAPPORTS"];

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
          "radial-gradient(circle at 86% 16%, rgba(124,58,237,0.28), transparent 31%), radial-gradient(circle at 12% 88%, rgba(37,99,235,0.22), transparent 34%), linear-gradient(135deg, #09090b 0%, #111827 56%, #172554 100%)",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 52,
            height: 52,
            borderRadius: 14,
            background: "linear-gradient(135deg, #2563eb, #7c3aed)",
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
            border: "1px solid rgba(255,255,255,0.16)",
            background: "rgba(255,255,255,0.06)",
            color: "#d4d4d8",
            fontSize: 18,
            fontWeight: 650,
          }}
        >
          GUIDE GOOGLE ADS
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 44,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            maxWidth: 590,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 55,
              fontWeight: 780,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Search ou Performance Max : que choisir ?
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              maxWidth: 570,
              fontSize: 22,
              lineHeight: 1.35,
              color: "#c4b5fd",
            }}
          >
            Décidez selon la demande, la mesure, les contenus et le contrôle
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 460,
            gap: 14,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 18,
              borderRadius: 22,
              border: "1px solid rgba(96,165,250,0.38)",
              background: "rgba(30,64,175,0.24)",
            }}
          >
            <div
              style={{
                display: "flex",
                marginBottom: 12,
                fontSize: 18,
                fontWeight: 760,
                color: "#bfdbfe",
              }}
            >
              SEARCH · demande précise
            </div>
            <div style={{ display: "flex", gap: 7 }}>
              {searchSteps.map((step, index) => (
                <div
                  key={step}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      padding: "8px 9px",
                      borderRadius: 9,
                      background: "rgba(255,255,255,0.08)",
                      color: "#dbeafe",
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                  >
                    {step}
                  </div>
                  {index < searchSteps.length - 1 ? (
                    <span
                      style={{
                        display: "flex",
                        marginLeft: 7,
                        color: "#60a5fa",
                        fontSize: 17,
                      }}
                    >
                      →
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 18,
              borderRadius: 22,
              border: "1px solid rgba(167,139,250,0.38)",
              background: "rgba(76,29,149,0.24)",
            }}
          >
            <div
              style={{
                display: "flex",
                marginBottom: 12,
                fontSize: 18,
                fontWeight: 760,
                color: "#ddd6fe",
              }}
            >
              PERFORMANCE MAX · diffusion élargie
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
              {pmaxInputs.map((input) => (
                <div
                  key={input}
                  style={{
                    display: "flex",
                    padding: "8px 10px",
                    borderRadius: 9,
                    background: "rgba(255,255,255,0.08)",
                    color: "#ede9fe",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  {input}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          gap: 10,
        }}
      >
        {["SEARCH", "TESTER PMAX", "COMBINER", "REPORTER"].map((label) => (
          <div
            key={label}
            style={{
              display: "flex",
              padding: "9px 15px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.06)",
              color: "#d4d4d8",
              fontSize: 14,
              fontWeight: 650,
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
