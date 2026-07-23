import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Même cohorte Google Ads calculée à 35, 250 et 1 000 euros selon le dénominateur";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const metrics = [
  {
    value: "35 €",
    label: "par demande · média",
    detail: "1 400 € / 40",
    color: "#60a5fa",
  },
  {
    value: "250 €",
    label: "par lead qualifié",
    detail: "2 000 € / 8",
    color: "#a78bfa",
  },
  {
    value: "1 000 €",
    label: "par client",
    detail: "2 000 € / 2",
    color: "#34d399",
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
        padding: 60,
        background:
          "radial-gradient(circle at 88% 14%, rgba(16,185,129,0.20), transparent 31%), radial-gradient(circle at 10% 90%, rgba(59,130,246,0.20), transparent 34%), linear-gradient(135deg, #09090b 0%, #111827 54%, #052e2b 100%)",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <div
          style={{
            width: 52,
            height: 52,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
            padding: "9px 18px",
            borderRadius: 999,
            border: "1px solid rgba(96,165,250,0.38)",
            background: "rgba(30,64,175,0.28)",
            color: "#bfdbfe",
            fontSize: 17,
            fontWeight: 650,
          }}
        >
          EXEMPLE FICTIF
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <div
          style={{
            display: "flex",
            maxWidth: 950,
            fontSize: 54,
            fontWeight: 780,
            lineHeight: 1.04,
            letterSpacing: -2,
          }}
        >
          Quel est votre vrai coût par lead Google Ads ?
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            gap: 18,
            width: "100%",
          }}
        >
          {metrics.map((metric) => (
            <div
              key={metric.value}
              style={{
                width: 347,
                display: "flex",
                flexDirection: "column",
                padding: "20px 22px",
                borderRadius: 20,
                border: `1px solid ${metric.color}55`,
                background: "rgba(9,9,11,0.60)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  color: metric.color,
                  fontSize: 39,
                  fontWeight: 780,
                  letterSpacing: -1,
                }}
              >
                {metric.value}
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: 4,
                  color: "#f4f4f5",
                  fontSize: 18,
                  fontWeight: 650,
                }}
              >
                {metric.label}
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: 8,
                  color: "#a1a1aa",
                  fontSize: 15,
                }}
              >
                {metric.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#d4d4d8",
            fontSize: 17,
            fontWeight: 600,
          }}
        >
          Même cohorte · trois dénominateurs · trois décisions
        </div>
        <div
          style={{
            display: "flex",
            color: "#a7f3d0",
            fontSize: 17,
            fontWeight: 650,
          }}
        >
          hagnere-code.ai
        </div>
      </div>
    </div>,
    { ...size },
  );
}
