import Link from "next/link";
export default function PageLegale({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-2xl px-5 py-10">
      <Link href="/" className="text-sm text-sourdine underline underline-offset-4">← Retour à l’accueil</Link>
      <h1 className="font-titre text-3xl font-semibold mt-6 mb-6">{titre}</h1>
      <div className="space-y-4 leading-relaxed [&_h2]:font-titre [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-8">
        {children}
      </div>
    </main>
  );
}
