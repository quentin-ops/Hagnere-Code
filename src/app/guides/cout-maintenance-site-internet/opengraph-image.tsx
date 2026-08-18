import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Maintenance d’un site : périmètre, preuves, incident et TCO à 12 et 36 mois";
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
        justifyContent: "space-between",
        padding: 68,
        background:
          "radial-gradient(circle at 82% 18%, rgba(109,40,217,.28), transparent 38%), linear-gradient(135deg, #09090b 0%, #18112b 100%)",
        color: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 52,
            height: 52,
            borderRadius: 12,
            background: "#6D28D9",
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          HC
        </div>
        <div style={{ display: "flex", fontSize: 28, fontWeight: 600 }}>
          Hagnéré Code
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: "auto",
            fontSize: 20,
            color: "#C4B5FD",
            border: "1px solid rgba(196,181,253,.42)",
            borderRadius: 999,
            padding: "8px 20px",
          }}
        >
          Guide décisionnel 2026
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div
          style={{
            display: "flex",
            maxWidth: 1020,
            fontSize: 57,
            fontWeight: 750,
            lineHeight: 1.08,
            letterSpacing: -2,
          }}
        >
          Maintenance d’un site : comparer par la preuve
        </div>
        <div style={{ display: "flex", fontSize: 29, color: "#A1A1AA" }}>
          Périmètre · incident · TCO 12/36 · reprise
        </div>
      </div>

      <div style={{ display: "flex", gap: 14 }}>
        {["Vitrine", "Boutique", "Service critique"].map((label) => (
          <div
            key={label}
            style={{
              display: "flex",
              fontSize: 23,
              padding: "11px 23px",
              borderRadius: 999,
              background: "rgba(255,255,255,.06)",
              border: "1px solid rgba(255,255,255,.12)",
              color: "#E4E4E7",
            }}
          >
            {label}
          </div>
        ))}
        <div
          style={{
            display: "flex",
            marginLeft: "auto",
            alignItems: "center",
            fontSize: 18,
            color: "#D8B4FE",
          }}
        >
          Deux offres · même périmètre
        </div>
      </div>
    </div>,
    size,
  );
}
