# Gel final — lot de cinq guides du 22 juillet 2026

## Périmètre

Ce gel couvre les cinq guides suivants, produits successivement avec le
workflow maître en quatre passes :

1. `application-gestion-interventions-terrain` ;
2. `agence-saas-ou-freelance` ;
3. `reprendre-maintenance-site-autre-agence` ;
4. `choisir-agence-google-ads` ;
5. `choisir-agence-seo`.

Chaque guide possède un dossier de recherche, quatre rapports de passe, quatre
manifestes de contrôle, une page publique, une image Open Graph dédiée et au
moins un lien entrant contextuel depuis un guide déjà publié.

## Décision éditoriale

Le lot est jugé publiable. Après correction puis relecture des mêmes passages,
les contre-audits indépendants concluent à **0 défaut P0, 0 défaut P1 et 0
défaut P2**.

Les contrôles ont notamment vérifié que les cinq guides :

- partent de la question qu'un dirigeant se pose réellement ;
- donnent une réponse courte avant d'approfondir ;
- expliquent les termes techniques au moment où ils deviennent utiles ;
- conduisent à une décision concrète, y compris corriger seul, choisir une
  solution moins coûteuse ou reporter le projet ;
- distinguent les faits sourcés, les recommandations et les exemples fictifs ;
- abordent les risques, les coûts oubliés, la propriété des comptes et la
  réversibilité quand le sujet l'exige ;
- utilisent une progression et des formats propres au problème traité, sans
  recopier un plan reconnaissable ;
- proposent un appel à l'action contextualisé, sans résultat ni délai garanti.

Le hub a également été corrigé : les guides Google Ads, SEO, comparaison de
prestataires, outils métier et maintenance apparaissent dans des collections
cohérentes, avec des icônes dédiées. Une collection « Maintenance et reprise »
a été ajoutée afin de ne pas masquer ce besoin derrière une catégorie voisine.

## Contrôles techniques rejoués après les dernières corrections

- contrôle SEO préalable au build : **33 fichiers et 185 tests réussis** ;
- suite complète : **71 fichiers et 410 tests réussis** ;
- ESLint ciblé sur tous les fichiers touchés : réussi ;
- `npx tsc --noEmit` : réussi ;
- build Next.js avec `NEXT_PUBLIC_ENV=production` : réussi ;
- génération : **119 pages statiques** ;
- artefact d'indexation : **103 URL dans le sitemap, 86 liens dans `llms.txt`,
  103 pages, 61 temps de lecture et 194 blocs JSON-LD contrôlés**.

## Contrôle du rendu réel

Les cinq pages et le hub `/guides` sont contrôlés sur le build de production
local aux largeurs utiles de 320, 390, 767, 769, 1 024 et 1 440 px. Le contrôle
porte sur le débordement horizontal, le H1, les ancres, le CTA principal, la
place de chaque guide dans sa collection, les métadonnées, les données
structurées, l'image Open Graph et la console du navigateur.

Résultat : aucun débordement horizontal, aucune ancre cassée, aucun identifiant
dupliqué et aucune erreur de console. Chaque guide expose une canonical absolue,
la directive `index, follow` et uniquement les schémas `Article` et
`BreadcrumbList`. Les cinq images Open Graph mesurent 1 200 × 630 px.

## Limite honnête

Ce gel autorise la mise en ligne et rend les pages explorables. Il ne constitue
ni une preuve d'indexation immédiate par Google, ni une promesse de classement.
La découverte, l'indexation, les impressions, les clics et les demandes devront
être suivis séparément après publication.
