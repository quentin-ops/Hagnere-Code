# Audit froid avant P2 — `cout-maintenance-site-internet`

Date : **25 juillet 2026**  
Relecteur : agent indépendant `maintenance_cold_baseline`  
Périmètre : page, image sociale, entrée du registre, dossier P1, manifeste,
HTML local, sources commerciales et sources primaires décisives  
Mode : lecture seule ; aucun fichier de page, de composant, de registre ou de
recherche modifié

## Verdict canonique

```text
Score actuel : 62/100
P0 ouverts : 0
P1 ouverts : 12
P2 ouverts : 3
Verdict : NO-GO — retour / exécution de la passe P2
Statut maximal prouvé : page existante auditée ; recherche P1 validée ;
                         rédaction P2 non commencée
```

Le guide actuel est une base honnête et compréhensible. Il refuse de présenter
six offres commerciales comme une moyenne nationale, distingue les principales
familles de maintenance, traduit plusieurs sigles et qualifie correctement son
exemple de fromagerie comme fictif.

Il ne peut toutefois pas être défendu comme une réponse premium mondiale. Son
objet annoncé est un **coût**, mais il ne fournit ni coût total à périmètre
constant, ni scénarios par criticité, ni exemple complet de coût d'incident. Son
tableau principal juxtapose précisément les forfaits que le texte dit
incomparables. Sauvegarde, restauration, délais, sécurité, licences et sortie
sont surtout des questions à poser, pas encore des obligations mesurables. Le
dossier P1 validé a déjà préparé les réponses ; elles ne sont pas intégrées à
la page.

Le verdict `GO` est interdit tant qu'un seul P0, P1 **ou P2** reste ouvert.

## 1. Snapshot réellement audité

| Fichier | SHA-256 observé |
| --- | --- |
| audit individuel précédent | `784124319f62fe9ceb29c9a1e59f39a47d03448ceaacf59860e4312d3b433e1f` |
| dossier P1 | `54f0aae7a2c929cc3c813d0be53ba84a179595a678b24da5996443fa497a5309` |
| page | `f008a25e40e75420dce0a89f731b406cfa38eeb4ceae3aed5b0c46a18ae7c4da` |
| image sociale | `71f268d1a24fdef561983851fa8d36a5b88d1f4f88184e8d56f85f23f0cc20f4` |
| registre partagé | `b32e92d3dc582bcc019319fd7254b07740355bda6bb618bb97cd510c94477990` |

Contrôle du manifeste
`docs/research/manifests/cout-maintenance-site-internet-p1-2026-07-25-r1.sha256` :

- audit précédent : conforme ;
- dossier P1 : conforme ;
- page : conforme ;
- image sociale : conforme ;
- `src/lib/guides.ts` : divergent.

Cette seule divergence est attendue : le registre partagé a été modifié par les
guides traités avant celui-ci. L'entrée `cout-maintenance-site-internet` reste
matériellement celle du snapshot initial : titre, descriptions, H1, dates,
temps de lecture et absence de `editorialStatus` n'ont pas été réécrits pour
cette P2.

Conclusion : la page et l'OG sont bien l'ancien snapshot à auditer. Le dossier
P1 n'a pas été confondu avec une réécriture déjà appliquée.

## 2. Score détaillé

| Axe | Note /10 | Preuve exacte | Manque qui empêche le niveau premium |
| --- | ---: | --- | --- |
| Intention | 8 | `page.tsx:240-258` répond immédiatement à la requête et borne la fourchette | l'ouverture ancre malgré tout le lecteur sur `29–499 €` avant de qualifier le rôle et le risque du site |
| Décision | 5 | `page.tsx:768-800` donne cinq étapes générales | aucun verdict par vitrine, boutique ou service critique ; aucun seuil de budget ni règle de disqualification d'une offre |
| Pédagogie | 7 | `page.tsx:384-406`, `618-635` traduit préventif/correctif/évolutif, hébergement et délais | les champs `___`, les notions de disponibilité et les clauses ne débouchent pas sur un exemple rempli de bout en bout |
| Profondeur | 5 | la page aborde risques, sauvegardes, contrats, stacks et plateformes | RPO/RTO, rétention, restauration chronométrée, cinq temps d'incident, inventaire de sécurité, sortie testée et mesure après décision manquent |
| Preuve | 6 | les six pages de fournisseurs sont liées et accessibles ; l'exemple fictif est correctement qualifié | les affirmations WordPress, Next.js, données personnelles, sauvegarde et disponibilité n'ont pas de source primaire près de leur occurrence |
| Comparaison | 4 | `page.tsx:288-381` juxtapose six offres et reconnaît leurs limites | le même tableau compare maintenance seule, hébergement, licences, contenu, support et SLA différents ; aucune normalisation ne suit |
| Originalité | 6 | la fromagerie fictive et le tableau « question / donnée / décision » donnent un début de dispositif propre | pas de registre promesse/preuve/risque/payeur, pas de calculateur ni de cahier autonome exploitable |
| Style | 8 | ton calme, mots courants, pas de faux client, réserves commerciales explicites | plusieurs passages restent des inventaires de questions et non une démonstration qui conduit à un choix |
| Conversion | 6 | un seul `GuideInlineCTA` dans le corps, après la démonstration | action autonome incomplète ; livrable, délai, gratuité/prix, mauvais fit et conflit d'intérêts du CTA non visibles |
| SEO / produit | 7 | title 52 caractères, meta 146, canonical exact, un H1, Article + Breadcrumb, aucune FAQ structurée interdite, 14 min exactes | la page P2-incomplète reste `index, follow`, dans `PUBLISHED_GUIDES`, le sitemap et `llms.txt`; metadata et OG promettent plus que le corps ne démontre |

Total recalculé : `8 + 5 + 7 + 5 + 6 + 4 + 6 + 8 + 6 + 7 = 62`.

## 3. Vérifications indépendantes des faits et calculs

### 3.1 Prix publics

Les six URL directement liées par la page répondent toutes en HTTP `200` le
25 juillet 2026. Les montants numériques affichés dans la page sont encore
présents :

| Fournisseur | Valeurs revérifiées | Point qui empêche la comparaison directe |
| --- | --- | --- |
| [Grain de Site](https://graindesite.com/maintenance-wordpress/) | 29 / 39 / 49 € par mois | cadence, limites WooCommerce, absence d'urgence et licences retirées à la sortie changent le service acheté |
| [TYTAE](https://www.tytae.fr/maintenance-site-wordpress-tarif/) | à partir de 29 / 39 / 69 € HT/mois ; 85 € HT/h ponctuelle | remise à niveau initiale préalable et éventuels coûts associés à distinguer |
| [Studio HTTP](https://studio-http.fr/maintenance-wordpress/) | à partir de 39 / 99 € | contrat annuel ; le palier 99 inclut une heure de modification et une rétention différente |
| [Harsene](https://harsene.com/maintenance-et-support-wordpress/) | 49 € vitrine / 69 € WooCommerce sur la page tarifaire actuelle | support dit illimité, hébergement et limites réelles doivent être ramenés au même cahier |
| [Palmsquare](https://palmsquare.fr/agence-maintenance-wordpress/) | 89 / 169 € HT/mois ; 74 / 141 € équivalents en annuel | support, staging, licence et heure de modification diffèrent par palier ; le hero affiche aussi « à partir de 69 € » |
| [Pulsar](https://www.pulsar-agency.com/maintenance-site-web/contrat-maintenance-web) | 159 / 209 / 499 € HT/mois, facturation annuelle | hébergement, rétention, astreinte, GTI/GTR et PRA sont inclus selon le palier |

Le minimum `29` et le maximum `499` sont donc factuellement retrouvés. Ils ne
forment ni une moyenne, ni une fourchette de marché, ni un prix comparable. La
page le dit, mais ne fait pas ensuite le travail nécessaire pour rendre les
offres comparables.

Deux ressources internationales ont été rouvertes pour chercher une réponse
plus forte :

- [WP Buffs](https://wpbuffs.com/plans/) rend visibles les différences entre
  mises à jour, sauvegardes, e-commerce, staging et code sur mesure, avec des
  plans actuellement affichés à 89 / 179 / 239 / 359 USD par mois ;
- [Shop Wartung, Allemagne](https://www.shop-wartung.de/en/) affiche 199 /
  349 / 699 € net par mois, mais surtout une chaîne backup → staging → tests de
  checkout/paiement/recherche → déploiement → rollback, des rétentions et des
  temps de première réponse distincts.

Ces prix étrangers ne sont pas transposables au marché français. Leur apport
est méthodologique : les meilleures pages permettent de voir **ce qui est
testé, quand un humain agit et ce que le niveau supérieur ajoute**. La page
actuelle n'atteint pas encore ce niveau.

### 3.2 Sources primaires

Échantillon décisif rouvert le 25 juillet 2026 :

- [WordPress — Updating WordPress](https://wordpress.org/documentation/article/updating-wordpress/) :
  sauvegarde avant mise à jour, possibilité d'échec et restauration en cas de
  problème ;
- [WordPress — Backups](https://developer.wordpress.org/advanced-administration/security/backup/) :
  une reprise typique nécessite fichiers **et** base, avec copies stockées à
  différents endroits ; la documentation a été mise à jour le 4 juin 2026 ;
- [CNIL — RGPD, article 32](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4) :
  dans le périmètre des traitements de données personnelles, mesures
  proportionnées au risque, capacité de rétablissement et tests réguliers ;
- [Next.js — Support Policy](https://nextjs.org/support-policy) :
  Next.js 16.x est actuellement `Active LTS`, 15.x `Maintenance LTS`, et les
  versions plus anciennes sont listées comme non supportées.

Ces sources confirment la direction générale de la page : une mise à jour peut
nécessiter un repli, une copie n'est pas une reprise complète et une stack
moderne conserve un cycle de support. Elles montrent aussi pourquoi les phrases
`page.tsx:418-432`, `497-504`, `534-589` et `613-635` doivent recevoir une
preuve primaire proche et un protocole concret.

### 3.3 Calculs

Disponibilité annuelle :

```text
365 × 24 × 60 × 60 × 0,001 = 31 536 s
31 536 s = 8 h 45 min 36 s ≈ 8 h 46

365 × 24 × 60 × 60 × 0,0001 = 3 153,6 s
3 153,6 s = 52 min 33,6 s ≈ 53 min
```

Les conversions de `page.tsx:625-635` sont exactes et correctement présentées
comme arithmétiques, pas comme un SLA complet.

Temps de lecture mesuré depuis l'article HTML visible avec la commande du
projet, sur `http://localhost:3011` :

```text
cout-maintenance-site-internet    2748 mots    14 min
```

`readTimeMin: 14` est exact sur ce snapshot. Le précédent audit annonçait
environ 4 008 mots ; cette valeur ne correspond pas à la convention actuelle
du texte visible et ne doit pas être reprise.

Le guide ne publie aucun TCO, aucune sensibilité d'incident et aucun coût rempli
du « faire soi-même » : il n'existe donc rien d'autre à recalculer dans la page.
Cette absence est précisément un défaut P1, pas une validation.

## 4. Incidents ouverts

### P0

Aucun fait faux ou risque juridique suffisamment certain n'a été trouvé pour
ouvrir un P0 sur le snapshot. L'absence de P0 ne vaut pas passage : douze P1
empêchent la décision principale et la porte P2.

### P1 et P2

| ID | Gravité | Fichier et preuve | Conséquence lecteur | Correction minimale | Revalidation exigée |
| --- | --- | --- | --- | --- | --- |
| P1-01 | P1 | `page.tsx:180`, `187-203`, `240-294` : l'ouverture, le hero et les chiffres-clés conduisent par `29–499 €` avant de qualifier la criticité | un prix bas devient une ancre mentale alors que le guide admet que les offres ne couvrent pas la même chose | ouvrir par rôle du site, fonctions rémunératrices, perte admissible et réponse courte ; reléguer les prix non normalisés | test des 150 mots : un dirigeant choisit d'abord un niveau de couverture, pas un prix |
| P1-02 | P1 | `page.tsx:296-381` : trois colonnes seulement, pour six offres mêlant hébergement, licences, contenu, correctif, astreinte et engagement | le tableau ressemble visuellement à un classement malgré la réserve textuelle | publier un cahier à périmètre égal : actifs, parcours, horaires, préventif, correctif, évolutif, hébergement, sauvegarde, sécurité, licences, contenu, sortie ; une ligne obligatoire vide disqualifie l'offre | renvoyer la même fiche à quatre options fictives et vérifier qu'aucune n'est « moins chère » avec une obligation absente |
| P1-03 | P1 | `guides.ts:1395-1408`, `page.tsx:579-589`, `674-766` : title/meta promettent le coût mensuel pour vitrine, boutique ou application, mais aucun budget complet par type ni horizon n'est publié | le lecteur ne sait pas combien réserver au-delà du forfait mensuel | intégrer les trois scénarios P1 simple/central/exigeant, formule TCO, inclus/exclus, 12/36 mois, variables de bascule et inconnues `ND` | tests unitaires indépendants de chaque total ; modifier forfait, temps, évolution, incident et horizon |
| P1-04 | P1 | `page.tsx:435-468` contient `___` et aucune formule remplie ; la fromagerie fictive de `409-413` n'est jamais chiffrée | le coût d'une panne reste une injonction à calculer, pas un outil de décision | publier un exemple fictif complet basé sur marge non reportable, reprise, communication et temps réellement réaffecté ; montrer sensibilités 2/6/12 h et période centrale/pointe | recalcul depuis les hypothèses ; vérifier que chiffre d'affaires brut et temps déjà payé ne deviennent pas automatiquement une perte |
| P1-05 | P1 | `page.tsx:425-432`, `488-505` et FAQ `137-140` demandent sauvegarde externe/testée, sans RPO, RTO, rétention, périmètre restauré ni exercice | le lecteur peut accepter une notification de copie comme preuve de reprise | intégrer la chaîne fichiers + données + configuration, point restaurable, stockage séparé, rétention, contrôle d'intégrité, restauration chronométrée et tests métier | scénario où une copie « réussie » échoue à la restauration ; résultat, écart RPO/RTO et action corrective visibles |
| P1-06 | P1 | `page.tsx:618-635` cite SLA, GTI et GTR mais pas détection, accusé humain, intervention, contournement, retour du service et correction définitive par sévérité | « monitoring 24/7 » ou « réponse rapide » peut être pris pour un rétablissement | intégrer horaires, fuseau, source de mesure, parcours observé, sévérités, cinq temps, exclusions, astreinte et escalade | quatre cas S1–S4 ; vérifier qu'une alerte hors heures sans humain n'est jamais qualifiée d'intervention |
| P1-07 | P1 | `page.tsx:534-589`, `674-766` compare qualitativement WordPress, Next.js, DIY et plateformes ; interne, freelance avec relais, agence et TMA ne sont jamais chiffrés au même périmètre | le lecteur ne peut choisir un mode d'organisation ni valoriser la dépendance à une personne | comparer les quatre modes sur le périmètre central P1, mêmes fonctions, horaires, capacités, coûts d'outils, temps client et sortie ; rendre visibles les cas où couverture légère/plateforme/interne gagnent | recalcul 12/36 ; une option incapable de la couverture devient non qualifiée, pas artificiellement moins chère |
| P1-08 | P1 | hors six fournisseurs et deux outils en fin de page, `page.tsx:384-766` n'a pas de lien primaire près des affirmations WordPress, Next.js, sauvegarde, données, disponibilité ou accessibilité | le lecteur doit faire confiance à l'agence sur les faits qui déterminent le contrat | lier les sources primaires appropriées près de chaque fait : WordPress, ANSSI/CNIL, NIST, NCSC/GOV.UK, Next.js, Google et W3C ; marquer les pages vendeurs comme observations commerciales | rouvrir les URL ; vérifier passage, pays, date, portée et traduction lecteur ; aucune bibliographie seule |
| P1-09 | P1 | `page.tsx:483-531`, `605-663` : sécurité, licences, sous-traitants et sortie sont listés, mais sans inventaire, propriétaire, renouvellement, exception, test de changement ou reprise par tiers | des coûts et blocages majeurs restent cachés jusqu'à l'incident ou au départ | intégrer registre dépendances/licences/comptes, processus de changement avec repli, périmètre sécurité, et test de build/export/restauration par un tiers | injecter une licence non transférable, une version hors support et un secret manquant ; le résultat doit devenir `ND` ou non qualifié |
| P1-10 | P1 | `page.tsx:443-461`, `768-800` : les blancs et cinq étapes ne produisent aucun document copiable, calcul ni sortie partageable | le lecteur doit recommencer le travail hors de la page | fournir un actif autonome réellement utilisable — composant local ou fichier éditable — couvrant actifs, parcours, preuves, coût d'incident et TCO ; sinon rendre la page elle-même remplissable et exportable | saisie complète et partielle, `ND` préservés, impression/copie, aucune donnée envoyée sans nécessité, aucun `undefined`/`NaN` |
| P1-11 | P1 | `page.tsx:810-832` et `GuideInlineCTA` : l'agence vend la maintenance, mais le CTA ne donne ni livrable ferme, ni délai, ni prix/gratuité, ni mauvais fit ; il mène par défaut à `/demarrer-un-projet` | le lecteur ne sait pas ce qu'il obtiendra et peut prendre une intention commerciale pour une revue déjà définie | déclarer le conflit d'intérêts ; montrer bon/mauvais fit et option de ne pas souscrire ; n'annoncer « revue de périmètre » que si contenu, délai, coût/gratuité et limites sont validés, sinon conserver un échange générique honnête | ouvrir la destination et comparer chaque promesse ; un seul CTA éditorial ; aucun délai ou livrable inventé |
| P1-12 | P1 | dossier P1 `:17-22` dit P2 à faire et P3/P4 bloquées ; l'entrée `guides.ts:1395-1408` n'a pas `editorialStatus`; la page n'appelle pas `guideRobots`; HTML local : `index, follow` | l'état découvrable contredit le niveau éditorial documenté et expose un guide reconnu incomplet | pendant P2, mettre `editorialStatus: "ready-for-human-review"`, dériver `robots` via `guideRobots(guide)` et laisser hub/sitemap/`llms.txt` suivre `PUBLISHED_GUIDES` | build de production gelé : `noindex,nofollow`, absence du hub/sitemap/llms ; ne retirer la porte qu'après P3, P4 et autorisation |
| P2-01 | P2 | `page.tsx:677-701` : `2 à 4 heures par mois` est qualifié d'estimation éditoriale, mais aucun taux, exemple rempli ou sensibilité ne suit | ordre de grandeur mémorisable mais non défendable pour un lecteur précis | soit intégrer trois valeurs horaires et le coût des outils/relais/incidents, soit retirer la fourchette et demander la mesure réelle | modifier heures et valeur horaire ; vérifier que le verdict peut basculer |
| P2-02 | P2 | `page.tsx:783-786` renvoie au « tableau de la section 5 » pour mises à jour, sauvegardes, licences et heures ; ce tableau est en section 4, la section 5 compare les stacks | le lecteur revient au mauvais tableau au moment d'agir | corriger le renvoi ou supprimer la numérotation fragile | cliquer/lire le renvoi dans le rendu final ; ancre stable |
| P2-03 | P2 | `page.tsx:768-821` s'arrête au choix initial ; aucune mesure de départ, fréquence de revue, responsable, tendance d'incident ni signal de révision n'est rendu opérationnel | le lecteur ne sait pas contrôler si le forfait mérite d'être maintenu ou modifié | ajouter un mini-rapport après décision : parcours, dernier point restaurable, incidents et délais, versions/risques, capacité consommée, coût réel et événements de révision | exemple mensuel rempli et cas d'échec ; chaque indicateur a un propriétaire et une action |

Compteurs vérifiés : **0 P0, 12 P1, 3 P2**.

## 5. Ce qui est déjà conforme et doit être conservé

- aucune moyenne nationale inventée ;
- six prix publics encore accessibles, qualifiés comme échantillon
  non représentatif ;
- exemple de fromagerie explicitement fictif avant ses chiffres ;
- distinction préventive / corrective / évolutive ;
- distinction maintenance / hébergement / infogérance ;
- aucune promesse « Next.js = zéro maintenance » ;
- disponibilité `99,9 %` et `99,99 %` correctement convertie et bornée ;
- un seul CTA éditorial dans le corps ;
- title et meta de longueurs propres, canonical correct, un H1 ;
- uniquement `Article` et `BreadcrumbList` ; aucun `FAQPage`, `HowTo`,
  `Offer` ou `wordCount` ;
- FAQ visible dont les premières phrases répondent ;
- `readTimeMin: 14` exact sur 2 748 mots visibles ;
- image sociale dédiée déclarée en `1200 × 630`, cohérente dans son thème
  général ; son rendu physique reste une vérification P4.

## 6. Exigences testables pour fermer la P2

La nouvelle page ne doit pas seulement « ajouter des sections ». Elle doit
produire les résultats suivants :

1. **Ouverture** : dans les 150 premiers mots, le lecteur classe son site
   vitrine, boutique ou service critique et comprend pourquoi deux mensualités
   ne se comparent qu'avec les mêmes obligations.
2. **Périmètre égal** : chaque option reçoit les mêmes actifs, parcours,
   horaires, sauvegardes, capacités correctives/évolutives, licences et sortie.
   Une ligne obligatoire absente rend l'option non qualifiée.
3. **Trois scénarios** : simple, central et exigeant, avec TCO 12/36 mois,
   inclus, exclus, formules et variables de bascule.
4. **Quatre modes** : interne structuré, freelance avec relais, agence et TMA
   comparés sur le périmètre central identique.
5. **Inconnues** : une valeur requise absente produit `ND`, jamais zéro ; un
   sous-total est clairement nommé sous-total.
6. **Incident** : exemple fictif complet et sensibilité 2/6/12 h, période
   normale/pointe, avec marge non reportable et temps réellement réaffecté.
7. **Restauration** : fichiers, données, configuration, séparation, rétention,
   point restaurable, chronométrage et parcours métier après reprise.
8. **SLA** : détection, accusé humain, intervention, contournement,
   rétablissement et correction, avec sévérités, horaires et exclusions.
9. **Sécurité et sortie** : dépendances, support, licences, comptes, secrets et
   transfert testés ; aucune étiquette « sécurisé » ou « réversible » sans
   artefact.
10. **Preuve** : faits primaires liés à leur occurrence ; vendeurs identifiés
    comme vendeurs et tarifs datés.
11. **Action autonome** : outil ou fiche réellement utilisable, testée en cas
    complet, partiel et destructif, avec sortie partageable.
12. **Conversion** : conflit d'intérêts, option légère/DIY/report, bon et
    mauvais fit, résultat exact du CTA et aucune promesse commerciale absente de
    sa destination.
13. **État éditorial** : `ready-for-human-review` et `noindex,nofollow` pendant
    les passes restantes.
14. **Tests** : calculs, `ND`, metadata, schemas, liens, read time et statut
    couverts sur le snapshot P2.

Après ces corrections, une autre personne doit refaire un contre-audit froid
P3. La P2 ne peut pas s'auto-attribuer un score de passage.

## 7. Contrôles techniques effectués

```text
Manifeste P1 :
  4/5 lignes conformes ; seule src/lib/guides.ts diverge, attendu et expliqué.

HTML local :
  URL : http://localhost:3011/guides/cout-maintenance-site-internet
  title : Coût de maintenance d’un site en 2026 · Hagnéré Code
  canonical : https://hagnere-code.ai/guides/cout-maintenance-site-internet
  robots : index, follow
  H1 : 1
  Article : 1
  BreadcrumbList : 1
  FAQPage : 0
  placeholders visibles : oui

Lecture :
  2 748 mots visibles
  14 minutes à 200 mots/minute, arrondi conventionnel

Liens tarifaires :
  6/6 URL directes en HTTP 200 le 2026-07-25

Calculs refaits :
  fourchette observée 29–499 : retrouvée, non comparable
  99,9 % : 8 h 45 min 36 s ≈ 8 h 46
  99,99 % : 52 min 33,6 s ≈ 53 min
  aucun TCO ni coût d'incident complet publié

Limites :
  aucun rendu responsive, clavier, thème ou OG physique dans cet audit froid ;
  ces contrôles appartiennent à la P4 du futur snapshot corrigé.
  aucun commit, push, build, déploiement, publication ou contrôle d'indexation.
```

## Conclusion

La page actuelle répond à « quels mots et clauses regarder ? », pas encore à
« quel niveau acheter, à quel coût total et avec quelles preuves ? ». Le dossier
P1 est suffisamment riche pour une réécriture de haut niveau : sa P2 doit
maintenant remplacer le prix d'appel par une décision fondée sur la criticité,
un périmètre identique, un TCO 12/36, un incident chiffré et une restauration
réellement réceptionnable.

**Verdict final : NO-GO P2 — 62/100, 0 P0, 12 P1, 3 P2.**
