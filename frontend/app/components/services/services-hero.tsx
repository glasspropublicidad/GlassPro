import { motion } from "framer-motion";
import { Button } from "~/ui/button";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

// Stagger each element independently — a single large block animating from
// y:40 with a fast ease produces a jarring jump on first paint. Smaller
// per-element y offsets and a gentler ease eliminate the snap.
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease },
  },
};

export function ServicesHero() {
  return (
    <section className="relative w-full min-h-screen px-6 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <img
          src="/services-imgs/services-hero.avif"
          alt="Cristal templado GlassPro"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0C4C78]/60 via-[#0C4C78]/40 to-white/10" />

      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl py-32"
      >
        <motion.span
          variants={fadeUp}
          className="inline-block py-1.5 px-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-xs font-semibold uppercase tracking-[0.16em] text-white mb-8 shadow-sm"
        >
          Soluciones Integrales en Vidrio
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[0.95] mb-8 text-white drop-shadow-[0_10px_28px_rgba(0,0,0,0.3)]"
        >
          Servicios de{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8fd7ff] via-[#47b6ff] to-[#0255D1]">
            Clase Premium
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Cristal templado, herrajes y acompañamiento integral para proyectos
          que exigen calidad certificada, precisión y un balance perfecto entre
          rendimiento y valor.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Button href="/contacto" variant="primary" size="lg">
            Solicitar Cotización
          </Button>
          <Button href="#servicios" variant="glass" size="lg">
            Explorar Servicios
          </Button>
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-white via-white/75 to-transparent z-10" />
    </section>
  );
}
