import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Dette technique : mesurer cinq changements avant de décider";
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
        padding: 62,
        background:
          "radial-gradient(circle at 82% 18%,rgba(139,92,246,.24),transparent 34%),radial-gradient(circle at 12% 88%,rgba(16,185,129,.15),transparent 32%),linear-gradient(135deg,#09090b,#171426 58%,#10231d)",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            display: "flex",
            width: 52,
            height: 52,
            borderRadius: 14,
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg,#7c3aed,#10b981)",
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
            fontSize: 28,
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
            borderRadius: 999,
            border: "1px solid rgba(196,181,253,.3)",
            color: "#ddd6fe",
            fontSize: 19,
          }}
        >
          Décision de modernisation
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, alignItems: "center", gap: 50 }}>
        <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: "#c4b5fd",
              fontSize: 18,
              fontWeight: 800,
              letterSpacing: 2,
            }}
          >
            DETTE TECHNIQUE
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 14,
              maxWidth: 700,
              fontSize: 58,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -2,
            }}
          >
            Mesurez avant de tout réécrire
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              color: "#d4d4d8",
              fontSize: 23,
            }}
          >
            Retards · reprises · régressions · travail manuel
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: 345,
            flexDirection: "column",
            gap: 9,
            padding: 20,
            borderRadius: 25,
            border: "1px solid rgba(255,255,255,.13)",
            background: "rgba(9,9,11,.55)",
          }}
        >
          {[
            "1  Attente",
            "2  Reprise",
            "3  Régression",
            "4  Manuel",
            "5  Effet métier",
          ].map((label, index) => (
            <div
              key={label}
              style={{
                display: "flex",
                padding: "12px 15px",
                borderRadius: 12,
                background:
                  index === 4
                    ? "rgba(16,185,129,.14)"
                    : "rgba(255,255,255,.045)",
                border:
                  index === 4
                    ? "1px solid rgba(52,211,153,.28)"
                    : "1px solid rgba(255,255,255,.07)",
                color: index === 4 ? "#6ee7b7" : "#e4e4e7",
                fontSize: 18,
                fontWeight: 720,
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", color: "#a1a1aa", fontSize: 18 }}>
        Attendre · stabiliser · rénover · standard · réécrire
      </div>
    </div>,
    size,
  );
}
