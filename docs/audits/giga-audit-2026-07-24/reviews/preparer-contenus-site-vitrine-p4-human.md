# Contre-lecture P4 humaine — `preparer-contenus-site-vitrine`

Date : **24 juillet 2026**

Relecteur : `/root/cahier_saas_p4_human`

Périmètre : lecture comme un dirigeant de TPE/PME, artisan, commerçant ou
indépendant à qui l'on demande « les textes, les photos et le logo ». Contrôle
de la pédagogie, de la profondeur, du fil ServiMeca, des chiffres, des
comparaisons, des preuves, de la confiance, de la conversion, de la valeur du
kit et de la cohérence entre sommaire et sections. Aucun fichier de production
n'a été modifié.

## Snapshot contrôlé

```text
b585ad8058cb9d47754a954d6d9304f27e5fa505fda6571a7f46ce0b12cf1007  src/app/guides/preparer-contenus-site-vitrine/page.tsx
7afedf994ce569c1c14891f6c74b7aa9585aae8ed090b0890687cae6d5b455f7  src/components/guides/ContentPreparationKit.tsx
9afb58316ab1515257740efd773323d332b5afcbbbae62be6288fa819544a75e  src/lib/content-preparation-kit.ts
c906253b0aa8141e3670c1781c925f74c34fbdcaa95c34af777b790f44f3b3d6  src/lib/guides.ts
b5d978cac6425b2ece1894c9d7d6f8e2e2a330d61ffdc16a1c895b3d858841d5  src/app/guides/preparer-contenus-site-vitrine/opengraph-image.tsx
```

Les suites ciblées ont été rejouées sur ce snapshot :

```text
Test Files  2 passed (2)
Tests      20 passed (20)
```

Elles couvrent le générateur de dossier, l'exemple ServiMeca, la neutralisation
des valeurs saisies, les trois options de production, les arrondis, les
inconnues, le refus de classement, les exports et les champs accessibles.

## Verdict exécutif

**Score éditorial : 94/100.**

**Score P4 : 19/20 — GO éditorial et fonctionnel (réserve de QA visuelle).**

```text
P0 : 0
P1 : 0
P2 : 3
Verdict : GO (réserve QA visuelle réelle)
```

Le fond est désormais très solide. Le lecteur comprend dès l'ouverture qu'il
n'a pas à rédiger seul chaque phrase, mais qu'il doit apporter les faits, les
limites, les preuves, les coordonnées et les droits. Le guide donne une
méthode de classement (`prêt / à faire produire / à confirmer`), six dossiers,
une fiche par offre, une transformation note brute → page, une vraie
comparaison chiffrée de trois modes, un test auprès de prospects et un suivi à
30/90 jours. Il ne promet ni position Google ni chiffre d'affaires et reconnaît
qu'une préparation interne peut suffire.

Les deux P1 relevés lors de la première lecture sont désormais fermés dans ce
snapshot : le sommaire et les H2 portent la même numérotation (le kit en 9,
la décision de lancement en 10), et le téléchargement est honnêtement nommé
« exemple de travail (offre, page, coûts et test) ». Le texte adjacent précise
que les valeurs sont fictives et modifiables : il ne promet plus un dossier
complet alors que le fichier est volontairement ciblé.

Il reste trois réserves P2 non bloquantes : la formule du temps de test mérite
une phrase de définition encore plus explicite, le guide pourrait répéter un
CTA final après le dernier contrôle, et la fatigue visuelle/mobile ne peut pas
être signée sans navigateur réel.

## Les 150 premiers mots

### Ce qui fonctionne

La page commence par la scène exacte vécue par la cible :

> Votre projet de site avance, puis le prestataire vous demande « les textes,
> les photos et le logo ».

La réponse arrive sans détour : le dirigeant n'a pas à écrire chaque phrase,
mais personne ne peut inventer ses offres, ses limites, ses preuves, ses
coordonnées ou ses droits. Les trois états sont introduits dans les premiers
mots, puis le devis est relié à quatre responsabilités : qui écrit, fournit,
vérifie et valide.

Le deuxième paragraphe traduit le mot « contenu » en choses concrètes — textes,
photos, réalisations, informations pratiques, formulaire et éléments légaux —
et explique la finalité : permettre au prestataire d'utiliser réellement la
matière. Le hero annonce en plus le dossier à préparer, les tâches à chiffrer et
le test avant mise en ligne. C'est humain, direct et adapté à un lecteur qui
n'est pas rédacteur web.

### Réserve mineure

Le résultat final (« un dossier transmis, une option de production choisie et
un test effectué ») n'est pas formulé en une seule phrase avant le premier H2.
Il est toutefois immédiatement déductible de l'ouverture et du hero. Ce n'est
pas un P1.

## Score détaillé

| Critère | Note /10 | Observation humaine |
| --- | ---: | --- |
| Intérêt dès l'ouverture | 10 | Situation vécue, réponse nette et promesse opérationnelle. |
| Compréhension dirigeant | 9 | Le contenu, les preuves, les droits et les états sont expliqués sans parler comme un rédacteur. |
| Progression et décisions | 9 | Le chemin est complet et la numérotation kit/lancement est désormais alignée. |
| Rythme et fatigue | 9 | Exemples et tableaux relancent la lecture ; 12 sections, cartes et modèles restent longs sur mobile. |
| Voix humaine / anti-IA | 9 | Avis assumé, cas fictif, limites et contre-cas ; peu de slogans génériques. |
| Profondeur et exemples | 10 | Avant/après, preuve datée, photo, formulaire, comparaison, test et suivi. |
| Chiffres et comparaison | 10 | Même lot, trois modes, heures, taux horaires, coûts, inconnues et formule de bascule. |
| Confiance et mauvais fits | 10 | Préparation interne, report, retrait d'une preuve, blog déconseillé si non tenu. |
| Kit autonome | 9 | Modèle vierge très complet ; exemple ciblé clairement qualifié et réellement utile. |
| Conversion sans pression | 9 | CTA concret avant le kit ; une relance finale resterait une optimisation. |

Total : **94/100**.

## P1 historiques — corrections désormais vérifiées

### P1.1 — Ordre et numérotation des sections 9 et 10

Le défaut observé dans le premier snapshot est conservé ici comme trace
d'audit. Il est fermé dans le snapshot revalidé : le sommaire et le corps
affichent maintenant la même séquence :

```text
8. Comparer trois modes
9. Télécharger le dossier et le comparateur
10. Décider si le dossier est prêt
11. Remettre un dossier utilisable
```

Le corps confirme `#kit` en **9. Téléchargez…**, puis `#lancement` en **10.
Décidez…**. Le kit vient logiquement avant le verdict : le lecteur le remplit,
puis choisit s'il lance en interne, avec production éditoriale ou après une
préparation complémentaire.

```text
TOC et H2 revalidés :
9. Télécharger le dossier et le comparateur
10. Décider si le dossier est assez prêt
```

Statut : **P1 fermé**.

### P1.2 — Promesse de l'exemple téléchargé

Le premier snapshot employait « Télécharger l'exemple rempli », alors que le
fichier `buildServiMecaExampleMarkdown()` ne couvrait qu'un parcours ciblé. La
correction retenue est l'option honnête :

```text
Télécharger l'exemple de travail (offre, page, coûts et test)
```

Le statut de téléchargement et le paragraphe de la page reprennent la même
qualification : l'exemple ServiMeca porte sur l'offre, la page, les coûts et le
test ; ses valeurs sont fictives et modifiables. Il ne se présente donc plus
comme un dossier complet.

Statut : **P1 fermé**.

## P2 — améliorations non bloquantes

### P2.1 — Rendre le calcul du test de compréhension immédiatement lisible

Le texte indique « montrez-leur la page pendant quatre minutes, puis posez
quatre questions », puis calcule `3 × 4 × 7 minutes + 45 minutes`. Le résultat
2 h 09 et 193,50 € est juste si 7 minutes désignent la durée totale d'une tâche,
mais cette hypothèse n'est pas dite. Le lecteur doit pouvoir refaire le calcul
sans deviner.

### P2.2 — Ajouter une sortie après le kit

Le CTA « Vous avez les informations, mais pas encore les pages ? » est bien
placé avant le téléchargement et propose l'option interne. Après le kit, le
lecteur reçoit encore un verdict, un test et un suivi, mais aucun rappel vers
la prochaine étape. Un CTA discret après `#apres-publication` améliorerait la
conversion sans ajouter d'urgence artificielle.

### P2.3 — Harmoniser l'exemple téléchargé avec le fil ServiMeca (fermé)

La page montre le before/after, les coûts, la photo, le formulaire et le test.
Le libellé du fichier ServiMeca est désormais aligné sur son périmètre ciblé ;
il n'y a plus de contradiction entre ce que le bouton promet et ce que le
fichier contient. Statut : **P2 fermé par qualification explicite**.

### P2.4 — Vérifier la fatigue réelle au mobile

La succession de 12 sections, 6 dossiers, 5 cartes de responsabilités,
plusieurs tableaux et 3 modèles peut fatiguer sur téléphone. Une éventuelle
coupe ne doit pas supprimer les preuves ou les chiffres : elle doit regrouper
les réserves réglementaires et conserver les décisions du cas.

## Lecture humaine, section par section

| Section | Décision qu'un dirigeant peut prendre en sortant | Évaluation |
| --- | --- | --- |
| Réponse courte / états | Contacter l'agence avec une matière partielle, à condition de nommer chaque inconnue. | Très bon. |
| 1. Six dossiers | Ranger la matière sans chercher à produire une belle page trop tôt. | Pédagogique et actionnable. |
| 2. Fiche d'offre | Décrire client, situation, résultat, inclusions, limites, preuve et prochaine action. | Excellent. |
| 3. Note → page | Écrire une promesse compréhensible, une preuve et une action sans slogan. | Excellent, meilleur passage du guide. |
| 4. Preuves | Publier, confirmer, reformuler ou retirer une affirmation. | Très fiable. |
| 5. Photos | Choisir une scène utile, vérifier auteur, licence, personnes et alternative. | Profond et concret. |
| 6. Informations/formulaire | Donner les données nécessaires et tester la réception de la demande. | Professionnel, borné juridiquement. |
| 7. Responsabilités | Faire écrire dans le devis qui produit, relit, intègre et valide. | Fort levier de conversion et de protection. |
| 8. Comparaison | Choisir interne, hybride ou délégué sur le même lot. | Chiffré et conditionnel. |
| 9/10. Kit puis lancement | Remplir le dossier et décider de lancer, produire ou reporter. | Bonne logique, numérotation désormais cohérente. |
| 11. Transmission | Permettre à une personne absente de retrouver version, droit et validateur. | Très utile. |
| 12. Test et suivi | Corriger avant trafic, puis observer demandes et objections à 30/90 jours. | Excellent et honnête. |

## Pédagogie, plume et anti-IA

Le guide sonne humain pour des raisons vérifiables :

- il commence par une demande réellement entendue auprès d'une agence ;
- il oppose les slogans « très réactifs » aux faits utilisables ;
- il assume une recommandation hybride mais dit quand l'interne ou la
  délégation gagne ;
- il distingue décaissement, temps valorisé, inconnue et économie ;
- il rappelle qu'un test de compréhension n'est pas un taux de conversion ;
- il autorise le report, le retrait d'une preuve et l'absence de blog ;
- il nomme une entreprise fictive et marque clairement ses chiffres.

La structure est méthodique, mais pas artificielle : le test « comprendre,
croire, agir », ServiMeca et les mêmes offres traversent plusieurs sections.
La passe finale a maintenant aligné la numérotation du sommaire et des H2.
Quelques formulations impératives (« Réunissez »,
« Remplissez », « Gardez », « Choisissez ») sont adaptées à un guide pratique
et ne suffisent pas à donner une empreinte IA.

## Conversion et confiance

La conversion est saine :

- le dirigeant peut faire le travail lui-même ;
- l'option interne est décrite comme légitime ;
- le mode hybride est une opinion, pas une promesse universelle ;
- le CTA demande un dossier même imparfait et propose de distinguer ce qui peut
  rester interne ;
- le formulaire n'est pas présenté comme une machine à prospects ;
- aucun classement Google ou chiffre d'affaires n'est promis.

Le manque de CTA final est une optimisation, pas un défaut de confiance. La
promesse de l'exemple téléchargé et l'ordre des décisions sont désormais
cohérents.

## Kit, privacy et action autonome

Le kit est réellement local : la source ne contient ni `fetch`, ni
`XMLHttpRequest`, ni `localStorage`, ni `sessionStorage`, ni cookie, ni
`WebSocket`. La copie utilise le presse-papiers et les téléchargements utilisent
un Blob local. Le texte précise honnêtement qu'un fichier copié ou téléchargé
peut ensuite être conservé ou synchronisé par l'appareil.

Le modèle vierge est riche : carte des pages, phrases clients, fiche d'offre,
page test, preuves, photos, identité, formulaire, responsabilités, test avant
publication, lancement et suivi. Le comparateur conserve les hypothèses,
inconnues, heures internes et coûts prestataire et refuse de désigner un mode
tant qu'une inconnue importante reste ouverte.

Le fichier ServiMeca est un bon exemple de chemin critique. Il est désormais
présenté pour ce qu'il est : un exemple ciblé de l'offre, de la page, des coûts
et du test, et non un dossier complet. Cette qualification rend le livrable
autonome sans gonfler artificiellement sa promesse.

## Contrôle visuel et interactif : limite honnête

Browser n'étant pas disponible dans cet environnement, je ne revendique pas de
validation réelle à 320, 390, 430, 768, 1024 ou 1440 px, ni en clair/sombre, ni
de clic d'ancre ou de test visuel du formulaire. Aucun navigateur alternatif
n'a été utilisé.

Les contrôles statiques et automatisés disponibles sont toutefois rassurants :

- les 13 identifiants du sommaire correspondent aux 13 H2 qui y sont listés ;
- l'action du hero cible `#reponse`, qui existe ;
- les tests ciblés passent 20/20 ;
- les champs sont labelisés et leurs erreurs exposées ;
- les grilles et tableaux prévoient des empilements responsive.

La numérotation 9/10 est désormais cohérente dans le source. Le risque de
fatigue et de débordement mobile doit encore être observé dans un vrai
navigateur.

## Revalidation finale

1. **Cohérence éditoriale : GO.** Les 13 entrées du sommaire correspondent aux
   13 H2, avec kit en 9 et lancement en 10.
2. **Promesse du téléchargement : GO.** Le libellé, le statut de succès et le
   texte de la page qualifient tous l'exemple comme un exemple de travail ciblé
   (offre, page, coûts et test), avec valeurs fictives et modifiables.
3. **Régression fonctionnelle : GO.** Les deux suites ciblées passent 20/20.
4. **QA visuelle : en attente.** Browser n'était pas disponible ; aucun GO
   visuel 320–1440 px, clair/sombre, ancres et formulaire n'est revendiqué.

**Verdict final : GO éditorial et fonctionnel.** Le guide peut être publié sur
ce périmètre. Une passe Browser devra compléter l'assurance de rendu, sans
remettre en cause le GO de contenu et de comportement testé.
