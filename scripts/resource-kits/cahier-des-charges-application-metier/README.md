# Kit cahier des charges d'une application métier

Sources versionnées des documents proposés sur
`/ressources/kit-cahier-des-charges-application-metier`.

## Livrables publics

- `modele-cahier-des-charges-application-metier.docx` : modèle éditable ;
- `exemple-rempli-cahier-des-charges-application-metier.pdf` : cas fictif rempli ;
- `mode-emploi-cahier-des-charges-application-metier.pdf` : prise en main et sources ;
- `kit-cahier-des-charges-application-metier.zip` : archive contenant les trois fichiers précédents.

Le modèle produit un résultat autonome : un besoin métier priorisé, des scénarios
critiques, des responsabilités, des critères de recette et des conditions de
réversibilité partageables avec plusieurs prestataires. Il peut conduire à la
décision de conserver l'outil actuel ou d'acheter un logiciel existant.

## Génération

Le script reprend les principes du preset `compact_reference_guide` de la
compétence Documents, adaptés au lectorat français : pages A4 en portrait,
annexes matricielles A4 en paysage, largeur utile fixe, Calibri 11 pt et
interligne 1,25.

Exécuter les commandes suivantes depuis la racine du dépôt. Les noms des
dossiers `render4-*` font partie du contrat de release : ne pas les changer.

```bash
KIT_RUNTIME_PY=/Users/quentinhagnere/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3.12
KIT_DOCS_SKILL=/Users/quentinhagnere/.codex/plugins/cache/openai-primary-runtime/documents/26.715.12143/skills/documents
KIT_WORKDIR="$PWD/tmp/pdfs/cahier-des-charges-application-metier"
KIT_SCRIPTS="$PWD/scripts/resource-kits/cahier-des-charges-application-metier"

"$KIT_RUNTIME_PY" "$KIT_SCRIPTS/build_documents.py" \
  --output "$KIT_WORKDIR"
```

Auditer les trois DOCX et conserver les rapports aux emplacements attendus :

```bash
"$KIT_RUNTIME_PY" "$KIT_DOCS_SKILL/scripts/a11y_audit.py" \
  "$KIT_WORKDIR/modele-cahier-des-charges-application-metier.docx" \
  --out_json "$KIT_WORKDIR/modele-cahier-des-charges-application-metier.docx.a11y.json"

"$KIT_RUNTIME_PY" "$KIT_DOCS_SKILL/scripts/a11y_audit.py" \
  "$KIT_WORKDIR/exemple-rempli-cahier-des-charges-application-metier-source.docx" \
  --out_json "$KIT_WORKDIR/exemple-rempli-cahier-des-charges-application-metier-source.docx.a11y.json"

"$KIT_RUNTIME_PY" "$KIT_DOCS_SKILL/scripts/a11y_audit.py" \
  "$KIT_WORKDIR/mode-emploi-cahier-des-charges-application-metier-source.docx" \
  --out_json "$KIT_WORKDIR/mode-emploi-cahier-des-charges-application-metier-source.docx.a11y.json"
```

Rendre ensuite les trois documents avec les chemins exacts consommés par le
gate :

```bash
env TMPDIR=/private/tmp "$KIT_RUNTIME_PY" "$KIT_DOCS_SKILL/render_docx.py" \
  "$KIT_WORKDIR/modele-cahier-des-charges-application-metier.docx" \
  --output_dir "$KIT_WORKDIR/render4-modele-cahier-des-charges-application-metier" \
  --emit_pdf

env TMPDIR=/private/tmp "$KIT_RUNTIME_PY" "$KIT_DOCS_SKILL/render_docx.py" \
  "$KIT_WORKDIR/exemple-rempli-cahier-des-charges-application-metier-source.docx" \
  --output_dir "$KIT_WORKDIR/render4-exemple-rempli-cahier-des-charges-application-metier-source" \
  --emit_pdf

env TMPDIR=/private/tmp "$KIT_RUNTIME_PY" "$KIT_DOCS_SKILL/render_docx.py" \
  "$KIT_WORKDIR/mode-emploi-cahier-des-charges-application-metier-source.docx" \
  --output_dir "$KIT_WORKDIR/render4-mode-emploi-cahier-des-charges-application-metier-source" \
  --emit_pdf
```

Inspecter visuellement **chaque** `page-N.png` : 22 pages pour le modèle, 22
pour l'exemple et 3 pour le mode d'emploi. Examiner en plus les pages 15 à 20
du modèle et de l'exemple à leur définition originale, car elles contiennent
les matrices en paysage.

Après cette inspection seulement, enregistrer le manifeste de preuve. Le nom
du relecteur est obligatoire ; `--confirm-visual-review` est une attestation,
pas une option destinée à contourner le contrôle :

```bash
"$KIT_RUNTIME_PY" "$KIT_SCRIPTS/release_kit.py" \
  --working-dir "$KIT_WORKDIR" \
  --record-qa-manifest \
  --confirm-visual-review \
  --reviewed-by "Nom du relecteur ou agent"
```

Cette commande met à jour `qa_manifest.json`, puis construit la release. Le
manifeste lie par SHA-256 les trois DOCX sources, les trois PDF rendus, les 47
pages PNG et les trois rapports d'accessibilité. Toute modification ultérieure
d'une source ou d'une preuve bloque la publication jusqu'à un nouveau cycle
complet de rendu et de revue.

Pour revalider sans modifier le manifeste, puis publier :

```bash
"$KIT_RUNTIME_PY" "$KIT_SCRIPTS/release_kit.py" \
  --working-dir "$KIT_WORKDIR"

"$KIT_RUNTIME_PY" "$KIT_SCRIPTS/release_kit.py" \
  --working-dir "$KIT_WORKDIR" \
  --publish
```

La release et le dossier public doivent contenir exactement les quatre noms
énumérés plus haut. Le script refuse toute entrée supplémentaire. Il prépare
un dossier frère complet, le vérifie, renomme l'ancien dossier en sauvegarde,
bascule le staging et restaure la sauvegarde si la bascule échoue. Les chemins
publics restent donc identiques et aucune version composée de fichiers anciens
et nouveaux n'est exposée. Sur un système POSIX sans échange atomique de deux
répertoires, les deux renommages successifs constituent la limite technique ;
la fenêtre est minimale et un rollback est prévu.

## Contrôles obligatoires

1. audit d'accessibilité des trois DOCX (titres, tableaux et liens), sans
   alerte haute, moyenne ou basse ;
2. rendu PNG de toutes les pages du modèle, de l'exemple et du mode d'emploi ;
3. lecture visuelle de chaque page ;
4. manifeste QA cohérent avec les hashes des sources, PDF, PNG et rapports ;
5. extraction du texte des PDF et recherche de résidus (`À compléter` dans
   l'exemple, secrets, faux client, liens cassés) ;
6. vérification octet par octet du contenu du ZIP ;
7. whitelist exacte des quatre fichiers de release et du dossier public ;
8. contrôle des tailles déclarées dans `src/lib/resources.ts`.

Le résultat du contrôle de la version publiée est conservé dans
`docs/qa/kit-cahier-des-charges-application-metier.md`.

Le cas rempli est explicitement fictif. Les montants, volumes, délais et cibles
qu'il contient expliquent la méthode ; ils ne décrivent ni un client ni une
promesse de Hagnéré Code.
