import { motion } from "framer-motion";
import { Button } from "~/ui/button";

export function ServicesCta() {
  return (
    <section className="relative w-full py-24 px-6 bg-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-[#0255D1]/5 to-transparent rounded-full blur-[80px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-5xl"
      >
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0255D1] via-[#0C4C78] to-[#0255D1] p-12 md:p-16 text-center shadow-[0_30px_80px_-20px_rgba(2,85,209,0.35)]">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-60 w-60 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-[#47b6ff]/15 blur-2xl" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-white/[0.03] blur-xl" />

          {/* Content */}
          <div className="relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full border border-white/20 bg-white/10 text-xs font-semibold uppercase tracking-[0.16em] text-white/90 mb-6">
              Comenzar Proyecto
            </span>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-[1.1] tracking-[-0.04em]">
              ¿Listo para llevar tu proyecto{" "}
              <br className="hidden md:block" />
              al siguiente nivel?
            </h2>

            <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
              Contáctanos para una cotización personalizada. Nuestro equipo
              de especialistas te asesora sin compromiso para encontrar la
              solución ideal en cristal templado y herrajes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contacto" variant="light" size="lg" className="shadow-xl">
                Solicitar Cotización
              </Button>
              <Button href="/portafolio" variant="glass" size="lg">
                Ver Portafolio
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
