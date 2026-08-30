import Image from "next/image";
import Link from "next/link";
import {
  FormulaBox,
  GuideTable,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GoogleAdsQuoteComparator } from "@/components/guides/GoogleAdsQuoteComparator";
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
  CONTACT_PHONE_DISPLAY_NATIONAL,
  CONTACT_PHONE_E164,
} from "@/lib/contact-details";
import {
  buildGuideMetadata,
  buildGuideStructuredData,
} from "@/lib/guide-page-seo";
import { formatGuideDate, getGuide } from "@/lib/guides";
import { TEAM } from "@/lib/team";

/**
 * Les trois phrases de prix maison, dans la forme exacte que le contrôle
 * croisé `guides-price-consistency.test.ts` compare à la grille publique du
 * service publicité en ligne (`src/components/publicite-en-ligne/sections/
 * pricing.ts`), relevée le 28 août 2026.
 *
 * Ces chaînes ne sont pas un commentaire recopié pour faire taire un contrôle :
 * ce sont les phrases réellement rendues au lecteur, plus bas dans le §01. Le
 * contrôle croisé lit le fichier source et n'y décode ni `&nbsp;` ni la
 * séquence d'échappement `\u00a0` ; elles sont donc écrites avec des espaces
 * ordinaires, et `typographieFrancaise` pose les insécables à l'affichage.
 * Modifier un montant visible fait maintenant échouer le contrôle — ce que la
 * version précédente, qui portait ces phrases dans un commentaire d'en-tête,
 * ne garantissait plus.
 */
const PRIX_MAISON_PUBLIES = {
  audit: "un audit à 1 500 € HT",
  forfaits: "des forfaits fixes à 1 800 €, 3 500 € et 4 500 € HT par mois",
  starter:
    "situe le forfait Starter à partir de 8 000 € de budget média mensuel",
} as const;

/**
 * Pose les insécables du §9.3 sur une chaîne écrite en espaces ordinaires :
 * séparateur de milliers, unité collée à son nombre, ponctuation double.
 * Écrite une fois, appliquée aux trois phrases ci-dessus.
 */
function typographieFrancaise(texte: string) {
  return texte
    .replace(/(\d) (\d{3})/g, "$1\u00a0$2")
    .replace(/(\d) (?=€|%|mois|heures?|h\b)/g, "$1\u00a0")
    .replace(/ (?=[?!;:»])/g, "\u00a0")
    .replace(/« /g, "«\u00a0");
}

const guide = getGuide("prix-gestion-google-ads");
const breadcrumbName = "Prix d’une gestion Google Ads";

export const metadata = buildGuideMetadata(
  guide,
  "Quatre modes de rémunération d’une gestion Google Ads ramenés au même décompte",
);

const structuredData = buildGuideStructuredData(guide, breadcrumbName);

const toc = [
  { id: "reponse", number: "01", label: "Réponse directe", shortLabel: "Réponse" },
  {
    id: "cout-complet",
    number: "02",
    label: "Les six lignes du coût",
    shortLabel: "Le coût",
  },
  {
    id: "modeles",
    number: "03",
    label: "Le point de bascule",
    shortLabel: "Bascule",
  },
  {
    id: "temps-interne",
    number: "04",
    label: "Ce que votre équipe absorbe",
    shortLabel: "Temps interne",
  },
  {
    id: "indicateurs",
    number: "05",
    label: "CPA, CPL et coût d’un client",
    shortLabel: "Mesurer",
  },
  { id: "incidents", number: "06", label: "Ce qui rate", shortLabel: "Incidents" },
  { id: "sortie", number: "07", label: "Changer d’agence", shortLabel: "Sortie" },
  { id: "decision", number: "08", label: "Décider", shortLabel: "Décider" },
];

const faqCategories: GuidePremiumFaqCategory[] = [
  {
    key: "facture",
    num: "01",
    label: "Facture et budget",
    items: [
      {
        question:
          "Le budget publicitaire est-il compris dans les honoraires\u00a0?",
        answer:
          "Ce sont deux lignes différentes, et le devis doit les porter séparément. Le budget média part chez Google, sur un profil de paiement rattaché à votre entreprise\u00a0; les honoraires rémunèrent le travail de l’agence ou de l’indépendant. Sur le cas construit de ce guide, 5\u00a0000\u00a0€ HT de média par mois côtoient 750 à 1\u00a0000\u00a0€ HT d’honoraires\u00a0: confondre les deux fait passer la facture mensuelle de 900\u00a0€ à 5\u00a0900\u00a0€. Demandez aussi qui reçoit la facture Google et qui la transmet à la comptabilité.",
      },
      {
        question: "Faut-il comparer les devis en HT ou en TTC\u00a0?",
        answer:
          "Comparez les offres en HT, puis calculez à part ce que vous sortez réellement de trésorerie. Le HT met les propositions sur la même base\u00a0; le TTC dit ce que votre banque voit passer. La TVA facturée dépend de l’entité Google qui sert votre compte et de votre situation\u00a0: l’aide Google distingue les comptes servis par Google France SARL de ceux servis depuis l’Irlande. Faites trancher votre expert-comptable plutôt qu’un tableau de comparaison.",
      },
      {
        question:
          "Le coût réglementaire de 2\u00a0% s’ajoute-t-il à mon budget\u00a0?",
        answer:
          "Il s’ajoute à la dépense des annonces diffusées en France, et Google le fait apparaître sur la facture. Sur 5\u00a0000\u00a0€ HT de média mensuel, il vaut 100\u00a0€\u00a0; sur douze mois, 1\u00a0200\u00a0€. Le piège tient en une question\u00a0: votre montant de départ l’inclut-il déjà\u00a0? S’il l’inclut, l’ajouter une seconde fois gonfle le budget de 2\u00a0% pour rien. Vérifiez la zone de diffusion et la facture à la date de votre calcul.",
      },
    ],
  },
  {
    key: "contrat",
    num: "02",
    label: "Contrat et rémunération",
    items: [
      {
        question:
          "Qu’est-ce que l’assiette d’une rémunération au pourcentage\u00a0?",
        answer:
          "C’est la somme sur laquelle le taux s’applique, et elle change tout. Dépense média facturée, budget prévu, montant net d’avoirs, avec ou sans le coût réglementaire\u00a0: quatre définitions donnent quatre factures. Sur 5\u00a0000\u00a0€ HT de média, 15\u00a0% font 750\u00a0€\u00a0; sur 12\u00a0000\u00a0€, 1\u00a0800\u00a0€, sans qu’aucune ligne du contrat n’ait bougé. Faites écrire l’assiette, un plafond mensuel en euros et ce qui se passe quand le budget change.",
      },
      {
        question: "Les frais de lancement se négocient-ils\u00a0?",
        answer:
          "Ils se discutent surtout à la ligne. Un lancement à 750\u00a0€ HT peut couvrir un audit, la reprise du compte, la structure des campagnes, les accès et un plan de mesure\u00a0; il peut aussi ne rien couvrir de tout cela. Demandez la liste des travaux, ce qui vous est remis à la fin et ce qui se passe si le compte est déjà propre. Sur le cas construit, le lancement vaut 750 à 900\u00a0€ HT une seule fois, quand un mois d’honoraires passé à rattraper un compte mal repris coûte 750 à 1\u00a0000\u00a0€ HT et recommence le mois suivant.",
      },
      {
        question: "Quelle durée d’engagement accepter\u00a0?",
        answer:
          "Celle qui laisse le temps d’accumuler assez de prospects qualifiés pour décider, et pas une semaine de plus. Sur le cas construit, 20\u00a0prospects qualifiés par mois donnent 60\u00a0prospects et 12\u00a0clients en trois mois\u00a0: c’est ce volume, pas le calendrier, qui rend une décision défendable. Écrivez dans le même paragraphe le préavis, les sommes encore dues, la restitution des accès et ce que vous récupérez. Une durée sans clause de sortie chiffrée n’engage que vous.",
      },
    ],
  },
  {
    key: "compte",
    num: "03",
    label: "Compte, mesure et autonomie",
    items: [
      {
        question: "Qui doit posséder le compte Google Ads\u00a0?",
        answer:
          "Votre entreprise, avec un accès administrateur direct et le profil de paiement à son nom. Google indique qu’associer un compte existant à un compte administrateur ne fait perdre ni l’historique ni la propriété\u00a0; en revanche, un compte créé depuis le compte administrateur d’une agence peut lui appartenir par défaut. Connectez-vous vous-même avant le premier euro dépensé et regardez les rôles réellement attribués, plutôt que la phrase du contrat.",
      },
      {
        question: "Que vaut un audit Google Ads gratuit\u00a0?",
        answer:
          "Il vaut ce qu’il remet par écrit, et le mot «\u00a0audit\u00a0» ne dit rien de sa profondeur\u00a0: sur l’échantillon consulté le 30\u00a0juillet 2026, une même page vend un audit payant et propose à côté un audit gratuit décrit comme synthétique. L’audit Ads publié par Hagnéré Code coûte 1\u00a0500\u00a0€ HT et ressort avec un rapport écrit et une feuille de route à 90\u00a0jours. Pour toute offre, demandez la liste des points examinés, le format de la restitution et ce que vous gardez si vous n’allez pas plus loin.",
      },
      {
        question: "Peut-on gérer Google Ads en interne\u00a0?",
        answer:
          "C’est jouable quand une personne a du temps réservé chaque semaine, que la mesure fonctionne et que la perte maximale est écrite. Comptez ce temps à son coût horaire chargé\u00a0: sur le cas construit, trois heures par mois à 50\u00a0€ l’heure valent 150\u00a0€, soit exactement l’écart mensuel entre l’offre la moins chère et le forfait. Sous 3\u00a0000\u00a0€ HT de média mensuel, un forfait de 900\u00a0€ pèse au moins 30\u00a0% de la dépense\u00a0: comparez-le d’abord à un audit ponctuel ou à une mission bornée en heures.",
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
          { label: "Coût complet", variant: "dark" },
          { label: "Exemple construit", variant: "neutral" },
          { label: "Calcul local · aucun envoi", variant: "success" },
          {
            label: `Mis à jour le ${formatGuideDate(guide.dateModified)}`,
            variant: "muted",
          },
        ]}
        heroTitle="Combien coûte vraiment"
        heroTitleEm={"la gestion de Google Ads\u00a0?"}
        heroDescription={"Exemple construit, pas un dossier client\u00a0: les quatre offres comparées, les volumes et le coût horaire interne sont choisis pour l’exemple. Sur douze mois, 5\u00a0000\u00a0€ HT de média par mois donnent un coût connu de 78\u00a0300 à 81\u00a0200\u00a0€ selon le mode de rémunération, soit 2\u00a0900\u00a0€ d’écart contre 61\u00a0200\u00a0€ de média. Ce guide donne le budget où un pourcentage dépasse un forfait, et les heures que l’offre la moins chère laisse à votre équipe."}
        stats={[
          { label: "Bascule pourcentage", value: "6\u00a0000\u00a0€ HT/mois" },
          { label: "Écart des 4 modèles à 12 mois", value: "2\u00a0900\u00a0€" },
          { label: "Seuil de charge interne", value: "3\u00a0h/mois" },
          { label: "Moyenne de marché", value: "Aucune" },
          { label: "Lecture", value: `${guide.readTimeMin} min` },
        ]}
        author={{
          initials: TEAM.quentin.initials,
          name: TEAM.quentin.fullName,
          role: TEAM.quentin.role,
          profileUrl: "/equipe#fondateur",
        }}
        sidebarHeroCta={{
          eyebrow: "Publicité en ligne",
          titleStart: "Faire chiffrer",
          titleEm: "une offre comparable",
          description:
            "Donnez le budget média, les zones, le cycle de vente, la mesure déjà en place et ce que votre équipe peut prendre en charge. La proposition sépare honoraires, lancement, actifs, exclusions et conditions de sortie.",
          benefits: [
            "Honoraires fixes, séparés du budget média",
            "Accès, factures et actifs inventoriés au devis",
            "Refus explicite si la mesure n’est pas prête",
          ],
          primaryCtaLabel: "Voir le service publicité en ligne",
          primaryCtaHref: "/services/publicite-en-ligne",
          phoneLabel: CONTACT_PHONE_DISPLAY_NATIONAL,
          phoneHref: `tel:${CONTACT_PHONE_E164}`,
        }}
        toc={toc}
        tocLabel="Sommaire du coût complet"
        mobileCtaLabel="Faire relire mon devis"
        sidebarContextCta={{
          eyebrow: "Devis Google Ads",
          title: "Faire remettre deux devis sur la même base",
          description:
            "Apportez les lignes des offres, le budget média hors coût réglementaire, les accès et votre définition d’une vente attribuée.",
          benefits: [
            "Même contenu, même durée, mêmes exclusions",
            "Coûts hors honoraires rendus visibles",
            "Conditions de contrôle et de sortie écrites",
          ],
          ctaLabel: "Décrire mon projet",
          ctaHref: "/demarrer-un-projet",
          secondaryLabel: CONTACT_PHONE_DISPLAY_NATIONAL,
          secondaryHref: `tel:${CONTACT_PHONE_E164}`,
        }}
        faqCategories={faqCategories}
        faqMeta={{
          eyebrow: "Questions fréquentes",
          titleStart: "Lire un devis",
          titleEm: "sans confondre",
          titleEnd: "média, honoraires et clients.",
          subtitle:
            "Neuf réponses courtes sur la facture, la TVA, l’assiette d’un pourcentage, la durée d’engagement, la propriété du compte et la gestion en interne.",
          ctaTitle: "Deux devis restent impossibles à comparer\u00a0?",
          ctaDescription:
            "Envoyez les lignes des offres et les hypothèses manquantes, sans transmettre de données personnelles de prospects.",
          ctaLabel: "Décrire ma situation",
          ctaHref: "/demarrer-un-projet",
        }}
        legalSources={[
          {
            source: "Google Ads · budgets quotidiens",
            href: "https://support.google.com/google-ads/answer/10486536?hl=fr",
            description:
              "Pour la plupart des campagnes\u00a0: une journée peut atteindre deux fois le budget quotidien moyen, et la limite mensuelle vaut généralement 30,4 fois ce budget. Consultée le 30\u00a0juillet 2026.",
          },
          {
            source: "Google Ads · budget total de campagne",
            href: "https://support.google.com/google-ads/answer/10486938?hl=fr",
            description:
              "Règles distinctes du budget total sur une période fixée\u00a0: ne pas y appliquer le raisonnement du budget quotidien.",
          },
          {
            source: "Google Ads · coûts réglementaires",
            href: "https://support.google.com/google-ads/answer/9750227?hl=fr",
            description:
              "Coût réglementaire actuellement indiqué à 2\u00a0% pour les annonces diffusées en France. Vérifier la zone et la facture à la date du calcul.",
          },
          {
            source: "Google Ads · TVA et facturation",
            href: "https://support.google.com/google-ads/answer/2375370?hl=fr",
            description:
              "Traitement décrit selon l’entité Google qui sert le compte, notamment Google France SARL ou Google Ireland. Cité au §02. Aucune conclusion fiscale universelle n’en découle.",
          },
          {
            source: "Google Ads · facturation en France",
            href: "https://support.google.com/google-ads/answer/2375371?hl=fr",
            description:
              "Indisponibilité indiquée de la facturation consolidée pour les agences médias achetant au nom d’annonceurs en France, avec renvoi au cadre de la loi Sapin.",
          },
          {
            source: "Légifrance · loi n° 93-122, article 20",
            href: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000031011011",
            description:
              "Mandat écrit pour l’achat d’espace par un intermédiaire, rémunération détaillée, rabais et avantages portés sur la facture remise à l’annonceur, facture du vendeur communiquée à celui-ci.",
          },
          {
            source: "Google Ads · associer un compte existant",
            href: "https://support.google.com/google-ads/answer/7456530?hl=fr",
            description:
              "L’association d’un compte existant à un compte administrateur ne change pas l’historique et ne transfère pas la propriété par défaut.",
          },
          {
            source: "Google Ads · propriété d’un compte",
            href: "https://support.google.com/google-ads/answer/7456532?hl=fr",
            description:
              "Règles de propriété d’un compte administrateur, cas de la création depuis ce compte et procédure de dissociation.",
          },
          {
            source: "Google Ads · actions de conversion",
            href: "https://support.google.com/google-ads/answer/11461796?hl=fr",
            description:
              "Distinction entre actions de conversion principales et secondaires, et usage de chacune dans les objectifs et les enchères.",
          },
          {
            source: "Google Ads · historique des modifications",
            href: "https://support.google.com/google-ads/answer/2454137?hl=fr",
            description:
              "Historique des modifications du compte sur les deux dernières années. Il retrace les décisions\u00a0; il ne prouve pas leur pertinence.",
          },
          {
            source: "CNIL · FAQ cookies et traceurs",
            href: "https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/FAQ",
            description:
              "Mise à jour du 29\u00a0avril 2026\u00a0: les traceurs de mesure publicitaire relèvent le plus souvent du consentement, et le refus doit être aussi facile que l’acceptation. Citée au §02.",
          },
          {
            source: "Hagnéré Code · publicité en ligne",
            href: "https://hagnere-code.ai/services/publicite-en-ligne",
            description:
              "Nos propres tarifs publics, relevés le 28\u00a0août 2026 et cités comme prix maison, jamais comme référence de marché.",
          },
          // Les trois entrées suivantes sont des pages commerciales de
          // prestataires concurrents, citées comme échantillon de prix daté.
          // La citation et le lien restent : ils font la vérifiabilité du
          // guide. Seul le signal de classement transmis est retiré — cette
          // page vise la requête « prix gestion Google Ads ».
          {
            source: "MS Web · tarifs",
            href: "https://www.ms-web.fr/creation-et-gestion-de-campagne-google-ads/",
            nofollow: true,
            description:
              "Prix vendeur public relevé le 30\u00a0juillet 2026\u00a0: création 149\u00a0€ HT, gestion à partir de 90\u00a0€ HT par mois.",
          },
          {
            source: "AdWorks · tarifs",
            href: "https://www.ad-works.fr/tarifs",
            nofollow: true,
            description:
              "Prix vendeur public relevé le 30\u00a0juillet 2026\u00a0: lancement à partir de 750\u00a0€ HT, gestion à partir de 450\u00a0€ HT par mois.",
          },
          {
            source: "DP Medias · tarifs",
            href: "https://www.dpmedias.com/google-ads",
            nofollow: true,
            description:
              "Prix vendeur public relevé le 30\u00a0juillet 2026\u00a0: audit 500\u00a0€ HT, création de compte 250\u00a0€ HT, gestion à partir de 450\u00a0€ HT par mois.",
          },
        ]}
        disclaimer={{
          eyebrow: "Limites de ce guide",
          title: "Une comparaison de coûts, pas une promesse de résultat",
          description:
            "Les prix vendeurs cités ont été relevés le 30 juillet 2026 et notre grille le 28 août 2026\u00a0; ils changent. Quatre pages publiques ne forment pas une statistique du marché français. Les quatre offres suivies, les volumes, les marges et les heures internes du cas sont choisis pour l’exemple, et le calculateur applique un taux de TVA unique par simplification. Vérifiez chaque facture, votre droit à récupération et les règles en vigueur avec votre expert-comptable. Fourchettes et règles de plateforme à revérifier tous les douze mois.",
        }}
        relatedGuides={[
          {
            label:
              "Pourquoi mon site n’apparaît pas dans Google\u00a0: le diagnostic",
            href: "/guides/pourquoi-site-pas-visible-google",
          },
          {
            label: "Rédiger un cahier des charges qui tient devant un devis",
            href: "/guides/cahier-des-charges-saas",
          },
        ]}
        relatedGuidesLabel="2 guides complémentaires"
      >
        <GuidePremiumSection
          id="reponse"
          number="01"
          label="Réponse directe"
          title="Ce que les pages publiques affichent, et ce qu’elles ne comparent pas"
        >
          <p>
            Trois pages de vendeurs, relevées le 30&nbsp;juillet 2026,
            affichent une gestion Google&nbsp;Ads mensuelle à partir de
            90&nbsp;€, 450&nbsp;€ et
            450&nbsp;€ HT. La nôtre, relevée le 28&nbsp;août 2026, démarre à
            1&nbsp;800&nbsp;€ HT&nbsp;: un facteur vingt entre les deux
            extrêmes. Quatre offres ne font pas une moyenne de marché.
          </p>
          <p>
            <strong>La dépense de l’année se joue ailleurs.</strong>{" "}
            Sur un cas construit à 5&nbsp;000&nbsp;€ HT de média par mois, le
            coût connu sur douze mois&nbsp;— média, coût réglementaire,
            honoraires, lancement, mesure et heures internes — va de
            78&nbsp;300&nbsp;€ à 81&nbsp;200&nbsp;€ selon le modèle
            facturé&nbsp;: 2&nbsp;900&nbsp;€ d’écart, soit 3,6&nbsp;% des
            79&nbsp;950&nbsp;€ du forfait. Le média et son coût réglementaire y
            pèsent 61&nbsp;200&nbsp;€&nbsp;— 76,5&nbsp;%&nbsp;; le lancement et
            les honoraires de gestion, 11&nbsp;550&nbsp;€.
          </p>
          <p>
            Aucune page de tarifs ne publie les deux nombres qui décident&nbsp;:
            le budget média où un pourcentage dépasse un forfait, et les heures
            que la moins chère laisse à votre équipe.
          </p>

          <GuidePremiumCase
            initial="H"
            eyebrow="Fil rouge du guide · exemple construit"
            title={"Hélène compare quatre devis pour 5\u00a0000\u00a0€ de média par mois"}
          >
            <p>
              <em>
                Exemple construit&nbsp;: les quatre offres, les volumes,
                l’effectif et le coût horaire interne sont choisis pour
                l’exemple et ne viennent d’aucun devis reçu. Les seuls montants
                relevés sur des pages publiques sont les prix vendeurs et notre
                grille, cités avec leur date. Ce n’est pas un dossier client.
              </em>{" "}
              Hélène est dirigeante d’une entreprise de 24&nbsp;personnes qui
              installe des pompes à chaleur en Loire-Atlantique. Elle veut
              5&nbsp;000&nbsp;€ HT de média par mois, diffusés en France. Un
              chargé d’affaires rappelle les demandes, sa comptable veut savoir
              ce qui sort de la banque.
            </p>
          </GuidePremiumCase>

          <p>
            Le détail des trois pages&nbsp;:{" "}
            <a
              href="https://www.ms-web.fr/creation-et-gestion-de-campagne-google-ads/"
              target="_blank"
              rel="nofollow noreferrer"
            >
              MS Web
            </a>
            , création 149&nbsp;€ HT puis 90&nbsp;€ HT&nbsp;;{" "}
            <a
              href="https://www.ad-works.fr/tarifs"
              target="_blank"
              rel="nofollow noreferrer"
            >
              AdWorks
            </a>
            , lancement dès 750&nbsp;€ HT puis 450&nbsp;€ HT&nbsp;;{" "}
            <a
              href="https://www.dpmedias.com/google-ads"
              target="_blank"
              rel="nofollow noreferrer"
            >
              DP Medias
            </a>
            , audit 500&nbsp;€ HT, création de compte 250&nbsp;€ HT, gestion dès
            450&nbsp;€ HT&nbsp;— et, sur la même page, un audit gratuit
            «&nbsp;synthétique&nbsp;».
          </p>
          <p>
            Pour situer notre propre offre, et non le marché&nbsp;: notre{" "}
            <Link href="/services/publicite-en-ligne">
              page publicité en ligne
            </Link>{" "}
            affichait le 28&nbsp;août 2026{" "}
            {typographieFrancaise(PRIX_MAISON_PUBLIES.audit)}, puis{" "}
            {typographieFrancaise(PRIX_MAISON_PUBLIES.forfaits)}. La même page{" "}
            {typographieFrancaise(PRIX_MAISON_PUBLIES.starter)}. Le média reste
            dépensé sur votre compte&nbsp;: ces honoraires ne le remplacent pas.
          </p>

          <div className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-[#0b1020] dark:border-zinc-800">
            <Image
              src="/guides/prix-gestion-google-ads/article-prix-ads-16x9.webp"
              alt="Quatre offres Google Ads ramenées sur la même table de comparaison"
              width={1600}
              height={900}
              sizes="(max-width: 1024px) 100vw, 760px"
              className="h-auto w-full"
            />
          </div>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="cout-complet"
          number="02"
          label="Décomposition"
          title={"Que payez-vous vraiment quand vous payez «\u00a0la gestion\u00a0»\u00a0?"}
        >
          <p>
            «&nbsp;Gestion Google Ads&nbsp;: 900&nbsp;€ par mois&nbsp;» décrit
            une ligne sur six. Les cinq autres sont facturées ailleurs, ou par
            personne&nbsp;— ce qui revient à les faire porter par votre équipe.
          </p>

          <GuideTable
            caption="Les six lignes d’un coût Google Ads complet, chiffrées sur le cas d’Hélène"
            headers={[
              "Ligne",
              "Ce qu’elle finance",
              "Sa valeur dans le cas construit",
            ]}
            rows={[
              [
                "Média",
                "La diffusion des annonces, facturée par Google",
                "5\u00a0000\u00a0€ HT par mois, 60\u00a0000\u00a0€ sur douze mois",
              ],
              [
                "Coût réglementaire France",
                "Le supplément appliqué par Google aux annonces diffusées en France",
                "2\u00a0% du média, soit 100\u00a0€ par mois et 1\u00a0200\u00a0€ sur douze mois",
              ],
              [
                "Honoraires de gestion",
                "Pilotage, analyse des requêtes, arbitrages, échanges",
                "750 à 1\u00a0000\u00a0€ HT par mois selon le modèle facturé",
              ],
              [
                "Lancement",
                "Audit, reprise ou création du compte, structure, accès",
                "750 à 900\u00a0€ HT, une seule fois",
              ],
              [
                "Mesure, page et créations",
                "Balises, consentement, page d’atterrissage, visuels, outils",
                "2\u00a0000\u00a0€ HT au lancement puis 250\u00a0€ HT par mois",
              ],
              [
                "Temps interne",
                "Cadrage, validations, rappel des demandes, retour sur les ventes",
                "8\u00a0h au lancement puis 3\u00a0h par mois, à 50\u00a0€ l’heure",
              ],
            ]}
          />

          <p>
            Ces six lignes se totalisent de trois façons, et chacune répond à
            une question différente.
          </p>

          <FormulaBox>
            {`Décaissement externe HT
= média + coût réglementaire + honoraires
+ lancement + mesure, page et créations
+ sommes encore dues si vous vous arrêtez à cette date

Décaissement TTC
= décaissement externe HT + TVA effectivement facturée

Coût connu
= décaissement externe HT
+ TVA non récupérable
+ heures internes × coût horaire chargé`}
          </FormulaBox>

          <p>
            Le coût réglementaire de 2&nbsp;% que{" "}
            <a
              href="https://support.google.com/google-ads/answer/9750227?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              Google indique pour les annonces diffusées en France
            </a>{" "}
            ne se compte qu’une fois. Ici, la dépense média est la base{" "}
            <strong>avant</strong> ce coût. Si votre export comptable l’intègre
            déjà, mettez le taux à zéro. La ligne mesure dépend, elle, d’une
            autorisation&nbsp;: la{" "}
            <a
              href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/FAQ"
              target="_blank"
              rel="noreferrer"
            >
              CNIL rappelle que les traceurs de mesure publicitaire relèvent le
              plus souvent du consentement
            </a>
            , et que le refus doit être aussi facile que l’acceptation. Ce qui
            est refusé ne remonte pas dans vos conversions.
          </p>

          <InfoBox
            variant="amber"
            title="Une TVA récupérable sort quand même de la banque"
          >
            <p>
              L’
              <a
                href="https://support.google.com/google-ads/answer/2375370?hl=fr"
                target="_blank"
                rel="noreferrer"
              >
                aide Google distingue les comptes servis par Google France SARL
                de ceux servis depuis l’Irlande
              </a>
              . Gardez trois colonnes&nbsp;: HT externe, TTC décaissé, coût
              connu après récupération estimée. La troisième revient à votre
              expert-comptable, pas à ce guide.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="modeles"
          number="03"
          label="Rémunération"
          title={"Forfait, pourcentage ou hybride\u00a0: à partir de quel budget l’ordre s’inverse-t-il\u00a0?"}
        >
          <p>
            Un nom de modèle décrit une mécanique de facturation&nbsp;: la façon
            dont les honoraires d’une gestion Google Ads suivent le budget
            média, ou ne le suivent pas.
            Les quatre offres d’Hélène, toutes en HT&nbsp;: un forfait à
            750&nbsp;€ puis 900&nbsp;€ par mois&nbsp;; un pourcentage à
            900&nbsp;€ puis 15&nbsp;% de l’assiette&nbsp;; un hybride à
            800&nbsp;€ puis 500&nbsp;€ plus 8&nbsp;% de cette assiette&nbsp;; un
            temps passé à 8&nbsp;h puis 10&nbsp;h par mois, à 100&nbsp;€
            l’heure.
          </p>

          <GuideTable
            caption="Coût connu des quatre offres, ramenées au même contenu par hypothèse"
            headers={[
              "Modèle",
              "Lancement puis mensuel",
              "À 3\u00a0mois",
              "À 6\u00a0mois",
              "À 12\u00a0mois",
            ]}
            rows={[
              [
                "Forfait",
                "750\u00a0€ puis 900\u00a0€",
                "22\u00a0350\u00a0€",
                "41\u00a0550\u00a0€",
                "79\u00a0950\u00a0€",
              ],
              [
                "Pourcentage, 15\u00a0%",
                "900\u00a0€ puis 750\u00a0€",
                "22\u00a0050\u00a0€",
                "40\u00a0800\u00a0€",
                "78\u00a0300\u00a0€",
              ],
              [
                "Hybride, 500\u00a0€ + 8\u00a0%",
                "800\u00a0€ puis 900\u00a0€",
                "22\u00a0400\u00a0€",
                "41\u00a0600\u00a0€",
                "80\u00a0000\u00a0€",
              ],
              [
                "Temps passé, 10\u00a0h à 100\u00a0€",
                "800\u00a0€ puis 1\u00a0000\u00a0€",
                "22\u00a0700\u00a0€",
                "42\u00a0200\u00a0€",
                "81\u00a0200\u00a0€",
              ],
            ]}
          />

          <p>
            Refaites la première case à la main&nbsp;; sans cela, aucun de ces
            totaux n’est vérifiable. Le coût réglementaire vaut 5&nbsp;000&nbsp;×&nbsp;2&nbsp;%
            = 100&nbsp;€ par mois. Le forfait à trois mois donne donc
            2&nbsp;000&nbsp;€ de mesure et de page, plus 750&nbsp;€ de
            lancement, plus 3&nbsp;×&nbsp;(5&nbsp;000 + 100 + 250 + 900) =
            18&nbsp;750&nbsp;€, soit <strong>21&nbsp;500&nbsp;€ HT</strong>. La
            TVA à 20&nbsp;% porte le décaissement à 25&nbsp;800&nbsp;€, et les
            17&nbsp;heures internes à 50&nbsp;€ ajoutent 850&nbsp;€&nbsp;:
            22&nbsp;350&nbsp;€ de coût connu, TVA supposée entièrement
            récupérable.
          </p>

          <h3>Les quatre points où le classement s’inverse</h3>
          <p>
            À 5&nbsp;000&nbsp;€ de média, le pourcentage gagne&nbsp;; il cesse
            de gagner au-dessus d’un certain budget, et chaque seuil se résout
            en une ligne. Appelez M le média mensuel&nbsp;:
          </p>

          <FormulaBox>
            {`Pourcentage contre forfait
0,15 × M = 900   →   M = 6\u00a0000\u00a0€ HT par mois

Hybride contre forfait
500 + 0,08 × M = 900   →   M = 5\u00a0000\u00a0€ HT par mois

Hybride contre pourcentage
500 + 0,08 × M = 0,15 × M   →   M = 7\u00a0143\u00a0€ HT par mois

Temps passé contre forfait
h × 100 = 900   →   h = 9\u00a0heures par mois`}
          </FormulaBox>

          <p>
            Hélène monte son budget de saison à 12&nbsp;000&nbsp;€ HT par
            mois&nbsp;: le forfait reste à 900&nbsp;€, le temps passé à
            1&nbsp;000&nbsp;€, l’hybride monte à 1&nbsp;460&nbsp;€ et le
            pourcentage à 1&nbsp;800&nbsp;€&nbsp;— 10&nbsp;800&nbsp;€ d’écart
            annuel face au forfait, pour un travail qui n’a pas doublé. Le seuil
            suit le taux&nbsp;: à 10&nbsp;%, le pourcentage ne dépasse le
            forfait qu’à partir de 9&nbsp;000&nbsp;€&nbsp;de média mensuel.
          </p>

          <InfoBox
            variant="blue"
            title="Ce classement suppose quatre devis au même contenu"
          >
            <p>
              Les colonnes ci-dessus tiennent le même lancement, la même mesure
              et les mêmes trois heures internes pour les quatre offres. Aucun
              devis réel ne s’aligne ainsi, et la section suivante chiffre
              l’écart. Un minimum mensuel, un plafond, une assiette qui inclut
              le coût réglementaire ou qui retire les avoirs déplacent chacun de
              ces quatre seuils.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="temps-interne"
          number="04"
          label="Charge interne"
          title={"Le devis le moins cher laisse-t-il du travail à votre équipe\u00a0?"}
        >
          <p>
            Les quatre colonnes du §03 tiennent parce qu’elles supposent le même
            contenu. Une ligne retirée d’un devis&nbsp;— le{" "}
            <Link href="/guides/automatiser-processus-metier">
              rapprochement entre demandes reçues et ventes signées
            </Link>
            , par exemple&nbsp;— retombe sur votre planning, au coût horaire
            chargé.
          </p>

          <FormulaBox>
            {`Heures à partir desquelles l’offre la moins chère cesse de l’être
= écart mensuel d’honoraires ÷ coût horaire interne chargé

Face au forfait et à l’hybride, à 900\u00a0€ par mois
(900 − 750) ÷ 50\u00a0€/h = 3\u00a0heures par mois

Face au temps passé, à 1\u00a0000\u00a0€ par mois
(1\u00a0000 − 750) ÷ 50\u00a0€/h = 5\u00a0heures par mois`}
          </FormulaBox>

          <p>
            À 5&nbsp;000&nbsp;€ de média, l’offre la moins chère au mois est le
            pourcentage, 750&nbsp;€. Trois&nbsp;heures de charge en plus par
            mois annulent son avance sur le forfait et sur l’hybride&nbsp;;
            cinq&nbsp;heures l’annulent aussi face au temps passé.
            Trois&nbsp;heures par mois font 36&nbsp;heures par an, soit{" "}
            <strong>1&nbsp;800&nbsp;€</strong> au coût horaire posé
            ici&nbsp;— exactement l’écart annuel d’honoraires.
          </p>
          <p>
            Ces 50&nbsp;€ de l’heure sont une hypothèse, pas une source, et les
            heures de charge en sont une autre&nbsp;: les deux sont écrites ici
            pour que vous puissiez les contester. Votre expert-comptable sort le
            coût horaire du salaire brut, des charges patronales et des heures
            réellement travaillées&nbsp;; les heures, elles, se comptent en
            listant ce que chaque devis ne fait pas.
          </p>

          <p>
            Le calculateur ci-dessous ouvre sur ces quatre offres, à contenu
            supposé identique. Chaque modèle y porte ses propres heures
            internes&nbsp;: montez celles de l’offre la moins chère et regardez
            le classement se retourner.
          </p>

          <div data-read-time-exclude="true">
            <GoogleAdsQuoteComparator />
          </div>

          <GuidePremiumMemo title={"Ce que la ligne «\u00a0coût connu\u00a0» ne sait pas"}>
            <ul>
              <li>Les coûts non saisis, les avoirs et les remises à venir.</li>
              <li>
                Les frais de sortie, sauf si vous les entrez pour la date
                concernée.
              </li>
              <li>
                Les clics, prospects et clients&nbsp;: elle les additionne après
                coup.
              </li>
            </ul>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="indicateurs"
          number="05"
          label="Mesure"
          title={"Du CPA à 102\u00a0€ au coût réel d’un client"}
        >
          <p>
            Le mot «&nbsp;conversion&nbsp;» recouvre des événements très
            différents. Google Ads distingue les{" "}
            <a
              href="https://support.google.com/google-ads/answer/11461796?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              actions de conversion principales et secondaires
            </a>&nbsp;: les premières alimentent la colonne Conversions et les
            enchères, les secondes servent à observer. Aucune des deux ne
            devient une vente.
          </p>

          <GuideTable
            caption="Quatre coûts unitaires, leurs dénominateurs et ce qu’ils ne prouvent pas"
            headers={[
              "Indicateur",
              "Calcul retenu ici",
              "Sur trois mois du cas construit",
              "Ce qu’il ne prouve pas",
            ]}
            rows={[
              [
                "CPC média chargé",
                "(média + coût réglementaire) ÷ clics",
                "15\u00a0300\u00a0€ ÷ 3\u00a0000 = 5,10\u00a0€ HT",
                "Que la visite intéresse votre offre",
              ],
              [
                "CPA média chargé",
                "÷ actions de conversion principales",
                "15\u00a0300\u00a0€ ÷ 150 = 102\u00a0€ HT",
                "Qu’une action remplie soit un prospect",
              ],
              [
                "CPL qualifié",
                "÷ prospects reconnus qualifiés par le commercial",
                "15\u00a0300\u00a0€ ÷ 60 = 255\u00a0€ HT",
                "Qu’un prospect qualifié achète",
              ],
              [
                "Coût connu par client",
                "coût connu ÷ nouveaux clients attribués",
                "22\u00a0350\u00a0€ ÷ 12 = 1\u00a0862,50\u00a0€",
                "La marge future ni une causalité parfaite",
              ],
            ]}
          />

          <p>
            Les volumes du cas&nbsp;: 1&nbsp;000&nbsp;clics, 50&nbsp;actions
            principales, 20&nbsp;prospects qualifiés et 4&nbsp;nouveaux clients
            par mois. Les deux dernières lignes ne partagent ni numérateur ni
            dénominateur&nbsp;: le CPA divise 15&nbsp;300&nbsp;€ de média chargé
            par 150&nbsp;actions, quand le coût connu par client divise
            22&nbsp;350&nbsp;€&nbsp;— honoraires, lancement, mesure et heures
            internes compris — par 12&nbsp;clients. À dénominateur seul, le
            média chargé coûte déjà 1&nbsp;275&nbsp;€ par client, douze fois et
            demie le CPA&nbsp;; les <strong>587,50&nbsp;€</strong> restants sont
            ce que le CPA ne compte pas. Piloter sur 102&nbsp;€ revient à
            ignorer 1&nbsp;760,50&nbsp;€ par client.
          </p>

          <h3>Le seuil que votre marge fixe, et non l’agence</h3>
          <p>
            Hélène retient 2&nbsp;500&nbsp;€ de marge par client sur douze mois.
            Douze clients valent 30&nbsp;000&nbsp;€&nbsp;; rapportés aux
            60&nbsp;prospects qualifiés de la période, ils fixent un plafond de
            500&nbsp;€ de coût connu par prospect. Le coût réel vaut
            22&nbsp;350&nbsp;€&nbsp;÷&nbsp;60 = 372,50&nbsp;€&nbsp;: il reste
            127,50&nbsp;€ par prospect, avant les coûts non saisis.
          </p>
          <p>
            Rejouez l’hypothèse basse, celle qu’aucune proposition commerciale
            ne contient. Un client par mois, 1&nbsp;000&nbsp;€ de
            marge&nbsp;: 3&nbsp;000&nbsp;€ contre 22&nbsp;350&nbsp;€ de coûts,
            un manque de 19&nbsp;350&nbsp;€, et le client coûte
            7&nbsp;450&nbsp;€. Écrivez ce scénario, et la date à laquelle vous
            arrêterez, avant la première diffusion.
          </p>

          <InfoBox
            variant="amber"
            title={"Cette différence n’est pas un retour sur investissement"}
          >
            <p>
              Un retour sur investissement suppose des gains, des coûts, une
              période et une règle d’attribution tenus ensemble. Ce calcul-ci
              répond à une seule question&nbsp;: la marge saisie couvre-t-elle
              les coûts saisis&nbsp;? Il ignore les ventes qui seraient venues
              sans publicité.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="incidents"
          number="06"
          label="Ce qui rate"
          title="Ce qui rate, et ce que ça coûte"
        >
          <p>
            Les incidents ci-dessous se déduisent du dossier d’Hélène et de
            règles publiées par Google. Aucun n’est un incident observé chez un
            client.
          </p>

          <h3>
            Le plafond de facturation autorise 979,20&nbsp;€ de plus par an
          </h3>
          <p>
            Hélène règle un budget quotidien moyen de 200&nbsp;€ et compte
            trente jours&nbsp;: 6&nbsp;000&nbsp;€ pour le mois. Google Ads
            indique que, pour la plupart des campagnes, la{" "}
            <a
              href="https://support.google.com/google-ads/answer/10486536?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              limite mensuelle vaut généralement 30,4&nbsp;fois le budget
              quotidien moyen
            </a>
            , soit 6&nbsp;080&nbsp;€ ici, et qu’une journée peut atteindre le
            double, 400&nbsp;€. C’est un plafond de facturation, pas une
            dépense certaine&nbsp;: un pic à 400&nbsp;€ un mardi ne dit rien du
            mois. Séparez ensuite les deux dépassements. Le coût réglementaire
            n’en est pas un&nbsp;: il vaut 120&nbsp;€ sur 6&nbsp;000&nbsp;€ de
            média, 1&nbsp;440&nbsp;€ sur douze mois, et le §02 l’annonçait
            déjà. La règle des 30,4&nbsp;jours, elle, n’ajoute que les
            80&nbsp;€ de média qui séparent 6&nbsp;080&nbsp;€ de
            6&nbsp;000&nbsp;€, plus 1,60&nbsp;€ de coût réglementaire&nbsp;:
            81,60&nbsp;€ par mois, 979,20&nbsp;€ sur douze, et une facture
            haute à 6&nbsp;201,60&nbsp;€ au lieu de 6&nbsp;120&nbsp;€. Un{" "}
            <a
              href="https://support.google.com/google-ads/answer/10486938?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              budget total de campagne
            </a>{" "}
            obéit à d’autres règles&nbsp;: demandez lequel est configuré.
          </p>

          <h3>
            L’assiette sans plafond ajoute 9&nbsp;450&nbsp;€ en neuf mois
          </h3>
          <p>
            Le devis au pourcentage ne définit ni plafond ni palier. Au
            quatrième mois, Hélène passe de 5&nbsp;000 à 12&nbsp;000&nbsp;€ de
            média pour la saison de chauffe&nbsp;: les honoraires passent
            mécaniquement de 750&nbsp;€ à 1&nbsp;800&nbsp;€ par mois,
            1&nbsp;050&nbsp;€ de plus sur les neuf mois restants, soit
            9&nbsp;450&nbsp;€. Un plafond mensuel écrit à 1&nbsp;200&nbsp;€
            aurait limité la hausse à 4&nbsp;050&nbsp;€. La clause manquante
            coûte 5&nbsp;400&nbsp;€, et elle tient en une phrase.
          </p>

          <h3>
            Le compte recréé coûte 1&nbsp;950&nbsp;€ et deux ans d’historique
          </h3>
          <p>
            Le compte a été créé depuis le compte administrateur de l’agence.
            Hélène n’en récupère pas l’accès et repart d’un compte
            neuf&nbsp;: 750&nbsp;€ de lancement chez la suivante,
            6&nbsp;heures internes à 50&nbsp;€ soit 300&nbsp;€, et le mois de
            préavis facturé 900&nbsp;€&nbsp;— 1&nbsp;950&nbsp;€. Ce qui coûte
            ensuite, c’est l’
            <a
              href="https://support.google.com/google-ads/answer/2454137?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              historique des modifications, conservé deux ans
            </a>
            , et l’historique de conversions&nbsp;: les deux repartent de zéro.
          </p>

          <div className="not-prose my-8 grid overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 md:grid-cols-[0.9fr_1.1fr]">
            <Image
              src="/guides/prix-gestion-google-ads/article-prix-ads-4x3.webp"
              alt="Quatre chemins de rémunération ramenés vers une grille de coût commune"
              width={1200}
              height={900}
              sizes="(max-width: 768px) 100vw, 380px"
              className="h-full w-full object-cover"
            />
            <div className="flex flex-col justify-center p-6">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-700 dark:text-indigo-300">
                Scénarios à rejouer avant de signer
              </p>
              <ul className="mb-0 mt-4 space-y-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                <li>Budget doublé au quatrième mois.</li>
                <li>Ventes attribuées divisées par deux.</li>
                <li>Arrêt au troisième mois, préavis compris.</li>
              </ul>
            </div>
          </div>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="sortie"
          number="07"
          label="Sortie"
          title={"Que gardez-vous si vous changez d’agence\u00a0?"}
        >
          <p>
            Reperdre le compte a coûté 1&nbsp;950&nbsp;€ dans l’incident
            précédent, et l’historique en plus. L’aide Google Ads publie deux
            règles opposées&nbsp;:{" "}
            <a
              href="https://support.google.com/google-ads/answer/7456530?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              associer un compte existant à un compte administrateur
            </a>{" "}
            ne transfère pas la propriété&nbsp;; un compte <em>créé</em> depuis
            ce compte administrateur peut lui appartenir par défaut, selon les{" "}
            <a
              href="https://support.google.com/google-ads/answer/7456532?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              règles de propriété et de dissociation
            </a>
            . Connectez-vous vous-même et regardez les rôles attribués.
          </p>

          <h3>Qui achète l’espace, et qui reçoit la facture&nbsp;?</h3>
          <p>
            Google indique que la{" "}
            <a
              href="https://support.google.com/google-ads/answer/2375371?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              facturation consolidée n’est pas disponible pour les agences
              médias en France
            </a>{" "}
            qui achètent au nom d’annonceurs, en renvoyant au cadre de la loi
            Sapin. Indépendamment de cette règle de produit,{" "}
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000031011011"
              target="_blank"
              rel="noreferrer"
            >
              l’article 20 de la loi n°&nbsp;93-122 du 29&nbsp;janvier 1993
            </a>{" "}
            impose un mandat écrit pour l’achat d’espace par un intermédiaire,
            une rémunération détaillée, les rabais et avantages portés sur la
            facture remise à l’annonceur, et la communication à celui-ci de la
            facture du vendeur.
          </p>

          <GuidePremiumMemo title="Ce qu’un devis peut confondre">
            <ul>
              <li>
                <strong>La règle de produit Google</strong> dit ce que la
                plateforme permet de facturer.
              </li>
              <li>
                L’<strong>article 20</strong> impose, lui, mandat écrit et
                rémunération détaillée.
              </li>
              <li>
                Reste <strong>votre organisation</strong>&nbsp;: qui paie, qui
                garde les pièces.
              </li>
            </ul>
          </GuidePremiumMemo>

          <p>
            Aucun de ces niveaux ne suffit seul&nbsp;; si une agence avance ou
            refacture le média, faites relire le montage. Et faites écrire la
            clause de sortie avant d’en avoir besoin&nbsp;— préavis, sommes
            dues, sort des campagnes actives, restitution des accès, remise des
            visuels et des textes, nom de la personne qui fait la passation.
          </p>

          <div className="not-prose my-8 grid gap-5 overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6 md:grid-cols-[220px_1fr]">
            <Image
              src="/guides/prix-gestion-google-ads/article-prix-ads-1x1.webp"
              alt="Accès, factures et actifs publicitaires rassemblés autour d’un registre commun"
              width={1200}
              height={1200}
              sizes="(max-width: 768px) 100vw, 220px"
              className="aspect-square w-full rounded-xl object-cover"
            />
            <div>
              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-700 dark:text-indigo-300">
                Contrôle de dix minutes, avant signature
              </p>
              <ul className="mb-0 mt-4 grid gap-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 sm:grid-cols-2">
                <li>Connexion en administrateur</li>
                <li>Profil de paiement à votre nom</li>
                <li>Facture Google d’origine retrouvée</li>
                <li>Comptes de mesure identifiés</li>
                <li>Visuels et textes acquis</li>
                <li>Délai et frais de sortie écrits</li>
              </ul>
            </div>
          </div>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="decision"
          number="08"
          label="Décider"
          title="Choisir le niveau d’aide, ou ne pas lancer"
        >
          <p>
            Le bon niveau d’aide dépend d’abord du montant du média, parce qu’il
            fixe le poids des honoraires, puis de l’état de la mesure, parce que
            sans elle aucune décision ne se prend.
          </p>

          <GuideTable
            caption="Ce que le budget média change à la question, et la condition à tenir avant de signer"
            headers={[
              "Situation",
              "Ce qu’il faut examiner",
              "La condition à écrire avant de signer",
            ]}
            rows={[
              [
                "Média sous 3\u00a0000\u00a0€ HT par mois",
                "Gestion interne, ou mission bornée en heures",
                "Un forfait de 900\u00a0€ y pèse 30\u00a0%\u00a0: fixez la perte maximale",
              ],
              [
                "Média de 3\u00a0000 à 8\u00a0000\u00a0€ HT",
                "Forfait, ou pourcentage plafonné",
                "Le plafond mensuel s’écrit en euros, pas en pourcentage",
              ],
              [
                "Média au-dessus de 8\u00a0000\u00a0€ HT, deux canaux",
                "Forfait avec clause de révision datée",
                "À 15\u00a0%, le pourcentage dépasse déjà 1\u00a0200\u00a0€ par mois",
              ],
              [
                "Page lente, mesure absente, demandes jamais rappelées",
                "Réparer avant d’acheter du clic",
                "Une correction à 2\u00a0000\u00a0€ coûte moins qu’un mois à 5\u00a0000\u00a0€",
              ],
              [
                "Perte maximale non écrite",
                "Reporter la diffusion",
                "Une décision financière datée, signée avant la première annonce",
              ],
            ]}
          />

          <h3>Quand Hagnéré Code n’est pas le bon choix</h3>
          <p>
            Notre forfait d’entrée vise des budgets média d’au moins
            8&nbsp;000&nbsp;€ par mois. En dessous, il est
            disproportionné&nbsp;: sur le cas d’Hélène, il pèserait
            36&nbsp;% de la dépense, et une gestion interne, un indépendant ou
            un audit ponctuel serviront mieux. Nous ne convenons pas non plus si
            vous attendez un chiffre d’affaires garanti, si l’annonceur ne garde
            pas ses accès, ou si rien ne dit{" "}
            <Link href="/guides/signes-besoin-logiciel-metier">
              quelles demandes sont devenues des clients
            </Link>
            . Nos honoraires sont fixes&nbsp;: à
            60&nbsp;000&nbsp;€ de média mensuel, le haut de la tranche de notre
            forfait Scale, un taux de 15&nbsp;% vaudrait 9&nbsp;000&nbsp;€ par
            mois contre 3&nbsp;500&nbsp;€ pour ce forfait. Le fixe nous
            coûterait donc de l’argent sur les gros budgets.
          </p>
          <p>
            Si vos annonces envoient vers un site que Google trouve mal, le
            guide{" "}
            <Link href="/guides/pourquoi-site-pas-visible-google">
              pourquoi un site n’apparaît pas dans Google
            </Link>{" "}
            traite la moitié organique&nbsp;; la{" "}
            <Link href="/guides/cahier-des-charges-saas">
              rédaction d’un cahier des charges
            </Link>{" "}
            donne, elle, une grille de lecture de devis applicable à une offre
            média.
          </p>

          <div className="not-prose my-8 rounded-2xl border border-zinc-200 bg-zinc-950 p-6 text-white dark:border-zinc-800 sm:p-8">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-300">
              Deux devis, une seule base
            </p>
            <p className="mb-0 mt-2 max-w-2xl text-xl font-bold">
              Envoyez les lignes des offres, pas seulement le prix mensuel
            </p>
            <p className="mb-0 mt-3 max-w-3xl text-sm leading-relaxed text-zinc-300">
              Indiquez la dépense média hors coût réglementaire, l’état de votre
              mesure et ce que votre équipe peut prendre en charge. Nous
              expliquons ce que couvre notre proposition&nbsp;— ou nous vous
              disons qu’une solution plus légère suffit.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <TrackedGuideCtaLink
                href="/services/publicite-en-ligne"
                placement="article_end_inline"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-bold text-zinc-950 no-underline transition hover:bg-zinc-100"
              >
                Voir notre offre publicitaire
              </TrackedGuideCtaLink>
              <TrackedGuideCtaLink
                href="/demarrer-un-projet"
                placement="article_end_inline"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-zinc-700 px-4 py-2 text-sm font-bold text-white no-underline transition hover:bg-zinc-900"
              >
                Décrire mon projet
              </TrackedGuideCtaLink>
            </div>
          </div>

          <p className="text-sm">
            <strong>Transparence.</strong> Hagnéré Code vend une gestion
            publicitaire et perçoit des honoraires si vous nous la confiez. Rien
            ici n’exige de passer par nous&nbsp;: les six lignes de coût, les
            quatre seuils de bascule, la division qui chiffre le temps interne
            et le décompte à 3, 6 et 12&nbsp;mois se refont avec vos nombres.
            Les prix vendeurs datent du 30&nbsp;juillet 2026, notre grille du
            28&nbsp;août 2026&nbsp;; les deux sont à revérifier tous les douze
            mois. Aucun coût, aucun délai et aucun résultat ne sont garantis par
            cette page&nbsp;: seul un devis signé engage.
          </p>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
