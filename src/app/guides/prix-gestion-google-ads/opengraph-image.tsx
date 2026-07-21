import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Combien coûte Google Ads : budget publicitaire, gestion et frais de lancement";
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
          "radial-gradient(circle at 83% 22%, rgba(66,133,244,0.25), transparent 31%), radial-gradient(circle at 76% 88%, rgba(52,168,83,0.13), transparent 27%), linear-gradient(135deg, #09090b 0%, #111827 55%, #151020 100%)",
        color: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: 52,
            height: 52,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
          gap: 48,
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
              maxWidth: 680,
              fontSize: 55,
              fontWeight: 780,
              lineHeight: 1.04,
              letterSpacing: -2.3,
            }}
          >
            Prix de gestion Google Ads
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
            Budget publicitaire, gestion et frais de lancement sur 3, 6 et 12
            mois
          </div>
        </div>

        <div
          style={{
            width: 350,
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
              marginBottom: 17,
            }}
          >
            <span style={{ display: "flex" }}>COÛT COMPLET</span>
            <span style={{ display: "flex", color: "#93c5fd" }}>7 LIGNES</span>
          </div>

          {[
            ["Publicité", "payée à Google", "#60a5fa"],
            ["Gestion", "agence ou freelance", "#a78bfa"],
            ["Suivi des demandes", "outils", "#34d399"],
            ["Page et visuels", "si nécessaires", "#fbbf24"],
          ].map(([label, value, color]) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: 12,
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
              fontSize: 21,
              fontWeight: 700,
            }}
          >
            <span style={{ display: "flex" }}>3 scénarios</span>
            <span style={{ display: "flex", marginLeft: "auto" }}>
              Seuil par prospect
            </span>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {["Prix mensuel", "Coût par prospect", "Compte à votre nom"].map(
          (label) => (
            <div
              key={label}
              style={{
                display: "flex",
                padding: "10px 17px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.055)",
                border: "1px solid rgba(255,255,255,0.09)",
                color: "#d4d4d8",
                fontSize: 18,
              }}
            >
              {label}
            </div>
          ),
        )}
      </div>
    </div>,
    size,
  );
}
