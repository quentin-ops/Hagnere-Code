# Dossier de recherche — `creer-un-site-avec-ia`

> **Statut au 25 juillet 2026 : reconstitution documentaire, passe 1 à
> reprendre.** Ce dossier décrit la page et les défauts constatés par l'audit
> du 24 juillet 2026. Il ne vaut ni essai des outils, ni mise à jour de leurs
> conditions, ni validation de recherche. Le benchmark international est
> **hérité de l'audit et non rejoué**. Aucun défaut n'est fermé par la seule
> création de ce fichier.

## Journal des quatre passes

Propriétaire éditorial unique : **à nommer avant reprise**.

| Passe                        | État        | Date       | Base examinée                     | Blocage réel                                              |
| ---------------------------- | ----------- | ---------- | --------------------------------- | --------------------------------------------------------- |
| 1. Recherche                 | À reprendre | 2026-07-25 | Page + audit hérité du 24 juillet | Produits, conditions, données, prix et tests non rouverts |
| 2. Rédaction et intégration  | À reprendre | 2026-07-25 | Page existante                    | Brief commun, TCO et règles de décision à reconstruire    |
| 3. Contre-audit indépendant  | Bloquée     | 2026-07-25 | Audit du brouillon seulement      | Aucun snapshot corrigé ni test produits à vérifier        |
| 4. Plume humaine et contrôle | Bloquée     | 2026-07-25 | Non exécutée                      | P3 non validée, test lecteur et QA finale absents         |

Les états suivent
[`workflow-maitre-guides-4-passes.md`](../workflow-maitre-guides-4-passes.md).
Ils ne ferment aucun incident de l'audit.

## 1. Périmètre documentaire et cible dirigeant

| Élément              | Observation                                                                                                                 |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Page relue           | `src/app/guides/creer-un-site-avec-ia/page.tsx`                                                                             |
| Empreinte de la page | `07a28db01733…` ; identique au snapshot audité                                                                              |
| Audit utilisé        | `docs/audits/giga-audit-2026-07-24/guides/creer-un-site-avec-ia.md`                                                         |
| Règles utilisées     | charte de qualité et workflow maître en quatre passes                                                                       |
| Lecteur              | dirigeant, commerçant ou indépendant qui envisage de créer son site avec une IA                                             |
| Situation            | il compare un abonnement à quelques euros, son propre temps et une prestation professionnelle                               |
| Décision             | garder l'existant, utiliser un générateur, prototyper, se faire accompagner, choisir une plateforme spécialisée ou reporter |

**Phrase réelle à tester, non issue d'une interview :** « Est-ce que je peux
faire seul un site professionnel avec l'IA, combien cela va vraiment me coûter
avec mon temps et les retouches, et à partir de quand payer un professionnel
devient plus raisonnable ? »

**Réponse courte attendue :** un générateur peut suffire pour une présence
simple ou un test. Il ne décide pas de l'offre, ne garantit ni les contenus,
ni les droits, ni les formulaires, ni la sécurité, ni la maintenance, ni la
sortie. La décision doit comparer le même résultat sur 12, 36 et 60 mois.

**Promesse décisionnelle :** faire gagner le générateur quand il est réellement
suffisant, l'accompagnement quand il apporte une valeur ou réduit un risque
mesurable, et le maintien de l'existant quand reconstruire ne sert à rien.

**Promesses interdites :** « meilleur outil IA » universel, prix promotionnel
présenté comme coût complet, code possédé donc système réversible, gain SEO
automatique, productivité d'une étude appliquée à tout un projet.

## 2. Couverture réellement observée

La page actuelle :

1. commence par la question humaine « faire seul ou déléguer » ;
2. distingue générateur hébergé, outil de génération de code/application et
   assistant de développeur ;
3. inclut garder/améliorer l'existant et la plateforme spécialisée ;
4. cite Hostinger, Wix et Lovable avec plusieurs réserves ;
5. oppose des études favorables et défavorables sur la productivité ;
6. traite Google, spam, qualité de contenu et SEO sans promettre de position ;
7. aborde coût sur trois ans, maintenance, sécurité, sortie, données et droits ;
8. conclut par profil et propose un CTA proportionné.

### Forces humaines à conserver

- L'IA n'est ni diabolisée ni vendue comme remplacement universel.
- Une solution peu chère peut explicitement être la bonne.
- La conservation du site existant est une vraie option.
- Hagnéré Code déclare vendre du sur-mesure.
- Les biais de GitHub, METR, Veracode et Ahrefs sont signalés.
- La position Google est présentée avec prudence.

### Promesse non délivrée

- La section « coût réel sur 3 ans » n'achète pas le même résultat dans chaque
  option.
- 2,99 €/mois ou 10–30 €/mois sont visuellement opposés à 6 900 € sans
  égaliser pages, textes, formulaire, mesure, accessibilité, retouches,
  maintenance et sortie.
- Le temps du dirigeant n'est pas chiffré.
- Aucun test propre n'exécute le même brief sur plusieurs outils.
- « Prototype » devient une étiquette trop générale pour Lovable, Bolt ou v0.
- Les données envoyées, secrets, DPA, région, entraînement et sous-traitants
  ne produisent pas de règle opérationnelle.
- Le CTA ne précise ni livrable, ni délai, ni prix, ni exemple de résultat.

## 3. Demande, concurrence et angle supérieur

L'audit rapporte une recherche France, États-Unis, Royaume-Uni, Australie et
DACH. Il observe trois familles concurrentes : comparatifs affiliés de
générateurs, tutoriels « site en quelques minutes » et contenus d'agences qui
insistent sur les risques.

Ces observations sont **historiques et non revérifiées dans ce dossier**. Une
nouvelle P1 doit rouvrir les requêtes, les pages, les conditions produit, les
dates et les biais. L'angle réellement différenciant n'est pas un catalogue de
marques ; c'est :

- un brief identique exécuté et documenté ;
- un TCO à fonctions égales ;
- la valeur du temps du dirigeant ;
- le test de formulaire, accessibilité, sécurité et performance ;
- un exercice de sortie : comptes, domaine, code, données, variables et build ;
- des cas où chacune des options gagne.

| Question                      | Couverture actuelle                  | Preuve supérieure à produire                                     |
| ----------------------------- | ------------------------------------ | ---------------------------------------------------------------- |
| Que peut produire l'outil ?   | catégories et exemples               | même brief, captures, erreurs, temps et version                  |
| Est-ce professionnel ?        | limites générales                    | critères d'acceptation visibles, pas adjectif                    |
| Combien cela coûte ?          | abonnements et prix d'accompagnement | TCO 12/36/60, temps, tiers, maintenance et sortie                |
| Puis-je partir ?              | export/code évoqués                  | export, build, domaine, base et restauration testés              |
| Puis-je envoyer mes données ? | alerte générale                      | feu tricolore des données + conditions effectives                |
| Quand déléguer ?              | verdict par profil                   | seuil de temps, valeur, risque ou fonction qui renverse le choix |

## 4. Preuves et sources réellement présentes

Présence vérifiée dans le code de la page ; contenu/fraîcheur non rouverts ici :

| Source présente                            | Usage actuel                              | Limite                                                                 |
| ------------------------------------------ | ----------------------------------------- | ---------------------------------------------------------------------- |
| Hostinger AI Website Builder               | offre et prix promotionnel                | pays, durée, paiement initial et renouvellement volatils               |
| Wix pricing + documentation d'export       | prix variable et limite de sortie         | certains actifs restent exportables ; pas équivalent à tout le système |
| Lovable pricing                            | abonnement/crédits/code annoncé           | conditions, crédits et capacités évoluent                              |
| Google Search Central 2023 + spam policies | contenu IA et spam                        | guidance à mettre à jour et dater                                      |
| GitHub Copilot research                    | tâche mesurée 55 % plus rapide            | étude éditeur, tâche contrôlée, pas site complet                       |
| METR 2025                                  | développeurs expérimentés 19 % plus lents | contexte et outils particuliers                                        |
| Veracode 2025                              | défauts observés dans 45 % des tests      | rapport vendeur, pas taux de sites vulnérables                         |
| Ahrefs sur contenu IA                      | observation de corpus                     | corrélation et méthode, pas règle de qualité                           |
| Légifrance, CPI L131-3                     | cession de droits                         | ne prouve pas la propriété de toutes les briques                       |

Les sources CNIL, accessibilité/DGCCRF et les conditions détaillées DPA/région
proposées par l'audit ne sont pas dans la page actuelle. Elles sont à
rechercher et qualifier, pas à présenter comme déjà intégrées.

## 5. Chiffres, hypothèses et calculs

### Chiffres visibles dans la page ou confirmés par l'audit

- Hostinger à partir de 2,99 €/mois : promotion observée sous engagement
  long, avec renouvellement plus élevé ; offre volatile.
- Générateurs génériques 10–30 €/mois : ordre de grandeur, pas TCO.
- Création accompagnée à partir de 6 900 € : prix Hagnéré, pas équivalent
  fonctionnel démontré aux abonnements.
- GitHub : 55 % plus rapide sur une tâche contrôlée.
- METR : 19 % plus lent dans son protocole.
- Veracode : défauts dans 45 % de tests étudiés.

Ces pourcentages ne doivent jamais être additionnés, moyennés ou convertis en
réduction de devis.

### Scénario de l'audit, non intégré et non revalidé

Cas commun proposé : cinq pages B2B, formulaire, mesure consentie, contenus,
images vérifiées, CRM simple, mobile, contrôle de base et dossier de sortie.

| Horizon | Générateur | Accompagnement |
| ------- | ---------: | -------------: |
| 12 mois |    4 205 € |        9 060 € |
| 36 mois |    6 965 € |       12 030 € |
| 60 mois |   11 225 € |       15 500 € |

Hypothèses : temps à 45 €/h ; générateur 25 €/mois, 45 h initiales, 2 h/mois,
800 € de contrôle, 1 500 € de sortie ; accompagnement 6 900 €, 90 €/mois,
15 h initiales, 0,75 h/mois et 500 € de sortie.

L'audit calcule un point d'égalité autour de 5,13 h/mois d'entretien du côté
générateur. Ces chiffres sont illustratifs, non publiés et doivent être
recalculés par une autre personne avant toute intégration.

## 6. Comparaison et position professionnelle

Périmètre commun obligatoire : mêmes pages, contenus, formulaire, domaine,
email, analytics/consentement, accessibilité, sécurité, maintenance, support,
propriété des comptes et sortie.

Options à comparer :

1. garder/améliorer l'existant ;
2. générateur hébergé ;
3. code généré avec contrôle/accompagnement ;
4. plateforme spécialisée ;
5. création professionnelle ;
6. report.

Position à assumer : un générateur est rationnel pour une présence simple si
le dirigeant accepte le temps, les limites et la dépendance. L'accompagnement
devient rationnel quand une fonction, une exigence de preuve, un coût de temps
ou un risque mesuré dépasse l'écart. Le framework ou le mot « IA » ne décide
jamais seul.

Contre-cas : une entreprise sans offre claire ni contenu validé ne doit pas
commencer par payer plus de développement ; elle doit d'abord clarifier le
message ou tester une page simple.

## 7. Défauts ouverts hérités

### P0

L'audit constate **0 P0**. Cette absence n'est pas une validation juridique,
sécurité ou produit.

### P1 — neuf défauts

| ID    | Défaut hérité                                                                   |
| ----- | ------------------------------------------------------------------------------- |
| P1-01 | aucun dossier P1 propre ni benchmark maintenable                                |
| P1-02 | « coût réel sur 3 ans » incomplet                                               |
| P1-03 | options comparées sans fonctions ni service égaux                               |
| P1-04 | temps interne, valeur, payback et sensibilité absents                           |
| P1-05 | aucun test propre et reproductible des outils                                   |
| P1-06 | données, secrets, DPA, région, entraînement et sous-traitants non opérationnels |
| P1-07 | code, projet et sortie non testés comme un système                              |
| P1-08 | outils de code présentés surtout comme prototypes                               |
| P1-09 | CTA sans livrable, délai, prix ni exemple                                       |

La création de ce fichier ne ferme pas P1-01 : requêtes, sources et tests
doivent être rejoués par une P1 désignée.

### P2 — huit défauts

| ID    | Défaut hérité                                                                  |
| ----- | ------------------------------------------------------------------------------ |
| P2-01 | actualiser la guidance Google sur contenu génératif, exactitude et métadonnées |
| P2-02 | traiter précisément la portée des règles d'accessibilité applicables           |
| P2-03 | provenance des images/textes, marque, portrait, licences et validation humaine |
| P2-04 | raccourcir les assistants développeur pour préserver le parcours dirigeant     |
| P2-05 | afficher devise, TVA, durée, paiement initial et renouvellement                |
| P2-06 | fournir une checklist ou feuille TCO réellement téléchargeable et maintenue    |
| P2-07 | recalculer lecture, dates et registre après réécriture                         |
| P2-08 | BAT complet : clavier, thèmes, mobile, OG, formulaire, build et production     |

## 8. Signaux humains, anti-IA et conversion

### À préserver

- le choix de ne pas reconstruire ;
- la reconnaissance d'une solution à faible coût ;
- les études contradictoires et leurs limites ;
- le conflit d'intérêt déclaré ;
- un verdict par situation, pas par marque.

### À corriger

- accumulation de marques et d'études dans le milieu du parcours ;
- section développeur trop longue pour la décision du dirigeant ;
- termes « prototype », « production », « propriété du code » sans preuve
  concrète ;
- coût affiché avant le dénominateur fonctionnel ;
- architecture répétitive qui ressemble à un canevas automatique.

La plume finale doit suivre un cas humain : besoin, essai, premier résultat,
retouches, coût de temps, contrôle, incident possible et décision. Chaque terme
technique doit être suivi de « ce que cela change pour vous ».

### Conversion

Le CTA doit annoncer un objet observable : par exemple une matrice d'options,
les trois risques majeurs, un TCO simplifié et une recommandation pouvant être
« gardez votre site » ou « utilisez le générateur ». Délai, prix, informations
demandées et limites doivent être écrits. Ce livrable n'est pas encore
construit ni validé.

## 9. État exact des quatre passes

| Passe                      | État au dossier                        | Motif                                                                                             |
| -------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------- |
| P1 — recherche et décision | **rejetée / absente, à reprendre**     | le présent fichier reconstitue l'historique ; benchmark, prix et test produit ne sont pas rejoués |
| P2 — rédaction/intégration | **existante, non validée**             | page humaine, mais neuf P1 ouverts                                                                |
| P3 — contre-audit          | **rapport présent, porte non validée** | l'audit découvre les défauts ; aucun snapshot corrigé n'existe                                    |
| P4 — plume et QA           | **rejetée / non validée**              | score audit 80/100, comparaison 5/10, BAT complet absent                                          |

La publication de l'ancien snapshot a été observée par l'audit. Indexation,
classement, conversion et identité exacte avec le futur snapshot : **non
prouvés**.

## 10. Prochaine correction et revalidation

1. Rejouer la recherche et rouvrir les conditions/prix de chaque outil.
2. Figer un brief commun et réaliser le même test, avec versions, temps,
   erreurs, captures, corrections et sortie.
3. Recalculer TCO 12/36/60 et sensibilité avec une seconde méthode.
4. Ajouter règles données/secrets, provenance des actifs, accessibilité et
   exploitation, avec sources primaires et limites.
5. Réécrire autour des décisions et raccourcir le détour développeur.
6. Définir et produire réellement le livrable du CTA.
7. Faire P3 par un autre agent, puis P4 avec lecteur dirigeant et QA complète.

Critères de sortie : mêmes fonctions et niveau de service ; prix datés avec
devise, taxes, durée et renouvellement ; test reproductible ; chaque calcul
refait ; cas où générateur, accompagnement et maintien gagnent ; aucun P1
ouvert ; CTA réellement délivrable ; contrôles de plume, mobile, accessibilité,
liens, données structurées, OG, build et route rattachés au hash final.
