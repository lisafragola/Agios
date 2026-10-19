import PageLegale from "@/components/PageLegale";
import Champ from "@/components/Champ";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata = { title: "Politique de confidentialité — Agios" };

export default function Page() {
  return (
    <PageLegale titre="Politique de confidentialité">
      <p>Responsable du traitement : <Champ>raison sociale et adresse</Champ>. Contact : {CONTACT_EMAIL}.</p>
      <h2>Données collectées</h2>
      <p>
        Ton adresse email et les informations de paiement (traitées par Stripe, nous ne voyons jamais ton numéro de
        carte). Plus tard, les relevés bancaires que tu choisis de déposer : ils servent uniquement à repérer les frais
        et à rédiger ton courrier.
      </p>
      <h2>Finalités et bases légales</h2>
      <p>Exécuter ton abonnement (contrat), respecter nos obligations comptables (obligation légale), mesurer l’audience de façon anonyme (intérêt légitime).</p>
      <h2>Mesure d’audience</h2>
      <p>Nous utilisons <Champ>outil de mesure, ex. Plausible</Champ>, sans cookie ni donnée personnelle.</p>
      <h2>Destinataires et durée</h2>
      <p>Stripe (paiement), Vercel (hébergement), <Champ>autres sous-traitants</Champ>. Données conservées pendant la durée de l’abonnement, puis <Champ>durée, ex. 3 ans</Champ>.</p>
      <h2>Tes droits</h2>
      <p>
        Accès, rectification, effacement, opposition, portabilité : écris à {CONTACT_EMAIL}. Tu peux aussi saisir la CNIL
        (cnil.fr).
      </p>
    </PageLegale>
  );
}
