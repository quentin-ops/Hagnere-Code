export const symptomsHtml = `
<!-- SYMPTÔMES · phrases qu'on entend en call de cadrage -->
<section class="sr-symp">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Symptômes que vous reconnaissez</div>
        <h2>Si l'une de ces phrases<br>vous a <em>déjà traversé l'esprit</em>,<br>on a un truc à se dire.</h2>
      </div>
      <div class="right">
        Six phrases entendues mot pour mot en call de cadrage avec des CTO, DAF et DPO de PME tech françaises.
        <b>Si vous en cochez 2, c'est urgent.</b> Si vous en cochez 4, vous êtes déjà exposé à une sanction CNIL ou
        à un blocage de mise en prod sous AI Act.
      </div>
    </div>

    <div class="sr-symp-grid">

      <article class="sr-symp-card reveal">
        <div class="sr-symp-tag sr-symp-tag-cto">CTO · SaaS B2B</div>
        <blockquote class="sr-symp-quote">
          « On a signé <em>Anthropic</em> sans lire le DPA.
          Et <em>OpenAI</em>, et <em>Pinecone</em>, et probablement <em>Vercel</em>. »
        </blockquote>
        <div class="sr-symp-answer">
          <div class="sr-symp-answer-ic">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>
          </div>
          <div>
            <b>Ce qu'on fait :</b> cartographie complète des sous-traitants IA, vérification SCC + résidence
            données, mise à jour des DPA manquants, registre RGPD propre. Livré en 2 semaines.
          </div>
        </div>
      </article>

      <article class="sr-symp-card reveal reveal-d-1">
        <div class="sr-symp-tag sr-symp-tag-dpo">DPO interne · ETI 350 salariés</div>
        <blockquote class="sr-symp-quote">
          « Notre <em>registre des traitements</em> date de 2022.
          Personne ne sait où sont les <em>fichiers Excel</em> qui le tenaient à jour. »
        </blockquote>
        <div class="sr-symp-answer">
          <div class="sr-symp-answer-ic">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>
          </div>
          <div>
            <b>Ce qu'on fait :</b> reprise du registre, interviews services, intégration dans un outil
            (Notion, Dastra, ou votre stack interne), procédure de mise à jour mensuelle. Plus de Excel orphelin.
          </div>
        </div>
      </article>

      <article class="sr-symp-card reveal reveal-d-2">
        <div class="sr-symp-tag sr-symp-tag-ceo">CEO · startup 25 personnes</div>
        <blockquote class="sr-symp-quote">
          « On ne sait pas si <em>l'AI Act</em> nous concerne.
          Notre feature de scoring candidat sort en <em>septembre 2026</em>. »
        </blockquote>
        <div class="sr-symp-answer sr-symp-answer-warn">
          <div class="sr-symp-answer-ic">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/></svg>
          </div>
          <div>
            <b>Probablement haut risque (Annexe III).</b> Documentation technique, supervision humaine, registre UE,
            tests de biais à prévoir. <b>Sanction max : 35 M€ ou 7 % CA.</b> On classe + on prépare en 4 semaines.
          </div>
        </div>
      </article>

      <article class="sr-symp-card reveal">
        <div class="sr-symp-tag sr-symp-tag-cto">Lead dev · scale-up 80 pers.</div>
        <blockquote class="sr-symp-quote">
          « Notre <em>dernier pentest</em>, c'était… <em>jamais ?</em>
          Et on vient de signer un client qui demande un <em>SOC 2 Type II</em>. »
        </blockquote>
        <div class="sr-symp-answer">
          <div class="sr-symp-answer-ic">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>
          </div>
          <div>
            <b>Ce qu'on fait :</b> audit applicatif (boîte grise) + SAST/DAST en CI + mise en place des contrôles
            SOC 2 (logs, IAM, change mgmt, business continuity). Pen-test offensif sous-traité PASSI.
            <b>SOC 2 readiness en 12-16 semaines.</b>
          </div>
        </div>
      </article>

      <article class="sr-symp-card reveal reveal-d-1">
        <div class="sr-symp-tag sr-symp-tag-daf">DAF · groupe industriel</div>
        <blockquote class="sr-symp-quote">
          « On a reçu un <em>courrier de la CNIL</em>.
          Notre avocat habituel ne fait pas de RGPD technique. »
        </blockquote>
        <div class="sr-symp-answer sr-symp-answer-urgent">
          <div class="sr-symp-answer-ic">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
          </div>
          <div>
            <b>Procédure d'urgence :</b> diagnostic sous 48h, réponse argumentée à la CNIL, plan de mise en
            conformité défendable, escorte juridique avec un cabinet partenaire si demande contradictoire.
            <b>Délai légal CNIL : généralement 1 mois.</b>
          </div>
        </div>
      </article>

      <article class="sr-symp-card reveal reveal-d-2">
        <div class="sr-symp-tag sr-symp-tag-rh">RH · ETI 600 salariés</div>
        <blockquote class="sr-symp-quote">
          « On utilise <em>ChatGPT</em> pour résumer les <em>CV</em>.
          On ne sait pas si on a le droit. »
        </blockquote>
        <div class="sr-symp-answer">
          <div class="sr-symp-answer-ic">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>
          </div>
          <div>
            <b>Probablement non sans cadrage.</b> Recrutement = traitement à haut risque (RGPD + AI Act 2026).
            On cadre l'usage : DPIA, formation équipe, contrat ChatGPT Enterprise (zéro entraînement, EU residency),
            charte interne, validation humaine obligatoire.
          </div>
        </div>
      </article>

    </div>

    <div class="sr-symp-foot reveal">
      <div class="sr-symp-foot-l">
        <div class="sr-symp-foot-ic">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
          </svg>
        </div>
        <div class="sr-symp-foot-text">
          <b>Vous reconnaissez d'autres phrases ?</b> Si la vôtre n'est pas dans la liste, on a probablement déjà
          traité le cas. <b>30 minutes de cadrage gratuit</b> avec un DPO + un lead dev.
        </div>
      </div>
      <a href="#contact" class="btn btn-accent">
        Prendre rendez-vous · 30 min
        <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>
`;
