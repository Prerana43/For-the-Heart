import logo from "../assets/logo.png";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const images = [
  "src/images/image1.jpeg",
  "src/images/image2.jpeg",
  "src/images/image3.jpeg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-soft">
      <div className="relative w-full h-[100vh] overflow-hidden shadow-xl">
        {/* Slider */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="min-w-full h-full relative">
              <img
                src={img}
                alt="Dance slide"
                className="w-full h-full object-cover"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6 text-white">
          {/* <img src={logo} alt="For The Heart" className="w-64 mb-6" /> */}

          <h1 className="font-heading text-2xl md:text-5xl mb-4">
            For the goodness. For the passion. For the heart.
          </h1>

          <p className="max-w-xl text-white/90 mb-8">
            A crew driven by passion, rhythm and emotion.
          </p>
          


          <div className="flex gap-4">
            <Link
  to="/gallery#performances"
  className="bg-brand text-white px-6 py-3 rounded-full hover:bg-accent transition"
>
  Watch Performances
</Link>

            
            <a
              href="https://www.instagram.com/this_fortheheart"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
            >
              Follow Us
            </a>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
        >
          ›
        </button>
      </div>
    </section>
  );
}
