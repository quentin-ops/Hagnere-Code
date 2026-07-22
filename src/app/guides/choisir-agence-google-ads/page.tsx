import type { Metadata } from "next";
import Link from "next/link";
import {
  GuideInlineCTA,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("choisir-agence-google-ads");

export const metadata: Metadata = {
  title: guide.title,
  description: guide.metaDescription,
  authors: [{ name: "Quentin Hagnéré" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  robots: guideRobots(guide),
  alternates: { canonical: guideUrl(guide) },
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: guide.cardTitle,
    description: guide.metaDescription,
    url: guideUrl(guide),
    images: [
      {
        url: guideUrl(guide) + "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Six preuves pour comparer des agences Google Ads avant de signer",
      },
    ],
    publishedTime: guide.datePublished + "T09:00:00+02:00",
    modifiedTime: guide.dateModified + "T09:00:00+02:00",
    authors: [SITE_URL + "/equipe"],
  },
  twitter: {
    card: "summary_large_image",
    title: guide.cardTitle,
    description: guide.metaDescription,
    images: [guideUrl(guide) + "/opengraph-image"],
  },
};

const articleJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: guide.heroTitle,
  description: guide.metaDescription,
  url: guideUrl(guide),
  mainEntityOfPage: { "@type": "WebPage", "@id": guideUrl(guide) },
  image: [guideUrl(guide) + "/opengraph-image"],
  datePublished: guide.datePublished,
  dateModified: guide.dateModified,
  inLanguage: "fr-FR",
  articleSection: guide.section,
  isPartOf: {
    "@type": "WebPage",
    "@id": SITE_URL + "/guides",
    name: "Guides web Hagnéré Code",
  },
  author: {
    "@type": "Person",
    name: "Quentin Hagnéré",
    jobTitle: "Fondateur de Hagnéré Code",
    url: SITE_URL + "/equipe",
    sameAs: ["https://www.linkedin.com/in/quentin-hagnere"],
    worksFor: { "@id": SITE_URL + "/#organization" },
  },
  publisher: {
    "@type": "Organization",
    "@id": SITE_URL + "/#organization",
    name: "Hagnéré Code",
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: SITE_URL + "/logos/logo-dark.png" },
  },
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL + "/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: SITE_URL + "/guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Choisir une agence Google Ads",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Comment choisir une bonne agence Google Ads ?",
    answer:
      "Envoyez les mêmes informations à chaque candidat, puis vérifiez six éléments : votre accès administrateur au compte, la séparation entre dépenses Google et honoraires, la personne qui travaillera réellement, le résultat commercial suivi, une première décision expliquée et les conditions de sortie. Une promesse ne remplace pas un élément montré.",
  },
  {
    question: "Le badge Google Partner suffit-il pour choisir ?",
    answer:
      "Non. Le badge renseigne sur le respect de critères du programme Google au niveau de l’entreprise. Il ne garantit ni votre rentabilité, ni la qualité de votre page, ni l’identité de la personne affectée à votre compte. Demandez qui interviendra et comment cette personne prendra une décision sur votre activité.",
  },
  {
    question: "Qui doit garder l’accès administrateur au compte Google Ads ?",
    answer:
      "Une adresse contrôlée par votre entreprise doit pouvoir administrer directement le compte. L’agence peut être reliée avec les droits nécessaires puis retirée à la fin. Vérifiez ce point en vous connectant vous-même, pas seulement dans le devis.",
  },
  {
    question: "Faut-il laisser l’agence créer le compte Google Ads ?",
    answer:
      "L’agence peut aider à le créer ou à le configurer. L’important est que l’entreprise sache quel compte est utilisé, conserve un administrateur direct et puisse récupérer l’historique et les réglages. Ne déduisez pas ces droits du nom figurant sur une facture.",
  },
  {
    question: "Que doit contenir un bon rapport Google Ads ?",
    answer:
      "Il doit relier les dépenses à des demandes ou ventes compréhensibles, signaler ce que les chiffres ne prouvent pas, rappeler les changements effectués et annoncer la prochaine décision avec son responsable et sa date de contrôle. Un tableau de bord sans décision peut être joli mais peu utile.",
  },
  {
    question:
      "Une agence spécialisée dans mon secteur est-elle forcément meilleure ?",
    answer:
      "Non. Cette expérience peut réduire le temps nécessaire pour comprendre certains mots, cycles de vente ou contraintes. Elle ne prouve pas que votre offre, votre zone, votre marge et votre page ressemblent aux dossiers précédents. Faites répondre tous les candidats aux mêmes informations.",
  },
  {
    question: "Agence, freelance ou gestion interne : que choisir ?",
    answer:
      "Une agence convient lorsque plusieurs travaux doivent être coordonnés et que les personnes sont réellement nommées. Un freelance expérimenté peut suffire si le travail demandé est clairement défini. Une équipe interne peut piloter une campagne simple si elle dispose du temps et des compétences. Reportez si l’offre, le suivi des demandes ou le traitement commercial ne sont pas prêts.",
  },
  {
    question: "Faut-il choisir l’agence Google Ads la moins chère ?",
    answer:
      "Comparez d’abord le même travail et le coût complet : dépenses payées à Google, honoraires, lancement, suivi des appels et formulaires, pages et temps interne. Une offre moins chère peut être la meilleure si le travail utile est couvert ; elle ne l’est pas si des responsabilités importantes restent invisibles.",
  },
];

type ProofCardProps = {
  title: string;
  question: string;
  yes: string;
  clarify: string;
  no: string;
};

function ProofCard({ title, question, yes, clarify, no }: ProofCardProps) {
  return (
    <section className="not-prose rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6">
      <h3 className="mb-2 text-lg font-bold text-zinc-950 dark:text-white">
        {title}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        <strong>Demandez :</strong> {question}
      </p>
      <div className="grid gap-2">
        <p className="m-0 rounded-xl bg-emerald-50 p-3 text-sm leading-relaxed text-emerald-950 dark:bg-emerald-950/30 dark:text-emerald-100">
          <strong>Oui :</strong> {yes}
        </p>
        <p className="m-0 rounded-xl bg-amber-50 p-3 text-sm leading-relaxed text-amber-950 dark:bg-amber-950/30 dark:text-amber-100">
          <strong>À préciser :</strong> {clarify}
        </p>
        <p className="m-0 rounded-xl bg-red-50 p-3 text-sm leading-relaxed text-red-950 dark:bg-red-950/30 dark:text-red-100">
          <strong>Non :</strong> {no}
        </p>
      </div>
    </section>
  );
}

function DecisionCard({
  title,
  choose,
  refuse,
}: {
  title: string;
  choose: string;
  refuse: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900">
      <h3 className="mb-2 text-lg font-bold text-zinc-950 dark:text-white">
        {title}
      </h3>
      <p className="mb-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        {choose}
      </p>
      <p className="mb-0 text-sm leading-relaxed text-red-800 dark:text-red-300">
        <strong>Écartez cette option si :</strong> {refuse}
      </p>
    </div>
  );
}

export default function Page() {
  return (
    <GuidesShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleJsonLd.replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd.replace(/</g, "\\u003c"),
        }}
      />
      <GuideLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: "Choisir une agence Google Ads" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous comparez plusieurs agences pour gérer vos campagnes ? Voici les preuves à demander pour savoir qui touchera au compte, ce qui sera mesuré et ce que vous récupérerez si vous partez."
        heroAction={{ href: "#six-preuves", label: "Voir les 6 preuves" }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "Un compte sous votre contrôle",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "La personne réellement nommée",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Une décision vérifiable",
            description: "",
            color: "emerald",
          },
          {
            number: "04",
            title: "Lecture : " + guide.readTimeMin + " min",
            description: "",
            color: "amber",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/prix-gestion-google-ads",
            label: "Calculer le coût complet de Google Ads",
          },
          {
            href: "/guides/audit-google-ads-que-verifier",
            label: "Auditer un compte Google Ads existant",
          },
          {
            href: "/guides/suivi-conversions-google-ads",
            label: "Relier les campagnes aux ventes",
          },
          {
            href: "/guides/landing-page-google-ads",
            label: "Vérifier la page utilisée par les annonces",
          },
          {
            href: "/services/publicite-en-ligne",
            label: "Découvrir notre gestion Google Ads",
          },
        ]}
        faqTitle="Choisir une agence Google Ads : les questions fréquentes"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          Vous avez reçu deux ou trois propositions pour gérer Google Ads. Les
          présentations parlent toutes de performance, d’optimisation et
          d’accompagnement. Pourtant, vous ne savez peut-être toujours pas qui
          travaillera sur vos campagnes, si votre entreprise gardera le compte,
          ni comment un clic sera relié à une demande sérieuse ou à une vente.
          Avant de comparer les promesses, demandez six preuves simples.
        </p>
        <p>
          <strong>La réponse courte :</strong> envoyez exactement les mêmes
          informations à chaque candidat. Gardez un accès administrateur
          contrôlé par votre entreprise, séparez la facture Google des
          honoraires, rencontrez la personne qui fera le travail et faites-lui
          expliquer une première décision. Demandez enfin à voir le compte rendu
          que vous recevrez et ce qui se passera si vous changez de prestataire.
        </p>
        <p>
          Cette méthode ne désigne pas automatiquement une agence. Un freelance
          expérimenté, une personne en interne ou un audit ponctuel peuvent être
          plus adaptés. Et si votre offre est encore floue, si personne ne suit
          les ventes ou si les demandes resteront sans réponse, le bon choix est
          souvent de préparer ces éléments avant d’acheter davantage de clics.
        </p>

        <GuideToc
          items={[
            { id: "six-preuves", label: "1. Demander six preuves" },
            { id: "partner", label: "2. Remettre le badge à sa place" },
            { id: "brief", label: "3. Envoyer les mêmes informations" },
            { id: "operateur", label: "4. Rencontrer la personne" },
            { id: "decision", label: "5. Faire expliquer une décision" },
            { id: "rapport", label: "6. Exiger un rapport utile" },
            { id: "sortie", label: "7. Préparer la sortie" },
            { id: "verdict", label: "8. Choisir ou reporter" },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="six-preuves">
          1. Demandez six preuves avant de comparer les discours
        </h2>
        <p>
          Préparez une feuille avec trois réponses possibles : « oui », « à
          préciser » et « non ». N’accordez pas de points pour compenser un
          refus important. Une belle référence ne rend pas acceptable un compte
          inaccessible ; un tarif bas ne remplace pas la définition de ce qui
          sera mesuré.
        </p>
        <div className="not-prose my-6 grid gap-4 lg:grid-cols-2">
          <ProofCard
            title="1. Votre entreprise administre le compte"
            question="Pouvez-vous me montrer où une adresse de notre entreprise aura un accès administrateur direct ?"
            yes="vous vous connectez au compte avec une adresse contrôlée par l’entreprise et voyez les droits accordés."
            clarify="le compte doit être créé ; le devis nomme qui le créera, avec quelle adresse et à quel moment vous vérifierez l’accès."
            no="l’agence refuse votre accès direct ou veut que vous passiez uniquement par le compte qu’elle utilise pour gérer ses clients."
          />
          <ProofCard
            title="2. Les dépenses Google et les honoraires sont séparés"
            question="Combien sera versé à Google, combien sera facturé pour la gestion et quels autres frais peuvent s’ajouter ?"
            yes="les documents distinguent chaque montant, sa fréquence et ce qui déclenche un supplément."
            clarify="un pourcentage ou un forfait est annoncé, mais les frais de lancement, de suivi des demandes ou de création restent à classer."
            no="un montant global empêche de savoir ce que Google reçoit ou ce que l’agence facture."
          />
          <ProofCard
            title="3. La personne qui travaillera est nommée"
            question="Qui modifiera réellement les campagnes après la signature, et qui prendra le relais en cas d’absence ?"
            yes="vous rencontrez l’intervenant, connaissez son rôle, sa disponibilité et la personne de relais."
            clarify="le responsable est connu, mais certaines tâches ou leur sous-traitance restent à attribuer."
            no="seul le commercial est présenté et l’équipe future reste anonyme."
          />
          <ProofCard
            title="4. Le résultat commercial est défini"
            question="Que doit produire la campagne dans notre entreprise : un appel utile, une demande qualifiée, un rendez-vous ou une vente ?"
            yes="le candidat sait où cette information existe, qui la renseigne et ce que Google ne peut pas déduire seul."
            clarify="les formulaires sont comptés, mais les doublons, les mauvais contacts ou les ventes ne sont pas encore rapprochés."
            no="la réussite est limitée aux clics, à la visibilité ou au nombre brut de formulaires."
          />
          <ProofCard
            title="5. Une première décision est expliquée"
            question="Avant de changer quoi que ce soit, quelle information allez-vous vérifier et quelle décision pourrait en découler ?"
            yes="la personne distingue ce qu’elle sait, ce qu’elle doit examiner, l’action possible et le moyen de contrôler son effet."
            clarify="l’analyse est prévue, mais la décision, le risque ou la date de contrôle restent vagues."
            no="la réponse promet des changements immédiats sans regarder l’offre, les appels, formulaires ou ventes réellement suivis, ni le compte."
          />
          <ProofCard
            title="6. La sortie est écrite"
            question="Si nous arrêtons la mission, quels accès seront retirés et que garderons-nous ?"
            yes="compte, historique, textes, images, vidéos, réglages qui relient les campagnes aux demandes, documents et étapes de retrait sont nommés."
            clarify="le préavis est connu, mais la remise des éléments et les responsabilités techniques ne le sont pas."
            no="quitter l’agence signifie perdre le compte, son historique ou la compréhension des changements."
          />
        </div>
        <p>
          <strong>La règle de décision est simple :</strong> un « non » confirmé
          sur l’un de ces six points doit vous faire écarter l’offre. Un « à
          préciser » n’est pas un demi-oui : demandez une réponse écrite, un
          nom, un document ou une capture avant de signer. Si plusieurs
          candidats obtiennent six « oui », comparez ensuite le coût complet, la
          disponibilité de la personne en charge et surtout la clarté de la
          première décision proposée.
        </p>
        <InfoBox variant="amber" title="Une promesse n’est pas une preuve">
          « Vous aurez accès », « nous suivons les ventes » ou « vous recevrez
          un rapport » sont des intentions. Demandez où l’accès apparaîtra, quel
          champ représente une vente et à quoi ressemble une décision dans le
          compte rendu. La réponse devient alors vérifiable avant ou au début de
          la mission.
        </InfoBox>

        <h2 id="partner">
          2. Le badge Google Partner ne choisit pas l’agence à votre place
        </h2>
        <p>
          Pour attribuer le badge, Google applique ses propres critères de
          performance, de dépenses et de certifications. Ils peuvent évoluer ;
          consultez la page officielle pour{" "}
          <a
            href="https://support.google.com/google-ads/answer/9702452?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            devenir partenaire Google
          </a>{" "}
          au moment de votre choix. Le badge renseigne sur l’entreprise inscrite
          au programme ; il ne prouve ni la rentabilité de votre campagne, ni la
          qualité de votre page, ni l’identité de la personne qui travaillera
          sur votre dossier.
        </p>
        <p>
          Google distingue d’ailleurs les{" "}
          <a
            href="https://support.google.com/google-ads/answer/9702955?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            certifications individuelles et le statut Partner de l’entreprise
          </a>
          . Posez donc deux questions différentes : « Votre entreprise
          possède-t-elle ce statut ? » puis « Qui interviendra réellement, et
          comment cette personne raisonne-t-elle sur notre cas ? »
        </p>
        <p>
          Une expérience dans votre secteur se traite de la même manière. Elle
          peut aider à comprendre le vocabulaire ou le cycle de vente. Demandez
          ce qui était réellement comparable : zone, offre, prix, marge, délai
          de décision, page utilisée et capacité à rappeler les prospects. Ne
          demandez pas les données confidentielles d’un autre client.
        </p>

        <h2 id="brief">3. Envoyez les mêmes informations à tous</h2>
        <p>
          Vous ne pouvez comparer les devis que si toutes les agences répondent
          au même besoin. Votre liste commune n’a pas à leur faire préparer
          gratuitement une campagne complète. Elle doit leur permettre de
          préciser ce qu’elles feront, ce qu’elles attendent de vous et ce
          qu’elles ne peuvent pas encore conclure.
        </p>
        <div className="not-prose my-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
          <h3 className="mb-4 text-lg font-bold text-zinc-950 dark:text-white">
            La liste commune en huit lignes
          </h3>
          <ol className="m-0 grid gap-3 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
            <li>l’offre précise à promouvoir et ce qui la distingue ;</li>
            <li>le client recherché, la zone et les exclusions connues ;</li>
            <li>ce qu’est une demande sérieuse et ce qu’est une vente ;</li>
            <li>
              la marge ou la valeur d’une vente, pour savoir combien vous pouvez
              consacrer à l’obtention d’un client ;
            </li>
            <li>la page utilisée et la personne qui peut la modifier ;</li>
            <li>
              les appels, formulaires et ventes déjà suivis, ainsi que
              l’historique disponible ;
            </li>
            <li>la capacité réelle à rappeler et traiter les demandes ;</li>
            <li>le budget, le calendrier et la raison de ce calendrier.</li>
          </ol>
        </div>
        <p>
          Si un chiffre manque, écrivez « inconnu » au lieu de l’inventer. Une
          bonne proposition doit justement indiquer ce qui peut être testé
          maintenant et ce qui exige d’abord une correction. Pour chiffrer le
          coût complet sans mélanger les honoraires et la dépense publicitaire,
          utilisez le guide sur le{" "}
          <Link href="/guides/prix-gestion-google-ads">
            prix de gestion de Google Ads
          </Link>
          .
        </p>

        <h2 id="operateur">4. Rencontrez la personne qui fera le travail</h2>
        <p>
          L’entretien commercial montre que quelqu’un sait présenter l’agence.
          Il ne dit pas encore qui lira vos demandes, changera une annonce ou
          vous alertera si la campagne attire les mauvaises personnes. Demandez
          un échange avec l’intervenant principal avant l’engagement, même
          court.
        </p>
        <p>Posez-lui des questions ordinaires :</p>
        <ul>
          <li>quelle partie du travail réaliserez-vous vous-même ?</li>
          <li>qui configure ou vérifie le suivi des demandes ?</li>
          <li>qui peut modifier la page si elle ne répond pas à l’annonce ?</li>
          <li>qui regarde la qualité des prospects après leur arrivée ?</li>
          <li>
            à quel moment me prévenez-vous plutôt que d’attendre le rapport ?
          </li>
          <li>
            qui reprend pendant une absence et avec quelles informations ?
          </li>
        </ul>
        <p>
          Le but n’est pas d’exiger une grande équipe. Une personne expérimentée
          peut couvrir plusieurs tâches. Vous voulez simplement voir les
          responsabilités qui existent réellement. Si une autre société ou un
          freelance intervient, demandez quelle partie lui revient et qui
          vérifie son travail.
        </p>

        <h2 id="decision">
          5. Faites expliquer la première décision, pas la campagne parfaite
        </h2>
        <p>
          Donnez ces informations et, si vous possédez déjà un compte, créez
          pour l’analyse un accès temporaire en lecture seule. Ne transmettez
          jamais votre mot de passe ni un code de connexion. Si vous ne retenez
          pas le candidat, retirez cet accès après l’étude. Ne demandez pas un
          audit complet gratuit : demandez plutôt comment la personne
          préparerait sa première décision avant de toucher au budget.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          {[
            [
              "Ce qu’elle veut savoir",
              "Par exemple : quelles demandes sont devenues qualifiées, quelle page les visiteurs ont vue et quel changement important vient d’avoir lieu.",
            ],
            [
              "Ce qu’elle observe déjà",
              "Un fait visible dans le compte, sur la page ou dans votre suivi commercial, sans le transformer trop vite en explication.",
            ],
            [
              "Ce qu’elle pourrait décider",
              "Corriger le suivi des demandes, écarter une recherche non pertinente, réécrire une annonce, améliorer la page, tester un budget ou ne rien changer encore.",
            ],
            [
              "Comment elle contrôlera",
              "Une période, un responsable, un chiffre métier et une condition qui autorise à poursuivre, corriger ou arrêter le test.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="mb-2 text-base font-bold text-zinc-950 dark:text-white">
                {title}
              </h3>
              <p className="mb-0 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {text}
              </p>
            </div>
          ))}
        </div>
        <p>
          Méfiez-vous d’une réponse qui promet de « tout optimiser » dès le
          premier jour. Une nouvelle équipe peut repérer un défaut évident, mais
          elle doit préserver l’état initial et comprendre ce que les chiffres
          représentent. Si le compte existe déjà et que vous avez besoin d’un
          examen approfondi, voyez plutôt{" "}
          <Link href="/guides/audit-google-ads-que-verifier">
            ce qu’un audit Google Ads doit vérifier
          </Link>
          .
        </p>

        <h2 id="rapport">6. Un bon rapport se termine par une action</h2>
        <p>
          Demandez un exemple anonymisé de compte rendu ou un modèle vierge.
          Vous ne cherchez pas le plus beau graphique. Vous cherchez la chaîne
          qui relie ce qui s’est passé à ce qui sera fait ensuite.
        </p>
        <div className="not-prose my-6 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 p-5 text-white dark:border-zinc-800 sm:p-6">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
            Exemple de compte rendu sans chiffres inventés
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "1. Résultat",
                "Dépense, demandes uniques, prospects qualifiés et ventes lorsque le rapprochement le permet.",
              ],
              [
                "2. Limite",
                "Donnée manquante, retard commercial, doublon possible ou période trop courte pour conclure.",
              ],
              [
                "3. Changement",
                "Modification réellement effectuée, auteur et raison, au lieu d’une liste vague d’optimisations.",
              ],
              [
                "4. Décision",
                "Ce qui continue, ce qui change, ce qui est reporté et ce qui doit être corrigé hors de Google Ads.",
              ],
              [
                "5. Responsable",
                "Personne chargée de l’action côté agence ou côté entreprise.",
              ],
              [
                "6. Contrôle",
                "Date et résultat attendu avant d’augmenter, réduire, poursuivre ou arrêter.",
              ],
            ].map(([title, text]) => (
              <div key={title} className="rounded-xl bg-white/[0.06] p-4">
                <h3 className="mb-2 text-sm font-bold text-white">{title}</h3>
                <p className="mb-0 text-xs leading-relaxed text-zinc-300">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <p>
          Une « conversion » est une action envoyée à Google pour être comptée.
          Elle peut être un formulaire ou un appel, pas forcément une vente. Si
          cette distinction n’est pas claire, approfondissez le{" "}
          <Link href="/guides/suivi-conversions-google-ads">
            suivi des conversions, des prospects et des ventes
          </Link>
          . Le candidat doit aussi dire ce que l’agence ne peut pas contrôler :
          la demande du marché, votre marge, la vitesse de rappel ou la qualité
          de l’offre.
        </p>
        <p>
          Google permet de consulter un{" "}
          <a
            href="https://support.google.com/google-ads/answer/2454137?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            historique des modifications et de filtrer par utilisateur
          </a>
          . Cette trace aide à vérifier qu’une action a eu lieu ; elle ne prouve
          pas que cette action était pertinente. Le rapport doit donc expliquer
          le raisonnement et le contrôle, pas seulement compter les
          modifications.
        </p>

        <h2 id="sortie">7. Lisez la sortie avant de signer l’entrée</h2>
        <p>
          Google documente différents{" "}
          <a
            href="https://support.google.com/google-ads/answer/6372672?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            niveaux d’accès qui peuvent être accordés ou retirés
          </a>
          . Un compte client conserve ses données lorsqu’il est relié au compte
          administrateur d’une agence, selon la{" "}
          <a
            href="https://support.google.com/google-ads/answer/7456532?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation Google sur la propriété des comptes client
          </a>
          . Vérifiez néanmoins l’organisation réelle : quel compte, quelle
          adresse administratrice et quelles connexions sont utilisées ?
        </p>
        <p>Écrivez avant l’engagement :</p>
        <ul>
          <li>la durée, le préavis et la dernière date de gestion ;</li>
          <li>les personnes et comptes dont l’accès sera retiré ;</li>
          <li>le maintien de votre propre accès administrateur ;</li>
          <li>
            les campagnes, annonces, listes de ciblage et historiques conservés
            ;
          </li>
          <li>
            les réglages qui relient les campagnes aux appels, formulaires ou
            ventes et les connexions à d’autres outils ;
          </li>
          <li>
            les textes, images, vidéos, pages et documents remis selon les
            droits prévus ;
          </li>
          <li>
            la personne qui vérifie que la nouvelle équipe peut reprendre.
          </li>
        </ul>
        <p>
          Le règlement Google applicable aux tiers demande notamment de la{" "}
          <a
            href="https://support.google.com/adspolicy/answer/6086450?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            transparence sur les coûts et les performances
          </a>
          . Ce cadre ne remplace pas la lecture de votre devis et de votre
          contrat. Faites examiner les clauses sensibles par un professionnel
          compétent lorsque l’enjeu le justifie.
        </p>

        <h2 id="verdict">8. Choisissez l’organisation — ou reportez</h2>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          <DecisionCard
            title="Choisir une agence"
            choose="Plusieurs travaux doivent être coordonnés — campagnes, suivi des demandes, pages, textes, images ou vidéos — et les personnes, décisions, accès et conditions de sortie sont clairement montrés."
            refuse="la marque de l’agence remplace l’identité des intervenants ou vous perdez la maîtrise du compte et des chiffres."
          />
          <DecisionCard
            title="Choisir un freelance expérimenté"
            choose="Le travail demandé est clair, une relation directe compte, les tâches annexes sont attribuées et un relais peut reprendre les informations importantes."
            refuse="une seule personne est supposée couvrir sans limite campagnes, suivi des demandes, pages, textes, images, vidéos et disponibilité permanente."
          />
          <DecisionCard
            title="Gérer en interne, avec un appui ponctuel"
            choose="La campagne reste limitée, une personne dispose du temps nécessaire et un audit ou une formation suffit pour prendre les décisions suivantes."
            refuse="la gestion sera ajoutée à un agenda déjà plein sans suivi des demandes, contrôle régulier ni personne chargée des chiffres."
          />
          <DecisionCard
            title="Reporter le lancement"
            choose="L’offre, la marge, la page, le suivi des ventes ou la capacité à traiter les demandes empêchent encore de juger utilement une campagne."
            refuse="les conditions sont déjà prêtes et vous repoussez seulement un test limité qui pourrait répondre à une question précise."
          />
        </div>

        <p>
          Hagnéré Code vend la{" "}
          <Link href="/services/publicite-en-ligne">
            gestion de campagnes Google Ads
          </Link>
          . Nous avons donc un intérêt commercial dans ce sujet. Appliquez les
          six points à notre proposition comme à celle de n’importe quel autre
          candidat.
        </p>

        <GuideInlineCTA
          title="Faire le point sur votre projet Google Ads"
          description="Le bouton ouvre notre formulaire projet. Expliquez votre offre, votre budget, le compte existant et ce que vous appelez une vente. Nous examinerons s’il faut une gestion mensuelle, un audit, mieux suivre les demandes ou attendre avant de lancer les campagnes. Aucune rentabilité ni aucun volume de prospects ne sera promis."
          tags={[
            "Accès au compte",
            "Ventes suivies",
            "Agence, audit ou autonomie",
          ]}
          ctaLabel="Décrire mon besoin Google Ads"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="sources">Sources, limites et conflit d’intérêt</h2>
        <p>
          Sources Google consultées le 22 juillet 2026 : programme Partner,
          certifications, gestion des accès, propriété des comptes client,
          historique des modifications et règlement concernant les tiers. Les
          interfaces et critères peuvent évoluer ; ouvrez les liens officiels au
          moment de la décision.
        </p>
        <p>
          Ce guide n’audite pas un compte et ne promet ni position, ni prospect,
          ni rentabilité. Les résultats dépendent notamment de la demande, de
          l’offre, de la concurrence, de la page, du budget, de la qualité du
          suivi des demandes et du traitement commercial.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
