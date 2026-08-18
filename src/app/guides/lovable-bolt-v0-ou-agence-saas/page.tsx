import Link from "next/link";
import {
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import {
  GuideLayout,
  type GuideFAQItem,
  type GuideSidebarKeyPoint,
  type GuideSidebarLink,
} from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { SaasBuildPathDecisionDossier } from "@/components/guides/SaasBuildPathDecisionDossier";
import { formatGuideDate, getGuide } from "@/lib/guides";
import {
  buildGuideMetadata,
  buildGuideStructuredData,
} from "@/lib/guide-page-seo";

const guide = getGuide("lovable-bolt-v0-ou-agence-saas");

export const metadata = buildGuideMetadata(
  guide,
  "Lovable, Bolt, v0 ou agence : choisir comment lancer un SaaS",
);

const [articleJsonLd, breadcrumbJsonLd] = buildGuideStructuredData(
  guide,
  "Lovable, Bolt, v0 ou agence SaaS",
);

const faqItems: GuideFAQItem[] = [
  {
    question: "Peut-on vendre un SaaS construit avec Lovable ou Bolt ?",
    answer:
      "Cela dépend du produit, du plan et des conditions applicables le jour de l’usage. La documentation Bolt affirme que le code créé peut être utilisé commercialement, tandis que les conditions StackBlitz consultées le 27 juillet 2026 — dernière mise à jour affichée : 10 janvier 2024 — réservent l’usage commercial de ses Services aux offres Teams ou Enterprise. Faites confirmer ce point par écrit avant de vendre. Dans tous les cas, vérifiez aussi les dépendances, contenus tiers, comptes, données, sécurité et exploitation : posséder du code ne rend pas le service prêt à vendre.",
  },
  {
    question: "Le code généré m’appartient-il et puis-je le récupérer ?",
    answer:
      "Les éditeurs annoncent des mécanismes de propriété ou d’export du code, mais un produit ne se réduit pas à ses fichiers. Lisez les conditions de votre plan et prouvez la reprise : dépôt contrôlé par l’entreprise, dépendances et licences connues, installation et build propres, secrets séparés, schéma, données, fichiers, identités, domaine, e-mails, paiements et fonctions serveur transférables. Un ZIP ou un dépôt ne prouve pas cette sortie complète.",
  },
  {
    question:
      "Une agence peut-elle reprendre une application Lovable, Bolt ou v0 ?",
    answer:
      "Souvent oui, si les comptes, le dépôt, les données, les services et les droits sont accessibles et documentés. Mais la facilité de reprise dépend du projet réel. Si un prototype existe déjà, faites d’abord un audit de build, de déploiement, d’accès et de données plutôt que de commander immédiatement une réécriture.",
  },
  {
    question: "v0 fait-il exactement la même chose que Lovable et Bolt ?",
    answer:
      "Non. v0 privilégie Next.js, les projets Vercel, GitHub et des intégrations de données. Lovable fournit un environnement intégré avec son cloud et une synchronisation Git ; depuis le 13 mai 2026, sa FAQ distingue les nouveaux projets TanStack Start avec SSR des anciens projets React/Vite. Bolt réunit génération, hébergement et base gérée, tout en permettant un export du projet. Ces capacités ont été revérifiées le 27 juillet 2026, mais elles évoluent vite.",
  },
  {
    question: "Un scan de sécurité suffit-il avant la mise en ligne ?",
    answer:
      "Non. Un scan peut signaler des défauts connus, mais il ne prouve pas que les règles métier, les droits entre clients, les secrets et les procédures d’exploitation sont corrects. Les contrôles automatiques ont des limites annoncées. Faites tester les usages à risque et relire les éléments sensibles.",
  },
  {
    question: "Quel est le moins cher entre un builder IA et une agence ?",
    answer:
      "Il n’existe pas de réponse sérieuse sans périmètre commun. Additionnez les abonnements et crédits, le temps du porteur, le cadrage, la revue, les corrections, les services, le support, la maintenance, les incidents et la sortie sur 12, 36 et 60 mois. Si une responsabilité critique est exclue ou inconnue dans une option, son coût comparable reste ND : un prix plus bas ne compense pas un livrable absent.",
  },
];

const keyPoints: GuideSidebarKeyPoint[] = [
  {
    number: "01",
    title: "Avant le premier client",
    description: "",
    color: "violet",
  },
  {
    number: "02",
    title: "14 livrables · 12 preuves",
    description: "",
    color: "blue",
  },
  {
    number: "03",
    title: "Données fictives",
    description: "",
    color: "emerald",
  },
  {
    number: "04",
    title: "TCO 12 · 36 · 60 mois",
    description: "",
    color: "amber",
  },
];

const relatedLinks: GuideSidebarLink[] = [
  {
    href: "/guides/valider-idee-saas-avant-developper",
    label: "Valider l’idée avant de construire",
  },
  {
    href: "/guides/mvp-prototype-ou-poc",
    label: "Choisir entre MVP, prototype et POC",
  },
  {
    href: "/guides/mvp-saas-quoi-inclure",
    label: "Définir ce que le premier SaaS doit inclure",
  },
  {
    href: "/guides/reprendre-mvp-vibe-code",
    label: "Auditer un prototype déjà généré",
  },
];

const tocItems = [
  { id: "verdict", label: "Le verdict par profil" },
  { id: "premier-client", label: "Passer du lien au premier client" },
  { id: "quatre-chemins", label: "Comparer les quatre options actuelles" },
  {
    id: "preuve",
    label: "Définir ce que la version doit démontrer",
  },
  { id: "protocole", label: "Le brief et le protocole communs" },
  { id: "donnees", label: "Garder les données réelles hors du test" },
  { id: "production", label: "Les portes d’un SaaS exploitable" },
  { id: "agence", label: "Ce qu’une agence doit vraiment livrer" },
  { id: "cout-complet", label: "Calculer le coût complet" },
  { id: "dossier", label: "Faire votre comparaison" },
  { id: "cas", label: "Trois cas fictifs" },
  { id: "limites-benchmark", label: "Ce qui n’a pas été testé ici" },
  { id: "sources", label: "Sources et limites" },
];

const proofCards = [
  {
    number: "01",
    title: "Un dépôt contrôlé",
    test: "Le code se synchronise dans un dépôt appartenant à l’entreprise et une seconde personne peut y accéder.",
    decision:
      "Sans dépôt ou export exploitable, le prototype peut rester une maquette, pas la base promise du produit.",
  },
  {
    number: "02",
    title: "Un déploiement reproductible",
    test: "Une version déterminée est publiée, modifiée puis remise en ligne sans dépendre d’une conversation oubliée.",
    decision:
      "Un lien public n’explique pas encore comment livrer la prochaine correction.",
  },
  {
    number: "03",
    title: "Deux clients séparés",
    test: "Deux sociétés fictives créent des comptes et chacune ne voit que ses propres données.",
    decision:
      "Si l’isolement n’est pas démontré, ne chargez aucune donnée réelle et ne vendez pas l’espace client.",
  },
  {
    number: "04",
    title: "Un export et une restauration",
    test: "Les données fictives sortent dans un format compris, puis un échantillon est remis en service.",
    decision:
      "Un CSV disponible ne prouve pas la restauration des relations, fichiers et règles.",
  },
  {
    number: "05",
    title: "Des secrets hors de l’écran",
    test: "Les clés et mots de passe ne sont ni dans le code public ni dans le prompt ; leur remplacement est testé.",
    decision:
      "Un secret exposé ou impossible à renouveler bloque la mise en service concernée.",
  },
  {
    number: "06",
    title: "Une erreur compréhensible",
    test: "Une donnée invalide ou un service indisponible produit une alerte, un contexte et une reprise.",
    decision:
      "Un message rassurant à l’écran ne suffit pas si l’action finale a échoué.",
  },
  {
    number: "07",
    title: "Un retour en arrière",
    test: "Une modification volontairement mauvaise est retirée et la version précédente redevient accessible.",
    decision:
      "La vitesse de génération ne compense pas une correction impossible à annuler.",
  },
  {
    number: "08",
    title: "Un propriétaire pour chaque service",
    test: "Domaine, hébergement, base, e-mail, paiement et dépôt sont rattachés à des comptes maîtrisés.",
    decision:
      "Le produit n’est pas transmissible si ses briques restent sur des comptes personnels inconnus.",
  },
  {
    number: "09",
    title: "Un build propre et des tests",
    test: "Une seconde personne clone le dépôt dans un environnement propre, installe les versions verrouillées, lance le build de production puis les tests.",
    decision:
      "Une prévisualisation ou un serveur de développement ne prouve pas que la version de production est reproductible.",
  },
  {
    number: "10",
    title: "Des dépendances et licences connues",
    test: "Les bibliothèques directes et transitives, leurs versions, licences, vulnérabilités et composants générés sont inventoriés.",
    decision:
      "La propriété annoncée du code ne neutralise ni les droits de tiers ni la maintenance de ses dépendances.",
  },
  {
    number: "11",
    title: "Des paiements et e-mails rejouables",
    test: "En bac à sable, un webhook retardé ou doublé, un paiement refusé, un remboursement et un e-mail en rebond sont traités sans double action.",
    decision:
      "Un bouton de paiement ou un e-mail reçu une fois ne prouve pas le fonctionnement du cycle réel.",
  },
  {
    number: "12",
    title: "Une alerte et un exercice d’incident",
    test: "Une panne fictive déclenche une alerte vers la bonne personne, un diagnostic, une décision, une information et une reprise chronométrée.",
    decision:
      "Des logs sans alerte ni responsable ne protègent pas le client lorsque personne ne regarde.",
  },
];

export default function Page() {
  return (
    <GuidesShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <GuideLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: "Lovable, Bolt, v0 ou agence" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Un générateur peut produire un lien convaincant très vite. Avant de choisir entre Lovable, Bolt, v0 et une agence, vérifiez ce que votre première version doit prouver et qui en assumera les données, les erreurs et la maintenance."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={keyPoints}
        relatedLinks={relatedLinks}
        faqTitle="Questions fréquentes avant de lancer un SaaS avec un générateur IA"
        faqItems={faqItems}
        showSidebarCta={false}
      >
        <p className="lead">
          Lovable, Bolt ou v0 vous a donné un lien qui ressemble à un
          produit. Pouvez-vous le vendre ou faut-il une agence ? Un prototype
          montre une idée. Un SaaS exploitable doit
          séparer les données de ses clients, supporter les erreurs, être
          corrigé et pouvoir être repris. Utilisez un générateur seul pour
          apprendre vite avec des données fictives et un test limité.
          Ajoutez une revue professionnelle lorsque des comptes, une base ou une
          intégration apparaissent. Faites accompagner la construction dès le
          départ si vous allez traiter des données sensibles, encaisser,
          promettre un service ou dépendre du produit pour l’activité d’un
          client. Et si personne n’a encore confirmé que le problème mérite
          d’être payé, ne construisez pas : retournez parler aux futurs
          utilisateurs. La bonne décision porte moins sur le « meilleur outil »
          que sur ce que la première version doit démontrer et la responsabilité
          que vous êtes prêt à prendre.
        </p>

        <InfoBox variant="emerald" title="La réponse en une phrase">
          Prototypez seul ce qui peut rester fictif et jetable ; demandez une
          revue ou une construction accompagnée dès que la version engage les
          données, l’argent ou le fonctionnement quotidien d’un client.
        </InfoBox>

        <GuideToc items={tocItems} />

        <h2 id="verdict">Le verdict : choisissez une voie, pas une promesse</h2>
        <p>
          Aucun outil ne gagne dans tous les cas. Les capacités changent, la
          qualité dépend du brief et le risque dépend surtout de ce que vous
          allez confier à la version. Au 27 juillet 2026, voici le point de
          départ le plus défendable. Il s’agit d’une orientation à vérifier sur
          votre projet, pas du résultat d’un banc d’essai réalisé par Hagnéré
          Code.
        </p>

        <GuideTable
          caption="Point de départ selon votre situation — orientation conditionnelle, pas classement absolu"
          headers={["Votre situation", "Voie à examiner d’abord", "Condition d’arrêt"]}
          rows={[
            [
              "Besoin encore hypothétique",
              "Aucun développement : entretiens, observation du travail actuel et preuve d’un problème coûteux.",
              "Si personne ne s’engage à essayer ou payer, produire davantage d’écrans ne valide rien.",
            ],
            [
              "Fondateur non technique, démonstration web fictive",
              "Lovable est souvent le premier candidat à examiner pour son parcours guidé et son environnement intégré.",
              "Arrêtez le test avant toute donnée réelle, paiement ou promesse de service tant que la reprise et les accès ne sont pas revus.",
            ],
            [
              "Profil technique qui veut explorer et manipuler le projet dans le navigateur",
              "Bolt est un candidat naturel à comparer, notamment avec son hébergement et sa base gérée.",
              "Un ZIP, l’historique de versions et la base sont trois sujets distincts ; prouvez le build et la restauration.",
            ],
            [
              "Équipe déjà organisée autour de Next.js, GitHub et Vercel",
              "v0 est le candidat logique à tester en premier, sans supposer que ses intégrations constituent votre architecture finale.",
              "Le dépôt ne contient pas automatiquement domaines, variables, intégrations, données et historique d’exploitation.",
            ],
            [
              "Pilote B2B avec comptes, données ou intégration",
              "Builder choisi + revue indépendante, ou construction accompagnée si l’équipe interne ne couvre pas le risque.",
              "Un échec d’autorisation, de build, de restauration ou de reprise bloque le pilote.",
            ],
            [
              "Produit payé, sensible ou essentiel au client",
              "Équipe responsable nommée — interne, agence ou hybride — couvrant construction et exploitation.",
              "Ne signez pas sur une simple promesse de génération : exigez livrables, preuves, support et réversibilité.",
            ],
          ]}
        />

        <InfoBox variant="blue" title="Le biais de ce guide">
          Hagnéré Code vend de l’accompagnement et peut donc avoir intérêt à
          recommander une intervention professionnelle. Pour limiter ce biais,
          le guide garde ouvertes quatre sorties : construire seul, ajouter une
          revue, confier une construction responsable ou ne rien développer. Le
          dossier comparatif plus bas ne favorise aucun fournisseur et maintient
          les inconnues en « ND ».
        </InfoBox>

        <h2 id="premier-client">
          Le lien fonctionne ; que se passe-t-il avec votre premier client ?
        </h2>
        <p>
          Le premier écran est une étape utile. Il permet de montrer le
          parcours, de faire réagir un prospect et d’écarter une mauvaise idée
          sans mobiliser une équipe entière. Mais le jour où une entreprise
          paie, elle ne vous demande plus seulement si le bouton fonctionne.
          Elle vous confie un accès, des données et parfois une partie de son
          travail.
        </p>

        <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
          <section className="rounded-2xl border border-violet-200 bg-violet-50/50 p-5 dark:border-violet-900 dark:bg-violet-950/20">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-violet-700 dark:text-violet-300">
              Démonstration
            </p>
            <h3 className="m-0 text-lg font-semibold text-zinc-950 dark:text-white">
              « Regardez, le parcours existe »
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Vous montrez des écrans, testez une idée et recueillez une
              réaction avec des informations inventées.
            </p>
          </section>
          <section className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5 dark:border-amber-900 dark:bg-amber-950/20">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-300">
              Exploitation
            </p>
            <h3 className="m-0 text-lg font-semibold text-zinc-950 dark:text-white">
              « Qui répond si le client perd l’accès ? »
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Vous devez retrouver le problème, protéger les autres clients,
              corriger, informer et remettre le service en état.
            </p>
          </section>
        </div>

        <p>
          Le piège consiste à comparer le prix d’un abonnement de génération au
          devis d’une agence comme s’ils livraient la même responsabilité. Le
          premier achète un outil et du temps de génération. Le second peut — si
          sa proposition le dit réellement — inclure préparation, conception,
          développement, tests, déploiement, documentation et maintenance.
          Demandez ce qui est pris en charge, pas seulement ce qui apparaît à
          l’écran.
        </p>

        <h2 id="quatre-chemins">
          Lovable, Bolt, v0 ou agence : ce qui change concrètement
        </h2>
        <p>
          Au 27 juillet 2026, les trois outils ne partent pas du même point.
          Leur marketing parle désormais volontiers d’applications «
          full-stack » ou « prêtes pour la production ». Ces expressions
          décrivent des capacités de plateforme ; elles ne certifient pas votre
          configuration, vos règles métier ni votre organisation. Le tableau
          ne désigne donc aucun vainqueur : il sépare la création, le code, les
          services gérés et ce qui reste à prouver.
        </p>
        <GuideTable
          caption="Capacités déclarées par les éditeurs, revérifiées le 27 juillet 2026"
          headers={[
            "Option",
            "Point de départ documenté",
            "Ce que cela ne prouve pas",
          ]}
          rows={[
            [
              "Lovable",
              "Environnement web guidé, publication et backend gérés possibles, secrets et synchronisation Git. La FAQ distingue les nouveaux projets TanStack Start avec rendu serveur créés depuis le 13 mai 2026 des anciens projets React/Vite.",
              "La pile exacte de votre projet, l’isolement des données et une sortie complète. Déplacer le frontend ne déplace pas automatiquement l’authentification, le stockage, les fonctions et les données.",
            ],
            [
              "Bolt",
              "Création dans le navigateur, hébergement Bolt Cloud, base gérée, authentification, stockage et fonctions serveur possibles. Le projet peut être téléchargé et les tables exportées séparément.",
              "Une restauration de données ou un transfert complet. La documentation précise qu’un retour à une version du projet ne restaure ni la base Bolt ni Supabase.",
            ],
            [
              "v0",
              "Next.js par défaut, routes serveur, projets Vercel, publication, GitHub et intégrations comme Supabase, Neon ou Upstash. Une fois connecté, le dépôt GitHub devient la source de vérité du code.",
              "La récupération du projet complet. Déploiements, domaines, variables d’environnement et intégrations restent des objets du projet Vercel à inventorier et transférer.",
            ],
            [
              "Agence",
              "Cadrage, UX, architecture, développement, tests, sécurité, déploiement, documentation et exploitation — uniquement si le devis, le contrat et la recette les incluent.",
              "La qualité, la continuité ou la réversibilité par son seul nom. Les comptes, le dépôt, les preuves, les exclusions, le support et la sortie doivent être vérifiables.",
            ],
          ]}
        />

        <p>
          Ces différences viennent des documentations officielles sur la{" "}
          <a
            href="https://docs.lovable.dev/introduction/faq"
            target="_blank"
            rel="noopener noreferrer"
          >
            pile technique Lovable
          </a>
          , la{" "}
          <a
            href="https://docs.lovable.dev/tips-tricks/deployment-hosting-ownership"
            target="_blank"
            rel="noopener noreferrer"
          >
            propriété et l’hébergement Lovable
          </a>
          , l’{" "}
          <a
            href="https://docs.lovable.dev/integrations/github"
            target="_blank"
            rel="noopener noreferrer"
          >
            intégration GitHub de Lovable
          </a>
          , l’{" "}
          <a
            href="https://support.bolt.new/cloud/hosting"
            target="_blank"
            rel="noopener noreferrer"
          >
            hébergement Bolt
          </a>
          , sa{" "}
          <a
            href="https://support.bolt.new/cloud/database"
            target="_blank"
            rel="noopener noreferrer"
          >
            base gérée
          </a>
          , le{" "}
          <a
            href="https://support.bolt.new/building/using-bolt/projects-files"
            target="_blank"
            rel="noopener noreferrer"
          >
            téléchargement du projet
          </a>
          , les{" "}
          <a
            href="https://v0.app/docs/full-stack-apps"
            target="_blank"
            rel="noopener noreferrer"
          >
            fonctions full-stack de v0
          </a>{" "}
          , ses{" "}
          <a
            href="https://v0.app/docs/github"
            target="_blank"
            rel="noopener noreferrer"
          >
            règles de synchronisation GitHub
          </a>{" "}
          et ses{" "}
          <a
            href="https://v0.app/docs/projects"
            target="_blank"
            rel="noopener noreferrer"
          >
            objets de projet
          </a>
          . Les offres évoluent : refaites cette vérification le jour du choix.
        </p>

        <InfoBox variant="amber" title="Deux contradictions à ne pas masquer">
          La documentation de portabilité Lovable emploie encore une
          description générique React/Vite alors que sa FAQ distingue les
          nouveaux projets TanStack Start. De son côté, la documentation Bolt
          affirme que le code créé peut servir commercialement, mais les
          conditions StackBlitz consultées le 27 juillet 2026, dont la dernière
          mise à jour affichée est le 10 janvier 2024, limitent l’usage
          commercial de ses Services aux plans Teams ou Enterprise. Vérifiez
          la pile réelle du projet et faites confirmer par écrit les droits
          applicables à votre plan. Ce guide ne tranche pas à la place des
          éditeurs ou d’un juriste.
        </InfoBox>

        <h3>Choisissez ensuite le niveau d’accompagnement</h3>
        <GuideTable
          caption="Choisir le niveau d’accompagnement avant de construire"
          headers={["Chemin", "Bon choix lorsque…", "Limite à respecter"]}
          rows={[
            [
              "Prototype seul",
              "Vous testez une interface ou un parcours avec des données fictives et acceptez de jeter le résultat.",
              "Aucun client réel, secret, paiement ou promesse de service.",
            ],
            [
              "Prototype + revue",
              "Vous construisez vite, puis une personne compétente vérifie comptes, accès, données, code et déploiement avant l’étape suivante.",
              "La revue doit pouvoir arrêter le projet ou demander une reprise.",
            ],
            [
              "Construction accompagnée",
              "Le premier test engage déjà une intégration, des droits complexes, des données sensibles, un paiement ou une échéance client.",
              "Le prestataire doit préciser ce qu’il conçoit, teste, exploite et ne garantit pas.",
            ],
            [
              "Reporter",
              "Le premier acheteur, le problème à résoudre ou le résultat attendu restent flous.",
              "Retourner aux entretiens plutôt que produire davantage d’écrans.",
            ],
          ]}
        />

        <p>
          Une agence n’est donc pas obligatoire « parce que c’est sérieux ». Et
          un générateur n’est pas suffisant « parce que le lien fonctionne ». Le
          niveau d’accompagnement doit suivre le risque réel du prochain test.
          Pour distinguer ce que vous cherchez à prouver, le guide{" "}
          <Link href="/guides/mvp-prototype-ou-poc">MVP, prototype ou POC</Link>{" "}
          aide à choisir le bon objet avant le mode de fabrication.
        </p>

        <h2 id="preuve">
          Écrivez ce que la version doit démontrer avant de choisir l’outil
        </h2>
        <p>
          Évitez « construire la première version de ma plateforme ». Cette
          phrase ne dit pas ce que vous apprendrez. Choisissez une question que
          le résultat peut réellement trancher :
        </p>
        <ul>
          <li>
            un responsable comprend-il le tableau de bord sans explication ?
          </li>
          <li>
            deux entreprises veulent-elles suivre ce processus de cette façon ?
          </li>
          <li>
            l’API du logiciel source permet-elle de récupérer l’information
            indispensable ?
          </li>
          <li>
            deux comptes d’entreprises différentes restent-ils correctement
            séparés ?
          </li>
          <li>
            une personne autre que le créateur peut-elle publier une correction
            ?
          </li>
        </ul>

        <p>
          Un test d’interface peut être réussi sans connexion ni base. C’est
          d’ailleurs la prudence adoptée dans le{" "}
          <a
            href="https://docs.lovable.dev/introduction/getting-started"
            target="_blank"
            rel="noopener noreferrer"
          >
            démarrage officiel de Lovable
          </a>
          , dont l’exemple recommande initialement de rester sans connexion ni
          base afin de réduire ce qui peut mal fonctionner. Cette documentation
          décrit le produit Lovable ; elle ne prouve pas qu’un projet réel sera
          prêt en quelques minutes.
        </p>

        <InfoBox variant="amber" title="Si le besoin n’est pas validé">
          Un outil plus rapide ne rend pas une idée plus utile. Si vous ne savez
          pas qui paie, quel problème est assez important ou ce que le prospect
          utilise aujourd’hui, commencez par le guide pour{" "}
          <Link href="/guides/valider-idee-saas-avant-developper">
            valider une idée de SaaS avant de développer
          </Link>
          .
        </InfoBox>

        <h2 id="protocole">
          Même brief, même temps, mêmes preuves : une comparaison honnête
        </h2>
        <p>
          Les résultats générés varient avec le prompt, le plan, les services
          connectés et la date. Ce guide ne déclare donc aucun vainqueur entre
          Lovable, Bolt et v0, car Hagnéré Code n’a pas exécuté ici trois
          constructions répétées et auditables. Il vous donne en revanche un
          protocole reproductible. Utilisez un brief identique, des comptes
          neufs, un plafond de temps et de corrections commun, ainsi que des
          données fictives. Conservez les prompts, le plan, la date, les
          crédits, le temps humain et chaque correction manuelle.
        </p>

        <h3>Le mini-SaaS commun à construire</h3>
        <p>
          Le brief suivant évite le piège d’une simple landing page. Il reste
          fictif, mais force chaque voie à traiter interface, règles, accès,
          données et exploitation. Il ne constitue pas une commande à confier
          aveuglément à un agent : chaque règle doit devenir un critère de
          recette observable.
        </p>

        <GuideTable
          caption="Brief fictif commun : suivi d’audits B2B"
          headers={["Bloc", "Exigence identique", "Preuve attendue"]}
          rows={[
            [
              "Organisations",
              "Deux sociétés fictives, Alba et Noro, avec trois rôles : administrateur, auditeur et lecteur.",
              "Douze accès autorisés et interdits sont rejoués côté interface et côté serveur.",
            ],
            [
              "Parcours",
              "Créer un audit, attribuer un responsable, ajouter un commentaire et une pièce factice, changer le statut puis exporter.",
              "Chaque action a un résultat attendu, un refus attendu et un journal vérifiable.",
            ],
            [
              "Données",
              "Dix audits fictifs par société, relations entre utilisateurs, audits, commentaires et fichiers.",
              "Export du schéma, des lignes et des fichiers, puis restauration avec rapprochement des volumes.",
            ],
            [
              "Administration",
              "Inviter, désactiver et supprimer un utilisateur ; exporter puis supprimer une société.",
              "Les droits disparaissent au bon moment et la suppression ne touche pas l’autre société.",
            ],
            [
              "Services",
              "E-mail de test, paiement simulé, journal d’administration et alerte sur erreur volontaire.",
              "Doublon, retard, refus, rebond et indisponibilité sont observés sans double effet silencieux.",
            ],
            [
              "Sortie",
              "Une seconde personne récupère le projet depuis les actifs contrôlés par l’entreprise.",
              "Installation propre, build, tests, déploiement, variables, données restaurées et domaine de test.",
            ],
          ]}
        />

        <h3>La discipline du banc d’essai</h3>
        <ol>
          <li>
            publiez le brief, les critères et les cas interdits avant de voir le
            résultat ;
          </li>
          <li>
            faites au moins trois essais par outil, car un seul tirage peut être
            chanceux ou défavorable ;
          </li>
          <li>
            imposez le même temps total et le même nombre de cycles de
            correction ;
          </li>
          <li>
            séparez le temps de génération, le temps du porteur et celui du
            relecteur ;
          </li>
          <li>
            n’effacez pas les échecs : conservez les prompts, journaux, captures
            et correctifs ;
          </li>
          <li>
            demandez à une seconde personne de relancer les tests et la reprise
            sans aide du constructeur ;
          </li>
          <li>
            datez le plan, la version, les prix, les crédits et les limites
            observées ;
          </li>
          <li>
            publiez « non testé » lorsqu’une preuve manque, au lieu de lui
            attribuer un zéro ou un succès supposé.
          </li>
        </ol>

        <h3>Les douze preuves qui peuvent invalider une voie</h3>
        <div className="not-prose my-8 grid gap-4">
          {proofCards.map((item) => (
            <section
              key={item.number}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6"
            >
              <div className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-sm font-bold text-violet-800 dark:bg-violet-950 dark:text-violet-300">
                  {item.number}
                </span>
                <div className="min-w-0">
                  <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    <strong className="text-zinc-900 dark:text-zinc-200">
                      Test :
                    </strong>{" "}
                    {item.test}
                  </p>
                  <p className="mb-0 mt-2 text-sm leading-relaxed text-blue-800 dark:text-blue-300">
                    <strong>Décision :</strong> {item.decision}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        <p>
          N’annoncez jamais « douze tests réussis = produit sécurisé ». Ce
          protocole sert à rendre visibles des lacunes de reprise et
          d’exploitation. Il ne remplace ni des tests fonctionnels complets, ni
          une revue de sécurité, ni un audit adapté aux données et au secteur.
          Un échec d’isolation, de build, de restauration ou de reprise bloque
          la voie. On ne le compense pas par une moyenne flatteuse.
        </p>

        <h2 id="donnees">Gardez les données réelles hors du test</h2>
        <p>
          Créez deux entreprises imaginaires, dix utilisateurs fictifs et des
          documents sans aucune information copiée d’un client. N’utilisez pas
          de vraie clé d’API dans le prompt. Pour une intégration, préférez un
          environnement de test et un compte avec des droits limités. Si une
          vérification ne peut être menée qu’avec des données sensibles, le projet a
          déjà franchi le seuil où une revue compétente devient nécessaire.
        </p>

        <p>
          Les{" "}
          <a
            href="https://vercel.com/legal/ai-product-terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            conditions des produits IA de Vercel
          </a>{" "}
          indiquent notamment que les sorties peuvent être incorrectes,
          incomplètes ou inadaptées et qu’elles doivent être revues ; elles
          encadrent aussi l’envoi d’informations sensibles. Lisez la version
          applicable à votre compte et à votre plan. Une condition contractuelle
          de fournisseur n’est pas une validation technique de votre produit.
        </p>

        <p>
          La même prudence vaut pour les scanners. La{" "}
          <a
            href="https://docs.lovable.dev/features/publish"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation de publication Lovable
          </a>{" "}
          explique qu’un contrôle de base est lancé, que des alertes ou
          anomalies peuvent être signalées et que, selon les réglages, elles ne bloquent pas
          nécessairement la publication. La{" "}
          <a
            href="https://support.bolt.new/cloud/database/security"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation de sécurité de la base Bolt
          </a>{" "}
          décrit elle aussi les limites de ses vérifications. La
          conclusion pratique est simple : lisez les résultats, corrigez-les et
          testez les droits réels ; ne transformez pas un badge en garantie.
        </p>

        <h2 id="production">
          Avant le premier client : les portes d’un SaaS exploitable
        </h2>
        <p>
          « Production-ready » n’est pas une propriété héritée du builder ou de
          l’hébergeur. C’est un état démontré pour une version, un périmètre, un
          volume et une organisation. Avant toute présentation à un client,
          écrivez qui contrôle le domaine, le dépôt, l’hébergement, la base, les
          e-mails et le paiement. Le compte ne doit pas disparaître avec le
          stagiaire, le freelance ou le fondateur qui a fait le premier essai.
          Pour chaque service, notez également :
        </p>
        <ul>
          <li>la manière d’ajouter et retirer un administrateur ;</li>
          <li>le moyen de récupérer l’accès ;</li>
          <li>les données qui y sont stockées ;</li>
          <li>la façon de les exporter ou les supprimer ;</li>
          <li>la personne alertée en cas d’échec ;</li>
          <li>la procédure pour revenir à une version précédente.</li>
        </ul>

        <GuideTable
          caption="Portes minimales avant un pilote payé ou une production"
          headers={["Porte", "Question de recette", "Blocage typique"]}
          rows={[
            [
              "Besoin et périmètre",
              "Les utilisateurs, le résultat attendu, les refus et les limites de la version sont-ils acceptés ?",
              "Le produit continue de grossir sans critère permettant de dire terminé.",
            ],
            [
              "Build et livraison",
              "Un environnement propre reconstruit-il la version depuis le dépôt et le lockfile, puis exécute-t-il les tests ?",
              "Seul le créateur ou la conversation d’origine sait encore publier.",
            ],
            [
              "Données et migrations",
              "Les changements de schéma sont-ils versionnés, testés sur une copie et compatibles avec un retour sûr ?",
              "Le code revient en arrière mais la base reste dans un état incompatible.",
            ],
            [
              "Autorisation",
              "Les contrôles sont-ils appliqués côté serveur pour chaque rôle et chaque organisation ?",
              "Masquer un bouton est confondu avec interdire l’accès aux données.",
            ],
            [
              "Secrets et chaîne logicielle",
              "Les secrets sont-ils rotatifs et les dépendances, licences et vulnérabilités inventoriées ?",
              "Une clé existe dans le client ou un composant tiers reste juridiquement et techniquement inconnu.",
            ],
            [
              "Sauvegarde",
              "Une restauration isolée a-t-elle remis en service schéma, lignes, fichiers et identités avec un RPO et un RTO observés ?",
              "Une sauvegarde est annoncée mais personne n’a prouvé son contenu ni le temps de reprise.",
            ],
            [
              "Observabilité",
              "Une erreur métier et une panne technique produisent-elles un signal utile, une alerte et un contexte corrélable ?",
              "Le premier signal vient du client et les logs ne permettent pas de reconstruire l’action.",
            ],
            [
              "Paiement et e-mail",
              "Retard, doublon, refus, remboursement, relance et rebond sont-ils idempotents et réconciliables ?",
              "Un webhook rejoué crée deux droits, deux factures ou deux suppressions.",
            ],
            [
              "Performance et accessibilité",
              "Les tâches critiques passent-elles sur les appareils et navigateurs planchers, au clavier et avec les aides prévues ?",
              "Une belle démo devient inutilisable avec des volumes réels ou sans souris.",
            ],
            [
              "Incident et support",
              "Qui reçoit l’alerte, décide, informe, corrige et vérifie le retour au service, selon quel délai ?",
              "L’offre parle de maintenance sans canal, horaire, priorité ni délai de prise en charge.",
            ],
            [
              "Suppression et sortie",
              "Un client peut-il être exporté puis supprimé et une autre équipe reprendre toutes les briques ?",
              "Le frontend est portable mais l’authentification, les fichiers ou les fonctions restent prisonniers d’un compte.",
            ],
          ]}
        />

        <p>
          Le cadre{" "}
          <a
            href="https://csrc.nist.gov/pubs/sp/800/218/final"
            target="_blank"
            rel="noopener noreferrer"
          >
            Secure Software Development Framework du NIST
          </a>{" "}
          ne prescrit pas un outil unique. Il fournit des pratiques de
          développement sécurisé à intégrer au cycle de vie et un vocabulaire
          commun entre producteur et acheteur. C’est précisément la bonne
          échelle de lecture : le builder peut aider à produire, mais une
          organisation doit encore préparer, protéger, vérifier et répondre.
        </p>

        <p>
          Lovable distingue dans sa{" "}
          <a
            href="https://docs.lovable.dev/features/project-visibility"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation l’accès au projet
          </a>{" "}
          — code, conversation et travail en cours — de l’accès au site publié.
          Sa{" "}
          <a
            href="https://docs.lovable.dev/features/publish"
            target="_blank"
            rel="noopener noreferrer"
          >
            page de publication
          </a>{" "}
          indique aussi que les restrictions d’accès au site dépendent du plan
          et qu’une publication est un instantané qui ne se met pas à jour
          automatiquement. Vérifiez ces réglages au moment du test : un lien
          difficile à deviner n’est pas une autorisation.
        </p>

        <p>
          Côté données, Bolt documente l’{" "}
          <a
            href="https://support.bolt.new/cloud/database/tables"
            target="_blank"
            rel="noopener noreferrer"
          >
            export manuel de tables en CSV ou JSON
          </a>
          . C’est une fonction utile, pas la démonstration d’une restauration complète.
          Sa{" "}
          <a
            href="https://support.bolt.new/cloud/database/troubleshoot-db"
            target="_blank"
            rel="noopener noreferrer"
          >
            FAQ de base de données
          </a>{" "}
          signale également certaines directions de migration qui ne disposent
          pas d’un flux pris en charge au moment de la consultation. Les
          possibilités évoluent : testez la direction de sortie dont vous aurez
          réellement besoin.
        </p>

        <h2 id="agence">
          Une agence n’est comparable que si sa responsabilité est décomposée
        </h2>
        <p>
          « Agence : 40 000 € » et « builder : 25 $ par mois » ne sont pas deux
          prix du même objet. Le premier peut couvrir plusieurs métiers et
          plusieurs mois ; le second achète un droit d’usage et des ressources.
          Inversement, un devis d’agence peut se limiter à des écrans et laisser
          tout le risque au client. Pour comparer, transformez chaque promesse
          en livrable accepté.
        </p>

        <GuideTable
          caption="Décomposer une proposition d’accompagnement"
          headers={["Responsabilité", "Livrable vérifiable", "Question à poser"]}
          rows={[
            [
              "Discovery produit",
              "Problème, utilisateurs, parcours, règles, exclusions, métrique et critères d’arrêt.",
              "Que recommanderez-vous de ne pas construire ?",
            ],
            [
              "UX et accessibilité",
              "Parcours testés, états vides, erreurs, mobile, clavier et besoins d’accessibilité.",
              "Sur quels utilisateurs, appareils et tâches la recette portera-t-elle ?",
            ],
            [
              "Architecture et données",
              "Décisions documentées, modèle de données, migrations, intégrations et limites.",
              "Quel changement futur rendrait cette architecture inadaptée ?",
            ],
            [
              "Développement et revue",
              "Dépôt de l’entreprise, branches, demandes de revue, tests, build et inventaire des dépendances.",
              "Qui relit les changements sensibles et qui peut bloquer une livraison ?",
            ],
            [
              "Sécurité et protection des données",
              "Menaces, droits, secrets, journaux, correctifs, DPA, sous-traitants et arbitrages documentés.",
              "Qu’est-ce qui nécessite un spécialiste externe ou une validation juridique ?",
            ],
            [
              "Mise en production",
              "Environnements, CI, variables, domaine, migrations, retour arrière et procès-verbal de recette.",
              "Pouvez-vous reconstruire et publier depuis un poste propre ?",
            ],
            [
              "Exploitation",
              "Monitoring, alertes, sauvegardes restaurées, procédure d’incident, support et niveaux de service.",
              "Qui répond à 18 h 30 si le client ne peut plus travailler ?",
            ],
            [
              "Transmission et sortie",
              "Comptes, documentation, exports, réinitialisation des identités et exercice de reprise.",
              "Quel délai et quel coût faudra-t-il pour changer d’équipe ?",
            ],
          ]}
        />

        <p>
          Faites apparaître les exclusions avec la même précision. «
          Hébergement inclus » peut exclure le coût d’usage ; « maintenance »
          peut exclure les évolutions, les dépendances ou l’astreinte ; «
          sécurité » peut désigner un simple scanner. Un terme générique ne vaut
          pas une obligation. Si la proposition ne permet pas de cocher la même
          matrice que la voie builder, le coût reste non comparable.
        </p>

        <h2 id="cout-complet">
          Le vrai coût : même résultat, puis 12, 36 et 60 mois
        </h2>
        <p>
          Le mois 1, vous payez surtout des crédits, du cadrage, des prompts, de
          la conception et des corrections. Le mois 13, vous payez aussi
          l’hébergement, la base, les e-mails, le suivi des erreurs, le support,
          les mises à jour, la sécurité et les incidents. À la sortie, vous
          financez le transfert, la documentation, la migration et parfois la
          réinitialisation des utilisateurs. Une agence n’efface pas ces coûts ;
          elle peut seulement en porter une partie si le contrat le dit.
        </p>

        <h3>Les abonnements donnent un ticket d’entrée, pas un TCO</h3>
        <GuideTable
          caption="Signaux tarifaires officiels consultés le 27 juillet 2026 — dollars, hors conversion, taxes et consommation réelle"
          headers={["Plateforme", "Signal publié", "Pourquoi ce n’est pas le coût du SaaS"]}
          rows={[
            [
              "Lovable",
              "Crédits partagés par workspace ; leur valeur et leur consommation varient selon le plan, l’action et l’usage du Cloud.",
              "Le prix d’une génération ne contient ni votre temps, ni la recette, ni la revue, ni le support, ni une sortie exercée.",
            ],
            [
              "Bolt",
              "Pro à 25 $/mois ; Teams à 30 $/membre/mois sur la page officielle consultée.",
              "Les tokens dépendent notamment de la taille du projet ; hébergement, données, corrections et responsabilité restent à chiffrer.",
            ],
            [
              "v0",
              "Team à 30 $/utilisateur/mois ; Business à 100 $/utilisateur/mois. L’ancien Premium à 20 $ est annoncé en extinction pour les nouveaux utilisateurs.",
              "Les crédits dépendent du modèle et du contexte ; Vercel, les intégrations, le temps humain et l’exploitation ont leurs propres coûts.",
            ],
            [
              "Agence ou équipe",
              "Devis ou coût chargé des personnes ; aucun prix universel sérieux.",
              "Le montant n’est comparable que si les responsabilités, exclusions, preuves et horizons sont identiques.",
            ],
          ]}
        />

        <p>
          Rouvrez toujours les{" "}
          <a
            href="https://lovable.dev/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            tarifs Lovable
          </a>
          , les{" "}
          <a
            href="https://bolt.new/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            tarifs Bolt
          </a>{" "}
          et les{" "}
          <a
            href="https://v0.app/docs/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            tarifs v0
          </a>{" "}
          depuis votre pays et votre compte. Les montants, quotas, modèles,
          crédits, plans hérités et taxes peuvent changer. Une page tarifaire
          ne remplace pas un relevé de consommation sur votre propre brief.
        </p>

        <h3>La formule à utiliser</h3>
        <p>
          Calculez d’abord la construction : abonnements et crédits, temps
          interne, cadrage, design, développement, revue, stabilisation,
          intégrations, sécurité et lancement. Ajoutez ensuite, pour chaque mois,
          les services, le support interne, la maintenance et l’exploitation
          techniques. Ajoutez enfin les audits ou exercices annuels et le coût
          de sortie. Le résultat est un <strong>coût économique estimé</strong>,
          pas un total « HT » homogène, car il mélange dépenses facturées et
          temps interne.
        </p>

        <pre className="not-prose my-6 overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100 dark:border-zinc-800">
          {`Construction =
  abonnements et crédits
+ jours internes × coût chargé
+ (conception, développement, revue) × coût externe

Exploitation sur H mois =
  H × (services + support interne + maintenance technique)
+ audits et exercices annuels

TCO(H) = construction + exploitation(H) + sortie`}
        </pre>

        <InfoBox variant="blue" title="Exemple entièrement fictif">
          Les deux scénarios ci-dessous servent uniquement à vérifier la
          formule. Cet exemple ne décrit ni un client, ni une mission, ni un
          tarif Hagnéré Code, ni un prix de marché. Les deux options restent
          non qualifiées tant que leur périmètre et leurs preuves ne sont pas
          remplis dans le dossier.
        </InfoBox>

        <GuideTable
          caption="Exemple Alba/Noro : mêmes hypothèses de besoin, montants arbitraires et remplaçables"
          headers={["Hypothèse fictive", "Builder + revue", "Équipe accompagnante"]}
          rows={[
            [
              "Construction",
              "600 € de crédits/services + 18 j internes à 450 € + 7 j externes à 900 € = 15 000 €",
              "900 € de services + 9 j internes à 450 € + 26 j externes à 900 € = 28 350 €",
            ],
            [
              "Exploitation annuelle",
              "180 €/mois + 1 j interne/mois + 0,5 j technique/mois + 1 800 €/an = 14 760 €",
              "260 €/mois + 0,5 j interne/mois + 1 j technique/mois + 2 700 €/an = 19 320 €",
            ],
            [
              "Sortie",
              "4 j externes à 900 € = 3 600 €",
              "5 j externes à 900 € = 4 500 €",
            ],
            [
              "TCO 12 mois",
              "15 000 + 14 760 + 3 600 = 33 360 €",
              "28 350 + 19 320 + 4 500 = 52 170 €",
            ],
            [
              "TCO 36 mois",
              "15 000 + 3 × 14 760 + 3 600 = 62 880 €",
              "28 350 + 3 × 19 320 + 4 500 = 90 810 €",
            ],
            [
              "TCO 60 mois",
              "15 000 + 5 × 14 760 + 3 600 = 92 400 €",
              "28 350 + 5 × 19 320 + 4 500 = 129 450 €",
            ],
          ]}
        />

        <p>
          Ces calculs ne permettent volontairement pas de conclure que la
          première voie est meilleure. Si elle exclut l’isolement des clients,
          une restauration, le support ou la reprise, les deux périmètres ne
          sont plus identiques. Inversement, si le besoin se limite à une
          démonstration jetable, inclure une organisation de production complète
          surdimensionne la comparaison. Faites varier séparément le temps
          interne, les corrections, les volumes, les incidents et la sortie ;
          ne cachez jamais l’incertitude dans une moyenne.
        </p>

        <h2 id="dossier">
          Faites votre diagnostic et comparez les mêmes engagements
        </h2>
        <p>
          L’outil ci-dessous ne demande aucun e-mail et n’envoie pas vos
          réponses. Il commence par recommander un seuil minimal — reporter,
          prototype fictif, pilote revu ou construction responsable — puis vous
          fait comparer deux voies. Quatorze lignes décrivent le périmètre,
          douze portes exigent des preuves datées et le TCO reste ND tant que
          l’option n’est pas qualifiée. Vous pouvez copier ou imprimer le
          rapport, puis exporter et réimporter un JSON local pour reprendre la
          saisie ; ce fichier peut contenir vos réponses et reste sous votre
          contrôle.
        </p>

        <SaasBuildPathDecisionDossier />

        <h2 id="cas">Trois décisions fictives, trois sorties différentes</h2>
        <InfoBox variant="blue" title="Cas pédagogiques, pas références clients">
          Camille, Mehdi, Sofia, Alba et Noro sont inventés. Les montants sont
          des hypothèses de calcul. Aucun délai, taux de réussite, niveau de
          sécurité ou performance commerciale n’en est déduit.
        </InfoBox>

        <h3>1. Camille veut « lancer » mais aucun acheteur n’a confirmé</h3>
        <p>
          Camille imagine un portail de suivi pour artisans. Elle a choisi une
          couleur, rédigé dix fonctionnalités et comparé les builders, mais
          aucun artisan n’a montré son organisation actuelle ni accepté un
          second entretien. La sortie rationnelle est « ne construisez pas
          encore ». Elle prépare cinq entretiens centrés sur les retards, les
          doublons et le coût du processus actuel. Une maquette jetable peut
          servir de support, à condition de ne pas être présentée comme un MVP.
          Le coût de production reste ND, car le périmètre n’est pas encore
          défendable.
        </p>

        <h3>2. Mehdi doit tester un parcours avec deux sociétés fictives</h3>
        <p>
          Mehdi a obtenu des entretiens cohérents et veut tester le brief
          Alba/Noro sans donnée réelle ni paiement. Il peut examiner Lovable,
          Bolt ou v0 selon sa compétence et l’environnement futur de l’équipe.
          Son seuil minimal est un prototype fictif ; dès qu’il ajoute les
          comptes et l’isolation entre sociétés, une revue indépendante devient
          rationnelle. Le scénario fictif « builder + revue » ci-dessus atteint
          mathématiquement 33 360 € sur douze mois, mais le dossier affiche
          encore ND tant que le build propre, les accès interdits, la
          restauration et la reprise ne sont pas prouvés. C’est une protection,
          pas un défaut du calculateur.
        </p>

        <h3>3. Sofia a un pilote payé et des données de santé</h3>
        <p>
          Sofia possède une lettre d’intention et un calendrier serré. Son
          pilote doit importer des données de santé, gérer plusieurs structures
          et déclencher une notification. Le choix n’est plus « builder ou
          agence » au sens marketing : il faut une responsabilité technique,
          sécurité et juridique nommée. Une équipe interne expérimentée peut
          l’assumer ; une agence peut la compléter ; un builder peut rester un
          accélérateur. En revanche, aucune de ces étiquettes ne remplace
          l’analyse de protection des données, les droits, les environnements,
          la recette, l’incident et la sortie. Tout devis incomplet demeure ND,
          même s’il affiche le plus petit montant.
        </p>

        <h3>Les quatre sorties restent ouvertes</h3>
        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Prototypez seul",
              text: "Le test porte sur la compréhension d’un écran ou d’un parcours, avec des données fictives et un résultat jetable.",
              color:
                "border-emerald-200 bg-emerald-50/50 dark:border-emerald-900 dark:bg-emerald-950/20",
            },
            {
              title: "Ajoutez une revue",
              text: "Vous avez besoin de comptes, d’une base ou d’une connexion, mais le test reste limité et aucune activité client n’en dépend encore.",
              color:
                "border-blue-200 bg-blue-50/50 dark:border-blue-900 dark:bg-blue-950/20",
            },
            {
              title: "Faites accompagner la construction",
              text: "Des données sensibles, des paiements, des règles d’accès complexes ou une promesse de service existent dès le premier test.",
              color:
                "border-violet-200 bg-violet-50/50 dark:border-violet-900 dark:bg-violet-950/20",
            },
            {
              title: "Ne construisez pas encore",
              text: "Le premier acheteur, le problème ou le résultat attendu restent flous. Quelques entretiens vous apprendront davantage qu’une nouvelle génération.",
              color:
                "border-amber-200 bg-amber-50/50 dark:border-amber-900 dark:bg-amber-950/20",
            },
          ].map((item) => (
            <section
              key={item.title}
              className={`rounded-2xl border p-5 sm:p-6 ${item.color}`}
            >
              <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                {item.title}
              </h3>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {item.text}
              </p>
            </section>
          ))}
        </div>

        <p>
          Si vous avez déjà un prototype, ne repartez pas de cette décision
          théorique. Utilisez plutôt le guide pour{" "}
          <Link href="/guides/reprendre-mvp-vibe-code">
            auditer et reprendre un MVP créé avec Lovable, Bolt ou v0
          </Link>
          . Il commence là où celui-ci s’arrête : build, déploiement, données,
          accès et choix garder, stabiliser, migrer ou réécrire.
        </p>

        <h2 id="limites-benchmark">
          Ce guide n’invente pas le benchmark qui lui manque
        </h2>
        <p>
          Hagnéré Code n’a pas construit ici le même produit trois fois dans
          Lovable, trois fois dans Bolt et trois fois dans v0. Nous n’avons donc
          ni temps mesuré, ni consommation comparable, ni dépôts publics, ni
          captures de résultats, ni test d’attaque, ni restauration
          indépendante à publier. Affirmer « tel outil gagne » serait une
          conclusion sans expérience. Les verdicts de cette page sont des
          orientations conditionnelles fondées sur les architectures et limites
          documentées par les éditeurs.
        </p>
        <p>
          Les comparatifs internationaux apportent souvent une démonstration
          visuelle, des temps et un prix, mais ils présentent aussi trois
          fragilités récurrentes : un seul essai, des versions vite dépassées et
          des scores sans critères reproductibles. Le préprint{" "}
          <a
            href="https://arxiv.org/abs/2605.04637"
            target="_blank"
            rel="noopener noreferrer"
          >
            SWE-WebDevBench
          </a>{" "}
          propose une méthode plus exigeante, avec des exigences fonctionnelles
          cachées et de nombreuses métriques de produit et d’ingénierie. Son
          échantillon et ses affiliations imposent néanmoins de le lire comme
          une contribution méthodologique, pas comme un classement universel ;
          Bolt n’y constitue notamment pas un résultat comparable à inventer.
        </p>
        <p>
          Pour publier un futur banc d’essai, il faudra versionner le brief,
          répéter les essais, fixer le temps et les corrections, conserver les
          prompts et les coûts, ouvrir les preuves autorisées puis faire
          contre-tester le build, les accès, la restauration et la reprise. Tant
          que ce travail n’est pas réalisé, la grille interactive est un outil
          pour conduire votre propre décision — pas une preuve que Hagnéré Code
          a testé ces produits.
        </p>

        <GuideInlineCTA
          title="Choisir la voie la moins risquée pour tester votre SaaS"
          description="Décrivez ce que le premier test doit démontrer, les données utilisées et l’engagement du premier client. Nous pouvons préparer un prototype, une revue ou une construction accompagnée — y compris recommander de ne pas développer encore."
          tags={[
            "Prototype limité possible",
            "Données fictives d’abord",
            "Reprise préparée",
          ]}
          ctaLabel="Préparer mon premier test"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="sources">Sources, date et limites</h2>
        <p>
          Les faits susceptibles de changer ont été revérifiés le{" "}
          <strong>27 juillet 2026</strong>. Pour Lovable :{" "}
          <a
            href="https://docs.lovable.dev/introduction/faq"
            target="_blank"
            rel="noopener noreferrer"
          >
            FAQ et piles techniques
          </a>
          ,{" "}
          <a
            href="https://docs.lovable.dev/tips-tricks/deployment-hosting-ownership"
            target="_blank"
            rel="noopener noreferrer"
          >
            déploiement, propriété et sortie
          </a>
          ,{" "}
          <a
            href="https://docs.lovable.dev/integrations/github"
            target="_blank"
            rel="noopener noreferrer"
          >
            synchronisation Git
          </a>
          ,{" "}
          <a
            href="https://docs.lovable.dev/features/security"
            target="_blank"
            rel="noopener noreferrer"
          >
            limites des contrôles de sécurité
          </a>
          ,{" "}
          <a
            href="https://lovable.dev/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            crédits et tarification
          </a>{" "}
          et le{" "}
          <a
            href="https://lovable.dev/data-processing-agreement"
            target="_blank"
            rel="noopener noreferrer"
          >
            DPA
          </a>
          .
        </p>
        <p>
          Pour Bolt et StackBlitz :{" "}
          <a
            href="https://support.bolt.new/cloud/database"
            target="_blank"
            rel="noopener noreferrer"
          >
            base Bolt
          </a>
          ,{" "}
          <a
            href="https://support.bolt.new/building/using-bolt/projects-files"
            target="_blank"
            rel="noopener noreferrer"
          >
            gestion et export du projet
          </a>
          ,{" "}
          <a
            href="https://support.bolt.new/building/using-bolt/rollback-backup"
            target="_blank"
            rel="noopener noreferrer"
          >
            historique et absence de restauration de la base
          </a>
          ,{" "}
          <a
            href="https://support.bolt.new/account-and-subscription/corporate-commercial"
            target="_blank"
            rel="noopener noreferrer"
          >
            déclaration d’usage commercial
          </a>
          ,{" "}
          <a
            href="https://stackblitz.com/terms-of-service"
            target="_blank"
            rel="noopener noreferrer"
          >
            conditions StackBlitz
          </a>{" "}
          et{" "}
          <a
            href="https://bolt.new/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            tarifs Bolt
          </a>
          .
        </p>
        <p>
          Pour v0 et Vercel :{" "}
          <a
            href="https://v0.app/docs/full-stack-apps"
            target="_blank"
            rel="noopener noreferrer"
          >
            applications full-stack
          </a>
          ,{" "}
          <a
            href="https://v0.app/docs/github"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          ,{" "}
          <a
            href="https://v0.app/docs/projects"
            target="_blank"
            rel="noopener noreferrer"
          >
            projets, variables, domaines et intégrations
          </a>
          ,{" "}
          <a
            href="https://v0.app/docs/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            tarifs et crédits
          </a>{" "}
          et les{" "}
          <a
            href="https://vercel.com/legal/ai-product-terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            conditions IA Vercel
          </a>
          .
        </p>
        <p>
          Pour la méthode de développement sécurisé, le guide s’appuie sur le{" "}
          <a
            href="https://csrc.nist.gov/pubs/sp/800/218/final"
            target="_blank"
            rel="noopener noreferrer"
          >
            NIST SP 800-218, Secure Software Development Framework 1.1
          </a>
          . Ces sources officielles décrivent des produits ou un cadre ; elles
          ne constituent ni un benchmark indépendant, ni une garantie de
          sécurité, de portabilité, de conformité ou de qualité du code
          généré. Les fonctions, offres et conditions peuvent évoluer
          rapidement. Prochaine revue éditoriale recommandée :{" "}
          <strong>27 août 2026</strong>, ou plus tôt en cas de changement de
          prix, de pile, de conditions ou de portabilité.
        </p>
        <p>
          Ce guide fournit une information générale et un protocole de décision.
          Il ne remplace pas une revue technique, un test d’intrusion, un avis
          juridique, une analyse de protection des données ou une validation
          sectorielle adaptée. Lorsqu’une documentation commerciale et des
          conditions contractuelles se contredisent, conservez le point en
          attente et demandez une confirmation écrite applicable à votre compte
          et à votre usage.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
