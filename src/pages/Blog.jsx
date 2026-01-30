import React from "react";
export default function Blog() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-4xl text-brand mb-6">
          Blogs Intro
        </h2>
        <p className="text-dark leading-relaxed">
          This space is for stories, thoughts, and conversations around dance and expression. From Indian dance forms and contemporary movement to personal reflections, creative processes, and new updates — our blogs explore what moves us, on and off the floor.
        </p><hr /><br />
        
        <h2 className="font-heading text-2xl text-brand mb-6">
          What You’ll Find Here
        </h2>
        <ul className="text-dark leading-relaxed">
          <li>Stories rooted in dance and emotion</li>
          <li>Explorations of Indian dance forms and culture</li>
          <li>Thoughts on movement, rhythm, and identity</li>
          <li>Behind-the-scenes moments and creative journeys</li>
          <li>Announcements, updates, and upcoming work</li>
        </ul><hr /><br />

        
        <p className="text-dark text-center leading-relaxed">
          Not just about steps.<br></br>
About stories behind them.
        </p>
        
    </div>
    </section>
  );
}
