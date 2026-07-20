import { describe, expect, it } from "vitest";
import { bodyHtml } from "./body";

describe("homepage public claims", () => {
  it("ne publie pas de SLA ou durée d'engagement sans contrat dédié", () => {
    expect(bodyHtml).not.toMatch(
      /SLA\s*:\s*uptime 99[,.]9\s*%|astreinte Lun[–-]Ven 8h[–-]20h|engagement 6 mois minimum/i,
    );
    expect(bodyHtml).toContain(
      "Objectifs de service, niveaux de sévérité et plages de support définis au contrat",
    );
  });
});
