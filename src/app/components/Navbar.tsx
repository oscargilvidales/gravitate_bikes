"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation, Locale } from "@/i18n/useTranslation";

const availableLocales = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "de", label: "DE" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { t, lang } = useTranslation();

  const links = [
    { href: `/${lang}`, label: t.nav.inicio },
    { href: `/${lang}/alquiler`, label: t.nav.alquiler },
    { href: `/${lang}/reparaciones`, label: t.nav.reparaciones },
    { href: `/${lang}/woom`, label: t.nav.woom },
    { href: `/${lang}/quienes-somos`, label: t.nav.quienesSomos },
    { href: `/${lang}/contacto`, label: t.nav.contacto },
  ];

  const isActive = (href: string) =>
    href === `/${lang}` ? pathname === `/${lang}` : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-[#0E0E12]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-24 flex items-center justify-between">

        {/* Logo */}
        <Link
          href={`/${lang}`}
          className="flex items-center group shrink-0"
          onClick={() => setOpen(false)}
        >
          {/* Logo */}
          <Image
            src="/logo.png"
            alt="Gravitate Bikes – San Pedro"
            width={120}
            height={64}
            className="h-16 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive(href)
                  ? "bg-[#A78BFA]/20 text-[#A78BFA]"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop Language Switcher */}
        <div className="hidden md:flex items-center gap-2 border-l border-white/20 pl-4 ml-2">
          {availableLocales.map((l) => {
            // Generate path for the language (replace /es with /en, etc.)
            const parts = pathname.split('/');
            parts[1] = l.code;
            const newPath = parts.join('/');
            return (
              <Link
                key={l.code}
                href={newPath || `/${l.code}`}
                className={`text-xs font-bold px-2 py-1 rounded transition-colors ${
                  lang === l.code ? "bg-[#A78BFA] text-white" : "text-white/50 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/80 hover:text-white p-2 rounded-md hover:bg-white/5 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0E0E12] border-t border-white/10 px-4 pb-4 pt-2">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                isActive(href)
                  ? "bg-[#A78BFA]/20 text-[#A78BFA]"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {label}
            </Link>
          ))}
          {/* Mobile Language Switcher */}
          <div className="flex items-center gap-4 px-4 py-4 mt-2 border-t border-white/10">
            <Globe size={18} className="text-white/50" />
            <div className="flex gap-2">
              {availableLocales.map((l) => {
                const parts = pathname.split('/');
                parts[1] = l.code;
                const newPath = parts.join('/');
                return (
                  <Link
                    key={l.code}
                    href={newPath || `/${l.code}`}
                    onClick={() => setOpen(false)}
                    className={`text-sm font-bold px-3 py-1.5 rounded transition-colors ${
                      lang === l.code ? "bg-[#A78BFA] text-white" : "bg-white/10 text-white/70"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
