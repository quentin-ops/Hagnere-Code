# Rapport P2 R3 — `securite-saas-b2b`

Date : **25 juillet 2026**  
Éditeur unique : `/root`  
Étape suivante : revalidation P3 indépendante sur le manifeste P2 R3  
Statut maximal : **brouillon complet prêt pour contre-audit**

## 1. Statut exact

```text
Score P2 auto-attribué : aucun
P3 R2 : NO-GO indépendant × 2
P3 R3 : non réalisé
P4 finale : non réalisée
Build final de production : non réalisé
Statut éditorial : ready-for-human-review
Robots attendus : noindex, nofollow
Commit / push / déploiement / publication / indexation : non réalisés
```

Ce rapport n'autorise que la revalidation du nouveau gel. Il ne constitue ni
une autorisation de publication, ni une preuve de production, ni une promesse
de classement Google.

## 2. Chaîne de preuve conservée

Les reçus R1 et R2 ne sont pas modifiés. Le contre-audit R2 a porté sur :

```text
docs/research/manifests/securite-saas-b2b-p2-2026-07-25-r2.sha256
SHA-256 : 859e36e19d5c0aeb1c798024397b481efb80e26162e5a74804f56de1c6c31936
Empreintes vérifiées par chaque relecteur : 16/16
```

Les deux relecteurs ont rendu `NO-GO — nouvelle P2` :

- premier score : **91/100**, P0/P1/P2 = **0/2/2** ;
- second score : **88/100**, P0/P1/P2 = **0/2/2**.

Leurs recherches internationales n'ont invalidé aucun fait décisif. Le refus
vient du moteur, de l'exemple interactif et de l'interface.

## 3. P1 R2 corrigés dans R3

### `SEC-R3-P1-01` — assurance indépendante appliquée aux six familles

La nature `independent-assurance` était disponible pour les six familles, mais
la règle exigeant une pièce indépendante ne s'appliquait qu'à la sixième.
Ainsi, un test interne pouvait satisfaire une demande de rapport indépendant
sur les accès, l'isolement, la restauration, le logiciel ou les incidents.

R3 applique désormais la règle à chaque famille :

- si l'assurance est déclarée satisfaite, `evidenceKind` doit être
  `independent` ;
- un test, une trace ou un document interne produit
  `insufficient-formal-evidence` ;
- les six identifiants sont testés dans une même boucle adversariale.

### `SEC-R3-P1-02` — assurance indépendante exigée jamais écartée en interne

Une assurance indépendante déclarée exigée pouvait être classée « non
applicable » avec une simple note interne. R3 :

- retire cette option de l'interface pour cette nature ;
- normalise à `unknown` tout ancien état incompatible lors d'un changement de
  nature ;
- émet `independent-assurance-dismissed` si un état importé conserve la
  contradiction ;
- dirige vers la pièce indépendante exacte ou la renégociation/refus.

### `SEC-R3-P1-03` — calcul numérique fermé

Le cas `1e308 h/semaine` et `1e100 h` après signature produisait des valeurs
`Infinity`, puis `sign-with-conditions`. R3 :

- fixe une borne de sécurité numérique à **1 000 000 d'heures** par entrée ;
- applique la même borne au moteur et aux champs HTML ;
- refuse l'évaluation avec `invalid-capacity` et `invalid-hours` ;
- contrôle aussi chaque résultat intermédiaire et transforme toute valeur non
  finie en capacité inconnue ;
- teste le cas exact et vérifie l'absence de `Infinity` dans le résultat.

Cette borne n'est ni une capacité recommandée ni une moyenne de marché. Elle
évite un débordement ; un dossier plus grand doit être fractionné ou traité
avec un modèle de capacité dédié.

### `SEC-R3-P1-04` — exemple relatif au jour réel

Les dates fixes de juillet et août 2026 rendaient l'exemple incohérent dès le
lendemain, puis invalide après ses échéances. La fabrique exige maintenant une
date locale d'évaluation et dérive :

- l'observation au jour du chargement ;
- la signature à J+28 ;
- les cinq échéances à J+11, J+15, J+17, J+19 et J+21 ;
- les pièces et prochaines revues relativement au même jour.

Le scénario conserve donc **120 h initiales, 150 h prudentes, 80 h disponibles
et un déficit de 70 h**. Les tests le rejouent en août 2026, au passage d'année
et autour du 29 février 2028.

## 4. P2 R2 corrigés dans R3

### États filtrés et état React identiques

Quand la nature ou l'importance interdit « non applicable » ou le plan après
signature, R3 normalise atomiquement la valeur devenue impossible. La liste,
le résumé, les erreurs et le moteur voient désormais le même état. Les données
d'acceptation devenues sans objet sont effacées.

### Récupération d'erreurs

Chaque famille invalide possède :

- un compteur dans son résumé ;
- une liste visible de ses erreurs dans le panneau ;
- un groupe nommé avec `aria-invalid` et `aria-describedby` ;
- une région dynamique qui annonce le nombre et le premier défaut ;
- un bouton « Ouvrir le premier point à corriger », qui ouvre le panneau et
  place le focus sur son résumé.

Le vrai parcours clavier et le lecteur d'écran restent à revalider en P3/P4.

### Taxonomie unifiée

Le moteur, l'export et l'image sociale parlent désormais de :

```text
5 contrôles essentiels + 1 famille d'autres exigences
```

La sixième famille couvre toute autre exigence produit, contractuelle,
sectorielle ou d'assurance. Elle peut être critique ; son dossier distinct ne
la rend pas optionnelle.

## 5. Contrôles exécutés avant gel

```text
Tests sécurité dédiés : 70/70 sur 4 fichiers
Suite ciblée élargie : 112/112 sur 8 fichiers
TypeScript : conforme
ESLint ciblé : conforme
Formatage Prettier ciblé : conforme
git diff --check ciblé : conforme
Suite SEO globale : 487/488 sur 51 fichiers
```

L'unique échec global reste étranger au guide sécurité : le reçu P4 historique
de `prioriser-fonctionnalites-mvp-saas` attend une ancienne empreinte du
registre partagé `src/lib/guides.ts`. R3 ne modifie ni ce guide ni son reçu et
ne présente pas ce contrôle global comme vert.

Le texte rendu de la page reste à **6 287 mots**, soit **31 minutes** mesurées
hors atelier.

## 6. Ce que R3 ne prouve toujours pas

- aucun verdict P3 n'a encore été émis sur R3 ;
- aucun build final n'est rattaché à R3 ;
- les dix largeurs, clair/sombre et clavier restent à refaire sur R3 ;
- le téléchargement, l'effacement et l'impression restent à refaire sur R3 ;
- l'image sociale modifiée reste à rendre à 1 200 × 630 sur R3 ;
- aucune production, publication, indexation, demande d'indexation, validation
  par un lecteur externe, commit, push ou déploiement n'a été effectué.

## 7. Porte suivante

**Remise P2 R3 : prête pour deux revalidations indépendantes sur le nouveau
manifeste, sans note et sans autorisation de publication.**
