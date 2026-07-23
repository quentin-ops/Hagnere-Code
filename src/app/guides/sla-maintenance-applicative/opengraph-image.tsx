import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "SLA applicatif : distinguer réponse, rétablissement et restauration";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const steps = [
  ["09:18", "Reçu"],
  ["10:05", "Pris en charge"],
  ["11:40", "Contourné"],
  ["14:20", "Rétabli"],
  ["16:00", "Données vérifiées"],
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
        padding: 62,
        background:
          "radial-gradient(circle at 82% 15%,rgba(245,158,11,.22),transparent 33%),radial-gradient(circle at 15% 90%,rgba(59,130,246,.15),transparent 32%),linear-gradient(135deg,#09090b,#18181b 55%,#29200f)",
        color: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 52,
            height: 52,
            borderRadius: 14,
            background: "linear-gradient(135deg,#f59e0b,#2563eb)",
            fontWeight: 800,
            fontSize: 20,
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
            border: "1px solid rgba(251,191,36,.3)",
            color: "#fde68a",
            fontSize: 19,
          }}
        >
          Maintenance applicative
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            color: "#fcd34d",
            fontSize: 18,
            fontWeight: 800,
            letterSpacing: 2,
          }}
        >
          SLA POUR DIRIGEANTS
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 12,
            maxWidth: 1030,
            fontSize: 56,
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: -1.8,
          }}
        >
          Une réponse rapide ne rétablit pas l’activité
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 17,
            color: "#d4d4d8",
            fontSize: 23,
          }}
        >
          Écrivez ce que chaque horloge doit réellement promettre
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: 8,
          padding: 13,
          borderRadius: 20,
          border: "1px solid rgba(255,255,255,.13)",
          background: "rgba(9,9,11,.54)",
        }}
      >
        {steps.map(([time, label], index) => (
          <div
            key={time}
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              padding: "11px 9px",
              borderRadius: 12,
              background:
                index === 3 ? "rgba(34,197,94,.13)" : "rgba(255,255,255,.045)",
              border:
                index === 3
                  ? "1px solid rgba(74,222,128,.28)"
                  : "1px solid rgba(255,255,255,.07)",
            }}
          >
            <div
              style={{
                display: "flex",
                color: index === 3 ? "#86efac" : "#fcd34d",
                fontSize: 17,
                fontWeight: 800,
              }}
            >
              {time}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 5,
                color: "#d4d4d8",
                fontSize: 14,
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
