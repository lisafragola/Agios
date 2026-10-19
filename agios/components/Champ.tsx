// Marque visiblement un champ que tu dois compléter dans les pages légales.
export default function Champ({ children }: { children: string }) {
  return <mark className="bg-yellow-200 px-1 rounded">[{children} — À COMPLÉTER]</mark>;
}
