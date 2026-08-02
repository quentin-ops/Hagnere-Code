import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Remplacer Microsoft Access sans perdre le travail qu’il contient — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const paths = [
  "Stabiliser",
  "Séparer",
  "Stockage",
  "Standard",
  "Peu de code",
  "Web dédié",
  "Ne pas migrer",
];

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "54px 62px 48px",
        background:
          "radial-gradient(circle at 88% 8%, rgba(129,140,248,0.30), transparent 32%), linear-gradient(135deg, #09090b 0%, #111827 58%, #312e81 100%)",
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
            border: "1px solid rgba(165,180,252,0.35)",
            borderRadius: 999,
            color: "#c7d2fe",
            background: "rgba(49,46,129,0.25)",
            fontSize: 18,
          }}
        >
          Guide décisionnel 2026
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 38,
          maxWidth: 1030,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 49,
            lineHeight: 1.04,
            letterSpacing: -2,
            fontWeight: 800,
          }}
        >
          Remplacer Microsoft Access sans perdre le métier
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 14,
            fontSize: 22,
            color: "#c4b5fd",
          }}
        >
          Inventaire · 7 trajectoires · preuves de reprise
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          width: "100%",
          marginTop: "auto",
          gap: 18,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 235,
            padding: "18px 20px",
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: 18,
            background: "rgba(255,255,255,0.07)",
          }}
        >
          <div style={{ display: "flex", fontSize: 15, color: "#a5b4fc" }}>
            DOSSIER ACCESS
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 8,
              fontSize: 25,
              fontWeight: 800,
            }}
          >
            Tâches + objets
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 7,
              fontSize: 15,
              color: "#d4d4d8",
            }}
          >
            Dépendances et reprise
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 48,
            color: "#a5b4fc",
            fontSize: 33,
          }}
        >
          →
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            flex: 1,
          }}
        >
          {paths.map((path, index) => (
            <div
              key={path}
              style={{
                display: "flex",
                alignItems: "center",
                width: index === 6 ? 420 : 205,
                height: 42,
                padding: "0 13px",
                borderRadius: 12,
                border: "1px solid rgba(199,210,254,0.22)",
                background: "rgba(99,102,241,0.13)",
                color: "#f4f4f5",
                fontSize: 15,
                fontWeight: 700,
              }}
            >
              <div
                style={{
                  display: "flex",
                  marginRight: 9,
                  color: "#a5b4fc",
                  fontSize: 12,
                  fontWeight: 800,
                }}
              >
                0{index + 1}
              </div>
              {path}
            </div>
          ))}
        </div>
      </div>
    </div>,
    size,
  );
}
