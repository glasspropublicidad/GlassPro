import { motion } from "framer-motion";
import { Button } from "~/ui/button";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease },
  },
};

const fadeUpSlow = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease },
  },
};

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] w-full items-end overflow-hidden bg-[#eef2f7] pt-28 md:items-center md:pt-32">
      {/* Background rendered normally — no framer-motion scale/opacity animation.
          Animating scale on a full-screen GPU layer can cause a compositing flash
          on first paint while the oversized texture is being set up. */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/home-imgs/hero-bg.avif"
          alt="Lamina de vidrio templado"
          className="h-full w-full object-cover object-[66%_center] md:object-center"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#0C4C78]/10 via-[#0C4C78]/10 to-[#0C4C78]/0" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-white via-white/75 to-transparent md:h-56" />

      <div className="container relative z-10 mx-auto px-6 pb-16 md:pb-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <motion.div
            className="space-y-8 lg:col-span-7"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-5">
              <motion.h1
                variants={fadeUp}
                className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.04em] text-white drop-shadow-[0_10px_28px_rgba(0,0,0,0.42)] md:text-7xl lg:text-[6.3rem]"
              >
                INNOVATION
                <br />
                <span className="bg-gradient-to-r from-[#8fd7ff] via-[#47b6ff] to-[#0255D1] bg-clip-text text-transparent">GLASS</span> SOLUTIONS
              </motion.h1>
              <motion.p
                variants={fadeUpSlow}
                className="max-w-2xl text-base leading-relaxed text-[#373435]/90 md:text-xl"
              >
                Diseñamos, fabricamos y suministramos soluciones de cristal templado con
                estandares industriales, soporte tecnico y ejecucion confiable para
                proyectos comerciales y residenciales.
              </motion.p>
            </div>

            <motion.div variants={fadeUpSlow} className="flex flex-col gap-4 sm:flex-row">
              <Button href="/servicios" variant="primary" className="px-8 py-5">
                <span className="flex items-center gap-2">
                  Nuestros Servicios
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Button>
              <Button href="/contacto" variant="light" className="px-8 py-5">
                Cotizar Proyecto
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
