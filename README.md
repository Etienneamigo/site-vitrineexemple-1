# ELUA — Movement Redefined

Site vitrine premium pour une marque fictive d'activewear pilates. Next.js + TypeScript + Tailwind CSS + Framer Motion.

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
    globals.css           # Styles globaux, couleurs, animations
    product/
      jacket/page.tsx     # Page produit Veste
      pants/page.tsx      # Page produit Pantalon
  components/
    layout/               # Navigation, Footer, SmoothScroll, Loader, PageTransition
    sections/             # Sections de la page d'accueil (Hero, Intro, Manifesto...)
    product/              # Composants produit (Hero, Gallery, Details, Editorial...)
    ui/                   # Composants UI (FadeIn, RevealText, ParallaxImage, MarqueeBand...)
  data/
    products.ts           # Donnees produits (noms, descriptions, coloris, images)
  hooks/                  # Hooks custom (useInView, useScrollProgress)
  lib/
    utils.ts              # Fonctions utilitaires
public/
  products/
    jacket/
      black/              # 1.jpg, 2.jpg, 3.jpg, 4.jpg
      pink/               # 1.jpg, 2.jpg, 3.jpg, 4.jpg
    pants/
      black/              # 1.jpg, 2.jpg, 3.jpg, 4.jpg
      pink/               # 1.jpg, 2.jpg, 3.jpg, 4.jpg
```

---

## Remplacer les images

Placez vos images dans les dossiers correspondants :

```
public/products/jacket/black/1.jpg   # Image principale veste noire
public/products/jacket/black/2.jpg   # etc.
public/products/jacket/pink/1.jpg    # Image principale veste rose
public/products/pants/black/1.jpg    # Image principale pantalon noir
public/products/pants/pink/1.jpg     # Image principale pantalon rose
```

Les images sont chargees automatiquement par le code. Pas besoin de modifier le code pour changer les visuels.

Pour ajouter plus d'images a un coloris, ajoutez les fichiers (5.jpg, 6.jpg...) et mettez a jour le tableau `images` dans `src/data/products.ts`.

---

## Modifier les textes

- **Textes produits** : `src/data/products.ts` — noms, descriptions, features, prix, materiaux
- **Textes page d'accueil** : chaque section dans `src/components/sections/`
- **Nom de marque** : chercher "ELUA" dans le projet

---

## Modifier les coloris

Dans `src/data/products.ts`, chaque produit a un tableau `colors` :

```ts
colors: [
  {
    id: "black",
    name: "Noir Absolu",
    hex: "#0A0A0A",
    images: ["/products/jacket/black/1.jpg", ...]
  },
  {
    id: "pink",
    name: "Rose Poudre",
    hex: "#D4A0A0",
    images: ["/products/jacket/pink/1.jpg", ...]
  }
]
```

Pour ajouter un coloris, ajoutez un objet au tableau et creez le dossier d'images correspondant.

---

## Deploiement sur serveur Linux

### Option 1 : Node.js direct

```bash
# Sur le serveur
git clone <repo-url> elua-site
cd elua-site
npm install --production
npm run build
npm run start -- -p 3000
```

Pour lancer en arriere-plan avec PM2 :

```bash
npm install -g pm2
pm2 start npm --name "elua" -- start -- -p 3000
pm2 save
pm2 startup
```

### Option 2 : Docker

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

Pour le mode standalone, ajoutez dans `next.config.ts` :

```ts
const nextConfig = { output: "standalone" };
```

### Option 3 : Vercel

```bash
npm i -g vercel
vercel
```

---

## Stack technique

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — animations, transitions, scroll-based effects
- **GSAP** — disponible si necessaire pour animations complexes
- **Lenis** — smooth scroll

---

## Pages

| Page | URL | Description |
|------|-----|-------------|
| Accueil | `/` | Hero, intro, collection, manifeste, features, color story |
| Veste | `/product/jacket` | Page produit La Veste Studio |
| Pantalon | `/product/pants` | Page produit Le Pantalon Flow |
