/**
 * Thin React wrapper around the canonical navHtml. Renders the same markup
 * as every body.ts string template so we have a single source of truth.
 *
 * The hover/click/category-switch wiring is handled by useDesignInteractive,
 * which all layouts already mount on their root ref. Content is hardcoded in
 * nav-html.ts (no user input) — XSS surface is nil.
 *
 * `display: contents` sur l'enveloppe n'est PAS cosmétique.
 * `dangerouslySetInnerHTML` impose un élément hôte : ce <div> devenait le
 * bloc conteneur de `.hc-nav`, qui est `position: sticky`. Or un élément
 * collant ne peut jamais sortir de la boîte de son parent — et cette boîte
 * faisait exactement la hauteur de la barre (65 px mesurés). La barre avait
 * donc zéro pixel de course et quittait l'écran au premier défilement, sur
 * les 54 pages du site, alors que `nav-dropdown.css` déclarait bien
 * `position: sticky; top: 0`.
 *
 * `display: contents` retire la boîte de l'enveloppe : `.hc-nav` redevient
 * enfant de `.hc-design`, qui couvre toute la hauteur du document. Le style
 * est posé en ligne et non en CSS pour qu'il ne dépende d'aucun import de
 * feuille — toutes les pages n'importent pas `nav-dropdown.css` au même
 * endroit, et la régression serait invisible en revue.
 */
import { navHtml } from "@/components/design-shared/nav-html";

export function MainNav() {
  return (
    <div
      style={{ display: "contents" }}
      dangerouslySetInnerHTML={{ __html: navHtml }}
    />
  );
}
