import React from "react";
export default function GalleryToggle({ active, setActive }) {
  return (
    <div className="flex justify-center gap-6">
      <button
        onClick={() => setActive("moments")}
        className={`px-6 py-2 rounded-full transition
          ${
            active === "moments"
              ? "bg-dark text-white"
              : "border border-white/30 hover:bg-white/10"
          }`}
      >
        Moments
      </button>

      <button
        onClick={() => setActive("performances")}
        className={`px-6 py-2 rounded-full transition
          ${
            active === "performances"
              ? "bg-dark text-white"
              : "border border-white/30 hover:bg-white/10"
          }`}
      >
        Performances
      </button>
    </div>
  );
}
