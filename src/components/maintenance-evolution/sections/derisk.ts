import { TEAM_PUBLIC_COMPOSITION } from "@/lib/team";

export const deriskHtml = `
<!-- DE-RISK M&E : 4 peurs du dirigeant / CTO -->
<section class="me-derisk">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Les 7 peurs qu'on désamorce</div>
        <h2>Ce qui vous empêche de signer<br>un contrat TMA — et ce<br>qu'on fait pour.</h2>
      </div>
      <div class="right">
        Sept peurs reviennent systématiquement dès qu'on parle d'un engagement TMA. Voici comment on les neutralise
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
        <b>recouvrement obligatoire de 2 semaines</b> entre sortant et remplaçant. Hagnéré Code compte
        <b>${TEAM_PUBLIC_COMPOSITION}</b>&nbsp;: le remplaçant vient de la même équipe, jamais d'un pool externe. Revue trimestrielle avec vous comme garde-fou.</p>
        <div class="me-derisk-proof">
          <span>✓ Nom dans le contrat</span>
          <span>✓ Overlap 2 sem.</span>
          <span>✓ Revue trimestrielle</span>
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

      <!-- PEUR 05 : Complémentarité avec CTO interne -->
      <div class="me-derisk-card reveal">
        <div class="me-derisk-fear">
          « On a déjà un <b>CTO / lead dev</b> en interne — à quoi bon vous ? »
        </div>
        <h4>On est votre multiplicateur, pas votre remplaçant</h4>
        <p>Votre CTO bosse sur le <b>core product</b>. Nous, on prend tout ce qui l'empêche de dormir mais ne scale pas son impact&nbsp;: <b>astreinte 7j/7, monitoring, patches sécurité, dépendances, incidents, reporting board</b>. Le dispositif est conçu pour cohabiter avec une équipe interne&nbsp;: revue hebdo partagée, mêmes outils, décisions d'architecture co-signées. <b>Il garde le cerveau produit. On prend le cerveau run.</b></p>
        <div class="me-derisk-proof">
          <span>✓ Binôme CTO interne</span>
          <span>✓ Revue hebdo partagée</span>
          <span>✓ Archi co-signée</span>
        </div>
      </div>

      <!-- PEUR 06 : Localisation Savoie -->
      <div class="me-derisk-card reveal reveal-d-1">
        <div class="me-derisk-fear">
          « Vous êtes en Savoie, pas à Paris — <b>vous tiendrez la distance</b> ? »
        </div>
        <h4>Fuseau FR, coûts maîtrisés, binôme nommé au contrat</h4>
        <p>On est basés à Bassens, aux portes de Chambéry, par choix&nbsp;: <b>fuseau horaire français</b> et coûts de structure plus bas qu'à Paris. Notre équipe rassemble <b>${TEAM_PUBLIC_COMPOSITION}</b>, qui travaillent au quotidien sur nos propres produits en production. Résultat&nbsp;: vos forfaits sont 20-30 % moins chers à qualité équivalente, et le binôme qui prend votre projet est <b>nommé au contrat</b>, avec recouvrement de 2 semaines s'il doit changer. <b>Pas d'off-shore, pas de near-shore — équipe 100 % France</b>.</p>
        <div class="me-derisk-proof">
          <span>✓ Équipe 100 % FR</span>
          <span>✓ Binôme nommé au contrat</span>
          <span>✓ Visio + 1 déplacement/trim. inclus</span>
        </div>
      </div>

      <!-- PEUR 07 : Et si faillite / rachat -->
      <div class="me-derisk-card reveal reveal-d-2">
        <div class="me-derisk-fear">
          « Et si vous <b>faites faillite</b> ou vous faites <b>racheter</b> ? »
        </div>
        <h4>Clause d'escrow · partenaire secondaire nommé · indépendance financière</h4>
        <p>Trois parades contractuelles&nbsp;: (1) <b>clause d'escrow du code + documentation</b> déposée chez un tiers de confiance (Codex Escrow ou équivalent) — si on disparaît, vous récupérez tout sous 7 j. (2) <b>Partenaire secondaire nommé dans le contrat</b> (une agence partenaire avec qui on a un accord de reprise réciproque). (3) <b>Aucune dépendance investisseur</b> : l'agence est financée par son activité, sans levée de fonds ni échéance imposée de l'extérieur.</p>
        <div class="me-derisk-proof">
          <span>✓ Escrow code + docs</span>
          <span>✓ Partenaire secondaire</span>
          <span>✓ Bilan public · 0 dette</span>
        </div>
      </div>
    </div>
  </div>
</section>
`;
