import PageLegale from "@/components/PageLegale";
import Champ from "@/components/Champ";
import { CONTACT_EMAIL, GARANTIE_JOURS, PRIX_EUR } from "@/lib/config";

export const metadata = { title: "Conditions générales de vente — Agios" };

export default function Page() {
  return (
    <PageLegale titre="Conditions générales de vente">
      <p>Dernière mise à jour : <Champ>date</Champ>.</p>
      <h2>1. Objet</h2>
      <p>
        Les présentes conditions régissent la vente de l’abonnement au service Agios, édité par{" "}
        <Champ>raison sociale</Champ> (SIRET <Champ>SIRET</Champ>), qui permet de repérer des frais bancaires, de les
        comparer aux plafonds légaux, de générer un courrier de réclamation et de suivre les remboursements.
      </p>
      <h2>2. Prix et paiement</h2>
      <p>
        L’abonnement coûte {PRIX_EUR} € par mois, prélevé chaque mois par carte via notre prestataire Stripe. Le
        <Champ>régime de TVA (ex. « TVA non applicable, art. 293 B du CGI »)</Champ> s’applique.
      </p>
      <h2>3. Durée et résiliation</h2>
      <p>
        L’abonnement est sans engagement. Tu peux le résilier à tout moment en écrivant à {CONTACT_EMAIL} ; la
        résiliation prend effet avant le prochain prélèvement.
      </p>
      <h2>4. Garantie satisfait ou remboursé</h2>
      <p>
        Pendant {GARANTIE_JOURS} jours après le premier paiement, tu peux demander le remboursement intégral, sans
        justification, en écrivant à {CONTACT_EMAIL}. Le remboursement est effectué sous 5 jours ouvrés.
      </p>
      <h2>5. Droit de rétractation</h2>
      <p>
        Conformément au Code de la consommation, tu disposes d’un délai de 14 jours pour te rétracter. Si tu demandes
        l’accès immédiat au service, tu reconnais perdre ce droit une fois le service pleinement exécuté.{" "}
        <Champ>À faire valider selon ta situation</Champ>
      </p>
      <h2>6. Responsabilité</h2>
      <p>
        Agios est un outil d’aide, pas un conseil juridique. Aucun remboursement n’est garanti : la décision appartient à
        la banque. Notre responsabilité est limitée au montant des sommes payées.
      </p>
      <h2>7. Médiation et droit applicable</h2>
      <p>
        Droit français. En cas de litige, tu peux saisir gratuitement le médiateur de la consommation :{" "}
        <Champ>nom et coordonnées du médiateur</Champ>.
      </p>
    </PageLegale>
  );
}
