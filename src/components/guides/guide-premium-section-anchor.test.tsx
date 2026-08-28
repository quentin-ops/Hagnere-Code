import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { GuidePremiumSection } from "./guide-premium-layout";

/**
 * Nom accessible des ancres de section.
 *
 * Les 168 sections du corpus rendaient la même ancre « # ancrer » avec un
 * `aria-label="Lien direct vers cette section"` identique partout : la liste
 * des liens d'un lecteur d'écran affichait donc dix intitulés rigoureusement
 * interchangeables sur une même page, sans moyen de savoir où chacun menait
 * (WCAG 2.4.4). Le nom est désormais composé du texte visible « ancrer » puis
 * du titre de la section, référencé par `aria-labelledby` — ce qui satisfait
 * aussi WCAG 2.5.3, qui impose que le nom accessible contienne le libellé
 * visible, ce que `aria-label` cassait.
 */

const TITRE_A = "Séparez sept lignes avant d’additionner quoi que ce soit";
const TITRE_B = "Trois mois montrent le lancement";

function markupFor(id: string, title: string): string {
  return renderToStaticMarkup(
    <GuidePremiumSection id={id} title={title}>
      <p>Corps de section.</p>
    </GuidePremiumSection>,
  );
}

/** Reconstitue le nom accessible d'un lien depuis `aria-labelledby`. */
function accessibleName(markup: string, anchorId: string): string {
  const anchor =
    markup.match(new RegExp(`<a\\b[^>]*id="${anchorId}"[^>]*>`))?.[0] ?? "";
  const referenced = anchor.match(/aria-labelledby="([^"]*)"/)?.[1] ?? "";

  return referenced
    .split(/\s+/)
    .filter(Boolean)
    .map((id) => {
      const element =
        markup.match(
          new RegExp(`<(a|h2)\\b[^>]*id="${id}"[^>]*>([\\s\\S]*?)</\\1>`),
        )?.[2] ?? "";
      // Un fragment `aria-hidden` ne participe pas au nom accessible.
      return element
        .replace(/<([a-z0-9]+)\b[^>]*aria-hidden="true"[^>]*>[\s\S]*?<\/\1>/gi, " ")
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    })
    .filter(Boolean)
    .join(" ");
}

describe("ancre de section d’un guide premium", () => {
  const markup = markupFor("cout-complet", TITRE_A);

  it("ne retombe plus sur un intitulé partagé par toutes les sections", () => {
    expect(markup).not.toContain("Lien direct vers cette section");
    expect(markup).not.toMatch(/<a\b[^>]*aria-label=/);
  });

  it("compose le nom accessible du texte visible puis du titre de section", () => {
    const name = accessibleName(markup, "cout-complet-ancre");

    // WCAG 2.5.3 : le libellé visible doit rester le début du nom accessible,
    // sans quoi une commande vocale « cliquer ancrer » ne cible plus le lien.
    expect(name.startsWith("ancrer")).toBe(true);
    expect(name).toContain(TITRE_A);
    expect(name).not.toContain("#");
  });

  it("rattache l’ancre au H2 de sa propre section", () => {
    expect(markup).toContain('<h2 id="cout-complet-titre"');
    expect(markup).toContain(
      'aria-labelledby="cout-complet-ancre cout-complet-titre"',
    );
    // La cible du lien reste la section, pas le titre.
    expect(markup).toContain('href="#cout-complet"');
    expect(markup).toContain('<section id="cout-complet"');
  });

  it("distingue deux sections d’une même page", () => {
    const autre = markupFor("horizons", TITRE_B);

    expect(accessibleName(markup, "cout-complet-ancre")).not.toBe(
      accessibleName(autre, "horizons-ancre"),
    );
  });

  it("ne recopie pas le titre une seconde fois dans le DOM", () => {
    // Le corpus proscrit le contenu rendu deux fois : les extracteurs qui
    // n'appliquent pas le CSS liraient chaque titre en double.
    expect(markup.split(TITRE_A).length - 1).toBe(1);
  });

  it("n’expose aucune référence vide quand le titre n’a pas de texte", () => {
    const sansTexte = renderToStaticMarkup(
      <GuidePremiumSection id="visuel" title={<hr />}>
        <p>Corps de section.</p>
      </GuidePremiumSection>,
    );

    expect(sansTexte).not.toContain("aria-labelledby");
  });

  it("laisse `hideAnchor` supprimer complètement le lien", () => {
    const sansAncre = renderToStaticMarkup(
      <GuidePremiumSection id="intro" title="Intro" hideAnchor>
        <p>Corps de section.</p>
      </GuidePremiumSection>,
    );

    expect(sansAncre).not.toContain("ancrer");
    expect(sansAncre).toContain('<h2 id="intro-titre"');
  });
});
