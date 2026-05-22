"use client";

import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";

export function ContactoPage() {
  const { t } = useTranslation();

  const hours = [
    { day: t.contacto.weekdays, time: "09:00 – 20:00" },
    { day: t.contacto.saturday, time: "09:00 – 21:00" },
    { day: t.contacto.sunday, time: "10:00 – 20:00" },
  ];

  return (
    <div>
      {/* Page header */}
      <div className="bg-[#0E0E12] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-[#A78BFA] text-sm mb-4">
            <MapPin size={16} />
            <span>{t.contacto.header.title}</span>
          </div>
          <h1 className="text-white text-4xl font-bold mb-3">{t.contacto.header.title}</h1>
          <p className="text-white/60 max-w-xl">
            {t.contacto.header.subtitle}
          </p>
        </div>
      </div>

      <div className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="space-y-6">
            <InfoCard
              icon={<MapPin size={20} />}
              title={t.contacto.address}
              content={
                <>
                  <p>Avenida Lopez de Mena nº 14</p>
                  <p className="text-gray-400 text-sm">29670 San Pedro Alcántara, Marbella</p>
                </>
              }
            />
            <InfoCard
              icon={<Phone size={20} />}
              title={t.contacto.phone}
              content={
                <a href="tel:+34612477841" className="hover:text-[#A78BFA] transition-colors flex items-center gap-2">
                  +34 612 47 78 41
                </a>
              }
            />
            <InfoCard
              icon={<Mail size={20} />}
              title={t.contacto.email}
              content={
                <a href="mailto:info@gravitatebikes.es" className="hover:text-[#A78BFA] transition-colors">
                  info@gravitatebikes.es
                </a>
              }
            />
            <InfoCard
              icon={<Clock size={20} />}
              title={t.contacto.hours}
              content={
                <ul className="space-y-1.5">
                  {hours.map(({ day, time }) => (
                    <li key={day} className="flex justify-between text-sm">
                      <span className="text-gray-600">{day}</span>
                      <span className="font-medium text-[#0E0E12]">{time}</span>
                    </li>
                  ))}
                </ul>
              }
            />

            {/* WhatsApp CTA */}
            <div className="pt-2">
              <a
                href="https://wa.me/34612477841"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white w-full py-4 rounded-xl font-bold transition-all shadow-md hover:shadow-lg text-lg"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/whatsapp-glyph-black.svg" alt="WhatsApp" className="w-6 h-6 brightness-0 invert" />
                {t.contacto.waBtn}
              </a>
            </div>
          </div>

          {/* Mapa Interactivo */}
          <div className="rounded-2xl overflow-hidden border border-gray-100 h-full min-h-[400px] bg-gray-50 relative">
            <iframe
              src="https://maps.google.com/maps?q=Avenida%20Lopez%20de%20Mena%2014,%20San%20Pedro%20Alcantara,%20Marbella&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación de la tienda"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 p-5 rounded-xl border border-gray-100">
      <div className="w-10 h-10 rounded-lg bg-[#A78BFA]/10 flex items-center justify-center text-[#A78BFA] shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5">{title}</p>
        <div className="text-gray-700 text-sm">{content}</div>
      </div>
    </div>
  );
}
