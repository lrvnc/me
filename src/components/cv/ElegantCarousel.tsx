
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
import { cn } from '@/lib/utils';

type ImageType = {
  src: string;
  alt: string;
};

type ElegantCarouselProps = {
  images: ImageType[];
};

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.8,
    filter: 'blur(4px)',
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.8,
    filter: 'blur(4px)',
  }),
};

export const ElegantCarousel: React.FC<ElegantCarouselProps> = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = useCallback((newDirection: number) => {
    setPage(prev => [(prev[0] + newDirection + images.length) % images.length, newDirection]);
  }, [images.length]);

  const imageIndex = page;
  
  const getSideImageIndex = (offset: number) => {
    return (imageIndex + offset + images.length) % images.length;
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 4000);
    return () => clearInterval(interval);
  }, [paginate, isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const togglePause = () => setIsPaused(!isPaused);

  if (!images || images.length === 0) {
    return null;
  }

  const prevImageIndex = getSideImageIndex(-1);
  const nextImageIndex = getSideImageIndex(1);

  return (
    <div 
      className="relative w-full h-[300px] md:h-[400px] flex justify-center items-center overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.img
        key={`prev-${prevImageIndex}`}
        src={images[prevImageIndex].src}
        alt={images[prevImageIndex].alt}
        className="absolute left-0 w-[45%] h-auto max-h-[80%] object-cover rounded-lg cursor-pointer z-0 opacity-40 blur-sm scale-75 translate-x-1/4"
        onClick={() => paginate(-1)}
      />
      <motion.img
        key={`next-${nextImageIndex}`}
        src={images[nextImageIndex].src}
        alt={images[nextImageIndex].alt}
        className="absolute right-0 w-[45%] h-auto max-h-[80%] object-cover rounded-lg cursor-pointer z-0 opacity-40 blur-sm scale-75 -translate-x-1/4"
        onClick={() => paginate(1)}
      />

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
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
            filter: { duration: 0.3 },
            scale: { duration: 0.3 }
          }}
          className="absolute w-[60%] h-auto max-h-full object-cover rounded-lg shadow-2xl z-10"
        />
      </AnimatePresence>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
        <button
            onClick={() => paginate(-1)}
            className="p-1 rounded-full text-white/70 hover:text-white transition-colors"
            aria-label="Previous image"
        >
            <ArrowLeft size={20} />
        </button>
        {images.map((_, i) => (
            <button
                key={i}
                onClick={() => setPage([i, i > imageIndex ? 1 : -1])}
                className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    i === imageIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white"
                )}
            />
        ))}
        <button
            onClick={() => paginate(1)}
            className="p-1 rounded-full text-white/70 hover:text-white transition-colors"
            aria-label="Next image"
        >
            <ArrowRight size={20} />
        </button>
      </div>
      
      <button 
        onClick={togglePause}
        className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
      >
        {isPaused ? <Play size={20} /> : <Pause size={20} />}
      </button>
    </div>
  );
};
