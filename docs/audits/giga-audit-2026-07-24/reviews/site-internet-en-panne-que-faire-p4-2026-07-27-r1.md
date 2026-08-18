# Contre-audit P4 R1 — `site-internet-en-panne-que-faire`

Date : **27 juillet 2026**  
Révision finale : **R3**  
Périmètre : guide, recherche internationale, fiche hors ligne, moteur local,
interface, tests, build local, rendu navigateur et impression

## 1. Verdict exécutif

```text
Score historique du registre : 84/100
Score initial indépendant le plus strict : 64/100
Score final conservateur : 99/100
Audit faits/cyber final : 99/100
Audit pédagogie/UX final : 99/100
Audit technique final ciblé : 100/100
P0 ouverts : 0
P1 ouverts : 0
P2 ouverts : 0
Décision : GO premium opérationnel local
```

La page n’est plus une liste de causes possibles. Elle devient un protocole de
crise destiné à un dirigeant ou coordinateur non spécialiste : protéger les
traces, passer la porte cyber, qualifier les faits, joindre la bonne personne,
maintenir un service dégradé, restaurer proprement et interdire la clôture tant
que les preuves métier manquent.

Cette note mesure la qualité du snapshot local, sa pédagogie, sa traçabilité et
sa résistance aux scénarios adversariaux. Elle ne promet ni première position
Google, ni publication, ni déploiement, ni indexation.

## 2. Progression vérifiable

| Mesure | Avant la refonte | Snapshot final |
| --- | ---: | ---: |
| Note historique | 84/100 | 99/100 |
| Audit UX indépendant | 82/100 | 99/100 |
| Audit faits/cyber indépendant | 67/100 | 99/100 |
| Audit technique indépendant | 64/100 | 100/100 ciblé |
| P1 ouverts | 10 au registre | 0 |
| Mots visibles hors outil | non normalisé | 6 372 |
| Temps de lecture déclaré | 16 min avant reprise | 31 min, mesure rendue ~32 min |
| Carte d’urgence | absente | 110 mots, immédiatement après le hero |
| Couches de diagnostic | causes narratives | local, DNS/TLS, CDN/origine, application, données, tiers, cyber |
| Chronologie | conseils généraux | 0–5, 5–15, 15–60 min, 1–4 h, 4–24 h, J+1/J+7/J+30 |
| Reprise | page d’accueil et fonctions | dix portes de reprise à preuve datée |
| Fiche hors ligne | absente | page réflexe autonome + quinze annexes |
| Dossier local | absent | routeur, RTO/RPO/SLA, coût, preuves, copie, TXT et A4 |
| Tests dédiés | aucun contrat comparable | 73/73 |

Le temps déclaré reste dans la tolérance automatisée d’une minute. Le dossier
interactif et son rapport sont exclus de la mesure éditoriale afin de ne pas
gonfler artificiellement le temps de lecture.

## 3. Réponse finale donnée au lecteur

Le lecteur dispose désormais :

- d’une carte d’urgence réellement accessible en trente secondes ;
- des interdits immédiats avant toute modification ;
- des signaux imposant l’arrêt des essais actifs et une escalade cyber ;
- d’un ticket express factuel sans diagnostic inventé ;
- d’un routeur par symptôme, couche, preuve et interlocuteur ;
- d’une chronologie 0–5–15–60 minutes puis J+1/J+7/J+30 ;
- d’un journal, d’un canal hors bande et de cinq états de communication ;
- des rôles respectifs du mainteneur, de l’hébergeur, du registrar, du
  prestataire tiers, de la compétence cyber, de la direction et du métier ;
- d’une chaîne CNIL bornée et non automatisée ;
- des différences entre RTO, RPO et SLA ;
- d’une stratégie fix, rollback, bascule, restauration et rapprochement ;
- de dix portes de reprise ;
- d’une formule prudente de coût direct et d’un exemple fictif ;
- d’une fiche texte utilisable hors ligne ;
- d’un dossier local à copier, télécharger ou imprimer après relecture.

Le CTA commercial est explicitement exclu du chemin d’urgence. Le guide
n’encourage jamais à attendre une réponse commerciale pendant un incident
actif.

## 4. Benchmark mondial adapté

La recherche R1 croise des sources françaises et internationales :

- CERT-FR, ANSSI, 17Cyber et les CSIRT territoriaux pour l’escalade et la
  préservation ;
- CNIL pour la continuité, la sauvegarde, la traçabilité et les violations de
  données ;
- NIST pour RTO, RPO et le cadre de réponse à incident ;
- NCSC britannique pour la reprise PME et le principe de systèmes et données
  propres ;
- CISA pour la reprise après ransomware et la conservation des preuves ;
- Google Search Central pour une indisponibilité temporaire ;
- Cloudflare pour la limite d’interprétation des erreurs 502/504 ;
- Stripe pour les webhooks dupliqués ou désordonnés ;
- Afnic pour la distinction domaine, registrar et DNS.

Les apports étrangers sont présentés comme pratiques techniques, jamais comme
droit français. Les pages fournisseur servent à documenter leur propre
comportement, pas à établir une vérité universelle.

## 5. Dossier et moteur fail-closed

Le moteur `website-incident-dossier-r1-2026-07-27` :

- refuse de déduire une cause racine d’un HTTP 502 ;
- donne priorité à la branche cyber ;
- conserve toute inconnue à `ND` ;
- exige des heures ISO cohérentes avec le fuseau IANA ;
- sépare RTO, RPO et SLA ;
- calcule le coût direct au centime ou renvoie `ND` ;
- empêche le double comptage productivité/coordination ;
- applique dix preuves propres aux dix portes ;
- interdit un `N/A` incompatible avec le profil ;
- exige un parcours métier critique explicite ;
- borne les preuves entre l’incident, la reprise, l’observation et la
  clôture ;
- exige une levée cyber au plus tôt au rétablissement technique ;
- borne une consultation fournisseur entre premier échec et clôture ;
- masque plusieurs formes usuelles de secrets sans promettre une expurgation
  parfaite ;
- impose une relecture humaine avant export ;
- utilise un nom de fichier statique sans référence utilisateur ;
- produit un rapport français avec les codes techniques en second niveau.

La page avertit que les champs libres ne sont pas interprétés. Une personne
reste responsable des choix structurés, de l’escalade et de la décision de
clôture.

## 6. Défauts découverts par les boucles froides

### R1 — 86 à 92/100, NO-GO

Malgré 59 tests dédiés verts, les auditeurs ont reproduit :

1. dix preuves antérieures à la panne pouvant fermer l’incident ;
2. un parcours métier vide compatible avec une porte réussie ;
3. un export annoncé comme expurgé laissant passer des secrets usuels ;
4. une fiche exigeant à tort un webhook unique et ordonné ;
5. un CTA mobile contournant la porte cyber ;
6. des erreurs seulement comptées, sans aide au champ ;
7. une modale et un PDF insuffisamment accessibles ;
8. un calcul limite perdant un centime.

Ces défauts ont tous été corrigés avant le gel suivant.

### R2 — 91/100, NO-GO

Le second audit a encore trouvé un faux vert :

```text
compromission confirmée
détection : 08:45
levée cyber : 08:46
acquittement : 08:50
mitigation : 09:05
rétablissement : 10:12
ancien résultat : clôture autorisée
```

La levée était seulement comparée à la détection. Elle est désormais comparée
au rétablissement technique ; le même scénario rend la porte `unknown` et
interdit la clôture.

Le R2 a également fermé :

- le statut fournisseur vieux d’un an ou postérieur à la clôture ;
- la référence sensible injectée dans le nom du TXT ;
- les types de preuve seulement affichés sous forme de codes ;
- le champ parcours critique sans retour ARIA ;
- la coupure papier du bloc webhooks.

### R3 — GO

Les trois contrôles finaux attribuent **99/100, 99/100 et 100/100**. Aucun
nouveau P0, P1 ou P2 reproductible ne reste ouvert.

## 7. Contrôles automatisés

```text
Tests dédiés finaux : 73/73
Fichiers de tests dédiés : 3/3
Tests SEO globaux : 616/617
TypeScript : conforme
ESLint ciblé : conforme
git diff --check ciblé : conforme
Build Next.js de production : réussi
Pages statiques générées : 159/159
```

L’unique test global en échec ne vise pas ce guide. Il s’agit de l’empreinte P4
historique de `prioriser-fonctionnalites-mvp-saas` sur le fichier partagé
`src/lib/guides.ts`. Aucun ancien manifeste n’a été réécrit pour masquer cet
écart.

Le vérificateur post-build conserve deux écarts de temps de lecture hors
périmètre :

- `crm-sur-mesure-ou-hubspot` ;
- `seo-local-pme`.

Le guide traité passe son contrôle de temps de lecture.

## 8. Artefact, liens et métadonnées

Le build contient la route statique :

```text
/guides/site-internet-en-panne-que-faire
```

Le rendu servi depuis ce build a confirmé :

```text
HTTP : 200
H1 : 1
Carte d’urgence : 1
Dossier local : 1
Mots visibles hors dossier : 6 372
Temps de lecture mesuré : environ 32 min
Titre, description et canonical : conformes
```

Les 22 URL contrôlées dans la page et la fiche hors ligne ont répondu en HTTP
2xx lors du contre-audit final. Les trois sources critiques CNIL, NCSC et
Stripe ont été revérifiées séparément.

## 9. BAT navigateur

Le build exact a été contrôlé dans Headless Chrome aux largeurs CSS :

```text
320, 360, 390, 430, 640, 768, 1024, 1280, 1440 et 1600 px
```

À chaque largeur :

- largeur du document égale à celle de la fenêtre ;
- aucun débordement horizontal global ;
- hero, carte d’urgence et outil lisibles ;
- aucune erreur console ;
- aucune requête échouée.

Le parcours interactif a confirmé :

- le fail-closed initial avec dix portes bloquantes ;
- le chargement du cas fictif ;
- RTO et RPO respectés dans ce cas fictif ;
- le coût prudent à 1 032,50 € ;
- le refus d’une preuve limitée à la page d’accueil ;
- la réouverture immédiate de la clôture après ce refus ;
- la confirmation de relecture avant export ;
- la modale d’effacement, sa boucle de focus, Échap et la restitution du
  focus ;
- l’absence de violation Axe sérieuse ou critique.

## 10. Impression

Le dossier fictif a été imprimé puis rendu en images.

```text
Format : A4
Pages : 3
Corps : 10 pt
Interligne : 1,20
PDF balisé : oui
Chiffrement : non
JavaScript embarqué : non
```

Le bloc webhooks reste entier sur la deuxième page. Aucun texte tronqué,
chevauchement, quatrième page orpheline ou contrôle interactif parasite n’a
été observé.

## 11. Empreintes du snapshot éditorial

```text
092b44788c75478a49b8967f2cdbbae32a5a1990dd49097b5c244d17ce360614  page.tsx
1e47f739ba84ac9e1dfc0a795328c14e7dccd5d8b58319b56f33cf6e2ab28438  opengraph-image.tsx
df2be344e4546e1a6ed8e6aa97aa257fb8df721bb2dc1599e18b7839a0117158  guides.ts
47c2ce68133ce49075cebf91b21a3f04dea3cf04b139f951fc66722fe357c715  recherche R1
6ade646939bf15855e6c34becece2feb0cf172be0544b9cfae11c23ce7976a7d  fiche hors ligne
efadd1dbf0c2b8dac20f9aa714a03eb3a700a4dbadd0c98244fb8d8d8e365803  moteur
6feb92dcf226b6d33f40d6edb8b726ed7ab2531e9269c3cb20a458d6a628b384  tests moteur
90a571fd58d2706064247e48a9bb111761dca249331be25340c2550cb9b43c31  composant
6feb27ca4a9e7ec5092254b433954484b2626c0f2bfb40707b4b31d1efc5158e  tests composant
f1828bd241222d1031e2afde84d0b5d586e5fcdcf7372a3fb1e63d67a88f071e  contrat qualité
```

## 12. État de publication

**GO premium opérationnel local pour revue humaine finale.**

Le snapshot a été modifié, testé, construit, servi et imprimé localement.
Aucun commit, push, déploiement, contrôle de l’URL publique ou constat
d’indexation Google n’a été effectué dans cette boucle.
