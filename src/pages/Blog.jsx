import React from "react";

export default function Blog() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">

        {/* Intro */}
        <div className="mb-16">
          <h2 className="font-heading text-4xl text-brand mb-6">
            Our Blog
          </h2>

          <p className="text-dark leading-relaxed text-lg">
            This space is for stories, thoughts, and conversations around dance
            and expression. From Indian dance forms and contemporary movement
            to personal reflections, creative processes, and new updates
            our blogs explore what moves us, on and off the floor.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-dark/10 mb-16"></div>

        {/* Content List */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl text-brand mb-6">
            What You’ll Find Here
          </h3>

          <ul className="space-y-3 text-dark text-lg">
            <li>• Stories rooted in dance and emotion</li>
            <li>• Explorations of Indian dance forms and culture</li>
            <li>• Thoughts on movement, rhythm, and identity</li>
            <li>• Behind-the-scenes moments and creative journeys</li>
            <li>• Announcements, updates, and upcoming work</li>
          </ul>
        </div>

        {/* Closing Line */}
        <div className="text-center">
          <p className="font-heading text-xl text-dark leading-relaxed">
            Not just about steps.
            <br />
            <span className="text-brand">About the stories behind them.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
