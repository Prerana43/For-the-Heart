import React from "react";
export default function GalleryCard({ image }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md group">
      <img
        src={image}
        alt="Dance"
        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
      />
    </div>
  );
}
