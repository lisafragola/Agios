# Agios — étape 1

1. Dézipper, ouvrir un terminal dans le dossier.
2. `npm install` puis `npm run dev` → http://localhost:3000
3. Copier `.env.example` en `.env.local` et remplir les clés Stripe (mode test).
4. Pousser sur GitHub, importer le dépôt dans Vercel, coller les mêmes variables.
5. Stripe > Développeurs > Webhooks : adresse `https://TON-SITE.vercel.app/api/webhook`, événement `checkout.session.completed`.
6. Carte de test : 4242 4242 4242 4242, date future, CVC au hasard.
