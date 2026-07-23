import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Calendrier illustratif des décisions qui font évoluer un SaaS après son MVP";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const decisions = [
  { label: "PROTÉGER", detail: "service utilisable", color: "#fb7185" },
  { label: "ENREGISTRER", detail: "signaux compris", color: "#60a5fa" },
  { label: "LIVRER", detail: "ou reporter", color: "#a78bfa" },
  { label: "VÉRIFIER", detail: "effet observé", color: "#34d399" },
  { label: "RÉVISER", detail: "direction et budget", color: "#fbbf24" },
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
          "radial-gradient(circle at 88% 16%, rgba(124,58,237,0.28), transparent 31%), radial-gradient(circle at 10% 88%, rgba(16,185,129,0.16), transparent 34%), linear-gradient(135deg, #09090b 0%, #111827 56%, #172554 100%)",
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
            border: "1px solid rgba(167,139,250,0.36)",
            background: "rgba(76,29,149,0.24)",
            color: "#ddd6fe",
            fontSize: 18,
            fontWeight: 650,
          }}
        >
          APRÈS LES PREMIERS CLIENTS
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 48,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            maxWidth: 625,
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
            Comment faire évoluer votre SaaS après le MVP ?
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              maxWidth: 600,
              fontSize: 22,
              lineHeight: 1.35,
              color: "#c4b5fd",
            }}
          >
            Décidez, livrez, observez — sans travailler seulement dans l’urgence
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 420,
            padding: 23,
            gap: 9,
            borderRadius: 26,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(9,9,11,0.58)",
            boxShadow: "0 24px 90px rgba(124,58,237,0.24)",
          }}
        >
          {decisions.map((decision, index) => (
            <div
              key={decision.label}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  minHeight: 54,
                  padding: "9px 13px",
                  borderRadius: 13,
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.045)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: 12,
                    height: 12,
                    borderRadius: 999,
                    background: decision.color,
                    boxShadow: `0 0 20px ${decision.color}`,
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    marginLeft: 13,
                    width: 122,
                    fontSize: 15,
                    fontWeight: 760,
                    color: "#f4f4f5",
                  }}
                >
                  {decision.label}
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: 15,
                    color: "#a1a1aa",
                  }}
                >
                  {decision.detail}
                </div>
              </div>
              {index < decisions.length - 1 ? (
                <div
                  style={{
                    display: "flex",
                    alignSelf: "center",
                    width: 2,
                    height: 7,
                    background: "rgba(255,255,255,0.2)",
                  }}
                />
              ) : null}
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
          color: "#d4d4d8",
          fontSize: 16,
        }}
      >
        <span style={{ display: "flex" }}>
          Incident · demande · lot · fiabilité
        </span>
        <span
          style={{
            display: "flex",
            color: "#a7f3d0",
            fontWeight: 650,
          }}
        >
          Continuer · corriger · reporter · retirer · arrêter
        </span>
      </div>
    </div>,
    size,
  );
}
