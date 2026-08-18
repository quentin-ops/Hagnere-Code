# Audit approfondi — `cout-maintenance-site-internet`

Date : 24 juillet 2026  
Auditeur concurrentiel : audit éditorial, produit, SEO et vérification des sources (lecture seule)  
Snapshot : `src/app/guides/cout-maintenance-site-internet/page.tsx` (871 lignes, 4 008 mots), registre observé le 24 juillet 2026.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant de TPE/PME, indépendant ou responsable marketing qui possède déjà un site et veut savoir quel budget réserver, sans acheter une promesse vague.
Question réelle : « Que dois-je réellement payer chaque mois pour que mon site reste sûr, disponible et utile, et comment éviter de comparer des forfaits qui ne couvrent pas la même chose ? »
Décision attendue : choisir un niveau de maintenance et obtenir un périmètre contractuel vérifiable, adapté au risque économique du site.
Réponse actuelle en une phrase : le guide montre honnêtement six offres françaises (29 à 499 € HT/mois), explique les notions de maintenance et donne une bonne check-list contractuelle, mais ne transforme pas encore ces données en budget total ni en décision par type de site.
Défaut qui coûte le plus de valeur : la comparaison juxtapose des prix publics sans normaliser le périmètre, puis laisse les variables économiques essentielles sous forme de blancs (« ___ ») ; le lecteur comprend les mots mais ne peut pas calculer son propre coût ni le coût d'un arrêt.
Niveau actuel : B (utile et fiable dans son intention, insuffisant pour une décision professionnelle complète).
Priorité : haute.
Statut : audité, guide source non modifié.
```

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 8 | Hero, introduction et promesse sur les offres datées | Le choix par criticité du site n'arrive pas assez tôt |
| Décision | 7 | Sections « choisir en cinq étapes », clauses, délais | Aucun budget TCO 12/36/60 ni seuil de décision |
| Pédagogie | 8 | Définitions préventive/corrective/évolutive, exemples | Trop de notions sans exemple chiffré filé |
| Profondeur | 7 | Sauvegardes, SLA, hébergement, sortie, WordPress/Next | RPO/RTO, rétention, sécurité, licences et astreinte restent généraux |
| Preuve | 7 | Six pages tarifaires et dates affichées | Sources majoritairement commerciales, périmètres non homogènes |
| Comparaison | 6 | Tableau de six prestataires, WordPress/Next | Pas de comparaison à périmètre constant ni internationale |
| Originalité | 7 | Chemin « éviter / preuves / contrat », exemple de fromagerie | Pas de calcul de coût du risque ni de grille propriétaire exploitable |
| Style | 8 | Ton direct, précautions sur l'absence de moyenne officielle | Quelques formulations abstraites et tableaux difficiles à convertir en action |
| Conversion | 7 | CTA de diagnostic et questions à poser | CTA sans livrable, délai ni preuve de sortie clairement annoncés |
| SEO/produit | 7 | JSON-LD Article/Breadcrumb/FAQ, liens internes | Champ lexical et données structurées à auditer, aucune ressource téléchargeable |

Total : **72/100**.

Le score ne sanctionne pas la longueur. Il mesure la capacité à faire prendre une décision sûre à un dirigeant. Le guide est meilleur que la moyenne sur la transparence et la prudence, mais perd l'avantage au moment où un lecteur demande : « Pour mon site, combien cela représente-t-il sur trois ans, et que se passe-t-il lors d'une panne un samedi de décembre ? »

## 2. Ce que le guide dit réellement

### Parcours observé

Le début répond correctement à une première attente : six offres françaises consultées le 21 juillet 2026 affichent 29 à 499 € HT par mois. Le texte précise que ce ne sont pas des moyennes officielles et que l'écart vient du périmètre, du support et des conditions. C'est une bonne protection contre le faux chiffre unique.

Le parcours est ensuite :

1. comparer six offres publiques ;
2. définir préventif, correctif et évolutif ;
3. expliquer les risques d'un site non suivi ;
4. demander une cadence et une preuve pour chaque ligne du contrat ;
5. distinguer maintenance, hébergement et infogérance ;
6. comparer WordPress, site statique/Next.js et plateformes hébergées ;
7. expliquer GTI/GTR et les clauses de sortie ;
8. proposer une méthode de choix en cinq étapes.

Cette architecture est saine. Elle ressemble cependant davantage à un excellent cahier de questions qu'à un outil de budget et d'arbitrage. Le tableau des six prestataires compare des prix d'entrée, alors que les lecteurs achètent des obligations différentes : fréquence des mises à jour, tests, licences, temps de correction, surveillance, contenu, astreinte et responsabilité.

### Ce qui paraît complet sans encore l'être

- « Sauvegarde incluse » ne dit ni où elle est stockée, ni combien de versions sont conservées, ni si une restauration a réellement été testée.
- « Sécurité » ne dit pas si la surveillance est continue, quotidienne ou seulement un scan périodique, ni qui traite une alerte.
- « Support » ne dit pas si une réponse est une confirmation de réception ou une remise en ligne.
- « 99,9 % » convertit bien une disponibilité en durée annuelle, mais ne prouve pas un SLA : fenêtres exclues, maintenance planifiée, mesure, crédit et responsabilité manquent.
- « 29 à 499 € » est lisible, mais il n'explique pas que les offres peuvent exclure WooCommerce, les licences premium, les évolutions, le contenu, l'hébergement ou les interventions hors horaires.
- Le cas de la fromagerie est explicitement fictif, ce qui est honnête, mais il ne donne pas de montant de commande perdu, d'heures de rétablissement ou de coût de restauration.
- Les champs `___` demandent au lecteur de calculer sans l'y conduire. Un exemple rempli, puis un calcul à personnaliser, est indispensable.

## 3. Benchmark France et international

Requêtes : `website maintenance cost`, `WordPress maintenance pricing`, `Wartungsvertrag WordPress Kosten`, `website maintenance Australia`, en français, anglais et allemand. Recherche effectuée les 24 juillet 2026 ; les tarifs restent des instantanés commerciaux et ne sont jamais utilisés comme vérité universelle.

| Ressource et URL directe | Pays | Réponse utile | Preuve, outil ou exemple | Limite | Apport à vérifier ou adapter |
| --- | --- | --- | --- | --- | --- |
| [Grain de Site](https://graindesite.com/maintenance-wordpress/) | France | forfaits publics d'entrée | prix et options visibles | périmètre commercial propre au prestataire | conserver comme exemple, ajouter cadence, licences et tests |
| [TYTAE](https://tytae.fr/maintenance-site-wordpress-tarif/) | France | trois niveaux de prix | tableau tarifaire | pas comparable ligne à ligne aux autres | normaliser les inclusions |
| [Studio HTTP](https://studio-http.fr/maintenance-wordpress/) | France | prix « à partir de » | signal de prix bas | un prix « à partir de » ne définit pas le cas réel | ne pas l'agréger sans périmètre |
| [Harsene](https://harsene.com/maintenance-et-support-wordpress/) | France | support et maintenance | description de service | tarifs et délais à distinguer | demander preuve de support et exclusions |
| [Palmsquare](https://palmsquare.fr/agence-maintenance-wordpress/) | France | forfaits plus accompagnés | prix publics | volume de contenu et licences à vérifier | illustrer la montée en gamme |
| [Pulsar Agency](https://pulsar-agency.com/maintenance-site-web/contrat-maintenance-web) | France | offre haute avec support | forfait jusqu'à 499 € | pas le même niveau de responsabilité que 29 € | montrer le rapport périmètre/risque |
| [Clickdev, coût WordPress 2026](https://www.clickdev.fr/blog/maintenance-wordpress-combien-ca-coute-2026) | France | fourchette 30 à 500+ €/mois, observation de projets 39–290 € HT | synthèse datée de plusieurs offres | source commerciale, pas une étude de marché | utiliser pour la dispersion, jamais pour une moyenne |
| [Alliantic, inclusions d'un contrat](https://www.alliantic.com/cout-maintenance-site-wordpress-ce-que-devrait-vraiment-inclure-votre-contrat/) | France | insiste sur sécurité, sauvegardes testées et support | grille d'inclusions | recommandations d'un vendeur | compléter la check-list du guide |
| [BleylDev](https://bleyl.dev/blog/website-maintenance-cost-small-business) | États-Unis | $30–300/mois ; $75–200 pour une maintenance professionnelle | distingue DIY, hébergement géré et support | ordre de grandeur commercial, périmètre variable | ajouter le coût du temps interne et des incidents |
| [Website Maintenance Services](https://websitemaintenanceservices.org/how-much-does-website-maintenance-cost/) | États-Unis | environ $100–300/mois pour un service complet | fourchette et composants | source non institutionnelle | comparer l'écart de service, pas convertir directement en euros |
| [Jamie Grand](https://jamiegrand.co.uk/blog/website-maintenance-cost-uk/) | Royaume-Uni | 12 offres relevées, £29–379/mois ; beaucoup de petites offres £40–99 | relevé public daté | prix et prestations ne sont pas homogènes | demander un tableau à périmètre constant |
| [WP Care Pros](https://wpcarepros.co.uk/blog/wordpress-maintenance-cost/) | Royaume-Uni | £40–150 pour une maintenance humaine ; moins de £40 souvent automatisé | seuil pédagogique | analyse de prestataire | formuler « automatisé n'est pas égal à restauré » |
| [WP Maintain](https://www.wpmaintain.co.uk/pricing/) | Royaume-Uni | forfait public à £79/mois | prix et offre consultables | une seule offre | vérifier licences, urgences et sortie |
| [WP Creative Australia](https://wpcreative.com.au/wordpress-maintenance-cost/) | Australie | A$50 à A$10 000+ selon complexité | montre l'amplitude entre vitrine et critique | fourchette extrêmement large, commerciale | segmenter par criticité plutôt que reprendre l'amplitude |
| [ACT Websites, contrat PDF](https://actwebsites.com.au/wp-content/uploads/2025/02/WordPress-Maintenance-Service-Agreement-Version-0001-1.pdf) | Australie | exemple de contrat : plan premium A$189/mois + frais d'installation | obligations et accès demandés dans un contrat réel | un seul vendeur, version 2025 | reprendre l'idée d'un frais d'audit/initialisation distinct |
| [WordPress-Wartung.at](https://www.wordpress-wartung.at/wartungspakete/) | Autriche / DACH | €39/mois starter, €59 business ; fréquence de sauvegarde et sécurité détaillée | paquet et exclusions WooCommerce explicités | prix pour sites moyens, paiement annuel privilégié | mettre en évidence les exclusions (WooCommerce, Avada) |
| [WP-Wartungen.ch](https://wp-wartungen.ch/) | Suisse alémanique | CHF49 basic, CHF99 standard ; sauvegardes chiffrées sur serveur externe | cadence et stockage annoncés | TVA et périmètre local | demander lieu, chiffrement et restauration |
| [WP Maintenance Suisse](https://wpmaintenance.ch/standard/) | Suisse romande | CHF50/mois : mises à jour quotidiennes, backup externe quotidien, retour sous 24 h | engagement opérationnel explicite | offre d'un prestataire, garantie à lire au contrat | excellent exemple de preuve à exiger |
| [W3C WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) | international, référence normative | une maintenance peut inclure la non-régression d'accessibilité | standard de référence | ne chiffre pas le service | ajouter les tests UX/accessibilité comme livrables |

### Lecture du benchmark

La saturation apparaît après trois familles de réponses : prix d'entrée, maintenance humaine complète et support critique. Les sites étrangers n'apportent pas une « moyenne mondiale » ; ils confirment plutôt quatre angles absents du guide :

1. le coût d'installation ou d'audit initial avant abonnement ;
2. l'écart entre automatiser une mise à jour et vérifier/restaurer le résultat ;
3. l'obligation de détailler les exclusions (WooCommerce, licences, contenu, astreinte) ;
4. l'importance d'un retour opérationnel mesurable (« retour sous 24 h »), à distinguer d'une simple réponse au ticket.

## 4. Matrice de gain d'information

| Question décisive | Meilleure réponse française | Apport international | Couverture actuelle | Manque | Réponse supérieure à produire |
| --- | --- | --- | --- | --- | --- |
| Combien prévoir pour un site simple ? | Les offres publiques françaises montrent 29–99 € d'entrée, mais des périmètres différents | Royaume-Uni, Autriche et Suisse montrent des forfaits comparables dans une devise différente | partielle | pas de coût total ni périmètre constant | scénario vitrine avec 12/36/60 mois et hypothèses affichées |
| Quand 150–350 €/mois devient rationnel ? | le guide montre des offres hautes, sans seuil économique | USA/Australie distinguent support complet et criticité | faible | aucun calcul de coût d'arrêt | boutique avec commandes, SLA ouvré et restauration testée |
| Pourquoi une application critique coûte-t-elle plus ? | la maintenance évolutive est définie, mais pas quantifiée | les offres internationales montrent l'amplitude, sans modèle | faible | RTO/RPO, astreinte, observabilité et déploiement absents | scénario app avec disponibilité, données, incidents et TMA séparés |
| Une sauvegarde suffit-elle ? | la page exige une sauvegarde externe et un test | Suisse/DACH donnent fréquence, stockage chiffré et délai de retour | partielle | rétention, RPO, RTO, test et preuve | fiche « sauvegarde acceptable » en cinq preuves |
| Que signifie 99,9 % ? | conversion annuelle correcte | les offres haut de gamme mentionnent parfois 99,99 % | partielle | mesure, exclusions et compensation | matrice SLA avec fenêtre, démarrage, escalade et crédit |
| Qui paie les licences ? | le guide demande de les inclure ou non | Autriche explicite des exclusions WooCommerce/Avada | partielle | total licences et renouvellement | ligne TCO « licences, domaine, hébergement, outils » |
| Que se passe-t-il au départ du prestataire ? | clauses de sortie listées | les contrats étrangers montrent l'importance des accès | partielle | test d'export et restitution | protocole d'acceptation de sortie |
| Le DIY est-il vraiment moins cher ? | formule interne et 2–4 h/mois illustratives | USA/Australie valorisent le temps et le setup | faible | pas de calcul rempli ni risque de dérive | trois profils de taux horaires et réserve d'incident |
| La maintenance améliore-t-elle Google ? | le guide évoque le risque, pas le bénéfice SEO | les sources officielles Google cadrent expérience et migrations | faible | pas de non-régression technique | checklist Search Console, 301, performance et indexabilité |
| Que doit livrer le prestataire chaque mois ? | rapport mensuel suggéré | les meilleures offres précisent cadence et retour | partielle | aucun modèle de rapport | exemple d'une page de rapport mensuel anonymisé |

## 5. Faits et fraîcheur

| Affirmation du guide | Verdict | Source primaire actuelle | Périmètre et date | Correction |
| --- | --- | --- | --- | --- |
| Il n'existe pas de moyenne officielle du coût de maintenance | confirmé et utile | aucune source officielle ne publie une moyenne universelle ; les pages commerciales observées ne sont pas des statistiques | marché français, relevé du 21/07/2026 | conserver, préciser « pas de série statistique représentative trouvée » |
| Les six offres observées vont de 29 à 499 € HT/mois | vérifiable comme relevé, pas comme marché | pages tarifaires des six prestataires liées dans le guide | pages publiques consultées le 21/07/2026 | dater chaque ligne et afficher « prix d'appel / périmètre à vérifier » |
| WordPress n'impose pas juridiquement un contrat de maintenance | nuancé, non une règle générale de conformité | [documentation WordPress sur la gestion des extensions](https://wordpress.org/documentation/article/manage-plugins/) explique les mises à jour et la sauvegarde ; elle ne tranche pas les obligations contractuelles | logiciel, pas droit français | conserver avec réserve juridique et distinguer obligation de sécurité, contrat et usage |
| Une sauvegarde doit être externe et restaurable | bonne pratique opérationnelle, pas une garantie automatique | [WordPress Tools Export](https://wordpress.org/documentation/article/tools-export-screen/) documente l'export ; la restauration complète dépend de l'hébergeur et des outils | WordPress | ajouter fréquence, rétention, stockage séparé et test de restauration |
| Une mise à jour peut casser un formulaire | plausible et techniquement courant | [WordPress Manage Plugins](https://wordpress.org/documentation/article/manage-plugins/) recommande de sauvegarder avant mise à jour | WordPress | ajouter staging, test de parcours et procédure de retour arrière |
| 99,9 % représente environ 8 h 46 d'indisponibilité annuelle | calcul confirmé | calcul arithmétique : 365 × 24 × 0,001 = 8,76 h | année civile, hors exclusions | conserver mais dire que cela ne vaut pas SLA sans définition de mesure |
| 99,99 % représente environ 53 min | calcul confirmé | 365 × 24 × 0,0001 = 0,876 h | année civile, hors exclusions | conserver et ajouter fenêtre planifiée, maintenance et crédit |
| Un site Next.js statique nécessite moins de mises à jour de surface qu'un WordPress riche en extensions | directionnellement confirmé, pas universel | [Next.js self-hosting](https://nextjs.org/docs/app/guides/self-hosting), [production checklist](https://nextjs.org/docs/app/guides/production-checklist) | site Next auto-hébergé ou plateforme | préciser dépendances npm, déploiement, cache, secrets, hébergement et tests |
| Une plateforme hébergée supprime la maintenance | faux si compris globalement | Shopify/Wix gèrent une partie de l'infrastructure ; le client reste responsable du thème, contenu, intégrations, comptes et conformité | selon contrat et apps | remplacer par « déplace et réduit certaines responsabilités » |
| La maintenance aide indirectement la visibilité | plausible, à cadrer | [Google Page Experience](https://developers.google.com/search/docs/appearance/page-experience) et [site moves](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) documentent expérience, disponibilité technique et migrations | SEO technique | ne jamais promettre un classement ; citer les contrôles mesurables |
| Une activité qui traite des données personnelles doit encadrer ses sous-traitants | confirmé en principe, à adapter au cas | [CNIL — RGPD de quoi parle-t-on ?](https://www.cnil.fr/fr/rgpd-de-quoi-parle-t-on) | données, accès prestataire, hébergeur | ajouter responsable/sous-traitant, accès, localisation, suppression et notification |
| WCAG est une référence d'accessibilité | confirmé | [W3C WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) | standard international | ajouter tests de non-régression, sans promettre une conformité juridique universelle |

### Contradictions ou risques de lecture

- Le texte dit que les prix ne sont pas comparables, puis les présente dans un tableau unique sans colonne « périmètre normalisé ». La mise en page peut laisser croire à un classement.
- « Externe » peut être lu comme « sécurisé ». Il faut distinguer stockage séparé, chiffrement, accès, rétention et restauration testée.
- « Retour en production sous 24 h » trouvé dans une offre étrangère ne doit pas devenir une recommandation générale : il faut vérifier départ du délai, exclusions et mesure.
- Un nombre de tâches mensuelles ne remplace pas une disponibilité garantie. Il faut séparer maintenance planifiée, support et incident.

### Faits à retirer plutôt qu'à affaiblir

- Toute « moyenne » calculée à partir de six prix hétérogènes.
- Toute promesse selon laquelle Next.js, Shopify ou Wix rendrait la maintenance inutile.
- Toute interprétation SEO du type « la maintenance fait monter votre site ».
- Tout ROI chiffré sans trafic, marge, taux de conversion et durée d'incident explicités.

## 6. Scénarios et calculs à construire

Les montants ci-dessous sont des hypothèses de travail pour apprendre à décider, pas des tarifs Hagnéré Code ni une moyenne de marché. La réécriture doit afficher la formule puis permettre de remplacer chaque variable.

### Formule commune

```text
TCO12 = 12 × forfait mensuel
      + audit / remise à niveau initiale
      + hébergement et domaine
      + licences et services tiers
      + temps interne (heures × valeur horaire)
      + réserve annuelle d'incidents attendus

TCO36 et TCO60 reprennent les mêmes lignes sur 36 ou 60 mois.
Coût attendu d'un incident = probabilité annuelle × (marge ou ventes perdues
  + heures de diagnostic/rétablissement
  + communication / geste commercial
  + remise en conformité ou migration).
```

| Variable illustrative | Simple : vitrine | Central : boutique | Exigeant : application critique | Hypothèse à remplacer |
| --- | ---: | ---: | ---: | --- |
| Forfait maintenance | 79 €/mois | 249 €/mois | 1 200 €/mois | offre réelle au périmètre identique |
| Audit / remise à niveau initiale | 250 € | 600 € | 2 500 € | état du site, dette et accès |
| Hébergement + domaine | 240 €/an | 600 €/an | 3 600 €/an | fournisseur, trafic, redondance |
| Licences/services tiers | 180 €/an | 900 €/an | 2 400 €/an | plugins, monitoring, CI, email |
| Temps interne | 1,5 h/mois × 45 € | 5 h/mois × 55 € | 12 h/mois × 65 € | valeur du temps du décideur/équipe |
| Réserve incidents attendus | 300 €/an | 1 500 €/an | 6 000 €/an | probabilité × impact, non une garantie |
| TCO 12 mois | **2 418 €** | **7 980 €** | **37 660 €** | calcul illustratif |
| TCO 36 mois | **6 354 €** | **22 140 €** | **105 980 €** | hors inflation et renouvellements exceptionnels |
| TCO 60 mois | **10 290 €** | **36 300 €** | **174 300 €** | comparer au coût d'un arrêt majeur |

Calculs de contrôle : vitrine = 12×79 + 250 + 240 + 180 + 18×45 + 300 = 2 418 € ; boutique = 12×249 + 600 + 600 + 900 + 60×55 + 1 500 = 7 980 € ; application = 12×1 200 + 2 500 + 3 600 + 2 400 + 144×65 + 6 000 = 37 660 €. Les horizons 36 et 60 mois multiplient les charges récurrentes et ajoutent l'initialisation une seule fois.

### Ce que les scénarios apprennent

- **Vitrine simple** : le forfait n'est pas le poste dominant ; une maintenance trimestrielle avec sauvegarde hebdomadaire peut être rationnelle si aucune transaction ni compte client n'est présent. Une panne de formulaire ou une page supprimée reste néanmoins un incident commercial.
- **Boutique** : chaque jour sans commande, paiement ou stock fiable peut dépasser le forfait mensuel. Le contrat doit inclure mises à jour contrôlées, sauvegardes fréquentes, test panier/paiement, licences et délai de correction.
- **Application critique** : le prix rémunère surtout la capacité à diagnostiquer, restaurer et faire évoluer sous contrainte. Une offre WordPress « 49 €/mois » ne peut pas être comparée à une TMA avec astreinte, observabilité, revue de code, staging, RPO/RTO et gestion des secrets.

### Sensibilités à montrer au lecteur

| Variation | Vitrine | Boutique | Application critique | Décision qui bascule |
| --- | ---: | ---: | ---: | --- |
| Forfait +30 % | +341 €/an | +897 €/an | +4 320 €/an | vérifier le gain de couverture, pas seulement le prix |
| 1 incident de 8 h en période creuse | coût souvent inférieur à 500 € | pertes et reprise potentiellement > 1 000 € | peut dépasser 10 000 € selon utilisateurs et pénalités | le niveau de service devient économique |
| 1 incident de 8 h en pic | formulaire et leads perdus | commandes, SAV et confiance perdus | opérations internes bloquées | définir fenêtre, astreinte et plan de reprise |
| Temps interne doublé | +810 €/an | +3 300 €/an | +9 360 €/an | le « moins cher » externalisé peut devenir moins cher globalement |
| Restauration non testée | risque non quantifiable | commande et données possiblement irrécupérables | décision impossible en crise | exiger un test et une preuve datée |

Le guide doit signaler qu'un taux d'incident n'est qu'une hypothèse. Le lecteur peut remplacer 5 %, 10 % ou 20 % par son historique. Une sensibilité honnête vaut mieux qu'un ROI spectaculaire.

### RPO, RTO et SLA à illustrer

| Niveau | RPO (perte de données maximale visée) | RTO (retour de service visé) | Couverture raisonnable | À écrire dans le contrat |
| --- | --- | --- | --- | --- |
| Vitrine | 24 h | 1–2 jours ouvrés | heures ouvrées, pas d'astreinte | sauvegarde, test trimestriel, délai de réponse |
| Boutique | 1–4 h | 4–8 h ouvrées, urgence définie | surveillance et escalade | parcours panier/paiement, restauration, exclusions |
| Application critique | selon impact métier, parfois <1 h | quelques heures ou 24/7 selon besoin | astreinte ou équipe de relais | RPO/RTO, GTI/GTR, mesure, escalade et réversibilité |

Ces valeurs sont des exemples de cadrage, non des standards imposés. La bonne valeur est celle que l'entreprise peut financer et vérifier.

## 7. Comparaison et position professionnelle

```text
Options réellement comparables : forfait de maintenance uniquement, forfait + hébergement géré, TMA/application avec SLA ; comparer séparément les licences, le contenu et les évolutions.
Périmètre et horizon communs : même type de site, mêmes sauvegardes, même fréquence d'updates, mêmes horaires, mêmes tests, même horizon 12/36/60 mois, HT et hors inflation.
Option la moins chère : automatisation limitée sur une vitrine sans transaction, si le client accepte son temps et un délai non urgent.
Option la moins risquée : maintenance humaine avec mises à jour testées, sauvegardes hors site restaurées, monitoring et procédure d'incident proportionnés à l'activité.
Option qui demande le moins de temps interne : offre incluant support, contenu et rapport, à condition que les limites d'heures et les délais soient écrits.
Position Hagnéré Code pour le cas fréquent : commencer par le risque (rôle du site, données, revenus, intégrations), puis proposer un socle transparent et une option de renforcement ; ne pas vendre un forfait critique à une vitrine, ni une simple mise à jour automatisée à une boutique.
Faits qui la fondent : six offres publiques françaises hétérogènes, documentation WordPress sur les mises à jour/sauvegardes, documentation Next.js sur cache et déploiement, exigences RGPD et pratiques de sécurité.
Cas où l'option opposée gagne : DIY/plateforme hébergée pour une vitrine stable, sans données sensibles ni besoin de réponse rapide ; équipe interne compétente pour une application déjà observée et documentée.
Signal de révision : première vente en ligne, ajout de comptes ou paiements, croissance forte, incident répété, changement d'hébergeur, audit de sécurité, obligation contractuelle client.
Ce que nous déconseillons même si nous pourrions le vendre : un contrat qui promet une disponibilité sans méthode de mesure, une sauvegarde sans restauration testée, ou des heures évolutives présentées comme correctifs illimités.
```

### Comparaison à périmètre constant à ajouter

| Ligne | Forfait automatisé | Maintenance humaine | TMA/application |
| --- | --- | --- | --- |
| Mises à jour | planifiées, rollback incertain | staging et contrôle après mise à jour | pipeline, revue, tests automatisés/manuels |
| Sauvegarde | copie automatique | copie hors site + test périodique | RPO/RTO, réplication et exercices |
| Sécurité | scan ou outil | scan, correction, comptes et alertes | observabilité, secrets, vulnérabilités, journalisation |
| Correctif | hors forfait ou au temps | inclus dans limites écrites | file priorisée, GTI/GTR et post-mortem |
| Contenu | exclu | quota ou facturation séparée | souvent hors TMA, à préciser |
| Licences | client | incluses ou refacturées | dépendances et environnements à inventorier |
| Sortie | accès client à vérifier | export, documentation, comptes | transfert de code, données, secrets et runbook |

## 8. Objections et cas limites

| Objection loyale | Réponse prouvée | Ce qui reste incertain | Conséquence |
| --- | --- | --- | --- |
| « Mon site ne vend rien, je peux ne rien faire. » | le risque est plus faible, pas nul : formulaire, réputation, données et SEO restent concernés | fréquence d'incident propre au site | socle léger, mais sauvegarde et alertes vérifiables |
| « Mon hébergeur fait les sauvegardes. » | une sauvegarde hébergeur n'est utile que si l'accès, la rétention et la restauration sont connus | politique de l'hébergeur et délais | demander une restauration testée hors du compte principal |
| « Les mises à jour automatiques suffisent. » | elles réduisent le travail répétitif ; elles ne testent pas chaque parcours métier | dépendances et rollback | automatiser le préventif, garder une vérification humaine |
| « 99,99 % est forcément meilleur. » | il réduit la durée théorique indisponible ; la valeur dépend des exclusions et de la mesure | définition du SLA | lire le contrat, pas seulement le pourcentage |
| « Je paie déjà Shopify/Wix. » | la plateforme gère une partie de l'infrastructure ; contenu, thème, apps et conformité restent à gérer | contrat et intégrations | séparer abonnement plateforme et maintenance métier |
| « Je préfère payer à l'heure. » | pertinent pour petites évolutions imprévisibles, dangereux pour une urgence sans délai garanti | taux, priorité et disponibilité | combiner socle préventif et banque d'heures si besoin |
| « Les 2–4 h mensuelles de DIY sont faciles. » | le coût réel est temps × valeur horaire + apprentissage + incident | niveau technique et criticité | remplir le calcul avec son taux, ajouter une réserve |
| « Nous avons une équipe interne. » | elle peut être la meilleure option si accès, rotation, documentation et astreinte sont couverts | congés, départs, charge | auditer la continuité, pas seulement la compétence |
| « Les données sont sensibles, le prestataire ne doit pas entrer. » | limiter les accès est sain ; refuser toute procédure peut empêcher le secours | rôles, sous-traitants, localisation | matrice d'accès, journalisation et réversibilité |
| « Une migration va régler la maintenance. » | changer WordPress pour Next.js réduit certaines surfaces mais ajoute déploiement, dépendances et observabilité | architecture finale | comparer TCO et risque sur 36 mois |

## 9. Plan de réécriture

| Ordre | Section proposée | Question résolue | Preuve, scénario ou outil | Décision produite | À conserver / créer / couper |
| ---: | --- | --- | --- | --- | --- |
| 1 | « Le prix dépend du rôle de votre site » | suis-je vitrine, boutique ou application ? | arbre de décision en 60 secondes | niveau de service initial | conserver ton direct, créer l'arbre |
| 2 | « Les prix publics, mais pas le même service » | pourquoi 29 et 499 € ne se comparent pas | tableau six offres + colonne périmètre | demander les lignes manquantes | conserver sources, ajouter normalisation |
| 3 | « Ce qui est vraiment couvert » | que veut dire préventif/correctif/évolutif ? | exemple avant/après mise à jour | éviter le malentendu | conserver définitions, ajouter cas concrets |
| 4 | « Votre budget total sur 12, 36 et 60 mois » | combien prévoir au-delà du forfait ? | calculateur/formule et exemple rempli | comparer options globales | créer tableau TCO |
| 5 | « Combien coûte une journée d'arrêt ? » | quand la maintenance est économiquement rationnelle | vitrine, boutique, app ; creux/pic | choisir SLA et réserve | créer incident chiffré |
| 6 | « Sauvegarder ne suffit pas » | puis-je réellement repartir ? | RPO/RTO, rétention, test et preuve | exiger un test | créer check-list cinq preuves |
| 7 | « Le contrat en langage clair » | comment éviter les zones grises | matrice heures, sévérité, GTI/GTR, exclusions | accepter, négocier ou refuser | conserver clauses, créer modèle |
| 8 | « WordPress, Next.js ou plateforme » | quel système réduit quel risque ? | tableau à périmètre égal, sources officielles | migration ou maintien | conserver comparaison, ajouter TCO |
| 9 | « DIY ou délégation » | mon temps vaut-il le prix ? | trois taux horaires et incident | internaliser ou déléguer | garder formule, remplir exemple |
| 10 | « Les livrables mensuels » | comment contrôler le service ? | rapport-type, captures, test daté | renouveler avec preuve | créer ressource téléchargeable |
| 11 | « Choisir et demander un diagnostic » | quelle prochaine action ? | CTA avec livrable, délai, limites | prise de contact qualifiée | réécrire CTA, pas de promesse de classement |

### Contrat des 150 premiers mots

> Vous avez un site vitrine, une boutique ou une application, et vous vous demandez combien sa maintenance va réellement vous coûter ? Le prix affiché sur un forfait ne raconte qu'une partie de l'histoire : une mise à jour automatique, une sauvegarde jamais restaurée et une réponse « nous avons bien reçu votre ticket » ne protègent pas votre activité de la même façon. Dans ce guide, nous séparons le forfait, l'hébergement, les licences, votre temps interne et le coût possible d'un incident. Vous verrez pourquoi les offres publiques vont de quelques dizaines à plusieurs centaines d'euros par mois, quel niveau correspond à votre risque, et comment comparer deux contrats sur un périmètre identique. Les chiffres d'exemple sont des hypothèses à remplacer par les vôtres ; ils ne constituent ni une moyenne de marché ni un devis. À la fin, vous aurez une grille de questions et une formule de coût total sur 12, 36 et 60 mois.

### Éléments à supprimer ou déplacer

- déplacer le tableau des six offres après l'explication du périmètre, pour ne pas créer un classement implicite ;
- remplacer les cinq champs `___` par un exemple rempli puis un mini-calcul personnalisable ;
- raccourcir les répétitions sur « pas de moyenne officielle » ; une note méthodologique suffit ;
- éviter les adjectifs « sérieux », « complet » ou « sécurisé » sans critère observable ;
- ne pas présenter un taux de disponibilité comme une garantie de résultat commercial.

### Éléments à conserver

- dates et liens des six offres françaises ;
- distinction préventive/corrective/évolutive ;
- séparation maintenance, hébergement et infogérance ;
- prudence sur le cas fictif de la fromagerie ;
- clauses de sortie, accès, données et responsabilité ;
- comparaison WordPress / Next.js / plateformes, avec la réserve que la maintenance n'est pas supprimée ;
- calculs 99,9 % et 99,99 %, complétés par les exclusions contractuelles.

## 10. Contre-audit après correction

Ce contre-audit est la cible de réécriture. Il ne prétend pas qu'une correction a déjà été appliquée dans le dépôt.

| ID | Problème | Priorité | Correction attendue | Revalidation indépendante |
| --- | --- | --- | --- | --- |
| P0-01 | Aucun risque vital ou obligation immédiate non signalée dans le guide | P0 | aucune | confirmer après relecture juridique/technique |
| P1-01 | Six offres non comparables à périmètre constant | P1 | ajouter colonnes préventif/correctif/évolutif, hébergement, licences, contenu, astreinte, sortie | refaire le tableau avec les pages originales |
| P1-02 | Aucun TCO 12/36/60 | P1 | intégrer formule, exemple rempli et hypothèses | recalcul indépendant des six totaux |
| P1-03 | Vitrine, boutique et application critique insuffisamment séparées | P1 | trois scénarios avec SLA/RPO/RTO et charge interne | vérifier que chaque recommandation a un niveau de risque |
| P1-04 | Coût d'incident laissé en blanc | P1 | calcul marge/commandes/leads/heures + sensibilité creux/pic | refaire avec variables remplaçables |
| P1-05 | Backup et sécurité sans seuils opérationnels | P1 | fréquence, rétention, stockage, chiffrement, accès, test, RTO | demander une preuve datée de restauration |
| P1-06 | GTI/GTR sans matrice de sévérité ni astreinte | P1 | niveaux, horaires, départ du délai, escalade et exclusions | relire comme acheteur non technicien |
| P1-07 | Plateformes/Next/DIY pas comparés sur TCO et responsabilités | P1 | tableau de responsabilités + licences + temps interne + sortie | vérifier absence de promesse « zéro maintenance » |
| P1-08 | CTA sans livrable ni délai explicite | P1 | diagnostic, périmètre remis, délai de réponse et limites | test utilisateur : sait-il quoi demander ? |
| P2-01 | Benchmark page limité à la France | P2 | encadré international FR/US/UK/AU/DACH et méthode de lecture | rouvrir les pages avant publication |
| P2-02 | Sources de preuve principalement commerciales | P2 | ajouter WordPress, Next.js, CNIL, Google et W3C officiels | vérifier URL, date et portée de chaque source |
| P2-03 | Accessibilité, UX et consentement absents du périmètre | P2 | ajouter non-régression WCAG/UX et obligations données à vérifier | test formulaire, clavier, consentement et analytics |
| P2-04 | Pas de revue post-incident ni métriques de tendance | P2 | ajouter rapport mensuel : uptime, incidents, updates, tests, dette | contrôler un modèle de rapport |
| P2-05 | `readTimeMin: 14` à recalculer après enrichissement | P2 | recalculer mot à mot après réécriture | comparer texte publié et registre |
| P2-06 | Image sociale et metadata non inspectées visuellement | P2 | vérifier rendu OG et partage | capture réelle de la carte sociale |
| P2-07 | Pas de preuve client publique, cas seulement fictif | P2 | conserver l'exemple marqué fictif ou ajouter un cas autorisé et anonymisé | vérifier consentement et traçabilité |
| P2-08 | RGPD, multi-sites, sous-traitants et localisation peu opérationnels | P2 | matrice accès/données/sous-traitants/suppression | revue CNIL et contrat |
| P2-09 | Réversibilité non testée | P2 | test export/restauration/transfert des comptes, code, données et secrets | procès-verbal de sortie |
| P2-10 | Aucune ressource téléchargeable | P2 | check-list de comparaison + feuille TCO | téléchargement, lisibilité et CTA mesurés |

### Portes explicites

```text
P1 — PRÉSENTE MAIS INCOMPLÈTE : le guide ne peut être considéré comme « meilleur » tant que P1-01 à P1-08 ne sont pas corrigés et recalculés.
P2 — À CORRIGER : les sources officielles, les tests UX/OG, le contrat de sortie et la ressource téléchargeable doivent être ajoutés avant publication renforcée.
P3 — REJETÉE / NON VALIDÉE : aucun déploiement, indexation ou effet SEO ne peut être déclaré sur la base de cet audit seul.
P4 — REJETÉE / NON VALIDÉE : visibilité, impressions, clics, conversion et position doivent être mesurés dans Search Console/analytics après mise en ligne ; ils ne sont pas prouvés ici.
```

### Score cible après correction

| Axe | Cible /10 | Condition de passage |
| --- | ---: | --- |
| Intention | 9 | contrat des 150 premiers mots et arbre de criticité |
| Décision | 9 | choix par type de site + TCO + prochaine action |
| Pédagogie | 9 | chaque notion suivie d'un exemple chiffré ou d'une preuve |
| Profondeur | 9 | RPO/RTO, sécurité, licences, contenu, astreinte, sortie |
| Preuve | 9 | sources officielles + pages tarifaires datées et bornées |
| Comparaison | 9 | périmètre constant, France et international contextualisés |
| Originalité | 9 | calcul du risque, rapport mensuel et grille propriétaire |
| Style | 9 | phrases orientées lecteur, définitions simples, pas de jargon décoratif |
| Conversion | 9 | CTA avec livrable, délai, qualification et limites honnêtes |
| SEO/produit | 9 | intention couverte, maillage, JSON-LD vérifié, ressource utile |

Total cible : **90/100**. Une note cible n'est pas une promesse de classement Google ; elle décrit le niveau éditorial et décisionnel à atteindre.

## 11. Preuves techniques et visuelles

```text
Manifeste : src/app/guides/cout-maintenance-site-internet/page.tsx ; src/app/guides/cout-maintenance-site-internet/opengraph-image.tsx ; entrée correspondante de src/lib/guides.ts.
Constats source : 871 lignes, environ 4 008 mots ; Article JSON-LD, Breadcrumb et FAQ présents ; six offres et leurs dates affichées ; placeholders « ___ » repérés dans la table de chiffrage.
Hashes de référence : page f008a25e40e75420dce0a89f731b406cfa38eeb4ceae3aed5b0c46a18ae7c4da ; OG 71f268d1a24fdef561983851fa8d36a5b88d1f4f88184e8d56f85f23f0cc20f4 ; registre observé 8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09.
Calculs refaits : disponibilité 99,9 % = 8,76 h/an ; 99,99 % = 0,876 h/an ; TCO illustratifs recalculés dans la section 6.
Sources rouvertes : WordPress Manage Plugins/Tools Export ; Next.js self-hosting/deployment/production checklist ; Google Page Experience/site moves/301 ; CNIL RGPD ; W3C WCAG ; pages tarifaires FR/US/UK/AU/DACH liées en section 3.
Liens vérifiés : liens directs de benchmark enregistrés le 24/07/2026 ; tarifs à rouvrir au moment de la réécriture, car ils peuvent changer.
Commandes : inspection lecture seule par sed/rg et calculs manuels ; aucun fichier de production modifié.
Rendu 320 / 390 / 768 / 1024 / 1440 : non exécuté dans cette passe ; la QA navigateur reste une porte P3 distincte.
Image sociale : fichier opengraph-image.tsx présent selon la convention Next.js ; rendu réel non validé, donc P2-06 reste ouvert.
Statut maximal prouvé : audit local et benchmark documenté uniquement.
Réserve publication / indexation : aucune modification, aucun commit, aucun push, aucun déploiement et aucune preuve d'indexation effectués.
```

## Conclusion opérationnelle

Le guide est une bonne base de confiance : il ne vend pas une fausse moyenne, ne prétend pas que la technologie supprime la maintenance et donne déjà des clauses utiles. Il ne peut toutefois pas encore prétendre à la meilleure réponse de recherche pour un dirigeant, car il ne relie pas le prix au risque, au temps interne et au coût total.

La réécriture prioritaire doit donc ajouter trois choses très concrètes : un arbre de choix par type de site, un calcul TCO rempli sur 12/36/60 mois, et une matrice de contrat qui prouve sauvegarde, restauration, SLA, licences, contenu et sortie. C'est ce triptyque qui transformera un article informatif en outil de décision et de conversion, sans promettre un classement que cet audit ne peut pas démontrer.
