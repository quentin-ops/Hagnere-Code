import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Reprendre un MVP Lovable, Bolt ou v0 sans tout refaire — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const proofs = [
  { label: "STOP", color: "#fb7185" },
  { label: "BUILD", color: "#a78bfa" },
  { label: "DONNÉES", color: "#34d399" },
  { label: "DROITS", color: "#60a5fa" },
  { label: "TCO", color: "#fbbf24" },
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
          "radial-gradient(circle at 84% 16%, rgba(37,99,235,0.28), transparent 31%), radial-gradient(circle at 12% 86%, rgba(124,58,237,0.25), transparent 35%), #09090b",
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
            background: "rgba(30,64,175,0.18)",
            color: "#bfdbfe",
            fontSize: 20,
          }}
        >
          Guide pour dirigeants
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 48,
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{
              display: "flex",
              maxWidth: 715,
              fontSize: 49,
              fontWeight: 760,
              lineHeight: 1.06,
              letterSpacing: -2,
            }}
          >
            Reprendre un MVP Lovable, Bolt ou v0 sans tout refaire
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 24,
              color: "#c4b5fd",
            }}
          >
            Preuves, sécurité, TCO et migration réversible
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 330,
            gap: 10,
            padding: 18,
            borderRadius: 24,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(255,255,255,0.055)",
          }}
        >
          {proofs.map((proof, index) => (
            <div
              key={proof.label}
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                minHeight: 49,
                padding: "10px 13px",
                borderRadius: 13,
                border: "1px solid rgba(255,255,255,0.09)",
                background: "rgba(9,9,11,0.42)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 27,
                  height: 27,
                  borderRadius: 99,
                  background: proof.color,
                  color: "#09090b",
                  fontSize: 15,
                  fontWeight: 800,
                }}
              >
                {index + 1}
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: 12,
                  fontSize: 16,
                  fontWeight: 760,
                  color: proof.color,
                }}
              >
                {proof.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {["Conserver", "Stabiliser", "Migrer", "Réécrire", "Arrêter"].map(
          (label) => (
            <div
              key={label}
              style={{
                display: "flex",
                padding: "10px 17px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.055)",
                border: "1px solid rgba(255,255,255,0.10)",
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
