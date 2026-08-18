import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Calculer si une application métier sera rentable pour l’entreprise";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const scenarios = [
  {
    label: "COÛT ACTUEL",
    value: "temps et erreurs",
    color: "#fbbf24",
  },
  {
    label: "COÛT DU PROJET",
    value: "création + entretien",
    color: "#60a5fa",
  },
  {
    label: "GAIN UTILISABLE",
    value: "économie réelle",
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
          "radial-gradient(circle at 82% 18%, rgba(37,99,235,0.30), transparent 29%), linear-gradient(135deg, #09090b 0%, #111827 52%, #172554 100%)",
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
            border: "1px solid rgba(96,165,250,0.38)",
            background: "rgba(30,64,175,0.20)",
            color: "#bfdbfe",
            fontSize: 20,
          }}
        >
          Guide de décision 2026
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 54,
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{
              display: "flex",
              maxWidth: 650,
              fontSize: 52,
              fontWeight: 760,
              lineHeight: 1.07,
              letterSpacing: -1.8,
            }}
          >
            Calculer le ROI d’une application métier
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 24,
              color: "#a5b4fc",
            }}
          >
            Comparez ce que le problème coûte et ce que le projet fera vraiment
            gagner
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 360,
            gap: 13,
            padding: 22,
            borderRadius: 24,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(255,255,255,0.055)",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#a1a1aa",
              fontSize: 16,
              letterSpacing: 1.4,
            }}
          >
            TROIS VALEURS À RENSEIGNER
          </div>
          {scenarios.map((scenario) => (
            <div
              key={scenario.label}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 14px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.09)",
                background: "rgba(255,255,255,0.035)",
              }}
            >
              <span
                style={{
                  display: "flex",
                  width: 10,
                  height: 10,
                  marginRight: 11,
                  borderRadius: 99,
                  background: scenario.color,
                }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  width: "100%",
                  fontSize: 17,
                }}
              >
                <span style={{ color: "#d4d4d8", fontWeight: 700 }}>
                  {scenario.label}
                </span>
                <span
                  style={{
                    color: scenario.color,
                    fontWeight: 750,
                  }}
                >
                  {scenario.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {[
          "Coût complet",
          "Gain réel",
          "Délai de retour",
          "Vérification après lancement",
        ].map((label) => (
          <div
            key={label}
            style={{
              display: "flex",
              padding: "10px 17px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.055)",
              border: "1px solid rgba(255,255,255,0.10)",
              color: "#d4d4d8",
              fontSize: 19,
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
