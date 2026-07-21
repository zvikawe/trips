"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Trip } from "@/data/trips";

export default function JourneyCard({ trip, index }: { trip: Trip; index: number }) {
  return (
    <motion.article
      className={`journey-card card-${(index % 4) + 1}`}
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.72, delay: Math.min(index * 0.06, 0.3) }}
    >
      <Link href={`/trips/${trip.slug}`} className="journey-card-link">
        <div
          className="journey-image"
          style={{ backgroundImage: `url("${trip.hero}")` }}
        />
        <div className="journey-gradient" />
        <div className="journey-card-top">
          <span>{trip.eyebrow}</span>
          <span className="status-pill">{trip.status}</span>
        </div>
        <div className="journey-card-copy">
          <p>{trip.dates}</p>
          <h3>{trip.name}</h3>
          <span>{trip.tagline}</span>
        </div>
        <div className="journey-card-bottom">
          <span>{trip.country}</span>
          <span className="round-arrow">↗</span>
        </div>
      </Link>
    </motion.article>
  );
}
