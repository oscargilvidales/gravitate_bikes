"use client";

import { Shield } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";

export function PrivacidadPage() {
  const { t } = useTranslation();
  const p = t.privacidad;

  return (
    <div>
      {/* Page Header */}
      <div className="bg-[#0E0E12] py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-[#A78BFA] text-sm mb-4">
            <Shield size={16} />
            <span>{p.breadcrumb}</span>
          </div>
          <h1 className="text-white text-4xl font-bold mb-3">{p.title}</h1>
          <p className="text-white/60">{p.lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-10">

          {/* Intro */}
          <Section>
            <p className="text-gray-600 leading-relaxed">{p.intro}</p>
          </Section>

          {/* 1. Responsable */}
          <Section title={p.s1.title}>
            <p className="text-gray-600 leading-relaxed">{p.s1.body}</p>
            <InfoTable rows={p.s1.rows} />
          </Section>

          {/* 2. Cookies */}
          <Section title={p.s2.title}>
            <p className="text-gray-600 leading-relaxed">{p.s2.noCookies}</p>
            <div className="mt-4 p-4 rounded-xl bg-[#A78BFA]/8 border border-[#A78BFA]/20">
              <p className="text-sm text-gray-700 leading-relaxed">
                <span className="font-semibold text-[#0E0E12]">{p.s2.googleMapsLabel} </span>
                {p.s2.googleMaps}
              </p>
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#A78BFA] hover:underline mt-2 inline-block"
              >
                {p.s2.googleLink}
              </a>
            </div>
          </Section>

          {/* 3. WhatsApp */}
          <Section title={p.s3.title}>
            <p className="text-gray-600 leading-relaxed">{p.s3.body}</p>
            <ul className="mt-3 space-y-2">
              {p.s3.bullets.map((b: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#A78BFA] shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </Section>

          {/* 4. Datos recogidos */}
          <Section title={p.s4.title}>
            <p className="text-gray-600 leading-relaxed">{p.s4.body}</p>
          </Section>

          {/* 5. Derechos */}
          <Section title={p.s5.title}>
            <p className="text-gray-600 leading-relaxed mb-3">{p.s5.body}</p>
            <a
              href={`mailto:info@gravitatebikes.es`}
              className="inline-flex items-center gap-1.5 text-[#A78BFA] font-medium text-sm hover:underline"
            >
              info@gravitatebikes.es
            </a>
          </Section>

          {/* 6. Cambios */}
          <Section title={p.s6.title}>
            <p className="text-gray-600 leading-relaxed">{p.s6.body}</p>
          </Section>

          {/* Divider + back link */}
          <div className="border-t border-gray-100 pt-8 text-center">
            <p className="text-gray-400 text-sm">{p.footer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── helpers ── */

function Section({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      {title && (
        <h2 className="text-[#0E0E12] text-xl font-bold flex items-center gap-2">
          <span className="inline-block w-1 h-5 rounded-full bg-[#A78BFA]" />
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

function InfoTable({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <div className="mt-4 rounded-xl border border-gray-100 overflow-hidden">
      {rows.map(({ label, value }, i) => (
        <div
          key={i}
          className={`flex flex-col sm:flex-row sm:items-center px-5 py-3 gap-1 ${
            i % 2 === 0 ? "bg-gray-50" : "bg-white"
          }`}
        >
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider sm:w-36 shrink-0">
            {label}
          </span>
          <span className="text-sm text-gray-700">{value}</span>
        </div>
      ))}
    </div>
  );
}
