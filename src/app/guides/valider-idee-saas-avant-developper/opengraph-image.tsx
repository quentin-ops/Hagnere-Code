import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Valider une idée SaaS avant d’investir dans le développement";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const gates = [
  { label: "Problème fréquent", color: "#38bdf8" },
  { label: "Acheteur", color: "#818cf8" },
  { label: "Entretiens", color: "#a78bfa" },
  { label: "Test manuel", color: "#c084fc" },
  { label: "Prix", color: "#34d399" },
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
          "radial-gradient(circle at 84% 25%, rgba(124,58,237,0.26), transparent 31%), radial-gradient(circle at 68% 92%, rgba(16,185,129,0.13), transparent 28%), linear-gradient(135deg, #09090b 0%, #111827 52%, #1e1b4b 100%)",
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
            border: "1px solid rgba(167,139,250,0.42)",
            background: "rgba(76,29,149,0.18)",
            color: "#ddd6fe",
            fontSize: 20,
          }}
        >
          Guide SaaS 2026
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          gap: 48,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            maxWidth: 650,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 53,
              fontWeight: 760,
              lineHeight: 1.06,
              letterSpacing: -1.8,
            }}
          >
            Valider une idée SaaS avant de développer
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 25,
              color: "#c4b5fd",
            }}
          >
            Un plan de terrain sur 14 jours
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 390,
            padding: 18,
            gap: 9,
            borderRadius: 25,
            border: "1px solid rgba(255,255,255,0.13)",
            background: "rgba(9,9,11,0.45)",
            boxShadow: "0 24px 90px rgba(76,29,149,0.30)",
          }}
        >
          {gates.map((gate, index) => (
            <div
              key={gate.label}
              style={{
                display: "flex",
                alignItems: "center",
                minHeight: 48,
                padding: "8px 13px",
                borderRadius: 13,
                border: "1px solid rgba(255,255,255,0.08)",
                background:
                  index === gates.length - 1
                    ? "linear-gradient(90deg, rgba(16,185,129,0.19), rgba(76,29,149,0.18))"
                    : "rgba(255,255,255,0.04)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 30,
                  height: 30,
                  borderRadius: 9,
                  background: "rgba(255,255,255,0.06)",
                  color: gate.color,
                  fontSize: 15,
                  fontWeight: 800,
                }}
              >
                {index + 1}
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: 13,
                  fontSize: 19,
                  fontWeight: 680,
                }}
              >
                {gate.label}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "auto",
                  width: 25,
                  height: 25,
                  borderRadius: 999,
                  background: gate.color,
                  color: "#09090b",
                  fontSize: 11,
                  fontWeight: 900,
                }}
              >
                OK
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {[
          "Parler à de vrais prospects",
          "Tester sans logiciel",
          "Développer · modifier · arrêter",
        ].map((label) => (
          <div
            key={label}
            style={{
              display: "flex",
              padding: "10px 18px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.055)",
              color: "#e4e4e7",
              fontSize: 20,
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
