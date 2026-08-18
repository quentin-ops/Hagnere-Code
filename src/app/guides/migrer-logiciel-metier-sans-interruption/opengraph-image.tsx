import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Changer de logiciel métier : éviter l’arrêt subi — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const steps = [
  { label: "J-30", value: "Données" },
  { label: "J-7", value: "Répétition" },
  { label: "J0", value: "Décision" },
  { label: "J+7", value: "Contrôle" },
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
          "radial-gradient(circle at 84% 14%, rgba(37,99,235,0.28), transparent 33%), radial-gradient(circle at 9% 92%, rgba(124,58,237,0.25), transparent 38%), #09090b",
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
            border: "1px solid rgba(96,165,250,0.5)",
            background: "rgba(30,64,175,0.24)",
            color: "#bfdbfe",
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
            maxWidth: 1060,
            fontSize: 54,
            fontWeight: 760,
            lineHeight: 1.04,
            letterSpacing: -2,
          }}
        >
          Changer de logiciel : éviter l’arrêt subi
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 24,
            color: "#c4b5fd",
          }}
        >
          Exemple de séquence à adapter · répéter · contrôler · décider
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          width: "100%",
          gap: 12,
        }}
      >
        {steps.map((step, index) => (
          <div
            key={step.label}
            style={{
              display: "flex",
              alignItems: "center",
              flex: 1,
              gap: 12,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                padding: "15px 18px",
                borderRadius: 14,
                border:
                  index === 2
                    ? "1px solid rgba(52,211,153,0.65)"
                    : "1px solid rgba(255,255,255,0.14)",
                background:
                  index === 2
                    ? "rgba(6,78,59,0.36)"
                    : "rgba(255,255,255,0.055)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  color: index === 2 ? "#6ee7b7" : "#93c5fd",
                  fontSize: 18,
                  fontWeight: 800,
                }}
              >
                {step.label}
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: 5,
                  fontSize: 21,
                  fontWeight: 700,
                }}
              >
                {step.value}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div style={{ display: "flex", color: "#52525b", fontSize: 20 }}>
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
