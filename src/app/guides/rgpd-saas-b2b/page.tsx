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

const guide = getGuide("rgpd-saas-b2b");

export const metadata = buildGuideMetadata(
  guide,
  "RGPD pour un SaaS B2B : rôles, fonctions, contrat et données",
);

const [articleJsonLd, breadcrumbJsonLd] = buildGuideStructuredData(
  guide,
  "RGPD pour un SaaS B2B",
);

const faqItems: GuideFAQItem[] = [
  {
    question: "Un SaaS B2B est-il toujours sous-traitant ?",
    answer:
      "Non. Le rôle dépend du traitement réel. Le SaaS peut traiter certaines données sur instruction de son client et agir comme sous-traitant, tout en décidant lui-même d’autres traitements, par exemple pour sa propre facturation ou prospection. Documentez chaque finalité et faites confirmer les cas ambigus.",
  },
  {
    question: "Un hébergement en Europe suffit-il pour respecter le RGPD ?",
    answer:
      "Non. La localisation est une information importante, mais elle ne répond pas à la finalité, à la minimisation, aux accès, aux durées, aux sous-traitants, aux droits des personnes, à la sécurité ni aux éventuels transferts. Analysez toute la chaîne et les contrats applicables.",
  },
  {
    question:
      "Faut-il obligatoirement nommer un délégué à la protection des données (DPO) pour un SaaS B2B ?",
    answer:
      "Pas dans tous les cas. L’obligation dépend notamment de l’organisme et des traitements réalisés. Même lorsqu’un DPO n’est pas obligatoire, un conseil compétent peut être nécessaire pour des données sensibles, une surveillance régulière à grande échelle, des rôles partagés, des transferts complexes ou une analyse d’impact.",
  },
  {
    question:
      "Faut-il un accord de sous-traitance des données (DPA) avec chaque client ?",
    answer:
      "Lorsqu’un traitement relève d’une relation responsable de traitement–sous-traitant, l’article 28 du RGPD exige un contrat comportant les éléments applicables. Un DPA standard n’est toutefois pas une preuve que le produit, la liste des prestataires et les pratiques correspondent au document signé.",
  },
  {
    question:
      "Peut-on utiliser les données d’un client pour améliorer une IA ?",
    answer:
      "Pas automatiquement. Un nouvel usage peut modifier les finalités, les rôles, les destinataires et les garanties nécessaires. Ne réutilisez pas les données confiées sur la seule base d’une clause vague. Faites analyser le cas, le contrat, l’information, les droits et les services IA concernés avant tout usage.",
  },
  {
    question:
      "Qui doit prévenir la CNIL en cas de fuite et que signifie le délai de 72 heures ?",
    answer:
      "Le responsable de traitement notifie l’autorité compétente sauf si la violation est peu susceptible d’engendrer un risque pour les droits et libertés. Il agit, si possible, dans les 72 heures après en avoir pris connaissance et motive tout retard. Le sous-traitant l’informe sans délai indu. Les personnes concernées sont informées lorsque la violation est susceptible d’engendrer un risque élevé, sous réserve des exceptions prévues par l’article 34.",
  },
];

const keyPoints: GuideSidebarKeyPoint[] = [
  {
    number: "01",
    title: "Une donnée à la fois",
    description: "",
    color: "blue",
  },
  {
    number: "02",
    title: "Deux casquettes possibles",
    description: "",
    color: "violet",
  },
  {
    number: "03",
    title: "Fonctions vérifiables",
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
    href: "/guides/securite-saas-b2b",
    label: "Préparer les preuves de sécurité d’un SaaS",
  },
  {
    href: "/guides/cahier-des-charges-saas",
    label: "Rédiger le cahier des charges du SaaS",
  },
  {
    href: "/guides/choisir-prestataire-application-metier",
    label: "Choisir le prestataire de l’application",
  },
  {
    href: "/services/securite-rgpd",
    label: "Voir l’accompagnement sécurité et RGPD",
  },
];

const tocItems = [
  { id: "cinq-questions", label: "Répondre aux cinq questions du prospect" },
  { id: "casquettes", label: "Distinguer les deux casquettes du SaaS" },
  { id: "donnee", label: "Suivre une donnée de bout en bout" },
  { id: "minimiser", label: "Supprimer ce qui n’est pas nécessaire" },
  { id: "prestataires", label: "Cartographier les prestataires et les lieux" },
  { id: "fonctions", label: "Transformer les droits en fonctions" },
  { id: "contrat", label: "Faire correspondre le contrat à la réalité" },
  { id: "incident", label: "Simuler un incident sans faux délai" },
  { id: "specialiste", label: "Savoir quand demander une revue spécialisée" },
  { id: "sources", label: "Sources et limites juridiques" },
];

const dataJourney = [
  {
    step: "Collecte",
    question:
      "Qui saisit la donnée, à quel moment et avec quelle information donnée à la personne ?",
    proof:
      "Un formulaire réel ou une importation testée, avec la source et la finalité nommées.",
  },
  {
    step: "Utilisation",
    question:
      "Quelle action du produit a besoin de cette donnée et qui peut la consulter ?",
    proof:
      "Un rôle utilisateur et un scénario métier précis, pas « cela pourra servir plus tard ».",
  },
  {
    step: "Transmission",
    question:
      "Quel prestataire ou service reçoit la donnée, dans quel pays et pour quoi faire ?",
    proof:
      "Une liste reliée aux services réellement activés et aux contrats applicables.",
  },
  {
    step: "Conservation",
    question:
      "Combien de temps la donnée reste-t-elle active, archivée puis supprimée ?",
    proof:
      "Une règle exécutable, une exception justifiée et la personne qui la maintient.",
  },
  {
    step: "Droit ou fin de contrat",
    question:
      "Comment retrouver, corriger, exporter, effacer ou restituer la donnée ?",
    proof:
      "Une demande fictive réalisée jusqu’au résultat final, sauvegardes incluses dans le périmètre expliqué.",
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
          { label: "RGPD pour un SaaS B2B" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Votre prospect demande un accord de sous-traitance des données, souvent appelé DPA, vos prestataires, les durées et la procédure d’incident. Suivez une donnée de bout en bout pour relier rôles, contrat et fonctions réelles, sans promettre une conformité automatique."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={keyPoints}
        relatedLinks={relatedLinks}
        faqTitle="Questions fréquentes sur le RGPD d’un SaaS B2B"
        faqItems={faqItems}
        showSidebarCta={false}
      >
        <p className="lead">
          Un prospect veut signer, mais demande qui décide des données, quels
          prestataires y accèdent, combien de temps elles restent et ce que vous
          faites en cas de fuite. Suivez une donnée, de sa collecte à sa
          suppression. Le responsable de traitement décide pourquoi et comment
          elle est utilisée ; le sous-traitant suit ses instructions. Votre
          SaaS peut avoir les deux rôles. Notez la raison précise de
          l’utilisation — sa finalité — et son trajet. Vérifiez que le produit
          limite les accès et permet de retrouver, exporter, corriger ou
          supprimer la donnée. Le contrat doit décrire cette réalité. Réduisez
          ou reportez une fonction risquée. Si le rôle, le transfert, la base
          juridique, les données sensibles ou l’analyse d’impact restent
          incertains, demandez une revue à un délégué à la protection des
          données (DPO) ou un juriste. Ce guide ne remplace pas leur avis.
        </p>

        <InfoBox variant="emerald" title="La réponse en une phrase">
          N’envoyez pas un DPA générique avant d’avoir relié chaque donnée à une
          finalité, un rôle, des prestataires, une durée, une fonction du
          produit et une preuve ; faites confirmer les cas qui dépassent ce
          cadre.
        </InfoBox>

        <GuideToc items={tocItems} />

        <h2 id="cinq-questions">
          Votre prospect pose cinq questions : répondez avec des faits
        </h2>
        <p>
          Un questionnaire de sécurité ou de protection des données peut
          contenir des dizaines de lignes. Pour un dirigeant, cinq questions
          suffisent à révéler les principales zones de travail :
        </p>

        <div className="not-prose my-8 grid gap-4">
          {[
            {
              question: "Quelles données traitez-vous, et pourquoi ?",
              evidence:
                "Une carte des champs et fichiers reliés à une finalité précise.",
            },
            {
              question: "Qui décide, et pour le compte de qui ?",
              evidence:
                "Une qualification argumentée pour chaque usage, pas un rôle unique appliqué à tout le SaaS.",
            },
            {
              question: "Qui d’autre reçoit les données ?",
              evidence:
                "Une liste à jour des services activés, données, lieux et engagements.",
            },
            {
              question:
                "Comment les droits et la fin de contrat fonctionnent-ils ?",
              evidence:
                "Une demande fictive exécutée, un export compris et une règle de suppression testée.",
            },
            {
              question: "Que faites-vous lors d’un incident ?",
              evidence:
                "Un canal, des personnes nommées, les faits conservés et une escalade adaptée au rôle.",
            },
          ].map((item, index) => (
            <section
              key={item.question}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6"
            >
              <div className="flex gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                  {index + 1}
                </span>
                <div>
                  <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                    {item.question}
                  </h3>
                  <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    <strong className="text-zinc-900 dark:text-zinc-200">
                      Preuve utile :
                    </strong>{" "}
                    {item.evidence}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        <p>
          Si une réponse repose sur « notre hébergeur est européen » ou « notre
          avocat nous a donné un modèle », considérez-la comme incomplète. Elle
          peut être vraie et utile, mais elle ne décrit ni les usages du
          produit, ni tous les destinataires, ni la manière d’exécuter une
          demande.
        </p>

        <h2 id="casquettes">
          Votre SaaS peut porter deux casquettes dans la même journée
        </h2>
        <p>
          La{" "}
          <a
            href="https://www.cnil.fr/fr/rgpd-comment-bien-identifier-son-role"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL rappelle que la qualification dépend des activités réelles
          </a>{" "}
          et non du seul titre écrit dans le contrat. Elle recommande de
          documenter le raisonnement. Le{" "}
          <a
            href="https://www.edpb.europa.eu/documents/guideline/guidelines-072020-on-the-concepts-of-controller-and-processor-in-the-gdpr_en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Comité européen de la protection des données
          </a>{" "}
          approfondit ces notions dans ses lignes directrices 07/2020.
        </p>

        <GuideTable
          caption="Deux casquettes possibles d’un même fournisseur SaaS"
          headers={[
            "Usage",
            "Qui décide et rôle à examiner",
            "Question de contrôle",
          ]}
          rows={[
            [
              "Le client charge la liste de ses salariés pour organiser une formation.",
              "Le client définit généralement l’objectif et donne des instructions : sous-traitant possible pour ce traitement, à confirmer selon les faits.",
              "Le fournisseur utilise-t-il les données pour une finalité propre non prévue ?",
            ],
            [
              "Le fournisseur conserve les contacts de facturation de ses clients.",
              "Le fournisseur décide de sa gestion contractuelle et comptable : responsable possible pour cette finalité propre.",
              "La donnée et sa durée sont-elles limitées à ce besoin ?",
            ],
            [
              "Le produit mutualise des données pour entraîner un modèle ou créer un nouveau service.",
              "La décision peut dépasser les instructions initiales du client : qualification et licéité à réexaminer impérativement.",
              "Contrat, information et droits autorisent-ils réellement ce nouvel usage ?",
            ],
          ]}
        />

        <p>
          Le tableau ne qualifie pas votre service à distance. Il montre
          pourquoi « nous sommes seulement sous-traitants » est une réponse trop
          large. Pour chaque finalité, notez qui choisit les données, la raison,
          la durée et les moyens essentiels. Si deux organisations déterminent
          ensemble certains éléments, ne forcez pas une case : demandez une
          analyse spécialisée.
        </p>

        <h2 id="donnee">Suivez une donnée de bout en bout</h2>
        <p>
          Choisissez une donnée ordinaire du produit — par exemple l’adresse
          professionnelle d’un utilisateur — et refusez de passer à la suivante
          tant que son parcours reste flou. Cette méthode évite de remplir un
          registre abstrait sans voir les fonctions manquantes.
        </p>

        <div className="not-prose my-8 space-y-4">
          {dataJourney.map((item, index) => (
            <section
              key={item.step}
              className="relative rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/60 sm:p-6"
            >
              <div className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-sm font-bold text-violet-800 dark:bg-violet-950 dark:text-violet-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                    {item.step}
                  </h3>
                  <p className="mb-0 mt-2 text-sm font-medium leading-relaxed text-zinc-800 dark:text-zinc-200">
                    {item.question}
                  </p>
                  <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    <strong>Preuve :</strong> {item.proof}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        <p>
          La{" "}
          <a
            href="https://www.cnil.fr/fr/guide-rgpd-du-developpeur"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL propose un guide RGPD destiné aux équipes de développement
          </a>{" "}
          qui relie notamment architecture, minimisation, gestion des
          utilisateurs, tests, information, droits et conservation. C’est une
          première approche, pas une validation de votre SaaS. Utilisez-la pour
          transformer les choix en tâches vérifiables.
        </p>

        <h2 id="minimiser">
          La fonction la plus simple à sécuriser est parfois celle que vous
          retirez
        </h2>
        <p>
          Pour chaque champ, demandez : « quelle action échoue si nous ne le
          collectons pas ? » Si personne ne sait répondre, retirez-le du
          formulaire de test. La{" "}
          <a
            href="https://www.cnil.fr/fr/minimiser-les-donnees-collectees"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL rappelle le principe de minimisation
          </a>{" "}
          : les données doivent être adéquates, pertinentes et limitées à ce qui
          est nécessaire au regard de la finalité.
        </p>

        <p>
          Cette décision peut éviter plus de travail qu’une nouvelle couche
          technique. Un SaaS de planification n’a pas besoin de la date de
          naissance d’un salarié si aucune règle légitime du service ne
          l’utilise. Une pièce justificative n’a pas à rester indéfiniment
          attachée au compte parce que la suppression n’a jamais été prévue.
          Réduire le périmètre diminue aussi les droits, les accès et les
          incidents à gérer.
        </p>

        <InfoBox
          variant="amber"
          title="Ne transformez pas ce test en base légale"
        >
          Savoir à quoi sert une donnée ne détermine pas automatiquement la base
          juridique, l’information ou la durée correcte. Faites confirmer ces
          éléments lorsque le cas n’est pas évident, en particulier pour les
          salariés, données sensibles, mineurs, surveillance ou profilage.
        </InfoBox>

        <h2 id="prestataires">
          Nommez chaque prestataire, les données reçues et le pays concerné
        </h2>
        <p>
          Hébergement, e-mails, paiement, support, mesure d’audience, journaux techniques et
          intelligence artificielle peuvent chacun recevoir une partie des
          données. Ne copiez pas la liste de tous les fournisseurs que
          l’entreprise a un jour testés. Partez des services activés en
          production et notez :
        </p>
        <ul>
          <li>le service et sa fonction précise ;</li>
          <li>les catégories de données qu’il reçoit ;</li>
          <li>les pays de traitement ou d’accès connus ;</li>
          <li>le contrat, les garanties et les sous-traitants ultérieurs ;</li>
          <li>
            la manière de le désactiver, remplacer ou supprimer les données ;
          </li>
          <li>la personne qui met cette ligne à jour.</li>
        </ul>

        <p>
          La{" "}
          <a
            href="https://www.cnil.fr/fr/securite-gerer-la-sous-traitance"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL demande de choisir des sous-traitants présentant des garanties
            suffisantes
          </a>
          , d’encadrer la relation et de contrôler les mesures pertinentes. Une
          certification affichée par un prestataire peut faire partie du dossier
          ; elle ne remplace pas la compréhension des données, du service et du
          contrat réellement achetés.
        </p>

        <p>
          « Hébergé en Europe » ne clôt donc pas la question. Il faut encore
          examiner les accès, les sous-traitants, les services annexes et les
          éventuels transferts. Les clauses contractuelles types entre
          responsable et sous-traitant présentées par la{" "}
          <a
            href="https://www.cnil.fr/fr/clauses-contractuelles-types-entre-responsable-de-traitement-et-sous-traitant"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL au titre de l’article 28
          </a>{" "}
          ne sont pas, à elles seules, les clauses dédiées aux transferts hors
          de l’Union. Ne mélangez pas les deux sujets.
        </p>

        <h2 id="fonctions">
          Transformez les droits et les durées en fonctions testables
        </h2>
        <p>
          Une clause « nous aidons le client à répondre aux demandes » reste
          théorique si le support ne sait pas retrouver toutes les occurrences
          d’une personne. Créez un utilisateur fictif, placez ses données dans
          les fonctions réellement utilisées, puis exécutez une demande de bout
          en bout.
        </p>

        <GuideTable
          caption="Du principe RGPD à une preuve dans le produit"
          headers={["Besoin", "Fonction ou procédure", "Test à réaliser"]}
          rows={[
            [
              "Retrouver une personne",
              "Recherche par identifiants connus et rapprochement des sources.",
              "Le support retrouve les données du compte, activités et fichiers dans le périmètre annoncé.",
            ],
            [
              "Corriger",
              "Modification contrôlée et propagation vers la source de vérité.",
              "Une correction n’est pas réécrasée par une synchronisation.",
            ],
            [
              "Exporter ou restituer",
              "Format documenté, relations compréhensibles et responsable nommé.",
              "Une seconde personne comprend l’échantillon exporté.",
            ],
            [
              "Effacer ou rendre irréversiblement anonyme",
              "Règle par type de donnée, exceptions et effet sur le produit.",
              "La donnée disparaît des espaces prévus sans casser les obligations à conserver.",
            ],
            [
              "Appliquer une durée",
              "Expiration automatique ou revue planifiée avec journal.",
              "Une donnée fictive arrivée à échéance suit réellement le chemin prévu.",
            ],
            [
              "Terminer un contrat",
              "Restitution, suppression, fermeture des accès et preuve.",
              "Un compte client de test est clôturé sans laisser d’accès actif oublié.",
            ],
          ]}
        />

        <p>
          Une donnée pseudonymisée reste une donnée personnelle lorsqu’elle peut
          être reliée à une personne à l’aide d’informations conservées
          séparément. Elle reste donc soumise au RGPD. Une anonymisation, elle,
          doit rendre l’identification irréversible en pratique. La{" "}
          <a
            href="https://www.cnil.fr/fr/technologies/lanonymisation-de-donnees-personnelles"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL explique cette différence entre anonymisation et
            pseudonymisation
          </a>
          . N’utilisez pas le mot « anonyme » pour une simple suppression du nom
          ou le remplacement d’un identifiant.
        </p>

        <p>
          Les sauvegardes demandent une explication honnête : une suppression
          instantanée dans chaque copie peut être impossible ou nuire à la
          sécurité de restauration. Documentez le cycle, les protections et le
          délai de disparition prévu au lieu de promettre un résultat que
          l’architecture ne sait pas tenir.
        </p>

        <h2 id="contrat">
          Faites correspondre le contrat à ce que le SaaS fait
        </h2>
        <p>
          L’
          <a
            href="https://eur-lex.europa.eu/eli/reg/2016/679/oj"
            target="_blank"
            rel="noopener noreferrer"
          >
            article 28 du RGPD
          </a>{" "}
          encadre la relation entre responsable de traitement et sous-traitant
          et prévoit des éléments contractuels applicables. La{" "}
          <a
            href="https://www.cnil.fr/fr/clauses-contractuelles-types-entre-responsable-de-traitement-et-sous-traitant"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL présente les clauses contractuelles types
          </a>{" "}
          comme un support possible ; leur usage ne dispense pas de remplir les
          annexes et de décrire la réalité.
        </p>

        <p>Relisez le contrat en face de quatre preuves :</p>
        <ol>
          <li>
            les traitements et instructions correspondent aux fonctions activées
            ;
          </li>
          <li>
            la liste des sous-traitants correspond aux services utilisés ;
          </li>
          <li>
            les mesures de sécurité décrites existent et ont un responsable ;
          </li>
          <li>
            la restitution, la suppression et l’assistance peuvent être
            exécutées.
          </li>
        </ol>

        <p>
          Une contradiction doit déclencher une correction, pas une phrase plus
          vague. Si le produit ne sait pas supprimer un type de fichier, ne
          promettez pas qu’il le fait : limitez la fonction, adaptez
          l’architecture ou faites modifier la rédaction avec un conseil
          compétent.
        </p>

        <h2 id="incident">
          Simulez un incident et distinguez correctement les rôles
        </h2>
        <p>
          Imaginez qu’un utilisateur accède au document d’une autre entreprise.
          Sans utiliser de donnée réelle, demandez à l’équipe de dérouler les
          premières actions : fermer l’accès, conserver les faits, identifier
          les données et personnes concernées, alerter le responsable interne,
          contacter le client selon le rôle et rassembler les informations
          nécessaires à sa décision.
        </p>

        <InfoBox
          variant="blue"
          title="Le délai de 72 heures n’est pas un slogan"
        >
          L’
          <a
            href="https://eur-lex.europa.eu/eli/reg/2016/679/oj"
            target="_blank"
            rel="noopener noreferrer"
          >
            article 33 du RGPD
          </a>{" "}
          prévoit que le responsable notifie l’autorité compétente, sauf si la
          violation est peu susceptible d’engendrer un risque pour les droits et
          libertés. Il le fait, si possible, dans les 72 heures après en avoir
          pris connaissance et joint les motifs du retard lorsque ce délai est
          dépassé. Le sous-traitant informe le responsable sans délai indu.
          L’article 34 prévoit d’informer les personnes concernées lorsque le
          risque est élevé, sous réserve des exceptions qu’il énumère. Votre
          procédure doit refléter votre rôle et le contrat ; n’inventez ni
          notification automatique par le SaaS ni délai universel d’une heure.
        </InfoBox>

        <p>
          Un exercice utile ne se termine pas à l’envoi d’un e-mail. Il vérifie
          que l’adresse est surveillée, que les journaux nécessaires existent,
          que les personnes d’astreinte comprennent le produit et que le client
          reçoit assez de faits pour décider. Pour les preuves techniques plus
          larges attendues par un acheteur, consultez le guide{" "}
          <Link href="/guides/securite-saas-b2b">sécurité d’un SaaS B2B</Link>.
        </p>

        <InfoBox variant="blue" title="Exemple entièrement fictif">
          « Orbia » et toutes les données ci-dessous sont inventées. Cet exemple
          ne décrit ni un client, ni une qualification juridique réelle, ni une
          validation de conformité par Hagnéré Code.
        </InfoBox>

        <p>
          Orbia vend un SaaS fictif de suivi de formations. Une entreprise
          cliente y charge les noms et adresses professionnelles de ses salariés
          pour organiser ses sessions. Pour ce traitement, les faits peuvent
          orienter vers un rôle de sous-traitant d’Orbia, à confirmer avec le
          contrat et les décisions réellement prises. Orbia conserve aussi les
          coordonnées de ses interlocuteurs de facturation pour sa propre
          gestion : cette finalité peut relever d’une autre casquette.
        </p>
        <p>
          L’équipe suit une adresse de test. Elle trouve une copie inutile dans
          un outil d’assistance, retire ce transfert, ajoute une règle de durée
          et teste l’export d’un compte. Elle demande ensuite à un spécialiste
          de confirmer ses rôles, le cadre contractuel et les points liés aux
          salariés. L’exemple ne permet pas d’affirmer qu’Orbia est conforme ;
          il montre comment voir concrètement ce qui manque.
        </p>

        <h2 id="specialiste">
          Sachez quand limiter le produit ou demander une revue spécialisée
        </h2>
        <p>
          Vous pouvez avancer seul sur la carte des données, la suppression des
          champs inutiles, le test des droits, l’inventaire des prestataires et
          la fermeture des accès oubliés. Demandez un avis de DPO ou de juriste
          lorsque la décision porte notamment sur :
        </p>
        <ul>
          <li>des données sensibles ou des personnes vulnérables ;</li>
          <li>
            une surveillance régulière, un profilage ou un traitement à grande
            échelle ;
          </li>
          <li>
            une base juridique, une analyse d’impact ou un rôle contesté ;
          </li>
          <li>
            des responsables conjoints ou des instructions qui ne reflètent pas
            la pratique ;
          </li>
          <li>un transfert ou une chaîne de sous-traitance complexe ;</li>
          <li>
            la réutilisation de données clients pour une IA ou une nouvelle
            finalité ;
          </li>
          <li>une violation réelle qui exige une décision rapide.</li>
        </ul>

        <p>
          La solution la plus simple peut être de ne pas collecter une donnée,
          de désactiver temporairement une fonction, de limiter le pilote à des
          données fictives ou de choisir un service standard déjà validé par le
          client. Développer davantage n’est pas une réponse automatique au
          RGPD.
        </p>

        <GuideInlineCTA
          title="Préparer les fonctions RGPD de votre SaaS"
          description="Nous pouvons relier votre carte de données aux rôles, accès, exports, durées, sous-traitants et scénarios d’incident. Pour une qualification ou une rédaction juridique, nous vous indiquerons clairement le besoin d’un DPO ou d’un juriste."
          tags={[
            "Information générale",
            "Fonctions testables",
            "DPO ou juriste si nécessaire",
          ]}
          ctaLabel="Décrire mon SaaS"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="sources">Sources officielles et limites juridiques</h2>
        <p>
          Ce guide s’appuie sur le texte du{" "}
          <a
            href="https://eur-lex.europa.eu/eli/reg/2016/679/oj"
            target="_blank"
            rel="noopener noreferrer"
          >
            règlement général sur la protection des données
          </a>
          , la{" "}
          <a
            href="https://www.cnil.fr/fr/rgpd-comment-bien-identifier-son-role"
            target="_blank"
            rel="noopener noreferrer"
          >
            fiche CNIL sur les rôles
          </a>
          , le{" "}
          <a
            href="https://www.cnil.fr/fr/guide-rgpd-du-developpeur"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide RGPD du développeur
          </a>
          , sa fiche sur la{" "}
          <a
            href="https://www.cnil.fr/fr/technologies/lanonymisation-de-donnees-personnelles"
            target="_blank"
            rel="noopener noreferrer"
          >
            différence entre anonymisation et pseudonymisation
          </a>
          , les pages CNIL sur la{" "}
          <a
            href="https://www.cnil.fr/fr/securite-gerer-la-sous-traitance"
            target="_blank"
            rel="noopener noreferrer"
          >
            sous-traitance
          </a>{" "}
          et les{" "}
          <a
            href="https://www.cnil.fr/fr/clauses-contractuelles-types-entre-responsable-de-traitement-et-sous-traitant"
            target="_blank"
            rel="noopener noreferrer"
          >
            clauses contractuelles types
          </a>
          , ainsi que les{" "}
          <a
            href="https://www.edpb.europa.eu/documents/guideline/guidelines-072020-on-the-concepts-of-controller-and-processor-in-the-gdpr_en"
            target="_blank"
            rel="noopener noreferrer"
          >
            lignes directrices 07/2020 du CEPD
          </a>
          . Sources consultées le 23 juillet 2026.
        </p>
        <p>
          Les textes, recommandations et services peuvent évoluer. Ce contenu
          est une information générale destinée à préparer un travail de produit
          ; il ne qualifie pas votre rôle, ne choisit pas votre base juridique,
          ne valide pas un transfert et ne certifie pas la conformité de votre
          SaaS. Faites intervenir un professionnel compétent lorsque les faits,
          le secteur ou le risque l’exigent.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
