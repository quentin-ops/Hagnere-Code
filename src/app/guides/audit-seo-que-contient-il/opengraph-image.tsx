import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Audit SEO structuré en référence, diagnostic, plan et vérification";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const outputs = [
  { number: "01", label: "RÉFÉRENCE DATÉE", color: "#a78bfa" },
  { number: "02", label: "DIAGNOSTIC", color: "#60a5fa" },
  { number: "03", label: "PLAN EXÉCUTABLE", color: "#34d399" },
  { number: "04", label: "VÉRIFICATION", color: "#fbbf24" },
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
          "radial-gradient(circle at 82% 16%, rgba(124,58,237,0.27), transparent 31%), radial-gradient(circle at 78% 88%, rgba(14,165,233,0.17), transparent 32%), linear-gradient(135deg, #09090b 0%, #111827 58%, #172554 100%)",
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
            border: "1px solid rgba(167,139,250,0.38)",
            background: "rgba(76,29,149,0.21)",
            color: "#ddd6fe",
            fontSize: 20,
          }}
        >
          Guide de réception
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
            maxWidth: 650,
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#c4b5fd",
              fontSize: 19,
              fontWeight: 750,
              letterSpacing: 2.2,
            }}
          >
            AUDIT SEO
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 13,
              fontSize: 57,
              fontWeight: 780,
              lineHeight: 1.03,
              letterSpacing: -2,
            }}
          >
            Que doit contenir un rapport vraiment utile ?
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              maxWidth: 610,
              fontSize: 22,
              lineHeight: 1.36,
              color: "#d4d4d8",
            }}
          >
            Des preuves qui permettent de décider, exécuter et vérifier.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 410,
            padding: 22,
            gap: 9,
            borderRadius: 25,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(9,9,11,0.53)",
            boxShadow: "0 24px 90px rgba(124,58,237,0.24)",
          }}
        >
          <div
            style={{
              display: "flex",
              marginBottom: 3,
              color: "#a1a1aa",
              fontSize: 14,
              fontWeight: 720,
              letterSpacing: 1.5,
            }}
          >
            LES 4 SORTIES OBLIGATOIRES
          </div>
          {outputs.map((output) => (
            <div
              key={output.number}
              style={{
                display: "flex",
                alignItems: "center",
                minHeight: 62,
                padding: "9px 13px",
                borderRadius: 13,
                border: "1px solid rgba(255,255,255,0.09)",
                background: "rgba(255,255,255,0.045)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 38,
                  height: 38,
                  borderRadius: 11,
                  background: output.color,
                  color: "#09090b",
                  fontSize: 14,
                  fontWeight: 850,
                }}
              >
                {output.number}
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: 14,
                  fontSize: 17,
                  fontWeight: 760,
                }}
              >
                {output.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {["Fait", "Périmètre", "Confiance", "Action", "Recette", "Mesure"].map(
          (label) => (
            <div
              key={label}
              style={{
                display: "flex",
                padding: "9px 15px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.055)",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "#d4d4d8",
                fontSize: 17,
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
