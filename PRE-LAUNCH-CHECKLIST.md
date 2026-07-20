# Pre-launch checklist — Hagnéré Code

Tout ce qui n'a pas pu être fait par l'agent et qui demande une action humaine
avant le push en production. Les commandes de build, tests, lint et vérification
Vercel doivent être relancées sur le commit exact à déployer ; ne pas reprendre
un ancien nombre de pages ou un ancien résultat de contrôle.

## 🚨 À FAIRE AVANT LE DÉPLOIEMENT

### 1. Migrations base de données
Les migrations versionnées du dossier `drizzle/` sont à appliquer dans l'ordre sur la base Neon de production :

```bash
npx drizzle-kit migrate
```

- `drizzle/0000_initial.sql` — création idempotente de `project_brief`, ajout de `public_slug`, création de `ai_call_log` et de ses index.

Sans cette migration, `/api/project-inquiry` ne peut pas garantir la persistance
des demandes et `/api/transcribe` renvoie volontairement `503` afin de ne pas
contourner son rate-limit sur un appel externe facturé.

### 2. Variables d'environnement Vercel
À configurer sur le projet Vercel actuellement utilisé en production :

| Variable | Valeur attendue | Usage |
|---|---|---|
| `NEXT_PUBLIC_ENV` | `production` | Active `index/follow` dans `robots.ts` et `metadata.robots`. Sans ça → site `noindex`. |
| `DATABASE_URL` | URL Neon prod | Persistance des briefs, ai_call_log. |
| `RESEND_API_KEY` | Clé Resend prod | Envoi emails formulaire. |
| `GROQ_API_KEY` | Clé Groq prod | Transcription audio `/api/transcribe`. |
| `CONTACT_TO_EMAIL` | `quentin@hagnere-patrimoine.fr` ou boîte suivie | Destinataire interne formulaire. |
| `CONTACT_FROM_EMAIL` | `contact@hagnere-code.ai` | Expéditeur Resend (doit être DKIM-validé). |
| `NEXT_PUBLIC_CALENDLY_URL` | URL Calendly réelle | Optionnel — fallback `https://calendly.com/hagnere-patrimoine/hagnere-code-entretien-de-decouverte`. |
| `NEXT_PUBLIC_COOKIE_BANNER` | `0` ou absent | Tant que la bannière est désactivée, les événements analytics first-party restent eux aussi désactivés. |

Les autres secrets doivent être posés dans l'interface Vercel et limités aux
environnements qui en ont besoin. La configuration Wrangler ne concerne que la
chaîne Cloudflare alternative, non active en production.

> Nettoyage post-suppression de l'estimateur IA : `ANTHROPIC_API_KEY` et
> `SITE_ORIGIN` ne sont plus utilisés par le code — ils peuvent être retirés
> des variables Vercel et, si elles existent encore, des secrets Cloudflare.

> Nettoyage post-suppression de Cloudflare Turnstile (remplacé par la
> question de calcul maison `MathChallenge`) : `TURNSTILE_SECRET_KEY` et
> `NEXT_PUBLIC_TURNSTILE_SITE_KEY` ne sont plus utilisés — ils peuvent être
> retirés des secrets/variables du déploiement.

### 3. Vérifier les domaines DKIM Resend
Resend refuse les `from` non-vérifiés. Vérifier que `hagnere-code.ai` est
bien validé pour l'expéditeur `contact@`. Sinon les
confirmations `/api/project-inquiry` partiront en erreur 403.

### 3 bis. Planifier la purge des données

Lire `docs/procedure-purge-donnees.md`, désigner le responsable de l'exécution
trimestrielle et consigner chaque contrôle tant qu'une automatisation auditée
n'est pas en place. Les durées publiques ne doivent pas rester sans procédure.

### 4. Assets visuels

- `/public/og-image.png` — présent ; vérifier son rendu dans un aperçu Open Graph.
- `/public/apple-touch-icon.png` — présent ; vérifier son rendu sur iOS.
- `/public/logos/logo-dark.png` — présent.

### 5. Vérifier l'URL Calendly
`https://calendly.com/hagnere-patrimoine/hagnere-code-entretien-de-decouverte`
est codée en dur dans le footer React et utilisée comme fallback. Vérifier que
ce slug existe sur le compte Calendly. Sinon, créer le créneau ou définir
`NEXT_PUBLIC_CALENDLY_URL`.

## ⚖️ VOLET LÉGAL — état à vérifier avant publication

### Pages publiques (toutes en ligne et linkées)
- ✅ `/legal/mentions` — identité, double adresse transitoire, hébergeur Vercel, publication, responsabilité et réclamations
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

### Sécurité technique
- ✅ Slug aléatoire (`public_slug`) sur `project_brief` (anti-IDOR, réservé backoffice)
- ✅ Rate-limit Postgres-backed (lib `ai-rate-limit`) + question de calcul maison (`MathChallenge`, revalidée server-side)
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
- [ ] `/services/contenu-video` (JSON-LD avec offers + FAQPage)
- [ ] `/services/maintenance-evolution`
- [ ] `/services/securite-rgpd` (CTA → /demarrer-un-projet, JSON-LD complet)
- [ ] `/services/audit-technique`
- [ ] `/methode` (chiffres et composition d'équipe cohérents avec les sources actuelles)
- [ ] `/tarifs` (fourchettes présentées comme indicatives et non comme historique client sans preuve)
- [ ] `/realisations` (méta-discours nettoyé, lien vers /etudes-de-cas)
- [ ] `/realisations/lmnp-ai` (témoignage signalé "produit interne du groupe")
- [ ] `/realisations/sci-ai`
- [ ] `/realisations/hagnere-patrimoine` (bandeau AMF en bas)
- [ ] `/realisations/hagnere-investissement` (bandeau AMF en bas, mention rendement)
- [ ] **`/etudes-de-cas` (NOUVEAU — index)**
- [ ] `/etudes-de-cas/saas-b2b-reprise-app-orpheline` (breadcrumb : Accueil / Études de cas / Maintenance / Cas)
- [ ] `/equipe` (6 personnes en CDI, légende cliquez pour LinkedIn)
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
- [ ] Soumettre le funnel `/demarrer-un-projet` → email reçu côté admin et côté prospect
- [ ] Vérifier qu'une ligne `project_brief` est créée en base (avec `public_slug` rempli)
- [ ] Soumettre `/contact` (formulaire footer) → email reçu
- [ ] Vérifier qu'une ligne `ai_call_log` est créée à chaque appel `/api/project-inquiry`

### SEO / sitemap
- [ ] Vérifier `https://hagnere-code.ai/sitemap.xml` (doit inclure toutes les pages légales, dont `/legal/reclamations`)
- [ ] Vérifier `https://hagnere-code.ai/robots.txt` (`Allow: /` en prod)
- [ ] Tester un partage Open Graph via le Facebook Sharing Debugger
- [ ] Tester un partage via le Twitter Card Validator

### Sécurité
- [ ] `curl -I https://hagnere-code.ai` (HSTS, CSP, X-Frame, X-Content-Type)
- [ ] Tester rate-limit `/api/project-inquiry` (5 requêtes / IP / heure)
- [ ] Tester rate-limit `/api/sirene` (60 req / IP / heure)

### Légal
- [ ] Lire `/legal/confidentialite` en intégralité — vérifier que rien n'est faux factuel
- [ ] Lire `/legal/cookies` — comparer chaque clé au code et aux scripts réellement chargés
- [ ] Lire `/legal/accessibilite` — conserver « non évalué » tant que l'audit complet manque
- [ ] Faire relire les CGV et le DPA par un conseil avant un contrat à enjeu ou un traitement sensible
- [ ] Vérifier les bandeaux AMF sur `/realisations/hagnere-investissement` et `/realisations/hagnere-patrimoine`

## Récap des fixes appliqués (cumul des sessions)

- **P0 (16/16)** : harmonisations chiffrées, IDOR slug, /template supprimé, équipe portfolio, footer liens, CTA Calendly, etc.
- **P1 (23/23)** : not-found / error pages, dead code supprimé, JSON-LD complétés, anglicismes retirés, CGV art. 28 ajouté, etc.
- **P2 (10/12)** : rate-limit Sirene, phone validation, honeypot, logs PII, dates Journal, env vars, ai_call_log Postgres-backed.
- **Maillage interne** : /etudes-de-cas linké depuis /realisations + footer + sitemap, breadcrumbs corrigés et domaine canonique `.ai` conservé partout.
- **Juridique documenté** : pages publiques alignées sur les traitements observés, statut d'accessibilité non évalué, registre interne, procédure incident/purge et modèle DPA à compléter. Cela ne remplace ni l'exécution des procédures ni la revue d'un conseil pour un contrat à enjeu.

**Validation finale** : inscrire ici le commit exact, le nombre réel de routes et les résultats TypeScript, lint, tests, build et smoke tests obtenus sur ce commit.
