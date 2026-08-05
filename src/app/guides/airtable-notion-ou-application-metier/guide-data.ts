import {
  buildGuideMetadata,
  buildGuideStructuredData,
} from "@/lib/guide-page-seo";
import { getGuide, guideUrl } from "@/lib/guides";

export const AIRTABLE_NOTION_SLUG =
  "airtable-notion-ou-application-metier" as const;
export const airtableNotionGuide = getGuide(AIRTABLE_NOTION_SLUG);
export const AIRTABLE_NOTION_URL = guideUrl(airtableNotionGuide);
export const AIRTABLE_NOTION_HEADLINE = airtableNotionGuide.heroTitle;
export const AIRTABLE_NOTION_DESCRIPTION = airtableNotionGuide.metaDescription;
export const AIRTABLE_NOTION_IMAGES =
  airtableNotionGuide.articleImagePaths ?? [];

export const metadata = buildGuideMetadata(
  airtableNotionGuide,
  "Airtable, Notion et application métier comparés par leurs preuves d’exploitation et de sortie",
);

export const structuredData = buildGuideStructuredData(
  airtableNotionGuide,
  "Airtable, Notion ou application métier",
);
