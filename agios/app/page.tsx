import { PRIX_EUR, PRIX_PAR_JOUR, GARANTIE_JOURS, CONTACT_EMAIL } from "@/lib/config";

const MESSAGES: Record<string, string> = {
  echec: "Le paiement n’a pas abouti. Aucune somme n’a été prélevée : tu peux réessayer ci-dessous.",
  annule: "Paiement annulé. Rien n’a été prélevé. Ton offre t’attend ci-dessous.",
  config: "Le paiement est momentanément indisponible. Réessaie dans quelques minutes.",
};

const FAQ = [
  {
    q: "Est-ce que ça marche pour mon cas ?",
    r: "Oui si ton relevé contient des commissions d’intervention, des frais de rejet ou des options facturées. Pour un particulier, la commission d’intervention est plafonnée à 8 € par opération et 80 € par mois (4 € et 20 € en situation de fragilité financière). Pour une structure, ces plafonds ne s’appliquent pas, mais les frais restent négociables. Aucun remboursement n’est garanti : c’est ta banque qui décide.",
  },
  {
    q: "Combien de temps ça me prend ?",
    r: "Environ dix minutes : tu déposes ton relevé, tu relis le courrier, tu l’envoies.",
  },
  {
    q: "Et si je veux arrêter ?",
    r: `Tu résilies quand tu veux, sans justification, en écrivant à ${CONTACT_EMAIL}. L’abonnement s’arrête avant le prochain prélèvement.`,
  },
  {
    q: "À quoi sert exactement ce que je paie ?",
    r: "À l’outil : il repère les lignes de frais, les compare aux plafonds légaux, rédige ton courrier de réclamation adressé à la bonne agence, et suit les remboursements obtenus.",
  },
];

export default async function Accueil({ searchParams }: { searchParams: Promise<{ paiement?: string }> }) {
  const { paiement } = await searchParams;
  const alerte = paiement ? MESSAGES[paiement] : undefined;

  return (
    <main>
      {/* Bandeau */}
      <div className="bg-sapin text-creme">
        <div className="mx-auto max-w-2xl px-5 py-3 font-titre text-lg font-semibold tracking-tight">Agios</div>
      </div>

      {/* Entrée */}
      <section className="mx-auto max-w-2xl px-5 pt-10 pb-8">
        <h1 className="font-titre text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-tight text-sapin">
          Récupère les frais bancaires prélevés à tort.
        </h1>
        <p className="mt-5 text-lg leading-relaxed">
          Commissions d’intervention, frais de rejet, options facturées sans usage : ils s’ajoutent par petites lignes
          illisibles. La plupart sont plafonnés par la loi, souvent négociables, et presque jamais contestés.
        </p>
        <a
          href="#offre"
          className="mt-7 flex w-full sm:w-auto sm:inline-flex items-center justify-center rounded-xl bg-brique px-8 py-4 text-lg font-semibold text-white shadow-[0_3px_0_#8f2f12] active:translate-y-[2px] active:shadow-none"
        >
          Commencer
        </a>
      </section>

      {/* Douleur chiffrée */}
      <section className="mx-auto max-w-2xl px-5">
        <div className="rounded-2xl border-2 border-sapin bg-papier p-6">
          <p className="font-titre text-5xl font-semibold text-brique">80 €<span className="text-2xl text-sapin"> / mois</span></p>
          <p className="mt-3 leading-relaxed">
            C’est le maximum que ta banque peut te prélever en commissions d’intervention : 8 € par opération, dans la
            limite de 80 € par mois. Sur douze mois, <strong>jusqu’à 960 €</strong>. Et ce n’est qu’une ligne parmi
            d’autres.
          </p>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="mx-auto max-w-2xl px-5 pt-10">
        <ol className="space-y-6">
          {[
            ["On repère chaque ligne.", "Dépose ton relevé : toutes les lignes de frais sont isolées et additionnées sur douze mois."],
            ["On les compare aux plafonds légaux.", "Tu vois d’un coup d’œil ce qui dépasse ce que la loi autorise."],
            ["Tu envoies un courrier prêt.", "Rédigé, chiffré, adressé à la bonne agence. Tu relis, tu envoies, tu suis les remboursements."],
          ].map(([t, d], i) => (
            <li key={t} className="flex gap-4">
              <span className="font-titre text-3xl font-semibold text-brique leading-none w-8 shrink-0">{i + 1}</span>
              <div>
                <h2 className="font-titre text-xl font-semibold text-sapin">{t}</h2>
                <p className="mt-1 leading-relaxed">{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Paywall / offre */}
      <section id="offre" className="mx-auto max-w-2xl px-5 pt-14 scroll-mt-4">
        {alerte && (
          <p role="alert" className="mb-4 rounded-xl border-2 border-brique bg-papier p-4 font-medium">{alerte}</p>
        )}
        <div className="rounded-2xl bg-sapin text-creme p-6">
          <p className="inline-block rounded-full bg-creme/15 px-3 py-1 text-sm font-medium">Accès anticipé</p>
          <h2 className="font-titre text-3xl font-semibold mt-3 leading-tight">Ton plan est prêt. Il ne reste qu’à l’ouvrir.</h2>
          <p className="mt-3 leading-relaxed text-creme/90">
            Une seule commission d’intervention plafonnée peut coûter 80 € en un mois. L’abonnement coûte{" "}
            <strong>{PRIX_EUR} €</strong> : une seule réclamation acceptée le rembourse largement.
          </p>

          <p className="mt-6 font-titre text-5xl font-semibold">
            {PRIX_EUR} €<span className="text-xl font-normal"> / mois</span>
          </p>
          <p className="text-creme/80">soit {PRIX_PAR_JOUR} € par jour</p>

          <div className="mt-5 rounded-xl bg-creme text-encre p-4">
            <p className="font-semibold">Satisfait ou remboursé, {GARANTIE_JOURS} jours.</p>
            <p className="mt-1 text-sm leading-relaxed">
              Écris-nous à {CONTACT_EMAIL} dans les {GARANTIE_JOURS} jours suivant ton paiement : remboursement intégral
              sous 5 jours ouvrés, sans justification.
            </p>
          </div>

          <form method="post" action="/api/checkout" className="mt-5">
            <button
              type="submit"
              className="w-full rounded-xl bg-brique px-6 py-4 text-lg font-semibold text-white shadow-[0_3px_0_#8f2f12] active:translate-y-[2px] active:shadow-none"
            >
              Payer {PRIX_EUR} € et ouvrir mon accès
            </button>
          </form>
          <p className="mt-3 text-center text-sm text-creme/80">Sans engagement, résiliable à tout moment.</p>
          <p className="mt-1 text-center text-xs text-creme/60">Paiement sécurisé par Stripe.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-2xl px-5 pt-12">
        <h2 className="font-titre text-2xl font-semibold text-sapin mb-3">Questions fréquentes</h2>
        <div className="divide-y divide-sapin/20 border-y border-sapin/20">
          {FAQ.map(({ q, r }) => (
            <details key={q} className="py-4">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold min-h-[44px]">
                {q}
                <span className="plus text-2xl text-brique transition-transform" aria-hidden>+</span>
              </summary>
              <p className="mt-2 leading-relaxed">{r}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
