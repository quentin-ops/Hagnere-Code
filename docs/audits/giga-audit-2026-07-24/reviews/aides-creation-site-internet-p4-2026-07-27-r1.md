# Contre-audit P4 final — `aides-creation-site-internet`

Date : **27 juillet 2026**  
Révision : **R1**  
Snapshot final : **P3 R35**  
Périmètre : guide, tri local, export texte, responsive et build local de
production

## 1. Verdict exécutif

**Verdict P4 local : GO pour revue humaine.**

```text
Score strict axe faits, moteur et export : 95/100
Score strict axe UX et produit : 95/100
P0 ouverts : 0
P1 ouverts : 0
P2 ouverts : 0
Décision : prêt pour revue humaine, maintenu hors index
```

Ce verdict ne signifie ni validation humaine externe, ni publication, ni
commit, ni push, ni déploiement, ni disponibilité en production, ni indexation.
Il ne promet aucun classement Google.

## 2. Intégrité du gel R35

```text
Manifeste :
docs/research/manifests/aides-creation-site-internet-p3-2026-07-27-r35.sha256

SHA-256 :
fca17d2898c8369fe0690119929909f65acb4a8465ea9a85ebaf904e11f7d744

Auditeur faits : 98/98 au début et à la fin
Auditeur UX : 98/98 au début et à la fin
```

Les deux auditeurs ont travaillé en lecture seule et n’ont modifié ni fichier,
ni rapport, ni cache du projet.

## 3. Deux contre-audits indépendants

### Axe faits, moteur et export

Le premier auditeur a rendu **95/100 — GO**, avec
`P0 : 0 ; P1 : 0 ; P2 : 0`.

Il a rejoué :

- les huit combinaisons d’engagement, viabilité et trésorerie adverses au stade
  payé ;
- les bornes de 2 milliards d’euros pour la facture et le coût économique ;
- la borne de 121 milliards d’euros pour l’attente ;
- onze entrées négatives, non finies ou hors limites ;
- toute l’union des régressions R33 et R34 ;
- 53/53 tests cœur sur trois fichiers.

Chaque scénario payé valide atteint `paid-to-reconcile`, sans blocage ou
avertissement prévisionnel. Le TXT marque ordre des actes, viabilité avec 0 €
et trésorerie avant paiement comme « Sans objet pour cet état ». Les agrégats
valides restent imprimables, tandis que les entrées brutes invalides restent
bloquées.

### Axe UX et produit

Le second auditeur a rendu **95/100**, avec
`P0 : 0 ; P1 : 0 ; P2 : 0`, après inspection indépendante du code, du rendu
serveur, des métadonnées, de la purge, des états et de l’export.

Son backend navigateur n’était plus disponible pour rejouer R35. Il a donc
borné honnêtement son GO au contrôle statique et demandé un BAT réel séparé.
La condition a été levée par le BAT final décrit ci-dessous. Les preuves de
R34 non rejouées n’ont pas été présentées comme de nouvelles observations.

## 4. BAT navigateur réel R35

### Parcours payé

Le parcours a été exécuté sur le build local servi :

```text
devis HT : 10 000 €
TVA totale : 1 265 €
TVA récupérable : nulle
engagement avant passage payé : interdit avant décision
viabilité avant passage payé : non
trésorerie avant passage payé : inconnue
notification : 1 650 €
paiement : 1 200 €
```

Après le passage à `paid` :

- assiette, taux, plafond, délai, marge, frais, viabilité et trésorerie
  disparaissent ;
- le retour à l’étape 1 ne montre plus le champ d’engagement ;
- le message explique que l’engagement n’est plus une porte prévisionnelle ;
- le verdict est « rapprochez les trois pièces » ;
- facture TTC : **11 265 €** ;
- aide théorique et coût d’attente : **sans objet au stade payé** ;
- aide au budget : **1 650 €** ;
- paiement documenté : **1 200 €** ;
- aucun ancien montant de 2 700 € n’est réintroduit.

### Parcours prêt ou garantie

Le choix « prêt, avance remboursable ou garantie » masque tous les champs de
subvention. La deuxième étape indique explicitement que cet instrument sort du
calcul. La décision finale conserve :

```text
Subvention au budget : 0 €
Calculs de subvention : Sans objet
```

Aucun ancien champ chiffré n’est lu, affiché ou exporté comme actif.

### Focus, thèmes et console

- chaque changement d’étape replace le focus sur le H3 correspondant ;
- le thème clair est rendu en fond blanc et texte sombre ;
- le thème sombre est rendu en fond sombre et texte clair ;
- le retour au thème clair fonctionne ;
- aucune erreur ni alerte n’est présente dans la console.

### Responsive

Le parcours payé a été contrôlé sans overflow aux largeurs CSS suivantes :

```text
320, 360, 390, 430, 640, 1024, 1280, 1440 et 1600 px
```

Le navigateur de recette applique un facteur d’échelle de `0,8` qui ne permet
pas d’obtenir exactement 768 px avec une largeur physique entière. Le
breakpoint a donc été encadré à **767 et 769 px**, sans overflow dans les deux
cas. Le BAT R34 avait déjà contrôlé 768 px exactement ; R35 ne modifie que le
masquage et la purge de champs dans ce même composant.

À chaque largeur stabilisée, largeur du document et largeur de la fenêtre sont
égales à un pixel près au maximum.

## 5. Build et contrôles automatisés

```text
Tests cœur : 53/53
Batterie élargie : 119/119
TypeScript : conforme
ESLint ciblé : conforme
git diff --check ciblé : conforme
Build Next.js : réussi
Pages statiques générées : 159/159
Route locale : HTTP 200
Contenu servi : 6 889 mots / 34 min
Version du moteur : site-aid-quick-check-r4-2026-07-27
```

Le rendu local contient :

- un title cohérent ;
- un H1 unique ;
- la canonical
  `https://hagnere-code.ai/guides/aides-creation-site-internet` ;
- un schéma `Article` ;
- un schéma `BreadcrumbList`.

Le `noindex, nofollow` observé est celui du serveur local.

## 6. Défauts globaux hors périmètre

La suite SEO globale reste à **491/492**. L’unique échec est l’ancien hash P4
de `prioriser-fonctionnalites-mvp-saas` sur `src/lib/guides.ts`.

Le vérificateur du build conserve deux écarts de temps de lecture sur :

- `crm-sur-mesure-ou-hubspot` ;
- `seo-local-pme`.

Ils ne visent pas ce guide et ne sont ni masqués ni présentés comme résolus.

## 7. État de publication

**GO P4 local pour revue humaine.** Le guide reste
`ready-for-human-review`, `noindex, nofollow` en local, sans commit, push,
déploiement, publication ni indexation.
