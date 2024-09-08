import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const galleryItems = [
  {
    before: "/before1.jpg",
    after: "/after1.jpg",
    alt: "Car detail before and after 1",
  },
  {
    before: "/before2.jpg",
    after: "/after2.jpg",
    alt: "Car detail before and after 2",
  },
  {
    before: "/before2.jpg",
    after: "/after2.jpg",
    alt: "Car detail before and after 3",
  },
];

interface GalleryItemProps {
  item: {
    before: string;
    after: string;
    alt: string;
  };
  index: number;
  isPriority: boolean;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  item,
  index,
  isPriority,
}) => {
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
          priority={isPriority}
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
          priority={isPriority}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
          <span className="text-white text-lg font-bold">After</span>
        </div>
      </div>
    </div>
  );
};

export const Gallery: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Our Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <GalleryItem
              key={index}
              item={item}
              index={index}
              isPriority={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
