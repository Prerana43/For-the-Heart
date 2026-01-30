import React from "react";
export default function PerformanceCategory({ title, videos }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">
        {title}
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden
                       bg-white/5 hover:scale-105
                       transition-transform duration-300"
          >
            <video
              src={`/videos/${video}`}
              controls
              className="w-full h-56 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
