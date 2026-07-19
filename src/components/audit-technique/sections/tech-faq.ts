export const techFaqHtml = `
<!-- TECH FAQ · 8 Q techniques pour CTO / DPO / lead dev (audit technique) -->
<section class="at-tfaq">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Pour les profils techniques</div>
        <h2>8 questions qu'un CTO<br>ou un DPO nous pose en call.</h2>
      </div>
      <div class="right">
        Huit questions techniques qu'on entend systématiquement de la part des CTO, lead devs
        ou DPO qui évaluent notre méthodologie. Réponses directes, sans jargon.
      </div>
    </div>

    <div class="at-tfaq-list reveal reveal-d-1">
      <div class="faq-item">
        <div class="faq-q">
          Accès read-only, OK · mais comment garantissez-vous que rien ne soit modifié ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>IAM read-only uniquement</b> sur votre cloud (rôles restreints), accès GitHub avec <b>membre "external" sans droits d'écriture</b>,
          Sentry / Datadog avec rôles "viewer". <b>Tout est journalisé côté vous</b>&nbsp;: vous pouvez auditer nos actions via CloudTrail
          ou équivalent. Les accès sont <b>révoqués à J+11 automatiquement</b> (script partagé dans le devis). Aucun de nos accès n'ouvre de droit d'écriture&nbsp;: la modification est impossible par construction, pas seulement interdite.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Comment vous branchez SonarQube Enterprise sur un repo privé sans tout casser ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          On clone votre repo sur une <b>instance SonarQube Enterprise dédiée à votre audit</b> (pas un workspace partagé).
          L'analyse se fait offline, sans impact sur votre CI. Branches main + 2-3 feature branches récentes. Après l'audit,
          <b>l'instance SonarQube est détruite</b> avec toutes les données. Exports bruts livrés en SARIF + JSON dans votre Notion.
          Zéro upload externe sur vos données.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          SAST + DAST + SCA · quelle couverture en 10 jours ouvrés ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>SAST&nbsp;: complet</b> (SonarQube + Semgrep + PHPStan/Psalm/TS niveau 8) sur 100 % du codebase.
          <b>SCA&nbsp;: complet</b> (Snyk + Dependabot + GitGuardian) sur dépendances + images Docker + historique git.
          <b>DAST&nbsp;: ciblé</b> (OWASP top 10, 10 endpoints critiques via Burp Suite light). Pour un <b>DAST exhaustif + pentest complet</b>,
          on active l'option Pentest CERT-FR (+8-15 k€) avec notre partenaire agréé — conforme SOC2 / ISO 27001.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          RPO / RTO mesurés vs. déclarés · comment vous vérifiez ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>On demande une restauration test sur un environnement isolé</b> pendant l'audit&nbsp;: votre équipe lance la procédure,
          on chronomètre le RTO réel (temps de restauration effectif), on vérifie le RPO réel (point de restauration atteint vs. promis).
          <b>Dans 35 % de nos audits, le RTO réel dépasse de 3-8× le RTO déclaré</b>. C'est un finding critique qu'on chiffre systématiquement en €
          (coût d'indisponibilité prolongée × probabilité).
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Comment vous faites les entretiens équipe sans fragiliser le management ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Off-the-record total</b>&nbsp;: les interviews ne sont ni enregistrées, ni retranscrites nominativement dans le rapport.
          Framework SPACE (Satisfaction, Performance, Activity, Communication, Efficiency) de Google + MS Research. <b>Focus sur les systèmes, pas les personnes</b>&nbsp;:
          un bottleneck vient presque toujours d'une contrainte orga ou temporelle, pas d'un dev. Les devs sont <b>co-auteurs du plan de remédiation</b>,
          pas cibles. Aucune citation nominative, aucun « blame personnel ».
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Méthodologie ISO 19011 · c'est quoi concrètement ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          ISO 19011 = norme internationale des <b>principes d'audit</b> (intégrité, présentation impartiale, diligence, confidentialité,
          indépendance, approche fondée sur des preuves, approche fondée sur les risques). On applique ces 7 principes à chaque audit.
          <b>PDF de 15 pages "comment on audite"</b> téléchargeable avant signature — vous pouvez le challenger, le comparer à ce que
          proposent OCTO / Theodo / Thoughtworks. On n'a pas la certification ISO 19011 (tiers habilité requis), mais on s'aligne strictement sur ses principes.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Comment situez-vous nos scores · méthodologie ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Grille documentée et publique</b>, pas une boîte noire. Chaque audit score /100 par dimension (code, archi, perf, sécu, infra, DevEx, FinOps, équipe),
          selon une grille de critères remise avec le devis et adossée à des <b>référentiels externes vérifiables</b>&nbsp;:
          DORA pour la livraison, OWASP ASVS pour la sécurité applicative, Core Web Vitals et le Web Almanac pour la performance, ISO 19011 pour la conduite d'audit.
          Chaque note renvoie au critère qui la produit&nbsp;: vous pouvez contester ligne à ligne, et refaire le calcul vous-même après nos remédiations.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Conformité SOC2 / ISO 27001 / HDS / ACPR · vous auditez officiellement ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Non, et on le dit clairement</b>. L'audit officiel SOC2 / ISO 27001 / HDS / ACPR est mené par un <b>tiers habilité</b>
          (cabinet d'audit certifié, ex. BDO, Mazars, KPMG, ou des spécialistes comme Vanta-partner pour SOC2). On <b>prépare le terrain</b>&nbsp;:
          gap analysis des 160 contrôles SOC2 ou 114 contrôles ISO 27001, plan de mise en conformité chiffré sur 6-9 mois,
          recommandation des outils (Vanta, Drata, Secureframe) et des cabinets d'audit officiels. Notre rapport vous fait gagner
          <b>3-6 mois</b> sur le process de certification officiel.
        </div>
      </div>
    </div>
  </div>
</section>
`;
