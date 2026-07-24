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

const guide = getGuide("google-ads-saas-b2b");

export const metadata = buildGuideMetadata(
  guide,
  "Google Ads pour un SaaS B2B : relier le clic au contrat signé",
);

const [articleJsonLd, breadcrumbJsonLd] = buildGuideStructuredData(
  guide,
  "Google Ads pour SaaS B2B",
);

const faqItems = [
  {
    question: "Google Ads fonctionne-t-il pour tous les SaaS B2B ?",
    answer:
      "Non. Google Ads est surtout testable lorsque des entreprises cherchent déjà le problème ou une solution proche, que l’offre est compréhensible et que l’équipe sait qualifier les demandes. Une idée nouvelle, sans vocabulaire recherché ni processus commercial tenu, peut avoir besoin d’un autre premier canal.",
  },
  {
    question:
      "Une demande de démonstration doit-elle être la conversion principale ?",
    answer:
      "Pas automatiquement. Utilisez l’étape la plus proche d’une vente que votre équipe renseigne de façon régulière et identique : demande acceptée, démonstration réellement tenue, proposition ou contrat. Un statut ambitieux mais rarement mis à jour donne un signal moins utile qu’une étape plus simple et fiable.",
  },
  {
    question: "Faut-il un CRM pour suivre les clients issus de Google Ads ?",
    answer:
      "Non, pas pour commencer. La documentation Google prévoit aussi un autre système de gestion des prospects, dont un tableur. En revanche, chaque contact doit conserver un identifiant, une origine et des statuts cohérents. Un CRM mal tenu ne résout pas ce problème.",
  },
  {
    question: "Combien de temps faut-il attendre avant de juger la campagne ?",
    answer:
      "Il faut attendre que le même groupe de contacts ait avancé suffisamment loin dans votre cycle commercial réel, tout en vérifiant dès les premiers jours que le suivi fonctionne. Il n’existe pas de délai universel : une campagne ne doit ni être coupée avant les ventes possibles, ni rester financée pendant des mois sous prétexte que les données viendront plus tard.",
  },
  {
    question: "Faut-il séparer les recherches contenant le nom du SaaS ?",
    answer:
      "Oui pour l’analyse. Une personne qui connaît déjà votre marque ne raconte pas la même acquisition qu’une entreprise qui cherche son problème sans vous connaître. Mélanger les deux peut faire paraître la prospection plus efficace qu’elle ne l’est.",
  },
  {
    question: "Quel budget faut-il prévoir pour Google Ads en SaaS B2B ?",
    answer:
      "Aucun montant universel n’est honnête. Le budget d’un test dépend du coût observé des recherches, du nombre de demandes nécessaire pour apprendre, du temps commercial, du cycle de vente et de la marge espérée. Commencez par écrire la décision que le test doit permettre et le plafond de perte acceptable.",
  },
];

const reversePath = [
  {
    title: "Contrat signé",
    question: "Quel client, quelle offre et quelle marge réelle ?",
  },
  {
    title: "Proposition",
    question: "La demande méritait-elle une offre commerciale ?",
  },
  {
    title: "Prospect accepté",
    question: "L’entreprise correspond-elle à votre cible ?",
  },
  {
    title: "Démonstration",
    question: "Le rendez-vous a-t-il réellement eu lieu ?",
  },
  {
    title: "Recherche et clic",
    question: "Quelle question a amené cette entreprise ?",
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
          { label: "Google Ads pour SaaS B2B" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous payez des clics et recevez des demandes de démonstration, mais personne ne sait quelles campagnes amènent les entreprises qui signent. Voici comment décider à partir du contrat réel, pas du formulaire."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "Contrat avant clic",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Même groupe suivi",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Coût et marge",
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
            href: "/guides/calculer-cout-par-lead-google-ads",
            label: "Calculer le vrai coût par lead",
          },
          {
            href: "/guides/suivi-conversions-google-ads",
            label: "Fiabiliser le suivi des conversions",
          },
          {
            href: "/guides/google-search-ads-ou-performance-max",
            label: "Choisir le bon type de campagne",
          },
          {
            href: "/guides/seo-saas-b2b",
            label: "Construire le SEO d’un SaaS B2B",
          },
        ]}
        faqTitle="Questions fréquentes sur Google Ads pour un SaaS B2B"
        faqItems={faqItems}
        showSidebarCta={false}
      >
        <p className="lead">
          Imaginez cette situation fictive : le tableau Google Ads annonce
          trente demandes de
          démonstration. Le commercial se souvient d’un seul contrat, sans
          savoir s’il vient de Google, d’une recommandation ou d’un ancien
          contact. Dans cette situation, le bon réflexe n’est pas d’augmenter le
          budget ni de couper la campagne au hasard. Sur le Réseau de Recherche,
          votre budget achète de la visibilité au moment où une personne cherche
          un sujet ; il ne transforme pas un formulaire en client. Pour décider,
          suivez le même groupe de contacts jusqu’aux demandes acceptées, aux
          propositions et aux contrats. Vérifiez ensuite si la demande
          recherchée existe et si le coût complet reste cohérent avec la marge
          attendue. Si vous ne pouvez pas faire ce rapprochement, réparez
          d’abord le suivi. Si l’offre ou la demande restent floues, reportez le
          test.
        </p>

        <InfoBox variant="emerald" title="La réponse courte">
          Google Ads peut convenir à un SaaS B2B lorsque des acheteurs cherchent
          déjà le problème, que l’offre se comprend vite et que chaque demande
          peut être suivie jusqu’au résultat commercial. Le nombre de
          formulaires ne suffit pas à prouver la rentabilité.
        </InfoBox>

        <p>
          Ce guide vous aide à préparer cette décision. Il ne fournit ni budget
          minimum, ni coût par clic « normal », ni taux de conversion garanti.
          Ces chiffres dépendent du marché, de l’offre, de la concurrence et de
          votre façon de vendre. Si vous cherchez d’abord à comparer acquisition
          payante et contenu durable, commencez par le guide{" "}
          <Link href="/guides/seo-ou-google-ads">SEO ou Google Ads</Link>.
        </p>

        <GuideToc
          items={[
            { id: "contrat", label: "Commencer par le contrat signé" },
            { id: "demande", label: "Vérifier la demande recherchée" },
            { id: "qualification", label: "Définir un bon prospect" },
            { id: "cohorte", label: "Suivre le même groupe de contacts" },
            { id: "cout", label: "Comparer coût et marge" },
            { id: "cycle", label: "Respecter le cycle de vente" },
            { id: "reporter", label: "Savoir quand reporter" },
            { id: "verdict", label: "Prendre une décision" },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="contrat">Commencez par le contrat que vous voulez signer</h2>
        <p>
          La campagne est souvent lue dans le mauvais sens : clic, formulaire,
          démonstration, puis peut-être une vente. Retournez la question. Prenez
          un client signé et demandez ce qui s’est réellement passé avant. Vous
          verrez immédiatement les étapes qui manquent dans vos données.
        </p>

        <div className="not-prose my-8 grid gap-3">
          {reversePath.map((step, index) => (
            <section
              key={step.title}
              className="flex gap-4 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-700 dark:bg-violet-950 dark:text-violet-300">
                {index + 1}
              </span>
              <div>
                <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                  {step.title}
                </h3>
                <p className="mb-0 mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {step.question}
                </p>
              </div>
            </section>
          ))}
        </div>

        <p>
          Google décrit les{" "}
          <a
            href="https://support.google.com/google-ads/answer/2998031?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            importations de conversions hors connexion
          </a>{" "}
          pour relier une interaction publicitaire à une action réalisée plus
          tard, par exemple une vente. Pour les nouvelles configurations, cette
          même documentation recommande le suivi avancé des conversions pour
          les prospects. Elle indique aussi que, depuis le 15 juin 2026, les
          importations passent par l’API Data Manager. Le produit et ses écrans
          évoluent : retenez le principe, puis vérifiez la documentation
          actuelle avant toute configuration. Votre CRM ou votre tableur doit
          rester la source commerciale lisible, même si un statut est aussi
          renvoyé à Google.
        </p>

        <h2 id="demande">
          Vérifiez que les futurs clients cherchent réellement le problème
        </h2>
        <p>
          Une campagne sur le{" "}
          <a
            href="https://support.google.com/google-ads/answer/9510373?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Réseau de Recherche Google
          </a>{" "}
          répond à une demande déjà exprimée. Elle peut montrer une annonce à
          quelqu’un qui cherche « logiciel planning équipes chantier ». Elle ne
          peut pas créer, à elle seule, le vocabulaire d’un marché qui ne sait
          pas encore nommer votre solution. Les autres types de campagnes Google
          Ads suivent des logiques de diffusion différentes ; ce classement
          concerne donc bien Search. Avant de financer la campagne, prenez dix
          recherches possibles et rangez-les.
        </p>

        <GuideTable
          caption="Quatre familles de recherches à ne pas mélanger"
          headers={["Recherche", "Ce qu’elle peut signifier", "Décision"]}
          rows={[
            [
              "Nom de votre marque",
              "La personne vous connaît déjà ou revient après un autre contact.",
              "Mesurer séparément pour ne pas attribuer toute la découverte à Google Ads.",
            ],
            [
              "Problème concret",
              "L’entreprise reconnaît une difficulté, sans connaître la réponse.",
              "Expliquer le diagnostic et qualifier le besoin avant la démonstration.",
            ],
            [
              "Catégorie de solution",
              "L’acheteur compare déjà des outils ou des prestataires.",
              "Présenter le cas d’usage, les limites, les preuves et la prochaine étape.",
            ],
            [
              "Question scolaire ou trop large",
              "Recherche d’information, de formation ou de définition.",
              "Exclure ou traiter en contenu ; ne pas supposer une intention d’achat.",
            ],
          ]}
        />

        <p>
          Une recherche n’est jamais une certitude sur la personne. La page de
          destination doit donc dire rapidement qui est concerné, quel problème
          est traité, dans quel contexte le SaaS n’est pas adapté et ce que la
          démonstration permet de vérifier. Si cette réponse n’existe pas
          encore, travaillez la{" "}
          <Link href="/guides/landing-page-google-ads">page après le clic</Link>{" "}
          avant d’acheter davantage de visites.
        </p>

        <h2 id="qualification">
          Une demande de démonstration n’est pas encore un bon prospect
        </h2>
        <p>
          Écrivez une règle que deux commerciaux peuvent appliquer de la même
          façon. Elle doit rester assez simple pour être renseignée après chaque
          échange. Par exemple : entreprise dans le segment visé, problème
          réellement couvert, interlocuteur capable d’organiser la suite,
          échéance identifiable et contraintes compatibles avec le produit.
        </p>

        <InfoBox variant="blue" title="Un refus renseigne aussi la campagne">
          Ne supprimez pas les demandes hors cible. Marquez un motif court :
          particulier, étudiant, secteur non couvert, besoin absent du produit,
          budget incohérent, projet trop tôt ou coordonnées inutilisables. Ces
          motifs montrent si la requête, l’annonce, la page ou l’offre attire la
          mauvaise situation.
        </InfoBox>

        <p>
          Évitez un score compliqué que personne ne comprend. Commencez par
          trois statuts : <strong>à examiner</strong>, <strong>accepté</strong>,{" "}
          <strong>refusé avec motif</strong>. Ajoutez « démonstration tenue », «
          proposition envoyée » et « signé » lorsque l’équipe renseigne déjà les
          premiers statuts correctement. La qualité du signal importe plus que
          le prestige de son nom.
        </p>

        <h2 id="cohorte">Suivez une cohorte, même avec un simple tableur</h2>
        <p>
          Une cohorte est le groupe de contacts issus d’une même période ou d’un
          même test que vous suivez ensemble. Une ligne par contact suffit pour
          commencer. N’envoyez pas ce fichier à un prestataire sans définir les
          accès, les données nécessaires et les règles de confidentialité.
        </p>

        <GuideTable
          caption="Registre minimal pour relier une campagne au résultat commercial"
          headers={["Champ", "Question", "Règle simple"]}
          rows={[
            [
              "Origine",
              "Campagne et groupe d’annonces connus ?",
              "Conserver l’identifiant disponible et séparer la marque.",
            ],
            [
              "Demande",
              "Formulaire valide et entreprise identifiable ?",
              "Dédupliquer avant de compter.",
            ],
            [
              "Qualification",
              "Acceptée ou refusée pour quel motif ?",
              "Appliquer la même définition à toute la cohorte.",
            ],
            [
              "Avancement",
              "Démonstration tenue et proposition envoyée ?",
              "Noter la date réelle, pas seulement le rendez-vous prévu.",
            ],
            [
              "Résultat",
              "Contrat signé, revenu encaissé, marge à confirmer ?",
              "Ne pas remplacer la marge par le montant affiché au contrat.",
            ],
            [
              "Revue",
              "Quand cette ligne sera-t-elle réexaminée ?",
              "Prévoir une date qui couvre le cycle de vente.",
            ],
          ]}
        />

        <p>
          Google précise dans sa{" "}
          <a
            href="https://support.google.com/google-ads/answer/10029210?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation sur les conversions hors connexion
          </a>{" "}
          qu’un système de gestion de prospects peut être un CRM ou un autre
          outil, dont un tableur. Cela ne rend pas le suivi automatique : il
          faut conserver une correspondance fiable, mettre à jour les statuts et
          limiter les données aux besoins du traitement.
        </p>

        <h2 id="cout">Comparez le coût complet à la marge, pas aux clics</h2>
        <p>
          L’exemple suivant est entièrement fictif ; il ne décrit ni un client
          ni un cas Hagnéré Code. Il montre seulement comment garder le même
          dénominateur du début à la fin.
        </p>

        <FormulaBox>{`Dépense média : 3 600 € HT
Gestion directement attribuable au test : 900 € HT
Coût complet observé : 3 600 + 900 = 4 500 € HT

30 demandes reçues
12 prospects acceptés
4 propositions envoyées
1 client signé

Coût par demande = 4 500 / 30 = 150 € HT
Coût par prospect accepté = 4 500 / 12 = 375 € HT
Coût observé par client signé = 4 500 / 1 = 4 500 € HT`}</FormulaBox>

        <p>
          Ce calcul ne prouve pas la rentabilité. Il manque encore le temps des
          commerciaux, la mise en œuvre, le support, les remises, les impayés,
          les résiliations et la marge future. Avec zéro client, le coût par
          client n’est pas « 0 € » : il est non calculable à ce stade. Avec deux
          clients, il serait de 2 250 € dans cette cohorte, sans garantie que le
          résultat se répète.
        </p>

        <p>
          Comparez donc le coût complet à une marge prudente et attribuable, pas
          au chiffre d’affaires contractuel brut. Pour reprendre les formules et
          les cas sans vente, utilisez le guide sur le{" "}
          <Link href="/guides/calculer-cout-par-lead-google-ads">
            coût réel d’un lead Google Ads
          </Link>
          .
        </p>

        <h2 id="cycle">Votre cycle est long : adaptez la mesure</h2>
        <p>
          La{" "}
          <a
            href="https://support.google.com/google-ads/answer/3123169?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            fenêtre de conversion Google Ads
          </a>{" "}
          définit le délai pendant lequel une action peut être rattachée à une
          interaction. La documentation consultée le 23 juillet 2026 décrit des
          fenêtres configurables selon les sources et les types de conversion.
          Vérifiez le réglage actuel : un cycle commercial de plusieurs semaines
          peut dépasser une fenêtre trop courte.
        </p>

        <p>
          Ne confondez toutefois pas attribution publicitaire et vérité
          commerciale. Le CRM doit continuer à montrer les contacts, les dates,
          les propositions et les ventes, même si une plateforme ne rattache
          plus l’événement au clic. Faites trois revues :
        </p>
        <ul>
          <li>
            <strong>rapidement</strong>, pour vérifier recherches, formulaires,
            doublons et rappels ;
          </li>
          <li>
            <strong>au rythme du cycle</strong>, pour comparer qualification et
            propositions ;
          </li>
          <li>
            <strong>après maturité de la cohorte</strong>, pour examiner
            contrats, marge et ventes encore ouvertes.
          </li>
        </ul>

        <h2 id="reporter">
          Trois raisons honnêtes de ne pas lancer maintenant
        </h2>
        <GuideTable
          caption="Quand reporter le test Google Ads"
          headers={[
            "Blocage",
            "Pourquoi Google Ads ne le corrige pas",
            "Prochaine action",
          ]}
          rows={[
            [
              "Le marché ne cherche pas encore le problème",
              "L’annonce ne crée pas à elle seule un vocabulaire et une priorité.",
              "Interroger des prospects, tester une approche directe ou travailler une catégorie compréhensible.",
            ],
            [
              "L’offre change après chaque rendez-vous",
              "La campagne ne peut pas attirer et trier correctement les prospects si votre offre change après chaque rendez-vous.",
              "Clarifier le segment, le résultat, les limites et la démonstration.",
            ],
            [
              "Personne ne rappelle ni ne renseigne les statuts",
              "Plus de demandes augmente surtout le désordre commercial.",
              "Nommer un responsable et tenir le registre pendant un cycle.",
            ],
            [
              "Une vente certaine est nécessaire à très court terme",
              "Aucun canal d’acquisition ne garantit un contrat dans un délai donné.",
              "Protéger la trésorerie et privilégier les relations déjà actives.",
            ],
          ]}
        />

        <h2 id="verdict">Votre verdict tient en quatre décisions</h2>
        <ul>
          <li>
            <strong>Financer un test limité</strong> si la demande existe,
            l’offre se comprend et le suivi va jusqu’au contrat.
          </li>
          <li>
            <strong>Réparer avant d’augmenter</strong> si les recherches et les
            demandes semblent utiles, mais que qualification et ventes ne sont
            pas reliées.
          </li>
          <li>
            <strong>Différer</strong> si l’offre, le marché ou le processus
            commercial doivent encore être clarifiés.
          </li>
          <li>
            <strong>Arrêter</strong> si une cohorte arrivée à maturité montre un
            coût incompatible avec la marge, sans cause corrigeable identifiée.
          </li>
        </ul>

        <InfoBox variant="amber" title="La décision à prendre avant le budget">
          Écrivez ce que le test doit apprendre, la cohorte qui sera suivie, la
          date de revue et la perte maximale acceptable. Sans ces quatre lignes,
          un budget est seulement un montant disponible, pas un cadre de
          décision.
        </InfoBox>

        <GuideInlineCTA
          title="Préparer un test Google Ads relié aux contrats signés"
          description="Décrivez votre SaaS, vos clients cibles, votre cycle de vente et les données déjà disponibles. Nous définirons la demande à tester, les étapes à mesurer et le plafond du pilote. Si Google Ads n’est pas le bon premier canal, la conclusion peut être de ne pas le lancer."
          tags={[
            "Décision avant budget",
            "Mesure jusqu’au contrat",
            "Report possible",
          ]}
          ctaLabel="Préparer mon test SaaS"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="sources">Sources officielles et limites</h2>
        <p>
          Sources consultées le 23 juillet 2026. Les fonctions, noms d’écrans,
          conditions d’éligibilité et méthodes d’import peuvent changer. Ce
          guide explique un cadre de décision ; il ne remplace ni la
          documentation du compte utilisé, ni une revue juridique de la collecte
          et du partage des données.
        </p>
        <ul>
          <li>
            Google Ads —{" "}
            <a
              href="https://support.google.com/google-ads/answer/9510373?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              fonctionnement des campagnes sur le Réseau de Recherche
            </a>
            .
          </li>
          <li>
            Google Ads —{" "}
            <a
              href="https://support.google.com/google-ads/answer/2998031?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              importations de conversions hors connexion
            </a>
            .
          </li>
          <li>
            Google Ads —{" "}
            <a
              href="https://support.google.com/google-ads/answer/10029210?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              questions fréquentes sur les conversions hors connexion
            </a>
            .
          </li>
          <li>
            Google Ads —{" "}
            <a
              href="https://support.google.com/google-ads/answer/3123169?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              fenêtres de conversion
            </a>
            .
          </li>
          <li>
            Google Ads —{" "}
            <a
              href="https://support.google.com/google-ads/answer/6167148?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              choix d’une stratégie d’enchères selon l’objectif
            </a>
            . Le choix d’une automatisation ne remplace pas une conversion
            fiable.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
