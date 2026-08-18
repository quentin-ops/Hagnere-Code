# Contre-audit P3 factuel — `migrer-logiciel-metier-sans-interruption`

Date : 24 juillet 2026  
Auditeur : agent distinct de l’auteur de la réécriture  
Verdict final : **PASS — 99/100**  
Défauts ouverts : **P0 = 0 · P1 = 0 · P2 = 0**

Ce verdict porte sur la justesse, la cohérence inter-fichiers et l’utilité du
contenu local. Il ne prouve ni l’absence d’incident dans une migration réelle,
ni le rendu dans un navigateur réel, ni la publication, l’indexation ou un
classement Google.

## 1. Pourquoi le premier snapshot a été refusé

Le premier contre-audit a rendu **NO-GO, 82/100**, avec deux P0, six P1 et huit
P2. Il a notamment relevé :

- un rapprochement qui validait 2 380 clients au lieu de
  `2 420 − 20 = 2 400` ;
- une chronologie contradictoire entre les corrections R1/R2, les portes A/B et
  l’ordre des lots LOT-003/LOT-004 ;
- une définition incorrecte du RPO ;
- une feuille stop/go qui omettait TST-002 et le rejet sans responsable ;
- des totaux TCO arithmétiquement exacts mais insuffisamment décomposés ;
- un inventaire sans exemple d’automatisme, d’équipement ni de contrat de
  sortie ;
- un registre éditorial qui annonçait 16 minutes au lieu du temps réellement
  mesuré.

La seconde lecture a ensuite découvert un défaut temporel plus discret : les
watermarks UTC de LOT-003 et LOT-004 visaient des événements futurs par rapport
à leur heure d’exécution en CEST. Elle a également fait distinguer l’hypercare
préparée d’une hypercare réellement vécue après un GO.

Ces constats ont été corrigés avant le gel final. Le test contrôle maintenant
les timestamps après conversion CEST/UTC au lieu de se limiter à l’ordre
textuel des identifiants.

## 2. Décision et pédagogie

Le guide répond à quatre questions de dirigeant :

1. quelles opérations doivent encore fonctionner lundi matin ;
2. qui a le droit d’écrire dans quel système ;
3. quelles preuves autorisent la poursuite ou imposent l’arrêt ;
4. combien de temps reste disponible pour revenir sans perdre les nouvelles
   écritures.

Il distingue une décision temporaire de report et trois trajectoires
exécutables comparées au même résultat : migration progressive, bascule en une
fois et remplacement ciblé de type strangler. La période parallèle, le
blue-green et le canary sont présentés comme des mécanismes conditionnels, pas
comme des solutions automatiques aux conflits de données.

## 3. Recalcul du cas fictif Nova Maintenance

Le cas Nova est explicitement fictif. Ses nombres sont cohérents dans la page,
le kit et le relevé de décision :

- 40 utilisateurs ;
- 2 420 lignes clients, dont 20 doublons expliqués, soit 2 400 clients uniques ;
- 8 000 dossiers historiques et 300 dossiers ouverts ;
- 220 factures mensuelles, cinq intégrations et dix rôles ;
- 50 écritures de la dernière heure, dont deux suppressions incluses.

La porte A reste en **STOP** pour quatre raisons : relation client à 299/300, un
rejet sans responsable, séquence de 6 h 15 dans une fenêtre de 6 h et TST-002 en
échec. Après R1/R2, la porte B mesure 2 h 30, atteint 300/300 et zéro rejet non
attribué, mais reste en **STOP** parce que TST-002 échoue encore.

Les watermarks de la dernière heure couvrent désormais
`2026-07-24T14:30:00Z` à `15:30:00Z`, avant LOT-003 exécuté à 17 h 30 CEST.
LOT-004 rejoue ensuite la même fenêtre à 17 h 40 CEST.

## 4. TCO refait indépendamment

Les jours projet sont décomposés et totalisent respectivement 117, 146 et 181
jours. Les coûts utilisateurs et hypercare sont séparés :

```text
40 utilisateurs × 4 h × 55 € = 8 800 €
2 personnes × 40 h × 55 € = 4 400 €
Total distinct de l’indisponibilité : 13 200 €
```

Les neuf TCO publiés ont été recalculés :

| Trajectoire           |   12 mois |   36 mois |   60 mois |
| --------------------- | --------: | --------: | --------: |
| Bascule en une fois   | 134 850 € | 211 650 € | 300 450 € |
| Migration progressive | 160 900 € | 237 700 € | 326 500 € |
| Remplacement ciblé    | 189 050 € | 265 850 € | 354 650 € |

Ces valeurs sont des hypothèses pédagogiques, ni un devis ni un benchmark de
marché.

## 5. Sources primaires et limites

Les recommandations sensibles ont été confrontées à des sources officielles :

- [ANSSI — Sécuriser une migration numérique](https://messervices.cyber.gouv.fr/documents-guides/anssi_essentiels_migration_1.0.pdf) ;
- [ANSSI — Sauvegarde des systèmes d’information](https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf) ;
- [CNIL — Continuité et reprise d’activité](https://www.cnil.fr/fr/securite-prevoir-la-continuite-et-la-reprise-dactivite) ;
- [NIST SP 800-34 Rev.1](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final) ;
- [AWS — Strangler fig pattern](https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/strangler-fig.html) ;
- [UK Home Office — Selecting a deployment strategy](https://engineering.homeoffice.gov.uk/patterns/selecting-a-deployment-strategy/) ;
- [GOV.UK — Deploying software regularly](https://www.gov.uk/service-manual/technology/deploying-software-regularly).

Ces sources soutiennent la méthode ; elles ne fournissent aucun chiffre Nova et
ne garantissent pas qu’une architecture donnée convient à une entreprise
particulière.

## 6. Kit et contrôles locaux

- 27 fichiers source utiles, avec modèles vierges et exemple rempli ;
- archive ZIP contenant exactement les mêmes 27 fichiers, octet par octet ;
- CSV rectangulaires, UTF-8 et sans préfixe de formule active ;
- test de performance fictif : au moins 29 ouvertures sur 30 en deux secondes
  ou moins ; 29/30 observées, ouverture la plus lente à 2,1 secondes ;
- 68 contrôles indépendants réussis ;
- 77 contrôles ciblés de la racine réussis ;
- TypeScript, ESLint, formatage et contrôle des différences réussis ;
- route, ZIP et image sociale servis en HTTP 200 localement ;
- rendu mesuré à 5 788 mots, soit 29 minutes à 200 mots par minute ;
- registre daté du 24 juillet 2026 avec `readTimeMin: 29` ;
- contrôle spécifique migration inclus dans la prépublication.

## 7. Porte suivante

La P3 factuelle est fermée. La P4 doit encore produire une contre-lecture de
plume sur ce snapshot et conserver deux réserves distinctes :

1. aucun dirigeant externe n’a pris sa propre décision à partir du guide ;
2. aucun BAT navigateur réel final n’a été exécuté dans cet environnement.

La production, le sitemap public, l’indexation et le classement Google restent
des preuves séparées.

## 8. Réouverture après la première P4

La contre-lecture P4 simulée a ensuite rendu **NO-GO à 87/100** sur le snapshot
P3 décrit ci-dessus. Elle n’a pas invalidé les rapprochements, la chronologie ou
les neuf TCO, mais a demandé cinq corrections de lecture et de gouvernance :

- répondre dès l’ouverture qu’une absence totale de coupure ne peut pas être
  promise avant mesure ;
- proposer un parcours de cinq minutes au dirigeant pressé ;
- traduire TST-002, R1 et R2 avant les codes du kit ;
- calculer les seuils qui renversent réellement l’avantage construit de la
  bascule complète ;
- déclarer l’intérêt commercial de Hagnéré Code, déplacer le CTA après la
  fermeture de l’ancien outil et indiquer les trois fichiers à remplir en
  premier.

Ces corrections ont créé un nouveau snapshot. Le verdict 98/100 de ce document
reste la preuve du snapshot précédent ; il ne qualifie pas automatiquement la
nouvelle page. Une nouvelle P3 ciblée et une nouvelle P4 sont exigées avant le
gel.

## 9. Revalidation finale du snapshot corrigé

La nouvelle P3 indépendante a relu le contenu complet et le delta final, sans
modifier les fichiers. Elle rend **PASS à 99/100, P0 = 0, P1 = 0 et P2 = 0**.

Snapshot contrôlé :

- page :
  `53828440d73cfe6bd480f427325c86d896978cdca02e00dfeb821803c398ef56` ;
- image sociale :
  `a771cafbf223d3645e15fa166d2997a0cec5ad74fd843437b89f874051cbcce2` ;
- test spécifique :
  `89a6c007ca46e668e58c34ba756f2310bd6c31efdfa0820e2b8a3e308714a1c9` ;
- registre :
  `c4fbd1aaaeaecd4a52a8ab822326c2f692c3443b22cac54e31922c9b7c62586b` ;
- ZIP :
  `825d09ca1c5b8dd62f849f3db4ed77b4591db933eed45f2af0acf35297790b4a`.

La synthèse de cinq minutes est autonome, la promesse ne garantit aucune
absence de coupure, le cas Nova conserve son verdict STOP, les seuils TCO sont
reproductibles et le langage technique n’interrompt plus la lecture dirigeant.
Le retrait final de `R1/R2` dans le paragraphe Nova n’a supprimé aucune règle :
la correction, le rejeu sans doublon, l’échec restant et la décision sont
toujours explicites.

Les 27 fichiers du kit correspondent aux 27 entrées du ZIP, les onze sources
utiles répondaient lors du contrôle, la page, l’image, le ZIP et les trois
fichiers de démarrage répondaient en local. Le test impose maintenant l’ordre
`fermeture < CTA < sources`.

Cette P3 ne prouve toujours ni une migration réelle, ni un BAT navigateur
multi-largeur, ni la production, ni l’indexation.
