import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Quel processus métier automatiser en premier ? — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const steps = [
  { number: "01", label: "Mesurer", detail: "volume et temps réels" },
  { number: "02", label: "Écarter", detail: "les mauvais candidats" },
  { number: "03", label: "Décompter", detail: "sur douze mois" },
];

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "62px 66px 58px",
        background:
          "radial-gradient(circle at 86% 12%, rgba(129,140,248,0.25), transparent 30%), linear-gradient(135deg, #09090b 0%, #111827 58%, #172554 100%)",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 52,
            height: 52,
            borderRadius: 15,
            background: "linear-gradient(135deg, #6366f1, #7c3aed)",
            fontSize: 20,
            fontWeight: 800,
          }}
        >
          HC
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: 16,
            fontSize: 27,
            fontWeight: 700,
          }}
        >
          Hagnéré Code
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: "auto",
            padding: "9px 18px",
            border: "1px solid rgba(165,180,252,0.35)",
            borderRadius: 999,
            color: "#c7d2fe",
            background: "rgba(49,46,129,0.22)",
            fontSize: 18,
          }}
        >
          Guide décisionnel 2026
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 62,
          maxWidth: 960,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 60,
            lineHeight: 1.03,
            letterSpacing: -2.4,
            fontWeight: 800,
          }}
        >
          Quel processus métier automatiser en premier ?
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 24,
            color: "#c4b5fd",
          }}
        >
          Mesurer, écarter, décompter — et savoir renoncer
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: 14,
          width: "100%",
          marginTop: "auto",
        }}
      >
        {steps.map((step) => (
          <div
            key={step.number}
            style={{
              display: "flex",
              alignItems: "center",
              flex: 1,
              minHeight: 84,
              padding: "15px 18px",
              borderRadius: 18,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.055)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 43,
                height: 43,
                borderRadius: 13,
                background: "rgba(99,102,241,0.22)",
                color: "#c7d2fe",
                fontSize: 16,
                fontWeight: 800,
              }}
            >
              {step.number}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 13,
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 19,
                  fontWeight: 750,
                }}
              >
                {step.label}
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: 3,
                  fontSize: 16,
                  color: "#a1a1aa",
                }}
              >
                {step.detail}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
