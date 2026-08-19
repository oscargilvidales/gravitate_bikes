"use client";

import { Scale } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";

export function TerminosPage() {
  const { t } = useTranslation();
  const terms = t.terminos;

  return (
    <div>
      {/* Header */}
      <div className="bg-[#0E0E12] py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-[#A78BFA] text-sm mb-4">
            <Scale size={16} />
            <span>{terms.breadcrumb}</span>
          </div>
          <h1 className="text-white text-4xl font-bold mb-3">{terms.title}</h1>
          <p className="text-white/40 text-sm">{terms.lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-14 space-y-10">
        {/* Intro */}
        <p className="text-gray-600 leading-relaxed">{terms.intro}</p>

        {/* S1 — Horario */}
        <section>
          <h2 className="text-[#0E0E12] text-xl font-bold mb-3">{terms.s1.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-3">{terms.s1.body}</p>
          <div className="bg-[#A78BFA]/8 border border-[#A78BFA]/20 rounded-xl p-4">
            <p className="text-gray-600 text-sm leading-relaxed">{terms.s1.example}</p>
          </div>
        </section>

        {/* S2 — E-bikes */}
        <section>
          <h2 className="text-[#0E0E12] text-xl font-bold mb-3">{terms.s2.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-3">{terms.s2.body}</p>
          <ul className="space-y-2">
            {terms.s2.bullets.map((b: string, i: number) => (
              <li key={i} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                <span className="text-[#A78BFA] shrink-0 mt-0.5">•</span>
                {b}
              </li>
            ))}
          </ul>
        </section>

        {/* S3 — Devolución */}
        <section>
          <h2 className="text-[#0E0E12] text-xl font-bold mb-3">{terms.s3.title}</h2>
          <p className="text-gray-600 leading-relaxed">{terms.s3.body}</p>
        </section>

        {/* S4 — Estado */}
        <section>
          <h2 className="text-[#0E0E12] text-xl font-bold mb-3">{terms.s4.title}</h2>
          <p className="text-gray-600 leading-relaxed">{terms.s4.body}</p>
        </section>

        {/* S5 — Uso */}
        <section>
          <h2 className="text-[#0E0E12] text-xl font-bold mb-3">{terms.s5.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-3">{terms.s5.body}</p>
          <ul className="space-y-2">
            {terms.s5.bullets.map((b: string, i: number) => (
              <li key={i} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                <span className="text-[#A78BFA] shrink-0 mt-0.5">•</span>
                {b}
              </li>
            ))}
          </ul>
        </section>

        {/* S6 — Cancelaciones */}
        <section>
          <h2 className="text-[#0E0E12] text-xl font-bold mb-3">{terms.s6.title}</h2>
          <p className="text-gray-600 leading-relaxed">{terms.s6.body}</p>
        </section>

        {/* S7 — Modificaciones */}
        <section>
          <h2 className="text-[#0E0E12] text-xl font-bold mb-3">{terms.s7.title}</h2>
          <p className="text-gray-600 leading-relaxed">{terms.s7.body}</p>
        </section>

        {/* Footer note */}
        <p className="text-gray-400 text-sm border-t border-gray-100 pt-8">{terms.footer}</p>
      </div>
    </div>
  );
}
