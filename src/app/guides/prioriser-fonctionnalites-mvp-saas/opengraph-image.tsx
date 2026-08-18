import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Prioriser les fonctionnalités d’un SaaS : RICE recalculé et lot de 30 jours";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const decisions = [
  { label: "CORRIGER", detail: "service fragilisé", color: "#fb7185" },
  { label: "RÉUTILISER", detail: "capacité existante", color: "#a78bfa" },
  { label: "TESTER", detail: "faits insuffisants", color: "#60a5fa" },
  { label: "CONSTRUIRE", detail: "problème prouvé", color: "#34d399" },
  { label: "REPORTER", detail: "raison écrite", color: "#a1a1aa" },
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
          "radial-gradient(circle at 82% 20%, rgba(124,58,237,0.30), transparent 32%), radial-gradient(circle at 18% 88%, rgba(37,99,235,0.18), transparent 34%), linear-gradient(135deg, #09090b 0%, #111827 60%, #172554 100%)",
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
            border: "1px solid rgba(167,139,250,0.40)",
            background: "rgba(76,29,149,0.24)",
            color: "#ddd6fe",
            fontSize: 20,
          }}
        >
          Guide SaaS
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 48,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            maxWidth: 655,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 57,
              fontWeight: 780,
              lineHeight: 1.03,
              letterSpacing: -2,
            }}
          >
            Que développer après votre MVP ?
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              maxWidth: 620,
              fontSize: 23,
              lineHeight: 1.35,
              color: "#c4b5fd",
            }}
          >
            RICE recalculé · lot fermé à 30 jours
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 390,
            padding: 22,
            gap: 7,
            borderRadius: 25,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(9,9,11,0.54)",
            boxShadow: "0 24px 90px rgba(124,58,237,0.24)",
          }}
        >
          {decisions.map((decision) => (
            <div
              key={decision.label}
              style={{
                display: "flex",
                alignItems: "center",
                minHeight: 49,
                padding: "7px 13px",
                borderRadius: 13,
                border: "1px solid rgba(255,255,255,0.09)",
                background: "rgba(255,255,255,0.05)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 34,
                  height: 34,
                  borderRadius: 999,
                  background: decision.color,
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 13,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: 17,
                    fontWeight: 760,
                  }}
                >
                  {decision.label}
                </div>
                <div
                  style={{
                    display: "flex",
                    marginTop: 3,
                    fontSize: 14,
                    color: "#a1a1aa",
                  }}
                >
                  {decision.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {["4 scores refaits", "5 issues", "30 jours"].map((label) => (
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
        ))}
      </div>
    </div>,
    size,
  );
}
