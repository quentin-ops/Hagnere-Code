import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Pourquoi Google Ads ne convertit pas malgré les clics ? — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const steps = [
  { label: "ACTION COMPTÉE", color: "#a78bfa" },
  { label: "CONTACT REÇU", color: "#60a5fa" },
  { label: "PROSPECT SÉRIEUX", color: "#34d399" },
  { label: "VENTE", color: "#fbbf24" },
  { label: "MARGE", color: "#fb7185" },
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
          "radial-gradient(circle at 85% 18%, rgba(37,99,235,0.30), transparent 30%), radial-gradient(circle at 12% 88%, rgba(124,58,237,0.24), transparent 34%), #09090b",
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
            border: "1px solid rgba(96,165,250,0.38)",
            background: "rgba(30,64,175,0.18)",
            color: "#bfdbfe",
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
          gap: 52,
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{
              display: "flex",
              maxWidth: 700,
              fontSize: 51,
              fontWeight: 760,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Google Ads dépense. Où disparaissent les clients ?
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              maxWidth: 680,
              fontSize: 23,
              color: "#c4b5fd",
            }}
          >
            Retrouvez le premier écart avant d’augmenter le budget
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 350,
            gap: 9,
            padding: 18,
            borderRadius: 24,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(255,255,255,0.055)",
          }}
        >
          {steps.map((step, index) => (
            <div
              key={step.label}
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                minHeight: 47,
                padding: "9px 13px",
                borderRadius: 13,
                border: "1px solid rgba(255,255,255,0.09)",
                background: "rgba(9,9,11,0.42)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 27,
                  height: 27,
                  borderRadius: 99,
                  background: step.color,
                  color: "#09090b",
                  fontSize: 15,
                  fontWeight: 800,
                }}
              >
                {index + 1}
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: 12,
                  fontSize: 16,
                  fontWeight: 760,
                  color: step.color,
                }}
              >
                {step.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {["Mesurer le réel", "Nommer l’écart", "Corriger un point"].map(
          (label) => (
            <div
              key={label}
              style={{
                display: "flex",
                padding: "10px 17px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.055)",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "#d4d4d8",
                fontSize: 18,
              }}
            >
              {label}
            </div>
          ),
        )}
      </div>
    </div>,
    size,
  );
}
