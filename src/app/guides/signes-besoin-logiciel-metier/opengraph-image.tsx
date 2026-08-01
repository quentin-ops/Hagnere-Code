import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Votre entreprise a-t-elle besoin d’un logiciel métier ? — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const answers = [
  "Sécuriser",
  "Simplifier",
  "Configurer",
  "Connecter",
  "Standard",
  "Sur mesure",
];

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "58px 64px 54px",
        background:
          "radial-gradient(circle at 88% 10%, rgba(165,180,252,0.28), transparent 31%), linear-gradient(135deg, #09090b 0%, #111827 58%, #312e81 100%)",
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
            background: "rgba(49,46,129,0.25)",
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
          marginTop: 45,
          maxWidth: 1000,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 52,
            lineHeight: 1.04,
            letterSpacing: -2,
            fontWeight: 800,
          }}
        >
          Votre entreprise a-t-elle besoin d’un logiciel métier ?
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
            fontSize: 23,
            color: "#c4b5fd",
          }}
        >
          Trois situations réelles · six réponses · aucun seuil magique
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          gap: 18,
          width: "100%",
          marginTop: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            width: 280,
          }}
        >
          {[1, 2, 3].map((number) => (
            <div
              key={number}
              style={{
                display: "flex",
                alignItems: "center",
                height: 47,
                padding: "0 14px",
                borderRadius: 13,
                border: "1px solid rgba(255,255,255,0.13)",
                background: "rgba(255,255,255,0.06)",
                fontSize: 16,
                color: "#e4e4e7",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 26,
                  height: 26,
                  marginRight: 11,
                  borderRadius: 8,
                  background: "#6366f1",
                  fontSize: 12,
                  fontWeight: 800,
                }}
              >
                {number}
              </div>
              Situation réelle
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 76,
            color: "#a5b4fc",
            fontSize: 36,
          }}
        >
          →
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            flex: 1,
          }}
        >
          {answers.map((answer, index) => (
            <div
              key={answer}
              style={{
                display: "flex",
                alignItems: "center",
                width: 206,
                height: 47,
                padding: "0 14px",
                borderRadius: 13,
                border: "1px solid rgba(199,210,254,0.22)",
                background: "rgba(99,102,241,0.12)",
                color: "#f4f4f5",
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              <div
                style={{
                  display: "flex",
                  marginRight: 9,
                  color: "#a5b4fc",
                  fontSize: 13,
                  fontWeight: 800,
                }}
              >
                0{index + 1}
              </div>
              {answer}
            </div>
          ))}
        </div>
      </div>
    </div>,
    size,
  );
}
