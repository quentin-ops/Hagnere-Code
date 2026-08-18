# Contre-lecture P4 humaine indépendante — `cahier-des-charges-saas`

Date : **24 juillet 2026**

Relecteur : `/root/cahier_saas_p4_human`

Périmètre : lecture comme un dirigeant non technique, pressé mais susceptible
d'engager un budget important. Contrôle de l'ouverture, de la compréhension,
du rythme, de la fatigue, du jargon, de la voix, du cas DossierClair, des
opinions, des mauvais cas d'usage, de la pression commerciale, de la
conversion et de la valeur autonome du modèle et du comparateur. Aucun fichier
de production n'a été modifié.

## Périmètre de notation avant corrections

La note ci-dessous porte sur l'état de travail immédiatement antérieur aux
quatre corrections P2 finales : page, composant, moteur de calcul, exports,
exemple rempli, registre éditorial et image sociale. L'ancien bloc d'empreintes
du rapport a été retiré parce qu'il décrivait un snapshot plus ancien et ne
prouvait donc pas cette notation. Aucune fausse correspondance n'est conservée.

Le snapshot **après** corrections est, lui, gelé de façon exhaustive dans le
manifeste P4. Les 28 tests dédiés et la suite de langage humain sont rejoués sur
cet état final. Ils ne remplacent pas un contrôle visuel.

## Verdict exécutif

**Score indépendant du snapshot relu avant corrections P2 : 90/100.**

```text
P0 : 0
P1 : 0
P2 : 4 corrections précises, appliquées après cette notation
Verdict éditorial avant corrections : seuil de 90/100 atteint
Verdict de publication du snapshot final : NO-GO
Blocage : BAT navigateur réel du snapshot exact non exécuté
```

Le fond est désormais très supérieur à un article SEO générique. L'ouverture
répond à une vraie situation de dirigeant. Le guide ose conseiller un logiciel
existant, un assemblage, un test manuel, l'attente ou l'arrêt. Il chiffre le
temps interne, compare trois propositions sur 24 mois, expose une formule de
valeur de l'information, prévoit la migration, l'exploitation, la double
sortie, la recette et la décision à 90 jours. Le conflit d'intérêt de Hagnéré
Code est déclaré et le CTA ne force pas la vente.

Le seul blocage de la version précédente a été levé : la page présente
maintenant explicitement la fondatrice de DossierClair comme commanditaire et
Claire comme administratrice d'Atelier Nord, avec Léa comme contributrice. Le
fichier téléchargé conserve la même distribution. Un dirigeant sait désormais
qui achète le SaaS, qui l'utilise et qui commande son développement.

## Les 150 premiers mots

### Ce qui fonctionne

Les premiers mots partent d'une situation concrète :

> Vous avez une idée de logiciel en ligne et vous devez maintenant expliquer
> ce qu'il faut construire, obtenir des devis comparables et éviter les oublis
> qui apparaissent une fois le développement engagé.

La phrase suivante donne immédiatement l'arbitrage réel : acheter, assembler,
tester manuellement ou construire. Le second paragraphe annonce les livrables
précis du guide — exemple rempli, temps à réserver, erreurs à tester et trois
propositions sur 24 mois — puis formule une opinion utile : ne pas consulter
des développeurs tant que l'hypothèse susceptible de faire tomber le projet
n'est pas testée.

Pour un lecteur non technique, le contrat de lecture est donc compris sans
connaître « SaaS », « architecture » ou « backlog ». Le mot SaaS du titre est
traduit dès l'ouverture par « logiciel en ligne ». Il n'y a ni entrée
définitionnelle, ni promesse creuse, ni faux suspense.

### Seule réserve d'ouverture

L'expression du hero « sur le même horizon » est exacte mais plus financière
que naturelle. Elle est compréhensible grâce à la mention « sur 24 mois »
quelques lignes plus bas. Ce n'est pas bloquant.

## Score détaillé

| Critère                              | Note /10 | Observation humaine                                                                                                                                                                      |
| ------------------------------------ | -------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Intérêt et réponse dès l'ouverture   |       10 | Situation, arbitrage, promesse et avis apparaissent immédiatement.                                                                                                                       |
| Compréhension par un dirigeant       |        8 | Le jargon principal est traduit, mais le format `.md` n'est pas encore expliqué avant les boutons dans le snapshot noté.                                                                 |
| Progression et décisions             |        9 | La progression va du choix de construire à la preuve après lancement. Chaque section produit une action.                                                                                 |
| Rythme et fatigue                    |        8 | Le cas concret et les chiffres relancent la lecture, mais 14 sections, 9 encadrés et une longue saisie finale demandent un vrai temps d'attention.                                       |
| Voix humaine et anti-IA              |        9 | Opinions, conflit d'intérêt, contre-exemples et phrases mémorables donnent une voix réelle. La succession de titres impératifs reste légèrement systématique.                            |
| Profondeur, chiffres et comparaisons |       10 | Cas de départ, cibles, temps interne, trois offres, seuil d'étude, coûts récurrents, recette et décisions à 90 jours.                                                                    |
| Opinion professionnelle et limites   |        9 | Les recommandations sont tranchées, conditionnelles et accompagnées de cas inverses.                                                                                                     |
| Mauvais fits et confiance            |       10 | Outil existant, manuel, report, arrêt et spécialistes sont explicitement préférables dans certains cas.                                                                                  |
| Valeur autonome du kit               |        8 | Les inconnus bloquent le classement et les aides sont visibles, mais le parseur accepte encore des débuts de chaînes ambiguës et les erreurs ne sont pas encore reliées champ par champ. |
| Conversion sans pression             |        9 | Le CTA promet une relecture concrète et peut conclure à ne pas développer ; les rôles du cas sont maintenant cohérents.                                                                  |

Total : **90/100**. Cette note décrit le snapshot relu **avant** l'application
des quatre P2 ci-dessous. Aucune note supérieure n'est revendiquée sans nouvelle
contre-lecture indépendante du snapshot corrigé.

## P1 historique — correction vérifiée

Le bloc suivant documente le défaut du snapshot précédent et les corrections
qui ont été appliquées. Il ne constitue plus un P1 du snapshot final.

### P1.1 — Claire était à la fois fondatrice implicite et cliente d'elle-même

Emplacements principaux :

- `page.tsx:196` : « Claire — décision et arbitrages » ;
- `page.tsx:540-546` : Claire « envisage DossierClair », tandis que Léa est
  présentée chez Atelier Nord ;
- `page.tsx:573-594` : Claire décide le passage à 30 entreprises et finance la
  suite ;
- `page.tsx:692-695` : Claire décide la règle commerciale du SaaS ;
- `page.tsx:708-710` : Claire administre Atelier Nord ;
- `page.tsx:951-955` : Claire sort de son prestataire et récupère le code ;
- `saas-specification-kit.ts:538-552` : l'exemple téléchargé distingue
  correctement « la fondatrice de DossierClair » de Claire, responsable des
  opérations chez Atelier Nord ;
- `saas-specification-kit.ts:679-681` : l'exemple téléchargé distingue encore
  la sortie d'Atelier Nord et celle de la fondatrice.

Le téléchargement permet de comprendre la bonne distribution :

```text
Fondatrice de DossierClair = commanditaire, décision commerciale, budget,
relation avec le prestataire.

Claire = administratrice / responsable des opérations chez Atelier Nord,
entreprise cliente pilote.

Léa = contributrice / responsable métier chez Atelier Nord.
```

La page doit adopter exactement cette distribution.

Corrections phrase par phrase :

```text
Claire — décision et arbitrages
→ Fondatrice de DossierClair — décision et arbitrages
```

```text
Claire envisage DossierClair, un logiciel en ligne pour de petites sociétés
de conseil. Aujourd'hui, leurs informations [...]
→ Une fondatrice envisage DossierClair, un logiciel en ligne pour de petites
sociétés de conseil. Chez Atelier Nord, l'une des entreprises pilotes, Claire
administre l'espace et Léa réalise le travail métier. Aujourd'hui, leurs
informations [...]
```

```text
Si les résultats sont concluants, Claire envisage 30 entreprises [...]
→ Si les résultats sont concluants, la fondatrice envisage 30 entreprises [...]
```

```text
À 90 jours, Claire ne demande pas seulement [...]
→ À 90 jours, la fondatrice ne demande pas seulement [...]
```

```text
Claire ne finance pas automatiquement la suite.
→ La fondatrice ne finance pas automatiquement la suite.
```

```text
Claire décide la règle commerciale [...]
→ La fondatrice décide la règle commerciale [...]
```

```text
La seconde sortie concerne Claire face à son prestataire [...]
→ La seconde sortie concerne la fondatrice de DossierClair face à son
prestataire [...]
```

Après correction, vérifier dans la page **et dans le fichier téléchargé** que
Claire ne commande jamais le développement, que la fondatrice n'agit jamais
comme utilisatrice d'Atelier Nord et que Léa conserve le même rôle.

## P2 historique — corrections de plume et d'utilité

Les remarques ci-dessous ont guidé la correction du snapshot précédent. Les
points bloquants de vocabulaire et d'appropriation ont été appliqués ; seuls
les trois résiduels non bloquants de la revalidation finale restent signalés
en fin de rapport.

### P2.1 — « Une page que la direction peut réellement décider » n'est pas une phrase naturelle

Emplacement : H2 `#dossierclair`.

```text
DossierClair : une page que la direction peut réellement décider
→ DossierClair : du problème mesuré à la décision de construire
```

Le second titre décrit le contenu réel de la section et évite de faire
« décider une page ».

### P2.2 — Le format Markdown est présenté comme s'il était familier

Emplacements : introduction du kit et six libellés de copie ou de
téléchargement.

Pour un dirigeant non technique, « Markdown » ressemble à un format de
développeur. Le fichier est utile, mais le lecteur ne sait pas spontanément
avec quoi l'ouvrir ni comment l'intégrer à son travail.

Ajouter avant les boutons :

> Le fichier `.md` est un document texte. Vous pouvez l'ouvrir avec un éditeur
> de texte ou copier son contenu dans Word, Google Docs ou Notion.

Remplacements visibles :

```text
Copier la trame Markdown
→ Copier la trame prête à coller

Télécharger la trame Markdown
→ Télécharger la trame (.md)

Copier le comparatif Markdown
→ Copier le comparatif prêt à coller

Télécharger le comparatif Markdown
→ Télécharger le comparatif (.md)
```

Dans le texte de la page :

```text
générer une trame Markdown modifiable
→ générer un document texte modifiable, à copier dans votre outil habituel
```

### P2.3 — Trois libellés financiers demandent une traduction inutile

Emplacements : tableau du temps interne et comparateur.

```text
Valeur
→ Coût horaire estimé

Capacité
→ Coût interne estimé

21 h · 1 250 € de capacité interne
→ 21 h · 1 250 € de temps interne valorisé

Horizon fermé de comparaison
→ Durée commune de comparaison

Coûts déclarés complets pour ce calcul
→ Tous les postes de ce calcul ont été renseignés
```

Le paragraphe qui explique que ce temps n'est pas nécessairement une sortie de
trésorerie doit être conservé.

### P2.4 — « Recette » apparaît avant sa traduction

Emplacements : FAQ et sommaire.

```text
environ 9 h 20 pour une recette de 30 scénarios et 8 retests
→ environ 9 h 20 pour jouer 30 tests, puis en rejouer 8 après correction

Recette et décision à 90 jours
→ Tests d'acceptation et décision à 90 jours
```

Le H2 du corps emploie déjà « Organisez les tests » et reste clair.

### P2.5 — Les aides des 21 champs de coût sont invisibles

`SAAS_OFFER_FIELDS` contient une bonne explication de chaque poste, mais le
composant la rend uniquement accessible aux technologies d'assistance avec
`sr-only`. Un lecteur voyant hésite donc devant « étude », « migration » ou
« sortie », précisément au moment où il doit remplacer les montants fictifs.

Ne pas afficher 21 paragraphes identiques, ce qui allongerait fortement le
mobile. Ajouter une seule aide dépliable avant les trois offres :

> **Que mettre dans chaque poste ?** Étude : décisions et risques avant
> construction ; construction : conception, développement et tests ;
> migration : reprise et contrôle des données ; maintenance : corrections et
> capacité réellement incluse ; infrastructure : hébergement, sauvegarde et
> supervision ; licences : services tiers ; sortie : export, documentation et
> transfert.

Conserver les descriptions liées aux champs pour les lecteurs d'écran.

### P2.6 — Deux formulations de contre-exemple sonnent comme une case de méthode

Emplacements : fin de la migration et fin de la section changements.

```text
Le contre-cas existe : une source simple [...]
→ À l'inverse, une source simple [...]
```

```text
Le contre-cas est réel : ne transformez pas un produit simple et compris en
programme administratif de plusieurs mois.
→ Mais si le produit est simple et bien compris, n'en faites pas un programme
administratif de plusieurs mois.
```

## Décision obtenue après chaque section

| Section                              | Ce que le dirigeant peut décider en sortant                                              | État P4                               |
| ------------------------------------ | ---------------------------------------------------------------------------------------- | ------------------------------------- |
| 1. Construire ou choisir autre chose | Acheter, assembler, tester manuellement, construire, attendre ou arrêter.                | Très bon.                             |
| 2. DossierClair                      | Accepter des cibles, limiter le pilote ou arrêter si le signal reste trop faible.        | Très bon fond ; acteurs à corriger.   |
| 3. Temps à réserver                  | Nommer les personnes et réserver 21 h dans l'exemple avant consultation.                 | Très clair.                           |
| 4. Vie du client                     | Décrire achat, invitation, travail, erreur, exploitation et sortie.                      | Actionnable.                          |
| 5. Comptes et droits                 | Nommer les rôles et bloquer toute fuite entre entreprises.                               | Très concret.                         |
| 6. Résultat vendu                    | Relier chaque règle à une mesure métier avant/après.                                     | Excellent.                            |
| 7. Inconnues                         | Étudier, chiffrer sous hypothèse ou accepter consciemment une inconnue.                  | Chiffré et bien limité.               |
| 8. Exploitation                      | Choisir support, sauvegarde, restauration et spécialiste nécessaire.                     | Professionnel, sans promesse globale. |
| 9. Migration                         | Refuser un forfait aveugle ou tester d'abord un échantillon.                             | Clair et utile.                       |
| 10. Double sortie                    | Exiger la sortie de l'abonné et celle du commanditaire.                                  | Différenciant ; identité à corriger.  |
| 11. Trois offres                     | Comparer sur une durée commune sans confondre coût renseigné et qualité.                 | Excellent.                            |
| 12. Changements                      | Accepter, tester, reporter, remplacer ou refuser chaque changement.                      | Clair.                                |
| 13. Tests et 90 jours                | Bloquer, accepter avec réserve, poursuivre, réduire ou arrêter.                          | Très concret.                         |
| 14. Kit                              | Produire le dossier, comparer trois offres et demander une relecture seulement si utile. | Forte valeur autonome.                |

Il n'est donc pas nécessaire d'ajouter un encadré « À retenir » après chaque
H2. Cela rendrait justement la structure plus reconnaissable et plus
artificielle. Les décisions sont déjà portées par les exemples, les calculs et
les phrases de fin.

## Empreinte anti-IA

Le guide ne ressemble pas globalement à un assemblage générique :

- DossierClair traverse les mesures, les droits, les erreurs, les coûts et la
  décision à 90 jours ;
- les chiffres se répondent d'une section à l'autre ;
- l'auteur déclare son conflit d'intérêt ;
- l'opinion peut conduire à ne pas acheter ;
- les limites contredisent les formulations commerciales faciles ;
- le lecteur reçoit un outil local sans adresse électronique.

Deux habitudes restent légèrement systématiques :

1. neuf H2 commencent par un impératif — « vérifiez », « réservez »,
   « racontez », « écrivez », « décrivez », « traitez », « prévoyez »,
   « comparez », « versionnez », « organisez », « construisez » ;
2. plusieurs passages terminent par un avertissement symétrique ou un
   « contre-cas ».

Il n'est pas nécessaire de réécrire toute l'architecture. Les corrections
appliquées suffisent à casser la cadence la plus visible. Le cas concret doit
rester l'ossature, car il fait précisément oublier le gabarit.

## Pression commerciale, mauvais fits et conversion

La pression commerciale est faible et saine :

- aucun formulaire n'interrompt la lecture ;
- aucun téléchargement n'exige d'adresse électronique ;
- le guide dit explicitement que Hagnéré Code a intérêt à vendre du
  développement ;
- l'outil existant, le service manuel, le report et l'arrêt peuvent gagner ;
- le CTA promet une relecture du dossier et des offres, pas un appel de vente
  déguisé ;
- la conclusion peut recommander de ne pas développer.

Le CTA final est crédible parce qu'il demande au lecteur d'envoyer un document
même imparfait, des devis et des inconnues déjà identifiées. Il promet trois
résultats compréhensibles : vérifier que les offres décrivent le même produit,
isoler ce qui mérite une étude et pouvoir conclure qu'une autre voie est plus
rationnelle. Il ne faut pas ajouter de faux sentiment d'urgence.

## Valeur autonome du kit

Même sans contacter Hagnéré Code, le lecteur obtient :

- une trame de 15 parties qui conserve les réponses manquantes ;
- un exemple DossierClair entièrement rempli ;
- trois horizons fermés à 12, 24 et 36 mois ;
- sept postes par offre ;
- des coûts inconnus qui suspendent le classement ;
- des exports locaux ;
- les inclusions, exclusions, hypothèses et limites dans le fichier produit.

La valeur est réelle et supérieure à une simple « checklist PDF ». La version
finale explique le format texte `.md`, affiche une aide dépliable pour les
postes de coût et conserve la saisie longue de 21 montants seulement lorsque
le dirigeant décide de comparer trois offres réelles. Ces choix lèvent le
principal frottement sans transformer l'outil en formulaire commercial.

## Contrôle visuel et interactif : limite honnête

La connexion au navigateur intégré a été tentée pour le guide local, mais
l'environnement a répondu :

```text
No browser is available
```

En conséquence, **aucune validation réelle 320, 390, 768, 1024 ou 1440 px,
aucune comparaison clair/sombre, aucun clic d'ancre et aucun essai visuel du
formulaire ne sont revendiqués dans cette P4**. Aucun navigateur alternatif
n'a été utilisé.

Ce qui a pu être contrôlé sans se substituer à cette validation :

- les 14 identifiants du sommaire correspondent exactement aux 14 H2 ;
- l'action du hero cible `#kit`, qui existe ;
- les contrôles possèdent des labels et les montants possèdent des
  descriptions associées ;
- les 21 tests ciblés passent ;
- les classes responsive prévoient des empilements aux seuils `sm`, `lg` et
  `xl`.

Ces éléments réduisent le risque technique, mais **ne prouvent ni l'absence de
fatigue sur téléphone, ni l'absence de débordement, ni la lisibilité réelle des
thèmes**. Une passe visuelle devra être effectuée dès que Browser est
disponible.

## Revalidation locale du snapshot corrigé

La distribution des rôles est maintenant cohérente dans la page et dans le
fichier généré : la fondatrice décide et finance, Claire administre Atelier
Nord, et Léa réalise le travail métier. La sortie d'Atelier Nord et la sortie
du commanditaire sont distinctes. **P1.1 est levé.**

Les quatre P2 du contre-audit final ont été appliqués :

1. le pronom qui reprend « ce coût interne » est corrigé en « Il rappelle » ;
2. le format `.md` est expliqué avant les boutons comme un document texte
   ouvrable dans un éditeur ou copiable dans Word, Google Docs ou Notion ;
3. le parseur permissif fondé sur `parseFloat` est remplacé par un parseur
   décimal strict. Il accepte la virgule française ou le point avec deux
   décimales au plus et refuse signes, séparateurs mixtes, exposants et chaînes
   partielles. Chaque erreur possède un message humain visible et son champ la
   référence avec `aria-errormessage` ;
4. le deep-dive identifie désormais le classeur Excel comme une piste
   abandonnée au profit du Markdown réellement livré et testé.

La source ne contient aucun `fetch`, stockage local, cookie, WebSocket ou autre
envoi applicatif ; la confidentialité annoncée reste cohérente avec le code
relu. Les 28 tests dédiés au moteur et au composant passent ; la suite ciblée
élargie au langage humain passe à 61/61. TypeScript, le lint ciblé et
`git diff --check` sont également verts. Ces preuves locales ne remplacent pas
le BAT navigateur.

## Snapshot final gelé

Le manifeste `docs/research/manifests/cahier-des-charges-saas-p4.sha256`
fige les **14 fichiers** du cycle final : page, image sociale, registre des
guides, composant, moteur, trois suites ou rapports de tests, journal,
deep-dive, audit initial et trois contre-audits. Le registre partagé
`src/lib/guides.ts` est gelé au hash
`6c3f11fa699c961e337bf25de89fdc8ff0242af3e8a90710a80e339729db4282`.

Ce gel prouve que les tests et documents parlent du même état local. Il ne
prouve toujours ni le rendu navigateur, ni un déploiement, ni une indexation.

## Verdict final

**90/100 avant corrections P2 ; P0=0 ; P1=0 ; NO-GO publication.**

Les quatre P2 ont été corrigés localement, mais aucune hausse de score n'est
inventée après coup. La publication reste **NO-GO** tant que le BAT navigateur
du snapshot exact n'a pas contrôlé les largeurs 320 / 390 / 768 / 1024 /
1440, les thèmes clair/sombre, la navigation au clavier, les messages d'erreur,
les copies et les trois téléchargements. Cette porte est une preuve manquante,
pas un défaut éditorial caché.
