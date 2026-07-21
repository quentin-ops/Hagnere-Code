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
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("template-ou-site-sur-mesure");

export const metadata: Metadata = {
  title: guide.title,
  description: guide.metaDescription,
  authors: [{ name: "Quentin Hagnéré" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  robots: guideRobots(guide),
  alternates: { canonical: guideUrl(guide) },
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: guide.cardTitle,
    description: guide.metaDescription,
    url: guideUrl(guide),
    images: [
      {
        url: guideUrl(guide) + "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Cinq niveaux de conception entre site existant, template et sur mesure",
      },
    ],
    publishedTime: guide.datePublished + "T09:00:00+02:00",
    modifiedTime: guide.dateModified + "T09:00:00+02:00",
    authors: [SITE_URL + "/equipe"],
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
  headline: guide.heroTitle,
  description: guide.metaDescription,
  url: guideUrl(guide),
  mainEntityOfPage: { "@type": "WebPage", "@id": guideUrl(guide) },
  image: [guideUrl(guide) + "/opengraph-image"],
  datePublished: guide.datePublished,
  dateModified: guide.dateModified,
  inLanguage: "fr-FR",
  articleSection: guide.section,
  isPartOf: {
    "@type": "WebPage",
    "@id": SITE_URL + "/guides",
    name: "Guides web Hagnéré Code",
  },
  author: {
    "@type": "Person",
    name: "Quentin Hagnéré",
    jobTitle: "Fondateur de Hagnéré Code",
    url: SITE_URL + "/equipe",
    sameAs: ["https://www.linkedin.com/in/quentin-hagnere"],
    worksFor: { "@id": SITE_URL + "/#organization" },
  },
  publisher: {
    "@type": "Organization",
    "@id": SITE_URL + "/#organization",
    name: "Hagnéré Code",
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: SITE_URL + "/logos/logo-dark.png" },
  },
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL + "/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: SITE_URL + "/guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Template, site personnalisé ou sur mesure",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Un template peut-il produire un site professionnel ?",
    answer:
      "Oui. Pour un site vitrine simple, un bon template avec des contenus, des photos et une identité soignés peut être tout à fait professionnel. Il faut juger le résultat sur mobile, sa clarté, sa rapidité et sa facilité de mise à jour.",
  },
  {
    question: "Un template est-il mauvais pour le référencement naturel ?",
    answer:
      "Non. Google ne classe pas un site selon l’étiquette « template » ou « sur mesure ». La qualité des contenus, les liens, le rendu mobile, les métadonnées et le bon fonctionnement technique comptent davantage.",
  },
  {
    question:
      "Design sur mesure et développement sur mesure, est-ce la même chose ?",
    answer:
      "Non. Un design peut être créé pour votre marque puis intégré dans WordPress ou un autre outil standard. À l’inverse, une fonction spécifique peut être développée dans une interface graphique réutilisée.",
  },
  {
    question: "Jusqu’où peut-on personnaliser un template ?",
    answer:
      "Tant que les adaptations restent simples, documentées et compatibles avec les mises à jour. Si chaque page exige un contournement différent, une base plus adaptée peut devenir moins coûteuse à long terme.",
  },
  {
    question: "Comment vérifier qu’un devis est vraiment sur mesure ?",
    answer:
      "Demandez ce qui sera créé spécialement pour vous : arborescence, maquettes, composants, fonctions, administration et intégrations. Le devis doit aussi indiquer clairement les briques standard qui seront réutilisées.",
  },
  {
    question: "Faut-il toujours refaire le site existant ?",
    answer:
      "Non. Si le problème vient surtout du message, des contenus ou du formulaire, une correction ciblée peut suffire. Une reconstruction se justifie lorsque la base empêche durablement d’atteindre l’objectif.",
  },
  {
    question: "À qui appartiennent le thème, les maquettes et le code ?",
    answer:
      "Cela dépend du contrat et des licences. Faites préciser les droits remis, les comptes administrateurs, les contenus exportables et les abonnements à conserver après la livraison.",
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
          { label: "Template ou site sur mesure" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Template, personnalisation ou conception complète : comparez ce que vous obtenez réellement, ce que votre équipe pourra modifier et ce qui justifie le budget supplémentaire."
        heroAction={{
          href: "#choix",
          label: "Voir les quatre choix",
        }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "4 choix possibles",
            description: "Corriger, adapter ou reconstruire",
            color: "violet",
          },
          {
            number: "02",
            title: "Des devis comparables",
            description: "Créations et briques standard séparées",
            color: "blue",
          },
          {
            number: "03",
            title: "Une décision neutre",
            description: "Le template peut être le bon choix",
            color: "emerald",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/prix-site-vitrine",
            label: "Comprendre le prix d’un site vitrine",
          },
          {
            href: "/guides/pourquoi-mon-site-ne-convertit-pas",
            label: "Diagnostiquer un site qui ne convertit pas",
          },
          {
            href: "/guides/cahier-des-charges-site-internet",
            label: "Rédiger le cahier des charges du site",
          },
          {
            href: "/guides/proprietaire-site-internet-code-source",
            label: "Vérifier la propriété et les accès",
          },
          {
            href: "/guides/wix-ou-wordpress",
            label: "Choisir entre Wix et WordPress",
          },
          {
            href: "/guides/nextjs-ou-wordpress",
            label: "Choisir entre Next.js et WordPress",
          },
        ]}
        faqTitle="Template ou sur mesure : les questions à trancher"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          Vous avez reçu deux devis pour le même site. L’un propose d’adapter un
          modèle existant ; l’autre annonce une conception sur mesure, pour un
          budget bien supérieur.{" "}
          <strong>
            Que gagnez-vous réellement avec le second, et le premier sera-t-il
            suffisant pour votre entreprise ?
          </strong>{" "}
          La réponse ne dépend pas du prestige des mots. Elle dépend de ce que
          le site doit faire, de ce qui doit être différent et de la façon dont
          votre équipe le fera vivre.
        </p>

        <InfoBox variant="blue" title="La réponse en une minute">
          Pour présenter une activité, publier quelques pages et recevoir des
          demandes, un bon template peut suffire. Si votre identité, vos
          contenus ou certains parcours doivent être réellement différents, une
          personnalisation ciblée est souvent le meilleur compromis. Le
          sur-mesure devient pertinent lorsque plusieurs besoins propres à
          l’entreprise ne peuvent pas être obtenus proprement avec une base
          standard. Et si le site actuel remplit déjà son rôle, commencez par le
          corriger plutôt que par le remplacer.
        </InfoBox>

        <GuideToc
          items={[
            { id: "choix", label: "1. Les quatre décisions possibles" },
            { id: "objectif", label: "2. Partir du rôle du site" },
            { id: "template", label: "3. Quand un template est le bon choix" },
            {
              id: "personnalise",
              label: "4. Quand une personnalisation suffit",
            },
            { id: "sur-mesure", label: "5. Quand le sur-mesure se justifie" },
            { id: "prix", label: "6. Comprendre ce que vous payez" },
            { id: "devis", label: "7. Comparer deux devis" },
            { id: "qualite", label: "8. Vérifier la qualité du site livré" },
            {
              id: "propriete",
              label: "9. Préparer les mises à jour et la sortie",
            },
            { id: "decision", label: "10. Prendre la décision" },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="choix">1. Les quatre décisions possibles</h2>

        <p>
          « Template ou sur mesure » donne l’impression qu’il n’existe que deux
          réponses. Dans la pratique, une entreprise peut choisir entre quatre
          interventions très différentes.
        </p>

        <GuideTable
          headers={[
            "Votre situation",
            "Choix raisonnable",
            "Ce que cela implique",
          ]}
          rows={[
            [
              "Le site existe et le problème vient surtout des textes, des éléments rassurants ou du formulaire",
              "Conserver et corriger",
              "Budget concentré sur les points qui empêchent les demandes",
            ],
            [
              "Le besoin est courant et le contenu tient dans des pages classiques",
              "Template bien choisi",
              "Mise en ligne plus rapide et cadre graphique déjà éprouvé",
            ],
            [
              "La structure convient mais la marque ou certains parcours doivent être distinctifs",
              "Base standard personnalisée",
              "Création ciblée sans refaire les fonctions ordinaires",
            ],
            [
              "Le contenu, le parcours ou les connexions métier sortent réellement du standard",
              "Conception sur mesure",
              "Plus de travail initial, mais une base pensée pour ces besoins précis",
            ],
          ]}
        />

        <p>
          Aucun choix n’est professionnel par nature. Un template mal choisi
          peut brider un site ; un développement spécifique mal conçu peut
          coûter cher et rester difficile à utiliser. Le résultat doit être
          comparé, pas l’étiquette.
        </p>

        <h2 id="objectif">
          2. Commencez par le rôle du site, pas par la technologie
        </h2>

        <p>
          Avant de demander des maquettes, terminez cette phrase : « Ce site
          doit surtout nous aider à… ». Une entreprise locale peut vouloir
          rassurer avant un rendez-vous. Un cabinet de conseil peut vouloir
          recevoir des demandes qualifiées. Un fabricant peut devoir présenter
          des gammes complexes à plusieurs types d’acheteurs.
        </p>

        <p>Posez ensuite cinq questions simples :</p>

        <ul>
          <li>Qui doit comprendre l’offre et prendre quelle décision ?</li>
          <li>Quelles pages seront réellement publiées au lancement ?</li>
          <li>Qui modifiera les contenus chaque mois ?</li>
          <li>
            Quelles fonctions doivent dialoguer avec un outil de l’entreprise ?
          </li>
          <li>Qu’est-ce qui ne fonctionne pas dans le site actuel ?</li>
        </ul>

        <p>
          Si la dernière question reste sans réponse, utilisez d’abord notre{" "}
          <Link href="/guides/pourquoi-mon-site-ne-convertit-pas">
            diagnostic d’un site qui ne convertit pas
          </Link>
          . Refaire la technique ne corrigera pas automatiquement une offre
          floue, des photos faibles ou des demandes commerciales mal traitées.
        </p>

        <h2 id="template">3. Quand un template est-il le bon choix ?</h2>

        <p>
          Un template est une structure graphique et éditoriale déjà préparée.
          Il est particulièrement adapté lorsque le besoin ressemble à celui de
          nombreuses entreprises : accueil, services, réalisations, équipe,
          actualités et contact.
        </p>

        <p>Le choix est cohérent si :</p>

        <ul>
          <li>
            les pages prévues rentrent naturellement dans la structure proposée
            ;
          </li>
          <li>
            votre équipe accepte de rester dans ce cadre lors des futures mises
            à jour ;
          </li>
          <li>
            les couleurs, typographies, photos et contenus suffisent à exprimer
            la marque ;
          </li>
          <li>
            les fonctions nécessaires sont déjà disponibles et maintenues ;
          </li>
          <li>
            vous disposez d’un budget ou d’un délai qui impose de concentrer
            l’effort.
          </li>
        </ul>

        <InfoBox
          variant="emerald"
          title="Un template n’est pas synonyme de site générique"
        >
          Une rédaction précise, des photos propres à l’entreprise, des
          réalisations concrètes et une hiérarchie claire ont souvent plus
          d’effet sur le lecteur qu’une animation développée spécialement.
          Demandez à voir le rendu avec vos vrais contenus, pas seulement la
          démonstration du modèle.
        </InfoBox>

        <p>
          Vérifiez toutefois les licences, la qualité mobile, la possibilité
          d’exporter les contenus et la fréquence des mises à jour. Sur une
          plateforme fermée, la sortie peut imposer une reconstruction ; notre
          comparatif{" "}
          <Link href="/guides/wix-ou-wordpress">Wix ou WordPress</Link> détaille
          cette différence.
        </p>

        <h2 id="personnalise">
          4. Quand une personnalisation ciblée suffit-elle ?
        </h2>

        <p>
          Beaucoup de projets n’ont pas besoin d’un développement entièrement
          spécifique. Ils ont besoin d’une base fiable et de quelques éléments
          réellement conçus pour l’entreprise : une page d’offre plus
          convaincante, une navigation adaptée à plusieurs clientèles, une
          présentation originale des réalisations ou un formulaire mieux
          qualifié.
        </p>

        <p>
          Demandez que chaque adaptation soit nommée dans le devis. Par exemple
          :
        </p>

        <ul>
          <li>
            création de la page d’accueil et réutilisation de composants pour
            les pages courantes ;
          </li>
          <li>deux modèles de réalisations propres à votre activité ;</li>
          <li>
            formulaire relié au CRM avec les champs nécessaires à l’équipe
            commerciale ;
          </li>
          <li>
            styles et composants conservés séparément du thème pour faciliter
            les mises à jour.
          </li>
        </ul>

        <p>
          La personnalisation devient fragile lorsque chaque nouvelle page exige
          une correction locale, lorsque plusieurs extensions se contredisent ou
          lorsque les mises à jour effacent régulièrement des changements. Dans
          ce cas, le prestataire doit expliquer s’il vaut mieux simplifier le
          besoin, changer de base ou concevoir une partie spécifique.
        </p>

        <h2 id="sur-mesure">
          5. Dans quels cas le sur-mesure est-il justifié ?
        </h2>

        <p>
          Le sur-mesure ne se justifie pas simplement parce que le site est
          important. Il se justifie lorsque des différences concrètes sont au
          cœur du projet et qu’une base existante les traiterait mal ou au prix
          de nombreux contournements.
        </p>

        <p>Exemples fréquents :</p>

        <ul>
          <li>
            un catalogue avec des relations complexes entre produits, métiers et
            documents ;
          </li>
          <li>des parcours très différents selon le profil du visiteur ;</li>
          <li>
            un espace connecté à un logiciel interne ou à plusieurs sources de
            données ;
          </li>
          <li>
            une interface d’administration propre au travail quotidien de
            l’équipe ;
          </li>
          <li>
            une identité visuelle qui repose sur des composants et interactions
            spécifiques.
          </li>
        </ul>

        <p>
          Même dans un projet sur mesure, tout n’est pas réinventé. Des
          bibliothèques, services d’hébergement et outils d’administration
          éprouvés peuvent être réutilisés. Demandez donc ce qui sera créé pour
          vous et ce qui restera standard. Le comparatif{" "}
          <Link href="/guides/nextjs-ou-wordpress">Next.js ou WordPress</Link>{" "}
          aide à distinguer le niveau de conception du choix de la plateforme.
        </p>

        <InfoBox
          variant="amber"
          title="Trois mauvaises raisons de payer du sur-mesure"
        >
          « Faire plus premium », « être meilleur sur Google » ou « avoir un
          site rapide » ne suffisent pas. Un bon site standard peut remplir ces
          objectifs, et un site spécifique peut les manquer. Le devis doit
          relier le travail supplémentaire à un besoin et à un résultat
          vérifiable.
        </InfoBox>

        <h2 id="prix">6. Comprendre ce que vous payez réellement</h2>

        <p>
          Le prix ne vient pas seulement du nombre de pages. Il dépend du
          travail de compréhension, de rédaction, de conception graphique,
          d’intégration, de développement, de reprise de contenus, de tests et
          d’accompagnement après la mise en ligne.
        </p>

        <GuideTable
          headers={["Poste", "Questions à poser", "Livrable attendu"]}
          rows={[
            [
              "Compréhension et architecture",
              "Qui interroge l’équipe et organise les contenus ?",
              "Objectifs, arborescence et périmètre validés",
            ],
            [
              "Contenus",
              "Qui écrit, rassemble les éléments rassurants et choisit les images ?",
              "Textes et médias prêts avant l’intégration",
            ],
            [
              "Design",
              "Quelles pages sont réellement maquettées ?",
              "Maquettes mobile et ordinateur identifiables",
            ],
            [
              "Développement",
              "Quelles fonctions sont standard ou spécifiques ?",
              "Liste claire des composants et intégrations",
            ],
            [
              "Mise en ligne",
              "Qui traite domaine, redirections, mesure et formulaires ?",
              "Plan de lancement et contrôles réalisés",
            ],
            [
              "Après la livraison",
              "Quelles corrections, formations et maintenances sont incluses ?",
              "Durée, responsabilités et coûts récurrents écrits",
            ],
          ]}
        />

        <p>
          Pour situer les ordres de grandeur sans les confondre avec un devis,
          consultez le guide du{" "}
          <Link href="/guides/prix-site-vitrine">prix d’un site vitrine</Link>.
          Comparez toujours des périmètres identiques : un devis incluant
          rédaction, photographie, migration et suivi ne peut pas être comparé
          au seul montage d’un thème.
        </p>

        <h2 id="devis">
          7. Comment comparer deux devis sans devenir technicien ?
        </h2>

        <p>
          Demandez à chaque prestataire de répondre aux mêmes questions. Les
          réponses doivent pouvoir être comprises par la personne qui finance le
          projet.
        </p>

        <ol>
          <li>
            <strong>Quel problème le projet résout-il ?</strong> La réponse doit
            parler de clients, de contenus ou de travail interne, pas seulement
            d’outil.
          </li>
          <li>
            <strong>
              Que sera-t-il possible de modifier sans le prestataire ?
            </strong>
            Demandez une démonstration de l’administration prévue.
          </li>
          <li>
            <strong>
              Qu’est-ce qui est créé et qu’est-ce qui est réutilisé ?
            </strong>
            Les deux choix peuvent être bons, mais ils doivent être visibles.
          </li>
          <li>
            <strong>Que recevez-vous avant la mise en ligne ?</strong>{" "}
            Arborescence, textes, maquettes, version de test et liste des
            contrôles.
          </li>
          <li>
            <strong>Que se passe-t-il après ?</strong> Corrections, maintenance,
            hébergement, abonnements et conditions de sortie.
          </li>
        </ol>

        <p>
          Un bon devis peut conclure à une simple correction, à un template ou à
          une conception complète. Méfiez-vous autant du sur-mesure annoncé sans
          livrables que du prix très bas qui reporte tous les contenus et toutes
          les décisions sur votre équipe. Le{" "}
          <Link href="/guides/cahier-des-charges-site-internet">
            cahier des charges de site internet
          </Link>{" "}
          permet de poser ces questions aux mêmes conditions.
        </p>

        <h2 id="qualite">8. La qualité se vérifie sur le site livré</h2>

        <p>
          La méthode de fabrication ne prouve ni le référencement, ni
          l’accessibilité, ni la rapidité. Avant d’accepter le site, testez des
          tâches réelles sur ordinateur et sur téléphone.
        </p>

        <ul>
          <li>
            Un nouveau visiteur comprend-il l’activité et la prochaine action ?
          </li>
          <li>
            Les textes restent-ils lisibles et les boutons utilisables sur
            mobile ?
          </li>
          <li>
            Le formulaire arrive-t-il au bon destinataire avec un message de
            confirmation ?
          </li>
          <li>Les titres, liens, images et métadonnées sont-ils présents ?</li>
          <li>
            Une personne peut-elle naviguer au clavier et comprendre les champs
            du formulaire ?
          </li>
          <li>
            Votre équipe sait-elle modifier une page sans casser la mise en
            forme ?
          </li>
          <li>
            Les anciennes adresses importantes sont-elles conservées ou
            redirigées lors d’une refonte ?
          </li>
        </ul>

        <p>
          Les références Google, W3C et CNIL citées en fin de guide donnent des
          contrôles utiles. Elles ne garantissent ni une position sur Google ni
          un nombre de demandes commerciales.
        </p>

        <h2 id="propriete">
          9. Préparez les mises à jour et la sortie dès le devis
        </h2>

        <p>
          Quel que soit le niveau choisi, votre entreprise doit savoir où se
          trouvent le domaine, l’hébergement, les contenus, les données et les
          comptes administrateurs. Le contrat doit distinguer les éléments sous
          licence des créations et des contenus qui vous sont remis.
        </p>

        <p>Demandez également :</p>

        <ul>
          <li>le coût annuel des licences, applications et hébergement ;</li>
          <li>la personne responsable des mises à jour et sauvegardes ;</li>
          <li>le format d’export des contenus et données ;</li>
          <li>
            la documentation nécessaire pour confier le site à un autre
            prestataire ;
          </li>
          <li>les accès remis à l’entreprise à la livraison.</li>
        </ul>

        <p>
          Notre guide sur la{" "}
          <Link href="/guides/proprietaire-site-internet-code-source">
            propriété d’un site et de son code source
          </Link>{" "}
          fournit la liste détaillée des éléments à contrôler.
        </p>

        <h2 id="decision">10. La décision finale en quelques questions</h2>

        <p>Avant de signer, relisez votre projet avec cette règle simple :</p>

        <ul>
          <li>
            <strong>Le site actuel peut-il être corrigé ?</strong> Si oui,
            chiffrez cette option.
          </li>
          <li>
            <strong>Vos pages et fonctions sont-elles courantes ?</strong> Un
            template sérieux mérite d’être comparé.
          </li>
          <li>
            <strong>
              Seuls quelques éléments doivent-ils être différents ?
            </strong>{" "}
            Une personnalisation ciblée peut suffire.
          </li>
          <li>
            <strong>
              Plusieurs besoins propres à l’entreprise sont-ils liés entre eux ?
            </strong>
            Faites alors chiffrer une conception sur mesure.
          </li>
        </ul>

        <InfoBox
          variant="emerald"
          title="Le bon choix est celui que vous pouvez expliquer"
        >
          Vous devez pouvoir dire ce que le site doit améliorer, pourquoi la
          solution choisie est suffisante et ce que le budget supplémentaire
          permet d’obtenir. Si cette explication tient seulement dans les mots «
          premium » ou « sur mesure », le projet n’est pas encore assez clair.
        </InfoBox>

        <GuideInlineCTA
          title="Vous voulez comparer vos options avant de signer ?"
          description="Décrivez votre site, son objectif et les devis reçus. Nous vous aidons à distinguer ce qui peut être corrigé, ce qui peut rester standard et ce qui mérite réellement une conception spécifique."
          tags={[
            "Avis compréhensible par la direction",
            "Périmètres et coûts comparés",
            "Aucune technologie imposée par principe",
          ]}
          ctaLabel="Faire examiner mon projet"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="sources">Sources officielles et limites</h2>

        <p>
          Sources consultées le 20 juillet 2026. Les documentations de
          plateformes décrivent leur propre périmètre et peuvent évoluer. Les
          recommandations Google ne dévoilent pas tous ses systèmes et ne
          garantissent ni classement, ni conversion. Les standards W3C et les
          ressources CNIL doivent être appliqués au site, aux contenus, aux
          traitements et au cadre juridique réels. Ce guide ne remplace ni un
          audit technique, ni une analyse juridique.
        </p>

        <ul>
          <li>
            <a
              href="https://wordpress.org/documentation/article/work-with-themes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WordPress — Work with themes
            </a>{" "}
            : rôle d’un thème dans la présentation du site.
          </li>
          <li>
            <a
              href="https://developer.wordpress.org/themes/advanced-topics/child-themes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WordPress Theme Handbook — Child themes
            </a>{" "}
            : séparation des adaptations et limite des personnalisations très
            étendues.
          </li>
          <li>
            <a
              href="https://wordpress.org/documentation/article/tools-export-screen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WordPress — Tools Export screen
            </a>{" "}
            et{" "}
            <a
              href="https://wordpress.org/about/license/"
              target="_blank"
              rel="noopener noreferrer"
            >
              licence WordPress
            </a>{" "}
            : contenu exporté et droits du logiciel, sans les confondre avec une
            sauvegarde complète ou tous les actifs du projet.
          </li>
          <li>
            <a
              href="https://developers.google.com/search/docs/appearance/page-experience"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Search Central — Page experience
            </a>{" "}
            : signaux d’expérience et absence de garantie de classement.
          </li>
          <li>
            <a
              href="https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Search Central — JavaScript SEO basics
            </a>{" "}
            : rendu, liens, statuts et métadonnées à vérifier.
          </li>
          <li>
            <a
              href="https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Search Central — Mobile-first indexing
            </a>{" "}
            et{" "}
            <a
              href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes"
              target="_blank"
              rel="noopener noreferrer"
            >
              migrations avec changement d’URL
            </a>
            .
          </li>
          <li>
            <a
              href="https://www.w3.org/WAI/standards-guidelines/wcag/"
              target="_blank"
              rel="noopener noreferrer"
            >
              W3C/WAI — WCAG Overview
            </a>{" "}
            : principes et niveaux du standard d’accessibilité.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/comment-mettre-mon-site-web-en-conformite"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Cookies et traceurs
            </a>{" "}
            et{" "}
            <a
              href="https://www.cnil.fr/fr/exemples-de-formulaire-de-collecte-de-donnees-caractere-personnel"
              target="_blank"
              rel="noopener noreferrer"
            >
              exemples de formulaire de collecte
            </a>
            .
          </li>
          <li>
            <a
              href="https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wix — Exporting or embedding your Wix site elsewhere
            </a>{" "}
            : limite de portabilité propre à Wix, non généralisable.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
