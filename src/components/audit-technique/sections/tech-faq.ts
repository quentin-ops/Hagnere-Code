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
          Les accès sont configurés au <b>niveau minimal nécessaire</b> sur le cloud, le dépôt et les outils d'observabilité.
          Les rôles, journaux disponibles, exceptions indispensables et date de révocation sont documentés avant l'audit.
          Un accès en lecture seule est privilégié&nbsp;; toute action nécessitant une écriture reste exécutée ou validée par l'équipe du client.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Comment vous branchez SonarQube Enterprise sur un repo privé sans tout casser ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          Le mode d'analyse est choisi avec vous&nbsp;: exécution dans votre environnement, copie de travail isolée ou outil déjà autorisé.
          Le périmètre, les éventuels transferts, la durée de conservation et la suppression sont écrits avant tout accès.
          Les exports réellement produits sont remis dans les formats prévus au devis, sans promettre un outil ou une licence non nécessaire.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          SAST + DAST + SCA · quelle couverture en 10 jours ouvrés ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          Le devis précise la couverture SAST, SCA et DAST réellement adaptée au dépôt, aux environnements disponibles et aux contraintes d'accès.
          Les zones exclues et limites des outils sont explicites. Pour un <b>DAST exhaustif ou un pentest complet</b>,
          le devis peut prévoir un pentest indépendant réalisé par un prestataire qualifié PASSI sélectionné
          et vérifié par le client lorsque cette qualification est réellement requise.
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
          L'écart entre le RTO annoncé et le temps observé est documenté sans présumer son ampleur. Son impact peut ensuite être estimé à partir du coût d'indisponibilité et d'hypothèses explicites.
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
          ISO 19011 fournit des lignes directrices pour les audits de systèmes de management. Nous pouvons nous en inspirer pour
          structurer l'indépendance, les preuves, les risques et la restitution, sans présenter la mission comme une certification ISO.
          La grille utilisée et un exemple expurgé de livrable peuvent être présentés pendant le cadrage, selon leur disponibilité.
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
          <b>Non.</b> L'évaluation officielle et la certification relèvent des organismes, auditeurs ou autorités compétents.
          Nous pouvons fournir les éléments techniques prévus au devis et contribuer à une analyse d'écart sous leur cadrage.
          Le référentiel, les contrôles applicables, le calendrier et les preuves attendues doivent être confirmés avec eux&nbsp;;
          aucun gain de délai ni obtention de certification n'est garanti.
        </div>
      </div>
    </div>
  </div>
</section>
`;
