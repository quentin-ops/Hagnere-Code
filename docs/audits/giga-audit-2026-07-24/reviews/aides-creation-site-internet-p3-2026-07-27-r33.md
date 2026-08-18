# Candidat correctif R33 — `aides-creation-site-internet`

Date de gel : **27 juillet 2026**

## Verdict avant contre-audit

**R33 est validé techniquement en local et reste sans note, sans GO et sans
autorisation P4.**

Les deux contre-audits froids de R32 ont rendu deux NO-GO :

| Axe | Note R32 | Sévérités | Verdict |
| --- | ---: | --- | --- |
| Faits, droit, finance et moteur | 85/100 | P0 : 0 ; P1 : 5 ; P2 : 1 | NO-GO |
| Expérience, pédagogie et accessibilité | 83/100 | P0 : 0 ; P1 : 5 ; P2 : 2 | NO-GO |

Leur union dédupliquée compte **10 P1 et 3 P2**. R33 traite cette union comme
un même contrat public : une donnée masquée, une catégorie de soutien ambiguë
ou une hypothèse absente ne peut jamais produire une décision favorable. Les
notes R32 ne sont pas transférées au nouveau candidat.

## Registre de fermeture R32 → R33

| ID | Défaut R32 | Contrat et preuve R33 |
| --- | --- | --- |
| R33-P1-01 | Après notification, le moteur retournait avant de comparer le coût de l’attente. | La comparaison utilise désormais la contribution notifiée, puis produit `launch-after-notification` lorsque l’attente documentée l’atteint ou la dépasse. Le cas 1 650 € contre 2 700 € est testé. |
| R33-P1-02 | Une notification pouvait devenir budgétable avec devis, TVA, assiette, taux, plafond et coût d’attente absents. | Devis HT, TVA totale, assiette, taux, plafond, délai, marge et coûts sont obligatoires pour une subvention non payée. Chaque absence produit un blocage explicite ; une valeur 0 reste distinguée d’une valeur absente. |
| R33-P1-03 | Un paiement masqué continuait de bloquer après retour à `written` ou `none`. | Le composant purge notification et paiement lors d’un changement d’étape ; le moteur ignore en plus tout champ hors périmètre de l’état actif. La défense existe donc dans l’interface et dans le calcul. |
| R33-P1-04 | Un devis multi-taux et une TVA partiellement récupérable étaient impossibles à représenter honnêtement. | L’utilisateur saisit la TVA totale des lignes, sans taux moyen. Le mode de récupération devient `totale`, `partielle`, `nulle` ou `inconnue`. Une récupération partielle exige son montant exact. Les cas 11 265 € TTC multi-taux et 11 000 € de coût économique sont testés. |
| R33-P1-05 | Un prêt ou une garantie pouvait être saisi comme une contribution qui réduisait le coût. | Le type de soutien précède tout calcul : subvention, accompagnement, prêt/garantie, création, formation ou effet fiscal/comptable. Seule la subvention ouvre les champs de notification et peut alimenter le budget. Tous les autres instruments restent à 0 € dans ce calcul. |
| R33-P1-06 | Le focus clavier tombait sur `BODY` après chaque transition. | Chaque titre d’étape possède une référence et `tabIndex={-1}`. Toute navigation concentre le focus sur le titre nouvellement affiché et une annonce live donne l’étape courante. Le parcours 1 → 2 → 3 est testé. |
| R33-P1-07 | Aides-territoires n’était plus une porte d’entrée pertinente pour les entreprises depuis son recentrage de mars 2026. | La porte est remplacée par `Les-aides.fr — réseau CCI`, avec une limite explicite : le référencement ne vaut ni éligibilité ni accord. France Num reste la porte numérique. Conseillers-Entreprises est proposé comme recours humain, sans promesse de financement. |
| R33-P1-08 | Le tri de 3–5 minutes apparaissait après environ 3 170 mots et n’était pas annoncé au sommaire. | Le composant est désormais placé après la réponse initiale et avant le long sommaire. Son identifiant `tri-aides-site` est également déclaré dans le sommaire. |
| R33-P1-09 | L’export omettait les hypothèses qui permettaient de reproduire le calcul. | Le TXT reprend le type de soutien, toutes les entrées brutes, les inconnues, la TVA totale et récupérable, les montants notifié/payé, le délai, la marge, les coûts, les trois formules, le coût économique, le besoin maximal de trésorerie et les preuves à joindre. |
| R33-P1-10 | Le contexte `prose` écrasait les couleurs du bandeau en thème clair. | Le composant est isolé par `not-prose`. Les couleurs du bandeau et des résultats ne dépendent plus des règles typographiques de l’article. |
| R33-P2-01 | L’égalité `0 >= 0` pouvait fabriquer un arbitrage de lancement. | Les branches d’arbitrage exigent désormais une aide de comparaison strictement positive. |
| R33-P2-02 | La note de coût parlait toujours de fourchette, même avec un montant exact. | La note varie selon la récupération de TVA : exacte HT, exacte TTC, exacte partielle ou fourchette inconnue. |
| R33-P2-03 | Les aides contextuelles n’étaient pas reliées aux champs et les erreurs n’étaient pas annoncées. | Tous les champs visibles possèdent un `aria-describedby`. Le résultat et le résumé des blocages utilisent une région live ; les blocages ont le rôle `alert`. |

## Vérification des portes actuelles et benchmark

Les sources ont été rouvertes le 27 juillet 2026 :

- France Num reste un moteur destiné aux aides numériques des TPE et PME ;
- Les-aides.fr est édité par la CCI Hauts-de-France pour le réseau des CCI de
  France. Ce n’est pas un portail gouvernemental et son compteur n’est pas
  figé dans la page ;
- Aides-territoires annonce un recentrage sur les collectivités et
  établissements publics à compter de mars 2026. R33 ne dit pas qu’il est
  fermé aux entreprises : il cesse simplement de le recommander comme porte
  d’entrée ;
- Conseillers-Entreprises couvre le développement de l’activité sur internet,
  mais n’est ni un moteur d’aides ni une garantie de financement.

La séparation préalable des instruments rejoint les architectures publiques
observées auprès de France Num, de la Commission européenne, de la SBA
américaine, de GOV.UK, du Canada Benefits Finder et de KfW : orientation,
type de soutien, conditions, décision puis versement restent des étapes
distinctes. Ces références étrangères servent de benchmark de méthode et ne
créent aucune éligibilité française.

## Architecture publique R33

Le graphe public reste :

`page.tsx → SiteAidQuickCheck.tsx → site-aid-quick-check.ts`

Les anciens dossiers et moteurs lexicaux restent hors du graphe public. Le
composant R33 mesure **40 616 octets** et le moteur **29 502 octets**. Aucun
champ de texte libre, aucun appel réseau et aucune analyse sémantique ne sont
présents dans le tri.

Le guide servi mesure **6 889 mots visibles, soit 34 minutes à 200
mots/minute**. Le parcours court apparaît dès l’ouverture et garde sa promesse
de trois à cinq minutes pour un lecteur disposant déjà de la fiche et de son
devis.

## Validation locale avant gel

| Contrôle | Résultat |
| --- | --- |
| Tests cœur du tri, interface et contrat éditorial | **42/42** |
| Batterie ciblée guide, catalogue, langage, sitemap, indexation et structure | **108/108** |
| TypeScript `--noEmit` | **vert** |
| ESLint ciblé | **vert** |
| `git diff --check` ciblé | **vert** |
| Build Next.js direct | **159/159 pages générées** |
| Route publique | **présente dans le build et servie localement** |
| Mesure de lecture servie | **6 889 mots / 34 min** |
| Cohérence du temps de lecture de ce guide | **verte** |

Le contrôle SEO global reste à **491/492**. Son unique échec est le hash P4
préexistant de `prioriser-fonctionnalites-mvp-saas` pour le fichier partagé
`src/lib/guides.ts`. Le vérificateur d’artefact conserve deux écarts de temps
de lecture hors périmètre sur `crm-sur-mesure-ou-hubspot` et `seo-local-pme`.
Ces défauts ne sont pas masqués et ne valent pas validation globale du dépôt.

## Porte suivante

R33 doit recevoir deux nouveaux audits froids, indépendants et strictement en
lecture seule sur le même manifeste :

1. faits, droit, finance, calculs, export et saisies adverses ;
2. intention, pédagogie, accessibilité, mobile, thèmes et comparaison
   internationale.

La porte P4 exige au moins **92/100 sur chaque axe, aucun P0 et aucun P1**. Le
BAT navigateur final ne sera exécuté qu’après ce double GO.
