import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Calculer le délai de développement d’un SaaS sans durée universelle — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const steps = [
  {
    number: "01",
    label: "Résultat utilisable",
    detail: "La même ligne d’arrivée",
    color: "#c4b5fd",
  },
  {
    number: "02",
    label: "Travaux reliés",
    detail: "Ce qui attend quoi",
    color: "#93c5fd",
  },
  {
    number: "03",
    label: "Responsables nommés",
    detail: "Entreprise · prestataire · tiers",
    color: "#6ee7b7",
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
          "radial-gradient(circle at 88% 15%, rgba(37,99,235,0.28), transparent 34%), radial-gradient(circle at 10% 92%, rgba(124,58,237,0.32), transparent 38%), #09090b",
        color: "#fff",
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
            border: "1px solid rgba(167,139,250,0.5)",
            background: "rgba(76,29,149,0.24)",
            color: "#ddd6fe",
            fontSize: 20,
          }}
        >
          Guide pour dirigeants
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            maxWidth: 1040,
            fontSize: 53,
            fontWeight: 760,
            lineHeight: 1.04,
            letterSpacing: -2,
          }}
        >
          Combien de temps pour développer votre SaaS ?
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 23,
            color: "#c4b5fd",
          }}
        >
          Trois scénarios calculés · aucune durée universelle
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "stretch", width: "100%" }}>
        {steps.map((step, index) => (
          <div
            key={step.number}
            style={{ display: "flex", alignItems: "center", flex: 1 }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                padding: "15px 18px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.055)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  color: step.color,
                  fontSize: 16,
                  fontWeight: 800,
                }}
              >
                {step.number} · {step.label}
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: 5,
                  fontSize: 19,
                  fontWeight: 700,
                }}
              >
                {step.detail}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 48,
                  fontSize: 28,
                  color: "#a1a1aa",
                }}
              >
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
