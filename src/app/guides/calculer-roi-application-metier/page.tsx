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
import { TrackedGuideCtaLink } from "@/components/guides/tracked-guide-cta-link";
import { GuidesShell } from "@/components/guides/GuidesShell";
import {
  buildGuideMetadata,
  buildGuideStructuredData,
} from "@/lib/guide-page-seo";
import { formatGuideDate, getGuide } from "@/lib/guides";
import { TEAM } from "@/lib/team";
import { ApplicationRoiCalculator } from "./application-roi-calculator";

const guide = getGuide("calculer-roi-application-metier");

const breadcrumbName = "ROI d’une application métier";

export const metadata = buildGuideMetadata(
  guide,
  "Calculer le ROI d’une application métier sans inventer les gains",
);

const structuredData = buildGuideStructuredData(guide, breadcrumbName);

const toc = [
  {
    id: "reponse",
    number: "01",
    label: "Savoir quand calculer — ou arrêter",
    shortLabel: "Commencer",
  },
  {
    id: "calendrier",
    number: "02",
    label: "Poser un calendrier commun",
    shortLabel: "Calendrier",
  },
  {
    id: "benefices",
    number: "03",
    label: "Séparer quatre natures de gain",
    shortLabel: "Bénéfices",
  },
  {
    id: "tco",
    number: "04",
    label: "Chiffrer les douze familles du TCO",
    shortLabel: "Coûts",
  },
  {
    id: "formules",
    number: "05",
    label: "Calculer deux ROI et deux retours",
    shortLabel: "Formules",
  },
  {
    id: "calculateur",
    number: "06",
    label: "Recalculer avec vos hypothèses",
    shortLabel: "Calculateur",
  },
  {
    id: "cas",
    number: "07",
    label: "Contrôler un cas fictif complet",
    shortLabel: "Cas complet",
  },
  {
    id: "options",
    number: "08",
    label: "Comparer quatre réponses",
    shortLabel: "Options",
  },
  {
    id: "adoption-securite",
    number: "09",
    label: "Financer l’adoption et la sécurité",
    shortLabel: "Risques",
  },
  {
    id: "stress-test",
    number: "10",
    label: "Contredire le scénario central",
    shortLabel: "Stress test",
  },
  {
    id: "mesure",
    number: "11",
    label: "Réconcilier prévision et réalisé",
    shortLabel: "Mesurer",
  },
  {
    id: "decision",
    number: "12",
    label: "Décider et documenter la suite",
    shortLabel: "Décider",
  },
];

const faqCategories: GuidePremiumFaqCategory[] = [
  {
    key: "methode",
    num: "01",
    label: "Méthode et calcul",
    items: [
      {
        question: "Quelle est la formule du ROI d’une application métier ?",
        answer:
          "Le ROI de trésorerie cumulé est égal aux bénéfices de trésorerie moins le TCO de trésorerie, divisés par ce TCO. Le ROI économique ajoute la capacité utile aux bénéfices et les coûts d’opportunité internes au TCO. Les deux calculs doivent porter sur le même horizon et rester séparés.",
      },
      {
        question: "Faut-il annualiser le ROI ?",
        answer:
          "Pas pour prendre une première décision avec cette méthode. Affichez d’abord le ratio cumulé, l’horizon exact et les flux mensuels. Une annualisation, une valeur actuelle nette (VAN) ou un taux de rendement interne (TRI) peuvent être nécessaires pour un projet long ou financé, mais ils demandent des conventions supplémentaires qu’un ROI simple ne doit pas masquer.",
      },
      {
        question: "Que faire si un coût est inconnu ?",
        answer:
          "Arrêtez le calcul. Obtenez une fourchette, marquez le poste non applicable avec une justification, ou construisez un intervalle prudent. Saisir zéro signifie que l’absence de coût a été vérifiée ; ce n’est pas une valeur par défaut.",
      },
    ],
  },
  {
    key: "gains",
    num: "02",
    label: "Temps, trésorerie et adoption",
    items: [
      {
        question: "Le temps gagné est-il une économie ?",
        answer:
          "Non, pas automatiquement. Si le salaire reste payé, le temps libéré est une capacité. Il devient un bénéfice économique seulement si une activité utile, nommée et suivie l’utilise. Il devient un gain de trésorerie si un décaissement disparaît réellement, par exemple une prestation, des heures supplémentaires ou un recrutement évité.",
      },
      {
        question: "Comment estimer l’adoption avant le lancement ?",
        answer:
          "Utilisez une hypothèse explicite et testez-la sur un pilote. Mesurez la part des utilisateurs actifs, la part des dossiers réellement traités par l’outil et les contournements. Une formation planifiée ne prouve pas une adoption ; elle constitue un coût et une action à suivre.",
      },
      {
        question: "Peut-on compter la baisse des erreurs ?",
        answer:
          "Oui si vous disposez d’un historique : volume d’erreurs, coût moyen réellement supporté et part attribuable au changement. Sinon, gardez l’effet dans le registre qualitatif jusqu’à ce qu’une mesure permette de le convertir. Ne comptez pas à la fois le temps de correction et la facture déjà incluse dans ce même coût.",
      },
    ],
  },
  {
    key: "decision",
    num: "03",
    label: "Choix et suivi",
    items: [
      {
        question: "Un ROI positif justifie-t-il le sur-mesure ?",
        answer:
          "Non. Il indique seulement que les bénéfices dépassent les coûts sous les hypothèses retenues. Comparez le statu quo, une simplification, un outil standard ou SaaS et le sur-mesure sur le même calendrier. Dans le cas fictif de ce guide, l’option simple gagne nettement.",
      },
      {
        question: "Quel délai de retour faut-il retenir ?",
        answer:
          "Retenez le premier mois où le cumul devient nul ou positif et le reste jusqu’à la fin de l’horizon : c’est le retour durable. Affichez aussi un premier croisement temporaire si un coût de sortie, une évolution ou une double exploitation peut faire repasser le cumul sous zéro.",
      },
      {
        question: "Quand faut-il réviser le dossier économique ?",
        answer:
          "Commencez à la mise en service, puis contrôlez à M1, M3 et M6 avec la cadence proposée ici. Remplacez le prévisionnel par le réalisé : coûts, adoption, volumes, bénéfices, incidents et capacité réellement réaffectée. Si le scénario sort des bornes décidées, réduisez le périmètre, corrigez ou arrêtez.",
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
          { label: breadcrumbName },
        ]}
        badges={[
          { label: "Guide décisionnel 2026", variant: "dark" },
          { label: "Dirigeants · Finance · Métiers", variant: "neutral" },
          { label: "Calcul reproductible", variant: "success" },
          {
            label: `Mis à jour le ${formatGuideDate(guide.dateModified)}`,
            variant: "muted",
          },
        ]}
        heroTitle="Calculer le ROI d’une"
        heroTitleEm="application métier"
        heroTitleSuffix="sans inventer les gains"
        heroDescription="Un calcul utile sépare la trésorerie, le temps libéré et les effets qualitatifs. Il place toutes les options sur le même calendrier et s’arrête dès qu’un coût reste inconnu. Vous pouvez alors comparer une solution simple, un logiciel en abonnement (SaaS) et le sur-mesure."
        stats={[
          { label: "Familles de coûts", value: "12" },
          { label: "Lectures du ROI", value: "2" },
          { label: "Scénarios complets", value: "3" },
          { label: "Calculateur · envoi", value: "Aucun" },
          { label: "Lecture", value: `${guide.readTimeMin} min` },
        ]}
        author={{
          initials: TEAM.quentin.initials,
          name: TEAM.quentin.fullName,
          role: TEAM.quentin.role,
          profileUrl: "/equipe#fondateur",
        }}
        sidebarHeroCta={{
          eyebrow: "OUTILS",
          titleStart: "Faire vérifier",
          titleEm: "mes hypothèses",
          description:
            "Apportez le processus actuel, les volumes, le devis et les inconnues. L’échange sert à comparer plusieurs réponses, y compris une solution plus simple.",
          benefits: [
            "Trésorerie, capacité et qualitatif restent séparés",
            "Les coûts manquants sont listés, pas remplacés par zéro",
            "Le sur-mesure peut être écarté",
          ],
          primaryCtaLabel: "Présenter mon dossier économique",
          primaryCtaHref: "/demarrer-un-projet",
          phoneLabel: "03 74 47 20 18",
          phoneHref: "tel:+33374472018",
        }}
        toc={toc}
        tocLabel="Sommaire du guide"
        mobileCtaLabel="Voir le service outils internes"
        sidebarContextCta={{
          eyebrow: "OUTILS INTERNES",
          title: "Comparer mon besoin avant de développer",
          description:
            "Partagez le travail actuel, les intégrations, les volumes et le scénario prudent que vous êtes prêt à défendre.",
          benefits: [
            "Reprendre le calcul sur un horizon commun",
            "Comparer simple, standard, SaaS et sur-mesure",
            "Repérer le chiffre ou le test qui manque",
          ],
          ctaLabel: "Voir le service outils internes",
          ctaHref: "/services/outils-internes-sur-mesure",
          secondaryLabel: "03 74 47 20 18",
          secondaryHref: "tel:+33374472018",
        }}
        faqCategories={faqCategories}
        faqMeta={{
          eyebrow: "Questions fréquentes",
          titleStart: "Vos questions avant",
          titleEm: "d’investir",
          titleEnd: "dans une application métier.",
          subtitle:
            "Des réponses directes sur les formules, la valeur du temps, les inconnues, le retour durable et la comparaison des options.",
          ctaTitle: "Votre scénario prudent tient-il encore ?",
          ctaDescription:
            "Décrivez le processus, le devis, les coûts récurrents et les données disponibles pour repérer ce qui pourrait invalider le calcul.",
          ctaLabel: "Faire vérifier mon calcul",
          ctaHref: "/demarrer-un-projet",
        }}
        legalSources={[
          {
            source: "France Num",
            href: "https://www.francenum.gouv.fr/guides-et-conseils/strategie-numerique/comprendre-le-numerique/comment-mesurer-les-effets-de-la",
            description:
              "Fiche mise à jour le 21 avril 2026 : objectifs, progrès et résultats attendus puis obtenus ; certains effets restent difficiles à quantifier. Les statistiques tierces de la page ne sont pas utilisées comme prédictions.",
          },
          {
            source: "Insee",
            href: "https://www.insee.fr/fr/statistiques/2381340",
            description:
              "Repère publié le 2 juillet 2026 : coût horaire estimé de 44,2 € en 2025 dans les services marchands, champ entreprises d’au moins dix salariés et secteurs B à N. Ce repère n’est pas injecté dans le cas fictif.",
          },
          {
            source: "CNIL · développement",
            href: "https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques",
            description:
              "Fiche du 14 mars 2024 : protection dès la conception, environnements distincts et tests unitaires, d’intégration, fonctionnels et de sécurité lorsque des données personnelles sont traitées.",
          },
          {
            source: "CNIL · AIPD",
            href: "https://www.cnil.fr/fr/ce-quil-faut-savoir-sur-lanalyse-dimpact-relative-la-protection-des-donnees-aipd",
            description:
              "Une AIPD est requise pour un traitement susceptible d’engendrer un risque élevé ; elle n’est pas automatique pour toute application.",
          },
          {
            source: "CNIL · sous-traitance",
            href: "https://www.cnil.fr/fr/securite-gerer-la-sous-traitance",
            description:
              "Garanties du sous-traitant et clauses relatives aux responsabilités, à la sécurité, aux incidents et à la fin du contrat.",
          },
          {
            source: "ANSSI · guide 2026",
            href: "https://messervices.cyber.gouv.fr/guides/guide-cybersecurite-start-up-numerique",
            description:
              "Guide publié le 26 février 2026 : authentification multifacteur, moindre privilège, séparation des environnements, dépendances, sauvegardes et réversibilité. Sa cible première est la start-up logicielle ; les principes sont adaptés ici au périmètre d’une application interne.",
          },
          {
            source: "ANSSI · externalisation",
            href: "https://messervices.cyber.gouv.fr/guides/externalisation-et-securite-des-systemes-dinformation-un-guide-pour-maitriser-les",
            description:
              "Guide ancien, toujours publié, utilisé seulement pour les risques durables de perte de maîtrise, d’accès distant et d’hébergement mutualisé — pas comme état complet de l’art 2026.",
          },
          {
            source: "Anact",
            href: "https://www.anact.fr/sites/default/files/2024-10/boite-a-outils-qvct-numerique.pdf",
            description:
              "Boîte à outils 2024 issue de quatre établissements sanitaires, sociaux et médico-sociaux : méthode pour partir du travail réel et associer les utilisateurs, transposée ici sans en faire une preuve universelle d’adoption ou de performance.",
          },
        ]}
        disclaimer={{
          eyebrow: "Périmètre",
          title: "Une méthode de décision, pas une promesse de rentabilité",
          description:
            "Les cas et scénarios sont fictifs. Le calcul n’intègre ni actualisation, fiscalité, financement, inflation ni risques non chiffrés. Remplacez toutes les entrées par vos données et faites contrôler les flux datés par votre direction financière. Un traitement de données personnelles ou un système sensible peut aussi demander l’intervention de votre délégué à la protection des données (DPO), de votre responsable sécurité ou d’un conseil juridique.",
        }}
      >
        <GuidePremiumSection
          id="reponse"
          number="01"
          label="Décision"
          title="Une inconnue suffit à arrêter le calcul"
        >
          <p className="lead">
            Pour calculer le <strong>retour sur investissement (ROI)</strong>,
            placez tous les flux sur le même calendrier. Soustrayez le{" "}
            <strong>coût total de possession (TCO)</strong> des bénéfices
            attribuables, puis divisez le gain net par ce coût. Faites ensuite
            deux calculs distincts : l’un pour la trésorerie, l’autre pour la
            valeur économique. Si un coût, l’adoption ou la destination du
            temps gagné reste inconnu, arrêtez-vous. Un zéro veut dire «
            vérifié à zéro », jamais « pas encore étudié ».
          </p>

          <figure className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/guides/calculer-roi-application-metier/article-roi-16x9.webp"
              width={1600}
              height={900}
              sizes="(max-width: 768px) calc(100vw - 32px), 760px"
              alt="Une maquette de bureau place des documents, un calendrier, des contrôles et une application autour d’une balance centrale"
              className="h-auto w-full"
            />
            <figcaption className="border-t border-zinc-200 px-4 py-3 text-sm leading-relaxed text-zinc-600 dark:border-zinc-800 dark:text-zinc-300 sm:px-5">
              Un dossier défendable relie chaque montant à une source, une date
              et un responsable. Le ratio vient après.
            </figcaption>
          </figure>

          <p>
            Le TCO additionne les coûts initiaux, récurrents et de sortie sur
            la période retenue. Le ROI rapporte le gain net à ce coût. Aucun
            des deux ne dit, à lui seul, si de l’argent entrera sur le compte
            bancaire.
          </p>

          <h3>Les cinq informations qui autorisent le calcul</h3>
          <GuideTable
            caption="Cinq informations bloquantes avant le calcul"
            headers={["Information", "Preuve minimale", "Sinon"]}
            rows={[
              [
                "Situation de départ",
                "Volume, temps, erreurs et dépenses sur une période représentative",
                "STOP : observer avant de projeter",
              ],
              [
                "Calendrier",
                "Décision, mise en service, rampe de gains et horizon",
                "STOP : les bénéfices n’ont pas de date",
              ],
              [
                "Adoption et destination",
                "Qui utilisera l’outil et où ira le temps libéré",
                "STOP : capacité théorique seulement",
              ],
              [
                "TCO complet",
                "Douze familles connues, nulles justifiées ou non applicables",
                "STOP : une inconnue n’est pas zéro",
              ],
              [
                "Contre-option",
                "Statu quo, simplification, standard/SaaS et sur-mesure",
                "STOP : le projet n’est pas encore comparé",
              ],
            ]}
          />

          <GuidePremiumMemo title="Les quatre décisions possibles">
            <p>
              Investir, lancer un pilote limité, simplifier le besoin ou
              reporter. « Développer » n’est pas la sortie par défaut. Si vous
              cherchez encore quel travail examiner, commencez par le guide{" "}
              <Link href="/guides/automatiser-processus-metier">
                choisir le premier processus métier à automatiser
              </Link>
              .
            </p>
          </GuidePremiumMemo>

        </GuidePremiumSection>

        <GuidePremiumSection
          id="calendrier"
          number="02"
          label="Temps"
          title="La décision et les bénéfices ne commencent pas le même mois"
        >
          <p>
            Comparez toutes les options sur les mêmes mois. Dans ce guide, le
            mois 0 est la décision. Le premier mois actif est la mise en
            service. La <strong>rampe de réalisation des gains</strong> décrit
            la montée progressive de l’effet ; elle ne remplace pas le taux
            d’adoption, qui reste un facteur distinct.
          </p>

          <FormulaBox>
            {[
              "CONVENTION MENSUELLE",
              "",
              "Mois 0 = décision",
              "Mois g = première période active",
              "H = dernier mois observé",
              "Mois actifs = H − g + 1",
              "",
              "Rampe de r mois au mois actif m :",
              "min(1 ; (m − g + 1) / r)",
              "Si r = 0 : effet plein dès la mise en service",
            ].join("\n")}
          </FormulaBox>

          <p>
            Exemple : sur six mois, une mise en service en M3 et une rampe de
            trois mois produisent les facteurs 1/3 en M3, 2/3 en M4, puis 1 en
            M5 et M6. Compter quatre mois pleins surestimerait les bénéfices.
            Compter seulement deux mois les sous-estimerait.
          </p>

          <p>
            L’horizon peut se terminer avant l’effet plein. Avec H12, une mise
            en service M10 et une rampe de six mois, seuls 1/6, 2/6 et 3/6 sont
            observés en M10, M11 et M12. Le calcul conserve ces trois fractions
            au lieu de refuser le scénario ou de prolonger artificiellement
            l’horizon.
          </p>

          <InfoBox variant="amber" title="Le devis et le bénéfice n’ont pas le même calendrier">
            <p>
              Le cadrage et la réalisation peuvent être payés avant la mise en
              service, alors que les bénéfices commencent après. Ajoutez la
              migration, la double exploitation, la formation et la sortie au
              mois où ils ont lieu. Un ROI final positif peut malgré tout
              exiger un financement intermédiaire important.
            </p>
          </InfoBox>

        </GuidePremiumSection>

        <GuidePremiumSection
          id="benefices"
          number="03"
          label="Valeur"
          title="Séparez les deux gains de trésorerie, la capacité et le qualitatif"
        >
          <p>
            Un même progrès opérationnel peut avoir quatre effets. Les
            additionner sans frontière crée un double compte. Commencez par la
            nature du bénéfice, puis documentez son attribution au projet.
          </p>

          <GuideTable
            caption="Quatre natures de bénéfice à ne pas confondre"
            headers={["Nature", "Condition de comptage", "Lecture"]}
            rows={[
              [
                "Décaissement hors main-d’œuvre évité",
                "Facture, achat, pénalité ou prestation réellement supprimable",
                "Trésorerie",
              ],
              [
                "Décaissement lié aux heures",
                "Heures supplémentaires, prestation ou recrutement effectivement évité",
                "Trésorerie",
              ],
              [
                "Capacité utile",
                "Heures réaffectées à une activité nommée, utile et suivie",
                "Économique, pas entrée de caisse",
              ],
              [
                "Qualitatif",
                "Qualité, délai, traçabilité ou confort sans valorisation démontrée",
                "Registre séparé, hors ROI",
              ],
            ]}
          />

          <FormulaBox>
            {[
              "HEURES ÉLIGIBLES",
              "= heures observées × part techniquement retirable × adoption",
              "",
              "DÉCAISSEMENT LIÉ AU TRAVAIL",
              "= heures éligibles × part donnant un décaissement supprimé",
              "  × décaissement horaire marginal",
              "",
              "CAPACITÉ UTILE",
              "= heures éligibles × part réaffectée utilement",
              "  × valeur économique horaire justifiée",
              "",
              "DÉCAISSEMENT HORS MAIN-D’ŒUVRE",
              "= dépense évitable × adoption × taux propre de réalisation",
            ].join("\n")}
          </FormulaBox>

          <p>
            Les parts « décaissement lié au travail » et « capacité utile »
            sont deux destinations exclusives des mêmes heures ; leur somme ne
            peut pas dépasser 100 %. Le taux techniquement retirable ne réduit
            pas une facture hors main-d’œuvre : cette facture dispose de son
            propre taux de réalisation, tout en restant soumise à l’adoption et
            à la rampe.
          </p>

          <p>
            Un repère de coût horaire peut aider à contredire une hypothèse,
            mais pas la remplacer. L’
            <a
              href="https://www.insee.fr/fr/statistiques/2381340"
              target="_blank"
              rel="noreferrer"
            >
              Insee estime à 44,2 € le coût horaire du travail en 2025 dans les
              services marchands
            </a>
            , pour les entreprises d’au moins dix salariés des secteurs B à N,
            apprentis inclus. Cette estimation est révisable.
          </p>

          <p>
            Ce repère ne représente ni votre coût marginal, ni la valeur d’une
            heure réaffectée. Le cas fictif ci-dessous utilise donc 36 €/h, une
            hypothèse inventée et signalée comme telle.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="tco"
          number="04"
          label="Coûts"
          title="Les douze familles du TCO doivent apparaître"
        >
          <p>
            Le TCO ne se limite pas au devis de réalisation. Pour chaque
            famille, choisissez un état : montant connu, non applicable avec
            justification, ou inconnu. Dans ce dernier cas, le calcul doit
            retourner <strong>STOP</strong>.
          </p>

          <GuideTable
            caption="Les douze familles obligatoires du coût total de possession"
            headers={["Famille", "Questions à poser", "Moment habituel"]}
            rows={[
              ["1. Cadrage", "Observation, ateliers, spécifications, prototype ?", "Avant le projet"],
              ["2. Réalisation", "Conception, développement, paramétrage, recette ?", "Avant et à la livraison"],
              ["3. Migration", "Nettoyage, reprise, rapprochement, archivage ?", "Avant la bascule"],
              ["4. Intégrations", "Interfaces entre logiciels (API), connecteurs, comptes, quotas, changements tiers ?", "Initial puis évolutions"],
              ["5. Formation et changement", "Supports, sessions, accompagnement, temps des équipes ?", "Avant et après la bascule"],
              ["6. Temps interne", "Métier, direction, finance, informatique, protection des données, sécurité, tests ?", "Tout au long du projet"],
              ["7. Licences et hébergement", "Utilisateurs, volume, stockage, surveillance, environnements ?", "Récurrent"],
              ["8. Support et maintenance", "Incidents, correctifs, astreinte, mises à niveau ?", "Récurrent"],
              ["9. Sécurité et conformité", "Analyse de risques, tests, clauses, documentation, analyse d’impact si requise ?", "Initial et récurrent"],
              ["10. Évolutions", "Règles, navigateurs, API, dépendances, réglementation ?", "Récurrent ou ponctuel"],
              ["11. Double exploitation", "Ancien et nouveau système utilisés ensemble combien de temps ?", "Bascule"],
              ["12. Sortie et réversibilité", "Export, transfert, suppression, documentation, remise en service ?", "Fin de contrat ou horizon"],
            ]}
          />

          <p>
            Une ligne de devis peut couvrir plusieurs familles sans les
            ventiler. Notez « enveloppe indivisible réalisation +
            intégrations » au lieu d’inventer une répartition. Le montant reste
            utilisable ; son manque de détail devient un risque de pilotage à
            traiter au contrat.
          </p>

          <GuidePremiumCase
            initial="0"
            eyebrow="Mauvais zéro"
            title="Sécurité : 0 € parce que personne ne l’a encore chiffrée"
          >
            <p>
              Ce poste est inconnu : le calcul s’arrête. Il ne devient 0 € que
              si le périmètre, les contrôles existants, les responsabilités et
              les travaux restant à faire montrent réellement qu’aucun coût
              supplémentaire n’est retenu. Cette conclusion doit être
              documentée et révisée si le périmètre change.
            </p>
          </GuidePremiumCase>

        </GuidePremiumSection>

        <GuidePremiumSection
          id="formules"
          number="05"
          label="Calcul"
          title="Trésorerie et valeur économique donnent deux résultats"
        >
          <p>
            La lecture de trésorerie répond à « quels décaissements sont
            couverts ? ». La lecture économique répond à « la valeur attribuée
            couvre-t-elle aussi le temps interne et la capacité mobilisée ? ».
            L’une ne doit pas être utilisée à la place de l’autre.
          </p>

          <FormulaBox>
            {[
              "GAIN NET DE TRÉSORERIE",
              "= bénéfices de trésorerie cumulés − TCO de trésorerie",
              "",
              "ROI DE TRÉSORERIE",
              "= gain net de trésorerie / TCO de trésorerie × 100",
              "",
              "GAIN NET ÉCONOMIQUE",
              "= bénéfices de trésorerie + capacité utile − TCO économique",
              "",
              "ROI ÉCONOMIQUE",
              "= gain net économique / TCO économique × 100",
              "",
              "TCO économique",
              "= TCO de trésorerie + coûts d’opportunité internes",
            ].join("\n")}
          </FormulaBox>

          <p>
            Ces ratios sont cumulés, non annualisés et non actualisés. Un TCO
            nul rend le ROI <strong>non applicable</strong> : il ne produit
            jamais une valeur infinie. Pour un projet long, financé ou comparé
            à d’autres investissements, ajoutez ensuite une valeur actuelle
            nette ou un taux de rendement interne avec votre direction
            financière, sans cacher les flux mensuels d’origine.
          </p>

          <h3>Le retour durable évite d’annoncer un retour trop tôt</h3>
          <p>
            Le premier croisement est le premier mois où le cumul redevient nul
            ou positif après avoir été négatif. Le retour durable est le
            premier mois où il reste nul ou positif jusqu’à la fin de
            l’horizon. Une dépense de sortie peut donc annuler un croisement
            temporaire. Si le cumul n’a jamais été négatif, indiquez « aucun
            déficit de financement » plutôt qu’un retour au mois 0.
          </p>

        </GuidePremiumSection>

        <GuidePremiumSection
          id="calculateur"
          number="06"
          label="Outil"
          title="Recalculez sans envoyer vos données"
        >
          <p>
            Le calculateur fonctionne dans votre navigateur et ne soumet aucun
            formulaire. Les valeurs initiales appartiennent au cas fictif du
            guide. Ouvrez chaque famille de coût, remplacez les hypothèses et
            laissez un champ vide lorsqu’il est réellement inconnu : aucun
            résultat ne sera produit.
          </p>

          <ApplicationRoiCalculator />

        </GuidePremiumSection>

        <GuidePremiumSection
          id="cas"
          number="07"
          label="Cas fictif"
          title="Suivez les 723,2 heures jusqu’au mois de retour"
        >
          <p>
            Le cas suivant démontre le calcul. Il ne décrit ni un client, ni une
            moyenne de marché, ni une promesse commerciale.
          </p>

          <FormulaBox>
            {[
              "VOLUME ANNUEL FICTIF",
              "",
              "80 comptes rendus/semaine × 8 min × 48 semaines = 512 h",
              "Consolidation : 3 h/semaine × 48 = 144 h",
              "Corrections : 14/mois × 24 min × 12 = 67,2 h",
              "Total = 723,2 h/an",
            ].join("\n")}
          </FormulaBox>

          <p>
            Hypothèses centrales : horizon M0 à M48, mise en service M5, effet
            plein immédiat dans cet oracle, adoption 100 %, 60 % des heures
            éligibles réaffectées utilement, valeur économique fictive 36 €/h,
            et 70 % de 2 400 € annuels de décaissements hors main-d’œuvre
            réellement évités.
          </p>

          <p>
            Le TCO regroupe réalisation avec intégrations, puis migration avec
            formation. Pour conserver cet exemple fictif recalculable,
            sécurité et conformité, évolutions et double exploitation sont
            posées à 0 €. Dans un dossier réel, chacun de ces zéros doit être
            justifié ; sinon le calcul s’arrête.
          </p>

          <GuideTable
            caption="Résultat du cas fictif central sur 48 mois"
            headers={["Indicateur", "Trésorerie", "Économique"]}
            rows={[
              ["TCO", "51 200 €", "54 800 €"],
              ["Bénéfices cumulés", "6 160 €", "63 437,44 €"],
              ["Gain net", "−45 040 €", "+8 637,44 €"],
              ["ROI cumulé", "−87,96875 %", "+15,7617518 %"],
              ["Retour durable", "Non atteint", "Mois 39"],
            ]}
          />

          <p>
            Le cumul économique vaut −580,16 € en M38, +461,60 € en M39, puis
            +8 637,44 € en M48. Le projet reste pourtant très négatif en
            trésorerie. Dire qu’il « se rembourse au mois 39 » sans préciser
            <em> économiquement</em> ferait croire à une trésorerie qui
            n’existe pas.
          </p>

          <h3>Les scénarios changent plus que deux pourcentages</h3>
          <GuideTable
            caption="Trois scénarios fictifs complets"
            headers={["Scénario", "Calendrier et adoption", "Coûts", "Gain net économique / ROI"]}
            rows={[
              [
                "Prudent",
                "M8 · rampe 6 mois · adoption 70 %",
                "Réalisation +15 % · hébergement + maintenance +15 % · double exploitation 600 €/mois de M7 à M9",
                "−39 139,25 € · −63,37 % · retour non atteint",
              ],
              [
                "Central",
                "M5 · effet plein · adoption 100 %",
                "Devis inchangé · trois zéros fictifs explicites",
                "+8 637,44 € · +15,76 % · retour M39",
              ],
              [
                "Haut favorable",
                "M4 · rampe 2 mois · adoption 100 %",
                "Réalisation −5 % · récurrents −10 % · double exploitation 0 € explicite",
                "+33 147,76 € · +63,62 % · retour M26",
              ],
            ]}
          />

          <InfoBox variant="amber" title="Le scénario central ne suffit pas">
            <p>
              Avec ces hypothèses, le scénario prudent écarte l’investissement.
              Avant de décider, cherchez ce qui pourrait changer ce verdict :
              pilote d’adoption, devis plus précis, délai contractuel, test de
              reprise de données ou destination démontrée du temps libéré.
            </p>
          </InfoBox>

        </GuidePremiumSection>

        <GuidePremiumSection
          id="options"
          number="08"
          label="Comparaison"
          title="Quand une option simple bat le sur-mesure"
        >
          <p>
            Le statu quo n’est pas « gratuit » : il conserve le temps, les
            erreurs, les risques et les dépenses actuelles. Mais son coût
            incrémental de projet est nul. Décrivez donc la situation actuelle,
            puis comparez chaque réponse sur les mêmes volumes, mois et règles
            d’attribution.
          </p>

          <GuideTable
            caption="Comparer quatre réponses sur une base commune"
            headers={["Réponse", "À chiffrer", "Risque de décision", "Sortie possible"]}
            rows={[
              [
                "Statu quo",
                "Coûts actuels, incidents, temps et opportunités non réalisées",
                "Présenter zéro investissement comme zéro coût",
                "Conserver avec plan de surveillance",
              ],
              [
                "Simplification",
                "Procédure, modèle, automatisation légère, petit abonnement",
                "Sous-estimer les limites fonctionnelles",
                "Tester vite et rester réversible",
              ],
              [
                "Standard ou SaaS",
                "Paramétrage, licences au volume, intégrations, export, support",
                "Oublier dépendance, hausse de volume et sortie",
                "Pilote contractuel et test d’export",
              ],
              [
                "Sur-mesure",
                "Douze familles complètes, maintenance et responsabilités",
                "Transformer la capacité théorique en trésorerie",
                "Réduire le périmètre ou renoncer",
              ],
            ]}
          />

          <GuidePremiumCase
            initial="S"
            eyebrow="Option simple fictive"
            title="8 000 € de TCO battent 54 800 € de sur-mesure"
          >
            <p>
              Même base de 723,2 h/an, mise en service M2, 25 % de capacité
              utile, 40 % des décaissements hors main-d’œuvre évités, 4 000 €
              initiaux, 75 €/mois sur 47 mois et 475 € de sortie. Le TCO
              économique vaut 8 000 €, les bénéfices 29 252,80 €, le ROI
              économique +265,66 % et le retour durable M9. Le ROI de
              trésorerie reste −53 %.
            </p>
            <p>
              Cette option simple gagne dans le cas fictif ; elle n’est pas
              supposée disponible dans tous les projets. Les autres familles de
              coûts y sont explicitement supposées non applicables : elles ne
              sont ni inconnues ni transformées silencieusement en zéros.
            </p>
          </GuidePremiumCase>

          <p>
            Pour le SaaS, refusez une « moyenne » générique : demandez le tarif
            au nombre réel d’utilisateurs, de dossiers, d’appels API et de
            stockage, puis ajoutez paramétrage, migration, intégrations,
            formation, support et réversibilité. Le sur-mesure ne revient dans
            la comparaison que si les limites du standard sont démontrées.
          </p>

        </GuidePremiumSection>

        <GuidePremiumSection
          id="adoption-securite"
          number="09"
          label="Risque"
          title="Traitez l’adoption, la sécurité et la sortie comme des travaux"
        >
          <p>
            Une hypothèse d’adoption n’est pas une conséquence automatique de
            la livraison. L’
            <a
              href="https://www.anact.fr/sites/default/files/2024-10/boite-a-outils-qvct-numerique.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Agence nationale pour l’amélioration des conditions de travail
              (Anact) recommande de partir du travail réel et d’associer les
              utilisateurs
            </a>{" "}
            à la conception et aux ajustements. Cette boîte à outils 2024 a été
            construite à partir de quatre établissements sanitaires, sociaux
            et médico-sociaux : nous en transposons ici la méthode de
            conception du travail, pas une preuve universelle d’adoption ou de
            performance.
          </p>

          <p>
            Prévoyez les observations, les tests, les supports, les
            responsables, le temps de formation et le traitement des
            contournements dans le TCO.
          </p>

          <h3>Un socle cyber à adapter à l’application interne</h3>
          <p>
            Le{" "}
            <a
              href="https://messervices.cyber.gouv.fr/guides/guide-cybersecurite-start-up-numerique"
              target="_blank"
              rel="noreferrer"
            >
              guide de l’Agence nationale de la sécurité des systèmes
              d’information (ANSSI), publié le 26 février 2026
            </a>{" "}
            vise d’abord les start-up qui développent un produit logiciel. Ses
            principes restent utiles pour cadrer une application interne, à
            condition de les adapter à ses données, ses utilisateurs et son
            infrastructure.
          </p>

          <GuideTable
            caption="Questions cyber et de réversibilité à financer"
            headers={["Contrôle", "Question concrète", "Coûts possibles"]}
            rows={[
              ["Accès", "Moindre privilège et authentification multifacteur sur les opérations sensibles ?", "Gestion des identités, paramétrage, support"],
              ["Environnements", "Développement, intégration et production séparés ?", "Infrastructure, données fictives, filtrage"],
              ["Dépendances", "Inventaire, alertes de vulnérabilité et mises à jour ?", "Outils, maintenance, tests de non-régression"],
              ["Traçabilité", "Qui a accédé ou modifié une donnée sensible ?", "Journaux, conservation, supervision"],
              ["Sauvegarde", "Copie protégée et restauration réellement testée ?", "Stockage, procédures, exercices"],
              ["Réversibilité", "Export complet, format, délai, documentation et reprise ?", "Développement, transfert, double exploitation"],
            ]}
          />

          <p>
            Lorsque l’application traite des données personnelles, la{" "}
            <a
              href="https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques"
              target="_blank"
              rel="noreferrer"
            >
              Commission nationale de l’informatique et des libertés (CNIL)
              demande d’intégrer la protection dès la conception
            </a>{" "}
            et recommande des tests unitaires, d’intégration, fonctionnels et de
            sécurité, avec des environnements distincts.
          </p>

          <p>
            Une{" "}
            <a
              href="https://www.cnil.fr/fr/ce-quil-faut-savoir-sur-lanalyse-dimpact-relative-la-protection-des-donnees-aipd"
              target="_blank"
              rel="noreferrer"
            >
              analyse d’impact relative à la protection des données (AIPD)
            </a>{" "}
            est obligatoire si le traitement est susceptible d’engendrer un
            risque élevé ; elle n’est pas automatique pour chaque outil.
          </p>

          <InfoBox variant="blue" title="Une source ancienne doit rester datée">
            <p>
              Le guide ANSSI sur l’externalisation, toujours publié mais ancien,
              reste utile pour trois risques durables : perte de maîtrise,
              accès distant et hébergement mutualisé. Il ne suffit pas à définir
              l’état de l’art 2026. Utilisez le guide 2026, votre analyse de
              risques, les exigences CNIL applicables et les contraintes
              propres au système.
            </p>
          </InfoBox>

        </GuidePremiumSection>

        <GuidePremiumSection
          id="stress-test"
          number="10"
          label="Contradiction"
          title="Cherchez ce qui fait basculer la décision"
        >
          <p>
            Un stress test n’ajoute pas arbitrairement 20 % partout. Il
            transforme une hypothèse fragile en variable, une par une puis
            ensemble, et explique la cause de chaque borne.
          </p>

          <GuideTable
            caption="Stress test minimal avant décision"
            headers={["Variable", "Question prudente", "Preuve à obtenir"]}
            rows={[
              ["Mise en service", "Que devient le résultat avec trois mois de retard ?", "Jalons, dépendances et responsable"],
              ["Rampe", "Combien de mois avant l’effet plein ?", "Pilote et courbe d’usage"],
              ["Adoption", "Que reste-t-il à 70 % d’usage réel ?", "Utilisateurs actifs et dossiers traités"],
              ["Réalisation", "Quel impact d’un dépassement de 15 % ?", "Périmètre, exclusions et gestion des changements"],
              ["Hébergement + maintenance", "Que devient le TCO si ces deux coûts augmentent de 15 % ?", "Tarifs au volume et règles de révision"],
              ["Double exploitation", "Trois mois de coexistence sont-ils nécessaires ?", "Plan de bascule et critères de retour"],
              ["Sortie", "L’export final annule-t-il un premier retour ?", "Test d’export et devis de transfert"],
            ]}
          />

          <p>
            Le calculateur présente aussi une{" "}
            <strong>sensibilité à un mois de mise en service plus tard</strong>.
            Elle décale les bénéfices, les coûts liés à la mise en service et
            les coûts mensuels actifs. Les coûts au mois 0, à un mois précis,
            sur une plage datée ou en sortie restent à leur date saisie. Le
            résultat n’est donc pas un « coût universel du retard » : c’est la
            valeur nette non capturée dans ce modèle précis.
          </p>

          <GuidePremiumMemo title="Écrivez la règle de décision avant le résultat">
            <p>
              Exemple : « lancer un pilote si le scénario prudent couvre le TCO
              économique à M36, si aucun coût obligatoire n’est inconnu et si
              un responsable accepte la destination de la capacité ». Une règle
              écrite avant le calcul limite la tentation d’ajuster les
              hypothèses pour sauver le projet.
            </p>
          </GuidePremiumMemo>

        </GuidePremiumSection>

        <GuidePremiumSection
          id="mesure"
          number="11"
          label="Pilotage"
          title="Remplacez le prévisionnel par le réalisé à M1, M3 et M6"
        >
          <p>
            France Num distingue les objectifs, les progrès et les résultats
            attendus puis obtenus, tout en rappelant que certains effets sont
            difficiles à chiffrer. Votre tableau de suivi doit donc conserver
            les effets qualitatifs au lieu de les convertir de force.{" "}
            <a
              href="https://www.francenum.gouv.fr/guides-et-conseils/strategie-numerique/comprendre-le-numerique/comment-mesurer-les-effets-de-la"
              target="_blank"
              rel="noreferrer"
            >
              La fiche officielle mise à jour en avril 2026
            </a>{" "}
            fournit ce cadre général ; les indicateurs restent à choisir selon
            le projet.
          </p>

          <GuideTable
            caption="Registre prévision contre réalisé après la mise en service"
            headers={["Moment", "À remplacer par le réalisé", "Décision possible"]}
            rows={[
              [
                "M1",
                "Coûts de bascule, utilisateurs actifs, incidents, double exploitation, première destination des heures",
                "Corriger l’accès, la formation ou le périmètre",
              ],
              [
                "M3",
                "Rampe réelle, volumes traités, contournements, temps par cas, décaissements réellement supprimés",
                "Confirmer, réduire ou suspendre",
              ],
              [
                "M6",
                "TCO cumulé, capacité utile démontrée, sécurité, maintenance, prévision révisée jusqu’à H",
                "Industrialiser, renégocier, remplacer ou arrêter",
              ],
            ]}
          />

          <FormulaBox>
            {[
              "REGISTRE DE RÉCONCILIATION",
              "",
              "Indicateur | unité | source | responsable",
              "Prévision | réalisé | écart | explication",
              "Impact trésorerie | impact capacité | qualitatif",
              "Action | date | nouvelle borne prudente",
            ].join("\n")}
          </FormulaBox>

          <p>
            Ne réécrivez pas la prévision initiale : conservez-la, ajoutez le
            réalisé et expliquez l’écart. Vous pourrez alors distinguer une
            hypothèse fausse, un retard, un problème d’adoption et un bénéfice
            qui existe mais n’a pas la nature prévue.
          </p>

        </GuidePremiumSection>

        <GuidePremiumSection
          id="decision"
          number="12"
          label="Décision"
          title="Concluez par une action, un propriétaire et une preuve"
        >
          <p>
            La dernière page ne reprend pas tout le calcul. Elle nomme l’option
            retenue et celle écartée, l’horizon, le scénario prudent, les gains
            nets et le retour durable. Ajoutez les inconnues, les responsables,
            la borne d’arrêt et la date de la prochaine revue.
          </p>

          <GuideTable
            caption="Les quatre sorties du dossier économique"
            headers={["Décision", "Quand elle est défendable", "Prochaine action"]}
            rows={[
              ["Investir", "Scénario prudent acceptable et risques financés", "Contractualiser les bornes et le suivi"],
              ["Piloter", "Valeur plausible mais adoption ou faisabilité à prouver", "Essai limité, réversible et mesuré"],
              ["Simplifier", "Option légère plus rapide ou plus rentable", "Tester avant tout développement"],
              ["Reporter ou refuser", "Inconnues majeures, valeur non attribuable ou risque non maîtrisé", "Obtenir la preuve manquante ou arrêter"],
            ]}
          />

          <GuidePremiumMemo title="Le dossier minimal à transmettre">
            <p>
              Le processus actuel, douze familles de coûts, calendrier mensuel,
              règles d’attribution des gains, trois scénarios, comparaison des
              options, risques de sécurité et de sortie, puis registre M1/M3/M6.
              Si une donnée manque, son propriétaire et sa date d’obtention
              doivent être visibles.
            </p>
          </GuidePremiumMemo>

          <p>
            Ce calcul n’a de sens qu’adossé à un problème observé. Si le besoin
            lui-même reste flou, le{" "}
            <Link href="/guides/signes-besoin-logiciel-metier">
              diagnostic en trois situations
            </Link>{" "}
            précède utilement toute estimation. Deux postes du TCO se chiffrent
            par ailleurs dans des dossiers dédiés : la durée, avec{" "}
            <Link href="/guides/combien-de-temps-developper-saas">
              combien de temps faut-il pour développer un SaaS
            </Link>
            , et le périmètre de départ, avec{" "}
            <Link href="/guides/mvp-saas-quoi-inclure">
              ce qu’un MVP doit contenir
            </Link>
            .
          </p>

          <p>
            Si la comparaison porte sur une plateforme existante, les deux
            guides{" "}
            <Link href="/guides/airtable-notion-ou-application-metier">
              Airtable ou Notion face à une application métier
            </Link>{" "}
            et{" "}
            <Link href="/guides/power-apps-ou-application-sur-mesure">
              Power Apps face à une application sur mesure
            </Link>{" "}
            détaillent les coûts cachés à intégrer au calcul : licences par
            utilisateur, connecteurs, environnements et coût de sortie. Enfin,
            un devis ne se compare pas au seul montant :{" "}
            <Link href="/guides/choisir-prestataire-application-metier">
              choisir un prestataire sur preuves
            </Link>{" "}
            explique ce qu’il faut exiger avant de signer.
          </p>

          <p>
            Vous pouvez maintenant{" "}
            <TrackedGuideCtaLink
              href="/demarrer-un-projet"
              placement="article_end_inline"
            >
              faire vérifier votre dossier économique
            </TrackedGuideCtaLink>
            . Indiquez ce qui est observé, estimé, contractuel ou encore
            inconnu. L’objectif du premier échange n’est pas de promettre un
            ROI, mais de repérer le chiffre, le test ou le devis qui manque
            avant de choisir.
          </p>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
