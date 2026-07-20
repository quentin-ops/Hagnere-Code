import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Combien coûte un CRM en 2026 — trois socles chiffrés et méthode TCO — Hagnéré Code";
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
        padding: 64,
        background:
          "radial-gradient(circle at 84% 18%, rgba(37,99,235,0.23), transparent 30%), linear-gradient(135deg, #09090b 0%, #111827 56%, #18112b 100%)",
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
            background: "linear-gradient(135deg, #7c3aed, #2563eb)",
            fontSize: 21,
            fontWeight: 800,
          }}
        >
          HC
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: 16,
            fontSize: 27,
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
            border: "1px solid rgba(147,197,253,0.35)",
            color: "#bfdbfe",
            fontSize: 20,
          }}
        >
          Guide budget 2026
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          flex: 1,
          gap: 52,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            gap: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              maxWidth: 670,
              fontSize: 57,
              fontWeight: 780,
              lineHeight: 1.04,
              letterSpacing: -2.4,
            }}
          >
            Combien coûte vraiment un CRM ?
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 650,
              color: "#a1a1aa",
              fontSize: 26,
              lineHeight: 1.3,
            }}
          >
            Licences, temps interne et sortie comparés sur 36 mois
          </div>
        </div>

        <div
          style={{
            width: 360,
            display: "flex",
            flexDirection: "column",
            padding: 24,
            borderRadius: 24,
            border: "1px solid rgba(255,255,255,0.13)",
            background: "rgba(255,255,255,0.055)",
            boxShadow: "0 30px 90px rgba(37,99,235,0.18)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "#d4d4d8",
              fontSize: 18,
              marginBottom: 18,
            }}
          >
            <span style={{ display: "flex" }}>MÉTHODE TCO</span>
            <span style={{ display: "flex", color: "#93c5fd" }}>36 MOIS</span>
          </div>

          {[
            ["Licences", "36 mois", "#60a5fa"],
            ["Déploiement", "périmètre", "#a78bfa"],
            ["Temps interne", "heures", "#34d399"],
            ["Sortie", "export", "#fbbf24"],
          ].map(([label, value, color]) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: 11,
                fontSize: 18,
              }}
            >
              <span
                style={{
                  display: "flex",
                  width: 10,
                  height: 10,
                  borderRadius: 99,
                  background: color,
                  marginRight: 12,
                }}
              />
              <span style={{ display: "flex", color: "#d4d4d8" }}>{label}</span>
              <span
                style={{
                  display: "flex",
                  marginLeft: "auto",
                  color,
                  fontWeight: 700,
                }}
              >
                {value}
              </span>
            </div>
          ))}

          <div
            style={{
              display: "flex",
              marginTop: 22,
              paddingTop: 18,
              borderTop: "1px solid rgba(255,255,255,0.12)",
              color: "#fff",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            <span style={{ display: "flex" }}>3 socles</span>
            <span style={{ display: "flex", marginLeft: "auto" }}>
              1 formule
            </span>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {[
          "Tarifs officiels datés",
          "Coûts cachés",
          "Grille de devis",
          "Clauses de sortie",
        ].map((label) => (
          <div
            key={label}
            style={{
              display: "flex",
              padding: "10px 16px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.055)",
              border: "1px solid rgba(255,255,255,0.09)",
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
