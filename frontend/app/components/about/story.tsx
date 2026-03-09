import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const textContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease },
  },
};

export function Story() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section ref={containerRef} className="w-full py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <div className="relative h-[600px] w-full hidden lg:block">
          <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
            className="absolute top-10 left-0 w-2/3 h-2/3 rounded-3xl bg-gradient-to-br from-[#0C4C78]/5 to-[#0255D1]/10 border border-[#0255D1]/10 shadow-2xl backdrop-blur-sm overflow-hidden flex items-center justify-center p-8"
          >
            <div className="w-full h-full rounded-2xl bg-white/50 border border-white flex flex-col items-start justify-end p-6 shadow-[inset_0_0_20px_rgba(2,85,209,0.05)]">
              <svg className="w-12 h-12 text-[#0255D1] mb-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <span className="text-[#1a1f24] font-black text-4xl block">2008</span>
              <span className="text-[#373435]/60 text-sm font-medium uppercase tracking-widest">El Inicio</span>
            </div>
          </motion.div>
          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease, delay: 0.15 }}
            className="absolute bottom-10 right-0 w-2/3 h-2/3 rounded-3xl bg-white border border-[#0255D1]/10 shadow-[0_20px_60px_rgba(2,85,209,0.12)] z-10 p-8 flex flex-col justify-between"
          >
            <div className="w-16 h-16 rounded-full bg-[#0255D1]/10 flex items-center justify-center mt-2">
              <svg className="w-8 h-8 text-[#0255D1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <span className="text-[#1a1f24] font-black text-4xl block mb-2">Hoy</span>
              <span className="text-[#373435]/60 text-sm font-medium uppercase tracking-widest">Liderazgo Industrial</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-8"
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1f24] leading-[1.1] mb-8">
            Nuestra{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0C4C78] to-[#47b6ff] pb-2 inline-block">
              Historia
            </span>
          </motion.h2>

          <div className="space-y-6 text-xl text-[#373435]/70 leading-relaxed">
            <motion.p variants={fadeUp}>
              GlassPro nace de la ambición genuina de transformar el mercado del cristal templado. No nos conformamos con ser un proveedor más, nuestro verdadero objetivo es ser el{" "}
              <strong className="text-[#0255D1] font-semibold">aliado estratégico</strong> de tus proyectos arquitectónicos más ambiciosos.
            </motion.p>
            <motion.p variants={fadeUp}>
              Apostando firmemente por la maquinaria moderna y la precisión tecnológica, nuestro máximo diferenciador reside en un{" "}
              <strong className="text-[#0255D1] font-semibold">compromiso inquebrantable</strong> con la calidad milimétrica y los tiempos récord de entrega. Cada panel que sale de nuestras instalaciones es una obra de ingeniería diseñada para el éxito.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} className="mt-12 pl-6 border-l-2 border-[#0255D1]/30">
            <span className="block text-[#1a1f24] font-bold text-lg mb-2">
              "La precisión no es un accidente, es nuestro estándar diario."
            </span>
            <span className="text-[#373435]/50 text-sm uppercase tracking-wider font-semibold">
              Equipo Directivo GlassPro
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
