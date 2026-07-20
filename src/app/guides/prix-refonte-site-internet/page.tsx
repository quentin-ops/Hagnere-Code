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

const guide = getGuide("prix-refonte-site-internet");

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
      "Refonte de site internet",
      "Migration SEO",
      "Next.js",
      "React",
      "Performance web",
      "Chiffrage de projets web",
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
    { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Refonte de site internet : le vrai prix",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Combien coûte une refonte de site internet ?",
    answer:
      "Les fourchettes de marché en France en 2026 : 500 à 3 000 € pour un relooking graphique seul, 1 500 à 8 000 € pour la refonte complète d'un site vitrine de TPE, 3 000 à 15 000 € pour un site PME de 15 à 30 pages, 5 000 à 40 000 € pour un e-commerce, et 15 000 à 80 000 € et plus pour une plateforme sur mesure. Ajoutez le poste que la plupart des devis oublient : la migration SEO (1 500 à 10 000 € selon la taille du site), qui protège votre trafic Google existant.",
  },
  {
    question: "Combien coûte en moyenne la refonte d'un site web pour une PME ?",
    answer:
      "Pour un site vitrine de PME de 15 à 30 pages, comptez 3 000 à 7 000 € chez un indépendant et 6 000 à 15 000 € en agence, migration des contenus comprise. Plusieurs sources avancent une médiane de marché autour de 7 000 € — un ordre de grandeur crédible, mais recopié de site en site sans étude publique vérifiable. Chez Hagnéré Code, une refonte vers un socle moderne suit notre grille publique : 6 900 €, 14 900 € ou 22 000 € et plus selon l'ambition, plan de migration SEO inclus.",
  },
  {
    question: "Pourquoi les prix d'une refonte varient-ils autant d'une agence à l'autre ?",
    answer:
      "Quatre raisons principales : le périmètre supposé (« refondre le site » peut inclure ou non la réécriture des contenus, les photos, la migration SEO) ; le positionnement du prestataire (taux journaliers de 250 à 700 € en indépendant, 600 à 1 500 € en agence) ; l'état de votre site actuel (un site propre se migre vite, un site bricolé pendant dix ans se déminera ligne par ligne) ; et ce qui est retiré du devis pour paraître moins cher — presque toujours l'audit, les redirections et les tests. Comparez à périmètre écrit égal, jamais sur le montant seul.",
  },
  {
    question: "Est-ce qu'une refonte fait perdre son référencement sur Google ?",
    answer:
      "Une refonte peut faire varier le trafic et les positions ; aucune méthode ne permet d'en garantir le maintien. Google recommande notamment de faire correspondre les anciennes et nouvelles adresses, d'utiliser des redirections permanentes pertinentes et de les conserver généralement au moins un an. Inventoriez les pages et leurs performances avant la bascule, testez chaque redirection et surveillez l'indexation après publication.",
  },
  {
    question: "Combien de temps dure une refonte de site web ?",
    answer:
      "Comptez 3 à 5 semaines pour la refonte d'un site vitrine simple, 4 à 8 semaines pour un site de PME avec design sur mesure, 6 à 12 semaines pour un e-commerce, et plusieurs mois pour une plateforme complexe. Ajoutez la phase de surveillance après la mise en ligne : 30 jours minimum de suivi du trafic et des positions dans la Search Console. Le vrai facteur de délai est souvent côté client : la disponibilité pour valider les maquettes, relire les contenus et tester le site avant bascule.",
  },
  {
    question: "Faut-il refaire son site ou simplement l'optimiser ?",
    answer:
      "Un symptôme isolé peut souvent se corriger sans refonte. Lorsque plusieurs problèmes structurels se cumulent — mobile, technologie non maintenue, architecture ou contenu — comparez explicitement une correction ciblée et une reconstruction. La décision doit venir d'un audit du site, pas d'un pourcentage maison invérifiable.",
  },
  {
    question: "À quelle fréquence faut-il refaire son site internet ?",
    answer:
      "Il n'existe pas de durée de vie universelle. Décidez à partir de signaux observables : objectifs non servis, technologie non maintenue, risques de sécurité, accessibilité, performance, difficultés éditoriales ou architecture devenue inadaptée. Un audit peut conclure à une correction ciblée plutôt qu'à une refonte, quel que soit l'âge du site.",
  },
  {
    question: "Quelle est la différence entre migration de site et refonte ?",
    answer:
      "La refonte, c'est reconstruire le site : design, contenus, parfois la technologie. La migration, c'est déplacer l'existant : changer d'hébergeur, de nom de domaine ou de logiciel de gestion de contenu, sans nécessairement toucher à l'apparence. Une refonte inclut presque toujours une migration (les adresses des pages changent), mais une migration peut se faire sans refonte. C'est la refonte simultanée qui concentre les risques : on change tout en même temps, et si le trafic chute, on ne sait plus quelle cause chercher.",
  },
  {
    question: "Quel est le tarif d'une migration de site internet ?",
    answer:
      "Un simple transfert d'hébergeur se facture quelques centaines d'euros. Une migration de contenus seule (transférer les pages vers le nouveau site, sans réécriture) coûte 200 à 1 500 € pour un site de TPE/PME. Une prestation de migration SEO complète — inventaire des adresses, plan de redirections, contrôles après bascule — se facture 1 500 à 10 000 € selon le volume de pages, et des accompagnements complets existent à partir d'environ 2 000 €. Un changement de plateforme e-commerce accompagné coûte 3 000 à 10 000 €, hors refonte graphique.",
  },
  {
    question: "Comment changer de site sans perdre son référencement ?",
    answer:
      "Cinq gestes, tous documentés par Google : inventorier 100 % des adresses de pages existantes avant la bascule ; rediriger chaque ancienne page vers sa nouvelle équivalente exacte (jamais tout vers l'accueil, que Google traite comme une erreur) ; conserver les contenus qui vous rapportent du trafic ; garder les redirections au moins un an ; et surveiller la Search Console pendant les 30 jours qui suivent. Exigez que ces cinq gestes figurent, chiffrés, dans le devis — c'est le poste « migration SEO », détaillé dans la section 7 de ce guide.",
  },
  {
    question: "Peut-on refaire son site web sans le mettre hors ligne ?",
    answer:
      "Généralement, oui : le nouveau site se construit sur un environnement de préproduction pendant que l'ancien reste accessible. La bascule intervient après les tests et la préparation des redirections. Une interruption peut néanmoins être nécessaire pour certaines migrations de données ou opérations DNS ; le devis doit préciser la fenêtre, le plan de retour arrière et la communication prévue.",
  },
  {
    question: "Faut-il prévoir un budget de maintenance après la refonte ?",
    answer:
      "Oui : le devis doit préciser l'hébergement, la surveillance, les mises à jour, les sauvegardes, le support, les délais d'intervention et les évolutions incluses ou exclues. Le montant ne se déduit pas d'un pourcentage universel du prix de création ; il dépend du socle, des services tiers, du niveau de service et du rythme d'évolution attendu.",
  },
  {
    question: "Une refonte de site est-elle éligible aux aides publiques ?",
    answer:
      "Cela dépend du dispositif : certains financent une refonte ou des fonctions numériques précises, d'autres excluent les sites vitrines ou les dépenses déjà engagées. Vérifiez la fiche officielle, l'état du guichet, les dépenses éligibles, la date autorisée de commencement et le calendrier de versement, puis demandez une confirmation écrite à l'organisme instructeur.",
  },
];


export default function Page() {
  return (
    <GuidesShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <GuideLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: "Refonte de site internet : le vrai prix" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Les grilles 2026 par type de site, le poste migration SEO que les devis oublient — enfin chiffré —, une simulation détaillée ligne à ligne, le coût de ne rien faire, et l'honnêteté de vous dire quand une refonte ne se justifie pas."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "Vitrine : 1 500 – 15 000 €", description: "", color: "violet" },
          { number: "02", title: "Migration SEO : 1 500 – 10 000 €", description: "", color: "blue" },
          { number: "03", title: "Redirections : 1 an minimum", description: "", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/guides/combien-coute-un-site-internet", label: "Combien coûte un site internet ?" },
          { href: "/guides/prix-site-vitrine", label: "Prix d'un site vitrine" },
          { href: "/guides/nextjs-ou-wordpress", label: "Next.js ou WordPress ?" },
          { href: "/ressources/kit-cahier-des-charges-site-internet", label: "Modèle de cahier des charges" },
          { href: "/services/sites-vitrines", label: "Sites vitrines sur mesure" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
        ]}
        faqTitle="Prix d'une refonte de site : vos questions"
        faqItems={faqItems}
        showWhitePaperPromo
      >
        <p className="lead">
          Une refonte de site a une particularité qu&apos;aucun autre projet
          web ne partage : <strong>vous avez déjà quelque chose à
          perdre</strong>. Votre trafic Google, vos clients qui vous
          trouvent, vos demandes entrantes. Ce guide donne les vraies
          fourchettes 2026, chiffre le poste que les devis passent sous
          silence — la migration SEO — et assume de vous dire quand il ne
          faut <em>pas</em> refondre.
        </p>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. La réponse rapide : les fourchettes 2026" },
            { id: "de-quoi-parle-t-on", label: "2. Refonte, migration, optimisation : de quoi parle-t-on" },
            { id: "faut-il-refondre", label: "3. Faut-il vraiment refondre ? Les 7 signaux — et les contre-signaux" },
            { id: "partielle-ou-totale", label: "4. Refonte partielle, totale ou progressive : l'écart de prix" },
            { id: "prix-par-type", label: "5. Les prix 2026 par type de site" },
            { id: "refonte-vs-creation", label: "6. Le mythe « une refonte coûte moins cher qu'une création »" },
            { id: "migration-seo", label: "7. Migration SEO : le poste invisible des devis, enfin chiffré" },
            { id: "mecanique-301", label: "8. Redirections 301 : la mécanique, et les erreurs qui détruisent" },
            { id: "devis-reel", label: "9. Une simulation de refonte, décortiquée ligne à ligne" },
            { id: "wordpress-nextjs", label: "10. De WordPress à un site moderne : le vrai budget" },
            { id: "cout-inaction", label: "11. Le coût de ne rien faire" },
            { id: "tco", label: "12. Le vrai coût sur 3 ans" },
            { id: "erreurs", label: "13. Les 6 erreurs de refonte qui coûtent cher" },
            { id: "preparer", label: "14. Préparer sa refonte : cahier des charges et aides" },
            { id: "methode", label: "15. Méthode : réussir sa refonte en 5 étapes" },
          ]}
        />

        <h2 id="reponse-rapide">1. La réponse rapide : les fourchettes 2026</h2>
        <p>
          En 2026, une refonte de site internet coûte en France{" "}
          <strong>500 à 3 000 € pour un relooking graphique seul</strong>,{" "}
          <strong>1 500 à 8 000 € pour la refonte complète d&apos;un site
          vitrine de TPE</strong>, <strong>3 000 à 15 000 € pour un site
          de PME</strong> (15 à 30 pages), <strong>5 000 à 40 000 € pour
          un e-commerce</strong> et <strong>15 000 à 80 000 € et plus pour
          une plateforme sur mesure</strong>. S&apos;y ajoute le poste que
          la plupart des devis oublient : la <strong>migration SEO
          (1 500 à 10 000 €)</strong>, qui réduit les risques techniques de perte de trafic sans garantir le maintien des positions
          Google au moment de la bascule.
        </p>
        <GuideTable
          headers={["Type de refonte", "Budget 2026", "Délai typique", "Le piège à surveiller"]}
          rows={[
            ["Relooking graphique seul", "500 – 3 000 €", "2 – 4 semaines", "Ne corrige ni la vitesse ni la technique"],
            ["Site vitrine TPE (5-10 pages)", "1 500 – 8 000 €", "3 – 5 semaines", "La migration SEO absente du devis"],
            ["Site PME (15-30 pages)", "3 000 – 15 000 €", "4 – 8 semaines", "Contenus à réécrire, souvent hors devis"],
            ["E-commerce", "5 000 – 40 000 €", "6 – 12 semaines", "Changement de plateforme = migration lourde"],
            ["Plateforme / sur-mesure", "15 000 – 80 000 €+", "3 – 6 mois et plus", "Refonte + migration menées en même temps"],
            ["Migration SEO (le poste oublié)", "1 500 – 10 000 €", "inclus dans le projet", "Absent = jusqu'à -90 % de visibilité Google (section 8)"],
          ]}
        />

        <InfoBox variant="blue" title="Les 12 mots de ce guide, traduits en français courant">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>Refonte</strong> : reconstruire un site existant — design, contenus, parfois la technologie.</li>
            <li><strong>Migration</strong> : le déménagement des pages d&apos;un site vers de nouvelles adresses, un nouvel hébergeur ou un nouveau logiciel.</li>
            <li><strong>SEO (référencement naturel)</strong> : tout ce qui fait que Google vous affiche dans ses résultats — gratuitement, contrairement à la publicité.</li>
            <li><strong>Trafic organique</strong> : les visiteurs qui arrivent par ces résultats Google, sans publicité.</li>
            <li><strong>CMS</strong> : le logiciel qui gère le contenu du site (WordPress est le plus connu).</li>
            <li><strong>Redirection 301</strong> : le « contrat de réexpédition du courrier » d&apos;une page qui déménage — elle envoie visiteurs et Google de l&apos;ancienne adresse vers la nouvelle.</li>
            <li><strong>Préproduction</strong> : la copie de travail du nouveau site, invisible du public, pendant que l&apos;actuel continue de tourner.</li>
            <li><strong>Recette</strong> : la phase de tests avant mise en ligne — formulaires, paiement, vitesse, mobile.</li>
            <li><strong>Core Web Vitals</strong> : les trois mesures de vitesse et de stabilité que Google utilise comme « contrôle technique » des sites.</li>
            <li><strong>Tracking</strong> : les outils de mesure d&apos;audience (Google Analytics…) qui comptent vos visites et vos demandes.</li>
            <li><strong>Search Console</strong> : le tableau de bord gratuit où Google vous montre vos positions, votre trafic et les erreurs qu&apos;il rencontre.</li>
            <li><strong>Maillage interne</strong> : les liens entre les pages de votre propre site, qui guident les visiteurs et Google.</li>
          </ul>
        </InfoBox>

        <h2 id="de-quoi-parle-t-on">2. Refonte, migration, optimisation : de quoi parle-t-on</h2>
        <p>
          Trois mots que les devis mélangent, trois chantiers différents.{" "}
          <strong>L&apos;optimisation</strong> améliore le site existant
          sans le reconstruire : accélérer les pages, retravailler des
          contenus, corriger le parcours de contact.{" "}
          <strong>La migration</strong> déménage l&apos;existant — nouvel
          hébergeur, nouveau nom de domaine ou nouveau CMS — sans
          forcément changer l&apos;apparence. <strong>La refonte</strong>{" "}
          reconstruit : design, structure, souvent la technologie. Et
          comme les adresses des pages changent presque toujours au
          passage, <strong>une refonte embarque une migration</strong> —
          c&apos;est ce cumul qui fait son prix, et son risque.
        </p>
        <p>
          L&apos;image la plus juste est celle d&apos;un commerce qui
          déménage : refaire la boutique est une chose, prévenir les
          habitués pour qu&apos;ils retrouvent la nouvelle adresse en est
          une autre. Tout ce guide tient dans cette distinction — le prix
          de la nouvelle boutique, et le prix de ne perdre aucun client en
          route.
        </p>
        <p>
          Pour rendre les chiffres concrets, suivons un fil rouge de bout
          en bout : <strong>scénario fictif composite — ni client ni
          témoignage réel — avec l&apos;Hôtel du Lac, 15 chambres à
          Aix-les-Bains</strong>. Son site serait un WordPress de 2019, une
          soixantaine de pages, 5,8 secondes de chargement sur mobile, et
          un enjeu vital — environ 45 % de ses réservations arriveraient en
          direct par le site, dont la moitié via Google. Refondre, pour
          lui, c&apos;est toucher à la machine qui remplit les chambres.
          Nous allons chiffrer sa refonte ligne à ligne.
        </p>

        <h2 id="faut-il-refondre">3. Faut-il vraiment refondre ? Les 7 signaux — et les contre-signaux</h2>
        <p>
          Commençons par la question que les pages « prix d&apos;une
          refonte » évitent soigneusement, puisqu&apos;elles vendent des
          refontes : <strong>la vôtre est-elle justifiée ?</strong> Les
          sept signaux utiles à vérifier dans un audit :
        </p>
        <ul>
          <li><strong>Votre site n&apos;est pas pensé pour le mobile</strong> — or 6 à 7 visites sur 10 se font désormais sur téléphone.</li>
          <li><strong>Ses performances sont insuffisantes pour vos visiteurs</strong> : examinez les Core Web Vitals de terrain, les appareils et vos conversions, sans transformer un seuil de laboratoire en perte de clients certaine.</li>
          <li><strong>Sa technologie n&apos;est plus maintenue</strong> — CMS sans mises à jour de sécurité, prestataire disparu, thème abandonné.</li>
          <li><strong>Votre image a évolué, pas le site</strong> : nouveaux services, nouveau positionnement, et une vitrine qui raconte l&apos;entreprise d&apos;il y a cinq ans.</li>
          <li><strong>Du trafic, mais pas de demandes</strong> : les visiteurs viennent et repartent sans vous contacter. Attention, c&apos;est le symptôme le plus souvent mal diagnostiqué — notre guide <Link href="/guides/pourquoi-mon-site-ne-convertit-pas">pourquoi mon site ne convertit pas</Link> montre que le chiffre affiché est faux dans les deux sens.</li>
          <li><strong>Le trafic chute durablement</strong> malgré les optimisations.</li>
          <li><strong>Impossible de modifier le site vous-même</strong> sans facturer un développeur à chaque changement d&apos;horaires.</li>
        </ul>
        <p>
          Et les contre-signaux, tout aussi importants : un site lent mais
          bien construit s&apos;accélère pour 1 000 à 3 000 €
          d&apos;optimisation ciblée — c&apos;est précisément ce que
          tranche un{" "}
          <Link href="/services/audit-technique">audit technique
          préalable</Link>, et notre guide{" "}
          <Link href="/guides/pourquoi-mon-site-est-lent">pourquoi mon site
          est lent</Link> détaille les cinq signaux qui font basculer du
          réglage vers la refonte ; un référencement décevant se
          travaille sans rien casser ; une page de contact qui convertit
          mal se reteste en quelques jours. Aucun pourcentage universel ne
          permet de décider&nbsp;: l&apos;audit doit comparer le coût, le risque
          et la durée d&apos;une correction ciblée avec ceux d&apos;une refonte.
        </p>
        <InfoBox variant="emerald" title="Un scénario de diagnostic, pas une règle automatique">
          Un symptôme isolé se soigne : la vitesse s&apos;optimise, une
          page se réécrit, un formulaire se répare. Plusieurs symptômes
          combinés peuvent justifier de chiffrer une refonte, mais l&apos;audit
          doit encore la comparer à des corrections ciblées. Dans le scénario
          fictif de l&apos;Hôtel du Lac, les constats servent uniquement à montrer
          cette méthode ; ils ne constituent pas un seuil universel.
        </InfoBox>

        <h2 id="partielle-ou-totale">4. Refonte partielle, totale ou progressive : l&apos;écart de prix</h2>
        <p>
          Toutes les refontes ne rasent pas la maison. Trois approches,
          trois budgets, trois niveaux de risque pour votre trafic
          Google :
        </p>
        <GuideTable
          headers={["Approche", "Budget vitrine/PME", "Risque SEO", "Quand c'est le bon choix"]}
          rows={[
            ["Partielle (design seul, structure conservée)", "500 – 3 000 €", "Faible : les adresses ne bougent pas", "Le site fonctionne, seule l'apparence date"],
            ["Partielle (structure retouchée, pages clés)", "3 000 – 8 000 €", "Moyen : quelques adresses changent", "Parcours de contact à revoir, offre qui a évolué"],
            ["Totale (design + structure + technologie)", "5 000 – 15 000 € (20 000 €+ si changement de technologie, section 10)", "Élevé : tout change en même temps", "Technologie morte, mobile, image — 3 symptômes"],
            ["Progressive (page par page, par étapes)", "au fil de l'eau", "Maîtrisé : une partie à la fois", "Gros site, trafic précieux, budget étalé"],
          ]}
        />
        <p>
          La lecture importante de ce tableau n&apos;est pas la colonne
          budget, c&apos;est la colonne risque : <strong>plus on change de
          choses en même temps, plus la migration doit être
          soignée</strong> — et budgétée. Une refonte totale sans le poste
          migration SEO de la section 7 n&apos;est pas une refonte moins
          chère : c&apos;est une refonte à laquelle il manque une roue.
          La méthode complète pour protéger votre trafic — mythes
          démontés, protocole de surveillance daté, plan
          d&apos;urgence — fait l&apos;objet de notre{" "}
          <Link href="/guides/refonte-sans-perdre-son-seo">guide
          « refondre sans perdre son SEO »</Link>.
        </p>

        <h2 id="prix-par-type">5. Les prix 2026 par type de site</h2>
        <p>
          La grille détaillée, croisée à partir des tarifs publiés par
          plusieurs agences et indépendants français concurrents — pour
          neutraliser le biais commercial de chacun :
        </p>
        <GuideTable
          headers={["Votre site", "Indépendant", "Agence", "Délai typique"]}
          rows={[
            ["Vitrine 5-10 pages", "1 500 – 4 000 €", "3 500 – 8 000 €", "3 – 5 semaines"],
            ["Site PME 15-30 pages", "3 000 – 7 000 €", "6 000 – 15 000 €", "4 – 8 semaines"],
            ["E-commerce (selon catalogue)", "5 000 – 12 000 €", "10 000 – 40 000 €", "6 – 12 semaines"],
            ["Corporate / plateforme", "6 000 – 15 000 € (corporate ; une plateforme relève d'une agence)", "15 000 – 80 000 €+", "3 – 6 mois"],
            ["Changement de plateforme e-commerce", "—", "3 000 – 10 000 € (accompagné) à 15 000 – 60 000 € (refonte complète)", "2 – 6 mois"],
          ]}
        />
        <p>
          Ces fourchettes reflètent des taux journaliers de 250 à 700 €
          chez les indépendants et de 600 à 1 500 € en agence — le même
          travail, à des niveaux de séniorité, de garanties et
          d&apos;accompagnement différents. Plusieurs sources citent une
          médiane de marché autour de 7 000 € ; l&apos;ordre de grandeur
          est plausible, mais le chiffre circule de site en site sans
          étude publique derrière — prenez-le pour ce qu&apos;il est.
          Pour situer notre grille dans ce paysage : chez Hagnéré Code,
          une refonte se chiffre comme une création sur socle moderne —{" "}
          <strong>6 900 €, 14 900 € ou 22 000 € et plus</strong> selon
          l&apos;ambition — parce que nous reconstruisons proprement
          plutôt que de rafistoler, et le plan de migration SEO est
          inclus, pas en option. Le détail gamme par gamme est dans notre{" "}
          <Link href="/guides/prix-site-vitrine">guide du prix
          d&apos;un site vitrine</Link> ; et si votre refonte est celle
          d&apos;une boutique qui hésite entre rester sur sa plateforme
          et passer au sur-mesure, notre{" "}
          <Link href="/guides/shopify-ou-sur-mesure">comparatif Shopify
          ou e-commerce sur mesure</Link> chiffre précisément cet
          arbitrage.
        </p>

        <h2 id="refonte-vs-creation">6. Le mythe « une refonte coûte moins cher qu&apos;une création »</h2>
        <p>
          L&apos;intuition semble logique : le site existe déjà, il
          devrait y avoir moins à faire. La réalité des devis dit autre
          chose. Une refonte reprend <strong>tous les postes d&apos;une
          création</strong> — conception, design, développement,
          contenus — et y ajoute <strong>des postes qui n&apos;existent
          que pour elle</strong> :
        </p>
        <FormulaBox>
          <strong>Prix d&apos;une refonte = prix d&apos;une création
          (conception + design + développement + contenus)</strong>
          <br />
          <strong>+ les postes propres à la refonte :</strong>
          <br />
          Audit de l&apos;existant (ce qui marche, ce qui rapporte) —
          800 à 4 000 €
          <br />
          Migration des contenus (transférer les pages) — 200 à 1 500 €,
          ou 250 à 500 € par page s&apos;il faut réécrire
          <br />
          Plan de redirections 301 (le courrier réexpédié) — 1 000 à
          5 000 €
          <br />
          Tests et suivi SEO après bascule — 800 à 2 500 €
        </FormulaBox>
        <p>
          La refonte ne coûte donc moins cher qu&apos;une création que si
          vos contenus et votre image sont réutilisables tels quels — le
          cas « iso-contenu », où l&apos;on transfère sans réécrire. Si le
          site actuel traîne dix ans de bricolages, de pages en doublon et
          de textes à reprendre, <strong>la refonte peut coûter le prix
          du neuf, voire davantage</strong> : il faut d&apos;abord déminer
          avant de reconstruire. C&apos;est l&apos;audit initial — 5 à
          15 % du budget — qui dit dans quel cas vous êtes, et c&apos;est
          pour cela qu&apos;un devis de refonte sérieux ne peut pas
          s&apos;écrire sans avoir regardé votre site.
        </p>

        <h2 id="migration-seo">7. Migration SEO : le poste invisible des devis, enfin chiffré</h2>
        <p>
          Voici le cœur de ce guide. Votre référencement repose notamment sur des années de
          contenus, de liens et de positions qui vous apportent des
          visites. Une refonte modifie parfois les adresses, le contenu, le
          maillage et le rendu. Son effet varie selon le site et aucune étude
          tierce ne permet de promettre un délai de récupération. Le plan doit
          donc partir de vos propres données, suivre les recommandations de
          Google et prévoir une surveillance après la bascule.
        </p>
        <p>
          Ce travail d&apos;exécution a un nom, la migration SEO, et des
          prix de marché parfaitement chiffrables :
        </p>
        <GuideTable
          headers={["Poste migration SEO", "Prix marché 2026", "Ce que c'est, en clair"]}
          rows={[
            ["Audit avant refonte", "800 – 4 000 €", "Inventaire des pages, de ce qui est bien classé dans Google et rapporte — la carte avant le déménagement"],
            ["Plan de redirections 301", "1 000 – 5 000 €", "Chaque ancienne adresse reliée à sa nouvelle équivalente, une par une"],
            ["Tests SEO et vitesse après bascule", "800 – 2 500 €", "Vérifier les redirections, la vitesse, les balises (les étiquettes techniques que Google lit sur chaque page) — avant que Google ne repasse"],
            ["Surveillance post-lancement (30-90 jours)", "300 – 1 500 €", "Suivre positions et erreurs dans la Search Console, corriger vite"],
            ["Prestation de migration complète", "1 500 – 10 000 €", "Les quatre lignes ci-dessus, par un spécialiste, selon la taille du site"],
          ]}
        />
        <p>
          Pour un site de PME, ce poste représente couramment{" "}
          <strong>15 à 30 % du budget de refonte</strong>. Appliquons ce
          calcul aux hypothèses du fil rouge : l&apos;Hôtel du Lac encaisserait
          environ 90 000 € de réservations par an venues de Google. Une migration
          ratée qui divise ce trafic par deux pendant six mois coûte
          autour de <strong>22 500 € de nuitées envolées</strong> — cinq
          fois le prix du poste migration SEO de son devis (section 9).
          Vue ainsi, la ligne « plan de redirections » n&apos;est pas un
          supplément : c&apos;est l&apos;assurance du fonds de commerce.
        </p>

        <h2 id="mecanique-301">8. Redirections 301 : la mécanique, et les erreurs qui détruisent</h2>
        <p>
          La redirection 301 est le contrat de réexpédition du courrier
          de votre site. Quand une page déménage — nouvelle adresse,
          nouvelle structure — la 301 dit à Google et aux visiteurs :
          « cette page vit désormais ici ». La{" "}
          <a href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" target="_blank" rel="noopener noreferrer">documentation
          officielle de Google</a> est limpide sur la mécanique : une
          redirection permanente transfère les signaux accumulés —
          comprenez : la réputation que la page s&apos;est construite
          auprès de Google au fil des années — vers la nouvelle adresse,
          et depuis 2016, Google a confirmé
          qu&apos;<strong>aucune « valeur SEO » n&apos;est perdue en
          route</strong>, contrairement à une croyance tenace. Trois
          règles officielles complètent le tableau : rediriger{" "}
          <strong>page par page vers l&apos;équivalent exact</strong>{" "}
          (tout renvoyer vers l&apos;accueil est traité comme une erreur,
          dite « soft 404 », et finit désindexé) ; éviter les chaînes de
          redirections (Google n&apos;en suit que 10, les praticiens
          visent moins de 3) ; et <strong>conserver les redirections au
          moins un an</strong>.
        </p>
        <p>
          Quand ces règles sont ignorées, les dégâts sont documentés — y
          compris chez ceux qu&apos;on croirait à l&apos;abri. Topshop,
          redirigé en masse après son rachat par ASOS :{" "}
          <strong>près de 80 % de visibilité Google perdue</strong>,
          mesurée par l&apos;outil d&apos;analyse Sistrix. LoveKnitting,
          fusionné dans LoveCrafts avec des redirections « en vrac » vers
          l&apos;accueil : visibilité quasi anéantie. Et le cas le plus
          parlant : WooCommerce — l&apos;éditeur de la première solution
          e-commerce du monde — a migré son site vers un nouveau domaine
          en 2023, a vu sa visibilité s&apos;effondrer d&apos;environ
          90 %, et a officiellement <strong>fait machine arrière cinq
          mois plus tard</strong>. Si un géant du web peut rater sa
          migration, votre prestataire le peut aussi ; la différence se
          joue dans la méthode, pas dans la taille. Le corollaire
          rassurant, souligné par Sistrix : ce n&apos;est presque jamais
          Google qui casse un site refondu — ce sont des erreurs
          humaines, toutes évitables.
        </p>
        <InfoBox variant="amber" title="Les 3 erreurs qui détruisent le trafic">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>Tout rediriger vers la page d&apos;accueil.</strong> Google traite ces redirections comme des erreurs (« soft 404 ») : les pages disparaissent des résultats au lieu de transmettre leur acquis.</li>
            <li><strong>Supprimer les redirections au bout de quelques mois.</strong> Le transfert des signaux prend du temps : Google demande de garder les 301 au moins un an — faites-le écrire au contrat.</li>
            <li><strong>Supprimer ou réécrire les pages qui rapportent.</strong> Une page bien positionnée qui disparaît sans équivalent, c&apos;est sa file de clients qu&apos;on renvoie. On regarde la Search Console avant de tailler.</li>
          </ul>
        </InfoBox>
        <p>
          Au-delà des redirections, quatre choses doivent survivre à la
          bascule : les <strong>contenus bien classés dans Google</strong>{" "}
          (transférés à l&apos;équivalent exact), le{" "}
          <strong>maillage interne</strong>{" "}
          (les liens entre vos pages, que Google lit comme un plan du
          site), les <strong>données structurées</strong> (le balisage
          invisible qui vous vaut étoiles et questions-réponses dans les
          résultats), et la <strong>vitesse</strong> — les Core Web
          Vitals, le « contrôle technique » de Google, sont un signal de
          classement officiel : un nouveau site plus lent que
          l&apos;ancien part avec un malus. Exigez la comparaison
          avant/après dans la recette.
        </p>

        <h2 id="devis-reel">9. Une simulation de refonte, décortiquée ligne à ligne</h2>
        <p>
          Voici une simulation complète et reproductible construite à partir
          des hypothèses visibles de notre fil rouge : l&apos;Hôtel du Lac,
          WordPress 2019, une soixantaine de pages, vers un site moderne.
          Il ne s&apos;agit ni d&apos;un devis client ni d&apos;un document
          anonymisé. Taux journalier retenu pour le calcul : 650 € HT.
        </p>
        <FormulaBox>
          <strong>Devis « refonte + migration » — 25 jours, 16 250 € HT</strong>
          <br />
          Audit de l&apos;existant : inventaire des 60 pages, Search
          Console, pages qui rapportent (2 j) — 1 300 €
          <br />
          Maquettes des écrans clés, avec un cycle de validation prévu (5 j) —
          3 250 €
          <br />
          Développement du nouveau site : 8 modèles de page — les
          « moules » réutilisés pour produire les 60 pages (8 j) —
          5 200 €
          <br />
          Migration des contenus à iso-contenu, retouches légères (3 j) —
          1 950 €
          <br />
          Plan de redirections 301, adresse par adresse, validé (2 j) —
          1 300 €
          <br />
          Recette : formulaires, moteur de réservation, tracking, vitesse
          avant/après (2 j) — 1 300 €
          <br />
          Bascule en période creuse + surveillance Search Console 30
          jours (2 j) — 1 300 €
          <br />
          Formation + transfert de propriété du code (1 j) — 650 €
        </FormulaBox>
        <p>
          Trois enseignements. D&apos;abord, <strong>environ 4 500 € —
          plus d&apos;un quart du devis — servent à protéger
          l&apos;acquis</strong> : l&apos;audit de l&apos;existant
          (1 300 €), le plan de redirections (1 300 €), la bascule et la
          surveillance Search Console (1 300 €) et la part SEO de la
          recette — la comparaison de vitesse avant/après (≈ 600 €).
          C&apos;est précisément ce que les devis low-cost retirent pour
          afficher 4 900 €, et la section 7 a chiffré ce que cette
          « économie » peut coûter en nuitées.
          Ensuite, chaque ligne est en jours : vous pouvez discuter,
          prioriser, retirer en connaissance de cause. Enfin, la bascule
          est datée en période creuse — pour un hôtel de Savoie, novembre,
          jamais juin : basculer à trois semaines de la haute saison,
          c&apos;est tester le parachute au moment de sauter.
        </p>

        <GuideInlineCTA
          title="Votre site mérite-t-il une refonte — ou un bon réglage ?"
          description="Décrivez votre site et vos objectifs en 3 minutes : nous visons une réponse personnelle le prochain jour ouvré, sans délai garanti, avec un avis franc — refonte justifiée ou simple optimisation — et une fourchette argumentée en jours par poste, plan de migration SEO compris."
          tags={["Objectif : prochain jour ouvré", "Avis franc : refondre ou optimiser", "Migration SEO incluse"]}
        />

        <h2 id="wordpress-nextjs">10. De WordPress à un site moderne : le vrai budget</h2>
        <p>
          Le cas le plus fréquent en 2026 : un WordPress de 2018-2020,
          alourdi d&apos;extensions, lent sur mobile, piraté une fois ou
          deux, dont le prestataire d&apos;origine a disparu. La refonte
          est le bon moment pour poser la question du socle : rester sur
          WordPress, ou passer sur une technologie moderne comme Next.js
          (le cadre de développement que nous utilisons, où le site est
          généré à l&apos;avance et servi d&apos;un bloc — d&apos;où sa
          vitesse) ? C&apos;est le socle que détaille notre page{" "}
          <Link href="/agence-next-js">agence Next.js</Link>, migrations
          WordPress comprises.
        </p>
        <GuideTable
          headers={["Option", "Budget refonte", "Ce que ça change au quotidien"]}
          rows={[
            ["Rester sur WordPress (nouveau thème, nettoyage)", "1 500 – 8 000 €", "Repart propre, mais même socle : extensions, mises à jour, vigilance sécurité"],
            ["WordPress → site moderne (Next.js)", "6 900 – 22 000 €+ (notre grille)", "Vitesse, sécurité par conception, maintenance allégée — et migration SEO incluse"],
          ]}
        />
        <p>
          L&apos;honnêteté d&apos;abord : <strong>rester sur WordPress
          est parfois le bon choix</strong> — budget serré sous 5 000 €,
          équipe qui publie chaque semaine et tient à son interface,
          dépendance à des extensions métier bien maintenues. Nous le
          disons sans détour dans notre{" "}
          <Link href="/guides/nextjs-ou-wordpress">comparatif Next.js ou
          WordPress</Link>, verdict par profil compris — et notre{" "}
          <Link href="/guides/migrer-wordpress-vers-nextjs">guide de la
          migration WordPress vers Next.js</Link> détaille le processus,
          le coût total sur 3 ans et les cinq cas où nous refusons la
          mission. Le changement de
          socle se justifie quand les symptômes de la section 3
          s&apos;accumulent : chaque euro de refonte WordPress sur un site
          à bout de souffle est un euro qui devra être re-dépensé à la
          prochaine alerte. Un mot enfin sur le faux jumeau de la
          refonte : <strong>le site piraté</strong>. Un nettoyage
          WordPress se facture 250 à 1 500 € selon l&apos;infection, en
          forfaits d&apos;urgence de 290 à 990 € sur le marché — puis on
          décide de la suite à froid. Refondre dans la panique, sans
          audit ni plan de migration, cumule tous les risques de ce
          guide en une seule mauvaise décision.
        </p>

        <h2 id="cout-inaction">11. Le coût de ne rien faire</h2>
        <p>
          Le statu quo peut avoir un coût, mais il ne se calcule pas avec un
          taux d&apos;abandon générique. Mesurez sur votre propre site les visites,
          les appareils, les Core Web Vitals, les erreurs, les conversions et
          leur valeur. Comparez ensuite une optimisation ciblée, une refonte et
          l&apos;absence d&apos;action avec les mêmes hypothèses.
        </p>
        <FormulaBox>
          <strong>Scénario de décision à compléter :</strong>
          <br />
          Conversions observées avant correction : ______ / mois
          <br />
          Valeur ou marge moyenne documentée : ______ €
          <br />
          Effet mesuré d&apos;une correction testée : ______ %
          <br />
          Gain annualisé estimé : conversions × valeur × effet = ______ €
        </FormulaBox>
        <p>
          Utilisez une mesure avant/après ou un test contrôlé lorsque c&apos;est
          possible. Une corrélation entre lenteur et abandon ne prouve pas que
          chaque visite au-delà d&apos;un seuil aurait acheté. Si les données ne
          permettent pas de chiffrer un gain, présentez-le comme inconnu plutôt
          que comme un manque à gagner certain.
        </p>

        <h2 id="tco">12. Le vrai coût sur 3 ans</h2>
        <p>
          Comme pour une création, le devis de refonte n&apos;est pas le
          coût total. Ce qui s&apos;ajoute — et qu&apos;un prestataire
          sérieux annonce d&apos;emblée :
        </p>
        <GuideTable
          headers={["Poste", "Ordre de grandeur", "En clair"]}
          rows={[
            ["Maintenance", "10 – 20 % du coût de refonte / an", "Mises à jour de sécurité, correctifs, petites évolutions"],
            ["Hébergement + sauvegardes", "20 – 100 €/mois", "L'infrastructure qui sert le site, sauvegardée"],
            ["Ajustements post-lancement (6 mois)", "15 – 20 % du budget initial", "Corrections d'après les premières données réelles"],
            ["Contenus", "250 – 500 € / page réécrite", "La réécriture professionnelle, presque toujours hors devis"],
            ["Redirections conservées ≥ 1 an", "inclus si prévu au contrat", "Le transfert des signaux Google prend du temps"],
          ]}
        />
        <p>
          Dans le scénario Hôtel du Lac : 16 250 € de refonte + environ
          2 500 € d&apos;ajustements post-lancement (15 %) + environ
          2 000 €/an de maintenance (12 %) + 360 €/an d&apos;hébergement
          ≈ <strong>25 800 € sur 3 ans</strong> — soit environ 1,6 fois
          le devis initial. Autrement dit, le devis signé ne représente
          qu&apos;environ 60 % du coût réel de possession ; les coûts qui
          s&apos;y ajoutent pèsent ici 37 % du total, dans la fourchette
          des 20 à 40 % que le marché constate. Deux précisions
          d&apos;honnêteté : ce budget d&apos;entretien n&apos;est pas
          une option — un site refondu puis abandonné reprend le chemin
          de la vétusté et ramène la prochaine refonte à 3 ans au lieu
          de 5 (forfaits réels et contrat décodé dans notre{" "}
          <Link href="/guides/cout-maintenance-site-internet">guide du
          coût de la maintenance</Link>). Et sur le plan comptable, une refonte peut selon ses
          caractéristiques passer en charges ou s&apos;immobiliser et
          s&apos;amortir : c&apos;est une vraie question — pour votre
          expert-comptable, pas pour votre agence.
        </p>

        <h2 id="erreurs">13. Les 6 erreurs de refonte qui coûtent cher</h2>
        <p>
          Les erreurs techniques de la section 8 ont leurs jumelles côté
          pilotage — six erreurs de dirigeant, toutes vues en vrai, toutes
          évitables :
        </p>
        <ul>
          <li>
            <strong>Basculer en haute saison.</strong> Le nouveau site de
            l&apos;hôtel part en novembre, jamais en juin : on ne teste
            pas le parachute pendant le saut. Bascule en période creuse,
            plusieurs semaines avant le pic.
          </li>
          <li>
            <strong>Perdre le tracking.</strong> Vos outils de mesure
            (Google Analytics, Search Console, pixels publicitaires)
            doivent être documentés avant la refonte et réinstallés à la
            bascule. Deux semaines sans mesure, c&apos;est deux semaines
            d&apos;aveuglement — au moment précis où il faut voir.
          </li>
          <li>
            <strong>Ne pas tester les formulaires.</strong> Pour une PME,
            un formulaire de contact cassé pendant trois semaines est
            plus grave qu&apos;une position perdue : ce sont des demandes
            entrantes qui partent en silence. Chaque formulaire, chaque
            parcours de réservation, testé le jour de la bascule.
          </li>
          <li>
            <strong>Supprimer des pages « qui ne servent à rien ».</strong>{" "}
            Une page discrète peut être votre meilleure porte
            d&apos;entrée Google. On tranche avec la Search Console sous
            les yeux, jamais à l&apos;intuition.
          </li>
          <li>
            <strong>Refondre sans préproduction.</strong> Le site actuel
            reste en ligne pendant tout le chantier ; le nouveau se
            construit à côté, invisible. La bascule prend quelques
            heures, pas trois semaines de page « en travaux ».
          </li>
          <li>
            <strong>Laisser le devis muet sur l&apos;après.</strong>{" "}
            Surveillance 30 jours, redirections conservées un an,
            comparaison de vitesse avant/après : si ce n&apos;est pas
            écrit, ce ne sera pas fait.
          </li>
        </ul>
        <InfoBox variant="blue" title="La checklist à opposer à votre prestataire">
          Six exigences à faire figurer, noir sur blanc, dans le devis ou
          le contrat : (1) inventaire de 100 % des adresses existantes
          avant bascule ; (2) plan de redirections page par page, validé
          avec vous ; (3) état de référence avant bascule (trafic,
          positions, vitesse) ; (4) recette complète — formulaires,
          tracking, vitesse avant/après ; (5) conservation des
          redirections au moins 12 mois ; (6) surveillance Search Console
          pendant 30 jours après la mise en ligne. Un prestataire sérieux
          les acceptera sans discuter — c&apos;est son métier. Les autres
          négocieront : écoutez ce que ça vous dit.
        </InfoBox>

        <h2 id="preparer">14. Préparer sa refonte : cahier des charges et aides</h2>
        <p>
          Le cahier des charges d&apos;une refonte a une section que
          celui d&apos;une création n&apos;a pas :{" "}
          <strong>l&apos;inventaire de l&apos;existant</strong>. Ce que le
          site actuel fait bien (pages qui rapportent, parcours qui
          convertissent — à préserver), ce qu&apos;il fait mal (à
          corriger), et le sort de chaque page : conserver, améliorer,
          fusionner, supprimer — avec le plan de redirections qui en
          découle. Notre{" "}
          <Link href="/ressources/kit-cahier-des-charges-site-internet">modèle de
          cahier des charges</Link> s&apos;adapte en version refonte en y
          ajoutant cet inventaire ; envoyé à l&apos;identique à trois
          prestataires, il transforme des devis incomparables en devis
          comparables.
        </p>
        <p>
          Côté financement : les aides à la numérisation des TPE/PME
          couvrent l&apos;amélioration d&apos;un site existant au même
          titre que sa création — mais le terrain est piégeux. Le
          « chèque France Num » national que beaucoup de pages promettent
          encore <strong>n&apos;existe plus depuis 2021</strong> ; les
          dispositifs réellement actifs en 2026 sont régionaux, plafonnés,
          et versés après réalisation sur justificatifs — il faut avancer
          la trésorerie. Notre{" "}
          <Link href="/guides/aides-creation-site-internet">panorama des
          aides, vérifié à la source</Link>, fait le tri région par
          région, dispositifs morts signalés.
        </p>

        <InfoBox variant="emerald" title="À retenir : les 5 chiffres de ce guide">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>1 500 – 15 000 €</strong> : le cœur de marché d&apos;une refonte vitrine/PME (e-commerce : 5 000 – 40 000 €).</li>
            <li><strong>1 500 – 10 000 €</strong> : la migration SEO, le poste que les devis oublient — 15 à 30 % du budget, et la meilleure assurance du projet.</li>
            <li><strong>1 an minimum</strong> : la durée de conservation des redirections 301, recommandée par Google — à écrire au contrat.</li>
            <li><strong>Mesure avant/après</strong> : la seule base fiable pour attribuer un effet à votre refonte.</li>
            <li><strong>Aucun seuil automatique</strong> : l&apos;audit doit comparer correction ciblée et reconstruction.</li>
          </ul>
        </InfoBox>

        <h2 id="methode">15. Méthode : réussir sa refonte en 5 étapes</h2>
        <ol>
          <li>
            <strong>Auditez avant de décider.</strong> Le test des 3
            symptômes (section 3) et vos données réelles — Search
            Console, mesure d&apos;audience, test de vitesse. Si une
            optimisation suffit, vous venez d&apos;économiser 80 % du
            budget.
          </li>
          <li>
            <strong>Chiffrez le statu quo.</strong> Utilisez vos conversions,
            votre marge et l&apos;effet réellement observé d&apos;une correction.
            Si cet effet n&apos;est pas mesuré, conservez une fourchette et
            rendez l&apos;incertitude visible (section 11).
          </li>
          <li>
            <strong>Écrivez le cahier des charges version refonte</strong>{" "}
            — avec l&apos;inventaire de l&apos;existant et le sort de
            chaque page (section 14). Envoyez-le à l&apos;identique à
            trois prestataires.
          </li>
          <li>
            <strong>Comparez à périmètre égal, migration SEO
            comprise.</strong> Exigez les lignes audit, redirections,
            recette et surveillance dans chaque devis (la checklist de la
            section 13). Un devis qui en est dépourvu n&apos;est pas
            moins cher : il est incomplet.
          </li>
          <li>
            <strong>Basculez en période creuse, surveillez 30 jours.</strong>{" "}
            Préproduction jusqu&apos;au bout, formulaires testés,
            tracking réinstallé, redirections conservées un an.
          </li>
        </ol>
        <p>
          C&apos;est le déroulé exact de notre méthode : un{" "}
          <strong>Discovery Sprint (1 500 €, 2 jours, déduit à 100 % si
          le projet se lance)</strong> qui audite votre site existant,
          tranche honnêtement entre refonte et optimisation, et produit
          maquettes et devis au forfait fixe — puis une refonte livrée
          par étapes selon les jalons écrits au devis (méthode{" "}
          <Link href="/methode">Sprint Fixe™</Link>), avec des critères de
          performance, un protocole Lighthouse et le plan de migration SEO
          précisés avant signature. <Link href="/demarrer-un-projet">Décrivez
          votre site en 3 minutes</Link> : objectif de réponse personnelle le
          prochain jour ouvré, sans délai garanti, gratuitement et sans
          engagement. Et pour situer ce budget
          dans l&apos;ensemble des prix du web, notre{" "}
          <Link href="/guides/combien-coute-un-site-internet">panorama
          des prix d&apos;un site internet</Link> complète ce guide.
        </p>

        <hr />
        <p className="text-sm">
          <strong>Sources</strong> — références citées dans ce guide
          (consultées en juillet 2026) :{" "}
          <a href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" target="_blank" rel="noopener noreferrer">Google Search Central, migration de site avec changement d&apos;URL</a> ;{" "}
          <a href="https://developers.google.com/search/docs/crawling-indexing/301-redirects" target="_blank" rel="noopener noreferrer">Google Search Central, redirections et recherche Google</a> ;{" "}
          <a href="https://www.searchenginejournal.com/study-how-long-should-seo-migration-take/492050/" target="_blank" rel="noopener noreferrer">étude Dan Taylor sur 892 migrations (Search Engine Journal, 2025)</a>, relayée par{" "}
          <a href="https://www.abondance.com/20250110-795661-migration-seo-delai-recuperation-trafic.html" target="_blank" rel="noopener noreferrer">Abondance</a> ;{" "}
          <a href="https://www.sistrix.com/blog/topshop-to-asos-80-off-in-search-visibility-migration/" target="_blank" rel="noopener noreferrer">Sistrix, cas Topshop/ASOS</a> et analyses de migrations ;{" "}
          <a href="https://developer.woocommerce.com/2024/04/09/woocommerce-com-domain-migration/" target="_blank" rel="noopener noreferrer">WooCommerce, annonce officielle du retour de domaine (avril 2024)</a> ;{" "}
          <a href="https://searchengineland.com/google-no-pagerank-dilution-using-301-302-30x-redirects-anymore-254608" target="_blank" rel="noopener noreferrer">Search Engine Land, fin de la perte de PageRank sur les redirections (Google, 2016)</a> ;{" "}
          <a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer">web.dev, seuils des Core Web Vitals</a> ;{" "}
          <a href="https://developers.google.com/search/docs/appearance/page-experience" target="_blank" rel="noopener noreferrer">Google, page experience et signaux de classement</a> ;
          étude Google « The Need for Mobile Speed » (2016, 53 %
          d&apos;abandon au-delà de 3 s) ;{" "}
          <a href="https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/modeles-de-cahiers-des-charges-pour-un-site" target="_blank" rel="noopener noreferrer">France Num, modèles de cahiers des charges</a> ;
          fourchettes de marché : recoupement de grilles publiées par des
          agences et consultants français concurrents 2025-2026
          (AudreyTips, La-refonte.fr, Le Site Français, Toonet Création,
          Alizée Web, Krearise, La Vitrine SEO, Smart Agency, Matthieu
          Texier, Burguin Digital…). Les prix évoluent : vérifiez avant
          de signer.
        </p>
        <p className="text-sm">
          <em>
            Les fourchettes de ce guide sont des prix de marché
            constatés, donnés à titre indicatif : seul un devis établi
            sur votre site et votre périmètre vous engage. Les chiffres
            d&apos;études propriétaires (agences, outils SEO) sont cités
            avec leur source et leurs limites. Ce guide ne constitue pas
            un conseil comptable ou fiscal personnalisé.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
