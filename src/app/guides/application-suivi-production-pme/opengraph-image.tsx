import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Scénario fictif d’un ordre de fabrication suivi de son démarrage à son bilan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const events = [
  { time: "8 h 10", label: "démarré", color: "#a78bfa" },
  { time: "10 h 05", label: "40 + 3 + 7", color: "#60a5fa" },
  { time: "11 h 00", label: "bloqué", color: "#fbbf24" },
  { time: "11 h 40", label: "repris", color: "#22d3ee" },
  { time: "12 h 00", label: "60 transférées", color: "#e879f9" },
  { time: "15 h 20", label: "92 + 5 + 3", color: "#34d399" },
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
          "radial-gradient(circle at 88% 14%, rgba(16,185,129,0.22), transparent 30%), radial-gradient(circle at 12% 90%, rgba(124,58,237,0.18), transparent 35%), linear-gradient(135deg, #09090b 0%, #111827 56%, #082f49 100%)",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 52,
            height: 52,
            borderRadius: 14,
            background: "linear-gradient(135deg, #7c3aed, #0891b2)",
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
            border: "1px solid rgba(52,211,153,0.35)",
            background: "rgba(6,78,59,0.30)",
            color: "#a7f3d0",
            fontSize: 17,
            fontWeight: 650,
          }}
        >
          SCÉNARIO FICTIF · OF-FICTIF-2407
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 42,
          width: "100%",
        }}
      >
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
              fontSize: 53,
              fontWeight: 780,
              lineHeight: 1.06,
              letterSpacing: -2,
            }}
          >
            Comment suivre votre production sans surdimensionner l’outil ?
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              maxWidth: 600,
              fontSize: 22,
              lineHeight: 1.35,
              color: "#bae6fd",
            }}
          >
            Reconstituez une journée, puis comparez cinq réponses
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
            boxShadow: "0 24px 90px rgba(8,145,178,0.20)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 15,
              color: "#d4d4d8",
              fontSize: 16,
            }}
          >
            <span style={{ display: "flex", fontWeight: 700 }}>100 pièces</span>
            <span style={{ display: "flex" }}>ordre encore ouvert</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {events.map((event) => (
              <div
                key={event.time}
                style={{
                  display: "flex",
                  alignItems: "center",
                  minHeight: 43,
                  padding: "7px 12px",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.045)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: 11,
                    height: 11,
                    borderRadius: 999,
                    background: event.color,
                    boxShadow: `0 0 18px ${event.color}`,
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    marginLeft: 12,
                    width: 78,
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#f4f4f5",
                  }}
                >
                  {event.time}
                </div>
                <div
                  style={{
                    display: "flex",
                    marginLeft: 9,
                    fontSize: 16,
                    color: "#a1a1aa",
                  }}
                >
                  {event.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", gap: 10 }}>
          {["ATTENDRE", "EXISTANT", "STANDARD", "NO-CODE", "SUR-MESURE"].map(
            (label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  padding: "8px 13px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.14)",
                  background: "rgba(255,255,255,0.055)",
                  color: "#d4d4d8",
                  fontSize: 14,
                  fontWeight: 650,
                }}
              >
                {label}
              </div>
            ),
          )}
        </div>
        <div
          style={{
            display: "flex",
            color: "#a7f3d0",
            fontSize: 16,
            fontWeight: 650,
          }}
        >
          92 acceptées · 5 rebuts · 3 en reprise
        </div>
      </div>
    </div>,
    size,
  );
}
