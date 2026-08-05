import Image from "next/image";
import Link from "next/link";
import {
  FormulaBox,
  GuideTable,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import {
  GuidePremiumCase,
  GuidePremiumLayout,
  GuidePremiumMemo,
  GuidePremiumSection,
} from "@/components/guides/guide-premium-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import {
  buildGuideMetadata,
  buildGuideStructuredData,
} from "@/lib/guide-page-seo";
import { formatGuideDate, getGuide } from "@/lib/guides";
import { TEAM } from "@/lib/team";

const slug = "mvp-prototype-ou-poc";
const guide = getGuide(slug);
const breadcrumbName = guide.cardTitle;
const imageAlt =
  "Choisir entre prototype, POC, pilote et MVP selon la preuve attendue";

export const metadata = buildGuideMetadata(guide, imageAlt);

const structuredData = buildGuideStructuredData(guide, breadcrumbName);

const toc = [
  {
    id: "reponse",
    number: "01",
    label: "Choisir par inconnue",
    shortLabel: "Réponse",
  },
  {
    id: "matrice",
    number: "02",
    label: "Comparer les preuves",
    shortLabel: "Matrice",
  },
  {
    id: "fiche",
    number: "03",
    label: "Écrire l’expérience",
    shortLabel: "Fiche",
  },
  {
    id: "prototype",
    number: "04",
    label: "Tester la compréhension",
    shortLabel: "Prototype",
  },
  {
    id: "poc",
    number: "05",
    label: "Prouver une faisabilité",
    shortLabel: "POC",
  },
  {
    id: "pilote",
    number: "06",
    label: "Tester le vrai travail",
    shortLabel: "Pilote",
  },
  {
    id: "mvp",
    number: "07",
    label: "Apprendre du comportement",
    shortLabel: "MVP",
  },
  {
    id: "cas",
    number: "08",
    label: "Rejouer un cas fictif",
    shortLabel: "Cas",
  },
  {
    id: "decision",
    number: "09",
    label: "Décider de la suite",
    shortLabel: "Décision",
  },
  {
    id: "faq",
    number: "10",
    label: "Répondre aux questions",
    shortLabel: "FAQ",
  },
];

const faqItems = [
  {
    question: "Faut-il toujours faire un POC avant un prototype ?",
    answer: (
      <p>
        Non. Si le risque porte sur la compréhension d’un parcours, commencez
        souvent par un prototype. Si une contrainte technique peut rendre toute
        solution impossible, un POC ciblé peut passer avant. Vous pouvez aussi
        faire les deux sur deux inconnues distinctes, ou n’en faire aucun si un
        entretien, un test manuel ou un outil existant suffit.
      </p>
    ),
  },
  {
    question: "Un prototype doit-il être cliquable ou codé ?",
    answer: (
      <p>
        Non, pas par principe. Choisissez le niveau de détail nécessaire à la
        question : un dessin peut suffire pour discuter un écran, un parcours
        cliquable aide à observer des choix et du code peut être nécessaire pour
        une interaction réaliste. Le détail supplémentaire n’est utile que s’il
        change la preuve obtenue.
      </p>
    ),
  },
  {
    question: "Peut-on réutiliser le code d’un prototype ou d’un POC ?",
    answer: (
      <p>
        Oui, parfois, mais seulement après une revue explicite. Le GOV.UK
        Service Manual rappelle qu’un prototype codé peut ne pas respecter les
        standards de sécurité, de performance ou de qualité d’un service réel.
        Inventoriez aussi les licences, secrets, données, tests et droits avant
        toute reprise en production.
      </p>
    ),
  },
  {
    question: "Un MVP peut-il aussi être un pilote ?",
    answer: (
      <p>
        Oui. « MVP » peut décrire la version minimale utilisée pour apprendre,
        tandis que « pilote » décrit un contexte opérationnel borné. Gardez
        alors deux questions : le comportement client prévu apporte-t-il
        l’apprentissage attendu, et l’organisation sait-elle exploiter, aider et
        revenir en arrière dans le périmètre choisi ?
      </p>
    ),
  },
  {
    question: "Combien de personnes faut-il pour tester ?",
    answer: (
      <p>
        Aucun nombre ne convient à tous les tests. Le recrutement dépend de la
        question, de la diversité des rôles, des risques d’accès, de la rareté
        des cas et de la décision attendue. Écrivez ce que chaque profil permet
        ou ne permet pas de conclure.
      </p>
    ),
  },
  {
    question: "Faut-il utiliser de vraies données dans un POC ou un pilote ?",
    answer: (
      <p>
        Pas par défaut. La CNIL recommande des environnements distincts de la
        production et des données fictives ou anonymisées pour développer et
        tester. Si ces données ne suffisent pas, documentez pourquoi, limitez le
        périmètre et faites qualifier les responsabilités, la base légale, les
        accès, la sécurité, la conservation et la suppression avant le test.
      </p>
    ),
  },
  {
    question: "Qui possède la maquette, le code et les résultats du test ?",
    answer: (
      <p>
        Cela dépend du contrat, des auteurs, des composants et des droits
        concernés. Le paiement seul ne répond pas à toutes les situations. Le
        contrat doit inventorier les éléments remis, les composants tiers, les
        licences, les accès et les droits d’exploitation. En France, les
        articles L131-3 et L113-9 ont des champs précis ; faites qualifier le
        cas lorsqu’un actif compte pour la suite.
      </p>
    ),
  },
  {
    question: "Que faire si le résultat est ambigu ?",
    answer: (
      <p>
        Ne le convertissez pas en feu vert. Vérifiez d’abord la méthode, le jeu
        d’essai, les données manquantes et les interventions cachées. La bonne
        décision peut être de refaire un test plus petit, d’écrire une nouvelle
        hypothèse, de reporter ou d’arrêter.
      </p>
    ),
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
          { label: breadcrumbName },
        ]}
        badges={[
          { label: "Choix par inconnue", variant: "dark" },
          { label: "4 formats comparés", variant: "neutral" },
          { label: "Arrêt prévu avant le test", variant: "success" },
          { label: "Brouillon privé", variant: "muted" },
          {
            label: "Mis à jour le " + formatGuideDate(guide.dateModified),
            variant: "muted",
          },
        ]}
        heroTitle={"Prototype, POC, pilote ou MVP\u00a0:"}
        heroTitleEm="que construire d’abord ?"
        heroDescription="La preuve qui vous manque indique le test à construire. Un prototype teste la compréhension d’un parcours ; une preuve de concept (POC), une contrainte technique ; un pilote, le vrai travail ; un produit minimum viable (MVP), un apprentissage client défini. Le retour répété n’est requis que si votre hypothèse porte sur ce retour. Écrivez la question, les personnes à observer, la preuve attendue et les conditions de passage ou d’arrêt. Si un entretien, un test manuel ou un outil existant répond déjà à la question, arrêtez-vous là."
        stats={[
          { label: "Formats", value: "4" },
          { label: "Champs", value: "8" },
          { label: "Cas calculé", value: "1" },
          { label: "Ordre imposé", value: "Aucun" },
          { label: "Prix / délai", value: "À cadrer" },
          { label: "Lecture", value: guide.readTimeMin + " min" },
        ]}
        author={{
          initials: TEAM.quentin.initials,
          name: TEAM.quentin.fullName,
          role: TEAM.quentin.role,
          profileUrl: "/equipe#fondateur",
        }}
        toc={toc}
        tocLabel="Sommaire"
        faqTitle="Questions fréquentes sur prototype, POC, pilote et MVP"
        faqItems={faqItems}
        faqMeta={{
          eyebrow: "Questions fréquentes",
          titleStart: "Commencez par la question",
          titleEm: "\u2009qui bloque\u2009",
          titleEnd: "votre décision.",
          subtitle:
            "Chaque réponse garde la portée exacte de ce que le test permet de conclure, du niveau de détail jusqu’aux données et aux droits.",
        }}
        strategyCta={{
          titleStart: "Décrivez la décision et",
          titleEm: "\u2009ce qui la bloque",
          description:
            "Indiquez le cas, les personnes concernées, la preuve attendue et ce qui vous ferait arrêter. La réponse peut être un prototype, un POC, un pilote, un MVP, un test manuel, un outil existant ou un report ; elle ne vaut ni devis automatique, ni promesse de délai.",
          badges: [
            "Décision écrite avant le livrable",
            "Un arrêt reste une réponse valable",
          ],
          ctaLabel: "Décrire l’expérience à cadrer",
          ctaHref: "/demarrer-un-projet",
          showPhoneCta: false,
        }}
        legalSources={[
          {
            source: "GOV.UK · Making prototypes · 18 octobre 2016",
            href: "https://www.gov.uk/service-manual/design/making-prototypes",
            description:
              "Le Service Manual propose de prototyper pour explorer et tester des conceptions, avec la fidélité adaptée au besoin. Il avertit qu’un prototype codé peut ne pas respecter les standards d’un service réel et ne doit pas être copié automatiquement en production. Ce cadre GOV.UK n’est pas une norme universelle.",
          },
          {
            source: "GOV.UK · How the alpha phase works",
            href: "https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works",
            description:
              "L’alpha cible les hypothèses les plus risquées et peut ne prototyper que les parties difficiles. Le vocabulaire alpha/beta reste propre à ce cadre de delivery.",
          },
          {
            source: "GOV.UK · User research in alpha · mise à jour 2017",
            href: "https://www.gov.uk/service-manual/user-research/user-research-in-alpha",
            description:
              "La recherche doit couvrir des utilisateurs et besoins d’accès variés, ainsi que l’assistance et les étapes hors ligne. La page ne fournit aucun nombre universel de testeurs.",
          },
          {
            source: "UK Cabinet Office · Testing and piloting services",
            href: "https://www.procurementpathway.civilservice.gov.uk/documents/best-practice/testing-and-piloting-services-sourcing-playbook/business-need",
            description:
              "La note institutionnelle présente les tests et pilotes comme des moyens d’obtenir des preuves sur ce qui fonctionne dans un service. Son contexte est la commande publique britannique, pas une qualification contractuelle française.",
          },
          {
            source: "EURAXESS · Research result valorisation · TRL et POC",
            href: "https://euraxess.ec.europa.eu/career-development/researchers/manual-major-steps-for-research-valorisation",
            description:
              "La ressource décrit la preuve de concept comme une démonstration de faisabilité et utilise aussi le mot prototype à d’autres niveaux de maturité. Ce cadre de recherche illustre des frontières contextuelles, sans imposer un ordre à un SaaS.",
          },
          {
            source: "Eric Ries / Lean Startup Co. · What is an MVP?",
            href: "https://leanstartup.co/resources/articles/what-is-an-mvp/",
            description:
              "L’auteur rattache le MVP à l’apprentissage validé sur les clients avec le moins d’effort nécessaire, et non à la fabrication automatique du plus petit logiciel possible. La méthode ne garantit aucune adoption.",
          },
          {
            source: "CNIL · Encadrer les développements · 14 mars 2024",
            href: "https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques",
            description:
              "La CNIL recommande d’intégrer sécurité et protection des données dès la conception, de séparer les environnements et de privilégier des données fictives ou anonymisées. Des données réelles en préproduction appellent des précautions renforcées et un examen du cas.",
          },
          {
            source: "CNIL · Anonymisation des données · 19 mai 2020",
            href: "https://www.cnil.fr/fr/technologies/lanonymisation-de-donnees-personnelles",
            description:
              "L’anonymisation rend l’identification impossible en pratique et de manière irréversible. Remplacer les identifiants directs produit souvent des données pseudonymisées : elles restent personnelles et soumises au RGPD.",
          },
          {
            source: "CNIL · Licéité et bases légales",
            href: "https://www.cnil.fr/fr/les-bases-legales/liceite-essentiel-sur-les-bases-legales",
            description:
              "La base légale doit être déterminée avant le traitement, finalité par finalité et selon le cas. Le consentement n’est ni automatique, ni supérieur aux autres bases prévues par le RGPD.",
          },
          {
            source: "Légifrance · CPI, articles L131-3 et L113-9",
            href: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958",
            description:
              "L131-3 encadre la transmission des droits et L113-9 vise, sous ses conditions, les logiciels créés par des employés. Ces textes ne qualifient pas seuls tous les prestataires, licences, données ou actifs d’un test.",
          },
        ]}
        disclaimer={{
          eyebrow: "Portée du guide",
          title: "Ces quatre noms restent des repères de travail",
          description:
            "Leurs frontières servent à éviter les malentendus ; elles ne constituent aucune définition officielle commune. Le cas Lys Documents, son jeu de documents, son seuil et ses résultats sont entièrement fictifs. Le brouillon reste privé : aucune date de première publication n’est inventée, et sa présence locale ne prouve ni déploiement, ni publication, ni indexation.",
        }}
        relatedGuides={[
          {
            label: "Valider le problème et l’engagement avant de développer",
            href: "/guides/valider-idee-saas-avant-developper",
          },
          {
            label: "Définir ce que le premier test SaaS doit contenir",
            href: "/guides/mvp-saas-quoi-inclure",
          },
          {
            label: "Prioriser ensuite le prochain lot de fonctionnalités",
            href: "/guides/prioriser-fonctionnalites-mvp-saas",
          },
          {
            label: "Choisir l’équipe une fois la prochaine phase nommée",
            href: "/guides/agence-saas-ou-freelance",
          },
        ]}
        relatedGuidesLabel="4 décisions voisines, sans les confondre"
      >
        <GuidePremiumSection
          id="reponse"
          number="01"
          label="Réponse directe"
          title="Partez de la question qui bloque la décision"
        >
          <p>
            Vous n’avez pas besoin des quatre formats pour avancer. Si une
            personne ne comprend pas le parcours, montrez-lui un{" "}
            <strong>prototype</strong>. Une contrainte technique précise appelle
            une <strong>preuve de concept (POC)</strong>. Le{" "}
            <strong>pilote</strong> place le dispositif dans un contexte réel
            mais borné. Le <strong>produit minimum viable (MVP)</strong> cherche
            un apprentissage défini auprès des personnes visées.
          </p>
          <p>
            Ils ne forment aucune file d’attente obligatoire. Le MVP doit
            permettre d’interpréter un comportement, mais il n’exige un usage
            répété que si l’hypothèse porte sur le retour. Selon la question,
            vous pouvez aussi sauter un format ou ne rien construire.
          </p>
          <p>
            Commencez par cette phrase : « Nous déciderons ______ si ______ est
            observé par ______ dans le cas ______ ; nous arrêterons si ______. »
            Tant qu’elle reste impossible à compléter, construire plus grand
            ajoute du coût sans clarifier la décision. Un entretien, une
            simulation manuelle ou un outil déjà disponible peut être le test
            juste.
          </p>

          <Image
            src="/guides/mvp-prototype-ou-poc/objectif-preuve-public-passage-16x9.svg"
            alt="Quatre cartes relient prototype, POC, pilote et MVP à leur question, leur preuve, les personnes à observer et leur condition de passage"
            width={1600}
            height={900}
            sizes="(max-width: 1024px) 100vw, 760px"
            className="not-prose my-8 h-auto w-full rounded-2xl border border-zinc-200 dark:border-zinc-800"
            priority
          />

          <GuidePremiumMemo title="La règle de choix">
            <p>
              L’inconnue dominante vient en premier. Identifiez qui peut la
              réduire, ce que vous devrez observer et le résultat qui vous
              ferait arrêter. Vous pourrez alors nommer le livrable.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="matrice"
          number="02"
          label="Matrice de choix"
          title="Comparez les quatre formats avec les mêmes questions"
        >
          <p>
            Lisez cette matrice comme un repère de travail. Demander un POC tout
            en attendant une preuve d’adoption mélange deux questions ; financer
            un MVP pour vérifier la compréhension d’un écran va trop loin.
            Adaptez chaque formulation à votre cas et gardez les exclusions
            visibles. Il ne s’agit pas d’une norme.
          </p>

          <GuideTable
            caption="Matrice de choix par question et preuve attendue"
            headers={[
              "Format et objectif",
              "Preuve attendue",
              "Personnes à observer",
              "Condition de passage ou d’arrêt",
            ]}
            rows={[
              [
                "Prototype · comprendre ou parcourir",
                "Tâches observées, hésitations, erreurs de compréhension et corrections proposées.",
                "Personnes représentatives du rôle étudié, avec les besoins d’accès pertinents.",
                "Passer si les tâches critiques deviennent compréhensibles ; sinon corriger, réduire ou abandonner le parcours.",
              ],
              [
                "POC · franchir une contrainte technique",
                "Mesures reproductibles sur un cas borné, erreurs et limites comprises.",
                "Équipe technique et responsable métier capables de valider le jeu d’essai et le seuil.",
                "Passer si le seuil écrit est atteint sur le cas prévu ; sinon changer l’hypothèse ou arrêter cette voie.",
              ],
              [
                "Pilote · tenir dans le vrai travail",
                "Usage, interventions, charge, incidents, assistance et retour au fonctionnement précédent observés.",
                "Groupe autorisé dans une équipe, un site ou une période explicitement bornés.",
                "Passer si l’usage et l’exploitation tiennent sans déclencher une condition d’arrêt ; sinon revenir en arrière, réduire ou reporter.",
              ],
              [
                "MVP · obtenir un apprentissage client",
                "Comportement prévu dans la fiche : usage, engagement, refus, sortie ou retour si l’hypothèse porte sur la répétition.",
                "Personnes correspondant au public visé, face à une expérience assez crédible pour interpréter leur comportement.",
                "Passer si le signal défini avant le test est observé ; s’il porte sur le retour, l’usage doit être réellement répété. Sinon modifier, reporter ou arrêter.",
              ],
            ]}
          />

          <InfoBox
            variant="amber"
            title="Deux inconnues peuvent exiger deux tests"
          >
            <p>
              Un POC peut prouver qu’une extraction fonctionne sans montrer que
              les opérateurs savent corriger ses erreurs. Faites alors un test
              technique et un prototype d’interaction séparés. Une moyenne ou un
              mot unique ne doit pas masquer l’échec de l’un des deux.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="fiche"
          number="03"
          label="Avant de construire"
          title="Écrivez l’expérience en huit champs vérifiables"
        >
          <p>
            La fiche permet de discuter la demande avant que l’équipe produise
            un écran ou du code. Elle sépare la décision de la preuve et garde
            les inconnues visibles : une donnée manquante ne devient ni zéro, ni
            « oui ».
          </p>
          <p>
            Faites relire les huit champs par la personne qui prendra la
            décision et par celle qui devra exploiter le résultat.
          </p>

          <Image
            src="/guides/mvp-prototype-ou-poc/fiche-experience-4x3.svg"
            alt="Fiche en huit champs : décision, inconnue, cas, personnes, observation, passage et arrêt, responsabilités, remise"
            width={1200}
            height={900}
            sizes="(max-width: 1024px) 100vw, 720px"
            className="not-prose my-8 h-auto w-full rounded-2xl border border-zinc-200 dark:border-zinc-800"
          />

          <GuidePremiumMemo title="Modèle copiable avant le premier livrable">
            <pre className="overflow-x-auto whitespace-pre-wrap rounded-xl bg-white p-4 text-xs leading-relaxed text-zinc-800 ring-1 ring-zinc-200 dark:bg-zinc-950 dark:text-zinc-100 dark:ring-zinc-800">
              {[
                "1. Décision que ce test doit rendre possible :",
                "2. Inconnue principale et hypothèse que le test peut contredire :",
                "3. Cas inclus / cas explicitement exclus :",
                "4. Personnes capables de produire la preuve :",
                "5. Événement ou mesure et méthode de collecte :",
                "6. Condition de passage / condition d’arrêt :",
                "7. Responsable, données, accès, sécurité et retour arrière :",
                "8. Résultats, limites, actifs, accès et prochaine décision remis :",
              ].join("\n")}
            </pre>
          </GuidePremiumMemo>

          <GuideTable
            caption="Contrôles de qualité de la fiche d’expérience"
            headers={[
              "Champ fragile",
              "Formulation insuffisante",
              "Réécriture vérifiable",
            ]}
            rows={[
              [
                "Preuve",
                "« Avoir de bons retours »",
                "Nommer une tâche, un événement, une mesure, les refus et la méthode de collecte.",
              ],
              [
                "Personnes",
                "« Quelques utilisateurs »",
                "Nommer les rôles, les situations et ce que les absents empêchent de conclure.",
              ],
              [
                "Passage",
                "« Si ça marche »",
                "Écrire le seuil ou le comportement attendu et la décision qu’il autorise — rien de plus.",
              ],
              [
                "Arrêt",
                "« On verra »",
                "Lister la condition d’arrêt, le retour arrière, le responsable et la prochaine vérification possible.",
              ],
              [
                "Remise",
                "« Le livrable »",
                "Inventorier résultats bruts, limites, maquette ou code, licences, accès et décision datée.",
              ],
            ]}
          />

          <h3>Le nombre de fichiers ne dit rien sur la valeur du test</h3>
          <p>
            Commencez par la décision que le test rend possible, puis estimez
            tout l’effort nécessaire pour obtenir une preuve crédible. Sans
            données de charge ou de prix propres au cas, gardez le montant « à
            cadrer » au lieu d’importer une moyenne commerciale.
          </p>

          <GuideTable
            caption="Familles à estimer avant de comparer le coût de deux tests"
            headers={[
              "Famille",
              "Ce qu’il faut compter",
              "Risque si elle est oubliée",
            ]}
            rows={[
              [
                "Valeur de décision",
                "Investissement, engagement ou voie que la preuve permettra d’accepter, réduire ou refuser.",
                "Un livrable est produit sans décision précise à prendre.",
              ],
              [
                "Préparation et construction",
                "Cadrage, jeu d’essai, maquette ou code, intégrations, contrôle et documentation.",
                "Le test paraît court parce que sa préparation est cachée.",
              ],
              [
                "Participation",
                "Recrutement, disponibilité métier, consentement si nécessaire, observation et analyse.",
                "Les personnes disponibles ne peuvent pas produire la preuve attendue.",
              ],
              [
                "Données et exploitation",
                "Environnements, accès, sécurité, interventions, outils, aide et retour arrière.",
                "Une réussite de démonstration masque une charge ou une exposition réelle.",
              ],
              [
                "Sortie et suite",
                "Rapport, actifs, licences, fermeture des accès, traitement des données et prochain test.",
                "Refaire, reprendre ou arrêter coûte plus cher que prévu.",
              ],
            ]}
          />
        </GuidePremiumSection>

        <GuidePremiumSection
          id="prototype"
          number="04"
          label="Interaction"
          title="Utilisez un prototype pour voir ce que la personne comprend et fait"
        >
          <p>
            Un prototype peut être un croquis, une succession d’écrans, une
            maquette cliquable ou une interaction codée. Sa fidélité doit servir
            la question : ajouter une base de données ou une animation
            n’améliore pas une preuve si vous cherchez seulement à savoir où une
            personne pense cliquer. Le{" "}
            <a
              href="https://www.gov.uk/service-manual/design/making-prototypes"
              target="_blank"
              rel="noopener noreferrer"
            >
              GOV.UK Service Manual sur les prototypes
            </a>{" "}
            recommande d’explorer et tester des conceptions avant le code de
            production et rappelle que le code de prototype peut ne pas avoir
            les mêmes standards.
          </p>

          <GuideTable
            caption="Ce qu’un prototype peut prouver et ce qu’il laisse ouvert"
            headers={["À observer", "Preuve utile", "Conclusion interdite"]}
            rows={[
              [
                "Compréhension",
                "La personne explique avec ses mots l’état, l’action et la conséquence.",
                "Elle adoptera ou paiera nécessairement le service.",
              ],
              [
                "Parcours",
                "Elle accomplit une tâche précise et les hésitations sont localisées.",
                "Le système est techniquement faisable ou performant.",
              ],
              [
                "Accessibilité du concept",
                "Les personnes et technologies d’assistance pertinentes participent au test prévu.",
                "Le futur produit est conforme ou accessible en production.",
              ],
              [
                "Alignement métier",
                "Les rôles repèrent les étapes, refus et informations manquantes.",
                "Les règles sont complètes ou juridiquement valides.",
              ],
            ]}
          />

          <InfoBox
            variant="blue"
            title="Une démonstration peut être prise pour le produit"
          >
            <p>
              Ne laissez pas une maquette publique être prise pour un service
              réel. Contrôlez son accès, bannissez les secrets et privilégiez
              des données fictives. Avant tout réemploi du code, vérifiez
              qualité, sécurité, performances, tests, composants et licences.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="poc"
          number="05"
          label="Faisabilité"
          title="Utilisez une preuve de concept pour tester une contrainte technique précise"
        >
          <p>
            Une preuve de concept, ou POC, n’a pas à simuler tout le produit.
            Elle doit répondre à une question technique qui pourrait faire
            abandonner ou modifier la voie envisagée : connecter un système,
            extraire une information, tenir une règle de calcul ou franchir une
            limite de compatibilité. La ressource{" "}
            <a
              href="https://euraxess.ec.europa.eu/career-development/researchers/manual-major-steps-for-research-valorisation"
              target="_blank"
              rel="noopener noreferrer"
            >
              EURAXESS sur la valorisation de recherche
            </a>{" "}
            emploie la preuve de concept pour vérifier une faisabilité. Son
            contexte et ses niveaux de maturité ne deviennent pas une séquence
            SaaS obligatoire.
          </p>

          <GuideTable
            caption="Les bornes minimales d’un POC exploitable"
            headers={["Borne", "Question à écrire", "Signal d’arrêt"]}
            rows={[
              [
                "Cas",
                "Quel jeu d’entrée et quelles variantes sont inclus ?",
                "Le jeu d’essai n’est pas autorisé, documenté ou cohérent avec le cas annoncé.",
              ],
              [
                "Mesure",
                "Quelle observation est reproduite, avec quel outil et quelle référence ?",
                "Le résultat dépend d’une manipulation cachée ou ne peut pas être reproduit.",
              ],
              [
                "Seuil",
                "Quel résultat autorise exactement quelle décision ?",
                "Le seuil est choisi après le résultat ou absorbe un cas critique.",
              ],
              [
                "Limites",
                "Quels cas, volumes, erreurs et dépendances restent hors preuve ?",
                "Une limite devient une promesse de couverture générale.",
              ],
              [
                "Remise",
                "Quelles mesures, instructions, erreurs et actifs permettront la revue ?",
                "Seule une démonstration orale subsiste.",
              ],
            ]}
          />

          <GuidePremiumMemo title="La réussite du POC ne vaut que pour la décision écrite">
            <p>
              Il autorise seulement la décision écrite dans sa fiche. Sécurité,
              exploitation, interface, charge, droits, coût et adoption peuvent
              rester entièrement inconnus.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="pilote"
          number="06"
          label="Contexte opérationnel"
          title="Utilisez un pilote pour observer le dispositif dans le vrai travail"
        >
          <p>
            Une faisabilité de laboratoire ne montre pas qui corrige une erreur,
            répond à une demande, surveille une dépendance ou remet l’activité
            en état. Un pilote borne le contexte — équipe, site, rôles, cas,
            période ou volume — et observe le service avec ses interventions
            humaines. La note du{" "}
            <a
              href="https://www.procurementpathway.civilservice.gov.uk/documents/best-practice/testing-and-piloting-services-sourcing-playbook/business-need"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cabinet Office sur les tests et pilotes
            </a>{" "}
            les traite comme des moyens de produire des preuves sur ce qui
            fonctionne ; elle n’impose pas une définition contractuelle
            française.
          </p>

          <GuideTable
            caption="Ce que le pilote doit rendre observable"
            headers={[
              "Dimension",
              "Preuve à conserver",
              "Question de retour en arrière",
            ]}
            rows={[
              [
                "Usage réel",
                "Tâches accomplies, refus, sorties et personnes concernées.",
                "Qui revient au processus précédent si le service bloque ?",
              ],
              [
                "Charge humaine",
                "Interventions manuelles, durée mesurée et rôle responsable.",
                "Le volume doublé reste-t-il traitable ou devient-il inconnu ?",
              ],
              [
                "Données et accès",
                "Jeux autorisés, droits, journaux utiles, conservation et suppression.",
                "Qui retire l’accès et restitue ou efface les données à la fin ?",
              ],
              [
                "Aide et incident",
                "Demandes, diagnostic, communication, résolution et limites.",
                "Comment signale-t-on une erreur et qui décide d’arrêter ?",
              ],
              [
                "Continuité",
                "Dépendances, sauvegarde utile au cas et exercice de retour arrière.",
                "Le fonctionnement limité ou manuel est-il réellement praticable ?",
              ],
            ]}
          />

          <InfoBox
            variant="amber"
            title="Des données réelles ne sont pas un raccourci neutre"
          >
            <p>
              La{" "}
              <a
                href="https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques"
                target="_blank"
                rel="noopener noreferrer"
              >
                CNIL recommande des données fictives ou anonymisées et des
                environnements séparés
              </a>
              . Ces précautions limitent le risque qu’un simple test expose les
              mêmes données et accès que le service en production.
            </p>
            <p>
              Masquer les noms ou les remplacer par des codes produit souvent
              des données <em>pseudonymisées</em>, qui restent personnelles. L’{" "}
              <a
                href="https://www.cnil.fr/fr/technologies/lanonymisation-de-donnees-personnelles"
                target="_blank"
                rel="noopener noreferrer"
              >
                anonymisation exige de rendre l’identification impossible en
                pratique et de façon irréversible
              </a>
              .
            </p>
            <p>
              Si le pilote nécessite des données réelles, expliquez pourquoi,
              réduisez-les et faites qualifier la finalité, le fondement
              juridique — la « base légale » au sens du RGPD —, les rôles, les
              accès, la sécurité, la conservation et la suppression. Cette base
              se choisit avant le traitement ; le consentement n’est pas
              automatique. L’environnement de préproduction, utilisé avant la
              mise en service, doit alors être sécurisé au même niveau que la
              production, après les tests préalables. Un pilote n’est pas
              conforme par son seul nom.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="mvp"
          number="07"
          label="Apprentissage client"
          title="Utilisez un MVP pour apprendre du comportement des personnes visées"
        >
          <p>
            Dans la formulation d’{" "}
            <a
              href="https://leanstartup.co/resources/articles/what-is-an-mvp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Eric Ries reprise par Lean Startup Co.
            </a>
            , le MVP sert à obtenir un apprentissage validé sur les clients avec
            l’effort nécessaire. « Minimum » ne désigne donc pas une version
            négligée de la vision complète.
          </p>
          <p>
            La version doit être suffisamment exploitable pour que le
            comportement observé réponde honnêtement à l’hypothèse. Les accès,
            les données, les refus, l’aide ou la sortie nécessaires au test ne
            disparaissent pas parce que la version est minimale.
          </p>
          <p>
            Cette définition n’impose pas un usage répété à tous les MVP. Un
            retour est exigé seulement lorsque c’est précisément ce que la fiche
            veut apprendre.
          </p>

          <GuideTable
            caption="Différencier l’apprentissage recherché de ses faux substituts"
            headers={["Hypothèse", "Observation utile", "Faux substitut"]}
            rows={[
              [
                "Premier comportement",
                "La personne visée accomplit, refuse ou abandonne l’action prévue dans une situation crédible.",
                "Elle dit seulement qu’elle l’utiliserait un jour.",
              ],
              [
                "Valeur",
                "Le résultat attendu est obtenu et relié à la promesse testée.",
                "L’interface plaît pendant une démonstration.",
              ],
              [
                "Retour",
                "Si l’hypothèse porte sur la répétition, la personne revient réellement dans la période et le contexte prévus.",
                "Un clic isolé est présenté comme adoption durable.",
              ],
              [
                "Fonctionnement du test",
                "Interventions humaines et dépendances sont tracées avec leurs limites.",
                "Le travail manuel caché est compté comme automatisation réussie.",
              ],
            ]}
          />

          <GuidePremiumCase
            initial="P+M"
            eyebrow="Chevauchement possible · deux preuves séparées"
            title="Un MVP limité à une équipe peut aussi être un pilote"
          >
            <p>
              Le MVP porte l’apprentissage client écrit dans la fiche ; si
              l’hypothèse concerne le retour, il observe si les personnes
              reviennent. Le pilote observe si l’équipe sait exploiter le
              dispositif, aider et revenir au fonctionnement précédent dans le
              périmètre. Une même version peut produire les deux preuves, mais
              l’échec opérationnel ne doit pas être compensé par un signal
              client — ni l’inverse.
            </p>
          </GuidePremiumCase>

          <p>
            Pour définir ensuite les capacités nécessaires à ce premier test,
            utilisez le guide{" "}
            <Link href="/guides/mvp-saas-quoi-inclure">
              sur le contenu d’un MVP SaaS
            </Link>
            . Il traite les parcours, accès, données, vente, aide, exploitation
            et sortie. Gardez ici la question d’apprentissage.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="cas"
          number="08"
          label="Exemple calculé"
          title="Un même besoin appelle des tests différents selon l’inconnue"
        >
          <GuidePremiumCase
            initial="LD"
            eyebrow="Exemple entièrement fictif · aucune expérience client"
            title="Lys Documents · extraire quatre champs de factures fournisseurs"
          >
            <p>
              Une PME fictive veut réduire la ressaisie. Dans cette version du
              cas, les opérateurs comprennent déjà le parcours ; l’inconnue
              porte sur l’extraction de quatre champs critiques. Le jeu de
              documents, le seuil, les résultats et les noms sont inventés pour
              rendre le calcul contrôlable. Ils ne décrivent aucune performance
              Hagnéré Code ni référence de marché.
            </p>
          </GuidePremiumCase>

          <p>
            La fiche prévoit un jeu d’essai de 40 documents autorisés et quatre
            champs de référence par document : fournisseur, numéro, date et
            total toutes taxes comprises (TTC). Un champ n’est compté exact que
            s’il correspond à la référence. Le seuil fictif est fixé avant
            l’observation à 152 champs exacts sur 160. Un jeu incomplet, une
            donnée non autorisée ou un résultat non reproductible déclenche un
            arrêt.
          </p>

          <FormulaBox>
            {[
              "POC LYS DOCUMENTS — EXEMPLE ENTIÈREMENT FICTIF",
              "",
              "contrôles prévus = 40 documents × 4 champs = 160",
              "contrôles exacts observés = 153",
              "taux de champs exacts = 153 ÷ 160 × 100 = 95,625 %",
              "contrôle inverse = 153 exacts + 7 inexacts = 160",
              "seuil fictif = 152 ÷ 160 × 100 = 95 %",
              "écart au seuil = 153 − 152 = 1 contrôle",
            ].join("\n")}
          </FormulaBox>

          <p>
            Le POC dépasse son seuil fictif d’un seul contrôle. La conclusion
            s’arrête là : faisabilité sur ce jeu de documents, ces champs et
            cette méthode. Elle ne prouve ni performance en production, ni
            sécurité, ni coût, ni capacité sur d’autres formats, ni adoption.
          </p>
          <p>
            Les sept erreurs restent dans le rapport ; elles ne sont pas
            effacées par le pourcentage. Leur répartition par champ et par
            document n’est pas fournie dans ce scénario : le taux global
            pourrait masquer toutes les erreurs sur le total TTC ou leur
            concentration sur quelques factures.
          </p>
          <p>
            Avant tout pilote, il faut donc ventiler les sept erreurs et
            appliquer les éventuels cas bloquants écrits dans la fiche.
          </p>

          <GuideTable
            caption="Quatre versions du cas Lys Documents selon la question"
            headers={[
              "Inconnue",
              "Format adapté",
              "Preuve décisive",
              "Étape suivante possible",
            ]}
            rows={[
              [
                "Les opérateurs savent-ils corriger un champ ?",
                "Prototype",
                "Tâches de correction observées, hésitations et refus compris.",
                "Corriger le parcours ou arrêter cette interface.",
              ],
              [
                "Les quatre champs sont-ils extractibles ?",
                "POC",
                "160 contrôles, méthode reproductible, erreurs et seuil écrits.",
                "Ventiler les sept erreurs, puis étudier un pilote sans prétendre que la production est prête.",
              ],
              [
                "Qui corrige et revient à la saisie manuelle ?",
                "Pilote",
                "Charge, erreurs, rôles, assistance et retour arrière observés.",
                "Élargir prudemment ou revenir au processus précédent.",
              ],
              [
                "Les équipes reviennent-elles traiter leurs factures ?",
                "MVP",
                "Usage réel répété et résultat obtenu sur la promesse testée.",
                "Continuer, modifier l’offre ou arrêter.",
              ],
              [
                "Le processus change encore chaque semaine",
                "Aucun logiciel pour l’instant",
                "Observation, entretien, simulation ou outil existant.",
                "Stabiliser l’hypothèse avant toute construction.",
              ],
            ]}
          />

          <InfoBox
            variant="blue"
            title="Stress test du volume et de la dépendance"
          >
            <p>
              Si le volume double, ne supposez pas que le temps humain reste nul
              : mesurez ou marquez-le « à vérifier ». Si le service
              indispensable est indisponible, distinguez échec, résultat inconnu
              et fonctionnement limité. Un cas bloquant ou des erreurs
              concentrées ne se compensent pas dans un taux moyen.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="decision"
          number="09"
          label="Sortie du test"
          title="Ne poursuivez que ce que la preuve autorise"
        >
          <p>
            Un test n’est terminé ni par une démonstration réussie, ni par la
            livraison d’un dépôt. La personne nommée dans la fiche relit les
            preuves, les résultats contraires, les limites et les conditions
            d’arrêt. Elle choisit ensuite une action dont la portée ne dépasse
            pas ce que le test a réellement observé.
          </p>

          <Image
            src="/guides/mvp-prototype-ou-poc/poursuivre-reduire-arreter-1x1.svg"
            alt="Trois sorties après revue : poursuivre le périmètre prouvé, réduire ou refaire le test, reporter ou arrêter"
            width={900}
            height={900}
            sizes="(max-width: 1024px) 100vw, 640px"
            className="not-prose my-8 h-auto w-full rounded-2xl border border-zinc-200 dark:border-zinc-800"
          />

          <GuideTable
            caption="Les décisions possibles après revue de la preuve"
            headers={[
              "Décision",
              "Quand elle est défendable",
              "Trace à conserver",
            ]}
            rows={[
              [
                "Poursuivre le périmètre prouvé",
                "La condition de passage est atteinte, sans condition d’arrêt déclenchée et sans élargir la conclusion.",
                "Preuve, limites, responsable, prochaine inconnue et nouveau seuil.",
              ],
              [
                "Réduire ou refaire le test",
                "Le résultat est ambigu, le jeu d’essai insuffisant ou deux inconnues ont été mélangées.",
                "Cause, test plus petit, nouvelle méthode et coût à cadrer.",
              ],
              [
                "Reporter",
                "Une donnée, une autorisation, une personne ou une dépendance manque.",
                "Inconnue, responsable, événement de réouverture et mesures conservatoires.",
              ],
              [
                "Arrêter",
                "La voie échoue, le risque reste inacceptable ou un test moins coûteux suffit.",
                "Résultats contraires, actifs à récupérer, accès à fermer et données à traiter.",
              ],
            ]}
          />

          <InfoBox
            variant="blue"
            title="Élargir le périmètre ouvre une nouvelle expérience"
          >
            <p>
              Passer d’une équipe à plusieurs sites, doubler le volume ou
              ajouter des données et dépendances ne prolonge pas mécaniquement
              le résultat précédent. Écrivez ce qui change, les mesures
              d’acceptation, la personne qui surveille et le retour arrière.
              Lorsque c’est possible, ne changez qu’une dimension à la fois ;
              sinon vous ne saurez plus laquelle explique l’échec.
            </p>
          </InfoBox>

          <GuidePremiumMemo title="Inventaire de remise avant de fermer le test">
            <ul>
              <li>
                question, jeu d’essai, méthode, résultats bruts et exclusions ;
              </li>
              <li>erreurs, interventions humaines et dépendances ;</li>
              <li>
                maquette ou code, historique, instructions et tests utiles ;
              </li>
              <li>
                comptes, propriétaires, secrets à changer et accès à fermer ;
              </li>
              <li>
                données à restituer, conserver ou supprimer selon le cadre ;
              </li>
              <li>composants, licences, auteurs et droits à qualifier ;</li>
              <li>décision signée, limites et prochaine inconnue.</li>
            </ul>
          </GuidePremiumMemo>

          <p>
            En droit français, l’{" "}
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
              target="_blank"
              rel="noopener noreferrer"
            >
              article L131-3 du Code de la propriété intellectuelle
            </a>{" "}
            demande notamment d’identifier les droits cédés et de délimiter leur
            exploitation. L’{" "}
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818"
              target="_blank"
              rel="noopener noreferrer"
            >
              article L113-9
            </a>{" "}
            vise les logiciels créés par des employés dans les conditions du
            texte. Ces articles ne règlent pas seuls un contrat de prestation,
            les composants tiers ou les données : faites qualifier les actifs
            importants pour la suite.
          </p>

          <GuidePremiumCase
            initial="!"
            eyebrow="Dernière vérification"
            title="Une inconnue importante ne devient jamais zéro"
          >
            <p>
              Si le prix, le délai, le volume, la disponibilité d’une personne,
              la donnée, la sécurité, le droit ou la charge restent inconnus,
              écrivez « à vérifier », le responsable et la prochaine preuve. La
              décision peut rester « reporter » ou « arrêter ».
            </p>
          </GuidePremiumCase>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
