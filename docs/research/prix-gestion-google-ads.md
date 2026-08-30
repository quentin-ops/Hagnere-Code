# Dossier de recherche — prix-gestion-google-ads

> **Reconstitué le 30 août 2026**, puis **mis à jour le même jour à 23 h 30**
> après la passe de correction des écarts É-01 à É-06. Le dossier précédent
> datait du 31 juillet 2026 et décrivait une version qui n'existe plus :
> 22 minutes de lecture annoncées, douze questions de FAQ, sept familles de
> coût, un écart d'honoraires de 300 €, un incident chiffré à 2 419,20 €. Aucun
> de ces éléments n'est encore dans la page. Le contenu périmé n'a pas été
> conservé ; seule la **structure** de l'ancien dossier (sections A à H, façon
> de citer) est reprise, comme le demande la charte §3.2.
>
> **Source de vérité de ce dossier :** `src/app/guides/prix-gestion-google-ads/page.tsx`
> et les modules qu'il importe, lus le 30 août 2026 à 22 h 47, relus
> intégralement à 23 h 03 après une écriture concurrente (voir l'encadré sous
> le tableau), **puis réécrits et relus une dernière fois entre 23 h 05 et
> 23 h 28** pour corriger les six écarts corrigeables du §0. Empreintes des
> fichiers décrits, après cette dernière écriture :
>
> | Fichier | SHA-256 | Dernière écriture |
> | --- | --- | --- |
> | `src/app/guides/prix-gestion-google-ads/page.tsx` | `0a7b011bd5291155698474233f2e8b6721fc9fbfc939d3432aeaaa6c1a1239e7` | 2026-08-30 23:22:01 |
> | `src/app/guides/prix-gestion-google-ads/content-quality.test.ts` | `05c40a2f81472d37425d233a22a87a43e8ff44696dfc50f08787785d44d511d3` | 2026-08-30 23:28:06 |
> | `src/app/guides/prix-gestion-google-ads/opengraph-image.tsx` | `e7d63c79689f41fb99942c3442cb2f2b1bcb807d125d536c4070faabfde9034c` | 2026-08-18 11:17 |
> | `src/components/guides/GoogleAdsQuoteComparator.tsx` | `67937ae088b53c857a17872686c452ef02464cc3c8819bff1303db2872ac9c85` | 2026-08-30 22:30:40 |
> | `src/lib/google-ads-quote-comparison.ts` | `13b8c4f4345e9ab5fdc83489fedd350dc26bd455fcd8cd3bbe1dc6fc93e8b15a` | 2026-08-18 11:17 |
> | `src/components/publicite-en-ligne/sections/pricing.ts` | `fd64fb1169004637e525cac6b39b6f3cddad8a5600d6eb9aaa9afa894594a3bb` | 2026-08-28 10:23 |
> | `src/app/guides/guides-price-consistency.test.ts` | `5f3a9931325005b12f924087bdf6601c588a315087c6c42006129ad411aba12d` | — |
>
> Si l'une de ces empreintes a changé, ce dossier doit être revérifié avant
> d'être invoqué comme socle de preuves.
>
> **Écriture concurrente pendant la reconstitution.** `page.tsx` a été réécrit
> par un autre intervenant à 22 h 57 : 152 octets, une seule modification de
> fond. Les trois entrées vendeurs de `legalSources` portent désormais
> « relevé le 30 juillet 2026 **et revérifié le 30 août 2026** », et la clause
> « Limites de ce guide » « relevés le 30 juillet 2026 **et revérifiés un par un
> le 30 août 2026** ». La page entière a été relue ligne à ligne après cette
> écriture : aucun montant, aucune formule, aucune section, aucune source et
> aucune phrase du corps n'ont bougé. Les deux propriétés touchées sont rendues
> **hors** de l'élément `<article>` (`guide-premium-layout.tsx`, lignes 660 et
> 664, après la fermeture de l'article à la ligne 648) : le corps mesuré au §H1
> est donc inchangé.
>
> **Territoire.** La reconstitution du 30 août à 22 h 47 n'avait modifié aucun
> autre fichier : ni la page, ni les tests, ni le registre. La passe de
> correction de 23 h 05 a, elle, écrit exactement trois fichiers —
> `page.tsx`, `content-quality.test.ts` et la seule entrée
> `prix-gestion-google-ads` de `src/lib/guides.ts` — plus ce dossier. Rien
> d'autre.

---

## 0 — Les sept écarts, et ce qui en a été fait

Sept écarts avaient été relevés le 30 août 2026 à 22 h 47, signalés et non
corrigés. La passe de 23 h 05 en a traité six ; le septième ne se corrige pas
dans le dépôt. Aucun des vingt-huit totaux du fil rouge n'était en cause : ils
ont tous été refaits à la main au §G et tombent juste. Ce que les écarts
attaquaient, c'était le **cadrage** — une source mal localisée, une assiette qui
change sans le dire, un renvoi vrai de la règle et faux des montants, un arrondi
présenté comme une égalité, deux grandeurs confondues, deux fenêtres mélangées.

| Écart | Issue retenue | État |
| --- | --- | --- |
| É-01 source mal localisée | corriger l'article | **corrigé** |
| É-02 assiette du §06 | corriger l'article (annonce explicite) | **corrigé** |
| É-03 renvoi interne faux | corriger l'article | **corrigé** |
| É-04 arrondi présenté avec `=` | corriger l'article | **corrigé** |
| É-05 seuils croisant les honoraires | corriger l'article | **corrigé** |
| É-06 deux fenêtres mélangées | corriger l'article | **corrigé** |
| É-07 production en retard | hors dépôt | **reste à faire : déployer** |

### É-01 — Une source citée ne portait pas l'affirmation qu'elle ancrait

L'article écrivait deux fois, au §02 (encart ambre) et en FAQ n° 2, que
« l'aide Google distingue les comptes servis par Google France SARL de ceux
servis depuis l'Irlande », et ancrait cette phrase sur
`https://support.google.com/google-ads/answer/2375370?hl=fr`. La même
formulation était reprise dans la liste `legalSources`.

Cette page a été rouverte trois fois lors de la reconstitution, **puis deux fois
de plus le 30 août 2026 lors de la passe de correction** : avec `?hl=fr`, puis
en interrogeant explicitement sa liste de pays. Titre réel : « Taxes dans votre
pays ». Elle ouvre sur « Des taxes ou la taxe sur la valeur ajoutée (TVA)
peuvent s'appliquer à votre entreprise en fonction de sa situation
géographique », range ensuite les taxes pays par pays et nomme pour chacun
l'entité qui gère le compte : « Votre compte est géré par Google Ireland Ltd. »,
« Votre compte est géré par Google Asia Pacific Pte. Ltd. », « Votre compte est
géré par Google Canada ». Les pays servis par sa liste, relevés le 30 août 2026 :
Ouganda, Égypte, Cambodge, Argentine, Colombie, Chili, Taïwan, Chine, Espagne,
Malaisie, Pologne, Irlande, Afrique du Sud, Nigeria, Thaïlande, Royaume-Uni,
Cameroun, Italie, États-Unis/Canada, Bangladesh, Singapour. **La France n'y
figure pas, et l'expression « Google France SARL » n'apparaît nulle part.**

**Issue retenue : corriger l'article, garder le localisateur.** La page est bien
la page des taxes de l'aide Google Ads ; c'était la phrase qui lui faisait dire
autre chose. Le §02 écrit maintenant :

> La page « Taxes dans votre pays » de l'aide Google Ads range le traitement de
> la TVA pays par pays et nomme, pour chacun, l'entité qui gère le compte —
> « Votre compte est géré par Google Ireland Ltd. » Rouverte le 30 août 2026,
> sa liste de pays n'ouvre aucune section France : elle ne tranche donc rien
> pour un compte français.

La FAQ n° 2 et l'entrée `legalSources` disent désormais la même chose, et
l'entrée de source porte le titre réel de la page. Le déplacement vers
`https://support.google.com/a/answer/1231286?hl=fr`, envisagé pendant la
reconstitution, a été **écarté** : cette adresse redirige aujourd'hui vers
`knowledge.workspace.google.com/admin/billing/taxes-in-your-region`, elle relève
de l'aide Administrateur Google Workspace et non de Google Ads, et elle n'a pas
été ouverte directement. Elle reste une piste, jamais une preuve. Un test
verrouille les deux bouts : `n'attribue à l'aide Google que ce que sa page
porte vraiment`.

### É-02 — Le §06 changeait l'assiette du cas sans le dire

Le fil rouge tient sur **5 000 € HT de média par mois** du §01 au §05. Le
premier incident du §06 ouvrait par : « Hélène règle un budget quotidien moyen
de 200 € et compte trente jours : 6 000 € pour le mois. » Le cas passait à
**6 000 € HT par mois**, soit +20 %, sans transition ni mention.

Tous les montants de l'incident (120 €, 1 440 €, 6 080 €, 6 120 €, 6 201,60 €,
81,60 €, 979,20 €) étaient arithmétiquement exacts **sur cette nouvelle base**
— vérification au §G8. Ce n'étaient simplement plus les nombres du fil rouge.

**Issue retenue : corriger l'article en annonçant le changement**, plutôt que de
ramener l'incident sur 5 000 € — un budget quotidien moyen de 166,67 € aurait
remplacé un nombre rond par un arrondi, et déplacé sept montants exacts. Le §06
ouvre maintenant par :

> Cet incident quitte la base du fil rouge : Hélène règle un budget quotidien
> moyen de 200 € et compte trente jours, soit 6 000 € pour le mois — un
> cinquième au-dessus des 5 000 € des sections précédentes. Tous les montants
> qui suivent portent sur cette base.

Le test vérifie que cette annonce précède le premier montant de l'incident, et
que 6 000 ÷ 5 000 = 1,2.

### É-03 — Un renvoi interne qui ne disait pas vrai

Même paragraphe : « Le coût réglementaire n'en est pas un : il vaut 120 € sur
6 000 € de média, 1 440 € sur douze mois, **et le §02 l'annonçait déjà.** »

Le §02 annonce le taux de 2 % et, sur son propre tableau, **100 € par mois et
1 200 € sur douze mois**. Il n'annonçait ni 120 € ni 1 440 €. Le renvoi était
vrai de la règle, faux des montants.

**Issue retenue : corriger l'article.** Le passage écrit maintenant les deux
assiettes côte à côte :

> Le coût réglementaire n'en est pas un : le §02 en pose le taux de 2 % et le
> chiffre à 100 € par mois sur les 5 000 € du fil rouge, soit 1 200 € sur douze
> mois ; sur les 6 000 € d'ici, il vaut 120 € par mois et 1 440 € sur l'année.

Le test recalcule 5 000 × 2 % = 100 et son empilement sur douze mois = 1 200,
exige la phrase, et interdit le retour de « et le §02 l'annonçait déjà ».

### É-04 — Un arrondi présenté avec un signe d'égalité

Bloc de formules du §03, avant correction :

```text
Hybride contre pourcentage
500 + 0,08 × M = 0,15 × M   →   M = 7 143 € HT par mois
```

La racine exacte est `500 ÷ 0,07 = 7 142,857142…`. Les trois autres seuils du
même bloc (6 000 €, 5 000 €, 9 heures) sont exacts au centime. Seul celui-ci
était un arrondi, et rien ne le signalait.

**Issue retenue : corriger l'article.** La ligne publie maintenant la racine
exacte avant l'arrondi, et le signe d'approximation :

```text
500 + 0,08 × M = 0,15 × M   →   M = 500 ÷ 0,07 ≈ 7 143 € HT par mois
```

Le test exige cette écriture et interdit désormais la chaîne
`M = 7 143 € HT`.

### É-05 — Les quatre seuils croisaient les honoraires, pas le coût du tableau

Le §03 publie un tableau de **coût connu** à 3, 6 et 12 mois, puis, sous le
titre « Les quatre points où le classement s'inverse », quatre équations qui ne
comparaient que les **honoraires mensuels**. Le lecteur qui lisait le tableau
puis l'équation croyait lire deux fois la même grandeur.

Les frais de lancement diffèrent d'une offre à l'autre (750, 900, 800, 800 €).
Sur douze mois, lancement compris, les croisements réels tombent ailleurs :

| Croisement | Seuil en honoraires | Croisement réel à 12 mois | Écart |
| --- | ---: | ---: | ---: |
| Pourcentage contre forfait | 6 000 € | **5 916,67 €** | 1,39 % |
| Hybride contre forfait | 5 000 € | **4 947,92 €** | 1,04 % |
| Hybride contre pourcentage | ≈ 7 143 € | **7 023,81 €** | 1,67 % |
| Temps passé contre forfait | 9 h | **8,96 h** | 0,46 % |

**Issue retenue : corriger l'article, sans retirer les quatre équations.** Le
§03 nomme d'abord la grandeur comparée :

> Ces quatre seuils comparent les **honoraires mensuels**, et non le coût connu
> du tableau ci-dessus : le lancement, lui, va de 750 à 900 € selon l'offre.

puis publie les croisements réels sous le bloc de formules, avec la
démonstration que le tableau portait déjà :

> Lancement compris, sur douze mois, ces croisements se déplacent de moins de
> 2 % chacun : le pourcentage ne dépasse le forfait qu'à 5 916,67 €, l'hybride
> dépasse le forfait dès 4 947,92 €, il repasse sous le pourcentage à
> 7 023,81 €, et le temps passé rejoint le forfait à 8,96 heures. Le tableau
> ci-dessus le montre déjà : à 5 000 €, forfait et hybride facturent tous deux
> 900 € par mois, et pourtant l'hybride coûte 80 000 € sur douze mois contre
> 79 950 € au forfait, à cause des 50 € qui séparent leurs lancements.

Les trois nouveaux montants sont **dérivés** par dichotomie dans le test, sur un
coût connu à douze mois empilé mois par mois et non arrondi (`connuDouzeMoisBrut`
et `croisementsDouzeMois`) : ils entrent au balayage inverse par ce calcul, pas
en dur. Dérivation à la main au §G4.

### É-06 — Le §05 mélangeait deux fenêtres sans le dire

« Hélène retient 2 500 € de marge par client **sur douze mois**. Douze clients
valent 30 000 € ; rapportés aux 60 prospects qualifiés de la période, ils fixent
un plafond de 500 € de coût connu par prospect. Le coût réel vaut 22 350 € ÷ 60
= 372,50 € : il reste 127,50 € par prospect. »

Le numérateur (30 000 €) court sur **douze mois par client**. Le dénominateur
(22 350 €, 60 prospects) porte sur **trois mois**. Les 127,50 € n'étaient donc
pas un solde de trésorerie à trois mois. Le calculateur, lui, avertissait de ce
décalage dans son texte d'aide ; la section qui publie le chiffre ne le disait
pas.

**Issue retenue : corriger l'article.** La section ajoute :

> Les deux nombres ne portent pas sur la même durée : la marge court sur douze
> mois par client, quand les coûts comparés en couvrent trois. Ces 127,50 € ne
> sont donc pas un solde de trésorerie à la fin du trimestre, mais l'écart
> entre une marge encore à encaisser et une dépense déjà faite.

L'arithmétique n'a pas bougé : elle était exacte, seul son cadrage manquait.

### É-07 — L'état publié ne correspond pas à ce que sert la production

Le registre `src/lib/guides.ts` déclare `editorialStatus: "published"` et,
depuis cette passe, `dateModified: "2026-08-30T23:22:01+02:00"` — l'heure réelle
de la dernière écriture de `page.tsx`, vérifiée à l'horloge, jamais une heure
ronde inventée. La date visible sur la page (« Mis à jour le 30 août 2026 ») et
le JSON-LD `Article` disent désormais la même chose, et `readTimeMin` est passé
de 15 à **17**, mesure canonique à l'appui.

`https://hagnere-code.ai/guides/prix-gestion-google-ads`, consultée le
30 août 2026, servait encore la version antérieure : mention « Mis à jour le
31 juillet 2026 », 32 minutes de lecture annoncées, douze questions de FAQ.

**Cet écart ne se corrige pas dans le dépôt** : il se ferme par un déploiement.
Il reste ouvert, en tête du §K. Aucune conclusion sur l'indexation ne peut être
tirée tant qu'il l'est.

### Observations mineures, traitées en passant

- Le bloc « Transparence » du §08 datait les prix vendeurs du seul
  30 juillet 2026 alors que la clause « Limites de ce guide » annonçait une
  revérification au 30 août 2026. Les trois pages vendeurs ayant été rouvertes
  une par une pendant la passe de correction (§D2), les deux mentions disent
  maintenant la même chose : « relevés le 30 juillet 2026 et revérifiés le
  30 août 2026 ».
- L'entrée `prix-gestion-google-ads` de `src/lib/guides.ts` portait deux
  insécables **littéraux** (`cardDescription`, `heroTitle`) là où le reste du
  registre écrit la séquence d'échappement `\u00a0`. Corrigé à l'identique du
  rendu.
- FAQ n° 1 : « 5 000 € HT de média par mois côtoient 750 à 1 000 € HT
  d'honoraires : confondre les deux fait passer la facture mensuelle de 900 € à
  5 900 € ». Le calcul est juste (5 000 + 900), mais 900 € n'est pas une borne
  de la fourchette qui vient d'être annoncée : c'est l'honoraire du forfait. Non
  corrigé, signalé.

---

## A — Identité, intention et frontière de l'article publié

### A1. Identité éditoriale, relevée dans le registre le 30 août 2026

| Champ | Valeur lue dans `src/lib/guides.ts` |
| --- | --- |
| Slug | `prix-gestion-google-ads` |
| Requête centrale | prix gestion Google Ads |
| Titre SEO | Prix de la gestion Google Ads en 2026 : 4 modèles comparés |
| Titre de carte | Prix d'une gestion Google Ads |
| H1 | Combien coûte vraiment la gestion de Google Ads ? |
| Meta description | Gestion Google Ads : forfait, pourcentage, hybride ou temps passé, le coût complet à 3, 6 et 12 mois et le budget média où l'ordre s'inverse. |
| Catégorie | Google Ads & acquisition |
| `editorialStatus` | `published` |
| `datePublished` | `2026-07-31T00:24:23+02:00` |
| `dateModified` | `2026-08-30T23:22:01+02:00` |
| `readTimeMin` | 17 |
| Images d'article | trois `.webp`, ratios 16:9, 4:3 et 1:1 |
| Indexation | `guideRobots()` : indexable **seulement** si `isGuidePublished` **et** `isSearchIndexingEnabled(NEXT_PUBLIC_ENV, VERCEL_ENV)`. En build local ou de préproduction, `index: false, follow: false`. |

### A2. Décision que le lecteur doit pouvoir prendre

L'article publié vise huit capacités, dans cet ordre :

1. séparer sur un devis le budget média, le coût réglementaire, les honoraires,
   le lancement, la mesure et le temps interne — les **six lignes** du §02 ;
2. lire trois totaux différents : décaissement externe HT, décaissement TTC,
   coût connu ;
3. comparer forfait, pourcentage, hybride et temps passé à 3, 6 et 12 mois, à
   contenu supposé identique ;
4. trouver le budget média où le classement des honoraires s'inverse ;
5. chiffrer, en heures et en euros, le travail que l'offre la moins chère laisse
   à l'équipe ;
6. ne pas confondre CPC, CPA, CPL qualifié et coût connu par client ;
7. borner un contrat : assiette, plafond, propriété du compte, sortie ;
8. reconnaître les cas où l'offre Hagnéré Code est disproportionnée.

### A3. Réponse courte réellement publiée

Les trois premiers paragraphes du §01 (contrôlés entre 120 et 180 mots par le
test) affirment, dans l'ordre : trois prix vendeurs relevés (90, 450, 450 € HT
par mois), le nôtre (1 800 € HT), un facteur vingt entre les extrêmes, puis le
déplacement de la question vers le coût connu sur douze mois — 78 300 à
81 200 €, 2 900 € d'écart, 61 200 € de média chargé.

### A4. Ce que l'article ne promet pas

Repris de la clause « Limites de ce guide » et du bloc « Transparence »
réellement publiés :

- aucune moyenne de marché — la statistique de tête l'écrit : « Moyenne de
  marché : Aucune » ;
- aucune représentativité : « Quatre pages publiques ne forment pas une
  statistique du marché français » ;
- aucune prévision de clics, de prospects, de clients ou de chiffre d'affaires ;
- aucun avis fiscal : « le calculateur applique un taux de TVA unique par
  simplification » ;
- aucune fraîcheur implicite : « Les prix vendeurs cités ont été relevés le
  30 juillet 2026 et revérifiés un par un le 30 août 2026, notre grille le
  28 août 2026 ; ils changent » ;
- aucun engagement : « seul un devis signé engage » ;
- aucune revendication de résultat client : l'article ne cite aucun dossier
  réel et le dit trois fois (badge, hero, encart du fil rouge).

### A5. Contrat de langage tenu par la page

- « média » = la dépense de diffusion ; « honoraires » = la rémunération du
  prestataire ; **« coût connu »** = décaissement externe HT + TVA non
  récupérable + heures internes valorisées. Le test interdit explicitement
  « total payé » pour désigner cette grandeur.
- « conversion » n'est jamais synonyme de prospect ni de client : le §05 le pose
  comme thèse et l'appuie sur la documentation Google.
- Les mots de cabinet sont bannis par test : « périmètre », « livrable »,
  « gouvernance », « dispositif » ne figurent pas dans le corps.
- Les personnes sont nommées par leur métier : dirigeante, chargé d'affaires,
  comptable, expert-comptable, commercial. « Le prestataire » et
  « l'intervenant » sont interdits par test.

---

## B — Contrat de réponse et architecture réellement publiée

### B1. Les huit sections, telles qu'elles sont rendues

| N° | `id` | Titre publié | Fonction |
| --- | --- | --- | --- |
| 01 | `reponse` | Ce que les pages publiques affichent, et ce qu'elles ne comparent pas | Réponse directe, échantillon daté, ouverture du fil rouge |
| 02 | `cout-complet` | Que payez-vous vraiment quand vous payez « la gestion » ? | Les six lignes, les trois totalisations, coût réglementaire et consentement |
| 03 | `modeles` | Forfait, pourcentage ou hybride : à partir de quel budget l'ordre s'inverse-t-il ? | Tableau des quatre offres, décompte à la main, quatre seuils |
| 04 | `temps-interne` | Le devis le moins cher laisse-t-il du travail à votre équipe ? | Division heures/écart d'honoraires, puis calculateur |
| 05 | `indicateurs` | Du CPA à 102 € au coût réel d'un client | Quatre coûts unitaires, seuil de marge, hypothèse basse |
| 06 | `incidents` | Ce qui rate, et ce que ça coûte | Trois incidents déduits, jamais observés |
| 07 | `sortie` | Que gardez-vous si vous changez d'agence ? | Propriété du compte, loi Sapin, contrôle de dix minutes |
| 08 | `decision` | Choisir le niveau d'aide, ou ne pas lancer | Grille par tranche de budget, mauvais cas d'usage, transparence |

Le sommaire annonce ces huit entrées avec des libellés courts distincts
(« Réponse », « Le coût », « Bascule », « Temps interne », « Mesurer »,
« Incidents », « Sortie », « Décider »).

### B2. FAQ réellement publiée

**Neuf** questions, en trois catégories de trois :

1. *Facture et budget* — budget compris dans les honoraires ; HT ou TTC ; le
   coût réglementaire de 2 % s'ajoute-t-il ?
2. *Contrat et rémunération* — assiette d'un pourcentage ; frais de lancement ;
   durée d'engagement.
3. *Compte, mesure et autonomie* — propriété du compte ; valeur d'un audit
   gratuit ; gestion en interne.

Le sous-titre de la FAQ annonce bien « Neuf réponses courtes ». Chaque réponse
tient entre 40 et 120 mots (test), chaque question se termine par un point
d'interrogation précédé d'un insécable, et la symétrie « Non./Oui, mais » est
plafonnée à 34 % des réponses.

### B3. Empreinte propre à ce sujet

- un fil rouge nommé, annoncé comme construit **avant** son premier chiffre ;
- quatre offres suivies bout en bout, sur trois horizons ;
- un bloc de formules qui résout quatre seuils au lieu de les asséner ;
- une division unique — écart d'honoraires ÷ coût horaire — qui devient la
  statistique de tête « Seuil de charge interne : 3 h/mois » ;
- un comparateur client à contenu supposé identique, ouvert sur les mêmes
  valeurs que le tableau du §03 ;
- trois incidents chiffrés dont chaque titre porte un montant ;
- un aveu commercial au conditionnel (§08) qui chiffre ce que le forfait fixe
  coûterait à l'agence sur un gros budget.

### B4. Conventions de publication constatées

- données structurées : `Article` et `BreadcrumbList` **seulement** ; le test
  interdit `FAQPage`, `HowTo`, `Offer`, `Review`, `AggregateRating`, `Product`
  et `wordCount` ;
- FAQ rendue par le layout, sans balisage FAQ ajouté par la page ;
- deux CTA suivis, tous deux `placement="article_end_inline"` ;
- trois liens sortants concurrents, tous en `rel="nofollow noreferrer"` ;
- aucun artefact téléchargeable ;
- trois liens internes vers des guides publiés
  (`automatiser-processus-metier`, `signes-besoin-logiciel-metier`,
  `pourquoi-site-pas-visible-google`, `cahier-des-charges-saas`), aucun vers
  lui-même.

---

## C — Frontières internes et cannibalisation

### C1. Guides voisins et frontière tenue par la version publiée

| Guide voisin | Ce qu'il garde | Frontière tenue ici |
| --- | --- | --- |
| `budget-google-ads-pme` | quel budget média risquer | ici : le coût de la **gestion**, budget média posé en hypothèse |
| `calculer-cout-par-lead-google-ads` | calculer et interpréter un CPL | ici : le CPL n'est qu'un des quatre dénominateurs du §05 |
| `choisir-agence-google-ads` | méthode de sélection | ici : normalisation financière et contractuelle |
| `audit-google-ads-que-verifier` | contrôles techniques du compte | ici : ce que coûte un audit et ce qu'il remet |
| `suivi-conversions-google-ads` | implémenter la mesure | ici : le coût de la mesure, ligne 5 du §02 |
| `pourquoi-site-pas-visible-google` | la moitié organique | cité explicitement au §08 comme complément |
| `cahier-des-charges-saas` | lecture d'un devis | cité au §08 comme grille applicable à une offre média |

### C2. Règles anti-cannibalisation constatées dans la page

- Le titre, le H1 et la meta portent sur le **prix de la gestion**, jamais sur
  le budget média optimal.
- Le calculateur compare des structures d'honoraires ; il ne recommande aucun
  budget publicitaire.
- Le §05 explique les quatre dénominateurs pour éviter une décision de prix
  faussée, sans reprendre la méthode d'implémentation de la mesure.
- Le §07 borne la question du choix d'agence à la propriété, la facturation et
  la sortie.

---

## D — Fiche de preuves : les faits sourcés

**Méthode de cette reconstitution.** Les quinze adresses citées par l'article
ont été **rouvertes une par une le 30 août 2026**. Pour chacune : le titre réel
de la page, la phrase utile telle qu'elle s'y trouve, et la comparaison avec ce
que l'article en dit. Aucune vérification n'est simulée. Aucune date de
consultation n'est reprise de l'ancien dossier.

**Ce que cette relecture ne prouve pas :** l'article date ses relevés vendeurs
du **30 juillet 2026**, avec une revérification annoncée au **30 août 2026**
depuis l'écriture de 22 h 57, et sa propre grille du **28 août 2026**. Je n'ai
pas pu vérifier l'état de ces pages au 30 juillet ni au 28 août — seulement leur
état au 30 août 2026. Le fait que les montants concordent aujourd'hui rend le
relevé d'origine plausible ; il ne le prouve pas.

### D1. Sources primaires Google, CNIL et Légifrance

| ID | Localisateur | Ce que la source dit, relevé le 30/08/2026 | État |
| --- | --- | --- | --- |
| G-01 | `https://support.google.com/google-ads/answer/10486536?hl=fr` — « Présentation des budgets » | « Budget quotidien moyen multiplié par 2 (pour la plupart des campagnes) » ; « Budget quotidien moyen multiplié par 30,4 (pour la plupart des campagnes) » ; « 30,4 correspond au nombre moyen de jours dans un mois ». Aucune date de mise à jour affichée. | **Rouverte, concordante** |
| G-02 | `https://support.google.com/google-ads/answer/10486938?hl=fr` — « Présentation des budgets totaux de campagne » | Période minimale de trois jours, jusqu'à 90 jours pour la plupart des campagnes ; « le montant que vous aurez à payer ne dépassera jamais votre budget total » ; « Il n'y a pas de limite de dépense quotidienne ». | **Rouverte, concordante** |
| G-03 | `https://support.google.com/google-ads/answer/9750227?hl=fr` — « Suppléments dans certaines juridictions » | « Depuis le 1er mai 2021, des Coûts d'exploitation liés à la réglementation de 2 % sont ajoutés à votre facture », section « Coûts d'exploitation liés à la réglementation en France ». | **Rouverte, concordante** |
| G-04 | `https://support.google.com/google-ads/answer/2375370?hl=fr` — « Taxes dans votre pays » | Cinq lectures au total, dont deux le 30/08/2026 pendant la passe de correction : « Des taxes ou la taxe sur la valeur ajoutée (TVA) peuvent s'appliquer à votre entreprise en fonction de sa situation géographique » ; puis, pays par pays, « Votre compte est géré par Google Ireland Ltd. », « … par Google Asia Pacific Pte. Ltd. », « … par Google Canada ». **Aucune section France dans sa liste de pays ; « Google France SARL » n'y figure pas.** | **Rouverte — l'article dit maintenant ce qu'elle dit (É-01 corrigé)** |
| G-05 | `https://support.google.com/google-ads/answer/2375371?hl=fr` | « La facturation consolidée n'est pas disponible pour les agences média et ne sera plus proposée aux annonceurs en France (Loi Sapin). » Aucune explication supplémentaire du cadre Sapin sur cette page. | **Rouverte, concordante** |
| G-06 | `https://support.google.com/google-ads/answer/7456530?hl=fr` | « le compte client d'origine et son historique restent intacts » ; « Le compte administrateur ne dispose pas par défaut du statut d'administrateur propriétaire du compte client lorsque vous l'associez à un compte Google Ads existant. » | **Rouverte, concordante** |
| G-07 | `https://support.google.com/google-ads/answer/7456532?hl=fr` — « Comptes administrateur : à propos de la propriété des comptes client » | « Si un administrateur crée un compte, il en devient automatiquement propriétaire. » ; « En revanche, s'il associe un compte existant, il ne sera pas propriétaire par défaut » ; dissociation possible par le client. | **Rouverte, concordante** |
| G-08 | `https://support.google.com/google-ads/answer/11461796?hl=fr` | Principales : « comptabilisées dans la colonne "Conversions" de vos rapports et utilisées pour les enchères ». Secondaires : « utilisées qu'à des fins d'observation […] mais pas pour les enchères ». | **Rouverte, concordante** |
| G-09 | `https://support.google.com/google-ads/answer/2454137?hl=fr` — « Consulter l'historique de votre compte » | « L'historique des modifications vous permet d'examiner les modifications que vous avez apportées à votre campagne au cours des **deux dernières années**. » | **Rouverte, concordante** |
| J-01 | `https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000031011011` — art. 20, loi n° 93-122 du 29 janvier 1993 | Version **en vigueur depuis le 8 août 2015**. « Tout achat d'espace publicitaire, sur quelque support que ce soit, ou de prestation ayant pour objet l'édition ou la distribution d'imprimés publicitaires ne peut être réalisé par un intermédiaire que pour le compte d'un annonceur et dans le cadre d'un contrat écrit de mandat. » L'article poursuit sur la rémunération détaillée, les rabais et avantages portés sur la facture, et la communication de la facture du vendeur à l'annonceur. | **Rouverte, concordante** |
| P-01 | `https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/FAQ` | Date de mise à jour affichée : **29 avril 2026** — exactement celle que l'article annonce. « les traceurs utilisés à des fins de reciblage publicitaire nécessitent le consentement des utilisateurs préalablement à leur utilisation » ; le refus doit se manifester « par une action aussi simple que celle permettant d'accepter », avec un bouton « tout refuser » « au même niveau et avec le même aspect que le bouton "tout accepter" ». | **Rouverte, concordante** |

### D2. Échantillon de pages vendeurs — relevé de l'article vs relevé du 30/08/2026

Trois pages commerciales, citées en `nofollow`. L'échantillon n'est ni
aléatoire, ni exhaustif, ni pondéré : il sert à montrer l'hétérogénéité, jamais
à produire une moyenne. L'article l'écrit deux fois.

| ID | Localisateur | Ce que l'article annonce (relevé du 30/07/2026) | Ce que la page affichait le 30/08/2026 | État |
| --- | --- | --- | --- | --- |
| V-01 | `https://www.ms-web.fr/creation-et-gestion-de-campagne-google-ads/` | création 149 € HT ; gestion à partir de 90 € HT/mois | « € HT149 » pour la création ; « A partir de € HT90/mois » pour la gestion, avec optimisation deux fois par mois et reporting mensuel | **Rouverte, montants identiques** |
| V-02 | `https://www.ad-works.fr/tarifs` | lancement à partir de 750 € HT ; gestion à partir de 450 € HT/mois | « A partir de 750€ HT » pour le paramétrage ; « Dès 450€ HT/mois » pour la gestion ; un audit « Gratuit* » y figure aussi | **Rouverte, montants identiques** |
| V-03 | `https://www.dpmedias.com/google-ads` | audit 500 € HT ; création de compte 250 € HT ; gestion à partir de 450 € HT/mois ; et sur la même page un audit gratuit « synthétique » | Audit Google Ads 500 € ; création compte 250 € ; suivi mensuel « À partir de 450 €/mois » ; audit gratuit décrit comme « audit Google Ads gratuit dans un format synthétique » | **Rouverte, montants identiques** |

L'affirmation du §01 « un facteur vingt entre les deux extrêmes » est donc
adossée à deux relevés concordants : 1 800 ÷ 90 = 20 exactement.

**Sur la mention « revérifié le 30 août 2026 ».** Les trois pages ont été
rouvertes le 30 août 2026 pendant la reconstitution, **puis une seconde fois
pendant la passe de correction de 23 h**, une par une. Relevé de cette seconde
lecture, mot pour mot : MS Web affiche « € HT149 » pour la création et
« A partir de € HT90/mois » pour la gestion ; AdWorks « A partir de 750€ HT »
pour le paramétrage, « Dès 450€ HT/mois » pour la gestion, et un audit
« Gratuit* » ; DP Medias « Audit Google Ads » à 500 €, « Création compte Google
Ads » à 250 €, « Suivi mensuel & optimisation » « À partir de 450 €/mois », plus
un « audit Google Ads gratuit dans un format synthétique ». Aucun montant n'a
bougé. Ce dossier atteste donc de **deux** relectures qu'il a lui-même faites à
cette date ; il n'atteste d'aucune autre.

Deux détails relevés en passant, qui ne changent aucun chiffre publié :

- AdWorks propose aussi, aujourd'hui, un audit « Gratuit* » avec astérisque non
  explicité sur la page. L'article n'attribue l'audit gratuit qu'à DP Medias,
  ce qui reste exact, mais la pratique n'est pas isolée.
- Le bloc « Transparence » du §08 datait les prix vendeurs du seul
  30 juillet 2026, alors que la clause « Limites de ce guide » annonçait une
  revérification au 30 août 2026. **Corrigé** : les deux mentions écrivent
  maintenant « relevés le 30 juillet 2026 et revérifiés le 30 août 2026 ».

### D3. Prix maison — double localisateur

| ID | Localisateur | Relevé | État |
| --- | --- | --- | --- |
| H-PRIX-1 | `https://hagnere-code.ai/services/publicite-en-ligne` | Audit Ads 1 500 € HT one-shot (rapport 25-40 pages + roadmap 90 jours, restitution 90 min) ; Starter 1 800 € HT/mois, budget média 8-20 k€/mois ; Scale 3 500 € HT/mois, 20-60 k€/mois ; Premium 4 500 € HT/mois, 60-150 k€/mois | **Rouverte le 30/08/2026, concordante** |
| H-PRIX-2 | `src/components/publicite-en-ligne/sections/pricing.ts` | mêmes quatre montants dans `<span class="amount">`, même seuil « budget media 8 à 20 k€/mois » | **Lue le 30/08/2026, concordante** |

La page publiée et le fichier source disent la même chose. Deux tests
verrouillent ce fil :

- `content-quality.test.ts` extrait les quatre `amount` du fichier de grille et
  exige `["1 500 €", "1 800 €", "3 500 €", "4 500 €"]`, puis retrouve les mêmes
  montants dans la prose rendue ;
- `src/app/guides/guides-price-consistency.test.ts` compare le source du guide à
  celui de la grille et échoue si l'un des cinq montants diverge.

La page porte ces trois phrases dans une constante `PRIX_MAISON_PUBLIES`
réellement rendue au lecteur — et non dans un commentaire, comme c'était le cas
dans une version antérieure où le contrôle croisé vérifiait un commentaire.

### D4. Sources citées que je n'ai pas pu rouvrir

**Aucune.** Les quinze adresses citées par l'article ont toutes répondu le
30 août 2026. G-04 fait exception d'une autre nature : la page s'ouvre, mais ne
contient pas l'affirmation qu'elle ancre (É-01).

Deux limites doivent rester écrites :

1. Je n'ai pas pu vérifier l'état des pages vendeurs **au 30 juillet 2026** ni
   celui de notre grille **au 28 août 2026** : seulement leur état au
   30 août 2026.
2. `https://support.google.com/a/answer/1231286?hl=fr`, repérée par recherche
   comme portant réellement la distinction Google France SARL / Irlande, **n'a
   pas été ouverte directement**. Elle est signalée comme piste, jamais comme
   preuve.

### D5. Conclusions que cette recherche n'autorise pas

- « le marché facture X » ;
- « la plupart des agences facturent au pourcentage » ;
- « une gestion coûte normalement entre X et Y » ;
- « un budget de X produit Y prospects » ;
- « le forfait est toujours mieux aligné » ;
- « un CPA inférieur à X est bon » ;
- « la TVA sera récupérée » ;
- « l'annonceur est propriétaire » sans avoir regardé les rôles attribués ;
- toute déduction fiscale française tirée de G-04, qui ne traite pas la France
  — c'est désormais ce que l'article en dit, et rien de plus.

---

## E — Registre des affirmations vérifiables de l'article

Trois natures d'énoncé, jamais mélangées.
**F** = fait sourcé, avec son localisateur. **H** = hypothèse du cas construit,
sans source, posée à découvert (détail au §F). **C** = calcul, dérivé des deux
premiers (démonstration au §G).

| ID | Affirmation telle qu'elle est publiée | Nature | Localisateur ou dérivation | Emplacement |
| --- | --- | --- | --- | --- |
| A-01 | gestion mensuelle affichée à partir de 90 €, 450 € et 450 € HT | **F** | V-01, V-02, V-03 | §01, `legalSources` |
| A-02 | création 149 € HT chez MS Web | **F** | V-01 | §01 |
| A-03 | lancement dès 750 € HT chez AdWorks | **F** | V-02 | §01 |
| A-04 | audit 500 € HT, création de compte 250 € HT chez DP Medias | **F** | V-03 | §01 |
| A-05 | une même page vend un audit payant et propose à côté un audit gratuit « synthétique » | **F** | V-03 | §01, FAQ 8 |
| A-06 | notre grille : audit 1 500 € HT, forfaits 1 800 / 3 500 / 4 500 € HT par mois | **F** | H-PRIX-1, H-PRIX-2 | §01, FAQ 8 |
| A-07 | notre Starter démarre à 8 000 € de budget média mensuel | **F** | H-PRIX-1, H-PRIX-2 | §01, §08 |
| A-08 | notre Scale couvre 20 à 60 k€/mois — « le haut de la tranche » = 60 000 € | **F** | H-PRIX-1 | §08 |
| A-09 | « un facteur vingt entre les deux extrêmes » | **C** | 1 800 ÷ 90 = 20 → §G9 | §01 |
| A-10 | coût réglementaire de 2 % pour les annonces diffusées en France | **F** | G-03 | §02, §06, FAQ 3 |
| A-11 | les traceurs de mesure publicitaire relèvent le plus souvent du consentement ; le refus doit être aussi facile que l'acceptation | **F** | P-01 | §02 |
| A-12 | l'aide Google range ses taxes pays par pays, nomme l'entité qui gère le compte (« Votre compte est géré par Google Ireland Ltd. ») et n'ouvre aucune section France | **F** | G-04, cité mot pour mot → É-01 corrigé | §02, FAQ 2 |
| A-13 | six lignes de coût, valorisées sur le cas | **H + C** | H-04 à H-17 → §G1 | §02 |
| A-14 | trois totalisations : décaissement externe HT, décaissement TTC, coût connu | **C** | définitions du §02, appliquées au §G2 | §02 |
| A-15 | totaux des quatre offres à 3, 6 et 12 mois (12 montants) | **C** | §G2 | §03 |
| A-16 | décompte du forfait à trois mois : 21 500 € HT, 25 800 € TTC, 850 €, 22 350 € | **C** | §G3 | §03 |
| A-17 | quatre seuils en honoraires mensuels : 6 000 €, 5 000 €, ≈ 7 143 €, 9 h | **C** | §G4 — cadrage nommé, É-04 et É-05 corrigés | §03 |
| A-17 bis | croisements réels du coût connu à 12 mois : 5 916,67 €, 4 947,92 €, 7 023,81 €, 8,96 h, tous à moins de 2 % des seuils en honoraires | **C** | §G4 | §03 |
| A-18 | à 12 000 € : forfait 900 €, temps passé 1 000 €, hybride 1 460 €, pourcentage 1 800 €, 10 800 € d'écart annuel | **C** | §G4 | §03 |
| A-19 | à 10 %, le seuil se déplace à 9 000 € | **C** | 900 ÷ 0,10 → §G4 | §03 |
| A-20 | 3 heures par mois annulent l'avance du pourcentage ; 5 heures face au temps passé | **C** | §G5 | §04, FAQ 9 |
| A-21 | 36 heures par an = 1 800 €, « exactement l'écart annuel d'honoraires » | **C** | §G5 | §04 |
| A-22 | « Ces 50 € de l'heure sont une hypothèse, pas une source » | **H déclarée** | H-07 | §04 |
| A-23 | actions de conversion principales et secondaires : usages distincts | **F** | G-08 | §05 |
| A-24 | CPC 5,10 €, CPA 102 €, CPL 255 €, coût connu par client 1 862,50 € | **C** | §G6 | §05 |
| A-25 | 1 275 € de média chargé par client, « douze fois et demie le CPA » ; 587,50 € restants ; 1 760,50 € ignorés | **C** | §G6 | §05 |
| A-26 | plafond de 500 € par prospect, coût réel 372,50 €, reste 127,50 € — marge sur douze mois, coûts sur trois, dit dans la même phrase | **C** | §G7 — É-06 corrigé | §05 |
| A-27 | hypothèse basse : 3 000 € de marge, manque de 19 350 €, client à 7 450 € | **C** | §G7 | §05 |
| A-28 | limite quotidienne jusqu'à 2 × et limite mensuelle 30,4 × le budget quotidien moyen | **F** | G-01 | §06, `legalSources` |
| A-29 | un budget total de campagne obéit à d'autres règles | **F** | G-02 | §06 |
| A-30 | 6 080 € de plafond, 400 € de pic, 6 201,60 € contre 6 120 €, 81,60 €/mois, 979,20 €/an, 1 440 € de coût réglementaire — sur une base de 6 000 €, annoncée comme telle | **C** | §G8 — É-02 et É-03 corrigés | §06 |
| A-31 | assiette sans plafond : +1 050 €/mois × 9 = 9 450 € ; plafond à 1 200 € : 4 050 € ; clause manquante 5 400 € | **C** | §G8 | §06 |
| A-32 | compte recréé : 750 + 300 + 900 = 1 950 € | **C** | §G8 | §06, §07 |
| A-33 | l'historique des modifications est conservé deux ans | **F** | G-09 | §06 |
| A-34 | associer un compte existant ne transfère pas la propriété ; un compte créé depuis le compte administrateur peut lui appartenir par défaut | **F** | G-06, G-07 | §07, FAQ 7 |
| A-35 | la facturation consolidée n'est pas disponible pour les agences médias en France, avec renvoi à la loi Sapin | **F** | G-05 | §07 |
| A-36 | l'article 20 de la loi n° 93-122 impose mandat écrit, rémunération détaillée, rabais portés sur la facture, facture du vendeur communiquée | **F** | J-01 | §07 |
| A-37 | sous 3 000 € HT de média, un forfait de 900 € pèse 30 % | **C** | 900 ÷ 3 000 → §G10 | §08, FAQ 9 |
| A-38 | au-dessus de 8 000 € HT, un taux de 15 % dépasse déjà 1 200 €/mois | **C** | 0,15 × 8 000 → §G10 | §08 |
| A-39 | notre forfait d'entrée pèserait 36 % de la dépense sur le cas d'Hélène | **C** | 1 800 ÷ 5 000 → §G10 | §08 |
| A-40 | à 60 000 € de média, 15 % vaudraient 9 000 €/mois contre 3 500 € pour le forfait Scale | **F + C** | A-08 ; 0,15 × 60 000 → §G10 | §08 |
| A-41 | 61 200 € de média chargé, 76,5 % du total ; 11 550 € de lancement et d'honoraires ; 2 900 € d'écart, 3,6 % | **C** | §G9 | §01 |
| A-42 | 20 prospects par mois donnent 60 prospects et 12 clients en trois mois | **H + C** | H-20, H-21 × 3 | FAQ 6 |
| A-43 | Hagnéré Code vend une gestion publicitaire et perçoit des honoraires | **F interne** | déclaration de conflit d'intérêts, bloc « Transparence » | §08 |

### E1. Affirmations commerciales volontairement absentes

Vérifié par relecture de la page **et** par test (`ne laisse passer aucun
connecteur robotique ni promesse inventée`) :

- aucun nombre de clients gérés, aucun montant de média historiquement piloté ;
- aucun délai moyen de résultat, aucun taux d'amélioration ;
- aucune certification, aucun partenariat, aucune note d'avis ;
- aucun témoignage, aucun logo, aucun nom de client ;
- aucun « ROI », aucune garantie de résultat — les motifs `/\bROI\b/`,
  `/nous garantissons/i`, `/résultat garanti/i`, `/notre client/i`,
  `/nous avons livré/i`, `/cas client réel/i` sont interdits par test ;
- aucun constat de terrain sur une population non mesurée : les motifs
  « l'écart courant entre deux devis », « la plupart des dossiers »,
  « l'erreur la plus fréquente » sont interdits par test.

L'article se conforme donc à la règle d'or du `CLAUDE.md` : les seules
références du groupe ne sont pas citées ici, et Hagnéré Code n'est mentionnée
que par ses prix publics et son propre conflit d'intérêts.

---

## F — Les hypothèses du cas construit, posées à découvert

**Aucune de ces trente valeurs n'a de source.** Elles sont choisies pour
l'exemple. L'article le dit trois fois : dans le badge « Exemple construit »,
dans la première phrase du hero, et dans l'encart du fil rouge — « les quatre
offres, les volumes, l'effectif et le coût horaire interne sont choisis pour
l'exemple et ne viennent d'aucun devis reçu. Ce n'est pas un dossier client. »
Le test vérifie que cette étiquette précède la première mesure.

### F1. Personnage et contexte

| ID | Hypothèse | Où elle sert |
| --- | --- | --- |
| H-01 | Hélène, dirigeante d'une entreprise de 24 personnes qui installe des pompes à chaleur en Loire-Atlantique | §01 |
| H-02 | un chargé d'affaires rappelle les demandes ; une comptable suit ce qui sort de la banque | §01 |
| H-03 | 100 % des annonces diffusées en France | §02, calculateur |

### F2. Base commune aux quatre offres

| ID | Hypothèse | Valeur |
| --- | --- | --- |
| H-04 | budget média mensuel, **hors** coût réglementaire | 5 000 € HT |
| H-05 | mesure, page et créations au lancement | 2 000 € HT |
| H-06 | mesure, page et créations, par mois | 250 € HT |
| H-07 | coût horaire interne chargé | 50 € |
| H-08 | temps interne : 8 h au lancement puis 3 h par mois, **identiques pour les quatre offres** | 8 h + 3 h/mois |

### F3. Trésorerie

| ID | Hypothèse | Valeur |
| --- | --- | --- |
| H-09 | taux de TVA unique appliqué à tous les coûts externes | 20 % |
| H-10 | TVA supposée entièrement récupérable | 100 % |

La clause « Limites de ce guide » assume explicitement H-09 : « le calculateur
applique un taux de TVA unique par simplification ». H-10 est dite en toutes
lettres au §03 : « TVA supposée entièrement récupérable ».

### F4. Les quatre offres

| ID | Hypothèse | Lancement | Mensuel |
| --- | --- | ---: | ---: |
| H-11 | Forfait | 750 € HT | 900 € HT |
| H-12 | Pourcentage | 900 € HT | 15 % de l'assiette |
| H-13 | Hybride | 800 € HT | 500 € + 8 % de l'assiette |
| H-14 | Temps passé | 8 h × 100 € = 800 € HT | 10 h × 100 € = 1 000 € HT |
| H-15 | assiette du pourcentage **et** de l'hybride = le média, soit 5 000 € | — | — |
| H-16 | ni minimum ni plafond mensuel dans les quatre devis | — | — |
| H-17 | aucune somme due à la sortie à 3, 6 ou 12 mois, aucun ajustement de contenu : les quatre offres sont supposées couvrir la même chose | — | — |

H-17 est l'hypothèse la plus lourde du guide, et l'article la désigne lui-même
comme telle dans un encart bleu : « Aucun devis réel ne s'aligne ainsi, et la
section suivante chiffre l'écart. »

### F5. Volumes et marge

| ID | Hypothèse | Valeur |
| --- | --- | ---: |
| H-18 | clics par mois | 1 000 |
| H-19 | actions de conversion principales par mois | 50 |
| H-20 | prospects reconnus qualifiés par le commercial, par mois | 20 |
| H-21 | nouveaux clients attribués par mois | 4 |
| H-22 | volumes constants dès le premier mois : ni montée en charge, ni saisonnalité | — |
| H-23 | marge contributive par client attribué, sur une fenêtre de 12 mois | 2 500 € |

H-22 n'est écrite que dans le texte d'aide du calculateur, pas dans le corps de
l'article.

### F6. Scénarios et incidents

| ID | Hypothèse | Valeur |
| --- | --- | --- |
| H-24 | saison : le média passe à 12 000 € HT/mois au quatrième mois, pour les neuf mois restants | §03, §06 |
| H-25 | plafond mensuel contrefactuel qui aurait pu être écrit au contrat | 1 200 € |
| H-26 | taux alternatif utilisé pour montrer la sensibilité du seuil | 10 % |
| H-27 | incident n° 1 : budget quotidien moyen de 200 €, mois compté sur 30 jours — soit 6 000 €/mois et non 5 000 €, changement d'assiette annoncé depuis la première phrase de l'incident (É-02 corrigé) | §06 |
| H-28 | incident n° 3 : le compte a été créé depuis le compte administrateur de l'agence et n'est pas récupéré | §06 |
| H-29 | incident n° 3 : 750 € de lancement chez l'agence suivante, 6 heures internes, un mois de préavis facturé 900 € | §06 |
| H-30 | hypothèse basse : un client par mois, 1 000 € de marge par client | §05 |

---

## G — Les calculs de l'article, refaits à la main

Tout ce qui suit a été **recalculé indépendamment**, sans exécuter le moteur du
dépôt : empilement mois par mois plutôt que multiplication, résolution des
seuils par dichotomie plutôt que par la formule imprimée. Les vingt-huit totaux
publiés tombent juste. Les seuls écarts sont ceux du §0, qui portent sur le
cadrage, jamais sur l'arithmétique.

### G1. La brique de base

```text
coût réglementaire mensuel
= média × part France × taux
= 5 000 × 100 % × 2 %
= 100 €

socle commun mensuel, hors honoraires
= média + coût réglementaire + mesure
= 5 000 + 100 + 250
= 5 350 €

socle commun initial, hors lancement du modèle
= 2 000 €
```

Honoraires mensuels des quatre offres, à 5 000 € de média :

```text
forfait      = 900 €
pourcentage  = 0,15 × 5 000            = 750 €
hybride      = 500 + 0,08 × 5 000      = 500 + 400 = 900 €
temps passé  = 10 × 100                = 1 000 €
```

### G2. Les douze totaux du tableau du §03

Formule appliquée, `m` = nombre de mois :

```text
décaissement externe HT
= 2 000 + lancement + m × (5 350 + honoraires)

décaissement TTC
= externe HT × 1,20

heures internes
= 8 + 3 m

coût connu
= externe HT + TVA décaissée − TVA récupérée + heures × 50
= externe HT + (8 + 3 m) × 50        [car TVA récupérable à 100 %]
```

| Modèle | Bundle mensuel | 3 mois HT | 3 mois TTC | 3 mois connu | 6 mois connu | 12 mois connu |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Forfait | 6 250 | 21 500 | 25 800 | **22 350** | **41 550** | **79 950** |
| Pourcentage | 6 100 | 21 200 | 25 440 | **22 050** | **40 800** | **78 300** |
| Hybride | 6 250 | 21 550 | 25 860 | **22 400** | **41 600** | **80 000** |
| Temps passé | 6 350 | 21 850 | 26 220 | **22 700** | **42 200** | **81 200** |

Les douze valeurs en gras sont **exactement** celles publiées par le tableau du
§03. Détail de la première ligne :

```text
forfait,  3 mois : 2 000 + 750 + 3 × 6 250 = 21 500 ; heures 17 → 850 ; 22 350
forfait,  6 mois : 2 000 + 750 + 6 × 6 250 = 40 250 ; heures 26 → 1 300 ; 41 550
forfait, 12 mois : 2 000 + 750 + 12 × 6 250 = 77 750 ; heures 44 → 2 200 ; 79 950
```

### G3. Le décompte poste par poste du forfait à trois mois

L'article invite le lecteur à refaire cette case à la main. Elle se refait :

```text
mesure et page                     2 000
lancement                            750
3 × (5 000 + 100 + 250 + 900)     18 750
                                  ------
décaissement externe HT           21 500     ← publié « 21 500 € HT »
TVA 20 %                           4 300
décaissement TTC                  25 800     ← publié « 25 800 € »
heures internes 8 + 3×3 = 17 h, à 50 €   850 ← publié « 17 heures internes à 50 € » et « 850 € »
coût connu (TVA récupérée)        22 350     ← publié « 22 350 € de coût connu »
```

### G4. Les quatre seuils, et ce qu'ils croisent vraiment

Seuils publiés, recalculés par dichotomie sur les **honoraires mensuels** :

```text
0,15 × M = 900              → M = 6 000,00 €        publié 6 000 €   ✔
500 + 0,08 × M = 900        → M = 5 000,00 €        publié 5 000 €   ✔
500 + 0,08 × M = 0,15 × M   → M = 7 142,857142… €   publié « 500 ÷ 0,07 ≈ 7 143 € »  ✔
h × 100 = 900               → h = 9,00 heures       publié 9 h       ✔
0,10 × M = 900              → M = 9 000,00 €        publié 9 000 €   ✔
```

Mêmes croisements sur le **coût connu à douze mois**, lancement compris — ce
que mesure le tableau situé juste au-dessus du bloc de formules :

```text
pourcentage vs forfait :  (900 − 750) + 12 × (0,15 M − 900) = 0 → M = 5 916,67 €
hybride     vs forfait :  (800 − 750) + 12 × (500 + 0,08 M − 900) = 0 → M = 4 947,92 €
hybride     vs pourcentage : (800 − 900) + 12 × (500 + 0,08 M − 0,15 M) = 0 → M = 7 023,81 €
temps passé vs forfait :  (800 − 750) + 12 × (100 h − 900) = 0 → h = 8,958 heures
```

Écart de 0,5 % à 1,7 % selon le croisement, tous sous 2 % :

```text
(6 000 − 5 916,67) ÷ 6 000            = 1,389 %
(5 000 − 4 947,92) ÷ 5 000            = 1,042 %
(7 142,857… − 7 023,81) ÷ 7 142,857…  = 1,667 %
(9 − 8,9583) ÷ 9                      = 0,463 %
```

Ces quatre croisements sont publiés par l'article depuis la correction de É-05,
et le test les redérive par dichotomie sur `connuDouzeMoisBrut` — un empilement
mois par mois sans arrondi, pour que la fonction reste continue et que la racine
ne tombe pas au milieu d'une marche de centime.

Contrôle du cas d'école cité par l'article, refait à la main : à 5 000 € de
média, forfait et hybride facturent tous deux 900 € d'honoraires par mois, et
pourtant leurs coûts connus à douze mois valent 79 950 € et 80 000 €. La
différence, 50 €, est exactement l'écart de lancement (800 − 750). Le seuil en
honoraires est atteint là où le classement du tableau ne bascule pas encore.

Saison à 12 000 € de média :

```text
forfait      = 900 €                              publié 900 €     ✔
temps passé  = 1 000 €                            publié 1 000 €   ✔
hybride      = 500 + 0,08 × 12 000 = 1 460 €      publié 1 460 €   ✔
pourcentage  = 0,15 × 12 000 = 1 800 €            publié 1 800 €   ✔
écart annuel = (1 800 − 900) × 12 = 10 800 €      publié 10 800 €  ✔
```

### G5. Le seuil de charge interne

```text
honoraires mensuels à 5 000 € : {900 ; 750 ; 900 ; 1 000}
la moins chère est le pourcentage, 750 €
écart au voisin immédiat  = 900 − 750   = 150 €
écart à la plus chère     = 1 000 − 750 = 250 €

150 ÷ 50 €/h = 3 heures par mois       publié « (900 − 750) ÷ 50 €/h = 3 heures par mois »   ✔
250 ÷ 50 €/h = 5 heures par mois       publié « (1 000 − 750) ÷ 50 €/h = 5 heures par mois » ✔

3 h × 12 = 36 heures par an            publié « 36 heures par an »                          ✔
36 h × 50 € = 1 800 €
150 € × 12  = 1 800 €                  publié « exactement l'écart annuel d'honoraires »     ✔
```

Les deux nombres coïncident par construction : diviser un écart par un coût
horaire puis remultiplier par ce coût horaire redonne l'écart. La phrase de
l'article est donc vraie mais tautologique ; elle n'apporte pas de preuve
supplémentaire.

### G6. Les quatre coûts unitaires du §05

Sur trois mois : média chargé = `3 × 5 000 × 1,02 = 15 300 €`.

```text
CPC média chargé  = 15 300 ÷ (3 × 1 000) = 15 300 ÷ 3 000 = 5,10 €    ✔
CPA média chargé  = 15 300 ÷ (3 × 50)    = 15 300 ÷ 150   = 102,00 €  ✔
CPL qualifié      = 15 300 ÷ (3 × 20)    = 15 300 ÷ 60    = 255,00 €  ✔
coût connu/client = 22 350 ÷ (3 × 4)     = 22 350 ÷ 12    = 1 862,50 € ✔
```

Le passage qui compare les deux dernières lignes :

```text
média chargé par client     = 15 300 ÷ 12   = 1 275,00 €          ✔
1 275 ÷ 102                 = 12,5          « douze fois et demie » ✔
1 862,50 − 1 275            = 587,50 €      « les 587,50 € restants » ✔
1 862,50 − 102              = 1 760,50 €    « ignorer 1 760,50 € par client » ✔
```

### G7. Le seuil que la marge fixe

```text
marge de la cohorte  = 12 clients × 2 500 € = 30 000 €      ✔
plafond par prospect = 30 000 ÷ 60          = 500,00 €      ✔
coût connu/prospect  = 22 350 ÷ 60          = 372,50 €      ✔
écart                = 500 − 372,50         = 127,50 €      ✔
```

Hypothèse basse (H-30) :

```text
marge          = 3 clients × 1 000 € = 3 000 €              ✔
manque         = 22 350 − 3 000      = 19 350 €             ✔
coût par client = 22 350 ÷ 3         = 7 450 €              ✔
```

Arithmétique exacte. Réserve de cadrage : É-06.

### G8. Les trois incidents du §06

**Incident n° 1** — base 6 000 €/mois (H-27, et É-02) :

```text
mois attendu       = 30 j × 200 €        = 6 000,00 €       ✔
plafond publié     = 30,4 × 200 €        = 6 080,00 €       ✔
pic quotidien      = 2 × 200 €           =   400,00 €       ✔
coût réglementaire = 2 % × 6 000         =   120,00 €/mois  ✔
                   × 12                  = 1 440,00 €/an    ✔
facture attendue   = 6 000 × 1,02        = 6 120,00 €       ✔
facture plafond    = 6 080 × 1,02        = 6 201,60 €       ✔

ce que la règle des 30,4 jours ajoute vraiment :
  média            = 6 080 − 6 000       =    80,00 €
  réglementaire    = 2 % × 80            =     1,60 €       ✔
  total mensuel    = 6 201,60 − 6 120    =    81,60 €       ✔
  sur douze mois   = 81,60 × 12          =   979,20 €       ✔
```

La séparation est correcte et importante : imputer les 1 440 € de coût
réglementaire à la règle des 30,4 jours donnerait 2 419,20 €, un facteur 2,5.
L'article ne le fait plus, et le test l'interdit désormais explicitement.

**Incident n° 2** — assiette sans plafond :

```text
honoraires à 5 000 €  = 0,15 × 5 000  =   750 €
honoraires à 12 000 € = 0,15 × 12 000 = 1 800 €
hausse mensuelle      = 1 800 − 750   = 1 050 €            ✔
sur neuf mois         = 1 050 × 9     = 9 450 €            ✔
avec plafond 1 200 €  = (1 200 − 750) × 9 = 450 × 9 = 4 050 € ✔
clause manquante      = 9 450 − 4 050 = 5 400 €            ✔
```

**Incident n° 3** — compte recréé :

```text
lancement chez la suivante        750 €
6 heures internes × 50 €          300 €                    ✔
mois de préavis                   900 €
                                -------
                                1 950 €                    ✔
```

### G9. Les agrégats du §01

```text
média chargé sur douze mois = 12 × 5 000 × 1,02 = 61 200 €              ✔
part dans le total du forfait = 61 200 ÷ 79 950 = 76,5478 % → 76,5 %    ✔
lancement + honoraires        = 750 + 12 × 900  = 11 550 €              ✔
écart des quatre modèles      = 81 200 − 78 300 = 2 900 €               ✔
part de cet écart             = 2 900 ÷ 79 950  = 3,6273 % → 3,6 %      ✔
facteur entre les extrêmes    = 1 800 ÷ 90      = 20                    ✔
```

Contrôle de bouclage — ce que les 79 950 € contiennent :

```text
61 200 (média chargé) + 11 550 (lancement et honoraires) = 72 750
reste : 2 000 (mesure initiale) + 12 × 250 (mesure) + 44 h × 50 (internes)
      = 2 000 + 3 000 + 2 200 = 7 200
72 750 + 7 200 = 79 950                                                 ✔
```

Le total se referme au centime : aucune ligne du §02 n'est oubliée, aucune n'est
comptée deux fois.

### G10. Les ratios du §08

```text
900 ÷ 3 000     = 30 %      « un forfait de 900 € y pèse 30 % »            ✔
0,15 × 8 000    = 1 200 €   « le pourcentage dépasse déjà 1 200 € par mois » ✔
1 800 ÷ 5 000   = 36 %      « il pèserait 36 % de la dépense »             ✔
0,15 × 60 000   = 9 000 €   « un taux de 15 % vaudrait 9 000 € par mois »  ✔
```

La dernière ligne est l'aveu commercial du guide : sur un budget de 60 000 € par
mois — le haut de la tranche publiée du forfait Scale (A-08) — un pourcentage de
15 % rapporterait 9 000 € là où notre forfait fixe rapporte 3 500 €. Le
conditionnel est verrouillé par test : « Le fixe nous **coûterait** donc de
l'argent », jamais « nous coûte », parce qu'aucun compte à ce niveau de dépense
n'est géré aujourd'hui.

### G11. Concordance avec le moteur du calculateur

Le comparateur ouvre sur exactement les hypothèses H-03 à H-23
(`INITIAL_VALUES` de `GoogleAdsQuoteComparator.tsx`), et sa formule
(`compareGoogleAdsQuotes`) est celle du §G2, à une différence près : elle porte
en plus les ajustements de contenu, les minimums, les plafonds et les frais de
sortie, tous à zéro dans le cas publié. Le calculateur ne peut donc pas afficher
un classement contraire au tableau du §03 tant que le lecteur n'a rien modifié —
ce que le test vérifie par la phrase « Le calculateur ci-dessous ouvre sur ces
quatre offres, à contenu supposé identique ».

Note de vocabulaire : le calculateur nomme « CAC complet connu » ce que le §05
appelle « coût connu par client ». Même grandeur, deux étiquettes.

---

## H — Ce que les tests verrouillent réellement

`src/app/guides/prix-gestion-google-ads/content-quality.test.ts` n'est pas un
test de présence de chaînes : il **recalcule** avant de comparer. Deux règles y
sont posées en commentaire et tenues dans le code :

1. le vérificateur empile mois par mois là où le guide multiplie, et cherche les
   seuils par dichotomie là où le guide résout une équation ;
2. chaque résultat est confronté à une constante calculée à la main, dont les
   étapes sont écrites au-dessus — jamais reprise d'une formule de la page.

Contrôles notables pour un lecteur extérieur :

| Contrôle | Ce qu'il empêche |
| --- | --- |
| Empilement mois par mois des 12 totaux | qu'un total du §03 dérive sans être recalculé |
| Dichotomie sur les quatre seuils | qu'une équation fausse soit « vérifiée » par elle-même |
| Écart d'honoraires **dérivé** de `OFFRES` | le retour du 300 € inventé d'une version antérieure, et de ses 6 h, 600 €/mois et 7 200 €/an |
| Balayage inverse de tous les montants en euros | qu'un montant orphelin, ni calculé ni relevé, survive dans le corps |
| Liste `releves` séparée de la liste `calcules` | qu'un prix relevé et un résultat de calcul soient confondus |
| Concordance `PRIX_MAISON_PUBLIES` ↔ prose ↔ grille | qu'un prix maison change sans que le guide suive |
| Zéro source orpheline | qu'une source soit listée sans être citée dans le corps |
| `nofollow` sur les trois concurrents | qu'un signal de classement parte vers un concurrent sur la requête cible |
| Bande de 2 500 à 3 500 mots + `readTimeMin` = mesure canonique | qu'un temps de lecture soit déclaré au doigt mouillé |
| Interdiction des insécables littéraux dans le source | une typographie qui se perd en silence à la réécriture |
| Interdiction de `FAQPage`, `HowTo`, `Offer`, `Review`, `AggregateRating` | un balisage qui promettrait plus que la page ne tient |
| Citation mot pour mot de la page « Taxes dans votre pays », et interdiction de `Google France SARL` dans tout le source | le retour d'une affirmation attribuée à une page qui ne la porte pas (É-01) |
| Annonce du changement d'assiette exigée AVANT le premier montant du §06 | qu'un incident reparte sur 6 000 € en laissant croire aux 5 000 € du fil rouge (É-02) |
| Renvoi au §02 exigé avec ses deux assiettes, et interdiction de « et le §02 l'annonçait déjà » | un renvoi vrai de la règle et faux des montants (É-03) |
| Interdiction de `M = 7 143 € HT`, exigence de `M = 500 ÷ 0,07 ≈ 7 143 €` | un arrondi qui se présente comme une égalité (É-04) |
| Dichotomie sur le coût connu à douze mois **non arrondi** | que les seuils en honoraires passent pour ceux du tableau (É-05) |
| Exigence de la phrase qui sépare les deux fenêtres du §05 | qu'un solde de douze mois se lise comme une trésorerie de trois (É-06) |

Le test porte aussi un **désaccord ouvert non tranché**, que ce dossier reprend
sans le résoudre : le contre-audit du 28 août 2026 soutient que le H1 relève de
la bande « transactionnelle directe », dont le plafond majoré s'arrête à
2 875 mots, ce qui rendrait le guide hors bande. Descendre à 2 875 mots imposait
de retirer le §06 ou le §07 — les deux sections sur lesquelles reposent les
attaques les mieux tenues. Le blocage est documenté dans le test, pas arbitré.

### H1. Mesures faites le 30 août 2026

| Mesure | Valeur | Méthode |
| --- | ---: | --- |
| Mots du corps avant correction | 3 081 | `npx tsx scripts/measure-guide-readtime.mjs prix-gestion-google-ads`, contre le serveur de développement |
| Mots du corps **après correction** | **3 358** | même commande, le 30/08/2026 à 23 h 23 |
| Temps de lecture déduit | **17 min** | 3 358 ÷ 200, arrondi — égal au `readTimeMin` du registre |
| Accord registre ↔ mesure | **OK** | `npx tsx scripts/measure-guide-readtime.mjs --check prix-gestion-google-ads` → « mesuré 17 min, publié 17 min » |
| Types | **0 erreur** | `npx tsc --noEmit` |
| Tests du répertoire du guide | **42 passés, 0 échec** | `npx vitest run src/app/guides/prix-gestion-google-ads/` |
| Tests avec le contrôle croisé des prix | **46 passés, 0 échec** | mêmes fichiers + `src/app/guides/guides-price-consistency.test.ts` |

Précision sur le calibre. Le corps est passé de 3 081 à 3 358 mots : les six
corrections ajoutent 277 mots, tous du cadrage — nommer la grandeur comparée,
annoncer un changement d'assiette, dire quelle fenêtre porte quel nombre, citer
une source mot pour mot. La bande « décisionnelle / comparative » (2 500 à
3 500 mots) tient encore, mais la marge est passée de 419 à 142 mots : plus
aucune section ne peut être allongée sans arbitrer d'abord le désaccord de
calibre ci-dessus. Aucun fait n'a été retiré pour compenser ; retirer une preuve
pour tenir un compteur serait exactement le contraire de ce que cette passe
corrige.

Le test embarqué mesure sur `renderToStaticMarkup(Page())` là où le script
mesure la route servie : l'algorithme est le même, l'entrée diffère (le
comparateur client est monté côté serveur), et l'écart est d'une douzaine de
mots. Les deux tombent dans la bande et donnent 17 min à l'arrondi.

---

## I — Statut éditorial et relecture humaine

### I1. Aucune relecture humaine extérieure

**Aucun lecteur humain extérieur n'a relu cet article.** Ni l'ancien dossier, ni
le dépôt ne contiennent la trace d'un test lecteur. Le mot « humain » qui revient
dans le journal de l'ancien dossier qualifie le **jugement d'un agent sur le
style** d'un passage (« lu comme humain »), jamais la lecture par une personne
réelle. La charte §13 est explicite : une contre-relecture par un agent
indépendant « ne doit jamais être présentée comme l'avis d'une personne
réelle ».

En conséquence, au sens de la table des statuts de la charte §13, l'état
défendable de cet article est **« prêt pour revue humaine »** — sauf si le
commanditaire a explicitement délégué la décision de publication à un
contre-audit indépendant, délégation dont ce dépôt ne porte aucune trace écrite.
Le registre déclare pourtant `editorialStatus: "published"`. L'écart est signalé,
pas corrigé : le registre n'est pas dans le périmètre de ce dossier.

### I2. Ce que la production sert aujourd'hui

Voir É-07. `https://hagnere-code.ai/guides/prix-gestion-google-ads` servait
encore, le 30 août 2026, la version du 31 juillet 2026. La version décrite ici
est écrite, typée et testée dans le dépôt, non déployée. Le registre déclare
maintenant `dateModified: "2026-08-30T23:22:01+02:00"` — l'heure réelle de la
dernière écriture de `page.tsx`, relevée à l'horloge — et la date visible sur la
page dit la même chose. Cette cohérence est celle du **dépôt** : elle ne devient
vraie de la production qu'au déploiement, qui reste à faire. Aucune conclusion
sur l'indexation ne peut en être tirée d'ici là. La page ne revendique par
ailleurs aucune relecture humaine : aucun lecteur extérieur n'a lu ce guide
(§I1), et rien dans le corps ne le laisse entendre.

### I3. Conflit d'intérêts, déclaré par la page elle-même

L'article vend indirectement une prestation qu'il analyse. Il le déclare dans
son dernier paragraphe : « Hagnéré Code vend une gestion publicitaire et perçoit
des honoraires si vous nous la confiez. Rien ici n'exige de passer par nous. »
Trois garde-fous accompagnent cette déclaration :

1. la grille maison est citée comme **prix maison**, jamais comme référence de
   marché — la description de la source le répète ;
2. le §08 nomme les cas où l'offre ne convient pas, et chiffre ce que le forfait
   fixe coûterait à l'agence sur un gros budget ;
3. aucun score composite ne conclut à la place du lecteur — le test interdit les
   motifs « score sur 100 » et « algorithme propriétaire ».

---

## J — Ce que ce dossier ne couvre pas

- **Le rendu visuel.** Aucune ouverture dans un navigateur réel, aucune mesure
  de performance, aucun contrôle d'accessibilité au clavier n'a été refait ici.
  La charte §14.2 les exige séparément.
- **Les images.** Les trois `.webp` de l'article n'ont pas été inspectées ; leurs
  empreintes figurent au manifeste de juillet, qui décrit une autre version de la
  page.
- **Le maillage entrant.** Les pages qui pointent vers ce guide (dont la grille
  du service publicité en ligne, qui le cite) n'ont pas été inventoriées.
- **Le contre-audit.** Ce dossier reconstitue un socle de preuves ; il ne remplace
  ni la passe 3 du workflow maître, ni la scorecard du §13.
- **La véracité des relevés à leur date d'origine.** Voir §D4.

## K — À revérifier avant toute mise en campagne payante

1. **É-07, le seul écart encore ouvert** — déployer. Le dépôt et la production
   ne servent pas la même version, et c'est la production que lira un
   concurrent. Tant que ce point est ouvert, aucune campagne payante ne doit
   pointer vers cette adresse : elle mènerait à la version du 31 juillet, qui
   porte encore les six écarts corrigés ici.
2. **Calibre** — arbitrer le désaccord ouvert du §H. Le corps est passé à
   3 358 mots : il tient la bande comparative (2 500-3 500) mais dépasse
   nettement le plafond de 2 875 mots que défendrait une lecture
   transactionnelle du H1. La marge restante est de 142 mots ; aucune section
   ne peut être allongée avant cet arbitrage.
3. Faire relire l'article par un lecteur extérieur non technique (charte §13),
   ou obtenir du commanditaire une délégation écrite.
4. FAQ n° 1 : remplacer « fait passer la facture mensuelle de 900 € à 5 900 € »
   par une borne de la fourchette annoncée juste avant — 900 € est l'honoraire
   du forfait, pas une borne de « 750 à 1 000 € ».
5. Revérifier `https://support.google.com/a/answer/1231286?hl=fr` — piste
   repérée mais jamais ouverte directement, et qui redirige aujourd'hui vers
   `knowledge.workspace.google.com`. Si elle porte bien la distinction Google
   France SARL / Irlande pour Google Ads, elle pourra compléter le §02 ; sinon,
   ne rien y ajouter.
6. Revérifier les quatre pages tarifaires et la grille maison **tous les douze
   mois**, comme la page s'y engage — prochaine échéance : juillet 2027 pour les
   pages vendeurs, août 2027 pour la grille maison.
7. Revérifier G-01 et G-03 à la même fréquence : le taux réglementaire et la
   règle des 30,4 jours sont des règles de plateforme, modifiables sans préavis.
