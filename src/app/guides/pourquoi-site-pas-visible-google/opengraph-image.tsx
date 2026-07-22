import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Pourquoi votre site n’apparaît-il pas sur Google ? — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          "radial-gradient(circle at 83% 18%, rgba(16,185,129,0.20), transparent 34%), linear-gradient(135deg, #09090b 0%, #0a1f1a 100%)",
        color: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 52,
            height: 52,
            borderRadius: 13,
            background: "linear-gradient(135deg, #059669, #2563eb)",
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          HC
        </div>
        <div style={{ display: "flex", fontSize: 28, fontWeight: 600 }}>
          Hagnéré Code
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: "auto",
            padding: "8px 20px",
            border: "1px solid rgba(52,211,153,0.45)",
            borderRadius: 999,
            color: "#a7f3d0",
            fontSize: 21,
          }}
        >
          Diagnostic gratuit
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div
          style={{
            display: "flex",
            maxWidth: 1040,
            fontSize: 55,
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: -2,
          }}
        >
          Pourquoi votre site n’apparaît-il pas sur Google ?
        </div>
        <div style={{ display: "flex", fontSize: 27, color: "#a1a1aa" }}>
          Une page · une recherche · la première preuve qui manque
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {[
          "Découverte",
          "Ouverture",
          "Index",
          "Affichages",
          "Clics",
          "Demandes",
        ].map((label, index) => (
          <div
            key={label}
            style={{ display: "flex", alignItems: "center", gap: 10 }}
          >
            <div
              style={{
                display: "flex",
                padding: "11px 15px",
                borderRadius: 11,
                background:
                  index === 0
                    ? "rgba(5,150,105,0.28)"
                    : "rgba(255,255,255,0.06)",
                border:
                  index === 0
                    ? "1px solid rgba(52,211,153,0.58)"
                    : "1px solid rgba(255,255,255,0.12)",
                color: index === 0 ? "#a7f3d0" : "#e4e4e7",
                fontSize: 19,
              }}
            >
              {label}
            </div>
            {index < 5 ? (
              <div style={{ display: "flex", color: "#71717a", fontSize: 22 }}>
                →
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
