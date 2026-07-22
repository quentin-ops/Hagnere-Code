import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Prototype, POC ou MVP : que faut-il choisir ? — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const choices = [
  { label: "PARCOURS", value: "Prototype", color: "#c4b5fd" },
  { label: "FAISABILITÉ", value: "POC", color: "#93c5fd" },
  { label: "DÉPLOIEMENT LIMITÉ", value: "Pilote", color: "#6ee7b7" },
  { label: "APPRENTISSAGE CLIENT", value: "MVP", color: "#fcd34d" },
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
          "radial-gradient(circle at 86% 14%, rgba(37,99,235,0.28), transparent 34%), radial-gradient(circle at 8% 92%, rgba(124,58,237,0.28), transparent 38%), #09090b",
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
            fontSize: 56,
            fontWeight: 760,
            lineHeight: 1.04,
            letterSpacing: -2,
          }}
        >
          Prototype, POC ou MVP : que faut-il choisir ?
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 24,
            color: "#c4b5fd",
          }}
        >
          Une question précise · le test le plus simple · une décision écrite
        </div>
      </div>

      <div style={{ display: "flex", width: "100%", gap: 12 }}>
        {choices.map((choice) => (
          <div
            key={choice.label}
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
                color: choice.color,
                fontSize: 16,
                fontWeight: 800,
              }}
            >
              {choice.label}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 5,
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              {choice.value}
            </div>
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
