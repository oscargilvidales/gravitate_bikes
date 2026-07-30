"use client";

import Link from "next/link";
import Image from "next/image";
import { Wrench, Bike, Zap, MapPin, Clock, Phone, Sparkles } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { BrandCarousel } from "../components/BrandCarousel";

export function HomePage() {
  const { t, lang } = useTranslation();

  return (
    <div>
      <BrandCarousel />
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[520px] flex items-center justify-center overflow-hidden">
        {/* Hero Image optimized */}
        <Image src="/home/puestaDeSol.jpg" alt="Bulevar / Paseo Marítimo" fill className="object-cover" priority />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto -translate-y-[10vh]">
          <span className="inline-block backdrop-blur-md bg-black/30 text-white border border-white/20 text-sm px-4 py-1.5 rounded-full mb-6 font-medium shadow-sm">
            {t.home.hero.location}
          </span>
          <h1 className="text-white text-5xl sm:text-6xl font-bold leading-tight mb-6">
            {t.home.hero.title1}<br />
            <span className="text-[#7C3AED]">{t.home.hero.title2}</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={`/${lang}/alquiler`}
              className="inline-flex items-center justify-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-7 py-3.5 rounded-lg font-medium transition-colors"
            >
              <Bike size={18} />
              {t.home.hero.btnRent}
            </Link>
            <Link
              href={`/${lang}/reparaciones`}
              className="inline-flex items-center justify-center gap-2 bg-white/30 hover:bg-white/40 backdrop-blur-md text-white border border-white/40 px-7 py-3.5 rounded-lg font-medium transition-colors"
            >
              <Wrench size={18} />
              {t.home.hero.btnRepair}
            </Link>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-[#0E0E12] text-3xl font-bold mb-3">{t.home.services.title}</h2>
          <p className="text-gray-500 max-w-lg mx-auto">{t.home.services.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard
            icon={<Bike size={28} className="text-[#A78BFA]" />}
            title={t.home.services.rent.title}
            description={t.home.services.rent.desc}
            linkTo={`/${lang}/alquiler`}
            linkLabel={t.home.services.rent.btn}
          />
          <ServiceCard
            icon={<Wrench size={28} className="text-[#A78BFA]" />}
            title={t.home.services.repair.title}
            description={t.home.services.repair.desc}
            linkTo={`/${lang}/reparaciones`}
            linkLabel={t.home.services.repair.btn}
          />
          <ServiceCard
            icon={<Sparkles size={28} className="text-[#A78BFA]" />}
            title={t.home.services.clean.title}
            description={t.home.services.clean.desc}
            linkTo={`/${lang}/reparaciones#limpieza`}
            linkLabel={t.home.services.clean.btn}
          />
        </div>
      </section>
      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/34612477841"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0E0E12] px-8 py-4 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
            >
              {/* WhatsApp Icon optimized */}
              <Image src="/whatsapp-glyph-black.svg" alt="WhatsApp" width={20} height={20} />
              {t.home.cta.btnWa}
            </a>
            <Link
              href={`/${lang}/contacto`}
              className="inline-flex items-center justify-center gap-2 bg-[#0E0E12] hover:bg-[#1a1a22] text-white px-8 py-4 rounded-lg font-medium transition-colors"
            >
              <MapPin size={18} />
              {t.home.cta.btnLoc}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  linkTo,
  linkLabel,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkTo: string;
  linkLabel: string;
}) {
  return (
    <Link href={linkTo} className="border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:border-[#A78BFA]/30 transition-all group block">
      <div className="w-12 h-12 rounded-xl bg-[#A78BFA]/10 flex items-center justify-center mb-5 group-hover:bg-[#A78BFA]/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-[#0E0E12] font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-5">{description}</p>
      <span
        className="text-[#7C3AED] text-sm font-medium group-hover:underline"
      >
        {linkLabel} →
      </span>
    </Link>
  );
}
