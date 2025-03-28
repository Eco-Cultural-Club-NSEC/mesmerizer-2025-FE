import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "./Card";

const images = [
  "https://res.cloudinary.com/dnttjhsvd/image/upload/v1743149808/mesmerizer/webp/first_slider/mje9z1emjq8jdcfxxzpp.webp",
  "https://res.cloudinary.com/dnttjhsvd/image/upload/v1743149809/mesmerizer/webp/first_slider/rylwahxmsyozl8bnakwl.webp",
  "https://res.cloudinary.com/dnttjhsvd/image/upload/v1743149811/mesmerizer/webp/first_slider/q3s5voyqiczgva4vhmrr.webp",
  "https://res.cloudinary.com/dnttjhsvd/image/upload/v1743149814/mesmerizer/webp/first_slider/culrtiyoesvj7q1ktvgd.webp",
  "https://res.cloudinary.com/dnttjhsvd/image/upload/v1743149817/mesmerizer/webp/first_slider/wvmtn4dky1mozzdkrhd0.webp",
  "https://res.cloudinary.com/dnttjhsvd/image/upload/v1743149818/mesmerizer/webp/first_slider/kg5rqtbjdv487b9ffaee.webp",
  "https://res.cloudinary.com/dnttjhsvd/image/upload/v1743149819/mesmerizer/webp/first_slider/do3bnq90bmkshsbjdc46.webp",
  "https://res.cloudinary.com/dnttjhsvd/image/upload/v1743149821/mesmerizer/webp/first_slider/dc4g5tud3ql9brzgswuc.webp",
  "https://res.cloudinary.com/dnttjhsvd/image/upload/v1743149822/mesmerizer/webp/first_slider/gg48phj59nmq3w4vcnsu.webp",
  "https://res.cloudinary.com/dnttjhsvd/image/upload/v1743149824/mesmerizer/webp/first_slider/sijtxqhixyfy0zxdifta.webp",
  "https://res.cloudinary.com/dnttjhsvd/image/upload/v1743149825/mesmerizer/webp/first_slider/vdldptuqjybv22gnaord.webp",
  "https://res.cloudinary.com/dnttjhsvd/image/upload/v1743149826/mesmerizer/webp/first_slider/geksip1d9it6ovdnawuy.webp",
  "https://res.cloudinary.com/dnttjhsvd/image/upload/v1743149827/mesmerizer/webp/first_slider/zhyavtcyl4hj3zgkizts.webp",
  "https://res.cloudinary.com/dnttjhsvd/image/upload/v1743149828/mesmerizer/webp/first_slider/hdrzwawj2o931ipkpciu.webp",
  "https://res.cloudinary.com/dnttjhsvd/image/upload/v1743149813/mesmerizer/webp/first_slider/vm6zfeczckyq9qux616z.webp",
];

const ImageSlideshow = ({ className }: { className?: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const getSlideStyle = (index: number) => {
    const position = index - currentIndex;

    // Handle wrap-around for continuous effect
    if (position < -2)
      return { transform: "translateX(500%)", opacity: 0, zIndex: 0 };
    if (position > 2)
      return { transform: "translateX(-500%)", opacity: 0, zIndex: 0 };

    const styles = {
      transform: `translateX(${position * 100}%) scale(${
        Math.abs(position) === 0 ? 1 : 0.8
      })`,
      opacity: Math.abs(position) <= 1 ? 1 : 0.4,
      zIndex: 10 - Math.abs(position),
      filter: `blur(${Math.abs(position) * 2}px)`,
    };

    return styles;
  };

  return (
    <div
      className={`relative w-full max-w-7xl mx-auto h-[600px] overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute top-0 left-0 w-full h-full transition-all duration-500 ease-out"
            style={{
              ...getSlideStyle(index),
            }}
          >
            <Card className="w-full h-full rounded-3xl hover:shadow-none ">
              <img
                src={`${image}`}
                alt="Slideshow"
                className="w-full h-full rounded-xl shadow-2xl object-cover object-center"
              />
            </Card>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-20 focus:outline-none border-0"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-20 border-0"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Progress Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 max-sm:w-[85dvw] items-center justify-center max-sm:hidden">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "w-8 bg-white"
                : "w-4 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;
