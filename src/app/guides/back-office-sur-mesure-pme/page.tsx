import Image from "next/image";
import Link from "next/link";
import {
  Database,
  FileCheck2,
  ListChecks,
  RefreshCcw,
  Users,
  Wrench,
} from "lucide-react";
import { GuideTable, InfoBox } from "@/components/guides/guide-content-blocks";
import {
  GuidePremiumCase,
  GuidePremiumLayout,
  GuidePremiumMemo,
  GuidePremiumSection,
} from "@/components/guides/guide-premium-layout";
import type { GuidePremiumFaqCategory } from "@/components/guides/guide-premium-types";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { TEAM } from "@/lib/team";
import { BackOfficeDecisionWorkbench } from "./back-office-decision-workbench";
import {
  BACK_OFFICE_IMAGES,
  BACK_OFFICE_SECTION,
  structuredData,
} from "./guide-data";

export { metadata } from "./guide-data";

const toc = [
  {
    id: "reponse",
    number: "01",
    label: "Réponse directe",
    shortLabel: "Réponse",
  },
  {
    id: "contrat",
    number: "02",
    label: "Contrat d’écran",
    shortLabel: "Contrat",
  },
  {
    id: "ecrans",
    number: "03",
    label: "Huit familles à éprouver",
    shortLabel: "Familles",
  },
  {
    id: "cas-difficiles",
    number: "04",
    label: "Droits et cas difficiles",
    shortLabel: "Cas",
  },
  {
    id: "options",
    number: "05",
    label: "Comparer cinq options",
    shortLabel: "Options",
  },
  {
    id: "charge",
    number: "06",
    label: "Charge et coût total",
    shortLabel: "Charge",
  },
  {
    id: "prototype",
    number: "07",
    label: "Prototype et recette",
    shortLabel: "Prototype",
  },
  {
    id: "responsables",
    number: "08",
    label: "Responsables et sortie",
    shortLabel: "Sortie",
  },
  { id: "lundi", number: "09", label: "Décider lundi", shortLabel: "Action" },
];

const contractRows = [
  [
    "1",
    "Tâche et résultat",
    "Ce que la personne essaie d’obtenir, pas le nom de l’écran",
  ],
  [
    "2",
    "Déclencheur",
    "L’événement, le dossier ou l’alerte qui fait entrer dans l’écran",
  ],
  [
    "3",
    "Rôle autorisé",
    "Le profil réel, son périmètre et les éventuelles délégations",
  ],
  [
    "4",
    "Actions",
    "Voir, créer, corriger, valider, annuler, exporter ou traiter en masse",
  ],
  [
    "5",
    "Données nécessaires",
    "Uniquement les informations utiles à la tâche et à la décision",
  ],
  [
    "6",
    "Source de vérité",
    "Le système qui fait foi pour chaque donnée et chaque statut",
  ],
  [
    "7",
    "Preuve utile",
    "L’événement, la décision ou le changement d’état à conserver",
  ],
  [
    "8",
    "Erreur ou exception",
    "Le cas qui sort du parcours nominal et le message attendu",
  ],
  [
    "9",
    "Reprise",
    "Nouvelle tentative, correction, annulation ou compensation sans double effet",
  ],
  [
    "10",
    "Responsable du blocage",
    "La personne qui diagnostique, arbitre ou escalade",
  ],
  [
    "11",
    "Tiers indisponible",
    "File d’attente, mode manuel, suspension ou lecture seule",
  ],
  [
    "12",
    "Critère de recette",
    "Un résultat observable qui permet d’accepter ou de refuser",
  ],
] as const;

const screenRows = [
  [
    "File de travail",
    "Trouver ce qui doit être traité maintenant",
    "Attribution, réattribution, filtres utiles, incomplets, état vide, surcharge et visibilité par rôle",
  ],
  [
    "Fiche de détail",
    "Comprendre un dossier avant d’agir",
    "Identité, fraîcheur, source de vérité, actions autorisées, pièces, conflit et prochain responsable",
  ],
  [
    "Création et modification",
    "Saisir ou corriger sans perdre le travail",
    "Champs nécessaires, brouillon, doublon, validation, abandon et erreurs compréhensibles",
  ],
  [
    "Action de masse",
    "Traiter plusieurs éléments sans masquer les échecs",
    "Portée, aperçu, autorisation, succès partiel, rapport, reprise et annulation réaliste",
  ],
  [
    "Exception et reprise",
    "Réparer un état incomplet ou contradictoire",
    "Motif, état atteint, responsable, nouvelle tentative sans doublon et retour au mode normal",
  ],
  [
    "Historique et preuve",
    "Expliquer ce qui a changé et pourquoi",
    "Événement utile, auteur ou système, date, objet, motif, accès et conservation proportionnés",
  ],
  [
    "Administration des droits",
    "Accorder puis retirer le bon accès",
    "Rôle, périmètre, arrivée, mobilité, départ, urgence, droits temporaires, revue et séparation de l’administration",
  ],
  [
    "Supervision et support",
    "Détecter et reprendre un service dégradé",
    "Traitements en attente, dernière exécution, tiers, diagnostic, restauration, export et procédure",
  ],
] as const;

const optionRows = [
  [
    "Conserver et mieux configurer",
    "L’existant passe le contrat d’écran ; les écarts viennent surtout des règles, vues, rôles ou procédures.",
    "Configurer un seul écart, rejouer deux échecs et documenter la relève.",
    "La configuration ajoute des contournements que personne ne sait reprendre.",
  ],
  [
    "Adopter un standard",
    "Un module ou logiciel couvre le contrat, les rôles et la reprise avec un coût total acceptable.",
    "Prototyper le cas difficile dans l’offre, le plan et les droits réellement envisagés.",
    "La démonstration commerciale ne permet pas de reproduire l’exception ou l’export.",
  ],
  [
    "Assembler légèrement",
    "Le standard couvre le cœur ; un seul écart est isolable derrière une source de vérité et une reprise.",
    "Couper la brique ajoutée et vérifier la file, le rejeu et le mode manuel.",
    "Deux systèmes écrivent le même statut ou l’équipe ne sait pas lequel fait foi.",
  ],
  [
    "Cadrer un back-office dédié",
    "Le processus est stable, l’existant et le standard échouent sur le même contrat, aucune brique légère testée ne couvre l’écart, et les propriétaires, le coût et la sortie sont connus.",
    "Faire accepter le prototype du cas difficile avant tout périmètre complet.",
    "Le projet sert surtout à figer une organisation instable ou à refaire des fonctions déjà disponibles.",
  ],
  [
    "Différer ou abandonner",
    "Une preuve critique manque, le processus bouge, le coût total est inconnu ou le problème ne justifie pas l’investissement.",
    "Nommer la preuve ou l’événement qui rouvrira la décision.",
    "Le report laisse un incident ou un risque actif sans mesure de continuité.",
  ],
] as const;

const faqCategories: GuidePremiumFaqCategory[] = [
  {
    key: "perimetre",
    num: "01",
    label: "Périmètre et écrans",
    items: [
      {
        question: "Qu’est-ce qu’un back-office dans une PME ?",
        answer:
          "C’est l’espace interne où des personnes autorisées traitent, décident, corrigent et prouvent le travail. Il peut réunir files, fiches, saisies, droits, historique et support ; sa valeur vient des tâches couvertes, pas du nombre d’écrans.",
      },
      {
        question:
          "Quelle différence avec un tableau de bord, un CRM ou un ERP ?",
        answer:
          "Un tableau de bord informe surtout ; un back-office permet d’agir et de réparer. Un CRM organise la relation client ; un ERP centralise plusieurs fonctions de l’entreprise. Ces systèmes peuvent être standard, configurés ou spécifiques. S’ils fournissent déjà le back-office nécessaire, le sur-mesure n’est pas justifié.",
      },
      {
        question: "Quels écrans minimums faut-il prévoir ?",
        answer:
          "Il n’existe pas de minimum universel. Éprouvez les huit familles du guide, puis retenez seulement celles nécessaires à une tâche, une exception, un droit, une preuve ou une reprise réels.",
      },
      {
        question: "Airtable, Notion ou Power Apps peuvent-ils convenir ?",
        answer:
          "Oui, selon le processus, le plan, les droits, les intégrations et l’exploitation. Testez chacun sur le même contrat d’écran ; le nom du produit ou une démonstration propre ne remplace pas un cas difficile rejoué.",
      },
    ],
  },
  {
    key: "preuve",
    num: "02",
    label: "Droits, erreurs et preuves",
    items: [
      {
        question:
          "Comment cadrer les droits autrement qu’avec utilisateur et administrateur ?",
        answer:
          "Décrivez rôle, action, condition et périmètre de données. Testez lecture, création, correction, validation, export, masse et administration avec des comptes représentatifs, y compris arrivée, mobilité, départ et droit temporaire.",
      },
      {
        question: "Faut-il conserver l’historique de toutes les actions ?",
        answer:
          "Non. Conservez les événements utiles à une finalité définie : décision, changement sensible, erreur, droit ou reprise. La CNIL recommande actuellement, pour les journaux, une période glissante de six mois à un an, avec des exceptions à documenter ; ce repère n’est ni une obligation ni une durée universelle.",
      },
      {
        question: "Comment réparer une action de masse partiellement échouée ?",
        answer:
          "Affichez le résultat élément par élément, gardez l’état réellement atteint et rendez la reprise sélective. Une nouvelle tentative doit éviter de rejouer les succès ; si l’annulation n’est pas réaliste, prévoyez une compensation explicite.",
      },
      {
        question:
          "Un journal d’activité peut-il devenir un outil de surveillance ?",
        answer:
          "Oui, si les traces changent de finalité ou deviennent excessives. Définissez ce qui est journalisé, pourquoi, qui y accède et quand cela disparaît ; faites qualifier le contexte social et juridique lorsque des personnes employées sont concernées.",
      },
    ],
  },
  {
    key: "decision",
    num: "03",
    label: "Test, coût et maintenance",
    items: [
      {
        question: "Comment savoir si un logiciel standard suffit ?",
        answer:
          "Faites-lui exécuter le même contrat d’écran, avec un cas nominal et au moins deux échecs représentatifs. Vérifiez aussi droits, export, tiers indisponible, support et coût total sur votre plan réel.",
      },
      {
        question: "Comment tester avant de développer ?",
        answer:
          "Utilisez un prototype contenant uniquement des données fictives, puis faites réaliser les tâches et exceptions par des profils représentatifs. Acceptez sur des résultats observables, pas sur la beauté de la maquette.",
      },
      {
        question: "Comment estimer le coût sans inventer un prix moyen ?",
        answer:
          "Recueillez chaque famille avec quantité, unité, période, source et propriétaire, puis comparez toutes les options sur le même horizon. Une ligne inconnue reste à vérifier ; elle ne vaut pas zéro.",
      },
      {
        question: "Qui maintient l’outil après livraison ?",
        answer:
          "Le propriétaire métier tranche les règles ; l’exploitation surveille et reprend ; la sécurité et les données contrôlent leur périmètre ; un responsable du contrat organise support, évolutions et sortie. Si ces rôles n’ont pas de titulaires et de relève, différez.",
      },
    ],
  },
];

export default function Page() {
  return (
    <GuidesShell>
      {structuredData.map((item) => (
        <script
          key={item["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\\u003c"),
          }}
        />
      ))}

      <GuidePremiumLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: "Back-office sur mesure pour PME" },
        ]}
        badges={[
          { label: BACK_OFFICE_SECTION, variant: "dark" },
          { label: "8 familles d’écran", variant: "neutral" },
          { label: "Atelier local · aucun envoi", variant: "success" },
        ]}
        heroTitle="Back-office sur mesure pour PME :"
        heroTitleEm="quels écrans prévoir,"
        heroTitleSuffix="et faut-il vraiment le développer ?"
        heroDescription="Un back-office dédié ne se justifie pas parce qu’un tableur agace ou qu’un tableau de bord manque. Décrivez d’abord le rôle, l’action, les données, la preuve, l’exception et la reprise de chaque écran. Testez ensuite l’existant et un standard. Si le processus, les propriétaires, les droits ou le coût complet restent inconnus, différez."
        stats={[
          { label: "Familles à éprouver", value: "8" },
          { label: "Champs du contrat", value: "12" },
          { label: "Issues possibles", value: "5" },
          { label: "Score caché", value: "Aucun" },
          { label: "Atelier · envoi", value: "Aucun" },
        ]}
        author={{
          initials: TEAM.quentin.initials,
          name: TEAM.quentin.fullName,
          role: TEAM.quentin.role,
          profileUrl: "/equipe#fondateur",
        }}
        sidebarHeroCta={{
          eyebrow: "Brief d’outil interne",
          titleStart: "Préparer",
          titleEm: "un dossier testable",
          description:
            "Le clic ouvre un brief guidé en six étapes : projet, contexte, contenu, contraintes, coordonnées et synthèse. Aucun devis automatique, aucun engagement.",
          benefits: [
            "Le maintien ou un standard peuvent rester la bonne réponse",
            "Droits, exceptions et reprise rendus explicites",
            "Votre brief est relu avant toute proposition",
          ],
          primaryCtaLabel: "Préparer mon brief",
          primaryCtaHref: "/demarrer-un-projet",
          phoneLabel: "Brief guidé · 6 étapes",
          phoneHref: "/demarrer-un-projet",
        }}
        toc={toc}
        tocLabel="Sommaire du guide back-office sur mesure pour PME"
        mobileCtaLabel="Préparer mon brief"
        sidebarContextCta={{
          eyebrow: "Contrat d’écran",
          title: "Votre projet tient-il encore quand une action échoue ?",
          description:
            "Apportez une tâche, deux exceptions et les preuves manquantes. Le premier examen peut conclure qu’il faut garder, configurer, acheter, tester ou différer.",
          benefits: [
            "Même contrat pour les cinq options",
            "Aucune inconnue transformée en zéro",
            "Support et sortie inclus dès le cadrage",
          ],
          ctaLabel: "Préparer mon brief",
          ctaHref: "/demarrer-un-projet",
          badgeLabel: "Le sur-mesure n’est pas présupposé",
        }}
        faqCategories={faqCategories}
        faqMeta={{
          eyebrow: "Questions résiduelles",
          titleStart: "Cadrer un",
          titleEm: "back-office PME",
          titleEnd: "sans partir trop vite du code.",
          subtitle:
            "Périmètre, écrans, droits, succès partiels, standard, prototype, coût, traces et maintenance.",
          ctaDescription:
            "Décrivez votre question et les preuves déjà réunies ; elle sera relue avant toute proposition.",
        }}
        legalSources={[
          {
            source: "DesignGouv · Bien concevoir",
            href: "https://design.numerique.gouv.fr/bien-concevoir/",
            description:
              "Besoin avant solution, tests avec les personnes concernées, itération et rôles. Source destinée aux services publics numériques ; son emploi ici est méthodologique.",
          },
          {
            source: "DesignGouv · Mémo design",
            href: "https://design.numerique.gouv.fr/outils/memo-design/",
            description:
              "Repères sur libellés, tableaux, saisies et erreurs. Inspiration de conception, pas norme universelle d’un back-office privé.",
          },
          {
            source: "Anact · Boîte à outils QVCT numérique",
            href: "https://www.anact.fr/sites/default/files/2024-10/boite-a-outils-qvct-numerique.pdf",
            description:
              "Travail réel, implication précoce des utilisateurs et simulation du travail futur. Ressource QVCT issue du sanitaire et médico-social, transposée ici comme méthode et non comme obligation générale.",
          },
          {
            source: "Anact · Quelques clés pour réussir un projet numérique",
            href: "https://www.anact.fr/sites/default/files/2023-12/FSE%2520Nume%25CC%2581rique.pdf",
            description:
              "Analyse du travail actuel, simulation du travail futur et participation des salariés. Retours de cinq PME industrielles ; aucune statistique ni garantie de résultat n’en est déduite.",
          },
          {
            source: "CNIL · minimisation",
            href: "https://www.cnil.fr/fr/minimiser-les-donnees-collectees",
            description:
              "Limiter la collecte aux données nécessaires. La finalité et le contexte réels déterminent les champs utiles.",
          },
          {
            source: "CNIL · habilitations",
            href: "https://www.cnil.fr/fr/securite-gerer-les-habilitations",
            description:
              "Accès selon les besoins, retrait lors d’une mobilité ou d’un départ et revue régulière, recommandée a minima chaque année. Ce rythme est un repère CNIL, pas une règle universelle.",
          },
          {
            source: "CNIL · journalisation",
            href: "https://www.cnil.fr/fr/securite-tracer-les-operations",
            description:
              "Événements pertinents, accès aux traces et période glissante recommandée de six mois à un an, avec exceptions documentées. Ce repère ne devient pas une durée obligatoire universelle.",
          },
          {
            source: "CNIL · sauvegardes et reprise",
            href: "https://www.cnil.fr/fr/securite-sauvegarder",
            description:
              "Sauvegardes, isolement et restaurations testées. Une sauvegarde annoncée ne prouve pas la reprise du travail métier.",
          },
          {
            source: "CNIL · continuité d’activité",
            href: "https://www.cnil.fr/fr/securite-prevoir-la-continuite-et-la-reprise-dactivite",
            description:
              "Continuité, mode dégradé et retour au fonctionnement normal selon le risque et le service concerné.",
          },
          {
            source: "CNIL · contrôle de l’activité des personnes employées",
            href: "https://www.cnil.fr/fr/controle-de-lactivite-des-personnes-employees",
            description:
              "Page du 9 juillet 2026 : nécessité, proportionnalité et information. Le CSE vise les entreprises privées de 50 salariés et plus et certains établissements publics employant du personnel de droit privé ; d’autres instances valent dans le public.",
          },
          {
            source: "EUR-Lex · RGPD",
            href: "https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=FR",
            description:
              "Articles 5, 25, 28 et 32 : minimisation, protection dès la conception, sous-traitance et sécurité adaptée au risque. Aucune conformité individuelle n’est conclue ici.",
          },
          {
            source: "OWASP · Authorization Cheat Sheet",
            href: "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html",
            description:
              "Moindre privilège, refus par défaut et tests d’autorisation. Recommandations d’ingénierie, pas texte légal français.",
          },
          {
            source: "OWASP · Logging Cheat Sheet",
            href: "https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html",
            description:
              "Événements utiles, protection des journaux et données à ne pas enregistrer. Recommandations d’ingénierie.",
          },
          {
            source: "RGAA 4.1.2 · critères et tests",
            href: "https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/",
            description:
              "Version 4.1.2 consultée le 6 août 2026 ; la version 5 est annoncée pour fin 2026. L’applicabilité juridique dépend de l’organisme et la source devra être revalidée à la publication.",
          },
          {
            source: "Code de la propriété intellectuelle · L131-3",
            href: "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006278958/2026-02-28",
            description:
              "Chaque droit cédé doit être mentionné distinctement ; son exploitation est délimitée par étendue, destination, lieu et durée. Aucune propriété automatique du client n’en résulte.",
          },
          {
            source: "Code de la propriété intellectuelle · L113-9",
            href: "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000039279818",
            description:
              "Droits patrimoniaux sur les logiciels et leur documentation créés par des employés dans les conditions du texte ; celui-ci vise aussi certains agents publics, pas les prestataires par défaut.",
          },
        ]}
        disclaimer={{
          eyebrow: "Limite du guide",
          title:
            "Une méthode de cadrage, pas un devis ni un audit de conformité",
          description:
            "Les droits, données, obligations sociales, règles d’accessibilité, contrats, menaces et coûts dépendent de votre organisation et de votre projet. Faites intervenir les responsables métier, données, sécurité, exploitation et contrat. En cas d’incident actif, rétablissez d’abord la continuité avant d’engager une refonte.",
        }}
        relatedGuides={[
          {
            label: "Reconnaître les signes d’un besoin de logiciel métier",
            href: "/guides/signes-besoin-logiciel-metier",
          },
          {
            label: "Calculer le ROI d’une application métier",
            href: "/guides/calculer-roi-application-metier",
          },
          {
            label: "Comparer Airtable, Notion et une application métier",
            href: "/guides/airtable-notion-ou-application-metier",
          },
        ]}
        relatedGuidesLabel="3 guides complémentaires"
      >
        <GuidePremiumSection
          id="reponse"
          number="01"
          label="Réponse directe"
          readingTime="4 min"
          title="Le sur-mesure commence par une tâche qui résiste aux solutions plus simples"
        >
          <p>
            <strong>
              Ne commandez pas un back-office parce qu’un fichier est pénible ou
              parce qu’un écran de pilotage manque.
            </strong>{" "}
            Décrivez une tâche récurrente, le rôle qui l’exécute, les données
            dont il a besoin, la preuve attendue, l’erreur possible et la façon
            de reprendre. Testez ensuite ce même contrat dans l’outil ou le
            processus actuel, puis dans un module ou logiciel standard. Le
            développement dédié ne devient qu’une option parmi cinq.
          </p>
          <p>
            Si le processus change chaque semaine, si personne ne possède les
            règles, si les droits ou l’export ne sont pas compris, ou si le coût
            total reste inconnu, la bonne décision est de différer. Le code ne
            stabilise pas une responsabilité absente. Il transforme seulement
            une ambiguïté en comportement plus coûteux à modifier.
          </p>
          <p>
            Un <strong>tableau de bord</strong> informe et aide à surveiller. Un{" "}
            <strong>back-office métier</strong> permet à des personnes
            autorisées de traiter, décider, corriger et prouver. Un portail
            client expose des actions à une personne externe ; une console
            technique sert surtout au support ou à l’exploitation. Un CRM (outil
            de gestion de la relation client) ou un ERP (progiciel qui
            centralise plusieurs fonctions de l’entreprise) — standard,
            configuré ou spécifique — peut déjà fournir le back-office
            nécessaire. Une application métier, elle, organise un processus
            propre à l’entreprise.
          </p>

          <GuideTable
            caption="Les cinq issues à laisser ouvertes dès le début"
            headers={["Issue", "Ce qu’elle suppose", "Première preuve"]}
            rows={optionRows.map((row) => [row[0], row[1], row[2]])}
          />

          <GuidePremiumMemo
            eyebrow="Règle de décision"
            title="Une inconnue qui peut changer l’architecture suspend la conclusion"
          >
            <ul>
              <li>Une fréquence non relevée n’est pas égale à zéro.</li>
              <li>Un propriétaire pressenti n’est pas un responsable nommé.</li>
              <li>
                Un export téléchargé mais jamais relu ne prouve pas la sortie.
              </li>
              <li>
                Une démonstration standard sans exception n’est pas un test.
              </li>
            </ul>
          </GuidePremiumMemo>

          <figure className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
            <Image
              src={BACK_OFFICE_IMAGES[0]}
              alt="Contrat d’écran reliant file de travail, fiche, action, exception et reprise, encadré par le rôle, les données, la preuve et le support"
              width={1600}
              height={900}
              className="h-auto w-full"
              priority
            />
            <figcaption className="px-5 py-3 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
              Maquette — données fictives. L’équivalent textuel complet est le
              contrat à douze champs de la section suivante.
            </figcaption>
          </figure>

          <InfoBox
            variant="amber"
            title="Incident actif : restaurer avant de refondre"
          >
            <p>
              Si des accès sont compromis, si une synchronisation écrit au
              mauvais endroit ou si l’équipe ne peut plus traiter, sécurisez
              d’abord les personnes, les données et le mode dégradé. Nommez le
              responsable, préservez les preuves et remettez un service minimum
              en état. Une fois l’urgence contenue, reprenez le cadrage par
              l’observation d’une tâche réelle, pas par le dessin d’un écran.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="contrat"
          number="02"
          label="Contrat d’écran"
          readingTime="6 min"
          title="Observez une tâche, puis écrivez douze réponses avant de dessiner"
        >
          <p>
            Commencez par une période représentative : une clôture, un pic de
            commandes, un retour fournisseur ou l’absence du responsable
            habituel. Regardez une personne accomplir la tâche avec ses vrais
            outils. Notez les attentes, copies, décisions, messages, reprises et
            questions posées aux collègues. Cette observation ne transforme pas
            une méthode de service public en obligation privée : les ressources
            de{" "}
            <a
              href="https://design.numerique.gouv.fr/bien-concevoir/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DesignGouv
            </a>{" "}
            et de l’Anact servent ici de repères méthodologiques pour partir du
            besoin et associer les personnes concernées.
          </p>
          <p>
            Le contrat d’écran tient sur douze lignes. Il décrit ce que l’écran
            doit permettre de faire et ce qui doit arriver lorsque le parcours
            nominal échoue. Une case vide reste « à définir ». Elle n’accorde
            pas un droit, ne supprime pas une donnée et ne prouve pas une
            reprise.
          </p>

          <GuideTable
            caption="Le contrat d’écran à remplir pour chaque tâche"
            headers={["N°", "Champ", "Question concrète"]}
            rows={contractRows.map((row) => [...row])}
          />

          <GuidePremiumCase
            initial="F"
            eyebrow="Exemple entièrement fictif"
            title="Une commande entre entreprises bloquée par un justificatif manquant"
          >
            <p>
              Une opératrice ouvre la file des commandes à contrôler. Elle peut
              valider les données commerciales, mais pas modifier la limite de
              crédit. Le justificatif fiscal manque : l’action « confirmer »
              reste indisponible, le message nomme la pièce et le responsable,
              puis le dossier revient dans la file lorsque la finance l’ajoute.
              Si le logiciel tiers est indisponible, la commande passe en
              attente ; une relance utilise le même identifiant pour éviter une
              deuxième commande.
            </p>
          </GuidePremiumCase>

          <p>
            Cet exemple n’est ni un client, ni un écran de production, ni un
            résultat Hagnéré Code. Il sert à vérifier que « fiche commande » ne
            suffit pas comme besoin. Sans rôle, source de vérité, exception,
            reprise et critère d’acceptation, le titre de l’écran ne protège
            aucune décision.
          </p>

          <h3>Faites relire le contrat par trois personnes</h3>
          <p>
            La personne qui exécute repère les étapes oubliées. Le propriétaire
            métier tranche la règle et le résultat ; le support doit pouvoir
            diagnostiquer puis reprendre sans aide de l’auteur. Ajoutez une
            quatrième lecture par la sécurité, les données ou le juridique si
            les accès, traces, données sensibles, contrats ou personnes
            employées sont concernés. Ce contrat relu révèle alors les familles
            d’écran réellement utiles ; il n’oblige pas à les séparer.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="ecrans"
          number="03"
          label="Bibliothèque de travail"
          readingTime="7 min"
          title="Éprouvez huit familles d’écran, sans les transformer en quota"
        >
          <p>
            Une petite PME n’a pas besoin de huit écrans distincts. Elle doit
            cependant éprouver ces huit familles de fonctions : chacune révèle
            une responsabilité souvent oubliée. Une seule vue peut réunir file
            et fiche ; un outil standard peut déjà fournir droits et historique.
            Retenez la forme la plus simple qui permet d’accomplir, contrôler et
            réparer la tâche.
          </p>

          <GuideTable
            caption="Les huit familles et le cas difficile à vérifier"
            headers={["Famille", "Travail rendu possible", "Épreuve minimale"]}
            rows={screenRows.map((row) => [...row])}
          />

          <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: ListChecks,
                title: "La file montre le travail à traiter",
                text: "Elle indique ce qui attend une action, pourquoi, par qui et selon quelle priorité. Testez aussi l’état vide et la surcharge.",
              },
              {
                icon: Database,
                title: "La fiche rend l’état et sa source compréhensibles",
                text: "Elle expose les données nécessaires à la décision, leur fraîcheur et leur source ; elle masque le superflu au rôle concerné.",
              },
              {
                icon: RefreshCcw,
                title: "Rejouer ne suffit pas pour reprendre",
                text: "Avant le rejeu, elle connaît l’état réellement atteint et évite de répéter les effets déjà réussis.",
              },
              {
                icon: Wrench,
                title: "Le support a besoin d’un diagnostic exploitable",
                text: "Pour remettre le service en état, il lui faut un propriétaire, une procédure et une façon de restaurer.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <Icon className="size-6 text-indigo-600" aria-hidden="true" />
                <h3 className="mt-3 text-base font-bold text-zinc-950 dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <figure className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
            <Image
              src={BACK_OFFICE_IMAGES[1]}
              alt="Vue compacte du parcours file, fiche, action, exception et reprise avec les contrôles de rôle, données, preuve et support"
              width={1200}
              height={900}
              className="h-auto w-full"
            />
            <figcaption className="px-5 py-3 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
              Maquette — données fictives. La forme peut changer ; le contrat et
              les résultats attendus restent testables.
            </figcaption>
          </figure>

          <GuidePremiumMemo title="Supprimez un écran s’il ne change aucune tâche">
            <p>
              Un écran sans rôle, action, exception ni décision devient souvent
              une vue décorative ou une copie de données. Intégrez son
              information à l’endroit où la personne agit, ou gardez un tableau
              de bord séparé si son seul but est la surveillance. Une fois les
              vues utiles retenues, la question décisive devient : qui peut agir
              et comment l’équipe reprend-elle lorsque l’action échoue ?
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="cas-difficiles"
          number="04"
          label="Droits et réparation"
          readingTime="8 min"
          title="Décidez qui peut agir, puis rejouez les échecs qui créent des doubles effets"
        >
          <p>
            La matrice de droits ne s’arrête pas à « utilisateur » et «
            administrateur ». Croisez le rôle, l’action, les données et la
            preuve. Un opérationnel peut voir une commande et corriger une
            adresse sans voir la marge ; la finance peut valider une limite sans
            administrer les comptes ; le support peut consulter un diagnostic
            sans exporter tout le fichier client.
          </p>

          <GuideTable
            caption="Matrice rôle–action–données–preuve à adapter puis tester"
            headers={["Rôle", "Actions typiques", "Données", "Preuve attendue"]}
            rows={[
              [
                "Opérationnel",
                "Voir, créer, corriger dans son périmètre",
                "Dossier métier et pièces nécessaires",
                "Création, correction et erreur utiles",
              ],
              [
                "Responsable",
                "Attribuer, valider, annuler, traiter en masse",
                "Périmètre d’équipe et motifs",
                "Décision, portée et succès partiels",
              ],
              [
                "Administration / finance",
                "Valider, exporter selon mandat",
                "Finance, pièces et références utiles",
                "Validation, export et justification",
              ],
              [
                "Direction",
                "Consulter, arbitrer une exception sensible",
                "Synthèse et données autorisées",
                "Décision et motif proportionné",
              ],
              [
                "Support / informatique",
                "Diagnostiquer, reprendre, restaurer",
                "Traces techniques minimisées",
                "Incident, reprise et retour au service",
              ],
              [
                "Système tiers",
                "Lire ou écrire une action définie",
                "Périmètre d’interface strict",
                "Identifiant, état, erreur et rejeu",
              ],
            ]}
          />

          <p>
            La{" "}
            <a
              href="https://www.cnil.fr/fr/securite-gerer-les-habilitations"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL recommande de gérer les habilitations
            </a>{" "}
            selon les besoins, de retirer les accès lors d’un changement de
            mission ou d’un départ et d’effectuer une revue régulière, a minima
            chaque année. Il s’agit d’une recommandation CNIL, pas d’une cadence
            universelle imposée à tout outil. Le projet de sécurité applicative
            OWASP recommande, côté ingénierie, le moindre privilège, le refus
            par défaut et des tests d’autorisation. Cette dernière source n’est
            pas une loi française et aucune de ces lectures ne dispense de
            qualifier le traitement, les risques et les rôles réels.
          </p>

          <GuidePremiumCase
            initial="M"
            eyebrow="Exemple entièrement fictif · action de masse"
            title="Vingt-sept confirmations réussissent, trois restent en erreur"
          >
            <p>
              Une responsable sélectionne trente commandes. L’écran affiche la
              portée avant confirmation. Vingt-sept écritures réussissent ;
              trois échouent parce qu’une donnée est périmée. Le résultat ne dit
              pas « terminé » : il liste les vingt-sept identifiants confirmés,
              les trois erreurs et leur responsable. La reprise cible seulement
              ces trois éléments. Relancer les trente pourrait créer un second
              effet chez le tiers.
            </p>
          </GuidePremiumCase>

          <GuideTable
            caption="Échecs à inclure dans la recette, même s’ils sont rares"
            headers={[
              "Échec",
              "Ce que l’écran doit montrer",
              "Réparation à prouver",
            ]}
            rows={[
              [
                "Doublon après création",
                "Les deux identités et la règle enfreinte",
                "Fusion, annulation ou lien sans perte de preuve",
              ],
              [
                "Modification simultanée",
                "La version lue et le conflit",
                "Relecture, comparaison ou arbitrage explicite",
              ],
              [
                "Écriture locale, tiers en échec",
                "État en attente et effet non confirmé",
                "Rejeu sûr ou mode manuel, puis rapprochement",
              ],
              [
                "Propriétaire absent",
                "La relève et son périmètre",
                "Délégation temporaire puis retrait",
              ],
              [
                "Compte administrateur utilisé",
                "Action refusée ou alerte proportionnée",
                "Retour à un compte ordinaire et revue",
              ],
              [
                "Donnée sensible visible par le mauvais rôle",
                "Champ masqué et tentative refusée",
                "Correction des droits, revue des accès et preuve du retrait",
              ],
              [
                "Export trop large",
                "Périmètre et motif avant lancement",
                "Réduction, autorisation et trace utile",
              ],
              [
                "Intégration indisponible plusieurs heures",
                "Dernier succès, attente et responsable",
                "File, reprise et retour au mode normal",
              ],
              [
                "Sauvegarde jamais restaurée",
                "Preuve absente",
                "Restauration sur environnement sûr et contrôle métier",
              ],
              [
                "Changement de prestataire ou arrêt du service",
                "Données, dépendances, droits et procédures à reprendre",
                "Export exploitable, transfert contrôlé et test de réversibilité",
              ],
            ]}
          />

          <InfoBox
            variant="blue"
            title="Une erreur compréhensible est une fonction métier"
          >
            <p>
              « Une erreur est survenue » ne dit ni ce qui a réussi, ni ce qui
              est resté inchangé, ni qui doit agir. Écrivez le message attendu
              dans le contrat d’écran. Testez-le au clavier, avec zoom et sur
              petit écran ; la couleur seule ne doit pas porter l’état. Ces
              échecs fournissent ensuite le même test aux cinq options : chacune
              doit montrer comment elle autorise, prouve et répare.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="options"
          number="05"
          label="Comparaison symétrique"
          readingTime="7 min"
          title="Appliquez le même contrat et le même horizon aux cinq options"
        >
          <p>
            Une licence mensuelle et un devis de développement ne se comparent
            pas directement. Commencez par le même contrat d’écran, les mêmes
            données, le même volume, les mêmes exceptions et le même horizon de
            coût. L’option qui semble la moins chère peut déplacer la charge
            vers l’administration ; le sur-mesure peut supprimer des
            contournements tout en créant maintenance, support et dépendance au
            prestataire.
          </p>

          <GuideTable
            caption="Comparer les cinq options sans présumer du résultat"
            headers={[
              "Option",
              "Quand la tester",
              "Preuve suivante",
              "Cas inverse",
            ]}
            rows={optionRows.map((row) => [...row])}
          />

          <h3>Testez le standard dans son plan et son contrat réels</h3>
          <p>
            Une vidéo, une maquette commerciale ou un essai avec un compte
            administrateur ne suffit pas. Utilisez des données fictives
            représentatives, des rôles séparés et l’exception qui motive le
            projet. Vérifiez export, intégration, journal, reprise et support
            dans l’offre réellement envisagée. Si le standard passe, le code
            dédié doit perdre la comparaison, même si sa maquette paraît plus
            agréable.
          </p>

          <h3>Un assemblage léger exige une frontière nette</h3>
          <p>
            « Le CRM porte le client ; la petite interface gère la validation
            exceptionnelle » peut être vérifié. « Les deux outils contiennent un
            peu tout et se synchronisent dans les deux sens » ne l’est pas.
            Nommez pour chaque objet le système qui fait foi, celui qui peut
            écrire, la file d’attente, le responsable des écarts et la façon de
            rejouer sans doublon.
          </p>

          <GuidePremiumMemo
            eyebrow="Contre-test"
            title="Si « garder l’existant » est impossible, la comparaison est biaisée"
          >
            <p>
              Demandez quelle preuve ferait perdre le sur-mesure : standard qui
              passe les exceptions, charge trop faible, processus instable,
              absence de propriétaire, coût total excessif ou sortie
              contractuelle insuffisante. Si aucune réponse n’existe, la
              comparaison n’est pas contradictoire. Après ce contre-test, les
              options couvrent le même travail ; il reste à comparer leur charge
              observée et leur coût complet.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="charge"
          number="06"
          label="Calcul borné"
          readingTime="8 min"
          title="Mesurez la charge observée sans la transformer automatiquement en économie"
        >
          <p>
            Relevez une période, le nombre de cas, les minutes où une personne
            agit, les cas repris et les minutes de reprise. Gardez l’attente à
            part : attendre un fournisseur pendant deux heures n’équivaut pas à
            deux heures de travail récupérables. Notez aussi si la reprise est
            déjà comprise dans le temps actif pour éviter un double compte.
          </p>
          <p>
            Dans l’atelier, saisissez les minutes par pas de 0,1. Après contrôle
            des valeurs et des bornes, les produits et les sommes restent au
            dixième de minute ; la conversion en heures est arrondie à quatre
            décimales pour que le plus petit pas positif ne s’affiche pas comme
            zéro.
          </p>

          <div className="not-prose my-7 grid gap-3 sm:grid-cols-3">
            {[
              ["Charge active", "cas × minutes actives par cas"],
              ["Charge de reprise", "cas en reprise × minutes de reprise"],
              [
                "Charge totale observée",
                "active + reprise, sauf si déjà incluse",
              ],
            ].map(([label, formula]) => (
              <div
                key={label}
                className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-5 dark:border-indigo-900 dark:bg-indigo-950/30"
              >
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-indigo-700 dark:text-indigo-300">
                  {label}
                </p>
                <p className="mt-2 text-sm font-semibold text-zinc-950 dark:text-white">
                  {formula}
                </p>
              </div>
            ))}
          </div>

          <GuidePremiumCase
            initial="C"
            eyebrow="Exemple entièrement fictif · calcul reproductible"
            title="Une semaine de 120 dossiers, dont 8 reprises"
          >
            <p>
              120 dossiers × 6 minutes actives = 720 minutes. 8 reprises × 15
              minutes = 120 minutes. Si la reprise n’est pas incluse, la charge
              totale observée est 840 minutes, soit 14 heures. Si elle est déjà
              comprise, le total reste 720 minutes, soit 12 heures. Ce résultat
              décrit une charge ; il ne prouve ni économie, ni rentabilité, ni
              budget de projet.
            </p>
          </GuidePremiumCase>

          <BackOfficeDecisionWorkbench />

          <h3>Recueillez le coût total avant de parler de rentabilité</h3>
          <p>
            Pour chaque option, inscrivez cadrage, configuration ou
            développement, licences, intégrations, nettoyage et migration,
            recette, formation, hébergement, support, maintenance, sécurité,
            évolutions et sortie. Chaque ligne porte une quantité, une unité,
            une période, une source et un propriétaire. Une ligne inconnue reste
            à vérifier. Pour relier ces coûts à des bénéfices attribuables et à
            un horizon, utilisez le{" "}
            <Link href="/guides/calculer-roi-application-metier">
              guide de calcul du retour sur investissement (ROI) d’une
              application métier
            </Link>
            . La comparaison chiffrée ne valide pas encore la solution : le
            prototype doit faire apparaître les erreurs et les reprises avant
            toute construction complète.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="prototype"
          number="07"
          label="Prototype et recette"
          readingTime="6 min"
          title="Faites échouer un prototype sur des données fictives avant de construire"
        >
          <p>
            Le prototype n’a pas besoin de contenir toutes les pages. Il doit
            couvrir le contrat qui départage les options : une tâche nominale,
            une exception fréquente et un échec coûteux à réparer. Utilisez des
            données fictives ou correctement anonymisées ; n’importez pas une
            base de production pour rendre la démonstration réaliste.
          </p>

          <GuideTable
            caption="Plan de recette avant tout développement complet"
            headers={["Épreuve", "Résultat observable", "Qui accepte"]}
            rows={[
              [
                "Tâche nominale",
                "Le bon rôle termine sans aide ni champ superflu",
                "Utilisateur représentatif",
              ],
              [
                "Donnée manquante",
                "Le message nomme le problème et préserve le travail",
                "Métier",
              ],
              [
                "Doublon",
                "Le système refuse, rapproche ou fait arbitrer sans perte",
                "Propriétaire métier",
              ],
              [
                "Conflit simultané",
                "Aucune modification n’écrase silencieusement l’autre",
                "Métier + exploitation",
              ],
              [
                "Tiers indisponible",
                "État en attente, alerte et reprise sans double effet",
                "Support",
              ],
              [
                "Droits",
                "Chaque profil voit et agit seulement dans son périmètre",
                "Métier + données/sécurité",
              ],
              [
                "Clavier et zoom",
                "Tâche, erreur et reprise restent faisables à 200 %",
                "Utilisateur représentatif",
              ],
              [
                "Petit écran et sombre",
                "Aucune information décisive n’est tronquée ou portée par la couleur",
                "Utilisateur + recette",
              ],
              [
                "Export et sortie",
                "Données, pièces, identifiants et règles utiles sont relus",
                "Propriétaire + contrat",
              ],
            ]}
          />

          <p>
            <a
              href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Le Référentiel général d’amélioration de l’accessibilité (RGAA)
              4.1.2 fournit des critères et tests
            </a>{" "}
            utiles à la conception et à la recette. L’obligation juridique
            dépend cependant de l’organisme et du service ; la version doit être
            revalidée avant publication. Indépendamment de cette qualification,
            une action critique inaccessible au clavier est un défaut produit
            pour la personne qui en dépend.
          </p>

          <figure className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
            <Image
              src={BACK_OFFICE_IMAGES[2]}
              alt="Schéma carré du contrat d’écran avec file, fiche, action, exception, reprise, rôle, données, preuve et support"
              width={1000}
              height={1000}
              className="h-auto w-full"
            />
            <figcaption className="px-5 py-3 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
              Maquette — données fictives. Une présentation carrée ne remplace
              pas les tests de tâche, d’erreur et de reprise.
            </figcaption>
          </figure>

          <InfoBox
            variant="emerald"
            title="Accepter une tâche, pas une collection d’écrans"
          >
            <p>
              La recette échoue si l’utilisateur doit appeler l’auteur pour
              comprendre le libellé, si l’erreur efface sa saisie, si un succès
              partiel reste invisible ou si le support ne peut pas expliquer
              l’état atteint. Corrigez le contrat avant d’ajouter des pages. Si
              la tâche passe, le travail n’est pas terminé : nommez maintenant
              les personnes qui exploiteront l’outil et organiseront sa sortie.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="responsables"
          number="08"
          label="Exploitation et réversibilité"
          readingTime="8 min"
          title="Nommez les propriétaires du métier, des données, du support et de la sortie"
        >
          <p>
            Après la mise en service, quelqu’un doit trancher une règle,
            accorder un droit, comprendre une alerte, restaurer une sauvegarde,
            prioriser une évolution et organiser une sortie. « Le prestataire »
            ne suffit pas : le contrat doit dire qui intervient, sur quel
            périmètre, avec quels accès, livrables, délais convenus et moyens de
            reprise. Si le titulaire quitte l’équipe, une relève doit pouvoir
            exécuter la procédure.
          </p>

          <GuideTable
            caption="Responsabilités minimales après la décision"
            headers={["Responsabilité", "Décision attendue", "Preuve"]}
            rows={[
              [
                "Propriétaire métier",
                "Règles, priorités, exceptions et acceptation",
                "Contrats d’écran et critères signés",
              ],
              [
                "Données / protection",
                "Finalités, champs, accès, export et durée",
                "Registre, matrice et test de rôle adaptés",
              ],
              [
                "Sécurité / informatique",
                "Risque, identités, secrets, journaux et dépendances",
                "Contrôles et incidents rejoués",
              ],
              [
                "Exploitation / support",
                "Supervision, escalade, sauvegarde, restauration et mode dégradé",
                "Exercice daté et procédure reprise par la relève",
              ],
              [
                "Achats / juridique",
                "Sous-traitance, droits, tiers, livrables et sortie",
                "Contrat et annexes relus",
              ],
              [
                "Direction",
                "Horizon, coût total, risque résiduel et décision",
                "Arbitrage consigné avec preuve manquante",
              ],
            ]}
          />

          <h3>Minimisez les données et testez les droits dès le prototype</h3>
          <p>
            Le Règlement général sur la protection des données (RGPD) demande
            notamment de limiter les données à ce qui est nécessaire et
            d’intégrer leur protection dès la conception. Si un prestataire
            traite des données pour votre compte, l’article 28 encadre cette
            relation ; la sécurité doit être adaptée au risque au titre de
            l’article 32. Ces références ne permettent pas à ce guide de
            déclarer votre conformité. Elles imposent surtout de ne pas
            repousser rôles, finalités, sous-traitants, incidents et sortie à la
            fin du projet.
          </p>

          <h3>Journalisez ce qui aide à prouver et réparer</h3>
          <p>
            Une trace utile nomme un événement, un objet, une date, un auteur ou
            système et, lorsque nécessaire, un motif. Ne copiez pas tous les
            champs sensibles dans les journaux. Protégez leur accès. La CNIL
            recommande actuellement une conservation sur une période glissante
            de six mois à un an, sauf notamment obligation légale, contentieux,
            contrôle interne ou besoin post-incident documenté. Ce repère n’est
            ni une durée universelle ni une autorisation de détourner les
            traces. La CNIL traite séparément le contrôle de l’activité des
            personnes employées : nécessité, proportionnalité et information
            restent à qualifier. Pour la consultation, le passage cité vise le
            comité social et économique (CSE) des entreprises privées de 50
            salariés et plus ainsi que certains établissements publics employant
            du personnel de droit privé ; les autres organismes publics relèvent
            d’instances différentes selon leur situation.
          </p>

          <h3>Écrivez la propriété et la sortie au lieu de les supposer</h3>
          <p>
            L’article{" "}
            <a
              href="https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006278958/2026-02-28"
              target="_blank"
              rel="noopener noreferrer"
            >
              L131-3 du Code de la propriété intellectuelle
            </a>{" "}
            exige une mention distincte de chaque droit cédé et délimite son
            exploitation par l’étendue, la destination, le lieu et la durée ; il
            ne rend pas automatiquement le client propriétaire de tout le code,
            des composants antérieurs ou des licences tierces. L’article{" "}
            <a
              href="https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000039279818"
              target="_blank"
              rel="noopener noreferrer"
            >
              L113-9
            </a>{" "}
            concerne les logiciels et leur documentation créés par des employés
            dans les conditions du texte, et vise aussi certains agents publics
            ; il ne s’étend pas automatiquement aux prestataires. Faites relire
            le contrat applicable.
          </p>

          <GuidePremiumMemo
            eyebrow="Test de réversibilité"
            title="Demandez à une autre personne de reprendre sans l’auteur"
          >
            <ul>
              <li>
                Accède-t-elle aux comptes, dépôts, environnements et secrets
                nécessaires ?
              </li>
              <li>
                Comprend-elle les règles, données, tiers, alertes et sauvegardes
                ?
              </li>
              <li>
                Peut-elle exporter, restaurer, corriger puis remettre en service
                ?
              </li>
              <li>
                Sait-elle ce qui appartient à l’entreprise, au prestataire ou à
                un tiers ?
              </li>
            </ul>
            <p>
              Cet exercice de relève est une preuve à consigner avec la décision
              — ou avec son report.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="lundi"
          number="09"
          label="Plan d’action"
          readingTime="5 min"
          title="Lundi, produisez une preuve qui peut réellement faire changer l’option"
        >
          <p>
            Ne commencez ni par un devis, ni par une liste de technologies.
            Réunissez une personne qui exécute la tâche, le propriétaire métier
            et la personne qui devrait soutenir l’outil. Prenez un dossier
            difficile et une période mesurée. Le résultat de la semaine peut
            être un contrat d’écran accepté, un standard qui passe, un défaut de
            responsabilité à corriger ou une décision assumée de ne pas
            investir.
          </p>

          <ol>
            <li>
              <strong>Choisissez une tâche et une exception.</strong> Évitez le
              processus idéal préparé pour la réunion.
            </li>
            <li>
              <strong>Mesurez la période.</strong> Cas, minutes actives,
              attentes, reprises, erreurs, volumes et dépendances gardent leurs
              unités.
            </li>
            <li>
              <strong>Remplissez le contrat à douze champs.</strong> Marquez « à
              définir » au lieu d’inventer.
            </li>
            <li>
              <strong>Testez l’existant et un standard.</strong> Utilisez les
              mêmes rôles, données fictives, exceptions et critères.
            </li>
            <li>
              <strong>Provoquez deux échecs.</strong> Un succès partiel et un
              tiers indisponible révèlent la réparation et le support.
            </li>
            <li>
              <strong>Comparez le coût total.</strong> Même horizon, mêmes
              fonctions, aucune ligne inconnue à zéro.
            </li>
            <li>
              <strong>Consignez une issue.</strong> Conserver, standard,
              assemblage, dédié ou report, avec preuves, blocages, responsable
              et prochaine date.
            </li>
          </ol>

          <GuideTable
            caption="Tableau final à présenter avant toute décision"
            headers={["État", "Ce qui y entre", "Effet sur la décision"]}
            rows={[
              [
                "Preuves présentes",
                "Tests datés, mesures, critères acceptés, propriétaires nommés",
                "Ouvrent seulement les options compatibles",
              ],
              [
                "Preuves manquantes",
                "Case à définir, standard non testé, coût ou export non relevé",
                "Suspendent l’option qu’elles peuvent changer",
              ],
              [
                "Faits bloquants",
                "Processus instable, droits non qualifiés, support absent, dépendance sans reprise",
                "Imposent de corriger ou différer",
              ],
              [
                "Hypothèses",
                "Volume futur, adoption, coût ou bénéfice non encore prouvé",
                "Restent séparées des faits et reçoivent un test",
              ],
              [
                "Décision",
                "Une option choisie par les responsables, avec cas inverse",
                "Devient révisable à un événement nommé",
              ],
            ]}
          />

          <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
              <FileCheck2
                className="size-6 text-emerald-600"
                aria-hidden="true"
              />
              <h3 className="mt-3 text-base font-bold text-zinc-950 dark:text-white">
                Dossier autonome
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                Contrat d’écran, mesures, deux échecs, matrice de droits,
                options testées, coûts par famille, propriétaires, sortie et
                prochaine preuve. L’atelier permet de copier cette synthèse.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
              <Users className="size-6 text-indigo-600" aria-hidden="true" />
              <h3 className="mt-3 text-base font-bold text-zinc-950 dark:text-white">
                Quand demander un regard extérieur
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                Quand la tâche et les blocages sont prouvés, mais qu’il faut
                comparer configuration, standard, assemblage et développement,
                leur exploitation et leur sortie.
              </p>
            </div>
          </div>

          <p>
            Le service{" "}
            <Link href="/services/outils-internes-sur-mesure">
              outils internes sur mesure
            </Link>{" "}
            donne le contexte de l’accompagnement. Si vous souhaitez transmettre
            votre dossier, la page{" "}
            <Link href="/demarrer-un-projet">démarrer un projet</Link> ouvre un
            brief guidé en six étapes : projet, contexte, contenu, contraintes,
            coordonnées, puis synthèse et envoi. Il n’y a ni devis automatique
            ni engagement. La relecture peut conclure qu’il faut garder,
            configurer, acheter, tester ou différer plutôt que développer ;
            toute indication de délai visible sur la page de destination reste
            un objectif non garanti à revalider au moment de la publication.
          </p>

          <GuidePremiumMemo
            eyebrow="Dernière question"
            title="Quelle preuve obtenue cette semaine pourrait faire perdre votre option préférée ?"
          >
            <p>
              Si aucune preuve ne peut changer la conclusion, vous ne testez
              plus une décision. Revenez au cas difficile, à la personne qui
              devra le réparer et à l’option plus simple que le projet devait
              être capable de conserver.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
