import { readFileSync } from "node:fs";
import { join } from "node:path";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { navHtml } from "@/components/design-shared/nav-html";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import { composedBodyHtml as homepage } from "@/components/homepage/composed-body";
import { JorilBand } from "@/components/joril/JorilBand";
import { composedBodyHtml as saasApplications } from "@/components/saas-applications/composed-body";
import {
  JORIL_ACCUEIL,
  JORIL_CALENDRIER,
  JORIL_DEFINITION,
  JORIL_HOST,
  JORIL_LABEL,
  JORIL_LICENCE,
  JORIL_MENU,
  JORIL_OFFRE,
  JORIL_RESERVE,
  JORIL_STATUT,
  JORIL_URL,
} from "./joril";

/**
 * Joril et l'offre d'assistants IA sur hagnere-code.ai (ordre du dirigeant,
 * 08/10/2026). Ce test tient deux choses :
 *
 *   1. le texte reste dans le périmètre des faits autorisés (CLAUDE.md, règle
 *      d'or : aucun client, aucun chiffre, aucun résultat, aucun témoignage,
 *      et LMNP.AI n'est jamais « en production » puisque sa nouvelle version
 *      est en alpha). Depuis le 08/10/2026 le site dit que Hagnéré Code a conçu
 *      et développé JORIL (déclaré par Quentin Hagnéré, consigné dans
 *      CLAUDE.md) : cette attribution ne s'étend ni à LMNP.AI ni aux autres
 *      produits du groupe ;
 *   2. tous les emplacements (bande de /services et de /realisations, accueil,
 *      page SaaS, méga-menu, pied de page) lisent la même source
 *      `src/lib/joril.ts` et ouvrent joril.ai proprement.
 */

const read = (relative: string) =>
  readFileSync(join(process.cwd(), relative), "utf8");

/** Le HTML rendu par React échappe les apostrophes et garde les &nbsp; : on les normalise. */
const plain = (html: string) =>
  html
    .replace(/&#x27;/g, "'")
    .replace(/&nbsp;| /g, " ")
    .replace(/\s+/g, " ");

const AUTHORIZED_TEXT = [
  JORIL_DEFINITION,
  JORIL_ACCUEIL,
  JORIL_STATUT,
  JORIL_CALENDRIER,
  JORIL_OFFRE,
  JORIL_LICENCE,
  JORIL_RESERVE,
  JORIL_LABEL,
  JORIL_MENU.title,
  JORIL_MENU.sub,
].join("\n");

const bandHtml = plain(renderToStaticMarkup(createElement(JorilBand)));
const footerHtml = plain(renderToStaticMarkup(createElement(SiteFooter)));

describe("Joril sur hagnere-code.ai — périmètre des faits", () => {
  it("dit ce que le dirigeant a autorisé : alpha, date annoncée, offre de Comptabilité AI propriétaire de Joril", () => {
    expect(JORIL_DEFINITION).toMatch(/assistant IA intégré à LMNP\.AI/);
    expect(JORIL_DEFINITION).toMatch(/LMNP\.AI est édité par LMNP AI, société du groupe Hagnéré/);
    expect(JORIL_DEFINITION).toContain("a été conçu et développé par Hagnéré Code");
    expect(JORIL_STATUT).toMatch(/nouvelle version de LMNP\.AI/);
    expect(JORIL_STATUT).toMatch(/est en alpha/);
    expect(JORIL_CALENDRIER).toContain("25 octobre 2026");
    expect(JORIL_OFFRE).toMatch(/logiciels, back-offices et espaces clients/);
    expect(JORIL_OFFRE).toContain("Hagnéré Code les réalise et les déploie");
    expect(JORIL_OFFRE).toContain("Comptabilité AI, propriétaire de Joril, propose");
    expect(JORIL_URL).toBe("https://joril.ai");
    expect(JORIL_HOST).toBe("joril.ai");
  });

  it("n'invente ni client, ni chiffre, ni résultat, ni témoignage, ni prix", () => {
    const forbidden = [
      /\d\s?%/,
      /€|euros?\b/i,
      /\d[\d\s]*\s(?:clients|utilisateurs|entreprises|assistants)\b/i,
      /témoign/i,
      /satisfa/i,
      /\brésultats? (?:obtenus|mesurés|prouvés)/i,
      /garanti|garantie/i,
      /\bROI\b/,
      /gain de temps/i,
    ];
    for (const pattern of forbidden) {
      expect(AUTHORIZED_TEXT, pattern.source).not.toMatch(pattern);
    }
  });

  it("ne dit jamais que LMNP.AI est en production", () => {
    expect(AUTHORIZED_TEXT).not.toMatch(/en production|en ligne depuis|déjà déployé/i);
  });

  it("attribue à Hagnéré Code la conception de Joril, et pour LMNP.AI seulement le développement", () => {
    // Fait déclaré par Quentin Hagnéré le 08/10/2026, consigné dans CLAUDE.md.
    expect(JORIL_DEFINITION).toMatch(/^Joril, l'assistant IA intégré à LMNP\.AI, a été conçu et développé par Hagnéré Code, qui développe aussi LMNP\.AI\./);
    // Toute phrase qui attribue une conception à Hagnéré Code porte sur Joril, jamais sur LMNP.AI.
    const sentences = AUTHORIZED_TEXT.split(/(?<=\.)\s+/);
    const attributions = sentences.filter((sentence) =>
      /(?:conçu|développé|réalisé|construit)e?s?(?: et \w+)?\s+par Hagnéré Code/i.test(sentence),
    );
    expect(attributions.length).toBeGreaterThanOrEqual(1);
    for (const sentence of attributions) {
      expect(sentence).toMatch(/^Joril, l'assistant IA (?:intégré à|de) LMNP\.AI/);
    }
    expect(AUTHORIZED_TEXT).not.toMatch(/LMNP\.AI (?:est|a été) (?:conçu|développé|réalisé|construit)/i);
    expect(AUTHORIZED_TEXT).not.toMatch(/Hagnéré Code[^.]{0,40}(?:exploite|opère|a lancé)/i);
    expect(AUTHORIZED_TEXT).not.toMatch(/notre client|client de Hagnéré Code/i);
  });

  it("nomme le bon éditeur de LMNP.AI : LMNP AI, jamais Comptabilité AI (mentions légales de lmnp.ai, 11/09/2026)", () => {
    expect(JORIL_DEFINITION).toMatch(/LMNP\.AI est édité par LMNP AI, société du groupe Hagnéré, qui en est propriétaire\.$/);
    // L'erreur relevée le 08/10/2026 au soir ne doit pas revenir, ni ici ni dans les pages qui la portaient.
    const rendered = [AUTHORIZED_TEXT, homepage, saasApplications, bandHtml, footerHtml, navHtml].join("\n");
    expect(rendered).not.toMatch(/LMNP\.AI(?: est|,)? édité(?:e)? par Comptabilité[ -]AI/i);
    expect(read("src/app/agence-next-js/page.tsx").replace(/\s+/g, " ")).not.toMatch(
      /LMNP\.AI et SCI-AI\.app, édités par Comptabilité AI/,
    );
    // L'offre et la licence sont celles de Comptabilité AI, qui possède Joril.
    expect(JORIL_OFFRE).toMatch(/^Sur joril\.ai, Comptabilité AI, propriétaire de Joril, propose/);
  });

  it("consigne le fait dans CLAUDE.md, attribué au dirigeant et daté, pour qu'un audit ne le retire pas", () => {
    // Le Markdown passe à la ligne n'importe où : on compare à texte aplati.
    const rules = read("CLAUDE.md").replace(/\s+/g, " ");
    expect(rules).toContain(
      "Joril, l'assistant IA intégré à LMNP.AI, a été conçu et développé par Hagnéré Code.",
    );
    expect(rules).toContain("Quentin Hagnéré");
    expect(rules).toContain("08/10/2026");
    expect(rules).toContain("src/lib/joril.ts");
  });

  it("consigne dans le tableau des sociétés de CLAUDE.md que LMNP.AI est édité par LMNP AI, avec sa source", () => {
    const rules = read("CLAUDE.md").replace(/\s+/g, " ");
    expect(rules).toMatch(/\| LMNP AI \| 109092247 \| Éditrice du site \*\*LMNP\.AI\*\*/);
    expect(rules).toContain("mentions légales de lmnp.ai, version 4.0 du 11/09/2026");
    expect(rules).toContain("Ne jamais écrire « LMNP.AI est édité par Comptabilité AI »");
    // Les autres faits de la ligne COMPTABILITE-AI sont gardés.
    expect(rules).toMatch(/\| COMPTABILITE-AI \| 978548899 \| Éditrice du site \*\*SCI-AI\.app\*\*/);
    expect(rules).toContain("Active depuis le 02/08/2023, NAF 58.29C");
  });

  it("dit que les assistants sont fournis sous licence d'utilisation, sans recopier les conditions", () => {
    // Décision du dirigeant, 08/10/2026 au soir : le client n'est pas propriétaire du code.
    // hagnere-code.ai dit par ailleurs que les livrables d'agence sont transférés après
    // paiement complet : cette phrase évite la contradiction entre les deux sites.
    expect(JORIL_LICENCE).toBe(
      "Les assistants Joril sont proposés par Comptabilité AI sous licence d'utilisation, selon les conditions présentées sur joril.ai.",
    );
    // La licence est celle de Comptabilité AI, pas de l'agence ; frais et formules restent sur joril.ai.
    expect(JORIL_LICENCE).not.toMatch(/Hagnéré Code/);
    expect(JORIL_LICENCE).not.toMatch(/propriétaire|transf[ée]r|cession|vendu|redevance|marge|frais|€|\d/i);
  });

  it("garde la réserve dans la bande, au même endroit que le statut alpha", () => {
    expect(bandHtml).toContain(JORIL_STATUT);
    expect(bandHtml).toContain(JORIL_RESERVE);
  });
});

describe("Joril sur hagnere-code.ai — emplacements", () => {
  it("la bande ouvre joril.ai dans un nouvel onglet, sans fuite de référent, et le dit", () => {
    expect(bandHtml).toMatch(
      /<a class="joril-band-cta" href="https:\/\/joril\.ai" target="_blank" rel="noopener noreferrer">/,
    );
    expect(bandHtml).toContain("s'ouvre dans un nouvel onglet");
    expect(bandHtml).toContain('href="/realisations/lmnp-ai"');
    expect(bandHtml).toContain(JORIL_DEFINITION);
    expect(bandHtml).toContain(JORIL_OFFRE);
    expect(bandHtml).toContain(JORIL_LICENCE);
  });

  it("la bande est posée sur /services et sur /realisations, et sur elles seules", () => {
    const hub = read("src/components/services/ServicesHubPage.tsx");
    const realisations = read("src/components/realisations/RealisationsIndexPage.tsx");
    expect(hub).toContain("<JorilBand");
    expect(realisations).toContain("<JorilBand");
    // Deux h2 sur la même page n'ont pas le même identifiant.
    expect(hub).toContain('headingId="joril-services-titre"');
    expect(realisations).toContain('headingId="joril-realisations-titre"');
  });

  it("l'accueil porte une bande courte, lue dans la source, pas une section de plus", () => {
    const text = plain(homepage);
    expect(text).toContain('id="assistants-ia"');
    expect(text).toContain(JORIL_ACCUEIL);
    // Deux phrases courtes : l'alpha, la conception et la licence y sont, le détail est ailleurs.
    expect(JORIL_ACCUEIL.split(/(?<=\.)\s+/)).toHaveLength(2);
    expect(JORIL_ACCUEIL.length).toBeLessThanOrEqual(240);
    expect(JORIL_ACCUEIL).toContain("nouvelle version en alpha");
    expect(JORIL_ACCUEIL).toContain("a été conçu et développé par Hagnéré Code");
    expect(JORIL_ACCUEIL).toContain("sous licence d'utilisation");
    expect(homepage.match(/id="assistants-ia"/g)).toHaveLength(1);
  });

  it("la page SaaS renvoie vers joril.ai depuis le bloc consacré à l'IA agentique", () => {
    const block = saasApplications.slice(
      saasApplications.indexOf("IA agentique &amp; automatisations"),
    );
    const nextCard = block.indexOf("</div>\n      </div>");
    const card = block.slice(0, nextCard === -1 ? 1500 : nextCard);
    expect(card).toContain('href="https://joril.ai"');
    expect(card).toContain('rel="noopener noreferrer"');
    expect(card).toContain("sous licence d'utilisation");
  });

  it("le méga-menu (Construire) et le pied de page proposent « Assistants IA (Joril) »", () => {
    expect(navHtml).toContain(`href="${JORIL_URL}" target="_blank" rel="noopener noreferrer"`);
    expect(navHtml).toContain(JORIL_MENU.title);
    expect(navHtml).toContain(JORIL_MENU.sub);

    expect(footerHtml).toContain(`href="${JORIL_URL}"`);
    expect(footerHtml).toContain(`rel="noopener noreferrer"`);
    expect(footerHtml).toContain(JORIL_LABEL);
  });

  it("chaque lien vers joril.ai du menu, du pied de page, de l'accueil et de la page SaaS est sûr", () => {
    for (const [name, html] of [
      ["menu", navHtml],
      ["pied de page", footerHtml],
      ["accueil", homepage],
      ["page SaaS", saasApplications],
    ] as const) {
      const anchors = [
        ...html.matchAll(/<a\b[^>]*href="https:\/\/joril\.ai"[^>]*>/g),
      ].map((match) => match[0]);
      expect(anchors.length, `${name} : aucun lien joril.ai`).toBeGreaterThan(0);
      for (const anchor of anchors) {
        expect(anchor, `${name} : target`).toContain('target="_blank"');
        expect(anchor, `${name} : rel`).toContain('rel="noopener noreferrer"');
      }
    }
  });
});

describe("LMNP.AI : développé par Hagnéré Code, édité et détenu par LMNP AI (Quentin Hagnéré, 09/10/2026)", () => {
  const cases = read("src/components/realisations/cases.ts");
  const lmnpBlock = cases.slice(cases.indexOf('"lmnp-ai": {'), cases.indexOf('"sci-ai": {'));
  const otherBlocks = cases.slice(cases.indexOf('"sci-ai": {'));

  it("la fiche LMNP.AI le dit, sans en faire un client ni lui attribuer un résultat", () => {
    expect(lmnpBlock).toContain("LMNP AI en est l'éditeur et le propriétaire, et Hagnéré Code le développe");
    expect(lmnpBlock).toContain("développé par Hagnéré Code");
    expect(lmnpBlock).toContain("pas un client indépendant");
    expect(lmnpBlock).toMatch(/ne prouve ni l'équipe, ni la technologie utilisée, ni un résultat obtenu/);
    // L'ancienne réserve n'a plus lieu d'être pour ce produit.
    expect(lmnpBlock).not.toMatch(/ni l'auteur du code|sans attribution de sa conception/);
    // Le fait est déclaré, pas observé : la fiche le dit.
    expect(lmnpBlock).toContain("déclaré par l'auteur du site : la page publique ne le montre pas");
  });

  it("les trois autres produits restent sous la règle prudente", () => {
    expect(otherBlocks.match(/ni l'auteur du code/g)).toHaveLength(3);
    expect(otherBlocks.match(/sans attribution de sa conception à Hagnéré Code/g)).toHaveLength(3);
    expect(otherBlocks).not.toMatch(/Hagnéré Code (?:le |les )?développe/);
  });

  it("CLAUDE.md consigne le fait, daté et attribué, et son périmètre", () => {
    const rules = read("CLAUDE.md").replace(/\s+/g, " ");
    expect(rules).toContain("LMNP.AI est développé et mis à jour par Hagnéré Code ; LMNP AI en est l'éditeur et le propriétaire.");
    expect(rules).toContain("Fait déclaré par Quentin Hagnéré, dirigeant, le 09/10/2026");
    expect(rules).toContain("SCI-AI.app, Hagnéré Patrimoine et Hagnéré Investissement restent sous la règle prudente");
  });

  it("les surfaces qui parlaient de « ni leur conception » pour les quatre produits distinguent LMNP.AI", () => {
    const home = read("src/components/homepage/body.ts").replace(/\s+/g, " ");
    expect(home).toContain("Hagnéré Code développe LMNP.AI&nbsp;; la conception des trois autres n'est pas revendiquée.");
    expect(home).not.toMatch(/ne revendiquent en revanche ni leur conception/);
    const next = read("src/app/agence-next-js/page.tsx").replace(/\s+/g, " ");
    expect(next).toContain("Code développe LMNP.AI, et ne revendique la conception ni de SCI-AI.app");
    expect(next).not.toMatch(/ni leur conception, ni leur technologie/);
    const meta = read("src/app/realisations/page.tsx");
    expect(meta).toContain("Hagnéré Code développe LMNP.AI ; aucune conception n'est revendiquée pour les trois autres");
    expect(meta).not.toContain("absence d'attribution de conception");
  });
});
