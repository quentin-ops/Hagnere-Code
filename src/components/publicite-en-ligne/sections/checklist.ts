export const checklistHtml = `
<!-- CHECKLIST INCLUS / HORS SCOPE — Ads -->
<section class="ads-check">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Ce que "gestion de campagne" veut dire chez nous</div>
        <h2>Douze briques incluses<br>dans chaque forfait Ads.</h2>
      </div>
      <div class="right">
        "On gère vos campagnes" c'est trop vague. Voilà la liste exacte de ce qui rentre
        dans le forfait — et ce qui n'y rentre pas. <b>Pas d'avenant surprise à J+60.</b>
      </div>
    </div>

    <div class="ads-check-grid">
      <!-- INCLUS -->
      <div class="ads-check-col ads-check-in reveal">
        <div class="ads-check-head">
          <div class="ads-check-badge ads-check-badge-in">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
            INCLUS DANS LE FORFAIT
          </div>
          <h3>Douze briques, tous les mois.</h3>
        </div>
        <ul class="ads-check-list">
          <li>
            <div class="ads-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Tracking server-side complet</b> — GTM Server, Meta CAPI, Google Enhanced Conversions, LinkedIn Insight, Consent Mode v2. Déployé dans les 3 premières semaines.</div>
          </li>
          <li>
            <div class="ads-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Restructuration ou setup comptes</b> — audit MCC, nommage normalisé, hiérarchie campagnes, conversion primaire unique, exclusions, scripts anti-gaspillage.</div>
          </li>
          <li>
            <div class="ads-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Consultant senior dédié</b> — un interlocuteur, pas un pool tournant. Vous l'avez au téléphone, vous le voyez en visio, il connaît votre business.</div>
          </li>
          <li>
            <div class="ads-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Production creative 8 à 12 variantes/mois</b> — motion, UGC sourcé, statics, copywriting angulaire. Cadencé pour tuer la creative fatigue avant qu'elle tue vos ROAS.</div>
          </li>
          <li>
            <div class="ads-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Bid strategies &amp; allocation budgets</b> — revue hebdo : pauses, scaling, bascules, tests tROAS/tCPA. Décisions documentées dans Notion, pas dans un chat oublié.</div>
          </li>
          <li>
            <div class="ads-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Audiences custom + lookalikes + exclusions</b> — segmentation 1P data (CRM, pixels, achats), LAL propres, exclusions clients existants, listes négatives.</div>
          </li>
          <li>
            <div class="ads-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>A/B testing continu landing + ads</b> — minimum 2 variants/campagne active, test statistiquement significatif, pas un split de 200 clics décidé au doigt mouillé.</div>
          </li>
          <li>
            <div class="ads-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Reporting Looker Studio live</b> — CRM × Ads × margin, actualisé toutes les 4 h. Vous l'ouvrez vous-même, on le commente en point hebdo 30 min.</div>
          </li>
          <li>
            <div class="ads-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Alertes anomalies Slack / email</b> — spend × 2, CPA × 1,5, ROAS qui chute, conversion tracking cassé. Vous êtes prévenus avant d'ouvrir le dashboard.</div>
          </li>
          <li>
            <div class="ads-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Veille concurrentielle</b> — Meta Ad Library, Google Ad Transparency, SEMrush. On surveille ce que vos concurrents testent — et ce qu'ils ont coupé.</div>
          </li>
          <li>
            <div class="ads-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>CRO light sur landings</b> — analytics Hotjar/Clarity, suggestions hiérarchisées, A/B des blocs hero / CTA / social proof. Pas une refonte, juste ce qui bouge le CVR.</div>
          </li>
          <li>
            <div class="ads-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Passation complète si fin de mission</b> — comptes, pixels, audiences, conteneur GTM SS, docs, creatives : <b>tout reste chez vous</b>. On part proprement en 2 semaines.</div>
          </li>
        </ul>
      </div>

      <!-- HORS SCOPE -->
      <div class="ads-check-col ads-check-out reveal reveal-d-1">
        <div class="ads-check-head">
          <div class="ads-check-badge ads-check-badge-out">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 6l12 12M6 18L18 6"/></svg>
            HORS SCOPE (ON VOUS LE DIT TÔT)
          </div>
          <h3>Ce qu'on ne fera pas<br>dans le forfait.</h3>
        </div>
        <ul class="ads-check-list ads-check-list-out">
          <li>
            <div class="ads-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Budget media</b> — il reste sur <b>votre</b> compte Google / Meta / LinkedIn. La facture media vient des plateformes, pas de nous. Notre forfait = prestation, point.</div>
          </li>
          <li>
            <div class="ads-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Rémunération au % du spend</b> — refus de principe. Ça crée un conflit d'intérêt : notre métier c'est de faire baisser votre CAC, pas de pousser vos budgets.</div>
          </li>
          <li>
            <div class="ads-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Développement custom lourd</b> — API, intégrations CMS, dev e-commerce : <b>c'est notre service SaaS</b>, pas le forfait Ads. Scoping et facturation séparés.</div>
          </li>
          <li>
            <div class="ads-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Rédaction contenu de blog / site</b> — c'est notre <b>service SEO</b>. Les Ads ciblent la conversion, le SEO le trafic long terme : deux métiers, deux forfaits.</div>
          </li>
          <li>
            <div class="ads-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Juridique</b> — CGU, mentions légales, rédaction DPA, contrats RGPD avec prestataires. On paramètre Consent Mode correctement, votre DPO gère le reste.</div>
          </li>
          <li>
            <div class="ads-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Garanties de ROAS chiffré</b> — personne de sérieux ne le fait. On garantit la méthode, les jalons, la transparence. Pas un ROAS 5x dans un contrat.</div>
          </li>
        </ul>

        <div class="ads-check-note">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
          Si un de ces points doit rentrer dans le forfait, on en parle au cadrage et on ajuste le périmètre ensemble — pas via avenant surprise.
        </div>
      </div>
    </div>
  </div>
</section>
`;
