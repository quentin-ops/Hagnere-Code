import Image from "next/image";
import Link from "next/link";
import {
  FormulaBox,
  GuideTable,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GoogleAdsQuoteComparator } from "@/components/guides/GoogleAdsQuoteComparator";
import {
  GuidePremiumCase,
  GuidePremiumLayout,
  GuidePremiumMemo,
  GuidePremiumSection,
} from "@/components/guides/guide-premium-layout";
import type { GuidePremiumFaqCategory } from "@/components/guides/guide-premium-types";
import { GuidesShell } from "@/components/guides/GuidesShell";
import {
  buildGuideMetadata,
  buildGuideStructuredData,
} from "@/lib/guide-page-seo";
import { formatGuideDate, getGuide } from "@/lib/guides";
import { TEAM } from "@/lib/team";

const guide = getGuide("prix-gestion-google-ads");
const breadcrumbName = "Prix d’une gestion Google Ads";

export const metadata = buildGuideMetadata(
  guide,
  "Comparer le coût complet de quatre modes de rémunération",
);

const structuredData = buildGuideStructuredData(guide, breadcrumbName);

const toc = [
  {
    id: "reponse-prix",
    number: "01",
    label: "Répondre au prix sans inventer une moyenne",
    shortLabel: "Prix",
  },
  {
    id: "cout-complet",
    number: "02",
    label: "Reconstituer le coût complet",
    shortLabel: "Coût complet",
  },
  {
    id: "modeles",
    number: "03",
    label: "Comparer quatre rémunérations",
    shortLabel: "Modèles",
  },
  {
    id: "horizons",
    number: "04",
    label: "Lire 3, 6 et 12 mois",
    shortLabel: "Durée",
  },
  {
    id: "calculateur",
    number: "05",
    label: "Recalculer avec vos devis",
    shortLabel: "Calculer",
  },
  {
    id: "indicateurs",
    number: "06",
    label: "Séparer CPC, CPA, CPL et CAC",
    shortLabel: "Mesurer",
  },
  {
    id: "perimetre",
    number: "07",
    label: "Contrôler ce qui est inclus",
    shortLabel: "Périmètre",
  },
  {
    id: "propriete",
    number: "08",
    label: "Sécuriser compte et sortie",
    shortLabel: "Propriété",
  },
  {
    id: "decision",
    number: "09",
    label: "Choisir le dispositif proportionné",
    shortLabel: "Décider",
  },
];

const faqCategories: GuidePremiumFaqCategory[] = [
  {
    key: "prix",
    num: "01",
    label: "Prix et factures",
    items: [
      {
        question: "Combien coûte la gestion de Google Ads par mois ?",
        answer:
          "Il n’existe pas de montant fiable sans périmètre précis. Dans l’échantillon de pages publiques consulté, les prix vont d’une gestion à partir de 90 € HT à plusieurs milliers d’euros par mois. Les campagnes, canaux, créations, pages, mesures et rythmes de travail ne sont pourtant pas équivalents. Comparez donc le coût complet sur une durée identique, pas l’étiquette mensuelle seule.",
      },
      {
        question: "Le budget publicitaire est-il inclus dans les honoraires ?",
        answer:
          "Pas nécessairement, et il vaut mieux exiger deux lignes distinctes. Le budget média finance la diffusion auprès de Google ; les honoraires rémunèrent le travail du prestataire. Demandez aussi si le coût réglementaire, les créations, la page, la mesure, les outils et les frais de lancement sont ajoutés.",
      },
      {
        question: "Les frais de lancement sont-ils toujours justifiés ?",
        answer:
          "Ils peuvent rémunérer un audit, la reprise du compte, la mesure, la structure, les créations et la documentation. Ils ne doivent pas rester une ligne opaque. Demandez les livrables, les accès modifiés, les contrôles effectués et ce qui se passe si le compte est déjà propre.",
      },
      {
        question: "Faut-il comparer les prix HT ou TTC ?",
        answer:
          "Comparez les prestations externes sur une même base HT, puis calculez séparément le décaissement TTC et la part de TVA réellement récupérable. Le traitement dépend des factures, des fournisseurs et de votre situation. Le temps interne valorisé n’est pas une facture HT : c’est un coût économique à ajouter à part.",
      },
    ],
  },
  {
    key: "calcul",
    num: "02",
    label: "Budget et indicateurs",
    items: [
      {
        question: "Que représente le coût réglementaire Google France de 2 % ?",
        answer:
          "Google indique actuellement un coût réglementaire de 2 % pour les annonces diffusées en France. Il s’ajoute à la dépense concernée. Vérifiez le lieu de diffusion et la facture à la date de votre calcul, puis évitez de l’ajouter une seconde fois si votre montant de départ l’inclut déjà.",
      },
      {
        question:
          "Google peut-il dépenser plus que le budget quotidien moyen ?",
        answer:
          "Pour la plupart des campagnes, Google indique qu’une journée peut atteindre jusqu’à deux fois le budget quotidien moyen, tandis que la limite mensuelle correspond généralement à 30,4 fois ce budget. Des exceptions existent et un budget total de campagne suit d’autres règles. Pilotez donc la trésorerie avec les règles du type de campagne réellement utilisé.",
      },
      {
        question: "Quelle différence entre CPA, CPL et CAC ?",
        answer:
          "Le CPA divise une dépense par l’action définie ; cette action peut être un formulaire, un appel ou un achat. Le CPL porte sur un prospect, idéalement qualifié selon une règle écrite. Le CAC divise le coût d’acquisition complet par les nouveaux clients. Sans rapprochement avec le suivi commercial, ces trois nombres ne répondent pas à la même question.",
      },
      {
        question: "Le calculateur prédit-il la rentabilité d’une campagne ?",
        answer:
          "Non. Il applique vos hypothèses à quatre structures de prix et rend les coûts visibles. Les clics, actions, prospects, clients et marges initiaux sont fictifs. Testez un cas central et un cas défavorable, puis remplacez les prévisions par des données rapprochées dès qu’elles existent.",
      },
    ],
  },
  {
    key: "choix",
    num: "03",
    label: "Prestataire et contrôle",
    items: [
      {
        question: "Le pourcentage du budget média est-il toujours plus cher ?",
        answer:
          "Non. Il dépend du taux, de l’assiette, du minimum, du plafond et de la durée. Un pourcentage peut coûter moins qu’un forfait à faible dépense et davantage après une hausse de budget. Recalculez chaque modèle avec sa propre assiette contractuelle, puis rendez comparables le périmètre, les coûts annexes et la sortie.",
      },
      {
        question: "Qui doit posséder le compte Google Ads ?",
        answer:
          "L’entreprise annonceuse devrait conserver un accès administrateur direct au compte, aux factures, à la mesure et aux actifs utiles. Google précise qu’un compte existant lié à un compte administrateur garde son historique et que le compte administrateur ne devient pas propriétaire par défaut dans ce cas. Vérifiez néanmoins les rôles réels avant de signer.",
      },
      {
        question: "Quelle durée d’engagement accepter ?",
        answer:
          "Acceptez une durée compatible avec le travail promis, le cycle commercial et le risque financier que vous pouvez supporter. Cette durée ne remplace pas un plan de contrôle. Précisez les livrables, les points de revue, les conditions de résiliation, les frais de sortie et la restitution des accès.",
      },
      {
        question: "Quand gérer Google Ads soi-même ?",
        answer:
          "C’est envisageable si le périmètre est simple, la mesure fiable, le temps disponible et la perte maximale définie. Demandez plutôt un audit ou une assistance ponctuelle si vous savez exécuter mais voulez contrôler la structure. Reportez si la page, le suivi des ventes ou la capacité commerciale empêchent encore de juger les résultats.",
      },
    ],
  },
];

function QuoteReadingOrder() {
  const items = [
    {
      number: "1",
      title: "Même objectif",
      text: "Même offre, zone, canal, période et définition d’un prospect qualifié.",
    },
    {
      number: "2",
      title: "Base commune minimale",
      text: "Média et coûts réellement identiques, puis éléments manquants et temps interne ajoutés offre par offre.",
    },
    {
      number: "3",
      title: "Rémunération isolée",
      text: "Forfait, pourcentage, hybride ou temps passé recalculé séparément.",
    },
    {
      number: "4",
      title: "Même durée",
      text: "Décaissement et coût connu comparés à 3, 6 puis 12 mois.",
    },
  ];

  return (
    <aside
      className="not-prose my-7 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
      aria-label="Ordre de lecture d’un devis Google Ads"
    >
      <div className="border-b border-zinc-200 bg-zinc-950 px-5 py-4 text-white dark:border-zinc-800">
        <p className="m-0 text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-300">
          Rendre les offres comparables
        </p>
        <p className="mb-0 mt-1 text-base font-semibold">
          Quatre contrôles, dans cet ordre
        </p>
      </div>
      <ol className="grid gap-px bg-zinc-200 dark:bg-zinc-800 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.number} className="bg-white p-5 dark:bg-zinc-950">
            <span className="inline-flex size-7 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200">
              {item.number}
            </span>
            <p className="mb-0 mt-3 text-sm font-bold text-zinc-950 dark:text-white">
              {item.title}
            </p>
            <p className="mb-0 mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {item.text}
            </p>
          </li>
        ))}
      </ol>
    </aside>
  );
}

export default function Page() {
  return (
    <GuidesShell>
      {structuredData.map((item) => (
        <script
          key={item["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\\u003c"),
          }}
        />
      ))}

      <GuidePremiumLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: breadcrumbName },
        ]}
        badges={[
          { label: "Coût complet", variant: "dark" },
          { label: "Google Ads", variant: "neutral" },
          { label: "Calcul local", variant: "success" },
          {
            label: `Mis à jour le ${formatGuideDate(guide.dateModified)}`,
            variant: "muted",
          },
        ]}
        heroTitle="Combien coûte vraiment"
        heroTitleEm="la gestion de Google Ads ?"
        heroDescription="Une mensualité ne suffit pas. Comparez quatre modèles de rémunération sur la même durée, sans confondre honoraires et média. Ajoutez ensuite le lancement, la mesure, les créations, la TVA à décaisser et le temps de votre équipe."
        stats={[
          { label: "Modèles comparés", value: "4" },
          { label: "Durées comparées", value: "3 · 6 · 12" },
          { label: "Moyenne de marché", value: "Aucune" },
          { label: "Calculateur · envoi", value: "Aucun" },
          { label: "Indicateurs séparés", value: "4" },
          { label: "Lecture", value: `${guide.readTimeMin} min` },
        ]}
        author={{
          initials: TEAM.quentin.initials,
          name: TEAM.quentin.fullName,
          role: TEAM.quentin.role,
          profileUrl: "/equipe#fondateur",
        }}
        sidebarHeroCta={{
          eyebrow: "Publicité en ligne",
          titleStart: "Faire chiffrer",
          titleEm: "un périmètre comparable",
          description:
            "Décrivez le budget média, les zones, le cycle commercial, la mesure existante et ce que votre équipe peut prendre en charge. La proposition doit rendre visibles honoraires, lancement, actifs, exclusions et conditions de sortie.",
          benefits: [
            "Honoraires fixes séparés du budget média",
            "Propriété, accès et actifs inventoriés au devis",
            "Refus explicite si la base de pilotage n’est pas prête",
          ],
          primaryCtaLabel: "Voir le service publicité en ligne",
          primaryCtaHref: "/services/publicite-en-ligne",
          phoneLabel: "03 74 47 20 18",
          phoneHref: "tel:+33374472018",
        }}
        toc={toc}
        tocLabel="Comparer le coût complet"
        mobileCtaLabel="Décrire mon périmètre"
        sidebarContextCta={{
          eyebrow: "Devis Google Ads",
          title: "Faire remettre mon devis à plat",
          description:
            "Apportez les lignes du devis, le budget média hors surcoût, les accès et la définition d’une vente attribuée.",
          benefits: [
            "Comparer la même chose sur la même durée",
            "Rendre visibles les coûts hors honoraires",
            "Écrire les conditions de contrôle et de sortie",
          ],
          ctaLabel: "Décrire mon projet",
          ctaHref: "/demarrer-un-projet",
          secondaryLabel: "03 74 47 20 18",
          secondaryHref: "tel:+33374472018",
        }}
        faqCategories={faqCategories}
        faqMeta={{
          eyebrow: "Questions fréquentes",
          titleStart: "Comparer un devis",
          titleEm: "sans confondre",
          titleEnd: "prix, budget et acquisition.",
          subtitle:
            "Des réponses courtes sur la facture, la TVA, les modèles, les indicateurs et la propriété du compte.",
          ctaTitle: "Votre périmètre reste impossible à comparer ?",
          ctaDescription:
            "Partagez les lignes du devis et les hypothèses manquantes, sans transmettre de données personnelles de prospects.",
          ctaLabel: "Décrire le périmètre",
          ctaHref: "/demarrer-un-projet",
        }}
        legalSources={[
          {
            source: "Google Ads · budgets",
            href: "https://support.google.com/google-ads/answer/10486536?hl=fr",
            description:
              "Budget quotidien moyen, limite quotidienne et limite mensuelle de 30,4 jours pour la plupart des campagnes.",
          },
          {
            source: "Google Ads · budget total",
            href: "https://support.google.com/google-ads/answer/10486938?hl=fr",
            description:
              "Règles distinctes du budget total de campagne sur une période fixée.",
          },
          {
            source: "Google Ads · coût France",
            href: "https://support.google.com/google-ads/answer/9750227?hl=fr",
            description:
              "Coût réglementaire actuellement indiqué pour les annonces diffusées en France.",
          },
          {
            source: "Google Ads · TVA",
            href: "https://support.google.com/google-ads/answer/2375370?hl=fr",
            description:
              "Repères de facturation selon l’entité Google qui sert le compte ; vérification fiscale individuelle nécessaire.",
          },
          {
            source: "Google Ads · facturation France",
            href: "https://support.google.com/google-ads/answer/2375371?hl=fr",
            description:
              "Indisponibilité indiquée de la facturation consolidée pour les agences médias en France ; rôles de facturation à vérifier avant le lancement.",
          },
          {
            source: "Légifrance · loi n° 93-122, article 20",
            href: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000031011011",
            description:
              "Mandat écrit pour l’achat d’espace par un intermédiaire, rémunérations détaillées, avantages portés sur facture et facture du vendeur communiquée à l’annonceur.",
          },
          {
            source: "Google Ads · association",
            href: "https://support.google.com/google-ads/answer/7456530?hl=fr",
            description:
              "Effets de l’association d’un compte existant à un compte administrateur, notamment sur l’historique et la propriété.",
          },
          {
            source: "Google Ads · propriété",
            href: "https://support.google.com/google-ads/answer/7456532?hl=fr",
            description:
              "Rôles de propriété d’un compte administrateur et possibilité de dissocier les comptes.",
          },
          {
            source: "Google Ads · conversions",
            href: "https://support.google.com/google-ads/answer/11461796?hl=fr",
            description:
              "Différence entre actions de conversion principales et secondaires dans les objectifs et les enchères.",
          },
          {
            source: "Google Ads · historique",
            href: "https://support.google.com/google-ads/answer/2454137?hl=fr",
            description:
              "Historique des modifications du compte sur les deux dernières années.",
          },
          {
            source: "CNIL · FAQ cookies et traceurs",
            href: "https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/FAQ",
            description:
              "Cadre du consentement pour les traceurs de mesure publicitaire et exigence d’un refus aussi facile que l’acceptation.",
          },
          {
            source: "Hagnéré Code · offre",
            href: "https://hagnere-code.ai/services/publicite-en-ligne",
            description:
              "Tarifs publics et périmètres actuels de l’offre Hagnéré Code, cités comme prix propres et non comme référence de marché.",
          },
          {
            source: "MS Web · tarifs",
            href: "https://www.ms-web.fr/creation-et-gestion-de-campagne-google-ads/",
            description:
              "Exemple daté d’un prix vendeur public ; périmètre à vérifier dans un devis.",
          },
          {
            source: "AdWorks · tarifs",
            href: "https://www.ad-works.fr/tarifs",
            description:
              "Exemple daté de frais de lancement et de gestion affichés publiquement.",
          },
          {
            source: "DP Medias · tarifs",
            href: "https://www.dpmedias.com/google-ads",
            description:
              "Exemple daté de prix publics pour audit, création et gestion mensuelle.",
          },
        ]}
        disclaimer={{
          eyebrow: "Limites des calculs",
          title: "Une comparaison de coûts, pas une promesse de performance",
          description:
            "Les prix vendeurs cités ont été consultés le 30 juillet 2026 et peuvent changer. Ils forment un échantillon de pages publiques à périmètres non comparables, pas une statistique du marché français. Les scénarios sont fictifs. Le calculateur applique notamment une hypothèse de TVA commune par simplification ; vérifiez chaque facture, votre droit à récupération et les règles à jour avec les professionnels compétents.",
        }}
      >
        <GuidePremiumSection
          id="reponse-prix"
          number="01"
          label="Réponse immédiate"
          title="Les prix affichés vont de 90 € HT à plusieurs milliers d’euros par mois — mais ils ne couvrent pas la même chose"
        >
          <p>
            Pour répondre sans détour : une page publique peut annoncer une
            gestion à partir de <strong>90 € HT par mois</strong>, une autre à
            partir de <strong>450 € HT par mois</strong>, et des offres plus
            structurées à{" "}
            <strong>1 800 €, 3 500 € ou 4 500 € HT par mois</strong>. Ces
            nombres ne forment pas un « prix moyen français ». Ils proviennent
            d’un petit échantillon de vendeurs, consulté le 30 juillet 2026,
            avec des budgets, canaux, rythmes de travail et livrables
            différents.
          </p>

          <p>
            Côté prix d’entrée,{" "}
            <a
              href="https://www.ms-web.fr/creation-et-gestion-de-campagne-google-ads/"
              target="_blank"
              rel="noreferrer"
            >
              MS Web
            </a>{" "}
            affiche une création à 149 € HT et une gestion à partir de 90 € HT
            par mois.{" "}
            <a
              href="https://www.ad-works.fr/tarifs"
              target="_blank"
              rel="noreferrer"
            >
              AdWorks
            </a>{" "}
            affiche un lancement à partir de 750 € HT et une gestion à partir de
            450 € HT par mois.
          </p>

          <p>
            Le détail change encore :{" "}
            <a
              href="https://www.dpmedias.com/google-ads"
              target="_blank"
              rel="noreferrer"
            >
              DP Medias
            </a>{" "}
            publie séparément un audit à 500 € HT, une création de compte à 250
            € HT et une gestion à partir de 450 € HT par mois. La même page
            renvoie aussi vers un « audit Google Ads gratuit » décrit comme
            synthétique. Le mot « audit » ne désigne donc pas le même niveau
            d’analyse, de livrables ou de restitution.
          </p>

          <p>
            Ces pages décrivent seulement leur propre offre. Avec un échantillon
            aussi limité, impossible d’en déduire un classement : il faut
            d’abord comparer le même périmètre.
          </p>

          <p>
            Pour situer notre propre offre, et non le marché, la page{" "}
            <Link href="/services/publicite-en-ligne">
              Publicité en ligne de Hagnéré Code
            </Link>{" "}
            publie actuellement un audit à 1 500 € HT, puis des forfaits fixes à
            1 800 €, 3 500 € et 4 500 € HT par mois associés à des budgets média
            et périmètres croissants. Le budget média est dépensé sur le compte
            du client et n’est pas remplacé par ces honoraires.
          </p>

          <QuoteReadingOrder />

          <div className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-[#0b1020] dark:border-zinc-800">
            <Image
              src="/guides/prix-gestion-google-ads/article-prix-ads-16x9.webp"
              alt="Quatre offres Google Ads représentées sur la même table de comparaison"
              width={1600}
              height={900}
              sizes="(max-width: 1024px) 100vw, 760px"
              className="h-auto w-full"
              priority
            />
          </div>

          <GuidePremiumMemo title="La question à poser avant de comparer">
            <p>
              « À 3, 6 et 12 mois, combien allons-nous réellement décaisser,
              quel sera le coût connu après TVA récupérable et temps interne, et
              que garderons-nous sous notre contrôle si nous changeons de
              prestataire ? »
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="cout-complet"
          number="02"
          label="Décomposition"
          title="Séparez sept lignes avant d’additionner quoi que ce soit"
        >
          <p>
            « Gestion Google Ads : 900 € par mois » ne décrit qu’une ligne. Un
            lancement peut exiger une reprise du suivi, une nouvelle page, des
            créations, un outil de rapprochement et du temps de validation. Deux
            offres affichées au même prix peuvent donc produire des
            décaissements très différents — ou l’une peut laisser à votre équipe
            un travail que l’autre prend en charge.
          </p>

          <GuideTable
            caption="Les sept familles à isoler dans un coût Google Ads complet"
            headers={[
              "Ligne",
              "Ce qu’elle finance",
              "Question de contrôle",
              "Traitement dans le calcul",
            ]}
            rows={[
              [
                "Média",
                "La diffusion des annonces",
                "Montant prévu, compte facturé, zone et type de budget ?",
                "HT externe, hors coût réglementaire si ajouté séparément",
              ],
              [
                "Gestion",
                "Pilotage, analyse, optimisation et échanges",
                "Forfait, assiette, taux, minimum, plafond ou heures ?",
                "Récurrent selon le modèle du devis",
              ],
              [
                "Lancement",
                "Audit, reprise, structure, accès et mise en route",
                "Quels livrables et quelles corrections sont remis ?",
                "Coût ponctuel inclus une fois dans chaque comparaison",
              ],
              [
                "Mesure",
                "Balises, consentement, conversions et rapprochement",
                "Qui implémente, teste et maintient chaque signal ?",
                "Ponctuel et/ou récurrent",
              ],
              [
                "Page et créations",
                "Page d’atterrissage, textes, images, variantes",
                "Combien de variantes et d’allers-retours sont inclus ?",
                "Ponctuel, récurrent ou hors périmètre",
              ],
              [
                "Outils et frais",
                "Logiciels, appels, coût réglementaire, autres fournisseurs",
                "Quelle facture, quelle base et quelle périodicité ?",
                "Externe HT puis trésorerie fiscale séparée",
              ],
              [
                "Temps interne",
                "Cadrage, validation, traitement et retour commercial",
                "Qui intervient, combien d’heures et à quel coût ?",
                "Coût économique, pas facture fournisseur",
              ],
            ]}
          />

          <FormulaBox>
            {`Décaissement externe HT
= média hors surcoût
+ coût réglementaire applicable
+ gestion
+ lancement
+ mesure
+ page, créations et outils
+ sommes dues à la date d’arrêt comparée

Décaissement TTC
= décaissement externe HT + TVA effectivement facturée

Coût économique connu
= décaissement externe HT
+ TVA non récupérable
+ temps interne valorisé`}
          </FormulaBox>

          <h3>Le coût réglementaire français ne doit apparaître qu’une fois</h3>
          <p>
            Google indique actuellement un{" "}
            <a
              href="https://support.google.com/google-ads/answer/9750227?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              coût réglementaire de 2 % pour les annonces diffusées en France
            </a>
            . Dans ce guide et dans le calculateur, la dépense média saisie est
            la base <strong>avant</strong> ce coût ; le pourcentage est ajouté
            seulement sur la part France. Si votre export comptable ou votre
            devis l’a déjà intégré, mettez le taux à zéro pour éviter un double
            comptage.
          </p>

          <h3>La TVA décaissée n’est pas toujours un coût final</h3>
          <p>
            L’aide Google précise que les comptes servis par Google France SARL
            sont soumis aux taux français standards et distingue le cas de
            comptes servis par Google Ireland. Consultez{" "}
            <a
              href="https://support.google.com/google-ads/answer/2375370?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              la page de facturation Google
            </a>{" "}
            puis vos factures. Le calculateur applique un seul taux de TVA à
            tous les coûts externes uniquement pour rendre un scénario lisible.
            Ce traitement simplifié peut être faux pour un fournisseur ou pour
            votre situation : adaptez le taux, la récupération et votre
            prévision de trésorerie avec votre comptable.
          </p>

          <InfoBox
            variant="amber"
            title="Une TVA récupérable peut peser sur votre trésorerie"
          >
            <p>
              Une taxe récupérable peut tout de même être décaissée avant sa
              récupération. Conservez trois colonnes : HT externe, TTC décaissé
              et coût économique après récupération estimée.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="modeles"
          number="03"
          label="Rémunération"
          title="Forfait, pourcentage, hybride ou temps passé : que payez-vous vraiment ?"
        >
          <p>
            Le nom du modèle ne dit rien de la qualité du travail. Il indique
            seulement comment les honoraires évoluent lorsque le budget ou la
            charge change. Pour comparer, commencez par écrire l’assiette :
            dépense média facturée, budget prévu, somme nette d’avoirs ou autre
            définition prévue au devis.
          </p>

          <GuideTable
            caption="Forces, risques et clauses à demander pour quatre modèles de gestion"
            headers={["Modèle", "Calcul", "Peut convenir si", "À écrire"]}
            rows={[
              [
                "Forfait fixe",
                "Lancement + montant mensuel",
                "Le périmètre et le rythme sont assez stables",
                "Inclus, exclusions, révision, volumes et fréquence",
              ],
              [
                "Pourcentage",
                "Assiette × taux, puis minimum et plafond éventuels",
                "La charge et le budget évoluent ensemble de façon documentée",
                "Assiette, taux, minimum, plafond, avoirs et changement de budget",
              ],
              [
                "Hybride",
                "Socle fixe + assiette × taux, bornés si le devis le prévoit",
                "Un minimum de travail existe et une part varie réellement",
                "Ce que couvre le socle et ce qui déclenche la part variable",
              ],
              [
                "Temps passé",
                "Heures × taux horaire",
                "Mission ponctuelle, reprise incertaine ou besoin fluctuant",
                "Estimation, relevé, plafond, validation des dépassements et livrables",
              ],
            ]}
          />

          <h3>Ce que donnent les quatre modèles avec les mêmes hypothèses</h3>
          <p>
            Prenons un cas fictif : 5 000 € HT de média par mois, entièrement
            diffusé en France ; 2 % de coût réglementaire ; 2 000 € HT de
            mesure, page et créations au lancement ; 250 € HT d’outils ou de
            créations récurrentes ; huit heures internes initiales puis trois
            heures mensuelles valorisées 50 €/h dans chacune des quatre offres.
          </p>

          <p>
            Tous les honoraires de ce scénario sont HT : forfait à 750 € de
            lancement puis 900 € par mois ; pourcentage à 900 € de lancement
            puis 15 % d’une assiette de 5 000 € ; hybride à 800 € puis 500 € + 8
            % de la même assiette dans ce seul exemple.
          </p>

          <p>
            Le modèle au temps passé retient huit heures initiales puis dix
            heures par mois, à 100 €/h. Les deux assiettes variables restent
            distinctes dans l’outil : recopiez pour chacune la définition du
            devis. Ces montants servent à comparer les calculs ; ils ne
            constituent ni une recommandation tarifaire ni une estimation de
            performance.
          </p>

          <GuideTable
            caption="Résultat reproductible du cas fictif, TVA supposée entièrement récupérable"
            headers={[
              "Modèle",
              "Gestion mensuelle HT",
              "Coût connu à 3 mois",
              "Coût connu à 6 mois",
              "Coût connu à 12 mois",
            ]}
            rows={[
              ["Forfait", "900 € HT", "22 350 €", "41 550 €", "79 950 €"],
              ["Pourcentage", "750 € HT", "22 050 €", "40 800 €", "78 300 €"],
              ["Hybride", "900 € HT", "22 400 €", "41 600 €", "80 000 €"],
              ["Temps passé", "1 000 € HT", "22 700 €", "42 200 €", "81 200 €"],
            ]}
          />

          <InfoBox
            variant="blue"
            title="Le classement n’est valable que pour cette assiette"
          >
            <p>
              Pour un budget média mensuel HT de 5 000 à 10 000 €, les modèles
              variables changent alors que le forfait reste fixe jusqu’à sa
              clause de révision. Si la charge réelle dépasse dix heures, le
              temps passé change aussi. Rejouez donc une hausse, une baisse et
              un arrêt.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="horizons"
          number="04"
          label="Trésorerie"
          title="Trois mois montrent le lancement ; douze mois révèlent le récurrent"
        >
          <p>
            Un devis avec peu de frais initiaux peut devenir plus coûteux
            ensuite ; un lancement plus élevé peut être dilué sur un an. Le prix
            mensuel ne doit donc jamais être classé avant d’avoir choisi une
            durée cohérente avec le cycle commercial, le contrat et la perte
            maximale acceptable. Si la comparaison suppose un arrêt à cette
            date, ajoutez aussi le préavis encore facturé et les frais de sortie
            propres à chaque offre.
          </p>

          <GuideTable
            caption="Questions différentes selon la durée de comparaison"
            headers={["Durée", "Ce qu’elle révèle", "Décision à préparer"]}
            rows={[
              [
                "3 mois",
                "Poids du lancement, mise en place de la mesure, premier besoin de trésorerie",
                "Avons-nous la capacité d’installer et de contrôler le dispositif ?",
              ],
              [
                "6 mois",
                "Récurrence des honoraires, outils, créations et temps interne",
                "Le cycle commercial permet-il déjà de rapprocher prospects et clients ?",
              ],
              [
                "12 mois",
                "Effet des taux variables, des révisions et du coût d’exploitation",
                "Quel budget annuel et quelles conditions de sortie acceptons-nous ?",
              ],
            ]}
          />

          <p>
            Dans l’exemple forfaitaire précédent, le décaissement externe à
            trois mois est de 21 500 € HT, soit 25 800 € TTC si l’on applique
            l’hypothèse uniforme de 20 %. Le coût économique connu est de 22 350
            € après récupération totale supposée de la TVA et ajout du temps
            interne. À douze mois, ces trois lectures deviennent respectivement
            77 750 € HT, 93 300 € TTC décaissés et 79 950 € de coût connu.
          </p>

          <h3>
            Le budget quotidien moyen n’est pas un plafond quotidien strict
          </h3>
          <p>
            Pour la plupart des campagnes, Google indique qu’une journée peut
            atteindre jusqu’à{" "}
            <a
              href="https://support.google.com/google-ads/answer/10486536?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              deux fois le budget quotidien moyen
            </a>
            , avec une limite mensuelle généralement égale à 30,4 fois ce
            budget. Les règles comportent des exceptions. Un{" "}
            <a
              href="https://support.google.com/google-ads/answer/10486938?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              budget total de campagne
            </a>{" "}
            obéit à une logique distincte sur une période définie. Demandez le
            type de budget réellement configuré et rapprochez la facture du
            scénario, pas seulement le réglage affiché un jour donné.
          </p>

          <GuidePremiumCase
            initial="D"
            eyebrow="Décision fictive · directrice commerciale"
            title="Le devis le moins cher au mois bloque 18 heures internes"
          >
            <p className="m-0">
              Deux devis semblent séparés de 300 € HT/mois. Le premier exclut la
              page, le rapprochement des ventes et la préparation des créations
              ; l’équipe estime 18 h/mois supplémentaires à 55 €/h, soit 990
              €/mois de coût interne. La différence devient 690 €/mois en
              défaveur de l’offre affichée comme la moins chère. La dirigeante
              ne choisit pas encore : elle demande les responsabilités ligne par
              ligne et refait le calcul avec un scénario de 8 h/mois, puis de 18
              h/mois.
            </p>
          </GuidePremiumCase>

          <div className="not-prose my-8 grid overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 md:grid-cols-[0.9fr_1.1fr]">
            <Image
              src="/guides/prix-gestion-google-ads/article-prix-ads-4x3.webp"
              alt="Quatre chemins de rémunération ramenés vers une grille de coût commune"
              width={1200}
              height={900}
              sizes="(max-width: 768px) 100vw, 380px"
              className="h-full w-full object-cover"
            />
            <div className="flex flex-col justify-center p-6">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-700 dark:text-indigo-300">
                Test de résistance
              </p>
              <p className="mb-0 mt-2 text-lg font-bold text-zinc-950 dark:text-white">
                Recalculez trois événements avant de signer
              </p>
              <ul className="mb-0 mt-4 space-y-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                <li>Le budget média double au quatrième mois.</li>
                <li>Les ventes attribuées sont divisées par deux.</li>
                <li>Vous arrêtez après trois mois selon le contrat proposé.</li>
              </ul>
            </div>
          </div>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="calculateur"
          number="05"
          label="Outil"
          title="Recalculez vos quatre offres sans envoyer vos montants"
        >
          <p>
            La comparaison suit un ordre simple. Commencez par ce que les devis
            ont réellement en commun, puis complétez chaque offre avant de lire
            les résultats :
          </p>

          <ol>
            <li>
              <strong>Recopiez la base commune.</strong> Gardez seulement le
              média et les coûts réellement identiques dans les quatre offres.
            </li>
            <li>
              <strong>Complétez chaque offre.</strong> Ajoutez son assiette, son
              minimum, son plafond, les éléments de périmètre manquants, le
              temps laissé à votre équipe et les sommes dues si vous arrêtez à
              3, 6 ou 12 mois.
            </li>
            <li>
              <strong>Comparez les trois dates.</strong> Lisez séparément le HT
              externe, le TTC décaissé et le coût connu ; chaque somme de sortie
              reste attachée à la date et à l’offre concernées.
            </li>
          </ol>

          <p>
            Pour chaque modèle variable, utilisez l’assiette écrite dans son
            devis ; 0 signifie « aucun plafond ». Si vous conservez le taux de 2
            %, saisissez le média avant ce coût réglementaire. Le taux de TVA
            commun reste une hypothèse de scénario : il ne décrit pas
            nécessairement chaque facture ni votre droit à récupération.
          </p>

          <p>
            Le calcul suppose que le nombre mensuel de clics, d’actions, de
            prospects et de clients reste constant dès le départ. Il ne simule
            ni montée en charge ni saisonnalité. Pour un lancement, ajoutez donc
            un scénario mois par mois. La marge saisie pour chaque client porte
            sur toute la période retenue, même si une partie arrive après la
            date comparée. Le calcul la rapproche des coûts connus ; il ne
            produit pas un échéancier de trésorerie. Si vous modifiez la
            période, adaptez aussi la marge par client : le calculateur ne la
            recalcule pas automatiquement.
          </p>

          <GoogleAdsQuoteComparator />

          <GuidePremiumMemo title="Lecture correcte de la ligne « coût connu »">
            <ul>
              <li>
                Elle additionne les coûts externes, la TVA non récupérable
                saisie et le temps interne valorisé.
              </li>
              <li>
                Elle ne connaît pas les coûts oubliés, les avoirs futurs, les
                remises ni les variations de périmètre.
              </li>
              <li>
                Les frais de sortie saisis à 3, 6 ou 12 mois ne sont inclus que
                dans la comparaison de la même date et de la même offre.
              </li>
              <li>
                Elle ne prédit aucun clic, prospect, client ou niveau de marge.
              </li>
            </ul>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="indicateurs"
          number="06"
          label="Économie"
          title="Un bon CPA Google peut coexister avec un mauvais coût d’acquisition client"
        >
          <p>
            Le mot « conversion » ne dit pas ce qui s’est produit. Google
            distingue notamment les{" "}
            <a
              href="https://support.google.com/google-ads/answer/11461796?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              actions principales et secondaires
            </a>
            . Une action principale peut alimenter la colonne Conversions et les
            enchères selon la configuration de l’objectif ; une action
            secondaire sert généralement à l’observation, avec des exceptions
            décrites par Google. Ni l’une ni l’autre ne devient automatiquement
            un prospect qualifié ou une vente.
          </p>

          <GuideTable
            caption="Quatre indicateurs qui doivent conserver leur propre dénominateur"
            headers={[
              "Indicateur",
              "Formule retenue ici",
              "Ce qu’il répond",
              "Ce qu’il ne prouve pas",
            ]}
            rows={[
              [
                "CPC média chargé HT",
                "(média + coût réglementaire) ÷ clics",
                "Coût de la visite publicitaire",
                "Qualité du prospect ou vente",
              ],
              [
                "CPA média chargé HT",
                "(média + coût réglementaire) ÷ actions principales",
                "Coût de l’action configurée",
                "Qualification si l’action est un simple formulaire",
              ],
              [
                "CPL qualifié média chargé HT",
                "(média + coût réglementaire) ÷ prospects qualifiés",
                "Coût média d’un prospect reconnu comme qualifié",
                "Coûts de gestion, page et commercial",
              ],
              [
                "CAC complet connu",
                "coût économique connu ÷ nouveaux clients attribués",
                "Coût connu pour acquérir un client",
                "Marge future, rétention ou causalité parfaite",
              ],
            ]}
          />

          <h3>Ce que montre le cas central</h3>
          <p>
            Chaque mois, l’exemple forfaitaire retient 5 100 € de média et de
            coût réglementaire, 1 000 clics, 50 actions principales, 20
            prospects qualifiés et quatre nouveaux clients.
          </p>

          <p>
            Le CPC média chargé vaut 5,10 € HT, le CPA média chargé 102 € HT et
            le CPL qualifié média chargé 255 € HT. « Chargé » signifie ici que
            le coût réglementaire saisi est ajouté au média. Ces valeurs peuvent
            donc différer de celles affichées dans l’interface Google Ads.
          </p>

          <p>
            À trois mois, le coût complet connu atteint 22 350 €. Divisé par
            douze clients attribués, il donne un CAC connu de 1 862,50 €.
          </p>

          <p>
            Avec 2 500 € de marge contributive par client sur une période fixe
            de douze mois, les douze clients représentent 30 000 € de marge
            totale. Elle dépasse les coûts connus de 7 650 €, avant les coûts
            non renseignés. Rapportée aux 60 prospects qualifiés, cette marge
            vaut 500 € par prospect et le coût complet connu 372,50 €, soit un
            écart de 127,50 €. Une partie de la marge peut arriver après le
            troisième mois : cette comparaison porte sur la marge complète des
            clients attribués, pas sur la trésorerie à cette date. Elle ne
            garantit ni le volume, ni l’attribution, ni la marge.
          </p>

          <h3>Scénario défavorable à écrire avant le lancement</h3>
          <p>
            Si le dispositif ne produit qu’un client mensuel et si sa marge
            contributive n’est que de 1 000 €, le même coût à trois mois dépasse
            la marge contributive de 19 350 €. Le CAC connu atteint 7 450 €. Le
            résultat ne condamne pas le modèle : avec ces hypothèses
            commerciales, la marge ne couvre plus le dispositif. Avant de
            lancer, fixez le seuil d’arrêt, la durée du test et la donnée qui
            permettra de décider.
          </p>

          <FormulaBox>
            {`Seuil de coût complet par prospect qualifié
= marge contributive par client sur la période retenue
× nouveaux clients attribués
÷ prospects qualifiés

Écart au seuil
= seuil de coût complet par prospect qualifié
− coût économique connu ÷ prospects qualifiés`}
          </FormulaBox>

          <InfoBox
            variant="amber"
            title="Ne baptisez pas automatiquement cette différence « ROI »"
          >
            <p>
              Un retour sur investissement demande un périmètre de gains, de
              coûts, une période et une attribution adaptés. Ici, le calcul
              montre seulement si la marge contributive saisie couvre les coûts
              connus du scénario.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="perimetre"
          number="07"
          label="Devis"
          title="Un périmètre vérifiable vaut plus qu’une liste de mots comme « optimisation continue »"
        >
          <p>
            Le devis doit permettre de vérifier ce qui sera fait, par qui, à
            quelle fréquence et avec quel livrable. « Gestion complète », «
            suivi régulier » ou « optimisation continue » ne donnent ni volume,
            ni responsabilité, ni condition d’acceptation.
          </p>

          <GuideTable
            caption="Questions à poser avant de comparer la ligne d’honoraires"
            headers={["Bloc", "À faire préciser", "Preuve ou livrable utile"]}
            rows={[
              [
                "Cadrage",
                "Objectif, offre, zone, exclusions, saisonnalité et perte maximale",
                "Note d’hypothèses datée",
              ],
              [
                "Compte",
                "Création ou reprise, structure, campagnes et conventions de nommage",
                "Plan de compte et liste des changements",
              ],
              [
                "Mesure",
                "Actions primaires, secondaires, consentement, appels et rapprochement CRM",
                "Plan de mesure et recette documentée",
              ],
              [
                "Annonces",
                "Textes, visuels, nombre de variantes, validations et politique de marque",
                "Inventaire des actifs et historique des versions",
              ],
              [
                "Page",
                "Création, correction, tests, hébergement et responsabilité technique",
                "URL, propriétaire, accès et recette",
              ],
              [
                "Pilotage",
                "Fréquence réelle, requêtes, exclusions, budgets, enchères et audiences",
                "Journal des décisions et historique du compte",
              ],
              [
                "Retour commercial",
                "Définition d’un prospect qualifié, délai de réponse et raisons de perte",
                "Rapprochement mensuel des demandes et ventes",
              ],
              [
                "Rapport",
                "Indicateurs, source, période, attribution, commentaire et décision",
                "Rapport reproductible, pas capture isolée",
              ],
            ]}
          />

          <h3>Faites écrire aussi les exclusions</h3>
          <p>
            La traduction, le tournage, la production d’images, le développement
            de la page, la correction du consentement, la configuration CRM, le
            traitement des appels et la disponibilité du commercial peuvent être
            hors forfait. Leur absence n’est pas forcément un défaut ; leur
            invisibilité empêche la comparaison.
          </p>

          <h3>
            La mesure publicitaire ne dispense pas de gérer le consentement
          </h3>
          <p>
            La{" "}
            <a
              href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/FAQ"
              target="_blank"
              rel="noreferrer"
            >
              FAQ de la CNIL mise à jour le 29 avril 2026
            </a>{" "}
            rappelle que les traceurs utilisés pour mesurer la performance
            publicitaire sont, dans de nombreux cas, soumis au consentement.
            Lorsqu’un traceur n’est pas strictement nécessaire, le refus doit
            être aussi facile que l’acceptation. Un devis de mesure doit donc
            préciser les traceurs, les finalités, les responsabilités, le
            mécanisme de refus et les tests réalisés ; le simple mot « tracking
            » ne prouve ni conformité ni exhaustivité des signaux.
          </p>

          <h3>
            Contrôlez une décision, pas un volume artificiel de modifications
          </h3>
          <p>
            Un grand nombre de changements ne prouve pas un meilleur pilotage.
            Demandez plutôt quelle hypothèse motivait la modification, quelle
            période est comparable, quel risque était surveillé et ce qui
            déclenche la suite. Google conserve un{" "}
            <a
              href="https://support.google.com/google-ads/answer/2454137?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              historique des modifications sur les deux dernières années
            </a>
            , utile pour rapprocher les décisions du compte et les rapports.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="propriete"
          number="08"
          label="Réversibilité"
          title="Le compte, l’historique et la mesure doivent survivre au prestataire"
        >
          <p>
            Un faible prix devient très coûteux si l’annonceur perd ses accès,
            son historique, ses factures ou sa mesure au changement de
            prestataire. Avant le lancement, connectez-vous vous-même comme
            administrateur et vérifiez le compte de paiement, les comptes de
            mesure, la page, les actifs créatifs et le domaine.
          </p>

          <p>
            Google indique que{" "}
            <a
              href="https://support.google.com/google-ads/answer/7456530?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              l’association d’un compte existant à un compte administrateur
            </a>{" "}
            ne change pas son historique et ne donne pas automatiquement la
            propriété au compte administrateur. En revanche, lorsqu’un compte
            est créé depuis un compte administrateur, ce dernier peut devenir
            propriétaire par défaut. Les{" "}
            <a
              href="https://support.google.com/google-ads/answer/7456532?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              règles de propriété et de dissociation
            </a>{" "}
            justifient un contrôle concret des rôles, pas une simple phrase
            contractuelle.
          </p>

          <h3>Qui reçoit la facture Google, et qui paie ?</h3>
          <p>
            Avant de signer, identifiez l’entité facturée par Google, le compte
            qui règle le média et la personne qui transmet les justificatifs à
            la comptabilité. Ces rôles peuvent être différents. Le profil de
            paiement, le devis et le circuit comptable doivent les nommer sans
            ambiguïté.
          </p>

          <h3>Ce que dit la règle de facturation de Google en France</h3>
          <p>
            Google indique que la{" "}
            <a
              href="https://support.google.com/google-ads/answer/2375371?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              facturation consolidée n’est pas disponible pour les agences
              médias en France
            </a>{" "}
            qui achètent des espaces au nom d’annonceurs, en renvoyant au cadre
            français de la loi Sapin. Cette page décrit une règle du produit
            Google ; elle ne tranche pas votre montage comptable ou contractuel.
            Elle impose néanmoins de clarifier les rôles avant le premier euro
            dépensé.
          </p>

          <h3>Ce que prévoit l’article 20 de la loi Sapin</h3>
          <p>
            Indépendamment de cette règle produit,{" "}
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000031011011"
              target="_blank"
              rel="noreferrer"
            >
              l’article 20 de la loi n° 93-122 du 29 janvier 1993
            </a>{" "}
            prévoit que l’achat d’espace publicitaire par un intermédiaire
            s’effectue pour le compte de l’annonceur dans le cadre d’un mandat
            écrit. Le texte demande aussi de détailler la rémunération, de faire
            apparaître les rabais ou avantages sur la facture remise à
            l’annonceur et de lui communiquer la facture du vendeur, même s’il
            ne paie pas directement.
          </p>

          <GuidePremiumMemo title="Trois niveaux à ne pas confondre">
            <ul>
              <li>
                <strong>La règle produit Google</strong> décrit les possibilités
                de facturation de la plateforme.
              </li>
              <li>
                <strong>La loi</strong> encadre le mandat, la rémunération et la
                transparence lorsque l’intermédiaire achète l’espace.
              </li>
              <li>
                <strong>Votre organisation</strong> détermine qui est facturé,
                qui paie, qui conserve les pièces et comment elles sont
                traitées.
              </li>
            </ul>
          </GuidePremiumMemo>

          <p>
            Aucun de ces trois niveaux ne suffit à définir votre montage. Si un
            intermédiaire achète, avance ou refacture le média, faites valider
            l’organisation retenue.
          </p>

          <ul>
            <li>
              Quelle entité et quelle adresse apparaissent sur le profil de
              paiement Google ?
            </li>
            <li>
              Quel moyen de paiement débite le média et les coûts ajoutés par
              Google ?
            </li>
            <li>
              Qui télécharge la facture Google originale et la transmet à la
              comptabilité ?
            </li>
            <li>
              Quelle facture séparée couvre les honoraires, le lancement et les
              autres fournisseurs ?
            </li>
            <li>
              Que se passe-t-il en cas de rejet de paiement, d’avoir ou de fin
              de mandat ?
            </li>
          </ul>

          <p>
            Au minimum, le devis doit nommer l’annonceur facturé, le payeur, le
            destinataire des justificatifs et le responsable de leur
            rapprochement. Si un prestataire avance des fonds ou refacture une
            ligne, demandez un avis adapté : ce guide ne donne pas de conseil
            juridique ou fiscal sur ce montage.
          </p>

          <div className="not-prose my-8 grid gap-5 overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6 md:grid-cols-[220px_1fr]">
            <Image
              src="/guides/prix-gestion-google-ads/article-prix-ads-1x1.webp"
              alt="Chemins de coûts, actifs et contrôles rassemblés autour d’un registre commun"
              width={1200}
              height={1200}
              sizes="(max-width: 768px) 100vw, 220px"
              className="aspect-square w-full rounded-xl object-cover"
            />
            <div>
              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-700 dark:text-indigo-300">
                Contrôle de sortie
              </p>
              <p className="mb-0 mt-2 text-lg font-bold text-zinc-950 dark:text-white">
                Testez la réversibilité avant d’en avoir besoin
              </p>
              <ul className="mb-0 mt-4 grid gap-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 sm:grid-cols-2">
                <li>Accès administrateur direct vérifié</li>
                <li>Factures et paiements retrouvables</li>
                <li>Comptes de mesure identifiés</li>
                <li>Actifs et droits d’usage inventoriés</li>
                <li>Historique et rapports conservés</li>
                <li>Délai et frais de sortie écrits</li>
              </ul>
            </div>
          </div>

          <h3>La clause de sortie minimale</h3>
          <p>
            La clause doit préciser le délai, la date d’effet, les sommes encore
            dues, le traitement des campagnes actives, la restitution des accès,
            la remise des actifs, la conservation des rapports et le contact qui
            réalise la passation. Elle doit aussi signaler ce qui n’est pas
            transférable et pourquoi. Faites relire le contrat si l’enjeu le
            justifie ; ce guide ne remplace pas un conseil juridique.
          </p>

          <GuidePremiumMemo title="Contrôle rapide avant signature">
            <ul>
              <li>Un dirigeant se connecte au compte annonceur.</li>
              <li>
                Il voit le profil de paiement et sait retrouver la facture.
              </li>
              <li>
                Il identifie qui possède la mesure, la page et chaque actif.
              </li>
              <li>
                Il sait dissocier le prestataire sans supprimer l’historique.
              </li>
            </ul>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="decision"
          number="09"
          label="Choix"
          title="Choisissez le niveau d’aide après avoir contrôlé la base de pilotage"
        >
          <p>
            L’offre la plus complète n’est pas forcément la bonne. Vous pouvez
            piloter en interne, demander une aide ponctuelle, confier le compte
            à un indépendant ou à une agence — ou reporter le projet. Avant de
            choisir, vérifiez que vous savez mesurer les demandes reçues et que
            votre équipe peut les traiter.
          </p>

          <GuideTable
            caption="Orientation selon la situation réelle de l’annonceur"
            headers={["Situation", "Option à examiner", "Condition minimale"]}
            rows={[
              [
                "Périmètre simple et compétence interne disponible",
                "Gestion interne avec revue ponctuelle",
                "Mesure testée, temps réservé et perte maximale écrite",
              ],
              [
                "Compte existant mais doute sur la structure",
                "Audit ou reprise bornée",
                "Livrables, corrections et accès définis",
              ],
              [
                "Besoin récurrent, plusieurs campagnes et retour commercial disponible",
                "Indépendant ou agence selon charge et continuité",
                "Responsabilités, fréquence et réversibilité comparables",
              ],
              [
                "Page lente, mesure cassée ou demandes jamais qualifiées",
                "Réparer avant d’augmenter le média",
                "Recette de mesure et propriétaire de chaque correction",
              ],
              [
                "Perte maximale inconnue ou trésorerie incompatible",
                "Reporter",
                "Décision financière explicite avant diffusion",
              ],
            ]}
          />

          <h3>Quand Hagnéré Code n’est pas le bon choix</h3>
          <p>
            Notre{" "}
            <Link href="/services/publicite-en-ligne">
              page publique, consultée le 30 juillet 2026, situe le forfait
              Starter à partir de 8 000 € de budget média mensuel
            </Link>
            . Si votre budget est inférieur, que vous cherchez seulement une
            exécution légère ou que vous ne pouvez pas encore fournir de retour
            sur les prospects et les ventes, ce forfait publié peut être
            disproportionné. Une gestion interne, un indépendant, un audit
            ponctuel ou la correction préalable de la mesure peuvent être plus
            adaptés.
          </p>

          <p>
            Nous ne sommes pas non plus adaptés à une demande de chiffre
            d’affaires garanti, à un dispositif où l’annonceur ne conserve pas
            ses accès, ou à une hausse de média sans définition d’un prospect
            qualifié. Notre offre publique repose sur des honoraires fixes, pas
            sur un pourcentage du budget. Mieux vaut le savoir avant de nous
            contacter.
          </p>

          <InfoBox
            variant="emerald"
            title="Préparez une fiche d’une page pour comparer les offres"
          >
            <p>
              Notez l’offre, la zone, le budget média hors surcoût, la perte
              maximale, les quatre coûts unitaires, les responsabilités, les
              accès, les points de revue et trois décisions : continuer,
              corriger ou arrêter.
            </p>
          </InfoBox>

          <div className="not-prose my-8 rounded-2xl border border-zinc-200 bg-zinc-950 p-6 text-white dark:border-zinc-800 sm:p-8">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-300">
              Besoin d’un périmètre comparable
            </p>
            <p className="mb-0 mt-2 max-w-2xl text-xl font-bold">
              Partagez les lignes du devis, pas seulement le budget mensuel
            </p>
            <p className="mb-0 mt-3 max-w-3xl text-sm leading-relaxed text-zinc-300">
              Indiquez la dépense média hors coût réglementaire, les zones, les
              actifs existants, la qualité de la mesure et ce que votre équipe
              peut prendre en charge. Nous pouvons alors expliquer le périmètre
              proposé — ou vous dire qu’une solution plus légère est préférable.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services/publicite-en-ligne"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-bold text-zinc-950 no-underline transition hover:bg-zinc-100"
              >
                Voir notre périmètre publicitaire
              </Link>
              <Link
                href="/demarrer-un-projet"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-zinc-700 px-4 py-2 text-sm font-bold text-white no-underline transition hover:bg-zinc-900"
              >
                Décrire mon projet
              </Link>
            </div>
          </div>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
