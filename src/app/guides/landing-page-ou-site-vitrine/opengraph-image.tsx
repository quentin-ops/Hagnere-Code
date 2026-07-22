import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Landing page ou site vitrine : choisir selon le parcours des visiteurs — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const choices = [
  { number: "01", label: "Conserver" },
  { number: "02", label: "Créer une page" },
  { number: "03", label: "Structurer le site" },
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
          "radial-gradient(circle at 86% 10%, rgba(59,130,246,0.30), transparent 34%), radial-gradient(circle at 10% 92%, rgba(139,92,246,0.28), transparent 38%), #09090b",
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
            border: "1px solid rgba(96,165,250,0.4)",
            background: "rgba(30,64,175,0.2)",
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
            maxWidth: 1000,
            fontSize: 55,
            fontWeight: 760,
            lineHeight: 1.04,
            letterSpacing: -2,
          }}
        >
          Landing page ou site vitrine ?
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            maxWidth: 940,
            fontSize: 25,
            color: "#c4b5fd",
          }}
        >
          Partez des questions de vos visiteurs, pas du nom de l’outil.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          width: "100%",
          gap: 14,
        }}
      >
        {choices.map((choice) => (
          <div
            key={choice.number}
            style={{
              display: "flex",
              alignItems: "center",
              flex: 1,
              padding: "18px 20px",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(255,255,255,0.065)",
            }}
          >
            <div
              style={{
                display: "flex",
                marginRight: 14,
                color: "#c4b5fd",
                fontSize: 19,
                fontWeight: 750,
              }}
            >
              {choice.number}
            </div>
            <div style={{ display: "flex", fontSize: 21, fontWeight: 700 }}>
              {choice.label}
            </div>
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
