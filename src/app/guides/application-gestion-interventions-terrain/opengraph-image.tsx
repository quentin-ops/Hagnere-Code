import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Application de gestion des interventions terrain — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const steps = ["Demande", "Planning", "Terrain", "Compte rendu", "Facture"];

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
          "radial-gradient(circle at 86% 18%, rgba(16,185,129,0.22), transparent 34%), radial-gradient(circle at 8% 92%, rgba(124,58,237,0.26), transparent 38%), #09090b",
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
            border: "1px solid rgba(52,211,153,0.45)",
            background: "rgba(6,78,59,0.24)",
            color: "#a7f3d0",
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
            maxWidth: 1030,
            fontSize: 53,
            fontWeight: 760,
            lineHeight: 1.04,
            letterSpacing: -2,
          }}
        >
          Relier le bureau, le terrain et la facturation
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 24,
            color: "#c4b5fd",
          }}
        >
          Logiciel standard, connexion ou application adaptée ?
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
        {steps.map((step, index) => (
          <div
            key={step}
            style={{ display: "flex", alignItems: "center", flex: 1, gap: 9 }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                padding: "16px 12px",
                borderRadius: 14,
                border:
                  index === 2
                    ? "1px solid rgba(52,211,153,0.65)"
                    : "1px solid rgba(255,255,255,0.13)",
                background:
                  index === 2
                    ? "rgba(6,78,59,0.35)"
                    : "rgba(255,255,255,0.055)",
                fontSize: 19,
                fontWeight: 700,
              }}
            >
              {step}
            </div>
            {index < steps.length - 1 && (
              <div style={{ display: "flex", color: "#52525b", fontSize: 20 }}>
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
