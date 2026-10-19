// Tout ce qui est à compléter ou à régler est ici.
export const PRIX_EUR = 9; // prix mensuel (modifiable)
export const PRIX_CENTIMES = PRIX_EUR * 100;
export const PRIX_PAR_JOUR = (PRIX_EUR / 30).toFixed(2).replace(".", ",");
export const CONTACT_EMAIL = "[EMAIL À COMPLÉTER]";
export const GARANTIE_JOURS = 14;
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
