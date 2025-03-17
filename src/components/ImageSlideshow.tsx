import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "./Card";

const images = [
  "https://res.cloudinary.com/dzuj9tj3y/image/upload/v1742223453/mesmerizer/webp/s94uldwrsyuo5rwswtrl.webp",
  "https://res.cloudinary.com/dzuj9tj3y/image/upload/v1742223596/mesmerizer/webp/g28zc4efs3wpbtd8ttrh.webp",
  "https://res.cloudinary.com/dzuj9tj3y/image/upload/v1742223447/mesmerizer/webp/zs1kiw5u7jnreereeegb.webp",
  "https://res.cloudinary.com/dzuj9tj3y/image/upload/v1742223457/mesmerizer/webp/lxquatqshwoensb7a8bu.webp",
  "https://res.cloudinary.com/dzuj9tj3y/image/upload/v1742223478/mesmerizer/webp/vkowgc8v0urqwdi62fgg.webp",
  "https://res.cloudinary.com/dzuj9tj3y/image/upload/v1742223578/mesmerizer/webp/ykfj4o2u0v61nnndo50h.webp",
  "https://res.cloudinary.com/dzuj9tj3y/image/upload/v1742223467/mesmerizer/webp/fjei8pxernmzqxt9v1j0.webp",
  "https://res.cloudinary.com/dzuj9tj3y/image/upload/v1742223491/mesmerizer/webp/wa4xmqaoz1eqtuwwduzs.webp",
  "https://res.cloudinary.com/dzuj9tj3y/image/upload/v1742223506/mesmerizer/webp/lhcri3simimkrk8rbbcj.webp",
  "https://res.cloudinary.com/dzuj9tj3y/image/upload/v1742223472/mesmerizer/webp/clevl8ezmz5ukwlijldf.webp",
  "https://res.cloudinary.com/dzuj9tj3y/image/upload/v1742223462/mesmerizer/webp/r6gxkhwt7vvunq25zp3e.webp",
  "https://res.cloudinary.com/dzuj9tj3y/image/upload/v1742223560/mesmerizer/webp/gjsejcjfgx8hahdpt7nt.webp",
  "https://res.cloudinary.com/dzuj9tj3y/image/upload/v1742223495/mesmerizer/webp/ots4a8vk4ahqr7fn1sdq.webp",
  "https://res.cloudinary.com/dzuj9tj3y/image/upload/v1742223488/mesmerizer/webp/s7cm7zggpbzf02nsx72b.webp",
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
