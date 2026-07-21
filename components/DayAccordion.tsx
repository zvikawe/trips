"use client";

import { useState } from "react";

export default function DayAccordion({
  days,
}: {
  days: readonly {
    date: string;
    title: string;
    items: readonly string[];
  }[];
}) {
  const [open, setOpen] = useState(0);

  return (
    <div className="day-list">
      {days.map((day, index) => {
        const isOpen = open === index;
        return (
          <article className={`day-row ${isOpen ? "open" : ""}`} key={`${day.date}-${day.title}`}>
            <button onClick={() => setOpen(isOpen ? -1 : index)} aria-expanded={isOpen}>
              <span className="day-date">{day.date}</span>
              <span className="day-title">{day.title}</span>
              <span className="day-plus">+</span>
            </button>
            <div className="day-content">
              <ul>
                {day.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </article>
        );
      })}
    </div>
  );
}
