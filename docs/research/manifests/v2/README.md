# Manifestes éditoriaux V2

Ce dossier contient la fondation de la gouvernance SHA-256 V2. Elle sépare les
artefacts propres à un guide des dépendances communes au corpus. Elle ne
remplace pas encore les manifestes historiques situés dans le dossier parent.

## Objectifs

- conserver les reçus P1 à P4 historiques sans les réécrire ;
- éviter qu'une évolution de `src/lib/guides.ts`, d'un test global ou d'un
  registre invalide rétroactivement tous les reçus propres aux guides ;
- vérifier le snapshot actif sans accepter un manifeste imbriqué périmé ;
- produire, strictement en lecture seule, un diagnostic exhaustif sur toutes
  les entrées individuellement exploitables ;
- créer une nouvelle révision plutôt que modifier un gel déjà établi.

## Arborescence

```text
docs/research/manifests/v2/
├── README.md
├── current.json
├── guides/
│   └── <slug>/
│       └── p4-<AAAA-MM-JJ>-r<n>.sha256
└── waves/
    ├── <wave-id>.json
    └── <wave-id>-common.sha256
```

`current.json` est un sélecteur mutable. Les descripteurs, les manifestes
communs et les reçus propres aux guides sont immuables. Un changement crée une
nouvelle révision ou une nouvelle vague.

Cette fondation est volontairement livrée sans `current.json` : aucun snapshot
V2 ne doit être déclaré actif avant la stabilisation des fichiers partagés et
la création des reçus propres aux guides. Le vérificateur échoue donc
explicitement tant que la migration n'a pas eu lieu.

## Sélecteur actif

Format exact :

```json
{
  "schemaVersion": 2,
  "activeWave": "docs/research/manifests/v2/waves/2026-07-24-giga-audit-r1.json"
}
```

Le sélecteur :

- pointe directement vers un fichier JSON du dossier `waves` ;
- n'est jamais inclus dans un manifeste SHA-256 ;
- change uniquement lorsqu'une nouvelle vague devient le snapshot actif.

## Descripteur de vague

Format exact :

```json
{
  "schemaVersion": 2,
  "waveId": "2026-07-24-giga-audit-r1",
  "commonManifest": "docs/research/manifests/v2/waves/2026-07-24-giga-audit-r1-common.sha256",
  "guides": [
    {
      "slug": "google-ads-saas-b2b",
      "manifest": "docs/research/manifests/v2/guides/google-ads-saas-b2b/p4-2026-07-24-r1.sha256"
    }
  ]
}
```

Les guides sont triés par slug. Chaque slug et chaque chemin de manifeste
apparaissent une seule fois. Le vérificateur conserve néanmoins toutes les
entrées individuellement exploitables d'un descripteur invalide afin de
restituer les erreurs de format, de lecture et d'empreinte propres à chacune,
sans écrasement silencieux. Une entrée dont le slug ou le chemin ne peut pas
être interprété reste signalée comme invalide, mais son reçu n'est pas parcouru.
Le nom du descripteur correspond exactement à `waveId`. Le manifeste commun
porte le même identifiant suivi de `-common.sha256`.

## Reçu propre à un guide

Un reçu `guides/<slug>/p4-<date>-r<n>.sha256` contient uniquement les artefacts
propres au guide :

- `docs/research/<slug>.md` ;
- `src/app/guides/<slug>/page.tsx` ;
- `src/app/guides/<slug>/opengraph-image.tsx` ;
- composants, bibliothèques et tests utilisés uniquement par ce guide ;
- ressources téléchargeables et ZIP propres au guide ;
- rapports d'audit et de contre-audit propres au guide.

Les trois premiers chemins sont obligatoires.

Un reçu propre ne contient jamais :

- `src/lib/guides.ts`, `package.json` ou `package-lock.json` ;
- les tests ou composants couvrant plusieurs guides ;
- la charte, le workflow ou la roadmap ;
- le registre maître, le plan de correction ou un README d'audit global ;
- l'artefact d'un autre guide ;
- un autre fichier `.sha256`, y compris un ancien manifeste ou un manifeste de
  lot.

La chaîne historique P1 à P4 reste documentée dans les manifestes V1 et dans le
dossier de recherche. Elle n'est pas imbriquée dans le reçu courant V2.

## Manifeste commun

Le manifeste `waves/<wave-id>-common.sha256` relie :

- le descripteur JSON de la vague ;
- les fichiers de gouvernance et de registre communs ;
- exactement un reçu V2 par guide annoncé par le descripteur.

La fondation exige au minimum :

- `docs/research/manifests/v2/README.md` ;
- `package.json` ;
- `scripts/verify-editorial-manifests.ts` ;
- `src/lib/editorial-governance.test.ts` ;
- `src/lib/editorial-manifest.test.ts` ;
- `src/lib/editorial-manifest.ts` ;
- `src/lib/guide-human-language.test.ts` ;
- `src/lib/guides.ts`.

Ajouter au gel les autres fichiers partagés réellement modifiés : tests de lot,
composants communs, charte, workflow, registre maître, plan ou README global.

Le manifeste commun ne contient directement ni page de guide ni dossier de
recherche propre. Il référence leur reçu V2. Tout fichier `.sha256` qu'il
contient doit être l'un des reçus annoncés par le descripteur.

La dépendance reste ainsi orientée dans un seul sens :

```text
vague commune → reçus des guides → artefacts des guides
```

## Format SHA-256 canonique

Chaque ligne contient :

```text
<64 caractères hexadécimaux minuscules><deux espaces><chemin relatif POSIX>
```

Règles bloquantes :

- une fin de ligne LF après la dernière entrée ;
- chemins triés lexicalement et sans doublon ;
- aucun chemin absolu, segment vide, `.` ou `..`, barre oblique inversée ou
  octet nul ;
- aucune auto-référence, y compris sous un autre chemin vers le même fichier
  physique ;
- aucune cible absente ou dossier ;
- aucun lien symbolique : ni le fichier, ni l'un de ses dossiers parents, ni la
  racine fournie au vérificateur ne peuvent être des alias ;
- chaque fichier terminal doit avoir exactement un lien physique (`nlink = 1`).
  Tout hard link est donc interdit, même si son alias est hors du dépôt ou
  absent de tous les manifestes ;
- correspondance exacte entre les octets et le SHA-256 annoncé.

Les identités physiques sont indexées globalement avec le couple périphérique
et inode. Un fichier ne peut donc appartenir à la fois au manifeste commun et à
un reçu propre, ni à deux entrées de guide différentes. Cette règle s'applique
même lorsque les chemins textuels diffèrent.

## Modèle de confiance sémantique

Le vérificateur prouve la cohérence mécanique du graphe déclaré. Il connaît une
liste minimale de fichiers globaux, certains motifs de chemins et les
intersections d'identité. Il ne peut pas déduire à lui seul la fonction métier
de chaque chemin unique. Par exemple, un fichier comme `next.config.ts`
incorrectement placé dans un seul reçu propre pourrait ne créer aucune
intersection physique : sa classification resterait pourtant fausse.

Avant toute activation, la préparation de vague et la CI doivent donc :

1. dresser l'inventaire exact des fichiers modifiés ou livrés ;
2. classifier explicitement chacun comme commun ou propre à un seul guide, avec
   une justification ;
3. vérifier que l'union du manifeste commun et des reçus propres couvre cet
   inventaire sans fichier non classé ;
4. faire contre-auditer cette classification indépendamment, notamment pour la
   configuration, les composants et tests partagés ;
5. relancer le contrôle sur le checkout exact destiné au déploiement.

Un résultat vert confirme le graphe fourni ; il ne remplace ni cet inventaire
ni le jugement éditorial et architectural qui détermine la propriété réelle des
fichiers.

## Contrôle read-only

Commande autonome :

```bash
npx tsx scripts/verify-editorial-manifests.ts
```

Pour contrôler une fixture ou un autre checkout :

```bash
npx tsx scripts/verify-editorial-manifests.ts --root /chemin/du/depot
```

Le vérificateur :

1. ouvre `current.json` ;
2. valide le sélecteur et le descripteur ;
3. capture une seule fois les octets, `dev`, `ino`, `nlink` et le chemin réel de
   chaque fichier ;
4. analyse le manifeste commun et chaque entrée de guide, doublons compris ;
5. calcule les SHA-256 depuis les mêmes buffers que ceux utilisés pour
   l'analyse ;
6. vérifie la sécurité des chemins, les identités et les règles de propriété ;
7. capture puis revalide `dev`, `ino` et le chemin réel de chaque dossier parent
   traversé ;
8. relit chaque fichier en fin de contrôle et refuse toute variation de contenu,
   d'identité, de nombre de liens physiques ou de parent ;
9. restitue tous les problèmes dans un ordre déterministe ;
10. ne crée, ne corrige et ne supprime aucun fichier.

Une absence de `current.json` produit un message explicite et un code de sortie
non nul. Ce comportement est attendu avant l'activation de la V2.

## Création d'une vague

Ordre obligatoire :

1. stabiliser tous les artefacts propres et communs ;
2. créer une nouvelle révision pour chaque guide matériellement modifié ;
3. créer le descripteur de vague, guides triés ;
4. calculer le manifeste commun en dernier ;
5. lancer le vérificateur sur le futur snapshot ;
6. modifier `current.json` seulement lorsque le contrôle est vert ;
7. relancer immédiatement le même contrôle.

Les contenus des manifestes sont calculés en lecture seule, puis ajoutés avec
`apply_patch`. Une redirection shell ne modifie jamais ces reçus.

## Compatibilité avec l'historique

Les manifestes existants dans `docs/research/manifests/` restent en place. Leur
existence et leur syntaxe peuvent continuer à être contrôlées, mais leurs
empreintes historiques ne doivent plus être comparées aux fichiers courants
après la bascule V2.

La migration doit être atomique :

1. créer les reçus V2 du périmètre déjà contrôlé ;
2. créer la première vague commune ;
3. ajouter `current.json` ;
4. adapter le test de gouvernance dans le même changement.

Jusqu'à cette bascule, le test de gouvernance historique reste l'autorité. Ce
README et le code de validation ne déclarent aucun guide V2 comme publiable.
