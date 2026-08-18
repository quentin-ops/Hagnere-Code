# Contre-audit P3 R1 — `securite-saas-b2b`

Date : **25 juillet 2026**  
Auditeurs : **deux relecteurs indépendants en lecture seule**  
Snapshot contrôlé : **P2 R4**  
Verdict : **GO P4, sans autorisation de publication**

## 1. Verdict exécutif

```text
Note indépendante A : 96/100
Note indépendante B : 96/100
Note P3 retenue : 96/100
Incidents ouverts : P0 = 0 ; P1 = 0 ; P2 = 0
Manifeste P2 R4 : 16/16 empreintes conformes
Verdict : GO P4
Publication, déploiement et indexation : non autorisés
```

Les deux relecteurs ont travaillé sur le même gel, sans modifier un fichier.
Ils ont rendu séparément la même note et le même verdict. La somme de chaque
grille a été refaite : **96 points sur 100**.

Ce GO ouvre seulement le build local, le navigateur réel, l'impression et le
rendu de l'image sociale. Il ne constitue ni une validation humaine, ni une
publication, ni une garantie de classement.

## 2. Intégrité du gel

Manifeste autoritaire :

```text
docs/research/manifests/securite-saas-b2b-p2-2026-07-25-r4.sha256
SHA-256 : 51e6a04d92ea9ae24b57b673b5b7a9ec2eab61f4eb785061ae2765838cf244aa
```

Résultat :

- relecteur A : **16/16** au début et à la fin ;
- relecteur B : **16/16** au début et à la fin ;
- aucune dérive du snapshot pendant les contre-audits.

## 3. Incidents R3 reproduits puis fermés

### Charge minimale d'un travail ouvert

Les deux relecteurs ont testé :

- `Number.MIN_VALUE` ;
- `0.001` ;
- plusieurs flottants juste sous `0,01` ;
- `0,01` ;
- plusieurs flottants immédiatement au-dessus.

Sous la borne, le résultat est `incomplete` avec `invalid-hours`, la capacité
différée est `unknown` et l'export indique « `< 0,01 h` ». Aucune de ces
valeurs n'autorise `sign-with-conditions`.

À la borne et juste au-dessus, la charge reste lisible et n'est jamais
arrondie à zéro. La même protection a été rejouée sur une correction avant
signature.

### Récupération d'erreur cohérente

La région dynamique annonce désormais l'erreur exacte de la première famille
invalide que le bouton ouvre. Le panneau s'ouvre et le focus va sur son résumé.
L'annonce, l'action et la destination ne se contredisent plus.

### Taxonomie humaine dans l'export

Le registre exporte six titres `EXIGENCE 1` à `EXIGENCE 6` avec leurs libellés
humains. Les capacités différées reprennent aussi ces libellés. Aucun
identifiant technique, notamment `formal-assurance`, n'est exposé.

## 4. Anciens contournements rejoués

Les protections antérieures restent fermées :

- assurance indépendante satisfaite par une pièce interne, dans chacune des
  six familles ;
- assurance indépendante exigée puis écartée comme non applicable ;
- obligation applicable reportée après signature ;
- contrôle essentiel ou exigence critique reclassé comme non applicable ;
- dates fixes de l'exemple, y compris passage d'année et année bissextile ;
- capacité et charge extrêmes produisant une valeur non finie ;
- état React incompatible après changement de nature ou d'importance ;
- acceptations et informations de report devenues sans objet ;
- mélange entre zéro connu, charge inconnue et charge planifiée.

Un relecteur a parcouru **36 000 combinaisons** d'états sur une famille
essentielle et la famille des autres exigences : aucune signature dangereuse
n'a été obtenue.

## 5. Sources officielles rouvertes

Les sources internationales décisives ont été rouvertes le 25 juillet 2026 :

- [Commission européenne — Data Act explained](https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained) :
  application depuis le 12 septembre 2025, chapitre VI sur le changement de
  service et exigences applicables aux logiciels en tant que service ;
- [NIST SP 1326](https://csrc.nist.gov/pubs/sp/1326/final) : version finale du
  8 juillet 2026, diligence fournisseur couvrant provenance, résilience,
  pratiques fondamentales et rangs de sous-traitance ;
- [GOV.UK — Software Security Code of Practice](https://www.gov.uk/government/publications/software-security-code-of-practice/software-security-code-of-practice) :
  mise à jour du 15 janvier 2026, quatorze principes volontaires applicables
  notamment aux fournisseurs SaaS B2B ;
- [NCSC — Principles Based Assurance](https://www.ncsc.gov.uk/information/principles-based-assurance) :
  logique claim–argument–evidence et niveau d'indépendance proportionné à la
  criticité ;
- [ISO/IEC 27017 édition 2](https://www.iso.org/fr/standard/82878.html) :
  toujours en cours de publication au stade 60.00 ;
- [ISO/IEC 27018:2025](https://www.iso.org/standard/27018) et
  [ISO/IEC 27701:2025](https://www.iso.org/fr/standard/27701) : éditions
  publiées, périmètres respectifs du cloud public traitant des PII et du
  système de management de la vie privée.

La vérification confirme la prudence éditoriale du guide : une norme, un
rapport, un audit ou une auto-évaluation ne prouvent que leur objet, leur
périmètre et leur période. Ils ne certifient pas automatiquement chaque
fonction du SaaS ni sa conformité juridique générale.

## 6. Grilles de notation indépendantes

| Axe | Relecteur A | Relecteur B |
| --- | ---: | ---: |
| Intention et réponse immédiate | 10 | 10 |
| Utilité décisionnelle | 10 | 10 |
| Pédagogie | 10 | 10 |
| Profondeur | 10 | 10 |
| Preuves et sources | 9 | 9 |
| Comparaison internationale | 10 | 10 |
| Originalité | 10 | 10 |
| Style | 9 | 9 |
| Conversion honnête | 9 | 9 |
| SEO et intégration produit | 9 | 9 |
| **Total recalculé** | **96** | **96** |

## 7. Contrôles mécaniques

```text
Tests dédiés : 73/73
Suite indépendante élargie : 133/133
TypeScript : conforme
ESLint ciblé : conforme
Prettier applicatif ciblé : conforme
Suite SEO globale locale : 490/491
```

L'unique échec global reste le reçu historique de
`prioriser-fonctionnalites-mvp-saas`, qui attend une ancienne empreinte de
`src/lib/guides.ts`. Aucun échec n'est attribué à `securite-saas-b2b` et la
suite globale n'est pas déclarée verte.

## 8. Limites et dette non bloquante

- la valeur JavaScript `-0` est refusée, mais apparaît « `-0 h` » dans un
  brouillon explicitement invalide ; elle ne peut autoriser aucune décision ;
- un vrai lecteur d'écran reste nécessaire pour compléter le sondage
  d'accessibilité ;
- le build de production et le rendu réel n'appartiennent pas à P3 ;
- le téléchargement, l'effacement, l'impression et l'image sociale doivent
  encore être rejoués ;
- aucune publication, production, indexation, demande d'indexation, validation
  externe, commit, push ou déploiement n'a été effectué.

## 9. Porte suivante

**GO P4 local.** Le guide reste `ready-for-human-review`,
`noindex, nofollow` et absent du sitemap tant que P4 et la revue humaine ne
sont pas terminées.
