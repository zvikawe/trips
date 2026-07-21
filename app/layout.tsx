import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Journeys · Zvika & Amit",
  description: "Seven journeys across 2026, from English theatre weekends to Thailand.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
