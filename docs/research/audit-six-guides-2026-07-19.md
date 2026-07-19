# Registre de preuves — audit de six guides — 19 juillet 2026

> Document de travail post-audit. Il ne remplace pas une recherche de marché
> complète. Il consigne ce que les pages peuvent soutenir, ce qu'elles doivent
> présenter comme hypothèse et ce qui devra être revérifié avant une nouvelle
> mise à jour.

## Mode d'emploi

Pour ces six guides, quatre catégories ne doivent jamais être confondues :

- **fait vérifié** : une source primaire ou officielle soutient précisément
  l'affirmation et son périmètre est indiqué ;
- **étude limitée** : la source existe, mais son échantillon, son année, son
  pays ou son cas d'usage empêchent toute généralisation ;
- **simulation éditoriale** : les hypothèses et le calcul sont reproductibles,
  mais le résultat n'est ni une médiane de marché ni un cas client ;
- **offre Hagnéré Code** : prix, délai ou engagement propre à l'agence, à
  distinguer du marché et à vérifier sur les pages commerciales avant chaque
  publication.

Une fourchette issue d'un recoupement d'agences reste un **ordre de grandeur
éditorial** tant que le nombre de devis, la période, le périmètre et la méthode
ne sont pas publiables. Elle ne doit pas être appelée « médiane constatée »,
« consensus » ou « prix réel ».

## 1. Combien coûte un SaaS

| Affirmation ou usage | Source et nature | Périmètre / confiance | Traduction lecteur et fraîcheur |
|---|---|---|---|
| Prix unitaires d'hébergement, base, authentification, paiement et suivi | Pages tarifaires officielles [Vercel](https://vercel.com/pricing), [Neon](https://neon.com/pricing), [Supabase](https://supabase.com/pricing), [Clerk](https://clerk.com/pricing), [Stripe](https://stripe.com/fr/billing/pricing), [Sentry](https://sentry.io/pricing) et [PostHog](https://posthog.com/pricing) | Solide pour le tarif affiché ; ne prouve pas le coût total d'un SaaS | Construire un scénario à consommation donnée. Revérifier chaque trimestre et avant publication. |
| Rôles RGPD | [CNIL, identifier son rôle](https://www.cnil.fr/fr/rgpd-comment-bien-identifier-son-role), source officielle | Solide sur les critères ; le rôle dépend des décisions réellement prises | Faire écrire les responsabilités, sans attribuer un rôle unique à toute agence. Revérifier si la doctrine évolue. |
| Effet des assistants IA sur la production | [DORA 2025](https://dora.dev/dora-report-2025/), [Peng et al.](https://arxiv.org/abs/2302.06590), [METR 2025](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) | Études aux tâches, équipes et mesures différentes ; confiance moyenne pour une tendance, faible pour une remise de prix | Ne soutient pas une baisse causale universelle de 20 à 30 %. Présenter toute économie Hagnéré comme estimation interne. |
| Budgets POC, MVP et V1 | Recoupement éditorial de tarifs et de devis non publié | Confiance faible à moyenne ; aucun échantillon auditable dans le dépôt | Présenter des ordres de grandeur avec inclusions et exclusions, jamais une médiane. Refaire une collecte documentée au moins chaque année. |
| Scénarios et devis MVP détaillé | Simulations pédagogiques | Aucun statut de client ou de facture réelle | Servent à apprendre à additionner les postes. Conserver la mention « fictif » ou « illustratif » à chaque reprise autonome. |

## 2. Prix d'un logiciel sur mesure

| Affirmation ou usage | Source et nature | Périmètre / confiance | Traduction lecteur et fraîcheur |
|---|---|---|---|
| Taux journaliers des profils numériques | [SILKHOM, baromètre TJM](https://www.silkhom.com/barometre-des-tjm-informatique-electronique-digital/), baromètre d'un intermédiaire de recrutement | Confiance moyenne ; segmentation et intérêt commercial à rappeler | Utiliser comme repère de calcul, pas comme tarif obligatoire. Revérifier à chaque édition annuelle. |
| Coût du temps salarié | [Eurostat, coûts horaires du travail](https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Hourly_labour_costs), statistique publique | Solide à l'échelle agrégée, non spécifique à une PME ou un métier | Un calcul de ROI doit repartir du coût réel de l'entreprise quand il est disponible. Revérifier à la prochaine publication Eurostat. |
| Droits sur le logiciel et cession | [Légifrance L.113-9](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818), [L.131-3](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958) et [INPI](https://www.inpi.fr/realiser-demarches/propriete-intellectuelle/cas-particulier-logiciels) | Sources officielles solides ; application au contrat à faire valider juridiquement | Distinguer droits patrimoniaux, licences tierces, données, accès au code et réversibilité. Vérifier la version consolidée avant réemploi. |
| Gain de productivité lié à l'IA | [Peng et al.](https://arxiv.org/abs/2302.06590), [METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) et [DORA](https://dora.dev/ai/gen-ai-report/) | Résultats hétérogènes ; aucune relation directe avec le prix final d'un projet PME | Une baisse proposée par l'agence reste une estimation interne et ne doit pas être vendue comme benchmark causal. |
| Budgets et maintenance du sur-mesure | Recoupement éditorial non publié | Confiance faible à moyenne sans corpus de devis comparable | Afficher hypothèses, jours et postes ; supprimer toute « médiane constatée ». Refaire une collecte annuelle documentée. |
| Transports Bréban et son devis | Entreprise et scénario fictifs | Aucune preuve client | Le calcul illustre un devis et un ROI ; il ne prouve ni un prix marché ni un résultat client. |

## 3. Shopify ou sur-mesure

| Affirmation ou usage | Source et nature | Périmètre / confiance | Traduction lecteur et fraîcheur |
|---|---|---|---|
| Abonnements Shopify et Shopify Plus | [Tarifs Shopify France](https://www.shopify.com/fr/tarifs) et [tarifs Shopify Plus](https://www.shopify.com/plus/pricing), sources éditeur | Solide au jour de consultation ; contrats, taxes, devise et frais variables peuvent différer | Toujours dater la simulation et vérifier le contrat réel. Relever les tarifs chaque trimestre. |
| Fonctionnalités B2B et export des données | [Shopify Help Center B2B](https://help.shopify.com/en/manual/b2b/getting-started/plan-features) et [import/export clients](https://help.shopify.com/en/manual/customers/import-export-customers) | Solide pour les fonctions documentées ; ne garantit pas une réversibilité sans travail | Faire tester les exports et chiffrer la migration, pas seulement vérifier qu'un bouton existe. Revérifier avant mise à jour. |
| Limite de variantes | [Shopify Changelog, 2 048 variantes](https://changelog.shopify.com/posts/we-ve-increased-the-product-variant-limit-to-2048), source éditeur | Solide pour l'annonce d'octobre 2025 ; disponibilité réelle selon API, thème et applications | Tester le catalogue concerné. Revérifier dès qu'une contrainte produit déclenche la décision. |
| Taille du marché e-commerce | [Fevad, bilan 2025](https://www.fevad.com/bilan-du-e-commerce-en-france-les-francais-ont-depense-pres-de-200-milliards-deuros-sur-internet-en-2025/) | Solide pour le marché agrégé ; ne prouve aucun coût de projet | Donner du contexte uniquement, jamais justifier une médiane de développement. Mise à jour annuelle. |
| TCO Shopify / sur-mesure | Simulation éditoriale à hypothèses visibles | Reproductible pour les volumes et tarifs choisis ; pas une moyenne du marché | Le lecteur doit remplacer commandes, panier, applications, maintenance et coût du capital par ses valeurs. |
| Granita, coûts de migration et budget sur-mesure | Simulation et ordres de grandeur éditoriaux | Aucun cas client, aucune médiane auditable | Garder les mentions « fictif », « reconstitué » et « hypothèse ». Documenter un corpus avant toute nouvelle affirmation de marché. |

## 4. React Native ou Flutter

| Affirmation ou usage | Source et nature | Périmètre / confiance | Traduction lecteur et fraîcheur |
|---|---|---|---|
| Architecture React Native | [React Native 0.76](https://reactnative.dev/blog/2024/10/23/release-0.76-new-architecture), source officielle | Solide pour cette version ; le framework évolue rapidement | Vérifier la version stable et les dépendances du projet avant de choisir. Relecture à chaque version majeure. |
| Engagement de Google envers Flutter | [Google Developers Blog](https://developers.googleblog.com/en/celebrating-flutters-production-era/), source officielle de l'éditeur | Solide pour la position publiée, pas une garantie de longévité | Évaluer aussi l'équipe disponible, le recrutement et les bibliothèques critiques. Mise à jour annuelle. |
| Retours Shopify et Airbnb | [Shopify Engineering](https://shopify.engineering/five-years-of-react-native-at-shopify) et [Airbnb Engineering](https://medium.com/airbnb-engineering/sunsetting-react-native-1868ba28e30a) | Études de cas propres à leur organisation et à leur époque | Extraire les conditions de réussite ou d'échec ; ne pas en faire un verdict universel. |
| Adoption et présence dans les applications | [Stack Overflow Survey](https://survey.stackoverflow.co/2025/technology), [Appfigures](https://appfigures.com/resources/insights/20251219), [JetBrains](https://devecosystem-2025.jetbrains.com/) | Méthodes et populations différentes ; confiance moyenne pour une tendance | L'adoption ne remplace pas un prototype sur le parcours matériel, hors-ligne ou temps réel du projet. Mise à jour annuelle. |
| Batilog et le coût comparé | Simulation pédagogique | Aucun statut de client ni de benchmark | Sert à comparer deux trajectoires avec les mêmes hypothèses. Conserver la qualification fictive. |

## 5. Refonte sans perdre son SEO

| Affirmation ou usage | Source et nature | Périmètre / confiance | Traduction lecteur et fraîcheur |
|---|---|---|---|
| Procédure avec ou sans changement d'URL | Google Search Central : [URL modifiées](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes), [URL conservées](https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes), [redirections](https://developers.google.com/search/docs/crawling-indexing/301-redirects) | Sources officielles solides ; aucune garantie de délai ou de position | Choisir la procédure correspondant au scénario exact et séparer les changements risqués. Revérifier avant chaque migration. |
| Délais de récupération sur 892 cas | [Search Engine Journal, étude de changements de domaine](https://www.searchenginejournal.com/study-how-long-should-seo-migration-take/492050/) | Étude limitée aux changements de domaine ; confiance moyenne, non transposable à une refonte ordinaire | Utiliser seulement pour montrer le risque spécifique d'un changement de domaine. |
| Core Web Vitals et classement | [Google, page experience](https://developers.google.com/search/docs/appearance/page-experience) et [web.dev, Web Vitals](https://web.dev/articles/vitals) | Solide sur les métriques et leur rôle ; ne garantit ni indexation ni position | Lighthouse est un diagnostic de laboratoire ; suivre aussi les données réelles et la qualité globale de la page. |
| Cas Renault | [web.dev, étude de cas Renault](https://web.dev/case-studies/renault) | Étude de cas d'une entreprise, sur son dispositif et sa mesure | Citer comme résultat Renault, jamais comme taux de conversion attendu pour le lecteur. |
| Seuils d'alerte post-bascule | Règles opérationnelles internes | Utiles pour décider quand investiguer ; pas des normes Google | Les nommer « repères internes » et les adapter au trafic, à la saisonnalité et à la qualité de mesure. |
| Élodie, gains et offre Lighthouse | Scénario fictif et engagement commercial Hagnéré Code | Ne prouve aucun gain SEO ; un score de laboratoire n'est pas une promesse de classement | Séparer résultat illustratif, contrôle contractuel et performance organique réelle. |

## 6. Cahier des charges d'application mobile

| Affirmation ou usage | Source et nature | Périmètre / confiance | Traduction lecteur et fraîcheur |
|---|---|---|---|
| Compte et examen Apple | [Apple Developer Program](https://developer.apple.com/programs/) et [App Review](https://developer.apple.com/distribute/app-review/), sources officielles | Solide au jour de consultation ; délais et frais peuvent changer | Budgéter le compte et prévoir la responsabilité des soumissions. Vérifier avant chaque chiffrage. |
| Tests Google Play et niveau d'API | [Google Play, test des nouveaux comptes](https://support.google.com/googleplay/android-developer/answer/14151465) et [niveau d'API](https://support.google.com/googleplay/android-developer/answer/11926878) | Solide pour les comptes et versions concernés | Identifier le type de compte et intégrer les délais dans le planning. Vérifier avant chaque publication. |
| Données et permissions mobiles | [CNIL, recommandations applications mobiles](https://www.cnil.fr/fr/recommandations-applications-mobiles), [Apple, confidentialité](https://developer.apple.com/app-store/user-privacy-and-data-use/) et [Android, notifications](https://developer.android.com/develop/ui/views/notifications/notification-permission) | Sources officielles solides ; application à valider selon les traitements réels | Décrire données, finalités, permissions, suppression et responsables dès le cahier des charges. Revue juridique si nécessaire. |
| Adoption et désinstallation | [Pendo 2019](https://www.pendo.io/resources/the-2019-feature-adoption-report/) et [AppsFlyer](https://www.appsflyer.com/resources/reports/app-uninstall-benchmarks-report/) | Rapports éditeurs, anciens ou dépendants de leur échantillon ; confiance moyenne à faible | Illustrer le risque de sur-périmètre, jamais prédire le comportement de l'application à construire. |
| Budgets, maintenance et écarts de devis | Recoupement éditorial non publié | Aucun corpus auditable pour une médiane ou un écart universel | Présenter des scénarios et hypothèses, pas des « constats documentés ». Refaire une étude de devis avant toute affirmation forte. |
| Fleurs d'Aix, devis et modèle de clause | Simulation pédagogique ; exemple contractuel informatif | Aucun cas client ; l'exemple n'est pas un conseil juridique personnalisé | Conserver les mentions « fictif » et « à faire valider juridiquement ». |

## Portes de sortie avant nouvelle publication

La mise à jour d'un de ces guides est bloquée si :

1. une simulation est présentée comme client, facture ou devis réel ;
2. une médiane, un consensus ou un taux de dépassement n'a pas de corpus
   consultable ;
3. une étude de cas est généralisée au lecteur ;
4. un score Lighthouse est assimilé à une garantie SEO ou commerciale ;
5. une estimation interne liée à l'IA devient une causalité de prix ;
6. un exemple de clause est proposé sans réserve juridique ;
7. un tarif officiel volatil n'a pas été vérifié à la date de modification.
