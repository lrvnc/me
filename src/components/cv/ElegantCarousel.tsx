
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type ImageType = {
  src: string;
  alt: string;
};

type ElegantCarouselProps = {
  images: ImageType[];
};

const variants = {
  enter: {
    opacity: 0,
  },
  center: {
    zIndex: 1,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    opacity: 0,
  },
};

export const ElegantCarousel: React.FC<ElegantCarouselProps> = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const imageIndex = page;

  const paginate = useCallback((newDirection: number) => {
    setPage(prev => [(prev[0] + newDirection + images.length) % images.length, newDirection]);
  }, [images.length]);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 4000); // Autoplay every 4 seconds
    return () => clearInterval(interval);
  }, [isHovered, paginate]);

  const setSlide = (newIndex: number) => {
    const newDirection = newIndex > imageIndex ? 1 : -1;
    setPage([newIndex, newDirection]);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div
      className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex].src}
          alt={images[imageIndex].alt}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 0.5 },
          }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>

      <button
        onClick={() => paginate(-1)}
        className="absolute top-1/2 left-3 -translate-y-1/2 z-10 p-2 bg-black/30 rounded-full text-white/70 hover:text-white hover:bg-black/50 transition-all opacity-0 group-hover:opacity-100"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute top-1/2 right-3 -translate-y-1/2 z-10 p-2 bg-black/30 rounded-full text-white/70 hover:text-white hover:bg-black/50 transition-all opacity-0 group-hover:opacity-100"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300",
              i === imageIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white"
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
