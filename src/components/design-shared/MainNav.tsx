/**
 * Thin React wrapper around the canonical navHtml. Renders the same markup
 * as every body.ts string template so we have a single source of truth.
 *
 * The hover/click/category-switch wiring is handled by useDesignInteractive,
 * which all layouts already mount on their root ref. Content is hardcoded in
 * nav-html.ts (no user input) — XSS surface is nil.
 */
import { navHtml } from "@/components/design-shared/nav-html";

export function MainNav() {
  // eslint-disable-next-line react/no-danger
  return <div dangerouslySetInnerHTML={{ __html: navHtml }} />;
}
