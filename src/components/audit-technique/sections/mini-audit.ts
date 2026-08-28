export const miniAuditHtml = `
<!-- MINI-AUDIT · 5 questions · score + tier recommandé (audit technique) -->
<section class="at-audit" id="mini-audit">
  <div class="at-audit-bg" aria-hidden="true"></div>
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow on-dark">— Mini-audit de pré-qualification · 2 minutes</div>
        <h2 style="color:#fff">Quel format d'audit<br>vous correspond&nbsp;? <span class="accent">Réponse en 2 min.</span></h2>
      </div>
      <div class="right" style="color:rgba(255,255,255,0.65)">
        Cinq questions sur votre situation. <b style="color:#fff">Un score et une recommandation de format</b>&nbsp;:
        Express, Standard, Deep ou Tech DD M&amp;A — le chiffrage exact est établi sur devis, après échange. Aucune donnée stockée sans votre accord.
      </div>
    </div>

    <div class="at-audit-box reveal reveal-d-1" data-audit-step="0">
      <!-- Progress bar -->
      <div class="at-audit-progress">
        <div class="at-audit-progress-info">
          <span class="at-audit-step-label">Question <b data-audit-current>1</b> / 5</span>
          <span class="at-audit-duration">⏱ 2 min max</span>
        </div>
        <div class="at-audit-progress-bar">
          <div class="at-audit-progress-fill" data-audit-fill style="width: 20%"></div>
        </div>
      </div>

      <!-- Questions panels -->
      <div class="at-audit-qs">

        <div class="at-audit-q is-active" data-audit-q="0">
          <div class="at-audit-q-num">01 · Déclencheur</div>
          <h3 id="at-audit-q0-title">Qu'est-ce qui déclenche votre besoin d'audit aujourd'hui ?</h3>
          <p>Le trigger d'achat change radicalement le format recommandé (Express / Standard / Deep / M&amp;A).</p>
          <div class="at-audit-options" role="radiogroup" aria-labelledby="at-audit-q0-title">
            <label class="at-audit-opt">
              <input type="radio" name="audit-q0" value="25" data-audit-answer>
              <span class="at-audit-opt-body">
                <span class="at-audit-opt-title">Levée en cours · tech DD demandée par le VC</span>
                <span class="at-audit-opt-sub">Series A/B · format Deep côté vendeur recommandé</span>
              </span>
              <span class="at-audit-opt-check"></span>
            </label>
            <label class="at-audit-opt">
              <input type="radio" name="audit-q0" value="30" data-audit-answer>
              <span class="at-audit-opt-body">
                <span class="at-audit-opt-title">M&amp;A imminent · DD avant rachat</span>
                <span class="at-audit-opt-sub">Côté acheteur · Tech DD M&amp;A recommandé</span>
              </span>
              <span class="at-audit-opt-check"></span>
            </label>
            <label class="at-audit-opt">
              <input type="radio" name="audit-q0" value="15" data-audit-answer>
              <span class="at-audit-opt-body">
                <span class="at-audit-opt-title">Nouveau CTO · baseline 100 jours</span>
                <span class="at-audit-opt-sub">Format Standard recommandé</span>
              </span>
              <span class="at-audit-opt-check"></span>
            </label>
            <label class="at-audit-opt">
              <input type="radio" name="audit-q0" value="20" data-audit-answer>
              <span class="at-audit-opt-body">
                <span class="at-audit-opt-title">Client enterprise exige SOC2 / ISO 27001</span>
                <span class="at-audit-opt-sub">Standard + pentest en option</span>
              </span>
              <span class="at-audit-opt-check"></span>
            </label>
            <label class="at-audit-opt">
              <input type="radio" name="audit-q0" value="10" data-audit-answer>
              <span class="at-audit-opt-body">
                <span class="at-audit-opt-title">Post-incident · besoin urgent</span>
                <span class="at-audit-opt-sub">Format Express recommandé</span>
              </span>
              <span class="at-audit-opt-check"></span>
            </label>
            <label class="at-audit-opt">
              <input type="radio" name="audit-q0" value="22" data-audit-answer>
              <span class="at-audit-opt-body">
                <span class="at-audit-opt-title">Go/no-go refonte · besoin d'un verdict chiffré</span>
                <span class="at-audit-opt-sub">Format Deep recommandé</span>
              </span>
              <span class="at-audit-opt-check"></span>
            </label>
          </div>
        </div>

        <div class="at-audit-q" data-audit-q="1">
          <div class="at-audit-q-num">02 · Enjeu de la décision</div>
          <h3 id="at-audit-q1-title">Quel est le niveau d'enjeu business lié à l'audit ?</h3>
          <p>Plus l'enjeu est haut (levée, M&amp;A, décision &gt; 500 k€), plus le format doit être robuste.</p>
          <div class="at-audit-options" role="radiogroup" aria-labelledby="at-audit-q1-title">
            <label class="at-audit-opt">
              <input type="radio" name="audit-q1" value="5" data-audit-answer>
              <span class="at-audit-opt-body">
                <span class="at-audit-opt-title">Check-up interne · pas de décision urgente</span>
                <span class="at-audit-opt-sub">Enjeu faible · Express suffit</span>
              </span>
              <span class="at-audit-opt-check"></span>
            </label>
            <label class="at-audit-opt">
              <input type="radio" name="audit-q1" value="15" data-audit-answer>
              <span class="at-audit-opt-body">
                <span class="at-audit-opt-title">Décision interne &lt; 500 k€</span>
                <span class="at-audit-opt-sub">Enjeu modéré · Standard adapté</span>
              </span>
              <span class="at-audit-opt-check"></span>
            </label>
            <label class="at-audit-opt">
              <input type="radio" name="audit-q1" value="25" data-audit-answer>
              <span class="at-audit-opt-body">
                <span class="at-audit-opt-title">Décision board / levée · 500 k€ à 5 M€</span>
                <span class="at-audit-opt-sub">Enjeu élevé · Deep nécessaire</span>
              </span>
              <span class="at-audit-opt-check"></span>
            </label>
            <label class="at-audit-opt">
              <input type="radio" name="audit-q1" value="35" data-audit-answer>
              <span class="at-audit-opt-body">
                <span class="at-audit-opt-title">M&amp;A · levée Série B+ · &gt; 5 M€</span>
                <span class="at-audit-opt-sub">Enjeu critique · Tech DD M&amp;A requis</span>
              </span>
              <span class="at-audit-opt-check"></span>
            </label>
          </div>
        </div>

        <div class="at-audit-q" data-audit-q="2">
          <div class="at-audit-q-num">03 · Timeline</div>
          <h3 id="at-audit-q2-title">Dans quels délais vous faut-il le rapport ?</h3>
          <p>La date de démarrage dépend des disponibilités, des accès et du périmètre&nbsp;; elle est confirmée au devis.</p>
          <div class="at-audit-options" role="radiogroup" aria-labelledby="at-audit-q2-title">
            <label class="at-audit-opt">
              <input type="radio" name="audit-q2" value="10" data-audit-answer>
              <span class="at-audit-opt-body">
                <span class="at-audit-opt-title">Urgent · &lt; 2 semaines</span>
                <span class="at-audit-opt-sub">Express prioritaire</span>
              </span>
              <span class="at-audit-opt-check"></span>
            </label>
            <label class="at-audit-opt">
              <input type="radio" name="audit-q2" value="20" data-audit-answer>
              <span class="at-audit-opt-body">
                <span class="at-audit-opt-title">Rapide · 2 à 4 semaines</span>
                <span class="at-audit-opt-sub">Standard confortable</span>
              </span>
              <span class="at-audit-opt-check"></span>
            </label>
            <label class="at-audit-opt">
              <input type="radio" name="audit-q2" value="25" data-audit-answer>
              <span class="at-audit-opt-body">
                <span class="at-audit-opt-title">Normal · 4 à 8 semaines</span>
                <span class="at-audit-opt-sub">Deep parfaitement adapté</span>
              </span>
              <span class="at-audit-opt-check"></span>
            </label>
            <label class="at-audit-opt">
              <input type="radio" name="audit-q2" value="15" data-audit-answer>
              <span class="at-audit-opt-body">
                <span class="at-audit-opt-title">Pas de deadline stricte</span>
                <span class="at-audit-opt-sub">Standard ou Deep selon enjeu</span>
              </span>
              <span class="at-audit-opt-check"></span>
            </label>
          </div>
        </div>

        <div class="at-audit-q" data-audit-q="3">
          <div class="at-audit-q-num">04 · Destinataires du rapport</div>
          <h3 id="at-audit-q3-title">À qui sera présenté le rapport final ?</h3>
          <p>Plus le public est senior / externe, plus le format exige une version "board-safe" solide.</p>
          <div class="at-audit-options" role="radiogroup" aria-labelledby="at-audit-q3-title">
            <label class="at-audit-opt">
              <input type="radio" name="audit-q3" value="5" data-audit-answer>
              <span class="at-audit-opt-body">
                <span class="at-audit-opt-title">Équipe interne uniquement (CTO, lead devs)</span>
                <span class="at-audit-opt-sub">Express suffit</span>
              </span>
              <span class="at-audit-opt-check"></span>
            </label>
            <label class="at-audit-opt">
              <input type="radio" name="audit-q3" value="15" data-audit-answer>
              <span class="at-audit-opt-body">
                <span class="at-audit-opt-title">CEO + board interne</span>
                <span class="at-audit-opt-sub">Standard avec version board-safe</span>
              </span>
              <span class="at-audit-opt-check"></span>
            </label>
            <label class="at-audit-opt">
              <input type="radio" name="audit-q3" value="25" data-audit-answer>
              <span class="at-audit-opt-body">
                <span class="at-audit-opt-title">Investisseur / VC en DD</span>
                <span class="at-audit-opt-sub">Deep avec version data-room</span>
              </span>
              <span class="at-audit-opt-check"></span>
            </label>
            <label class="at-audit-opt">
              <input type="radio" name="audit-q3" value="35" data-audit-answer>
              <span class="at-audit-opt-body">
                <span class="at-audit-opt-title">Acquéreur M&amp;A · comité investissement</span>
                <span class="at-audit-opt-sub">Tech DD M&amp;A · format acquisition</span>
              </span>
              <span class="at-audit-opt-check"></span>
            </label>
          </div>
        </div>

        <div class="at-audit-q" data-audit-q="4">
          <div class="at-audit-q-num">05 · État de maturité</div>
          <h3 id="at-audit-q4-title">Comment évaluez-vous la maturité actuelle de votre tech ?</h3>
          <p>Un contexte "on sent que ça dérape" demande plus de profondeur qu'un "tout va bien apparemment".</p>
          <div class="at-audit-options" role="radiogroup" aria-labelledby="at-audit-q4-title">
            <label class="at-audit-opt">
              <input type="radio" name="audit-q4" value="5" data-audit-answer>
              <span class="at-audit-opt-body">
                <span class="at-audit-opt-title">On pense que ça va · confirmation externe</span>
                <span class="at-audit-opt-sub">Audit de validation · Express ou Standard</span>
              </span>
              <span class="at-audit-opt-check"></span>
            </label>
            <label class="at-audit-opt">
              <input type="radio" name="audit-q4" value="15" data-audit-answer>
              <span class="at-audit-opt-body">
                <span class="at-audit-opt-title">Doutes spécifiques sur sécurité / perfs</span>
                <span class="at-audit-opt-sub">Standard avec focus renforcé</span>
              </span>
              <span class="at-audit-opt-check"></span>
            </label>
            <label class="at-audit-opt">
              <input type="radio" name="audit-q4" value="20" data-audit-answer>
              <span class="at-audit-opt-body">
                <span class="at-audit-opt-title">Plusieurs incidents récents · vélocité en chute</span>
                <span class="at-audit-opt-sub">Deep pour diagnostic complet</span>
              </span>
              <span class="at-audit-opt-check"></span>
            </label>
            <label class="at-audit-opt">
              <input type="radio" name="audit-q4" value="10" data-audit-answer>
              <span class="at-audit-opt-body">
                <span class="at-audit-opt-title">On ne sait pas · pas de visibilité tech</span>
                <span class="at-audit-opt-sub">Standard indispensable pour établir baseline</span>
              </span>
              <span class="at-audit-opt-check"></span>
            </label>
          </div>
        </div>

      </div>

      <!-- Navigation -->
      <div class="at-audit-nav">
        <button type="button" class="at-audit-prev" data-audit-prev disabled>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Précédent
        </button>
        <button type="button" class="at-audit-next" data-audit-next disabled>
          Question suivante
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>

    <!-- RESULT PANEL (hidden until computed) -->
    <div class="at-audit-result reveal" data-audit-result hidden>
      <div class="at-audit-result-head">
        <div class="at-audit-result-badge" data-audit-badge>Format Standard recommandé</div>
        <h3>Votre score&nbsp;: <span data-audit-score>0</span> / 160</h3>
        <p data-audit-verdict>Cette orientation prépare le cadrage&nbsp;; le format, le calendrier et le chiffrage sont confirmés sur devis après échange.</p>
      </div>

      <!-- KPI cards -->
      <div class="at-audit-result-grid">
        <div class="at-audit-result-gauge">
          <svg viewBox="0 0 200 120" aria-hidden="true">
            <defs>
              <linearGradient id="at-audit-grad-r" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#34D399"/>
                <stop offset="40%" stop-color="#60A5FA"/>
                <stop offset="70%" stop-color="#A78BFA"/>
                <stop offset="100%" stop-color="#EC4899"/>
              </linearGradient>
            </defs>
            <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="12" stroke-linecap="round"/>
            <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="url(#at-audit-grad-r)" stroke-width="12" stroke-linecap="round" stroke-dasharray="251" stroke-dashoffset="251" data-audit-arc/>
            <circle cx="20" cy="100" r="5" fill="#fff" stroke="#6D28D9" stroke-width="2" data-audit-needle/>
            <text x="100" y="80" text-anchor="middle" font-family="Geist" font-weight="700" font-size="36" fill="#fff" data-audit-score-big>0</text>
            <text x="100" y="102" text-anchor="middle" font-family="Geist Mono" font-size="10" fill="rgba(255,255,255,0.55)" letter-spacing="1">/ 160</text>
          </svg>
        </div>

        <div class="at-audit-result-priorities">
          <div class="at-audit-priorities-label">📋 Pourquoi ce format</div>
          <ol class="at-audit-priorities-list" data-audit-priorities></ol>
        </div>
      </div>

      <!-- Résultat · boutons d'action (libellé volontairement distinct du marqueur de CTA finale strippé au rendu) -->
      <div class="at-audit-result-cta">
        <a href="/demarrer-un-projet" class="btn btn-ghost at-audit-cta">
          Décrire mon projet (3 min) — objectif : prochain jour ouvré
        </a>

        <div class="at-audit-or">ou</div>

        <a href="#contact" class="btn btn-accent btn-lg at-audit-cta">
          Demander un échange de cadrage
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
      </div>

      <button type="button" class="at-audit-restart" data-audit-restart>
        ↺ Refaire le mini-audit
      </button>
    </div>
  </div>
</section>
`;
