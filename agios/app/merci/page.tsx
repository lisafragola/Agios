import Stripe from "stripe";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Merci({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  const { session_id } = await searchParams;
  let email: string | null = null;
  let paye = false;

  const key = process.env.STRIPE_SECRET_KEY;
  if (key && session_id) {
    try {
      const s = await new Stripe(key).checkout.sessions.retrieve(session_id);
      paye = s.payment_status === "paid";
      email = s.customer_details?.email ?? null;
    } catch {
      paye = false;
    }
  }

  return (
    <main className="mx-auto max-w-2xl px-5 py-16">
      {paye ? (
        <>
          <h1 className="font-titre text-4xl font-semibold text-sapin">Merci, c’est confirmé.</h1>
          <p className="mt-4 text-lg leading-relaxed">
            Ton paiement est bien reçu{email ? <> et un reçu part à <strong>{email}</strong></> : null}. Ton accès
            anticipé t’est envoyé par email dès l’ouverture de ton espace.
          </p>
        </>
      ) : (
        <>
          <h1 className="font-titre text-4xl font-semibold text-sapin">On n’a pas pu confirmer ton paiement.</h1>
          <p className="mt-4 text-lg leading-relaxed">Si tu as été débité·e, écris-nous : on règle ça aussitôt.</p>
        </>
      )}
      <Link href="/" className="mt-8 inline-block rounded-xl bg-brique px-6 py-3 font-semibold text-white">Retour à l’accueil</Link>
    </main>
  );
}
