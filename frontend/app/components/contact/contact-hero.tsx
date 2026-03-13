import { motion } from "framer-motion";

export function ContactHero() {
  return (
    <section className="relative w-full min-h-[70svh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-16 z-10">
      {/* Background Image */}
      <div className="absolute inset-0 -z-30">
        <img
          src="/contact-imgs/contact-hero.avif"
          alt="Fondo Contacto"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#0C4C78]/60 via-[#0255D1]/20 to-[#1C75BC]/30" />

      {/* Animated orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#8fd7ff]/25 to-[#0255D1]/10 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#0C4C78]/30 to-[#47b6ff]/15 blur-3xl pointer-events-none"
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-15 pointer-events-none" />

      {/* Bottom fade to white */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />

      <div className="container relative z-10 mx-auto px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold tracking-widest uppercase mb-8 shadow-xl">
            Contáctanos
          </span>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-6">
            Hagamos Realidad{" "}
            <span className="bg-gradient-to-r from-[#8fd7ff] via-white to-[#8fd7ff] bg-clip-text text-transparent inline-block pb-2">
              Tu Proyecto
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-medium">
            Cuéntanos los detalles de tu proyecto y un especialista te contactará
            en menos de 24 horas con una solución a la medida.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
