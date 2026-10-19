import Stripe from "stripe";

export const runtime = "nodejs";

// Stripe appelle cette adresse après chaque paiement. La signature prouve que l'appel vient bien de Stripe.
export async function POST(req: Request) {
  const key = process.env.STRIPE_SECRET_KEY;
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = req.headers.get("stripe-signature");
  if (!key || !secret || !signature) return new Response("Configuration manquante", { status: 400 });

  const stripe = new Stripe(key);
  const body = await req.text(); // corps brut, indispensable pour vérifier la signature

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, secret);
  } catch {
    return new Response("Signature invalide", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const s = event.data.object as Stripe.Checkout.Session;
    if (s.payment_status === "paid") {
      // Paiement confirmé côté serveur. Visible dans Vercel > Logs.
      console.log("PAIEMENT_CONFIRME", s.id, s.customer_details?.email);
      // Étape suivante : envoyer l'email d'accès ici.
    }
  }
  return Response.json({ received: true });
}
