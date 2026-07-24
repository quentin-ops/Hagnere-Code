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
      "Oui, mais la plateforme utilisée ne suffit pas à rendre le produit vendable. Avant d’accepter un client, testez les comptes, l’isolement des données, les paiements éventuels, les erreurs, les sauvegardes, la reprise et les conditions de chaque service. Un prototype publié peut encore demander un travail important.",
  },
  {
    question: "Le code généré m’appartient-il et puis-je le récupérer ?",
    answer:
      "Ne vous contentez pas d’une affirmation générale. Lisez les conditions du service et prouvez la reprise : dépôt de code contrôlé par votre entreprise, dépendances connues, secrets séparés, données exportables et version qui redémarre. Le code seul ne contient pas forcément la base, le domaine, les e-mails ou les fonctions hébergées.",
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
      "Non. v0 produit surtout des projets React et Next.js et publie nativement sur Vercel ; il peut connecter des services de données. Lovable propose son propre cloud et une synchronisation bidirectionnelle avec GitHub. Bolt réunit génération, hébergement et base PostgreSQL gérée, avec téléchargement du projet et export séparé des données. Ces différences datent du 24 juillet 2026 et doivent être vérifiées avant un choix.",
  },
  {
    question: "Quand peut-on utiliser de vraies données clients ?",
    answer:
      "Seulement après avoir déterminé qu’elles sont nécessaires, vérifié les conditions du service, les rôles, les accès, les sous-traitants et les mesures de protection adaptées. Pour une comparaison ou un prototype, utilisez des données fictives. Ne copiez jamais un fichier client ou un secret dans un prompt par commodité.",
  },
  {
    question: "Un scan de sécurité suffit-il avant la mise en ligne ?",
    answer:
      "Non. Un scan peut signaler des défauts connus, mais il ne prouve pas que les règles métier, les droits entre clients, les secrets et les procédures d’exploitation sont corrects. Les contrôles automatiques ont des limites annoncées. Faites tester les usages à risque et relire les éléments sensibles.",
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
    title: "8 preuves identiques",
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
    title: `Lecture : ${guide.readTimeMin} min`,
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
  { id: "premier-client", label: "Passer du lien au premier client" },
  { id: "quatre-chemins", label: "Comparer concrètement les quatre options" },
  {
    id: "preuve",
    label: "Définir ce que la version doit démontrer",
  },
  { id: "huit-tests", label: "Faire passer huit tests identiques" },
  { id: "donnees", label: "Garder les données réelles hors du test" },
  { id: "comptes", label: "Nommer les comptes et responsables" },
  { id: "mois-treize", label: "Comparer le mois 1 et le mois 13" },
  { id: "decision", label: "Décider selon le risque réel" },
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
          Au 24 juillet 2026, les trois outils ne partent pas du même point. Le
          tableau ci-dessous ne désigne pas un vainqueur : il vous aide à savoir
          ce que vous achetez, où vivent le code et les données, et ce qu’il
          faudra reprendre si le premier test devient un vrai produit.
        </p>
        <GuideTable
          caption="Comparaison pratique au 24 juillet 2026"
          headers={[
            "Option",
            "Ce qu’elle prend en charge aujourd’hui",
            "Bon usage et reprise à vérifier",
          ]}
          rows={[
            [
              "Lovable",
              "Application React/Vite, publication sur Lovable Cloud, fonctions de données gérées ou services externes. Synchronisation bidirectionnelle possible avec GitHub.",
              "Utile pour tester rapidement un parcours allant jusqu’aux données. Avant un client réel, synchronisez le code, exportez les données et faites redémarrer une copie hors du projet d’origine.",
            ],
            [
              "Bolt",
              "Application web, hébergement Bolt, base PostgreSQL, authentification, stockage et fonctions serveur intégrés. Le projet se télécharge en ZIP ; les tables s’exportent séparément en CSV ou JSON.",
              "Utile pour un prototype complet sans configurer plusieurs services au départ. Testez le téléchargement du code, l’export des données, les secrets et un redéploiement indépendant.",
            ],
            [
              "v0",
              "Projet React/Next.js, routes serveur et intégrations de bases comme Supabase, Neon ou Upstash. Publication directe sur Vercel et export ou synchronisation GitHub.",
              "Utile lorsque l’interface et une base Next.js/Vercel correspondent déjà à l’équipe visée. Vérifiez le dépôt, les variables, le fournisseur de données et la capacité à déployer ailleurs.",
            ],
            [
              "Agence",
              "Architecture, développement, tests, mise en ligne et maintenance selon ce que le devis et le contrat nomment réellement. Aucun hébergement ni transfert n’est automatique.",
              "Utile quand les règles métier, les intégrations ou le risque dépassent un simple test. Exigez des comptes au nom de l’entreprise, le dépôt, les accès, les exports et la procédure de reprise.",
            ],
          ]}
        />

        <p>
          Ces différences viennent des documentations officielles sur la{" "}
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
            href="https://v0.dev/docs/full-stack-apps"
            target="_blank"
            rel="noopener noreferrer"
          >
            fonctions full-stack de v0
          </a>{" "}
          et sa{" "}
          <a
            href="https://v0.dev/docs/faqs"
            target="_blank"
            rel="noopener noreferrer"
          >
            FAQ sur l’export et le déploiement
          </a>
          . Les offres évoluent : refaites cette vérification le jour du choix.
        </p>

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

        <h2 id="huit-tests">
          Faites passer huit tests identiques à chaque option
        </h2>
        <p>
          Les résultats générés varient avec le prompt, le plan, les services
          connectés et la date. Ce guide ne déclare donc aucun vainqueur entre
          Lovable, Bolt et v0. Il vous propose un protocole. Utilisez un brief
          identique, un environnement neuf et uniquement des données fictives.
          Conservez le prompt, la date, le plan et le résultat de chaque test.
        </p>

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
          N’annoncez jamais « huit tests réussis = produit sécurisé ». Ce
          protocole sert à rendre visibles des lacunes de reprise et
          d’exploitation. Il ne remplace ni des tests fonctionnels complets, ni
          une revue de sécurité, ni un audit adapté aux données et au secteur.
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

        <h2 id="comptes">
          Mettez un nom en face de chaque compte et de chaque panne
        </h2>
        <p>
          Avant toute présentation à un client, écrivez qui contrôle le domaine,
          le dépôt, l’hébergement, la base, les e-mails et le paiement. Le
          compte ne doit pas disparaître avec le stagiaire, le freelance ou le
          fondateur qui a fait le premier essai. Pour chaque service, notez
          également :
        </p>
        <ul>
          <li>la manière d’ajouter et retirer un administrateur ;</li>
          <li>le moyen de récupérer l’accès ;</li>
          <li>les données qui y sont stockées ;</li>
          <li>la façon de les exporter ou les supprimer ;</li>
          <li>la personne alertée en cas d’échec ;</li>
          <li>la procédure pour revenir à une version précédente.</li>
        </ul>

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

        <h2 id="mois-treize">
          Comparez le mois 1, puis imaginez honnêtement le mois 13
        </h2>
        <p>
          Le mois 1, vous achetez des crédits, écrivez des prompts et corrigez
          des écrans. Le mois 13, vous pouvez aussi payer l’hébergement, les
          e-mails, la base, le support, le suivi des erreurs, les mises à jour
          de dépendances, une revue de sécurité, les changements de conditions
          et la reprise par une autre personne. Une agence n’efface pas ces
          coûts ; elle peut seulement en prendre une partie en charge si le
          contrat le précise.
        </p>

        <GuideTable
          caption="Comparer des responsabilités plutôt que des prix d’entrée"
          headers={[
            "Question",
            "Construction autonome",
            "Construction accompagnée",
          ]}
          rows={[
            [
              "Qui définit ce qui doit être testé ?",
              "Vous, avec le risque d’oublier un usage.",
              "Vous et l’équipe, avec des fonctions et des critères écrits.",
            ],
            [
              "Qui relit les accès et les données ?",
              "Une personne compétente doit tout de même intervenir.",
              "La revue doit être écrite dans la proposition, jamais supposée.",
            ],
            [
              "Qui intervient après une panne ?",
              "Vous ou la personne que vous trouverez alors.",
              "Le contrat précise horaires, délais, limites et escalade.",
            ],
            [
              "Qui peut reprendre le produit ?",
              "À prouver avec comptes, dépôt, données et documentation.",
              "À prouver aussi ; le nom d’une agence ne garantit pas la sortie.",
            ],
          ]}
        />

        <p>
          N’essayez pas de calculer un retour sur investissement à partir d’un
          nombre de crédits. Comparez d’abord le coût jusqu’au même résultat,
          puis le coût d’exploitation sur douze et trente-six mois :
          abonnements, temps du porteur, revue, développement complémentaire,
          services, maintenance, incidents et sortie. Tout volume futur reste
          une hypothèse.
        </p>

        <InfoBox variant="blue" title="Exemple entièrement fictif">
          Le cas suivant est inventé pour expliquer la méthode. Il ne décrit ni
          un client, ni une mission, ni un SaaS développé par Hagnéré Code.
        </InfoBox>

        <p>
          Un consultant fictif veut créer un SaaS de suivi d’audits. Il prépare
          deux sociétés imaginaires, « Alba » et « Noro », et aucun document
          réel. Son premier objectif n’est pas d’encaisser : il veut savoir si
          un responsable comprend le parcours et si les données des deux
          sociétés restent séparées.
        </p>
        <p>
          Il construit seul les écrans, puis demande une revue avant d’ajouter
          les comptes et la base. Si le test de séparation échoue ou si le
          projet ne redémarre pas depuis un dépôt maîtrisé, il ne vend pas cette
          version. Il peut toutefois conserver les écrans comme support
          d’entretien. Aucun délai, coût, taux de conversion ou niveau de
          sécurité n’est déduit de cet exemple.
        </p>

        <h2 id="decision">
          Choisissez le prochain pas, pas l’outil pour toujours
        </h2>
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
          Les faits sur les produits proviennent de leurs documentations
          officielles consultées les 23 et 24 juillet 2026 :{" "}
          <a
            href="https://docs.lovable.dev/introduction/getting-started"
            target="_blank"
            rel="noopener noreferrer"
          >
            démarrage Lovable
          </a>
          ,{" "}
          <a
            href="https://docs.lovable.dev/features/publish"
            target="_blank"
            rel="noopener noreferrer"
          >
            publication et accès
          </a>
          ,{" "}
          <a
            href="https://docs.lovable.dev/features/security"
            target="_blank"
            rel="noopener noreferrer"
          >
            sécurité Lovable
          </a>
          ,{" "}
          <a
            href="https://support.bolt.new/cloud/database/security"
            target="_blank"
            rel="noopener noreferrer"
          >
            contrôles Bolt
          </a>
          ,{" "}
          <a
            href="https://support.bolt.new/cloud/database/tables"
            target="_blank"
            rel="noopener noreferrer"
          >
            exports Bolt
          </a>{" "}
          et{" "}
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
          Ces sources décrivent les produits de leurs éditeurs. Elles ne
          constituent ni un benchmark indépendant, ni une garantie de sécurité,
          de portabilité ou de qualité du code généré. Les fonctions, offres et
          conditions peuvent évoluer rapidement : rouvrez-les au moment de
          choisir. Ce guide ne remplace pas une revue technique, juridique ou de
          protection des données adaptée au projet.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
