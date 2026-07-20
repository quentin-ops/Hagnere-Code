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

// Static HTML composed at build-time from local TS template literals (body.ts +
// section files). No user input flows into this string — same trusted-template
// pattern used by ContenuVideo.tsx, Ecommerce.tsx and all other service pages.
const bodyHtml = stripNav(stripFooter(stripFinalCta(raw)));

export function SecuriteRgpd() {
  const markup = { __html: bodyHtml };
  return (
    <InteractiveDesignRoot className="hc-design">
      <MainNav />
      <main id="main-content" tabIndex={-1} dangerouslySetInnerHTML={markup} />
      <SiteFooter />
    </InteractiveDesignRoot>
  );
}
