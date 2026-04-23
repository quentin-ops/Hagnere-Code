/**
 * Per-service question modules. Each function renders the form for ONE
 * service. The wizard renders only the modules whose service was checked
 * at step 1.
 *
 * Each module receives:
 *   - answers: the current value (or undefined if untouched)
 *   - onChange: setter that takes the full answers object
 *
 * Validation per module → exposed via the `isModuleValid()` helper at the
 * bottom (the wizard uses it to gate the "Next" button).
 */

import {
  SAAS_FEATURES,
  ERP_OPTIONS,
  APP_MOBILE_FEATURES,
  ADS_CHANNELS,
  COMPLIANCE_OPTIONS,
  SECURITE_NEEDS,
  type ServiceId,
  type SiteVitrineAnswers,
  type SaasAnswers,
  type SaasFeatureId,
  type OutilInterneAnswers,
  type ErpId,
  type EcommerceAnswers,
  type AppMobileAnswers,
  type AppMobileFeatureId,
  type RefonteAnswers,
  type SeoAnswers,
  type AdsAnswers,
  type AdsChannelId,
  type VideoAnswers,
  type MaintenanceAnswers,
  type SecuriteRgpdAnswers,
  type ComplianceId,
  type SecuriteNeedId,
  type AuditTechniqueAnswers,
} from "./types";

// =====================================================================
// Reusable input primitives
// =====================================================================

function RadioGroup<T extends string>({
  options,
  value,
  onChange,
  columns = 2,
}: {
  options: { id: T; label: string; sub?: string }[];
  value: T | undefined;
  onChange: (v: T) => void;
  columns?: 2 | 4;
}) {
  return (
    <div className={`calc-grid-${columns}`}>
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          onClick={() => onChange(o.id)}
          className={`calc-radio ${value === o.id ? "selected" : ""}`}
          aria-pressed={value === o.id}
        >
          <div className="calc-radio-main">{o.label}</div>
          {o.sub && <div className="calc-radio-sub">{o.sub}</div>}
        </button>
      ))}
    </div>
  );
}

function Checklist<T extends string>({
  options,
  selected,
  onChange,
}: {
  options: ReadonlyArray<{ id: T; label: string }>;
  selected: T[] | undefined;
  onChange: (next: T[]) => void;
}) {
  const sel = selected || [];
  function toggle(id: T) {
    onChange(sel.includes(id) ? sel.filter((x) => x !== id) : [...sel, id]);
  }
  return (
    <div className="calc-checklist">
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          onClick={() => toggle(o.id)}
          className={`calc-check ${sel.includes(o.id) ? "selected" : ""}`}
          aria-pressed={sel.includes(o.id)}
        >
          <div className="calc-check-box">
            {sel.includes(o.id) && (
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 12l5 5L20 7" />
              </svg>
            )}
          </div>
          <span>{o.label}</span>
        </button>
      ))}
    </div>
  );
}

function YesNoRow({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean | undefined;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="calc-yesno-row">
      <span className="calc-yesno-label">{label}</span>
      <div className="calc-yesno-buttons">
        <button
          type="button"
          onClick={() => onChange(true)}
          className={`calc-yesno-btn ${value === true ? "selected" : ""}`}
        >
          Oui
        </button>
        <button
          type="button"
          onClick={() => onChange(false)}
          className={`calc-yesno-btn ${value === false ? "selected" : ""}`}
        >
          Non
        </button>
      </div>
    </div>
  );
}

// =====================================================================
// Module 1 — Site vitrine
// =====================================================================

export function SiteVitrineModule({
  answers,
  onChange,
}: {
  answers: SiteVitrineAnswers | undefined;
  onChange: (next: SiteVitrineAnswers) => void;
}) {
  const a: SiteVitrineAnswers = answers || {
    pages: "medium",
    multilang: false,
    cms: false,
    blogSeo: false,
    abTesting: false,
  };
  function set<K extends keyof SiteVitrineAnswers>(k: K, v: SiteVitrineAnswers[K]) {
    onChange({ ...a, [k]: v });
  }
  return (
    <>
      <div className="calc-field">
        <label className="calc-label">Combien de pages environ ?</label>
        <RadioGroup
          value={a.pages}
          onChange={(v) => set("pages", v)}
          options={[
            { id: "small", label: "5 pages", sub: "Landing courte ou one-pager riche" },
            { id: "medium", label: "10 pages", sub: "Site corporate standard" },
            { id: "large", label: "20 pages", sub: "Site institutionnel" },
            { id: "xlarge", label: "30+ pages", sub: "Site éditorial volumineux" },
          ]}
          columns={2}
        />
      </div>
      <div className="calc-field calc-yesno-stack">
        <YesNoRow label="Multi-langue (i18n) ?" value={a.multilang} onChange={(v) => set("multilang", v)} />
        <YesNoRow label="CMS éditable par l'équipe ?" value={a.cms} onChange={(v) => set("cms", v)} />
        <YesNoRow label="Blog SEO avec architecture cocons ?" value={a.blogSeo} onChange={(v) => set("blogSeo", v)} />
        <YesNoRow label="A/B testing setup ?" value={a.abTesting} onChange={(v) => set("abTesting", v)} />
      </div>
    </>
  );
}

// =====================================================================
// Module 2 — SaaS
// =====================================================================

export function SaasModule({
  answers,
  onChange,
}: {
  answers: SaasAnswers | undefined;
  onChange: (next: SaasAnswers) => void;
}) {
  const a: SaasAnswers = answers || { screens: 10, users: "small", features: [] };
  function set<K extends keyof SaasAnswers>(k: K, v: SaasAnswers[K]) {
    onChange({ ...a, [k]: v });
  }
  return (
    <>
      <div className="calc-field">
        <label className="calc-label">
          Nombre d&apos;écrans estimé : <b>{a.screens}</b>
        </label>
        <p className="calc-help">5-10 = MVP · 10-20 = SaaS standard · 20-30+ = plateforme riche</p>
        <input
          type="range"
          min={3}
          max={50}
          step={1}
          value={a.screens}
          onChange={(e) => set("screens", Number(e.target.value))}
          className="calc-range"
        />
        <div className="calc-range-marks">
          <span>3</span><span>10</span><span>20</span><span>30</span><span>50+</span>
        </div>
      </div>
      <div className="calc-field">
        <label className="calc-label">Nombre d&apos;utilisateurs prévu à l&apos;ouverture</label>
        <RadioGroup
          value={a.users}
          onChange={(v) => set("users", v)}
          options={[
            { id: "small", label: "< 50", sub: "MVP, beta privée" },
            { id: "medium", label: "50–500", sub: "PME B2B" },
            { id: "large", label: "500–5k", sub: "Plateforme à fort volume" },
            { id: "huge", label: "5 000+", sub: "Marketplace, mass-market" },
          ]}
          columns={2}
        />
      </div>
      <div className="calc-field">
        <label className="calc-label">Features clés (cocher tout ce qui s&apos;applique)</label>
        <Checklist<SaasFeatureId>
          options={SAAS_FEATURES}
          selected={a.features}
          onChange={(v) => set("features", v)}
        />
      </div>
    </>
  );
}

// =====================================================================
// Module 3 — Outil interne
// =====================================================================

export function OutilInterneModule({
  answers,
  onChange,
}: {
  answers: OutilInterneAnswers | undefined;
  onChange: (next: OutilInterneAnswers) => void;
}) {
  const a: OutilInterneAnswers = answers || {
    internalUsers: "small",
    workflowReplaced: "",
    erpIntegrations: [],
    reporting: false,
  };
  function set<K extends keyof OutilInterneAnswers>(k: K, v: OutilInterneAnswers[K]) {
    onChange({ ...a, [k]: v });
  }
  return (
    <>
      <div className="calc-field">
        <label className="calc-label">Combien d&apos;utilisateurs internes ?</label>
        <RadioGroup
          value={a.internalUsers}
          onChange={(v) => set("internalUsers", v)}
          options={[
            { id: "small", label: "< 10", sub: "Petite équipe" },
            { id: "medium", label: "10–50", sub: "Service métier" },
            { id: "large", label: "50–200", sub: "Multi-équipes" },
            { id: "xlarge", label: "200+", sub: "Toute l'entreprise" },
          ]}
          columns={2}
        />
      </div>
      <div className="calc-field">
        <label htmlFor="workflowReplaced" className="calc-label">
          Quel workflow / outil ça remplace ?
        </label>
        <p className="calc-help">Ex : « 3 fichiers Excel partagés pour la gestion des stocks », « Notion + emails pour le suivi RH ».</p>
        <input
          id="workflowReplaced"
          type="text"
          value={a.workflowReplaced}
          onChange={(e) => set("workflowReplaced", e.target.value)}
          className="calc-input"
          maxLength={200}
          placeholder="3 Excel + 1 Trello pour la logistique"
        />
      </div>
      <div className="calc-field">
        <label className="calc-label">Intégrations ERP / SI à prévoir</label>
        <Checklist<ErpId>
          options={ERP_OPTIONS}
          selected={a.erpIntegrations}
          onChange={(v) => set("erpIntegrations", v)}
        />
      </div>
      <div className="calc-field calc-yesno-stack">
        <YesNoRow label="Reporting / dashboards inclus ?" value={a.reporting} onChange={(v) => set("reporting", v)} />
      </div>
    </>
  );
}

// =====================================================================
// Module 4 — E-commerce
// =====================================================================

export function EcommerceModule({
  answers,
  onChange,
}: {
  answers: EcommerceAnswers | undefined;
  onChange: (next: EcommerceAnswers) => void;
}) {
  const a: EcommerceAnswers = answers || {
    skuCount: "medium",
    ordersPerYear: "medium",
    mobileApp: false,
    erpIntegration: false,
    multiCurrency: false,
  };
  function set<K extends keyof EcommerceAnswers>(k: K, v: EcommerceAnswers[K]) {
    onChange({ ...a, [k]: v });
  }
  return (
    <>
      <div className="calc-field">
        <label className="calc-label">Catalogue (nombre de SKU)</label>
        <RadioGroup
          value={a.skuCount}
          onChange={(v) => set("skuCount", v)}
          options={[
            { id: "small", label: "< 50", sub: "Marque artisanale" },
            { id: "medium", label: "50–500", sub: "DTC standard" },
            { id: "large", label: "500–5 000", sub: "Catalogue large" },
            { id: "xlarge", label: "5 000+", sub: "Marketplace" },
          ]}
          columns={2}
        />
      </div>
      <div className="calc-field">
        <label className="calc-label">Volume cible de commandes / an</label>
        <RadioGroup
          value={a.ordersPerYear}
          onChange={(v) => set("ordersPerYear", v)}
          options={[
            { id: "small", label: "< 500", sub: "Démarrage" },
            { id: "medium", label: "500–5k", sub: "PME e-com" },
            { id: "large", label: "5k–50k", sub: "Volume DTC" },
            { id: "xlarge", label: "50k+", sub: "Mass-market" },
          ]}
          columns={2}
        />
      </div>
      <div className="calc-field calc-yesno-stack">
        <YesNoRow label="App mobile compagnon (iOS/Android) ?" value={a.mobileApp} onChange={(v) => set("mobileApp", v)} />
        <YesNoRow label="Intégration ERP / logistique ?" value={a.erpIntegration} onChange={(v) => set("erpIntegration", v)} />
        <YesNoRow label="Multi-devise / international ?" value={a.multiCurrency} onChange={(v) => set("multiCurrency", v)} />
      </div>
    </>
  );
}

// =====================================================================
// Module 5 — App mobile
// =====================================================================

export function AppMobileModule({
  answers,
  onChange,
}: {
  answers: AppMobileAnswers | undefined;
  onChange: (next: AppMobileAnswers) => void;
}) {
  const a: AppMobileAnswers = answers || {
    platforms: "both",
    features: [],
    isCompanion: true,
    estimatedScreens: 8,
  };
  function set<K extends keyof AppMobileAnswers>(k: K, v: AppMobileAnswers[K]) {
    onChange({ ...a, [k]: v });
  }
  return (
    <>
      <div className="calc-field">
        <label className="calc-label">Plateformes cibles</label>
        <RadioGroup
          value={a.platforms}
          onChange={(v) => set("platforms", v)}
          options={[
            { id: "ios", label: "iOS uniquement" },
            { id: "android", label: "Android uniquement" },
            { id: "both", label: "iOS + Android (React Native)", sub: "Recommandé : 1 codebase, 2 stores" },
          ]}
          columns={2}
        />
      </div>
      <div className="calc-field">
        <label className="calc-label">L&apos;app est…</label>
        <RadioGroup
          value={a.isCompanion ? "yes" : "no"}
          onChange={(v) => set("isCompanion", v === "yes")}
          options={[
            { id: "yes", label: "Compagnon d'un SaaS web", sub: "+10–20 k€ sur le forfait SaaS" },
            { id: "no", label: "App autonome", sub: "Forfait dédié 30–60 k€" },
          ]}
          columns={2}
        />
      </div>
      <div className="calc-field">
        <label className="calc-label">
          Nombre d&apos;écrans estimé : <b>{a.estimatedScreens}</b>
        </label>
        <input
          type="range"
          min={3}
          max={30}
          step={1}
          value={a.estimatedScreens}
          onChange={(e) => set("estimatedScreens", Number(e.target.value))}
          className="calc-range"
        />
        <div className="calc-range-marks">
          <span>3</span><span>8</span><span>15</span><span>22</span><span>30</span>
        </div>
      </div>
      <div className="calc-field">
        <label className="calc-label">Fonctions natives requises</label>
        <Checklist<AppMobileFeatureId>
          options={APP_MOBILE_FEATURES}
          selected={a.features}
          onChange={(v) => set("features", v)}
        />
      </div>
    </>
  );
}

// =====================================================================
// Module 6 — Refonte
// =====================================================================

export function RefonteModule({
  answers,
  onChange,
}: {
  answers: RefonteAnswers | undefined;
  onChange: (next: RefonteAnswers) => void;
}) {
  const a: RefonteAnswers = answers || {
    currentStack: "wordpress",
    currentVolume: "medium",
    dataMigration: true,
    scope: "full",
  };
  function set<K extends keyof RefonteAnswers>(k: K, v: RefonteAnswers[K]) {
    onChange({ ...a, [k]: v });
  }
  return (
    <>
      <div className="calc-field">
        <label className="calc-label">Stack actuelle (à remplacer ou migrer)</label>
        <RadioGroup
          value={a.currentStack}
          onChange={(v) => set("currentStack", v)}
          options={[
            { id: "wordpress", label: "WordPress" },
            { id: "php-old", label: "PHP legacy / Symfony 4" },
            { id: "node", label: "Node.js / Next ancien" },
            { id: "dotnet", label: ".NET", sub: "⚠ on n'est pas spécialiste" },
            { id: "python", label: "Python / Django", sub: "⚠ on n'est pas spécialiste" },
            { id: "java", label: "Java / Spring", sub: "⚠ on n'est pas spécialiste" },
            { id: "ruby", label: "Ruby on Rails", sub: "⚠ on n'est pas spécialiste" },
            { id: "other", label: "Autre" },
          ]}
          columns={2}
        />
      </div>
      <div className="calc-field">
        <label className="calc-label">Volume utilisateurs actuels</label>
        <RadioGroup
          value={a.currentVolume}
          onChange={(v) => set("currentVolume", v)}
          options={[
            { id: "small", label: "< 100", sub: "Faible volume" },
            { id: "medium", label: "100–1k", sub: "Volume PME" },
            { id: "large", label: "1k–10k", sub: "Plateforme établie" },
            { id: "huge", label: "10k+", sub: "Volume critique" },
          ]}
          columns={2}
        />
      </div>
      <div className="calc-field">
        <label className="calc-label">Périmètre de la refonte</label>
        <RadioGroup
          value={a.scope}
          onChange={(v) => set("scope", v)}
          options={[
            { id: "full", label: "Refonte complète", sub: "Nouvelle base from scratch" },
            { id: "partial", label: "Refonte partielle", sub: "Migration progressive module par module" },
          ]}
          columns={2}
        />
      </div>
      <div className="calc-field calc-yesno-stack">
        <YesNoRow
          label="Migration de la base de données existante ?"
          value={a.dataMigration}
          onChange={(v) => set("dataMigration", v)}
        />
      </div>
    </>
  );
}

// =====================================================================
// Module 7 — SEO
// =====================================================================

export function SeoModule({
  answers,
  onChange,
}: {
  answers: SeoAnswers | undefined;
  onChange: (next: SeoAnswers) => void;
}) {
  const a: SeoAnswers = answers || {
    market: "fr",
    competition: "medium",
    keywordVolume: "medium",
    hasExistingSite: true,
  };
  function set<K extends keyof SeoAnswers>(k: K, v: SeoAnswers[K]) {
    onChange({ ...a, [k]: v });
  }
  return (
    <>
      <div className="calc-field">
        <label className="calc-label">Marché ciblé</label>
        <RadioGroup
          value={a.market}
          onChange={(v) => set("market", v)}
          options={[
            { id: "local", label: "Local / régional", sub: "Pages villes, Google Maps" },
            { id: "fr", label: "France", sub: "National FR" },
            { id: "eu", label: "Europe", sub: "Multi-pays EU" },
            { id: "intl", label: "International", sub: "Mondial multi-langues" },
          ]}
          columns={2}
        />
      </div>
      <div className="calc-field">
        <label className="calc-label">Niveau de concurrence sur ton secteur</label>
        <RadioGroup
          value={a.competition}
          onChange={(v) => set("competition", v)}
          options={[
            { id: "low", label: "Faible", sub: "Niche, peu de concurrents" },
            { id: "medium", label: "Modérée", sub: "Quelques gros acteurs" },
            { id: "high", label: "Forte", sub: "Marché saturé" },
          ]}
          columns={2}
        />
      </div>
      <div className="calc-field">
        <label className="calc-label">Volume de mots-clés visés</label>
        <RadioGroup
          value={a.keywordVolume}
          onChange={(v) => set("keywordVolume", v)}
          options={[
            { id: "small", label: "< 100", sub: "Niche précise" },
            { id: "medium", label: "100–500", sub: "Standard PME" },
            { id: "large", label: "500+", sub: "Stratégie ambitieuse" },
          ]}
          columns={2}
        />
      </div>
      <div className="calc-field calc-yesno-stack">
        <YesNoRow
          label="Site existant à optimiser (vs. à créer en parallèle) ?"
          value={a.hasExistingSite}
          onChange={(v) => set("hasExistingSite", v)}
        />
      </div>
    </>
  );
}

// =====================================================================
// Module 8 — Ads
// =====================================================================

export function AdsModule({
  answers,
  onChange,
}: {
  answers: AdsAnswers | undefined;
  onChange: (next: AdsAnswers) => void;
}) {
  const a: AdsAnswers = answers || {
    monthlyBudget: "medium",
    channels: [],
    hasAccountToAudit: true,
    objective: "conversions",
  };
  function set<K extends keyof AdsAnswers>(k: K, v: AdsAnswers[K]) {
    onChange({ ...a, [k]: v });
  }
  return (
    <>
      <div className="calc-field">
        <label className="calc-label">Budget media mensuel prévu (hors honoraires)</label>
        <p className="calc-help">⚠ Sous 5 k€/mois, on n&apos;est pas la bonne équipe — orientation freelance.</p>
        <RadioGroup
          value={a.monthlyBudget}
          onChange={(v) => set("monthlyBudget", v)}
          options={[
            { id: "small", label: "< 5 k€/mois", sub: "Trop petit pour notre stack" },
            { id: "medium", label: "5–15 k€/mois", sub: "Tier Starter" },
            { id: "large", label: "15–50 k€/mois", sub: "Tier Scale" },
            { id: "huge", label: "50 k€+/mois", sub: "Tier Premium" },
          ]}
          columns={2}
        />
      </div>
      <div className="calc-field">
        <label className="calc-label">Canaux à activer</label>
        <Checklist<AdsChannelId>
          options={ADS_CHANNELS}
          selected={a.channels}
          onChange={(v) => set("channels", v)}
        />
      </div>
      <div className="calc-field">
        <label className="calc-label">Objectif principal</label>
        <RadioGroup
          value={a.objective}
          onChange={(v) => set("objective", v)}
          options={[
            { id: "leads", label: "Génération de leads B2B" },
            { id: "conversions", label: "Conversions e-com / SaaS" },
            { id: "branding", label: "Notoriété de marque" },
            { id: "mixed", label: "Mixte" },
          ]}
          columns={2}
        />
      </div>
      <div className="calc-field calc-yesno-stack">
        <YesNoRow
          label="Compte publicitaire existant à auditer ?"
          value={a.hasAccountToAudit}
          onChange={(v) => set("hasAccountToAudit", v)}
        />
      </div>
    </>
  );
}

// =====================================================================
// Module 9 — Vidéo
// =====================================================================

export function VideoModule({
  answers,
  onChange,
}: {
  answers: VideoAnswers | undefined;
  onChange: (next: VideoAnswers) => void;
}) {
  const a: VideoAnswers = answers || {
    format: "youtube-founder",
    cadence: "monthly",
    shootingLocation: "chambery",
  };
  function set<K extends keyof VideoAnswers>(k: K, v: VideoAnswers[K]) {
    onChange({ ...a, [k]: v });
  }
  return (
    <>
      <div className="calc-field">
        <label className="calc-label">Format souhaité</label>
        <RadioGroup
          value={a.format}
          onChange={(v) => set("format", v)}
          options={[
            { id: "youtube-founder", label: "YouTube Founder", sub: "4 longues + 16 shorts/mois · 3 500 €/m" },
            { id: "motion-brand", label: "Motion & Brand", sub: "Hero + courts + natives · 4 500 €/m" },
            { id: "dtc-content", label: "Content DTC", sub: "Ads + UGC + product · 6 900 €/m" },
            { id: "studio-custom", label: "Studio sur-mesure", sub: "Tournage multi-jours · 15 k€+" },
            { id: "punctual", label: "Vidéo ponctuelle (test)", sub: "1 vidéo · 2 500 €" },
          ]}
          columns={2}
        />
      </div>
      <div className="calc-field">
        <label className="calc-label">Cadence</label>
        <RadioGroup
          value={a.cadence}
          onChange={(v) => set("cadence", v)}
          options={[
            { id: "punctual", label: "Ponctuel", sub: "Test, 1-2 vidéos" },
            { id: "monthly", label: "Mensuel", sub: "Retainer 6 mois min." },
          ]}
          columns={2}
        />
      </div>
      <div className="calc-field">
        <label className="calc-label">Localisation tournage</label>
        <RadioGroup
          value={a.shootingLocation}
          onChange={(v) => set("shootingLocation", v)}
          options={[
            { id: "chambery", label: "Chambéry (notre studio)", sub: "Inclus" },
            { id: "lyon", label: "Lyon" },
            { id: "paris", label: "Paris", sub: "+800 €/jour" },
            { id: "remote", label: "Distanciel uniquement", sub: "Vous tournez, on monte" },
            { id: "other", label: "Autre" },
          ]}
          columns={2}
        />
      </div>
    </>
  );
}

// =====================================================================
// Module 10 — Maintenance
// =====================================================================

export function MaintenanceModule({
  answers,
  onChange,
}: {
  answers: MaintenanceAnswers | undefined;
  onChange: (next: MaintenanceAnswers) => void;
}) {
  const a: MaintenanceAnswers = answers || {
    stackToMaintain: "laravel",
    businessCriticality: "medium",
    slaNeeded: "99.5",
    isExisting: false,
  };
  function set<K extends keyof MaintenanceAnswers>(k: K, v: MaintenanceAnswers[K]) {
    onChange({ ...a, [k]: v });
  }
  return (
    <>
      <div className="calc-field">
        <label className="calc-label">Stack à maintenir</label>
        <RadioGroup
          value={a.stackToMaintain}
          onChange={(v) => set("stackToMaintain", v)}
          options={[
            { id: "laravel", label: "Laravel" },
            { id: "react-next", label: "React / Next.js" },
            { id: "wordpress", label: "WordPress" },
            { id: "shopify", label: "Shopify / Plus" },
            { id: "other", label: "Autre", sub: "Audit préalable nécessaire" },
          ]}
          columns={2}
        />
      </div>
      <div className="calc-field">
        <label className="calc-label">Criticité business</label>
        <RadioGroup
          value={a.businessCriticality}
          onChange={(v) => set("businessCriticality", v)}
          options={[
            { id: "low", label: "Faible", sub: "Site vitrine, outil non critique" },
            { id: "medium", label: "Moyenne", sub: "SaaS B2B, outil interne clé" },
            { id: "critical", label: "Critique", sub: "Revenu direct, 24/7" },
          ]}
          columns={2}
        />
      </div>
      <div className="calc-field">
        <label className="calc-label">SLA souhaité</label>
        <RadioGroup
          value={a.slaNeeded}
          onChange={(v) => set("slaNeeded", v)}
          options={[
            { id: "99", label: "99 %", sub: "~3 j d'indispo/an" },
            { id: "99.5", label: "99,5 %", sub: "Essentiel · ~44 h/an" },
            { id: "99.9", label: "99,9 %", sub: "Scale · ~9 h/an" },
            { id: "99.95", label: "99,95 %", sub: "Premium · ~4 h/an" },
          ]}
          columns={2}
        />
      </div>
      <div className="calc-field calc-yesno-stack">
        <YesNoRow
          label="Code à reprendre (que vous n'avez pas écrit) ?"
          value={a.isExisting}
          onChange={(v) => set("isExisting", v)}
        />
      </div>
    </>
  );
}

// =====================================================================
// Module 11 — Sécurité / RGPD
// =====================================================================

export function SecuriteRgpdModule({
  answers,
  onChange,
}: {
  answers: SecuriteRgpdAnswers | undefined;
  onChange: (next: SecuriteRgpdAnswers) => void;
}) {
  const a: SecuriteRgpdAnswers = answers || {
    teamSize: "small",
    aiSystems: "none",
    compliance: [],
    needs: [],
  };
  function set<K extends keyof SecuriteRgpdAnswers>(k: K, v: SecuriteRgpdAnswers[K]) {
    onChange({ ...a, [k]: v });
  }
  return (
    <>
      <div className="calc-field">
        <label className="calc-label">Taille de votre équipe</label>
        <RadioGroup
          value={a.teamSize}
          onChange={(v) => set("teamSize", v)}
          options={[
            { id: "small", label: "10–100 sal.", sub: "DPO Starter" },
            { id: "medium", label: "100–500 sal.", sub: "DPO Scale" },
            { id: "large", label: "500+ sal.", sub: "Sur-mesure" },
          ]}
          columns={2}
        />
      </div>
      <div className="calc-field">
        <label className="calc-label">Systèmes IA en production</label>
        <RadioGroup
          value={a.aiSystems}
          onChange={(v) => set("aiSystems", v)}
          options={[
            { id: "none", label: "Aucun", sub: "Pas de problématique IA Act" },
            { id: "1-3", label: "1 à 3", sub: "Évaluation par système" },
            { id: "4plus", label: "4+", sub: "Audit IA Act dédié" },
          ]}
          columns={2}
        />
      </div>
      <div className="calc-field">
        <label className="calc-label">Compliance visée</label>
        <Checklist<ComplianceId>
          options={COMPLIANCE_OPTIONS}
          selected={a.compliance}
          onChange={(v) => set("compliance", v)}
        />
      </div>
      <div className="calc-field">
        <label className="calc-label">Besoins (cocher ce qui s&apos;applique)</label>
        <Checklist<SecuriteNeedId>
          options={SECURITE_NEEDS}
          selected={a.needs}
          onChange={(v) => set("needs", v)}
        />
      </div>
    </>
  );
}

// =====================================================================
// Module 12 — Audit technique
// =====================================================================

export function AuditTechniqueModule({
  answers,
  onChange,
}: {
  answers: AuditTechniqueAnswers | undefined;
  onChange: (next: AuditTechniqueAnswers) => void;
}) {
  const a: AuditTechniqueAnswers = answers || {
    stackToAudit: "laravel",
    depth: "5-days",
    decisionTarget: "maintenance",
  };
  function set<K extends keyof AuditTechniqueAnswers>(k: K, v: AuditTechniqueAnswers[K]) {
    onChange({ ...a, [k]: v });
  }
  return (
    <>
      <div className="calc-field">
        <label className="calc-label">Stack à auditer</label>
        <RadioGroup
          value={a.stackToAudit}
          onChange={(v) => set("stackToAudit", v)}
          options={[
            { id: "laravel", label: "Laravel" },
            { id: "react-next", label: "React / Next.js" },
            { id: "node", label: "Node.js" },
            { id: "python", label: "Python / Django" },
            { id: "java", label: "Java / Spring" },
            { id: "dotnet", label: ".NET" },
            { id: "wordpress", label: "WordPress" },
            { id: "other", label: "Autre" },
          ]}
          columns={2}
        />
      </div>
      <div className="calc-field">
        <label className="calc-label">Profondeur de l&apos;audit</label>
        <RadioGroup
          value={a.depth}
          onChange={(v) => set("depth", v)}
          options={[
            { id: "3-days", label: "3 jours", sub: "6–9 k€ · diagnostic ciblé" },
            { id: "5-days", label: "5 jours complet", sub: "10–15 k€ · plan remédiation 12 mois" },
          ]}
          columns={2}
        />
      </div>
      <div className="calc-field">
        <label className="calc-label">Décision visée à l&apos;issue de l&apos;audit</label>
        <RadioGroup
          value={a.decisionTarget}
          onChange={(v) => set("decisionTarget", v)}
          options={[
            { id: "refonte", label: "Décider d'une refonte" },
            { id: "maintenance", label: "Engager une maintenance" },
            { id: "security", label: "Plan de sécurisation" },
            { id: "other", label: "Autre / pas décidé" },
          ]}
          columns={2}
        />
      </div>
    </>
  );
}

// =====================================================================
// Module dispatcher + validity check
// =====================================================================

export function ServiceModule({
  serviceId,
  answers,
  onChange,
}: {
  serviceId: ServiceId;
  answers: unknown;
  onChange: (next: unknown) => void;
}) {
  switch (serviceId) {
    case "site-vitrine":
      return <SiteVitrineModule answers={answers as SiteVitrineAnswers | undefined} onChange={onChange as (v: SiteVitrineAnswers) => void} />;
    case "saas":
      return <SaasModule answers={answers as SaasAnswers | undefined} onChange={onChange as (v: SaasAnswers) => void} />;
    case "outil-interne":
      return <OutilInterneModule answers={answers as OutilInterneAnswers | undefined} onChange={onChange as (v: OutilInterneAnswers) => void} />;
    case "ecommerce":
      return <EcommerceModule answers={answers as EcommerceAnswers | undefined} onChange={onChange as (v: EcommerceAnswers) => void} />;
    case "app-mobile":
      return <AppMobileModule answers={answers as AppMobileAnswers | undefined} onChange={onChange as (v: AppMobileAnswers) => void} />;
    case "refonte":
      return <RefonteModule answers={answers as RefonteAnswers | undefined} onChange={onChange as (v: RefonteAnswers) => void} />;
    case "seo":
      return <SeoModule answers={answers as SeoAnswers | undefined} onChange={onChange as (v: SeoAnswers) => void} />;
    case "ads":
      return <AdsModule answers={answers as AdsAnswers | undefined} onChange={onChange as (v: AdsAnswers) => void} />;
    case "video":
      return <VideoModule answers={answers as VideoAnswers | undefined} onChange={onChange as (v: VideoAnswers) => void} />;
    case "maintenance":
      return <MaintenanceModule answers={answers as MaintenanceAnswers | undefined} onChange={onChange as (v: MaintenanceAnswers) => void} />;
    case "securite-rgpd":
      return <SecuriteRgpdModule answers={answers as SecuriteRgpdAnswers | undefined} onChange={onChange as (v: SecuriteRgpdAnswers) => void} />;
    case "audit-technique":
      return <AuditTechniqueModule answers={answers as AuditTechniqueAnswers | undefined} onChange={onChange as (v: AuditTechniqueAnswers) => void} />;
  }
}

/**
 * Per-service validity check. The wizard uses this to gate the "Next"
 * button when on a service module step. Most modules accept defaults so
 * they're valid as soon as the user lands on them, but some require
 * concrete input (ex : outil-interne workflow text > 5 chars).
 */
export function isModuleValid(serviceId: ServiceId, answers: unknown): boolean {
  if (!answers) {
    // outil-interne and refonte require explicit input → invalid by default
    if (serviceId === "outil-interne") return false;
    return true; // others have sensible defaults
  }
  if (serviceId === "outil-interne") {
    const a = answers as OutilInterneAnswers;
    return Boolean(a.workflowReplaced && a.workflowReplaced.trim().length >= 3);
  }
  return true;
}
