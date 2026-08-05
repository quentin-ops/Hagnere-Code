# Gel d’entrée — guide #32 `bubble-ou-saas-sur-mesure`

Date du gel : **5 août 2026**
Passe : **P1 — recherche, architecture et première implémentation**
Responsable de passe : **`bubble_saas_p1` (agent distinct)**
Propriétaire de coordination : **`SECONDARY_ORCHESTRATOR_019fb1e0`**

## 1. Snapshot Git et périmètre

- worktree :
  `/Users/quentinhagnere/Developpement/Hagnere-Code-wt-bubble-ou-saas-sur-mesure` ;
- branche : `codex/bubble-ou-saas-sur-mesure` ;
- HEAD d’entrée : `41c7672061598e5a4659c14d12e4a4fbe9132b08` ;
- état initial : propre avant la création du présent gel ;
- registre de coordination relu : guide #32 réservé atomiquement ;
- le verrou permanent du slug reste géré par l’orchestrateur dans le worktree
  de coordination ; aucun verrou ni registre ne sera modifié ici ;
- aucun `git add`, commit, push, merge, rebase ou déploiement n’est autorisé
  pendant cette passe.

Périmètre d’écriture fermé :

1. `docs/research/bubble-ou-saas-sur-mesure-input-freeze.md` ;
2. `docs/research/bubble-ou-saas-sur-mesure.md` ;
3. `docs/research/manifests/bubble-ou-saas-sur-mesure-p1.sha256` ;
4. `src/app/guides/bubble-ou-saas-sur-mesure/page.tsx` ;
5. `src/app/guides/bubble-ou-saas-sur-mesure/opengraph-image.tsx` ;
6. `src/app/guides/bubble-ou-saas-sur-mesure/content-quality.test.ts` ;
7. au plus trois SVG originaux dans
   `public/guides/bubble-ou-saas-sur-mesure/`.

Le manifeste P1 couvrira exactement les fichiers finaux utiles au lecteur :
le dossier, la page, l’image Open Graph, le test et les éventuels SVG. Le
présent gel et le manifeste lui-même sont exclus afin d’éviter une référence
circulaire.

## 2. Gouvernance applicable

La passe applique intégralement, dans leur ordre de priorité :

- `CLAUDE.md` et sa règle zéro invention ;
- `docs/regle-or-vigilance-seo-publication.md` ;
- `docs/charte-qualite-guides.md` ;
- `docs/workflow-maitre-guides-4-passes.md` ;
- `docs/instructions-guide-de-qualite.md` ;
- la roadmap et le registre de coordination ;
- `docs/research/_modele-guide.md` ;
- le prompt maître du second orchestrateur et l’intention des quatre DOCX.

Sont neutralisés : quotas de mots, de titres, de liens, de FAQ ou de CTA,
densité de mot-clé, faux persona ou faux client, promesse de classement,
`FAQPage`/`HowTo` par défaut, prix ou délai inventé et téléchargement
XLS/XLSX/CSV non demandé.

## 3. Inventaire de l’état hérité

- aucun dossier `docs/research/bubble-ou-saas-sur-mesure.md` n’existe au HEAD
  d’entrée ;
- aucune route, image Open Graph ni page historique de ce slug n’a été trouvée
  dans l’historique Git accessible ;
- `src/lib/guides.ts` ne référence pas encore ce guide ;
- la roadmap #32 demande de comparer Bubble et une base de code dédiée selon
  le coût total, les performances, le recrutement et la réversibilité ;
- les pages internes proches sont le service SaaS, les guides sur le cadrage,
  le périmètre du MVP, le choix agence/freelance, le prototype/POC et la
  priorisation ; elles servent à borner l’intention, jamais à fournir le plan ;
- Hagnéré Code vend du développement sur mesure : ce conflit d’intérêt doit
  rester visible dans la méthode de comparaison et le verdict ne doit pas être
  automatiquement favorable au code dédié.

## 4. Contrat P1 gelé

Décision principale : permettre à un dirigeant non technique de déterminer si
son prochain produit ou outil doit rester sur Bubble, démarrer sur Bubble,
passer sur une base de code dédiée ou être simplifié/reporté.

Frontières obligatoires :

- dater et sourcer sur les pages officielles Bubble toute offre, limite,
  fonction, tarification, capacité, hébergement ou mécanisme de sortie ;
- ne pas transformer un incident, un témoignage communautaire ou un benchmark
  isolé en limite universelle de Bubble ;
- ne pas promettre qu’une base de code dédiée sera moins chère, plus rapide ou
  plus performante sans hypothèses mesurables ;
- distinguer coût initial, abonnement et charge de travail, intégrations,
  maintenance, observabilité, sécurité, migration, recrutement et coût de
  sortie ; signaler les postes susceptibles de se recouvrir ;
- séparer export des données, export du code, reprise des workflows,
  documentation, propriété intellectuelle et continuité d’exploitation ;
- comparer à conditions égales : besoin métier, trafic, données, rôles,
  intégrations, exigences de conformité, délai d’apprentissage et horizon ;
- montrer les cas où Bubble est rationnel, les cas hybrides et les cas où une
  base dédiée devient défendable ; inclure l’outil existant, le report et la
  simplification comme options ;
- tout scénario chiffré est un **exemple illustratif**, avec formule,
  hypothèses éditables, contrôle inverse et inconnues visibles ;
- proposer une action autonome utile, sans imposer de contact commercial ;
- FAQ visible sans schéma `FAQPage` ou `HowTo` ;
- CTA tardif vers `/demarrer-un-projet`, avec bon fit, mauvais fit et résultat
  attendu après clic explicites.

## 5. STOPs d’entrée

- les prix, quotas, noms de plans et règles de capacité Bubble sont volatils :
  aucune valeur ne peut être publiée sans contrôle officiel daté au 5 août
  2026 ;
- les performances réelles dépendent de l’application, des requêtes, des
  plugins, des données et de la charge : aucune hiérarchie universelle ne sera
  affirmée ;
- la résidence des données, les sous-traitants, la conformité et les options
  d’hébergement doivent être qualifiés par offre et document officiel actuel ;
- aucun devis Hagnéré Code, coût moyen de migration, délai moyen, gain client
  ou taux de réussite n’est disponible comme preuve publiable ;
- aucune validation par un dirigeant extérieur n’est disponible en P1 ;
- les metadata canoniques, dates, hub, sitemap, `llms.txt`, maillage entrant,
  redirects et autres fichiers partagés restent hors périmètre jusqu’à une
  fenêtre d’intégration explicite ;
- la future `datePublished` ne sera jamais inventée : elle reste un STOP avant
  toute publication réelle.
