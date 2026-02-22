import React from "react";

export default function Blog() {
  const blogs = [
    {
      id: 1,
      title:
        "Indian Dance Forms: A Complete Guide to Classical and Folk Traditions of India",
      // date: "February 2026",
      sections: [
        {
          heading: "Introduction",
          content: [
            "Indian dance forms are among the oldest and most sophisticated artistic traditions in the world. They combine storytelling, spirituality, music, costume, rhythm, and philosophy.",
            "This guide explains the difference between Indian classical dance and Indian folk dance forms, along with their origins and structure.",
          ],
        },
        {
          heading: "The Historical Roots of Indian Dance Forms",
          content: [
            "The foundation of Indian classical dance lies in the Natya Shastra (200 BCE – 200 CE).",
            "It defines body movements, facial expressions (abhinaya), hand gestures (mudras), emotional theory (rasa), and stage techniques.",
            "Classical forms evolved from temple traditions, while folk dances emerged from agricultural and seasonal customs.",
          ],
        },
        {
          heading: "Categories of Indian Dance Forms",
          content: [
            "Indian classical dance",
            "Indian folk dance forms",
            "Tribal dance traditions",
            "Each category follows distinct structural principles.",
          ],
        },
        {
          heading: "The 8 Classical Dances of India (With Origin)",
          content: [
            "Bharatanatyam – Tamil Nadu",
            "Kathak – Uttar Pradesh",
            "Kathakali – Kerala",
            "Kuchipudi – Andhra Pradesh",
            "Odissi – Odisha",
            "Manipuri – Manipur",
            "Mohiniyattam – Kerala",
            "Sattriya – Assam",
          ],
        },
        {
          heading: "Conclusion",
          content: [
            "Indian dance forms reflect India’s cultural and civilizational depth.",
            "They remain living traditions influencing modern performance art.",
          ],
        },
      ],
    },

    {
      id: 2,
      title:
        "8 Classical Dances of India – Origin, History, and Cultural Significance",
      // date: "March 2026",
      sections: [
        {
          heading: "Introduction",
          content: [
            "The 8 classical dances of India represent centuries of codified artistic evolution.",
            "Each classical Indian dance follows strict technique, philosophical depth, and spiritual symbolism.",
          ],
        },
        {
          heading: "Foundation of Indian Classical Dance",
          content: [
            "The theoretical base comes from the Natya Shastra.",
            "It defines Angika (body movement), Vachika (speech/music), Aharya (costume), and Sattvika (emotion).",
            "Without this framework, a dance cannot qualify as classical.",
          ],
        },
        {
          heading: "Detailed Overview of the 8 Classical Dances of India",
          content: [
            "Bharatanatyam – Tamil Nadu",
            "Kathak – Uttar Pradesh",
            "Kathakali – Kerala",
            "Kuchipudi – Andhra Pradesh",
            "Odissi – Odisha",
            "Manipuri – Manipur",
            "Mohiniyattam – Kerala",
            "Sattriya – Assam",
          ],
        },
        {
          heading: "Cultural Significance",
          content: [
            "Preserve epics",
            "Represent devotional traditions",
            "Promote discipline and aesthetics",
            "Act as cultural ambassadors globally",
          ],
        },
        {
          heading: "Conclusion",
          content: [
            "The 8 classical dances of India stand as pillars of artistic heritage.",
            "Their philosophy continues to influence contemporary performance.",
          ],
        },
      ],
    },

    {
      id: 3,
      title:
        "Indian Folk and Tribal Dance Forms of India – Traditional Indian Dances Explained",
      // date: "April 2026",
      sections: [
        {
          heading: "Introduction",
          content: [
            "While classical dance is structured and codified, Indian folk dance forms are community-centered and celebratory.",
            "They evolve naturally with the people who perform them.",
          ],
        },
        {
          heading: "What Are Indian Folk Dance Forms?",
          content: [
            "They originate from rural communities and reflect agricultural life, religious festivals, marriage ceremonies, and seasonal transitions.",
            "Unlike classical dances, they are not bound by strict textual rules.",
          ],
        },
        {
          heading: "Major Indian Folk Dance Forms List with Origin",
          content: [
            "Bhangra – Punjab",
            "Garba – Gujarat",
            "Ghoomar – Rajasthan",
            "Bihu – Assam",
            "Lavani – Maharashtra",
            "Chhau – Eastern India",
          ],
        },
        {
          heading: "Tribal Dance Traditions",
          content: [
            "Santhal Dance – Jharkhand",
            "Gaddi Dance – Himachal Pradesh",
            "Toda Dance – Tamil Nadu",
            "These dances reflect nature worship and ancestral traditions.",
          ],
        },
        {
          heading: "Importance in Modern India",
          content: [
            "Promote tourism",
            "Preserve regional identity",
            "Inspire Bollywood choreography",
            "Encourage cultural education",
          ],
        },
        {
          heading: "Conclusion",
          content: [
            "Indian dance forms capture the spirit of the nation.",
            "From classical traditions to village celebrations, they remain culturally significant.",
          ],
        },
      ],
    },
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {blogs.map((blog) => (
          <article key={blog.id} className="mb-24">
            <h2 className="font-heading text-4xl text-brand mb-4">
              {blog.title}
            </h2>

            <p className="text-sm text-dark/50 mb-12">{blog.date}</p>

            <div className="space-y-16">
              {blog.sections.map((section, index) => (
                <div key={index}>
                  <h3 className="font-heading text-xl text-brand mb-4">
                    {section.heading}
                  </h3>

                  <div className="space-y-6 text-dark text-lg leading-relaxed">
                    {section.content.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="h-px w-full bg-dark/10 mt-20"></div>
          </article>
        ))}
      </div>
    </section>
  );
}