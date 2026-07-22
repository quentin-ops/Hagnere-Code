# Gel final — lot de dix guides du 22 juillet 2026

## Périmètre

Ce gel couvre les dix guides suivants, produits successivement avec le
workflow maître en quatre passes :

1. `preparer-contenus-site-vitrine` ;
2. `remplacer-microsoft-access-application-web` ;
3. `budget-google-ads-pme` ;
4. `cahier-des-charges-saas` ;
5. `choisir-prestataire-application-metier` ;
6. `reprendre-saas-developpe-par-freelance` ;
7. `cout-maintenance-application-metier` ;
8. `pourquoi-site-pas-visible-google` ;
9. `suivi-conversions-google-ads` ;
10. `landing-page-google-ads`.

Chaque guide dispose de son dossier de recherche, de ses rapports P1 à P4,
de ses empreintes de contrôle, d'une page publique et d'une image Open Graph
dédiée. Les outils interactifs des guides Budget Google Ads, visibilité SEO,
suivi des conversions et landing page restent locaux au navigateur et sont
couverts par des tests unitaires.

## Décision éditoriale

Le lot est jugé publiable. Le dernier contre-audit à froid conclut à
**0 défaut P0 et 0 défaut P1** après correction des derniers écarts de langue,
de destination de CTA et d'espacement JSX.

Le contrôle a notamment vérifié que les dix textes :

- s'adressent d'abord à un dirigeant ou à un indépendant, sans exiger de
  vocabulaire technique préalable ;
- donnent le problème concret, la réponse courte et la décision possible dès
  l'ouverture ;
- traduisent les termes spécialisés lorsqu'ils deviennent utiles ;
- distinguent clairement les faits sourcés, les hypothèses et les exemples
  fictifs ;
- présentent les coûts oubliés, les alternatives et la possibilité de ne rien
  acheter ;
- utilisent un CTA contextualisé, sans faux témoignage ni résultat garanti ;
- conservent une architecture propre au problème traité, plutôt qu'un plan
  mécaniquement dupliqué.

## Contrôles techniques rejoués après les dernières corrections

- `npm test` : **71 fichiers et 409 tests réussis** ;
- `npm run lint` : réussi ;
- `npx tsc --noEmit` : réussi ;
- build Next.js avec `NEXT_PUBLIC_ENV=production` : réussi ;
- contrôle SEO préalable au build : **184/184 tests réussis** ;
- génération : **114 pages statiques** ;
- artefact d'indexation : **98 URL dans le sitemap, 81 liens dans `llms.txt`,
  56 temps de lecture et 184 blocs JSON-LD contrôlés**.

## Contrôle du rendu réel

Les dix pages ont été ouvertes dans le navigateur sur le build de production
local avec une largeur de 390 px. Pour chacune :

- aucun débordement horizontal ;
- exactement un H1 ;
- aucune ancre locale cassée ;
- aucun identifiant HTML dupliqué ;
- canonical absolue correspondant à l'URL publique ;
- directive `index, follow` ;
- données structurées `Article` et `BreadcrumbList`, sans `FAQPage` ni
  `HowTo` artificiel.

La FAQ maintenance corrigée a aussi été ouverte réellement dans le navigateur
afin de vérifier la phrase affichée, et non seulement son code source.

## Limite honnête

Ce gel autorise la mise en ligne et rend les pages explorables. Il ne constitue
ni une preuve d'indexation immédiate par Google, ni une promesse de classement.
La découverte, l'indexation, les impressions, les clics et les demandes devront
être suivis séparément après publication.
