"use client";

import { Bike, ChevronRight, ChevronLeft } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const models = [
  {
    id: "w1",
    name: "Woom Go 1",
    wheel: '12"',
    color: "#EAB308",
    images: [
      "/woom/woom_go_1/woom_go_1_1.avif",
      "/woom/woom_go_1/woom_go_1_2.avif",
      "/woom/woom_go_1/woom_go_1_3.avif",
      "/woom/woom_go_1/woom_go_1_4.avif",
      "/woom/woom_go_1/woom_go_1_5.avif",
      "/woom/woom_go_1/woom_go_1_6.avif",
      "/woom/woom_go_1/woom_go_1_7.avif",
      "/woom/woom_go_1/woom_go_1_8.avif",
      "/woom/woom_go_1/woom_go_1_9.avif",
      "/woom/woom_go_1/woom_go_1_10.avif"
    ],
  },
  {
    id: "w2",
    name: "Woom Go 2",
    wheel: '14"',
    color: "#3B82F6",
    images: [
      "/woom/woom_go_2/woom_go_2_1.avif",
      "/woom/woom_go_2/woom_go_2_2.avif",
      "/woom/woom_go_2/woom_go_2_3.avif",
      "/woom/woom_go_2/woom_go_2_4.avif",
      "/woom/woom_go_2/woom_go_2_5.avif",
      "/woom/woom_go_2/woom_go_2_6.avif",
      "/woom/woom_go_2/woom_go_2_7.avif",
      "/woom/woom_go_2/woom_go_2_8.avif",
      "/woom/woom_go_2/woom_go_2_9.avif",
      "/woom/woom_go_2/woom_go_2_10.avif",
      "/woom/woom_go_2/woom_go_2_11.avif"
    ],
  },
  {
    id: "w3",
    name: "Woom Go 3",
    wheel: '16"',
    color: "#EC4899",
    images: [
      "/woom/woom_go_3/woom_go_3_1.avif",
      "/woom/woom_go_3/woom_go_3_2.avif",
      "/woom/woom_go_3/woom_go_3_3.avif",
      "/woom/woom_go_3/woom_go_3_4.avif",
      "/woom/woom_go_3/woom_go_3_5.avif",
      "/woom/woom_go_3/woom_go_3_6.avif",
      "/woom/woom_go_3/woom_go_3_7.avif",
      "/woom/woom_go_3/woom_go_3_8.avif",
      "/woom/woom_go_3/woom_go_3_9.avif",
      "/woom/woom_go_3/woom_go_3_10.avif",
      "/woom/woom_go_3/woom_go_3_11.avif",
      "/woom/woom_go_3/woom_go_3_12.avif"

    ],
  },
  {
    id: "w4",
    name: "Woom Go 4",
    wheel: '20"',
    color: "#EF4444",
    images: [
      "/woom/woom_go_4/woom_go_4_1.avif",
      "/woom/woom_go_4/woom_go_4_2.avif",
      "/woom/woom_go_4/woom_go_4_3.avif",
      "/woom/woom_go_4/woom_go_4_4.avif",
      "/woom/woom_go_4/woom_go_4_5.avif",
      "/woom/woom_go_4/woom_go_4_6.avif",
      "/woom/woom_go_4/woom_go_4_7.avif",
      "/woom/woom_go_4/woom_go_4_8.avif",
      "/woom/woom_go_4/woom_go_4_9.avif",
      "/woom/woom_go_4/woom_go_4_10.avif",
      "/woom/woom_go_4/woom_go_4_11.avif",
      "/woom/woom_go_4/woom_go_4_12.avif",
      "/woom/woom_go_4/woom_go_4_13.avif",
      "/woom/woom_go_4/woom_go_4_14.avif"
    ]
  },
];

function HoverCarousel({ images, alt }: { images: string[], alt: string }) {
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
      {/* Image optimized */}
      <Image
        src={images[currentIndex]}
        alt={alt}
        fill
        className="object-contain transition-transform duration-500 hover:scale-105 drop-shadow-md p-4"
      />
      {images.length > 1 && (
        <>
          {/* Flechas */}
          <button
            onClick={goToPrev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md text-gray-800 opacity-0 group-hover/carousel:opacity-100 transition-opacity z-10"
            aria-label="Foto anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md text-gray-800 opacity-0 group-hover/carousel:opacity-100 transition-opacity z-10"
            aria-label="Siguiente foto"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
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

export function WoomPage() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero */}
      <div className="relative bg-[#0E0E12] overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ background: "radial-gradient(ellipse at 70% 50%, #A78BFA 0%, transparent 60%)" }}
        />
        <div className="relative max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-2 text-[#A78BFA] text-sm mb-4">
              <Bike size={16} />
              <span>{t.nav.woom}</span>
            </div>
            <h1 className="text-white text-4xl font-bold mb-3">{t.woom.header.title}</h1>
            <p className="text-white/60 max-w-xl mb-8">
              {t.woom.header.subtitle}
            </p>
            <a
              href="https://wa.me/34612477841"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0E0E12] px-6 py-3.5 rounded-lg font-bold transition-all shadow-md hover:shadow-lg mt-2"
            >
              {/* WhatsApp Icon */}
              <Image src="/whatsapp-glyph-black.svg" alt="WhatsApp" width={20} height={20} />
              {t.woom.header.cta}
            </a>
          </div>
          {/* Montaje de imágenes - Estilo Bento Grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-4 h-80 md:h-[26rem] w-full mt-8 md:mt-0">
            {/* Imagen Principal (Izquierda, doble altura) */}
            <div className="col-span-1 row-span-2 rounded-[2rem] overflow-hidden relative shadow-lg">
              {/* Image optimized */}
              <Image src="/woom/woom_0.jpeg" alt="Woom 1" fill className="object-cover" priority />
            </div>

            {/* Imagen 2 (Arriba Derecha) */}
            <div className="col-span-1 row-span-1 rounded-[2rem] overflow-hidden relative shadow-lg">
              {/* Image optimized */}
              <Image src="/woom/woom_0_1.jpeg" alt="Woom 2" fill className="object-cover" priority />
            </div>

            {/* Imagen 3 (Abajo Derecha) */}
            <div className="col-span-1 row-span-1 rounded-[2rem] overflow-hidden relative shadow-lg">
              {/* Image optimized */}
              <Image src="/woom/Sin título.jpeg" alt="Woom 3" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>

      {/* Globos de Bicis (Catálogo) */}
      <section className="py-24 px-4 bg-gray-50 min-h-screen">
        <div className="max-w-5xl mx-auto space-y-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0E0E12] text-center">
            {t.woom.range}
          </h2>
          {models.map((model, index) => {
            const modelData = t.woom.models[model.id as keyof typeof t.woom.models];
            // Alternamos el layout en zigzag para darle más dinamismo
            const isEven = index % 2 === 0;

            return (
              <div
                key={model.id}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-100 ${!isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Carrusel Hover */}
                <div className="w-full md:w-1/2 aspect-[4/3] bg-[#F9F9FB] rounded-[2.5rem] p-8 relative flex items-center justify-center">
                  <HoverCarousel images={model.images} alt={model.name} />
                </div>

                {/* Información y Descripción */}
                <div className="w-full md:w-1/2 space-y-6">
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-sm font-bold shadow-sm"
                      style={{ backgroundColor: model.color + '20', color: model.color }}
                    >
                      {modelData.type}
                    </span>
                    <span className="text-sm font-semibold text-gray-400 border border-gray-200 px-3 py-1 rounded-full">
                      {model.wheel}
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-extrabold text-[#0E0E12] tracking-tight">{model.name}</h2>

                  <div className="space-y-4">
                    <p className="text-lg font-medium text-[#0E0E12]">
                      {modelData.age}
                    </p>
                    <p className="text-xl text-gray-500 leading-relaxed">
                      {modelData.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
