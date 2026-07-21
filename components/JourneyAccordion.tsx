"use client";

import { useEffect, useState } from "react";
import type { Trip } from "@/data/trips";

export default function JourneyAccordion({ trip, index }: { trip: Trip; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const [openDay, setOpenDay] = useState(0);
  const bookingKey = `journeys-bookings-${trip.slug}`;
  const noteKey = `journeys-notes-${trip.slug}`;
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [personalNote, setPersonalNote] = useState("");

  useEffect(() => {
    try {
      setChecked(JSON.parse(localStorage.getItem(bookingKey) || "{}"));
      setPersonalNote(localStorage.getItem(noteKey) || "");
    } catch {
      setChecked({});
    }
  }, [bookingKey, noteKey]);

  function toggleBooking(bookingIndex: number) {
    const next = { ...checked, [bookingIndex]: !checked[bookingIndex] };
    setChecked(next);
    localStorage.setItem(bookingKey, JSON.stringify(next));
  }

  return (
    <article className={`journey-entry ${open ? "open" : ""}`} id={trip.slug}>
      <button className="journey-trigger" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className="journey-number">{String(index + 1).padStart(2, "0")}</span>
        <span className="journey-heading">
          <span className="journey-meta">{trip.country} · {trip.dates}</span>
          <strong>{trip.name}</strong>
          <span className="journey-tagline">{trip.tagline}</span>
        </span>
        <span className="journey-toggle" aria-hidden="true">+</span>
      </button>

      <div className="journey-panel">
        <div className="journey-panel-inner">
          <figure className="journey-photo">
            <img src={trip.hero} alt={`${trip.name} landscape`} />
          </figure>

          <div className="journey-summary">
            <p className="eyebrow">{trip.eyebrow}</p>
            <div className="facts-inline">
              {trip.stats.map((stat) => (
                <div key={stat.label}>
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                </div>
              ))}
            </div>
            <div className="highlights-inline">
              {trip.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}
            </div>
          </div>

          <section className="trip-section">
            <div className="section-label">Itinerary</div>
            <div className="days-compact">
              {trip.days.map((day, dayIndex) => {
                const isOpen = openDay === dayIndex;
                return (
                  <div className={`compact-day ${isOpen ? "open" : ""}`} key={`${day.date}-${day.title}`}>
                    <button onClick={() => setOpenDay(isOpen ? -1 : dayIndex)} aria-expanded={isOpen}>
                      <span>{day.date}</span>
                      <strong>{day.title}</strong>
                      <i>+</i>
                    </button>
                    <div className="compact-day-panel">
                      <ul>{day.items.map((item) => <li key={item}>{item}</li>)}</ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="trip-section split-section">
            <div>
              <div className="section-label">Bookings</div>
              <div className="booking-list">
                {trip.bookings.map((booking, bookingIndex) => (
                  <label key={booking}>
                    <input
                      type="checkbox"
                      checked={Boolean(checked[bookingIndex])}
                      onChange={() => toggleBooking(bookingIndex)}
                    />
                    <span>{booking}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <div className="section-label">Notes</div>
              <p className="trip-note">{trip.note}</p>
              <textarea
                aria-label={`Personal notes for ${trip.name}`}
                value={personalNote}
                onChange={(event) => {
                  setPersonalNote(event.target.value);
                  localStorage.setItem(noteKey, event.target.value);
                }}
                placeholder="Add confirmations, restaurant ideas or private notes…"
              />
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
