import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  Check,
  ChevronRight,
  FileText,
  PackageOpen,
  Sheet,
} from "lucide-react";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { APP_CDC_KIT, SITE_CDC_KIT, resourceKitUrl } from "@/lib/resources";
import { DEFAULT_OG_IMAGE, OG_BASE, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Ressources web gratuites · Kits, guides et outils pratiques",
  description:
    "Kits, modèles, grilles, guides et outils gratuits pour cadrer un site internet, comparer des devis et décider avec des éléments vérifiables.",
  authors: [{ name: "Hagnéré Code" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  alternates: { canonical: "/ressources" },
  openGraph: {
    ...OG_BASE,
    title: "Ressources web gratuites · Hagnéré Code",
    description:
      "Des kits, modèles, grilles et guides conçus pour préparer une décision web concrète.",
    url: "/ressources",
    images: [DEFAULT_OG_IMAGE],
  },
};

const resources = [
  {
    name: SITE_CDC_KIT.cardTitle,
    url: resourceKitUrl(SITE_CDC_KIT),
  },
  {
    name: APP_CDC_KIT.cardTitle,
    url: resourceKitUrl(APP_CDC_KIT),
  },
  {
    name: "Livres blancs Hagnéré Code",
    url: `${SITE_URL}/livres-blancs`,
  },
  { name: "Guides web Hagnéré Code", url: `${SITE_URL}/guides` },
  {
    name: "Calculateur du coût réel d'Excel",
    url: `${SITE_URL}/outils/calculateur-cout-excel`,
  },
];

const featuredKits = [
  {
    resource: SITE_CDC_KIT,
    format: "Word + PDF + Excel",
    description:
      "Un modèle Word en 18 rubriques, un exemple fictif entièrement rempli, une grille Excel de 56 tests et un mode d'emploi court.",
    modelImage:
      "/images/ressources/kit-cahier-des-charges/apercu-modele-word.webp",
    modelAlt: "Aperçu du modèle Word du cahier des charges de site internet",
    exampleImage:
      "/images/ressources/kit-cahier-des-charges/apercu-exemple-rempli.webp",
    exampleAlt:
      "Aperçu de l'exemple fictif de cahier des charges de site rempli",
    imageHeight: 1018,
  },
  {
    resource: APP_CDC_KIT,
    format: "Word + PDF",
    description:
      "Un modèle Word en 14 rubriques, un exemple fictif rempli et un mode d'emploi sourcé pour comparer logiciel existant, ERP et sur mesure.",
    modelImage:
      "/images/ressources/kit-cahier-des-charges-application-metier/apercu-modele-cahier-des-charges-application-metier.webp",
    modelAlt:
      "Aperçu du modèle Word du cahier des charges d'une application métier",
    exampleImage:
      "/images/ressources/kit-cahier-des-charges-application-metier/apercu-exemple-rempli-cahier-des-charges-application-metier.webp",
    exampleAlt:
      "Aperçu de l'exemple fictif de cahier des charges d'une application métier",
    imageHeight: 1018,
  },
];

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
  ],
});

const collectionJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/ressources#webpage`,
  name: "Ressources web gratuites Hagnéré Code",
  description:
    "Des kits, modèles, grilles, guides et outils pour cadrer et comparer un projet web.",
  url: `${SITE_URL}/ressources`,
  inLanguage: "fr-FR",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  author: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: resources.length,
    itemListElement: resources.map((resource, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: resource.name,
      url: resource.url,
    })),
  },
});

const secondaryResources = [
  {
    href: "/guides",
    eyebrow: "Comprendre",
    title: "Guides web",
    description:
      "Budgets, choix techniques, SEO et cadrage expliqués avec des fourchettes, des comparaisons et des limites explicites.",
    cta: "Parcourir les guides",
    icon: BookOpen,
  },
  {
    href: "/livres-blancs",
    eyebrow: "Comparer",
    title: "Livres blancs",
    description:
      "Des méthodes longues accompagnées de grilles et d'exemples pour documenter une décision plutôt que la prendre au ressenti.",
    cta: "Voir les livres blancs",
    icon: Sheet,
  },
  {
    href: "/outils/calculateur-cout-excel",
    eyebrow: "Calculer",
    title: "Outils interactifs",
    description:
      "Estimez ce que vos fichiers Excel et vos tâches manuelles coûtent réellement en temps, en erreurs et en opportunités perdues.",
    cta: "Ouvrir le calculateur",
    icon: Calculator,
  },
];

export default function Page() {
  return (
    <GuidesShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd.replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: collectionJsonLd.replace(/</g, "\\u003c"),
        }}
      />

      <section className="relative overflow-hidden bg-zinc-950 py-14 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(109,40,217,0.2),transparent_58%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <nav
            aria-label="Fil d'Ariane"
            className="mb-8 flex items-center gap-2 text-sm text-zinc-400"
          >
            <Link href="/" className="min-h-11 py-3 hover:text-zinc-300">
              Accueil
            </Link>
            <ChevronRight className="size-3" aria-hidden="true" />
            <span className="font-medium text-zinc-200">Ressources</span>
          </nav>
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-violet-400">
              Bibliothèque pratique
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Des ressources web faites pour décider, pas pour remplir une boîte
              mail.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Modèles éditables, exemples remplis, grilles de contrôle et guides
              détaillés : chaque ressource doit vous aider à cadrer une vraie
              décision de site, d&apos;application ou d&apos;outil métier.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-400">
              {[
                "Accès sans email",
                "Fichiers directement utilisables",
                "Limites expliquées",
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
          <div className="mb-7">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-violet-700 dark:text-violet-300">
              Kits pratiques
            </p>
            <h2 className="mt-2 max-w-3xl text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl dark:text-white">
              Partez d&apos;un cahier des charges déjà structuré, selon le
              projet à cadrer.
            </h2>
          </div>

          <div className="space-y-8">
            {featuredKits.map((kit) => (
              <article
                key={kit.resource.id}
                className="group grid overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 shadow-sm lg:grid-cols-[0.9fr_1.1fr] dark:border-zinc-800 dark:bg-zinc-900/50"
              >
                <div className="relative min-h-[300px] overflow-hidden bg-gradient-to-br from-violet-100 via-white to-blue-100 p-6 sm:p-10 dark:from-violet-950/60 dark:via-zinc-900 dark:to-blue-950/40">
                  <div className="absolute -right-16 -top-16 size-64 rounded-full bg-violet-300/30 blur-3xl dark:bg-violet-700/20" />
                  <div className="relative mx-auto grid max-w-lg grid-cols-2 items-end gap-4">
                    <div className="rotate-[-2deg] overflow-hidden rounded-xl border border-white/80 bg-white shadow-2xl">
                      <Image
                        src={kit.modelImage}
                        alt={kit.modelAlt}
                        width={720}
                        height={kit.imageHeight}
                        sizes="(min-width: 1024px) 18vw, 42vw"
                        className="h-auto w-full"
                      />
                    </div>
                    <div className="translate-y-5 rotate-[2deg] overflow-hidden rounded-xl border border-white/80 bg-white shadow-2xl">
                      <Image
                        src={kit.exampleImage}
                        alt={kit.exampleAlt}
                        width={720}
                        height={kit.imageHeight}
                        sizes="(min-width: 1024px) 18vw, 42vw"
                        className="h-auto w-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-6 sm:p-10">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      Gratuit · sans email
                    </span>
                    <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-zinc-600 ring-1 ring-zinc-200 dark:bg-zinc-950 dark:text-zinc-300 dark:ring-zinc-700">
                      {kit.format}
                    </span>
                  </div>
                  <div className="mt-6 flex size-11 items-center justify-center rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
                    <PackageOpen className="size-5" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
                    {kit.resource.cardTitle}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
                    {kit.description} Vous pouvez examiner chaque fichier avant
                    de le télécharger.
                  </p>
                  <p className="mt-4 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                    <strong className="text-zinc-700 dark:text-zinc-300">
                      Pour :
                    </strong>{" "}
                    {kit.resource.audience}
                  </p>
                  <Link
                    href={kit.resource.path}
                    className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-violet-700 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-violet-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 sm:w-fit dark:bg-violet-600 dark:hover:bg-violet-500"
                  >
                    Découvrir le kit et les fichiers
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50 py-12 sm:py-16 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">
              Choisir selon votre besoin
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl dark:text-white">
              Lire, comparer ou calculer : commencez par la décision à prendre.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {secondaryResources.map((resource) => {
              const Icon = resource.icon;
              return (
                <article
                  key={resource.href}
                  className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-zinc-600 dark:text-zinc-400">
                    {resource.eyebrow}
                  </p>
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
                    {resource.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {resource.description}
                  </p>
                  <Link
                    href={resource.href}
                    className="mt-auto inline-flex min-h-11 items-center gap-2 pt-5 text-sm font-semibold text-violet-700 hover:text-violet-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:text-violet-300 dark:hover:text-violet-200"
                  >
                    {resource.cta}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 dark:bg-zinc-950">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="flex size-11 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
              <FileText className="size-5" aria-hidden="true" />
            </div>
            <h2 className="mt-5 max-w-3xl text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl dark:text-white">
              Vous avez le besoin, mais pas encore le bon périmètre ?
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
              Utilisez d&apos;abord les ressources pour préciser vos priorités.
              Si vous voulez ensuite confronter ce cadrage à un développeur,
              nous pouvons relire le besoin avec vous sans transformer
              l&apos;échange en rendez-vous commercial générique.
            </p>
          </div>
          <Link
            href="/demarrer-un-projet"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 sm:w-fit dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Décrire mon projet
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </GuidesShell>
  );
}
