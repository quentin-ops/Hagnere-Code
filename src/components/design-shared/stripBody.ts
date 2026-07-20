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
