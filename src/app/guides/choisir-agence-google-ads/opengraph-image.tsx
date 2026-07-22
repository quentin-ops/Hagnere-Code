import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Choisir une agence Google Ads à partir de six preuves vérifiables";
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
        padding: 72,
        background:
          "radial-gradient(circle at 84% 18%, rgba(59,130,246,0.28), transparent 34%), linear-gradient(135deg, #09090b 0%, #172554 100%)",
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
            background: "#2563eb",
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
            fontSize: 21,
            color: "#bfdbfe",
            border: "1px solid rgba(147,197,253,0.4)",
            borderRadius: 999,
            padding: "9px 20px",
          }}
        >
          Décision Google Ads
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
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
          Comment choisir une agence Google Ads ?
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: 940,
            fontSize: 29,
            color: "#d4d4d8",
          }}
        >
          Six preuves à demander avant de comparer les promesses
        </div>
      </div>

      <div style={{ display: "flex", gap: 14 }}>
        {[
          ["01", "Accès"],
          ["02", "Coûts"],
          ["03", "Personne"],
          ["04", "Résultat"],
          ["05", "Décision"],
          ["06", "Sortie"],
        ].map(([number, label]) => (
          <div
            key={number}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              padding: "12px 18px",
              borderRadius: 14,
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.13)",
              fontSize: 20,
              color: "#f4f4f5",
            }}
          >
            <span style={{ color: "#93c5fd", fontWeight: 700 }}>{number}</span>
            {label}
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
