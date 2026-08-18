# Candidat correctif R35 — `aides-creation-site-internet`

Date de gel : **27 juillet 2026**

## Verdict avant contre-audit

**R35 est validé techniquement en local et reste sans note, sans GO et sans
autorisation P4.**

Les deux contre-audits froids de R34 ont travaillé en lecture seule sur le
même gel de 97 fichiers, resté intact avant et après :

| Axe | Note R34 | Sévérités | Verdict |
| --- | ---: | --- | --- |
| Faits, droit, finance, moteur et export | 91/100 | P0 : 0 ; P1 : 1 ; P2 : 1 | NO-GO |
| UX, pédagogie, accessibilité et rendu | 92/100 | P0 : 0 ; P1 : 1 ; P2 : 0 | NO-GO |

Manifeste R34 :
`docs/research/manifests/aides-creation-site-internet-p3-2026-07-27-r34.sha256`  
SHA-256 :
`6a8bf1990a832389a8a5779321adfe73ebc3abab0e34c682292ce9a407f48d15`

Les deux audits ont reproduit indépendamment le même P1 temporel. L’audit
factuel a aussi relevé un P2 de cohérence entre les bornes acceptées par le
moteur et celles du formateur TXT. Les notes R34 ne sont pas transférées à
R35.

## Registre de fermeture R34 → R35

### 1. Un paiement documenté ne repasse plus par des portes prévisionnelles

R34 isolait déjà assiette, taux, plafond et coût d’attente au stade payé, mais
évaluait encore avant `paid-to-reconcile` :

- la règle d’engagement avant décision ;
- la viabilité du projet avec 0 € d’aide ;
- la trésorerie nécessaire avant versement.

Un paiement et une notification valides pouvaient donc retourner
`verify-before-commitment` ou `reduce-or-finance`, alors que l’interface
promettait de rapprocher uniquement notification, facture et preuve du
versement.

R35 ferme l’état sur quatre couches :

1. le moteur n’ajoute plus ces trois réponses aux blocages ou aux avertissements
   prévisionnels lorsque `notificationStage="paid"` ;
2. les branches de décision sur l’engagement, la viabilité et la trésorerie
   sont structurellement inactives au stade payé ;
3. le passage à `paid` purge les trois réponses et l’interface masque leurs
   contrôles ;
4. le TXT les sérialise comme « Sans objet pour cet état » et demande les
   pièces utiles au rapprochement payé et aux obligations post-versement.

Le scénario adverse commun aux deux audits est désormais testé : engagement
inconnu, viabilité négative et trésorerie inconnue, avec notification et
paiement de 3 000 €. Il retourne `paid-to-reconcile`, sans blocage caché.
Les contrôles de cohérence de la source, du profil, des lignes admissibles, de
la facture, de la notification et du paiement restent actifs.

### 2. Les agrégats acceptés restent valides dans le TXT

R34 bornait correctement chaque entrée monétaire à 1 milliard d’euros, mais
réutilisait cette borne unitaire pour des résultats additionnés ou multipliés.
Un devis HT de 1 milliard plus 1 milliard de TVA, ou une attente de 120 mois à
1 milliard plus 1 milliard de frais, était calculé puis imprimé « Valeur
invalide ».

R35 conserve la borne unitaire de 1 milliard pour chaque saisie et introduit
une borne d’agrégat cohérente de 121 milliards pour les résultats calculés.
Le cas frontière produit et exporte désormais :

- facture TTC : 2 milliards d’euros ;
- coût documenté de l’attente : 121 milliards d’euros ;
- coût économique sans aide : 2 milliards d’euros.

Les nombres négatifs, non finis et les entrées unitaires supérieures à la
borne restent invalides.

## Contrôles positifs conservés de R34

R35 conserve les fermetures confirmées par les deux audits :

- qualification d’un instrument non-subvention avant toute donnée de
  subvention ;
- aide budgétée et payée à 0 € pour un prêt, une garantie ou un accompagnement ;
- notification et paiement nuls refusés comme états accomplis ;
- valeurs masquées et résiduelles ignorées ;
- rapprochement explicite entre aide théorique et notification ;
- TVA multi-taux et récupération partielle exactes ;
- export sans contradiction, `NaN` ni `Infinity` ;
- focus clavier, thèmes clair et sombre et dix largeurs sans overflow ;
- tri visible après environ 242 mots ;
- France Num, Les-aides.fr/CCI et Conseillers-Entreprises qualifiés sans
  promesse d’éligibilité ;
- benchmark international utilisé comme méthode et jamais comme droit
  applicable en France.

## Validation locale avant gel

| Contrôle | Résultat |
| --- | --- |
| Tests cœur du tri, interface et contrat éditorial | **53/53** |
| Batterie guide, catalogue, langage, sitemap, indexation et structure | **119/119** |
| TypeScript `--noEmit` | **vert** |
| ESLint ciblé | **vert** |
| `git diff --check` ciblé | **vert** |
| Build Next.js direct | **159/159 pages générées** |
| Route du guide | **HTTP 200 sur le build de production local** |
| Version servie du moteur | **`site-aid-quick-check-r4-2026-07-27`** |
| Mesure de lecture servie | **6 889 mots / 34 min** |

Le contrôle SEO global reste documenté à **491/492** : seul l’ancien hash P4
de `prioriser-fonctionnalites-mvp-saas` sur le fichier partagé
`src/lib/guides.ts` échoue hors périmètre. Le vérificateur d’artefact conserve
les deux temps de lecture hors périmètre de `crm-sur-mesure-ou-hubspot` et
`seo-local-pme`.

Ces résultats prouvent l’état local et le build servi. Ils ne prouvent ni
déploiement, ni disponibilité en production, ni indexation par Google.

## Porte suivante

R35 doit recevoir deux contre-audits ciblés et indépendants sur le même
manifeste :

1. moteur, temporalité des états, export et bornes adverses ;
2. parcours réel, purge, clavier, mobile, thèmes et restitution.

La porte P4 exige au moins **92/100 sur chaque audit, aucun P0 et aucun P1**.
Le BAT navigateur final de publication reste distinct et ne sera exécuté
qu’après ce double GO.
