import { bodyHtml as raw } from "./body";
import { stripFooter, stripFinalCta, stripNav } from "@/components/design-shared/stripBody";
import { MainNav } from "@/components/design-shared/MainNav";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import { MethodeInteractiveRoot } from "./MethodeInteractiveRoot";
import "./page.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/site-footer.css";

const cleaned = stripNav(stripFooter(stripFinalCta(raw)));
const LAST_UPDATE = "19 JUILLET 2026";
const pageHtml = cleaned.replaceAll("{{LAST_UPDATE}}", LAST_UPDATE);

export function MethodePage() {
  const markup = { __html: pageHtml };
  return (
    <MethodeInteractiveRoot>
      <MainNav />
      <main id="main-content" tabIndex={-1} dangerouslySetInnerHTML={markup} />
      <SiteFooter />
    </MethodeInteractiveRoot>
  );
}
