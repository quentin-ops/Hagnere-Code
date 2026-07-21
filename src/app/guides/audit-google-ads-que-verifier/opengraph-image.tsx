import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Audit Google Ads : relier clics, prospects et ventes avant d’augmenter le budget";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const evidenceRows = [
  ["CONVERSIONS", "PROSPECTS RÉELS"],
  ["MOTS RECHERCHÉS", "BESOINS DES CLIENTS"],
  ["BUDGET DÉPENSÉ", "VENTES ET MARGE"],
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
          "radial-gradient(circle at 82% 15%, rgba(37,99,235,0.26), transparent 30%), radial-gradient(circle at 76% 90%, rgba(16,185,129,0.18), transparent 32%), linear-gradient(135deg, #09090b 0%, #111827 58%, #052e2b 100%)",
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
            background: "linear-gradient(135deg, #2563eb, #059669)",
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
            background: "rgba(30,64,175,0.2)",
            color: "#bfdbfe",
            fontSize: 20,
          }}
        >
          Guide de décision
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 44,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            maxWidth: 615,
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#93c5fd",
              fontSize: 19,
              fontWeight: 750,
              letterSpacing: 2.2,
            }}
          >
            AUDIT GOOGLE ADS
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 13,
              fontSize: 58,
              fontWeight: 780,
              lineHeight: 1.02,
              letterSpacing: -2.1,
            }}
          >
            Que vérifier avant d’investir plus ?
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              maxWidth: 595,
              fontSize: 22,
              lineHeight: 1.36,
              color: "#d4d4d8",
            }}
          >
            Relier les chiffres de Google aux prospects et aux ventes.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 430,
            padding: 23,
            borderRadius: 25,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(9,9,11,0.53)",
            boxShadow: "0 24px 90px rgba(37,99,235,0.22)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 12,
              fontSize: 14,
              fontWeight: 750,
              letterSpacing: 1.3,
            }}
          >
            <div style={{ display: "flex", color: "#93c5fd" }}>DANS GOOGLE</div>
            <div style={{ display: "flex", color: "#6ee7b7" }}>
              DANS L’ENTREPRISE
            </div>
          </div>
          {evidenceRows.map(([ads, business]) => (
            <div
              key={ads}
              style={{
                display: "flex",
                alignItems: "center",
                minHeight: 56,
                marginTop: 8,
                padding: "9px 12px",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.045)",
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              <div style={{ display: "flex", width: 142, color: "#bfdbfe" }}>
                {ads}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 36,
                  height: 26,
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.08)",
                  color: "#a1a1aa",
                }}
              >
                →
              </div>
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  marginLeft: 12,
                  color: "#a7f3d0",
                }}
              >
                {business}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {["Données insuffisantes", "Corriger", "Tester", "Hausse encadrée"].map(
          (label) => (
            <div
              key={label}
              style={{
                display: "flex",
                padding: "10px 16px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.055)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#d4d4d8",
                fontSize: 17,
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
