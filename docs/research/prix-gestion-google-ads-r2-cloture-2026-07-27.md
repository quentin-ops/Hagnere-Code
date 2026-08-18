# Clôture R2 — `prix-gestion-google-ads`

Date : **27 juillet 2026**  
Périmètre : guide, recherche, calculs, calculateur local, grille CSV, parcours
commercial contextualisé, SEO, build et rendu navigateur local

## 1. Verdict

```text
Audit initial technique : 68/100 — NO-GO
Audit initial UX/pédagogie : 79/100 — NO-GO
Audit initial faits/économie : 82/100 — NO-GO

Contre-audit final faits/économie : 97/100 — GO
Contre-audit final technique : 98/100 — GO
Contre-audit final UX/pédagogie : 95/100 — GO

Note finale conservatrice : 97/100
P0 ouverts : 0
P1 ouverts : 0
P2 de confort : 1 — endurance d’une lecture mobile de 27 minutes
Décision : GO premium local
```

La note ne promet ni première place Google, ni publication, ni déploiement, ni
indexation. Elle qualifie le snapshot local contrôlé. Le P2 restant décrit la
longueur intrinsèque d’un guide de fond : le rendu reste utilisable, sans
débordement, avec sommaire et sections ancrées.

## 2. Valeur livrée au lecteur

Le guide permet désormais de :

- distinguer budget ou plafond configuré, dépense prévue, dépense réellement
  facturée, assiette contractuelle et part de dépense surtaxée ;
- séparer neuf lignes de coût au lieu d’annoncer un faux prix « complet » ;
- choisir entre lancement, test borné, audit préalable et attente ;
- lire cinq prix publics français datés sans les transformer en moyenne ;
- exploiter cinq benchmarks étrangers pour leurs méthodes de devis, sans
  conversion abusive en « marché mondial » ;
- comparer forfait, pourcentage et hybride avec quinze champs locaux ;
- rejouer trois niveaux du même cas sur 3, 6 et 12 mois ;
- dériver un CPL maximal depuis la marge, puis distinguer CPC, CPL, CPA et CAC ;
- télécharger une grille de 27 questions sans formulaire ;
- vérifier propriété du compte, conversions, données commerciales, durée,
  préavis, sorties et inconnues avant signature.

## 3. Corrections rouvertes par les contre-audits

Le premier contre-audit final a refusé le GO pour deux erreurs factuelles et une
erreur de parcours :

1. le budget configuré était parfois assimilé à une dépense certaine ;
2. CPC, CPA et CAC n’étaient pas employés de manière cohérente ;
3. le formulaire Ads affichait à tort « Audit technique est présélectionné ».

La fermeture comprend :

- un moteur séparant `monthlyMediaSpend`,
  `percentageFeeBasisMonthly` et
  `surchargeEligibleSpendShareRate` ;
- une surcharge calculée seulement sur la part déclarée comme concernée ;
- des scénarios explicitement bornés par l’hypothèse « budget intégralement
  dépensé, diffusion France à 100 % » ;
- un CPC fondé sur les clics et la dépense réelle, un CPA réservé à l’action
  configurée et un CAC réservé au nouveau client réel ;
- la formule explicite du seuil lorsque surcharge et honoraires variables
  portent sur la même dépense, avec réserve pour minimum, plafond et palier ;
- des croisements tarifaires titrés « théoriques » ;
- un avertissement placé avant le badge du total le plus bas ;
- un libellé de contexte CTA dynamique : « Publicité / tracking » pour Ads et
  « Audit technique » pour le guide de reprise.

Le test contradictoire indépendant est conforme :

```text
Dépense média : 4 000 €
Assiette des honoraires : 6 000 €
Part soumise à la surcharge : 25 %
Surcharge : 2 %

Surcharge calculée : 20 €
Honoraires à 15 % : 900 €
Hybride 500 € + 10 % : 1 100 €
```

## 4. Calculs de référence

Les trois niveaux du même commerce local fictif restent exacts sous leurs
hypothèses publiées :

| Niveau | Ponctuel renseigné | Mensuel renseigné | 3 mois | 6 mois | 12 mois |
| --- | ---: | ---: | ---: | ---: | ---: |
| Essentiel | 2 903,60 € | 1 150,40 € | 6 354,80 € | 9 806,00 € | 16 708,40 € |
| Central | 3 742,00 € | 1 810,60 € | 9 173,80 € | 14 605,60 € | 25 469,20 € |
| Exigeant | 6 307,20 € | 3 301,00 € | 16 210,20 € | 26 113,20 € | 45 919,20 € |

Le cas de seuil central conserve :

```text
Marge attendue par prospect : 480 €
Coûts hors dépense média et surcharge : 80 € / prospect
Enveloppe dépense + surcharge maximale : 400 € / prospect
Dépense avant surcharge France de 2 % : 392,16 € / prospect
Dépense retenue pour 15 prospects : 5 882,35 €
Surcharge : 117,65 €
Contrôle total : 7 200 €
```

## 5. Tests, build et artefacts

```text
Tests propres au guide : 23/23
Tests ciblés avec langage humain et parcours projet : 61/61
TypeScript : conforme
ESLint ciblé : conforme
git diff --check : conforme
Build Next.js de production : réussi
Pages statiques générées : 159/159
BUILD_ID : RttQG__3bRSX89jTvVnaK
Guide : HTTP 200
Grille CSV : HTTP 200, text/csv
Formulaire contextualisé : HTTP 200
Image sociale : HTTP 200, PNG 1200 × 630
Texte réellement servi : 5 419 mots
Temps de lecture publié : 27 minutes
```

La batterie SEO élargie obtient **726/727**. L’unique échec concerne
l’empreinte P4 historique de `prioriser-fonctionnalites-mvp-saas` sur le
fichier partagé `src/lib/guides.ts` :

```text
attendu : 8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09
observé : 91c912c27a3d0555d2f13ea7591ae391d22463d566e55cfd55bdae704f9cce27
```

Cet écart est extérieur au guide Google Ads et existait avant sa clôture. Le
manifeste historique n’a pas été réécrit pour obtenir artificiellement un vert.

## 6. BAT navigateur

Le build final a été contrôlé à :

```text
320, 360, 390, 430, 640, 768, 1024, 1280, 1440 et 1600 px
```

À chaque largeur :

- aucun débordement horizontal ;
- aucun paragraphe éditorial centré ;
- H1, chapô et corps alignés à gauche ;
- quinze champs du calculateur présents et contenus dans la fenêtre ;
- tableaux transformés en cartes lisibles sur mobile.

Contrôles fonctionnels :

- dépense portée seule à 10 000 € :
  `70 934 / 70 034 / 71 534 €` ;
- assiette portée ensuite à 10 000 € :
  `70 934 / 74 534 / 74 534 €` ;
- part surtaxée ramenée à 25 % :
  `70 034 / 73 634 / 73 634 €` ;
- restauration de l’exemple :
  dépense `5 000`, assiette `5 000`, part surtaxée `100` ;
- CSV réellement téléchargeable ;
- CTA Ads vers
  `/demarrer-un-projet?service=ads&source=guide-prix-gestion-google-ads` ;
- message visible « Publicité / tracking est présélectionné » ;
- seul le bouton « Publicité / tracking » porte `aria-pressed="true"`.

L’audit axe automatisé ne remonte aucune violation à 320 et 1280 px. Le
contrôle de contraste reste classé « incomplete » par axe sur les fonds
composites et a donc été complété par inspection visuelle en thèmes clair et
sombre ; ceci ne constitue pas une certification d’accessibilité. La console
navigateur ne contient ni erreur ni avertissement.

## 7. Sources et benchmark mondial

Les mécanismes ont été contrôlés dans la documentation Google Ads : budgets
quotidiens et totaux, surcharges par juridiction, qualité, classement,
conversions, Gestionnaire de données, accès, propriété et historique. Le coût
horaire Insee est publié avec son champ exact et n’est pas présenté comme un
tarif universel.

Le benchmark commercial relit des pages françaises ainsi que des pratiques
américaines, britanniques, canadiennes, allemandes et australiennes. Les prix
propres des prestataires ne deviennent ni une statistique, ni une moyenne de
marché. Les apports étrangers servent à améliorer les questions de devis :
assiette, cadence, minimum, plafond, temps, propriété, passation et sortie.

## 8. État de publication

```text
Commit : non réalisé
Push : non réalisé
Déploiement : non réalisé
Production publique : non vérifiée
Indexation : non vérifiée
```

Le verdict est donc **GO premium local**, pas une preuve de mise en ligne. Le
dossier R1 conserve la recherche et le gel initial ; le présent document est le
reçu de clôture du snapshot final.

## 9. Guide suivant

La boucle doit reprendre guide par guide, sans paralléliser plusieurs
réécritures. Le prochain candidat sera choisi après lecture de son état actuel,
de sa valeur commerciale, de son risque factuel et de ses preuves déjà
présentes ; aucun enrichissement ne doit commencer avant ce nouveau gel.
