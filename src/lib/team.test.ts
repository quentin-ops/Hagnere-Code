import { describe, expect, it } from "vitest";
import { bodyHtml as tarifsBodyHtml } from "@/components/tarifs/body";
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
    // Le comparatif à trois colonnes a quitté l'accueil pour /tarifs le
    // 28/08/2026. La revendication de continuité l'a suivi : l'équipe publiée
    // est mixte (CDI et indépendants), et c'est la SEULE formulation que ce
    // test protège — pas l'emplacement de la grille.
    expect(tarifsBodyHtml).toContain(
      `${TEAM_TOTAL_COUNT} profils présentés`,
    );
    expect(tarifsBodyHtml).not.toMatch(/équipe en CDI/i);
    expect(saasComparisonHtml).toContain(TEAM_PUBLIC_COMPOSITION);
    expect(saasComparisonHtml).not.toMatch(/seniors CDI/i);
  });

  it("keeps bios descriptive and leaves performance or service levels to the contract", () => {
    const bios = TEAM_LIST.map((member) => member.bio ?? "").join("\n");
    expect(bios).not.toMatch(/3 entreprises fondées|2 cabinets actifs|restaurables en moins de 15 minutes|quelques jours là où d'autres mettent des semaines|produire vite et propre/i);
    expect(bios).toContain("objectifs de capacité, de restauration et leurs tests sont définis au contrat");
    expect(bios).toContain("Aucune certification SOC 2 ou ISO 27001 n'est revendiquée");
  });
});
