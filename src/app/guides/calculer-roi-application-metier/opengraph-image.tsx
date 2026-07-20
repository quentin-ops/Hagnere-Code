import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Calculer le ROI d’une application métier — trois scénarios et coût total";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const scenarios = [
  {
    label: "PRUDENT",
    value: "35 % · ROI −32,61 %",
    color: "#fbbf24",
    width: 35,
  },
  {
    label: "CENTRAL",
    value: "60 % · ROI +15,76 %",
    color: "#60a5fa",
    width: 60,
  },
  {
    label: "HAUT",
    value: "80 % · ROI +53,81 %",
    color: "#34d399",
    width: 80,
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
          "radial-gradient(circle at 82% 18%, rgba(37,99,235,0.30), transparent 29%), linear-gradient(135deg, #09090b 0%, #111827 52%, #172554 100%)",
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
            background: "rgba(30,64,175,0.20)",
            color: "#bfdbfe",
            fontSize: 20,
          }}
        >
          Guide de décision 2026
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 54,
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{
              display: "flex",
              maxWidth: 650,
              fontSize: 52,
              fontWeight: 760,
              lineHeight: 1.07,
              letterSpacing: -1.8,
            }}
          >
            Calculer le ROI d’une application métier
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 24,
              color: "#a5b4fc",
            }}
          >
            Coût complet, gains attribuables, délai de retour
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 360,
            gap: 13,
            padding: 22,
            borderRadius: 24,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(255,255,255,0.055)",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#a1a1aa",
              fontSize: 16,
              letterSpacing: 1.4,
            }}
          >
            PART DE CAPACITÉ RÉAFFECTÉE
          </div>
          {scenarios.map((scenario) => (
            <div
              key={scenario.label}
              style={{ display: "flex", flexDirection: "column", gap: 7 }}
            >
              <div
                style={{ display: "flex", alignItems: "center", fontSize: 17 }}
              >
                <span style={{ color: "#d4d4d8", fontWeight: 700 }}>
                  {scenario.label}
                </span>
                <span
                  style={{
                    marginLeft: "auto",
                    color: scenario.color,
                    fontWeight: 750,
                  }}
                >
                  {scenario.value}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  height: 9,
                  borderRadius: 99,
                  background: "rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: `${scenario.width}%`,
                    height: 9,
                    borderRadius: 99,
                    background: scenario.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {["TCO", "Gain net", "3 scénarios", "Contrôle après lancement"].map(
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
                fontSize: 19,
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
