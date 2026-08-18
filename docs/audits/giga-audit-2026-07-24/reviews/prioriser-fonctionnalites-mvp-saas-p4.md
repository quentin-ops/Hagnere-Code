# Passe P4 indépendante — revalidation de la plume et du mobile

Guide : `prioriser-fonctionnalites-mvp-saas`  
Date : 24 juillet 2026  
Périmètre : page publique et rendu local, en lecture seule  
Référentiels relus intégralement :
`docs/charte-qualite-guides.md` et
`docs/workflow-maitre-guides-4-passes.md`

## 1. Snapshot revalidé

| Élément       | SHA-256                                                            |
| ------------- | ------------------------------------------------------------------ |
| Page publique | `75480cee0a08737de28b3b7096cb2e3c2df8a7f63af49fc4f71dc9c084f430ff` |
| Image sociale | `e6d52a4c109b6581115866dcd7651024443de3be5bf69bee5b43cd065fc217d3` |
| Kit CSV       | `645ea43efd317e1322383ecc329d126b19b8b0b4dfd8aea7ab3e448cca5aeed3` |

Le registre partagé `src/lib/guides.ts` a changé pendant cette relecture à
cause des autres travaux en cours. Son empreinte n’est donc pas présentée comme
un snapshot gelé de cette P4. La page, l’image et la ressource listées
ci-dessus sont restées stables pendant la revalidation éditoriale.

## 2. Verdict

**Verdict P4 du guide : GO.**

- `P0` restant : aucun ;
- `P1` restant : aucun ;
- `P2` restant : deux resserrements facultatifs ;
- score de plume : **18/20**.

Les trois P1 du premier passage sont fermés :

1. le premier écran ne demande plus de connaître RICE, `lot`, `portée` ou
   `jours-personnes` ;
2. le sommaire et les titres 6 et 7 parlent désormais de la décision avant de
   nommer les méthodes ;
3. la section commerciale explique en français courant ce que le dirigeant
   apporte, ce qu’il obtient et les cinq conclusions possibles.

Le guide peut maintenant être compris et utilisé par un dirigeant non
spécialiste. Ce GO porte sur la page et la passe de plume. Il ne vaut pas
encore gel du lot global, build de production, publication ni indexation.

## 3. Revalidation des trois anciens P1

### P1.1 — premier écran : fermé

Fichier :
`src/app/guides/prioriser-fonctionnalites-mvp-saas/page.tsx`, lignes 240 et
312 à 341.

La nouvelle description du hero annonce désormais une situation et un
résultat :

> Dix demandes, du temps pour en réaliser deux : écartez les urgences à
> traiter tout de suite, comparez les autres avec les mêmes critères et
> choisissez 30 jours de travail réellement tenables.

Le paragraphe d’ouverture :

- reprend le conflit réel du lecteur ;
- sépare les urgences qui doivent être traitées à part ;
- donne une opinion immédiate : aucun score ne décide à sa place ;
- annonce les cinq décisions finales ;
- n’emploie plus un sigle de méthode avant sa définition.

Le mot `lot` arrive seulement dans le paragraphe suivant, après sa traduction :
« ensemble de travaux pour la prochaine version ». L’ouverture passe le test
des 150 premiers mots.

### P1.2 — titres dominés par les sigles : fermé

Fichier : même page, lignes 391 à 419, 703 à 708 et 815 à 858.

Le sommaire annonce maintenant :

- « Vérifier ce que dit réellement le score » ;
- « Choisir la méthode selon la question à trancher ».

Les H2 visibles sont :

- « Comparez les mêmes informations avant de calculer un score » ;
- « Quelle méthode utiliser selon la décision à prendre ? ».

RICE est défini dans la première phrase de la section 6. WSJF n’apparaît dans
un titre qu’après le tableau comparatif, avec son bénéfice placé avant le nom
de la méthode : « Quand le coût du retard peut changer l’ordre — méthode
WSJF ».

Les titres se comprennent donc isolément, sans apprendre d’abord le vocabulaire
du guide.

### P1.3 — conversion en langue de consultant : fermé

Fichier : même page, lignes 1321 à 1359.

Les formulations suivantes ont disparu :

- « challenger la portée et la confiance » ;
- « fermer la capacité » ;
- « livrable attendu » ;
- « signal de réexamen » ;
- « Capacité fermée ».

La section explique maintenant que Hagnéré Code :

- vérifie combien de clients sont réellement concernés ;
- regarde ce qui reste incertain ;
- tient compte du temps que l’équipe peut réellement consacrer à la version ;
- rend une décision argumentée pour chaque demande ;
- peut recommander de corriger, acheter, tester, attendre ou développer.

Le CTA reste cohérent :

> Décider quelles demandes traiter maintenant

Ses trois badges promettent des résultats compréhensibles :

- cinq demandes comparées ;
- temps disponible réparti ;
- développer seulement si utile.

La conversion ne biaise donc pas le verdict vers l’offre vendue. Elle rend au
contraire visible la possibilité de ne rien développer.

## 4. Revalidation des corrections P2 de langage

### Expressions savantes : fermées

« Rendre l’essai falsifiable » est devenu :

> construire un essai capable de contredire votre idée

« Cherchez ensuite une capacité existante » est devenu :

> Cherchez ensuite une solution déjà disponible

« La dernière bifurcation » est devenue :

> Développer, acheter ou attendre : la décision finale

Ces formulations peuvent être comprises à la première lecture.

### Avertissements sur les sources : P2 facultatif restant

Les réserves entourant GOV.UK, Strategyzer, le standard australien, SAFe et
Kano restent exactes et utiles. Plusieurs paragraphes conservent néanmoins une
cadence voisine :

- « ce cadre n’est pas une norme » ;
- « ce n’est pas une garantie » ;
- « son périmètre n’est pas votre SaaS » ;
- « ces cadres appartiennent à leurs contextes ».

Ce rythme est légèrement académique, mais il ne bloque ni la compréhension ni
la décision. Une future passe mineure pourrait condenser ces réserves sans
retirer le pays, le contexte ou le conflit d’intérêt. Elles ne doivent pas être
supprimées mécaniquement.

## 5. Point d’ennui et coupe de 20 %

Le point le plus dense demeure la seconde moitié de la section 7 :

1. comparaison de cinq méthodes ;
2. calcul WSJF ;
3. réserve Kano ;
4. cinq demandes comparées ;
5. exemple complet sur huit lignes ;
6. décision récapitulative.

Cette densité est réelle. Elle n’est toutefois pas creuse :

- le tableau répond à « quelle méthode pour quelle question ? » ;
- le calcul montre que le coût du retard peut inverser l’ordre ;
- les cinq demandes produisent cinq décisions différentes ;
- l’exemple complet rend la grille téléchargeable utilisable sans deviner
  comment la remplir.

Supprimer 20 % de cette séquence ferait perdre soit la contradiction entre les
méthodes, soit l’exemple rempli. Le maintien est donc défendable compte tenu de
l’objectif de profondeur demandé. Un resserrement futur peut remplacer les
huit cartes de l’exemple par quatre lignes dans l’article et renvoyer au CSV,
mais ce changement reste un `P2`, pas un blocage.

## 6. Vérification anti-IA

### Substitution

L’ouverture ne fonctionne pas avec un autre sujet sans être entièrement
réécrite : clients qui demandent dix fonctions, équipe qui peut en livrer deux,
correction avant développement et capacité de trente journées de travail.

### Sujet, action et résultat

Les passages stratégiques nomment désormais :

- qui agit : le dirigeant, l’équipe, les utilisateurs ou Hagnéré Code ;
- ce qui est fait : observer, comparer, tester, acheter, développer ou
  reporter ;
- ce qui change : une demande entre dans la version, devient un test ou reste
  dehors avec une condition de réexamen.

### Voix et rythme

Le texte ne contient pas les transitions industrielles habituelles :
« dans cet article », « il est essentiel de », « plongeons dans » ou « en
conclusion ». Les paragraphes ne suivent pas tous la même longueur. Les
tableaux comparent, les formules démontrent et les cartes permettent d’agir.

### Opinion professionnelle

L’opinion reste nette sans être commerciale :

- aucun score ne décide à la place de l’entreprise ;
- une mesure de portée peut être fausse même si elle est disponible ;
- un test à 720 € peut précéder une construction fictive à 13 300 € ;
- Hagnéré Code déconseille de vendre du sur-mesure pour défendre un score que
  personne ne sait refaire.

### Fausse précision

Aucune fausse précision bloquante :

- les scénarios sont annoncés comme fictifs ;
- les unités, hypothèses et formules sont visibles ;
- le point mort sépare investissement initial et entretien annuel ;
- la sensibilité montre la valeur qui inverse l’ordre ;
- aucun chiffre n’est présenté comme un prix Hagnéré Code ou une moyenne de
  marché.

### Structure reconnaissable

Le guide ne reprend pas un plan générique de blog. Sa progression reste propre
au problème :

```text
demande brute
→ problème observé
→ urgences hors score
→ objectif commun
→ comparaison
→ test
→ économie
→ trente jours disponibles
→ décision écrite
```

La présence de cinq issues, cinq demandes et cinq méthodes ne constitue pas
une symétrie décorative : les trois ensembles ont des fonctions différentes.

## 7. Lisibilité réelle sur mobile

Contrôles rejoués dans le navigateur local sur le snapshot de page ci-dessus :

| Largeur | Largeur du document | Débordement sur H1/H2/H3, texte, tableaux, formules, liens et boutons |
| ------: | ------------------: | --------------------------------------------------------------------- |
|  320 px |              320 px | aucun                                                                 |
|  390 px |              390 px | aucun                                                                 |

Constats visuels :

- H1, description, auteur, date, téléchargement et chiffres clés sont lisibles
  à 320 px ;
- le premier écran n’affiche plus RICE ni `lot` avant explication ;
- les tableaux deviennent des cartes verticales ;
- option, question et conséquence restent visibles ensemble ;
- les formules ne créent pas de défilement horizontal ;
- le H2 de la section 7 tient désormais en une question ordinaire ;
- la section commerciale et le CTA restent lisibles à 390 px ;
- les trois badges du CTA ne débordent pas ;
- le bouton « Faire examiner mes demandes » tient dans la largeur.

### Limite du contrôle de thème

Deux clics uniques sur le bouton clair/sombre ont laissé la page en thème
sombre et ramené le défilement en haut, sans erreur console visible. Dans le
même temps, le registre partagé changeait à cause des travaux parallèles, ce
qui peut provoquer un rechargement à chaud de la page. La P3 précédente avait
contrôlé les deux thèmes.

Ce constat n’est donc pas attribué au guide et ne rouvre pas un P1 éditorial.
En revanche, cette P4 **ne prétend pas avoir revalidé le thème clair sur un
snapshot global gelé**. La bascule doit être rejouée après gel du lot, sur le
build de production, avant toute déclaration de QA globale.

## 8. Score de plume

| Critère                                   | Note | Justification                                                                                            |
| ----------------------------------------- | ---: | -------------------------------------------------------------------------------------------------------- |
| Présence humaine et situations concrètes  |  5/5 | Dilemme réel, demandes formulées comme au téléphone, exemples suivis et objections loyales               |
| Langue immédiate pour un dirigeant        |  4/5 | Ouverture, titres et CTA désormais directs ; quelques réserves de sources gardent une cadence académique |
| Rythme, variété et plaisir de lecture     |  4/5 | Progression propre et formats utiles ; section 7 volontairement très dense                               |
| Opinion, honnêteté et absence de survente |  5/5 | Position nette, chiffres qualifiés et cinq sorties dont plusieurs ne vendent aucun développement         |

**Total : 18/20.**

Le guide a une plume professionnelle, calme et concrète. Les deux points
perdus correspondent à des raffinements de rythme, pas à un manque de
pédagogie ou de crédibilité.

## 9. Porte de sortie

### Conditions éditoriales

- [x] ouverture compréhensible sans vocabulaire produit ;
- [x] réponse et décision présentes dans les 150 premiers mots ;
- [x] titres compris isolément ;
- [x] acronymes définis lorsqu’ils deviennent utiles ;
- [x] opinion professionnelle nette et contredite par des contre-cas ;
- [x] CTA en langue acheteur ;
- [x] mauvais fit et option de ne pas développer visibles ;
- [x] aucun P0 ou P1 restant ;
- [x] rendu 320 et 390 px sans débordement.

### Conditions appartenant au gel global

- [ ] registre partagé figé ;
- [ ] batterie P4 complète sur le lot final ;
- [ ] thème clair et sombre rejoués sans rechargement concurrent ;
- [ ] build de production et route du build contrôlés ;
- [ ] manifeste final généré par l’orchestrateur.

**Verdict final de cette passe : GO P4 éditorial et mobile pour le guide
`prioriser-fonctionnalites-mvp-saas`.**

Le statut maximal démontré ici est : **prêt à entrer dans le gel et la QA du
lot global**. Cette formulation ne signifie ni publié, ni indexé.
