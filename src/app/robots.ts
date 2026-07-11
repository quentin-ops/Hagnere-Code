import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://hagnere-code.fr";
  const isProd = process.env.NEXT_PUBLIC_ENV === "production";

  if (!isProd) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Ne pas bloquer /_next/ : Google a besoin du CSS/JS et de
        // /_next/image pour rendre et indexer correctement les pages.
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
