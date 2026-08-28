# Variables d'environnement — Hagnéré Code

Référence unique des variables lues par le code. `.env*` est couvert par
`.gitignore` : ce fichier documente les clés, jamais leurs valeurs.

Vérifier cette liste avant chaque déploiement, et **avant d'ouvrir une campagne
Google Ads** — plusieurs variables conditionnent silencieusement la mesure ou le
fonctionnement des formulaires.

## Bloquant pour les campagnes

| Variable | Valeur attendue | Ce qui casse sans elle |
|---|---|---|
| `MATH_CHALLENGE_SECRET` | secret aléatoire ≥ 32 caractères, distinct en Preview et Production | **Tous les formulaires répondent 503.** `/api/project-inquiry` refuse toute soumission avant validation et `/api/math-challenge` ne sert plus l'équation : le visiteur ne peut pas envoyer sa demande. À vérifier par `GET /api/math-challenge` → `200`. |
| `NEXT_PUBLIC_COOKIE_BANNER` | `1` | Sans bannière, `isAnalyticsAllowed()` renvoie toujours `false` : **aucun événement ne part**, ni first-party ni Google. |
| `NEXT_PUBLIC_FUNNEL_ANALYTICS_ENABLED` | `true` | Le collecteur first-party est éteint et `/api/funnel-analytics` répond `503` : aucune étape d'abandon du tunnel n'est mesurée. |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | `AW-XXXXXXXXX` | Aucune conversion n'est remontée à Google Ads : ni Smart Bidding, ni optimisation, ni ROAS. Active aussi les domaines Google dans la CSP (`next.config.ts`). |
| `NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL` | libellé de la conversion « lead » (partie après `/` dans `AW-XXXX/YYYY`) | Le tag est chargé mais **aucun événement de conversion n'est envoyé**. |

## Mesure optionnelle

| Variable | Valeur attendue | Usage |
|---|---|---|
| `NEXT_PUBLIC_GA4_ID` | `G-XXXXXXXXXX` | Flux GA4. Configuré en même temps que Google Ads si l'on veut l'analyse d'audience. Active également les domaines Google dans la CSP. |

## Fonctionnement du site

| Variable | Valeur attendue | Usage |
|---|---|---|
| `NEXT_PUBLIC_ENV` | `production` en Production, `preview` en Preview | Active `index/follow` uniquement en production ; toute preview reste `noindex,nofollow`. |
| `DATABASE_URL` | URL Neon de production | Briefs, journaux anti-abus et événements first-party consentis. |
| `RESEND_API_KEY` | clé Resend de production | Envoi des e-mails de formulaire. |
| `CONTACT_TO_EMAIL` | boîte réellement suivie | Destinataire interne des demandes. |
| `CONTACT_FROM_EMAIL` | `contact@hagnere-code.ai` | Expéditeur Resend — le domaine doit être validé DKIM, sinon erreur 403. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | adresse ouverte **en réception** | Optionnel. Adresse de contact affichée au public et posée dans tous les liens `mailto:`. Sans elle, `src/lib/contact-details.ts` retombe sur l'adresse par défaut, encore au domaine du groupe. Voir la mise en garde ci-dessous. |
| `GROQ_API_KEY` | clé Groq de production | Transcription audio de `/api/transcribe` (dictée du tunnel). |
| `NEXT_PUBLIC_CALENDLY_URL` | URL HTTPS du domaine `calendly.com` | Optionnel — repli défini dans `src/lib/calendly.ts`. |

### Changer l'adresse de contact publiée

`NEXT_PUBLIC_CONTACT_EMAIL` bascule le NAP publié partout d'un coup, pages
légales comprises. Trois vérifications **avant** de la poser :

1. **La boîte est ouverte en réception.** Une adresse affichée qui rebondit vaut
   pire qu'une adresse au domaine du groupe : les pages légales, les CGV et la
   procédure d'exercice des droits RGPD s'appuient toutes sur ce canal.
2. **Le domaine choisi a un hébergeur de messagerie déclaré** dans le tableau
   des destinataires de `/legal/confidentialite`. C'est une obligation
   d'information, et
   `src/components/legal/legal-compliance.test.ts` échoue si le domaine publié
   n'y figure pas — le test est le garde-fou, pas la relecture.
3. **Les procédures internes suivent.** `docs/procedure-exercice-droits-rgpd.md`,
   `docs/procedure-incident-rgpd.md` et `docs/registre-traitements.md` citent
   l'adresse en clair : ce sont des documents, pas du code, ils ne changent pas
   tout seuls.

Le téléphone et l'adresse postale, eux, n'ont pas de variable : ils vivent dans
`src/lib/contact-details.ts` et se modifient en une ligne.

## Réglages anti-abus — toutes optionnelles

Ces variables n'ont **pas** à être posées pour lancer le site : chacune a un
défaut sûr écrit dans le code, et le comportement par défaut est celui décrit
ici. Elles existent pour desserrer ou resserrer un plafond sans redéployer une
constante en dur. Ne les poser que si une limite gêne réellement un usage
légitime observé.

| Variable | Défaut | Ce qu'elle borne |
|---|---|---|
| `INQUIRY_RETRY_PER_IP_HOUR` | `30` | Nouvelles tentatives d'une même IP sur `/api/project-inquiry` après un refus de validation ou un échec d'envoi. Une demande refusée relâche sa réservation : ce compteur borne le martèlement automatisé sans bloquer le prospect qui corrige son formulaire. |
| `INQUIRY_RETRY_GLOBAL_DAY` | `500` | Même mécanisme, toutes IP confondues, sur 24 h. |
| `ANALYTICS_RATE_PER_IP_HOUR` | `200` | Événements acceptés par `/api/funnel-analytics` pour une IP sur une heure. Chaque événement accepté est une écriture Neon. |
| `ANALYTICS_RATE_PER_IP_DAY` | `600` | Même compteur sur 24 h. |
| `ANALYTICS_RATE_GLOBAL_DAY` | `5000` | Même compteur sur 24 h, toutes IP confondues. |
| `MATH_CHALLENGE_PER_IP_HOUR` | `60` | Équations servies par `/api/math-challenge` pour une IP sur une heure. Compteur **en mémoire, par instance** : il borne le coût, pas un attaquant distribué. Le plafond de soumission reste, lui, persistant et vérifié dans `/api/project-inquiry`. |
| `CSP_REPORT_PER_IP_HOUR` | `30` | Rapports de violation acceptés par `/api/csp-report` pour une IP sur une heure. Compteur en mémoire, par instance. |
| `TRANSCRIBE_MAX_CONCURRENT` | `4` | Transcriptions simultanées **par instance** de `/api/transcribe`. Au-delà, la route répond `503` « réessayez » au lieu de saturer la mémoire de la fonction. |

Les valeurs sont lues avec `parseInt`. Une valeur non entière n'est pas
rejetée au démarrage : elle produit `NaN`, et sur les compteurs en mémoire la
comparaison devient toujours fausse — **la limite disparaît sans erreur ni
journal**. Ne poser un entier positif, et rien d'autre.

À surveiller pendant une campagne : `ANALYTICS_RATE_PER_IP_HOUR` est le
premier plafond susceptible d'être atteint si beaucoup de visiteurs partagent
une même IP sortante (réseau d'entreprise, portail Wi-Fi). Un événement refusé
n'est pas rejoué par le navigateur : il est perdu pour la lecture des
campagnes. Les plafonds de soumission de formulaire, eux, ne se relèvent pas
pour faire du volume.

Les autres plafonds de la même famille (`INQUIRY_RATE_*`, `SIRENE_RATE_*`,
`TRANSCRIBE_RATE_*`, `TRANSCRIBE_COST_BREAKER_BYTES_DAY`) suivent la même
convention. La source de vérité de l'ensemble reste `src/lib/ai-rate-limit.ts`.

## À laisser absentes sur Vercel

| Variable | Pourquoi |
|---|---|
| `TRUST_CF_CONNECTING_IP` | À mettre à `1` uniquement derrière Cloudflare. Sinon un client peut choisir son bucket de limitation. |
| `TRUST_X_FORWARDED_FOR` | À mettre à `1` uniquement derrière un proxy administré qui réécrit l'en-tête. |

## Consent Mode

Le tag Google n'est injecté que si un identifiant valide est configuré **et** que
le visiteur a accepté la mesure (`src/components/design-shared/GoogleMeasurement.tsx`).
Tant qu'aucun identifiant n'est défini, `next.config.ts` n'ouvre aucun domaine
Google dans la CSP : la politique reste aussi fermée qu'avant.

Conséquence à connaître : les conversions ne remontent que pour les visiteurs
ayant accepté. C'est le comportement voulu au regard de ce que `/legal/cookies`
annonce au visiteur ; prévoir l'écart de volume dans la lecture des campagnes.
