import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { CASES } from "@/components/realisations/cases";

export const runtime = "edge";
export const alt = "Étude de cas Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function readableTextOn(hexColor: string): "#ffffff" | "#18181b" {
  const channels = hexColor
    .replace("#", "")
    .match(/.{2}/g)
    ?.map((channel) => Number.parseInt(channel, 16) / 255);
  if (!channels || channels.some(Number.isNaN)) return "#ffffff";

  const [red, green, blue] = channels.map((channel) =>
    channel <= 0.04045
      ? channel / 12.92
      : ((channel + 0.055) / 1.055) ** 2.4,
  );
  const luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue;

  // Le fond sombre #18181b devient plus contrasté que le blanc dès que la
  // couleur de marque est claire (notamment l'or Hagnéré Patrimoine).
  return luminance > 0.35 ? "#18181b" : "#ffffff";
}

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = CASES[slug];
  if (!caseStudy) notFound();
  const brandTextColor = readableTextOn(caseStudy.brandColor);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#ffffff",
          background: `linear-gradient(135deg, #09090b 0%, #111113 55%, ${caseStudy.brandColor} 150%)`,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 54,
              height: 54,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 14,
              background: caseStudy.brandColor,
              color: brandTextColor,
              fontSize: 23,
              fontWeight: 800,
            }}
          >
            HC
          </div>
          <div style={{ display: "flex", fontSize: 28, fontWeight: 650 }}>
            Hagnéré Code
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "auto",
              padding: "9px 19px",
              borderRadius: 999,
              border: `1px solid ${caseStudy.brandColor}`,
              color: caseStudy.brandSoft,
              fontSize: 21,
            }}
          >
            Étude de cas
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 46 }}>
          <div
            style={{
              width: 172,
              height: 172,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              borderRadius: 36,
              background: caseStudy.brandColor,
              color: brandTextColor,
              fontSize: 76,
              fontWeight: 800,
            }}
          >
            {caseStudy.brandLogo}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 17,
              maxWidth: 800,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 64,
                fontWeight: 800,
                lineHeight: 1.04,
                letterSpacing: -2.2,
              }}
            >
              {caseStudy.brandName}
            </div>
            <div
              style={{
                display: "flex",
                color: "#d4d4d8",
                fontSize: 29,
                lineHeight: 1.25,
              }}
            >
              {caseStudy.category}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            paddingTop: 22,
            borderTop: "1px solid rgba(255,255,255,0.14)",
            color: "#a1a1aa",
            fontSize: 24,
          }}
        >
          Contexte, solution et résultats documentés
        </div>
      </div>
    ),
    size,
  );
}
