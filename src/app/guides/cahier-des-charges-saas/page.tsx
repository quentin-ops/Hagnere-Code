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

const guide = getGuide("cahier-des-charges-saas");

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
        alt: "Parcours d’un client dans un cahier des charges SaaS",
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
      name: "Cahier des charges SaaS",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question:
      "Quelle différence entre un cahier des charges SaaS et celui d’une application métier ?",
    answer:
      "Le SaaS doit cadrer plusieurs entreprises clientes, leurs comptes, l’abonnement, l’exploitation continue et la sortie d’un client. Une application métier décrit d’abord le fonctionnement interne d’une seule organisation.",
  },
  {
    question: "Faut-il imposer une architecture multi-tenant ?",
    answer:
      "Non. Ce terme désigne une organisation technique où plusieurs clients utilisent le même service tout en gardant leurs données séparées. Décrivez le résultat attendu : un client ne doit jamais accéder aux données d’un autre. Le prestataire propose ensuite l’architecture et son test.",
  },
  {
    question: "Dois-je choisir Stripe avant de consulter un développeur ?",
    answer:
      "Non. Vous devez surtout décider qui achète, quand l’accès commence, quels états de paiement changent les droits et qui traite les erreurs. Stripe peut illustrer ces états sans devenir un choix obligatoire.",
  },
  {
    question: "Que doit contenir l’export remis au client ?",
    answer:
      "Écrivez les données, identifiants, statuts, dates, formats, pièces éventuelles, personne autorisée, délai et aide fournie. Un simple mot « export » ou un bouton CSV ne suffit pas.",
  },
  {
    question:
      "Le cahier des charges remplace-t-il le contrat et les clauses RGPD ?",
    answer:
      "Non. Il aide à définir le produit, les tests et les responsabilités. Les droits, garanties, niveaux de service, rôles RGPD et autres engagements doivent être vérifiés dans les documents contractuels adaptés.",
  },
  {
    question: "Combien de pages faut-il écrire ?",
    answer:
      "Il n’existe pas de longueur universelle. Le document est assez précis lorsqu’un prestataire peut identifier les décisions, inconnues, exclusions, erreurs, tests et responsabilités sans inventer le produit à votre place.",
  },
  {
    question: "Faut-il cadrer le support avant le développement ?",
    answer:
      "Oui. Précisez qui reçoit une demande, qui peut accéder aux données, comment un incident est suivi et ce qui reste exclu. Le support fait partie du service vendu, même s’il reste manuel au début.",
  },
  {
    question: "Puis-je partir du modèle d’application métier ?",
    answer:
      "Oui pour le besoin, les rôles et les tests. Ajoutez ensuite les entreprises clientes séparées, l’abonnement, l’administration du service, les incidents récurrents et la récupération des données lors du départ.",
  },
];

type SpecificationBlockProps = {
  decision: string;
  exclusion: string;
  proof: string;
  owner: string;
};

function SpecificationBlock({
  decision,
  exclusion,
  proof,
  owner,
}: SpecificationBlockProps) {
  const items = [
    {
      label: "Décision",
      text: decision,
      color: "border-blue-200 dark:border-blue-900",
    },
    {
      label: "Exclusion",
      text: exclusion,
      color: "border-zinc-200 dark:border-zinc-800",
    },
    {
      label: "Preuve attendue",
      text: proof,
      color: "border-emerald-200 dark:border-emerald-900",
    },
    {
      label: "Responsable",
      text: owner,
      color: "border-amber-200 dark:border-amber-900",
    },
  ];

  return (
    <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.label}
          className={`rounded-xl border bg-white p-4 dark:bg-zinc-950 ${item.color}`}
        >
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
            {item.label}
          </p>
          <p className="mb-0 text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
            {item.text}
          </p>
        </div>
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
          { label: "Cahier des charges SaaS" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Suivez un SaaS fictif depuis l’achat jusqu’au départ du client. Vous verrez quoi décider, quoi exclure, quelles erreurs prévoir et comment faire tester le résultat."
        heroAction={{ href: "#dossierclair", label: "Voir l’exemple rempli" }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "1 client suivi de bout en bout",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Décisions et exclusions visibles",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Tests compréhensibles",
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
            href: "/guides/valider-idee-saas-avant-developper",
            label: "Valider l’idée et l’acheteur avant le cahier des charges",
          },
          {
            href: "/guides/mvp-saas-quoi-inclure",
            label: "Choisir le parcours de la première version",
          },
          {
            href: "/guides/combien-coute-un-saas",
            label: "Estimer ensuite le budget du SaaS",
          },
          {
            href: "/guides/cahier-des-charges-application-metier",
            label: "Cadrer une application interne à une entreprise",
          },
          {
            href: "/guides/contrat-tma-application",
            label: "Organiser la maintenance après lancement",
          },
        ]}
        faqTitle="Cahier des charges SaaS : les questions avant consultation"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          Vous avez validé l’idée et choisi ce que le premier client doit
          réussir. Pourtant, au moment de demander un devis, chacun imagine un
          produit différent : l’un prévoit une inscription autonome, l’autre une
          ouverture manuelle des comptes, un troisième oublie l’impayé, le
          support ou la résiliation.
        </p>
        <p>
          Un SaaS est ici un logiciel en ligne vendu par abonnement à plusieurs
          entreprises. Son cahier des charges sert à lever ces ambiguïtés. Il
          raconte la vie complète d’une entreprise cliente : qui achète, qui
          administre, comment les utilisateurs entrent, quelle action justifie
          l’abonnement, ce qui se passe en cas d’erreur, qui exploite le service
          et comment le client récupère ses données en partant. Il ne dessine
          pas chaque écran et ne choisit pas seul la technologie.
        </p>

        <GuideToc
          items={[
            { id: "bon-moment", label: "1. Vérifier le bon moment" },
            {
              id: "dossierclair",
              label: "2. Le SaaS fictif et ses exclusions",
            },
            { id: "achat", label: "3. Achat et activation" },
            { id: "comptes", label: "4. Entreprises, comptes et droits" },
            { id: "action", label: "5. L’action qui justifie l’abonnement" },
            { id: "echecs", label: "6. Invitation expirée et paiement refusé" },
            { id: "exploitation", label: "7. Exploiter le service" },
            { id: "donnees", label: "8. Données et accessibilité" },
            { id: "sortie", label: "9. Le départ du client" },
            { id: "reponse", label: "10. Comparer les réponses" },
          ]}
        />

        <h2 id="bon-moment">
          1. Vérifiez que le cahier des charges arrive au bon moment
        </h2>
        <p>
          Ce guide suppose que de vrais prospects ont confirmé le problème et
          que vous avez choisi un premier résultat à livrer. Si personne n’a
          encore essayé d’acheter, commencez par{" "}
          <Link href="/guides/valider-idee-saas-avant-developper">
            valider l’idée SaaS
          </Link>
          . Si la liste des fonctions reste ouverte, utilisez d’abord le guide{" "}
          <Link href="/guides/mvp-saas-quoi-inclure">
            MVP SaaS : quoi inclure
          </Link>
          .
        </p>
        <p>
          Une application réservée aux salariés d’une seule société se cadre
          autrement. Le{" "}
          <Link href="/guides/cahier-des-charges-application-metier">
            cahier des charges d’application métier
          </Link>{" "}
          suit alors le travail interne, sans abonnement vendu à plusieurs
          entreprises clientes. Cette distinction évite de charger un projet
          interne avec des fonctions commerciales inutiles.
        </p>
        <InfoBox
          variant="amber"
          title="Le cahier des charges ne remplace pas une décision"
        >
          S’il manque encore l’acheteur, le résultat vendu ou la première
          version, écrire davantage de pages ne rendra pas le devis comparable.
          Revenez à la décision manquante, puis reprenez le document.
        </InfoBox>

        <h2 id="dossierclair">
          2. DossierClair accueille son premier client demain
        </h2>
        <InfoBox variant="blue" title="Exemple entièrement fictif">
          DossierClair, Atelier Nord, Studio Rivage, Claire et Léa sont
          inventés. Ils ne décrivent ni un client ni un résultat obtenu par
          Hagnéré Code. Les choix servent à montrer la méthode, pas à définir
          une norme SaaS.
        </InfoBox>
        <p>
          DossierClair est un logiciel en ligne vendu à de petites sociétés de
          conseil. Il remplace les informations de démarrage de mission
          dispersées entre courriels et documents. Claire, responsable des
          opérations d’Atelier Nord, achète l’abonnement et devient
          administratrice. Elle invite Léa, cheffe de projet, comme
          contributrice.
        </p>
        <p>
          Le parcours vendu tient en une phrase : Claire crée le dossier d’un
          nouveau client, Léa complète les informations, puis Claire contrôle,
          valide et exporte le dossier. Studio Rivage, une autre entreprise
          fictive, n’existe dans l’exemple que pour vérifier qu’Atelier Nord ne
          peut jamais voir ses données.
        </p>
        <div className="not-prose my-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
          <p className="mb-3 font-bold text-zinc-950 dark:text-white">
            Ce que la première version refuse explicitement
          </p>
          <ul className="m-0 grid gap-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
            <li>pas d’essai gratuit ni de plusieurs offres ;</li>
            <li>
              pas de connexion unique d’entreprise, de double authentification
              ni de rôles personnalisables ;
            </li>
            <li>
              pas d’application mobile ni de portail pour le client final ;
            </li>
            <li>
              pas de pièces jointes libres ni d’intégration au logiciel
              commercial (CRM) ;
            </li>
            <li>
              pas de données de santé, d’identité ou de carte bancaire stockées
              ;
            </li>
            <li>
              pas de support téléphonique permanent ni de disponibilité
              garantie.
            </li>
          </ul>
        </div>
        <p>
          Les exclusions ne sont pas une faiblesse. Elles empêchent un
          prestataire de chiffrer une fonction que vous n’avez pas demandée et
          un autre de la considérer comme évidente. Une nouvelle fonction pourra
          être ajoutée plus tard avec sa raison, son test et son coût.
        </p>
        <div className="not-prose my-6 rounded-2xl border border-blue-200 bg-blue-50 p-5 text-blue-950 dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-100 sm:p-6">
          <p className="mb-2 text-lg font-bold">
            La fiche remise à tous les prestataires
          </p>
          <p className="mb-4 text-sm leading-relaxed">
            Les valeurs suivantes sont des hypothèses fictives de chiffrage, pas
            des prévisions commerciales. Une réponse peut les contester, mais
            pas les remplacer en silence.
          </p>
          <ul className="m-0 grid gap-2 pl-5 text-sm leading-relaxed sm:grid-cols-2">
            <li>
              3 entreprises au lancement, jusqu’à 30 envisagées la première
              année ; 5 utilisateurs inclus par entreprise ;
            </li>
            <li>
              jusqu’à 2 000 dossiers actifs et 20 000 dossiers archivés, sans
              pièce jointe dans cette version ;
            </li>
            <li>
              navigateur récent sur ordinateur, tablette et téléphone ; aucune
              application mobile native ;
            </li>
            <li>
              aucune reprise de données existantes ; un environnement de test
              séparé de la production ;
            </li>
            <li>
              connexion par courriel et mot de passe gérés par un service
              externe ; vérification de l’adresse et mot de passe oublié inclus
              ;
            </li>
            <li>
              domaine, hébergement, paiement et courriels ouverts dans des
              comptes contrôlés par le fondateur ; coûts récurrents détaillés ;
            </li>
            <li>
              dépôt de code, procédure d’installation, dictionnaire des données
              et guide d’exploitation remis au commanditaire ;
            </li>
            <li>
              mise en ligne, correction des anomalies bloquantes et période de
              stabilisation chiffrées séparément de la maintenance future ;
            </li>
            <li>
              prix de réalisation et coût mensuel ou annuel présentés à ce même
              périmètre, avec toute option isolée.
            </li>
          </ul>
        </div>

        <h2 id="achat">
          3. Claire paie : quand son entreprise existe-t-elle vraiment ?
        </h2>
        <p>
          DossierClair choisit une vente accompagnée et une seule offre
          mensuelle pour cinq utilisateurs. Le paiement est saisi sur la page
          hébergée d’un prestataire externe. L’espace d’Atelier Nord ne devient
          actif qu’après une confirmation valable reçue par l’application, pas
          parce que le navigateur affiche « paiement réussi ».
        </p>
        <p>
          Stripe documente les différents{" "}
          <a
            href="https://docs.stripe.com/billing/subscriptions/webhooks?locale=en-GB"
            target="_blank"
            rel="noopener noreferrer"
          >
            états d’un abonnement et les événements associés
          </a>
          . C’est un exemple de fournisseur, pas une technologie imposée. Le
          cahier des charges doit surtout dire ce que l’application fait lorsque
          le paiement est accepté, refusé, répété ou encore en attente.
        </p>
        <SpecificationBlock
          decision="Une confirmation valable crée exactement un espace Atelier Nord et une invitation pour Claire."
          exclusion="La page de retour du navigateur ne crée aucun droit à elle seule ; aucun essai gratuit dans cette version."
          proof="Envoyer deux fois la même confirmation ne crée ni second espace ni second abonnement. Fermer le navigateur ne bloque pas l’activation."
          owner="Le prestataire de paiement traite l’opération ; DossierClair traduit l’état reçu en droit d’accès ; l’exploitant surveille les erreurs."
        />
        <p>
          Le devis doit inclure les erreurs que cette décision rend visibles :
          confirmation absente, répétée, tardive ou contradictoire. Il doit
          aussi dire où l’équipe voit l’état et qui peut corriger sans modifier
          la base de données au hasard.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          {[
            [
              "Premier paiement en attente",
              "Aucun espace actif. Claire voit une page d’attente ou recommence le paiement ; l’exploitant contrôle l’événement reçu.",
            ],
            [
              "Vérification supplémentaire demandée",
              "Claire retourne sur la page de paiement sécurisée. DossierClair ne stocke pas sa carte et n’active rien avant confirmation.",
            ],
            [
              "Paiement mensuel refusé",
              "Claire reçoit un message et peut mettre à jour son moyen de paiement. Deux nouvelles tentatives, aux jours 2 et 5, sont retenues pour l’exemple.",
            ],
            [
              "Sept jours sans régularisation",
              "Claire reste connectée pour mettre à jour le paiement et exporter ; tous les dossiers sont en lecture seule et Léa ne peut plus les modifier.",
            ],
            [
              "Paiement régularisé",
              "Une confirmation valable rétablit les droits une seule fois, sans recréer l’entreprise, les membres ni les dossiers.",
            ],
            [
              "Remboursement ou contestation",
              "Traitement manuel par le fondateur dans cette version ; aucune décision automatique sur les données ou les accès.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <p className="mb-2 font-semibold text-zinc-950 dark:text-white">
                {title}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {text}
              </p>
            </div>
          ))}
        </div>
        <p>
          Dans cet exemple, le service de paiement produit les factures et
          applique les réglages fiscaux configurés par le fondateur. Le
          prestataire doit indiquer ce qui relève de ce service, ce que
          DossierClair affiche et ce que l’équipe traite encore manuellement.
          Les pays vendus, les taxes et les mentions de facture restent à faire
          vérifier selon l’activité réelle.
        </p>

        <h2 id="comptes">
          4. Claire invite Léa sans ouvrir la porte aux autres clients
        </h2>
        <p>
          Un « espace d’entreprise » désigne ici les comptes, dossiers et
          réglages appartenant à un même client. Dans cette première version,
          une personne n’appartient qu’à une entreprise. Claire gère les
          membres, l’abonnement et tous les dossiers. Léa voit seulement les
          dossiers qui lui sont affectés. Le support n’a aucun accès permanent
          au contenu.
        </p>
        <p>
          La CNIL recommande des{" "}
          <a
            href="https://www.cnil.fr/fr/gerer-les-utilisateurs"
            target="_blank"
            rel="noopener noreferrer"
          >
            identifiants individuels et des droits différenciés
          </a>
          . OWASP recommande de{" "}
          <a
            href="https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            contrôler l’autorisation à chaque requête
          </a>
          . Ces principes ne choisissent pas l’architecture : ils donnent un
          résultat à vérifier.
        </p>
        <SpecificationBlock
          decision="Claire administre Atelier Nord ; Léa contribue uniquement aux dossiers qui lui sont affectés."
          exclusion="Pas de rôles personnalisables, pas d’appartenance à plusieurs entreprises et pas d’accès permanent du support."
          proof="Connectée à Atelier Nord, Léa ne peut ni lire ni modifier un dossier de Studio Rivage, même si elle connaît son adresse ou son identifiant."
          owner="Claire invite et révoque ; l’application contrôle chaque accès ; un accès support éventuel est temporaire, autorisé et tracé."
        />
        <p>
          Ajoutez un second test : Claire retire Léa pendant qu’une session est
          encore ouverte. Le cahier des charges doit dire à quel moment l’accès
          cesse et ce que Léa voit ensuite. « Nous avons des rôles » n’est pas
          un critère de recette.
        </p>
        <p>
          Rejouez aussi la vie complète du compte : Léa ouvre son invitation,
          vérifie son adresse, choisit son mot de passe, se reconnecte après une
          réinitialisation, puis perd l’accès après révocation.
          L’authentification est fournie par un service externe sans marque
          imposée. La connexion unique d’entreprise et la double
          authentification restent exclues de cette première version et peuvent
          être chiffrées en option.
        </p>

        <h2 id="action">5. Le dossier est créé, complété puis validé</h2>
        <p>
          Le cœur du produit ne doit pas se perdre dans les fonctions annexes.
          Un dossier contient des champs structurés : entreprise, contact
          professionnel, service demandé, objectif, date souhaitée, contraintes
          et note de validation. Claire le crée et l’affecte. Léa complète les
          champs. Claire valide ou renvoie avec un commentaire.
        </p>
        <div className="not-prose my-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-100 sm:p-6">
          <p className="mb-3 font-bold">Recette du parcours vendu</p>
          <ol className="m-0 space-y-3 pl-5 text-sm leading-relaxed">
            <li>Claire crée un dossier et l’affecte à Léa.</li>
            <li>
              Léa ne peut pas le soumettre tant qu’un champ obligatoire manque ;
              le message nomme ce champ.
            </li>
            <li>Claire voit l’auteur, la date et les informations soumises.</li>
            <li>
              Un renvoi conserve le commentaire et permet une nouvelle
              soumission.
            </li>
            <li>
              La validation produit un PDF lisible et un CSV avec les données
              structurées annoncées.
            </li>
          </ol>
        </div>
        <p>
          Ce scénario traverse plusieurs écrans, rôles et états. Il vaut
          davantage qu’une liste « page de connexion, tableau de bord, export
          PDF » : le prestataire comprend le résultat métier, les erreurs à
          traiter et la preuve qui permettra à Claire d’accepter la livraison.
        </p>

        <h2 id="echecs">
          6. Une invitation expire ou le paiement récurrent échoue
        </h2>
        <p>
          Les choix suivants appartiennent uniquement à DossierClair. Ils ne
          sont ni une norme commerciale ni un délai recommandé pour tous les
          SaaS. Ils montrent ce qu’un cahier des charges doit rendre explicite.
        </p>
        <ol>
          <li>
            <strong>Invitation expirée :</strong> Claire peut en envoyer une
            nouvelle ; l’ancienne ne redevient pas valide.
          </li>
          <li>
            <strong>Paiement refusé :</strong> Claire reçoit un message qui
            indique la prochaine action, sans exposer une donnée bancaire.
          </li>
          <li>
            <strong>Délai choisi dans l’exemple :</strong> l’accès normal reste
            ouvert sept jours, puis passe en lecture seule. Ce délai fictif doit
            être remplacé par la décision commerciale et contractuelle réelle.
          </li>
          <li>
            <strong>Régularisation :</strong> une confirmation valable rétablit
            les droits sans recréer l’entreprise ni les dossiers.
          </li>
          <li>
            <strong>Annulation :</strong> elle prend effet à la fin de la
            période déjà payée ; aucun impayé ne supprime automatiquement les
            dossiers.
          </li>
        </ol>
        <SpecificationBlock
          decision="À chaque état de paiement correspondent un message, un droit d’accès et une prochaine action visibles."
          exclusion="Pas de changement d’offre ni de prorata. Deux nouvelles tentatives sont incluses ; remboursement et contestation restent manuels."
          proof="Refus, répétition et régularisation sont rejoués sans perte de dossier ni création de doublon."
          owner="Le service de paiement tente et facture ; le produit applique les droits ; le fondateur traite les exceptions et valide la politique d’impayé."
        />

        <h2 id="exploitation">
          7. Le SaaS doit encore fonctionner le lundi suivant
        </h2>
        <p>
          Le cahier des charges ne s’arrête pas à la mise en ligne. DossierClair
          prévoit un support par courriel les jours ouvrés, un responsable nommé
          pour les incidents et un objectif d’accusé de réception à choisir dans
          le contrat. Il ne promet pas un délai universel de résolution.
        </p>
        <p>
          Pour les sauvegardes, la présence d’un fichier ou d’une copie ne
          suffit pas. La CNIL recommande de{" "}
          <a
            href="https://www.cnil.fr/fr/securite-sauvegarder"
            target="_blank"
            rel="noopener noreferrer"
          >
            tester les sauvegardes et vérifier la restauration
          </a>
          . DossierClair choisit, pour son exemple, de pouvoir perdre au maximum
          24 heures de travail et de remettre le parcours central en service en
          moins de 8 heures ouvrées. Ces seuils servent à chiffrer une réponse ;
          ils ne conviennent pas automatiquement à un autre métier.
        </p>
        <div className="not-prose my-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-950 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-100 sm:p-6">
          <p className="mb-3 font-bold">
            Ce que « restaurer DossierClair » veut dire
          </p>
          <ul className="m-0 space-y-2 pl-5 text-sm leading-relaxed">
            <li>
              sauvegarder chaque jour la base, les fichiers utiles et la
              configuration nécessaire, puis conserver 30 jours ;
            </li>
            <li>
              garder une copie dans un compte séparé de la production et une
              copie qui ne peut pas être modifiée depuis l’application ;
            </li>
            <li>
              restaurer avant lancement, puis tous les trois mois, dans un
              environnement isolé avec un échantillon de dossiers ;
            </li>
            <li>
              vérifier connexion, droits, dossier, export et fichiers, puis
              consigner durée, données manquantes, erreurs et correction ;
            </li>
            <li>
              ouvrir une anomalie si le seuil de perte ou de remise en service
              n’est pas tenu, puis refaire le test après correction.
            </li>
          </ul>
        </div>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-3">
          {[
            [
              "Incident",
              "Impact, heure de début, personne prévenue, décision et retour à la normale.",
            ],
            [
              "Restauration",
              "Date, copie utilisée, environnement isolé, résultat et anomalie éventuelle.",
            ],
            [
              "Changement",
              "Auteur, raison, test, mise en ligne, surveillance et possibilité de retour arrière.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <p className="mb-2 font-semibold text-zinc-950 dark:text-white">
                {title}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {text}
              </p>
            </div>
          ))}
        </div>
        <p>
          La version stable 5.0.0 d’OWASP ASVS fournit des{" "}
          <a
            href="https://owasp.org/www-project-application-security-verification-standard/"
            target="_blank"
            rel="noopener noreferrer"
          >
            exigences de sécurité testables et référencées
          </a>
          . Écrire seulement « conforme ASVS » ne suffit pas. Le prestataire ne
          choisit pas seul son propre périmètre. DossierClair joint la même
          annexe à chaque consultation : exigences ASVS référencées retenues
          pour comptes, sessions, droits, secrets et traces, méthode de
          contrôle, personne qui vérifie et preuve remise. Tout contrôle
          supplémentaire apparaît comme une option séparée. Si le fondateur ne
          sait pas établir cette annexe, une mission de cadrage sécurité précède
          les devis. DossierClair ne commande pas ici un audit complet et ne
          peut donc revendiquer ni certification ni invulnérabilité. Après le
          lancement, le guide sur le{" "}
          <Link href="/guides/contrat-tma-application">
            contrat de maintenance applicative
          </Link>{" "}
          aide à répartir incidents, corrections et évolutions.
        </p>

        <h2 id="donnees">8. Écrivez les choix de données et d’accessibilité</h2>
        <p>
          Pour chaque donnée, indiquez pourquoi elle est nécessaire, qui peut la
          voir, combien de temps elle reste utile et qui décide sa suppression.
          La CNIL rappelle les principes de{" "}
          <a
            href="https://www.cnil.fr/fr/minimiser-les-donnees-collectees"
            target="_blank"
            rel="noopener noreferrer"
          >
            minimisation
          </a>{" "}
          et de{" "}
          <a
            href="https://www.cnil.fr/fr/passer-laction/les-durees-de-conservation-des-donnees"
            target="_blank"
            rel="noopener noreferrer"
          >
            durées de conservation documentées
          </a>
          . Les rôles de l’entreprise, de Hagnéré Code et des fournisseurs
          doivent être qualifiés selon la réalité ; un développeur n’est pas
          toujours automatiquement sous-traitant.
        </p>
        <p>
          Lorsqu’un fournisseur traite des données pour le compte de
          l’entreprise, la CNIL demande notamment de cadrer les garanties, les
          incidents, les accès, la restitution et la suppression dans la{" "}
          <a
            href="https://www.cnil.fr/fr/securite-gerer-la-sous-traitance"
            target="_blank"
            rel="noopener noreferrer"
          >
            relation de sous-traitance
          </a>
          . Le cahier des charges prépare ces questions ; il ne remplace pas la
          qualification juridique ni le contrat.
        </p>
        <p>
          DossierClair utilise certains critères de WCAG 2.2 pour écrire des
          tests d’acceptation sur le parcours complet, de la connexion à
          l’export. Le W3C décrit{" "}
          <a
            href="https://www.w3.org/TR/WCAG22/"
            target="_blank"
            rel="noopener noreferrer"
          >
            WCAG 2.2 comme un ensemble de critères testables
          </a>
          . Le clavier, le focus visible, les intitulés, les erreurs et les
          messages d’état sont vérifiés sur toutes les pages de ce processus,
          pas sur un composant isolé. Cette sélection inspirée de WCAG ne permet
          pas d’affirmer une conformité AA. Une telle affirmation demanderait de
          définir les pages et processus complets concernés, puis de faire
          contrôler tous les critères applicables. Le champ légal du{" "}
          <a
            href="https://accessibilite.numerique.gouv.fr/obligations/champ-application/"
            target="_blank"
            rel="noopener noreferrer"
          >
            RGAA
          </a>{" "}
          doit être vérifié séparément.
        </p>

        <h2 id="sortie">9. Atelier Nord résilie : que récupère Claire ?</h2>
        <p>
          « Prévoir un export » reste trop vague. Le cahier des charges doit
          nommer le contenu, le format, la personne autorisée, le moment où elle
          peut agir, l’aide disponible et ce qui sera supprimé ensuite.
        </p>
        <div className="not-prose my-6 rounded-2xl border border-violet-200 bg-violet-50 p-5 text-violet-950 dark:border-violet-900 dark:bg-violet-950/30 dark:text-violet-100 sm:p-6">
          <p className="mb-4 font-bold">Ce que récupère Atelier Nord</p>
          <ol className="m-0 space-y-3 pl-5 text-sm leading-relaxed">
            <li>Le service reste actif jusqu’à la fin de la période payée.</li>
            <li>
              L’espace passe ensuite en lecture seule pendant trente jours,
              durée propre à cet exemple.
            </li>
            <li>
              Claire télécharge les utilisateurs et rôles, dossiers,
              identifiants, relations, statuts, commentaires, dates, historique
              utile et réglages dans des fichiers structurés documentés, ainsi
              que les PDF validés.
            </li>
            <li>
              La base active est supprimée après la période annoncée ; les
              copies disparaissent selon le cycle écrit des sauvegardes.
            </li>
            <li>
              L’export est disponible en libre-service pendant la période de
              lecture seule ; le support répond par courriel et annonce son
              délai si l’export échoue.
            </li>
            <li>
              Claire reçoit une confirmation de suppression ; les archives
              obligatoires éventuelles, leur accès et leur durée sont précisés
              séparément.
            </li>
          </ol>
        </div>
        <div className="not-prose my-6 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6">
          <p className="mb-2 font-bold text-zinc-950 dark:text-white">
            Ce que récupère le fondateur de DossierClair
          </p>
          <p className="mb-0 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            Ce second sujet ne concerne pas l’abonné. Le contrat du
            commanditaire doit préciser le dépôt et son historique, la licence
            ou la cession réellement consentie, la documentation, le
            dictionnaire des données, les procédures de déploiement et de
            restauration, ainsi que le contrôle des comptes de domaine,
            hébergement, paiement et courriel. Les composants tiers et leurs
            licences sont inventoriés. Le{" "}
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code de la propriété intellectuelle
            </a>{" "}
            demande notamment que les droits cédés soient définis et leur
            périmètre délimité. Le paiement du projet ne transfère donc pas à
            lui seul tous les droits : les clauses doivent être vérifiées pour
            la situation réelle.
          </p>
        </div>
        <p>
          La Commission européenne indique que le{" "}
          <a
            href="https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained"
            target="_blank"
            rel="noopener noreferrer"
          >
            Data Act s’applique depuis le 12 septembre 2025
          </a>{" "}
          et traite notamment le changement de services de traitement de
          données. Pour les logiciels en ligne, la portée exacte, les
          exceptions, les formats et les dispositions contractuelles doivent
          être vérifiés au cas par cas. Le guide ne transforme donc pas
          l’exemple DossierClair en règle juridique universelle.
        </p>

        <h2 id="reponse">
          10. Demandez au prestataire de rendre ses hypothèses visibles
        </h2>
        <p>
          Vous n’avez pas besoin d’imposer une base de données ou un langage de
          programmation pour comparer les réponses. Demandez à chaque
          prestataire de reprendre le même parcours et d’indiquer, pour chaque
          étape :
        </p>
        <ul>
          <li>ce qui est inclus et le résultat observable ;</li>
          <li>ce qui restera manuel au lancement ;</li>
          <li>
            les services tiers et les responsabilités qu’ils ne prennent pas ;
          </li>
          <li>les hypothèses qui changeraient le prix ou le délai ;</li>
          <li>les exclusions et les erreurs déjà prévues ;</li>
          <li>le test par lequel votre entreprise acceptera le résultat ;</li>
          <li>
            la personne qui décide, construit, exploite et répond au client ;
          </li>
          <li>
            la méthode proposée pour les données, la restauration et la sortie.
          </li>
        </ul>
        <p>
          La recette se déroule dans l’environnement de test avec des comptes et
          dossiers fictifs préparés à l’avance. Pour chaque scénario, écrivez en
          français : <strong>étant donné</strong> la situation de départ,{" "}
          <strong>lorsque</strong> la personne agit, <strong>alors</strong> le
          résultat et la preuve attendue. Le fondateur accepte la livraison ; le
          prestataire corrige et rejoue le test.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          {[
            [
              "Séparation des clients",
              "Léa tente d’ouvrir le dossier de Studio Rivage : accès refusé, sans donnée révélée, avec trace exploitable.",
            ],
            [
              "Paiement rejoué",
              "La même confirmation arrive deux fois : un seul espace, un seul abonnement et aucun dossier perdu.",
            ],
            [
              "Parcours vendu",
              "Claire et Léa créent, corrigent, valident et exportent le même dossier avec l’historique annoncé.",
            ],
            [
              "Restauration",
              "Une copie est restaurée ailleurs : connexion, droits, dossier et export fonctionnent dans les seuils écrits.",
            ],
            [
              "Sortie",
              "Claire exporte puis reconstruit un dossier compréhensible à partir des fichiers et de leur dictionnaire.",
            ],
            [
              "Parcours au clavier",
              "Connexion, création, erreur, correction et export restent utilisables sans souris, avec focus et messages visibles.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <p className="mb-2 font-semibold text-zinc-950 dark:text-white">
                {title}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {text}
              </p>
            </div>
          ))}
        </div>
        <InfoBox
          variant="amber"
          title="La règle d’acceptation doit être écrite"
        >
          Une anomalie qui expose les données d’un autre client, empêche le
          paiement, bloque le parcours vendu, rend la restauration impossible ou
          compromet l’export empêche la mise en ligne. Une gêne mineure peut
          être acceptée seulement si elle est consignée, datée et attribuée. Une
          correction n’est close qu’après avoir rejoué le scénario concerné.
        </InfoBox>
        <p>
          Si une réponse remplace ces éléments par « solution sécurisée,
          scalable et intuitive », demandez une version corrigée. Si les
          prestataires imaginent encore des produits différents, le cahier des
          charges n’est pas prêt. Si l’idée ou le premier parcours restent
          incertains, revenez au cadrage au lieu de signer un forfait opaque.
        </p>
        <p>
          Une fois le périmètre stabilisé, le guide{" "}
          <Link href="/guides/combien-coute-un-saas">
            combien coûte un SaaS
          </Link>{" "}
          permet de lire le budget sans mélanger première version, exploitation
          et évolutions futures.
        </p>
        <GuideInlineCTA
          title="Vérifier que trois prestataires chiffreront le même SaaS"
          description="Envoyez le parcours client, les exclusions et les décisions déjà prises pour les comptes, l’abonnement, le support et la sortie. Hagnéré Code vérifie si plusieurs prestataires pourront chiffrer le même périmètre et peut recommander de reprendre la validation ou le MVP avant tout devis."
          tags={[
            "Parcours client explicite",
            "Hypothèses visibles",
            "Tests et responsabilités",
          ]}
          ctaLabel="Faire relire mon cahier des charges SaaS"
          ctaHref="/demarrer-un-projet"
        />
      </GuideLayout>
    </GuidesShell>
  );
}
