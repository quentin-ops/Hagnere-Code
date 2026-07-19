import type { Metadata } from "next";
import Link from "next/link";
import { ExcelDecisionDiagnostic } from "@/components/guides/ExcelDecisionDiagnostic";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import {
  formatGuideDate,
  getGuide,
  guideUrl,
} from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("transformer-excel-en-application");

export const metadata: Metadata = {
  title: guide.title,
  description: guide.metaDescription,
  authors: [{ name: "Quentin Hagnéré" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  alternates: { canonical: guideUrl(guide) },
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: guide.cardTitle,
    description: guide.metaDescription,
    url: guideUrl(guide),
    images: [
      {
        url: `${guideUrl(guide)}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Transformer un fichier Excel en application métier : diagnostic et méthode",
      },
    ],
    publishedTime: `${guide.datePublished}T09:00:00+02:00`,
    modifiedTime: `${guide.dateModified}T09:00:00+02:00`,
    authors: [`${SITE_URL}/equipe`],
  },
  twitter: {
    card: "summary_large_image",
    title: guide.cardTitle,
    description: guide.metaDescription,
    images: [`${guideUrl(guide)}/opengraph-image`],
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

const articleJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: guide.cardTitle,
  description: guide.metaDescription,
  url: guideUrl(guide),
  mainEntityOfPage: { "@type": "WebPage", "@id": guideUrl(guide) },
  image: [`${guideUrl(guide)}/opengraph-image`],
  datePublished: guide.datePublished,
  dateModified: guide.dateModified,
  inLanguage: "fr-FR",
  articleSection: guide.section,
  isPartOf: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/guides`,
    name: "Guides web Hagnéré Code",
  },
  author: {
    "@type": "Person",
    name: "Quentin Hagnéré",
    jobTitle: "Fondateur de Hagnéré Code",
    url: `${SITE_URL}/equipe`,
    knowsAbout: [
      "Applications métier",
      "Outils internes",
      "Migration de données",
      "Excel",
      "Power Apps",
      "Développement sur mesure",
    ],
    sameAs: ["https://www.linkedin.com/in/quentin-hagnere"],
    worksFor: { "@id": `${SITE_URL}/#organization` },
  },
  publisher: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Hagnéré Code",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logos/logo-dark.png`,
    },
  },
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Transformer Excel en application métier",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Peut-on transformer automatiquement un fichier Excel en application ?",
    answer:
      "Des outils comme Power Apps savent importer une table Excel et générer une première interface. Cela transforme des colonnes en champs et des lignes en enregistrements, mais pas votre processus en logiciel fini. Les formules, macros, droits par profil, validations, doublons et exceptions métier doivent encore être compris, traduits et testés. L’automatisation accélère le prototype ; elle ne remplace ni le cadrage ni la recette.",
  },
  {
    question: "Comment savoir s’il faut garder Excel ou le remplacer ?",
    answer:
      "Gardez Excel si une ou deux personnes l’utilisent, si le risque d’erreur reste faible et si aucune intégration ni traçabilité fine n’est nécessaire. Une application devient pertinente lorsque plusieurs personnes écrivent simultanément, que des droits différents sont nécessaires, que les ressaisies se multiplient, que les règles sont devenues fragiles ou qu’une erreur peut bloquer l’activité. Le diagnostic interactif du guide applique cette logique et peut recommander de conserver Excel.",
  },
  {
    question: "Power Apps est-il inclus dans Microsoft 365 ?",
    answer:
      "Microsoft 365 inclut des capacités Power Apps permettant de créer, exécuter et partager des applications utilisant des données Microsoft 365 et des connecteurs standard. L’accès aux données sur site et l’usage de connecteurs premium ou personnalisés ne sont pas inclus. Au 19 juillet 2026, Microsoft France affiche Power Apps Premium à 17,30 euros HT par utilisateur et par mois avec paiement annuel. Vérifiez toujours les connecteurs et le tarif au moment du devis.",
  },
  {
    question: "Combien coûte le passage d’Excel à une application métier ?",
    answer:
      "Il n’existe pas de prix moyen public suffisamment fiable pour répondre par une fourchette universelle. Comparez plutôt quatre ans de coût total : licences, paramétrage ou développement, nettoyage et reprise des données, temps de vos équipes, formation, hébergement, maintenance, évolutions et coût de sortie. Deux devis ne sont comparables que s’ils couvrent le même processus, le même volume, les mêmes utilisateurs et le même horizon.",
  },
  {
    question: "Faut-il migrer tout l’historique Excel ?",
    answer:
      "Pas nécessairement. Trois stratégies sont courantes : tout reprendre, ne migrer que les dossiers actifs en conservant une archive consultable, ou repartir avec une base propre et une archive séparée. La décision dépend des usages et des obligations de conservation. Les documents comptables et leurs justificatifs doivent notamment être conservés dix ans en France ; les documents fiscaux visés par l’article L102 B du Livre des procédures fiscales, six ans.",
  },
  {
    question: "Qui est propriétaire de l’application développée à partir de mon Excel ?",
    answer:
      "Vos données restent les vôtres, mais payer le développement ne transfère pas automatiquement les droits sur le code. L’article L131-3 du Code de la propriété intellectuelle impose une cession écrite qui précise chaque droit cédé ainsi que son étendue, sa destination, son territoire et sa durée. Demandez aussi un dépôt Git à votre nom, la documentation et une clause de réversibilité : la propriété juridique sans les accès techniques ne suffit pas.",
  },
  {
    question: "Combien de temps faut-il conserver l’ancien fichier après la bascule ?",
    answer:
      "Conservez une copie figée et protégée au minimum pendant la période nécessaire à la recette et au retour arrière. Ensuite, appliquez vos durées légales et métier : dix ans pour les documents comptables et pièces justificatives au titre de l’article L123-22 du Code de commerce, six ans pour les documents fiscaux concernés par l’article L102 B. Un document établi ou reçu sous forme informatique doit rester conservé sous cette forme pendant cette durée.",
  },
  {
    question: "Quel est le premier livrable à demander à un prestataire ?",
    answer:
      "Demandez une cartographie courte du processus actuel : acteurs, données, règles, exceptions, systèmes connectés et dix scénarios de recette. Elle doit séparer ce qui est indispensable au premier lot de ce qui peut attendre. Si le premier livrable est seulement une maquette séduisante sans inventaire des données ni critères d’acceptation, le projet est encore insuffisamment cadré.",
  },
];

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});

export default function Page() {
  return (
    <GuidesShell>
      <script type="application/ld+json">{articleJsonLd}</script>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <script type="application/ld+json">{faqJsonLd}</script>

      <GuideLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: "Transformer Excel en application" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Le bon résultat n’est pas forcément une application sur mesure. Ce guide vous aide à choisir entre Excel fiabilisé, logiciel existant, Power Apps/no-code et développement spécifique — puis à chiffrer, migrer et contractualiser sans perdre vos données."
        heroAction={{ href: "#diagnostic", label: "Faire le diagnostic gratuit" }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Publié le ${formatGuideDate(guide.datePublished)}`}
        keyPoints={[
          { number: "01", title: "Diagnostic sans email", description: "", color: "violet" },
          { number: "02", title: "4 solutions comparées", description: "", color: "blue" },
          { number: "03", title: "Coût total sur 4 ans", description: "", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/guides/no-code-ou-sur-mesure", label: "No-code ou sur-mesure" },
          { href: "/guides/prix-logiciel-sur-mesure", label: "Prix d’un logiciel sur mesure" },
          { href: "/guides/proprietaire-site-internet-code-source", label: "Propriété du code source" },
          { href: "/guides/cahier-des-charges-site-internet", label: "Cahier des charges" },
          { href: "/services/outils-internes-sur-mesure", label: "Outils internes sur mesure" },
          { href: "/guides/combien-coute-un-saas", label: "Combien coûte un SaaS ?" },
        ]}
        faqTitle="Excel vers application : vos questions"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          <strong>Ne remplacez pas Excel parce que le fichier est gros.</strong>{" "}
          Remplacez-le quand le processus autour du fichier devient coûteux,
          risqué ou impossible à partager : plusieurs personnes doivent écrire
          en même temps, les droits diffèrent selon les profils, les copies se
          contredisent, les règles reposent sur une seule personne ou les
          ressaisies relient péniblement plusieurs logiciels. Sinon, une table
          structurée, Power Query et un stockage compatible avec la coédition
          peuvent suffire.
        </p>

        <InfoBox variant="blue" title="La réponse courte : choisissez dans cet ordre">
          <ol className="mb-0 mt-2 space-y-1.5 pl-5">
            <li><strong>Réparer l’existant</strong> si le problème vient surtout du partage ou d’un fichier mal structuré.</li>
            <li><strong>Acheter un logiciel métier</strong> s’il couvre réellement l’essentiel du besoin.</li>
            <li><strong>Tester Power Apps ou une plateforme no-code</strong> si le processus bouge encore ou reste peu critique.</li>
            <li><strong>Développer sur mesure</strong> lorsque vos règles, intégrations, volumes, droits ou contraintes justifient durablement cette complexité.</li>
          </ol>
        </InfoBox>

        <p>
          Nous développons des applications métier : notre biais commercial est
          donc évident. Pour qu’il ne décide pas à votre place, le diagnostic
          ci-dessous expose ses règles, ne demande aucune coordonnée et peut
          conclure que vous ne devez rien nous acheter.
        </p>

        <GuideToc
          items={[
            { id: "avant-de-remplacer", label: "1. Le test à faire avant de remplacer Excel" },
            { id: "diagnostic", label: "2. Diagnostic : Excel doit-il devenir une application ?" },
            { id: "quatre-solutions", label: "3. Les quatre solutions, à périmètre égal" },
            { id: "donnees-regles-ecrans", label: "4. Ce qui doit être traduit, pas seulement importé" },
            { id: "cout-quatre-ans", label: "5. Le calcul qui décide : quatre ans, tout compris" },
            { id: "migration", label: "6. Migrer sans perdre l’historique ni bloquer l’équipe" },
            { id: "donnees-rgpd", label: "7. Données, RGPD et conservation" },
            { id: "contrat", label: "8. Les clauses et preuves à exiger" },
            { id: "exemple", label: "9. Exemple fictif : la décision de Nathalie" },
            { id: "plan-30-jours", label: "10. Votre plan d’action sur 30 jours" },
            { id: "sources", label: "Sources primaires consultées" },
          ]}
        />

        <h2 id="avant-de-remplacer">1. Le test à faire avant de remplacer Excel</h2>

        <p>
          Le message « fichier verrouillé » ne prouve pas qu’Excel est arrivé à
          sa limite. Il peut simplement révéler que le classeur est stocké sur
          un NAS ou un partage réseau. Microsoft réserve la coédition moderne à
          un abonnement Microsoft 365 et à un fichier enregistré sur OneDrive,
          OneDrive Entreprise ou SharePoint Online. La documentation précise
          que SharePoint installé sur vos propres serveurs ne prend pas en
          charge cette coédition. Un déplacement du fichier peut donc supprimer
          le symptôme principal sans projet logiciel.
        </p>

        <p>
          Autre fausse piste : le million de lignes. Excel accepte officiellement
          1 048 576 lignes et 16 384 colonnes par feuille. Ce sont des limites de
          format, pas un seuil de confort. Un classeur de 8 000 lignes peut déjà
          être dangereux si personne ne comprend ses macros ; un fichier de
          100 000 lignes peut rester parfaitement adapté s’il sert uniquement à
          une analyse maîtrisée par une personne.
        </p>

        <GuideTable
          headers={["Symptôme observé", "Premier contrôle", "Ne migrez que si…"]}
          rows={[
            ["Fichier verrouillé", "Emplacement, version d’Excel, format du fichier", "la coédition cloud ne répond pas au besoin terrain"],
            ["Fichier lent", "Formules volatiles, styles, macros, requêtes et mémoire", "le processus exige une base ou des traitements plus robustes"],
            ["Copies contradictoires", "Une source unique et des droits de modification", "plusieurs flux doivent vraiment fonctionner hors connexion ou en parallèle"],
            ["Erreurs de saisie", "Listes, validations, champs obligatoires et protection", "des règles par rôle et un historique détaillé sont nécessaires"],
            ["Ressaisies", "Power Query, imports planifiés et API disponibles", "les intégrations doivent être bidirectionnelles ou déclencher un processus"],
          ]}
        />

        <InfoBox variant="emerald" title="L’option zéro, en une demi-journée de vérification">
          <p className="mb-2">
            Faites une copie de travail, transformez les plages en tables
            structurées, documentez les colonnes et déplacez le fichier sur un
            espace compatible avec la coédition. Mesurez ensuite pendant quatre
            semaines les verrouillages, les heures de consolidation et les
            corrections. Si le problème disparaît, vous venez d’éviter une
            migration inutile.
          </p>
          <a
            href="https://support.microsoft.com/en-us/office/collaborate-on-excel-workbooks-at-the-same-time-with-co-authoring-7152aa8b-b791-414c-a3bb-3024e46fb104"
            target="_blank"
            rel="noreferrer"
            className="font-semibold underline"
          >
            Vérifier les conditions de coédition dans la documentation Microsoft
          </a>
        </InfoBox>

        <div id="diagnostic" className="scroll-mt-24">
          <h2>2. Diagnostic : Excel doit-il devenir une application ?</h2>
          <p>
            Cochez des faits observables, pas des impressions. Le nombre de
            lignes ne compte volontairement pas dans le score : ce sont les
            usages, les risques et les dépendances qui déterminent le besoin.
          </p>
          <ExcelDecisionDiagnostic />
        </div>

        <p>
          Le résultat est un point de départ. Un score élevé ne signifie pas
          « sur-mesure obligatoire ». Il signifie que le tableur porte désormais
          des responsabilités de logiciel : authentifier, autoriser, tracer,
          synchroniser, sauvegarder et résister à une erreur humaine. Un logiciel
          existant peut encore être la meilleure réponse.
        </p>
        <p>
          Le seuil de 80 % utilisé pour un logiciel existant est un{" "}
          <strong>critère éditorial de décision, pas une statistique de marché</strong> :
          adaptez-le aux écarts concernés. Les 20 % manquants ne se valent pas si
          l’un porte sur la couleur d’un écran et l’autre sur votre règle de
          facturation.
        </p>

        <h2 id="quatre-solutions">3. Les quatre solutions, à périmètre égal</h2>

        <p>
          Une comparaison honnête ne met pas un abonnement d’appel face à un
          devis complet. Elle demande d’abord le même résultat aux quatre
          options : qui saisit, qui valide, où sont les données, quelles règles
          s’appliquent, quels logiciels échangent, que se passe-t-il en cas de
          panne et comment récupère-t-on l’historique ?
        </p>

        <GuideTable
          headers={["Option", "Elle gagne quand…", "Son coût oublié", "Son point de sortie"]}
          rows={[
            ["Excel fiabilisé", "1 à 3 éditeurs, analyse ou processus simple, risque limité", "documentation, contrôle des versions et dépendance à l’expert du fichier", "droits fins, mobilité terrain, historique par opération ou intégrations"],
            ["Logiciel métier existant", "un produit couvre environ 80 % du besoin sans détourner votre organisation", "paramétrage, reprise, formation et options payantes", "écart métier durable ou absence d’export exploitable"],
            ["Power Apps / no-code", "prototype, outil interne contenu, processus encore évolutif", "licences par utilisateur, administration, plafonds et reconstruction à la sortie", "contournements, coût par siège ou intégrations premium"],
            ["Développement sur mesure", "règles différenciantes, intégrations fortes, droits complexes ou criticité élevée", "cadrage, reprise, maintenance et évolution", "besoin instable, faible usage ou solution standard suffisante"],
          ]}
        />

        <h3>Power Apps : ce qui est compris, et où la facture commence</h3>

        <p>
          Microsoft indique que les capacités Power Apps associées à Microsoft
          365 permettent de créer, exécuter et partager des applications sur les
          données Microsoft 365 et des connecteurs standard. La même page exclut
          l’accès aux données hébergées sur site ainsi que les connecteurs
          premium ou personnalisés. Cette ligne change souvent toute l’économie
          du projet : une démonstration sur Excel Online ou SharePoint ne prouve
          pas que la future connexion à SQL, à un ERP ou à Dataverse restera
          incluse.
        </p>

        <p>
          Au 19 juillet 2026, la page française de Microsoft affiche Power Apps
          Premium à <strong>17,30 € HT par utilisateur et par mois</strong>, avec
          paiement annuel. Elle affiche aussi 250 Mo de base de données et 2 Go
          de fichiers dans les droits indiqués, puis un complément de capacité
          Dataverse à 34,70 € HT par Go et par mois. Ces tarifs sont volatils :
          conservez la capture ou le devis daté utilisé dans votre calcul.
        </p>

        <InfoBox variant="amber" title="Une importation n’est pas une migration terminée">
          Microsoft propose bien de charger un fichier Excel pour créer une table
          Dataverse et une première application. Sa documentation précise que la
          conversion travaille sur la première plage tabulaire de la première
          feuille. Un classeur avec six onglets, des macros, des références
          croisées et des exceptions métier nécessite donc toujours un travail de
          modèle de données et de validation.
        </InfoBox>

        <h2 id="donnees-regles-ecrans">4. Ce qui doit être traduit, pas seulement importé</h2>

        <p>
          Dans Excel, les données, les règles et l’interface sont mélangées dans
          les mêmes cellules. Une application les sépare. La migration ne consiste
          donc pas à « mettre le fichier sur le web » : elle transforme ce que le
          classeur sous-entend en objets explicites, contrôlables et testables.
        </p>

        <GuideTable
          headers={["Dans le classeur", "Dans l’application", "Question à résoudre"]}
          rows={[
            ["Une ligne", "Un enregistrement identifié", "quel identifiant reste unique dans le temps ?"],
            ["Un onglet", "Une table, une vue ou une étape", "s’agit-il d’une donnée différente ou seulement d’un autre affichage ?"],
            ["Une formule", "Une règle métier testée", "qui peut expliquer les cas normaux et les exceptions ?"],
            ["Une couleur", "Un statut défini", "qu’est-ce qui déclenche le passage au statut suivant ?"],
            ["Une cellule protégée", "Un droit lié au rôle", "qui peut lire, créer, modifier, valider ou supprimer ?"],
            ["Une macro", "Une automatisation journalisée", "que se passe-t-il si elle échoue au milieu ?"],
            ["Un copier-coller", "Un import, une API ou un formulaire", "quelle source fait foi et comment traite-t-on les doublons ?"],
          ]}
        />

        <p>
          Commencez par vingt lignes représentatives, pas par une exportation
          complète. Choisissez aussi des cas difficiles : champ vide, client en
          double, date au mauvais format, intervention annulée, montant négatif,
          pièce jointe absente. Si le modèle ne sait pas expliquer ces vingt
          lignes, il ne saura pas absorber vingt mille lignes proprement.
        </p>

        <h3>Les dix scénarios de recette à écrire avant le devis</h3>

        <p>
          La <strong>recette</strong> est la phase où vos équipes vérifient que
          l’outil livré respecte le besoin. Écrivez dix scénarios sous la forme
          « étant donné / quand / alors ». Par exemple : « étant donné une
          intervention urgente attribuée à un technicien absent, quand le
          responsable la réaffecte, alors le nouveau technicien reçoit l’ordre
          et l’historique conserve les deux affectations ». Ces scénarios valent
          davantage qu’une liste vague de fonctionnalités.
        </p>

        <h2 id="cout-quatre-ans">5. Le calcul qui décide : quatre ans, tout compris</h2>

        <p>
          Le prix visible n’est qu’une ligne. Pour comparer le statu quo, un
          logiciel, une plateforme et du sur-mesure, utilisez le même horizon,
          le même nombre d’utilisateurs et le même périmètre. Quatre ans sont
          suffisamment longs pour faire apparaître les abonnements et assez
          courts pour rester raisonnables dans une PME.
        </p>

        <FormulaBox>{`Coût total sur 4 ans =
mise en œuvre ou développement
+ licences × utilisateurs × 48 mois
+ nettoyage et reprise des données
+ heures internes × coût horaire chargé
+ formation et conduite du changement
+ hébergement, maintenance et support
+ évolutions prévisibles
+ coût de sortie ou de réversibilité`}</FormulaBox>

        <p>
          Utilisez votre coût horaire chargé réel, obtenu auprès de la paie ou de
          votre expert-comptable. Ne le remplacez pas par le salaire net et ne
          transformez pas une moyenne nationale en vérité sur votre entreprise.
          Pour le temps perdu, mesurez quatre semaines : consolidation, recherche
          de la bonne version, ressaisie, correction et attente d’un fichier
          verrouillé.
        </p>

        <InfoBox variant="blue" title="Exemple illustratif fictif — la formule, pas une promesse de ROI">
          Nathalie mesure 4 heures de consolidation par semaine. Avec 48 semaines
          de travail et un coût chargé hypothétique de 45 € par heure, le statu
          quo représente 4 × 48 × 45 = <strong>8 640 € par an</strong>, soit
          34 560 € sur quatre ans avant même les incidents. Si douze utilisateurs
          avaient besoin de Power Apps Premium au tarif relevé, les licences seules
          représenteraient 12 × 17,30 × 48 = <strong>9 964,80 € HT</strong> sur
          quatre ans. Aucun des deux nombres ne suffit : il manque encore la mise
          en œuvre, la reprise, l’administration, l’hébergement et la sortie.
        </InfoBox>

        <GuideTable
          headers={["Poste", "Excel actuel", "Logiciel / no-code", "Sur-mesure"]}
          rows={[
            ["Démarrage", "audit et fiabilisation", "paramétrage + éventuel intégrateur", "cadrage + conception + développement"],
            ["Récurrent", "temps manuel + Microsoft 365 déjà souscrit", "licences + administration + options", "hébergement + maintenance + évolutions"],
            ["Temps interne", "corrections et consolidation", "nettoyage + recette + formation", "ateliers + nettoyage + recette + formation"],
            ["Sortie", "faible si le fichier reste documenté", "export des données, reconstruction des écrans et automatisations", "transfert du dépôt, de la documentation et de l’infrastructure"],
            ["Risque majeur", "dépendance à une personne et erreur silencieuse", "verrouillage fournisseur et hausse des licences", "mauvais cadrage ou dépendance au prestataire"],
          ]}
        />

        <p>
          Pour comprendre les postes d’un devis et construire votre propre
          scénario sans dépendre d’un score opaque, consultez aussi le guide du{" "}
          <Link href="/guides/prix-logiciel-sur-mesure">prix d’un logiciel sur mesure</Link>.
        </p>

        <h2 id="migration">6. Migrer sans perdre l’historique ni bloquer l’équipe</h2>

        <p>
          Une bascule sûre se prépare comme une opération métier, pas comme un
          simple import. Chaque étape a un responsable, un livrable et un critère
          de sortie observable.
        </p>

        <ol>
          <li>
            <strong>Geler une copie de référence.</strong> Datez-la, rendez-la
            non modifiable et calculez un condensat ou conservez-la dans un espace
            d’archives protégé. Elle permettra de démontrer ce qui existait avant
            le nettoyage.
          </li>
          <li>
            <strong>Inventorier les données et les règles.</strong> Pour chaque
            onglet : propriétaire, colonnes, volume, formules, macro, source,
            destinataire, durée de conservation et niveau de sensibilité.
          </li>
          <li>
            <strong>Nettoyer sur une copie.</strong> Normalisez dates, unités,
            listes de valeurs et identifiants ; arbitrez les doublons avec le
            métier. Le prestataire ne doit jamais décider seul quel client ou
            montant est « le bon ».
          </li>
          <li>
            <strong>Migrer un échantillon.</strong> Importez des cas normaux et
            difficiles, puis rapprochez le nombre de lignes, les totaux et dix
            dossiers choisis au hasard avec la source.
          </li>
          <li>
            <strong>Faire une marche parallèle courte.</strong> Pendant une
            période définie, comparez les résultats de l’ancien et du nouveau
            système. N’organisez pas une double saisie indéfinie : elle crée
            précisément les divergences que le projet devait supprimer.
          </li>
          <li>
            <strong>Décider la bascule et le retour arrière.</strong> Écrivez qui
            donne le feu vert, à quelle heure, sur quels critères, et jusqu’à quel
            moment l’ancien système peut être réactivé sans perte.
          </li>
          <li>
            <strong>Archiver l’ancien fichier.</strong> Retirez les droits de
            modification, conservez les versions exigées et documentez comment
            retrouver un dossier ancien. « On garde le NAS au cas où » n’est pas
            une politique d’archive.
          </li>
        </ol>

        <InfoBox variant="emerald" title="Critères de réception minimaux">
          <ul className="mb-0 mt-2 space-y-1.5 pl-5">
            <li>100 % des enregistrements attendus sont importés ou justifiés comme exclus ;</li>
            <li>les totaux de contrôle concordent entre la source et la cible ;</li>
            <li>chaque rôle a été testé avec un compte réel de test ;</li>
            <li>les dix scénarios métier passent avec une preuve conservée ;</li>
            <li>un export complet et une restauration ont été réellement exécutés ;</li>
            <li>le responsable métier signe la recette, pas seulement le prestataire.</li>
          </ul>
        </InfoBox>

        <h2 id="donnees-rgpd">7. Données, RGPD et conservation : les questions avant l’outil</h2>

        <p>
          Si le classeur contient des données de clients, prospects, salariés ou
          partenaires, l’éditeur de la plateforme ou l’hébergeur devient souvent
          un sous-traitant au sens du RGPD. La CNIL rappelle que ses obligations
          doivent figurer dans le contrat. Vous restez responsable de traitement :
          l’étiquette « conforme RGPD » sur une page commerciale ne vous transfère
          pas cette responsabilité.
        </p>

        <p>
          Demandez où sont stockées les données du plan réellement souscrit, pas
          de l’offre Enterprise présentée dans la documentation de sécurité.
          Exemple vérifié le 19 juillet 2026 : Airtable indique que la résidence
          européenne est réservée à Enterprise Scale. Même lorsqu’une région
          européenne est choisie, sa documentation liste encore aux États-Unis
          des métadonnées de base, des données d’authentification ainsi que des
          éléments d’analyse et de support. Ce fait n’interdit pas automatiquement
          l’outil ; il oblige à documenter le transfert et le contrat.
        </p>

        <GuideTable
          headers={["Question", "Preuve à demander", "Signal d’alerte"]}
          rows={[
            ["Où sont les données ?", "région du plan, sous-traitants, sauvegardes et support", "réponse globale sans distinguer le plan"],
            ["Qui y accède ?", "matrice des rôles, comptes nominatifs, journaux", "comptes partagés ou droits administrateur généralisés"],
            ["Combien de temps ?", "durées par type de donnée et procédure de purge", "conservation illimitée par défaut"],
            ["Comment restaurer ?", "fréquence, rétention et preuve d’un test de restauration", "simple mention « sauvegardé »"],
            ["Comment sortir ?", "format, périmètre, pièces jointes, délai et coût", "export CSV présenté comme réversibilité complète"],
          ]}
        />

        <h3>Que faire des dix années d’historique ?</h3>

        <p>
          Ne confondez pas historique applicatif et archive légale. L’article
          L123-22 du Code de commerce exige la conservation des documents
          comptables et pièces justificatives pendant dix ans. L’article L102 B
          du Livre des procédures fiscales fixe six ans pour les livres,
          registres, documents ou pièces concernés par les contrôles fiscaux et
          précise qu’un document établi ou reçu sur support informatique doit
          rester conservé sous cette forme pendant cette durée.
        </p>

        <p>
          Vous pouvez donc migrer uniquement les dossiers actifs et conserver le
          reste dans une archive protégée, indexée et consultable. L’application
          n’a pas à porter tout l’historique si l’archive répond mieux au besoin.
          Pour un périmètre comptable, social, médical ou réglementé, faites
          valider les durées applicables à votre situation : ce guide n’est pas
          un conseil juridique personnalisé.
        </p>

        <h2 id="contrat">8. Les clauses et preuves à exiger avant de signer</h2>

        <p>
          Une application sur mesure ne vous rend autonome que si le contrat et
          les accès racontent la même histoire. L’article L131-3 du Code de la
          propriété intellectuelle impose que chaque droit cédé soit mentionné
          distinctement et que son exploitation soit délimitée par l’étendue, la
          destination, le lieu et la durée. La formule « le client est propriétaire »
          ne remplace pas ce formalisme.
        </p>

        <GuideTable
          headers={["À exiger", "Ce que vous devez pouvoir vérifier"]}
          rows={[
            ["Périmètre et exclusions", "écrans, rôles, règles, intégrations, données reprises et éléments hors lot"],
            ["Critères de recette", "scénarios, données de test, responsable de validation et délai de correction"],
            ["Cession de droits", "droits énumérés et quatre délimitations de l’article L131-3"],
            ["Dépôt du code", "organisation Git appartenant au client et historique accessible dès le projet"],
            ["Infrastructure", "comptes d’hébergement, domaine, base, secrets et procédure de déploiement"],
            ["Réversibilité", "données, pièces jointes, journaux, formats, délai, coût et assistance"],
            ["Maintenance", "ce qui relève d’un bug ou d’une évolution, horaires, prise en charge et rétablissement"],
            ["Sortie par jalon", "livrable utilisable, paiement associé et possibilité d’arrêter sans perdre le travail acquis"],
          ]}
        />

        <p>
          La propriété du code ne suffit pas si le dépôt, l’hébergement ou les
          accès restent au nom du prestataire. Inversement, un dépôt accessible
          ne remplace pas une cession écrite. Le guide sur la{" "}
          <Link href="/guides/proprietaire-site-internet-code-source">
            propriété du site et du code source
          </Link>{" "}
          détaille cette différence entre droit, accès et réversibilité.
        </p>

        <h2 id="exemple">9. Exemple fictif : ce que Nathalie devrait décider lundi matin</h2>

        <p>
          <strong>Exemple illustratif fictif.</strong> Nathalie dirige une PME de
          maintenance industrielle de quatorze personnes à Montmélian. Son fichier
          comporte six onglets et 38 000 lignes accumulées depuis 2019. Douze
          personnes doivent écrire, dont cinq techniciens en déplacement. Le
          classeur est sur le NAS du bureau ; quatre heures par semaine sont
          consacrées à consolider les versions.
        </p>

        <p>
          Elle ne devrait pourtant pas demander immédiatement une application
          sur mesure. Son métier dispose de logiciels de gestion de maintenance
          assistée par ordinateur. La première semaine consiste donc à vérifier
          trois choses : la coédition cloud corrige-t-elle le verrouillage ? Une
          GMAO existante couvre-t-elle les interventions, pièces, plannings et
          historiques ? Quelles règles spécifiques expliquent les quatre heures
          de consolidation ?
        </p>

        <p>
          Si une GMAO couvre l’essentiel et accepte un export test, elle gagne. Si
          le processus continue de changer, Nathalie prototype un seul flux. Le
          sur-mesure ne devient rationnel que si les règles de planification,
          l’intégration aux machines ou à l’ERP et le fonctionnement hors
          connexion créent un avantage métier que les outils standards ne savent
          pas fournir. Dans ce cas, le premier lot ne remplace pas les six onglets :
          il traite les interventions actives, avec un résultat exploitable seul.
        </p>

        <InfoBox variant="blue" title="La décision obtenue, sans faux cas client">
          Le bon livrable n’est pas « une application ». C’est un arbitrage
          documenté entre quatre scénarios, avec coût total, risques, preuves et
          condition d’abandon. Nathalie peut décider de conserver Excel, d’acheter
          une GMAO, de prototyper ou de développer — sans perdre le travail de
          diagnostic.
        </InfoBox>

        <h2 id="plan-30-jours">10. Votre plan d’action sur 30 jours</h2>

        <GuideTable
          headers={["Période", "Travail", "Livrable qui prouve que c’est terminé"]}
          rows={[
            ["Jours 1 à 5", "copie figée, inventaire des onglets, formules, macros, acteurs et irritants", "carte du processus + propriétaire de chaque donnée"],
            ["Jours 6 à 10", "mesure du temps perdu et test de l’option zéro", "journal des incidents + fichier fiabilisé en environnement de test"],
            ["Jours 11 à 15", "démonstrations de logiciels sur trois scénarios réels", "grille comparable : couverture, coût 4 ans, export, hébergement"],
            ["Jours 16 à 20", "échantillon nettoyé et dix scénarios de recette", "jeu de données test + critères d’acceptation signables"],
            ["Jours 21 à 25", "comparaison plateforme / sur-mesure si le standard échoue", "deux scénarios au même périmètre, avec exclusions"],
            ["Jours 26 à 30", "décision du premier lot et du plan de retour arrière", "note de décision : faire, tester, reporter ou renoncer"],
          ]}
        />

        <p>
          À la fin du mois, vous devez pouvoir expliquer la décision sans citer
          une technologie : « nous gardons Excel car le partage résout le problème »,
          « nous achetons cet outil car il couvre huit scénarios sur dix », ou
          « nous construisons ce premier flux car aucune solution ne satisfait
          telle règle et telle intégration ». Si la phrase reste « l’interface
          était moderne », vous n’avez pas encore assez travaillé le besoin.
        </p>

        <GuideInlineCTA
          title="Faites relire le diagnostic avant de choisir l’outil"
          description="Envoyez-nous le fichier sans données sensibles, la carte du processus ou simplement le résultat copié du diagnostic. Nous vous répondons personnellement avec le premier point à vérifier — y compris si conserver Excel ou acheter un outil existant est plus rationnel."
          tags={["Réponse humaine", "Sans engagement", "Mauvais fit signalé"]}
          ctaLabel="Faire vérifier mon cas"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="sources">Sources primaires consultées le 19 juillet 2026</h2>

        <p>
          Les prix, fonctionnalités et politiques d’hébergement peuvent changer.
          Les sources suivantes sont celles utilisées pour les affirmations
          décisives de ce guide ; vérifiez leur version au moment de votre choix.
        </p>

        <ul>
          <li>
            <a href="https://support.microsoft.com/en-us/office/excel-specifications-and-limits-1672b34d-7043-467e-8e27-269d656771c3" target="_blank" rel="noreferrer">
              Microsoft Support — spécifications et limites d’Excel
            </a>
            , pour les limites de format.
          </li>
          <li>
            <a href="https://support.microsoft.com/en-us/office/collaborate-on-excel-workbooks-at-the-same-time-with-co-authoring-7152aa8b-b791-414c-a3bb-3024e46fb104" target="_blank" rel="noreferrer">
              Microsoft Support — coédition des classeurs Excel
            </a>
            , pour l’abonnement et les emplacements compatibles.
          </li>
          <li>
            <a href="https://learn.microsoft.com/fr-fr/power-apps/maker/canvas-apps/get-started-create-from-blank" target="_blank" rel="noreferrer">
              Microsoft Learn — créer une application à partir de données Excel
            </a>
            , pour les modes d’import et de connexion.
          </li>
          <li>
            <a href="https://learn.microsoft.com/en-us/power-platform/admin/pricing-billing-skus" target="_blank" rel="noreferrer">
              Microsoft Learn — capacités Power Apps pour Microsoft 365
            </a>
            , pour les connecteurs standard et les exclusions.
          </li>
          <li>
            <a href="https://www.microsoft.com/fr-fr/power-platform/products/power-apps/pricing" target="_blank" rel="noreferrer">
              Microsoft France — tarifs Power Apps
            </a>
            , relevés le 19 juillet 2026.
          </li>
          <li>
            <a href="https://support.airtable.com/docs/data-residency-at-airtable" target="_blank" rel="noreferrer">
              Airtable — résidence des données
            </a>
            , pour les plans et données restant aux États-Unis.
          </li>
          <li>
            <a href="https://www.cnil.fr/fr/definition/sous-traitant" target="_blank" rel="noreferrer">
              CNIL — définition et obligations du sous-traitant
            </a>
            , pour le cadre contractuel RGPD.
          </li>
          <li>
            <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006219327/" target="_blank" rel="noreferrer">
              Légifrance — article L123-22 du Code de commerce
            </a>
            , pour la conservation comptable de dix ans.
          </li>
          <li>
            <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041471233/" target="_blank" rel="noreferrer">
              Légifrance — article L102 B du Livre des procédures fiscales
            </a>
            , pour la conservation fiscale de six ans et le format informatique.
          </li>
          <li>
            <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958" target="_blank" rel="noreferrer">
              Légifrance — article L131-3 du Code de la propriété intellectuelle
            </a>
            , pour le formalisme de la cession de droits.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
