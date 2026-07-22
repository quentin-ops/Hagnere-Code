import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Cahier des charges SaaS : exemple complet — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const stages = ["Achète", "Invite", "Réalise", "Exploite", "Récupère"];

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
          "radial-gradient(circle at 90% 15%, rgba(16,185,129,0.22), transparent 35%), radial-gradient(circle at 10% 95%, rgba(124,58,237,0.28), transparent 38%), #09090b",
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
            border: "1px solid rgba(52,211,153,0.35)",
            background: "rgba(6,78,59,0.2)",
            color: "#a7f3d0",
            fontSize: 20,
          }}
        >
          Exemple SaaS rempli
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            maxWidth: 980,
            fontSize: 55,
            fontWeight: 760,
            lineHeight: 1.04,
            letterSpacing: -2,
          }}
        >
          Cahier des charges SaaS : suivez un client de l’achat à la sortie
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 24,
            color: "#c4b5fd",
          }}
        >
          Décisions · exclusions · erreurs · tests · responsables
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          gap: 10,
        }}
      >
        {stages.map((stage, index) => (
          <div
            key={stage}
            style={{ display: "flex", alignItems: "center", flex: 1 }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                padding: "15px 12px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.12)",
                background:
                  index === stages.length - 1
                    ? "rgba(6,78,59,0.35)"
                    : "rgba(255,255,255,0.055)",
                color: index === stages.length - 1 ? "#a7f3d0" : "#e4e4e7",
                fontSize: 20,
                fontWeight: 650,
              }}
            >
              {stage}
            </div>
            {index < stages.length - 1 && (
              <div
                style={{
                  display: "flex",
                  marginLeft: 10,
                  color: "#71717a",
                  fontSize: 25,
                }}
              >
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
