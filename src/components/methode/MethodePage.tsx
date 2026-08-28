import { MainNav } from "@/components/design-shared/MainNav";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import { MethodeInteractiveRoot } from "./MethodeInteractiveRoot";
import { pageHtml } from "./page-html";
import "./page.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/site-footer.css";

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
