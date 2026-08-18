# Contre-audit P3 — candidat R14 — `aides-creation-site-internet`

Date : 26 juillet 2026

Statut : **candidat R14 intégré et contrôlé localement, sans note et sans GO
P4**.

Ce rapport ne remplace aucun rapport historique. Il enregistre le verdict froid
du gel R13, les corrections intégrées dans R14 et les preuves techniques
reproduites à la racine. Les deux prochaines lectures indépendantes sur un
nouveau gel commun restent seules habilitées à noter R14 et à ouvrir, ou non,
la P4.

## 1. Gel R13 audité

Les deux relecteurs ont contrôlé le même manifeste :

```text
docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r12.sha256
SHA-256 : 6b1b8bf13122980d8fd57d6a499c6544b7cb1afd015c88b80c30b1cd13c6f6ca
Entrées : 49
Gel initial : 49/49
Gel final : 49/49
Mutation pendant les audits : aucune
```

Verdicts indépendants :

| Axe                                    | Note historique du gel R13 | Sévérités                | Décision |
| -------------------------------------- | -------------------------: | ------------------------ | -------- |
| Factuel, juridique et financier        |                     72/100 | P0 : 0 ; P1 : 3 ; P2 : 2 | NO-GO P4 |
| Expérience, interface et accessibilité |                     85/100 | P0 : 0 ; P1 : 1 ; P2 : 1 | NO-GO P4 |

Après déduplication, l’union comprend **4 P1 et 3 P2**.

## 2. Registre des sept défauts R13

| Sévérité | Défaut confirmé sur R13                                                                                                                                       | Risque                                                                                                                          |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| P1       | La proximité des identités manquait les espaces autour de `&`, `+`, `/`, `\` et de l’apostrophe, les abréviations espacées et les ligatures `œ/oe` ou `æ/ae`. | Deux saisies manifestement voisines pouvaient échapper à la question de rapprochement et masquer un cumul prudent de 301 001 €. |
| P1       | Une base juridique entièrement inconnue pouvait laisser un dossier avant notification au statut `candidate-not-budgeted`.                                     | Le moteur juxtaposait une base non résolue et l’absence de pièce manquante.                                                     |
| P1       | L’export TXT comprimait les espaces et remplaçait les mots littéraux `Infinity`, `NaN` ou `undefined`.                                                        | Une identité ou une preuve saisie pouvait être réécrite dans la piste d’audit.                                                  |
| P1       | Les cartes produisaient une liste de définitions invalide lorsque leur note était rendue comme enfant parasite.                                               | Axe-core signalait une violation `definition-list` de niveau `serious` sur toute la synthèse.                                   |
| P2       | Le champ d’URL d’autorité acceptait toute adresse HTTP(S) syntaxiquement lisible.                                                                             | Un hôte local, réservé ou trompeur pouvait être présenté sans avertissement d’authentification.                                 |
| P2       | Les coûts réalisés ou conditionnels n’étaient pas bornés localement avant fiscalité et comptabilité.                                                          | Le lecteur pouvait confondre le calcul économique brut avec le traitement de la dépense et de la subvention.                    |
| P2       | L’aide partagée de format de minimis n’existait que pour certains états de l’aide courante.                                                                   | Les lignes fraîches du registre pouvaient référencer un identifiant ARIA absent et omettre la correction HTTP précise.          |

## 3. Fermetures intégrées dans R14

### 3.1 Identités et cumul prudent

La clé exacte reste le seul fondement d’un total. Une clé de proximité séparée
rapproche désormais :

- un même séparateur avec ou sans espaces ;
- les apostrophes droites, typographiques ou espacées ;
- les formes sociales avec points ou espaces ;
- `œ/oe` et `æ/ae`.

Une proximité suspend le groupe et demande une décision ; elle ne fusionne
jamais les clés. Des séparateurs différents restent différents. Les tests
rejouent notamment `150 001 + 150 000`, puis exigent une clé exacte commune
avant de faire apparaître 301 001 €.

### 3.2 Base juridique inconnue

Une base non résolue ajoute toujours une information manquante et un
avertissement, y compris lorsque l’aide n’est pas notifiée. Le verdict global
reste `incomplete`. La règle financière indépendante demeure prudente :
l’aide budgétée avant notification reste 0 €.

### 3.3 Export probatoire

Le rapport utilise une voie de rendu distincte de la normalisation destinée aux
calculs et aux noms de fichier :

- les espaces internes sont conservés ;
- les mots littéraux `Infinity`, `NaN` et `undefined` sont conservés, y compris
  lorsqu’ils constituent toute la valeur ;
- antislash, retour chariot, saut de ligne et tabulation sont échappés ;
- aucune substitution globale ne réécrit le rapport final.

L’export reste une transcription locale non authentifiée, pas une signature,
une validation juridique ou une preuve de l’auteur.

### 3.4 URL d’autorité

Le moteur exige HTTPS et un hôte à forme DNS publique. Il refuse les
identifiants, ports explicites, IP, hôtes locaux, réservés, sans point ou de
forme DNS invalide. Un domaine public hors des espaces institutionnels
reconnus reste exploitable comme piste, mais reçoit un avertissement explicite :
le domaine, l’autorité éditrice et le chemin doivent être vérifiés
manuellement. Même un espace reconnu n’est pas authentifié par le moteur.

Pour une URL ELI officielle encore en HTTP, la pédagogie demande de remplacer
uniquement le préfixe `http://` par `https://`, puis de revérifier l’hôte et le
chemin. Le moteur ne transforme rien silencieusement.

### 3.5 Coûts, fiscalité et comptabilité

Les cartes et le TXT qualifient les coûts comme calculés **avant traitement
fiscal et comptable**. La page explique, au voisinage du calcul, que la dépense
et la subvention peuvent suivre des traitements différents.

Les sources officielles ont été rouvertes :

- [article 42 septies du CGI](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000046868472) ;
- [BOFiP, BOI-BIC-PDSTK-10-30-10-20](https://bofip.impots.gouv.fr/bofip/1950-PGP.html/identifiant=BOI-BIC-PDSTK-10-30-10-20-20230628).

Elles bornent certaines subventions d’équipement sous conditions ; elles ne
qualifient automatiquement ni un site, ni une ligne de dépense, ni l’aide
étudiée. Le guide renvoie cette qualification au professionnel compétent.

### 3.6 Sémantique et références ARIA

Chaque carte de résultat suit désormais la structure
`DL > DIV > DT + DD`, avec la note éventuelle dans la définition. Le test
axe-core exécute réellement la règle `definition-list` sur les résultats
visibles et ne remonte aucune violation.

L’aide de format de minimis est rendue exactement une fois, indépendamment du
statut de l’aide courante. Un scénario frais ajoute plusieurs aides antérieures,
résout chaque `aria-describedby`, change les statuts et confirme l’unicité de
l’identifiant.

Le moteur axe-core utilisé par ce test est maintenant une dépendance de
développement directe, également enregistrée dans le verrou de dépendances.

## 4. Preuves reproduites à la racine

```text
Tests consolidés du guide : 500/500, 7 fichiers
Tests moteur : 369/369
Tests interface : 47/47
Tests qualité éditoriale : 22/22
Autres contrats catalogue, langue, sitemap et indexation : 62/62
Axe-core, règle definition-list : 0 violation
TypeScript global : conforme
ESLint ciblé : conforme
Prettier ciblé : conforme
Dépendance axe-core directe : résolue en 4.11.0
Verrou de dépendances : cohérent
Marqueurs de conflit : absents
```

La suite SEO globale conserve son unique anomalie historique, extérieure à ce
guide :

```text
51 fichiers : 50 conformes, 1 en échec
492 tests : 491 conformes, 1 en échec
Échec : prioriser-fonctionnalites-mvp-saas
Cause : ancien manifeste P4 sur src/lib/guides.ts
Hash attendu : 8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09
Hash vivant : af5c2417be096e8818db68a16ac6f0a8091b17e602f9e47af9d3b47cc6ebb831
Défaut local aides-creation-site-internet dans cette suite : aucun
```

La génération directe Next.js est conforme :

```text
Compilation : réussie
TypeScript du build : réussi
Pages statiques : 159/159
Route /guides/aides-creation-site-internet : générée
Route /guides/aides-creation-site-internet/opengraph-image : générée
HTML local : canonique présente, métadonnées sociales présentes
Robots local : noindex, nofollow
```

Ce build local n’est ni un déploiement, ni une preuve de production, ni une
preuve d’indexation.

## 5. État éditorial du candidat

Le dossier de recherche, le benchmark de six marchés internationaux, l’audit
historique, la page et le test qualité enregistrent tous :

- le gel R13 et ses deux notes historiques ;
- l’union de 4 P1 et 3 P2 ;
- les sept fermetures R14 à contre-auditer ;
- l’absence de note et de GO pour R14 ;
- la séparation entre validation statique, P4 navigateur, publication,
  déploiement et indexation.

La page publique enseigne désormais les limites à l’endroit où le lecteur en a
besoin, sans transformer une validation de syntaxe ou un calcul local en
éligibilité, authentification ou conseil individualisé.

## 6. Porte de sortie

Le candidat R14 **ne s’auto-attribue aucune note**. Il n’obtient un GO P4 que
si deux nouveaux relecteurs, indépendants des correcteurs :

1. vérifient le nouveau manifeste au début et à la fin ;
2. rejouent les quatre P1 et trois P2 du gel R13 ;
3. cherchent de nouveaux contre-exemples dans les calculs, dates, URL,
   références juridiques, identités, exports et parcours assistifs ;
4. confrontent les affirmations volatiles aux sources primaires ;
5. rendent chacun une note sur 100 avec `P0/P1/P2` ;
6. concluent séparément à `P0 = 0`, `P1 = 0` et à l’absence de P2 empêchant une
   expérience premium.

Un double GO P3 ouvrirait seulement la P4. Il n’autoriserait ni publication, ni
déploiement, ni indexation.
