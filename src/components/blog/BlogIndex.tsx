"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { useDesignInteractive } from "@/components/design-shared/useDesignInteractive";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import { PLANNED_ARTICLES } from "./articles";
import "./blog.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/site-footer.css";

type NewsletterStatus =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

export function BlogIndex() {
  const rootRef = useRef<HTMLDivElement>(null);
  useDesignInteractive(rootRef);

  const [status, setStatus] = useState<NewsletterStatus>({ kind: "idle" });

  async function onSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setStatus({ kind: "error", message: "Adresse email invalide." });
      return;
    }
    setStatus({ kind: "submitting" });
    // Reuse the inquiry endpoint with a blog-subscription marker
    try {
      const res = await fetch("/api/project-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: "Newsletter",
          lastName: "Blog",
          email,
          company: "— abonnement blog",
          message:
            "Demande d'inscription à la newsletter Hagnéré Code (premiers articles du blog).",
        }),
      });
      if (!res.ok) throw new Error("fail");
      setStatus({ kind: "success" });
      form.reset();
    } catch {
      setStatus({
        kind: "error",
        message:
          "Enregistrement impossible pour le moment. Réessayez dans un instant.",
      });
    }
  }

  return (
    <div ref={rootRef} className="hc-design blog-root">
      {/* Nav */}
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="brand">
            <div className="brand-mark">HC</div>
            <div className="brand-name">
              <b>Hagnéré</b> <span>Code</span>
            </div>
          </Link>
          <div className="nav-links">
            <Link href="/#services">Services</Link>
            <Link href="/methode">Méthode</Link>
            <Link href="/#realisations">Réalisations</Link>
            <Link href="/equipe">Équipe</Link>
            <Link href="/tarifs">Tarifs</Link>
            <Link href="/blog" className="active">
              Blog
            </Link>
          </div>
          <div className="nav-cta">
            <Link href="/#contact" className="btn btn-ghost">
              Prendre RDV
            </Link>
            <Link href="/#contact" className="btn btn-primary">
              Démarrer un projet
              <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bl-hero">
        <div className="wrap bl-hero-inner">
          <div className="bl-hero-pill">
            <span className="dot" /> Lancement éditorial · Mai 2026
          </div>
          <h1>
            Le blog <span className="bl-hero-accent">Hagnéré Code</span>.<br />
            Sortie dans quelques semaines.
          </h1>
          <p>
            Un blog technique et business pour les dirigeants et équipes tech
            qui construisent des SaaS et outils métier sérieux. Deux articles
            par mois, zéro filler — que du retour terrain publié par l'équipe.
          </p>

          <form className="bl-newsletter" onSubmit={onSubscribe}>
            <input
              type="email"
              name="email"
              placeholder="votre@email.pro"
              required
              aria-label="Adresse email pour la newsletter"
            />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={status.kind === "submitting"}
            >
              {status.kind === "submitting" ? "Envoi…" : "Être prévenu du lancement"}
              <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </form>

          {status.kind === "success" && (
            <div className="bl-alert bl-alert-ok">
              ✓ Inscription confirmée. Vous recevrez le premier article le jour J.
            </div>
          )}
          {status.kind === "error" && (
            <div className="bl-alert bl-alert-err">✕ {status.message}</div>
          )}

          <div className="bl-hero-meta">
            <span>✓ 2 articles / mois</span>
            <span className="sep" />
            <span>✓ Désabonnement 1 clic</span>
            <span className="sep" />
            <span>✓ Pas de newsletter sponsorisée</span>
          </div>
        </div>
      </section>

      {/* Articles planifiés */}
      <section className="bl-planned">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="left">
              <div className="eyebrow">— Planning éditorial</div>
              <h2>
                Les {PLANNED_ARTICLES.length} premiers articles<br />
                sont déjà cadrés.
              </h2>
            </div>
            <div className="right">
              Voici ce sur quoi nous travaillons en priorité. Une entrée = un
              sujet que nous avons vécu en vrai sur un projet client récent, et
              que nous voulons documenter proprement pour d'autres.
            </div>
          </div>

          <div className="bl-grid">
            {PLANNED_ARTICLES.map((a, i) => (
              <article
                key={a.slug}
                className="bl-card reveal"
                style={{ ["--cover-accent" as string]: a.accent }}
              >
                <div className={`bl-cover bl-cover-${a.coverKind}`} aria-hidden="true">
                  <div className="bl-cover-num">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="bl-cover-badge">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    À venir · {a.plannedDate}
                  </div>
                </div>
                <div className="bl-card-body">
                  <div className="bl-card-cat">{a.category}</div>
                  <h3>{a.title}</h3>
                  <p>{a.excerpt}</p>
                  <div className="bl-card-foot">
                    <div className="bl-card-author">
                      <div className="bl-card-avatar">
                        {a.author
                          .split(" ")
                          .map((s) => s[0])
                          .join("")
                          .slice(0, 2)}
                      </div>
                      <div>
                        <div className="bl-card-name">{a.author}</div>
                        <div className="bl-card-read">{a.readTime} de lecture estimée</div>
                      </div>
                    </div>
                    <div className="bl-card-status">Draft en cours</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Rubriques */}
      <section className="bl-topics">
        <div className="wrap">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow">— Rubriques</div>
              <h2>Ce qu'on va couvrir.</h2>
            </div>
            <div className="right">
              Pas de généralités. Les sujets d'ingénierie pointus, les décisions
              business difficiles, et les retours honnêtes sur nos ratés.
            </div>
          </div>
          <div className="bl-topics-grid">
            <div className="bl-topic">
              <div className="bl-topic-ic">🧠</div>
              <div className="bl-topic-title">Méthode &amp; outillage</div>
              <div className="bl-topic-body">
                Claude Code, agents IA, workflows internes, ce qu'on a arrêté
                d'utiliser.
              </div>
            </div>
            <div className="bl-topic">
              <div className="bl-topic-ic">⚙️</div>
              <div className="bl-topic-title">Stack technique</div>
              <div className="bl-topic-body">
                Laravel, Livewire, Tailwind, intégrations, montée en charge,
                tests.
              </div>
            </div>
            <div className="bl-topic">
              <div className="bl-topic-ic">📊</div>
              <div className="bl-topic-title">Fiscalité &amp; compta</div>
              <div className="bl-topic-body">
                EDI DGFiP, amortissements, liasses, régimes fiscaux. Retour
                terrain.
              </div>
            </div>
            <div className="bl-topic">
              <div className="bl-topic-ic">💼</div>
              <div className="bl-topic-title">Business &amp; contrats</div>
              <div className="bl-topic-body">
                Forfait, régie, propriété du code, garanties, pénalités —
                concrètement.
              </div>
            </div>
            <div className="bl-topic">
              <div className="bl-topic-ic">🔒</div>
              <div className="bl-topic-title">Sécurité &amp; RGPD</div>
              <div className="bl-topic-body">
                Audits OWASP, conformité RGPD, hébergement France, DPO, DPA.
              </div>
            </div>
            <div className="bl-topic">
              <div className="bl-topic-ic">🎯</div>
              <div className="bl-topic-title">Acquisition &amp; SEO</div>
              <div className="bl-topic-body">
                Ce qui fait vraiment bouger les leads B2B pour une PME ou un
                SaaS.
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
