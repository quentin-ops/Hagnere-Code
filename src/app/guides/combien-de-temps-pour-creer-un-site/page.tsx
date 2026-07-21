import type { Metadata } from "next";
import Link from "next/link";
import { GuideLayout } from "@/components/guides/guide-layout";
import {
  GuideToc,
  InfoBox,
  GuideTable,
  GuideInlineCTA,
} from "@/components/guides/guide-content-blocks";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { OG_BASE, SITE_URL } from "@/lib/seo";
import { getGuide, guidePath, guideUrl, formatGuideDate } from "@/lib/guides";

const guide = getGuide("combien-de-temps-pour-creer-un-site");

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
  headline: guide.cardTitle,
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
    knowsAbout: [
      "Développement web",
      "Gestion de projet web",
      "Next.js",
      "React",
      "SEO",
      "Chiffrage de projets web",
    ],
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
      name: "Combien de temps pour créer un site internet",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Combien de temps faut-il pour créer un site vitrine ?",
    answer:
      "Pour un site professionnel de quelques pages, prévoyez souvent quatre à huit semaines si les contenus, les accès et le décideur sont disponibles. Une page unique déjà préparée peut aller plus vite ; un site multilingue, très éditorial ou connecté à d'autres outils prendra davantage de temps. La date fiable vient du planning du devis, pas d'une moyenne.",
  },
  {
    question: "Combien de temps faut-il pour une boutique en ligne ?",
    answer:
      "Notre estimation est de deux à quatre mois pour une boutique avec catalogue, paiement, livraison, comptes clients et validation complète. L'import des produits, les règles de prix, la fiscalité et les connexions au logiciel de gestion peuvent allonger le projet. Faites lister ces dépendances avant de fixer la date de lancement.",
  },
  {
    question: "Peut-on mettre un site en ligne en une semaine ?",
    answer:
      "Oui, pour une première version très courte si le contenu, le design, le nom de domaine et les validations sont déjà prêts. Il faut alors assumer les exclusions : peu de pages, peu d'allers-retours et aucune intégration lourde. Une mise en ligne rapide peut être une bonne décision si la suite est planifiée.",
  },
  {
    question: "Pourquoi un projet de site prend-il du retard ?",
    answer:
      "Les causes les plus courantes sont une liste de pages ou de fonctions qui change, des textes ou photos manquants, plusieurs décideurs qui donnent des consignes opposées, des accès indisponibles et une vérification finale commencée trop tard. Un planning utile nomme chaque responsable et ce qui se passe lorsqu'une date n'est pas tenue.",
  },
  {
    question: "À quel moment le délai commence-t-il vraiment ?",
    answer:
      "Le contrat doit le préciser. Une date de signature n'est pas toujours une date de démarrage : il peut manquer l'acompte, les contenus, les accès ou une place dans le planning du prestataire. Faites écrire les conditions de départ et la date prévisionnelle de mise en ligne.",
  },
  {
    question:
      "La mise en ligne signifie-t-elle que le site sera visible sur Google ?",
    answer:
      "Non. Le site peut être accessible immédiatement à son adresse, mais Google indique que l'exploration d'une page nouvelle ou modifiée peut prendre de quelques jours à quelques semaines. Demander une exploration ne garantit ni l'indexation, ni une position. La visibilité se construit ensuite avec des contenus utiles et un suivi.",
  },
  {
    question: "Comment accélérer le projet sans sacrifier la qualité ?",
    answer:
      "Lancez d'abord les pages indispensables, nommez un décideur, préparez les contenus et les accès, regroupez les retours et reportez les options non essentielles. Ne raccourcissez pas la vérification des formulaires, du paiement, des redirections et de l'affichage mobile.",
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
          { label: "Combien de temps pour créer un site" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous avez une ouverture, un salon ou une saison à préparer ? Voici les délais réalistes selon le type de site, ce qui doit être prêt avant le démarrage et la méthode pour tenir une date sans bâcler la mise en ligne."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "Estimation vitrine : 4 à 8 semaines",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Estimation boutique : 2 à 4 mois",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Une date dépend d'hypothèses écrites",
            description: "",
            color: "emerald",
          },
          {
            number: "04",
            title: "Lecture : " + guide.readTimeMin + " min",
            description: "",
            color: "amber",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/combien-coute-un-site-internet",
            label: "Combien coûte un site internet ?",
          },
          {
            href: "/ressources/kit-cahier-des-charges-site-internet",
            label: "Modèle de cahier des charges",
          },
          {
            href: "/guides/prix-site-vitrine",
            label: "Prix d'un site vitrine",
          },
          {
            href: "/guides/prix-refonte-site-internet",
            label: "Prix d'une refonte de site",
          },
          { href: "/methode", label: "Notre méthode" },
          { href: "/demarrer-un-projet", label: "Décrire mon projet" },
        ]}
        faqTitle="Délais de création : les réponses simples"
        faqItems={faqItems}
      >
        <p className="lead">
          Vous devez peut-être présenter votre entreprise à un salon, ouvrir un
          commerce ou remplacer un site qui ne vous ressemble plus. Pour un
          <strong>
            {" "}
            site vitrine professionnel de quelques pages, notre estimation est
            de quatre à huit semaines
          </strong>
          . Pour une{" "}
          <strong>
            boutique en ligne, elle est plutôt de deux à quatre mois
          </strong>
          . Ces estimations Hagnéré supposent une liste de pages et de fonctions
          décidée, des contenus disponibles et des validations rapides. Elles ne
          sont ni une moyenne officielle, ni une promesse universelle. Dans ce
          guide, vous allez construire votre propre calendrier et voir ce qui
          peut réellement être raccourci.
        </p>

        <InfoBox
          variant="amber"
          title="Votre date est proche ? Découpez le lancement"
        >
          Mieux vaut publier à temps cinq pages utiles et testées, puis ajouter
          le reste, que mettre en ligne vingt pages inachevées. Définissez la
          version indispensable : accueil, offre principale, preuves, contact et
          mentions. Les pages secondaires peuvent suivre si leur report ne casse
          ni la vente, ni le référencement d&apos;un ancien site.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "reponse-rapide",
              label: "1. Les délais selon votre type de site",
            },
            {
              id: "point-depart",
              label: "2. Définir le vrai début et la vraie fin",
            },
            { id: "phases", label: "3. Le planning phase par phase" },
            {
              id: "preparation",
              label: "4. Ce qui doit être prêt avant de commencer",
            },
            { id: "validations", label: "5. Organiser les validations" },
            { id: "accelerer", label: "6. Ce qui peut vraiment accélérer" },
            {
              id: "dependances",
              label: "7. Les projets qui demandent plus de temps",
            },
            { id: "apres", label: "8. Ce qui se passe après la mise en ligne" },
            {
              id: "retroplanning",
              label: "9. Remonter depuis votre date de lancement",
            },
            { id: "contrat", label: "10. Ce que le devis doit préciser" },
          ]}
        />

        <h2 id="reponse-rapide">1. Les délais selon votre type de site</h2>
        <p>
          Les fourchettes suivantes sont des repères de planification. Elles
          supposent que le prestataire est disponible, qu&apos;un décideur
          répond et que les contenus arrivent aux dates prévues.
        </p>
        <GuideTable
          headers={["Projet", "Repère de calendrier", "Hypothèse principale"]}
          rows={[
            [
              "Page unique de lancement",
              "1 à 3 semaines",
              "Message, identité et contenus déjà prêts",
            ],
            [
              "Site vitrine de 5 à 10 pages",
              "4 à 8 semaines",
              "Peu d'intégrations et retours regroupés",
            ],
            [
              "Refonte avec reprise SEO",
              "6 à 12 semaines",
              "Inventaire des anciennes pages et redirections préparés",
            ],
            [
              "Boutique en ligne",
              "2 à 4 mois",
              "Catalogue, paiement, livraison et règles de vente validés",
            ],
            [
              "Site connecté à un outil métier",
              "À chiffrer après étude",
              "Mode de connexion technique (API), données, sécurité et tests connus",
            ],
          ]}
        />
        <p>
          Une agence peut annoncer un délai différent sans se tromper. Comparez
          les dates de départ, le nombre de pages, la rédaction, les
          allers-retours et la vérification finale. « Site en quinze jours » et
          « site en deux mois » ne désignent peut-être pas le même résultat.
        </p>

        <h2 id="point-depart">2. Définir le vrai début et la vraie fin</h2>
        <p>
          Un projet signé n&apos;est pas toujours un projet démarré. Le
          prestataire peut attendre l&apos;acompte, le logo, les accès au nom de
          domaine ou une place dans son calendrier. Inscrivez une date de
          démarrage et ses conditions.
        </p>
        <GuideTable
          headers={[
            "Moment clé",
            "Ce qu'il signifie",
            "Ce qu'il ne signifie pas",
          ]}
          rows={[
            [
              "Démarrage",
              "L'équipe peut réellement travailler",
              "Simple signature si des éléments manquent",
            ],
            [
              "Version de test",
              "Le site complet est accessible en privé",
              "Site validé ou prêt pour les clients",
            ],
            [
              "Mise en ligne",
              "Le public accède au site à son adresse",
              "Visibilité immédiate dans Google",
            ],
            [
              "Fin des vérifications",
              "Les critères prévus ont été contrôlés",
              "Fin de toute maintenance future",
            ],
          ]}
        />
        <p>
          Pour une échéance commerciale, votre vraie fin n&apos;est pas toujours
          la mise en ligne. Gardez du temps pour former l&apos;équipe, corriger
          les derniers problèmes et préparer la communication.
        </p>

        <h2 id="phases">3. Le planning phase par phase</h2>
        <p>
          Voici l&apos;ordre le plus lisible pour un site vitrine. Certaines
          étapes peuvent se chevaucher, mais aucune ne doit devenir invisible.
        </p>
        <GuideTable
          headers={["Étape", "Décision attendue", "Résultat visible"]}
          rows={[
            [
              "Définition du projet",
              "Objectif, visiteurs, pages et fonctions",
              "Liste des travaux et calendrier",
            ],
            [
              "Contenus",
              "Promesse, preuves, textes, photos et obligations",
              "Contenus prêts à intégrer",
            ],
            [
              "Design",
              "Hiérarchie, identité et parcours",
              "Maquettes des pages clés",
            ],
            [
              "Développement",
              "Comportements, administration et intégrations",
              "Site de test fonctionnel",
            ],
            [
              "Vérification finale",
              "Ce qui est accepté ou à corriger",
              "Liste de contrôles terminée",
            ],
            [
              "Mise en ligne",
              "Domaine, suivi, redirections et sauvegarde",
              "Site public et surveillé",
            ],
          ]}
        />
        <p>
          Demandez une date de validation pour chaque étape. Sans ce point de
          contrôle, les retours sur la maquette peuvent arriver pendant le
          développement et forcer à refaire du travail déjà produit.
        </p>

        <h2 id="preparation">4. Ce qui doit être prêt avant de commencer</h2>
        <p>
          Vous n&apos;avez pas besoin d&apos;écrire un dossier de cent pages. Un
          bon départ tient dans un petit ensemble de décisions et d&apos;accès
          vérifiables :
        </p>
        <ul>
          <li>
            l&apos;objectif prioritaire du site : appeler, demander un devis,
            acheter, réserver ou recruter ;
          </li>
          <li>les publics visés et les offres à mettre en avant ;</li>
          <li>la liste des pages indispensables au premier lancement ;</li>
          <li>
            le logo, les photos utilisables et les preuves que vous avez le
            droit de publier ;
          </li>
          <li>
            les accès au domaine, à l&apos;hébergement, aux statistiques et à
            l&apos;ancien site ;
          </li>
          <li>une personne habilitée à trancher dans un délai convenu.</li>
        </ul>
        <p>
          Notre{" "}
          <Link href="/ressources/kit-cahier-des-charges-site-internet">
            kit de cahier des charges
          </Link>{" "}
          rassemble ces informations sans vous demander de choisir la
          technologie à la place du prestataire.
        </p>

        <InfoBox
          variant="blue"
          title="Exemple fictif : un cabinet ouvre dans six semaines"
        >
          Cet exemple ne décrit ni un client ni un témoignage réel. Le besoin
          prioritaire est d&apos;être crédible, de présenter trois services et
          de prendre des rendez-vous. La première version peut donc contenir
          cinq pages, un formulaire et le suivi des demandes. Le recrutement,
          les articles et une connexion avancée au logiciel métier passent dans
          une seconde étape. Cette décision protège la date sans prétendre que
          tout le site sera terminé en urgence.
        </InfoBox>

        <h2 id="validations">5. Organiser les validations</h2>
        <p>
          Le planning se bloque rarement parce qu&apos;une couleur demande deux
          jours. Il se bloque lorsque trois personnes répondent séparément,
          qu&apos;aucune ne peut trancher ou que de nouveaux besoins
          apparaissent après validation.
        </p>
        <ol>
          <li>
            <strong>Nommez un décideur.</strong> Les experts internes peuvent
            contribuer, mais une personne arbitre.
          </li>
          <li>
            <strong>Regroupez les retours.</strong> Envoyez une seule liste
            datée plutôt que des messages dispersés.
          </li>
          <li>
            <strong>Relisez selon l&apos;objectif.</strong> « Je n&apos;aime pas
            » n&apos;explique pas ce qui empêche le visiteur d&apos;agir.
          </li>
          <li>
            <strong>Fermez chaque étape.</strong> Un changement après validation
            passe par une estimation de son effet sur le délai.
          </li>
        </ol>
        <InfoBox variant="amber" title="Une validation n'est pas un silence">
          Précisez au contrat si l&apos;absence de réponse suspend le planning,
          décale la mise en ligne ou vaut acceptation. La règle doit être
          comprise avant le premier retard, pas inventée au milieu du projet.
        </InfoBox>

        <h2 id="accelerer">6. Ce qui peut vraiment accélérer</h2>
        <GuideTable
          headers={[
            "Levier",
            "Ce que vous gagnez",
            "Ce qu'il ne faut pas supprimer",
          ]}
          rows={[
            [
              "Lancer moins de pages",
              "Moins de contenu et de vérifications avant l'échéance",
              "Les pages utiles à la décision",
            ],
            [
              "Réutiliser les mêmes blocs de page",
              "Moins de variantes à concevoir et tester",
              "Une identité cohérente et lisible",
            ],
            [
              "Préparer les contenus tôt",
              "Moins de retours entre texte et design",
              "La vérification des faits et des droits",
            ],
            [
              "Valider à date fixe",
              "Moins d'attente entre les étapes",
              "Le droit de signaler un vrai problème",
            ],
            [
              "Reporter une intégration",
              "Moins de dépendances au lancement",
              "Un fonctionnement manuel prévu et acceptable",
            ],
          ]}
        />
        <p>
          Ne gagnez pas du temps en supprimant les tests mobiles, les
          formulaires, le paiement, les redirections d&apos;une refonte ou les
          mentions indispensables. Ce sont précisément les oublis qui créent une
          mise en ligne stressante.
        </p>

        <h2 id="dependances">7. Les projets qui demandent plus de temps</h2>
        <p>
          Certains travaux ne sont pas de simples « options ». Ils ajoutent des
          décisions, des données à reprendre et des contrôles à effectuer.
        </p>
        <GuideTable
          headers={["Dépendance", "Pourquoi elle prend du temps", "À préparer"]}
          rows={[
            [
              "Refonte d'un site existant",
              "Chaque ancienne adresse utile doit avoir un avenir",
              "Inventaire, redirections et mesure avant/après",
            ],
            [
              "Catalogue e-commerce",
              "Produits, variantes, stocks, taxes et livraisons doivent être cohérents",
              "Fichier propre et cas de commande",
            ],
            [
              "Connexion à un logiciel",
              "Les droits, formats et erreurs doivent être gérés",
              "Documentation, accès de test et responsable technique",
            ],
            [
              "Multilingue",
              "Chaque langue demande contenu, navigation et vérification",
              "Traductions validées et règle de mise à jour",
            ],
            [
              "Espace client",
              "Données personnelles, connexion et permissions ajoutent des risques",
              "Rôles, données et cas d'assistance",
            ],
          ]}
        />
        <p>
          Si une dépendance appartient à un fournisseur externe, demandez son
          délai et son interlocuteur avant de promettre une date. Le prestataire
          web ne peut pas engager à lui seul une banque, un éditeur de logiciel
          ou votre service juridique.
        </p>

        <h2 id="apres">8. Ce qui se passe après la mise en ligne</h2>
        <p>
          Le site peut être public le jour prévu sans être immédiatement visible
          sur toutes les recherches. Google indique que l&apos;exploration
          d&apos;une page nouvelle ou modifiée peut prendre de quelques jours à
          quelques semaines. Une demande d&apos;exploration ne garantit pas son
          indexation.
        </p>
        <p>
          Prévoyez les premières semaines pour surveiller les formulaires, les
          erreurs, les pages consultées et les questions des prospects.
          C&apos;est aussi le moment d&apos;ajuster les textes à partir de
          conversations réelles. Le référencement naturel et l&apos;acquisition
          ont leur propre calendrier ; ils ne doivent pas être confondus avec le
          temps de fabrication du site.
        </p>
        <InfoBox
          variant="blue"
          title="Le lancement n'est pas la fin du contrat"
        >
          Vérifiez qui corrige une anomalie découverte après la mise en ligne,
          pendant combien de temps et sous quel délai. Distinguez une correction
          de ce qui est une nouvelle demande. Le coût de la{" "}
          <Link href="/guides/cout-maintenance-site-internet">
            maintenance d&apos;un site
          </Link>{" "}
          dépend notamment de ce niveau de service.
        </InfoBox>

        <h2 id="retroplanning">9. Remonter depuis votre date de lancement</h2>
        <p>
          Partez de la date où le site doit être utile, puis remontez. Pour un
          salon, il faut parfois que l&apos;adresse soit imprimée plusieurs
          semaines avant l&apos;événement : la date de l&apos;imprimeur devient
          alors plus importante que le jour du salon.
        </p>
        <GuideTable
          headers={[
            "Avant l'échéance",
            "Décision à sécuriser",
            "Marge à conserver",
          ]}
          rows={[
            [
              "Derniers jours",
              "Site public, formulaires testés et équipe informée",
              "Corrections urgentes",
            ],
            [
              "1 à 2 semaines avant",
              "Vérifications, contenus définitifs et redirections",
              "Retours et mise en ligne",
            ],
            [
              "Plusieurs semaines avant",
              "Développement et intégrations terminés",
              "Aléas techniques",
            ],
            [
              "Au démarrage",
              "Pages et fonctions, contenus, décideur et accès",
              "Aucune dépendance cachée",
            ],
          ]}
        />
        <p>
          Cette table n&apos;impose pas une durée universelle. Elle montre
          pourquoi une date de mise en ligne sans marge transforme le moindre
          retard en crise.
        </p>

        <h2 id="contrat">10. Ce que le devis doit préciser</h2>
        <ul>
          <li>
            la date de démarrage, la date cible et les hypothèses qui les
            rendent possibles ;
          </li>
          <li>les pages, fonctions, contenus et langues inclus ;</li>
          <li>qui fournit chaque élément et à quelle date ;</li>
          <li>le nombre ou le mode d&apos;organisation des retours ;</li>
          <li>
            les vérifications finales, les critères d&apos;acceptation et le
            traitement des corrections ;
          </li>
          <li>
            l&apos;effet d&apos;un changement dans les pages ou fonctions, ou
            d&apos;un retard de validation ;
          </li>
          <li>l&apos;accompagnement après la mise en ligne.</li>
        </ul>
        <p>
          Un planning n&apos;est pas une décoration commerciale. C&apos;est la
          traduction concrète du projet : qui fait quoi, dans quel ordre et avec
          quelles conséquences. S&apos;il manque, deux entreprises peuvent
          signer le même prix en imaginant des calendriers totalement
          différents.
        </p>

        <GuideInlineCTA
          title="Construisons un calendrier que vous pourrez réellement tenir"
          description="Présentez-nous votre objectif, votre échéance et les éléments déjà disponibles. Nous identifierons les pages et fonctions du lancement, les dépendances et les décisions à prendre avant de fixer une date."
        />

        <h2 id="sources">Sources</h2>
        <p className="text-sm">
          Après mise en ligne :{" "}
          <a
            href="https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Search Central, demander une nouvelle exploration
          </a>
          . Google indique qu&apos;une exploration peut demander de quelques
          jours à quelques semaines et qu&apos;une demande ne garantit pas
          l&apos;indexation.
        </p>
        <p className="text-sm">
          Les fourchettes de délai sont des estimations Hagnéré fondées sur les
          hypothèses décrites dans chaque ligne ; elles ne constituent pas une
          moyenne statistique du marché. Seul un planning joint au devis peut
          engager les parties.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
