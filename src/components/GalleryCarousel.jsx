import React from "react";
import GalleryCard from "./GalleryCard";

const images = [
  "src/assets/For_the_Heart.jpeg",
  "src/assets/For_the_Heart.jpeg",
  "src/assets/For_the_Heart.jpeg",
  "src/assets/For_the_Heart.jpeg",
];

export default function GalleryCarousel() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {images.map((img, i) => (
        <GalleryCard key={i} image={img} />
      ))}
    </div>
  );
}
