import type { Metadata } from "next";
import { GuideLayout } from "@/components/guides/guide-layout";
import {
  GuideToc,
  InfoBox,
  GuideTable,
  GuideInlineCTA,
  FormulaBox,
} from "@/components/guides/guide-content-blocks";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { OG_BASE, SITE_URL } from "@/lib/seo";
import { getGuide, guidePath, guideUrl, formatGuideDate } from "@/lib/guides";

const guide = getGuide("combien-coute-une-application-mobile");

export const metadata: Metadata = {
  title: guide.title,
  description: guide.metaDescription,
  authors: [{ name: "Quentin Hagnéré" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  alternates: { canonical: guidePath(guide) },
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: guide.cardTitle,
    description: guide.metaDescription,
    url: guidePath(guide),
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
  headline: guide.cardTitle,
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
    knowsAbout: [
      "Développement mobile",
      "React Native",
      "Next.js",
      "React",
      "Chiffrage de projets web et mobiles",
    ],
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
      name: "Combien coûte une application mobile ?",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Quel budget prévoir pour une application mobile ?",
    answer:
      "Dans les scénarios Hagnéré détaillés dans ce guide, comptez environ 20 000 à 50 000 € pour une première version mobile réellement utilisable et 35 000 à 80 000 € pour une application métier plus connectée. Une place de marché, un fonctionnement hors ligne complexe ou des données sensibles peuvent dépasser 80 000 €. Ce ne sont pas des moyennes du marché : le devis doit relier chaque montant à une liste précise de fonctions.",
  },
  {
    question: "Ai-je vraiment besoin d'une application mobile ?",
    answer:
      "Pas toujours. Si les utilisateurs ouvrent le service occasionnellement, un site mobile ou une application web installable peut suffire. Une application devient plus pertinente pour un usage fréquent, des notifications utiles, du hors-ligne ou l'accès à des fonctions du téléphone. Testez d'abord le besoin, pas l'envie de figurer dans les catalogues Apple et Google.",
  },
  {
    question: "Combien coûte la publication chez Apple et Google ?",
    answer:
      "Apple affiche 99 USD par année d'adhésion à son programme développeur, en devise locale lorsqu'elle est disponible. Google Play affiche 25 USD de frais d'inscription uniques. Des vérifications, règles de test et commissions peuvent s'ajouter selon le compte, le pays et ce qui est vendu. Vérifiez les pages officielles au moment de publier.",
  },
  {
    question: "Faut-il développer séparément pour iPhone et Android ?",
    answer:
      "Pas forcément. Une base commune peut partager une partie importante du travail, mais les fonctions propres au téléphone, les appareils et les règles de publication restent à tester. Le choix doit dépendre de l'usage et des compétences disponibles pour maintenir l'application, pas d'un pourcentage d'économie universel.",
  },
  {
    question: "Combien de temps faut-il pour créer l'application ?",
    answer:
      "Dans les scénarios de ce guide, une première version aux fonctions limitées demande souvent deux à quatre mois ; une application complète, connectée ou réglementée peut demander quatre à huit mois ou davantage. Ces estimations supposent des décisions rapides et les accès nécessaires disponibles. Le planning contractuel doit détailler la conception, le développement, la validation et la publication.",
  },
  {
    question: "Quel budget prévoir après le lancement ?",
    answer:
      "Prévoyez l'hébergement, le suivi des erreurs, le support, les mises à jour imposées par iOS et Android, les correctifs et les évolutions. Le montant ne se déduit pas automatiquement d'un pourcentage du prix initial. Demandez un scénario mensuel avec le niveau de service, le volume d'utilisateurs et les services facturés à l'usage.",
  },
  {
    question: "Qui doit posséder les comptes Apple et Google ?",
    answer:
      "Votre entreprise. Elle doit aussi disposer des accès administrateurs, de la facturation et des moyens de récupération. Le prestataire peut être invité pour publier sans devenir propriétaire du compte ni de la relation avec Apple ou Google.",
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
          { label: "Combien coûte une application mobile ?" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous voulez chiffrer une application pour vos clients ou vos équipes ? Vérifiez d'abord s'il faut vraiment une application à télécharger, puis construisez le budget de la première maquette jusqu'à la maintenance."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "Estimation Hagnéré : 20 000 à 50 000 €",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Vérifier d'abord si une application est nécessaire",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Budget initial et coût annuel séparés",
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
            href: "/guides/combien-coute-un-site-internet",
            label: "Combien coûte un site internet ?",
          },
          {
            href: "/services/application-mobile",
            label: "Création d'application mobile",
          },
          {
            href: "/services/saas-applications-metier",
            label: "Développement SaaS",
          },
          {
            href: "/guides/no-code-ou-sur-mesure",
            label: "No-code ou sur mesure",
          },
          { href: "/tarifs", label: "Nos tarifs détaillés" },
          { href: "/realisations", label: "Nos réalisations" },
        ]}
        faqTitle="Prix d'une application mobile : les réponses simples"
        faqItems={faqItems}
      >
        <p className="lead">
          Vous avez peut-être une idée d&apos;application pour fidéliser vos
          clients, vendre un service ou faire gagner du temps à vos équipes.
          Dans nos scénarios, une{" "}
          <strong>
            première version mobile réellement utilisable est estimée entre 20
            000 et 50 000 €
          </strong>
          . Nous supposons ici les fonctions essentielles, les comptes, une
          administration, les tests et la publication. Une application métier
          avec plusieurs rôles, des connexions à vos outils ou un fonctionnement
          hors ligne est plutôt estimée entre{" "}
          <strong>35 000 et 80 000 €</strong>. Ce sont des estimations Hagnéré,
          pas une moyenne du marché. Avant de chercher un devis, vérifiez
          surtout qu&apos;une application est la solution la plus simple à votre
          besoin.
        </p>

        <InfoBox
          variant="amber"
          title="La première économie consiste parfois à ne pas créer d'application"
        >
          Si un client utilise votre service deux fois par an, il ne voudra
          peut-être pas installer une application. Un site mobile, une
          application web installable ou un espace client peut offrir
          l&apos;essentiel avec moins de publication et de maintenance.
          L&apos;application prend tout son sens lorsqu&apos;elle simplifie un
          usage fréquent ou utilise réellement le téléphone.
        </InfoBox>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. Les budgets selon le projet" },
            {
              id: "bonne-solution",
              label: "2. Faut-il vraiment une application mobile ?",
            },
            { id: "fonctions", label: "3. Les fonctions qui changent le prix" },
            {
              id: "technologie",
              label:
                "4. Faut-il développer séparément pour iPhone et Android ?",
            },
            { id: "devis", label: "5. Lire un devis ligne par ligne" },
            {
              id: "stores",
              label: "6. Les comptes Apple et Google à prévoir",
            },
            { id: "recurrent", label: "7. Le coût après le lancement" },
            { id: "delai", label: "8. Le calendrier réaliste" },
            { id: "rentabilite", label: "9. Vérifier l'intérêt économique" },
            {
              id: "contrat",
              label: "10. Protéger l'entreprise dans le contrat",
            },
          ]}
        />

        <h2 id="reponse-rapide">1. Les budgets selon le projet</h2>
        <p>
          Les fourchettes ci-dessous servent à préparer une enveloppe. Elles
          décrivent des scénarios, avec les hypothèses associées. Elles ne
          constituent ni un baromètre représentatif du marché français, ni un
          tarif ferme.
        </p>
        <GuideTable
          headers={["Projet", "Repère de construction", "Hypothèse retenue"]}
          rows={[
            [
              "Prototype cliquable",
              "2 000 à 8 000 €",
              "Parcours visible, sans produit exploitable",
            ],
            [
              "Application web installable",
              "8 000 à 25 000 €",
              "Un service accessible par navigateur, avec peu de fonctions propres au téléphone",
            ],
            [
              "Première version mobile",
              "20 000 à 50 000 €",
              "Fonctions essentielles, comptes, administration et publication",
            ],
            [
              "Application métier",
              "35 000 à 80 000 €",
              "Plusieurs rôles, données, intégrations et tests terrain",
            ],
            [
              "Place de marché ou application complexe",
              "80 000 € et plus",
              "Paiement, règles multiples, modération ou fortes contraintes",
            ],
          ]}
        />
        <p>
          La « première version » désigne ici un produit exploitable, pas une
          maquette jetable : un utilisateur peut se connecter, accomplir la
          tâche centrale et recevoir de l&apos;aide. Le devis doit dire
          clairement si le fonctionnement en ligne, l&apos;administration, la
          publication et les tests sont inclus.
        </p>

        <h2 id="bonne-solution">
          2. Faut-il vraiment une application mobile ?
        </h2>
        <p>
          Commencez par le comportement attendu. L&apos;objectif n&apos;est pas
          de choisir la technologie la plus impressionnante, mais le moyen le
          plus simple pour que l&apos;utilisateur réussisse sa tâche.
        </p>
        <GuideTable
          headers={[
            "Besoin",
            "Solution à examiner d'abord",
            "Question décisive",
          ]}
          rows={[
            [
              "Consulter ou envoyer une information occasionnellement",
              "Site mobile ou espace web",
              "L'installation apporte-t-elle quelque chose ?",
            ],
            [
              "Utiliser le service chaque semaine",
              "Application web ou mobile",
              "Quel accès rend l'usage plus rapide ?",
            ],
            [
              "Travailler sans réseau",
              "Application avec mode hors ligne",
              "Quelles données doivent rester disponibles ?",
            ],
            [
              "Utiliser appareil photo, géolocalisation ou notifications",
              "Application mobile ou web installable selon le niveau d'accès",
              "La fonction est-elle centrale ou accessoire ?",
            ],
            [
              "Tester une nouvelle idée",
              "Prototype puis petit pilote",
              "Qui l'utilisera réellement avant d'investir davantage ?",
            ],
          ]}
        />
        <InfoBox
          variant="blue"
          title="Exemple fictif : un technicien remplit un rapport après chaque visite"
        >
          Cet exemple ne décrit ni un client ni un témoignage réel. Le besoin
          n&apos;est pas « avoir une application ». Il est de photographier une
          installation, remplir quelques champs sans réseau et synchroniser le
          rapport au retour. Le hors-ligne, la gestion des conflits et la
          connexion au logiciel interne pèseront davantage dans le prix que le
          nombre d&apos;écrans. Cette phrase métier permet déjà de comparer des
          devis plus sérieusement.
        </InfoBox>

        <h2 id="fonctions">3. Les fonctions qui changent le prix</h2>
        <p>
          Compter les écrans ne suffit pas. Un écran de texte et un écran de
          paiement avec plusieurs règles peuvent avoir la même taille visuelle
          et un coût très différent.
        </p>
        <GuideTable
          headers={[
            "Fonction",
            "Travail caché à prévoir",
            "Décision à prendre",
          ]}
          rows={[
            [
              "Comptes utilisateurs",
              "Inscription, récupération, rôles et suppression",
              "Qui voit et modifie quoi ?",
            ],
            [
              "Paiement ou abonnement",
              "Échecs, remboursements, factures et règles d'Apple ou de Google",
              "Que vend l'application et dans quels pays ?",
            ],
            [
              "Données hors ligne",
              "Stockage local, synchronisation et conflits",
              "Que se passe-t-il sans réseau ?",
            ],
            [
              "Notifications",
              "Consentement, scénarios, réglages et mesure",
              "Quelle information mérite d'interrompre l'utilisateur ?",
            ],
            [
              "Connexion au logiciel interne",
              "Mode de connexion technique (API), droits, formats, erreurs et espace de test",
              "Qui maîtrise le système source ?",
            ],
            [
              "Espace d'administration",
              "Gestion des utilisateurs, contenus, alertes et support",
              "Quelles actions l'équipe doit-elle faire seule ?",
            ],
          ]}
        />
        <p>
          Une bonne façon de réduire le budget consiste à supprimer les cas
          rares de la première version, pas les fonctions qui rendent le service
          utilisable. Écrivez les trois actions que l&apos;utilisateur doit
          absolument réussir et construisez le premier lot autour d&apos;elles.
        </p>

        <h2 id="technologie">
          4. Faut-il développer séparément pour iPhone et Android ?
        </h2>
        <p>
          Développer deux applications séparées donne un contrôle fin, mais
          demande deux ensembles de compétences et de tests. Une solution
          multiplateforme permet de partager une partie du travail entre iPhone
          et Android, tout en gardant des adaptations lorsque le téléphone
          l&apos;exige. Une application web installable reste un site et
          n&apos;offre pas exactement les mêmes possibilités.
        </p>
        <GuideTable
          headers={["Choix", "Pertinent lorsque…", "Point de vigilance"]}
          rows={[
            [
              "Deux applications distinctes",
              "Les fonctions du téléphone ou la performance exigent un contrôle très fin",
              "Deux réalisations à entretenir et deux publications à organiser",
            ],
            [
              "Une base commune pour iPhone et Android",
              "Le produit vise iPhone et Android avec beaucoup de parcours communs",
              "Certaines adaptations et les tests par appareil restent nécessaires",
            ],
            [
              "Application web installable",
              "Le service est surtout web et la présence dans un catalogue n'est pas centrale",
              "Possibilités variables selon les téléphones",
            ],
            [
              "Une seule plateforme",
              "Le public pilote utilise réellement le même équipement",
              "Prévoir l'ouverture éventuelle à l'autre plateforme",
            ],
          ]}
        />
        <p>
          Demandez qui maintiendra la solution dans trois ans, comment le code
          sera repris et quels composants extérieurs sont indispensables. Une
          économie de construction perd son intérêt si personne ne peut faire
          évoluer le produit.
        </p>

        <h2 id="devis">5. Lire un devis ligne par ligne</h2>
        <p>
          Voici un exemple fictif de première version pour réserver un service,
          payer et recevoir une confirmation. Il illustre une répartition, pas
          le prix de votre application.
        </p>
        <FormulaBox>
          {"EXEMPLE PÉDAGOGIQUE — PREMIÈRE VERSION MULTIPLATEFORME\n" +
            "Besoin et parcours                  3 000 €\n" +
            "Design des écrans                   4 000 €\n" +
            "Application mobile                 14 000 €\n" +
            "Serveur et administration           8 000 €\n" +
            "Paiement et notifications           4 000 €\n" +
            "Tests, publication et transfert     5 000 €\n" +
            "TOTAL DE L'EXEMPLE                  38 000 €"}
        </FormulaBox>
        <p>
          Pour comparer deux offres, vérifiez les mêmes lignes : conception,
          design, application, serveur, administration, intégrations, tests,
          publication, documentation et accompagnement. Un devis à 22 000 € peut
          être meilleur ou moins complet qu&apos;un devis à 38 000 € ; le total
          seul ne le dit pas.
        </p>
        <InfoBox variant="amber" title="Trois exclusions qui changent tout">
          « Serveur et administration fournis par le client », « publication non
          incluse » et « design à partir de composants standards » peuvent
          expliquer un prix plus faible. Ce n&apos;est pas un problème si vous
          comprenez qui réalise ces travaux, à quel prix et avant quelle date.
        </InfoBox>

        <h2 id="stores">6. Les comptes Apple et Google à prévoir</h2>
        <p>
          Pour distribuer publiquement une application, Apple affiche une
          adhésion de
          <strong> 99 USD par an</strong>, en devise locale lorsqu&apos;elle est
          disponible. Google Play affiche{" "}
          <strong>25 USD de frais d&apos;inscription uniques</strong>. Ces
          montants officiels peuvent évoluer : vérifiez-les au moment du projet.
        </p>
        <p>
          Les commissions sur les achats et abonnements ne se résument pas à un
          taux unique. Elles dépendent notamment du type de vente, du programme,
          du pays et des règles de paiement applicables. Le modèle économique
          doit donc préciser ce qui est vendu avant de calculer le revenu net.
        </p>
        <InfoBox
          variant="blue"
          title="Créez les comptes au nom de votre entreprise"
        >
          Utilisez l&apos;entité juridique, l&apos;adresse et les moyens de
          récupération de votre entreprise. Invitez ensuite le prestataire avec
          les droits nécessaires. Si le compte appartient à l&apos;agence ou à
          un ancien freelance, changer de partenaire peut devenir inutilement
          difficile.
        </InfoBox>

        <h2 id="recurrent">7. Le coût après le lancement</h2>
        <p>
          Une application continue de coûter même si aucune nouvelle fonction
          n&apos;est demandée. Le serveur traite les données, les systèmes
          mobiles évoluent et les utilisateurs ont besoin d&apos;assistance.
        </p>
        <GuideTable
          headers={[
            "Poste récurrent",
            "Ce qui le fait varier",
            "Question à poser",
          ]}
          rows={[
            [
              "Hébergement et base de données",
              "Utilisateurs, stockage, trafic et traitements",
              "Quel scénario bas, central et haut a été simulé ?",
            ],
            [
              "Services externes",
              "SMS, e-mails, cartes, paiement, IA et notifications",
              "Quel service facture à l'usage ?",
            ],
            [
              "Maintenance",
              "Composants utilisés, appareils et fréquence des versions",
              "Quelles mises à jour sont incluses ?",
            ],
            [
              "Surveillance et sauvegarde",
              "Niveau de service et durée de conservation",
              "Qui reçoit une alerte et intervient ?",
            ],
            [
              "Support utilisateurs",
              "Volume, horaires et complexité des demandes",
              "Qui répond et avec quel délai ?",
            ],
          ]}
        />
        <p>
          Demandez un budget sur trois ans avec trois niveaux d&apos;activité.
          Un service presque gratuit au lancement peut devenir un poste
          important si la facturation est liée aux SMS, aux cartes, aux fichiers
          ou aux appels d&apos;intelligence artificielle.
        </p>

        <h2 id="delai">8. Le calendrier réaliste</h2>
        <GuideTable
          headers={["Étape", "Repère indicatif", "Condition de tenue"]}
          rows={[
            [
              "Prototype",
              "2 à 4 semaines",
              "Un parcours à tester et des décideurs disponibles",
            ],
            [
              "Première version mobile",
              "2 à 4 mois",
              "Fonctions décidées, comptes et données accessibles",
            ],
            [
              "Application complète",
              "4 à 8 mois ou plus",
              "Connexions, sécurité et validation planifiées",
            ],
            [
              "Publication",
              "À prévoir dans le planning",
              "Comptes vérifiés et dossier store complet",
            ],
          ]}
        />
        <p>
          La publication ne doit pas être placée la veille d&apos;une campagne.
          Les informations de confidentialité, les captures, les tests et les
          éventuels échanges avec les plateformes font partie du projet. Le
          planning doit garder une marge et prévoir ce qui se passe si une
          soumission demande une correction.
        </p>

        <h2 id="rentabilite">9. Vérifier l&apos;intérêt économique</h2>
        <p>
          Une application n&apos;est pas rentable parce qu&apos;elle est
          téléchargée. Elle doit créer un revenu, éviter un coût ou améliorer un
          service assez souvent pour couvrir sa construction et son
          exploitation.
        </p>
        <GuideTable
          headers={["Projet", "Valeur à mesurer", "Test avant développement"]}
          rows={[
            [
              "Application vendue par abonnement",
              "Revenu net, rétention et coût d'acquisition",
              "Prévente, entretiens et prototype",
            ],
            [
              "Application de fidélisation",
              "Achats répétés ou usage d'un avantage précis",
              "Tester l'offre sans application",
            ],
            [
              "Application métier",
              "Temps évité, erreurs réduites et délais de traitement",
              "Mesurer le processus actuel",
            ],
            [
              "Application de service client",
              "Demandes résolues et satisfaction",
              "Analyser les motifs de contact existants",
            ],
          ]}
        />
        <p>
          Pour un outil interne, calculez par exemple le temps réellement
          économisé chaque mois, son coût chargé et la part de ce gain que
          l&apos;organisation pourra effectivement récupérer. Pour un produit
          vendu, ajoutez le budget nécessaire pour trouver et accompagner les
          premiers utilisateurs.
        </p>

        <h2 id="contrat">10. Protéger l&apos;entreprise dans le contrat</h2>
        <ul>
          <li>
            les comptes Apple, Google et services en ligne sont au nom de votre
            entreprise ;
          </li>
          <li>
            la cession ou la licence du code, du design et des contenus est
            écrite ;
          </li>
          <li>
            le dépôt de code, la documentation et les accès sont transférables ;
          </li>
          <li>
            les données collectées, leurs finalités et leur suppression sont
            décrites ;
          </li>
          <li>
            les appareils testés et les critères d&apos;acceptation sont listés
            ;
          </li>
          <li>
            la maintenance distingue incidents, mises à jour et nouvelles
            fonctions ;
          </li>
          <li>
            les coûts facturés à l&apos;usage sont visibles et plafonnables
            lorsque c&apos;est possible.
          </li>
        </ul>
        <p>
          Les recommandations de la CNIL pour les applications mobiles
          rappellent que les responsabilités concernent plusieurs acteurs de
          l&apos;écosystème. Faites valider les obligations propres à votre
          activité par les professionnels compétents, en particulier pour la
          santé, la finance, les mineurs ou la géolocalisation.
        </p>

        <GuideInlineCTA
          title="Chiffrons d'abord la version qui prouve l'utilité"
          description="Expliquez-nous qui utilisera l'application, à quelle fréquence et pour accomplir quoi. Nous vous proposerons une liste de fonctions compréhensible, avec le coût initial, les frais récurrents et les choix reportés."
        />

        <h2 id="sources">Sources</h2>
        <p className="text-sm">
          Frais et comptes :{" "}
          <a
            href="https://developer.apple.com/support/compare-memberships/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple Developer, comparaison des adhésions
          </a>{" "}
          et{" "}
          <a
            href="https://support.google.com/googleplay/android-developer/answer/6112435"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Play Console, création d&apos;un compte
          </a>
          . Au 21 juillet 2026, ces pages affichent respectivement 99 USD par an
          et 25 USD de frais d&apos;inscription uniques, sous réserve des
          conditions et exemptions indiquées par chaque plateforme.
        </p>
        <p className="text-sm">
          Données personnelles :{" "}
          <a
            href="https://www.cnil.fr/fr/applications-mobiles-la-cnil-publie-ses-recommandations"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL, recommandations pour les applications mobiles
          </a>
          . Les fourchettes de prix et de délai sont des estimations Hagnéré
          construites à partir des scénarios et des éléments inclus dans le
          premier tableau. Elles ne sont ni des moyennes représentatives ni des
          promesses contractuelles.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
