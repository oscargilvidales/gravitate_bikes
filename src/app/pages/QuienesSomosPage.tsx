"use client";

import { Heart, Wrench, Bike, Sun, Users, MapPin } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";

export function QuienesSomosPage() {
  const { t } = useTranslation();

  const values = [
    {
      icon: <Wrench size={20} />,
      title: t.quienesSomos.values.q1.title,
      desc: t.quienesSomos.values.q1.desc,
    },
    {
      icon: <Heart size={20} />,
      title: t.quienesSomos.values.q2.title,
      desc: t.quienesSomos.values.q2.desc,
    },
    {
      icon: <Bike size={20} />,
      title: t.quienesSomos.values.q3.title,
      desc: t.quienesSomos.values.q3.desc,
    }
  ];

  return (
    <div>
      {/* Page header */}
      <div className="bg-[#0E0E12] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-[#A78BFA] text-sm mb-4">
            <Users size={16} />
            <span>{t.nav.quienesSomos}</span>
          </div>
          <h1 className="text-white text-4xl font-bold mb-3">{t.quienesSomos.header.title}</h1>
          <p className="text-white/60 max-w-xl">
            {t.quienesSomos.header.subtitle}
          </p>
        </div>
      </div>

      {/* Main story */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[#0E0E12] text-3xl font-bold mb-5">{t.quienesSomos.bio.title}</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>{t.quienesSomos.bio.desc1}</p>
              <p>{t.quienesSomos.bio.desc2}</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden h-80 bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400">
            <span className="text-lg font-bold uppercase tracking-widest mb-2">Foto Gabi haciendo Plegada</span>
            <span className="text-sm">Tamaño recomendado: 1200x900px</span>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#0E0E12] text-2xl font-bold mb-2">{t.quienesSomos.values.title}</h2>
            <p className="text-gray-500 text-sm">{t.quienesSomos.values.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 [#A78BFA]/30">
                <div className="w-10 h-10 rounded-xl bg-[#A78BFA]/10 flex items-center justify-center text-[#A78BFA] mb-4">
                  {icon}
                </div>
                <p className="font-semibold text-[#0E0E12] mb-2">{title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / personal touch */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden h-72 bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400">
            <span className="text-lg font-bold uppercase tracking-widest mb-2">Foto Taller</span>
            <span className="text-sm">Tamaño recomendado: 1200x900px</span>
          </div>
          <div>
            <h2 className="text-[#0E0E12] text-2xl font-bold mb-5">{t.quienesSomos.workshop.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {t.quienesSomos.workshop.desc}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#A78BFA]/10 flex items-center justify-center text-[#A78BFA] shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-[#0E0E12]">{t.quienesSomos.workshop.findUs}</p>
                <p className="text-xs text-gray-500">{t.quienesSomos.workshop.location}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats banner */}
      <section className="bg-[#0E0E12] py-14 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "28", label: t.quienesSomos.stats.y28 },
            { value: "10+", label: t.quienesSomos.stats.ref },
            { value: "1º", label: t.quienesSomos.stats.cup },
            { value: "FAC", label: t.quienesSomos.stats.fac },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-[#A78BFA] text-4xl font-bold mb-2">{value}</p>
              <p className="text-white/60 text-sm font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
