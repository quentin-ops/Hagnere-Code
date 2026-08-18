# Contre-audit P4 final — `securite-saas-b2b`

Date : **26 juillet 2026**  
Révision : **R1**  
Périmètre : guide, atelier local, export texte, impression, image sociale et
build local de production  
Snapshot final : **P2 R6 + P3 R2**

## 1. Verdict exécutif

**Verdict P4 : GO pour revue humaine.**

```text
Score strict : 96/100
P0 ouverts : 0
P1 ouverts : 0
P2 ouverts : 0
Décision : prêt pour revue humaine, maintenu hors index
```

Ce verdict ne signifie ni validation humaine externe, ni publication, ni
commit, ni push, ni déploiement, ni indexation. Il ne promet aucun classement
Google.

## 2. Chaîne de correction réellement retenue

Le premier gel acceptable sur le fond, R4, a reçu deux notes indépendantes de
96/100 et un double GO P4. La recette a ensuite découvert deux défauts de
rendu :

1. le dossier imprimé laissait quatre lignes isolées sur une cinquième page ;
2. à 1 280 px, « Examiné indépendamment » était rogné dans une grille de cinq
   cartes trop étroite.

Ils ont été traités séparément :

```text
R5 : typographie print 10 px / leading-relaxed
     → 9,5 px / interligne 1,45
R6 : grille sm:2 / lg:5
     → sm:2 / lg:3
```

R5 puis R6 ont chacun reçu deux GO indépendants, sans P0, P1 ou P2. Les
relecteurs ont reconstruit les empreintes antérieures en mémoire et confirmé
que ni le contenu, ni le moteur, ni les décisions, ni l'export n'avaient
changé. R6 ajoute aussi un test empêchant le retour aux cinq colonnes.

## 3. Build et contrôles automatisés

```text
Tests sécurité dédiés : 74/74 sur 4 fichiers
TypeScript : conforme
ESLint ciblé : conforme
Prettier applicatif ciblé : conforme
git diff --check ciblé : conforme
Build Next.js de production : réussi
Pages statiques générées : 159/159
```

La suite SEO globale locale compte **491 réussites sur 492** dans
**50 fichiers verts sur 51**. L'unique échec est extérieur à ce guide :
le reçu historique de `prioriser-fonctionnalites-mvp-saas` attend une ancienne
empreinte du registre partagé `src/lib/guides.ts`. Le contrôle global n'est
donc pas présenté comme vert.

Le contrôle global post-build avait également signalé 141 anciennes erreurs
de prévisualisation ou de temps de lecture sur d'autres routes. Aucune ne
visait `/guides/securite-saas-b2b`.

## 4. Rendu réel aux dix largeurs

Chrome a été contrôlé aux largeurs exactes :

```text
320, 360, 390, 430, 640, 768, 1024, 1280, 1440 et 1600 px
```

À chaque largeur stabilisée :

- `innerWidth` égale la largeur demandée ;
- largeur du document égale à la fenêtre ;
- aucun lien, bouton, champ, sélecteur ou résumé hors écran ;
- atelier entièrement contenu dans la fenêtre ;
- aucun identifiant dupliqué ;
- un seul H1 ;
- titre « Examiné indépendamment » non rogné.

La grille corrigée a été inspectée visuellement à 1 280 px en clair et en
sombre : cinq cartes complètes, réparties sur trois puis deux colonnes, sans
mot coupé. Le reste de la page et l'atelier ont aussi été sondés en clair et
en sombre sans dérive de contraste ou de largeur.

Le menu mobile réel a été ouvert à 390 px :

```text
aria-expanded : true
aria-hidden du panneau : false
liens visibles : 10
défilement horizontal : aucun
```

`Échap` le ferme, rétablit `inert`, remet `aria-expanded` à `false` et rend le
focus au bouton.

## 5. Scénarios adversariaux de l'atelier

### Exemple fictif et capacité

Le scénario local du 26 juillet 2026 produit :

```text
Observation : 26 juillet 2026
Signature envisagée : 23 août 2026
Charge initiale : 120 h
Charge prudente : 150 h
Capacité avant signature : 80 h
Écart : -70 h
Décision : Reporter la signature et qualifier le risque
```

Les dates restent relatives à la date locale : elles ne sont pas figées sur
une année de démonstration.

### Charge infinitésimale

Une charge ouverte de `0.001 h` :

- conserve `min="0.01"` et `step="0.01"` ;
- reçoit `aria-invalid="true"` ;
- affiche le message visible sur la borne de `0,01 h` ;
- rend le dossier incomplet ;
- annonce précisément la famille « Administrateurs, identités techniques et
  accès d'urgence » ;
- ne peut jamais autoriser une signature.

À `0.01 h`, l'erreur disparaît, la valeur reste affichée `0,01 h` et le calcul
retient `96,01 h` puis `120,01 h`, jamais zéro.

### Récupération d'erreur

Le bouton « Ouvrir le premier point à corriger » :

- ouvre la première famille invalide ;
- place le focus sur son résumé ;
- relie l'incident à un message par `aria-describedby` ;
- fait annoncer la même famille et le même défaut que ceux qu'il ouvre.

### Clavier

Dix-huit tabulations consécutives ont traversé le premier dossier :
zones de texte, listes, champs texte, dates et case à cocher reçoivent le
focus. Tous les contrôles natifs sondés exposent `:focus-visible`, sauf deux
sous-étapes internes du sélecteur de date de Chrome. Cette limite du contrôle
natif ne bloque pas la saisie, mais reste consignée.

## 6. Téléchargement, effacement et impression

Le téléchargement évalué produit :

```text
Nom : dossier-decision-securite-exemple-saas-fictif-01-2026-07-26-v1.txt
Taille : 11 366 octets
Statut : DOSSIER ÉVALUÉ
Exigences humaines : 6/6
Identifiant technique exposé : aucun
Infinity / NaN / undefined : aucun
Capacités 120 / 150 / 80 / -70 h : présentes
```

L'effacement fonctionne en deux étapes :

1. « Annuler et conserver » garde la référence fictive ;
2. « Effacer définitivement » vide la référence, rétablit le brouillon
   incomplet et affiche un retour visible.

L'impression finale est un PDF A4 de **4 pages**, **68 425 octets** et
**10 820 caractères extraits**. Les quatre pages ont été rendues en images et
inspectées :

- aucun contrôle interactif ou élément du site ;
- aucun chevauchement ;
- aucun texte coupé ;
- aucune page blanche ;
- les six exigences et toutes les limites sont lisibles ;
- aucune cinquième page résiduelle.

## 7. SEO, structure et liens

| Contrôle                   | Résultat                                            |
| -------------------------- | --------------------------------------------------- |
| Route locale de production | `200 OK`                                            |
| Titre                      | `Sécurité SaaS B2B : que prouver avant de signer ?` |
| Canonical                  | `https://hagnere-code.ai/guides/securite-saas-b2b`  |
| Robots de page             | `noindex, nofollow`                                 |
| Statut éditorial           | `ready-for-human-review`                            |
| Sitemap                    | route absente                                       |
| H1                         | 1, unique                                           |
| Temps de lecture           | 6 287 mots / 31 min                                 |
| Données structurées        | `Article` + `BreadcrumbList`                        |
| `FAQPage` artificielle     | absente                                             |
| `wordCount` non démontré   | absent                                              |

Le `robots.txt` local autorise globalement l'exploration du site de
prévisualisation ; l'interdiction d'indexation reste portée par la page, et le
guide reste absent du sitemap.

Contrôle des liens :

```text
Liens dans l'article : 77
Destinations uniques : 51
Ancres internes : 17/17 présentes
Routes internes : 5/5 en HTTP 200
Liens externes uniques : 29
```

Vingt-quatre liens externes ont répondu sous 400 lors du sondage. Cinq pages
ISO ont refusé la requête automatisée en 403, mais leurs pages officielles et
leurs éditions ont été rouvertes séparément ; elles ne sont pas classées comme
liens cassés.

## 8. Image sociale et console

L'image Open Graph finale répond en `200 image/png`, pèse **215 252 octets** et
mesure **1 200 × 630 px**. L'inspection visuelle confirme :

- aucun texte ou badge rogné ;
- hiérarchie lisible ;
- cinq contrôles essentiels et une sixième famille ;
- promesse cohérente avec les décisions du guide.

La console ne contient aucune erreur de page. Elle contient quatre
avertissements Next.js sur des feuilles CSS préchargées puis non utilisées
immédiatement. Ils sont globaux au framework et non spécifiques au guide ;
ils sont conservés comme dette non bloquante.

## 9. Sources internationales rouvertes

La comparaison mondiale ne s'est pas limitée aux contenus français. Le
contre-audit a rouvert notamment :

- Commission européenne, Data Act ;
- NIST SP 1326 ;
- GOV.UK, Software Security Code of Practice ;
- NCSC, Principles Based Assurance ;
- ISO/IEC 27017, 27018 et 27701.

Les éditions ont été distinguées honnêtement : ISO/IEC 27017 édition 2 restait
en publication au stade 60.00, tandis que 27018:2025 et 27701:2025 étaient
publiées. Le guide ne transforme ni un logo, ni une norme, ni un rapport en
preuve générale de sécurité ou de conformité juridique.

## 10. Score détaillé

| Axe                            |   Note /10 | Motif                                                                                |
| ------------------------------ | ---------: | ------------------------------------------------------------------------------------ |
| Intention et réponse immédiate |         10 | La vente bloquée et les cinq décisions sont exposées dès l'ouverture.                |
| Utilité décisionnelle          |         10 | Le dossier peut autoriser, conditionner, corriger, suspendre ou refuser.             |
| Pédagogie                      |         10 | Risque, contrôle, pièce, portée, fraîcheur et décision sont reliés.                  |
| Profondeur                     |         10 | Accès, isolement, restauration, logiciel, incident, sortie et capacité sont traités. |
| Preuves et sources             |          9 | Sources primaires et éditions datées ; aucun audit réel du lecteur.                  |
| Comparaison internationale     |         10 | Référentiels américains, britanniques, européens et internationaux comparés.         |
| Originalité                    |         10 | Atelier local, registre, décisions bloquantes, export et impression.                 |
| Style                          |          9 | Langage concret ; densité élevée sur quelques sections expertes.                     |
| Conversion honnête             |          9 | Bon/mauvais fit, limites et CTA sans promesse excessive.                             |
| SEO et intégration produit     |          9 | Métadonnées et rendu cohérents ; guide volontairement non indexé.                    |
| **Total**                      | **96/100** | **P0/P1/P2 = 0/0/0**                                                                 |

## 11. Limites et état final

- aucun lecteur d'écran réel n'a été utilisé ;
- aucune personne externe n'a encore effectué la revue humaine ;
- l'atelier est local et auto-déclaratif : il n'authentifie aucune pièce ;
- le résultat ne remplace ni audit, ni test d'intrusion, ni avis juridique ou
  sectoriel ;
- le site global conserve des dettes étrangères à ce guide.

```text
Guide : prêt pour revue humaine
Indexation : interdite
Commit : non effectué
Push : non effectué
Déploiement : non effectué
Publication : non effectuée
Demande d'indexation : non effectuée
```
