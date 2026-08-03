import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Test de relève d’un logiciel métier existant — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const gates = [
  { number: "01", label: "Observer" },
  { number: "02", label: "Construire" },
  { number: "03", label: "Déployer" },
  { number: "04", label: "Restaurer" },
  { number: "05", label: "Sortir" },
];

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "58px 64px",
        background:
          "radial-gradient(circle at 90% 10%, rgba(245,158,11,0.24), transparent 30%), linear-gradient(135deg, #09090b 0%, #111827 55%, #1e1b4b 100%)",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 52,
            height: 52,
            borderRadius: 15,
            background: "linear-gradient(135deg, #6366f1, #7c3aed)",
            fontSize: 20,
            fontWeight: 800,
          }}
        >
          HC
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: 16,
            fontSize: 27,
            fontWeight: 700,
          }}
        >
          Hagnéré Code
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: "auto",
            padding: "9px 18px",
            border: "1px solid rgba(251,191,36,0.34)",
            borderRadius: 999,
            color: "#fde68a",
            background: "rgba(146,64,14,0.2)",
            fontSize: 18,
          }}
        >
          Test de relève
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 58,
          maxWidth: 1040,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 56,
            lineHeight: 1.03,
            letterSpacing: -2.2,
            fontWeight: 800,
          }}
        >
          Reprendre un logiciel métier sans signer à l’aveugle
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 24,
            color: "#fde68a",
          }}
        >
          Cinq capacités vérifiées séparément
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          width: "100%",
          marginTop: "auto",
        }}
      >
        {gates.map((gate) => (
          <div
            key={gate.number}
            style={{
              display: "flex",
              alignItems: "center",
              flex: 1,
              minHeight: 72,
              padding: "13px 14px",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.055)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 38,
                height: 38,
                borderRadius: 11,
                background: "rgba(245,158,11,0.2)",
                color: "#fde68a",
                fontSize: 14,
                fontWeight: 800,
              }}
            >
              {gate.number}
            </div>
            <div
              style={{
                display: "flex",
                marginLeft: 10,
                fontSize: 16,
                fontWeight: 750,
              }}
            >
              {gate.label}
            </div>
          </div>
        ))}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: 180,
            padding: "13px 14px",
            borderRadius: 16,
            border: "1px solid rgba(251,191,36,0.34)",
            color: "#fde68a",
            background: "rgba(146,64,14,0.2)",
            fontSize: 14,
            fontWeight: 750,
            textAlign: "center",
          }}
        >
          Procès-verbal de reprise
        </div>
      </div>
    </div>,
    size,
  );
}
