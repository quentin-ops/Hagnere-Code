import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Trois pages SEO SaaS B2B reliées aux questions des prospects et aux ventes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const pages = [
  {
    number: "01",
    title: "PROBLÈME",
    text: "Reconnaître la situation",
    color: "#60a5fa",
  },
  {
    number: "02",
    title: "OPTIONS",
    text: "Comparer loyalement",
    color: "#a78bfa",
  },
  {
    number: "03",
    title: "PREUVE",
    text: "Se rassurer et agir",
    color: "#34d399",
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
        padding: 60,
        background:
          "radial-gradient(circle at 88% 13%, rgba(139,92,246,0.26), transparent 31%), radial-gradient(circle at 9% 92%, rgba(14,165,233,0.18), transparent 34%), linear-gradient(135deg, #09090b 0%, #111827 54%, #2e1065 100%)",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <div
          style={{
            width: 52,
            height: 52,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 14,
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
            padding: "9px 18px",
            borderRadius: 999,
            border: "1px solid rgba(196,181,253,0.38)",
            background: "rgba(76,29,149,0.30)",
            color: "#ddd6fe",
            fontSize: 17,
            fontWeight: 650,
          }}
        >
          PILOTE · 3 PAGES
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 44 }}>
        <div
          style={{
            width: 590,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 57,
              fontWeight: 780,
              lineHeight: 1.03,
              letterSpacing: -2,
            }}
          >
            SEO SaaS B2B : partez des ventes, pas du calendrier
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 22,
              lineHeight: 1.35,
              color: "#c4b5fd",
            }}
          >
            Dix conversations pour choisir trois réponses utiles
          </div>
        </div>

        <div
          style={{
            width: 460,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {pages.map((page) => (
            <div
              key={page.number}
              style={{
                display: "flex",
                alignItems: "center",
                minHeight: 82,
                padding: "14px 18px",
                borderRadius: 18,
                border: `1px solid ${page.color}55`,
                background: "rgba(9,9,11,0.55)",
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 14,
                  background: `${page.color}22`,
                  color: page.color,
                  fontSize: 17,
                  fontWeight: 750,
                }}
              >
                {page.number}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 16,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    color: page.color,
                    fontSize: 15,
                    fontWeight: 750,
                    letterSpacing: 1.5,
                  }}
                >
                  {page.title}
                </div>
                <div
                  style={{
                    display: "flex",
                    marginTop: 4,
                    color: "#e4e4e7",
                    fontSize: 19,
                    fontWeight: 600,
                  }}
                >
                  {page.text}
                </div>
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
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#d4d4d8",
            fontSize: 17,
            fontWeight: 600,
          }}
        >
          Impressions → visites → demandes → qualifiés → ventes
        </div>
        <div
          style={{
            display: "flex",
            color: "#c4b5fd",
            fontSize: 17,
            fontWeight: 650,
          }}
        >
          hagnere-code.ai
        </div>
      </div>
    </div>,
    { ...size },
  );
}
