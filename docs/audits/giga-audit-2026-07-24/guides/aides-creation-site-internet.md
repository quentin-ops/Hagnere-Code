# Audit approfondi — `aides-creation-site-internet`

Date : 24 juillet 2026

Auditeur concurrentiel : audit P3 en lecture seule, avec vérification web des sources primaires françaises et quelques repères étrangers officiels

Snapshot du guide :

- Source : `src/app/guides/aides-creation-site-internet/page.tsx`
- Métadonnées : `src/lib/guides.ts:1323-1334`
- Open Graph : `src/app/guides/aides-creation-site-internet/opengraph-image.tsx`
- SHA-256 au début de l'audit : `page.tsx` `add6eecfc835adafa75485ee7d4bcb2019316758b9d83f6361b593879649b108`, `opengraph-image.tsx` `dc17223db6cc3d89ec76b39f63c2df4d126917447e3cf441e55a1dcb089e319a`, `guides.ts` `8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09`
- Aucun fichier `docs/research/aides-creation-site-internet.md` trouvé ; ce constat est une limite documentaire, pas une preuve que la recherche n'a jamais existé.

> **Mise à jour de gouvernance au 27 juillet 2026 — candidat courant R31.**
> R30 a reçu **74/100 — NO-GO P4** sur l’axe factuel
> (`P0 : 0 ; P1 : 5 ; P2 : 2`) et **79/100 — NO-GO P4** sur l’axe expérience
> (`P0 : 0 ; P1 : 5 ; P2 : 2`). Son gel de **89 fichiers** est resté intact à
> 89/89 ; SHA-256 :
> `eef43a31c83f32c5a96bd1581cb536e60350b37bffaa02d0c959d24dd704016c`.
> R31 traite leur union dédupliquée de **5 P1 et 3 P2**. Le moteur passe
> **1 209/1 209** tests, l’interface dossier **108/108**, les six suites
> consolidées **1 405/1 405** et l’intégration **62/62**. Le build direct
> produit 159 pages statiques ; l’artefact servi mesure **10 285 mots /
> 51 minutes**. R31 est validé localement et figé dans le manifeste
> `docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r30.sha256`
> de **90 fichiers**. Il demeure sans note, sans GO et P4 fermée avant deux
> audits froids indépendants. Le corps de cet audit conserve le diagnostic historique
> du 24 juillet et son score initial de 75/100 ; il ne décrit pas le guide
> vivant. Historique : R26 avait obtenu 76/100 factuel et 83/100 UX, puis R27
> avait été validé localement et figé dans le manifeste `r26.sha256` avant ses
> deux NO-GO. R4
> à R18 sont des snapshots historiques gelés
> et contre-audités. Le gel R20, issu du manifeste
> `docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r19.sha256`,
> est resté intact à **64/64 au début et à la fin** du contrôle froid factuel ;
> SHA-256 :
> `e37ee2703b375f2bb0ff97c729d3c3dfe163798a0f2f1dfb1cd6a8f0a8232019`.
> Le contrôle factuel, juridique et financier a rendu
> **72/100 — NO-GO P4** (`P0 : 0 ; P1 : 2 ; P2 : 1`). Aucun audit UX R20
> n’a été lancé après ce NO-GO : les deux P1 suffisaient à bloquer P4.
> R21 était alors seulement un candidat en correction. Le gel R21 ultérieur,
> issu du manifeste
> `docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r20.sha256`,
> contient **66 fichiers** et porte le SHA-256
> `cdeeccb3fb6a93d58d5545daf57dcbba5a6214a5a541f62da823d1ddc2c6b87f`.
> Les deux audits froids l’ont vérifié **66/66 au début et à la fin**. Le
> contrôle factuel, juridique et financier a rendu
> **86/100 — NO-GO P4** (`P0 : 0 ; P1 : 3 ; P2 : 0`) ; le contrôle expérience,
> pédagogie et accessibilité a rendu **86/100 — NO-GO P4**
> (`P0 : 0 ; P1 : 1 ; P2 : 2`). **P4 n’a pas été lancée.** Le gel R22
> ultérieur, issu du manifeste
> `docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r21.sha256`,
> contient **72 fichiers** et porte le SHA-256
> `2c436d330340c5bc1b9964f2fefa9b6c0d1b0d37ee0b38fe25adbe4cdaa9b1e8`.
> Les deux audits froids l’ont vérifié **72/72 au début et à la fin**. Le
> contrôle factuel, juridique et financier a rendu
> **75/100 — NO-GO P4** (`P0 : 0 ; P1 : 4 ; P2 : 2`) ; le contrôle expérience,
> pédagogie et accessibilité a rendu **80/100 — NO-GO P4**
> (`P0 : 0 ; P1 : 3 ; P2 : 3`). Le gel R23 ultérieur, issu du manifeste
> `docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r22.sha256`,
> contient **75 fichiers** et porte le SHA-256
> `7fa73ecb41faec25359c3c0ad99585a69345c501f511049731f79a55ce4e1e5d`.
> Les deux audits froids l’ont vérifié **75/75 au début et à la fin**. Le
> contrôle factuel, juridique et financier a rendu
> **78/100 — NO-GO P4** (`P0 : 0 ; P1 : 4 ; P2 : 1`) ; le contrôle expérience,
> pédagogie et accessibilité a rendu **87/100 — NO-GO P4**
> (`P0 : 0 ; P1 : 1 ; P2 : 3`). Le gel R24 repose ensuite sur
> `docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r23.sha256` :
> **78 fichiers**, vérifiés **78/78 au début et à la fin** par les deux audits
> froids ; SHA-256 :
> `ce9b10c484ac8035cae56a3893b6770d016173a98a488718be6f98a6c5c4bf08`.
> Les deux contrôles ont rendu **84/100 — NO-GO P4** : l’axe factuel avec
> `P0 : 0 ; P1 : 3 ; P2 : 1`, l’axe expérience avec
> `P0 : 0 ; P1 : 2 ; P2 : 2`. R25 corrige leur union, réussit localement
> **1 142/1 142 tests** ciblés, **62/62 tests** d’intégration,
> **52/52 tests** catalogue/qualité et le build Next.js direct à 159 pages.
> Il est figé dans
> `docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r24.sha256`
> avec **82 fichiers**. Les deux audits froids R25 ont vérifié ce gel
> **82/82 au début et à la fin** ; SHA-256 du manifeste :
> `1215a603609d4256035000dd166c85a12f5902d9a036631a4d5bb169d61f7469`.
> L’axe factuel a rendu **82/100 — NO-GO P4**
> (`P0 : 0 ; P1 : 3 ; P2 : 3`) et l’axe expérience
> **84/100 — NO-GO P4** (`P0 : 0 ; P1 : 1 ; P2 : 5`). R26 a corrigé leur
> union, réussi ses validations locales et été figé dans
> `docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r25.sha256`
> avec **84 fichiers**. Les deux audits R26 ont vérifié ce gel **84/84 au début
> et à la fin** ; SHA-256 :
> `7952d793b929d68f7e6e2e089fc5aba1ddd818781785f2d40b02a4ded98b37a7`.
> Ils ont rendu **76/100 factuel** (`P0 : 0 ; P1 : 4 ; P2 : 1`) et
> **83/100 UX** (`P0 : 0 ; P1 : 2 ; P2 : 3`), deux NO-GO P4. R27 est figé
> dans un corpus de **86 fichiers**, sans note ni GO avant ses deux audits
> froids.

### Audits froids R28 → gel R29 — historique

Le rapport
[`aides-creation-site-internet-p3-2026-07-26-r29.md`](../reviews/aides-creation-site-internet-p3-2026-07-26-r29.md)
porte les deux verdicts R28 et leur contrat correctif.

| Sévérité | Écart R28                                             | Fermeture intégrée dans R29                                                                                    |
| -------- | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| P1       | Négation intercalaire du mandat SIEG                  | Étendre la grammaire bornée à `pourtant`, `toujours`, `absolument`, `à ce stade` et proches.                   |
| P1       | Négation intercalaire de la distinction SIEG          | Appliquer la même fenêtre sans casser `pas seulement` ni `pas uniquement`.                                     |
| P1       | Une chaîne `x` vaut référence officielle d’échéance   | Exiger URL précise, identifiant formel ou document/réponse suffisamment qualifié, sans prétendre authentifier. |
| P2       | Un accusé `xxxxxx` est accepté                        | Exiger une trace formellement identifiable et refuser les valeurs génériques.                                  |
| P2       | La borne de saisie vieillit dans un onglet conservé   | Rafraîchir la date civile éditable sans déplacer l’instant de l’analyse précédente.                            |
| P2       | Une normalisation après import reste annoncée alignée | Marquer et annoncer toute normalisation réelle comme modification non exportée.                                |
| P2       | La date de la circulaire est ambiguë                  | Distinguer la signature du 3 mars 2026 et l’en-tête daté du 4 mars 2026.                                       |

R29 passe **1 312/1 312** tests métier, interface, brouillon et qualité,
**62/62** tests catalogue/langue/sitemap/indexation, les contrôles techniques
et le build Next direct à **159 pages**. L’artefact local servi mesure
**9 925 mots visibles / 50 minutes**. Le manifeste
`docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r28.sha256`
couvre **88 fichiers**.

R29 reste **sans score et sans GO**. P4 ne peut s’ouvrir qu’après deux audits
froids indépendants à au moins 92/100 chacun, sans P0 ni P1.

### Audits froids R29 → candidat R30 — état courant

Le rapport
[`aides-creation-site-internet-p3-2026-07-26-r30.md`](../reviews/aides-creation-site-internet-p3-2026-07-26-r30.md)
porte les deux verdicts R29 et leur contrat correctif.

| Sévérité | Écart R29                                                    | Fermeture intégrée dans R30                                                                                                                                          |
| -------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| P1       | Négation ou refus du mandat SIEG encore contournable         | Détecter localement négation, absence d’objet et refus autour du prédicat sans liste finie d’adverbes ; faire primer la contradiction sur l’identifiant du document. |
| P1       | Non-distinction contournable ou preuve seulement descriptive | Appliquer la même garde aux prédicats de distinction et exiger une polarité textuelle `distinct` en plus de la structure documentaire.                               |
| P1       | Exception positive à l’absence de compensation ignorée       | Donner priorité à `sauf/hormis/excepté/à l’exception de`, avec héritage conservateur de la portée `même service`.                                                    |
| P1       | Restructuration positive exceptée ignorée                    | Donner priorité à l’acquisition, fusion, scission ou au rachat réalisé dans la portée de l’exception.                                                                |
| P1       | Preuve territoriale contradictoire favorable                 | Invalider la contradiction explicite et maintenir l’incertitude incomplète.                                                                                          |
| P2       | Faux identifiants et URL locales acceptés                    | Refuser racines de démonstration suffixées, hôtes locaux/privés et espaces réservés à la documentation, sans authentifier les formes publiques.                      |
| P2       | Analyse exportable après changement de jour                  | Inclure la date civile éditable dans la signature et verrouiller TXT/impression dès qu’elle diverge.                                                                 |

Le moteur `site-aid-decision-r30-2026-07-26` passe **1 160/1 160** scénarios.
L’application `site-aid-application-r30-2026-07-26` passe **106/106** tests
d’interface. Le brouillon reste `site-aid-draft-r29-2026-07-26`, puisque son
schéma ne change pas.

Les six suites consolidées passent **1 354/1 354**, l’intégration **62/62**,
TypeScript, ESLint ciblé, Prettier et `git diff --check` sont verts. Le build
direct produit **159 pages statiques** et l’artefact servi mesure
**10 095 mots / 50 minutes**. R30 est validé localement et figé dans
`docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r29.sha256`,
qui couvre **89 fichiers**.

R30 reste **sans note ni GO** avant ses deux nouveaux audits froids. P4 reste
fermée.

### Audits froids R30 → candidat R31 — état courant

Le rapport
[`aides-creation-site-internet-p3-2026-07-26-r31.md`](../reviews/aides-creation-site-internet-p3-2026-07-26-r31.md)
porte les deux verdicts R30 et leur contrat correctif.

| Sévérité | Écart R30                                                         | Fermeture intégrée dans R31                                                                                                                              |
| -------- | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| P1       | Mandat SIEG contournable par négation, opposition ou interdiction | Exiger une affirmation explicite du service confié ; un identifiant de document ne crée aucune polarité.                                                 |
| P1       | Distinction déduite d’une négation ou d’une simple description    | Exiger une conclusion affirmative directe ; opposition, interdiction et formulations indirectes non résolues bloquent.                                   |
| P1       | Exception de compensation absorbée par une absence générale       | Examiner toute exception non vide ; un fait positif contredit, une exception non qualifiée suspend.                                                      |
| P1       | Achat, rachat ou fusion exceptés perdus                           | Donner priorité à toute opération explicite ; exiger une conclusion négative pour le statut « aucune opération ».                                        |
| P1       | Territorialité favorable malgré exclusion ou description          | Exiger une affirmation explicite de l’applicabilité ; `unresolved` reste incomplet.                                                                      |
| P2       | Témoins factices ou techniquement impropres acceptés              | Refuser racines de test dans tous les jetons, identifiants tout-zéro, domaines réservés, HTTP, identifiants, ports explicites et adresses non publiques. |
| P2       | Passage de minuit sans événement                                  | Programmer un réveil au prochain minuit et garder les événements navigateur comme secours.                                                               |
| P2       | Doubles négations et restrictions mal classées                    | Maintenir les formulations indirectes incomplètes ; préserver seulement une restriction ou continuité qui affirme directement le prédicat requis.        |

Le moteur `site-aid-decision-r31-2026-07-27` passe **1 209/1 209** scénarios.
L’application `site-aid-application-r31-2026-07-27` passe **108/108** tests
d’interface. Le brouillon reste `site-aid-draft-r29-2026-07-26`, puisque son
schéma ne change pas.

Les six suites consolidées passent **1 405/1 405**, l’intégration **62/62**,
TypeScript, ESLint ciblé, Prettier et `git diff --check` sont verts. Le build
direct produit **159 pages statiques** et l’artefact servi mesure
**10 285 mots / 51 minutes**. R31 est validé localement et figé dans
`docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r30.sha256`,
qui couvre **90 fichiers**.

R31 reste **sans note ni GO** avant ses deux nouveaux audits froids. P4 reste
fermée.

### Audits froids R27 → gel R28 — historique

Le rapport
[`aides-creation-site-internet-p3-2026-07-26-r28.md`](../reviews/aides-creation-site-internet-p3-2026-07-26-r28.md)
porte les scénarios adversariaux, les deux verdicts R27 et le contrat R28.

| Sévérité | Écart R27                                       | Fermeture intégrée dans R28                                                                                                  |
| -------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| P1       | Résultat et exports périmés après une mutation  | Signer le dossier analysé et verrouiller verdict partagé, TXT et impression dès que le dossier courant diverge.              |
| P1       | Négation du mandat SIEG contournable            | Détecter la négation grammaticale bornée du fait de confier le service sans créer de preuve favorable depuis le texte libre. |
| P1       | Négation de la distinction SIEG contournable    | Détecter séparément la négation grammaticale bornée de la distinction réelle des services.                                   |
| P1       | Vérification du profil postérieure à l’analyse  | Injecter une date d’analyse explicite et refuser toute date de vérification future.                                          |
| P1       | Date territoriale seulement noyée dans le texte | Exiger une date structurée propre à la preuve, au plus tard égale à la vérification et à l’analyse.                          |
| P1       | Échéance exacte sans chaîne probatoire complète | Exiger une référence officielle identifiable et sa date de vérification.                                                     |
| P2       | Contrôles territoriaux avancés trop présents    | Les replier hors contexte tout en conservant la règle métier visible.                                                        |
| P2       | Absence de suivi structuré après dépôt          | Garder un statut neutre, puis exiger date, accusé identifiable et concordance du dossier lorsqu’un dépôt est déclaré.        |

R28 passe **1 291/1 291** tests métier, interface, brouillon et qualité,
**62/62** tests catalogue/langue/sitemap/indexation, les contrôles techniques
et le build Next direct à **159 pages**. L’artefact local servi mesure
**9 833 mots visibles / 49 minutes**. Le manifeste
`docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r27.sha256`
couvre **87 fichiers**.

R28 reste **sans score et sans GO**. P4 ne peut s’ouvrir qu’après deux audits
froids indépendants à au moins 92/100 chacun, sans P0 ni P1.

### Registre correctif R26 → R27 — historique

Le rapport courant
[`aides-creation-site-internet-p3-2026-07-26-r27.md`](../reviews/aides-creation-site-internet-p3-2026-07-26-r27.md)
porte les scénarios adversariaux et les critères de fermeture. L’union
dédupliquée des audits R26 est la suivante :

| Sévérité | Écart R26                                              | Fermeture exigée dans R27                                                                                                                                                                    |
| -------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| P1       | Priorité du verdict inversée                           | Conserver `invalid` et `excluded` au-dessus de l’incomplétude composite dans le titre, le style, les annonces, la revue, le TXT et l’impression.                                             |
| P1       | Quatorze liens de correction non actionnables          | Relier chaque réponse `non` à son radio et chaque `à confirmer` à son champ de preuve modifiable, avec focus réel.                                                                           |
| P1       | Période pêche extrapolée par années calendaires        | Exiger `secondPreviousStart < previousStart < currentStart <= ancre <= currentEnd`, sans extrapolation ; un quartet incomplet conserve la tranche historique incertaine.                     |
| P1       | Négations SIEG lues comme affirmations                 | Faire porter la conclusion par le statut structuré ; utiliser le texte non authentifié seulement comme garde de contradiction ou d’ambiguïté, avec négations, pronoms, casse et apostrophes. |
| P1       | Plafond pêche français de 40 000 € appliqué trop tôt   | Appliquer 30 000 € avant le 01/01/2026 ; 40 000 € ensuite seulement sous la condition française applicable du registre.                                                                      |
| P1       | Date limite sans heure dépendante du fuseau navigateur | Exiger le fuseau IANA officiel même sans heure et comparer le jour local du guichet ; ne jamais inventer une heure locale.                                                                   |
| P2       | Qualification territoriale UE déduite du texte libre   | Exiger statut structuré et pièce ou source identifiable avec autorité, référence et date valide ; ne rien authentifier.                                                                      |
| P2       | Rapport périmé après modification du prédiagnostic     | Invalider verdict, TXT et impression jusqu’au retransfert puis à une nouvelle analyse ; le JSON exclut les modifications non retransférées.                                                  |
| P2       | Limite de mots seulement décorative                    | Compter les mots Unicode saisis, rendre le compteur et suspendre tout dépassement dans la revue et les exports.                                                                              |
| P2       | Date de vérification future admise                     | Imposer une date ISO non postérieure à la date locale de l’analyse.                                                                                                                          |

Le brouillon R27 migre R26 sans perte : il conserve la borne pêche courante et
la paire prospective, initialise les deux bornes antérieures, la fin courante et
la qualification territoriale à vide ou à confirmer, et ne restaure aucun
verdict. Les méthodes internationales restent limitées à la reprise, à la
progression et à la vérification des réponses ; aucun programme, montant,
critère ou droit étranger n’est transposé.

La porte pré-gel R27 a été arrêtée dès la découverte de deux faux favorables
SIEG. Un mandat structuré `OUI` pouvait survivre à « le mandat écrit ne lui a
jamais confié le service » parce que la garde ne couvrait pas la chaîne
négation, pronom, auxiliaire et participe. Une relation structurée `NON` pouvait
survivre à « les services ne sont pas réellement juridiquement distincts » :
l’adverbe intercalaire échappait à la garde et `distincts` était absorbé
positivement. Les expressions régulières bornées ont été corrigées, dix
variantes adversariales ajoutées et le moteur passe **1 073/1 073**.

Le rejeu indépendant passe **24/24 moteur et 2/2 rapport/TXT**. La relance
consolidée confirme les cinq suites fonctionnelles à **1 209/1 209** et le
total des six suites à **1 252/1 252** ; le contrat qualité reste à 43/43,
l’intégration à 62/62 et
catalogue + qualité à 53/53. TypeScript, ESLint ciblé, Prettier et
`git diff --check` sont verts ; le build Next direct a généré 159 pages
statiques et l’artefact local servi mesure 9 736 mots visibles / 49 minutes.

Le vérificateur d’artefact ne relève aucun écart sur ce guide, mais reste
globalement rouge à cause de deux temps de lecture hors périmètre,
`crm-sur-mesure-ou-hubspot` et `seo-local-pme`. `check:seo` reste à 491/492 :
seul échoue l’ancien hash de `src/lib/guides.ts` attendu par
`editorial-governance` pour `prioriser-fonctionnalites-mvp-saas`, hors périmètre
R27.

R27 est **validé localement et gelé** dans
`docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r26.sha256`,
qui couvre **86 fichiers**. Il reste sans note ni GO ; P4 n’est pas ouverte.
Aucun commit, publication, déploiement, sitemap réellement traité, indexation
réelle ou classement n’est revendiqué.

### Registre correctif R25 → R26 — historique

Le rapport courant
[`aides-creation-site-internet-p3-2026-07-26-r26.md`](../reviews/aides-creation-site-internet-p3-2026-07-26-r26.md)
porte le détail des scénarios. Le contrat de fermeture se résume ainsi :

| Écart du gel R25                                                        | Fermeture exigée dans R26                                                                                                                                                                           |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fenêtre pêche calendaire susceptible de produire un faux rejet          | Utiliser l’exercice fiscal qui contient l’ancre et les deux précédents ; sans borne exacte, séparer sous-total assuré et tranche incertaine, puis propager cette prudence aux cumuls inter-régimes. |
| Preuve SIEG formellement complète mais contradictoire                   | Exiger une polarité affirmative « services distincts » ; « même service » est invalide avec un statut `NON`, une conclusion ambiguë reste incomplète.                                               |
| Heure de clôture conservée mais non comparée                            | Versionner l’instant d’analyse, convertir date, heure et fuseau IANA, puis suspendre les heures locales ambiguës ou inexistantes.                                                                   |
| Résultat favorable malgré une candidature ou un prédiagnostic incomplet | Construire un état effectif unique moteur + candidature + prédiagnostic pour le titre, le style, le résumé, les annonces, le TXT et l’impression.                                                   |
| Précontrôle avant notification incomplet                                | Rapprocher séparément montant brut théorique ou montant/ESB prospectif documenté, garder le budget à 0 €, suspendre un dépassement potentiel sans exclure et ne jamais inventer un ESB.             |
| URL `recordid` contaminable                                             | Refuser tout second paramètre dont le nom ou la valeur porte `recordid`, même si un localisateur valide existe.                                                                                     |
| Champs conditionnels incohérents                                        | Rendre la matrice « Sans objet — aide de droit » hors sélection ; masquer et exporter « Sans objet » les attributs d’une pièce non applicable, sans détruire les valeurs récupérables.              |
| Reprise et échéance trop peu structurées                                | Rendre la navigation post-export sale ; distinguer date exacte, guichet permanent et date non publiée ; avertir aussi pour un prédiagnostic modifié mais non transféré.                             |

R26 a ensuite réussi sa validation réunie, été gelé puis audité. Ses deux
NO-GO historiques et le contrat R27 qui les surclasse sont consignés ci-dessus.

### Registre correctif R11 → R12

| Défaut R11                                                   | Contrat R12 à contre-auditer                                                                                                                                                                                                                                               |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| P1-01 — validation d’URL après transformation                | Valider la saisie brute ; HTTPS ; hôtes exacts `eur-lex.europa.eu` et `data.europa.eu` ; chemin minuscule contrôlé ; refuser `www`, Unicode de compatibilité, antislash, encodage/dot-segment, port, identifiants, query et hash.                                          |
| P1-02 — contexte juridique ambigu ignoré                     | Un numéro officiel doit être isolé et affirmatif ; négation, incertitude ou seconde référence structurée rendent l’ensemble non résolu.                                                                                                                                    |
| P1-03 — clé exacte sur-fusionnée, sans résolution prouvée    | Seule équivalence Unicode canonique non visible ; aucun compactage d’espaces ni fusion de casse, accents, ponctuation ou pleine chasse ; même entreprise = même clé ; entreprises distinctes = confirmation et preuve pour chaque ligne.                                   |
| P1-04 — erreur registre-registre routée vers l’aide courante | Lien, focus, `aria-invalid` et `aria-errormessage` visent chaque aide et son statut ou sa preuve de distinction.                                                                                                                                                           |
| P1-05 — caractères Unicode invisibles hors BMP               | Refuser tous les caractères de formatage et invisibles par défaut, notamment `U+E0100` et `U+E0061`.                                                                                                                                                                       |
| P1-06 — proximité avant fenêtre                              | Filtrer d’abord la fenêtre de trois ans propre à l’ancre ; une ligne hors fenêtre ne bloque pas une ligne pertinente.                                                                                                                                                      |
| P2-01 — grammaire ELI/CELEX officielle incomplète            | Dans ce **snapshot R12 historique antérieur à l’ajout SIEG** : acte de base/`oj`, langue ISO-3, format permis, version consolidée par date, CELEX de base et secteur 0 lié aux trois règlements alors pris en charge ; reconnaissance syntaxique, jamais authentification. |
| P2-02 — double focus après analyse                           | Une seule destination finale : résumé si erreurs, titre des résultats sinon.                                                                                                                                                                                               |
| P2-03 — seconde action “Vider” silencieuse                   | Séquencer les annonces, y compris deux cycles remplir → Vider successifs.                                                                                                                                                                                                  |

### Registre correctif R12 → R13

| Défaut R12 dédupliqué                                                   | Contrat R13 à contre-auditer                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **R13-P1-01 — grammaire juridique positive non fermée**                 | Dans ce **snapshot R13 historique antérieur à l’ajout SIEG**, liste positive finie : numéro isolé, CELEX exact ou ELI officiel exact pour les trois règlements alors contrôlés ; aucune reconnaissance par sous-chaîne et aucune authentification prétendue. |
| **R13-P1-02 — URL Unicode ou pleine chasse**                            | Rejet sur la chaîne brute de tout homoglyphisme, caractère non ASCII ou pleine chasse avant l'interprétation de l'URL.                                                                                                                                       |
| **R13-P1-03 — apostrophes et points non rapprochés**                    | Les variantes d'apostrophe et les points de forme sociale déclenchent une proximité à résoudre, sans somme automatique.                                                                                                                                      |
| **R13-P1-04 — séparateurs sémantiques effacés**                         | Tiret, barre oblique et esperluette restent distincts ; leur différence seule ne crée ni équivalence ni faux groupe.                                                                                                                                         |
| **R13-P1-05 — routage sensible au libellé libre**                       | Un identifiant structurel stable désigne le champ fautif ; les mots du libellé ne peuvent détourner lien, focus, `aria-invalid` ou `aria-errormessage`.                                                                                                      |
| **R13-P2-01 — HTTP officiel sans correction actionnable**               | L'entrée HTTP reste refusée ; le message indique de remplacer uniquement `http://` par `https://`, puis de vérifier hôte et chemin.                                                                                                                          |
| **R13-P2-02 — citation riche sans mode opératoire**                     | La page demande de copier un seul numéro, CELEX ou ELI exact depuis la source, jamais la phrase ou le titre complet.                                                                                                                                         |
| **R13-P2-03 — exemple focalisé sur le résultat malgré des corrections** | Chargement direct et confirmé : un seul focus final, résumé si corrections, résultat sinon.                                                                                                                                                                  |

Ces huit lignes forment **5 P1 et 3 P2**. Elles sont des contrats de fermeture,
pas des corrections validées. R13 reste sans note et sans GO jusqu'aux suites
moteur, interface et qualité réunies, puis aux deux contre-audits indépendants.

### Registre correctif R13 → R14

Le gel R13 de **49 fichiers** est resté intact à **49/49 au début et à la fin**
des deux lectures froides. Le SHA-256 de son manifeste est
`6b1b8bf13122980d8fd57d6a499c6544b7cb1afd015c88b80c30b1cd13c6f6ca`.
Le contrôle factuel, juridique et financier a rendu
**72/100 — NO-GO P4** (`P0 : 0 ; P1 : 3 ; P2 : 2`) ; le contrôle expérience,
interface et accessibilité a rendu **85/100 — NO-GO P4**
(`P0 : 0 ; P1 : 1 ; P2 : 1`). Leur union distincte est de
**4 P1 et 3 P2**.

| Défaut R13                                                 | Fermeture R14 à contre-auditer                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **R14-P1-01 — proximité d’identité**                       | Les espaces autour de `&`, `+`, `/`, `\` et des apostrophes, les variantes d’apostrophe, les abréviations avec points ou espaces, `œ/oe` et `æ/ae` signalent une proximité. La clé exacte seule est cumulée ; aucune fusion automatique et aucun effacement d’un séparateur différent.                                                                                                                                                                                                                    |
| **R14-P1-02 — base juridique inconnue avant notification** | La branche reste toujours incomplète et demande une qualification ; l’aide budgétée reste 0 €, sans effacer les sous-calculs indépendants.                                                                                                                                                                                                                                                                                                                                                                |
| **R14-P1-03 — export TXT altéré**                          | Les espaces internes et mots littéraux `Infinity`, `NaN`, `undefined` sont conservés ; antislash et contrôles de ligne sont échappés. L’export reste une copie locale non authentifiée.                                                                                                                                                                                                                                                                                                                   |
| **R14-P1-04 — structure de résultats invalide**            | Chaque terme, définition et note forme un groupe valide dans la liste de définitions ; la règle axe-core `definition-list` est rejouée.                                                                                                                                                                                                                                                                                                                                                                   |
| **R14-P2-01 — URL d’autorité surqualifiée**                | HTTPS et hôte DNS public sont requis ; identifiants, port, IP, local, réservé, hôte sans point et DNS invalide sont refusés. Un domaine public inconnu est explicitement non authentifié et impose de vérifier domaine, autorité et chemin.                                                                                                                                                                                                                                                               |
| **R14-P2-02 — coût sans réserve fiscale proche**           | Les cartes et le TXT qualifient les coûts avant traitement fiscal et comptable. La dépense et la subvention peuvent suivre des traitements différents ; l’[article 42 septies du CGI](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000046868472) et le [BOFiP sur les subventions d’équipement](https://bofip.impots.gouv.fr/bofip/1950-PGP.html/identifiant=BOI-BIC-PDSTK-10-30-10-20-20230628), consultés le 26/07/2026, ne qualifient automatiquement ni le site, ni la dépense, ni l’aide. |
| **R14-P2-03 — aide de minimis et IDREF**                   | L’aide partagée est présente exactement une fois dès l’état initial et reste référencée par les contrôles courants et du registre. Pour HTTP, remplacer uniquement le préfixe par HTTPS, puis vérifier hôte et chemin.                                                                                                                                                                                                                                                                                    |

R14 reste un candidat sans score et sans GO. Cette table décrit les corrections
intégrées à éprouver ; elle ne remplace ni les nouveaux contre-audits froids,
ni le contrôle P4 réel.

### Registre correctif R14 → R15

Le gel R14 de **52 fichiers** est resté intact à **52/52 au début et à la fin**
du contrôle froid ; SHA-256 du manifeste :
`c3bc0f0b4a0dac6230e55c6cb6e3fc5ac9f7ac40a39bcc62b6b9c11c1f4ce5b4`.
Le contrôle factuel, juridique et financier a rendu
**82/100 — NO-GO P4** (`P0 : 0 ; P1 : 2 ; P2 : 2`). Aucun second verdict
n’est inventé : le second axe n’a pas été lancé après la découverte des P1.

| Défaut R14                                                 | Fermeture R15 à contre-auditer                                                                                                                                                                                                                  |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **R15-P1-01 — homoglyphes d’entreprise unique**            | Détecter les scripts mixtes et confusables sans fusion ni somme ; préserver les noms cohérents non latins et la clé exacte ; exiger une décision documentée avant tout regroupement.                                                            |
| **R15-P1-02 — caractères de contrôle dans le TXT**         | Échapper C0/C1, `U+2028`, `U+2029`, bidi, format/invisibles et surrogates isolés ; préserver les espaces internes et les mots légitimes `Infinity`, `NaN`, `undefined`.                                                                         |
| **R15-P2-01 — domaines réservés**                          | Refuser `example.com`, `example.net`, `example.org`, `home.arpa` et leurs sous-domaines, sans faux positif sur `example.gouv.fr` ; garder l’état non authentifié des vrais domaines publics inconnus.                                           |
| **R15-P2-02 — obligations après attribution et versement** | Séparer calendrier/avenants et suivi post-attribution. Le nouveau champ et le TXT doivent couvrir rapports, livrables, KPI, visibilité, conservation, contrôles, maintien éventuel, changements et restitution, sans règle ni durée par défaut. |

La méthode post-attribution est confrontée aux sources officielles de la
[Commission européenne](https://commission.europa.eu/funding-and-tenders/managing-your-project/managing-your-project-under-grant-agreement_fr),
d’[Enterprise Singapore](https://www.enterprisesg.gov.sg/financial-support/productivity-solutions-grant),
de [business.gov.au](https://business.gov.au/grants-and-programs/regional-australia-intergovernmental-shared-inquiry-program)
et à une [convention française
publique](https://data.megalis.bretagne.bzh/OpenData/200069409/Autres/2024/754393/1027aab7c671e17d7b4f7c9637551beb639acd024eaaf37ce4ec35fa65776406.pdf),
consultées le 26/07/2026. Elles fournissent une grille de questions, jamais une
transposition de leurs durées ou règles. Dans ce registre historique, R15
n’avait **aucune note ni aucun GO**.

### Registre correctif R15 → R16

Le gel R15 de **54 fichiers** est resté intact à
**54/54 au début et à la fin** des deux contre-audits ; SHA-256 du manifeste :
`5cfc1131e0d0ed42723b6869cf21123dfcc58cdc9998baaeae723aa6760c5a18`.
Le contrôle factuel, juridique et financier a rendu
**84/100 — NO-GO P4** (`P0 : 0 ; P1 : 1 ; P2 : 2`). Le contrôle expérience,
interface et accessibilité a rendu **86/100 — NO-GO P4**
(`P0 : 0 ; P1 : 1 ; P2 : 2`). Les sévérités restent celles de chaque axe ;
elles ne sont ni additionnées ni augmentées par le durcissement orchestrateur.
**P4 est bloqué.**

| Défaut R15 ou durcissement orchestrateur                                            | Fermeture R16 à contre-auditer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **R16-F-P1-01 — confusables whole-script**                                          | Ajouter avant les totaux une barrière conservatrice : deux clés exactes différentes du même État et de la même fenêtre sont suspendues dès que leurs profils Latin, grec ou cyrillique diffèrent. Le filtre sur-signale volontairement ; ce n’est pas une implémentation complète des confusables whole-script d’UTS #39 et il ne démontre pas que chaque paire est visuellement confusable. Suspendre sans fusion ni somme ; préserver chaque clé exacte et les noms cohérents dans un même script non latin. Rejouer `ha`/`һа`, `data`/`ԁата`, `wm`/`ԝм`, `co`/`ϲο`, un contre-exemple interscripts non spécialement confusable et le cas exact `ha`/`ha`, seul cumulable à `300 001 €`. |
| **R16-F-P2-01 — délimiteur pipe du TXT**                                            | Le pipe utilisateur est encodé `\u{007C}` et l’antislash `\\`. Les séparateurs de structure restent exclusivement produits par le système : aucune saisie libre ne fabrique de colonne, rubrique, statut ou verdict.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **R16-F-P2-02 — espaces spéciaux `.arpa`**                                          | Refuser `.arpa` et tous ses sous-domaines, y compris avec casse ou point final. `example.gouv.fr` reste un contre-exemple accepté ; un domaine public réel inconnu reste seulement averti comme non authentifié.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **R16-UX-P1-01 — erreurs locales incomplètes par axe**                              | Relier chaque erreur au champ exact par une relation ARIA valide et exécuter axe-core complet. Les reproductions R15 trouvent 32 violations `aria-valid-attr-value` à vide, 4 sur Bretagne incomplet et 24 sur l’exemple enrichi, plus `aria-prohibited-attr` sur le résumé ; la seule règle `definition-list` ne suffit pas.                                                                                                                                                                                                                                                                                                                                                              |
| **R16-UX-P2-01 — confirmations non modales**                                        | Remplacer les modèles incompatibles `alert`/`alertdialog` par deux groupes de confirmation en ligne non modaux. Le focus initial va vers l’action sûre ou l’annulation, aucune mutation ne précède l’accord explicite et le retour de focus est prévisible.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **R16-UX-P2-02 — densité des trois blocs publics**                                  | Scinder et hiérarchiser les trois blocs visibles mesurés à environ **303 mots**, **307 mots** et **240 mots**. Conclusion, action et limite doivent être repérables sans traverser un texte encyclopédique ; cette ligne consigne une cible, pas une correction validée.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **R16-H-01 — marqueur post-attribution « à confirmer »** — hors score orchestrateur | Un champ structuré d’obligations qui contient encore le marqueur « à confirmer », même en tête d’une phrase, laisse le dossier incomplet. Le TXT conserve le marqueur. Ce durcissement ne se fusionne ni avec `R16-UX-P1-01` ni avec les deux P2 UX et ne change pas le verdict R15.                                                                                                                                                                                                                                                                                                                                                                                                       |

Les six défauts scorés conservent exactement le double compte R15 : factuel
`P1 : 1 ; P2 : 2`, UX `P1 : 1 ; P2 : 2`. `R16-H-01` est un durcissement
supplémentaire non scoré. Dans ce registre historique, R16 restait candidat,
avec **aucune note ni aucun GO**, jusqu’aux contrôles intégrés, au nouveau gel
commun, aux deux contre-audits indépendants et à la porte P4.

### Registre correctif R16 → R17

Le gel R16 de **56 fichiers** est resté intact à
**56/56 au début et à la fin** des deux contre-audits ; SHA-256 du manifeste :
`b84fd7efa36e5b34f79dc572c9c32ac6ca52bdff3c9fe4d82bdcd1d0aba20835`.
Le contrôle factuel, juridique et financier a rendu
**84/100 — NO-GO P4** (`P0 : 0 ; P1 : 1 ; P2 : 2`). Le contrôle expérience,
interface et accessibilité a rendu **90/100 — NO-GO P4**
(`P0 : 0 ; P1 : 0 ; P2 : 3`). Les sévérités restent celles de chaque axe.
**P4 est bloqué.**

| Défaut R16                                       | Fermeture R17 à contre-auditer                                                                                                                                                                                                                      |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **R17-F-P1-01 — invisibles post-attribution**    | Détecter les marqueurs d’incertitude malgré les caractères Unicode invisibles ou de formatage. Le champ reste incomplet ; le TXT conserve la saisie à comparer sans l’authentifier.                                                                 |
| **R17-F-P2-01 — double ancrage**                 | Exposer la convention de précontrôle : groupe de l’aide courante ancré à la date juridique d’octroi ; autres groupes enregistrés ancrés à la date de vérification du dossier. L’autorité confirme la période et l’applicabilité.                    |
| **R17-F-P2-02 — tableau Markdown**               | Réparer la ligne du rapport R16 et interdire toute barre verticale littérale non échappée dans une cellule. La ligne conserve exactement quatre cellules et reste lisible au rendu.                                                                 |
| **R17-UX-P2-01 — confirmations exclusives**      | Les confirmations non modales de chargement et d’effacement deviennent mutuellement exclusives. Ouvrir l’une ferme l’autre sans mutation ; Annuler ou Échap rend le focus au déclencheur attendu.                                                   |
| **R17-UX-P2-02 — suppression jargon public**     | Remplacer noms adversariaux, détails d’échappement et vocabulaire interne par une explication naturelle : le TXT garde noms, libellés et espaces, neutralise les caractères structurels et n’authentifie pas la preuve.                             |
| **R17-UX-P2-03 — aide Unicode partagée concise** | Une seule aide Unicode courte est partagée entre l’aide courante et toutes les lignes du registre. Elle explique la recopie exacte, le signal de proximité et l’absence de fusion automatique ; toutes les références accessibles restent résolues. |

À l’ouverture de ce registre historique, R17 restait candidat, avec **aucune
note ni aucun GO**, jusqu’aux contrôles intégrés, au nouveau gel commun, aux
deux contre-audits indépendants et à la porte P4.

### Registre correctif R17 → R18

Le gel R17 de **58 fichiers** est resté intact à
**58/58 au début et à la fin** des deux contre-audits à partir du manifeste
`docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r16.sha256` ;
SHA-256 :
`550440f3e2d8bd798507782d7312eca572de53b06b93fbe13401e61eb87e8abc`.
Le contrôle factuel, juridique et financier a rendu
**84/100 — NO-GO P4** (`P0 : 0 ; P1 : 1 ; P2 : 0`). Le contrôle expérience,
interface et accessibilité a rendu **92/100 — GO P4**
(`P0 : 0 ; P1 : 0 ; P2 : 1`). Le GO UX ne ferme pas le P1 factuel :
**P4 global est bloqué par le P1 factuel.**

| Défaut R17                                                                | Fermeture R18 à contre-auditer                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **R18-F-P1-01 — séparateurs Unicode Zs dans les marqueurs d’incertitude** | Neutraliser, pour l’analyse sémantique seulement, les 16 séparateurs Unicode Zs non ASCII capables de couper un marqueur d’incertitude. La matrice compte **192 cas**, dont **128 échecs R17** ; l’objectif R18 est **192/192**. La saisie brute reste conservée et l’export TXT échappe les séparateurs sans les authentifier. |
| **R18-UX-P2-01 — durée du premier prédiagnostic**                         | Qualifier les **5 à 10 minutes** comme un premier prédiagnostic de tri des pistes, jamais comme une promesse de complétion. Le dossier complet de **53 champs**, avec devis, règlement, notification et preuves, demande typiquement **20 à 40 minutes, parfois davantage**.                                                    |

À l’ouverture de ce registre historique, R18 restait candidat, avec **aucune
note ni aucun GO**, jusqu’aux contrôles intégrés, au nouveau gel commun, aux
deux contre-audits indépendants et à la décision P4 globale.

### Registre correctif R18 → R19

Le gel R18 de **60 fichiers** est resté intact à
**60/60 au début et à la fin** des deux contre-audits à partir du manifeste
`docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r17.sha256` ;
SHA-256 :
`e4dc150d950d0866e34c99ee76047865880ed03b87b369803ddbbc91c6c83e30`.
Le contrôle factuel, juridique et financier a rendu
**82/100 — NO-GO P4** (`P0 : 0 ; P1 : 1 ; P2 : 1`). Le contrôle expérience,
interface et accessibilité a rendu **84/100 — NO-GO P4**
(`P0 : 0 ; P1 : 1 ; P2 : 1`). Les sévérités restent propres à chaque axe.
**P4 est bloquée.**

| Défaut R18                                                                        | Fermeture R19 à contre-auditer                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **R19-F-P1-01 — grammaire naturelle, pluriels, tirets et confirmation non reçue** | Étendre la grammaire post-attribution aux variantes naturelles singulières et plurielles, aux graphies avec tiret et à « confirmation non reçue », tout en conservant les frontières lexicales et les confirmations documentées.       |
| **R19-F-P2-01 — inventaire des vingt et une lignes Markdown**                     | Corriger le rapport R17 : le contrôle portait sur **vingt et une lignes**, non vingt. Chaque ligne conserve le nombre de cellules attendu et aucune valeur libre ne crée une colonne.                                                  |
| **R19-UX-P1-01 — TXT et impression interdits avant analyse**                      | Avant « Analyser le dossier », le téléchargement TXT et l’impression restent indisponibles et expliqués ; aucun document ne doit présenter un verdict qui n’a pas été demandé.                                                         |
| **R19-UX-P2-01 — prédiagnostic court matérialisé avant le formulaire**            | Placer une étape courte et actionnable de premier prédiagnostic avant le formulaire complet de 53 champs. Elle trie les pistes sans conclure à l’éligibilité et reste distincte du dossier probatoire de 20 à 40 minutes ou davantage. |

R19 reste candidat, avec **aucune note ni aucun GO**. Ce registre n’affirme
aucun résultat de test, aucune fermeture ni aucune validation P4.

### Registre correctif historique R19 → R20

Le gel R19 de **62 fichiers** est resté intact à
**62/62 au début et à la fin** des deux contre-audits à partir du manifeste
`docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r18.sha256` ;
SHA-256 :
`57611eb7b770766ead13e02b9a6be8e4bb32a66edcc0943e18093455dff8898c`.
Le contrôle factuel, juridique et financier a rendu
**78/100 — NO-GO P4** (`P0 : 0 ; P1 : 1 ; P2 : 2`). Le contrôle expérience,
pédagogie et accessibilité a rendu **96/100 — GO P4**
(`P0 : 0 ; P1 : 0 ; P2 : 0`). Les sévérités restent propres à chaque axe. Le
GO UX ne ferme pas le P1 factuel : **P4 globale est bloquée.**

| Défaut R19                                               | Fermeture R20 à contre-auditer                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **R20-F-P1-01 — statut post-attribution structuré**      | Le formulaire passe à **54 champs** avec `postAwardEvidenceVerified` comme tri-état distinct du texte libre. `unknown` et `no` maintiennent la preuve incomplète ; `yes` reste une déclaration de vérification et conserve la limite d’absence de lecture ou d’authentification de la pièce par le moteur.                                                                                                                                                                         |
| **R20-F-P2-01 — aucune inférence depuis le texte libre** | Ne plus inférer le statut depuis `postAwardObligationsEvidence`. Une négation, une formulation historique résolue, une affirmation ou une chaîne adversariale ne modifie jamais le tri-état ; le TXT conserve séparément le statut et le texte déclarés.                                                                                                                                                                                                                           |
| **R20-F-P2-02 — SIEG 2023/2832 et cumul borné**          | Reconnaître syntaxiquement les formes exactes `2023/2832`, `Règlement (UE) 2023/2832`, `CELEX:32023R2832` et `https://eur-lex.europa.eu/eli/reg/2023/2832/oj`. Appliquer 750 000 € sur trois ans et le repère combiné général + SIEG de 1 050 000 € sans créer un plafond universel ; signaler l’interdiction de toute compensation du même SIEG et borner l’exception d’entreprise unique au seul lien direct partagé avec une personne publique ou une entité sans but lucratif. |

Le bornage SIEG repose uniquement sur les règlements officiels EUR-Lex
[2023/2832](https://eur-lex.europa.eu/eli/reg/2023/2832/oj) et
[2023/2831](https://eur-lex.europa.eu/eli/reg/2023/2831/oj). La syntaxe reconnue
ne prouve ni que le service est un SIEG, ni que le règlement est applicable, ni
que deux entités relèvent ou non de la même entreprise unique, ni qu’aucune
autre compensation ne vise le même service.

Dans ce snapshot d’ouverture, R20 restait candidat, avec **aucune note ni aucun
GO**. Ce registre ouvrait exactement trois défauts et n’affirmait aucun
résultat de test, aucune fermeture ni aucune validation P4.

### Registre correctif R20 → R21

Le gel R20 de **64 fichiers** est resté intact à **64/64 au début et à la fin**
du contre-audit factuel à partir du manifeste
`docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r19.sha256` ;
SHA-256 :
`e37ee2703b375f2bb0ff97c729d3c3dfe163798a0f2f1dfb1cd6a8f0a8232019`.
Le contrôle factuel, juridique et financier a rendu
**72/100 — NO-GO P4** (`P0 : 0 ; P1 : 2 ; P2 : 1`). Aucun audit UX R20 n’a été
lancé après ce NO-GO ; les P1 factuels bloquaient déjà P4.

| Défaut R20                                            | Fermeture R21 à contre-auditer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **R21-F-P1-01 — fusions, acquisitions et scissions**  | Appliquer le contrôle aux quatre règlements : `2023/2831` et `2023/2832`, article 3(8)-(9) ; agriculture `1408/2013` consolidé au 16/12/2024, article 3(9)-(10) ; pêche/aquaculture `717/2014` consolidé au 25/10/2023, article 3(8)-(9). Toutes les aides antérieures des entreprises fusionnées ou acquises entrent dans le contrôle de la nouvelle aide, sans remettre en cause les aides légalement octroyées avant l’opération. En cas de scission, l’aide est affectée à l’entreprise bénéficiaire, en principe celle qui reprend l’activité financée ; à défaut d’affectation possible, elle est ventilée proportionnellement sur la base de la valeur comptable du capital des nouvelles entreprises à la date effective de la scission. |
| **R21-F-P1-02 — mandat et compensation du même SIEG** | Le considérant 9 du règlement `2023/2832` exige un SIEG confié par écrit ou par voie électronique. Son article 5(2) interdit le cumul avec toute compensation relative au même SIEG, qu’elle constitue ou non une aide d’État. Le moteur doit traiter séparément le mandat applicable, le service confié et l’identité du service compensé, sans les inférer du texte libre ni prétendre lire ou authentifier les pièces.                                                                                                                                                                                                                                                                                                                        |
| **R21-F-P2-01 — quatre règlements reconnus**          | Le moteur vivant reconnaît syntaxiquement exactement **quatre règlements** : `2023/2831`, `2023/2832`, `1408/2013` et `717/2014`. Les mentions historiques d’un total de trois sont explicitement bornées aux snapshots antérieurs à l’ajout SIEG. La liste reste fermée et ne prouve ni authenticité, ni applicabilité, ni qualification juridique.                                                                                                                                                                                                                                                                                                                                                                                             |

Le contrat candidat sépare
`deMinimisCorporateEventOccurred`, `deMinimisCorporateEventKind`,
`deMinimisCorporateEventEvidence`, `deMinimisCorporateAidHistoryAdjusted`,
`sgeiEntrustmentVerified`, `sgeiEntrustmentEvidence`,
`sgeiServiceIdentity`, `sgeiSameServiceCompensationPresent` et
`sgeiCompensationEvidence`. Les messages sont bornés par « Restructuration de
l’entreprise pour le cumul de minimis », « mandat SIEG » et « autre
compensation du même SIEG ».

Sources primaires :
[règlement (UE) 2023/2831, article 3(8)-(9)](https://eur-lex.europa.eu/eli/reg/2023/2831/oj)
et
[règlement (UE) 2023/2832, considérant 9, article 3(8)-(9) et article 5(2)](https://eur-lex.europa.eu/eli/reg/2023/2832/oj).
[Règlement agricole (UE) 1408/2013 consolidé au 16 décembre 2024, article 3(9)-(10)](https://eur-lex.europa.eu/eli/reg/2013/1408/2024-12-16/fra)
et
[règlement pêche et aquaculture (UE) 717/2014 consolidé au 25 octobre 2023, article 3(8)-(9)](https://eur-lex.europa.eu/eli/reg/2014/717/2023-10-25/fra)
complètent la matrice.

R21 reste candidat, avec **aucune note ni aucun GO**. Ce registre ouvre
exactement trois défauts et n’affirme aucun résultat de test, aucune fermeture,
aucune validation P4 ni aucune chaîne moteur ou interface encore instable.

### Registre correctif R21 → R22

Le gel R21 de **66 fichiers** est resté intact à **66/66 au début et à la fin**
des deux audits froids à partir du manifeste
`docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r20.sha256` ;
SHA-256 :
`cdeeccb3fb6a93d58d5545daf57dcbba5a6214a5a541f62da823d1ddc2c6b87f`.
Le contrôle factuel, juridique et financier a rendu
**86/100 — NO-GO P4** (`P0 : 0 ; P1 : 3 ; P2 : 0`). Le contrôle expérience,
pédagogie et accessibilité a rendu **86/100 — NO-GO P4**
(`P0 : 0 ; P1 : 1 ; P2 : 2`). **P4 n’a pas été lancée.**

<!-- prettier-ignore -->
| Défaut R21                                                              | Fermeture R22 à contre-auditer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **R22-F-P1-01 — compensations interlignes du même SIEG**                | Comparer toutes les lignes SIEG dans le même groupe et la même fenêtre de trois ans : aide courante ↔ registre et registre ↔ registre. Une identité exacte du service bloque le cumul, y compris face à deux déclarations individuelles négatives ; une graphie proche suspend la conclusion sans fusion automatique. L’article 5, paragraphe 2, du règlement `2023/2832` reste la règle applicable, sans authentification locale du service ou des pièces.                                                                        |
| **R22-F-P1-02 — cohérence bornée entre statut et preuve**               | Rejeter les contradictions littérales entre les statuts SIEG et les textes de preuve déclarés, tout en conservant la frontière : aucun texte ne promeut un statut, aucune pièce n’est comprise, qualifiée ou authentifiée par le moteur. Les cas affirmatifs, négatifs, historiques et adversariaux doivent rester bornés.                                                                                                                                                                                                                      |
| **R22-F-P1-03 — registre central français 2026/2027**                   | Ajouter `centralRegisterStatus` et `centralRegisterReference` à l’aide courante et à chaque aide du registre. En France, le contrôle s’applique au **1er janvier 2026** pour général, SIEG et pêche-aquaculture, puis au **1er janvier 2027** pour agriculture, avec une transmission à tracer dans les **20 jours ouvrables**. `registered` exige une référence formelle ; tout autre statut applicable bloque. L’outil ne consulte pas le registre et n’authentifie ni statut ni référence. |
| **R22-UX-P1-01 — parcours progressif et reprise du brouillon**          | Quatre étapes de saisie sont suivies d’une revue/analyse. Un seul panneau est monté, l’étape courante utilise `aria-current="step"` et chaque erreur ouvre la bonne étape avant le focus du contrôle. Avant analyse, le brouillon JSON versionné est exportable/importable localement, sans stockage persistant ni réseau. Le TXT et l’impression restent bloqués avant analyse.                                                                                                                                                          |
| **R22-UX-P2-01 — règle métier avant syntaxes avancées**                 | L’ordre de lecture présente la règle métier et l’exemple normal avant les syntaxes CELEX, ELI, URL et Unicode. Ces réparations avancées restent dans un `<details>` replié et ne remplacent jamais la confirmation de l’autorité.                                                                                                                                                                                                                                                                                                                        |
| **R22-UX-P2-02 — prédiagnostic personnalisé**                           | `SiteAidPreDiagnosis` remplace la checklist statique : cinq questions interactives, trois réponses structurées, progression, conclusion, preuves à obtenir et prochaine action recalculées. La branche positive oriente vers le dossier complet sans conclure à l’éligibilité.                                                                                                                                                                                                                                                                            |

Le candidat observé dans le workspace porte
`site-aid-decision-r22-2026-07-26`. Les nombres **57, 59, 62 et 64** sont des
totaux conditionnels du dossier, jamais un décompte de champs simultanément
visibles. Les sources primaires de cette ouverture sont le
[règlement (UE) 2023/2832, article 5, paragraphe 2](https://eur-lex.europa.eu/eli/reg/2023/2832/oj),
le
[décret n° 2025-1361](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000053177293)
et la
[circulaire du Premier ministre](https://agriculture.gouv.fr/telecharger/153667),
signée le **3 mars 2026** mais datée du **4 mars 2026 dans son en-tête**.

R22 reste **CANDIDAT, sans note ni GO**. Aucun résultat local ne ferme ces six
contrats avant le nouveau gel et les deux audits froids. P4 n’est pas lancée ;
aucun classement, déploiement, traitement du sitemap ou indexation n’est
revendiqué.

### Registre correctif R22 → R23

Le gel R22 de **72 fichiers** est resté intact à **72/72 au début et à la fin**
des deux audits froids à partir du manifeste
`docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r21.sha256` ;
SHA-256 :
`2c436d330340c5bc1b9964f2fefa9b6c0d1b0d37ee0b38fe25adbe4cdaa9b1e8`.
Le contrôle factuel a rendu **75/100 — NO-GO P4**
(`P0 : 0 ; P1 : 4 ; P2 : 2`) et le contrôle expérience, pédagogie et
accessibilité **80/100 — NO-GO P4**
(`P0 : 0 ; P1 : 3 ; P2 : 3`).

| Défaut R22                                            | Fermeture R23 à contre-auditer                                                                                                                                                                          |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **R23-F-P1-01 — fenêtre SIEG erronée**                | Séparer le plafond triennal de l’article 5(2) : une autre compensation du même SIEG reste à contrôler sans limite de trois ans.                                                                         |
| **R23-F-P1-02 — paraphrase du même service**          | Chaque ligne SIEG comparable déclare sa relation au service actuel et une preuve lorsqu’elle est dite distincte. Une différence de mots ne produit jamais un favorable.                                 |
| **R23-F-P1-03 — contradictions textuelles**           | Détecter la deuxième compensation malgré un statut négatif, sans faux positif sur une acquisition précédée de « aucune fusion » ni sur un acte écrit précédé d’une préparation orale.                   |
| **R23-F-P1-04 — État membre ambigu**                  | Afficher et exporter l’État membre de l’autorité d’octroi, pas le siège du bénéficiaire, pour le registre, le cumul et le plafond pêche.                                                                |
| **R23-F-P2-01 — source des vingt jours**              | Citer les articles 6 des règlements pour l’obligation générale et borner les articles 2-3 du décret aux organismes français qu’ils visent ; distinguer transmission, publication et disponibilité.      |
| **R23-F-P2-02 — référence publique**                  | Demander URL ou `recordid` public, ou attestation identifiable ; ne jamais exiger l’identifiant unique interne non publié.                                                                              |
| **R23-UX-P1-01 — erreur locale invisible**            | Conserver le résumé global, mais afficher aussi le message exact sous le contrôle ciblé, son état visuel invalide, le nombre d’erreurs de l’étape et le retour vers la revue.                           |
| **R23-UX-P1-02 — revue partielle et technique**       | Rendre toutes les valeurs, preuves, inconnues et lignes décisionnelles en français humain, avec des actions de modification vers la micro-étape exacte.                                                 |
| **R23-UX-P1-03 — méga-étape de vingt-sept contrôles** | Scinder le parcours en micro-étapes métier, un seul panneau monté, progression/focus/reprise stables, règle et exemple normal avant la branche avancée.                                                 |
| **R23-UX-P2-01 — prédiagnostic agrégé**               | Distinguer implantation, activité, profil, dépenses, calendrier, trésorerie, obligations, base et cumul avant de compter les preuves et personnaliser l’action.                                         |
| **R23-UX-P2-02 — acronymes précoces**                 | Développer équivalent-subvention brut et service d’intérêt économique général avant ESB et SIEG.                                                                                                        |
| **R23-UX-P2-03 — dossier difficile à maintenir**      | Utiliser la [matrice courante](../../../research/aides-creation-site-internet-matrice-sources-courantes-2026-07-26.md) pour les affirmations actives ; conserver le reste comme historique append-only. |

R23 ne reçoit ici **aucune note ni aucun GO**. Les corrections locales et leurs
tests ne ferment pas ce registre. Il faut d’abord les intégrer, les geler dans
un nouveau manifeste et les soumettre à deux nouveaux audits froids. P4,
classement, commit, publication, déploiement, sitemap de production et
indexation restent hors verdict.

## 1. Verdict exécutif historique du 24 juillet

```text
Lecteur exact : dirigeant de TPE/PME, commerçant ou créateur qui a un budget de site de 6 000 à 20 000 € et cherche à savoir si une aide peut réduire ou financer le projet.
Question réelle : « Ai-je une aide réellement ouverte, suis-je éligible, que puis-je engager sans perdre mes droits, et dois-je attendre ou lancer le site sans elle ? »
Décision attendue : rechercher puis confirmer un dispositif, séparer subvention/prêt/formation/avantage fiscal, décider avec deux budgets et ne rien signer trop tôt.
Réponse actuelle en une phrase : il n'existe pas de chèque national automatique, mais des pistes locales, un prêt, des aides de création et des effets fiscaux existent sous conditions ; il faut confirmer avant acompte.
Défaut qui coûte le plus de valeur : la promesse de méthode est bonne, mais le guide ne donne pas encore le dossier de décision complet (aide actuelle, bénéficiaire exclu, dépenses admises, calendrier, cash net et coût d'attendre) et décrit Atouts Numériques comme non confirmé alors qu'une fiche officielle actuelle est ouverte.
Niveau actuel : B
Priorité : haute
Statut : audité, non réécrit, non contre-audité après correction
Portes P1–P4 : P1 recherche = NON PASS pour publication (dossier de recherche absent et vérifications actuelles incomplètes) ; P2 rédaction = présence d'un guide de base, mais porte NON VALIDÉE au standard renforcé ; P3 = rapport de contre-audit présent, mais porte NON VALIDÉE sur un snapshot corrigé tant que les P1 restent ouverts ; P4 humanisation/QA = NON PASS après correction, car aucune correction n'est autorisée dans ce chantier en lecture seule.
Publication/indexation : non prouvées. Le local affiche `noindex, nofollow` ; aucune preuve de production, de sitemap traité ou d'indexation Google n'a été produite ici.
```

### Score avant correction

| Axe         | Note /10 | Preuve localisable                                                                   | Manque décisif                                                                                                                          |
| ----------- | -------: | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| Intention   |        9 | Lead et FAQ, `page.tsx:227-241` et `97-145`                                          | L'intention est bonne, mais la question « attendre ou lancer » n'est pas traitée avec un coût de délai quantifié.                       |
| Décision    |        8 | Deux budgets et ordre de dépôt, `page.tsx:735-850`                                   | Pas de matrice finale par profil/territoire ; pas de règle d'arrêt si le financeur ne répond pas.                                       |
| Pédagogie   |        8 | Familles de financement, alertes CPF/lease, `page.tsx:250-340`, `550-600`, `700-735` | Le vocabulaire « aide », « prêt », « accompagnement », « ACRE/ARCE », « fiscal » n'est pas repris dans une fiche de décision unique.    |
| Profondeur  |        7 | Bretagne + calcul unique, `page.tsx:619-642`                                         | Pas de scénarios 6k/10k/20k, remboursement, TVA, plafond, paiement différé ni sensibilité.                                              |
| Preuve      |        6 | Sources officielles multiples, `page.tsx:879-967`                                    | Source Atouts mal qualifiée, compteur « près de 200 » non établi, CPF sans lien direct, pied de page daté du 21 juillet.                |
| Comparaison |        7 | Tableau des familles, `page.tsx:250-340`                                             | Comparaison qualitative sans TAEG/mensualité, coût de l'attente, trésorerie initiale et résultat net.                                   |
| Originalité |        7 | Règle « aide = 0 », caution sur location financière, `page.tsx:227-241`, `700-735`   | L'outil copiable et le contrôle inverse manquent ; le lecteur ne peut pas appliquer la méthode à son dossier.                           |
| Style       |        8 | Ton direct, exemples et avertissements lisibles                                      | Une répétition de la procédure (deux listes, `page.tsx:700-850`) alourdit la fin et donne une impression de gabarit.                    |
| Conversion  |        8 | CTA honnête vers `/demarrer-un-projet`, `page.tsx:831-862`                           | Le CTA demande de décrire le projet mais ne promet pas de livrable concret (grille de vérification, budget sans aide, liste de pièces). |
| SEO/produit |        7 | H1 unique, FAQ, Article + BreadcrumbList, canonique et 23 liens externes vus en QA   | Le contenu est long mais ne couvre pas les entités actuelles les plus directement utiles ; local noindex et publication non vérifiés.   |

Total : **75/100**

Priorités : **P0 = 0, P1 = 10, P2 = 4**. Aucun risque P0 de sécurité ou de droit de publication n'a été observé ; les P1 sont des corrections avant de présenter le guide comme une référence fiable en 2026.

## 2. Ce que le guide dit réellement

L'ouverture est l'un des points forts du site : elle parle immédiatement de 6 000, 10 000 ou 20 000 €, retire le faux réflexe du chèque national de 500 €, puis dit de confirmer avant signature ou acompte. Un dirigeant comprend donc rapidement la règle de prudence.

La progression actuelle est :

1. distinguer subvention locale, accompagnement, prêt, aide à la création et traitement comptable/fiscal ;
2. écarter le chèque France Num historique ;
3. présenter le Prêt Boost comme une solution nationale remboursable ;
4. rappeler le rôle de l'expert-comptable et la limite du CII ;
5. distinguer ACRE/ARCE d'une aide au site ;
6. distinguer CPF/formation de la prestation d'agence ;
7. rechercher les aides locales, avec un exemple Bretagne ;
8. mentionner Savoie/Auvergne-Rhône-Alpes ;
9. déposer dans le bon ordre ;
10. inviter à décrire son projet sans promettre d'éligibilité.

Cette architecture évite le faux espoir, mais elle reste une méthode narrative plutôt qu'un instrument de décision. La répétition des étapes à la fin (d'abord sept étapes, puis les quatre mêmes actions recopiées) réduit la densité de valeur. Le lecteur ne trouve pas encore une fiche du type : « Mon entreprise / mon territoire / ma dépense / ma date de début / l'organisme / le montant net / la preuve écrite / le plan B ».

Les éléments qui paraissent complets sans l'être :

- « près de 200 aides » donne une impression d'exhaustivité alors que la page France Num actuelle expose surtout un moteur filtrable, pas ce chiffre ;
- « la numérisation peut être admise » pour la Bretagne est trop vague pour un commerçant : la fiche officielle liste des dépenses admissibles et des exclusions qui changent complètement le résultat ;
- « Atouts Numériques non confirmé » protège contre une fausse promesse, mais devient faux ou au minimum gravement incomplet puisque France Num marque la fiche comme une subvention mise à jour le 4 mars 2026 ;
- ACRE/ARCE et CPF sont bien séparés conceptuellement, mais les règles actuelles, les dates et les liens officiels permettant de vérifier son cas ne sont pas assez opérationnels ;
- le calcul breton est correct comme illustration, mais il ne dit pas combien de trésorerie est nécessaire avant le versement de l'aide, ni quel est le coût d'un prêt pendant l'attente.

## 3. Benchmark France et international

Requêtes, pays, langues et date : vérification le 24 juillet 2026 de pages officielles françaises (France Num, Région Bretagne, Région Auvergne-Rhône-Alpes/Campus Numérique, Service Public, Bpifrance relayé par France Num), et repères officiels étrangers uniquement pour la pédagogie de la recherche. Les concurrents éditoriaux non primaires ne sont pas utilisés comme preuve d'une règle ou d'un montant.

| Ressource et URL directe                                                                                                                                                                 | Pays                          | Réponse utile                                                                                                                                                         | Preuve, outil ou exemple                                                                                                                                                                               | Limite                                                                                                                                         | Apport à vérifier ou adapter                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [France Num — formes de financement](https://www.francenum.gouv.fr/aides-financieres/formes-de-financement)                                                                              | France                        | Explique que les subventions sont surtout locales et filtrables par commune, secteur, taille et ancienneté.                                                           | Moteur de recherche à filtres ; distingue diagnostic, accompagnement, matériel et prestataire.                                                                                                         | Le moteur ne décide pas l'éligibilité et les fiches ont des dates différentes.                                                                 | Remplacer « près de 200 » par le fonctionnement du moteur et un protocole de capture (URL, date, territoire, guichet).             |
| [France Num — obtenir une subvention](https://www.francenum.gouv.fr/aides-financieres/guides-et-conseils-financiers/comment-obtenir-une-subvention-pour-la-numerisation)                 | France                        | Donne les étapes d'un dossier : objet, éligibilité, présentation, intérêt, budget, pièces, délai et accompagnement.                                                   | Page publiée le 3 janvier 2024, mise à jour le 28 mai 2026 ; indique à titre général 1 500–15 000 € et 1–4 mois pour des aides locales, sans garantie.                                                 | Fourchettes indicatives, non applicables à une aide précise.                                                                                   | Source pivot à intégrer pour renforcer la méthode et expliciter la non-garantie.                                                   |
| [France Num — Prêt Boost](https://www.francenum.gouv.fr/aides-financieres/financez-la-numerisation-de-votre-tpe-pme-avec-le-pret-boost-transformation)                                   | France                        | Une entreprise de 2–49 salariés, créée depuis plus de 3 ans, peut étudier un prêt de 5 000–75 000 € sur 3–5 ans, avec différé annoncé.                                | La fiche dit explicitement qu'un site vitrine/e-commerce peut être financé ; équipement, logiciel, conseil, formation et besoin de trésorerie sont couverts.                                           | C'est une dette ; le taux et la décision doivent être confirmés par Bpifrance, la fiche France Num a été publiée/mise à jour en 2024.          | Ajouter un calcul de mensualité purement illustratif et une séparation « montant éligible ≠ montant accordé ».                     |
| [Atouts Numériques — France Num](https://www.francenum.gouv.fr/aides-financieres/atouts-numeriques)                                                                                      | France / Auvergne-Rhône-Alpes | Diagnostic et accompagnement gratuit pour un projet de présence web, refonte, e-commerce, visibilité, e-marketing, gestion ou sécurité.                               | Fiche marquée « Subvention », mise à jour le 04/03/2026 ; 100 % couvert par Région + FEDER ; 3,5 h court ou 7 h + 3,5 h collectif long ; entreprises de plus de 2 ans et moins de 50 salariés.         | Territoire et critères propres à AURA ; France Num conseille de confirmer avec le gestionnaire.                                                | Correction obligatoire : ne plus le qualifier d'historique non confirmé ; le mettre dans un encadré AURA avec lien et date.        |
| [Campus Numérique AURA — Atouts Numériques](https://campusnumerique.auvergnerhonealpes.fr/dispositifs/atouts-numeriques-region-accompagnement-aux-projets-numeriques/)                   | France / AURA                 | Corrobore la gratuité, le diagnostic, les sujets site/SEO/e-commerce et les critères territoriaux.                                                                    | Précise entreprises de moins de 50 salariés, priorité aux moins de 10, activité d'au moins 2 ans, tout secteur et lieu en AURA.                                                                        | Page opérateur ; l'autorité et les enveloppes doivent rester celles de la Région/FEDER.                                                        | Utiliser comme seconde preuve territoriale, jamais comme promesse nationale.                                                       |
| [Région Bretagne — PASS Commerce et Artisanat](https://www.bretagne.bzh/aides/fiches/pass-commerce-artisanat/)                                                                           | France / Bretagne             | 30 % des dépenses admissibles, maximum 7 500 € d'aide et 25 000 € de dépenses, sous conditions d'activité, effectif, CA, commune et cofinancement.                    | La fiche est marquée « Aide disponible » ; elle cite réalisation/refonte de site hors abonnement, hébergement et maintenance, et encadre le e-commerce.                                                | Plusieurs activités sont exclues, dont prestataires de services, professions libérales, finance et médical ; EPCI et règlement local comptent. | Réécrire l'exemple pour montrer l'éligibilité négative et les dépenses refusées, pas seulement le calcul 30 %.                     |
| [Service Public — ACRE](https://www.service-public.gouv.fr/particuliers/vosdroits/F11677) et [ARCE](https://www.service-public.gouv.fr/particuliers/vosdroits/F15252)                    | France                        | Aides de création globales, pas remboursement automatique d'un site. ARCE : 60 % des droits ARE restants, sous conditions et deux versements selon la fiche actuelle. | ACRE vérifiée le 1er juillet 2026 ; la réduction micro-entrepreneur passe à 25 % pour les créations/reprises à compter du 1er juillet 2026, avec demande dans les 60 jours selon les textes officiels. | La situation individuelle (date de création, ARE, statut) est déterminante.                                                                    | Ajouter une alerte 2026 et le choix « capital immédiat vs maintien ARE » ; ne jamais transformer l'ARCE en budget de site garanti. |
| [GOV.UK — trouver des aides](https://www.gov.uk/business-finance-support?types_of_support=grant) et [guide du moteur de subventions](https://www.gov.uk/guidance/find-government-grants) | Royaume-Uni                   | Un annuaire officiel filtrable montre la bonne pratique : rechercher par territoire, objectif, type d'aide et bénéficiaire avant de comparer.                         | Moteur public et guide de recherche ; utile pour la pédagogie du protocole.                                                                                                                            | Aucune aide britannique n'est transposable à une entreprise française.                                                                         | Ajouter une courte note internationale comme benchmark de méthode, sans montant ni recommandation étrangère.                       |
| [Portail européen Funding & Tenders](https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/home)                                                                         | Union européenne              | Montre que les programmes européens ont un objet, un appel, des critères et un calendrier propres.                                                                    | Portail officiel de recherche d'appels.                                                                                                                                                                | Trop complexe pour financer directement un petit site vitrine dans la plupart des cas.                                                         | Mentionner seulement pour expliquer pourquoi « aide européenne » n'est pas un chèque automatique.                                  |

Saturation : après ces sources, le gain ne vient pas d'une liste supplémentaire de blogs. Le guide doit surtout ajouter les mêmes informations que les meilleures sources institutionnelles : statut du guichet, bénéficiaire exact, dépenses exclues, date de début, procédure, cumul, délai, preuve écrite, trésorerie et plan B. La recherche concurrentielle doit rester au service de ces décisions.

## 4. Matrice de gain d'information

| Question décisive                                                                | Meilleure réponse française                                                                                                                                   | Apport international                                                                        | Couverture actuelle                             | Manque                                                                                                                                         | Réponse supérieure à produire                                                                                                                                  |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Existe-t-il une subvention nationale automatique ?                               | Aucune subvention forfaitaire générale identifiée ; les aides sont ciblées ou territoriales.                                                                  | Les annuaires UK/UE confirment qu'un guichet et un appel priment sur une promesse générale. | Partielle, `page.tsx:366-425`.                  | Méthode de recherche et date de couverture non documentées ; formulation trop absolue si le lecteur l'interprète comme une garantie d'absence. | Dire « aucune identifiée dans les sources officielles consultées à la date X », citer France Num mis à jour en mai 2026 et expliquer les catégories couvertes. |
| L'aide est-elle une subvention, une dette, une formation ou un avantage fiscal ? | Ces quatre objets n'ont ni le même bénéficiaire, ni le même cashflow, ni le même risque.                                                                      | Les moteurs publics filtrent par type de soutien, pas seulement par mot « aide ».           | Bonne base, tableau `page.tsx:250-340`.         | Pas de colonne « argent reçu / à rembourser / dépense avant accord / résultat fiscal ».                                                        | Ajouter une grille de décision en langage dirigeant.                                                                                                           |
| Mon activité est-elle réellement éligible ?                                      | Bretagne exclut plusieurs services et professions ; AURA impose territoire/ancienneté/effectif ; chaque règlement prime.                                      | Le benchmark étranger confirme le filtrage par bénéficiaire/territoire.                     | Insuffisante, surtout `page.tsx:619-680`.       | Le lecteur cible de Hagnéré peut être précisément exclu du PASS Commerce ; cela doit être dit en gros.                                         | Trois profils testés : commerçant de proximité, profession libérale, agence/service B2B ; décision « probablement oui / probablement non / à confirmer ».      |
| Quelles lignes du devis sont éligibles ?                                         | Bretagne : site/refonte possible mais abonnement, hébergement et maintenance exclus ; formation et module e-commerce encadrés.                                | Les appels UK/UE séparent généralement objet et coûts admissibles.                          | Trop vague (« chaque dépense examinée »).       | Pas de tableau ligne par ligne.                                                                                                                | Recomposer un devis-type en « potentiellement admissible / souvent exclu / à faire confirmer ».                                                                |
| Dois-je signer ou payer avant ?                                                  | Confirmer l'ordre et la règle de début de projet ; conserver l'écrit.                                                                                         | Les moteurs publics mettent en avant les deadlines et les conditions d'appel.               | Bonne alerte, `page.tsx:227-241`, mais répétée. | Pas de chronologie visuelle dépôt–accusé–accord–commande–facture–versement.                                                                    | Une frise et une case « date d'engagement interdite ».                                                                                                         |
| Combien me reste-t-il vraiment à financer ?                                      | Il faut distinguer HT, TVA, aide plafonnée, avance, remboursement et trésorerie initiale.                                                                     | Aucun pays étranger n'apporte un taux français ; l'apport est la discipline de scénarios.   | Un seul exemple breton.                         | Aucun scénario sans aide, avec aide plafonnée, avec prêt et avec versement tardif.                                                             | Table 6k/10k/20k et calcul de cash d'attente.                                                                                                                  |
| Attendre l'aide est-il rentable ?                                                | L'aide attendue doit être comparée à la valeur perdue pendant le délai.                                                                                       | Les appels internationaux rendent visibles dates de clôture et périodes d'instruction.      | Absent.                                         | Pas de coût d'opportunité ni règle d'arrêt.                                                                                                    | Formule « coût d'attente = marge mensuelle attendue × mois de retard », présentée comme hypothèse.                                                             |
| Puis-je cumuler les dispositifs ?                                                | Le cumul, le de minimis et le plafond d'intensité sont propres au règlement ; Bretagne annonce une limite de cumul public de 50 % sur le même investissement. | UE : chaque appel possède ses propres règles de cumul.                                      | Mention de minimis trop brève.                  | Pas de registre des aides ni vérification du même poste de dépense.                                                                            | Checklist « aide reçue sur les trois dernières années / même dépense / cofinanceur / régime ».                                                                 |
| Que puis-je faire si le dispositif ferme ?                                       | Réduire le périmètre, lancer sans aide si viable, ou demander un prêt ; ne pas présenter une archive comme active.                                            | Les annuaires publics illustrent le besoin d'un plan B.                                     | Implicite, pas assez tranché.                   | Aucun seuil de décision.                                                                                                                       | Règle professionnelle : ne pas attendre si la valeur mensuelle du lancement dépasse l'aide espérée et si le budget sans aide est soutenable.                   |

## 5. Faits et fraîcheur

| Affirmation du guide                                                                                          | Verdict                               | Source primaire actuelle                                                                                                                                                                                                                                                                                             | Périmètre et date                                                                                                                                                       | Correction                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| « Il n'existe plus de chèque national automatique de 500 € »                                                  | Confirmé avec nuance                  | [France Num — Prêt Boost](https://www.francenum.gouv.fr/aides-financieres/financez-la-numerisation-de-votre-tpe-pme-avec-le-pret-boost-transformation), qui indique que l'ancienne Garantie France Num est indisponible et remplacée ; conserver une source historique officielle pour la date de clôture du chèque. | France, vérifié en juillet 2026.                                                                                                                                        | Garder l'avertissement, mais ne pas faire de la page historique inaccessible la seule preuve du 31 juillet 2021.                                         |
| « près de 200 aides »                                                                                         | Invérifiable dans l'état              | [France Num — formes de financement](https://www.francenum.gouv.fr/aides-financieres/formes-de-financement)                                                                                                                                                                                                          | Le moteur actuel est visible ; le compteur n'est pas établi sur la page consultée.                                                                                      | Retirer le nombre ou indiquer sa date, sa requête et sa méthode de comptage ; le nombre ne doit jamais suggérer 200 aides disponibles pour un même site. |
| « Prêt Boost : 2–49 salariés, >3 ans, 5 000–75 000 €, 3–5 ans, sans garantie personnelle, différé 9–12 mois » | Confirmé mais daté                    | [France Num — Prêt Boost](https://www.francenum.gouv.fr/aides-financieres/financez-la-numerisation-de-votre-tpe-pme-avec-le-pret-boost-transformation)                                                                                                                                                               | Fiche publiée et mise à jour en juillet 2024 ; conditions à confirmer au dépôt.                                                                                         | Afficher « fiche France Num du 11/07/2024 » et l'absence de taux/montant garanti ; renvoyer au prêteur.                                                  |
| « Aucune subvention nationale forfaitaire identifiée »                                                        | Raisonnable mais méthode insuffisante | [France Num — guide de subvention numérique](https://www.francenum.gouv.fr/aides-financieres/guides-et-conseils-financiers/comment-obtenir-une-subvention-pour-la-numerisation), mise à jour 28/05/2026                                                                                                              | Recherche de type et de portée nationale, non preuve d'absence absolue.                                                                                                 | Remplacer par une formulation bornée : « dans les sources officielles consultées le… ».                                                                  |
| « Le site peut être traité comptablement de plusieurs façons »                                                | Confirmé, à encadrer                  | [BOFiP — dépenses de création de sites](https://bofip.impots.gouv.fr/bofip/1818-PGP.html/identifiant=BOI-BIC-CHG-20-30-30-20170301)                                                                                                                                                                                  | La qualification dépend du détail de la facture et de l'usage ; doctrine ancienne à confronter à l'expert-comptable.                                                    | Conserver l'alerte, séparer charge, immobilisation, abonnement et maintenance sans donner de règle comptable automatique.                                |
| « Le CII ne couvre pas un site vitrine ordinaire simplement parce qu'il est nouveau »                         | Correct                               | [Service Public Entreprendre — CII](https://entreprendre.service-public.fr/vosdroits/F35494)                                                                                                                                                                                                                         | Le CII vise un prototype/installation pilote d'un produit nouveau sous conditions.                                                                                      | Conserver et préciser que la décision appartient à l'administration/au conseil spécialisé, pas à l'agence.                                               |
| « ARCE = 60 % des droits ARE restants, deux versements »                                                      | Confirmé sous conditions              | [Service Public — ARCE](https://www.service-public.gouv.fr/particuliers/vosdroits/F15252)                                                                                                                                                                                                                            | Fiche vérifiée le 1/04/2025 ; conditions de maintien d'activité et second versement à vérifier selon la date de création.                                               | Ajouter la condition du second versement et l'alternative au maintien ARE ; ne pas appeler ce montant « aide au site ».                                  |
| « ACRE améliore le lancement »                                                                                | Correct mais incomplet pour 2026      | [Service Public — ACRE](https://www.service-public.gouv.fr/particuliers/vosdroits/F11677) et actualité officielle 2026                                                                                                                                                                                               | Pour micro-entrepreneurs, la réduction change à 25 % pour les créations/reprises à compter du 1/07/2026 et la demande est à déposer dans les 60 jours selon la réforme. | Ajouter une note de date et ne jamais afficher un taux sans statut/date.                                                                                 |
| « Le CPF finance une formation, pas la prestation d'agence »                                                  | Fond juste                            | [Service Public — CPF des demandeurs d'emploi](https://www.service-public.gouv.fr/particuliers/vosdroits/F12382), [DGCCRF — démarchage CPF](https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/demarchage-au-compte-personnel-de-formation-cpf-ne-divulguez-pas-vos)                                           | CPF = formation éligible ; la prestation et la formation sont deux objets. Les financements OPCO/entreprise ont d'autres règles.                                        | Ajouter les liens officiels, séparer CPF personnel, plan de développement des compétences et prestation ; conserver l'avertissement anti-démarchage.     |
| « PASS Commerce Bretagne : 30 %, max 7 500 €, dépenses max 25 000 € »                                         | Confirmé mais sous-spécifié           | [Région Bretagne — PASS Commerce et Artisanat](https://www.bretagne.bzh/aides/fiches/pass-commerce-artisanat/)                                                                                                                                                                                                       | Fiche marquée aide disponible ; critères d'effectif/CA/activité, commune/EPCI, cofinancement et exclusions.                                                             | Ajouter les exclusions (service/profession libérale notamment) et la liste site/refonte hors abonnement, hébergement, maintenance.                       |
| « La numérisation bretonne peut être admise »                                                                 | Trop vague                            | Même fiche Région Bretagne                                                                                                                                                                                                                                                                                           | La fiche distingue dépenses admissibles et refusées ; le type d'entreprise est déterminant.                                                                             | Remplacer par un tableau de lignes de devis et demander une confirmation écrite de l'EPCI/instructeur.                                                   |
| « Atouts Numériques n'a pas pu être confirmé »                                                                | **Faux ou périmé**                    | [France Num — Atouts Numériques](https://www.francenum.gouv.fr/aides-financieres/atouts-numeriques), [Campus Numérique AURA](https://campusnumerique.auvergnerhonealpes.fr/dispositifs/atouts-numeriques-region-accompagnement-aux-projets-numeriques/)                                                              | Fiche France Num marquée « Subvention », mise à jour le 04/03/2026 ; accompagnement 100 % Région/FEDER, entreprises AURA >2 ans et <50 salariés.                        | Corriger impérativement : présenter comme piste AURA actuelle à confirmer, avec ses limites, et ne pas la qualifier d'ancienne fiche.                    |
| « Le registre de minimis doit être vérifié »                                                                  | Correct mais trop court               | [Service Public Entreprendre — minimis](https://entreprendre.service-public.gouv.fr/actualites/A17026)                                                                                                                                                                                                               | Le régime applicable, le plafond et la période dépendent du texte de l'aide ; un simple lien ne fait pas le calcul.                                                     | Ajouter une colonne dans la fiche de décision : aides reçues, même entreprise, même groupe, même dépense, période et règlement.                          |

### Contradictions

- Le guide dit qu'Atouts Numériques n'est pas confirmable alors que la fiche officielle France Num est actuelle et explicitement orientée vers la création/refonte de sites, l'e-commerce et la visibilité. Cette contradiction est la plus importante car elle peut faire manquer une piste réellement utile à une entreprise AURA.
- Le guide réclame une confirmation avant signature mais cite un calcul où l'aide n'est versée qu'après réalisation sans montrer le besoin de trésorerie brut. La règle est énoncée, pas démontrée.
- Le guide annonce « sources vérifiées le 21 juillet 2026 », alors que la source AURA actuelle est mise à jour le 4 mars 2026 et la guidance France Num pertinente le 28 mai 2026 ; la date de contrôle ne suffit pas à rendre le corpus complet.
- Les étapes 1 à 7 sont suivies de quatre étapes qui répètent recherche, confirmation et devis (`page.tsx:700-850`). Ce n'est pas une contradiction factuelle, mais cela affaiblit la hiérarchie et peut faire croire à deux procédures.

### Faits à retirer plutôt qu'à affaiblir

- Retirer le chiffre « près de 200 » tant qu'une capture datée, une requête et une méthode de comptage ne sont pas conservées.
- Retirer « Atouts Numériques, non confirmée comme dispositif actif » ; il ne faut pas seulement l'adoucir.
- Retirer toute formulation pouvant être lue comme « 30 % Bretagne pour un site » sans mentionner activité, EPCI, dépenses exclues, plafond et décision écrite.
- Ne pas donner un taux de prêt, un taux de réussite ou un délai garanti qui ne figure pas dans la fiche du prêteur.

## 6. Scénarios et calculs à construire

Les montants ci-dessous sont des outils pédagogiques, pas des promesses de prix, de taux ou d'aide. La dépense doit être chiffrée avec le devis réel et la décision de l'organisme.

| Variable             |                     Simple |                                      Central |                     Exigeant | Source ou hypothèse                                                                                                  |
| -------------------- | -------------------------: | -------------------------------------------: | ---------------------------: | -------------------------------------------------------------------------------------------------------------------- |
| Budget site HT       |                    6 000 € |                                     10 000 € |                     20 000 € | Scénarios éditoriaux cohérents avec le lead du guide.                                                                |
| Aide confirmée       |                        0 € |                                      2 100 € |            7 500 € plafonnés | Bretagne : 30 % de 7 000 € admissibles dans le cas central ; plafond Bretagne dans le cas exigeant, sous conditions. |
| Reste HT final       |                    6 000 € |                                      7 900 € |                     12 500 € | Calcul illustratif, hors TVA, hors dépenses refusées supplémentaires.                                                |
| Cash avant versement | 6 000 € HT + TVA selon cas |                    Jusqu'à 10 000 € HT + TVA |    Jusqu'à 20 000 € HT + TVA | Hypothèse prudente : l'entreprise paie avant le remboursement.                                                       |
| Prêt illustratif     |                        0 € |                   10 000 € sur 36 mois à 5 % | 20 000 € à tester séparément | 5 % n'est pas le taux officiel Prêt Boost ; c'est uniquement une hypothèse de calcul.                                |
| Coût de l'attente    |      0 € si aucune attente | 3 mois × 1 000 € de marge attendue = 3 000 € |  6 mois × 2 000 € = 12 000 € | Hypothèses à remplacer par la marge réellement documentée.                                                           |

```text
Calcul Bretagne central :
  dépenses admissibles = 7 000 € HT
  aide théorique = 7 000 × 30 % = 2 100 €
  reste HT final = 10 000 − 2 100 = 7 900 €
  mais cash initial prudent = 10 000 € HT + TVA si la subvention arrive après les factures.

Calcul plafonné :
  projet = 20 000 € HT
  30 % théorique = 6 000 €, donc plafond de 7 500 € non atteint dans cet exemple ;
  si le montant admissible dépasse 25 000 €, le plafond et les règles du dispositif deviennent déterminants.

Prêt illustratif :
  mensualité = P × r / (1 − (1+r)^−n)
  avec P = 10 000, r = 0,05/12, n = 36
  mensualité ≈ 299,71 € ; total ≈ 10 789,56 € ; intérêts ≈ 789,56 €.
  Ce calcul ne décrit pas le taux réel ni la décision de Bpifrance.

Coût d'attente :
  coût de délai = marge contributive mensuelle réellement attendue × mois de retard.
  Si le site apporte hypothétiquement 1 000 € de marge par mois et que l'accord retarde le lancement de 3 mois,
  l'aide espérée doit dépasser 3 000 € pour compenser ce seul coût d'opportunité.
```

Horizon : distinguer le cash à la commande, le cash au paiement de la facture, le remboursement de l'aide et les flux mensuels d'un prêt ; ne pas comparer une subvention immédiate à un prêt sans cette frise.

Inclus : lignes de devis, taux et plafond connus, TVA selon la situation, délai, intérêts illustratifs, valeur de lancement hypothétique.

Exclus : taux réel du Prêt Boost, probabilité d'obtention, fiscalité personnalisée, récupération effective de TVA et chiffre d'affaires garanti.

Résultat : une aide de 2 100 € peut améliorer le coût final de 10 000 € HT, mais elle ne supprime pas nécessairement le besoin de financer 10 000 € + TVA au démarrage. Un prêt de 10 000 € à 5 % sur 36 mois coûte environ 790 € d'intérêts dans l'hypothèse, mais achète de la vitesse et une mensualité à supporter. Une attente de trois mois n'est rationnelle que si l'économie attendue dépasse sa marge perdue, son risque de refus et son coût administratif.

Analyse de sensibilité : faire varier le taux d'aide (0 %, 20 %, 30 %), le plafond, la part réellement admissible (50 %, 70 %, 100 %), le délai (0, 3, 6 mois), la TVA récupérable et la marge mensuelle attendue.

Variable qui fait basculer la décision : la dépense admissible et le moment où le cash est versé, puis la valeur économique d'une mise en ligne plus rapide.

Contrôle inverse : le projet doit rester soutenable avec aide = 0 et avec le coût de trois à six mois d'attente. Si ce n'est pas le cas, réduire le périmètre du site, sécuriser l'offre commerciale et obtenir une confirmation écrite avant tout engagement ; ne jamais construire le projet sur une subvention simplement espérée.

## 7. Comparaison et position professionnelle

```text
Options réellement comparables :
  1. lancer un site réduit sans aide ;
  2. attendre une subvention territoriale confirmée ;
  3. utiliser un accompagnement gratuit (ex. Atouts Numériques en AURA) puis acheter les travaux ;
  4. financer par un prêt professionnel ;
  5. financer globalement une création d'entreprise par ACRE/ARCE, sans l'appeler aide au site.

Périmètre et horizon communs : même site, mêmes lignes de devis, même objectif métier, 12 mois de trésorerie et calendrier de lancement explicite.

Option la moins chère : un accompagnement peut être gratuit ; le coût des travaux, de l'hébergement, des contenus et de la maintenance reste à financer.

Option la moins risquée : le scénario sans aide si le budget est soutenable ; il évite la condition suspensive imaginaire et le démarrage interdit.

Option qui demande le moins de temps interne : un prestataire qui prend en charge cadrage, contenus, mise en ligne et formation, mais la simplicité ne dispense pas de vérifier les lignes éligibles et les droits sur les livrables.

Position Hagnéré Code pour le cas fréquent : proposer un périmètre lisible et un plan en deux temps, avec devis séparant création, contenus, abonnement, formation et maintenance ; aider à préparer les questions à poser à l'organisme, sans promettre la subvention ni se présenter comme instructeur.

Faits qui la fondent : les aides sont territoriales et variables ; Bretagne exclut certaines activités et certaines lignes ; Atouts Numériques AURA peut financer l'accompagnement mais pas automatiquement le développement complet ; le prêt se rembourse ; ACRE/ARCE ne sont pas fléchées sur le site.

Cas où l'option opposée gagne : attendre est défendable si l'accord est écrit, le démarrage avant accord est interdit, le montant net est significatif et le coût du retard est faible. Le prêt gagne si le site débloque une marge ou une vente suffisamment documentée et si la mensualité reste couverte par la trésorerie.

Signal de révision : guichet fermé, règlement modifié, budget local épuisé, dépense retirée de la liste, perte d'éligibilité, nouvelle date de création, TVA non récupérable ou coût de délai supérieur à l'économie attendue.

Ce que nous déconseillons même si nous pourrions le vendre : signer un devis « aide comprise », mélanger formation et production pour faire passer une prestation dans le CPF, ou attendre six mois sans budget de repli pour une aide non confirmée.
```

## 8. Objections et cas limites

| Objection loyale                                                                          | Réponse prouvée                                                                                                                                           | Ce qui reste incertain                                                    | Conséquence                                                                                                                          |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| « Je suis une profession libérale : le PASS Bretagne me remboursera-t-il le site ? »      | La fiche Bretagne exclut notamment les professions libérales et plusieurs activités de service.                                                           | L'EPCI peut avoir un autre dispositif.                                    | Ne pas budgéter le PASS ; rechercher le guichet du siège et demander une confirmation écrite.                                        |
| « Je suis en AURA : Atouts Numériques paiera-t-il mon agence ? »                          | Atouts Numériques finance un accompagnement/diagnostic à 100 % dans le périmètre indiqué, et mentionne site, refonte, e-commerce, visibilité et sécurité. | Cela ne prouve pas le financement des travaux de développement eux-mêmes. | Séparer accompagnement gratuit et devis de production ; confirmer le parcours avec le gestionnaire.                                  |
| « Je peux signer maintenant et déposer ensuite ? »                                        | Les dispositifs imposent souvent une demande avant le début de la dépense ; le guide lui-même l'alerte.                                                   | La date exacte dépend du règlement.                                       | Pas de signature, acompte, commande ou début technique avant l'écrit qui l'autorise.                                                 |
| « Mon site coûte 10 000 € : 30 % signifie-t-il 3 000 € ? »                                | Non : seul le montant admissible, le plafond, l'activité et le règlement comptent ; l'exemple 7 000 € admissibles donne 2 100 €.                          | Décision de l'instructeur et cofinancement local.                         | Faire détailler les lignes et calculer l'aide sur la base confirmée, pas sur le devis global.                                        |
| « Le CPF peut-il payer la création de mon site ? »                                        | Les sources officielles décrivent le CPF comme financement de formation éligible ; la production doit être séparée.                                       | Régime de l'entreprise, OPCO et reste à charge.                           | Refuser tout montage qui rebaptise une prestation en formation ou demande des identifiants.                                          |
| « L'ARCE est-elle un budget public pour mon site ? »                                      | C'est une partie des droits ARE versée sous conditions ; ce n'est pas une aide fléchée vers la facture.                                                   | Situation France Travail et calendrier des versements.                    | Comparer ARCE et maintien ARE avec un conseiller ; présenter le site dans le budget global de création.                              |
| « Une aide de 2 100 € rend-elle le projet moins cher tout de suite ? »                    | Pas nécessairement : il peut falloir avancer la facture et la TVA.                                                                                        | Date et mode de versement.                                                | Montrer le cash initial séparément du reste final ; prévoir un fonds de roulement.                                                   |
| « Un prêt est-il une aide ? »                                                             | Le Prêt Boost est un financement remboursable, pas une subvention.                                                                                        | Taux, décision et garanties contractuelles du prêteur.                    | Afficher mensualité, coût total et plan de remboursement avant de comparer.                                                          |
| « Une ancienne page parle encore de 500 € ou d'Atouts historique : je peux l'utiliser ? » | Une archive ou une page non mise à jour ne prouve pas un guichet ouvert ; Atouts Numériques a toutefois une fiche officielle actuelle en AURA.            | Etat local de l'enveloppe et dates de dépôt.                              | Vérifier l'autorité, la mention active, la date et le règlement ; corriger l'article lorsqu'une source actuelle contredit l'archive. |
| « Les aides se cumulent-elles ? »                                                         | Bretagne annonce un plafond de cumul public de 50 % sur le même investissement ; le de minimis/règlement de chaque aide compte.                           | Groupe, période, même poste et régime applicable.                         | Tenir un registre des aides et faire valider le cumul par l'organisme.                                                               |

## 9. Plan de réécriture

| Ordre | Section proposée                       | Question résolue                                                                                  | Preuve, scénario ou outil                                                                                                      | Décision produite                                                    | À conserver / créer / couper                            |
| ----: | -------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- | ------------------------------------------------------- |
|     1 | « La réponse en 60 secondes »          | Ai-je une subvention automatique et que dois-je faire aujourd'hui ?                               | Verdict borné dans le temps, distinction aide/prêt/formation/fiscal, règle aide = 0.                                           | Le lecteur sait s'il doit chercher, appeler ou lancer sans attendre. | Conserver le lead ; créer une boîte de verdict.         |
|     2 | « Le test d'éligibilité avant devis »  | Mon entreprise et mon territoire sont-ils dans le périmètre ?                                     | Tableau commerçant / profession libérale / service B2B / créateur ; siège, âge, effectif, CA, activité.                        | Probablement éligible / probablement exclu / à confirmer.            | Créer ; couper les généralités non actionnables.        |
|     3 | « Les pistes actuelles par type »      | Quelle famille correspond à mon besoin ?                                                          | France Num guidance 28/05/2026, Prêt Boost, Atouts AURA, PASS Bretagne, ACRE/ARCE, CPF.                                        | Subvention, accompagnement, prêt, création, formation, fiscal.       | Conserver le tableau, le rendre factuel et daté.        |
|     4 | « Lignes du devis : admises ou non ? » | Est-ce que le site, l'hébergement, la maintenance, le SEO, les contenus et la formation entrent ? | Tableau Bretagne + prudence transposable ; confirmation écrite.                                                                | Devis à séparer et poste à ne pas budgéter comme aidé.               | Créer ; le paragraphe vague actuel doit disparaître.    |
|     5 | « Atouts Numériques AURA, cas réel »   | Existe-t-il un accompagnement gratuit en AURA ?                                                   | Fiches France Num et Campus, mise à jour du 4/03/2026, critères et volumes d'accompagnement.                                   | Contact à prendre, sans confondre accompagnement et production.      | Corriger impérativement.                                |
|     6 | « Bretagne : calcul honnête »          | Pourquoi 30 % ne veut pas dire 3 000 € ?                                                          | 10k/7k/2,1k, exclusions, plafond 7,5k, 50 % cumul, cash initial.                                                               | Montant net et besoin de trésorerie.                                 | Conserver le calcul, enrichir et borner.                |
|     7 | « Deux budgets et une frise »          | Puis-je attendre ?                                                                                | Sans aide / aide confirmée / aide tardive / prêt illustratif ; coût du délai.                                                  | Lancement maintenant, lancement par lot ou attente justifiée.        | Créer ; absent aujourd'hui.                             |
|     8 | « Dossier de 30 minutes »              | Que dois-je envoyer et conserver ?                                                                | Fiche à copier : commune, activité, effectif, date, devis, début, dépenses, aides reçues, contact, lien, date, réponse écrite. | Dossier vérifiable et transmissible au financeur.                    | Créer ressource téléchargeable ou bloc copiable.        |
|     9 | « Pièges et refus »                    | Où puis-je perdre le bénéfice ?                                                                   | CPF déguisé, acompte anticipé, abonnement/hébergement exclus, archive, de minimis, location financière.                        | Refus explicite de signer ou de présenter une dépense.               | Conserver les alertes DGCCRF ; enlever les répétitions. |
|    10 | CTA                                    | Quelle est la prochaine action avec Hagnéré Code ?                                                | Livrable promis : périmètre en deux scénarios et questions de vérification ; aucune garantie d'aide.                           | Demande de projet qualifiée.                                         | Conserver CTA, préciser le livrable et la limite.       |

### Contrat des 150 premiers mots

« Vous avez un devis de site à 6 000, 10 000 ou 20 000 € et vous voulez savoir si une aide existe vraiment ? La réponse honnête est rarement “l'État paie votre site”. En 2026, il faut distinguer une subvention locale, un accompagnement gratuit, un prêt à rembourser, une aide de création comme l'ACRE/ARCE, une formation CPF et un éventuel traitement fiscal. Ces dispositifs n'ont ni les mêmes bénéficiaires, ni les mêmes dépenses admises, ni le même calendrier. Dans ce guide, vous allez d'abord vérifier votre territoire et votre activité, puis lire les pistes actuellement documentées en France. Vous verrez ensuite combien il vous reste réellement à financer dans trois scénarios, pourquoi un devis peut devoir être séparé, et à quel moment vous ne devez ni signer ni verser d'acompte. La règle de sécurité est simple : préparez toujours un budget sans aide. Si une aide est confirmée par écrit, elle améliore votre plan ; elle ne doit jamais être la condition qui rend le site possible. »

### Éléments à supprimer

- le compteur non sourcé « près de 200 » ;
- la phrase disant qu'Atouts Numériques n'est pas confirmé ;
- le doublon des étapes 8 à 10 après la première liste ;
- les références datées uniquement du 21 juillet sans préciser la date de mise à jour de chaque organisme ;
- les formulations générales (« la numérisation peut être admise ») qui ne donnent aucune décision au lecteur.

### Éléments à conserver

- l'ouverture par budgets concrets ;
- la règle « ne pas signer / ne pas verser d'acompte avant confirmation » ;
- la différence formation/production et l'avertissement anti-démarchage CPF ;
- l'exemple de calcul breton, après ajout des exclusions et de la trésorerie ;
- l'avertissement sur la location financière et le CTA sans promesse d'éligibilité ;
- le rappel qu'une subvention locale n'est pas un droit national uniforme.

## 10. Contre-audit après correction

Aucune correction de la source n'a été effectuée dans ce chantier ; le tableau ci-dessous est le protocole de revalidation que l'agent de réécriture devra exécuter, et non une déclaration de correction réalisée.

| Problème                                                             | Priorité | Correction à appliquer                                                                                                                  | Revalidation indépendante                                                                             |
| -------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Atouts Numériques décrit comme non confirmé                          | P1-01    | Remplacer par la fiche AURA actuelle, mise à jour 04/03/2026, critères, contenu de l'accompagnement et limite « travaux non garantis ». | Rouvrir France Num + Campus AURA, vérifier statut/date/territoire et relire sans la fiche historique. |
| Bretagne trop vague et cible potentiellement exclue                  | P1-02    | Ajouter activités exclues, effectif/CA, EPCI/cofinancement, lignes site admissibles et abonnement/hébergement/maintenance exclus.       | Recalculer 6k/10k/20k uniquement sur dépenses admissibles et comparer à la fiche Région.              |
| « près de 200 aides » non établi                                     | P1-03    | Retirer ou documenter la méthode de comptage et la date.                                                                                | Vérifier l'affichage du moteur France Num et une capture datée.                                       |
| ACRE/ARCE pas assez à jour pour juillet 2026                         | P1-04    | Ajouter la réforme micro ACRE du 1/07/2026, délai de 60 jours, conditions ARCE/second versement et alternative ARE.                     | Rouvrir Service Public et France Travail à la date de publication.                                    |
| CPF sans preuve directe et OPCO confondu                             | P1-05    | Ajouter Service Public/DGCCRF, séparer CPF personnel, formation financée par l'entreprise/OPCO et production.                           | Tester les liens officiels et faire relire la distinction par une personne non technique.             |
| Recherche nationale trop absolue                                     | P1-06    | Borner le verdict par date, sources et catégories examinées ; intégrer la guidance France Num du 28/05/2026.                            | Une deuxième personne doit reproduire la recherche et retrouver les mêmes limites.                    |
| Pas de cash net ni de coût du prêt                                   | P1-07    | Ajouter scénarios de trésorerie, mensualité illustrée, coût total, TVA et versement tardif ; rappeler que 5 % est hypothétique.         | Refaire les formules dans une feuille indépendante et vérifier unités HT/TTC.                         |
| Pas de coût d'attente                                                | P1-08    | Ajouter marge mensuelle hypothétique, délai, seuil d'arrêt et scénario sans aide.                                                       | Recalculer avec 0/3/6 mois et s'assurer que l'exemple est explicitement fictif.                       |
| Cumul/de minimis insuffisant                                         | P1-09    | Ajouter registre des aides, même dépense, plafond Bretagne et règle du dispositif ; ne pas inventer de seuil.                           | Vérifier le texte de l'aide et demander confirmation à l'organisme.                                   |
| Sources et dateModified incohérentes                                 | P1-10    | Mettre à jour `dateModified` seulement après réécriture substantielle et afficher la date de contrôle de chaque source.                 | Comparer métadonnées, pied de page, OG et liens ; ne pas publier une date anticipée.                  |
| Date de clôture du chèque 500 € appuyée par une archive inaccessible | P2-01    | Ajouter une source historique officielle directe ou reformuler en « ancienne mesure indisponible ».                                     | Tester l'URL dans navigateur et conserver la preuve de l'autorité actuelle.                           |
| Aucun outil copiable pour le dossier                                 | P2-02    | Créer une checklist/fiche de vérification et la relier au CTA ou aux ressources.                                                        | Test utilisateur : un dirigeant doit pouvoir compléter la fiche en moins de 10 minutes.               |
| Aucun repère international explicitement borné                       | P2-03    | Ajouter une note UK/UE d'une dizaine de lignes, sans transposer de dispositifs étrangers.                                               | Relire pour vérifier qu'aucun montant ou conseil étranger n'est présenté pour la France.              |
| CTA sans livrable explicite                                          | P2-04    | Promettre seulement une clarification du périmètre, deux budgets et une liste de questions ; aucune promesse d'aide.                    | Tester le formulaire et vérifier que les informations demandées permettent réellement ce livrable.    |

### Score après correction projeté (non acquis)

| Axe         | Note /10 projetée | Preuve à créer                                           | Manque résiduel                                                |
| ----------- | ----------------: | -------------------------------------------------------- | -------------------------------------------------------------- |
| Intention   |                10 | Contrat des 150 mots et verdict en tête                  | Le besoin individuel reste à confirmer par le formulaire.      |
| Décision    |                10 | Matrice profil/territoire, frise et règle d'arrêt        | Les financeurs gardent le dernier mot.                         |
| Pédagogie   |                10 | Glossaire décisionnel et lignes de devis                 | Les règles changent ; date de contrôle indispensable.          |
| Profondeur  |                 9 | Scénarios 6k/10k/20k, prêt, TVA, attente                 | Les coûts réels du projet doivent venir du devis.              |
| Preuve      |                10 | Sources officielles datées, Atouts corrigé, CPF direct   | Revalidation nécessaire à chaque évolution réglementaire.      |
| Comparaison |                 9 | Subvention/accompagnement/prêt/création/formation/fiscal | Pas de comparaison de taux sans offre personnalisée.           |
| Originalité |                 9 | Fiche copiable, contrôle inverse, coût de délai          | Originalité utile seulement si l'outil est réellement utilisé. |
| Style       |                 9 | Suppression des doublons et prose humaine                | Contrôle de lecture par un dirigeant réel.                     |
| Conversion  |                 9 | CTA avec livrable et scénario sans aide                  | Ne doit jamais devenir une promesse d'obtention.               |
| SEO/produit |                 9 | Entités actuelles, liens directs, FAQ et ressource       | Indexation et performances restent à prouver en production.    |

Total projeté : **94/100**, objectif conditionnel après correction et nouvelle vérification ; ce n'est pas une note acquise dans cet audit.

## 11. Preuves techniques et visuelles

```text
Manifeste : aucun manifeste de recherche ajouté ou modifié ; aucun registre modifié.
Calculs refaits : 7 000 × 30 % = 2 100 ; 10 000 − 2 100 = 7 900 ; prêt illustratif 10 000 €, 5 %, 36 mois ≈ 299,71 €/mois et ≈ 789,56 € d'intérêts ; hypothèses explicitement non contractuelles.
Sources rouvertes : France Num formes de financement ; France Num guide de subvention mis à jour 28/05/2026 ; France Num Prêt Boost ; France Num Atouts Numériques mis à jour 04/03/2026 ; Campus Numérique AURA ; Région Bretagne PASS Commerce ; Service Public ACRE/ARCE/CPF/de minimis ; DGCCRF CPF/location financière ; GOV.UK et portail Funding & Tenders comme repères pédagogiques.
Liens vérifiés : page locale, robots.txt, sitemap.xml et principales URLs externes renvoient 200 ; l'URL DGCCRF de location financière renvoie 403 en curl mais sa page a été retrouvée/reouverte via la recherche web, donc aucune rupture certaine ne doit être déclarée sans test navigateur.
Rendu 320 / 390 / 768 / 1024 / 1440 : pas de débordement horizontal, tables contenues, H1 unique et CTA présent à chaque largeur testée ; métriques d'émulation réinitialisées ensuite.
Image sociale : `opengraph-image.tsx`, 1200×630, alt cohérent ; le badge « Vérifié juillet 2026 » devra être resynchronisé avec la prochaine vraie date de contrôle.
Statut maximal prouvé : audit local et QA responsive réussis ; le contenu factuel n'est pas corrigé et aucun contre-audit post-réécriture n'est prouvé.
Réserve publication / indexation : local `noindex, nofollow` observé ; production, déploiement, sitemap traité, Search Console et position Google non vérifiés.
```

Conclusion opérationnelle : le guide a une bonne intention et une prudence rare, mais il ne peut pas encore prétendre être la référence 2026. La priorité absolue est de corriger Atouts Numériques, de rendre la Bretagne réellement exploitable ou explicitement négative pour les profils exclus, de remplacer le compteur non prouvé et d'ajouter les scénarios de cashflow et de coût d'attente. Une fois ces corrections faites, le même protocole P1–P4 doit être rejoué ; il faut alors dater les sources, recalculer les montants et tester le CTA avant toute décision d'indexation.
