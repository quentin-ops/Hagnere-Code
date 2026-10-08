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
  JORIL_CALENDRIER,
  JORIL_DEFINITION,
  JORIL_HOST,
  JORIL_LABEL,
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
 *      est en alpha) ;
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
  JORIL_STATUT,
  JORIL_CALENDRIER,
  JORIL_OFFRE,
  JORIL_RESERVE,
  JORIL_LABEL,
  JORIL_MENU.title,
  JORIL_MENU.sub,
].join("\n");

const bandHtml = plain(renderToStaticMarkup(createElement(JorilBand)));
const footerHtml = plain(renderToStaticMarkup(createElement(SiteFooter)));

describe("Joril sur hagnere-code.ai — périmètre des faits", () => {
  it("dit ce que le dirigeant a autorisé : alpha, date annoncée, offre de Comptabilité AI", () => {
    expect(JORIL_DEFINITION).toMatch(/assistant IA intégré à LMNP\.AI/);
    expect(JORIL_DEFINITION).toMatch(/Comptabilité AI, société du groupe Hagnéré/);
    expect(JORIL_STATUT).toMatch(/nouvelle version de LMNP\.AI/);
    expect(JORIL_STATUT).toMatch(/est en alpha/);
    expect(JORIL_CALENDRIER).toContain("25 octobre 2026");
    expect(JORIL_OFFRE).toMatch(/logiciels, back-offices et espaces clients/);
    expect(JORIL_OFFRE).toContain("Hagnéré Code les réalise et les déploie");
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

  it("ne dit jamais que LMNP.AI est en production et ne s'attribue pas la conception de Joril", () => {
    expect(AUTHORIZED_TEXT).not.toMatch(/en production|en ligne depuis|déjà déployé/i);
    expect(AUTHORIZED_TEXT).not.toMatch(
      /(?:conçu|réalisé|développé|construit)e?s?\s+par Hagnéré Code/i,
    );
    expect(AUTHORIZED_TEXT).not.toMatch(
      /Hagnéré Code (?:a|ont) (?:construit|conçu|développé|réalisé)/i,
    );
    // Joril est à Comptabilité AI ; Hagnéré Code est cité pour l'offre faite aux entreprises.
    expect(JORIL_OFFRE).toMatch(/^Sur joril\.ai, Comptabilité AI propose/);
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
    expect(text).toContain(JORIL_DEFINITION);
    expect(text).toContain(JORIL_STATUT);
    expect(text).toContain(JORIL_OFFRE);
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
