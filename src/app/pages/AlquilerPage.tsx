"use client";

import { Bike, Zap, Clock, Info } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/i18n/useTranslation";

export function AlquilerPage() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Page header */}
      <div className="bg-[#0E0E12] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-[#A78BFA] text-sm mb-4">
            <Bike size={16} />
            <span>{t.nav.alquiler}</span>
          </div>
          <h1 className="text-white text-4xl font-bold mb-3">{t.alquiler.header.title}</h1>
          <p className="text-white/60 max-w-xl">
            {t.alquiler.header.subtitle}
          </p>
        </div>
      </div>

      {/* Bici básica — sección destacada */}
      <div className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-[#0E0E12] text-2xl font-bold mb-8">{t.alquiler.paseo.title}</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* Foto */}
          <div className="rounded-3xl overflow-hidden h-72 md:h-80 flex items-center justify-center p-6 relative bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-sm">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.05)_0%,transparent_70%)]" />
            <Image src="/bikes/bici_paseo.svg" alt="Bicicleta de paseo" fill className="object-contain p-8 drop-shadow-2xl" />
          </div>

          {/* Tarifas */}
          <div className="space-y-4">
            <p className="text-gray-500 text-sm">
              {t.alquiler.paseo.desc}
            </p>

            {/* Tarifa diaria */}
            <div className="border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-[#0E0E12] px-5 py-3.5 flex items-center gap-2">
                <Clock size={15} className="text-[#A78BFA]" />
                <span className="text-white font-medium text-sm">{t.alquiler.paseo.priceDay}</span>
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{t.alquiler.paseo.priceDayDesc}</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-[#0E0E12]">15 €</span>
                </div>
              </div>
            </div>

            {/* Tarifa semanal */}
            <div className="border-2 border-[#A78BFA] rounded-2xl overflow-hidden relative">
              <div className="bg-[#A78BFA]/10 px-5 py-3.5 flex items-center gap-2">
                <Bike size={15} className="text-[#A78BFA]" />
                <span className="text-[#A78BFA] font-medium text-sm">{t.alquiler.paseo.priceWeek}</span>
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 mt-0.5">
                    <span className="text-green-600 font-medium">{t.alquiler.paseo.priceWeekDesc}</span>
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-baseline gap-1.5 justify-end">
                    <span className="text-gray-300 text-base line-through">15 €</span>
                    <span className="text-3xl font-bold text-[#A78BFA]">10 €</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-[#A78BFA]/8 rounded-lg p-3">
              <Info size={14} className="text-[#A78BFA] mt-0.5 shrink-0" />
              <p className="text-sm text-gray-500">
                {t.alquiler.paseo.note}
              </p>
            </div>

            {/* Botón WhatsApp Paseo */}
            <a
              href="https://wa.me/34612477841"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-[#0E0E12] py-3.5 rounded-xl font-medium transition-all shadow-md hover:shadow-lg mt-2"
            >
              <Image src="/whatsapp-glyph-black.svg" alt="WhatsApp" width={20} height={20} />
              {t.alquiler.btnWa}
            </a>
          </div>
        </div>

        {/* Bicicletas eléctricas */}
        <div className="mt-16">
          <div className="flex items-center gap-2 mb-6">
            <Zap size={24} className="text-[#A78BFA]" />
            <h2 className="text-[#0E0E12] text-2xl font-bold">{t.alquiler.ebike.title}</h2>
          </div>

          {/* Disclaimer Ebikes */}
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-8 flex items-start gap-3">
            <Info className="text-orange-600 shrink-0 mt-0.5" size={20} />
            <p className="text-orange-800 text-sm">
              <strong className="font-semibold">{t.alquiler.ebike.aviso}</strong> {t.alquiler.ebike.warning}
            </p>
          </div>

          <div className="space-y-12">
            {/* E-bike Básica */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="rounded-3xl overflow-hidden h-72 md:h-80 flex items-center justify-center p-6 relative bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-sm">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.05)_0%,transparent_70%)]" />
                <Image src="/bikes/bici_electrica.svg" alt="E-Bike basica" fill className="object-contain p-8 drop-shadow-2xl" />
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#0E0E12]">{t.alquiler.ebike.models.basica.title}</h3>
                <p className="text-gray-500 text-sm">
                  {t.alquiler.ebike.models.basica.desc}
                </p>

                <div className="border border-gray-100 rounded-2xl overflow-hidden">
                  <div className="bg-[#0E0E12] px-5 py-3.5 flex items-center gap-2">
                    <Clock size={15} className="text-[#A78BFA]" />
                    <span className="text-white font-medium text-sm">{t.alquiler.ebike.models.basica.rateDay}</span>
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">{t.alquiler.ebike.models.basica.priceStd}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{t.alquiler.ebike.models.basica.perDay}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-bold text-[#0E0E12]">25 €</span>
                      <span className="text-gray-400 text-sm"> {t.alquiler.ebike.models.basica.day}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-[#A78BFA]/8 rounded-lg p-3">
                  <Info size={14} className="text-[#A78BFA] mt-0.5 shrink-0" />
                  <p className="text-sm text-gray-500">{t.alquiler.ebike.models.basica.includes}</p>
                </div>

                {/* Botón WhatsApp Ebike Básica */}
                <a
                  href="https://wa.me/34612477841"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-[#0E0E12] py-3.5 rounded-xl font-medium transition-all shadow-md hover:shadow-lg mt-2"
                >
                  <Image src="/whatsapp-glyph-black.svg" alt="WhatsApp" width={20} height={20} />
                  {t.alquiler.ebike.models.basica.btn}
                </a>
              </div>
            </div>

            {/* E-bike Bosch */}
            <div className="grid md:grid-cols-2 gap-8 items-start pt-8 border-t border-gray-100">
              <div className="rounded-3xl overflow-hidden h-72 md:h-80 flex items-center justify-center p-6 relative bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-sm">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.05)_0%,transparent_70%)]" />
                <Image src="/bikes/bici_electrica_premium.svg" alt="E-bike premium Bosch" fill className="object-contain p-8 drop-shadow-2xl" />
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#0E0E12]">{t.alquiler.ebike.models.premium.title}</h3>
                <p className="text-gray-500 text-sm">
                  {t.alquiler.ebike.models.premium.desc}
                </p>

                {/* Tarifa diaria */}
                <div className="border border-gray-100 rounded-2xl overflow-hidden">
                  <div className="bg-[#0E0E12] px-5 py-3.5 flex items-center gap-2">
                    <Clock size={15} className="text-[#A78BFA]" />
                    <span className="text-white font-medium text-sm">{t.alquiler.ebike.models.premium.rateDay}</span>
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">{t.alquiler.ebike.models.premium.rent1to4}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{t.alquiler.ebike.models.premium.priceStd}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-bold text-[#0E0E12]">35 €</span>
                      <span className="text-gray-400 text-sm"> {t.alquiler.ebike.models.premium.day}</span>
                    </div>
                  </div>
                </div>

                {/* Tarifa promo */}
                <div className="border-2 border-[#A78BFA] rounded-2xl overflow-hidden relative">
                  <div className="absolute top-3 right-3 bg-[#A78BFA] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    {t.alquiler.ebike.models.premium.promo}
                  </div>
                  <div className="bg-[#A78BFA]/10 px-5 py-3.5 flex items-center gap-2">
                    <Zap size={15} className="text-[#A78BFA]" />
                    <span className="text-[#A78BFA] font-medium text-sm">{t.alquiler.ebike.models.premium.rateReduced}</span>
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">{t.alquiler.ebike.models.premium.rent5plus}</p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {t.alquiler.ebike.models.premium.pricePerDay} · <span className="text-green-600 font-medium">{t.alquiler.ebike.models.premium.save} 14%</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-baseline gap-1.5 justify-end">
                        <span className="text-gray-300 text-base line-through">35 €</span>
                        <span className="text-3xl font-bold text-[#A78BFA]">30 €</span>
                      </div>
                      <span className="text-gray-400 text-sm"> {t.alquiler.ebike.models.premium.day}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-[#A78BFA]/8 rounded-lg p-3">
                  <Info size={14} className="text-[#A78BFA] mt-0.5 shrink-0" />
                  <p className="text-sm text-gray-500">
                    {t.alquiler.ebike.models.premium.includes}
                  </p>
                </div>

                {/* Botón WhatsApp Ebike Bosch */}
                <a
                  href="https://wa.me/34612477841"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-[#0E0E12] py-3.5 rounded-xl font-medium transition-all shadow-md hover:shadow-lg mt-2"
                >
                  <Image src="/whatsapp-glyph-black.svg" alt="WhatsApp" width={20} height={20} />
                  {t.alquiler.ebike.models.premium.btn}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Info box */}
        <div className="mt-12 bg-[#0E0E12] rounded-2xl p-8 text-white">
          <h3 className="text-xl font-semibold mb-4">{t.alquiler.info.title}</h3>
          <ul className="space-y-2 text-white/60 text-sm">
            <li className="flex gap-2"><span className="text-[#A78BFA]">•</span> {t.alquiler.info.id}</li>
            <li className="flex gap-2"><span className="text-[#A78BFA]">•</span> {t.alquiler.info.deposit}</li>
            <li className="flex gap-2"><span className="text-[#A78BFA]">•</span> {t.alquiler.info.minors}</li>
            <li className="flex gap-2"><span className="text-[#A78BFA]">•</span> {t.alquiler.info.rain}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
