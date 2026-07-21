import type { Metadata } from "next";
import Link from "next/link";
import {
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import {
  formatGuideDate,
  getGuide,
  guidePath,
  guideRobots,
  guideUrl,
} from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("valider-idee-saas-avant-developper");

export const metadata: Metadata = {
  title: guide.title,
  description: guide.metaDescription,
  authors: [{ name: "Quentin Hagnéré" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  robots: guideRobots(guide),
  alternates: { canonical: guidePath(guide) },
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: guide.cardTitle,
    description: guide.metaDescription,
    url: guidePath(guide),
    images: [
      {
        url: `${guideUrl(guide)}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Valider une idée SaaS en vérifiant cinq risques avant de développer",
      },
    ],
    publishedTime: `${guide.datePublished}T09:00:00+02:00`,
    modifiedTime: `${guide.dateModified}T09:00:00+02:00`,
    authors: [`${SITE_URL}/equipe`],
  },
  twitter: {
    card: "summary_large_image",
    title: guide.cardTitle,
    description: guide.metaDescription,
    images: [`${guideUrl(guide)}/opengraph-image`],
  },
};

const articleJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: guide.heroTitle,
  description: guide.metaDescription,
  url: guideUrl(guide),
  mainEntityOfPage: { "@type": "WebPage", "@id": guideUrl(guide) },
  image: [`${guideUrl(guide)}/opengraph-image`],
  datePublished: guide.datePublished,
  dateModified: guide.dateModified,
  inLanguage: "fr-FR",
  articleSection: guide.section,
  isPartOf: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/guides`,
    name: "Guides web Hagnéré Code",
  },
  author: {
    "@type": "Person",
    name: "Quentin Hagnéré",
    jobTitle: "Fondateur de Hagnéré Code",
    url: `${SITE_URL}/equipe`,
    sameAs: ["https://www.linkedin.com/in/quentin-hagnere"],
    worksFor: { "@id": `${SITE_URL}/#organization` },
  },
  publisher: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Hagnéré Code",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logos/logo-dark.png`,
    },
  },
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: `${SITE_URL}/guides`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Valider une idée SaaS avant de développer",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Combien de personnes faut-il interroger ?",
    answer:
      "Il n’existe pas de nombre magique. Commencez par des personnes confrontées au même problème et poursuivez jusqu’à comprendre leurs pratiques, leurs objections et la personne qui décide du budget. La qualité des échanges compte davantage qu’un grand total.",
  },
  {
    question: "Faut-il construire un MVP pour valider l’idée ?",
    answer:
      "Pas toujours. Un prototype cliquable, un service réalisé manuellement ou un pilote limité permettent souvent d’apprendre avant de financer un produit. Le MVP — la première version utilisable — devient utile lorsque vous devez observer un usage réel répété.",
  },
  {
    question: "Une liste d’attente prouve-t-elle qu’il existe un marché ?",
    answer:
      "Non. Elle montre seulement que des visiteurs ont laissé leurs coordonnées pour une promesse donnée. Un rendez-vous avec le décideur, des données fournies, un pilote signé ou un paiement constituent des signaux plus engageants.",
  },
  {
    question: "Comment tester le prix sans produit terminé ?",
    answer:
      "Présentez une offre pilote précise avec un résultat, un périmètre, un calendrier et un prix. Demandez une décision réelle, même limitée, plutôt qu’une réponse à la question « paieriez-vous un jour ? ».",
  },
  {
    question: "Comment protéger l’idée pendant les entretiens ?",
    answer:
      "Parlez d’abord du problème et des pratiques actuelles. L’INPI rappelle qu’une idée seule ne se protège pas ; un accord de confidentialité peut être utile lorsqu’un véritable secret technique ou commercial doit être dévoilé.",
  },
  {
    question: "Que faire si les retours sont mauvais ?",
    answer:
      "Identifiez ce qui bloque : problème trop faible, mauvais interlocuteur, prix, accès au marché ou faisabilité. Vous pouvez changer de cible, modifier l’offre, mener un test supplémentaire ou arrêter avant d’avoir engagé un budget important.",
  },
];

export default function Page() {
  return (
    <GuidesShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleJsonLd.replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd.replace(/</g, "\\u003c"),
        }}
      />
      <GuideLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: "Valider une idée SaaS avant de développer" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Avant de financer votre SaaS, vérifiez que le problème existe vraiment, qu’une personne peut décider de payer et que vous savez trouver vos premiers clients. Voici un plan de terrain à mener avant le devis complet."
        heroAction={{
          href: "#plan-14-jours",
          label: "Voir le plan sur 14 jours",
        }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "Un plan terrain sur 14 jours",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Des tests sans produit complet",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Continuer, modifier ou arrêter",
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
            href: "/guides/mvp-saas-quoi-inclure",
            label: "Définir le périmètre du premier MVP",
          },
          {
            href: "/guides/combien-coute-un-saas",
            label: "Combien coûte un SaaS ?",
          },
          {
            href: "/guides/no-code-ou-sur-mesure",
            label: "No-code ou développement sur mesure",
          },
          {
            href: "/guides/cahier-des-charges-application-metier",
            label: "Cahier des charges d'une application métier",
          },
          {
            href: "/guides/prix-logiciel-sur-mesure",
            label: "Prix d'un logiciel sur mesure",
          },
          {
            href: "/services/saas-applications-metier",
            label: "Développement de SaaS",
          },
          { href: "/methode", label: "Notre méthode de projet" },
        ]}
        faqTitle="Valider un SaaS : les questions qui restent"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          Vous avez une idée de logiciel en ligne — un SaaS —, quelques
          personnes vous disent qu’elle est excellente et un devis de
          développement commence à prendre forme.{" "}
          <strong>
            Avant d’engager plusieurs mois et plusieurs milliers d’euros,
            vérifiez que des entreprises rencontrent réellement le problème,
            qu’une personne peut décider de payer et que vous savez joindre
            d’autres clients que votre entourage.
          </strong>{" "}
          Vous pouvez obtenir une grande partie de ces réponses sans construire
          le produit complet.
        </p>

        <InfoBox variant="blue" title="La réponse simple">
          Une idée est assez solide pour avancer lorsque vous avez observé un
          problème fréquent, parlé au décideur du budget, obtenu un engagement
          réel et vérifié que la solution peut être livrée à un coût cohérent.
          Aucun de ces éléments ne garantit le succès. Ils évitent surtout de
          financer une application sur la base de compliments.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "avant-code",
              label: "1. Ce qu’il faut savoir avant de coder",
            },
            {
              id: "plan-14-jours",
              label: "2. Un plan de terrain sur 14 jours",
            },
            { id: "entretiens", label: "3. Mener des entretiens utiles" },
            {
              id: "sans-coder",
              label: "4. Tester l’offre sans produit complet",
            },
            {
              id: "acheteur-prix",
              label: "5. Trouver l’acheteur et tester le prix",
            },
            {
              id: "acces-marche",
              label: "6. Vérifier que vous pouvez trouver des clients",
            },
            {
              id: "faisabilite",
              label: "7. Vérifier la faisabilité et l’économie",
            },
            {
              id: "confidentialite",
              label: "8. Protéger l’idée et les données",
            },
            { id: "decision", label: "9. Développer, modifier ou arrêter" },
            { id: "sources", label: "Sources originales consultées" },
          ]}
        />

        <h2 id="avant-code">
          1. Les quatre réponses à obtenir avant de développer
        </h2>

        <p>
          Une phrase comme « les PME ont besoin d’automatiser leurs relances »
          paraît convaincante, mais elle ne dit pas qui souffre du problème,
          comment il est traité aujourd’hui ni qui possède le budget.
          Transformez l’idée en quatre questions concrètes.
        </p>

        <GuideTable
          headers={[
            "Question",
            "Ce que vous cherchez",
            "Exemple de résultat utile",
          ]}
          rows={[
            [
              "Le problème arrive-t-il vraiment ?",
              "Des faits récents, pas une opinion générale",
              "Une équipe a perdu deux heures chaque semaine au cours du dernier mois",
            ],
            [
              "Qui peut décider d’acheter ?",
              "L’utilisateur, le responsable et le payeur sont identifiés",
              "Le responsable des opérations valide le besoin et la direction finance",
            ],
            [
              "Pouvez-vous atteindre d’autres entreprises ?",
              "Un moyen reproductible d’obtenir des conversations",
              "Des partenaires ou une prospection ciblée ouvrent des rendez-vous comparables",
            ],
            [
              "La solution peut-elle être livrée correctement ?",
              "Données, intégrations, sécurité et coût sont compatibles",
              "Un test technique confirme l’accès aux informations indispensables",
            ],
          ]}
        />

        <p>
          Vous n’avez pas besoin d’une certitude parfaite. Vous devez savoir
          quelle décision les informations autorisent : poursuivre les
          entretiens, proposer un pilote, construire une première version
          limitée ou arrêter.
        </p>

        <h2 id="plan-14-jours">2. Un plan de terrain sur quatorze jours</h2>

        <p>
          Ce calendrier est une base à adapter. Il convient à une idée B2B pour
          laquelle vous pouvez joindre des professionnels ; il ne remplace pas
          une étude réglementaire ou technique spécialisée.
        </p>

        <ol>
          <li>
            <strong>Jours 1 et 2 : décrire une cible précise.</strong> Par
            exemple : responsables administratifs de PME qui rapprochent encore
            plusieurs fichiers chaque fin de mois. Évitez « toutes les
            entreprises ».
          </li>
          <li>
            <strong>Jours 3 à 7 : mener cinq à dix conversations.</strong>{" "}
            Demandez de raconter la dernière fois où le problème est arrivé et
            observez les outils utilisés.
          </li>
          <li>
            <strong>Jours 8 et 9 : résumer les faits.</strong> Listez la
            fréquence, le coût, les contournements, les personnes impliquées et
            les contradictions.
          </li>
          <li>
            <strong>Jours 10 à 12 : présenter une réponse limitée.</strong> Un
            prototype, un exemple de rapport ou un service réalisé manuellement
            suffit souvent.
          </li>
          <li>
            <strong>Jours 13 et 14 : demander une décision réelle.</strong>{" "}
            Rendez-vous avec le décideur, mise à disposition de données de test,
            lettre d’intention ou pilote payé selon le contexte.
          </li>
        </ol>

        <InfoBox variant="emerald" title="Le document utile tient sur une page">
          Notez la cible, le problème observé, la façon dont il est traité
          aujourd’hui, les personnes qui décident, l’offre testée, les
          engagements obtenus et les questions encore ouvertes. Ce résumé vaut
          davantage qu’un dossier de trente pages rempli d’estimations non
          vérifiées.
        </InfoBox>

        <h2 id="entretiens">
          3. Comment mener des entretiens qui apprennent quelque chose ?
        </h2>

        <p>
          Les mauvaises questions fabriquent facilement un « oui ». «
          Trouvez-vous cette idée intéressante ? » ou « paieriez-vous pour
          gagner du temps ? » invitent l’interlocuteur à être poli. Demandez
          plutôt de raconter ce qui s’est réellement passé.
        </p>

        <h3>Un script court, dans l’ordre du travail réel</h3>

        <ol>
          <li>
            « La dernière fois que ce problème est arrivé, que s’est-il passé ?
            »
          </li>
          <li>
            « Qui a dû intervenir et combien de temps cela a-t-il pris ? »
          </li>
          <li>« Qu’utilisez-vous aujourd’hui pour vous en sortir ? »</li>
          <li>« Qu’avez-vous déjà essayé de changer ? »</li>
          <li>
            « Quelle conséquence a été la plus gênante pour l’entreprise ? »
          </li>
          <li>
            « Qui déciderait d’essayer ou d’acheter une autre solution ? »
          </li>
        </ol>

        <p>
          Demandez à voir un exemple anonymisé lorsque c’est possible : tableur,
          email, capture d’écran, procédure ou rapport. Ne collectez pas de
          données personnelles ou confidentielles dont vous n’avez pas besoin.
        </p>

        <p>
          Après chaque entretien, séparez les faits des interprétations. « Trois
          personnes recopient le même chiffre » est un fait rapporté. « Le
          marché veut une plateforme collaborative » est déjà une conclusion,
          peut-être trop rapide.
        </p>

        <h2 id="sans-coder">
          4. Tester l’offre sans construire le produit complet
        </h2>

        <p>
          Choisissez le test le plus léger qui permet de répondre à la prochaine
          question. Le but n’est pas de simuler une entreprise plus avancée
          qu’elle ne l’est, mais de voir si le résultat proposé aide vraiment.
        </p>

        <GuideTable
          headers={[
            "Ce que vous voulez apprendre",
            "Test possible",
            "Ce que le test ne prouve pas",
          ]}
          rows={[
            [
              "Le parcours est-il compréhensible ?",
              "Prototype cliquable montré pendant un entretien",
              "Que l’outil fonctionne avec de vraies données",
            ],
            [
              "Le résultat apporte-t-il de la valeur ?",
              "Service réalisé manuellement pour une entreprise",
              "Que ce travail peut déjà être automatisé à grande échelle",
            ],
            [
              "La promesse attire-t-elle une cible précise ?",
              "Page claire envoyée à un trafic identifié",
              "Que les visiteurs paieront ou resteront abonnés",
            ],
            [
              "Une équipe l’utilisera-t-elle au quotidien ?",
              "Pilote limité avec de vraies tâches",
              "Que tous les futurs clients auront le même comportement",
            ],
          ]}
        />

        <InfoBox
          variant="amber"
          title="Ne faites jamais croire qu’un logiciel existe déjà"
        >
          Une page, une vidéo ou un prototype doit annoncer clairement ce qui
          est disponible, ce qui est simulé et ce qui arriverait pendant un
          pilote. Présenter une fausse interface comme un produit opérationnel
          abîme la confiance et peut créer des risques juridiques.
        </InfoBox>

        <p>
          Si un outil existant permet de rendre le service, utilisez-le pour
          apprendre. Du no-code, un tableur ou une intervention humaine peuvent
          suffire au test. Notre comparatif{" "}
          <Link href="/guides/no-code-ou-sur-mesure">
            no-code ou développement sur mesure
          </Link>{" "}
          aide à choisir une première réalisation sans en faire une règle
          définitive.
        </p>

        <h2 id="acheteur-prix">5. Trouver l’acheteur et tester le prix</h2>

        <p>
          Dans une entreprise, la personne qui subit le problème n’est pas
          toujours celle qui signe. Un salarié peut utiliser l’outil, un
          responsable porter le projet, la direction financière payer et le
          service informatique bloquer l’intégration. Identifiez ces rôles tôt.
        </p>

        <p>
          Pour tester le prix, présentez une offre pilote suffisamment précise :
        </p>

        <ul>
          <li>le résultat attendu et la situation de départ ;</li>
          <li>ce qui sera fait manuellement ou avec un prototype ;</li>
          <li>la durée et le temps demandé au client ;</li>
          <li>le prix, les conditions de sortie et les responsabilités ;</li>
          <li>les informations nécessaires et la façon de les protéger.</li>
        </ul>

        <p>
          Une réponse « trop cher » peut cacher plusieurs réalités : le problème
          est faible, le mauvais interlocuteur a été sollicité, le résultat est
          mal expliqué ou le budget arrive à une autre période. Demandez ce qui
          devrait être vrai pour que la discussion continue, sans transformer
          l’entretien en négociation insistante.
        </p>

        <h2 id="acces-marche">
          6. Vérifier que vous pouvez trouver d’autres clients
        </h2>

        <p>
          Trois contacts enthousiastes dans votre réseau peuvent suffire pour
          apprendre, pas pour construire une acquisition durable. Testez un
          moyen de joindre des entreprises qui ne vous connaissent pas encore :
          partenaires, associations professionnelles, contenu spécialisé,
          événements ou prospection directe conforme aux règles applicables.
        </p>

        <p>Suivez quelques nombres simples :</p>

        <ul>
          <li>entreprises réellement ciblées ;</li>
          <li>personnes qui acceptent une conversation ;</li>
          <li>interlocuteurs correspondant au rôle recherché ;</li>
          <li>rendez-vous avec la personne capable de décider ;</li>
          <li>pilotes ou prochaines étapes concrètement acceptés.</li>
        </ul>

        <p>
          Ces nombres dépendent fortement de la cible, du message et du canal.
          Ils ne doivent pas devenir un seuil universel. Ils servent à repérer
          où la conversation s’arrête et ce qu’il faut comprendre ensuite.
        </p>

        <h2 id="faisabilite">
          7. Vérifier la faisabilité avant d’annoncer la promesse
        </h2>

        <p>
          Une idée peut répondre à un vrai besoin et rester irréalisable au prix
          prévu. Vérifiez tôt les points susceptibles de changer le projet :
          accès aux données, limites des outils tiers, qualité des fichiers
          reçus, sécurité, droits utilisateurs, hébergement et travail humain
          qui restera nécessaire.
        </p>

        <p>
          Ne construisez pas toute l’architecture pour répondre à une question
          technique. Un essai limité peut suffire : importer un échantillon de
          données, appeler l’interface d’un logiciel partenaire, produire le
          rapport attendu ou mesurer le temps de traitement.
        </p>

        <GuideTable
          headers={[
            "Coût à estimer",
            "Question à poser",
            "Risque souvent oublié",
          ]}
          rows={[
            [
              "Création de la première version",
              "Quel périmètre permet d’observer un usage réel ?",
              "Fonctions secondaires ajoutées avant le premier client",
            ],
            [
              "Fonctionnement mensuel",
              "Quels services et quelles interventions humaines seront nécessaires ?",
              "Support, stockage, emails, paiement et surveillance",
            ],
            [
              "Vente et accompagnement",
              "Combien de temps faut-il pour convaincre puis démarrer un client ?",
              "Démonstrations, paramétrage et reprise de données",
            ],
            [
              "Obligations et risques",
              "Quelles données ou activités exigent une expertise spécifique ?",
              "Sécurité, contrats et conformité traités trop tard",
            ],
          ]}
        />

        <p>
          Pour établir un premier budget, consultez le guide{" "}
          <Link href="/guides/combien-coute-un-saas">
            combien coûte un SaaS
          </Link>
          . Lorsque le test justifie une première version, le guide{" "}
          <Link href="/guides/mvp-saas-quoi-inclure">
            que faut-il inclure dans un MVP SaaS
          </Link>{" "}
          aide à limiter le périmètre.
        </p>

        <h2 id="confidentialite">8. Confidentialité, données et prospection</h2>

        <h3>Parlez du problème avant de révéler le secret</h3>

        <p>
          Vous pouvez apprendre beaucoup sans dévoiler la solution complète.
          Demandez comment le travail est réalisé, quelles erreurs surviennent
          et comment les décisions sont prises. Si un secret technique ou
          commercial doit être partagé avec un partenaire, un accord de
          confidentialité peut être adapté.
        </p>

        <p>
          L’INPI rappelle qu’une idée ou un concept ne se protège pas en tant
          que tel. Une e-Soleau peut dater une création ou un document ; elle ne
          transforme pas l’idée en monopole. Pour une stratégie de propriété
          intellectuelle, demandez un conseil adapté à la création et aux
          territoires concernés.
        </p>

        <h3>Collectez le minimum de données nécessaire</h3>

        <p>
          Pendant les entretiens et pilotes, privilégiez les exemples anonymisés
          ou fictifs. Expliquez l’usage des coordonnées et des informations
          fournies, limitez les accès et fixez une durée de conservation. Les
          règles de prospection électronique diffèrent selon la cible et le
          contexte : les références CNIL en fin de guide doivent être appliquées
          à votre situation réelle.
        </p>

        <h2 id="decision">9. Développer, modifier l’offre ou arrêter ?</h2>

        <p>
          À la fin des premiers tests, ne cherchez pas une note globale. Prenez
          une décision à partir de ce que vous savez et de ce qui reste risqué.
        </p>

        <GuideTable
          headers={[
            "Ce que vous observez",
            "Décision possible",
            "Prochaine action",
          ]}
          rows={[
            [
              "Problème fréquent, décideur engagé, solution faisable",
              "Cadrer une première version limitée",
              "Définir le premier usage réel et son mode de mesure",
            ],
            [
              "Problème réel mais mauvais interlocuteur ou budget absent",
              "Modifier la cible ou l’offre",
              "Reprendre les entretiens auprès du décideur concerné",
            ],
            [
              "Intérêt présent mais usage encore incertain",
              "Faire un pilote manuel ou un prototype",
              "Observer le travail avant d’automatiser",
            ],
            [
              "Donnée ou intégration indispensable encore inconnue",
              "Mener un essai technique limité",
              "Tester ce point avant le devis complet",
            ],
            [
              "Aucun problème récent ni engagement concret",
              "Mettre en attente ou arrêter",
              "Conserver les apprentissages et protéger le budget",
            ],
          ]}
        />

        <h3>Ce que vous pouvez faire dans les prochaines 48 heures</h3>

        <ol>
          <li>Écrire une cible plus précise qu’un secteur entier.</li>
          <li>
            Contacter cinq personnes qui rencontrent réellement le travail
            étudié.
          </li>
          <li>
            Préparer six questions sur leur dernière expérience, sans présenter
            votre solution.
          </li>
          <li>
            Choisir une réponse simple à montrer ou réaliser manuellement.
          </li>
          <li>Noter la décision que vous prendrez après ce test.</li>
        </ol>

        <GuideInlineCTA
          title="Vous voulez savoir si votre idée mérite déjà un développement ?"
          description="Présentez-nous la cible, le problème observé et les démarches déjà menées. Nous vous aiderons à identifier le prochain test utile ou, si les éléments sont suffisants, à cadrer une première version qui puisse être utilisée par un vrai client."
          tags={[
            "Avis avant devis",
            "Périmètre limité au premier usage",
            "Possibilité de recommander d’attendre",
          ]}
          ctaLabel="Faire examiner mon idée"
          ctaHref="/demarrer-un-projet"
        />

        <InfoBox
          variant="emerald"
          title="Quand un accompagnement de développement est pertinent"
        >
          Le projet devient un bon candidat lorsque le problème a été observé,
          que vous pouvez joindre la cible et qu’une entreprise accepte une
          prochaine étape concrète. Si le besoin est déjà bien couvert par un
          logiciel abordable ou si les retours restent uniquement polis, acheter
          l’outil existant ou continuer les tests peut être une meilleure
          décision que développer.
        </InfoBox>

        <h2 id="sources">Sources originales consultées</h2>

        <p>
          Sources consultées le 20 juillet 2026. Les méthodes d&apos;innovation
          donnent des cadres de décision, pas des garanties de réussite ; les
          sources CNIL et INPI portent sur la France et doivent être appliquées
          au traitement et au contrat réels.
        </p>

        <ul>
          <li>
            <a
              href="https://www.strategyzer.com/library/validate-your-ideas-with-the-test-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              Strategyzer — Validate Your Ideas with the Test Card
            </a>{" "}
            : hypothèse, test, mesure et seuil définis avant l&apos;expérience.
          </li>
          <li>
            <a
              href="https://www.strategyzer.com/library/business-testing-is-your-hypothesis-really-validated"
              target="_blank"
              rel="noopener noreferrer"
            >
              Strategyzer — Is your hypothesis really validated?
            </a>{" "}
            : différence entre déclarations, comportements et investissement du
            participant.
          </li>
          <li>
            <a
              href="https://www.strategyzer.com/library/how-to-select-the-next-best-test-from-the-experiment-library"
              target="_blank"
              rel="noopener noreferrer"
            >
              Strategyzer — Select the next best test
            </a>{" "}
            : expériences légères, prototypes et service manuel avant la
            construction finale.
          </li>
          <li>
            <a
              href="https://steveblank.com/2011/04/04/the-leanlaunch-pad-at-stanford-%E2%80%93-class-4-customer-hypotheses/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Steve Blank — Customer Hypotheses
            </a>{" "}
            : séparation des rôles B2B, tests terrain et exemple de pivot.
          </li>
          <li>
            <a
              href="https://leanstartup.co/resources/articles/what-is-an-mvp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Eric Ries — What is an MVP?
            </a>{" "}
            : le MVP comme véhicule d&apos;apprentissage, et non produit minimal
            par principe.
          </li>
          <li>
            <a
              href="https://www.ycombinator.com/blog/ycs-essential-startup-advice/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Y Combinator — Essential Startup Advice
            </a>{" "}
            : contact direct avec les utilisateurs et travail manuel avant la
            mise à l&apos;échelle.
          </li>
          <li>
            <a
              href="https://www.momtestbook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rob Fitzpatrick — The Mom Test, site officiel
            </a>{" "}
            : entretiens de découverte et réduction des réponses biaisées.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/minimiser-les-donnees-collectees"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Minimiser les données collectées
            </a>{" "}
            et{" "}
            <a
              href="https://cnil.fr/fr/conformite-rgpd-information-des-personnes-et-transparence"
              target="_blank"
              rel="noopener noreferrer"
            >
              informer les personnes
            </a>
            .
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/communication-electronique-quelles-regles"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Communications électroniques aux prospects et clients
            </a>{" "}
            : règles B2B/B2C publiées le 10 juin 2026.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/FAQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Questions-réponses sur les cookies et autres traceurs
            </a>{" "}
            : consentement, exemptions et responsabilités à vérifier avant un
            test instrumenté.
          </li>
          <li>
            <a
              href="https://www.inpi.fr/inpi-block/download-document?id=20581"
              target="_blank"
              rel="noopener noreferrer"
            >
              INPI — Protéger ses créations
            </a>{" "}
            et{" "}
            <a
              href="https://www.inpi.fr/realiser-demarches/propriete-intellectuelle/deposer-une-e-soleau-ou-un-entiercement"
              target="_blank"
              rel="noopener noreferrer"
            >
              e-Soleau et entiercement
            </a>
            .
          </li>
        </ul>

        <p className="text-sm">
          Ce guide décrit une méthode de décision et un exemple fictif. Il ne
          constitue ni une étude de marché, ni un conseil juridique, fiscal ou
          financier personnalisé. Une validation réduit le risque ; elle ne
          garantit ni les ventes, ni la rentabilité, ni le classement futur du
          produit.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
