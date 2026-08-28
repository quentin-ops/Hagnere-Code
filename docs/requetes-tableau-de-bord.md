# Requêtes de pilotage — tunnel, refus, provenance

Les trois tables écrites par la machine à lead — `project_brief`, `ai_call_log`
et `funnel_analytics_event` — n'étaient lues par **aucun code** : ni route
d'administration, ni script, ni requête prête. Une donnée qu'on ne regarde
jamais ne vaut pas la peine d'être collectée ; ce fichier est la contrepartie
de la collecte.

**Comment s'en servir.** Copier une requête, la coller dans **Drizzle Studio**
(`npm run db:studio`, onglet SQL) ou dans `psql "$DATABASE_URL"`. Toutes sont
en lecture seule. Aucune n'a besoin d'être adaptée : les noms de colonnes sont
ceux de `src/db/schema.ts` et des migrations `drizzle/`, et chaque requête a été
exécutée contre la base de production avant d'être écrite ici.

**Deux conventions, valables partout dans ce document.**

- Les colonnes `created_at` sont des `timestamp` **sans fuseau**, écrits en UTC
  (le serveur Neon tourne en `GMT`). D'où le `AT TIME ZONE 'UTC' AT TIME ZONE
  'Europe/Paris'` systématique : sans lui, une soumission du dimanche 23 h 30
  est comptée le lundi, et les « semaines » ne sont pas celles du dirigeant.
- La fenêtre (`interval '30 days'`, `'90 days'`…) se change librement. Sur un
  site jeune, l'élargir est souvent la première chose à faire avant de conclure
  qu'il ne se passe rien.

---

## 0. La mesure tourne-t-elle ?

**Ce qu'elle répond :** est-ce que les trois tables reçoivent encore des
écritures, et depuis quand ?

```sql
SELECT
  'funnel_analytics_event' AS table_lue,
  count(*)                 AS lignes,
  max(created_at AT TIME ZONE 'UTC' AT TIME ZONE 'Europe/Paris') AS derniere_ecriture
FROM funnel_analytics_event
UNION ALL
SELECT 'project_brief', count(*),
  max(created_at AT TIME ZONE 'UTC' AT TIME ZONE 'Europe/Paris')
FROM project_brief
UNION ALL
SELECT 'ai_call_log', count(*),
  max(created_at AT TIME ZONE 'UTC' AT TIME ZONE 'Europe/Paris')
FROM ai_call_log;
```

**Comment lire.** À lancer **avant** toutes les autres : un tableau vide n'est
presque jamais un problème de commerce, c'est un problème de collecte.
`funnel_analytics_event` ne se remplit que si trois conditions sont réunies
en même temps — `NEXT_PUBLIC_FUNNEL_ANALYTICS_ENABLED` actif,
`NEXT_PUBLIC_COOKIE_BANNER` actif, et un choix analytics **positif** du
visiteur. Les deux drapeaux sont documentés dans
[`variables-environnement.md`](variables-environnement.md). Un
`derniere_ecriture` qui date de plusieurs jours alors que le trafic continue
désigne la configuration, pas le tunnel.

---

## 1. Ouvertures du tunnel et envois, par semaine

**Ce qu'elle répond :** combien de personnes ouvrent le tunnel chaque semaine,
combien vont au bout, et est-ce que ce rapport bouge.

```sql
SELECT
  date_trunc('week', created_at AT TIME ZONE 'UTC' AT TIME ZONE 'Europe/Paris')::date AS semaine,
  count(*) FILTER (WHERE event_name = 'pf:funnel_open')    AS ouvertures,
  count(*) FILTER (WHERE event_name = 'pf:submit_success') AS envois,
  round(
    100.0 * count(*) FILTER (WHERE event_name = 'pf:submit_success')
    / NULLIF(count(*) FILTER (WHERE event_name = 'pf:funnel_open'), 0),
    1
  ) AS taux_pct
FROM funnel_analytics_event
WHERE event_name IN ('pf:funnel_open', 'pf:submit_success')
  AND created_at >= now() - interval '90 days'
GROUP BY 1
ORDER BY 1 DESC;
```

**Comment lire.** `semaine` est le **lundi** de la semaine, en heure de Paris.
`pf:funnel_open` n'est émis qu'une fois par session : c'est un compte de
visiteurs entrés dans le tunnel, pas de chargements de page.
`pf:submit_success` marque un brief accepté par la route — donc un lead réel,
pas un clic sur « Envoyer ».

Le `taux_pct` est un **ordre de grandeur, pas une mesure exacte** : les deux
événements sont soumis au consentement analytics, et un visiteur qui refuse
n'apparaît dans aucune des deux colonnes. Comparer les semaines entre elles a
du sens ; comparer ce taux à un chiffre de marché n'en a pas. Le compte de
leads qui fait foi reste `project_brief` (requête 6), qui ne dépend d'aucun
consentement analytics puisqu'il n'est pas de la mesure mais l'objet même de
la demande.

---

## 2. Décrochage par étape

**Ce qu'elle répond :** à quelle étape du tunnel les gens s'arrêtent.

> ⚠️ Cette requête suppose l'événement **`pf:step_view`** (une étape s'affiche),
> ajouté au tunnel par ailleurs. Tant qu'il n'est pas déployé, la colonne
> `vues` vaut 0 et `abandons` est négatif : lire alors seulement `validees` et
> `passees`, qui sont exacts dès aujourd'hui. Rien d'autre n'est à changer une
> fois l'événement en production.

```sql
WITH etapes AS (
  SELECT
    coalesce(nullif(props::jsonb ->> 'step', ''), '(non renseignée)') AS etape,
    event_name
  FROM funnel_analytics_event
  WHERE event_name IN ('pf:step_view', 'pf:step_complete', 'pf:step_skip')
    AND created_at >= now() - interval '30 days'
)
SELECT
  etape,
  count(*) FILTER (WHERE event_name = 'pf:step_view')     AS vues,
  count(*) FILTER (WHERE event_name = 'pf:step_complete') AS validees,
  count(*) FILTER (WHERE event_name = 'pf:step_skip')     AS passees,
  count(*) FILTER (WHERE event_name = 'pf:step_view')
    - count(*) FILTER (WHERE event_name IN ('pf:step_complete', 'pf:step_skip')) AS abandons
FROM etapes
GROUP BY etape
ORDER BY array_position(
  ARRAY['projet','contexte','perimetre','contraintes','contact','recap','(non renseignée)'],
  etape
);
```

**Comment lire.** Les lignes sortent dans l'ordre réel du tunnel : `projet` →
`contexte` → `perimetre` (« Le contenu ») → `contraintes` → `contact` →
`recap` (« Envoi »). L'étape à travailler est celle où `abandons` décroche par
rapport à la précédente, pas celle qui a le plus petit `validees` — les
dernières étapes ont mécaniquement moins de monde.

Trois précisions qui évitent des conclusions fausses :

- `pf:step_complete` est **dédupliqué par étape** dans la durée de vie de la
  page : un aller-retour avec le bouton « Retour » ne compte qu'une fois.
  `pf:step_skip`, lui, ne l'est pas.
- `passees` n'est pas un échec. Trois étapes sont volontairement facultatives
  (`contexte`, `perimetre`, `contraintes`) : un brief court reste un lead.
- La ligne `(non renseignée)` regroupe les événements sans propriété `step` —
  anciens événements, ou sondes de test. Si elle domine, la mesure est à
  regarder avant le tunnel.

---

## 3. Blocages de validation par étape

**Ce qu'elle répond :** où le formulaire refuse d'avancer, c'est-à-dire où il
demande quelque chose que les visiteurs n'ont pas envie ou pas les moyens de
donner.

```sql
WITH etapes AS (
  SELECT
    coalesce(nullif(props::jsonb ->> 'step', ''), '(non renseignée)') AS etape,
    event_name
  FROM funnel_analytics_event
  WHERE event_name IN ('pf:step_validation_block', 'pf:step_complete')
    AND created_at >= now() - interval '30 days'
)
SELECT
  etape,
  count(*) FILTER (WHERE event_name = 'pf:step_validation_block') AS blocages,
  count(*) FILTER (WHERE event_name = 'pf:step_complete')         AS validations,
  round(
    1.0 * count(*) FILTER (WHERE event_name = 'pf:step_validation_block')
    / NULLIF(count(*) FILTER (WHERE event_name = 'pf:step_complete'), 0),
    2
  ) AS blocages_par_validation
FROM etapes
GROUP BY etape
HAVING count(*) FILTER (WHERE event_name = 'pf:step_validation_block') > 0
ORDER BY blocages DESC;
```

**Comment lire.** `pf:step_validation_block` est émis quand quelqu'un clique
« Continuer » et que l'étape le refuse. Un blocage isolé est normal (on clique
avant d'avoir fini). C'est `blocages_par_validation` qui compte : au-delà de
~0,5, une étape refuse une fois sur deux ceux qui finissent par la passer — le
champ obligatoire en cause est à réinterroger, pas le visiteur.

Ce chiffre se lit **avec** la requête 2 : une étape qui bloque beaucoup ET
qu'on abandonne beaucoup est la priorité absolue du tunnel.

---

## 4. Répartition des trois voies d'entrée

**Ce qu'elle répond :** par où arrivent réellement les demandes — le tunnel, le
formulaire court du pied de page, ou la réservation Calendly.

```sql
SELECT
  CASE event_name
    WHEN 'pf:lead_confirmed'             THEN '1. Tunnel /demarrer-un-projet'
    WHEN 'contact_form_submit_success'   THEN '2. Formulaire court (pied de page)'
    WHEN 'pf:calendly_booking_confirmed' THEN '3. Réservation Calendly'
  END AS voie,
  count(*) AS demandes,
  round(100.0 * count(*) / NULLIF(sum(count(*)) OVER (), 0), 1) AS part_pct,
  max(created_at AT TIME ZONE 'UTC' AT TIME ZONE 'Europe/Paris') AS derniere
FROM funnel_analytics_event
WHERE event_name IN (
  'pf:lead_confirmed',
  'contact_form_submit_success',
  'pf:calendly_booking_confirmed'
)
  AND created_at >= now() - interval '90 days'
GROUP BY voie
ORDER BY voie;
```

Et, pour savoir **depuis quelle page** part chaque voie :

```sql
SELECT
  event_name AS voie,
  coalesce(nullif(props::jsonb ->> 'page', ''), path) AS page,
  count(*) AS demandes
FROM funnel_analytics_event
WHERE event_name IN (
  'pf:lead_confirmed',
  'contact_form_submit_success',
  'pf:calendly_booking_confirmed'
)
  AND created_at >= now() - interval '90 days'
GROUP BY 1, 2
ORDER BY demandes DESC;
```

**Comment lire.** Les trois voies ne sont pas de même nature et ne se
comparent pas comme trois colonnes d'un même total :

- `pf:lead_confirmed` est émis à l'affichage de `/demarrer-un-projet/merci` :
  un brief complet est arrivé.
- `contact_form_submit_success` vient du formulaire court rendu par le pied de
  page (accueil, hub `/services`, pages service, `/tarifs`) : moins de
  contexte, mais une intention réelle.
- `pf:calendly_booking_confirmed` est une **réservation de créneau**, pas un
  brief : rien n'est écrit dans `project_brief`, et la personne n'apparaîtra
  dans aucune des requêtes 1, 2, 3 ou 6.

Le lien Calendly pointe vers l'organisation `hagnere-patrimoine`, du même
groupe : c'est un choix assumé, pas un écart à corriger.

La seconde requête est celle qui sert à arbitrer : si une page service produit
des demandes et une autre aucune, c'est la page, pas l'offre, qu'il faut
regarder d'abord.

---

## 5. Refus par motif

**Ce qu'elle répond :** combien de tentatives d'envoi ont été refusées, et
pourquoi. Autrement dit : combien de leads le dispositif anti-abus coûte
peut-être.

```sql
SELECT
  service,
  coalesce(block_reason, '(non précisé)') AS motif,
  count(*) AS refus,
  round(100.0 * count(*) / NULLIF(sum(count(*)) OVER (PARTITION BY service), 0), 1) AS part_du_service_pct,
  max(created_at AT TIME ZONE 'UTC' AT TIME ZONE 'Europe/Paris') AS dernier_refus
FROM ai_call_log
WHERE status = 'blocked'
  AND created_at >= now() - interval '30 days'
GROUP BY service, block_reason
ORDER BY refus DESC;
```

Et la vue d'ensemble du service qui porte les briefs :

```sql
SELECT
  count(*) FILTER (WHERE status = 'ok')         AS envois_aboutis,
  count(*) FILTER (WHERE status = 'blocked')    AS refuses,
  count(*) FILTER (WHERE status = 'validation') AS saisies_invalides,
  count(*) FILTER (WHERE status = 'ai_error')   AS pannes_fournisseur,
  count(*) FILTER (WHERE status = 'reserved')   AS creneaux_jamais_soldes
FROM ai_call_log
WHERE service = 'inquiry'
  AND created_at >= now() - interval '30 days';
```

**Comment lire.** `service` vaut `inquiry` (envoi d'un brief), `transcribe`
(dictée vocale), `estimate` ou `analytics`. Seul `inquiry` porte des leads ;
un pic sur `transcribe` gêne la dictée, pas la réception.

Les motifs et ce qu'ils veulent dire :

| `block_reason` | Ce que ça veut dire | Ce que ça coûte |
|---|---|---|
| `captcha_failed` | réponse fausse au calcul anti-robot | des robots, mais **aussi** des humains : un volume élevé et régulier justifie de revoir la question |
| `rate_ip_hour`, `rate_ip_day` | trop de tentatives depuis une même IP | une entreprise entière sort souvent par une seule IP — plusieurs personnes du même client peuvent se bloquer mutuellement |
| `rate_email_day` | trop de tentatives pour une même adresse | souvent quelqu'un qui réessaie après un échec |
| `rate_global_day` | plafond global du jour atteint | **tout le monde est refusé** : à traiter immédiatement |
| `cost_breaker` | disjoncteur de coût déclenché | idem, plafond atteint |
| `secret_misconfigured` | `MATH_CHALLENGE_SECRET` absent ou invalide | **aucun formulaire ne fonctionne** — voir `variables-environnement.md` |

`pannes_fournisseur` (`ai_error`) mérite un coup d'œil à part : ces demandes-là
sont enregistrées en base mais n'ont **pas** déclenché de mail. Les retrouver
par la requête 6 en filtrant `mail_sent = false`.

`creneaux_jamais_soldes` (`reserved`) compte les créneaux réservés dont l'issue
n'a jamais été écrite — normal en petit nombre (le visiteur ferme l'onglet),
suspect s'il domine.

---

## 6. Les leads reçus, et d'où ils viennent

**Ce qu'elle répond :** qui a écrit, et quelle page l'a amené. C'est la requête
que les colonnes `landing_page`, `referrer_host` et `utm` de `project_brief`
existent pour servir.

```sql
SELECT
  created_at AT TIME ZONE 'UTC' AT TIME ZONE 'Europe/Paris' AS recu_le,
  company                                     AS entreprise,
  coalesce(landing_page, '— non capturée')    AS page_d_entree,
  coalesce(referrer_host, '— direct/interne') AS referent,
  coalesce(utm, '— aucune campagne')          AS campagne,
  timeline                                    AS echeance,
  budget,
  mail_sent                                   AS mail_equipe_parti,
  public_slug                                 AS reference
FROM project_brief
ORDER BY created_at DESC
LIMIT 50;
```

Et l'agrégat qui dit **quelle page travaille** :

```sql
SELECT
  coalesce(landing_page, '(provenance non capturée)') AS page_d_entree,
  count(*) AS briefs,
  count(*) FILTER (WHERE referrer_host IS NOT NULL) AS dont_referent_externe,
  count(*) FILTER (WHERE utm IS NOT NULL)           AS dont_campagne,
  max(created_at AT TIME ZONE 'UTC' AT TIME ZONE 'Europe/Paris') AS dernier_brief
FROM project_brief
WHERE created_at >= now() - interval '180 days'
GROUP BY 1
ORDER BY briefs DESC, dernier_brief DESC;
```

**Comment lire.**

- `page_d_entree` est le chemin d'**arrivée sur le site**, figé au premier
  chargement de la session — pas la page du formulaire. C'est voulu : un
  visiteur entre presque toujours par un guide ou un livre blanc, lit, puis
  ouvre le tunnel. Lue au moment de l'envoi, la valeur aurait toujours été
  `/demarrer-un-projet` et n'aurait rien appris.
- `referent` est l'**hôte** du site d'où vient la personne, jamais l'URL
  complète (elle peut porter une requête de recherche). Vide = accès direct,
  favori, ou navigation interne.
- `campagne` contient les seuls paramètres retenus (`utm_*`, `source`,
  `gclid`). `source=…` est celui que posent les liens des livres blancs.
- `reference` (`public_slug`) est l'identifiant non énumérable du brief. C'est
  **la même valeur que celle imprimée dans le mail d'équipe** : partir du mail,
  chercher ici, ou l'inverse.
- **Les briefs antérieurs à la migration `0006_brief_lead_source.sql` affichent
  tous « non capturée »** — c'est attendu, ce n'est pas une panne. Ne comparer
  des pages d'entrée qu'entre briefs postérieurs.
- `mail_equipe_parti = false` signale un lead **enregistré mais jamais
  notifié** : à ouvrir en priorité, personne ne l'a vu passer.

Ces trois colonnes ne désignent aucune personne : ni IP, ni user-agent, ni
cookie, ni identifiant visiteur — l'attribution s'arrête au niveau de la page
et de la campagne, délibérément.

---

## Ce que ces tables ne diront jamais

- **Le trafic.** Rien ici ne compte les visiteurs qui n'ont pas interagi. La
  volumétrie de sessions vient de GA4, pas de ces tables.
- **Les refus de consentement.** Un visiteur qui refuse l'analytics est absent
  des requêtes 1 à 4, mais son brief est bien présent en requête 6 : un écart
  entre les deux est normal, et va toujours dans ce sens.
- **Un chiffrage.** Aucune de ces tables ne contient de prix : le tunnel est
  lead-only, sans tarification temps réel ni chiffrage automatique.
