import React from 'react';
import { GalleryItem } from './GalleryItem';

const galleryItems = [
  { before: '/before1.jpg', after: '/after1.jpg', alt: 'Car detail before and after 1' },
  { before: '/before2.jpg', after: '/after2.jpg', alt: 'Car detail before and after 2' },
  { before: '/before3.jpg', after: '/after3.jpg', alt: 'Car detail before and after 3' },
];

export const Gallery: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Our Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <GalleryItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};