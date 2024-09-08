import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface GalleryItemProps {
  item: {
    before: string;
    after: string;
    alt: string;
  };
  index: number;
}

export const GalleryItem: React.FC<GalleryItemProps> = ({ item, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`space-y-4 transition-opacity duration-500 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-video overflow-hidden group cursor-pointer">
        <Image
          src={item.before}
          alt={`Before - ${item.alt}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
          <span className="text-white text-lg font-bold">Before</span>
        </div>
      </div>
      <div className="relative aspect-video overflow-hidden group cursor-pointer">
        <Image
          src={item.after}
          alt={`After - ${item.alt}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
          <span className="text-white text-lg font-bold">After</span>
        </div>
      </div>
    </div>
  );
};