import { NextRequest, NextResponse } from "next/server";

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
  } catch (error) {
    console.error("SIRENE API error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la recherche. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
