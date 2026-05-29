"use client";
import { useRef, useEffect, useState } from "react";

const brands = [
  { name: "Giro", src: "/carrusel/giro_logo.png", scaleClass: "scale-[3]" },
  { name: "Maxxis", src: "/carrusel/maxxis_logo.png", scaleClass: "scale-[3]" },
  { name: "Mondraker", src: "/carrusel/mondraker_logo.png", scaleClass: "scale-[5]" },
  { name: "RockShox", src: "/carrusel/rockshox_logo.png", scaleClass: "scale-[1.5]", square: true },
  { name: "Santa Cruz", src: "/carrusel/santacruz_logo.png", scaleClass: "scale-[1.5]", square: true },
  { name: "Shimano", src: "/carrusel/shimano_logo.png", scaleClass: "scale-[3]" },
  { name: "SRAM", src: "/carrusel/sram_logo.png", scaleClass: "scale-[3]" },
  { name: "Woom", src: "/carrusel/woom_logo.png" },
  { name: "PRO", src: "/carrusel/pro_logo.png", scaleClass: "scale-[1.5]", square: true },
  { name: "Kryptonite", src: "/carrusel/kryptonite_logo.png", scaleClass: "scale-[3]" },
  { name: "Troy Lee Designs", src: "/carrusel/tld_logo.png", scaleClass: "scale-[3]" },
  { name: "JOE'S", src: "/carrusel/joes_logo.png", darkLogo: true },
  { name: "Hawkers", src: "/carrusel/hawkers_logo.png", scaleClass: "scale-[1.5]", darkLogo: true },
  { name: "Vittoria", src: "/carrusel/vittoria_logo.png", scaleClass: "scale-[3]" },
  { name: "KENDA", src: "/carrusel/kenda_logo.png" },
  { name: "CamelBak", src: "/carrusel/camelbak_logo.png", scaleClass: "scale-[1.5]", square: true },
  { name: "Fox Shox", src: "/carrusel/fox_logo.png", offsetY: "12px", square: true },
  { name: "GURPIL", src: "/carrusel/gurpil_logo.png" },
];

// Velocidad de auto-scroll en píxeles por frame (≈60fps)
const AUTO_VEL = -0.4;
// Factor de fricción: cuánto de la velocidad se conserva cada frame durante la inercia
const FRICTION = 0.97;
// Umbral para considerar que la inercia ha terminado y volver al auto-scroll
const SNAP_THRESHOLD = 0.05;

/** Devuelve el margen lateral en px según el tamaño visual del logo.
 *  Los logos cuadrados reciben menos margen que los panorámicos a igual escala. */
function getMxPx(scaleClass?: string, square?: boolean): number {
  if (!scaleClass) return square ? 30 : 44;
  const m = scaleClass.match(/scale-\[([\d.]+)\]/);
  if (!m) return square ? 30 : 44;
  const s = parseFloat(m[1]);
  if (s >= 5) return square ? 70 : 96;
  if (s >= 3) return square ? 50 : 72;
  if (s >= 1.5) return square ? 36 : 56;
  return square ? 30 : 44;
}

export function BrandCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  // Estado de la física (refs para evitar re-renders en el loop)
  const posX = useRef(0);          // posición actual en px
  const velX = useRef(AUTO_VEL);   // velocidad actual en px/frame
  const isDragging = useRef(false);
  const isInertia = useRef(false);
  const lastClientX = useRef(0);
  const lastMoveTime = useRef(0);
  const dragVel = useRef(0);       // velocidad medida durante el drag

  // Solo para cambiar el cursor con React state
  const [grabbing, setGrabbing] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const tick = () => {
      if (!isDragging.current) {
        if (isInertia.current) {
          // Blend suave desde la velocidad de inercia hacia AUTO_VEL
          velX.current = velX.current * FRICTION + AUTO_VEL * (1 - FRICTION);
          if (Math.abs(velX.current - AUTO_VEL) < SNAP_THRESHOLD) {
            velX.current = AUTO_VEL;
            isInertia.current = false;
          }
        }

        posX.current += velX.current;

        // Loop sin saltos: cuando pasa un segmento (1/3 del total), rebobina
        const segW = track.scrollWidth / 3;
        if (segW > 0) {
          if (posX.current < -segW) posX.current += segW;
          if (posX.current > 0) posX.current -= segW;
        }

        track.style.transform = `translateX(${posX.current}px)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // ── Drag handlers ──────────────────────────────────────────────────────────

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    isInertia.current = false;
    lastClientX.current = e.clientX;
    lastMoveTime.current = performance.now();
    dragVel.current = 0;
    setGrabbing(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    e.preventDefault();
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !trackRef.current) return;

    const now = performance.now();
    const dt = now - lastMoveTime.current;
    const dx = e.clientX - lastClientX.current;

    // Velocidad instantánea en px/frame (asume 60fps = 16.67ms/frame)
    if (dt > 0) {
      dragVel.current = (dx / dt) * 16.67;
    }

    posX.current += dx;
    lastClientX.current = e.clientX;
    lastMoveTime.current = now;

    trackRef.current.style.transform = `translateX(${posX.current}px)`;
  };

  const onPointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setGrabbing(false);

    // Si el usuario soltó rápido, aplica inercia con su velocidad; si no, vuelve al auto-scroll suavemente
    const releasedWithMomentum = Math.abs(dragVel.current) > 0.5;
    velX.current = releasedWithMomentum ? dragVel.current : AUTO_VEL;
    isInertia.current = true;
  };

  return (
    <div
      className="bg-[#0E0E12] border-b border-white/10 py-6 overflow-hidden flex select-none"
      style={{ cursor: grabbing ? "grabbing" : "grab" }}
    >
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        style={{ display: "flex", width: "max-content", willChange: "transform" }}
      >
        {[...brands, ...brands, ...brands].map((brand, i) => (
          <div
            key={i}
            className="flex items-center justify-center shrink-0 w-32 h-14 md:w-44 md:h-18"
            style={{ marginLeft: getMxPx(brand.scaleClass, brand.square), marginRight: getMxPx(brand.scaleClass, brand.square) }}
          >
            <div
              className={`w-full h-full opacity-45 hover:opacity-100 transition-opacity duration-300 ${brand.scaleClass || "scale-100"}`}
              style={{
                backgroundColor: "white",
                maskImage: `url(${brand.src})`,
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskImage: `url(${brand.src})`,
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                transform: `translateY(${brand.offsetY || "0px"}) translateZ(0)`,
                pointerEvents: "none",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
