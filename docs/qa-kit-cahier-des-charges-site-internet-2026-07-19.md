# Rapport QA — kit « cahier des charges de site internet »

**Date de contrôle :** 19 juillet 2026
**Périmètre :** livrables téléchargeables, intégration dans le guide, rendu local et contrôles techniques associés
**Décision :** **GO technique local**, avec les limites explicites de la section finale

## 1. Ce que cette décision signifie

Le kit a été **généré**, **audité**, **inspecté visuellement** sur les rendus
prévus et **copié dans le dossier `public/` du dépôt**. Le guide et les cinq
liens de téléchargement ont été vérifiés sur une build locale de production.

Cette décision ne signifie pas que le kit ou le guide ont été déployés. Aucun
déploiement Vercel, test sur le domaine public, test avec un utilisateur réel,
contrôle d'indexation ou résultat de classement Google n'est attesté par ce
rapport.

Le mot `--publish` du pipeline désigne seulement une copie locale contrôlée
vers `public/ressources/kit-cahier-des-charges-site-internet/` : un manifeste
`pending` est écrit et relu avant cinq remplacements atomiques effectués fichier
par fichier, puis les cinq fichiers sont revérifiés avant le passage du
manifeste à `completed`. L'ensemble des cinq remplacements n'est pas une
transaction atomique globale et ne publie rien sur Internet.

## 2. Livrables publics contrôlés

Les tailles et empreintes ci-dessous ont été recalculées sur les fichiers
présents dans `public/`, après la dernière génération.

| Livrable                                              |         Taille | SHA-256                                                            |
| ----------------------------------------------------- | -------------: | ------------------------------------------------------------------ |
| `modele-cahier-des-charges-site-internet.docx`        |  56 496 octets | `32804ddea0d6e982f074e55cd0bfa8d2214dec34017f9604c8d7ecccbe0de3ee` |
| `exemple-rempli-cahier-des-charges-site-internet.pdf` | 457 429 octets | `cfc2f9abd3f338fada4e58d4b90fcbbb9727a12c23c6c5ecea431d741004b0ca` |
| `grille-de-recette-site-internet.xlsx`                |  23 722 octets | `7f9b3c3077a53e0f2e04658a25ec09092dcffaaa7ccb4a39546c1e9d2e5f4f4c` |
| `lisez-moi-kit-cahier-des-charges-site-internet.pdf`  | 116 029 octets | `f874df655b8d8024f897f32f81928b278469516c211a150f9d32e02d13c65795` |
| `kit-cahier-des-charges-site-internet.zip`            | 351 578 octets | `64904ca03709a0a606f72c061dd6aabb1ca0b996bb02106236ca271e978330d4` |

L'archive contient exactement les quatre fichiers individuels, à sa racine.
Le ZIP n'est donc pas un cinquième contenu : il est le conditionnement groupé
des quatre ressources.

## 3. Contrôle des documents

### 3.1 Modèle Word

**Résultat : conforme au contrat de génération.**

- format OOXML standard, éditable, A4 et langue `fr-FR` ;
- 18 rubriques guidées, dont l'identité et le contrôle du document, le
  périmètre, les responsabilités, les preuves attendues et la recette ;
- 13 hyperliens HTTPS réels ;
- métadonnées publiques nettoyées ;
- absence de macro VBA, ActiveX, objet OLE incorporé, commande DDE, suivi des
  modifications, commentaire, chemin local ou connexion Office externe ;
- audit d'accessibilité documentaire sans constat résiduel bloquant ;
- rendu PDF de contrôle généré pour examiner la pagination et la mise en page.

L'inspection visuelle a porté sur le rendu du DOCX produit par le pipeline. Elle
ne constitue pas une ouverture manuelle du fichier dans toutes les versions de
Microsoft Word.

### 3.2 Exemple fictif rempli

**Résultat : conforme et sans page parasite.**

- 17 pages A4 exactement ;
- dernière page substantielle, sans ancienne page 18 vide ;
- cas PME B2B explicitement fictif, sans présentation comme référence client
  ou promesse de résultat ;
- PDF balisé, langue `fr-FR`, signets et 13 liens HTTPS ;
- polices incorporées ou sous-ensemblées avec correspondance Unicode ;
- absence de formulaire, JavaScript, pièce jointe, action automatique à
  l'ouverture, lien `file:`, lien `localhost` ou action de lien dangereuse ;
- inspection visuelle des 17 pages : hiérarchie, tableaux, appels de vigilance,
  sauts de page et densité de la dernière page contrôlés.

### 3.3 Grille Excel de recette

**Résultat : logique fonctionnelle vérifiée avec recalcul réel sous
LibreOffice.**

- quatre feuilles : `Mode d'emploi`, `Recette`, `Synthèse` et `Listes` ;
- 56 tests préremplis et 12 lignes libres ;
- les 12 identifiants libres sont réellement vides, et non des chaînes vides ;
- 68 formules de décision, seize colonnes `A:P`, volets figés en `D5` et filtre
  `A4:P72` ;
- quatre listes nommées et quatre validations de saisie ;
- aucune macro, ActiveX, connexion, objet incorporé ou liaison vers un classeur
  externe ;
- aucune formule `#REF!` ;
- total initial de la synthèse : 56 tests, 0 conforme, état
  `RECETTE EN COURS` ;
- un vérificateur autonome travaille uniquement sur des copies, force le
  recalcul LibreOffice puis contrôle les valeurs mises en cache, sans modifier
  l'empreinte du classeur source ;
- treize scénarios passent : état initial ; `Conforme` sans date, sans preuve
  ou sans les deux ; `Conforme` complet ; `À corriger` avec gravité vide ou
  `—`, sans date ou sans anomalie ; correction majeure complète ; correction
  bloquante complète ; `Non applicable` sans puis avec justification ;
- une correction bloquante complète remonte `BLOQUANT` sur la ligne et
  `RECETTE BLOQUÉE` dans la synthèse ;
- le contrôle négatif de l'ancienne formule a échoué précisément lorsque la
  gravité était réellement vide. La correction empêche donc un résultat
  trompeur `À traiter` dans ce cas limite.

Ces essais ont validé le recalcul avec LibreOffice, pas avec une installation
native de Microsoft Excel. Le format est un XLSX OOXML standard destiné aux
versions récentes d'Excel et de LibreOffice, mais l'équivalence dans chaque
version d'Excel reste une limite de ce contrôle.

### 3.4 Mode d'emploi PDF

**Résultat : conforme et exploitable de façon autonome.**

- quatre pages A4 exactement, sans dernière page quasi vide ;
- ordre d'utilisation, méthode de personnalisation, points de vigilance,
  limites et licence présents ;
- PDF balisé, langue `fr-FR`, signets et sept liens HTTPS ;
- polices incorporées ou sous-ensemblées avec correspondance Unicode ;
- absence de formulaire, script, pièce jointe, action automatique ou lien
  dangereux ;
- inspection visuelle des quatre pages effectuée.

### 3.5 Archive ZIP

**Résultat : intégrité confirmée.**

- quatre entrées exactes, sans dossier caché ni fichier de travail ;
- contrôle CRC valide ;
- chaque membre est identique octet par octet au fichier individuel public ;
- aucun chemin absolu, `..`, chiffrement ou structure assimilable à une bombe
  ZIP ;
- aucun source DOCX intermédiaire, aperçu PNG ou manifeste interne ajouté à
  l'archive.

### 3.6 Chaîne de génération et contre-audit

**Résultat : la release publique finale concorde avec son manifeste 5/5.**

- génération finale exécutée avec Python 3.14.6 et les dépendances Python
  épinglées du dossier, Node.js 24.14.0, `@oai/artifact-tool` 2.8.24,
  LibreOfficeDev 26.8 et Poppler 26.05 ;
- le manifeste consigne les versions et chemins observés, ainsi que les
  empreintes de `kit_config.json` et `requirements.txt` ;
- les empreintes des 38 images de rendu des documents et des cinq aperçus du
  tableur sont identiques à celles du passage visuel approfondi précédent ; la
  première et la dernière page de l'exemple, la feuille `Recette` et la feuille
  `Synthèse` de la release publique ont en plus été revues directement ;
- un agent de contre-audit distinct a recalculé les empreintes, rouvert les
  archives Office/PDF/ZIP et rejoué les treize scénarios sans modifier les
  binaires. Il n'a relevé aucune anomalie bloquante résiduelle ;
- après le durcissement du pipeline, une génération complète supplémentaire a
  été exécutée sans `--publish`, dans un dossier isolé : dépendances exactes,
  trois audits documentaires, treize scénarios Excel, audits Office/PDF/ZIP et
  manifeste `publicationStatus: not-requested` avec zlib 1.2.12 ont tous passé.
  Les cinq empreintes publiques ont été relues ensuite et sont restées
  inchangées.

La stabilité octet par octet d'un nouveau ZIP suppose à la fois des quatre
sources identiques et la même chaîne Python/zlib. Une nouvelle génération sous
un autre moteur Office, avec d'autres polices ou bibliothèques, peut produire
des octets différents sans changement éditorial visible : le manifeste de la
release effectivement revue reste donc la preuve de référence.

## 4. Vérification du guide et du composant de téléchargement

### 4.1 Contrôles de code

| Contrôle                                         | Résultat                  |
| ------------------------------------------------ | ------------------------- |
| Tests ciblés du manifeste et des ressources      | 4/4 réussis               |
| ESLint sur les fichiers concernés                | réussi                    |
| TypeScript `tsc --noEmit`                        | réussi                    |
| Build Next.js de production                      | réussi, 79 pages générées |
| Suite de tests globale relancée sur l'état final | 6 fichiers, 37/37 réussis |

### 4.2 Téléchargements locaux

Les cinq liens affichés dans la carte ont été activés avec Playwright : un ZIP
principal et quatre téléchargements individuels. Les cinq événements de
téléchargement ont été reçus, avec les noms de fichiers et tailles attendus.
Aucun formulaire, champ email ou changement de page n'est nécessaire.

| URL locale servie                                     | HTTP | `Content-Type`                                                            | `Content-Length` |
| ----------------------------------------------------- | ---: | ------------------------------------------------------------------------- | ---------------: |
| `kit-cahier-des-charges-site-internet.zip`            |  200 | `application/zip`                                                         |          351 578 |
| `modele-cahier-des-charges-site-internet.docx`        |  200 | `application/vnd.openxmlformats-officedocument.wordprocessingml.document` |           56 496 |
| `exemple-rempli-cahier-des-charges-site-internet.pdf` |  200 | `application/pdf`                                                         |          457 429 |
| `grille-de-recette-site-internet.xlsx`                |  200 | `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`       |           23 722 |
| `lisez-moi-kit-cahier-des-charges-site-internet.pdf`  |  200 | `application/pdf`                                                         |          116 029 |

Le téléchargement repose sur des liens HTML natifs avec attribut `download` :
il reste donc utilisable si le JavaScript de mesure n'est pas disponible. Le
clic déclare un événement à un relais compatible Plausible, PostHog, GA4 ou
`dataLayer`, mais ce relais n'installe aucun collecteur. Aucun collecteur de cet
événement personnalisé ni aucune réception en production n'est attesté ici.

### 4.3 Responsive et inspection visuelle

La page a été mesurée aux largeurs suivantes : **320, 360, 390, 430, 640, 768,
1024, 1280, 1440 et 1600 px**.

Pour les dix largeurs :

- `scrollWidth` du document et du corps égal à leur largeur visible ;
- aucun lien de la carte hors de la fenêtre ;
- cinq liens de téléchargement présents dans la carte ;
- hauteur interactive minimale d'au moins 44 px ;
- valeur la plus basse observée : 44 px ; sur les écrans les plus étroits, les
  boutons empilés atteignent 58 à 64 px ;
- aucun débordement horizontal de page.

Le nouveau CTA du hero, « Télécharger le kit gratuit », mesure 44 px de haut
aux dix largeurs, reste entièrement dans la fenêtre et conduit à la carte par
l'ancre `#telecharger-kit`.

Les vues suivantes ont été inspectées visuellement : haut de page et carte en
mode clair à 1440 px, haut de page et carte à 320 px, carte en mode sombre à
320 px et à 1440 px. La hiérarchie, le contraste apparent, l'empilement des
boutons, le texte des formats et tailles, ainsi que la coexistence avec la
navigation latérale ont été contrôlés.

### 4.4 Clavier, focus et sémantique accessible

- le CTA du hero et les cinq liens natifs sont atteignables au clavier dans
  l'ordre du document ;
- le focus visible est matérialisé par un anneau distinct sur les boutons de
  téléchargement ;
- aucune trappe au clavier n'a été observée dans la carte ;
- la section est nommée par son titre au moyen de `aria-labelledby` ;
- la liste des caractéristiques possède un nom accessible ;
- les icônes décoratives sont masquées aux technologies d'assistance ;
- les libellés accessibles distinguent le kit complet et chacun des quatre
  fichiers, avec leur format et leur taille visibles ;
- après activation, une zone `role="status"` et `aria-live="polite"` annonce
  que le lien a été activé sans prétendre qu'un téléchargement a forcément
  abouti.

Il s'agit d'un contrôle structurel et navigateur, pas d'un audit complet avec
plusieurs lecteurs d'écran ni d'une certification d'accessibilité.

## 5. SEO et données structurées contrôlés localement

- un seul titre de page exploitable et un H1 cohérent ;
- titre SEO de 60 caractères et description de 145 caractères ;
- canonical :
  `https://hagnere-code.ai/guides/cahier-des-charges-site-internet` ;
- métadonnées Open Graph avec titre, description, URL et image ;
- endpoint Open Graph local en HTTP 200 avec `Content-Type: image/png` ;
- deux objets JSON-LD prévus et sérialisables : `Article` et
  `BreadcrumbList` ;
- FAQ visible de 12 questions, sans schéma `FAQPage` retiré par Google ;
- dates de publication et modification, auteur, éditeur et langue `fr-FR`
  présents ;
- directives robots configurées sur `index, follow`.
- un seul H1, aucun identifiant dupliqué et aucun saut de niveau dans les 36
  titres du contenu principal après correction de « Guides liés » de H4 en H3.

Ces contrôles attestent la présence et la cohérence locale du balisage. Ils ne
prouvent ni l'éligibilité définitive à un résultat enrichi, ni l'exploration,
l'indexation ou le positionnement par Google. Aucun cache de réseau social ni
robot de production n'a été testé.

## 6. Incidents isolés et signaux exclus du verdict

La console de la build locale affiche un 404 et un refus MIME pour
`/_vercel/insights/script.js`. Ce comportement est attendu hors de
l'environnement Vercel qui sert ce script. Aucune erreur de page React n'a été
observée. Ce point doit être revérifié sur un déploiement réel avant de conclure
sur la collecte Analytics.

Une navigation propre a également produit des avertissements Chrome sur quatre
feuilles CSS préchargées par Next.js mais non utilisées dans les secondes
suivantes. Ils ne bloquent ni le rendu ni l'interaction et ne sont pas propres à
la carte du kit ; ils restent un signal d'optimisation à examiner séparément au
niveau du gabarit global.

Une première tentative de vérification massive des liens internes a observé des
échecs sur une instance locale devenue incohérente après une installation
concurrente. Ce résultat a été écarté, puis la build finale a été recréée et
servie depuis un dossier isolé. Sur cette instance propre, les **45 URL internes
uniques** présentes dans la page ont toutes répondu sans échec HTTP. Ce contrôle
reste local : les mêmes liens devront être revérifiés sur le domaine public
après déploiement.

Pendant le durcissement final du pipeline, un test de helper mal isolé a déplacé
le ZIP public dans un dossier temporaire, sans modifier les quatre fichiers
individuels. Le contrôle d'empreintes l'a détecté immédiatement. L'archive a été
restaurée depuis le `stage/` de la release auditée, avec le même SHA-256
`64904ca03709a0a606f72c061dd6aabb1ca0b996bb02106236ca271e978330d4`,
puis son CRC, ses quatre membres et les cinq empreintes publiques ont été
revérifiés. Aucun déploiement public n'était en cours.

## 7. Limites et contrôles encore utiles

- aucun test de compréhension avec un dirigeant ou indépendant non technique ;
- aucun test natif sous Microsoft Word et Microsoft Excel ;
- aucun passage antivirus avec `clamscan`, indisponible dans l'environnement ;
- aucun déploiement, test du domaine public, suivi de conversion réel,
  indexation ou observation de classement ;
- aucun collecteur de l'événement personnalisé `resource_download_click`
  confirmé en production ;
- aucun audit complet RGAA, RGPD, sécurité ou juridique : le kit facilite le
  cadrage mais ne constitue pas une preuve de conformité ;
- les propriétés internes des PDF mentionnent
  `LibreOfficeDev 26.8.0.0.alpha0` comme producteur et `Writer` comme créateur.
  Cela n'affecte ni le contenu ni les contrôles de sécurité, mais peut être
  normalisé dans une future finition des métadonnées ;
- la compatibilité Office a été testée par structure OOXML et LibreOffice, pas
  sur un panel de versions Microsoft Office ;
- les 45 URL internes ont été validées localement, pas encore sur le domaine
  public.

## 8. Conclusion de recette

Le kit répond à son objectif local : fournir sans formulaire un modèle Word
guidé, un exemple fictif suffisamment profond, une grille Excel réellement
opérationnelle et un mode d'emploi court. Les livrables publics correspondent
au manifeste, l'archive est intègre, les formules critiques ont été recalculées
et les cinq téléchargements fonctionnent dans la build locale. Le guide est
lisible sans débordement aux dix largeurs demandées et son socle SEO est
présent. Les 45 URL internes uniques de la page répondent sur la build isolée.

Le prochain jalon n'est pas de régénérer les fichiers : c'est une validation
sur un déploiement de préproduction propre, suivie d'un court test humain de
compréhension et d'un contrôle des liens internes. Tant que ces étapes ne sont
pas réalisées, le statut correct reste **prêt techniquement dans le dépôt**, et
non **publié et validé en production**.
