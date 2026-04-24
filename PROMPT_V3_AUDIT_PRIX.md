# Audit prix : modèle interne vs grilles publiques

> **Statut : ALIGNÉ** — Le pricing model interne ([src/lib/pricing-model.ts](src/lib/pricing-model.ts)) est désormais calibré sur les prix publics affichés par chaque page service (`/services/*`) et la page `/tarifs`.
>
> Tous les écarts résiduels sont entre **-6% et +4%**, soit dans la marge naturelle d'arrondi.

---

## Convergence finale (avril 2026)

### Forfaits one-shot

| Service | Tier 1 (modèle / public) | Tier 2 (modèle / public) | Tier 3 (modèle / public) |
|---|---|---|---|
| **site-vitrine** | 7 000 / 6 900 € (+1%) | 14 500 / 14 900 € (-3%) | 21 000 / 22 000 € (-5%) |
| **saas** | 15 000 / 15 000 € (0%) | 30 000 / 30 000 € (0%) | 125 000 / 120 000 € (+4%) |
| **outil-interne** | 8 000 / 8 000 € (0%) | 25 000 / 25 000 € (0%) | 80 000 / 80 000 € (0%) |
| **ecommerce** | 15 000 / 15 000 € (0%) | 30 000 / 30 000 € (0%) | 70 000 / 70 000 € (0%) |
| **audit-technique** | 8 000 / 8 000 € (0%) | 18 000 / 18 000 € (0%) | 38 000 / 38 000 € (0%) |

Note : `app-mobile` (12,5/30/60 k€) et `refonte` (19/40/80 k€) n'ont pas de page service publique dédiée, donc pas de cible à matcher.

### Retainers mensuels

| Service | Tier 1 (modèle / public) | Tier 2 (modèle / public) | Tier 3 (modèle / public) |
|---|---|---|---|
| **seo** | Fondations 1 400 / 1 450 € (-3%) | Croissance 2 800 / 2 850 € (-2%) | Premium 4 800 / 4 900 € (-2%) |
| **ads** | Starter 1 800 / 1 800 € (0%) | Scale 3 400 / 3 500 € (-3%) | Premium 4 400 / 4 500 € (-2%) |
| **video** | YouTube Founder 3 500 / 3 500 € (0%) | Motion Brand 5 500 € (extrapolé) | Content DTC 6 500 / 6 900 € (-6%) |
| **maintenance** | Essentiel 2 400 / 2 500 € (-4%) | Scale 6 500 / 6 500 € (0%) | Premium 14 000 / 14 000 € (0%) |
| **securite-rgpd** | DPO Starter 1 200 / 1 200 € (0%) | DPO Scale 3 400 / 3 500 € (-3%) | DPO Enterprise 7 000 € (extrapolé) |

---

## Que faire en cas d'écart résiduel

Si tu trouves un de ces 5-6% gênant, tu as 3 options dans `pricing-model.ts` :

1. **Ajuster les heures** d'un rôle dans le scale concerné (ex : `dev-senior: 75 → 80` pour bumper le prix de 3-4%)
2. **Ajuster la marge risque** localement (ex : `riskMargin: 0.30 → 0.32`)
3. **Laisser flotter** — un écart sous 6% est invisible côté client, et c'est normal vu que le calculateur IA renvoie de toute façon une fourchette « min-max » et pas un prix sec

---

## Profils + taux horaires (rappel)

| Profil | Statut | Coût €/h | **Vendu €/h (×1,6)** |
|---|---|---|---|
| Quentin (Founder) | gérant | 100 (pratiqué) | **160** |
| Nicolas (CTO, 48h/sem) | CDI | 28,8 | **46** |
| Kylian (Dev senior, 35h/sem) | CDI | 27,6 | **44** |
| Frédéric (Dev senior, 35h/sem) | CDI | 30,9 | **50** |
| Arthur (Design lead, 48h/mois) | freelance | 87,5 | **140** |
| Ryan (Dev intégration, 48h/sem) | freelance | 19,2 | **31** |
| Peter (Dev intégration, 35h/sem) | freelance | 18,4 | **30** |

### Marges empilées sur le base sell

- × **0,85** productivité IA (sur les rôles dev/QA uniquement)
- × **1,15 à 1,30** marge risque (selon brique : 0,15 audit · 0,25 standard · 0,30 SaaS/MVP/E-com high · 0,30 refonte/native mobile)
- × **1,15** marge acquisition (Discovery non facturé, frais fixes, commercial)

---

## Cas spéciaux à connaître

### Care Run (page /tarifs) ≠ Maintenance (page /services/maintenance)
Deux offres distinctes côté public, intentionnellement :
- **Care Run / Care+ / Care Pro** sur `/tarifs` (390 / 890 / 2 400 €/mois) = **maintenance légère pour sites vitrines et MVP**, hors modèle interne
- **Maintenance Essentiel / Scale / Premium** sur `/services/maintenance` (2 500 / 6 500 / 14 000 €/mois) = **TMA pro pour SaaS critiques**, calibré dans le modèle

Ces deux gammes coexistent car elles servent deux segments différents (TPE/PME hyper-budget vs ETI). Le calculateur IA propose la gamme Maintenance pro, pas Care.

### Audit technique 4e tier (Tech DD M&A 68 000 €)
Existe sur `/services/audit-technique` mais hors modèle (cas spécial 4 personnes 20-30 j ouvrés, NDA renforcé). Mentionné en notes du brick. Le calculateur IA s'arrête au tier "Deep" 38 000 €.

### SaaS Partenariat 120 000 €
Tier high du modèle = "Partenariat équipe dédiée 3-6 mois". Le prix dépend fortement de la durée (60-180 k€ selon scope). Le calculateur IA donne 120 k€ comme valeur de référence pour 3-4 mois d'équipe dédiée.

---

## Comment éditer un prix

Tout passe par **`src/lib/pricing-model.ts`** :

1. **Salaire qui change** → édite `PROFILES.kylian.monthlyCost = 4500` → toutes les fourchettes se recalculent au prochain build
2. **Tu veux relever les marges** → change `DEFAULT_RISK_MARGIN = 0.30` (au lieu de 0.25)
3. **Une brique paraît sous-évaluée** → augmente les heures dans `ONESHOT_BRICKS["site-vitrine"].scales.high.hours.devSenior`
4. **Le multiplicateur ×1,6 doit changer** → `SELL_MULTIPLIER` en haut du fichier

**Effet** : le prompt IA recalcule sa section CATALOG à chaque build automatiquement. Si tu changes un prix significativement, **n'oublie pas** de mettre à jour aussi :
- `src/components/tarifs/body.ts` (grille tableau lignes 564-712, prix en dur)
- `src/components/estimer-mon-projet/types.ts` (descriptions services calculateur)
- `src/app/services/<service>/page.tsx` (metadata + JSON-LD du tier modifié)
- `src/app/methode/page.tsx` (FAQ exemples)

Pas idéal mais pas critique — un script de génération automatique de ces vues serait l'évolution suivante (effort ~1 jour de dev).
