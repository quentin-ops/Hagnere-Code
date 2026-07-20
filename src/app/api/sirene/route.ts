import { NextRequest, NextResponse } from "next/server";
import { getClientIp } from "@/lib/rate-limit";
import { checkServiceRateLimit } from "@/lib/ai-rate-limit";
import { log } from "@/lib/logger";

export const runtime = "nodejs";

interface SearchResult {
  siren: string;
  nom_complet: string;
  nom_raison_sociale?: string;
  siege?: {
    siret: string;
  };
}

interface SearchResponse {
  results: SearchResult[];
  total_results: number;
}

export async function GET(request: NextRequest) {
  // 0. Rate limit persistant avant l'appel externe. Il reste cohérent lorsque
  // Vercel répartit les requêtes entre plusieurs instances.
  const ip = getClientIp(request);
  let rate;
  try {
    rate = await checkServiceRateLimit(
      ip,
      null,
      "sirene",
      request.headers.get("user-agent"),
    );
  } catch (err) {
    log.error("sirene_rate_limit_unavailable", { err: err as Error });
    return NextResponse.json(
      { error: "La recherche d'entreprise est temporairement indisponible." },
      { status: 503, headers: { "Retry-After": "60" } },
    );
  }
  if (!rate.allowed) {
    return NextResponse.json(
      {
        error: `Trop de recherches SIREN. Réessayez dans ${Math.ceil(
          rate.retryAfterSec / 60,
        )} minutes.`,
      },
      {
        status: 429,
        headers: { "Retry-After": String(rate.retryAfterSec) },
      },
    );
  }

  const searchParams = request.nextUrl.searchParams;
  const siren = searchParams.get("siren");

  if (!siren) {
    return NextResponse.json(
      { error: "Le numéro SIREN est requis" },
      { status: 400 }
    );
  }

  // Validate SIREN format (9 digits)
  const sirenClean = siren.replace(/\s/g, "");
  if (!/^\d{9}$/.test(sirenClean)) {
    return NextResponse.json(
      { error: "Le numéro SIREN doit contenir exactement 9 chiffres" },
      { status: 400 }
    );
  }

  try {
    // Use the newer, more reliable API
    const response = await fetch(
      `https://recherche-entreprises.api.gouv.fr/search?q=${sirenClean}&page=1&per_page=1`,
      {
        headers: {
          Accept: "application/json",
        },
        signal: AbortSignal.timeout(10000), // 10 second timeout
      }
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data: SearchResponse = await response.json();

    if (data.total_results === 0 || !data.results[0]) {
      return NextResponse.json(
        { error: "Aucune entreprise trouvée pour ce numéro SIREN" },
        { status: 404 }
      );
    }

    const company = data.results[0];

    // Verify the SIREN matches exactly
    if (company.siren !== sirenClean) {
      return NextResponse.json(
        { error: "Aucune entreprise trouvée pour ce numéro SIREN" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      siren: company.siren,
      companyName: company.nom_complet || company.nom_raison_sociale || "Nom non disponible",
    });
  } catch (err) {
    log.error("sirene_api_error", { err: err as Error, sirenProvided: true });
    return NextResponse.json(
      { error: "Erreur lors de la recherche. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
