import React from "react";
import PerformanceCategory from "./PerformancesCategory";

const performanceData = {
  "Boogie Thrill": ["boogiethrills1.mp4", "boogiethrills2.mp4"],
  "Heats": ["heats1.mp4", "heats2.mp4"],
  "Alumni Meet": ["alumni1.mp4", "alumni2.mp4", "alumni3.mp4"],
  "Orientation": ["orientation1.mp4", "orientation2.mp4"],
  "Flashmob": ["flashmob1.mp4"],
  "Independence Day": ["alumni1.mp4"],
};

export default function PerformancesSection() {
  return (
    <div id = "performances" className="space-y-14">
      {Object.entries(performanceData).map(
        ([title, videos]) => (
          <PerformanceCategory
            key={title}
            title={title}
            videos={videos}
          />
        )
      )}
    </div>
  );
}
