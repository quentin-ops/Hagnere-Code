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

const guide = getGuide("logiciel-gestion-stock-sur-mesure");

export const metadata = buildGuideMetadata(
  guide,
  "Gestion de stock : diagnostic, comparatif et coût sur 36 mois",
);

const [articleJsonLd, breadcrumbJsonLd] = buildGuideStructuredData(
  guide,
  "Logiciel de gestion de stock sur mesure",
);

const faqItems = [
  {
    question: "Quand faut-il un logiciel de gestion de stock sur mesure ?",
    answer:
      "Le sur-mesure devient pertinent lorsqu’une règle métier importante, une contrainte terrain ou une connexion indispensable reste mal servie après configuration et essai d’un outil standard. Il ne corrige pas à lui seul des mouvements non saisis ou des responsabilités floues.",
  },
  {
    question: "Quelle différence entre stock physique et stock disponible ?",
    answer:
      "Le stock physique est ce qui se trouve réellement dans un lieu. Le disponible est ce que l’entreprise accepte encore de promettre après réservations, quarantaines, casses et autres règles. Deux nombres différents peuvent donc être justes s’ils répondent à deux questions différentes.",
  },
  {
    question: "Un code-barres suffit-il à fiabiliser le stock ?",
    answer:
      "Non. Le code-barres aide à identifier un article, un lot ou une unité logistique. Il ne prouve pas que la bonne quantité, le bon emplacement et le bon type de mouvement ont été confirmés par la bonne personne.",
  },
  {
    question: "Faut-il suivre les lots et numéros de série ?",
    answer:
      "Seulement si le métier, le service attendu ou une obligation applicable l’exige. Le suivi par lot ou série apporte une traçabilité plus fine, mais il augmente les données à reprendre, saisir et contrôler.",
  },
  {
    question: "Un inventaire corrige-t-il la cause d’un écart ?",
    answer:
      "Non. Il rapproche le nombre enregistré du comptage physique. Pour éviter le retour de l’écart, conservez l’ajustement et cherchez le premier mouvement absent, tardif, doublé ou appliqué au mauvais emplacement.",
  },
  {
    question: "Peut-on commencer sans changer de logiciel ?",
    answer:
      "Oui. Reconstituez les dix derniers mouvements d’une référence qui diverge et nommez le système qui fait foi. Cette enquête suffit souvent à corriger une règle, une responsabilité ou un paramétrage avant tout investissement.",
  },
  {
    question: "Quelle différence entre un ERP et un WMS ?",
    answer:
      "Un ERP relie généralement le stock aux achats, ventes, finance ou production. Un WMS se concentre davantage sur l’exécution de l’entrepôt : emplacements, réceptions, préparation, inventaires et déplacements. Les frontières varient selon les produits ; testez vos mouvements réels plutôt que les étiquettes.",
  },
  {
    question: "Comment comparer le prix d’un standard et du sur-mesure ?",
    answer:
      "Comparez le même périmètre sur trois à cinq ans. Additionnez licences, mise en œuvre, matériel, reprise, temps interne, formation, intégrations, support, maintenance, hébergement et sortie. Un abonnement seul n’est pas comparable au seul devis de développement.",
  },
];

const stockMeanings = [
  {
    title: "Physique",
    question: "Combien d’unités sont réellement présentes ici ?",
    warning:
      "Le comptage doit préciser le lieu, l’heure, l’unité et ce qui est exclu.",
    color:
      "border-emerald-200 bg-emerald-50/70 dark:border-emerald-900 dark:bg-emerald-950/20",
  },
  {
    title: "Théorique",
    question: "Combien le registre calcule-t-il après les mouvements connus ?",
    warning:
      "Un mouvement absent, tardif ou doublé peut rendre ce nombre faux.",
    color:
      "border-blue-200 bg-blue-50/70 dark:border-blue-900 dark:bg-blue-950/20",
  },
  {
    title: "Réservé",
    question: "Combien d’unités sont déjà promises à un besoin ?",
    warning: "La réservation n’est pas toujours un déplacement physique.",
    color:
      "border-violet-200 bg-violet-50/70 dark:border-violet-900 dark:bg-violet-950/20",
  },
  {
    title: "Disponible",
    question: "Combien l’entreprise accepte-t-elle encore de vendre ?",
    warning:
      "La formule dépend des réservations, quarantaines et règles du métier.",
    color:
      "border-cyan-200 bg-cyan-50/70 dark:border-cyan-900 dark:bg-cyan-950/20",
  },
  {
    title: "En attente",
    question:
      "Qu’est-ce qui a quitté un état sans être confirmé dans l’autre ?",
    warning:
      "Un transfert parti mais non reçu ne doit ni disparaître ni être compté deux fois.",
    color:
      "border-amber-200 bg-amber-50/70 dark:border-amber-900 dark:bg-amber-950/20",
  },
  {
    title: "Non vendable",
    question: "Qu’est-ce qui est présent mais ne peut pas être promis ?",
    warning:
      "Casse, contrôle, quarantaine ou retour doivent avoir une raison visible.",
    color:
      "border-rose-200 bg-rose-50/70 dark:border-rose-900 dark:bg-rose-950/20",
  },
];

const fictionalMovements = [
  {
    time: "08 h 15",
    event: "Réception",
    detail: "50 pompes reçues au dépôt A et enregistrées.",
    consequence: "Physique et théorique : 50.",
    color: "#34d399",
  },
  {
    time: "09 h 05",
    event: "Réservation",
    detail: "8 pompes sont promises à deux commandes.",
    consequence: "Physique : 50 ; réservé : 8 ; disponible calculé : 42.",
    color: "#a78bfa",
  },
  {
    time: "10 h 20",
    event: "Transfert",
    detail:
      "10 pompes quittent le dépôt A. L’arrivée au dépôt B n’est pas confirmée.",
    consequence:
      "Le transfert doit rester visible « en attente », pas disparaître entre les dépôts.",
    color: "#60a5fa",
  },
  {
    time: "13 h 40",
    event: "Casse",
    detail: "2 pompes sont isolées, mais la casse n’est pas saisie.",
    consequence:
      "Le site peut encore annoncer 42 disponibles alors que seules 30 le sont selon la règle publiée ici : les 8 réservées, les 10 en transit et les 2 cassées sont exclues.",
    color: "#fb7185",
  },
  {
    time: "15 h 10",
    event: "Retour",
    detail:
      "1 pompe revient d’un client et attend un contrôle sans mouvement enregistré.",
    consequence:
      "Elle est physiquement présente, mais ne doit pas redevenir vendable sans décision.",
    color: "#fbbf24",
  },
];

const movementFields = [
  {
    label: "Date et heure du fait",
    value:
      "Quand le produit a réellement changé d’état, pas quand on a corrigé le fichier.",
  },
  {
    label: "Quantité avant",
    value: "Le nombre et l’unité connus juste avant le mouvement.",
  },
  {
    label: "Événement",
    value:
      "Réception, réservation, déplacement, consommation, retour, casse, expédition ou correction.",
  },
  {
    label: "Quantité après",
    value: "Le résultat attendu si le mouvement est appliqué une seule fois.",
  },
  {
    label: "Lieu et statut",
    value: "Dépôt, zone, emplacement, en transit, quarantaine ou vendable.",
  },
  {
    label: "Auteur et document",
    value: "Le rôle qui confirme et la commande, réception ou pièce liée.",
  },
  {
    label: "Système",
    value:
      "ERP, site, module terrain ou support manuel qui a créé l’événement.",
  },
  {
    label: "Anomalie",
    value:
      "Absent, tardif, doublé, mauvaise unité, mauvais lieu ou correction sans motif.",
  },
];

const tocItems = [
  { id: "verdict", label: "Le verdict en 90 secondes" },
  { id: "bilan", label: "Fermer l’égalité du stock" },
  { id: "cout-erreurs", label: "Chiffrer le coût des écarts" },
  { id: "outils", label: "ERP, WMS, hybride ou sur-mesure" },
  { id: "test", label: "Tester 15 événements réels" },
  { id: "tco", label: "Comparer le coût sur 36 mois" },
  { id: "reapprovisionnement", label: "Définir le réapprovisionnement" },
  { id: "migration", label: "Migrer sans bloquer les expéditions" },
  { id: "obligations", label: "Inventaire, lots et obligations" },
  { id: "sources", label: "Sources et limites" },
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
          { label: "Logiciel de gestion de stock sur mesure" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Votre ERP, l’entrepôt et le site se contredisent ? Diagnostiquez l’écart, comparez ERP, WMS, solution hybride et sur-mesure, puis calculez leur coût sur 36 mois."
        heroAction={{ href: "#test", label: "Télécharger la grille de test" }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "1 référence suivie",
            description: "",
            color: "emerald",
          },
          {
            number: "02",
            title: "15 événements à tester",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "3 coûts complets comparés",
            description: "",
            color: "amber",
          },
          {
            number: "04",
            title: `Lecture : ${guide.readTimeMin} min`,
            description: "",
            color: "violet",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/erp-ou-logiciel-sur-mesure",
            label: "Choisir entre ERP et logiciel sur mesure",
          },
          {
            href: "/guides/application-suivi-production-pme",
            label: "Suivre la production d’une PME",
          },
          {
            href: "/guides/connecter-erp-crm-logiciel-metier",
            label: "Connecter ERP, CRM et logiciel métier",
          },
        ]}
        faqTitle="Questions fréquentes sur la gestion de stock"
        faqItems={faqItems}
        showSidebarCta={false}
      >
        <div id="verdict" className="scroll-mt-24">
          <p className="lead">
            <strong>
              Votre ERP indique 42 unités, l’entrepôt en compte 38 et votre site
              en promet encore 41. Faut-il changer de logiciel ? Pas encore.
            </strong>{" "}
            La première dépense utile consiste à retrouver le mouvement qui a
            créé l’écart : réception non confirmée, transfert resté en attente,
            casse, retour ou double saisie. Ensuite seulement, comparez quatre
            voies : corriger le travail, reconfigurer l’existant, adopter un
            logiciel standard ou développer le morceau réellement spécifique.
            Notre avis professionnel est clair : ne reconstruisez pas les
            fonctions courantes d’un ERP ou d’un logiciel d’entrepôt si un
            standard sait les exécuter sur vos cas réels. Le sur-mesure devient
            rationnel lorsqu’une règle stable et importante vaut davantage que
            son surcoût sur plusieurs années. Ce guide vous donne le contrôle à
            refaire, une grille de quinze événements et un comparatif sur 36
            mois.
          </p>
        </div>

        <GuideToc items={tocItems} />

        <InfoBox
          variant="amber"
          title="Notre intérêt commercial ne doit pas décider à votre place"
        >
          <p className="mb-0">
            Hagnéré Code développe des applications sur mesure. Nous pourrions
            donc gagner davantage à vous conseiller une reconstruction. Notre
            position publiée est l’inverse : gardez ou achetez la mécanique
            commune, puis ne développez que la règle, le geste terrain ou la
            connexion que deux essais standards n’ont pas su couvrir proprement.
          </p>
        </InfoBox>

        <GuideTable
          caption="Première orientation avant tout devis"
          headers={[
            "Ce que vous observez",
            "Première action",
            "Ne signez pas encore",
          ]}
          rows={[
            [
              "Un mouvement n’est pas saisi ou personne ne sait qui le confirme",
              "Clarifier la responsabilité et mesurer dix mouvements.",
              "Un nouveau logiciel : il reproduirait le flou.",
            ],
            [
              "La fonction existe mais les droits, états ou emplacements sont mal réglés",
              "Reconfigurer l’outil actuel sur une référence pilote.",
              "Une migration complète.",
            ],
            [
              "Les flux sont classiques mais l’outil actuel ne couvre pas l’entrepôt",
              "Tester un ERP, un logiciel de stock ou un WMS standard.",
              "Un développement avant démonstration sur vos mauvais cas.",
            ],
            [
              "Une règle stable, critique et chiffrée échoue dans deux standards",
              "Comparer un module ciblé et une application spécifique sur 36 mois.",
              "Un mini-ERP complet si seule une étape est distinctive.",
            ],
          ]}
        />

        <p>
          <strong>Ne rien développer maintenant est une vraie décision.</strong>{" "}
          Si dix mouvements suffisent à révéler une responsabilité absente, une
          unité mal définie ou un paramétrage inutilisé, corrigez ce point et
          mesurez à nouveau. Un projet logiciel ne devient utile que lorsque le
          problème restant est stable, observable et assez important pour
          financer sa correction.
        </p>

        <h2 id="bilan">
          Le mot « stock » cache six nombres qui ne répondent pas à la même
          question
        </h2>

        <p>
          Deux chiffres différents ne prouvent pas immédiatement qu’un logiciel
          est faux. Ils peuvent décrire deux états différents. L’erreur commence
          lorsque l’écran n’indique plus clairement la question à laquelle il
          répond.
        </p>

        <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
          {stockMeanings.map((meaning) => (
            <section
              key={meaning.title}
              className={`rounded-2xl border p-5 ${meaning.color}`}
            >
              <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-zinc-100">
                {meaning.title}
              </h3>
              <p className="mb-0 mt-2 text-sm font-medium leading-relaxed text-zinc-800 dark:text-zinc-200">
                {meaning.question}
              </p>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {meaning.warning}
              </p>
            </section>
          ))}
        </div>

        <p>
          La formule du disponible appartient à l’entreprise. Elle peut, par
          exemple, retirer les réservations et les produits en quarantaine du
          physique vendable. Écrivez cette règle avant d’exiger « le stock en
          temps réel ». Un nombre mis à jour immédiatement reste faux si
          l’événement physique n’a jamais été confirmé.
        </p>

        <h2 id="incident">
          Exemple fictif : cinq mouvements, trois chiffres de stock différents
        </h2>

        <InfoBox
          variant="amber"
          title="Exemple illustratif fictif — Atelier Orbe"
        >
          <p className="mb-0">
            Cette entreprise et ces chiffres sont inventés pour expliquer la
            méthode. Cet exemple ne décrit ni un client ni un cas réel ; il ne
            présente aucun résultat obtenu par Hagnéré Code.
          </p>
        </InfoBox>

        <div className="not-prose relative my-8 space-y-4 border-l-2 border-zinc-200 pl-5 dark:border-zinc-800 sm:pl-8">
          {fictionalMovements.map((movement) => (
            <section
              key={movement.time}
              className="relative rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <span
                className="absolute -left-[30px] top-6 size-3 rounded-full ring-4 ring-white dark:ring-zinc-950 sm:-left-[39px]"
                style={{ backgroundColor: movement.color }}
              />
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-lg bg-zinc-950 px-2.5 py-1 font-mono text-xs font-bold text-white dark:bg-white dark:text-zinc-950">
                  {movement.time}
                </span>
                <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-zinc-100">
                  {movement.event}
                </h3>
              </div>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {movement.detail}
              </p>
              <p className="mb-0 mt-2 text-sm font-medium leading-relaxed text-zinc-900 dark:text-zinc-100">
                Conséquence : {movement.consequence}
              </p>
            </section>
          ))}
        </div>

        <p>
          Fermez maintenant l’égalité. Dans cet exemple, le transfert parti
          n’est pas vendable tant que le dépôt B ne l’a pas reçu. Les deux
          pompes cassées et le retour en contrôle ne le sont pas non plus. La
          règle peut différer chez vous ; ce qui n’est pas négociable, c’est de
          pouvoir expliquer chaque unité.
        </p>

        <FormulaBox>
          {`Disponible au dépôt A
= 50 reçues - 8 réservées - 10 parties en transfert - 2 cassées
= 30 unités

Contrôle inverse de toute la chaîne
= 30 disponibles + 8 réservées + 10 en transit + 2 cassées + 1 retour en contrôle
= 51 unités

Origine des 51 unités
= 50 reçues initialement + 1 retour client
= 51 unités`}
        </FormulaBox>

        <InfoBox variant="blue" title="Si l’égalité ne ferme pas, arrêtez là">
          <p className="mb-0">
            Ne comparez pas encore des devis. Tant qu’une unité peut disparaître
            entre « disponible », « réservée », « en transit » et « non vendable
            », vous ne savez pas si le problème vient d’une règle, d’une saisie,
            d’une interface ou du logiciel. Le premier livrable utile est la
            cause de l’écart, pas une liste d’écrans.
          </p>
        </InfoBox>

        <p>
          Le transfert non confirmé, la casse absente et le retour en attente ne
          demandent pas le même correctif. Un inventaire peut remettre le nombre
          théorique au niveau du comptage. Il n’explique pas pourquoi l’écart
          est apparu. La{" "}
          <a
            href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-count-adjust-reclassify"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation Microsoft Business Central sur les comptages et
            ajustements
          </a>{" "}
          illustre justement l’enregistrement d’ajustements et de comptages
          cycliques. Ce fonctionnement d’un produit n’est pas une obligation
          universelle, mais il montre une exigence utile : la correction doit
          laisser une trace.
        </p>

        <h2 id="enquete">
          Rejouez les dix derniers mouvements avant de parler de développement
        </h2>

        <p>
          Choisissez la référence dont l’écart crée le plus de travail ou de
          risque. Ne commencez pas par tout l’entrepôt. Reconstituez dix
          mouvements consécutifs avec ces huit champs :
        </p>

        <div className="not-prose my-8 grid gap-3 sm:grid-cols-2">
          {movementFields.map((field, index) => (
            <div
              key={field.label}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/60"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-zinc-950 text-xs font-bold text-white dark:bg-white dark:text-zinc-950">
                  {index + 1}
                </span>
                <h3 className="m-0 text-sm font-bold text-zinc-950 dark:text-zinc-100">
                  {field.label}
                </h3>
              </div>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {field.value}
              </p>
            </div>
          ))}
        </div>

        <p>
          Arrêtez-vous au premier écart. Demandez quel système crée le
          mouvement, à quel moment il devient officiel, qui peut le corriger et
          comment une erreur est reprise. Si l’ERP, le site et un fichier
          peuvent tous modifier la même quantité, la première décision n’est pas
          l’écran : c’est le système qui fait foi.
        </p>

        <InfoBox
          variant="blue"
          title="Le code-barres identifie ; le geste confirme"
        >
          <p className="mb-0">
            Un scan peut réduire une erreur de référence. Il ne prouve pas que
            dix unités ont été reçues, que le déplacement est terminé ou que les
            unités cassées ont bien été isolées et rendues non vendables. Testez
            le geste complet avec l’appareil, le réseau, les gants, les
            interruptions et la possibilité de corriger.
          </p>
        </InfoBox>

        <h2 id="cout-erreurs">
          Commencez par chiffrer ce que les écarts vous coûtent vraiment
        </h2>

        <p>
          Une équipe peut se plaindre du stock chaque semaine sans que le
          problème justifie un nouveau logiciel. À l’inverse, quelques erreurs
          rares peuvent être très coûteuses si elles bloquent une production,
          provoquent une réexpédition ou rendent une traçabilité impossible.
          Comptez d’abord ce que vous pouvez prouver : temps de recherche et
          surcoûts directement attribuables. Laissez de côté la réputation, les
          ventes perdues et les litiges tant que vous ne savez pas les mesurer
          sans les compter deux fois.
        </p>

        <GuideTable
          caption="Trois scénarios fictifs de coût des anomalies — à remplacer par votre journal réel"
          headers={["Scénario", "Hypothèses visibles", "Coût calculé"]}
          rows={[
            [
              "Simple",
              "6 anomalies × 12 min × 28 €/h, plus 1 réexpédition à 30 €.",
              "63,60 €/mois ; 763,20 €/an.",
            ],
            [
              "Central",
              "18 anomalies × 22 min × 32 €/h, plus 3 réexpéditions à 45 €.",
              "346,20 €/mois ; 4 154,40 €/an.",
            ],
            [
              "Exigeant",
              "45 anomalies × 35 min × 40 €/h, plus 8 réexpéditions à 70 €.",
              "1 610 €/mois ; 19 320 €/an.",
            ],
          ]}
        />

        <FormulaBox>
          {`Coût mensuel central
= 18 anomalies × 22 min ÷ 60 × 32 €/h
+ 3 réexpéditions × 45 €
= 211,20 € de temps + 135 € de transport
= 346,20 € par mois

Coût annuel = 346,20 € × 12 = 4 154,40 €

Si 60 % seulement sont réellement évitables :
4 154,40 € × 60 % = 2 492,64 € par an`}
        </FormulaBox>

        <p>
          Cette dernière ligne change la décision. Si votre seule valeur
          démontrée est de 2 492,64 € par an, financer 100 000 € de spécifique
          pour la récupérer serait incohérent. Le projet peut néanmoins devenir
          rationnel si le même mouvement supprime aussi un risque de rappel,
          évite un arrêt de production ou libère une capacité mesurée. Ajoutez
          ces effets séparément, avec leur propre preuve.
        </p>

        <h2 id="outils">
          ERP, logiciel de stock, WMS, hybride ou sur-mesure : qui fait quoi ?
        </h2>

        <p>
          Un ERP relie généralement le stock aux achats, ventes, finances ou à
          la production. Un WMS — logiciel de gestion d’entrepôt — va plus loin
          dans l’exécution : emplacements, réception, rangement, préparation,
          inventaires et déplacements. Un outil autonome peut suffire à une
          activité simple. Ces catégories se chevauchent ; le nom du produit ne
          remplace jamais une démonstration.
        </p>

        <GuideTable
          caption="Choisir une famille de solution avant de choisir une marque"
          headers={["Voie", "Quand la tester", "Refusez-la si"]}
          rows={[
            [
              "Corriger le processus",
              "La fonction existe et l’écart vient d’une étape non définie ou non réalisée.",
              "Dix mouvements restent faux malgré une règle et une responsabilité claires.",
            ],
            [
              "ERP ou logiciel de stock",
              "Achats, ventes, quantités et inventaires suivent des règles assez courantes.",
              "Retour, casse, transfert, correction ou export exigent encore un fichier parallèle.",
            ],
            [
              "WMS standard",
              "Plusieurs emplacements, préparations, scans ou vagues structurent l’entrepôt.",
              "Le préparateur ne peut pas exécuter les mauvais cas sur le matériel et le réseau réels.",
            ],
            [
              "Standard + parcours ciblé",
              "Le socle est valable, mais un quai, un atelier ou un client impose un geste particulier.",
              "Le module crée un deuxième stock ou ses erreurs d’interface ne peuvent pas être rejouées.",
            ],
            [
              "Application spécifique",
              "Plusieurs règles stables et critiques échouent dans les standards testés.",
              "La valeur annuelle de l’écart ne dépasse pas le surcoût, maintenance et sortie comprises.",
            ],
          ]}
        />

        <h3>Un tarif catalogue n’est pas le coût du projet</h3>

        <p>
          La page officielle de{" "}
          <a
            href="https://www.microsoft.com/fr-fr/dynamics-365/products/business-central/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft Business Central
          </a>{" "}
          affichait le 24 juillet 2026 69,30 € HT par utilisateur et par mois
          pour Essentials, 95,30 € pour Premium et 6,90 € pour Team Members,
          avec paiement annuel. Microsoft précise que les prix peuvent varier
          selon le pays et que le prix réel apparaît à l’achat. Ces montants
          montrent surtout le piège : ils ne comprennent pas automatiquement le
          partenaire, le paramétrage, la reprise, les extensions, les terminaux,
          la formation, le support ou la sortie.
        </p>

        <p>
          La documentation d’{" "}
          <a
            href="https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/inventory_management/count_products.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Odoo 19 sur les ajustements d’inventaire
          </a>{" "}
          décrit quantité enregistrée, quantité comptée, différence, date,
          responsable, motif et historique. Business Central documente de son
          côté les comptages, ajustements, reclassements et inventaires
          tournants. Cela prouve que ces fonctions existent dans des produits
          standards ; cela ne prouve pas qu’elles conviennent à votre flux,
          votre appareil ou votre contrat.
        </p>

        <InfoBox
          variant="amber"
          title="Ce guide ne prétend pas avoir testé des comptes éditeur"
        >
          <p className="mb-0">
            Nous avons vérifié les documentations et tarifs publics cités, pas
            provisionné puis éprouvé un compte Business Central, Odoo ou WMS
            avec votre configuration. La sélection finale doit donc rejouer les
            mêmes événements dans deux produits présélectionnés. Une brochure
            fonctionnelle n’est pas un résultat de test.
          </p>
        </InfoBox>

        <h2 id="test">
          Faites rejouer quinze événements, pas une démonstration idéale
        </h2>

        <p>
          Donnez au fournisseur un jeu d’essai identique et observez la personne
          qui utilisera réellement l’outil. Pour chaque événement, notez :
          réussite sans aide, détour acceptable, contournement extérieur ou
          échec. Chronométrez le geste, demandez la preuve conservée et exportez
          le résultat. Le vendeur ne choisit ni la référence la plus propre ni
          le parcours le plus facile.
        </p>

        <GuideTable
          caption="Les quinze événements du test commun"
          headers={["# et événement", "Résultat attendu", "Signal d’alerte"]}
          rows={[
            [
              "1. Réception complète",
              "Article, quantité, lieu, heure, auteur et pièce liée sont visibles.",
              "La réception peut être validée sans preuve.",
            ],
            [
              "2. Réception partielle",
              "Le reliquat reste explicite sans faire croire que tout est reçu.",
              "La quantité attendue remplace la quantité réelle.",
            ],
            [
              "3. Réservation puis 4. annulation",
              "Le disponible baisse puis remonte une seule fois.",
              "La réservation est confondue avec une sortie physique.",
            ],
            [
              "5. Transfert A vers B hors réseau",
              "Le stock reste en transit jusqu’à confirmation et se resynchronise sans doublon.",
              "Dix unités disparaissent ou existent dans deux dépôts.",
            ],
            [
              "6. Réception du transfert",
              "Le dépôt B confirme ; le mouvement garde son identifiant d’origine.",
              "Une nouvelle entrée sans lien est créée.",
            ],
            [
              "7. Double scan",
              "Le second scan est bloqué, signalé ou rendu réversible.",
              "Le même événement est appliqué deux fois.",
            ],
            [
              "8. Casse",
              "Les unités deviennent non vendables avec motif, auteur et preuve.",
              "Une simple suppression efface l’histoire.",
            ],
            [
              "9. Retour en quarantaine puis 10. remise en vente",
              "Le retour reste non vendable jusqu’à la décision autorisée.",
              "Tout retour augmente immédiatement le disponible.",
            ],
            [
              "11. Inventaire à l’aveugle",
              "Le compteur peut saisir le réel sans être guidé par le théorique.",
              "Le chiffre attendu influence systématiquement le comptage.",
            ],
            [
              "12. Correction",
              "Avant, après, motif, approbateur et écriture inverse restent consultables.",
              "Un administrateur réécrit le nombre sans journal.",
            ],
            [
              "13. Carton de six unités",
              "L’unité d’achat, de stockage et de vente se convertit sans arrondi caché.",
              "Un carton est parfois traité comme une unité.",
            ],
            [
              "14. Lot ou série",
              "L’identifiant suit réception, déplacement, vente et retour.",
              "La quantité est juste mais la traçabilité est cassée.",
            ],
            [
              "15. Deux ventes simultanées",
              "La règle de réservation évite de promettre deux fois la dernière unité.",
              "Le site et le comptoir modifient chacun leur propre stock.",
            ],
          ]}
        />

        <div className="not-prose my-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/20 sm:p-6">
          <p className="m-0 text-sm font-bold text-emerald-950 dark:text-emerald-100">
            Grille prête à utiliser, sans formulaire ni adresse e-mail
          </p>
          <p className="mb-0 mt-2 text-sm leading-relaxed text-emerald-900 dark:text-emerald-200">
            Le fichier contient les quinze événements, les preuves attendues, le
            profil utilisateur, la contrainte terrain, le temps observé et les
            colonnes « réussi / détour / échec ».
          </p>
          <a
            href="/ressources/grille-test-logiciel-stock-15-evenements.csv"
            download
            className="mt-4 inline-flex min-h-11 items-center rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-bold text-white no-underline transition-colors hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
          >
            Télécharger la grille CSV
          </a>
        </div>

        <h2 id="tco">
          Comparez les options sur 36 mois, avec les mêmes postes
        </h2>

        <p>
          L’exemple suivant est entièrement fictif. Ce n’est ni un devis Hagnéré
          Code, ni une moyenne de marché. Il impose seulement une comparaison
          honnête : dix utilisateurs, même jeu d’essai, même périmètre de base
          et même horizon. Les 45 € par licence et 700 € par jour servent à
          expliquer le calcul ; remplacez-les par vos devis et votre coût
          interne.
        </p>

        <p>
          Sont inclus uniquement les postes écrits dans le tableau. Sont exclus
          de cet exemple : terminaux et lecteurs, formation, intégrations hors
          périmètre, taxes, inflation, coût du financement, aléas et fonctions
          qui ne seraient pas communes aux trois options. Ajoutez-les ligne par
          ligne lorsqu’ils s’appliquent ; ne les cachez pas dans une réserve
          générale.
        </p>

        <GuideTable
          caption="Coût total fictif sur 36 mois — montants HT"
          headers={["Option", "Postes inclus sur 36 mois", "Total"]}
          rows={[
            [
              "Standard configuré",
              "Licences 16 200 € + mise en œuvre 8 400 € + temps interne 2 800 € + support 9 000 € + sortie 2 100 €.",
              "38 500 €",
            ],
            [
              "Standard + parcours ciblé",
              "Licences 16 200 € + construction 21 000 € + temps interne 4 200 € + support 18 000 € + sortie 4 200 €.",
              "63 600 €",
            ],
            [
              "Application spécifique",
              "Construction 49 000 € + temps interne 5 600 € + hébergement et maintenance 38 880 € + sortie 8 400 €.",
              "101 880 €",
            ],
          ]}
        />

        <FormulaBox>
          {`Surcoût du spécifique par rapport au standard
= 101 880 € - 38 500 €
= 63 380 € sur 36 mois

Valeur annuelle minimale pour seulement égaler cet écart
= 63 380 € ÷ 3
= 21 126,67 € par an

Ce point mort n’inclut aucune prime pour le risque du projet.`}
        </FormulaBox>

        <p>
          Ce calcul ne dit pas que le standard gagne toujours. Il dit ce que le
          spécifique doit créer ou protéger pour que la comparaison commence à
          devenir défendable. Si la règle distinctive vaut 35 000 € par an et
          reste stable, le débat mérite un pilote. Si sa valeur est seulement
          supposée, le sur-mesure n’a pas encore de dossier économique.
        </p>

        <GuideTable
          caption="Sensibilité : quel poste fragilise le verdict ?"
          headers={["Variation fictive", "Nouveau total", "Conséquence"]}
          rows={[
            [
              "Licence standard : 45 € → 70 € par utilisateur et par mois",
              "47 500 € au lieu de 38 500 €",
              "Le standard reste le moins cher, mais l’écart baisse de 9 000 €.",
            ],
            [
              "Support hybride : 500 € → 800 € par mois",
              "74 400 € au lieu de 63 600 €",
              "L’hybride doit justifier 10 800 € supplémentaires.",
            ],
            [
              "Maintenance spécifique : 900 € → 1 500 € par mois",
              "123 480 € au lieu de 101 880 €",
              "Le point mort face au standard monte à 28 326,67 € par an.",
            ],
          ]}
        />

        <InfoBox variant="emerald" title="Notre position professionnelle">
          <p className="mb-0">
            Achetez la mécanique commune ; développez seulement l’avantage ou la
            contrainte que vous pouvez nommer, tester et chiffrer. Deux
            standards doivent échouer sur le même événement important avant
            qu’une reconstruction complète devienne crédible. Et même alors,
            préférez un parcours ciblé si le reste du stock fonctionne déjà.
            Nous déconseillons de refaire un mini-ERP parce que trois écrans
            affichent des nombres différents.
          </p>
        </InfoBox>

        <h2 id="reapprovisionnement">
          Avant de demander une prévision, écrivez la règle de commande
        </h2>

        <p>
          Une fonction sophistiquée ne peut pas compenser des données
          indéfinies. Le guide officiel australien sur la gestion des stocks
          illustre un point de commande simple à partir de la consommation et du
          délai d’approvisionnement. Ajoutons ici un stock de sécurité choisi
          par l’entreprise :
        </p>

        <FormulaBox>
          {`Demande moyenne = 10 unités par semaine
Délai fournisseur = 2 semaines
Stock de sécurité choisi = 8 unités

Point de commande
= 10 × 2 + 8
= 28 unités

Si le délai réel passe à 3 semaines :
10 × 3 + 8 = 38 unités`}
        </FormulaBox>

        <p>
          Ce n’est pas une formule universelle de prévision. Promotions,
          saisonnalité, variabilité de la demande, quantités minimales et
          fiabilité du fournisseur peuvent imposer une méthode plus riche. Mais
          avant de parler d’intelligence artificielle, vérifiez que l’entreprise
          connaît sa demande moyenne, son délai réel et la raison de son stock
          de sécurité.
        </p>

        <h3>Mesurez la fiabilité sans inventer de norme</h3>

        <ul>
          <li>
            taux de lignes comptées sans écart, avec le périmètre et la date du
            comptage ;
          </li>
          <li>
            anomalies pour 100 mouvements, séparées par type et emplacement ;
          </li>
          <li>temps médian entre le fait physique et sa confirmation ;</li>
          <li>corrections sans motif ou sans pièce associée ;</li>
          <li>
            ruptures et urgences dont la cause est réellement un stock faux,
            distinctes d’un retard fournisseur ou d’une prévision erronée.
          </li>
        </ul>

        <p>
          Business Central documente les inventaires tournants, qui permettent
          de compter certains articles plus souvent selon leur importance. La
          fréquence reste votre décision : aucune documentation produit ne
          fournit un rythme universel adapté à toutes les PME.
        </p>

        <h2 id="migration">
          Changez par une référence pilote sans bloquer les expéditions
        </h2>

        <p>
          La migration ne commence pas avec l’import de toutes les références.
          Elle commence avec un périmètre assez petit pour être recompté et
          assez difficile pour révéler les défauts : une famille d’articles, un
          emplacement, un lot, des retours et au moins un transfert.
        </p>

        <GuideTable
          caption="Plan de bascule contrôlable"
          headers={["Étape", "Preuve attendue", "Condition d’arrêt"]}
          rows={[
            [
              "1. Geler les définitions",
              "États, unités, emplacements, formule du disponible, responsables et système de référence sont écrits.",
              "Deux équipes emploient encore le même mot pour des quantités différentes.",
            ],
            [
              "2. Nettoyer le pilote",
              "Comptage physique daté, doublons et unités revus, ajustements motivés.",
              "Le solde d’ouverture ne ferme pas par lieu et statut.",
            ],
            [
              "3. Rejouer les quinze événements",
              "Résultats, durées, détours, droits et preuves sont consignés.",
              "Un cas critique échoue sans procédure de secours.",
            ],
            [
              "4. Faire fonctionner en parallèle",
              "Ancien et nouveau sont rapprochés, mais un seul système crée les mouvements officiels.",
              "Deux sources peuvent modifier la même quantité.",
            ],
            [
              "5. Tester la sortie",
              "Export complet, associations, historique, lots, emplacements et pièces sont relus.",
              "L’entreprise ne sait pas restaurer ou poursuivre sans le fournisseur.",
            ],
            [
              "6. Décider : lancer, lancer sous conditions ou arrêter",
              "Le responsable métier signe l’égalité, les réserves et le plan de support.",
              "Un écart reste inexpliqué ou le terrain refuse le geste.",
            ],
          ]}
        />

        <h3>Budgétez aussi le nettoyage et le double contrôle</h3>

        <p>
          Dans cet autre exemple fictif, la reprise porte sur 12 000 lignes de
          stock. Sept pour cent nécessitent une vérification manuelle de cinq
          minutes. Ajoutons cinq jours de préparation technique et soixante
          heures de double contrôle par l’équipe :
        </p>

        <FormulaBox>
          {`Nettoyage
= 12 000 lignes × 7 % × 5 min ÷ 60 × 35 €/h
= 2 450 €

Préparation du pilote = 5 jours × 700 € = 3 500 €
Double contrôle = 60 h × 35 € = 2 100 €

Minimum visible de reprise
= 2 450 € + 3 500 € + 2 100 €
= 8 050 €`}
        </FormulaBox>

        <p>
          Ce minimum exclut terminaux, étiquettes, indisponibilité, transport,
          nettoyage des articles, interfaces et reprise d’historique. Il sert à
          empêcher un devis de masquer le temps interne, pas à prédire votre
          budget.
        </p>

        <p>
          Si vous ajoutez le suivi par lot ou numéro de série à un stock déjà
          existant, traitez-le comme une reprise de données.{" "}
          <a
            href="https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/product_tracking/reassign.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            La documentation Odoo 19 sur la réaffectation de lots et séries
          </a>{" "}
          avertit qu’activer ce suivi après l’existence du stock peut créer des
          incohérences et décrit deux ajustements : retirer les quantités sans
          identifiant, puis les réintroduire avec lot ou série. Cette procédure
          concerne Odoo ; la question vaut partout : comment chaque unité
          existante reçoit-elle son identifiant sans perte ni double comptage ?
        </p>

        <h2 id="obligations">
          Inventaire comptable, stock opérationnel et traçabilité : ne mélangez
          pas trois sujets
        </h2>

        <p>
          En France, l’{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000030927443"
            target="_blank"
            rel="noopener noreferrer"
          >
            article R123-177 du Code de commerce
          </a>{" "}
          définit l’inventaire comme le contrôle annuel, à la clôture, de
          l’existence et de la valeur des éléments d’actif et de passif. Il
          demande aussi d’organiser les données de façon à justifier les postes
          du bilan. Ce texte n’impose ni WMS, ni scan, ni fréquence universelle
          d’inventaire tournant. Il ne remplace pas non plus les règles
          comptables de valorisation.
        </p>

        <GuideTable
          caption="Trois périmètres à faire valider par les bonnes personnes"
          headers={["Sujet", "Question", "Interlocuteur à associer"]}
          rows={[
            [
              "Stock opérationnel",
              "Que peut-on recevoir, déplacer, réserver, préparer ou vendre maintenant ?",
              "Responsable opérations, entrepôt, achats, vente et équipe logiciel.",
            ],
            [
              "Inventaire comptable",
              "Comment l’existence et la valeur sont-elles contrôlées et justifiées à la clôture ?",
              "Direction financière et expert-comptable.",
            ],
            [
              "Traçabilité sectorielle",
              "Quel objet, lot, série, événement, document et délai de conservation sont exigés ?",
              "Responsable qualité, métier, juriste ou autorité compétente selon le secteur.",
            ],
          ]}
        />

        <p>
          Le{" "}
          <a
            href="https://www.gs1.org/standards/gs1-global-traceability-standard/current-standard"
            target="_blank"
            rel="noopener noreferrer"
          >
            standard mondial de traçabilité GS1
          </a>{" "}
          organise la logique autour d’« identifier, capturer, partager » et
          distingue l’article, le lot et l’unité sérialisée. Le niveau pertinent
          dépend de l’objectif et de la chaîne. Un numéro de série apporte une
          finesse supplémentaire, mais aussi davantage de saisie, de marquage,
          de contrôle et de coût. Ne le généralisez pas sans besoin métier ou
          exigence applicable.
        </p>

        <GuideInlineCTA
          title="Transformer vos écarts en décision chiffrée"
          description="Venez avec une référence, ses dix derniers mouvements, le coût observé des anomalies et deux options à comparer. Le premier livrable doit distinguer les causes, les corrections sans développement, le standard, l’hybride et le spécifique sur le même horizon — y compris si la conclusion est de conserver votre outil."
          tags={[
            "Causes avant solution",
            "Coût complet sur 36 mois",
            "Développement déconseillé si inutile",
          ]}
          ctaLabel="Cadrer la décision stock"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="sources">Sources visibles et limites</h2>

        <ul>
          <li>
            <a
              href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-count-adjust-reclassify"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Learn — compter, ajuster et reclasser un stock
            </a>{" "}
            : exemple de journal d’ajustement et de comptage cyclique dans
            Business Central.
          </li>
          <li>
            <a
              href="https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/inventory_management/count_products.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Odoo 19 — ajustements d’inventaire
            </a>{" "}
            : exemple de quantité enregistrée, quantité comptée, différence,
            date, utilisateur et historique.
          </li>
          <li>
            <a
              href="https://www.gs1.org/standards/gs1-global-traceability-standard/current-standard"
              target="_blank"
              rel="noopener noreferrer"
            >
              GS1 — Global Traceability Standard
            </a>{" "}
            : identification des articles, lots, séries et unités logistiques
            lorsque la chaîne et le secteur le justifient.
          </li>
          <li>
            <a
              href="https://business.gov.au/products-and-services/inventory-management/manage-your-inventory"
              target="_blank"
              rel="noopener noreferrer"
            >
              Australian Government — gérer son stock
            </a>{" "}
            : demande moyenne, délai d’approvisionnement, point de commande,
            comptage et revue des écarts.
          </li>
          <li>
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000030927443"
              target="_blank"
              rel="noopener noreferrer"
            >
              Légifrance — article R123-177 du Code de commerce
            </a>{" "}
            : définition et organisation des données de l’inventaire annuel.
          </li>
        </ul>

        <p>
          Ce guide n’établit ni une méthode de valorisation comptable, ni une
          obligation sectorielle de traçabilité, ni un taux d’exactitude ou un
          retour sur investissement universel. Confirmez les obligations de
          votre activité avec les spécialistes compétents.
        </p>

        <p>
          Si la question porte d’abord sur le système global de gestion,
          poursuivez avec le comparatif{" "}
          <Link href="/guides/erp-ou-logiciel-sur-mesure">
            ERP ou logiciel sur mesure
          </Link>
          . Si les écarts naissent lors de la consommation de matières ou de la
          fabrication, consultez aussi le guide sur le{" "}
          <Link href="/guides/application-suivi-production-pme">
            suivi de production en PME
          </Link>
          .
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
