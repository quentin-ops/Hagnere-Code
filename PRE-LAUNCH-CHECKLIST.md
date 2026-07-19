# Pre-launch checklist — Hagnéré Code

Tout ce qui n'a pas pu être fait par l'agent et qui demande une action humaine
avant le push en production. Le build passe (`next build` ✓ — 43 pages
générées), TypeScript est clean, les fixes P0/P1/P2 du rapport d'audit ont
été appliqués au code, et le volet légal est complet (voir `git diff` pour
le détail complet).

## 🚨 À FAIRE AVANT LE DÉPLOIEMENT

### 1. Migrations base de données
Deux migrations à appliquer dans l'ordre sur la base Neon de production :

```bash
npx drizzle-kit migrate
```

- `drizzle/0002_brief_public_slug.sql` — colonne `public_slug` sur `project_brief` (anti-IDOR).
- `drizzle/0003_jazzy_pepper_potts.sql` — table `ai_call_log` (rate-limit Postgres-backed + observabilité IA).

Sans la première, `/api/project-inquiry` plantera. Sans la seconde, le
rate-limit sera dégradé (in-memory uniquement, perte au cold start) et les
métriques IA ne seront pas persistées.

### 2. Variables d'environnement Cloudflare
À configurer sur le worker en production :

| Variable | Valeur attendue | Usage |
|---|---|---|
| `NEXT_PUBLIC_ENV` | `production` | Active `index/follow` dans `robots.ts` et `metadata.robots`. Sans ça → site `noindex`. **Déjà déclaré dans `wrangler.jsonc`**. |
| `DATABASE_URL` | URL Neon prod | Persistance des briefs, ai_call_log. |
| `RESEND_API_KEY` | Clé Resend prod | Envoi emails formulaire. |
| `GROQ_API_KEY` | Clé Groq prod | Transcription audio `/api/transcribe`. |
| `CONTACT_TO_EMAIL` | `hello@hagnere-code.fr` | Destinataire interne formulaire. |
| `CONTACT_FROM_EMAIL` | `contact@hagnere-code.fr` | Expéditeur Resend (doit être DKIM-validé). |
| `NEXT_PUBLIC_CALENDLY_URL` | URL Calendly réelle | Optionnel — fallback `https://calendly.com/hagnere-patrimoine/hagnere-code-entretien-de-decouverte`. |
| `NEXT_PUBLIC_COOKIE_BANNER` | `0` (par défaut désactivé) | Mettre `1` le jour où un outil analytique est ajouté (Plausible, GA, etc.). |

Les autres secrets doivent être posés via `wrangler secret put` ou l'UI Cloudflare.

> Nettoyage post-suppression de l'estimateur IA : `ANTHROPIC_API_KEY` et
> `SITE_ORIGIN` ne sont plus utilisés par le code — ils peuvent être retirés
> des secrets du worker Cloudflare après le prochain déploiement.

> Nettoyage post-suppression de Cloudflare Turnstile (remplacé par la
> question de calcul maison `MathChallenge`) : `TURNSTILE_SECRET_KEY` et
> `NEXT_PUBLIC_TURNSTILE_SITE_KEY` ne sont plus utilisés — ils peuvent être
> retirés des secrets/variables du déploiement, et le widget peut être
> supprimé du dashboard Cloudflare.

### 3. Vérifier les domaines DKIM Resend
Resend refuse les `from` non-vérifiés. Vérifier que `hagnere-code.fr` est
bien validé pour les expéditeurs `contact@` et `hello@`. Sinon les
confirmations `/api/project-inquiry` partiront en erreur 403.

### 4. Assets visuels manquants
Trois fichiers physiques sont référencés mais absents :

- `/public/og-image.png` (1200 × 630) — utilisé partout dans les `openGraph`.
- `/public/apple-touch-icon.png` (180 × 180) — référencé dans `layout.tsx`.
- `/public/logos/logo-dark.png` — déjà présent ✅.

Tant que les deux PNG manquants ne sont pas produits, les partages réseaux
sociaux n'auront pas d'image et iOS affichera un favicon dégradé.

### 5. Vérifier l'URL Calendly
`https://calendly.com/hagnere-patrimoine/hagnere-code-entretien-de-decouverte`
est codée en dur dans le footer React et utilisée comme fallback. Vérifier que
ce slug existe sur le compte Calendly. Sinon, créer le créneau ou définir
`NEXT_PUBLIC_CALENDLY_URL`.

## ⚖️ VOLET LÉGAL — état complet

### Pages publiques (toutes en ligne et linkées)
- ✅ `/legal/mentions` — éditeur, hébergeur, sous-traitance, IA, RGPD complet
- ✅ `/legal/cgv` — clauses art. 28 RGPD, confidentialité, force majeure, réversibilité
- ✅ `/legal/confidentialite` — DPO non désigné, durées détaillées, transferts UE, sous-traitants détaillés (tableau), section Usage de l'IA (AI Act), article 22 RGPD, droits, incidents
- ✅ `/legal/cookies` — déclaration "aucun cookie soumis à consentement" + tableau nominatif des 4 stockages localStorage
- ✅ `/legal/accessibilite` (NOUVEAU) — engagement RGAA 4.1 / WCAG 2.1 AA, état partiel, non-conformités, alternatives, plan d'amélioration, voies de recours

### Documents internes (dans `/docs/`)
- ✅ `/docs/registre-traitements.md` — article 30 RGPD (5 traitements documentés)
- ✅ `/docs/procedure-incident-rgpd.md` — articles 33/34 RGPD (notification 72h, 4 cas concrets)
- ✅ `/docs/policy-marketing-emails.md` — règles LCEN B2B / RGPD pour future newsletter
- ✅ `/docs/dpa-template.md` — template d'accord de sous-traitance art. 28 RGPD à annexer aux contrats clients

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

1. **Inscrire HAGNÉRÉ CODE SAS auprès de la CNIL** : pas obligatoire (registre tenu en interne), mais souscription au service ALERTES CNIL recommandée pour rester informé.
2. **Souscrire une RC Pro adaptée** si pas déjà fait (les CGV mentionnent une "RC Pro souscrite" — fournir l'attestation au devis comme annoncé).
3. **DPF / SCC contractuels** : obtenir et archiver les copies de DPF/SCC signées avec Anthropic, Resend, Cloudflare, Groq, Calendly. Les références au DPF doivent être à jour (Data Privacy Framework actif depuis juillet 2023, validité contestable jusqu'à un éventuel "Schrems III").
4. **Audit RGAA externe** : planifier un audit indépendant sur 12 mois (engagement public dans `/legal/accessibilite`).
5. **Trademark Sprint Fixe™** : l'audit a remplacé "MARQUE DÉPOSÉE 2024" par "MÉTHODE PROPRIÉTAIRE DEPUIS 2024". Si vous voulez réintroduire le ™ avec dépôt INPI réel, déposer la marque (~250 € auprès de l'INPI).

## ✅ SMOKE TEST avant push

À faire en local avant `git push` ou sur l'URL preview Cloudflare :

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
- [ ] `/methode` (22/23 projets, équipe de 6, pas de noms de concurrents, MÉTHODE PROPRIÉTAIRE)
- [ ] `/tarifs` (22/23 projets, Essentiel 6–15 k€)
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
- [ ] `/legal/cgv` (sections art. 28, confidentialité, force majeure, réversibilité)
- [ ] `/legal/confidentialite` (DPO, durées tableau, IA, transferts UE, sous-traitants tableau)
- [ ] `/legal/cookies` (déclaration "aucun cookie" + tableau nominatif)
- [ ] **`/legal/accessibilite` (NOUVEAU)**
- [ ] `/page-inexistante` (page 404 brandée)

### Flow de conversion critique
- [ ] Soumettre le funnel `/demarrer-un-projet` → email reçu côté admin et côté prospect
- [ ] Vérifier qu'une ligne `project_brief` est créée en base (avec `public_slug` rempli)
- [ ] Soumettre `/contact` (formulaire footer) → email reçu
- [ ] Vérifier qu'une ligne `ai_call_log` est créée à chaque appel `/api/project-inquiry`

### SEO / sitemap
- [ ] Vérifier `https://hagnere-code.fr/sitemap.xml` (doit inclure /etudes-de-cas et /legal/accessibilite)
- [ ] Vérifier `https://hagnere-code.fr/robots.txt` (`Allow: /` en prod)
- [ ] Tester un partage Open Graph via le Facebook Sharing Debugger
- [ ] Tester un partage via le Twitter Card Validator

### Sécurité
- [ ] `curl -I https://hagnere-code.fr` (HSTS, CSP, X-Frame, X-Content-Type)
- [ ] Tester rate-limit `/api/project-inquiry` (5 requêtes / IP / heure)
- [ ] Tester rate-limit `/api/sirene` (60 req / IP / heure)

### Légal
- [ ] Lire `/legal/confidentialite` en intégralité — vérifier que rien n'est faux factuel
- [ ] Lire `/legal/cookies` — confirmer que "aucun cookie soumis à consentement" reste vrai
- [ ] Lire `/legal/accessibilite` — vérifier la liste des non-conformités
- [ ] Lire `/legal/cgv` — confirmer la clause art. 28 RGPD avec votre conseil
- [ ] Vérifier les bandeaux AMF sur `/realisations/hagnere-investissement` et `/realisations/hagnere-patrimoine`

## Récap des fixes appliqués (cumul des sessions)

- **P0 (16/16)** : harmonisations chiffrées, IDOR slug, /template supprimé, équipe portfolio, footer liens, CTA Calendly, etc.
- **P1 (23/23)** : not-found / error pages, dead code supprimé, JSON-LD complétés, anglicismes retirés, CGV art. 28 ajouté, etc.
- **P2 (10/12)** : rate-limit Sirene, phone validation, honeypot, logs PII, dates Journal, env vars, ai_call_log Postgres-backed.
- **Maillage interne** : /etudes-de-cas linké depuis /realisations + footer + sitemap, breadcrumbs corrigés, .ai → .fr partout.
- **Légal complet** : DPO, durées détaillées, IA (AI Act), transferts UE, sous-traitants tableau, art. 22, page accessibilité, AMF investissement/patrimoine, registre des traitements (interne), procédure incident, policy marketing emails, DPA template, bannière cookies pré-installée.

**Build final** : ✓ 43 pages, TypeScript clean, lint avec 9 erreurs résiduelles non-bloquantes (composants legacy unused).
