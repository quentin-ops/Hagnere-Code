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
  GitCompareArrows,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { GuideFAQSection } from "@/components/guides/guide-faq-section";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { ResourceDownloadCard } from "@/components/resources/ResourceDownloadCard";
import { TrackedDownloadLink } from "@/components/resources/TrackedDownloadLink";
import { APP_CDC_KIT, resourceKitUrl } from "@/lib/resources";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const resource = APP_CDC_KIT;
const pageUrl = resourceKitUrl(resource);

export const metadata: Metadata = {
  title: "Modèle de cahier des charges application métier · Kit gratuit",
  description:
    "Téléchargez sans email un modèle Word, un exemple rempli et un mode d'emploi pour cadrer, comparer et recetter une application métier.",
  authors: [{ name: "Quentin Hagnéré" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  alternates: { canonical: resource.path },
  openGraph: {
    ...OG_BASE,
    title: "Kit cahier des charges d'une application métier",
    description:
      "Modèle Word, exemple fictif rempli et mode d'emploi. Téléchargement direct, gratuit et sans formulaire.",
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
    title: "Kit cahier des charges d'une application métier",
    description:
      "Trois fichiers gratuits pour cadrer un outil interne et comparer les solutions.",
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
    question: "Que contient le kit pour application métier ?",
    answer:
      "Le kit réunit trois fichiers : un modèle Word éditable en 14 rubriques avec six matrices opérationnelles, un exemple fictif entièrement rempli en PDF et un mode d'emploi PDF avec les sources de méthode. L'archive ZIP contient exactement ces trois documents, également proposés séparément.",
  },
  {
    question: "Le téléchargement est-il gratuit et sans email ?",
    answer:
      "Oui. Le téléchargement est direct : aucun formulaire, compte ou email n'est demandé. Le kit peut être utilisé et adapté pour vos propres projets, puis partagé avec vos équipes ou les prestataires consultés.",
  },
  {
    question: "Le modèle oblige-t-il à développer un logiciel sur mesure ?",
    answer:
      "Non. Il commence par le problème, les scénarios critiques et le résultat attendu. Une conclusion valable peut être de conserver l'outil actuel, d'acheter un logiciel existant, de configurer un ERP ou de développer seulement la partie réellement spécifique.",
  },
  {
    question: "Puis-je l'utiliser pour remplacer un fichier Excel ?",
    answer:
      "Oui. Le modèle prévoit le processus actuel, les règles cachées, la qualité des données, les doublons, la reprise d'historique, les intégrations et les critères de recette. Il faut toutefois mesurer votre situation réelle : l'exemple fourni n'est pas une estimation de votre projet.",
  },
  {
    question: "Avec quel logiciel ouvrir le modèle ?",
    answer:
      "Le fichier DOCX a été généré et vérifié avec LibreOffice et utilise le format OOXML destiné aux versions récentes de Microsoft Word. Les deux PDF s'ouvrent dans un lecteur courant. De légères différences de mise en page restent possibles selon le logiciel.",
  },
  {
    question: "Le kit remplace-t-il un contrat ou un audit RGPD ?",
    answer:
      "Non. Il aide à poser des questions vérifiables sur les données, les accès, les sauvegardes, les incidents et la réversibilité. Il ne constitue ni un audit de sécurité, ni une analyse d'impact, ni un conseil juridique, social, fiscal ou sectoriel adapté à votre activité.",
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
  name: resource.cardTitle,
  description: resource.description,
  inLanguage: "fr-FR",
  datePublished: resource.publishedAt,
  dateModified: resource.updatedAt,
  isPartOf: {
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/ressources#webpage`,
    url: `${SITE_URL}/ressources`,
    name: "Ressources gratuites Hagnéré Code",
  },
  about: [
    { "@type": "Thing", name: "Cahier des charges d'application métier" },
    { "@type": "Thing", name: "Logiciel métier" },
    { "@type": "Thing", name: "Recette logicielle" },
    { "@type": "Thing", name: "Réversibilité des données" },
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
      name: resource.cardTitle,
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

const workflow = [
  {
    number: "01",
    title: "Décrivez le travail réel",
    text: "Notez le déclencheur, les acteurs, les étapes, les exceptions, les volumes et les contournements actuels avant de parler d'écrans.",
  },
  {
    number: "02",
    title: "Transformez les usages en scénarios",
    text: "Un scénario précise une situation, une action, un résultat observable et le comportement attendu en cas d'échec.",
  },
  {
    number: "03",
    title: "Arbitrez la première version",
    text: "Séparez l'indispensable, la suite et le hors périmètre. Conservez un critère permettant de ne pas développer si une solution existante suffit.",
  },
  {
    number: "04",
    title: "Comparez sur le même horizon",
    text: "Demandez coûts initiaux, récurrents et internes, puis les preuves de recette, de sécurité, de migration et de réversibilité.",
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
        <div className="absolute -bottom-36 -left-20 size-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <nav
            aria-label="Fil d'Ariane"
            className="mb-7 flex min-w-0 items-center gap-2 text-sm text-zinc-400"
          >
            <Link
              href="/"
              className="min-h-11 shrink-0 py-3 hover:text-zinc-200"
            >
              Accueil
            </Link>
            <ChevronRight className="size-3 shrink-0" aria-hidden="true" />
            <Link
              href="/ressources"
              className="min-h-11 shrink-0 py-3 hover:text-zinc-200"
            >
              Ressources
            </Link>
            <ChevronRight
              className="hidden size-3 shrink-0 sm:block"
              aria-hidden="true"
            />
            <span className="hidden truncate font-medium text-zinc-200 sm:block">
              Kit application métier
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
              <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.35rem] lg:leading-[1.06]">
                Modèle Word de cahier des charges d&apos;application métier,
                avec exemple PDF.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
                Décrivez le processus, rendez les règles et les données
                visibles, puis comparez logiciel existant, configuration et sur
                mesure sur un même périmètre.
              </p>
              <ul className="mt-6 grid gap-2 text-sm text-zinc-300 sm:grid-cols-2">
                {[
                  "14 rubriques guidées",
                  "6 matrices éditables",
                  "Exemple fictif complet",
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
                  Télécharger les 3 fichiers
                  <span className="text-xs font-normal text-violet-100">
                    ZIP · {primary.sizeLabel}
                  </span>
                </TrackedDownloadLink>
                <Link
                  href="/guides/cahier-des-charges-application-metier"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 sm:w-fit"
                >
                  Lire la méthode complète
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-zinc-400">
                Téléchargement direct. Aucun compte créé, aucune adresse email
                demandée.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute inset-10 rounded-full bg-violet-500/20 blur-3xl" />
              <div className="relative grid grid-cols-2 items-end gap-3 sm:gap-5">
                <div className="rotate-[-2deg] overflow-hidden rounded-xl border border-white/15 bg-white p-1.5 shadow-2xl sm:rounded-2xl sm:p-2">
                  <Image
                    src="/images/ressources/kit-cahier-des-charges-application-metier/apercu-modele-cahier-des-charges-application-metier.webp"
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
                    src="/images/ressources/kit-cahier-des-charges-application-metier/apercu-exemple-rempli-cahier-des-charges-application-metier.webp"
                    alt="Aperçu réel de l'exemple fictif rempli inclus dans le kit"
                    width={720}
                    height={1018}
                    sizes="(min-width: 1024px) 20vw, 43vw"
                    className="h-auto w-full rounded-lg sm:rounded-xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-white py-10 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-3">
          {[
            {
              icon: GitCompareArrows,
              title: "Des offres comparables",
              text: "Chaque candidat répond au même besoin, aux mêmes scénarios et aux mêmes exclusions, avec ses hypothèses visibles.",
            },
            {
              icon: FileCheck2,
              title: "Une livraison vérifiable",
              text: "Les scénarios critiques deviennent des tests de recette avec un résultat, une preuve et une personne qui accepte.",
            },
            {
              icon: ShieldCheck,
              title: "Une sortie préparée",
              text: "Données, code, comptes, documentation et formats de restitution sont traités avant qu'un changement de prestataire devienne urgent.",
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
        <div className="mx-auto max-w-5xl px-4">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-violet-700 dark:text-violet-300">
              Les fichiers réels
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl dark:text-white">
              Un modèle à remplir, puis un exemple pour vérifier votre niveau de
              précision.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
              Les fichiers ont été générés, rendus et contrôlés page par page.
              L&apos;exemple est explicitement fictif : il montre une méthode,
              pas une promesse de budget ou de performance.
            </p>
          </div>
          <ResourceDownloadCard
            resource={resource}
            placement="resource_landing_files"
          />
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
            <div>
              <div className="flex size-11 items-center justify-center rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300">
                <Workflow className="size-5" aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl dark:text-white">
                Une méthode courte avant une consultation coûteuse.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
                Commencez par quatre blocs. Les autres rubriques approfondissent
                les sujets qui déplacent le coût et le risque : données,
                intégrations, sécurité, gouvernance et sortie.
              </p>
              <Link
                href="/guides/erp-ou-logiciel-sur-mesure"
                className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-violet-700 hover:text-violet-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:text-violet-300 dark:hover:text-violet-200"
              >
                Comparer ERP et sur mesure
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <ol className="grid gap-4 sm:grid-cols-2">
              {workflow.map((step) => (
                <li
                  key={step.number}
                  className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800"
                >
                  <span className="text-xs font-bold tracking-[0.16em] text-violet-700 dark:text-violet-300">
                    {step.number}
                  </span>
                  <h3 className="mt-3 text-base font-bold text-zinc-950 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50 py-12 sm:py-16 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
              <CircleCheck className="size-5" aria-hidden="true" />
            </div>
            <h2 className="mt-5 text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
              Ce que le kit permet réellement d&apos;obtenir.
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {[
                "Un résultat métier formulé sans imposer de technologie.",
                "Une première version testable de bout en bout.",
                "Des règles, données et intégrations signalées comme connues ou à étudier.",
                "Une grille de réponse commune pour comparer les candidats.",
                "Des conditions de recette et de réversibilité vérifiables.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-emerald-600"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <aside className="rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900/60 dark:bg-amber-950/20">
            <div className="flex size-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
              <FileText className="size-5" aria-hidden="true" />
            </div>
            <h2 className="mt-4 text-xl font-bold text-zinc-950 dark:text-white">
              Les limites restent visibles.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Le document ne prouve aucune conformité et ne remplace pas les
              analyses propres à votre activité. Ne placez jamais mots de passe,
              clés API, exports clients bruts ou données personnelles inutiles
              dans un cahier des charges partagé.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
              Les rubriques ont été guidées par des ressources officielles de{" "}
              <a
                href="https://design.numerique.gouv.fr/bien-concevoir/"
                className="underline underline-offset-4 hover:text-zinc-950 dark:hover:text-white"
              >
                DesignGouv
              </a>
              , du{" "}
              <a
                href="https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/critere/1.2/"
                className="underline underline-offset-4 hover:text-zinc-950 dark:hover:text-white"
              >
                RGESN
              </a>
              , de la{" "}
              <a
                href="https://www.cnil.fr/fr/faire-un-choix-eclaire-de-son-architecture"
                className="underline underline-offset-4 hover:text-zinc-950 dark:hover:text-white"
              >
                CNIL
              </a>{" "}
              et de l&apos;
              <a
                href="https://aide.monservicesecurise.cyber.gouv.fr/fr/article/mon-fournisseur-de-service-me-dit-que-cest-securise-8ldkcu/"
                className="underline underline-offset-4 hover:text-zinc-950 dark:hover:text-white"
              >
                ANSSI
              </a>
              .
            </p>
          </aside>
        </div>
      </section>

      <GuideFAQSection
        title="Questions avant de télécharger le kit"
        items={faqItems}
      />

      <section className="bg-white py-12 sm:py-16 dark:bg-zinc-950">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="max-w-3xl text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl dark:text-white">
              Votre besoin est décrit, mais le bon niveau de solution reste
              incertain ?
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
              Le guide vous aide à finaliser le document. Si vous voulez ensuite
              confronter le périmètre à un développeur, nous pouvons identifier
              les inconnues sans transformer l&apos;échange en rendez-vous
              commercial générique.
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
