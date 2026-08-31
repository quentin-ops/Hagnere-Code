import type { Metadata } from "next";
import { EDITORIAL_SERVICE_ROUTES } from "@/lib/editorial-service-bridge";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight, FileText, Sheet } from "lucide-react";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { DEFAULT_OG_IMAGE, OG_BASE, SITE_URL } from "@/lib/seo";
import { WHITE_PAPERS, whitePaperUrl } from "@/lib/white-papers";
import { PUBLIC_ORGANIZATION_ENTITY } from "@/lib/organization-structured-data";

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
  // Entité complète plutôt qu'un @id nu : Google ne résout un @id que dans
  // le graphe de la page courante, et le nœud réduit se lisait comme un
  // éditeur anonyme.
  author: PUBLIC_ORGANIZATION_ENTITY,
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
          {/* `text-zinc-500` sur le fond #09090b du héros ne mesure que
              4,15:1 — sous le 4,5:1 exigé pour du texte de 14 px (1.4.3).
              `text-zinc-400` monte à 7,8:1. Les liens sont par ailleurs
              étendus verticalement à 44 px de cible tactile par `py-3 -my-3`,
              qui n'ajoute rien à la hauteur du fil d'Ariane. */}
          <nav
            aria-label="Fil d'Ariane"
            className="mb-8 flex items-center gap-2 text-sm text-zinc-400"
          >
            <Link
              href="/"
              className="-my-3 inline-flex items-center py-3 hover:text-white"
            >
              Accueil
            </Link>
            <ChevronRight className="size-3" aria-hidden="true" />
            <Link
              href="/ressources"
              className="-my-3 inline-flex items-center py-3 hover:text-white"
            >
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
            {/* Le héros n'offrait aucune action : sur un écran de 900 px, le
                premier lien cliquable de la page — le bouton de la fiche —
                tombait à 1014 px, donc sous la ligne de flottaison. */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#bibliotheque"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
              >
                {WHITE_PAPERS.length > 1
                  ? `Voir les ${WHITE_PAPERS.length} ressources`
                  : "Voir la ressource disponible"}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/guides"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
              >
                Parcourir les guides chiffrés
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="bibliotheque"
        className="scroll-mt-24 bg-white py-12 sm:py-16 dark:bg-zinc-950"
      >
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
            {/* `shrink-0 whitespace-nowrap` : à 390 px le compteur se coupait
                en « 1 » / « ressource » sur deux lignes. */}
            <span className="shrink-0 whitespace-nowrap text-sm text-zinc-500 dark:text-zinc-400">
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
                  {/* h3 et non h2 : la fiche est un enfant de « Les ressources
                      disponibles ». Au même niveau, un lecteur d'écran
                      annonçait une nouvelle section de page. */}
                  <h3 className="mt-8 max-w-xl text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
                    {entry.cardTitle}
                  </h3>
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
              <h3 className="mt-8 text-xl font-semibold text-zinc-950 dark:text-white">
                Une ressource doit résoudre une décision complète.
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Nous ajoutons un livre blanc lorsqu&apos;il peut fournir une
                méthode, un modèle et un exemple honnête — pas pour afficher un
                compteur de téléchargements.
              </p>
              <Link
                href="/guides"
                className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-violet-700 hover:text-violet-900 dark:text-violet-300 dark:hover:text-violet-200"
              >
                Parcourir les guides chiffrés
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Le hub ne pointait que vers /ressources, /guides et la fiche du livre
          blanc : aucun service, aucun accès au tunnel. Un visiteur qui vient
          d'outiller sa décision n'avait donc aucune étape suivante. */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-12 sm:py-16 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">
              Une fois la décision documentée
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl dark:text-white">
              À quel type de projet cela mène.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
              Ces pages décrivent ce que nous construisons, avec les périmètres
              et les repères de budget correspondants. Les montants publiés y
              sont indicatifs et hors taxes ; le devis signé après cadrage fixe
              le prix ferme.
            </p>
          </div>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {EDITORIAL_SERVICE_ROUTES.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="flex min-h-11 items-center justify-between gap-4 rounded-xl border border-zinc-200 bg-white px-4 py-3 transition-colors hover:border-violet-300 hover:bg-violet-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-violet-800 dark:hover:bg-violet-950/30"
                >
                  {/* Le sous-titre manquait ici seulement : le même bloc affiche
                      « Site public à construire ou à refondre » sur /ressources et
                      /guides, et rien sur cette page. La donnée le porte déjà. */}
                  <span>
                    <span className="block text-sm font-semibold text-zinc-950 dark:text-white">
                      {service.label}
                    </span>
                    <span className="block text-xs text-zinc-600 dark:text-zinc-400">
                      {service.hint}
                    </span>
                  </span>
                  <ArrowRight
                    className="size-4 shrink-0 text-violet-700 dark:text-violet-300"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
          {/* Le tunnel était la seule sortie de la page. Un lecteur qui vient
              d'outiller une comparaison de devis n'est pas forcément prêt à
              cadrer un projet : la porte courte — le formulaire de contact —
              lui manquait. */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/demarrer-un-projet"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 sm:w-fit dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              Démarrer mon projet en 3 minutes
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:border-zinc-400 hover:bg-zinc-100 sm:w-fit dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:hover:border-zinc-500 dark:hover:bg-zinc-900"
            >
              Poser une question d&apos;abord
            </Link>
          </div>
        </div>
      </section>
    </GuidesShell>
  );
}
