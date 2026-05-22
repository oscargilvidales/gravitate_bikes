"use client";

import { useState, useRef, useEffect } from "react";
import { Wrench, CheckCircle, Clock } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const maintenancePackages = [
  {
    id: "bronce",
    price: "35 €",
    color: "text-[#CD7F32]",
    bgColor: "bg-[#CD7F32]",
    borderColor: "border-[#CD7F32]",
  },
  {
    id: "plata",
    price: "50 €",
    color: "text-slate-500",
    bgColor: "bg-slate-500",
    borderColor: "border-slate-500",
  },
  {
    id: "gold",
    price: "100€",
    color: "text-amber-500",
    bgColor: "bg-amber-500",
    borderColor: "border-amber-500",
  },
  {
    id: "platinum",
    price: "300€",
    color: "text-gray-800",
    bgColor: "bg-gray-800",
    borderColor: "border-gray-800",
  },
];

const cleaningPackages = [
  {
    id: "transmision",
    price: "15 €",
    color: "text-blue-500",
    bgColor: "bg-blue-500",
    borderColor: "border-blue-500",
  },
  {
    id: "completa",
    price: "20 €",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500",
    borderColor: "border-emerald-500",
  },
];

export function ReparacionesPage() {
  const { t } = useTranslation();
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const [selectedCleaning, setSelectedCleaning] = useState<string | null>(null);
  const cleaningPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedTier && panelRef.current) {
      setTimeout(() => {
        panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  }, [selectedTier]);

  useEffect(() => {
    if (selectedCleaning && cleaningPanelRef.current) {
      setTimeout(() => {
        cleaningPanelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  }, [selectedCleaning]);

  return (
    <div>
      {/* Page header */}
      <div className="bg-[#0E0E12] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-[#A78BFA] text-sm mb-4">
            <Wrench size={16} />
            <span>{t.nav.reparaciones}</span>
          </div>
          <h1 className="text-white text-4xl font-bold mb-3">{t.reparaciones.header.title}</h1>
          <p className="text-white/60 max-w-xl">
            {t.reparaciones.header.subtitle}
          </p>
        </div>
      </div>

      {/* Workshop image + highlights */}
      <div className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="rounded-2xl overflow-hidden h-72 bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400">
            <span className="text-lg font-bold uppercase tracking-widest mb-2">Foto Taller</span>
            <span className="text-sm">Tamaño recomendado: 1200x900px</span>
          </div>
          <div className="space-y-5">
            <h2 className="text-[#0E0E12] text-2xl font-bold">{t.reparaciones.workshop.title}</h2>
            <p className="text-gray-500 leading-relaxed">
              {t.reparaciones.workshop.desc}
            </p>
            {t.reparaciones.workshop.points.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-[#A78BFA] mt-0.5 shrink-0" />
                <span className="text-gray-600 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price list */}
        <h2 className="text-[#0E0E12] text-2xl font-bold mb-8">{t.reparaciones.plans.title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {maintenancePackages.map((pkg) => {
            const pkgData = t.reparaciones.packages[pkg.id as keyof typeof t.reparaciones.packages];
            return (
            <div 
              key={pkg.id} 
              onClick={() => setSelectedTier(selectedTier === pkg.id ? null : pkg.id)}
              className="flex flex-col border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow bg-white cursor-pointer"
            >
              <div className={`px-5 py-4 flex items-center justify-between border-b ${pkg.borderColor} border-opacity-30`}>
                <span className={`font-bold text-lg ${pkg.color}`}>{pkgData.name}</span>
                <span className="font-bold text-[#0E0E12] text-xl">{pkg.price}</span>
              </div>
              <div className="p-5 flex-1 flex flex-col pointer-events-none">
                <ul className="space-y-4 flex-1">
                  {pkgData.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle size={16} className={`${pkg.color} mt-0.5 shrink-0`} />
                      <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                {'note' in pkgData && pkgData.note && (
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-400 leading-relaxed">{pkgData.note}</p>
                  </div>
                )}
                
                {/* Botón visual para indicar que se puede desplegar */}
                <div
                  className={`mt-4 pt-4 border-t border-gray-100 w-full text-left text-sm font-medium flex items-center justify-between transition-colors ${selectedTier === pkg.id ? pkg.color : 'text-[#0E0E12] group-hover:text-[#A78BFA]'}`}
                >
                  <span>{selectedTier === pkg.id ? t.reparaciones.plans.btnClose : t.reparaciones.plans.btnProcess}</span>
                  <span className={`transition-transform duration-300 ${selectedTier === pkg.id ? 'rotate-180' : ''}`}>
                    <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* Visor de ancho completo para el proceso de reparación seleccionado */}
        <div ref={panelRef} className="scroll-mt-32">
          {selectedTier && (
          <div className="mt-12 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 animate-in fade-in slide-in-from-top-8 duration-500">
            {maintenancePackages.filter(p => p.id === selectedTier).map(pkg => {
              const pkgData = t.reparaciones.packages[pkg.id as keyof typeof t.reparaciones.packages];
              return (
              <div key={pkg.id}>
                <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 mb-12 pb-6 border-b border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-opacity-10 ${pkg.bgColor} ${pkg.color}`}>
                      <Wrench size={24} />
                    </div>
                    <h3 className="text-3xl font-bold text-[#0E0E12]">
                      {t.reparaciones.expandedView.process} <span className={pkg.color}>{pkgData.name}</span>
                    </h3>
                  </div>
                  <button 
                    onClick={() => setSelectedTier(null)}
                    className="text-gray-400 hover:text-gray-700 text-sm font-medium transition-colors"
                  >
                    {t.reparaciones.expandedView.closePanel}
                  </button>
                </div>
                
                <div className="space-y-16">
                  {[1, 2, 3, 4, 5].map((step) => (
                    <div key={step} className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
                      {/* Placeholder de imagen GRANDE */}
                      <div className={`aspect-[4/3] rounded-2xl bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 shadow-inner ${step % 2 === 0 ? 'md:order-last' : ''}`}>
                        <span className="text-lg font-bold uppercase tracking-widest mb-2">{t.reparaciones.expandedView.photo} {step}</span>
                        <span className="text-sm">{t.reparaciones.expandedView.size}</span>
                      </div>
                      
                      {/* Descripción del paso */}
                      <div className="space-y-4">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${pkg.bgColor} text-white font-bold text-xl shadow-md`}>
                          {step}
                        </div>
                        <h4 className="text-2xl font-bold text-gray-800">{t.reparaciones.expandedView.stepDesc} {step}</h4>
                        <p className="text-gray-500 leading-relaxed text-lg">
                          {t.reparaciones.expandedView.placeholderDesc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )})}
          </div>
        )}
        </div>

        {/* Sección de Limpieza (Nueva Minisección Paralela) */}
        <div id="limpieza" className="mt-20 scroll-mt-24">
          <h2 className="text-[#0E0E12] text-2xl font-bold mb-8">{t.reparaciones.limpieza?.title || 'Limpieza'}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {cleaningPackages.map((pkg) => {
              const pkgData = t.reparaciones.limpieza?.packages[pkg.id as keyof typeof t.reparaciones.limpieza.packages] || { name: pkg.id, features: [] };
              return (
                <div 
                  key={pkg.id} 
                  onClick={() => setSelectedCleaning(selectedCleaning === pkg.id ? null : pkg.id)}
                  className="flex flex-col border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow bg-white cursor-pointer"
                >
                  <div className={`px-5 py-4 flex items-center justify-between border-b ${pkg.borderColor} border-opacity-30`}>
                    <span className={`font-bold text-lg ${pkg.color}`}>{pkgData.name}</span>
                    <span className="font-bold text-[#0E0E12] text-xl">{pkg.price}</span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col pointer-events-none">
                    <ul className="space-y-4 flex-1">
                      {pkgData.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle size={16} className={`${pkg.color} mt-0.5 shrink-0`} />
                          <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Botón visual para indicar que se puede desplegar */}
                    <div
                      className={`mt-4 pt-4 border-t border-gray-100 w-full text-left text-sm font-medium flex items-center justify-between transition-colors ${selectedCleaning === pkg.id ? pkg.color : 'text-[#0E0E12] group-hover:text-[#A78BFA]'}`}
                    >
                      <span>{selectedCleaning === pkg.id ? t.reparaciones.plans.btnClose : t.reparaciones.plans.btnProcess}</span>
                      <span className={`transition-transform duration-300 ${selectedCleaning === pkg.id ? 'rotate-180' : ''}`}>
                        <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16"><path d="M6 9l6 6 6-6"></path></svg>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Visor de ancho completo para Limpieza */}
          <div ref={cleaningPanelRef} className="scroll-mt-32">
            {selectedCleaning && (
              <div className="mt-12 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 animate-in fade-in slide-in-from-top-8 duration-500">
                {cleaningPackages.filter(p => p.id === selectedCleaning).map(pkg => {
                  const pkgData = t.reparaciones.limpieza?.packages[pkg.id as keyof typeof t.reparaciones.limpieza.packages] || { name: pkg.id };
                  return (
                    <div key={pkg.id}>
                      <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 mb-12 pb-6 border-b border-gray-100">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-opacity-10 ${pkg.bgColor} ${pkg.color}`}>
                            <Wrench size={24} />
                          </div>
                          <h3 className="text-3xl font-bold text-[#0E0E12]">
                            {t.reparaciones.expandedView.process} <span className={pkg.color}>{pkgData.name}</span>
                          </h3>
                        </div>
                        <button 
                          onClick={() => setSelectedCleaning(null)}
                          className="text-gray-400 hover:text-gray-700 text-sm font-medium transition-colors cursor-pointer"
                        >
                          {t.reparaciones.expandedView.closePanel}
                        </button>
                      </div>
                      
                      <div className="space-y-16">
                        {[1, 2, 3].map((step) => (
                          <div key={step} className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
                            {/* Placeholder de imagen GRANDE */}
                            <div className={`aspect-[4/3] rounded-2xl bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 shadow-inner ${step % 2 === 0 ? 'md:order-last' : ''}`}>
                              <span className="text-lg font-bold uppercase tracking-widest mb-2">{t.reparaciones.expandedView.photo} {step}</span>
                              <span className="text-sm">{t.reparaciones.expandedView.size}</span>
                            </div>
                            
                            {/* Descripción del paso */}
                            <div className="space-y-4">
                              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${pkg.bgColor} text-white font-bold text-xl shadow-md`}>
                                {step}
                              </div>
                              <h4 className="text-2xl font-bold text-gray-800">{t.reparaciones.expandedView.stepDesc} {step}</h4>
                              <p className="text-gray-500 leading-relaxed text-lg">
                                {t.reparaciones.expandedView.placeholderDesc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Botón WhatsApp Reparaciones */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://wa.me/34612477841"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-md hover:shadow-lg"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/whatsapp-glyph-black.svg" alt="WhatsApp" className="w-5 h-5 brightness-0 invert" />
            {t.reparaciones.plans.btnWa}
          </a>
        </div>

        {/* Turnaround notice */}
        <div className="mt-10 flex items-start gap-4 bg-[#A78BFA]/8 border border-[#A78BFA]/20 rounded-xl p-5">
          <div className="w-10 h-10 rounded-full bg-[#A78BFA]/20 flex items-center justify-center shrink-0">
            <Clock size={18} className="text-[#A78BFA]" />
          </div>
          <div>
            <p className="font-medium text-[#0E0E12] mb-1">{t.reparaciones.turnaround.title}</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t.reparaciones.turnaround.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
