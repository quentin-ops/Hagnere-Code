import { navHtml } from "@/components/design-shared/nav-html";

export const bodyHtml = `
${navHtml}
<div class="wrap">
  <div class="crumb">
    <a href="/">Accueil</a>
    <span class="sep">/</span>
    <a href="/services">Services</a>
    <span class="sep">/</span>
    <span style="color:var(--ink-3)">Outils internes sur mesure</span>
  </div>
</div>

<!-- HERO -->
<section class="shero">
  <div class="shero-grid"></div>
  <div class="shero-radial"></div>
  <div class="wrap shero-inner">
    <div>
      <div class="shero-eyebrow"><span class="pill"><span class="dot"></span> Service · Outils internes pour PME &amp; ETI</span></div>
      <h1>L'outil interne sur mesure <br>qui sort votre équipe <span class="strike">d'Excel</span> <br><span class="accent">pour de bon.</span></h1>
      <div class="shero-tagline">
        <span>⚡ Automatisé par l'IA</span>
        <span class="sep"></span>
        <span>🔌 Branché à votre SI (Sage, Cegid, AD)</span>
        <span class="sep"></span>
        <span>💶 Livré en forfait fixe</span>
      </div>
      <p class="shero-sub">
        Vos équipes passent parfois <b>des heures chaque semaine</b> à recopier des données entre plusieurs logiciels,
        relancer manuellement, extraire des chiffres de PDF et maintenir des fichiers Excel que personne
        n'ose modifier. On construit l'<b>outil interne sur mesure</b> qui fait tout ça à leur place —
        avec les connecteurs utiles à votre SI quand leurs API et vos droits d'accès le permettent.
      </p>
      <div class="shero-cta">
        <a href="#contact" class="btn btn-accent btn-lg">
          Réserver 30 min avec un expert <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
        <a href="#contact" class="btn btn-ghost btn-lg">Audit processus · 1j sur site · 990 €</a>
      </div>
      <div class="shero-meta">
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Forfait fixe, pas de régie</span>
        <span class="sep"></span>
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Planning défini après cadrage</span>
        <span class="sep"></span>
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Code &amp; données chez vous</span>
      </div>
      <div class="shero-proof">
        <div class="shero-proof-stat">
          <div class="shero-proof-num">4</div>
          <div class="shero-proof-lbl">produits qu'on<br>exploite nous-mêmes</div>
        </div>
        <div class="shero-proof-stat">
          <div class="shero-proof-num">100<span class="shero-proof-num-s">%</span></div>
          <div class="shero-proof-lbl">forfait fixe<br>engagé au contrat</div>
        </div>
        <div class="shero-proof-stat">
          <div class="shero-proof-num">Écrit</div>
          <div class="shero-proof-lbl">recette et correction<br>définies au devis</div>
        </div>
        <div class="shero-proof-stat">
          <div class="shero-proof-num">Clair</div>
          <div class="shero-proof-lbl">délai de réponse<br>défini au contrat</div>
        </div>
      </div>
    </div>

    <!-- VISUAL: Before (Excel chaos) / After (clean app) -->
    <div class="shero-visual">
      <div class="ba-frame ba-before">
        <div class="xl-chrome">
          <span>Suivi-clients-v47-FINAL-vraiment-FINAL.xlsx</span>
          <span class="xb">×</span>
        </div>
        <div class="xl-toolbar">
          <span>Fichier</span><span>Édition</span><span>Affichage</span><span>Insertion</span>
        </div>
        <div class="xl-cellbar">
          <span style="width:28px;text-align:center;color:#222">fx</span>
          <span style="color:#4C1D95">=SOMMEPROD(...)</span>
        </div>
        <div class="xl-grid">
          <div class="xl-row">
            <div class="xl-cell"></div><div class="xl-cell">A</div><div class="xl-cell">B</div><div class="xl-cell">C</div><div class="xl-cell">D</div>
          </div>
          <div class="xl-row"><div class="xl-cell">1</div><div class="xl-cell" style="background:#ffeb9c">Client</div><div class="xl-cell" style="background:#ffeb9c">Montant</div><div class="xl-cell" style="background:#ffeb9c">Relance</div><div class="xl-cell" style="background:#ffeb9c">Statut</div></div>
          <div class="xl-row"><div class="xl-cell">2</div><div class="xl-cell">DUPONT SA</div><div class="xl-cell num">12&nbsp;400</div><div class="xl-cell">14/03</div><div class="xl-cell err">#REF!</div></div>
          <div class="xl-row"><div class="xl-cell">3</div><div class="xl-cell">MARTIN SARL</div><div class="xl-cell num">3&nbsp;200</div><div class="xl-cell">??</div><div class="xl-cell">payé</div></div>
          <div class="xl-row"><div class="xl-cell">4</div><div class="xl-cell">BERNARD</div><div class="xl-cell err">#N/A</div><div class="xl-cell">01/03</div><div class="xl-cell">relancé</div></div>
          <div class="xl-row"><div class="xl-cell">5</div><div class="xl-cell">ACME</div><div class="xl-cell num">8&nbsp;400</div><div class="xl-cell"></div><div class="xl-cell err">#VALUE!</div></div>
          <div class="xl-row"><div class="xl-cell">6</div><div class="xl-cell">LEDUC&nbsp;BTP</div><div class="xl-cell num">22&nbsp;100</div><div class="xl-cell">22/02</div><div class="xl-cell">???</div></div>
          <div class="xl-row"><div class="xl-cell">7</div><div class="xl-cell" style="color:#999">...</div><div class="xl-cell" style="color:#999">...</div><div class="xl-cell" style="color:#999">...</div><div class="xl-cell" style="color:#999">...</div></div>
        </div>
        <div class="xl-sticky-note">⚠&nbsp; Ne pas toucher à la colonne D !!!</div>
      </div>

      <div class="ba-arrow">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        APRÈS CADRAGE
      </div>

      <div class="ba-frame ba-after">
        <div class="win-chrome">
          <div class="win-dots"><span></span><span></span><span></span></div>
          <div class="win-url">outils.votre-entreprise.fr / suivi-clients</div>
        </div>
        <svg width="100%" viewBox="0 0 440 290" style="display:block">
          <rect width="440" height="290" fill="#fff"/>
          <!-- header -->
          <text x="20" y="32" font-family="Geist" font-weight="700" font-size="15" fill="#0A0A0A">Suivi clients</text>
          <rect x="300" y="18" width="120" height="22" rx="5" fill="#6D28D9"/>
          <text x="360" y="33" text-anchor="middle" font-family="Geist" font-weight="500" font-size="10" fill="#fff">+ Nouveau client</text>
          <!-- Filters -->
          <rect x="20" y="50" width="60" height="22" rx="11" fill="#0A0A0A"/>
          <text x="50" y="65" text-anchor="middle" font-family="Geist Mono" font-size="9" fill="#fff">Tous · 184</text>
          <rect x="86" y="50" width="76" height="22" rx="11" fill="#fff" stroke="#E5E5E5"/>
          <text x="124" y="65" text-anchor="middle" font-family="Geist Mono" font-size="9" fill="#737373">À relancer · 12</text>
          <rect x="168" y="50" width="64" height="22" rx="11" fill="#fff" stroke="#E5E5E5"/>
          <text x="200" y="65" text-anchor="middle" font-family="Geist Mono" font-size="9" fill="#737373">Payés · 142</text>
          <!-- Table headers -->
          <line x1="20" y1="88" x2="420" y2="88" stroke="#E5E5E5"/>
          <text x="20" y="105" font-family="Geist Mono" font-size="9" fill="#737373">CLIENT</text>
          <text x="180" y="105" font-family="Geist Mono" font-size="9" fill="#737373">MONTANT</text>
          <text x="270" y="105" font-family="Geist Mono" font-size="9" fill="#737373">RELANCE</text>
          <text x="350" y="105" font-family="Geist Mono" font-size="9" fill="#737373">STATUT</text>
          <line x1="20" y1="114" x2="420" y2="114" stroke="#F0F0F0"/>
          <!-- rows -->
          <g font-family="Geist" font-size="11">
            <circle cx="28" cy="132" r="8" fill="#0A0A0A"/>
            <text x="28" y="135" text-anchor="middle" font-family="Geist" font-weight="600" font-size="8" fill="#fff">D</text>
            <text x="44" y="135" fill="#0A0A0A" font-weight="500">DUPONT SA</text>
            <text x="180" y="135" fill="#0A0A0A" font-weight="500">12 400 €</text>
            <text x="270" y="135" fill="#737373" font-family="Geist Mono" font-size="10">14 mars</text>
            <rect x="344" y="122" width="72" height="20" rx="10" fill="#EDE9FE"/>
            <text x="380" y="135" text-anchor="middle" font-family="Geist Mono" font-size="9" fill="#4C1D95">À relancer</text>
          </g>
          <line x1="20" y1="148" x2="420" y2="148" stroke="#F0F0F0"/>
          <g font-family="Geist" font-size="11">
            <circle cx="28" cy="166" r="8" fill="#6D28D9"/>
            <text x="28" y="169" text-anchor="middle" font-family="Geist" font-weight="600" font-size="8" fill="#fff">M</text>
            <text x="44" y="169" fill="#0A0A0A" font-weight="500">MARTIN SARL</text>
            <text x="180" y="169" fill="#0A0A0A" font-weight="500">3 200 €</text>
            <text x="270" y="169" fill="#737373" font-family="Geist Mono" font-size="10">—</text>
            <rect x="344" y="156" width="72" height="20" rx="10" fill="#E8F7E5"/>
            <text x="380" y="169" text-anchor="middle" font-family="Geist Mono" font-size="9" fill="#3A7D1F">Payé</text>
          </g>
          <line x1="20" y1="182" x2="420" y2="182" stroke="#F0F0F0"/>
          <g font-family="Geist" font-size="11">
            <circle cx="28" cy="200" r="8" fill="#737373"/>
            <text x="28" y="203" text-anchor="middle" font-family="Geist" font-weight="600" font-size="8" fill="#fff">B</text>
            <text x="44" y="203" fill="#0A0A0A" font-weight="500">BERNARD &amp; FILS</text>
            <text x="180" y="203" fill="#0A0A0A" font-weight="500">6 200 €</text>
            <text x="270" y="203" fill="#737373" font-family="Geist Mono" font-size="10">1er mars</text>
            <rect x="344" y="190" width="72" height="20" rx="10" fill="#F5F5F5"/>
            <text x="380" y="203" text-anchor="middle" font-family="Geist Mono" font-size="9" fill="#404040">Relancé</text>
          </g>
          <line x1="20" y1="216" x2="420" y2="216" stroke="#F0F0F0"/>
          <g font-family="Geist" font-size="11">
            <circle cx="28" cy="234" r="8" fill="#FFB37A"/>
            <text x="28" y="237" text-anchor="middle" font-family="Geist" font-weight="600" font-size="8" fill="#fff">A</text>
            <text x="44" y="237" fill="#0A0A0A" font-weight="500">ACME INDUSTRIES</text>
            <text x="180" y="237" fill="#0A0A0A" font-weight="500">8 400 €</text>
            <text x="270" y="237" fill="#737373" font-family="Geist Mono" font-size="10">—</text>
            <rect x="344" y="224" width="72" height="20" rx="10" fill="#E8F7E5"/>
            <text x="380" y="237" text-anchor="middle" font-family="Geist Mono" font-size="9" fill="#3A7D1F">Payé</text>
          </g>
          <!-- Footer stats -->
          <rect x="20" y="256" width="400" height="26" rx="6" fill="#FAFAFA"/>
          <text x="34" y="272" font-family="Geist Mono" font-size="10" fill="#737373">184 clients · 42,1k€ en attente · 12 relances auto prévues lundi</text>
        </svg>
      </div>
    </div>
  </div>
</section>

<!-- PROBLEMS -->
<section class="probl">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Vous le reconnaissez ?</div>
        <h2>Les 8 fuites silencieuses<br>à chiffrer dans votre PME.</h2>
      </div>
      <div class="right">
        Utilisez le <a href="/outils/calculateur-cout-excel">calculateur</a> pour poser votre propre
        baseline&nbsp;: fréquence, durée, coût chargé et risque. Les exemples ci-dessous ne sont pas des moyennes clients.
      </div>
    </div>

    <div class="prob-grid">
      <div class="prob reveal">
        <div class="prob-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div>
        <h3>Recopiage entre logiciels</h3>
        <p>Un commercial signe un deal dans Pipedrive. Puis le recopie dans Pennylane. Puis dans un Excel. Puis dans un Slack.</p>
        <div class="prob-cost">TEMPS À MESURER</div>
      </div>
      <div class="prob reveal reveal-d-1">
        <div class="prob-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zM2 6l10 7 10-7"/></svg></div>
        <h3>Relances manuelles</h3>
        <p>Relancer un impayé, une pièce manquante, un rendez-vous : votre équipe le fait à la main, à chaque fois.</p>
        <div class="prob-cost">FRÉQUENCE À MESURER</div>
      </div>
      <div class="prob reveal reveal-d-2">
        <div class="prob-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8"/></svg></div>
        <h3>PDF à dépouiller à la main</h3>
        <p>Factures fournisseurs, contrats, CV, devis : quelqu'un les ouvre, lit, recopie les chiffres.</p>
        <div class="prob-cost">DURÉE / DOCUMENT À MESURER</div>
      </div>
      <div class="prob reveal reveal-d-3">
        <div class="prob-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 14l3-3 4 4 5-5"/></svg></div>
        <h3>Reporting du vendredi</h3>
        <p>À chaque reporting, des personnes peuvent devoir rassembler manuellement des chiffres qui vieillissent vite.</p>
        <div class="prob-cost">DURÉE / RAPPORT À MESURER</div>
      </div>

      <div class="prob reveal">
        <div class="prob-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/></svg></div>
        <h3>Onboarding nouveaux salariés</h3>
        <p>Créer les accès et expliquer des processus non documentés retarde la prise en main des nouveaux arrivants.</p>
        <div class="prob-cost">DÉLAI D'AUTONOMIE À MESURER</div>
      </div>
      <div class="prob reveal reveal-d-1">
        <div class="prob-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v4l3 3M20 4L4 20M12 2a10 10 0 1010 10"/></svg></div>
        <h3>Dépendance à une personne</h3>
        <p>Un salarié connaît « la bonne façon » de faire un truc critique. S'il est malade, tout s'arrête.</p>
        <div class="prob-cost">RISQUE OPÉRATIONNEL</div>
      </div>
      <div class="prob reveal reveal-d-2">
        <div class="prob-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/></svg></div>
        <h3>Erreurs humaines coûteuses</h3>
        <p>Un chiffre mal recopié dans un devis. Une TVA à 20% au lieu de 10%. Un mail envoyé au mauvais client.</p>
        <div class="prob-cost">INCIDENTS À RECENSER</div>
      </div>
      <div class="prob reveal reveal-d-3">
        <div class="prob-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82zM7 7h.01"/></svg></div>
        <h3>SaaS du marché inadaptés</h3>
        <p>Vous pouvez payer des fonctions peu utilisées tout en conservant des contournements manuels pour votre vrai besoin.</p>
        <div class="prob-cost">COÛT COMPLET À CALCULER</div>
      </div>
    </div>
  </div>
</section>

<!-- USE CASES (alternating) -->
<section class="useit">
  <div class="wrap">
    <div class="section-head reveal" style="margin-bottom:0">
      <div class="left">
        <div class="eyebrow">— Ce qu'on construit pour vous</div>
        <h2>Un outil qui épouse<br>votre façon de travailler.</h2>
      </div>
      <div class="right">
        Pas un logiciel du marché qu'on tord pour s'adapter. Votre métier a une façon de
        fonctionner propre : l'outil doit s'y plier, pas l'inverse.
      </div>
    </div>

    <div class="uc-list">

      <!-- CRM sur mesure -->
      <div class="uc-row reveal">
        <div class="uc-copy">
          <div class="eyebrow">CAS N°01 · COMMERCIAL</div>
          <h3>CRM adapté à votre cycle de vente réel.</h3>
          <p>
            Pas un clone de HubSpot. Votre pipeline a peut-être 4, 7 ou 12 étapes. Chaque étape a ses
            documents obligatoires, ses délais types, ses relances automatiques, ses alertes. On modélise
            <b>votre</b> process commercial — et pas celui imaginé par une startup californienne.
          </p>
          <ul class="feats">
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Pipeline visuel kanban</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Relances automatiques</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Devis générés en 1 clic</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Sync avec votre compta</li>
          </ul>
        </div>
        <div class="uc-visual">
          <svg width="100%" height="100%" viewBox="0 0 600 450" preserveAspectRatio="xMidYMid slice">
            <rect width="600" height="450" fill="#FAFAFA"/>
            <rect x="20" y="20" width="560" height="410" rx="10" fill="#fff" stroke="#E5E5E5"/>
            <text x="40" y="52" font-family="Geist" font-weight="700" font-size="18" fill="#0A0A0A">Pipeline commercial</text>
            <text x="40" y="70" font-family="Geist Mono" font-size="10" fill="#737373">18 deals en cours · 142 340 € potentiel</text>

            <!-- 4 kanban columns -->
            <g transform="translate(40 90)">
              <!-- Col 1 -->
              <rect x="0" y="0" width="125" height="320" rx="8" fill="#F5F5F5"/>
              <text x="12" y="18" font-family="Geist Mono" font-size="10" fill="#737373">DÉCOUVERTE · 6</text>
              <g font-family="Geist" font-size="10">
                <rect x="8" y="28" width="109" height="50" rx="5" fill="#fff"/>
                <text x="14" y="44" font-weight="600" fill="#0A0A0A">ACME Corp</text>
                <text x="14" y="58" fill="#737373" font-size="9">12 000 € · 7j</text>
                <circle cx="105" cy="68" r="7" fill="#0A0A0A"/><text x="105" y="71" text-anchor="middle" font-size="7" fill="#fff">P</text>

                <rect x="8" y="84" width="109" height="50" rx="5" fill="#fff"/>
                <text x="14" y="100" font-weight="600" fill="#0A0A0A">Dupont SA</text>
                <text x="14" y="114" fill="#737373" font-size="9">8 400 € · 3j</text>
                <circle cx="105" cy="124" r="7" fill="#6D28D9"/><text x="105" y="127" text-anchor="middle" font-size="7" fill="#fff">Q</text>

                <rect x="8" y="140" width="109" height="50" rx="5" fill="#fff"/>
                <text x="14" y="156" font-weight="600" fill="#0A0A0A">LEDUC BTP</text>
                <text x="14" y="170" fill="#737373" font-size="9">22 100 € · 1j</text>
              </g>

              <!-- Col 2 -->
              <rect x="135" y="0" width="125" height="320" rx="8" fill="#F5F5F5"/>
              <text x="147" y="18" font-family="Geist Mono" font-size="10" fill="#737373">QUALIFIÉ · 5</text>
              <g font-family="Geist" font-size="10">
                <rect x="143" y="28" width="109" height="50" rx="5" fill="#EDE9FE" stroke="#6D28D9" stroke-width="0.5"/>
                <text x="149" y="44" font-weight="600" fill="#0A0A0A">MARTIN SARL</text>
                <text x="149" y="58" fill="#4C1D95" font-size="9">18 200 € · relancer lundi</text>

                <rect x="143" y="84" width="109" height="50" rx="5" fill="#fff"/>
                <text x="149" y="100" font-weight="600" fill="#0A0A0A">Bernard &amp; Fils</text>
                <text x="149" y="114" fill="#737373" font-size="9">6 200 €</text>

                <rect x="143" y="140" width="109" height="50" rx="5" fill="#fff"/>
                <text x="149" y="156" font-weight="600" fill="#0A0A0A">GIGA Industrie</text>
                <text x="149" y="170" fill="#737373" font-size="9">31 000 €</text>
              </g>

              <!-- Col 3 -->
              <rect x="270" y="0" width="125" height="320" rx="8" fill="#F5F5F5"/>
              <text x="282" y="18" font-family="Geist Mono" font-size="10" fill="#737373">PROPOSITION · 4</text>
              <g font-family="Geist" font-size="10">
                <rect x="278" y="28" width="109" height="50" rx="5" fill="#fff"/>
                <text x="284" y="44" font-weight="600" fill="#0A0A0A">NOVA Tech</text>
                <text x="284" y="58" fill="#737373" font-size="9">42 000 € · devis #4892</text>

                <rect x="278" y="84" width="109" height="50" rx="5" fill="#fff"/>
                <text x="284" y="100" font-weight="600" fill="#0A0A0A">AUBERT SAS</text>
                <text x="284" y="114" fill="#737373" font-size="9">12 800 €</text>
              </g>

              <!-- Col 4 -->
              <rect x="405" y="0" width="125" height="320" rx="8" fill="#EDE9FE"/>
              <text x="417" y="18" font-family="Geist Mono" font-size="10" fill="#6D28D9">SIGNÉ · 3</text>
              <g font-family="Geist" font-size="10">
                <rect x="413" y="28" width="109" height="50" rx="5" fill="#fff"/>
                <text x="419" y="44" font-weight="600" fill="#0A0A0A">DEL ROSA</text>
                <text x="419" y="58" fill="#6D28D9" font-size="9">✓ 8 200 €</text>

                <rect x="413" y="84" width="109" height="50" rx="5" fill="#fff"/>
                <text x="419" y="100" font-weight="600" fill="#0A0A0A">Dubois Tech</text>
                <text x="419" y="114" fill="#6D28D9" font-size="9">✓ 14 400 €</text>
              </g>
            </g>
          </svg>
        </div>
      </div>

      <!-- ERP / compta -->
      <div class="uc-row flip reveal">
        <div class="uc-copy">
          <div class="eyebrow">CAS N°02 · ADMINISTRATIF</div>
          <h3>Facturation, relances, paiements.<br>Sans intervention humaine.</h3>
          <p>
            Fin de mois : le client reçoit sa facture automatiquement, avec les libellés, règles de TVA et
            mentions paramétrés à partir des informations validées par votre entreprise ou votre comptable. S'il ne paye pas, il reçoit trois relances espacées de 7 jours
            avec des tons progressifs. S'il paye, le logiciel appelle Pennylane pour créer l'écriture.
            <b>Vous n'avez touché à rien.</b>
          </p>
          <ul class="feats">
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Factures PDF automatiques</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Relances configurables</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Export Pennylane / Sage</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>E-facturation cadrée selon le calendrier applicable</li>
          </ul>
        </div>
        <div class="uc-visual">
          <svg width="100%" height="100%" viewBox="0 0 600 450" preserveAspectRatio="xMidYMid slice">
            <rect width="600" height="450" fill="#0A0A0A"/>
            <text x="40" y="50" font-family="Geist" font-weight="700" font-size="18" fill="#fff">Relances automatiques</text>
            <text x="40" y="70" font-family="Geist Mono" font-size="10" fill="#737373">cycle · lundi matin · 9h02</text>

            <!-- Timeline -->
            <g transform="translate(40 100)">
              <line x1="16" y1="0" x2="16" y2="300" stroke="#262626" stroke-width="2"/>

              <!-- Event 1 -->
              <circle cx="16" cy="20" r="8" fill="#6D28D9"/>
              <rect x="40" y="4" width="480" height="52" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
              <text x="52" y="22" font-family="Geist Mono" font-size="9" fill="#6D28D9">09:02 · FACTURE GÉNÉRÉE</text>
              <text x="52" y="38" font-family="Geist" font-size="11" fill="#fff">Facture #F2026-0421 · MARTIN SARL · 18 200,00 €</text>
              <text x="52" y="52" font-family="Geist Mono" font-size="9" fill="#737373">envoyée · martin@martin-sarl.fr</text>

              <!-- Event 2 -->
              <circle cx="16" cy="90" r="8" fill="#6D28D9"/>
              <rect x="40" y="74" width="480" height="52" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
              <text x="52" y="92" font-family="Geist Mono" font-size="9" fill="#6D28D9">09:03 · RELANCE #1 PROGRAMMÉE</text>
              <text x="52" y="108" font-family="Geist" font-size="11" fill="#fff">DUPONT SA · +28j échéance · ton cordial</text>
              <text x="52" y="122" font-family="Geist Mono" font-size="9" fill="#737373">programmée le 14/04 · 09:00</text>

              <!-- Event 3 -->
              <circle cx="16" cy="160" r="8" fill="#6D28D9"/>
              <rect x="40" y="144" width="480" height="52" rx="6" fill="rgba(109,40,217,0.08)" stroke="rgba(109,40,217,0.3)"/>
              <text x="52" y="162" font-family="Geist Mono" font-size="9" fill="#6D28D9">09:04 · RELANCE #3 ENVOYÉE</text>
              <text x="52" y="178" font-family="Geist" font-size="11" fill="#fff">ACME Industries · +45j échéance · mise en demeure</text>
              <text x="52" y="192" font-family="Geist Mono" font-size="9" fill="#737373">AR + email · 8 400 €</text>

              <!-- Event 4 -->
              <circle cx="16" cy="230" r="8" fill="#a3e47f"/>
              <rect x="40" y="214" width="480" height="52" rx="6" fill="rgba(163,228,127,0.08)" stroke="rgba(163,228,127,0.2)"/>
              <text x="52" y="232" font-family="Geist Mono" font-size="9" fill="#a3e47f">09:05 · PAIEMENT REÇU</text>
              <text x="52" y="248" font-family="Geist" font-size="11" fill="#fff">NOVA Tech · 42 000,00 €</text>
              <text x="52" y="262" font-family="Geist Mono" font-size="9" fill="#737373">écriture auto Pennylane · réconciliée</text>

              <!-- Event 5 summary -->
              <circle cx="16" cy="298" r="8" fill="#fff"/>
              <rect x="40" y="282" width="480" height="40" rx="6" fill="rgba(255,255,255,0.06)"/>
              <text x="52" y="302" font-family="Geist Mono" font-size="10" fill="#fff" font-weight="600">BILAN DU LUNDI · 6 actions effectuées · 0 intervention humaine</text>
              <text x="52" y="316" font-family="Geist Mono" font-size="9" fill="#737373">temps gagné équipe compta : 3h12</text>
            </g>
          </svg>
        </div>
      </div>

      <!-- RH -->
      <div class="uc-row reveal">
        <div class="uc-copy">
          <div class="eyebrow">CAS N°03 · RH</div>
          <h3>Onboarding, congés, notes de frais.<br>En un seul endroit.</h3>
          <p>
            Le jour J, le nouveau salarié reçoit par email tous ses accès, son livret d'accueil et
            son plan des 30 premiers jours. Ses congés, il les demande en deux clics — pas par
            un email que son manager oublie. Les notes de frais, il les photographie : l'IA
            extrait les informations, catégorise, calcule la TVA récupérable.
          </p>
          <ul class="feats">
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Onboarding 30-60-90 jours</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Congés &amp; RTT workflow</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Notes de frais photo + IA</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Entretiens annuels guidés</li>
          </ul>
        </div>
        <div class="uc-visual">
          <svg width="100%" height="100%" viewBox="0 0 600 450" preserveAspectRatio="xMidYMid slice">
            <rect width="600" height="450" fill="#FAFAFA"/>
            <rect x="20" y="20" width="560" height="410" rx="10" fill="#fff" stroke="#E5E5E5"/>

            <text x="40" y="52" font-family="Geist" font-weight="700" font-size="18" fill="#0A0A0A">Note de frais #NF-0428</text>
            <text x="40" y="70" font-family="Geist Mono" font-size="10" fill="#737373">Sophie D. · 14 avril 2026</text>

            <!-- Receipt photo mock -->
            <g transform="translate(40 100)">
              <rect x="0" y="0" width="200" height="260" fill="#F5F5F5" stroke="#E5E5E5" rx="6"/>
              <text x="100" y="24" text-anchor="middle" font-family="Geist Mono" font-size="9" fill="#737373">PHOTO REÇU</text>
              <rect x="20" y="40" width="160" height="30" fill="#fff"/>
              <text x="28" y="58" font-family="Geist Mono" font-size="10" fill="#0A0A0A">Le Bistrot du Lac</text>
              <text x="28" y="70" font-family="Geist Mono" font-size="8" fill="#737373">Annecy, 14/04/2026</text>
              <rect x="20" y="76" width="160" height="1" fill="#E5E5E5"/>
              <text x="28" y="96" font-family="Geist Mono" font-size="9" fill="#0A0A0A">2 × Menu du jour</text>
              <text x="172" y="96" text-anchor="end" font-family="Geist Mono" font-size="9" fill="#0A0A0A">38,00</text>
              <text x="28" y="112" font-family="Geist Mono" font-size="9" fill="#0A0A0A">2 × Café</text>
              <text x="172" y="112" text-anchor="end" font-family="Geist Mono" font-size="9" fill="#0A0A0A">5,80</text>
              <text x="28" y="128" font-family="Geist Mono" font-size="9" fill="#0A0A0A">1 × Eau</text>
              <text x="172" y="128" text-anchor="end" font-family="Geist Mono" font-size="9" fill="#0A0A0A">3,50</text>
              <rect x="20" y="136" width="160" height="1" fill="#E5E5E5"/>
              <text x="28" y="154" font-family="Geist Mono" font-weight="600" font-size="10" fill="#0A0A0A">TOTAL TTC</text>
              <text x="172" y="154" text-anchor="end" font-family="Geist Mono" font-weight="600" font-size="10" fill="#0A0A0A">47,30</text>
              <text x="28" y="168" font-family="Geist Mono" font-size="8" fill="#737373">TVA 10% incl.</text>

              <!-- Highlighting boxes from AI -->
              <rect x="26" y="44" width="156" height="24" fill="none" stroke="#6D28D9" stroke-width="1" stroke-dasharray="3 2"/>
              <rect x="168" y="148" width="16" height="12" fill="none" stroke="#6D28D9" stroke-width="1" stroke-dasharray="3 2"/>
            </g>

            <!-- Extracted form -->
            <g transform="translate(260 100)">
              <rect x="0" y="0" width="300" height="260" fill="#fff" stroke="#E5E5E5" rx="6"/>
              <text x="16" y="24" font-family="Geist Mono" font-size="9" fill="#6D28D9">◆ EXTRACTION IA · 0,8s</text>

              <text x="16" y="52" font-family="Geist Mono" font-size="9" fill="#737373">COMMERÇANT</text>
              <text x="16" y="68" font-family="Geist" font-size="12" fill="#0A0A0A" font-weight="500">Le Bistrot du Lac</text>

              <text x="16" y="92" font-family="Geist Mono" font-size="9" fill="#737373">DATE</text>
              <text x="16" y="108" font-family="Geist" font-size="12" fill="#0A0A0A" font-weight="500">14 avril 2026</text>

              <text x="156" y="52" font-family="Geist Mono" font-size="9" fill="#737373">CATÉGORIE</text>
              <rect x="156" y="60" width="124" height="20" rx="3" fill="#EDE9FE"/>
              <text x="166" y="74" font-family="Geist Mono" font-size="10" fill="#4C1D95">Repas clients</text>

              <text x="156" y="92" font-family="Geist Mono" font-size="9" fill="#737373">TVA</text>
              <text x="156" y="108" font-family="Geist" font-size="12" fill="#0A0A0A" font-weight="500">10% · 4,30 €</text>

              <rect x="16" y="128" width="268" height="1" fill="#E5E5E5"/>

              <text x="16" y="150" font-family="Geist Mono" font-size="9" fill="#737373">MONTANT TTC</text>
              <text x="16" y="180" font-family="Geist" font-weight="700" font-size="28" fill="#0A0A0A">47,30 €</text>

              <text x="16" y="208" font-family="Geist Mono" font-size="9" fill="#737373">TVA RÉCUPÉRABLE</text>
              <text x="16" y="230" font-family="Geist" font-weight="700" font-size="20" fill="#6D28D9">4,30 €</text>

              <rect x="156" y="208" width="124" height="34" rx="6" fill="#0A0A0A"/>
              <text x="218" y="230" text-anchor="middle" font-family="Geist" font-weight="500" font-size="12" fill="#fff">Valider</text>
            </g>
          </svg>
        </div>
      </div>

      <!-- Production / stocks -->
      <div class="uc-row flip reveal">
        <div class="uc-copy">
          <div class="eyebrow">CAS N°04 · OPÉRATIONS</div>
          <h3>Stocks, production, qualité<br>tracés en temps réel.</h3>
          <p>
            Un bouton scannable sur chaque poste, chaque machine, chaque produit. Vos opérateurs
            déclarent une production finie, une panne, un non-conforme en trois secondes.
            Vous voyez en temps réel ce qui se passe sur votre site — depuis votre bureau,
            votre téléphone, ou un écran géant en atelier.
          </p>
          <ul class="feats">
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>QR codes atelier</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Stock en temps réel</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Alerte rupture automatique</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Dashboards atelier</li>
          </ul>
        </div>
        <div class="uc-visual">
          <svg width="100%" height="100%" viewBox="0 0 600 450" preserveAspectRatio="xMidYMid slice">
            <rect width="600" height="450" fill="#0A0A0A"/>
            <text x="40" y="50" font-family="Geist" font-weight="700" font-size="18" fill="#fff">Atelier · production en direct</text>
            <text x="40" y="68" font-family="Geist Mono" font-size="10" fill="#737373">dernière mise à jour · il y a 2s</text>

            <!-- Machine cards -->
            <g transform="translate(40 100)">
              <rect x="0" y="0" width="160" height="120" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)"/>
              <text x="14" y="24" font-family="Geist Mono" font-size="10" fill="#a3e47f">● M-01 · ACTIVE</text>
              <text x="14" y="54" font-family="Geist" font-weight="700" font-size="22" fill="#fff">84%</text>
              <text x="14" y="70" font-family="Geist Mono" font-size="9" fill="#737373">rendement shift</text>
              <rect x="14" y="86" width="132" height="6" rx="3" fill="rgba(255,255,255,0.06)"/>
              <rect x="14" y="86" width="111" height="6" rx="3" fill="#a3e47f"/>
              <text x="14" y="108" font-family="Geist Mono" font-size="9" fill="#737373">1 240 pièces · 38/h</text>

              <rect x="180" y="0" width="160" height="120" rx="8" fill="rgba(109,40,217,0.08)" stroke="rgba(109,40,217,0.3)"/>
              <text x="194" y="24" font-family="Geist Mono" font-size="10" fill="#6D28D9">● M-02 · PANNE</text>
              <text x="194" y="54" font-family="Geist" font-weight="700" font-size="22" fill="#fff">—</text>
              <text x="194" y="70" font-family="Geist Mono" font-size="9" fill="#737373">arrêt depuis 14 min</text>
              <text x="194" y="94" font-family="Geist" font-size="11" fill="#fff">Panne détecteur position</text>
              <text x="194" y="108" font-family="Geist Mono" font-size="9" fill="#6D28D9">maintenance en route</text>

              <rect x="360" y="0" width="160" height="120" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)"/>
              <text x="374" y="24" font-family="Geist Mono" font-size="10" fill="#a3e47f">● M-03 · ACTIVE</text>
              <text x="374" y="54" font-family="Geist" font-weight="700" font-size="22" fill="#fff">92%</text>
              <text x="374" y="70" font-family="Geist Mono" font-size="9" fill="#737373">rendement shift</text>
              <rect x="374" y="86" width="132" height="6" rx="3" fill="rgba(255,255,255,0.06)"/>
              <rect x="374" y="86" width="121" height="6" rx="3" fill="#a3e47f"/>
              <text x="374" y="108" font-family="Geist Mono" font-size="9" fill="#737373">1 880 pièces · 44/h</text>
            </g>

            <!-- Events log -->
            <g transform="translate(40 240)">
              <text x="0" y="0" font-family="Geist Mono" font-size="10" fill="#737373">EVENTS · DERNIÈRES 5 MIN</text>
              <rect x="0" y="12" width="480" height="30" rx="5" fill="rgba(255,255,255,0.03)"/>
              <text x="14" y="32" font-family="Geist Mono" font-size="10" fill="#a3e47f">✓ M-03 · lot L-8421 terminé · 412 pièces OK · 0 rebut</text>
              <rect x="0" y="46" width="480" height="30" rx="5" fill="rgba(109,40,217,0.1)"/>
              <text x="14" y="66" font-family="Geist Mono" font-size="10" fill="#6D28D9">! M-02 · panne détecteur · Kévin alerté 14:12</text>
              <rect x="0" y="80" width="480" height="30" rx="5" fill="rgba(255,255,255,0.03)"/>
              <text x="14" y="100" font-family="Geist Mono" font-size="10" fill="#fff">→ M-01 · changement bobine · Fatima · 14:08</text>
              <rect x="0" y="114" width="480" height="30" rx="5" fill="rgba(255,255,255,0.03)"/>
              <text x="14" y="134" font-family="Geist Mono" font-size="10" fill="#a3e47f">✓ Stock matière MP-042 · réappro auto commandé</text>
            </g>
          </svg>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- AUTOMATION BANNER (dark) -->
<section class="autom">
  <div class="autom-bg"></div>
  <div class="wrap inner">
    <div class="reveal">
      <div class="eyebrow on-dark">— L'IA dans votre back-office</div>
      <h2 style="margin-top:14px">Le flux type qu'on<br>déploie sur un back-office.</h2>
      <p class="autom-sub">
        L'IA n'est pas un gadget. Elle remplace littéralement le copier-coller humain entre
        vos documents entrants et vos outils métier. Voici le flux type qu'on met en place dans une PME.
      </p>
    </div>

    <div class="flow reveal reveal-d-1">
      <div class="flow-track">
        <div class="flow-node">
          <div class="fn-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zM2 6l10 7 10-7"/></svg></div>
          <h3>Documents entrants</h3>
          <p>Facture fournisseur, CV, contrat, devis, photo de reçu.</p>
          <span class="tag">EMAIL · UPLOAD</span>
        </div>
        <div class="flow-arrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></div>
        <div class="flow-node ai">
          <div class="fn-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z"/></svg></div>
          <h3>Extraction IA typée</h3>
          <p>Claude ou GPT-4 lit, comprend, extrait un objet JSON validé.</p>
          <span class="tag">CLAUDE · GPT-4</span>
        </div>
        <div class="flow-arrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></div>
        <div class="flow-node">
          <div class="fn-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg></div>
          <h3>Validation humaine</h3>
          <p>Un opérateur vérifie en 5 secondes (champs préremplis).</p>
          <span class="tag">UI · MOBILE</span>
        </div>
        <div class="flow-arrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></div>
        <div class="flow-node">
          <div class="fn-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 7L12 3L4 7M20 7L12 11L4 7M20 7v10l-8 4m-8-14v10l8 4"/></svg></div>
          <h3>Votre système</h3>
          <p>Écriture comptable, fiche client, stock, CRM — synchronisés.</p>
          <span class="tag">PENNYLANE · CRM</span>
        </div>
      </div>

      <div class="flow-stats" aria-label="Variables à mesurer pendant le cadrage">
        <div class="fs">
          <div class="fs-label">TEMPS PAR DOCUMENT</div>
          <div class="fs-num">À mesurer</div>
          <div class="fs-note">avant / après sur votre propre échantillon</div>
        </div>
        <div class="fs">
          <div class="fs-label">TAUX DE VALIDATION</div>
          <div class="fs-num">À tester</div>
          <div class="fs-note">avec seuil de confiance et contrôle humain</div>
        </div>
        <div class="fs">
          <div class="fs-label">COÛT PAR TRAITEMENT</div>
          <div class="fs-num">À chiffrer</div>
          <div class="fs-note">modèles, infrastructure et validation inclus</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- BRIQUES -->
<section class="briques">
  <div class="wrap">
    <div class="section-head reveal" style="margin-bottom:0">
      <div class="left">
        <div class="eyebrow">— Briques assemblables</div>
        <h2>16 modules courants.<br>On assemble ceux qui vous servent.</h2>
      </div>
      <div class="right">
        Nous réutilisons les composants éprouvés lorsqu'ils correspondent au besoin. Le cadrage
        distingue les briques adaptables de ce qui doit être développé pour votre métier.
      </div>
    </div>

    <div class="bq-grid">
      <div class="bq reveal"><div class="bq-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 7L12 3L4 7M20 7L12 11M20 7v10l-8 4M4 7v10l8 4M12 11v10"/></svg></div><h3>Auth &amp; SSO</h3><p>Email, Google, Microsoft, SAML entreprise.</p></div>
      <div class="bq reveal reveal-d-1"><div class="bq-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg></div><h3>Permissions par rôle</h3><p>Équipes, droits, audit log complet.</p></div>
      <div class="bq reveal reveal-d-2"><div class="bq-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div><h3>Tables géantes</h3><p>Filtres, tri, pagination sur 1M+ de lignes.</p></div>
      <div class="bq reveal reveal-d-3"><div class="bq-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18M7 14l3-3 4 4 5-5"/></svg></div><h3>Dashboards &amp; KPI</h3><p>Graphs temps réel, exports PDF/Excel.</p></div>

      <div class="bq reveal"><div class="bq-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg></div><h3>Gestion documentaire</h3><p>Upload, versioning, prévisualisation.</p></div>
      <div class="bq reveal reveal-d-1"><div class="bq-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z"/></svg></div><h3>Extraction IA</h3><p>Factures, CV, contrats, photos de reçus.</p></div>
      <div class="bq reveal reveal-d-2"><div class="bq-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></div><h3>Messagerie interne</h3><p>Commentaires contextuels, notifications.</p></div>
      <div class="bq reveal reveal-d-3"><div class="bq-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div><h3>Tâches planifiées</h3><p>Cron, emails récurrents, rapports hebdo.</p></div>

      <div class="bq reveal"><div class="bq-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zM2 6l10 7 10-7"/></svg></div><h3>Emails transactionnels</h3><p>Templates, suivi d'ouverture.</p></div>
      <div class="bq reveal reveal-d-1"><div class="bq-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div><h3>Géolocalisation</h3><p>Tournées, cartes, trajets optimisés.</p></div>
      <div class="bq reveal reveal-d-2"><div class="bq-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><h3>Fonctions RGPD</h3><p>Consentements, exports et conservation selon le rôle et le périmètre.</p></div>
      <div class="bq reveal reveal-d-3"><div class="bq-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg></div><h3>Signature électronique</h3><p>Yousign, DocuSign, intégré aux workflows.</p></div>

      <div class="bq reveal"><div class="bq-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20"/></svg></div><h3>Intégrations tierces</h3><p>Pennylane, Axonaut, Pipedrive, Slack.</p></div>
      <div class="bq reveal reveal-d-1"><div class="bq-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 7L9 18l-5-5"/></svg></div><h3>Validations multi-niveaux</h3><p>N+1, N+2, seuils, délégations.</p></div>
      <div class="bq reveal reveal-d-2"><div class="bq-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7v10M21 7v10M3 7l9 5 9-5M3 17l9-5 9 5"/></svg></div><h3>Imports Excel massifs</h3><p>Migration données anciennes, en 1 clic.</p></div>
      <div class="bq reveal reveal-d-3"><div class="bq-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 12h6M12 9v6"/></svg></div><h3>QR codes atelier</h3><p>Scan mobile, déclarations terrain.</p></div>
    </div>
  </div>
</section>

<!-- CASE HIGHLIGHT -->
<section class="caseh">
  <div class="wrap">
    <div class="caseh-inner">
      <div class="caseh-copy reveal">
        <div class="eyebrow">— Démonstration sur un produit interne</div>
        <h2>L'outil qu'on a construit<br>pour <em>notre</em> cabinet.</h2>
        <p>
          <b>Transparence</b> : Hagnéré Patrimoine est notre propre cabinet, pas un client externe.
          Nous nous appuyons sur ce produit interne pour illustrer les familles de fonctions qu'un outil métier
          peut réunir. L'interface ci-contre est une reconstruction pédagogique : <b>ses noms, montants et
          indicateurs sont fictifs</b> et ne constituent ni des résultats clients ni une promesse de performance.
        </p>
        <div class="caseh-metrics">
          <div class="chm">
            <div class="chm-num">Avant</div>
            <div class="chm-lbl">Temps administratif à mesurer</div>
          </div>
          <div class="chm">
            <div class="chm-num">Après</div>
            <div class="chm-lbl">Recopiages restants à contrôler</div>
          </div>
          <div class="chm">
            <div class="chm-num">Coûts</div>
            <div class="chm-lbl">Licences et maintenance comparées</div>
          </div>
          <div class="chm">
            <div class="chm-num">ROI</div>
            <div class="chm-lbl">Calculé avec hypothèses explicites</div>
          </div>
        </div>
      </div>
      <div class="caseh-visual reveal reveal-d-2">
        <svg width="100%" height="100%" viewBox="0 0 600 450" preserveAspectRatio="xMidYMid slice">
          <rect width="600" height="450" fill="#0A0A0A"/>
          <text x="40" y="50" font-family="Geist" font-weight="700" font-size="14" fill="#fff">produit-interne.demo</text>
          <text x="40" y="68" font-family="Geist Mono" font-size="9" fill="#737373">EXEMPLE ILLUSTRATIF · DONNÉES FICTIVES</text>

          <!-- Summary cards -->
          <g transform="translate(40 90)">
            <rect x="0" y="0" width="160" height="90" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
            <text x="14" y="22" font-family="Geist Mono" font-size="9" fill="#737373">DOSSIERS SUIVIS</text>
            <text x="14" y="56" font-family="Geist" font-weight="700" font-size="26" fill="#fff">—</text>
            <text x="14" y="74" font-family="Geist Mono" font-size="9" fill="#a3e47f">à configurer</text>

            <rect x="170" y="0" width="160" height="90" rx="8" fill="rgba(109,40,217,0.08)" stroke="rgba(109,40,217,0.3)"/>
            <text x="184" y="22" font-family="Geist Mono" font-size="9" fill="#6D28D9">INDICATEUR MÉTIER</text>
            <text x="184" y="56" font-family="Geist" font-weight="700" font-size="26" fill="#fff">—</text>
            <text x="184" y="74" font-family="Geist Mono" font-size="9" fill="#6D28D9">défini au cadrage</text>

            <rect x="340" y="0" width="180" height="90" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
            <text x="354" y="22" font-family="Geist Mono" font-size="9" fill="#737373">AUTO / CONTRÔLE</text>
            <text x="354" y="56" font-family="Geist" font-weight="700" font-size="26" fill="#fff">— <tspan font-size="14" fill="#737373">/ —</tspan></text>
            <text x="354" y="74" font-family="Geist Mono" font-size="9" fill="#a3e47f">seuils à régler</text>
          </g>

          <!-- Activity feed -->
          <g transform="translate(40 200)">
            <text x="0" y="0" font-family="Geist Mono" font-size="9" fill="#737373">EXEMPLE DE JOURNAL D'ACTIVITÉ</text>
            <rect x="0" y="12" width="520" height="30" rx="5" fill="rgba(255,255,255,0.03)"/>
            <text x="14" y="32" font-family="Geist Mono" font-size="10" fill="#a3e47f">✓ Rapport brouillon généré · validation humaine requise</text>
            <rect x="0" y="46" width="520" height="30" rx="5" fill="rgba(255,255,255,0.03)"/>
            <text x="14" y="66" font-family="Geist Mono" font-size="10" fill="#a3e47f">✓ Documents préparés · lot de démonstration</text>
            <rect x="0" y="80" width="520" height="30" rx="5" fill="rgba(255,255,255,0.03)"/>
            <text x="14" y="100" font-family="Geist Mono" font-size="10" fill="#a3e47f">✓ Notification test envoyée · destinataires fictifs</text>
            <rect x="0" y="114" width="520" height="30" rx="5" fill="rgba(109,40,217,0.08)"/>
            <text x="14" y="134" font-family="Geist Mono" font-size="10" fill="#6D28D9">! Exception métier · assignée pour traitement</text>
            <rect x="0" y="148" width="520" height="30" rx="5" fill="rgba(255,255,255,0.03)"/>
            <text x="14" y="168" font-family="Geist Mono" font-size="10" fill="#a3e47f">✓ Données test importées depuis le formulaire</text>
            <rect x="0" y="182" width="520" height="30" rx="5" fill="rgba(255,255,255,0.03)"/>
            <text x="14" y="202" font-family="Geist Mono" font-size="10" fill="#fff">→ Contrôle manuel terminé · export de démonstration</text>
          </g>
        </svg>
      </div>
    </div>
  </div>
</section>

<!-- PRICING -->
<section class="pricing" id="tarifs">
  <div class="wrap">
    <div class="section-head reveal" style="margin-bottom:0">
      <div class="left">
        <div class="eyebrow">— Forfaits</div>
        <h2>De l'audit à l'ERP léger.<br>Un prix fixe à chaque marche.</h2>
      </div>
      <div class="right">
        On vend au forfait, pas au temps passé. Vous savez exactement ce que vous payez
        et ce que vous obtenez <b>avant</b> de signer — et combien de temps ça prend.
      </div>
    </div>

    <div class="price-grid price-grid-4">
      <div class="plan plan-audit reveal">
        <div class="plan-tag">DÉMARRAGE</div>
        <h3>Audit processus</h3>
        <div class="plan-sub">Point d'entrée peu engageant. Déductible du forfait si mission ensuite.</div>
        <div class="plan-price">
          <span class="amount">990 €</span>
          <span class="per">HT · 1 jour</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>1 journée sur site (ou visio)</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Observation de 2–3 équipes</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Cartographie 3–5 processus</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Roadmap 3 scénarios chiffrés</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-ghost">Réserver l'audit</a></div>
      </div>

      <div class="plan reveal reveal-d-1">
        <div class="plan-tag">AUTOMATION SIMPLE</div>
        <h3>Starter</h3>
        <div class="plan-sub">Un seul processus douloureux, automatisé proprement. Idéal pour tester.</div>
        <div class="plan-price">
          <span class="amount">8–15 k€</span>
          <span class="per">forfait TTC</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>1 workflow automatisé</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Intégration à vos outils actuels</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Hébergement 6 mois inclus</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Livraison 2–3 semaines</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-ghost">Demander un devis</a></div>
      </div>

      <div class="plan featured reveal reveal-d-2">
        <div class="plan-badge">FORMULE INTERMÉDIAIRE</div>
        <div class="plan-tag">OUTIL COMPLET</div>
        <h3>Pro</h3>
        <div class="plan-sub">Un back-office complet qui remplace vos fichiers Excel et vos process manuels.</div>
        <div class="plan-price">
          <span class="amount">25–50 k€</span>
          <span class="per">forfait TTC</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>8–12 écrans métier</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>5+ workflows automatisés</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Extraction IA (factures, documents)</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Migration de vos données Excel</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Formation des équipes</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Livraison 5–7 semaines</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-accent">Démarrer mon projet</a></div>
      </div>

      <div class="plan reveal reveal-d-3">
        <div class="plan-tag">ERP ENTREPRISE</div>
        <h3>Enterprise</h3>
        <div class="plan-sub">Outil central qui fait tourner toute la boîte. Multi-services, multi-sites.</div>
        <div class="plan-price">
          <span class="amount">Sur-mesure</span>
          <span class="per">à partir de 80 k€</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Périmètre multi-services</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>SSO entreprise · SAML</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Niveau de service et horaires définis au devis</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Conduite du changement incluse</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-ghost">Parlons-en</a></div>
      </div>
    </div>

    <p style="text-align:center;margin-top:40px;color:var(--mute);font-size:14px">
      Chaque devis précise : <b style="color:var(--ink)">livrables et droits · dépôt et accès · formation · recette et éventuelle garantie</b>
    </p>
  </div>
</section>

<!-- ROI CALCULATOR -->
<section class="roi" id="roi">
  <div class="wrap">
    <div class="section-head reveal" style="margin-bottom:0">
      <div class="left">
        <div class="eyebrow">— Calculateur de ROI</div>
        <h2>Combien ça vous coûte<br>de rien faire ?</h2>
      </div>
      <div class="right">
        Règle du pouce qu'on applique au cadrage. Ajustez les curseurs à votre situation.
      </div>
    </div>

    <div class="roi-grid">
      <div class="roi-copy reveal">
        <p>
          Un outil interne devient rentable si les économies et gains réellement mesurés dépassent son
          coût total. Le calcul ci-contre est une <b>simulation non contractuelle</b> : remplacez chaque
          hypothèse par vos données et ajoutez maintenance, formation, infrastructure et conduite du changement.
        </p>
        <ul class="chks">
          <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Coût horaire chargé à remplacer par votre donnée RH</li>
          <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Temps réellement évitable à valider pendant le pilote</li>
          <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Horizon d'analyse à choisir avec votre direction financière</li>
        </ul>
        <div style="margin-top:32px;padding:20px;background:#fff;border:1px dashed var(--line);border-radius:10px">
          <div style="font-family:'Geist Mono';font-size:11px;color:var(--mute);letter-spacing:0.04em">À RETENIR</div>
          <div style="font-size:15px;margin-top:6px;color:var(--ink-3);line-height:1.5">
            La décision dépend du coût complet, du risque opérationnel et du taux d'adoption.
            Un pilote instrumenté permet de décider sur des données plutôt que sur une promesse.
          </div>
        </div>
      </div>

      <div class="roi-calc reveal reveal-d-1">
        <div class="roi-row">
          <label for="roi-people">Nombre de salariés concernés</label>
          <div class="roi-input">
            <input type="range" id="roi-people" min="1" max="50" value="8">
            <div class="roi-val"><span id="roi-people-v">8</span> personnes</div>
          </div>
        </div>

        <div class="roi-row">
          <label for="roi-hours">Heures perdues / semaine / personne</label>
          <div class="roi-input">
            <input type="range" id="roi-hours" min="1" max="20" value="6">
            <div class="roi-val"><span id="roi-hours-v">6</span> h / semaine</div>
          </div>
        </div>

        <div class="roi-row">
          <label for="roi-cost">Coût horaire chargé moyen</label>
          <div class="roi-input">
            <input type="range" id="roi-cost" min="20" max="100" step="5" value="45">
            <div class="roi-val"><span id="roi-cost-v">45</span> € / h</div>
          </div>
        </div>

        <div class="roi-result">
          <div class="label">COÛT ANNUEL DU TEMPS DÉCLARÉ</div>
          <div class="big"><span id="roi-total">101&nbsp;520</span><span class="s"> €</span></div>
          <div class="sub">soit <span id="roi-monthly">8&nbsp;460</span>&nbsp;€ par mois, avec la convention de 47 semaines travaillées par an. Ce montant n'est pas une économie garantie.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="faq">
  <div class="wrap">
    <div class="faq-grid">
      <div class="faq-intro reveal">
        <div class="eyebrow">— Questions fréquentes</div>
        <h2 style="margin-top:14px">Vous avez<br>des questions.</h2>
        <p>Les plus fréquentes en phase commerciale, traitées directement.</p>
      </div>

      <div class="faq-list reveal reveal-d-1">
        <div class="faq-item open">
          <div class="faq-q">Mes équipes vont-elles vraiment l'utiliser ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            C'est une question centrale. Associer des utilisateurs finaux au cadrage, aux tests et à la formation
            réduit le risque, sans garantir l'adoption. Le devis précise les personnes consultées et les actions
            d'accompagnement&nbsp;; l'usage réel se mesure ensuite dans les journaux et par entretien.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">On garde nos logiciels actuels (Pennylane, Pipedrive…) ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            C'est souvent possible, après vérification des API, licences, droits et limites de chaque éditeur.
            Le cadrage décide ce qui reste source de vérité, ce qui est synchronisé et ce qui doit être remplacé.
            Les écritures sensibles prévoient validation, traçabilité et reprise sur erreur selon le risque.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Et si notre besoin évolue dans 2 ans ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Les livrables spécifiques et les droits transférés sont définis au devis puis cédés après
            paiement complet selon les CGV. Dépôt, accès, documentation, composants préexistants et
            licences tierces sont inventoriés pour permettre une reprise par votre équipe ou un autre prestataire.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Nos données sensibles sont-elles protégées ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            La protection dépend de la nature des données et du risque. Localisation de l'hébergement,
            chiffrement, sauvegardes, piste d'audit et permissions sont cadrés dans le devis.
            Le registre, le DPA et les autres documents ne sont fournis que lorsqu'ils appartiennent au périmètre&nbsp;;
            les qualifications juridiques restent à valider par votre conseil ou votre DPO.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Combien de temps pour former nos équipes ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            La durée dépend des rôles et de la complexité. Notre priorité en design est
            de réduire le besoin de formation et de documenter les gestes qui ne sont pas évidents —
            le logiciel doit autant que possible s'expliquer seul. Le devis précise les publics,
            les supports et le nombre de sessions de formation retenus pour le lancement.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">On peut commencer petit puis étendre ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>C'est même recommandé</b>. L'approche que nous conseillons : démarrer avec le forfait
            <i>Starter</i> sur un processus bien précis (les relances impayés, par exemple). Une fois
            l'outil en production et adopté, on étend avec d'autres modules. Cette approche limite
            le risque et permet à l'équipe de s'habituer progressivement.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="scta" id="contact">
  <div class="scta-bg"></div>
  <div class="wrap inner">
    <div class="eyebrow on-dark">— Prochaine étape</div>
    <h2 style="margin-top:14px">Parlons de vos process.<br><span class="accent">30 minutes, c'est tout.</span></h2>
    <p>Un call de cadrage gratuit avec un de nos seniors. On regarde ensemble vos 2 ou 3 processus les plus douloureux et on vous dit franchement si un outil sur mesure se justifie.</p>
    <div class="scta-cta">
      <a href="#" class="btn btn-accent btn-lg">
        📅 &nbsp;Réserver 30 min sur Calendly
        <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
      <a href="mailto:quentin@hagnere-patrimoine.fr" class="btn btn-ghost btn-lg" style="background:rgba(255,255,255,0.05);color:#fff;border-color:rgba(255,255,255,0.15)">
        Envoyer un email →
      </a>
    </div>
    <div class="scta-meta">OBJECTIF : PROCHAIN JOUR OUVRÉ · DÉLAI NON GARANTI · PAR UN ASSOCIÉ · SANS ENGAGEMENT</div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="wrap">
    <div class="foot-top">
      <div class="foot-brand">
        <a href="/" class="brand" style="margin-bottom:16px">
          <div class="brand-mark">HC</div>
          <div class="brand-name"><b>Hagnéré</b> <span>Code</span></div>
        </a>
        <p>Agence de développement SaaS AI-native basée à Bassens, aux portes de Chambéry. Dev, design, SEO, ads, vidéo intégrée.</p>
      </div>
      <div class="foot-cols">
        <div class="foot-col">
          <h3>SERVICES</h3>
          <a href="/services/saas-applications-metier">SaaS &amp; applications métier</a>
          <a href="/services/outils-internes-sur-mesure">Outils internes</a>
          <a href="#">Sites vitrines</a>
          <a href="#">SEO</a>
          <a href="#">Publicité</a>
        </div>
        <div class="foot-col">
          <h3>STUDIO</h3>
          <a href="/methode">Méthode</a>
          <a href="/realisations">Réalisations</a>
          <a href="/equipe">Équipe</a>
          <a href="/tarifs">Tarifs</a>
        </div>
        <div class="foot-col">
          <h3>CONTACT</h3>
          <a href="mailto:quentin@hagnere-patrimoine.fr">quentin@hagnere-patrimoine.fr</a>
          <a href="#">LinkedIn</a>
          <a href="#">YouTube</a>
        </div>
        <div class="foot-col">
          <h3>LÉGAL</h3>
          <a href="#">CGV</a>
          <a href="#">Mentions légales</a>
          <a href="#">Confidentialité</a>
        </div>
      </div>
    </div>
    <div class="foot-bot">
      <div>© 2026 HAGNERE CODE · SASU au capital de 10 € · RCS Chambéry 993 672 856 · TVA FR30 993 672 856 · NAF 62.01Z · 82 impasse de Bellevue, 73000 Bassens</div>
      <div>BUILT WITH NEXT.JS + CLAUDE CODE</div>
    </div>
  </div>
</footer>

`;
