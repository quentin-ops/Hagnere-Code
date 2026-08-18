# Dossier de recherche P1 — `cout-maintenance-site-internet`

> **Statut documentaire au 25 juillet 2026 : P1 = Terminée — porte validée.**
> Ce dossier prépare une réécriture ; il ne modifie ni ne valide la page
> publique. Les prix commerciaux observés servent à cartographier des
> périmètres, jamais à fabriquer un « tarif moyen ». Les montants des scénarios
> sont fictifs, reproductibles et modifiables. Une donnée inconnue reste
> `ND`, jamais `0`.

## 0. Journal des quatre passes

Propriétaire éditorial nommé : **Quentin Hagnéré**. Il reste l'unique personne
qui peut accepter la future rédaction au nom de Hagnéré Code. Propriétaire
métier côté lecteur : la personne qui peut qualifier l'impact d'une panne et
accepter le niveau de risque.

| Passe | État exact au 25 juillet 2026 | Responsable | Snapshot concerné | Blocage / objet | Ce que cet état ne prouve pas |
| --- | --- | --- | --- | --- | --- |
| P1 — recherche et porte de décision | **Terminée — porte validée** | agent P1, validation Quentin Hagnéré | contre-audit sur `bd0cb837…`, corrections revérifiées ; manifeste externe de gel | aucun P0/P1 ouvert | qualité de la future rédaction, exactitude future des tarifs, conformité contractuelle d'un cas réel |
| P2 — rédaction et intégration | **À faire** | non affecté | page actuelle `f008a25…`, pas un futur brouillon | aucune rédaction P2 lancée | publication, rendu ou conversion |
| P3 — contre-audit de la page | **Bloquée** | autre agent obligatoire | futur snapshot P2 inexistant | P2 à faire | correction des défauts de la page actuelle |
| P4 — plume humaine et QA | **Bloquée** | propriétaire éditorial + QA | futur snapshot P3 inexistant | P3 non validée | déploiement, sitemap, traitement Search Console ou indexation |

Ce statut suit
[`workflow-maitre-guides-4-passes.md`](../workflow-maitre-guides-4-passes.md),
la [charte qualité](../charte-qualite-guides.md) et la
[règle d'or](../regle-or-vigilance-seo-publication.md). La P1 ne ferme aucune
porte ultérieure.

## 1. Identité du guide et décision unique

| Champ | Définition P1 |
| --- | --- |
| Lecteur primaire | dirigeant de TPE/PME, indépendant, responsable marketing ou e-commerce déjà propriétaire d'un site |
| Situation | il compare une prise en charge interne, un freelance, une agence ou une TMA dont les mensualités et les mots ne couvrent pas les mêmes obligations |
| Décision unique | choisir un niveau de maintenance proportionné à la criticité du site, puis comparer des offres sur un périmètre identique |
| Mauvaise décision à éviter | prendre le forfait le moins cher ou le plus rassurant sans vérifier restauration, parcours métier, horaires, responsabilités et sortie |
| Résultat attendu | un cahier de comparaison où chaque promesse possède une preuve, une limite, un responsable et un coût résiduel |
| Hors sujet | fixer une moyenne nationale, recommander une technologie universelle, rédiger un contrat juridique, promettre un classement Google |

### Brief lecteur complet

| Élément demandé par le workflow | Réponse P1 |
| --- | --- |
| Requête principale pressentie | `coût maintenance site internet` |
| Requêtes secondaires utiles | `prix maintenance site web`, `contrat maintenance site`, `maintenance WordPress tarif`, `que comprend maintenance site internet` |
| Phrase qu'il dirait au téléphone | « J'ai des offres de 49 à 300 € par mois : comment savoir si elles couvrent vraiment la même chose ? » |
| Niveau initial | comprend qu'il faut des mises à jour et sauvegardes, mais ne distingue pas copie/restauration, alerte/astreinte ou réponse/rétablissement |
| Questions indispensables | que protège-t-on, quand, qui agit, avec quelle preuve, quel coût complet, que se passe-t-il en sortie ? |
| Objections | « mon hébergeur s'en charge », « mon site ne change pas », « Next.js n'a pas de plugins », « 24/7 est trop cher », « je peux le faire moi-même » |
| Craintes | surpayer, rester enfermé, perdre des données, découvrir une exclusion pendant la panne, acheter un service impossible à contrôler |
| Mots ordinaires | panne, sauvegarde, mise à jour, intervention, reprise, personne joignable, coût mensuel, accès, partir |
| Termes à traduire | RPO, RTO, SLA, GTI, GTR, observabilité, SBOM, LTS, rollback, TMA |
| Décision après lecture | choisir une couverture légère, interne, freelance avec relais, agence ou TMA après normalisation du périmètre |
| Action sans contact | remplir actifs, trois parcours, dernier point restauré, coût d'incident et lignes `ND` |
| Bon fit | site existant, plusieurs offres, restauration non prouvée, parcours commerciaux ou changement de prestataire |
| Mauvais fit | recherche d'un prix magique sans périmètre, garantie zéro panne, conseil juridique individualisé ou promesse de rang |
| Projet des 150 premiers mots | contrat d'ouverture ci-dessous |

### Contrat d'ouverture à délivrer en P2

> Vous recevez un forfait à 49 € par mois, un autre à 300 € et une proposition
> sur devis. Ces montants ne deviennent comparables que si les trois
> prestataires protègent les mêmes fonctions, aux mêmes horaires et avec les
> mêmes preuves. Une sauvegarde peut exister sans avoir jamais été restaurée ;
> une alerte « 24 h/24 » peut n'appeler aucun humain ; une réponse au ticket
> peut arriver bien avant le rétablissement du paiement. Le bon budget part
> donc de votre site : que se passe-t-il si le formulaire reste silencieux deux
> jours, si une boutique perd quatre heures de commandes ou si une application
> bloque ses utilisateurs ? Ce guide vous fera séparer maintenance logicielle,
> hébergement, surveillance, sécurité, contenu, évolutions et sortie. Vous
> pourrez ensuite calculer un coût total sur 12 et 36 mois, valoriser un
> incident avec vos propres données et exiger des preuves simples : mise à jour
> testée, parcours métier contrôlé, restauration chronométrée, délai de prise
> en charge et procédure de reprise. Il ne donnera ni tarif moyen inventé ni
> garantie de référencement.

Cette ouverture contient la réponse courte avant les acronymes : **on ne
compare pas des mensualités ; on compare les obligations, les preuves et le
risque qui reste au client**.

## 2. Snapshot, provenance et limites de la passe

### Base de travail au début de la P1

| Élément observé en lecture seule | Empreinte SHA-256 au début de la passe |
| --- | --- |
| Audit individuel | `784124319f62fe9ceb29c9a1e59f39a47d03448ceaacf59860e4312d3b433e1f` |
| Recherche reconstituée remplacée par ce dossier | `2b91d2fc67183f776e86eec33785d71bd72c0f420aad776851cdba18feb25364` |
| Page | `f008a25e40e75420dce0a89f731b406cfa38eeb4ceae3aed5b0c46a18ae7c4da` |
| Image sociale | `71f268d1a24fdef561983851fa8d36a5b88d1f4f88184e8d56f85f23f0cc20f4` |
| Catalogue `src/lib/guides.ts` | `8bbc597f2221e73d9cc28310fd74b65c29f0da5815523e6a2f399dfeaaa8f287` |

Le manifeste de gel doit recalculer les cinq empreintes. Si un fichier lu
change dans le worktree partagé, le manifeste final prévaut sur cette photo de
départ et l'écart doit être signalé. Ce dossier n'autorise aucune modification
de page, d'image, de catalogue ou d'audit.

### Ce qui a été rejoué

- lecture intégrale de la page, de son image sociale, de son entrée de
  catalogue et de son audit individuel ;
- lecture intégrale de la charte, du workflow et de la règle d'or ;
- benchmark commercial actuel en France, États-Unis, Royaume-Uni, Allemagne,
  Canada et Australie ;
- recherche primaire actuelle en France, États-Unis, Royaume-Uni, Allemagne
  et auprès d'éditeurs ou organismes internationaux ;
- construction indépendante des formules d'incident et de TCO ;
- séparation des faits, observations commerciales, hypothèses et inconnues.

### Ce qui n'a pas été fait

- aucune vérification juridique individualisée ;
- aucun devis réel normalisé avec un fournisseur ;
- aucun accès aux statistiques, contrats, sauvegardes ou incidents d'un
  lecteur réel ;
- aucune modification ou prévisualisation de la page ;
- aucune promesse de publication, déploiement, indexation ou positionnement.

## 3. Diagnostic de la page actuelle

### Forces à préserver

1. Elle refuse explicitement de transformer six prix publics en moyenne de
   marché.
2. Elle distingue préventif, correctif et évolutif.
3. Elle explique maintenance, hébergement et infogérance.
4. Elle présente WordPress, Next.js, plateforme hébergée et prise en charge
   interne sans dire qu'une technologie supprime l'entretien.
5. Elle traduit GTI, GTR et SLA en langage courant.
6. Elle qualifie son cas de fromagerie comme fictif.
7. Elle admet qu'une vitrine stable peut rationnellement choisir une
   couverture légère.
8. Elle demande accès, documentation et conditions de sortie.

### Défaut central

La page compare des **étiquettes de prix** mais pas des **obligations
identiques**. « Sauvegarde », « sécurité », « support », « monitoring » ou
« petites modifications » peuvent recouvrir des services radicalement
différents. Le guide doit donc faire passer le lecteur par quatre questions :

1. quelles fonctions doivent réellement continuer à fonctionner ;
2. combien de données et de temps peut-il perdre ;
3. qui détecte, intervient, contourne, rétablit et corrige ;
4. quelles preuves permettent de vérifier le service avant et après un
   incident.

### Défauts P1 de l'audit à traiter en P2

| ID | Défaut observé | Réponse préparée dans cette P1 | Preuve future attendue |
| --- | --- | --- | --- |
| P1-01 | offres non comparables | cahier à périmètre égal, section 10 | tableau publié sans cellule ambiguë |
| P1-02 | aucun TCO | modèle 12/36 mois, section 19 | calculs recalculés et testés dans la page |
| P1-03 | criticités mélangées | trois archétypes, section 11 | décisions distinctes vitrine/boutique/service critique |
| P1-04 | coût d'incident laissé vide | formule et sensibilités, section 18 | exemple complet + saisie du lecteur |
| P1-05 | sauvegarde et sécurité non opérationnelles | protocole de restauration, sections 13 et 15 | fréquence, rétention, RPO, RTO, exercice et preuve |
| P1-06 | SLA incomplet | matrice par sévérité, section 14 | horaires et cinq temps distincts |
| P1-07 | modèles de livraison non normalisés | comparaison interne/freelance/agence/TMA, section 19 | même périmètre et mêmes hypothèses |
| P1-08 | CTA sans livrable | livrable honnête, section 22 | contenu, délai, prix ou gratuité et exclusions explicites |

Les défauts ne sont pas « fermés » : la P1 ne remplace pas leur intégration
dans la page et son futur contre-audit.

## 4. Empreinte éditoriale et anti-cannibalisation

Le site possède plusieurs guides voisins. Leur page et leur entrée de
catalogue ont été observées en lecture seule ; chacun doit garder une décision
propre.

| Guide voisin | Réponse actuelle observée | Différence nécessaire pour ce guide | Décision lien/fusion |
| --- | --- | --- | --- |
| `cout-maintenance-application-metier` | décompose le budget d'une application, dette, données, correctif/préventif/évolutif et modes d'achat | rester sur le site web et comparer la continuité prouvée à 12/36 mois ; ne garder qu'un archétype « service critique » | lien ; aucune fusion |
| `sla-maintenance-applicative` | aide à écrire des engagements, délais, sévérités et responsabilités | limiter le SLA à ce qui rend deux mensualités comparables | lien vers le détail contractuel |
| `contrat-tma-application` | traite clauses, prix, sécurité, évolutions et sortie d'une TMA | montrer la TMA comme une option parmi quatre, sans refaire le contrat | lien ; aucune fusion |
| `tma-ou-regie` | arbitre l'organisation d'une équipe applicative | comparer ici le coût total d'un périmètre web figé | lien ; aucune fusion |
| `reprendre-maintenance-site-autre-agence` | séquence domaine, hébergement, sauvegarde, formulaires, accès et retrait de l'ancienne agence | faire de la reprise testée un critère de prix, pas un tutoriel de migration | lien vers l'exécution |
| `migrer-wordpress-vers-nextjs` | compare conserver, réparer, mieux héberger ou migrer WordPress | comparer seulement les surfaces d'entretien ; ne pas recommander une migration | lien ; aucune fusion |
| `nextjs-ou-wordpress` | choisit une technologie selon édition, fonctions, budget et entretien sur trois ans | démontrer qu'aucune stack n'efface les responsabilités de maintenance | lien ; aucune fusion |
| `prix-refonte-site-internet` | compare correction, refonte partielle et reconstruction avec coûts après mise en ligne | traiter la remise à niveau initiale comme poste de TCO, sans chiffrer une refonte | lien ; aucune fusion |
| `pourquoi-mon-site-est-lent` | diagnostique mesure, cause, correction ciblée ou refonte | surveiller la performance comme un parcours, sans refaire le diagnostic | lien ; aucune fusion |

**Empreinte exclusive :** ce guide répond à « combien coûte la continuité
réelle de mon site sur 12 et 36 mois, pour un périmètre vérifiable ? ». Il ne
doit devenir ni un modèle de contrat complet, ni un comparatif de
technologies, ni un guide de migration.

### Variations éditoriales qui justifient l'URL

1. **Ouverture :** partir de trois mensualités incomparables et de l'impact
   métier ; ne pas ouvrir par une migration, une clause ou un catalogue de
   technologies.
2. **Progression :** criticité → couches de responsabilité → preuve de
   restauration/parcours → coût d'incident → TCO 12/36 → mode de livraison.
   Aucun voisin observé ne porte cette chaîne complète comme décision unique.
3. **Format signature :** registre
   `promesse → preuve → risque restant → payeur`, calculateur d'incident et
   cahier à périmètre égal ; les voisins utilisent surtout diagnostic,
   clauses, comparaison technologique ou séquence de transfert.
4. **Conclusion :** autoriser couverture légère, interne ou report ; ne pas
   conclure automatiquement par migration, refonte, agence ou TMA.

La réponse utile ne recoupe donc pas environ 60 % d'un voisin unique. Les
notions communes sont nécessaires mais subordonnées à une autre décision et
reliées plutôt que dupliquées.

## 5. Demande réelle et matrice de gain d'information

Les requêtes de prix sont souvent des raccourcis. La décision utile demande
plus d'information que le mot-clé.

| Question décisive | Réponse française la plus utile observée | Apport international | Réponse actuelle de la page | Manque réel | Amélioration P2 prévue et testable |
| --- | --- | --- | --- | --- | --- |
| « Combien par mois ? » | les offres françaises datent leurs forfaits et certaines séparent plusieurs niveaux | les offres US/UK/DE différencient e-commerce, staging ou criticité | six mensualités hétérogènes | mêmes actifs, obligations et horizon absents | TCO 12/36 sur fiche identique, recalculé par test |
| « Que couvre la sauvegarde ? » | Pulsar rend visibles externalisation et cadence déclarée | NCSC, NIST et offres UK/DE conduisent vers restauration, RPO/RTO et repli | principe général | aucun point restauré ni exercice chronométré | protocole et fiche de preuve avec résultat |
| « Support 24/7 ? » | les pages françaises emploient SLA/GTI/GTR | GOV.UK, Google SRE et le SLA Vercel séparent mesure, fenêtre, exclusions et crédits | définitions sans sévérité complète | alerte, humain et retour mélangés | cinq temps + quatre sévérités + horaires |
| « WordPress ou Next.js coûte moins ? » | les offres françaises observées sont surtout WordPress | documentations WordPress, Next.js et Vercel montrent des surfaces différentes | comparaison qualitative | responsabilités, fins de support et données non normalisées | tableau par surface sans verdict universel |
| « Mon hébergeur s'en charge-t-il ? » | certains forfaits regroupent hébergement et maintenance | ISO 14764 et guides d'exploitation distinguent logiciel et opérations | distinction partielle | preuve et payeur par ligne absents | registre couches/responsable/livrable |
| « Puis-je le faire en interne ? » | le contenu français cite une charge indicative | les care plans et MSP rendent visibles équipe, relais et fenêtre | `2–4 h/mois` illustratives | coût chargé, relève, outillage et sortie | comparaison interne/freelance/agence/TMA à périmètre égal |
| « Le forfait cher est-il rentable ? » | les vendeurs décrivent surtout les risques | NIST/Google SRE structurent impact, réponse, reprise et apprentissage | champs d'impact laissés vides | aucune marge non reportable ni sensibilité | calcul 2/6/12 h, bas/central/pointe |
| « Les évolutions sont-elles incluses ? » | « petites modifications » apparaît dans les forfaits | les offres UK/AU séparent capacité, gros développement et heures non reportables | distinction de principe | unité, report, réception et dépassement absents | registre inclus/exclu/consommé/restant |
| « Puis-je partir ? » | guide public français sur droits et reprise fournit des questions utiles | NCSC et pratiques de résilience renforcent propriété et continuité | checklist de sortie | aucune reconstruction par tiers | test de build/restauration et registre de propriété |
| « Cela aide-t-il le SEO ? » | promesse commerciale fréquente mais non probante | Google documente effets techniques des erreurs HTTP, pas un rang | prudence générale | non-régression mesurable non cadrée | statuts/parcours/Search Console sans garantie de position |

## 6. Benchmark commercial mondial

Consultation : 25 juillet 2026. Ces pages appartiennent à des vendeurs ; elles
cartographient les angles de vente et les questions à poser. Elles ne
constituent ni un échantillon statistique ni une preuve de qualité effective.

### Repérage documenté

| Pays / langue | Formulations de recherche utilisées | Raison |
| --- | --- | --- |
| France / français | `prix maintenance site internet`, `contrat maintenance WordPress tarif`, `maintenance site web SLA` | intention principale et vocabulaire local |
| États-Unis / anglais | `website maintenance plans pricing`, `WordPress care plan ecommerce` | niveaux de service et forfaits « care » |
| Royaume-Uni / anglais | `website support care plan offsite restore`, `managed service provider tested restore SLA` | séparation support/évolution et cadre opérationnel |
| Allemagne / allemand + anglais | `Website Wartung Kosten Shop`, `Shop Wartung staging checkout SLA` | staging, criticité et tests de transaction |
| Canada / anglais | `website maintenance form email checkout monitoring` | fonctions silencieuses |
| Australie / anglais | `website maintenance plan content hours backup recovery` | limites d'heures et responsabilité de reprise |

Le repérage ne revendique aucun rang de SERP et aucune donnée Search Console
n'était disponible dans cette passe. La collecte s'est arrêtée lorsque de
nouvelles pages répétaient mises à jour, sauvegardes, surveillance, sécurité
et rapport, sans ajouter un nouveau type d'obligation, de preuve, d'objection
ou d'outil.

| Marché | Page observée | Angle utile | Ce qu'il faudrait demander | Limite |
| --- | --- | --- | --- | --- |
| France | [Pulsar](https://www.pulsar-agency.com/maintenance-site-web/contrat-maintenance-web) | préventif, sauvegarde externalisée, SLA/GTR | fréquence, rétention, départ du délai, rapport de restauration | offre WordPress auto-déclarée |
| États-Unis | [WP Buffs](https://wpbuffs.com/plans/) | niveaux standard/e-commerce/code sur mesure, staging à certains niveaux | correction après régression, restauration, humain réellement mobilisable | WordPress ; « 24/7 » n'est pas un GTR |
| Royaume-Uni | [VorinVista](https://vorinvista.com/services/support-care/) | maintenance séparée des petits changements et gros développements | quantité d'heures, report, dépassement et fenêtre de support | preuve indépendante absente |
| Allemagne | [Shop Wartung](https://www.shop-wartung.de/en/) | criticité, staging et tests de checkout | parcours testés, horodatage, responsabilité si échec | chiffres d'uptime et de réponse déclaratifs |
| Canada | [Metro Vancouver IT](https://metrovancouverit.ca/services/maintenance) | fonctions silencieuses : formulaires, e-mails, DNS, SSL, paiement | contrôle synthétique de chaque parcours rémunérateur | offre locale, pas standard canadien |
| Australie | [Peabody Digital](https://peabodydigital.com.au/website-maintenance/) | limites d'heures de contenu et récupération | expiration/report des heures, exclusions, délai de retour | offre WordPress, responsabilité à contractualiser |

Autres pages françaises relevées dans l'audit courant — Grain de Site, TYTAE,
Studio HTTP, Harsene et Palmsquare — confirment la variété des forfaits
publics. Leur juxtaposition reste impropre à une moyenne : niveau de service,
hébergement, licences, contenu et responsabilité diffèrent.

### Ce qui est saturé

Le discours mondial répète :

- mises à jour ;
- sauvegardes ;
- sécurité ;
- surveillance ;
- rapport mensuel ;
- petites modifications.

La valeur éditoriale ne consiste donc pas à ajouter une septième liste. Elle
consiste à opposer :

| Promesse générique | Preuve exigible | Risque restant |
| --- | --- | --- |
| sauvegarde | restauration complète chronométrée, fichiers **et** données | point de reprise trop ancien, service incohérent |
| monitoring 24/7 | alerte reliée à un propriétaire et à une fenêtre humaine | alerte non traitée ou bruit ignoré |
| réponse rapide | horodatage détection, accusé, intervention, contournement, retour | service toujours indisponible malgré le ticket « pris en compte » |
| uptime | mesure d'un parcours utilisateur et source de mesure | formulaire, paiement ou e-mail silencieusement cassé |
| mise à jour automatique | résultat, test métier, journal et repli | régression fonctionnelle ou données incompatibles |
| rollback | retour du code **et** plan de cohérence des données | base migrée ou commandes perdues |
| illimité | règle d'usage raisonnable, file, exclusions et priorité | demandes reportées ou requalifiées en projet |
| sécurité | actifs, vulnérabilités, correctifs, exceptions et preuve | composant oublié ou fin de support |
| réversibilité | restauration/build par un tiers avec comptes client | export inutilisable ou connaissance absente |

### Observations culturelles prudentes

Dans cet échantillon, la France met plus volontiers en avant les catégories de
maintenance et les acronymes contractuels ; les pages anglophones emploient
souvent « care plan » et mêlent contenu et technique ; l'offre allemande
observée rend davantage visibles staging et criticité. Ce sont des
observations de pages commerciales, pas des propriétés démontrées de pays.

## 7. Corpus primaire et traçabilité

Tous les liens ci-dessous ont été ouverts ou revérifiés le 25 juillet 2026.
« Confiance forte » signifie que la source est l'auteur du référentiel ou du
produit ; cela ne transforme pas une recommandation générale en obligation
contractuelle française.

### Légende épistémique

| Nature | Où elle apparaît | Règle |
| --- | --- | --- |
| fait sourcé | tableau ci-dessous | paraphrase reliée à l'auteur primaire, avec périmètre et fraîcheur |
| observation commerciale | benchmark de la section 6 | décrit une page de vendeur, pas l'efficacité du service ni un marché entier |
| déduction P1 | contradictions et cahier à périmètre égal | raisonnement attaquable à partir de plusieurs faits, jamais présenté comme norme |
| hypothèse éditoriale | scénarios, incident et TCO | montant fictif visible, formule reproductible, variable de bascule |
| recommandation Hagnéré Code | section 21 | position attribuée, contre-cas et conflit d'intérêts |

### Fiche de preuves décisives localisables

Le « repère exact » indique la section, l'article ou la mesure à rouvrir ; il
ne s'agit pas d'une citation verbatim. La conséquence lecteur est une
déduction éditoriale identifiée comme telle.

| Nature | Affirmation retenue | Source et repère exact | Périmètre / consultation | Limite | Conséquence lecteur |
| --- | --- | --- | --- | --- | --- |
| fait | la maintenance logicielle et les opérations ne sont pas le même périmètre | [ISO 14764:2022](https://www.iso.org/standard/80710.html), `Abstract`, paragraphes 1–2 : types de maintenance puis exclusion explicite de backup, recovery et administration | norme logicielle, consultée 2026-07-25 | résumé public ; un contrat web peut regrouper les deux | demander deux lignes et deux livrables même si un fournisseur les bundle |
| fait | copie, restauration, protection et objectifs métier forment une chaîne | [ANSSI MonServiceSécurisé](https://monservicesecurise.cyber.gouv.fr/referentiel-mesures), mesures `#0116`, `#0117`, `#0118` et `#0120` | résilience SI, consulté 2026-07-25 | cibles à adapter, pas SLA universel | exiger procédure testée, PDMA/RPO, DMIA/RTO et PRA cohérent |
| fait juridique limité | disponibilité, reprise et tests réguliers sont des mesures possibles proportionnées au risque | [CNIL — RGPD](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4), article 32 §1 b), c), d) | traitements de données personnelles, consulté 2026-07-25 | ne s'applique pas comme cahier des charges identique à tout site | faire qualifier données et risque avant de fixer le niveau |
| fait | le patching préventif ne s'arrête pas au téléchargement | [NIST SP 800-40 r4](https://csrc.nist.gov/pubs/sp/800/40/r4/final), `Abstract`, séquence identifier/prioriser/acquérir/installer/vérifier | gestion de patch d'entreprise US, consulté 2026-07-25 | aucune cadence web universelle | demander inventaire, décision de priorité et vérification après installation |
| fait | RPO et RTO sont deux objectifs différents | [NIST SP 800-34 Rev. 1](https://www.nist.gov/publications/contingency-planning-guide-federal-information-systems), publication source ; [RPO](https://csrc.nist.gov/glossary/term/recovery_point_objective) et [RTO](https://csrc.nist.gov/glossary/term/recovery_time_objective), entrées de glossaire reliées à cette publication | continuité, publication 2010, page mise à jour 2025, consultée 2026-07-25 | les valeurs viennent de l'analyse d'impact métier, pas du glossaire | chiffrer séparément données perdues et temps avant reprise |
| fait | le monitoring utile couvre métriques utilisateur, techniques et sécurité | [GOV.UK — monitoring](https://www.gov.uk/service-manual/technology/monitoring-the-status-of-your-service), sections `Metrics to monitor`, `Writing monitoring checks`, `Writing alerts`, `Reviewing...` | services publics UK, consulté 2026-07-25 | méthode à proportionner à une TPE | surveiller un parcours, attribuer l'alerte et n'appeler hors heures que si utile |
| fait | dépendances, maintenance planifiée, crédits et besoin hors heures changent la disponibilité | [GOV.UK — uptime](https://www.gov.uk/service-manual/technology/uptime-and-availability-keeping-your-service-online), sections `Issues that can affect uptime`, `Suppliers and contracts`, `Decide on out-of-hours support` | services publics UK, consulté 2026-07-25 | aucune clause française automatique | écrire source, exclusions, tiers et fenêtre humaine ; ne pas assimiler crédit et indemnisation |
| fait | un acheteur doit clarifier matrice de responsabilités, sauvegardes testées, logs et incident | [NCSC — choosing an MSP](https://www.ncsc.gov.uk/guidance/choosing-a-managed-service-provider-msp), sections `Clear contracting`, `Backups`, `Logs`, `Incident response` | PME britanniques, publié/revu 2025-11-24, consulté 2026-07-25 | recommandations UK, seuils et délais non transposés automatiquement | qualifier rôles, accès aux preuves, restauration et communication avant le prix |
| fait | un changement maîtrisé demande planification, test et solution de repli | [BSI IT-Grundschutz, édition anglaise 2021](https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Grundschutz/International/bsi_it_gs_comp_2021.pdf?__blob=publicationFile&v=4), module `OPS.1.1.3`; [changements de l'édition allemande 2023](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/IT-GS-Kompendium/FD_Aenderungen2023.pdf?__blob=publicationFile&v=3) | référentiel allemand ; traduction anglaise plus ancienne, révision 2023 signalée | pas obligation contractuelle française | refuser « auto-update » comme preuve suffisante d'un résultat |
| fait produit | WordPress recommande une sauvegarde avant update et documente le succès/échec des auto-updates | [WordPress — Updating](https://wordpress.org/documentation/article/updating-wordpress/), section `Before You Get Started`; [Auto-updates](https://wordpress.org/documentation/article/plugins-themes-auto-updates/), sections d'activation et notifications | produit WordPress, consulté 2026-07-25 | extension, thème et parcours restent propres au site | ajouter résultat, test métier et repli au contrat |
| fait produit | une reprise WordPress complète suppose fichiers et base | [WordPress — Backups](https://developer.wordpress.org/advanced-administration/security/backup/), sections `Backing Up Your WordPress Site` et `Database Backup Instructions` | produit WordPress, consulté 2026-07-25 | ne prouve pas qu'une copie précise est cohérente | tester la restauration des deux, pas seulement archiver un dossier |
| fait produit volatile | Next.js distingue Active LTS, Maintenance LTS et non supporté | [Next.js — Support policy](https://nextjs.org/support-policy), tableau `Supported Versions` | produit Next.js, vérifié 2026-07-25 | statut à rouvrir en P2 ; Node et paquets séparés | budgéter les montées de version, pas seulement les correctifs mensuels |
| fait produit | observabilité et rollback de déploiement ne prouvent pas la reprise des données | [Vercel — Observability](https://vercel.com/docs/observability), sections `Overview`/limites de plan ; [Rollback](https://vercel.com/docs/deployments/rollback-production-deployment), procédure de rollback de production | produit Vercel, consulté 2026-07-25 | la déduction sur les données vient de la séparation code/base | tester le parcours et prévoir une reprise de données distincte |
| fait | erreurs `5xx`/`429` persistantes modifient le comportement de crawl | [Google Search](https://developers.google.com/crawling/docs/troubleshooting/http-status-codes), section `Server errors (5xx, 429)` | crawl Google, mise à jour 2026-02-04 | ne prédit ni rang ni trafic | promettre seulement une surveillance de non-régression technique |
| fait | un suivi d'accessibilité doit nommer périmètre, méthode, fréquence et responsable | [W3C WAI](https://www.w3.org/WAI/eval/considerations), sections `Considerations for planning and managing evaluations` et suivi continu | méthode d'évaluation, consultée 2026-07-25 | ne détermine pas seul l'obligation juridique | revalider un échantillon après changement, avec humain et outils |
| déduction P1 | le meilleur différentiel éditorial est la preuve, pas une liste de tâches | synthèse ISO + ANSSI/CNIL + NIST + GOV.UK/NCSC + BSI + éditeurs ci-dessus | raisonnement de ce dossier, 2026-07-25 | attaquable ; à tester en P2 | construire le registre promesse/preuve/risque/payeur |

| Source primaire | Apport retenu | Périmètre et limite | Fraîcheur / confiance |
| --- | --- | --- | --- |
| [ISO/IEC/IEEE 14764:2022](https://www.iso.org/standard/80710.html) | processus de maintenance logicielle ; les opérations comme sauvegarde, reprise et administration sont hors de son périmètre | résumé public de norme ; ne décrit pas un contrat web complet | édition 2022, forte pour la frontière de vocabulaire |
| [ANSSI — référentiel MonServiceSécurisé](https://monservicesecurise.cyber.gouv.fr/referentiel-mesures) | formaliser sauvegarde/restauration, protéger les copies, définir interruption et perte admissibles | mesures de sécurité ; cibles à adapter au métier | consulté 2026-07-25, forte |
| [ANSSI — guide sauvegarde v1.1](https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf) | fréquence selon besoin, copie protégée et restauration comme processus opérationnel | guide général, pas cadence universelle | version 1.1 du 2025-11-27, forte |
| [CNIL — article 32 du RGPD](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4) | disponibilité, résilience, restauration en temps utile et tests réguliers proportionnés au risque | données personnelles ; interprétation juridique à valider | texte réglementaire, forte |
| [CNIL — sauvegarder](https://www.cnil.fr/fr/securite-sauvegarder) | copies régulières, testées, protégées, dont une séparée | sécurité des données personnelles | consulté 2026-07-25, forte |
| [CNIL — gérer la sous-traitance](https://www.cnil.fr/fr/securite-gerer-la-sous-traitance) | responsabilités, incidents, contrôle, restitution/destruction en fin de contrat | applicable quand des données personnelles sont sous-traitées | consulté 2026-07-25, forte |
| [CNIL — cookies et traceurs](https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/comment-mettre-mon-site-web-en-conformite) | changements de tiers, consentement, refus et retrait doivent rester maîtrisés | conformité à apprécier selon les traceurs réels | consulté 2026-07-25, forte |
| [NIST SP 800-40 Rev. 4](https://csrc.nist.gov/pubs/sp/800/40/r4/final) | le patching préventif comprend identifier, prioriser, acquérir, installer et vérifier | référentiel américain général ; aucune cadence web universelle | publié 2022, forte |
| [NIST SP 800-34 Rev. 1](https://www.nist.gov/publications/contingency-planning-guide-federal-information-systems), [RTO](https://csrc.nist.gov/glossary/term/recovery_time_objective) et [RPO](https://csrc.nist.gov/glossary/term/recovery_point_objective) | RTO = durée de reprise admissible ; RPO = point de données auquel revenir | objectifs décidés par l'analyse d'impact, pas promesses automatiques | publication source 2010, page mise à jour 2025 ; glossaire officiel |
| [NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final) | préparer, détecter, répondre, reprendre et améliorer la réponse aux incidents | gestion du risque cyber, pas seulement maintenance web | publié avril 2025, forte |
| [CISA — StopRansomware](https://www.cisa.gov/stopransomware/ransomware-guide) | copies hors ligne chiffrées, tests réguliers, code et infrastructure versionnés | recommandations américaines de résilience | consulté 2026-07-25, forte |
| [CISA — minimum SBOM 2025](https://www.cisa.gov/sites/default/files/2025-08/2025_CISA_SBOM_Minimum_Elements.pdf) | relations et identifiants de composants pour un inventaire exploitable | une SBOM n'atteste ni sécurité ni correctif | édition 2025, forte |
| [CISA — Known Exploited Vulnerabilities](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) | signal de priorité pour vulnérabilités effectivement exploitées | ne couvre pas toutes les vulnérabilités et ne fixe pas seul le risque client | catalogue vivant, forte mais volatile |
| [GOV.UK — monitoring](https://www.gov.uk/service-manual/technology/monitoring-the-status-of-your-service) | métriques utilisateur, techniques et sécurité ; alertes propriétaires ; manuel d'exploitation | service public britannique, méthode transférable | consulté 2026-07-25, forte |
| [GOV.UK — uptime et disponibilité](https://www.gov.uk/service-manual/technology/uptime-and-availability-keeping-your-service-online) | dépendances, exclusions, maintenance planifiée, besoins utilisateurs, page de statut | les crédits ne compensent pas nécessairement l'impact métier | consulté 2026-07-25, forte |
| [NCSC — choisir un MSP](https://www.ncsc.gov.uk/guidance/choosing-a-managed-service-provider-msp) | SLA détaillé, restaurations testées, responsabilités et sortie | recommandation britannique ; seuils à adapter et contractualiser | consulté 2026-07-25, forte |
| [NCSC — gestion des vulnérabilités](https://www.ncsc.gov.uk/collection/vulnerability-management/guidance) | actifs/propriétaires, politique de mise à jour par défaut, priorité et revue | guide britannique, pas obligation française universelle | version 2.1 revue 2026-05-01, forte |
| [NCSC — sauvegardes résistantes](https://www.ncsc.gov.uk/collection/ransomware-resistant-backups) | une sauvegarde n'est utile que si sa santé et sa restauration sont testées | ransomware, à intégrer à un PRA plus large | consulté 2026-07-25, forte |
| [BSI IT-Grundschutz 2021 en anglais](https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Grundschutz/International/bsi_it_gs_comp_2021.pdf?__blob=publicationFile&v=4) et [révision allemande 2023](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/IT-GS-Kompendium/FD_Aenderungen2023.pdf?__blob=publicationFile&v=3) | planifier, approuver, documenter, tester les changements et prévoir un repli | référentiel allemand de sécurité, pas clause imposée en France | traduction 2021 datée comme telle ; révision 2023 ouverte |
| [WordPress — updating](https://wordpress.org/documentation/article/updating-wordpress/) | sauvegarder avant mise à jour et contrôler les échecs possibles | documentation produit, pas garantie sur chaque extension | consulté 2026-07-25, forte et volatile |
| [WordPress — auto-updates](https://wordpress.org/documentation/article/plugins-themes-auto-updates/) | automatisation et notification de succès/échec ; besoin de retour arrière | ne garantit pas le parcours métier après mise à jour | consulté 2026-07-25, forte et volatile |
| [WordPress — backups](https://developer.wordpress.org/advanced-administration/security/backup/) | une reprise complète demande fichiers et base de données | ne remplace pas un exercice réel | consulté 2026-07-25, forte |
| [Next.js — support policy](https://nextjs.org/support-policy) | Active LTS, Maintenance LTS et versions non supportées | statut très volatil ; Node, paquets et hébergeur restent séparés | vérifié 2026-07-25, forte mais à rouvrir en P2 |
| [Next.js — self-hosting](https://nextjs.org/docs/app/guides/self-hosting) | proxy, cache, déploiements et exploitation restent à organiser | documentation produit, pas contrat de disponibilité | consulté 2026-07-25, forte et volatile |
| [Next.js — production checklist](https://nextjs.org/docs/app/guides/production-checklist) | build, sécurité, accessibilité, métadonnées, mesures terrain et dépendances | checklist de départ, pas service de maintenance | consulté 2026-07-25, forte et volatile |
| [Vercel — observability](https://vercel.com/docs/observability) | trafic, erreurs et performance ; limites et rétention selon plan | outil, pas garantie que le paiement ou l'e-mail fonctionne | consulté 2026-07-25, forte et volatile |
| [Vercel — rollback](https://vercel.com/docs/deployments/rollback-production-deployment) | revenir à un déploiement précédent | ne restaure pas automatiquement une base migrée ou des données perdues | consulté 2026-07-25, forte et volatile |
| [Vercel — SLA](https://vercel.com/legal/sla) | exemple concret de périmètre, mesure, exclusions et crédits | contrat Enterprise du fournisseur, pas SLA universel d'un site | consulté 2026-07-25, forte mais contractuelle |
| [Google SRE — objectifs de service](https://sre.google/sre-book/service-level-objectives/) | distinguer indicateur, objectif et accord ; mesurer ce que l'utilisateur vit | pratique de services à grande échelle, à simplifier pour une vitrine | ouvrage de référence, forte |
| [Google SRE — postmortems](https://sre.google/sre-book/postmortem-culture/) | impact, chronologie, causes et actions de prévention après incident significatif | méthode d'apprentissage, pas obligation universelle | ouvrage de référence, forte |
| [Google Search — codes HTTP](https://developers.google.com/crawling/docs/troubleshooting/http-status-codes) | des `5xx`/`429` persistants peuvent ralentir le crawl puis faire sortir des URL | aucune relation automatique avec une position ou un trafic | mis à jour 2026-02-04, forte |
| [W3C — évaluation et suivi](https://www.w3.org/WAI/eval/considerations) | responsable, fréquence, méthode, périmètre et revalidation des changements | méthode d'accessibilité ; champ juridique à vérifier séparément | consulté 2026-07-25, forte |
| [ICANN — renouvellement des domaines](https://www.icann.org/resources/pages/domain-name-renewal-expiration-faqs-2018-12-07-en) | propriétaire, registrar, date d'expiration, coordonnées et paiement doivent rester maîtrisés | règles et procédures varient selon registre/registrar | FAQ 2018, forte pour le principe |

### Événements imposant une revalidation

| Événement | Éléments à rouvrir |
| --- | --- |
| jour de rédaction P2 | prix commerciaux, offres, disponibilité des URL, politique LTS Next.js, documentation WordPress/Vercel |
| modification du droit ou d'une doctrine | CNIL, RGPD, cookies, sous-traitance et toute formulation juridique |
| nouveau produit ou nouveau fournisseur | comptes, export, SLA, localisation, sous-traitants, licences et sortie |
| changement d'architecture | inventaire, RPO/RTO, tests, coûts, compétence et procédure de repli |
| changement de modèle économique | marge non reportable, horaires, criticité, fréquence d'incident et scénario |
| incident significatif | chronologie, causes, actions, métriques et hypothèses de réserve |
| renouvellement annuel | prix, inflation, usage, support, fin de vie et conditions de sortie |

## 8. Contradictions, quarantaine et inconnues

### Contradictions structurantes

| Formule séduisante | Contradiction à rendre visible |
| --- | --- |
| « maintenance = sauvegarde et administration » | ISO 14764 sépare la maintenance logicielle des opérations ; le contrat web doit donc expliciter les deux |
| « auto-update = maintenance faite » | WordPress documente succès/échec et sauvegarde ; le parcours métier et le repli restent à prouver |
| « plateforme gérée = plus rien à maintenir » | l'infrastructure peut être déléguée, pas les comptes, domaines, données, dépendances, intégrations, contenu et conformité |
| « 99,99 % = site toujours disponible » | la mesure, la fenêtre, les exclusions et le parcours observé décident de ce que le pourcentage signifie |
| « 24/7 = intervention immédiate » | une sonde peut tourner sans astreinte humaine ; chaque maillon doit être nommé |
| « rollback = restauration » | revenir au code précédent peut laisser la base ou les données dans un état incompatible |
| « crédits SLA = risque couvert » | un crédit de service ne remplace pas nécessairement marge perdue, reprise ou communication |
| « plus cher = plus sûr » | le prix n'établit ni compétence, ni périmètre, ni résultat ; seules les obligations et preuves rapprochent les offres |

### Registre de quarantaine

Ces faits ne doivent pas être publiés comme conclusions sans nouvelle preuve :

| Élément quarantainé | Pourquoi | Traitement P2 |
| --- | --- | --- |
| toute « moyenne » française ou mondiale | aucun échantillon représentatif | ne pas publier |
| TCO `2 418 / 6 354 / 10 290`, `7 980 / 22 140 / 36 300` et `37 660 / 105 980 / 174 300 €` de l'audit initial | additions fausses ; l'artefact historique ne doit pas être réécrit | ne jamais reprendre ; recalculs exacts `2 728 / 7 684 / 12 640`, `9 888 / 28 464 / 47 040` et `38 260 / 109 780 / 181 300 €` documentés dans le contrecheck mondial |
| les six prix publics actuels comme comparatif | périmètres différents, prix volatils | conserver au plus comme illustrations datées avec champs normalisés |
| « 14 jours » comme cadence universelle de patch | recommandation/contextes britanniques, exploitation active parfois plus urgente | citer comme exemple, faire décider priorité et exception |
| « sauvegarde quotidienne = RPO 24 h » | succès, horaire, réplication et cohérence non prouvés | tester le point effectivement restaurable |
| « 99,9 % = 8 h 46 » comme SLA complet | arithmétique seulement, aucune méthode contractuelle | garder uniquement comme conversion mathématique |
| « WordPress est plus cher à maintenir » | dépend du site, extensions, équipe et hébergement | comparer les surfaces, pas un verdict |
| « Next.js 16/15 sont toujours les versions supportées » | politique vivante | rouvrir la source le jour de P2 |
| « une maintenance améliore le SEO » | non-régression technique possible, rang non garanti | promettre des contrôles, jamais une position |
| « petite modification » ou « illimité » | unités et limites absentes | exiger exemples, capacité, report et exclusions |
| témoignage ou statistique vendeur | biais commercial et preuve non indépendante | qualifier ou écarter |

### Inconnues du cas lecteur

| Inconnue | Pourquoi elle change le coût | Action minimale | Valeur tant qu'elle manque |
| --- | --- | --- | --- |
| technologie, versions et dépendances | détermine mises à niveau et compétences | inventaire exporté | `ND` |
| fonctions rémunératrices | détermine les parcours à contrôler | lister formulaire, paiement, compte, e-mail, tâches | `ND` |
| trafic, marge non reportable et saisonnalité | détermine l'impact d'un arrêt | données comptables/analytics rapprochées | `ND` |
| volume et criticité des données | détermine RPO, sauvegarde et reprise | atelier métier | `ND` |
| historique d'incidents | informe fréquence et temps de reprise | journal 12–24 mois | `ND` |
| contrats hébergeur et services tiers | définit dépendances, exclusions et crédits | collecter contrats et propriétaires de comptes | `ND` |
| capacité et relève internes | change le coût du « fait maison » | nommer titulaire et suppléant, valoriser temps chargé | `ND` |
| licences, domaines et certificats | crée renouvellements et risque d'arrêt | registre dates, payeurs, comptes | `ND` |
| exigences juridiques ou sectorielles | peut imposer contrôles et notifications | validation compétente | `ND` |
| état des sauvegardes | copie déclarée ne prouve pas reprise | exercice chronométré | `ND` |
| conditions de sortie | peut créer un coût final majeur | test de reprise par tiers | `ND` |

Si une inconnue obligatoire subsiste, le TCO complet est `ND`. On peut montrer
un sous-total documenté, jamais compléter la ligne par zéro.

## 9. Quatre familles et six lignes que le mot « maintenance » mélange

La future page doit faire apparaître quatre familles avant de parler de prix :
maintenance logicielle, opérations de service, entretien éditorial/assurance,
puis gouvernance/sortie. Le devis conserve les six lignes ci-dessous afin de
ne pas masquer préventif, correctif et évolutif dans un forfait unique.

| Couche | Exemples | Livrable observable | Ce qui n'est pas automatiquement inclus |
| --- | --- | --- | --- |
| maintenance logicielle préventive/adaptive | inventaire, correctifs, compatibilité runtime, dette urgente | journal version/test/repli | hébergement et surveillance |
| maintenance corrective | diagnostic, contournement, correction, test de non-régression | ticket avec chronologie et réception | évolution de produit |
| maintenance évolutive | nouvelle règle, champ, parcours ou intégration | estimation, critères d'acceptation, version livrée | capacité « illimitée » |
| opérations de service | hébergement, logs, alertes, sauvegarde, restauration, incident | tableau de santé, exercice et procédure | contenu et conformité |
| entretien éditorial et assurance | informations périmées, liens, consentement, accessibilité, indexation technique | échantillon contrôlé et anomalies | promesse de trafic ou de rang |
| gouvernance et sortie | comptes, licences, accès, documentation, transfert | registre de propriété et reprise testée | cession automatique de tous les droits |

Le contrat peut regrouper ces couches, mais son tableau de prix doit les
séparer. Une « évolution » doit préciser unité, capacité, priorité, report,
dépassement et critères d'acceptation. Sinon elle reste `ND`.

## 10. Cahier de comparaison à périmètre égal

Avant de comparer quatre prestataires, le lecteur doit leur envoyer la même
fiche.

| Bloc figé | Question à remplir | Preuve à demander |
| --- | --- | --- |
| actifs | production, staging, base, stockage, domaine, DNS, e-mail, services tiers | inventaire et propriétaire de chaque compte |
| parcours | accueil, formulaire, recherche, connexion, panier, paiement, e-mail, tâche planifiée | contrôle synthétique ou recette horodatée |
| horaires | quand le service et une personne doivent être disponibles | calendrier, jours fériés, fuseau et escalade |
| préventif | actifs suivis, cadence, priorité, approbation et repli | journal des versions et résultats |
| correctif | sévérités, détection, accusé, intervention, contournement, rétablissement | chronologie de ticket et rapport d'incident |
| évolutif | capacité incluse, unité, report, hors-forfait | relevé consommé/restant et réception |
| hébergement | ressources, limites, trafic, stockage, sauvegarde et facturation variable | facture et métriques d'usage |
| observabilité | disponibilité, erreurs, performances et parcours métier | tableau, rétention et propriétaire d'alerte |
| sauvegarde | périmètre, fréquence, rétention, séparation, chiffrement, RPO/RTO | rapport de restauration complet |
| sécurité | inventaire, avis, priorité, exceptions, fin de support | registre de vulnérabilités et décisions |
| licences | quantité, renouvellement, support, compte, transfert | registre et factures |
| contenu/conformité | responsable, fréquence, échantillon, consentement, accessibilité | rapport daté, aucune garantie de conformité globale |
| gouvernance | comité, rapport, décisions, dette et indicateurs | modèle de rapport rempli |
| sortie | comptes, code, données, documentation, délai, aide, coût | reprise/build/restauration par un tiers |

### Règle de qualification

Une offre qui ne couvre pas une ligne obligatoire n'est pas « moins chère » :
elle est **non qualifiée** jusqu'à l'ajout d'un complément chiffré. Une ligne
incluse sans preuve reste « déclarée », pas « démontrée ».

## 11. Trois archétypes de criticité

Les cibles ci-dessous sont des **hypothèses pédagogiques**, pas des normes.
Le lecteur doit les remplacer par ses pertes admissibles.

| Hypothèse | Vitrine stable | Boutique transactionnelle | Service web critique |
| --- | --- | --- | --- |
| fonction à protéger | consultation + formulaire + e-mail | catalogue + panier + paiement + commandes + e-mails | authentification + données + parcours opérationnel |
| impact dominant | leads silencieusement perdus, image | marge non reportable, reprise commandes, support | activité bloquée, données, engagements clients |
| fenêtre d'attention fictive | jours ouvrés | lundi–samedi 8 h–20 h | 24/7 si le métier le justifie |
| RPO de scénario | 24 h | 4 h | 15 min |
| RTO de scénario | 2 jours ouvrés | 8 h de service | 2 h |
| contrôle métier | formulaire + réception d'e-mail | recherche + panier + paiement test + e-mail | 3–5 parcours critiques et tâches de fond |
| restauration | exercice annuel | exercice trimestriel | exercice trimestriel + simulation de crise |
| préventif | lot planifié avec test | staging, tests transactionnels, fenêtre | pipeline, approbation, repli, dette et astreinte |
| couverture plausible | automatisation supervisée ou forfait léger | freelance avec relais, agence ou équipe interne structurée | équipe/TMA organisée ; forfait d'entrée insuffisant |
| contre-cas | forfait lourd souvent inutile | plateforme très gérée peut réduire l'exploitation | un service réellement non critique ne doit pas être surclassé |

Les nombres ne sont cohérents que si architecture, réplication, sauvegardes et
personnes rendent ces objectifs atteignables. Un RPO de 15 minutes inscrit
dans un tableau ne crée aucune copie exploitable.

## 12. Actif signature — registre de maintenance prouvée

La signature éditoriale proposée n'est pas un nouveau catalogue de forfaits.
C'est un registre « promesse → preuve → risque → payeur ».

| Promesse contractuelle | Preuve mensuelle ou événementielle | Risque restant à expliciter | Qui paie si elle manque ? |
| --- | --- | --- | --- |
| composants à jour | inventaire avant/après, avis traité, test et exception datée | zero-day, composant non inventorié, régression | selon responsabilité écrite ; sinon conflit |
| sauvegarde quotidienne | succès, âge du dernier point, stockage séparé | corruption silencieuse, donnée exclue | à définir |
| restauration en 8 h | exercice complet avec début/fin et anomalies | incident différent du test, dépendance tierce | à définir |
| disponibilité 99,9 % | source, parcours, fenêtre, exclusions, calcul | fonction secondaire cassée, impact non compensé | crédit éventuel ≠ perte métier |
| support 24/7 | planning d'astreinte, accusé humain, escalade | surcharge simultanée, tiers indisponible | à définir |
| sécurité surveillée | actifs, signaux, priorités, délais et exceptions | détection incomplète | responsabilité partagée |
| petites évolutions | unité, consommé/restant, réception | projet requalifié, heures expirées | client si hors périmètre explicite |
| sortie possible | export + build/restauration par tiers | connaissance tacite, droits incomplets | coût de transfert écrit |

### Fiche de preuve minimale

```text
Période :
Actifs couverts / actifs exclus :
Changements appliqués :
Tests techniques :
Parcours métier testés :
Échecs, repli et dette ouverte :
Dernier point restaurable :
Dernier exercice de restauration (début, fin, résultat) :
Incidents par sévérité et cinq délais :
Licences / domaines / certificats à renouveler :
Capacité évolutive consommée / restante :
Actions, propriétaire et échéance :
```

Un rapport rempli de coches vertes sans actifs exclus, anomalies ou décisions
ne prouve pas la maîtrise du service.

## 13. Sauvegarde, restauration, RPO et RTO

### La chaîne complète

1. **Définir** les données et fichiers nécessaires : base, médias, code,
   configuration, secrets, DNS, e-mails ou exports de services tiers.
2. **Choisir** la perte admissible de données (RPO) et la durée de reprise
   admissible (RTO) à partir de l'impact métier.
3. **Produire** des copies à une cadence compatible.
4. **Séparer et protéger** au moins une copie contre la compromission du compte
   principal, avec accès, chiffrement et rétention adaptés.
5. **Surveiller** succès, âge, taille anormale et corruption.
6. **Restaurer** dans un environnement contrôlé.
7. **Tester** données, fichiers, comptes, paiement, e-mails et tâches.
8. **Chronométrer et documenter** l'écart au RPO/RTO.
9. **Corriger** la procédure et rejouer le test.

### Matrice de réception

| Question | Réponse insuffisante | Preuve acceptable |
| --- | --- | --- |
| quoi est copié ? | « tout le site » | inventaire versionné des données, fichiers, configuration et exclusions |
| où ? | « dans le cloud » | compte/propriétaire, région si pertinente, séparation et contrôle d'accès |
| combien de temps ? | « plusieurs versions » | politique de rétention par type de copie |
| est-ce lisible ? | notification « succès » | contrôle d'intégrité + restauration |
| combien de données perdues ? | « sauvegarde quotidienne » | point effectivement restauré comparé à l'heure de l'incident |
| combien de temps pour repartir ? | « restauration rapide » | chronométrage complet jusqu'au parcours métier fonctionnel |
| qui décide ? | « le support » | titulaire, suppléant et escalade |
| qui paie l'exercice ? | non précisé | ligne incluse ou devisée |

Une copie et un service restaurable sont deux produits différents.

### Une restauration courante ne prouve pas une reprise propre

Un exercice après suppression ou régression vérifie une restauration courante.
Après compromission, remettre en ligne la même image, les mêmes secrets ou une
persistance malveillante peut réinfecter le service. Un scénario séparé doit
donc tester : isolement, point réputé sain, reconstruction dans un
environnement propre, correction de la porte d'entrée, rotation des accès,
analyse des comptes et tâches, validation des parcours, reconnexion graduelle
et décision explicite de fin d'incident.

[CISA StopRansomware](https://www.cisa.gov/stopransomware/ransomware-guide)
recommande notamment des copies hors ligne, des exercices, une reconstruction
propre et la prudence contre la réinfection. Ce périmètre de compromission est
plus exigeant qu'un test de sauvegarde ordinaire et doit être inclus, chiffré
ou marqué `ND`.

## 14. Observabilité, SLA et astreinte

### Les cinq temps à ne pas confondre

```text
détection → accusé humain → début d'intervention → contournement
          → rétablissement → correction définitive
```

Un SLA doit dire quel temps est mesuré, par quelle horloge, pendant quels
horaires, avec quelles pauses, dépendances et exclusions.

### Exemple fictif de matrice pour la boutique centrale

Ce tableau sert de modèle de rédaction, pas de recommandation universelle.

| Sévérité | Exemple | Fenêtre fictive | Détection | Accusé | Intervention | Contournement | Rétablissement | Suite |
| --- | --- | --- | ---: | ---: | ---: | ---: | ---: | --- |
| S1 | paiement ou site entier indisponible | lun.–sam. 8 h–20 h | 5 min | 30 min | 60 min | 4 h | 8 h de service | rapport sous 5 jours ouvrés |
| S2 | parcours majeur dégradé, solution manuelle | heures ouvrées | 15 min ou signalement | 4 h | 1 jour ouvré | selon cas | 2 jours ouvrés | cause/action dans le rapport |
| S3 | défaut non bloquant | heures ouvrées | signalement | 1 jour ouvré | planifié | non requis | prochain lot accepté | suivi de dette |
| S4 | demande d'évolution | gouvernance | demande | 2 jours ouvrés | estimation | non requis | date acceptée | réception séparée |

### Disponibilité

À titre purement arithmétique, sur des fenêtres continues :

| Engagement | 30 jours | 365 jours |
| --- | ---: | ---: |
| `99,9 %` | `43 min 12 s` | `8 h 45 min 36 s` |
| `99,99 %` | `4 min 19,2 s` | `52 min 33,6 s` |

Ces valeurs ne constituent pas un SLA. Il faut encore définir :

- la source interne ou externe ;
- le parcours mesuré, pas seulement une réponse HTTP ;
- le mois civil, la période glissante ou l'année, puis la fenêtre et le fuseau ;
- la maintenance planifiée ;
- les tiers et autres exclusions ;
- l'arrondi ;
- le délai et la procédure de réclamation ;
- les crédits ou indemnités, leur plafond et leur caractère éventuellement
  exclusif ;
- surtout, le plan de rétablissement.

La disponibilité, la correction et la durabilité sont trois qualités
différentes. Un ping HTTP vert ne prouve ni paiement, ni réception d'e-mail, ni
capacité à restaurer le service la semaine suivante.

### Quand l'astreinte gagne — et quand elle perd

Elle gagne si un incident hors heures produit un impact non reportable
supérieur au coût de la couverture et si une personne peut réellement agir.
Elle perd pour une vitrine sans enjeu nocturne ou lorsqu'aucun tiers n'est
mobilisable : payer des alertes sans capacité d'intervention crée bruit et
fatigue, pas continuité.

## 15. Sécurité, dépendances, licences et changements

### Registre minimal d'un composant

| Champ | Exemple de contenu, jamais prérempli comme fait |
| --- | --- |
| composant / service | cœur CMS, extension, paquet, runtime, API, thème |
| version déployée | valeur observée |
| propriétaire | personne responsable |
| source d'avis | éditeur, registre, CISA KEV, autre |
| niveau et exploitation connue | faits datés |
| support / fin de vie | date et politique source |
| licence / renouvellement | compte, coût, échéance |
| données ou privilèges | accès et conséquence |
| décision | corriger, compenser, accepter temporairement, retirer |
| test / repli | parcours, résultat, artefact de retour |
| date de revue | prochaine échéance |

Une SBOM ou un inventaire est une carte, pas un certificat de sécurité.

### Processus de changement prouvable

```text
identifier → qualifier l'impact → prioriser → préparer → sauvegarder
→ tester sur environnement représentatif → approuver → déployer
→ vérifier technique + parcours métier → revenir en arrière si besoin
→ documenter la dette et la prochaine action
```

Les correctifs urgents peuvent raccourcir la chaîne, jamais supprimer la
responsabilité, l'observation et le repli.

### Périmètre de sécurité honnête

Le forfait doit dire s'il couvre :

- mises à jour du code, CMS, runtime, système et services tiers ;
- comptes, MFA et départ d'un collaborateur ;
- scans, journaux et alertes ;
- vulnérabilités connues et exceptions ;
- secrets, certificats, domaine et DNS ;
- incident, preuve, notification et sous-traitants ;
- tests après changement.

Le mot « sécurisé » sans périmètre, fréquence, preuve et exclusion doit être
retiré.

## 16. Contenu, consentement, accessibilité et SEO technique

Un site peut être techniquement disponible tout en étant commercialement
faux ou inutilisable. Le plan d'entretien peut donc prévoir :

| Surface | Contrôle utile | Limite |
| --- | --- | --- |
| offres, prix, équipe, horaires | propriétaire de contenu + date de revue | le mainteneur ne connaît pas seul la vérité métier |
| formulaire et e-mail | soumission synthétique + réception | éviter d'utiliser des données personnelles réelles |
| liens et redirections | erreurs et destinations critiques | un crawler automatique ne juge pas la pertinence |
| consentement et tags | refus, acceptation, retrait, liste de tiers | validation juridique selon le cas |
| accessibilité | échantillon clavier/lecteur + tests automatisés et humains après changement | aucun outil ne prouve seul la conformité globale |
| indexation technique | statut HTTP, robots, canonical, sitemap, Search Console si autorisée | aucune garantie de position ou de trafic |
| performance | données terrain et parcours clés | un score de laboratoire isolé n'est pas l'expérience entière |

Une maintenance peut réduire des régressions mesurables. Elle ne peut
promettre d'être « numéro 1 sur Google ».

## 17. WordPress, stack moderne et plateforme gérée

La bonne question n'est pas « quelle technologie n'a pas besoin de
maintenance ? », mais « où se trouvent les responsabilités ? ».

| Surface | WordPress | Next.js / stack moderne | Plateforme gérée |
| --- | --- | --- | --- |
| cœur/runtime | cœur CMS + PHP + serveur selon hébergement | Next.js + Node + build + runtime | runtime souvent géré, règles du fournisseur |
| extensions/dépendances | thèmes et extensions, parfois auto-update | paquets npm, outils de build et services | apps, thèmes, extensions et intégrations |
| contenu | base et médias, rôles éditeurs | CMS, dépôt ou service tiers | back-office fournisseur |
| déploiement | admin, staging ou procédure hébergeur | pipeline, variables, cache et rollback | mécanisme de publication de la plateforme |
| données | base + fichiers nécessaires à une reprise complète | base(s), stockage et migrations séparés du code | export et API selon capacités |
| surveillance | HTTP, PHP, base, tâches, formulaires | logs, fonctions, API, cache, tâches | disponibilité fournisseur + parcours propre |
| sécurité | comptes, extensions, serveur, fichiers | code, dépendances, secrets, plateforme | compte, permissions, apps et contenu |
| support | éditeurs multiples, agence/hébergeur | développeur, plateforme, services tiers | support fournisseur selon plan |
| sortie | fichiers, base, licences, domaine | dépôt, build, données, secrets, domaine | qualité et limites d'export |

### Conclusions permises

- WordPress automatise certains correctifs mais une mise à jour réussie ne
  prouve pas le panier, le formulaire ou la restauration.
- Une stack moderne peut réduire une surface et en créer une autre :
  dépendances, pipeline, runtime, cache, observabilité et services tiers.
- Une plateforme gérée déplace une partie de l'exploitation ; elle ne possède
  pas nécessairement le domaine, la connaissance métier ou une sortie
  restaurable.
- Le statut LTS d'un framework est une donnée volatile à rouvrir en P2.

### Conclusions interdites

- « Next.js ne demande pas de maintenance » ;
- « WordPress coûte toujours plus cher » ;
- « l'hébergeur sauvegarde donc le client peut restaurer » ;
- « la plateforme garantit le SEO ».

## 18. Calculateur de coût d'incident

### Formule

```text
Impact incident
= durée indisponible × marge contributive non reportable par heure
+ remboursements, concessions ou pénalités réellement probables
+ reprise externe, forensics et reconstruction
+ communication ou notification
+ heures internes × coût chargé × part réellement réaffectée
- compensations effectivement récupérables
```

Ne pas remplacer « marge contributive non reportable » par chiffre d'affaires
brut. Une commande simplement décalée n'est pas automatiquement perdue. Le
temps salarié déjà payé n'est un coût incrémental que s'il provoque heures
supplémentaires ou capacité réellement détournée ; sinon il reste un coût de
capacité à présenter séparément.

Chaque coût n'apparaît qu'une fois : une heure corrective déjà incluse dans le
forfait n'est pas rajoutée comme reprise externe ; une compensation n'est
soustraite que si elle est applicable et récupérable ; une réserve déjà
intégrée au TCO n'est pas ajoutée une seconde fois après le total.

### Exemple fictif reproductible

Boutique centrale, sans donnée client :

| Entrée | Hypothèse centrale |
| --- | ---: |
| durée | 6 h |
| marge contributive non reportable | 180 €/h |
| reprise externe | 900 € |
| communication / concessions | 250 € |
| temps interne | 2 personnes × 4 h × 35 €/h |
| part réaffectée | 50 % |
| compensation | aucune prévue par le contrat fictif ; dans un cas réel non lu, `ND` et total bloqué |

```text
6 × 180 + 900 + 250 + (2 × 4 × 35 × 50 %)
= 1 080 + 900 + 250 + 140
= 2 370 €
```

Ce résultat est un exercice, pas un coût moyen d'incident.

### Sensibilité à la durée et à la marge

Les autres hypothèses restent `900 + 250 + 140 = 1 290 €`.

| Durée | 180 €/h non reportables | 750 €/h en période de pointe |
| ---: | ---: | ---: |
| 2 h | 1 650 € | 2 790 € |
| 6 h | 2 370 € | 5 790 € |
| 12 h | 3 450 € | 10 290 € |

### Seuil de décision

Si une couverture renforcée coûte `3 600 €` de plus par an :

```text
gain attendu nécessaire
= baisse démontrable de fréquence × impact
+ baisse démontrable de durée × impact horaire
+ reprise/temps interne évités
≥ 3 600 €
```

Sans historique ou estimation défendable de la réduction de risque, le seuil
reste `ND`. La maintenance ne doit pas être créditée de tous les incidents
évités par hypothèse.

La comparaison économique complète s'écrit :

```text
coût d'une option
= TCO certain de l'option
+ fréquence attendue sous cette option × impact résiduel moyen sous cette option
```

Comparer une situation de référence et une couverture renforcée exige deux
fréquences et deux impacts résiduels. Sans ces données, le gain attendu et le
ROI restent `ND`.

## 19. TCO 12/36 mois à périmètre égal

### Formule générale

Pour `H` mois et `Y = H / 12` :

```text
TCO(H)
= remise à niveau et transition initiale
+ H × abonnement récurrent
+ Y × hébergement, domaine, observabilité et licences
+ Y × temps interne chargé et relais
+ Y × évolutions planifiées
+ incidents observés ou réserve explicitement modélisée
+ coût de sortie et de reprise
+ toute taxe ou variation applicable
```

Une évolution obligatoire à coût inconnu rend le total `ND`. Inflation,
remises, TVA, variation d'usage et incidents ne peuvent être omis sans être
nommés « exclus de ce sous-total ».

Règle de calcul : **chaque coût a une origine unique**. Si la ligne
« incidents » est déjà modélisée dans le TCO, elle ne doit pas être ajoutée de
nouveau dans un total « avec risque ». Si le forfait inclut une capacité
corrective, seule la part hors capacité ou l'impact métier résiduel peut
réapparaître. Un coût de fin de support ou de migration obligatoire est inclus
ou rend le total `ND`.

### Trois scénarios de criticité reproductibles

Ces trois scénarios répondent à une question différente de la comparaison des
modes de livraison qui suit : ils montrent comment le **périmètre** change le
budget. Toutes les entrées sont des hypothèses éditoriales fictives, pas des
tarifs de marché.

| Entrée annuelle ou ponctuelle | Simple — vitrine | Central — boutique | Exigeant — service critique |
| --- | ---: | ---: | ---: |
| remise à niveau initiale | 800 € | 2 500 € | 12 000 € |
| maintenance / organisation annuelle | 12 × 120 € = 1 440 € | 12 × 1 400 € = 16 800 € | 12 × 5 000 € = 60 000 € |
| hébergement, domaine, outils et licences/an | 300 + 240 = 540 € | 3 000 € | 18 000 € |
| coordination interne/an | 12 h × 45 € = 540 € | 12 h × 50 € = 600 € | 24 j × 700 € = 16 800 € |
| évolutions planifiées/an | 3 j × 500 € = 1 500 € | 10 j × 650 € = 6 500 € | 30 j × 800 € = 24 000 € |
| réserve incident/an, pure hypothèse | 1 incident de 600 € tous les 2 ans = 300 € | 1 incident central/an = 2 370 € | 1 incident de 20 000 € tous les 2 ans = 10 000 € |
| sortie/reprise à l'horizon | 500 € | 1 800 € | 15 000 € |
| annuel récurrent | 4 320 € | 29 270 € | 128 800 € |
| TCO fictif 12 mois | `800 + 4 320 + 500 = 5 620 €` | `2 500 + 29 270 + 1 800 = 33 570 €` | `12 000 + 128 800 + 15 000 = 155 800 €` |
| TCO fictif 36 mois | `800 + 3 × 4 320 + 500 = 14 260 €` | `2 500 + 3 × 29 270 + 1 800 = 92 110 €` | `12 000 + 3 × 128 800 + 15 000 = 413 400 €` |

**Inclus :** périmètre de l'archétype correspondant, temps interne, évolution,
réserve d'incident explicitement arbitraire et sortie. **Exclus :** TVA,
inflation, refonte, migration de données, conseil juridique, pénalité inconnue
et hausse d'usage. Toute exclusion obligatoire dans un cas réel réintègre le
calcul ou le rend `ND`.

**Variables de bascule :**

- la vitrine quitte le scénario simple si un formulaire silencieux produit une
  perte forte, si plusieurs intégrations apparaissent ou si une restauration
  en deux jours n'est plus acceptable ;
- la boutique quitte le scénario central si son pic, sa couverture horaire,
  ses données ou ses engagements imposent un RPO/RTO plus strict ;
- le service exigeant redescend si le métier accepte un arrêt, une perte de
  données et une fenêtre ouvrée plus larges ;
- dans les trois cas, jours d'évolution et fréquence d'incident sont les
  hypothèses les plus incertaines : elles doivent être remplacées en premier.

### Périmètre central figé

Boutique fictive :

- production + staging ;
- quatre parcours synthétiques : recherche, panier, paiement de test, e-mail ;
- fenêtre lundi–samedi 8 h–20 h ;
- production d'un point de sauvegarde cohérent au moins toutes les 4 h,
  contrôlé, protégé et conservé selon une politique écrite ;
- exercice de restauration complet trimestriel ;
- RPO fictif 4 h, RTO fictif 8 h de service ;
- inventaire des dépendances/licences ;
- patching testé et procédure de repli ;
- matrice d'incident S1–S4 et rapport ;
- `10 jours/an` d'évolution acceptée ;
- registre de comptes et exercice de sortie.

### Obligations communes opposables aux quatre modes

| Obligation commune | Capacité ou résultat inclus dans l'hypothèse | Ligne de coût |
| --- | --- | --- |
| fenêtre humaine | lundi–samedi 8 h–20 h ; rien n'est promis hors fenêtre | exploitation/forfait |
| surveillance | quatre parcours toutes les 5 min, alerte avec propriétaire et conservation 30 jours | outils communs + exploitation |
| S1/S2 | matrice de la section 14 : accusé, intervention, contournement et rétablissement ; jusqu'à 4 incidents S1/S2 et 48 h correctives/an | exploitation/forfait |
| S3 | diagnostic, planification et réception dans la capacité corrective restante | exploitation/forfait |
| sauvegarde | point cohérent au moins toutes les 4 h, contrôle de succès, séparation et rétention écrite | outils communs + exploitation |
| restauration | un exercice complet par trimestre, RPO/RTO mesurés et anomalies corrigées | exploitation/forfait |
| préventif/sécurité | inventaire, veille, lot mensuel testé, traitement exceptionnel priorisé, repli et registre d'exceptions | exploitation/forfait |
| dépendances/licences | propriétaire, version, support, renouvellement et sortie revus mensuellement | exploitation/forfait |
| gouvernance | rapport mensuel de preuve + revue trimestrielle | exploitation/forfait + temps client |
| évolutif | 10 jours acceptés/an, critères de réception ; aucun report implicite | évolutions communes |
| hébergement/domaine/outils | ressources du cas central, hors hausse d'usage | poste commun 3 000 €/an |
| sortie | registre à jour + un build/restauration par tiers à l'horizon | sortie/reprise |

Les quatre coûts sont construits **comme si chaque mode acceptait exactement
ces obligations, cette fenêtre, ces délais, cette capacité et ces preuves**.
La ligne « exploitation/forfait » achète un résultat/capacité identique, même
si son organisation et son prix fictif diffèrent. Le temps client peut varier :
c'est un coût réel du mode, visible dans la ligne coordination.

Au-delà de quatre S1/S2, de 48 h correctives, de 10 jours d'évolution ou de
l'usage technique figé, le supplément est `ND` jusqu'à réception d'un prix. Un
mode incapable d'accepter une obligation n'est pas moins cher : il est non
qualifié. Le coût économique des incidents reste séparé du prix
d'intervention.

### Hypothèses fictives détaillées

Les taux servent uniquement à montrer la mécanique. Ils ne décrivent ni le
marché ni les tarifs Hagnéré Code.

| Poste | Interne structuré | Freelance + relais nommé | Agence | TMA organisée |
| --- | ---: | ---: | ---: | ---: |
| transition initiale | 2 500 € | 1 800 € | 2 500 € | 4 500 € |
| exploitation/forfait annuel | 24 j × 500 € = 12 000 € | 12 × 900 € = 10 800 € | 12 × 1 400 € = 16 800 € | 12 × 2 400 € = 28 800 € |
| relais/coordination annuel | suppléance 4 000 € | relais 2 400 € + 12 h × 50 € = 600 € | 6 h × 50 € = 300 € | 12 h × 50 € = 600 € |
| hébergement/domaine/outils annuels, communs | 3 000 € | 3 000 € | 3 000 € | 3 000 € |
| évolutions annuelles, communes | 10 j × 650 € = 6 500 € | 6 500 € | 6 500 € | 6 500 € |
| sortie/reprise à l'horizon | 2 500 € | 1 500 € | 1 800 € | 3 000 € |

### Recalcul

| Mode | Formule annuelle récurrente | Sous-total 12 mois, sans incident | Sous-total 36 mois, sans incident |
| --- | ---: | ---: | ---: |
| interne structuré | `12 000 + 4 000 + 3 000 + 6 500 = 25 500` | `2 500 + 25 500 + 2 500 = 30 500 €` | `2 500 + 3 × 25 500 + 2 500 = 81 500 €` |
| freelance + relais | `10 800 + 2 400 + 600 + 3 000 + 6 500 = 23 300` | `1 800 + 23 300 + 1 500 = 26 600 €` | `1 800 + 3 × 23 300 + 1 500 = 73 200 €` |
| agence | `16 800 + 300 + 3 000 + 6 500 = 26 600` | `2 500 + 26 600 + 1 800 = 30 900 €` | `2 500 + 3 × 26 600 + 1 800 = 84 100 €` |
| TMA organisée | `28 800 + 600 + 3 000 + 6 500 = 38 900` | `4 500 + 38 900 + 3 000 = 46 400 €` | `4 500 + 3 × 38 900 + 3 000 = 124 200 €` |

Dans **ces hypothèses seulement**, le freelance avec relais est le moins
coûteux. Cela ne constitue pas un verdict : sa capacité, sa disponibilité et
le complément de risque doivent être identiques pour rester qualifiés.

### Ajout transparent des incidents

Si l'on force exactement **un** incident central de `2 370 €` sur chaque
horizon, sans prétendre qu'un mode réduit mieux le risque :

| Mode | TCO illustratif 12 mois | TCO illustratif 36 mois |
| --- | ---: | ---: |
| interne structuré | 32 870 € | 83 870 € |
| freelance + relais | 28 970 € | 75 570 € |
| agence | 33 270 € | 86 470 € |
| TMA organisée | 48 770 € | 126 570 € |

Cette hypothèse d'un incident unique sur 12 **et** 36 mois est volontairement
artificielle. Avec un incident central par an, ajouter `2 370 €` à 12 mois et
`7 110 €` à 36 mois. Avec une fréquence inconnue, inscrire `ND`.

### Sensibilités mécaniques

| Variation d'entrée | Effet 12 mois | Effet 36 mois |
| --- | ---: | ---: |
| +100 €/mois de forfait | +1 200 € | +3 600 € |
| +1 h interne/mois à 50 € | +600 € | +1 800 € |
| +2 jours d'évolution/an à 650 € | +1 300 € | +3 900 € |
| +1 incident central sur l'horizon | +2 370 € | +2 370 € |
| +1 incident central par an | +2 370 € | +7 110 € |
| coût de sortie non fourni | total `ND` | total `ND` |

### Lecture professionnelle par modèle

| Mode | Cas où il gagne | Cas où il perd | Condition non négociable |
| --- | --- | --- | --- |
| interne | connaissance métier, charge régulière, équipe et relève réelles | compétence isolée, interruptions et coût caché | temps chargé, outillage, documentation, suppléance |
| freelance | site maîtrisable, interlocuteur direct, relais contractualisé | dépendance à une personne ou besoin 24/7 | second intervenant, accès client, procédure d'escalade |
| agence | plusieurs compétences et coordination souhaitées | petit site stable ou faible charge | équipe nommée, preuve de capacité, exclusions |
| TMA | flux soutenu, criticité, gouvernance et engagements structurés | vitrine simple, file et gouvernance disproportionnées | unités, capacité, priorité, indicateurs et sortie |

## 20. Reprise et sortie testées

### Registre de propriété

| Actif | Propriétaire attendu | Test de sortie |
| --- | --- | --- |
| domaine et DNS | compte au nom du client, délégation limitée | modifier un enregistrement puis révoquer l'accès |
| hébergement / plateforme | client ou transfert contractuel clair | accès facture, logs, export et arrêt contrôlé |
| dépôt et historique | organisation contrôlée par le client | clone, build et déploiement par tiers |
| base et stockage | droits/export documentés | restauration cohérente sur environnement séparé |
| sauvegardes | accès indépendant du seul prestataire | téléchargement + restauration chronométrée |
| certificats, secrets, variables | coffre et rotation documentés | rotation sans perte de service |
| licences et extensions | compte, droit d'usage et transfert clarifiés | renouvellement ou remplacement |
| données d'analytics/SEO | accès propriétaire | export et retrait du prestataire |
| documentation | version datée | exécution d'une procédure sans auteur |
| connaissance | titulaire + suppléant | session de reprise et liste d'écarts |

### Critère de réussite

La réversibilité n'est pas « un ZIP a été envoyé ». Elle est réussie quand un
tiers autorisé peut reconstruire ou restaurer le service, vérifier les
parcours clés, identifier les secrets manquants et chiffrer les écarts dans le
délai accepté.

Le test doit aussi fonctionner sans coopération paisible du mainteneur :
prestataire injoignable, collaborateur clé absent, compte compromis, licence
perdue ou outil indisponible. Les preuves minimales sont des comptes au nom du
client, un second administrateur, des privilèges limités, une copie hors du
compte du mainteneur, une documentation accessible séparément, une procédure
de révocation/rotation des secrets et une reprise par un tiers autorisé. Une
sortie seulement décrite dans le contrat reste déclarée, pas démontrée.

Le guide peut s'inspirer du
[guide français sur achats informatiques et propriété intellectuelle](https://www.economie.gouv.fr/apie/le-guide-achats-informatiques-et-propriete-intellectuelle-est-en-ligne)
pour les questions de droits et de reprise, sans présenter ses clauses de
commande publique comme obligations automatiques d'un contrat privé.

## 21. Position professionnelle, contre-cas et conflit d'intérêts

### Position

1. Commencer par le rôle du site et le coût d'un échec, pas par sa technologie.
2. Refuser une comparaison de prix tant que le périmètre obligatoire diffère.
3. Acheter d'abord la preuve de restauration et des parcours métier, puis la
   cadence de rapport.
4. Séparer maintenance, opérations, contenu et évolutions dans le prix.
5. Réserver l'astreinte et la gouvernance lourde aux besoins qui les
   justifient.
6. Garder une option « couverture légère / ponctuelle » pour une vitrine
   stable.
7. Ne pas vendre une TMA pour réduire une inquiétude qui n'est ni mesurée ni
   actionnable.

**Recommandation pour le cas fréquent :** pour une TPE/PME dont le site est
utile mais pas critique 24/7, choisir un propriétaire unique, une
automatisation supervisée, des tests des parcours rémunérateurs, une
restauration périodique prouvée et une réponse humaine en heures utiles. Si
l'entreprise ne possède ni compétence ni suppléant, un freelance avec relais
contractualisé ou une petite agence qualifiée est généralement plus cohérent
qu'une TMA lourde. Ce verdict bascule si la couverture, le volume d'évolutions,
les données ou le coût horaire d'un arrêt imposent une organisation de service
plus forte.

### Signal de révision et solution déconseillée

Réexaminer le choix dès qu'un des événements suivants arrive : nouveau
paiement ou espace client, changement de fenêtre métier, deux incidents S1 sur
douze mois, restauration ratée, version en fin de support, dépendance critique
sans propriétaire, croissance d'usage qui modifie la facture ou départ de la
seule personne compétente.

Hagnéré Code doit déconseiller, même s'il pourrait le vendre, un forfait
« premium 24/7 » à une vitrine sans impact hors heures, ainsi qu'une TMA dont
les unités, capacités, parcours, délais et sortie ne sont pas opposables.

### Contre-cas explicites

- Une vitrine stable, sans transaction ni données sensibles au-delà d'un
  formulaire simple, peut préférer sauvegarde testée annuelle, mises à jour
  supervisées et intervention ponctuelle.
- Une plateforme gérée avec peu d'intégrations peut rendre inutile une
  infogérance séparée ; comptes, domaine, contenu et sortie restent à tenir.
- Une équipe interne compétente, documentée et doublée peut coûter moins et
  réagir mieux qu'un prestataire externe.
- Un freelance avec relais peut battre une agence sur un périmètre contenu.
- Une TMA devient rationnelle si volume, criticité, heures et gouvernance sont
  réels ; son vocabulaire seul n'ajoute aucune valeur.
- Une refonte peut coûter moins qu'une succession de correctifs si la version
  n'est plus supportée et le repli impossible, mais ce verdict appartient au
  guide de refonte.

### Conflit d'intérêts

Hagnéré Code vend du développement et peut bénéficier d'un diagnostic, d'une
maintenance ou d'une reprise. La page P2 doit donc :

- montrer les cas où ne pas souscrire ;
- rendre les hypothèses et formules modifiables ;
- distinguer conseil général et offre Hagnéré Code ;
- ne pas attribuer à son service un bénéfice non démontré ;
- présenter prix, délai, livrable et exclusions du CTA avant collecte ;
- éviter toute garantie de conformité, sécurité, disponibilité ou SEO.

## 22. Action autonome et CTA honnête

### Action faisable sans prestataire en 45–60 minutes

1. Écrire les trois fonctions dont la panne fait réellement mal.
2. Trouver les propriétaires du domaine, de l'hébergement, du dépôt, de la
   base et des sauvegardes.
3. Envoyer un formulaire et vérifier l'e-mail reçu.
4. Demander la date du dernier point **restauré**, pas seulement sauvegardé.
5. Relever le dernier incident et ses cinq temps.
6. Remplir le coût d'incident avec marge non reportable et temps réaffecté.
7. Marquer `ND` chaque licence, heure, sortie ou dépendance inconnue.
8. Envoyer la fiche de périmètre identique aux candidats.

### Bon et mauvais fit d'un diagnostic

| Bon fit | Mauvais fit |
| --- | --- |
| plusieurs offres impossibles à comparer | recherche d'un « prix moyen » immédiat sans fournir aucun périmètre |
| aucune restauration récente | demande de garantie zéro panne |
| boutique ou service avec parcours critiques | site personnel sans enjeu et budget nul |
| changement de prestataire | recherche d'un avis juridique personnalisé gratuit |
| comptes et responsabilités dispersés | attente d'une promesse de rang Google |

### Livrable CTA proposé pour P2

Nom prudent : **revue de périmètre de maintenance**.

Le CTA ne peut être intégré qu'après validation commerciale de :

- prix ou gratuité ;
- délai réel ;
- données demandées ;
- traitement de ces données ;
- personne qui répond ;
- limite de responsabilité.

Livrable éditorial proposé :

1. matrice des actifs et parcours couverts ;
2. trois risques prioritaires ;
3. comparaison 12/36 mois avec `ND` conservés ;
4. niveau de sauvegarde/restauration et SLA à décider ;
5. exclusions et première action ;
6. option explicite « ne pas souscrire / rester ponctuel ».

Sans ces éléments validés, P2 doit conserver un CTA générique et ne pas
inventer délai, prix ou ressource téléchargeable.

## 23. Mesures, échec et critères d'arrêt

### Mesures utiles après P2

| Objet | Mesure | Ce qu'elle ne prouve pas |
| --- | --- | --- |
| pédagogie | un dirigeant distingue réponse, intervention et retour | efficacité réelle d'un prestataire |
| décision | il peut remplir au moins un scénario sans aide | exactitude des inconnues |
| comparaison | aucune offre ne passe avec ligne obligatoire vide | qualité du fournisseur |
| calcul | résultats 12/36 reproduits par test indépendant | prix de marché |
| preuve | chaque promesse renvoie à un artefact | absence de risque |
| conversion | demande qualifiée avec périmètre | rang Google |
| accessibilité | navigation clavier, titres, tableaux et liens contrôlés | conformité juridique exhaustive |
| SEO technique | route, métadonnées, canonical, données structurées, statuts | indexation ou classement |

### Mesure après décision

| Indicateur | Mesure de départ | Fréquence fictive à adapter | Responsable à nommer | Signal d'action |
| --- | --- | --- | --- | --- |
| succès des parcours métier | 30 jours d'observation ou `ND` | quotidien/hebdomadaire selon criticité, revue mensuelle | propriétaire de service | échec non expliqué ou tendance dégradée |
| point réellement restaurable | date et âge du dernier exercice | annuel, trimestriel ou plus selon impact | responsable reprise | RPO/RTO manqué |
| incidents S1/S2 et cinq délais | journal des 12 derniers mois ou `ND` | revue mensuelle, tendance trimestrielle | responsable incident | deux S1, délai répété ou cause récurrente |
| vulnérabilités et fins de support | inventaire initial | revue continue + comité mensuel | propriétaire technique | exploitation connue, fin de support, exception échue |
| dette et capacité évolutive | stock et consommation initiale | mensuel/trimestriel | sponsor métier | demandes reportées ou capacité saturée |
| contenu/consentement/accessibilité | échantillon initial | après changement + revue périodique | propriétaire contenu | information fausse ou régression |
| coût réel | TCO prévu et lignes `ND` | trimestriel et renouvellement | décideur budget | écart > seuil accepté ou poste inconnu devenu matériel |

### Échec éditorial

La P2 échoue si :

- elle ouvre encore par une fourchette non comparable ;
- un coût obligatoire est implicitement nul ;
- « 24/7 », « illimité », « sécurisé » ou « sauvegardé » reste sans preuve ;
- WordPress ou Next.js reçoit un verdict universel ;
- l'incident utilise du chiffre d'affaires brut comme perte certaine ;
- le tableau TCO mélange horizons, TVA, incidents ou périmètres ;
- le CTA promet un livrable non validé ;
- la page affirme publication, indexation ou place numéro 1.

### Critères d'arrêt

- arrêter le calcul si un poste obligatoire est `ND` et afficher le
  sous-total seulement ;
- arrêter la comparaison si une option ne couvre pas la même fonction ;
- arrêter la recommandation « critique » si personne ne peut agir pendant la
  fenêtre annoncée ;
- arrêter l'affirmation juridique sans validation compétente ;
- arrêter la publication si calcul, source, rendu ou route n'est pas vérifié.

## 24. Plan P2 annoté

Ce plan ne vaut pas exécution.

| Section provisoire | Question résolue | Preuve ou exemple | Conséquence pour le lecteur | Format |
| --- | --- | --- | --- | --- |
| ouverture + criticité | quel niveau mérite mon site ? | trois archétypes et pertes admissibles | écarte une couverture disproportionnée | réponse courte + arbre |
| couches de maintenance | qu'achète-t-on réellement ? | frontière ISO/opérations et registre | rend les devis normalisables | schéma + tableau |
| maintenance prouvée | comment réceptionner le service ? | fiche promesse/preuve/risque/payeur | remplace les mots par des artefacts | actif signature |
| restauration et incident | quel risque reste au client ? | exercice RPO/RTO + calcul 2/6/12 h | fixe le bon niveau de reprise | protocole + calculateur |
| périmètre égal | les offres sont-elles qualifiées ? | cahier identique et règle de disqualification | empêche le faux moins cher | matrice |
| TCO 12/36 | quel coût total ? | trois criticités + quatre modes centraux | montre hypothèses et bascules | tableaux calculés |
| SLA/observabilité | quand et comment agit-on ? | cinq temps, quatre sévérités, parcours | distingue alerte, support et retour | timeline + matrice |
| technologies | la stack supprime-t-elle l'entretien ? | surfaces WordPress/Next.js/plateforme | attribue chaque responsabilité | tableau |
| sécurité/contenu/sortie | qu'est-ce qui demeure hors forfait ? | inventaire, échantillon, reprise tierce | chiffre ou marque `ND` | registres |
| conclusion/CTA | que faire maintenant ? | action autonome + bon/mauvais fit | permet aussi de ne rien acheter | synthèse + CTA honnête |

### H1 et ouverture

- Promesse : comparer le coût réel à 12/36 mois.
- Réponse immédiate : même périmètre, preuves, risque résiduel.
- À ne pas faire : remettre la fourchette `29–499 €` comme réponse principale.

### Section 1 — qualifier le site

- mini-arbre vitrine / boutique / service critique ;
- trois fonctions et deux pertes admissibles ;
- contre-cas couverture légère.

### Section 2 — décomposer « maintenance »

- six couches de la section 9 ;
- frontière hébergeur/mainteneur/client ;
- exemples inclus/exclus, sans catalogue interminable.

### Section 3 — actif signature

- registre promesse/preuve/risque/payeur ;
- fiche de preuve remplissable ;
- aucun faux téléchargement tant qu'un fichier n'est pas produit et testé.

### Section 4 — restauration et incident

- mini-protocole RPO/RTO ;
- distinguer restauration courante et reprise propre après compromission ;
- exemple boutique calculé ;
- sensibilité 2/6/12 h ;
- distinction marge, chiffre d'affaires, trésorerie et capacité.

### Section 5 — comparer les devis

- cahier de périmètre égal ;
- disqualifier une ligne obligatoire vide ;
- six prix commerciaux relégués en exemples datés ou retirés si non
  normalisables.

### Section 6 — TCO 12/36

- modèle interne/freelance+relais/agence/TMA ;
- hypothèses visibles et modifiables ;
- règle « chaque coût une seule fois » entre forfait, réserve et incident ;
- recalcul automatisé + vérification indépendante.

### Section 7 — SLA et observabilité

- cinq temps, sévérités, horaires, période de mesure, réclamation et plafond ;
- parcours métier plutôt que simple ping ;
- astreinte seulement si besoin.

### Section 8 — WordPress / Next.js / plateforme

- tableau de surfaces de responsabilité ;
- statut des versions revérifié le jour de la rédaction ;
- aucune technologie « zéro maintenance ».

### Section 9 — sécurité, contenu et sortie

- inventaire, dépendances, licences, renouvellements ;
- consentement/accessibilité/indexation comme contrôles sans garanties ;
- reprise testée par tiers, y compris mainteneur indisponible ou compromis.

### Conclusion et CTA

- synthèse en trois choix raisonnables ;
- action autonome avant formulaire ;
- livrable CTA uniquement si validé ;
- lien vers guides voisins sans cannibalisation.

### Notes d'intégration

- tables larges : prévoir cartes ou défilement explicite sur mobile ;
- ne pas afficher d'acronyme avant sa traduction ;
- dates visibles à côté des informations volatiles ;
- liens primaires près de l'affirmation ;
- pages commerciales marquées « fournisseur » ;
- exemples marqués « fictifs » dans leur titre, pas dans une note lointaine ;
- ne jamais reprendre les TCO faux de l'audit initial, explicitement
  quarantainés par le contrecheck mondial ;
- vérifier impression, clair/sombre, clavier, zoom, 320/390 px et image sociale
  en P4 ;
- recalculer le temps de lecture, les métadonnées et les données structurées.

## 25. Contre-audit à froid et porte P1

### Revue indépendante

Contre-auditeur distinct : agent
`contre_audit_p1_maintenance`, en lecture seule.

Snapshot de revalidation de contenu :
`bd0cb8379878a82d42a26ed41df19a5a66a2ff163396667bf31739b97221b314`.
Les changements postérieurs à ce hash sont les corrections demandées puis les
libellés administratifs de gel ; le manifeste externe fige le fichier final.

| Défaut froid | Correction | Revalidation |
| --- | --- | --- |
| P1-CA-01 — preuves non localisables | fiche avec article/mesure/section, nature, limite et conséquence | levé |
| P1-CA-02 — déduplication insuffisante | réponses actuelles, différences, lien/fusion, 4 variations ; slug corrigé en `contrat-tma-application` | levé |
| P1-CA-03 — RPO/périmètre central non opposables | point cohérent ≤4 h, exercice trimestriel, fenêtre, capacité, SLA, parcours, sécurité, preuves, dépassements `ND` | levé |
| WC-P1-01 — anciens TCO faux | ancien jeu explicitement quarantainé ; neuf totaux recalculés ; modèle principal conservé séparément | levé |
| WC-P1-02 — période et recours SLA incomplets | exemple 30/365 jours, période, réclamation, plafond et durabilité ajoutés | levé |
| WC-P1-03 — double comptage TCO/incident | origine unique de chaque coût et comparaison du risque résiduel ajoutées | levé |
| WC-P1-04 — restauration courante ≠ reprise propre | scénario d'isolement, reconstruction propre, rotation et reconnexion ajouté | levé |
| WC-P1-05 — mainteneur indisponible/compromis | comptes client, second admin, copie séparée, révocation et reprise tierce ajoutés | levé |
| WC-P1-06 — fraîcheur ANSSI/BSI/NIST | ANSSI v1.1 2025, révision BSI 2023 et source NIST SP 800-34r1 ajoutées | levé |

Verdict indépendant après relecture : **PASS — P0 ouverts : 0 ; P1 ouverts :
0 après corrections**. Le contrecheck mondial
`docs/research/cout-maintenance-site-internet-world-countercheck-2026-07-25.md`
a d'abord invalidé le PASS trop indulgent, puis les six P1 et deux P2 ont été
intégrés ci-dessus. Les
arithmétiques disponibilité, incident, trois scénarios, quatre modes, ajouts
d'incident et sensibilités ont été recalculées.

### Grille de porte

| Critère | État gelé |
| --- | --- |
| brief complet, décision unique et ouverture | validé |
| URL distincte et anti-cannibalisation | validées |
| recherche actuelle et datée | validée au 2026-07-25 |
| benchmark France + US/UK + Allemagne + Canada/Australie | rejoué, limites et saturation explicites |
| matrice de gain d'information | remplie avec améliorations testables |
| fiche de preuves | localisable, qualifiée et fraîcheur indiquée |
| faits, déductions, hypothèses et recommandations | séparés |
| contradictions, quarantaine et inconnues | documentées |
| trois scénarios simple/central/exigeant | calculés à 12/36 mois |
| comparaison à périmètre égal | obligations et capacités opposables |
| préventif/correctif/évolutif et opérations | séparés |
| hébergement/observabilité/sécurité/dépendances/licences/contenu | couverts |
| SLA/astreinte/reprise/sortie | opérationnalisés |
| WordPress/stack moderne/plateforme | comparés sans verdict universel |
| interne/freelance/agence/TMA | comparés sur mêmes hypothèses |
| coût d'incident et sensibilités | formule et calculs reproduits |
| inconnues non nulles | règle `ND` appliquée |
| actif signature | registre de maintenance prouvée |
| position, contre-cas, signal et conflit | explicites |
| mesure après décision, échec et arrêt | préparés |
| action autonome, bon/mauvais fit, CTA | préparés |
| plan P2 annoté | présent |
| contre-audit P1 à froid + mondial | PASS après corrections — 0 P0, 0 P1, 0 P2 |
| manifeste | R1 conservé comme snapshot historique ; R2 à geler avec le contrecheck et le registre partagé courant avant P2 |
| statut | **Passe 1 = Terminée — porte validée** |

### Rapport canonique P1

```text
PASSE 1 TERMINÉE
Slug : cout-maintenance-site-internet
Lecteur et phrase réelle : dirigeant TPE/PME ; « J'ai des offres de 49 à
300 € par mois : comment savoir si elles couvrent vraiment la même chose ? »
Décision : choisir un niveau proportionné puis comparer obligations, preuves
et TCO à périmètre égal.
Angle et forme dominante : registre promesse/preuve/risque/payeur +
calculateur d'incident + TCO 12/36.
Pages proches et différence : applications, SLA, TMA, reprise, stacks et
refonte restent des décisions voisines reliées ; ici, continuité et coût
total vérifiable d'un site.
Sources décisives : ISO 14764, ANSSI, CNIL, NIST, GOV.UK/NCSC, BSI,
WordPress, Next.js/Vercel, Google et W3C.
Incertitudes exclues : moyenne de marché, coûts inconnus, rang Google,
efficacité non prouvée, droit individualisé.
Action autonome et CTA possible : fiche actifs/parcours/restauration/incident ;
revue de périmètre seulement si livrable, délai, prix et limites sont validés.
Plan : section 24.
Snapshot : manifeste P1 externe à cinq fichiers.
```

Cette porte valide **la recherche P1 seulement**. La page, son image sociale,
le catalogue, la rédaction P2, le rendu, le déploiement, le sitemap, Search
Console, l'indexation, le classement et la conversion restent non modifiés ou
non vérifiés.
