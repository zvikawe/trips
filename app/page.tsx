import JourneyAccordion from "@/components/JourneyAccordion";
import { trips } from "@/data/trips";

export default function Home() {
  return (
    <main>
      <header className="editorial-header site-shell">
        <nav className="editorial-nav">
          <a className="wordmark" href="#top">Zvika & Amit</a>
          <span>Journeys · 2026</span>
        </nav>
        <div className="editorial-intro" id="top">
          <p className="eyebrow">Travel journal</p>
          <h1>Journeys</h1>
          <p className="intro-copy">
            A collection of theatre weekends, scenic escapes and faraway holidays—planned carefully and kept in one place.
          </p>
        </div>
      </header>

      <section className="journey-list site-shell" aria-label="Journeys">
        {trips.map((trip, index) => (
          <JourneyAccordion key={trip.slug} trip={trip} index={index} />
        ))}
      </section>

      <footer className="editorial-footer site-shell">
        <span>Zvika & Amit · Journeys 2026</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
