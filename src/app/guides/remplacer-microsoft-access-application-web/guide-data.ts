import { buildGuideStructuredData } from "@/lib/guide-page-seo";
import { getGuide } from "@/lib/guides";

export const accessGuide = getGuide(
  "remplacer-microsoft-access-application-web",
);

export const structuredData = buildGuideStructuredData(
  accessGuide,
  "Remplacer Microsoft Access",
);
