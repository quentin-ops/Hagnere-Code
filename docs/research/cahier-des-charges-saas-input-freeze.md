# Gel d'entrée P1 — cahier des charges SaaS

Date du gel : 2026-08-01

Orchestrateur : `SECONDARY_ORCHESTRATOR_019fb1e0`

Branche : `codex/cahier-des-charges-saas`
Base locale : `203dda78e66d626facc48be2562890c37564278e`

Ce fichier fixe le corpus et les frontières remis à la passe 1. Il ne vaut ni
preuve factuelle, ni validation éditoriale, ni autorisation de publication.

## État canonique constaté

- La page n'existe ni dans le checkout courant ni dans `origin/main`.
- Le slug reste dans `src/lib/legacy-guide-redirects.ts`.
- Le 1er août 2026, l'URL publique répond `308` vers
  `/services/saas-applications-metier`, puis `200`.
- Le registre partagé réserve le sujet 26 à l'orchestrateur secondaire et le
  place en `P1_EN_COURS`.
- La page service possède l'intention transactionnelle. Le guide doit rester
  autonome et peut conclure qu'il faut reprendre le cadrage avant tout devis.

## Source historique récupérable, sans héritage de verdict

Le commit `72169b8f49f8413cfad925863e4e560cd891bee6` contient une ancienne page de
1 037 lignes et son image Open Graph :

- page : SHA-256
  `b577065d8226bcbcbff8e58102f999b03955029d6d94c8ff49b1593a5cc06da0` ;
- image Open Graph : SHA-256
  `3948123360213c5a12c79ff648cada519ae4ddf89d6e39cfd293ac9444464070`.

Le dossier `docs/research/cahier-des-charges-saas.md` conserve aussi un ancien
journal. Ces éléments peuvent fournir des questions, un exemple et des
frontières. Leurs scores, portes, dates de consultation et affirmations ne
constituent pas une preuve pour le nouveau cycle. Toute donnée réutilisée doit
être rouverte, contredite et sourcée à la date de la nouvelle passe.

## Intention et lecteur

Requête principale : `cahier des charges SaaS`.

Lecteur : fondateur, dirigeante ou responsable produit B2B non technique. Le
problème, l'acheteur et le premier parcours vendu sont déjà suffisamment
validés. Le lecteur veut consulter plusieurs prestataires sans leur laisser
inventer des SaaS différents.

Résultat lecteur : produire une trame exploitable qui décrit le même produit,
les mêmes inconnues et les mêmes preuves pour chaque candidat.

Décisions possibles :

1. consulter sur un périmètre comparable ;
2. faire préciser une inconnue avant consultation ;
3. réduire le premier lot ;
4. revenir à la validation de l'idée ou du parcours.

## Propriété éditoriale

Le guide traite la vie d'une entreprise cliente dans un produit vendu à
plusieurs organisations :

- création de l'organisation et premier administrateur ;
- invitation, rôles, portées, refus et révocation ;
- parcours qui justifie l'abonnement ;
- offre, droits associés et états de facturation ;
- échecs, régularisation, remboursement ou traitement manuel ;
- administration, support, incidents et exploitation ;
- données, accès du support, conservation et sous-traitants ;
- sauvegarde et restauration prouvée ;
- accessibilité et exigences non fonctionnelles testables ;
- export, résiliation, suppression et réversibilité ;
- responsabilités, hypothèses, exclusions et critères d'acceptation.

Le guide ne doit pas choisir une architecture, un fournisseur de paiement, une
stratégie fiscale, un prix, un délai, un niveau de service ou une conformité
universelle à la place du lecteur.

## Frontières de cannibalisation

- `/guides/valider-idee-saas-avant-developper` : prouve le problème,
  l'acheteur, l'accès et l'engagement avant de spécifier.
- `/guides/droits-acces-application-metier` : approfondit la matrice de droits ;
  le présent guide n'en reprend que le minimum nécessaire au produit SaaS.
- `/services/saas-applications-metier` : présente l'offre commerciale ; le
  guide fournit d'abord la méthode et la trame autonome.
- Les anciens guides encore redirigés ne doivent pas recevoir de liens qui
  promettent une page éditoriale absente.

## Artefact obligatoire

Créer une trame SaaS locale dans le navigateur :

- aucune donnée envoyée, aucun stockage implicite ;
- aucun téléchargement XLS, XLSX ou CSV ;
- sortie lisible et copiable en Markdown ou texte ;
- les champs inconnus restent visibles comme `À décider` ou `STOP`, sans
  valeurs inventées ;
- un exemple entièrement fictif peut être chargé séparément ;
- réinitialisation, clavier, mobile et thèmes clair/sombre testés ;
- aucun score global qui compense un manque bloquant ;
- l'outil doit distinguer au minimum décision, responsable, preuve
  d'acceptation, exclusion et inconnue bloquante.

Le guide doit aussi montrer un exemple rempli de bout en bout. L'ancien cas
`DossierClair` peut être conservé seulement s'il reste explicitement fictif et
si ses chiffres sont présentés comme hypothèses de consultation, jamais comme
normes.

## Sources à rouvrir et contredire

Utiliser des sources primaires ou officielles actuelles, au voisinage exact des
affirmations :

- CNIL : gestion des utilisateurs, sécurité, sauvegardes, minimisation,
  conservation et sous-traitance ;
- OWASP : autorisation et version courante d'ASVS ;
- documentation officielle d'un prestataire de paiement uniquement comme
  illustration des états d'abonnement, sans l'imposer ;
- W3C : WCAG 2.2 et critères testables ;
- textes et pages officielles de l'Union européenne pour toute affirmation sur
  le Data Act ou la portabilité ;
- Légifrance pour les droits d'auteur ou la cession, si ce point est conservé.

Vérifier les limites et supprimer toute affirmation dont la portée n'est pas
défendable. Aucun résultat concurrent, volume SEO, taux, seuil ou promesse de
classement ne doit être inventé.

## Contraintes de production P1

- Recréer la page pour l'architecture actuelle avec `GuidePremiumLayout`.
- Prévoir trois images éditoriales WebP dédiées et visibles, pas seulement une
  image sociale dynamique.
- Limiter les données structurées à ce que la page prouve réellement :
  `Article` et `BreadcrumbList`, sans `FAQPage`, `HowTo`, `Offer`, `Review` ni
  note agrégée.
- Créer des tests déterministes pour le moteur de la trame.
- Ne modifier aucun fichier partagé : registre central des guides, redirections,
  hub, sitemap, `llms.txt`, configuration ou dépendances restent à
  l'orchestrateur.
- Ne pas exécuter `git add`, `git commit`, `git push` ou une publication.
- Documenter les sources rouvertes, les contradictions, les inconnues, les
  contrôles et le manifeste P1 dans le dossier de recherche.

## Porte G1 attendue

La passe 1 doit livrer un contenu complet et autonome, pas un plan à compléter :

- page, trame locale, tests, image sociale et visuels éditoriaux ;
- journal de recherche recréé et daté ;
- frontières de cannibalisation explicites ;
- faits sensibles reliés à leurs sources et limites ;
- exemple rempli, responsabilités et critères d'acceptation ;
- mauvais fits et branches `STOP` visibles ;
- manifeste P1 couvrant tous les fichiers propres au slug.

La sortie attendue de l'agent est `GO_PASSE_2` ou `NO_GO_PASSE_2` avec les
défauts classés. L'orchestrateur reste seul responsable de la porte G1.
