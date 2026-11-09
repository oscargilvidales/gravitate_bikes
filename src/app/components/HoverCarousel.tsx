"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

export function HoverCarousel({ images, alt }: { images: string[], alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isHovered || isPaused || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1200); // Cambia de foto cada 1.2 segundos

    return () => clearInterval(interval);
  }, [isHovered, isPaused, images.length]);

  const goToPrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsPaused(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsPaused(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="relative w-full h-full cursor-pointer flex items-center justify-center group/carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPaused(false);
        setCurrentIndex(0); // Vuelve a la primera foto al quitar el ratón
      }}
    >
      <Image
        src={images[currentIndex]}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 400px"
        className="object-contain transition-transform duration-500 hover:scale-105 drop-shadow-md p-4"
      />
      {images.length > 1 && (
        <>
          {/* Flechas */}
          <button
            onClick={goToPrev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md text-gray-800 opacity-0 group-hover/carousel:opacity-100 focus-visible:opacity-100 transition-opacity z-10"
            aria-label="Foto anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md text-gray-800 opacity-0 group-hover/carousel:opacity-100 focus-visible:opacity-100 transition-opacity z-10"
            aria-label="Siguiente foto"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div aria-hidden="true" className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-6 bg-[#A78BFA]' : 'w-2 bg-gray-300'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
