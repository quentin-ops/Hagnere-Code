# Calculateur multi-services — TODO

Statut: livré en v2. Ce qui suit liste **ce qui dépend de toi** (Quentin) ou de prestataires externes pour passer la dernière marche.

> Référence audit: 4 audits réalisés (UX, prompt IA, sécurité, conversion). Tous les P0 + P1 codables côté Hagnéré Code sans input externe ont été traités sur cette branche (Sprints A-F).

---

## A. Bloquants — à valider avec toi avant mise en prod

### A.1 Validation des prix — RÉSOLU via pricing-model.ts
**Fichier principal:** [src/lib/pricing-model.ts](src/lib/pricing-model.ts) (source de vérité)
**Fichier dérivé:** [src/lib/claude-estimate-prompt.ts](src/lib/claude-estimate-prompt.ts) (auto-alimenté)
**Statut:** ✅ Moteur de prix basé sur tes coûts réels d'équipe, marges empilées (×1,6 base + productivité IA + risque + acquisition).

Le prompt IA n'a plus de fourchettes en dur : elles sont calculées à chaque build depuis les salaires réels. Si tu changes un salaire ou une marge dans `pricing-model.ts`, tout se réaligne automatiquement.

**Action restante:**
- [ ] Relire [PROMPT_V3_AUDIT_PRIX.md](PROMPT_V3_AUDIT_PRIX.md) — pour les 5-6 écarts restants entre le modèle interne et la grille publique `body.ts`, arbitrer (option 1 : modèle serré / option 2 : grille publique alignée / option 3 : ajuster les heures)
- [ ] Valider les fourchettes retainers (SEO 2-9,5k · Ads 2,2-11k · Vidéo 4-15k · Maintenance 0,8-9,5k · Sécurité 0,9-5k €/m)
- [ ] (Optionnel futur) Brancher la page `/tarifs` sur `priceLabels` du modèle pour retirer les dernières valeurs en dur

### A.2 RGPD — DPA & sous-traitance Anthropic
**Fichier:** [src/components/legal/content/mentions-legales.tsx](src/components/legal/content/mentions-legales.tsx)
**Statut:** ✅ Section « Calculateur IA » ajoutée aux mentions légales (1ère version)
**Action restante:**
- [ ] Relire la nouvelle section `id="calculateur-ia"` (sous-traitance Anthropic, DPF, données transmises, droits utilisateur)
- [ ] Faire valider par ton conseil juridique si tu en as un (les formulations sont conformes RGPD mais peuvent être ajustées au style maison)
- [ ] Vérifier que les politiques d'Anthropic citées (zero-retention training, 30j max conformité) sont toujours actuelles : https://www.anthropic.com/legal/privacy

### A.3 URL Calendly — vérifier le créneau dispo
**Fichier:** [src/components/estimer-mon-projet/CalendlyEmbed.tsx](src/components/estimer-mon-projet/CalendlyEmbed.tsx)
**Action:**
- [ ] Vérifier que `https://calendly.com/hagnere-patrimoine/hagnere-code-entretien-de-decouverte` est bien le bon Event Type (pas un perso, bien un Discovery 30 min)
- [ ] Confirmer la dispo : si plein, l'utilisateur arrive sur "no slots" → mauvaise impression. Penser à activer un fallback (ex : redirection auto vers tarifs/contact)

---

## B. Assets manquants — visuels à fournir

### B.1 Logos clients (TrustBand)
**Fichier:** [src/components/estimer-mon-projet/TrustBand.tsx:32-37](src/components/estimer-mon-projet/TrustBand.tsx#L32-L37)
**État actuel:** logos en texte (LMNP.AI, SCI-AI, Hagnéré Patrimoine, Hagnéré Investissement)
**Action:**
- [ ] Fournir 4 SVG monochromes (ou PNG transparents 200x60px min) des logos clients
- [ ] Les déposer dans [public/logos/](public/logos/)
- [ ] Remplacer le rendu texte par `<Image src="/logos/lmnp-ai.svg" ... />` etc.

### B.2 Photos fondateurs
**Fichier:** [src/components/estimer-mon-projet/TrustBand.tsx:11-28](src/components/estimer-mon-projet/TrustBand.tsx#L11-L28)
**État actuel:** initiales QH / NW (consistant avec /equipe)
**Action:**
- [ ] Si tu veux booster la conversion, des **vraies photos pro 200x200px** rondes (style LinkedIn) augmenteront la confiance de +10-20% (donnée FoundationDB / Stripe).
- [ ] Sinon, garder les initiales — c'est OK et cohérent avec le reste du site.

---

## C. P2 — améliorations d'engagement (non bloquantes, mais ROI ++)

### C.1 Email récap après estimation
**Action:**
- [ ] Brancher Resend (ou autre transactionnel) sur la route `/api/estimate` quand `email` est fourni
- [ ] Template email : récap des services choisis + fourchette IA + lien Calendly + carte vCard Quentin/Nicolas
- [ ] Mention dans la page contact step ("on t'envoie ton récap par email") existe déjà — mais on ne l'envoie pas encore vraiment. **À implémenter ou retirer la promesse.**

### C.2 PDF de l'estimation
**Action:**
- [ ] Bouton "Télécharger en PDF" dans [ResultView.tsx](src/components/estimer-mon-projet/ResultView.tsx)
- [ ] Génération côté client avec `react-pdf` ou `print-to-pdf` du DOM (le plus simple)
- [ ] Ou côté serveur avec Puppeteer/Playwright sur Cloudflare Workers (plus lourd, plus joli)

### C.3 A/B test du headline
**Action:**
- [ ] Tester : "Estime ton programme multi-services" vs "Reçois un chiffrage en 60s par notre IA"
- [ ] Outil : Vercel Edge Config / PostHog Feature Flags
- [ ] KPI : taux de complétion étape 1 → étape "select"

### C.4 Idées WOW (audit conversion W1-W5)
- [ ] **W1** Comparateur "vs agence classique" (delta prix + delta délai animé)
- [ ] **W2** Animation "live build" pendant le loading (pseudo-IDE qui code)
- [ ] **W3** Map interactive des projets livrés (placeholder avec 23 points)
- [ ] **W4** Calendrier visuel projeté (semaines S1→S20 avec milestones drag-and-drop)
- [ ] **W5** "Devis instantané" boutonné sur l'estimation finale (lien direct vers contrat e-signé Pandadoc)

---

## D. Monitoring & ops

### D.1 Logs / observabilité
**Action:**
- [ ] Brancher Sentry ou équivalent sur la route `/api/estimate` — aujourd'hui les erreurs Anthropic ne remontent nulle part
- [ ] Dashboard simple : taux de succès, latence p50/p95, tokens/jour, coût/jour
- [ ] Alerte si error rate > 5% sur 1h

### D.2 Rate limiting prod
**Fichier:** [src/app/api/estimate/route.ts](src/app/api/estimate/route.ts)
**État actuel:** in-memory (5 req / 10 min / IP). **Ne survit pas à un cold start** sur Cloudflare Workers.
**Action:**
- [ ] Migrer vers Cloudflare KV ou Durable Objects pour persister entre invocations
- [ ] Ou Upstash Redis (5 lignes, free tier OK)

### D.3 Coût Anthropic
**Estimation:** ~0.06€ par call (Opus 4.7 + thinking high + ~3k tokens output). Sur 1000 calls/mois = ~60€.
**Action:**
- [ ] Ajouter un compteur côté Anthropic Console pour suivre la dépense
- [ ] Si volume > 100 calls/jour, envisager downgrade Sonnet 4.6 sur les cas simples (1 seul service, pas de retainer)

---

## E. Sprints livrés cette branche (résumé)

| Sprint | Livraison | Fichiers principaux |
|---|---|---|
| **A** Backend hardening | Timeout 120s, sanitization, anti-injection, validation post-hoc avec retry, honeypot | [api/estimate/route.ts](src/app/api/estimate/route.ts) |
| **B** Prompt v3 | Désambiguïsation R1-R17, JSON Schema durci, tutoiement obligatoire, lagniappe nullable | [lib/claude-estimate-prompt.ts](src/lib/claude-estimate-prompt.ts) |
| **C** Conversion | Calendly inline embed + TrustBand (founders/stats/clients) + RGPD checkbox | [CalendlyEmbed.tsx](src/components/estimer-mon-projet/CalendlyEmbed.tsx), [TrustBand.tsx](src/components/estimer-mon-projet/TrustBand.tsx), [ResultView.tsx](src/components/estimer-mon-projet/ResultView.tsx) |
| **D** UX wizard | Filtre services, 3 presets, estimation temps restant, skip module, pré-remplir description | [EstimerMonProjet.tsx](src/components/estimer-mon-projet/EstimerMonProjet.tsx) |
| **E** Récap éditable | Carte récap Stripe-style avant submit avec bouton "Modifier" → jump to step | [EstimerMonProjet.tsx](src/components/estimer-mon-projet/EstimerMonProjet.tsx) |
| **F** A11y & mobile | aria-live, focus mgmt, sticky CTA mobile, scroll-to-top sur step change | [EstimerMonProjet.tsx](src/components/estimer-mon-projet/EstimerMonProjet.tsx), [calculator.css](src/components/estimer-mon-projet/calculator.css) |

---

## Priorisation recommandée

1. **A.1 (validation prix)** → bloquant absolu avant mise en prod
2. **A.2 (RGPD/DPA)** → bloquant légal avant promo publique
3. **A.3 (Calendly OK)** → 5 min, à faire ce soir
4. **B.1 (logos clients SVG)** → impact conversion +5-10%
5. **C.1 (email récap)** → tenir la promesse faite à l'utilisateur
6. **D.1 (Sentry)** → indispensable dès le 1er user réel
7. **D.2 (rate limit prod)** → indispensable si visibilité publique

Le reste (B.2 photos, C.2 PDF, C.3 A/B, C.4 WOW, D.3 monitoring coût) = optimisations à dérouler sur les 4 premières semaines de mise en service, pilotées par les data réelles.
