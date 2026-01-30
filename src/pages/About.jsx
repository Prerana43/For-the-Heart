import React from "react";
export default function About() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-4xl text-brand mb-6">
          Who We Are
        </h2>
        <p className="text-dark leading-relaxed">
          <strong>For The Heart</strong> is a collective of individuals brought together by rhythm, emotion, and expression. We believe movement is a language — one that speaks honestly, without filters.<br/>
          We come from different backgrounds, styles, and journeys, but what connects us is the need to express what the heart carries.

        </p><hr /><br></br>
        <h2 className="font-heading text-2xl text-brand mb-6">
          Our Philosophy       </h2>
        <ul className="text-dark leading-relaxed">
          <li>Dance is not perfection, it’s honesty</li>
          <li>Emotion matters more than technique</li>
          <li>Expression is personal, not performative</li>
          <li>Every story deserves space</li>
          </ul>
          <br></br>
        
        <h4 className="font-heading text-xl text-brand mb-6">What Drives Us</h4>
        <p className="text-dark leading-relaxed">
          Passion. Connection. Vulnerability.<br/>
          We move not to impress, but to express.

        </p>

      </div>
    </section>
  );
}
