import { navHtml } from "@/components/design-shared/nav-html";

/**
 * Retire uniquement la navigation canonique placée au début des anciens
 * gabarits HTML. La navigation est ensuite rendue séparément avec <MainNav />
 * afin qu'elle reste hors du landmark <main>.
 */
export function stripNav(html: string): string {
  const navStart = html.indexOf(navHtml);

  if (navStart === -1 || html.slice(0, navStart).trim() !== "") {
    return html;
  }

  return html.slice(0, navStart) + html.slice(navStart + navHtml.length);
}

/**
 * Strip the original static <footer>...</footer> block from a design body.ts
 * so we can render the React <SiteFooter /> in its place.
 */
export function stripFooter(html: string): string {
  return html.replace(/<!-- FOOTER -->[\s\S]*?<\/footer>\s*$/m, "");
}

/**
 * Strip the original static final-CTA block so it doesn't duplicate
 * the "Parlons de votre projet" section rendered by <SiteFooter />.
 *
 * The CTA marker must introduce a section placed immediately before the
 * legacy footer (or at the end of the document). Some composed pages contain
 * internal "<!-- CTA -->" comments; matching the first marker would cut the
 * page in the middle and leave invalid, unclosed HTML.
 */
export function stripFinalCta(html: string): string {
  return html.replace(
    /<!-- CTA(?: FINAL)?(?:\s+—[^>]*)? -->\s*<section\b[\s\S]*?<\/section>\s*(?=<!-- FOOTER -->|$)/m,
    "",
  );
}
