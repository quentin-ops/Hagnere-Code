# Gel d’entrée — guide #31 `mvp-prototype-ou-poc`

Date du gel : **4 août 2026**
Passe : **P1 — recherche, architecture et première implémentation**
Responsable de passe : **`mvp_poc_p1` (agent distinct)**
Propriétaire de coordination : **`SECONDARY_ORCHESTRATOR_019fb1e0`**

## 1. Snapshot Git et périmètre

- worktree : `/Users/quentinhagnere/Developpement/Hagnere-Code-wt-mvp-prototype-ou-poc` ;
- branche : `codex/mvp-prototype-ou-poc` ;
- HEAD d’entrée : `d4a7fb58b44e46314156e60cd580c45a4224021d` ;
- état initial : propre ;
- registre de coordination relu : guide #31 en `P1_EN_COURS` ;
- le verrou du slug reste géré par l’orchestrateur dans le worktree de
  coordination ; aucun verrou ni registre ne sera modifié ici ;
- aucun `git add`, commit, push, merge, rebase ou déploiement n’est autorisé
  pendant cette passe.

Périmètre d’écriture fermé :

1. `docs/research/mvp-prototype-ou-poc-input-freeze.md` ;
2. `docs/research/mvp-prototype-ou-poc.md` ;
3. `docs/research/manifests/mvp-prototype-ou-poc-p1.sha256` ;
4. `src/app/guides/mvp-prototype-ou-poc/page.tsx` ;
5. `src/app/guides/mvp-prototype-ou-poc/opengraph-image.tsx` ;
6. `src/app/guides/mvp-prototype-ou-poc/content-quality.test.ts` ;
7. au plus trois SVG originaux dans `public/guides/mvp-prototype-ou-poc/`.

Le manifeste P1 couvrira exactement les sept fichiers finaux suivants : le
dossier, la page, l’image Open Graph, le test et les trois SVG. Le présent gel
et le manifeste lui-même seront exclus pour éviter une référence circulaire.

## 2. Gouvernance lue avant toute édition

Lecture intégrale effectuée, dans l’ordre imposé, de :

- `CLAUDE.md` ;
- `docs/regle-or-vigilance-seo-publication.md` ;
- `docs/charte-qualite-guides.md` ;
- `docs/workflow-maitre-guides-4-passes.md` ;
- `docs/instructions-guide-de-qualite.md` ;
- `docs/roadmap-guides-seo.md` ;
- `docs/registre-coordination-guides.md` ;
- `docs/research/_modele-guide.md` ;
- l’ancien dossier du slug ;
- `src/lib/guides.ts` ;
- le prompt maître du second orchestrateur (1 906 lignes) ;
- les quatre DOCX d’origine des passes 1 à 4.

Les DOCX sont utilisés pour leur intention de profondeur, de contradiction et
de plume. Sont neutralisés : l’identité Hagnéré Patrimoine, les quotas de
mots/liens/FAQ/CTA, la densité de mot-clé, les faux personas, les promesses de
classement, `FAQPage`, `HowTo`, les prix ou délais inventés et tout
téléchargement XLS/XLSX/CSV.

## 3. Inventaire de l’état hérité

### Dossier de recherche préexistant

- chemin : `docs/research/mvp-prototype-ou-poc.md` ;
- longueur : 767 lignes ;
- SHA-256 d’entrée :
  `cf187e27023f280f5e6f72cea74c6987aa43caf473a2454b5cc601b3a7dfba78` ;
- il documente une ancienne production du 22 juillet 2026, avec une séquence
  de passes, des composants et des validations qui ne correspondent plus au
  protocole actuel ;
- ses anciens scores, gates, tests, dates, sources et décisions de publication
  ne sont pas transférés ;
- ses hypothèses utiles (taxonomies non normalisées, choix par inconnue,
  chevauchement pilote/MVP, prudence sur les données de test et les droits)
  seront reprises uniquement après nouvelle vérification.

Les manifestes historiques `-p1` à `-p4` existent dans le snapshot. Seul
`mvp-prototype-ou-poc-p1.sha256` appartient au périmètre de cette passe et sera
remplacé par le manifeste exact du nouveau candidat P1. Les anciens P2 à P4 ne
sont pas modifiés.

### Versions historiques de la page

La route n’existe plus au HEAD d’entrée. Son historique Git a été inventorié
sans restaurer le texte :

| Snapshot                                   | Date auteur     | État                                 | Lignes | SHA-256 du fichier                                                 |
| ------------------------------------------ | --------------- | ------------------------------------ | -----: | ------------------------------------------------------------------ |
| `14a388b91c2199ba1309cba304653248d6baf084` | 23 juillet 2026 | première version retrouvée           |    956 | `17f08e21719b9d2fd64ea74de45ffe95844af1b336a608afd3cc24303fe17737` |
| `122910e128af7e1b4fdc85b7fbeac63cb5f71c61` | 24 juillet 2026 | ajout d’un lien voisin seulement     |    960 | `487a2c4a056ea4795b98b5b8093d2b4ced86e44f904e57c025a49a357aa05c9d` |
| `1e2abea69289e9d856dfeba392237f11bed6d293` | 29 juillet 2026 | suppression lors de la remise à zéro |      0 | route absente                                                      |

Le diff entre les deux snapshots Git historiques ne changeait que
`relatedLinks` : un lien vers `lovable-bolt-v0-ou-agence-saas` avait été ajouté.
L’ancienne page
contenait déjà un comparatif, une fiche de dix questions, un exemple fictif et
des sources, mais elle recopiait les metadata et le JSON-LD localement,
utilisait l’ancien gabarit, liait une route de prix héritée et suivait une
empreinte éditoriale désormais retirée. Elle est un inventaire des risques, pas
une base à restaurer.

## 4. Contrat P1 gelé

Roadmap #31, priorité P1 : aider un dirigeant non technique à choisir **quoi
construire pour lever l’incertitude principale**, avec une matrice
`objectif / preuve attendue / public / condition de passage`.

Frontières obligatoires :

- ne pas présenter prototype, POC, pilote et MVP comme une chronologie
  universelle ;
- ne pas prétendre qu’un terme possède une définition contractuelle
  normalisée ;
- ne pas confondre faisabilité technique, compréhension d’un parcours, usage
  réel, apprentissage client et produit exploitable ;
- montrer quand un entretien, un test manuel, un outil existant, un report ou
  un arrêt évite de construire ;
- rendre visibles le responsable, les données, le cas testé, le résultat
  observable, le seuil de passage et les éléments remis ;
- signaler chaque scénario fictif à proximité ;
- ne publier ni prix, ni délai moyen, ni taux de réussite, ni nombre universel
  de testeurs sans corpus primaire daté ;
- garder toute inconnue matérielle visible ;
- proposer une FAQ visible sans `FAQPage`/`HowTo` ;
- placer un CTA tardif vers `/demarrer-un-projet`, avec destination et mauvais
  fit explicites ;
- ne proposer aucun XLS, XLSX ou CSV.

## 5. STOPs d’entrée

- `src/lib/guides.ts` ne contient pas encore #31 : metadata, canonical,
  robots, dates, temps de lecture, hub, sitemap et `llms.txt` resteront des
  points d’intégration partagée ; la page P1 sera servable en utilisant une
  configuration locale privée sans modifier le registre.
- La vraie première date de publication de la future route n’est pas prouvée
  dans ce snapshot : aucune date de publication ne sera inventée.
- Aucune validation par un dirigeant réel n’est disponible en P1.
- La recherche du 22 juillet 2026 est périmée comme preuve actuelle : les
  sources vivantes et les résultats externes seront ouverts de nouveau le
  4 août 2026.
- Les fichiers partagés, le maillage entrant, la redirection historique et le
  statut public ne seront ni modifiés ni déclarés pendant P1.
