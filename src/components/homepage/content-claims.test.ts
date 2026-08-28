import { describe, expect, it } from "vitest";
import { bodyHtml } from "./body";
import { composedBodyHtml } from "./composed-body";
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

  it("n'annonce aucun gain chiffré ni résultat client dans les sections publiées", () => {
    const publishedSections = `${verticalsHtml}\n${trustHtml}\n${equipeHtml}\n${comparisonHtml}`;
    // Garde-fou générique : un gain en pourcentage est toujours une métrique
    // client, quelle que soit sa formulation. Cf. règle d'or de CLAUDE.md.
    expect(publishedSections).not.toMatch(/[+\-−]\s*\d{1,3}\s*%/);
    expect(publishedSections).not.toMatch(/Résultats?\s*:\s*[^<]*\d/i);
    // Les cartes « situations » annoncent un objectif ou un livrable, jamais un résultat.
    for (const outcome of verticalsHtml.matchAll(/<div class="vt-outcome">([^<]+)<\/div>/g)) {
      expect(outcome[1]).toMatch(/^(Objectif à mesurer|Livrable à définir|Livrable attendu|Périmètre possible)\s*:/);
    }
  });

  it("n'emploie pas le mot « garantie » sans sanction écrite aux CGV", () => {
    // Les CGV ne connaissent que la garantie légale impérative : aucune
    // pénalité ni garantie de non-dépassement n'y est stipulée. Sprint Fixe
    // est donc une méthode, pas une garantie — et les absolus publiés sur
    // /tarifs (« jamais de surprise », « 0 dépassement caché ») ne doivent pas
    // remonter ici sous une autre forme.
    expect(composedBodyHtml).not.toMatch(
      /garantie Sprint Fixe|jamais de surprise|budget annoncé\s*=\s*budget facturé|prix annoncé\s*=\s*prix payé|0\s*(?:€\s*de\s*)?dépassement|le total ne bouge pas|aucun dépassement caché/i,
    );
    // La formulation validée reste publiée.
    expect(composedBodyHtml).toContain("aucun dépassement sans accord écrit");
  });

  it("ne met pas la gouvernance éditoriale du site à la place d'un bénéfice client", () => {
    // Ces indicateurs parlaient de la fabrication du site, pas du service :
    // ils occupaient des emplacements réservés aux bénéfices client.
    expect(composedBodyHtml).not.toMatch(
      /source canonique pour l'effectif|source d'effectif|source d'équipe publique|RÈGLE DE PUBLICATION|profils présentés dans la source/i,
    );
  });

  it("garde des engagements fermes lisibles dès le premier écran", () => {
    const hero = /<section class="hero">[\s\S]*?<\/section>/.exec(bodyHtml)?.[0] ?? "";
    expect(hero).toContain("aucun dépassement sans votre accord écrit");
    expect(hero).toContain("Forfait fixe, pas de régie");
    // Le positionnement local est affiché, pas seulement dans la balise meta.
    expect(hero).toMatch(/Bassens/);
  });

  it("ne présente pas Sprint Fixe comme une marque déposée", () => {
    // Aucun dépôt de marque n'est revendiquable pour une société créée le
    // 30/09/2025 : le ™ suggérait un titre de propriété industrielle, et le
    // numéro de version « v.4.2 » quatre révisions majeures de la méthode.
    expect(composedBodyHtml).not.toContain("™");
    expect(composedBodyHtml).not.toMatch(/\bv\.\s?\d+\.\d+/i);
    // Le nom de la méthode, lui, reste publié.
    expect(composedBodyHtml).toContain("Sprint Fixe");
  });

  it("annonce ce qui est vérifiable au lieu de lister ce que d'autres feraient", () => {
    // La formulation en creux (« pas d'awards obscurs, pas de faux avis, pas de
    // logos inventés ») installait le soupçon à la place d'une promesse.
    // /methode est déjà passée en positif : l'accueil suit.
    const visibleTrust = trustHtml.replace(/<!--[\s\S]*?-->/g, " ");
    expect(visibleTrust).not.toMatch(/pas d'awards|faux avis|logos inventés/i);
    expect(visibleTrust).toContain("ce que vous pouvez vérifier vous-même");
  });

  it("relie la preuve à l'offre depuis la section réalisations", () => {
    // /realisations qualifie les quatre pages comme des produits du groupe puis
    // renvoie vers le silo « offre ». L'accueil ouvre les deux sorties pour ne
    // pas laisser ces pages tenir lieu de références clients.
    const realisations =
      /<section class="real"[\s\S]*?<div class="real-grid">/.exec(bodyHtml)?.[0] ?? "";
    expect(realisations).not.toBe("");
    expect(realisations).toContain('href="/realisations"');
    expect(realisations).toContain('href="/services"');
    expect(realisations).toContain("ce ne sont pas des clients indépendants");
  });
});
