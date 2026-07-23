# Focus Train — site officiel

Site vitrine Next.js de l’application iOS Focus Train. Il contient la page marketing, l’assistance, la politique de confidentialité et les mentions légales.

## Installation

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Le site est ensuite accessible sur `http://localhost:3000`.

## Commandes

- `pnpm dev` : serveur de développement
- `pnpm build` : build de production
- `pnpm start` : serveur de production
- `pnpm typecheck` : contrôle TypeScript
- `pnpm format:check` : contrôle Prettier

## Configuration

Toutes les valeurs publiques sont regroupées dans [`config/site.ts`](./config/site.ts) et alimentées par les variables de `.env.local` :

- `NEXT_PUBLIC_SITE_URL` : URL canonique du site
- `NEXT_PUBLIC_APP_STORE_URL` : URL App Store ; si elle est vide, les CTA affichent « Bientôt disponible »
- `NEXT_PUBLIC_APP_STORE_REVIEW_URL` : lien direct permettant de noter l’application
- `NEXT_PUBLIC_GOOGLE_PLAY_URL` : URL Google Play
- `NEXT_PUBLIC_WAITLIST_ENDPOINT` : endpoint optionnel recevant `{ email, platform, source }` ; sans endpoint, le formulaire prépare un e-mail au support
- `NEXT_PUBLIC_SUPPORT_EMAIL` : adresse d’assistance
- `NEXT_PUBLIC_EDITOR_LEGAL_NAME` : nom légal de l’éditeur
- `NEXT_PUBLIC_EDITOR_ADDRESS` : adresse légale de l’éditeur
- `NEXT_PUBLIC_PRIVACY_UPDATED_AT` : date ISO de mise à jour de la politique

Les services de données réellement utilisés sont activables dans [`config/privacy.ts`](./config/privacy.ts). Ne pas activer un service qui n’est pas intégré à l’application.

## Captures iOS

Les captures officielles sont stockées dans `public/assets/` et leurs chemins sont centralisés dans [`config/assets.ts`](./config/assets.ts). Le composant [`components/PhoneMockup.tsx`](./components/PhoneMockup.tsx) les affiche avec `next/image`, des dimensions explicites et un texte alternatif adapté à chaque écran.

Pour remplacer une capture, conserve le même nom de fichier ou mets à jour son chemin dans `config/assets.ts`.

## App Store

Tant que l’application n’a pas d’URL, aucun lien vide n’est rendu. Après publication :

1. renseigner `NEXT_PUBLIC_APP_STORE_URL` ;
2. télécharger le badge français officiel depuis les ressources marketing Apple ;
3. conserver le badge sans modification, avec sa zone de respiration et une hauteur minimale de 40 px.

## Mentions légales et confidentialité

Avant la mise en production commerciale, renseigner le nom légal et l’adresse de l’éditeur. Vérifier aussi :

- les services tiers activés dans `config/privacy.ts` ;
- les catégories de données réellement traitées ;
- les durées de conservation ;
- l’identité et l’adresse de l’hébergeur dans la page de mentions légales ;
- la date `NEXT_PUBLIC_PRIVACY_UPDATED_AT`.

## Déploiement Vercel

Importer le dépôt dans Vercel, ajouter les variables d’environnement ci-dessus, puis utiliser les réglages Next.js détectés automatiquement. Le domaine de production attendu est `https://focus-train.fr`.
