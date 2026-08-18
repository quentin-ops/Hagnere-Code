# Contre-audit P3 froid — `cout-maintenance-site-internet`

Date : **25 juillet 2026**  
Révision : **R3**  
Relecteur indépendant : agent `maintenance_cold_baseline`  
Rapport consolidé par l’agent principal à partir du checkpoint final du
relecteur, sans modification du produit  
Autorité :
`docs/research/manifests/cout-maintenance-site-internet-p2-2026-07-25-r3.sha256`

## 1. Verdict exécutif

**Verdict P3 R3 : GO P4.**

```text
Score strict : 95/100
P0 ouverts : 0
P1 ouverts : 0
P2 ouverts : 0
Incidents P3 R1 fermés : 2/2
Incident P3 R2 fermé : 1/1
Décision : le snapshot peut passer aux contrôles P4 dans un navigateur réel
```

Ce GO autorise uniquement la vérification du rendu, de l’interaction, de
l’accessibilité et de l’impression. Il ne constitue ni une autorisation de
publication, ni un commit, ni un push, ni un déploiement, ni une promesse de
positionnement Google.

## 2. Intégrité du snapshot

Le manifeste P2 R3 a été vérifié avant toute reproduction :
**17/17 empreintes conformes**.

Les deux rapports antérieurs sont restés immuables :

```text
P3 R1 :
e9c649e02f6be29b549f9ef1eed5ac57acd39e90e1691cafb03961aba03833ca

P3 R2 :
6bfeb786d0d1b9d426da37d067b496c1feccc1127d4168f608119468afd04377
```

Les constats portent donc sur le lot R3 gelé, sans dérive entre correction,
tests et contre-audit.

## 3. Fermeture de `CMI-P3-R2-P2-01`

La date d’évaluation est désormais fournie explicitement aux fonctions pures
de qualification et d’export. Le moteur ne consulte pas implicitement
l’horloge.

Une date de preuve n’est valide que si elle :

1. respecte le format ISO et le calendrier ;
2. est antérieure ou égale à la date d’évaluation ;
3. est antérieure ou égale à la date de décision lorsque celle-ci est valide.

La borne du champ est la plus ancienne des dates valides d’évaluation et de
décision. Une date d’évaluation invalide ferme les portes par prudence.

### Reproductions indépendantes

| Évaluation | Décision | Preuve | Résultat observé |
| --- | --- | --- | --- |
| 25/07/2026 | 25/07/2026 | 24/07/2026 | Pass possible |
| 25/07/2026 | 25/07/2026 | 25/07/2026 | Pass possible |
| 25/07/2026 | 25/07/2026 | 26/07/2026 | porte ND, offre non qualifiée |
| 25/07/2026 | vide | 01/01/2099 | porte ND, offre non qualifiée |
| invalide | valide | valide | fermeture prudente |

Pour les dates refusées :

- aucun `PASS démontré` ou `FAIL démontré` n’est affiché ;
- l’offre reste non qualifiée ;
- le montant calculable reste un sous-total non comparable ;
- l’export rend la date fautive `ND` et conserve un verdict non qualifié ;
- le champ porte `aria-invalid="true"` ;
- son `aria-describedby` cible un message visible `role="alert"`.

Le retour du 26 au 25 juillet supprime l’erreur et rétablit la qualification
du dossier complet.

## 4. Tests adversariaux complémentaires

Le relecteur a vérifié au-delà des cas exigés :

- une décision invalide est normalisée à vide par le contrôle HTML ; dans un
  appel direct au moteur, elle ne desserre jamais la borne d’évaluation ;
- une décision future peut représenter une décision planifiée, mais la preuve
  reste plafonnée à la date d’évaluation ;
- si seule l’offre B contient une preuve future, l’offre A reste qualifiée et
  B seule est bloquée ;
- après ouverture du dossier le 25 juillet, avancer l’horloge simulée au
  26 juillet ne change ni la date d’évaluation figée, ni l’export, ni les
  qualifications ;
- les scénarios R1 — besoin vide, sentinelles, preuve d’un caractère, TCO
  incomplet, compensation excessive et indépendance A/B — restent fermés.

Aucun nouveau contournement pertinent n’a été trouvé.

## 5. Contrôles rejoués

```text
Manifeste P2 R3                         17/17 OK
Tests moteur                              25/25 OK
Tests du composant                        16/16 OK
Tests du contrat qualité                  12/12 OK
Guides + données structurées              14/14 OK
Total ciblé                               67/67 OK
TypeScript                                      OK
ESLint ciblé                                    OK
```

La reproduction indépendante moteur et DOM confirme les résultats des tests
du correcteur.

## 6. Score détaillé

| Axe | Note /10 | Motif |
| --- | ---: | --- |
| Intention de recherche | 10 | Réponse immédiate par criticité et périmètre comparable, sans moyenne de marché inventée. |
| Aide à la décision | 10 | Besoin, preuves, incident, TCO, décision et mesures forment un chemin complet et prudent. |
| Pédagogie dirigeant | 9 | Les notions techniques sont traduites en conséquences concrètes ; quelques blocs restent denses. |
| Profondeur | 10 | Logiciel, exploitation, sécurité, contenu, licences, gouvernance et sortie sont reliés au même arbitrage. |
| Preuve et exactitude | 10 | Sources, calculs, preuves structurées et chronologie sont cohérents et reproductibles. |
| Comparaison à périmètre égal | 9 | Les offres incomplètes sont bloquées ; la date locale initiale reste la racine de confiance du modèle auto-déclaré. |
| Originalité et valeur utile | 10 | Registre de preuves, incident, TCO et dossier local à deux offres forment un actif distinctif. |
| Style humain et anti-IA | 9 | Ton concret, objections et limites visibles ; la densité demande parfois une lecture attentive. |
| Conversion et confiance | 9 | CTA unique, conflit d’intérêts, bon et mauvais fit, gratuité et délai non garanti sont cohérents. |
| SEO et produit éditorial | 9 | Métadonnées et structure sont cohérentes ; le rendu P4 et la publication restent séparément à valider. |

Total : **95/100**.

## 7. Limite conservée

La date locale du navigateur au moment de l’ouverture reste la racine de
confiance de ce dossier local et auto-déclaré. Elle n’est pas présentée comme
une preuve horodatée par un tiers. Cette limite est cohérente avec la
destination de l’outil et ne rouvre pas un incident P0, P1 ou P2.

## 8. Porte suivante

Le snapshot est autorisé à entrer en P4 pour :

- build et serveur locaux de production ;
- navigateur réel aux dix largeurs prévues ;
- clavier, zoom, clair et sombre ;
- scénarios positifs et adversariaux du comparateur ;
- copie, remise à zéro et impression physique ;
- rendu de l’image sociale ;
- contrôle du temps de lecture, des robots et de l’exclusion du sitemap.

Aucun état de publication ou de déploiement n’est déduit de ce GO P4.
