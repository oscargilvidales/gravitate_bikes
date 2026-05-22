"use client";

import { Bike, ShieldCheck, Scale, Ruler, ChevronRight } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import Link from "next/link";

const models = [
  {
    id: "w1",
    name: "woom 1",
    wheel: '12"',
    color: "#FF6B6B",
  },
  {
    id: "w2",
    name: "woom 2",
    wheel: '14"',
    color: "#FFB347",
  },
  {
    id: "w3",
    name: "woom 3",
    wheel: '16"',
    color: "#A78BFA",
  },
  {
    id: "w4",
    name: "woom 4",
    wheel: '20"',
    color: "#4ECDC4",
  },
  {
    id: "w5",
    name: "woom 5",
    wheel: '24"',
    color: "#45B7D1",
  },
  {
    id: "w6",
    name: "woom 6",
    wheel: '26"',
    color: "#96CEB4",
  },
  {
    id: "woff",
    name: "woom OFF",
    wheel: '16" – 26"',
    color: "#6B8E5E",
  },
  {
    id: "wup",
    name: "woom UP",
    wheel: '20" – 24"',
    color: "#A78BFA",
  },
];

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
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-[#A78BFA] hover:bg-[#9370e8] text-white px-6 py-3.5 rounded-lg font-medium transition-colors"
            >
              {t.woom.header.cta}
              <ChevronRight size={16} />
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden h-72 md:h-80 bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400">
            <span className="text-lg font-bold uppercase tracking-widest mb-2">Foto Hero</span>
            <span className="text-sm">Tamaño recomendado: 1200x900px</span>
          </div>
        </div>
      </div>

      {/* Why woom */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[#0E0E12] text-2xl font-bold mb-2">{t.woom.why}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {t.woom.desc}
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-white">
                <div className="w-10 h-10 rounded-lg bg-[#A78BFA]/10 flex items-center justify-center text-[#A78BFA] shrink-0">
                  <Scale size={20} />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-[#0E0E12]">{t.woom.features.weight}</h3>
                  <p className="text-sm text-gray-500">{t.woom.features.weightDesc}</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-white">
                <div className="w-10 h-10 rounded-lg bg-[#A78BFA]/10 flex items-center justify-center text-[#A78BFA] shrink-0">
                  <Ruler size={20} />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-[#0E0E12]">{t.woom.features.ergonomics}</h3>
                  <p className="text-sm text-gray-500">{t.woom.features.ergonomicsDesc}</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-white">
                <div className="w-10 h-10 rounded-lg bg-[#A78BFA]/10 flex items-center justify-center text-[#A78BFA] shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-[#0E0E12]">{t.woom.features.brakes}</h3>
                  <p className="text-sm text-gray-500">{t.woom.features.brakesDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Models grid */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-[#0E0E12] text-2xl font-bold mb-1">{t.woom.range}</h2>
            <p className="text-gray-500 text-sm">{t.woom.rangeDesc}</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {models.map((model) => {
            const modelData = t.woom.models[model.id as keyof typeof t.woom.models];
            return (
            <div
              key={model.name}
              className="border border-gray-100 rounded-2xl overflow-hidden bg-white flex flex-col"
            >
              {/* Marco para futura foto */}
              <div className="h-56 w-full bg-gray-50 border-b border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 relative">
                <span className="text-sm font-bold uppercase tracking-widest mb-1">Foto {model.name}</span>
                <span className="text-xs">Tamaño: 800x600px</span>
              </div>
              
              {/* Información del modelo */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-1">
                  <p className="font-bold text-[#0E0E12]">{model.name}</p>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium shrink-0"
                    style={{ backgroundColor: model.color + "22", color: model.color }}
                  >
                    {modelData.type}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mb-3">{modelData.age} · {model.wheel}</p>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{modelData.desc}</p>
              </div>
            </div>
            );
          })}
        </div>

        {/* Botón WhatsApp Disponibilidad */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://wa.me/34612477841"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-md hover:shadow-lg"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/whatsapp-glyph-black.svg" alt="WhatsApp" className="w-5 h-5 brightness-0 invert" />
            {t.woom.pricing.btnWa}
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0E0E12] py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-white text-2xl font-bold mb-3">{t.woom.ctaBottom.title}</h2>
          <p className="text-white/50 mb-8 text-sm leading-relaxed">
            {t.woom.ctaBottom.desc}
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-[#A78BFA] hover:bg-[#9370e8] text-white px-6 py-3.5 rounded-lg font-medium transition-colors"
          >
            <ChevronRight size={16} />
            {t.woom.ctaBottom.btn}
          </Link>
        </div>
      </section>
    </div>
  );
}
