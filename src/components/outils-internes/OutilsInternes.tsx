import Link from "next/link";
import { composedBodyHtml as raw } from "./composed-body";
import {
  stripFooter,
  stripFinalCta,
  stripNav,
} from "@/components/design-shared/stripBody";
import { InteractiveDesignRoot } from "@/components/design-shared/InteractiveDesignRoot";
import { MainNav } from "@/components/design-shared/MainNav";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import "./page.css";
import "./sections/sections.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/site-footer.css";

const bodyHtml = stripNav(stripFooter(stripFinalCta(raw)));

export function OutilsInternes() {
  const markup = { __html: bodyHtml };
  return (
    <InteractiveDesignRoot className="hc-design">
      <MainNav />
      <main id="main-content" tabIndex={-1}>
        <div dangerouslySetInnerHTML={markup} />
        <section className="border-t border-zinc-200 bg-zinc-50 px-4 py-12 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-violet-700 dark:text-violet-300">
              Préparer la décision
            </p>
            <h2 className="mt-2 max-w-3xl text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
              Trois guides pour choisir avant de développer.
            </h2>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {[
                [
                  "/guides/transformer-excel-en-application",
                  "Transformer Excel en application",
                ],
                [
                  "/guides/erp-ou-logiciel-sur-mesure",
                  "Comparer ERP et logiciel sur mesure",
                ],
                [
                  "/guides/cahier-des-charges-application-metier",
                  "Rédiger le cahier des charges métier",
                ],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="flex min-h-11 items-center rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:border-violet-300 hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:border-violet-700 dark:hover:text-violet-300"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </InteractiveDesignRoot>
  );
}
