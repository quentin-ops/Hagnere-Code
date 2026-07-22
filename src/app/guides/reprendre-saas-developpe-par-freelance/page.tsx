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

const guide = getGuide("reprendre-saas-developpe-par-freelance");

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
        alt: "Reprendre les comptes et le fonctionnement d’un SaaS après le départ de son développeur",
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
      name: "Reprendre un SaaS après le départ du développeur",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Le dépôt GitHub suffit-il pour reprendre le SaaS ?",
    answer:
      "Non. Il peut contenir le code et son historique, mais pas nécessairement les données, les fichiers clients, les comptes de paiement, le domaine, les réglages d’envoi, les tâches automatiques, les sauvegardes ni les secrets conservés hors du dépôt. La reprise est terminée lorsqu’une autre équipe peut faire fonctionner et restaurer le produit depuis des comptes contrôlés par l’entreprise.",
  },
  {
    question: "Faut-il couper immédiatement tous les accès du freelance ?",
    answer:
      "Pas dans une passation normale. Identifiez ce que commande chaque accès, ajoutez un accès nominatif appartenant à l’entreprise, testez-le, puis retirez l’ancien lorsque la condition écrite est remplie. En cas d’intrusion, de détournement de compte ou de menace crédible, la priorité change : traitez l’incident avec une personne compétente au lieu d’appliquer mécaniquement ce guide.",
  },
  {
    question: "Quels comptes doivent appartenir à l’entreprise ?",
    answer:
      "Tous les comptes indispensables au fonctionnement ou à la récupération du service : code, hébergement, base, fichiers, authentification, paiement, domaine, courriels, tâches, surveillance et support. Le nom exact varie selon le SaaS. Chaque compte doit avoir un titulaire clair, des accès nominatifs et un moyen de récupération que l’entreprise a réellement vérifié.",
  },
  {
    question: "Comment tester sans toucher aux vrais clients ?",
    answer:
      "Utilisez une adresse de test isolée, des utilisateurs fictifs, de faux fichiers et des destinataires contrôlés. Ne recopiez pas la base clients dans un environnement de développement ordinaire. Le test d’une vraie restauration est un exercice séparé, autorisé et protégé comme la production. Une intervention sur le service actif doit être planifiée et exécutée par la personne compétente avec une solution de retour.",
  },
  {
    question:
      "Une sauvegarde exportée prouve-t-elle que les données sont récupérables ?",
    answer:
      "Non. Il faut restaurer la sauvegarde dans un espace isolé et protégé, puis vérifier la structure, le nombre attendu d’éléments et les fichiers associés. Une base peut référencer des PDF ou des images stockés ailleurs. La copie restaurée doit ensuite être conservée ou supprimée selon la procédure prévue.",
  },
  {
    question: "Peut-on simplement changer le propriétaire du compte Stripe ?",
    answer:
      "Si le même compte Stripe est conservé, une personne désignée par l’entreprise peut recevoir le rôle approprié et vérifier récupération, banque, facturation, utilisateurs et alertes. Créer un nouveau compte constitue une autre opération : ne supposez pas que clients, abonnements, moyens de paiement et historique se recopient. Suivez alors la procédure du fournisseur et prévenez toute double facturation.",
  },
  {
    question:
      "Le paiement des factures signifie-t-il que l’entreprise possède tout le code ?",
    answer:
      "Pas automatiquement. En droit français, la situation dépend notamment de l’auteur, du contrat, des droits expressément cédés, des créations antérieures et des composants tiers. Les comptes techniques et les droits sur le code sont deux sujets différents. Faites examiner une clause ou un litige important par un professionnel du droit.",
  },
  {
    question: "Faut-il réécrire le SaaS si le code est mal documenté ?",
    answer:
      "Pas par réflexe. Commencez par sécuriser les comptes, comprendre les parcours critiques et mesurer ce qu’une autre équipe peut construire, tester, publier et restaurer. Vous pourrez ensuite maintenir, documenter, migrer une partie, réécrire progressivement ou arrêter. Une réécriture n’est rationnelle que si elle résout un obstacle réel à un coût acceptable.",
  },
  {
    question: "Combien de temps faut-il prévoir pour la passation ?",
    answer:
      "Il n’existe pas de durée universelle. Le récit de RelanceSimple s’étale sur plusieurs semaines, mais chaque étape dépend d’un résultat observable : accès récupéré, restauration réussie, service actif contrôlé ou retour arrière prouvé. Un SaaS simple peut avancer plus vite ; un produit ancien, réglementé ou mal documenté demandera davantage de travail.",
  },
];

type HandoffCardProps = {
  service: string;
  purpose: string;
  owner: string;
  freelanceAccess: string;
  companyControl: string;
  check: string;
  blocker: string;
  action: string;
  removal: string;
  fallback: string;
};

function HandoffCard({
  service,
  purpose,
  owner,
  freelanceAccess,
  companyControl,
  check,
  blocker,
  action,
  removal,
  fallback,
}: HandoffCardProps) {
  return (
    <div className="not-prose my-5 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="border-b border-zinc-200 bg-zinc-50 px-5 py-4 dark:border-zinc-800 dark:bg-zinc-900 sm:px-6">
        <p className="mb-1 text-lg font-bold text-zinc-950 dark:text-white">
          {service}
        </p>
        <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          {purpose}
        </p>
      </div>
      <dl className="grid sm:grid-cols-2">
        {[
          ["Titulaire actuel", owner],
          ["Accès de Sam", freelanceAccess],
          ["Contrôle par l’entreprise", companyControl],
          ["Résultat déjà observé", check],
          ["Manque bloquant", blocker],
          ["Prochaine action", action],
          ["Accès retirable lorsque…", removal],
          ["Solution de secours", fallback],
        ].map(([label, value], index) => (
          <div
            key={label}
            className={[
              "border-zinc-200 p-4 dark:border-zinc-800 sm:p-5",
              index < 6 ? "border-b" : "",
              index % 2 === 0 ? "sm:border-r" : "",
              index < 6 ? "sm:border-b" : "",
            ].join(" ")}
          >
            <dt className="text-[11px] font-bold uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-400">
              {label}
            </dt>
            <dd className="mb-0 mt-1.5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {value}
            </dd>
          </div>
        ))}
      </dl>
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
          { label: "Reprendre un SaaS après le départ du développeur" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Reprenez les comptes qui font réellement fonctionner le produit, vérifiez le service actif et ne retirez chaque ancien accès qu’après un résultat observable."
        heroAction={{ href: "#registre", label: "Voir le registre rempli" }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "10 fonctions à reprendre",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "1 condition par accès",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Aucun secret dans la fiche",
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
            href: "/guides/reprendre-logiciel-metier-existant",
            label: "Auditer la reprise technique d’un logiciel existant",
          },
          {
            href: "/guides/proprietaire-site-internet-code-source",
            label: "Comprendre les droits, le code et les comptes",
          },
          {
            href: "/guides/contrat-tma-application",
            label: "Préparer le futur contrat de maintenance",
          },
          {
            href: "/guides/reprendre-mvp-vibe-code",
            label: "Reprendre un MVP créé avec Lovable, Bolt ou v0",
          },
        ]}
        faqTitle="Reprendre un SaaS : les questions qui restent"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          Votre développeur freelance vous annonce son départ alors que des
          clients se connectent encore à votre SaaS et paient chaque mois. Votre
          priorité n’est pas de juger son code ni de tout refaire. Elle est de
          vérifier que votre entreprise peut encaisser, envoyer les courriels,
          retrouver les données et remettre le service en ligne sans dépendre
          d’une seule personne.
        </p>
        <p>
          Ce guide vous aide à reprendre chaque compte dans le bon ordre, à
          tester ce qui compte sans toucher aux vrais clients, puis à décider
          quand l’ancien accès peut être retiré. Si vous faites face à un
          conflit, une intrusion ou un compte détourné, cette passation normale
          ne suffit pas : il faut traiter l’incident séparément.
        </p>

        <GuideToc
          items={[
            { id: "stabiliser", label: "1. Protéger le service en cours" },
            { id: "plus-que-code", label: "2. Voir ce qui manque au code" },
            { id: "registre", label: "3. Lire les dix fiches remplies" },
            { id: "votre-fiche", label: "4. Remplir votre propre fiche" },
            { id: "trois-preuves", label: "5. Réaliser trois contrôles" },
            { id: "paiements", label: "6. Reprendre les paiements" },
            { id: "transferts", label: "7. Vérifier chaque transfert" },
            { id: "ordre", label: "8. Avancer selon les résultats" },
            { id: "suite", label: "9. Décider de la suite" },
          ]}
        />

        <h2 id="stabiliser">1. Commencez par protéger le service en cours</h2>
        <p>
          Tant que les clients utilisent le produit, la première réussite est
          simple à formuler : ils doivent continuer à se connecter, à payer et à
          recevoir ce que le SaaS leur promet. Demandez donc une courte période
          pendant laquelle seules les modifications nécessaires sont réalisées.
          Ce n’est pas « ne plus rien toucher » ; c’est éviter qu’une nouvelle
          fonction brouille la passation ou crée une panne supplémentaire.
        </p>
        <p>
          Nommez une personne côté entreprise pour décider et une personne
          compétente pour exécuter les opérations techniques. Notez la version
          actuellement en ligne, les moyens de contacter les clients, l’endroit
          où arrivent les alertes et le dernier paiement observé. Le dirigeant
          doit comprendre la décision et contrôler les comptes ; il ne doit pas
          improviser seul une modification de base, de domaine ou de paiement.
        </p>
        <InfoBox
          variant="amber"
          title="Ne retirez jamais un accès sur la seule base d’une date"
        >
          « Le contrat se termine vendredi » n’est pas un contrôle. Écrivez ce
          que l’entreprise doit réussir avant vendredi et ce qui se passe si ce
          résultat manque. Un accès devient retirable lorsque son remplaçant a
          été créé, récupéré, testé et relié au service réellement utilisé.
        </InfoBox>

        <h2 id="plus-que-code">
          2. Le code ne fait pas tourner seul votre SaaS
        </h2>
        <p>
          Un SaaS est un logiciel utilisé à distance, généralement depuis un
          navigateur, que l’entreprise continue d’exploiter pour plusieurs
          clients. Le dépôt GitHub peut contenir ses fichiers de code et leur
          historique. Il ne contient pas nécessairement le compte qui encaisse,
          la base, les PDF, les utilisateurs, le domaine, la boîte d’envoi ou la
          tâche qui se lance chaque matin.
        </p>
        <p>
          Même le transfert d’un dépôt demande de la prudence. GitHub précise
          que l’ancien propriétaire peut rester collaborateur et que des
          applications liées, des adresses recevant des événements, des secrets
          ou des identifiants permettant la mise en ligne peuvent rester
          associés. Consultez la{" "}
          <a
            href="https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation officielle du transfert GitHub
          </a>{" "}
          au moment d’agir : transférer le dépôt n’est que le début du contrôle.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          {[
            [
              "Les clients voient",
              "connexion, pages, données, fichiers, courriels et support",
            ],
            [
              "L’entreprise paie",
              "hébergement, base, stockage, paiement, domaine et services extérieurs",
            ],
            [
              "Le code appelle",
              "identifiants protégés, adresses d’événements et tâches automatiques",
            ],
            [
              "L’équipe surveille",
              "alertes, sauvegardes, historique technique des événements et procédure de remise en ligne",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <p className="mb-1 font-semibold text-zinc-950 dark:text-white">
                {title}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {text}
              </p>
            </div>
          ))}
        </div>

        <h2 id="registre">
          3. RelanceSimple : dix fonctions, dix conditions de retrait
        </h2>
        <InfoBox variant="blue" title="Exemple entièrement fictif">
          RelanceSimple aide 18 petites sociétés à préparer leurs relances de
          factures. Sam, le développeur freelance, part. Nina dirige
          RelanceSimple et Malik représente la nouvelle équipe. Les noms,
          services, dates, volumes et résultats ci-dessous sont inventés pour
          expliquer la méthode ; ils ne décrivent aucun client réel.
        </InfoBox>
        <p>
          Les fiches ne disent pas seulement « accès reçu ». Elles montrent qui
          détient le service, ce que Sam peut encore faire, ce que l’entreprise
          a réussi, ce qui bloque et quelle preuve permettra de retirer l’accès.
          Toutes les lignes sont encore bloquées au début : c’est normal. Le
          registre sert précisément à faire disparaître ces dépendances une par
          une.
        </p>

        <HandoffCard
          service="1. Dépôt GitHub"
          purpose="Conserver le code et son historique."
          owner="Le dépôt appartient encore au compte personnel de Sam."
          freelanceAccess="Sam en est propriétaire et plusieurs identifiants personnels peuvent y être liés."
          companyControl="Nina possède l’organisation de l’entreprise et a testé la récupération de son compte."
          check="Le 22 juillet, Malik récupère le code, construit le produit et le publie sur une adresse de test qui ne sert aucun client."
          blocker="Applications, adresses recevant les événements, secrets et identifiants de mise en ligne ne sont pas encore tous recensés. Oui, cela bloque le retrait."
          action="Malik recense chaque autorisation, la replace sous un compte entreprise et teste son remplaçant."
          removal="Le dépôt est dans l’organisation de l’entreprise et chaque dépendance personnelle a un remplaçant contrôlé et testé."
          fallback="Conserver une archive vérifiée et la version de production actuellement saine."
        />
        <HandoffCard
          service="2. Hébergement"
          purpose="Servir la version réellement utilisée par les clients."
          owner="Le projet actif se trouve dans l’espace personnel de Sam."
          freelanceAccess="Sam est propriétaire du projet et peut publier une version."
          companyControl="Nina possède un nouveau projet et sa récupération a été testée."
          check="Le 23 juillet, Malik publie une page témoin sur une adresse isolée, puis revient à la version précédente."
          blocker="Facturation, stockage, journaux et connexions à d’autres services ne suivent pas forcément le projet. Oui, le projet actif reste bloquant."
          action="Malik rapproche chaque dépendance de sa propre fiche avant de préparer la bascule."
          removal="Le projet qui sert les clients appartient à l’entreprise ; une mise en ligne planifiée a validé les fonctions critiques et le retour immédiat à la version précédente."
          fallback="Garder l’ancien projet inchangé et le dernier déploiement sain jusqu’à la validation."
        />
        <HandoffCard
          service="3. Base et sauvegardes"
          purpose="Retrouver les données structurées et prouver qu’une sauvegarde peut être restaurée."
          owner="La base et les sauvegardes sont administrées depuis le compte de Sam."
          freelanceAccess="Sam peut administrer la base et lancer les restaurations."
          companyControl="Nina possède un accès administrateur dont la récupération a été testée."
          check="Le 24 juillet, Malik restaure une sauvegarde autorisée dans un espace isolé et protégé, puis contrôle sa structure et les éléments attendus."
          blocker="Les fichiers PDF sont stockés dans un autre service. Oui, une base sans ses fichiers ne suffit pas."
          action="Malik contrôle séparément le stockage et documente le traitement de la copie restaurée."
          removal="L’entreprise contrôle la base et les fichiers actifs ; la nouvelle équipe sait les restaurer selon la procédure autorisée."
          fallback="Ne pas toucher à la production et supprimer la copie isolée selon la procédure prévue."
        />
        <HandoffCard
          service="4. Paiement et abonnements"
          purpose="Continuer à encaisser et à signaler au SaaS le bon état de chaque abonnement."
          owner="RelanceSimple est titulaire du compte Stripe."
          freelanceAccess="Sam a un rôle de développeur qui lui permet de consulter les identifiants techniques."
          companyControl="Nina est propriétaire du compte — rôle nommé Account Owner dans Stripe — avec une adresse de récupération de l’entreprise testée."
          check="Le 25 juillet, Malik reproduit l’intégration dans l’espace de test Stripe, sans créer de facturation réelle."
          blocker="Les identifiants et l’adresse qui reçoit les événements de production restent à inventorier. Oui, un paiement peut être encaissé sans être signalé au produit."
          action="Nina vérifie banque, facturation, récupération, utilisateurs, alertes et configuration active."
          removal="Après tout changement préparé, un événement attendu est observé avec la configuration active, sans abonnement ou facture improvisés."
          fallback="Ne rien modifier sur le compte actif avant validation et rétablir la configuration précédente si le contrôle échoue."
        />
        <HandoffCard
          service="5. Domaine et réglages DNS"
          purpose="Conserver l’adresse du SaaS et les réglages qui l’orientent vers les bons services."
          owner="Nina est titulaire du domaine."
          freelanceAccess="Sam est encore contact technique et administrateur."
          companyControl="Nina et Malik disposent de deux accès nominatifs ; la récupération a été testée."
          check="Le 25 juillet, Nina vérifie le renouvellement et exporte une copie datée des réglages du domaine, souvent appelés zone DNS."
          blocker="La carte de renouvellement doit encore être confirmée. Oui, un échec pourrait couper l’adresse ou verrouiller l’entreprise dehors."
          action="Nina vérifie carte, coordonnées et alertes de renouvellement."
          removal="Deux accès entreprise fonctionnent, récupération et paiement sont vérifiés et la copie datée des réglages est disponible."
          fallback="Réimporter les réglages précédents si une modification préparée du domaine échoue."
        />

        <HandoffCard
          service="6. Tâche matinale"
          purpose="Préparer chaque matin les relances sans les envoyer deux fois."
          owner="La planification est encore attachée au projet d’hébergement de Sam."
          freelanceAccess="Sam peut arrêter, modifier ou déclencher la tâche."
          companyControl="Malik administre le projet entreprise et a testé la récupération de son accès."
          check="Le 26 juillet, une exécution utilise 18 dossiers synthétiques et uniquement des destinataires contrôlés ; une seule relance est produite."
          blocker="Une seconde exécution peut encore attendre. Oui, deux planifications pourraient créer deux relances."
          action="Malik vérifie l’arrêt et la liste des tâches encore en attente avant la bascule."
          removal="La planification active appartient à l’entreprise ; la prochaine exécution attendue est observée une seule fois et son alerte est reçue."
          fallback="Arrêter la nouvelle planification, confirmer qu’aucune exécution ne reste en attente, puis seulement réactiver l’ancienne et contrôler l’unicité."
        />
        <HandoffCard
          service="7. Connexion des utilisateurs"
          purpose="Permettre aux clients d’ouvrir leur compte et à l’entreprise de récupérer l’administration."
          owner="Le service de connexion appartient au compte personnel de Sam."
          freelanceAccess="Sam est propriétaire et administrateur du service."
          companyControl="Nina est administratrice avec une adresse entreprise et une récupération testée."
          check="Le 26 juillet, Nina crée, connecte puis retire un utilisateur fictif sur l’adresse de test."
          blocker="Le service qui connecte les vrais clients n’a pas encore été transféré. Oui, le test isolé ne suffit pas."
          action="Malik prépare le transfert du service actif et contrôle ses alertes et réglages."
          removal="Le service actif est détenu et facturé par l’entreprise ; connexion fictive, récupération et alertes fonctionnent sans Sam."
          fallback="Conserver le réglage actif précédent jusqu’à la bascule planifiée et réversible."
        />
        <HandoffCard
          service="8. Courriels"
          purpose="Envoyer confirmations, réinitialisations et messages utiles depuis le bon domaine."
          owner="Le compte d’envoi appartient encore à Sam."
          freelanceAccess="Sam est propriétaire et gère le domaine d’envoi."
          companyControl="Nina dispose d’un accès administrateur et d’une récupération testée."
          check="Le 27 juillet, un courriel transactionnel arrive uniquement sur deux adresses de test contrôlées."
          blocker="Domaine, facturation et limites du compte actif restent à contrôler. Oui, le test isolé ne prouve pas que le service actif continuera."
          action="Malik vérifie le domaine d’envoi et le compte réellement utilisé par le SaaS."
          removal="Le compte actif appartient à l’entreprise ; le domaine est validé et un message contrôlé part de la configuration active sans liste client."
          fallback="Rétablir l’ancien réglage d’envoi et garder toute liste réelle bloquée pendant le contrôle."
        />
        <HandoffCard
          service="9. Fichiers clients"
          purpose="Retrouver les PDF et autres documents qui ne vivent pas dans la base."
          owner="Le stockage est lié au compte de Sam."
          freelanceAccess="Sam en est propriétaire et administrateur."
          companyControl="Nina est administratrice et a testé la récupération."
          check="Le 27 juillet, Malik ajoute, lit puis supprime un faux PDF dans l’espace de test."
          blocker="Propriété, facturation, conservation et sauvegarde du stockage actif restent à confirmer. Oui, les vrais fichiers peuvent rester hors du contrôle de l’entreprise."
          action="Malik vérifie un fichier autorisé selon la procédure protégée et rapproche le stockage de la sauvegarde."
          removal="Le stockage actif est détenu et facturé par l’entreprise ; la nouvelle équipe retrouve un fichier autorisé et supprime le faux fichier."
          fallback="Garder le stockage de production inchangé jusqu’à la bascule et supprimer les fichiers de test."
        />
        <HandoffCard
          service="10. Surveillance et support"
          purpose="Recevoir une panne ou une demande client même après le départ de Sam."
          owner="La boîte et l’outil d’alerte appartiennent à Sam."
          freelanceAccess="Sam est administrateur et destinataire principal."
          companyControl="Nina contrôle la boîte support ; Malik administre les alertes ; leurs récupérations sont testées."
          check="Le 28 juillet, un ticket fictif est attribué et une alerte de test arrive chez deux personnes."
          blocker="La personne qui répond et le délai visé restent à décider. Oui, une panne pourrait sinon rester invisible."
          action="Nina nomme un responsable pour chaque type d’alerte."
          removal="Les alertes actives arrivent chez deux personnes de l’entreprise et un incident fictif est reçu, attribué, traité puis clos sans Sam."
          fallback="Réacheminer temporairement les alertes vers la boîte d’entreprise documentée."
        />

        <h2 id="votre-fiche">4. Reprenez la fiche avec vos propres services</h2>
        <p>
          Passez en revue les dix fonctions de RelanceSimple. Retirez celles qui
          n’existent pas dans votre SaaS et ajoutez les services propres à votre
          produit : signature électronique, cartographie, téléphone, logiciel
          comptable ou autre. Une fiche par compte est plus utile qu’une liste
          très générale intitulée « infrastructure ».
        </p>
        <div className="not-prose my-6 rounded-2xl border border-violet-200 bg-violet-50 p-5 text-violet-950 dark:border-violet-900 dark:bg-violet-950/30 dark:text-violet-100 sm:p-6">
          <p className="mb-4 text-lg font-bold">Fiche vierge à recopier</p>
          <ol className="m-0 grid gap-x-8 gap-y-2 pl-5 text-sm leading-relaxed sm:grid-cols-2">
            <li>service et rôle dans le produit ;</li>
            <li>titulaire actuel du compte ;</li>
            <li>rôle précis du freelance ;</li>
            <li>accès entreprise et récupération vérifiée ;</li>
            <li>contrôle réalisé, résultat et date ;</li>
            <li>élément encore manquant ;</li>
            <li>ce manque bloque-t-il le retrait, et pourquoi ;</li>
            <li>prochaine action, responsable et date ;</li>
            <li>condition observable de retrait ;</li>
            <li>solution de secours si le changement échoue.</li>
          </ol>
        </div>
        <InfoBox
          variant="amber"
          title="Le registre ne doit contenir aucun secret"
        >
          N’y copiez ni mot de passe, ni clé, ni code de récupération, ni donnée
          bancaire d’un client. Écrivez le nom de l’outil protégé où
          l’identifiant est conservé, la personne qui peut le renouveler et le
          contrôle réalisé — jamais la valeur elle-même.
        </InfoBox>

        <h2 id="trois-preuves">
          5. Séparez trois contrôles qui ne répondent pas à la même question
        </h2>
        <h3>Le parcours avec des données fictives</h3>
        <p>
          Il vérifie qu’une autre équipe sait construire le produit, se
          connecter, créer un faux dossier, générer un faux PDF et déclencher
          une action sans destinataire réel. La{" "}
          <a
            href="https://www.cnil.fr/fr/tester-vos-applications"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL recommande de ne pas utiliser les données réelles de production
            pour les tests de développement
          </a>
          . Les dossiers utilisés pour ces essais sont entièrement fictifs et ne
          proviennent pas de la base clients.
        </p>
        <h3>La restauration protégée</h3>
        <p>
          Elle vérifie qu’une sauvegarde est réellement exploitable. Cet
          exercice peut impliquer des données personnelles : il exige une
          autorisation, un espace isolé, des accès limités et une protection
          comparable à la production. La CNIL rappelle qu’une{" "}
          <a
            href="https://www.cnil.fr/fr/securite-sauvegarder"
            target="_blank"
            rel="noopener noreferrer"
          >
            sauvegarde doit être testée et restaurable
          </a>
          . Notez le résultat, puis appliquez la règle prévue pour conserver ou
          supprimer la copie restaurée.
        </p>
        <h3>Le service réellement utilisé</h3>
        <p>
          Il vérifie que les comptes actifs appartiennent à l’entreprise, que
          leurs factures arrivent au bon endroit et que les réglages de
          production pointent vers les bons services. Le test isolé réduit le
          risque ; il ne prouve pas à lui seul que les vrais clients peuvent se
          passer de Sam. La bascule active doit être préparée par la personne
          compétente, contrôlée sur les fonctions critiques et accompagnée d’un
          retour immédiat possible.
        </p>

        <h2 id="paiements">
          6. Pour les paiements, choisissez d’abord la bonne branche
        </h2>
        <p>
          Si RelanceSimple garde le même compte Stripe, Nina peut recevoir le
          rôle approprié, vérifier banque, facturation, récupération,
          utilisateurs et alertes, puis faire contrôler l’intégration. Stripe
          documente le{" "}
          <a
            href="https://support.stripe.com/questions/change-the-owner-of-a-stripe-account?locale=en-GB"
            target="_blank"
            rel="noopener noreferrer"
          >
            changement de propriétaire d’un compte
          </a>
          . Le rôle est attribué à une personne désignée qui agit pour
          l’entreprise ; « l’entreprise devient Account Owner » serait trop
          imprécis.
        </p>
        <p>
          Si un nouveau compte doit être créé, arrêtez d’appeler cela un simple
          changement de propriétaire. Stripe explique que la{" "}
          <a
            href="https://support.stripe.com/questions/copy-existing-account-data-to-a-new-stripe-account"
            target="_blank"
            rel="noopener noreferrer"
          >
            copie des données entre deux comptes a des limites
          </a>
          . Clients, moyens de paiement, abonnements, factures et historique ne
          doivent pas être supposés identiques. Le{" "}
          <a
            href="https://docs.stripe.com/billing/subscriptions/import-subscriptions-toolkit?locale=en-GB"
            target="_blank"
            rel="noopener noreferrer"
          >
            parcours officiel de migration des abonnements
          </a>{" "}
          prévoit notamment un environnement de test, une activation préparée et
          une surveillance. Faites établir le plan adapté et interdisez toute
          double facturation ou action improvisée sur un abonnement réel.
        </p>

        <h2 id="transferts">
          7. Un bouton « transférer » ne déplace pas forcément le service entier
        </h2>
        <p>
          Prenons Vercel comme exemple d’hébergeur. Sa documentation actuelle
          indique que certaines intégrations, données de suivi, journaux envoyés
          à d’autres outils, fichiers placés dans son stockage Blob ou réglages
          conservés dans Edge Config ne suivent pas automatiquement un
          transfert. La liste peut évoluer : relisez la{" "}
          <a
            href="https://vercel.com/docs/projects/transferring-projects"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation Vercel du transfert de projet
          </a>{" "}
          au moment de la passation et remplacez Vercel par votre hébergeur
          réel.
        </p>
        <p>
          Appliquez la même question partout : « qu’est-ce que le transfert ne
          déplace pas ? » Pour le code, examinez applications et identifiants.
          Pour la base, examinez fichiers et sauvegardes. Pour le domaine,
          examinez renouvellement et réglages. Pour le paiement, examinez rôles,
          banque, alertes et événements. Le registre transforme ces oublis en
          actions nommées au lieu de les découvrir le jour de la coupure.
        </p>

        <h2 id="ordre">
          8. L’ordre suivi par RelanceSimple dépend des résultats, pas du
          calendrier
        </h2>
        <p>
          Les dates du cas fictif rendent le récit concret ; elles ne promettent
          pas qu’un SaaS se reprend en trente jours. RelanceSimple avance selon
          quatre résultats successifs.
        </p>
        <ol>
          <li>
            <strong>Préserver l’existant :</strong> Nina nomme les responsables,
            limite les changements non nécessaires, identifie la version active
            et confirme que clients, paiements et alertes sont encore servis.
          </li>
          <li>
            <strong>Créer les accès entreprise :</strong> deux personnes
            autorisées entrent dans chaque service critique et testent les
            moyens de récupération, sans retirer Sam.
          </li>
          <li>
            <strong>Prouver séparément :</strong> Malik parcourt le produit avec
            des données fictives, réalise la restauration protégée autorisée et
            prépare chaque contrôle du service actif avec sa solution de
            secours.
          </li>
          <li>
            <strong>Retirer ligne par ligne :</strong> l’accès précis de Sam est
            réduit lorsque le manque bloquant a disparu et que la condition de
            retrait est observée. Les comptes sont ensuite surveillés.
          </li>
        </ol>
        <p>
          Le plan s’arrête si un compte n’est pas récupérable, si une sauvegarde
          échoue, si un droit est contesté ou si des données semblent
          compromises. Ce n’est pas un retard honteux : c’est une information
          qui oblige à traiter le problème approprié avant de poursuivre.
        </p>

        <h2 id="suite">
          9. Une fois les accès repris, décidez sans réécriture réflexe
        </h2>
        <p>
          La passation ne répond pas à toutes les questions techniques. Elle
          donne en revanche une base fiable pour décider : continuer la
          maintenance, financer un{" "}
          <Link href="/guides/reprendre-logiciel-metier-existant">
            audit ciblé de l’application existante
          </Link>
          , migrer un service fragile, réécrire progressivement une partie ou
          arrêter le produit proprement. « Le code n’est pas élégant » ne suffit
          pas à justifier la solution la plus coûteuse.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          {[
            [
              "Maintenir",
              "Le produit sert ses clients et la nouvelle équipe sait construire, publier, restaurer et répondre.",
            ],
            [
              "Documenter et stabiliser",
              "Le service fonctionne mais ses tests, procédures ou alertes sont encore trop fragiles.",
            ],
            [
              "Migrer une dépendance",
              "Le métier et le code restent utiles, mais un compte ou un fournisseur crée une dépendance excessive.",
            ],
            [
              "Réécrire progressivement",
              "Un obstacle vérifié empêche durablement la sécurité, la maintenance ou l’évolution à un coût acceptable.",
            ],
            [
              "Arrêter proprement",
              "L’usage ou la valeur ne justifie plus les coûts, après traitement des clients, données et obligations applicables.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <p className="mb-1 font-semibold text-zinc-950 dark:text-white">
                {title}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {text}
              </p>
            </div>
          ))}
        </div>
        <p>
          Les droits sur le code restent un sujet distinct. En droit français,
          le{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278868"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code de la propriété intellectuelle reconnaît les droits de l’auteur
            du seul fait de la création
          </a>{" "}
          . Par ailleurs,{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
            target="_blank"
            rel="noopener noreferrer"
          >
            l’article L131-3 demande notamment que les droits cédés soient
            identifiés et leur exploitation délimitée
          </a>
          . Salarié, freelance, créations antérieures, bibliothèques et médias
          peuvent suivre des règles différentes. Ne concluez ni à partir d’une
          facture payée, ni à partir du titulaire du compte GitHub ; faites
          examiner un contrat ou un litige important par un professionnel du
          droit.
        </p>
        <p>
          Une fois l’outil repris, le guide sur le{" "}
          <Link href="/guides/contrat-tma-application">
            contrat de maintenance d’une application
          </Link>{" "}
          vous aide à préciser incidents, horaires, responsabilités, évolutions
          et sortie. La passation protège le présent ; la maintenance organise
          ce qui se passe ensuite.
        </p>
        <GuideInlineCTA
          title="Faire vérifier le registre de passation de votre SaaS"
          description="Envoyez la situation, les comptes déjà identifiés et les blocages connus. Quentin Hagnéré relit votre demande et vous indique le prochain contrôle utile, y compris si une action plus simple suffit ou si la reprise doit être reportée. Cette première orientation ne vous oblige à commander aucune prestation."
          tags={["Lecture directe", "Priorités concrètes", "Sans engagement"]}
          ctaLabel="Décrire la reprise du SaaS"
          ctaHref="/demarrer-un-projet"
        />
      </GuideLayout>
    </GuidesShell>
  );
}
