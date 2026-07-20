const CONTACT_HERO_MARKER = "<!-- CONTACT HERO -->";
const CONTACT_HERO = /<!-- CONTACT HERO -->[\s\S]*?<\/section>\s*/m;

export function splitContactPageHtml(html: string) {
  const heroStart = html.indexOf(CONTACT_HERO_MARKER);

  if (heroStart === -1) {
    return {
      navHtml: "",
      contentHtml: html,
    };
  }

  return {
    // The shared menu contains nested <nav> elements. The explicit contact
    // marker is therefore the reliable boundary, unlike the first </nav>.
    navHtml: html.slice(0, heroStart),
    contentHtml: html.slice(heroStart).replace(CONTACT_HERO, ""),
  };
}
