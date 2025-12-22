import { NextRequest, NextResponse } from "next/server";
import { getDb, contactCompany } from "@/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { siren, companyName, email, phone, message } = body;

    // Validation
    if (!siren || !companyName || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 }
      );
    }

    // SIREN validation (9 digits)
    const sirenClean = siren.replace(/\s/g, "");
    if (!/^\d{9}$/.test(sirenClean)) {
      return NextResponse.json(
        { error: "Le numéro SIREN doit contenir exactement 9 chiffres" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide" },
        { status: 400 }
      );
    }

    const db = getDb();
    await db.insert(contactCompany).values({
      siren: sirenClean,
      companyName,
      email,
      phone: phone || null,
      message,
    });

    return NextResponse.json(
      { success: true, message: "Message envoyé avec succès" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact company submission error:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
