import type { MetadataRoute } from "next";
import { isSearchIndexingEnabled } from "@/lib/search-indexing";
import { SITE_URL } from "@/lib/seo";

/**
 * Robots d'assistants et de moteurs génératifs, déclarés explicitement.
 *
 * Techniquement, `User-Agent: *` avec `Allow: /` autorise déjà ces robots :
 * ces groupes ne changent donc rien au comportement actuel. Ils servent deux
 * objectifs précis.
 *
 * 1. Rendre la décision explicite et relisible. Un groupe absent se lit comme
 *    un oubli ; un groupe présent se lit comme un choix.
 * 2. Préparer la distinction entraînement / recherche. Un robot qui possède
 *    son propre groupe ignore entièrement le groupe `*` : restreindre un
 *    collecteur d'entraînement plus tard ne demandera qu'un changement de
 *    valeur ici, sans toucher aux règles générales ni risquer de fermer par
 *    ricochet les robots de citation.
 *
 * Aucune de ces règles n'est opposable : elles reposent sur le respect
 * volontaire du protocole. Un blocage réel demanderait une règle serveur ou
 * un service de gestion de bots.
 */
const AI_SEARCH_AGENTS = [
  // Robots de recherche et de citation : ils lisent une page pour répondre à
  // une question posée maintenant, et citent généralement leur source.
  "OAI-SearchBot", // ChatGPT Search — OpenAI
  "ChatGPT-User", // navigation déclenchée par un utilisateur — OpenAI
  "Claude-SearchBot", // recherche — Anthropic
  "Claude-User", // navigation déclenchée par un utilisateur — Anthropic
  "PerplexityBot", // index de Perplexity
  "Perplexity-User", // navigation déclenchée par un utilisateur — Perplexity
  "Applebot", // Siri et Spotlight
  "MistralAI-User", // navigation déclenchée par un utilisateur — Mistral
] as const;

const AI_TRAINING_AGENTS = [
  // Collecteurs orientés entraînement de modèles. Autorisés aujourd'hui :
  // la visibilité dans les réponses génératives prime sur la rétention du
  // contenu, et le site ne publie aucune donnée propriétaire ou payante.
  "GPTBot", // OpenAI
  "ClaudeBot", // Anthropic
  "Google-Extended", // Gemini et Vertex AI (n'affecte pas Googlebot)
  "Meta-ExternalAgent", // Meta
  "Applebot-Extended", // Apple Intelligence
  "CCBot", // Common Crawl
  "Amazonbot", // Amazon
  "Bytespider", // ByteDance
  "Diffbot",
  "cohere-ai",
] as const;

const DISALLOWED_PATHS = ["/api/"];

export default function robots(): MetadataRoute.Robots {
  const isProd = isSearchIndexingEnabled(
    process.env.NEXT_PUBLIC_ENV,
    process.env.VERCEL_ENV,
  );

  if (!isProd) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Ne pas bloquer /_next/ : Google a besoin du CSS/JS et de
        // /_next/image pour rendre et indexer correctement les pages.
        disallow: DISALLOWED_PATHS,
      },
      {
        userAgent: [...AI_SEARCH_AGENTS],
        allow: "/",
        disallow: DISALLOWED_PATHS,
      },
      {
        userAgent: [...AI_TRAINING_AGENTS],
        allow: "/",
        disallow: DISALLOWED_PATHS,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
