import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Suivi des conversions Google Ads jusqu’aux ventes — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const stages = [
  { value: "01", label: "Événement" },
  { value: "02", label: "Demande" },
  { value: "03", label: "Dossier unique" },
  { value: "04", label: "Prospect" },
  { value: "05", label: "Devis" },
  { value: "06", label: "Vente" },
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
          "radial-gradient(circle at 90% 16%, rgba(37,99,235,0.30), transparent 34%), radial-gradient(circle at 10% 90%, rgba(124,58,237,0.24), transparent 38%), #09090b",
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
            border: "1px solid rgba(96,165,250,0.38)",
            background: "rgba(30,64,175,0.18)",
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
            maxWidth: 940,
            fontSize: 53,
            fontWeight: 760,
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          Vos conversions Google Ads sont-elles de vraies ventes ?
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 24,
            color: "#c4b5fd",
          }}
        >
          Des actions mesurées aux ventes réellement retrouvées
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          gap: 9,
        }}
      >
        {stages.map((stage, index) => (
          <div
            key={stage.label}
            style={{ display: "flex", alignItems: "center", flex: 1, gap: 9 }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                padding: "13px 11px",
                borderRadius: 14,
                border:
                  index === stages.length - 1
                    ? "1px solid rgba(52,211,153,0.62)"
                    : "1px solid rgba(255,255,255,0.12)",
                background:
                  index === stages.length - 1
                    ? "rgba(6,78,59,0.36)"
                    : "rgba(255,255,255,0.055)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 27,
                  fontWeight: 780,
                  color: index === stages.length - 1 ? "#6ee7b7" : "#fff",
                }}
              >
                {stage.value}
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: 2,
                  fontSize: 14,
                  color: "#a1a1aa",
                }}
              >
                {stage.label}
              </div>
            </div>
            {index < stages.length - 1 && (
              <div style={{ display: "flex", fontSize: 20, color: "#52525b" }}>
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
