import PageLegale from "@/components/PageLegale";
import Champ from "@/components/Champ";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata = { title: "Mentions légales — Agios" };

export default function Page() {
  return (
    <PageLegale titre="Mentions légales">
      <h2>Éditeur du site</h2>
      <p>
        Agios est édité par <Champ>Nom / raison sociale</Champ>, <Champ>forme juridique (ex. micro-entreprise)</Champ>,
        SIRET <Champ>numéro SIRET</Champ>, dont l’adresse est <Champ>adresse postale</Champ>.
      </p>
      <p>Directeur de la publication : <Champ>Nom</Champ>. Contact : {CONTACT_EMAIL}.</p>
      <h2>Hébergeur</h2>
      <p>Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
      <h2>Propriété intellectuelle</h2>
      <p>Les contenus du site (textes, visuels, marque Agios) sont protégés. Toute reproduction sans accord écrit est interdite.</p>
      <h2>Nature du service</h2>
      <p>
        Agios est un outil d’aide à la rédaction de réclamations. Il ne constitue pas un conseil juridique et ne garantit
        aucun remboursement : la décision appartient à l’établissement bancaire.
      </p>
    </PageLegale>
  );
}
