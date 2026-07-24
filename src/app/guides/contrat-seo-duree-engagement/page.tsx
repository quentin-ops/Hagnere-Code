import Link from "next/link";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide } from "@/lib/guides";
import {
  buildGuideMetadata,
  buildGuideStructuredData,
} from "@/lib/guide-page-seo";

const guide = getGuide("contrat-seo-duree-engagement");

export const metadata = buildGuideMetadata(
  guide,
  "Contrat SEO : durée, travaux, accès et conditions de sortie",
);

const [articleJsonLd, breadcrumbJsonLd] = buildGuideStructuredData(
  guide,
  "Contrat SEO et durée d’engagement",
);

const faqItems = [
  {
    question: "Un engagement SEO de douze mois est-il illégal ?",
    answer:
      "Non, on ne peut pas l’affirmer en général. Une durée déterminée valablement conclue engage en principe les parties jusqu’à son terme, sous réserve du contrat et du droit applicable. Faites analyser la proposition réelle si son enjeu ou ses clauses vous exposent fortement.",
  },
  {
    question: "« Sans engagement » signifie-t-il sans préavis ?",
    answer:
      "Pas nécessairement. Lisez la durée, le préavis, la date d’effet, la facturation et la manière de notifier la fin. Un contrat à durée indéterminée peut prévoir un préavis ; son application concrète dépend du texte signé et de la situation.",
  },
  {
    question: "Une agence SEO peut-elle garantir la première place ?",
    answer:
      "Vous ne devriez pas retenir cette promesse comme une sécurité. Google recommande d’éviter les prestataires qui garantissent un classement. Demandez plutôt les travaux prévus, les preuves remises, les risques signalés et la décision proposée après chaque contrôle.",
  },
  {
    question: "Qui possède les contenus et les comptes à la fin du contrat ?",
    answer:
      "Ne le présumez pas. Faites identifier par écrit le titulaire des comptes, les droits sur les contenus et créations, les exports disponibles, les formats remis, les délais et l’assistance de sortie. Une revue juridique peut être nécessaire pour les droits de propriété intellectuelle.",
  },
  {
    question: "Peut-on arrêter de payer si les positions ne montent pas ?",
    answer:
      "On ne peut pas répondre sans lire le contrat et les faits. Une performance décevante n’établit pas automatiquement une inexécution. Ne suspendez pas un paiement sur la seule base de ce guide : faites examiner les obligations, les preuves et les recours applicables.",
  },
  {
    question: "Quand faut-il faire relire le contrat par un avocat ?",
    answer:
      "Faites-le lorsque la durée, le montant, une pénalité, l’exclusivité, la propriété intellectuelle, les données, la reconduction ou la sortie peuvent produire une conséquence importante pour l’entreprise. Hagnéré Code peut aider à définir les travaux SEO, mais ne rend pas de consultation juridique.",
  },
];

const readingPasses = [
  {
    number: "1",
    title: "Durée et argent",
    question:
      "Combien devrez-vous au minimum, jusqu’à quand et dans quels cas ?",
    outcome: "Une exposition financière lisible.",
  },
  {
    number: "2",
    title: "Travail prévu",
    question:
      "Quelle action sera faite, par qui, à quelle période et sur quelles pages ou quels comptes ?",
    outcome: "Une mensualité reliée à un travail identifiable.",
  },
  {
    number: "3",
    title: "Preuves et actifs",
    question: "Que pourrez-vous voir, vérifier, conserver et exporter ?",
    outcome: "Des comptes et livrables qui ne disparaissent pas à la sortie.",
  },
  {
    number: "4",
    title: "Fin du contrat",
    question:
      "Comment le contrat se termine-t-il, se renouvelle-t-il ou se transmet-il ?",
    outcome: "Une sortie préparée avant le premier mois.",
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
          { label: "Contrat SEO et engagement" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Douze mois d’un côté, « sans engagement » de l’autre : aucun slogan ne dit ce qui sera fait, ce que vous garderez ni comment vous pourrez sortir. Relisez la proposition en quatre passages."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "Coût minimal",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Travaux vérifiables",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Sortie préparée",
            description: "",
            color: "emerald",
          },
          {
            number: "04",
            title: `Lecture : ${guide.readTimeMin} min`,
            description: "",
            color: "amber",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/choisir-agence-seo",
            label: "Choisir une agence SEO avant le contrat",
          },
          {
            href: "/guides/prix-referencement-naturel",
            label: "Comprendre le prix d’une prestation SEO",
          },
          {
            href: "/guides/audit-seo-que-contient-il",
            label: "Commencer par un audit SEO ciblé",
          },
          {
            href: "/guides/combien-de-temps-resultats-seo",
            label: "Distinguer délai SEO et durée juridique",
          },
        ]}
        faqTitle="Questions fréquentes sur les contrats SEO"
        faqItems={faqItems}
        showSidebarCta={false}
      >
        <p className="lead">
          Imaginez cette comparaison fictive : deux offres sont posées sur
          votre bureau. La première annonce
          1 200 € HT par mois pendant douze mois. La seconde dit « mensuel, sans
          engagement ». Aucune formule n’est meilleure par nature. Douze mois
          peuvent financer un travail suivi ou enfermer une prestation floue ;
          une offre « sans engagement » peut néanmoins comporter un préavis, des
          frais ou des actifs difficiles à récupérer. Avant de signer, reliez
          chaque période payée à un travail vérifiable, calculez la somme
          minimale engagée, listez les comptes et fichiers qui resteront
          accessibles, puis lisez la fin et le renouvellement. Si une clause
          importante reste ambiguë, faites-la préciser ou examiner par un
          avocat. Ce guide donne des repères généraux ; il ne valide ni
          n’interprète votre contrat.
        </p>

        <InfoBox variant="emerald" title="La réponse courte">
          Une durée ne garantit pas le sérieux et n’est pas non plus un défaut automatique.
          Acceptez-la seulement si vous comprenez l’argent engagé, le travail
          dû, les éléments vérifiables remis, les accès conservés et les
          conditions de sortie.
        </InfoBox>

        <p>
          Si vous n’avez pas encore choisi le prestataire, commencez par{" "}
          <Link href="/guides/choisir-agence-seo">
            les questions à poser à une agence SEO
          </Link>
          . Ici, nous partons d’une proposition déjà reçue. Conservez sa version
          datée et ses annexes : une ligne rassurante dans un e-mail ne remplace
          pas nécessairement le texte contractuel.
        </p>

        <GuideToc
          items={[
            { id: "quatre-lectures", label: "Relire le contrat quatre fois" },
            { id: "duree", label: "Calculer durée et argent" },
            { id: "travail", label: "Relier la période au travail" },
            { id: "preuves", label: "Protéger preuves et accès" },
            { id: "sortie", label: "Lire la fin avant le début" },
            { id: "promesse", label: "Écarter la garantie de classement" },
            {
              id: "mission-bornee",
              label: "Choisir une première mission limitée",
            },
            { id: "avocat", label: "Savoir quand appeler un avocat" },
            { id: "verdict", label: "Prendre une décision" },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="quatre-lectures">
          Relisez le même contrat quatre fois, avec une seule question
        </h2>
        <p>
          Un document de dix pages devient vite illisible si vous cherchez tout
          en même temps. Faites quatre passages. À chaque passage, surlignez les
          réponses, puis écrivez « absent » à côté de ce qui manque. L’absence
          n’est pas forcément une faute ; c’est une question à résoudre avant la
          signature.
        </p>

        <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
          {readingPasses.map((pass) => (
            <section
              key={pass.number}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <span className="text-xs font-extrabold tracking-[0.14em] text-violet-600 dark:text-violet-400">
                PASSAGE {pass.number}
              </span>
              <h3 className="mb-0 mt-2 text-lg font-semibold text-zinc-950 dark:text-white">
                {pass.title}
              </h3>
              <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {pass.question}
              </p>
              <p className="mb-0 mt-3 text-sm font-medium text-zinc-950 dark:text-zinc-200">
                Résultat : {pass.outcome}
              </p>
            </section>
          ))}
        </div>

        <h2 id="duree">Premier passage : calculez la durée et l’argent</h2>
        <p>
          Cherchez la date de début, la durée déterminée ou indéterminée, la
          période ferme, le renouvellement, le préavis, les frais initiaux, les
          mensualités, les variables et les éventuelles conditions de sortie.
          Puis calculez seulement ce qui est certain.
        </p>

        <p>
          Le{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032040777/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code civil, article 1103
          </a>
          , rappelle que les contrats légalement formés obligent ceux qui les
          ont conclus. L’{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032041407/"
            target="_blank"
            rel="noopener noreferrer"
          >
            article 1211
          </a>{" "}
          traite de la fin d’un contrat à durée indéterminée avec le préavis
          prévu ou, à défaut, un délai raisonnable. L’{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032041402/"
            target="_blank"
            rel="noopener noreferrer"
          >
            article 1212
          </a>{" "}
          indique qu’un contrat à durée déterminée doit en principe être exécuté
          jusqu’à son terme et que nul ne peut en exiger le renouvellement.
          L’application à votre contrat doit être examinée dans son contexte.
        </p>

        <p>
          L’exemple suivant est entièrement fictif ; il ne décrit ni un client,
          ni un devis reçu, ni un tarif de marché Hagnéré Code.
        </p>
        <FormulaBox>{`Frais de mise en route : 2 000 € HT
Mensualité : 1 200 € HT
Durée ferme annoncée : 12 mois

Engagement minimal connu
= 2 000 + (1 200 × 12)
= 16 400 € HT

Contrôle inverse
(16 400 - 2 000) / 12 = 1 200 € HT par mois`}</FormulaBox>

        <p>
          Les 16 400 € ne disent pas si l’offre est bonne. Ils rendent visible
          l’exposition minimale connue. Ajoutez dans une colonne séparée les
          inconnues : outils, contenus supplémentaires, liens, déplacements,
          indexation de prix, renouvellement, préavis, assistance de sortie ou
          honoraires juridiques. N’inventez pas leur montant.
        </p>

        <h2 id="travail">
          Deuxième passage : reliez chaque période payée à un travail
        </h2>
        <p>
          « Accompagnement SEO mensuel » ne permet pas de savoir ce qui se passe
          mardi prochain. Une mission peut légitimement combiner analyse,
          conseil, coordination, corrections et contenu. Le contrat doit
          néanmoins rendre les travaux et la responsabilité compréhensibles.
        </p>

        <GuideTable
          caption="Questions à faire préciser pour chaque action SEO"
          headers={["Question", "Réponse attendue", "Pourquoi elle compte"]}
          rows={[
            [
              "Quelle action ?",
              "Action précisément nommée : audit, correction, rédaction, validation, suivi ou acquisition de mentions.",
              "Évite qu’une même phrase couvre tout et rien.",
            ],
            [
              "Sur quoi ?",
              "Pages, gabarits, langue, marché, site ou compte concernés.",
              "Empêche un désaccord sur les pages et comptes concernés.",
            ],
            [
              "Qui agit ?",
              "Prestataire, client, développeur, rédacteur ou tiers.",
              "Une recommandation non appliquée n’est pas une correction livrée.",
            ],
            [
              "Quand ?",
              "Période, dépendance et date de revue réalistes.",
              "Relie la mensualité à une séquence.",
            ],
            [
              "Quelle trace ?",
              "Fichier, ticket, URL, avant/après, journal ou décision écrite.",
              "Permet de vérifier le travail sans croire un tableau de positions.",
            ],
            [
              "Que se passe-t-il ensuite ?",
              "Validation, correction, report ou décision clairement attribuée.",
              "Transforme le rapport en décision.",
            ],
          ]}
        />

        <p>
          Ne demandez pas un quota artificiel de pages ou de liens uniquement
          pour « rentabiliser » chaque mois. Demandez un programme qui explique
          pourquoi l’action est utile, comment elle sera contrôlée et ce qui
          changera si les données contredisent l’hypothèse.
        </p>

        <h2 id="preuves">
          Troisième passage : protégez les documents, comptes et fichiers
        </h2>
        <p>
          Listez chaque compte nécessaire : domaine, site, Search Console,
          mesure d’audience, outil de suivi, hébergement, dépôt de code ou
          plateforme éditoriale selon le projet. Pour chacun, notez le
          titulaire, les administrateurs, le niveau d’accès donné au prestataire
          et ce qui se passe à la fin.
        </p>

        <p>
          Dans ses{" "}
          <a
            href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            recommandations pour choisir un référenceur
          </a>
          , Google conseille de comprendre les changements proposés et évoque un
          accès en lecture seule à Search Console pour une phase d’audit. Vous
          pouvez donc demander de la transparence avant d’accorder un droit de
          modification. Cette recommandation produit ne détermine pas la
          propriété juridique de vos contenus ou comptes.
        </p>

        <GuideTable
          caption="Inventaire de sortie à annexer ou faire préciser"
          headers={[
            "Élément",
            "À clarifier avant signature",
            "Document reçu à la sortie",
          ]}
          rows={[
            [
              "Comptes",
              "Titulaire, administrateurs, droits accordés et durée.",
              "Accès client testé et accès prestataire retiré si prévu.",
            ],
            [
              "Contenus",
              "Auteur, droits d’utilisation, fichiers sources et validations.",
              "Liste des URL et fichiers remis dans le format convenu.",
            ],
            [
              "Données et rapports",
              "Source, historique, fréquence, confidentialité et export.",
              "Export lisible, date et limites documentées.",
            ],
            [
              "Corrections techniques",
              "Dépôt, tickets, environnement et responsable de mise en ligne.",
              "Historique ou compte rendu des changements réellement appliqués.",
            ],
            [
              "Liens ou mentions",
              "Méthode, validation, coût, risques et absence de garantie de maintien.",
              "Liste vérifiable, sans promesse qu’un tiers conservera le lien.",
            ],
          ]}
        />

        <h2 id="sortie">Quatrième passage : lisez la fin avant le début</h2>
        <p>
          Cherchez le terme, la reconduction, la forme et l’adresse de
          notification, le préavis, les sommes restant dues, les prestations en
          cours, la restitution, l’assistance de passation et la suppression ou
          conservation des accès. Ne déduisez pas une procédure de résiliation à
          partir d’un article généraliste.
        </p>

        <InfoBox
          variant="amber"
          title="Une contre-performance ne résilie pas automatiquement le contrat"
        >
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000036829854/"
            target="_blank"
            rel="noopener noreferrer"
          >
            L’article 1217 du Code civil
          </a>{" "}
          énumère plusieurs réponses possibles à une inexécution, avec leurs
          conditions. Il ne permet pas de conclure, sans analyse, qu’une baisse
          de positions autorise à cesser de payer. Si le travail promis semble
          absent ou contesté, conservez les preuves et consultez un
          professionnel du droit avant d’agir.
        </InfoBox>

        <p>
          Posez ces cinq questions au prestataire : quelle est la dernière
          échéance si je notifie aujourd’hui ? Quels travaux continueront
          pendant le préavis ? Quels fichiers et accès seront remis ? Qui
          organise la passation ? Quelles sommes ou conditions sont encore
          discutées ? Demandez une réponse écrite, puis faites-la intégrer au
          document approprié si elle modifie la proposition.
        </p>

        <h2 id="promesse">
          Une garantie de première position n’est pas une sécurité
        </h2>
        <p>
          Google recommande explicitement d’éviter les prestataires qui
          garantissent une première position. Aucun prestataire ne contrôle seul
          le moteur, la concurrence, les changements du site et le comportement
          des internautes. Une clause utile décrit plutôt les moyens, les
          décisions, les preuves, les alertes et la façon de traiter un écart.
        </p>

        <p>
          Distinguez également le délai SEO et la durée juridique. Le fait que
          le référencement demande du temps ne prouve pas qu’un contrat ferme de
          douze mois est nécessaire dans votre cas. Le guide sur le{" "}
          <Link href="/guides/combien-de-temps-resultats-seo">
            délai des résultats SEO
          </Link>{" "}
          aide à construire une revue progressive sans transformer l’attente en
          engagement aveugle.
        </p>

        <h2 id="mission-bornee">
          Une première mission limitée peut être plus honnête pour commencer
        </h2>
        <p>
          Si le site, les données ou la collaboration restent inconnus, proposez
          une première mission dont la fin produit une décision : audit,
          recherche de priorités, correction d’un groupe de pages critique ou pilote
          de contenu. Définissez le résultat remis, les accès, le prix, la date et ce
          que vous déciderez ensuite.
        </p>

        <p>
          Une mission courte n’est pas toujours moins chère et ne remplace pas
          le travail durable. Elle peut simplement éviter de promettre douze
          mois avant de savoir si les recommandations sont applicables, si les
          équipes coopèrent et si les premières preuves sont fiables.
        </p>

        <h2 id="avocat">Quand faut-il faire examiner le contrat ?</h2>
        <p>
          Il n’existe pas de montant universel à partir duquel un avocat devient
          nécessaire. Regardez les conséquences. Faites relire lorsque vous ne
          comprenez pas la durée ou la sortie, lorsqu’une pénalité peut peser
          sur la trésorerie, lorsque les droits sur les contenus ou le code sont
          essentiels, lorsqu’une exclusivité limite votre activité, lorsque des
          données sensibles circulent ou lorsqu’un désaccord existe déjà.
        </p>

        <p>
          Ne transmettez pas un contrat confidentiel ou des identifiants dans un
          formulaire général. Organisez un échange approprié avec le
          professionnel choisi. Hagnéré Code peut examiner la cohérence du
          programme de travaux SEO et techniques ; il ne se substitue ni à un avocat ni à
          votre conseil.
        </p>

        <h2 id="verdict">Cinq décisions possibles après la relecture</h2>
        <ul>
          <li>
            <strong>Signer</strong> si durée, coût, travail, preuves, accès et
            sortie correspondent au besoin compris.
          </li>
          <li>
            <strong>Négocier</strong> si les zones manquantes peuvent être
            clarifiées ou équilibrées.
          </li>
          <li>
            <strong>Commencer par une mission limitée et clairement définie</strong>{" "}
            si les inconnues empêchent un engagement récurrent raisonnable.
          </li>
          <li>
            <strong>Faire relire juridiquement</strong> si une clause ou une
            conséquence dépasse la simple définition des travaux.
          </li>
          <li>
            <strong>Refuser</strong> si les réponses restent vagues, les
            promesses invérifiables ou la sortie incompatible avec votre risque.
          </li>
        </ul>

        <GuideInlineCTA
          title="Vérifier que les travaux SEO prévus répondent au besoin"
          description="Décrivez votre objectif, votre site et les pages ou travaux SEO proposés, sans transmettre de document confidentiel. Nous pouvons vérifier si les travaux, accès et documents attendus répondent au besoin technique et éditorial. Pour l’interprétation des clauses, une résiliation ou un contentieux, nous vous orienterons vers un conseil juridique."
          tags={[
            "Travaux vérifiables",
            "Première mission limitée",
            "Aucun avis juridique",
          ]}
          ctaLabel="Faire vérifier la proposition SEO"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="sources">Sources officielles et limites</h2>
        <p>
          Sources vérifiées le 23 juillet 2026. Cette page fournit de
          l’information générale pour des dirigeants français ; elle ne tient
          pas compte de votre contrat, du statut des parties, de la
          jurisprudence applicable ni de vos échanges. Faites conseiller toute
          décision juridique importante.
        </p>
        <ul>
          <li>
            Légifrance — Code civil,{" "}
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032040777/"
              target="_blank"
              rel="noopener noreferrer"
            >
              article 1103
            </a>{" "}
            sur la force du contrat.
          </li>
          <li>
            Légifrance — Code civil,{" "}
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032041407/"
              target="_blank"
              rel="noopener noreferrer"
            >
              article 1211
            </a>{" "}
            sur la durée indéterminée et{" "}
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032041402/"
              target="_blank"
              rel="noopener noreferrer"
            >
              article 1212
            </a>{" "}
            sur la durée déterminée.
          </li>
          <li>
            Légifrance — Code civil,{" "}
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000036829854/"
              target="_blank"
              rel="noopener noreferrer"
            >
              article 1217
            </a>{" "}
            sur les sanctions possibles de l’inexécution, sans conclusion
            automatique pour un cas donné.
          </li>
          <li>
            Google Search Central —{" "}
            <a
              href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              recommandations pour choisir un référenceur
            </a>
            , notamment la transparence et l’absence de garantie de première
            position.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
