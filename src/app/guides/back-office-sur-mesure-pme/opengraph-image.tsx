import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Une commande passe du commercial à l’administration puis à la comptabilité dans un back-office de PME";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const steps = [
  { role: "COMMERCIAL", state: "commande reçue", color: "#a78bfa" },
  { role: "ADMINISTRATION", state: "pièces vérifiées", color: "#60a5fa" },
  { role: "COMPTABILITÉ", state: "prête à facturer", color: "#34d399" },
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
        padding: 64,
        background:
          "radial-gradient(circle at 84% 18%, rgba(37,99,235,0.28), transparent 31%), radial-gradient(circle at 15% 88%, rgba(16,185,129,0.14), transparent 33%), linear-gradient(135deg, #09090b 0%, #101827 56%, #172554 100%)",
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
            border: "1px solid rgba(96,165,250,0.38)",
            background: "rgba(30,64,175,0.24)",
            color: "#bfdbfe",
            fontSize: 20,
          }}
        >
          Guide PME
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
            maxWidth: 625,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 55,
              fontWeight: 780,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Faut-il créer votre back-office sur mesure ?
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              maxWidth: 600,
              fontSize: 23,
              lineHeight: 1.35,
              color: "#bfdbfe",
            }}
          >
            Suivez un dossier avant de choisir l’outil
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 420,
            padding: 24,
            gap: 10,
            borderRadius: 26,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(9,9,11,0.58)",
            boxShadow: "0 24px 90px rgba(37,99,235,0.24)",
          }}
        >
          {steps.map((step, index) => (
            <div
              key={step.role}
              style={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  minHeight: 68,
                  padding: "11px 14px",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.09)",
                  background: "rgba(255,255,255,0.05)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: 14,
                    height: 14,
                    borderRadius: 999,
                    background: step.color,
                    boxShadow: `0 0 24px ${step.color}`,
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: 14,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      fontSize: 17,
                      fontWeight: 760,
                    }}
                  >
                    {step.role}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      marginTop: 3,
                      fontSize: 16,
                      color: "#a1a1aa",
                    }}
                  >
                    {step.state}
                  </div>
                </div>
              </div>
              {index < steps.length - 1 ? (
                <div
                  style={{
                    display: "flex",
                    alignSelf: "center",
                    width: 2,
                    height: 10,
                    background: "rgba(255,255,255,0.24)",
                  }}
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", gap: 12 }}>
        {["EXISTANT", "STANDARD", "NO-CODE", "SUR-MESURE", "ATTENDRE"].map(
          (label) => (
            <div
              key={label}
              style={{
                display: "flex",
                padding: "9px 16px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.06)",
                color: "#d4d4d8",
                fontSize: 15,
                fontWeight: 650,
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
