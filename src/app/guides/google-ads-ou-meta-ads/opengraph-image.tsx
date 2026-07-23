import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Google Ads ou Meta Ads selon la manière dont le client découvre l’offre";
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
          "radial-gradient(circle at 18% 15%, rgba(59,130,246,.22), transparent 31%), radial-gradient(circle at 88% 82%, rgba(236,72,153,.2), transparent 34%), linear-gradient(135deg,#09090b,#111827 55%,#1f1028)",
        color: "white",
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
            background: "linear-gradient(135deg,#2563eb,#db2777)",
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
            border: "1px solid rgba(255,255,255,.18)",
            color: "#e4e4e7",
            fontSize: 19,
          }}
        >
          Guide pour dirigeants
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, alignItems: "center", gap: 45 }}>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{
              display: "flex",
              color: "#c4b5fd",
              fontSize: 18,
              fontWeight: 800,
              letterSpacing: 2,
            }}
          >
            PUBLICITÉ EN LIGNE
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 15,
              maxWidth: 650,
              fontSize: 60,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -2,
            }}
          >
            Google Ads ou Meta Ads ?
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              maxWidth: 650,
              color: "#d4d4d8",
              fontSize: 23,
              lineHeight: 1.35,
            }}
          >
            Choisir selon la découverte du client, puis mesurer les ventes
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: 400,
            flexDirection: "column",
            gap: 14,
            padding: 22,
            borderRadius: 26,
            border: "1px solid rgba(255,255,255,.15)",
            background: "rgba(9,9,11,.54)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 18,
              borderRadius: 17,
              background: "rgba(37,99,235,.17)",
              border: "1px solid rgba(96,165,250,.3)",
            }}
          >
            <div
              style={{
                display: "flex",
                color: "#93c5fd",
                fontSize: 20,
                fontWeight: 800,
              }}
            >
              GOOGLE SEARCH
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 7,
                color: "#e4e4e7",
                fontSize: 18,
              }}
            >
              Le client cherche déjà
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 18,
              borderRadius: 17,
              background: "rgba(219,39,119,.14)",
              border: "1px solid rgba(244,114,182,.3)",
            }}
          >
            <div
              style={{
                display: "flex",
                color: "#f9a8d4",
                fontSize: 20,
                fontWeight: 800,
              }}
            >
              META ADS
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 7,
                color: "#e4e4e7",
                fontSize: 18,
              }}
            >
              L’offre doit d’abord se montrer
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 14,
              borderRadius: 15,
              color: "#fde68a",
              background: "rgba(245,158,11,.11)",
              border: "1px solid rgba(251,191,36,.24)",
              fontSize: 18,
              fontWeight: 750,
            }}
          >
            Verdict : ventes et marge
          </div>
        </div>
      </div>

      <div style={{ display: "flex", color: "#a1a1aa", fontSize: 18 }}>
        Recherche formulée · Démonstration · Mesure · Option de reporter
      </div>
    </div>,
    size,
  );
}
