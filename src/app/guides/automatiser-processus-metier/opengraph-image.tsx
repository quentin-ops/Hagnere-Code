import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Automatiser un processus métier — matrice gain, risque et stabilité";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const axes = [
  { label: "GAIN", value: "MESURÉ", color: "#34d399" },
  { label: "STABILITÉ", value: "PROUVÉE", color: "#60a5fa" },
  { label: "RISQUE", value: "CONTENU", color: "#c4b5fd" },
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
        padding: 66,
        background:
          "radial-gradient(circle at 82% 22%, rgba(124,58,237,0.28), transparent 28%), linear-gradient(135deg, #09090b 0%, #111827 54%, #172554 100%)",
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
            border: "1px solid rgba(167,139,250,0.36)",
            background: "rgba(76,29,149,0.18)",
            color: "#ddd6fe",
            fontSize: 20,
          }}
        >
          Guide décisionnel 2026
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 58,
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{
              display: "flex",
              maxWidth: 680,
              fontSize: 51,
              fontWeight: 760,
              lineHeight: 1.07,
              letterSpacing: -1.9,
            }}
          >
            Quel processus métier automatiser en premier ?
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 25,
              color: "#a5b4fc",
            }}
          >
            Choisir, chiffrer, tester — ou reporter
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 350,
            gap: 11,
            padding: 20,
            borderRadius: 24,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(255,255,255,0.055)",
            boxShadow: "0 24px 80px rgba(37,99,235,0.18)",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#a1a1aa",
              fontSize: 16,
              letterSpacing: 1.5,
              marginBottom: 2,
            }}
          >
            MATRICE DE DÉCISION
          </div>
          {axes.map((axis) => (
            <div
              key={axis.label}
              style={{
                display: "flex",
                alignItems: "center",
                minHeight: 58,
                padding: "10px 14px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.09)",
                background: "rgba(9,9,11,0.32)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 14,
                  height: 14,
                  borderRadius: 99,
                  background: axis.color,
                  boxShadow: "0 0 18px " + axis.color,
                }}
              />
              <div
                style={{
                  display: "flex",
                  marginLeft: 13,
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#d4d4d8",
                }}
              >
                {axis.label}
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: "auto",
                  fontSize: 17,
                  fontWeight: 750,
                  color: axis.color,
                }}
              >
                {axis.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {[
          "6 réponses comparées",
          "Socle sur 36 mois",
          "Tests des pannes",
          "Cas à refuser",
        ].map((label) => (
          <div
            key={label}
            style={{
              display: "flex",
              padding: "10px 17px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.055)",
              border: "1px solid rgba(255,255,255,0.10)",
              color: "#d4d4d8",
              fontSize: 19,
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
