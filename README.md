# Journeys — Zvika & Amit

A production-ready Next.js travel journal with seven static trip pages, motion effects, saved booking checklists and private browser notes.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Vercel

1. Create a new GitHub repository.
2. Upload this entire project.
3. In Vercel, select **Add New → Project**.
4. Import the GitHub repository.
5. Keep the detected framework as **Next.js**.
6. Click **Deploy**.

The project is configured with `output: "export"`, so it also creates a static `out` directory after:

```bash
npm run build
```

## Edit trip details

All itinerary content is in:

```text
data/trips.ts
```

Each trip has its own entry with dates, hero image, itinerary, booking reminders and notes.

## Included

- Manchester
- Croatia
- Newbury
- Chichester
- Lake District
- Lake Garda
- Thailand

## Photography

Hero images are loaded from Unsplash URLs. Replace any `hero` value in `data/trips.ts` with your own hosted photograph later.
