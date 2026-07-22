import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Cinq questions concrètes pour choisir une agence SEO";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const questions = [
  ["01", "TRAVAIL", "#c4b5fd"],
  ["02", "PAGES", "#93c5fd"],
  ["03", "LIVRABLE", "#6ee7b7"],
  ["04", "VOS ACCÈS", "#fcd34d"],
  ["05", "BILAN", "#67e8f9"],
];

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 66,
        background:
          "radial-gradient(circle at 83% 18%, rgba(124,58,237,0.27), transparent 31%), radial-gradient(circle at 80% 88%, rgba(14,165,233,0.17), transparent 30%), linear-gradient(135deg, #09090b 0%, #111827 54%, #172554 100%)",
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
            border: "1px solid rgba(167,139,250,0.38)",
            color: "#ddd6fe",
            fontSize: 20,
          }}
        >
          Choix d’une agence SEO
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 58,
          maxWidth: 1040,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 57,
            fontWeight: 780,
            lineHeight: 1.04,
            letterSpacing: -2,
          }}
        >
          Que vaut vraiment la promesse du devis ?
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 27,
            lineHeight: 1.35,
            color: "#d4d4d8",
          }}
        >
          Cinq réponses concrètes avant de choisir une agence SEO
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "auto",
          gap: 11,
          width: "100%",
        }}
      >
        {questions.map(([number, label, color]) => (
          <div
            key={number}
            style={{
              display: "flex",
              alignItems: "center",
              flex: 1,
              padding: "14px 16px",
              borderRadius: 14,
              background: "rgba(255,255,255,0.055)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <span
              style={{
                display: "flex",
                marginRight: 9,
                color,
                fontSize: 18,
                fontWeight: 800,
              }}
            >
              {number}
            </span>
            <span
              style={{
                display: "flex",
                color: "#f4f4f5",
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: 0.4,
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
