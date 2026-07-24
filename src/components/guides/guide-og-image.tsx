import { ImageResponse } from "next/og";

interface GuideOgImageOptions {
  title: string;
  subtitle: string;
  labels: string[];
  accent?: "violet" | "blue" | "emerald" | "amber";
}

const accents = {
  violet: {
    primary: "#a78bfa",
    secondary: "#60a5fa",
    glow: "rgba(124,58,237,0.30)",
  },
  blue: {
    primary: "#60a5fa",
    secondary: "#22d3ee",
    glow: "rgba(37,99,235,0.30)",
  },
  emerald: {
    primary: "#34d399",
    secondary: "#2dd4bf",
    glow: "rgba(5,150,105,0.28)",
  },
  amber: {
    primary: "#fbbf24",
    secondary: "#fb7185",
    glow: "rgba(217,119,6,0.28)",
  },
} as const;

export function createGuideOgImage({
  title,
  subtitle,
  labels,
  accent = "violet",
}: GuideOgImageOptions) {
  const palette = accents[accent];

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 64,
        background: `radial-gradient(circle at 84% 16%, ${palette.glow}, transparent 32%), radial-gradient(circle at 12% 90%, rgba(39,39,42,0.9), transparent 38%), #09090b`,
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
            background: `linear-gradient(135deg, ${palette.primary}, ${palette.secondary})`,
            color: "#09090b",
            fontSize: 21,
            fontWeight: 800,
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
            border: `1px solid ${palette.primary}66`,
            background: "rgba(24,24,27,0.72)",
            color: palette.primary,
            fontSize: 20,
          }}
        >
          Guide pour dirigeants
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", maxWidth: 990 }}>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 62 ? 45 : 52,
            fontWeight: 780,
            lineHeight: 1.06,
            letterSpacing: -2,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 22,
            fontSize: 24,
            color: palette.primary,
          }}
        >
          {subtitle}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {labels.slice(0, 5).map((label, index) => (
          <div
            key={label}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 17px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.055)",
              border: "1px solid rgba(255,255,255,0.11)",
              color: index === 0 ? palette.primary : "#d4d4d8",
              fontSize: 18,
            }}
          >
            {label}
          </div>
        ))}
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
