import Link from "next/link";
export default function NotFound() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-20">
      <p className="font-titre text-6xl font-semibold text-brique">404</p>
      <h1 className="font-titre text-3xl font-semibold text-sapin mt-2">Cette page n’existe pas.</h1>
      <Link href="/" className="mt-8 inline-block rounded-xl bg-brique px-6 py-3 font-semibold text-white">Retour à l’accueil</Link>
    </main>
  );
}
