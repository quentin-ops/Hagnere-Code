import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Site internet en panne : quoi faire maintenant ? — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const steps = [
  { label: "15 MIN", value: "Noter" },
  { label: "1 HEURE", value: "Alerter" },
  { label: "REPRISE", value: "Tester" },
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
          "radial-gradient(circle at 84% 14%, rgba(245,158,11,0.24), transparent 34%), radial-gradient(circle at 8% 92%, rgba(37,99,235,0.25), transparent 38%), #09090b",
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
            background: "linear-gradient(135deg, #f59e0b, #2563eb)",
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
            border: "1px solid rgba(251,191,36,0.5)",
            background: "rgba(120,53,15,0.25)",
            color: "#fde68a",
            fontSize: 20,
          }}
        >
          Fiche réflexe dirigeant
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            maxWidth: 1020,
            fontSize: 56,
            fontWeight: 760,
            lineHeight: 1.04,
            letterSpacing: -2,
          }}
        >
          Votre site est en panne : quoi faire maintenant ?
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 24,
            color: "#bfdbfe",
          }}
        >
          Observer sans aggraver · prévenir · vérifier le vrai retour
        </div>
      </div>

      <div style={{ display: "flex", width: "100%", gap: 14 }}>
        {steps.map((step, index) => (
          <div
            key={step.label}
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              padding: "16px 20px",
              borderRadius: 14,
              border:
                index === 2
                  ? "1px solid rgba(52,211,153,0.65)"
                  : "1px solid rgba(255,255,255,0.14)",
              background:
                index === 2 ? "rgba(6,78,59,0.36)" : "rgba(255,255,255,0.055)",
            }}
          >
            <div
              style={{
                display: "flex",
                color: index === 2 ? "#6ee7b7" : "#fcd34d",
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
                fontSize: 23,
                fontWeight: 700,
              }}
            >
              {step.value}
            </div>
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
