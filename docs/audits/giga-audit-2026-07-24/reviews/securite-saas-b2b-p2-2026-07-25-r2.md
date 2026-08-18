# Rapport P2 R2 — `securite-saas-b2b`

Date : **25 juillet 2026**  
Éditeur unique : `/root`  
Étape suivante : deux contre-audits P3 indépendants sur le manifeste P2 R2  
Statut maximal : **brouillon complet prêt pour contre-audit**

## 1. Statut exact

```text
Score P2 auto-attribué : aucun
Recherche internationale : terminée et intégrée de façon sélective
P3 indépendant : non réalisé
P4 navigateur, impression et plume humaine : non réalisés
Build final de production : non réalisé
Statut éditorial : ready-for-human-review
Robots attendus : noindex, nofollow
Commit / push / déploiement / publication / indexation : non réalisés
```

Ce rapport remplace P2 R1 comme seule base autoritaire du futur contre-audit.
Il ne constitue ni une autorisation de publication, ni une preuve de
production, ni une promesse de classement Google.

## 2. Incident R1 et chaîne de preuve

Le manifeste R1 a été retiré avant transmission aux relecteurs. Il n'a donc
reçu aucun verdict P3. Les deux fichiers R1 restent immuables :

```text
Rapport R1 :
docs/audits/giga-audit-2026-07-24/reviews/securite-saas-b2b-p2-2026-07-25-r1.md

Manifeste R1 :
docs/research/manifests/securite-saas-b2b-p2-2026-07-25-r1.sha256

SHA-256 du manifeste R1 :
17a827713fbe9dbb352c16ebd6d547b1c0aee60325e191e430ecbdeeea3a77f5
```

Un audit à froid a découvert trois bloqueurs et trois défauts pédagogiques
après ce premier gel. R2 les corrige sans réécrire le reçu historique.

## 3. Bloqueurs corrigés

### `SEC-R2-P1-01` — obligation applicable confondue avec assurance formelle

La valeur unique `legal-or-formal` mélangeait deux situations :

- une obligation légale ou sectorielle applicable ;
- une certification, un audit ou un rapport indépendant exigé.

Dans un cas adversarial complet, une obligation déclarée applicable, absente
et non critique pouvait recevoir une mesure temporaire, un financement et deux
accords, puis aboutir à `sign-with-conditions`. L'atelier risquait ainsi de
transformer des saisies contractuelles en décision de report juridique.

Correction :

- deux natures distinctes : `applicable-obligation` et
  `independent-assurance` ;
- une obligation applicable ne peut jamais recevoir
  `condition-after-signature` dans l'interface ;
- le moteur émet `non-reportable-obligation` si un état importé ou ancien
  conserve cette combinaison ;
- il refuse aussi la contradiction « obligation applicable » et « non
  applicable » avec `applicable-obligation-dismissed` ;
- la page et l'export expliquent que l'atelier ne décide pas de la
  reportabilité : qualification compétente, satisfaction avant signature ou
  renégociation/refus.

### `SEC-R2-P1-02` — exigence indispensable écartée unilatéralement

La sixième famille autorisait le cas suivant :

```text
importance : indispensable avant signature
état : non applicable
décision : conserver dans l'état
```

Avec une pièce interne complète, le moteur pouvait conclure
`sign-on-scope`, sans accord de l'acheteur. R2 :

- retire « non applicable » de l'interface dès que l'exigence est critique ;
- émet `critical-requirement-dismissed` pour tout état importé ou ancien qui
  conserve cette contradiction ;
- laisse possible une décision explicite de renégociation ou refus, sous
  réserve d'un dossier cohérent.

Le cas non critique, précisément justifié et prouvé sur le périmètre exact,
reste possible.

### `SEC-R2-P1-03` — collision de la pseudo-marque fictive

Le nom pédagogique « Nordexia » correspond à une entreprise réelle. Le
[registre officiel norvégien](https://virksomhet.brreg.no/en/oppslag/enheter/921023359)
affiche `NORDEXIA AS`, numéro d'organisation `921 023 359`. Associer ce nom à
des contrôles absents ou partiels créait un risque de confusion inutile, même
avec la mention « fictif ».

Toutes les occurrences actives sont remplacées par :

```text
EXEMPLE-SAAS-FICTIF-01
Entreprise A — service documentaire entièrement fictif
```

Aucune pseudo-marque n'est désormais utilisée.

## 4. Corrections pédagogiques P2

### `SEC-R2-P2-01` — la sixième famille n'est pas « optionnelle »

La sixième famille est décrite comme toute autre exigence produit,
contractuelle, sectorielle ou d'assurance. Elle peut être critique ; le fait de
la traiter dans un dossier distinct ne la rend pas optionnelle. Les exigences
hétérogènes conservent des exports séparés et le verdict le plus restrictif.

### `SEC-R2-P2-02` — lire les compléments ISO sans collectionner des numéros

Le guide distingue désormais :

- ISO/IEC 27017:2015 pour les contrôles et responsabilités cloud ;
- ISO/IEC 27018:2025 pour les informations personnelles dans un cloud public
  lorsque le fournisseur agit comme sous-traitant ;
- ISO/IEC 27701:2025 pour le système de management de la protection de la vie
  privée.

La page précise que leur simple mention ne prouve ni leur inclusion dans un
périmètre certifié, ni leur mise en œuvre sur le SaaS vendu, ni la conformité
au RGPD. Elle date aussi l'incertitude : la deuxième édition d'ISO/IEC 27017
est encore indiquée sous publication par l'ISO au 25 juillet 2026.

### `SEC-R2-P2-03` — français plus direct

Les formulations `checklist`, `services de reporting` et `créer du cash` ont
été remplacées par `liste de contrôle`, `services de rapport et d'assurance`
et une formulation honnête sur l'économie réellement obtenue.

## 5. Tests adversariaux ajoutés

Les nouveaux scénarios reproduisent exactement :

1. une obligation applicable absente, avec tous les garde-fous contractuels,
   qui ne doit jamais produire `sign-with-conditions` ;
2. une obligation décrite simultanément comme applicable et non applicable ;
3. une autre exigence déclarée indispensable, puis écartée comme non
   applicable, qui ne doit jamais produire `sign-on-scope` ;
4. la disparition dans l'interface du plan après signature pour une obligation
   applicable ;
5. la disparition de « non applicable » pour une autre exigence critique ;
6. le remplacement complet de la pseudo-marque dans l'exemple chargé.

## 6. Contrôles exécutés avant gel

```text
Tests sécurité dédiés : 64/64 sur 4 fichiers
Suite ciblée sans le reçu partagé obsolète : 106/106 sur 8 fichiers
TypeScript : conforme
ESLint ciblé : conforme
Formatage Prettier ciblé : conforme
git diff --check ciblé : conforme
Texte rendu hors atelier : 6 287 mots, 31 min
```

La suite élargie à neuf fichiers obtient `106 réussites / 107` : son unique
échec vient du reçu P4 historique de
`prioriser-fonctionnalites-mvp-saas`, dont l'empreinte attendue de
`src/lib/guides.ts` est devenue obsolète. Ce défaut partagé et étranger au
guide sécurité est conservé visible ; il n'est ni corrigé ni présenté comme
une réussite de R2.

## 7. Ce que P2 R2 ne prouve toujours pas

R2 n'a pas vérifié :

- le rendu réel aux dix largeurs ;
- les thèmes clair et sombre ;
- le parcours clavier physique ;
- le téléchargement, l'effacement et l'impression dans un navigateur réel ;
- l'image sociale rendue à 1 200 × 630 ;
- le build et le HTML d'un serveur de production local ;
- la route publique, le sitemap ou l'indexation ;
- l'absence de défaut P0, P1 ou P2 selon deux relecteurs indépendants.

Ces points appartiennent à P3 puis P4.

## 8. Porte suivante

**Remise P2 R2 : prête pour deux contre-audits indépendants sur le manifeste
gelé, sans note et sans autorisation de publication.**
