import { Bike } from "lucide-react";
import { getDictionary, type Locale } from "@/i18n/server";
import Link from "next/link";
import Image from "next/image";
import { HoverCarousel } from "@/app/components/HoverCarousel";

const models = [
  {
    id: "w1",
    name: "Woom Go 1",
    wheel: '12"',
    color: "#EAB308",
    textColor: "#854D0E",
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
    textColor: "#1D4ED8",
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
    textColor: "#BE185D",
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
    textColor: "#B91C1C",
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

export async function WoomPage({ lang }: { lang: Locale }) {
  const t = await getDictionary(lang);

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
              <Image src="/whatsapp-glyph-black.svg" alt="" width={20} height={20} />
              {t.woom.header.cta}
            </a>
          </div>
          {/* Montaje de imágenes - Estilo Bento Grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-4 h-80 md:h-[26rem] w-full mt-8 md:mt-0">
            {/* Imagen Principal (Izquierda, doble altura) */}
            <div className="col-span-1 row-span-2 rounded-[2rem] overflow-hidden relative shadow-lg">
              {/* Image optimized */}
              <Image src="/woom/woom_0.jpeg" alt={t.alts.woom1} fill sizes="(max-width: 768px) 50vw, 288px" className="object-cover" preload fetchPriority="high" />
            </div>

            {/* Imagen 2 (Arriba Derecha) */}
            <div className="col-span-1 row-span-1 rounded-[2rem] overflow-hidden relative shadow-lg">
              {/* Image optimized */}
              <Image src="/woom/woom_0_1.jpeg" alt={t.alts.woom2} fill sizes="(max-width: 768px) 50vw, 288px" className="object-cover" />
            </div>

            {/* Imagen 3 (Abajo Derecha) */}
            <div className="col-span-1 row-span-1 rounded-[2rem] overflow-hidden relative shadow-lg">
              {/* Image optimized */}
              <Image src="/woom/woom_0_2.jpeg" alt={t.alts.woom3} fill sizes="(max-width: 768px) 50vw, 288px" className="object-cover" />
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
                      style={{ backgroundColor: model.color + '20', color: model.textColor }}
                    >
                      {modelData.type}
                    </span>
                    <span className="text-sm font-semibold text-gray-500 border border-gray-200 px-3 py-1 rounded-full">
                      {model.wheel}
                    </span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-extrabold text-[#0E0E12] tracking-tight">{model.name}</h3>

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
