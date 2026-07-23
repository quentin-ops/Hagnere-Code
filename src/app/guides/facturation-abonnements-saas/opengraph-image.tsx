import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Facturation SaaS : relier offre, facture, paiement et accès";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const records = [
  { label: "Offre", color: "#a78bfa" },
  { label: "Facture", color: "#60a5fa" },
  { label: "Paiement", color: "#34d399" },
  { label: "Accès", color: "#fbbf24" },
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
          "radial-gradient(circle at 88% 12%, rgba(37,99,235,0.26), transparent 34%), radial-gradient(circle at 8% 96%, rgba(124,58,237,0.24), transparent 36%), linear-gradient(135deg, #09090b, #111827 60%, #172554)",
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
            padding: "9px 18px",
            borderRadius: 999,
            border: "1px solid rgba(96,165,250,0.42)",
            background: "rgba(30,64,175,0.24)",
            color: "#bfdbfe",
            fontSize: 18,
            fontWeight: 650,
          }}
        >
          CYCLE D’ABONNEMENT
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            maxWidth: 960,
            fontSize: 57,
            fontWeight: 780,
            lineHeight: 1.04,
            letterSpacing: -2.2,
          }}
        >
          Facturer un SaaS sans confondre paiement et accès
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 21,
            fontSize: 24,
            color: "#c4b5fd",
          }}
        >
          Quatre informations à relier, six événements à décider
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          gap: 12,
        }}
      >
        {records.map((record, index) => (
          <div
            key={record.label}
            style={{
              display: "flex",
              alignItems: "center",
              flex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                padding: "16px 14px",
                borderRadius: 15,
                border: `1px solid ${record.color}66`,
                background: "rgba(9,9,11,0.58)",
                color: "#f4f4f5",
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              <span
                style={{
                  display: "flex",
                  width: 10,
                  height: 10,
                  marginRight: 10,
                  borderRadius: 999,
                  background: record.color,
                }}
              />
              {record.label}
            </div>
            {index < records.length - 1 && (
              <div
                style={{
                  display: "flex",
                  marginLeft: 12,
                  color: "#71717a",
                  fontSize: 26,
                }}
              >
                ↔
              </div>
            )}
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
