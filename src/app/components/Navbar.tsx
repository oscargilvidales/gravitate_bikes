"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";

const availableLocales = [
  { code: "es", label: "ES", name: "Español" },
  { code: "en", label: "EN", name: "English" },
  { code: "fr", label: "FR", name: "Français" },
  { code: "de", label: "DE", name: "Deutsch" },
];

type NavLabels = {
  inicio: string;
  alquiler: string;
  reparaciones: string;
  woom: string;
  quienesSomos: string;
  contacto: string;
};

type NavA11y = { menuOpen: string; menuClose: string; language: string; mainNav: string };

// Recibe solo los textos que necesita desde el layout (servidor), para no enviar los diccionarios completos al navegador.
export function Navbar({ lang, labels, a11y }: { lang: string; labels: NavLabels; a11y: NavA11y }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: `/${lang}`, label: labels.inicio },
    { href: `/${lang}/alquiler`, label: labels.alquiler },
    { href: `/${lang}/reparaciones`, label: labels.reparaciones },
    { href: `/${lang}/woom`, label: labels.woom },
    { href: `/${lang}/quienes-somos`, label: labels.quienesSomos },
    { href: `/${lang}/contacto`, label: labels.contacto },
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
            width={221}
            height={64}
            loading="eager"
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label={a11y.mainNav} className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href) ? "page" : undefined}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${isActive(href)
                ? "bg-[#A78BFA]/20 text-[#A78BFA]"
                : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop Language Switcher */}
        <div role="group" aria-label={a11y.language} className="hidden md:flex items-center gap-2 border-l border-white/20 pl-4 ml-2">
          {availableLocales.map((l) => {
            // Generate path for the language (replace /es with /en, etc.)
            const parts = pathname.split('/');
            parts[1] = l.code;
            const newPath = parts.join('/');
            return (
              <Link
                key={l.code}
                href={newPath || `/${l.code}`}
                hrefLang={l.code}
                lang={l.code}
                title={l.name}
                aria-current={lang === l.code ? "true" : undefined}
                className={`text-xs font-bold px-2 py-1 rounded transition-colors ${lang === l.code ? "bg-[#7C3AED] text-white" : "text-white/50 hover:text-white"
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
          aria-label={open ? a11y.menuClose : a11y.menuOpen}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav id="mobile-menu" aria-label={a11y.mainNav} className="md:hidden bg-[#0E0E12] border-t border-white/10 px-4 pb-4 pt-2">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              aria-current={isActive(href) ? "page" : undefined}
              className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${isActive(href)
                ? "bg-[#A78BFA]/20 text-[#A78BFA]"
                : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
            >
              {label}
            </Link>
          ))}
          {/* Mobile Language Switcher */}
          <div className="flex items-center gap-4 px-4 py-4 mt-2 border-t border-white/10">
            <Globe size={18} className="text-white/50" aria-hidden="true" />
            <div role="group" aria-label={a11y.language} className="flex gap-2">
              {availableLocales.map((l) => {
                const parts = pathname.split('/');
                parts[1] = l.code;
                const newPath = parts.join('/');
                return (
                  <Link
                    key={l.code}
                    href={newPath || `/${l.code}`}
                    hrefLang={l.code}
                    lang={l.code}
                    title={l.name}
                    aria-current={lang === l.code ? "true" : undefined}
                    onClick={() => setOpen(false)}
                    className={`text-sm font-bold px-3 py-1.5 rounded transition-colors ${lang === l.code ? "bg-[#7C3AED] text-white" : "bg-white/10 text-white/70"
                      }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
