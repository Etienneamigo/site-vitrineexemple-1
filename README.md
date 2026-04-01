# ELUA — Movement Redefined

Site vitrine premium pour une marque fictive d'activewear pilates. Next.js + TypeScript + Tailwind CSS + Framer Motion.

Direction artistique : lumineux, blanc, aérien, sophistiqué, premium.

---

## Installation

```bash
npm install
```

## Lancer en local (dev)

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Build production

```bash
npm run build
npm run start
```

---

## Structure du projet

```
src/
  app/
    layout.tsx            # Layout racine (navigation, footer, smooth scroll)
    page.tsx              # Page d'accueil
    globals.css           # Styles globaux, palette lumineuse, animations
    product/
      jacket/page.tsx     # Page produit Veste
      pants/page.tsx      # Page produit Pantalon
  components/
    layout/               # Navigation, Footer, SmoothScroll, Loader
    sections/             # Sections homepage (Hero, Intro, Manifesto, Features, etc.)
    product/              # Composants produit (Hero, Gallery, Details, Editorial, etc.)
    ui/                   # Composants UI (FadeIn, RevealText, ParallaxImage, etc.)
  data/
    products.ts           # Données produits (noms, descriptions, coloris, images)
  hooks/                  # Hooks custom (useInView, useScrollProgress)
  lib/
    utils.ts              # Fonctions utilitaires

public/images/
  outfits/                # Images portées (looks complets)
    outfit-black-front.png
    outfit-rose-front.png
    outfit-rose-back.png
  products/
    jacket/               # Images produit fond blanc
      jacket-black-front.avif
      jacket-black-back.avif
      jacket-rose-front.avif
      jacket-rose-back.avif
    pants/                # (optionnel, dossier prêt)
```

---

## Intégrer vos images

Copiez vos images sources dans les dossiers ci-dessus avec les noms exacts.

Correspondance avec vos fichiers :

| Fichier source | Destination |
|---|---|
| imageenssemble noir porté de face.png | `public/images/outfits/outfit-black-front.png` |
| imageenssembleroseporté de face.png | `public/images/outfits/outfit-rose-front.png` |
| imageemssembleroseporté de dos.png | `public/images/outfits/outfit-rose-back.png` |
| imagefondblancderrierenoir.avif | `public/images/products/jacket/jacket-black-back.avif` |
| imagefondblancvestedevantnoir.avif | `public/images/products/jacket/jacket-black-front.avif` |
| imagefondblancvestederriererose.avif | `public/images/products/jacket/jacket-rose-back.avif` |
| imagefondblancvestedevantrose.avif | `public/images/products/jacket/jacket-rose-front.avif` |

Les images sont référencées dans `src/data/products.ts` et dans les composants de sections.
Une fois copiées, relancez `npm run dev` — aucune modification de code nécessaire.

---

## Modifier les textes

- **Textes produits** : `src/data/products.ts`
- **Textes homepage** : chaque section dans `src/components/sections/`
- **Nom de marque** : chercher "ÉLUA" dans le projet

## Modifier les coloris

Dans `src/data/products.ts`, chaque produit a un tableau `colors` avec id, name, hex et images.
Pour ajouter un coloris, ajoutez un objet au tableau et créez les images correspondantes.

---

## Deploiement

### Node.js + PM2

```bash
npm install --production
npm run build
npx pm2 start npm --name "elua" -- start -- -p 3000
```

### Docker (ajoutez `output: "standalone"` dans next.config.ts)

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

### Vercel

```bash
npx vercel
```

---

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (animations, transitions, scroll effects)
- Lenis (smooth scroll)

## Pages

| Page | URL |
|---|---|
| Accueil | `/` |
| La Veste Studio | `/product/jacket` |
| Le Pantalon Flow | `/product/pants` |
