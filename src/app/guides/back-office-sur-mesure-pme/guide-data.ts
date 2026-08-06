import {
  buildGuideMetadata,
  buildGuideStructuredData,
} from "@/lib/guide-page-seo";
import { getGuide } from "@/lib/guides";
import { SITE_URL } from "@/lib/seo";

export const BACK_OFFICE_SLUG = "back-office-sur-mesure-pme" as const;

const guide = getGuide(BACK_OFFICE_SLUG);
const imageAlt =
  "Contrat d’écran d’un back-office PME, de la file de travail à la reprise";
const breadcrumbName = "Back-office sur mesure pour PME";
const articleImages = guide.articleImagePaths;

if (!articleImages || articleImages.length !== 3) {
  throw new Error(
    "Le guide back-office doit déclarer ses trois images éditoriales.",
  );
}

export const BACK_OFFICE_URL = `${SITE_URL}/guides/${BACK_OFFICE_SLUG}`;
export const BACK_OFFICE_HEADLINE = guide.heroTitle;
export const BACK_OFFICE_DESCRIPTION = guide.metaDescription;
export const BACK_OFFICE_SECTION = guide.articleSection ?? guide.section;
export const BACK_OFFICE_IMAGES = articleImages;

export const metadata = buildGuideMetadata(guide, imageAlt);
export const structuredData = buildGuideStructuredData(guide, breadcrumbName);
