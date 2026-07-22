import type { Metadata } from "next";
import Link from "next/link";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("signes-besoin-logiciel-metier");

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
        alt: "Reconnaître si une entreprise a besoin d’un logiciel métier",
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
      name: "Besoin d’un logiciel métier",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Qu’est-ce qu’un logiciel métier ?",
    answer:
      "Un logiciel métier est un outil conçu autour d’un travail précis de l’entreprise : planifier des interventions, suivre une fabrication, traiter des dossiers ou préparer des devis, par exemple. Il peut être standard, configuré pour votre activité ou développé spécialement. Le terme ne signifie donc pas automatiquement « sur mesure ».",
  },
  {
    question:
      "Combien de signes faut-il réunir avant d’étudier un logiciel métier ?",
    answer:
      "Il n’existe pas de nombre universel. Un seul risque de perte de données ou d’arrêt d’activité peut demander une correction immédiate. À l’inverse, plusieurs petites irritations peuvent ne justifier aucun développement. Regardez la fréquence, les personnes touchées, la conséquence et la stabilité du travail concerné.",
  },
  {
    question: "Un fichier Excel suffit-il encore ?",
    answer:
      "Oui, tant que le fichier reste compréhensible, contrôlé, sauvegardé et adapté au nombre d’utilisateurs. Il devient préoccupant lorsque plusieurs copies circulent, que les droits sont difficiles à gérer, qu’une erreur de formule passe inaperçue ou que l’activité s’arrête si son auteur est absent. Notre guide consacré à Excel détaille cette décision.",
  },
  {
    question: "Faut-il choisir un logiciel standard ou du sur-mesure ?",
    answer:
      "Commencez par comparer les logiciels standards plausibles sur quelques cas réels. Quand un essai est raisonnable, faites-le avec les futurs utilisateurs. S’il exige déjà une migration lourde, demandez plutôt une démonstration préparée à partir de vos cas, des preuves écrites sur les limites et les conditions de sortie. Le sur-mesure mérite une étude lorsque le besoin est stable, important et reste mal couvert après cet examen proportionné.",
  },
  {
    question: "Comment mesurer le temps perdu sans lancer une grande étude ?",
    answer:
      "Notez trois problèmes réellement arrivés. Pour chacun, relevez le temps de travail, le temps d’attente, les personnes interrompues, les corrections et la conséquence pour le client ou l’entreprise. Cette petite observation vaut mieux qu’un seuil générique en heures.",
  },
  {
    question: "Quels signes exigent une action rapide ?",
    answer:
      "Agissez rapidement si une perte de fichier, une absence, un compte partagé ou une panne peut interrompre une activité importante, exposer des données ou empêcher une restauration. La première action sera souvent une sauvegarde isolée et testée, une correction des accès ou une procédure de secours, pas la construction immédiate d’un nouveau logiciel.",
  },
  {
    question: "Faut-il impliquer les salariés avant de choisir un outil ?",
    answer:
      "Oui. Les personnes qui réalisent le travail connaissent les exceptions, les contournements et les informations réellement nécessaires. Faites-leur décrire des situations précises et tester les solutions pressenties. Cela évite d’acheter un outil cohérent sur le papier mais contourné dès la première semaine.",
  },
  {
    question: "Que préparer avant de demander un devis ?",
    answer:
      "Préparez trois situations datées, le résultat attendu, les outils et personnes concernés, les corrections déjà essayées, la fréquence, les conséquences et la solution manuelle de secours. Un prestataire sérieux pourra alors dire s’il faut corriger, automatiser, acheter, étudier du sur-mesure ou attendre.",
  },
];

const decisionPaths = [
  {
    label: "Sécuriser maintenant",
    title: "Un incident peut arrêter l’activité ou exposer des données",
    text: "Corrigez les accès, les sauvegardes et la solution de secours avant de financer de nouvelles fonctions.",
    color:
      "border-rose-200 bg-rose-50/60 dark:border-rose-900 dark:bg-rose-950/20",
    labelColor: "text-rose-700 dark:text-rose-300",
  },
  {
    label: "Corriger l’existant",
    title: "Le bon outil est là, mais mal configuré ou mal utilisé",
    text: "Essayez la configuration, la formation ou une règle de travail plus claire, puis mesurez de nouveau.",
    color:
      "border-amber-200 bg-amber-50/60 dark:border-amber-900 dark:bg-amber-950/20",
    labelColor: "text-amber-700 dark:text-amber-300",
  },
  {
    label: "Automatiser",
    title: "Les outils conviennent, mais la même donnée circule à la main",
    text: "Testez une liaison limitée, avec une alerte et une reprise manuelle en cas d’échec.",
    color:
      "border-blue-200 bg-blue-50/60 dark:border-blue-900 dark:bg-blue-950/20",
    labelColor: "text-blue-700 dark:text-blue-300",
  },
  {
    label: "Acheter un logiciel",
    title: "Une solution standard couvre vos situations réelles",
    text: "Comparez abonnement, configuration, reprise des données, formation, sortie et entretien.",
    color:
      "border-emerald-200 bg-emerald-50/60 dark:border-emerald-900 dark:bg-emerald-950/20",
    labelColor: "text-emerald-700 dark:text-emerald-300",
  },
  {
    label: "Étudier le sur-mesure",
    title:
      "Le besoin est stable, important et mal couvert par les solutions examinées",
    text: "Étudiez une fonction précise et son coût complet sans décider d’avance de construire toute une application.",
    color:
      "border-violet-200 bg-violet-50/60 dark:border-violet-900 dark:bg-violet-950/20",
    labelColor: "text-violet-700 dark:text-violet-300",
  },
  {
    label: "Observer encore",
    title: "Le problème est rare, temporaire ou change chaque semaine",
    text: "Fixez une période d’observation et une date de décision. Ne figez pas trop tôt une mauvaise façon de travailler.",
    color:
      "border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50",
    labelColor: "text-zinc-700 dark:text-zinc-300",
  },
];

function DecisionPaths() {
  return (
    <div className="not-prose my-6 grid gap-3 md:grid-cols-2">
      {decisionPaths.map((path) => (
        <section
          key={path.label}
          className={"rounded-2xl border p-5 " + path.color}
        >
          <p
            className={
              "m-0 text-xs font-extrabold uppercase tracking-[0.13em] " +
              path.labelColor
            }
          >
            {path.label}
          </p>
          <h3 className="mb-0 mt-2 text-base font-bold leading-snug text-zinc-950 dark:text-white">
            {path.title}
          </h3>
          <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            {path.text}
          </p>
        </section>
      ))}
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
          { label: "Besoin d’un logiciel métier" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Un fichier perdu peut-il bloquer une commande ? Vos équipes recopient-elles les mêmes informations ? Partez de situations vécues pour décider s’il faut sécuriser, corriger, automatiser, acheter un outil ou seulement continuer à observer."
        heroAction={{
          href: "#reponse",
          label: "Reconnaître ma situation",
        }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "6 réponses possibles",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "3 situations à documenter",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Urgences à sécuriser",
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
            href: "/guides/automatiser-processus-metier",
            label: "Choisir un processus à automatiser",
          },
          {
            href: "/guides/transformer-excel-en-application",
            label: "Savoir quand remplacer Excel",
          },
          {
            href: "/guides/erp-ou-logiciel-sur-mesure",
            label: "Comparer ERP et logiciel sur mesure",
          },
          {
            href: "/guides/calculer-roi-application-metier",
            label: "Calculer le ROI d’une application métier",
          },
          {
            href: "/guides/cahier-des-charges-application-metier",
            label: "Préparer un cahier des charges métier",
          },
        ]}
        faqTitle="Logiciel métier : les questions avant de décider"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          Votre entreprise a grandi, mais une commande, une intervention ou une
          facture dépend encore d’un fichier, d’une boîte mail ou de la mémoire
          d’une personne. Les équipes recopient, les clients attendent et vous
          ne savez pas toujours quelle version est la bonne. Est-ce le moment de
          faire développer un logiciel métier ? <strong>Peut-être.</strong> Ces
          signes signalent d’abord que votre façon de travailler doit être
          examinée, pas que le sur-mesure est la bonne réponse. Si une absence,
          une suppression ou un mauvais droit d’accès peuvent arrêter
          l’activité, sécurisez ce risque maintenant. Sinon, partez de trois
          problèmes réellement arrivés et comparez six réponses, de la
          correction simple à l’étude d’une fonction sur mesure.
        </p>

        <p>
          Un <strong>logiciel métier</strong> est un outil consacré à un travail
          précis de votre entreprise : planifier les interventions, suivre les
          commandes, préparer les devis ou traiter les dossiers, par exemple. Il
          peut être standard, configuré ou développé spécialement. Dans ce
          guide, vous n’allez donc pas compter des « signes » pour obtenir un
          verdict automatique. Vous allez déterminer la prochaine action utile.
        </p>

        <h2 id="reponse">
          La réponse courte : six options avant de choisir un développement
        </h2>

        <DecisionPaths />

        <GuideToc
          items={[
            {
              id: "probleme-solution",
              label: "1. Un problème d’outil n’impose pas le sur-mesure",
            },
            {
              id: "securiser",
              label: "2. Sécuriser ce qui peut arrêter l’entreprise",
            },
            {
              id: "observer",
              label: "3. Observer le temps et les conséquences",
            },
            {
              id: "contournements",
              label: "4. Comprendre les outils parallèles",
            },
            {
              id: "vrai-probleme",
              label: "5. Vérifier si le logiciel est vraiment en cause",
            },
            {
              id: "six-reponses",
              label: "6. Choisir la première réponse à examiner",
            },
            {
              id: "trois-situations",
              label: "7. Documenter trois situations réelles",
            },
            {
              id: "sur-mesure",
              label: "8. Savoir quand étudier le sur-mesure",
            },
            {
              id: "prochaine-decision",
              label: "9. Écrire la prochaine décision",
            },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="probleme-solution">
          1. Un problème d’outil ne signifie pas encore qu’il faut du sur-mesure
        </h2>

        <p>
          Une information recopiée trois fois est un problème. Un fichier que
          personne n’ose toucher est un problème. Un client qui attend parce que
          son dossier se trouve dans la boîte mail d’un salarié absent est aussi
          un problème. Aucun de ces constats ne choisit encore la solution.
        </p>

        <p>
          Vous pourriez supprimer une étape, mieux configurer un logiciel déjà
          payé, relier deux outils, adopter une solution standard ou développer
          une seule fonction. Vous pourriez aussi décider que la gêne coûte
          moins cher que le changement. Cette dernière réponse n’est pas un
          échec : elle devient raisonnable dès lors qu’elle repose sur des faits
          et sur une nouvelle date d’examen.
        </p>

        <InfoBox
          variant="blue"
          title="Le bon diagnostic commence par un événement, pas par un outil"
        >
          Remplacez « il nous faut un logiciel central de gestion, un ERP » par
          une situation observable : « mardi, deux personnes ont passé trois
          heures à retrouver la dernière version d’une commande et le client a
          reçu son devis un jour plus tard ». Vous pourrez discuter de cette
          situation avec l’équipe et tester plusieurs réponses. Le nom d’un
          logiciel, lui, enferme déjà la discussion.
        </InfoBox>

        <h2 id="securiser">
          2. Sécurisez d’abord ce qui peut arrêter l’entreprise
        </h2>

        <p>
          Certains signes ne doivent pas attendre un futur projet. Si la
          disparition d’un tableur, l’absence d’une personne ou la panne d’un
          ordinateur bloque les commandes, la paie ou les interventions,
          préparez immédiatement une sauvegarde restaurable, isolée du système
          principal, et une façon temporaire de travailler. Puis testez
          réellement la restauration : voir un fichier de sauvegarde ne prouve
          pas que vous savez le remettre en service.
        </p>

        <p>
          Pour les données personnelles, la{" "}
          <a
            href="https://www.cnil.fr/fr/securite-sauvegarder"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL recommande des sauvegardes régulières et testées
          </a>
          , dont au moins une hors ligne et au moins une conservée sur un site
          géographiquement distinct, ainsi qu’une{" "}
          <a
            href="https://www.cnil.fr/fr/securite-prevoir-la-continuite-et-la-reprise-dactivite"
            target="_blank"
            rel="noopener noreferrer"
          >
            organisation permettant de poursuivre ou de reprendre l’activité
          </a>
          . Ces recommandations ne disent pas qu’il faut construire une
          application. Elles disent que le risque existe déjà et doit être
          traité.
        </p>

        <p>Agissez sans attendre si vous constatez l’un de ces cas :</p>

        <ul>
          <li>
            un seul fichier ou ordinateur contient une information irremplaçable
            ;
          </li>
          <li>
            les comptes sont partagés ou d’anciens salariés conservent des accès
            ;
          </li>
          <li>personne ne sait restaurer la dernière version utile ;</li>
          <li>
            une validation ayant un effet financier, contractuel ou
            réglementaire ne laisse aucune trace compréhensible ;
          </li>
          <li>
            le travail ne peut pas continuer, même temporairement, pendant une
            panne.
          </li>
        </ul>

        <p>
          La{" "}
          <a
            href="https://www.cnil.fr/fr/securite-gerer-les-habilitations"
            target="_blank"
            rel="noopener noreferrer"
          >
            gestion des droits selon le besoin réel de chaque personne
          </a>{" "}
          fait partie des recommandations de la CNIL pour les données
          personnelles. Commencez donc par reprendre les accès et nommer un
          responsable. Si vous soupçonnez une intrusion ou une fuite en cours,
          faites intervenir un spécialiste de la réponse à incident ; ce guide
          n’est pas une procédure d’urgence cyber.
        </p>

        <h2 id="observer">
          3. Observez ce qui fait réellement perdre du temps ou des clients
        </h2>

        <p>
          Ne demandez pas à l’équipe combien d’heures elle « pense » perdre par
          an. Choisissez une semaine représentative et notez les événements
          lorsqu’ils arrivent. Pour une clôture mensuelle, observez le cycle
          complet. Comptez séparément le temps passé à travailler et le temps
          pendant lequel le dossier attend une information ou une validation.
        </p>

        <p>Pour chaque problème, relevez :</p>

        <ul>
          <li>la fréquence et les personnes concernées ;</li>
          <li>le temps actif, l’attente et les interruptions ;</li>
          <li>les ressaisies, recherches de version et corrections ;</li>
          <li>le retard, l’erreur, la perte ou l’insatisfaction produite ;</li>
          <li>la solution de secours réellement utilisée ;</li>
          <li>la règle métier qui aurait permis d’éviter le problème.</li>
        </ul>

        <p>
          Le dossier{" "}
          <a
            href="https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution"
            target="_blank"
            rel="noopener noreferrer"
          >
            France Num consacré à l’automatisation
          </a>{" "}
          propose notamment d’observer la fréquence, la durée, le nombre de
          personnes et l’effet d’une erreur, puis de décrire les étapes, les
          informations et les exceptions. Nous reprenons cette logique comme
          méthode d’observation, sans reprendre ses exemples chiffrés comme
          promesse de gain.
        </p>

        <InfoBox variant="amber" title="Il n’existe pas de seuil magique">
          Dix heures perdues sur une procédure qui change chaque semaine ne
          justifient pas forcément de la figer dans un logiciel. Trente minutes
          sur une validation financière critique peuvent, au contraire, mériter
          une correction immédiate. Fréquence, conséquence et stabilité comptent
          ensemble ; aucune moyenne ne doit masquer un risque important.
        </InfoBox>

        <h2 id="contournements">
          4. Regardez pourquoi l’équipe contourne les outils officiels
        </h2>

        <p>
          Lorsqu’un logiciel commercial (CRM), un logiciel central de gestion
          (ERP) ou un outil de planning ne répond pas au travail quotidien, les
          équipes fabriquent une seconde organisation : tableur personnel, notes
          papier, groupe de messages, dossier sur le bureau ou colonne «
          commentaires » détournée. Ne traitez pas ces contournements comme une
          simple résistance au changement. Ils peuvent révéler qu’une
          information manque, qu’une exception est mal traitée ou qu’une étape
          impose une attente disproportionnée.
        </p>

        <p>
          Demandez à la personne de vous montrer le dernier cas, écran par
          écran, sans lui demander d’abord la solution. Où reçoit-elle
          l’information ? Que copie-t-elle ? À qui demande-t-elle confirmation ?
          Comment sait-elle que le travail est terminé ? Que fait-elle si un
          client rappelle deux jours plus tard ? Les réponses distinguent quatre
          problèmes très différents :
        </p>

        <ul>
          <li>la fonction existe mais personne ne la connaît ;</li>
          <li>la fonction existe mais sa configuration ne correspond pas ;</li>
          <li>deux outils utiles ne communiquent pas ;</li>
          <li>le besoin essentiel n’est couvert par aucun outil actuel.</li>
        </ul>

        <p>
          <strong>Exemple illustratif fictif.</strong> Une équipe tient un
          tableur à côté de son logiciel de gestion parce qu’elle doit promettre
          une date au client avant que le planning officiel soit validé. Ajouter
          un nouveau planning ne résout rien tant que l’entreprise n’a pas
          décidé qui peut réserver provisoirement un créneau, combien de temps
          et avec quelle information. Ici, la première correction concerne la
          règle de travail ; le logiciel viendra éventuellement ensuite.
        </p>

        <h2 id="vrai-probleme">
          5. Vérifiez si le logiciel est vraiment la cause du blocage
        </h2>

        <p>
          Avant de développer, essayez les corrections les moins coûteuses sur
          les trois situations observées. Le{" "}
          <a
            href="https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/"
            target="_blank"
            rel="noopener noreferrer"
          >
            référentiel public d’écoconception des services numériques
          </a>{" "}
          demande d’examiner le besoin et les solutions existantes avant de
          créer un nouveau service. Ce n’est pas une règle financière pour votre
          entreprise, mais c’est une bonne discipline : un outil neuf crée aussi
          de l’hébergement, de la formation, de l’entretien et une future
          sortie.
        </p>

        <p>Écartez au minimum ces faux signaux :</p>

        <ul>
          <li>un pic temporaire qui ne reviendra pas ;</li>
          <li>
            une procédure dont les règles changent encore chaque semaine ;
          </li>
          <li>une responsabilité que personne n’accepte de trancher ;</li>
          <li>
            un logiciel existant jamais configuré ni essayé sur les vrais cas ;
          </li>
          <li>un manque de formation ou de donnée obligatoire ;</li>
          <li>
            une envie de « mettre de l’IA » sans résultat précis à produire.
          </li>
        </ul>

        <p>
          Évaluez les solutions standards plausibles avec les personnes qui
          feront réellement le travail. Si un essai est proportionné, rejouez
          une commande compliquée, une annulation, un doublon, une absence et
          une exportation des données. Si cet essai imposerait déjà une reprise
          lourde, préparez ces mêmes cas pour une démonstration, exigez des
          réponses écrites sur les limites et vérifiez les conditions de sortie.
          Le prix de l’abonnement compte, mais aussi la configuration, la
          formation, les limites, la reprise des données et la possibilité de
          partir.
        </p>

        <p>
          Cette démarche reprend une bonne pratique de{" "}
          <a
            href="https://design.numerique.gouv.fr/bien-concevoir/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DesignGouv : partir du besoin et tester avec de vrais utilisateurs
          </a>
          . Elle est formulée pour les services publics numériques ; nous
          l’utilisons ici comme discipline de conception, pas comme obligation
          imposée à votre entreprise.
        </p>

        <h2 id="six-reponses">
          6. Choisissez la première réponse à examiner dans votre situation
        </h2>

        <p>
          Revenez aux six réponses présentées au début. Elles ne forment pas une
          échelle où le sur-mesure serait le niveau le plus avancé. Elles
          répondent à des causes différentes. Une sauvegarde testée peut être la
          meilleure décision d’une entreprise complexe ; attendre peut être la
          meilleure décision d’une jeune activité dont les règles changent.
        </p>

        <p>
          Commencez par le risque : une activité qui peut s’arrêter ou des
          données qui peuvent être exposées passent avant le confort. Sans
          urgence, cherchez ensuite la plus petite vérification utile. Une
          configuration peut-elle résoudre le dernier cas ? Une liaison entre
          deux outils supprimerait-elle la ressaisie ? Un logiciel existant
          sait-il traiter vos exceptions ?
        </p>

        <p>
          Si la réponse reste incertaine, observez encore. Si plusieurs actions
          sont nécessaires, prenez d’abord celle qui réduit le risque le plus
          grave ou apporte une preuve au moindre coût. Vous évitez ainsi de
          construire une fonction avant d’avoir compris pourquoi elle manque.
        </p>

        <h2 id="trois-situations">
          7. Notez trois situations réelles avant de demander un devis
        </h2>

        <p>
          Commencez par trois situations pour ouvrir une discussion sérieuse,
          pas pour décider définitivement. Choisissez un cas ordinaire, un cas
          compliqué et un cas qui a produit une conséquence importante. Copiez
          la fiche ci-dessous pour chacun.
        </p>

        <FormulaBox>
          {[
            "FICHE D’UNE SITUATION RÉELLE",
            "",
            "Date et travail à accomplir :",
            "Résultat attendu :",
            "Ce qui s’est réellement passé :",
            "Outils, fichiers et personnes concernés :",
            "Temps de travail et temps d’attente :",
            "Erreur, retard, perte, mécontentement ou risque produit :",
            "Contournement employé :",
            "Correction déjà essayée dans l’outil actuel :",
            "Solution standard comparée, démontrée ou essayée, et résultat :",
            "La règle métier est-elle stable ?",
            "Solution manuelle disponible en cas de panne :",
          ].join("\n")}
        </FormulaBox>

        <p>
          Relisez ensuite les trois fiches. Si le même manque revient avec une
          règle stable, vous tenez peut-être un besoin à traiter. Si chaque
          incident possède une cause différente, ne les regroupez pas sous un
          grand « projet de transformation ». Corrigez chaque cause ou
          poursuivez l’observation.
        </p>

        <p>
          Cette fiche prépare aussi la suite : vous pourrez calculer le{" "}
          <Link href="/guides/calculer-roi-application-metier">
            retour sur investissement d’une application métier
          </Link>{" "}
          avec des données réelles, puis rédiger un{" "}
          <Link href="/guides/cahier-des-charges-application-metier">
            cahier des charges compréhensible
          </Link>{" "}
          seulement si le projet mérite d’être étudié.
        </p>

        <p>
          Si vos trois situations concernent des techniciens, des rendez-vous,
          des comptes rendus et une ressaisie avant facturation, suivez plutôt{" "}
          <Link href="/guides/application-gestion-interventions-terrain">
            une intervention complète du bureau jusqu’au terrain
          </Link>
          . Vous pourrez tester un logiciel existant sur les mêmes cas avant de
          conclure qu’une application adaptée est nécessaire.
        </p>

        <h2 id="sur-mesure">
          8. Vérifiez six points avant d’étudier le sur-mesure
        </h2>

        <p>
          Étudier le sur-mesure ne signifie pas signer son développement. Cela
          signifie vérifier si une fonction propre à votre entreprise peut créer
          plus de valeur qu’elle n’en coûte à construire et à entretenir. Les
          six points suivants ne forment ni un score ni des conditions
          réglementaires : ils montrent surtout ce qui reste à prouver avant
          d’engager un budget.
        </p>

        <ol>
          <li>le problème revient et produit une conséquence mesurable ;</li>
          <li>la règle principale est assez stable pour être expliquée ;</li>
          <li>
            les personnes concernées ont décrit et testé leurs vrais cas ;
          </li>
          <li>la correction de l’existant n’a pas suffi ;</li>
          <li>
            les solutions standards plausibles ont été raisonnablement examinées
            et leur manque est précis ;
          </li>
          <li>
            une personne de l’entreprise peut décider, suivre le résultat et
            prévoir l’entretien.
          </li>
        </ol>

        <p>
          À ce stade, ne demandez pas « combien coûte une application qui fait
          tout ? ». Demandez d’abord le coût d’une réponse limitée au problème
          prouvé. Comparez-la avec un{" "}
          <Link href="/guides/erp-ou-logiciel-sur-mesure">
            ERP, un logiciel standard configuré ou un développement sur mesure
          </Link>
          . Intégrez la reprise des données, les connexions, la formation, la
          maintenance et la sortie ; le prix de construction seul ne suffit pas.
        </p>

        <InfoBox
          variant="emerald"
          title="Le bon résultat peut être de ne rien développer"
        >
          Un diagnostic professionnel peut recommander une meilleure
          configuration, un connecteur, une solution standard ou une procédure
          de secours. Cette conclusion vous fait économiser un projet inutile et
          ne doit pas être considérée comme une occasion commerciale perdue.
        </InfoBox>

        <h2 id="prochaine-decision">
          9. Votre prochaine décision doit tenir en une phrase
        </h2>

        <p>
          Terminez votre analyse sans jargon. Une phrase complète ressemble à
          ceci :
        </p>

        <FormulaBox>
          {[
            "Avant le [date], nous allons [sécuriser / corriger / tester / comparer / observer]",
            "sur [situation précise], parce que [conséquence observée].",
            "Nous jugerons le résultat avec [mesure] et, si cela ne fonctionne pas,",
            "nous examinerons ensuite [réponse suivante].",
          ].join("\n")}
        </FormulaBox>

        <p>
          Si vous ne pouvez pas compléter la situation, la conséquence ou la
          mesure, continuez à observer. Si vous le pouvez, vous êtes prêt à
          demander un avis sans laisser le prestataire choisir le problème à
          votre place.
        </p>

        <p>
          Hagnéré Code conçoit des{" "}
          <Link href="/services/outils-internes-sur-mesure">
            outils internes et applications métier
          </Link>
          , mais une première analyse peut parfaitement conclure qu’une
          correction ou un logiciel standard suffit.
        </p>

        <GuideInlineCTA
          title="Faire examiner trois situations réelles"
          description="Décrivez trois blocages vécus, les outils concernés et ce que vous avez déjà essayé. Hagnéré Code cherche à vous répondre le jour ouvré qui suit, sans garantir ce délai, et peut recommander une correction, une automatisation, un logiciel standard, une étude sur mesure ou l’attente."
          tags={[
            "Aucun développement présumé",
            "Première action expliquée",
            "Vous restez libre de poursuivre ou non",
          ]}
          ctaLabel="Présenter mes trois situations"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="sources">Sources et limites</h2>

        <p>
          Sources consultées le 21 juillet 2026. Elles soutiennent la méthode
          d’observation et les alertes de sécurité ; elles ne déterminent pas à
          votre place le besoin d’un logiciel et ne prouvent aucun gain futur.
          Les recommandations CNIL citées concernent la protection des données
          personnelles. Ce guide n’est ni un audit de sécurité, ni un avis
          juridique, ni un devis.
        </p>

        <ul>
          <li>
            <a
              href="https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution"
              target="_blank"
              rel="noopener noreferrer"
            >
              France Num — Automatiser les tâches et processus d’une TPE-PME
            </a>{" "}
            : observation, choix, cartographie, test et entretien.
          </li>
          <li>
            <a
              href="https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Référentiel général d’écoconception des services numériques 2024
            </a>{" "}
            : examen du besoin et des solutions existantes.
          </li>
          <li>
            <a
              href="https://design.numerique.gouv.fr/bien-concevoir/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DesignGouv — Bien concevoir un service numérique
            </a>{" "}
            : partir des besoins, rencontrer les utilisateurs et tester.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/securite-gerer-les-habilitations"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Gérer les habilitations
            </a>{" "}
            : accès justifiés, retirés et contrôlés.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/securite-sauvegarder"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Sauvegarder
            </a>{" "}
            et{" "}
            <a
              href="https://www.cnil.fr/fr/securite-prevoir-la-continuite-et-la-reprise-dactivite"
              target="_blank"
              rel="noopener noreferrer"
            >
              prévoir la continuité et la reprise d’activité
            </a>
            .
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
