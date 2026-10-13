# Al Barakah Organics

Website for Al Barakah Organics — premium vermicompost, red wiggler worms, farmer training (Zaraat Kach'heri) and sustainable agriculture solutions in Pakistan.

Built with Next.js (App Router), React, Tailwind CSS and Framer Motion. The site is exported as static HTML, so it can be hosted on any static host.

## Requirements

- Node.js 20 or newer
- npm

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser. Changes in `src/` reload automatically.

## Build for production

```bash
npm run build
```

This creates an `out/` folder containing the complete static website. Upload the contents of `out/` to your hosting (Netlify, Vercel, cPanel, Nginx, etc.).

To preview the production build locally, serve the `out/` folder with any static file server, for example:

```bash
npx serve out
```

## Project structure

| Path | Purpose |
| --- | --- |
| `src/app/(frontend)/` | Pages (Home, About, Products, Solutions, Training, Impact, Resources, Blog, FAQs, Contact) and global `styles.css` |
| `src/components/` | Reusable components (Header, Footer, sliders, forms, etc.) |
| `src/data/` | Content for products, blog posts, resources, testimonials and training programmes |
| `public/images/` | Site images |
| `public/docs/` | Downloadable PDFs (catalogue, handbook, dosage guide, syllabus) |
| `scripts/generate-pdfs.js` | Regenerates the PDFs in `public/docs` (`node scripts/generate-pdfs.js`) |

## Updating content

- **Products:** edit `src/data/products.ts`.
- **Blog posts / resources:** edit `src/data/blog.ts` and `src/data/resources.ts`.
- **Testimonials:** edit `src/data/testimonials.ts`.
- **Training programmes:** edit `src/data/training.ts`.
- **Team members and principles:** edit the lists at the top of `src/app/(frontend)/about/page.tsx`.
- **Images:** add files to `public/images/` and reference them as `/images/<file-name>`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create the production build in `out/` |
| `npm run lint` | Run ESLint |
