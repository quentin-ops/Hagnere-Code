import { describe, expect, it } from "vitest";
import { stripNav } from "@/components/design-shared/stripBody";
import { composedBodyHtml } from "./composed-body";
import {
  FIRST_CALL_CONTACT,
  FIRST_CALL_CONTACT_SHORT,
  FIRST_CALL_META,
} from "./first-call";

/**
 * L'audit d'août 2026 a relevé six formulations concurrentes de l'interlocuteur
 * du premier rendez-vous sur des pages enchaînées en trois clics, dont une
 * inexacte (« associé » : la société est une SASU sans associé).
 * Le corps de la page d'accueil n'en publie plus qu'une.
 *
 * La navigation partagée (src/components/design-shared/nav-html.ts) est exclue
 * de la mesure : elle appartient au gabarit commun, pas à cette page. Elle
 * annonce encore « 30 min en visio avec le fondateur » et doit être alignée
 * par son propriétaire.
 */
const pageBody = stripNav(composedBodyHtml);

describe("interlocuteur du premier rendez-vous", () => {
  it("n'utilise qu'une seule formulation, exacte, sur toute la page", () => {
    expect(pageBody).toContain(FIRST_CALL_CONTACT);
    expect(pageBody).toContain(FIRST_CALL_META);

    // « Associé » est faux pour désigner un interlocuteur (SASU, président
    // fondateur, aucun associé). Le mot reste licite quand il décrit les
    // associés d'une SCI, qui sont une fonction de SCI-AI.app.
    expect(pageBody).not.toMatch(
      /(?:par|avec|un)\s+un\s+associé|associé qui code|PAR UN ASSOCIÉ/i,
    );
    // Variantes vagues ou concurrentes retirées du corps de page.
    expect(pageBody).not.toMatch(
      /avec le fondateur|avec un expert|Parler à un expert|quelqu'un qui code|cadrage de 30 min avec l'équipe/i,
    );
  });

  it("décrit un profil réel de l'équipe, pas un rôle inventé", () => {
    // Sept personnes, toutes techniques : le profil promis doit exister.
    expect(FIRST_CALL_CONTACT).toContain(FIRST_CALL_CONTACT_SHORT);
    expect(FIRST_CALL_CONTACT_SHORT).toBe("un développeur senior");
  });
});
