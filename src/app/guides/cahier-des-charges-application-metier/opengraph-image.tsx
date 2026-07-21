import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Cahier des charges d’une application métier pour obtenir des devis comparables";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const steps = [
  { number: "01", title: "Votre travail", detail: "La situation réelle" },
  { number: "02", title: "Ce qu’il faut", detail: "Le résultat attendu" },
  { number: "03", title: "Comment vérifier", detail: "Le test avant paiement" },
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
        padding: 66,
        background:
          "radial-gradient(circle at 82% 22%, rgba(14,165,233,0.20), transparent 29%), linear-gradient(135deg, #09090b 0%, #111827 55%, #172554 100%)",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
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
            padding: "9px 19px",
            borderRadius: 999,
            border: "1px solid rgba(147,197,253,0.35)",
            background: "rgba(30,64,175,0.16)",
            color: "#bfdbfe",
            fontSize: 20,
          }}
        >
          Guide pratique 2026
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 54,
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{
              display: "flex",
              maxWidth: 665,
              fontSize: 50,
              fontWeight: 760,
              lineHeight: 1.07,
              letterSpacing: -1.8,
            }}
          >
            Cahier des charges d&apos;une application métier
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 26,
              color: "#a5b4fc",
            }}
          >
            Expliquez le besoin et comparez enfin les mêmes projets
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 350,
            gap: 10,
            padding: 18,
            borderRadius: 24,
            border: "1px solid rgba(255,255,255,0.13)",
            background: "rgba(255,255,255,0.055)",
            boxShadow: "0 24px 80px rgba(37,99,235,0.18)",
          }}
        >
          {steps.map((step, index) => (
            <div
              key={step.number}
              style={{
                display: "flex",
                alignItems: "center",
                minHeight: 60,
                padding: "10px 14px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.09)",
                background:
                  index === 2
                    ? "linear-gradient(90deg, rgba(37,99,235,0.34), rgba(124,58,237,0.22))"
                    : "rgba(9,9,11,0.30)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 39,
                  height: 39,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 11,
                  background:
                    index === 2 ? "#2563eb" : "rgba(255,255,255,0.08)",
                  color: index === 2 ? "#ffffff" : "#93c5fd",
                  fontSize: 15,
                  fontWeight: 750,
                }}
              >
                {step.number}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 13,
                }}
              >
                <div style={{ display: "flex", fontSize: 21, fontWeight: 700 }}>
                  {step.title}
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: 15,
                    color: "#a1a1aa",
                    marginTop: 2,
                  }}
                >
                  {step.detail}
                </div>
              </div>
              {index < 2 && (
                <div
                  style={{
                    display: "flex",
                    marginLeft: "auto",
                    color: "#60a5fa",
                    fontSize: 25,
                  }}
                >
                  →
                </div>
              )}
              {index === 2 && (
                <div
                  style={{
                    display: "flex",
                    marginLeft: "auto",
                    width: 28,
                    height: 28,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 999,
                    background: "#22c55e",
                    color: "#052e16",
                    fontSize: 11,
                    fontWeight: 800,
                  }}
                >
                  OK
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {[
          "Modèle gratuit",
          "5 à 8 scénarios",
          "Devis comparables",
          "Tests avant paiement",
        ].map((label) => (
          <div
            key={label}
            style={{
              display: "flex",
              padding: "10px 17px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.055)",
              border: "1px solid rgba(255,255,255,0.10)",
              color: "#d4d4d8",
              fontSize: 19,
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
