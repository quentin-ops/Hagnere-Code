import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { ContactProjectSection } from "./SiteFooter";
import { CONTACT_EMAIL, CONTACT_PHONE_E164 } from "@/lib/contact-details";

/**
 * Comportement du formulaire de contact SANS JavaScript.
 *
 * Le <form> n'a ni `action` ni `method` : une soumission déclencherait une
 * navigation GET vers la page courante, et prénom, nom, e-mail professionnel et
 * message partiraient dans la barre d'adresse — donc aussi dans le `Referer` et
 * les journaux serveur. Le repli se contentait de MASQUER le bouton d'envoi, ce
 * qui n'empêche pas la soumission implicite : sans JavaScript, la touche Entrée
 * dans un champ texte envoie le formulaire de toute façon.
 *
 * La parade tient à la spécification HTML : la soumission implicite ne
 * déclenche le bouton par défaut (le premier bouton d'envoi dans l'ordre du
 * document) que s'il n'est PAS désactivé, et ne se rabat sur « formulaire sans
 * bouton d'envoi » que s'il n'y en a aucun. Un bouton d'envoi désactivé placé
 * en tête neutralise donc Entrée. Il vit dans le <noscript>, dont le contenu
 * n'est analysé comme des éléments que si le script est désactivé : avec
 * JavaScript, il n'existe pas et Entrée continue d'envoyer normalement.
 */

const html = renderToStaticMarkup(<ContactProjectSection />);
const noscript = html.match(/<noscript>([\s\S]*?)<\/noscript>/)?.[1] ?? "";

describe("formulaire de contact sans JavaScript", () => {
  it("n'expose toujours aucune cible de soumission en clair", () => {
    const form = html.match(/<form[^>]*class="sf-form"[^>]*>/)?.[0] ?? "";
    expect(form).toBeTruthy();
    // Si un `action`/`method` était ajouté un jour, c'est ce test — et non un
    // visiteur — qui doit le signaler : la protection ci-dessous change alors
    // de nature.
    expect(form).not.toContain("action=");
    expect(form).not.toContain("method=");
  });

  it("neutralise la touche Entrée, pas seulement le clic", () => {
    expect(noscript).toContain('type="submit"');
    expect(noscript).toContain("disabled");
    // Masquer le bouton reste utile — mais ne protège que du clic.
    expect(noscript).toContain(".sf-submit{display:none}");
  });

  it("place ce bouton avant le bouton visible, sinon il n'est pas le défaut", () => {
    // « Bouton par défaut » = PREMIER bouton d'envoi dans l'ordre du document.
    // Déplacer le <noscript> après le bouton d'envoi annulerait la protection
    // sans rien changer à l'apparence de la page.
    const noscriptIndex = html.indexOf("<noscript>");
    const submitIndex = html.indexOf('class="btn btn-primary btn-lg sf-submit"');
    expect(noscriptIndex).toBeGreaterThan(-1);
    expect(submitIndex).toBeGreaterThan(-1);
    expect(noscriptIndex).toBeLessThan(submitIndex);
  });

  it("donne toujours une voie de contact directe", () => {
    // Les coordonnées viennent du module unique : si le repli sans JavaScript
    // reprenait une adresse écrite en dur, il resterait sur l'ancienne boîte le
    // jour où le site bascule sur une autre.
    expect(noscript).toContain(`mailto:${CONTACT_EMAIL}`);
    expect(noscript).toContain(`tel:${CONTACT_PHONE_E164}`);
  });
});

describe("mesure de l'ouverture du formulaire", () => {
  it("émet l'ouverture au premier focus, une seule fois par montage", () => {
    const content = readFileSync(
      join(process.cwd(), "src/components/design-shared/SiteFooter.tsx"),
      "utf8",
    );
    const handler = content.slice(
      content.indexOf("onFocusCapture={"),
      content.indexOf('<div className="sf-form-head">'),
    );
    expect(handler).toContain('trackFunnelEvent("contact_form_open"');
    // Sans garde, chaque passage d'un champ à l'autre compterait une ouverture
    // et le dénominateur serait faux dans l'autre sens.
    expect(handler).toContain("openTrackedRef.current");
  });
});
