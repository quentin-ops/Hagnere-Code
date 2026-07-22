import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Landing page Google Ads : garder, corriger, créer ou reporter — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const steps = ["Recherche", "Annonce", "Page", "Demande"];

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
          "radial-gradient(circle at 88% 12%, rgba(59,130,246,0.34), transparent 34%), radial-gradient(circle at 8% 90%, rgba(139,92,246,0.28), transparent 38%), #09090b",
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
            maxWidth: 980,
            fontSize: 54,
            fontWeight: 760,
            lineHeight: 1.04,
            letterSpacing: -2,
          }}
        >
          Votre page tient-elle la promesse de l’annonce ?
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 24,
            color: "#c4b5fd",
          }}
        >
          Gardez-la, corrigez-la, créez-en une autre ou reportez.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          gap: 12,
        }}
      >
        {steps.map((step, index) => (
          <div
            key={step}
            style={{ display: "flex", alignItems: "center", flex: 1, gap: 12 }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flex: 1,
                padding: "17px 18px",
                borderRadius: 15,
                border:
                  index === 2
                    ? "1px solid rgba(96,165,250,0.65)"
                    : "1px solid rgba(255,255,255,0.13)",
                background:
                  index === 2
                    ? "rgba(30,64,175,0.35)"
                    : "rgba(255,255,255,0.055)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  marginRight: 12,
                  color: index === 2 ? "#93c5fd" : "#71717a",
                  fontSize: 19,
                  fontWeight: 750,
                }}
              >
                0{index + 1}
              </div>
              <div style={{ display: "flex", fontSize: 21, fontWeight: 700 }}>
                {step}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div style={{ display: "flex", color: "#52525b", fontSize: 22 }}>
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
