import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Transformer un fichier Excel en application métier — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 68,
        background:
          "linear-gradient(135deg, #09090b 0%, #111827 52%, #24103f 100%)",
        color: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 52,
            height: 52,
            borderRadius: 13,
            background: "#6D28D9",
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          HC
        </div>
        <div style={{ display: "flex", fontSize: 28, fontWeight: 600 }}>
          Hagnéré Code
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: "auto",
            border: "1px solid rgba(167,139,250,0.42)",
            borderRadius: 999,
            padding: "9px 20px",
            color: "#c4b5fd",
            fontSize: 21,
          }}
        >
          Guide pratique 2026
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 48 }}>
        <div
          style={{ display: "flex", flexDirection: "column", flex: 1, gap: 18 }}
        >
          <div
            style={{
              display: "flex",
              maxWidth: 760,
              fontSize: 52,
              fontWeight: 750,
              lineHeight: 1.08,
              letterSpacing: -2,
            }}
          >
            Transformer Excel en application métier
          </div>
          <div style={{ display: "flex", fontSize: 27, color: "#a1a1aa" }}>
            Garder Excel, acheter un logiciel ou créer une application
          </div>
        </div>

        <div
          style={{
            width: 280,
            height: 220,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            borderRadius: 22,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(255,255,255,0.05)",
            boxShadow: "0 24px 80px rgba(109,40,217,0.22)",
          }}
        >
          <div
            style={{
              display: "flex",
              height: 42,
              background: "#166534",
              alignItems: "center",
              padding: "0 16px",
              fontSize: 17,
              fontWeight: 700,
            }}
          >
            EXCEL → APP
          </div>
          {["Données", "Règles métier", "Droits", "Historique"].map(
            (label, index) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 16px",
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  color: index === 3 ? "#c4b5fd" : "#e4e4e7",
                  fontSize: 18,
                }}
              >
                <div style={{ display: "flex", width: 24 }}>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 999,
                      background: "#a78bfa",
                    }}
                  />
                </div>
                {label}
              </div>
            ),
          )}
        </div>
      </div>

      <div style={{ display: "flex", gap: 12 }}>
        {[
          "Diagnostic",
          "Coûts sur 4 ans",
          "Migration des données",
          "Contrat",
        ].map((label) => (
          <div
            key={label}
            style={{
              display: "flex",
              padding: "11px 18px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.10)",
              color: "#d4d4d8",
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
