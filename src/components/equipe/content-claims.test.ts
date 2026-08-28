import { describe, expect, it } from "vitest";
import { TEAM_LIST, getProfileLink } from "@/lib/team";
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

  /**
   * La section « ON RECRUTE » a été retirée : elle affichait deux cartes de
   * poste « DOMAINE POSSIBLE · BESOIN À CONFIRMER », c'est-à-dire deux offres
   * d'emploi accompagnées de la mention qu'elles n'en étaient pas — sans valeur
   * commerciale dans un tunnel Ads, et suggérant une compétence manquante.
   * Seule la réponse de FAQ subsiste, explicitement sans poste ouvert.
   */
  it("does not advertise an unconfirmed job opening or hiring cadence", () => {
    expect(bodyHtml).not.toMatch(
      /une à deux personnes par an|poste ouvert|pipeline · prochainement|prochain recrutement prévu/i,
    );
    expect(bodyHtml).not.toMatch(/BESOIN À CONFIRMER|DOMAINE POSSIBLE|rec-job/i);
    expect(bodyHtml).toContain(
      "sans qu'elles correspondent à un poste actuellement ouvert",
    );
  });

  /**
   * Les noms de forfaits de maintenance ne sont pas cohérents entre /tarifs
   * (Care / Care+ / Care Pro) et /services/maintenance-evolution (Audit flash,
   * Essentiel, Scale, Premium). Tant qu'une nomenclature unique n'est pas
   * arbitrée, /equipe n'en cite aucune : elle renvoie au contrat.
   */
  it("ne cite pas un nom de forfait de maintenance non stabilisé", () => {
    expect(bodyHtml).not.toMatch(/Care\s?\+|Care Pro/i);
  });

  /** Un budget de mission cité au présent se lit comme un historique. */
  it("ne transforme pas un niveau de budget en historique de missions", () => {
    expect(bodyHtml).not.toMatch(/projets?\s*&gt;\s*\d+\s*k€|projets? de plus de \d+\s*k€/i);
  });

  /**
   * Le bandeau de repères annonçait « 1 · Source d'effectif commune à tout le
   * site » : une règle de fabrication du site, à un emplacement que le visiteur
   * lit comme un bénéfice. Le repère porte désormais un fait qu'il peut
   * vérifier sur la page elle-même.
   */
  it("ne met pas la gouvernance éditoriale du site dans le bandeau de repères", () => {
    const kpiBar =
      /<section class="kpi-bar">[\s\S]*?<\/section>/.exec(bodyHtml)?.[0] ?? "";
    expect(kpiBar).not.toBe("");
    expect(kpiBar).not.toMatch(
      /source d'effectif|source canonique|source d'équipe publique|RÈGLE DE PUBLICATION/i,
    );
    expect(kpiBar).toContain("Profil public consultable");
  });

  it("tient la promesse de profil public pour chaque personne de l'équipe", () => {
    // Le repère « NOMMÉS · profil public consultable pour chacun des 7 » n'est
    // vrai que si chaque membre a bien un lien public — et que ce lien est
    // effectivement rendu sur la page.
    for (const member of TEAM_LIST) {
      const link = getProfileLink(member);
      expect(link, `profil public manquant pour ${member.fullName}`).not.toBeNull();
      expect(bodyHtml, `lien absent de /equipe pour ${member.fullName}`).toContain(
        link!.url,
      );
    }
  });
});
