import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Combien de temps pour des résultats SEO — sept repères distincts — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const stages = [
  { label: "Publié", color: "#c4b5fd" },
  { label: "Exploré", color: "#a5b4fc" },
  { label: "Indexé", color: "#93c5fd" },
  { label: "Impressions", color: "#67e8f9" },
  { label: "Clics", color: "#86efac" },
  { label: "Contacts", color: "#fde68a" },
  { label: "Ventes", color: "#fdba74" },
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
          "radial-gradient(circle at 88% 12%, rgba(124,58,237,0.28), transparent 35%), radial-gradient(circle at 8% 92%, rgba(16,185,129,0.20), transparent 38%), #09090b",
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
            border: "1px solid rgba(167,139,250,0.55)",
            background: "rgba(76,29,149,0.28)",
            color: "#ddd6fe",
            fontSize: 20,
          }}
        >
          Guide SEO
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            maxWidth: 1040,
            fontSize: 56,
            fontWeight: 760,
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          Combien de temps pour des résultats SEO ?
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 24,
            color: "#c4b5fd",
          }}
        >
          7 repères distincts · aucune étape ne garantit la suivante
        </div>
      </div>

      <div
        style={{ display: "flex", alignItems: "center", width: "100%", gap: 8 }}
      >
        {stages.map((stage) => (
          <div
            key={stage.label}
            style={{ display: "flex", alignItems: "center", flex: 1 }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                minHeight: 82,
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.055)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 10,
                  height: 10,
                  borderRadius: 99,
                  background: stage.color,
                  marginBottom: 9,
                }}
              />
              <div style={{ display: "flex", fontSize: 18, fontWeight: 700 }}>
                {stage.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
