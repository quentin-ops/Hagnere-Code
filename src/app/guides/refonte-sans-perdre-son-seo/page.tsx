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

const guide = getGuide("refonte-sans-perdre-son-seo");

// --- METADATA SEO (title/description/dates depuis src/lib/guides.ts) ---
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
    // og:image générée par opengraph-image.tsx (convention Next.js).
  },
  twitter: {
    card: "summary_large_image",
    title: guide.cardTitle,
    description: guide.metaDescription,
    images: [guideUrl(guide) + "/opengraph-image"],
  },
};

// --- JSON-LD SCHEMAS (constantes statiques uniquement) ---
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
      "SEO technique",
      "Migrations de sites",
      "React",
      "Next.js",
      "Core Web Vitals",
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
      name: "Refonte sans perdre son SEO",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Une refonte fait-elle forcément perdre du trafic Google ?",
    answer:
      "Non. Le risque augmente surtout lorsque des pages utiles sont supprimées, que leurs adresses changent sans redirection ou que le nouveau site bloque Google par erreur.",
  },
  {
    question: "Comment limiter le risque pendant la refonte ?",
    answer:
      "Inventoriez les pages existantes, conservez leurs adresses si possible, redirigez chaque ancienne page vers son équivalent et contrôlez le site après la mise en ligne.",
  },
  {
    question: "Qu’est-ce qu’une redirection 301 ?",
    answer:
      "C’est un renvoi permanent de l’ancienne adresse vers la nouvelle. Elle aide les visiteurs et Google à retrouver la page après son déménagement.",
  },
  {
    question: "Faut-il garder les mêmes adresses de pages ?",
    answer:
      "Oui lorsque c’est raisonnable. Conserver les adresses réduit le travail de migration. Si elles changent, chaque ancienne page importante doit avoir une destination pertinente.",
  },
  {
    question:
      "Peut-on changer de WordPress à Next.js sans perdre son référencement ?",
    answer:
      "Oui, si les pages restent accessibles, les contenus utiles sont conservés et les anciennes adresses sont maintenues ou redirigées. La technologie seule ne garantit aucun résultat.",
  },
  {
    question: "Peut-on changer de domaine pendant la refonte ?",
    answer:
      "C’est possible, mais plus risqué. Google recommande de séparer les changements importants. Si vous le pouvez, stabilisez d’abord la refonte avant de changer de domaine.",
  },
  {
    question: "Que faire si le trafic a déjà chuté ?",
    answer:
      "Vérifiez en priorité que Google n’est pas bloqué, puis testez les anciennes adresses, les redirections et les contenus supprimés. L’outil gratuit Search Console aide à identifier les pages et requêtes touchées.",
  },
  {
    question: "Combien coûte la protection SEO d’une refonte ?",
    answer:
      "Le prix dépend du nombre de pages et du risque. Le devis doit inclure l’inventaire, les redirections, les tests et le suivi après lancement, ou les chiffrer séparément.",
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
          { label: "Refonte sans perdre son SEO" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous voulez moderniser le site sans perdre les pages qui attirent déjà des clients ? Voici quoi conserver, comment relier les anciennes adresses aux nouvelles et quels contrôles exiger avant et après la mise en ligne."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "Conserver les pages utiles",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Relier chaque ancienne adresse",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Surveiller après le lancement",
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
            href: "/guides/prix-refonte-site-internet",
            label: "Prix d'une refonte de site",
          },
          {
            href: "/guides/nextjs-ou-wordpress",
            label: "Next.js ou WordPress ?",
          },
          {
            href: "/guides/cout-maintenance-site-internet",
            label: "Coût de la maintenance",
          },
          {
            href: "/guides/combien-de-temps-pour-creer-un-site",
            label: "Combien de temps pour créer un site ?",
          },
          { href: "/services/sites-vitrines", label: "Sites vitrines" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
        ]}
        faqTitle="Refonte et SEO : vos questions"
        faqItems={faqItems}
        showWhitePaperPromo
      >
        <p className="lead">
          Vous devez moderniser votre site, mais certaines pages vous apportent
          déjà des appels, des demandes de devis ou des ventes.{" "}
          <strong>
            Une refonte ne fait pas automatiquement perdre votre visibilité
            Google.
          </strong>{" "}
          Le risque vient surtout des pages supprimées, des adresses modifiées
          sans renvoi, des contenus utiles oubliés ou d’un réglage qui empêche
          Google de voir le nouveau site. La méthode consiste à inventorier ce
          qui fonctionne, conserver les adresses lorsque c’est possible,
          préparer les changements page par page et contrôler les résultats
          après la mise en ligne.
        </p>

        <InfoBox
          variant="blue"
          title="Les cinq règles à transmettre au prestataire"
        >
          Conserver les pages utiles, garder leurs adresses si possible,
          rediriger chaque ancienne page vers son équivalent, vérifier que le
          nouveau site est visible par Google et surveiller les pages
          importantes après le lancement. Le plan de redirection et le suivi
          doivent apparaître dans le devis.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "risque",
              label: "1. Les situations qui changent le niveau de risque",
            },
            {
              id: "avant",
              label: "2. Ce qu’il faut conserver avant la refonte",
            },
            {
              id: "redirections",
              label: "3. Relier les anciennes pages aux nouvelles",
            },
            { id: "site-test", label: "4. Protéger le site de test" },
            { id: "lancement", label: "5. Les contrôles le jour du lancement" },
            { id: "apres", label: "6. Surveiller les semaines suivantes" },
            { id: "urgence", label: "7. Agir après une chute de trafic" },
            {
              id: "changement",
              label: "8. Changer de domaine ou de technologie",
            },
            { id: "contrat", label: "9. Ce que le devis doit prévoir" },
            { id: "decision", label: "10. Le plan complet en cinq étapes" },
          ]}
        />

        <h2 id="risque">
          1. Toutes les refontes n’ont pas le même risque pour Google
        </h2>

        <GuideTable
          headers={[
            "Changement prévu",
            "Risque principal",
            "Décision prudente",
          ]}
          rows={[
            [
              "Nouveau design, mêmes adresses et contenus proches",
              "Erreur technique ou contenu rendu différemment",
              "Contrôler le rendu et conserver les pages importantes",
            ],
            [
              "Nouvelles adresses sur le même domaine",
              "Anciennes pages introuvables",
              "Préparer une redirection pour chaque page utile",
            ],
            [
              "Changement de plateforme",
              "Contenus, balises ou fonctions oubliés",
              "Comparer l’ancien et le nouveau site avant l’ouverture",
            ],
            [
              "Changement de nom de domaine",
              "Tous les signaux doivent être transférés",
              "Séparer cette opération de la refonte si possible",
            ],
          ]}
        />

        <p>
          Google distingue notamment les changements avec et sans modification
          d’adresse. Lorsque les adresses restent identiques, le risque propre
          au déménagement des pages est réduit. Cela ne garantit pas un trafic
          stable si le contenu, les liens, la vitesse ou la mesure changent en
          même temps.
        </p>

        <p>
          Un changement de domaine demande une procédure supplémentaire et un
          suivi plus attentif. Si ce changement n’est pas indispensable au
          projet, traitez-le séparément : vous saurez plus facilement si une
          variation vient du nouveau domaine, des contenus ou de la refonte
          technique.
        </p>

        <h2 id="avant">
          2. Avant la refonte, inventoriez les pages qui comptent
        </h2>

        <p>
          Ne laissez pas le nouveau prestataire découvrir l’ancien site après
          avoir commencé les maquettes. Avant le chantier, rassemblez les
          informations qui montrent ce que les visiteurs et Google utilisent
          déjà.
        </p>

        <ul>
          <li>la liste de toutes les adresses accessibles ;</li>
          <li>les pages qui reçoivent des visites depuis Google ;</li>
          <li>les requêtes qui affichent ces pages ;</li>
          <li>les pages qui produisent des demandes ou des ventes ;</li>
          <li>les liens importants entre les pages ;</li>
          <li>les titres, textes, images et documents à conserver ;</li>
          <li>
            les anciennes campagnes ou liens externes qui utilisent encore
            certaines adresses.
          </li>
        </ul>

        <p>
          La Search Console est l’outil gratuit de Google qui montre notamment
          les requêtes, clics et pages visibles dans ses résultats. Exportez les
          données utiles avant la refonte. Un outil d’exploration du site peut
          compléter l’inventaire en parcourant les pages et leurs liens.
        </p>

        <InfoBox variant="amber" title="Ne réécrivez pas tout au même moment">
          Une nouvelle identité, un nouveau domaine, de nouvelles adresses et
          des contenus entièrement réécrits rendent l’analyse très difficile.
          Conservez ce qui fonctionne et améliorez progressivement lorsque le
          projet le permet.
        </InfoBox>

        <h2 id="redirections">
          3. Chaque ancienne page doit conduire vers sa nouvelle équivalente
        </h2>

        <p>
          Une redirection 301 est un renvoi permanent : lorsqu’un visiteur ou
          Google demande l’ancienne adresse, le serveur l’envoie automatiquement
          vers la nouvelle. Google indique qu’une redirection permanente
          constitue un signal fort et recommande de conserver les redirections
          au moins un an.
        </p>

        <GuideTable
          headers={["Ancienne page", "Nouvelle destination", "Décision"]}
          rows={[
            [
              "/services/plomberie",
              "/plomberie-chambery",
              "Redirection vers l’offre équivalente",
            ],
            [
              "/blog/aide-renovation-2024",
              "/guides/aides-renovation",
              "Redirection si le nouveau contenu reprend réellement le sujet",
            ],
            [
              "/equipe/ancienne-personne",
              "Aucune page équivalente",
              "Évaluer suppression, contenu alternatif ou maintien temporaire",
            ],
          ]}
        />

        <p>
          N’envoyez pas toutes les anciennes pages vers l’accueil. Une
          destination sans rapport aide peu le lecteur et peut être traitée
          comme une erreur par Google. Évitez également les suites de plusieurs
          redirections : l’ancienne adresse doit mener directement à la
          destination finale.
        </p>

        <p>
          Le tableau « ancienne adresse → nouvelle adresse » est souvent appelé
          plan de redirection. Il doit être préparé avant la mise en ligne,
          testé sur un échantillon puis conservé comme livrable.
        </p>

        <h2 id="site-test">
          4. Le site de test doit être caché sans bloquer le futur site
        </h2>

        <p>
          La nouvelle version est généralement préparée sur une adresse
          temporaire. Elle doit rester inaccessible aux moteurs pour éviter la
          publication de copies. Les équipes utilisent souvent une protection
          par mot de passe et une instruction « noindex », qui demande à Google
          de ne pas enregistrer les pages.
        </p>

        <p>
          Le danger apparaît lorsque cette instruction est copiée sur le site
          public. Avant l’ouverture, vérifiez que le nouveau site n’interdit
          plus l’indexation, que son fichier robots.txt ne bloque pas toutes les
          pages et que les adresses définitives sont utilisées dans les liens et
          les balises.
        </p>

        <p>
          Pendant le chantier, comparez les pages importantes avec l’ancien site
          : titres, textes, images, formulaires, liens et données structurées.
          Une page visuellement plus belle peut avoir perdu le contenu qui
          expliquait réellement l’offre.
        </p>

        <h2 id="lancement">
          5. Le jour du lancement, testez avant de fermer l’ancien site
        </h2>

        <p>
          Choisissez un moment où les personnes techniques et métier sont
          disponibles. Conservez une sauvegarde et une procédure permettant de
          remettre l’ancienne version en ligne si une erreur importante
          apparaît.
        </p>

        <ol>
          <li>Vérifier les principales pages sur téléphone et ordinateur.</li>
          <li>Tester les formulaires, achats ou prises de rendez-vous.</li>
          <li>
            Ouvrir plusieurs anciennes adresses et contrôler leur destination.
          </li>
          <li>Confirmer que Google n’est plus bloqué.</li>
          <li>
            Publier le nouveau sitemap, la liste des pages destinée aux moteurs.
          </li>
          <li>Vérifier la mesure d’audience et les objectifs commerciaux.</li>
          <li>Conserver les journaux et noter l’heure de la bascule.</li>
        </ol>

        <InfoBox variant="amber" title="Qui peut autoriser la mise en ligne ?">
          Nommez une personne responsable côté entreprise et une personne côté
          prestataire. Elles doivent connaître les contrôles obligatoires, les
          défauts acceptés temporairement et les conditions qui imposent un
          retour à l’ancienne version.
        </InfoBox>

        <h2 id="apres">
          6. Surveillez les pages importantes pendant plusieurs semaines
        </h2>

        <p>
          Google indique qu’un site petit ou moyen peut demander quelques
          semaines pour que la plupart des pages soient retraitées après un
          changement d’adresses, sans promettre une date de stabilisation. Une
          fluctuation n’est donc pas automatiquement une catastrophe ; une
          baisse persistante doit être examinée.
        </p>

        <GuideTable
          headers={["Moment", "Contrôles prioritaires", "Action"]}
          rows={[
            [
              "Le lendemain",
              "Accès au site, blocage, formulaires, anciennes adresses",
              "Corriger immédiatement les erreurs générales",
            ],
            [
              "Après une semaine",
              "Pages indexées, erreurs et principales requêtes",
              "Comparer aux données conservées avant la refonte",
            ],
            [
              "Après un mois",
              "Trafic, demandes et pages en recul",
              "Auditer les écarts durables",
            ],
            [
              "Après trois mois",
              "Tendances et redirections encore utilisées",
              "Planifier les améliorations sans retirer trop tôt les renvois",
            ],
          ]}
        />

        <p>
          N’appliquez pas un seuil universel à toutes les entreprises.
          Interprétez chaque variation selon la saison, la qualité de la mesure,
          les pages concernées et l’ampleur des changements. Une baisse sur une
          page secondaire ne demande pas la même réaction qu’une disparition du
          formulaire ou des pages qui apportent les demandes.
        </p>

        <h2 id="urgence">
          7. Le trafic a déjà chuté : que vérifier en premier ?
        </h2>

        <ol>
          <li>
            <strong>Le site est-il visible par Google ?</strong> Cherchez une
            instruction noindex ou un blocage général dans robots.txt.
          </li>
          <li>
            <strong>Les anciennes adresses fonctionnent-elles ?</strong> Testez
            manuellement dix pages qui apportaient du trafic.
          </li>
          <li>
            <strong>Les redirections mènent-elles au bon endroit ?</strong>{" "}
            Écartez les renvois généralisés vers l’accueil.
          </li>
          <li>
            <strong>
              Les contenus importants sont-ils toujours présents ?
            </strong>
            Comparez titres, textes et liens avec la version précédente.
          </li>
          <li>
            <strong>La mesure fonctionne-t-elle ?</strong> Une baisse apparente
            peut aussi venir d’un outil d’audience mal réinstallé.
          </li>
        </ol>

        <p>
          Corrigez les causes identifiées sans attendre la fin d’un rapport
          complet. Puis demandez à Google de revisiter les pages importantes
          lorsque cela est pertinent. Le retour dans les résultats dépend de son
          nouveau passage et ne suit pas un délai garanti.
        </p>

        <h2 id="changement">
          8. Changer de domaine ou de technologie demande des précautions
          distinctes
        </h2>

        <p>
          Google ne classe pas un site parce qu’il utilise WordPress, Wix ou
          Next.js. Il analyse les pages accessibles et de nombreux signaux. Une
          migration vers une autre technologie peut améliorer la vitesse ou
          l’exploitation ; elle peut aussi oublier des contenus ou produire un
          rendu difficile à explorer.
        </p>

        <p>
          Lors d’un passage de WordPress à Next.js, conservez les adresses
          lorsque c’est possible, reprenez les contenus et vérifiez les titres,
          liens, métadonnées et fichiers destinés aux moteurs. Les études de cas
          Personio et Renault citées en sources montrent des améliorations dans
          leur contexte ; elles ne prédisent ni votre trafic ni vos conversions.
        </p>

        <p>
          L’outil « Changement d’adresse » de la Search Console est réservé au
          changement de domaine. Il ne s’utilise pas pour une simple refonte sur
          le même domaine. Dans tous les cas, les redirections permanentes
          restent nécessaires lorsque les adresses changent.
        </p>

        <h2 id="contrat">
          9. Le devis doit nommer les livrables qui protègent la visibilité
        </h2>

        <p>Demandez que le contrat ou le devis précise :</p>

        <ul>
          <li>
            l’inventaire de l’ancien site et les données fournies par
            l’entreprise ;
          </li>
          <li>la liste des pages conservées, fusionnées ou supprimées ;</li>
          <li>le plan de redirection et la personne qui le valide ;</li>
          <li>les contrôles du site de test et du jour de lancement ;</li>
          <li>la sauvegarde et la procédure de retour arrière ;</li>
          <li>la période de suivi après la mise en ligne ;</li>
          <li>la correction des erreurs attribuables à la migration ;</li>
          <li>
            les limites : aucune position, aucun trafic et aucune conversion
            garantis.
          </li>
        </ul>

        <p>
          Le prix dépend du nombre de pages, du changement d’adresses, de la
          qualité de l’existant et du suivi attendu. Une petite vitrine demande
          moins de travail qu’un site éditorial ou une boutique avec des
          milliers de produits. Consultez le guide du{" "}
          <Link href="/guides/prix-refonte-site-internet">
            prix d’une refonte de site
          </Link>{" "}
          pour les fourchettes complètes.
        </p>

        <h2 id="decision">10. Le plan complet en cinq étapes</h2>

        <ol>
          <li>
            <strong>Inventorier.</strong> Exporter les pages, les performances
            Google, les conversions et les contenus à préserver.
          </li>
          <li>
            <strong>Décider.</strong> Conserver les adresses utiles et expliquer
            chaque suppression ou changement.
          </li>
          <li>
            <strong>Préparer.</strong> Écrire et tester le plan de redirection,
            la sauvegarde et le retour arrière.
          </li>
          <li>
            <strong>Contrôler.</strong> Vérifier le site de test puis les tâches
            essentielles le jour du lancement.
          </li>
          <li>
            <strong>Surveiller.</strong> Comparer pages, trafic et demandes
            pendant plusieurs semaines et corriger les écarts durables.
          </li>
        </ol>

        <InfoBox variant="emerald" title="La décision la plus sûre">
          Gardez ce qui apporte déjà de la valeur, changez seulement ce qui
          résout un problème identifié et rendez chaque adresse importante
          traçable de l’ancienne version à la nouvelle. La refonte devient alors
          un projet contrôlable, sans promesse irréaliste d’absence totale de
          variation.
        </InfoBox>

        <GuideInlineCTA
          title="Vous voulez savoir quelles pages protéger avant la refonte ?"
          description="Nous pouvons inventorier les pages qui attirent déjà des visiteurs, préparer leurs nouvelles destinations et définir les contrôles à réaliser avant et après la mise en ligne."
          tags={[
            "Pages utiles identifiées",
            "Plan de redirection compréhensible",
            "Suivi prévu dans le devis",
          ]}
        />

        <hr />
        <p className="text-sm">
          <strong>Sources</strong> — références citées dans ce guide (consultées
          en juillet 2026) :{" "}
          <a
            href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Search Central, « Site moves with URL changes » (délais,
            redirections ≥ 1 an, chaînes, une chose à la fois)
          </a>{" "}
          ;{" "}
          <a
            href="https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google, « Site moves without URL changes » (refonte à adresses
            conservées)
          </a>{" "}
          ;{" "}
          <a
            href="https://support.google.com/webmasters/answer/9370220"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google, outil Changement d&apos;adresse (changements de domaine
            uniquement, 180 jours)
          </a>{" "}
          ;{" "}
          <a
            href="https://developers.google.com/search/docs/crawling-indexing/301-redirects"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google, « Redirects and Google Search » (301/308 comme signal
            canonique fort)
          </a>{" "}
          ;{" "}
          <a
            href="https://developers.google.com/search/docs/appearance/page-experience"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google, « Understanding page experience » (Core Web Vitals et
            classement)
          </a>{" "}
          ;{" "}
          <a
            href="https://web.dev/articles/vitals"
            target="_blank"
            rel="noopener noreferrer"
          >
            web.dev, seuils officiels des Core Web Vitals
          </a>{" "}
          ;{" "}
          <a
            href="https://web.dev/case-studies/renault"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google/web.dev, cas Renault (1 s de LCP = +13 % de conversions)
          </a>{" "}
          ;{" "}
          <a
            href="https://vercel.com/blog/from-wordpress-monolith-to-vercel-personio-elevates-site-performance"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel, migration Personio WordPress → Next.js (source éditeur)
          </a>
          .
        </p>
        <p className="text-sm">
          <em>
            Google ne publie aucun seuil universel de baisse acceptable après
            une refonte. Chaque migration a son contexte : comparez les mêmes
            pages et les mêmes périodes, puis cherchez la cause des écarts. Les
            règles Google citées évoluent : vérifiez la documentation officielle
            en cas de doute.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
