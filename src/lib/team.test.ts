import { describe, expect, it } from "vitest";
import { comparisonHtml as homepageComparisonHtml } from "@/components/homepage/sections/comparison";
import { comparisonHtml as saasComparisonHtml } from "@/components/saas-applications/sections/comparison";
import {
  CTO,
  DEVS,
  FOUNDER,
  STUDIO_LOCATION,
  TEAM,
  TEAM_LIST,
  TEAM_OTHER_DEVELOPERS_COUNT,
  TEAM_PUBLIC_COMPOSITION,
  TEAM_TOTAL_COUNT,
} from "./team";

describe("public team source of truth", () => {
  it("publishes seven people: one founder, one CTO and five other developers", () => {
    expect(TEAM_LIST).toHaveLength(7);
    expect(FOUNDER).toBe(TEAM.quentin);
    expect(CTO).toBe(TEAM.nicolas);
    expect(DEVS).toHaveLength(5);
    expect(TEAM_TOTAL_COUNT).toBe(TEAM_LIST.length);
    expect(TEAM_OTHER_DEVELOPERS_COUNT).toBe(DEVS.length);
    expect(TEAM_PUBLIC_COMPOSITION).toBe(
      "7 personnes au total : 1 président fondateur, 1 CTO et 5 autres développeurs",
    );
  });

  it("uses Bassens as the public studio location", () => {
    expect(STUDIO_LOCATION).toBe("Bassens · Savoie");
    expect(FOUNDER.basedAt).toBe(STUDIO_LOCATION);
  });

  it("keeps public continuity claims aligned with the mixed team composition", () => {
    expect(homepageComparisonHtml).toContain(
      `${TEAM_TOTAL_COUNT} profils présentés`,
    );
    expect(homepageComparisonHtml).not.toMatch(/équipe en CDI/i);
    expect(saasComparisonHtml).toContain(TEAM_PUBLIC_COMPOSITION);
    expect(saasComparisonHtml).not.toMatch(/seniors CDI/i);
  });
});
