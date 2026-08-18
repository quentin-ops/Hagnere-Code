import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Logiciel de gestion de stock : tester les écarts et comparer les solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const movements = [
  { label: "50 reçues", color: "#34d399" },
  { label: "8 réservées", color: "#a78bfa" },
  { label: "10 transférées", color: "#60a5fa" },
  { label: "2 cassées", color: "#fb7185" },
  { label: "1 retour", color: "#fbbf24" },
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
          "radial-gradient(circle at 90% 10%, rgba(16,185,129,0.22), transparent 34%), radial-gradient(circle at 8% 96%, rgba(37,99,235,0.22), transparent 36%), linear-gradient(135deg, #09090b, #111827 58%, #052e2b)",
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
            background: "linear-gradient(135deg, #059669, #2563eb)",
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
            border: "1px solid rgba(52,211,153,0.38)",
            background: "rgba(6,78,59,0.26)",
            color: "#a7f3d0",
            fontSize: 18,
            fontWeight: 650,
          }}
        >
          GUIDE DE DÉCISION
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 42 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            maxWidth: 610,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 55,
              fontWeight: 780,
              lineHeight: 1.04,
              letterSpacing: -2,
            }}
          >
            Quel mouvement rend votre stock faux ?
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 24,
              lineHeight: 1.35,
              color: "#bae6fd",
            }}
          >
            Testez 15 événements et comparez les coûts sur 36 mois
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 430,
            padding: 22,
            borderRadius: 26,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(9,9,11,0.58)",
          }}
        >
          {movements.map((movement, index) => (
            <div
              key={movement.label}
              style={{
                display: "flex",
                alignItems: "center",
                minHeight: 56,
                borderBottom:
                  index < movements.length - 1
                    ? "1px solid rgba(255,255,255,0.1)"
                    : "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 13,
                  height: 13,
                  borderRadius: 999,
                  background: movement.color,
                }}
              />
              <div
                style={{
                  display: "flex",
                  marginLeft: 15,
                  fontSize: 21,
                  fontWeight: 650,
                  color: "#f4f4f5",
                }}
              >
                {movement.label}
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: "auto",
                  fontSize: 18,
                  color: index < 2 ? "#86efac" : "#fda4af",
                }}
              >
                {index < 2 ? "confirmé" : "à vérifier"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>,
    size,
  );
}
