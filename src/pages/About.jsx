import React from "react";

export default function About() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">

        {/* Who We Are */}
        <div className="mb-16">
          <h2 className="font-heading text-4xl text-brand mb-6">
            Who We Are
          </h2>

          <p className="text-dark leading-relaxed text-lg">
            <strong>For The Heart</strong> is a collective of individuals brought together
            by rhythm, emotion, and expression. We believe movement is a language
            one that speaks honestly, without filters.
            <br /><br />
            We come from different backgrounds, styles, and journeys,
            but what connects us is the need to express what the heart carries.
          </p>
        </div>

        {/* Divider
        <div className="h-px w-full bg-dark/10 mb-16"></div> */}

        {/* Philosophy */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl text-brand mb-6">
            Our Philosophy
          </h3>

          <ul className="space-y-3 text-dark text-lg">
            <li>• Dance is not perfection, it’s honesty</li>
            <li>• Emotion matters more than technique</li>
            <li>• Expression is personal, not performative</li>
            <li>• Every story deserves space</li>
          </ul>
        </div>

        {/* What Drives Us */}
        <div>
          <h4 className="font-heading text-xl text-brand mb-4">
            What Drives Us
          </h4>

          <p className="text-dark leading-relaxed text-lg">
            Passion. Connection. Vulnerability.
            <br />
            We move not to impress, but to express.
          </p>
        </div>

      </div>
    </section>
  );
}
