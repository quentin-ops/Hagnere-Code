import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Prise de rendez-vous en ligne : choisir selon les ressources et exceptions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const slots = [
  ["09:00", "Libre"],
  ["10:30", "Salle prise"],
  ["14:00", "Préparation"],
  ["15:30", "Confirmé"],
];

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
          "radial-gradient(circle at 85% 15%,rgba(59,130,246,.22),transparent 34%),radial-gradient(circle at 15% 90%,rgba(16,185,129,.16),transparent 33%),linear-gradient(135deg,#09090b,#101827 58%,#0e241d)",
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
            background: "linear-gradient(135deg,#2563eb,#10b981)",
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
            border: "1px solid rgba(110,231,183,.28)",
            color: "#a7f3d0",
            fontSize: 19,
          }}
        >
          Site vitrine
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, alignItems: "center", gap: 48 }}>
        <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: "#93c5fd",
              fontSize: 18,
              fontWeight: 800,
              letterSpacing: 2,
            }}
          >
            RENDEZ-VOUS EN LIGNE
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 14,
              maxWidth: 720,
              fontSize: 56,
              lineHeight: 1.02,
              fontWeight: 800,
              letterSpacing: -1.8,
            }}
          >
            Un créneau libre doit l’être vraiment
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              maxWidth: 700,
              color: "#d4d4d8",
              fontSize: 22,
              lineHeight: 1.35,
            }}
          >
            Personne · salle · durée · paiement · exceptions
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: 360,
            flexDirection: "column",
            gap: 10,
            padding: 20,
            borderRadius: 25,
            border: "1px solid rgba(255,255,255,.14)",
            background: "rgba(9,9,11,.55)",
          }}
        >
          {slots.map(([time, state], index) => (
            <div
              key={time}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "13px 15px",
                borderRadius: 13,
                border:
                  index === 3
                    ? "1px solid rgba(52,211,153,.32)"
                    : "1px solid rgba(255,255,255,.07)",
                background:
                  index === 3
                    ? "rgba(16,185,129,.14)"
                    : "rgba(255,255,255,.045)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  color: "#93c5fd",
                  fontSize: 19,
                  fontWeight: 800,
                }}
              >
                {time}
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: "auto",
                  color: index === 3 ? "#6ee7b7" : "#d4d4d8",
                  fontSize: 17,
                }}
              >
                {state}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", color: "#a1a1aa", fontSize: 18 }}>
        Formulaire · agenda · plateforme · paiement · intégration
      </div>
    </div>,
    size,
  );
}
