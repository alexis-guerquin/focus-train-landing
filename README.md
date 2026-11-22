# Focus Train

Site vitrine du minuteur Pomodoro Focus Train sur [focus-train.fr](https://focus-train.fr/). Les accueils sont exportés en HTML. L’anglais est la langue par défaut à `/`, le français est disponible à `/fr/`.

```sh
pnpm install
pnpm dev
pnpm lint
pnpm build
```

Le build écrit dans `out/`. Next.js produit `sitemap.xml`, `robots.txt` et `manifest.webmanifest`. Les URL de canonique et de langue, les descriptions des visuels et les données structurées de l’accueil sont définies dans `config/landing.ts`. `public/llms.txt` donne les liens publics vers les stores, l’assistance et les visuels.

Les trois visuels promotionnels de chaque langue et l’icône proviennent de la fiche App Store officielle 6789511554. Les images de la section « À bord » proviennent de l’interface Focus Train. Les chiffres affichés correspondent aux fiches françaises App Store et Google Play consultées le 22 novembre 2026.

Les URL historiques des pages d’assistance, de confidentialité, des conditions, des mentions légales, des tarifs et de suppression de compte sont conservées. Les variables publiques sont documentées dans `.env.example`.
