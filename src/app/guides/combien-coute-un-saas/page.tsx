import type { Metadata } from "next";
import Link from "next/link";
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

const guide = getGuide("combien-coute-un-saas");

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
      "Développement web",
      "SaaS",
      "Next.js",
      "React",
      "Architecture logicielle",
      "Chiffrage de projets web",
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
      name: "Combien coûte un SaaS ?",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Combien coûte le développement d'un SaaS ?",
    answer:
      "Pour préparer le financement, retenez environ 15 000 à 40 000 € pour une première version exploitable, 40 000 à 100 000 € pour une version commerciale plus complète et davantage pour un produit réglementé, très connecté ou à fort volume. Ce sont des repères éditoriaux, pas une moyenne officielle. Le devis doit relier le prix à des utilisateurs, des parcours et des limites précises.",
  },
  {
    question:
      "Faut-il développer si un logiciel existant couvre déjà le besoin ?",
    answer:
      "En général, non. Essayez d'abord l'outil existant si ses limites n'empêchent ni votre service, ni votre avantage commercial. Le développement se justifie lorsque le processus est réellement spécifique, que l'expérience proposée fait partie de votre offre ou que les contraintes de données et d'intégration ne peuvent pas être satisfaites autrement.",
  },
  {
    question: "Combien de temps faut-il pour créer un SaaS ?",
    answer:
      "Dans les scénarios Hagnéré de ce guide, une première version aux fonctions limitées demande souvent deux à quatre mois ; une version commerciale complète, quatre à neuf mois ou davantage. Les connexions, la facturation, les rôles, la reprise de données et la sécurité changent fortement le calendrier. Seul un planning fondé sur une liste précise de fonctions peut engager les parties.",
  },
  {
    question: "Quel budget prévoir après la mise en ligne ?",
    answer:
      "Prévoyez l'hébergement, les e-mails, le paiement, le suivi des erreurs, les sauvegardes, le support, la sécurité et les évolutions. Le coût dépend des utilisateurs, des données et du niveau de service. Demandez trois scénarios de consommation et un contrat de maintenance détaillé au lieu d'appliquer un pourcentage automatique au prix initial.",
  },
  {
    question: "Peut-on créer un SaaS avec du no-code ?",
    answer:
      "Oui pour tester une idée et parfois pour exploiter un produit simple. Vérifiez toutefois les limites de droits, de performance, de facturation à l'usage, de connexion aux autres outils et de récupération des données. Le bon calcul compare le coût total et la possibilité de changer de solution, pas seulement le prix de la première version.",
  },
  {
    question:
      "Combien coûte une fonction d'intelligence artificielle dans le SaaS ?",
    answer:
      "Il faut chiffrer l'interface, les règles, les tests, la protection des données et le coût des modèles à chaque usage. Une simple aide à la rédaction n'a rien à voir avec un système qui analyse des documents sensibles ou prend part à une décision. Modélisez un coût par client et prévoyez des limites d'utilisation.",
  },
  {
    question: "Comment savoir si le SaaS peut être rentable ?",
    answer:
      "Calculez combien de clients payants sont nécessaires pour couvrir construction, exploitation, support et acquisition. Testez ensuite le problème, le prix et le canal de vente auprès de vrais prospects. Un produit techniquement réussi peut rester déficitaire si personne ne l'achète ou si chaque client coûte trop cher à servir.",
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
          { label: "Combien coûte un SaaS ?" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous avez une idée de logiciel vendu par abonnement ? Voici le budget d'une première version, les frais mensuels à ne pas oublier et les décisions à prendre avant de financer le développement."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "Estimation Hagnéré : 15 000 à 40 000 €",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Valider le besoin avant de développer",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Prévoir produit, exploitation et vente",
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
            href: "/services/saas-applications-metier",
            label: "Développement SaaS",
          },
          {
            href: "/guides/mvp-saas-quoi-inclure",
            label: "Que faut-il inclure dans une première version ?",
          },
          {
            href: "/guides/no-code-ou-sur-mesure",
            label: "No-code ou sur mesure",
          },
          {
            href: "/guides/prix-logiciel-sur-mesure",
            label: "Prix d'un logiciel sur mesure",
          },
          { href: "/tarifs", label: "Nos tarifs" },
          { href: "/demarrer-un-projet", label: "Décrire mon projet" },
        ]}
        faqTitle="Budget SaaS : les réponses simples"
        faqItems={faqItems}
      >
        <p className="lead">
          Vous avez peut-être identifié un problème que plusieurs entreprises
          rencontrent et vous imaginez un logiciel en ligne vendu par
          abonnement. Dans nos scénarios de préparation, une{" "}
          <strong>
            première version exploitable est estimée entre 15 000 et 40 000 €
          </strong>
          . Nous supposons ici une fonction centrale, des comptes utilisateurs,
          une administration simple, des tests et la mise en ligne. Une version
          commerciale avec plusieurs rôles, facturation et connexions à
          d&apos;autres outils est plutôt estimée entre{" "}
          <strong>40 000 et 100 000 €</strong>. Ce sont des estimations Hagnéré,
          pas une moyenne du marché : elles servent à préparer le financement
          avant un devis détaillé. Le vrai sujet est de financer la plus petite
          version que de vrais clients accepteront d&apos;utiliser et de payer.
        </p>

        <InfoBox
          variant="amber"
          title="Un SaaS n'est pas seulement un logiciel"
        >
          Le produit doit aussi être vendu, facturé, surveillé, sauvegardé et
          amélioré. Si votre enveloppe paie uniquement le développement, le
          projet risque de s&apos;arrêter au moment où commence le travail
          commercial. Séparez dès le départ le budget de construction, le budget
          mensuel et le budget pour trouver les premiers clients.
        </InfoBox>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. Les budgets selon la maturité" },
            {
              id: "bonne-solution",
              label: "2. SaaS, outil interne ou logiciel existant",
            },
            { id: "mvp", label: "3. Définir une première version utile" },
            { id: "fonctions", label: "4. Ce qui fait monter le prix" },
            { id: "devis", label: "5. Un exemple de devis expliqué" },
            {
              id: "exploitation",
              label: "6. Les frais après la mise en ligne",
            },
            { id: "modele", label: "7. Relier le prix au modèle économique" },
            {
              id: "ia-no-code",
              label: "8. IA et no-code : où sont les vraies économies",
            },
            { id: "securite", label: "9. Données, sécurité et conformité" },
            { id: "planning", label: "10. Le calendrier réaliste" },
            {
              id: "comparer",
              label: "11. Comparer les devis et protéger la reprise",
            },
          ]}
        />

        <h2 id="reponse-rapide">1. Les budgets selon la maturité</h2>
        <p>
          Les fourchettes suivantes décrivent des scénarios de planification.
          Elles supposent un développement professionnel, des tests et un
          transfert d&apos;accès. Elles ne constituent pas un baromètre
          représentatif du marché.
        </p>
        <GuideTable
          headers={[
            "Étape",
            "Repère de budget",
            "Ce que cette étape doit permettre",
          ]}
          rows={[
            [
              "Prototype",
              "2 000 à 8 000 €",
              "Montrer le parcours et recueillir des réactions, sans exploiter le produit",
            ],
            [
              "Preuve technique",
              "5 000 à 15 000 €",
              "Vérifier une intégration ou une difficulté avant de financer l'ensemble",
            ],
            [
              "Première version exploitable",
              "15 000 à 40 000 €",
              "Servir un petit groupe de clients sur le problème central",
            ],
            [
              "Version commerciale",
              "40 000 à 100 000 €",
              "Vendre, administrer, assister et faire évoluer le service",
            ],
            [
              "Produit complexe",
              "100 000 € et plus",
              "Gérer forte intégration, réglementation, volume ou plusieurs métiers",
            ],
          ]}
        />
        <p>
          Une offre moins chère n&apos;est pas automatiquement mauvaise. Elle
          peut décrire un prototype, une seule organisation cliente ou une
          administration manuelle. Le danger vient lorsque deux interlocuteurs
          utilisent l&apos;expression « première version » pour parler de
          produits différents.
        </p>

        <h2 id="bonne-solution">2. SaaS, outil interne ou logiciel existant</h2>
        <p>
          Un SaaS est un logiciel accessible en ligne, utilisé par plusieurs
          clients et généralement payé par abonnement. Cette ambition ajoute la
          facturation, la séparation des données, le support et la gestion de
          comptes. Si vous cherchez seulement à simplifier le travail de votre
          entreprise, un outil interne peut être plus simple.
        </p>
        <GuideTable
          headers={["Votre besoin", "Option à examiner d'abord", "Pourquoi"]}
          rows={[
            [
              "Un logiciel du marché couvre l'essentiel",
              "S'abonner et tester",
              "Vous achetez un service déjà maintenu",
            ],
            [
              "Votre équipe a un processus spécifique",
              "Outil interne ou adaptation",
              "Vous évitez de construire la vente par abonnement",
            ],
            [
              "Plusieurs entreprises ont le même problème",
              "Prototype de SaaS",
              "Vous pouvez tester le besoin et le prix",
            ],
            [
              "L'expérience fait votre avantage commercial",
              "SaaS sur mesure",
              "Le produit devient une partie de l'offre",
            ],
          ]}
        />
        <p>
          Avant de développer, faites essayer les solutions existantes aux
          personnes concernées. Notez précisément ce qu&apos;elles empêchent :
          perdre cinq minutes n&apos;est pas la même chose qu&apos;être
          incapable de livrer, de facturer ou de respecter une obligation.
        </p>

        <h2 id="mvp">3. Définir une première version utile</h2>
        <p>
          La bonne question n&apos;est pas « combien de fonctions peut-on mettre
          dans 30 000 € ? ». Demandez plutôt ce qu&apos;un premier client doit
          réussir sans votre aide constante.
        </p>
        <ol>
          <li>
            <strong>Qui paie ?</strong> Décrivez l&apos;entreprise et la
            personne qui décide.
          </li>
          <li>
            <strong>Quel problème est assez important ?</strong> Nommez le coût,
            le risque ou le temps perdu aujourd&apos;hui.
          </li>
          <li>
            <strong>Quelle promesse centrale ?</strong> Une phrase doit
            expliquer le résultat obtenu.
          </li>
          <li>
            <strong>Quel parcours minimum ?</strong> Inscription, action
            principale, résultat et aide.
          </li>
          <li>
            <strong>Qu&apos;est-ce qui peut rester manuel ?</strong> Certaines
            opérations internes peuvent être assurées par votre équipe au début.
          </li>
        </ol>
        <InfoBox
          variant="blue"
          title="Exemple fictif : centraliser les contrôles de sécurité d'entreprises du bâtiment"
        >
          Cet exemple ne décrit ni un client ni un témoignage réel. La première
          version permet au responsable de créer un chantier, d&apos;inviter un
          chef d&apos;équipe, de remplir une liste de contrôle et
          d&apos;exporter le compte rendu. Les statistiques avancées,
          l&apos;application mobile hors ligne et la connexion aux logiciels de
          paie attendent. Le produit peut déjà prouver que le compte rendu est
          plus rapide et mieux suivi.
        </InfoBox>
        <p>
          Consultez aussi notre guide{" "}
          <Link href="/guides/mvp-saas-quoi-inclure">
            ce qu&apos;il faut inclure dans une première version de SaaS
          </Link>{" "}
          pour transformer cette promesse en liste de fonctions à tester.
        </p>

        <h2 id="fonctions">4. Ce qui fait monter le prix</h2>
        <p>
          Le nombre de pages donne peu d&apos;information. Ce sont les règles,
          les rôles, les cas d&apos;erreur et les connexions qui créent
          l&apos;essentiel du travail.
        </p>
        <GuideTable
          headers={["Besoin", "Travail à prévoir", "Question à trancher"]}
          rows={[
            [
              "Plusieurs entreprises clientes",
              "Séparer les données, les réglages et les droits",
              "Qui peut voir quoi entre deux organisations ?",
            ],
            [
              "Abonnements",
              "Essai, paiement, échec, changement d'offre, facture et résiliation",
              "Que se passe-t-il dans chaque cas ?",
            ],
            [
              "Rôles et permissions",
              "Invitations, accès, historique et administration",
              "Qui crée, valide, exporte ou supprime ?",
            ],
            [
              "Connexion à d'autres outils",
              "Mode de connexion technique (API), correspondance des données, erreurs et synchronisation",
              "Quel système fait foi ?",
            ],
            [
              "Documents ou fichiers",
              "Stockage, recherche, droits et durée de conservation",
              "Qui peut télécharger et pendant combien de temps ?",
            ],
            [
              "Intelligence artificielle",
              "Modèle, consignes, vérification, coût et garde-fous",
              "Quelle erreur est acceptable et qui contrôle ?",
            ],
          ]}
        />
        <p>
          Faites écrire les cas rares qui ne seront pas gérés dans la première
          version. Cette liste d&apos;exclusions vaut mieux qu&apos;une promesse
          floue de « plateforme complète ».
        </p>

        <h2 id="devis">5. Un exemple de devis expliqué</h2>
        <p>
          Voici un scénario fictif pour le produit de contrôle de sécurité
          décrit plus haut. Il sert à comprendre les lignes d&apos;un devis, pas
          à annoncer le tarif de votre projet.
        </p>
        <FormulaBox>
          {"EXEMPLE PÉDAGOGIQUE — PREMIÈRE VERSION POUR ENTREPRISES\n" +
            "Clarification du besoin et prototype 3 500 €\n" +
            "Design des parcours                 3 000 €\n" +
            "Comptes, organisations et rôles     6 500 €\n" +
            "Contrôles et exports                 8 000 €\n" +
            "Administration                      3 500 €\n" +
            "Tests, sécurité et mise en ligne     4 500 €\n" +
            "Documentation et transfert          1 500 €\n" +
            "TOTAL DE L'EXEMPLE                  30 500 €"}
        </FormulaBox>
        <p>
          Une autre équipe peut répartir le travail différemment. Pour comparer,
          vérifiez surtout que l&apos;offre couvre le même nombre de rôles, les
          mêmes données, les mêmes intégrations et le même niveau de test.
        </p>
        <InfoBox variant="amber" title="Ce que le total ne dit pas">
          Le devis doit préciser qui écrit les textes, qui fournit les données,
          si la facturation est incluse, où le produit sera hébergé, qui paie
          les services externes et ce que vous recevez si la collaboration
          s&apos;arrête.
        </InfoBox>

        <h2 id="exploitation">6. Les frais après la mise en ligne</h2>
        <p>
          Le coût mensuel ne se résume pas à un serveur. Il dépend des services
          utilisés et du niveau d&apos;assistance promis aux clients.
        </p>
        <GuideTable
          headers={["Poste", "Ce qui le fait varier", "Question à poser"]}
          rows={[
            [
              "Hébergement et base de données",
              "Trafic, calcul, stockage, régions et disponibilité",
              "Quel scénario bas, central et haut ?",
            ],
            [
              "E-mails, SMS et fichiers",
              "Volume d'envoi et de conservation",
              "Quel coût par client actif ?",
            ],
            [
              "Paiement",
              "Pays, moyen de paiement, remboursements et litiges",
              "Quel revenu net après frais ?",
            ],
            [
              "Suivi et sauvegardes",
              "Durée de conservation et temps d'intervention",
              "Qui reçoit les alertes ?",
            ],
            [
              "Support",
              "Nombre de clients, horaires et complexité",
              "Quel canal et quel délai de réponse ?",
            ],
            [
              "Maintenance",
              "Dépendances, sécurité et rythme d'évolution",
              "Qu'est-ce qui est inclus chaque mois ?",
            ],
          ]}
        />
        <p>
          Certains fournisseurs commencent avec un palier gratuit puis facturent
          à l&apos;usage. Modélisez au moins trois volumes de clients et placez
          des alertes de consommation. Les pages de prix de{" "}
          <a
            href="https://vercel.com/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel
          </a>
          ,{" "}
          <a
            href="https://supabase.com/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Supabase
          </a>{" "}
          ou d&apos;autres outils servent à construire votre scénario, pas à
          promettre un coût identique pendant toute la vie du produit.
        </p>

        <h2 id="modele">7. Relier le prix au modèle économique</h2>
        <p>
          Le développement peut être financé, mais le produit ne devient viable
          que si ses revenus couvrent aussi l&apos;exploitation, le support, la
          vente et les futures améliorations.
        </p>
        <FormulaBox>
          {"CLIENTS PAYANTS NÉCESSAIRES\n" +
            "= coûts mensuels à couvrir\n" +
            "÷ marge mensuelle réellement conservée par client\n\n" +
            "MARGE PAR CLIENT\n" +
            "= abonnement encaissé\n" +
            "− paiement − infrastructure variable − support variable"}
        </FormulaBox>
        <p>
          Exemple purement illustratif : si vous devez couvrir 8 000 € par mois
          et conservez 80 € par client après les coûts variables retenus, il
          faut 100 clients payants. Le calcul est simple ; obtenir ces clients
          et les garder est la partie difficile. Interrogez des prospects,
          testez le prix et préparez le canal de vente avant la fin du
          développement.
        </p>

        <h2 id="ia-no-code">8. IA et no-code : où sont les vraies économies</h2>
        <p>
          Le no-code et les assistants d&apos;intelligence artificielle peuvent
          réduire le temps de certaines tâches. Ils ne créent pas une remise
          garantie sur l&apos;ensemble du projet.
        </p>
        <GuideTable
          headers={["Usage", "Bon emploi", "Risque à vérifier"]}
          rows={[
            [
              "Prototype no-code",
              "Tester un parcours et obtenir des retours rapides",
              "Confondre le test avec le produit final à maintenir",
            ],
            [
              "Produit simple en no-code",
              "Exploiter peu de règles et d'intégrations",
              "Coût à l'usage et limites de récupération",
            ],
            [
              "Assistant IA pour développer",
              "Accélérer une tâche avec revue et tests",
              "Erreurs, sécurité et dépendance à la validation humaine",
            ],
            [
              "Fonction IA dans le SaaS",
              "Aider l'utilisateur sur un travail bien défini",
              "Coût variable, données envoyées et résultat incorrect",
            ],
          ]}
        />
        <p>
          Si un prestataire annonce « moitié prix grâce à l&apos;IA », demandez
          quelle ligne disparaît : compréhension du besoin, design,
          développement, test ou maintenance. Sans réponse précise, le
          pourcentage n&apos;est pas vérifiable.
        </p>

        <h2 id="securite">9. Données, sécurité et conformité</h2>
        <p>
          La conformité ne s&apos;ajoute pas la veille du lancement. Avant le
          devis, listez les données collectées, leur utilité, les personnes
          autorisées et la durée de conservation. La CNIL rappelle que le rôle
          de responsable de traitement ou de sous-traitant dépend des décisions
          prises sur les finalités et les moyens ; il faut qualifier les rôles,
          pas les choisir comme une simple étiquette commerciale.
        </p>
        <ul>
          <li>
            protéger les comptes et prévoir la récupération d&apos;accès ;
          </li>
          <li>séparer les données des entreprises clientes ;</li>
          <li>
            conserver une trace des actions sensibles sans tout garder
            indéfiniment ;
          </li>
          <li>tester les sauvegardes et la restauration ;</li>
          <li>prévoir export, suppression et fin de contrat ;</li>
          <li>
            faire valider les obligations propres au secteur par les
            professionnels compétents.
          </li>
        </ul>
        <p>
          Santé, finance, mineurs, données biométriques ou décisions
          automatisées peuvent demander une analyse supplémentaire. Le budget ne
          peut pas être honnêtement fixé sans connaître ces contraintes.
        </p>

        <h2 id="planning">10. Le calendrier réaliste</h2>
        <GuideTable
          headers={["Étape", "Repère indicatif", "Condition de tenue"]}
          rows={[
            [
              "Prototype",
              "2 à 4 semaines",
              "Un problème et un parcours à tester",
            ],
            [
              "Première version exploitable",
              "2 à 4 mois",
              "Fonctions limitées, accès disponibles et décisions rapides",
            ],
            [
              "Version commerciale",
              "4 à 9 mois ou plus",
              "Facturation, support, sécurité et intégrations planifiés",
            ],
            [
              "Amélioration continue",
              "Après lancement",
              "Retours clients, budget et priorités régulières",
            ],
          ]}
        />
        <p>
          La date dépend aussi de vous : disponibilité des experts métier, accès
          aux outils, exemples de données et validation des règles. Le planning
          doit identifier chaque dépendance et l&apos;effet d&apos;un retard.
        </p>

        <h2 id="comparer">11. Comparer les devis et protéger la reprise</h2>
        <ul>
          <li>
            le même problème, le même public et la même liste de fonctions sont
            décrits ;
          </li>
          <li>
            les rôles, les intégrations et les cas d&apos;erreur sont visibles ;
          </li>
          <li>
            design, tests, mise en ligne et documentation sont inclus ou exclus
            explicitement ;
          </li>
          <li>
            le prix des services externes et leur titulaire sont indiqués ;
          </li>
          <li>la propriété ou la licence du code et du design est écrite ;</li>
          <li>
            vous disposez du dépôt de code, des comptes administrateurs, des
            données et des sauvegardes ;
          </li>
          <li>
            la maintenance précise délais, horaires, versions supportées et
            nouvelles demandes ;
          </li>
          <li>
            la procédure de sortie permet à un autre prestataire de reprendre le
            produit.
          </li>
        </ul>
        <p>
          Pour choisir entre abonnement, no-code et développement, consultez
          notre{" "}
          <Link href="/guides/no-code-ou-sur-mesure">
            comparatif no-code ou sur mesure
          </Link>
          . Le meilleur devis n&apos;est pas celui qui promet le plus de
          fonctions, mais celui qui rend visibles les décisions, les risques et
          le coût de la suite.
        </p>

        <GuideInlineCTA
          title="Parlons du client avant de parler de la technologie"
          description="Expliquez-nous qui paiera, quel problème revient assez souvent et ce que la première version doit prouver. Nous préparerons une liste de fonctions lisible, son budget initial et ses coûts d'exploitation."
        />

        <h2 id="sources">Sources</h2>
        <p className="text-sm">
          Qualification des rôles et données personnelles :{" "}
          <a
            href="https://www.cnil.fr/fr/rgpd-comment-bien-identifier-son-role"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL, comment identifier son rôle au regard du RGPD
          </a>
          . Prix des services à modéliser au moment du devis : pages officielles
          de{" "}
          <a
            href="https://vercel.com/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel
          </a>
          ,{" "}
          <a
            href="https://supabase.com/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Supabase
          </a>{" "}
          et{" "}
          <a
            href="https://stripe.com/fr/billing/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stripe Billing
          </a>
          .
        </p>
        <p className="text-sm">
          Les budgets et délais de ce guide sont des repères éditoriaux liés aux
          hypothèses décrites. Ils ne constituent pas une moyenne
          représentative, un tarif réglementé ou une promesse contractuelle. Un
          devis ferme exige une liste de fonctions, des contraintes et des
          responsabilités identifiées.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
