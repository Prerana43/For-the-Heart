import React from "react";
export default function Contact() {
  return (
    <section className="py-20 px-6">
      <form className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow">
        <h2 className="font-heading text-3xl text-brand mb-6">
          Get in Touch
        </h2>

        <input
          className="w-full p-3 mb-4 border rounded"
          placeholder="Name"
        />
        <input
          className="w-full p-3 mb-4 border rounded"
          placeholder="Email"
        />
        <textarea
          className="w-full p-3 mb-4 border rounded"
          placeholder="Message"
        />

        <button className="w-full bg-brand text-white py-3 rounded-full hover:bg-accent transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
