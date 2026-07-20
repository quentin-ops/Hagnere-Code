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
        alt: "Calculer le ROI d’une application métier avec trois scénarios",
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
      "Non. Le temps libéré peut créer une valeur économique s’il permet d’absorber davantage de dossiers, d’éviter un recrutement prévu ou d’être réellement réaffecté à une activité utile. Sans usage observable, conservez les heures comme un bénéfice opérationnel non monétisé au lieu de simuler une économie de salaire.",
  },
  {
    question: "Comment traiter une aide ou un crédit d’impôt dans le calcul ?",
    answer:
      "Calculez d’abord le projet sans aide. Ajoutez ensuite un scénario distinct seulement quand l’éligibilité, le montant, le calendrier et le traitement comptable sont confirmés. Une aide incertaine n’est ni un coût négatif ni une raison de rendre artificiellement rentable un projet fragile ; faites valider son traitement par votre conseil comptable.",
  },
  {
    question: "Faut-il annualiser ou actualiser le ROI ?",
    answer:
      "Le ROI simple de ce guide est un résultat cumulé, non annualisé et non actualisé. Cette convention suffit pour un premier tri si elle est écrite et identique entre les options. Pour un investissement long, important ou financé, la direction financière peut compléter avec des flux de trésorerie datés, une valeur actuelle nette et un taux d’actualisation adapté.",
  },
  {
    question: "Quel horizon retenir si le processus change rapidement ?",
    answer:
      "Raccourcissez l’horizon jusqu’à la dernière période où les règles, les volumes et l’organisation restent raisonnablement défendables. Comparez toutes les options depuis la même date de décision et jusqu’à la même date de fin. Si aucune option ne couvre ses coûts avant une évolution déjà prévue, privilégiez une réponse réversible ou un pilote.",
  },
  {
    question: "Comment donner un prix à une réduction de risque ?",
    answer:
      "Utilisez une valeur monétaire seulement si la fréquence des incidents, leur coût et la part réellement évitable sont documentés. Multiplier une probabilité observée par un impact défendable donne une espérance de perte, pas une économie certaine. Sans historique suffisant, gardez le risque dans un registre séparé et ne l’ajoutez pas au ROI.",
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
        heroDescription="Un ROI crédible ne consiste pas à multiplier toutes les heures pénibles par un taux horaire. Il relie une base mesurée, des bénéfices réellement obtenables et le coût complet de chaque option, puis confronte la prévision aux résultats après lancement."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Publié le " + formatGuideDate(guide.datePublished)}
        keyPoints={[
          {
            number: "01",
            title: "5 blocs à documenter",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "3 scénarios recalculables",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "4 options sur 48 mois",
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
            Un projet peut afficher 107,56 % de ROI dans un tableur et retomber
            à 15,76 % dès que les hypothèses sont alignées sur le calendrier
            réel.
          </strong>{" "}
          La différence ne vient pas d’une formule plus compliquée, mais de
          quatre mois sans bénéfice, d’une part de temps réellement réaffectée
          et du coût complet jusqu’à la sortie.
        </p>

        <p>
          <strong>Exemple illustratif fictif.</strong> Une lecture naïve
          valorise 100 % de 26 035,20 € de capacité annuelle et 2 400 € de
          décaissements évités pendant quatre ans. Face à un coût de 54 800 €,
          elle annonce :
        </p>

        <FormulaBox>
          {[
            "Calcul naïf : (113 740,80 € - 54 800 €) / 54 800 € = 107,56 %",
            "",
            "Calcul central corrigé du mois 0 au mois 48 :",
            "(63 437,44 € - 54 800 €) / 54 800 € = 15,76 %",
          ].join("\n")}
        </FormulaBox>

        <p>
          Le premier calcul attribue quatre années de bénéfices à un outil qui
          n’est disponible qu’après quatre mois et suppose que chaque heure
          libérée produit de l’argent. Le second compte 44 mois d’exploitation,
          une capacité partiellement réaffectée, les coûts récurrents et la
          sortie. Le scénario prudent, lui, reste négatif. La suite montre
          comment refaire ce contre-calcul avec vos propres données.
        </p>

        <GuideToc
          items={[
            { id: "dossier", label: "1. Les cinq pièces du dossier" },
            { id: "base", label: "2. Mesurer la situation actuelle" },
            {
              id: "benefices",
              label: "3. Quels gains valent vraiment des euros ?",
            },
            { id: "tco", label: "4. Construire un coût total comparable" },
            { id: "exemple", label: "5. Exemple fictif : trois scénarios" },
            { id: "options", label: "6. Comparer quatre options" },
            {
              id: "stress-test",
              label: "7. Mettre le dossier économique à l’épreuve",
            },
            { id: "responsabilites", label: "8. Responsabilités et décision" },
            {
              id: "suivi",
              label: "9. Contrôler le réel après le lancement",
            },
            {
              id: "decision",
              label: "10. Feu vert, pilote, solution simple ou report",
            },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="dossier">1. Les cinq pièces du dossier avant toute formule</h2>

        <p>
          Le <strong>retour sur investissement (ROI)</strong> exprime le gain ou
          la perte d’un projet par rapport à son coût. Ce pourcentage arrive à
          la fin du raisonnement, pas au début. Avant de le calculer, écrivez
          une page que la direction, le responsable métier et la personne qui
          tient les comptes peuvent relire sans interpréter les mots
          différemment.
        </p>

        <GuideTable
          headers={[
            "Pièce",
            "Question à résoudre",
            "Preuve minimale",
            "Signal d’arrêt",
          ]}
          rows={[
            [
              "1. Base actuelle",
              "Que se passe-t-il réellement aujourd’hui ?",
              "volumes, durées, erreurs et décaissements sur un cycle",
              "les chiffres viennent d’un souvenir ou d’une journée exceptionnelle",
            ],
            [
              "2. Bénéfices",
              "Quel effet sera attribuable au changement ?",
              "économie évitée, capacité réaffectée ou indicateur non monétaire",
              "le même gain est compté sous deux noms",
            ],
            [
              "3. Coût complet",
              "Que faudra-t-il payer et mobiliser jusqu’à la sortie ?",
              "investissement, exploitation, temps interne et réversibilité",
              "une ligne inconnue est remplacée par zéro",
            ],
            [
              "4. Scénarios",
              "Que devient la décision si les hypothèses déçoivent ?",
              "prudent, central et haut avec les mêmes formules",
              "seul le scénario favorable est présenté",
            ],
            [
              "5. Règle de décision",
              "Qui lance, pilote, simplifie ou reporte ?",
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

        <h2 id="base">2. Mesurer la situation actuelle sans deviner</h2>

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
          headers={["Mesure", "Unité", "Où la trouver", "Piège"]}
          rows={[
            [
              "Volume traité",
              "dossiers, lignes ou interventions/période",
              "journal, facturation, échantillon daté",
              "confondre demandes reçues et dossiers terminés",
            ],
            [
              "Temps actif",
              "minutes réellement travaillées",
              "chronométrage de plusieurs cas",
              "inclure toute l’attente",
            ],
            [
              "Corrections",
              "nombre × durée moyenne",
              "retours, avoirs, tickets, reprises",
              "compter deux fois l’erreur et sa correction",
            ],
            [
              "Décaissement",
              "euros réellement payés ou perdus",
              "comptabilité, avoirs, pénalités",
              "valoriser une gêne comme une sortie de caisse",
            ],
            [
              "Délai de service",
              "heures ou jours calendaires",
              "horodatages de début et de fin",
              "le convertir automatiquement en salaire",
            ],
            [
              "Adoption actuelle",
              "utilisateurs, fréquence et contournements",
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
          chargé réel quand il est disponible ; sinon, conservez le repère avec
          son périmètre et testez une fourchette.
        </InfoBox>

        <p>
          Faites valider cette base par la personne qui exécute le travail. Elle
          voit souvent les exceptions invisibles dans le tableau de bord : le
          client rappelé, la donnée copiée dans un deuxième fichier, la pièce
          ressaisie après une panne ou la correction qui n’est jamais classée
          comme incident. L’
          <a
            href="https://www.anact.fr/table-de-simulation-numerique"
            target="_blank"
            rel="noreferrer"
          >
            Anact propose une table de simulation numérique
          </a>{" "}
          pour discuter avec les salariés des futurs flux et de l’organisation.
          Ici, cette discussion sert aussi à éviter un gain théorique qui
          déplace simplement la charge vers une autre personne.
        </p>

        <h2 id="benefices">3. Quels gains valent vraiment des euros ?</h2>

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
          headers={["Famille", "Quand la monétiser", "Calcul", "Sinon"]}
          rows={[
            [
              "Dépense évitée",
              "le paiement disparaît réellement",
              "montant observé × part évitée",
              "conserver le décaissement actuel comme base",
            ],
            [
              "Capacité réaffectée",
              "les heures servent à produire, vendre ou absorber une charge identifiable",
              "heures libérées × part réaffectée × coût pertinent",
              "mesurer les heures sans les convertir en euros",
            ],
            [
              "Recette supplémentaire",
              "volume, conversion, marge et capacité de livraison sont défendables",
              "ventes additionnelles attribuables × marge, pas chiffre d’affaires",
              "suivre le volume sans l’inclure au ROI",
            ],
            [
              "Risque réduit",
              "fréquence et impact proviennent d’incidents ou d’une analyse documentée",
              "probabilité × impact évitable, avec prudence",
              "garder un indicateur de risque séparé",
            ],
            [
              "Qualité ou confort",
              "un lien économique mesurable existe",
              "seulement ce lien, sans prix de convenance",
              "note qualitative et retour utilisateur",
            ],
          ]}
        />

        <p>
          La <strong>part réaffectée</strong> est la fraction du temps libéré
          qui produit effectivement une valeur économique. Si cinq personnes
          gagnent chacune douze minutes dispersées dans la journée, l’entreprise
          ne réduit pas mécaniquement une heure de paie. Elle peut toutefois
          répondre plus vite, absorber une hausse de volume ou réduire la
          fatigue. Mesurez cet effet avec le bon indicateur et monétisez
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

        <h2 id="tco">4. Construire un coût total comparable</h2>

        <p>
          Le <strong>coût total de possession (TCO)</strong> additionne les
          coûts d’acquisition, de mise en œuvre, d’exploitation, d’évolution et
          de sortie sur une même durée. Le prix du devis n’en est qu’une partie.
          Une solution à faible coût initial peut devenir chère avec les
          licences par utilisateur ; un développement payé une fois peut exiger
          hébergement, surveillance et maintenance pendant toute sa vie.
        </p>

        <GuideTable
          headers={["Moment", "Postes à examiner", "Questions de preuve"]}
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
              "nettoyage, migration, double saisie, recette, formation",
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
          , puis ramenez les options retenues dans le même TCO.
        </p>

        <h2 id="exemple">
          5. Exemple fictif : trois scénarios entre la décision et le mois 48
        </h2>

        <p>
          <strong>Exemple illustratif fictif.</strong> Un atelier de maintenance
          industrielle emploie 28 personnes. Après chaque intervention, le
          compte rendu est ressaisi, rapproché et corrigé avant facturation. Les
          nombres ci-dessous ne décrivent ni un client, ni un prix Hagnéré Code,
          ni un rendement moyen. Ils montrent comment remplir le dossier et
          permettent de refaire chaque opération.
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
          Les 26 035,20 € ne sont pas encore un bénéfice. Ils valorisent toute
          la charge actuelle comme si elle disparaissait et était entièrement
          réaffectée. Les scénarios appliqueront donc deux coefficients
          distincts : part de capacité réellement réaffectée et part des
          décaissements réellement évitée.
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
            ["Migration et formation", "socle hypothétique", "2 400 € HT"],
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
              "TCO fictif, mois 0–48",
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
            "Bénéfice annuel fictif = 26 035,20 € × part de capacité réaffectée",
            "                          + 2 400 € × part des décaissements évités",
            "",
            "Bénéfices des mois 5 à 48 = bénéfice annuel / 12 × 44 mois",
            "Gain net cumulé = bénéfices des mois 5 à 48 - 54 800 €",
            "ROI simple cumulé = gain net / 54 800 € × 100",
          ].join("\n")}
        </FormulaBox>

        <GuideTable
          headers={[
            "Scénario fictif",
            "Capacité réaffectée / décaissements évités",
            "Bénéfice annuel",
            "Bénéfices des mois 5–48",
            "Gain net des mois 0–48 / ROI",
          ]}
          rows={[
            [
              "Prudent",
              "35 % / 40 %",
              "10 072,32 €",
              "36 931,84 €",
              "−17 868,16 € / −32,61 %",
            ],
            [
              "Central",
              "60 % / 70 %",
              "17 301,12 €",
              "63 437,44 €",
              "8 637,44 € / 15,76 %",
            ],
            [
              "Haut",
              "80 % / 90 %",
              "22 988,16 €",
              "84 289,92 €",
              "29 489,92 € / 53,81 %",
            ],
          ]}
        />

        <p>
          Le scénario prudent détruit de la valeur sur l’horizon. Ce résultat
          n’est pas une anomalie à gommer : il informe la décision. Le scénario
          central crée 63 437,44 € de bénéfices cumulés entre les mois 5 et 48,
          puis 8 637,44 € de gain net après le TCO. Son ROI est donc :{" "}
          <code>(63 437,44 − 54 800) / 54 800 × 100 = 15,76 %</code>. Il s’agit
          d’un <strong>ROI simple cumulé sur 48 mois calendaires</strong>, non
          annualisé et non actualisé. Pour un investissement long ou matériel,
          la finance peut compléter ce premier tri avec des flux datés et une
          valeur actuelle nette.
        </p>

        <h3>Le délai de retour économique n’est pas un délai de trésorerie</h3>

        <p>
          L’investissement économique avant mise en service vaut 36 000 € dans
          cet exemple fictif, temps interne compris. Le bénéfice central mensuel
          vaut 1 441,76 €. Après 400 € d’hébergement et maintenance et 27,27 €
          de provision mensuelle pour la sortie, le gain économique stable vaut
          1 014,49 € par mois. Le raccourci donne environ{" "}
          <strong>35,49 mois après la mise en service</strong> :{" "}
          <code>36 000 / 1 014,49</code>, soit 39,49 mois depuis la décision.
        </p>

        <p>
          Ce résultat signifie que les gains économiques cumulés compensent
          l’investissement économique ; il ne mesure pas une trésorerie
          immobilisée. La capacité réaffectée n’est pas une entrée de caisse et
          le temps interne n’est pas toujours un paiement additionnel. Un délai
          de retour de trésorerie exigerait un calendrier séparé ne conservant
          que les encaissements et décaissements réels. Dans tous les cas, le
          mois de retour exact est celui où les flux nets cumulés franchissent
          zéro ; la division précédente n’est qu’un raccourci valable ici parce
          que les flux mensuels fictifs sont stables.
        </p>

        <h2 id="options">6. Comparer quatre options sur la même base</h2>

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
            "Service / hypothèses",
            "Coût additionnel mois 0–48",
            "Bénéfices mois 0–48",
            "Résultat cumulé",
          ]}
          rows={[
            [
              "Statu quo",
              "aucune mise en service ; charge actuelle conservée",
              "0 € nouveau dans ce comparatif",
              "0 € nouveau",
              "référence ; ROI incrémental non pertinent",
            ],
            [
              "Simplifier l’existant",
              "mois 2 ; 25 % de capacité / 40 % des décaissements",
              "8 000 € = 4 000 € initiaux et internes + 75 € × 47 mois + 475 € de sortie",
              "29 252,80 € sur 47 mois",
              "+21 252,80 € ; ROI 265,66 %",
            ],
            [
              "Logiciel standard configuré",
              "mois 3 ; 50 % de capacité / 60 % des décaissements",
              "32 000 € = 16 000 € initiaux et internes + 325 € × 46 mois + 1 050 € de sortie",
              "55 420,80 € sur 46 mois",
              "+23 420,80 € ; ROI 73,19 %",
            ],
            [
              "Sur mesure, scénario central",
              "mois 5 ; 60 % de capacité / 70 % des décaissements",
              "54 800 € = 36 000 € initiaux et internes + 400 € × 44 mois + 1 200 € de sortie",
              "63 437,44 € sur 44 mois",
              "+8 637,44 € ; ROI 15,76 %",
            ],
          ]}
        />

        <p>
          La simplification produit le ROI le plus fort parce que son coût est
          faible, tandis que le logiciel standard crée ici le gain net le plus
          élevé. Le sur-mesure libère davantage de capacité, mais pas assez pour
          compenser son coût et ses quatre mois de préparation dans ce cas. Le
          choix rationnel est donc le logiciel standard si ses fonctions, son
          adoption, ses intégrations et sa réversibilité sont réellement
          acceptables ; sinon, simplifier et mesurer avant de réexaminer le
          besoin.
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

        <h2 id="stress-test">
          7. Mettre le dossier économique à l’épreuve avant de signer
        </h2>

        <p>
          Un <strong>test de résistance</strong> consiste à dégrader séparément
          les hypothèses pour trouver celle qui fait basculer la décision. Il ne
          s’agit pas d’empiler des catastrophes, mais de savoir si le projet
          résiste à un retard, une adoption partielle ou un coût supérieur. Une
          moyenne centrale sans bornes masque précisément ce risque.
        </p>

        <ol>
          <li>
            <strong>Réduisez la capacité réaffectée.</strong> Que devient le ROI
            si seuls 35 %, puis 50 % des heures produisent une valeur ?
          </li>
          <li>
            <strong>Retardez les bénéfices.</strong> Ajoutez trois ou six mois
            de montée en charge au lieu de compter le régime stable dès J1.
          </li>
          <li>
            <strong>Augmentez le TCO.</strong> Testez migration, intégration ou
            maintenance à +20 %, sans réduire les autres postes.
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
          Repérez ensuite le <strong>seuil de rupture</strong> : la valeur à
          partir de laquelle le gain net passe sous zéro ou une option devient
          meilleure. Si ce seuil est proche de l’hypothèse centrale, le projet
          n’est pas condamné, mais il doit acheter de l’information avant
          d’acheter tout le logiciel : prototype de flux, pilote sur une équipe,
          test d’intégration ou inventaire de données.
        </p>

        <GuideTable
          headers={[
            "Résultat du test de résistance",
            "Décision prudente",
            "Preuve suivante",
          ]}
          rows={[
            [
              "positif même avec hypothèses prudentes",
              "préparer le cadrage et la trésorerie",
              "devis à périmètre comparable et plan de mesure",
            ],
            [
              "positif seulement au scénario central",
              "piloter une hypothèse critique",
              "mesure de réaffectation, intégration ou adoption",
            ],
            [
              "une option simple domine",
              "simplifier ou configurer d’abord",
              "contrôle après un cycle complet",
            ],
            [
              "négatif dans les scénarios crédibles",
              "reporter ou réduire le périmètre",
              "nouveau déclencheur métier avant réexamen",
            ],
            [
              "données de départ absentes",
              "ne pas calculer de ROI",
              "observation et journal d’incidents",
            ],
          ]}
        />

        <h2 id="responsabilites">8. Qui répond de chaque hypothèse ?</h2>

        <p>
          Un dossier économique sans propriétaire devient vite une négociation
          de chiffres. Le métier connaît le flux, la direction choisit le
          risque, la finance vérifie la convention économique, les utilisateurs
          éprouvent l’adoption et le prestataire chiffre le périmètre. Aucun de
          ces rôles ne peut valider seul l’ensemble.
        </p>

        <GuideTable
          headers={["Responsable", "Ce qu’il doit valider", "Preuve livrée"]}
          rows={[
            [
              "Propriétaire métier",
              "base, exceptions, bénéfices et indicateur",
              "journal daté et règle de calcul",
            ],
            [
              "Utilisateurs référents",
              "nouveau flux, charge déplacée et formation",
              "scénarios testés et retours nommés",
            ],
            [
              "Direction / finance",
              "coût horaire, trésorerie, horizon et seuil",
              "version approuvée du dossier",
            ],
            [
              "Prestataire ou éditeur",
              "périmètre, exclusions, dépendances et exploitation",
              "devis, hypothèses, responsabilités et sortie",
            ],
            [
              "Responsable d’exploitation",
              "mesure après lancement, incidents et continuité",
              "tableau après 1, 3 et 6 mois et procédure d’alerte",
            ],
          ]}
        />

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
          Lorsque plusieurs flux, rôles et intégrations entrent dans le
          périmètre, transformez le dossier économique en critères de réception
          avec le guide du{" "}
          <Link href="/guides/cahier-des-charges-application-metier">
            cahier des charges d’une application métier
          </Link>
          . Le bénéfice attendu n’est pas un critère de recette technique ; en
          revanche, les fonctions, données, droits et mesures nécessaires pour
          l’obtenir doivent pouvoir être testés.
        </p>

        <GuideInlineCTA
          title="Faire relire le dossier avant de chiffrer la solution"
          description="Décrivez le processus, la base mesurée, les options déjà examinées et les inconnues. Le premier échange sert à vérifier le périmètre et les preuves nécessaires ; il ne promet ni ROI ni devis instantané. Si un outil standard ou une simplification suffit, le cadrage doit pouvoir le conclure."
          tags={[
            "Périmètre vérifié",
            "Cas inadaptés signalés",
            "Sans promesse de rentabilité",
          ]}
          ctaLabel="Décrire mon processus"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="suivi">
          9. Remplacer les hypothèses par le réel après 1, 3 et 6 mois
        </h2>

        <p>
          Le ROI prévisionnel autorise un investissement ; il ne prouve pas son
          résultat. Avant la mise en service, figez la version de la base, la
          formule, les sources et la personne qui mesurera. Après le lancement,
          conservez le même vocabulaire. Si « correction » signifiait un dossier
          repris avant le projet, elle ne doit pas devenir seulement un ticket
          critique après le projet.
        </p>

        <GuideTable
          headers={["Moment", "Ce qu’il faut regarder", "Décision possible"]}
          rows={[
            [
              "Avant lancement",
              "base, hypothèses, coût prévu et seuil d’arrêt",
              "lancer, réduire ou reporter",
            ],
            [
              "Après 1 mois",
              "utilisateurs actifs, blocages, charge déplacée et coût réel",
              "corriger l’adoption ou le flux",
            ],
            [
              "Après 3 mois",
              "temps par dossier, erreurs, volumes et décaissements",
              "poursuivre, limiter ou renforcer",
            ],
            [
              "Après 6 mois",
              "bénéfices attribuables cumulés, TCO réel et tendance",
              "étendre, stabiliser ou arrêter",
            ],
            [
              "Chaque évolution majeure",
              "nouveau coût et bénéfice supplémentaire attendu",
              "ouvrir un dossier économique séparé",
            ],
          ]}
        />

        <p>
          Après un mois, une faible adoption peut expliquer l’absence de gain ;
          elle ne justifie pas de déclarer automatiquement le projet en retard.
          Vérifiez formation, accès, performance et contournements. Après trois
          mois, la répétition fournit assez de cas pour comparer des durées et
          erreurs. Après six mois, vous pouvez commencer à remplacer le scénario
          par un cumul observé, tout en conservant la saisonnalité et les
          changements de volume.
        </p>

        <InfoBox variant="blue" title="La feuille de suivi à copier">
          Pour chaque indicateur, conservez : définition, unité, source,
          responsable, base avant projet, prévision prudente/centrale/haute,
          valeurs après 1, 3 et 6 mois, coût réel cumulé, écart expliqué et
          décision. Une colonne « non mesurable avec les données actuelles »
          vaut mieux qu’une estimation reconstruite après coup.
        </InfoBox>

        <p>
          N’effacez pas le coût déjà engagé lorsque le périmètre change. Séparez
          le résultat de la première décision du dossier économique de
          l’évolution. Sinon, une nouvelle promesse peut masquer un
          investissement initial décevant, ou inversement faire porter à la
          première version le coût d’un besoin qui n’existait pas au lancement.
        </p>

        <h2 id="decision">10. Feu vert, pilote, solution simple ou report</h2>

        <p>
          La décision finale ne se résume pas à « ROI positif ». Écrivez une
          phrase que chacun peut contester avec une donnée : option retenue,
          horizon, investissement maximal, scénario minimal acceptable,
          hypothèse la plus fragile, preuve suivante et date de réexamen.
        </p>

        <GuideTable
          headers={["Verdict", "Conditions observables", "Prochaine action"]}
          rows={[
            [
              "Feu vert",
              "option dominante dans le scénario prudent, trésorerie disponible, responsabilités et exploitation couvertes",
              "cadrer le périmètre et les critères de réception",
            ],
            [
              "Pilote",
              "scénario central positif mais hypothèse de gain, donnée ou intégration fragile",
              "tester cette hypothèse sur un flux limité",
            ],
            [
              "Solution plus simple",
              "simplification, fonction existante ou standard satisfait le besoin avec un meilleur rapport valeur/risque",
              "mettre en œuvre puis mesurer un cycle",
            ],
            [
              "Report",
              "base absente, règles mouvantes, bénéfice non attribuable, TCO incomplet ou scénario prudent négatif",
              "observer et fixer un déclencheur de réexamen",
            ],
          ]}
        />

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
          recopiez les cinq pièces du dossier, puis faites varier capacité
          réaffectée, délai de montée en charge et TCO. Si la même option reste
          gagnante et qu’un échéancier de caisse séparé confirme le financement
          des décaissements, vous avez une base de consultation. Sinon, le
          calcul a déjà produit de la valeur en évitant un investissement
          prématuré.
        </p>

        <h2 id="sources">Sources et limites</h2>

        <p>
          Recherche effectuée le 20 juillet 2026. Les formules économiques sont
          explicitées dans la page ; l’atelier, les coûts, les réductions et les
          scénarios sont entièrement fictifs. Ils ne constituent ni un devis, ni
          une promesse de délai, ni une prévision applicable à une autre
          entreprise. Ce guide n’est pas un conseil comptable ou financier
          personnalisé.
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
              href="https://www.anact.fr/table-de-simulation-numerique"
              target="_blank"
              rel="noreferrer"
            >
              Anact — Table de simulation numérique
            </a>
            , pour la participation des salariés à l’examen des futurs flux de
            travail et de leurs effets organisationnels.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
