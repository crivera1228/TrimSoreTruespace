import React from "react";
import Image from "next/image";

const galleryItems = [
  {
    before: "/before-1.jpg",
    after: "/after-1.jpg",
    alt: "Car detail before and after 1",
  },
  {
    before: "/before-2.jpg",
    after: "/after-2.jpg",
    alt: "Car detail before and after 2",
  },
  {
    before: "/before-3.jpg",
    after: "/after-3.jpg",
    alt: "Car detail before and after 3",
  },
];

export function Gallery() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Our Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div key={index} className="space-y-4">
              <div className="relative aspect-video">
                <Image
                  src={item.before}
                  alt={`Before - ${item.alt}`}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">Before</span>
                </div>
              </div>
              <div className="relative aspect-video">
                <Image
                  src={item.after}
                  alt={`After - ${item.alt}`}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">After</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
