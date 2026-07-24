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

const guide = getGuide("audit-technique-avant-reprendre-site");

export const metadata = buildGuideMetadata(
  guide,
  "Audit technique avant la reprise d’un site : accès, restauration et décision",
);

const [articleJsonLd, breadcrumbJsonLd] = buildGuideStructuredData(
  guide,
  "Audit technique avant reprise d’un site",
);

const faqItems: GuideFAQItem[] = [
  {
    question: "Un audit est-il obligatoire avant chaque reprise de site ?",
    answer:
      "Non. Un site simple, bien documenté, restauré récemment et transmis avec des accès maîtrisés peut parfois être repris après quelques vérifications ciblées. La profondeur de l’audit doit dépendre de l’importance du site, des données traitées et des inconnues qui empêchent de décider.",
  },
  {
    question: "Une agence peut-elle auditer le site sans aucun accès ?",
    answer:
      "Elle peut examiner la partie publique, mais pas prouver une reprise complète. Sans accès autorisé à l’hébergement, aux sauvegardes ou au code concerné, elle ne peut pas démontrer qu’une copie se restaure, qu’une mise en ligne fonctionne ou qu’un retour en arrière reste possible.",
  },
  {
    question: "Dois-je envoyer mes mots de passe pour obtenir un devis ?",
    answer:
      "Non. Un premier échange peut se faire avec la situation, les fonctions importantes et la liste des preuves disponibles. Les accès réellement nécessaires viennent ensuite, par un canal adapté, avec une autorisation, des droits limités et une date de retrait. Ne placez aucun mot de passe dans un formulaire public.",
  },
  {
    question: "Un code ancien impose-t-il de refaire le site ?",
    answer:
      "Non. L’âge du code ne décide pas à votre place. Une maintenance peut rester raisonnable si le site se restaure, se publie et remplit ses fonctions importantes. Une stabilisation ou une refonte ne se justifie qu’après avoir relié des défauts constatés à des risques ou à des besoins métier précis.",
  },
  {
    question: "L’audit garantit-il que le site ne sera jamais piraté ?",
    answer:
      "Non. Un audit produit des constats sur une partie définie du site et à une date donnée ; il ne prouve pas l’absence de toute vulnérabilité et n’empêche pas un incident futur. Si une attaque active est suspectée, suspendez la reprise ordinaire et faites traiter l’incident par les personnes compétentes.",
  },
  {
    question: "Un GO signifie-t-il qu’il faut déplacer l’hébergement ?",
    answer:
      "Non. Une nouvelle équipe peut parfois reprendre la maintenance sans déplacer le domaine, l’hébergement ni les adresses des pages. Si une migration devient utile, préparez-la comme une opération distincte avec sa copie de test, son retour en arrière et, si les adresses des pages changent, son plan de redirections.",
  },
];

const keyPoints: GuideSidebarKeyPoint[] = [
  {
    number: "01",
    title: "Preuves avant promesse",
    description: "",
    color: "blue",
  },
  {
    number: "02",
    title: "Tests sur une copie",
    description: "",
    color: "violet",
  },
  {
    number: "03",
    title: "Verdict sans score",
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
    href: "/guides/reprendre-maintenance-site-autre-agence",
    label: "Organiser ensuite la passation du site",
  },
  {
    href: "/guides/proprietaire-site-internet-code-source",
    label: "Vérifier les droits, le code et les comptes",
  },
  {
    href: "/guides/cout-maintenance-site-internet",
    label: "Comparer les contrats de maintenance",
  },
  {
    href: "/guides/site-internet-en-panne-que-faire",
    label: "Traiter une panne déjà en cours",
  },
];

const tocItems = [
  { id: "preuve", label: "Ne pas se contenter d’une promesse" },
  { id: "controle", label: "Prouver qui contrôle le site" },
  { id: "restauration", label: "Restaurer une copie à l’écart du public" },
  { id: "fonctions", label: "Rejouer les fonctions importantes" },
  { id: "acces", label: "Donner des accès sans perdre le contrôle" },
  { id: "verdict", label: "Décider : GO, réserves ou STOP" },
  { id: "contrat", label: "Écrire les réserves dans le contrat" },
  { id: "migration", label: "Séparer reprise et migration" },
  { id: "reporter", label: "Savoir quand ne pas investir" },
  { id: "memo", label: "Conserver une décision d’une page" },
  { id: "sources", label: "Sources et limites" },
];

const evidenceCards = [
  {
    number: "01",
    title: "Autorisation et contrôle",
    question: "Qui peut autoriser une intervention et récupérer les comptes ?",
    evidence:
      "Le titulaire ou le compte du domaine, le compte d’hébergement, les administrateurs, les contacts de récupération et les contrats disponibles.",
    test: "Se connecter avec un compte contrôlé par l’entreprise ou vérifier la procédure officielle de récupération, sans modifier le site public.",
    consequence:
      "Si personne ne peut autoriser l’action nécessaire, la reprise s’arrête sur cette action. Une facture ou un ancien e-mail ne remplace pas automatiquement un droit d’accès.",
  },
  {
    number: "02",
    title: "Copie récupérable",
    question: "Que contient réellement la sauvegarde la plus récente ?",
    evidence:
      "Une copie datée, son contenu, l’endroit où elle est conservée et la personne qui sait la restaurer.",
    test: "Remettre la copie en service dans un espace isolé et noter chaque élément ajouté manuellement.",
    consequence:
      "Une archive présente mais jamais restaurée reste une sauvegarde déclarée. Avant une action destructive, l’absence de copie récupérable peut justifier un STOP.",
  },
  {
    number: "03",
    title: "Mise en ligne maîtrisée",
    question: "La nouvelle équipe sait-elle modifier puis publier le site ?",
    evidence:
      "Le code ou les fichiers utiles, les dépendances, les instructions disponibles et un compte technique qui n’appartient pas à une personne partie.",
    test: "Publier une modification sans conséquence sur la copie, contrôler le résultat puis revenir à l’état précédent.",
    consequence:
      "Un site visible n’est pas encore un site que la nouvelle équipe sait faire évoluer. La maintenance peut être limitée tant que cette preuve manque.",
  },
  {
    number: "04",
    title: "Résultat métier",
    question:
      "Quelles actions du site apportent une demande ou rendent un service ?",
    evidence:
      "La liste donnée par le dirigeant : formulaire, réservation, paiement, téléchargement, espace client ou autre fonction réellement utilisée.",
    test: "Rejouer chaque action avec des données fictives et vérifier le résultat final, pas seulement le message affiché à l’écran.",
    consequence:
      "Une page peut sembler correcte alors qu’un e-mail part vers une ancienne adresse. Le verdict doit donc être limité aux fonctions effectivement testées.",
  },
  {
    number: "05",
    title: "Données et accès",
    question: "À quelles données la nouvelle équipe pourra-t-elle accéder ?",
    evidence:
      "Les comptes nécessaires, leurs droits, leur durée, la personne qui les autorise et, lorsque c’est applicable, le contrat de sous-traitance.",
    test: "Créer un accès nominatif limité, vérifier qu’il suffit à l’intervention puis confirmer qu’il peut être refermé.",
    consequence:
      "Un accès permanent ou personnel partagé par défaut n’est pas une preuve de simplicité. Il crée une réserve à corriger avant l’intervention concernée.",
  },
  {
    number: "06",
    title: "Inconnues restantes",
    question: "Que ne sait-on pas encore, et qu’est-ce que cela empêche ?",
    evidence:
      "Une liste courte : information manquante, conséquence possible, personne qui peut répondre et date de revue.",
    test: "Tenter de lever l’inconnue par un document ou un essai autorisé, sans déduire un défaut de la seule absence d’information.",
    consequence:
      "Une inconnue n’est pas une panne. Elle interdit seulement de présenter comme prouvé ce qui ne l’est pas encore.",
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
          { label: "Audit avant reprise d’un site" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Une nouvelle agence vous dit qu’elle peut reprendre votre site. Avant de signer, demandez trois vérifications concrètes : contrôle des comptes, restauration d’une copie et test des fonctions qui apportent des clients."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={keyPoints}
        relatedLinks={relatedLinks}
        faqTitle="Questions fréquentes avant la reprise technique d’un site"
        faqItems={faqItems}
        showSidebarCta={false}
      >
        <p className="lead">
          Vous êtes sur le point de confier votre site à une nouvelle agence ou
          à un nouveau développeur. Le site est en ligne, mais personne ne vous
          a encore montré qu’il pouvait être sauvegardé, restauré et modifié
          sans mettre vos demandes de contact en danger. Faut-il signer la
          maintenance quand même ? Pas sans trois confirmations : votre
          entreprise doit contrôler les comptes indispensables, une copie du
          site doit pouvoir être restaurée à l’écart du public et ses fonctions
          importantes doivent être testées sur cette copie. L’audit technique de
          reprise sert à obtenir ces confirmations. Il ne garantit pas l’absence
          de bug ni celle d’un incident futur. Il vous permet de décider : GO,
          GO sous réserves précises, ou STOP temporaire tant qu’un blocage n’est
          pas levé.
        </p>

        <InfoBox variant="emerald" title="La réponse en une phrase">
          Ne signez une reprise sans réserve que si la nouvelle équipe a prouvé
          qu’elle peut accéder légitimement au site, le remettre en service sur
          une copie et rejouer ce qui compte pour votre activité.
        </InfoBox>

        <p>
          Le but n’est pas de vous transformer en technicien. Vous devez pouvoir
          lire une conclusion, voir sur quoi elle repose et comprendre ce qui
          manque encore. Un audit technique de reprise est donc un examen
          <strong> limité et documenté</strong> de l’état du site avant qu’une
          nouvelle équipe accepte de le maintenir.
        </p>

        <GuideToc items={tocItems} />

        <h2 id="preuve">Ne vous contentez pas d’une promesse</h2>
        <p>
          « Le site fonctionne » décrit ce que voit un visiteur aujourd’hui.
          Cette phrase ne dit pas qui peut renouveler le domaine, où se trouve
          la dernière copie, comment une modification est publiée ni où arrivent
          les formulaires. À l’inverse, un document manquant ne prouve pas que
          le site est mauvais. Il signale seulement une question encore ouverte.
        </p>

        <div className="not-prose my-8 grid gap-4 md:grid-cols-3">
          <section className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300">
              Affirmation
            </p>
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              « Nous avons des sauvegardes »
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              C’est utile, mais cela ne dit ni ce qu’elles contiennent ni si
              quelqu’un sait les restaurer.
            </p>
          </section>
          <section className="rounded-2xl border border-violet-200 bg-violet-50/50 p-5 dark:border-violet-900 dark:bg-violet-950/20">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-violet-700 dark:text-violet-300">
              Preuve
            </p>
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              Une copie remise en service
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Le compte rendu indique la copie choisie, le lieu du test, son
              résultat et ce qui a dû être ajouté.
            </p>
          </section>
          <section className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-900 dark:bg-emerald-950/20">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-300">
              Décision
            </p>
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              Continuer après le test
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              La preuve autorise une décision précise. Elle ne certifie pas tout
              le site pour toujours.
            </p>
          </section>
        </div>

        <p>
          Cette distinction protège dans les deux sens. Elle évite de signer sur
          une impression rassurante, mais aussi de transformer chaque inconnue
          en catastrophe ou en prétexte à une refonte. Le{" "}
          <a
            href="https://owasp.org/www-project-web-security-testing-guide/stable/"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide de tests d’applications web de l’OWASP
          </a>{" "}
          montre la variété des vérifications possibles : configuration,
          authentification, autorisations, sessions, entrées ou logique métier,
          entre autres. Un audit de reprise choisit les tests utiles à la
          décision ; il n’est ni une certification de sécurité ni une promesse
          d’exhaustivité.
        </p>

        <h2 id="controle">Commencez par prouver qui contrôle le site</h2>
        <p>
          Avant de parler de vitesse, de design ou de mises à jour, posez une
          question simple :{" "}
          <strong>qui peut autoriser la prochaine action&nbsp;?</strong> Le
          dirigeant n’a pas besoin de conserver tous les mots de passe dans un
          document. Il doit savoir quels comptes appartiennent à l’entreprise,
          qui peut les récupérer et quelles personnes disposent encore de
          droits.
        </p>

        <p>Rassemblez au minimum :</p>
        <ul>
          <li>
            le compte qui gère le nom de domaine et la personne qui reçoit ses
            alertes de renouvellement ;
          </li>
          <li>
            le compte d’hébergement, son échéance et le moyen d’en extraire une
            copie ;
          </li>
          <li>
            le code, les fichiers ou l’outil qui permet de modifier le site ;
          </li>
          <li>
            les comptes qui publient, envoient des e-mails, encaissent ou
            prennent des rendez-vous ;
          </li>
          <li>
            les contrats et factures utiles pour comprendre les rôles, sans leur
            faire dire plus qu’ils ne prouvent.
          </li>
        </ul>

        <p>
          Pour les extensions qu’elle gère, l’
          <a
            href="https://www.afnic.fr/noms-de-domaine/tout-savoir/gerer-son-nom-de-domaine/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Afnic rappelle que les coordonnées du titulaire doivent rester à
            jour
          </a>{" "}
          et décrit le rôle du bureau d’enregistrement. Cette source concerne
          notamment le `.fr` et les autres extensions du ressort de l’Afnic ; la
          procédure d’un `.com` ou d’un autre fournisseur doit être vérifiée
          auprès de son registre et de son prestataire.
        </p>

        <InfoBox variant="amber" title="Accès technique et droit d’utiliser">
          Pouvoir télécharger un fichier ne prouve pas à lui seul que
          l’entreprise dispose de tous les droits pour l’exploiter. Si le code,
          le design, une licence ou un compte sont contestés, l’audit technique
          décrit ce qui est accessible mais ne tranche pas le litige. Relisez
          les contrats, consultez le guide sur{" "}
          <Link href="/guides/proprietaire-site-internet-code-source">
            la propriété du site et du code source
          </Link>
          , puis demandez un avis juridique lorsque l’enjeu le nécessite.
        </InfoBox>

        <h2 id="restauration">
          Faites restaurer une copie sans toucher au site public
        </h2>
        <p>
          Une sauvegarde devient une preuve de reprise lorsqu’une personne la
          remet en service sur un espace séparé du site public. Le test doit
          répondre à quatre questions : quelle copie a été choisie, où a-t-elle
          été restaurée, qu’a-t-il fallu ajouter et quelles fonctions répondent
          après l’opération ?
        </p>

        <p>
          Pour un site WordPress typique, la{" "}
          <a
            href="https://developer.wordpress.org/advanced-administration/security/backup/"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation officielle WordPress distingue les fichiers et la base
            de données
          </a>
          . Copier seulement l’un des deux peut laisser de côté une partie
          indispensable. Un site conçu autrement aura sa propre liste :
          configuration, dépendances, contenus, base, médias ou services
          externes selon son architecture.
        </p>

        <ol>
          <li>
            choisissez une copie identifiable et conservez le site public tel
            quel ;
          </li>
          <li>
            placez le test sur un espace non public et protégez-en l’accès ;
          </li>
          <li>
            utilisez des données fictives ou réduites dès que cela suffit ;
          </li>
          <li>neutralisez les vrais paiements, messages et automatismes ;</li>
          <li>
            notez les étapes réussies, les échecs et les informations encore
            absentes ;
          </li>
          <li>
            vérifiez enfin que la copie peut être supprimée ou protégée selon
            les règles décidées.
          </li>
        </ol>

        <p>
          La fréquence « idéale » d’une sauvegarde n’est pas un nombre
          universel. Elle dépend de ce que le site change et de ce que
          l’entreprise accepte de perdre. Un catalogue rarement modifié, une
          boutique active et un espace client ne portent pas le même risque. Le
          dossier doit donc écrire la date de la copie et la perte possible, pas
          seulement « sauvegarde quotidienne ».
        </p>

        <h2 id="fonctions">
          Rejouez ce qui apporte des clients ou rend le service
        </h2>
        <p>
          La nouvelle équipe peut afficher la page d’accueil sans savoir si les
          demandes arrivent au bon endroit. Demandez au dirigeant de nommer les
          cinq actions dont l’échec serait réellement gênant. La technique
          s’adapte ensuite à cette liste.
        </p>

        <GuideTable
          caption="Exemples de fonctions à tester jusqu’au résultat final"
          headers={["Fonction", "Essai sur la copie", "Résultat à confirmer"]}
          rows={[
            [
              "Formulaire de contact",
              "Envoyer une demande avec une identité fictive.",
              "Le message atteint la bonne boîte et la réponse automatique part seulement vers l’adresse de test.",
            ],
            [
              "Prise de rendez-vous",
              "Créer, déplacer puis annuler un créneau de test.",
              "L’agenda attendu change et les notifications vont aux personnes prévues.",
            ],
            [
              "Paiement",
              "Utiliser le mode de test officiel du fournisseur lorsqu’il existe.",
              "La commande fictive suit le bon statut sans débit réel ni action sur le vrai site.",
            ],
            [
              "Espace client",
              "Se connecter avec un compte de test aux droits représentatifs.",
              "Le compte voit seulement les informations autorisées et les actions importantes répondent.",
            ],
            [
              "Publication",
              "Modifier un texte sans conséquence, publier puis annuler.",
              "La nouvelle équipe sait mettre en ligne et revenir à l’état précédent.",
            ],
          ]}
        />

        <p>
          Ne cochez pas « formulaire validé » parce qu’un message vert s’affiche
          dans le navigateur. La preuve est la réception au bon endroit. Ne
          cochez pas « paiement validé » parce qu’un bouton s’ouvre. La preuve
          dépend du mode de test et du statut obtenu. Chaque fonction doit
          relier une action visible à son résultat réel.
        </p>

        <h2 id="acces">Donnez des accès sans abandonner le contrôle</h2>
        <p>
          Un audit n’a pas besoin de commencer par l’envoi de tous les mots de
          passe du site public. Commencez en lecture seule lorsque cela suffit.
          Créez ensuite un compte nominatif avec les droits nécessaires au test,
          définissez sa durée et prévoyez son retrait. Gardez les secrets dans
          un outil adapté, jamais dans le formulaire de prise de contact.
        </p>

        <p>
          La{" "}
          <a
            href="https://www.cnil.fr/fr/securite-encadrer-la-maintenance-et-la-fin-de-vie-des-materiels-et-logiciels"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL recommande d’encadrer les opérations de support
          </a>
          , d’ouvrir les accès de télémaintenance pour une durée adaptée puis de
          les refermer. Cette recommandation doit être adaptée aux données et au
          système réellement concernés ; elle ne transforme pas toute petite
          intervention en projet de sécurité complexe.
        </p>

        <p>
          Lorsque la nouvelle équipe traite des données personnelles pour le
          compte de l’entreprise, la{" "}
          <a
            href="https://www.cnil.fr/fr/securite-gerer-la-sous-traitance"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL demande que la relation avec le sous-traitant soit encadrée
          </a>{" "}
          et que des garanties suffisantes soient vérifiées. Le contrat peut
          notamment préciser responsabilités, confidentialité, authentification,
          incidents, assistance et fin de prestation. Le mot « maintenance » ne
          suffit toutefois pas à qualifier automatiquement le rôle au sens du
          règlement : examinez les traitements et les accès réels, avec un
          conseil compétent si le cas reste ambigu.
        </p>

        <p>
          Le transfert de l’espace qui conserve le code — souvent appelé dépôt —
          mérite le même soin. Sur GitHub, la{" "}
          <a
            href="https://docs.github.com/en/enterprise-cloud@latest/repositories/creating-and-managing-repositories/transferring-a-repository"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation indique que des connexions automatiques, des codes
            secrets enregistrés et des clés utilisées pour publier restent
            associés à l’espace transféré
          </a>
          . C’est un exemple propre à GitHub, pas une règle pour tous les
          fournisseurs. La conséquence pratique est simple : examinez les
          intégrations et les comptes après un transfert, au lieu de supposer
          qu’ils ont disparu.
        </p>

        <h2 id="verdict">Classez le résultat : GO, GO sous réserves ou STOP</h2>
        <p>
          Évitez un score sur 100. Une seule absence d’autorisation peut bloquer
          une action, alors que plusieurs documents manquants peuvent seulement
          demander un travail de clarification. Le verdict doit nommer le
          contenu observé, les preuves obtenues et la prochaine action.
        </p>

        <div className="not-prose my-8 grid gap-4">
          <section className="rounded-2xl border border-emerald-300 bg-emerald-50/60 p-5 sm:p-6 dark:border-emerald-800 dark:bg-emerald-950/20">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-800 dark:text-emerald-300">
                  GO
                </p>
                <h3 className="m-0 text-lg font-semibold text-zinc-950 dark:text-white">
                  La reprise peut commencer sur ce qui a été vérifié
                </h3>
              </div>
              <span className="w-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200">
                Preuves suffisantes
              </span>
            </div>
            <p className="mb-0 mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Les comptes nécessaires sont contrôlés, la copie a été remise en
              service, les fonctions importantes ont été rejouées et aucun
              blocage connu n’empêche une intervention réversible. Écrivez bien
              « sur les éléments testés », jamais « le site est sûr ».
            </p>
          </section>

          <section className="rounded-2xl border border-amber-300 bg-amber-50/60 p-5 sm:p-6 dark:border-amber-800 dark:bg-amber-950/20">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-800 dark:text-amber-300">
                  GO sous réserves
                </p>
                <h3 className="m-0 text-lg font-semibold text-zinc-950 dark:text-white">
                  La reprise commence seulement sous des conditions écrites
                </h3>
              </div>
              <span className="w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-900/60 dark:text-amber-200">
                Inconnues maîtrisables
              </span>
            </div>
            <p className="mb-0 mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Le site reste stable, mais une preuve ou un test non critique
              manque. Chaque réserve indique le responsable, la date, le
              résultat attendu et les actions interdites jusque-là. Une réserve
              vague comme « sécuriser le site » n’est pas exploitable.
            </p>
          </section>

          <section className="rounded-2xl border border-rose-300 bg-rose-50/60 p-5 sm:p-6 dark:border-rose-900 dark:bg-rose-950/20">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-rose-800 dark:text-rose-300">
                  STOP temporaire
                </p>
                <h3 className="m-0 text-lg font-semibold text-zinc-950 dark:text-white">
                  L’engagement ou le changement risqué est suspendu
                </h3>
              </div>
              <span className="w-fit rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-800 dark:bg-rose-900/60 dark:text-rose-200">
                Blocage à lever
              </span>
            </div>
            <p className="mb-0 mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Personne ne peut autoriser l’action, aucune copie récupérable
              n’existe avant une opération destructive, le seul test mettrait le
              site public en danger, une fonction critique ne peut être vérifiée
              ou une attaque active est suspectée. STOP signifie « ne pas
              modifier maintenant », pas « abandonner ou refaire ».
            </p>
          </section>
        </div>

        <h3>Six fiches suffisent pour motiver le verdict</h3>
        <div className="not-prose my-8 grid gap-4">
          {evidenceCards.map((item) => (
            <section
              key={item.number}
              className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="flex gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-sm font-bold text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                  {item.number}
                </span>
                <div className="min-w-0">
                  <h4 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="mb-0 mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    {item.question}
                  </p>
                </div>
              </div>
              <dl className="mt-5 grid gap-4 sm:grid-cols-3">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                    Preuve
                  </dt>
                  <dd className="mb-0 mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.evidence}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300">
                    Test
                  </dt>
                  <dd className="mb-0 mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.test}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">
                    Si elle manque
                  </dt>
                  <dd className="mb-0 mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.consequence}
                  </dd>
                </div>
              </dl>
            </section>
          ))}
        </div>

        <InfoBox variant="blue" title="Exemple entièrement fictif">
          Ce cas sert uniquement à expliquer la méthode. Il ne décrit ni un
          client, ni une mission, ni un résultat obtenu par Hagnéré Code.
        </InfoBox>

        <p>
          Une PME de services change d’agence. Son dirigeant contrôle le domaine
          et l’hébergement. Une archive récente existe, mais personne ne l’a
          restaurée. L’espace qui conserve le code n’est pas encore transmis et
          le formulaire utilise un compte d’envoi géré par l’ancien prestataire.
        </p>
        <p>
          Sur un espace isolé, la copie est restaurée. Les pages s’affichent,
          mais la demande de test n’arrive pas : l’ancien identifiant d’envoi
          manque. Le verdict n’est ni « tout va bien » ni « il faut refaire le
          site ». C’est un <strong>GO sous réserves</strong>. La nouvelle équipe
          peut documenter la copie et préparer son intervention, mais aucune
          bascule n’a lieu avant la création d’un compte d’envoi contrôlé par
          l’entreprise, la réception d’un formulaire fictif et la clarification
          de la source nécessaire aux futures modifications.
        </p>

        <h2 id="contrat">Transformez chaque réserve en condition du contrat</h2>
        <p>
          Un audit utile ne se termine pas par « des améliorations sont
          recommandées ». Il donne au dirigeant une phrase qu’il peut relire
          avant de signer. Pour chaque réserve, complétez ces six lignes :
        </p>

        <div className="not-prose my-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 sm:p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
          <p className="mb-4 text-sm font-semibold text-zinc-950 dark:text-white">
            Modèle de réserve
          </p>
          <dl className="grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                Élément manquant
              </dt>
              <dd className="mb-0 mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Le test ou le document précisément nommé.
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                Conséquence
              </dt>
              <dd className="mb-0 mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Ce qui reste incertain ou impossible.
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                Responsable
              </dt>
              <dd className="mb-0 mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                La personne qui doit agir ou répondre.
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                Preuve de levée
              </dt>
              <dd className="mb-0 mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Le résultat observable qui ferme la réserve.
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                Échéance
              </dt>
              <dd className="mb-0 mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                La date ou l’étape avant laquelle agir.
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                Action interdite
              </dt>
              <dd className="mb-0 mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                L’intervention à reporter tant que la réserve subsiste.
              </dd>
            </div>
          </dl>
        </div>

        <p>
          Le contrat de maintenance décrit ensuite les interventions futures,
          les responsabilités et les niveaux de service. L’audit décrit l’état
          de départ. Ne cachez pas le coût de la reprise dans une promesse de
          maintenance courante et ne mélangez pas une réserve bloquante avec une
          amélioration souhaitable.
        </p>

        <h2 id="migration">
          Une reprise ne vous oblige pas à déplacer le site
        </h2>
        <p>
          Changer de mainteneur, changer d’hébergement et changer les adresses
          des pages — souvent appelées URL — sont trois décisions distinctes.
          Les réunir augmente le nombre de causes possibles si quelque chose ne
          répond plus. Si le domaine et l’hébergement fonctionnent et restent
          sous le contrôle de l’entreprise, une nouvelle équipe peut parfois
          reprendre la maintenance sur place.
        </p>

        <GuideTable
          caption="Séparer la reprise des migrations qui ne sont pas toujours nécessaires"
          headers={["Situation", "Travail utile", "À ne pas supposer"]}
          rows={[
            [
              "Nouvelle équipe, infrastructure conservée",
              "Créer ses accès, restaurer une copie, tester puis retirer les anciens comptes inutiles.",
              "Qu’il faut déplacer le domaine ou changer les URL.",
            ],
            [
              "Nouvel hébergement, mêmes URL",
              "Copier et tester le nouvel hébergement, préparer les réglages du domaine, surveiller les deux côtés et garder un retour en arrière.",
              "Que la reprise de maintenance suffit à valider la migration.",
            ],
            [
              "Nouvelles URL",
              "Établir le mappage, préparer les redirections, tester les liens, les règles d’indexation et le suivi.",
              "Que Google conservera automatiquement toute la visibilité.",
            ],
          ]}
        />

        <p>
          Pour un changement d’hébergement sans changement d’URL,{" "}
          <a
            href="https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google recommande de copier et tester la nouvelle infrastructure
          </a>
          , puis de surveiller l’ancien et le nouvel hébergement avant de
          désactiver l’ancien. Si les URL changent, sa{" "}
          <a
            href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation sur les migrations avec changement d’URL
          </a>{" "}
          ajoute notamment le mappage et les redirections. Ces procédures ne
          sont nécessaires que si vous réalisez la migration concernée ; elles
          ne sont pas une conséquence automatique d’un changement d’agence.
        </p>

        <h2 id="reporter">
          Parfois, la bonne décision est de reporter ou de ne pas investir
        </h2>
        <p>
          Un audit complet n’est pas un passage obligé. Si l’entreprise contrôle
          déjà ses comptes, qu’une restauration récente est documentée, que la
          nouvelle équipe sait publier sur une copie et que les fonctions
          importantes sont testées, quelques vérifications ciblées peuvent
          suffire. Demander un rapport plus long ne crée pas mécaniquement plus
          de sécurité.
        </p>

        <p>Reportez ou changez de parcours lorsque :</p>
        <ul>
          <li>
            le site n’a presque aucun enjeu métier et les preuves disponibles
            suffisent pour l’intervention prévue ;
          </li>
          <li>
            une attaque active est suspectée : la priorité devient la réponse à
            incident, pas la signature commerciale ;
          </li>
          <li>
            un droit ou un contrat est contesté : la question est d’abord
            juridique ;
          </li>
          <li>
            l’ancien prestataire peut encore réaliser une passation simple et
            démontrée, moins coûteuse qu’une exploration complète ;
          </li>
          <li>
            aucune action technique ne doit être engagée avant une décision
            stratégique de conserver ou d’arrêter le site.
          </li>
        </ul>

        <p>
          À l’inverse, un audit ciblé devient utile lorsque le site apporte des
          demandes ou des ventes, que son état est inconnu et que la nouvelle
          équipe devrait s’engager sans pouvoir vérifier sa capacité à restaurer
          ou publier. La question n’est pas « combien de défauts allons-nous
          trouver ? », mais « quelles preuves manquent pour prendre la prochaine
          décision ? ».
        </p>

        <h2 id="memo">Conservez une décision qui tient sur une page</h2>
        <p>
          Le dirigeant n’a pas besoin d’une centaine de captures d’écran. Il a
          besoin d’un document court, relié aux preuves détaillées lorsqu’elles
          existent. Sa première page peut contenir :
        </p>
        <ol>
          <li>le site, la date et les parties réellement observées ;</li>
          <li>
            les fonctions métier que le dirigeant a déclarées importantes ;
          </li>
          <li>les tests réussis et les résultats finaux confirmés ;</li>
          <li>les inconnues, sans les présenter comme des défauts prouvés ;</li>
          <li>le verdict GO, GO sous réserves ou STOP temporaire ;</li>
          <li>
            pour chaque réserve, un responsable, une preuve attendue et une
            échéance ;
          </li>
          <li>
            la prochaine décision autorisée et les actions encore interdites.
          </li>
        </ol>

        <InfoBox variant="emerald" title="Après un GO">
          Le verdict ne réalise pas la passation. Utilisez ensuite le guide pour{" "}
          <Link href="/guides/reprendre-maintenance-site-autre-agence">
            reprendre la maintenance d’un site auprès d’une autre agence
          </Link>{" "}
          : il sépare domaine, hébergement, messagerie et accès, puis organise
          leur transfert sans les couper tous en même temps.
        </InfoBox>

        <GuideInlineCTA
          title="Savoir si votre site peut être repris simplement, sous conditions, ou pas encore"
          description="Décrivez le site, les fonctions importantes, les comptes que votre entreprise contrôle et les éléments qui manquent. Le premier échange sert à distinguer une passation simple d’un audit ciblé. Si les éléments suffisent déjà, la conclusion peut être de ne pas commander d’audit approfondi. N’envoyez aucun mot de passe dans le formulaire."
          tags={[
            "Verdict compréhensible",
            "Audit ciblé si nécessaire",
            "Report possible",
          ]}
          ctaLabel="Décrire ma situation"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="sources">Sources officielles et limites</h2>
        <p>
          Sources consultées le 23 juillet 2026. Les interfaces, procédures et
          versions peuvent évoluer ; elles doivent être revérifiées au moment de
          l’audit. Ce guide donne un cadre général de décision. Il ne remplace
          ni un conseil juridique adapté à vos contrats et données, ni une
          réponse à incident, ni un test de sécurité exhaustif.
        </p>
        <ul>
          <li>
            CNIL —{" "}
            <a
              href="https://www.cnil.fr/fr/securite-gerer-la-sous-traitance"
              target="_blank"
              rel="noopener noreferrer"
            >
              gérer la sous-traitance et vérifier les garanties
            </a>
            .
          </li>
          <li>
            CNIL —{" "}
            <a
              href="https://www.cnil.fr/fr/securite-encadrer-la-maintenance-et-la-fin-de-vie-des-materiels-et-logiciels"
              target="_blank"
              rel="noopener noreferrer"
            >
              encadrer les accès pendant la maintenance
            </a>
            .
          </li>
          <li>
            ANSSI —{" "}
            <a
              href="https://messervices.cyber.gouv.fr/guides/externalisation-et-securite-des-systemes-dinformation-un-guide-pour-maitriser-les"
              target="_blank"
              rel="noopener noreferrer"
            >
              analyser les risques d’une externalisation informatique
            </a>
            . Le guide est général et ne crée pas une obligation identique pour
            tous les sites.
          </li>
          <li>
            OWASP —{" "}
            <a
              href="https://owasp.org/www-project-web-security-testing-guide/stable/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Web Security Testing Guide, version stable
            </a>
            .
          </li>
          <li>
            WordPress —{" "}
            <a
              href="https://developer.wordpress.org/advanced-administration/security/backup/"
              target="_blank"
              rel="noopener noreferrer"
            >
              sauvegarder et restaurer les fichiers et la base
            </a>
            , pour une installation WordPress typique.
          </li>
          <li>
            Afnic —{" "}
            <a
              href="https://www.afnic.fr/noms-de-domaine/tout-savoir/gerer-son-nom-de-domaine/"
              target="_blank"
              rel="noopener noreferrer"
            >
              gérer un nom de domaine relevant de son registre
            </a>
            .
          </li>
          <li>
            GitHub —{" "}
            <a
              href="https://docs.github.com/en/enterprise-cloud@latest/repositories/creating-and-managing-repositories/transferring-a-repository"
              target="_blank"
              rel="noopener noreferrer"
            >
              éléments conservés lors du transfert d’un espace de code
            </a>
            , exemple propre à cette plateforme.
          </li>
          <li>
            Google Search Central —{" "}
            <a
              href="https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              changement d’hébergement sans changement d’URL
            </a>{" "}
            et{" "}
            <a
              href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              migration avec changement d’URL
            </a>
            .
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
