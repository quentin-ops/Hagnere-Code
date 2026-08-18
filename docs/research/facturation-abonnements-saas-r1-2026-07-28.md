# Refonte premium R1 à R6 — `facturation-abonnements-saas`

Date de travail : 28 juillet 2026  
Propriétaire éditorial : `/root`  
Statut : **GO_LOCAL_DRAFT R6 — 98/99/100, aucun P0/P1**

## 1. Pourquoi l’ancien verdict est invalidé

Le dossier historique du 23 juillet concluait à `19/20` et « publiable » alors
que la page servie ne contenait ni comparaison économique à périmètre égal, ni
outil de décision, ni pont MRR-factures-cash, ni actif téléchargeable, ni
matrice internationale, ni test opérationnel approfondi des webhooks.

Les audits froids du 28 juillet ont donc remplacé ce verdict :

- audit éditorial et factuel strict : **76/100**, `GO_A_CORRIGER` ;
- audit UX et benchmark international : **82/100**, `NO_GO premium` ;
- audit technique de conception : **82/100**, `GO_CONCEPTION` mais
  `NO_GO_PREMIUM`.

L’ancien `19/20` reste un artefact historique. Il ne décrit pas la profondeur
du guide avant la présente refonte et ne doit pas servir de preuve de qualité
ou de publication.

## 2. Décision défendue

La nouvelle réponse compare quatre chemins :

1. processus manuel explicite et rapproché ;
2. moteur de facturation hébergé ;
3. moteur hébergé relié à une couche métier ;
4. moteur spécifique avec rails de paiement externalisés.

La doctrine est conditionnelle :

- le manuel reste rationnel tant qu’il est mesuré, attribué et contrôlable ;
- le moteur hébergé devient utile pour des transitions répétées ;
- la couche métier se justifie par les contrats, organisations, quantités,
  usages ou droits que le modèle externe ne représente pas correctement ;
- le spécifique ne se justifie pas par le volume seul ;
- les rails de paiement réglementés ne sont pas reconstruits pour créer un
  faux avantage produit ;
- un Merchant of Record n’est pas comparé comme une simple ligne tarifaire,
  car son rôle contractuel, fiscal et opérationnel doit d’abord être qualifié.

## 3. Benchmark mondial mobilisé

### France et Union européenne

- Ministère de l’Économie : calendrier de facturation électronique, nouvelles
  mentions et périmètre général ;
- DGFiP : plateformes agréées, e-reporting des transactions et e-reporting des
  paiements ;
- Commission européenne : lieu d’imposition des services selon leur nature et
  la qualité B2B ou B2C du client.

### Royaume-Uni, Canada, Australie et États-Unis

- Stripe : cycle d’abonnement, factures, paiements asynchrones, état `active`,
  proratas, mises à jour conditionnelles et webhooks ;
- HMRC : lieu de fourniture des services numériques B2C, qualification B2B,
  indices de résidence et rôle éventuel d’une plateforme ;
- Canada Revenue Agency : régime GST/HST applicable aux produits et services
  numériques transfrontières, résidence habituelle, province et responsabilité
  possible d’une plateforme ;
- Australian Taxation Office : qualification d’un consommateur australien,
  ABN, inscription GST, usage professionnel et electronic distribution
  platform ;
- Multistate Tax Commission : impossibilité de déduire un traitement national
  unique du SaaS et nécessité de vérifier nexus, sourcing et qualification
  État par État ;
- benchmark de structure : quote-to-cash, CPQ et pratiques observées chez
  Stripe, Chargebee, Zuora, Maxio et Paddle ;
- distinction maintenue entre documentation technique utile et affirmation
  commerciale d’un fournisseur.

Le guide ne convertit aucun prix étranger en « prix du marché français » et ne
transpose aucune règle fiscale étrangère en règle française. Aucun taux ou
seuil étranger n’est encodé comme une constante : les preuves contradictoires,
le statut client non qualifié, la province ou l’État inconnu, le nexus non
instruit et le rôle incertain d’une plateforme restent des branches `STOP`.

## 4. Faits sensibles revérifiés le 28 juillet 2026

| Fait | Verdict utilisé dans le guide | Source primaire |
| --- | --- | --- |
| Réception de factures électroniques | Toutes les entreprises concernées doivent être en mesure de recevoir au 1er septembre 2026 | https://www.economie.gouv.fr/tout-savoir-sur-la-facturation-electronique-pour-les-entreprises |
| Émission et e-reporting grandes entreprises / ETI | 1er septembre 2026 | même source |
| Émission et e-reporting PME / micro | 1er septembre 2027 | même source |
| Nouvelles mentions | SIREN client, catégorie d’opération, option TVA sur les débits le cas échéant, adresse de livraison du bien si différente | https://www.economie.gouv.fr/entreprises/gerer-son-entreprise-au-quotidien/gerer-sa-comptabilite-et-ses-demarches/mentions-obligatoires-dune-facture-tout-savoir |
| Données de paiement | Opérations dont la TVA est exigible à l’encaissement, notamment certaines prestations de services, hors option débits et autoliquidation | https://www.impots.gouv.fr/sites/default/files/media/1_metier/2_professionnel/EV/2_gestion/290_facturation_electronique/fiches_reforme/fiche-e-reporting_paiements.pdf |
| Plateforme agréée | Réception, transmission et données réglementaires selon le dispositif ; liste courante à revérifier | https://www.impots.gouv.fr/facturation-electronique-et-plateformes-agreees |
| Webhooks Stripe | Signature, doublons, ordre non garanti, récupération d’objets, file asynchrone | https://docs.stripe.com/webhooks |
| Idempotence API Stripe | Les clés concernent les requêtes `POST` ; les requêtes `GET` et `DELETE` ne sont pas concernées par ce mécanisme | https://docs.stripe.com/api/idempotent_requests |
| Statut Stripe `active` | Ne prouve pas que toutes les factures ouvertes sont payées ; les moyens asynchrones ont des transitions propres | https://docs.stripe.com/billing/subscriptions/overview |
| Lieu d’imposition UE | Dépend de la nature du service et du statut du client ; règles générales B2B/B2C avec exceptions | https://taxation-customs.ec.europa.eu/taxation/vat/vat-directive/place-taxation_en |
| Royaume-Uni, services numériques | Le B2C numérique est notamment rattaché à la résidence habituelle ; B2B, nature du service, preuves et plateforme doivent être qualifiés | https://www.gov.uk/guidance/the-vat-rules-if-you-supply-digital-services-to-private-consumers |
| Canada, GST/HST numérique | Régime d’inscription, canal, résidence habituelle, province et preuve d’inscription du client conditionnent la préqualification | https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/digital-economy-gsthst/charge-collect/cross-border.html |
| Australie, fourniture numérique importée | Résidence, ABN, inscription GST, usage professionnel et rôle de l’EDP doivent être distingués | https://www.ato.gov.au/law/view/document?DocID=GST%2FGSTR20171%2FNAT%2FATO%2F00001 |
| États-Unis, sales tax | Aucun booléen national SaaS n’est défendable ; la qualification et le sourcing se vérifient État par État | https://www.mtc.gov/uniformity/sales-tax-on-digital-products/ |

Les cas fiscaux non qualifiés restent en `STOP` et sont routés vers
l’expert-comptable ou le fiscaliste. Aucune valeur par défaut ne prétend
valider la TVA.

## 5. Calculs reproductibles

Hypothèses fictives centrales :

- horizon : 24 mois ;
- 100 clients actifs moyens ;
- 100 € facturés par client et par mois ;
- coût interne : 45 €/h ;
- frais variables du moteur hébergé : 0,7 %.

Résultats :

| Option | 10 clients | 100 clients | 500 clients |
| --- | ---: | ---: | ---: |
| Manuel explicite | 3 240 € | 12 960 € | 56 160 € |
| Moteur hébergé | 8 008 € | 12 760 € | 33 880 € |
| Hébergé + couche métier | 31 688 € | 34 820 € | 48 740 € |
| Spécifique | 97 188 € | 98 160 € | 102 480 € |

Le croisement central `manuel = hébergé` vaut environ `96,3768`, soit **97
clients entiers**. Le chiffre `74` appartient uniquement à la sensibilité sans
frais variables et n’est pas le résultat central.

Sorties de sensibilité contrôlées : `183 / 97 / 50 / 247 / 74`.

## 6. Cas Planor et séparation des grandeurs

Planor est fictif :

- somme des MRR mensuels : 37 500 € ;
- mise en route et usage ponctuel : 3 500 € ;
- factures brutes : 41 000 € ;
- avoirs : 350 € ;
- factures nettes : 40 650 € ;
- paiements reçus et affectés : 40 750 € ;
- remboursements : 100 € ;
- cash net : 40 650 € ;
- créance finale : 0 € ;
- MRR final : 3 800 € ;
- ARR indicatif : 45 600 €.

Le remboursement reste distinct de l’avoir, mais il entre dans le
rapprochement : `créance finale = ouverture + factures nettes − paiements
affectés + remboursements affectés`. Les 350 € d’avoirs documentent ici la
correction, les 40 750 € de paiements précèdent le remboursement de 100 €, et
le cash net de 40 650 € rejoint les factures nettes. Sans contrepartie
documentée, le remboursement recréerait une créance ou devrait rejoindre un
autre compte explicite.

## 7. Actifs produits

- moteur de décision pur :
  `src/lib/subscription-billing-oracle.ts` ;
- tests métier :
  `src/lib/subscription-billing-oracle.test.ts` ;
- outil local TCO + rapprochement :
  `src/components/guides/SubscriptionBillingDecisionDossier.tsx` ;
- tests UI :
  `src/components/guides/SubscriptionBillingDecisionDossier.test.tsx` ;
- classeur sans macro :
  `public/ressources/kit-pilotage-facturation-saas.xlsx` ;
- artefact de contrôle et dix rendus de feuilles :
  `output/facturation-abonnements-saas-2026-07-28/`.

Le classeur contient dix feuilles : lecture, règles, TCO 24 mois, MRR,
rapprochement, relances, vingt-quatre tests, exemple Planor, contrôles et
quinze sources.

## 8. Contrôles déjà exécutés

- moteur métier : `33/33` tests ;
- composant interactif : `8/8` tests ;
- contrat éditorial du guide : `9/9` tests ;
- parcours de contact contextualisé : `5/5` tests ;
- total ciblé : `55/55` tests ;
- ESLint ciblé : conforme ;
- build Next.js de production : `159/159` routes générées ;
- page servie : `6 068` mots visibles, `39 779` caractères visibles, un seul
  `h1`, treize `h2`, trente `h3`, huit tableaux et vingt-cinq liens dans
  l’article ;
- deux copies du classeur réimportées, dix feuilles par copie, statut central
  `PASS` et aucune erreur de formule ;
- mutation 100 → 500 clients : les quatre TCO deviennent
  `56 160 / 33 880 / 48 740 / 102 480` ;
- mutation du coût horaire 45 → 50 € :
  `14 400 / 13 280 / 35 080 / 98 400` ;
- seuil de pentes inversées `33,333… → 34`, seuil entier exact
  `100 → 101`, dominances dans les deux sens, lignes parallèles et égalité
  à tout volume : sorties explicites et reproductibles ;
- sortie sans seuil positif : cellule vide et message explicite, jamais zéro ;
- les mutations légitimes conservent `MODEL STATUS: PASS` et font passer la
  fixture à `FIXTURE MODIFIÉE` ;
- rapprochement central : `41 000` € bruts, `350` € d’avoirs, `40 650` €
  nets, `40 750` € de paiements observés, `100` € de remboursements et
  `40 650` € de cash net, sans créance ni delta ;
- mutation du paiement à `9 599` € : `STOP / FAIL` ; paiement vide :
  `À REVOIR / REVIEW` ; rupture intermensuelle à delta nul : `STOP` ;
- quatre sabotages volontaires de formules détectés ;
- vingt-trois contrôles indépendants et aucune erreur de formule détectée ;
- copie publique et artefact contrôlé : mêmes octets, SHA-256
  `5f67ddf063dd77854f03c6436b90d46787be5fb4e2671fd61647c25563ebe649` ;
- dix feuilles rendues et inspectées visuellement.
- téléchargement servi en `HTTP 200`, MIME
  `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`,
  `38 392` octets et empreinte identique au fichier public ;
- BAT navigateur réel aux largeurs `320 / 360 / 390 / 430 / 640 / 768 /
  1024 / 1280 / 1440 / 1600` : aucun débordement horizontal, article de
  `288 / 328 / 358 / 398 / 608 / 736 / 760 / 760 / 760 / 760` pixels,
  paragraphes et titres alignés à gauche ;
- thèmes clair et sombre inspectés ; aucun log navigateur d’erreur ou
  d’avertissement ;
- parcours clavier réel contrôlé à `320` et `1 440` pixels dans Google Chrome
  `150.0.7871.187` : `Tab`, `Shift+Tab`, `Enter`, flèches et `Space`, focus
  visible, ouverture du détail, qualification fiscale, remise à zéro et
  téléchargement ;
- outil vérifié dans le navigateur : `STOP` fiscal initial, `PASS` après
  qualification explicite, valeur inconnue en `À REVOIR`, écart d’un euro en
  `STOP`, sorties affichées au centime, puis réinitialisation ;
- CTA exact
  `/demarrer-un-projet?service=saas&source=guide-facturation-saas` :
  service SaaS présélectionné et situation actuelle préremplie, sans envoi ;
- contrôle global du corpus : `962/964` tests ; les deux échecs sont des
  défauts de gouvernance historiques hors de ce guide
  (`prioriser-fonctionnalites-mvp-saas` et
  `automatiser-processus-metier`) et ne sont pas masqués.

Les preuves autonomes R5 sont gelées dans :

- `docs/research/evidence/facturation-abonnements-saas-r5-bat-2026-07-28.md` ;
- `output/facturation-abonnements-saas-2026-07-28/browser-bat-r5.ndjson` ;
- `output/facturation-abonnements-saas-2026-07-28/kit-pilotage-facturation-saas.xlsx.inspect.ndjson` ;
- les dix rendus de feuilles et les quatre captures R5 clavier/thèmes du
  dossier `output/facturation-abonnements-saas-2026-07-28/`.

Le classeur a été recalculé, réimporté, muté et saboté avec l’outil
d’artefacts local. Il n’a pas été recalculé dans une instance réelle de
Microsoft Excel.

## 9. Contre-audits R1/R2 et corrections R3

Les trois contre-audits indépendants du premier candidat ont rendu
`84/100`, `82/100` et `88/100`, tous `NO_GO`.

Les portes P1 détectées et corrigées dans R2 sont :

1. remboursement ajouté à l’équation de créance, sans faux `PASS` Planor ;
2. devises hétérogènes arrêtées avant agrégation ;
3. même clé métier et même empreinte rendues idempotentes, même si
   l’identifiant technique de livraison diffère ;
4. même clé avec contenu différent placée en `STOP` ;
5. dépassements numériques exclus du classement TCO ;
6. seuil résolu dans les deux sens de pente, lignes parallèles et égalité
   entière traitées explicitement ;
7. qualification fiscale initialisée à `inconnue`, donc jamais convertie en
   faux booléen rassurant ;
8. remboursement inter-période documenté accepté sans faux `STOP` ;
9. décomposition récurrente du classeur remise sur le même horizon ;
10. contrôles du classeur séparés entre intégrité du modèle et fixture
    centrale, avec sabotages réellement détectés ;
11. provenance et snapshot des événements conservés pour la reprise ;
12. libellés, densité, hiérarchie des titres, zones `aria-live` et saisie des
    pourcentages corrigés.

Les trois lectures indépendantes du candidat R2 ont ensuite rendu :

- **88/100 — `NO_GO` factuel**, car le classeur pouvait afficher un modèle
  valide avec des contrôles qui se recopiaient eux-mêmes ;
- **96/100 — `GO` technique**, avis utile mais non gouvernant, car il n’avait
  pas détecté cette faiblesse du classeur ;
- **91/100 — `NO_GO` UX**, avec trois P1 : explication incomplète des
  dominances de seuil, absence de preuve clavier et manifeste incomplet.

R3 ferme ces portes :

1. rapprochement, contrôles et sabotages du classeur sont indépendants de la
   fixture centrale et incluent désormais les remboursements ;
2. les seuils couvrent les deux pentes, les deux dominances, le parallélisme,
   l’égalité à tout volume et le premier entier strictement supérieur ;
3. l’article explique ces branches sans annoncer de faux seuil ;
4. quatre juridictions non-UE sont préqualifiées à partir de sources
   publiques primaires, sans taux, seuil ni booléen fiscal national encodé ;
5. une BAT clavier réelle et une preuve NDJSON autonome ont été ajoutées ;
6. le manifeste candidat inclut le graphe runtime, les tests, la
   configuration, les actifs servis et toutes les preuves contrôlées.

Le contre-audit R3 a ensuite rendu :

- **96/100 — `GO_LOCAL_DRAFT` UX**, sans P0/P1, avec quatre P2 ;
- **86/100 — `NO_GO` technique**, avec deux P1 démontrés : un contenu
  d’événement réellement modifié pouvait être masqué par la même empreinte
  déclarée, et l’agrégation de deux très grands montants pouvait produire
  `Infinity` tout en restant appliquée ;
- **92/100 — `NO_GO` factuel par incomplétude de contrôle**, l’audit ayant été
  interrompu avant sa vérification indépendante complète. Ce troisième avis ne
  démontre pas un défaut de fond, mais il ne fournit pas non plus la preuve
  gouvernante attendue.

R4 corrige la totalité des défauts démontrés et des P2 UX :

1. déduplication fondée sur l’empreinte **et** sur un snapshot sémantique
   comparé ; montant, devise, type, date d’événement, période close et clé
   métier modifiés imposent `STOP`, même si l’empreinte déclarée ne change pas ;
2. agrégations du grand livre et grandeurs dérivées du rapprochement
   revalidées après calcul ; tout débordement est non appliqué ou neutralisé ;
3. valeur de seuil manquante distinguée d’une valeur invalide ;
4. huit tests adversariaux supplémentaires portent le moteur à `33/33` ;
5. les quatre cartes TCO ne créent plus de landmarks `article` sans titre ;
6. MRR, ARR, TCO et Merchant of Record sont développés dès leur entrée
   pédagogique ;
7. six cas avancés ajoutés : paiement partiel, chargeback, conversion d’essai,
   pause/reprise, modification rétroactive et changement fiscal en période ;
8. classeur porté à vingt-quatre tests et douze sources, avec HMRC, CRA, ATO
   et MTC réimportés et contrôlés explicitement.

## 10. Contre-audits R4 et corrections R5

Les contre-audits R4 ont rendu :

- **93/100 — `NO_GO` UX**, avec deux P1 : chiffres du hero absents du rendu
  et divergence entre les vingt-quatre tests de l’article et du XLSX ;
- **90/100 — `NO_GO` factuel**, avec deux P1 : créance Planor annoncée à
  `100 €` au lieu de `350 €` sans l’avoir, et preuve exacte des douze URL
  insuffisante dans le validateur ;
- **92/100 — `NO_GO` technique par protocole incomplet**, sans nouveau défaut
  produit P1 démontré, mais sans vérification indépendante achevée du
  manifeste.

R5 corrige ces quatre défauts produit et les P2 utiles :

1. le gabarit affiche le nombre et le libellé de chaque badge du hero ;
2. un fichier canonique unique porte les identifiants, familles, cas et
   explications des vingt-quatre recettes ; article, générateur et validateur
   vérifient leur parité ;
3. la phrase Planor indique `350 €` de créance sans l’avoir ;
4. les deux copies réimportées du XLSX sont comparées aux quinze lignes
   attendues, champ par champ ;
5. New York, le Texas et la Californie rendent la divergence américaine
   concrète sans fabriquer de règle nationale ;
6. la première cible du sommaire est un vrai `h2` ;
7. la feuille `TESTS` traduit quote-to-cash et demandait aussi le gel de la
   colonne `Cas`, mais le contre-audit a prouvé que R5 ne le sérialisait pas ;
8. l’outil affiche les résultats de rapprochement avec deux décimales ;
9. le classeur contient quinze sources, toutes datées et assorties de limites
   et d’une action de maintenance.

## 11. Contre-audits R5 et correction R6

Les audits du manifeste R5 exact ont rendu :

- **98/100 — `GO_LOCAL_DRAFT` UX**, sans P0/P1 et avec un P2 : aucun volet
  réellement figé dans les deux XLSX ;
- **98/100 — `GO_LOCAL_DRAFT` factuel**, sans P0/P1 et avec maintenance
  périodique des sources ;
- **88/100 — `NO_GO` technique**, en raison d’une reproduction indépendante
  inachevée du validateur, du même défaut de volet figé et de la duplication
  des sources entre scripts ;
- **94/100 — `GO_LOCAL_DRAFT avec réserve`** au contrôle de clôture, sans
  P0/P1 produit et avec le même défaut OpenXML confirmé.

R6 ferme ces réserves :

1. les lignes `1:5` et colonnes `A:C` sont sérialisées dans le volet figé de
   `TESTS`, avec reprise en `D6` ;
2. le validateur lit l’OpenXML des deux copies et contrôle le volet et ses
   sélections avant leur réimportation ;
3. générateur et validateur lisent désormais la même liste canonique de quinze
   sources ;
4. génération et validation sont rejouées avec le runtime documentaire Codex
   explicitement déclaré ;
5. les preuves distinguent les seize liens de la section « Sources » de
   l’article des quinze lignes complémentaires de maintenance du classeur.

Le candidat R6 conserve `55/55` tests ciblés et un ESLint ciblé sans défaut.
Les deux XLSX de `40 127` octets portent le même SHA-256
`66dffc0ca6766d9362ffdccd2d79c61fa6238eee239c43ed98087c39d3436474`.

## 12. Verdict R6

Le manifeste candidat R6 a été vérifié à `90/90`, puis les contre-audits ciblés
ont rendu :

- **98/100 — `GO_LOCAL_DRAFT` technique**, sans P0/P1 ; seul P2 : aucun
  recalcul sous Microsoft Excel réel ;
- **99/100 — `GO_LOCAL_DRAFT` factuel**, sans P0/P1/P2 ;
- **100/100 — `GO_LOCAL_DRAFT` UX**, sans P0/P1/P2.

Le guide, l’outil et le classeur atteignent donc le niveau premium local
attendu. Le manifeste final est généré après cette seule mise à jour de statut.

Ce `GO_LOCAL_DRAFT` ne signifie ni commit, ni push, ni déploiement, ni
publication, ni indexation.
