import { composedBodyHtml as raw } from "./composed-body";
import { stripFooter, stripFinalCta, stripNav } from "@/components/design-shared/stripBody";
import { InteractiveDesignRoot } from "@/components/design-shared/InteractiveDesignRoot";
import { MainNav } from "@/components/design-shared/MainNav";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import "./page.css";
import "./sections/sections.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/site-footer.css";

const bodyHtml = stripNav(stripFooter(stripFinalCta(raw)));

export function PubliciteEnLigne() {
  const markup = { __html: bodyHtml };
  return (
    <InteractiveDesignRoot className="hc-design">
      <MainNav />
      <main id="main-content" tabIndex={-1} dangerouslySetInnerHTML={markup} />
      <SiteFooter />
    </InteractiveDesignRoot>
  );
}
