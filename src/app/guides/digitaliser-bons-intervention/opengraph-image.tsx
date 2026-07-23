import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Scénario fictif : le bon d’intervention BI-042 passe du terrain au contrôle administratif";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const states = [
  {
    label: "TERRAIN",
    title: "bon réalisé",
    detail: "réserve conservée",
    color: "#a78bfa",
  },
  {
    label: "HORS LIGNE",
    title: "en attente",
    detail: "doublon à tester",
    color: "#fb923c",
  },
  {
    label: "BUREAU",
    title: "contrôle administratif",
    detail: "à compléter",
    color: "#34d399",
  },
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
          "radial-gradient(circle at 82% 17%, rgba(124,58,237,0.3), transparent 31%), radial-gradient(circle at 13% 91%, rgba(16,185,129,0.16), transparent 34%), linear-gradient(135deg, #09090b 0%, #111827 56%, #172554 100%)",
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
            border: "1px solid rgba(167,139,250,0.42)",
            background: "rgba(76,29,149,0.3)",
            color: "#ddd6fe",
            fontSize: 20,
          }}
        >
          Guide terrain
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 42,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            maxWidth: 630,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 54,
              fontWeight: 780,
              lineHeight: 1.04,
              letterSpacing: -2,
            }}
          >
            Comment digitaliser vos bons d’intervention ?
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
            Suivez le document jusqu’à la décision de facturer
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 420,
            padding: 25,
            gap: 11,
            borderRadius: 26,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(9,9,11,0.6)",
            boxShadow: "0 24px 90px rgba(124,58,237,0.25)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 3,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 17,
                fontWeight: 760,
                color: "#f4f4f5",
              }}
            >
              BI-042
            </div>
            <div
              style={{
                display: "flex",
                marginLeft: "auto",
                padding: "5px 10px",
                borderRadius: 999,
                background: "rgba(52,211,153,0.14)",
                color: "#6ee7b7",
                fontSize: 14,
              }}
            >
              SCÉNARIO FICTIF
            </div>
          </div>
          {states.map((state, index) => (
            <div
              key={state.label}
              style={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  minHeight: 72,
                  padding: "10px 14px",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.09)",
                  background: "rgba(255,255,255,0.05)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: 14,
                    height: 14,
                    borderRadius: 999,
                    background: state.color,
                    boxShadow: `0 0 24px ${state.color}`,
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: 14,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      fontSize: 17,
                      fontWeight: 760,
                      color: state.color,
                    }}
                  >
                    {state.label}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      marginTop: 2,
                      fontSize: 18,
                      fontWeight: 650,
                    }}
                  >
                    {state.title}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    marginLeft: "auto",
                    fontSize: 15,
                    color: "#a1a1aa",
                  }}
                >
                  {state.detail}
                </div>
              </div>
              {index < states.length - 1 ? (
                <div
                  style={{
                    display: "flex",
                    alignSelf: "center",
                    width: 2,
                    height: 10,
                    background: "rgba(255,255,255,0.24)",
                  }}
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", gap: 12 }}>
        {["PAPIER / PDF", "FORMULAIRE", "LOGICIEL", "SUR-MESURE"].map(
          (label) => (
            <div
              key={label}
              style={{
                display: "flex",
                padding: "9px 17px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.06)",
                color: "#d4d4d8",
                fontSize: 15,
                fontWeight: 650,
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
