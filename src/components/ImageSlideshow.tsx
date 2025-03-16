import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "./Card";

const images = [
  "https://res.cloudinary.com/dzuj9tj3y/image/upload/v1741610352/mesmerizer/event_pic/isgxizmwavktzeq1bx1q.jpg",
  "https://res.cloudinary.com/dzuj9tj3y/image/upload/v1741611087/mesmerizer/gallery_pic/gxewpsmbf6u0ewaqkjfg.jpg",
  "https://res.cloudinary.com/dzuj9tj3y/image/upload/v1741610358/mesmerizer/event_pic/kaqseb8lgrcgymfajbh8.jpg",
  "https://res.cloudinary.com/dzuj9tj3y/image/upload/v1741611378/mesmerizer/gallery_pic/qqde6nphkzzhyephvig3.jpg",
  "https://res.cloudinary.com/dzuj9tj3y/image/upload/v1741608271/mesmerizer/event_pic/feiijqiptidiuozz9e1u.jpg",
  "https://res.cloudinary.com/dzuj9tj3y/image/upload/v1741608229/mesmerizer/event_pic/aotgc0if6gaqam3htysf.jpg",
  "https://res.cloudinary.com/dzuj9tj3y/image/upload/v1741611111/mesmerizer/gallery_pic/lvvxktnnoh10znoqflza.jpg",
  "https://res.cloudinary.com/dzuj9tj3y/image/upload/v1741608223/mesmerizer/event_pic/hzb5kxwqchrcn3xgwtde.jpg",
  "https://res.cloudinary.com/dzuj9tj3y/image/upload/v1741608267/mesmerizer/event_pic/vonhcvgvrzhywhte7lma.jpg",
  "https://res.cloudinary.com/dzuj9tj3y/image/upload/v1741611101/mesmerizer/gallery_pic/qsna00adrc65o8yzwpn0.jpg",
  "https://res.cloudinary.com/dzuj9tj3y/image/upload/v1741608225/mesmerizer/event_pic/ep95alcvvarrfbta8fkm.jpg",
  "https://res.cloudinary.com/dzuj9tj3y/image/upload/v1741608225/mesmerizer/event_pic/zoyfdmousiyj4uoqjqst.jpg",
  "https://res.cloudinary.com/dzuj9tj3y/image/upload/v1741611080/mesmerizer/gallery_pic/w3pixehdn53hvuuqedxw.jpg",
  "https://res.cloudinary.com/dzuj9tj3y/image/upload/v1741608273/mesmerizer/event_pic/zwmhou4c3mbfhfzdwshg.jpg",
  "https://res.cloudinary.com/dzuj9tj3y/image/upload/v1741610358/mesmerizer/event_pic/om7ckomgmxrtyqnvvxfe.jpg",
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
            key={image}
            className="absolute top-0 left-0 w-full h-full transition-all duration-500 ease-out"
            style={{
              ...getSlideStyle(index),
            }}
          >
            <Card className="w-full h-full rounded-3xl hover:shadow-none ">
              <img
                src={image}
                alt="Slideshow"
                className="w-full h-full rounded-2xl shadow-2xl object-cover object-center"
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
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 max-sm:w-[85dvw] items-center justify-center">
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
