# Travel site data refactor

1. Replace your existing `data/trips.ts` with the file in this package.
2. Upload the new `data/trips/` folder to the same `data` directory.
3. Commit the changes in GitHub. Vercel should redeploy automatically.

Existing imports such as `import { trips, getTrip } from "@/data/trips"` will continue to work.

Included updates: Manchester Chetham’s tour at 15:30, Hawksmoor at 17:45, Fun Home at 19:30, and the Lake District correction from Hawse End to Hawes End.
