import type { Metadata } from "next";
import Link from "next/link";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("automatiser-processus-metier");

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
        alt: "Choisir le premier processus à automatiser dans son entreprise",
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
      name: "Automatiser un processus métier",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Quel processus faut-il automatiser en premier ?",
    answer:
      "Commencez par une tâche fréquente, stable, mesurable et facile à reprendre à la main si quelque chose se passe mal. Une ressaisie entre deux logiciels, la préparation d’un document ou l’orientation de demandes simples constituent souvent de bons premiers essais. Une décision commerciale exceptionnelle, un paiement ou un planning rempli de cas particuliers sont de moins bons candidats.",
  },
  {
    question: "Faut-il forcément développer un logiciel sur mesure ?",
    answer:
      "Non. Vérifiez d’abord si vous pouvez supprimer une étape, mieux utiliser un logiciel déjà payé ou activer une fonction existante. Un connecteur entre deux outils peut ensuite suffire. Le développement sur mesure devient pertinent lorsque plusieurs rôles, règles propres à l’entreprise ou intégrations importantes ne sont pas correctement couverts par une solution standard.",
  },
  {
    question:
      "L’intelligence artificielle est-elle nécessaire pour automatiser ?",
    answer:
      "Non. Une règle classique est souvent plus fiable lorsque les données et la décision sont claires. L’intelligence artificielle peut aider à classer un message, extraire une information d’un document ou préparer un brouillon. Sa réponse n’étant pas certaine à chaque fois, prévoyez un contrôle humain lorsque l’erreur peut avoir une conséquence commerciale, financière ou juridique.",
  },
  {
    question: "Comment calculer si une automatisation sera rentable ?",
    answer:
      "Mesurez le nombre de cas, le temps réellement passé et les corrections pendant une période représentative. Valorisez seulement le temps qui pourra réellement être réaffecté à une activité utile ou la dépense qui sera effectivement évitée. Comparez ce bénéfice au coût de mise en place, aux abonnements, au suivi, à la maintenance, au temps de vos équipes et au coût de sortie sur la même durée.",
  },
  {
    question: "Combien de temps faut-il pour automatiser un processus ?",
    answer:
      "Il n’existe pas de délai sérieux sans connaître les règles, les logiciels à connecter et les exceptions. Un premier essai limité peut être planifié après une courte observation, puis chiffré avec ses étapes : préparation, connexion, test avec des cas réels, correction et mise en service. Demandez toujours un calendrier lié à ces résultats, pas seulement une date finale.",
  },
  {
    question: "Qui doit s’occuper de l’automatisation après son lancement ?",
    answer:
      "Une personne de l’entreprise doit rester responsable de la règle métier et une autre, parfois la même dans une petite structure, doit recevoir les alertes et traiter les échecs. Le prestataire peut surveiller et maintenir la partie technique selon le contrat. Les utilisateurs doivent savoir reconnaître un cas bloqué et revenir temporairement au traitement manuel.",
  },
  {
    question: "Comment éviter qu’une erreur soit répétée automatiquement ?",
    answer:
      "Testez les champs manquants, les doublons, les droits insuffisants, les logiciels indisponibles et la reprise après une panne. Chaque cas doit avoir un identifiant, laisser une trace compréhensible et rejoindre une liste de traitement manuel s’il échoue. Ajoutez une validation humaine avant toute action difficile à annuler.",
  },
];

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
          { label: "Automatiser un processus métier" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous perdez du temps à recopier des informations, préparer les mêmes documents ou relancer des dossiers ? Ce guide vous aide à choisir une première tâche à automatiser, à comparer les solutions possibles et à vérifier la rentabilité avant d’investir."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "Une tâche simple à choisir",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "6 solutions à comparer",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Un calcul de rentabilité complet",
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
            href: "/guides/signes-besoin-logiciel-metier",
            label: "Vérifier si l’entreprise a besoin d’un logiciel métier",
          },
          {
            href: "/guides/transformer-excel-en-application",
            label: "Transformer Excel en application",
          },
          {
            href: "/guides/no-code-ou-sur-mesure",
            label: "No-code ou développement sur mesure",
          },
          {
            href: "/guides/cahier-des-charges-application-metier",
            label: "Cahier des charges d’une application métier",
          },
          {
            href: "/guides/prix-logiciel-sur-mesure",
            label: "Prix d’un logiciel sur mesure",
          },
          {
            href: "/services/outils-internes-sur-mesure",
            label: "Développement d’outils internes",
          },
        ]}
        faqTitle="Automatiser un processus : les questions fréquentes"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          Vous voyez peut-être la même information passer d’un courriel à un
          tableur, puis du tableur à votre logiciel de facturation. Vos équipes
          y consacrent du temps, oublient parfois une étape et vous demandent
          s’il faut « automatiser tout cela ».{" "}
          <strong>La réponse courte :</strong> commencez par une seule tâche
          fréquente, dont les règles changent peu et dont une erreur reste
          facile à repérer. Une automatisation est simplement un logiciel qui
          exécute une suite d’actions à votre place. Elle peut tenir dans une
          fonction déjà présente dans vos outils ; elle ne nécessite pas
          forcément une nouvelle application ni de l’intelligence artificielle.
        </p>

        <p>
          Dans ce guide, vous allez choisir un premier cas utile, comparer six
          réponses — y compris simplifier le travail ou ne rien développer —,
          calculer le coût complet et préparer un essai limité. L’objectif est
          que vous puissiez prendre une décision compréhensible par la direction
          comme par les personnes qui réalisent le travail chaque jour.
        </p>

        <InfoBox variant="blue" title="La réponse en une minute">
          Une bonne première automatisation réunit quatre qualités : elle
          revient souvent, son résultat est facile à vérifier, ses règles sont
          déjà comprises et l’équipe peut reprendre la main en cas de problème.
          Si l’une de ces conditions manque, commencez par simplifier ou
          observer le travail au lieu d’acheter immédiatement un outil.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "definition",
              label: "1. Ce que vous automatisez réellement",
            },
            {
              id: "observation",
              label: "2. Mesurer le travail pendant une semaine",
            },
            { id: "matrice", label: "3. Choisir le meilleur premier candidat" },
            { id: "options", label: "4. Comparer six réponses possibles" },
            {
              id: "techniques",
              label: "5. Comprendre les solutions proposées",
            },
            { id: "roi", label: "6. Calculer le coût et le gain réalistes" },
            { id: "responsabilites", label: "7. Répartir les responsabilités" },
            { id: "pilote-recette", label: "8. Tester avant de généraliser" },
            { id: "cas-inadaptes", label: "9. Savoir quand attendre" },
            { id: "plan-sept-jours", label: "10. Décider en sept jours" },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="definition">1. Ce que vous automatisez réellement</h2>

        <p>
          Ne partez pas du nom d’un outil. Partez du résultat que vous voulez
          obtenir. Par exemple : « lorsqu’un devis est signé, créer le client
          dans la facturation, transmettre les bonnes coordonnées et prévenir la
          comptabilité si une information manque ». Cette phrase montre le
          début, la fin, les données et la personne qui intervient lorsque le
          cas n’est pas normal.
        </p>

        <p>
          Un <strong>processus métier</strong> est simplement cette suite
          d’étapes, depuis un événement de départ jusqu’à un résultat utile pour
          l’entreprise. Une tâche n’en est qu’une partie. Automatiser l’envoi
          d’un courriel sans préciser qui doit le recevoir, avec quelles données
          et dans quels cas il ne faut pas l’envoyer peut faire gagner quelques
          secondes tout en créant de nouveaux problèmes.
        </p>

        <ul>
          <li>
            « Mettre de l’IA dans les devis » devient : préparer un brouillon à
            partir d’une demande complète, puis faire valider le prix par le
            responsable.
          </li>
          <li>
            « Connecter le commercial à la comptabilité » devient : créer une
            seule fois le client signé et signaler clairement toute donnée
            refusée.
          </li>
          <li>
            « Automatiser les relances » devient : relancer les dossiers
            incomplets, arrêter dès réception et confier les litiges à une
            personne.
          </li>
        </ul>

        <h2 id="observation">2. Mesurer le travail pendant une semaine</h2>

        <p>
          Demandez aux personnes concernées de noter chaque occurrence pendant
          une semaine représentative : heure de départ, temps réellement passé,
          attente, correction, personne sollicitée et résultat. Pour une tâche
          mensuelle, observez aussi une clôture complète. Cette mesure évite de
          décider à partir d’un souvenir ou de l’agacement du jour.
        </p>

        <p>
          <a
            href="https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution"
            target="_blank"
            rel="noreferrer"
          >
            France Num
          </a>{" "}
          recommande de décrire les étapes, les informations, les exceptions et
          les personnes impliquées avant d’automatiser. Cette observation révèle
          parfois une solution plus simple : supprimer une double validation,
          rendre un champ obligatoire ou ranger un document au même endroit pour
          tout le monde.
        </p>

        <FormulaBox>
          {[
            "FICHE SIMPLE POUR UNE TÂCHE",
            "",
            "Ce qui déclenche le travail :",
            "Résultat attendu :",
            "Nombre de cas par semaine ou par mois :",
            "Temps actif et temps d’attente :",
            "Logiciels et documents utilisés :",
            "Étapes normales :",
            "Trois exceptions les plus fréquentes :",
            "Conséquence d’une erreur :",
            "Personne qui décide en cas de doute :",
            "Solution manuelle si l’outil ne fonctionne plus :",
            "Indicateur à comparer avant et après :",
          ].join("\n")}
        </FormulaBox>

        <InfoBox
          variant="emerald"
          title="Testez d’abord la solution sans logiciel"
        >
          Supprimez les saisies inutiles, choisissez une seule source pour
          chaque donnée et clarifiez qui valide quoi. Mesurez de nouveau. Si le
          problème a disparu, vous avez obtenu le résultat le plus économique :
          moins de travail, sans nouvel outil à payer ni à maintenir.
        </InfoBox>

        <h2 id="matrice">
          3. Choisir le premier cas et la réponse la plus simple
        </h2>

        <p>
          Parmi les tâches observées, retenez celle qui obtient le plus de « oui
          » aux questions suivantes. Il ne s’agit pas de fabriquer une note
          savante, mais de vérifier que le premier essai sera utile et
          maîtrisable.
        </p>

        <GuideTable
          caption="Les trois questions qui permettent de choisir"
          headers={["Question", "Bon signe", "Signe qu’il faut attendre"]}
          rows={[
            [
              "Le gain est-il visible ?",
              "La tâche revient souvent et le temps ou les erreurs sont mesurés",
              "Elle est rare ou son bénéfice reste une impression",
            ],
            [
              "Les règles sont-elles stables ?",
              "Le déroulement normal et les principales exceptions sont connus",
              "Chaque dossier se négocie différemment",
            ],
            [
              "Une erreur est-elle maîtrisable ?",
              "Elle se voit vite, se corrige et le traitement manuel reste possible",
              "Elle déclenche une action coûteuse ou impossible à annuler",
            ],
          ]}
        />

        <h3>Un premier essai sans risque commercial</h3>

        <p>
          <strong>Exemple illustratif fictif.</strong> Une entreprise compare
          cinq irritants. L’envoi d’un accusé de réception pour les demandes
          complètes est un bon premier essai : le volume est connu, les règles
          sont simples et les demandes ambiguës peuvent rester dans une liste
          traitée par une personne. Accorder automatiquement une remise
          exceptionnelle serait au contraire prématuré, car la décision dépend
          encore du contexte commercial.
        </p>

        <GuideTable
          caption="Lecture simple de cinq tâches fictives"
          headers={["Tâche observée", "Décision raisonnable", "Pourquoi"]}
          rows={[
            [
              "Orienter les demandes complètes",
              "Tester en premier",
              "Fréquent, vérifiable et facile à reprendre à la main",
            ],
            [
              "Recopier un client signé vers la facturation",
              "Tester après contrôle des doublons",
              "Gain clair, mais une erreur touche la comptabilité",
            ],
            [
              "Préparer le rapport mensuel",
              "Vérifier les fonctions existantes",
              "Une source unique peut suffire sans nouveau développement",
            ],
            [
              "Accorder une remise exceptionnelle",
              "Garder la décision humaine",
              "La règle change selon la relation commerciale",
            ],
            [
              "Replanifier toutes les urgences terrain",
              "Clarifier d’abord les priorités",
              "Trop d’exceptions pour un premier essai",
            ],
          ]}
        />

        <h3 id="options">4. Comparer six réponses possibles</h3>

        <p>
          Une fois la tâche comprise, comparez les solutions sur le même besoin.
          La meilleure n’est pas la plus impressionnante : c’est la plus simple
          qui produit durablement le résultat attendu.
        </p>

        <GuideTable
          caption="Six façons de répondre au même besoin"
          headers={["Réponse", "Quand elle convient", "Ce qu’il faut vérifier"]}
          rows={[
            [
              "Ne rien changer pour l’instant",
              "Le gain est faible ou les règles bougent encore",
              "La date à laquelle vous réexaminerez le sujet",
            ],
            [
              "Supprimer ou simplifier une étape",
              "La difficulté vient d’une habitude ou d’une mauvaise saisie",
              "Qu’aucun contrôle réellement utile ne disparaît",
            ],
            [
              "Utiliser une fonction déjà disponible",
              "Votre logiciel couvre le cas sans contournement important",
              "Le prix du forfait, les droits et l’export des données",
            ],
            [
              "Relier deux outils",
              "Les règles sont claires et les logiciels peuvent échanger",
              "Les rejets, doublons, alertes et limites d’utilisation",
            ],
            [
              "Préparer automatiquement, puis faire valider",
              "Le logiciel peut assister sans prendre la décision finale",
              "Le délai de validation et la possibilité de corriger",
            ],
            [
              "Créer un outil sur mesure",
              "Plusieurs rôles et règles propres ne sont pas couverts ailleurs",
              "Le coût complet, la maintenance, les accès et la reprise",
            ],
          ]}
        />

        <p>
          Si le problème vient d’un tableur devenu central, poursuivez avec le
          guide{" "}
          <Link href="/guides/transformer-excel-en-application">
            transformer Excel en application métier
          </Link>
          . Si vous hésitez entre une plateforme visuelle et un développement,
          consultez{" "}
          <Link href="/guides/no-code-ou-sur-mesure">
            no-code ou sur mesure
          </Link>
          .
        </p>

        <h3 id="techniques">5. Comprendre les solutions proposées</h3>

        <p>
          Une <strong>API</strong> est un accès prévu par un logiciel pour
          échanger des données avec un autre. Un <strong>connecteur</strong> est
          une liaison déjà préparée entre deux outils. Un robot de clics,
          parfois appelé RPA, reproduit les gestes d’une personne sur un écran
          lorsque le logiciel ne propose pas d’accès direct. L’intelligence
          artificielle sert plutôt à traiter une information variable, comme le
          texte d’un courriel ou d’un document.
        </p>

        <ul>
          <li>
            <strong>Règle classique :</strong> demandez ce qui se passe dans
            chaque cas limite.
          </li>
          <li>
            <strong>API ou connecteur :</strong> demandez comment un rejet ou un
            doublon sera signalé.
          </li>
          <li>
            <strong>Robot de clics :</strong> demandez qui intervient lorsque
            l’écran du logiciel change.
          </li>
          <li>
            <strong>Intelligence artificielle :</strong> demandez sur quels
            exemples réels sa qualité sera vérifiée.
          </li>
          <li>
            <strong>Développement sur mesure :</strong> demandez comment
            récupérer le code, les données et la documentation.
          </li>
        </ul>

        <InfoBox
          variant="amber"
          title="Certaines décisions doivent rester humaines"
        >
          La{" "}
          <a
            href="https://www.cnil.fr/fr/profilage-et-decision-entierement-automatisee"
            target="_blank"
            rel="noreferrer"
          >
            CNIL
          </a>{" "}
          explique que le RGPD encadre certaines décisions entièrement
          automatisées qui produisent un effet juridique ou affectent fortement
          une personne. Cela ne concerne pas chaque automatisation interne, mais
          justifie une analyse spécifique avant d’automatiser un refus, un
          recrutement, un tarif individuel ou une décision comparable. Ce guide
          ne remplace pas un conseil juridique appliqué à votre situation.
        </InfoBox>

        <h2 id="roi">6. Calculer le coût et le gain réalistes</h2>

        <p>
          Le temps « gagné » ne devient pas automatiquement une économie. Il
          crée de la valeur s’il permet de traiter davantage de dossiers,
          d’éviter une dépense ou de consacrer les heures libérées à une
          activité utile. Retenez donc une part prudente du temps mesuré, puis
          additionnez tous les coûts : préparation, réalisation, abonnement,
          suivi, maintenance, temps de vos équipes et sortie éventuelle.
        </p>

        <FormulaBox>
          {[
            "Temps annuel = volume × durée par cas × nombre de périodes",
            "",
            "Bénéfice annuel = temps réellement réaffecté × coût horaire réel",
            "",
            "Coût sur la période = préparation + réalisation + temps interne",
            "                     + abonnements + suivi + maintenance + sortie",
            "",
            "ROI = (bénéfices cumulés - coût) / coût × 100",
          ].join("\n")}
        </FormulaBox>

        <h3>Ce que change une hypothèse prudente</h3>

        <p>
          <strong>Exemple illustratif fictif.</strong> Une PME de services de 18
          salariés traite 30 demandes par semaine. Chaque demande prend 12
          minutes, auxquelles s’ajoute 1 h 30 de rapprochement hebdomadaire,
          pendant 46 semaines. Le travail représente donc 345 heures par an.
        </p>

        <p>
          Pour rendre le calcul reproductible, l’exemple utilise 44,20 € par
          heure. L’
          <a
            href="https://www.insee.fr/fr/statistiques/2381340"
            target="_blank"
            rel="noreferrer"
          >
            Insee
          </a>{" "}
          estime à ce niveau le coût horaire moyen du travail dans les services
          marchands en 2025 pour les entreprises françaises de dix salariés ou
          plus. Cette moyenne n’est pas le coût de votre entreprise :
          remplacez-la par votre donnée chargée réelle.
        </p>

        <GuideTable
          caption="Dépenses fictives sur 36 mois"
          headers={["Dépense", "Montant", "Calcul"]}
          rows={[
            ["Observation et premier essai", "1 600 € HT", "dépense initiale"],
            ["Mise en place", "5 000 € HT", "dépense initiale"],
            ["Temps de l’équipe", "1 414,40 €", "32 h × 44,20 €"],
            ["Abonnement", "2 700 € HT", "75 € × 36 mois"],
            ["Suivi et maintenance", "5 400 € HT", "150 € × 36 mois"],
            ["Total connu", "16 114,40 €", "hors sortie et fiscalité"],
          ]}
        />

        <p>
          Si 70 % des 345 heures sont réellement réaffectées, le bénéfice annuel
          estimé est de 10 674,30 €. Sur trois ans, les bénéfices atteignent 32
          022,90 €. Comparés aux seuls coûts connus, le gain net provisoire est
          de 15 908,50 € et le ROI provisoire de 98,72 %. Le coût initial serait
          récupéré environ 12,1 mois après la mise en service, une fois le
          fonctionnement stabilisé.
        </p>

        <GuideTable
          caption="Pourquoi tester une hypothèse prudente"
          headers={[
            "Temps réellement réaffecté",
            "Bénéfice annuel",
            "Résultat à 36 mois",
          ]}
          rows={[
            [
              "40 %",
              "6 099,60 €",
              "ROI provisoire 13,55 % ; retour après environ 28,3 mois",
            ],
            [
              "70 %",
              "10 674,30 €",
              "ROI provisoire 98,72 % ; retour après environ 12,1 mois",
            ],
          ]}
        />

        <p>
          Ce calcul ne comprend ni ventes supplémentaires, ni erreurs évitées,
          ni inflation, ni fiscalité, ni coût de sortie : ce n’est donc pas un
          coût total définitif. Il montre surtout qu’un projet séduisant avec 70
          % de temps réaffecté peut devenir peu intéressant avec 40 %. Retrouvez
          une méthode plus détaillée dans{" "}
          <Link href="/guides/calculer-roi-application-metier">
            le guide du ROI d’une application métier
          </Link>
          .
        </p>

        <h2 id="responsabilites">7. Répartir les responsabilités</h2>

        <p>
          L’outil ne doit pas devenir un sujet réservé au prestataire. Une
          personne de l’entreprise définit le résultat et les règles. Les
          utilisateurs apportent les cas réels. Une personne reçoit les alertes
          après le lancement. Le prestataire construit, documente et corrige ce
          que prévoit le contrat.
        </p>

        <p>
          L’
          <a
            href="https://www.anact.fr/table-de-simulation-numerique"
            target="_blank"
            rel="noreferrer"
          >
            Anact
          </a>{" "}
          propose d’associer direction, encadrement et salariés à la simulation
          des futurs usages. C’est particulièrement utile ici : la personne qui
          traite les dossiers incomplets connaît souvent une exception que la
          procédure officielle ne mentionne pas.
        </p>

        <ul>
          <li>
            <strong>La direction</strong> fixe le but, le budget, la condition
            d&apos;arrêt et un indicateur compréhensible.
          </li>
          <li>
            <strong>Le responsable métier</strong> tient les règles à jour et
            tranche les exceptions connues.
          </li>
          <li>
            <strong>Les utilisateurs</strong> essaient des situations réelles et
            signalent les erreurs. Une démonstration du prestataire ne suffit
            pas.
          </li>
          <li>
            <strong>Le prestataire</strong> construit, teste, documente et
            corrige ce que prévoit l&apos;accord ; il remet les accès, les
            alertes et les résultats des essais.
          </li>
          <li>
            <strong>Une personne de suivi</strong> reçoit les alertes, classe
            les erreurs et sait comment reprendre le travail à la main.
          </li>
        </ul>

        <h2 id="pilote-recette">8. Tester avant de généraliser</h2>

        <p>
          Le premier essai doit porter sur un volume limité, avec de vrais cas
          et un retour simple au traitement manuel. Avant la mise en service,
          écrivez ce qui doit se produire lorsqu’une information manque, que le
          même dossier arrive deux fois ou qu’un logiciel ne répond plus. Ces
          essais sont parfois appelés « recette » : ils servent simplement à
          vérifier que le résultat convenu est bien obtenu.
        </p>

        <GuideTable
          caption="Les essais indispensables"
          headers={["Situation testée", "Résultat attendu", "À conserver"]}
          rows={[
            [
              "Cas normal",
              "Le bon résultat est produit une seule fois",
              "Entrée et résultat",
            ],
            [
              "Information manquante",
              "Le dossier attend une correction compréhensible",
              "Message affiché",
            ],
            [
              "Même dossier reçu deux fois",
              "Aucun doublon n’est créé",
              "Trace des deux réceptions",
            ],
            [
              "Accès refusé",
              "L’action s’arrête et une personne est prévenue",
              "Alerte reçue",
            ],
            [
              "Logiciel indisponible",
              "Le dossier attend ou rejoint la liste manuelle",
              "Heure et tentatives",
            ],
            [
              "Reprise après panne",
              "Aucune perte ni double action",
              "Résultat avant et après",
            ],
          ]}
        />

        <p>
          Après le lancement, suivez le nombre de cas traités, les dossiers
          envoyés à une personne, les échecs, les doublons, le temps de
          traitement et les heures réellement réaffectées. C’est ainsi que vous
          saurez si l’automatisation tient sa promesse dans votre entreprise.
        </p>

        <h2 id="cas-inadaptes">9. Savoir quand attendre</h2>

        <p>Il est raisonnable de reporter le projet lorsque :</p>
        <ul>
          <li>les règles changent encore chaque semaine ;</li>
          <li>la tâche est rare et une liste de contrôle suffit ;</li>
          <li>personne ne peut dire ce qu’est un résultat correct ;</li>
          <li>les données sont en double ou sans source fiable ;</li>
          <li>une erreur est difficile à voir ou impossible à annuler ;</li>
          <li>
            le temps gagné dans une équipe crée davantage de travail ailleurs ;
          </li>
          <li>un logiciel standard couvre déjà correctement le besoin.</li>
        </ul>

        <p>
          Attendre ne signifie pas abandonner. Vous pouvez clarifier les règles,
          nettoyer les données ou mesurer le travail, puis réexaminer le sujet
          avec de meilleures informations.
        </p>

        <h2 id="plan-sept-jours">10. Décider en sept jours</h2>

        <ol>
          <li>
            <strong>Jour 1 :</strong> choisissez trois tâches précises et
            définissez le début et la fin de chacune.
          </li>
          <li>
            <strong>Jours 2 à 4 :</strong> notez les cas rencontrés, le temps et
            les corrections pour partir de faits.
          </li>
          <li>
            <strong>Jour 5 :</strong> comparez le gain, la stabilité des règles
            et la conséquence d&apos;une erreur afin de retenir un premier
            candidat.
          </li>
          <li>
            <strong>Jour 6 :</strong> essayez d&apos;abord de supprimer
            l&apos;étape, d&apos;utiliser une fonction existante ou de relier
            les outils.
          </li>
          <li>
            <strong>Jour 7 :</strong> écrivez le périmètre du premier essai, les
            erreurs à provoquer et la condition d&apos;arrêt. Vous obtenez une
            demande claire à chiffrer.
          </li>
        </ol>

        <p>
          Votre décision doit pouvoir tenir dans une phrase : « nous testons
          cette tâche parce qu’elle revient souvent, que ses règles sont connues
          et qu’un échec retourne dans cette liste ; nous arrêtons si le temps
          mesuré ne diminue pas ». Si cette phrase reste impossible à écrire,
          poursuivez l’observation avant de demander un devis.
        </p>

        <p>
          Si le besoin implique finalement plusieurs équipes et écrans,
          transformez ce travail en{" "}
          <Link href="/guides/cahier-des-charges-application-metier">
            cahier des charges d’application métier
          </Link>
          . Vous pouvez ensuite consulter notre service de{" "}
          <Link href="/services/outils-internes-sur-mesure">
            développement d’outils internes
          </Link>{" "}
          pour comprendre ce qui est chiffré avant tout engagement.
        </p>

        <GuideInlineCTA
          title="Vous hésitez sur la première tâche à automatiser ?"
          description="Décrivez le travail actuel, son volume, les logiciels utilisés et trois cas particuliers. Nous vous aidons à distinguer une simple amélioration, une connexion entre outils et un besoin d’application sur mesure — y compris lorsque le bon conseil est de ne rien développer pour l’instant."
          tags={[
            "Réponse humaine",
            "Option simple examinée",
            "Budget expliqué",
          ]}
          ctaLabel="Décrire mon processus"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="sources">Sources et limites</h2>

        <p>
          Recherche mise à jour le 21 juillet 2026. Les montants et calculs sont
          ceux d’un exemple fictif, fourni pour rendre la méthode vérifiable.
          Ils ne promettent ni gain ni rentabilité pour un projet réel.
        </p>

        <ul>
          <li>
            <a
              href="https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution"
              target="_blank"
              rel="noreferrer"
            >
              France Num — L’automatisation, une solution pour les TPE-PME
            </a>
            , pour l’observation, la simplification, le test, la documentation
            et la formation. Les promesses générales de prix ou de gain ne sont
            pas reprises.
          </li>
          <li>
            <a
              href="https://www.insee.fr/fr/statistiques/2381340"
              target="_blank"
              rel="noreferrer"
            >
              Insee — coût horaire du travail selon l’activité
            </a>
            , pour la moyenne de 44,20 € utilisée uniquement dans l’exemple.
          </li>
          <li>
            <a
              href="https://www.anact.fr/table-de-simulation-numerique"
              target="_blank"
              rel="noreferrer"
            >
              Anact — table de simulation numérique
            </a>
            , pour la participation des salariés à l’étude des futurs usages.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/profilage-et-decision-entierement-automatisee"
              target="_blank"
              rel="noreferrer"
            >
              CNIL — profilage et décision entièrement automatisée
            </a>
            , pour le champ d’application de l’article 22 du RGPD.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
