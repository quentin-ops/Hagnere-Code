# Gel d’entrée — guide #33 `lovable-bolt-v0-ou-agence-saas`

Date du gel : **5 août 2026**
Passe : **P1 — recherche actuelle, architecture et création complète**
Responsable de passe : **`lovable_saas_p1` (agent distinct)**
Propriétaire de coordination : **`SECONDARY_ORCHESTRATOR_019fb1e0`**

## 1. Snapshot Git et périmètre

- worktree :
  `/Users/quentinhagnere/Developpement/Hagnere-Code-wt-lovable-bolt-v0-ou-agence-saas` ;
- branche : `codex/lovable-bolt-v0-ou-agence-saas` ;
- HEAD d’entrée : `5f305b0cc6566c093b86a7234b64c0b5291eaeb4` ;
- état initial : propre avant la création du présent gel ;
- registre de coordination : guide #33 réservé atomiquement ;
- verrou permanent du slug présent dans le worktree de coordination ;
- `integration.lock` et `registry.lock` absents après la création du worktree ;
- aucun `git add`, commit, push, merge, rebase, déploiement ou changement de
  fichier partagé n’est autorisé pendant P1.

Périmètre d’écriture fermé :

1. `docs/research/lovable-bolt-v0-ou-agence-saas-input-freeze.md` ;
2. `docs/research/lovable-bolt-v0-ou-agence-saas.md` ;
3. `docs/research/manifests/lovable-bolt-v0-ou-agence-saas-p1.sha256` ;
4. `src/app/guides/lovable-bolt-v0-ou-agence-saas/page.tsx` ;
5. `src/app/guides/lovable-bolt-v0-ou-agence-saas/opengraph-image.tsx` ;
6. `src/app/guides/lovable-bolt-v0-ou-agence-saas/content-quality.test.ts` ;
7. au plus trois SVG originaux sous
   `public/guides/lovable-bolt-v0-ou-agence-saas/`.

Le manifeste P1 couvrira les artefacts finaux utiles au lecteur : dossier,
page, image Open Graph, test et SVG. Le gel et le manifeste lui-même resteront
exclus afin d’éviter une référence circulaire.

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

Sont neutralisés : quotas mécaniques, densité de mot-clé, faux persona ou faux
client, classement d’outil non testé, benchmark inventé, promesse de délai,
coût, sécurité, conformité, performance ou indexation, schémas `FAQPage` et
`HowTo`, et téléchargement XLS/XLSX/CSV non demandé.

## 3. État hérité à ne pas recycler

Le reset éditorial a supprimé la route et l’a placée dans
`src/lib/legacy-guide-redirects.ts`. Le registre central ne contient plus le
slug. Seuls subsistent un dossier et quatre manifestes historiques datés des
23–24 juillet 2026 : ils servent à identifier risques, sources et
cannibalisation, jamais de base rédactionnelle à conserver.

Empreintes de l’héritage au gel :

| Artefact                | SHA-256                                                            |
| ----------------------- | ------------------------------------------------------------------ |
| dossier historique      | `9688b3bf847056c9f7e9e7a77e79410339b2ae4173a1d14c2579c9f64d2f72dd` |
| manifeste P1 historique | `56de55d0688f66c67b46f836fb07479ff246daf2f130825fcee7ab8776168b2c` |
| manifeste P2 historique | `5afc0f7c2c927d4e785ac7049cf69fe0eaae9d435d3b249b9b0d8140c70763a6` |
| manifeste P3 historique | `f150f5d3eaa961ecbd264166fbcec0e80cd040ef48bb475e39cc9ced7aef8f5c` |
| manifeste P4 historique | `8083d8171751dd11eb2a07b4e72013281c4db21edb8f59a3f40e731c3ba35755` |

Toute mention historique de statut « publiable », d’autorisation de
publication, de tests, de build ou de rendu est caduque pour le nouveau
snapshot. Elle ne constitue aucune preuve courante.

## 4. Contrat P1 gelé

Décision principale : permettre à un porteur de SaaS non technique de choisir
entre un prototype autonome avec Lovable, Bolt ou v0, une revue professionnelle,
une construction accompagnée ou le report, selon la preuve à obtenir et les
responsabilités réelles du produit.

Frontières obligatoires :

- distinguer outil de génération, dépôt de code, services connectés,
  déploiement, données, comptes, domaine et exploitation ;
- comparer les trois produits uniquement sur des fonctions officielles
  actuelles et datées, jamais par un palmarès universel ;
- expliquer que Lovable, Bolt et v0 n’ont ni le même périmètre ni le même
  modèle de projet ; ne pas les traiter comme trois produits identiques ;
- dater et sourcer toute offre, crédit, limite, droit, export, hébergement,
  intégration, scan de sécurité ou règle d’accès ;
- ne jamais présenter un scan intégré, un déploiement réussi ou un beau rendu
  comme preuve suffisante de sécurité, conformité ou exploitabilité ;
- comparer un même scénario fictif, sans donnée réelle, selon des preuves
  reproductibles : propriété des comptes, récupération du code, séparation de
  deux utilisateurs, export et restauration, secrets, erreur, retour arrière,
  exploitation et reprise ;
- distinguer récupération du code, export des données, restauration complète,
  migration des comptes et reprise opérationnelle ;
- montrer les bons fits, mauvais fits et critères d’arrêt de l’autonomie comme
  de l’agence ; Hagnéré Code vend une prestation et ce conflit d’intérêt doit
  être neutralisé par la méthode ;
- inclure les sorties « simplifier » et « ne pas construire maintenant » ;
- tout chiffre ou scénario est fictif et clairement signalé, avec formule,
  unités, hypothèses éditables et contrôle inverse ;
- proposer une action autonome utile avant un CTA tardif et loyal vers
  `/demarrer-un-projet` ;
- FAQ visible sans schéma `FAQPage` ou `HowTo`.

## 5. Cannibalisation à contrôler

- `mvp-prototype-ou-poc` choisit le type de test à construire ;
- `mvp-saas-quoi-inclure` fixe le socle opérationnel minimal ;
- `bubble-ou-saas-sur-mesure` compare une plateforme précise et du code dédié ;
- `agence-saas-ou-freelance` choisit une forme de prestataire une fois le
  recours professionnel décidé ;
- `reprendre-mvp-vibe-code` part d’un prototype déjà existant et audite sa
  reprise ;
- le service SaaS reste commercial, tandis que ce guide doit pouvoir conclure
  « prototypez seul », « simplifiez » ou « reportez ».

Le guide #33 choisit le **mode de construction avant le premier produit** et
le niveau de responsabilité à acheter. Il ne duplique ni un tutoriel outil, ni
un audit de reprise, ni une matrice générique no-code/sur-mesure.

## 6. STOPs d’entrée

- les produits, plans, crédits, fonctions, architectures et documentations des
  trois éditeurs sont volatils : réouverture des sources primaires obligatoire
  au 5 août 2026 ;
- aucune recherche de juillet 2026 ne prouve l’état actuel d’une fonction ;
- aucune affirmation juridique sur propriété, licence, RGPD ou responsabilité
  ne sera extrapolée au-delà des conditions officielles et de leur périmètre ;
- aucun résultat de benchmark ne sera publié sans protocole réellement exécuté ;
- aucun coût moyen, délai moyen, gain client, taux de réussite ou capacité
  universelle n’est disponible comme preuve ;
- aucune validation par un lecteur humain extérieur n’est disponible ;
- dates éditoriales, registre central, hub, sitemap, `llms.txt`, redirection et
  maillage entrant restent hors périmètre jusqu’à l’intégration autorisée ;
- la future `datePublished` ne sera jamais inventée et reste un STOP avant
  toute publication réelle.
