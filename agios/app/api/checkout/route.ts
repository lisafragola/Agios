import Stripe from "stripe";
import { NextResponse } from "next/server";
import { PRIX_CENTIMES, SITE_URL } from "@/lib/config";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const key = process.env.STRIPE_SECRET_KEY;
  const origin = process.env.NEXT_PUBLIC_SITE_URL ?? new URL(req.url).origin ?? SITE_URL;
  if (!key) return NextResponse.redirect(`${origin}/?paiement=config#offre`, 303);

  try {
    const stripe = new Stripe(key);
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      locale: "fr",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "eur",
            unit_amount: PRIX_CENTIMES,
            recurring: { interval: "month" },
            product_data: { name: "Agios — abonnement mensuel" },
          },
        },
      ],
      success_url: `${origin}/merci?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?paiement=annule#offre`,
    });
    if (!session.url) throw new Error("Pas d’URL de paiement");
    return NextResponse.redirect(session.url, 303);
  } catch (e) {
    console.error("Erreur création session Stripe", e);
    return NextResponse.redirect(`${origin}/?paiement=echec#offre`, 303);
  }
}
