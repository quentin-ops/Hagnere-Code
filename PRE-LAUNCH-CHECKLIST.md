# Pre-launch checklist — Hagnéré Code

Tout ce qui n'a pas pu être fait par l'agent et qui demande une action humaine
avant le push en production. Les commandes de build, tests, lint et vérification
Vercel doivent être relancées sur le commit exact à déployer ; ne pas reprendre
un ancien nombre de pages ou un ancien résultat de contrôle.

## 🎯 CONDITIONS DE LANCEMENT DES CAMPAGNES GOOGLE ADS

Ajouté après l'audit du 27/08/2026. Ces cinq points conditionnent le premier
euro dépensé — la liste complète des variables est dans
[docs/variables-environnement.md](docs/variables-environnement.md).

- [ ] **`MATH_CHALLENGE_SECRET` défini en Production** (≥ 32 caractères).
      Sans lui, `/api/project-inquiry` répond `503` avant toute validation et
      `/api/math-challenge` ne sert plus l'équation : **aucun formulaire du site
      ne peut être envoyé**. Contrôle : `GET /api/math-challenge` → `200`, puis
      une soumission réelle de bout en bout.
- [ ] **`NEXT_PUBLIC_COOKIE_BANNER=1`** en Preview puis en Production. Tant que
      la bannière est absente, `isAnalyticsAllowed()` renvoie toujours `false` :
      aucun événement ne part, ni first-party ni Google.
- [ ] **`NEXT_PUBLIC_FUNNEL_ANALYTICS_ENABLED=true`**, puis vérifier qu'un
      parcours complet écrit bien des lignes dans `funnel_analytics_event`.
- [ ] **`NEXT_PUBLIC_GOOGLE_ADS_ID` et `NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL`**
      renseignés. Ils activent le tag `gtag.js` (Consent Mode v2) *et* ouvrent
      les domaines Google dans la CSP — les deux sont conditionnés à la même
      variable dans `next.config.ts`, il n'y a rien à modifier à la main.
- [ ] **Tester les deux chemins de conversion** : le tunnel
      `/demarrer-un-projet` → `/merci`, et le formulaire de contact du footer
      (présent sur l'accueil, `/services`, les 11 pages service et `/tarifs`).
      Les deux passent par `trackLeadConversion` et doivent remonter dans Google
      Ads.

> Rappel : le tag n'est chargé qu'après un consentement analytics positif.
> Les conversions ne remontent donc que pour les visiteurs ayant accepté —
> comportement voulu, à intégrer dans la lecture des campagnes.

## 🚨 ÉTAT À CONTRÔLER AVANT LE DÉPLOIEMENT

### 1. Migrations base de données — appliquées et relues le 20 juillet 2026
Les migrations versionnées du dossier `drizzle/` ont été appliquées dans
l'ordre sur la base Neon utilisée par la production :

```bash
npx drizzle-kit migrate
```

- `drizzle/0000_initial.sql` — création idempotente de `project_brief`, ajout de
  `public_slug`, création de `ai_call_log` et de ses index ;
- `drizzle/0001_petite_timeslip.sql` — ajout idempotent de
  `privacy_notice_version` ;
- `drizzle/0002_boring_miss_america.sql` — index partiel
  `ai_call_log_service_created_at_reserved_idx` sur les réservations prises en
  compte par les limites glissantes.

Contrôle en lecture seule après migration : `public_slug` et
`privacy_notice_version` sont présents sur `project_brief`, `service` est
présent sur `ai_call_log`, et l'index partiel de la troisième migration est
présent. Le journal Drizzle contient les trois versions locales. Le planificateur
peut légitimement préférer un parcours séquentiel tant que la table est minuscule ;
la présence de l'index a donc été contrôlée directement dans `pg_indexes`.
Refaire ce contrôle après toute nouvelle migration ; ne jamais déduire l'état de
la base du seul contenu du dossier.

### 2. Variables d'environnement Vercel
À configurer sur le projet Vercel actuellement utilisé en production :

| Variable | Valeur attendue | Usage |
|---|---|---|
| `NEXT_PUBLIC_ENV` | `production` en Production ; `preview` en Preview | Active `index/follow` uniquement pour la production. Toute preview reste `noindex,nofollow`. Les deux portées Vercel ont été séparées le 20 juillet 2026. |
| `DATABASE_URL` | URL Neon prod | Persistance des briefs, journaux anti-abus et événements first-party consentis. |
| `RESEND_API_KEY` | Clé Resend prod | Envoi emails formulaire. |
| `GROQ_API_KEY` | Clé Groq prod | Transcription audio `/api/transcribe`. |
| `MATH_CHALLENGE_SECRET` | Secret aléatoire d'au moins 32 caractères | Signe les contrôles anti-robot des formulaires. À définir séparément dans Preview et Production, sans jamais le committer. |
| `CONTACT_TO_EMAIL` | `quentin@hagnere-patrimoine.fr` ou boîte suivie | Destinataire interne formulaire. |
| `CONTACT_FROM_EMAIL` | `contact@hagnere-code.ai` | Expéditeur Resend (doit être DKIM-validé). |
| `NEXT_PUBLIC_CALENDLY_URL` | URL Calendly réelle | Optionnel — fallback `https://calendly.com/hagnere-patrimoine/hagnere-code-entretien-de-decouverte`. |
| `NEXT_PUBLIC_COOKIE_BANNER` | `1` après migration et audit | Affiche un choix accepter/refuser symétrique ; aucun événement facultatif ne part sans acceptation. |
| `NEXT_PUBLIC_FUNNEL_ANALYTICS_ENABLED` | `true` après migration et audit | Autorise le collecteur first-party Neon, sans IP, user-agent, cookie ni identifiant visiteur dans la table de mesure. |
| `TRUST_CF_CONNECTING_IP` | absent sur Vercel | À mettre à `1` uniquement sur un runtime réellement placé derrière Cloudflare ; sinon un client pourrait choisir son bucket IP. |
| `TRUST_X_FORWARDED_FOR` | absent sur Vercel | À mettre à `1` uniquement derrière un proxy administré qui réécrit l'en-tête ; absent sur un serveur directement exposé. |

Les autres secrets doivent être posés dans l'interface Vercel et limités aux
environnements qui en ont besoin. La configuration Wrangler ne concerne que la
chaîne Cloudflare alternative, non active en production.

> **Configuration préparée le 20 juillet 2026** : `MATH_CHALLENGE_SECRET` est
> défini séparément dans Preview et Production, sans valeur dans le dépôt. La
> production actuelle peut encore répondre `503` jusqu'au redéploiement du
> commit corrigé ; vérifier ensuite `GET /api/math-challenge` sans consigner le
> jeton retourné, puis une soumission valide.
> Ne pas conserver la valeur du secret dans ce dépôt.

> Nettoyage post-suppression de l'estimateur IA : `ANTHROPIC_API_KEY` et
> `SITE_ORIGIN` ne sont plus utilisés par le code — ils peuvent être retirés
> des variables Vercel et, si elles existent encore, des secrets Cloudflare.

> Nettoyage post-suppression de Cloudflare Turnstile (remplacé par la
> question de calcul maison `MathChallenge`) : `TURNSTILE_SECRET_KEY` et
> `NEXT_PUBLIC_TURNSTILE_SITE_KEY` ne sont plus utilisés — ils peuvent être
> retirés des secrets/variables du déploiement.

### 2 bis. Réglages anti-abus — rien à poser par défaut

Huit variables permettent d'ajuster les plafonds anti-abus. **Aucune n'est à
créer pour lancer** : chacune a un défaut sûr écrit dans le code, et c'est ce
défaut qui s'applique tant que la variable est absente. Elles sont listées ici
pour qu'un plafond atteint ne soit pas diagnostiqué comme une panne.

| Variable | Défaut | Ce qu'elle borne |
|---|---|---|
| `INQUIRY_RETRY_PER_IP_HOUR` | `30` | `/api/project-inquiry` — tentatives relâchées après un refus de validation ou un échec d'envoi, par IP et par heure |
| `INQUIRY_RETRY_GLOBAL_DAY` | `500` | `/api/project-inquiry` — mêmes tentatives, toutes IP confondues, par jour |
| `ANALYTICS_RATE_PER_IP_HOUR` | `200` | `/api/funnel-analytics` — événements acceptés, par IP et par heure |
| `ANALYTICS_RATE_PER_IP_DAY` | `600` | `/api/funnel-analytics` — par IP et par jour |
| `ANALYTICS_RATE_GLOBAL_DAY` | `5000` | `/api/funnel-analytics` — toutes IP confondues, par jour |
| `MATH_CHALLENGE_PER_IP_HOUR` | `60` | `/api/math-challenge` — équations servies, par IP et par heure (compteur mémoire, par instance) |
| `CSP_REPORT_PER_IP_HOUR` | `30` | `/api/csp-report` — rapports acceptés, par IP et par heure (compteur mémoire, par instance) |
| `TRANSCRIBE_MAX_CONCURRENT` | `4` | `/api/transcribe` — transcriptions simultanées par instance ; au-delà, `503` « réessayez » |

- [ ] Vérifier qu'aucune de ces huit variables n'a été posée par erreur avec
      autre chose qu'un entier positif. Elles sont lues avec `parseInt` : une
      valeur non entière produit `NaN`, la comparaison devient toujours fausse
      et **la limite en mémoire disparaît sans erreur ni journal**. En cas de
      doute, retirer la variable : le défaut du code est la valeur sûre.
- [ ] Pendant la première semaine de campagne, surveiller les réponses `429`
      de `/api/funnel-analytics` dans les journaux Vercel. Un refus de quota
      n'écrit aucune ligne en base et le navigateur ne rejoue pas l'événement :
      la seule trace est le code HTTP. Un trafic important derrière une même IP
      sortante — réseau d'entreprise, portail Wi-Fi — atteint
      `ANALYTICS_RATE_PER_IP_HOUR` en premier ; c'est le seul de ces plafonds
      qu'il soit légitime de relever pour une campagne. Ne jamais relever les
      plafonds de soumission de formulaire pour « faire du volume ».

Détail complet et effets de bord : [docs/variables-environnement.md](docs/variables-environnement.md).
Source de vérité des plafonds persistants : `src/lib/ai-rate-limit.ts`.

### 3. Vérifier les domaines DKIM Resend
Resend refuse les `from` non-vérifiés. Vérifier que `hagnere-code.ai` est
bien validé pour l'expéditeur `contact@`. Sinon les
confirmations `/api/project-inquiry` partiront en erreur 403.

### 3 bis. Planifier la purge des données

Lire `docs/procedure-purge-donnees.md`, désigner le responsable de l'exécution
trimestrielle et consigner chaque contrôle tant qu'une automatisation auditée
n'est pas en place. Les durées publiques ne doivent pas rester sans procédure.

Lire aussi `docs/procedure-exercice-droits-rgpd.md`, créer le registre d'exercice
des droits à accès restreint et tester une demande fictive couvrant la base,
la messagerie et les prestataires avant de considérer la procédure opérationnelle.

### 3 ter. Constituer les preuves juridiques de production

Avant de présenter l'ensemble comme opérationnellement conforme :

- archiver l'acte ou la décision fixant le siège au 82 impasse de Bellevue, sa
  date d'effet, la formalité en cours puis le Kbis/RNE et le nouveau SIRET dès
  qu'ils sont disponibles ; ne jamais réutiliser l'ancien SIRET ;
- compléter la fiche de chaque fournisseur réellement utilisé (entité du compte,
  plan, DPA accepté, région, sous-traitants, rétention, DPF ou CCT et version) ;
- refléter dans la politique publique le mécanisme de transfert effectivement
  applicable à chaque flux, puis conserver le moyen d'en obtenir copie ;
- tester les contacts d'incident client et fournisseur ainsi que la procédure
  d'exercice des droits ;
- joindre la version acceptée des CGV et, si nécessaire, le DPA et ses annexes
  complétées à chaque devis. Une publication web ou un modèle générique ne
  constitue pas cette preuve.

### 4. Assets visuels

- `/public/og-image.png` — présent ; vérifier son rendu dans un aperçu Open Graph.
- `/public/apple-touch-icon.png` — présent ; vérifier son rendu sur iOS.
- `/public/logos/logo-dark.png` — présent.

### 5. Vérifier l'URL Calendly
`https://calendly.com/hagnere-patrimoine/hagnere-code-entretien-de-decouverte`
est le fallback unique de `src/lib/calendly.ts`. Footer, widget, page de rendez-vous
et e-mails consomment tous cette source. Vérifier que ce slug existe sur le
compte Calendly ; sinon définir `NEXT_PUBLIC_CALENDLY_URL` avec une URL HTTPS
du domaine `calendly.com`.

## ⚖️ VOLET LÉGAL — état à vérifier avant publication

### Pages publiques (toutes en ligne et linkées)
- ✅ `/legal/mentions` — identité, siège au 82 impasse de Bellevue à Bassens, hébergeur Vercel, publication, responsabilité et réclamations
- ✅ `/legal/cgv` — cadre B2B, paiement, recette, propriété intellectuelle, données, responsabilité et litiges
- ✅ `/legal/confidentialite` — rôles, bases légales, prestataires, transferts, durées, dictée, droits et sécurité
- ✅ `/legal/cookies` — inventaire des stockages, opt-in analytics et Calendly bloqué avant action
- ✅ `/legal/reclamations` — procédure interne, Médiateur des entreprises et distinction B2B/B2C
- ✅ `/legal/accessibilite` — niveau non évalué, mesures, limites à auditer et contact

### Documents internes (dans `/docs/`)
- ✅ `/docs/registre-traitements.md` — registre article 30 à maintenir et à confronter à la configuration réelle
- ✅ `/docs/procedure-incident-rgpd.md` — articles 33/34 RGPD (notification 72h, 4 cas concrets)
- ✅ `/docs/policy-marketing-emails.md` — règles LCEN B2B / RGPD pour future newsletter
- ✅ `/docs/dpa-template.md` — modèle à compléter par mission ; ne jamais signer avec des champs génériques
- ✅ `/docs/procedure-purge-donnees.md` — contrôles, fournisseurs et preuves de purge à exécuter
- ✅ `/docs/procedure-exercice-droits-rgpd.md` — traitement multicanal des demandes d'accès, opposition, effacement et autres droits

### Sécurité technique
- ✅ Slug aléatoire (`public_slug`) sur `project_brief` (anti-IDOR, réservé backoffice)
- ✅ Rate-limit Postgres-backed (`inquiry`, `transcribe`, `sirene`) + question de calcul maison (`MathChallenge`, revalidée server-side) : secret configuré séparément en Preview et Production ; le redéploiement puis le smoke test `200` restent obligatoires
- ✅ Honeypot inline + `pf-hp` CSS (double anti-bot)
- ✅ Headers : HSTS preload, CSP, X-Frame, X-Content-Type, Permissions-Policy
- ✅ Validation phone serveur
- ✅ Logs PII : email haché en base64url tronqué (jamais en clair)
- ✅ Bannière cookies maison (`CookieBanner.tsx`, RGPD) — désactivée par défaut, prête à être activée via `NEXT_PUBLIC_COOKIE_BANNER=1`

### Risques sectoriels
- ✅ Mention AMF / "performances passées non garanties / capital non garanti" sur les cas `hagnere-investissement` et `hagnere-patrimoine` + bannière dédiée en bas de page

## 📋 ACTIONS ADMINISTRATIVES NON-TECHNIQUES (à faire dans le mois post-launch)

1. **Aucune inscription générale à la CNIL n'est à effectuer** : tenir le registre, suivre les traitements et documenter les contrôles.
2. **Souscrire une RC Pro adaptée** si ce n'est pas déjà fait, sans l'annoncer publiquement avant de pouvoir produire l'attestation.
3. **Contrats fournisseurs** : vérifier et archiver les DPA, entités, régions, rétentions, certifications DPF et/ou CCT réellement applicables pour Vercel, Neon, Resend, Google Workspace, Groq et Calendly.
4. **Accessibilité** : réaliser un audit RGAA représentatif avant de publier un statut ou un pourcentage de conformité.
5. **Trademark Sprint Fixe™** : l'audit a remplacé "MARQUE DÉPOSÉE 2024" par "MÉTHODE PROPRIÉTAIRE DEPUIS 2024". Si vous voulez réintroduire le ™ avec dépôt INPI réel, déposer la marque (~250 € auprès de l'INPI).
6. **CGV opposables** : joindre au devis un exemplaire durable de la version du 20 juillet 2026 et faire accepter expressément cette version ; la page web seule ne suffit pas.
7. **Paramètres commerciaux à confirmer** : moyens de paiement, acompte et échéancier habituels, contrats récurrents et éventuelle assurance RC Pro/cyber. Les documents actuels renvoient au devis et n'inventent aucune garantie.
8. **Propriété intellectuelle** : obtenir et archiver les cessions écrites nécessaires de chaque indépendant avant d'inclure sa création dans une cession client.
9. **Périmètre client** : confirmer que les ventes restent exclusivement professionnelles. Avant toute offre à un consommateur, mettre en place les documents B2C et adhérer réellement à un médiateur de la consommation.
10. **Identifiant d'établissement** : ajouter le SIRET actualisé lorsqu'il est officiellement disponible ; ne pas réutiliser l'ancien numéro d'établissement.

## ✅ SMOKE TEST avant push

À faire en local avant `git push` ou sur l'URL de preview Vercel :

### Routes principales (chaque page rend, h1 unique, pas de placeholder visible)
- [ ] `/` (Discovery 1 500 €/2j, footer liens légaux fonctionnels, CTA Calendly cliquable)
- [ ] `/services` (Construire / Faire grandir / Protéger & opérer)
- [ ] `/services/saas-applications-metier`
- [ ] `/services/outils-internes-sur-mesure`
- [ ] `/services/sites-vitrines`
- [ ] `/services/ecommerce`
- [ ] `/services/referencement-google`
- [ ] `/services/publicite-en-ligne`
- [ ] `/services/contenu-video` (JSON-LD cohérent ; aucun schéma retiré `FAQPage` ou `HowTo`)
- [ ] `/services/maintenance-evolution`
- [ ] `/services/securite-rgpd` (CTA → /demarrer-un-projet, JSON-LD complet)
- [ ] `/services/audit-technique`
- [ ] `/methode` (chiffres et composition d'équipe cohérents avec les sources actuelles)
- [ ] `/tarifs` (fourchettes présentées comme indicatives et non comme historique client sans preuve)
- [ ] `/realisations` (index et quatre études de cas accessibles)
- [ ] `/realisations/lmnp-ai` (témoignage signalé "produit interne du groupe")
- [ ] `/realisations/sci-ai`
- [ ] `/realisations/hagnere-patrimoine` (bandeau AMF en bas)
- [ ] `/realisations/hagnere-investissement` (bandeau AMF en bas, mention rendement)
- [ ] `/equipe` (7 personnes au total : 1 président, 3 CDI et 3 freelances ; statuts issus de `src/lib/team.ts`)
- [ ] `/contact`
- [ ] `/demarrer-un-projet` (funnel complet)
- [ ] `/outils` + `/outils/calculateur-cout-excel`
- [ ] `/outils/estimer-mon-projet` (redirect 308 vers /demarrer-un-projet)
- [ ] `/blog` (redirect 308 vers /)
- [ ] `/guide` (redirect 308 vers /guides)
- [ ] `/legal/mentions`
- [ ] `/legal/cgv` (B2B, paiement, recette, propriété, données, responsabilité et litiges)
- [ ] `/legal/confidentialite` (rôles, durées, dictée, transferts, prestataires et droits)
- [ ] `/legal/cookies` (stockages exacts, durées et blocage des services facultatifs)
- [ ] `/legal/reclamations` (aucun médiateur de la consommation inventé)
- [ ] `/legal/accessibilite` (statut non évalué tant qu'aucun audit complet n'existe)
- [ ] `/page-inexistante` (page 404 brandée)

### Flow de conversion critique
- [ ] Vérifier que `GET /api/math-challenge` répond `200` en Preview et Production après configuration du secret
- [ ] Sur Preview ou lors d'un test humain contrôlé, soumettre le funnel `/demarrer-un-projet` → email reçu côté admin et côté prospect
- [ ] Vérifier qu'une ligne `project_brief` est créée en base (avec `public_slug` rempli)
- [ ] Rejouer la même soumission avec la même clé d'idempotence : aucune seconde ligne métier ne doit être créée et les clés Resend doivent rester stables
- [ ] Simuler un échec Resend sur Preview : la réponse doit distinguer `captured: true` (brief conservé) de `captured: false`, sans exposer d'identifiant interne
- [ ] Sur Preview ou lors d'un test humain contrôlé, soumettre `/contact` → email reçu
- [ ] Vérifier qu'une réservation `ai_call_log` borne chaque appel accepté ; une issue n'est journalisée qu'en référence à cette réservation et un refus de quota n'ajoute aucune ligne d'issue
- [ ] Contrôler manuellement les anciens briefs éventuellement persistés sans notification ; aucun worker de réexpédition durable n'est encore déployé et aucun ancien email ne doit être renvoyé automatiquement sans revue

### SEO / sitemap
- [ ] Vérifier `https://hagnere-code.ai/sitemap.xml` (doit inclure toutes les pages légales, dont `/legal/reclamations`)
- [ ] Vérifier `https://hagnere-code.ai/robots.txt` (`Allow: /` en prod)
- [ ] Vérifier `https://hagnere-code.ai/llms.txt` (liens HTML canoniques ; aucun guide encore en revue)
- [ ] Tester un partage Open Graph via le Facebook Sharing Debugger
- [ ] Tester un partage via le Twitter Card Validator

### Sécurité
- [ ] `curl -I https://hagnere-code.ai` (HSTS, CSP, X-Frame, X-Content-Type)
- [ ] Tester les limites avec des doubles/mocks ou sur Preview dédiée ; ne pas envoyer une rafale de formulaires valides ni d'e-mails en production
- [ ] Vérifier le rate-limit persistant `/api/sirene` (60 requêtes / IP / heure) sans saturer l'API publique en production

### Légal
- [ ] Lire `/legal/confidentialite` en intégralité — vérifier que rien n'est faux factuel
- [ ] Lire `/legal/cookies` — comparer chaque clé au code et aux scripts réellement chargés
- [ ] Lire `/legal/accessibilite` — conserver « non évalué » tant que l'audit complet manque
- [ ] Faire relire les CGV et le DPA par un conseil avant un contrat à enjeu ou un traitement sensible
- [ ] Vérifier les bandeaux AMF sur `/realisations/hagnere-investissement` et `/realisations/hagnere-patrimoine`

## Récap des fixes appliqués (cumul des sessions)

- **P0 (16/16)** : harmonisations chiffrées, IDOR slug, /template supprimé, équipe portfolio, footer liens, CTA Calendly, etc.
- **P1 (23/23)** : not-found / error pages, dead code supprimé, JSON-LD complétés, anglicismes retirés, CGV art. 28 ajouté, etc.
- **Sécurité secondaire soldée dans le code** : rate-limits Postgres multi-instance, IP validée et en-têtes de proxy bornés, honeypot, défi signé, journaux liés à une réservation, délais Groq/Resend, idempotence des e-mails et absence d'identifiant numérique interne dans la réponse publique. Les limites architecturales restantes sont documentées dans la règle d'or et ne valent pas certification de sécurité.
- **Maillage interne** : les quatre études de cas sont reliées depuis `/realisations`, le footer et le sitemap ; breadcrumbs et domaine canonique `.ai` sont conservés partout.
- **Juridique documenté** : pages publiques alignées sur les traitements observés, statut d'accessibilité non évalué, registre interne, procédure incident/purge et modèle DPA à compléter. Cela ne remplace ni l'exécution des procédures ni la revue d'un conseil pour un contrat à enjeu.

**Validation finale** : inscrire ici le commit exact, le nombre réel de routes et les résultats TypeScript, lint, tests, build et smoke tests obtenus sur ce commit.
