import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Vos positions Google baissent — comparer, localiser et décider — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const checks = [
  {
    label: "Impressions",
    value: "Êtes-vous moins visible ?",
    color: "#86efac",
  },
  { label: "Clics", value: "Quelles pages reculent ?", color: "#93c5fd" },
  {
    label: "Taux de clics",
    value: "Le résultat attire-t-il ?",
    color: "#fcd34d",
  },
  {
    label: "Position",
    value: "La moyenne a-t-elle changé ?",
    color: "#c4b5fd",
  },
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
          "radial-gradient(circle at 86% 14%, rgba(16,185,129,0.26), transparent 34%), radial-gradient(circle at 8% 94%, rgba(59,130,246,0.24), transparent 38%), #09090b",
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
            background: "linear-gradient(135deg, #059669, #2563eb)",
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
            border: "1px solid rgba(52,211,153,0.5)",
            background: "rgba(6,78,59,0.3)",
            color: "#a7f3d0",
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
            maxWidth: 1060,
            fontSize: 55,
            fontWeight: 760,
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          Vos positions Google baissent : que vérifier ?
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 24,
            color: "#a7f3d0",
          }}
        >
          Comparez · localisez · décidez avant de modifier
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
                fontSize: 18,
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
