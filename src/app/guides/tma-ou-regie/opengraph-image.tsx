import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Choisir la maintenance d’une application entre continuité récurrente, diagnostic borné, lot défini et formule hybride";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const modes = [
  {
    title: "RÉCURRENT",
    detail: "capacité réservée",
    color: "#34d399",
  },
  {
    title: "DIAGNOSTIC",
    detail: "conclusion bornée",
    color: "#60a5fa",
  },
  {
    title: "BORNÉ",
    detail: "lot accepté",
    color: "#a78bfa",
  },
  {
    title: "MIXTE",
    detail: "formule hybride",
    color: "#fbbf24",
  },
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
          "radial-gradient(circle at 88% 14%, rgba(139,92,246,0.25), transparent 31%), radial-gradient(circle at 12% 88%, rgba(16,185,129,0.22), transparent 34%), linear-gradient(135deg, #09090b 0%, #111827 56%, #312e81 100%)",
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
            background: "linear-gradient(135deg, #059669, #7c3aed)",
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
            border: "1px solid rgba(167,139,250,0.38)",
            background: "rgba(76,29,149,0.28)",
            color: "#ddd6fe",
            fontSize: 18,
            fontWeight: 650,
          }}
        >
          GUIDE TMA
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 44,
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
              fontSize: 59,
              fontWeight: 780,
              lineHeight: 1.04,
              letterSpacing: -2.2,
            }}
          >
            TMA ou régie : que choisir ?
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              maxWidth: 590,
              fontSize: 22,
              lineHeight: 1.35,
              color: "#c4b5fd",
            }}
          >
            Classez vos demandes avant de choisir le contrat
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 445,
            padding: 24,
            gap: 11,
            borderRadius: 26,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(9,9,11,0.58)",
            boxShadow: "0 24px 90px rgba(124,58,237,0.22)",
          }}
        >
          {modes.map((mode) => (
            <div
              key={mode.title}
              style={{
                display: "flex",
                alignItems: "center",
                minHeight: 65,
                padding: "11px 15px",
                borderRadius: 15,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.045)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 14,
                  height: 14,
                  borderRadius: 999,
                  background: mode.color,
                  boxShadow: `0 0 20px ${mode.color}`,
                }}
              />
              <div
                style={{
                  display: "flex",
                  marginLeft: 14,
                  width: 120,
                  fontSize: 16,
                  fontWeight: 760,
                  color: "#f4f4f5",
                }}
              >
                {mode.title}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 17,
                  color: "#a1a1aa",
                }}
              >
                {mode.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          fontSize: 16,
        }}
      >
        <span style={{ display: "flex", color: "#d4d4d8" }}>
          Historique · Priorités · Résultat · Responsabilités
        </span>
        <span
          style={{
            display: "flex",
            color: "#fde68a",
            fontWeight: 650,
          }}
        >
          Le contrat réel prime sur l’étiquette
        </span>
      </div>
    </div>,
    size,
  );
}
