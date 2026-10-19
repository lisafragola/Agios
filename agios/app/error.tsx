"use client";
import Link from "next/link";
export default function Erreur({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="mx-auto max-w-2xl px-5 py-20">
      <h1 className="font-titre text-3xl font-semibold text-sapin">Un souci de notre côté.</h1>
      <p className="mt-3 text-lg">Rien n’a été perdu. Réessaie, ou reviens à l’accueil.</p>
      <div className="mt-8 flex gap-3">
        <button onClick={reset} className="rounded-xl bg-brique px-6 py-3 font-semibold text-white">Réessayer</button>
        <Link href="/" className="rounded-xl border-2 border-sapin px-6 py-3 font-semibold text-sapin">Accueil</Link>
      </div>
    </main>
  );
}
