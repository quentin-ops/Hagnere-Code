import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Quel budget Google Ads pour une PME ? — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const amounts = [
  { label: "DÉPENSE GOOGLE", value: "À CHIFFRER", color: "#60a5fa" },
  {
    label: "PLAFOND SI OBJECTIF ATTEINT",
    value: "À CHIFFRER",
    color: "#a78bfa",
  },
  { label: "PLAFOND DE TRÉSORERIE", value: "À CHIFFRER", color: "#fbbf24" },
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
          "radial-gradient(circle at 88% 18%, rgba(37,99,235,0.3), transparent 32%), radial-gradient(circle at 12% 90%, rgba(124,58,237,0.26), transparent 38%), #09090b",
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
          Guide pour dirigeants
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
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{
              display: "flex",
              maxWidth: 650,
              fontSize: 53,
              fontWeight: 760,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Quel budget Google Ads votre PME peut-elle tester ?
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 24,
              color: "#c4b5fd",
            }}
          >
            Aucun minimum arbitraire · trois montants à calculer
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 360,
            gap: 12,
            padding: 20,
            borderRadius: 24,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(255,255,255,0.055)",
          }}
        >
          {amounts.map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "13px 16px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.09)",
                background: "rgba(9,9,11,0.46)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  color: item.color,
                  fontSize: 14,
                  fontWeight: 800,
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: 4,
                  fontSize: 27,
                  fontWeight: 760,
                }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", gap: 12 }}>
        {["Lancer", "Réduire", "Préparer", "Reporter"].map((label) => (
          <div
            key={label}
            style={{
              display: "flex",
              padding: "10px 17px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.055)",
              border: "1px solid rgba(255,255,255,0.10)",
              color: "#d4d4d8",
              fontSize: 18,
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
