import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Répartir les offres d’une entreprise entre une page unique et plusieurs pages distinctes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const inputs = [
  { label: "PUBLIC", value: "même personne", color: "#60a5fa" },
  { label: "QUESTION", value: "même question", color: "#a78bfa" },
  { label: "ACTION", value: "même action", color: "#34d399" },
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
        padding: 62,
        background:
          "radial-gradient(circle at 88% 15%, rgba(14,165,233,0.24), transparent 31%), radial-gradient(circle at 12% 88%, rgba(139,92,246,0.24), transparent 35%), linear-gradient(135deg, #09090b 0%, #111827 57%, #312e81 100%)",
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
            border: "1px solid rgba(96,165,250,0.38)",
            background: "rgba(30,64,175,0.25)",
            color: "#bfdbfe",
            fontSize: 18,
            fontWeight: 650,
          }}
        >
          GUIDE SITE VITRINE
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
            maxWidth: 610,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 56,
              fontWeight: 780,
              lineHeight: 1.04,
              letterSpacing: -2.1,
            }}
          >
            Site one-page ou multipage ?
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              maxWidth: 590,
              fontSize: 22,
              lineHeight: 1.35,
              color: "#c4b5fd",
            }}
          >
            Séparez une page seulement quand la réponse change
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 450,
            padding: 22,
            gap: 12,
            borderRadius: 26,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(9,9,11,0.58)",
            boxShadow: "0 24px 90px rgba(37,99,235,0.22)",
          }}
        >
          <div style={{ display: "flex", gap: 9 }}>
            {inputs.map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  minHeight: 92,
                  padding: "13px 10px",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.045)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: 12,
                    fontWeight: 760,
                    color: item.color,
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    display: "flex",
                    marginTop: 8,
                    fontSize: 15,
                    lineHeight: 1.2,
                    color: "#e4e4e7",
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              color: "#71717a",
            }}
          >
            ↓
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                alignItems: "center",
                padding: "16px 12px",
                borderRadius: 15,
                border: "1px solid rgba(52,211,153,0.30)",
                background: "rgba(6,78,59,0.24)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 24,
                  fontWeight: 780,
                  color: "#a7f3d0",
                }}
              >
                1 PAGE
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: 5,
                  fontSize: 13,
                  color: "#d4d4d8",
                }}
              >
                si tout reste commun
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                alignItems: "center",
                padding: "16px 12px",
                borderRadius: 15,
                border: "1px solid rgba(167,139,250,0.32)",
                background: "rgba(76,29,149,0.24)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 24,
                  fontWeight: 780,
                  color: "#ddd6fe",
                }}
              >
                PLUSIEURS
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: 5,
                  fontSize: 13,
                  color: "#d4d4d8",
                }}
              >
                si la réponse change
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          fontSize: 16,
        }}
      >
        <span style={{ display: "flex", color: "#d4d4d8" }}>
          Offre · Question · Preuve · Action · Responsable
        </span>
        <span
          style={{
            display: "flex",
            color: "#fde68a",
            fontWeight: 650,
          }}
        >
          Aucun nombre de pages universel
        </span>
      </div>
    </div>,
    size,
  );
}
