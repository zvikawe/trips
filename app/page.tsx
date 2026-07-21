import JourneyCard from "@/components/JourneyCard";
import Reveal from "@/components/Reveal";
import { trips } from "@/data/trips";

export default function Home() {
  return (
    <main>
      <header className="home-hero">
        <div className="home-image" />
        <div className="home-scrim" />
        <nav className="nav site-shell">
          <a className="brand" href="/">Z · A</a>
          <div className="nav-links">
            <a href="#journeys">Journeys</a>
            <span>2026</span>
          </div>
        </nav>
        <div className="home-copy site-shell">
          <p className="hero-kicker">Seven journeys · one unforgettable year</p>
          <h1>Places we’re<br />going together.</h1>
          <div className="hero-bottom">
            <p>From theatre weekends close to home to tropical beaches on the other side of the world.</p>
            <a className="scroll-link" href="#journeys"><span>Explore</span><b>↓</b></a>
          </div>
        </div>
      </header>

      <section className="intro site-shell" id="journeys">
        <p className="section-index">01 / Upcoming</p>
        <Reveal className="intro-main">
          <h2>Our 2026<br />travel collection</h2>
          <p>Every trip has its own guide with the latest itinerary, booking list and notes—beautiful enough to revisit, practical enough to use on the road.</p>
        </Reveal>
      </section>

      <section className="journey-grid site-shell">
        {trips.map((trip, index) => <JourneyCard key={trip.slug} trip={trip} index={index} />)}
      </section>

      <section className="manifesto">
        <Reveal className="site-shell manifesto-inner">
          <p>“The best trips are the ones you keep talking about long after you return.”</p>
          <span>Seven adventures · August 2026 to January 2027</span>
        </Reveal>
      </section>

      <footer className="footer">
        <div className="site-shell"><span>Journeys by Zvika & Amit</span><a href="#journeys">All journeys ↑</a></div>
      </footer>
    </main>
  );
}
