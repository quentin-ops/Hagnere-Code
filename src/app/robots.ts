import type { MetadataRoute } from "next";
import { isSearchIndexingEnabled } from "@/lib/search-indexing";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const isProd = isSearchIndexingEnabled(process.env.NEXT_PUBLIC_ENV);

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
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
