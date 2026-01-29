import React from "react";
import GalleryCarousel from "../components/GalleryCarousel";

export default function Gallery() {
  return (
    <section className="py-20 px-6">
      <h2 className="font-heading text-4xl text-brand text-center mb-12">
        Gallery
      </h2>
      <GalleryCarousel />
    </section>
  );
}
