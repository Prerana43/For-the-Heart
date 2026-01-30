import React from "react";
import m1 from "../assets/moments/m1.jpeg";
import m2 from "../assets/moments/m2.jpeg";
import m3 from "../assets/moments/m3.jpeg";
import m4 from "../assets/moments/m4.jpeg";
import m5 from "../assets/moments/m5.jpeg";
import m6 from "../assets/moments/m6.jpeg";
import m7 from "../assets/moments/m7.jpeg";
import m8 from "../assets/moments/m8.jpeg";
import m9 from "../assets/moments/m9.jpeg";
import m10 from "../assets/moments/m10.jpeg";
import m11 from "../assets/moments/m11.jpeg";
import m12 from "../assets/moments/m12.jpeg";
import m13 from "../assets/moments/m13.jpeg";
import m14 from "../assets/moments/m14.jpeg";
import m15 from "../assets/moments/m15.jpeg";






const images = [m1, m2, m3, m4, m5, m6, m7, m8, m9 ,m10, m11, m12, m13, m14, m15];

export default function MomentsSection() {
  return (
    <div className="grid sm:grid-cols-5 md:grid-cols-5 gap-6">
      {images.map((img, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl group"
        >
          <img
            src={img}
            alt="Dance moment"
            className="w-full h-64 object-cover
                       group-hover:scale-110 transition duration-500"
          />
        </div>
      ))}
    </div>
  );
}
