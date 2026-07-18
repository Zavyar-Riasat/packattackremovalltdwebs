// app/page.tsx
import React from "react";
import Home from "./components/home";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pack&Attack Removals London | Reliable Moving & Packing Services",
  description: "Looking for a professional removals company in London? Pack&Attack offers transparent, insured house moving, office relocations, and man & van services with no hidden fees.",
};

export default function HomePage() {
  return (
    <main className="">
      <Home />
    </main>
  );
}