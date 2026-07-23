import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Parcours local de la recherche Google jusqu’à une demande qualifiée";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const steps = [
  { label: "RECHERCHE", detail: "métier + zone", color: "#60a5fa" },
  { label: "FICHE", detail: "informations exactes", color: "#a78bfa" },
  { label: "SITE", detail: "service expliqué", color: "#22d3ee" },
  { label: "CONTACT", detail: "demande traitée", color: "#34d399" },
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
          "radial-gradient(circle at 88% 16%, rgba(16,185,129,0.22), transparent 31%), radial-gradient(circle at 12% 88%, rgba(37,99,235,0.24), transparent 34%), linear-gradient(135deg, #09090b 0%, #111827 56%, #0c4a6e 100%)",
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
            background: "linear-gradient(135deg, #2563eb, #059669)",
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
            border: "1px solid rgba(52,211,153,0.34)",
            background: "rgba(6,78,59,0.28)",
            color: "#a7f3d0",
            fontSize: 18,
            fontWeight: 650,
          }}
        >
          GUIDE PME
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 46,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            maxWidth: 600,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 56,
              fontWeight: 780,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Comment améliorer le SEO local de votre PME ?
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              maxWidth: 590,
              fontSize: 22,
              lineHeight: 1.35,
              color: "#bae6fd",
            }}
          >
            Alignez entreprise, fiche, site et traitement du contact
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 450,
            padding: 24,
            gap: 9,
            borderRadius: 26,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(9,9,11,0.58)",
            boxShadow: "0 24px 90px rgba(5,150,105,0.20)",
          }}
        >
          {steps.map((step, index) => (
            <div
              key={step.label}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  minHeight: 59,
                  padding: "10px 14px",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.045)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: 13,
                    height: 13,
                    borderRadius: 999,
                    background: step.color,
                    boxShadow: `0 0 20px ${step.color}`,
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    marginLeft: 13,
                    width: 112,
                    fontSize: 16,
                    fontWeight: 760,
                    color: "#f4f4f5",
                  }}
                >
                  {step.label}
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: 16,
                    color: "#a1a1aa",
                  }}
                >
                  {step.detail}
                </div>
              </div>
              {index < steps.length - 1 ? (
                <div
                  style={{
                    display: "flex",
                    alignSelf: "center",
                    width: 2,
                    height: 8,
                    background: "rgba(255,255,255,0.22)",
                  }}
                />
              ) : null}
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
          Fiche Google · Site · Avis authentiques · Mesure
        </span>
        <span
          style={{
            display: "flex",
            color: "#fde68a",
            fontWeight: 650,
          }}
        >
          Aucune place garantie
        </span>
      </div>
    </div>,
    size,
  );
}
