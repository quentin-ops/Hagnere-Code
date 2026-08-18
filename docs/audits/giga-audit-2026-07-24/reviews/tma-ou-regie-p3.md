# Contre-audit P3 — `tma-ou-regie`

Date du contrôle : 24 juillet 2026  
Nature : contre-audit indépendant, lecture seule du snapshot P2  
Verdict : **NO-GO tant que P1-01 n’est pas corrigé et retesté**  
Note : **93/100**

## 1. Résumé exécutif

Le guide public est nettement au-dessus d’un article SEO générique : il répond
immédiatement à la question d’un dirigeant, corrige une confusion fréquente entre
TMA et régie, compare sept options sur le même besoin, montre quand son propre
verdict peut changer, chiffre le temps interne et le coût d’une panne, puis
termine par une recommandation conditionnelle et non commerciale.

Les calculs publiés ont résisté à un recalcul indépendant. Les sources primaires
rouvertes soutiennent les affirmations qui leur sont attribuées et leurs limites
de transfert au contrat privé sont correctement expliquées. Le rendu réel est
propre de 320 à 1 440 px, les deux thèmes fonctionnent, les liens internes
répondent et l’outil interactif recalcule, valide, copie, restaure et prépare son
CSV.

Le guide ne peut toutefois pas recevoir un GO final : le calculateur appelle
« prestataire » le coût de l’option internalisée, dans le formulaire, le
résultat, le résumé copié et le CSV dynamique. Le total de 108 240 € est juste,
mais son poste principal de 102 000 € est mal nommé. C’est une erreur
sémantique visible dans l’outil de décision principal, pas une simple préférence
de style.

## 2. Intégrité du snapshot audité

Le manifeste
`docs/research/manifests/tma-ou-regie-p2.sha256` a été vérifié **avant** la
lecture et les essais :

- 11 fichiers sur 11 : `OK` ;
- page, registre, recherche, approfondissement, OG, bibliothèque de calcul,
  composant, tests et CSV correspondaient tous au snapshot déclaré ;
- aucun fichier de production, de recherche, de test ou de manifeste n’a été
  modifié pendant ce contre-audit.

## 3. Défauts classés

### P0

**Aucun P0 identifié.**

### P1-01 — Le coût d’une compétence internalisée est présenté comme un coût de prestataire

#### Preuves

- `src/lib/tma-tco.ts:55-60` applique à toutes les options le libellé
  « Prestataire par an » et une aide limitée aux montants externes.
- `src/components/guides/TmaTcoCalculator.tsx:262-264` résume la formule par
  « Coût prestataire ».
- `src/components/guides/TmaTcoCalculator.tsx:297-300` affiche
  systématiquement « Prestataire … » dans chaque carte résultat.
- `src/lib/tma-tco.ts:356-365` propage « Prestataire annuel saisi » dans le
  résumé copié.
- `src/lib/tma-tco.ts:386-416` propage le même vocabulaire dans le CSV
  dynamique.
- Le rendu réel confirme, pour la carte **Interne** :
  « Prestataire 102 000,00 € · pilotage 6 240,00 € ».

Le CSV statique est, lui, correctement intitulé « Prestataire ou delivery » :
il ne présente pas ce défaut.

#### Impact

Un dirigeant qui compare une embauche ou une fonction internalisée ne paie pas
un prestataire de 102 000 €. Le libellé peut l’inciter à saisir le mauvais poste
ou à mal lire la ventilation du TCO. Il dégrade aussi la crédibilité du
comparateur précisément au moment où celui-ci prétend mettre les sept solutions
sur une base homogène.

#### Correction exigée

1. Remplacer le libellé partagé par une formulation valable pour les sept
   chemins, par exemple « Coût externe ou coût de la fonction par an ».
2. Expliquer dans l’aide qu’il s’agit, selon l’option, du prestataire, de la
   capacité, des lots, des outils ou du coût chargé de la fonction internalisée.
3. Remplacer « Prestataire » dans la formule et les cartes par
   « Externe / delivery », ou utiliser un libellé propre à chaque option.
4. Aligner le résumé copié et le CSV dynamique.
5. Ajouter un test de non-régression qui interdit le mot « prestataire » devant
   les 102 000 € de l’option `internal-hire`.

#### Critère de levée

Sur l’écran, dans le résumé copié et dans le CSV téléchargé, la ligne
« Compétence internalisée » ne doit plus qualifier ses 102 000 € de
« prestataire ». Les sept TCO de référence doivent rester inchangés.

### P2-01 — L’hypothèse des horizons 24 et 36 mois devrait être écrite dans l’interface

Le calcul est cohérent : les coûts annuels et l’exposition résiduelle sont
répétés à l’identique, tandis que la mise en route et la sortie ne sont comptées
qu’une fois. L’écran ne dit cependant pas explicitement que le prix annuel, le
volume, le temps de pilotage et le risque restent constants, sans inflation,
renégociation ni variation de charge.

Ajouter une phrase courte sous le choix d’horizon éviterait de donner une fausse
précision à une projection de trois ans.

### P2-02 — La zone de résultat peut être trop bavarde pour un lecteur d’écran

La grille complète des sept cartes est un `role="status"` avec
`aria-atomic="true"` (`TmaTcoCalculator.tsx:268-309`). Toute modification peut
donc provoquer l’annonce de l’ensemble des sept résultats et écarts.

Conserver la grille comme contenu normal et réserver la zone live à une phrase
compacte, par exemple « Recalcul effectué : l’hybride est le total le plus bas à
80 340 € », puis vérifier le parcours avec VoiceOver.

## 4. Recalcul indépendant

### 4.1 Capacité et reports

Besoin mensuel relu :
`5, 7, 6, 9, 6, 7, 5, 7, 10, 6, 10, 12`, soit **90 jours**.

Pour une capacité de huit jours par mois :

- consommation utile dans le mois : **81 jours** ;
- jours expirés : **15 jours** ;
- dépassement : **9 jours**.

Avec report trimestriel :

| Trimestre | Besoin | Utilisés | Perdus | Dépassement |
|---|---:|---:|---:|---:|
| T1 | 18 | 18 | 6 | 0 |
| T2 | 22 | 22 | 2 | 0 |
| T3 | 22 | 22 | 2 | 0 |
| T4 | 28 | 24 | 0 | 4 |
| **Total** | **90** | **86** | **10** | **4** |

Avec report annuel, les 90 jours sont absorbés par 96 jours achetés et six jours
restent inutilisés.

### 4.2 Sept TCO sur douze mois

| Option | Recalcul indépendant |
|---|---:|
| Formule hybride | **80 340 €** |
| Capacité avec report annuel | **81 360 €** |
| Temps réellement mobilisé | **87 600 €** |
| Capacité sans report | **89 010 €** |
| Lots clairement définis | **92 280 €** |
| Interventions ponctuelles | **103 440 €** |
| Compétence internalisée | **108 240 €** |

Le report trimestriel donne **84 760 €**. Tous les montants publiés sont
reproductibles à partir des hypothèses annoncées.

### 4.3 Seuils et pannes

- seuil des jours variables de l’hybride :
  `(81 360 - 38 400 - 6 240) / 850 = 43,2 jours` ;
  avec 42 jours au départ, deux jours entiers supplémentaires inversent bien
  l’ordre ;
- seuil de pilotage du temps passé :
  `(80 340 - 72 000) / (52 × 60) = 2,673 h/semaine`, soit environ
  **2 h 40** ;
- prime annuelle de couverture de 12 000 € face à une panne de 3 620 € :
  **3,31 incidents** évités intégralement, ou **6,63** si la couverture n’évite
  que 50 % de chaque impact ;
- trois impacts de panne recalculés : **175 €**, **3 620 €** et **35 400 €**.

Le texte ne transforme pas ces illustrations en prix de marché, en promesse de
rentabilité ou en garantie de rétablissement.

## 5. Sources et exactitude

Les sources suivantes ont été rouvertes sur leurs pages primaires :

- Légifrance, CCAG-TIC, article 38 : définition et familles de TMA ;
- CNIL, maintenance et fin de vie des matériels et logiciels, mise à jour du
  14 mars 2024 : traçabilité des interventions et accès temporaires ;
- CNIL, gestion de la sous-traitance, mise à jour du 14 mars 2024 :
  responsabilités, incidents, restitution et audits ;
- GOV.UK, Model Services Contract Guidance v2.2(A), septembre 2025 :
  temps passé, prix fixes, plafonds et choix selon le degré de définition ;
- CanadaBuys, Buyer’s Guide, publié en janvier 2026 et modifié en mars 2026 :
  combinaison de bases de paiement et nécessité d’un plafond ;
- FAR 16.601, FAC 2026-01, effet au 13 mars 2026 : recours au temps et
  matériel lorsque l’étendue ou la durée ne peut être estimée, surveillance et
  plafond ;
- NIST IR 8286D, février 2025 : analyse d’impact ancrée dans les fonctions
  essentielles, les scénarios de perte et la tolérance au risque ;
- Cigref–Syntec 2004 : source historique, correctement présentée comme telle et
  jamais utilisée pour prétendre établir un prix actuel.

Les limites de transfert des cadres publics américain, britannique et français
vers un contrat privé français sont dites. Aucun chiffre de prix fictif n’est
attribué à une source. Aucun conflit factuel majeur n’a été trouvé.

## 6. Pédagogie, profondeur et conversion

### Points validés

- ouverture directe par le dilemme concret d’un dirigeant ;
- réponse courte exploitable avant le développement ;
- distinction claire entre nature du service et mode de facturation ;
- sept alternatives, y compris l’intervention ponctuelle et
  l’internalisation ;
- même flux de 90 jours pour éviter un comparatif truqué ;
- valorisation explicite du temps du dirigeant ou du responsable interne ;
- variantes mensuelle, trimestrielle et annuelle du report ;
- opinion professionnelle nette mais falsifiable : l’hybride est recommandé
  dans le scénario mixte, tout en montrant deux façons de renverser le verdict ;
- coût d’une panne décomposé au lieu d’être invoqué comme argument de peur ;
- contrôles contractuels, questions de comparaison et cas où il ne faut pas
  signer ;
- limites, bon et mauvais profil client, puis CTA tardif et cohérent ;
- sept questions fréquentes, dont la première réponse est immédiatement
  visible.

Le guide ne ressemble pas à une page commerciale déguisée : il peut conclure à
moins de récurrence, à une compétence interne ou à l’attente. C’est un signal
fort de crédibilité.

## 7. SEO, maillage et données structurées

- un seul H1, cohérent avec l’intention ;
- titre : « TMA ou régie : comment choisir pour votre application ? » ;
- description : « Forfait, régie, hybride ou interne ? Comparez 7 options sur
  12 mois, le report des jours, 2 seuils et le coût d’une panne. » ;
- canonical :
  `https://hagnere-code.ai/guides/tma-ou-regie` ;
- JSON-LD rendu : `Article` et `BreadcrumbList` à trois éléments ;
- dates publiées : 23 juillet 2026, modification : 24 juillet 2026 ;
- 15 ancres du sommaire testées, 15 présentes ;
- les routes `/guides/contrat-tma-application`,
  `/guides/cout-maintenance-application-metier`,
  `/guides/reprendre-maintenance-site-autre-agence`,
  `/guides`, `/equipe`, `/demarrer-un-projet` et la ressource CSV répondent
  toutes en HTTP 200 sur le serveur local ;
- une CTA éditoriale vers `/demarrer-un-projet`, distincte de la CTA globale ;
- pas de balisage `FAQPage`, conformément à la gouvernance actuelle du site.

Le serveur local renvoie `noindex, nofollow`, comportement normal de
l’environnement de développement. Ce contrôle ne prouve donc pas à lui seul la
valeur `index, follow` ni l’indexation Google en production : elle doit rester
un contrôle de publication séparé.

## 8. QA réelle du rendu et des ressources

### Navigateur

Contrôle dans un vrai navigateur aux largeurs 320, 390, 768, 1 024 et
1 440 px :

- aucune largeur de document supérieure au viewport ;
- aucune barre de défilement horizontale globale ;
- tableaux transformés en cartes lisibles sur mobile ;
- calculateur contenu dans la largeur utile à chaque palier ;
- thèmes clair et sombre lisibles ;
- aucune erreur ni aucun avertissement dans les journaux navigateur ;
- 29 champs numériques, trois horizons et trois actions présents.

Interactions validées :

- 12 mois : hybride à 80 340 € ;
- 24 mois : hybride à 160 680 € ;
- coût interne passé de 60 à 40 €/h sur 24 mois : hybride à 156 520 € ;
- valeur négative : alerte visible, copie et téléchargement désactivés ;
- restauration : retour à 60 €/h et 12 mois ;
- copie : confirmation dans la zone de statut ;
- téléchargement dynamique : confirmation « Le fichier CSV a été préparé sur
  votre appareil. ».

Le viewport a été réinitialisé et l’onglet d’audit fermé après le contrôle.

### CSV statique

- HTTP 200 ;
- `Content-Type: text/csv; charset=UTF-8` ;
- 1 865 octets ;
- 12 lignes et 12 colonnes sur chaque ligne ;
- sept exemples et quatre lignes vierges ;
- hash servi identique au fichier du snapshot :
  `f235b48b4896ea481f13caa3ba0eb6a6d3525454314421b92fac113f52930556` ;
- formules `H`, `I`, `J` et `K` relues et cohérentes avec le TCO annoncé.

Limite de ce contre-audit : le chargeur de dépendances tableur du workspace
n’était pas disponible. Le CSV a donc été vérifié structurellement, par
recalcul indépendant et après téléchargement réel, mais pas ouvert/recalculé
dans un moteur Excel ou LibreOffice au cours de cette passe.

### Image sociale

- route OG : HTTP 200 ;
- PNG réel de **1 200 × 630 px** ;
- titre, amplitude des sept options, effet du report, seuil de pilotage et
  amplitude des pannes lisibles ;
- mention explicite « Calcul fictif, méthode reproductible ».

## 9. Contrôles automatisés

- TypeScript `npx tsc --noEmit` : **OK** ;
- ESLint ciblé : **OK** ;
- Prettier ciblé hors CSV : **OK** ;
- `git diff --check` : **OK** ;
- tests du calcul TMA, du calculateur et de la langue humaine : **OK** ;
- campagne élargie : **65/66** tests passent.

L’unique échec de la campagne élargie porte sur le hash d’un manifeste
`prioriser-fonctionnalites-mvp-saas`, modifié en parallèle dans le worktree. Il
ne concerne aucun fichier TMA et ne remet pas en cause le snapshot TMA, dont les
11 hashes ont tous été validés.

## 10. Barème

| Axe | Note |
|---|---:|
| Pédagogie et adéquation aux dirigeants | 19/20 |
| Profondeur, comparaison et opinion professionnelle | 20/20 |
| Exactitude des calculs, faits et limites | 20/20 |
| SEO, maillage et conversion | 14/15 |
| Outil, ressource et accessibilité | 11/15 |
| Reproductibilité et QA | 9/10 |
| **Total** | **93/100** |

## 11. Gate de sortie

**NO-GO actuel.**

Après correction de P1-01, exécuter au minimum :

1. tests bibliothèque + composant ;
2. rendu 390 px et 1 440 px ;
3. contrôle du champ, de la carte Interne, du résumé copié et du CSV dynamique ;
4. vérification que les sept TCO sont inchangés ;
5. nouveau `tsc`, ESLint et `git diff --check`.

P2-01 et P2-02 sont recommandés dans la même petite passe. En l’absence de
nouvelle régression, le guide pourra alors recevoir un **GO P3**.

---

## 12. Revalidation du snapshot corrigé — 24 juillet 2026

Cette section revalide le **nouveau** snapshot P2. Elle remplace le verdict de
sortie de la section 11 sans effacer l’historique du premier contre-audit.

### 12.1 Verdict actualisé

**GO P3 local — 98/100**

| Gravité | État après correction |
|---|---|
| P0 | **Aucun** |
| P1 | **Aucun** |
| P2 | **Aucun restant sur les trois corrections rejouées** |

Le P1-01 et les deux P2 du premier passage sont levés. Les sept coûts de
référence, les seuils et les impacts de panne restent mathématiquement justes.
La qualification des montants incomplets est désormais plus prudente que dans
le premier snapshot : l’outil affiche les coûts connus, mais ne proclame aucun
vainqueur tant que des postes importants restent à confirmer.

Ce GO porte sur le snapshot local vérifié. Il ne constitue pas une preuve de
déploiement, de valeur `index, follow` en production ni d’indexation Google.

### 12.2 Intégrité vérifiée avant toute nouvelle lecture

La commande
`shasum -a 256 -c docs/research/manifests/tma-ou-regie-p2.sha256` a été
exécutée avant l’ouverture des fichiers du nouveau snapshot.

Résultat : **11/11 `OK`** :

1. recherche éditoriale ;
2. approfondissement ;
3. page ;
4. image OG ;
5. registre des guides ;
6. test de langue humaine ;
7. bibliothèque TCO ;
8. tests de la bibliothèque ;
9. calculateur ;
10. tests du calculateur ;
11. CSV statique.

### 12.3 Levée du P1-01 — internalisation correctement qualifiée

Le faux libellé « prestataire » n’est plus appliqué aux 102 000 € de la
compétence internalisée :

- champ affiché :
  **« Coût externe ou coût de la fonction par an »** ;
- aide :
  le poste peut représenter un prestataire, une capacité, des lots, des outils
  ou le coût chargé de la fonction internalisée ;
- carte **Interne** :
  **« Externe / fonction 102 000 € · temps de votre équipe 6 240 € »** ;
- résumé copié :
  **« Coût externe ou coût de la fonction saisi : 102 000 € par an »** ;
- CSV dynamique :
  ligne `Compétence internalisée` à 102 000 €, sans colonne ni valeur
  « prestataire » ;
- CSV statique :
  même qualification générique dans ses colonnes.

Une génération directe du résumé et du CSV a confirmé :

- `FALSE_INTERNAL_LABEL=false` ;
- résumé : 108 240 € de coûts renseignés, 102 000 € de fonction et 6 240 € de
  temps de l’équipe ;
- CSV dynamique : huit lignes, treize champs, option internalisée marquée
  `non classé` tant que ses coûts inconnus restent signalés.

**P1-01 levé.**

### 12.4 Coûts renseignés et coûts inconnus

Les sept exemples démarrent maintenant avec
`hasUnknownCosts=true`. Les zéros de reprise, d’outils, de sortie ou de pertes
ne sont donc plus silencieusement assimilés à des coûts complets.

Au rendu initial :

- les sept montants restent visibles ;
- chaque carte porte **« Coût renseigné »** ;
- chaque carte indique
  **« Coût partiel — exclu du classement tant que des postes restent à
  confirmer »** ;
- la zone d’état annonce :
  **« aucun classement tant que chaque option conserve au moins un poste
  important à confirmer »**.

Le comportement de classement a été rejoué :

1. avec les sept cases « à confirmer » cochées : aucun classement ;
2. après confirmation explicite des sept options, sur 24 mois :
   hybride premier à **160 680 €** ;
3. après reclassement de l’hybride en coût incomplet :
   hybride exclu et capacité reportée première à **162 720 €**.

Le texte de limite indique aussi qu’un zéro est admis uniquement si le poste est
réellement nul ou déjà inclus et documenté. Le résumé et les deux CSV conservent
un champ explicite « Postes importants à confirmer ».

Cette correction évite désormais de transformer l’absence d’information en
certitude économique.

### 12.5 Horizons 24 et 36 mois

L’interface explique maintenant, juste sous les trois horizons, que :

- les coûts annuels, le temps de l’équipe et les risques déclarés sont répétés
  sans changement ;
- la reprise et la sortie ne sont comptées qu’une fois ;
- la projection ne simule ni inflation, ni renégociation, ni variation de
  charge.

Le comportement a été vérifié dans le navigateur et dans les tests :

- hybride sur 24 mois, sans autre changement : **160 680 €** ;
- avec 5 000 € de coût unique et 1 200 € de risque annuel :
  `148 200 + 12 480 + 5 000 + 2 400 = 168 080 €` ;
- le poste unique n’est pas doublé.

**P2-01 levé.**

### 12.6 Zone live et accessibilité

La grille visible des sept cartes n’est plus elle-même un
`role="status"` atomique. Une phrase séparée, invisible visuellement mais
accessible, annonce seulement :

- l’absence de classement lorsque tout reste à confirmer ; ou
- l’option comparable la moins chère et son montant.

Exemple réel après confirmation :
**« Recalcul effectué : Hybride possède le coût renseigné le plus faible parmi
les options sans poste à confirmer, à 160 680 € »**.

Le lecteur d’écran n’a donc plus à réannoncer les sept cartes à chaque saisie.
Les 29 champs numériques, trois radios et sept cases de confirmation conservent
leurs libellés et leur contexte de groupe.

**P2-02 levé.**

### 12.7 Recalcul indépendant inchangé

Les résultats du premier audit ont été rejoués :

| Contrôle | Résultat revalidé |
|---|---:|
| Besoin annuel | 90 jours |
| Sans report mensuel | 81 utilisés, 15 perdus, 9 dépassés |
| Report trimestriel | 86 utilisés, 10 perdus, 4 dépassés |
| Formule hybride | 80 340 € renseignés |
| Capacité avec report annuel | 81 360 € renseignés |
| Temps réellement mobilisé | 87 600 € renseignés |
| Capacité sans report | 89 010 € renseignés |
| Lots clairement définis | 92 280 € renseignés |
| Interventions ponctuelles | 103 440 € renseignés |
| Compétence internalisée | 108 240 € renseignés |
| Seuil de jours variables | 43,2 jours |
| Seuil de temps interne | 2,673 h/semaine |
| Impacts de panne | 175 €, 3 620 €, 35 400 € |

Ces montants sont maintenant présentés comme des **coûts renseignés partiels**
tant que la reprise, l’outillage, la sortie ou les pertes éventuelles ne sont
pas confirmés. Le changement de qualification n’a altéré aucun calcul.

### 12.8 CSV statique et dynamique

#### CSV statique

- **12 lignes × 13 colonnes** ;
- sept exemples et quatre lignes personnalisables ;
- 2 026 octets ;
- hash local et hash servi identiques :
  `e1a0de775b07b8396aac2a9bb7c2f9f61b99987a682b7390f9db8887958b4f29` ;
- HTTP 200 ;
- `Content-Type: text/csv; charset=UTF-8` ;
- colonne dédiée aux postes à confirmer ;
- formules relues :
  - `I = C × horizon / 12` ;
  - `J = D × 52 × E × horizon / 12` ;
  - `K = G × horizon / 12` ;
  - `L = I + J + F + K`.

#### CSV dynamique

- huit lignes × treize colonnes ;
- BOM UTF-8 ajouté au téléchargement ;
- colonne « Coût externe ou coût de la fonction » ;
- colonne « Postes importants à confirmer » ;
- écart exporté comme `non classé` pour une option incomplète ;
- téléchargement réel confirmé dans le navigateur.

Limite d’environnement inchangée : le chargeur de dépendances tableur n’était
pas exposé. Conformément aux règles du runtime, aucune bibliothèque de
substitution n’a été installée. Le CSV a été vérifié par sa structure, ses
formules, son hash servi, sa génération dynamique et un recalcul indépendant,
mais pas ouvert dans un moteur Excel ou LibreOffice pendant cette passe.

Cette réserve concerne la profondeur du contrôle outillé, pas une anomalie
constatée dans le CSV.

### 12.9 Sources, SEO et rendu

Les sources primaires ont été rouvertes ou recontrôlées :

- Légifrance, article 38 du CCAG-TIC ;
- CNIL, maintenance et sous-traitance ;
- GOV.UK, Model Services Contract Guidance v2.2(A), septembre 2025 ;
- CanadaBuys, Buyer’s Guide, version courante 2026 ;
- FAR 16.601, version courante 2026 ;
- NIST IR 8286D, février 2025 ;
- Cigref–Syntec 2004, toujours qualifiée de source historique.

Aucune nouvelle contradiction n’a été trouvée. Le guide conserve la distinction
entre recommandations de méthode, cadres publics étrangers et contrat privé
français.

SEO local revalidé :

- un H1 ;
- canonical
  `https://hagnere-code.ai/guides/tma-ou-regie` ;
- métadescription cohérente avec les sept options et les deux seuils ;
- JSON-LD `Article` et `BreadcrumbList` ;
- dates de publication et de modification présentes ;
- une CTA éditoriale ;
- quatorze ancres sur quatorze présentes ;
- page, ressource, trois guides voisins et CTA : HTTP 200 ;
- OG : PNG réel de **1 200 × 630 px**.

Le `noindex, nofollow` observé localement reste le comportement attendu de
l’environnement de développement.

Rendu et interactions réels :

- largeurs 320, 390, 768, 1 024 et 1 440 px ;
- aucune largeur de document supérieure au viewport ;
- calculateur : 288, 358, 736 puis 768 px de largeur utile ;
- nouveaux textes et contrôles lisibles sur mobile ;
- aucun avertissement ni aucune erreur dans les journaux navigateur ;
- copie, téléchargement, restauration et classement conditionnel fonctionnels ;
- émulation responsive supprimée et onglet d’audit fermé.

### 12.10 Contrôles automatisés rejoués

- TypeScript : **OK** ;
- ESLint ciblé : **OK** ;
- Prettier ciblé : **OK** ;
- `git diff --check` : **OK** ;
- tests TMA, calculateur, langue humaine, registre, ressources et données
  structurées : **OK** ;
- campagne élargie : **66/67 tests passent**.

L’unique échec reste extérieur au snapshot TMA : le hash P4 concurrent de
`prioriser-fonctionnalites-mvp-saas.md`. Les 11 hashes TMA sont tous valides et
les deux suites TMA passent intégralement.

### 12.11 Note actualisée

| Axe | Note revalidée |
|---|---:|
| Pédagogie et adéquation aux dirigeants | 19/20 |
| Profondeur, comparaison et opinion professionnelle | 20/20 |
| Exactitude, qualification et limites | 20/20 |
| SEO, maillage et conversion | 15/15 |
| Outil, ressource et accessibilité | 15/15 |
| Reproductibilité et QA | 9/10 |
| **Total** | **98/100** |

### 12.12 Gate final

**GO P3 local.**

Conditions encore séparées de ce GO :

1. vérifier `index, follow`, canonical, JSON-LD, OG et CSV sur l’URL de
   production après déploiement ;
2. ne pas attribuer au guide une indexation Google qui n’a pas été observée ;
3. conserver dans la publication le snapshot dont les 11 hashes ont été
   validés.

## 13. Micro-revalidation finale de langue — 24 juillet 2026

**Verdict : GO P3 maintenu — 98/100.**

- Le nouveau manifeste P2 a été contrôlé avant lecture : **11/11 hashes OK**.
- Les trois suites ciblées ont été rejouées : **44/44 tests passent**.
- Les formulations techniques visées sont bien remplacées dans la page par du
  français courant : « quelques jours réservés », « temps réellement utilisé »
  et « temps passé par votre équipe à trier, décider et vérifier ».
- Les sept coûts renseignés restent strictement inchangés :
  **80 340 €, 81 360 €, 87 600 €, 89 010 €, 92 280 €, 103 440 € et
  108 240 €**.
- Le calculateur conserve l’absence de classement lorsque les postes importants
  restent à confirmer.
- Le faux libellé de prestataire pour l’internalisation reste absent de l’écran,
  du résumé et des CSV.
- Le résumé qualifie toujours les 102 000 € comme
  « coût externe ou coût de la fonction ».
- Le CSV dynamique reste à **8 × 13** et le CSV statique à **12 × 13**.
- `git diff --check` reste sans erreur.

État des défauts après cette seule finition de langue :

| Gravité | Résultat |
|---|---|
| P0 | **Aucun** |
| P1 | **Aucun** |
| P2 de langue visé | **Levé** |

Aucune régression de calcul, de qualification, de libellé, de classement ou
d’export n’a été détectée. Les réserves de production énoncées en section 12.12
restent séparées de ce GO local.
