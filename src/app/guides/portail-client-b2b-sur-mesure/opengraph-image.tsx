import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Un scénario fictif de portail client B2B suit un dossier de l’invitation à la clôture et vérifie personne, entreprise, rôle, objet et action";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const journey = [
  { label: "INVITATION", detail: "contact nommé", color: "#22d3ee" },
  { label: "DÉPÔT", detail: "fichier privé", color: "#34d399" },
  { label: "ANALYSE", detail: "état daté", color: "#fbbf24" },
  { label: "CLÔTURE", detail: "durée appliquée", color: "#a78bfa" },
];

const decisions = [
  "ASSISTER",
  "CORRIGER",
  "LIEN",
  "MODULE",
  "STANDARD",
  "SUR-MESURE",
];

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 60,
        background:
          "radial-gradient(circle at 88% 15%, rgba(34,211,238,0.22), transparent 30%), radial-gradient(circle at 10% 92%, rgba(52,211,153,0.14), transparent 32%), linear-gradient(135deg, #020617 0%, #062226 54%, #111827 100%)",
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
            borderRadius: 15,
            background: "linear-gradient(135deg, #0891b2, #059669)",
            boxShadow: "0 14px 40px rgba(8,145,178,0.28)",
            fontSize: 21,
            fontWeight: 780,
          }}
        >
          HC
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: 16,
            fontSize: 28,
            fontWeight: 680,
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
            border: "1px solid rgba(34,211,238,0.35)",
            background: "rgba(8,145,178,0.13)",
            color: "#a5f3fc",
            fontSize: 19,
          }}
        >
          Guide de décision B2B
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          gap: 46,
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
              fontSize: 57,
              fontWeight: 790,
              lineHeight: 1.03,
              letterSpacing: -2.4,
            }}
          >
            Faut-il ouvrir un portail client B2B ?
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              maxWidth: 590,
              fontSize: 23,
              lineHeight: 1.35,
              color: "#a5f3fc",
            }}
          >
            Une action réelle. Six réponses honnêtes.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 440,
            padding: 22,
            borderRadius: 27,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(2,6,23,0.68)",
            boxShadow: "0 26px 90px rgba(8,145,178,0.2)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingBottom: 15,
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 15,
                  fontWeight: 760,
                  letterSpacing: 1.7,
                  color: "#67e8f9",
                }}
              >
                SCÉNARIO FICTIF
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: 4,
                  fontSize: 18,
                  fontWeight: 700,
                }}
              >
                Attestation attendue
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginLeft: "auto",
                width: 11,
                height: 11,
                borderRadius: 999,
                background: "#34d399",
                boxShadow: "0 0 22px #34d399",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 13,
            }}
          >
            {journey.map((step, index) => (
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
                    minHeight: 48,
                    padding: "7px 11px",
                    borderRadius: 12,
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 24,
                      height: 24,
                      borderRadius: 999,
                      background: `${step.color}22`,
                      border: `1px solid ${step.color}88`,
                      color: step.color,
                      fontSize: 12,
                      fontWeight: 800,
                    }}
                  >
                    {index + 1}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      marginLeft: 11,
                      fontSize: 15,
                      fontWeight: 760,
                      letterSpacing: 0.5,
                    }}
                  >
                    {step.label}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      marginLeft: "auto",
                      fontSize: 14,
                      color: "#a1a1aa",
                    }}
                  >
                    {step.detail}
                  </div>
                </div>
                {index < journey.length - 1 ? (
                  <div
                    style={{
                      display: "flex",
                      alignSelf: "flex-start",
                      width: 2,
                      height: 7,
                      marginLeft: 22,
                      background: "rgba(255,255,255,0.18)",
                    }}
                  />
                ) : null}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 14,
              padding: "9px 8px",
              borderRadius: 10,
              border: "1px solid rgba(52,211,153,0.2)",
              background: "rgba(5,150,105,0.09)",
              color: "#a7f3d0",
              fontSize: 11,
              fontWeight: 710,
              letterSpacing: 0.75,
            }}
          >
            PERSONNE · ENTREPRISE · RÔLE · OBJET · ACTION
          </div>
        </div>
      </div>

      <div style={{ display: "flex", width: "100%", gap: 10 }}>
        {decisions.map((decision) => (
          <div
            key={decision}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              minHeight: 38,
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.05)",
              color: "#d4d4d8",
              fontSize: 13,
              fontWeight: 690,
              letterSpacing: 0.25,
            }}
          >
            {decision}
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
