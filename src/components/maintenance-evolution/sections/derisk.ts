export const deriskHtml = `
<!-- DE-RISK M&E : 4 peurs du dirigeant / CTO -->
<section class="me-derisk">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Les 4 peurs qu'on désamorce</div>
        <h2>Ce qui vous empêche de signer<br>un contrat TMA — et ce<br>qu'on fait pour.</h2>
      </div>
      <div class="right">
        Quatre peurs reviennent dans 9 calls sur 10 sur un engagement TMA. Voici comment on les neutralise
        <b>contractuellement</b>, pas en paroles rassurantes.
      </div>
    </div>

    <div class="me-derisk-grid">
      <!-- PEUR 01 : Payer pour rien certains mois -->
      <div class="me-derisk-card reveal">
        <div class="me-derisk-fear">
          « Et si je paye le forfait et que je <b>n'ai rien à faire faire</b> certains mois ? »
        </div>
        <h4>Rollover 30 % + timesheet transparent + downgrade trimestriel</h4>
        <p>Jours non consommés sur un mois&nbsp;? <b>Reportés jusqu'à 30 % sur les 3 mois suivants</b>.
        Vous voyez le timesheet Linear/Notion en temps réel, on documente chaque jour. Si votre usage réel
        est sous le forfait pendant 2 trimestres consécutifs, <b>on propose un downgrade</b> sans discussion —
        parce qu'on veut que vous restiez 5 ans, pas qu'on vous facture pour rien.</p>
        <div class="me-derisk-proof">
          <span>✓ Rollover 30 %</span>
          <span>✓ Timesheet live</span>
          <span>✓ Downgrade proposé</span>
        </div>
      </div>

      <!-- PEUR 02 : Vendor lock-in -->
      <div class="me-derisk-card reveal reveal-d-1">
        <div class="me-derisk-fear">
          « Je vais être <b>enfermé avec vous</b> sans pouvoir partir. »
        </div>
        <h4>Réversibilité contractuelle · passation 5 j offerte · 0 lock-in</h4>
        <p>Clause CGV&nbsp;: <b>préavis 60 j</b>, documentation exhaustive livrée en continu (pas rétroactivement),
        <b>5 jours de passation offerts</b> à votre prestataire suivant. Repo GitHub, comptes cloud, pixels,
        comptes SaaS tiers&nbsp;: <b>tout est sur votre organisation depuis J+1</b>. Rien chez nous. Vous partez
        quand vous voulez, sans rachat d'heures, sans "bonus" planqué, sans retention par l'ignorance.</p>
        <div class="me-derisk-proof">
          <span>✓ Préavis 60 j</span>
          <span>✓ Passation 5 j offerte</span>
          <span>✓ Tout en propriété client</span>
        </div>
      </div>

      <!-- PEUR 03 : Rotation équipe -->
      <div class="me-derisk-card reveal reveal-d-2">
        <div class="me-derisk-fear">
          « L'équipe va <b>tourner</b> et la qualité va baisser au bout de 6 mois. »
        </div>
        <h4>Équipe nommée dans le contrat · 1 remplacement max · overlap 2 sem.</h4>
        <p>Les 2 à 4 personnes qui gèrent votre compte sont <b>nommées dans le contrat</b>, photos + LinkedIn
        inclus. <b>Maximum 1 remplacement sur 12 mois</b> sauf cas de force majeure documenté. En cas de changement,
        <b>overlap obligatoire de 2 semaines</b> entre sortant et remplaçant. Notre turnover interne est &lt; 10 %
        (vs industrie à 25 %), ancienneté moyenne des devs&nbsp;: 4 ans. NPS client trimestriel comme garde-fou.</p>
        <div class="me-derisk-proof">
          <span>✓ Nom dans le contrat</span>
          <span>✓ Overlap 2 sem.</span>
          <span>✓ NPS trimestriel</span>
        </div>
      </div>

      <!-- PEUR 04 : Incidents hors horaires -->
      <div class="me-derisk-card reveal reveal-d-3">
        <div class="me-derisk-fear">
          « Un incident la nuit / le week-end — <b>personne ne va répondre</b>. »
        </div>
        <h4>Astreinte contractuelle + Statuspage + post-mortem 72 h · pénalités auto</h4>
        <p>Tier Scale &amp; Premium&nbsp;: <b>astreinte 7j/7</b> via PagerDuty, rotation documentée, escalation
        auto (Slack → SMS → téléphone). <b>MTTR contractuel &lt; 30 min P1</b>. Si on dépasse&nbsp;:
        <b>pénalités SLA auto-appliquées en avoir</b>, sans discussion. Statuspage publique, post-mortem sans
        blame sous 72 h, action items trackés. <b>Vous n'apprenez jamais un incident par un client mécontent</b>.</p>
        <div class="me-derisk-proof">
          <span>✓ Astreinte 7j/7</span>
          <span>✓ MTTR &lt; 30 min</span>
          <span>✓ Pénalités auto</span>
        </div>
      </div>
    </div>
  </div>
</section>
`;
