# Dossier de recherche — `agence-web-ou-freelance`

> **Statut au 25 juillet 2026 : reconstitution documentaire, passe 1 à
> reprendre.** Ce dossier rassemble ce qui est effectivement observable dans
> le guide courant et dans son audit approfondi. Il ne transforme pas l'audit
> historique en recherche P1 validée, ne certifie pas la fraîcheur actuelle
> des pages externes et ne prouve ni publication, ni indexation, ni
> classement.

## Journal des quatre passes

Propriétaire éditorial unique : à désigner avant reprise.

| Passe                        | État            | Date                        | Responsable             | Snapshot documentaire           | Blocages                                                                                               |
| ---------------------------- | --------------- | --------------------------- | ----------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 1. Recherche                 | **À reprendre** | 24/07/2026                  | à désigner              | page et audit listés ci-dessous | Rejouer la demande, la concurrence et les sources volatiles ; décider le cas commun et ses hypothèses. |
| 2. Rédaction et intégration  | **À reprendre** | page existante              | à désigner              | page `2b390a…c21ccc`            | Sept défauts P1 hérités ; offres non égalisées ; TCO absent.                                           |
| 3. Contre-audit indépendant  | **À reprendre** | audit initial du 24/07/2026 | autre agent obligatoire | audit `b80c11…d9699`            | Le rapport diagnostique le snapshot antérieur ; aucun snapshot corrigé n'a été revalidé.               |
| 4. Plume humaine et contrôle | **Bloquée**     | —                           | autre lecteur + QA      | —                               | Attendre P3 validée, puis test dirigeant, responsive, liens, calculs, build et route.                  |

États employés conformément à
[`docs/workflow-maitre-guides-4-passes.md`](../workflow-maitre-guides-4-passes.md).
La présence d'une page longue ou d'un audit ne vaut pas validation d'une
porte.

### Manifeste documentaire observé

| Fichier contrôlé                                                      | SHA-256 au 24/07/2026                                              | Usage dans ce dossier                           |
| --------------------------------------------------------------------- | ------------------------------------------------------------------ | ----------------------------------------------- |
| `src/app/guides/agence-web-ou-freelance/page.tsx`                     | `2b390a740c439d7423131a3e3eca4c4ca29e639178f0b8652342248755c21ccc` | Contenu réellement présent dans le guide.       |
| `docs/audits/giga-audit-2026-07-24/guides/agence-web-ou-freelance.md` | `b80c1134f4dc805c766fabc37365e60534214643d32f217713f553b8d16d9699` | Constats, benchmark et corrections historiques. |
| `docs/charte-qualite-guides.md`                                       | `5ee616faa4959dc8ad2b0eb19a5b19ffbf53299b62665700093c5c176b0b8491` | Contrat de qualité et de langage humain.        |
| `docs/workflow-maitre-guides-4-passes.md`                             | `a3a8c8f1be5d5d60b096f251f22b27ae5526adb708c334c4d6f0b7b4270c60c4` | Définition des portes P1 à P4.                  |

Ces empreintes décrivent les fichiers lus, pas un manifeste de sortie P1.
Aucun fichier `docs/research/manifests/agence-web-ou-freelance-p1.sha256`
n'est créé par cette reconstitution.

## 1. Fiche d'identité et contrat avec le dirigeant

```text
Slug : agence-web-ou-freelance
Statut actuel : page existante, recherche à reprendre, réécriture non validée
Requête principale encore à confirmer : agence web ou freelance
Moment du parcours : décider après réception ou préparation de plusieurs offres
Lecteur précis : dirigeant, commerçant ou indépendant qui ne veut pas acheter
                 une étiquette mais une équipe, un résultat et une continuité
Situation déclenchante : un devis freelance paraît moins cher qu'un devis
                         d'agence, sans que les deux couvrent le même travail
Question réelle : « Qui couvrira le résultat attendu au meilleur coût complet,
                  avec une équipe crédible et une reprise possible ? »
Décision principale : compléter les offres sur un périmètre identique, écarter
                      les risques non compensables, puis choisir ou reporter
Niveau de connaissance : sait décrire son activité ; ne maîtrise pas
                         nécessairement TJM, TCO, licences ou réversibilité
Action utile sans contact : remplir une grille commune et calculer 12/36/60 mois
CTA possible : relecture bornée des offres, avec livrable, délai, portée et prix
Hors périmètre : classement automatique de prestataires, tarif de marché,
                 conseil juridique/fiscal individualisé, garantie SEO
```

### Phrase réelle, réponse et promesse

- **Phrase que le lecteur pourrait dire au téléphone :** « Le freelance est à
  9 360 € et l'agence à 14 500 €. Est-ce que je paie juste la structure de
  l'agence, ou est-ce qu'il manque des choses dans le premier devis ? »
- **Réponse attendue en une phrase :** le statut ne décide rien ; comparez les
  mêmes livrables, les mêmes personnes, le même niveau de test, le même suivi
  et la même sortie sur trois à cinq ans.
- **Décision promise :** savoir quand le freelance, le collectif, l'agence, la
  solution standard, l'amélioration ciblée ou le report est rationnel.
- **Promesse à ne pas faire :** « le freelance est toujours moins cher »,
  « l'agence est toujours plus sûre » ou « tel TJM est le juste prix ».

### Contrat de langage humain

| Élément                         | Règle pour ce guide                                                                                                                                           |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mots ordinaires                 | devis, personnes, jours réservés, textes, maquettes, tests, comptes, entretien, changement de prestataire                                                     |
| Termes à traduire immédiatement | TJM = prix facturé pour une journée ; TCO = tout ce que le choix coûte sur une période ; réversibilité = ce que l'entreprise récupère pour continuer ailleurs |
| Jargon à éviter                 | staffing, capacity planning, delivery model, vendor lock-in, SLA sans explication                                                                             |
| 150 premiers mots               | partir des deux devis, annoncer qu'ils sont incomparables, dire exactement ce qui sera complété et rappeler qu'une solution simple peut gagner                |
| Question finale                 | « À périmètre, preuves et horizon identiques, quelle option protège le mieux le résultat et l'entreprise ? »                                                  |

## 2. Ce que la page courante couvre réellement

La page observée comporte quatorze étapes éditoriales :

1. choix selon la situation ;
2. personnes qui travailleront réellement ;
3. tarifs journaliers ;
4. comparaison de deux prix ;
5. calendrier et capacité ;
6. continuité ;
7. sous-traitance ;
8. code, comptes et droits ;
9. signaux d'une offre professionnelle ;
10. solutions intermédiaires ;
11. engagements techniques ;
12. coût sur trois ans ;
13. verdict par profil ;
14. méthode de comparaison en cinq étapes.

### Forces à conserver

- L'ouverture part de deux nombres concrets et dit immédiatement qu'ils ne
  suffisent pas à choisir.
- Le statut n'est confondu ni avec la qualité, ni avec la continuité.
- Les personnes, rôles, décideur et mainteneur doivent être nommés.
- L'exemple `18 × 520 € = 9 360 €` est fictif et arithmétiquement correct.
- Le biais commercial de Hagnéré Code est déclaré.
- La continuité est reliée aux comptes, au code, aux données et à la
  documentation, pas à la seule taille du prestataire.
- Collectif, studio senior, partenaires, outil standard et amélioration
  ciblée existent comme voies intermédiaires.
- Le CTA actuel accepte qu'un freelance ou une solution plus simple gagne.

### Promesse non délivrée dans le snapshot

- Le devis freelance n'intègre pas design, huit textes, pilotage, tests et
  corrections ; le devis agence n'est pas ventilé.
- Le tableau de coût sur trois ans est laissé sans résultat alors que le
  registre promet cette comparaison.
- Les baromètres décrivent des tarifs d'indépendants IT, pas le prix de deux
  projets équivalents.
- Capacité, remplaçant, références et reprise sont demandés mais non notés par
  une preuve commune.
- Sécurité, données, accessibilité, sauvegarde et incident ne sont pas des
  portes éliminatoires explicites.
- La relecture de devis proposée par le CTA ne décrit pas encore le livrable,
  le délai, la portée contractuelle ni le prix.

## 3. Cannibalisation et frontières éditoriales

| Page voisine observée ou évidente dans le corpus   | Intention à préserver                                       | Différence à rendre explicite                                                                                   |
| -------------------------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `/guides/choisir-son-agence-web`                   | sélectionner une agence parmi plusieurs                     | ici, décider d'abord du modèle d'équipe, y compris freelance, collectif, solution standard ou report            |
| `/guides/choisir-prestataire-application-metier`   | choisir un prestataire pour un produit métier plus critique | ici, cas générique agence/freelance pour site ou outil, sans reproduire le protocole applicatif détaillé        |
| `/guides/combien-coute-un-site-internet`           | construire un budget de site                                | ici, comparer deux organisations à périmètre égal ; le prix n'est qu'une dimension                              |
| `/ressources/kit-cahier-des-charges-site-internet` | formaliser le besoin avant consultation                     | ici, noter les personnes, la capacité, les preuves, la continuité et le coût complet après réception des offres |
| `/tarifs`                                          | présenter des offres Hagnéré Code                           | le guide doit rester indépendant des tarifs commerciaux et pouvoir faire perdre Hagnéré Code                    |

**Justification de l'URL distincte :** le lecteur n'essaie pas seulement de
trouver une bonne agence ou un budget ; il arbitre entre formes
d'organisation pour un même résultat.

Cette frontière est déduite des routes et du contenu observés. Une vraie P1
doit encore contrôler les requêtes, les pages qui se positionnent et le
maillage final.

## 4. Demande, concurrence et gain d'information

### Ce qui est réellement documenté

L'audit indique une recherche effectuée le 24 juillet 2026 en français et en
anglais, couvrant France, États-Unis, Royaume-Uni et Australie. Il rapporte que
les concurrents répètent surtout coût, expertise, disponibilité, communication
et continuité. Son angle supérieur proposé est de normaliser deux offres,
tester les preuves et publier un TCO 12/36/60.

Ce constat est **historique** : les URLs et extraits n'ont pas été rouverts
pendant la création de ce dossier. La prochaine P1 doit consigner requêtes,
date, pays, captures ou extraits utiles, conflits d'intérêts et critère de
saturation.

### Matrice de gain d'information à reprendre

| Question décisive                    | Réponse actuelle        | Manque hérité                           | Amélioration vérifiable                                          |
| ------------------------------------ | ----------------------- | --------------------------------------- | ---------------------------------------------------------------- |
| Qui travaillera ?                    | quatre bonnes questions | temps réservé et remplaçant non prouvés | matrice nom, rôle, jours/semaine, suppléant et preuve            |
| Que couvre le prix ?                 | fiche de comparaison    | cas fictif non égalisé                  | deux offres complétées avec inconnues et avenants nécessaires    |
| Quel est le coût complet ?           | liste de postes         | aucun total                             | TCO 12/36/60 avec et sans coût de sortie                         |
| Qui livrera à temps ?                | jalons et disponibilité | pas de chemin critique                  | calendrier, charge réservée, dépendances et règle de retard      |
| Qui assure la continuité ?           | actifs à remettre       | pas de test de reprise                  | build, export, restauration ou contrôle par un tiers             |
| Comment comparer la qualité ?        | portfolio et références | protocole absent                        | même tâche, même support, mêmes questions, preuves datées        |
| Que faire si rien n'est comparable ? | atelier court           | livrable et prix flous                  | mini-cahier des charges commun, exclusions et décision de report |

### Recherche encore nécessaire

- Rejouer les requêtes françaises et internationales à la date de reprise.
- Séparer pages commerciales, baromètres déclaratifs et sources primaires.
- Examiner au moins un exemple réel de grille de consultation ou d'achat,
  sans importer de clause étrangère dans un contrat français.
- Vérifier si les pages concurrentes apportent un calcul TCO réellement
  reproductible ou seulement des tableaux de critères.
- Chercher des contre-cas : site très simple, produit critique, prestataire
  individuel avec équipe de relève, agence qui sous-traite tout.
- Documenter la saturation : arrêter quand aucune nouvelle page n'apporte une
  nouvelle décision, preuve, objection, méthode ou ressource.

## 5. Fiche de preuves observées

Les lignes « rapportées vérifiées » proviennent de l'audit daté du
24 juillet 2026. Elles doivent être rouvertes avant toute nouvelle publication.

| Affirmation utilisable                                          | Source visible ou rapportée                                                           | Nature et périmètre                                           | Statut actuel                                     | Conséquence éditoriale                                   |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------- | -------------------------------------------------------- |
| Silkhom analyse plus de 20 000 profils de 2019 à 2025           | `https://www.silkhom.com/barometre-des-tjm-informatique-electronique-digital/`        | baromètre commercial/recrutement IT                           | URL présente dans la page ; audit la dit vérifiée | contexte seulement, jamais budget d'un site              |
| TJMètre indiquait 530 €/jour médian pour développeur/full-stack | `https://tjmetre.fr/barometre`                                                        | agrégation/déclaratif ; dénominateur par spécialité           | URL présente ; chiffre historique à rouvrir       | afficher population exacte et date                       |
| BDM relayait Morgan Philips 2025                                | `https://www.blogdumoderateur.com/freelances-taux-journaliers-moyens-it-france-2025/` | source secondaire, missions et entretiens 2024                | URL présente ; non preuve d'un tarif 2026         | ne pas en déduire un forfait                             |
| Régime micro et franchise TVA sont distincts                    | Service Public F23267 ; economie.gouv.fr TVA                                          | sources publiques françaises, règles volatiles                | URLs présentes ; audit les dit confirmées         | éviter tout seuil non revalidé                           |
| Les droits cédés doivent être délimités                         | Légifrance, CPI L131-3                                                                | texte primaire ; application contractuelle à qualifier        | URL présente                                      | inventorier actif, droit, licence et accès               |
| La loi de 1975 a un champ précis en sous-traitance              | Légifrance, article 3                                                                 | texte primaire ; pas règle générale de transparence technique | URL présente                                      | expliquer la portée ou retirer la généralisation         |
| Core Web Vitals mesure certains aspects de chargement           | Google Search Central                                                                 | documentation primaire internationale                         | URL présente                                      | ne pas transformer les métriques en garantie SEO/qualité |

### Sources concurrentielles historiques

L'audit cite notamment Spread, Toptal, Clutch, Horsfall IT et Website Cost
Calculator AU. Elles peuvent documenter leur propre méthode ou la saturation
des angles, pas établir un prix français, une continuité garantie ou une
supériorité structurelle. Leur réouverture et leur classement par biais restent
une tâche P1.

### Contradictions et données à ne pas publier

- Ne pas créer une « moyenne agence » pour compenser les données freelance :
  cela ajouterait une seconde ancre hétérogène au lieu d'égaliser le cas.
- Ne pas confondre les accroches 9 000/15 000 € avec le scénario
  9 360/14 500 € sans expliquer qu'il s'agit de deux situations.
- Ne pas convertir le temps du dirigeant en économie de trésorerie si ce temps
  n'est ni payé en plus, ni réaffecté, ni réellement évité.
- Ne pas promettre qu'une agence remplace un freelance sans personne,
  disponibilité et accès testés.
- Ne pas attribuer à l'IA un gain de temps global sans protocole sur données,
  droits, revue, tests et retours.

## 6. Calculs et scénarios à reprendre

Les calculs suivants sont des **simulations historiques de l'audit**, pas des
tarifs Hagnéré Code ni des moyennes. Ils doivent être repris dans un support de
calcul indépendant.

```text
Offre freelance affichée : 18 jours × 520 € = 9 360 €
Offre agence affichée : 14 500 €
Écart apparent : 5 140 €

Simulation de création comparable :
  freelance = 9 360 + 2 500 design + 1 800 textes + 900 pilotage = 14 560 €
  agence = 14 500 + 450 poste manquant = 14 950 €

Simulation TCO :
  freelance = 14 560 + 1 800 + 4 320 + 1 620 + 1 500 = 23 800 €
  agence = 14 950 + 1 800 + 7 920 + 810 + 1 500 = 26 980 €
  écart simulé = 3 180 €
```

Avant publication, chaque nombre doit avoir une ligne, une unité, un horizon,
une inclusion et une exclusion. Il faut ajouter au minimum :

- coût initial normalisé ;
- maintenance et support ;
- outils/licences ;
- temps interne avec nature de la valorisation ;
- correction/évolution ;
- coût de sortie avec deux scénarios ;
- sensibilité sur jours, contenus, maintenance et délai ;
- variable qui renverse le verdict.

### Trois contre-cas obligatoires

| Cas                                            | Ce que la page doit pouvoir conclure       | Mesure de décision                                     |
| ---------------------------------------------- | ------------------------------------------ | ------------------------------------------------------ |
| Site simple, contenus prêts, outil standard    | freelance ou solution standard peut gagner | TCO, délai, qualité minimale et sortie                 |
| Projet pluridisciplinaire sans criticité forte | collectif ou agence peut gagner            | personnes nommées, coordination réellement incluse     |
| Application critique ou données sensibles      | le statut ne suffit toujours pas           | sécurité, continuité testée, responsabilité et support |

## 7. Position professionnelle et conversion

```text
Recommandation fréquente : choisir la solution la plus simple qui couvre le
résultat, après normalisation des livrables et des coûts.
Cas où l'option plus chère gagne : elle apporte une différence prouvée de
capacité, spécialité, délai, qualité, support ou risque évité.
Cas où Hagnéré Code doit perdre : besoin standard bien couvert par un freelance
ou un outil, ou projet insuffisamment défini pour signer.
Signal de révision : personne clé remplacée, disponibilité non réservée,
livrables retirés, comptes non transférables, TCO ou délai modifié.
Conflit d'intérêts : Hagnéré Code vend des prestations d'agence ; cette page
doit laisser gagner les autres options.
```

### Ressource autonome

La ressource naturelle n'est pas une copie du guide. C'est une feuille
éditable contenant :

- même périmètre, ligne par ligne ;
- nom, rôle, jours réservés et suppléant ;
- inclus, optionnel, exclu, inconnu ;
- preuve fournie et date ;
- TCO 12/36/60 ;
- garde-fous non compensables ;
- résultat final et raison ;
- conclusion possible « ne pas lancer ».

Le guide pointe actuellement vers le kit général de cahier des charges. Une P1
doit décider s'il faut l'étendre ou créer une grille spécifique sans dupliquer
deux ressources.

### CTA à borner

Le CTA ne peut être validé qu'après avoir fixé :

- documents fournis par le prospect ;
- livrable rendu (par exemple tableau normalisé commenté) ;
- délai indicatif et mode de restitution ;
- prix ou condition explicite de gratuité ;
- limites juridiques, fiscales et techniques ;
- bon fit, mauvais fit et possibilité de recommander un autre prestataire.

## 8. Empreinte humaine et passe anti-IA

### Signaux humains à préserver

- scène crédible des deux devis ;
- phrases qui reconnaissent l'incertitude sans noyer la réponse ;
- exemples déclarés fictifs ;
- opinion qui accepte de perdre la vente ;
- questions que le dirigeant peut poser mot pour mot.

### Risques de prose mécanique

- quatorze parties numérotées qui avancent parfois comme une checklist ;
- répétition de « vérifiez », « demandez », « comparez » sans résultat du cas ;
- tables très symétriques qui remplacent une décision ;
- titres H2/H3 dont la numérotation n'épouse pas la hiérarchie ;
- jargon TCO/TJM/continuité/engagement sans exemple dans la même phrase.

### Test sujet, action, résultat à exécuter en P4

| Formulation abstraite à traquer | Sujet concret            | Action                                             | Résultat attendu                   |
| ------------------------------- | ------------------------ | -------------------------------------------------- | ---------------------------------- |
| « comparer la capacité »        | le dirigeant             | demande les jours réservés et le remplaçant        | voit si le calendrier est crédible |
| « sécuriser la continuité »     | l'entreprise et un tiers | récupèrent puis testent code, export et sauvegarde | peuvent reprendre sans promesse    |
| « calculer le coût complet »    | le lecteur               | additionne coûts et temps sur 12/36/60 mois        | identifie le vrai écart            |
| « vérifier la qualité »         | un utilisateur test      | accomplit la même tâche sur une référence          | obtient une preuve comparable      |
| « préparer la sortie »          | le prestataire           | remet actifs, accès et procédure                   | le changement devient exécutable   |

Le test final doit être conduit par une personne n'ayant pas rédigé la P2 et,
si possible, par un dirigeant réel. À défaut, inscrire honnêtement « test
lecteur humain non réalisé ».

## 9. Registre des défauts hérités

### P0

Aucun P0 constaté dans l'audit historique. Cela n'exonère pas une nouvelle
vérification factuelle et contractuelle.

### P1 à fermer

1. **P1-01** — égaliser les offres 9 360/14 500.
2. **P1-02** — publier un TCO 12/36/60 calculé et sensible.
3. **P1-03** — remettre les baromètres à leur place de contexte.
4. **P1-04** — noter personnes, références, capacité et continuité par preuve.
5. **P1-05** — ajouter sécurité, données, accessibilité, sauvegarde et incident.
6. **P1-06** — définir la relecture de devis proposée.
7. **P1-07** — rejouer les quatre passes avec manifestes stables.

### P2 hérités

- unifier les deux accroches chiffrées ;
- afficher le dénominateur des TJM ;
- traiter l'IA avec données, droits, revue et mesure ;
- préciser la portée de la loi de 1975 ;
- corriger la hiérarchie des titres ;
- produire une grille agence/freelance réellement décisionnelle ;
- ajouter deux contre-cas ;
- recalculer le temps de lecture ;
- vérifier liens, FAQ, JSON-LD, OG, clavier et responsive.

## 10. Prochaines corrections et conditions de sortie

1. **Recherche P1 :** rejouer demande, benchmark et sources ; figer le cas
   commun, les hypothèses et la ressource.
2. **Calculs :** égaliser les deux offres, refaire chaque total dans un support
   indépendant et ajouter l'analyse de sensibilité.
3. **Rédaction P2 :** transformer le cas initial en fil rouge ; réduire les
   listes qui n'affectent pas le verdict ; borner le CTA.
4. **Contre-audit P3 :** autre agent, sources rouvertes, calculs refaits,
   garde-fous testés et suggestions rejetées documentées.
5. **P4 :** cinq phrases abstraites réécrites, test dirigeant, lecture 390 px,
   tableaux, clavier, liens, JSON-LD, image sociale, build et route.
6. **Statut public :** traiter séparément déploiement, robots, sitemap,
   exploration, indexation, trafic et conversion.

**Porte de sortie documentaire :** ce dossier peut guider la reprise, mais il
ne doit pas porter la mention « PASSE 1 TERMINÉE » tant que la recherche
actuelle, la cannibalisation et les sources volatiles n'ont pas été rejouées et
qu'un manifeste P1 stable n'a pas été produit.
