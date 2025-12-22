import { NextRequest, NextResponse } from "next/server";
import { getDb, contactIndividual } from "@/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    // Validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis" },
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
    await db.insert(contactIndividual).values({
      firstName,
      lastName,
      email,
      phone: phone || null,
      message,
    });

    return NextResponse.json(
      { success: true, message: "Message envoyé avec succès" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact individual submission error:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
