import { notFound } from "next/navigation";
import Link from "next/link";
import Countdown from "@/components/Countdown";
import DayAccordion from "@/components/DayAccordion";
import TripPlanner from "@/components/TripPlanner";
import Reveal from "@/components/Reveal";
import { getTrip, trips } from "@/data/trips";

export function generateStaticParams() {
  return trips.map((trip) => ({ slug: trip.slug }));
}

export default async function TripPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const trip = getTrip(slug);
  if (!trip) notFound();

  return (
    <main>
      <header className="trip-hero" style={{ backgroundImage: `url("${trip.hero}")` }}>
        <div className="trip-scrim" />
        <nav className="nav site-shell">
          <Link className="brand back-brand" href="/">← <span>All journeys</span></Link>
          <span className="status-pill hero-status">{trip.status}</span>
        </nav>
        <div className="trip-hero-copy site-shell">
          <div>
            <p className="hero-kicker">{trip.eyebrow} · {trip.dates}</p>
            <h1>{trip.name}</h1>
            <p className="trip-tagline">{trip.tagline}</p>
          </div>
          <Countdown startDate={trip.startDate} />
        </div>
      </header>

      <section className="facts site-shell">
        {trip.stats.map((stat) => (
          <div className="fact" key={stat.label}>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </div>
        ))}
      </section>

      <section className="itinerary site-shell">
        <div className="section-heading">
          <p className="section-index">02 / Itinerary</p>
          <Reveal><h2>Day by day</h2></Reveal>
        </div>
        <DayAccordion days={trip.days} />
      </section>

      <TripPlanner slug={trip.slug} bookings={trip.bookings} note={trip.note} />

      <section className="next-trip">
        <div className="site-shell">
          <p className="section-index">Continue exploring</p>
          <Link href="/">Return to all journeys <span>↗</span></Link>
        </div>
      </section>

      <footer className="footer">
        <div className="site-shell"><Link href="/">← All journeys</Link><span>Zvika & Amit · 2026</span></div>
      </footer>
    </main>
  );
}
