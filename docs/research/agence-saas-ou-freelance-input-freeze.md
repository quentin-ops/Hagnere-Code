# Gel d'entrée — guide #30 `agence-saas-ou-freelance`

Date du gel : 4 août 2026
Orchestrateur : `SECONDARY_ORCHESTRATOR_019fb1e0`
Worktree : `/Users/quentinhagnere/Developpement/Hagnere-Code-wt-agence-saas-ou-freelance`
Branche : `codex/agence-saas-ou-freelance`
HEAD de départ : `3069ca828eae40fceacb100f4a43feca8a2e0699`

## 1. Contrat fermé

- Slug : `agence-saas-ou-freelance`.
- Roadmap : guide SaaS et MVP #30, priorité P2.
- Travail promis : aider un fondateur ou dirigeant non technique à choisir la
  composition d'équipe adaptée à la prochaine phase de son SaaS selon le
  risque, le budget, les compétences déjà présentes et la continuité.
- Artefact signature : une carte par phase et responsabilité qui permet de
  nommer la personne responsable, son relais, la preuve attendue et l'élément
  récupérable par le client.
- Sortie commerciale : service `/services/saas-applications-metier`, avec un
  éventuel CTA éditorial unique vers `/demarrer-un-projet` après une action
  autonome complète.
- Réponse courte à démontrer : le statut ne suffit pas. Un freelance peut
  convenir à un lot resserré si le pilotage produit et la continuité sont
  couverts ; une agence ou une équipe composée devient utile lorsque plusieurs
  compétences et responsabilités doivent réellement être coordonnées. Le
  report reste préférable si personne côté client ne peut décider du produit
  ou si le problème n'est pas encore validé.

## 2. Frontières anti-cannibalisation

- `/guides/choisir-prestataire-application-metier` explique déjà comment
  soumettre des candidats au même cas, demander huit preuves, normaliser les
  coûts et relire leurs propositions. #30 ne recrée ni cette procédure, ni cet
  outil, ni une seconde grille de sélection des devis.
- `/guides/mvp-saas-quoi-inclure` définit le contenu et l'exploitation du test.
  #30 choisit qui porte ces responsabilités ; il ne redéfinit pas les sept
  familles du MVP.
- `/guides/prioriser-fonctionnalites-mvp-saas` choisit le prochain lot. #30 ne
  crée aucun score de priorité et suppose la prochaine phase suffisamment
  définie pour en attribuer les responsabilités.
- `/guides/cahier-des-charges-saas` décrit le produit à faire chiffrer. #30 ne
  duplique pas ses neuf blocs ; il s'en sert seulement comme entrée possible.
- `/services/saas-applications-metier` conserve l'intention transactionnelle
  « agence de développement SaaS ». Le guide doit comparer honnêtement
  freelance, agence, équipe interne, équipe hybride et report, sans transformer
  Hagnéré Code en vainqueur automatique.
- L'ancien slug `agence-web-ou-freelance` reste une route héritée générale. Il
  ne doit pas imposer son plan au comparatif SaaS.

## 3. Contraintes factuelles et commerciales internes

- La source canonique d'équipe compte sept personnes : un président fondateur,
  un CTO et cinq autres développeurs. Trois membres sont présentés comme
  freelances long-terme. Le nom « agence » ne permet donc pas d'opposer équipe
  salariée et indépendants ; la composition et l'affectation réelles priment.
- La page service annonce des fourchettes indicatives et des engagements qui
  n'existent que s'ils figurent au devis ou au contrat. Le guide n'invente pas
  de tarif freelance, de durée moyenne, de disponibilité, de garantie ou de
  supériorité générale.
- Les livrables spécifiques, droits, dépôts, accès, documentation, période de
  correction, relais, exploitation et sortie doivent être qualifiés selon les
  documents signés ; aucun paiement n'est présenté comme une cession
  automatique de tous les droits.
- Une agence n'a pas toujours un remplaçant opérationnel ; un freelance ne
  travaille pas nécessairement seul. Toute continuité se démontre par des
  personnes, accès, traces, responsabilités et un exercice de relais.

## 4. Périmètre d'écriture slug-only

Autorisés pendant P1 à P4 :

- `src/app/guides/agence-saas-ou-freelance/**` ;
- `public/guides/agence-saas-ou-freelance/**` ;
- `docs/research/agence-saas-ou-freelance.md` ;
- `docs/research/agence-saas-ou-freelance-input-freeze.md` uniquement pour une
  correction factuelle du gel décidée par l'orchestrateur ;
- `docs/research/manifests/agence-saas-ou-freelance-p1.sha256` à `-p4.sha256`.

Interdits sans future acquisition de `integration.lock` par l'orchestrateur :

- `src/lib/guides.ts` ;
- `src/lib/legacy-guide-redirects.ts` ;
- composants partagés, hub, sitemap, `llms.txt`, dépendances et tests
  transversaux ;
- maillage entrant dans un autre guide ;
- `git add`, commit, pull, merge, rebase, push, déploiement ou publication.

## 5. Exigences de P1

- Repartir d'une page éditorialement vide. Le dossier du 22 juillet 2026 est
  une archive de pistes : ses textes, scores, statuts, manifests et anciennes
  validations ne sont pas hérités.
- Revalider les sources primaires actuelles et dater chaque consultation.
- Distinguer faits, calculs, scénarios fictifs, déductions, recommandations et
  inconnues.
- Construire une matrice de couverture sans angle matériel `BLOQUANT` et un
  registre de perspectives : dirigeant, produit, utilisateurs, finance,
  technique/sécurité, données/RGPD, achats/juridique, adoption, maintenance,
  incident/reprise, changement de prestataire, option plus simple et report.
- Couvrir au minimum quatre moments : validation/cadrage, construction, mise en
  ligne, exploitation/évolution. Pour chacun, attribuer décisions, réalisation,
  contrôle, relais et élément remis.
- Comparer les formes d'équipe sur les mêmes responsabilités, sans classement
  global, sans TJM universel et sans faux TCO. Une estimation illustrative doit
  exposer toutes ses hypothèses et peut conclure « à confirmer ».
- Tester au moins deux événements : une demande qui change et un incident ou
  une indisponibilité. Montrer qui décide, qui agit, qui contrôle et qui reprend.
- Prévoir une action autonome copiable ; aucun XLS, XLSX ou CSV.
- Utiliser les composants premium existants, des tableaux rendus en cartes sur
  mobile, `Article` et `BreadcrumbList` seulement, aucune `FAQPage`.
- Ne pas toucher à `src/lib/guides.ts` pendant P1 : l'entrée, le statut
  éditorial, les dates et la suppression de la redirection seront réconciliés
  uniquement pendant l'intégration centrale.

## 6. Inconnues et STOP initiaux

- `datePublished` réelle : inconnue avant publication. La future entrée locale
  devra rester `ready-for-human-review` et toute date prévue devra être
  réconciliée sur le snapshot effectivement publié.
- Les prix et délais propres à un freelance, une agence ou une équipe interne :
  ne pas publier de moyenne sans corpus daté et défendable.
- La propriété intellectuelle, le statut RGPD, l'assurance, la sous-traitance
  et les obligations sectorielles : ne pas qualifier un contrat réel ; renvoyer
  vers le professionnel compétent lorsque nécessaire.
- Les personnes réellement affectées, leur charge et leur relais : toujours au
  devis ou à confirmer, jamais déduits de la page équipe.
- Aucun déploiement, publication, indexation, performance ou validation par un
  lecteur humain ne peut être revendiqué pendant les quatre passes.

## 7. Corpus figé et empreintes

Le contenu complet des quatre DOCX a été lu, tableaux compris. Leur intention
éditoriale est conservée ; leurs quotas, promesses de classement, faux
personas, densités, `FAQPage`, `HowTo`, CTA multiples, chiffres plausibles et
scores de détecteur IA sont neutralisés par la gouvernance du dépôt.

| Entrée | SHA-256 |
| --- | --- |
| Prompt maître parallèle | `9cc2912701ea072f0293e145ff47c224a0ab5754c20b9066fb9ae4e2faca1804` |
| Règle d'or SEO/publication | `6109eec7f4b0cfedeffe8bd92efe0d5db31d4360d51dd8b7ebbd2b9bdc43a7f6` |
| Charte qualité guides | `51a94cc24e53fd1c26651f0584bf8fcb9c09a243f75adf07937791aea16b9067` |
| Workflow quatre passes | `6b1ae47cdddba4463a202efe51eb4d1b73cc5c50182b16872422758d64a5fcc4` |
| Contrôle qualité transversal | `da1dcd98e5a3247eecc5b3ece35d84a152d973b7386fde304d05b5da9e369d0e` |
| Roadmap | `817aa4a7ecf0900d5182357831f7cbc96a99b59b1974f632c1334caf60c6fc6f` |
| Ancien dossier #30 | `15b56eb24b4b446f7b77545debdc944129ca8f0684689867f9340df3c90d8e64` |
| Registre `src/lib/guides.ts` | `5fd720e7454b1dd80082b8f2e3dff7c31035b5b356c2428d788aa42860055c99` |
| Équipe canonique | `b9638760530a5dfec7783546fddfaa61c263e473aede0bfdc5f05fb5d613d36d` |
| Guide voisin #22 | `a10ddcd9d9f8556ad46d5bfbb1e77a58385ab62978d91c6204c48bd00bdb71d2` |
| Guide voisin #28 | `5262780f1ccb931c95b16a4d22561a288ae8eae2706f898acb4086b195655cd8` |
| Guide voisin #29 | `b0c1724d2f1b96d7f18cfd92c656b76547aa8d270262df0764f69adc84ea3de3` |
| DOCX création | `52e99b0db6d7e3e3807ec02c295ff24674d98f2031dd21fd5f8c98f5b22c1353` |
| DOCX enrichissement | `5f8d19357ca8707fdcb256981f27b31e07eac9205343388bbc172b756336b9c3` |
| DOCX polish | `47ef0d3afb54306368fb5bc5944bc55f9a157c568235bed86ef53037dd24d359` |
| DOCX antipasse IA | `81e7850e88468a1e92e48e0a51bfd9a5e0ab96d0f35c8ce92783f4c7077e969f` |

Toute évolution matérielle de ces entrées après le gel est signalée par
l'agent de passe ; elle n'est pas absorbée silencieusement.
