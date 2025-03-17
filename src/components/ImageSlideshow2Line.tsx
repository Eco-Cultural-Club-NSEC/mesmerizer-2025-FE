import { useState, useEffect, useCallback, useMemo } from "react";
import { X } from "lucide-react";
import { images } from "../images";
import Card from "./Card";

function ImageSlideshow2({ className }: { className?: string }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [scrollPosition1, setScrollPosition1] = useState(0);
  const [scrollPosition2, setScrollPosition2] = useState(0);

  // Calculate the total width of one set of images
  const imageSetWidth = useMemo(() => {
    const imageWidth = 300; // Width of each image
    const gap = 16; // Gap between images (4 units in Tailwind = 16px)
    return images.length * (imageWidth + gap);
  }, []);

  const moveImages = useCallback(() => {
    // First row moves left (negative direction)
    setScrollPosition1((prev) => {
      const newPos = prev + 1;
      return newPos >= imageSetWidth ? 0 : newPos;
    });

    // Second row moves right (positive direction but needs negative starting point)
    setScrollPosition2((prev) => {
      const newPos = prev + 1;
      // When we reach the end, reset to a negative position to maintain the right-moving effect
      return newPos >= 0 ? -imageSetWidth : newPos;
    });
  }, [imageSetWidth]);

  // Initialize the second row's position to start off-screen in the opposite direction
  useEffect(() => {
    setScrollPosition2(-imageSetWidth);
  }, [imageSetWidth]);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      moveImages();
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [moveImages]);

  const renderImages = () => {
    // Create 4 sets of images to ensure smooth transition
    const sets = [...images, ...images, ...images, ...images];
    return sets.map((img, i) => (
      <Card key={`${img}-${i}`} className="hover:shadow-none">
        <div
          className="w-[300px] h-[300px] flex-shrink-0 cursor-pointer overflow-hidden rounded-lg"
          onClick={() => setSelectedImage(img)}
        >
          <img
            src={`${img}`}
            alt={`Landscape ${i}`}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            loading="eager"
          />
        </div>
      </Card>
    ));
  };

  return (
    <div
      className={`min-h-screen text-white overflow-hidden flex flex-col items-center justify-center mt-8 w-full ${className}`}
    >
      {/* Top moving line */}
      <div className="h-content overflow-hidden">
        <div
          className="flex gap-4 will-change-transform"
          style={{
            transform: `translateX(-${scrollPosition1}px)`,
            width: `${imageSetWidth * 4}px`, // Increased to 4 sets
            transition: "transform 0.1s linear",
          }}
        >
          {renderImages()}
        </div>
      </div>

      {/* Bottom moving line - now moving in opposite direction */}
      <div className="h-content mt-10  w-full overflow-hidden">
        <div
          className="flex gap-4 will-change-transform"
          style={{
            transform: `translateX(${scrollPosition2}px)`,
            width: `${imageSetWidth * 4}px`, // Increased to 4 sets
            transition: "transform 0.1s linear",
          }}
        >
          {renderImages()}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Selected landscape"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
}

export default ImageSlideshow2;
