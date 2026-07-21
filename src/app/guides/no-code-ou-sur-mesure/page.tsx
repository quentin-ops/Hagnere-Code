import type { Metadata } from "next";
import Link from "next/link";
import { GuideLayout } from "@/components/guides/guide-layout";
import {
  GuideToc,
  InfoBox,
  GuideTable,
  GuideInlineCTA,
  FormulaBox,
} from "@/components/guides/guide-content-blocks";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { OG_BASE, SITE_URL } from "@/lib/seo";
import { getGuide, guidePath, guideUrl, formatGuideDate } from "@/lib/guides";

const guide = getGuide("no-code-ou-sur-mesure");

export const metadata: Metadata = {
  title: guide.title,
  description: guide.metaDescription,
  authors: [{ name: "Quentin Hagnéré" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  alternates: { canonical: guidePath(guide) },
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: guide.cardTitle,
    description: guide.metaDescription,
    url: guidePath(guide),
    publishedTime: `${guide.datePublished}T09:00:00+02:00`,
    modifiedTime: `${guide.dateModified}T09:00:00+02:00`,
    authors: [`${SITE_URL}/equipe`],
  },
  twitter: {
    card: "summary_large_image",
    title: guide.cardTitle,
    description: guide.metaDescription,
    images: [guideUrl(guide) + "/opengraph-image"],
  },
};

const articleJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: guide.cardTitle,
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
    knowsAbout: [
      "Développement web",
      "No-code",
      "Applications métier",
      "React",
      "Next.js",
      "Coût total de possession",
    ],
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
      name: "No-code ou sur-mesure",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Le no-code coûte-t-il vraiment moins cher que le sur-mesure ?",
    answer:
      "Au démarrage, généralement oui : un abonnement permet de tester un besoin sans financer un développement complet. Sur plusieurs années, comparez les licences, les volumes, le temps interne, les adaptations et la maintenance. Le sur-mesure conserve lui aussi des coûts d’hébergement, de support et d’évolution.",
  },
  {
    question: "Quelles limites faut-il vérifier dans un outil no-code ?",
    answer:
      "Ils dépendent de l’outil et de la formule. Airtable publie notamment une limite de cinq requêtes par seconde et par base pour son interface de programmation ; Bubble limite aussi certains collaborateurs et volumes selon le forfait. Un logiciel sur mesure n’est pas sans limite : son infrastructure doit être dimensionnée et payée selon l’usage.",
  },
  {
    question: "Est-on prisonnier d'un outil no-code ?",
    answer:
      "Souvent en partie. Les données peuvent généralement être exportées, mais les écrans, les automatisations et les règles métier doivent fréquemment être reconstruits. Testez l’export et chiffrez une sortie avant de vous engager.",
  },
  {
    question:
      "Un éditeur no-code peut-il modifier ses fonctions ou ses tarifs ?",
    answer:
      "Oui, selon les conditions du contrat. Webflow a par exemple arrêté certaines fonctions en 2025 et 2026 et modifié des quotas. Prévoyez une solution de remplacement pour les fonctions importantes et vérifiez les règles applicables au renouvellement.",
  },
  {
    question: "Le no-code permet-il de respecter le RGPD ?",
    answer:
      "Oui dans certains cas, mais pas automatiquement. Vérifiez le lieu d’hébergement, les sous-traitants, les contrats, les droits d’accès et les possibilités d’effacement ou d’export. Les besoins changent fortement selon que l’outil traite des données publiques, de salariés, de santé ou de clients.",
  },
  {
    question: "Peut-on migrer d'un outil no-code vers du sur-mesure ?",
    answer:
      "Oui. L’usage réel aide à préciser le besoin, sans supprimer le risque de développer la mauvaise chose. Les données peuvent souvent être exportées selon les possibilités de la plateforme ; les écrans, les automatisations et les droits doivent généralement être reconstruits et testés. Le budget dépend donc des fonctions à reprendre, de la qualité des exports et des données à conserver.",
  },
  {
    question:
      "Comment savoir si j'ai atteint les limites de mon outil no-code ?",
    answer:
      "Faites le calcul lorsque la facture augmente fortement, que les contournements se multiplient, qu’une seule personne comprend l’outil ou que les exports vers Excel deviennent indispensables. Un seul blocage critique peut suffire ; il n’existe pas de nombre magique de signaux.",
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
          { label: "No-code ou sur-mesure" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous hésitez entre un outil no-code, un logiciel existant et du sur-mesure ? Comparez le coût, le délai, les limites, les données et la possibilité de changer de solution avant d’investir."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "Tarifs relevés le 18/07/2026",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Comparez le coût total sur cinq ans",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Un outil existant peut suffire",
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
            href: "/guides/transformer-excel-en-application",
            label: "Transformer Excel en application",
          },
          {
            href: "/guides/prix-logiciel-sur-mesure",
            label: "Prix d'un logiciel sur mesure",
          },
          {
            href: "/guides/erp-ou-logiciel-sur-mesure",
            label: "ERP ou logiciel sur mesure",
          },
          {
            href: "/guides/cahier-des-charges-application-metier",
            label: "Cahier des charges d'une application métier",
          },
          {
            href: "/guides/combien-coute-un-saas",
            label: "Combien coûte un SaaS ?",
          },
          {
            href: "/services/outils-internes-sur-mesure",
            label: "Outils internes sur mesure",
          },
          {
            href: "/services/saas-applications-metier",
            label: "SaaS et applications métier",
          },
          { href: "/agence-react", label: "Agence React" },
          { href: "/tarifs", label: "Nos tarifs" },
        ]}
        faqTitle="No-code ou sur-mesure : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          <strong>
            Vous voulez remplacer un tableur, automatiser une tâche ou lancer un
            nouvel outil, mais vous ne savez pas s’il faut utiliser du no-code
            ou financer un développement sur mesure ?
          </strong>{" "}
          Commencez par l’option la plus simple qui répond au besoin. Un
          logiciel déjà disponible peut suffire. Le no-code — construire avec
          des blocs visuels — peut permettre de tester plus vite, avec un
          investissement initial plus faible. Le sur-mesure devient pertinent
          lorsque le fonctionnement propre à votre entreprise, les données, les
          volumes ou les connexions avec vos autres logiciels justifient
          l’investissement. Il n’existe pas de bascule automatique après deux
          ans ou dix utilisateurs : comparez le coût total, le temps de votre
          équipe et ce que vous devrez reconstruire si vous changez de solution.
        </p>

        <InfoBox
          variant="amber"
          title="Étudiez aussi l’outil que vous possédez déjà"
        >
          Avant de comparer deux nouvelles solutions, chiffrez le statu quo :
          coût des erreurs, temps perdu, risque et limites actuelles. Si une
          meilleure organisation ou une fonction de votre logiciel existant
          résout le problème, ne construisez rien.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "reponse-rapide",
              label: "1. Le choix selon votre situation",
            },
            {
              id: "de-quoi-parle-t-on",
              label: "2. Les solutions que vous pouvez rencontrer",
            },
            {
              id: "tarifs",
              label: "3. Les tarifs publics relevés le 18 juillet 2026",
            },
            {
              id: "plafonds",
              label: "4. Lire les limites publiées par les éditeurs",
            },
            {
              id: "changements",
              label: "5. Quand l'éditeur change les règles en cours de route",
            },
            {
              id: "cout-5-ans",
              label: "6. Comparer le coût sur cinq ans",
            },
            {
              id: "reversibilite",
              label: "7. Savoir ce que vous pourrez récupérer",
            },
            { id: "juridique", label: "8. Propriété, RGPD, accessibilité" },
            { id: "migration", label: "9. Passer du no-code au sur-mesure" },
            {
              id: "verdict-par-profil",
              label: "10. Quelle solution pour votre entreprise ?",
            },
          ]}
        />

        <h2 id="reponse-rapide">1. Le choix selon votre situation</h2>
        <p>
          Le no-code demande souvent moins d&apos;investissement au départ pour
          tester et équiper une petite équipe. Le sur-mesure coûte davantage au
          départ et reste à héberger, maintenir et faire évoluer. Il peut
          devenir préférable si la plateforme facture fortement les utilisateurs
          ou empêche une fonction importante. Un outil existant ou le maintien
          de l’organisation actuelle restent de meilleures réponses lorsqu’ils
          couvrent déjà le besoin.
        </p>
        <GuideTable
          headers={["Votre situation", "Piste à examiner", "Pourquoi"]}
          rows={[
            [
              "Vous voulez valider une idée avant d'investir",
              "Prototype no-code ou outil existant",
              "Apprendre avant d’engager un budget important",
            ],
            [
              "Petit outil interne, faible enjeu",
              "No-code ou logiciel du marché",
              "La mise en route reste rapide et le risque limité",
            ],
            [
              "Automatiser des tâches entre logiciels existants",
              "Connecteur existant ou automatisation no-code",
              "Réutiliser les échanges déjà prévus avant de développer",
            ],
            [
              "Budget insuffisant pour un développement complet",
              "No-code, outil existant ou statu quo amélioré",
              "Adapter l’ambition au budget réel",
            ],
            [
              "Nombreux utilisateurs externes",
              "Comparer no-code et sur-mesure sur cinq ans",
              "Les licences peuvent augmenter, mais le sur-mesure ajoute infrastructure et support",
            ],
            [
              "Le produit est votre activité",
              "Sur-mesure ou plateforme dont les limites sont acceptées",
              "La propriété et la différenciation deviennent stratégiques",
            ],
            [
              "Données sensibles, exigence de localisation",
              "Outil dont le contrat et l’hébergement répondent à vos exigences",
              "Localisation, sous-traitants, droits d’accès, sécurité et export doivent être vérifiés dans tous les cas",
            ],
          ]}
        />

        <h2 id="de-quoi-parle-t-on">
          2. Les solutions que vous pouvez rencontrer
        </h2>
        <p>
          « No-code » signifie que l&apos;on construit avec une interface
          visuelle plutôt qu&apos;en écrivant tout le code. Mais ce mot regroupe
          des outils très différents. Avant de comparer les prix, identifiez
          celui qui correspond réellement à votre besoin.
        </p>
        <GuideTable
          headers={["Solution", "Usage adapté", "Limite à vérifier"]}
          rows={[
            [
              "Application no-code — Bubble",
              "Créer un prototype ou un outil métier sans équipe technique",
              "Coût lié à l'usage et impossibilité d'exporter le code",
            ],
            [
              "Création de sites — Webflow",
              "Publier un site vitrine ou éditorial avec une grande liberté visuelle",
              "Fonctions, trafic inclus et conditions d'export",
            ],
            [
              "Base visuelle — Airtable",
              "Remplacer un tableur par une base structurée et partagée",
              "Prix par utilisateur et limites de l'interface de programmation",
            ],
            [
              "Automatisation — Make, n8n, Zapier",
              "Faire circuler des informations entre des logiciels existants",
              "Facturation à l'action ou à l'exécution lorsque le volume augmente",
            ],
            [
              "Logiciel du marché",
              "Utiliser un CRM, un ERP ou un outil métier déjà prêt",
              "Écart entre vos besoins et les fonctions disponibles",
            ],
          ]}
        />
        <p>
          Le terme <strong>low-code</strong>, que vous croiserez dans certains
          devis, désigne une plateforme visuelle à laquelle on peut ajouter du
          code. Cette souplesse est utile, mais elle ne garantit pas que
          l&apos;application pourra être transférée chez un autre fournisseur.
          Demandez toujours ce qui est exportable : les données, les écrans et
          les règles qui font fonctionner votre métier.
        </p>
        <p>
          Le no-code ressemble donc à un local déjà aménagé : vous démarrez
          rapidement, en acceptant les règles du propriétaire. Le sur-mesure
          ressemble davantage à des travaux conçus pour votre activité : ils
          demandent plus de temps et d&apos;argent, puis restent eux aussi à
          entretenir. Aucun des deux modèles n&apos;est supérieur dans tous les
          cas.
        </p>

        <h2 id="tarifs">3. Ce que les abonnements facturent vraiment</h2>
        <p>
          Voici les prix affichés par les éditeurs le 18 juillet 2026. Ils sont
          donnés hors taxes, généralement avec un engagement annuel, et peuvent
          changer. Le chiffre utile n&apos;est pas seulement l&apos;abonnement
          de départ : regardez aussi ce qui augmente avec les utilisateurs, le
          trafic ou le nombre d&apos;actions.
        </p>
        <p>
          Avant de calculer, ouvrez les pages officielles de{" "}
          <a
            href="https://bubble.io/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bubble
          </a>
          ,{" "}
          <a
            href="https://webflow.com/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Webflow
          </a>
          ,{" "}
          <a
            href="https://www.airtable.com/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Airtable
          </a>
          ,{" "}
          <a
            href="https://www.make.com/en/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Make
          </a>{" "}
          et{" "}
          <a
            href="https://n8n.io/pricing/"
            target="_blank"
            rel="noopener noreferrer"
          >
            n8n
          </a>
          . Le tableau est un relevé daté, pas un tarif garanti.
        </p>
        <GuideTable
          headers={["Outil", "Prix public observé", "Variable à surveiller"]}
          rows={[
            [
              "Bubble (web + mobile)",
              "59 $/mois pour 175 000 unités ; 209 $ pour 250 000 unités et 2 éditeurs",
              "Unités de traitement et nombre de personnes qui construisent l'application",
            ],
            [
              "Webflow (site)",
              "15 $/mois sans gestion de contenu ; 25 $ avec",
              "Formule par site, trafic inclus et éventuels dépassements",
            ],
            [
              "Airtable",
              "20 $/personne/mois pour 50 000 enregistrements ; 45 $ pour 125 000",
              "Nombre de personnes, d'invités et de lignes",
            ],
            [
              "Make",
              "9 $/mois pour 10 000 crédits ; 29 $ en formule équipe",
              "Chaque action d'un scénario consomme en principe un crédit",
            ],
            [
              "n8n",
              "20 €/mois pour 2 500 exécutions ; 50 € pour 10 000",
              "Nombre d'exécutions complètes et palier nécessaire",
            ],
          ]}
        />
        <InfoBox
          variant="blue"
          title="Trois pièges de facturation que le tableau ne montre pas"
        >
          <strong>
            Le prix des dépassements Bubble n&apos;apparaît pas dans le tableau
            principal.
          </strong>{" "}
          La page principale renvoie vers des paliers supplémentaires et permet
          aussi de désactiver les dépassements. Consultez le détail au jour de
          la décision et fixez une alerte ou un plafond de dépense.
          <br />
          <br />
          <strong>Le trafic peut changer le coût de Webflow.</strong> La
          quantité incluse dépend de la formule et des paliers sélectionnés.
          Relevez donc le trafic réel du site avant de comparer. Cette dépense
          ne se résume pas au prix brut d&apos;un hébergeur : la formule finance
          aussi la plateforme et ses fonctions.
          <br />
          <br />
          <strong>
            Les formules n8n ne se comparent pas seulement au volume.
          </strong>{" "}
          Au moment du relevé, la formule Pro hébergée affichait 50 € par mois
          pour 10 000 exécutions, tandis que l&apos;offre Business auto-hébergée
          affichait 667 € pour 40 000 exécutions et des fonctions de
          collaboration, d&apos;environnements et de contrôle supplémentaires.
          Ne présentez donc pas ce passage comme un simple dépassement :
          comparez le mode d&apos;hébergement et les fonctions réellement
          utiles.
        </InfoBox>

        <InfoBox variant="amber" title="Écartez les pourcentages sans méthode">
          Les promesses « dix fois plus rapide » ou « 80 % moins cher » ne
          décrivent pas votre entreprise. Demandez la source, la date, le type
          de projet et les coûts oubliés. Nous vendons du développement sur
          mesure : notre intérêt commercial existe lui aussi. C’est pourquoi la
          décision doit reposer sur les limites officielles, un essai avec vos
          volumes et plusieurs offres comparables.
        </InfoBox>

        <h2 id="plafonds">4. Les limites que les éditeurs publient</h2>
        <p>
          Ces limites figurent dans la documentation officielle. Elles ne
          condamnent pas un outil à elles seules : elles indiquent ce qu&apos;il
          faut tester avec votre volume réel avant de signer.
        </p>
        <ul>
          <li>
            <strong>Airtable : 5 requêtes par seconde et par base.</strong> Une
            requête est un échange automatique avec la base. Au-delà, le service
            peut refuser temporairement les demandes. L&apos;impact dépend de la
            façon dont l&apos;application regroupe et met en cache ces échanges
            : faites un test de charge au lieu de déduire un nombre
            d&apos;utilisateurs de ce seul plafond.
          </li>
          <li>
            <strong>
              Bubble : le nombre de personnes qui peuvent modifier
              l&apos;application est plafonné.
            </strong>{" "}
            Deux éditeurs à 209 dollars par mois, cinq à 549 dollars au moment
            du relevé. Un projet sur mesure n&apos;ajoute pas nécessairement une
            licence par développeur, mais chaque personne mobilisée reste bien
            entendu facturée pour son travail.
          </li>
          <li>
            <strong>Make : un crédit par action.</strong> Un scénario comportant
            douze étapes, déclenché mille fois par mois, consomme douze mille
            crédits — soit davantage que ce qu&apos;incluent les formules
            courantes. La facturation à l&apos;action se calcule avant de
            s&apos;engager, pas après.
          </li>
          <li>
            <strong>
              Airtable : les utilisateurs externes se paient à part.
            </strong>{" "}
            Le module qui permet d&apos;ouvrir un accès à des personnes
            extérieures démarre autour de 120 dollars pour quinze invités
            mensuels, soit 8 à 10 dollars par personne et par mois.
          </li>
        </ul>

        <h2 id="changements">
          5. Quand l&apos;éditeur change les règles en cours de route
        </h2>
        <p>
          Une plateforme peut modifier ses fonctions et ses quotas selon son
          contrat. Webflow a documenté la{" "}
          <a
            href="https://webflow.com/updates/deprecating-logic-and-user-accounts"
            target="_blank"
            rel="noopener noreferrer"
          >
            fin de Logic et des comptes utilisateurs
          </a>{" "}
          ainsi que les{" "}
          <a
            href="https://help.webflow.com/hc/en-us/articles/51059955082387-Updated-pricing-and-simplified-plans-for-May-2026"
            target="_blank"
            rel="noopener noreferrer"
          >
            changements de formules de mai 2026
          </a>
          . Ces exemples montrent le type de dépendance à prévoir ; ils ne
          signifient pas que tous les éditeurs agiront de la même façon.
        </p>
        <GuideTable
          headers={["Quand", "Ce qui a changé", "Conséquence pour les clients"]}
          rows={[
            [
              "Juin 2025",
              "Webflow supprime sa fonctionnalité Logic (automatisations internes)",
              "Les clients qui avaient bâti dessus ont dû reconstruire ailleurs",
            ],
            [
              "29 janvier 2026",
              "Webflow supprime les comptes utilisateurs (espaces membres)",
              "Fonction structurante retirée : impossible de garder un espace membre sur la plateforme",
            ],
            [
              "Mai 2026",
              "Webflow fusionne deux formules ; la bande passante incluse de l'ancienne offre Business passe de 100 à 50 Go, et les requêtes d'applications Webflow Cloud incluses de 10 à 2 millions",
              "Changement appliqué au renouvellement ou lors d'une modification facturable du site",
            ],
          ]}
        />
        <InfoBox variant="amber" title="Ce que ces trois cas ont en commun">
          Ces changements rappellent qu&apos;un abonnement donne un droit
          d&apos;usage, pas le contrôle de la feuille de route de
          l&apos;éditeur. Vérifiez donc les délais d&apos;annonce, les
          possibilités d&apos;export et le coût d&apos;une solution de secours.
          Un logiciel sur mesure a d&apos;autres risques — dépendance à une
          équipe, dette technique et maintenance — qui doivent être évalués avec
          la même exigence.
        </InfoBox>

        <h2 id="cout-5-ans">6. Comparer le coût sur cinq ans</h2>
        <p>
          Un abonnement bas n&apos;est pas toujours économique sur la durée. Un
          devis sur mesure ne doit pas être traité comme un achat unique sans
          frais futurs. Les scénarios suivants servent uniquement à montrer le
          calcul : ils mélangent dollars et euros et ne constituent ni des devis
          ni une prévision de taux de change. Les montants de 15 000 € et 25 000
          € sont des hypothèses Hagnéré cohérentes avec notre{" "}
          <Link href="/tarifs">grille publique</Link>, à remplacer par des
          offres établies sur les mêmes fonctions.
        </p>
        <FormulaBox>
          {`SCÉNARIO A — Outil interne, 12 utilisateurs
  No-code (base + automatisations)     ~ 45 $/user/mois
  → 12 × 45 × 12 mois                  ≈ 6 500 $/an
  → sur 5 ans                          ≈ 32 400 $
  Sur-mesure (hypothèse)               15 000 € au départ
  Hébergement, maintenance, évolutions  à estimer séparément
  → comparer avec de vrais devis et une marge d'imprévu

SCÉNARIO B — Outil ouvert à 100 partenaires externes
  No-code : 12 sièges internes + 100 invités
  → 6 500 $ + (100 × 9 $ × 12)         ≈ 17 300 $/an
  → sur 5 ans                          ≈ 86 500 $
  Sur-mesure (hypothèse)               25 000 € au départ
  Infrastructure, support, évolutions   à chiffrer selon l'usage
  → l'écart dépend surtout du support et de la croissance réelle

SCÉNARIO C — Prototype pour valider une idée
  No-code : 2 mois × 60 $              ≈ 120 $
  Outil existant ou tableur amélioré    parfois déjà disponible
  Sur-mesure                            investissement nettement supérieur
  → commencer léger permet d'apprendre avant de construire`}
        </FormulaBox>
        <p>
          Le résultat dépend du nombre d&apos;utilisateurs, du volume
          d&apos;automatisations, du support attendu et du rythme des
          changements. Dans certains cas, le no-code restera le moins cher cinq
          ans. Dans d&apos;autres, un logiciel du marché ou un développement
          dédié prendra l&apos;avantage. Le tableau doit être rempli avec vos
          factures et deux devis comparables.
        </p>
        <p>
          Notre{" "}
          <Link href="/guides/prix-logiciel-sur-mesure">
            guide du prix d&apos;un logiciel sur mesure
          </Link>{" "}
          détaille la méthode de chiffrage du second terme de l&apos;équation,
          et notre{" "}
          <Link href="/guides/combien-coute-un-saas">
            guide du coût d&apos;un SaaS
          </Link>{" "}
          traite le cas où l&apos;outil devient un produit.
        </p>

        <h2 id="reversibilite">
          7. Que pourrez-vous récupérer si vous changez de solution ?
        </h2>
        <p>
          Faites ces vérifications <strong>avant</strong> de signer, pas le jour
          où vous voudrez partir. Les six questions suivantes permettent de
          repérer ce qui manque encore au contrat ou au test de sortie.
        </p>
        <p>
          Autrement dit : pouvez-vous changer de fournisseur sans repartir de
          zéro ? Voici ce que les documentations indiquaient lors de notre
          vérification ; confirmez ces possibilités dans votre contrat.
        </p>
        <GuideTable
          headers={["Outil", "Ce que vous récupérez", "Ce qu'il faut prévoir"]}
          rows={[
            [
              "Webflow",
              "Données en CSV et, avec certaines formules, une partie du code visuel",
              "Les fonctions et les contenus dynamiques peuvent devoir être reconstruits",
            ],
            [
              "Bubble",
              "Les données dans un format standard",
              "L'application et ses règles ne sont pas exportées comme un code réutilisable",
            ],
            [
              "Airtable",
              "Les données en CSV ou par interface de programmation",
              "Les vues, formulaires et automatisations sont à recréer",
            ],
            [
              "Make, Softr, Glide",
              "Les données selon les connecteurs et exports disponibles",
              "Vérifier séparément scénarios, écrans et règles",
            ],
            [
              "Développement sur mesure",
              "Données et code si le contrat, les comptes et les accès le prévoient",
              "Documentation, qualité du code et passation conditionnent la reprise",
            ],
          ]}
        />
        <p>
          Exporter une liste de clients ne suffit pas à déplacer un outil. Les
          règles, les écrans, les automatisations et les droits d&apos;accès
          représentent souvent la plus grande partie du travail. Chiffrez leur
          reconstruction avant de considérer qu’un changement restera possible.
        </p>
        <ol>
          <li>
            <strong>
              Puis-je exporter mes données dans un format standard ?
            </strong>{" "}
            C&apos;est souvent possible pour les tableaux principaux, mais
            testez aussi les pièces jointes, les relations et les champs propres
            à votre configuration.
          </li>
          <li>
            <strong>Puis-je exporter ma logique métier ?</strong> Elle
            n&apos;est souvent pas réutilisable directement. Les règles
            construites dans l&apos;éditeur visuel peuvent devoir être
            documentées, puis reconstruites et testées ailleurs.
          </li>
          <li>
            <strong>Qui possède le compte ?</strong> S&apos;il est au nom
            d&apos;un prestataire ou d&apos;un salarié, réglez ce point
            aujourd&apos;hui.
          </li>
          <li>
            <strong>
              Que dit exactement la licence sur l&apos;usage commercial ?
            </strong>{" "}
            La licence de n8n, par exemple, encadre certains usages de revente
            ou d&apos;hébergement. Faites vérifier votre modèle précis si
            l&apos;outil devient une partie du produit vendu à vos clients.
          </li>
          <li>
            <strong>
              Que se passe-t-il si le prix ou les conditions changent ?
            </strong>{" "}
            Regardez l&apos;historique de l&apos;éditeur, les clauses de
            révision et votre solution de repli.
          </li>
          <li>
            <strong>
              Combien de personnes hors de mon entreprise savent maintenir cet
              outil ?
            </strong>{" "}
            Si la réponse est « une », vous avez un problème de continuité,
            exactement comme avec un développeur unique.
          </li>
        </ol>

        <h2 id="juridique">8. Propriété, RGPD, accessibilité</h2>
        <p>
          Ces trois sujets ne se règlent pas par le seul choix entre no-code et
          sur-mesure. Ils doivent apparaître dans le cahier des charges et le
          contrat. Les éléments ci-dessous sont des points de vigilance, pas un
          conseil juridique personnalisé.
        </p>
        <p>
          <strong>La propriété.</strong> Sur un développement sur mesure, la
          question se règle par une clause de cession conforme à l&apos;article
          L131-3 du Code de la propriété intellectuelle — en droit français,
          payer ne rend pas automatiquement propriétaire du code. Sur une
          plateforme, vous conservez normalement vos contenus et données, mais
          vous obtenez surtout un droit d&apos;utiliser le logiciel selon ses
          conditions. Les modèles, extensions et éléments créés par un
          prestataire doivent eux aussi être couverts par le contrat.
        </p>
        <p>
          <strong>Le RGPD et la localisation des données.</strong> C&apos;est le
          point à vérifier en premier si vous traitez des données personnelles.
          Chez Bubble, le choix de la localisation d&apos;hébergement n&apos;est
          disponible que sur l&apos;offre Enterprise, sur devis : sur les
          formules courantes, vous ne choisissez pas où sont vos données. Make,
          à l&apos;inverse, annonçait un hébergement européen sur ses formules.
          La localisation ne suffit pas : vérifiez aussi le contrat de
          sous-traitance, les transferts, les droits d&apos;accès, la durée de
          conservation et la sécurité. Notre page{" "}
          <Link href="/services/securite-rgpd">sécurité et RGPD</Link> détaille
          ce que cela implique.
        </p>
        <p>
          <strong>L&apos;accessibilité.</strong> La réglementation européenne
          sur l&apos;accessibilité s&apos;applique depuis le 28 juin 2025 à
          certaines catégories de services, avec un champ d’application et des
          exemptions à vérifier. Une plateforme peut limiter les corrections
          possibles. Un développement sur mesure donne plus de maîtrise, mais il
          n&apos;est accessible que si cette exigence est réellement conçue,
          testée et maintenue.
        </p>

        <InfoBox variant="blue" title="Quand refaire la comparaison">
          Le no-code fait partie des premières options à examiner pour tester
          une idée, automatiser une tâche ou équiper une petite équipe.
          Recomparez les solutions si la facture augmente fortement, si les
          contournements deviennent quotidiens, si une fonction indispensable
          reste impossible ou si une seule personne sait maintenir l’outil. Un
          irritant isolé ne justifie pas automatiquement un développement
          complet.
        </InfoBox>

        <h2 id="migration">9. Passer du no-code au sur-mesure</h2>
        <p>
          Une phase no-code peut aider à observer les usages avant de construire
          autrement. Elle ne produit pas automatiquement un cahier des charges
          complet : les exceptions, les droits, les intégrations et les besoins
          futurs doivent encore être décrits avec les équipes.
        </p>
        <p>
          Les données peuvent souvent être exportées, mais il faut contrôler
          leur qualité, leurs doublons et les pièces jointes. La logique métier
          et les écrans sont généralement à reconstruire. Le budget doit donc
          couvrir un inventaire, le nettoyage, les tests, la reprise des
          historiques et une période où les deux systèmes coexistent.
        </p>
        <p>
          Lorsque le contexte le permet, évitez de tout basculer en une fois.
          Gardez l&apos;outil no-code en fonctionnement pendant que le nouveau
          se construit, transférez une fonction à la fois, et ne coupez
          l&apos;ancien qu&apos;une fois le nouveau éprouvé. Cette coexistence
          prend du temps, mais réduit le risque d&apos;interrompre le travail.
        </p>

        <h2 id="verdict-par-profil">
          10. Quelle solution choisir pour votre entreprise ?
        </h2>
        <GuideTable
          headers={["Votre profil", "Choix à examiner", "Pourquoi"]}
          rows={[
            [
              "Créateur d'entreprise qui teste une idée",
              "No-code, maquette ou outil existant",
              "Apprendre avec peu de fonctions et un budget limité",
            ],
            [
              "TPE, outil interne pour 5 à 10 personnes",
              "Outil du marché ou no-code",
              "Éviter une construction spécifique si les fonctions sont standard",
            ],
            [
              "PME, outil interne pour 20 personnes et plus",
              "Comparez trois options sur 5 ans",
              "Les licences, la maintenance et le temps interne peuvent changer le résultat",
            ],
            [
              "Outil ouvert à des clients ou partenaires",
              "Testez les coûts et les limites",
              "Certains outils facturent les invités ; d'autres modèles restent viables",
            ],
            [
              "Éditeur de logiciel : le produit EST l'activité",
              "Sur-mesure ou plateforme assumée",
              "La différenciation, la continuité et les droits deviennent stratégiques",
            ],
            [
              "Automatisation entre logiciels existants",
              "Connecteur existant ou no-code",
              "Réutiliser des intégrations disponibles avant de développer",
            ],
            [
              "Données de santé, RH ou sensibles",
              "Solution dont le contrat et la sécurité sont vérifiés",
              "L’hébergement ne suffit pas : contrôlez aussi accès, sous-traitants, export et obligations propres aux données",
            ],
          ]}
        />

        <GuideInlineCTA
          title="Obtenez un choix argumenté avant un devis"
          description="Décrivez vos utilisateurs, votre processus et votre budget. Nous comparerons le statu quo, un logiciel existant, le no-code et le sur-mesure avant de recommander une construction."
        />

        <h2 id="sources">Sources</h2>
        <p className="text-sm">
          Tarifs et limites relevés le 18 juillet 2026 sur les pages officielles
          :{" "}
          <a
            href="https://bubble.io/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bubble
          </a>{" "}
          ;{" "}
          <a
            href="https://webflow.com/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Webflow
          </a>{" "}
          ;{" "}
          <a
            href="https://www.airtable.com/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Airtable
          </a>{" "}
          et{" "}
          <a
            href="https://airtable.com/developers/web/api/rate-limits"
            target="_blank"
            rel="noopener noreferrer"
          >
            ses limites d&apos;interface de programmation
          </a>{" "}
          ;{" "}
          <a
            href="https://www.make.com/en/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Make
          </a>{" "}
          ;{" "}
          <a
            href="https://n8n.io/pricing/"
            target="_blank"
            rel="noopener noreferrer"
          >
            n8n
          </a>{" "}
          et sa{" "}
          <a
            href="https://docs.n8n.io/sustainable-use-license/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sustainable Use License
          </a>
          . Cadre juridique :{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
            target="_blank"
            rel="noopener noreferrer"
          >
            article L131-3 du Code de la propriété intellectuelle
          </a>
          . Les changements de Webflow sont reliés directement dans la section
          qui les analyse.
        </p>
        <p className="text-sm">
          Les tarifs des éditeurs no-code changent fréquemment : le relevé
          ci-dessus est daté, et nous le réactualisons périodiquement. Vérifiez
          les montants sur les pages officielles le jour de votre décision. Les
          scénarios de coût sur cinq ans sont des modèles dont les hypothèses
          sont affichées, pas des devis. Cet article ne constitue pas un conseil
          juridique personnalisé.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
