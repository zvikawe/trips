"use client";

import { useEffect, useState } from "react";

export default function TripPlanner({
  slug,
  bookings,
  note,
}: {
  slug: string;
  bookings: readonly string[];
  note: string;
}) {
  const bookingKey = `journeys-bookings-${slug}`;
  const noteKey = `journeys-notes-${slug}`;
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

  function toggle(index: number) {
    const next = { ...checked, [index]: !checked[index] };
    setChecked(next);
    localStorage.setItem(bookingKey, JSON.stringify(next));
  }

  return (
    <section className="planning-section">
      <div className="site-shell planning-grid">
        <article>
          <p className="section-index">03 / Before we go</p>
          <h2>Bookings</h2>
          <div className="check-list">
            {bookings.map((booking, index) => (
              <label key={booking}>
                <input
                  type="checkbox"
                  checked={Boolean(checked[index])}
                  onChange={() => toggle(index)}
                />
                <span>{booking}</span>
              </label>
            ))}
          </div>
        </article>
        <article className="notes-panel">
          <p className="section-index">04 / Keep in mind</p>
          <h2>Notes</h2>
          <p>{note}</p>
          <textarea
            aria-label="Personal trip notes"
            value={personalNote}
            onChange={(event) => {
              setPersonalNote(event.target.value);
              localStorage.setItem(noteKey, event.target.value);
            }}
            placeholder="Add confirmations, restaurant ideas or private notes…"
          />
        </article>
      </div>
    </section>
  );
}
