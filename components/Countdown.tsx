"use client";

import { useEffect, useState } from "react";

export default function Countdown({ startDate }: { startDate: string }) {
  const [label, setLabel] = useState("Calculating…");

  useEffect(() => {
    const target = new Date(`${startDate}T00:00:00`);
    const update = () => {
      const days = Math.ceil((target.getTime() - Date.now()) / 86_400_000);
      setLabel(
        days > 1 ? `${days} days to go` :
        days === 1 ? "Tomorrow" :
        days === 0 ? "Starts today" :
        "Trip completed"
      );
    };
    update();
    const timer = setInterval(update, 3_600_000);
    return () => clearInterval(timer);
  }, [startDate]);

  return <span className="countdown">{label}</span>;
}
