import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowRight,
  Check,
  ChevronRight,
  CircleCheck,
  FileCheck2,
  FileText,
  ListChecks,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";
import { GuideFAQSection } from "@/components/guides/guide-faq-section";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { ResourceDownloadCard } from "@/components/resources/ResourceDownloadCard";
import { TrackedDownloadLink } from "@/components/resources/TrackedDownloadLink";
import { SITE_CDC_KIT, resourceKitUrl } from "@/lib/resources";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const resource = SITE_CDC_KIT;
const pageUrl = resourceKitUrl(resource);

export const metadata: Metadata = {
  title: "Kit cahier des charges site internet · Word et Excel gratuits",
  description:
    "Téléchargez sans email un modèle Word en 18 rubriques, un exemple rempli, une grille Excel de 56 tests et un mode d'emploi pour cadrer votre site.",
  authors: [{ name: "Quentin Hagnéré" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  alternates: { canonical: resource.path },
  openGraph: {
    ...OG_BASE,
    title: "Kit cahier des charges de site internet · 4 fichiers gratuits",
    description:
      "Modèle Word, exemple rempli, grille de recette Excel et mode d'emploi. Téléchargement direct, sans formulaire ni email.",
    url: resource.path,
    images: [
      {
        url: resource.socialImage.href,
        width: resource.socialImage.width,
        height: resource.socialImage.height,
        alt: resource.socialImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kit cahier des charges de site internet · 4 fichiers gratuits",
    description:
      "Modèle Word, exemple rempli, grille de recette Excel et mode d'emploi. Téléchargement direct, sans email.",
    images: [resource.socialImage.href],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const faqItems = [
  {
    question: "Que contient le kit cahier des charges de site internet ?",
    answer:
      "Le kit réunit quatre fichiers : un modèle Word éditable en 18 rubriques, un exemple fictif entièrement rempli en PDF, une grille de recette Excel avec 56 tests préremplis et 12 lignes libres, ainsi qu'un mode d'emploi PDF de quatre pages. L'archive ZIP contient ces quatre documents, qui restent aussi téléchargeables séparément.",
  },
  {
    question: "Le téléchargement est-il vraiment gratuit et sans email ?",
    answer:
      "Oui. Aucun formulaire, compte ou email n'est demandé : les liens déclenchent directement le téléchargement des fichiers. Hagnéré Code ne promet toutefois pas que le kit suffira à lui seul pour tous les projets ; il sert de base de cadrage à adapter à votre contexte.",
  },
  {
    question: "Puis-je modifier le modèle Word et partager le kit ?",
    answer:
      "Vous pouvez utiliser et modifier les fichiers pour vos propres projets, puis les partager en interne ou avec les prestataires que vous consultez. La revente et la republication du kit comme ressource autonome ne sont pas autorisées. Le mode d'emploi rappelle ces conditions.",
  },
  {
    question: "Le kit convient-il à une refonte ou à un site e-commerce ?",
    answer:
      "Oui comme trame de départ. Pour une refonte, complétez notamment l'inventaire des URL, les redirections et la reprise des contenus. Pour un e-commerce, détaillez catalogue, paiement, livraison, retours, comptes clients et outils connectés. Les rubriques inutiles peuvent être supprimées ; les inconnues doivent rester marquées à confirmer.",
  },
  {
    question: "Avec quels logiciels ouvrir les fichiers Word et Excel ?",
    answer:
      "Les fichiers DOCX et XLSX ont été vérifiés avec LibreOffice et utilisent les formats OOXML destinés aux versions récentes de Microsoft Word et Excel. Les deux PDF s'ouvrent avec un lecteur PDF courant. Selon le logiciel utilisé, de légères différences de mise en page peuvent apparaître.",
  },
  {
    question:
      "Le cahier des charges remplace-t-il un contrat ou un audit juridique ?",
    answer:
      "Non. Le kit aide à exprimer un besoin, comparer des réponses et préparer la recette. Il ne remplace ni le devis détaillé, ni le contrat et son ordre de priorité des documents, ni un audit de conformité, de sécurité ou un conseil juridique adapté à votre activité.",
  },
];

const mimeTypes = {
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  pdf: "application/pdf",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
} as const;

const webPageJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: "Kit cahier des charges de site internet",
  description:
    "Un kit gratuit avec modèle Word, exemple rempli, grille de recette Excel et mode d'emploi.",
  inLanguage: "fr-FR",
  datePublished: resource.publishedAt,
  dateModified: resource.updatedAt,
  isPartOf: {
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/ressources#webpage`,
    url: `${SITE_URL}/ressources`,
    name: "Ressources web gratuites Hagnéré Code",
  },
  about: [
    { "@type": "Thing", name: "Cahier des charges de site internet" },
    { "@type": "Thing", name: "Cadrage de projet web" },
    { "@type": "Thing", name: "Recette de site internet" },
    { "@type": "Thing", name: "Comparaison de devis web" },
  ],
  author: {
    "@type": "Person",
    name: "Quentin Hagnéré",
    url: `${SITE_URL}/equipe`,
  },
  publisher: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
  mainEntity: {
    "@type": "CreativeWork",
    "@id": `${pageUrl}#kit`,
    name: resource.cardTitle,
    description: resource.description,
    url: pageUrl,
    version: resource.version,
    datePublished: resource.publishedAt,
    dateModified: resource.updatedAt,
    inLanguage: "fr-FR",
    isAccessibleForFree: true,
    audience: { "@type": "Audience", audienceType: resource.audience },
    creator: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "DownloadAction",
      target: `${SITE_URL}${resource.primary.href}`,
    },
    hasPart: resource.files.map((file) => ({
      "@type": "DigitalDocument",
      name: file.label,
      description: file.description,
      encodingFormat: mimeTypes[file.format as keyof typeof mimeTypes],
      contentUrl: `${SITE_URL}${file.href}`,
      isAccessibleForFree: true,
    })),
  },
});

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
      name: "Kit cahier des charges de site internet",
      item: pageUrl,
    },
  ],
});

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});

const deliverables = [
  {
    fileId: "modele_word",
    eyebrow: "Document de travail",
    image: "/images/ressources/kit-cahier-des-charges/apercu-modele-word.webp",
    imageAlt: "Première page du modèle Word de cahier des charges",
    width: 720,
    height: 1018,
    detail: "18 rubriques guidées",
    use: "Pour écrire le besoin, les exclusions, les responsabilités et les preuves attendues sans devoir inventer une structure.",
  },
  {
    fileId: "exemple_rempli",
    eyebrow: "Niveau de précision",
    image:
      "/images/ressources/kit-cahier-des-charges/apercu-exemple-rempli.webp",
    imageAlt: "Première page de l'exemple fictif de cahier des charges rempli",
    width: 720,
    height: 1018,
    detail: "Cas PME B2B fictif",
    use: "Pour voir comment transformer une intention vague en exigences lisibles, hypothèses explicites et décisions à valider.",
  },
  {
    fileId: "grille_recette",
    eyebrow: "Contrôle avant livraison",
    image:
      "/images/ressources/kit-cahier-des-charges/apercu-grille-recette.webp",
    imageAlt: "Aperçu de la grille Excel de recette du site internet",
    width: 1200,
    height: 319,
    detail: "56 tests + 12 lignes libres",
    use: "Pour préparer les vérifications avant le développement, consigner les preuves, suivre les anomalies et organiser les retests.",
  },
  {
    fileId: "mode_emploi",
    eyebrow: "Prise en main",
    image: "/images/ressources/kit-cahier-des-charges/apercu-mode-emploi.webp",
    imageAlt: "Première page du mode d'emploi du kit cahier des charges",
    width: 720,
    height: 1018,
    detail: "4 pages, parcours progressif",
    use: "Pour savoir quoi compléter en priorité, quelles rubriques retirer et comment partager les documents sans données sensibles.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Définissez le résultat attendu",
    text: "Commencez par le problème métier, les utilisateurs et les indicateurs utiles. La solution technique vient ensuite.",
  },
  {
    number: "02",
    title: "Séparez essentiel, optionnel et hors périmètre",
    text: "Cette distinction rend les devis comparables et évite que chaque candidat chiffre un projet différent.",
  },
  {
    number: "03",
    title: "Demandez une réponse vérifiable",
    text: "Pour chaque point important, exigez une hypothèse, une exclusion, un livrable ou une preuve plutôt qu'une simple promesse.",
  },
  {
    number: "04",
    title: "Préparez la recette avant de signer",
    text: "Les critères de validation écrits tôt clarifient ce qui sera contrôlé, par qui et avec quelles preuves au moment de la livraison.",
  },
];

export default function Page() {
  const primary = resource.primary;

  return (
    <GuidesShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: webPageJsonLd.replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd.replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJsonLd.replace(/</g, "\\u003c") }}
      />

      <section className="relative overflow-hidden bg-zinc-950 py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(109,40,217,0.24),transparent_58%)]" />
        <div className="absolute -bottom-32 -left-24 size-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <nav
            aria-label="Fil d'Ariane"
            className="mb-7 flex min-w-0 items-center gap-2 text-sm text-zinc-400"
          >
            <Link
              href="/"
              className="min-h-11 shrink-0 py-3 hover:text-zinc-300"
            >
              Accueil
            </Link>
            <ChevronRight className="size-3 shrink-0" aria-hidden="true" />
            <Link
              href="/ressources"
              className="min-h-11 shrink-0 py-3 hover:text-zinc-300"
            >
              Ressources
            </Link>
            <ChevronRight
              className="hidden size-3 shrink-0 sm:block"
              aria-hidden="true"
            />
            <span className="hidden truncate font-medium text-zinc-200 sm:block">
              Kit cahier des charges
            </span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-violet-300 ring-1 ring-violet-400/30">
                  Kit pratique gratuit
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-300 ring-1 ring-white/10">
                  Version {resource.version} · {resource.updatedLabel}
                </span>
              </div>
              <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.45rem] lg:leading-[1.05]">
                Un kit de cahier des charges pour cadrer votre site sans jargon.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
                Partez d&apos;un modèle Word structuré, observez un exemple
                rempli, puis préparez la recette dans Excel. Quatre fichiers
                cohérents, conçus pour rendre votre besoin comparable avant de
                demander des devis.
              </p>
              <ul className="mt-6 grid gap-2 text-sm text-zinc-300 sm:grid-cols-2">
                {[
                  "18 rubriques guidées",
                  "Exemple fictif complet",
                  "56 tests préremplis",
                  "Aucun formulaire ni email",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check
                      className="size-4 shrink-0 text-emerald-400"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <TrackedDownloadLink
                  href={primary.href}
                  downloadName={primary.downloadName}
                  resourceId={resource.id}
                  guideSlug={resource.guideSlug}
                  fileId={primary.id}
                  format={primary.format}
                  placement="resource_landing_hero"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-violet-950/30 transition-colors hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:w-fit"
                >
                  <ArrowDownToLine className="size-4" aria-hidden="true" />
                  Télécharger les 4 fichiers
                  <span className="text-xs font-normal text-violet-100">
                    ZIP · {primary.sizeLabel}
                  </span>
                </TrackedDownloadLink>
                <a
                  href="#contenu-du-kit"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 sm:w-fit"
                >
                  Examiner les fichiers
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-zinc-400">
                Téléchargement direct. Aucun compte créé, aucune adresse email
                demandée.
              </p>
              <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                Conçu et vérifié par{" "}
                <Link
                  href="/equipe"
                  className="font-semibold text-zinc-200 underline decoration-zinc-600 underline-offset-4 hover:text-white"
                >
                  Quentin Hagnéré
                </Link>
                . Pour les dirigeants, indépendants et responsables de projet
                qui préparent une création ou une refonte de site.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute inset-10 rounded-full bg-violet-500/20 blur-3xl" />
              <div className="relative grid grid-cols-2 items-end gap-3 sm:gap-5">
                <div className="rotate-[-2deg] overflow-hidden rounded-xl border border-white/15 bg-white p-1.5 shadow-2xl sm:rounded-2xl sm:p-2">
                  <Image
                    src="/images/ressources/kit-cahier-des-charges/apercu-modele-word.webp"
                    alt="Aperçu réel du modèle Word inclus dans le kit"
                    width={720}
                    height={1018}
                    sizes="(min-width: 1024px) 20vw, 43vw"
                    className="h-auto w-full rounded-lg sm:rounded-xl"
                    priority
                  />
                </div>
                <div className="translate-y-5 rotate-[2deg] overflow-hidden rounded-xl border border-white/15 bg-white p-1.5 shadow-2xl sm:rounded-2xl sm:p-2">
                  <Image
                    src="/images/ressources/kit-cahier-des-charges/apercu-exemple-rempli.webp"
                    alt="Aperçu réel de l'exemple fictif rempli inclus dans le kit"
                    width={720}
                    height={1018}
                    sizes="(min-width: 1024px) 20vw, 43vw"
                    className="h-auto w-full rounded-lg sm:rounded-xl"
                  />
                </div>
              </div>
              <div className="relative mt-8 overflow-hidden rounded-xl border border-white/15 bg-white p-1.5 shadow-2xl sm:p-2">
                <Image
                  src="/images/ressources/kit-cahier-des-charges/apercu-grille-recette.webp"
                  alt="Aperçu réel de la grille Excel de recette incluse dans le kit"
                  width={1200}
                  height={319}
                  sizes="(min-width: 1024px) 40vw, 92vw"
                  className="h-auto w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-white py-10 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-3">
          {[
            {
              icon: SearchCheck,
              title: "Des devis comparables",
              text: "Vous demandez aux candidats de répondre sur le même périmètre, avec des exclusions et des responsabilités visibles.",
            },
            {
              icon: ShieldCheck,
              title: "Moins d'angles morts",
              text: "Le modèle vous aide à rendre visibles les contenus, comptes, données, sujets SEO, conditions d'exploitation et de sortie.",
            },
            {
              icon: FileCheck2,
              title: "Une recette préparée tôt",
              text: "Les tests et les preuves attendues sont définis avant que le développement ne rende les changements coûteux.",
            },
          ].map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article
                key={benefit.title}
                className="flex items-start gap-4 rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-base font-bold text-zinc-950 dark:text-white">
                    {benefit.title}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {benefit.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section
        id="contenu-du-kit"
        className="scroll-mt-24 bg-zinc-50 py-12 sm:py-16 dark:bg-zinc-900"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-violet-700 dark:text-violet-300">
              À l&apos;intérieur du kit
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
              Quatre fichiers, chacun avec un rôle précis.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Le modèle sert à écrire, l&apos;exemple à calibrer le niveau de
              détail, la grille à contrôler et le mode d&apos;emploi à avancer
              dans le bon ordre.
            </p>
          </div>

          <div className="mt-9 grid gap-6 lg:grid-cols-2">
            {deliverables.map((deliverable) => {
              const file = resource.files.find(
                ({ id }) => id === deliverable.fileId,
              );
              if (!file) return null;
              return (
                <article
                  key={deliverable.fileId}
                  className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <div className="flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-violet-50 to-blue-50 p-5 dark:from-violet-950/30 dark:to-blue-950/20">
                    <Image
                      src={deliverable.image}
                      alt={deliverable.imageAlt}
                      width={deliverable.width}
                      height={deliverable.height}
                      sizes={
                        deliverable.fileId === "grille_recette"
                          ? "(min-width: 1024px) 42vw, 90vw"
                          : "(min-width: 1024px) 260px, (min-width: 640px) 35vw, 70vw"
                      }
                      className={`max-h-full w-auto max-w-full rounded-lg border border-zinc-200 bg-white shadow-lg ${deliverable.fileId === "grille_recette" ? "h-auto w-full" : "h-full object-contain"}`}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-zinc-600 dark:text-zinc-400">
                        {deliverable.eyebrow}
                      </p>
                      <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300">
                        {file.formatLabel} · {file.sizeLabel}
                      </span>
                    </div>
                    <h3 className="mt-3 text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
                      {file.label}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-violet-700 dark:text-violet-300">
                      {deliverable.detail}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {deliverable.use}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 dark:bg-zinc-950">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">
              Mode d&apos;utilisation
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
              Un parcours court avant d&apos;envoyer votre consultation.
            </h2>
          </div>
          <ol className="mt-9 grid gap-4 md:grid-cols-2">
            {workflow.map((step) => (
              <li
                key={step.number}
                className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-zinc-950 text-sm font-bold text-white dark:bg-white dark:text-zinc-950">
                    {step.number}
                  </span>
                  <h3 className="text-base font-bold text-zinc-950 dark:text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50 py-12 sm:py-16 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8 dark:border-emerald-900 dark:bg-emerald-950/30">
            <CircleCheck
              className="size-7 text-emerald-700 dark:text-emerald-300"
              aria-hidden="true"
            />
            <h2 className="mt-4 text-xl font-bold text-zinc-950 dark:text-white">
              Ce que le kit vous aide réellement à faire
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {[
                "Rendre vos priorités et vos exclusions explicites.",
                "Poser les mêmes questions à plusieurs prestataires.",
                "Tracer les hypothèses, responsabilités et preuves attendues.",
                "Préparer la validation du site avant la livraison.",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-emerald-700 dark:text-emerald-300"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-950">
            <ListChecks className="size-7 text-zinc-500" aria-hidden="true" />
            <h2 className="mt-4 text-xl font-bold text-zinc-950 dark:text-white">
              Ce qu&apos;il ne peut pas décider à votre place
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {[
                "Votre budget réaliste et vos arbitrages métier.",
                "L'architecture technique adaptée à vos contraintes.",
                "Les clauses du contrat et la conformité propre à votre activité.",
                "La qualité d'un prestataire sans vérifier ses réponses et ses preuves.",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-400"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-14 dark:bg-zinc-950">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-blue-50 p-6 sm:p-8 dark:border-violet-900 dark:from-violet-950/40 dark:via-zinc-950 dark:to-blue-950/30">
            <div className="flex size-11 items-center justify-center rounded-xl bg-violet-700 text-white">
              <FileText className="size-5" aria-hidden="true" />
            </div>
            <h2 className="mt-5 text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl dark:text-white">
              Besoin de comprendre pourquoi chaque rubrique compte ?
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
              La page que vous lisez sert à examiner et télécharger les
              fichiers. Le guide associé explique comment rédiger chaque partie,
              éviter les formulations floues et adapter le cahier des charges à
              une création ou une refonte.
            </p>
            <Link
              href="/guides/cahier-des-charges-site-internet"
              className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-violet-700 hover:text-violet-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:text-violet-300 dark:hover:text-violet-200"
            >
              Lire le guide complet
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white pb-4 dark:bg-zinc-950">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                <ShieldCheck className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-zinc-600 dark:text-zinc-400">
                  Contrôles effectués
                </p>
                <h2 className="mt-1 text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
                  Des fichiers vérifiés, avec des limites documentées.
                </h2>
              </div>
            </div>
            <ul className="mt-6 grid gap-3 text-sm leading-relaxed text-zinc-700 md:grid-cols-3 dark:text-zinc-300">
              {[
                "13 scénarios de décision recalculés sous LibreOffice dans la grille Excel.",
                "Rendu du DOCX et 21 pages PDF inspectés ; audit documentaire sans constat bloquant.",
                "Archive contrôlée : 4 fichiers, identiques octet par octet aux téléchargements séparés.",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-emerald-700 dark:text-emerald-300"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
              Ces contrôles ne constituent ni une certification
              d&apos;accessibilité, ni un test natif sur toutes les versions de
              Microsoft Word et Excel. Les formats OOXML visent leurs versions
              récentes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white pb-10 dark:bg-zinc-950">
        <div className="mx-auto max-w-5xl px-4">
          <ResourceDownloadCard
            resource={resource}
            placement="resource_landing_downloads"
          />
        </div>
      </section>

      <GuideFAQSection
        title="Questions avant de télécharger le kit"
        items={faqItems}
      />

      <section className="bg-zinc-950 py-12 text-white sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-violet-400">
              Après le cadrage
            </p>
            <h2 className="mt-2 max-w-3xl text-2xl font-bold tracking-tight sm:text-3xl">
              Vous avez rempli le kit et voulez confronter le périmètre à un
              développeur ?
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              Décrivez le contexte, les utilisateurs et les contraintes déjà
              identifiées. Vous recevrez une réponse personnelle sous 24 heures
              ouvrées — pas une estimation automatique présentée comme un devis.
            </p>
          </div>
          <Link
            href="/demarrer-un-projet"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 sm:w-fit"
          >
            Décrire mon projet
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </GuidesShell>
  );
}
