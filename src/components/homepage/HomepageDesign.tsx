import { composedBodyHtml } from "./composed-body";
import { InteractiveDesignRoot } from "@/components/design-shared/InteractiveDesignRoot";
import { MainNav } from "@/components/design-shared/MainNav";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import { stripNav } from "@/components/design-shared/stripBody";
import "./homepage.css";
import "./sections/sections.css";
import "./sections/hero-video.css";
import "./sections/hero-visual.css";
import "./sections/team-polish.css";
import "./sections/sprint-fixe.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/site-footer.css";

export function HomepageDesign() {
  const markup = { __html: stripNav(composedBodyHtml) };
  return (
    <InteractiveDesignRoot className="hc-design hc-homepage">
      <MainNav />
      <main
        id="main-content"
        tabIndex={-1}
        dangerouslySetInnerHTML={markup}
      />
      <SiteFooter />
    </InteractiveDesignRoot>
  );
}
