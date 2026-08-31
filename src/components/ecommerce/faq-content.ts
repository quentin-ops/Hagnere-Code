export interface EcommerceFaqPart {
  text: string;
  strong?: boolean;
  href?: string;
}

export interface EcommerceFaqItem {
  question: string;
  answer: readonly (readonly EcommerceFaqPart[])[];
}

const part = (
  text: string,
  options: Omit<EcommerceFaqPart, "text"> = {},
): EcommerceFaqPart => ({ text, ...options });

export const ECOMMERCE_FAQ_ITEMS: readonly EcommerceFaqItem[] = [
  {
    question: "Combien coûte vraiment une boutique e-commerce sur mesure ?",
    answer: [
      [
        part("Entre "),
        part("15 k€", { strong: true }),
        part(" (Launch, nouvelle boutique simple) et "),
        part("120 k€", { strong: true }),
        part(
          " (Enterprise multi-pays B2B+B2C). Le prix est fixe et contractuel, sans commission Hagnéré Code sur vos ventes après livraison.",
        ),
      ],
      [
        part(
          "Il n'existe pas de seuil de GMV ni de délai de rentabilité universel face à une plateforme hébergée : le résultat dépend de votre abonnement, de vos apps, de vos frais variables, de la maintenance et du périmètre construit. Le simulateur de cette page calcule un scénario sur 36 mois à partir de montants que vous pouvez remplacer par vos coûts contractuels.",
        ),
      ],
      [
        part("Pour lire les périmètres associés à ces montants, consultez notre "),
        part("grille tarifaire publiée", {
          href: "/tarifs",
        }),
        part(" ; pour situer le vôtre, décrivez-le dans "),
        part("le formulaire de cadrage", {
          href: "/demarrer-un-projet",
        }),
        part("."),
      ],
    ],
  },
  {
    question: "Shopify ou Prestashop ne suffirait-il pas ?",
    answer: [
      [
        part("Pour une boutique qui démarre, "),
        part("probablement oui", { strong: true }),
        part(
          ". Les offres et conditions Shopify évoluent selon le plan, l'engagement, le moyen de paiement et le pays ; vérifiez le tarif officiel puis utilisez votre facture réelle dans le simulateur.",
        ),
      ],
      [
        part("Le sur-mesure devient pertinent lorsque des "),
        part("contraintes métier vérifiables", { strong: true }),
        part(
          " le justifient — intégrations françaises spécifiques, logique B2B, checkout particulier, application mobile ou coût total documenté — et non parce qu'un seuil de chiffre d'affaires générique aurait été franchi.",
        ),
      ],
      [
        part("Voir les "),
        part("tarifs officiels Shopify France", {
          href: "https://www.shopify.com/fr/tarifs",
        }),
        part("."),
      ],
    ],
  },
  {
    question: "Qui maintient après la livraison ?",
    answer: [
      [
        part("Trois options : "),
        part("(1)", { strong: true }),
        part(" un forfait de "),
        part("maintenance et d'évolution", {
          href: "/services/maintenance-evolution",
        }),
        part(
          " mensuel chez nous — monitoring, évolutions et hotline. Les forfaits Care, Care+ et Care Pro sont publiés « sur devis » : le montant dépend du périmètre retenu et n'est arrêté qu'au devis ; ",
        ),
        part("(2)", { strong: true }),
        part(
          " votre équipe interne reprend une stack standard et documentée — Next.js, React et TypeScript, avec Laravel lorsque le back-office du projet le nécessite ; ",
        ),
        part("(3)", { strong: true }),
        part(
          " une autre ESN prend le relais. La durée de garantie corrective et les délais de prise en charge sont précisés au devis.",
        ),
      ],
    ],
  },
  {
    question: "On a 5 000 produits et 10 000 clients sur Prestashop : comment migrer ?",
    answer: [
      [
        part("La migration suit quatre phases : "),
        part("(1)", { strong: true }),
        part(
          " extraction des produits, clients et commandes depuis l'API ou la base ; ",
        ),
        part("(2)", { strong: true }),
        part(" nettoyage et import contrôlé ; "),
        part("(3)", { strong: true }),
        part(" correspondance des anciennes et nouvelles URL avec redirections 301 ; "),
        part("(4)", { strong: true }),
        part(
          " bascule avec surveillance des erreurs, du trafic Search Console et des positions pendant 30 jours.",
        ),
      ],
      [
        part(
          "Cette méthode réduit le risque mais ne permet pas de garantir un trafic ou des positions immobiles. Les indicateurs suivis et la référence de comparaison sont définis avant la bascule afin de documenter les variations et les corrections. Notre guide ",
        ),
        part("pourquoi un site n'est pas visible sur Google", {
          href: "/guides/pourquoi-site-pas-visible-google",
        }),
        part(
          " liste les causes à écarter avant d'attribuer une baisse à la migration.",
        ),
      ],
    ],
  },
  {
    question: "Vous faites aussi le design et la charte graphique ?",
    answer: [
      [
        part("Oui, lorsqu'ils figurent dans le périmètre du devis", { strong: true }),
        part(
          ". Sans charte existante : moodboard, couleurs, typographies, logo et déclinaisons, design system Figma, maquettes web, mobile et email. Avec une charte existante, nous l'adaptons et l'étendons aux interfaces prévues au devis.",
        ),
      ],
    ],
  },
  {
    question: "Est-ce qu'on est propriétaire du code ?",
    answer: [
      [
        part("Oui, intégralement", { strong: true }),
        part(
          ". Le dépôt Git est placé sur votre organisation, sans licence propriétaire Hagnéré Code ni clé cachée. Le code, la documentation et le runbook sont livrés afin qu'une autre équipe puisse reprendre le projet.",
        ),
      ],
    ],
  },
  {
    question: "Quel est le calendrier de la facturation électronique ?",
    answer: [
      [
        part("À compter du "),
        part("1er septembre 2026", { strong: true }),
        part(
          ", toutes les entreprises établies en France concernées par la réforme doivent pouvoir recevoir des factures électroniques. À cette date, les grandes entreprises et les ETI doivent aussi émettre électroniquement leurs factures et transmettre leurs données de transaction et de paiement.",
        ),
      ],
      [
        part("L'obligation d'émission et d'e-reporting s'applique aux "),
        part("PME et microentreprises le 1er septembre 2027", {
          strong: true,
        }),
        part(
          ". Selon le périmètre convenu, nous pouvons produire un format Factur-X et connecter la boutique à la Plateforme Agréée choisie avec votre équipe comptable ; le choix de la plateforme et son onboarding restent à valider pour chaque entreprise.",
        ),
      ],
      [
        part("Consulter le "),
        part("calendrier officiel de la DGFiP", {
          href: "https://www.impots.gouv.fr/professionnel/questions/partir-de-quand-suis-je-concerne-par-la-reforme-de-la-facturation",
        }),
        part("."),
      ],
    ],
  },
  {
    question: "Et si on a un pic Black Friday, ça tient la charge ?",
    answer: [
      [
        part(
          "L'architecture cible est stateless lorsque le projet le permet, avec mise à l'échelle horizontale, CDN et files de traitement isolées. Lorsque le risque de charge le justifie, le devis comprend un ",
        ),
        part("test de charge défini à partir du pic attendu", { strong: true }),
        part(
          " avant le déploiement public ; le protocole, le volume et les seuils acceptés sont consignés dans le plan de recette.",
        ),
      ],
    ],
  },
  {
    question: "L'application mobile iOS et Android est-elle incluse ?",
    answer: [
      [
        part("Elle peut être incluse dans les périmètres "),
        part("Scale", { strong: true }),
        part(" et "),
        part("Enterprise", { strong: true }),
        part(
          " lorsque le périmètre signé la prévoit. Une codebase React Native est publiée sur l'App Store et le Play Store sous vos comptes développeur. Sur le forfait Launch, l'application reste une option, avec un budget indicatif de 15 à 25 k€ HT à confirmer selon les fonctionnalités.",
        ),
      ],
    ],
  },
  {
    question: "Pouvez-vous intégrer Amazon, CDiscount ou ManoMano ?",
    answer: [
      [
        part(
          "Oui. Le catalogue, les stocks, les prix et les commandes peuvent être synchronisés via Lengow, Shoppingfeed ou Iziflux, ou directement par les API des marketplaces lorsque le volume et le besoin le justifient. Le connecteur retenu, ses limites et ses coûts tiers sont précisés dans le devis.",
        ),
      ],
    ],
  },
];

/**
 * Questions techniques, reprises telles quelles de l'ancienne section
 * `ec-tfaq`. Elles sont désormais rendues à la suite des questions
 * commerciales dans la même liste : une seule FAQ sur la page.
 */
export const ECOMMERCE_TECH_FAQ_ITEMS: readonly EcommerceFaqItem[] = [
  {
    question: "Quelle stack préconisez-vous pour ce projet ?",
    answer: [
      [
        part(
          "Il n'existe pas de stack unique. Next.js et React peuvent porter le storefront ; TypeScript, PostgreSQL, Redis, Meilisearch ou pgvector sont retenus seulement si le besoin les justifie. React Native peut couvrir l'app mobile. Le moteur e-commerce, le fournisseur IA, le cloud et les services tiers sont comparés puis consignés dans une décision d'architecture avec leurs versions, coûts, limites et responsabilités.",
        ),
      ],
    ],
  },
  {
    question: "Combien de commandes/minute votre infra tient-elle sous charge ?",
    answer: [
      [
        part(
          "Il n'y a pas de capacité générique : panier, promotions, stock, PSP, ERP et base de données n'ont pas les mêmes limites. On part de votre pic attendu, on définit un scénario k6, les jeux de données, seuils et services inclus, puis on livre le rapport. La capacité annoncée ne vaut que pour cette configuration et ce test.",
        ),
      ],
    ],
  },
  {
    question: "Vous gérez comment la PCI-DSS côté paiement ?",
    answer: [
      [
        part(
          "Les composants hébergés ou tokenisés du prestataire de paiement peuvent réduire le périmètre PCI, mais le questionnaire et les obligations exactes dépendent de l'intégration et doivent être validés avec l'acquéreur ou un conseil compétent. Les données carte ne doivent pas être stockées ni journalisées par l'application ; les webhooks sont authentifiés, 3DS2/SCA gérés et le parcours de refus testé.",
        ),
      ],
    ],
  },
  {
    question: "Migration depuis Shopify / Prestashop — procédure exacte ?",
    answer: [
      [
        part("Shopify", { strong: true }),
        part(
          " : export via Admin API (produits, collections, commandes, clients, metafields, redirections existantes). ",
        ),
        part("Prestashop", { strong: true }),
        part(
          " : dump SQL + API webservice pour les attachements. L'import est conçu pour être rejouable. Le mapping 301 combine inventaire, règles automatiques et revue humaine : il ne se déduit pas correctement des seuls slugs. Le plan de recette précise les volumes, échantillons, contrôles de données et parcours à comparer avant la bascule.",
        ),
      ],
    ],
  },
  {
    question: "Backup, DR, RTO/RPO ?",
    answer: [
      [
        part(
          "Le RPO et le RTO sont fixés selon le coût d'une perte de données et d'une indisponibilité. Le devis décrit les sauvegardes, leur chiffrement, la rétention, l'éventuelle copie chez un second fournisseur et la fréquence des tests de restauration. Un runbook identifie les responsables, accès et critères de succès.",
        ),
      ],
    ],
  },
  {
    question: "Observabilité : logs, traces, alertes, dashboards ?",
    answer: [
      [
        part(
          "Logs, erreurs, métriques et traces sont choisis selon l'architecture. Les données personnelles et secrets sont minimisés ou masqués, les durées de conservation documentées et les accès limités. Le devis fixe les signaux utiles — erreurs 5xx, files, paiements, stock, disponibilité — ainsi que les seuils et canaux d'alerte.",
        ),
      ],
    ],
  },
  {
    question: "Tests : coverage, E2E, régression ?",
    answer: [
      [
        part(
          "Le plan de test part des risques : règles métier en unitaire, intégrations en tests de contrat, parcours critiques en E2E et contrôles de migration sur données représentatives. Les seuils de couverture ne remplacent pas les scénarios. Les fonctions IA sont testées avec jeux de référence, mocks et critères d'acceptation explicites.",
        ),
      ],
    ],
  },
  {
    question: "SLA maintenance, temps de déploiement, rollback ?",
    answer: [
      [
        part(
          "Le SLA dépend du forfait de maintenance : plage de service, sévérités, délai de réponse, délai cible de rétablissement et exclusions sont écrits. Le pipeline prévoit staging, contrôles avant production et retour arrière ; ses durées sont mesurées sur l'infrastructure retenue, pas promises avec un chiffre générique.",
        ),
      ],
    ],
  },
];

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderPartHtml(value: EcommerceFaqPart): string {
  const content = value.strong
    ? `<b>${escapeHtml(value.text)}</b>`
    : escapeHtml(value.text);

  if (!value.href) return content;

  const externalAttributes = value.href.startsWith("http")
    ? ' target="_blank" rel="noopener noreferrer"'
    : "";
  return `<a href="${escapeHtml(value.href)}"${externalAttributes}>${content}</a>`;
}

export function ecommerceFaqAnswerText(item: EcommerceFaqItem): string {
  return item.answer
    .map((paragraph) => paragraph.map((value) => value.text).join(""))
    .join(" ");
}

const FAQ_ICON_HTML =
  '<span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg></span>';

/** Identifiant de la réponse n° `index` (1-based dans le HTML servi). */
export function ecommerceFaqAnswerId(index: number): string {
  return `faq-a-shop-faq-${index + 1}`;
}

function renderAnswerBodyHtml(item: EcommerceFaqItem): string {
  return item.answer
    .map((paragraph) => `<p>${paragraph.map(renderPartHtml).join("")}</p>`)
    .join("\n");
}

/**
 * Une seule question est dépliée dans le HTML servi : la première. Les deux
 * variantes sont écrites en toutes lettres — `aria-expanded="true"` sans
 * `hidden`, puis `aria-expanded="false"` avec `hidden` — parce que l'état
 * annoncé au lecteur d'écran et l'état réel du bloc doivent rester lisibles
 * dans le gabarit, sans être reconstitués à l'exécution.
 *
 * L'identifiant dépend de l'index : une page qui sert dix réponses sous le
 * même `id` renvoie tous les `aria-controls` vers le premier bloc.
 */
export function renderEcommerceFaqItemsHtml(
  items: readonly EcommerceFaqItem[] = ECOMMERCE_FAQ_ITEMS,
  startIndex = 0,
): string {
  return items
    .map((item, offset) => {
      const index = startIndex + offset;
      return index === 0
        ? `
        <div class="faq-item open">
          <button type="button" class="faq-q" aria-expanded="true" aria-controls="${ecommerceFaqAnswerId(index)}">
            ${escapeHtml(item.question)}
            ${FAQ_ICON_HTML}
          </button>
          <div class="faq-a" id="${ecommerceFaqAnswerId(index)}">
            ${renderAnswerBodyHtml(item)}
          </div>
        </div>`
        : `
        <div class="faq-item">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="${ecommerceFaqAnswerId(index)}">
            ${escapeHtml(item.question)}
            ${FAQ_ICON_HTML}
          </button>
          <div class="faq-a" id="${ecommerceFaqAnswerId(index)}" hidden>
            ${renderAnswerBodyHtml(item)}
          </div>
        </div>`;
    })
    .join("\n");
}

export const ecommerceFaqItemsHtml = renderEcommerceFaqItemsHtml();

/**
 * Les questions techniques suivent les questions commerciales dans la même
 * liste. Leur index de départ est décalé du nombre de questions commerciales :
 * les `id` de réponse restent uniques sur la page, donc chaque `aria-controls`
 * pointe bien sur son propre bloc.
 */
export const ecommerceTechFaqItemsHtml = renderEcommerceFaqItemsHtml(
  ECOMMERCE_TECH_FAQ_ITEMS,
  ECOMMERCE_FAQ_ITEMS.length,
);

export const ECOMMERCE_FAQ_TOTAL =
  ECOMMERCE_FAQ_ITEMS.length + ECOMMERCE_TECH_FAQ_ITEMS.length;

export const ecommerceFaqSectionHtml = `
<!-- FAQ -->
<section class="faq">
  <div class="wrap">
    <div class="faq-grid">
      <div class="faq-intro reveal">
        <div class="eyebrow">— Questions fréquentes</div>
        <h2 style="margin-top:14px">Les dix-huit questions<br>qu'on nous pose à chaque échange.</h2>
        <p>Les réponses utiles avant de cadrer votre projet. Les hypothèses de coût et les obligations datées renvoient vers leurs sources officielles.</p>
      </div>

      <div class="faq-list reveal reveal-d-1">
        ${ecommerceFaqItemsHtml}
        <div class="faq-sub">
          <h3 class="faq-sub-t eyebrow">— Pour les profils techniques</h3>
          <p>Huit sujets à trancher avant signature. Les réponses ci-dessous décrivent notre méthode ; l'architecture, les niveaux de service et les outils retenus figurent dans le dossier du projet.</p>
        </div>
        ${ecommerceTechFaqItemsHtml}
      </div>
    </div>
  </div>
</section>`;
