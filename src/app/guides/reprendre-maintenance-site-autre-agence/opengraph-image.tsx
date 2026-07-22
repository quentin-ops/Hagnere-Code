import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Préparer la reprise de maintenance d’un site — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const checks = [
  ["01", "Accès client"],
  ["02", "Copie restaurée"],
  ["03", "Publication testée"],
  ["04", "Ancien accès retiré"],
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
        padding: 68,
        background:
          "radial-gradient(circle at 86% 16%, rgba(245,158,11,0.22), transparent 31%), radial-gradient(circle at 8% 92%, rgba(59,130,246,0.22), transparent 36%), #09090b",
        color: "#fff",
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
            borderRadius: 13,
            background: "linear-gradient(135deg, #2563eb, #7c3aed)",
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
            border: "1px solid rgba(251,191,36,0.42)",
            background: "rgba(120,53,15,0.22)",
            color: "#fde68a",
            fontSize: 20,
          }}
        >
          Maintenance & reprise
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            maxWidth: 1020,
            fontSize: 54,
            fontWeight: 760,
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          Changer d’agence : testez la reprise du site
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 25,
            color: "#d4d4d8",
          }}
        >
          Restaurez, publiez et contrôlez avant de retirer les accès
        </div>
      </div>

      <div style={{ display: "flex", gap: 11, width: "100%" }}>
        {checks.map(([number, label], index) => (
          <div
            key={number}
            style={{
              display: "flex",
              alignItems: "center",
              flex: 1,
              gap: 10,
              padding: "15px 16px",
              borderRadius: 14,
              background:
                index === checks.length - 1
                  ? "rgba(120,53,15,0.28)"
                  : "rgba(255,255,255,0.065)",
              border:
                index === checks.length - 1
                  ? "1px solid rgba(251,191,36,0.48)"
                  : "1px solid rgba(255,255,255,0.13)",
              fontSize: 19,
              color: "#f4f4f5",
            }}
          >
            <span
              style={{
                display: "flex",
                color: index === checks.length - 1 ? "#fbbf24" : "#93c5fd",
                fontWeight: 750,
              }}
            >
              {number}
            </span>
            <span style={{ display: "flex" }}>{label}</span>
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
