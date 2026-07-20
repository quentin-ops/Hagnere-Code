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
        part("Pour situer ces montants dans le marché, consultez notre "),
        part("guide des prix d'un site internet en 2026", {
          href: "/guides/combien-coute-un-site-internet",
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
        part(
          " un forfait TMA mensuel chez nous — monitoring, évolutions et hotline, généralement 800 à 2 500 €/mois selon le périmètre ; ",
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
          "Cette méthode réduit le risque mais ne permet pas de garantir un trafic ou des positions immobiles. Les indicateurs suivis et la référence de comparaison sont définis avant la bascule afin de documenter les variations et les corrections.",
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
          " avant la mise en production ; le protocole, le volume et les seuils acceptés sont consignés dans le plan de recette.",
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

export function renderEcommerceFaqItemsHtml(
  items: readonly EcommerceFaqItem[] = ECOMMERCE_FAQ_ITEMS,
): string {
  return items
    .map(
      (item, index) => `
        <div class="faq-item${index === 0 ? " open" : ""}">
          <div class="faq-q">
            ${escapeHtml(item.question)}
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            ${item.answer
              .map(
                (paragraph) =>
                  `<p>${paragraph.map(renderPartHtml).join("")}</p>`,
              )
              .join("\n")}
          </div>
        </div>`,
    )
    .join("\n");
}

export const ecommerceFaqItemsHtml = renderEcommerceFaqItemsHtml();

export const ecommerceFaqSectionHtml = `
<!-- FAQ -->
<section class="faq">
  <div class="wrap">
    <div class="faq-grid">
      <div class="faq-intro reveal">
        <div class="eyebrow">— Questions fréquentes</div>
        <h2 style="margin-top:14px">Les dix questions<br>qu'on nous pose à chaque échange.</h2>
        <p>Les réponses utiles avant de cadrer votre projet. Les hypothèses de coût et les obligations datées renvoient vers leurs sources officielles.</p>
      </div>

      <div class="faq-list reveal reveal-d-1">
        ${ecommerceFaqItemsHtml}
      </div>
    </div>
  </div>
</section>`;
