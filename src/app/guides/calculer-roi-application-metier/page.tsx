import type { Metadata } from "next";
import Link from "next/link";
import { ApplicationRoiCalculator } from "@/components/guides/ApplicationRoiCalculator";
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

const guide = getGuide("calculer-roi-application-metier");

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
        alt: "Calculer si une application métier sera rentable pour l’entreprise",
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
      name: "Calculer le ROI d’une application métier",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question:
      "Faut-il réduire les effectifs pour obtenir un ROI sur le temps gagné ?",
    answer:
      "Non. Le temps gagné a une valeur financière seulement s’il évite une dépense, permet de traiter plus de dossiers ou est réellement réaffecté à une tâche utile. Sinon, présentez-le comme du temps libéré, sans le transformer artificiellement en économie de salaire.",
  },
  {
    question: "Comment traiter une aide ou un crédit d’impôt dans le calcul ?",
    answer:
      "Calculez d’abord le projet sans aide. Ajoutez-la dans un scénario séparé uniquement lorsque son éligibilité, son montant et sa date sont confirmés. Faites valider son traitement par votre conseil comptable.",
  },
  {
    question: "Faut-il annualiser ou actualiser le ROI ?",
    answer:
      "Pas forcément pour un premier tri. Ce guide utilise un ROI cumulé, non annualisé et non actualisé, calculé de la même façon pour toutes les options. Pour un investissement long, important ou financé, faites compléter l’analyse par la direction financière avec des flux datés et une valeur actuelle nette.",
  },
  {
    question: "Quel horizon retenir si le processus change rapidement ?",
    answer:
      "Choisissez la dernière période pendant laquelle les règles, les volumes et l’organisation restent crédibles. Comparez toutes les options entre les mêmes dates. Si le processus va bientôt changer, préférez un pilote ou une solution facile à remplacer.",
  },
  {
    question: "Comment donner un prix à une réduction de risque ?",
    answer:
      "Donnez-lui une valeur seulement si vous connaissez la fréquence des incidents, leur coût et la part réellement évitable. Le résultat reste une perte moyenne estimée, pas une économie certaine. Sans historique suffisant, suivez le risque séparément et ne l’ajoutez pas au ROI.",
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
          { label: "Calculer le ROI d’une application métier" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous hésitez à financer une application métier ? Ce guide vous aide à comparer le sur-mesure, un logiciel standard, une amélioration simple et le statu quo à partir de vos coûts et de gains réellement utilisables."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "Coûts cachés inclus",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Gains réalistes, pas théoriques",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "4 choix réellement comparés",
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
            label: "Choisir le premier processus à automatiser",
          },
          {
            href: "/guides/prix-logiciel-sur-mesure",
            label: "Budgéter un logiciel sur mesure",
          },
          {
            href: "/guides/erp-ou-logiciel-sur-mesure",
            label: "ERP, standard ou sur mesure",
          },
          {
            href: "/guides/cahier-des-charges-application-metier",
            label: "Cahier des charges d’une application métier",
          },
          {
            href: "/services/outils-internes-sur-mesure",
            label: "Développement d’outils internes",
          },
        ]}
        faqTitle="ROI d’une application métier : les questions restantes"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          <strong>
            Vous envisagez une application pour supprimer des ressaisies,
            accélérer les dossiers ou éviter des erreurs. Le devis paraît élevé,
            tandis que votre équipe affirme que l’outil fera gagner des
            centaines d’heures. Faut-il investir ?
          </strong>{" "}
          La bonne réponse ne consiste pas à transformer chaque minute pénible
          en économie de salaire. Elle consiste à comparer, sur la même durée,
          ce que chaque option coûte vraiment et les gains que l’entreprise sera
          réellement capable d’utiliser.
        </p>

        <p>
          Le <strong>retour sur investissement (ROI)</strong> compare le gain
          net d’un projet à son coût total. Il vous aide à choisir entre quatre
          décisions : développer, acheter un outil standard, simplifier
          l’existant ou reporter. Commencez avec quelques mesures observées,
          faites un scénario prudent et conservez séparément les bénéfices
          utiles mais impossibles à convertir honnêtement en euros.
        </p>

        <InfoBox variant="blue" title="La réponse tient en trois questions">
          Combien l’entreprise paiera-t-elle jusqu’à l’arrêt ou au remplacement
          de l’outil ? Quels gains pourront réellement être utilisés ? Le projet
          reste-t-il intéressant si le déploiement prend du retard ou si les
          gains sont plus faibles que prévu ?
        </InfoBox>

        <p>
          Un calcul qui transforme toutes les heures gagnées en argent peut
          faire paraître rentable un projet qui ne l’est pas. L’exemple détaillé
          vient plus loin : il montre comment le retard de mise en service, les
          coûts récurrents et les heures réellement réutilisées changent le
          résultat.
        </p>

        <GuideToc
          items={[
            { id: "dossier", label: "1. Les cinq questions avant le calcul" },
            { id: "base", label: "2. Mesurer le travail actuel" },
            {
              id: "benefices",
              label: "3. Compter seulement les gains utilisables",
            },
            {
              id: "tco",
              label: "4. Compter tout ce que chaque option coûtera",
            },
            {
              id: "exemple",
              label: "5. Exemple fictif : du calcul naïf au calcul réaliste",
            },
            {
              id: "options",
              label: "6. Comparer le sur-mesure aux solutions simples",
            },
            {
              id: "calculateur",
              label: "7. Calculer, tester les seuils et exporter",
            },
            {
              id: "decision",
              label: "8. Faire valider et décider",
            },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="dossier">
          1. Répondez à cinq questions avant d’ouvrir le tableur
        </h2>

        <p>
          Le pourcentage de ROI arrive à la fin, pas au début. Avant de le
          calculer, réunissez sur une page les cinq réponses ci-dessous. La
          direction, le responsable du travail concerné et la personne qui suit
          les comptes doivent pouvoir les relire sans comprendre trois projets
          différents.
        </p>

        <GuideTable
          headers={[
            "Question",
            "Ce qu’il faut écrire",
            "Quand ne pas conclure",
          ]}
          rows={[
            [
              "1. Que se passe-t-il aujourd’hui ?",
              "volumes, durées, erreurs et décaissements sur un cycle",
              "les chiffres viennent d’un souvenir ou d’une journée exceptionnelle",
            ],
            [
              "2. Quel gain vient vraiment du changement ?",
              "dépense évitée, heures réellement réutilisées ou amélioration suivie sans la convertir en euros",
              "le même gain est compté sous deux noms",
            ],
            [
              "3. Que faudra-t-il payer jusqu’à la sortie ?",
              "investissement, exploitation, temps interne et réversibilité",
              "une ligne inconnue est remplacée par zéro",
            ],
            [
              "4. Que se passe-t-il si le projet déçoit ?",
              "prudent, central et haut avec les mêmes formules",
              "seul le scénario favorable est présenté",
            ],
            [
              "5. Qui décide de lancer, piloter ou reporter ?",
              "seuils écrits, responsable et date de contrôle",
              "le devis tient lieu de validation économique",
            ],
          ]}
        />

        <p>
          Cette page n’est pas un dossier comptable. Elle sert à rendre les
          hypothèses discutables. Une inconnue visible peut être étudiée ; un
          zéro silencieux rend le résultat artificiellement précis. Notez donc «
          à confirmer » pour une migration encore non inventoriée, un prix sans
          devis, une durée de formation non testée ou une intégration dont
          l’accès n’a pas été vérifié.
        </p>

        <FormulaBox>
          {[
            "Gain net = bénéfices cumulés attribuables - coût total de possession",
            "",
            "ROI = gain net / coût total de possession × 100",
            "",
            "Délai de retour = mois où les bénéfices cumulés couvrent les coûts cumulés",
          ].join("\n")}
        </FormulaBox>

        <p>
          Un ROI de 25 % signifie que le gain net représente un quart du coût
          engagé sur l’horizon choisi. Il ne signifie ni 25 % de chiffre
          d’affaires supplémentaire, ni un remboursement en quatre ans. Le gain
          net répond « combien reste-t-il ? » ; le délai de retour répond «
          quand la mise est-elle couverte ? ». Gardez les trois résultats.
        </p>

        <h2 id="base">2. Mesurez ce que le travail actuel coûte vraiment</h2>

        <p>
          Le calcul commence par une <strong>base de référence</strong>,
          c’est-à-dire la mesure de la situation avant changement. Choisissez
          une période qui contient le travail normal et ses exceptions : une
          semaine complète pour un flux quotidien stable, un mois pour une
          clôture, ou un cycle saisonnier si l’activité varie fortement. Une
          moyenne annuelle reconstruite à partir d’une matinée calme ne prouve
          rien.
        </p>

        <p>
          Pour chaque étape, relevez le volume, le temps actif, le temps
          d’attente, le nombre de corrections et la personne qui intervient. Le
          temps d’attente n’est pas automatiquement du travail économisable :
          une demande qui dort deux jours dans une boîte de réception allonge le
          délai client sans occuper deux jours de salaire. Les deux effets
          comptent, mais pas dans la même unité.
        </p>

        <GuideTable
          headers={["Mesure à relever", "Où la trouver", "Erreur à éviter"]}
          rows={[
            [
              "Volume traité — dossiers, lignes ou interventions par période",
              "journal, facturation, échantillon daté",
              "confondre demandes reçues et dossiers terminés",
            ],
            [
              "Temps actif — minutes réellement travaillées",
              "chronométrage de plusieurs cas",
              "inclure toute l’attente",
            ],
            [
              "Corrections — nombre multiplié par la durée moyenne",
              "retours, avoirs, tickets, reprises",
              "compter deux fois l’erreur et sa correction",
            ],
            [
              "Décaissement — euros réellement payés ou perdus",
              "comptabilité, avoirs, pénalités",
              "valoriser une gêne comme une sortie de caisse",
            ],
            [
              "Délai de service — heures ou jours calendaires",
              "horodatages de début et de fin",
              "le convertir automatiquement en salaire",
            ],
            [
              "Adoption actuelle — utilisateurs, fréquence et contournements",
              "entretiens et traces d’usage",
              "supposer que tous utilisent le processus officiel",
            ],
          ]}
        />

        <InfoBox
          variant="amber"
          title="Le coût horaire public est un repère, pas votre vérité"
        >
          L’
          <a
            href="https://www.insee.fr/fr/statistiques/2381340"
            target="_blank"
            rel="noreferrer"
          >
            Insee
          </a>{" "}
          estime pour 2025 le coût horaire de la main-d’œuvre à 44,2 € dans les
          services marchands et à 44,7 € dans l’ensemble marchand. Le champ
          couvre les entreprises françaises de 10 salariés ou plus des secteurs
          marchands B à N, apprentis inclus. Ce n’est ni le salaire net, ni le
          coût de votre TPE, ni celui d’un poste précis. Utilisez votre coût
          chargé réel quand il est disponible ; sinon, notez quelles entreprises
          ce repère couvre et testez une fourchette.
        </InfoBox>

        <p>
          Faites valider cette base par la personne qui exécute le travail. Elle
          voit souvent les exceptions invisibles dans le tableau de bord : le
          client rappelé, la donnée copiée dans un deuxième fichier, la pièce
          ressaisie après une panne ou la correction qui n’est jamais classée
          comme incident. Rejouez ensuite le futur flux avec les utilisateurs :
          cette discussion évite de présenter comme un gain une tâche simplement
          déplacée vers une autre personne.
        </p>

        <h2 id="benefices">
          3. Comptez seulement les gains que l’entreprise pourra utiliser
        </h2>

        <p>
          Classez les bénéfices avant de les additionner. Un euro de facture
          évitée, une heure libérée, une vente possible et une meilleure qualité
          ne possèdent ni la même certitude ni la même traduction comptable.
          <a
            href="https://www.francenum.gouv.fr/guides-et-conseils/strategie-numerique/comprendre-le-numerique/comment-mesurer-les-effets-de-la"
            target="_blank"
            rel="noreferrer"
          >
            France Num rappelle que certains effets d’une transformation
            numérique sont difficiles à chiffrer
          </a>{" "}
          et recommande de définir des objectifs et des indicateurs clairs. Ne
          rendez pas un bénéfice plus crédible en lui attribuant un prix
          arbitraire.
        </p>

        <GuideTable
          headers={[
            "Type de gain",
            "Quand le compter en euros",
            "Comment rester prudent",
          ]}
          rows={[
            [
              "Dépense évitée",
              "le paiement disparaît réellement",
              "montant observé × part évitée ; sinon, conservez seulement la dépense actuelle",
            ],
            [
              "Temps réellement réaffecté",
              "les heures servent à produire, vendre ou absorber une charge identifiable",
              "heures libérées × part réellement réutilisée × coût pertinent ; sinon, mesurez seulement le temps gagné",
            ],
            [
              "Ventes supplémentaires",
              "volume, conversion, marge et capacité de livraison sont défendables",
              "comptez la marge des ventes attribuables, pas leur chiffre d’affaires ; sinon, suivez le volume à part",
            ],
            [
              "Risque réduit",
              "fréquence et impact proviennent d’incidents ou d’une analyse documentée",
              "probabilité × impact évitable, avec prudence ; sinon, gardez un indicateur de risque séparé",
            ],
            [
              "Qualité ou confort",
              "un lien économique mesurable existe",
              "comptez uniquement ce lien ; sinon, conservez une note qualitative et les retours utilisateurs",
            ],
          ]}
        />

        <p>
          La <strong>part réellement réutilisée</strong> est la fraction du
          temps libéré qui produit effectivement une valeur économique. Si cinq
          personnes gagnent chacune douze minutes dispersées dans la journée,
          l’entreprise ne réduit pas mécaniquement une heure de paie. Elle peut
          toutefois répondre plus vite, absorber une hausse de volume ou réduire
          la fatigue. Mesurez cet effet avec le bon indicateur et monétisez
          seulement ce que l’organisation peut réellement utiliser.
        </p>

        <InfoBox variant="blue" title="Évitez le double comptage">
          Si une erreur mobilisait déjà trente minutes de correction valorisées
          dans la charge actuelle, n’ajoutez pas une seconde fois ces trente
          minutes sous « qualité ». Vous pouvez ajouter l’avoir, le transport ou
          la pénalité réellement évités, car il s’agit d’un autre flux. Pour
          chaque ligne de bénéfice, notez la mesure d’origine et vérifiez
          qu’elle n’alimente aucune autre ligne.
        </InfoBox>

        <h2 id="tco">
          4. Comptez ce que chaque option coûtera jusqu’à sa sortie
        </h2>

        <p>
          Le <strong>coût complet</strong>, parfois appelé coût total de
          possession ou TCO, additionne les coûts d’acquisition, de mise en
          œuvre, d’exploitation, d’évolution et de sortie sur une même durée.
          Dans la suite du guide, nous parlerons simplement de coût complet. Le
          prix du devis n’en est qu’une partie. Une solution à faible coût
          initial peut devenir chère avec les licences par utilisateur ; un
          développement payé une fois peut exiger hébergement, surveillance et
          maintenance pendant toute sa vie.
        </p>

        <p>
          Avant de calculer le retour sur investissement, construisez l’année
          d’exploitation avec le{" "}
          <Link href="/guides/cout-maintenance-application-metier">
            registre du budget de maintenance
          </Link>
          . Vous éviterez de transformer un coût encore inconnu en zéro.
        </p>

        <GuideTable
          headers={["Moment", "Postes à examiner", "Questions à poser"]}
          rows={[
            [
              "Avant le lancement",
              "observation, cadrage, consultation",
              "qui participe et combien d’heures internes ?",
            ],
            [
              "Mise en œuvre",
              "licence ou développement, configuration, intégrations",
              "quelles fonctions, données et interfaces sont incluses ?",
            ],
            [
              "Bascule",
              "nettoyage, reprise des données, double saisie, vérification et formation",
              "combien de cycles et quels cas d’échec seront testés ?",
            ],
            [
              "Exploitation",
              "abonnement, cloud, surveillance, assistance, sauvegarde",
              "volume, utilisateurs, limites et révision tarifaire ?",
            ],
            [
              "Évolution",
              "corrections, mises à jour, adaptation réglementaire et métier",
              "forfait, régie, exclusions et priorité ?",
            ],
            [
              "Sortie",
              "export, documentation, transfert des accès, remplacement",
              "format, délai, coût et personne capable de reprendre ?",
            ],
          ]}
        />

        <p>
          Travaillez hors taxes seulement si la récupération de TVA correspond
          réellement à la situation, et appliquez la même convention à toutes
          les options. N’ajoutez pas l’investissement initial une seconde fois
          dans la maintenance. Ne traitez pas non plus le statu quo comme «
          gratuit » : il peut ne demander aucun budget nouveau tout en
          conservant une charge, des erreurs et une dépendance mesurées.
        </p>

        <p>
          Trois à quatre ans constituent parfois un horizon pratique pour un
          outil interne, mais ce n’est pas une norme. Un processus très mouvant
          mérite un horizon plus court et une valeur de sortie plus forte. Une
          application structurante peut être observée plus longtemps, à
          condition de tester hausse des prix, évolution des volumes et
          obsolescence. L’important est de comparer toutes les options sur la
          même période.
        </p>

        <p>
          Pour construire l’enveloppe initiale sans confondre prix et
          rentabilité, utilisez le guide du{" "}
          <Link href="/guides/prix-logiciel-sur-mesure">
            prix d’un logiciel sur mesure
          </Link>
          . Si le besoin porte encore sur le choix entre progiciel, solution
          configurable et spécifique, commencez par le comparatif{" "}
          <Link href="/guides/erp-ou-logiciel-sur-mesure">
            ERP, logiciel standard ou sur mesure
          </Link>
          , puis calculez leur coût complet sur la même durée.
        </p>

        <h2 id="exemple">5. Exemple fictif : d’environ 108 % à environ 9 %</h2>

        <p>
          <strong>Exemple illustratif fictif.</strong> Il ne décrit ni un client
          ni un témoignage réel. Un atelier de maintenance industrielle emploie
          28 personnes. Après chaque intervention, le compte rendu est ressaisi,
          rapproché et corrigé avant facturation. Les nombres ci-dessous ne
          décrivent ni un client, ni un prix Hagnéré Code, ni un rendement
          moyen. Ils montrent comment remplir le dossier et permettent de
          refaire chaque opération.
        </p>

        <h3>La base observée dans l’exemple illustratif fictif</h3>

        <ul>
          <li>
            80 comptes rendus par semaine × 8 minutes × 48 semaines ={" "}
            <strong>512 heures par an</strong> ;
          </li>
          <li>
            consolidation : 3 heures par semaine × 48 ={" "}
            <strong>144 heures</strong> ;
          </li>
          <li>
            corrections : 14 par mois × 24 minutes × 12 ={" "}
            <strong>67,2 heures</strong> ;
          </li>
          <li>
            charge totale : <strong>723,2 heures par an</strong> ;
          </li>
          <li>
            coût chargé propre à l’entreprise fictive : 36 € par heure, soit une
            capacité théorique de <strong>26 035,20 € par an</strong> ;
          </li>
          <li>
            avoirs, réexpéditions et autres décaissements documentés dans le cas
            fictif : <strong>2 400 € par an</strong>.
          </li>
        </ul>

        <p>
          Le calcul naïf valorise 100 % du temps et des décaissements pendant
          quatre années pleines :{" "}
          <code>(26 035,20 + 2 400) × 4 = 113 740,80 €</code> de bénéfices, puis{" "}
          <code>(113 740,80 − 54 800) / 54 800 × 100 = 107,56 %</code> de ROI,
          soit environ 108 %. Ce résultat est trompeur : il suppose que toute la
          charge disparaît, que tout le temps est réutilisé et que les bénéfices
          commencent avant même la mise en service. Le scénario central corrigé
          applique donc une part de réutilisation, 44 mois de fonctionnement et
          une adoption qui monte progressivement pendant les six premiers mois
          en service.
        </p>

        <h3>Le coût fictif de l’option sur mesure, du mois 0 au mois 48</h3>

        <p>
          La décision est prise au début du mois 0. Cadrage, réalisation,
          migration et formation occupent les quatre premiers mois ; l’outil
          entre en service au début du mois 5. Il produit donc des bénéfices et
          des coûts d’exploitation pendant <strong>44 mois</strong>, jusqu’à la
          fin du mois 48. Cette origine commune évite de comparer 48 mois de
          bénéfices à 52 mois de calendrier.
        </p>

        <GuideTable
          headers={["Poste fictif", "Période et calcul", "Montant"]}
          rows={[
            ["Cadrage", "forfait hypothétique", "4 000 € HT"],
            [
              "Conception, développement, intégration",
              "forfait hypothétique",
              "26 000 € HT",
            ],
            ["Temps interne projet", "100 h × 36 €", "3 600 €"],
            ["Migration et formation", "forfait hypothétique", "2 400 € HT"],
            [
              "Hébergement et surveillance",
              "150 € × 44 mois en service",
              "6 600 € HT",
            ],
            ["Maintenance", "250 € × 44 mois en service", "11 000 € HT"],
            [
              "Sortie au mois 48",
              "export et transfert hypothétiques",
              "1 200 € HT",
            ],
            [
              "Coût complet fictif, mois 0–48",
              "chaque poste compté une fois",
              "54 800 €",
            ],
          ]}
        />

        <p>
          Le cas suppose que la TVA est récupérable et raisonne donc hors taxes
          pour les dépenses externes. Fiscalité, inflation, besoin encore non
          découvert et dépassement de volume restent à confirmer. Dans un
          dossier réel, ces inconnues deviennent une réserve ou un scénario,
          jamais un zéro caché.
        </p>

        <FormulaBox>
          {[
            "Bénéfice annuel fictif = 26 035,20 € × part des heures réellement réutilisées",
            "                          + 2 400 € × part des décaissements évités",
            "",
            "Adoption sur 6 mois = 1/6 + 2/6 + 3/6 + 4/6 + 5/6 + 6/6",
            "Mois équivalents à plein bénéfice = 3,5 + 38 = 41,5 mois",
            "",
            "Bénéfices cumulés = bénéfice annuel / 12 × 41,5 mois",
            "Gain net cumulé = bénéfices cumulés - 54 800 €",
            "ROI simple cumulé = gain net / 54 800 € × 100",
          ].join("\n")}
        </FormulaBox>

        <GuideTable
          headers={["Scénario fictif", "Hypothèses", "Résultat sur 48 mois"]}
          rows={[
            [
              "Prudent",
              "35 % du temps réaffecté ; 40 % des décaissements évités ; adoption sur 6 mois",
              "34 833 € de bénéfices cumulés ; perte nette 19 967 € ; ROI −36,44 % — ne passe pas",
            ],
            [
              "Scénario central",
              "60 % du temps réaffecté ; 70 % des décaissements évités ; adoption sur 6 mois",
              "59 833,04 € de bénéfices cumulés ; gain net 5 033,04 € ; ROI 9,18 % — marge fragile",
            ],
            [
              "Haut",
              "80 % du temps réaffecté ; 90 % des décaissements évités ; adoption sur 6 mois",
              "79 500,72 € de bénéfices cumulés ; gain net 24 700,72 € ; ROI 45,07 % — réserve plus solide",
            ],
          ]}
        />

        <p>
          Le scénario prudent détruit de la valeur sur l’horizon. Ce résultat
          n’est pas une anomalie à gommer : il informe la décision. Le scénario
          central crée 59 833,04 € de bénéfices cumulés, puis 5 033,04 € de
          valeur nette après le coût complet. Le calcul reste :{" "}
          <code>(59 833,04 − 54 800) / 54 800 × 100 = 9,18 %</code>.
        </p>
        <p>
          Si l’on supposait 100 % du bénéfice dès le premier mois en service, le
          même cas donnerait 15,76 %. Les additions seraient exactes, mais cette
          convention ignorerait l’adoption progressive. La convention à six mois
          ramène le résultat à 9,18 % et rend visible une marge beaucoup plus
          faible. Ce pourcentage cumule 48 mois ; ce n’est ni un rendement
          annuel, ni un calendrier de trésorerie.
        </p>

        <h3>Le délai de retour économique n’est pas un délai de trésorerie</h3>

        <p>
          L’investissement économique avant mise en service vaut 36 000 € dans
          cet exemple fictif, temps interne compris. Le bénéfice central stable
          vaut 1 441,76 € par mois, dont il faut retrancher 400 € de coût
          d’exploitation. Mais ce régime n’est atteint qu’après six mois
          d’adoption. En cumulant chaque mois, le projet franchit zéro au{" "}
          <strong>mois 43 depuis la décision</strong>. Le coût de sortie de 1
          200 € est imputé au mois 48 ; après cette sortie, la valeur nette
          finale reste 5 033,04 €.
        </p>

        <p>
          Ce résultat signifie que les gains économiques cumulés compensent
          l’investissement économique ; il ne mesure pas une trésorerie
          immobilisée. Le temps réellement réutilisé n’est pas une entrée de
          caisse et le temps interne n’est pas toujours un paiement additionnel.
          Un délai de retour de trésorerie exigerait un calendrier séparé ne
          conservant que les encaissements et décaissements réels. Dans tous les
          cas, le mois de retour exact est celui où les flux nets cumulés
          franchissent zéro. Une convention qui provisionne la sortie chaque
          mois donnerait une autre date : notez toujours la convention retenue
          au lieu d’afficher un délai faussement universel.
        </p>

        <h2 id="options">
          6. Comparez le sur-mesure à trois solutions plus simples
        </h2>

        <p>
          Le ROI d’un projet ne dit pas si une autre réponse ferait mieux. Pour
          éviter ce biais, gardez le même atelier fictif, la même origine au
          mois 0 — date de décision —, la même fin au mois 48 et les mêmes
          familles de bénéfices. Les coûts ci-dessous sont{" "}
          <strong>additionnels par rapport au statu quo</strong> : ils
          n’incluent pas le coût du travail déjà supporté dans la situation
          actuelle. Les pourcentages restent des hypothèses pédagogiques, pas
          des performances promises.
        </p>

        <p>
          Hagnéré Code conçoit des applications métier : notre intérêt
          commercial est explicite. Cette comparaison est précisément construite
          pour laisser le sur-mesure perdre lorsque ses bénéfices ne compensent
          pas sa complexité. Une recommandation crédible doit pouvoir conclure à
          la simplification, au standard ou au statu quo.
        </p>

        <GuideTable
          headers={[
            "Option fictive",
            "Hypothèses et coût",
            "Résultat sur 48 mois",
          ]}
          rows={[
            [
              "Statu quo",
              "aucune mise en service ; charge actuelle conservée ; 0 € de coût nouveau dans ce comparatif",
              "0 € de bénéfice nouveau ; option de référence, sans ROI incrémental pertinent",
            ],
            [
              "Simplifier l’existant",
              "mois 2 ; adoption sur 2 mois ; 25 % du temps réaffecté ; 40 % des décaissements évités ; 2 560 € externes + 40 h internes à 36 € + 75 € × 47 mois + 475 € de sortie = 8 000 €",
              "28 941,60 € de bénéfices ; gain net 20 941,60 € ; ROI 261,77 %",
            ],
            [
              "Logiciel standard configuré",
              "mois 3 ; adoption sur 3 mois ; 50 % du temps réaffecté ; 60 % des décaissements évités ; 13 840 € externes + 60 h internes à 36 € + 325 € × 46 mois + 1 050 € de sortie = 32 000 €",
              "54 216 € de bénéfices ; gain net 22 216 € ; ROI 69,43 %",
            ],
            [
              "Sur mesure, scénario central",
              "mois 5 ; adoption sur 6 mois ; 60 % du temps réaffecté ; 70 % des décaissements évités ; 32 400 € externes + 100 h internes à 36 € + 400 € × 44 mois + 1 200 € de sortie = 54 800 €",
              "59 833,04 € de bénéfices ; gain net 5 033,04 € ; ROI 9,18 %",
            ],
          ]}
        />

        <p>
          La simplification produit le ROI le plus fort parce que son coût est
          faible. Le logiciel standard crée nominalement le gain net le plus
          élevé : 22 216 €, soit seulement 1 274,40 € de plus que la
          simplification. Cet écart équivaut à 35,4 heures au coût fictif de 36
          €/h : une migration, une formation ou une reprise de données un peu
          plus longue suffit donc à inverser le classement. Il n’y a pas ici de
          gagnant robuste entre ces deux options. Testez d’abord la réponse la
          plus simple ; ne retenez le standard que si ses fonctions, ses
          intégrations et sa réversibilité justifient cet écart fragile.
        </p>

        <p>
          Ne transformez pas cette table en règle universelle. Un sur-mesure
          peut gagner lorsque le processus crée une différenciation, lorsque le
          standard exige trop de contournements ou lorsque les volumes rendent
          les licences et les opérations manuelles plus coûteuses. Il doit le
          démontrer avec vos données. L’option la moins complexe qui satisfait
          durablement le besoin reste le point de départ.
        </p>

        <InfoBox
          variant="emerald"
          title="Comparer le gain net autant que le ROI"
        >
          Une petite amélioration à 300 % de ROI peut créer moins d’euros qu’un
          projet à 40 %. Le ROI mesure le rendement relatif du coût économique
          engagé ; le gain net mesure la valeur créée. Ajoutez délai de retour,
          risque et capacité de financement avant d’arbitrer. Un dirigeant peut
          retenir la petite solution pour préserver sa trésorerie, même si une
          autre crée plus de valeur à long terme.
        </InfoBox>

        <h2 id="calculateur">
          7. Calculez, cherchez le point de bascule et exportez le dossier
        </h2>

        <p>
          Le calculateur reprend le cas fictif, mais chaque champ est
          modifiable. Il sépare la capacité réutilisée des décaissements évités,
          applique une montée d’adoption, compare les options sur leur{" "}
          <strong>valeur nette</strong> et exporte les hypothèses avec leurs
          limites. Le calcul reste dans votre navigateur : aucune donnée n’est
          envoyée à Hagnéré Code.
        </p>

        <p>
          Cochez « coûts à confirmer » dès qu’une migration, une intégration, un
          abonnement, une charge interne ou la sortie n’est pas chiffrée.
          L’outil montre alors le total partiel, mais refuse de désigner un
          gagnant. Un zéro signifie que le poste est réellement nul ou déjà
          inclus ailleurs, pas « nous ne savons pas encore ».
        </p>

        <p>
          Le CSV ajoute la version du modèle, la date d’export et des champs à
          compléter pour la source et le niveau de confiance des hypothèses.
          Conservez-le avec le devis ou la décision : un résultat séparé de ses
          hypothèses ne constitue pas une preuve.
        </p>

        <ApplicationRoiCalculator />

        <h3>Le cas fictif passe à peine : ce n’est pas encore un feu vert</h3>

        <GuideTable
          headers={["Test isolé sur le sur-mesure", "Valeur nette", "Lecture"]}
          rows={[
            [
              "Scénario central : mois 5, adoption sur 6 mois",
              "5 033,04 € ; ROI 9,18 %",
              "marge positive mais fragile",
            ],
            [
              "Mise en service retardée de 3 mois",
              "1 907,76 € ; ROI 3,56 %",
              "la réserve devient très faible",
            ],
            [
              "Mise en service retardée de 6 mois",
              "−1 217,52 € ; ROI −2,32 %",
              "le projet détruit de la valeur",
            ],
            [
              "Horizon réduit à 24 mois",
              "−19 969,20 € ; ROI −44,18 %",
              "l’investissement ne se rembourse pas assez vite",
            ],
            [
              "Coûts initiaux économiques +20 %",
              "−2 166,96 € ; ROI −3,50 %",
              "illustration à remplacer par votre écart historique",
            ],
          ]}
        />

        <InfoBox variant="amber" title="Trois seuils changent la décision">
          Avec les autres hypothèses inchangées, le projet atteint zéro autour
          de 54,41 % d’heures réellement réutilisées. Son coût initial
          économique maximal est d’environ 41 033 €, contre 36 000 € dans le cas
          central. Pour égaler les 22 216 € de valeur nette du logiciel
          standard, il devrait réutiliser environ 79,08 % des heures supprimées.
          Ce seuil est nominal : les 60 heures internes du standard sont
          fictives et tout coût encore inconnu rend la comparaison non
          classable.
        </InfoBox>

        <p>
          Notre opinion est donc tranchée : ce sur-mesure ne devrait pas être
          signé sur le seul résultat central. Il faut d’abord prouver l’adoption
          et l’écart fonctionnel avec le logiciel standard, réduire le périmètre
          ou réaliser un pilote. Si le standard couvre le besoin sans
          contournement critique, ne pas développer est ici la meilleure
          décision — même si Hagnéré Code pourrait vendre ce développement.
        </p>

        <h2 id="decision">8. Faites valider les chiffres, puis décidez</h2>

        <p>
          Avant de signer, refaites le calcul avec un retard, moins
          d’utilisateurs ou un coût supérieur. Le but n’est pas d’imaginer le
          pire, mais d’identifier l’hypothèse qui ferait changer de décision. Si
          une petite déception suffit à rendre le projet déficitaire, commencez
          par tester cette hypothèse à moindre coût.
        </p>

        <ol>
          <li>
            <strong>Réduisez les heures réellement réutilisées.</strong> Que
            devient le ROI si seuls 35 %, puis 50 % du temps gagné servent à
            produire, vendre ou éviter une dépense ?
          </li>
          <li>
            <strong>Retardez la mise en service.</strong> Décalez-la de trois,
            puis de six mois en conservant les autres hypothèses, notamment la
            même montée d’adoption. Testez séparément une adoption plus lente :
            ce n’est pas le même scénario.
          </li>
          <li>
            <strong>Augmentez le coût complet.</strong> Utilisez l’écart entre
            budget et réalisé de projets comparables, ou comparez plusieurs
            devis. Le +20 % du calculateur est une illustration modifiable, pas
            un taux de risque universel.
          </li>
          <li>
            <strong>Retirez le bénéfice le plus fragile.</strong> Si la vente
            additionnelle n’est pas prouvée, la décision tient-elle sans elle ?
          </li>
          <li>
            <strong>Changez l’horizon.</strong> Que reste-t-il si le processus
            doit être remplacé dans deux ans plutôt que quatre ?
          </li>
        </ol>

        <p>
          Repérez ensuite le point à partir duquel le gain net passe sous zéro
          ou une autre option devient meilleure. S’il est proche de votre
          hypothèse centrale, le projet n’est pas forcément mauvais : il faut
          simplement apprendre avant d’investir tout le budget, avec un pilote,
          un test d’intégration ou un inventaire des données.
        </p>

        <InfoBox variant="amber" title="Le résultat donne l’action suivante">
          Si le projet reste positif dans le scénario prudent, préparez-le et
          vérifiez la trésorerie. S’il ne tient que dans le scénario central,
          testez d’abord l’hypothèse la plus fragile. Si une solution simple
          domine, essayez-la sur un cycle complet. Si les données manquent ou si
          tous les scénarios crédibles sont négatifs, mesurez ou reportez au
          lieu de forcer un pourcentage.
        </InfoBox>

        <h3>Faites valider chaque famille de chiffres par la bonne personne</h3>

        <p>
          Un dossier économique sans propriétaire devient vite une négociation
          de chiffres. Le métier connaît le flux, la direction choisit le
          risque, la finance vérifie la convention économique, les utilisateurs
          éprouvent l’adoption et le prestataire chiffre le travail prévu. Aucun
          de ces rôles ne peut valider seul l’ensemble.
        </p>

        <ul>
          <li>
            le responsable métier valide les volumes, les exceptions et le
            bénéfice attendu ;
          </li>
          <li>
            les utilisateurs vérifient le nouveau travail, la formation et les
            tâches déplacées ;
          </li>
          <li>
            la direction ou la finance valide le coût horaire, la trésorerie,
            l’horizon et le seuil d’arrêt ;
          </li>
          <li>
            le prestataire chiffre ce qui est inclus, l’exploitation et la
            sortie, sans promettre les gains de l’entreprise ;
          </li>
          <li>
            une personne nommée mesure le coût et le résultat après le
            lancement.
          </li>
        </ul>

        <p>
          Demandez au prestataire de montrer les coûts et les limites, pas de
          certifier vos gains. Il peut expliquer comment une fonction réduit une
          étape ; il ne sait pas à votre place si les heures seront réaffectées,
          si les équipes adopteront l’outil ou si le volume commercial suivra.
          Réciproquement, le client doit fournir des données utilisables et des
          personnes capables de tester : l’expertise technique ne reconstitue
          pas seule le processus réel.
        </p>

        <p>
          Lorsque le projet comporte plusieurs flux, rôles et logiciels
          connectés, transformez le dossier économique en critères de réception
          avec le guide du{" "}
          <Link href="/guides/cahier-des-charges-application-metier">
            cahier des charges d’une application métier
          </Link>
          . Le bénéfice attendu n’est pas un critère technique d’acceptation ;
          en revanche, les fonctions, données, droits et mesures nécessaires
          pour l’obtenir doivent pouvoir être testés.
        </p>

        <GuideInlineCTA
          title="Savoir si l’application mérite vraiment l’investissement"
          description="Décrivez le travail actuel, les volumes, les coûts connus et les solutions déjà envisagées. Nous vous aidons à vérifier si le sur-mesure est justifié, si un outil standard ferait mieux ou si une amélioration plus simple suffit — sans vous promettre un ROI avant d’avoir mesuré."
          tags={[
            "Coût complet comparé",
            "Gains réalistes",
            "Alternative simple étudiée",
          ]}
          ctaLabel="Évaluer mon projet d’application"
          ctaHref="/demarrer-un-projet"
        />

        <h3>Vérifiez après 1, 3 et 6 mois si les gains sont réellement là</h3>

        <p>
          Le ROI prévisionnel autorise un investissement ; il ne prouve pas son
          résultat. Avant la mise en service, figez la version de la base, la
          formule, les sources et la personne qui mesurera. Après le lancement,
          conservez le même vocabulaire. Si « correction » signifiait un dossier
          repris avant le projet, elle ne doit pas devenir seulement un ticket
          critique après le projet.
        </p>

        <ol>
          <li>
            <strong>Après un mois :</strong> vérifiez les utilisateurs actifs,
            les blocages, les tâches déplacées et le coût déjà payé.
          </li>
          <li>
            <strong>Après trois mois :</strong> comparez temps par dossier,
            erreurs, volumes et décaissements avec la situation de départ.
          </li>
          <li>
            <strong>Après six mois :</strong> remplacez progressivement la
            prévision par les bénéfices attribuables et le coût réel cumulés.
          </li>
        </ol>

        <p>
          Une faible adoption peut expliquer un démarrage lent : contrôlez
          formation, accès et contournements avant de conclure. Gardez aussi la
          saisonnalité et les changements de volume visibles dans le suivi.
        </p>

        <InfoBox variant="blue" title="La feuille de suivi à copier">
          Pour chaque indicateur, conservez : définition, unité, source,
          responsable, base avant projet, prévision prudente/centrale/haute,
          valeurs après 1, 3 et 6 mois, coût réel cumulé, écart expliqué et
          décision. Une colonne « non mesurable avec les données actuelles »
          vaut mieux qu’une estimation reconstruite après coup.
        </InfoBox>

        <p>
          N’effacez pas le coût déjà engagé lorsque le projet change. Séparez le
          résultat de la première décision du dossier économique de l’évolution.
          Sinon, une nouvelle promesse peut masquer un investissement initial
          décevant, ou inversement faire porter à la première version le coût
          d’un besoin qui n’existait pas au lancement.
        </p>

        <h3>Choisissez : feu vert, pilote, solution simple ou report</h3>

        <p>
          La décision finale ne se résume pas à « ROI positif ». Écrivez une
          phrase simple : option retenue, durée étudiée, investissement maximal,
          résultat minimal acceptable, hypothèse la plus fragile, mesure à
          obtenir et date de réexamen.
        </p>

        <ul>
          <li>
            <strong>Feu vert</strong> si l’option reste la meilleure dans le
            scénario prudent et si la trésorerie peut la financer.
          </li>
          <li>
            <strong>Pilote</strong> si le scénario central est positif, mais
            qu’un gain, une donnée ou une connexion reste incertain.
          </li>
          <li>
            <strong>Solution plus simple</strong> si une fonction existante ou
            un logiciel standard satisfait le besoin avec moins de risque.
          </li>
          <li>
            <strong>Report</strong> si le travail actuel n’est pas mesuré, si
            les règles changent encore ou si les scénarios crédibles restent
            négatifs.
          </li>
        </ul>

        <p>
          Un cas adapté à Hagnéré Code possède un processus assez stable, des
          données accessibles, un responsable métier, un bénéfice mesurable et
          une intégration ou une spécificité que les outils simples couvrent
          mal. Un cas inadapté repose sur du confort non mesuré, change de règle
          chaque semaine, n’a aucun propriétaire ou peut être résolu avec une
          fonction déjà payée. Dans ce dernier cas, ne pas développer protège
          mieux l’entreprise.
        </p>

        <p>
          Votre action autonome tient en trois étapes : mesurez un cycle,
          recopiez les cinq réponses de départ, puis faites varier la part des
          heures réellement réutilisées, le retard de mise en service et le coût
          complet. Si la même option reste gagnante et qu’un échéancier séparé
          confirme que la trésorerie peut financer les paiements, vous avez une
          base de consultation. Sinon, le calcul a déjà produit de la valeur en
          évitant un investissement prématuré.
        </p>

        <h2 id="sources">Sources et limites</h2>

        <p>
          Recherche française complétée par un benchmark Royaume-Uni,
          États-Unis, Australie, Allemagne et Canada le 25 juillet 2026. Les
          formules économiques sont explicitées dans la page ; l’atelier, les
          coûts, les réductions et les scénarios sont entièrement fictifs. Ils
          ne constituent ni un devis, ni une promesse de délai, ni une prévision
          applicable à une autre entreprise. Ce guide n’est pas un conseil
          comptable ou financier personnalisé.
        </p>

        <ul>
          <li>
            <a
              href="https://www.francenum.gouv.fr/guides-et-conseils/strategie-numerique/comprendre-le-numerique/comment-mesurer-les-effets-de-la"
              target="_blank"
              rel="noreferrer"
            >
              France Num — Comment mesurer les effets de la transformation
              numérique d’entreprise
            </a>
            , mise à jour le 21 avril 2026, pour la nécessité de relier les
            projets à des objectifs et données suivis, ainsi que la difficulté
            de chiffrer certains effets.
          </li>
          <li>
            <a
              href="https://www.insee.fr/fr/statistiques/2381340"
              target="_blank"
              rel="noreferrer"
            >
              Insee — Coût horaire du travail selon l’activité
            </a>
            , paru le 2 juillet 2026, pour les repères 2025 de 44,2 € dans les
            services marchands et 44,7 € dans l’ensemble marchand, entreprises
            de 10 salariés ou plus. Aucun de ces deux nombres n’est utilisé dans
            l’exemple fictif.
          </li>
          <li>
            <a
              href="https://www.francenum.gouv.fr/guides-et-conseils/strategie-numerique/comprendre-le-numerique/besoins-des-tpe-pme-et-pratiques"
              target="_blank"
              rel="noreferrer"
            >
              France Num / Direction générale des Entreprises — Besoins des
              TPE-PME et pratiques numériques
            </a>
            , enquête BCG-EY menée en 2019–2020 avec 30 entretiens puis plus de
            1 000 entreprises, pour la place des besoins concrets, du temps, des
            coûts et du retour sur investissement dans les préoccupations
            observées. Aucun taux ancien de l’étude n’est généralisé ici.
          </li>
          <li>
            <a
              href="https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/ameliorer-la-performance-de"
              target="_blank"
              rel="noreferrer"
            >
              Direction générale des Entreprises — Améliorer la performance de
              son entreprise grâce aux technologies numériques
            </a>
            , guide méthodologique fondé sur un échantillon de 300 entreprises,
            pour le départ par le besoin, l’auto-évaluation et l’amélioration du
            processus. Il ne fournit pas les gains chiffrés de notre exemple.
          </li>
          <li>
            <a
              href="https://www.gov.uk/government/publications/digital-and-data-benefits-framework/digital-and-data-benefits-framework"
              target="_blank"
              rel="noreferrer"
            >
              Royaume-Uni — Digital and Data Benefits Framework
            </a>
            , publié le 7 avril 2026, pour la base de référence, la séparation
            des bénéfices, la non-double-comptabilisation, l’adoption, les
            scénarios et le responsable de chaque bénéfice.
          </li>
          <li>
            <a
              href="https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2026"
              target="_blank"
              rel="noreferrer"
            >
              Royaume-Uni — Green Book 2026
            </a>
            , pour l’examen d’options comparables, la sensibilité et les valeurs
            de bascule. Ce cadre public n’est pas appliqué ici comme une
            procédure obligatoire pour une PME.
          </li>
          <li>
            <a
              href="https://www.gao.gov/assets/gao-20-195g.pdf"
              target="_blank"
              rel="noreferrer"
            >
              États-Unis — GAO Cost Estimating and Assessment Guide
            </a>
            , pour les hypothèses traçables, le contrôle par une autre méthode,
            la sensibilité et la mise à jour avec les coûts réels. Il justifie
            aussi de remplacer un +20 % arbitraire par une variation documentée.
          </li>
          <li>
            <a
              href="https://www.digital.gov.au/policy/benefits-management-policy/guidance"
              target="_blank"
              rel="noreferrer"
            >
              Australie — Digital Transformation Agency, benefits guidance
            </a>
            , pour relier chaque bénéfice observable à une base, une cible, un
            responsable, des dépendances et d’éventuels effets négatifs.
          </li>
          <li>
            <a
              href="https://www.verwaltungsvorschriften-im-internet.de/bsvwvbund_13012026_IIA3H100500150006005DOKCOO7005100213785493.htm"
              target="_blank"
              rel="noreferrer"
            >
              Allemagne — BMF, Arbeitsanleitung
              Wirtschaftlichkeitsuntersuchungen
            </a>
            , version 2026, pour la comparaison structurée des variantes et
            l’explicitation des hypothèses d’une analyse économique.
          </li>
          <li>
            <a
              href="https://www.canada.ca/en/government/system/laws/developing-improving-federal-regulations/requirements-developing-managing-reviewing-regulations/policy-cost-benefit-analysis.html"
              target="_blank"
              rel="noreferrer"
            >
              Canada — Policy on Cost-Benefit Analysis
            </a>
            , pour le scénario de référence, la transparence des limites et
            l’analyse de sensibilité. Le guide reste un premier tri économique,
            sans prétendre reproduire une analyse réglementaire.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
