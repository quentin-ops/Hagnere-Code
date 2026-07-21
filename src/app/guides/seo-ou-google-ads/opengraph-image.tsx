import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SEO ou Google Ads : lequel choisir pour votre entreprise ?";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const paths = [
  { label: "GOOGLE ADS", detail: "tester vite", color: "#60a5fa" },
  { label: "SEO", detail: "investir dans le temps", color: "#34d399" },
  { label: "LES DEUX", detail: "deux rôles précis", color: "#a78bfa" },
  { label: "ATTENDRE", detail: "corriger le site d’abord", color: "#fbbf24" },
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
          "radial-gradient(circle at 82% 16%, rgba(124,58,237,0.25), transparent 30%), radial-gradient(circle at 73% 90%, rgba(37,99,235,0.17), transparent 32%), linear-gradient(135deg, #09090b 0%, #111827 58%, #172554 100%)",
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
            border: "1px solid rgba(167,139,250,0.38)",
            background: "rgba(76,29,149,0.21)",
            color: "#ddd6fe",
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
            maxWidth: 650,
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#c4b5fd",
              fontSize: 19,
              fontWeight: 750,
              letterSpacing: 2.2,
            }}
          >
            BUDGET D’ACQUISITION
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 13,
              fontSize: 61,
              fontWeight: 780,
              lineHeight: 1.01,
              letterSpacing: -2.2,
            }}
          >
            SEO ou Google Ads ?
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 21,
              maxWidth: 620,
              fontSize: 23,
              lineHeight: 1.35,
              color: "#d4d4d8",
            }}
          >
            Payer pour être visible maintenant ou investir dans votre site ?
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 408,
            padding: 20,
            gap: 9,
            borderRadius: 25,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(9,9,11,0.53)",
            boxShadow: "0 24px 90px rgba(124,58,237,0.22)",
          }}
        >
          {paths.map((path, index) => (
            <div
              key={path.label}
              style={{
                display: "flex",
                alignItems: "center",
                minHeight: 58,
                padding: "9px 12px",
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
                  width: 30,
                  height: 30,
                  borderRadius: 9,
                  background: path.color,
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
                  color: path.color,
                  fontSize: 17,
                  fontWeight: 780,
                }}
              >
                {path.label}
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: "auto",
                  color: "#a1a1aa",
                  fontSize: 16,
                }}
              >
                {path.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {["Délai", "Budget", "Type de vente", "Suivi des demandes"].map(
          (label) => (
            <div
              key={label}
              style={{
                display: "flex",
                padding: "10px 17px",
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
