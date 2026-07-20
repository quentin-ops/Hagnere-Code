import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight, FileText, Sheet } from "lucide-react";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { DEFAULT_OG_IMAGE, OG_BASE, SITE_URL } from "@/lib/seo";
import { WHITE_PAPERS, whitePaperUrl } from "@/lib/white-papers";

export const metadata: Metadata = {
  title: "Livres blancs web gratuits · Modèles et grilles Hagnéré Code",
  description:
    "Des livres blancs web directement utilisables : méthodes, grilles Excel/Sheets, exemples remplis et PDF gratuits pour cadrer vos décisions.",
  authors: [{ name: "Hagnéré Code" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  alternates: { canonical: "/livres-blancs" },
  openGraph: {
    ...OG_BASE,
    title: "Livres blancs web gratuits · Hagnéré Code",
    description:
      "Méthodes, grilles et exemples remplis pour prendre de meilleures décisions web.",
    url: "/livres-blancs",
    images: [DEFAULT_OG_IMAGE],
  },
};

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Ressources",
      item: `${SITE_URL}/ressources`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Livres blancs",
      item: `${SITE_URL}/livres-blancs`,
    },
  ],
});

const collectionJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Livres blancs web Hagnéré Code",
  description:
    "Des ressources gratuites et directement exploitables pour cadrer, budgéter et choisir un projet web.",
  url: `${SITE_URL}/livres-blancs`,
  author: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: WHITE_PAPERS.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.cardTitle,
      url: whitePaperUrl(entry),
    })),
  },
});

export default function Page() {
  return (
    <GuidesShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: collectionJsonLd.replace(/</g, "\\u003c") }}
      />

      <section className="relative overflow-hidden bg-zinc-950 py-14 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(109,40,217,0.16),transparent_58%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <nav
            aria-label="Fil d'Ariane"
            className="mb-8 flex items-center gap-2 text-sm text-zinc-500"
          >
            <Link href="/" className="hover:text-zinc-300">
              Accueil
            </Link>
            <ChevronRight className="size-3" aria-hidden="true" />
            <Link href="/ressources" className="hover:text-zinc-300">
              Ressources
            </Link>
            <ChevronRight className="size-3" aria-hidden="true" />
            <span className="font-medium text-zinc-200">Livres blancs</span>
          </nav>
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-violet-400">
              Ressources opérationnelles
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Des livres blancs à utiliser, pas à collectionner.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              La méthode est lisible directement sur le site. Le PDF sert à la
              partager ; les grilles et exemples servent à décider. Aucun email
              n&apos;est exigé pour accéder au contenu.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-400">
              {[
                "Contenu intégral",
                "Exemples remplis",
                "Téléchargement direct",
              ].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <Check
                    className="size-4 text-emerald-400"
                    aria-hidden="true"
                  />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 flex items-end justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-400">
                Bibliothèque
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
                Les ressources disponibles
              </h2>
            </div>
            <span className="text-sm text-zinc-500">
              {WHITE_PAPERS.length} ressource
              {WHITE_PAPERS.length > 1 ? "s" : ""}
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {WHITE_PAPERS.map((entry) => (
              <article
                key={entry.slug}
                className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-violet-800"
              >
                <div className="border-b border-zinc-100 bg-gradient-to-br from-violet-50 to-blue-50 p-6 dark:border-zinc-800 dark:from-violet-950/40 dark:to-blue-950/30">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
                      <Sheet className="size-5" aria-hidden="true" />
                    </span>
                    <span className="rounded-full bg-white/80 px-2.5 py-1 text-xs font-semibold text-zinc-600 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:ring-zinc-700">
                      {entry.readTimeMin} min · PDF gratuit
                    </span>
                  </div>
                  <h2 className="mt-8 max-w-xl text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
                    {entry.cardTitle}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {entry.description}
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                    <strong className="text-zinc-700 dark:text-zinc-300">
                      Pour :
                    </strong>{" "}
                    {entry.audience}
                  </p>
                  <Link
                    href={entry.path}
                    className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                  >
                    Lire et utiliser la grille
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            ))}

            <div className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-zinc-900/30">
              <span className="flex size-11 items-center justify-center rounded-xl bg-white text-zinc-500 ring-1 ring-zinc-200 dark:bg-zinc-950 dark:ring-zinc-800">
                <FileText className="size-5" aria-hidden="true" />
              </span>
              <h2 className="mt-8 text-xl font-semibold text-zinc-950 dark:text-white">
                Une ressource doit résoudre une décision complète.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Nous ajoutons un livre blanc lorsqu&apos;il peut fournir une
                méthode, un modèle et un exemple honnête — pas pour afficher un
                compteur de téléchargements.
              </p>
              <Link
                href="/guides"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-700 hover:text-violet-900 dark:text-violet-300 dark:hover:text-violet-200"
              >
                Parcourir les guides chiffrés
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </GuidesShell>
  );
}
