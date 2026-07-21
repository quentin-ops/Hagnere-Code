import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Contrat TMA : qui intervient quand votre application tombe en panne ?";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const stages = [
  ["1", "ALERTE REÇUE"],
  ["2", "INTERVENTION"],
  ["3", "SOLUTION TEMPORAIRE"],
  ["4", "SERVICE RÉTABLI"],
  ["5", "PANNE CORRIGÉE"],
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
          "radial-gradient(circle at 83% 16%, rgba(245,158,11,0.24), transparent 30%), radial-gradient(circle at 73% 91%, rgba(124,58,237,0.18), transparent 32%), linear-gradient(135deg, #09090b 0%, #18181b 58%, #451a03 100%)",
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
            background: "linear-gradient(135deg, #f59e0b, #7c3aed)",
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
            border: "1px solid rgba(251,191,36,0.38)",
            background: "rgba(120,53,15,0.25)",
            color: "#fde68a",
            fontSize: 20,
          }}
        >
          Guide acheteur TMA
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <div
          style={{
            display: "flex",
            color: "#fcd34d",
            fontSize: 19,
            fontWeight: 750,
            letterSpacing: 2.2,
          }}
        >
          CONTRAT DE MAINTENANCE APPLICATIVE
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 12,
            maxWidth: 990,
            fontSize: 56,
            fontWeight: 780,
            lineHeight: 1.02,
            letterSpacing: -2,
          }}
        >
          Le tester sur une panne avant de le signer
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 23,
            lineHeight: 1.35,
            color: "#d4d4d8",
          }}
        >
          Qui intervient, quand et jusqu’à quel résultat ?
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          gap: 8,
          padding: 13,
          borderRadius: 22,
          border: "1px solid rgba(255,255,255,0.12)",
          background: "rgba(9,9,11,0.5)",
        }}
      >
        {stages.map(([number, label], index) => (
          <div
            key={label}
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              minHeight: 63,
              padding: "8px 9px",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.045)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 27,
                height: 27,
                borderRadius: 8,
                background: index < 4 ? "#f59e0b" : "#a78bfa",
                color: "#09090b",
                fontSize: 13,
                fontWeight: 850,
              }}
            >
              {number}
            </div>
            <div
              style={{
                display: "flex",
                marginLeft: 8,
                color: "#e4e4e7",
                fontSize: 11,
                fontWeight: 760,
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
