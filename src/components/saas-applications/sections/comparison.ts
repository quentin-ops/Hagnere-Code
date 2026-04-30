export const comparisonHtml = `
<!-- COMPARISON SAAS -->
<section class="sa-compare">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Pour vous situer (honnêtement)</div>
        <h2>Bubble, Retool, freelance,<br>ou un vrai SaaS ?</h2>
      </div>
      <div class="right">
        On ne prétend pas être la bonne option pour tout le monde. Comparatif centré
        sur <b>construire un SaaS vendable</b> — pas un prototype, pas un outil interne, pas un MVP jetable.
      </div>
    </div>

    <div class="sa-cmp-table reveal">
      <div class="sa-cmp-head">
        <div class="sa-cmp-col sa-cmp-col-label"></div>
        <div class="sa-cmp-col">
          <div class="sa-cmp-kind">Option A</div>
          <div class="sa-cmp-title">No-code SaaS (Bubble, Softr)</div>
          <div class="sa-cmp-price">2–10 k€ + 300–800 €/mois</div>
        </div>
        <div class="sa-cmp-col">
          <div class="sa-cmp-kind">Option B</div>
          <div class="sa-cmp-title">Low-code interne (Retool)</div>
          <div class="sa-cmp-price">Outil dev, pas un SaaS vendable</div>
        </div>
        <div class="sa-cmp-col">
          <div class="sa-cmp-kind">Option C</div>
          <div class="sa-cmp-title">Freelance SaaS</div>
          <div class="sa-cmp-price">15–40 k€ régie</div>
        </div>
        <div class="sa-cmp-col sa-cmp-col-us">
          <div class="sa-cmp-kind">Nous</div>
          <div class="sa-cmp-title">Hagnéré Code</div>
          <div class="sa-cmp-price">15–120 k€ forfait fixe</div>
        </div>
      </div>

      <div class="sa-cmp-row">
        <div class="sa-cmp-col sa-cmp-col-label">Architecture multi-tenant</div>
        <div class="sa-cmp-col sa-cmp-bad">Plafonne, perfs médiocres</div>
        <div class="sa-cmp-col sa-cmp-bad">N/A (pas prévu pour)</div>
        <div class="sa-cmp-col">Dépend de sa spécialité</div>
        <div class="sa-cmp-col sa-cmp-col-us sa-cmp-good"><b>Standard dès J+1</b></div>
      </div>

      <div class="sa-cmp-row">
        <div class="sa-cmp-col sa-cmp-col-label">Facturation SaaS (Stripe, webhooks, proratas)</div>
        <div class="sa-cmp-col">Plugin Stripe basique</div>
        <div class="sa-cmp-col sa-cmp-bad">À coder soi-même</div>
        <div class="sa-cmp-col">À scoper en option</div>
        <div class="sa-cmp-col sa-cmp-col-us sa-cmp-good"><b>Cashier + webhooks + essais + relances</b></div>
      </div>

      <div class="sa-cmp-row">
        <div class="sa-cmp-col sa-cmp-col-label">SSO entreprise (SAML, Google, Microsoft)</div>
        <div class="sa-cmp-col sa-cmp-bad">Non</div>
        <div class="sa-cmp-col sa-cmp-good">Oui mais pour l'interne</div>
        <div class="sa-cmp-col">Variable</div>
        <div class="sa-cmp-col sa-cmp-col-us sa-cmp-good"><b>SAML + OAuth inclus</b></div>
      </div>

      <div class="sa-cmp-row">
        <div class="sa-cmp-col sa-cmp-col-label">Propriété du code</div>
        <div class="sa-cmp-col sa-cmp-bad">Lock-in total</div>
        <div class="sa-cmp-col sa-cmp-bad">Dépendance licence</div>
        <div class="sa-cmp-col">Oui, après négociation</div>
        <div class="sa-cmp-col sa-cmp-col-us sa-cmp-good"><b>100 % à vous J+1, repo Git chez vous</b></div>
      </div>

      <div class="sa-cmp-row">
        <div class="sa-cmp-col sa-cmp-col-label">Passage à l'échelle (10k+ users)</div>
        <div class="sa-cmp-col sa-cmp-bad">Plafonne ~300 users</div>
        <div class="sa-cmp-col sa-cmp-bad">Pas fait pour public</div>
        <div class="sa-cmp-col">Dépend du dev</div>
        <div class="sa-cmp-col sa-cmp-col-us sa-cmp-good"><b>Queues, Redis, cache, PostgreSQL tuné</b></div>
      </div>

      <div class="sa-cmp-row">
        <div class="sa-cmp-col sa-cmp-col-label">IA native (agents, RAG, extraction)</div>
        <div class="sa-cmp-col sa-cmp-bad">Via Zapier, fragile</div>
        <div class="sa-cmp-col">Pas l'objet</div>
        <div class="sa-cmp-col">Si c'est sa spécialité</div>
        <div class="sa-cmp-col sa-cmp-col-us sa-cmp-good"><b>Claude Opus 4.7 / GPT-4o, agents typés</b></div>
      </div>

      <div class="sa-cmp-row">
        <div class="sa-cmp-col sa-cmp-col-label">App mobile iOS/Android</div>
        <div class="sa-cmp-col sa-cmp-bad">Wrapper PWA médiocre</div>
        <div class="sa-cmp-col sa-cmp-bad">Non</div>
        <div class="sa-cmp-col">Un spécialiste à part</div>
        <div class="sa-cmp-col sa-cmp-col-us sa-cmp-good"><b>React Native, même équipe, même API</b></div>
      </div>

      <div class="sa-cmp-row">
        <div class="sa-cmp-col sa-cmp-col-label">Continuité (congés, arrêt, turnover)</div>
        <div class="sa-cmp-col">N/A (plateforme)</div>
        <div class="sa-cmp-col">N/A (plateforme)</div>
        <div class="sa-cmp-col sa-cmp-bad">Projet à l'arrêt</div>
        <div class="sa-cmp-col sa-cmp-col-us sa-cmp-good"><b>Équipe 7 seniors CDI, relais assuré</b></div>
      </div>

      <div class="sa-cmp-row sa-cmp-row-verdict">
        <div class="sa-cmp-col sa-cmp-col-label">À choisir si…</div>
        <div class="sa-cmp-col">
          Vous validez<br>une idée jetable,<br>&lt; 100 users ciblés
        </div>
        <div class="sa-cmp-col">
          Outil <b>interne</b><br>(10-50 collaborateurs),<br>pas vendu à l'extérieur
        </div>
        <div class="sa-cmp-col">
          Périmètre &lt; 20 k€,<br>compétence précise,<br>vous pilotez
        </div>
        <div class="sa-cmp-col sa-cmp-col-us">
          <b>SaaS vendable 25-120 k€,</b><br>multi-tenant, billing,<br>IA, mobile — en 3-6 sem.
        </div>
      </div>
    </div>

    <div class="sa-cmp-disclaimer reveal">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 9v4M12 17h.01"/><circle cx="12" cy="12" r="10"/></svg>
      Pas sûr ? <a href="#contact">30 min avec un associé</a> — si ce n'est pas pour nous, on vous oriente franchement.
    </div>
  </div>
</section>
`;
