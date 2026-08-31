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
      // `[^>]*` : la section porte désormais un `aria-label` (elle n'avait aucun
      // nom accessible, donc n'était pas exposée comme repère de navigation).
      // Une regex qui exige `<section class="kpi-bar">` à l'identique casse à
      // la première attribution — ce qui est arrivé le 28/08/2026.
      /<section class="kpi-bar"[^>]*>[\s\S]*?<\/section>/.exec(bodyHtml)?.[0] ?? "";
    expect(kpiBar).not.toBe("");
    expect(kpiBar).not.toMatch(
      /source d'effectif|source canonique|source d'équipe publique|RÈGLE DE PUBLICATION/i,
    );
    expect(kpiBar).toContain("Profil public consultable");
  });

  /**
   * Mesure du 30/08/2026 : la légende de la mosaïque et la note de bas de
   * grille annonçaient toutes deux qu'un clic sur une carte « ouvre le profil »
   * de la personne. Les fiches de la grille sont des `div` : cliquer dessus ne
   * produisait ni changement d'URL ni défilement. Les cartes de la mosaïque
   * mènent à une ancre de cette page, pas à LinkedIn.
   */
  it("n'annonce pas qu'une carte ouvre un profil externe", () => {
    expect(bodyHtml).not.toMatch(
      /Cliquez sur une carte pour ouvrir le profil|Chaque carte ouvre le profil/i,
    );
    // Chaque personne de la grille tech a son ancre nommée, pour que la carte
    // de la mosaïque atterrisse sur la bonne fiche et pas en tête de section.
    for (const anchor of ["dev-arthur", "dev-frederic", "dev-ryan", "dev-killian", "dev-peter"]) {
      expect(bodyHtml, `ancre manquante : ${anchor}`).toContain(`id="${anchor}"`);
      expect(bodyHtml, `lien manquant vers #${anchor}`).toContain(`href="#${anchor}"`);
    }
  });

  /**
   * Objectif de restauration et tenue de charge : `src/lib/team.ts` dit
   * explicitement que capacité, restauration et tests sont définis au contrat.
   * La fiche de Killian promettait « restaurables en moins de 15 minutes ».
   */
  it("ne chiffre pas un objectif de restauration ou de charge hors contrat", () => {
    expect(bodyHtml).not.toMatch(
      /restaurables en moins de \d+|pic de charge à \d+\s?h|RTO|RPO/i,
    );
  });

  /** Comparaison de vitesse avec des tiers non nommés : invérifiable. */
  it("ne compare pas la vitesse de l'équipe à celle des autres", () => {
    expect(bodyHtml).not.toMatch(
      /là où d'autres mettent|plus vite que|deux fois plus rapide/i,
    );
  });

  /**
   * Mesure du 30/08/2026 : entre le bouton du hero (855 px) et le bloc de
   * contact du pied de page (10 231 px), la page ne proposait plus aucune
   * action, et la porte « Démarrer mon projet » n'apparaissait nulle part
   * dans le contenu.
   */
  it("propose les deux portes du site en milieu de page", () => {
    const relay = /<section class="eq-relay">[\s\S]*?<\/section>/.exec(bodyHtml)?.[0] ?? "";
    expect(relay).not.toBe("");
    expect(relay).toContain('href="#contact"');
    expect(relay).toContain('href="/demarrer-un-projet"');
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
