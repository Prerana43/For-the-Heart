import Hero from "../components/Hero";
import React from "react";

export default function Home() {
  return (
  <div>
  <Hero />
    <section className="px-6 py-20 bg-soft text-dark">
  <div className="max-w-6xl mx-auto">

    {/* Intro text */}
    <div className="text-center max-w-3xl mx-auto mb-14">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        More Than Just Dance
      </h2>
      <p className="text-brand leading-relaxed">
        Where movement becomes emotion, and rhythm finds meaning.<br></br>
            Every step we take is driven by feeling. Every beat we follow comes from the heart. This space is for expression beyond words — a place where stories are told through movement, connection, and shared moments.
      </p>
    </div>

    {/* Content cards */}
    <div className="grid gap-8 md:grid-cols-3">

      {/* Card 1 */}
      <div className="p-6 rounded-2xl bg-blush/5 hover:bg-blush transition shadow-sm">
        <h3 className="text-xl font-semibold mb-2">
          Moments
        </h3>
        <p className="text-dark">
          Behind-the-scenes memories, rehearsals,
          and snapshots that capture our journey.
        </p>
      </div>

      {/* Card 2 */}
      <div className="p-6 rounded-2xl bg-blush/5 hover:bg-blush transition  shadow-sm">
        <h3 className="text-xl font-semibold mb-2">
          Performances
        </h3>
        <p className="text-dark">
          High-energy stages, themed showcases,
          and events where movement takes the spotlight.
        </p>
      </div>

      {/* Card 3 */}
      <div className="p-6 rounded-2xl bg-blush/5 hover:bg-blush transition  shadow-sm">
        <h3 className="text-xl font-semibold mb-2">
          Community
        </h3>
        <p className="text-dark">
          A growing family of dancers, creators,
          and supporters united by love for dance.
        </p>
      </div>

    </div>
  </div>
</section>

 </div> );
}
