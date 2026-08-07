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
import type { GuidePremiumFaqCategory } from "@/components/guides/guide-premium-types";
import { GuidesShell } from "@/components/guides/GuidesShell";
import {
  buildGuideMetadata,
  buildGuideStructuredData,
} from "@/lib/guide-page-seo";
import { formatGuideDate, getGuide } from "@/lib/guides";
import { TEAM } from "@/lib/team";
import { ValidationTestPlanner } from "./validation-test-planner";

const guide = getGuide("valider-idee-saas-avant-developper");
const breadcrumbName = "Valider une idée SaaS avant de développer";

export const metadata = buildGuideMetadata(
  guide,
  "Tester une idée SaaS sans construire le produit",
);

const structuredData = buildGuideStructuredData(guide, breadcrumbName);

const toc = [
  {
    id: "reponse-courte",
    number: "01",
    label: "Comprendre ce que valider veut dire",
    shortLabel: "Commencer",
  },
  {
    id: "hypotheses",
    number: "02",
    label: "Séparer les six inconnues",
    shortLabel: "Séparer",
  },
  {
    id: "entretiens",
    number: "03",
    label: "Enquêter sans vendre l’idée",
    shortLabel: "Enquêter",
  },
  {
    id: "tests",
    number: "04",
    label: "Choisir un test sans produit",
    shortLabel: "Tester",
  },
  {
    id: "engagement",
    number: "05",
    label: "Comparer les niveaux d’engagement",
    shortLabel: "Interpréter",
  },
  {
    id: "carte-test",
    number: "06",
    label: "Écrire la carte de test",
    shortLabel: "Écrire",
  },
  {
    id: "cas-complet",
    number: "07",
    label: "Voir un exemple qui refuse le développement",
    shortLabel: "Exemple",
  },
  {
    id: "cadre",
    number: "08",
    label: "Prospecter et protéger les données",
    shortLabel: "Protéger",
  },
  {
    id: "decision",
    number: "09",
    label: "Choisir la suite après le test",
    shortLabel: "Décider",
  },
];

const faqCategories: GuidePremiumFaqCategory[] = [
  {
    key: "avant-test",
    num: "01",
    label: "Avant le test",
    items: [
      {
        question: "Comment savoir si une idée SaaS est bonne ?",
        answer:
          "On ne juge pas une idée en bloc. Vérifiez séparément le problème, l’acheteur, l’accès aux prospects, le prix, l’usage et la faisabilité. Vous pouvez passer à l’étape suivante lorsque les observations recueillies auprès du bon segment franchissent les critères écrits avant le test.",
      },
      {
        question: "Combien d’entretiens faut-il mener ?",
        answer:
          "Il n’existe pas de nombre valable pour tous les marchés. Écrivez d’abord la décision à prendre, le segment, la diversité nécessaire et le fait qui pourrait contredire votre idée. Poursuivez tant que les nouveaux entretiens changent encore votre compréhension ; ne transformez pas un total arbitraire en preuve.",
      },
      {
        question: "Doit-on faire signer un accord de confidentialité ?",
        answer:
          "Seulement si les informations réellement échangées le justifient et si l’autre partie l’accepte. Pour comprendre un problème, décrivez d’abord le contexte, les conséquences et le processus sans révéler votre secret de fabrication. Un contrat doit être adapté au cas ; ce guide n’est pas un modèle juridique.",
      },
    ],
  },
  {
    key: "preuve",
    num: "02",
    label: "Tester et interpréter",
    items: [
      {
        question: "Une liste d’attente valide-t-elle la demande ?",
        answer:
          "Non. Elle renseigne la compréhension d’une promesse et une action légère dans un canal donné. Sa portée s’arrête là : budget, pouvoir de décision et usage après achat restent inconnus. Traitez-la comme une information de canal ou d’intérêt, puis demandez un engagement plus proche du risque étudié.",
      },
      {
        question: "Faut-il offrir le premier pilote ?",
        answer:
          "Un pilote gratuit peut aider à observer l’usage, mais renseigne mal l’acceptation du prix. Si le risque principal est commercial, présentez une offre explicite à un acheteur habilité. Si un pilote gratuit est nécessaire, fixez sa durée, les responsabilités, la contrepartie attendue et le test payant qui suivra.",
      },
      {
        question: "Un paiement suffit-il à décider de développer ?",
        answer:
          "Non. Il renforce l’information sur l’achat dans ce contexte précis. L’usage répété, le renouvellement, la faisabilité et l’économie du futur service restent à tester. Vérifiez encore les inconnues qui pourraient rendre le produit inutilisable ou non soutenable.",
      },
    ],
  },
  {
    key: "decision",
    num: "03",
    label: "Décider de la suite",
    items: [
      {
        question: "Quand faut-il changer d’hypothèse plutôt qu’arrêter ?",
        answer:
          "Changez une hypothèse — autrement dit, pivotez — lorsqu’une partie importante résiste : le problème est observé, mais le payeur, le service proposé, l’accès aux prospects ou la manière de produire le résultat diffère. Arrêtez ou mettez en attente lorsque la question centrale reçoit une réponse négative selon le test prévu, ou lorsqu’une contrainte rend le projet inacceptable.",
      },
      {
        question: "Quelle différence entre prototype, MVP et produit final ?",
        answer:
          "Un prototype simule un parcours pour apprendre ; son code, s’il existe, n’est pas nécessairement destiné à la production. Un produit minimum viable fournit juste assez de service réel pour apprendre auprès de vrais utilisateurs. Le produit final suppose d’autres exigences de sécurité, de fiabilité, d’exploitation et de support.",
      },
      {
        question: "Quand demander un devis de développement ?",
        answer:
          "Lorsque les entreprises visées, le problème, l’acheteur, le résultat attendu et la prochaine question à tester sont assez précis pour comparer des offres équivalentes. Le devis doit distinguer prototype, pilote et production, et garder visibles les inconnues techniques ou juridiques au lieu de les chiffrer comme si elles étaient résolues.",
      },
    ],
  },
];

function BeforeFirstInterview() {
  const actions = [
    {
      step: "1",
      title: "Écrire la question décisive",
      text: "Une phrase précise que le test peut contredire, pas « mon idée plaît ».",
      href: "#hypotheses",
      linkLabel: "Séparer les six inconnues",
    },
    {
      step: "2",
      title: "Prévoir trois décisions",
      text: "Continuer, changer une hypothèse ou arrêter avant de voir les résultats.",
      href: "#carte-test",
      linkLabel: "Écrire les trois décisions",
    },
    {
      step: "3",
      title: "Choisir les bons rôles",
      text: "Utilisateur, acheteur et décideur ne sont pas interchangeables.",
      href: "#entretiens",
      linkLabel: "Préparer les entretiens",
    },
  ];

  return (
    <aside className="not-prose my-7 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="border-b border-zinc-200 bg-zinc-50 px-5 py-4 dark:border-zinc-800 dark:bg-zinc-900">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-300">
          Avant le premier entretien
        </p>
        <p className="mt-1 text-base font-semibold text-zinc-950 dark:text-white">
          Trois notes à écrire avant de chercher des réponses
        </p>
      </div>
      <ol className="grid gap-px bg-zinc-200 dark:bg-zinc-800 md:grid-cols-3">
        {actions.map((action) => (
          <li key={action.title} className="bg-white p-5 dark:bg-zinc-950">
            <span className="text-xs font-bold tabular-nums text-indigo-600 dark:text-indigo-300">
              Étape {action.step}
            </span>
            <p className="mt-2 text-sm font-semibold text-zinc-950 dark:text-white">
              {action.title}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {action.text}
            </p>
            <a
              href={action.href}
              className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-indigo-700 underline decoration-indigo-300 underline-offset-4 dark:text-indigo-300"
            >
              {action.linkLabel}
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}

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
          { label: "Décider avant de coder", variant: "dark" },
          { label: "SaaS B2B", variant: "neutral" },
          { label: "Outil sans envoi", variant: "success" },
          {
            label: `Mis à jour le ${formatGuideDate(guide.dateModified)}`,
            variant: "muted",
          },
        ]}
        heroTitle="Valider une idée SaaS"
        heroTitleEm="avant"
        heroTitleSuffix="de développer"
        heroDescription="Un SaaS est un logiciel utilisé en ligne, souvent payé par abonnement. Avant d’engager un budget de développement, vérifiez séparément le problème, l’acheteur, l’accès aux prospects, le prix, l’usage et ce qui est techniquement possible."
        stats={[
          { label: "Inconnues séparées", value: "6" },
          { label: "Tests sans produit", value: "6" },
          { label: "Seuil universel", value: "Aucun" },
          { label: "Outil · envoi", value: "Aucun" },
          { label: "Décisions possibles", value: "4" },
          { label: "Lecture", value: `${guide.readTimeMin} min` },
        ]}
        author={{
          initials: TEAM.quentin.initials,
          name: TEAM.quentin.fullName,
          role: TEAM.quentin.role,
          profileUrl: "/equipe#fondateur",
        }}
        sidebarHeroCta={{
          eyebrow: "Avant le développement",
          titleStart: "Choisir",
          titleEm: "le prochain test",
          description:
            "Décrivez les entreprises visées, le problème déjà observé et l’action qu’un prospect a accepté d’accomplir. L’échange sert à décider s’il faut une maquette, un pilote manuel, un essai technique ou aucun développement.",
          benefits: [
            "La question commerciale reste séparée de l’inconnue technique",
            "Vos conditions d’arrêt sont écrites avant le test",
            "Les informations manquantes restent visibles",
          ],
          primaryCtaLabel: "Décrire mon prochain test",
          primaryCtaHref: "/demarrer-un-projet",
          phoneLabel: "03 74 47 20 18",
          phoneHref: "tel:+33374472018",
        }}
        toc={toc}
        tocLabel="Du premier doute à la décision"
        mobileCtaLabel="Faire vérifier mon prochain test"
        sidebarContextCta={{
          eyebrow: "Idée SaaS B2B",
          title: "Vérifier mon prochain test",
          description:
            "Apportez ce qui doit être vrai, le rôle des personnes interrogées et le fait qui vous ferait changer d’avis.",
          benefits: [
            "Choisir un test adapté à la question",
            "Éviter de confondre intérêt, achat et usage",
            "Limiter la construction à ce qui doit être testé",
          ],
          ctaLabel: "Décrire mon prochain test",
          ctaHref: "/demarrer-un-projet",
          secondaryLabel: "03 74 47 20 18",
          secondaryHref: "tel:+33374472018",
        }}
        faqCategories={faqCategories}
        faqMeta={{
          eyebrow: "Questions fréquentes",
          titleStart: "Tester une idée",
          titleEm: "sans confondre",
          titleEnd: "intérêt et achat.",
          subtitle:
            "Des réponses courtes sur les entretiens, les engagements, les pilotes et la décision de construire.",
          ctaTitle: "Votre prochain test reste difficile à choisir ?",
          ctaDescription:
            "Décrivez ce qui doit être vrai, ce qui pourrait vous donner tort et l’engagement déjà obtenu.",
          ctaLabel: "Faire vérifier mon prochain test",
          ctaHref: "/demarrer-un-projet",
        }}
        legalSources={[
          {
            source: "Strategyzer · Test Card",
            href: "https://www.strategyzer.com/library/validate-your-ideas-with-the-test-card",
            description:
              "Méthode pour écrire l’hypothèse, le test, la mesure et le seuil avant l’expérience.",
          },
          {
            source: "Strategyzer · force des preuves",
            href: "https://www.strategyzer.com/library/business-testing-is-your-hypothesis-really-validated",
            description:
              "Distinction entre déclarations, comportements observés et engagements ; une preuve reste liée à l’hypothèse et au contexte testés.",
          },
          {
            source: "Steve Blank",
            href: "https://steveblank.com/2011/04/04/the-leanlaunch-pad-at-stanford-%E2%80%93-class-4-customer-hypotheses/",
            description:
              "Travail d’hypothèses client : utilisateurs, influenceurs, payeurs et décideurs peuvent être des personnes différentes.",
          },
          {
            source: "Bpifrance Création",
            href: "https://bpifrance-creation.fr/moment-de-vie/lean-startup",
            description:
              "Présentation du Lean Startup comme démarche itérative d’apprentissage avant investissement plus large.",
          },
          {
            source: "Bpifrance Création · valider son marché",
            href: "https://bpifrance-creation.fr/encyclopedie/letude-marche/valider-son-marche/valider-son-marche-lancer-son-activite",
            description:
              "Distinction entre intérêt déclaré, engagement concret et volonté d’achat, avec examen des solutions déjà présentes.",
          },
          {
            source: "GOV.UK Service Manual",
            href: "https://www.gov.uk/service-manual/design/making-prototypes",
            description:
              "Les prototypes servent à explorer et tester avant de construire ; leur code n’est pas du code de production par défaut.",
          },
          {
            source: "Lean Startup",
            href: "https://leanstartup.co/resources/articles/what-is-an-mvp/",
            description:
              "Définition du produit minimum viable comme version permettant un apprentissage validé avec le moins d’effort approprié.",
          },
          {
            source: "Y Combinator",
            href: "https://www.ycombinator.com/blog/ycs-essential-startup-advice/",
            description:
              "Conseil d’échanger directement avec les utilisateurs et d’accomplir manuellement ce qui n’a pas encore besoin d’être mis à l’échelle.",
          },
          {
            source: "CNIL · prospection",
            href: "https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique-sms-mms-et-automate-dappel",
            description:
              "Règles françaises de prospection électronique, notamment pour les professionnels : pertinence avec la fonction, information et opposition simple.",
          },
          {
            source: "CNIL · minimisation",
            href: "https://www.cnil.fr/fr/minimiser-les-donnees-collectees",
            description:
              "Ne collecter que les données adéquates, pertinentes et nécessaires à la finalité annoncée.",
          },
          {
            source: "INPI · e-Soleau",
            href: "https://www.inpi.fr/realiser-demarches/propriete-intellectuelle/se-preparer-au-depot-dune-e-soleau",
            description:
              "L’e-Soleau établit une date certaine pour une création ; elle ne crée pas à elle seule un titre de propriété industrielle.",
          },
        ]}
        disclaimer={{
          eyebrow: "Limites du guide",
          title: "Un guide pour tester, pas une garantie de marché",
          description:
            "Les seuils, montants et résultats du cas présenté sont entièrement fictifs et ne constituent pas des références de performance. Adaptez le protocole à votre marché. Les passages sur la prospection, les données, la confidentialité et la propriété intellectuelle donnent des repères généraux : faites valider votre situation particulière par les responsables et conseils compétents.",
        }}
      >
        <GuidePremiumSection
          id="reponse-courte"
          number="01"
          label="Point de départ"
          title="Valider ne signifie pas obtenir des compliments"
        >
          <p>
            Vous envisagez un SaaS — un logiciel utilisé en ligne, souvent payé
            par abonnement — et les premiers retours sont encourageants. Cela ne
            suffit pas pour engager un budget de développement. Un compliment,
            un clic ou un « pourquoi pas » ne répondent pas à la même question.
          </p>

          <p>
            Avant de construire, vérifiez séparément ce qui pourrait faire
            échouer le projet : le problème se produit-il vraiment dans les
            entreprises visées ? Pouvez-vous joindre d’autres prospects
            comparables ? Une personne habilitée peut-elle engager un budget ?
            Une offre précise déclenche-t-elle une action ? Le service sera-t-il
            utilisé ? Une contrainte de données, de sécurité ou d’intégration
            bloque-t-elle le résultat ?
          </p>

          <p>
            Commencez par une <strong>hypothèse</strong>, c’est-à-dire une
            phrase précise que le test peut contredire. Écrivez ensuite le test,
            ce que vous observerez et ce qui vous fera continuer, changer
            l’hypothèse ou arrêter, avant de connaître le résultat. C’est le
            principe de la{" "}
            <a
              href="https://www.strategyzer.com/library/validate-your-ideas-with-the-test-card"
              target="_blank"
              rel="noreferrer"
            >
              carte de test Strategyzer
            </a>
            . Aucun seuil ne convient à tous les projets : choisissez le vôtre
            selon la décision à prendre, le coût d’une erreur et les prospects
            que vous pouvez réellement joindre.
          </p>

          <p>
            Le but n’est pas d’accumuler des signes rassurants.{" "}
            <a
              href="https://bpifrance-creation.fr/encyclopedie/letude-marche/valider-son-marche/valider-son-marche-lancer-son-activite"
              target="_blank"
              rel="noreferrer"
            >
              Bpifrance Création rappelle
            </a>{" "}
            qu’un intérêt exprimé ne prouve pas à lui seul une demande et que
            l’étude doit aussi faire apparaître les fragilités du projet. Un bon
            test peut donc conclure « pas maintenant », « une solution existante
            suffit » ou « il faut d’abord changer l’hypothèse ».
          </p>

          <BeforeFirstInterview />

          <div className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-[#0b1020] dark:border-zinc-800">
            <Image
              src="/guides/valider-idee-saas-avant-developper/article-validation-16x9.webp"
              alt="Chemin de validation d’une idée SaaS, de l’hypothèse à la décision"
              width={1600}
              height={900}
              sizes="(max-width: 1024px) 100vw, 760px"
              className="h-auto w-full"
              priority
            />
          </div>

          <GuidePremiumMemo title="La phrase à compléter maintenant">
            <p>
              Nous pensons que <strong>[rôle précis]</strong> rencontre{" "}
              <strong>[problème observable]</strong> dans{" "}
              <strong>[contexte]</strong>. Nous changerons d’avis si{" "}
              <strong>[fait contraire]</strong> apparaît dans le test défini
              avant les entretiens.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="hypotheses"
          number="02"
          label="Décomposition"
          title="Séparez les six inconnues qui peuvent faire échouer le projet"
        >
          <p>
            « Les PME ont besoin de mon outil » mélange un segment, un problème,
            une solution et une vente. Comme elle affirme tout à la fois, aucun
            test simple ne peut la contredire. Commencez par une seule question
            : qui rencontre quel problème, dans quel contexte, et quel fait vous
            ferait changer d’avis ?{" "}
            <a
              href="https://www.strategyzer.com/library/mastering-business-testing-formulating-strong-hypotheses"
              target="_blank"
              rel="noreferrer"
            >
              Strategyzer recommande
            </a>{" "}
            justement de formuler des hypothèses précises, testables et
            distinctes.
          </p>

          <GuideTable
            caption="Six questions à examiner séparément avant de développer un SaaS"
            headers={[
              "Question",
              "Question à trancher",
              "Observation utile",
              "Confusion à éviter",
            ]}
            rows={[
              [
                "Problème",
                "Un épisode coûteux ou pénible se produit-il vraiment dans ce segment ?",
                "Récit récent, conséquence et solution actuelle",
                "Demander si l’idée semble intéressante",
              ],
              [
                "Acheteur",
                "Qui peut décider, signer et engager le budget ?",
                "Parcours d’achat réel et échange avec la personne habilitée",
                "Interroger seulement l’utilisateur",
              ],
              [
                "Accès aux prospects",
                "Pouvez-vous atteindre le segment de manière répétable et licite ?",
                "Source des contacts, rôles atteints, réponses, rendez-vous, effort et coût du recrutement",
                "Compter du trafic non qualifié",
              ],
              [
                "Prix",
                "L’offre et ses conditions déclenchent-elles un engagement ?",
                "Objections à une proposition explicite, essai payant ou commande",
                "Prendre une inscription gratuite pour un achat",
              ],
              [
                "Usage",
                "Le résultat est-il utilisé dans une situation réelle ?",
                "Tâche accomplie, retour au service, erreur et abandon observés",
                "Confondre démonstration et adoption",
              ],
              [
                "Faisabilité",
                "Une contrainte de données, d’intégration ou de sécurité bloque-t-elle ?",
                "Essai technique borné sur l’inconnue la plus dangereuse",
                "Coder toute l’interface pour tester une API",
              ],
            ]}
          />

          <h3>Utilisateur, acheteur et décideur peuvent être distincts</h3>
          <p>
            Dans un SaaS B2B, la personne qui subit le problème peut ne jamais
            voir la facture. Le responsable d’équipe peut recommander l’outil,
            les achats négocier, la sécurité opposer une condition et la
            direction signer.{" "}
            <a
              href="https://steveblank.com/2011/04/04/the-leanlaunch-pad-at-stanford-%E2%80%93-class-4-customer-hypotheses/"
              target="_blank"
              rel="noreferrer"
            >
              Steve Blank distingue ces rôles
            </a>{" "}
            dans le travail d’hypothèses client. Notez pour chacun : ce qu’il
            gagne, ce qu’il risque, ce qu’il peut décider et les faits qu’il
            peut vérifier.
          </p>

          <InfoBox
            variant="amber"
            title="Une réponse positive ne règle pas les cinq autres questions"
          >
            <p>
              Un prototype compris répond en partie à la question de l’usage. Le
              budget, l’accès aux données et le renouvellement restent ouverts.
              Après chaque résultat, rayez seulement l’inconnue réellement
              examinée et choisissez la suivante.
            </p>
          </InfoBox>

          <h3>
            Vérifiez pourquoi le tableur, le logiciel ou le prestataire actuel
            ne suffit plus
          </h3>
          <p>
            Un problème réel ne crée pas automatiquement une place pour un
            nouveau SaaS. Le tableur, le logiciel déjà acheté, un prestataire ou
            le fait de ne rien changer peuvent rester préférables. Demandez ce
            qui a déjà été essayé, ce qui empêche réellement de continuer ainsi
            et quel coût ou risque justifierait un changement. Si une offre
            existante répond convenablement au besoin, l’intégrer, la paramétrer
            ou renoncer au développement est une conclusion valide.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="entretiens"
          number="03"
          label="Terrain"
          title="Pendant les entretiens, faites raconter un épisode passé"
        >
          <p>
            Ne présentez pas d’abord la solution. Demandez à la personne de
            reconstruire un épisode réel : le déclencheur, l’ordre des actions,
            les personnes impliquées, les conséquences et ce qu’elle fait
            aujourd’hui pour s’en sortir. Une opinion sur un futur produit est
            facile à donner. Ce qu’une personne a déjà fait, ou accepte
            réellement de faire, apporte une information plus concrète sur la
            question commerciale étudiée, comme l’explique le{" "}
            <a
              href="https://www.strategyzer.com/library/business-testing-is-your-hypothesis-really-validated"
              target="_blank"
              rel="noreferrer"
            >
              travail de Strategyzer sur la force des preuves
            </a>
            .
          </p>

          <h3>Sept questions qui évitent de vendre votre idée</h3>
          <ol>
            <li>
              « Racontez-moi la dernière fois que ce problème s’est produit. »
            </li>
            <li>
              « Qu’est-ce qui a déclenché le travail, puis que s’est-il passé ?
              »
            </li>
            <li>
              « Qui est intervenu et qui a constaté que le résultat était bon ?
              »
            </li>
            <li>
              « Quelle conséquence concrète a eu le retard, l’erreur ou
              l’abandon ? »
            </li>
            <li>
              « Avec quoi le traitez-vous aujourd’hui ? Qu’avez-vous déjà essayé
              ? »
            </li>
            <li>
              « Qui choisirait une autre solution, qui la contrôlerait et qui
              pourrait engager le budget ? »
            </li>
            <li>
              « Puis-je revoir un exemple anonymisé, observer la prochaine
              occurrence ou parler au rôle suivant ? »
            </li>
          </ol>

          <p>
            Évitez « utiliseriez-vous une application qui… ? », « combien
            paieriez-vous ? » et « trouvez-vous cette idée utile ? ». Ces
            formulations invitent la personne à vous encourager ou à imaginer un
            comportement. Si vous cherchez à savoir si le prix est acceptable,
            présentez plus tard une offre réelle, avec un service et des
            conditions précises, à quelqu’un qui peut décider.
          </p>

          <GuideTable
            caption="Séparer ce qui a été observé de ce qui a été interprété"
            headers={["Dans vos notes", "Exemple", "Statut"]}
            rows={[
              [
                "Fait observé",
                "La personne ouvre trois dossiers et reconstitue la chronologie.",
                "Comportement daté, vu pendant la séance",
              ],
              [
                "Fait rapporté",
                "Elle raconte qu’une pièce manquante a retardé le contrôle précédent.",
                "Déclaration à recouper, avec date et contexte",
              ],
              [
                "Interprétation",
                "Nous pensons que la coordination est le problème prioritaire.",
                "Hypothèse de l’équipe, jamais déguisée en verbatim",
              ],
              [
                "Inconnu",
                "Le décideur accepterait-il un pilote payant ?",
                "Prochaine question à tester",
              ],
            ]}
          />

          <InfoBox
            variant="blue"
            title="Recrutez sur un comportement, pas sur la politesse"
          >
            <p>
              Cherchez des personnes appartenant au segment et ayant rencontré
              récemment la situation étudiée. Documentez aussi les refus et les
              cas où le problème ne mérite aucune action : ils protègent contre
              un échantillon composé uniquement de convaincus.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="tests"
          number="04"
          label="Expériences"
          title="Choisissez le test le plus simple pour la question à trancher"
        >
          <p>
            « Sans produit » ne signifie pas « sans travail ». Vous pouvez
            observer un processus, simuler une interface, délivrer le résultat
            manuellement, présenter une offre ou isoler une incertitude
            technique.{" "}
            <a
              href="https://www.ycombinator.com/blog/ycs-essential-startup-advice/"
              target="_blank"
              rel="noreferrer"
            >
              Y Combinator recommande
            </a>{" "}
            notamment de parler directement aux utilisateurs et de réaliser
            manuellement ce qui n’a pas encore besoin d’être mis à l’échelle.
          </p>

          <GuideTable
            caption="Six tests avant un développement complet et leur portée réelle"
            headers={[
              "Test",
              "Question principale",
              "Ce qu’il montre",
              "Ce qu’il ne montre pas",
            ]}
            rows={[
              [
                "Entretien rétrospectif",
                "Problème",
                "Épisodes, conséquences, acteurs et contournements",
                "Achat ou usage futur",
              ],
              [
                "Page de présentation montrée au public visé",
                "Accès aux prospects",
                "Compréhension et action légère avec ce mode de recrutement",
                "Budget, usage ou fidélité",
              ],
              [
                "Prototype cliquable",
                "Usage",
                "Compréhension du parcours et tâche simulée",
                "Fiabilité, sécurité ou code de production",
              ],
              [
                "Service rendu manuellement",
                "Usage",
                "Valeur du résultat réel et opérations cachées",
                "Économie du logiciel à l’échelle",
              ],
              [
                "Offre commerciale explicite",
                "Acheteur et prix",
                "Objections, décision et engagement accepté",
                "Renouvellement ou faisabilité",
              ],
              [
                "Essai technique ciblé",
                "Faisabilité",
                "Une inconnue d’API, de donnée ou de calcul",
                "Besoin ou vente",
              ],
            ]}
          />

          <p>
            Le{" "}
            <a
              href="https://www.gov.uk/service-manual/design/making-prototypes"
              target="_blank"
              rel="noreferrer"
            >
              Service Manual du gouvernement britannique
            </a>{" "}
            rappelle qu’un prototype sert à explorer et tester avant de
            construire : son code n’est pas automatiquement destiné à la
            production. N’ajoutez donc pas authentification, facturation et
            administration à une maquette conçue seulement pour voir si un
            utilisateur comprend le parcours.
          </p>

          <h3>Testez une inconnue technique sans fabriquer le SaaS</h3>
          <p>
            Si tout dépend de l’accès à une API, d’une extraction de document ou
            de la qualité d’un jeu de données, construisez un essai borné : une
            entrée représentative, une sortie attendue, les erreurs à capturer
            et une condition d’arrêt. Le résultat peut rendre le projet
            possible, imposer une autre architecture ou l’arrêter. Sa conclusion
            porte sur la technique, pas sur la demande.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="engagement"
          number="05"
          label="Lecture des signaux"
          title="Un compliment, un rendez-vous et un paiement ne disent pas la même chose"
        >
          <p>
            Tous les « oui » ne coûtent pas la même chose. Une personne peut
            complimenter une idée sans changer son agenda. Une introduction,
            l’accès à un cas réel, une séance planifiée, une proposition
            examinée et un paiement demandent des engagements différents. Ne les
            rangez pas dans une hiérarchie universelle. Pour juger l’achat,
            regardez ce que l’acheteur habilité accepte de faire. Pour juger
            l’usage, observez la personne qui accomplira réellement la tâche. Le
            signal utile dépend donc de la question posée et du rôle qui agit.
          </p>

          <GuideTable
            caption="Lire honnêtement cinq niveaux d’engagement"
            headers={["Signal", "Ce qu’il renseigne", "Question suivante"]}
            rows={[
              [
                "Opinion ou compliment",
                "Compréhension ou sympathie déclarée",
                "Quel épisode passé pouvez-vous décrire ?",
              ],
              [
                "Mise en relation",
                "Volonté de mobiliser un contact ou un peu de réputation",
                "Le contact possède-t-il le rôle nécessaire ?",
              ],
              [
                "Temps planifié ou cas fourni",
                "Accès au travail réel, si les données peuvent être partagées",
                "Le comportement attendu apparaît-il ?",
              ],
              [
                "Offre examinée ou pilote accepté",
                "Intérêt pour une offre et un parcours d’achat précis",
                "Qui signe, selon quelles conditions ?",
              ],
              [
                "Paiement ou commande",
                "Engagement financier dans ce cas",
                "Le service est-il utilisé et renouvelable ?",
              ],
            ]}
          />

          <InfoBox
            variant="emerald"
            title="Demandez la prochaine action, pas une promesse vague"
          >
            <p>
              À la fin d’un entretien, proposez une étape cohérente avec le
              point à vérifier : observer la prochaine occurrence, rencontrer le
              payeur, tester une maquette sur une tâche, examiner une offre ou
              lancer un pilote borné. Un refus précis apprend souvent plus qu’un
              « tenez-moi au courant ».
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="carte-test"
          number="06"
          label="Outil local"
          title="Écrivez le test et les trois décisions avant le terrain"
        >
          <p>
            La carte ci-dessous ne note pas l’idée. Elle vérifie qu’un test
            correspond à la question choisie, que tous les champs sont remplis
            et que les décisions « continuer », « changer d’hypothèse » et «
            arrêter » sont écrites avant le résultat. Elle ne juge ni la qualité
            de votre seuil, ni celle des personnes interrogées. Tout reste dans
            votre navigateur ; rien n’est envoyé par cet outil.
          </p>

          <ValidationTestPlanner />

          <p>
            Copiez la carte dans votre dossier de recherche, datez-la et ne
            changez pas le seuil après avoir vu les résultats. Si le protocole
            était mauvais — mauvais segment, recrutement biaisé, test cassé —
            consignez l’incident et relancez une nouvelle carte. Ne rebaptisez
            pas l’échec en validation.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="cas-complet"
          number="07"
          label="Exemple chiffré"
          title="Dans cet exemple fictif, un pilote payé ne suffit pas encore"
        >
          <GuidePremiumCase
            initial="F"
            eyebrow="Cas entièrement fictif — aucune norme de marché"
            title="Centraliser les pièces fournisseurs avant un contrôle"
          >
            <p>
              Une fondatrice imagine un SaaS pour des PME industrielles. Elle
              pense que les responsables achats perdent le fil des certificats
              et justificatifs réclamés aux fournisseurs. Les personnes, les
              résultats, les montants et les critères ci-dessous sont inventés
              uniquement pour montrer le protocole.
            </p>
          </GuidePremiumCase>

          <h3>1. Les règles du test sont écrites avant le recrutement</h3>
          <p>
            Pour continuer vers un pilote manuel, la fondatrice exige que des
            membres du segment décrivent des incidents récents, montrent un
            contournement actuel et donnent accès au rôle acheteur. Elle prévoit
            de changer son hypothèse si le problème existe mais appartient à un
            autre rôle ou appelle un service différent. Elle prévoit d’arrêter
            si aucun épisode récent n’est retrouvé, si aucun acheteur n’accepte
            d’examiner l’étape suivante, ou si les documents ne peuvent pas être
            utilisés dans un cadre acceptable.
          </p>

          <h3>2. Les résultats restent séparés des conclusions</h3>
          <GuideTable
            caption="Résultats inventés du scénario de pièces fournisseurs"
            headers={["Étape", "Observation fictive", "Ce qu’elle change"]}
            rows={[
              [
                "7 entretiens",
                "6 incidents récents sont racontés ; 4 personnes montrent un contournement actif.",
                "Le problème mérite un test plus proche du travail réel, seulement dans ce segment.",
              ],
              [
                "Rôles",
                "2 personnes obtiennent une introduction vers un acheteur habilité.",
                "Le rôle utilisateur ne suffit pas ; le parcours d’achat doit être testé.",
              ],
              [
                "3 offres",
                "3 propositions de pilote manuel sont présentées avec le même service et les mêmes conditions.",
                "Les objections deviennent comparables ; aucune extrapolation au marché entier.",
              ],
              [
                "1 pilote",
                "1 entreprise accepte un pilote payé 480 € HT.",
                "L’achat est possible dans ce cas ; usage, renouvellement et rentabilité restent inconnus.",
              ],
            ]}
          />

          <h3>3. Le coût du test n’est pas maquillé en ROI</h3>
          <p>
            La fondatrice compte 28 heures à 55 € par heure pour rendre son
            temps visible. Cette valorisation n’est ni une facture ni une sortie
            de trésorerie. Elle engage aussi 240 € HT de recrutement et de
            déplacements, puis 3 heures de revue technique à 120 € HT par heure.
            Le pilote apporte 480 € HT. Tous les montants externes sont comparés
            hors taxes dans ce scénario fictif. La fiscalité, le traitement de
            la TVA et les autres coûts restent à confirmer. Ces prix ne sont pas
            des références pour un autre projet.
          </p>

          <FormulaBox>
            {[
              "Temps interne valorisé, sans sortie de trésorerie : 28 h × 55 € = 1 540 €",
              "Recrutement et déplacements : 240 € HT",
              "Revue technique : 3 h × 120 € HT = 360 € HT",
              "Effort connu valorisé : 1 540 € + 240 € + 360 € = 2 140 €",
              "",
              "Encaissement du pilote : 480 € HT",
              "Écart de trésorerie connu, hors taxes et avant fiscalité : 480 € − 240 € − 360 € = −120 € HT",
              "Effort valorisé net de l’encaissement : 2 140 € − 480 € = 1 660 €",
            ].join("\n")}
          </FormulaBox>

          <p>
            L’écart de trésorerie exclut volontairement le temps de la
            fondatrice lorsqu’il n’est pas payé à un tiers. Le budget valorisé
            l’inclut pour éviter de prétendre que ce temps est gratuit. Aucun de
            ces deux calculs n’est un bénéfice, une perte comptable ou un retour
            sur investissement du futur SaaS : il manque notamment le coût de
            construction, d’exploitation, d’acquisition, de support, l’usage
            durable et le renouvellement.
          </p>

          <h3>4. La décision est de tester encore, pas de développer</h3>
          <p>
            Le scénario autorise seulement un pilote manuel borné et un essai
            technique sur l’accès aux documents. Il n’autorise pas la
            construction d’une plateforme complète. La fondatrice continuera si
            le pilote produit le résultat convenu et si l’acheteur accepte
            d’examiner une suite ; elle changera son hypothèse si la collecte
            des documents, et non leur suivi, porte la valeur ; elle arrêtera si
            l’accès licite, la sécurité ou la volonté de payer ne résistent pas
            au test.
          </p>

          <GuidePremiumMemo
            eyebrow="Ce que montre l’exemple"
            title="Ce test autorise un pilote, pas le développement complet"
          >
            <p>
              Un pilote payé apporte une information importante sur l’achat dans
              ce cas précis. Un seul cas ne donne ni la taille du marché, ni le
              renouvellement, ni la réponse à l’inconnue technique.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="cadre"
          number="08"
          label="Données et prospection"
          title="Avant le test, réglez la prospection, les données et la confidentialité"
        >
          <p>
            Tester une idée n’exempte ni des règles de prospection ni de la
            protection des données. Pour la prospection électronique entre
            professionnels, les règles changent selon l’adresse et le canal
            utilisés. La{" "}
            <a
              href="https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique-sms-mms-et-automate-dappel"
              target="_blank"
              rel="noreferrer"
            >
              CNIL
            </a>{" "}
            rappelle que, pour une adresse professionnelle nominative, le
            message doit être lié à la profession de la personne. Vous devez
            aussi l’informer et lui permettre de s’opposer simplement et
            gratuitement.
          </p>

          <p>
            La CNIL distingue les adresses génériques d’entreprise, comme
            `contact@`, qui concernent la personne morale. Chaque sollicitation
            doit néanmoins identifier son émetteur et proposer un moyen simple
            de refuser les suivantes. Vérifiez le fondement juridique et les
            règles du canal réellement utilisé : « c’est une expérience » n’est
            pas une exception.
          </p>

          <h3>Préparez une fiche de traitement minimale</h3>
          <ul>
            <li>finalité du test et identité de la personne responsable ;</li>
            <li>
              données strictement nécessaires, source et personnes qui y
              accèdent ;
            </li>
            <li>information donnée, opposition ou autre droit applicable ;</li>
            <li>durée de conservation décidée et suppression prévue ;</li>
            <li>
              règle d’anonymisation des notes, captures et documents de travail
              ;
            </li>
            <li>
              outil utilisé et interdiction d’y coller un document client sans
              autorisation.
            </li>
          </ul>

          <p>
            Le principe de{" "}
            <a
              href="https://www.cnil.fr/fr/minimiser-les-donnees-collectees"
              target="_blank"
              rel="noreferrer"
            >
              minimisation de la CNIL
            </a>{" "}
            consiste à ne collecter que ce qui est adéquat, pertinent et
            nécessaire. Pour tester l’extraction d’un document, créez d’abord un
            jeu fictif représentatif. Si un vrai document est indispensable,
            définissez les accès, la base juridique, la sécurité, la durée et la
            suppression avant de l’utiliser.
          </p>

          <h3>Prévoyez la fin du pilote avant de lui confier des données</h3>
          <GuideTable
            caption="Responsabilités minimales à clarifier avant un pilote B2B"
            headers={["Sujet", "À écrire avant le pilote", "Condition d’arrêt"]}
            rows={[
              [
                "Résultat et durée",
                "Tâche rendue, critères d’acceptation, calendrier et personne qui décide",
                "Le résultat ne peut pas être contrôlé ou le responsable n’est pas disponible",
              ],
              [
                "Données et accès",
                "Source, base juridique, personnes autorisées, sécurité, conservation et suppression",
                "Une donnée indispensable ne peut pas être utilisée dans le cadre prévu",
              ],
              [
                "Confidentialité et droits",
                "Informations sensibles, livrables remis et droits d’usage de chaque partie",
                "Le test exige une divulgation ou un droit que l’autre partie refuse",
              ],
              [
                "Fin et retour",
                "Export ou restitution, suppression des copies, retrait des accès et preuve attendue",
                "Aucune sortie vérifiable n’est prévue",
              ],
              [
                "Prix et charge",
                "Montant, taxes, tâches incluses, temps humain et coûts supportés par chaque partie",
                "Le coût variable rend l’offre incompatible avec le prix testé",
              ],
            ]}
          />

          <p>
            Cette fiche ne remplace ni un contrat ni une analyse de sécurité ou
            de protection des données. Elle sert à révéler les inconnues avant
            qu’un essai improvisé ne devienne un service durable sans
            responsable ni possibilité de sortie.
          </p>

          <h3>
            Protéger une création ne signifie pas rendre l’idée invulnérable
          </h3>
          <p>
            Décrivez le problème sans divulguer d’emblée l’algorithme, le jeu de
            données ou le secret qui constitue votre avantage. Datez vos travaux
            et organisez les droits avec les personnes qui créent les livrables.
            L’{" "}
            <a
              href="https://www.inpi.fr/realiser-demarches/propriete-intellectuelle/se-preparer-au-depot-dune-e-soleau"
              target="_blank"
              rel="noreferrer"
            >
              e-Soleau de l’INPI
            </a>{" "}
            permet d’établir une date certaine ; l’INPI précise qu’elle ne
            constitue pas, à elle seule, un titre de propriété industrielle.
            Pour choisir un contrat, un dépôt ou une stratégie de secret,
            demandez un avis adapté.
          </p>

          <InfoBox
            variant="amber"
            title="Arrêtez le test s’il exige un raccourci que le futur service ne pourra pas assumer"
          >
            <p>
              Si la valeur dépend de données impossibles à obtenir licitement,
              d’un accès refusé, d’une promesse trompeuse ou d’une sécurité
              absente, le test a révélé un problème bloquant. Corrigez le modèle
              ou arrêtez ; ne repoussez pas le problème après le code.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="decision"
          number="09"
          label="Prochaine étape"
          title="Après le test, continuez, changez, attendez ou arrêtez"
        >
          <p>
            Relisez la carte sans changer ses règles. Pour chaque observation,
            notez la source, le rôle, la date, le contexte, ce qu’elle contredit
            et ce qu’elle ne peut pas prouver. Une{" "}
            <a
              href="https://bpifrance-creation.fr/moment-de-vie/lean-startup"
              target="_blank"
              rel="noreferrer"
            >
              démarche Lean Startup
            </a>{" "}
            alterne construction, mesure et apprentissage ; elle ne commande pas
            de construire davantage après chaque boucle.
          </p>

          <GuideTable
            caption="Quatre décisions possibles après un test d’idée SaaS"
            headers={["Décision", "Quand la prendre", "Action suivante"]}
            rows={[
              [
                "Continuer",
                "Le critère prévu est franchi et aucun nouveau problème bloquant n’apparaît.",
                "Tester l’inconnue suivante ou préparer le plus petit pilote utile.",
              ],
              [
                "Changer (pivoter)",
                "Le problème résiste, mais les entreprises visées, le payeur, l’accès aux prospects ou le service change.",
                "Écrire ce qui doit maintenant être vrai et créer une nouvelle carte ; garder la trace de l’ancienne.",
              ],
              [
                "Mettre en attente",
                "Le résultat est insuffisant ou une donnée indispensable manque temporairement.",
                "Nommer l’information manquante, son propriétaire et une date de réexamen.",
              ],
              [
                "Arrêter",
                "La question centrale reçoit la réponse négative prévue ou une contrainte est inacceptable.",
                "Archiver les observations, libérer le budget et ne rouvrir qu’avec une hypothèse nouvelle.",
              ],
            ]}
          />

          <h3>Ne construisez que ce que le prochain test exige</h3>
          <p>
            Si un service manuel suffit encore, gardez-le le temps d’observer
            les opérations, les erreurs et la valeur réellement délivrée. Si un
            prototype suffit, ne le faites pas passer pour un produit. Un{" "}
            <a
              href="https://leanstartup.co/resources/articles/what-is-an-mvp/"
              target="_blank"
              rel="noreferrer"
            >
              produit minimum viable (MVP)
            </a>{" "}
            sert à apprendre auprès de vrais utilisateurs avec l’effort
            approprié ; « minimum » ne supprime pas les exigences nécessaires à
            la sécurité, au consentement ou au résultat promis.
          </p>

          <p>
            Pour transformer ce minimum en périmètre testable, utilisez le guide{" "}
            <Link href="/guides/mvp-saas-quoi-inclure">
              MVP SaaS : quoi inclure avant le premier test
            </Link>
            . Il sépare ce qu’il faut construire, gérer manuellement, intégrer
            ou reporter, puis rend visible la charge humaine avant un pilote ou
            un premier client.
          </p>

          <p>
            Quand les faits autorisent enfin un produit à construire, traduisez
            le parcours vendu, les responsabilités, les preuves et les inconnues
            restantes dans un{" "}
            <Link href="/guides/cahier-des-charges-saas">
              cahier des charges SaaS remis à tous les répondants
            </Link>
            . Ce document ne remplace pas la validation : il empêche surtout
            chaque proposition de chiffrer un produit différent.
          </p>

          <p>
            Le calendrier vient ensuite. Le guide sur{" "}
            <Link href="/guides/combien-de-temps-developper-saas">
              le temps nécessaire pour développer un SaaS
            </Link>{" "}
            relie les dépendances, les capacités et quatre scénarios sans
            transformer une estimation en promesse de date.
          </p>

          <FormulaBox>
            {[
              "FICHE DE DÉCISION — UNE PAGE",
              "",
              "Segment et rôle observé :",
              "Question unique examinée :",
              "Ce qui devait être vrai et date d’écriture :",
              "Test et mode de recrutement :",
              "Critères continuer / changer / arrêter écrits avant le test :",
              "Observations, refus et incidents :",
              "Ce que le test montre :",
              "Ce qu’il ne montre pas :",
              "Décision prise et personne responsable :",
              "Prochaine inconnue ou condition de réouverture :",
            ].join("\n")}
          </FormulaBox>

          <p>
            Lorsque la prochaine étape exige une maquette, un pilote ou un essai
            technique, vérifiez d’abord ce que recouvre notre{" "}
            <Link href="/services/saas-applications-metier">
              accompagnement SaaS et application métier
            </Link>
            . Si cet accompagnement correspond au test à mener, décrivez le
            besoin sur la page{" "}
            <Link href="/demarrer-un-projet">démarrer un projet</Link>. Apportez
            la carte de test, les faits qui ont contredit votre idée, le rôle du
            payeur et les contraintes de données. Pour reprendre la démarche sur
            un autre sujet, consultez le{" "}
            <Link href="/guides">répertoire des guides Hagnéré Code</Link>.
          </p>

          <p>
            Si une hypothèse a tenu, la suite se joue sur quatre dossiers. Le{" "}
            <Link href="/guides/calculer-roi-application-metier">
              calcul du retour sur investissement
            </Link>{" "}
            transforme un intérêt déclaré en économie ou en capacité chiffrée.
            Le guide{" "}
            <Link href="/guides/choisir-prestataire-application-metier">
              choisir un prestataire sur preuves
            </Link>{" "}
            évite de confier le premier développement sur une impression, et le{" "}
            <Link href="/guides/plan-recette-application-metier">
              plan de recette
            </Link>{" "}
            fixe dès le départ ce qui vaudra acceptation.
          </p>

          <p>
            Une réserve sur l’acquisition, enfin. Beaucoup de tests concluants
            en entretien ne résistent pas au coût réel d’un prospect payant :
            avant d’investir en publicité, lisez ce que recouvre le{" "}
            <Link href="/guides/prix-gestion-google-ads">
              prix d’une gestion Google Ads
            </Link>{" "}
            et les coûts unitaires à mesurer. Un canal payant non rentable
            invalide une idée aussi sûrement qu’un refus client.
          </p>

          <GuidePremiumMemo
            eyebrow="Décision finale"
            title="Ne demandez pas « l’idée est-elle validée ? »"
          >
            <p>
              Demandez : « quelle hypothèse a résisté, auprès de quel rôle, à
              quel test, et quelle décision avions-nous prévu de prendre ? ». Si
              une de ces quatre réponses manque, vous avez une intuition à
              approfondir, pas une autorisation de développer.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
