import type { ReactNode } from "react";
import { InteractiveDesignRoot } from "@/components/design-shared/InteractiveDesignRoot";
import { MainNav } from "@/components/design-shared/MainNav";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import "@/components/homepage/homepage.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/site-footer.css";

/**
 * Coquille commune des pages /guides : nav + footer du site vitrine autour
 * d'un contenu 100 % Tailwind.
 *
 * Le contenu des guides vit VOLONTAIREMENT hors de `.hc-design` :
 * responsive.css applique des règles `!important` aux éléments (h2, p, li…)
 * sous `.hc-design`, ce qui écraserait la typographie Tailwind des articles.
 * `display: contents` sur le wrapper nav laisse la nav sticky se positionner
 * par rapport à la page entière tout en gardant le scope CSS `.hc-design`
 * (le matching CSS suit l'arbre DOM, pas les boîtes générées).
 */
export function GuidesShell({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen">
      <InteractiveDesignRoot
        className="hc-design"
        style={{ display: "contents" }}
      >
        <MainNav />
      </InteractiveDesignRoot>
      <main id="main-content" tabIndex={-1}>{children}</main>
      <div className="hc-design">
        <SiteFooter />
      </div>
    </div>
  );
}
