import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Reprendre un SaaS après le départ de son développeur — Hagnéré Code";
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
        justifyContent: "space-between",
        padding: 64,
        background:
          "radial-gradient(circle at 82% 18%, rgba(16,185,129,0.20), transparent 34%), linear-gradient(135deg, #09090b 0%, #111827 100%)",
        color: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 52,
            height: 52,
            borderRadius: 13,
            background: "linear-gradient(135deg, #7c3aed, #059669)",
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          HC
        </div>
        <div style={{ display: "flex", fontSize: 28, fontWeight: 600 }}>
          Hagnéré Code
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: "auto",
            padding: "8px 20px",
            border: "1px solid rgba(110,231,183,0.45)",
            borderRadius: 999,
            color: "#a7f3d0",
            fontSize: 21,
          }}
        >
          Registre de passation
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div
          style={{
            display: "flex",
            maxWidth: 1040,
            fontSize: 55,
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: -2,
          }}
        >
          Votre développeur SaaS part : quels accès reprendre ?
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#a1a1aa" }}>
          Protéger les clients · vérifier les comptes · retirer au bon moment
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        {["Code", "Paiements", "Données", "Domaine", "Support"].map(
          (label, index) => (
            <div
              key={label}
              style={{ display: "flex", alignItems: "center", gap: 14 }}
            >
              <div
                style={{
                  display: "flex",
                  padding: "12px 20px",
                  borderRadius: 12,
                  background:
                    index === 4
                      ? "rgba(5,150,105,0.24)"
                      : "rgba(255,255,255,0.06)",
                  border:
                    index === 4
                      ? "1px solid rgba(52,211,153,0.55)"
                      : "1px solid rgba(255,255,255,0.12)",
                  color: index === 4 ? "#a7f3d0" : "#e4e4e7",
                  fontSize: 23,
                }}
              >
                {label}
              </div>
              {index < 4 ? (
                <div
                  style={{ display: "flex", color: "#71717a", fontSize: 26 }}
                >
                  →
                </div>
              ) : null}
            </div>
          ),
        )}
      </div>
    </div>,
    size,
  );
}
