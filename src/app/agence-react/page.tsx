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
import { OG_BASE, SITE_URL, SERVICES_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Agence React : applications et interfaces · Hagnéré Code",
  description:
    "Agence React : applications web, interfaces métier et espaces clients sur mesure. Forfait fixe dès 15 000 €, code livré chez vous, performance garantie.",
  authors: [{ name: "Quentin Hagnéré" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  alternates: { canonical: "/agence-react" },
  openGraph: {
    ...OG_BASE,
    type: "website",
    title: "Agence React — Hagnéré Code",
    description:
      "Développement React sur mesure : applications web, interfaces métier, espaces clients. Forfait fixe, code à vous, performance garantie par contrat.",
    url: "/agence-react",
    images: [SERVICES_OG_IMAGE],
  },
  twitter: { images: [SERVICES_OG_IMAGE.url] },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agence de développement React",
  url: `${SITE_URL}/agence-react`,
  serviceType:
    "Développement React sur mesure : applications web, interfaces métier, espaces clients",
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "Country", name: "France" },
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Agence React", item: `${SITE_URL}/agence-react` },
  ],
});

const faqItems = [
  {
    question: "Quelle est la différence entre React et Next.js ?",
    answer:
      "React est la bibliothèque qui sert à construire des interfaces : c'est elle qui gère l'affichage, les interactions, la mise à jour de l'écran quand les données changent. Next.js est un cadre de travail bâti par-dessus React, qui ajoute tout ce dont un site public a besoin : génération des pages à l'avance, rendu côté serveur, gestion des adresses, optimisation des images. En pratique : pour un site public qui doit être bien référencé, nous utilisons Next.js. Pour une application derrière un identifiant — espace client, outil interne, tableau de bord — React seul suffit souvent, et c'est l'objet de cette page.",
  },
  {
    question: "Combien coûte une application React sur mesure ?",
    answer:
      "Une première version réellement utilisable démarre à 15 000 €, livrée en 3 à 6 semaines. Les projets plus larges — plusieurs rôles utilisateurs, connexions à vos logiciels existants, volumétrie importante — se situent entre 25 000 et 80 000 €. Nous travaillons au forfait fixe contractuel : le prix est arrêté après le cadrage et ne bouge pas, tout ajout passant par un avenant chiffré. Les projets démarrent par un Discovery Sprint de deux jours à 1 500 €, intégralement déduits si le projet se lance.",
  },
  {
    question: "Pouvez-vous reprendre une application React existante ?",
    answer:
      "Oui, et c'est une demande fréquente : l'agence d'origine a disparu, le développeur est parti, ou le code est devenu difficile à faire évoluer. Nous commençons alors par un audit du code existant, facturé séparément, qui répond à trois questions : que vaut réellement ce code, que coûte sa reprise, et vaut-il mieux le reprendre ou le reconstruire ? Cet audit se conclut parfois par « reconstruisez » et parfois par « votre code est sain, voici les trois choses à corriger ». Nous vous donnons la réponse honnête, même quand elle réduit notre facture.",
  },
  {
    question: "React est-il adapté à une application interne d'entreprise ?",
    answer:
      "Oui, c'est même l'un de ses terrains les plus naturels. Une application interne n'a pas de contrainte de référencement, mais elle a des contraintes d'usage fortes : vos équipes vont y passer des heures chaque jour. React permet des interfaces réactives, où l'écran se met à jour sans rechargement, ce qui change la sensation d'usage sur les outils manipulés intensivement. C'est le sujet de notre page consacrée aux outils internes, avec des exemples de ce que nous remplaçons — le plus souvent des tableurs partagés qui ont atteint leurs limites.",
  },
  {
    question: "Qui pourra reprendre le code après vous ?",
    answer:
      "N'importe quel développeur React, et c'est un argument important. React est la bibliothèque la plus répandue de l'écosystème web : environ un développeur sur deux la pratique dans le monde. Vous n'êtes donc pas enfermé dans une technologie rare ou propriétaire. Nous y ajoutons trois garanties contractuelles : cession des droits conforme à l'article L131-3 du Code de la propriété intellectuelle, dépôt du code sur un compte à votre nom dès le premier jour, et documentation livrée. Notre guide pour choisir son agence web explique comment vérifier ces points chez n'importe quel prestataire, nous compris.",
  },
  {
    question: "Faites-vous aussi le back-end, ou seulement l'interface ?",
    answer:
      "Les deux. React ne gère que ce que voit l'utilisateur : il faut derrière une base de données, une logique métier, des règles de sécurité et souvent des connexions à vos outils existants. Nous livrons l'ensemble : interface React, données en PostgreSQL, connexions à votre logiciel de gestion ou à votre CRM, gestion des comptes et des droits. Une application livrée sans son socle n'est pas une application, c'est une maquette — et c'est une confusion qui coûte cher quand on découvre le problème après avoir signé.",
  },
  {
    question: "Travaillez-vous partout en France ?",
    answer:
      "Oui. Nous sommes basés à Bassens, aux portes de Chambéry, en Savoie, et nous accompagnons des clients dans toute la France. Le développement d'application se conduit très bien à distance : cadrage et points d'étape en visioconférence, démonstrations en ligne à chaque livraison intermédiaire. Sur un projet applicatif, ces démonstrations régulières comptent plus que la proximité géographique — c'est ce qui vous permet de corriger le tir tôt plutôt que de découvrir un malentendu à la fin.",
  },
];

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});

export default function Page() {
  return (
    <GuidesShell>
      <script type="application/ld+json">{serviceJsonLd}</script>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <script type="application/ld+json">{faqJsonLd}</script>

      <GuideLayout
        breadcrumbs={[{ label: "Agence React" }]}
        heroTitle="Agence React : applications web et interfaces métier sur mesure"
        heroDescription="Nous développons en React des applications d'entreprise, des espaces clients et des outils internes. Forfait fixe contractuel, code livré sur votre compte, garantie 30 jours. Basés à Bassens, aux portes de Chambéry, nous travaillons partout en France."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel="Mis à jour le 18 juillet 2026"
        keyPoints={[
          { number: "01", title: "Applications sur mesure dès 15 000 €", description: "", color: "violet" },
          { number: "02", title: "Première version en 3 à 6 semaines", description: "", color: "blue" },
          { number: "03", title: "Code et documentation à votre nom", description: "", color: "emerald" },
          { number: "04", title: "Reprise d'existant possible après audit", description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/agence-next-js", label: "Agence Next.js" },
          { href: "/services/saas-applications-metier", label: "SaaS et applications métier" },
          { href: "/services/outils-internes-sur-mesure", label: "Outils internes sur mesure" },
          { href: "/services/audit-technique", label: "Audit technique" },
          { href: "/guides/prix-logiciel-sur-mesure", label: "Prix d'un logiciel sur mesure" },
          { href: "/tarifs", label: "Nos tarifs" },
        ]}
        faqTitle="Développement React : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          React est la bibliothèque la plus répandue du développement web :{" "}
          <strong>environ un développeur sur deux la pratique dans le
          monde</strong>. Nous l&apos;utilisons pour construire des
          applications d&apos;entreprise, des espaces clients et des outils
          internes — c&apos;est-à-dire tout ce qui vit derrière un
          identifiant, et que vos équipes ou vos clients manipulent au
          quotidien.
        </p>

        <GuideToc
          items={[
            { id: "quoi", label: "1. Ce que nous construisons en React" },
            { id: "react-ou-nextjs", label: "2. React ou Next.js : lequel pour votre projet" },
            { id: "pourquoi", label: "3. Pourquoi React, en termes concrets" },
            { id: "reprise", label: "4. Reprendre une application existante" },
            { id: "garanties", label: "5. Ce que nous garantissons par contrat" },
            { id: "prix", label: "6. Budgets et délais" },
            { id: "quand-non", label: "7. Quand React n'est pas la bonne réponse" },
            { id: "stack", label: "8. Notre stack technique" },
          ]}
        />

        <h2 id="quoi">1. Ce que nous construisons en React</h2>
        <p>
          React sert à construire des interfaces. Chez nous, cela recouvre
          quatre familles de projets, toutes caractérisées par un usage
          intensif plutôt que par une visite ponctuelle.
        </p>
        <GuideTable
          headers={["Type de projet", "Ce que ça remplace", "Budget d'entrée", "Délai"]}
          rows={[
            ["Application métier", "Des tableurs partagés qui ont atteint leurs limites", "15 000 €", "3 à 6 semaines pour une première version"],
            ["Espace client ou portail", "Des échanges par e-mail et des documents éparpillés", "15 000 €", "1 à 3 mois"],
            ["Outil interne, automatisation", "Des tâches répétitives faites à la main", "Sur devis", "Selon périmètre"],
            ["Tableau de bord et pilotage", "Des exports manuels consolidés chaque mois", "Sur devis", "Selon sources de données"],
          ]}
        />
        <p>
          Ces projets ont un point commun : ils ne se jugent pas au premier
          coup d&apos;œil mais à l&apos;usage. Une application que vos équipes
          utilisent trois heures par jour doit être rapide et sans friction,
          bien plus qu&apos;elle ne doit être jolie.
        </p>

        <h2 id="react-ou-nextjs">2. React ou Next.js : lequel pour votre projet</h2>
        <p>
          C&apos;est la question qu&apos;on nous pose le plus, et la réponse
          est simple une fois qu&apos;on a posé le bon critère :{" "}
          <strong>votre projet doit-il être trouvé par Google, ou
          accessible derrière un identifiant ?</strong>
        </p>
        <GuideTable
          headers={["Votre besoin", "Le bon socle", "Pourquoi"]}
          rows={[
            ["Site public qui doit être bien référencé", "Next.js", "Pages générées à l'avance, HTML complet servi à Google, vitesse maximale"],
            ["Boutique en ligne", "Next.js", "Fiches produit indexables, performance sur les pages de catalogue"],
            ["Espace client derrière un identifiant", "React", "Aucun enjeu de référencement, priorité à la fluidité d'usage"],
            ["Application métier interne", "React", "Interface réactive, mises à jour sans rechargement"],
            ["Tableau de bord, outil de pilotage", "React", "Affichage de données en temps réel, interactions denses"],
          ]}
        />
        <InfoBox variant="blue" title="Dans les faits, souvent les deux">
          Beaucoup de projets combinent les deux : un site public en
          Next.js, bien référencé, et un espace client en React derrière
          l&apos;identification. Les deux partagent le même code de base et la
          même charte, ce qui évite de payer deux fois la même chose.
          C&apos;est l&apos;un des avantages concrets de rester dans le même
          écosystème plutôt que d&apos;assembler des technologies
          différentes. Si votre besoin est d&apos;abord un site public,
          commencez par notre page{" "}
          <Link href="/agence-next-js">agence Next.js</Link>.
        </InfoBox>

        <h2 id="pourquoi">3. Pourquoi React, en termes concrets</h2>
        <ul>
          <li>
            <strong>Un vivier de développeurs très large.</strong> Avec
            environ un développeur sur deux qui pratique React dans le monde,
            vous ne dépendez ni d&apos;une technologie rare, ni d&apos;un
            prestataire unique. C&apos;est un argument de réversibilité, pas
            de mode.
          </li>
          <li>
            <strong>Des interfaces qui répondent immédiatement.</strong>{" "}
            L&apos;écran se met à jour sans recharger la page. Sur un outil
            utilisé plusieurs heures par jour, cette différence n&apos;est pas
            cosmétique : elle se compte en minutes gagnées chaque jour par
            utilisateur.
          </li>
          <li>
            <strong>Un écosystème mature.</strong> Tableaux de données,
            graphiques, formulaires complexes, calendriers, éditeurs de
            texte : les briques existent, éprouvées et maintenues. Nous ne
            réinventons que ce qui vous est spécifique — le reste, nous
            l&apos;assemblons, ce qui réduit le coût et le risque.
          </li>
          <li>
            <strong>Une évolutivité réelle.</strong> Une application bien
            structurée en composants s&apos;étend sans tout casser. C&apos;est
            ce qui distingue un outil qu&apos;on fait grandir pendant cinq ans
            d&apos;un outil qu&apos;il faut refaire au bout de deux.
          </li>
        </ul>

        <GuideInlineCTA
          title="Un projet applicatif en tête ?"
          description="Décrivez-le en 3 minutes. Réponse personnelle sous 24 h ouvrées, gratuite et sans engagement — y compris si notre réponse est qu'un outil du marché ferait l'affaire."
        />

        <h2 id="reprise">4. Reprendre une application existante</h2>
        <p>
          C&apos;est une demande fréquente, et souvent une situation
          inconfortable : l&apos;agence d&apos;origine a disparu, le
          développeur est parti, ou plus personne n&apos;ose toucher au code.
        </p>
        <p>
          Nous commençons alors par un{" "}
          <Link href="/services/audit-technique">audit technique</Link>,
          facturé séparément et volontairement court. Il répond à trois
          questions : que vaut réellement ce code, que coûterait sa reprise,
          et vaut-il mieux le reprendre ou le reconstruire ? Nous chiffrons
          les deux scénarios plutôt que d&apos;en imposer un.
        </p>
        <InfoBox variant="amber" title="La réponse qui nous coûte de l'argent">
          Cet audit se conclut parfois par « votre code est sain, voici les
          trois choses à corriger, ça vous coûtera quelques jours ». Nous le
          disons quand c&apos;est le cas, même si une reconstruction complète
          serait beaucoup plus rentable pour nous. La raison est simple :{" "}
          <strong>un client à qui on a vendu une refonte inutile ne
          revient jamais</strong>, et il le raconte. C&apos;est un calcul de
          long terme, pas de la générosité.
        </InfoBox>

        <h2 id="garanties">5. Ce que nous garantissons par contrat</h2>
        <GuideTable
          headers={["Engagement", "Ce que ça signifie"]}
          rows={[
            ["Forfait fixe contractuel", "Périmètre écrit, prix arrêté après cadrage, aucun dépassement surprise. Tout ajout passe par un avenant chiffré"],
            ["Propriété du code", "Cession des droits écrite (article L131-3 CPI), dépôt sur un compte à votre nom dès le premier jour, documentation livrée"],
            ["Garantie 30 jours", "Toute anomalie constatée dans le mois suivant la mise en production est corrigée sans supplément"],
            ["Démonstrations régulières", "Vous voyez l'application avancer à chaque étape plutôt que de découvrir le résultat à la fin"],
          ]}
        />
        <p>
          Ce dernier point compte particulièrement sur un projet applicatif.
          L&apos;échec le plus courant n&apos;est pas technique : c&apos;est
          un malentendu sur le fonctionnement attendu, découvert trop tard. Des
          démonstrations toutes les deux semaines coûtent quelques heures et
          évitent des semaines de reprise.
        </p>

        <h2 id="prix">6. Budgets et délais</h2>
        <GuideTable
          headers={["Périmètre", "Prix", "Délai"]}
          rows={[
            ["Discovery Sprint : cadrage, maquette, devis ferme", "1 500 €, déduits à 100 % si le projet se lance", "2 jours"],
            ["Première version utilisable (un rôle, périmètre resserré)", "Dès 15 000 €", "3 à 6 semaines"],
            ["Application complète (plusieurs rôles, connexions à vos outils)", "25 000 à 80 000 €", "2 à 5 mois"],
            ["Audit d'une application existante", "Sur devis, volontairement court", "3 à 10 jours"],
          ]}
        />
        <p>
          Pour comprendre ce qui fait varier ces montants avant même de nous
          consulter, notre{" "}
          <Link href="/guides/prix-logiciel-sur-mesure">guide du prix
          d&apos;un logiciel sur mesure</Link> détaille la méthode de calcul,
          et notre{" "}
          <Link href="/guides/tjm-developpeur-web">guide du tarif journalier
          d&apos;un développeur</Link> vous apprend à lire un devis en jours
          et à repérer les estimations gonflées.
        </p>

        <h2 id="quand-non">7. Quand React n&apos;est pas la bonne réponse</h2>
        <p>
          Trois situations où nous vous orienterons ailleurs, y compris vers
          une solution que nous ne vendons pas.
        </p>
        <ul>
          <li>
            <strong>Un outil du marché couvre déjà 90 % de votre besoin.</strong>{" "}
            Un CRM, un logiciel de gestion, un outil de facturation :
            s&apos;il existe et qu&apos;il fait le travail, l&apos;acheter
            coûte moins cher que le construire. Nous le dirons au cadrage.
            Le sur-mesure se justifie quand votre processus est réellement
            spécifique, ou quand l&apos;abonnement devient plus cher que la
            construction sur la durée.
          </li>
          <li>
            <strong>Votre besoin est un site public.</strong> Une application
            React classique ne se référence pas correctement. Dans ce cas,
            c&apos;est Next.js qu&apos;il faut, et notre page{" "}
            <Link href="/agence-next-js">agence Next.js</Link> traite le
            sujet.
          </li>
          <li>
            <strong>Le processus n&apos;est pas encore stabilisé.</strong> Si
            votre façon de travailler change tous les mois, développer un
            outil revient à figer quelque chose de mouvant. Mieux vaut
            attendre, ou commencer par un périmètre très resserré — c&apos;est
            l&apos;objet du Discovery Sprint.
          </li>
        </ul>

        <h2 id="stack">8. Notre stack technique</h2>
        <GuideTable
          headers={["Couche", "Technologies", "Pourquoi"]}
          rows={[
            ["Interface", "React 19, TypeScript", "Composants réutilisables, erreurs détectées à l'écriture plutôt qu'en production"],
            ["Cadre applicatif", "Next.js 15 quand le projet a aussi une partie publique", "Un seul socle pour le site et l'application"],
            ["Style et interactions", "Tailwind CSS v4, Framer Motion", "Design sur mesure, animations sans surcoût de performance"],
            ["Données", "PostgreSQL, Drizzle ORM", "Base relationnelle éprouvée, requêtes typées de bout en bout"],
            ["Sécurité et accès", "Gestion des comptes, rôles et droits", "Le socle non négociable de toute application d'entreprise"],
            ["Hébergement", "Vercel ou hébergeur français (OVHcloud, Scaleway, Clever Cloud)", "Selon vos exigences de souveraineté des données"],
          ]}
        />
        <p>
          Nous développons également en Laravel lorsque le projet s&apos;y
          prête : deux de nos logiciels en production sont bâtis sur cette
          technologie. Le choix se fait au cadrage, selon votre besoin — pas
          selon nos préférences.
        </p>

        <GuideInlineCTA
          title="Parlons de votre application"
          description="Décrivez votre besoin en 3 minutes : réponse personnelle sous 24 h ouvrées, gratuite et sans engagement. Nous répondons nous-mêmes, il n'y a pas de service commercial intermédiaire."
        />
      </GuideLayout>
    </GuidesShell>
  );
}
