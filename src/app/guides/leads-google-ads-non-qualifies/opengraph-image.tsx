import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Leads Google Ads non qualifiés — trouver la première cause — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const checks = [
  { label: "Recherche", value: "Ce qui a été tapé", color: "#93c5fd" },
  { label: "Zone", value: "Où se trouve le contact", color: "#c4b5fd" },
  { label: "Promesse", value: "Ce qu’il a compris", color: "#fcd34d" },
  { label: "Traitement", value: "Ce que l’équipe a fait", color: "#6ee7b7" },
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
          "radial-gradient(circle at 88% 15%, rgba(37,99,235,0.3), transparent 34%), radial-gradient(circle at 9% 92%, rgba(124,58,237,0.24), transparent 38%), #09090b",
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
            background: "linear-gradient(135deg, #2563eb, #7c3aed)",
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
          Guide Google Ads
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            maxWidth: 1080,
            fontSize: 53,
            fontWeight: 760,
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          Pourquoi vos contacts Google Ads sont-ils hors cible ?
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 24,
            color: "#bfdbfe",
          }}
        >
          Une période complète · un motif · une correction
        </div>
      </div>

      <div style={{ display: "flex", width: "100%", gap: 12 }}>
        {checks.map((check) => (
          <div
            key={check.label}
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              padding: "16px 18px",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.055)",
            }}
          >
            <div
              style={{
                display: "flex",
                color: check.color,
                fontSize: 18,
                fontWeight: 800,
              }}
            >
              {check.label}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 6,
                fontSize: 19,
                fontWeight: 650,
              }}
            >
              {check.value}
            </div>
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
