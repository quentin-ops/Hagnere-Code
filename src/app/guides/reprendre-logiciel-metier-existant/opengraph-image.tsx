import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Reprendre un logiciel métier existant avec cinq preuves non compensables";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const gates = [
  { label: "COMPTES", detail: "propriété", color: "#60a5fa" },
  { label: "CODE", detail: "build", color: "#818cf8" },
  { label: "DONNÉES", detail: "restauration", color: "#a78bfa" },
  { label: "MÉTIER", detail: "exploitation", color: "#c084fc" },
  { label: "DROITS", detail: "sortie", color: "#34d399" },
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
          "radial-gradient(circle at 82% 21%, rgba(59,130,246,0.24), transparent 30%), radial-gradient(circle at 70% 90%, rgba(139,92,246,0.17), transparent 32%), linear-gradient(135deg, #09090b 0%, #111827 54%, #172554 100%)",
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
          Guide de reprise 2026
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
              fontSize: 52,
              fontWeight: 760,
              lineHeight: 1.06,
              letterSpacing: -1.8,
            }}
          >
            Reprendre un logiciel métier existant
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 24,
              color: "#c4b5fd",
            }}
          >
            Prouver la maîtrise avant la maintenance
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 395,
            padding: 20,
            gap: 10,
            borderRadius: 25,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(9,9,11,0.48)",
            boxShadow: "0 24px 90px rgba(37,99,235,0.25)",
          }}
        >
          <div
            style={{
              display: "flex",
              marginBottom: 2,
              color: "#a1a1aa",
              fontSize: 15,
              letterSpacing: 1.5,
            }}
          >
            5 PREUVES À OBTENIR
          </div>
          {gates.map((gate, index) => (
            <div
              key={gate.label}
              style={{
                display: "flex",
                alignItems: "center",
                minHeight: 47,
                padding: "8px 13px",
                borderRadius: 13,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.045)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 29,
                  height: 29,
                  borderRadius: 9,
                  background: gate.color,
                  color: "#09090b",
                  fontSize: 14,
                  fontWeight: 850,
                }}
              >
                {index + 1}
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: 12,
                  fontSize: 17,
                  fontWeight: 720,
                }}
              >
                {gate.label}
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: "auto",
                  color: "#a1a1aa",
                  fontSize: 15,
                }}
              >
                {gate.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {[
          "8 tests exécutés",
          "Aucun score compensatoire",
          "Reprendre · migrer · reporter",
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
