# Rapport P2 R1 — `cout-maintenance-site-internet`

Date : **25 juillet 2026**  
Éditeur P2 : `/root/rn_flutter_r3_final`  
Périmètre : page, image sociale, entrée de registre, moteur de décision,
composant interactif et tests dédiés  
Base : recherche P1 R2 vérifiée **7/7** avant rédaction  
Étape suivante : contre-audit P3 indépendant

## Statut exact

La rédaction et l'intégration P2 sont terminées sur ce snapshot. Les
**12 P1** et **3 P2** du contre-audit froid ont reçu une correction
identifiable dans la page, l'outil ou les tests. Ce constat est un reçu
d'exécution, pas une note indépendante.

```text
Score P2 auto-attribué : aucun
P3 : non réalisée
P4 navigateur et plume humaine : non réalisées
Build de production : non réalisé
Commit / push / déploiement / indexation : non réalisés
Statut éditorial : ready-for-human-review
Robots rendus localement : noindex, nofollow
```

La page ne doit donc pas être déclarée publiable à partir de ce rapport. Le
contre-auditeur P3 doit repartir du manifeste P2 R1 et rouvrir tout défaut
résiduel.

## 1. Fichiers produits ou modifiés

- `src/app/guides/cout-maintenance-site-internet/page.tsx` : réécriture
  éditoriale ;
- `src/app/guides/cout-maintenance-site-internet/opengraph-image.tsx` : image
  sociale centrée sur même besoin, incident, TCO et reprise ;
- `src/lib/guides.ts` : entrée exacte du slug, date, temps de lecture et porte
  éditoriale ;
- `src/lib/website-maintenance-decision.ts` : moteur pur ;
- `src/lib/website-maintenance-decision.test.ts` : calculs et invariants ;
- `src/components/guides/WebsiteMaintenanceDecisionDossier.tsx` : dossier
  local à deux offres ;
- `src/components/guides/WebsiteMaintenanceDecisionDossier.test.tsx` :
  interactions, accessibilité, copie, impression et remise à zéro ;
- `src/lib/website-maintenance-guide-quality.test.ts` : contrat éditorial,
  SEO, sources, nombres et frontières commerciales ;
- ce rapport ;
- `docs/research/manifests/cout-maintenance-site-internet-p2-2026-07-25-r1.sha256`.

## 2. Fermeture traçable du contre-audit froid

| ID    | Correction P2 intégrée                                                                                                                                           | Contrôle                                                                                                                                   |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| P1-01 | l'ouverture classe vitrine, boutique et service critique avant tout prix ; l'observation `29–499 €` est reléguée en section 12                                   | test du lead sous 150 mots ; l'OG ne reprend aucun prix                                                                                    |
| P1-02 | même besoin commun, deux dossiers séparés et neuf portes Pass / Fail / ND avec preuve obligatoire                                                                | un statut sans pièce redevient ND ; un Fail étayé élimine                                                                                  |
| P1-03 | trois scénarios fictifs avec annuel, TCO 12/36, formules, inclus, exclus et variables de bascule                                                                 | totaux exacts testés : `5 620 / 14 260`, `33 570 / 92 110`, `155 800 / 413 400 €`                                                          |
| P1-04 | formule d'incident complète, exemple fictif sans client et sensibilités 2/6/12 h à 180 et 750 €/h                                                                | `2 370 €` central et six résultats reproduits par test                                                                                     |
| P1-05 | point de reprise et temps de reprise traduits, chaîne de restauration, point réellement restauré et reprise propre après compromission                           | sources NIST, ANSSI et CISA liées près des faits ; porte distincte de reprise propre                                                       |
| P1-06 | détection, accusé humain, intervention, contournement, rétablissement et correction définitive ; sévérité, horaires, période, exclusions, réclamation et plafond | conversions `99,9 / 99,99 %` sur 30 et 365 jours intégrées                                                                                 |
| P1-07 | interne, freelance avec relais, agence et TMA comparés sur le même cas central                                                                                   | annuels et TCO 12/36 exacts testés pour les quatre modes                                                                                   |
| P1-08 | sources primaires placées près des affirmations ; vendeurs marqués comme observations commerciales datées                                                        | ISO, ANSSI, NIST, CISA, GOV.UK, NCSC, WordPress, Next.js, Vercel, W3C, Google et CNIL couverts par test                                    |
| P1-09 | registre composants, licences, fin de support, changements, comptes, secrets et sortie hostile                                                                   | coût inconnu = ND ; reprise par tiers, second administrateur et rotation des secrets visibles                                              |
| P1-10 | dossier local, copiable et imprimable avec incident commun, neuf portes et dix lignes TCO pour chacune des deux offres                                           | cas complet, partiel, invalide, remise à zéro et échec de copie testés ; aucun `undefined`, `NaN` ou `Infinity` exporté                    |
| P1-11 | conflit d'intérêts, bon fit, mauvais fit et option de ne pas souscrire ; un seul CTA                                                                             | destination `/demarrer-un-projet`, environ trois minutes, pré-cadrage et réponse gratuits, objectif non garanti, devis ferme après échange |
| P1-12 | `editorialStatus: "ready-for-human-review"` et `robots: guideRobots(guide)`                                                                                      | HTML local : `noindex, nofollow` ; le catalogue public dérive de `PUBLISHED_GUIDES`                                                        |
| P2-01 | la fourchette non démontrée `2 à 4 heures par mois` a été retirée                                                                                                | temps interne demandé et chiffré dans le TCO ; zéro seulement s'il est explicitement saisi                                                 |
| P2-02 | le renvoi fragile vers une mauvaise section a disparu ; les anciennes ancres restent présentes                                                                   | onze ancres historiques contrôlées par test                                                                                                |
| P2-03 | tableau après décision : parcours, restauration, incidents, support, dette, contenu, responsable et signal de révision                                           | événements de révision et audit autonome en 45–60 minutes intégrés                                                                         |

## 3. Corrections issues de la contre-vérification mondiale

La P2 n'a pas repris les anciens totaux TCO invalidés. Elle utilise uniquement
le modèle P1 principal testé.

- disponibilité calculée sur **30 et 365 jours**, avec source, fenêtre,
  exclusions, réclamation, crédit et plafond à écrire ;
- incident séparé du TCO ; seule une réserve **résiduelle** propre à l'offre
  peut être saisie une fois ;
- restauration courante séparée de la reconstruction saine après
  compromission ;
- sortie testée même lorsque le mainteneur est absent ou compromis ;
- sources fraîches qualifiées : ANSSI v1.1 du 27 novembre 2025, NIST
  SP 800-34 Rev. 1, NCSC revu le 24 novembre 2025, statut Next.js vérifié le
  25 juillet 2026 puis signalé comme volatil ;
- vocabulaire corrigé en **quatre familles et six lignes budgétaires** ;
- version, licence, fin de support et migration probable incluses ou laissées
  ND.

Le benchmark commercial français, américain, britannique, allemand, canadien
et australien reste un repérage d'angles. Aucun prix étranger n'est transposé
au marché français et aucune page vendeuse ne sert de preuve de qualité
effective.

## 4. Invariants du moteur et du dossier

### Qualification

- deux offres conservent des états totalement indépendants ;
- neuf portes ont trois états : Pass, Fail ou ND ;
- Pass ou Fail sans texte de preuve devient effectivement ND ;
- un Fail prouvé élimine l'offre ;
- une inconnue sans Fail laisse l'offre non qualifiée ;
- le prix ne classe que des offres qualifiées.

### Incident

```text
6 × 180 + 0 + 900 + 250 + (2 × 4 × 35 × 50 %) - 0
= 2 370 €
```

Une valeur absente, négative, non finie, un pourcentage supérieur à 100 ou une
compensation supérieure au coût brut bloque le résultat. Un zéro explicite
reste un zéro connu.

### TCO

Les dix postes sont obligatoires pour chaque offre :

1. transition initiale ;
2. préventif et adaptations annuels ;
3. capacité corrective annuelle ;
4. opérations de service annuelles ;
5. contenu et assurance annuels ;
6. évolutions planifiées annuelles ;
7. coordination interne annuelle ;
8. hébergement, licences et fin de support ;
9. réserve d'incident résiduel annuelle ;
10. sortie et reprise.

Le total à 12 ou 36 mois reste ND dès qu'un poste est absent ou invalide.
L'incident commun n'est jamais ajouté automatiquement. Pour l'exemple agence,
le TCO sans incident vaut `30 900 / 84 100 €`. Une réserve annuelle explicite
de `2 370 €` donne `33 270 / 91 210 €`, soit une seule occurrence par année.

### Données et restitution

- aucun appel réseau ;
- saisies conservées seulement dans l'onglet ;
- export texte neutre avec besoin commun, toutes les hypothèses, toutes les
  preuves, les deux TCO et les règles de décision ;
- rapport imprimé seul, contrôles et article masqués à l'impression ;
- composant entier exclu du temps de lecture ;
- remise à zéro protégée par une confirmation intégrée accessible, sans
  `window.confirm` ;
- échec de copie orienté vers l'impression, sans instruction de sélection
  impossible.

## 5. SEO, contenu visible et rendu local mécanique

```text
URL locale : HTTP 200
H1 : 1
canonical : https://hagnere-code.ai/guides/cout-maintenance-site-internet
robots : noindex, nofollow
JSON-LD visibles dans le DOM : 2
types : Article + BreadcrumbList
FAQPage / HowTo / Offer / wordCount : absents
title : 53 caractères
meta description : dans la borne 120–155 caractères
temps de lecture officiel : 3 684 mots / 200 = 18 min après arrondi
image sociale déclarée : 1 200 × 630
```

Le chargement local et le comptage du DOM ne sont pas une validation
responsive, clavier, clair/sombre, zoom, impression physique ou cadrage de
l'image sociale. Ces contrôles restent à exécuter en P4 sur le snapshot que P3
aura accepté.

## 6. Contrôles exécutés

### Suite ciblée conforme

```text
src/lib/website-maintenance-decision.test.ts                 11 tests
src/components/guides/WebsiteMaintenanceDecisionDossier...   8 tests
src/lib/website-maintenance-guide-quality.test.ts            12 tests
src/lib/guides.test.ts                                       conforme
src/lib/structured-data.test.ts                              conforme

Total groupé : 45/45 tests
TypeScript : npx tsc --noEmit — conforme
ESLint ciblé : 8 fichiers — conforme
```

### Suite éditoriale globale

Les garde-fous propres à ce guide passent. La suite globale
`guide-human-language.test.ts` conserve quatre échecs hors de ce périmètre :

- `react-native-ou-flutter` contient encore une expression du cadre rejeté ;
- `securite-saas-b2b` contient du vocabulaire consultant dans son lead ;
- `securite-saas-b2b` contient ce vocabulaire dans un titre ;
- `securite-saas-b2b` possède encore un tableau éditorial à quatre colonnes.

`editorial-governance.test.ts` conserve deux échecs externes : empreinte
partagée `src/lib/guides.ts` d'un ancien manifeste P4 et recherche
`securite-saas-b2b` encore en cours. Ces six échecs ne sont pas masqués et
n'autorisent aucune déclaration de suite globale verte.

## 7. Limites et remise au P3

Le contre-auditeur doit au minimum :

1. vérifier le manifeste P2 R1 ;
2. refaire tous les calculs sans réutiliser les tests comme unique preuve ;
3. essayer de qualifier une offre moins chère mais incomplète ;
4. injecter valeurs manquantes, négatives, non finies et compensation
   impossible ;
5. contrôler que l'observation `29–499 €` ne redevient jamais la réponse
   principale ;
6. confronter les promesses du CTA à la route actuelle ;
7. rechercher les doubles comptes entre capacité corrective, incident et
   réserve ;
8. rouvrir les sources produit volatiles ;
9. vérifier qu'aucun verdict universel WordPress, Next.js, freelance, agence
   ou TMA n'est formulé ;
10. produire son propre registre P0/P1/P2 et son propre verdict.

**Remise P2 R1 : prête pour contre-audit indépendant, sans note ni autorisation
de publication.**
