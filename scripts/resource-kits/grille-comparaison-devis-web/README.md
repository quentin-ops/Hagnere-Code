# Livre blanc — comparaison de devis web

Le PDF public est généré depuis deux sources versionnées :

- `src/data/quote-comparison.json` pour les coûts, les 40 critères et les notes ;
- `build_pdf.py` pour le contenu éditorial et la mise en page.

Depuis la racine du dépôt :

```bash
python -m venv .venv-pdf
.venv-pdf/bin/pip install -r scripts/resource-kits/grille-comparaison-devis-web/requirements.txt
.venv-pdf/bin/python scripts/resource-kits/grille-comparaison-devis-web/build_pdf.py
```

Le générateur valide avant export le nombre de critères, la somme des poids,
les TCO et les scores de l'exemple. Le fichier est produit dans
`public/ressources/grille-comparaison-devis-web/`.

Contrôle rapide après génération :

```bash
pdfinfo public/ressources/grille-comparaison-devis-web/livre-blanc-comparer-devis-site-internet-3-ans.pdf
pdftotext -layout public/ressources/grille-comparaison-devis-web/livre-blanc-comparer-devis-site-internet-3-ans.pdf -
```
