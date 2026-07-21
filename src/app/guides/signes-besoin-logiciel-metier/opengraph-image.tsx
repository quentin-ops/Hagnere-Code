import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Votre entreprise a-t-elle besoin d’un logiciel métier ? — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const choices = [
  { label: "SÉCURISER", color: "#fb7185" },
  { label: "CORRIGER", color: "#fbbf24" },
  { label: "AUTOMATISER", color: "#60a5fa" },
  { label: "ACHETER", color: "#34d399" },
  { label: "ÉTUDIER", color: "#a78bfa" },
  { label: "ATTENDRE", color: "#a1a1aa" },
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
          "radial-gradient(circle at 86% 18%, rgba(124,58,237,0.30), transparent 30%), radial-gradient(circle at 12% 82%, rgba(37,99,235,0.18), transparent 34%), #09090b",
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
            border: "1px solid rgba(167,139,250,0.36)",
            background: "rgba(76,29,149,0.18)",
            color: "#ddd6fe",
            fontSize: 20,
          }}
        >
          Guide pour dirigeants
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
              maxWidth: 690,
              fontSize: 52,
              fontWeight: 760,
              lineHeight: 1.06,
              letterSpacing: -2,
            }}
          >
            Votre entreprise a-t-elle besoin d’un logiciel métier ?
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 24,
              color: "#c4b5fd",
            }}
          >
            Trois situations réelles avant toute décision
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: 350,
            gap: 10,
            padding: 18,
            borderRadius: 24,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(255,255,255,0.055)",
          }}
        >
          {choices.map((choice) => (
            <div
              key={choice.label}
              style={{
                display: "flex",
                alignItems: "center",
                width: 152,
                minHeight: 54,
                padding: "11px 13px",
                borderRadius: 13,
                border: "1px solid rgba(255,255,255,0.09)",
                background: "rgba(9,9,11,0.38)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 11,
                  height: 11,
                  borderRadius: 99,
                  background: choice.color,
                  boxShadow: "0 0 15px " + choice.color,
                }}
              />
              <div
                style={{
                  display: "flex",
                  marginLeft: 10,
                  fontSize: 15,
                  fontWeight: 750,
                  color: choice.color,
                }}
              >
                {choice.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {[
          "Risques à sécuriser",
          "Faux signaux à écarter",
          "Six réponses possibles",
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
