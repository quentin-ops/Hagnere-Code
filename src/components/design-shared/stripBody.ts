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
 * Matches both "<!-- CTA -->" and "<!-- CTA FINAL -->" anchors.
 */
export function stripFinalCta(html: string): string {
  return html.replace(
    /<!-- CTA(?: FINAL)? -->[\s\S]*?<\/section>\s*/m,
    "",
  );
}
