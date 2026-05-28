const brands = [
  { name: "Fox", src: "/carrusel/fox.svg" },
  { name: "Giro", src: "/carrusel/giro-vector-logo.svg", scaleClass: "scale-[1.4]" },
  { name: "Maxxis", src: "/carrusel/maxxis-vector-logo.svg", scaleClass: "scale-[1.3]" },
  { name: "Mondraker", src: "/carrusel/mondraker-logo-vector.svg", scaleClass: "scale-[1.6]" },
  { name: "RockShox", src: "/carrusel/rockshox.svg" },
  { name: "Santa Cruz", src: "/carrusel/Santacruz_bycicles_logo.svg" },
  { name: "Shimano", src: "/carrusel/shimano.svg", scaleClass: "scale-[1.4]" },
  { name: "SRAM", src: "/carrusel/sram-5.svg", scaleClass: "scale-[1.4]" },
  { name: "Woom", src: "/carrusel/Woom_idMSQPEq8u_1.svg" },
  { name: "PRO", src: "/carrusel/pro-logo.svg", scaleClass: "scale-[1.4]" },
  { name: "Kryptonite", src: "/carrusel/kryptonite-logo.svg", scaleClass: "scale-[1.4]" },
  { name: "Troy Lee Designs", src: "/carrusel/troy-lee-designs-logo.svg", scaleClass: "scale-[1.4]" },
  { name: "JOE'S", src: "/carrusel/joes-logo.svg", scaleClass: "scale-[1.4]" },
  { name: "Hawkers", src: "/carrusel/hawkers-logo.svg", scaleClass: "scale-[1.4]" },
  { name: "Vittoria", src: "/carrusel/vittoria-logo.svg", scaleClass: "scale-[1.4]" },
  { name: "KENDA", src: "/carrusel/kenda-logo.svg", scaleClass: "scale-[1.4]" },
  { name: "CamelBak", src: "/carrusel/camelbak-logo.svg", scaleClass: "scale-[1.4]" },
  { name: "GURPIL", src: "/carrusel/gurpil-logo.svg", scaleClass: "scale-[1.4]" }
];

export function BrandCarousel() {
  return (
    <div className="bg-[#0E0E12] border-b border-white/10 py-8 overflow-hidden flex">
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "brandScroll 35s linear infinite",
          willChange: "transform",
        }}
      >
        {[...brands, ...brands, ...brands].map((brand, i) => (
          <div key={i} className="flex items-center justify-center mx-6 md:mx-10 shrink-0 w-32 h-16 md:w-44 md:h-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={brand.src}
              alt={brand.name}
              className={`w-full h-full object-contain opacity-60 transition-all duration-300 ${brand.scaleClass || "scale-100 "}`}
              style={{
                filter: "grayscale(100%) invert(100%) brightness(10)",
                mixBlendMode: "screen"
              }}
            />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes brandScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333333%); }
        }
      `}</style>
    </div>
  );
}
