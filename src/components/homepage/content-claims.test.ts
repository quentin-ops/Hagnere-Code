import { describe, expect, it } from "vitest";
import { bodyHtml } from "./body";
import { comparisonHtml } from "./sections/comparison";
import { equipeHtml } from "./sections/equipe";
import { trustHtml } from "./sections/trust";
import { verticalsHtml } from "./sections/verticals";

describe("homepage public claims", () => {
  it("ne publie pas de SLA ou durée d'engagement sans contrat dédié", () => {
    expect(bodyHtml).not.toMatch(
      /SLA\s*:\s*uptime 99[,.]9\s*%|astreinte Lun[–-]Ven 8h[–-]20h|engagement 6 mois minimum/i,
    );
    expect(bodyHtml).toContain(
      "Objectifs de service, niveaux de sévérité et plages de support définis au contrat",
    );
  });

  it("ne généralise pas les pratiques concurrentes et cadre prix et droits", () => {
    expect(comparisonHtml).not.toMatch(/5\s*[–-]\s*15 k€|80\s*[–-]\s*200 k€|1 senior \+ 4 à 8 juniors|Projet à l'arrêt|rotation fréquente|Rarement formalisé|Full-stack mais dilué|prix annoncé = prix payé/i);
    expect(comparisonHtml).toContain("aucun dépassement sans accord écrit");
    expect(comparisonHtml).toContain("transfert après paiement complet selon les CGV");
    expect(comparisonHtml).toContain("composants préexistants et licences tierces");
  });

  it("présente objectifs, équipe et preuves sans résultat ni exploitation absolus", () => {
    const publishedSections = `${verticalsHtml}\n${trustHtml}\n${equipeHtml}`;
    expect(publishedSections).not.toMatch(/produits groupe en production|prix annoncé = prix payé|100\s*% équipe France|100\s*% forfait fixe|0 sous-traitance|tous seniors ou confirmés|on avance plus vite|on livre plus proprement|3 entreprises fondées|2 cabinets actifs/i);
    expect(publishedSections).toContain("fonctions visibles, pas leurs résultats ni leur exploitation interne");
    expect(publishedSections).toContain("sorties restent relues, testées et validées");
  });
});
