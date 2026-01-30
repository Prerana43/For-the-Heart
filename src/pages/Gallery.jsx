import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import GalleryToggle from "../components/GalleryToggle";
import MomentsSection from "../components/MomentsSection";
import PerformancesSection from "../components/PerformancesSection";

export default function Gallery() {
  const location = useLocation();
  const [active, setActive] = useState("moments");

  useEffect(() => {
    if (location.hash === "#performances") {
      setActive("performances");

      // wait for render, then scroll
      setTimeout(() => {
        const el = document.getElementById("performances");
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <section className="px-6 py-16 min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold text-center mb-10">
        Gallery
      </h1>

      <GalleryToggle active={active} setActive={setActive} />

      <div className="mt-12">
        {active === "moments" ? (
          <MomentsSection />
        ) : (
          <PerformancesSection />
        )}
      </div>
    </section>
  );
}
