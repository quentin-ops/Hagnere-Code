import { readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getGuide, guideRobots } from "./guides";
import {
  WEBSITE_INCIDENT_RECOVERY_GATE_IDS,
  WEBSITE_INCIDENT_RECOVERY_GATES,
} from "./website-incident-dossier";

const routeSource = readFileSync(
  join(
    process.cwd(),
    "src/app/guides/site-internet-en-panne-que-faire/page.tsx",
  ),
  "utf8",
);
const componentSource = readFileSync(
  join(process.cwd(), "src/components/guides/WebsiteIncidentDossier.tsx"),
  "utf8",
);
const engineSource = readFileSync(
  join(process.cwd(), "src/lib/website-incident-dossier.ts"),
  "utf8",
);
const resourcePath = join(
  process.cwd(),
  "public/ressources/fiche-reflexe-site-en-panne.txt",
);
const resourceSource = readFileSync(resourcePath, "utf8");
const researchSource = readFileSync(
  join(
    process.cwd(),
    "docs/research/site-internet-en-panne-que-faire-r1-2026-07-27.md",
  ),
  "utf8",
);

function visibleText(source: string): string {
  return source
    .replace(/<[^>]+>/g, " ")
    .replace(/\{[^}]*\}/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

describe("site internet en panne premium guide contract", () => {
  it("puts a compact emergency card immediately after the hero CTA", () => {
    expect(routeSource).toContain('href: "#urgence-30-secondes"');
    expect(routeSource).toContain('label: "Carte d’urgence · 30 s"');

    const layoutOpening = routeSource.indexOf("showSidebarCta={false}");
    const cardOpening = routeSource.indexOf(
      '<section\n          id="urgence-30-secondes"',
      layoutOpening,
    );
    const leadOpening = routeSource.indexOf(
      '<p className="lead">',
      cardOpening,
    );
    const cardClosing = routeSource.indexOf("</section>", cardOpening);
    const cardText = visibleText(
      routeSource.slice(cardOpening, cardClosing + "</section>".length),
    );

    expect(layoutOpening).toBeGreaterThan(-1);
    expect(cardOpening).toBeGreaterThan(layoutOpening);
    expect(cardOpening).toBeLessThan(leadOpening);
    expect(cardClosing).toBeGreaterThan(cardOpening);
    expect(cardText.split(/\s+/).length).toBeLessThanOrEqual(130);
    for (const decision of [
      "Interdits",
      "Signaux cyber",
      "Cinq faits",
      "Coordinateur",
      "Escalade",
      "17Cyber",
    ]) {
      expect(cardText).toContain(decision);
    }
  });

  it("answers the emergency in the lead without amateur diagnosis", () => {
    const lead = routeSource.match(/<p className="lead">([\s\S]*?)<\/p>/)?.[1];
    const text = visibleText(lead ?? "");

    expect(lead).toBeDefined();
    expect(text.split(/\s+/).length).toBeLessThanOrEqual(190);
    expect(text).toContain("ne redémarrez pas");
    expect(text).toContain("dernière réussite connue");
    expect(text).toContain("arrêtez les essais actifs");
    expect(text).toContain("service « partiel »");
    expect(text).not.toMatch(/502 signifie|503 signifie|cause est/i);
  });

  it("provides a complete 0-5-15-60 route through sixteen numbered sections", () => {
    const toc = routeSource.match(
      /<GuideToc[\s\S]*?items=\{\[([\s\S]*?)\]\}/,
    )?.[1];
    const sectionIds = [
      "distinguer",
      "couches",
      "quinze-minutes",
      "dossier",
      "chronologie",
      "journal",
      "premiere-heure",
      "informer",
      "cyber-donnees",
      "objectifs",
      "restaurer",
      "tester",
      "seo",
      "cout",
      "exemple",
      "lendemain",
    ];

    expect(toc).toBeDefined();
    for (const id of sectionIds) {
      expect(toc).toContain(`id: "${id}"`);
      expect(routeSource).toContain(`<h2 id="${id}">`);
    }
    for (const window of [
      "0–5 minutes",
      "5–15 minutes",
      "15–60 minutes",
      "1–4 heures",
      "4–24 heures",
      "J+1 à J+30",
    ]) {
      expect(routeSource).toContain(window);
    }
  });

  it("routes every important layer without turning a symptom into a root cause", () => {
    const normalized = routeSource.replace(/\s+/g, " ");

    for (const layer of [
      "Connexion locale",
      "Registrar, DNS/DNSSEC",
      "CDN/WAF",
      "Application",
      "Base, cache, file de messages",
      "Prestataire de paiement",
      "Compromission possible",
    ]) {
      expect(normalized).toContain(layer);
    }
    expect(normalized).toContain(
      "« 502 » ne veut pas dire automatiquement « bug du développeur »",
    );
    expect(normalized).toContain(
      "une page d’état verte ne prouve pas que votre instance fonctionne",
    );
  });

  it("ships eight ticket facts, an evidence log and five communication states", () => {
    const normalized = routeSource.replace(/\s+/g, " ");

    for (const fact of [
      "Découverte",
      "Dernière réussite",
      "Adresse",
      "Message",
      "Fonctions touchées",
      "Étendue",
      "Second essai passif",
      "Dernier changement connu",
    ]) {
      expect(routeSource).toContain(fact);
    }
    expect(routeSource).toContain("capture originale");
    expect(routeSource).toContain("copie expurgée");
    expect(routeSource).toContain(
      "Source, période, fuseau, lieu de copie, personne et heure de collecte",
    );
    for (const state of [
      "Investigation",
      "Problème identifié",
      "Contournement",
      "Surveillance",
      "Résolu",
    ]) {
      expect(routeSource).toContain(state);
    }
    expect(normalized).toContain("source de vérité hors du site");
  });

  it("draws a broad cyber gate and states the complete CNIL decision chain", () => {
    const normalized = routeSource.replace(/\s+/g, " ");

    for (const trigger of [
      "redirection",
      "registrar",
      "DNSSEC",
      "certificat",
      "clé ou jeton",
      "exfiltration",
      "extorsion",
      "paiement",
    ]) {
      expect(normalized).toContain(trigger);
    }
    expect(normalized).toContain("canal de communication indépendant");
    expect(normalized).toContain("préservation avant la rotation");
    expect(normalized).toContain("six mois à un an");
    expect(normalized).toContain(
      "sous-traitant transmet les faits au responsable du traitement",
    );
    expect(normalized).toContain("au plus tard 72 heures");
    expect(normalized).toContain("risque élevé");
    expect(normalized).toContain("notification initiale peut être complétée");
    expect(normalized).toContain(
      "les systèmes et les données restaurées sont propres",
    );
  });

  it("separates RTO, RPO and SLA, then requires a reversible recovery", () => {
    const normalized = routeSource.replace(/\s+/g, " ");

    for (const expected of [
      "RTO — objectif de reprise",
      "RPO — objectif de point de reprise",
      "GTI — prise en compte",
      "GTR — rétablissement",
      "SLA — niveau de service",
      "Correction en avant",
      "Rollback du code",
      "Bascule ou mode dégradé",
      "Restauration de données",
      "plan de retour arrière de la reprise elle-même",
      "rapprochez base, fichiers, caches, index, files de messages",
    ]) {
      expect(normalized).toContain(expected);
    }
    expect(normalized).toContain(
      "Aucun de ces sigles n’est une valeur universelle",
    );
  });

  it("requires ten recovery gates and never accepts homepage HTTP 200 alone", () => {
    const normalized = routeSource.replace(/\s+/g, " ");

    expect(WEBSITE_INCIDENT_RECOVERY_GATE_IDS).toHaveLength(10);
    expect(new Set(WEBSITE_INCIDENT_RECOVERY_GATE_IDS).size).toBe(10);
    expect(
      WEBSITE_INCIDENT_RECOVERY_GATES.public_access.acceptedPassProof,
    ).toBe("independent-access");
    expect(
      WEBSITE_INCIDENT_RECOVERY_GATES.critical_journey.acceptedPassProof,
    ).toBe("end-to-end");
    expect(WEBSITE_INCIDENT_RECOVERY_GATES.payment.acceptedPassProof).toBe(
      "payment-reconciliation",
    );
    expect(
      WEBSITE_INCIDENT_RECOVERY_GATES.data_reconciliation.acceptedPassProof,
    ).toBe("data-reconciliation");
    expect(
      WEBSITE_INCIDENT_RECOVERY_GATES.business_signoff.acceptedPassProof,
    ).toBe("business-signoff");
    expect(routeSource).toContain("Les dix portes avant « résolu »");
    expect(normalized).toContain(
      "Un échec critique ne peut pas être compensé par neuf cases vertes",
    );
    expect(engineSource).toContain("homepage-only");
    expect(engineSource).toContain("premature-closure");
  });

  it("requires one business effect despite missing, duplicate or unordered webhooks", () => {
    for (const source of [routeSource, resourceSource, researchSource]) {
      const normalized = source.toLocaleLowerCase("fr-FR");

      expect(normalized).toContain("un seul effet métier");
      expect(normalized).toContain("manquantes");
      expect(normalized).toContain("dupliquées");
      expect(normalized).toContain("désordonnées");
      expect(normalized).toContain("déduplication");
      expect(normalized).not.toMatch(
        /webhook unique et ordonné|chaque événement est-il reçu une fois|un seul débit\/événement/,
      );
    }
  });

  it("publishes conservative SEO and direct-cost decisions", () => {
    const normalized = routeSource.replace(/\s+/g, " ");

    for (const expected of [
      "503 Service Unavailable",
      "Retry-After",
      "un à deux jours",
      "robots.txt",
      "403, 404 ou 410",
      "noindex",
      "suppression Search Console",
    ]) {
      expect(normalized).toContain(expected);
    }
    expect(normalized).toContain("20 × 55 € × 60 %, soit 660 €");
    expect(normalized).toContain("Le total direct illustratif est 1 575 €");
    expect(normalized).toContain(
      "demandes retardées ou récupérables, réputation, risque juridique",
    );
  });

  it("ships a substantial offline incident sheet that works without the site", () => {
    expect(statSync(resourcePath).size).toBeGreaterThan(30_000);
    expect(resourceSource).toMatch(
      /^PAGE 1 — CARTE RÉFLEXE AUTONOME À IMPRIMER SEULE/,
    );

    const reflexPage = resourceSource.split(
      "====================== FIN DE LA PAGE RÉFLEXE ======================",
    )[0];
    const normalizedReflexPage = reflexPage.replace(/\s+/g, " ");

    expect(reflexPage.split(/\s+/).filter(Boolean).length).toBeLessThanOrEqual(
      550,
    );
    for (const expected of [
      "INTERDITS IMMÉDIATS",
      "PORTE CYBER AVANT TOUT TEST",
      "CINQ FAITS À NOTER",
      "UNE PERSONNE COORDONNE",
      "CHAÎNE CNIL MINIMALE",
      "Le sous-traitant alerte le responsable du traitement",
      "sous 72 heures",
      "risque élevé",
      "notification initiale peut être complétée",
      "AVANT DE DIRE « RÉSOLU »",
    ]) {
      expect(normalizedReflexPage).toContain(expected);
    }
    expect(resourceSource).toContain("SOMMAIRE DES ANNEXES OPÉRATIONNELLES");
    expect(resourceSource).toContain("ANNEXES OPÉRATIONNELLES");
    for (const expected of [
      "LES 30 PREMIÈRES SECONDES",
      "0 À 5 MINUTES",
      "5 À 15 MINUTES",
      "15 À 60 MINUTES",
      "PORTE CYBER",
      "ROUTEUR",
      "JOURNAL",
      "CONTACTS HORS BANDE",
      "RTO",
      "RPO",
      "SLA",
      "RESTAURATION",
      "RECETTE",
      "J+1",
      "J+7",
      "J+30",
    ]) {
      expect(resourceSource.toLocaleUpperCase("fr-FR")).toContain(expected);
    }
    expect(routeSource).toContain(
      "/ressources/fiche-reflexe-site-en-panne.txt",
    );
  });

  it("embeds one real local dossier with strict ND and structured proofs", () => {
    expect(routeSource.match(/<WebsiteIncidentDossier\s*\/>/g)).toHaveLength(1);
    for (const expected of [
      "aucune donnée envoyée",
      "aucune sauvegarde automatique",
      "Clôture interdite",
      "Copier le dossier",
      "Télécharger le TXT",
      "Imprimer le dossier",
      "Oui, effacer",
      "applicability-justification",
      "data-read-time-exclude",
    ]) {
      expect(componentSource).toContain(expected);
    }
    expect(engineSource).toContain("Cause non établie");
    expect(componentSource).not.toMatch(
      /\b(?:fetch|XMLHttpRequest|localStorage|sessionStorage)\b/,
    );
    expect(engineSource).toContain("Dossier incomplet");
    expect(engineSource).toContain("COÛT DIRECT PRUDENT");
    expect(engineSource).toContain("Ne pas y copier de mot de passe");
    expect(engineSource).toContain("best-effort");
    expect(engineSource).toContain(
      "ne garantit jamais qu’un export est exempt de secret",
    );
  });

  it("warns that free text is not diagnosed by the structured router", () => {
    const normalized = routeSource.replace(/\s+/g, " ");

    expect(normalized).toContain("Le verdict dépend de vos choix structurés");
    expect(normalized).toContain(
      "ne lit pas le sens des champs libres et ne diagnostique jamais leur contenu",
    );
    expect(normalized).toContain(
      "sélectionnez aussi « Compromission possible »",
    );
    expect(normalized).toContain(
      "orienter le dossier vers une mauvaise branche",
    );
  });

  it("cites primary French and international sources with explicit boundaries", () => {
    const normalized = routeSource.replace(/\s+/g, " ");

    for (const source of [
      "https://www.cnil.fr/fr/securite-prevoir-la-continuite-et-la-reprise-dactivite",
      "https://www.cnil.fr/fr/securite-sauvegarder",
      "https://www.cnil.fr/fr/securite-gerer-les-incidents-et-les-violations",
      "https://www.cnil.fr/fr/securite-tracer-les-operations",
      "https://cert.ssi.gouv.fr/les-bons-reflexes-en-cas-dintrusion-sur-un-systeme-dinformation/",
      "https://www.cybermalveillance.gouv.fr/17cyber",
      "https://www.ncsc.gov.uk/collection/small-business-guidance--response-and-recovery",
      "https://www.ncsc.gov.uk/collection/incident-management/technical-response-capabilities",
      "https://csrc.nist.gov/pubs/sp/800/61/r3/final",
      "https://www.cisa.gov/stopransomware/ransomware-guide",
      "https://developers.google.com/search/docs/crawling-indexing/pause-online-business?hl=fr",
    ]) {
      expect(routeSource).toContain(source);
    }
    expect(normalized).toContain(
      "ses règles juridiques ne sont pas transposées en France",
    );
    expect(normalized).toContain("sans en faire une certification");
    expect(normalized).toContain("aucune position");
    expect(normalized).toContain("dernière revue le 19 septembre 2019");
    expect(normalized).toContain("repère technique international");
    expect(normalized).toContain(
      "pas de règle juridique actuelle ni de preuve propre à votre incident",
    );
  });

  it("revokes the historical false green and keeps a strict new gate", () => {
    expect(researchSource).toContain("explicitement **annulée**");
    expect(researchSource).toContain("64/100");
    expect(researchSource).toContain("GOV-01");
    expect(researchSource).toContain("**zéro P0, zéro P1**");
    expect(researchSource).toContain("**95/100 sur chacun des trois axes**");
  });

  it("dates the refreshed registry and preserves faithful structured data", () => {
    const guide = getGuide("site-internet-en-panne-que-faire");

    expect(guide.dateModified).toBe("2026-07-27");
    expect(guide.readTimeMin).toBeGreaterThanOrEqual(25);
    expect(guide.title).toContain("plan d’urgence et reprise 2026");
    expect(guide.metaDescription.length).toBeLessThanOrEqual(160);
    expect(guide.editorialStatus).toBeUndefined();
    expect(guideRobots(guide)).toBeDefined();
    expect(routeSource.match(/type="application\/ld\+json"/g)).toHaveLength(2);
    expect(routeSource).not.toMatch(/FAQPage|HowTo|Offer|AggregateRating/);
  });

  it("does not present the commercial CTA as an emergency service", () => {
    const normalized = routeSource.replace(/\s+/g, " ");

    expect(normalized).toContain("Ne comptez pas sur le CTA en urgence");
    expect(normalized).toContain("il ne garantit ni prise en charge immédiate");
    expect(normalized).toContain("heures ouvrées");
    expect(normalized).toContain(
      "sans garantir ce délai ni celui de la réparation",
    );
    expect(normalized).toContain("Ne transmettez aucun mot de passe");
    expect(routeSource).not.toContain(
      "/guides/site-wordpress-pirate-que-faire",
    );
  });
});
