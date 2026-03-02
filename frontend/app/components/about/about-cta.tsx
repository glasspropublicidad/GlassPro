import { Button } from "~/ui/button";
import { motion } from "framer-motion";

export function AboutCTA() {
  return (
    <section className="w-full py-24 px-6 relative flex items-center justify-center z-10">
      <div className="w-full max-w-6xl relative z-10 rounded-[3rem] overflow-hidden bg-[#0C4C78] py-24 px-8 text-center shadow-[0_30px_100px_rgba(12,76,120,0.3)] border border-white/10">

        {/* Dynamic Glows */}
        <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-gradient-to-br from-[#47b6ff]/30 to-transparent rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-50%] right-[-20%] w-[600px] h-[600px] bg-gradient-to-tl from-[#0255D1]/40 to-transparent rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 mix-blend-overlay pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-3xl mx-auto flex flex-col items-center"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold tracking-widest uppercase mb-8 shadow-xl">
            Tu Proyecto Nos Importa
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 leading-tight drop-shadow-2xl">
            Confía la Calidad a los <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8fd7ff] to-white pb-2 inline-block">Expertos</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#8fd7ff]/80 font-medium mb-12 max-w-2xl px-4 text-balance">
            Garantizamos tiempos de entrega que superan las expectativas y una manufactura impecable de extremo a extremo.
          </p>

          <Button href="/contacto" variant="light" className="px-10 py-6 text-lg rounded-full font-bold shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all duration-300">
            Iniciar Proyecto Ahora
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
