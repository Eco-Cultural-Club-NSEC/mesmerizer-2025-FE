import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4',
    category: 'music',
    title: 'Battle of Bands 2023',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad',
    category: 'dance',
    title: 'Dance Competition',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
    category: 'theatre',
    title: 'Theatre Performance',
  },
  // Add more images...
];

const categories = Array.from(new Set(galleryImages.map(img => img.category)));

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    setSelectedImage(galleryImages[currentImageIndex].src);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    setSelectedImage(galleryImages[currentImageIndex].src);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 pattern-grid"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black mb-4 gradient-text">Gallery</h1>
          <p className="text-xl">Relive the moments from previous years</p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center space-x-4 mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory('all')}
            className={`neo-button ${selectedCategory === 'all' ? 'bg-[rgb(var(--color-primary))] text-white' : ''}`}
          >
            All
          </motion.button>
          {categories.map(category => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`neo-button capitalize ${
                selectedCategory === category ? 'bg-[rgb(var(--color-primary))] text-white' : ''
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="gallery-card cursor-pointer group"
              onClick={() => {
                setSelectedImage(image.src);
                setCurrentImageIndex(galleryImages.findIndex(img => img.id === image.id));
              }}
            >
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <Camera className="mx-auto mb-2 text-white" size={32} />
                    <p className="text-white text-lg font-bold px-4">
                      {image.title}
                    </p>
                    <span className="inline-block mt-2 px-3 py-1 bg-[rgb(var(--color-secondary))] text-black text-sm font-bold capitalize">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 text-white p-2 neo-button"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 neo-button"
                onClick={handlePrevImage}
              >
                <ChevronLeft size={24} />
              </button>
              
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                src={selectedImage}
                alt="Gallery"
                className="max-w-full max-h-[90vh] object-contain"
              />
              
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 neo-button"
                onClick={handleNextImage}
              >
                <ChevronRight size={24} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Gallery;