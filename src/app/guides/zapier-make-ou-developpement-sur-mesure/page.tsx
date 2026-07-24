import Link from "next/link";
import {
  FormulaBox,
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

const guide = getGuide("zapier-make-ou-developpement-sur-mesure");

export const metadata = buildGuideMetadata(
  guide,
  "Zapier, Make ou développement sur mesure : réparer ou reconstruire",
);

const [articleJsonLd, breadcrumbJsonLd] = buildGuideStructuredData(
  guide,
  "Zapier, Make ou développement sur mesure",
);

const faqItems: GuideFAQItem[] = [
  {
    question: "Make ou Zapier est-il le moins cher ?",
    answer:
      "Cela dépend du flux, des actions exécutées, des chemins, des fonctions utilisées, du volume, du plan et de la date. Reconstituez trente jours de consommation avec le modèle tarifaire actuel de chaque plateforme. Comparez aussi le temps de correction et les options nécessaires, pas seulement le prix d’entrée.",
  },
  {
    question: "Quand faut-il passer au développement sur mesure ?",
    answer:
      "Lorsque le flux est stable, important pour l’activité et durablement mal couvert malgré une configuration correcte ou une petite extension. Le code doit apporter une amélioration mesurable tout en finançant hébergement, surveillance, maintenance et reprise. Il n’existe pas de seuil universel d’exécutions.",
  },
  {
    question: "Que faire lorsqu’une API renvoie une erreur 429 ?",
    answer:
      "Une erreur 429 indique généralement que trop de requêtes ont été envoyées dans la fenêtre autorisée. Consultez la documentation de l’API concernée, ralentissez, regroupez ou mettez en file les appels, respectez les indications de reprise et testez les doublons. La limite vient souvent du service connecté, pas seulement de Make ou Zapier.",
  },
  {
    question: "Les exécutions en erreur sont-elles facturées ?",
    answer:
      "Les règles diffèrent selon la plateforme, le type d’étape et l’évolution des offres. Zapier documente généralement les actions réussies comme tâches et Make décrit la consommation par crédits selon les modules et fonctions. Vérifiez vos journaux et votre facture actuelle ; une erreur non facturée peut tout de même coûter du temps ou perdre une opération.",
  },
  {
    question: "Un prestataire peut-il reprendre un scénario existant ?",
    answer:
      "Oui, si l’entreprise contrôle le compte, les connexions, les secrets, la documentation et les données de test. Demandez d’abord une cartographie, une copie ou un environnement sûr et un journal des erreurs. La reprise peut conduire à garder le scénario, à le simplifier ou à ne coder qu’une seule étape.",
  },
  {
    question: "Que se passe-t-il si la plateforme change ses tarifs ?",
    answer:
      "Votre coût peut évoluer sans que le flux métier change. Conservez le calcul des événements et actions, surveillez la consommation et prévoyez une revue périodique. Pour un flux critique, documentez aussi comment le mettre en pause, l’exporter ou le remplacer. Cette réversibilité ne rend pas automatiquement le code plus rentable.",
  },
];

const keyPoints: GuideSidebarKeyPoint[] = [
  {
    number: "01",
    title: "30 jours observés",
    description: "",
    color: "blue",
  },
  {
    number: "02",
    title: "5 pannes testées",
    description: "",
    color: "amber",
  },
  {
    number: "03",
    title: "Option hybride",
    description: "",
    color: "violet",
  },
  {
    number: "04",
    title: `Lecture : ${guide.readTimeMin} min`,
    description: "",
    color: "emerald",
  },
];

const relatedLinks: GuideSidebarLink[] = [
  {
    href: "/guides/automatiser-processus-metier",
    label: "Choisir le processus à automatiser",
  },
  {
    href: "/guides/connecter-erp-crm-logiciel-metier",
    label: "Cartographier les échanges entre logiciels",
  },
  {
    href: "/guides/no-code-ou-sur-mesure",
    label: "Comparer no-code et développement",
  },
  {
    href: "/guides/calculer-roi-application-metier",
    label: "Calculer le ROI d’une automatisation",
  },
];

const tocItems = [
  { id: "incident", label: "Partir d’une commande en double" },
  { id: "dessiner", label: "Dessiner un seul flux" },
  { id: "trente-jours", label: "Observer trente jours" },
  { id: "cinq-pannes", label: "Provoquer cinq pannes" },
  { id: "responsable", label: "Nommer la personne qui corrige" },
  { id: "cout", label: "Comparer le coût sur 12 et 36 mois" },
  { id: "verdict", label: "Choisir parmi cinq verdicts" },
  { id: "action", label: "Auditer sans casser la production" },
  { id: "sources", label: "Sources et limites" },
];

const failureTests = [
  {
    name: "Donnée invalide",
    action:
      "Envoyez une adresse, une date ou un identifiant volontairement incorrect dans un environnement de test.",
    proof:
      "L’erreur indique l’étape, la donnée et l’action possible sans exposer de secret.",
  },
  {
    name: "Limite de débit",
    action:
      "Simulez ou reproduisez prudemment la réponse 429 documentée par le service connecté.",
    proof: "Le flux ralentit, met en file ou reprend selon une règle connue.",
  },
  {
    name: "Service indisponible",
    action:
      "Coupez l’accès au service de destination ou utilisez une réponse de test en échec.",
    proof: "L’événement n’est ni perdu ni déclaré réussi à tort.",
  },
  {
    name: "Même événement deux fois",
    action: "Rejouez la même commande avec le même identifiant métier.",
    proof:
      "Le flux retrouve l’action existante ou bloque le doublon selon la règle choisie.",
  },
  {
    name: "Secret expiré",
    action:
      "Révoquez une clé de test puis suivez l’alerte et son remplacement.",
    proof:
      "Une personne nommée reçoit l’information et peut rétablir le flux sans chercher le secret dans le scénario.",
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
          { label: "Zapier, Make ou développement" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Une automatisation peut créer une commande en double puis perdre la suivante. Avant de tout réécrire, mesurez trente jours, testez cinq pannes et comparez le coût de l’exploitation — pas seulement l’abonnement ou le devis."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={keyPoints}
        relatedLinks={relatedLinks}
        faqTitle="Questions fréquentes sur Make, Zapier et le développement sur mesure"
        faqItems={faqItems}
        showSidebarCta={false}
      >
        <p className="lead">
          Exemple illustratif fictif : imaginez qu’hier, votre automatisation
          ait créé deux commandes identiques et que, ce matin, la suivante ne
          soit jamais arrivée en facturation. Faut-il quitter Make ou Zapier et
          faire développer la connexion ? Un flux part d’un événement et met à
          jour d’autres outils. Gardez la plateforme
          si ce flux traite le volume attendu, rend ses erreurs visibles et
          permet de les reprendre sans doublon. Réparez-la si le problème vient
          d’une donnée, d’une limite ou d’une mauvaise alerte. Développez
          seulement la règle ou la connexion qui résiste si une solution hybride
          suffit. Ne remplacez tout le flux que s’il est stable, critique et que
          le coût complet du code inclut sa surveillance et sa maintenance.
          Enfin, arrêtez une automatisation qui coûte plus de corrections
          qu’elle n’évite de travail. La décision commence par trente jours de
          faits et cinq pannes testées, jamais par un seuil magique de tâches.
        </p>

        <InfoBox variant="emerald" title="La réponse courte">
          Ne reconstruisez pas avant d’avoir dessiné un flux, rapproché ses
          journaux de sa facture et montré qui sait corriger cinq erreurs sans
          perdre ni dupliquer l’opération métier.
        </InfoBox>

        <GuideToc items={tocItems} />

        <h2 id="incident">
          La commande en double raconte mieux le problème qu’un comparatif
        </h2>
        <p>
          Commencez par l’incident. Quel événement est parti ? Quelles actions
          ont réellement réussi ? Le message d’erreur est-il arrivé avant ou
          après la création de la facture ? Une personne a-t-elle cliqué sur «
          rejouer » sans voir que la commande existait déjà ? Ces réponses
          séparent trois problèmes souvent confondus :
        </p>

        <div className="not-prose my-8 grid gap-4 md:grid-cols-3">
          <section className="rounded-2xl border border-blue-200 bg-blue-50/50 p-5 dark:border-blue-900 dark:bg-blue-950/20">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300">
              Configuration
            </p>
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              Le scénario fait mal ce qui était prévu
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Une condition, un champ ou une branche doit être corrigé. Le
              changement de plateforme n’est pas encore justifié.
            </p>
          </section>
          <section className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5 dark:border-amber-900 dark:bg-amber-950/20">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-300">
              Exploitation
            </p>
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              L’erreur existe, mais personne ne la voit
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Il faut une alerte, un propriétaire, un contexte et une procédure
              de reprise.
            </p>
          </section>
          <section className="rounded-2xl border border-violet-200 bg-violet-50/50 p-5 dark:border-violet-900 dark:bg-violet-950/20">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-violet-700 dark:text-violet-300">
              Architecture
            </p>
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              La plateforme ne peut pas exprimer la règle stable
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Une extension ciblée ou un développement peut devenir pertinent
              après avoir vérifié que le problème ne vient ni des données ni du
              réglage.
            </p>
          </section>
        </div>

        <p>
          Le code peut rencontrer les mêmes API indisponibles et les mêmes
          données invalides. Il ne supprime pas l’erreur ; il vous donne la
          possibilité de choisir comment elle est détectée et reprise, à
          condition de financer cette exploitation.
        </p>

        <h2 id="dessiner">Dessinez un seul flux sur une page</h2>
        <p>
          Le mini-flux C-1042 qui suit est entièrement fictif. Il sert uniquement
          à montrer les contrôles à noter sur une seule commande.
        </p>
        <p>
          N’auditez pas vingt scénarios à la fois. Choisissez celui qui crée la
          douleur : par exemple « commande validée → client dans le CRM →
          facture brouillon → tâche pour l’équipe ». Pour chaque flèche, écrivez
          l’outil source, la donnée transmise, l’action finale et le moyen de
          reconnaître un événement déjà traité.
        </p>

        <div className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/60 sm:p-6">
          <ol className="m-0 grid list-none gap-3 p-0 md:grid-cols-4">
            {[
              ["1", "Événement", "La commande C-1042 est validée."],
              ["2", "CRM", "Le client et l’affaire sont créés ou retrouvés."],
              [
                "3",
                "Facturation",
                "Un brouillon lié à C-1042 est créé une fois.",
              ],
              [
                "4",
                "Équipe",
                "Une tâche reçoit le lien vers la bonne affaire.",
              ],
            ].map(([number, title, text]) => (
              <li
                key={number}
                className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <span className="text-xs font-bold text-blue-700 dark:text-blue-300">
                  {number}
                </span>
                <h3 className="mb-0 mt-2 text-sm font-semibold text-zinc-950 dark:text-white">
                  {title}
                </h3>
                <p className="mb-0 mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {text}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <p>
          Si vous ne savez pas encore quel processus automatiser, revenez au
          guide{" "}
          <Link href="/guides/automatiser-processus-metier">
            automatiser un processus métier
          </Link>
          . Si plusieurs applications se disputent la même donnée, commencez
          plutôt par{" "}
          <Link href="/guides/connecter-erp-crm-logiciel-metier">
            définir la source de vérité et les échanges
          </Link>
          .
        </p>

        <h2 id="trente-jours">
          Rapprochez trente jours d’exécutions, d’erreurs et de facture
        </h2>
        <p>
          Pour chaque journée, relevez le nombre d’événements, le chemin suivi,
          les actions réussies, les erreurs, les reprises et le temps humain de
          correction. N’extrapolez pas une journée exceptionnelle sur trois ans.
          Gardez une semaine ordinaire et une période plus chargée si votre
          activité est saisonnière.
        </p>

        <p>
          Zapier explique dans sa{" "}
          <a
            href="https://help.zapier.com/hc/en-us/articles/8496196837261-How-is-task-usage-measured-in-Zapier"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation de mesure des tâches
          </a>{" "}
          comment les actions réussies et certains usages consomment le quota,
          avec des règles qui peuvent varier selon le produit ou l’étape. Sa{" "}
          <a
            href="https://zapier.com/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            page de tarifs
          </a>{" "}
          affichait le 23 juillet 2026 une offre gratuite de 100 tâches et des
          offres payantes selon le palier, la devise et la périodicité. C’est
          une photographie : relevez votre propre offre datée.
        </p>

        <p>
          Make décrit de son côté la{" "}
          <a
            href="https://help.make.com/how-features-use-credits"
            target="_blank"
            rel="noopener noreferrer"
          >
            consommation de crédits par les modules et fonctions
          </a>
          , avec des cas particuliers pour certaines fonctions et l’IA. Sa{" "}
          <a
            href="https://www.make.com/en/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            page de tarifs
          </a>{" "}
          affichait des paliers de crédits au même jour. Ne convertissez pas
          mécaniquement une « tâche » Zapier en un « crédit » Make : comptez le
          même résultat métier dans chaque scénario.
        </p>

        <FormulaBox>
          {`Consommation observée du flux =
somme des actions réellement exécutées sur chaque chemin
+ consommations particulières documentées

Coût mensuel observé =
abonnement et dépassements
+ temps humain de surveillance et correction
+ options indispensables`}
        </FormulaBox>

        <InfoBox
          variant="amber"
          title="Une erreur non facturée n’est pas gratuite"
        >
          Une action peut ne pas consommer le quota selon la règle du moment et
          tout de même perdre une commande, retarder une facture ou mobiliser
          une personne. Comparez consommation, résultat métier et temps de
          correction séparément.
        </InfoBox>

        <h2 id="cinq-pannes">
          Provoquez cinq pannes sur une copie ou un environnement de test
        </h2>
        <p>
          N’interrompez pas la production pour « voir ce qui se passe ».
          Dupliquez le scénario, remplacez les connexions par des comptes de
          test et utilisez uniquement des données fictives. Documentez l’état
          initial et la façon de revenir en arrière.
        </p>

        <div className="not-prose my-8 grid gap-4">
          {failureTests.map((item, index) => (
            <section
              key={item.name}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6"
            >
              <div className="flex gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                  {index + 1}
                </span>
                <div>
                  <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                    {item.name}
                  </h3>
                  <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    <strong className="text-zinc-900 dark:text-zinc-200">
                      Action :
                    </strong>{" "}
                    {item.action}
                  </p>
                  <p className="mb-0 mt-2 text-sm leading-relaxed text-emerald-800 dark:text-emerald-300">
                    <strong>Preuve attendue :</strong> {item.proof}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        <p>
          Make documente les{" "}
          <a
            href="https://help.make.com/incomplete-executions"
            target="_blank"
            rel="noopener noreferrer"
          >
            exécutions incomplètes
          </a>{" "}
          et leur gestion. La fonction doit être activée et vérifiée dans le
          contexte concerné ; ne supposez pas que chaque échec est conservé et
          récupérable. Sa documentation explique aussi des réponses aux{" "}
          <a
            href="https://help.make.com/fix-rate-limit-errors"
            target="_blank"
            rel="noopener noreferrer"
          >
            erreurs de limite de débit
          </a>
          , comme la planification, les files ou le regroupement selon le flux.
        </p>

        <p>
          Zapier publie une{" "}
          <a
            href="https://help.zapier.com/hc/en-us/articles/8496037690637-How-to-troubleshoot-errors-in-Zap-workflows"
            target="_blank"
            rel="noopener noreferrer"
          >
            procédure de diagnostic des erreurs
          </a>{" "}
          et documente historique, relance ou réglages selon les fonctions
          disponibles. Sa page sur les{" "}
          <a
            href="https://help.zapier.com/hc/en-us/articles/8496181445261-Zap-limits"
            target="_blank"
            rel="noopener noreferrer"
          >
            limites des Zap
          </a>{" "}
          rappelle également que les applications connectées ont leurs propres
          limites. Une reprise automatique doit être conçue pour ne pas répéter
          une action déjà réussie.
        </p>

        <h2 id="responsable">
          Nommez la personne qui voit, comprend et reprend l’erreur
        </h2>
        <p>
          Une alerte envoyée à une boîte générique n’est pas une supervision.
          Pour ce flux, écrivez le prénom ou le rôle de la personne principale,
          son remplaçant et ce qu’ils peuvent faire. Le message doit leur donner
          l’événement, l’étape, l’heure, la donnée non sensible utile et le lien
          vers le journal.
        </p>

        <GuideTable
          caption="Ce qu’une reprise d’erreur doit permettre"
          headers={["Question", "Réponse attendue", "Risque si elle manque"]}
          rows={[
            [
              "L’action finale a-t-elle déjà réussi ?",
              "Un identifiant métier ou une recherche permet de le vérifier.",
              "La reprise crée un doublon.",
            ],
            [
              "La donnée peut-elle être corrigée ?",
              "La source et le propriétaire du champ sont connus.",
              "Le scénario rejoue indéfiniment la même erreur.",
            ],
            [
              "Peut-on reprendre une seule étape ?",
              "La plateforme ou le code le permet sans rejouer tout le chemin.",
              "Une correction simple reproduit les actions précédentes.",
            ],
            [
              "Qui confirme le résultat métier ?",
              "Une personne vérifie CRM, facture ou commande finale.",
              "Le journal technique dit succès alors que le métier reste bloqué.",
            ],
          ]}
        />

        <p>
          Le développement sur mesure n’a de valeur ici que s’il rend cette
          responsabilité plus claire ou permet une règle impossible dans
          l’outil. Sinon, ajouter des journaux techniques et une procédure à l’existant est
          souvent plus simple que recréer l’orchestration.
        </p>

        <h2 id="cout">Comparez le même résultat sur 12 et 36 mois</h2>
        <p>
          Pour Make ou Zapier, incluez abonnement, dépassements, options,
          administration et corrections. Pour le code, incluez cadrage,
          développement, tests, hébergement, journaux, alertes, maintenance,
          changements d’API, support et sortie. Le coût initial du code ne doit
          jamais être opposé au coût total de la plateforme.
        </p>

        <FormulaBox>
          {`Coût plateforme =
abonnements et dépassements
+ options et connexions
+ temps de surveillance et correction
+ évolution du scénario

Coût sur mesure =
cadrage, développement et tests
+ hébergement, journaux techniques et alertes
+ maintenance et changements d’API
+ intervention et reprise
+ sortie ou transfert`}
        </FormulaBox>

        <p>
          Ajoutez une estimation basse, centrale et haute avec les hypothèses
          visibles. Pour le temps humain, utilisez les heures observées et un
          coût choisi par l’entreprise. Ne monétisez une panne que si vous
          disposez d’un incident réel ou d’une hypothèse explicitement
          justifiée. Pour aller jusqu’au gain net, utilisez le guide{" "}
          <Link href="/guides/calculer-roi-application-metier">
            calculer le ROI d’une automatisation
          </Link>{" "}
          et conservez la possibilité que le résultat soit négatif.
        </p>

        <InfoBox variant="blue" title="Exemple entièrement fictif">
          Le flux et l’entreprise ci-dessous sont inventés pour illustrer la
          méthode. Cet exemple ne décrit ni un client ni un résultat de Hagnéré
          Code.
        </InfoBox>

        <p>
          Une entreprise fictive reçoit un formulaire, crée un contact et une
          affaire, ajoute une tâche puis envoie un e-mail. Elle observe quatre
          actions utiles par demande. Une adresse invalide bloque l’e-mail, mais
          le contact et l’affaire existent déjà. Lorsque le scénario entier est
          rejoué, une deuxième affaire apparaît.
        </p>
        <p>
          L’équipe ne réécrit pas tout. Elle ajoute un identifiant de demande,
          vérifie l’affaire existante avant création et reprend uniquement
          l’étape en erreur. Elle mesure ensuite trente jours. Si la plateforme
          rend ces erreurs visibles à un coût acceptable, elle la conserve. Si
          une règle de rapprochement complexe reste impossible, elle étudie un
          petit composant dédié. Aucun prix, gain ou taux d’échec de cet exemple
          n’est présenté comme réel.
        </p>

        <h2 id="verdict">Choisissez parmi cinq verdicts observables</h2>
        <div className="not-prose my-8 grid gap-4">
          {[
            {
              title: "Garder",
              text: "Le flux est simple, stable, peu coûteux, visible et récupérable. Documentez-le et nommez son responsable.",
              badge: "Aucun projet nécessaire",
              color:
                "border-emerald-200 bg-emerald-50/50 dark:border-emerald-900 dark:bg-emerald-950/20",
            },
            {
              title: "Réparer",
              text: "Le défaut vient d’un champ, d’une branche, d’une alerte ou d’un réglage de reprise. Corrigez puis rejouez les cinq pannes.",
              badge: "Changer le scénario",
              color:
                "border-blue-200 bg-blue-50/50 dark:border-blue-900 dark:bg-blue-950/20",
            },
            {
              title: "Hybrider",
              text: "L’orchestration reste lisible, mais une règle ou connexion stable dépasse la plateforme. Codez uniquement cette partie.",
              badge: "Petit développement",
              color:
                "border-violet-200 bg-violet-50/50 dark:border-violet-900 dark:bg-violet-950/20",
            },
            {
              title: "Reconstruire",
              text: "Le flux critique exige un contrôle, une supervision ou une logique que l’outil ne peut durablement fournir, et le coût complet est accepté.",
              badge: "Service à exploiter",
              color:
                "border-amber-200 bg-amber-50/50 dark:border-amber-900 dark:bg-amber-950/20",
            },
            {
              title: "Arrêter",
              text: "Le flux crée plus de surveillance et de corrections qu’il n’évite de travail. Revenez à une étape manuelle simple ou supprimez l’action.",
              badge: "Ne pas investir",
              color:
                "border-rose-200 bg-rose-50/50 dark:border-rose-900 dark:bg-rose-950/20",
            },
          ].map((item) => (
            <section
              key={item.title}
              className={`rounded-2xl border p-5 sm:p-6 ${item.color}`}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                  {item.title}
                </h3>
                <span className="w-fit rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-zinc-700 dark:bg-zinc-950/50 dark:text-zinc-300">
                  {item.badge}
                </span>
              </div>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {item.text}
              </p>
            </section>
          ))}
        </div>

        <h2 id="action">Faites l’audit sans toucher à la production</h2>
        <p>
          Commencez par exporter ou documenter le scénario, ses connexions et
          ses propriétaires. Créez une copie, remplacez les comptes par des
          comptes de test et utilisez une commande fictive. Exécutez les cinq
          pannes, gardez les captures et notez le temps nécessaire à la reprise.
          Vous obtiendrez déjà une décision plus solide qu’un comparatif
          générique.
        </p>

        <p>
          Une aide extérieure est utile si le flux traverse plusieurs outils,
          traite des opérations importantes, échoue sans contexte, utilise des
          secrets dispersés ou demande une logique spécifique. Elle est
          probablement inutile pour un scénario simple, stable et bien surveillé
          qu’une personne interne sait maintenir.
        </p>

        <GuideInlineCTA
          title="Faire examiner un flux avant de le reconstruire"
          description="Apportez le schéma, trente jours de journaux et vos incidents. Nous pouvons comparer réparation, option hybride et développement — y compris conclure que Make ou Zapier reste le meilleur choix."
          tags={[
            "Flux réel avant l’outil",
            "Option hybride",
            "Aucune réécriture imposée",
          ]}
          ctaLabel="Décrire mon flux"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="sources">Sources, tarifs datés et limites</h2>
        <p>
          Les règles de consommation et d’erreur proviennent des documentations
          officielles consultées le 23 juillet 2026 :{" "}
          <a
            href="https://zapier.com/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            tarifs Zapier
          </a>
          ,{" "}
          <a
            href="https://help.zapier.com/hc/en-us/articles/8496196837261-How-is-task-usage-measured-in-Zapier"
            target="_blank"
            rel="noopener noreferrer"
          >
            mesure des tâches
          </a>
          ,{" "}
          <a
            href="https://help.zapier.com/hc/en-us/articles/8496181445261-Zap-limits"
            target="_blank"
            rel="noopener noreferrer"
          >
            limites Zapier
          </a>
          ,{" "}
          <a
            href="https://www.make.com/en/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            tarifs Make
          </a>
          ,{" "}
          <a
            href="https://help.make.com/how-features-use-credits"
            target="_blank"
            rel="noopener noreferrer"
          >
            consommation de crédits
          </a>{" "}
          et{" "}
          <a
            href="https://help.make.com/incomplete-executions"
            target="_blank"
            rel="noopener noreferrer"
          >
            exécutions incomplètes
          </a>
          .
        </p>
        <p>
          Ces pages décrivent les produits de leurs éditeurs. Les offres,
          unités, fonctions et limites peuvent évoluer. Ce guide ne promet ni
          disponibilité, ni absence de doublon, ni économie, ni retour sur
          investissement. Refaites le calcul avec votre compte, vos API, votre
          devise et vos trente jours de données.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
