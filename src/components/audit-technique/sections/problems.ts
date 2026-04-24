export const problemsHtml = `
<!-- PROBLEMS · 6 triggers business qui déclenchent un audit technique -->
<section class="at-problems" id="triggers">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Six situations qui déclenchent un audit</div>
        <h2>Six déclencheurs business<br>qu'on voit chaque mois<br>en première prise de contact.</h2>
      </div>
      <div class="right">
        Aucun n'est honteux. Tous se chiffrent. Mais chaque semaine qui passe sans auditer,
        c'est <b>une décision stratégique prise à l'aveugle</b>&nbsp;: levée à un prix trop bas,
        M&amp;A mal dérisqué, refonte décidée sur les mauvaises bases.
      </div>
    </div>

    <div class="sap-grid">
      <!-- 01 · Levée de fonds -->
      <article class="sap-card reveal">
        <div class="sap-card-top">
          <div class="sap-ic">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
          </div>
          <span class="sap-n">01</span>
        </div>
        <h3>« Notre VC demande une tech DD avant de signer le term sheet »</h3>
        <p>Vous closez une Série A / B. Le fonds mandate une tech DD. <b>Vous avez 2 à 4 semaines pour produire un rapport défendable</b>, sinon le prix baisse ou le term sheet saute. Mieux vaut auditer vous-même d'abord — côté vendeur.</p>
        <div class="sap-foot">
          <span class="sap-foot-k">Solution</span>
          <span class="sap-foot-v">Audit Deep côté vendeur · 15-20 j · 38 k€</span>
        </div>
      </article>

      <!-- 02 · M&A -->
      <article class="sap-card reveal reveal-d-1">
        <div class="sap-card-top">
          <div class="sap-ic">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-3M9 12l2 2 4-4M8 3v4h8V3"/></svg>
          </div>
          <span class="sap-n">02</span>
        </div>
        <h3>« On rachète une boîte, il faut auditer le code avant le deal »</h3>
        <p>Acquisition industrielle ou build-up. Vous devez <b>chiffrer le coût de remédiation post-deal</b>, détecter les deal-breakers (licences open source non conformes, propriété IP floue, CVE critiques cachées). Le verdict change la valo de plusieurs centaines de milliers d'euros.</p>
        <div class="sap-foot">
          <span class="sap-foot-k">Solution</span>
          <span class="sap-foot-v">Tech DD M&amp;A · 20-30 j · 68 k€</span>
        </div>
      </article>

      <!-- 03 · Nouveau CTO -->
      <article class="sap-card reveal reveal-d-2">
        <div class="sap-card-top">
          <div class="sap-ic">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 22v-2a8 8 0 0116 0v2"/></svg>
          </div>
          <span class="sap-n">03</span>
        </div>
        <h3>« Notre nouveau CTO arrive, on veut une baseline indépendante »</h3>
        <p>Le CTO doit présenter son <b>plan 100 jours au board</b>. Il a besoin d'un état des lieux neutre, chiffré, <b>qu'il puisse défendre sans se mettre à dos l'équipe héritée</b>. Une agence externe "no blame" est le pont parfait entre son diagnostic et l'acceptation interne.</p>
        <div class="sap-foot">
          <span class="sap-foot-k">Solution</span>
          <span class="sap-foot-v">Audit Standard · 10 j · 18 k€</span>
        </div>
      </article>

      <!-- 04 · SOC2 / ISO27001 -->
      <article class="sap-card reveal">
        <div class="sap-card-top">
          <div class="sap-ic">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
          </div>
          <span class="sap-n">04</span>
        </div>
        <h3>« Un client enterprise exige SOC2 ou ISO 27001 avant de signer »</h3>
        <p>Votre pipeline commercial est bloqué par un gros client qui demande une certification que vous n'avez pas. <b>Un audit préparatoire</b> fait la <b>gap analysis</b> complète, priorise les actions sur 6 mois pour atteindre le niveau requis. Sans ça, vous partez à l'aveugle pendant 12 mois avec Vanta/Drata.</p>
        <div class="sap-foot">
          <span class="sap-foot-k">Solution</span>
          <span class="sap-foot-v">Audit Standard + gap compliance · 10 j · 18 k€</span>
        </div>
      </article>

      <!-- 05 · Incident / post-mortem -->
      <article class="sap-card reveal reveal-d-1">
        <div class="sap-card-top">
          <div class="sap-ic">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg>
          </div>
          <span class="sap-n">05</span>
        </div>
        <h3>« On a eu un incident majeur, besoin d'un post-mortem indépendant »</h3>
        <p>Downtime critique, fuite de données, attaque ciblée, démission surprise du CTO. Vous ne pouvez pas laisser votre équipe interne écrire son propre post-mortem — <b>il vous faut un tiers neutre</b> qui chiffre la cause racine, la dette qui l'a rendue possible, et les 10 actions à mener dans les 90 jours.</p>
        <div class="sap-foot">
          <span class="sap-foot-k">Solution</span>
          <span class="sap-foot-v">Audit Express post-incident · 3-5 j · 8 k€</span>
        </div>
      </article>

      <!-- 06 · Go/no-go refonte -->
      <article class="sap-card reveal reveal-d-2">
        <div class="sap-card-top">
          <div class="sap-ic">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>
          </div>
          <span class="sap-n">06</span>
        </div>
        <h3>« On hésite entre patcher l'existant ou refaire à zéro »</h3>
        <p>Votre CTO veut refondre. Votre CFO refuse un capex de 600 k€. <b>Vous avez besoin d'un verdict chiffré "coût refonte vs coût maintien sur 3 ans"</b>, avec scenarios A/B/C. On ne fera pas la refonte (CoI), donc on est honnête sur le diagnostic.</p>
        <div class="sap-foot sap-foot-hot">
          <span class="sap-foot-k">Solution</span>
          <span class="sap-foot-v">Audit Deep · go/no-go chiffré · 15-20 j · 38 k€</span>
        </div>
      </article>
    </div>
  </div>
</section>
`;
