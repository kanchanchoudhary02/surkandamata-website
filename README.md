# Surkanda Devi Website Redesign

A responsive React + Vite + Tailwind CSS frontend concept for the Surkanda Devi Ropeway website.

## Run locally

1. Install Node.js (LTS).
2. Extract this ZIP and open the project folder in VS Code.
3. Open Terminal in the project folder and run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Before publishing

- This is a redesigned frontend concept, not a migration of the original source code.
- Contact form currently demonstrates client-side validation only; it does not send or store enquiries. Connect it to a verified backend/API endpoint before launch.
- Confirm contact details, ropeway fares, operating hours, live operational status and policies with the site owner.
- Replace illustrative Unsplash image URLs with approved/licensed Surkanda Devi and ropeway photos.
- Connect any existing booking, analytics, CMS, admin or other site-specific functionality after obtaining the original source/API details.
- The external Google Maps directions link is a search link and should be verified against the exact visitor destination.

## Stack

- React 18
- Vite
- Tailwind CSS 3
- Lucide React icons


## Supplied brand assets

- `public/images/surkanda-ropeway-logo.jpeg` — user-provided logo.
- `public/images/surkanda-ropeway-banner.jpeg` — user-provided wide banner used in the homepage.
- Brand colors updated to deep green, gold, and cream to match the supplied artwork.
