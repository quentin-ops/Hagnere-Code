import Link from "next/link";
import {
  FormulaBox,
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
import { SiteAidQuickCheck } from "@/components/guides/SiteAidQuickCheck";
import { formatGuideDate, getGuide, guideRobots } from "@/lib/guides";
import {
  buildGuideMetadata,
  buildGuideStructuredData,
} from "@/lib/guide-page-seo";

const guide = getGuide("aides-creation-site-internet");

export const metadata = {
  ...buildGuideMetadata(
    guide,
    "Aide à la création d’un site : preuve, TVA et trésorerie avant de décider",
  ),
  robots: guideRobots(guide),
};

const [articleJsonLd, breadcrumbJsonLd] = buildGuideStructuredData(
  guide,
  "Aides à la création d’un site internet",
);

const faqItems: GuideFAQItem[] = [
  {
    question:
      "Existe-t-il une aide nationale automatique pour créer un site internet ?",
    answer:
      "Non, aucune subvention nationale forfaitaire ouverte à toute entreprise et à tout site n’a été identifiée dans les sources officielles consultées le 26 juillet 2026. Il existe des aides territoriales, des accompagnements, des prêts et des aides liées à la création, mais chacun suit ses propres critères et ne doit pas être soustrait du budget avant notification écrite.",
  },
  {
    question: "Le chèque France Num de 500 € existe-t-il encore ?",
    answer:
      "Non. La page officielle archivée indique que cette mesure exceptionnelle a fermé le 31 juillet 2021. Cette fermeture ne prouve pas qu’aucune autre aide existe : elle oblige à rechercher un dispositif actuel pour le territoire et le profil de l’entreprise.",
  },
  {
    question: "Doit-on déposer la demande avant de signer le devis ?",
    answer:
      "La règle dépend du dispositif. Demandez par écrit si la signature, l’acompte, la commande, le début des travaux ou le premier paiement constitue le commencement interdit ; un dépôt ou un accusé de réception ne vaut pas automatiquement autorisation de commencer.",
  },
  {
    question: "Peut-on intégrer une aide théorique dans le budget du site ?",
    answer:
      "Non. Sans notification, l’aide budgétée reste à 0 €. La valeur juridique d’une aide ou son ESB sert au contrôle du cumul ; elle ne réduit pas le coût du site. Pour une subvention, seule la contribution financière approuvée pour la facture est affichée sous conditions, puis seul un paiement effectivement documenté — versé à l’entreprise ou payé directement au fournisseur — entre dans le réalisé. Le « montant encaissé » désigne uniquement le premier cas ; un paiement direct documenté est réalisé sans encaissement par l’entreprise.",
  },
  {
    question:
      "L’ESB d’un prêt ou d’une garantie réduit-il le budget à avancer ?",
    answer:
      "Non. L’équivalent-subvention brut mesure l’élément d’aide pour le cumul de minimis ; ce n’est ni le capital du prêt, ni le montant garanti, ni de la trésorerie disponible. Le dossier financier de ce guide modélise la contribution d’une subvention, pas le financement, les remboursements ou le coût total d’un prêt ou d’une garantie.",
  },
  {
    question: "Faut-il avancer la TVA et la totalité de la facture ?",
    answer:
      "Souvent oui lorsque l’aide est remboursée après réalisation, mais seul le règlement du dispositif permet de conclure. Distinguez facture TTC, TVA déductible ou non, éventuelle part versée avant paiement et date du remboursement ; une TVA inconnue doit rester inconnue.",
  },
  {
    question: "Le versement de l’aide clôt-il définitivement le dossier ?",
    answer:
      "Pas nécessairement. La décision ou la convention peut encore imposer des livrables, des rapports, des indicateurs, une visibilité du financement, une conservation des pièces, un maintien du site ou de l’activité, des contrôles et la notification de changements, avec un risque de réduction ou de restitution. Recopiez chaque obligation et sa durée exacte ; si le document ne les précise pas, demandez une confirmation écrite au lieu de supposer qu’elles sont nulles.",
  },
  {
    question: "Le CPF peut-il payer la production d’un site par une agence ?",
    answer:
      "Non. Le CPF finance une formation éligible, pas la conception et le développement d’un site rebaptisés formation. Les droits ne sont pas virables sur un compte bancaire et les identifiants Mon Compte Formation ne doivent jamais être transmis à un vendeur.",
  },
  {
    question: "Peut-on cumuler plusieurs aides sur la même facture ?",
    answer:
      "Parfois, sous les limites de chaque régime. Tenez un registre avec l’organisme, la date, le montant et les dépenses concernées, puis demandez une validation écrite pour la même assiette et la même facture ; n’additionnez pas simplement les taux affichés. Une mention « hors de minimis », une base juridique ou une URL ne suffit pas à conclure sans validation écrite de l’autorité attributrice ou d’un conseil compétent.",
  },
  {
    question: "Quand vaut-il mieux lancer le site sans attendre l’aide ?",
    answer:
      "Avant notification, comparez le coût documenté du retard à l’aide théorique. Après notification, comparez-le à la contribution financière approuvée pour la facture. S’il est aussi élevé et que le projet reste soutenable avec 0 € d’aide, attendre uniquement pour cette aide n’est plus rationnel. Un manque de trésorerie interdit toutefois de confondre « ne pas attendre » avec « engager le projet complet ».",
  },
];

const keyPoints: GuideSidebarKeyPoint[] = [
  {
    number: "01",
    title: "Aide = 0 sans notification",
    description: "",
    color: "violet",
  },
  {
    number: "02",
    title: "Devis vérifié ligne par ligne",
    description: "",
    color: "blue",
  },
  {
    number: "03",
    title: "TTC, TVA, trésorerie et attente",
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
    href: "/guides/combien-coute-un-site-internet",
    label: "Construire le budget complet du site",
  },
  {
    href: "/guides/prix-site-vitrine",
    label: "Comparer le prix d’un site vitrine",
  },
  {
    href: "/ressources/kit-cahier-des-charges-site-internet",
    label: "Ventiler le devis avec un cahier des charges",
  },
  {
    href: "/services/sites-vitrines",
    label: "Voir notre service de création de site",
  },
  {
    href: "/tarifs",
    label: "Consulter nos tarifs publiés",
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
          { label: "Aides à la création d’un site" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Partez de votre devis détaillé, vérifiez chaque dépense et calculez la facture TTC à avancer. Une aide reste à 0 € dans le budget tant qu’elle n’est pas notifiée."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={keyPoints}
        relatedLinks={relatedLinks}
        faqTitle="Aides pour un site internet : réponses sans promesse"
        faqItems={faqItems}
        showSidebarCta={false}
      >
        <p className="lead">
          Vous avez un devis de 6 000, 10 000 ou 20 000 € HT et cherchez une
          aide pour créer ou refaire le site.{" "}
          <strong>
            Aucune subvention nationale automatique pour tout site et toute
            entreprise n’a été identifiée dans les sources officielles
            consultées le 26 juillet 2026.
          </strong>{" "}
          Une piste peut néanmoins exister selon la commune, l’activité,
          l’ancienneté, la taille et les lignes du devis. Il faut distinguer une
          subvention, un accompagnement pris en charge, un prêt remboursable,
          l’ACRE ou l’ARCE, une formation et un effet fiscal.
        </p>

        <p>
          La règle de sécurité tient en une ligne :{" "}
          <strong>sans notification écrite, l’aide budgétée vaut 0 €</strong>.
          Vérifiez aussi l’ordre des actes, la TVA, le cumul, le destinataire du
          paiement et sa preuve. Le tri court de ce guide calcule ensuite un
          besoin prudent de trésorerie et compare le coût documenté de l’attente
          à l’aide théorique — ou à la contribution financière approuvée pour la
          facture lorsqu’elle existe.
        </p>

        <InfoBox variant="blue" title="La réponse utile avant de chercher">
          Ne demandez pas seulement « combien puis-je obtenir ? ». Demandez :
          mon profil entre-t-il dans le règlement, quelles lignes sont admises,
          quel acte puis-je accomplir, combien dois-je avancer TTC, quelle
          preuve vaut notification et le projet reste-t-il viable avec 0 €
          d’aide ?
        </InfoBox>

        <p>
          <strong>Vous avez déjà une fiche ou vous cherchez le bon portail ?</strong>{" "}
          Le tri express ci-dessous sépare d’abord subvention, prêt, garantie,
          accompagnement, création, formation et effet fiscal. Il n’interprète
          aucun texte libre et conserve toutes les inconnues dans l’export.
        </p>

        <SiteAidQuickCheck />

        <h3>Utiliser le tri en trois temps</h3>

        <ol>
          <li>
            <strong>Séparez la recherche de la candidature.</strong> Si vous
            cherchez encore une aide, commencez par France Num ou Les-aides.fr,
            le portail du réseau CCI. Si vous disposez déjà d’une fiche
            officielle, passez directement au contrôle du type de soutien, du
            profil, des dépenses et de l’ordre des actes.
          </li>
          <li>
            <strong>Chiffrez sans transformer une inconnue en zéro.</strong> Le
            tri distingue facture TTC multi-taux, TVA récupérable, assiette
            admissible, aide théorique, contribution notifiée, paiement
            documenté et coût de l’attente. Sans notification écrite, une
            subvention reste à 0 € au budget.
          </li>
          <li>
            <strong>Exportez aussi les questions non résolues.</strong> Le
            dossier TXT reprend les données brutes, les formules, la fourchette
            éventuelle de coût, le besoin maximal de trésorerie et les éléments
            de preuve à joindre. Il reste un document de travail, jamais une
            validation.
          </li>
        </ol>

        <InfoBox
          variant="blue"
          title="Les cas avancés restent des annexes humaines, pas un verdict automatique"
        >
          Si la fiche cite de minimis, un SIEG, l’agriculture ou la pêche, une
          restructuration, un territoire ultramarin, une autre compensation ou
          le registre central, arrêtez le tri court. Recopiez le règlement et la
          conclusion écrite de l’autorité, puis faites relire la situation. Le
          texte libre d’une décision n’est jamais interprété pour produire un
          résultat favorable.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "tri-aides-site",
              label: "Tri express : vérifier et chiffrer en 3–5 minutes",
            },
            {
              id: "reponse-rapide",
              label: "1. Classer la piste avant de compter l’aide",
            },
            {
              id: "aides-mortes",
              label: "2. Écarter une aide fermée ou mal nommée",
            },
            {
              id: "regions",
              label: "3. Vérifier le territoire : AURA et Bretagne",
            },
            {
              id: "mode-emploi",
              label: "4. Respecter l’ordre des actes",
            },
            {
              id: "methode",
              label: "5. Calculer aide, TVA, trésorerie et attente",
            },
            {
              id: "aides-nationales",
              label: "6. Distinguer prêt, fiscalité, ACRE, ARCE et CPF",
            },
            {
              id: "micro",
              label: "7. Adapter la recherche au profil",
            },
            {
              id: "cas-avances-cumul",
              label: "8. Ouvrir les cas avancés de cumul",
            },
            {
              id: "arnaques",
              label: "9. Repérer promesses, fraude et contrat opaque",
            },
            {
              id: "sans-aide",
              label: "10. Décider avec ou sans aide",
            },
          ]}
        />

        <h2 id="reponse-rapide">
          1. Une « aide au site » peut désigner six choses différentes
        </h2>

        <p>
          Le mot <em>aide</em> ne dit pas ce qui entre dans la trésorerie.
          Classez d’abord la piste. Une prise en charge de conseil n’est pas un
          chèque ; un prêt apporte de la trésorerie mais crée une dette ; l’ACRE
          réduit des cotisations ; le CPF finance une formation éligible.
        </p>

        <GuideTable
          caption="Six familles à ne pas additionner comme des subventions"
          headers={["Piste", "Effet réel", "Montant à budgéter avant preuve"]}
          rows={[
            [
              "Subvention",
              "Rembourse ou avance une part de dépenses admises selon un règlement.",
              "0 € sans notification.",
            ],
            [
              "Accompagnement",
              "Diagnostic, conseil ou formation pris en charge ; pas nécessairement de trésorerie versée.",
              "0 € sur la facture du site si les travaux ne sont pas couverts.",
            ],
            [
              "Prêt",
              "Trésorerie à rembourser avec intérêts, assurance et frais éventuels.",
              "0 € tant que l’offre et le coût total ne sont pas acceptés.",
            ],
            [
              "ACRE ou ARCE",
              "Réduction de cotisations ou versement lié aux droits ARE.",
              "À traiter dans le budget global de création, pas comme remise du prestataire.",
            ],
            [
              "Formation",
              "Acquisition de compétences ; la production du site reste une autre prestation.",
              "0 € pour les travaux de conception et développement.",
            ],
            [
              "Traitement fiscal ou comptable",
              "Effet éventuel sur charge, immobilisation ou impôt selon le cas.",
              "Aucun gain avant qualification par le professionnel compétent.",
            ],
          ]}
        />

        <p>
          Le{" "}
          <a
            href="https://www.francenum.gouv.fr/aides-financieres/trouver-une-aide-financiere"
            target="_blank"
            rel="noopener noreferrer"
          >
            moteur France Num
          </a>{" "}
          annonce une recherche parmi « près de 200 aides » avec des filtres de
          commune, activité, taille et ancienneté. Ce nombre décrit la base, pas
          vos chances ni une liste de 200 aides accessibles. Commencez par le
          filtre, puis ouvrez toujours la page de l’autorité qui décide.
        </p>

        <h2 id="aides-mortes">
          2. Une ancienne aide ne devient pas actuelle parce qu’elle ressort
          encore sur Google
        </h2>

        <p>
          Le chèque France Num de 500 € a bien existé, mais la{" "}
          <a
            href="https://www.francenum.gouv.fr/aides-financieres/guides-et-conseils-financiers/cheque-france-num-aide-de-500-euros-pour-soutenir"
            target="_blank"
            rel="noopener noreferrer"
          >
            page officielle archivée
          </a>{" "}
          indique une fermeture au 31 juillet 2021. Elle sert de preuve
          historique, pas de formulaire 2026.
        </p>

        <GuideTable
          caption="Contrôle minimal d’une fiche trouvée dans un moteur"
          headers={["Ce que vous voyez", "Ce qu’il faut prouver", "Décision"]}
          rows={[
            [
              "Un montant sans date",
              "Date de mise à jour, état du guichet et budget encore disponible.",
              "Ne rien soustraire.",
            ],
            [
              "Un article ou un moteur",
              "Page directe de la région, de l’EPCI, de l’administration ou du financeur.",
              "Traiter l’article comme une piste.",
            ],
            [
              "Un formulaire accessible",
              "Période, territoire, bénéficiaire et autorité réellement compétente.",
              "L’accès au formulaire ne prouve pas l’éligibilité.",
            ],
            [
              "Un ancien dispositif fermé",
              "Éventuel successeur explicitement publié par l’autorité.",
              "Ne pas inventer une reconduction.",
            ],
          ]}
        />

        <p>
          Inversement, la fermeture de ce chèque ne prouve pas l’absence de
          toute aide. Notre formulation est volontairement bornée : aucune
          subvention nationale forfaitaire générale n’a été identifiée dans le
          corpus officiel consulté le 26 juillet 2026 ; des dispositifs ciblés
          peuvent exister et changer.
        </p>

        <h2 id="regions">
          3. Le territoire, l’activité et la ligne de devis décident ensemble
        </h2>

        <p>
          Une recherche utile part de la commune d’établissement, puis de
          l’activité, de l’âge de l’entreprise, de l’effectif et du chiffre
          d’affaires. La CCI ou la CMA peut orienter ; elle ne remplace pas la
          notification de l’autorité. Conservez l’URL officielle, la date de
          consultation et la personne ou le service qui répond.
        </p>

        <ol>
          <li>
            Filtrez dans France Num avec le profil réel de l’établissement.
          </li>
          <li>
            Ouvrez la fiche de la région ou de l’intercommunalité compétente.
          </li>
          <li>
            Relevez bénéficiaires, exclusions, dépenses, seuil, taux, plafond,
            calendrier, cumul, mode de paiement, destinataire et justificatif.
          </li>
          <li>
            Envoyez une question écrite avec le profil et les lignes du devis.
          </li>
        </ol>

        <h3 id="aura">
          Auvergne-Rhône-Alpes : accompagnement actif, pas chèque pour les
          travaux
        </h3>

        <p>
          Au 26 juillet 2026,{" "}
          <a
            href="https://www.francenum.gouv.fr/aides-financieres/atouts-numeriques"
            target="_blank"
            rel="noopener noreferrer"
          >
            France Num
          </a>{" "}
          et le{" "}
          <a
            href="https://campusnumerique.auvergnerhonealpes.fr/dispositifs/atouts-numeriques-region-accompagnement-aux-projets-numeriques/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Campus Région du numérique
          </a>{" "}
          présentent Atouts Numériques comme un accompagnement pris en charge à
          100 % dans le périmètre annoncé. Le parcours court comprend 3,5 h
          individuelles ; le parcours structurant, 7 h individuelles et 3,5 h
          collectives. Cela ne prouve aucun remboursement de la production du
          site.
        </p>

        <InfoBox
          variant="amber"
          title="Deux sources publiques, un critère qui diverge"
        >
          France Num mentionne le commerce et l’artisanat ; l’opérateur écrit «
          quel que soit votre secteur ». Les deux indiquent moins de 50 salariés
          et environ deux années d’activité. Ne tranchez pas silencieusement :
          demandez au gestionnaire de confirmer secteur, ancienneté exacte,
          parcours et ouverture.
        </InfoBox>

        <h3>
          PASS Bretagne : le taux de 30 % ne s’applique pas au devis entier
        </h3>

        <p>
          La{" "}
          <a
            href="https://www.bretagne.bzh/aides/fiches/pass-commerce-artisanat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            fiche PASS Commerce et Artisanat
          </a>{" "}
          consultée le 26 juillet 2026 affiche 30 % des dépenses admissibles, un
          plafond d’aide de 7 500 € et une assiette maximale de 25 000 €. Le{" "}
          <a
            href="https://www.bretagne.bzh/app/uploads/Guide-utilisateur-Extranet-PCA_V4-Entreprise.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide utilisateur v4 de janvier 2026
          </a>{" "}
          fixe aussi un coût prévisionnel minimal de 6 000 € HT.
        </p>

        <GuideTable
          caption="Ce qui change réellement le cas breton"
          headers={["Contrôle", "Élément publié", "Conséquence"]}
          rows={[
            [
              "Entreprise",
              "Commerce ou artisanat de proximité, clientèle surtout composée de particuliers, 7 CDI ETP maximum hors dirigeant et CA ≤ 1 M€ HT.",
              "Une agence, une profession libérale ou une activité surtout B2B peut être exclue.",
            ],
            [
              "Territoire",
              "Conditions et cofinancement propres à l’EPCI de l’établissement.",
              "La règle locale doit être confirmée avant toute conclusion.",
            ],
            [
              "Site",
              "Création ou refonte potentiellement admise ; module e-commerce examiné séparément.",
              "Ventiler le devis et obtenir l’accord ligne par ligne.",
            ],
            [
              "Exclusions numériques",
              "Abonnement, hébergement et maintenance exclus ; visuels et publicité e-commerce exclus ; formation limitée.",
              "Ne pas appliquer 30 % à ces montants.",
            ],
            [
              "Cumul",
              "Aides publiques plafonnées à 50 % sur la même assiette annoncée.",
              "Déclarer chaque aide et chaque facture au gestionnaire.",
            ],
            [
              "Versement",
              "Projet achevé puis factures acquittées pour solliciter le paiement.",
              "Prévoir généralement la facture TTC avant remboursement.",
            ],
          ]}
        />

        <p>
          La fiche publie aussi de nombreuses exclusions d’activité, notamment
          agences prestataires de services, professions libérales, commerce de
          gros, services à la personne, activités financières, médicales ou
          paramédicales et plusieurs loisirs. Cette liste doit être relue avec
          l’EPCI : elle ne peut pas être réduite à « entreprise bretonne ».
        </p>

        <h2 id="mode-emploi">
          4. Demande, notification, facture et paiement sont quatre preuves
          différentes
        </h2>

        <p>
          Chaque règlement décide de l’ordre exact. La frise ci-dessous ne
          remplace pas ce règlement : elle indique les preuves à obtenir pour ne
          pas confondre une étape administrative avec un accord financier.
        </p>

        <ol>
          <li>
            <strong>Identifier l’autorité.</strong> Enregistrer l’URL en HTTPS,
            la date et le territoire. Ouvrir la page depuis le site de
            l’organisme, puis vérifier séparément le domaine, l’autorité
            éditrice et le chemin précis : une adresse techniquement valide ne
            prouve ni que le domaine est officiel, ni que la page vise le bon
            dispositif.
          </li>
          <li>
            <strong>Qualifier l’entreprise.</strong> Activité, âge, forme,
            effectif, chiffre d’affaires, groupe éventuel et régime de TVA.
          </li>
          <li>
            <strong>Ventiler le devis.</strong> Conception, contenus,
            développement, e-commerce, abonnement, hébergement, maintenance,
            publicité et formation.
          </li>
          <li>
            <strong>Demander la règle de commencement.</strong> Faire préciser
            signature, acompte, commande, premier travail et premier paiement,
            puis relever les dates limites d’acceptation, de réalisation et de
            demande de paiement de l’aide.
          </li>
          <li>
            <strong>Conserver le devis non accepté</strong> tant que l’ordre des
            actes n’est pas écrit.
          </li>
          <li>
            <strong>Déposer selon le règlement</strong> et archiver les pièces
            envoyées.
          </li>
          <li>
            <strong>Distinguer l’accusé de réception</strong> de la notification
            qui précise le montant et les conditions.
          </li>
          <li>
            <strong>Engager seulement quand le document l’autorise</strong>,
            puis exécuter le périmètre notifié. Si une ligne, un montant ou un
            fournisseur change, obtenir la règle d’avenant avant de modifier.
          </li>
          <li>
            <strong>Payer et conserver les justificatifs</strong> au nom de
            l’entreprise : numéro et date de la facture finale détaillée,
            référence de son paiement et livrables. Rapprocher cette facture du
            devis utilisé dans le calcul.
          </li>
          <li>
            <strong>Demander ou vérifier le paiement</strong>, puis classer le
            montant brut de la subvention ou l’équivalent-subvention brut (ESB)
            pour le cumul, la contribution financière approuvée pour la facture,
            puis le paiement effectivement documenté, son destinataire —
            entreprise ou fournisseur —, leur éventuel écart, ainsi que la date
            et la référence du paiement. La date du paiement de l’aide ne peut
            pas précéder la date où le droit légal est conféré. Si les dates,
            les montants ou les destinataires se contredisent, ne classez pas
            l’aide comme reçue : demandez la décision modifiée ou le
            rapprochement écrit de l’autorité. Une notification prouve un droit
            déclaré sous conditions ; seule la chaîne notification, facture et
            paiement permet de documenter le réalisé.
          </li>
          <li>
            <strong>Fermer aussi l’après-versement.</strong> Recopier depuis la
            décision, la convention ou une réponse écrite la durée éventuelle de
            maintien du site, du service ou de l’éligibilité ; les livrables,
            indicateurs et rapports attendus ; les pièces à conserver et pendant
            combien de temps ; les règles de publicité, de contrôle et de
            notification d’un changement ; puis les conséquences d’un
            manquement, dont une réduction ou une restitution éventuelle. Le
            silence d’une fiche ne prouve jamais qu’il n’existe aucune
            obligation : faire confirmer chaque point et chaque durée manquants.
          </li>
        </ol>

        <InfoBox
          variant="blue"
          title="Une URL valide n’est pas encore une source authentifiée"
        >
          Une adresse en HTTPS, un numéro de dossier ou une signature ne
          prouvent pas, à eux seuls, que la pièce est officielle. Revenez au
          site de l’autorité, retrouvez la fiche par sa propre navigation,
          contrôlez le titre, le territoire, la date et le contact
          d’instruction, puis conservez ce chemin exact. Une adresse locale, un
          domaine de démonstration, une référence telle que « TEST-0000 » ou un
          courriel générique doivent rester non authentifiés jusqu’à
          confirmation.
        </InfoBox>

        <InfoBox
          variant="amber"
          title="Dépôt ≠ autorisation ≠ notification ≠ paiement documenté"
        >
          Un accusé prouve seulement que le dossier est reçu. Même une
          notification reste soumise à l’exécution et aux justificatifs. Le
          budget doit montrer séparément 0 € avant notification, la contribution
          financière approuvée pour la facture sous conditions et le paiement
          effectivement prouvé, qu’il soit versé à l’entreprise ou payé
          directement au fournisseur. La valeur juridique ou l’ESB reste
          réservée au contrôle du cumul.
        </InfoBox>

        <InfoBox
          variant="blue"
          title="Le versement ne clôt pas forcément l’aide"
        >
          Certaines décisions continuent d’imposer un maintien, des rapports,
          une conservation de pièces, une publicité, un accès au contrôle ou la
          notification de changements. D’autres n’imposent pas chacune de ces
          obligations. Ne supposez donc ni règle universelle ni durée par défaut
          : recopiez le texte applicable, datez la vérification et laissez « à
          confirmer » tout ce que l’autorité n’a pas encore précisé par écrit.
        </InfoBox>

        <h2 id="methode">
          5. Calculer la facture TTC, l’aide théorique, la trésorerie et le coût
          d’attente
        </h2>

        <p>
          Commencez par chaque ligne du devis. Une ligne inconnue ne vaut ni
          admissible ni exclue ; une TVA à confirmer ne vaut pas 0 %. Le calcul
          final reste une fourchette tant qu’une donnée qui le détermine demeure
          inconnue. Vérifiez aussi l’assiette officielle : le tri court calcule
          seulement le cas où le taux porte sur les dépenses admissibles HT.
          Pour une assiette TTC, fondée sur la TVA non récupérable, forfaitaire
          ou différente, refaites le calcul à partir de la formule du
          dispositif.
        </p>

        <FormulaBox>{`Aide théorique = min(HT admissible × taux, plafond)
Facture TTC = Σ [HT de la ligne × (1 + taux de TVA de cette ligne)]
TVA déductible = somme(TVA de la ligne × part déductible)
Coût sans aide = facture TTC − TVA déductible
Coût conditionnel d'une subvention = coût sans aide
                                      − contribution financière approuvée pour la facture
                                      + frais propres à la demande
Coût d’attente = marge contributive mensuelle perdue à cause du retard × mois
                 + frais propres à la demande et à l’attente
Aide à comparer = contribution financière approuvée pour la facture si elle existe,
                  sinon aide théorique

Sans notification : aide budgétée = 0 €
Si coût d’attente ≥ aide à comparer :
ne pas attendre uniquement pour cette aide.`}</FormulaBox>

        <p>
          Tous les coûts produits ici sont des repères{" "}
          <strong>avant traitement fiscal et comptable</strong>. Le coût du
          projet, la qualification de la dépense et le traitement d’une
          subvention éventuelle sont trois questions différentes : ne déduisez
          pas de ce calcul qu’une dépense est immédiatement déductible, qu’elle
          doit être immobilisée ou que l’aide suit le même rythme. Concrètement,
          la dépense et une éventuelle subvention peuvent suivre des traitements
          différents.
        </p>

        <p>
          Avec plusieurs taux, calculez chaque ligne avant d’additionner.
          Exemple arithmétique fictif, sans lien avec une aide : 4 000 € à 20 %,
          3 000 € à 10 % et 3 000 € à 5,5 % donnent 4 800 + 3 300 + 3 165 ={" "}
          <strong>11 265 € TTC</strong>.
        </p>

        <h3>Trois budgets fictifs calculés avec la même méthode</h3>

        <p>
          Les taux et lignes ci-dessous sont pédagogiques. Le cas breton de 10
          000 € reprend les paramètres publiés, mais ne prouve ni le profil, ni
          la décision de l’EPCI. Les deux autres cas montrent les effets de
          taille, pas des aides disponibles.
        </p>

        <GuideTable
          caption="Scénarios fictifs avant notification, TVA à 20 %"
          headers={["Projet", "Calcul reproductible", "Conclusion prudente"]}
          rows={[
            [
              "6 000 € HT",
              "6 000 € déclarés admissibles ; aide théorique 1 800 € ; facture 7 200 € TTC.",
              "0 € budgété ; seuil breton atteint, autres critères non prouvés.",
            ],
            [
              "10 000 € HT",
              "7 000 € déclarés admissibles ; aide théorique 2 100 € ; facture 12 000 € TTC.",
              "0 € budgété ; exemple breton ventilé, sans éligibilité conclue.",
            ],
            [
              "20 000 € HT",
              "14 000 € déclarés admissibles ; aide théorique 4 200 € ; facture 24 000 € TTC.",
              "0 € budgété ; hypothèse générique, pas une aide disponible.",
            ],
          ]}
        />

        <h3>
          Tester le coût du retard sans appeler le chiffre d’affaires « marge »
        </h3>

        <p>
          La marge contributive perdue correspond uniquement à ce que le retard
          du site empêche raisonnablement de gagner, après les coûts variables.
          Si vous ne pouvez pas relier ce manque au délai, saisissez 0 €. Les
          trois hypothèses fictives suivantes portent sur deux mois d’attente,
          100 € de frais propres à la demande et 2 100 € d’aide à comparer.
        </p>

        <GuideTable
          caption="Sensibilité fictive du coût d’attente"
          headers={["Hypothèse", "Calcul", "Conséquence"]}
          rows={[
            [
              "Basse",
              "0 € × 2 mois + 100 € = 100 €",
              "L’attente ne dépasse pas l’aide selon cette seule hypothèse.",
            ],
            [
              "Centrale",
              "750 € × 2 mois + 100 € = 1 600 €",
              "L’aide reste supérieure de 500 €, avant les autres risques.",
            ],
            [
              "Haute",
              "1 200 € × 2 mois + 100 € = 2 500 €",
              "Ne pas attendre uniquement pour 2 100 € d’aide.",
            ],
          ]}
        />

        <h3>
          Pourquoi 2 100 € de subvention ne signifie pas 7 900 € à payer tout de
          suite
        </h3>

        <p>
          Sur le cas de 10 000 € HT, l’entreprise peut devoir régler 12 000 €
          TTC avant remboursement. Avec une notification dont la contribution
          financière approuvée pour la facture est de 2 100 €, le coût
          économique conditionnel devient 7 900 € si toute la TVA est
          déductible, ou 9 900 € si elle ne l’est pas. Sans notification, l’aide
          budgétée reste 0 €.
        </p>

        <p>
          Une TVA inconnue suspend le coût qui en dépend ; un contrôle de cumul
          inconnu suspend le verdict global. Ces inconnues ne masquent ni la
          facture TTC ni le coût sans aide déjà calculables. Si l’autorité paie
          directement le fournisseur, seul le paiement effectivement documenté
          réduit le besoin de trésorerie : l’entreprise n’encaisse rien dans ce
          flux.
        </p>

        <InfoBox
          variant="amber"
          title="Équivalent-subvention brut (ESB) d’un prêt ou d’une garantie ≠ argent disponible"
        >
          Le calcul de coût et de trésorerie ci-dessous modélise une{" "}
          <strong>subvention</strong> : sa contribution financière approuvée
          pour la facture, puis son paiement documenté à l’entreprise ou
          directement au fournisseur. Pour un prêt ou une garantie,
          l’équivalent-subvention brut (ESB) communiqué par l’autorité sert
          uniquement au registre et au contrôle de cumul de minimis. Il ne
          représente ni le capital reçu, ni le montant garanti, ni une avance à
          retrancher de la facture. Le tri court ne modélise ni le financement,
          ni les échéances, ni les intérêts, l’assurance ou les frais d’un prêt
          ou d’une garantie : analysez-les séparément à partir de l’offre
          contractuelle.
        </InfoBox>

        <p>
          <strong>La règle de minimis, en bref.</strong> Une aide qualifiée de
          minimis compte à sa date d’octroi juridique, même si elle n’est pas
          encore payée. Il faut additionner les valeurs brutes ou les
          équivalents-subvention bruts sur la période applicable, pour la même
          entreprise unique et l’État membre de l’autorité d’octroi — pas le
          pays du siège du bénéficiaire — puis comparer ce total au plafond du
          règlement exact. Ce calcul de cumul ne transforme jamais l’aide en
          trésorerie disponible.
        </p>

        <InfoBox variant="blue" title="Exemple normal avant les cas avancés">
          Une entreprise unique a déjà reçu 210 000 € relevant du règlement
          général dans le même État membre. L’autorité attribue une nouvelle
          aide dont l’ESB documenté est de 40 000 € : le total arithmétique
          atteint 250 000 €. Il reste sous le repère de 300 000 €, mais
          l’autorité doit encore confirmer la période, l’entreprise unique, le
          secteur, l’assiette et les autres cumuls. Une donnée manquante laisse
          l’analyse incomplète ; elle ne vaut jamais zéro.
        </InfoBox>

        <p>
          À l’inverse, lorsqu’un total exact et calculable dépasse le plafond du
          règlement reconnu en incluant l’aide courante, écartez la piste sous
          cette base ou demandez un arbitrage écrit. Ne remplacez jamais
          silencieusement le règlement déclaré par un autre fondement.
        </p>

        <InfoBox
          variant="amber"
          title="Avant notification : contrôler le cumul sans budgéter l’aide"
        >
          L’aide reste budgétée à 0 €. Rapprochez séparément le montant brut
          théorique non acquis d’une subvention — ou le montant brut ou l’ESB
          prospectif documenté d’un autre instrument — des aides historiques. Un
          dépassement potentiel suspend l’instruction : il ne constitue ni un
          octroi, ni une exclusion juridique, ni une somme à retrancher du coût
          du site. Aucun montant ou ESB absent n’est inventé ; pour un prêt, une
          garantie ou un autre instrument, recopiez la valeur prospective
          communiquée par l’autorité et la preuve qui l’étaye.
        </InfoBox>

        <h2 id="aides-nationales">
          6. Les solutions nationales soutiennent le projet de façons très
          différentes
        </h2>

        <h3>
          Le Prêt Boost est une dette, et son nom recouvre des fiches
          différentes
        </h3>

        <p>
          La{" "}
          <a
            href="https://www.francenum.gouv.fr/aides-financieres/financez-la-numerisation-de-votre-tpe-pme-avec-le-pret-boost-transformation"
            target="_blank"
            rel="noopener noreferrer"
          >
            fiche France Num de juillet 2024
          </a>{" "}
          décrit un Prêt Boost – Transformation numérique. Le{" "}
          <a
            href="https://aide.flash.bpifrance.fr/kb/guide/fr/tout-savoir-sur-le-pret-boost-iAu3ehGms4/Steps/2914951"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prêt Boost générique Bpifrance Flash consulté en 2026
          </a>{" "}
          présente aujourd’hui d’autres caractéristiques et un prêt non affecté.
          Ne fusionnez pas les deux fiches.
        </p>

        <p>
          Demandez l’offre actuelle, le taux, l’assurance, les frais, les
          échéances et le coût total : un prêt n’abaisse pas le coût du site, il
          déplace les paiements. Si l’autorité communique un ESB, reportez-le
          uniquement dans le contrôle de cumul de minimis. Ne le soustrayez
          jamais comme s’il s’agissait du capital reçu ou d’une subvention.
        </p>

        <h3 id="fiscalite">
          Comptabilité et fiscalité : un traitement n’est pas une subvention
        </h3>

        <p>
          La conception, le développement, l’abonnement, la maintenance et les
          contenus ne se qualifient pas automatiquement de la même façon. Le{" "}
          <a
            href="https://bofip.impots.gouv.fr/bofip/1818-PGP.html/identifiant=BOI-BIC-CHG-20-30-30-20170301"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOFiP
          </a>{" "}
          donne un cadre général ; transmettez le contrat, le devis ventilé, la
          durée d’usage et le régime de TVA à votre expert-comptable. Ne
          transformez pas une charge ou un amortissement en argent reçu.
        </p>

        <p>
          Le traitement de l’aide est lui aussi séparé. L’
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000046868472"
            target="_blank"
            rel="noopener noreferrer"
          >
            article 42 septies du code général des impôts
          </a>{" "}
          prévoit, sur option et sous ses conditions, un étalement pour
          certaines subventions d’équipement publiques liées à la création ou à
          l’acquisition d’immobilisations déterminées.
        </p>

        <p>
          Le{" "}
          <a
            href="https://bofip.impots.gouv.fr/bofip/1950-PGP.html/identifiant=BOI-BIC-PDSTK-10-30-10-20-20230628"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOFiP sur les subventions d’équipement
          </a>{" "}
          précise ce cadre. Ces textes ne démontrent pas qu’un site est une
          immobilisation, qu’une aide entre dans ce régime ou que la dépense et
          la subvention suivent le même traitement. Faites qualifier séparément
          le contrat, les postes du devis, la durée d’usage, l’aide et l’option
          fiscale par votre expert-comptable.
        </p>

        <p>
          Le{" "}
          <a
            href="https://entreprendre.service-public.fr/vosdroits/F35494"
            target="_blank"
            rel="noopener noreferrer"
          >
            crédit d’impôt innovation
          </a>{" "}
          vise sous conditions un prototype ou une installation pilote d’un
          produit nouveau. Un site vitrine ordinaire ne devient pas éligible
          parce qu’il est nouveau pour l’entreprise.
        </p>

        <h3 id="createurs">
          ACRE et ARCE : utiles à la création, jamais remises automatiques sur
          le site
        </h3>

        <p>
          Depuis le 1er juillet 2026, la{" "}
          <a
            href="https://entreprendre.service-public.gouv.fr/vosdroits/F11677"
            target="_blank"
            rel="noopener noreferrer"
          >
            fiche officielle ACRE
          </a>{" "}
          indique que le micro-entrepreneur bénéficiaire paie 75 % du taux
          normal, soit une réduction de 25 %, et doit adresser sa demande à
          l’Urssaf dans les 60 jours suivant l’ouverture de l’activité. Le
          statut et les autres conditions restent à vérifier. C’est une
          réduction de cotisations, pas une enveloppe fléchée vers le site.
        </p>

        <GuideTable
          caption="ACRE 2026 : ne pas appliquer la règle micro aux autres créateurs"
          headers={[
            "Situation",
            "Repère d’exonération",
            "Contrôle à conserver",
          ]}
          rows={[
            [
              "Micro-entreprise créée ou reprise à compter du 1er juillet 2026",
              "Taux de cotisations ramené à 75 % du taux normal, soit 25 % de réduction.",
              "Demande sous 60 jours ; durée bornée par la fin du troisième trimestre civil suivant le début d’activité.",
            ],
            [
              "Créateur ou repreneur hors micro, revenu ≤ 36 045 € (75 % du PASS 2026)",
              "Exonération fixée à 25 % des cotisations concernées pendant 12 mois.",
              "Vérifier le revenu réel, le contrôle effectif de la société et la demande sous 60 jours.",
            ],
            [
              "Hors micro, revenu entre 36 045 € et 48 060 €",
              "Exonération dégressive jusqu’au PASS 2026.",
              "Ne pas inventer le montant : le faire calculer à partir du revenu professionnel.",
            ],
            [
              "Hors micro, revenu ≥ 48 060 € (PASS 2026)",
              "Pas d’exonération ACRE.",
              "Recalculer les cotisations sans économie supposée.",
            ],
          ]}
        />

        <p className="text-sm">
          Ces seuils annuels concernent les autres créateurs ou repreneurs, pas
          le calcul proportionnel au chiffre d’affaires du micro-entrepreneur.
          Ils sont datés de 2026 : actualisez le PASS et la fiche officielle
          avant une décision ultérieure.
        </p>

        <p>
          L’{" "}
          <a
            href="https://www.service-public.gouv.fr/particuliers/vosdroits/F15252"
            target="_blank"
            rel="noopener noreferrer"
          >
            ARCE
          </a>{" "}
          correspond à 60 % du reliquat d’ARE pour les droits ouverts après une
          fin de contrat de travail intervenue à compter du 1er juillet 2023,
          hors intermittents relevant des annexes 8 et 10. Une déduction de 3 %
          s’applique ensuite, et le capital est versé en deux parts. Le second
          versement, six mois plus tard, suppose notamment que l’activité existe
          toujours et que le bénéficiaire ne soit pas en CDI à temps plein.
          Faites confirmer par France Travail le taux applicable aux droits plus
          anciens et aux régimes particuliers. Comparez ce capital au maintien
          de l’ARE : l’option ARCE ne valide pas de trimestre de retraite de
          base, tandis que le maintien de l’ARE avec inscription comme demandeur
          d’emploi peut en valider. Les revenus cotisés de la nouvelle activité
          suivent leurs propres règles. L’ARCE alimente la trésorerie globale et
          ne certifie pas le devis du site.
        </p>

        <h3 id="formation">
          CPF et OPCO : financer une compétence, pas maquiller la production
        </h3>

        <p>
          Mon Compte Formation confirme qu’il n’est{" "}
          <a
            href="https://www.moncompteformation.gouv.fr/espace-public/est-il-possible-de-virer-largent-de-mon-cpf-sur-mon-compte-bancaire"
            target="_blank"
            rel="noopener noreferrer"
          >
            pas possible de virer les droits CPF sur un compte bancaire
          </a>
          . Une formation éligible peut apprendre à administrer, mesurer ou
          améliorer le site ; la conception, les contenus et le développement
          livrés par un prestataire restent des lignes séparées.
        </p>

        <p>
          Pour une formation à la création ou reprise d’entreprise demandée
          aujourd’hui, vérifiez aussi la certification : depuis le 16 février
          2025, elle doit mener à un titre enregistré au{" "}
          <a
            href="https://www.moncompteformation.gouv.fr/espace-public/evolution-de-la-reglementation-des-actions-de-formation-la-creation-et-reprise-dentreprise-acre"
            target="_blank"
            rel="noopener noreferrer"
          >
            RNCP ou au Répertoire spécifique
          </a>
          . Depuis le 20 février 2026, les droits mobilisables pour une
          certification du Répertoire spécifique sont{" "}
          <a
            href="https://www.moncompteformation.gouv.fr/espace-public/de-nouvelles-regles-pour-mobiliser-votre-cpf"
            target="_blank"
            rel="noopener noreferrer"
          >
            plafonnés à 1 500 €
          </a>
          , sauf pour CléA. Les certifications RNCP ne sont pas plafonnées au
          titre de cette règle. La{" "}
          <a
            href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053742996"
            target="_blank"
            rel="noopener noreferrer"
          >
            participation forfaitaire est de 150 € en 2026
          </a>{" "}
          pour les demandes concernées, avec des exemptions prévues. Ces
          montants ne paient toujours pas la production du site.
        </p>

        <p>
          Un OPCO ou un fonds d’assurance formation peut prendre en charge une
          formation selon la branche et le statut. Cette possibilité ne crée pas
          un financement général de la production. Utilisez uniquement les
          espaces officiels et suivez les{" "}
          <a
            href="https://www.moncompteformation.gouv.fr/espace-public/comment-puis-je-eviter-les-fraudes"
            target="_blank"
            rel="noopener noreferrer"
          >
            recommandations anti-fraude de Mon Compte Formation
          </a>
          .
        </p>

        <h2 id="micro">
          7. Le même dispositif ne produit pas la même réponse pour tous les
          profils
        </h2>

        <GuideTable
          caption="Profils qui obligent à refaire le contrôle"
          headers={["Profil", "Erreur fréquente", "Question décisive"]}
          rows={[
            [
              "Micro-entrepreneur",
              "Confondre ACRE et subvention du site ; oublier la TVA non déductible selon le régime.",
              "Quel dispositif accepte ce statut et quel est le coût TTC réel ?",
            ],
            [
              "Entreprise de services B2B",
              "Appliquer le PASS Bretagne alors que plusieurs prestataires de services sont exclus.",
              "L’activité et la clientèle entrent-elles dans le règlement local ?",
            ],
            [
              "Profession libérale",
              "Déduire une éligibilité du seul territoire.",
              "La profession est-elle admise ou explicitement exclue ?",
            ],
            [
              "Création récente",
              "Confondre aide au démarrage et financement affecté au site.",
              "Ancienneté minimale, ACRE/ARCE et plan de trésorerie sans aide ?",
            ],
            [
              "Association",
              "Utiliser un dispositif réservé aux entreprises commerciales.",
              "Quel appel, quelle collectivité ou quelle fédération accepte la structure ?",
            ],
            [
              "Entreprise liée à un groupe",
              "Examiner effectif et aides sur la seule société déposante.",
              "Quel périmètre d’entreprise et quel régime de cumul s’appliquent ?",
            ],
          ]}
        />

        <h2 id="cas-avances-cumul">
          8. N’ouvrez les cas avancés de cumul que si votre décision les cite
        </h2>

        <p>
          Pour une aide locale ordinaire, commencez par le registre ci-dessous,
          le règlement exact et l’exemple général. Les blocs repliés qui suivent
          ne deviennent utiles que si la décision ou l’autorité mentionne une
          restructuration, un SIEG, la production agricole primaire, la pêche ou
          l’aquaculture. Leur profondeur sert à préparer une question précise ;
          elle ne remplace ni l’autorité attributrice ni un avis juridique.
        </p>

        <h3>Tenir un registre qui évite les faux cumuls</h3>

        <ol>
          <li>
            Pour chaque aide, relevez l’organisme, le dispositif, la base
            juridique, l’État membre, le périmètre de l’entreprise unique, la
            date d’octroi, les dépenses concernées et l’éventuel partage d’une
            même facture.
          </li>
          <li>
            Recopiez l’ESB communiqué par l’autorité. Pour une subvention en
            numéraire, utilisez son montant brut avant impôts ou prélèvements.
            Ne remplacez jamais un ESB absent par le capital d’un prêt ou le
            montant nominal d’une garantie.
          </li>
          <li>
            Pour une aide déclarée « hors de minimis », conservez à la fois la
            base juridique et la référence de la pièce officielle. Une phrase
            libre ou une mention « à confirmer » ne suffit pas : demandez une
            validation écrite à l’autorité ou à un conseil compétent.
          </li>
        </ol>

        <p>
          Exemple prudent : 299 000 € sont reconnus dans un même État membre et
          pour une même entreprise unique, tandis que 2 100 € supplémentaires
          restent juridiquement non résolus. Conservez alors un{" "}
          <strong>cumul prudent non ventilé de 301 100 €</strong>, sans
          rattacher artificiellement les 2 100 € à un règlement précis.
        </p>

        <p>
          L’État membre et le périmètre servent uniquement à former le groupe à
          revoir. Ils ne qualifient pas l’aide. Si le montant, l’État membre ou
          l’identité du groupe manque, aucun total n’est inventé. Lorsque toutes
          les aides restent juridiquement inconnues, 300 000 € n’est qu’un
          repère prudent de revue : ce n’est pas un plafond universel.
        </p>

        <p>
          Le nom libre du territoire ne prouve pas davantage que le droit de
          l’Union s’y applique. Cette vérification avancée n’est ouverte que
          lorsqu’une base de minimis la rend utile. Consignez alors séparément
          la conclusion de l’autorité — applicable, non applicable ou à faire
          confirmer —, la source, sa référence et sa date. Ne demandez pas à un
          outil d’interpréter le texte libre : une pièce seulement descriptive
          ne suffit pas. Pour une région ultrapériphérique, un PTOM ou une
          collectivité française d’outre-mer, ne déduisez jamais une réponse
          favorable du seul mot « France » : faites confirmer le champ
          territorial par l’autorité.
        </p>

        <p>
          Si la base juridique de l’aide courante reste « à confirmer », le
          verdict entier reste <strong>incomplet</strong>, même lorsqu’aucune
          notification n’a encore été reçue et que toutes les autres données
          sont remplies. Cette prudence ne transforme pas l’inconnu en zéro :
          seule l’aide budgétée avant notification reste à <strong>0 €</strong>.
          La facture TTC et les sous-calculs indépendants peuvent rester
          visibles, mais ils ne ferment pas la qualification juridique.
        </p>

        <p>
          Le{" "}
          <a
            href="https://eur-lex.europa.eu/legal-content/FR/TXT/PDF/?uri=CELEX%3A32023R2831"
            target="_blank"
            rel="noopener noreferrer"
          >
            règlement général de minimis 2023/2831
          </a>{" "}
          fixe, dans son champ, 300 000 € par État membre et par entreprise
          unique sur toute période de trois ans. L’aide compte lorsque le droit
          légal est conféré, indépendamment de la date de paiement. Il faut donc
          d’abord identifier l’entreprise unique, l’État membre, les dates
          d’octroi et l’ESB de chaque aide ; la forme informatique de la
          référence vient seulement ensuite.
        </p>

        <details className="my-6 rounded-2xl border border-zinc-300 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/50">
          <summary className="cursor-pointer px-4 py-4 font-black text-zinc-950 marker:text-violet-700 dark:text-white sm:px-5">
            Restructuration : ouvrez seulement après une fusion, acquisition ou
            scission
          </summary>
          <div className="px-4 pb-4 sm:px-5 sm:pb-5">
            <p className="mt-0 text-sm">
              Ce bloc ne concerne pas l’entreprise restée dans un périmètre
              inchangé. Ouvrez-le si une entité a fusionné, acquis une activité
              ou été scindée pendant la période à contrôler.
            </p>
            <InfoBox
              variant="amber"
              title="Fusion, acquisition ou scission : reconstruire le registre avant de cumuler"
            >
              <p>
                Les articles 3, paragraphes 8 et 9, des règlements{" "}
                <a
                  href="https://eur-lex.europa.eu/eli/reg/2023/2831/oj"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  2023/2831
                </a>{" "}
                et{" "}
                <a
                  href="https://eur-lex.europa.eu/eli/reg/2023/2832/oj"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  2023/2832
                </a>{" "}
                imposent de traiter les restructurations avant le nouveau
                précontrôle de minimis. Les règles équivalentes figurent à
                l’article 3, paragraphes 9 et 10, du règlement agricole{" "}
                <a
                  href="https://eur-lex.europa.eu/eli/reg/2013/1408/2024-12-16/fra"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  1408/2013 consolidé
                </a>{" "}
                et à l’article 3, paragraphes 8 et 9, du règlement
                pêche-aquaculture{" "}
                <a
                  href="https://eur-lex.europa.eu/eli/reg/2014/717/2023-10-25/fra"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  717/2014 consolidé
                </a>
                . En cas de fusion ou d’acquisition, toutes les aides de minimis
                antérieures accordées à chacune des entreprises parties à la
                fusion ou à l’acquisition doivent être prises en compte pour la
                nouvelle entreprise ou l’acquéreur.
              </p>
              <p>
                En cas de scission, les aides antérieures sont affectées à
                l’entreprise qui en a bénéficié, en principe celle qui reprend
                les activités concernées. Si cette affectation est impossible,
                elles sont réparties proportionnellement sur la base de la{" "}
                <strong>
                  valeur comptable du capital des nouvelles entreprises à la
                  date effective de la scission
                </strong>
                .
              </p>
              <p>
                Il faut donc relever les entités parties à l’opération, les
                dates, les activités reprises, les actes et la méthode
                d’allocation, puis corriger chaque ligne du registre avant de
                conclure. Même en l’absence d’opération, conservez une
                confirmation datée. Votre registre doit indiquer le statut, la
                preuve et, lorsqu’un événement existe, son type et la méthode
                utilisée pour ajuster l’historique. Toute exception après une
                déclaration d’absence suspend la conclusion : « aucune
                acquisition, sauf un rachat le 3 février 2026 » décrit bien un
                événement et impose de reprendre le calcul.
              </p>
            </InfoBox>
          </div>
        </details>

        <details className="my-6 rounded-2xl border border-zinc-300 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/50">
          <summary className="cursor-pointer px-4 py-4 font-black text-zinc-950 marker:text-violet-700 dark:text-white sm:px-5">
            SIEG : ouvrez seulement si la décision cite le règlement 2023/2832
          </summary>
          <div className="px-4 pb-4 sm:px-5 sm:pb-5">
            <p className="mt-0 text-sm">
              Une activité utile au public n’est pas automatiquement un SIEG. Ce
              bloc devient pertinent seulement si un mandat et la décision
              identifient ce régime.
            </p>
            <InfoBox
              variant="blue"
              title="SIEG : 750 000 € est un plafond propre, pas une aide disponible"
            >
              <p>
                Le{" "}
                <a
                  href="https://eur-lex.europa.eu/eli/reg/2023/2832/oj"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  règlement (UE) 2023/2832
                </a>{" "}
                vise les aides octroyées pour la prestation d’un service
                d’intérêt économique général confié à l’entreprise par écrit ou
                par voie électronique. Dans son champ, le total ne peut dépasser{" "}
                <strong>750 000 €</strong> par État membre et par entreprise
                unique sur toute période de trois ans. Le tri court s’arrête ici
                volontairement : seul l’acte applicable et sa relecture peuvent
                qualifier la mission, le mandat et l’applicabilité du règlement.
              </p>
              <p>
                Pour l’aide courante et pour chaque aide antérieure résolue sous
                2023/2832, il faut vérifier séparément le mandat écrit ou
                électronique, recopier sa preuve et identifier exactement le
                service confié. Un mandat absent ou encore inconnu suspend le
                verdict. Le numéro du règlement ne remplace ni le mandat, ni
                l’identité du service. Consignez séparément la conclusion du
                relecteur — confirmée, contredite ou non résolue —, son
                identité, la date et la référence. Ne confiez jamais cette
                conclusion à l’analyse automatique d’une citation libre.
              </p>
              <p>
                Ce régime peut se cumuler avec les autres règlements de minimis,
                chacun sous ses règles et son plafond propres. Additionner 750
                000 € de SIEG et le repère maximal de 300 000 € des autres
                régimes donne <strong>1 050 000 €</strong> : c’est un simple
                repère arithmétique, sans plafond juridique autonome ou
                universel, sans solde disponible et sans preuve qu’un cumul
                concret est permis.
              </p>
              <ul>
                <li>
                  Une aide de minimis SIEG ne se cumule avec aucune compensation
                  relative au même SIEG, que cette compensation constitue ou non
                  une aide d’État, conformément à l’article 5, paragraphe 2.
                  Cette interdiction vaut indépendamment de la fenêtre de trois
                  ans et couvre une compensation plus ancienne du même SIEG.
                  Recensez aussi les compensations d’un autre État qui
                  concernent réellement le même service. Toute exception après
                  une déclaration d’absence doit être examinée par l’autorité.
                </li>
                <li>
                  Pour retenir des services distincts, exigez une conclusion
                  écrite qui identifie les deux services et affirme leur
                  distinction. Une pièce mixte, descriptive ou incertaine laisse
                  la relation non résolue. Une case vide ne prouve jamais
                  l’absence d’une autre compensation.
                </li>
                <li>
                  Pour des aides d’État sur les mêmes coûts admissibles ou la
                  même mesure de financement des risques, l’intensité ou le
                  montant maximal applicable doit aussi être contrôlé.
                </li>
                <li>
                  Le règlement prévoit une exception bornée à la notion
                  d’entreprise unique lorsque des entreprises de SIEG n’ont
                  entre elles aucun autre lien que leur rattachement direct
                  respectif au même organisme public ou à la même entité sans
                  but lucratif. Faites confirmer ces liens et cette exception
                  avant de les retenir.
                </li>
              </ul>
              <p>
                Exemple : 620 000 € sous le régime SIEG et 220 000 € sous le
                régime général restent sous leurs plafonds arithmétiques
                propres. Cette seule addition ne suffit pourtant pas :
                l’autorité doit encore confirmer le service concerné,
                l’entreprise unique, les dates d’octroi, les montants bruts ou
                ESB, les coûts et l’absence de compensation interdite.
              </p>
            </InfoBox>
          </div>
        </details>

        <details className="my-6 rounded-2xl border border-zinc-300 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/50">
          <summary className="cursor-pointer px-4 py-4 font-black text-zinc-950 marker:text-violet-700 dark:text-white sm:px-5">
            Agriculture, pêche et aquaculture : ouvrez seulement pour une
            activité primaire concernée
          </summary>
          <div className="px-4 pb-4 sm:px-5 sm:pb-5">
            <p className="mt-0">
              Ne transposez pas ce plafond général à tous les secteurs : le{" "}
              <a
                href="https://eur-lex.europa.eu/eli/reg/2013/1408/2024-12-16/fra"
                target="_blank"
                rel="noopener noreferrer"
              >
                règlement agricole 1408/2013 consolidé
              </a>{" "}
              plafonne à 50 000 € le total octroyé par un État membre à une
              entreprise unique sur trois années glissantes pour la production
              agricole primaire. Le{" "}
              <a
                href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32025R1989"
                target="_blank"
                rel="noopener noreferrer"
              >
                règlement correctif (UE) 2025/1989
              </a>{" "}
              rectifie une date, un agrégat nord-irlandais et des renvois du
              texte, sans modifier ce plafond individuel de 50 000 €.
            </p>

            <p>
              Pour la production primaire de la pêche et de l’aquaculture, le{" "}
              <a
                href="https://eur-lex.europa.eu/eli/reg/2014/717/2023-10-25/fra"
                target="_blank"
                rel="noopener noreferrer"
              >
                règlement pêche et aquaculture 717/2014
              </a>{" "}
              raisonne sur trois exercices fiscaux déterminés par référence aux
              exercices utilisés par l’entreprise dans l’État concerné :
              l’exercice en cours et les deux précédents. Relevez quatre bornes
              réelles : le début du deuxième exercice précédent, celui du
              précédent, le début de l’exercice courant et sa fin inclusive.
              L’exercice courant doit contenir l’ancre du calcul : date d’octroi
              juridique lorsque l’aide est accordée, ou date de vérification
              pour une simulation prospective. Aucune date n’est reconstruite
              par simple soustraction d’années ; des exercices courts ou longs
              restent donc possibles. Ces bornes demeurent déclaratives et
              doivent être confirmées. Sans quartet complet et cohérent, les
              aides historiques pêche restent dans une tranche incertaine ;
              seules l’aide courante et les aides datées exactement à l’ancre
              forment un sous-total assuré. La tranche incertaine ne peut jamais
              fonder seule une exclusion ni permettre un verdict faussement
              favorable, y compris dans les contrôles inter-régimes et
              agriculture-pêche.
            </p>

            <p>
              En France, le{" "}
              <a
                href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000053177293"
                target="_blank"
                rel="noopener noreferrer"
              >
                décret instituant le registre national
              </a>{" "}
              rend le registre effectif au 1er janvier 2026 pour les régimes
              général, SIEG et pêche-aquaculture, puis au 1er janvier 2027 pour
              l’agriculture. La{" "}
              <a
                href="https://agriculture.gouv.fr/telecharger/153667"
                target="_blank"
                rel="noopener noreferrer"
              >
                circulaire du Premier ministre signée le 3 mars 2026 et datée du
                4 mars 2026 dans son en-tête
              </a>{" "}
              confirme que son instauration relève de 30 000 à 40 000 € le total
              pêche octroyé par la France à une entreprise unique. Retenez donc
              30 000 € avant le 1er janvier 2026, puis 40 000 € à partir de
              cette date seulement si la condition française du registre est
              satisfaite. Les aides encore comprises dans les trois exercices
              restent comptées même si elles précèdent 2026.
            </p>

            <p>
              La transformation et la commercialisation des produits agricoles,
              de la pêche et de l’aquaculture relèvent en principe du règlement
              général 2023/2831, sous les exclusions de son article 1 ; en cas
              d’activités mixtes, faites confirmer la séparation des activités
              ou des coûts. Le respect de chaque sous-plafond ne suffit pas :
              lorsqu’ils sont cumulés, général, agriculture et pêche doivent
              aussi être contrôlés ensemble jusqu’au plafond général de 300 000
              € ; agriculture et pêche sans aide générale se contrôlent au
              plafond sectoriel combiné applicable.
            </p>

            <p>
              Ces montants ne sont ni un solde disponible, ni le plafond d’un
              dispositif sur la même assiette, ni les plafonds collectifs
              nationaux. Faites confirmer le règlement, les fenêtres
              temporelles, la date d’octroi juridique et le périmètre de
              l’entreprise unique par l’organisme.
            </p>
          </div>
        </details>

        <h2 id="arnaques">
          9. Une aide « garantie » peut cacher une fraude ou un mauvais contrat
        </h2>

        <p>
          Une promesse commerciale n’est pas une décision publique. Vérifiez
          l’autorité sur son domaine officiel et contactez-la sans passer par le
          lien du vendeur. Aucun intermédiaire privé ne doit se présenter comme
          obligatoire si l’autorité ne le dit pas.
        </p>

        <ul>
          <li>
            refusez la promesse « aide garantie » ou « dossier accepté d’avance
            » ;
          </li>
          <li>
            ne transmettez jamais mots de passe, code FranceConnect ou
            identifiants CPF ;
          </li>
          <li>
            comparez le devis avant et après mention de l’aide pour repérer un
            prix artificiellement gonflé ;
          </li>
          <li>
            demandez qui est payé, qui instruit et qui porte le risque de refus
            ;
          </li>
          <li>
            lisez le coût total, l’assurance, les frais, la durée et la sortie
            de tout financement ;
          </li>
          <li>
            exigez que le domaine, les comptes, les contenus, les données et les
            accès soient nommés au contrat.
          </li>
        </ul>

        <p>
          La{" "}
          <a
            href="https://www.economie.gouv.fr/dgccrf/laction-de-la-dgccrf/les-enquetes/location-financiere-aupres-des-professionnels-demarches"
            target="_blank"
            rel="noopener noreferrer"
          >
            DGCCRF
          </a>{" "}
          a documenté des démarchages où un contrat de prestation est associé à
          une location financière. Le financeur et le fournisseur peuvent être
          deux sociétés différentes : un litige sur le site n’annule pas
          automatiquement les loyers. Relisez hors rendez-vous et obtenez le
          coût de sortie écrit.
        </p>

        <h2 id="sans-aide">
          10. La bonne décision peut être attendre, lancer, réduire ou ne pas
          investir
        </h2>

        <p>
          Une aide améliore un projet viable ; elle ne doit pas sauver un projet
          dont l’usage, la trésorerie ou la responsabilité restent inconnus.
          Décidez dans cet ordre :
        </p>

        <GuideTable
          caption="Règles de décision sans probabilité inventée"
          headers={[
            "Situation prouvée",
            "Décision prudente",
            "Action suivante",
          ]}
          rows={[
            [
              "Critère négatif ou commencement déjà interdit",
              "Écarter la piste ou demander un arbitrage écrit.",
              "Recalculer avec aide = 0 €.",
            ],
            [
              "TVA, ligne, cumul, ordre ou paiement inconnu",
              "Dossier incomplet ; conserver seulement les sous-calculs qui ne dépendent pas de l’inconnue.",
              "Lire la liste des preuves manquantes sans effacer le TTC déjà calculable.",
            ],
            [
              "Contrôles complets, aucune notification",
              "Aide théorique seulement ; 0 € au budget.",
              "Comparer lancement et attente.",
            ],
            [
              "Coût d’attente ≥ aide théorique avant notification, ou ≥ contribution financière approuvée pour la facture après",
              "Ne pas attendre uniquement pour cette aide.",
              "Lancer, réduire ou livrer par étapes si le budget le permet.",
            ],
            [
              "Attente non rentable et trésorerie insuffisante",
              "Ne pas attendre uniquement pour l’aide, mais ne pas engager le projet complet.",
              "Réduire, phaser ou sécuriser d’abord un financement soutenable.",
            ],
            [
              "Notification, mais trésorerie insuffisante avant remboursement",
              "Ne pas engager le projet complet.",
              "Réduire, phaser ou sécuriser un financement soutenable.",
            ],
            [
              "Notification, trésorerie suffisante et attente peu coûteuse",
              "Attendre peut se défendre sous les conditions écrites.",
              "Suivre dates, livrables et justificatifs.",
            ],
          ]}
        />

        <p>
          Sans aide, vous pouvez réduire la première version, conserver une
          partie du site existant, répartir les paiements sur des livrables ou
          choisir une solution plus standard. Le{" "}
          <Link href="/ressources/kit-cahier-des-charges-site-internet">
            cahier des charges
          </Link>{" "}
          aide à séparer les lignes ; nos guides sur le{" "}
          <Link href="/guides/combien-coute-un-site-internet">
            coût complet d’un site
          </Link>{" "}
          et le <Link href="/guides/prix-site-vitrine">prix d’une vitrine</Link>{" "}
          permettent de vérifier si le budget sans aide reste réaliste.
        </p>

        <InfoBox variant="emerald" title="Notre position et notre intérêt">
          Hagnéré Code vend des sites internet. Nous avons donc un intérêt
          commercial visible. Notre recommandation reste de construire un projet
          viable avec 0 € d’aide, puis d’améliorer ce plan avec une notification
          réelle. Nous déconseillons un devis « aide comprise », une production
          maquillée en formation et une attente dont le coût dépasse déjà l’aide
          théorique — ou la contribution financière approuvée pour la facture
          lorsqu’elle est inférieure.
        </InfoBox>

        <GuideInlineCTA
          title="Faire vérifier le devis et le budget du site"
          description="En environ trois minutes, transmettez le résultat visé, le budget soutenable sans aide et les lignes du devis. La demande est relue par l’équipe : nous vous dirons si une solution plus simple suffit, quelles lignes préciser et, si le projet nous correspond, quelle solution chiffrer. La demande et la réponse sont gratuites et sans engagement. Le formulaire indique le délai de réponse visé avant l’envoi. Hagnéré Code n’instruit pas l’aide et ne garantit ni résultat commercial ni subvention."
          tags={[
            "Formulaire ≈ 3 min",
            "Délai affiché avant l’envoi",
            "Aucune aide promise",
          ]}
          ctaLabel="Décrire le projet"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <hr />

        <p className="text-sm">
          <strong>Sources publiques vérifiées le 26 juillet 2026 :</strong>{" "}
          <a
            href="https://www.francenum.gouv.fr/aides-financieres/trouver-une-aide-financiere"
            target="_blank"
            rel="noopener noreferrer"
          >
            France Num, moteur d’aides
          </a>
          ,{" "}
          <a
            href="https://www.francenum.gouv.fr/aides-financieres/guides-et-conseils-financiers/cheque-france-num-aide-de-500-euros-pour-soutenir"
            target="_blank"
            rel="noopener noreferrer"
          >
            archive du chèque de 500 €
          </a>
          ,{" "}
          <a
            href="https://www.francenum.gouv.fr/aides-financieres/atouts-numeriques"
            target="_blank"
            rel="noopener noreferrer"
          >
            Atouts Numériques
          </a>
          ,{" "}
          <a
            href="https://www.bretagne.bzh/aides/fiches/pass-commerce-artisanat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PASS Bretagne
          </a>
          ,{" "}
          <a
            href="https://www.bretagne.bzh/app/uploads/Guide-utilisateur-Extranet-PCA_V4-Entreprise.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide utilisateur PASS v4
          </a>
          ,{" "}
          <a
            href="https://entreprendre.service-public.gouv.fr/vosdroits/F11677"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACRE
          </a>
          ,{" "}
          <a
            href="https://www.service-public.gouv.fr/particuliers/vosdroits/F15252"
            target="_blank"
            rel="noopener noreferrer"
          >
            ARCE
          </a>
          , Mon Compte Formation, BOFiP, Bpifrance Flash, DGCCRF et règlements
          européens 2023/2831, 2023/2832, 1408/2013 consolidé et 717/2014
          consolidé. Les règles et enveloppes peuvent changer. Seul l’organisme
          compétent peut confirmer un cas ; ce guide ne constitue pas un conseil
          juridique, fiscal ou financier individualisé.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
