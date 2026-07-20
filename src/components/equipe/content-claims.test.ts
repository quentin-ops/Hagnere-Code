import { describe, expect, it } from "vitest";
import { bodyHtml } from "./body";

describe("team page public claims", () => {
  it("does not publish unsupported founder, productivity or durability proof", () => {
    expect(bodyHtml).not.toMatch(
      /3 entreprises|2 cabinets actifs|100\s*%[^<]{0,80}appels|3[×x][^<]{0,80}producti|−40\s*%|tiendra 5 ans/i,
    );
    expect(bodyHtml).toContain(
      "nous ne publions aucun multiplicateur de productivité sans protocole de mesure",
    );
  });

  it("leaves continuity and remedies to the signed project terms", () => {
    expect(bodyHtml).not.toMatch(
      /bus factor est de 2 minimum|prend le relais immédiatement|indisponible[^<]{0,80}48 h|si on les enfreint, on rembourse|interlocuteur unique|chaque PR\b|tenus religieusement|reste le même jusqu'à la livraison/i,
    );
    expect(bodyHtml).toContain(
      "Seuls le devis et le contrat signés définissent les obligations",
    );
  });

  it("does not advertise an unconfirmed job opening or hiring cadence", () => {
    expect(bodyHtml).not.toMatch(
      /une à deux personnes par an|poste ouvert|pipeline · prochainement|prochain recrutement prévu/i,
    );
    expect(bodyHtml).toContain("Cette page n'est pas une offre d'emploi");
  });
});
