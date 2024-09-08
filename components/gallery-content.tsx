import React, { useState } from 'react';
import Image from 'next/image';
import { Modal } from './ui/modal';

interface GalleryItem {
  before: string;
  after: string;
  alt: string;
}

interface GalleryContentProps {
  items: GalleryItem[];
}

export function GalleryContent({ items }: GalleryContentProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <GalleryItem 
            key={index} 
            item={item} 
            openModal={openModal} 
            isPriority={index < 2}
          />
        ))}
      </div>
      <Modal isOpen={!!selectedImage} onClose={closeModal}>
        {selectedImage && (
          <div className="relative w-full" style={{ height: '80vh' }}>
            <Image
              src={selectedImage}
              alt="Enlarged view"
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        )}
      </Modal>
    </>
  );
}

interface GalleryItemProps {
  item: GalleryItem;
  openModal: (imageSrc: string) => void;
  isPriority: boolean;
}

function GalleryItem({ item, openModal, isPriority }: GalleryItemProps) {
  return (
    <div className="space-y-4">
      <div 
        className="relative aspect-video overflow-hidden group cursor-pointer"
        style={{ height: '200px' }}
        onClick={() => openModal(item.before)}
      >
        <Image 
          src={item.before} 
          alt={`Before - ${item.alt}`} 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 group-hover:scale-110"
          priority={isPriority}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
          <span className="text-white text-lg font-bold">Before</span>
        </div>
      </div>
      <div 
        className="relative aspect-video overflow-hidden group cursor-pointer"
        style={{ height: '200px' }}
        onClick={() => openModal(item.after)}
      >
        <Image 
          src={item.after} 
          alt={`After - ${item.alt}`} 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 group-hover:scale-110"
          priority={isPriority}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
          <span className="text-white text-lg font-bold">After</span>
        </div>
      </div>
    </div>
  );
}