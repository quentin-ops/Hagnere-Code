# Relevé de contrôle — kit cahier des charges application métier

## Version contrôlée

- Version du kit : 1.0
- Date du contrôle : 20 juillet 2026
- Méthode : génération reproductible, audit automatique et inspection visuelle assistée par Codex
- Limite : ce relevé ne constitue ni une relecture humaine indépendante du fond, ni un test d'impression sur papier, ni une vérification dans chaque version de Microsoft Word

## Fichiers et rendu

| Fichier source                                                     | Rendu contrôlé           | Pages | Format                          | Résultat                                            |
| ------------------------------------------------------------------ | ------------------------ | ----: | ------------------------------- | --------------------------------------------------- |
| `modele-cahier-des-charges-application-metier.docx`                | PDF et PNG, pages 1 à 22 |    22 | A4 portrait, annexes A4 paysage | aucune coupure, superposition ou page vide observée |
| `exemple-rempli-cahier-des-charges-application-metier-source.docx` | PDF et PNG, pages 1 à 22 |    22 | A4 portrait, annexes A4 paysage | aucune coupure, superposition ou page vide observée |
| `mode-emploi-cahier-des-charges-application-metier-source.docx`    | PDF et PNG, pages 1 à 3  |     3 | A4 portrait                     | aucune coupure, superposition ou page vide observée |

Les planches de contact ont permis de contrôler la totalité des pages. Les pages 15 à 20 des deux documents principaux, qui contiennent les six nouvelles matrices en paysage, ont aussi été examinées séparément à leur définition de rendu.

## Contrôles documentaires

- Audit d'accessibilité des trois DOCX : 0 alerte haute, 0 moyenne, 0 basse.
- Exemple rempli : aucun marqueur `À compléter`, `TODO` ou faux contenu client résiduel.
- Cas fictif : avertissement présent sur la couverture, dans l'introduction et dans le corps du document.
- Mode d'emploi : liens présents vers France Num, DesignGouv, RGESN, CNIL et ANSSI.
- PDF : signature valide, nombre de pages attendu et page A4 vérifiés par le script de publication.
- ZIP : les trois fichiers embarqués sont comparés octet par octet aux téléchargements séparés.
- Publication : les tailles du manifeste applicatif sont contrôlées par les tests du dépôt.

## Compatibilité et impression

Les DOCX ont été rendus avec LibreOffice, puis les PDF ont été rasterisés pour l'inspection visuelle. Les dimensions PDF sont A4 ; les annexes passent volontairement en paysage. L'ouverture dans Word repose sur le format OOXML standard, mais de légères différences typographiques restent possibles selon la version et les polices installées. Aucun test sur imprimante physique n'a été effectué.

## Statut

Le kit est techniquement prêt pour revue humaine. Ce statut ne prouve ni l'indexation Google, ni l'adéquation du modèle à un secteur réglementé, ni la conformité juridique d'un projet qui l'utilise.
